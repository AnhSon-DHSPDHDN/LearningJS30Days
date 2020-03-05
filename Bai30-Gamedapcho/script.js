
  const holes = document.querySelectorAll('.hole');
  const scoreBoard = document.querySelector('.score');
  const moles = document.querySelectorAll('.mole');
  let lastHole;
  let timeUp = false;
  let score = 0;
function randTime(min,max){
    return Math.round(Math.random()*(max-min)+min);
}
function randHole(holes){
    const holeIndex=Math.floor(Math.random()*holes.length);
    const hole=holes[holeIndex];
    if(hole==lastHole) return randHole(holes);
    lastHole=hole;
    return hole;
}
function unHiddenDog(){
    let time=randTime(200,1000);
    let hole=randHole(holes);
    hole.classList.add('up');
    setTimeout(()=>{
        hole.classList.remove('up');
        if(!timeUp) unHiddenDog();
    },time);
}
function startGame(){
    score=0;
    scoreBoard.textContent=0;
    timeUp=false;
    unHiddenDog();
    setTimeout(()=>{
        timeUp=true;
    },20000);
}
function bonk(e){
    console.log(e.isTrusted);
    if(!e.isTrusted) return;
    score++;
    this.classList.remove('up');
    scoreBoard.textContent=score;
}

moles.forEach(mole=>{
    mole.addEventListener('click',bonk);
});