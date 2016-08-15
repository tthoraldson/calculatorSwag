var values = {};

$(document).ready(function(){
  console.log("document is ready");

  $('#form').on('submit', function(event){
    event.preventDefault();

    var fields = $('#form').serializeArray();

    fields.forEach(function(element, index, array) {
      values[element.name] = element.value;
    });

    $('#form').find('input[type=number]').val('');
    console.log(values)
  });
  addition();
});

var addition = function(){
  $.ajax({
    type: 'POST',
    url: '/addition',
    success: function() {
      console.log('addition was succussful!');
    },
    error: function() {
      console.log('post failed');
    }
  });
};

var subtraction = function(){
  $.ajax({
    type: 'POST',
    url: '/subdraction',
    success: function() {
      console.log('addition was succussful!');
    },
    error: function() {
      console.log('post failed');
    }
  });
};

var multiplication = function(){
  $.ajax({
    type: 'POST',
    url: '/multiplication',
    success: function() {
      console.log('addition was succussful!');
    },
    error: function() {
      console.log('post failed');
    }
  });
};

var division = function(){
  $.ajax({
    type: 'POST',
    url: '/division',
    success: function() {
      console.log('addition was succussful!');
    },
    error: function() {
      console.log('post failed');
    }
  });
};
