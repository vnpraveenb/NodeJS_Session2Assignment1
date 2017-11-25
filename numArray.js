/* Create an array
var numbers=[3,4,5,6,67,8];
To sort the array numbers and then unshift an element to first position.
Add two number in the second position
*/

var numbers=[3,4,5,6,67,8]; // A initialized array of numbers
console.log("\nArray of numbers: " + numbers);


// Sorts the numbers array
numbers.sort(function(a, b){return a-b});
console.log("\nSorted array: " + numbers);


// Unshifts an element to the numbers array
numbers.unshift(10);
console.log("\nThe array after unshifting an element: " + numbers);


// Adds two new elements in the second index 
numbers.splice(1,0,25,7);
console.log("\nThe array after adding two elements after the 2nd index: " + numbers);


// I am writing this code because I'm still unsure about the question. Ignore this part if above is what the question meant. The confusion is there because of question asking to add 2 numbers in 2nd location which can be done using an array of 2 numbers.

 var twoNumbers = [2,1]; // An array of 2 numbers
 
// Adds an array with two new elements in the second index after removing the 2 elements added in the previous step
numbers.splice(1,2,twoNumbers);
console.log("\nThe array after removing 2nd and 3rd elements and adding an array consisting of 2 elements in the 2nd index : " + numbers);
console.log();

 