const fs = require('fs')

const file = process.argv[2]

if(!file || !file.endsWith('.md')) {
  throw new Error('Markdown file is required.');
} else {
  const contents = fs.readFileSync(file,'utf8')
  console.log (contents)
}