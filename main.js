function addUpTo(n) {
    let total = 0;
    for(let i = 1; i <= n; i++) {
        total += i;
    }
    return total 
}
function addUpToo(n) {
 return n * (n + 1) / 2;
}

console.log(addUpTo(5))
console.log(addUpToo(6))

var t1 = performance.now();
addUpToo(1000000000);
var t2 = performance.now();
console.log(`Time Passed: ${(t2 -t1) / 1000}seconds`)


//run time complexities

// O(1)                   Fastest
// O(log)                    |
// O(n)                      |
// O(n log n)                v
// O(n^2)                 Slowest



