const btnsDeCompraDosIngressos = document.querySelectorAll('.btns_shows');
const cidadesDosShows = document.querySelectorAll('.cidade__show');
const precosDosIngressos = document.querySelectorAll('.preco__shows');
const cantoresDosShows = document.querySelectorAll('.cantores');

const carrinhoShows = [];

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
    
    console.log(carrinhoShows)
}