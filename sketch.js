var snake;
// var sizeScale=1;
var speed = 2;
var food;


function setup() {
  createCanvas(640, 480);
  snake=new Snake();
  food=new Food();
}

function draw() {
  background(45);
  snake.createSnake();
  snake.moveSnake();
  food.makeFood();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
	  	snake.directionOfSnake(0,-1);
	}
	if(keyCode === DOWN_ARROW){
	  	snake.directionOfSnake(0,1);
	}
	if(keyCode === RIGHT_ARROW){
	  	snake.directionOfSnake(1,0);
	}
	if(keyCode === LEFT_ARROW){
	  	snake.directionOfSnake(-1,0);
	}
}


function Snake(){
	this.x =0;
	this.y = 0;
	this.size=30;	//size of snake
	this.xdir = 1;
	this.ydir = 0;

	this.directionOfSnake = function(a,b){
		this.xdir = a;
		this.ydir = b;
	}

	this.moveSnake = function(){
		this.x = this.x + this.xdir*speed;
		this.y = this.y + this.ydir*speed;

		this.x = constrain(this.x, 0, width-this.size);
		this.y = constrain(this.y, 0, height-this.size);

		food.isFoodEaten(this.x,this.y);
		
	}
	this.createSnake = function(){
		fill(255);
		rect(this.x,this.y,this.size,this.size);
		var snakeArray = new Array(food.foodEaten);
		for(var i=0; i<food.foodEaten ;i++){
			fill(255);
			snakeArray[i] = rect(this.x-this.size*(i+1),this.y,this.size,this.size);
		console.log(snakeArray[0]);
		}
	}
	
}

function Food(){
	this.foodX=0;
	this.foodY=0;
	this.foodSize = 30;
	this.foodEaten = 0;
	
	this.isFoodEaten = function(snakeX,snakeY){
		if(snakeX===this.foodX || snakeY===this.foodY){
			this.foodEaten += 1;
		}
	}

	this.foodX = floor(random(0,width-this.foodSize));
	this.foodY = floor(random(0,height-this.foodSize));

	this.makeFood = function(){
	fill("red");
	rect(this.foodX,this.foodY,this.foodSize,this.foodSize);
	}
}