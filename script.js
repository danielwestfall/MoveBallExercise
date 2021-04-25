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
let velocityXTwo = 10;
let velocityYTwo = 20;
let positionXTwo = 0;
let positionYTwo = 0;

//ball directions - separate reverse for the X and Y
let reverseX = false;
let reverseY = false;
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

    let Xmin = 0;
    let Xmax = Math.round(window.innerWidth - (newHeight / 2));
    let Ymin = 0;
    let Ymax = Math.round(window.innerHeight - (newHeight / 2));
    
function recalcBounds(){
    Xmax = Math.round(window.innerWidth - (newHeight / 2));
    Ymax = Math.round(window.innerHeight - (newHeight / 2));
    
    return { Xmax, Ymax }
};

//function to move ball
function moveBall(){

//calculate window size to dynamically change boundaries 

    recalcBounds();
   // logical NOT aka reverse the boolean value of reverse
    if( positionX >= Xmax || positionX <= Xmin){ 
        reverseX = !reverseX;
        colorChangeBall();
    };

    if( positionY >= Ymax || positionY <= Ymin){ 
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

let XminTwo = 0;
let XmaxTwo =  Math.round(window.innerWidth - (newHeightTwo / 2));
let YminTwo = 0;
let YmaxTwo =  Math.round(window.innerHeight - (newHeightTwo / 2));

function recalcBoundsTwo() {
    XmaxTwo = Math.round(window.innerWidth - (newHeightTwo / 2));
    YmaxTwo = Math.round(window.innerHeight - (newHeightTwo / 2));
    return { XmaxTwo, YmaxTwo }
};

function moveBallTwo(){

//calculate window size to dynamically change boundaries 
    recalcBoundsTwo();

 // logical NOT aka reverse the boolean value of reverse
    if( positionXTwo >= XmaxTwo || positionXTwo <= XminTwo){ 
        reverseXTwo = !reverseXTwo;
        colorChangeBallTwo();
        speedChangeRandom();
    };

    if( positionYTwo >= YmaxTwo || positionYTwo <= YminTwo){ 
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