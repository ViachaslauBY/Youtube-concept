const swiper = new Swiper('.channel-slider', {
  // Optional parameters  
  loop: true,  
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

});

const swiper2 = new Swiper('.channel-slider-recommended', {
  // Optional parameters  
  loop: true,  
  slidesPerView: 3,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-recommended',
    prevEl: '.channel-button-prev-recommended',
  },

});

const swiper3 = new Swiper('.channel-slider-fd', {
  // Optional parameters  
  loop: true,  
  slidesPerView: 6,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-fd',
    prevEl: '.channel-button-prev-fd',
  },

});