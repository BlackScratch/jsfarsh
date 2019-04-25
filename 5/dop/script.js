let now = new Date(),
  dd = now.getDate();
if (dd < 10) dd = '0' + dd;
let mm = now.getMonth() + 1; // месяц 1-12
if (mm < 10) mm = '0' + mm;
let yy = now.getFullYear() % 100;
if (yy < 10) yy = '0' + yy;
//now.format("isoDateTime");
// 2007-06-09T17:46:21

function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    var yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
  }
  
  console.log( 'Привели дату к формату ' +formatDate(now) ); // '30.01.14'


function getWeekDay(date) {
    var days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  
    return days[date.getDay()];
  }
  
  var date = now; // 3 января 2014
  console.log( 'Сегодня у нас '+getWeekDay(date) ); // 'пт'

  //Форма с выводом разницы дат
  let firstIn = document.querySelector('#firstDate');
  
  let secondDate = document.querySelector('#fsecondDate'),
    result = document.querySelector('#result'),
    button = document.querySelector('#check');

  button.addEventListener('click', seeResult);

  function seeResult(){
   
    var date1 = firstIn.value;
    var date2 = secondDate.value;
    var daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
   result.value=daysLag;
    firstIn.value='daysLag';
  }
