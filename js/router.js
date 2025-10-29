/* ==========================================================================
   ROUTER.JS (VERSÃO FINAL ATUALIZADA COM LÓGICA DE DOAÇÃO)
   - Decide qual template carregar e renderiza no #app-root.
   - Chama scripts de inicialização pós-renderização.
   ========================================================================== */
   
// 1. Importa os templates das páginas
import { homeTemplate, projectsTemplate, contactTemplate, donationTemplate } from './templates.js';

// 2. Importa os inicializadores de scripts específicos das páginas
import { initializeFormValidation } from './formValidator.js';
import { initProjectModal } from './projectmodal.js';
import { initializeDonationForm } from './donationform.js'; // <-- NOVO: Importa a lógica de doação

// 3. Define o elemento principal onde o conteúdo será renderizado
const appRoot = document.getElementById('app-root');

// 4. Mapeamento das rotas para as funções de template correspondentes
const routes = {
    '/': homeTemplate,
    '/projetos': projectsTemplate,
    '/cadastro': contactTemplate,
    '/doacao': donationTemplate
};

/**
 * Função principal de renderização da SPA.
 */
export const renderPage = () => {
    console.log("[Router] renderPage INICIOU");
    const path = window.location.hash.slice(1).split('?')[0] || '/'; // Ignora parâmetros query ao buscar rota
    console.log(`[Router] Path detectado (sem query): ${path}`);

    // Encontra a função template correspondente ou usa a home como padrão
    const templateFunction = routes[path] || routes['/'];

    // Valida se a rota encontrada é realmente uma função
    if (typeof templateFunction !== 'function') {
        console.error(`[Router] ERRO: Rota encontrada (${path}), mas não é uma função!`);
        appRoot.innerHTML = `<p style="color:red;">Erro: Rota inválida.</p>`;
        return;
    }
    console.log(`[Router] Função template selecionada: ${templateFunction.name}`);

    // Tenta gerar o HTML e injetá-lo no DOM
    try {
        const htmlContent = templateFunction();
        appRoot.innerHTML = htmlContent;
        console.log("[Router] innerHTML definido com sucesso.");
    } catch (error) {
        console.error(`[Router] ERRO ao renderizar ${path}:`, error);
        appRoot.innerHTML = `<p style="color:red;">Erro ao renderizar template.</p>`;
        return; // Interrompe se a renderização falhar
    }

    // Chama scripts específicos da página APÓS a renderização, usando setTimeout
    if (path === '/cadastro' || path === '/doacao') {
        console.log(`[Router] Agendando initFormScripts para ${path}...`);
        setTimeout(initFormScripts, 0); // Inicializa validação e máscaras de formulários
    } else if (path === '/projetos') {
        console.log("[Router] Agendando initProjectModal para /projetos...");
        setTimeout(initProjectModal, 0); // Inicializa os botões "Saiba Mais"
    }

    console.log("[Router] renderPage FINALIZOU");

    // Foco para acessibilidade
const mainContent = document.getElementById('app-root');
if(mainContent) {
    mainContent.focus(); 
}
console.log("[Router] Foco movido para #app-root.");
};

/**
 * Inicializa scripts necessários para os formulários (validação e máscaras).
 */
function initFormScripts() {
    console.log(">>> initFormScripts INICIOU <<<");

    const contactForm = document.getElementById('main-contact-form');
    const donationForm = document.getElementById('donation-form');

    if (contactForm) {
        console.log("[Router] Inicializando validação para #main-contact-form...");
        initializeFormValidation();
    }
    // ATUALIZADO: Chama a nova função para o formulário de doação
    if (donationForm) {
        console.log("[Router] Inicializando lógica para #donation-form...");
        initializeDonationForm(); 
    }

    applyMasks(); // Aplica máscaras a todos os campos relevantes

    console.log(">>> initFormScripts FINALIZOU <<<");
}

/**
 * Função auxiliar para aplicar máscaras IMask nos campos de formulário.
 */
function applyMasks() {
    const fieldsToMask = [
        { id: 'cpf', mask: '000.000.000-00' },
        { id: 'phone', mask: '(00) 00000-0000' },
        { id: 'cep', mask: '00000-000' },
        { id: 'card-number', mask: '0000 0000 0000 0000' },
        { id: 'expiry-date', mask: '00/00' },
        { id: 'cvv', mask: '000[0]' }
    ];

    fieldsToMask.forEach(field => {
        const element = document.getElementById(field.id);
        if (element) {
            // console.log(`[Router] Aplicando máscara para #${field.id}`); // Log opcional
            IMask(element, { mask: field.mask });
        }
    });
}