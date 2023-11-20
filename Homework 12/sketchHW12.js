
var x = 50;
var y = 50;
var diameter = 25;
var playerX = 20;
var playerY = 20;
var c = 650;
var d = 550;
var e = 700;
var f = 550;
var mousex;
var mousey;

function setup()
{
    createCanvas(800,600);
}
function draw()
{
    background(100,20,200);
    
    createPlayer();
    
    playerMove();

    createObstacles();
   
    moveObstacle1();
    moveObstacle2A();
    moveObstacle2B();

    mouseDrawn();

    createExit();

    displayWin();

    createBorders();
}



function createPlayer()
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
function createObstacles()
{
    fill(124,17,79);//obstacle1
    circle(x,y,diameter);
    fill(12,120,220);//obstacle2A
    ellipse(c,d,10,50);
    fill(12,120,220);//obstacle2B
    ellipse(e,f,10,50);

}
function moveObstacle1()
{
    if (x > 800) {//obstacle1 movement
        x = 0;
    }
    else if (x > 200) {
        x += 5;
    }
    else if (x <= 300) {
        x += 10;
    } 
    
    if (y > 300) {
        y = 50;
    }
    else if (y > 200) {
        y += 1;
    } 
    else if (y <= 300) {
        y += 3;
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
function moveObstacle2A()
{
    if (c < 0) {//obstacle2A movement
        c = 650;
    }
    else if (c > 200) {
        c -= 5;
    }
    else if (c <= 300) {
        c += 1;
    } 
    
    if (d > 600 || d < 200) {
        d = random(600);
    }
    else if (d > 200) {
        d += 1;
    } 
    else if (d <= 300) {
        d += 3;
    } 
}
function moveObstacle2B()
{
     
if (e < 0) {//obstacle2B movement
    e = 700;
}
else if (e > 400) {
    e -= 10;
}
else if (e <= 500) {
    e += 1;
} 

if (f > 600 || f < 200) {
    f = random(600);
}
else if (f > 200) {
    f += 1;
} 
else if (f <= 300) {
    f += 3;
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