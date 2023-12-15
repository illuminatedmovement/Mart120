
var x = 50;
var y = 50;
var diameter = 25;

var playerX = 20;
var playerY = 20;
var mousex;
var mousey;

var shapeX = 20;
var shapeY = 40;

var shapeXs = [];
var shapeYs = [];
var diameters = [];

var shapeXSpeeds = [];
var shapeYSpeeds = [];

var randoX = getRandomNumber(800);
var randoY = getRandomNumber(600);

function setup()
{
    createCanvas(800,600);
    for (var i = 0; i < 30; i++) 
    {
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 7)) + 1);
        shapeXs[i] = getRandomNumber(800);
        shapeYs[i] = getRandomNumber(600);
        diameters[i] = getRandomNumber(25);
    }
}

function draw()
{
    background(100,20,200);
    
    createPlayer();
    
    playerMove();

    mouseDrawn();

    createExit();

    createObstacle1();

    moveObstacle1();

    createObstacles();

    displayWin();

    createBorders();
}



function createPlayer(player)
{
    fill(20,200,200);//player
    ellipse(playerX,playerY,10,20);
}

function playerMove()
{
    if(keyIsDown(68))
    {playerX+=6;}
    if(keyIsDown(65))
    {playerX-=6;}
    if(keyIsDown(87))
    {playerY-=6;}
    if(keyIsDown(83))
    {playerY+=6;}
}
function mouseDrawn()
{
    fill(10,10,220);//mouse drawn shape
    circle(mousex,mousey,60); 
}
function createObstacle1()
{
    fill(124,17,79);//obstacle1
    circle(randoX,randoY,diameter);
}
function moveObstacle1()
{
    if (randoX >= 800) {//obstacle1 movement
        randoX -= 1;
    }
    else if (randoX <= 0) {
        randoX += 2;
    } 
    else if (randoX < 800 && randoX > 0){
        randoX += 2;
    }
    
    
    if (randoY > 600) {
        randoY = random(600);
        randoX = random(800);
    }
    else if (randoY > 300 && randoY <  700) {
        randoY += 1;
    } 
    else if (randoY <= 300) {
        randoY += 3;
    }

    if (diameter > 150) {
        diameter = 25;
    }
    else if (diameter > 50) {
        diameter += 4;
    } 
    else if (diameter <= 100) {
        diameter += 1;
    
    }
}
function createObstacles()
{
    
    fill(20,22,20);
    //obstacles
    for (var i = 0; i < shapeXs.length; i++) {
        ellipse(shapeXs[i], shapeYs[i], diameters[i]);
        shapeXSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        shapeYSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);




        //obstacles movement
        if (shapeXs[i] < 0) 
        {
            shapeXs[i] = random(775);
        }
        else if (shapeXs[i] > 100) {
            shapeXs[i] += 0;
        }
        else if (shapeXs[i] <= 700) {
            shapeXs[i] += 1;
        } 
        
        if (shapeYs[i] > 600 || shapeYs[i] < 200) {
            shapeYs[i] = random(600);
        }
        else if (shapeYs[i] > 20) {
            shapeYs[i] += 1;
        } 
        else if (shapeYs[i] <= 300) {
            shapeYs[i] += 2;
        } 
        // check boundary
        if (shapeXs[i] > 800) {
            shapeXs[i] = 0;
        }
        if (shapeXs[i] < 0) {
            shapeXs[i] = 800;
        }
        if (shapeYs[i] > 600) {
            shapeYs[i] = 0;
        }
        if (shapeYs[i] < 0) {
            shapeYs[i] = 600;
        }
    }
    

}

function checkCollision(){// I am quite happy with my layout iteration of this project for the final game however I could not seem to figure out how to assess collisions and be sent back to the start upon a collision.  I spent several hours trying to figure it out and it seems time to just move on from that aspect until classes further on touch on collisions.  I left this here and noted it just to show what my true overall goal was.  I'm sure it is something simple I just can't seem to piece together.  
    if(playerX = shapeXs){
        playerX = 10
        playerY = 10
    }

}

function createExit()
{
    fill(255,255,255);
    circle(795,595,30);
}
function displayWin()
{
    fill(0,200,190);
  textSize(28);
  text("EXIT! --->", 650, 550, width-30, height-40);
  
  if(playerX >= 790 & playerY >= 590)
  {
    fill(2,2,220);
    textSize(40);
    text("Winner Winner Winner!!!", 250,300);
  }
}
function createBorders()
{
    fill(180,20,60);
    stroke(5);
    line(1,1,799,1);
    line(799,1,799,599);
    line(799,599,1,599);
    line(1,599,1,1);
}
function mouseClicked() 
{  
  mousex = mouseX;
  mousey = mouseY;

}
function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}