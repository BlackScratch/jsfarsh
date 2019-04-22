// let num = 20;

// function showFirstMessage(text){
//     alert(text);
//     let num = 10;
//     console.log(num);
// }
// showFirstMessage("hello world!");
// console.log(num);//внаале функция ищет переменную внутри себя, потом она ищет на глобальном уровне. замыкание - функция вместе со всеми переменными, которые ей доступны.

// let calc = function calc(a,b){ // классический пример function expression. Нельзя вызвать до того, как объявили.
//     return (a * b);
// }

let calc = (a,b) => a*b; //можно также записывать как {a + b}

console.log(calc(5,10));

function retVar(){
    let num = 51;
    return num;
}
//функции могут работать ещё до того, как объявлены в коде
let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);//  это свойства. То есть мы получаем просто инфу  очем либо
console.log(str.typeof);


console.log(str.toUpperCase());

let twelve = "12.2px";

//console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));// оставляет плавающую точку

//call back function функция, которая должна быть выполнена после того, как другая завершила свое выполнение.
function first(){
    setTimeout(function(){
        console.log(1);
    },500);
}

function second(){
    console.log(2);
}

first();
second();

function learnJS(lang,callback){
    console.log("я учу " + lang);
    callback();
}

function done(){
    console.log("Я прошел третий урок");
}

learnJS("Javascript", function(){
    console.log("Я прошел третий урок");
})

learnJS("Javascript", done());