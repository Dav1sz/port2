const toggleBtn = document.getElementById('toggle-mode');
const body = document.body;

toggleBtn.addEventListener('click', function(){
    body.classList.toggle('dark-mode')
    this.classList.toggle('fa-moon')

})


const menuLanche = document.querySelector('.menu-lanche');

const menu = document.querySelector('.menu');


menuLanche.addEventListener('click', () => {
    menu.classList.toggle('active') 
})




