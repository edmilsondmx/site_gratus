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
  
function aceitarCookies() {
  document.cookie = "cookiesAceitos=true; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
  localStorage.setItem("cookiesAceitos", "true");
  document.getElementById("cookie-banner").classList.add("hidden");
}

function rejeitarCookies() {
  document.cookie = "cookiesAceitos=false; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
  localStorage.setItem("cookiesAceitos", "false");
  document.getElementById("cookie-banner").classList.add("hidden");
}

function verificarConsentimento() {
  const consentido = localStorage.getItem("cookiesAceitos");
  if (consentido === "true" || consentido === "false") {
      document.getElementById("cookie-banner").classList.add("hidden");
  }
}

window.onload = verificarConsentimento;

function filterProducts() {
    const checkbox = document.getElementById("productFilter");
    const category = checkbox.checked ? "pecas" : "insumos";
    const boxes = document.querySelectorAll(".box-products");

    boxes.forEach(box => {
        box.style.display = box.dataset.category === category ? "block" : "none";
    });
}
document.addEventListener("DOMContentLoaded", filterProducts);



function startCarousel(carouselId) {
  const carousel = document.getElementById(carouselId);
  const images = carousel.querySelectorAll('.carousel-image');
  let currentIndex = 0;

  function changeImage() {
    images.forEach((img, index) => {
      img.classList.remove('active');
      if (index === currentIndex) {
        img.classList.add('active');
      }
    });
    
    currentIndex = (currentIndex + 1) % images.length;
  }

  setInterval(changeImage, 3000); // Troca de imagem a cada 3 segundos
  changeImage(); // Inicializa a primeira imagem
}

// Iniciar os carrosséis, um por vez
startCarousel('carousel1'); // Carrossel 1 começa imediatamente
setTimeout(() => startCarousel('carousel2'), 500); // Carrossel 2 começa após 500ms
setTimeout(() => startCarousel('carousel3'), 1000); // Carrossel 3 começa após 1000ms
setTimeout(() => startCarousel('carousel4'), 1500); // Carrossel 3 começa após 1000ms

function toggleBanner(bannerId, show) {
  const overlay = document.getElementById('overlay');
  const banner = document.getElementById(bannerId);

  if (show) {
    overlay.style.display = 'block';
    banner.style.display = 'block';
  } else {
    overlay.style.display = 'none';
    banner.style.display = 'none';
  }
}

document.getElementById('moreInfo').addEventListener('click', function () {
  toggleBanner('banner', true);
});

document.getElementById('fecharBtn').addEventListener('click', function () {
  toggleBanner('banner', false);
});

document.getElementById('moreInfo2').addEventListener('click', function () {
  toggleBanner('banner2', true);
});

document.getElementById('fecharBtn2').addEventListener('click', function () {
  toggleBanner('banner2', false);
});

document.getElementById('overlay').addEventListener('click', function() {
  toggleBanner('banner', false);
  toggleBanner('banner2', false);
});
