function solution(list){
    let newArr = [];

    for(let i = 0; i < list.length; i++){
        result.push(list[i].toString())
        if(i === list.length - 1){
            break;
        }

        let e1 = list[i]
        let e2 = list[i + 1]
        let isRange = false;
        
        while(e2 - e1 === 1 && i < list.length - 1){
            i++
            e1 = list[i]
            e2 = list[i + 1]
            isRange = true
        }
        if(isRange){
            result[result.length-1]+="-" + list[i].toString()    
            }
    }
    return result.toString()
    
}
