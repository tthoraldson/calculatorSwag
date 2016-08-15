var values = {};

$(document).ready(function(){
  console.log("document is ready");
  appendDom();

  $('#form').on('submit', function(event){
    event.preventDefault();

    var fields = $('#form').serializeArray();

    fields.forEach(function(element, index, array) {
      values[element.name] = element.value;
    });

    $('#form').find('input[type=number]').val('');
    console.log(values)
    findOperator(values);
    appendDom();
  });

});

var findOperator = function(object){
  var operator = object.operator;
  switch(operator){
    case 'addition':
      addition();
      break;
    case 'subtraction':
      subtraction();
      break;
    case 'multiplication':
      multiplication();
      break;
    case 'division':
      division();
      break;
  }
};

var addition = function(){
  $.ajax({
    type: 'POST',
    url: '/addition',
    data: values,
    success: function() {
      console.log('addition was succussful!');
    },
    error: function() {
      console.log('addition failed');
    }
  });
};

var subtraction = function(){
  $.ajax({
    type: 'POST',
    url: '/subtraction',
    data: values,
    success: function() {
      console.log('subtraction was succussful!');
    },
    error: function() {
      console.log('subtraction failed');
    }
  });
};

var multiplication = function(){
  $.ajax({
    type: 'POST',
    url: '/multiplication',
    data: values,
    success: function() {
      console.log('multiplication was succussful!');
    },
    error: function() {
      console.log('multiplication failed');
    }
  });
};

var division = function(){
  $.ajax({
    type: 'POST',
    url: '/division',
    data: values,
    success: function() {
      console.log('division was succussful!');
    },
    error: function() {
      console.log('division failed');
    }
  });
};

var appendDom = function(){
  var solutionLog = $.ajax({
    type: 'GET',
    url: '/solutionLog',
    success: function(solutionLog){
      $('#solutionDIV').empty();
      solutionLog.reverse();
      solutionLog.forEach(function(solution){
        $('#solutionDIV').append('<div>' + solution + '</div>');
      });
    }
  });
};

var clearSolutionLog = function(){
  
}
