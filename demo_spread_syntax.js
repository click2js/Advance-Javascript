// Inside the function call

const sum = (x,y,z) => {
   return x+y+z;
}

const numbers = [1,2,3]; // Array
// console.log(sum(...numbers)); // Spread


//1. Extending Array/ Copying array

const arr1 = ['aa', 'bb','cc'];
const arr2 = ['pp', false];
const newMergedarray = [...arr1, ...arr2];

// console.log(newMergedarray); 

//2. Example of spread with Reduce function that adds the values

function sumArray(...arg) {
  return arg.reduce((res, ele) => res+ele, 0);
}

const numberArray = [3,4,5,6];

// console.log(...numberArray, "Out from array");

const resultSum = sumArray(...numberArray);

// console.log(resultSum, "Sum with reduce");


// Converting string to array

const demoString = 'SpreadOperator';

const resultArray = [...demoString];

// console.log(resultArray, "resultArray");


// Issue with cloning array and fixing with Spread operator

// With direct copying

const array1 = [2,5,6];

const array2 = array1; // Copying in array2 means the referance is copied to array2

array2.push(14);

console.log(array1, "array1 elements");

console.log(array2, "array2 elememts");

// With Spread operator

const array11 = [2,5,6];

const array22 = [...array11]; // Copying in array22 here and when pushing would not any impact on first array element

array22.push(14);

console.log(array11, "array11 elements");

console.log(array22, "array22 elememts");

