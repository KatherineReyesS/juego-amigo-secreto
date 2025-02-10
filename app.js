// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Función para asignar texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    let nombreUsuario = document.getElementById('amigo').value.trim(); // Obtiene el nombre ingresado y elimina espacios

    if (nombreUsuario === '') { // Verifica si el campo está vacío
        asignarTextoElemento('p', 'Por favor, ingresa un nombre válido.');
        return;
    }

    if (listaDeAmigos.includes(nombreUsuario)) { // Verifica si el nombre ya fue agregado
        asignarTextoElemento('p', 'Este nombre ya ha sido agregado.');
        return;
    }

    listaDeAmigos.push(nombreUsuario); // Agrega el nombre a la lista
    mostrarLista(); // Actualiza la lista en la pantalla
    limpiarCaja(); // Limpia el campo de entrada
    asignarTextoElemento('p', `Amigo ${nombreUsuario} agregado correctamente.`); // Muestra mensaje de éxito
}

// Función para mostrar la lista de amigos en la pantalla
function mostrarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ''; // Limpia el contenido actual

    listaDeAmigos.forEach(function(amigo) { // Recorre la lista de amigos
        let item = document.createElement('li'); // Crea un elemento de lista
        item.textContent = amigo; // Asigna el nombre del amigo al elemento
        listaHTML.appendChild(item); // Agrega el elemento a la lista en el HTML
    });
}

// Función para limpiar el campo de entrada después de agregar un nombre
function limpiarCaja() {
    document.getElementById('amigo').value = ''; // Limpia el campo de texto
}

// Función para realizar el sorteo del amigo secreto
function sortearAmigo() {
    if (listaDeAmigos.length < 2) { // Verifica que haya al menos 2 amigos
        asignarTextoElemento('p', 'Agrega al menos 2 amigos para realizar el sorteo.');
        return;
    }

    let amigosAsignados = [...listaDeAmigos]; // Copia la lista de amigos para asignaciones
    let resultado = {}; // Objeto para almacenar los resultados del sorteo

    listaDeAmigos.forEach(function(amigo) {
        let posibles = amigosAsignados.filter(a => a !== amigo); // Filtra para que un amigo no se asigne a sí mismo

        if (posibles.length === 0) { // Verifica si hay opciones disponibles
            sorteoCompleto = false; // Si no hay, el sorteo no es posible
            return;
        }

        let amigoSecreto = posibles[Math.floor(Math.random() * posibles.length)]; // Selecciona un amigo secreto aleatoriamente
        resultado[amigo] = amigoSecreto; // Asigna el amigo secreto al resultado
        amigosAsignados = amigosAsignados.filter(a => a !== amigoSecreto); // Elimina el amigo asignado de la lista
    });

        mostrarResultado(resultado); // Muestra los resultados
}

// Función para mostrar el resultado del sorteo en la pantalla
function mostrarResultado(resultado) {
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = ''; // Limpia el contenido actual

    for (let amigo in resultado) { // Recorre el objeto de resultados
        let item = document.createElement('li'); // Crea un elemento de lista
        item.textContent = `${amigo} → ${resultado[amigo]}`; // Asigna el texto con el amigo y su amigo secreto
        resultadoHTML.appendChild(item); // Agrega el elemento al HTML
    }

    asignarTextoElemento('p', 'Sorteo completado con éxito.'); // Muestra mensaje de éxito
}

