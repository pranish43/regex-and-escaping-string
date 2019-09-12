const fs = require("fs");
const readme = "input.txt";
const file = fs.readFileSync(readme, { encoding: "utf8" });

//Lower Caser using arrow function
const lowerCase = param => {
  const resultlower = param
    .trim()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .toLowerCase();
  console.log("\nlowerCase:\n");
  console.log(resultlower);
};

//camel case function using arrow function.
const camelCase = camel_param => {
  const resultcamel = camel_param
    .trim()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .toLowerCase()
    .replace(/[(?:^|\s)]\w/g, c => c.toUpperCase())
    .replace(/ /g, "");
  console.log("\nCamel Case:\n");
  console.log(resultcamel);
};

//snake case using arrow function.
const snakeCase = snake_param => {
  const resultsnake = snake_param
    .trim()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/ /g, "_");
  console.log("\nsnakeCase:\n");
  console.log(resultsnake);
};

//
const dashCase = dash_param => {
  const resultdash = dash_param
    .trim()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/ /g, "-");
  console.log("\n dashCase:\n");
  console.log(resultdash);
};

const dotCase = dot_param => {
  const resultdot = dot_param
    .trim()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/ /g, ".");
  console.log("\ndotCase:\n");
  console.log(resultdot);
};

const pathCase = path_param => {
  const resultpath = path_param
    .trim()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/ /g, "/");
  console.log("\npathCase:\n");
  console.log(resultpath);
};

const properCase = proper_param => {
  const resultproper = proper_param
    .trim()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .toLowerCase()
    .replace(/(?:^|\s)\w/g, c => c.toUpperCase())
    .replace(/ /g, "");
  console.log("\nproperCase:\n");
  console.log(resultproper);
};

const sentenceCase = sent_param => {
  const resultsentence = sent_param
    .trim()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .replace(/[a-z]/i, p => p.toUpperCase());
  console.log("\nsentenceCase:\n");
  console.log(resultsentence + ",");
};

const constantCase = const_param => {
  const resultconstant = const_param
    .trim()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .toUpperCase()
    .replace(/ /g, "_");
  console.log("\nconstantCase:\n");
  console.log(resultconstant);
};

const titleCase = title_param => {
  const resulttitle = title_param
    .trim()
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .toLowerCase()
    .replace(/(?:^|\s)\w/g, c => c.toUpperCase());
  console.log("\ntitleCase:\n");
  console.log(resulttitle);
};

//Escaping the HTMl in javascript.

//Javascript escaping
const escapeJavascript = a => {
  var newString = a.replace(/[\W_]+/g, function(x) {
    return " /x" + x.charCodeAt(0).toString(16) + " ";
  });
  console.log("\n Javascript escaping : \n ");
  console.log(newString);
};

//For JSON escaping
const escapeJSON = a => {
  var newString = a.replace(/[\W_]+/g, function(x) {
    return " \\u00" + x.charCodeAt(0).toString(16) + " ";
  });
  console.log("\n JSON escaping: \n ");
  console.log(newString);
};

//HTML escaping
const escapeHTML = a => {
  var newString = a.replace(/[\W_]+/g, function(x) {
    switch (x) {
      case "&":
        return " &amp; ";
      case "<":
        return " $lt; ";
      case ">":
        return " &gt; ";
      case "'":
        return "&#39;";
      case "/":
        return "&#x2F;";
      case "=":
        return "&#x3D;";
      default:
        return " $#x" + x.charCodeAt(0).toString(16) + " ";
    }
  });
  console.log("\n HTML escaping : \n ");
  console.log(newString);
};
camelCase(file);
snakeCase(file);
dashCase(file);
dotCase(file);
properCase(file);
pathCase(file);
constantCase(file);
sentenceCase(file);
titleCase(file);
lowerCase(file);
escapeHTML(file);
escapeJavascript(file);
escapeJSON(file);
