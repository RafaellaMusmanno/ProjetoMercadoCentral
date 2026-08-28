# 🛒 Mercearia Central — Sistema PDV

Projeto final em grupo do curso **Recode - Transforma Futuros**, simulando um **sistema de Ponto de Venda (PDV)** para um mercado de bairro fictício. Desenvolvido com HTML, CSS e JavaScript puro (vanilla JS).

> ⚠️ Loja, produtos e dados (CNPJ, endereço, telefone etc.) são **totalmente fictícios**, criados apenas para fins didáticos.

## 🔗 Demo

Publicado no site da PudCria com o nome da equipe *(link aqui)*.

## ✨ Funcionalidades

- **Catálogo de produtos**: mais de 50 itens cadastrados, cada um com foto, nome, descrição, preço e ID/código de barras.
- **Busca inteligente**: pesquisa em tempo real por nome do produto ou código de barras, exibindo foto, descrição e preço dos resultados.
- **Carrinho de compras**: adicione produtos ao carrinho, com cálculo automático do valor total e opção de limpar o carrinho.
- **Finalização de compra**: escolha entre pagamento via **Pix** (com geração de chave/código) ou **Cartão** (formulário com validação de número, validade e CVV).
- **Página de contato**: formulário para envio de mensagens.
- **Design responsivo**: layout adaptado para desktop, tablet e celular, sem menu hambúrguer — apenas a barra de busca como elemento central de navegação.

## 🛠️ Tecnologias

- HTML5
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript (Vanilla)
- [Flaticon UIcons](https://www.flaticon.com/uicons) para ícones

## 📁 Estrutura do projeto

```
├── PaginaInicial.html      # Página inicial com ofertas da semana
├── PaginaCarrinho.html     # Carrinho de compras
├── PaginaContato.html      # Formulário de contato
├── PaginaPagamento.html    # Finalização de compra (Pix / Cartão)
├── StyleCSS.css            # Estilos globais e responsividade
├── produtos.js             # Base de dados dos produtos + busca
├── Java.js                 # Lógica de carrinho e interações gerais
└── JavaPagamento.js        # Lógica da página de pagamento
```

## 🚀 Como rodar localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/mercearia-central.git
   ```
2. Abra o arquivo `PaginaInicial.html` diretamente no navegador, ou use uma extensão como o **Live Server** (VS Code) para melhor experiência.

## 👥 Equipe

*(adicionar nomes dos integrantes do grupo)*

## 📌 Observações

Este projeto foi desenvolvido para fins de estudo e portfólio, seguindo os requisitos propostos pelo curso: identidade visual própria, catálogo de produtos, busca funcional, carrinho, checkout com Pix/Cartão e responsividade completa.
