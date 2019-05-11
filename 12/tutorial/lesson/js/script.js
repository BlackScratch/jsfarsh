// // btn.addEventListener('click', function () {
// //     alert("что-то произошло.");
// // });

// // let func1 = function (param, func2) {
// // func2(function (param, func3) {
// //     func3(function (param, func4){

// //     })
// //     })
// // };

// let drink = 1;

// function shoot(arrow, headshot, fail){
//     console.log('вы сделали выстрел');

//     setTimeout(function(){
//         Math.random()>.5 ? headshot({}) : fail("вы промахнулись");
//     },3000)
// }

// function win(){
//     console.log('Вы победили');
//     (drink==1) ? buyBeer() : giveMoney();
// }

// function buyBeer(){
//     console.log('вам купили пиво');
// };
// function giveMoney(){
//     console.log('вы выиграли денег');
// };

// function loose(){
//     console.log('Вы проиграли')
// }

// shoot({}, 
//         function(mark){
//             console.log('Вы попали в цель!');
//             win(mark, buyBeer, giveMoney);
//         },
//         function (miss){
//             console.error(miss);
//             loose()
//         }
//     )

   
// btn.addEventListener('click', function () {
//     alert("что-то произошло.");
// });

// let func1 = function (param, func2) {
// func2(function (param, func3) {
//     func3(function (param, func4){

//     })
//     })
// };

let drink = 1;

function shoot(arrow, headshot, fail){
    console.log('вы сделали выстрел');
    let promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            Math.random()> .5 ? resolve({}) : reject("вы промахнулись");
        },3000);
    });
    return promise;
};



function win(){
    console.log('Вы победили');
    (drink==1) ? buyBeer() : giveMoney();
}

function buyBeer(){
    console.log('вам купили пиво');
};
function giveMoney(){
    console.log('вы выиграли денег');
};

function loose(){
    console.log('Вы проиграли')
}

shoot({})
        .then(mark => console.log('Вы попали в цель!'))
        .then(win => console.log('Вы попали в цель!'))
        .catch(loose)

   