'use strict';

a = 5;
console.log(a);

var leftBorderWidth = 1;
{
    let second =2;
}

const pi =3.14;

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let person = {
    name: "John",
    age:47,
    isMarried: false 
};

console.log(person["age"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
//console.log(arr[0]);

//alert("Hello World");

// let answer = confirm("Are you here?");
// console.log(answer);

//let answer = +prompt("Есть ли вам 18 лет?", "Да");
//console.log(typeof(answer));
// console.log("arr" + "-object");
// console.log(4 + +"-object");

let incr = 10,
    decr = 10;

  
console.log(incr++);
console.log(decr--);
console.log(5%2);
console.log("2" === 2);

let isChecked = false,
    isClose = false;
console.log(isChecked || !isClose);
