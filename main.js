
let display=document.getElementById("display");
let start=document.getElementById("start");
let stop=document.getElementById("stop");
let reset=document.getElementById("reset");

let hours=0;
let minutes=0;
let seconds=0;

let newHours=0;
let newMinutes=0;
let newSeconds=0;

let timer;

function stopWatch(){
  seconds++;
  if(seconds/60 == 1){
    minutes++;
    seconds=0;
    if(minutes/60 == 1){
      hours++;
      minutes=0;
    }
  }
  
    if(seconds<10){
      newSeconds="0"+seconds;
    }else{
      newSeconds=seconds;
    }
    if(minutes<10){
      newMinutes="0"+minutes;
    }else{
      newMinutes=minutes;
    }
    if(hours<10){
      newHours="0"+hours;
    }else{
      newHours=hours;
    }
  display.innerHTML = newHours + ":" + newMinutes + ":" + newSeconds;
}



start.addEventListener("click", function(){
    timer=setInterval (stopWatch , 1000);
    start.disabled = true;
    stop.disabled = false;
    reset.disabled = true;
})

stop.addEventListener("click", function(){
    clearInterval(timer);
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = false;
})

reset.addEventListener("click", function(){
    clearInterval(timer);
    display.innerHTML = "00:00:00";
    start.disabled = false;
    stop.disabled = true;
    reset.disabled = true;
    hours = 0;
    minutes = 0;
    seconds = 0;
})