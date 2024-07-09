#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const projectName = process.argv[2] || 'meu-projeto';
const projectPath = path.join(process.cwd(), projectName);

if (fs.existsSync(projectPath)) {
  console.error(`Erro: A pasta ${projectName} já existe.`);
  process.exit(1);
}

fs.mkdirSync(projectPath);

const templatePath = path.join(__dirname, 'templates');
fs.readdirSync(templatePath).forEach(file => {
  const origFilePath = path.join(templatePath, file);
  const destFilePath = path.join(projectPath, file);

  fs.copyFileSync(origFilePath, destFilePath);
});

process.chdir(projectPath);
console.log('Instalando dependências...');
execSync('npm install', { stdio: 'inherit' });

console.log('Projeto criado com sucesso!');
