//Cart JS Script

// //Default Setting on load
// $( document ).ready(function() {
// //Remove Item-1
//     $(".hide-item-1").hide();
//     $(".hide-hr-1").hide();
// //Remove Item-2
//     $(".hide-item-2").hide();
//     $(".hide-hr-2").hide();
//  //Remove Item-3
//     $(".hide-item-3").hide();
//     $(".hide-hr-3").hide();
//  //Remove Item-4
//     $(".hide-item-4").hide();
//     $(".hide-hr-4").hide();
// //Remove Item-5
//     $(".hide-item-5").hide();
//     $(".hide-hr-5").hide();
//  //Remove Item-6
//     $(".hide-item-6").hide();
//     $(".hide-hr-6").hide();
//   });



//Item addition for Cart page
//Add Item-1
$(".add-btn-1").click(function(){
    $(".hide-item-1").show();
    $(".hide-hr-1").show();
 });

//Remove Item-2
$(".add-btn-2").click(function(){
    $(".hide-item-2").show();
    $(".hide-hr-2").show();
 });

 //Remove Item-3
$(".add-btn-3").click(function(){
    $(".hide-item-3").show();
    $(".hide-hr-3").show();
 });

 //Remove Item-4
$(".add-btn-4").click(function(){
    $(".hide-item-4").show();
    $(".hide-hr-4").show();
 });

//Remove Item-5
$(".add-btn-5").click(function(){
    $(".hide-item-5").show();
    $(".hide-hr-5").show();
 });

 //Remove Item-6
$(".add-btn-6").click(function(){
    $(".hide-item-6").show();
    $(".hide-hr-6").show();
 });



//Item removal for Cart page



//Remove Item-1
$(".rm-btn-1").click(function(){
    $(".hide-item-1").hide();
    $(".hide-hr-1").hide();
 });

//Remove Item-2
$(".rm-btn-2").click(function(){
    $(".hide-item-2").hide();
    $(".hide-hr-2").hide();
 });

 //Remove Item-3
$(".rm-btn-3").click(function(){
    $(".hide-item-3").hide();
    $(".hide-hr-3").hide();
 });

 //Remove Item-4
$(".rm-btn-4").click(function(){
    $(".hide-item-4").hide();
    $(".hide-hr-4").hide();
 });

//Remove Item-5
$(".rm-btn-5").click(function(){
    $(".hide-item-5").hide();
    $(".hide-hr-5").hide();
 });

 //Remove Item-6
$(".rm-btn-6").click(function(){
    $(".hide-item-6").hide();
    $(".hide-hr-6").hide();
 });

//Removal Item function
// function addtoCart(.rm-btn-1){

// }



//Remove expected shipping delivery date
//When items are all hidden
// if($(".hide-item-1").is(":hidden")){
//     $(".hide-item-6").hide();
//     $(".hide-hr-6").hide();
// }

setInterval(visibilityStat, 3000)

var allItemHidden = ($(".hide-item-1").is(":hidden")) && ($(".hide-item-1").is(":hidden")) && ($(".hide-item-1").is(":hidden")) && ($(".hide-item-1").is(":hidden")) && ($(".hide-item-1").is(":hidden")) && ($(".hide-item-1").is(":hidden"))

var item1visibility = ($(".hide-item-1").is(":hidden"))
var item2visibility = ($(".hide-item-2").is(":hidden"))
var item3visibility = ($(".hide-item-3").is(":hidden"))
var item4visibility = ($(".hide-item-4").is(":hidden"))
var item5visibility = ($(".hide-item-5").is(":hidden"))
var item6visibility = ($(".hide-item-6").is(":hidden"))

var itemAllvisibility = item1visibility && item2visibility && item3visibility && item4visibility && item5visibility && item6visibility

 console.log(itemAllvisibility)


function visibilityStat() {
if (itemAllvisibility) { 
    console.log(itemAllvisibility)
} else { 
} 
}
//Research jquery for it

//Adjust item count
//Do the cart count


//Problem 1 startup load not workign
//Communication between 2 pages not working
//Cant get to the detect if items are hidden

//How to continually repeat a query so that it
//test if an item is hidden or visible after code has run
//Because now hidden prompt only runs on page load


//I will decide if it is possible to fix my current code and if not will
//make the code based on video
