var largura=180,altura=50,largura2=140,altura2=40,lar=30,al=15;
var t=225;
var x =70,x2=240,x3=30,x4=360,x5=335,x6=330,x7=50,x9=180,movex=15;
var i=70,c=70,xd=0,yd=0,x10=30,y10=310,x8=60;
var y =105,y2=310,y3=220,y4=310,y7=335,y8=280,h=280,movey=40;
var tela= 0,p=165,a=225,b=225,disparo=false
var a2=355,h2=390,x60=30,a6=225;
var vidas = 1,pontos=0,cont=6000

function setup() {
  createCanvas(450, 450);


}
function draw() {
background(300,300,300)

  if(tela==0){
menu()
  }
  if(tela==1){
    fase1()
  }
  if(tela==2){
    instrucoes()
}
  if(tela==3){
    creditos()
  }
  if(tela==4){
   fase2() 
  }
 if(tela==5){
  fase3()
}
  if(tela==6){
    completo()
}
}
function preload() {
  educador = loadImage('educador.jpg');
  programador = loadImage('programador.jpg');
  robot = loadImage('robot-idle.gif');
  caixa2= loadImage('caixa2.png')
}
 function menu(){
   background(caixa2);
  if(pontos==3){
    pontos=0
  }
   if(cont==0){
     cont=6000
   }
   if(vidas<=0){
     vidas=1  
   }
  if( mouseX>x && mouseX<x +largura && mouseY>y&&mouseY<y+altura){
  fill(260,260,0);
  rect(x,y,largura,altura);
    if(mouseIsPressed){
      tela=1
    }
  }
  if( mouseX>i && mouseX<i +largura && mouseY>p&&mouseY<p+altura){
  fill(260,260,0);
  rect(i,p,largura,altura);
    if(mouseIsPressed){
      tela=2
    }
  }
   if( mouseX>c && mouseX<c +largura && mouseY>t&&mouseY<t+altura){
  fill(260,260,0);
  rect(c,t,largura,altura);
     if(mouseIsPressed){
      tela=3
    }
   }
 
  fill(0)
   
textStyle(BOLDITALIC);  
textSize(40);
text('Jogo do Caixa',50,60);
textStyle(BOLD);
   textSize(30);
text('jogar', 100,140);
textSize(30);
text('instruções', 75, 200);
textSize(30);
text('créditos', 90,260)
  } 
