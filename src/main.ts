#!/usr/bin/env node
//Tem que manter o "shebang" p ser executavel

import { prompts, fsFunctions, installer } from "./interfaces";
import Prompts from "./utils/Prompts";
import FsFunctions from "./utils/FileSystem";

class main {
  private _projectName = "";
  private _projectPath = "";
  private _options: prompts.OptionsProject = {
    framework: { path: "", type: "Default" },
    style: "Default",
    manager: "Default",
  };

  constructor(
    protected prompts: prompts.AbstractPrompts,
    protected fsFunctions: fsFunctions.AbstractFileSystem
  ) {
    this.start();
  }

  protected async start() {
    // Criação do diretório do projeto

    this._projectName = await this.prompts.projectName();
    if (this.fsFunctions.fileExists(this._projectName)) process.exit(1);
    this._projectPath = this.fsFunctions.createPathProject(this._projectName);
    this.fsFunctions.createRootProject(this._projectPath);

    // Configurações de usuário + cópia dos arquivos

    this._options.framework = await this.prompts.framework();
    this.fsFunctions.copyTemplate(
      __dirname,
      this._projectPath,
      this._options.framework.path
    );

    // Altera o caminho atual para o diretório do novo projeto
    this.fsFunctions.goToDir(this._projectPath);

    if (this._options.framework.type === "Default") {
      const userAwnser = await this.prompts.npmInstall();
      if (userAwnser) {
        this.fsFunctions.installDependencies();
      }
    } else {
      this._options.style = await this.prompts.style();
      this._options.manager = await this.prompts.manager();
      // Realizando a cópia do template
      if (this._options.style !== "Default") {
        this.fsFunctions.copyTemplate(
          __dirname,
          this._projectPath,
          `/Others/${this._options.style}`.trim()
        );
      }
      if (this._options.manager !== "Default") {
        this.fsFunctions.copyTemplate(
          __dirname,
          this._projectPath,
          `/Others/${this._options.manager}`.trim()
        );
      }
    }

    // Configura o package.json de acordo com as opções do usuário

    // switch (this._options.style) {
    //   case "Tailwind":
    //     this.installer.Tailwind();
    //     break;
    //   case "Styled-Components":
    //     this.installer.StyledComponents();
    //     break;
    //   case "Default":
    //     break;
    // }

    // switch (this._options.manager) {
    //   case "Context-API":
    //     break;
    //   case "Redux":
    //     this.installer.Redux();
    //     break;
    //   case "Default":
    //     break;
    // }
  }
}

const FS = new FsFunctions();
const PMP = new Prompts();

new main(PMP, FS);
