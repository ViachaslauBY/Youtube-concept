const swiper = new Swiper('.channel-slider', {
  // Optional parameters  
  loop: true, 
  spaceBetween: 20, 
  slidesPerView: 1,

  breakpoints: {
    1980: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },

});

const swiper2 = new Swiper('.channel-slider-recommended', {
  // Optional parameters  
  loop: true,  
  spaceBetween: 20,
  slidesPerView: 1,

  breakpoints: {
    1600: {
      slidesPerView: 3,
    },
    1100: {
      slidesPerView: 2,
    },    
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-recommended',
    prevEl: '.channel-button-prev-recommended',
  },

});

const swiper3 = new Swiper('.channel-slider-fd', {
  // Optional parameters  
  loop: true,  
  spaceBetween: 20,
  slidesPerView: 1,

  breakpoints: {
    1980: {
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 5,
    },
    1300: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 3,
    },
    800: {
      slidesPerView: 2,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-fd',
    prevEl: '.channel-button-prev-fd',
  },

});

const searchBtn = document.querySelector('.mobile-search'); 
const mobileSearch = document.querySelector('.input-group');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open');
});

if (document.documentElement.scrollWidth <= 640) {
  swiper.destroy();
  swiper2.destroy();
  swiper3.destroy();
}