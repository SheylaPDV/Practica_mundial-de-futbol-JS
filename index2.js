console.log('===========================================================')
console.log('========= COMIENZO DE LA FASE DE ELIMINATORIAS ============')
console.log('===========================================================')
console.log('Equipos que van a participar en el playoff:')

let listaEquipos = ['Brasil', 'Ecuador', 'Japón', 'Francia', 'EEUU', 'Inglaterra', 'Argentina', 'Holanda',
    'Alemania', 'Islas Feroe', 'España', 'Jamaica', 'Portugal', 'Polonia', 'Suecia', 'Finlandia']

let ganadores = []
let perdedores = []
console.log(listaEquipos)
console.log('\n========= OCTAVOS DE FINAL ==========\n')

function borrarItemDeArray(arr, item) {
    var i = arr.indexOf(item);
    arr.splice(i, 1);
}

while (listaEquipos.length != 0) {
    // Seleccion de equipo
    var numAleatorio = Math.floor(Math.random() * listaEquipos.length) //esto me da un equipo aleatorio (por indice)
    var equipo1 = listaEquipos[numAleatorio]  //esto eme da el nombre del equipo al que corresponde el indice elegido
    borrarItemDeArray(listaEquipos, equipo1)  //esto llama a una funcionn para borrar elemento del array
    var numAleatorio2 = Math.floor(Math.random() * listaEquipos.length)  //esto me da un equipo aleatorio(por indice)
    var equipo2 = listaEquipos[numAleatorio2]  //esto eme da el nombre del equipo al que corresponde el indice elegido
    borrarItemDeArray(listaEquipos, equipo2)  //esto llama a una funcionn para borrar elemento del array

    // Seleccion de marcador
    var marcador1 = Math.floor(Math.random() * 10)
    var marcador2 = marcador1
    while (marcador1 == marcador2) {
        marcador2 = Math.floor(Math.random() * 10)
    }

    // Seleccion de ganador
    var ganador = undefined
    if (marcador1 < marcador2) {
        ganador = equipo2;
    } else {
        ganador = equipo1;
    }
    console.log(`${equipo1} ${marcador1}  -  ${marcador2} ${equipo2}-----> ${ganador}`)

    ganadores.push(ganador)

}
listaEquipos = ganadores.slice();
ganadores = []
console.log('\n================ CUARTOS DE FINAL ==================\n')

while (listaEquipos.length != 0) {
    // Seleccion de equipo
    var numAleatorio = Math.floor(Math.random() * listaEquipos.length) //esto me da un equipo aleatorio (por indice)
    var equipo1 = listaEquipos[numAleatorio]  //esto eme da el nombre del equipo al que corresponde el indice elegido
    borrarItemDeArray(listaEquipos, equipo1)  //esto llama a una funcionn para borrar elemento del array
    var numAleatorio2 = Math.floor(Math.random() * listaEquipos.length)  //esto me da un equipo aleatorio(por indice)
    var equipo2 = listaEquipos[numAleatorio2]  //esto eme da el nombre del equipo al que corresponde el indice elegido
    borrarItemDeArray(listaEquipos, equipo2)  //esto llama a una funcionn para borrar elemento del array

    // Seleccion de marcador
    var marcador1 = Math.floor(Math.random() * 10)
    var marcador2 = marcador1
    while (marcador1 == marcador2) {
        marcador2 = Math.floor(Math.random() * 10)
    }

    // Seleccion de ganador
    var ganador = undefined
    if (marcador1 < marcador2) {
        ganador = equipo2;
    } else {
        ganador = equipo1;
    }
    console.log(`${equipo1} ${marcador1}  -  ${marcador2} ${equipo2}-----> ${ganador}`)

    ganadores.push(ganador);

}

listaEquipos = ganadores.slice();
ganadores = []

console.log('\n============== SEMIFINALES ===============\n')

