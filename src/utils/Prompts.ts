import { input, select, checkbox } from "@inquirer/prompts";
import { prompts } from "../interfaces";

export default class Prompts implements prompts.AbstractPrompts {
  public async projectName(): Promise<string> {
    const userInput: string =
      (await input({
        default: "project-compass-uol",
        message: "Bem-vindo! Insira um nome para projeto:",
      }));
    return userInput.trim();
  }

  public async projectType(): Promise<prompts.projectTypes> {
    const userInput: prompts.projectTypes = await select({
      message: "Qual seria o tipo de projeto?",
      choices: [
        {
          name: "FrontEnd",
          value: "frontend",
        },
        {
          name: "BackEnd",
          value: "backend",
        },
      ],
    });
    return userInput;
  }

  public async frontFrameworks(): Promise<any> {
    const mainOption = await select({
      message: "Qual o framework principal do seu projeto?",
      choices: [
        {
          name: "WebPack",
          value: "webPack",
          description: "Empacotador de módulos para typescript"
        },
        {
          name: "React + Vite",
          value: "react",
          description: "Mark Zuckerberg ficaria orgulhoso de sua escolha"
        },
      ],
    });
    if (mainOption === "react") {
      const styleOptions = await select({
        message: "Framework(s) adicionais:",
        default: "css",
        choices: [{ name: "Tailwind", value: "tailwind" }, { name: "CSS", value: "css" }]
      });
      const managerOptions = await select({
        message: "Escolha um framework para gerenciar o estado da aplicação:",
        choices: [
          {
            name: "Redux",
            value: "Redux",
            description: "Mais prático e moderno!",
          },
          {
            name: "Context-API",
            value: "Context-API",
            description: "Solução nativa do react para gerenciar estados!",
          },
          {
            name: "Default",
            value: undefined,
            description: "Quem sabe na próxima...",
          },
        ],
      })
      return { mainOption, managerOptions, styleOptions }
    }
    return { mainOption };
  }

  public async backFrameworks(): Promise<any> {
    const mainOption = await select({
      message: "Qual o framework principal do seu projeto?",
      choices: [
        { name: "Express", value: "express" },
        { name: "Nest", value: "nest" },
      ],
    });
    switch (mainOption) {
      case ("Express"):
        const archOptions = await select({
          message: "Arquitetura do seu projeto:",
          choices: [
            {
              name: "MVC",
              description: "Model - View - Controller",
              value: "MVC",
            },
            {
              name: "MSC",
              description: "Model - Service - Controller",
              value: "MSC",
            },
          ],
        })
        const devOptions = await checkbox({
          message: "Framework(s) adicionais:",
          choices: [
            {
              name: "Morgan",
              value: "morgan",
            },
            {
              name: "Body-Parser",
              value: "bordyParser",
            },
            {
              name: "Json Web Token (JWT)",
              value: "jwt",
            },
          ]
        })
        return { mainOption, devOptions, archOptions }
      case ("Nest"):
        return { mainOption };
      default:
        return mainOption;
    }
  }


  public async npmInstall(): Promise<boolean> {
    const userInput: boolean = await select({
      message: "Deseja instalar as dependências de projeto?",
      choices: [
        {
          name: "Sim",
          value: true,
        },
        {
          name: "Não",
          value: false,
        },
      ],
    });
    return userInput;
  }
}
