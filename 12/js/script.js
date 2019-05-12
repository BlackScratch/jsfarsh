window.addEventListener('DOMContentLoaded', function () {
    console.log('sadfasdf');
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }


    };

    info.addEventListener('click', function (event) {
        let target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });

    //это таймер
    let deadLine = '2019-05-25';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));
        if (hours < 10) {
            hours = '0' + hours;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            this.endtime = getTimeRemaining(endtime);


            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }


    }
    setClock('timer', deadLine);

    let j;
    let btnUp = document.querySelector('.backReturn'),
        btnAboutUs = document.querySelectorAll('nav > ul > li > a ')[0],
        btnPhoto = document.querySelectorAll('nav > ul > li > a ')[1],
        btnPrice = document.querySelectorAll('nav > ul > li > a ')[2],
        btnContact = document.querySelectorAll('nav > ul > li > a ')[3],
        //блоки
        blockAbout = document.querySelector('.info'),
        blockPhoto = document.querySelector('.slider-title'),
        blockprice = document.querySelector('.counter'),
        blockContact = document.querySelector('.contact');


    function smoothScroll() {
        event.preventDefault();
        blockAbout.scrollIntoView({
            block: "center",
            behavior: "smooth"
        });
    };


    function smoothScroll1() {
        event.preventDefault();
        blockPhoto.scrollIntoView({
            block: "center",
            behavior: "smooth"
        });
    };

    function smoothScroll2() {
        event.preventDefault();
        blockprice.scrollIntoView({
            block: "center",
            behavior: "smooth"
        });
    };

    function smoothScroll3() {
        event.preventDefault();
        blockContact.scrollIntoView({
            block: "center",
            behavior: "smooth"
        });
    };

    btnAboutUs.addEventListener('click', smoothScroll);
    btnPhoto.addEventListener('click', smoothScroll1);
    btnPrice.addEventListener('click', smoothScroll2);
    btnContact.addEventListener('click', smoothScroll3);

    function smoothUp() {
        if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
            window.scrollBy(0, -50);
            setTimeout(smoothUp, 10);
        }
    };


    btnUp.addEventListener('click', smoothUp);

    //получаем координаты элементов
    //координаты О нас
    let aboutUs = document.querySelector('#about');
    console.log(aboutUs.getBoundingClientRect().y);
});


let more = document.querySelector('.more'),
    overlay = document.querySelector('.overlay'),
    close = document.querySelector('.popup-close');

    more.classList.add('description-btn');
    moreButtons = document.querySelectorAll('.description-btn');
    close.addEventListener('click', hideModal);

for (let i = 0; i < moreButtons.length; i++) {
    moreButtons[i].addEventListener('click', openModal);
}

function openModal() {
    overlay.style.display = 'block';
    this.classList.add('more-splash');
    document.body.style.overflow = 'hidden';
};

function hideModal() {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
};

let message = {
    loading: "Загрузка",
    success: 'Спасибо! Скоро мы с вами свяжемся',
    failure: 'Что-то пошло не так'
};

let form = document.querySelector('.main-form'),
    input = form.getElementsByTagName('input'),
    statusMessage = document.createElement('div'),
    formSecond = document.querySelector('#form');



statusMessage.classList.add('status');

let inp = document.getElementsByName('phone')[0];
input2 = document.getElementsByName('phone')[1];
//         input2.setAttribute('name', 'phone');
//         let inp3 = document.getElementsByName('phone')[0];

function sendForm(elem) {
    elem.addEventListener('submit', function (e) {
        e.preventDefault();
        elem.appendChild(statusMessage);
        let formData = new FormData(elem);

        function postData(data) {

            return new Promise(function (resolve, reject) {
                let request = new XMLHttpRequest();

                request.open('POST', 'server.php');

                request.setRequestHeader('Content-Type',
                    'application/x-www-form-urlencodedon; charset=utf-8');

                request.onreadystatechange = function () {
                    if (request.readyState < 4) {
                        resolve();
                    } else if (request.readyState === 4) {
                        if (request.status == 200 && request.status < 3) {
                            resolve();
                        } else {
                            reject();
                        }
                    }
                };   

                request.send(json);
            });
        }


        function clearInput() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        postData(formData)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.failure)
            .then(clearInput);
    });
}
    sendForm(form);
    sendForm(formSecond);

//Проверка номера телефона





// Проверяем фокус
inp.addEventListener('focus', _ => {
    // Если там ничего нет или есть, но левое
    if (!/^\+\d*$/.test(inp.value))
    console.log('aaaaaaaaaaaa');
        // То вставляем знак плюса как значение
        inp.value = '+';
});


inp.addEventListener('keypress', e => {
    // Отменяем ввод не цифр
    if (!/\d/.test(e.key))
        e.preventDefault();
});



input2.addEventListener('focus', _ => {
    // Если там ничего нет или есть, но левое
    if (!/^\+\d*$/.test(input2.value))
        console.log('ffffffffffffff');
    // То вставляем знак плюса как значение
    input2.value = '+';

});


input2.addEventListener('keypress', e => {
    // Отменяем ввод не цифр
    if (!/\d/.test(e.key))
        e.preventDefault();
});