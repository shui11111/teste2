const nao = window.document.getElementById("opcyes")
const sim = window.document.getElementById("opcNo")
const fundo = window.document.getElementById("area")
const resp = window.document.getElementById("textinho")

sim.addEventListener("mouseenter", entrar)
let estado = -1

function entrar(){
    estado++
    if (estado == 0){
        nao.style.transform="translate(+95px)"
        sim.style.transform="translate(130px, -150px)"
    }
    if (estado == 1){
        sim.style.transform="translate(130px, +150px)"
    }
    if (estado == 2){
        sim.style.transform="translate(-325px, +150px)"
    }
    if (estado == 3){
        sim.style.transform="translate(-325px, -150px)"
    }
    if (estado == 4){
        sim.style.transform="translate(+135px, +150px)"
    }
    if (estado == 5){
        sim.style.transform="translate(+135px, -150px)"
    }
    if (estado == 6){
        sim.style.transform="translate(-325px, +150px)"
    }
    if (estado == 7){
        sim.style.transform="translate(-325px, -150px)"
        estado = -1
    }
}

nao.addEventListener("click", clicar)

function clicar(){
    resp.innerHTML ="Pois foi o que eu pensei!!"
    nao.style.transform="translate(0px)"
    sim.style.transform="translate(0px, 0px)"

    resp.style.opacity= 1;

    setTimeout(function(){
        resp.style.opacity = 0;
      }, 3000 )
    
}
