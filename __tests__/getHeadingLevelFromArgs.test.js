const { getHeadingLevelFromArgs } = require('../src/getHeadingLevelFromArgs')

test('Positive test for getHeadingLevelFromArgs()', () => {
  const given = ['--file=Example.md','--headingLevel=2']
  const expected = 2
  const actual = getHeadingLevelFromArgs(given)
  expect(actual).toEqual(expected)
})

test('Negative test for getHeadingLevelFromArgs() - No heading level will use default value', () => {
  const given = ['--file=Example.md','--headingLevel=']
  const expected = 6
  const actual = getHeadingLevelFromArgs(given)
  expect(actual).toEqual(expected)
})

test('Negative test for getHeadingLevelFromArgs() - No heading level argument will use default value', () => {
  const given = ['--file=Example.md','--somethingElse']
  const expected = 6
  const actual = getHeadingLevelFromArgs(given)
  expect(actual).toEqual(expected)
})

test('Negative test for getHeadingLevelFromArgs() - No arguments at all will use default value', () => {
  const given = []
  const expected = 6
  const actual = getHeadingLevelFromArgs(given)
  expect(actual).toEqual(expected)
})

test('Positive test for getHeadingLevelFromArgs() - Multiple heading level arguments will only capture the first one', () => {
  const given = ['--file=Example.md', '--headingLevel=5', '--headingLevel=6']
  const expected = 5
  const actual = getHeadingLevelFromArgs(given)
  expect(actual).toEqual(expected)
})

test('Positive test for getHeadingLevelFromArgs() - Duplicate heading level arguments will only capture the first one', () => {
  const given = ['--file=Example.md', '--headingLevel=6', '--headingLevel=6']
  const expected = 6
  const actual = getHeadingLevelFromArgs(given)
  expect(actual).toEqual(expected)
})