// Working with var for any scope

var fname = "Ghan";
if(true) {
   var fname = "Alok";
   console.log(fname, "name of inside scope");  // Alok name of inside scope
}
console.log(fname, "Out side of scope");  // Alok Out side of scope

// Working with var for functional scope.

var lname = "sharma";

function demoVar() {
    var lname = "panwar";
    console.log(lname, "Inside functional scope"); // panwar
}

demoVar();
console.log(lname, "Outside functional scope");  // sharma

