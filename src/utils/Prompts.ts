import { input, select } from "@inquirer/prompts";
import { prompts } from "../interfaces";

export default class Prompts extends prompts.AbstractPrompts {
  public async projectName(): Promise<string> {
    const userInput: string =
      (await input({
        message: "Bem-vindo! Insira um nome para projeto:",
      })) || "project-uol-compass";
    return userInput.trim();
  }

  public async framework(): Promise<prompts.frameworks> {
    const userInput: prompts.frameworks = await select({
      message: "Gostaria de usar algum framework?",
      choices: [
        {
          name: "Default",
          value: "Default",
        },
        {
          name: "React",
          value: "React",
        },
      ],
    });
    return userInput;
  }

  public async style(): Promise<prompts.styles> {
    const userInput: prompts.styles = await select({
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

    return userInput;
  }
}
