// A stack is an abstract data structure that follows the Last-In, First-Out (LIFO) principle.

// The last element added to the stack is the first one to be removed.

// You can mimic a stack using an array:
// - Use `push()` to add elements to the top of the stack
// - Use `pop()` to remove elements from the top of the stack

let stack: string[] = [];

// adds google to top of stack
stack.push("google");

// adds instagram to top of stack
stack.push("instagram");

// adds youtube to top of stack
stack.push("youtube");
console.log(stack); // ["google", "instagram", "youtube"]

// remove last-in element
console.log(stack.pop()); // 'Youtube' -> last-in, first out

// You can mimic a stack using an array:
// - Use `unshift()` to move objects in the array to the right
// - Use `shift()` to remove last-in

let stack2: string[] = [];

stack2.unshift("create new file"); // first in
stack2.unshift("resized file"); // second in
stack2.unshift("removed wrinkles"); // last in

console.log(stack2); // ["remove wrinkles", "resized file", "create new file"];

// pop wouldnt work here because the pop() would remove "create new file" because its the last element of the array, but in this case its not last-in

// use shift to remove from the beginning of the array
console.log(stack2.shift()); // 'removed wrinkles'
console.log(stack2.shift()); // 'resized file'
console.log(stack2.shift()); // 'create new file'
