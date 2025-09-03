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
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);
    return true;
}

// Time Complexity O(n)
