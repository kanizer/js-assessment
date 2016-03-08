exports = (typeof window === 'undefined') ? global : window;

function getData(path, cb) {
  var client = new XMLHttpRequest();
  client.open('GET', path);
  client.onreadystatechange = function() {
    if(client.readyState === XMLHttpRequest.DONE && client.status === 200) {
      cb(client.responseText);
    }
  };
  client.send();
}

exports.asyncAnswers = {

  async : function(value) {
    // spoof condition validation
    return (typeof value !== 'undefined') ? {
        then: function(cb) {
          setTimeout(cb, 100, value);
          return this;
        },
        catch: function(cb) {
          // empty
          return this;
        }
    } : {
        then: function(cb) {
          // empty
          return this;
        },
        catch: function(cb) {
          setTimeout(cb, 100, new Error('Validation failure'));
          return this;
        }
    };
  },

  manipulateRemoteData : function(url) {
    return {
      then: function(cb) {
        getData(url, function(data) {
          cb(JSON.parse(data).people.map(function(person) {
            return person.name;
          }).sort());
        });
      }
    }
  }

};
