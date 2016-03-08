exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
    var module = function(greeting, name) {
        this.name = name;
        this.greeting = greeting;
        this.sayIt = function() {
            return this.greeting.concat(', ').concat(this.name);
        };
    }
    return new module(str1, str2);
  }
};
