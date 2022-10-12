
/*
function calcular(){
    var txtv = window.document.getElementById('txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é <strong>${vel}km/h</strong></p>`
    if (vel > 60){
        res.innerHTML = `<p>Você está <strong>multado</strong> por excesso de velocidade</p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
}*/

function calcular(){
    var nvel = window.document.getElementById('tn1')
    var res = window.document.getElementById('res')
    var vel = Number(nvel.value)
    res.innerHTML = `<p>A sua velocidade está <strong>${vel}</strong> Km/h</p>`
    if (vel > 60){
       res.innerHTML = 'Você está MULTADO! Por excesso de velocidade!'
    } 
    res.innerHTML += '<p>Dirija com Cuidado, use sempre o cinto de segurança.</p>'
}
