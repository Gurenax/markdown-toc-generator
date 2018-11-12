const { createTableOfContents } = require('../app.js')

test('Test createTableOfContents()', () => {
  const output = createTableOfContents('Example.md', '6')
  expect(output).toBeTruthy()
  console.log(output)
})