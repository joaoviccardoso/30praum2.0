const btns = document.querySelectorAll(".btns");
const imagem = document.querySelectorAll(".produtos");
const modal = document.querySelector(".resuldadoDaCompra");
const qtd = document.querySelectorAll(".qtd");
const tamanho = document.querySelectorAll(".tamanho");
const nomeModal = document.querySelector("#offcanvasRightLabel");
const valorDosProdutos = document.querySelectorAll(".preco");

const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

function criarElement(pedidoDecompra){
    const div = document.createElement('div');
    div.classList.add('box', 'd-flex', 'container', 'm-2')

    const img = document.createElement('img');
    img.setAttribute('src', pedidoDecompra.img);
    img.setAttribute('width', '100');
    img.setAttribute('height', '100')

    const caixaInfomacao = document.createElement('div');
    caixaInfomacao.classList.add('container', 'd-flex', 'flex-column',  'justify-content-center');

    const nome = document.createElement('p'); // Corrigido: usando document.createElement
    nome.classList.add('textoloja')
    nome.textContent = `Produto: ${pedidoDecompra.nome}`

    const tamanho = document.createElement('p'); // Corrigido: usando document.createElement
    tamanho.classList.add('textoloja')
    tamanho.textContent = `Tamanho: ${pedidoDecompra.tamanho}`

    const quantidade = document.createElement('p'); // Corrigido: usando document.createElement
    quantidade.classList.add('textoloja')
    quantidade.textContent = `Quantidade: ${pedidoDecompra.qtd}`

    const valor = document.createElement('p'); // Corrigido: usando document.createElement
    valor.classList.add('textoloja')
    valor.textContent = pedidoDecompra.valor

    const divLixeira = document.createElement('span');
    divLixeira.classList.add('d-flex', 'justify-content-end');

    const btnLixeira = document.createElement('button');
    btnLixeira.classList.add('.btn__lixeira')
    const imgBotao = document.createElement('img');
    imgBotao.setAttribute('src', '../img/trash.svg');

    btnLixeira.append(imgBotao)
    divLixeira.append(btnLixeira)

    caixaInfomacao.append(nome)
    caixaInfomacao.append(tamanho)
    caixaInfomacao.append(quantidade)
    caixaInfomacao.append(valor)
    caixaInfomacao.append(btnLixeira)

    div.append(img)
    div.append(caixaInfomacao)

    return div
}

function cancelado() {
  alert('pedido foi cancelado, coloque um tamanho e uma quantidade') 
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

btnLixeira.addEventListener('onclick', () =>{
    modal.removeChild(div)
})

