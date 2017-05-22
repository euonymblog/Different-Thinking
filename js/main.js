$( document ).ready(function(){

  $(".servicesoutline").hide();
  $(".expoutline").hide();
  $(".testoutline").hide();

  $(".servicetitle").on("click", function(){
  $(".servicesoutline").slideToggle("slow");
});

  $(".exptitle").on("click", function(){
  $(".expoutline").slideToggle("slow");
});

  $(".testtitle").on("click", function(){
  $(".testoutline").slideToggle("slow");
});



});
