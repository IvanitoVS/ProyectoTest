let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');
let seleccion;
function seleccionado(boton) {
    if (boton === a) {
        boton.style.backgroundColor = "pink";
        b.style.backgroundColor = "white";
        c.style.backgroundColor = "white";
        d.style.backgroundColor = "white";
        seleccion = aOption;
    }
        if (boton === b) {
        boton.style.backgroundColor = "pink";
        a.style.backgroundColor = "white";
        c.style.backgroundColor = "white";
        d.style.backgroundColor = "white";
        seleccion = bOption;
    }
        if (boton === c) {
        boton.style.backgroundColor = "pink";
        a.style.backgroundColor = "white";
        b.style.backgroundColor = "white";
        d.style.backgroundColor = "white";
        seleccion = cOption;
    }
        if (boton === d) {
        boton.style.backgroundColor = "pink";
        a.style.backgroundColor = "white";
        b.style.backgroundColor = "white";
        c.style.backgroundColor = "white";
        seleccion = dOption;
    }
}

