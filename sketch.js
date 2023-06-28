var gameState = 'start';
var botaoImg, botao;
var espaço
var noggers
var jorge
var nome
var espaçoImg
function preload(){
  nomeImg = loadImage("filmandolutashd.png")
  botaoImg = loadImage("start.png");
  espaçoImg = loadImage("espaço.png");
  soloImg = loadImage("solo.png");

  //carregar as animações do noggers atacando
  noggersParado = loadAnimation("noggers.png");
  //carregar as animações do noggers atacando
  
  jorgeParado = loadAnimation("jorge.png");
  //carregar as animações do jorge atacando
  
}

function setup() {
  createCanvas(800,500);  
  espaço = createSprite(398,255,255,255)
  espaço.addImage(espaçoImg)
  espaço.scale = 1.1
  espaço.visible = false

  noggers = createSprite(559,100,255,255)
  noggers.addAnimation("parado",noggersParado)
  //add a animação do noggers atacando
  
  noggers.scale = 0.2
  noggers.visible = false

  
  jorge = createSprite(150,100,255,255)
  jorge.addAnimation("parado",jorgeParado)
  //add a animação do jorge atacando
  
  jorge.scale = 0.07
  jorge.visible = false
  
  nome = createSprite(400, 200, 100, 700);
  nome.addImage(nomeImg);
  nome.scale = 3.0

  botao = createSprite(400, 400, 50, 50);
  botao.addImage(botaoImg);
  botao.scale = 0.3

  solo = createSprite(400, 350, 550, 50);
  solo.addImage(soloImg);
  solo.scale = 0.5
  solo.visible = false;

}

var player = ''

function draw(){
  background("white")
  if(gameState=='start'){
    if(mousePressedOver(botao) ){
      gameState = 'escolha'
    }
  }
  if(gameState =="escolha"){
    botao.visible = false;
    espaço.visible = true;
    jorge.visible = true;
    noggers.visible = true;

    if(mousePressedOver(noggers) ){
      //mude o valor de player para noggers
     
      gameState = 'battle'
    }
    if(mousePressedOver(jorge) ){
      //mude o valor de player para jorge
     
      gameState = 'battle'
    }
  }  
  if(gameState == "battle"){
    nome.visible = false;
    solo.visible = true;

    noggers.setCollider("circle", 0,0,200)
    jorge.setCollider("circle", 0,0,900)

    //mude a animação deles para parado
    


    //dê gravidade
    


    //mande colidir com o solo
    



    
    
  
   
  
  
  }  
  if(gameState == 'over'){
    background("white");
    textSize(50);
    fill("red")
    text("GAME OVER", width/3,height/1.5)
    solo.visible = false;
    espaço.visible = false;
    jorge.visible = false;
    noggers.visible = false;
    nome.visible = true;


  }
  drawSprites()
}