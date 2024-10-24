//Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 22;
let raio = diametro/2;

//Velocidade da bolinha
let velocidadeXbolinha = 5;
let velocidadeYbolinha = 5;

//Variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let largura = 10;
let altura = 100;

//Variáveis do oponente
let xOponente = 585;
let yOponente = 150;
let velocidadeYoponente;

//Placar
let meusPontos = 0;
let pontosOponente = 0;

//Sons
let trilha;
let raquetada;
let ponto;

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  ApariçaoDaBolinha();
  VelocidadeDaBolinha();
  LimitesDoCenario();
  ApariçaoDaRaquete(xRaquete, yRaquete);
  MovimentoDaRaquete();
  ToqueDaRaquete();
  ApariçaoDaRaquete(xOponente, yOponente);
  MovimentoDoOponente();
  ToqueDoOponente();
  ApariçaoDoPlacar();
  PontuaçaoDoPlacar();
}

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");  
}

function ApariçaoDaBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function VelocidadeDaBolinha(){
    xBolinha += velocidadeXbolinha;
    yBolinha += velocidadeYbolinha; 
}

function LimitesDoCenario(){
    if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadeXbolinha *= -1;
    ponto.play();
  }
    if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeYbolinha *= -1;
  }
}

function ApariçaoDaRaquete(x, y){
    rect(x, y, largura, altura);
}

function MovimentoDaRaquete(){
    if (keyIsDown(UP_ARROW)){
    yRaquete -= 7;
  }
    if (keyIsDown(DOWN_ARROW)){
    yRaquete += 7;
  }
    if(yRaquete < 0){
    yRaquete = 0;
  }
    if(yRaquete + altura > 400){
    yRaquete = 300;
  }
}

function ToqueDaRaquete(){
    if (xBolinha - raio < xRaquete + largura && yBolinha - raio < yRaquete + altura && yBolinha - raio > yRaquete){
    velocidadeXbolinha *= -1;
    raquetada.play();
  }
}

function ToqueDoOponente(){
     if(xBolinha + raio > xOponente && yBolinha + raio < yOponente + altura && yBolinha + raio > yOponente){
     velocidadeXbolinha *= -1;
     raquetada.play();
  }
}

function MovimentoDoOponente(){
  velocidadeYoponente = yBolinha - yOponente - altura/2;
  yOponente += velocidadeYoponente;
  
    if(yRaquete < 0){
    yRaquete = 0;
  }
    if(yRaquete + altura > 400){
    yRaquete = 300;
  }
}

function ApariçaoDoPlacar(){
    stroke(1000)
    textSize(20);
    textAlign(CENTER);
    fill("#ccccff");
    rect(230, 5, 40, 26, 5);
    fill("#03A9F4");
    rect(370, 5, -40, 26, 5);
    fill(1000);
    text(meusPontos, 250, 25);
    fill(1000);
    text(pontosOponente, 350, 25);
}

function PontuaçaoDoPlacar(){
     if(xBolinha - raio < 0){
     pontosOponente += 1;
     }
     if(xBolinha + raio > width){
     meusPontos += 1;
     }
}