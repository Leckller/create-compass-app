import path from "path";
import fs from "fs";
import { fsFunctions } from "../interfaces";
import { execSync, spawn } from "child_process";
import copyDirectory from "../helpers/copyDirectory";

export default class FileSystem extends fsFunctions.AbstractFileSystem {
  public createRootProject(projectPath: string): void {
    // Executa o comando de criação de diretório
    spawn("mkdir", [projectPath]);
  }

  public fileExists(dirName: string): boolean {
    /* 
      process.cwd() retorna o caminho para o diretório 
      em que o script está sendo rodado.
    */
    const verify = fs.existsSync(this.createPathProject(dirName));
    if (verify) {
      return true;
    }
    return verify;
  }

  public createPathProject(dirName: string): string {
    const projectPath = path.join(process.cwd(), dirName);
    return projectPath;
  }

  public copyTemplate(
    pathToCopy: string,
    projectPath: string,
    template: string
  ): void {
    const templatePath: string = path.join(pathToCopy, "templates", template);
    copyDirectory(templatePath, projectPath);
  }

  public goToDir(dirName: string): void {
    execSync(`cd ${dirName}`)
  }

  public installDependencies(npmPackage?: string): void {
    // instalador
    if (!npmPackage) {
      execSync(`npm install`);
      return;
    }
    execSync(`npm install ${npmPackage}`);
  }
}
