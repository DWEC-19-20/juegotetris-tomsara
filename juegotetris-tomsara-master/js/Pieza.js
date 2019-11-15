// las piezas y sus colores
const PIEZAS = [
    [Z, "orange"],
    [S, "cyan"],
    [T, "green"],
    [O, "grey"], 
    [L, "purple"],
    [I, "red"],
    [J, "yellow"]
];

const HUECO = "BLACK";

// La clase pieza
class Pieza {

    constructor(tetromino, color, tablero) {
        this.tetromino = tetromino;
        this.color = color;
        this.tablero = tablero;
        this.x = 4;
        this.y = -1;
        this.n = 0;
        this.activo = this.tetromino[this.n];
    }

    // rota la piezaentre las distintas formas del tetrominio
    // de debe controlar que si está muy cerca de las paredes algunas no pueden girar
    rotar = () => {

        PIEZAS[0];
        if (PIEZAS > PIEZAS[3]) {
            PIEZAS = PIEZAS[0];
        }
        PIEZAS++;
    }


    // rellena el tetromino de la pieza con su color en el canvas
    rellenar = (color) => {
       
        for (let r = 0; r < this.activo.length; r++) {
            for (let c = 0; c < this.activo.length; c++) {
                if (this.activo[r][c] == 1) {
                    this.tablero.dibujarCasilla((c + this.x), (this.y+r), color);
                }
            }
        }
    }

    // dibuja el color de una pieza
    dibujar = () => {
        this.rellenar(this.color);



    }

    // borra una pieza rellenandola de casillas blancas
    borrar = () => {
        this.rellenar(HUECO);
    }

    // mover abajo la pieza, si queda fijada, deberá obtener una nueva
    moverAbajo = () => {

        this.borrar();
        this.y++;
       
        this.dibujar();

    }

    // mover derecha la pieza hasta chocar con la pared 
    moverDerecha = () => {
        this.borrar();
        this.y++;
        this.x++;
        this.dibujar();
    }

    // mover izquierda la pieza hasta chocar con la pared 
    moverIzquierda = () => {
        this.borrar();
        this.y++;
        this.x--;
        this.dibujar();
    }

    // fijar pieza cuando choca con el suelo u otra pieza
    // hay que comprobar si se ha formado una o varias lineas para borrarlas 
    fijar = () => {}

    // Comprueba si se produce una colisión de una pieza con el suelo u otra pieza 
    colision = (x, y, pieza) => {
        if (this.y >= this.tablero.columnas) {
            this.x = Math.floor(this.x) * this.tablero.filas;
            this.color = Math.floor(this.color * PIEZAS.length);
        }
    }



}