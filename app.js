const fs = require('fs')

const file = process.argv[2]

if(!file || !file.endsWith('.md')) {
  throw new Error('Markdown file is required.');
} else {
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
      const anchorLink = line.replace(matchHeading, '(# ').toLowerCase().replace(matchSpaces, '-')+')'
      console.log('* **['+title+']'+anchorLink+'**')
    }
  })
}