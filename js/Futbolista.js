
import Persona from "./Persona.js";

export default class Futbolista extends Persona {
    constructor(id, nombre, apellido, edad, equipo, posicion, cantGoles) {
        super(id, nombre, apellido, edad); 
        this.equipo=equipo;
        this.posicion=posicion;
        this.cantGoles=cantGoles;
    }

    setEquipo(equipo) {
        try {
            if (equipo.length < 3 || equipo.length > 20 || equipo === "") {
                throw new Error("El equipo debe tener al menos 3 caracteres ni más de 20 caracteres y no puede estar vacío");
            }
        } catch (e) {
            console.log(e.message);
        }
        this.equipo = equipo;
    }

    setPosicion(posicion) {
        try {
            if (posicion.length < 3 || posicion.length > 20 || posicion === "") {
                throw new Error("La posición debe tener al menos 3 caracteres ni más de 20 caracteres y no puede estar vacío");
            }
        } catch (e) {
            console.log(e.message);
        }
        this.posicion = posicion;
    }

    setCantGoles(cantGoles) {
        try {
            if (cantGoles < 0 || isNaN(cantGoles)) {
                throw new Error("La cantidad de goles debe ser un número mayor o igual a 0. Debe ser un número entero");
            }
        } catch (e) {
            console.log(e.message);
        }
        this.cantGoles = cantGoles;
    }

    // Métodos getter
    getEquipo() {
        return this.equipo;
    }

    getPosicion() {
        return this.posicion;
    }

    getCantGoles() {
        return this.cantGoles;
    }


    toString() {
        return `${super.toString()}, Equipo: ${this.getEquipo()}, Posición: ${this.getPosicion()}, Cantidad de Goles: ${this.getCantGoles()}`;
    }


    parseJSON() {
        return `ID: ${this.getId()}, Nombre: ${this.getNombre()}, Apellido: ${this.getApellido()}, Edad: ${this.getEdad()}, Equipo: ${this.getEquipo()}, Posición: ${this.getPosicion()}, Cantidad de Goles: ${this.getCantGoles()}`;
    }
}