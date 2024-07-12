import path from "path";
import fs from "fs";
import { fsFunctions } from "../interfaces";
import { spawn } from "child_process";
import { stdout } from "process";
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
      stdout.write(`Erro: Já existe uma pasta com o nome ${dirName}`);
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

  public goToDir(dirPath: string): void {
    process.chdir(dirPath);
  }
}
