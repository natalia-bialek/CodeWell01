const menuToggler = document.querySelector('#menu__icon');
const menuContainer = document.querySelector('.menu__container');
const subMenuToggler = document.querySelector('#products');
const subMenuContainer = document.querySelector('.menu__sub-menu');

const rect = subMenuToggler.getBoundingClientRect();

// -- toggle mobile navigation bar -- // 
menuToggler.onclick = () => {
    menuContainer.classList.toggle('hamburger--active');
}

// -- show submenu under the clicked link (products) -- //
subMenuToggler.onclick = () => {
    subMenuContainer.classList.toggle('sub-menu--active');
    if (window.screen.width >= 1024) {
        subMenuContainer.style.top = rect.top + 50 + 'px';
        subMenuContainer.style.left = rect.left - 100 + 'px';
    } else {
        subMenuContainer.style.top = 70 + 'px';
    }
}
