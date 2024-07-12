export type frameworks = "React" | "Default";
export type styles = "Tailwind" | "Styled-Components" | "Default";
export type stateManager = "Context-API" | "Redux" | "Default";

export interface OptionsProject {
  framework: frameworks;
  style: styles;
  manager: stateManager;
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

  manager(): Promise<stateManager> {
    return new Promise((resolve, _reject) => {
      resolve("Context-API");
    });
  }
}
