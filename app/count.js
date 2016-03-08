exports = (typeof window === 'undefined') ? global : window;


exports.countAnswers = {
  count : function (start, end) {
    // var cb = function() {
    //   if(start > 0) {
    //     console.log(start++);
    //   }
    //   if(start > end) {
    //     cancel();
    //   }
    // };

    // var cancel = function() {
    //   clearInterval(int);
    // }

    // // cb(); // not sure why I have to call this first?
    // var int = setInterval(cb, 100);

    // return {
    //   cancel: cancel
    // };
  }
};
