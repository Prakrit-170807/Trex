var DINO, DINO_cactus, DINOcactus, DINO_RUNNER, DINO_jump;
var I_HATE_GRAVITY, I_HATE_GRAVITY2, GRAVITY_HATER, GRAVITY_HATER2, I_HATE_GRAVITY_BETTER;
var Clouds, Cloudsdisplay, CloudsGroups;
var Cactus1, Cactus1display, Cacuts2, Cactus2display, Cactus3, Cactus3display, Cactus4, Cactus4display, Cactus5, Cactus5display, Cactus6, Cactus6display, CactusGroup;
var GameMode = "Play",
  Score = 0;
var OHHHHH_you_lost, OHHHHH_you_lost_display, HMMMMMM_let_give_you_a_chance, HMMMMMM_let_give_you_a_chance_display, Checkpoint, Die;

function preload() {
  DINO_RUNNER = loadAnimation("trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png", "trex1.png", "trex3.png", "trex4.png")
  DINO_cactus = loadAnimation("trex_collided.png")
  GRAVITY_HATER = loadImage("ground2.png")
  GRAVITY_HATER = loadImage("ground2.png")
  Cloudsdisplay = loadImage("cloud.png")
  Cactus1display = loadImage("obstacle1.png")
  Cactus2display = loadImage("obstacle2.png")
  Cactus3display = loadImage("obstacle3.png")
  Cactus4display = loadImage("obstacle4.png")
  Cactus5display = loadImage("obstacle5.png")
  Cactus6display = loadImage("obstacle6.png")
  OHHHHH_you_lost_display = loadImage("gameOver.png")
  HMMMMMM_let_give_you_a_chance_display = loadImage("restart.png")
  DINO_jump = loadSound("jump.mp3")
  Checkpoint = loadSound("checkPoint.mp3")
  Die = loadSound("die.mp3")
}


function setup() {
  //THAT IS YOU FAVOUTATE DINO!!!!!!!!!!!!!!!!!!!!!
  createCanvas(600, 300);
  DINO = createSprite(80, 240, 10, 10);
  DINO.addAnimation("RUNNER", DINO_RUNNER)
  DINO.scale = 1.2;

  DINOcactus = createSprite(80, 220, 10, 10);
  DINOcactus.addAnimation("Touching cactus", DINO_cactus)
  DINOcactus.scale = 0.6


  //THAT IS LAND 
  I_HATE_GRAVITY = createSprite(300, 240, 800, 10)
  I_HATE_GRAVITY.addImage(GRAVITY_HATER)

  //THAT IS LAND  
  I_HATE_GRAVITY2 = createSprite(900, 240, 800, 10)
  I_HATE_GRAVITY2.addImage(GRAVITY_HATER)

  //LAND IS NO SPACE to walk
  I_HATE_GRAVITY_BETTER = createSprite(300, 245, 600, 1)

  Score = 0

  //this is to disincourage you that you have lost!!!!
  OHHHHH_you_lost = createSprite(280, 100, 10, 10)
  OHHHHH_you_lost.addImage(OHHHHH_you_lost_display)
  OHHHHH_you_lost.scale = 0.8

  //this is to make you fell happy again and keep play in the game I have created with effort
  HMMMMMM_let_give_you_a_chance = createSprite(280, 140, 10, 10)
  HMMMMMM_let_give_you_a_chance.addImage(HMMMMMM_let_give_you_a_chance_display)
  HMMMMMM_let_give_you_a_chance.scale = 0.5


  CloudGroups = new Group()
  CactusGroup = new Group()


}

