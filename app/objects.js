exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
    // return fn.call(obj);
    // return fn.bind(obj)();

    obj.fn = fn;
    return obj.fn();
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
    return Object.keys(obj).map(function(key) {
        return key + ': ' + obj[key];
    });
  }
};
