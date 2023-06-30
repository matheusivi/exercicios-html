/*
const imgs = document.querySelectorAll('img');


imgs.forEach(function(item, index, array){
    console.log(item)
})


const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach((item)=>{
    console.log(item)
})



const todoParagrafo = document.querySelectorAll('p')

todoParagrafo.forEach((item)=>{
    console.log(item)
})


const imgs = document.querySelectorAll('img')

imgs.forEach((item, index) =>{
    console.log(item, index)
})


const imgs = document.querySelectorAll('img')

let i = 0;
imgs.forEach(()=>{
    console.log(i++)
});
*/

const imgs = document.querySelectorAll('img')
let i = 0
imgs.forEach(() => console.log(i++))