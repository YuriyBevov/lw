import Swiper, { Navigation, /*Thumbs, EffectFade, Pagination,*/ Controller } from 'swiper';

Swiper.use([/*Thumbs, EffectFade,*/ Navigation, /*Pagination,*/ Controller]);

const clients = document.querySelector('.clients-slider');

if(clients) {
  new Swiper(clients, {
    spaceBetween: 30,
    slidesPerView: 'auto',

    navigation: {
      nextEl: ".clients-slider-button-next",
      prevEl: ".clients-slider-button-prev",
    },
  })
}
