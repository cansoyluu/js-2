let scoreSpan = document.getElementById("scoreSpan");
let score = 0;
let plus = document.getElementById("primary");
let minus = document.getElementById("buton");
let degis = document.getElementById("degis");
let scoreSpan2 = document.getElementById("scoreSpan2");
let score2 = 0;
let plus2 = document.getElementById("primary2");
let minus2 = document.getElementById("buton2");
let degis2 = document.getElementById("degis2");

plus.addEventListener("click", function () {
  score++;
  scoreSpan.innerHTML = score;
  console.log(score);
});

minus.addEventListener("click", function () {
  if (score > 0) score--;
  scoreSpan.innerHTML = score;
});

degis.addEventListener("click", function () {
  score = prompt("Sayı Giriniz");
  scoreSpan.innerHTML = Number(score);
  if (isNaN(scoreSpan.innerHTML)) {
    score = 0;
    scoreSpan.innerHTML = score;
  }
});

plus2.addEventListener("click", function () {
  score2++;
  scoreSpan2.innerHTML = score2;
  console.log(score);
});

minus2.addEventListener("click", function () {
  if (score2 > 0) score2--;
  scoreSpan2.innerHTML = score2;
});

degis2.addEventListener("click", function () {
  score2 = prompt("Sayı Giriniz");
  scoreSpan2.innerHTML = Number(score2);
  if (isNaN(scoreSpan2.innerHTML)) {
    score2 = 0;
    scoreSpan2.innerHTML = score2;
  }
});

let takim1 = document.getElementById("takim1");
takim1.addEventListener("click", function () {
  takim1 = prompt("");
  document.getElementById("takim1Name").innerHTML = takim1;
});

let takim2 = document.getElementById("takim2");
takim2.addEventListener("click", function () {
  takim2 = prompt("");
  document.getElementById("takim2Name").innerHTML = takim2;
});
