/**
 * https://www.youtube.com/watch?v=WTzjTskDFMg&t=615s
 *
 * **/
function isValid(str: string): boolean {
  const stack: string[] = [];
  const closeToOpen: Record<string, string> = { ')': '(', ']': '[', '}': '{' };

  for (const char of str) {
    if (closeToOpen[char]) {
      if (stack.length > 0 && stack.at(-1) === closeToOpen[char]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(char);
    }
  }
  return stack.length === 0;
}

console.log(isValid('()[]]{}'));
