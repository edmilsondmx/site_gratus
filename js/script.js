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
        delay: 8000,
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
setTimeout(() => startCarousel('carousel2'), 200); // Carrossel 2 começa após 500ms
setTimeout(() => startCarousel('carousel3'), 400); // Carrossel 3 começa após 1000ms
setTimeout(() => startCarousel('carousel4'), 600); // Carrossel 3 começa após 1000ms
setTimeout(() => startCarousel('carousel5'), 800); // Carrossel 3 começa após 1000ms
setTimeout(() => startCarousel('carousel6'), 1000); // Carrossel 3 começa após 1000ms

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


// Paginação de venda e locação:
document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product-section");
  const prevButton = document.getElementById("prevPage");
  const nextButton = document.getElementById("nextPage");
  const pageIndicator = document.getElementById("pageIndicator");

  let currentPage = 1;
  const productsPerPage = 3;
  const totalPages = Math.ceil(products.length / productsPerPage);

  function updatePagination() {
    // Esconde todos os produtos
    products.forEach((product) => product.classList.remove("active"));

    // Mostra apenas os produtos da página atual
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    for (let i = startIndex; i < endIndex && i < products.length; i++) {
      products[i].classList.add("active");
    }

    // Atualiza indicador de página
    pageIndicator.textContent = `${currentPage} / ${totalPages}`;

    // Desabilita botões quando necessário
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;

    // Rolar para o topo da seção
    document.getElementById("services").scrollIntoView({ behavior: "smooth" });
  }

  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      updatePagination();
    }
  });

  nextButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      updatePagination();
    }
  });

  // Inicializa a paginação
  updatePagination();
});
