# Hashing

## anagrams

## Pair Product

[Pair Product Structy](https://www.structy.net/problems/pair-product)

[pair-product.ts](pair-product.ts)

### Instructions

Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

Be sure to return the indices, not the elements themselves.

There is guaranteed to be one such pair whose product is the target.

### Thoughts

Very similar to the pair problems only thing to remember is that you device to figure out what the corresponding product is.

## Intersection

[intersection.ts](intersection.ts)

### Instructions

Write a function, intersection, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in both of the two arrays.

You may assume that each input array does not contain duplicate elements.

### Thoughts

Using some form of hash structure seam obvious for this. Initially I used a hashmap not thinking of a Set but the set does make more sense since I am only interested in storing one value. and the set also removes duplicates.

I also implemented the O(n) version which uses multiple for loops to compare every item in both of the arrays to each other. This is however very inefficient interested in storing one value. and the set also removes duplicates.

I also implemented the O(n) version which uses multiple for loops to compare every item in both of the arrays to each other. This is however very inefficient.

## exclusive items

Write a function, exclusiveItems, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are in either array but not both arrays.

You may assume that each input array does not contain duplicate elements.

### Approach

[video](exclusive-items-approach.mp4)

1. Convert both arrays into sets
2. Iterate through both of them and ensure that each item is not in the set representation.
3. Add those items into a third set.

[exclusive-items.ts](exclusive-items.ts)

## all unique

Write a function, allUnique, that takes in an array. The function should return a boolean indicating whether or not the array contains unique items.

### Approach

[video](all-unique-approach.mp4)

![image.png](/src/structy/hashing/image.png)

This is actually very simply since the set by default deduplicates an array. So it is just about converting the array to a set and comparing the length of it to the length of the array.

### Lessons Learned

- You can get the length of a set using `set.size()`

## intersection with dupes

Write a function, intersectionWithDupes, that takes in two arrays, a,b, as arguments. The function should return a new array containing elements that are common to both input arrays. The elements in the result should appear as many times as they occur in both input arrays. You can return the result in any order.

### Approach

[video](intersection-with-dupes-approach.mp4) This will require a counter hash map since we need to keep track of the amount of duplicates in each array. The result should contain the lowest count of a char in the counter hashmaps

### Walkthrough

[video](intersection-with-dupes-walkthrough.mp4)  
[text](intersection-with-dupes.ts)

### Lessons Learned

- `Math.min()` can be used to get the lowest of two values

## hashing wrap up

[video](hashing-wrap-up.mp4)
