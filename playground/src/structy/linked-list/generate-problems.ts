import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

interface Problem {
  name: string;
  functionName: string;
  description: string;
  approachUrl: string;
  walkthroughUrl: string;
}

interface ProblemsData {
  problems: Problem[];
}

const __dirname = import.meta.dirname;

async function loadProblems(): Promise<ProblemsData> {
  const filePath = path.join(__dirname, 'problems.yaml');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  const data = yaml.load(fileContent) as ProblemsData;

  if (!data.problems || !Array.isArray(data.problems)) {
    throw new Error('Invalid problems.yaml structure: missing or invalid problems array');
  }

  return data;
}

function validateProblem(problem: Problem): boolean {
  return !!(problem.name && problem.functionName && problem.description);
}

async function getProblems(): Promise<Problem[]> {
  const data = await loadProblems();
  const validProblems = data.problems.filter(validateProblem);

  if (validProblems.length !== data.problems.length) {
    console.warn('Some problems failed validation and were skipped');
  }

  return validProblems;
}

async function createProblemFileStructure(problem: Problem) {
  const sourceFileContent = generateSourceFile(problem.description, problem.functionName);

  const sourceFilePath = path.join(__dirname, `${problem.name}.ts`);
  if (!existsSync(sourceFilePath)) {
    fs.writeFile(sourceFilePath, sourceFileContent);
  }

  const specFileContent = '';

  const specFilePath = path.join(__dirname, `${problem.name}.spec.ts`);
  if (!existsSync(specFilePath)) {
    fs.writeFile(specFilePath, specFileContent);
  }

  const solutionsFileContent = '';

  const solutionsFilePath = path.join(__dirname, `${problem.name}-solution.js`);
  if (!existsSync(solutionsFilePath)) {
    fs.writeFile(solutionsFilePath, solutionsFileContent);
  }

  const approachFileName = `${problem.name}-approach.mp4`;
  const approachFilePath = path.join(__dirname, 'videos', approachFileName);
  if (!existsSync(approachFilePath)) {
    await downloadVideoFile(problem.approachUrl, approachFilePath);
  }

  const walkthroughFileName = `${problem.name}-walkthrough.mp4`;
  const walkthroughFilePath = path.join(__dirname, 'videos', walkthroughFileName);
  if (!existsSync(walkthroughFilePath)) {
    await downloadVideoFile(problem.walkthroughUrl, walkthroughFilePath);
  }
}

const sourceFileTemplate = `/**
 * {{description}}
 * 
 * Time: O(?)
 * Space: O(?)
 */
export const {{functionName}} = (): void => {
  // TODO: Implement
};
`;

function generateSourceFile(description: string, functionName: string) {
  return sourceFileTemplate
    .replace('{{description}}', description)
    .replace('{{functionName}}', functionName);
}

async function downloadVideoFile(url: string, filename: string) {
  console.log(filename);
  try {
    await execAsync(`yt-dlp -o "${filename}" "${url}"`);
  } catch (error) {
    if (error instanceof Error && 'stderr' in error) {
      console.error('Error while downloading video', { error: error.stderr });
    } else {
      throw error;
    }
  }
}

async function main() {
  const problems = await getProblems();

  const problemPromises = problems.map(problem => createProblemFileStructure(problem));

  Promise.all(problemPromises);
}

await main();
