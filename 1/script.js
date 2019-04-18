'use strict';

var leftBorderWidth = 1;
console.log(leftBorderWidth)
let second= 2;
const p = 3.14;

var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string'*9);

let persone = {
    name:"John",
    age:25,
    isMarried: false
};

console.log(persone["name"]);
let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[0]);

//alert("Hello world");

// let  answer = confirm("are you here?");
// console.log(answer);

// let  answer = +prompt("are you here?", "ага");//+ перед prompt превращает в число
// console.log(answer);
// console.log(typeof(answer));

// console.log("arr" + " - boject");

// console.log(4 + +" - boject");//+ перед prompt превращает в число

let incr = 10,
    decr = 10;

incr++;
decr--;

console.log(++incr);//префиксная форма
console.log(--decr);

console.log(incr++);//вначале показывает, потом изменяет постфиксная формула
console.log(decr--);

console.log(5%2);
console.log("2"===2);//проверяет также тип данных

let isChecked = true,
isClose = true;

console.log(isChecked && isClose);
console.log(isChecked || isClose);//если хотябы один тру, то вернёт тру
