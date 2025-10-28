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

let icon = document.querySelector('.icon');
let expandir = false;
function desplegarMenu() {
    let opcionesMenu = document.querySelectorAll('.linkMenu');
    if (!expandir) {
        icon.innerHTML = '<i class="fa-solid fa-x"></i>';
        menuPrincipal.style.zIndex = '9999';
        menuPrincipal.style.position = 'fixed';
        opcionesMenu.forEach(element => {
            element.style.display = 'block';
        })
        expandir = true;
    } else if (expandir) {
        icon.innerHTML = '<i class="fa-solid fa-bars"></i>';
        menuPrincipal.style.zIndex = 'none';
        menuPrincipal.style.height = 'auto';
        menuPrincipal.style.position = '';
        opcionesMenu.forEach(element => {
            element.style.display = 'none';
        })
        expandir = false;
    }
  
}
