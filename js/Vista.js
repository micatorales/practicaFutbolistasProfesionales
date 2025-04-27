export default class Vista{
    FormDatos;
    FormAbm;
    constructor(){
        this.FormDatos={
            form:this.$("FormDatos"),
            filtro:this.$("Filtro"),
            txt_Promedio:this.$("edadPromedio"),
            btnCalcular:this.$("btn_Calcular"),
            checkBoxes:{
                chkId:this.$("ChkId"),
                chkNombre:this.$("ChkNombre"),
                chkApellido:this.$("ChkApellido"),
                chkEdad:this.$("ChkEdad"),
                chkEquipo:this.$("ChkEquipo"),
                chkPosicion:this.$("ChkCantGoles"),
                chkCantGoles:this.$("ChkTitulo"),
                chkTitulo:this.$("ChkTitulo"),
                chkFacultad:this.$("ChkFalcultad"),
                chkAnioGrado:this.$("ChkAnioGrado")

            }

        }
    }
    $(id){
        return getElementById(id)
    }

}