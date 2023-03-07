let ellipsePosition=0;
let ellipseSize= 0; 
let x=0
let bColor = 100
let rColor = 44
let gColor = 232
let rightA1 = 500;
let rightA2 = 400;
let ani1 = 5;
let leftA1= 100;
let leftA2=400;
  
function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(rColor, bColor, gColor);
  fill(222, 106, 4);
  strokeWeight(4);
  ellipse(300, 200,300,200);
  fill(255,255,255);
  ellipse(350, 150, 90, 50);
  fill(0,0,255);
   ellipse(350,150, 20, 20);
  fill(255,255,255);
  ellipse(250, 150, 90, 50);
  fill(0,0,255);
  ellipse(250,150, 20, 20);

  
  strokeWeight(5);
  stroke(40, 60, 79); 
  fill(255,0,0);
  rect(250, 190, 100, 50);
  fill(255,192,203);
  rect(200,300,200,150);
  
  
  line(400,300,rightA1,rightA2);
  rightA2 = rightA2 -ani1;
  if (rightA2 < 200) {
    ani1 = -ani1
  }
  
  if(rightA2 > 450 ) {
    ani1 = -ani1
}
  
  
  line(200,300,leftA1,leftA2);
  leftA2 =leftA2 -ani1;
  if (leftA2 <200) {
    
  }
  
  
  line(200,450,200,550);
   line(400,450,400,550);

  
  fill(4, 112, 4);
  rect(0,550,600,50);
  
  textSize(35);
  //fill(0);
  text("I have seen EVERYTHING.",20,90)
  strokeWeight(2);
  
  ellipsePosition = ellipsePosition-0.5;
  ellipseSize = ellipseSize +0.5;
}