$(document).ready(function(){
  
  $(".boxphoto").click(function(){
    var sr = $(this).attr("src");
    $("#boxphoto").attr("src", sr);
    $(".boxphoto, header").addClass("opac");
    $("#fixed-box").show();
  });
  
  $("#photo").click(function() {
    $("#fixed-box").hide();
    $(".boxphoto, header").removeClass("opac");
  });
  
});