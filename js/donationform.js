/* ==========================================================================
   DONATIONFORM.JS
   - Lógica específica para o formulário de doação.
   - Validação básica e efeito de confetes no envio.
   ========================================================================== */

// Função exportada que o Roteador irá chamar
export function initializeDonationForm() {
    console.log("[DonationForm] Inicializando..."); // Debug
    const form = document.getElementById('donation-form');
    const feedbackModal = document.getElementById('feedback-modal'); // Pega o modal de feedback

    if (!form) {
        console.warn("[DonationForm] Formulário #donation-form não encontrado nesta página.");
        return; // Sai se o formulário não existir
    }
     if (!feedbackModal) {
        console.warn("[DonationForm] Modal #feedback-modal não encontrado.");
        // Continua mesmo sem modal, mas avisa
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio padrão que recarrega a página
        console.log("[DonationForm] Submit detectado."); // Debug

        // Validação básica usando a API do navegador
        // (Podemos adicionar validações mais complexas como no formValidator se necessário)
        let isValid = form.checkValidity(); 
        if (!isValid) {
            // Força a exibição das mensagens de erro padrão do navegador (se não estiver usando novalidate)
            // ou podemos adicionar classes .invalid manualmente como no outro form.
             console.log("[DonationForm] Formulário inválido (validação nativa).");
             form.reportValidity(); // Mostra popups de erro nativos
            return; 
        }

        // Se chegou aqui, o formulário é considerado válido (para este exemplo)
        console.log("[DonationForm] Formulário válido. Disparando confetes!");

        // --- EFEITO DE CONFETES ---
        // Dispara confetes do centro da tela
        confetti({
            particleCount: 150, // Mais confetes!
            spread: 90,        // Espalha mais
            origin: { y: 0.6 } // Começa um pouco abaixo do meio
        });

        // Opcional: Mostrar o modal de "Obrigado!"
        if (feedbackModal) {
            // Pequeno delay para dar tempo de ver os confetes antes do modal
            setTimeout(() => {
                window.openGlobalModal('feedback-modal');
            }, 300); // 300 milissegundos
        }

        // Opcional: Limpar o formulário após o envio bem-sucedido
         setTimeout(() => {
             form.reset(); // Limpa os campos
             // Remove classes de validação se você as adicionou
             form.querySelectorAll('.form-group').forEach(fg => fg.classList.remove('valid', 'invalid'));
         }, 500); 

        console.log("[DonationForm] Processo de submit concluído."); // Debug
    });
    console.log("[DonationForm] Listener de submit adicionado."); // Debug
}