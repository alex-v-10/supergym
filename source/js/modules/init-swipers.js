import Swiper from '../vendor/swiper';

export const initSwipers = () => {
  const trainersSwiper = new Swiper('.trainers__swiper', {
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
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
  });

  const trainerCards = document.querySelectorAll('.swiper-slide:not(.swiper-slide-duplicate) .trainer-card');
  if (trainerCards.length) {
    for (const card of trainerCards) {
      card.setAttribute('tabindex', '0');
    }
  }

  const onBreakpointChange = () => {
    const duplicates = document.querySelectorAll('.swiper-slide-duplicate .trainer-card');
    if (duplicates.length) {
      for (const card of duplicates) {
        card.setAttribute('tabindex', '-1');
      }
    }
  };

  trainersSwiper.on('breakpoint', onBreakpointChange);

  (() => {
    return new Swiper('.reviews__swiper', {
      direction: 'horizontal',
      loop: false,
      navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
      },
      spaceBetween: 40,
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      },
    });
  })();
};
