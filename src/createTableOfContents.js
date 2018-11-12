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

export default createTableOfContents