const btnsDeCompraDosIngressos = document.querySelectorAll('.btns_shows');
const cidadesDosShows = document.querySelectorAll('.cidade__show');
const precosDosIngressos = document.querySelectorAll('.preco__shows');
const cantoresDosShows = document.querySelectorAll('.cantores');

btnsDeCompraDosIngressos.forEach(btn => btn.addEventListener('click', btnClick))

function btnClick(){
    const elementoDoBtnClick = document.getElementById(this.id)
    console.log(elementoDoBtnClick)
}