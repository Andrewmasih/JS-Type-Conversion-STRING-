/* using the 'string()' method.

sometimes we need to convert ARRAYs into STRINGs, we can use 2 ways to achive this, we can call tostring() method to the array we want to convert to a a string, that methos will return a string without changing the original array. 
*/

let colours = ["red", "blue", "yellow", "black", "white"];

let coloursString = colours.toString();

// converts colours to a string

console.log(coloursString)

// what is the colourString type?

typeof(coloursString);