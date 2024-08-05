import fs from "fs/promises";

export default class Dependencies {
  public async readFile(packagePath: string): Promise<any> {
    const data = await fs.readFile(packagePath);
    const json = await JSON.parse(data.toString());
    return json;
  }

  public async writeInJson(key: string, pathFile: string, obj: object, clear = false) {
    const data = await this.readFile(pathFile);
    if (clear) {
      data[key] = obj
    } else {
      data[key] = { ...data[key], ...obj }
    }
    await fs.writeFile(pathFile, JSON.stringify(data));
  }
}