export type frameworks = { type: "React" | "WebPack", path: string };
export type styles = "Tailwind" | "Styled-Components" | "Default";
export type stateManager = "Context-API" | "Redux" | "Default";
export type projectTypes = "frontend" | "backend" | "terminal"

export interface OptionsProject {
  framework: frameworks;
  style: styles;
  manager: stateManager;
}

export interface AbstractPrompts {
  projectName(): Promise<string>
  projectType(): Promise<projectTypes>

  backFrameworks(): Promise<any>
  // Ou
  frontFrameworks(): Promise<any>

  npmInstall(): Promise<boolean>
}
