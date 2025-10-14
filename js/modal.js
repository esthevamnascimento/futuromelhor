document.addEventListener('DOMContentLoaded', function () {
    const openModalButtons = document.querySelectorAll('.open-modal-btn');
    const modalOverlay = document.getElementById('feedback-modal');
    
    // Verifica se o modal existe na página
    if (!modalOverlay) return;

    const closeModalButtons = modalOverlay.querySelectorAll('.close-modal-btn');

    // Função para abrir o modal
    const openModal = () => {
        modalOverlay.classList.add('active');
    };

    // Função para fechar o modal
    const closeModal = () => {
        modalOverlay.classList.remove('active');
    };

    // Adiciona evento de clique aos botões que abrem o modal
    openModalButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault(); // Impede que o link '#' mude a URL
            openModal();
        });
    });

    // Adiciona evento de clique aos botões que fecham o modal
    closeModalButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Fecha o modal ao clicar no fundo (overlay)
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
});