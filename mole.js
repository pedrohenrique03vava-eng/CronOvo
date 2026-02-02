function inicio(){
    window.location.href = "http://127.0.0.1:5500/index.html"
}
let tempo = 360
let tempoInicial = 360
let intervalo = null
let display = document.getElementById("display")
let alarme = document.getElementById("alarme")
let modal = document.getElementById("modal")
function start(){
    if(intervalo)return;

    intervalo  = setInterval(() =>{
        if(tempo >0){
            tempo --;
            atualizarTempo()
        }else{
             clearInterval(intervalo)
             intervalo = null
            if(!modal.showModal()){
                modal.showModal()
            }
        }
    },1000)
}
function stop(){
    clearInterval(intervalo)
    intervalo = null

    tempo = tempoInicial
    atualizarTempo()

}
function atualizarTempo(){
    let min = Math.floor(tempo / 60);
    let seg = tempo % 60;
    display.textContent = `${min}:${seg < 10 ? "0" + seg : seg}`;
}
 function fecharModal(){
    modal.close()
 }