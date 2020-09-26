let dataElement = document.querySelector('#data');
let date = new Date();
dataElement.innerHTML = date.toLocaleDateString('pt-Br');

var horaElement = document.querySelector('#hora');
    setInterval(function() {
        horaElement.innerHTML = new Date().toLocaleTimeString('pt-Br')
    }, 1000)
horaElement.innerHTML = date.toLocaleTimeString('pt-Br');