let openBurger = document.querySelector('.openBurger_button');
let popUp = document.querySelector('.popUp');
let navList = document.querySelector('.nav__list');
let navItem = document.querySelectorAll('.nav__item');
let burgerMenuLine = document.querySelectorAll('.burgerMenu__line');
let body = document.querySelector('.main');
let navItems = document.querySelectorAll('.nav__item');

function closeBurgerMenu(){
burgerMenuLine[0].classList.remove('line__first');
burgerMenuLine[1].classList.remove('line__second');
burgerMenuLine[2].classList.remove('line__third');
popUp.classList.remove('open');
navList.classList.remove('open'); 
}

navItems.forEach((link) => { 
link.addEventListener("click", closeBurgerMenu); }); 

body.onclick = closeBurgerMenu;

openBurger.addEventListener('click', function(){
popUp.classList.toggle('open');
navList.classList.toggle('open');
navItem.forEach(index => {
   index.classList.toggle('open'); 
});
burgerMenuLine[0].classList.toggle('line__first');
burgerMenuLine[1].classList.toggle('line__second');
burgerMenuLine[2].classList.toggle('line__third');
})