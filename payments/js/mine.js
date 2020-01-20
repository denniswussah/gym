var normal = 0;

$("form").submit(function(e){
    e.preventDefault();
  });

$(".letMeIn-btn").click(
  function(){
     validateText();
  }
);



function normalMode(){
  normal = 55;
  $(".plans").removeClass("btn-success");
  $("#normal-plan").addClass("btn-success");
  $(".payThisAmount").text("55.00");
  $(".price-box h3").addClass("text-success");
}
function proMode(){
  normal = 95;
  $(".plans").removeClass("btn-success");
  $("#pro-plan").addClass("btn-success");
  $(".payThisAmount").text("95.00");
  $(".price-box h3").addClass("text-success");
}
function advancedMode(){
  normal = 165;
  $(".plans").removeClass("btn-success");
  $("#advanced-plan").addClass("btn-success");
  $(".payThisAmount").text("165.00");
  $(".price-box h3").addClass("text-success");
}

function checkPlanChoosen(){
}

function validateInput(){
  var name= $("#memberName").val();
  var email=$("#memberEmail").val();
  var address=$("#memberAddress").val();
  var city=$("#memberCity").val();
  var dob=$("#memberDOB").val();
  var phone=$("#memberPhone").val();


  if (name == "" || email == "" || address =="" || city == ""|| dob==""||phone=="") {
    //You must fill all these
    $(".error-txt").text("Fill all inputs ")
    var real = $(".realAmount").text();
    var check= $('.pricePaid').val(real);
    alert(check);
    setTimeout(
      function(){
        $(".error-txt").text("")
      }, 3000
    );
  }else if (!validateEmail(email)) {
    alert("Please check your Email");
  } else {
    //you can proceed now
    $(".btn-validate").hide();
    setTimeout(
      function(){
        $(".letMeIn").show();
        $(".letMeIn").addClass("displayBlock");
      },2000);
  }
}

function validateEmail($email) {
 var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
 return emailReg.test( $email );
}
