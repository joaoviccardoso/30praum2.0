const btns = document.querySelectorAll('.btns');
const imagem = document.querySelectorAll('.produtos');

function btnClick(nomeDoProtudo){
    alert(`${nomeDoProtudo}, foi adicionado no carrinho de compras`)
}

for (let i = 0; i < btns.length; i++) {
    const nomeDoProtudo = imagem[i].getAttribute('alt');
    btns[i].addEventListener('click', () =>{
        btnClick(nomeDoProtudo);
    })
} 