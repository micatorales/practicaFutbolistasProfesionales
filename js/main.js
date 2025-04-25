import Futbolista from "./Futbolista.js";
import Profesional from "./Profesional.js";
import * as union from "./union.js";

// Crear un array de objetos de tipo Futbolista y Profesional
const registros = '[{"id":1, "nombre":"Marcelo", "apellido":"Luque", "edad":45, "titulo":"Ingeniero", "facultad":"UTN", "añoGraduacion":2002},{"id":2, "nombre":"Ramiro", "apellido":"Escobar","edad":35, "titulo":"Medico", "facultad":"UBA", "añoGraduacion":2012},{"id":3, "nombre":"Facundo", "apellido":"Cairo", "edad":30, "titulo":"Abogado", "facultad":"UCA", "añoGraduacion":2017},{"id":4, "nombre":"Fernando", "apellido":"Nieto", "edad":18, "equipo":"Independiente", "posicion":"Delantero", "cantidadGoles":7},{"id":5, "nombre":"Manuel", "apellido":"Loza", "edad":20, "equipo":"Racing", "posicion":"Volante", "cantidadGoles":2},{"id":6, "nombre":"Nicolas", "apellido":"Serrano", "edad":23, "equipo":"Boca", "posicion":"Arquero", "cantidadGoles":0}]'

const registrosJSON = JSON.parse(registros);

const arrayFutbolistas = registrosJSON.filter(f=>f.equipo);
const arrayProfesionales = registrosJSON.filter(p=>p.titulo);
const arrayPersonas = agregarClase();
console.log(arrayPersonas);

selectTipo();

/*form datos:*/
function agregarClase(){
    const aux=[];
    arrayProfesionales.forEach((profesional) => {
        let nuevoProfesional = new Profesional(profesional.id, profesional.nombre, profesional.apellido, profesional.edad, profesional.titulo, profesional.facultad, profesional.añoGraduacion);
        aux.push(nuevoProfesional);
    });
    arrayFutbolistas.forEach((futbolista) => {
        let nuevoFutbolista = new Futbolista(futbolista.id, futbolista.nombre, futbolista.apellido, futbolista.edad, futbolista.equipo, futbolista.posicion, futbolista.cantidadGoles);
        aux.push(nuevoFutbolista);
    });
    return aux;
}

/*index form abm*/

function selectTipo(){
    document.addEventListener('DOMContentLoaded', function () {
        const tipoSelect = document.getElementById('tipo');
        const camposFutbolista = document.querySelectorAll('.Futbolista');
        const camposProfesionales = document.querySelectorAll('.Profesionales');
    
        tipoSelect.addEventListener('change', function () {
        const tipo = tipoSelect.value;
    
        if (tipo === 'Futbolista') {
            mostrarCampos(camposFutbolista);
            ocultarCampos(camposProfesionales);
        } else if (tipo === 'Profesionales') {
            mostrarCampos(camposProfesionales);
            ocultarCampos(camposFutbolista);
        }
        });
    
        function mostrarCampos(campos) {
            campos.forEach(campo => campo.classList.remove('oculto'));
        }
    
        function ocultarCampos(campos) {
            campos.forEach(campo => campo.classList.add('oculto'));
        }
    });
}
