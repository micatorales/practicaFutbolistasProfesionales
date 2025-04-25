import Futbolista from "./Futbolista.js";
import Profesional from "./Profesional.js";

function datosPersona(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    return {nombre, apellido, edad};
}

function altaFutbolista(){
    let {nombre, apellido, edad} = datosPersona();
    let equipo = document.getElementById("equipo").value;
    let posicion = document.getElementById("posicion").value;
    let cantidadGoles = document.getElementById("cantidadGoles").value;
    return new Futbolista(nombre, apellido, edad, equipo, posicion, cantidadGoles);
}
function altaProfesional(){
    let {nombre, apellido, edad} = datosPersona();
    let titulo = document.getElementById("titulo").value;
    let facultad = document.getElementById("facultad").value;
    let anioGraduacion = document.getElementById("anioGraduacion").value;
    return new Profesional(nombre, apellido, edad, titulo, facultad, anioGraduacion);
}
function buscarPersona(idBuscado, registros){
    let id=0;
    while (id < registros.length) {
        if (registros[id].id === idBuscado) {
            return registros[id];
        }
        id++;
    }
    return null;
}
function bajaPersona(idBuscado,registros){
    let persona = buscarPersona(idBuscado, registros);
    if (persona!=null){
        let index = registros.indexOf(persona);
        registros.splice(index, 1);
        console.log("Persona eliminada: " + persona.toString());
        return true
    }
    else{
        console.log("Persona no encontrada");
        return false;
    }
}
function modificarPersona(idBuscado, registros){
    let modificacion = false;
    let persona = buscarPersona(idBuscado, registros);
    if (persona!=null){
        let index = registros.indexOf(persona);
        let {nombre, apellido, edad} = datosPersona();
        let equipo = document.getElementById("equipo").value;
        let posicion = document.getElementById("posicion").value;
        let cantidadGoles = document.getElementById("cantidadGoles").value;
        persona.setNombre(nombre);
        persona.setApellido(apellido);
        persona.setEdad(edad);
    }
        if(persona instanceof Futbolista){
            let futbolista = persona;
            let equipo = document.getElementById("equipo").value;
            let posicion = document.getElementById("posicion").value;
            let cantidadGoles = document.getElementById("cantidadGoles").value;
            futbolista.setEquipo(equipo);
            futbolista.setPosicion(posicion);
            futbolista.setCantGoles(cantidadGoles);
            console.log("Futbolista modificado: " + futbolista.toString());
            modificacion = true;
        }
        else if(persona instanceof Profesional){
            let profesional = persona;
            let titulo = document.getElementById("titulo").value;
            let facultad = document.getElementById("facultad").value;
            let anioGraduacion = document.getElementById("anioGraduacion").value;
            profesional.setTitulo(titulo);
            profesional.setFacultad(facultad);
            profesional.setAnioGraduacion(anioGraduacion);
            modificacion = true;
        }
    else{
        console.log("Persona no encontrada");
        }
    return modificacion;
}

