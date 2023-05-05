import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
    centeredSlides: true,
    loop: true,//должно быть минимум 6 слайдов для корректной работы
    spaceBetween: 50,

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
        delay: 2000,
        disableOnInteraction: true
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
        500: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 4,
        },
        1700: {
            slidesPerView: 5,
        }
    },
    on: {
        click: function () {
            swiper.autoplay.stop();
            swiper.disable();
        },
    },
});

export default swiper;
