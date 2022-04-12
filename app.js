console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
 
function plus(num) {
     return (plusNum) => (plusNum += num); // first half - this will return an anonymous function
 }; 
    let plus15 = plus(15); 
 
   console.log(plus15(10));


/*
1) declare a function plus(number)
*function plus(num) {
2) Inside the body of plus, use the return keyword to return
 an anonymous function
 * return () =>
3) The return function will take in a plusNumber parameter, and return
   the value of plusNumber with the first parameter number
   *return (plusNum) => (plusNum += num); 
4) Next, declare a variable plus15 that is assigned the value of
   plus with 15 passed in
   * let plus15 = plus(15); */


   //CAN USE AIR Function!! const plus = () => {


//FOR 2) can use "return function (){};"" is the same as air notation "return () => ;"
//IF YOU ONLY HAVE A SHORT FUNCTION, THIS IS WHAT YOU WILL SEE AND HOW YOU WILL WRITE IT

const plusN = (numbers) => {
    return (plusNumber) => num += plusNumber;
};
   const plusN15 = plus(15);

   console.log(plusN15(20));//35

   const numbers = [1, 2, 3, 4, 5]

   plus15(...numbers);//only goinG to print out 16
   //but if you did expect to have five number you could use the 
   //spread operator
// same as
//plus15(1, 2, 3, 4, 5);//only going to print out 16
// when you call this, only going to look for the one num its looking for


const tanner = {
    fname: "Tanner",
    lname: "Riddle",
    makesSenseDoppleganger: "Tom Riddle",
    favSpell: "Avada Kedavra",
    favSpell: function () {
        console.log(this.favSpell);

    },
};

//when you want to bind the object(owner) to this - MUST use "FUNCTION Declaration"
//IF YOU USE AIR NOTATION HERE, IT WOULD NOT BIND THIS TO THE OWNER
//WHEN DEFINING METHODS - BEST PRACTICE IS TO USE "FUNCTION DECLARATION"
// can use this
//tanner.makesSenseDoppleganger; //"Tom Riddle"

let { makesSenseDoppleganger } = tanner;
//using destructure an object
console.log(makesSenseDoppleganger);

//if want to destruture the array "the third one"
//in an array -  destructure with ,, to the spot the [INDEX value] is in then name of placement
//unless it the first [INDEX]
let [ ,, third] = numbers;
console.log(numbers[2]); // or
console.log(third);




