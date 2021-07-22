var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 8,
        stretch: 0,
        depth: 100,
        modifier: 5,
        slideShadows: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
});