export interface dependencies {
  redux: string[];
  tailwind: string[];
  react: string[];
  styledComponents: string[];
}

export interface PackageBase {
  name: string;
  version: string;
  main: string;
  scripts: {
    [prop: string]: string;
  };
  dependencies: dependencies;
  devDependencies: dependencies;
}

export abstract class AbstractDependencies {
  public async readFile(packagePath: string): Promise<PackageBase> {
    return new Promise((res, rej) => {});
  }
  public async writeFile(
    isDevDep: boolean,
    newDep: Partial<dependencies>,
    pathFile: string
  ): Promise<any> {}

  public async addDependencies(
    isDevDep: boolean,
    dependency: Partial<dependencies> | Partial<dependencies>[],
    projectPath: string
  ) {}
}
