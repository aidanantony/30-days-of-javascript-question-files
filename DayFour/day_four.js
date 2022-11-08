/*Exercise 1: Get user input using prompt(“Enter your age:”). 
If user is 18 or older , give feedback:'You are old enough to drive' 
but if not 18 give another feedback stating to wait for the number of years he needs to turn 18
*/

function ageCheck(age) {
  if(age >= 18) {
    console.log('You are old enough to drive')
  }
  else {
    console.log(`You must wait ${18 - age} years to drive`)
  }
}

ageCheck(14);

//Exercise 2: If a is greater than b return 'a is greater than b' else 'a is less than b'. 

function numCheck(a,b) {
  if (a > b) {
    console.log('a is greater than b')
  }
  else {
    console.log('b is greater than a')
  }
}
numCheck(10,8);

//Exercise 3: Check if a number is even
function isEven(num) {
  if(num % 2 === 0) {
    console.log('The number is even');
  } else {
    console.log('The number is odd');
  }
};
isEven(5);