while (listaEquipos.length != 0) {
    // Seleccion de equipo
    var numAleatorio = Math.floor(Math.random() * listaEquipos.length) //esto me da un equipo aleatorio (por indice)
    var equipo1 = listaEquipos[numAleatorio]  //esto eme da el nombre del equipo al que corresponde el indice elegido
    borrarItemDeArray(listaEquipos, equipo1)  //esto llama a una funcionn para borrar elemento del array
    var numAleatorio2 = Math.floor(Math.random() * listaEquipos.length)  //esto me da un equipo aleatorio(por indice)
    var equipo2 = listaEquipos[numAleatorio2]  //esto eme da el nombre del equipo al que corresponde el indice elegido
    borrarItemDeArray(listaEquipos, equipo2)  //esto llama a una funcionn para borrar elemento del array

    // Seleccion de marcador
    var marcador1 = Math.floor(Math.random() * 10)
    var marcador2 = marcador1
    while (marcador1 == marcador2) {
        marcador2 = Math.floor(Math.random() * 10)
    }

    // Seleccion de ganador
    var ganador = undefined
    if (marcador1 < marcador2) {
        ganador = equipo2;
        perdedores.push(equipo1)
    } else {
        ganador = equipo1;
        perdedores.push(equipo2)
    }
    console.log(`${equipo1} ${marcador1}  -  ${marcador2} ${equipo2}-----${ganador}`)

    ganadores.push(ganador)

}
console.log('\n============= TERCER Y CUARTO PUESTO ==============\n')
while (perdedores.length != 0) {
    // Seleccion de equipo
    var numAleatorio = Math.floor(Math.random() * perdedores.length) //esto me da un equipo aleatorio (por indice)
    var equipo1 = perdedores[numAleatorio]  //esto eme da el nombre del equipo al que corresponde el indice elegido
    borrarItemDeArray(perdedores, equipo1)  //esto llama a una funcionn para borrar elemento del array
    var numAleatorio2 = Math.floor(Math.random() * perdedores.length)  //esto me da un equipo aleatorio(por indice)
    var equipo2 = perdedores[numAleatorio2]  //esto eme da el nombre del equipo al que corresponde el indice elegido
    borrarItemDeArray(perdedores, equipo2)  //esto llama a una funcionn para borrar elemento del array

    // Seleccion de marcador
    var marcador1 = Math.floor(Math.random() * 10)
    var marcador2 = marcador1
    while (marcador1 == marcador2) {
        marcador2 = Math.floor(Math.random() * 10)
    }

    // Seleccion de ganador
    var ganador = undefined
    if (marcador1 < marcador2) {
        ganador = equipo2;
    } else {
        ganador = equipo1;
    }

    console.log(`${equipo1} ${marcador1}  -  ${marcador2} ${equipo2}-----${ganador}`)

}
listaEquipos = ganadores.slice();
ganadores = []


console.log('\n========== FINAL ==========\n')

while (listaEquipos.length != 0) {
    // Seleccion de equipo
    var numAleatorio = Math.floor(Math.random() * listaEquipos.length) //esto me da un equipo aleatorio (por indice)
    var equipo1 = listaEquipos[numAleatorio]  //esto eme da el nombre del equipo al que corresponde el indice elegido
    borrarItemDeArray(listaEquipos, equipo1)  //esto llama a una funcionn para borrar elemento del array
    var numAleatorio2 = Math.floor(Math.random() * listaEquipos.length)  //esto me da un equipo aleatorio(por indice)
    var equipo2 = listaEquipos[numAleatorio2]  //esto eme da el nombre del equipo al que corresponde el indice elegido
    borrarItemDeArray(listaEquipos, equipo2)  //esto llama a una funcionn para borrar elemento del array

    // Seleccion de marcador
    var marcador1 = Math.floor(Math.random() * 10)
    var marcador2 = marcador1
    while (marcador1 == marcador2) {
        marcador2 = Math.floor(Math.random() * 10)
    }

    // Seleccion de ganador
    var ganador = undefined
    if (marcador1 < marcador2) {
        ganador = equipo2;
    } else {
        ganador = equipo1;
    }

    console.log(`${equipo1} ${marcador1}  -  ${marcador2} ${equipo2}-----> ${ganador}`)

}

listaEquipos = ganadores.slice();
console.log('\n===========================\n');
console.log(`¡${ganador} es el campeón del mundo!`)
console.log('\n===========================\n')









