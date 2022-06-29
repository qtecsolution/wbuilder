// PRODUCT-DETAILS PRODUCT SLIDER

// GALLERY-THUMBNAIL
const galleryTop = new Swiper('.gallery-top', {
  loop: true,
  autoplay: true,
  centeredSlides: true,
  loop: true,
  loopedSlides: 6
});

// GALLERY-NAVIGATIONS
const galleryThumbs = new Swiper('.gallery-thumbs', {
  loop: true,
  slideToClickedSlide: true,
  loopedSlides: 6,
  centeredSlides: true,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 3
    },
    575: {
      slidesPerView: 4
    },
    992: {
      slidesPerView: 5
    }
  }
});

// ALTERNATIVE SOLUTION to get the active thumb centered, it doesn't work on Safari if sliding backwards
galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;