// 1. Crear una función constructora para cada objeto.
function Paciente(nombre, historiaMedica) {
    this.nombre = nombre;
    this.historiaMedica = historiaMedica;
}

// 2. Implementar métodos getters y setters para acceder y modificar los datos de los pacientes.
Paciente.prototype.getNombre = function () {
    return this.nombre;
}

Paciente.prototype.setNombre = function (nombre) {
    this.nombre = nombre;
}

Paciente.prototype.getHistoriaMedica = function () {
    return this.historiaMedica;
}

Paciente.prototype.setHistoriaMedica = function (historiaMedica) {
    this.historiaMedica = historiaMedica;
}

// 3. Crear un método mediante la propiedad prototype para buscar los datos de los usuarios por nombre
Paciente.prototype.buscarPorNombre = function (nombre, pacientes) {
    return pacientes.filter(paciente => paciente.getNombre() === nombre);
}

// Crear otro método mediante la propiedad prototype para mostrar todos los datos de los usuarios registrados.
Paciente.prototype.mostrarTodos = function (pacientes) {
    return pacientes.map(paciente => `Nombre: ${paciente.getNombre()}, Historia Médica: ${paciente.getHistoriaMedica()}`);
}

// 4. Instanciar cada objeto utilizando la instrucción new.
let paciente1 = new Paciente("Juan", "Historia médica de Juan");
let paciente2 = new Paciente("Ana", "Historia médica de Ana");

let pacientes = [paciente1, paciente2];

// 5. Crear una función para mostrar los pacientes en el HTML.
function mostrarPacientes() {
    let pacientesDiv = document.getElementById('pacientes');
    pacientesDiv.innerHTML = '';
    let lista = document.createElement('ul');

    // Iterar sobre la lista de pacientes y agregar cada uno como un elemento de lista al HTML.
    pacientes.forEach(paciente => {
        let elemento = document.createElement('li');
        // Utilizar template literals para formatear la información del paciente.
        elemento.textContent = `Nombre: ${paciente.getNombre()}, Historia Médica: ${paciente.getHistoriaMedica()}`;
        lista.appendChild(elemento);
    });

    pacientesDiv.appendChild(lista);
}
