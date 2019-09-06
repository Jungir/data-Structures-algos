function binarySearch(arr, num){
    // add whatever parameters you deem necessary - good luck!
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((left + right) / 2);
    while(arr[middle] !== num && left <= right){ 
        if(arr[middle] < num) left = middle + 1;
        else right = middle - 1;  
        middle = Math.floor((left + right) / 2);
    }
    
    return arr[middle] === num ? middle : -1; 
}

console.log(binarySearch([1,2,3,5,6,7,8,9, 10,12], 8));