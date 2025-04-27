import Control from "./Control.js";
import Modelo from "./Modelo.js";
import Vista from "./Vista.js";

const strEnunciado = '[{"id":1, "nombre":"Marcelo", "apellido":"Luque", "edad":45, "titulo":"Ingeniero", "facultad":"UTN", "anioGraduacion":2002},{"id":2, "nombre":"Ramiro", "apellido":"Escobar", "edad":35, "titulo":"Medico", "facultad":"UBA", "anioGraduacion":2012},{"id":3, "nombre":"Facundo", "apellido":"Cairo", "edad":30, "titulo":"Abogado", "facultad":"UCA", "anioGraduacion":2017},{"id":4, "nombre":"Fernando", "apellido":"Nieto", "edad":18, "equipo":"Independiente", "posicion":"Delantero", "cantidadGoles":7},{"id":5, "nombre":"Manuel", "apellido":"Loza", "edad":20, "equipo":"Racing", "posicion":"Volante", "cantidadGoles":2},{"id":6, "nombre":"Nicolas", "apellido":"Serrano", "edad":23, "equipo":"Boca", "posicion":"Arquero", "cantidadGoles":0}]';

let vista = new Vista();
let modelo=new Modelo();
let control = new Control(vista, modelo,strEnunciado);

console.log(control.Modelo.Personas);