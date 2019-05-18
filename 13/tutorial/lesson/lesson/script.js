let name = "ivan",
age = 30,
mail = 'exmple.ru';

document.write(`Пользователю ${name} ${age} лет. Его почта ${mail}`);//прием интерполяции

function makeArray(){
    var items = [];

    for(var i = 0; i < 10; i++){
        var item = function(){
            console.log(i);
        };
        items.push(item);
    }
    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();


let fun = () => {
    console.log(this);
};

fun();

let obj = {
    number:5,
    sayNumber: function(){
        let say = () =>{
        console.log(this);
    };
    say();
}
};

obj.sayNumber();

let btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let show = () =>{
        console.log(this);
    }
    show();
});

function calcOrDouble(number, basis){
    basis = basis || 2;
    console.elog(number*basis);
}

class Rectangle{
    constructor (height,width){
        this.width = width;
        this.height = height;
    }
    calcArea(){
        return this.height*this.width;
    }
}

const square = new Rectangle(112,115);
console.log(square.calcArea());

let video = ['youtube', 'video', 'rutube'],
 blog = ['wordpress', 'lifejournal', 'blogger'],
 internet = [...video, ...blog, 'facebook'];

 console.log(internet);

 function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}

let numbers = [2,5,7];

log(...numbers);

let textToView = 'Изменяем текст';

class Option{
    constructor (height,width,bg,fontSize,textAlign, text){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.innerText = text;
    }
    createNewDiv(){
        var element = document.createElement('div');
        element.style.cssText="background-color: " +this.bg+"; \
        width: "+this.width+"; \
        text-align: "+this.textAlign+"; \
        height: "+this.height+"; \
        font-size: "+this.fontSize+"; \
        color: #fff; \
      ";
      element.innerHTML = this.innerText;
        console.log('created');   
        return document.body.appendChild(element);     
    } 
};


const newOption = new Option('200px','150px', '#000', '15', 'center',textToView);
newOption.createNewDiv();
