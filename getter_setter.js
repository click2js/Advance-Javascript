// -----------Getter Method-----------

// get() Method : to define the getter method,
// to get the property value.

const person = {
    name: 'Ghan',
    get getName() {  
         // get method defined here to get the property value
        return this.name;
    }
};

console.log(person.getName);  // Ghan

// In above examle the getter method is called 
// like property key of variable 


// ------------------- Setter Method --------------------

// set() Method to set the property value

const setPeople = {
    fullname: 'GhanShyam',
    set changeFullname(changeValue) {
        this.fullname = changeValue;
    }
};

console.log(setPeople.fullname, "Before seting/updating value");  
// O/P: GhanShyam Before seting/updating value
// Accessing the property value that is defined in the object

setPeople.changeFullname = "Bharat";
// After changing the property value using setter

console.log(setPeople.fullname, "After changing the value");
// O/P: Bharat After changing the value

