const { app } = require("../app")

beforeEach(() => {
  // Add File argument
  process.argv.push('--file=Example.md')
  // Add Heading level argument
  process.argv.push('--headingLevel=6')
});

test("Test app()", () => {
  expect(() => app()).not.toThrowError()
})

test("Test app() - no arguments", () => {
  // Remove heading level argument
  process.argv.pop()
  // Remove file argument
  process.argv.pop()
  expect(() => app()).toThrowError()
})

test("Test app() - no file argument", () => {
  // Remove heading level argument
  process.argv.pop()
  // Remove file argument
  process.argv.pop()
  expect(() => app()).toThrowError()
})

test("Test app() - no heading level argument", () => {
  // Remove file argument
  process.argv.pop()
  // Remove heading level argument
  process.argv.pop()
  // Add File argument
  process.argv.push('--file=Example.md')
  expect(() => app()).not.toThrowError()
})

afterEach(() => {
  // Remove heading level argument
  process.argv.pop()
  // Remove file argument
  process.argv.pop()
});