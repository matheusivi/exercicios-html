function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
  
var data = new Date()
//var hora = data.getHours()
var hora = 13
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 6 && hora < 12){
   
    img.src='fotos/manhã.jpg'
}else if (hora >= 12 && hora < 18){
    
    img.src = 'fotos/tarde.jpg'
}else {
    
    img.src= 'fotos/Noite.jpg'
}
}
