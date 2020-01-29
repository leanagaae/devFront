$(document).ready(function(){
  //$('h1').hide('slow');
  //$('h1').hide(5000);

  for ( var i = 0; i < 10; i++) {
    $( '<div class="col-1 boite">' ).appendTo('#effets');
  }


});


$("#effets div").click(function() {
  $( this).hide( 2000, function() {
    $( this ).remove();
  }
};
