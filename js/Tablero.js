class Tablero {
   

    constructor(filas, columnas, tamañoCuadrado, ctx) {
        // inicializa el tablero todos los elementos de color WHITE
        this._filas=filas;
        this._columnas=columnas;
        this.TC=tamañoCuadrado;
        this.ctx=ctx;
        
        this.tab=[];
        this.tablero();
    }

    tablero=()=>{
          for(let r=0;r<this.filas;r++){
            this.tab[r]=[];
            for(let c=0; c<this.columnas;c++){
              this.tab[r][c]=HUECO;
            }
         }        
        
    }

    // Es vacio si tiene el color WHITE
    esVacio = (x,y) => {
        if(this.tab[y][x]==HUECO){
            return true;
        }else{
             return false ;
        }
        
    }
       
    

    // Dibuja un en el canvas del color recibido
    dibujarCasilla = (x, y, color) => {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.TC, y * this.TC, this.TC, this.TC);
        this.ctx.strokeStyle = "BLACK";
        this.ctx.strokeRect(x * this.TC, y * this.TC, this.TC, this.TC);
    }

    // dibujar en el canvas según los colores del tablaro
    dibujarTablero = () => {
      
       for(let r=0;r<this.filas;r++){
           for( let c=0;c<this.columnas;c++){
               this.dibujarCasilla(c,r,this.tab[r][c]);
           }
       }
    };

    get filas () {
        return this._filas;
    }

    set filas(fila) {
        this.filas=fila;
    }

    get columnas() {
        return this._columnas
        ;}

    set columnas(columna) {
        this.columnas=columna;
    }

    //Devuelve el color del tablero en la casilla indicada
    getCasilla = (f, c) => {
        return this.tab[f][c];

    }

    //Cambiar el color del tablero en la casilla indicada
    setCasilla = (f, c, color) => {
           
            this.tab[f][c]=color;
        
    }

    // Eliminamos las filas que estén completas e incrementamos la puntuación
    eliminarFilasCompletas = () => {
        for(let r=0; r<this.filas;r++){
            let isRowFull=true;
            for(let c=0;c<this.columnas;c++){
                isRowFull=isRowFull && (this.tab[r][c]!=HUECO);
            }
            if (isRowFull){
                for(let y=r;y>1;y--){
                    for(let c=0;c<this.columnas;c++){
                        this.tab[y][c]=this.tab[y-1][c];
                    }
                }
                for(let c=0;c<this.columnas;c++){
                    this.tab[0][c]=HUECO;
                }
               juego.score +=10;
            }
        }
        document.getElementById("score").innerHTML=juego.score;
    }
       
            
}
