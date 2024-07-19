function showDetalhes(botao) {
    const produto = botao.parentElement;
    const nome = produto.getAttribute('data-nome');
    const preco = produto.getAttribute('data-preco');
    const categoria = produto.getAttribute('data-categoria');
    
    const detalhes = `Nome: ${nome}\nPreço: R$ ${preco}\nCategoria: ${categoria}`;
    alert(detalhes);
}
