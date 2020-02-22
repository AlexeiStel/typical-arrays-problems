
exports.min = function min(array) {
    let minimum = Infinity;
    if (array !== undefined && array.length != 0) { 
    for (let i = 0; i < array.length; i++) {
            if (array[i] < minimum) {
                minimum = array[i];
            } 
        }
        return minimum;
    } else return 0;    
};

exports.max = function max (array) {
    let maximum = -Infinity;
    if (array === undefined || array.length == 0) {
        maximum = 0;
        return maximum;
      
    }
        for (let i = 0; i < array.length; i++) {
            if (array[i] > maximum) {
                maximum = array[i];
            }
        }
        return maximum;
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

