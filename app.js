const fs = require('fs')

const createTableOfContents = (file, headingLevel=6) => {
  let output = ''
  if(!file) {
    throw new Error('Markdown file is required.')
  } else {
    try {
      const contents = fs.readFileSync(file,'utf8')
      const matchHeading = new RegExp(`^#{1,${headingLevel}}\\s`)
      const matchSpaces = /\s+/g

      output += '## Table of Contents\n'
      contents.split('\n').map( line => {
        if(line.match(matchHeading) && !line.startsWith('## Table of Contents')) {
          const title = line.replace(matchHeading, '')
          const anchorLink = '(#' + title.toLowerCase().replace(matchSpaces, '-')+')'
          output += `* **[${title}]${anchorLink}**\n`
        }
      })
    }
    catch(error) {
      throw new Error('Error reading file.')
    }

    return output
  }
}

const getFileFromArgs = args => {
  const matchMarkdownFile = /[0-9A-Za-z]+.md/ig
  const fileArgument = args.filter(arg => arg.startsWith('--file=') && arg.match(matchMarkdownFile) && arg.length > 10)[0]
  return !!fileArgument && fileArgument.replace('--file=','')
}

const getHeadingLevelFromArgs = args => {
  // Capture heading level
  const headingLevelArgument = args.filter(arg => arg.startsWith('--headingLevel=') && arg.length > 15)[0]
  const intHeadingLevel = parseInt(headingLevelArgument.replace('--headingLevel=',''))

  // Heading level is by default 6 if not specified correctly
  return (!!headingLevelArgument && intHeadingLevel>0 && intHeadingLevel<7 && intHeadingLevel) || 6
}

const app = () => {
  // Capture markdown file
  const file = getFileFromArgs(process.argv)
  const headingLevel = getHeadingLevelFromArgs(process.argv)
  const output = createTableOfContents(file, headingLevel)
  console.log(output)
}

module.exports = { createTableOfContents, app }