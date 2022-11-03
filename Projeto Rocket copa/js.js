function createGame(player1, hours, player2){
    return`
    <li>
    <img src="assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hours}</strong>
    <img src="assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
</li>
    `
}



function createCard(date, day, games){
    return `
    <div class="card">
<h2>${date} <span>${day}</span></h2>
<ul>
    ${games}
</ul>
</div>
    `
}

document.querySelector('#app').innerHTML = `
<header>
<img src="./assets/logo.svg" alt="Logo da NLW">
</header>

<main id="cards">
    ${createCard('24/11', 'Quinta',
        createGame('brazil', '16:00', 'Serbia')
    )}
    ${createCard ('29/11', 'Segunda',
        createGame('brazil', '13:00', 'switzerland')
    )}
    ${createCard ('02/12', 'Sexta',
        createGame('brazil', '16:00', 'camarao')
    )}
    
</main>
`