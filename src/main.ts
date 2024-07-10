#!/usr/bin/env node
//Tem que manter o "shebang" p ser executavel

import { spawn } from "child_process";
import path from "path";
import fs from "fs";
import { stdout } from "process";

// recebe o nome passado como argumento
const projectName = process.argv[2] || "meu-projeto-uol-compass";
// cria o caminho para o diretorio do projeto
const projectPath = path.join(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
  stdout.write(`Erro: Já existe uma pasta com o nome "${projectName}"`);
  process.exit(1);
}

console.log("Diretorio criado");
const makeDirProj = spawn("mkdir", [projectName]);
