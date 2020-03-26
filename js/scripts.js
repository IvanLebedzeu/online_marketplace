$(document).ready(function() {
  $("#formOne").submit(function(event) {


    

    var personName = $("input#name").val();
    var personAddress = $("input#address").val();
    //var dob = $("#dob").val();
    var yourType = $("#types").val();
    var yourAmount = parseInt($("input:radio[name=amount]:checked").val());
    //var favoriteColor = $("#color").val();
    

    
    //$("#myModal").modal();
    $(".fullname").append(personName);
    $(".amount").append(yourAmount);
    $(".type").append(yourType);
    $(".address").append(personAddress);

    
  
    $("#receipt").show();
    $("#shipping").show();
    event.preventDefault(); 
  });

 

});