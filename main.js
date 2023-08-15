$(document).ready(function() {
    // Função para validar o campo Nome
    function validateName() {
        var nomeInput = $('#nome');
        return nomeInput.val() && /^[a-zA-Z\s]+$/.test(nomeInput.val());
    }
    
    // Função para validar o campo Email
    function validateEmail() {
        var emailInput = $('#email');
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(emailInput.val());
    }
    
    // Função para validar o campo de Telefone
    function validateTelefone() {
        var telefoneInput = $('#telefone');
        var telefoneValue = telefoneInput.val();
        var telefonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
        return telefonePattern.test(telefoneValue);
    }
    
    // Função para atualizar o status do botão "Enviar"
    function updateSubmitButtonStatus() {
        var nameValid = validateName();
        var emailValid = validateEmail();
        var telefoneValid = validateTelefone();
        
        if (nameValid && emailValid && telefoneValid) {
            $('button[type="submit"]').prop('disabled', false);
        } else {
            $('button[type="submit"]').prop('disabled', true);
        }
    }

    $('#nome').on('input', function() {
        validateName();
        updateSubmitButtonStatus();
    });
    
    $('#email').on('input', function() {
        validateEmail();
        updateSubmitButtonStatus();
    });
    
    $('#telefone').on('input', function() {
        validateTelefone();
        updateSubmitButtonStatus();
    });

    function clearFields() {
        $('#nome').val('');
        $('#email').val('');
        $('#telefone').val('');
        $('button[type="submit"]').prop('disabled', true);
    }

    $('button[type="submit"]').click(function(event) {
        event.preventDefault();

        var nameValid = validateName();
        var emailValid = validateEmail();
        var telefoneValid = validateTelefone();
        
        if (nameValid && emailValid && telefoneValid) {
            showSuccessPopup();
            clearFields();
        } else {
            var missingFields = [];
            if (!nameValid) missingFields.push('Nome');
            if (!emailValid) missingFields.push('Email');
            if (!telefoneValid) missingFields.push('Telefone');
            
            alert('Campos faltantes ou incorretos: ' + missingFields.join(', '));
        }
    });

    function showSuccessPopup() {
        alert('Formulário válido! Dados enviados com sucesso.');
    }

    $('#telefone').mask('(00) 00000-0000');
});
