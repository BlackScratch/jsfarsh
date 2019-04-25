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

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
  
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    let yy = date.getFullYear();
    if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
  }


let timeNow = (now.getHours()+':'+now.getMinutes()+':'+ now.getSeconds()+ '<br> ');
document.write(timeNow);
  
  console.log( 'Привели дату к формату ' +formatDate(now) ); // '30.01.14'
let nowmDate = formatDate(now);

function getWeekDay(now) {
  let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  
  return days[now.getDay()];
  }
  document.write('День недели у нас сегодня '+ getWeekDay(now) + '<br> ');


  document.write('Сегодня у нас '+nowmDate)
  var date = now; // 3 января 2014
  console.log( 'Сегодня у нас '+nowmDate ); // 'пт'

  //Форма с выводом разницы дат
  let firstIn = document.querySelector('#firstDate').value;
  console.log(firstIn);
  
  let secondDate = document.querySelector('#secondDate').value,
    result = document.querySelector('#result'),
    button = document.querySelector('#check');
    console.log(secondDate);

  button.addEventListener('click', seeResult);

  let date1 = new Date(firstIn),
      date2 = new Date(secondDate);
      daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));


  function seeResult(){
    let daysLag = Math.ceil(Math.abs(date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
    result.value=daysLag;
    
  }
