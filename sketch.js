//Create variables here
var database,happydog,foods,foodstock,dog,dogsprite;
function preload(){
  createCanvas(500,500);
  dog=loadImage("images/dog.png")
}


function setup(){
    
    database = firebase.database();
    foodstock=database.ref("Food")
    foodstock.on("value",readStock)
    dogsprite=createSprite(250,250,20,20)
    dogsprite.addImage(dog)
}

function draw(){
    background("white");
   
    
     if(keyWentDown(UP_ARROW)){
        writeStock(foods);
      
    }
 
    
    drawSprites();
}



   

