
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  let licenseLink = '';
  switch (license) {
    case 'MIT':
      licenseLink = 'https://opensource.org/licenses/MIT';
      break;
    case 'GPLv3':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0';
      break;
    case 'Apache 2.0':
      licenseLink = 'https://opensource.org/licenses/Apache-2.0';
      break;
    case 'BSD 3-Clause':
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
  }
  return licenseLink;
}


function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License
This project is licensed under the ${license} license. For more information, please visit [${license} License](${renderLicenseLink(license)}).`;
}


function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, you can find me on GitHub: [${data.github}](https://github.com/${data.github}).
You can also reach me at my email: ${data.email}.
`;
}

module.exports = generateMarkdown;
