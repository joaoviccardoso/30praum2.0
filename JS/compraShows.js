const btnsDeCompraDosIngressos = document.querySelectorAll('.btns_shows');
const cidadesDosShows = document.querySelectorAll('.cidade__show');
const precosDosIngressos = document.querySelectorAll('.preco__shows');
const cantoresDosShows = document.querySelectorAll('.cantores');
const conteinerCarrinho = document.querySelector('.resuldadoDaCompraCarrinhoShows');
const btnLimpar = document.querySelector('.limparTudoShows');

const carrinhoShows = JSON.parse(localStorage.getItem("carrinhoShows")) || [];

btnsDeCompraDosIngressos.forEach(btn => btn.addEventListener('click', btnClick))

function btnClick(){
    const elementoDoBtnClick = document.getElementById(this.id)
    const idDoBtn = elementoDoBtnClick.getAttribute('id');
    const numeroDoElemento = idDoBtn.split('-')[1]

    const ingresso = {
        cidade: cidadesDosShows[numeroDoElemento].textContent,
        valor: precosDosIngressos[numeroDoElemento].textContent,
        cantores: cantoresDosShows[numeroDoElemento].textContent
    }

    carrinhoShows.push(ingresso);
    localStorage.setItem("carrinhoShows", JSON.stringify(carrinhoShows))
    criarElementoNoCarrinho(ingresso)
}

//cria os elementos do carrinho de compra

function criarElementoNoCarrinho(ingresso){
    conteinerCarrinho.innerHTML += `
    <div class="box d-flex container m-2 tarefas">
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
    conteinerCarrinho.innerHTML = "";
    localStorage.clear()
}

