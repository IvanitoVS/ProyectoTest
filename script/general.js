let pregunta = document.querySelector('.pregunta');
let aOption = document.querySelector('.aOption');
let bOption = document.querySelector('.bOption');
let cOption = document.querySelector('.cOption');
let dOption = document.querySelector('.dOption');
fetch('../t0.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        pregunta.innerHTML = data.preguntas[0].id_global + ".- " + data.preguntas[0].pregunta;
        aOption.innerHTML = data.preguntas[0].opciones[0].texto;
        bOption.innerHTML = data.preguntas[0].opciones[1].texto;
        cOption.innerHTML = data.preguntas[0].opciones[2].texto;
        dOption.innerHTML = data.preguntas[0].opciones[3].texto;
    })



