class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(value){
        let newNode = new Node(value);
        if(!this.first){
            this.first = newNode;
            this.last = newNode;
        }else{
            this.last.next = newNode;
            this.last = newNode;
        }
        return this.size++; 
    }
    deqeue(){
        if(!this.first) return;
        let temp = this.first;
        if(this.first === this.last){
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}

const queue = new Queue();
queue.enqueue('first')
queue.enqueue('second')
queue.enqueue('third')
console.log(queue)
queue.deqeue()
queue.deqeue()
queue.deqeue()
console.log(queue.deqeue());