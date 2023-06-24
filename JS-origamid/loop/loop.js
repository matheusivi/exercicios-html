/*
var videoGames = ['PS$', 'Switch', 'Nitendo'];

videoGames.pop()
console.log(videoGames)

for (var numero = 1; numero <= 10; numero ++){
    console.log(numero)
}


var i = 0
while (i < 10){
    console.log(i);
    i++
}


var videoGames = ['Ntd', 'Ps4', 'PC', 'Nitendo'];

for(var item = 0; item < videoGames.length; item++){
    console.log(videoGames[item])
    if(videoGames[item] === 'Ps4'){
        break
     }
}


var videoGames = ['Ntd', 'Ps4', 'PC', 'Nitendo'];
videoGames.forEach(function(item){
    console.log(item )
})
*/

var tituloBrasil = [1959, 1962, 1994, 2002];

tituloBrasil.forEach(function(titulo){
    console.log(`O brasil foi campeão nos anos ${titulo}`)
})

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for (var fruta = 0; fruta < frutas.length; fruta++){
   console.log(frutas[fruta])
    
    if(frutas[fruta] === 'Pera'){
        break
    }
} 