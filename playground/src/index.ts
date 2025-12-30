import { execSync } from 'child_process';
import { existsSync, readdirSync } from 'fs';
import path, { basename, extname } from 'path';

const scriptName = process.argv[2];

const dirname = __dirname;

const isDevMode = process.argv[3] === '--dev';

if (!scriptName) {
  console.error('Usage: npm run run-script -- script1');
  process.exit(1);
}

function resolveScriptPath(name: string, basedir: string): string | null {
  const scriptBaseName = path.basename(name, path.extname(name));

  return ['.ts', '.js'].reduce<string | null>((acc, extension) => {
    if (acc) return acc;
    const fullPath = path.join(basedir, scriptBaseName + extension);
    return existsSync(fullPath) ? fullPath : null;
  }, null);
}

const absoluteScriptPath = resolveScriptPath(scriptName, dirname);
const absoluteCwdScriptPath = resolveScriptPath(scriptName, process.cwd());

console.log({ absoluteCwdScriptPath, absoluteScriptPath });

if (!absoluteScriptPath) {
  console.log(`The script ${scriptName} does not exist \n`);
  console.log(
    `Try with: \n${readdirSync(dirname)
      .filter(filename => ['.ts', '.js'].includes(extname(filename)))
      .filter(filename => !filename.includes('.spec.'))
      .map(filename => basename(filename, extname(filename)))
      .join('\n')}`
  );
  process.exit(1);
}

try {
  execSync(`npx ${isDevMode ? 'nodemon' : 'tsx'} ${absoluteScriptPath}`, { stdio: 'inherit' });
} catch (error) {
  if (error instanceof Error) {
    if ('signal' in error) {
      console.warn(`Child process received ${String(error.signal)}`);
    }
  }
}
