#!/usr/bin/env node
const path = require("path");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const recapsDir = process.cwd();

console.log("Welcome! Please Create Project");
const commands = {
  new: () => {
    rl.question("Create Project:", function (newProject) {
      const projectDir = path.join(recapsDir, newProject);
      const srcDir = path.join(projectDir, "src");
      const distDir = path.join(projectDir, "dist");
      if (fs.existsSync(projectDir)) {
        console.log("Project already exists.");
        rl.close();
        return;
      }
      //creates project structure
      fs.mkdirSync(projectDir, { recursive: true }); //if parent folder needed, it is created
      fs.mkdirSync(srcDir);
      fs.mkdirSync(distDir);

      //create readme file
      const readmeContent = `# ${newProject}\n\nThis is the ${newProject} project`;
      fs.writeFileSync(path.join(projectDir, "README.md"), readmeContent);

      //create index.js
      const indexContent = `// ${newProject} project's index\n\n console.log('welcome to ${newProject}')`;
      fs.writeFileSync(path.join(projectDir, "index.js"), indexContent);

      console.log(`project ${newProject} created successfully`);
      rl.close();
    });
  },
};
commands.new();
