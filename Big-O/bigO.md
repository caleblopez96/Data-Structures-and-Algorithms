Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number _n_

EXAMPLE 1:

```typescript
function addUpTo(n: number): number {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(addUpTo(6)); // 21
// 1, 2, 3, 4, 5, 6
// 1 + 2 + 3 + 4 + 5 + 6 = 21
```

EXAMPLE 2:

```typescript
function addUpTo(n: number): number {
    return (n * (n + 1)) / 2; // 21
}
```

When we look at the two examples above, how do we determine which one is better? Do we look at:

-   Faster? => what code runs the fastest?

-   Less memory-intensive => what code is more memory efficient?

-   More readable? => brevity != better

Well, why not use a timer?

```typescript
function addUpTo(n: number): number {
    let total: number = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}
// create a timestamp to be used as start time
let t1 = performance.now();

// run the function to time
addUpTo(1000000000);

// set a timestamp to be used as end time
let t2 = performance.now(); // see when the end timer runs

// calculate difference between end and start
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
// Function run 1:
// Time Elapsed: 1.1547999999998138 seconds.

// Function run 2:
// Time Elapsed: 1.2542847823579828 seconds.
```

```typescript
function addUpTo(n: number): number {
    return (n * (n + 1)) / 2; // 21
}

let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
// Function run 1:
// 0

// Function run 2:
// 0
```

The problem with using time to measure the performance of code:

-   Different machines will record different times

-   The _same_ machine will record different times

-   For fast algorithms, speed measurements may not be precise enough

Timing code isn't a bad thing. But what if a certain block of code took something like 4 hours to complete?

Big-O gives you a way to measure the performance of code in general terms

Big-O looks to count the number of simple operations the computer has to perform. One advantage to this is it doesn't change based on the computer

EXAMPLE 1:

```typescript
function addUpTo(n: number): number {
    return (n * (n + 1)) / 2;
}
// Operation 1: +
// Operation 2: *
// Operation 3: /

// 3 simple operations, regardless of the size of n
// n could be 5, or it could be a 500000. Only 3 operations will be performed.
```

EXAMPLE 2:

```typescript
function addUpTo(n: number): number {
    let total: number = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}
// Operation 1: total += i => an addition and an assignment
// Since its in a loop, it has to run n times:
// which means n additions (+) and n assignments(=)

// Operation 2: let i = 0 => 1 assignment

// Operation 3: i++ => n additions and n assignments

// Operation 4: let total = 0; => 1 assignment

// Operation 5: i <= n => n comparisons
```

Depending on what we count, the number of operations can be as low as 2n or as high as 5n + 2 => 5 operations dependent on assignments + 2 that arent
