import '../style_01_block.css'
import addSwitchingImages from './modules/images';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

document.addEventListener('DOMContentLoaded', () => {

    addSwitchingImages();

    const swiper = new Swiper('.swiper', {
        slidesPerView: 3,

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
        renderBullets: (index, className) => {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        keyboard: {
            enabled: true,
            onlyInViewport: 3
        },
    });
});