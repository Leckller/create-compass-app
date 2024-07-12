import { AbstractFileSystem } from "../interfaces/FileSystem";
import AbstractInstaller from "../interfaces/Installer";

export default class Installer extends AbstractInstaller {
  constructor(private fsFunctions: AbstractFileSystem) {
    super();
  }

  public Tailwind() {
    const devDependencies = ["tailwindcss", "postcss", "autoprefixer"];
    this.fsFunctions.installDependencies(true, devDependencies);
  }

  public Redux() {
    const Dependencies = ["@reduxjs/toolkit", "react-redux"];
    this.fsFunctions.installDependencies(false, Dependencies);
  }

  public StyledComponents() {
    const Dependencies = ["styled-components"];
    this.fsFunctions.installDependencies(false, Dependencies);
  }
}
