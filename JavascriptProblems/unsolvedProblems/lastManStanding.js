function lastManStanding(n){
    let arr = [];

    for(let i = 1; i <= n; i++){
        arr.push(i);
        console.log(arr);
    }

    while(arr.length > 1){
      arr = arr.filter((_, index) => index % 2).reverse()
        console.log(arr);
    }
    
    return arr[0]
}
  


  console.log(lastManStanding(9));