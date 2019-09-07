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
}

var tree = new BST();
tree.insert(15)
tree.insert(16)
tree.insert(14)
tree.insert(10)
// tree.insert(16)


console.log(tree.find(14));