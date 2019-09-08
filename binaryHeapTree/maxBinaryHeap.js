class MaxBinaryHeap{
    constructor(){
        //here heap will be stored
        this.values = [];
    }
    insert(val){
        this.values.push(val);
        this.bubbleUp();
        return this;
       
    }
    bubbleUp(){
        let index = this.values.length - 1;
        const element = this.values[index];
        while(index > 0){
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if(element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;   
        }
    }
    extractMax(){
        let max = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild, rightChild;
            let swap = null;
            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ){
                    swap = rightChildIdx;
                }
            }

            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }

}

const binaryHeap = new MaxBinaryHeap();
binaryHeap.insert(20);
binaryHeap.insert(15);
binaryHeap.insert(14);
binaryHeap.insert(13);
binaryHeap.insert(0);
console.log(binaryHeap.insert(30));
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.extractMax());
console.log(binaryHeap.values);