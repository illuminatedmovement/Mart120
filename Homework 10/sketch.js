var headX = 350;
var headY = 100;
var headDirection = 1;

var headSize = 175;
var headCount = 0;
var headSD = 1;

var mouthX = 350;
var mouthDirection = 1;

var lArmY = 195;
var lArmDirection = 1;

var rLegY = 335;
var rLegDirection = 1;

var bodyX = 300;
var bodyDirection = 1;

var sizeTitle = 20;
var countTitle = 0;
var sizeTitleDirection = 2;

var textX = 20;
var textY =450;


function setup() {
    createCanvas(500,600);
    headDirection = floor(random() * 10) + 1;
    mouthDirection = floor(random() * 10) + 1;
    bodyDirection = floor(random() * 10) + 1;
    lArmDirection = floor(random() * 10) + 1;
    rLegDirection = floor(random() * 10) + 1;
    sizeDirection = floor(2) ;
    sizeTitleDirection = floor(1) ;

  }
  
  function draw() {
    background(120,55,120);
    fill(290,45,39);
    circle(250,75,125);
    fill(12);
    ellipse(250,100,30,10);
    fill(0,0,110);
    ellipse(230,65,10,5);
    ellipse(270,65,10,5);
    fill(150,25,0);
    ellipse(250,125,30,50);
    fill(55);
    ellipse(250,200,50,80);
  }
  function draw()
{
    background(120,45,78);
    textSize(sizeTitle);
    sizeTitle+=sizeTitleDirection;
    countTitle++;
    if(countTitle>5)
    {
      sizeTitleDirection*=-1;
      countTitle=0;
    }
    text("My Basic Structure", 10,80);

    //head
    fill(10,10,10);
    circle(headX,headY,headSize);
    headX+=headDirection;
    headY+=headDirection;
    headSize+=headSD;
    if(headX >= 412.5)
    {
      headDirection*= -1;
      fill(200,200,200);
    }
    if(headY <= 87.5)
    {
      headDirection*= -1;
      fill(12,100,80);
    }
    if(headSize>= 225 || headSize<=50)
    {
      headSD*=-1;
    }

   
    strokeWeight(12);
    fill(0,255,255);
    point(300,75);
    point(385,75);

    point(345,90);

    //mouth
    strokeWeight(5);
    ellipse(mouthX, 135, 50, 25)
    mouthX+=mouthDirection;
    if(mouthX <=25 || mouthX >=475)
    {
      mouthDirection*= -1;
    }

    line(350,45,225,70);
    line(350,45,425,60);
    
    //body
    fill(120);
    rect(bodyX,185,100,150);
    bodyX+=bodyDirection;
    if(bodyX<=0 || bodyX>= 400)
    {
      bodyDirection*= -1;
    }
    
    fill(10, 60, 120);
    rect(400,195,50,10);
    
    //lArm
    rect(250,lArmY,50,10);
    lArmY+=lArmDirection;
    if(lArmY<=20 || lArmY >= 580)
    {
      lArmDirection*= -1;
    }
    
    rect(300,335,10,50);
    
    //rLeg
    rect(390,rLegY,10,50);
    rLegY+=rLegDirection;
    if(rLegY<=20 || rLegY >= 580)
    {
      rLegDirection*= -1;
    }

    triangle(350,2,250,45,440,45);
    
    fill(180);
    textSize(20);
    text("Jeremy Jeffay",textX,textY);
    
    if(textX<125)
    {
      textX+=1 ;
    }
   
    if(textX = 125 & textY<550)
    {
      textY+=1;
    };
     
    //could not get the color change or the name to move in a square.  I am also having a lot of trouble self researching even using W3.school lessons and searches.  I know that will come with time but it makes it near impossible feeling to find the right sequence for a certain task as in these E.C. items.  
    //otherwise good stuff!
    
     



}