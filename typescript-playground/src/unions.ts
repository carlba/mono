
type stringOrNumber = string | number;

// Valid
const name: stringOrNumber = 'Carl';
const age: stringOrNumber = 25;

// Invalid
const isOpen: stringOrNumber = true;

console.log(isOpen);
