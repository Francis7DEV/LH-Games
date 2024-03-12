const swiper = new Swiper(".swiper", {
   loop: true,

   centered: true,

   pagination: {
      el: ".swiper-pagination",
   },

   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },

   autoplay: {
      delay: 3000,
   },

   breakpoints: {
      600: {
         slidesPerView: 2,
         slidesPerGroup: 2,
         spaceBetween: 10,
      },

      900: {
         slidesPerView: 3,

         slidesPerGroup: 2,

         spaceBetween: 10,
      },
   },
});
