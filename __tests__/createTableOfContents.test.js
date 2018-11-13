const { createTableOfContents } = require('../src/createTableOfContents')

test('Test createTableOfContents()', () => {
  const given = '# Test Title'
  const expected = '## Table of Contents\n* **[Test Title](#test-title)**\n'
  const actual = createTableOfContents(given, 6)
  expect(actual).toEqual(expected)
})

test('Test createTableOfContents() - Heading level specified is lower than content', () => {
  const given = '## Test Title'
  const expected = '## Table of Contents\n'
  const actual = createTableOfContents(given, 1)
  expect(actual).toEqual(expected)
})

test('Test createTableOfContents() - Heading level not specified - Will use default value', () => {
  const given = '###### Test Title'
  const expected = '## Table of Contents\n* **[Test Title](#test-title)**\n'
  const actual = createTableOfContents(given)
  expect(actual).toEqual(expected)
})