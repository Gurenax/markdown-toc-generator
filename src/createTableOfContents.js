/**
 * @description Create the table of contents for the given file and heading level
 * @param {*} file - File path
 * @param {*} headingLevel - Maximum heading level (default: 6)
 */
const createTableOfContents = (contents, headingLevel = 6) => {
  // Initialise output
  let output = ""

  // Match given heading level
  const matchHeading = new RegExp(`^#{1,${headingLevel}}\\s`)
  // Match spaces
  const matchSpaces = /\s+/g

  // Output title of table of contents
  output += "## Table of Contents\n"

  // For every new line in the file
  contents.split("\n").map(line => {
    // Find a heading based on given maximum heading level
    if (line.match(matchHeading) && !line.startsWith("## Table of Contents")) {
      // Extract title from the heading
      const title = line.replace(matchHeading, "")
      // Build anchor link string
      const anchorLink =
        "(#" + title.toLowerCase().replace(matchSpaces, "-") + ")"
      // Output the table of contents entry
      output += `* **[${title}]${anchorLink}**\n`
    }
  })

  return output
}

module.exports = {
  createTableOfContents
}
