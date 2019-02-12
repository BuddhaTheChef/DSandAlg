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



////////////// 5 STEPS TO SOLVE A PROBLEM? ///////////////////

//1. UNDERSTAND THE PROBLEM
// -restate the problem in own words 
// -what are the inputs that go into the problem
// -what are the ouputs that should come out of the problem
// -do i have enough info to solve the problem
// -how should I label the improtant parts of the problem

//2. EXPOLORE EXAMPLES
// -start with simple examples
// -progress to more complex examples 
// -explore examples with empty inputs
// -explore examples with Invalid inputs

//3. BREAK IT DOWN
// -write sudo code or write out problem
// -write the different steps and possible variables in problem

//4. SOLVE & SIMPLIFY

//5. LOOK BACK AND REFACTOR
// -can you check the result?
// -can you come up with the answer diffrently?
// -can you understand it?
// -can you use result for other problems?
// -can you improve performance of solution?
// -can you refactor more?
// -how have others solved this problem?


 function charCount(str) {
    let obj = {};
    for(char of str) {
        char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)) {
            if(!obj[char]) {
                obj[char] = 1
            }
            else {
                obj[char]++
            }
        }
    }
    return obj;
}

console.log(charCount('Hello Hi'))