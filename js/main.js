$(document).ready(function(){

	//-- OPEN MOBILE MENU -------//
	$('.mobile-menu-icon').click(function(){
		$('.mobile-menu').slideToggle();
	});



	//-- CAROUSEL -------//

	//cache DOM
	var $carousel = $('#carousel');
	var $slider = $carousel.find('.slider');
	var $carouselPhotos = $slider.find('.carousel-photo');

	//gallery config
	var animationSpeed = 600; 
	var pause = 5000;
	var currentSlide = 1; 

	var interval;

	function slideRight(){
		currentSlide++;
		if(currentSlide > $carouselPhotos.length){
			currentSlide = 1;
			$slider.animate({'margin-left': '0'},animationSpeed);
		}
		else {
			$slider.animate({'margin-left': (-100 * (currentSlide -1) + '%')}, animationSpeed);
		}
	}

	function slideLeft(){
		currentSlide--;
		if(currentSlide < 1){
			currentSlide = $carouselPhotos.length;
			$slider.animate({'margin-left': -100 * ( $carouselPhotos.length - 1) + '%'}, animationSpeed);
		}
		else {
			$slider.animate({'margin-left': (-100 * (currentSlide - 1) + '%')}, animationSpeed);
		}
	}

	function startSlider(){
		interval = setInterval(function(){
			slideRight();
		}, pause);
	};

	function stopSlider(){
		clearInterval(interval);
	};

	//stop sliding on mouseenter
	$carousel.on('mouseleave',startSlider).on('mouseenter',stopSlider);
	$('.carousel-controller').on('mouseleave',startSlider).on('mouseenter',stopSlider);

	
	//restart sliding function on window resize
	$(window).on('resize',function(){
		stopSlider();
		width = $('.gallery-cell').width(); //get new width
		startSlider();
	});

	//slide on click events
	$('.carousel-next').click(function(e){
		e.preventDefault();
		slideRight();
	});
	$('.carousel-prev').click(function(e){
		e.preventDefault();
		slideLeft();
	});

	startSlider(); //initiate sliding
	

});
