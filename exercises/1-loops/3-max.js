/*
Max
Given an array of numbers, create a function to return the maximum 
*/

function max(numbers){
    let biggestNum = -Infinity
  for(let i=0; i < numbers.length; i++){
      if(numbers[i]> biggestNum && numbers[i] % 2 === 0){
          biggestNum = numbers[i]
      }
  }
  return biggestNum
}

const numbersArray1 = [-4,-2];
const numbersArray2 = [7,8,5,7,3,6];

console.log("Maximum number in first array is " + max(numbersArray1));
console.log("Maximum number in second array is " + max(numbersArray2));