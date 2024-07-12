import fs from "fs/promises";
import { dependencies } from "../interfaces";

// Acabei não usando isso agora, mas devo mudar a lógica para utilizar esse aqui mesmo
export default class Dependencies {
  public async readFile(
    packagePath: string
  ): Promise<dependencies.PackageBase> {
    const data = await fs.readFile(packagePath);
    const json = JSON.parse(data.toString());
    return json;
  }

  public async writeFile(
    isDevDep: boolean,
    newDep: Partial<dependencies.dependencies>,
    pathFile: string
  ): Promise<any> {
    const data = await this.readFile(pathFile);
    const addDep = isDevDep
      ? {
          ...data,
          devDependencies: {
            ...data.devDependencies,
            ...newDep,
          },
        }
      : {
          ...data,
          dependencies: {
            ...data.dependencies,
            ...newDep,
          },
        };
    await fs.writeFile(pathFile, JSON.stringify({ ...addDep }));
    return addDep;
  }

  public async addDependencies(
    isDevDep: boolean,
    dependency:
      | Partial<dependencies.dependencies>
      | Partial<dependencies.dependencies>[],
    projectPath: string
  ) {
    if (Array.isArray(dependency)) {
      for (let dep of dependency) {
        this.addDependencies(isDevDep, dep, projectPath);
      }
    } else {
      this.writeFile(isDevDep, dependency, projectPath);
    }
  }
}
