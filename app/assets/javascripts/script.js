// Document load event

"use strict";

var wrapper = $(".lx-wrapper");
var menu = $(".lx-main-menu", ".lx-wrapper");
var blocs = $(".lx-blocs", ".lx-wrapper");
var infoImg = $(".lx-personal-info-img", ".lx-wrapper");
var mainImg = $(".lx-personal-info-img img");
var settings = $(".lx-settings", "body");

$(document).on("ready",function(){
	
	// Loader Fade Out
	window.setTimeout(function(){
		$(".lx-loader", "body").fadeOut();
		return false;
	},5000);

	// Redirection to the requested bloc
	hashHistory();

	return false;
});

$(window).on("hashchange",function(){	
	// Redirection to the requested bloc
	hashHistory();
	
	return false;
});

function hashHistory(){
	
	var page = "";
	if(window.location.hash) {
		page = document.location.hash;
		page = page.replace(/\#/,"");
	}
	else{
		page = "home";
	}
	
	// Remove active class from menus
	$(".lx-main-menu ul li a").removeClass("active");
	
	// Set clicked menu active
	$(".lx-main-menu ul li a[data-url='"+page+"']").addClass("active");
			
	// Show correspondant scetion
	if($(window).width() > 768){
		blocs.fadeOut();
		$("."+$(".lx-main-menu ul li a[data-url='"+page+"']").attr("data-title")).fadeIn();		
	}
	else{
		$('html, body').animate({scrollTop : $("."+$(".lx-main-menu ul li a[data-url='"+page+"']").attr("data-title")).offset().top-50},1000);
		$(".lx-main-menu ul").slideUp();
	}
	
}


$(".lx-skills").on("scroll",function(){
	if($(this).scrollTop() > $(".lx-bars-chart", this).position().top){
		// Loading bars
		for(var i = 0;i < $(".lx-bar", ".lx-bars-chart").length;i++){
			$(".lx-bar:eq("+i+") .lx-bar-counter", ".lx-bars-chart").text($(".lx-bar:eq("+i+")", ".lx-bars-chart").attr("data-max")+"%");
			$(".lx-bar:eq("+i+") .lx-bar-fill", ".lx-bars-chart").css("width",$(".lx-bar:eq("+i+")", ".lx-bars-chart").attr("data-max")+"%");			
		}	
	}
	
	return false;
});

$(document).on("scroll",function(){
	if($(this).scrollTop() > $(".lx-bars-chart", this).position().top - 300){
		// Loading bars
		for(var i = 0;i < $(".lx-bar", ".lx-bars-chart").length;i++){
			$(".lx-bar:eq("+i+") .lx-bar-counter", ".lx-bars-chart").text($(".lx-bar:eq("+i+")", ".lx-bars-chart").attr("data-max")+"%");
			$(".lx-bar:eq("+i+") .lx-bar-fill", ".lx-bars-chart").css("width",$(".lx-bar:eq("+i+")", ".lx-bars-chart").attr("data-max")+"%");			
		}	
	}
	
    // Set Current Section
    for (var i = 0; i < $(".lx-blocs").length; i++) {
        if ($(this).scrollTop() > $(".lx-blocs:eq(" + i + ")").offset().top) {
            $(".lx-menu-item").removeClass("active");
            $(".lx-menu-item[data-url='" + $(".lx-blocs:eq(" + i + ")").attr('class').split(' ')[0] + "']").addClass("active");

            
        }
    }
	return false;
});

// Header activation background 
$(document).on("scroll",function(){
	if ($(window).scrollTop() > 50) {
        $("#lx-header").addClass("active");
    } else {
        $("#lx-header").removeClass("active");
    }	
	
	
	return false;
});

// Main menu event : show correspondant section
$(".lx-main-menu ul li ").on("click", function() {
    // Remove active class from menus
    $(".lx-main-menu ul li ").removeClass("active");
    // Set clicked menu active
    $(this).addClass("active");
    history.pushState('data', '', 'index.html#' + $(this).attr("data-url"));
    // Scroll to the correspondant scetion
    $('html, body').animate({
        scrollTop: $("." + $(this).attr("data-url")).offset().top + 2
    }, 1000);
    if ($(window).width() < 769) {
        menu.css("left", "-40px");
        $(".lx-main-menu > i").attr("class", "fa fa-bars");
    }
    return false;
});

// Responsive menu event
$(".lx-main-menu > i").on("click",function(){
	
	var menuUl = $(".lx-main-menu ul");
	if(menuUl.css("display") != "block"){
		menuUl.slideDown();
	}
	else{
		menuUl.slideUp();
	}
	
	return false;
});	

// Responsive color setting event
$(".lx-settings > i").on("click", function() {
    if (settings.css("left") === "-160px") {
        settings.css("left", "0px");
        if ($(window).width() < 769) {
            $(".lx-main-menu > i").attr("class", "fa fa-bars");
            menu.css("left", "-40px");
            $(".lx-social-media > i").attr("class", "fa fa-share-alt");
            socialMedia.css("right", "-40px");
        }
    } else {
        settings.css("left", "-160px");
    }
    return false;
});

// Responsive color event
$(".lx-colors > a").on("click", function() {
    // Change style
    $("link[title='main']").attr("href", "css/" + $(this).attr("data-css-link"));
    return false;
});

// Contact Form Errors
$(".lx-form form input[type='button']").on("click",function(){
	
	var fullname = $(".lx-form form input[name='fullname']");
	if(fullname.val() == ""){
		fullname.after("<span>This field must be filled</span>").css("border-right","3px solid #a94442");
	}
	
	var email = $(".lx-form form input[name='email']");
	var patt = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	if(!patt.test(email.val())){
		email.after("<span>Invalid Email</span>").css("border-right","3px solid #a94442");
	}
	
	var txtarea = $(".lx-form form textarea");
	if(txtarea.val() == ""){
		txtarea.after("<span>This field must be filled</span>").css("border-right","3px solid #a94442");
	}
	
	return false;
});

$(".lx-form form input[name='email']").on("keyup",function(){
	var patt = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
	if(patt.test($(this).val())){
		$(this).css("border-right","0px").next("span").remove();
	}
	
	return false;
});

$(".lx-form form input[name='fullname']").on("keyup",function(){
	if($(this).val() != ""){
		$(this).css("border-right","0px").next("span").remove();
	}
	
	return false;
});

$(".lx-form form textarea").on("keyup",function(){
	if($(this).val() != ""){
		$(this).css("border-right","0px").next("span").remove();
	}
	
	return false;
});