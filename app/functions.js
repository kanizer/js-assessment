exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn.apply(fn, arr.slice(0));
  },

  speak : function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(next) {
      return str.concat(', ').concat(next);
    }
  },

  makeClosures : function(arr, fn) {
    // var a = arr.map(function(randNum) {
    //   return function() {
    //     return fn(randNum);
    //   }
    // });

    // var a = [];
    // for(var i = 0; i < arr.length; i++) {
    //   a[i] = function() {
    //     return fn(this.val);
    //   }.bind({val: arr[i]});
    // }

    var a = [];
    for(var i = 0; i < arr.length; i++) {
      a[i] = (function() {
        var ind = i;
        return function() {
          return fn(arr[ind]);
        }
      })(i);
    }

    return a;
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    }
  },

  useArguments : function() {
    var total;
    for(var i = 0; i < arguments.length; i++) {
      if(!total) {
        total = 0;
      }
      total += arguments[i];
    }
    return total;
  },

  callIt : function(fn) {
    fn.apply({}, Array.prototype.slice.call(arguments, 1));
  },

  partialUsingArguments : function(fn) {
    var args1 = Array.prototype.slice.call(arguments, 1);
    return function() {
      var args2 = Array.prototype.slice.call(arguments, 0);
      return fn.apply({}, args1.concat(args2));
    }
  },

  curryIt : function(fn) {
    function getFunction(inheritedArgs) {
      return function(passedArgs) {
        var args = inheritedArgs.concat(Array.prototype.slice.call(arguments, 0));
        return !isNaN(fn.apply({}, args)) ? fn.apply({}, args) : getFunction(args);
      }
    }

    return getFunction(Array.prototype.slice.call(arguments, 1));
  }
};
