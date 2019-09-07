class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(){
        this.root = null;
    }

    insert(value){
        let newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        }else{
            let current = this.root;
            while(true){
                //handle duplicates
                if(value === current.value) throw Error('no duplicate entries allowed');
                if(value < current.value){
                    if(current.left === null){
                        current.left = newNode;
                        return this;
                    }else{
                        current = current.left;
                    }
                }else if (value > current.value){
                    if(current.right === null){
                        current.right = newNode;
                        return this
                    }else{
                        current = current.right;
                    }
                }
            }
        }
    }

    find(value){
        if(!this.root) return false;
        let current = this.root;
        let found = false;
        while(!found && current){
            if(value < current.value){
                current = current.left;
            }else if(value > current.value){
                current = current.right;
            }else{
                found = true;
            }
        }
        if(!current) return false;
        return current;
    }
   
    //traversing the tree with BFS approach. Adds each node value to the array horizontally.
    //take advantage of the queue: FIFO.
    BFS(){
        let node = this.root;
        let data = [];
        let queue = [];
        queue.push(this.root);
        while(queue.length){
            node = queue.shift();
            data.push(node.value);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }
    DFSPreOrder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            data.push(node.value);
            //first go through all the left
            //if there is no left, go to the right side of the node one at a time;
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
    DFSPostOrder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            //first explore the children then add parent node;
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }
    DFSInOrder(){
        let data = [];
        let current = this.root;
        function traverse(node){
            //first expore the end left child 
            //then add the parent 
            //the explore the right if there is one
            if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
}

var tree = new BST;
tree.insert(10)
tree.insert(6)
tree.insert(3)
tree.insert(8)
tree.insert(15)
tree.insert(20)

// tree.insert(16)


console.log(tree.DFSInOrder());