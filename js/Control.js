import Futbolista from "./Futbolista.js";
import Profesional from "./Profesional.js";
import * as union from "./union.js";
import Modelo from "./Modelo.js";
import Vista from "./Vista.js";

export default class Control{
    Vista;
    Modelo;
    constructor(vista,modelo,strEnunciado){
        this.Modelo = modelo;
        this.Vista = vista;
        this.cargarDatosInicio(strEnunciado)
        this.Vista = this;
    };


// Crear un array de objetos de tipo Futbolista y Profesional
cargarDatosInicio(cadena){
    let cadenaParseada = JSON.parse(cadena);
    this.Modelo.Personas = cadenaParseada.map((x)=>{
        if(x.equipo){
            return new Futbolista(x.id,x.nombre,x.apellido,x.edad,x.equipo,x.posicion,x.cantidadGoles)
        }else{
            return new Profesional(x.id,x.nombre,x.apellido,x.edad,x.titulo,x.facultad,x.anioGraduacion)
        }
    })
}

/*index form abm*/
/*
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
}*/
}