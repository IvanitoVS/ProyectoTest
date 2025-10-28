let pregunta = document.querySelector('.pregunta');
let aOption = document.querySelector('.aOption');
let bOption = document.querySelector('.bOption');
let cOption = document.querySelector('.cOption');
let dOption = document.querySelector('.dOption');
let menuPrincipal = document.querySelector('#menuPrincipal');
let dataPreguntas= []

fetch('../t0.json')
    .then(res => res.json())
    .then(data => {
        dataPreguntas = data.preguntas;
        //console.log(data);
        pregunta.innerHTML = data.preguntas[0].id_global + ".- " + data.preguntas[0].pregunta;
        aOption.innerHTML = data.preguntas[0].opciones[0].texto;
        bOption.innerHTML = data.preguntas[0].opciones[1].texto;
        cOption.innerHTML = data.preguntas[0].opciones[2].texto;
        dOption.innerHTML = data.preguntas[0].opciones[3].texto;

        let posicion = 1;
        data.preguntas.forEach(element => {
            menuPrincipal.innerHTML += `<a href="javascript:void(0);" class="linkMenu" id='posi${posicion}' onclick='cambiarPregunta(this, posicion=${posicion} )'>Pregunta ${posicion}</a>`;
            posicion++;
        });

        
    })



function cambiarPregunta(a, posicion) {
            let posi = parseInt(posicion)-1
           
            pregunta.innerHTML = dataPreguntas[posi].id_global + ".- " + dataPreguntas[posi].pregunta;
            aOption.innerHTML = dataPreguntas[posi].opciones[0].texto;
            bOption.innerHTML = dataPreguntas[posi].opciones[1].texto;
            cOption.innerHTML = dataPreguntas[posi].opciones[2].texto;
            dOption.innerHTML = dataPreguntas[posi].opciones[3].texto;
            
            let tamanio = window.screen.width;
            if (tamanio <= 933) {
                desplegarMenu();
            }
        }