const { getFileFromArgs } = require('../src/getFileFromArgs')

test('Positive test for getFileFromArgs()', () => {
  const given = ['--file=Example.md']
  const expected = 'Example.md'
  const actual = getFileFromArgs(given)
  expect(actual).toEqual(expected)
})

test('Negative test for getFileFromArgs() - No filename', () => {
  const given = ['--file=']
  const actual = getFileFromArgs(given)
  expect(actual).toBeFalsy()
})

test('Negative test for getFileFromArgs() - No file argument', () => {
  const given = ['--somethingElse']
  const actual = getFileFromArgs(given)
  expect(actual).toBeFalsy()
})

test('Negative test for getFileFromArgs() - No arguments at all', () => {
  const given = []
  const actual = getFileFromArgs(given)
  expect(actual).toBeFalsy()
})

test('Positive test for getFileFromArgs() - Multiple file arguments will only capture the first one', () => {
  const given = ['--file=Example.md', '--file=README.md']
  const expected = 'Example.md'
  const actual = getFileFromArgs(given)
  expect(actual).toEqual(expected)
})

test('Positive test for getFileFromArgs() - Duplicate file arguments will only capture the first one', () => {
  const given = ['--file=Example.md', '--file=Example.md']
  const expected = 'Example.md'
  const actual = getFileFromArgs(given)
  expect(actual).toEqual(expected)
})