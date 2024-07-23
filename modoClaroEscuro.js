const modoClaro = document.querySelector('#modo__claro');
const elemento = document.querySelector('body');
const navBar = document.querySelector('nav');
const sol = document.querySelector('.bi-sun');
const lua = document.querySelector('.bi-moon');
const imgModoClaroEscuro = document.querySelector('.modoClaroEscuro');

console.log(sol)

modoClaro.addEventListener('click', () =>{
    const modo = modoClaro.checked ? 'light' : 'dark'
    elemento.setAttribute("data-bs-theme", modo)

    if (navBar.classList.contains('bg-dark')) {
        navBar.classList.remove('bg-dark');
        navBar.classList.add('bg-light');
        sol.classList.add('d-none');
        lua.classList.remove('d-none')
        

    } else {
        navBar.classList.remove('bg-light');
        navBar.classList.add('bg-dark');
        sol.classList.remove('d-none');
        lua.classList.add('d-none')
     
    }
})