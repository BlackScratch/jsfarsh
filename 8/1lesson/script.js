let box = document.querySelector(".box"),
//  width = box.clientWidth,
//  height = box.clientHeight;
btn = document.querySelector('button');

 width = box.offsetWidth,// тут попадает в css стили
 height = box.offsetHeight;

 console.log(width);
 console.log(height);
 console.log(box.getBoundingClientRect().left);

 console.log(document.documentElement.clientWidth);

 btn.addEventListener('click',function(){
     box.style.height=box.scrollHeight + 'px';
 })

//плавная прокрутка
 document.documentElement.scrollTop = 0;

 scrollBy(0.200);//прокручивает от текущего события до того, что необходимо.
