const modoClaro = document.querySelector('#modo__claro');
const elemento = document.querySelector('body');
const navBar = document.querySelector('nav')

modoClaro.addEventListener('click', () =>{
    const modo = modoClaro.checked ? 'light' : 'dark'
    elemento.setAttribute("data-bs-theme", modo)
    if (navBar.classList.contains('bg-dark')) {
        navBar.classList.remove('bg-dark');
        navBar.classList.add('bg-light');
    } else {
        navBar.classList.remove('bg-light');
        navBar.classList.add('bg-dark');
    }
})