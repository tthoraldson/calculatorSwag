var values = {};

$(document).ready(function(){
  console.log("document is ready");

  $('#form').on('submit', function(event){
    event.preventDefault();
    console.log("clicked");

    var fields = $('#form').serializeArray();

    fields.forEach(function(element, index, array) {
      values[element.name] = element.value;
    });
  console.log(values)
  });
});
