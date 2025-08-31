// EXAMPLE:
// Write a function called sumZero which accepts a sorted array of integers.

// The function shoud find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair does not exist

// EXAMPLE: BRUTE FORCE
// Time Comlpexity - O(N^2)
// Space Complexity - O(1)

function sumZero(arr: number[]): number[] | undefined {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3, 3]
// compare -3(arrayi) to every single item in the array until condition

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
// STEP 1: Start with the first i element (-4)
// Compare i (-4) with each element to the right (j)

// (i = 4), (j = -3) --> -4(i) + -3(j) != 0
// (i = 4), (j = -2) --> -4(i) + -2(j) != 0
// (i = 4), (j = -1) --> -4(i) + -1(j) != 0
// (i = 4), (j = 0) --> -4(i) + 0(j) != 0
// (i = 4), (j = 1) --> -4(i) + 1(j) !=0
// (i = 4), (j = 2) --> -4(i) + 2(j) != 0
// (i = 4), (j = 5) --> -4(i) + 5(j) != 0
// CONDITION NOT MET --> MOVE TO ITERATION 2

// STEP 2: Move to the second i element (-3)
// Compare i (-3) with each element to the right (j)
// (i = -3), (j = -2) --> -3 + -2 != 0
// (i = -3), (j = -1) --> -3 + -1 != 0
// (i = -3), (j = 0) --> -3 + 0 != 0
// (i = -3), (j = 1) --> -3 + 1 != 0
// (i = -3), (j = 2) --> -3 + 2 != 0
// (i = -3), (j = 5) --> -3 + 5 != 0
// CONDITION NOT MET --> MOVE TO ITERATION 3

// STEP 3: Move to the third i element (-2)
// Compare i (-2) with each element to the right (j)
// (i = -2), (j = -1) --> -2 + -1 != 0
// (i = -2), (j = 0) --> -2 + 0 != 0
// (i = -2), (j = 1) --> -2 + 1 != 0
// (i = -2), (j = 2) --> -2 + 2 = 0 --> CONDITION MET --> returns [-2, 2]

// REFACTOR: Using two pointers

//@ts-ignore: Duplicate function name
function sumZero(arr: number[]): number[] | undefined {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        if ((sum = 0)) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]));
// Iteration 1:
// - Left = -4, Right = 5
// - Sum = -4 + 5 = 1 → not 0
// - Sum > 0 → move right pointer left
// - Right now points at 2

// Iteration 2:
// - Left = -4, Right = 2
// - Sum = -4 + 2 = -2 → not 0
// - Sum < 0 → move left pointer right
// - Left now points at -3

// Iteration 3:
// - Left = -3, Right = 2
// - Sum = -3 + 2 = -1 → not 0
// - Sum < 0 → move left pointer right
// - Left now points at -2

// Iteration 4:
// - Left = -2, Right = 2
// - Sum = -2 + 2 = 0
// - Pair found → return [-2, 2]
