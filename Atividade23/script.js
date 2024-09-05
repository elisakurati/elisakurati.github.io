$(document).ready(function() {
    $("#mybtn").click(function() {
        var cep = $("#cep").val().replace(/\D/g, '');  // Remove caracteres não numéricos
        if (cep.length !== 8) {
            alert("Por favor, insira um CEP válido com 8 números.");
            return;
        }

        $("#resultado").hide();

        // Resetando os campos antes da busca
        $("#rua").val("...");
        $("#bairro").val("...");
        $("#cidade").val("...");
        $("#uf").val("...");
        $("#ibge").val("...");

        var url = "https://viacep.com.br/ws/" + cep + "/json/";

        $.getJSON(url, function(retorno) {
            if (!("erro" in retorno)) {
                // Preenche os campos com os dados retornados
                $("#rua").val(retorno.logradouro);
                $("#bairro").val(retorno.bairro);
                $("#cidade").val(retorno.localidade);
                $("#uf").val(retorno.uf);
                $("#ibge").val(retorno.ibge);

                $("#resultado").show();
            } else {
                alert("CEP não encontrado.");
            }
        }).fail(function() {
            alert("Erro ao buscar o CEP. Verifique sua conexão ou tente novamente mais tarde.");
        });
    });
});
