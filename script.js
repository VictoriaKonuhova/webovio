let button = document.querySelector('.menu__btn');
let menuList = document.querySelector('.header__menu-list');
function menu() {
  menuList.classList.toggle('header__menu-list--active')
};
button.onclick = menu;

// const mediaQuery = window.matchMedia('(max-width: 530px)')
// if (mediaQuery.matches) {
//   document.querySelector('.services__item > br').remove();
// }