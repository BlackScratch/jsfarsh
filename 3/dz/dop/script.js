'use strict';

let str = "урок-3-был слишком легким";

//Сделать так, чтобы строка начиналась с большой буквы
let newStr = str[0].toUpperCase() + str.slice(1);
alert (newStr);

//2) Теперь замените все “-” на пробелы
//Вывести в консоль то, что получилось
let changer = str.replace(/-/g, " ");
console.log(changer);

//Из получившейся строки вырезать слово “легким”,
let arr1 = changer.split(' ');
let lastWord = arr1[arr1.length - 1];
console.log(lastWord);

//в этом же слове заменить 2 последние буквы на букву “о”
var changeWord = lastWord.slice(0, -2) + 'о' + 'о';
console.log(changeWord);

//У вас также есть массив arr = [20, 33, 1, “Человек”, 2, 3]
let arr  = [20, 33, 1, "Человек", 2, 3];
//console.log(arr);

for(let i=0; i<arr.length; i++){
 
    if((typeof arr[i])==='number'){
        console.log('Найдена');
    }
}

console.log(Math.pow(arr[0], 3));

// Вывести в консоль квадратный корень из суммы кубов его элементов (Да, человека нужно исключить)
console.log(Math.sqrt(Math.pow(arr[0], 3) + Math.pow(arr[1], 3) + Math.pow(arr[2], 3) + Math.pow(arr[4], 3) + Math.pow(arr[4], 3)));


function testTypeOf(stringToTest){
    if((typeof stringToTest)==='number'){
        alert('Вы ввели число, а надо строку!');
    }
//   В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
    console.log((stringToTest).trim());
    
}
testTypeOf(' Тестовое значениеasdfasdfasdfasdfasdfasdfdffasdfasdfadsfadsfdasfdasfadsfdasfdasfdsaffffffffffffffffffffff ')

function cutstring(stringer){
    console.log(stringer.substring(0,50)+'...');
}

cutstring(' Тестовое значениеasdfasdfasdfasdfasdfasdfdffasdfasdfadsfadsfdasfdasfadsfdasfdasfdsaffffffffffffffffffffff ');