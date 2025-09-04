function ransomNote(ransomNote: string, magazine: string): boolean {
    // 1. Create a Map to store counts of letters in the magazine
    let magMap = new Map<string, number>();

    // 2. Loop through the magazine string
    //    For each character:
    //      - If it exists in the map, increment its count
    //      - If it doesn't exist, set count to 1
    for (let char of magazine) {
        magMap.set(char, (magMap.get(char) || 0) + 1);
    }

    // 3. Loop through each character in the ransom note
    for (let char of ransomNote) {
        if (!magMap.has(char) || magMap.get(char)! <= 0) {
            return false;
        }

        magMap.set(char, magMap.get(char)! - 1);
    }
    return true;
}

// Test examples:
console.log(ransomNote("aa", "aab")); // -> should return true
console.log(ransomNote("aa", "ab")); // -> should return false
console.log(ransomNote("az", "abz")); // -> should return true

// Create an empty map to store character counts for magazine.

// Loop through each character in magazine:  a. If the character is not in the map, add it with value 1.  b. If it is already in the map, increment its value by 1.

// Loop through each character in ransomNote:  a. If the character is not in the map or its value is 0, return false.  b. Otherwise, decrement the value in the map by 1.

// If you finish the loop, return true.

// magazine = "aab"
// a -> 2
// b -> 1

// key = letter
// value = frequency
