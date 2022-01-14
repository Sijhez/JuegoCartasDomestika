function gameOver(){
    clearInterval(cronometro)
    document.querySelector("#gameOver").style.visibility="visible";
}

function timeOver(){
    document.querySelector("#timeOver").style.visibility="visible";
}