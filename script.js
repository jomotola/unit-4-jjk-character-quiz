let titleScreen = document.querySelector(".title");
let startButton = document.querySelector(".start");

let nobaraAttributes = 0;
let gojoAttributes = 0;
let megumiAttributes = 0;
let yujiAttributes = 0;

let questionOneDiv = document.querySelector('.one');
let moneyButton = document.querySelector("#money");
let protectButton = document.querySelector("#protect");
let growButton = document.querySelector("#grow");
let reformButton = document.querySelector("#reform");

let questionThreeDiv = document.querySelector('.three');
let strongestButton = document.querySelector('#strongest');
let leadingButton = document.querySelector('#leading');
let unshakableButton = document.querySelector('#unshakable');
let adaptingButton = document.querySelector('#adapting');

let questionFourDiv = document.querySelector('.four');
let shikigamiButton = document.querySelector('#shikigami');
let fistsButton = document.querySelector('#fists');
let hammerButton = document.querySelector('#hammer');
let eyesButton = document.querySelector('#blue-eyes');

let megumiResult = document.querySelector('.megumi');
let gojoResult = document.querySelector('.gojo');
let yujiResult = document.querySelector('.yuji');
let nobaraResult = document.querySelector('.nobara');

startButton.addEventListener('click', function() {
    titleScreen.style.display = "none";
    questionOneDiv.style.display = "block";
})

function nobaraScore() {
    nobaraAttributes += 1;
}

function gojoScore() {
    gojoAttributes += 1;
}

function megumiScore() {
    megumiAttributes += 1;
}

function yujiScore(){
    yujiAttributes += 1;
}
//First Question
moneyButton.addEventListener('click', function() {
    nobaraScore();
    questionOneDiv.style.display = "none";
    questionThreeDiv.style.display = "block";
});

protectButton.addEventListener('click', function() {
    megumiScore();
    questionOneDiv.style.display = "none";
    questionThreeDiv.style.display = "block";
});

growButton.addEventListener('click', function(){
    yujiScore();
    questionOneDiv.style.display = "none";
    questionThreeDiv.style.display = "block";
});

reformButton.addEventListener('click', function(){
    yujiScore();
    questionOneDiv.style.display = "none";
    questionThreeDiv.style.display = "block";
});

//Third Question
strongestButton.addEventListener('click', function(){
    gojoScore();
    questionThreeDiv.style.display = "none";
    questionFourDiv.style.display = "block";
});

leadingButton.addEventListener('click', function(){
    megumiScore();
    questionThreeDiv.style.display = "none";
    questionFourDiv.style.display = "block";
});

unshakableButton.addEventListener('click', function(){
    yujiScore();
    questionThreeDiv.style.display = "none";
    questionFourDiv.style.display = "block";
});

adaptingButton.addEventListener('click', function(){
    nobaraScore();
    questionThreeDiv.style.display = "none";
    questionFourDiv.style.display = "block";
});
//Fourth Question
shikigamiButton.addEventListener('click', function(){
    megumiScore();
    questionFourDiv.style.display = "none";
    megumiResult.style.display = "block";
});

fistsButton.addEventListener('click', function(){
    yujiScore();
    questionFourDiv.style.display = "none";
    yujiResult.style.display = "block";
});

hammerButton.addEventListener('click', function(){
    nobaraScore();
    questionFourDiv.style.display = "none";
    nobaraResult.style.display = "block";
});

eyesButton.addEventListener('click', function() {
    gojoScore();
    questionFourDiv.style.display = "none";
    gojoResult.style.display ="block";
});




