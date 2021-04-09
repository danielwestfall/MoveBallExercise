//introduce JS to HTML element ball
var ball = document.getElementById('ball');
var ballTwo = document.getElementById('ballTwo');
let newHeight = Math.floor(Math.random() * (75 - 25) + 25);
let newHeightTwo = Math.floor(Math.random() * (75 - 25) + 25);

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
    let degreeDir = Math.floor(Math.random() * 360);
    let redColor = Math.floor(Math.random() * 255);
    let greenColor = Math.floor(Math.random() * 255);
    let blueColor = Math.floor(Math.random() * 255);
    let redColorB = Math.floor(Math.random() * 255);
    let greenColorB = Math.floor(Math.random() * 255);
    let blueColorB = Math.floor(Math.random() * 255);
    newHeight = Math.floor(Math.random() * (75 - 25) + 25);
    //let newWidth = Math.floor(Math.random() * (75 - 25) + 25);

    //used this to randomly change borderRadius - wasn't impressed
    //let newCurve = Math.floor(Math.random() * 50); 

    ball.style.background = 'linear-gradient(' + degreeDir + 'deg, rgb(' + redColor + ',' + greenColor + ',' + blueColor + ' ), rgba(' + redColorB + ',' + greenColorB + ',' + blueColorB + ' ))';
    ball.style.height = newHeight;
    ball.style.width = newHeight;

    //saved in case I want to use later
    //ball.style.borderRadius = newCurve;
};

//randomly change properties when hitting sides of window of ballTwo
function colorChangeBallTwo(){
    let degreeDirTwo = Math.floor(Math.random() * 360);
    let redColorTwo = Math.floor(Math.random() * 255);
    let greenColorTwo = Math.floor(Math.random() * 255);
    let blueColorTwo = Math.floor(Math.random() * 255);
    let redColorBTwo = Math.floor(Math.random() * 255);
    let greenColorBTwo = Math.floor(Math.random() * 255);
    let blueColorBTwo = Math.floor(Math.random() * 255);
    newHeightTwo = Math.floor(Math.random() * (75 - 25) + 25);
    //let newWidthTwo = Math.floor(Math.random() * (75 - 25) + 25);

    //saved in case I want to use later
    //let newCurveTwo = Math.floor(Math.random() * 50);

    ballTwo.style.background = 'linear-gradient(' + degreeDirTwo + 'deg, rgb(' + redColorTwo + ',' + greenColorTwo + ',' + blueColorTwo + ' ), rgba(' + redColorBTwo + ',' + greenColorBTwo + ',' + blueColorBTwo + ' ))';
    ballTwo.style.height = newHeightTwo;
    ballTwo.style.width = newHeightTwo;

    //saved in case I want to use later
    //ballTwo.style.borderRadius = newCurveTwo;

};

//function to randomly change velocity 
function speedChangeRandom(){
    let newVelocityX = Math.floor(Math.random() * 50);
    let newVelocityY = Math.floor(Math.random() * 50);

    velocityX = newVelocityX;
    velocityY = newVelocityY;
};

//function to move ball
function moveBall(){

//calculate window size to dynamically change boundaries 
    let windowHeight = window.innerHeight - newHeight;
    let windowWidth = window.innerWidth - newHeight;

    const Xmin = 0;
    const Xmax = windowWidth;
    const Ymin = 0;
    const Ymax = windowHeight;

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

const Xmin = 0;
const Xmax = windowWidth;
const Ymin = 0;
const Ymax = windowHeight;

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

//release the golden snitch - changes ball velocity randomly every 2 seconds
//setInterval (speedChangeRandom, 2000);