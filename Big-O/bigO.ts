function addUpTo(n: number): number {
    let total: number = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

// Use the global performance object
let t1 = performance.now();
addUpTo(1000000000);
let t2 = performance.now();

console.log(`Elapsed time: ${(t2 - t1) / 1000} seconds.`);
