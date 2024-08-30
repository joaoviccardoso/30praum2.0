const btnsDeCompraDosIngressos = document.querySelectorAll('.btns_shows');
const cidadesDosShows = document.querySelectorAll('.cidade__show');
const precosDosIngressos = document.querySelectorAll('.preco__shows');
const cantoresDosShows = document.querySelectorAll('.cantores');
const conteinerCarrinho = document.querySelector('.resuldadoDaCompraCarrinhoShows');
const containerSaldoCarrinho = document.querySelector('.saldoTotalContainerShows');
const imgs = document.querySelectorAll('.localShows');
const btnLimpar = document.querySelector('.limparTudoShows');

const carrinhoShows = JSON.parse(localStorage.getItem("carrinhoShows")) || [];

btnsDeCompraDosIngressos.forEach(btn => btn.addEventListener('click', btnClick))

function btnClick(){
    const elementoDoBtnClick = document.getElementById(this.id)
    const idDoBtn = elementoDoBtnClick.getAttribute('id');
    const numeroDoElemento = idDoBtn.split('-')[1]
    const valueDovalor =  precosDosIngressos[numeroDoElemento].textContent;
    const valorDoIngresso = parseFloat(valueDovalor.split('R$')[1])

    const srcDaImg = imgs[numeroDoElemento].getAttribute('src');

    const ingresso = {
        img: srcDaImg,
        cidade: cidadesDosShows[numeroDoElemento].textContent,
        valor: precosDosIngressos[numeroDoElemento].textContent,
        cantores: cantoresDosShows[numeroDoElemento].textContent
    }

    carrinhoShows.push(ingresso);
    localStorage.setItem("carrinhoShows", JSON.stringify(carrinhoShows))
    criarElementoNoCarrinho(ingresso);
    somarValorDoCarrinhoShow(valorDoIngresso);
}

//cria os elementos do carrinho de compra

function criarElementoNoCarrinho(ingresso){
    conteinerCarrinho.innerHTML += `
    <div class="box d-flex container m-2 tarefas">
        <img src="./${ingresso.img}" width="100" height="100"/>
        <div class='container d-flex flex-column  justify-content-center'>
            <p class="texto-loja">${ingresso.cidade}</p>
            <p class="texto-loja">${ingresso.valor}</p> 
            <p class="texto-loja">${ingresso.cantores}</p>
        </div>
    </div>           
    `
}

//quanto a pagina for carregada esse ouvinde de evento vai chamar criarElementoNoCarrinho() ai essa vai funçao vai criar todos os elementos salvos no localStorege

document.addEventListener('DOMContentLoaded', function(){
    carrinhoShows.forEach(item => {
        criarElementoNoCarrinho(item)
    })
})

//limpar o carrinho de compra e o localStorege

btnLimpar.addEventListener('click', limparTudo);

function limparTudo(){
    containerSaldoCarrinho.innerHTML = `<p class="subtotal">Subtotal</p>`
    valoresDoCarrinho = 0;
    conteinerCarrinho.innerHTML = "";
    localStorage.clear()
}

//funcoes que vao criar o calculo de soma no carrinho de compra e mostrar na tela

let valoresDoCarrinho = parseFloat(localStorage.getItem('')) || 0;

function  somarValorDoCarrinhoShow(valorDoIngresso){
    valoresDoCarrinho += valorDoIngresso
    localStorage.setItem("valores", valoresDoCarrinho)
    mostrarSomaShows();
}

function mostrarSomaShows(){
    containerSaldoCarrinho.innerHTML = `
    <h4 class="saldoFinal">R$${valoresDoCarrinho}</h4>
    <p class="subtotal">Subtotal</p>
    `
}
