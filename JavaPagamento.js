const btnPix = document.getElementById("btnPix");
const btnCartao = document.getElementById("btnCartao");

const pagamentoPix = document.getElementById("pagamentoPix");
const pagamentoCartao = document.getElementById("pagamentoCartao");

// Escolher Pix
btnPix.addEventListener("click", function () {
    pagamentoPix.style.display = "flex";
    pagamentoCartao.style.display = "none";
});

// Escolher cartão
btnCartao.addEventListener("click", function () {
    pagamentoCartao.style.display = "flex";
    pagamentoPix.style.display = "none";
});

const nomeCartao = document.getElementById("nome-cartao");

if (nomeCartao) {
    nomeCartao.addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-ZÀ-ÿ\s]/g, "");
    });
}
document.getElementById("validade").addEventListener("input", function(e) {
    let valor = e.target.value.replace(/\D/g, "");

    if (valor.length > 4) {
        valor = valor.slice(0, 4);
    }

    if (valor.length >= 3) {
        valor = valor.slice(0, 2) + "/" + valor.slice(2);
    }

    e.target.value = valor;
});

const chavePix = document.querySelector('#chavePix')

if(chavePix){
chavePix.addEventListener('click', () => {
alert("Chave pix copiada com sucesso");
})}


const formCartao = document.getElementById("formCartao");

if (formCartao) {
  formCartao.addEventListener("submit", function (event) {
    // Evita que a página seja recarregada ao enviar o formulário
    event.preventDefault(); 

    // Se chegou até aqui, significa que TODOS os campos com 'required' e 'pattern' estão preenchidos e válidos
    alert("Pagamento realizado com sucesso!");
  });
}

