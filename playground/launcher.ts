import { globSync } from 'fs';
import * as readline from 'node:readline';
import { parse } from 'node:path';
import { spawn } from 'node:child_process';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

function main() {
  const [, , devMode] = process.argv;

  const isDevMode = devMode === '--dev';

  const scripts = globSync('src/!(*.spec).ts');

  scripts.forEach((name, index) => {
    console.log(`${index + 1}: ${parse(name).name}`);
  });

  rl.question(`Which script do you want to launch? `, answer => {
    const parsedAnswer = parseInt(answer, 10);
    if (parsedAnswer < 0 || parsedAnswer > scripts.length || Number.isNaN(parsedAnswer)) {
      console.error(`Invalid choice ${answer}`);
      rl.close();
    }

    const child = spawn(
      'npx',
      [
        isDevMode ? 'nodemon' : 'tsx',
        '-r',
        'dotenv/config',
        `${scripts[parseInt(answer, 10) - 1]}`,
      ],
      {
        stdio: 'inherit',
      }
    );

    child.on('exit', signal => {
      rl.close();
      process.exit(signal);
    });

    process.on('SIGTERM', () => {
      console.log('Main process received SIGTERM. Forwarding to child...');
      child.kill('SIGTERM'); // Pass SIGTERM to child process
      rl.close();
    });
  });
}

main();
