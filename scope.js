// Coded by Jared Smith
// scope.js problem
// CMP237 FINAL

var x = 12

var y = 11

var foo = function() {
  var x = "This ";
  var y = "works!";
  return [x, y]; 
  
}

var x = 10

var y = 9

console.log(foo());
