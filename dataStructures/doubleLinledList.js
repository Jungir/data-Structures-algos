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
    get(idx){
        if(idx >= this.length || idx < 0) return null;
        if(idx === 0) return this.head;
        if(idx === this.length - 1) return this.tail;
        let counter, current;
        if(idx <= this.length / 2){
            counter = 0;
            current = this.head;
            while(counter !== idx){
                current = current.next;
                counter++;
            }
  
        }else{
            counter = this.length - 1;
            current = this.tail;
            while(counter !== idx){
                current = current.prev;
                counter--;
            }
           
        }
        return current;

    }
    set(idx, value){
        let foundNode = this.get(idx);
        if(foundNode !== null) return !!(foundNode.val = value);
        return false;
    }
    insert(idx, value){
        if(idx < 0 ||idx > this.length) return false;
        if(idx === 0) return !!this.unshift(vallue);
        if(idx === this.length) return !!this.push(value);

        let beforeNode = this.get(idx - 1);
        let newNode = new Node(value); 
        let afterNode = beforeNode.next;

        beforeNode.next = newNode; newNode.prev = beforeNode;

        newNode.next = afterNode; afterNode.prev = newNode;

        this.length++;
        return true;

    }
    remove(idx){
        if(idx < 0 || idx >= this.length) return undefined;
        if(idx === 0 ) return this.shift();
        if(idx === this.length - 1) return this.pop();
        let removedNode = this.get(idx);
        let beforeNode = removedNode.prev;
        let afterNode = removedNode.next;
        beforeNode.next = afterNode;
        afterNode.prev = beforeNode;

        //reset the next & prev for deleted item
        removedNode.next = null;
        removedNode.prev = null;
        this.length --;
        return removedNode;
    }
}

const list = new DoublyLinkedList();

list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
console.log(list.get(1));
console.log(list.set(1, 'new Value'));
console.log(list.get(1));
