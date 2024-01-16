const swiper1 = new Swiper('.productsSwiper', {
  loop: true,
  spaceBetween: 16,
  slidesPerView: 5,
  speed: 2000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  direction: 'horizontal',
  breakpoints: {
    360: {
      slidesPerView: 5,
    },
    700: {
      slidesPerView: 7,
      spaceBetween: 20,
    },
    1024: {
      spaceBetween: 32,
      slidesPerView: 7,
    },
    1440: {
      spaceBetween: 32,
      slidesPerView: 7,
    },
    1920: {
      spaceBetween: 32,
      slidesPerView: 7,
    },
  },
});
