$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000', { clearIfNotMatch: true });

    $('form').validate({
    rules: {
        nome: 'required',
        email: {
        required: true,
        email: true
        },
        telefone: {
        required: true,
        minlength: 15 
        }
    },
    messages: {
        nome: 'Este campo é obrigatório.',
        email: 'Por favor, insira um e-mail válido.',
        telefone: 'Por favor, insira um telefone válido.'
    },
    submitHandler: function(form) {
        console.log('Enviando dados para o banco de dados fictício...');
        Swal.fire({
        icon: 'success',
        title: 'Sucesso!',
        text: 'Seus dados foram enviados com sucesso.',
        confirmButtonText: 'Fechar'
        }).then((result) => {
        if (result.isConfirmed) {
            form.reset();
        }
        });
    }
    });
});
