//Define class padre

class Propietario {
    constructor(nombre, direccion, telefono) {
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }

    get getNombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get getTelefono() {
        return this._telefono;
    }

    set telefono(value) {
        this._telefono = value;
    }

    get getDireccion() {
        return this._direccion;
    }

    set direccion(value) {
        this._direccion = value;
    }

    dueñoMascota() {
        return `El nombre del dueño es: ${this._nombre}.<br>El domicilio es: ${this._direccion}.<br>El teléfono es: ${this._telefono}.`
    }
}

//Define clase hija 1

class Animal extends Propietario {
    constructor(nombre, direccion, telefono, tipo) {
        super(nombre, direccion, telefono)
        this._tipo;
    }

    get getTipo() {
        return this._tipo;
    }

    set tipo(value) {
        this._tipo = value;
    }

    tipoAnimal() {
        return `El tipo de animal es un: ${this._tipo}`
    }
}

//Define clase hija 2

class Mascota extends Animal {
    constructor(nombre, direccion, telefono, tipo, nombreAnimal, enfermedad) {
        super(nombre, direccion, telefono, tipo)
        this._nombreAnimal;
        this._enfermedad;
    }

    get getNombre() {
        return this._nombreAnimal;
    }

    set nombreAnimal(value) {
        this._nombreAnimal = value;
    }

    get getEnfermedad() {
        return this._enfermedad;
    }

    set enfermedad(value) {
        this._enfermedad = value;
    }

    nombrePaciente() {
        return `El nombre de la mascota es: ${this._nombreAnimal}. Se atiende por: ${this._enfermedad}`
    }
}

/* 
Prueba la construcción del objeto

const mascotaUno = new Mascota();
console.log(mascotaUno);
mascotaUno.nombre = "Frane";
mascotaUno.direccion = "Calle Falsa 123";
mascotaUno.telefono = 931245678;
mascotaUno.tipo = "Conejo";
mascotaUno.nombreAnimal = "Kion";
mascotaUno.enfermedad = "Cualquiera";
console.log(mascotaUno);
console.log(mascotaUno.tipoAnimal());
 */

//Llamado al formulario
const formulario = document.querySelector('#formulario');
const inputPropietario = document.querySelector('#propietario');
const inputTelefono = document.querySelector('#telefono');
const inputDireccion = document.querySelector('#direccion');
const inputNombreMascota = document.querySelector('#nombreMascota');
const inputTipo = document.querySelector('#tipo');
const inputEnfermedad = document.querySelector('#enfermedad');
const pintarResultado = document.querySelector('#resultado');

//Add event al formulario

formulario.addEventListener('submit', (event) => {

    event.preventDefault();


    //Instancia objeto

    if (inputTipo.value == "perro") {

        const perro = new Mascota();

        perro.nombre = inputPropietario.value;
        perro.direccion = inputDireccion.value;
        perro.telefono = inputTelefono.value;
        perro.tipo = inputTipo.value;
        perro.nombreAnimal = inputNombreMascota.value;
        perro.enfermedad = inputEnfermedad.value

        console.log(perro)

        pintarResultado.innerHTML += `
        <ul>
            <li>${perro.dueñoMascota()}</li>
            <li>${perro.tipoAnimal()} | ${perro.nombrePaciente()}</li>
        </ul>
        `
    } else if (inputTipo.value == "gato") {
        const gato = new Mascota();

        gato.nombre = inputPropietario.value;
        gato.direccion = inputDireccion.value;
        gato.telefono = inputTelefono.value;
        gato.tipo = inputTipo.value;
        gato.nombreAnimal = inputNombreMascota.value;
        gato.enfermedad = inputEnfermedad.value

        console.log(gato)

        pintarResultado.innerHTML += `
        <ul>
            <li>${gato.dueñoMascota()}</li>
            <li>${gato.tipoAnimal()} | ${gato.nombrePaciente()}</li>
        </ul>
        `
    } else {
        const conejo = new Mascota();

        conejo.nombre = inputPropietario.value;
        conejo.direccion = inputDireccion.value;
        conejo.telefono = inputTelefono.value;
        conejo.tipo = inputTipo.value;
        conejo.nombreAnimal = inputNombreMascota.value;
        conejo.enfermedad = inputEnfermedad.value

        console.log(conejo)

        pintarResultado.innerHTML += `
        <ul>
            <li>${conejo.dueñoMascota()}</li>
            <li>${conejo.tipoAnimal()} | ${conejo.nombrePaciente()}</li>
        </ul>
        `
    }
});







/*     const nuevaMascota = new Mascota()

    nuevaMascota.nombre = inputPropietario.value;
    nuevaMascota.direccion = inputDireccion.value;
    nuevaMascota.telefono = inputTelefono.value;
    nuevaMascota.tipo = inputTipo.value;
    nuevaMascota.nombreAnimal = inputNombreMascota.value;
    nuevaMascota.enfermedad = inputEnfermedad.value; */


// console.log(nuevaMascota);

// pintarResultado.innerHTML += `
// <ul>
//     <li>${nuevaMascota.dueñoMascota()}</li>
//     <li>${nuevaMascota.tipoAnimal()} | ${nuevaMascota.nombrePaciente()}</li>
// </ul>
// `