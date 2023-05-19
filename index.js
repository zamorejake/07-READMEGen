const fs = require("fs");
const readMe = fs.readFileSync("./SAMPLEREADME.MD", "utf-8");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your title?",
      name: "title",
    },
    {
      type: "input",
      message: "Please provide a short description?",
      name: "desc",
    },
    {
      type: "input",
      message: "What are the steps required to install your project?",
      name: "install",
    },
    {
      type: "input",
      message:
        'Provide instructions and examples for use. Include screenshots as needed.\n To add a screenshot, create an `assets/images` folder in your repository and upload your screenshot to it.\n Then, using the relative filepath, add it to your README with this syntax, "![alt text](assets/images/screenshot.png)"\n',
      name: "usage",
    },
    {
      type: "input",
      message:
        "List your collaborators, if any, with links to their GitHub profiles.",
      name: "credits",
    },
    {
      type: "list",
      name: "license",
      message: "Select the project license:",
      choices: ["MIT", "Apache-2.0", "GPL-3.0", "ISC", "BSD-3-Clause", "CC0", "LGPL-3.0"],
    },
    {
      type: "input",
      message: "If your project has a lot of features, list them here.",
      name: "features",
    },
    {
      type: "input",
      message:
        "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so.",
      name: "contribute",
    },
  ])
  .then((response) => {
    switch (response.license) {
      case "MIT":
        response.licenseBADGE = `[![MIT badge](https://img.shields.io/badge/license-MIT-blue.svg "MIT badge")](https://choosealicense.com/licenses/mit/)`;
        break;
      case "Apache-2.0":
        response.licenseBADGE = `[![Apache 2.0 badge](https://img.shields.io/badge/license-Apache--2.0-blue.svg "Apache 2.0 badge")](https://choosealicense.com/licenses/apache-2.0/)`;
        break;
      case "GPL-3.0":
        response.licenseBADGE = `[![GPL 3.0 badge](https://img.shields.io/badge/license-GPL--3.0-blue.svg "GPL 3.0 badge")](https://choosealicense.com/licenses/gpl-3.0/)`;
        break;
      case "ISC":
        response.licenseBADGE = `[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg)](https://choosealicense.com/licenses/isc/)`;
        break;
      case "BSD-3-Clause":
        response.licenseBADGE = `[![BSD 3-Clause License](https://img.shields.io/badge/license-BSD--3--Clause-blue.svg)](https://choosealicense.com/licenses/bsd-3-clause/)`;
        break;
      case "CC0":
        response.licenseBADGE = `[![CC0 License](https://img.shields.io/badge/license-CC0-green.svg)](https://choosealicense.com/licenses/cc0-1.0/)`;
        break;
      case "LGPL-3.0":
        response.licenseBADGE = `[![LGPL v3.0 License](https://img.shields.io/badge/license-LGPL--3.0-blue.svg)](https://choosealicense.com/licenses/lgpl-3.0/)`;
        break;
    }
    return response;
  })
  .then((response) => {
    const newContent = readMe
      .replace(/{{title}}/g, response.title)
      .replace(/{{desc}}/g, response.desc)
      .replace(/{{install}}/g, response.install)
      .replace(/{{usage}}/g, response.usage)
      .replace(/{{credits}}/g, response.credits)
      .replace(/{{license}}/g, response.license)
      .replace(/{{licenseBADGE}}/g, response.licenseBADGE)
      .replace(/{{features}}/g, response.features)
      .replace(/{{contribute}}/g, response.contribute);
    fs.writeFileSync("README.md", newContent, "utf-8"),
      function (err) {
        if (err) {
          console.log(err);
        } else {
          return;
        }
      };
  });
