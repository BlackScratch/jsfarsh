// Меняем порядок
let liNow = document.getElementsByClassName('menu-item')[1];
//Получаем родительский элемент для вставки
let spBegore = document.getElementsByClassName('menu-item')[2];
let parentDiv = liNow.parentNode;
parentDiv.insertBefore(spBegore,liNow);


console.log(parentDiv);

let newLi = document.createElement('li');
newLi.className='menu-item';
newLi.innerHTML = 'Пятый пункт';
myList.appendChild(newLi);
  
  document.body.style.backgroundImage = 'url(./img/apple_true.jpg)';
  title.innerHTML = 'Мы продаем только <b>подлинную</b> технику Apple';

let advErts = document.getElementById('tester');
advErts.remove();

let answerUser = prompt('Каково ваше отношение к технике apple?','');
document.getElementById('prompt').innerHTML = 'Ваше отношение к технике Apple: ' + answerUser;



  