// JavaScript Document
$(function(){
			//menu in small devices;
		$(".menu-icon").click(function(e) {
            $("nav").toggle(800);
			this.hide()
        });

//gallary for features
    	var slideIndex = 0;
		var imgIndex = 0;
		$(".wait").css("display","none");
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slid");
    var imgs = document.getElementsByClassName("img");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    slideIndex++;
	imgIndex++;
    if (slideIndex> slides.length) {slideIndex = 1} $(".one").click(function(e) {

        slideIndex = 0;
		$(".wait").css("display","block");
		$(this).css("cursor","default");
    });
	$(".two").click(function(e) {
		$(".wait").css("display","block");
        slideIndex = 1;
		$(this).css("cursor","default");
    });
	$(".three").click(function(e) {
		$(".wait").css("display","block");
        slideIndex = 2;
		$(this).css("cursor","default");
    });
	$(".four").click(function(e) {
		$(".wait").css("display","block");
        slideIndex = 3;
		$(this).css("cursor","default");
    });
	$(".five").click(function(e) {
		$(".wait").css("display","block");
        slideIndex = 4;
		$(this).css("cursor","default");
    });
    slides[slideIndex-1].style.display = "block";
	setTimeout(showSlides,15000);
		$(".wait").css("display","none");
		$(".programs img").css("cursor","pointer");
}



	$("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
     event.preventDefault();
	}
      // Store hash
     var hash = this.hash;

      $('html, body').animate({scrollTop: $(hash).offset().top}, 800, function(){window.location.hash = hash;}); /* End if*/});

//gallary for developers
		var i = 0;

			//عرض الوسم يساوي عرض الصور في عددها
			$("#next").click(function(){
				if(i == -3){
				i=1;}
				i--;
				});
				$("#prev").click(function(){
					if(i==0)
					i=-4;
				i++;});
			$("#next,#prev").click(function(){
				var slide = i*1000;
				$("#slides").animate({'right': slide},400);
				});

		});

/*

waypoint plugin implemintation

*/// variables for animation below
			var services = $("#features");
			var header = $("header");


			var cards = $(".cards");
			var card = $(".card");

			var contact = $(".contact-us");
			var inputs = $("input , textarea , .contact-us a, .call");
			//implementation of animation on scroling below
			services.waypoint(function(direction){
					if(direction == 'down'){
						header.addClass(" fixed");
						console.log('Scrolled to contct!')
					}
					else{
						header.removeClass(" fixed");
					}
			},{offset : "2px"});

			cards.waypoint(function(direction){
				if(direction == 'down'){
					card.addClass("flipInX");
					card.addClass("visibal");
				}
				else{
					card.removeClass("flipInX");
					card.removeClass("visibal");
				}
			}, {offset : "50%"});




		var prog = $("#project");
		var imgs = $(".imgs");
		var text = $(".text");

		prog.waypoint(function(direction){
					if(direction == 'down'){
						header.addClass("no-shadow");
					}
					else{
						header.removeClass("no-shadow");
					}
		});
		prog.waypoint(function(direction){
				if(direction == 'down'){
					imgs.addClass("fadeInLeft");
					text.addClass("fadeInRight");
				}
			}, {offset : "10%"});





		var about = $("#about");
		var historyText = $(".history p");
		var developers = $(".developers");
			about.waypoint(function(direction){
					if(direction == 'down'){
						header.removeClass("no-shadow");
					}
					else{
						header.addClass("no-shadow");
					}
			})
			about.waypoint(function(direction){
					if(direction == 'down'){
						historyText.addClass("fadeInUp");
						historyText.addClass("visibal");
					}
					else{
						historyText.removeClass("fadeInUp");
						historyText.removeClass("visibal");
					}
			}, {offset : "40%"});
			about.waypoint(function(direction){
					if(direction == 'down'){
						developers.addClass(" fadeInUp");
						developers.addClass("visibal");
					}
					else{
						developers.removeClass(" fadeInUp");
						developers.removeClass("visibal");
					}
			}, {offset : "15%"});


			// variables for animation below
			var services = $("#features");
			var header = $("header");


			var cards = $(".cards");
			var card = $(".card");

			var contact = $(".contact-us");
			var inputs = $("input , textarea , .contact-us a, .call");
			//implementation of animation on scroling below
			services.waypoint(function(direction){
					if(direction == 'down'){
						header.addClass(" fixed");
						console.log('Scrolled to contct!')
					}
					else{
						header.removeClass(" fixed");
					}
			},{offset : "2px"});

			contact.waypoint(function(direction){
					if(direction == 'down'){
						inputs.addClass(" fadeInUp");
						inputs.addClass("visibal");
					}
					else{
						inputs.removeClass(" fadeInUp");
						inputs.removeClass("visibal");
					}
			}, {offset : "40%"});
