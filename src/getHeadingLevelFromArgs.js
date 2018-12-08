/**
 * @description Get the headingLevel from the --headingLevel runtime argument
 * @param {*} args - Array arguments
 */
const getHeadingLevelFromArgs = args => {
  // Filter the heading level from the arguments
  const headingLevelArgument = args.filter(
    arg => arg.startsWith('--headingLevel=') && arg.length > 15
  )[0];

  // Parse the heading level value to Integer
  const intHeadingLevel =
    !!headingLevelArgument &&
    parseInt(headingLevelArgument.replace('--headingLevel=', ''));

  // Heading level is by default 6 if not specified correctly
  return (
    (!!headingLevelArgument &&
      intHeadingLevel > 0 &&
      intHeadingLevel < 7 &&
      intHeadingLevel) ||
    6
  );
};

module.exports = {
  getHeadingLevelFromArgs
};
