function countUniqueValues(arr){
    if(!arr.length) return 0;
    let unique = 1;
    for(let i = 0; i <= arr.length - 2; i++){
        if(arr[i] === arr[i + 1]){
                continue;
        }else{
            unique ++;
        }
    }
    return unique;
}
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));