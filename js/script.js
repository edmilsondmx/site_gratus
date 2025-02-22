let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

/* image slider */

var swiper = new Swiper(".image-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 0,
    coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 300,
        modifier: 1.5,
        slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 500000,
        disableOnInteraction: false,
  },
});

var swiper = new Swiper(".products-slider", {
    grabCursor: true,
    centeredSlides: true,  
    spaceBetween: 0,
    loop:true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });