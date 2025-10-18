/* ==========================================================================
   TEMPLATES.JS (VERSÃO CORRIGIDA E LIMPA)
   - Contém as funções que geram o HTML de cada "página" da nossa SPA.
   - Cada função exportada retorna uma string de template.
   ========================================================================== */

/**
 * Template para a Página Inicial (Home)
 */
export const homeTemplate = () => {
    return `
        <section class="hero">
            <div class="hero-content">
                <h1>Construindo um Futuro Melhor, Hoje.</h1>
                <p>Junte-se a nós e faça parte da mudança que nossa comunidade precisa.</p>
                <a href="#/projetos" class="button button-secondary">Conheça Nossos Projetos</a>
            </div>
        </section>
        <div class="container grid-12">
            <div class="about-us col-span-12 md:col-span-6">
                <h2>Nossa Missão</h2>
                <p>A Futuro Melhor é uma organização dedicada a criar oportunidades e promover o desenvolvimento social através de projetos de educação, saúde e sustentabilidade. Acreditamos no poder da colaboração para gerar impacto duradouro.</p>
            </div>
            <div class="call-to-action col-span-12 md:col-span-6">
                <h2>Seja um Voluntário</h2>
                <p>Sua ajuda é fundamental para continuarmos nosso trabalho. Descubra como você pode contribuir com seu tempo e talento.</p>
                <a href="#/cadastro" class="button button-secondary">Quero ser Voluntário</a>
            </div>
        </div>
    `;
};

/**
 * Template para a Página de Projetos
 */
export const projectsTemplate = () => {
    return `
        <section class="page-header">
            <h1>Nossos Projetos</h1>
            <p>Acreditamos que a mudança acontece através da ação. Conheça as iniciativas que estão transformando comunidades e veja como seu apoio faz a diferença.</p>
        </section>
        <div class="projects-grid">
            <article class="project-card">
                <img src="imagens/educacaoparatodos.png" alt="Crianças sorrindo em uma sala de aula.">
                <div class="card-content">
                    <div class="card-tags"><span class="tag tag-blue">Educação</span></div>
                    <h2>Educação para Todos</h2>
                    <p>Nosso projeto de reforço escolar e atividades culturais...</p>
                    <button class="button button-secondary open-project-modal" data-project-id="educacao">Saiba Mais</button>
                </div>
            </article>
            <article class="project-card">
                <img src="imagens/hotacomunitaria.jpg" alt="Mãos segurando uma planta jovem.">
                <div class="card-content">
                    <div class="card-tags"><span class="tag tag-cyan">Sustentabilidade</span><span class="tag tag-blue">Comunidade</span></div>
                    <h2>Horta Comunitária</h2>
                    <p>Promovemos a segurança alimentar e a sustentabilidade...</p>
                    <button class="button button-secondary open-project-modal" data-project-id="horta">Saiba Mais</button>
                </div>
            </article>
            <article class="project-card">
                <img src="imagens/saude.png" alt="Médica auscultando um paciente idoso.">
                <div class="card-content">
                    <div class="card-tags"><span class="tag tag-blue">Saúde</span></div>
                    <h2>Saúde na Comunidade</h2>
                    <p>Levamos atendimento médico e odontológico básico...</p>
                    <button class="button button-secondary open-project-modal" data-project-id="saude">Saiba Mais</button>
                </div>
            </article>
        </div>
    `;
};

/**
 * Template para a Página de Cadastro
 */
export const contactTemplate = () => {
    return `
        <section class="page-header">
            <h1>Faça Parte da Mudança</h1>
            <p>Preencha o formulário abaixo para se cadastrar como voluntário ou apoiador. Seus dados são confidenciais e essenciais para nossa organização.</p>
        </section>
        <div class="form-container">
            <form class="registration-form" id="main-contact-form" novalidate>
                <fieldset>
                    <legend>Dados Pessoais</legend>
                    <div class="form-group">
                        <label for="fullName">Nome Completo</label>
                        <input type="text" id="fullName" name="fullName" placeholder="Digite seu nome completo" required>
                        <span class="error-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="email">E-mail</label>
                        <input type="email" id="email" name="email" placeholder="seu.email@exemplo.com" required>
                        <span class="error-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="cpf">CPF</label>
                        <input type="text" id="cpf" name="cpf" placeholder="000.000.000-00" required pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}">
                        <span class="error-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="phone">Telefone</label>
                        <input type="tel" id="phone" name="phone" placeholder="(00) 90000-0000" required pattern="\\(\\d{2}\\)\\s\\d{5}-\\d{4}">
                        <span class="error-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="birthDate">Data de Nascimento</label>
                        <input type="date" id="birthDate" name="birthDate" required>
                        <span class="error-message"></span>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Endereço</legend>
                    <div class="form-group">
                        <label for="cep">CEP</label>
                        <input type="text" id="cep" name="cep" placeholder="00000-000" required pattern="\\d{5}-\\d{3}">
                        <span class="error-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="address">Endereço</label>
                        <input type="text" id="address" name="address" placeholder="Rua, Avenida, etc." required>
                        <span class="error-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="city">Cidade</label>
                        <input type="text" id="city" name="city" placeholder="Sua cidade" required>
                        <span class="error-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="state">Estado</label>
                        <input type="text" id="state" name="state" placeholder="Seu estado" required>
                        <span class="error-message"></span>
                    </div>
                </fieldset>
                <button type="submit" class="button button-primary">Finalizar Cadastro</button>
            </form>
        </div>
    `;
};

/**
 * Template para a Página de Doação
 */
export const donationTemplate = () => {
    return `
        <section class="page-header">
            <h1>Faça a Diferença</h1>
            <p>Sua doação é a força que move nossos projetos. Escolha um valor e ajude a construir um futuro melhor hoje mesmo.</p>
        </section>
        <div class="form-container">
            <form class="registration-form" id="donation-form">
                <fieldset>
                    <legend>Quero Doar</legend>
                    <div class="form-group">
                        <label for="donation-amount">Valor da Doação (R$)</label>
                        <input type="number" id="donation-amount" name="donation-amount" placeholder="50,00" required min="1">
                        <span class="error-message"></span>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Informações de Pagamento</legend>
                    <div class="form-group">
                        <label for="fullName">Nome no Cartão</label>
                        <input type="text" id="fullName" name="fullName" placeholder="Digite seu nome completo" required>
                        <span class="error-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="card-number">Número do Cartão</label>
                        <input type="text" id="card-number" name="card-number" placeholder="0000 0000 0000 0000" required>
                        <span class="error-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="expiry-date">Validade</label>
                        <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/AA" required>
                        <span class="error-message"></span>
                    </div>
                    <div class="form-group">
                        <label for="cvv">CVV</label>
                        <input type="text" id="cvv" name="cvv" placeholder="123" required>
                        <span class="error-message"></span>
                    </div>
                </fieldset>
                <button type="submit" class="button button-primary">Efetuar Doação</button>
            </form>
        </div>
    `;
};