function fase1(){
  background(255,0,255);
  
  cont--
  textSize(20)
  text('tempo\n'+cont,160,200)
  
  fill(250);
 
  textSize(25)
   fill(250,200,0);
  rect(x5,y4+25,3*lar,3*al);
  fill(0,200,0);
  text('5',x5+35,y4+55);

   if(dist(xd,yd,x5+50,y4+45)<27){
    vidas= vidas-1
     
     }
   textSize(25)
  fill(140,90,60)
  rect(x6,a-70,3*lar,3*al);
  fill(0,200,0)
  text('23',x6+30,a-40);

  
  if(dist(xd,yd,x6+130,a-60)<20){
    pontos++
    tela=4
     
     }
   textSize(25)
  fill(200,200,200)
  rect(335,240,3*lar,3*al);
  fill(0,200,2)
  text('50',x4,h-10);
 
  
  if(dist(xd,yd,405,250)<25){
    vidas=vidas-1
     
     }
  
  fill(0);
  textSize(20)
  text('Vidas : '+vidas,0,30)
  text('Pontos : '+pontos,330,30)
  textSize(26);
text('Primeira Tarefa',110,30);
textSize(14);
  fill(0,300,0)
  rect(0,40,450,85)
  fill(0)
  
  text('conta de R$30,desconto de 10%\ne o cliente pagou com R$50\nmove-se:seta pra cima e baixo\natira:seta direita',80,70);
  text('Acerte o troco correto',120,50)
  text('50-30-(30*10/100)=\n\n          troco',320,70);
  if(keyIsDown(UP_ARROW)){
   movey=movey-2 
  } 
if(keyIsDown(DOWN_ARROW)){
   movey=movey+2 
  }
  movex=15
   image( robot,movex,movey,70,80)
  if(keyIsDown(RIGHT_ARROW)&&disparo==false){
    xd=movex
    yd=movey
    disparo=true
  }
    if(disparo==true){
      fill(300,0,0)
      ellipse(xd,yd,20,20);
      xd=xd+8
    }
  if(xd>450){
    disparo=false
    
  }

  if(vidas==0){
    pontos=0
    tela=0
    
  }
  if(cont==0){
    tela=0
    cont=6000
  }
}
function fase2(){
  background(300,33,33)
   cont--
  textSize(20)
  text('tempo\n'+cont,160,200)
   
  fill(255,255,0)
  
  fill(250);
 
  textSize(25)
   fill(250,200,0);
  rect(x10,y10+25,3*lar,3*al);
  fill(0,200,0);
  text('36',x10+35,y10+55);

   if(dist(xd,yd,x10-40,y10+45)<20){
    pontos=pontos+1
     tela=5
     
     }
   textSize(25)
  fill(140,90,60)
  rect(x60,a6-50,3*lar,3*al);
  fill(0,200,0)
  text('30',x60+30,a6-20);

  
  if(dist(xd,yd,-20,a6-20)<24){
    
     vidas= vidas-1
     }
   textSize(25)
  fill(200,200,200)
  rect(35,250,3*lar,3*al);
  fill(0,200,2)
  text('20',x8,y8+10);
 
  
  if(dist(xd,yd,-30,270)<25){
    vidas=vidas-1
     
     }
  fill(0);
  textSize(20)
  text('Vidas : '+vidas,0,30)
  text('Pontos : '+pontos,330,30)
  textSize(26);
text('Segunda Tarefa',110,30);
textSize(14);
  fill(0,300,0)
  rect(0,40,450,85)
  fill(0)
  text('conta de R$80,desconto de 20%\ne o cliente pagou com R$100\nmove-se:seta pra cima e baixo\natira:seta esquerda',80,70)
  text('100-80-(80*20/100)=\n\n          troco',330,70);
  text('Acerte o troco correto',120,53)
  
  movex=320
  if(keyIsDown(UP_ARROW)){
   movey=movey-2 
  } 
if(keyIsDown(DOWN_ARROW)){
   movey=movey+2 
  }
   image( robot,movex,movey,70,80)
  if(keyIsDown(LEFT_ARROW)&&disparo==false){
    xd=movex
    yd=movey
    disparo=true
  }
    if(disparo==true){
      fill(300,300,300)
      ellipse(xd,yd,20,20);
      xd=xd-8
    }
  if(xd<0){
    disparo=false
    
  }

  if(vidas==0){
   pontos=0 
   tela=0
  }
    if(cont==0){
    tela=0
    cont=6000
  }
}
function fase3(){  
  background(300,333,33)
   cont--
  textSize(20)
  text('tempo\n'+cont,160,200)
   
  fill(255,255,0)
  
  fill(250);
 
  textSize(25)
   fill(250,200,0);
  rect(x7,y7+25,3*lar,3*al);
  fill(0,200,0);
  text('22',x7+30,y7+55);

   if(dist(xd,yd,x7+30,y7+95)<25){
    vidas= vidas-1
     
     }
   textSize(25)
  fill(140,90,60)
  rect(x6,a2+10,3*lar,3*al);
  fill(0,200,0)
  text('12',x6+30,a2+40);

  
  if(dist(xd,yd,x6+20,a2+90)<20){
    
     vidas=vidas-1
     }
   textSize(25)
  fill(200,200,200)
  rect(200,360,3*lar,3*al);
  fill(0,200,2)
  text('2',x9+50,h2);
  
  if(dist(xd,yd,240,450)<30){
   pontos=pontos+1
   tela=6  
     }
  fill(0);
  textSize(20)
  text('Vidas : '+vidas,0,30)
  text('Pontos : '+pontos,330,30)
  textSize(26);
text('Terceira Tarefa',110,30);
textSize(14);
  fill(0,300,0)
  rect(0,40,450,85)
  fill(0)
  text('conta de R$16,desconto de 50%\ne o cliente pagou com R$20\nmove-se:seta pra esquerda e direita\natira:seta para baixo',80,70)
  text('20-16-(16*50/100)=\n\n          troco',330,70);
  text('Acerte o troco correto',120,53)
  
  movey=90
  if(keyIsDown(LEFT_ARROW)){
   movex=movex-2 
  } 
if(keyIsDown(RIGHT_ARROW)){
   movex=movex+2 
  }
   image( robot,movex,movey,70,80)
  if(keyIsDown(DOWN_ARROW)&&disparo==false){
    xd=movex
    yd=movey
    disparo=true
  }
    if(disparo==true){
      fill(0)
      ellipse(xd,yd,20,20);
      yd=yd+8
    }
  if(yd>450){
    disparo=false
    
  }

  if(vidas==0){
   pontos=0 
   tela=0
  }
  if(cont==0){
    tela=0
    cont=6000
  }
}
function completo(){
 
textSize(20)
text('PARABÉNS\n\nzerou o jogo\n\n   Pontos :'+pontos,160,170)
}
function instrucoes(){
   background(220);
  textSize(15);
  text('Ano:4 ano fundamental',20,20)
  text( 'Matemática(EF04MA25) Resolver e elaborar problemas que'+"\nenvolvam situações de compra e venda e formas de paga-\nmento, utilizando termos como troco e desconto enfatizando \no o comsumo ético, consciente e responsável.\n\n\nO jogo consiste em calcular o troco, sabendo do preço inicial\ndo desconto e do valor pago pelo cliente.\n\nModo de jogo: para passar de fase tem que atirar no troco\n certo, a movimentaçao varia de fase em fase\n ha fases que move-se com as setas de cima e baixo e fases\n com as setas esquerda e direita,para atirar também varia de\n fase ha aquela que é com a seta esquerda outra com a direita \n e também com a seta para baixo.Tem que terminar o jogo\n antes de 1 minuto. \n\n\n         aperte ENTER para voltar ao menu",10,40 );  
 

}
function creditos(){
  background(0,210,210);
 image(programador,140,80,110,110);
  image(educador,140,260,110,110);
  fill(250,290,0);
  rect(70,190,270,40);
  rect(70,360,270,40);
  fill(200,0,0);
    textSize(25);
  text('Creditos',150,40)
  textSize(16)
  text('Programador:Caio Flavio villar',80,220);
  text('Educador:Hiltom',150,390);
  text('aperte Enter para voltar ao menu',80,430);
  }
  function keyPressed(){
    if(key=="Enter"){
  tela=0
    
  }
  }
//https://youtu.be/TtZlv9pRQ0Q