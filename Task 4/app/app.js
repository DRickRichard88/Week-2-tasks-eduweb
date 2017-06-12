document.addEventListener("DOMContentLoaded", function(){

function createData(obj) {

  var data = obj;

    return {
      
    get: function(name) {
      
      return data[name];

    },

    set: function(name, val) {

      if(name || val) ;
      
        return data[name] = val;
    }

  }
}

var data = createData({});

data.set('name','Rick');

console.log( data.get("name") );
  
});