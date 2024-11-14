document.querySelector(".menu-btn").addEventListener("click", () => {
    const menu = document.querySelector(".menu-list");
    menu.classList.toggle("open");
  });

  let currentIndex = 0;
  const imagens = document.querySelector('.imagens');
  const totalImagens = document.querySelectorAll('.imagem').length;
  
  function mostrarProximaImagem() {
      currentIndex = (currentIndex + 1) % totalImagens;
      const offset = -currentIndex * 100;
      imagens.style.transform = `translateX(${offset}%)`;
  }
  
  setInterval(mostrarProximaImagem, 3000); // Muda a imagem a cada 3 segundos

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector('.search-input');

    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            const query = searchInput.value;
            console.log('Você digitou:', query);
            // Aqui você pode adicionar código para fazer algo com a consulta, como:
            window.location.href = `busca.html?q=${encodeURIComponent(query)}`;
        }
    });
});