var path,pathImage
var cat,catImage,catrunning,catsitting
var mouse,mouseImage,mouseteasing,mouseteasing1



function preload() {
    //load the images here
    pathImage=loadImage("images/garden.png")
    catImage=loadImage("images/cat1.png")
    mouseImage=loadImage("images/mouse1.png")
    catrunning=loadAnimation("images/cat2.png","images/cat3.png")
    mouseteasing=loadAnimation("images/mouse2.png","images/mouse3.png")
    catsitting=loadAnimation("images/cat4.png")
    mouseteasing1=loadAnimation("images/mouse4.png")



}

function setup(){
    createCanvas(600,600);
    //create tom and jerry sprites here
    path=createSprite(160,300 )
     path.addImage(pathImage)
     path.scale=0.8


    cat=createSprite(450,430)
    cat.addImage(catImage);
    cat.scale=0.1


    mouse=createSprite(50,450)
    mouse.addImage(mouseImage);
    mouse.scale=0.1




    







}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

         
       if(cat.x-mouse.x < (cat.width-mouse.width)/2)
       {
           cat.velocityX=0

           cat.addAnimation("catsitting",catsitting)
           cat.changeAnimation("catsitting")
           mouse.addAnimation("mouseteasing1",mouseteasing1)
           mouse.changeAnimation("mouseteasing1")


       }






    drawSprites();




    fill("yellow")
    text(mouseX + ','+mouseY,10,40)
}


function keyPressed(){

  //For moving and changing animation write code here


  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5
      cat.addAnimation("catrunning",catrunning)
      cat.changeAnimation("catrunning")

      mouse.addAnimation("mouseteasing",mouseteasing)
      mouse.changeAnimation("mouseteasing")

      



  }


}
