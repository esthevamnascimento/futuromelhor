/* ==========================================================================
   DATA.JS
   - Simula um banco de dados ou API, fornecendo os dados dos projetos.
   ========================================================================== */

// Array principal contendo os dados de cada projeto
export const projectsData = [
    {
        id: 'educacao', // Identificador único usado na URL e nos botões
        title: 'Educação para Todos',
        image: 'imagens/educacaoparatodos.png', // Caminho da imagem do projeto
        tags: ['Educação'], // Categorias do projeto
        shortDescription: 'Nosso projeto de reforço escolar e atividades culturais para crianças em comunidades carentes, garantindo um futuro mais brilhante.', // Descrição curta (pode ser usada futuramente)
        fullDescription: ` 
            <p>O projeto Educação para Todos visa combater a desigualdade educacional oferecendo reforço escolar gratuito em português e matemática, além de oficinas de arte, música e esportes para crianças e adolescentes de 6 a 14 anos em situação de vulnerabilidade social.</p>
            <p>Acreditamos que a educação é a chave para a transformação. Com aulas dinâmicas e um ambiente acolhedor, buscamos despertar o potencial de cada aluno, incentivando o gosto pelo aprendizado e a construção de um futuro com mais oportunidades.</p>
            `, // Descrição completa (usada no modal) - Note o uso de HTML aqui
        goals: [ // Lista de objetivos (pode ser usada futuramente)
            'Melhorar o desempenho escolar dos participantes.',
            'Ampliar o acesso à cultura e ao esporte.',
            'Fortalecer a autoestima e as habilidades socioemocionais.',
            'Promover a integração comunitária.'
        ]
    },
    {
        id: 'horta',
        title: 'Horta Comunitária',
        image: 'imagens/hotacomunitaria.jpg',
        tags: ['Sustentabilidade', 'Comunidade'],
        shortDescription: 'Promovemos a segurança alimentar e a sustentabilidade através da criação e manutenção de hortas orgânicas comunitárias.',
        fullDescription: `
            <p>A Horta Comunitária é uma iniciativa que une a comunidade em torno do cultivo de alimentos orgânicos. Em um terreno cedido pela prefeitura, voluntários e moradores locais aprendem técnicas de agricultura sustentável, plantam, cuidam e colhem alimentos frescos e saudáveis.</p>
            <p>Além de promover a segurança alimentar e o acesso a uma dieta mais nutritiva, o projeto fortalece os laços comunitários, incentiva a educação ambiental e gera uma fonte de renda complementar para algumas famílias através da venda do excedente da produção.</p>
            `,
        goals: [
            'Aumentar o acesso a alimentos orgânicos na comunidade.',
            'Promover práticas de agricultura sustentável.',
            'Fortalecer os laços sociais e o trabalho em equipe.',
            'Gerar conhecimento sobre educação ambiental.'
        ]
    },
    {
        id: 'saude',
        title: 'Saúde na Comunidade',
        image: 'imagens/saude.png',
        tags: ['Saúde'],
        shortDescription: 'Levamos atendimento médico e odontológico básico para áreas de difícil acesso, focando na prevenção e no bem-estar de todos.',
        fullDescription: `
            <p>Com uma unidade móvel equipada, o projeto Saúde na Comunidade leva atendimento médico e odontológico primário a regiões periféricas e rurais que possuem acesso limitado aos serviços de saúde. Realizamos consultas, exames básicos, procedimentos odontológicos simples e campanhas de prevenção.</p>
            <p>Nossa equipe de voluntários (médicos, dentistas, enfermeiros) trabalha em parceria com agentes comunitários de saúde para identificar as principais necessidades locais e oferecer um atendimento humanizado e focado na prevenção de doenças e na promoção de hábitos saudáveis.</p>
            `,
        goals: [
            'Ampliar o acesso à saúde primária em áreas remotas.',
            'Realizar ações de prevenção e educação em saúde.',
            'Identificar e encaminhar casos que necessitam de atenção especializada.',
            'Promover o bem-estar e a qualidade de vida da população atendida.'
        ]
    }
    // Adicione mais objetos aqui para mais projetos no futuro
];

/**
 * Função auxiliar para encontrar um projeto específico pelo seu ID.
 * É exportada para que outros módulos (como projectModal.js) possam usá-la.
 * * @param {string} id O ID do projeto a ser encontrado.
 * @returns {object|undefined} O objeto do projeto encontrado ou undefined se não encontrar.
 */
export function getProjectById(id) {
    // Usa o método find() do array para buscar o primeiro projeto cujo 'id' corresponda ao id fornecido
    return projectsData.find(project => project.id === id);
}