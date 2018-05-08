/*************NAV (except for resources page)********************/
//features and history mobile nav
$(document).ready(function () {
  if ($(window).width() <= 500){
  $("#fixednav").hide(); 
  $("#navbtn").hide(); 
  $("#mobile").show(); 
  } else {$("#fixednav").hide(); 
  $("#mobile").hide(); 
  $("#navbtn").show();} 
});

//only triggers when history and features window are resized
$(window).on("resize", function (event){
	var windowSize = $(window).width();
    if (windowSize <= 500){
    $("#fixednav").hide();
    $("#navbtn").hide();
    $("#mobile").show(); } 
    else if (windowSize >= 501){
    $("#fixednav").hide();
    $("#mobile").hide();
    $("#navbtn").show();} 
});

//mobile menu animation
function myFunction(x) { 
  x.classList.toggle("change");}

//hide and toggle mobile links
$(function() {
  $("#siteunder").hide();
  $("#shareunder").hide();
  $("#sharetrigger").click(function () {
  $("#shareunder").toggle();});
  $("#sitetrigger").click(function () {
  $("#siteunder").toggle();});});  

//desktop/tablet navbtn
$(document).ready(function(){
 $("#navbtn").click(function (){
  $("#fixednav").toggle("slide",{direction: "left"}, 1000);});
});

/*************INDEX PAGE********************/

//landing mobile window size hover fix
$(document).ready(function() {
  if ($(window).width() <= 700) {
    $(".trimg").hide();
    $(".ltext").hide();
    $(".imgtxt").show();}
  else {
    $(".ltext").show();
    $(".imgtxt").hide();
    $(".trimg").show();} 
});

//only triggers when landing window is resized
$(window).on("resize", function (event){
	var windowSize = $(window).width();
    if (windowSize <= 700){
    $(".trimg").hide();
    $(".ltext").hide();
    $(".imgtxt").show();} 
    else if (windowSize >= 701){
    $(".ltext").show();
    $(".imgtxt").hide();
    $(".trimg").show();} 
});

/*************HISTORY PAGE********************/
//enables popover in bootstrap for events in timeline (and on trainnamegame in resources page)
$(document).ready(function (){
    $('[data-toggle="popover"]').popover();   
});

//history effect/animation changes
$(document).ready(function (){
  $("#history").delay(700);
  $("#history").animate({"opacity": 0}, 2000, function () {$("#history").text("History");}).animate({"opacity": 1}, 1000);
});

//history mobile/tablet design
$(document).ready(function () {
  if ($(window).width() <= 500) {
  $("iframe").css("width", "300px");} 
  else {
  $("iframe").css("width", "450px");} 
});

//only triggers when history window is resized
$(window).on("resize", function (event){
	var windowSize = $(window).width();
  if (windowSize <= 500){
  $("iframe").css("width", "300px");} 
    else if (windowSize >= 501){
  $("iframe").css("width", "450px");} 
});

/*************FEATURES PAGE********************/

//features psc mobile design
$(document).ready(function () {
  if ($(window).width() <= 500) {
    $(".days").hide();}
  else {
    $(".days").show();} 
});

//only triggers when features window is resized
$(window).on("resize", function (event){
	var windowSize = $(window).width();
  if (windowSize <= 500){
  $(".days").hide(); } 
  else if (windowSize >= 501){
  $(".days").show();}
});

//psc effect/animation changes
$(document).ready(function (){
  $("#features").delay(700);
  $("#features").animate({"opacity": 0}, 2000, function () {$("#features").text("Features");}).animate({"opacity": 1}, 1000);
  
  $("#psc").delay(700);
  $("#psc").animate({"opacity": 0}, 2000, function () {$("#psc").text("Trivia Tidbits");}).animate({"opacity": 1}, 1000);
  
  $("#age").delay(700);
  $("#age").animate({"opacity": 0}, 2000, function () {$("#age").text("27 October 1904 to Present Day");}).animate({"opacity": 1}, 1000);

  $("#boro").delay(700);
  $("#boro").animate({"opacity": 0}, 2000, function () {$("#boro").text("Did you know...");}).animate({"opacity": 1}, 1000);
  
  $("#reveal").delay(700);
  $("#reveal").animate({"opacity": 0}, 2000, function () {$("#reveal").text("Curious? Tap the 3 Train!");}).animate({"opacity": 1}, 1000);
  
  $("#clk").delay(700);
  $("#clk").animate({"opacity": 0}, 2000, function () {$("#clk").text("(As many times as you would like!)");}).animate({"opacity": 1}, 1000).delay(2000).animate({"opacity": 0});
});

