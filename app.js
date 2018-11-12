const fs = require('fs')
const { getFileFromArgs } = require('./src/getFileFromArgs')
const { getHeadingLevelFromArgs } = require('./src/getHeadingLevelFromArgs')
const { createTableOfContents } = require('./src/createTableOfContents')

const app = () => {
  // Capture markdown file
  const file = getFileFromArgs(process.argv)
  const headingLevel = getHeadingLevelFromArgs(process.argv)
  const output = createTableOfContents(file, headingLevel)
  console.log(output)
}

module.exports = { createTableOfContents, app }