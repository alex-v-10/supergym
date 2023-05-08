import Swiper from '../vendor/swiper';

export const initSwipers = () => {
  const trainersSwiper = new Swiper('.trainers__swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.trainers__next',
      prevEl: '.trainers__prev',
    },
    slidesPerView: 4,
  });

  const reviewsSwiper = new Swiper('.reviews__swiper', {
    direction: 'horizontal',
    loop: true,
    navigation: {
      nextEl: '.reviews__next',
      prevEl: '.reviews__prev',
    },
  });
};
