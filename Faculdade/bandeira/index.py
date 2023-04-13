#função que faz os ajustes do programa. Roda apenas uma vez.
def setup():
#cria uma tela com 400 x 300 pixels
  p.createCanvas(401, 301)
  p.background(255)
  p.rectMode(p.CORNER)
 
#Funcao que desenha na tela
def draw():
  p.fill(255,255,255) #fundo de tela branco
  p.rect(0,0, 400, 300) #rect(x,y, largura, comprimento)
  p.fill(212, 33, 61) #fundo de tela vermelho
  p.rect(0,150, 400, 150)
p.setup = setup
p.draw = draw
myp5 = window.p5.new(sketch)