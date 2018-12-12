$('#arrowDown').click(function() {
    $(this).css("visibility","hidden");
    $('#hiddenElement').css("display", "block");
});

$('#arrowUp').click(function() {
    $('#arrowDown').css("visibility","visible");
    $('#hiddenElement').css("display", "none");
});


$(function() {
  $('input[name="daterange"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
          cancelLabel: 'Clear'
      }
  });
  $('input[name="daterange"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
  });
  $('input[name="daterange"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });
});