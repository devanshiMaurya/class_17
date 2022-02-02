var box1,box2;
function setup() 
{
  createCanvas(400, 400);
  box1=new Box(100,100,50,50,2,1);
  box2=new Box(200,200,100,100,3,2);
}

function draw() 
{
  background(220);
  box1.show();
  box1.move();
  box1.moveup();

  box2.show();
  box2.move();
  box2.moveup();
}

