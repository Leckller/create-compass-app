import fs from "fs";
import path from "path";

export default function copyDirectory(
  pathToCopy: string,
  pathToNewProject: string
) {
  if (!fs.existsSync(pathToNewProject)) {
    fs.mkdirSync(pathToNewProject, { recursive: true });
  }

  const entries = fs.readdirSync(pathToCopy, { withFileTypes: true });

  for (let entry of entries) {
    const origPath = path.join(pathToCopy, entry.name);
    const destPath = path.join(pathToNewProject, entry.name);

    if (entry.isDirectory()) {
      copyDirectory(origPath, destPath);
    } else {
      fs.copyFileSync(origPath, destPath);
    }
  }
}
