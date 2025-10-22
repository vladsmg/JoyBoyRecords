const carouselInner = document.querySelector('.carousel-inner');
const images = document.querySelectorAll('.carousel-inner img');
let current = 0;

function showImage(index) {
  const width = images[0].clientWidth;
  carouselInner.style.transform = `translateX(-${width * index}px)`;
}

document.querySelector('.next').addEventListener('click', () => {
  current = (current + 1) % images.length;
  showImage(current);
});

document.querySelector('.prev').addEventListener('click', () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});

// Cambio automático cada 3 segundos
setInterval(() => {
  current = (current + 1) % images.length;
  showImage(current);
}, 5000);