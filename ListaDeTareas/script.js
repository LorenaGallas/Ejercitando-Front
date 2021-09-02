//conectar los botones a sus detectores de eventos
var agregarButton = document.getElementById("agregar--btn");
var limpiarButton = document.getElementById("limpiar--completo--btn");
var vaciarButton = document.getElementById("vaciar--btn");
var guardarButton = document.getElementById("guardar--btn");
//capturo el box de ingreso de dato y la lista
var entradaTareaBox = document.getElementById("tarea--entrada--box");
var tareaLista = document.getElementById("tarea--lista");

//cuando haya un click ejecutara la funcion correspondiente
agregarButton.addEventListener("click", agregarTareaItem);
limpiarButton.addEventListener("click", limpiarCompletoItems);
vaciarButton.addEventListener("click", vaciarBtn);
guardarButton.addEventListener("click", guardarLista);

//creo las funciones
function agregarTareaItem() {
    var itemText = entradaTareaBox.value;
    nuevaTareaItem(itemText, false);
    guardarLista();

}

function limpiarCompletoItems() {
    var completadoItems = tareaLista.getElementsByClassName("completado");

    while (completadoItems.length > 0) {
        completadoItems.item(0).remove();
    }
} //va a borrar los elementos hijos de tareaLista q tengan la clase COMPLETADO

function vaciarBtn() {
    var tareaItems = tareaLista.children;
    while (tareaItems.length > 0) {
        tareaItems.item(0).remove();
    }
}

function guardarLista() {
    var tareas = [];

    for (var i = 0; i < tareaLista.children.length; i++) {
        var tarea = tareaLista.children.item(i);

        var tareaInfo = {
            "task": tarea.innerText,
            "completado": tarea.classList.contains("completado")
        };

        tareas.push(tareaInfo);
    }

    localStorage.setItem("tareas", JSON.stringify(tareas));//stringfy convirte matrices en cadenas
}

function nuevaTareaItem(itemText, completado) {
    var tareaItem = document.createElement("li"); //crea un 'li'
    var tareaText = document.createTextNode(itemText);//crea un nodo de texto
    tareaItem.appendChild(tareaText);//coloca el tareaText dentro de tareaItem

    if (completado) {
        tareaItem.classList.add("completado");
    }

    tareaLista.appendChild(tareaItem); //si esta todo bien lo agrega a la lista
    tareaItem.addEventListener("dblclick", toogleTareaItemEstado);//evento que llama a la funcion toogleTareaItemEstado
    }

    function toogleTareaItemEstado() {
        if (this.classList.contains("completado")) {
            this.classList.remove("completado");
        } else {
            this.classList.add("completado");
        }
    }

    /*Guardarla en el almacenamiento local. 
    Hay dos partes:guardar la lista y cargarla al recargar la página.
    El almacenamiento local no puede almacenar HTML,hay q convertirlo en JavaScript puro. 
    Necesitaremos una matriz: lista de variables */
    var myArray = [];
    myArray.push("something to store");
    myArray.push("something else to store");
    alert(myArray[0]);

    /*recorrer tareaLista y agregar elementos a la matriz.
    el nombre y el estado. uso ubjetos JS*/
    var tareaInfo = {
        "task": "Thing I need to do",
        "completado": false
    };

    //cargar la lista guardada.invertir lo q se hizo al guardarla
    function cargarLista() {
        if (localStorage.getItem("tareas") != null) {
            var tareas = JSON.parse(localStorage.getItem("tareas"));
    
            for (var i = 0; i < tareas.length; i++) {
                var tarea = tareas[i];
                nuevaTareaItem(tarea.task, tarea.completado);
            }
        }
    }

    cargarLista();

