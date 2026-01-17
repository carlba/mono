const [nodePath, scriptPath, firstArg = 'No argument was provided'] = process.argv;

console.log({ nodePath, scriptPath, firstArg });
