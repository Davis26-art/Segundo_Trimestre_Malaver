class persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar() {
        return `Hola, soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
    }

    cumpleEdad() {
        this.edad++;
        return this.edad;
    }

};

const persona1 = new persona('Jose', 'Santiago', 24);

console.log(persona1.saludar());
console.log(persona1.cumpleEdad());