$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
  });
// -------------------------
function random()
{
  var a = document.getElementById('input').value;
  if(a === 'science')
  {
    var array=['Day'];
  }
  else if(a === 'management')
  {
    var array=['Morning', 'Day'];
  }
  else
  {
    var array=[];
  }

  var string="";
  for(i=0;i<array.length;i++)
  {
    string = string +'<option>' + array[i] + '</option>';
  }
  string = '<select name="">'+string+'</select>'
  document.getElementById('output').innerHTML = string;
}

// --------------
$(function() {
  $("#input").change(function() {
      if ($(this).val() == "management") {
          $("#interested").prop("disabled", true);
      }
      else
          $("#interested").prop("disabled", false);
  });
});