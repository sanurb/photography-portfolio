//! add header styles on scroll
const headerScroll = () => {
    const headerElement = document.querySelector('.header');
    this.scrollY >= 30 ? headerElement.classList.add('active') : headerElement.classList.remove('active');
}
window.addEventListener('scroll', headerScroll);
//! open and close the menu on hamburger icon click
const menuToggler = document.querySelector('#menu-toggler');
const navbarMenu = document.querySelector('.navbar__menu');
const toggleMenu = () => {
    navbarMenu.classList.toggle('active');
}
menuToggler.addEventListener('click', toggleMenu);
// close menu when nav-links are clicked
const linksToggleMenu = (e) => {
    if (e.target.classList.contains('navbar__list-link')) navbarMenu.classList.remove('active');
}
window.addEventListener('click', linksToggleMenu);
//! swipper
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});