class mainController {

    constructor() {
      $(document).ready(function() {
        $('select').material_select();
      });

        $('.collapsible').collapsible({
          accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });

      jQuery(document).ready(function(){
  // This button will increment the value

  $('#plusqt').click(function(e){
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name=quantity]').val());
      // If is not undefined
      if (!isNaN(currentVal)) {
          // Increment
          $('input[name=quantity]').val(currentVal + 1);
      } else {
          // Otherwise put a 0 there
          $('input[name=quantity]').val(0);
      }
  });
  // This button will decrement the value till 0
  $("#minusqt").click(function(e) {
      // Stop acting like a button
      e.preventDefault();
      // Get the field name
      var fieldName = $(this).attr('field');
      // Get its current value
      var currentVal = parseInt($('input[name=quantity]').val());
      // If it isn't undefined or its greater than 0
      if (!isNaN(currentVal) && currentVal > 0) {
          // Decrement one
          $('input[name=quantity]').val(currentVal - 1);
      } else {
          // Otherwise put a 0 there
          $('input[name=quantity]').val(0);
      }
  });

});

    }

}
