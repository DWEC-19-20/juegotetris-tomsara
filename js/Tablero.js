class Tablero {
    constructor(filas, columnas, tamañoCuadrado, ctx) {
         // inicializa el tablero todos los elementos de color WHITE		
    }

    // Es vacio si tiene el color WHITE
    esVacio = (x, y) => {}

    // Dibuja un en el canvas del color recibido
    dibujarCasilla = (x, y, color) => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.TC, y * this.TC, this.TC, this.TC);
        this.ctx.strokeStyle = "BLACK";
        this.ctx.strokeRect(x * this.TC, y * this.TC, this.TC, this.TC);
    }

    // dibujar en el canvas según los colores del tablaro
    dibujarTablero = () => {};

    get filas() {}

    set filas(fila) {}

    get columnas() {}

    set columnas(columna) {}

    //Devuelve el color del tablero en la casilla indicada
    getCasilla = (f, c) => {

    }

    //Cambiar el color del tablero en la casilla indicada
    setCasilla = (f, c, color) => {

    }

    // Eliminamos las filas que estén completas e incrementamos la puntuación
    eliminarFilasCompletas = () => {}

}