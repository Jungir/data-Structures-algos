class HashTable {
  constructor(size=10){
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value){
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
    return index;
  }
  //accepts the key
  //hashes the key
  get(key){
    let index = this._hash(key);
    if(this.keyMap[index]){
      let foundArray = this.keyMap[index];
      for(let i = 0; i < foundArray.length; i++){
        if(foundArray[i][0] === key){
          return this.keyMap[index][i][1];
        };
      } 
    }
    return undefined;
  }
  values(){
    let valuesArr = []
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!valuesArr.includes(this.keyMap[i][j][1])){
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
  keys(){
    let keysArr = []
    for(let i = 0; i < this.keyMap.length; i++){
      if(this.keyMap[i]){
        for(let j = 0; j < this.keyMap[i].length; j++){
          if(!keysArr.includes(this.keyMap[i][j][0])){
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
}

let ht = new HashTable();
ht.set('age', '23');
ht.set('name', 'kamil');
ht.set('second', 'alek');
ht.set('he', 'ops');
ht.set('by', 'love you');
ht.set('go', 'love you');
ht.set('go', 'love you');
console.log(ht.keys())