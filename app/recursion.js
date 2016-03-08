exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {

  listFiles: function(data, dirName) {
    var files = [];

    var examineObj = function(dirObj, parents) {
      var parents = parents;
      var dirLabel;
      var content;
      var filter;
      for(var key in dirObj) {
        content = dirObj[key];
        if(key === 'dir') {
          dirLabel = content;
        } else if(key === 'files') {
          examineDir(content, parents.concat(dirLabel));
        }
      }
      return files;
    }

    var examineDir = function(dirArr, parents) {
      for(var i = 0; i < dirArr.length; i++) {
        if(typeof dirArr[i] === 'string') {
          filter = dirName ? (parents.indexOf(dirName) > -1) : true;
          if(filter) {
            files.push(dirArr[i]);
          }
        } else {
          examineObj(dirArr[i], parents);
        }
      }
    }

    return examineObj(data, []);
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }

};
