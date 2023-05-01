import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,//должно быть минимум 6 слайдов для корректной работы
    spaceBetween: 10,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    pagination: {
        el: '.swiper-pagination',
        // type: 'progressbar',
        clickable: true,
        dynamicBullets: true,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: 3
    },

    autoplay: {
        delay: 2000
    },

    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },

    breakpoints: {
        300: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 4,
        }
    },
});

export default swiper;
