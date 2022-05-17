import './style.css'

const menuButton = document.querySelector('#menu');
const closeButton = document.querySelector('#close');
const modalMenu = document.querySelector('#modal');
const mobileLinks = document.querySelectorAll('.links-mobile');

const addClass = () => {
    if (!modalMenu.classList.contains('none')) {
        modalMenu.classList.add('none')
    }
}

menuButton.addEventListener('click',()=>{
    if (modalMenu.classList.contains('none')) {
        modalMenu.classList.remove('none')
    }
});

closeButton.addEventListener('click',addClass);

mobileLinks.forEach((item)=>{
    item.addEventListener('click',addClass)
});

