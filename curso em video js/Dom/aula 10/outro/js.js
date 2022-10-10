/*function somar(){
    var tn1 = window.document.getElementById('txtn1') 
    var tn2 = window.document.querySelector('input#txtn2')
    var res = window.document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma  entre ${n1} e ${n2} é igual a ${s}`
} */

function somar(){

    var x1 = window.document.getElementById('n1')
    var x2 = window.document.querySelector('input#n2')
    var res = window.document.getElementById('res')
    var r1 = Number(n1.value)
    var r2 = Number(n2.value)
    var s = r1 + r2
    res.innerText = `A soma entre ${r1} e ${r2} é igual a ${s}` 
}