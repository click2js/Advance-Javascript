// Var : Use of var -------------------
// 1. Can be re-assign a new value.
// 2. Variable can be hoiested with var.
// 3. It has functional scope.
// 4. Can be reassign values using var.

example:
var a = 10;
var a = 20;  // variable with var can be reasign.

console.log(a); // O/P: 20

// ------- Inside Scope-----------

var aa = 100;
if(true) {
    var aa = 200;
}

console.log(aa); // O/P: 200
// As no inpact of scope while excuting.
// with in scope variable overide.


//---------Inside functions scope------

var aaa = 500;

function functionalScope() {
    var aaa = 700;
    console.log(aaa, "Inside the functional scope");
    // O/P: 700
}

functionalScope();
console.log(aaa, "Outside functional scope");
// O/P: 500 - As functional variable is not overide.

// ---------------------------------------------

// Use of let keyword-------------------

// 1. let variables can not hoiested.
// 2. let variables can not re-assign.
// 3. it has block scope.

// example:

// let b = 10;
// let b = 20;
// console.log(b);

//Error as we are trying to reassign varaible

let bb = 100;
if(true) {
    let bb = 200;
} 
console.log(bb); // O/P: 100
// As using let we can not reassign value.

bb = 300; 
// but we can override varaible using let.

// Use of const keyword -----------------

// 1. const varaibles can not re-assing.
// 2. const varaibles can not overide.
// 3. It has also block scope.

const cc = 10;
cc = 20;

console.log(cc);

// O/P:TypeError: Assignment to constant variable.

