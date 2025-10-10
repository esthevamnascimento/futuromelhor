// Espera o documento HTML ser completamente carregado para executar o script
document.addEventListener('DOMContentLoaded', function() {

    // --- Máscara para o campo de CPF ---
    // 1. Seleciona o elemento do input pelo ID
    const cpfInput = document.getElementById('cpf');
    // 2. Define as opções da máscara
    const cpfMaskOptions = {
        mask: '000.000.000-00'
    };
    // 3. Aplica a máscara ao elemento
    const cpfMask = IMask(cpfInput, cpfMaskOptions);


    // --- Máscara para o campo de Telefone ---
    const phoneInput = document.getElementById('phone');
    const phoneMaskOptions = {
        mask: '(00) 00000-0000'
    };
    const phoneMask = IMask(phoneInput, phoneMaskOptions);


    // --- Máscara para o campo de CEP ---
    const cepInput = document.getElementById('cep');
    const cepMaskOptions = {
        mask: '00000-000'
    };
    const cepMask = IMask(cepInput, cepMaskOptions);

});