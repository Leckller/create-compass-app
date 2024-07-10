#!/usr/bin/env node
//Tem que manter o "shebang" p ser executavel

import { spawn } from "child_process";
import path from "path";
import fs from "fs";
import { stdout } from "process";
import { input } from "@inquirer/prompts";

class main {
  private _projectName = "";
  private _projectPath = "";

  constructor() {
    this.projectName();
  }

  public async projectName() {
    // Pede o nome do projeto
    const projectName = await input({
      message: "Insira um nome para o projeto:",
    });
    this._projectName = projectName;
    this.projectPath();
  }

  public projectPath() {
    // cria o caminho para o diretorio do projeto
    const projectPath = path.join(process.cwd(), this._projectName);
    //verifica se já existe um diretorio com esse nome.
    if (fs.existsSync(projectPath)) {
      stdout.write(
        `Erro: Já existe uma pasta com o nome "${this._projectName}"`
      );
      process.exit(1);
    }
    this._projectPath = projectPath;
    const makeDirProj = spawn("mkdir", [this._projectName]);
  }
}

new main();
