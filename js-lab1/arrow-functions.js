// Regular function
function sayHello() {
    return "Hello, world!";
}

const sayHelloArrow = () => "Hello, world!";

// Regular function
function double(x) {
    return x * 2;
}

const doubleArrow = x => x*2;

// Regular function
function add(x, y) {
    return x + y;
}

const addArrow = (x, y)=> x + y;

// Regular function
const person = {
    name: "Alice",
    sayHi: function() {
        return "Hi, " + this.name + "!";
    }
};

const personArrow = {
    name: "Alice",
    sayHi: ()=> "Hi, " + this.name + "!"
}
// Regular function
const numbers = [1, 2, 3, 4, 5];

const doubled = [];
numbers.forEach(function(num) {
  doubled.push(num * 2);
});

const numbersArrow = [1,2,3,4,5];

const doubledArrow = [];
numbersArrow.forEach(num => doubledArrow.push(num*2));

console.log(sayHello());
console.log(sayHelloArrow());

console.log(double(2));
console.log(doubleArrow(2));

console.log(add(3, 5));
console.log(addArrow(3, 5));

console.log(person);
console.log(personArrow);
console.log(person.sayHi());
//console.log(personArrow.sayHi()); -> this. does not function as expected

console.log(doubled);
console.log(doubledArrow);