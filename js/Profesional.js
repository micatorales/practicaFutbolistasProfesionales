import Persona from "./Persona.js";

export default class Profesional extends Persona {
    static MIN_ANIO_GRADUACION = 1900;
    static MAX_ANIO_GRADUACION = 2025;
    constructor(id, nombre, apellido, edad, titulo, facultad, anioGraduacion) {
        super(id, nombre, apellido, edad);
        this.titulo=titulo;
        this.facultad=facultad;
        this.anioGraduacion=anioGraduacion;

    }

    setTitulo(titulo) {
        try {
            if (titulo.length < 3 || titulo.length > 20 || titulo === "") {
                throw new Error("El titulo debe tener al menos 3 caracteres ni más de 20 caracteres y no puede estar vacío");
            }
            this.titulo = titulo;
        } catch (e) {
            console.log(e.message);
        }
    }

    setFacultad(facultad) {
        try {
            if (facultad.length < 3 || facultad.length > 20 || facultad === "") {
                throw new Error("La facultad debe tener al menos 3 caracteres ni más de 20 caracteres y no puede estar vacío");
            }
            this.facultad = facultad;
        } catch (e) {
            console.log(e.message);
        }
    }

    setAnioGraduacion(anioGraduacion) {
        try {
            if (anioGraduacion < Profesional.MIN_ANIO_GRADUACION || anioGraduacion > Profesional.MAX_ANIO_GRADUACION || isNaN(anioGraduacion)) {
                throw new Error("El año de graduación debe ser un número entre 1900 y 2023. Debe ser un número entero");
            }
            this.anioGraduacion = anioGraduacion;
        } catch (e) {
            console.log(e.message);
        }
    }

    getTitulo() {
        return this.titulo;
    }

    getFacultad() {
        return this.facultad;
    }

    getAnioGraduacion() {
        return this.anioGraduacion;
    }

    toString() {
        return `${super.toString()}, Titulo: ${this.getTitulo()}, Facultad: ${this.getFacultad()}, Año de Graduación: ${this.getAnioGraduacion()}`;
    }

    parseJSON() {
        return `ID: ${this.getId()}, Nombre: ${this.getNombre()}, Apellido: ${this.getApellido()}, Edad: ${this.getEdad()}, Titulo: ${this.getTitulo()}, Facultad: ${this.getFacultad()}, Año de Graduación: ${this.getAnioGraduacion()}`;
    }
}