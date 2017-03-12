// Variables

"use strict";

var nbpics;
var currentpic;
var popup = $(".lx-popup");
var popupImg = $(".lx-popup-image img");
var popupTitle = $(".lx-popup-details ul li:eq(0) span");
var pupupCpic = $(".lx-popup-details ul li:eq(1) span");

// espand popup click event
$(".lx-portfolio-item", ".lx-portfolio").click(function(){

	// set nbpics to 0
	nbpics = 0;
	
	// get the number of pictures
	for(var i = 0;i < $(".lx-portfolio-item", ".lx-portfolio").length;i++){	

		if($(".lx-portfolio-item:eq("+i+")", ".lx-portfolio").parent().width() !== 0){
			
			// increment the number of pictures
			nbpics += 1;
			
			// pot the number of picture in the attribute data
			$(".lx-portfolio-item:eq("+i+")", ".lx-portfolio").attr("data",nbpics);
			
		}
		
	}
	
	// get current picture number
	currentpic = $(this).attr("data");
	
	// transmit information to the popup
	popupImg.attr("src",$(this).find("img").attr("src"));
	pupupCpic.text(currentpic + " of " + nbpics);
	popup.css({"display":"block"});
	return false;
});

// popup left arrow click event
	
	$(".lx-popup-inside a .fa-caret-left", ".lx-popup").click(function(){

	// test if the current picture is equal to the number pictures or not
	if(currentpic === 1){
		
		currentpic = nbpics;
		
	}
	else{
		
		currentpic = parseInt(currentpic) - 1;
		
	}
	
	// transmit information to the popup
	popupImg.attr("src",$(".lx-portfolio-item", ".lx-portfolio").eq(currentpic-1).find("img").attr("src"));
	pupupCpic.text(currentpic + " of " + nbpics);	
	
	return false;
});
// popup right arrow click event
$(".lx-popup-inside a .fa-caret-right", ".lx-popup").click(function(){

	// test if the current picture is equal to the number pictures or not
	if(currentpic === nbpics){
		
		currentpic = 1;
		
	}
	else{
		
		currentpic = parseInt(currentpic) + 1;
		
	}
	
	// transmit information to the popup
	popupImg.attr("src",$(".lx-portfolio-item", ".lx-portfolio").eq(currentpic-1).find("img").attr("src"));
	pupupCpic.text(currentpic + " of " + nbpics);	
	
	return false;
});

// popup remove click event
$("a .lnr-cross", ".lx-popup-image").click(function(){
	
	// hide popup
	popup.css({"display":"none"});	
	
	return false;
});

// document click event
$(document).click(function() {
	
	// hide popup
	popup.css({"display":"none"});
	
	return false;
});

// Hide the popup when esc key is clicked
$(document).on("keyup",function(e) {
	
    if(e.keyCode === 27) {
		
		// hide popup
		popup.css({"display":"none"});
		
    }
	
	return false;
});

// search-plus click event
$(".lx-portfolio-item", ".lx-portfolio").click(function(event) {
	
	// stop hide popup event
	event.stopPropagation();	
	
	return false;
});

// arrows click event
$(".lx-popup-content,.lx-popup-inside a .fa-caret-left,.lx-popup-inside a .fa-caret-right", ".lx-popup").click(function(event) {
	
	// stop hide popup event
	event.stopPropagation();
	
	return false;
});