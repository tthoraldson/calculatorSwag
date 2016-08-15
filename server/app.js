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

// use body-parser
app.use(bodyParser.urlencoded({extended: true}));

// server-side variables
var solutionLog = [];

//Routes
app.get('/clearSolutionLog', function(req, res){
  solutionLog = [];
  res.send(solutionLog);
  res.send(200);
});

app.get('/solutionLog', function(req, res){
  res.send(solutionLog);
  res.send(200);
});

app.post('/addition', function(req, res){
  var problem = req.body;
  var addx = parseInt(problem.x);
  var addy = parseInt(problem.y);
  var solution = addition(addx, addy);
  var solutionLogEntry = addx + " + " + addy + " = " + solution;
  solutionLog.push(solutionLogEntry);
  console.log(solutionLogEntry);
  res.send(200);
});

app.post('/division', function(req, res){
  var problem = req.body;
  var divx = parseInt(problem.x);
  var divy = parseInt(problem.y);
  var solution = division(divx, divy);
  var solutionLogEntry = divx + " / " + divy + " = " + solution;
  solutionLog.push(solutionLogEntry);
  console.log(solutionLogEntry);
  res.send(200);
});

app.post('/multiplication', function(req, res){
  var problem = req.body;
  var mulx = parseInt(problem.x);
  var muly = parseInt(problem.y);
  var solution = multiplication(mulx, muly);
  var solutionLogEntry = mulx + " * " + muly + " = " + solution;
  solutionLog.push(solutionLogEntry);
  console.log(solutionLogEntry);
  res.send(200);
});

app.post('/subtraction', function(req, res){
  var problem = req.body;
  var subx = parseInt(problem.x);
  var suby = parseInt(problem.y);
  var solution = subtraction(subx, suby);
  var solutionLogEntry = subx + " - " + suby + " = " + solution;
  solutionLog.push(solutionLogEntry);
  console.log(solutionLogEntry);
  res.send(200);
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
