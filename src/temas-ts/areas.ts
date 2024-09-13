class Figuras{ 
    protected base:number;
    protected altura:number;
    constructor(base:number,altura:number){
        this.base=base;
        this.altura=altura;
    }
    imprimir(){
        console.log("base"+this.base+"altura"+this.altura);
    }

}
class Volumenes extends Figuras{
    private calv:number;
    constructor

}