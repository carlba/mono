import * as fs from 'fs/promises';
import packageJson from '../package.json';
import { exec } from 'child_process';

const baseUrl = 'https://raw.githubusercontent.com/carlba/typescript-template/main';

async function downloadUrlToFile(url: string, file: string) {
  const response = await fetch(url);

  const arrayBuffer = await response.arrayBuffer();

  try {
    await fs.writeFile(file, Buffer.from(arrayBuffer));
    console.log(`Successfully wrote to file ${file}`);
  } catch (e) {
    console.error('Error writing file', e);
    throw Error(`Error downloading url ${url} to fille ${file}`);
  }

  console.log(`finished downloading ${file}`);
}

async function runCommand(command: string): Promise<{ stdout: string; stderr: string }> {
  return new Promise((resolve, reject) => {
    console.log(`Running command ${command}`);
    return exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error);
        return;
      }

      resolve({ stdout, stderr });
    });
  });
}

async function npmInstall(packageName: string, isDevDep: true) {
  console.log('current cwd', process.cwd());
  try {
    const { stdout, stderr } = await runCommand(
      `npm install ${isDevDep ? '--save-dev' : ''} ${packageName}`
    );

    console.log(stdout, stderr);
  } catch (e) {
    console.log(e);
  }
}

async function run() {
  packageJson.scripts['start:dev'] = 'nodemon -r dotenv/config -q src/index.ts';
  try {
    await fs.writeFile('./package.json', JSON.stringify(packageJson, null, 2));
    console.log('Successfully wrote to file');
  } catch (e) {
    console.error('Error writing file', e);
  }

  for await (const fileName of [
    'nodemon.json',
    'tsconfig.json',
    'tsconfig.spec.json',
    '.prettierrc',
    '.gitignore',
    '.jest.config.ts',
    '.eslintrc.js',
  ]) {
    await downloadUrlToFile(`${baseUrl}/${fileName}`, `./${fileName}`);
  }

  await npmInstall('typescript-eslint', true);
  await npmInstall('eslint@^8.57.0', true);
}

void run().then();
