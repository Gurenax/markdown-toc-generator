const fs = require('fs')

const fileArgument = process.argv.filter(arguments => arguments.startsWith('--file=') && arguments.endsWith('.md') && arguments.length > 10)[0]
const file = !!fileArgument && fileArgument.replace('--file=','')

if(!file || !file.endsWith('.md')) {
  throw new Error('Markdown file is required.');
} else {
  try {
    const contents = fs.readFileSync(file,'utf8')
    //console.log (contents)

    const matchHeading = /^#{1,6}\s/
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
        console.log('* **['+title+']'+anchorLink+'**')
      }
    })
  }
  catch(error) {
    console.error('Error reading file')
  }
}