class Juego {

    constructor(cvs) {
        this.ctx = cvs.getContext("2d");
        this._tablero = new Tablero(20, 10, 20, this.ctx);
        this._pieza = this.piezaAleatoria();
        this.gameOver = false;
        this._comenzarCaer = Date.now();
        this.score = 0;
        this._level = 1;
        this._time=1000;

    }

    // devuelve una pieza aleatoria
    piezaAleatoria = () => {
        var rand=Math.floor(Math.random()*7);
         
        return  new Pieza(PIEZAS[rand][0],PIEZAS[rand][1],this.tablero);
        

    }

    get tablero() {
        return this._tablero;
    }

    get pieza() {
        return this._pieza;
    }

    set pieza(pieza) {
        this._pieza = pieza;
    }

    get comenzarCaer() {
        return this._comenzarCaer;
    }
    set comenzarCaer(comenzarCaer) {
        this._comenzarCaer = comenzarCaer;
    }
    caer = () => {
        let ahora = Date.now();
        let delta = ahora - this.comenzarCaer;
        if (delta > this.time) {
            this.pieza.moverAbajo();
            
            this.comenzarCaer = Date.now();
        }
        if (!this.gameOver) {
            requestAnimationFrame(this.caer);
        }
    }

    control = (event) => {
        if (event.keyCode == 37) {
            this.pieza.moverIzquierda();
            this.comenzarCaer = Date.now();
        } else if (event.keyCode == 38) {
            this.pieza.rotar();
            this.comenzarCaer = Date.now();
        } else if (event.keyCode == 39) {
            
            this.pieza.moverDerecha();
            this.comenzarCaer = Date.now();
        } else if (event.keyCode == 40) {
            this.pieza.moverAbajo();
        }
    }
    get time(){
        return this._time;
    }
    set time(time){
        this._time=time;
    }
    get level(){
        return this._level;
    }
    set level(level){
        this._level=level;
    }

    plusTime=()=>{
        var plus= this.score +50;
        if(this.score==10){
            this.level+=1;
             this.time-=500;
        }
        if(this.score>10){
            if(this.score == plus){
                this.level+=1;
                this.time(this.time-100);
            }
        }

    }

}