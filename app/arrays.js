exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    // return arr.indexOf(item);

    // return arr.reduce(function(prev, current, ind) {
    //   if(current === item) {
    //     prev = ind;
    //   }
    //   return prev;
    // }, -1);

    for(var i in arr) {
      if(arr[i] === item) return parseInt(i, 10);
    }
    return -1;
  },

  sum : function(arr) {
    // return arr.reduce(function(prev, curr) {
    //   return prev += curr;
    // }, 0);

    var total = 0;
    for(var i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  },

  remove : function(arr, item) {
    // return arr.filter(function(curr) {
    //   return curr !== item;
    // });

    for(var i = (arr.length - 1); i >= 0; i--) {
      if(arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    return this.remove(arr, item);
  },

  append : function(arr, item) {
    // arr.push(item);

    arr[arr.length] = item;
    return arr;
  },

  truncate : function(arr) {
    // arr.pop();
    // arr.splice(-1);

    var newArr = [];
    for(var i = 0; i < (arr.length - 1); i++) {
      newArr[i] = arr[i];
    }
    return newArr;
  },

  prepend : function(arr, item) {
    // arr.unshift(item);

    arr.splice(0, 0, item);
    return arr;
  },

  curtail : function(arr) {
    // arr.shift();
    // return arr;

    return arr.splice(1, arr.length);
  },

  concat : function(arr1, arr2) {
    // return arr1.concat(arr2);

    var len = arr1.length;
    for(var i = 0; i < arr2.length; i++) {
      // arr1.push(arr2[i]);
      arr1[len + i] = arr2[i];
    }

    return arr1;
  },

  insert : function(arr, item, index) {
    // arr.splice(index, 0, item);

    var prev;
    var next = item;
    for(var i = 0; i < arr.length; i++) {
      if(i >= index) {
        prev = arr[i];
        arr[i] = next;
        next = prev;
      }
    }
    arr[arr.length] = next;
    return arr;
  },

  count : function(arr, item) {
    // return arr.reduce(function(prev, curr) {
    //   if(curr === item) {
    //     prev++;
    //   }
    //   return prev;
    // }, 0);

    var cnt = 0;
    for(var i = 0; i < arr.length; i++) {
      cnt = (arr[i] === item) ? ++cnt : cnt;
    }
    return cnt;
  },

  duplicates : function(arr) {
    var keys = {};
    var duplicates = [];
    for(var i = 0; i < arr.length; i++) {
      if(keys[arr[i]] && duplicates.indexOf(arr[i]) < 0) {
        duplicates.push(arr[i]);
      } else {
        keys[arr[i]] = arr[i];
      }
    }
    return duplicates;
  },

  square : function(arr) {
    // return arr.map(function(item) {
    //   return Math.pow(item, 2);
    // });

    for(var i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    // return arr.reduce(function(prev, curr, ind) {
    //   if(curr === target) {
    //     prev.push(ind);
    //   }
    //   return prev;
    // }, []);

    var locations = [];
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === target) {
        locations.push(i);
      }
    }
    return locations;
  }
};
