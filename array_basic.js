//1. Array push: 
//Adding any element at last index of array.
const arrPush = ['devid', 'Elon', 'Matt', 'Fat'];
arrPush.push('Sara');
console.log(arrPush, "Pushing array"); 

// Sara would add in last 
// ---------------------------------------

//2. Array Pop: 
//Removing element from last of index of Array.
const popArr = [10,20,30,40,50];
popArr.pop();
console.log(popArr, "Removing element");
// 50 would be removed from last
// ---------------------------------------

//3. Array Shift
// Removing element from start index of array.
const shiftArr = [20,30,40,50,60];
shiftArr.shift();
console.log(shiftArr, "Shifting");
//O/P:  [30,40,50,60]
// ---------------------------------------

//4.Converting array to string

const arrString = ['20','30','40'];
arrString.toString();
console.log(arrString, "Array to string");


//5. Sort Array
const sortnumericArr = [20,40,10,60,30];
const sortAlphabetically = ['Ron', 'Harry', 'Devid', 'Neil'];
sortnumericArr.sort();
sortAlphabetically.sort();
console.log(sortnumericArr, "Numeric sort");
console.log(sortAlphabetically, "Alphabetic sort");
