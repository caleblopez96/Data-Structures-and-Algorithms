// EXAMPLE - maxSubarraySum:

// Write a function called maxSubarraySum which accpets an array of integers and a number called n.

// The function should calculate the maximum sum of n consecutive elements in the array

// Example output:
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) // 10 --> [8, 2]
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5] 4) // 17 --> [2, 5, 2, 8]

function maxSubarraySum(arr: number[], num: number): number {
    // check if the target window is greater than the size of the array because
    // you cant find which 5 consecutive numbers are the greatest if the lenght of the array is only 3
    if (num > arr.length) {
        return 0;
    }

    let max: number = -Infinity;

    for (let i = 0; i < arr.length - num + 1; i++) {
        let temp: number = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i + j];
        }
        if (temp > max) {
            max = temp;
        }
        console.log(temp, max);
    }
    return max;
}

console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
// [[2, 6, 9], 2, 1, 8, 5, 6, 3] --> [2, 6, 9] --> 17
// [2, [6, 9, 2], 1, 8, 5, 6, 3] --> [6, 9, 2] --> 17
// [2, 6, [9, 2, 1], 8, 5, 6, 3] --> [9, 2, 1] --> 12
// [2, 6, 9, [2, 1, 8], 5, 6, 3] --> [2, 1, 8] --> 11
// [2, 6, 9, 2, [1, 8, 5], 6, 3] --> [1, 8, 5] --> 14
// [2, 6, 9, 2, 1, [8, 5, 6], 3] --> [8, 5, 6] --> 19
// [2, 6, 9, 2, 1, 8, [5, 6, 3]] --> [5, 6, 3] --> 14

// REFACTOR: maxSubarraySum using Sliding Window

function maxSubarraySum2(arr: number[], num: number): number {
    // if the window size is bigger than the array, return 0
    if (num > arr.length) return 0;

    // get the sum of the first 'num' elements to form the initial window
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        tempSum += arr[i];
    }

    // create a variable to hold the sum of the first window
    let maxSum = tempSum;

    // slide the window across the array by:
    for (let i = num; i < arr.length; i++) {
        // 1. removing the value of the first element from the sum of tempSum (arr[i - num])
        // 2. add the new element to the window (arr[i])
        tempSum = tempSum - arr[i - num] + arr[i];
        // update maxSum if the current window's sum is larger
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

// Example usage:
console.log(maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19

// arr -> array to search
// num -> the size of the subarray(window)
// tempSum -> holds the current windows sum
// maxSum -> holds current max sum

// Step by step:

// 1. Check for edge case: if num (the size of the window) is larger than the array, a max sub array isn't possible, return 0

// 2. Get the sum of the first 'num' elements to form the initial window, and create a variable to hold that value

// 3. Create a variable to hold the maxSum and set it equal to tempSum since its the current highest sum (first window)

// 4. Slide the window across the array by looping through it and:
//  4.1. removing the value of the first element from the sum of tempSum (arr[i - num]) and add the new element to the window (arr[i])
//  4.2 Update maxSum if the current windows sum is larger

// 5. return maxSum

//@ts-ignore: duplicate function name:
function maxSubarraySum2(arr: number[], num: number): number {
    if (num > arr.length) return 0;

    let tempSum: number = 0;
    for (let i = 0; i < num; i++) {
        tempSum += arr[i];
    }

    let maxSum: number = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}
