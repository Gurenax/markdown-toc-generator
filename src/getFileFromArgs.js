/**
 * @description Get the filename from the --file runtime argument
 * @param {*} args - Array arguments
 */
const getFileFromArgs = args => {
  // Match letters and numbers that end with .md and ignore case
  const matchMarkdownFile = /[0-9A-Z]+.md/gi
  // Find the file argument
  const fileArgument = args.filter(
    arg =>
      arg.startsWith("--file=") &&
      arg.match(matchMarkdownFile) &&
      arg.length > 10
  )[0]
  // Filter the file from the file argument
  return !!fileArgument && fileArgument.replace("--file=", "")
}

module.exports = {
  getFileFromArgs
}
