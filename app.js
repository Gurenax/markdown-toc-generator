const fs = require('fs')

const app = () => {
  // Capture markdown file
  const matchMarkdownFile = /[0-9A-Za-z]+.md/ig
  const fileArgument = process.argv.filter(arguments => arguments.startsWith('--file=') && arguments.match(matchMarkdownFile) && arguments.length > 10)[0]
  const file = !!fileArgument && fileArgument.replace('--file=','')

  // Capture heading level
  const headingLevelArgument = process.argv.filter(arguments => arguments.startsWith('--headingLevel=') && arguments.length > 15)[0]
  const intHeadingLevel = parseInt(headingLevelArgument.replace('--headingLevel=',''))

  // Heading level is by default 6 if not specified correctly
  const headingLevel = (!!headingLevelArgument && intHeadingLevel>0 && intHeadingLevel<7 && intHeadingLevel) || 6

  if(!file || !file.endsWith('.md')) {
    throw new Error('Markdown file is required.')
  } else {
    try {
      const contents = fs.readFileSync(file,'utf8')
      //console.log (contents)

      const matchHeading = new RegExp(`^#{1,${headingLevel}}\\s`)
      const matchSpaces = /\s+/g

      console.log('## Table of Contents')
      contents.split('\n').map( (line, i) => {
        // if(line.startsWith('# ')
        //     || line.startsWith('## ')
        //     || line.startsWith('### ')
        //     || line.startsWith('#### ')
        //     || line.startsWith('##### ')
        //     || line.startsWith('###### ')) {
        if(line.match(matchHeading) && !line.startsWith('## Table of Contents')) {
            
          // console.log(line.toLowerCase())
          const title = line.replace(matchHeading, '')
          const anchorLink = '(#' + title.toLowerCase().replace(matchSpaces, '-')+')'
          console.log(`* **[${title}]${anchorLink}**`)
        }
      })
    }
    catch(error) {
      throw new Error('Error reading file.')
    }
  }
}

module.exports = { app }