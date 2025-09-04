// Implement a function called countUniqueValues which accpets a sorted array, and counts the unique values in the array.
// There can be negative numebrs in the array, but it will always be sorted

function countUniqueValues(arr: number[]): number {
    if (arr.length === 0) return 0;
    let i: number = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
}
