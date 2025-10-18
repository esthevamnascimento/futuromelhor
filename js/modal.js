/* ==========================================================================
   MODAL.JS (VERSÃO COM EVENT DELEGATION PARA FECHAR)
   - Handles the OPENING of the FEEDBACK modal (if needed).
   - Handles the CLOSING of ALL modals using event delegation.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
    
    // --- [OPCIONAL] Lógica para ABRIR o FEEDBACK modal (se ainda usar .open-modal-btn) ---
    // Se você removeu todos os botões que abriam o feedback modal diretamente, pode apagar este bloco.
    const openFeedbackModalButtons = document.querySelectorAll('.open-modal-btn'); 
    const feedbackModalOverlay = document.getElementById('feedback-modal');
    
    if (feedbackModalOverlay && openFeedbackModalButtons.length > 0) {
        const openFeedbackModal = () => {
            feedbackModalOverlay.classList.add('active');
        };

        openFeedbackModalButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault(); 
                openFeedbackModal();
            });
        });
        console.log("[Modal.js] Listener para abrir #feedback-modal configurado.");
    } else if (!feedbackModalOverlay) {
         console.warn("[Modal.js] Aviso: Modal #feedback-modal não encontrado no DOM.");
    }


    // --- Lógica UNIFICADA para FECHAR QUALQUER modal ---
    
    /**
     * Função auxiliar para fechar um modal específico.
     * @param {Element} modal O elemento do modal overlay a ser fechado.
     */
    const closeModal = (modal) => {
        if (modal && modal.classList.contains('modal-overlay')) { // Garante que é um overlay
            modal.classList.remove('active');
            console.log(`[Modal.js] Modal fechado: #${modal.id}`); 
        } else {
            console.warn("[Modal.js] Tentativa de fechar algo que não é um modal overlay:", modal);
        }
    };

    // Adiciona UM listener ao documento inteiro para capturar cliques.
    document.addEventListener('click', function(event) {
        
        // Verifica se o elemento clicado (event.target) ou um de seus pais 
        // tem a classe 'close-modal-btn'
        const closeButton = event.target.closest('.close-modal-btn');
        if (closeButton) {
             console.log("[Modal.js] Botão .close-modal-btn clicado."); 
            // Encontra o modal pai mais próximo do botão clicado
            const modalToClose = event.target.closest('.modal-overlay');
            closeModal(modalToClose);
            return; // Impede que o clique no botão também feche pelo overlay
        }
        
        // Verifica se o clique foi DIRETAMENTE no fundo escuro (overlay)
        if (event.target.classList.contains('modal-overlay')) { 
             console.log("[Modal.js] Clique no overlay detectado."); 
            closeModal(event.target); // Fecha o overlay que foi clicado
        }
    });

    console.log("[Modal.js] Listener de fechamento global (delegação) configurado.");
});