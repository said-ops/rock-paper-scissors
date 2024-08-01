//hundle menu
const rules = document.getElementById('rules');
const close = document.getElementById('close');
const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay'); 

function rulesHundle (){
    overlay.style.visibility = 'visible';
    overlay.style.opacity = '0.8';
    setTimeout(() => {
        menu.style.visibility = 'visible';
        menu.style.opacity = '1';
    },300) ;
}
function closeHundle () {
    overlay.style.visibility = 'hidden';
    overlay.style.opacity = '0';
    setTimeout(() => {
        menu.style.opacity = '0';
        menu.style.visibility = 'hidden';
    },300) ;
    
}
    rules.addEventListener('click',rulesHundle);
    close.addEventListener('click',closeHundle);
//