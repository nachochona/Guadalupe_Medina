const navBar = document.querySelector('.navBar');
const abrirMenú = document.getElementById('abrirMenú');
const cerrarMenú = document.getElementById('cerrarMenú');

abrirMenú.addEventListener('click', ()=>{
    navBar.classList.add('visible');
    console.log("Clase 'VISIBLE' agregada");
});

cerrarMenú.addEventListener('click', ()=>{
    navBar.classList.remove('visible');
    console.log("Clase 'VISIBLE' removida");
});



// window.addEventListener("scroll", function(){
//     let header = document.querySelector("header");
//     header.classList.toogle('scroll',window.scrollY>0);
// })

const header = document.querySelector("header");

window.onscroll = function(){
    if(window.pageYOffset >=10){
        header.classList.add("scroll")
        console.log("Funciona el scroll")
    }
    else{
        header.classList.remove("scroll")
    }
}
