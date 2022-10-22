function time(){
    let dia = new Date()

    let h = dia.getHours()
    let m = dia.getMinutes()
    let s = dia.getSeconds()

    document.getElementById('txt').innerHTML = `${h}:${m}: ${s}`; setTimeout('time()', 500)
        

}