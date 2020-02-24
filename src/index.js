
exports.min = function min(array) {
    let minimum;
    if (array == undefined || array.length == 0) { 
    return 0;
    } else return minimum = Math.min(...array);    
};

exports.max = function max (array) {
    let maximum = -Infinity;
    if (array === undefined || array.length == 0) {
        maximum = 0;
        return maximum;
      
    }
        
        return maximum = Math.max(...array);
    }
exports.avg = function avg (array) {
    let avg;
    let sum = 0;
   if (array === undefined || array.length == 0) {
      avg = 0;
      return avg;
  } else { 
    for (let i = 0; i < array.length; i++){
      sum += array[i];
  }
  avg = sum / array.length;
}
    return avg;
};

