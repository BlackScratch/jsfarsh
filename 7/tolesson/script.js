
'use strict';


let setTimers = document.querySelector(".timers");




    
    

    let timerId = setTimeout(function writeTime(){
        let date = new Date(),
    hh = date.getHours(),
    mm = date.getMinutes(),
    secs = date.getSeconds();

    if(hh<10){
        hh = '0'+hh;
    };
    if(mm<10){
        mm = '0'+mm;
    };
    if(secs<10){
        secs = '0'+secs;
    };
            console.log('Hello world');
            setTimers.textContent = hh+':'+mm+':'+secs;
            setTimeout(writeTime, 1000);
        });