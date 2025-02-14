const fs = require("fs");
const path = require("path");

fs.writeFileSync(
  "trashDigimon.json",
  JSON.stringify([
    { rank: 1, name: "Agumon" },
    { rank: 2, name: "Numemon" },
  ])
);

const trashDigimonData = fs.readFileSync("trashDigimon.json");

console.log(JSON.parse(trashDigimonData.toString()));

const dataPath = path.resolve("data");

if (!fs.existsSync(dataPath)) {
  fs.mkdirSync(dataPath);
}

fs.writeFileSync(path.join(dataPath, "user.json"), "{}");

fs.writeFileSync(
  path.join(dataPath, ".gitignore"),
  "# ignore files and directories in this folder"
);

fs.appendFileSync(
  path.join(dataPath, ".gitignore"),
  `

node_modules`
);
