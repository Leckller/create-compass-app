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

  public async addDependency(
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
}
