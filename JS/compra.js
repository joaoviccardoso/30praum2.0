const btns = document.querySelectorAll(".btns");
const imagem = document.querySelectorAll(".produtos");
const modal = document.querySelector(".resuldadoDaCompra");
const qtd = document.querySelectorAll(".qtd");
const tamanho = document.querySelectorAll(".tamanho");
const nomeModal = document.querySelector("#offcanvasRightLabel");
const valorDosProdutos = document.querySelectorAll(".preco");

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

// function btnClick(pedidoDecompra) {
//   nomeModal.innerHTML = `<h1>Adicionado no carrinho</h1>`;
//   modal.innerHTML += `
//     <div class="box d-flex container">
//         <img src="${pedidoDecompra.img}" width="100" height="100"/>
//         <div class='container d-flex flex-column  justify-content-center'>
//             <p class="texto-loja">${pedidoDecompra.nome}</p>
//             <p class="texto-loja">Tamanho ${pedidoDecompra.tamanha}</p> 
//             <p class="texto-loja">Quantidade ${pedidoDecompra.qtd}</p>
//             ${pedidoDecompra.qtd}
//         </div>
//     </div>        
//    `;
// }

function criarElement(pedidoDecompra){
    const div = document.createElement('div');
    div.classList.add('box', 'd-flex', 'container')

    const img = document.createElement('img');
    img.setAttribute('src', pedidoDecompra.img);

    const caixaInfomacao = document.createElement('div');
    caixaInfomacao.classList.add('container', 'd-flex', 'flex-column',  'justify-content-center');

    const nome = document.createElement('p'); // Corrigido: usando document.createElement
    nome.classList.add('textoloja')
    nome.textContent = pedidoDecompra.nome

    const tamanho = document.createElement('p'); // Corrigido: usando document.createElement
    tamanho.classList.add('textoloja')
    tamanho.textContent = pedidoDecompra.tamanho

    const quantidade = document.createElement('p'); // Corrigido: usando document.createElement
    quantidade.classList.add('textoloja')
    quantidade.textContent = pedidoDecompra.qtd

    const valor = document.createElement('p'); // Corrigido: usando document.createElement
    valor.classList.add('textoloja')
    valor.textContent = pedidoDecompra.valor

    caixaInfomacao.append(nome)
    caixaInfomacao.append(tamanho)
    caixaInfomacao.append(quantidade)
    caixaInfomacao.append(valor)

    div.append(caixaInfomacao)

    return div
}

function cancelado() {
  nomeModal.innerHTML = `<h1 id="offcanvasRightLabel">Pedido cancelado</h1>`;
  modal.innerHTML = `<p class="texto-loja">pedido foi cancelado, coloque um tamanho e uma quantidade</p>`;
}

for (let i = 0; i < btns.length; i++) {
  const nomeDoProtudo = imagem[i].getAttribute("alt");
  const caminhoDaImg = imagem[i].getAttribute("src");
  const valorDoProduto = valorDosProdutos[i];
  console.log(valorDoProduto);
  btns[i].addEventListener("click", () => {
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
    modal.append(criarElement(pedidoDecompra))
  });
}

carrinho.forEach(pedidoDecompra => {
    const tarefa = criarElement(pedidoDecompra);
    modal.append(tarefa)
});


