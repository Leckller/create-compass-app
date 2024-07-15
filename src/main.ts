#!/usr/bin/env node
//Tem que manter o "shebang" p ser executavel

import { prompts, fsFunctions } from "./interfaces";
import Prompts from "./utils/Prompts";
import FsFunctions from "./utils/FileSystem";
import Dependencies from "./helpers/Dependencies";
import { AbstractDependencies } from "./interfaces/Dependencies";
import * as allDeps from "./utils/Dependencies";
import path from "path";

class main {
  private _projectName = "";
  private _projectPath = "";
  private _templatePath = path.join(process.cwd(), "templates");
  private _options: prompts.OptionsProject = {
    framework: { path: "", type: "Default" },
    style: "Default",
    manager: "Default",
  };

  constructor(
    protected prompts: prompts.AbstractPrompts,
    protected fsFunctions: fsFunctions.AbstractFileSystem,
    protected deps: AbstractDependencies
  ) {
    this.start();
  }

  protected async start() {
    try {

      // Criação do diretório do projeto
      await this.defineProj();

      // Configurações de usuário + cópia dos arquivos
      this._options.framework = await this.prompts.framework();

      // Copia o arquivo base
      this.copyBaseTemplate();

      // Altera o caminho atual para o diretório do novo projeto
      // this.fsFunctions.goToDir(this._projectName);

      // Realizando a cópia do template
      await this.askOptionsAndCopy();

      // Configura o package.json de acordo com as opções do usuário
      await this.addAndInstDeps();
      // const pathPackage = this._projectPath+"/package.json";

      // this.deps.addDependency(false, allDeps.ReactDeps[0], pathPackage);
    } catch (err) {
      console.log(err)
    }
  }

  private async defineProj() {
    this._projectName = await this.prompts.projectName();
    if (this.fsFunctions.fileExists(this._projectName)) {
      console.log(`Erro: Já existe uma pasta com o nome ${this._projectName}`);
      process.exit(1);
    };
    this._projectPath = this.fsFunctions.createPathProject(this._projectName);
    this.fsFunctions.createRootProject(this._projectPath);
  }

  private async askOptionsAndCopy() {
    if (this._options.framework.type === "Default") {
      this.UserAnswerToInstallDeps();
    } else {
      this._options.style = await this.prompts.style();
      this._options.manager = await this.prompts.manager();

      if (this._options.style !== "Default") {
        this.fsFunctions.copyTemplate(
          this._templatePath,
          this._projectPath,
          `/Others/${this._options.style}`.trim()
        );
      }
      if (this._options.manager !== "Default") {
        this.fsFunctions.copyTemplate(
          this._templatePath,
          this._projectPath,
          `/Others/${this._options.manager}`.trim()
        );
      }
    }
  }

  private copyBaseTemplate() {
    if (this._options.framework.type === 'Default') {
      this.fsFunctions.copyTemplate(
        this._templatePath,
        this._projectPath,
        this._options.framework.path
      );
    } else {
      this.fsFunctions.copyTemplate(
        this._templatePath,
        this._projectPath,
        "/Base"
      );
      this.fsFunctions.copyTemplate(
        this._templatePath,
        this._projectPath,
        this._options.framework.path
      );
    }
  }

  private async addAndInstDeps() {
    const pathPackage = this._projectPath + "/package.json";

    await this.deps.addDependency(false, allDeps.ReactDeps[0], pathPackage);
    await this.deps.addDependency(true, allDeps.ReactDeps[1], pathPackage);

    switch (this._options.style) {
      case "Tailwind":
        const { TailwindDeps } = allDeps;
        await this.deps.addDependency(true, TailwindDeps[1], pathPackage);
        break;
      case "Styled-Components":
        this.fsFunctions.installDependencies();
        break;
      case "Default":
        break;
    }

    switch (this._options.manager) {
      case "Context-API":
        break;
      case "Redux":
        const { ReduxKitDeps } = allDeps;
        await this.deps.addDependency(false, ReduxKitDeps[0], pathPackage);
        break;
      case "Default":
        break;
    }

    await this.UserAnswerToInstallDeps();
  }

  private async UserAnswerToInstallDeps() {
    const userAwnser = await this.prompts.npmInstall();
    if (userAwnser) {
      this.fsFunctions.installDependencies();
    }
  }
}

const FS = new FsFunctions();
const PMP = new Prompts();
const DEP = new Dependencies();

new main(PMP, FS, DEP);
