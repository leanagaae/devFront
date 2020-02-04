$(document).ready(function(){
  //$('h1').hide('slow');
  //$('h1').hide(5000);


  //Ajouter 5 fois la boite
  for ( var i = 0; i < 5; i++) {
    $( '<div class="col-1 boite">' ).appendTo('#effets');
  }

//Cliquer sur une case et elle disparait
  $("#effets div").click(function() {//Quand on clique
    $( this ).hide( 2000, function() { //Elle apparait 2000ms
     // $( this ).remove(); //Puis elle est supprimé
  });
});

//On veut activer le bouton réapparaitre
$("#show").click(function(){
  $("#effets div").show("slow");
});

//POur la boite 1
$('#box1').click(function(){
  $(this).css('background-color', '#fdc2ba').hide(4000);
});

//POur la boite 3
$('#box2').click(function(){
  $(this).css('background-color', '#ba918d');
  $(this).fadeOut(2000);
});

//POur la boite 3
$('#box3').click(function(){
  $(this).css('background-color', '#92716f');
  $(this).slideUp(3000);
});

//pour la 3ème case

$('#animate div').click(function(){
//La faire aller a droite puis en haut
  // $(this).animate({
  //   "left":"300px"
  // }, 3000);
  // $(this).animate({
  //   "top": "-300px"
  // }, 4000).css('bakground-color', 'yellow');

//La faire monter en diagonale en haut
//   $(this).animate({
//     "left":"300px",
//     "top":"-300px"
//   }, 2000);
// });


//Faire bouger les 2 boites en même temps
  $('#animate div').animate({
    "left":"300px",
    "top":"-300px",
  }, 2000);
});


//Afficher les liens en rouge
$('li').addClass('alerte');
$('#no-alerte').click(function(){
  $('li').removeClass();
});

//pour aller sur la page da$efjkenzjkfbnejznf
$('li a').click(function(){
  $(this).parent('li').removeClass();
});

//pour AJOUTER des lignes de la liste
//i reprend le nombre de li qu'il existe +1
var i = $('li').length + 1;
//alert(i);
$('#plus').click(function(){
  $('<li>ligne' + i + '</li>').appendTo('ul');
  i++;
  if(i>1){
    //Permet de faire REAPPARAITRE le bouton quand on en a
    $('#moins').show();
  }
  console.log(i);
});

//pour ENLEVER des lignes de la liste
$("#moins").click(function(){
  if(i>1){
    $('li:last').remove();
    i--;
    //Permet de cacher le bouton enlever quand on en a plus
    if(i==1){
      $(this).hide();
    }
  }
  console.log(i);

});

//Faire apparaitre et disparaitre la boite TOGGLE EFFECTS
$('#theToggle').click(function(){
  $('#maBoite').toggle(2000);
    // Permet d'afficher une bordure quand on clique dessus
    $('#maBoite').toggleClass('bordure');
});

// On clique sur PARAGRAPHE et il s'affiche en jaune fluo
$('#toggle p').click(function(){
    $(this).toggleClass('highlight');
})

//Quand on passe sur "paragraphe" ca change la couleur de la boite
$('#toggle p').hover(function(){
  $('#maBoite').toggleClass('vert');
})

// Agrandir ou diminuer la taille de la police quand on clique sur le bouton

$('button.taille').click(function(){
  var os = $('#toggle p').css('font-size');
  var number = parseFloat(os);
  var uom = os.slice(-2);

  if(this.id=='pluspetit'){
    number /= 1.4;
  }else{
    number *= 1.4;
  }
  console.log(number);
  $('#toggle p').css('font-size', number + uom)
});


// console.log(os + number + uom);
// var index = $('#toggle p').eq();
// console.log(index);


// POUR CLIQUER SUR UNE VIGNETTE ET CA AFFICHE SON IMAGE 
$('#photos nav li').click(function(){
  var numeroLigne = $(this).index();
  console.log(numeroLigne);
  $('#photos div img').hide(2000);
  $('#photos div img').eq(numeroLigne).show(2000);
})


});


// https://github.com/erwantanguy/B1MDSDevFront TOUT LES CODES DE TANGUY




























