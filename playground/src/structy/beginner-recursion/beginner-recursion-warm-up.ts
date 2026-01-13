const countDown = (start: number) => {
  // Handle base case
  if (start === 0) {
    return;
  }
  // Recursion Step
  return countDown(start - 1);
};

countDown(5);
