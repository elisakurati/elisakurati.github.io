function mostravalores(componente) {
    var nome = componente.getAttribute('data-nome');
    var idade = componente.getAttribute('data-idade');
    var altura = componente.getAttribute('data-altura');
    var cpf = componente.getAttribute('data-cpf');

    var mensagem = 'Nome: ' + nome + '\n' +
                   'Idade: ' + idade + ' anos\n' +
                   'Altura: ' + altura + ' m\n' +
                   'CPF: ' + cpf;

    alert(mensagem);
}
