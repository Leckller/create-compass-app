import { input, select } from "@inquirer/prompts";
import { prompts } from "../interfaces";

export default class Prompts extends prompts.AbstractPrompts {
  public async projectName(): Promise<string> {
    const userInput: string =
      (await input({
        default: "project-compass-uol",
        message: "Bem-vindo! Insira um nome para projeto:",
      }));
    return userInput.trim();
  }

  public async framework(): Promise<prompts.frameworks> {
    const userInput: prompts.frameworks = await select({
      message: "Gostaria de usar algum framework?",
      choices: [
        {
          name: "Default",
          value: {
            type: "Default",
            path: "/Base",
          },
          description: "Apenas o bom e velho typescript"
        },
        {
          name: "WebPack",
          value: {
            type: "WebPack",
            path: "/Others/WebPack",
          },
          description: "Empacotador de módulos para typescript"
        },
        {
          name: "React + Vite",
          value: {
            type: "React",
            path: "/Others/React",
          },
          description: "Mark Zuckerberg ficaria orgulhoso de sua escolha"
        },
      ],
    });
    return userInput;
  }

  public async style(): Promise<prompts.styles> {
    const userInput: prompts.styles = await select({
      message: "Escolha um framework de estilização:",
      choices: [
        {
          name: "Tailwind",
          value: "Tailwind",
          description: "Estilizações mais rápidas!",
        },
        // {
        //   name: "Styled-Components",
        //   value: "Styled-Components",
        //   description: "Estilizações por componentes!",
        // },
        {
          name: "Default",
          value: "Default",
          description: "CSS puro!",
        },
      ],
    });

    return userInput;
  }

  public async manager(): Promise<prompts.stateManager> {
    const userInput: prompts.stateManager = await select({
      message: "Escolha um framework para gerenciar o estado da aplicação:",
      choices: [
        {
          name: "Redux",
          value: "Redux",
          description: "Mais prático e moderno!",
        },
        // {
        //   name: "Context-API",
        //   value: "Context-API",
        //   description: "Solução nativa do react para gerenciar estados!",
        // },
        {
          name: "Default",
          value: "Default",
          description: "Quem sabe na próxima...",
        },
      ],
    });

    return userInput;
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
