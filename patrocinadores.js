let currentIndex = 0;
const intervaloSlides = 2000; // Tempo em milissegundos para a transição automática
const slides = document.querySelectorAll('.novo-carrossel-slide img');
const totalSlides = slides.length;

function moverSlide(direcao) {
    currentIndex = (currentIndex + direcao + totalSlides) % totalSlides;
    atualizarSlide();
}

function atualizarSlide() {
    const novoTransform = -currentIndex * 100;
    document.querySelector('.novo-carrossel-slide').style.transform = `translateX(${novoTransform}%)`;
}

function iniciarCarrossel() {
    setInterval(() => {
        moverSlide(1);
    }, intervaloSlides);
}

// Inicia o carrossel automático ao carregar a página
document.addEventListener('DOMContentLoaded', iniciarCarrossel);
