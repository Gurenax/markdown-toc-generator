const getHeadingLevelFromArgs = args => {
  // Capture heading level
  const headingLevelArgument = args.filter(arg => arg.startsWith('--headingLevel=') && arg.length > 15)[0]
  const intHeadingLevel = !!headingLevelArgument && parseInt(headingLevelArgument.replace('--headingLevel=',''))

  // Heading level is by default 6 if not specified correctly
  return (!!headingLevelArgument && intHeadingLevel>0 && intHeadingLevel<7 && intHeadingLevel) || 6
}

export default getHeadingLevelFromArgs