# Futuro Melhor - Plataforma (Frontend SPA)

![Badge de Status](https://img.shields.io/badge/status-Entrega%20III%20Conclu%C3%ADda-brightgreen)
![Badge da Licença](https://img.shields.io/badge/license-MIT-blue)

Projeto frontend para uma plataforma web de uma ONG fictícia, desenvolvido como parte de um trabalho acadêmico. O projeto evoluiu de um site estático multi-páginas para uma **Single Page Application (SPA)** dinâmica e interativa, construída com JavaScript puro (ES6+), HTML5 semântico e CSS3 moderno.

---

### 🖼️ Prévia do Projeto

**Fase inicial**

*Fase inicial*
![Prévia do Projeto 1](/imagens/previa.jpg)
**Fase sem as aplicações**
![Prévia do Projeto 2](/imagens/previa2.jpg)
**Fase Atual**
![Prévia do Projeto 3](/imagens/previa3.mp4)

## ✨ Arquitetura e Funcionalidades

### Arquitetura SPA (Single Page Application)
-   **Roteamento via Hash:** A aplicação utiliza o hash (`#`) da URL para navegar entre diferentes "páginas" sem recarregar o site.
-   **Renderização Dinâmica:** O conteúdo principal é carregado e substituído dinamicamente no DOM usando JavaScript.
-   **JavaScript Modular:** O código JS é organizado em módulos (`app.js`, `router.js`, `templates.js`, `data.js`, `formValidator.js`, `projectModal.js`, `donationForm.js`) que se comunicam via `import`/`export`.

### Páginas e Templates
-   **Início (`#/`):** Página principal com seção Hero e chamadas para ação.
-   **Projetos (`#/projetos`):** Galeria de projetos apresentados em cards responsivos.
-   **Cadastro (`#/cadastro`):** Formulário completo para cadastro de voluntários/apoiadores.
-   **Doação (`#/doacao`):** Formulário dedicado para doações online.

### Componentes Interativos
-   **Navegação Responsiva:** Cabeçalho fixo com menu dropdown no desktop e menu hambúrguer funcional no mobile.
-   **Modal de Detalhes do Projeto:**
    -   Abre ao clicar no botão "Saiba Mais" na página de projetos.
    -   Abre automaticamente ao navegar para uma URL específica (ex: `/#/projetos?open=educacao`) vinda do menu dropdown.
    -   Conteúdo (título, descrição) carregado dinamicamente a partir de dados simulados (`data.js`).
-   **Modal de Feedback:** Exibido após o envio bem-sucedido dos formulários de cadastro e doação.
-   **Formulários Avançados:**
    -   **Validação de Consistência (JS):** Validação em tempo real para campos como nome (sem números), CPF (algoritmo), e-mail, etc., com mensagens de erro claras. O feedback visual (verde/vermelho) é controlado pelo JavaScript.
    -   **Máscaras de Input (IMask.js):** Guiam o usuário no preenchimento correto de CPF, telefone, CEP, cartão de crédito, etc.
-   **Efeito de Confetes:** Feedback visual comemorativo (`canvas-confetti`) ao enviar o formulário de doação com sucesso.
-   **Badges/Tags:** Usadas nos cards de projeto para categorização visual.
-   **Botões:** Com todos os estados visuais (`:hover`, `:focus`, `:active`, `[disabled]`).

### Design e Layout
-   **Design System:** Baseado em variáveis CSS (`:root`) para cores, tipografia e espaçamento.
-   **Layout Responsivo:** Construído com CSS Grid (sistema de 12 colunas customizado) e Flexbox, garantindo adaptação a diferentes tamanhos de tela (5 breakpoints definidos).

---

## Tecnologias Utilizadas

-   **HTML5:** Estrutura semântica do shell da aplicação.
-   **CSS3:** Estilização completa, Design System, Grid Layout, Flexbox, Media Queries, Animações básicas.
-   **JavaScript (ES6+ Módulos):**
    -   Manipulação do DOM para renderização dinâmica (SPA).
    -   Gerenciamento de eventos (navegação, modais, formulários).
    -   Sistema de Roteamento (hash-based).
    -   Sistema de Templates (template literals).
    -   Validação de formulários avançada.
-   **Bibliotecas Externas:**
    -   **[IMask.js](https://imask.js.org/):** Para máscaras de input.
    -   **[canvas-confetti](https://github.com/catdad/canvas-confetti):** Para o efeito de confetes.

---

##  Requisitos Acadêmicos Atendidos

### Entrega I – Estrutura e Fundamentos
-   [x] Estrutura HTML5 Semântica (adaptada para SPA shell).
-   [x] Formulário complexo com validação nativa e máscaras.
-   [x] Código fonte organizado e validado.

### Entrega II – Estilização e Leiautes
-   [x] Sistema de Design completo com variáveis CSS.
-   [x] Leiautes Responsivos com Flexbox, Grid (12 colunas) e 5 breakpoints.
-   [x] Navegação Sofisticada (Dropdown e Hambúrguer).
-   [x] Componentes de Interface (Cards, Botões com estados, Validação Visual CSS - *refatorada* -, Modal, Badges/Tags).

### Entrega III – JavaScript Avançado e SPA
-   [x] **Manipulação do DOM:** Implementado sistema de SPA básico com renderização dinâmica no `#app-root`.
-   [x] **Sistema de Templates JavaScript:** Conteúdo das páginas gerado por funções em `templates.js`.
-   [x] **Funcionalidade Específica:** Implementado sistema de verificação de consistência de dados em formulários (`formValidator.js`) com aviso ao usuário.
-   [x] **Código JavaScript Modular:** Estrutura organizada em múltiplos arquivos `.js` com `import`/`export`.

---

## 🏁 Como Executar o Projeto

Como este é um projeto de frontend estático (SPA sem backend real), a execução é simples:

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/esthevamnascimento/futuromelhor.git](https://github.com/esthevamnascimento/futuromelhor.git) 
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd futuromelhor
    ```
3.  Abra o arquivo `index.html` no seu navegador de preferência.
    * **Recomendado:** Use um servidor local simples (como a extensão "Live Server" do VS Code) para evitar possíveis problemas com Módulos JavaScript (`type="module"`) sendo carregados diretamente do sistema de arquivos (`file:///`).

---

## 👨‍💻 Autor

Desenvolvido por **Esthevam Nascimento**.

---

## 📝 Licença

Este projeto está sob a licença MIT.