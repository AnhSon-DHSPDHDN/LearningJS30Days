let timeDown;
const endTime=document.querySelector('.display__end-time');
let timerDisplay=document.querySelector('.display__time-left');
const dataTime=document.querySelectorAll('[data-time]');
function timer(sec){
    clearInterval(timeDown);
    const now=Date.now();
    const then=now + sec * 1000;
    displayTimeLeft(sec)
    displayEndTime(then);
    timeDown= setInterval(()=>{
        let timeNow=Math.round((then-Date.now())/1000);
        if(timeNow<=0){clearInterval(timeDown);
            return;
        } ;
        displayTimeLeft(timeNow);
    }, 1000);
    
}
function displayTimeLeft(sec){
    let minute=Math.floor(sec/60);
    const seconds=sec%60;
    let hour=00;
    if(minute>=60){
        hour=Math.floor(minute/60);
        minute=minute%60;
    }
    let display=`${hour}:${minute}:${seconds<10 ? '0' : ''}${seconds}`;
    timerDisplay.textContent=display;
    document.title=display;
}
function displayEndTime(timestamp){
    let e =new Date(timestamp);
    let hour=e.getHours();
    let min=e.getMinutes();
    endTime.textContent=`Be Back At ${hour}:${min<10? '0' : ''}${min}`;
}
function startTime(){
    timer(this.dataset.time);
}
dataTime.forEach(data=>data.addEventListener('click',startTime));
document.customForm.addEventListener('submit',e=>{
    e.preventDefault();
    let mins=document.customForm.minutes.value;
    //console.log(mins);
    timer(mins*60);
    document.customForm.reset();
});