function pickPeaks(arr){
    // Declare Global Variables
    let result = {pos: [],  peak: []};
    if(arr.length > 2){
        pos = -1;
        for(let i = 1; i < arr.length; i++){
               if(arr[i] > arr[i-1]){
                pos = i;
            }else if(arr[i] < arr[i-1] && pos !== -1){
                result.pos.push(pos);
                result.peak.push(arr[pos]);
                pos = -1;
            }
        }
     
    }

    return result;
