const chunk = <T>(arr: T[], size: number): T[][] =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_, index) =>
    arr.slice(index * size, index * size + size)
  );

const persons = [
  { name: 'Alice Johnson', age: 28, occupation: 'Software Engineer' },
  { name: 'Bob Smith', age: 35, occupation: 'Teacher' },
  { name: 'Carol Williams', age: 42, occupation: 'Doctor' },
  { name: 'David Brown', age: 29, occupation: 'Graphic Designer' },
  { name: 'Emma Davis', age: 31, occupation: 'Marketing Manager' },
  { name: 'Frank Miller', age: 45, occupation: 'Chef' },
  { name: 'Grace Wilson', age: 26, occupation: 'Nurse' },
  { name: 'Henry Taylor', age: 38, occupation: 'Lawyer' },
  { name: 'Ivy Anderson', age: 33, occupation: 'Data Scientist' },
  { name: 'Jack Thompson', age: 27, occupation: 'Photographer' },
];

for (const person of chunk(persons, 2)) {
  console.log(person);
}
