function min(arguments) {
    var result= Infinity;
    for(var i in arguments) {
      if(arguments[i] < result) {
        result = arguments[i];
      }
    }
    return result;
  }

  function max(arguments) {
    var result= -Infinity;
    for(var i in arguments) {
      if(arguments[i] > result) {
        result = arguments[i];
      }
    }
    return result;
  }

  function sortNumbers(arguments) {
      var N = arguments.length;
      for(var i = 0; i < N - 1; i++) {
        for(var j = 0; j < N - i - 1; j++) {
            if(arguments[j] > arguments[j+1]) {
                var temp = arguments[j];
                arguments[j] = arguments[j+1];
                arguments[j+1] = temp;
            }
        }
    }
    return arguments;
  }

  module.exports = {min, max, sortNumbers};