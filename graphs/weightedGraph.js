const PriorityQueue = require('./naivePriorityQueue');


class WeightedGraph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(value){
        if(!this.adjacencyList[value]){
            this.adjacencyList[value] = [];
            return true;
        }
        throw 'duplicate entry';
    }
    addEdge(v1, v2, weight){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2])  throw 'invalid entry';
        this.adjacencyList[v1].push({node: v2, weight });        
        this.adjacencyList[v2].push({node: v1, weight});
        return true;        
    }
    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        const path = [];
        let smallest;
        //build up inital state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            }else{
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }

        //as long as there is smth to visit
        while(nodes.values.length){
            smallest = nodes.deqeueu().val;
            if(smallest === finish){
                //we are done
                //build up a pass to return at end
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
               for(let neighbor in this.adjacencyList[smallest]){
                   //find the neighbor
                   let nextNode = this.adjacencyList[smallest][neighbor];
                   //calculate new distance to neighboring node
                   let candidate = distances[smallest] + nextNode.weight;
                   if(candidate < distances[nextNode.node]){
                        //updating new smallest distance to neighbor
                        distances[nextNode.node] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNode.node] = smallest;
                        //enqueue in  priority queue
                        nodes.enqueue(nextNode.node, candidate);
                   }
               };
            }
        }
        return path.concat(smallest).reverse();
    }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);


console.log(graph.Dijkstra("A", "E"));