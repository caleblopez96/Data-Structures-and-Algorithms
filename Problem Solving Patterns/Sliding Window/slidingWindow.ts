// lets say we want to create a function to find the largest sum of numbers using only 3 consectutive numbers in the array.

// Heres how the "window" would slide:

// [[1, 2, 5], 2, 8, 1, 5] --> [1, 2, 5] --> 8
// [1, [2, 5, 2], 8, 1, 5] --> [2, 5, 2] --> 9
// [1, 2, [5, 2, 8], 1, 5] --> [5, 2, 8] --> 15
// [1, 2, 5, [2, 8, 1], 5] --> [2, 8, 1] --> 11
// [1, 2, 5, 2, [8, 1, 5]] --> [8, 1, 5] --> 14

// you basically create a variable, like a number, a string, or another sub array, to use as a "window"
