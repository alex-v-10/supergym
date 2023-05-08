import Swiper from '../vendor/swiper';

export const initSwipers = () => {
  const trainersSwiper = new Swiper('.trainers__swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.trainers__swiper-button-next',
      prevEl: '.trainers__swiper-button-prev',
    },
    slidesPerView: 4,
  });

  const reviewsSwiper = new Swiper('.reviews__swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.reviews__swiper-button-next',
      prevEl: '.reviews__swiper-button-prev',
    },
  });
};
