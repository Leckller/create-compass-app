export type frameworks = "React" | "Default";
export type styles = "Tailwind" | "Styled-Components" | "Default";

export interface OptionsProject {
  framework: frameworks;
  style: styles;
}

export abstract class AbstractPrompts {
  projectName(): Promise<string> {
    return new Promise((resolve, _reject) => {
      resolve("project-uol-compass".trim());
    });
  }
  framework(): Promise<frameworks> {
    return new Promise((resolve, _reject) => {
      resolve("React");
    });
  }
  style(): Promise<styles> {
    return new Promise((resolve, _reject) => {
      resolve("Tailwind");
    });
  }
}
