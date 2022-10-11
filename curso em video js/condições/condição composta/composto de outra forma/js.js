
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
    var txvel = window.document.getElementById('tn1')
    var res = window.document.getElementById('res')
    var t1 = Number(txvel.value)
    res.innerHTML = `<p>A sua velocidade é <strong>${t1}Km/h</strong></p>`
    if ( t1 > 70){
        res.innerHTML = ('<p>Você está <strong>MULTADO</strong> por excesso de velocidade.</p>')

    }
    res.innerHTML += `<p>Dirija com cuidado, use sinto de segurança.</p>`
}