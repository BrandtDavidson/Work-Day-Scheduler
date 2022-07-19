// Declaring all of the class form input field (text area) for jquery 


var nineAm = $("#09am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#01pm");
var twoPm = $("#02pm");
var threePm = $("#03pm");
var fourPm = $("#04pm");
var fivePm = $("#05pm");


// moment().js here



var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

var hour = moment().hours();
var userInput;
var hourSpan;


var currentTimeInterval = setInterval(function() {
  var headerTime = moment();
  $('#currentDay').html(headerTime.format('YYYY MMMM DD') + ' '
                      + headerTime.format('dddd')
                       .substring(0,3).toUpperCase());
  $('#currentDay').html(currentDate + " " + headerTime.format('hh:mm:ss A'));
}, 100);

function genTime() {
  var genTime9 = JSON.parse(localStorage.getItem("09:00 am"));
  nineAm.val(genTime9);

  var genTime10 = JSON.parse(localStorage.getItem("10:00 am"))
  tenAm.val(genTime10);
  
  var genTime11 = JSON.parse(localStorage.getItem("11:00 am"))
  elevenAm.val(genTime11);
  
  var genTime12 = JSON.parse(localStorage.getItem("12:00 pm"))
  twelvePm.val(genTime12);
  
  var genTime13 = JSON.parse(localStorage.getItem("01:00 pm"))
  onePm.val(genTime13);
  
  var genTime14 = JSON.parse(localStorage.getItem("02:00 pm"))
  twoPm.val(genTime14);
  
  var genTime15 = JSON.parse(localStorage.getItem("03:00 pm"))
  threePm.val(genTime15);
 
  var genTime16 = JSON.parse(localStorage.getItem("04:00 pm"))
  fourPm.val(genTime16);
  
  var genTime17 = JSON.parse(localStorage.getItem("05:00 pm"))
  fivePm.val(genTime17);
} 

function timeProcess () {
      
  $(".formInputField").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(timeTest);
      console.log(hour);

      if (hour > timeTest) {
          $(this).addClass("past");
      } else if (hour < timeTest) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}

$(document).ready(function(){
  genTime()
  timeProcess()


  $(".saveBtn").on("click", function(){
    userInput = $(this).siblings(".formInputField").val().trim();
    console.log(userInput);
    hourSpan = $(this).siblings(".hourlyTimeArea").text().trim();
    console.log(hourSpan);
    localStorage.setItem(hourSpan, JSON.stringify(userInput));

  })

  $("#clearEvents").on("click", function(){
    localStorage.clear();
    genTime()
  }) 

});