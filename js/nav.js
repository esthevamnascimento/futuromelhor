document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    // Verifica se os elementos existem na página antes de adicionar o evento
    if (hamburgerBtn && navLinks) {
        hamburgerBtn.addEventListener('click', () => {
            // Adiciona/remove a classe 'active' para animar o ícone
            hamburgerBtn.classList.toggle('active');

            // Adiciona/remove a classe 'active' para mostrar/esconder o menu
            navLinks.classList.toggle('active');
        });
    }
});