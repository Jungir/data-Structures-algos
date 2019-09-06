function validAnagram(str, str2){
    // add whatever parameters you deem necessary - good luck!
    if(str.length !== str2.length){
        return false;
    }
    let obj = {};
    let obj2 = {};
    
    for (let val of str){
        obj[val] = ++obj[val] || 1;
    }

    for (let val of str2){
        obj2[val] = ++obj2[val] || 1;
    }
    for(let curVal in obj){
        if(obj[curVal] !== obj2[curVal]){
            return false;
        }
    }
    return true;
}



console.log(check())

// console.log(validAnagram('makil', 'ilamk'));