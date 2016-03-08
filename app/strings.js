exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var sets = [];
    for(var prev, curr, result = '', i = 0; i < str.length; i++) {
        curr = str.substr(i, 1);
        if(i > 0) {
            prev = str.substr((i - 1), 1);
        }
        if(curr === prev) {
            if(sets[sets.length - 1].length < amount) {
                sets[sets.length - 1] += curr;
            }
        } else {
            sets.push(curr);
        }
    }
    return sets.join('');
  },
  wordWrap: function(str, cols) {
    var cnt = 0;
    var words = str.split(' ');
    var lines = [words[0]];
    var prevInd;
    for(var i = 1; i < words.length; i++) {
        prevInd = lines.length - 1;
        if(lines[prevInd].length + words[i].length > cols) {
            lines[prevInd] += '\n';
            lines.push(words[i]);
        } else {
            lines[prevInd] += ' ' + words[i];
        }
    }
    return lines.join('');
  },

  reverseString: function(str) {
    var a = str.split('');
    var buffer;
    for(var i = 0; i < str.length/2; i++) {
        buffer = a[i];
        a[i] = a[str.length - i - 1];
        a[str.length - i - 1] = buffer;
    }
    return a.join('');
  }
};
