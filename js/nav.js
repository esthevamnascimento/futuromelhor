document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    if (!hamburgerBtn || !navLinks) {
        console.error("Elementos de navegação (botão ou links) não encontrados.");
        return;
    }

    const toggleMenu = () => {
        const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
        hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
        navLinks.setAttribute('aria-hidden', isExpanded);
        document.body.classList.toggle('no-scroll');

        // Foca no primeiro link quando o menu abre
        if (!isExpanded) {
            navLinks.querySelector('a')?.focus();
        }
    };

    hamburgerBtn.addEventListener('click', toggleMenu);

    // Fecha o menu se clicar em um link (para SPAs)
    navLinks.addEventListener('click', (event) => {
        if (event.target.tagName === 'A' && document.body.classList.contains('no-scroll')) {
            toggleMenu();
        }
    });

    // Fecha o menu ao pressionar Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && document.body.classList.contains('no-scroll')) {
            toggleMenu();
        }
    });
});