
export default class Persona{
    static contador=0;
    constructor(id,nombre,apellido,edad){
        this.id = Persona.contador++;
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    }

    set setNombre(nombre){
        try{
            if(nombre.length < 3 || nombre.length > 20  || nombre === ""){
                throw new Error("El nombre debe tener al menos 3 caracteres ni mas de 20 caracteres y no puede estar vacio");
            }
        }catch(e){
            console.log(e.message);
        }
        this.nombre = nombre;
    }
    set setApellido(apellido){
        try{
            if(apellido.length < 3 || apellido.length > 20  || apellido === ""){
                throw new Error("El apellido debe tener al menos 3 caracteres ni mas de 20 caracteres y no puede estar vacio");
            }
        }catch(e){
            console.log(e.message);
        }
        this.apellido = apellido;
    }
    set setEdad(edad){
        try{
            if(edad < 0 || edad > 120 || isNaN(edad)){
                throw new Error("La edad debe ser un numero entre 0 y 120. Debe ser un numero entero");
            }
        }catch(e){
            console.log(e.message);
        }
        this.edad = edad;
    }
    get getNombre(){
        return this.nombre;
    }
    get getApellido(){
        return this.apellido;
    }
    get getEdad(){
        return this.edad;
    }
    get getId(){
        return this.id;
    }
    toString(){
        return `Nombre: ${this.getNombre}, Apellido: ${this.getApellido}, Edad: ${this.getEdad}, ID: ${this.getId}`;
    }
    parseJSON(){
        return `ID: ${this.getId()}, Nombre: ${this.getNombre()}, Apellido: ${this.getApellido()}, Edad: ${this.getEdad()}`;
    }
}