
  String.prototype.multi = function(n) {

    var result = ""

    for (var i = 0; i <= n; i++) {
      result += this
    }

    return result

  }

  console.log("May the force be with You !".multi(4));

