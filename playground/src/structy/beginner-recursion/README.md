# README

Recursion is when a function calls itself rather than an iterative approach where a loop would be used. In most cases either a iterative approach of a recursive approach can be utilized to solve a problem. Personally I prefer to avoid recursion because I think that iterative solutions tend to be easier to reason about but there are exceptions to this rule.

## Beginner Recursion Intro

https://www.structy.net/problems/beginner-recursion-intro

![image.png](./images/image-1.png)

- A recursive function is a function that calls itself

![image.png](./images/image-2.png)

- It is important to have a stop condition that will prevent the recursion to continue forever. This concept is called a base case.
- A recursive step is the countdown that makes the recursive function go further

## Beginner Recursion Warmup

https://www.structy.net/problems/beginner-recursion-warm-up-exercise

[beginner-recursion-warm-up.ts](beginner-recursion-warm-up.ts)

## Sum Numbers Recursive

https://www.structy.net/problems/sum-numbers-recursive

Watch the Approach video first!

Write a function sumNumbersRecursive that takes in an array of numbers and returns the sum of all the numbers in the array. All elements will be integers. Solve this recursively.

### Approach

![image.png](./images/image-3.png)

Start by finding sub problems the smallest subproblem `[]=>0` is the base case.

![image.png](./images/image-4.png)

### What about Big-O notation

An initial complaint about this recursive solution is that Big-O notation is actually worse than the iterative version. This is true but it will become apparent later that recursion has other benefits in certain scenarios.

#### Time

![image.png](./images/image-5.png)

The Big-O notation for a recursive function basically equates to number of function calls made. For this function that is the number of items is the array + 1 for the basecase. So `O(n+1)` but the +1 is irrelevant in the grand schema so we remove it. For every function call we also need to slice the array which is also a `O(n)` linear operation. This means that the total time complexity is

`O(n^)`

#### Space Complexity

For recursive function each call is tracked in the call stack which will take up some memory. This means that the baseline will always be `O(n)`,

![image.png](./images/image-6.png)

## Factorial

Write a function, factorial, that takes in a number n and returns the factorial of that number. The factorial of n is the product of all the positive numbers less than or equal to n. You must solve this recursively.

```
For example, the factorial of 6 is:
6 * 5 * 4 * 3 * 2 * 1 = 720
```

You can assume that n is a non-negative integer. Note that the factorial of 0 is defined to be 1 (wiki).

### Approach

The factorial of a number can be derived by counting down from any given number and multiplying all numbers.

```
factorial(5)
5*4*3*2*1 = 120

// Rules in math
factorial(1) = 1
factorial(0) = 0
```

#### Sub Problems

![alt text|452x134](tech/Programming/structy/beginner-recursion/images/image.png)

**Recursive Step**

![alt text|470x128](image-7.png)

## Sum of Lengths

Write a function sumOfLengths that takes in array of strings and returns the total length of the strings.

You must solve this recursively.

### Approach

![Breakdown the problem](./images/image-8.png)

![Pseudo Code](./images/image-10.png)

The last one is as always the base case

#### Big-O Notation

Time: `O(n^2)` because we are going to have a function call for each array item and then slice the array as well

Space: `O(n^2)`

## Reverse String

https://www.structy.net/problems/premium/reverse-string-recursive

Write a function, reverseString, that takes in a string as an argument. The function should return the string with its characters in reverse order. You must do this recursively.

### Approach

![Sub Problems](image-11.png)

## Palindrome

Write a function, palindrome, that takes in a string and returns a boolean indicating whether or not the string is the same forwards and backwards.

You must solve this recursively.

### Approach

![Sub Problems|390x216](image-12.png)

1. We need to recurse through the string by comparing and removing the first and last character of the string if they are the same.
2. If they are not the same false should be returned.

## Fibonacci

Write a function, fibonacci, that takes in a number argument, n, and returns the n-th number of the Fibonacci sequence.

- The 0-th number of the sequence is 0.
- The 1-st number of the sequence is 1.
- To generate further numbers of the sequence, calculate the sum of previous two numbers.

You must solve this recursively.

### Approach

![Fibonacci Recursive Step and Base Cases|478x372](./images/image-13.png)

1. The recursive step for this is `fibonacci(n) -> fibonacci(n-1) + fibonacci(n-2)` which actually contains two recursive calls. It helps to visualize this with a recursion tree.

   ![Recursion tree|528x323](./images/image-14.png)

   For these kind of problems it makes sense to visualize the recursion in this way.

### Time Complexity
