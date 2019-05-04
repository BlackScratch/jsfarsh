


// function User(name, id){
//     this.name = name;
//     this.id=id;
//     this.human = true;
//     this.hello = function(){
//         console.log('Hello' + this.name);
//     }
// }
//стандарт es6
// class User{
//     constructor(name,id){
//     this.name = name;
//     this.id=id;
//     this.human = true;
//     }
//     hello(){
//         console.log('Hello  ${this.name}');
//     }
//     exit(){
//         console.log('Пользователь ${this.name} вышел');
//     }
// }

// User.prototype.exit = function(name){
//     console.log('Пользователь '+this.name+ ' ушел');
// }

// let ivan = new User('ivan', 25),
//     alex = new User('Alex', 20);

//     console.log(ivan);
//     console.log(alex);

//     ivan.exit();

//     function showThis(a,b) {
//         console.log(this);
//         function sum(){
//             console.log(this);
//             return this.a+this.b;
//         }
//         console.log(sum());
//     }

//     showThis(4,5);
//     showThis(5,5);

// let obj={
//     a: 20,
//     b: 15,
//     sum:function(){
//        console.log(this); 
//        function shout(){
//            console.log(this);
//        }
//        shout();
//     }
// };
// obj.sum();


// //связываем данные объекта и функции
// let user = {
//     name: "john",

// };

// function sayName(surname){
//     console.log(this);
//     console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));

// function count(number){
//     return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));
// console.log(double(10));

let btn = document.querySelector('.tester');

btn.addEventListener('click', function(){
    console.log(this);
    this.style.backgroundColor = 'red';
    function showThis(){
        console.log(this);
    }
    showThis();
} )

    //1) Просто вызов функции - window/undef строгий или не строгий режим.
    //2) Метод объякта this = объект
    //3) Конструктор (new) - this = новый созданный объект
    //4) указание конкретного контекста call apply bind
