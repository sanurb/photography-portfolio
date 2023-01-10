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
//! Scroll Reveal
const sr = ScrollReveal({
    distance: '50px',
    duration: 1500,
    easing: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
});

sr.reveal('.showcase__title, .showcase__image, .section-metadata, .swiper', {
    origin: 'top',
    interval: 250
});

sr.reveal('.services__image-wrapper, .about__information, .post--left', {
    origin: 'left'
});

sr.reveal('.services__list, .about__images, .post--right', {
    origin: 'right'
});

sr.reveal('.footer__container', {
    origin: 'top'
});