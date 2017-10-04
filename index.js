var express = require('express'); // We import ExpressJS

var app = express(); //This is how we initialize an express app
var PORT = 3000; //  We set the port that the application will use

app.get('/', function(request, response){
  response.send('Hello World!');
});

app.listen(PORT, function(){
  console.log('Server is listening on port ' + PORT);
});
