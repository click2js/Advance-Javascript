// Falsy values
// 0, undefind, null, NAN, ""(empty string)
// These above all are falsy vaues 

example:

if(0) {
    console.log(`Inside false statement`);
} else {
    console.log(`Inside true statement`); // O/P
}

let undefindVar; 
// If not any value is assigned then that would be a undefind 

if(undefindVar) {
    console.log(`Inside false statement`);
} else {
    console.log(`Inside true statement`); // O/P
}

// But [] (empty array) and {} (empty object) is objects are not falsy values they are truthy values

example:

if([]) {
    console.log(`inside empty array`);  // O/P
} else {
    console.log(`inside else of empty array`);
}


if({}) {
    console.log(`inside empty object`);  // O/P
} else {
    console.log(`inside else of empty object`);
}