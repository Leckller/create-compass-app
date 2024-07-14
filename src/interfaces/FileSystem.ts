export abstract class AbstractFileSystem {
  public fileExists(dirName: string): boolean {
    return false;
  }
  public createRootProject(projectName: string): void {}

  public createPathProject(dirName: string): string {
    return "";
  }

  public copyTemplate(
    mainPath: string,
    projectPath: string,
    template: string
  ): void {}

  public goToDir(dirPath: string): void {}

  public installDependencies(npmPackage?: string): void {}
}
