$(document).ready(function() {
	$(window).scroll(function(){
		var wScroll = $(this).scrollTop();
		if (wScroll > 20) {
			$(".header").addClass("active");
		}
		else {
			$(".header").removeClass("active");
		}	
	});
	$('[data-opener]').click(function() {
		$this = $(this);
		if($this.is('.active')) {
			$this.removeClass('active');
			$('[data-target="'+$this.data('opener')+'"]').removeClass('active');
		}else{
			$this.addClass('active');
			$('[data-target="'+$this.data('opener')+'"]').addClass('active');
		}
	});
    $(".hero-slider").lightSlider({
    	item: 1,
    	autoWidth: false,
    	slideMove: 1,
    	loop: true
    });
    $(".blog__slider").lightSlider({
    	item: 3,
    	autoWidth: false,
    	slideMove: 1,
    	loop: true,
    		slideMargin: 30,
    	    responsive : [
    	               {
    	                   breakpoint:991,
    	                   settings: {
    	                       item:2
    	                     }
    	               },
    	               {
    	                   breakpoint:768,
    	                   settings: {
    	                       item:1
    	                     }
    	               }
    	           ]
    });
    var $grid = $('.portfolio__grid').imagesLoaded( function() {
    	  $grid.isotope({
    	    itemSelector: '.portfolio__item',
    	    percentPosition: true,
    	  });
    	});
    $grid.isotope({
       itemSelector: '.portfolio__item',
       layoutMode: 'fitRows',
       // fitRows: {
      	//    gutter: 30
      	// }

    });
    $('.portfolio__list-item').click(function(){
		$('.portfolio__list-item').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$grid.isotope({
			filter: selector
		});
		return false;
	});
  });