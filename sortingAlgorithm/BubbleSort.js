function sortMe(arr){
   let noSwaps;
    for(let i = arr.length; i > 0; i--){
        noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            console.log(arr);
            if(arr[j] > arr[j+1]){
                noSwaps = false;
                [arr[j], arr[j + 1]] = [arr[j+1], arr[j]];
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
console.log(sortMe([5,6,4,7,8,9,10]))
