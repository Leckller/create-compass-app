export interface dependencies {
  [prop: string]: string;
}

export type constDeps = [dependencies, dependencies, object];

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
    return new Promise((res, rej) => { });
  }
  public async addDependency(
    isDevDep: boolean,
    newDep: Partial<dependencies>,
    pathFile: string
  ): Promise<any> { }

  public async setScripts(clearScripts: boolean, scripts: object, pathFile: string): Promise<any> {
  }
}
