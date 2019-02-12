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

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) {
        return false
    }
    for(let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1) {
            return false;
        }
        arr2.splice(correctIndex,1) 
    }
    return true;
}

console.log(same([1,2,3,2], [4,1,4,9]))


/////////////////////ANAGRAMS////////////////////////

// SOLUTION 1
function validAnagram(word1, word2) {
    var counts = [];
    var word1Length = word1.length;
    var word2Length = word2.length;
  
    if (word1Length !== word2Length) { return false; }
  
    for (var i = 0; i < word1Length; i++) {
      var index = word1.charCodeAt(i)-97;
      counts[index] = (counts[index] || 0) + 1;
    }
  
    for (var j = 0; j < word2Length; j++) {
      var index2 = word2.charCodeAt(j)-97;
      if (!counts[index2]) { return false; }
      else { counts[index2]--; }
    }
  
    return true;
  }

//SOLUTION 2

function validAnagram(first, second) {
    if (first.length !== second.length) {
      return false;
    }
  
    const lookup = {};
  
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    console.log(lookup)
  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) {
        return false;
      } else {
        lookup[letter] -= 1;
      }
    }
  
    return true;
  }
  
  // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
  console.log(validAnagram('anagrams', 'nagaramm'))


  //////////////////Multiple Pointers///////////////////////

  function sumZero(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}


console.log(sumZero([-4,-3,-2,-1,0,1,2,5]))


  //////////////////Count Unique Values///////////////////////
function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
        console.log(i,j)
    }
    return i + 1;
}

console.log(countUniqueValues([1,1,2,2,2,3,3,4,5,5,6,6,6,7]))