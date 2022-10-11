/*var agora = new Date()
var horas = agora.getHours()
console.log (`Agora são exatamente ${horas} horas`)
if ( horas > 6 && horas <= 12.59){
    console.log('Bom Dia!')
} else if (horas > 12.01 && horas <= 18) {
    console.log('Boa tarde!')

} else if (horas > 18.1 && horas < 23.59) {
    console.log('Boa noite!')
} else {
    console.log('Boa Madrugada!')
}
*/

var agora = new Date()
var horas = agora.getHours()
console.log(`Agora são exatamente ${horas} horas.`)
if (horas >= 6 && horas< 12){
    console.log('Bom dia!')
} else if (horas >= 12.01 && horas <= 18){
    console.log('Boa tarde!')
} else if (horas >= 18.01 && horas <= 23.59 ){
    console.log('Boa noite!')
} else {
    console.log('Boa madrugada!')
}


