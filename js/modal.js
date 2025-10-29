/* ==========================================================================
   MODAL.JS (VERSÃO ATUALIZADA COM ACESSIBILIDADE - FOCO E ESC)
   ========================================================================== */

// Variáveis globais para gerenciar o foco
let previouslyFocusedElement = null;

/**
 * Função auxiliar para fechar um modal específico.
 * @param {Element} modalOverlay O elemento do modal overlay a ser fechado.
 */
const closeModal = (modalOverlay) => {
    if (!modalOverlay || !modalOverlay.classList.contains('active')) return;

    modalOverlay.classList.remove('active');
    console.log(`[Modal.js] Modal fechado: #${modalOverlay.id}`);

    // Devolve o foco para o elemento que abriu o modal
    if (previouslyFocusedElement) {
        previouslyFocusedElement.focus();
        previouslyFocusedElement = null;
    }
};

/**
 * Função auxiliar para abrir um modal específico (ex: feedback).
 * @param {Element} modalOverlay O elemento do modal overlay a ser aberto.
 */
const openModal = (modalOverlay) => {
    if (!modalOverlay) return;

    // Salva o elemento que está focado ANTES de abrir o modal
    previouslyFocusedElement = document.activeElement;

    modalOverlay.classList.add('active');
    console.log(`[Modal.js] Modal aberto: #${modalOverlay.id}`);

    // Foca no primeiro elemento focável dentro do modal (o botão de fechar)
    modalOverlay.querySelector('.close-modal-btn')?.focus();
};

/**
 * Prende o foco (Tab) dentro do elemento modal.
 * @param {KeyboardEvent} event O evento de teclado.
 * @param {Element} modal O elemento do modal.
 */
const trapFocus = (event, modal) => {
    if (event.key !== 'Tab') return;

    const focusableElements = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) { // Shift + Tab
        if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
        }
    } else { // Tab
        if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
        }
    }
};


document.addEventListener('DOMContentLoaded', () => {
    console.log("[Modal.js] Configurando listeners de acessibilidade.");

    // Listener global de clique (Event Delegation) para FECHAR
    document.body.addEventListener('click', (event) => {
        const closeButton = event.target.closest('.close-modal-btn');
        if (closeButton) {
            const modalToClose = event.target.closest('.modal-overlay');
            closeModal(modalToClose);
            return;
        }
        if (event.target.classList.contains('modal-overlay')) {
            closeModal(event.target);
        }
    });

    // Listener global de teclado (KeyDown) para FECHAR com Escape e PRENDER Foco
    document.addEventListener('keydown', (event) => {
        // Encontra o modal ATIVO
        const activeModal = document.querySelector('.modal-overlay.active');
        if (!activeModal) return; // Nenhum modal ativo

        // Fecha com Escape
        if (event.key === 'Escape') {
            closeModal(activeModal);
        }

        // Prende o foco
        trapFocus(event, activeModal);
    });

    // Lógica de ABERTURA (Ex: feedback modal, se ainda existir)
    const openFeedbackModalButtons = document.querySelectorAll('.open-modal-btn');
    const feedbackModalOverlay = document.getElementById('feedback-modal');

    if (feedbackModalOverlay && openFeedbackModalButtons.length > 0) {
        openFeedbackModalButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                openModal(feedbackModalOverlay);
            });
        });
    }
});

// Precisamos exportar 'openModal' para que nossos outros scripts (donationForm) possam usá-la
// Para isso, este arquivo NÃO PODE mais ser um script simples.
// Mas mudar isso agora pode quebrar o projeto.
// Vamos fazer um "truque": colocar a função 'openModal' no objeto window.

// Perto do topo do arquivo (fora do DOMContentLoaded):
window.openGlobalModal = (modalId) => {
    const modalOverlay = document.getElementById(modalId);
    if (modalOverlay) {
         // Salva o elemento focado
         previouslyFocusedElement = document.activeElement;
         modalOverlay.classList.add('active');
         console.log(`[Modal.js] Modal aberto via global: #${modalOverlay.id}`);
         modalOverlay.querySelector('.close-modal-btn')?.focus();
    }
};