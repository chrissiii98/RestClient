window.onload= function() {
    $('#username').attr("placeholder", "mmustermann");  
    $("#gender").val('female');
    $("#gender").css("color", "#A4A4A4");
    $("#clothsize").css("color", "#A4A4A4");
    $("#shoesize").css("color", "#A4A4A4");
    $("#favocolor").css("color", "#A4A4A4");
    
    $('#gender').change(function() {
        $('#gender').css('color','black');
    });
    
    $('#clothsize').change(function() {
        $('#clothsize').css('color','black');
    });
    
    $('#shoesize').change(function() {
        $('#shoesize').css('color','black');
    });
    
    $('#favocolor').change(function() {
        $('#favocolor').css('color','black');
    });
    

};