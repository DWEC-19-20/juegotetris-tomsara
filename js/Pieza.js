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

const HUECO="white";


// La clase pieza
class Pieza {

    constructor(tetromino, color, tablero) {
        // propiedades numeroForma, tetrominioActual, posición x e y en el canvas  	
        this._tetromino=tetromino;
        this._color=color;
        this._tablero=tablero;
        this.x=4;
        this.y=-1;
        this.n=0;
        this._tetrominoActivo=this._tetromino[this.n];
        
    }

    

    // rota la piezaentre las distintas formas del tetrominio
    // de debe controlar que si está muy cerca de las paredes algunas no pueden girar
  rotar = () => {
        this.n = (this.n + 1) % this.tetromino.length;
        this.borrar();
        this.moverAbajo();
        this.borrar();
        this._tetrominoActivo = this.tetromino[this.n]
        this.dibujar();
    }


    // rellena el tetromino de la pieza con su color en el canvas
    rellenar = (color) => {
       
        for(let r=0;r<this._tetrominoActivo.length;r++){
            for(let c=0;c<this._tetrominoActivo.length;c++){
                if(this._tetrominoActivo[r][c]){
                    this._tablero.dibujarCasilla((this.x+c),(this.y+r),color);
                }
            }
        }
        
    }

    // dibuja el color de una pieza
    dibujar = () => {
        this.rellenar(this._color);
    }

    // borra una pieza rellenandola de casillas blancas
    borrar = () => {this.rellenar(HUECO)}

    // mover abajo la pieza, si queda fijada, deberá obtener una nueva
    moverAbajo = () => {
       
        if((this.colision(0,1, this._tetrominoActivo))){
            this.fijar();
        
        }else{
             this.borrar();
             this.y++;
            this.dibujar();
          
        }
       
        
    }

    // mover derecha la pieza hasta chocar con la pared 
    moverDerecha = () => {

        if((this.colision(1,0, this._tetrominoActivo))){
           
        
        }else{
             this.borrar();
             this.x++;
            this.dibujar();
          
        }      
    }
    

    // mover izquierda la pieza hasta chocar con la pared 
    moverIzquierda = () => {
        if((this.colision(-1,0, this._tetrominoActivo))){
            
        
        }else{
             this.borrar();
             this.x--;
            this.dibujar();
          
        }
    }
    

    // fijar pieza cuando choca con el suelo u otra pieza
    // hay que comprobar si se ha formado una o varias lineas para borrarlas 
    fijar = () => {
        for(var r=0;r<this._tetrominoActivo.length;r++){
            for(var c=0;c<this._tetrominoActivo.length;c++){
                if(this._tetrominoActivo[r][c]){
                 console.log(this._color);
                 let nuevaX=this.x+c;
                 let nuevaY=this.y+r; 
                this._tablero.setCasilla(nuevaY,nuevaX,this._color);

                }
          
            }
        }



        
        juego.pieza = juego.piezaAleatoria();
}

    // Comprueba si se produce una colisión de una pieza con el suelo u otra pieza 
    colision = (x, y,pieza ) => {
        //console.log(`${x} ${y+this._tetrominoActivo.length}`);
      /*
        if(y>=19){
            console.log(20-y);
            pieza[20-y].reduce((a,b)=>a+b,1);
           juego.pieza = juego.piezaAleatoria();

            return true;
        }
          */ 

        for(var r=0;r<pieza.length;r++){
            for(var c=0;c<pieza.length;c++){
                if(!pieza[r][c]){
                    continue;
                }
                let nuevaX=this.x+c+x;
                let nuevaY=this.y+r+y;

                if(nuevaX<0 ||nuevaX>=this._tablero.columnas ||nuevaY>=this._tablero.filas ){
                    return true;
                }
                if(nuevaY<0){
                    continue;
                }
                if(!this._tablero.esVacio(nuevaX,nuevaY)){
                    return true;
                }
                   
            
                
            }
        }
        return false;
                
    }
}
