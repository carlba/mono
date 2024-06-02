import * as Factory from 'factory.ts';
import { faker } from '@faker-js/faker';

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  fullName: string;
  age: number;
  parent_id: number;
}

const personFactory = Factory.Sync.makeFactory<Person>({
  id: Factory.each(i => i),
  firstName: 'Bob',
  lastName: 'Smith',
  fullName: 'Robert J. Smith, Jr.',
  age: Factory.each(i => 20 + (i % 10)),
  parent_id: Factory.each(i => faker.number.int({ min: 1, max: i - 1 })),
});

personFactory.build();

export function helloWorld() {
  return 'Hello World!';
}
