//Exercise 1: Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days of Javascript';

//Exercise 2: Print the string on the browser console using console.log()
console.log(challenge);

//Exercise 3: Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//Exercise 4: Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

//Exercise 5: Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());

//Exercise 6: Cut (slice) out the first word of the string using substr() or substring() method
console.log(challenge.substring(3,21));

//Exercise 7: Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(challenge.substring(0,3))

//Exercise 8: Check if the string contains a word Script using includes() method
console.log(challenge.includes('Script'));

//Exercise 9: Split the string into an array using split() method
console.log(challenge.split(0,3))

//Exercise 10: I hope this course is not full of jargon. Check if jargon is in the sentence.
let sentence = 'I hope this course is not full of jargon';
console.log(sentence.includes('jargon'));

//Exercise 11: Generate a random number between 0-100
console.log(Math.floor(Math.random()*101));