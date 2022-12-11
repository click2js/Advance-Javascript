// Difference between == and ===

// == is checking with value only and converting type Coercion

// Type Coercion refers to the process of automatic
// or implicit conversion of values from one data type to another.

// But for === is only checking the type of data type and its value it is not compairing type Coercion

// Example: '12'==12 returns true as in type Coercion '12' string type is converted into 12

console.log(typeof '12');  // string

// Using(==) type Coercion....................
if('12'==12) {
    console.log(`It convert '12' to 12 using type Coercion`); // O/P
} else {
    console.log(`It not convert '12' to 12 using type Coercion`);
}

// Using (===) with data type and its value

if('12'===12) {
    console.log(`It convert '12' to 12 using ===`); 
} else {
    console.log(`It not convert '12' to 12 using ===`); // O/P
}
