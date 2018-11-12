const getFileFromArgs = args => {
  const matchMarkdownFile = /[0-9A-Za-z]+.md/ig
  const fileArgument = args.filter(arg => arg.startsWith('--file=') && arg.match(matchMarkdownFile) && arg.length > 10)[0]
  return !!fileArgument && fileArgument.replace('--file=','')
}

export default getFileFromArgs