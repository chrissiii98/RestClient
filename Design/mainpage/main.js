$('#arrowDown').click(function() {
    $(this).css("visibility","hidden");
    $('#hiddenElement').css("display", "block");
});

$('#arrowUp').click(function() {
    $('#arrowDown').css("visibility","visible");
    $('#hiddenElement').css("display", "none");
});