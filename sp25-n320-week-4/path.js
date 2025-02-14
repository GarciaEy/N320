const path = require("path");

console.log("frog path:", path.resolve("frog"));

const functionsFolder = path.resolve("functions", "cow");

console.log("Functions index.js:", path.join(functionsFolder, "index.js"));

console.log(
  "Functions functions folder:",
  path.join(functionsFolder, "functions")
);

console.log("basename of functions directrory", path.basename(functionsFolder));
