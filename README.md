# Futuro Melhor - Plataforma para ONGs (Frontend)

![Badge de Status](https://img.shields.io/badge/status-em%20desenvolvimento-orange)
![Badge da Licença](https://img.shields.io/badge/license-MIT-blue)

Projeto de frontend para uma plataforma web de uma ONG fictícia, desenvolvido como parte de um trabalho acadêmico. O site foi construído do zero, aplicando as melhores práticas de HTML semântico, um sistema de design robusto com CSS moderno e interatividade avançada com JavaScript puro.

---

### 🖼️ Prévia do Projeto

*O projeto evoluiu muito! Lembre-se de tirar um novo screenshot da página inicial e atualizar o link abaixo.*

![Prévia do Projeto 1](/imagens/previa.jpg)
![Prévia do Projeto 2](/imagens/previa2.jpg)
---

## ✨ Funcionalidades e Componentes

### Navegação Responsiva e Interativa
-   **Cabeçalho Fixo (Sticky):** A navegação permanece no topo da tela durante a rolagem para fácil acesso.
-   **Efeito de Vidro (Glassmorphism):** Um fundo semitransparente com desfoque cria um efeito de profundidade moderno.
-   **Submenu Dropdown:** O menu de "Projetos" no desktop revela um submenu com links para projetos específicos ao passar o mouse.
-   **Menu Hambúrguer (Mobile):** Em telas menores, a navegação se transforma em um ícone de hambúrguer que, ao ser clicado, revela um menu lateral animado.

### Componentes de UI
-   **Botões com Estados Completos:** Botões com feedback visual claro para os estados `:hover` (passar o mouse), `:focus` (navegação com teclado), `:active` (clique) e `[disabled]` (desabilitado).
-   **Formulários com Validação Visual:** Campos do formulário fornecem feedback em tempo real, mudando a cor da borda para verde (válido) ou vermelho (inválido) usando apenas CSS, melhorando a experiência do usuário.
-   **Cards com Badges/Tags:** Os cards de projeto agora incluem tags coloridas para categorização visual rápida (ex: Educação, Saúde).
-   **Modal de Feedback:** Um componente modal (pop-up) interativo, acionado pelo botão "Doe Agora", para exibir mensagens de confirmação ou agradecimento ao usuário.

### Layout e Estrutura
-   **Sistema de Grid de 12 Colunas:** Foi implementado um sistema de grid responsivo customizado, permitindo a criação de layouts flexíveis e complexos que se adaptam a múltiplos tamanhos de tela.
-   **Design System com Variáveis CSS:** Todo o projeto é baseado em um sistema de design consistente, utilizando variáveis CSS (`:root`) para a paleta de cores, escala de tipografia e sistema de espaçamento, facilitando a manutenção e garantindo a consistência visual.

---

## 🚀 Tecnologias Utilizadas

-   **HTML5:** Estrutura semântica para melhor acessibilidade e SEO.
-   **CSS3:** Estilização completa, utilizando recursos modernos como:
    -   **CSS Variables** para um Design System robusto.
    -   **Grid Layout** para a estrutura principal das páginas.
    -   **Flexbox** para alinhamentos finos de componentes.
    -   **Media Queries** para criar 5 breakpoints responsivos.
    -   **Pseudo-classes (`:focus`, `:valid`, etc.)** para interatividade e validação sem JavaScript.
-   **JavaScript (ES6+):**
    -   Manipulação do DOM para criar componentes interativos como o menu hambúrguer e o modal de feedback.
    -   Integração com a biblioteca **[IMask.js](https://imask.js.org/)** para a aplicação das máscaras nos campos do formulário.

---

## ✅ Requisitos Acadêmicos Atendidos

### Entrega I – Estrutura e Fundamentos
-   [x] Estrutura HTML5 Semântica com 3 páginas.
-   [x] Formulário complexo com validação nativa e máscaras de input.
-   [x] Código fonte organizado e validado no W3C.

### Entrega II – Estilização e Leiautes
-   [x] **Sistema de Design:** Desenvolvido com variáveis CSS, paleta de cores (+8), hierarquia de tipografia (+5 tamanhos) e espaçamento modular.
-   [x] **Leiautes Responsivos com Flexbox e Grid:** Implementado leiaute com CSS Grid, Flexbox para componentes, 5 breakpoints e sistema de 12 colunas customizado.
-   [x] **Navegação Sofisticada e Interativa:** Criado menu principal responsivo com submenu dropdown e menu hambúrguer para mobile.
-   [x] **Componentes de Interface:** Desenvolvidos cards responsivos, botões com todos os estados visuais, formulários com validação visual, modal de feedback e sistema de badges/tags.

---

## 🏁 Como Executar o Projeto

Como este é um projeto de frontend estático, não há necessidade de instalação de dependências.

1.  Clone o repositório:
    ```bash
    git clone [https://github.com/esthevamnascimento/futuromelhor.git](https://github.com/esthevamnascimento/futuromelhor.git)
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd futuromelhor
    ```
3.  Abra o arquivo `index.html` no seu navegador de preferência.

---

## 👨‍💻 Autor

Desenvolvido por **Esthevam Nascimento**.