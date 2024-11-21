function inicializarCarrossel(carrosselId) {
    let currentIndex = 0;
    const carrossel = document.querySelector(`#${carrosselId}`);
    const slides = carrossel.querySelectorAll(".slide");
    const totalSlides = slides.length;

    // Função para mostrar o próximo slide
    function mostrarProximoSlide() {
        // Esconde o slide atual
        slides[currentIndex].style.display = "none";

        // Avança para o próximo slide
        currentIndex = (currentIndex + 1) % totalSlides;

        // Mostra o próximo slide
        slides[currentIndex].style.display = "block";
    }

    // Inicializa o carrossel: mostra apenas o primeiro slide
    slides.forEach((slide, index) => {
        slide.style.display = index === 0 ? "block" : "none";
    });

    // Troca de slides a cada 3 segundos
    setInterval(mostrarProximoSlide, 3000);
}

// Inicializar cada carrossel separadamente
inicializarCarrossel("carrossel1");
inicializarCarrossel("carrossel2");
