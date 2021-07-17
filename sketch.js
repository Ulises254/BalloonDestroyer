var bow , arrow,  background;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var score=0;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage=loadImage("green_balloon0.png");
  blue_balloonImage=loadImage("blue_balloon0.png");
  pink_balloonImage=loadImage("pink_balloon0.png");
}



function setup() {
  createCanvas(400, 400);
  
  //crea el fondo
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  //crea el arco para disparar las flechas
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  redGroup=new Group();
  blueGroup=new Group();
  greenGroup=new Group();
  pinkGroup=new Group();
  arrowGroup= new Group();
}

function draw() {
 background(0);
  //fondo en movimiento
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
  //arco en movimiento
  bow.y = World.mouseY
  
   //suelta la flecha cuando se presione la tecla de barra espaciadora
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //crea globos de forma continua 
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    }
    else if(select_balloon == 2){
      blueBalloon();
    }
    else if(select_balloon == 3){
      greenBalloon();
    }
    else{
      pinkBalloon();
    }
  }
  drawSprites();
  if(arrowGroup.isTouching(redGroup)){
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score++;
  }
  if(arrowGroup.isTouching(blueGroup)){
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score+=3;
  }
  if(arrowGroup.isTouching(greenGroup)){
    greenGroup.destroyEach();
      arrowGroup.destroyEach();
    var rand=Math.round(random(1,2));
    if(rand==1){
      score-=4;
    }
    else{
      score+=5;
    }
    
  }
  if(arrowGroup.isTouching(pinkGroup)){
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    score-=7;
  }
  fill("black");
  text("Score= "+score,170,50);
  
  
}


//crea las flechas para el arco
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
   
   arrowGroup.add(arrow);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  
  redGroup.add(red);
}

function blueBalloon() {
  //escribe el código para aparecer los globos azules 
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  
  blueGroup.add(blue);
}

function greenBalloon() {
  //escribe el código para aparecer los globos verdes
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  
  greenGroup.add(green);
}

function pinkBalloon() {
  //escribe el código para aparecer los globos rosas
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  
  pinkGroup.add(pink);
}

  

