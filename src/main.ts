#!/usr/bin/env node
//Tem que manter o "shebang" p ser executavel

import { prompts, fsFunctions } from "./interfaces";
import Prompts from "./utils/Prompts";
import FsFunctions from "./utils/FileSystem";

class main {
  private _projectName = "";
  private _projectPath = "";
  private _options: prompts.OptionsProject = {
    framework: "Default",
    style: "Default",
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
    // Configurações de usuário
    this._options.framework = await this.prompts.framework();
    this._options.style = await this.prompts.style();
    this.fsFunctions.copyTemplate(__dirname, this._projectPath);
  }
}

new main(new Prompts(), new FsFunctions());
