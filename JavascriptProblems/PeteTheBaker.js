function cakes(recipe, available) {
  var numCakes = [];
  
  for(var key in recipe){
    if(recipe.hasOwnProperty(key)){
      if(key in available){
        numCakes.push(Math.floor(available[key] / recipe[key]));
      }else{
        return 0;
      }
    }
  }
  
  return Math.min.apply(null, numCakes); 
  
