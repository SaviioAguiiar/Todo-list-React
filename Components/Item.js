
class Item {
    
    static lastId= 0
    
    constructor(text){
       this.id = Item.lastId++ 
       this.text = text
       this.done = false
       this.date = new Date().toLocaleDateString()         
    }
}

export default Item