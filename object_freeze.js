// The Object.freeze() method preserve an object.
// Freezing an object prevents adjunct and
// makes existing objects properties unwritable and unconfigurable.

const obj = {
    age:34
};

Object.freeze(obj);  // Syntax to freeze object\

// Now if we try to update property value then that would not update

obj.age = 44;

console.log(obj.age, "After changing/updating in object"); 

// O/P: 34 After changing/updating in object

// Here in above example the output of age property
// remains 34 means it would not changed

