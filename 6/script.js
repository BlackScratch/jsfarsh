let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper');
    link = document.querySelector('a');
// btn[0].onclick = function(){
//     alert('Вы нажали первую кнопку');
// }

// btn[0].addEventListener('click', function(){
//     alert('Вы нажали первую кнопку');
// })
// btn[0].addEventListener('click', function(event){
//     let target = event.target;
//     target.style.display = 'none';
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// })

// wrap.addEventListener('click', function(){
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target); 
// });

// link.addEventListener('click', function(){
//     event.preventDefault();
//     console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target); 
// });

btn.forEach(function(item){
    item.addEventListener('mouseleave', function(){
        console.log('asdfadsfasdf');
    });
});

// btn[0].addEventListener('mouseenter', function(){
//     alert('Вы навели первую кнопку');
// })