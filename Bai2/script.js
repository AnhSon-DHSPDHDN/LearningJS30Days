const secondHand=document.querySelector('.sec-hand');
const minHand=document.querySelector('.min-hand');
const hourHand=document.querySelector('.hour-hand');
function getDate(){
    const dateNow= new Date();
    const second=dateNow.getSeconds();
    secondHand.style.transform=`rotate(${(second/60)*360+90}deg)`;
    const minute=dateNow.getMinutes();
    minHand.style.transform=`rotate(${(minute/60)*360+90}deg)`;
    const hour=dateNow.getHours();
    hourHand.style.transform=`rotate(${(hour/12)*360+90}deg)`;
}

setInterval(getDate,1000);