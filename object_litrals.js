// Without key value pair we can show this 
let fname = "GP";
let age = 25;

let profile = {
    fname,  // Instead of fname:fname we can place only fname
    age     // similarly age:age can be put as age
}

let people = {
    name: 'Devid',
    profile() {
        console.log(`Your name ${this.name}`);
    },
    'display name'() {
        console.log(`Name shoud be diaply here ${this.name}`);
    } 
}

people['display name']();