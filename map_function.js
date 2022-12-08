// Map Function: Modifying values of array and object we use map function

// Converting upper case to array elements

const carArr = ["BMW", "Toyta", "Tata", "Jeep", "Honda"];

const upperCase = (arr) => {  // Function to accept the array 
  return arr.map((res) =>{
     return res.toUpperCase();  // Map function returns the new array with upper case.
  });
}

// console.log(upperCase(carArr));


// Adding doller in each element of array using map function

const priceArr = [100, 300, 200, 400, 450, 630, 540];

const addDoller = (arr) => {
   return arr.map((res)=> {
      return ('$'+res);  // Added doller sign in each element of array
    });

}

console.log(addDoller(priceArr)); 



