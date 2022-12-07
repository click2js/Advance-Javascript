// simple no argument arrow function

const myArr = _ => console.log("simple arrow function");
// myArr();

// simple arrow function with single argument and for this no curly brakets are required.

const singleArgu = x => console.log(x);
// singleArgu('Hello my function');

// Arrow function with two arguments.

const twoArgu = (x,y) => x+y;

const twoarguResult = twoArgu(4,5);

// console.log(twoarguResult);

// function with this keyword

function Person() {
    this.name = 'Jack', 
    this.age = 25,
    this.sayName  = function() {
      console.log(this.age, "Priniting age inside outer function"); // this is accessable here as it referes to parent function 
      function innerFunction() {
        console.log(this.age);  // Here this referes to parent function not gloabal, but this is defind in global class/function 
      }
      innerFunction();
    }
}

const person = new Person();
// person.sayName();


// Arrow function with this keyword

function Person2() {
    this.name = 'Bharat',
    this.age = 23,
    this.fullName = function() {
        console.log(this.name, "Printing name");  // here this represents to parent function
        const innerFunction = () => {
           console.log(this.age, "Accessing this inside arrow function");  
           // Here this refers to global object so (this.age) is accesable from global object(Parent object).
        }
        return innerFunction();
    }
}

const restPerson = new Person2();
// restPerson.fullName();


// Arrow function not working inside object

let people = {
    name:"Peter",
    age : 33,
    profile: () => {
     console.log(this.age); // Would be undefind as here this referes to global/window object 
    }
}

people.profile();



