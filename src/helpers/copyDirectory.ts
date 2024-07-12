import fs from "fs";
import path from "path";

export default function copyDirectory(mainPath: string, projectPath: string) {
  if (!fs.existsSync(projectPath)) {
    fs.mkdirSync(projectPath, { recursive: true });
  }

  const entries = fs.readdirSync(mainPath, { withFileTypes: true });

  for (let entry of entries) {
    const origPath = path.join(mainPath, entry.name);
    const destPath = path.join(projectPath, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(origPath, destPath);
    } else {
      fs.copyFileSync(origPath, destPath);
    }
  }
}
