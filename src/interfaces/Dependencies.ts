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
  public async readFile(packagePath: string): Promise<any> {
    return new Promise((res, rej) => { });
  }
  public async writeInJson(key: string, pathFile: string, obj: object, clear = false) { }
}
