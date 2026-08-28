/* IMPORTANTE!!!!!!!!!!!! 
tem que colocar um if (nomedavariavel) antes de QUALQUER ação, porque é um arquivo pra várias
paginas, então se ele rodar e não tiver esse if e nem o botão ele para de funcionar e não roda o resto do código*/

/* OBS2: Fazer alterações na parte de cada página que ta separada por comentários pra ficar organizado please*/ 

console.log("Arquivo JS carregou corretamente!");


/* Pagina Inicial */

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('botaoComprar')) {
        alert("Adicionado ao carrinho");
    }
});

/* Pagina Contato */

const mensagemEnviar = document.querySelector('#mensagemEnviar');

if (mensagemEnviar) {

    mensagemEnviar.addEventListener('click', (event) => {

        event.preventDefault();

        const nome = document.querySelector('input[placeholder="Seu nome"]').value.trim();
        const email = document.querySelector('input[type="email"]').value.trim();
        const mensagem = document.querySelector('textarea').value.trim();

        if (nome === "" || email === "" || mensagem === "") {
            alert("Por favor, preencha todos os campos antes de enviar.");
            return;
        }

        alert("Mensagem enviada!");

    });

}

/* Pagina Pagamento */ 



 
/* Pagina Carrinho*/ 

let carrinho = JSON.parse(sessionStorage.getItem('carrinho')) || []
 
const listaCarrinho = document.querySelector('.listaCarrinho')
const totalCarrinhoEl = document.querySelector('#totalCarrinho')
const botaoLimpar = document.querySelector('#limparCarrinho')
const botaoFinalizar = document.querySelector('#finalizarCompra')
 
/* ===== EVENTO ÚNICO DE CLIQUE (delegação) ===== */
document.addEventListener('click', (event) => {
 
    // Adicionar produto ao carrinho (botão vem de outra página, ex: catálogo)
    if (event.target.classList.contains('botaoComprar')) {
        const id = event.target.dataset.id
        const produto = typeof produtos !== 'undefined'
            ? produtos.find(p => p.id === id)
            : null
 
        if (produto) {
            adicionarAoCarrinho(produto)
        } else {
            console.warn('Produto não encontrado para o id:', id)
        }
    }
 
    // Remover produto
    if (event.target.classList.contains('botao-remover')) {
        const id = event.target.dataset.id
        removerDoCarrinho(id)
    }
 
    // Aumentar/diminuir quantidade
    if (event.target.classList.contains('botao-qtd')) {
        const id = event.target.dataset.id
        const acao = event.target.dataset.acao
        alterarQuantidade(id, acao)
    }
})
 
/* ===== FUNÇÕES DE MANIPULAÇÃO DO CARRINHO ===== */
 
function adicionarAoCarrinho(produto) {
    const itemExistente = carrinho.find(item => item.produto.id === produto.id)
 
    if (itemExistente) {
        itemExistente.quantidade++
    } else {
        carrinho.push({ produto: produto, quantidade: 1 })
    }
 
    salvarCarrinho()
    renderizarCarrinho()
}
 
function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.produto.id !== id)
    salvarCarrinho()
    renderizarCarrinho()
}
 
function alterarQuantidade(id, acao) {
    const item = carrinho.find(item => item.produto.id === id)
    if (!item) return
 
    if (acao === 'aumentar') {
        item.quantidade++
    } else if (acao === 'diminuir') {
        item.quantidade--
        if (item.quantidade <= 0) {
            removerDoCarrinho(id)
            return
        }
    }
 
    salvarCarrinho()
    renderizarCarrinho()
}
 
function salvarCarrinho() {
    sessionStorage.setItem('carrinho', JSON.stringify(carrinho))
}
 
/* ===== RENDERIZAÇÃO ===== */
 
function renderizarCarrinho() {
    if (!listaCarrinho) return
 
    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = '<p>Seu carrinho está vazio.</p>'
        calcularTotal()
        return
    }
 
    listaCarrinho.innerHTML = carrinho.map(item => `
        <div class="item-carrinho">
            <img src="${item.produto.foto}" alt="${item.produto.nome}">
 
            <div class="info-produto">
                <h3>${item.produto.nome}</h3>
            </div>
 
            <div class="quantidade-produto">
                <span>Quantidade</span>
                <div class="controle-qtd">
                    <button type="button" class="botao-qtd" data-acao="diminuir" data-id="${item.produto.id}">−</button>
                    <span class="valor-qtd">${item.quantidade}</span>
                    <button type="button" class="botao-qtd" data-acao="aumentar" data-id="${item.produto.id}">+</button>
                </div>
            </div>
 
            <div class="preco-produto">
                <span>Preço unitário</span>
                <strong>R$${item.produto.preco.toFixed(2).replace('.', ',')}</strong>
            </div>
 
            <button type="button" class="botao-remover" data-id="${item.produto.id}">🗑 Remover</button>
        </div>
    `).join('')
 
    calcularTotal()
}
 
function calcularTotal() {
    const total = carrinho.reduce((soma, item) => soma + item.produto.preco * item.quantidade, 0)
 
    if (totalCarrinhoEl) {
        totalCarrinhoEl.textContent = `R$${total.toFixed(2).replace('.', ',')}`
    }
}
 
/* ===== BOTÃO LIMPAR CARRINHO ===== */
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', () => {
        carrinho = []
        sessionStorage.removeItem('carrinho')
        renderizarCarrinho()
    })
}
 
/* ===== BOTÃO FINALIZAR COMPRA ===== */
if (botaoFinalizar) {
    botaoFinalizar.addEventListener('click', finalizarCompra)
}
 
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio! Adicione algum produto antes de finalizar a compra.')
        return
    }
 
    window.location.href = 'PaginaPagamento.23082026.html'
}
 
/* ===== INICIALIZAÇÃO ===== */
renderizarCarrinho()

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

                <button type="button" class="botaoComprar" data-id="${produto.id}">Adicionar ao carrinho</button>
            </div>
        `;
    });

    if (produtosEncontrados.length === 0) {
        listaProdutos.innerHTML = `
            <p>Nenhum produto encontrado.</p>
        `;
    }
}

