"use strict";
$(document).ready(function () {
  // hidden awaiting an event
  $(".alert").hide();
  //what we do section
  $("#design").hide();
  $("#development").hide();
  $("#product").hide();
  $(".stack-text").hide();

  //user interface
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

  // busuness logic
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

  //-portfolio section
  $(".image-description").hover(function () {
    $(".image-description").addClass("hoverImg");
    $(".stack-text").show();
  });

  // form section

  $("form.user-input").submit(function (event) {
    let userName = $("#name").val();
    let userEmail = $("#email").val();
    let userMessage = $("#user-msg").val();
    //output name, email and message
    $("#hisName").html(userName);
    $("#hisEmail").html(userEmail);
    $("#hisMessage").html(userMessage);
    $(".alert").show();
    // alert(
    //   `Hello ${userName} . we have recieved your message, and we thank you for reaching out to us.`
    // );
    event.preventDefault();
  });
});
// function success(){
//   let userName = document.getElementById("name").value;
//   let userEmail = document.getElementById("email").value;
//   let userMessage = document.getElementById("user-msg").value;
// };
