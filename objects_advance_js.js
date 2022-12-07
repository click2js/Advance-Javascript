let people = new Object();  // Object constructor
let people2 = {};
console.log(typeof people, typeof people2);  // Object literals

// Object with key value pair

const students = {
    name: 'Matt',
    age : 23
}

students.address = "US";
delete students.age;  // deleting property inside the object 
console.log(students);

const student2 = {
    name: 'Devid',
    age: 44,
    "Address of city": "Canada"  // Key may be with double quotes 
};

console.log(student2["Address of city"]);


const student3 = {};

student3.profile = 'Student of India';   // setting value in the object
student3['Hobby of student'] = "Cricket";  // Setting as key with double quotes
console.log(student3);

// Assesing value from outer varaible as key

const student4 = {
    name: "Ross",
    age: 30
};

let key = "name";
console.log(student4.key);  // here output would be undefind as key with double quotes are not acceesable

console.log(student4[key]);  // O/P :  Ross

// Adding and prining values from functions

function studentFullprofile(name, age) { // Returning values as object
   return {
    name,
    age
   }
}

let studentResult = studentFullprofile('Donna', 33);

console.log(studentResult);

// For In loop in object

const stuData = {
    name:'John',
    age: 77,
    addrss: 'UK'
}

for(let data in stuData) {
    console.log(data);  // when performing loop this would always prints key of object
    console.log(stuData[data]);  // Here whiling looping all values would prints as we used key in the object
}


// Copy objects

const obj = {
    name:'kk',
    age: 40
}

const copyObj = obj;
copyObj.address = 'canada';  // Adding object field here...

console.log(copyObj, "Copy objects");
console.log(obj, "original object"); // address updated here also

// Copying by directly assigned would copy its reference/address too so original object affected

// *Solution how to copy so that on change in copy object would not effect in original object

const originalObj = {
    name:'bk',
    age: 50
}

const copiedObject = {...originalObj}  // copy with spread syntax

copiedObject.address = "china";

console.log(copiedObject, "Copied Object after copy");

console.log(originalObj, "Original object after copy");

// Output

//{ name: 'bk', age: 50, address: 'china' } Copied Object after adding address field
//{ name: 'bk', age: 50 } Original object after adding address field

// Note : Here we can see that after copy with spread operator the original object unchanged


// Multi level object coping

const objectTwo = {
    name:'Max',
    address: {
      country: {
        cname: "china"
      }
    }
}

const copyobjectTwo = {...objectTwo};  

copyobjectTwo.address.country = "India";

console.log(objectTwo, "objectTwo");

console.log(copyobjectTwo, "copyobjectTwo");

// On copy with this would not affect and both new and old object
// updated with country as india

// Output

// { name: 'Max', address: { country: 'India' } } objectTwo
// { name: 'Max', address: { country: 'India' } } copyobjectTwo

// * Solution to fix this multilevel object to copy and not afffect original object

const copyobjectTwo2 = JSON.parse(JSON.stringify(objectTwo));  
copyobjectTwo2.address.country = "India";
console.log(objectTwo, "objectTwo");
console.log(copyobjectTwo2, "copyobjectTwo");

// Output

// { name: 'Max', address: { country: { cname: 'china' } } } objectTwo
// { name: 'Max', address: { country: 'India' } } copyobjectTwo
