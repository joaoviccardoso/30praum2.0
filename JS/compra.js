const btns = document.querySelectorAll('.btns');
const imagem = document.querySelectorAll('.produtos');
const modal = document.querySelector('.resuldadoDaCompra');
const qtd = document.querySelectorAll('.qtd');
const tamanho = document.querySelectorAll('.tamanho');
const nomeModal = document.querySelector('#offcanvasRightLabel');
const valorDosProdutos = document.querySelectorAll('.preco');


function btnClick(nomeDoProtudo, qtdEscolhida, tamanhoEscolhida, caminhoDaImg, valorDoProduto){
   nomeModal.innerHTML = `<h1>Adicionado no carrinho</h1>` 
   modal.innerHTML = `
    <div class="box d-flex container">
        <img src="${caminhoDaImg}" width="100" height="100"/>
        <div class='container d-flex flex-column  justify-content-center'>
            <p class="texto-loja">${nomeDoProtudo}</p>
            <p class="texto-loja">Tamanho ${tamanhoEscolhida}</p> 
            <p class="texto-loja">Quantidade ${qtdEscolhida}</p>
            ${valorDoProduto.outerText}
        </div>
    </div>        
   `
}

function cancelado(){
    nomeModal.innerHTML = `<h1 id="offcanvasRightLabel">Pedido cancelado</h1>`
    modal.innerHTML = `<p class="texto-loja">pedido foi cancelado, coloque um tamanho e uma quantidade</p>`
}

for (let i = 0; i < btns.length; i++) {
    const nomeDoProtudo = imagem[i].getAttribute('alt');
    const caminhoDaImg = imagem[i].getAttribute('src');
    const valorDoProduto = valorDosProdutos[i];
    btns[i].addEventListener('click', () =>{
        const qtdEscolhida = qtd[i].value;
        if (qtdEscolhida == "") {
            cancelado();
            return
        }
        const tamanhoEscolhida = tamanho[i].value;
        if (tamanhoEscolhida == "Tamanho") {
            cancelado();
            return
        }
        btnClick(nomeDoProtudo, qtdEscolhida, tamanhoEscolhida, caminhoDaImg, valorDoProduto);
    })
} 

