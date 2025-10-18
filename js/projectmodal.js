/* ==========================================================================
   PROJECTMODAL.JS (ATUALIZADO PARA ABRIR VIA URL)
   - Lógica para abrir o modal de detalhes do projeto e popular com dados.
   - Ouve cliques nos botões .open-project-modal.
   - Verifica a URL na inicialização para abrir modal via link do dropdown.
   ========================================================================== */

import { getProjectById } from './data.js'; // Certifique-se que data.js existe

// Elementos do DOM que vamos reutilizar
let projectModalOverlay = null;
let modalTitleElement = null;
let modalBodyElement = null;

/**
 * Função para abrir e popular o modal com dados de um projeto específico.
 * @param {string} projectId O ID do projeto a ser exibido.
 */
function openProjectModal(projectId) {
    console.log(`[ProjectModal] Tentando abrir modal para ID: ${projectId}`);

    // Garante que os elementos do modal foram encontrados
    if (!projectModalOverlay || !modalTitleElement || !modalBodyElement) {
        console.error("[ProjectModal] Erro: Elementos do modal não encontrados no DOM ao tentar abrir.");
        return; 
    }

    const projectData = getProjectById(projectId); // Busca os dados

    if (projectData) {
        modalTitleElement.textContent = projectData.title; // Popula título
        modalBodyElement.innerHTML = projectData.fullDescription; // Popula corpo
        projectModalOverlay.classList.add('active'); // Abre o modal
        console.log("[ProjectModal] Modal populado e aberto via openProjectModal.");
    } else {
        console.error(`[ProjectModal] Erro: Dados não encontrados para ID ${projectId} ao tentar abrir.`);
        // Mostra um erro genérico no modal
        modalTitleElement.textContent = "Erro";
        modalBodyElement.innerHTML = "<p>Desculpe, detalhes indisponíveis.</p>";
        projectModalOverlay.classList.add('active');
    }
}

/**
 * Função principal exportada, chamada pelo Roteador quando a página /projetos carrega.
 */
export function initProjectModal() {
    console.log(">>> initProjectModal INICIOU <<<");

    // Encontra os elementos do modal uma vez
    projectModalOverlay = document.getElementById('project-detail-modal');
    modalTitleElement = document.getElementById('modal-project-title');
    modalBodyElement = document.getElementById('modal-project-body');

    // Verifica se o modal principal existe
    if (!projectModalOverlay) {
        console.error("[ProjectModal] Erro Fatal: Modal #project-detail-modal não encontrado no DOM!");
        return; // Sai se não puder operar
    }

    // --- Lógica para abrir via clique nos botões "Saiba Mais" ---
    const openButtons = document.querySelectorAll('.open-project-modal');
    console.log(`[ProjectModal] Botões .open-project-modal encontrados: ${openButtons.length}`);

    // Limpa listeners antigos (importante para SPAs)
    openButtons.forEach(button => {
        button.replaceWith(button.cloneNode(true)); 
    });

    // Adiciona listeners aos botões clonados
    document.querySelectorAll('.open-project-modal').forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.dataset.projectId; 
            openProjectModal(projectId); // Chama a função para abrir o modal
        });
    });

    // --- NOVA LÓGICA: Verificar a URL para abrir modal via link ---
    const currentHash = window.location.hash; // Pega o hash atual (ex: #/projetos?open=educacao)
    console.log(`[ProjectModal] Verificando hash: ${currentHash}`);

    if (currentHash.includes('?open=')) {
        const urlParams = new URLSearchParams(currentHash.split('?')[1]); // Pega os parâmetros depois do '?'
        const projectIdToOpen = urlParams.get('open'); // Pega o valor do parâmetro 'open'
        
        if (projectIdToOpen) {
            console.log(`[ProjectModal] Parâmetro 'open' encontrado na URL: ${projectIdToOpen}. Abrindo modal...`);
            // Pequeno delay para garantir que a UI esteja pronta
            setTimeout(() => openProjectModal(projectIdToOpen), 100); 
            
            // Opcional: Limpar o parâmetro da URL após abrir o modal para evitar reabrir ao atualizar
            // history.replaceState(null, '', '#/projetos'); 
        }
    }

    console.log(">>> initProjectModal FINALIZOU <<<");
}