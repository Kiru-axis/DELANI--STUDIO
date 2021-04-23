"use strict";
$(document).ready(function () {

//user interface

  // hidden awaiting an event
  $(".alert").hide();
  //what we do section
  $("#design").hide();
  $("#development").hide();
  $("#product").hide();


  //hiding portfolio images
  $(".stack-text-1").hide();
  $(".stack-text-2").hide();
  $(".stack-text-3").hide();
  $(".stack-text-4").hide();
  $(".stack-text-5").hide();
  $(".stack-text-6").hide();
  $(".stack-text-7").hide();
  $(".stack-text-8").hide();

  
  //1. Design
  $("div.img-text-1").click(function () {
    $("div.img-text-1").toggle();
    $("#design").hide();
  });
  $("#design").click(function () {
    $("div.img-text-1").toggle();
    $("#design").hide();
  });


  //2 .Development
  $("div.img-text-2").click(function () {
    $("div.img-text-2").toggle();
    $("#development").hide();
  });
  $("#development").click(function () {
    $("div.img-text-2").toggle();
    $("#development").hide();
  });


  //3. Product
  $("div.img-text-3").click(function () {
    $("div.img-text-3").toggle();
    $("#product").hide();
  });
  $("#product").click(function () {
    $("div.img-text-3").toggle();
    $("#product").hide();
  });



  // Busuness logic

  //what we do 
  //----------------------------------------------------------------------------------------
  //design
  $("div.img-text-1").click(function () {
    $("#design").show();
    $("div.img-text-1").hide();
    $("#design").css("text-align", "center");
    $("#design h6").css("text-align", "center");
    $("#design h6").css("font-weight", "bolder");
  });

  //development
  $("div.img-text-2").click(function () {
    $("#development").show();
    $("div.img-text-2").hide();
    $("#development").css("text-align", "center");
    $("#development h6").css("text-align", "center");
    $("#development h6").css("font-weight", "bolder");
  });
  
  //product
  $("div.img-text-3").click(function () {
    $("#product").show();
    $("div.img-text-3").hide();
    $("#product").css("text-align", "center");
    $("#product h6").css("text-align", "center");
    $("#product h6").css("font-weight", "bolder");
  });

//----------------------------------------------------------------------
  //-portfolio section
  //showing portfolio image text 1 on mouse over
  $(".img1").mouseover(function () {
    $(".image-description").addClass("hoverImg");
    $(".stack-text-1").show();
  });
  //hide on mouseout
  $(".img1").mouseout(function () {
    $(".stack-text-1").hide();
  });


  //showing portfolio image text 2 on mouse over
  $(".img2").mouseover(function () {
    $(".image-description").addClass("hoverImg");
    $(".stack-text-2").show();
  });
  //hide on mouseout
  $(".img2").mouseout(function () {
    $(".stack-text-2").hide();
  });


  //showing portfolio image text 3 on mouse over
  $(".img3").mouseover(function () {
    $(".image-description").addClass("hoverImg");
    $(".stack-text-3").show();
  });
  //hide on mouseout
  $(".img3").mouseout(function () {
    $(".stack-text-3").hide();
  });


  //showing portfolio image text 4 on mouse over
  $(".img4").mouseover(function () {
    $(".image-description").addClass("hoverImg");
    $(".stack-text-4").show();
  });
  //hide on mouseout
  $(".img4").mouseout(function () {
    $(".stack-text-4").hide();
  });


  //showing portfolio image text 5 on mouse over
  $(".img5").mouseover(function () {
    $(".image-description").addClass("hoverImg");
    $(".stack-text-5").show();
  });
  //hide on mouseout
  $(".img5").mouseout(function () {
    $(".stack-text-5").hide();
  });


  //showing portfolio image text 6 on mouse over
  $(".img6").mouseover(function () {
    $(".image-description").addClass("hoverImg");
    $(".stack-text-6").show();
  });
  //hide on mouseout
  $(".img6").mouseout(function () {
    $(".stack-text-6").hide();
  });


  //showing portfolio image text 7 on mouse over
  $(".img7").mouseover(function () {
    $(".image-description").addClass("hoverImg");
    $(".stack-text-7").show();
  });
  //hide on mouseout
  $(".img7").mouseout(function () {
    $(".stack-text-7").hide();
  });


  //showing portfolio image text 8 on mouse over
  $(".img8").mouseover(function () {
    $(".image-description").addClass("hoverImg");
    $(".stack-text-8").show();
  });
  //hide on mouseout
  $(".img8").mouseout(function () {
    $(".stack-text-8").hide();
  });

  // form section
//------------------------------------------------------------------------------------------------------------------
  $("form.user-input").submit(function (event) {
    let userName = $("#name").val();
    let userEmail = $("#email").val();
    let userMessage = $("#user-msg").val();

    //output name, email and message
    $("#hisName").html(userName);
    $("#hisEmail").html(userEmail);
    $("#hisMessage").html(userMessage);
    $(".alert").show();

    alert(
      `Hello ${userName} . we have recieved your message, and we thank you for reaching out to us.`
    );
    
    event.preventDefault();
  });
});
