class Graph{
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
    addEdge(v1, v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2])  throw 'invalid entry';
        this.adjacencyList[v1].push(v2);        
        this.adjacencyList[v2].push(v1);
        return true;        
    }
    removeEdge(v1, v2){
        if(!this.adjacencyList[v1] || !this.adjacencyList[v2]) throw 'invalid entry';
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(vertex => vertex !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(vertex => vertex !== v1);
        return true;
    }
    removeVertex(v){
        if(!this.adjacencyList[v]) throw 'no entry with such a name';
        while(this.adjacencyList[v].length){
            const adjacentVertex = this.adjacencyList[v].pop();
            this.removeEdge(v, adjacentVertex);
        } 
        delete this.adjacencyList[v];
        return true;
    }
    DFrecursive(start){
        const result = [];
        const visited = [];
        const adjacencyList = this.adjacencyList;
        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
               if(!visited[neighbor]){
                   dfs(neighbor);
               } 
            });
        })(start);  
        return result;
    }
    DFloop(start){
        let S = [start];
        let result = [];
        let visited = {};
        let curVertex;

        visited[start] = true;

        while(S.length){
            curVertex = S.pop();
            result.push(curVertex);

            this.adjacencyList[curVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    S.push(neighbor);
                }
            });
        }  
        return result;
    }
    BFS(start){
        const queue = [start];
        const result = [];
        const visited = {[start]: true}; //computed property value
        let curVertex;
        while(queue.length){
            curVertex = queue.shift();
            result.push(curVertex);

            this.adjacencyList[curVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }
}


const g = new Graph;

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.DFrecursive('A'))
console.log(g.DFloop('A'))
console.log(g.BFS('A'))