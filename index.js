class Usuario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre ;
        this.apellido = apellido ;
        this.libros = [];
        this.mascotas = [];

    }  
    
    getFullName(){ 
        return (`nombre completo: ${this.nombre}  ${this.apellido}`)

    };

    addMascotas(mascota){
        this.mascotas.push(mascota)
        
    };

    countMascotas(){
        return (this.mascotas.length)
    }

    addBook(titulo, autor){
        this.libros.push([{titulo, autor}])
    }

    getBookName() {

        return this.libros.map(object =>{
            return (object.titulo);
        }); 

           

    } 

    
};


const persona = new Usuario ("Fede", "Romero")

console.log (persona.getFullName())

persona.addMascotas("Draco")
persona.addMascotas("Aica")
persona.addMascotas("Beba")
persona.addMascotas("Piqui")

console.log (persona.mascotas)

console.log (persona.countMascotas())

persona.addBook("The Lord of the Rings" , "J. R. R. Tolkien")
persona.addBook("El poder de los hábitos" , "Charles Duhigg")

console.log(persona.libros)


console.log(persona.getBookName())