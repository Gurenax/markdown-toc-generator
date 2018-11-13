const { getContentsFromFile } = require("../src/getContentsFromFile")

test('Test getContentsFromFile()', () => {
  const given = "Example.md"
  const actual = getContentsFromFile(given)
  expect(actual).toBeTruthy()
})

test('Test getContentsFromFile() - No such file exists', () => {
  const given = 'InvalidFile.md'
  expect(() => getContentsFromFile(given)).toThrow(
    `Error reading file. Error: ENOENT: no such file or directory, open '${given}'`
  )
})

test("Test getContentsFromFile() - No file specified", () => {
  const given = ''
  expect(() => getContentsFromFile(given)).toThrow(
    'Error reading file. Error: ENOENT: no such file or directory, open'
  )
})
