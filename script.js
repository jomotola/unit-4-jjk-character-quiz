/// Declare variables below to save the different divs of your story.
let firstScreen = document.querySelector(".enter-name");

let nameInput = document.querySelector(".name-input");
let submitButton = document.querySelector('.name-submit');

let welcomeScreen = document.querySelector(".welcome-screen");
let welcomeTextOne = document.querySelector(".welcome");
let welcomeTextTwo = document.querySelector(".title")

let storyOpeningScreen = document.querySelector(".story-opening");

let whiteRabbitButtons = document.querySelector(".white-rabbit-buttons");
let addWhiteRabbitButtonOne = document.querySelector(".option-one");
let addWhiteRabbitButtonTwo = document.querySelector(".option-two");

let optionOneScreen = document.querySelector(".option-one-screen");
let rabbitHole = document.querySelector(".option-one-screen img");
let fallingRabbitHole = document.querySelector(".falling-down-hole");

let optionTwoScreen = document.querySelector(".option-two-screen");

let hallwayScreen = document.querySelector(".hallway-option-screen");
let hallwayImage = document.querySelector(".hallway-option-screen img");

let tableKeys = document.querySelector(".table-with-keys");
let keysButtons = document.querySelector(".key-buttons");
let keyOne = document.querySelector(".key-one");
let keyTwo = document.querySelector(".key-two");

let keyOneScreen = document.querySelector(".key-one-screen");
let pleadCase = document.querySelector(".plead-case");

let keyTwoScreen = document.querySelector(".key-two-screen");
let leaveParty = document.querySelector(".forest-journey");

let keyOneEnd = document.querySelector(".key-one-end");
let keyTwoEnd = document.querySelector(".key-two-end");

let finalEnding = document.querySelector(".final-ending");

// When you're ready to make event handlers, uncomment the code below. 
//  - Then fill in the blanks with the correct variables.
 
function changeWelcomeScreen() { 
    welcomeScreen.style.display = "none"; // Hide welcome screen
    
    storyOpeningScreen.style.display = "block"; // Display the story opening screen
    whiteRabbitButtons.style.display = "block";
}

let username;
submitButton.addEventListener('click', function(){
    username = nameInput.value;
    firstScreen.style.display = "none";
    welcomeScreen.style.display="block";
    welcomeTextOne.innerHTML = "Welcome, " + username + " to";
    welcomeTextTwo.innerHTML = username + " in Wonderland";

    storyOpeningScreen.style.top = "3%";
    setTimeout(changeWelcomeScreen, 3000); // Change screens after 3000 milliseconds (3 seconds)
});

addWhiteRabbitButtonOne.addEventListener('click', function(){
    storyOpeningScreen.style.display = "none";
    whiteRabbitButtons.style.display = "none";
    optionOneScreen.style.display = "block";
});

function changeRabbitHoleScreen() {
    optionTwoScreen.style.display = "none";
    fallingRabbitHole.style.display = "none";

    hallwayScreen.style.display = "block";
} 

addWhiteRabbitButtonTwo.addEventListener('click', function() {
    storyOpeningScreen.style.display = "none";
    whiteRabbitButtons.style.display = "none";
    optionTwoScreen.style.display = "block";
    fallingRabbitHole.style.display = "block";

    setTimeout(changeRabbitHoleScreen, 4000);
});

rabbitHole.addEventListener('click', function(){
    optionOneScreen.style.display = "none";
    fallingRabbitHole.style.display = "block";

    fallingRabbitHole.style.top = "10%";

    setTimeout(changeRabbitHoleScreen, 2000);
});

hallwayImage.addEventListener('click', function (){
    hallwayScreen.style.display = "none"; 
    tableKeys.style.display = "block";
    keysButtons.style.display = "block";
})

function changeKeyEndingScreen() {
    keyOneEnd.style.display = "none";
    keyTwoEnd.style.display = "none";

    finalEnding.style.display = "block";
}

keyOne.addEventListener('click', function(){
    tableKeys.style.display = "none";
    keysButtons.style.display = "none";
    keyOneScreen.style.display = "block";
})

pleadCase.addEventListener('click', function(){
    keyOneScreen.style.display = "none";
    keyOneEnd.style.display = "block";

    setTimeout(changeKeyEndingScreen, 3000);
})

keyTwo.addEventListener('click', function(){
    tableKeys.style.display = "none";
    keysButtons.style.display = "none";
    keyTwoScreen.style.display = "block";
})

leaveParty.addEventListener('click', function(){
    keyTwoScreen.style.display = "none";
    keyTwoEnd.style.display = "block";

    setTimeout(changeKeyEndingScreen, 3000);
})