//randomly generate numbers
function randomize(limit) {
    return Math.floor(Math.random() * limit)
}

function randoScale(min, max) {
    console.log(min, max);
    return Math.random() * (max - min) + min;
}

//introduce JS to HTML element ball
let ball = document.getElementById('ball');
let ballTwo = document.getElementById('ballTwo');
let newHeight = randoScale(50, 75);
let newHeightTwo = randoScale(50, 75);

//movement setup for ball - different velocities for different axis - check out different effects
let velocityX = 10;
let velocityY = 20;
let positionX = 0;
let positionY = 0;

//movement setup for ballTwo - different velocities for different axis - check out different effects
let velocityXTwo = 10;
let velocityYTwo = 20;
let positionXTwo = 0;
let positionYTwo = 0;

//ball directions - separate reverse for the X and Y
let reverseX = false;
let reverseY = false;

//ball directions for ballTwo- separate reverse for the X and Y
let reverseXTwo = false;
let reverseYTwo = false;

//randomly change properties when hitting sides of window of ball
function colorChangeBall(){
    newHeight = randoScale(25, 50);
    ball.style.background = 'linear-gradient(' + randomize(360) + 'deg, rgb(' + randomize(255) + ',' + randomize(255) + ',' + randomize(255) + ' ), rgba(' + randomize(255) + ',' + randomize(255) + ',' + randomize(255) + ' ))';
    ball.style.height = newHeight;
    ball.style.width = newHeight;
};

function colorChangeBallTwo() {
    newHeightTwo = randoScale(25, 50);
    ballTwo.style.background = 'linear-gradient(' + randomize(360) + 'deg, rgb(' + randomize(255) + ',' + randomize(255) + ',' + randomize(255) + ' ), rgba(' + randomize(255) + ',' + randomize(255) + ',' + randomize(255) + ' ))';
    ballTwo.style.height = newHeightTwo;
    ballTwo.style.width = newHeightTwo;
};

//function to randomly change velocity 
function speedChangeRandom(){
    velocityX = randoScale(15, 30);
    velocityY = randoScale(15, 30);
};

//function to move ball
function moveBall(){

//calculate window size to dynamically change boundaries 
    let windowHeight = window.innerHeight - newHeight;
    let windowWidth = window.innerWidth - newHeight;

    let Xmin = 0;
    let Xmax = windowWidth;
    let Ymin = 0;
    let Ymax = windowHeight;

   // logical NOT aka reverse the boolean value of reverse
    if( positionX > Xmax || positionX === Xmin || positionX < Xmin){ 
        reverseX = !reverseX;
        colorChangeBall();
    };

    if( positionY > Ymax || positionY === Ymin || positionY < Ymin){ 
        reverseY = !reverseY;  
        colorChangeBall();
    };

    if (reverseX && reverseY === true){
        positionX = positionX + velocityX;
        ball.style.left = positionX + "px";
        positionY = positionY + velocityY;
        ball.style.top = positionY + "px";
    } else if (reverseX === false && reverseY === true){
        positionX = positionX - velocityX;
        ball.style.left = positionX + "px";
        positionY = positionY + velocityY;
        ball.style.top = positionY + "px";
    } else if(reverseX === true && reverseY === false){
        positionX = positionX + velocityX;
        ball.style.left = positionX + "px";
        positionY = positionY - velocityY;
        ball.style.top = positionY + "px";
    } else {
        positionX = positionX - velocityX;
        ball.style.left = positionX + "px";
        positionY = positionY - velocityY;
        ball.style.top = positionY + "px";
    };

};

//function to move ballTwo
function moveBallTwo(){

//calculate window size to dynamically change boundaries 
let windowHeight = window.innerHeight - newHeightTwo;
let windowWidth = window.innerWidth - newHeightTwo;

let Xmin = 0;
let Xmax = windowWidth;
let Ymin = 0;
let Ymax = windowHeight;

 // logical NOT aka reverse the boolean value of reverse
    if( positionXTwo > Xmax || positionXTwo === Xmin || positionXTwo < Xmin){ 
        reverseXTwo = !reverseXTwo;
        colorChangeBallTwo();
        speedChangeRandom();
    };

    if( positionYTwo > Ymax || positionYTwo === Ymin || positionYTwo < Ymin){ 
        reverseYTwo = !reverseYTwo;  
        colorChangeBallTwo();
        speedChangeRandom();
    };

    if (reverseXTwo && reverseYTwo === true){
        positionXTwo = positionXTwo + velocityXTwo;
        ballTwo.style.left = positionXTwo + "px";
        positionYTwo = positionYTwo + velocityYTwo;
        ballTwo.style.top = positionYTwo + "px";
    } else if (reverseXTwo === false && reverseYTwo === true){
        positionXTwo = positionXTwo - velocityXTwo;
        ballTwo.style.left = positionXTwo + "px";
        positionYTwo = positionYTwo + velocityYTwo;
        ballTwo.style.top = positionYTwo + "px";
    } else if(reverseXTwo === true && reverseYTwo === false){
        positionXTwo = positionXTwo + velocityXTwo;
        ballTwo.style.left = positionXTwo + "px";
        positionYTwo = positionYTwo - velocityYTwo;
        ballTwo.style.top = positionYTwo + "px";
    } else {
        positionXTwo = positionXTwo - velocityXTwo;
        ballTwo.style.left = positionXTwo + "px";
        positionYTwo = positionYTwo - velocityYTwo;
        ballTwo.style.top = positionYTwo + "px";
    };

};

setInterval (moveBall, 100);
setInterval (moveBallTwo, 100);