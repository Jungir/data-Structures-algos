function merge(arr, arr2){
    let newArr = [];
    let i = 0;
    let j = 0;
    while (i < arr.length && j < arr2.length){
        if(arr2[j] > arr[i]){
            newArr.push(arr[i]);
            i++;
        }else{
            newArr.push(arr2[j]);
            j++;
        }
    }
    while(i < arr.length){
        newArr.push(arr[i]);
        i++;
    }

    while(j < arr2.length){
        newArr.push(arr2[j]);
        j++;
    }

   
    console.log(newArr);
    return newArr;
}



function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = arr.slice(0, Math.floor(arr.length / 2));
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.sclice(mid));
    return merge(left, right);
}

merge([], [2, 5,99,100]);