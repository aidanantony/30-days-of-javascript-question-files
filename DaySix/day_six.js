//Question 1. For Loop from 0-100 with only evens printed
for (let i = 0; i<101; i+=2) {
  console.log(i)
};

//Question 2. For loop from 0-100 with only odd printed
for (let i=1; i<101; i+=2) {
  console.log(i)
};
//Question 3. For loop from 0-100 while adding each value. Answer should be 5050
let answer = 0;
for (let i = 0; i<=100; i++) {
  answer += i
}
console.log(answer);
