function gameOver(){
    clearInterval(cronometro)
    document.querySelector("#gameOver").classList.add('modalVisible');;
}

function timeOver(){
    document.querySelector("#timeOver").classList.add('modalVisible');
    ticToc.pause()
}