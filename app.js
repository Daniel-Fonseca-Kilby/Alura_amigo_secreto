// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
function agregarAmigo() { // Funcion para agregar un nombre a la lista de amigos
    let input = document.getElementById("amigo");
    let nuevoAmigo = input.value;
    if (nuevoAmigo) {
        amigos.push(nuevoAmigo);
        input.value = ""; // Limpiar el input después de agregar el amigo
        actualizarListaAmigos(); // Actualizar la lista donde se muestra los amigos
    } else {
        alert("El campo de nombre no puede estar vacío."); // Mostrar alerta de error si el input viene vacio
    }
}
function actualizarListaAmigos() { // Función para actualizar la lista de amigos
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}
function sortearAmigo() { // funcion para sortear un amigo de la lista
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    if (amigos.length === 0) {
        resultado.textContent = "No hay amigos en la lista para sortear.";
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];
    resultado.textContent = "El amigo sorteado es: " + amigoSorteado;
}
