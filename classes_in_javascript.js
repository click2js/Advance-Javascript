// Class declaration with clas keyword

class People {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
}

const users = new People('Ram', "100");

console.log(users.name, "Printing name"); // O/P: Ram

// Class expression

const People2 = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

console.log(People2.name, "Printing class name");  // Prints the class name


//Class with prototype method


class Users {
    constructor(fname, lname) {
      this.fname = fname;
      this.lname = lname;
    }

    get printFullname() {  
    // getter to call directly as varaible
      return this.fullName();
    }

    fullName() {
        return (`${this.fname} ${this.lname}`)
    }
}

const user = new Users('Matt', 'Macdonalled');

console.log(user.printFullname, "Getter function called"); 


// static variable and method called

class Staticclass {
    constructor(var1, var2) {
      this.var1 = var1;
      this.var2 = var2;
    }

    static var3 = '9999';

    static add(v1,v2) {
       return v1+v2;
    }
}

const add1 = new Staticclass(12,23);
const add2 = new Staticclass(22,43);



console.log(Staticclass.var3);
// Directly calling var3 which is static 
// Using class name

console.log(Staticclass.add(add1.var1,add2.var2)); // O/P : 55