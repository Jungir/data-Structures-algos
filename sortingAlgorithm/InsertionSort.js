function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let curValue = arr[i];
        for(let j = i - 1; j >= 0 && arr[j] > curValue; j--){
            arr[j + 1] = arr[j];
        }
        arr[j+1] = curValue;
    }
    return arr;
}

insertionSort([2,1,9,76,4]);