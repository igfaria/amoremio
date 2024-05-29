window.addEventListener('load', function(){
    let date = new Date()
    let month = date.getMonth()+1
    let year = 0
    let tempoJuntos = 0
    if(date.getDate() >= 12)
      tempoJuntos = ((month+6)/12).toFixed(1)
    else
      tempoJuntos = ((month+5)/12).toFixed(1)
    if(date.getFullYear()-2023 >= 1 && date.getDate() >= 12 && month >= 6)
      year = date.getFullYear()-2023
    else
      year = date.getFullYear()-2023-1

    document.getElementById('nossoTempo').innerHTML = `${parseFloat(year)+parseFloat(tempoJuntos)} anos`
  })