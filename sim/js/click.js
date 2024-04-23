const scoreDisplay = document.getElementById('score');
const clickButton = document.getElementById('clickButton');
const cpsDisplay = document.getElementById("clps");
const cpsButton = document.getElementById("cpsButton");


function clickclick() {
  score++;
  scoreDisplay.innerHTML = `Score: ${score}`;
}
function reset() {
  score = 0;
  cps = 0;
  score.innerHTML = `Score: ${score}`;
  cpsDisplay.innerHTML = `CPS: ${cps}`;
}
function cpsclick() {
  if(score>=10){
    cps++;
    score-=10;
    scoreDisplay.innerHTML = `Score: ${score}`;
  } else {
    cpsButton.innerHTML = "Req 10";
    setTimeout(() => {
      cpsButton.innerHTML = "Plus CPS";
    }, 3000)
  }
  cpsDisplay.innerHTML = `CPS: ${cps}`;
}
function add() {
  score += cps;
  scoreDisplay.innerHTML = `Score: ${score}`;
  setTimeout(add, 1000);
}
function updateLocalstorage() {
  localStorage.setItem("score", score);
  localStorage.setItem("cps", cps);
  setTimeout(updateLocalstorage, 1000)
}
function updateHtml() {
  cpsDisplay.innerHTML = `CPS: ${cps}`;
  scoreDisplay.innerHTML = `Score: ${score}`;
}
cps = Number(localStorage.getItem("cps"));
score = Number(localStorage.getItem("score"));
updateHtml();
add();
updateLocalstorage();