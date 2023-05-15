import Swiper from '../vendor/swiper';

export const initSwipers = () => {
  (() => {
    return new Swiper('.trainers__swiper', {
      direction: 'horizontal',
      loop: true,
      navigation: {
        nextEl: '.trainers__next',
        prevEl: '.trainers__prev',
      },
      spaceBetween: 40,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        767: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1199: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
      },
    });
  })();

  (() => {
    return new Swiper('.reviews__swiper', {
      direction: 'horizontal',
      loop: false,
      navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
      },
      spaceBetween: 40,
    });
  })();
};
