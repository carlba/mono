type stringOrNumber = string | number;

// Valid
const name: stringOrNumber = 'Carl';
const age: stringOrNumber = 25;

// Invalid
//@ts-expect-error
const isOpen: stringOrNumber = true;

console.log(isOpen);
