// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache License 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "Creative Commons Zero v1.0 Universal":
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Eclipse Public License 2.0":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
    default:
      return "";
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache License 2.0":
      return "[Apache License 2.0](https://opensource.org/licenses/Apache-2.0)";
    case "GNU General Public License v3.0":
      return "[GNU General Public License v3.0](https://www.gnu.org/licenses/gpl-3.0)";
    case "MIT License":
      return "[MIT License](https://opensource.org/licenses/MIT)";
    case "Boost Software License 1.0":
      return "[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)";
    case "Creative Commons Zero v1.0 Universal":
      return "[Creative Commons Zero v1.0 Universal](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Eclipse Public License 2.0":
      return "[Eclipse Public License 2.0](https://opensource.org/licenses/EPL-1.0)"
    default:
      return "";
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {

  var tableofcontents = `
  ## Table of Contents
  
  `;
  tableofcontents += `[Description](#description)
  
  `
  if (response.installation != '') {
  tableofcontents += `[Installation](#installation)
  
  `
  };
  if (response.usage != '') {
  tableofcontents += `[Usage](#usage)
  
  `
  };
  tableofcontents += `[License](#license)
  
  `
  if (response.contribution != '') {
  tableofcontents += `[Contribution](#contribution)
  
  `
  }
  if (response.test !== '') {
    tableofcontents += `[Test](#test)
  
  `
  };
  tableofcontents += `[Questions](#questions)
  
  `

  var readme = `${renderLicenseBadge(response.license)}
  
  # ${response.title}
              
  ## Description:
  ${response.description}
  `;

  readme += tableofcontents;

  if (response.installation != '') {
    readme += `## Installation:
  ${response.installation}
  
  `
  };
  if (response.usage != '') {
    readme += `## Usage:
  ${response.usage}
  
  `
  };

  //license
  readme += `## License:
  This project is licensed under the ${renderLicenseLink(response.license)}
  
  `;
  // readme += `${renderLicenseLink(response.license)}
  
  // `;

  if (response.contribution != '') {
    readme += `## Contribution:
  ${response.contribution}
  [Contributor Covenant](https://www.contributor-covenant.org/)
  
  `
  }

  if (response.test != '') {
    readme += `## Test:
  ${response.test}
  
  `
  };

  readme += `## Questions:
  ${response.email}          
  ${response.github}
  `
  return readme;
}


module.exports = generateMarkdown;
