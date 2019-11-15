class Tablero {


    constructor(filas, columnas, tamañoCuadrado, ctx) {
        // inicializa el tablero todos los elementos de color WHITE
        this._filas = filas;
        this._columnas = columnas;
        this.TC = tamañoCuadrado;
        this.ctx = ctx;
        this.tablero = [];
        this.esVacio(this.filas, this.columnas);

    }

    // Es vacio si tiene el color WHITE
    esVacio = (x, y) => {
        for (let r = 0; r < x; r++) {
            this.tablero[r] = [];
            for (let c = 0; c < y; c++) {
                this.tablero[r][c] = HUECO; //COLOR DEL FONDO
            }
        }
    }

    // Dibuja un en el canvas del color recibido
    dibujarCasilla = (x, y, color) => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.TC, y * this.TC, this.TC, this.TC);
        this.ctx.strokeStyle = "RED"; //COLOR DE LAS LINEAS DE LAS CELDAS
        this.ctx.strokeRect(x * this.TC, y * this.TC, this.TC, this.TC);
    }

    // dibujar en el canvas según los colores del tablaro
    dibujarTablero = () => {

        for (let r = 0; r < this.filas; r++) {

            for (let c = 0; c < this.columnas; c++) {

                this.dibujarCasilla(c, r, this.tablero[r][c]);
            }
        }
    };

    get filas() {
        return this._filas;
    }

    set filas(fila) {
        this.filas = fila
    }

    get columnas() {
        return this._columnas
    }

    set columnas(columna) {
        this.columnas = columna
    }

    //Devuelve el color del tablero en la casilla indicada
    getCasilla = (f, c) => {
        this.dibujarCasilla(f, c);
    }

    //Cambiar el color del tablero en la casilla indicada
    setCasilla = (f, c, color) => {
        this.dibujarCasilla(f, c);
    }

    // Eliminamos las filas que estén completas e incrementamos la puntuación
    eliminarFilasCompletas = () => {}

}