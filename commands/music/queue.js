class Queue {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    addElement(element) {
        this.items.push(element);
    }

    deQueue(){
        if(this.isEmpty())
            return "Queue is empty";
        return this.items.shift();
    }

    getFront(){
        if(this.isEmpty())
            return "Queue is empty";
        return this.items[0];
    }

    getAll(){
        for(var i = 0; i < items.length; i++)
            return items[i];
    }
}