/**
 * A type that describes a function that takes a string and returns a number. These functions types
 * can be used to define generic properties of a function. This interface for instance is useful
 * for a function that takes a string as its argument and returns the length of the string.
 */
type functionInterface = (a: string) => number;

/**
 * A function that takes a string and returns the length of the string.
 * @param a A string
 * @returns The length of the string
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const stringLength: functionInterface = (a: string) => a.length;