//trivia generator fn
function generator (){
   var trivia = ["The MTA subway system began as three competing transit companies. The Interborough Rapid Transit (IRT), Brooklyn-Manhattan Transit (BMT), and Independent Rapid Transit Railroad (IND) lines operated independently until 1953.", 
    "On July 25, 1953, NYC's once iconic brass tokens were introduced when fares were raised to 15 cents, since turnstiles would not accept tokens and coins.",
    "More people pass through the NYC subway every single day than live in all of Denmark.",
    "Laid end to end, all of the subway's tracks would stretch from New York to Chicago. There are approximately 660 miles of track in passenger service. Counting subway yards and other non-commercially used tracks, there are over 840 miles of track.",
    "The longest subway line is the A train, which covers more than 30 miles between 207th Street to Far Rockaway, Queens.",
    "There's a Signal Learning School for those training to become signal maintainers in the 14th Street and 8th Avenue Station. The door of the school even has a signal light that actually changes color.",
    "The 2nd Avenue Subway extension had been in the works since 1920!",
    "In 2016, an average of 5.66 million passengers used the system daily, making it the busiest rapid transit system in the United States and the seventh busiest in the world.",
    "Alfred E. Beach created the first underground subway, a 312-foot tunnel under lower Broadway, which ran a subway car from 1870-1873. The train was operated by pneumatic pressure, meaning it was blown by a giant fan.",
    "Subway passengers bought paper tickets to pay their fare until May 10, 1920. Coin-operated subway turnstiles took nickels and then dimes when the fare became ten cents.",
    "The green or red globes on the corners of many old subway entrances actually had meaning! As a general rule, entrances with red globes are closed at night, while those with green globes are open 24/7.",
    "The deepest subway station at the 191st Street station of the 1 train. The platform is 180 feet below street level.",
    "The Smith and 9th Streets station is the highest at 88 feet above street level.",
    "There is a black-and-white striped board in the middle of every station. The conductor needs to point at it to assure that the train has stopped in the right place.",
    "When tokens were still used, criminals intentionally jammed turnstiles and used their mouths to suck tokens out of the slots. To discourage this theft, some token booth clerks sprinkled chili powder in the slots, while some police officers sprayed a bit of mace and looked for bright red lips.",
    "During the 70s and 80s, when the subway system was at its lowest point, the 4 train was called the “Mugger’s Express. The police logged 250 felonies a week on the subway in 1979.",
    "MetroCard swipes are tracked and have successfully been used as an acceptable alibi to acquit people accused of committing crimes.",
    "The first air-conditioned subway cars were introduced in 1967.",
    "To combat graffiti, 7,000 subway cars were once painted pure white. The plan backfired, as graffiti artists enjoyed their blank canvas.",
    "In 2008, 44 old subway cars became an artifical reef off the coast Maryland.",
    "The MTA will email or fax you a late letter if a train delay causes you to be late for work <a  id='glink' href='http://enterprise.mtanyct.info/delayverify'>here.</a>",
    "Line and service are not interchangeable words in the MTA. Service is the route the train takes along lines. The line is the physical track the train runs on.",
    "In 1993, 16-year-old Keron Thomas posed as a train conductor and drove an A train for three hours before he accidentally triggered the emergency brake.",
    "The J and Z train lines are one of the oldest in Brooklyn, officially opened to the public in 1893. It was called the Broadway Elevated back then.",
    "77 out of about 468 stations have open restrooms...if you're desperate enough to use one.",
    "Colored tiles on the walls of the Independent Subway lines were to differentiate local stations between express ones. Many original colored tiles were lost during renovations, but some still can be found even today."];

var fact=trivia[Math.round(Math.random()*(trivia.length-1))];

document.getElementById("reveal").innerHTML=fact;}

//train name game animation
$(function () {
   $(".explode").click(function (){
    $(this).effect("explode",{pieces:20},1000);});
}); 

$(function () {
   $(".shake").click(function (){
    $(this).effect("shake", 2000);});
}); 

/***************RESOURCES****************/
//fare calculator 
$(document).ready(function (){
  $("#faresubmit").click(function (){
      var numride = $("#ridedesired").val();
      var cost = numride * 2.75;
      var costcal = cost.toFixed(2);
      $("#ridecost").text(costcal);
  });  
});

//resources mobile/tablet design
$(document).ready(function () {
  if ($(window).width() <= 700) {
    $("#navbrandtxt, .navbar-brand").hide();
    $(".snd").show();
    $("#gmap").css("width", "300px");} 
  else {
    $(".snd").hide();
    $("#navbrandtxt, .navbar-brand").show();
    $(".rj").addClass("spaceleft");
    $(".navbar").css("margin", "0 10vw");} 
});

//only triggers when resources window is resized
$(window).on("resize", function (event){
	var windowSize = $(window).width();
  if (windowSize <= 700){
    $("#navbrandtxt, .navbar-brand").hide();
    $(".snd").show();
    $(".rj").removeClass("spaceleft");
    $("#gmap").css("width", "300px");
    $(".navbar").css("margin", "0 20vw");} 
    else if (windowSize >= 701){
    $(".snd").hide();
    $("#navbrandtxt, .navbar-brand").show();
    $(".rj").addClass("spaceleft");
    $("#gmap").css("width", "660px");
    $(".navbar").css("margin", "0 10vw");}
});
