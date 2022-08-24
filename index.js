

class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre ;
        this.apellido = apellido ;
        this.libros =  [{titulo:"titulo1", autor:"autor1"}, {titulo:"titulo2", autor:"autor2"}];
        this.mascotas =  ["Aica" , "Draco" , "Beba" , "Piqui"];
    }     
    getFullName (){
        return `${ this.nombre}+ ${ this.apellido}`
    }
}


getFullName ()