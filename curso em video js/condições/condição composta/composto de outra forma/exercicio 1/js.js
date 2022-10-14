function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
  
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 6 && hora < 12){
   
    img.src='fotos/manhã.jpg'
    document.body.style.background = '#e2cd9f'
}else if (hora >= 12 && hora < 18){
    
    img.src = 'fotos/tarde.jpg'
    document.body.style.background = '#b9846f'
}else {
    
    img.src= 'fotos/Noite.jpg'
    document.body.style.background = '#515154'
}
}
