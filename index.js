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

  module.exports = {min, max};