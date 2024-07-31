const btns = document.querySelectorAll('.btns');
const imagem = document.querySelectorAll('.produtos');
const modal = document.querySelector('.resuldadoDaCompra');
const qtd = document.querySelectorAll('.qtd');
const tamanho = document.querySelectorAll('.tamanho');
const nomeModal = document.querySelector('#staticBackdropLabel');

function btnClick(nomeDoProtudo, qtdEscolhida, tamanhoEscolhida){
   nomeModal.innerHTML = `<h1>Adicionado no carrinho</h1>` 
   modal.innerHTML = `<p>${nomeDoProtudo}, tamanho ${tamanhoEscolhida}, quantidade do item ${qtdEscolhida} foi adicionado no carrinho de compras</p>`
}

function cancelado(){
    nomeModal.innerHTML = `<h1>Pedido cancelado</h1>`
    modal.innerHTML = `<p>pedido foi cancelado, coloque um tamanho e uma quantidade</p>`
}

for (let i = 0; i < btns.length; i++) {
    const nomeDoProtudo = imagem[i].getAttribute('alt');
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
        btnClick(nomeDoProtudo, qtdEscolhida, tamanhoEscolhida);
    })
} 

