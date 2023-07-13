const imgs = document.querySelector('img');

console.log(imgs.offsetTop);

const todasImgs = document.querySelectorAll('img')

let soma = 0
todasImgs.forEach((item) => {
    soma += item.offsetWidth
    console.log(soma)
})

const links = document.querySelectorAll('a');

