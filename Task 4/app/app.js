document.addEventListener("DOMContentLoaded", function(){

function createData(obj) {

  var data = obj;

  return {
    get: function(name) {
      return data[name] || null;
    },
    set: function(name, value) {
      if(name && value) {
        data[name] === value;
      }
    }
  }
}

var data = createData({});

data.set('name','Rick');

data.get('Rick');

console.log( data.get("name") );
  
});