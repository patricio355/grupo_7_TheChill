const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselContent = document.querySelector('.carousel-content');

let currentIndex = 0;
const cardWidth = 220; // Ancho de cada tarjeta, incluyendo el margen

nextBtn.addEventListener('click', () => {
    if (currentIndex < carouselContent.children.length - 5) {
        currentIndex++;
        updateCarousel();
    }
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = -currentIndex * cardWidth;
    carouselContent.style.transform = `translateX(${offset}px)`;
}