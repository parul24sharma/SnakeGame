var s;
var sizeScale=1;
var speed = 10;
var food;


function setup() {
  createCanvas(640, 480);
  s=new Snake();
  food=new Food();
}

function draw() {
  // console.log("draw is running");
  background(45);
  s.createSnake();
  s.moveSnake();
  food.makeFood();
  // noLoop();
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	  	s.directionOfSnake(0,-1);
	}
	if(keyCode === DOWN_ARROW){
	  	s.directionOfSnake(0,1);
	}
	if(keyCode === RIGHT_ARROW){
	  	s.directionOfSnake(1,0);
	}
	if(keyCode === LEFT_ARROW){
	  	s.directionOfSnake(-1,0);
	}
}


function Snake(){
	this.x =0;
	this.y = 0;
	this.size=30;
	this.xspeed = 1;
	this.yspeed = 0;

	this.directionOfSnake = function(x,y){
		this.xspeed = x;
		this.yspeed = y;
	}

	this.moveSnake = function(){
		this.x = this.x + this.xspeed*speed;
		this.y = this.y + this.yspeed*speed;

		this.x = constrain(this.x, 0, width-this.size);
		this.y = constrain(this.y, 0, height-this.size);

	}
	this.createSnake = function(){
		fill(255);
		rect(this.x,this.y,this.size*sizeScale,this.size*sizeScale);
	}
}

function Food(){
	this.foodX=0;
	this.foodY=0;
	fill("red");
	rect(this.foodX,this.foodY,10,10);

	this.makeFood = function(){
	fill("red");
	rect(this.foodX,this.foodY,10,10);		
	}
}