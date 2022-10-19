const areaOrPerimeter = function(length , width) {
    if(isNaN(length)|| isNaN(width) == null) return;
    if(length === width){
       return length * width
    }else{
        return length * 2 + width * 2
    }
  };



  console.log(areaOrPerimeter(3, 3));
