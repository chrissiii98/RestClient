$('#username').on('input', function () {
  var username = $("#username").val();
    $('#pwd').attr("placeholder", username);
    $('#ergebnis').html('<p>'+username+'</p>');
 });


$('#test').click(function() {
    var username = $("#username").val(); 
    alert(username);
    if (username != null){
        alert("test2");
        $('#username').attr("placeholder", username);    
    }  
});

window.onload= function() {
      $('#username').attr("placeholder", "test");    
};