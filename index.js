var express = require('express');
var app = express();

console.log('Hello');

app.get('/math/pi', function(request, response){
  response.send(String(Math.PI))
})

app.get('/math/calculate', function(request, response) {
  var query = request.query;
  var operation = request.query.operation;
  var x = parseInt(request.query.x);
  var y = parseInt(request.query.y);
  if(operation === 'add'){
    response.send(String(x+y))
  }
  if(operation === 'subtract'){
    response.send(String(x-y))
  }
  if(operation === 'multiply'){
    response.send(String(x*y))
  }
  if(operation === 'divide'){
    response.send(String(x/y))
  }
})

app.get('/math/pi', function(request, response){
  response.send(String(Math.PI))
})


app.listen(8080)

module.exports = {
  app: app
}
