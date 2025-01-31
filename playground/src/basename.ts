import path from 'path';

const filename = '/text';

const test = filename.slice(0, filename.lastIndexOf('.'));

const test2 = path.basename(filename);

console.log(test, test2);
