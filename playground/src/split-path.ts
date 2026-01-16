import path from 'node:path';

const filePath = '/users/docs/report.csv';
const parsed = path.parse(filePath);

console.log(parsed, 'Parsed path');
