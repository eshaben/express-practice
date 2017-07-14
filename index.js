var express = require('express');
var app = express();
var bodyParser = require('body-parser')

app.use(bodyParser.json())

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

app.post('/math/sum', function(request, response){
  var query = request.query.n
  var total = 0;
  var resultString = []
  for (var i=0; i<=query.length; i++){
    total+= i
  }
  for (var i=1; i<=query.length; i++){
    resultString.push(i)
    resultString.push('+')
  }
  query = query.join('+')
  response.send(query + "=" + total);
})

app.use('/math/volume', function(request, response){
  var query = request.path
  var numbers = []
  var result = 1
  for (var i=0; i<query.length; i++){
  if (isNaN(query[i]) == false){
      numbers.push(query[i])
    };
  }
  for (var i=0; i<numbers.length; i++){
    result *= numbers[i]
  }
  var stringAnswer = "The volume of a " + numbers.join('x') + " rectangle is " + result
  response.send(stringAnswer);
})


app.post('/math/area', function(req, response){
  console.log(req.body)
})

app.listen(8080)

module.exports = {
  app: app
}
