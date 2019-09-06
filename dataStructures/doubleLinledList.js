//Node, val, next, prev
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
    

}

//Double linked list
//head, tail, length

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            this.tail = newNode;
          
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail; 
            this.tail = newNode;
        }
        this.length++;
        return this;

    }
    pop(){
        if(!this.tail) return undefined;
        let poppedNode = this.tail;
        if(this.length < 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift(){
        if(!this.head) return undefined;
        let oldHead = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = oldHead.next;
            //sever the connections
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
console.log(list)