const btns = document.querySelectorAll(".btns");
const imagem = document.querySelectorAll(".produtos");
const modal = document.querySelector(".resuldadoDaCompra");
const qtd = document.querySelectorAll(".qtd");
const tamanho = document.querySelectorAll(".tamanho");
const nomeModal = document.querySelector("#offcanvasRightLabel");
const valorDosProdutos = document.querySelectorAll(".preco");
const limpar = document.querySelector('.limparTudo')
const containerSoma = document.querySelector('.saldoTotalContainer');

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function btnClick(pedidoDecompra) {
  modal.innerHTML += `
    <div class="box d-flex container m-2 tarefas">
        <img src="./${pedidoDecompra.img}" width="100" height="100"/>
        <div class='container d-flex flex-column  justify-content-center'>
            <p class="texto-loja">${pedidoDecompra.nome}</p>
            <p class="texto-loja">Tamanho ${pedidoDecompra.tamanha}</p> 
            <p class="texto-loja">Quantidade ${pedidoDecompra.qtd}</p>
            ${pedidoDecompra.valor}
        </div>
    </div>        
   `;
}

limpar.onclick = () =>{
  const seletor = modal.querySelectorAll(".tarefas");
  valorFinal = 0;
  containerSoma.innerHTML = `R$0,00`
  for (let i = 0; i < seletor.length; i++) {
    seletor[i].remove()
    localStorage.clear()
  }
}

function cancelado() {
  alert('pedido foi cancelado, coloque um tamanho e uma quantidade') 
}

for (let i = 0; i < btns.length; i++) {
  const nomeDoProtudo = imagem[i].getAttribute("alt");
  const caminhoDaImg = imagem[i].getAttribute("src");
  const valorDoProduto = valorDosProdutos[i];
  btns[i].onclick = function criarElemento() {
    const qtdEscolhida = qtd[i].value;
    if (qtdEscolhida == "") {
      cancelado();
      return;
    }
    const tamanhoEscolhida = tamanho[i].value;
    if (tamanhoEscolhida == "Tamanho") {
      cancelado();
      return;
    }

    const pedidoDecompra = {
      img: caminhoDaImg,
      nome: nomeDoProtudo,
      valor: valorDoProduto.outerText,
      qtd: qtdEscolhida,
      tamanho: tamanhoEscolhida,
    };
    carrinho.push(pedidoDecompra);
    localStorage.setItem("carrinho", JSON.stringify(carrinho));
    btnClick(pedidoDecompra)
    somarCarrinho(pedidoDecompra)
  };
}

document.addEventListener('DOMContentLoaded', function() {
  mostrarSoma(valorFinal)
  for (let i = 0; i < carrinho.length; i++) {
    btnClick(carrinho[i]);
  }
});

let valorFinal = parseFloat(localStorage.getItem('valor')) || 0;

function somarCarrinho(pedidoDecompra){
  const valor = parseFloat(pedidoDecompra.valor.replace('R$ ', ''));
  const qtd = parseFloat(pedidoDecompra.qtd);
  const valorMaisQtd = valor * qtd
  valorFinal += valorMaisQtd  
  localStorage.setItem('valor', valorFinal)
  mostrarSoma(valorFinal)
}

function mostrarSoma(valorFinal){
  containerSoma.innerHTML = ` 
  <h4 class="saldoFinal">R$${valorFinal}</h4>
  <p class="subtotal">Subtotal</p>
  `;
}

