//linked list is a collection of node:
//1) piece of data - val
//2) reference to the next node
class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    //instance methods:
    push(val){
        var newNode = new Node(val);
        if(!this.length){
            this.head = newNode;
            this.tail = newNode;
        }else{
            //add the new Node to the next porperty of the prev Node
            //eg: we had (node).tail => newNode;
            this.tail.next = newNode;
            //change the pointer tail to the new node
            this.tail = newNode;

        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.tail) return undefined;
        let current = this.head;
        let newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        let currentHead = this.head;
        //we didn't explicitly remove the first node, but there is no way of accessing it. The grabage collector will remove it
        this.head = currentHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
        return currentHead;
    }
    unshift(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(idx){
        if(idx < 0 || idx >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while(counter !== idx){
            current = current.next;
            counter++;
        }
        return current;
    }
    set(idx, value){
        let foundNode = this.get(idx);
        if(foundNode){
            foundNode.val = value;
            return true;
        }
        return false;
    }
    insert(idx, value){
        if(idx < 0 || idx > this.length) return false;
        if(idx === this.length) return !!this.push(value);
        if(idx === 0) return !!this.unshift(value);

        // ADD THE NODE AT THE CORRECT PLACE
        let newNode = new Node(value)
        let prev =  this.get(idx-1);
        let temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;  
        this.length++;  
        return true;
    }
    remove(idx){
        //edge cases
        if(idx < 0 || idx > this.length) return undefined;
        if(idx === this.length - 1) return this.pop();
        if(idx === 0) return this.shift();

        //delete the node at the particular idx
        let prev = this.get(idx - 1);
        let removedItem = prev.next;
        prev.next = removedItem.next;
        this.length--;
        return removedItem;
    }
    reverse(){
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        for(let i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;

    }

}

var list = new SinglyLinkedList();
list.push('hi')
list.push('you')
list.push('get out')
list.push('i can see you')
console.log(list.get(1));
console.log(list.set(1, 'new Value'));
console.log(list.get(1));

// console.log(list)
// var first = new Node('hi');
// first.next = new Node('hi there');
// first.next.next = new Node('hi there 2');