function draw() {
  background(320)
  //that is a private code better don't mess with it
  text(mouseX + "," + mouseY, mouseX, mouseY)

  DINO.collide(I_HATE_GRAVITY_BETTER)
  text("Score:" + Score, 530, 20)

  DINO.setCollider("circle", 0, 0, 20)



  if (GameMode == "Play") {
    Score = Score + Math.round(frameRate() / 60)
    if (keyWentDown("space") && DINO.y >= 150) {
      DINO.velocityY = -30;
      DINO_jump.play()
      //DINO.changeAnimation("Jump",DINO_JUMP)
    }
    if (Score > 0 && Score % 100 == 0) {
      Checkpoint.play()
    }
    if (I_HATE_GRAVITY.x < 0) {
      I_HATE_GRAVITY.x = 1200;
    }
    if (I_HATE_GRAVITY2.x < 0) {
      I_HATE_GRAVITY2.x = 1200;
    }
    DINOcactus.visible = false
    I_HATE_GRAVITY_BETTER.visible = false
    I_HATE_GRAVITY.velocityX = -(10 + Score / 100)
    I_HATE_GRAVITY2.velocityX = -(10 + Score / 100)
    Clouder();
    Cactus_Spanwer1();
    Cactus_Spanwer2();
    Cactus_Spanwer3();
    Cactus_Spanwer4();
    Cactus_Spanwer5();
    Cactus_Spanwer6();
    DINO.velocityY = DINO.velocityY + 3;
    OHHHHH_you_lost.visible = false
    HMMMMMM_let_give_you_a_chance.visible = false
    if (CactusGroup.isTouching(DINO)) {
      GameMode = "END"
      Die.play()
    }
  }



  if (GameMode == "END") {
    I_HATE_GRAVITY.velocityX = 0
    I_HATE_GRAVITY2.velocityX = 0
    CloudGroups.setVelocityXEach(0)
    CactusGroup.setVelocityXEach(0)
    DINOcactus.setAnimation("Touching cactus", DINO_cactus)
    DINO.visible = false
    DINOcactus.visible = true
    OHHHHH_you_lost.visible = true
    HMMMMMM_let_give_you_a_chance.visible = true
    CactusGroup.setLifetimeEach(-1)
    CloudGroups.setLifetimeEach(-1)
    DINO.velocityY = DINO.velocityY + 3;
    if (mousePressedOver(HMMMMMM_let_give_you_a_chance)) {
      GameMode = "Play"
      CloudGroups.destroyEach()
      CactusGroup.destroyEach()
      DINO.changeAnimation("RUNNER", DINO_RUNNER)
      DINO.visible = true
      Score = 0
    }
  }


  drawSprites();

}


function Clouder() {
  if (frameCount % 90 == 0) {
    Clouds = createSprite(650, 60, 10, 10)
    Clouds.addImage(Cloudsdisplay)
    Clouds.scale = 0.6
    Clouds.velocityX = -(5 + Score / 100)
    Clouds.lifetime = 210
    CloudGroups.add(Clouds)
    Clouds.y = Math.round(random(60, 130))
    Clouds.depth = DINO.depth
    DINO.depth = DINO.depth + 1
  }
}

function Cactus_Spanwer1() {
  if (frameCount % 160 == 0) {
    Cactus1 = createSprite(650, 214, 10, 10)
    Cactus1.addImage(Cactus1display)
    Cactus1.scale = 0.8
    Cactus1.velocityX = -(10 + Score / 100)
    Cactus1.lifetime = 200
    CactusGroup.add(Cactus1)
  }
}

function Cactus_Spanwer2() {
  if (frameCount % 245 == 0) {
    Cactus2 = createSprite(650, 214, 10, 10)
    Cactus2.addImage(Cactus2display)
    Cactus2.scale = 0.8
    Cactus2.velocityX = -(10 + Score / 100)
    Cactus2.lifetime = 200
    CactusGroup.add(Cactus2)
  }
}

function Cactus_Spanwer3() {
  if (frameCount % 377 == 0) {
    Cactus3 = createSprite(650, 214, 10, 10)
    Cactus3.addImage(Cactus3display)
    Cactus3.scale = 0.8
    Cactus3.velocityX = -(10 + Score / 100)
    Cactus3.lifetime = 200
    CactusGroup.add(Cactus3)
  }
}

function Cactus_Spanwer4() {
  if (frameCount % 513 == 0) {
    Cactus4 = createSprite(650, 214, 10, 10)
    Cactus4.addImage(Cactus4display)
    Cactus4.scale = 0.6
    Cactus4.velocityX = -(10 + Score / 100)
    Cactus4.lifetime = 200
    CactusGroup.add(Cactus4)
  }
}

function Cactus_Spanwer5() {
  if (frameCount % 105 == 0) {
    Cactus5 = createSprite(650, 214, 10, 10)
    Cactus5.addImage(Cactus5display)
    Cactus5.scale = 0.6
    Cactus5.velocityX = -(10 + Score / 100)
    Cactus5.lifetime = 200
    CactusGroup.add(Cactus5)
  }
}

function Cactus_Spanwer6() {
  if (frameCount % 477 == 0) {
    Cactus6 = createSprite(650, 214, 10, 10)
    Cactus6.addImage(Cactus6display)
    Cactus6.scale = 0.6
    Cactus6.velocityX = -(10 + Score / 100)
    Cactus6.lifetime = 200
    CactusGroup.add(Cactus6)
  }
}