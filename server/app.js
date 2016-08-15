// node modules
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

// created module paths
var addition = require('./public/scripts/addition');
var division = require('./public/scripts/division');
var multiplication = require('./public/scripts/multiplication');
var subtraction = require('./public/scripts/subtraction');

app.use(bodyParser.urlencoded({extended: true}));

//Routes
app.post('/addition', function(req, res){
  console.log("ADDITION WORKING");
});
app.post('/division', function(req, res){

});
app.post('/multiplication', function(req, res){

});
app.post('/subtraction', function(req, res){

});



// serve static files
app.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html'
  res.sendFile(path.join(__dirname, './public', file));
});

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
  console.log('server is running on port ', app.get('port'));
});
