// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${response.title}

              
  ## description:
  ${response.description}

  ## Table of Content
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[licenses](#licenses)
  -[contribution](#contribution)
  -[test](#test)
  -[Questions](#Questions)

  ## username:
  ${response.username}
  
  ## installation:
  ${response.installation}            
  
  ## usage:
  ${response.usage}           
  
  ## licenses:
  ${response.licenses}            
  
  ## contribution:
  ${response.contribution}            
  
  ## test:
  ${response.test}          
  
  ## Questions:
  ${response.email}          
  ${response.profile}`;;
}

module.exports = generateMarkdown;
