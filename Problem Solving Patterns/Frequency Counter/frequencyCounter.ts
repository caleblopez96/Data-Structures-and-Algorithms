// Frequency Couners

// This pattern uses objects or sets to collect values/frequencies of values

// This can often avoid the need for nested loops or O(N^2) operations with arrays and strings

// EXAMPLE:
// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequence of values must be the same

// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [1, 9]) // false
// same([1, 2, 1], [4, 4, 1]) // false (muist be same frequency)

// Naive solution with nested loops:
//@ts-ignore: duplicate function names
function same(arr1: number[], arr2: number[]): boolean {
    // if arrays dont have the same length,
    // it's impossible for every value in arr1 to have its square in arr2
    // return false
    if (arr1.length !== arr2.length) {
        return false;
    }

    // loop through each element in arr1
    for (let i = 0; i < arr1.length; i++) {
        // find the index of the square of arr1[i] in arr2
        let correctIndex = arr2.indexOf(arr1[i] ** 2);

        // ff the squared value is not found in arr2, return false
        if (correctIndex === -1) {
            return false;
        }

        // remove the found squared value from arr2
        // this ensures we don't count it twice
        arr2.splice(correctIndex, 1);
    }

    // If we successfully find and remove all squared values, return true
    return true;
}

// Example usage:
// Checks if every value in the first array has its square in the second array
console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true

// step 1:
// square root of arr1[0] = 1 -> arr2 contains 1 at index 2 -> true -> splice it out
// square root of arr1[1] = 4 -> arr2 contains 4 at index 2, 3 -> true -> splice it out
// square root of arr1[2] = 9 -> arr2 contains 9 at index 1 -> true -> splice it out
// square root of arr1[3] = 4 -> arr2 contains 4 at index 2, 3 -> true -> splice it out

// REFACTORED:

//@ts-ignore: duplicate function names
function same(arr1: number[], arr2: number[]): boolean {
    // if arrays don't have the same length,
    // it's impossible for every value in arr1 to have its square in arr2
    if (arr1.length !== arr2.length) {
        return false;
    }

    // create frequency counter objects to store counts of each value
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    // build frequency map for arr1
    for (let val of arr1) {
        // increment the count for this value:
        // - if the value is not yet in the map, default to 0, then add 1
        // - if it already exists, add 1 to the existing count
        // this records how many times each number appears in arr1
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    // build frequency map for arr2 in the same way
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    // check if each value in arr1 has its square in arr2 with the same frequency
    for (let key in frequencyCounter1) {
        let numKey = Number(key); // Convert the string key to a number

        // if the square of the number doesn't exist in arr2, return false
        if (!(numKey ** 2 in frequencyCounter2)) {
            return false;
        }

        // if the frequency of the square in arr2 doesn't match the frequency in arr1, return false
        if (frequencyCounter2[numKey ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }

    // if all checks pass, every value in arr1 has its square in arr2 with correct frequency
    return true;
}

// Time Complexity O(n)

// Step-by-step:

// 1. Check array lengths
//  - If arr1 and arr2 have different lengths, they can’t match the “squared” requirement, so the function returns false immediately.

// 2. Create frequency counters
//  - frequencyCounter1 will track how many times each number appears in arr1.
//  - frequencyCounter2 will track how many times each number appears in arr2.

// 3. Loop through each value in arr1.
//  - Increment its count in frequencyCounter1, or start at 1 if it doesn’t exist yet.
//  - Example: [1, 2, 2] → {1: 1, 2: 2}

// 4. Same as above, but for arr2.

// 5. Loop through frequencyCounter1 keys
//  - Look at each key (number) in frequencyCounter1.
//  - Convert the key to a number because object keys are strings in JavaScript/TypeScript.

// 6. Check if squared key exists in frequencyCounter2
//  - If numKey ** 2 is not a key in frequencyCounter2, return false.

// 7. Check frequencies match
// - If the count of numKey ** 2 in frequencyCounter2 doesn’t equal the count of numKey in frequencyCounter1, return false.

// Return true if all checks pass
//  - If every key passes the above checks, all numbers in arr1 have their squares in arr2 with the same frequency, so return true.

//@ts-ignore: duplicate function name
function same(arr1: number[], arr2: number[]): boolean {
    if (arr1.length !== arr2.length) {
        return false;
    }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
    }

    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
    }

    for (let key in frequencyCounter1) {
        let numKey = Number(key);
        if (!(numKey ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[numKey ** 2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}
