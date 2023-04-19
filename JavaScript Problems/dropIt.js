function dropIt(arr, func){
    let newArr = [];
    let found = false;

    for(let i = 0; i < arr.length; i++){
        if(func(arr[i])){
            newArr.push(arr[i]);
            found = true;
        }else if(found){
            newArr.push(arr[i]);
        }
    }

    return newArr = [];
}