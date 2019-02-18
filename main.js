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


/////////////////////////MAX SUM///////////////////////////////

//SOLUTION 1
function maxSubarraySum(arr, num) {
    if ( num > arr.length){
      return null;
    }
    var max = -Infinity;
    for (let i = 0; i < arr.length - num + 1; i ++){
      temp = 0;
      for (let j = 0; j < num; j++){
        temp += arr[i + j];
      }
      if (temp > max) {
        max = temp;
      }
    }
    return max;
  }
  
  console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))


//SOLUTION 2
  function maxSubarraySum(arr, num){
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < num) return null;
    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }
  
  console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3],3))
  

  //Are there duplicates solution (Frequency Counter)
function areThereDuplicates() {
  let collection = {}
  for(let val in arguments){
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for(let key in collection){
    if(collection[key] > 1) return true
  }
  return false;
}



//takes two numbers in array and trys to equal to second argument in function Solution (Multiple pointers)
function averagePair(arr, num){
  let start = 0
  let end = arr.length-1;
  while(start < end){
    let avg = (arr[start]+arr[end]) / 2 
    if(avg === num) return true;
    else if(avg < num) start++
    else end--
  }
  return false;
}



//CHECKS WHETER ITEMS IN FIRST STRING APPEAR SOMEWHERE IN SECOND STRING


//isSubsequence Solution - Iterative (Multiple pointers)
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}


//isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
  }


  

///////////Sliding window solutons////////////////

//1.Given an array of integers and a number, write a function that finds the sum of a subarray with the length of the number passed to the function
    // ex:([100,200,3000,400],2)//700
    // ex: ([-3,4,0,-2,6,-1],2)//5
    // ex:([2,3],3)//null

 // maxSubArray Solution

function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}




//2.Write a function that accepts two paramters(an array of positive integers and a positive integer
//function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the 
//integer passed to the function if there isn't one return 0;

//ex:([2,3,1,2,4,3], 7) //2 because [4,3] is the smallest sub array
//ex:([2,1,6,5,4],9) //2 because [5,4] is the smalles sub array
//ex:([3,1,7,11,2,9,8,21,62,33,19],52) //1 because 62 is greater than 52
//ex:([1,4,16,22,5,7,8,9,10],95) //0 

//minSubArrayLen Solution

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // if current window doesn't add up to the given sum then 
		// move the window to right
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // if current window adds up to at least the sum given then
		// we can shrink the window 
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}







//3.Write a function which accepts a string and returns the length of the longest substring with all distinct characters
    // ex: ('') //0
    // ex: ('bbbbbbb') //1
    // ex: ('longestsubstring') //8


//findLongestSubstring Solution

function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
 
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}




////////////////////////////////////////////Recursion//////////////////////////////////////////////

//Call Stack
function takeShower(){
  return "Showering!"
}

function eatBreakfast(){
  let meal = cookFood()
  return `Eating ${meal}`
}

function cookFood(){
  let items = ["Oatmeal", "Eggs", "Protein Shake"]
  return items[Math.floor(Math.random()*items.length)];
}
function wakeUp() {
  takeShower()
  eatBreakfast()
  console.log("Ok ready to go to work!")
}

wakeUp()


//Recursion 2//

// Recursive Version
function countDown(num){
  if(num <= 0) {
      console.log("All done!");
      return;
  }
  console.log(num);
  num--;
  countDown(num);
}
countDown(3)

// Iterative Version
function countDown(num){
  for(var i = num; i > 0; i--){
      console.log(i);
  }
  console.log("All done!")
}


//Recursion 3//

function sumRange(num){
  if(num === 1) return 1; 
  return num + sumRange(num-1);
}

sumRange(4)


//Recursion 4//

//Itteritave version
function factorial(num){
  let total = 1;
  for(let i = num; i > 1; i--){
      total *= i
  }
  return total;
}

//Recursion version
function factorial(num){
  if(num === 1) return 1;
  return num * factorial(num-1);
}


//////////////Helper Method Recursion//////////////////
function collectOddValues(arr){
    
  let result = [];

  function helper(helperInput){
      if(helperInput.length === 0) {
          return;
      }
      
      if(helperInput[0] % 2 !== 0){
          result.push(helperInput[0])
      }
      
      helper(helperInput.slice(1))
  }
  
  helper(arr)

  return result;
}

collectOddValues([1,2,3,4,5,6,7,8,9])

//////////////Pure Recursion//////////////////
function collectOddValues(arr){
  let newArr = [];
  
  if(arr.length === 0) {
      return newArr;
  }
      
  if(arr[0] % 2 !== 0){
      newArr.push(arr[0]);
  }
      
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1,2,3,4,5])
                                      
                                                              
//////////////////////Recursive toy problems///////////////////

function power(base, exp){
  if(exp === 0) return 1;
  return base * power(base,exp-1);
}
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16


// FACTORIAL SOLUTION
function factorial(x){
   if (x < 0 ) return 0;
   if (x <= 1 ) return 1;
   return x * factorial(x-1);
}
//factorial(4) /4*3*2*1


// PRODUCT OF ARRAY SOLUTION
function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}
// RECURSIVE RANGE SOLUTION
function recursiveRange(x){
   if (x === 0 ) return 0;
   return x + recursiveRange(x-1);
}
// FIBONACCI SOLUTION
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}