class Quadrado{
    constructor(lado){
        this.lado = lado;
        this.num_requests=0;
        this._area = lado*lado;
    }
    //getters and setters
    get area(){
        this.num_requests++;
        return this.lado*this.lado;
    }

    set area(area){
        this.lado = Math.sqrt(area);
        //this.area = area;
    }
}