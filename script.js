document.addEventListener("DOMContentLoaded", function () {
    // Código para animações e interações das opções
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.style.animationDelay = `${index * 0.1}s`;
    });

    // Código do carrossel de banners
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    const totalSlides = slides.length;

    // Função para mostrar o slide atual e esconder os outros
    function updateCarousel() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    const slideInterval = setInterval(nextSlide, 5000);

    // Controles de navegação do carrossel
    document.querySelector('.next-slide').addEventListener('click', () => {
        clearInterval(slideInterval); // Parar o autoplay ao clicar
        nextSlide();
    });

    document.querySelector('.prev-slide').addEventListener('click', () => {
        clearInterval(slideInterval); // Parar o autoplay ao clicar
        prevSlide();
    });

    // Inicia o carrossel mostrando o primeiro slide
    updateCarousel();

    // Código do menu
    const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.getElementById('sidebar');
    const closeIcon = document.getElementById('closeIcon');

    menuIcon.addEventListener('click', () => {
        sidebar.style.left = '0'; // Abre o menu
        menuIcon.style.display = 'none'; // Oculta o ícone de menu
    });

    closeIcon.addEventListener('click', () => {
        sidebar.style.left = '-250px'; // Fecha o menu
        menuIcon.style.display = 'block'; // Mostra o ícone de menu novamente
    });
});
