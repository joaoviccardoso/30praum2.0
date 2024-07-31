const btns = document.querySelectorAll('.btns');
const imagem = document.querySelectorAll('.produtos');
const modal = document.querySelector('.resuldadoDaCompra');

function btnClick(nomeDoProtudo){
   modal.innerHTML = `<p>${nomeDoProtudo}, foi adicionado no carrinho de compras</p>`
}

for (let i = 0; i < btns.length; i++) {
    const nomeDoProtudo = imagem[i].getAttribute('alt');
    btns[i].addEventListener('click', () =>{
        btnClick(nomeDoProtudo);
    })
} 