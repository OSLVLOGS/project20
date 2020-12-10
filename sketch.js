var Divider1, Divider2, Divider3;
var car1, car2, car3, car4;
var Parking1, Parking2, Parking3;
var speed, weight;

function setup() {
  createCanvas(800,400);

  speed = random(55, 90);
  weight = random(400, 1500);

Divider1 = createSprite(0, 50, 800, 100);
Divider1.shapeColor = "black";

Divider2 = createSprite(0, 155, 800, 100);
Divider2.shapeColor = "black";

Divider3 = createSprite(0, 260, 800, 100);
Divider3.shapeColor = "black";

Parking1 = createSprite(360, 150, 20, 50);
Parking2 = createSprite(360, 250, 20, 50);
Parking3 = createSprite(360, 50, 20, 50);

car1 = createSprite(340, 150, 20, 20);
car1.shapeColor = "yellow";

car2 = createSprite(340, 250, 20, 20);
car2.shapeColor = "red";

car3 = createSprite(50, 50, 20, 20);
car3.velocityX = speed;
car3.shapeColor = "white";

}

function draw() {
  background(255);
  
 if(Divider1.x-car3.x<(car3.width+Divider1.width)/2){

car3.velocity = 0;
var deformation = 0.5 * weight * speed * speed/22509;

if (deformation>180){

car3.shapeColor = "red";

}

if (deformation<180 && deformation>100){

car3.shapeColor = "yellow";

}

if (deformation>100){

car3.shapeColor = "green";

}


}

  drawSprites();
}