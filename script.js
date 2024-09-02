document.addEventListener("DOMContentLoaded", function () {
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.style.animationDelay = `${index * 0.1}s`;
    });

    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    let currentSlide = 0;
    const totalSlides = slides.length;

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

    document.querySelector('.next-slide').addEventListener('click', () => {
        clearInterval(slideInterval);
        nextSlide();
    });

    document.querySelector('.prev-slide').addEventListener('click', () => {
        clearInterval(slideInterval);
        prevSlide();
    });

    updateCarousel();

    const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.getElementById('sidebar');
    const closeIcon = document.getElementById('closeIcon');

    menuIcon.addEventListener('click', () => {
        sidebar.style.left = '0'; 
        menuIcon.style.display = 'none'; 
    });

    closeIcon.addEventListener('click', () => {
        sidebar.style.left = '-250px'; 
        menuIcon.style.display = 'block'; 
    });
});
