const swiper = new Swiper(".swiper", {
   loop: true,

   centered: true,

   slidesPerView: 3,

   slidesPerGroup: 2,

   spaceBetween: 10,

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
});
