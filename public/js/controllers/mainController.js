class mainController {

    constructor() {
      $(document).ready(function() {
        $('select').material_select();
      });

      $(document).ready(function(){
        $('.collapsible').collapsible({
          accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
        });
      });
    }

}
