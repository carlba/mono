interface Person {
  name: string;
  age: number;
  status: 'active' | 'inactive';
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const persons: Person[] = [
  {
    name: 'Carl',
    age: 37,
    status: 'active',
  },
  {
    name: 'Johanna',
    age: 32,
    status: 'active',
  },
  {
    name: 'Tobias',
    age: 27,
    status: 'active',
  },
];

Array.from(new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
