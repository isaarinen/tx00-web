/*
--- Step 0 ---
*/
/*
Function declarations get fully hoisted, 
meaning you can run them before they are declared in the code,
whereas function expressions are hoisted but not assigned
until the code execution reaches its origin place
*/

/*
--- Step 1 ---
*/

// 1.
function cube(x) {
  return x * x * x;
}

const cube = function(x) {
    return x * x * x;
}

// 2.
function fullName(first, last) {
  return first + " " + last;
}

const fullName = function(first, last) {
    return first + " " + last;
}

// 3.
function power(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

const power = function(base, exp) {
    if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
}

// 4.
function sumCubes(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}

const sumCubes = function(numbers) {
    let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
}

/*
--- Step 2 ---
*/

// 1.
/*
message is not defined when console.log runs, 
instead it is hoisted and initialized with undefined
*/

// 2.
/*
variables declared with let are hoisted but not initialized, it will error
*/

// 3.
/*
referenceerror, const is hoisted but not initialized
*/

// 4.
/*
functions are hoisted, and as they are not variables they do not need initialization
*/

/*
--- Step 3 ---
*/

// 1.

let values = [10, 20, 30];
for(let i = 0; i < values.length; i++){
  console.log(values[i]);
}

// 2.
let lastLogin = '1/1/1970';

console.log(welcome('Charlie', 'Munger'));

function welcome(first, last) {
  return `Welcome, ${first} ${last}! You last logged in on ${lastLogin}.`
};

