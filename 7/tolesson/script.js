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

let setTimers = document.querySelector(".timers");
setTimers.textContent = hh+':'+mm+':'+secs;

