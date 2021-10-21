// Burger fonction

let burgerLink = document.getElementById('burgerLink');
let burger = document.getElementById('burger');
let burgerListLink = document.getElementById('burgerListLink');

burgerLink.addEventListener('click' , (e) =>{
    e.preventDefault();
    burger.classList.toggle('open');
    burgerListLink.classList.toggle('open');
})