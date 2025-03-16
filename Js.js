let card1 = document.getElementsByClassName('.card1');

function aparecer1(){
    card1.classList.add('visible');
}
window.addEventListener('scroll', aparecer1);