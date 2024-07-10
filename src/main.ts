#!/usr/bin/env node
//Tem que manter o "shebang" p ser executavel

import { spawn } from "child_process";
import path from "path";
import fs from "fs";
import { stdout } from "process";
import { input, select } from "@inquirer/prompts";

type frameworks = "React" | "Default";
type styles = "Tailwind" | "Styled-Components" | "Default";

interface OptionsProject {
  framework: frameworks;
  style: styles;
}

class main {
  private _projectName = "";
  private _options: OptionsProject = {
    framework: "Default",
    style: "Default",
  };
  private _projectPath = "";

  constructor() {
    this.start();
  }

  protected async start() {
    await this.projectName();
    this.projectPath();
    await this.projectOptions();
    console.log(this);
    // const makeDirProj = spawn("mkdir", [this._projectName]);
  }

  private async projectName() {
    // Pede o nome do projeto
    const projectName =
      (await input({
        message: "Insira um nome para o projeto:",
      })) || "project-uol-compass";
    this._projectName = projectName;
  }

  private async projectPath() {
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
  }

  private async projectOptions() {
    const framework: frameworks = await select({
      message: "Qual framework você quer usar?",
      theme: {
        icon: { cursor: "💙" },
      },
      choices: [
        {
          name: "React",
          value: "React",
        },
        {
          name: "Default",
          value: "Default",
        },
      ],
    });
    const style: styles = await select({
      message: "Qual tipo de ",
      choices: [
        {
          name: "Tailwind",
          value: "Tailwind",
        },
        {
          name: "Styled-Components",
          value: "Styled-Components",
        },
        {
          name: "Default",
          value: "Default",
        },
      ],
    });
    this._options = { style, framework };
  }
}

new main();
