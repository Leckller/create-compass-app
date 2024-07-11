export abstract class AbstractFileSystem {
  public fileExists(dirName: string): boolean {
    return false;
  }
  public createRootProject(projectName: string): void {}

  public createPathProject(dirName: string): string {
    return "";
  }
}
