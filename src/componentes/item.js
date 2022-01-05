
class Item{

    static ultimoId = 0;

    constructor(texto){
        this.id = Item.ultimoId++;
        this.texto = texto;
        this.feito = false;
    }
}

export default Item;