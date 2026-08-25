/* IMPORTANTE!!!!!!!!!!!! 
tem que colocar um if (nomedavariavel) antes de QUALQUER ação, porque é um arquivo pra várias
paginas, então se ele rodar e não tiver esse if e nem o botão ele para de funcionar e não roda o resto do código*/

/* OBS2: Fazer alterações na parte de cada página que ta separada por comentários pra ficar organizado please*/ 

console.log("Arquivo JS carregou corretamente!");


/* Pagina Inicial */

const botaoComprar = document.querySelectorAll('#botaoComprar');

if (botaoComprar) {
botaoComprar.forEach((botaoComprar) => (
botaoComprar.addEventListener('click', () =>{
alert("Adicionado ao carrinho");
})))}


/* Pagina Contato */

const mensagemEnviar = document.querySelector('#mensagemEnviar');

if(mensagemEnviar){
mensagemEnviar.addEventListener('click', () =>{
alert("Mensagem enviada");
})}


/* Pagina Pagamento */ 

const chavePix = document.querySelector('#chavePix')

if(chavePix){
chavePix.addEventListener('click', () => {
alert("Chave pix copiada com sucesso");
})}

const finalizarPagamento = document.querySelector('#finalizarPagamento');

if(finalizarPagamento)
finalizarPagamento.addEventListener('click', () =>{
alert("Pagamento realizado");
}) /* Ta alertando até sem os campos estarem preenchidos, tem que colocar um if pra só dar a mensagem depois
que todos os campos forem preenchidos*/

 
/* Pagina Carrinho*/ 







/* Barra de pesquisa*/ 



function buscarProduto() {

    const busca = document
        .getElementById("searchInput")
        .value 
        .toLowerCase();

    const listaProdutos = document.getElementById("listaProdutos");

    listaProdutos.innerHTML = "";

    if (busca === "") {
        return;
    }

    const produtosEncontrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(busca) ||
        produto.id.includes(busca)
    );

    console.log(produtosEncontrados);


 produtosEncontrados.forEach(produto => {
        listaProdutos.innerHTML += `
            <div class="blocoProduto">
                <img src="${produto.foto}" alt="${produto.nome}">

                <h2>${produto.nome}</h2>

                <p>${produto.descricao}</p>

                <p>R$ ${produto.preco.toFixed(2)}</p>

                <button>Adicionar ao carrinho</button>
            </div>
        `;
    });

    if (produtosEncontrados.length === 0) {
        listaProdutos.innerHTML = `
            <p>Nenhum produto encontrado.</p>
        `;
    }
}
