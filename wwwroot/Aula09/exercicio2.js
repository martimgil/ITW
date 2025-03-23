$(document).ready(function () {
    // Ativando a validação do Bootstrap
    $("form.needs-validation").on("submit", function (event) {
        event.preventDefault(); // Impede envio padrão
        event.stopPropagation(); // Evita propagação do evento

        let isValid = true;

        // Validando os campos individualmente
        isValid &= validarCampo("#name", validarNome);
        isValid &= validarCampo("#street", validarStreet);
        isValid &= validarCampo("#mail", validarMail);

        // Checando se ao menos uma localização foi selecionada
        if ($("input[name='local']:checked").length <2) {
            alert("Selecione ao menos duas localizações.");
            isValid = false;
        }

        if (isValid) {
            Form.prototype.submit.call(this); // Submete se estiver tudo válido
        }
    });

    // Função genérica para validar campos
    function validarCampo(selector, callback) {
        const $campo = $(selector);
        const valido = callback($campo.val());

        if (valido) {
            $campo.removeClass("is-invalid").addClass("is-valid");
        } else {
            $campo.removeClass("is-valid").addClass("is-invalid");
        }

        return valido;
    }

    // Validação do nome
    function validarNome(valor) {
        return valor.length >= 10 && valor.length <= 100;
    }

    // Validação da morada
    function validarStreet(valor) {
        return valor.length >= 20 && valor.length <= 100;
    }

    // Validação do e-mail
    function validarMail(valor) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(valor);
    }

    // Limpar campos ao resetar o formulário
    $("#reset").on("click", function () {
        $("form.needs-validation .form-control")
            .removeClass("is-valid is-invalid");
    });
});