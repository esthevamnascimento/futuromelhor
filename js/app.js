/* ==========================================================================
   APP.JS (TESTE FINAL - VERIFICANDO HASHCHANGE)
   ========================================================================== */
console.log("!!! app.js FOI CARREGADO !!!"); 

import { renderPage } from './router.js'; 

function initApp() {
    console.log("--- initApp CHAMADO ---"); 
    
    // Ouve a mudança de hash (link clicado)
    window.addEventListener('hashchange', (event) => { // Adicionamos 'event'
        // LOG NOVO: Mostra a URL antiga e a nova URL
        console.warn(`HASH MUDOU! URL antiga: ${event.oldURL}, URL nova: ${event.newURL}`); 
        console.log("--- hashchange DETECTADO --- Chamando renderPage..."); 
        renderPage(); // CHAMA a função importada
    });

    // Ouve o carregamento inicial da página
    window.addEventListener('DOMContentLoaded', () => {
        console.log("--- DOMContentLoaded DETECTADO --- Chamando renderPage..."); 
        renderPage(); // CHAMA a função importada
    });
}

// Inicia a aplicação!
initApp();