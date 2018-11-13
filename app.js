const { getFileFromArgs } = require('./src/getFileFromArgs')
const { getHeadingLevelFromArgs } = require('./src/getHeadingLevelFromArgs')
const { getContentsFromFile } = require('./src/getContentsFromFile')
const { createTableOfContents } = require('./src/createTableOfContents')

const app = () => {
  // Capture markdown file
  const file = getFileFromArgs(process.argv)
  const headingLevel = getHeadingLevelFromArgs(process.argv)
  if (!file) {
    throw new Error("Markdown file is required.")
  }
  const contents = getContentsFromFile(file)
  const output = createTableOfContents(contents, headingLevel)
  console.log(output)
}

module.exports = { createTableOfContents, app }