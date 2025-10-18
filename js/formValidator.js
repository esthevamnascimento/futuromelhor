/* ==========================================================================
   FORMVALIDATOR.JS
   - Lógica de validação de consistência de dados para o formulário.
   - Controla o feedback visual adicionando/removendo classes .valid/.invalid
   ========================================================================== */

export function initializeFormValidation() {
    const form = document.getElementById('main-contact-form');
    if (!form) return;

    // Validação "ao vivo" no evento 'input' para feedback instantâneo
    form.querySelectorAll('input[required]').forEach(input => {
        input.addEventListener('input', () => {
            validateField(input); // Valida o campo a cada dígito
        });
        // Também valida quando o usuário "sai" do campo
        input.addEventListener('blur', () => {
            validateField(input);
        });
    });

    // Validação final ao tentar ENVIAR
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        
        let isFormValid = true;
        form.querySelectorAll('input[required]').forEach(input => {
            if (!validateField(input)) { // Valida cada campo
                isFormValid = false;
            }
        });

        if (isFormValid) {
            console.log('Formulário válido! Enviando...');
            const modal = document.getElementById('feedback-modal');
            if (modal) modal.classList.add('active');
        } else {
            console.log('Formulário inválido.');
        }
    });
}

/**
 * Função que valida um campo individual e atualiza a UI
 */
function validateField(input) {
    const formGroup = input.parentElement; // O <div class="form-group">
    let errorMessage = '';

    // Remove estados antigos
    formGroup.classList.remove('valid', 'invalid');

    // 1. Validação de campo vazio (para todos)
    if (input.validity.valueMissing) {
        errorMessage = 'Este campo é obrigatório.';
    } 
    // 2. Validação de tipo (para email)
    else if (input.validity.typeMismatch) {
        errorMessage = 'Por favor, digite um e-mail válido.';
    }
    // 3. Validação de padrão (para CEP, Telefone)
    else if (input.validity.patternMismatch) {
        errorMessage = `Por favor, use o formato correto.`;
    }
    // 4. VALIDAÇÃO DE CONSISTÊNCIA (Regras customizadas)
    else {
        switch (input.id) {
            case 'fullName':
            case 'city':
            case 'state':
                if (!isValidText(input.value)) {
                    errorMessage = 'Este campo não pode conter números.';
                }
                break;
            case 'address':
                // Endereço pode ter números, mas não SÓ números
                if (/^\d+$/.test(input.value)) { 
                    errorMessage = 'Endereço inválido.';
                }
                break;
            case 'cpf':
                if (!isValidCPF(input.value)) {
                    errorMessage = 'Este CPF é inválido.';
                }
                break;
        }
    }

    // Encontra o 'span' de erro e atualiza a UI
    const errorSpan = formGroup.querySelector('.error-message');
    if (errorMessage) {
        errorSpan.textContent = errorMessage;
        formGroup.classList.add('invalid');
        return false;
    } else {
        errorSpan.textContent = '';
        formGroup.classList.add('valid');
        return true;
    }
}

/**
 * Nova função: Valida se o texto contém apenas letras e espaços
 */
function isValidText(text) {
    // Regex: permite letras, espaços, acentos, mas não números ou símbolos especiais
    return /^[a-zA-Z\u00C0-\u017F\s]+$/.test(text);
}

/**
 * Função de validação de consistência do CPF (algoritmo)
 */
function isValidCPF(cpf) {
    if (typeof cpf !== 'string') return false;
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11) return false;
    if (/^(\d)\1+$/.test(cpf)) return false; // Verifica CPFs com todos os dígitos iguais

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    remainder = (sum * 10) % 11;
    if (remainder === 10 || remainder === 11) remainder = 0;
    if (remainder !== parseInt(cpf.substring(10, 11))) return false;
    
    return true;
}