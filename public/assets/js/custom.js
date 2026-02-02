/* =====================================
All JavaScript fuctions Start
======================================*/

(function ($) {
	
    'use strict';
/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/	

	function shop_product_price(){
		jQuery("#ex2").slider({});
	}
	
	// > TouchSpin box function by  = jquery.bootstrap-touchspin.js =============== // 
function input_number_vertical_form(){	
	jQuery("input[name='demo_vertical2']").TouchSpin({
	  verticalbuttons: true,
	  verticalupclass: 'fa fa-plus',
	  verticaldownclass: 'fa fa-minus'
	});	
}
// Bootstrap Select box function by  = bootstrap-select.min.js
function Bootstrap_Select(){	
	jQuery('.selectpicker').selectpicker();
}	
	
//________Top Search bar Show Hide function by = custom.js________//	
	
	 function site_search(){
			jQuery('a[href="#search"]').on('click', function(event) {                    
			jQuery('#search').addClass('open');
			jQuery('#search > form > input[type="search"]').focus();
		});
					
		jQuery('#search, #search button.close').on('click keyup', function(event) {
			if (event.target === this || event.target.className === 'close') {
				jQuery(this).removeClass('open');
			}
		});  
	 }	
	 
	 
//________Video responsive function by = custom.js________//	

	function video_responsive(){	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
	}  


//________magnificPopup function	by = magnific-popup.js________//	

	function magnific_popup(){
        jQuery('.mfp-gallery').magnificPopup({
          delegate: '.mfp-link',
          type: 'image',
          tLoading: 'Loading image #%curr%...',
          mainClass: 'mfp-img-mobile',
          gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
          },
          image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
          }
       });
	}
	

//________ magnificPopup for video function	by = magnific-popup.js________//	
	
	function magnific_video(){	
		jQuery('.mfp-video').magnificPopup({
			type: 'iframe',
		});
	}
	

//________Vertically center Bootstrap modal popup function by = custom.js________//	

	function popup_vertical_center(){	
		jQuery(function() {
			function reposition() {
				var modal = jQuery(this),
				dialog = modal.find('.modal-dialog');
				modal.css('display', 'block');
				// Dividing by two centers the modal exactly, but dividing by three 
				// or four works better for larger screens.
				dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
			}
			// Reposition when a modal is shown
			jQuery('.modal').on('show.bs.modal', reposition);
			// Reposition when the window is resized
			jQuery(window).on('resize', function() {
				jQuery('.modal:visible').each(reposition);
			});
		});
	}
	



//________page scroll top on button click function by = custom.js________//	

	function scroll_top(){
		jQuery("button.scroltop").on('click', function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

		jQuery(window).on("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
	}
	

//________graph images moving function by = jquery.bgscroll.js	________//	
	function bg_moving(){
		jQuery( function() {			  
		jQuery('.bg-moving').bgscroll({scrollSpeed:20 , direction:'h' });
		});
	}

//________input type file function by = custom.js________//	
	 
	function input_type_file_form(){
		jQuery(document).on('change', '.btn-file :file', function() {
			var input = jQuery(this)
				numFiles = input.get(0).files ? input.get(0).files.length : 1,
				label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [numFiles, label]);
		});

		jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			var input = jQuery(this).parents('.input-group').find(':text'),
				log = numFiles > 10 ? numFiles + ' files selected' : label;
			if (input.length) {
				input.val(log);
			} else {
				if (log) alert(log);
			}
		});	
	}
	

//________ input Placeholder in IE9 function by = custom.js________//	

	function placeholderSupport(){
	/* input placeholder for ie9 & ie8 & ie7 */
		jQuery.support.placeholder = ('placeholder' in document.createElement('input'));
		/* input placeholder for ie9 & ie8 & ie7 end*/
		/*fix for IE7 and IE8  */
		if (!jQuery.support.placeholder) {
			jQuery("[placeholder]").on('focus', function () {
				if (jQuery(this).val() === jQuery(this).attr("placeholder")) jQuery(this).val("");
			}).blur(function () {
				if (jQuery(this).val() === "") jQuery(this).val(jQuery(this).attr("placeholder"));
			}).blur();

			jQuery("[placeholder]").parents("form").on('submit', function () {
				jQuery(this).find('[placeholder]').each(function() {
					if (jQuery(this).val() === jQuery(this).attr("placeholder")) {
						 jQuery(this).val("");
					}
				});
			});
		}
		/*fix for IE7 and IE8 end */
	}	
	


//________ footer fixed on bottom function by = custom.js________//	

	function footer_fixed() {
	  jQuery('.site-footer').css('display', 'block');
	  jQuery('.site-footer').css('height', 'auto');
	  var footerHeight = jQuery('.site-footer').outerHeight();
	  if(jQuery('.footer-fixed').length){
		  jQuery('.footer-fixed .page-wraper').css('padding-bottom', footerHeight);
	  }else{
		  jQuery('.page-wraper').css('padding-bottom', '0px');
	  }
	  
	  jQuery('.site-footer').css('height', footerHeight);
	}

	
//________STICKY MENU WHEN SCROLL DOWN________//	

function sticky_header(){
	if(jQuery('.sticky-header').length){
		var sticky = new Waypoint.Sticky({
		  element: jQuery('.sticky-header')
		})
	}
}		
//________accordion active calss function by = custom.js________//	

	function accordion_active() {
		$('.acod-head a').on('click', function() {
			$('.acod-head').removeClass('acc-actives');
			$(this).parents('.acod-head').addClass('acc-actives');
			$('.acod-title').removeClass('acc-actives'); //just to make a visual sense
			$(this).parent().addClass('acc-actives'); //just to make a visual sense
			($(this).parents('.acod-head').attr('class'));
		 });
	}	
	


	 
	
	
	
//________home_client_carouse function by = owl.carousel.js ________//	

	function home_client_carousel(){
	jQuery('.home-client-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		dots: false,
		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		responsive:{
			0:{
				items:2
			},
			480:{
				items:3
			},			
			767:{
				items:4
			},
			1000:{
				items:5
			}
		}
	});
	}	


//________ Projects carousel  function by = owl.carousel.js________//	

function home_projects_filter(){
		
		var owl = jQuery('.owl-carousel-filter').owlCarousel({
		loop:false,
		autoplay:false,
		margin:30,
		nav:true,
		dots: false,
		navText: ['Prev', 'Next'],
		responsive:{
			0:{
				items:1,
			},
			540:{
				items:2,
			},
			768:{
				items:3,
			},			
			991:{
				items:3
			},
			1136:{
				items:4
			},					
			1366:{
				items:5
			}	
		    }
		})
		
		/* Filter Nav */

		jQuery('.btn-filter-wrap').on('click', '.btn-filter', function(e) {
			var filter_data = jQuery(this).data('filter');

			/* return if current */
			if(jQuery(this).hasClass('btn-active')) return;

			/* active current */
			jQuery(this).addClass('btn-active').siblings().removeClass('btn-active');

			/* Filter */
			owl.owlFilter(filter_data, function(_owl) { 
				jQuery(_owl).find('.item').each(owlAnimateFilter); 
			});
		})
	
	
	
	}	


	function contact_slide(){
	jQuery('.contact-slide-show').on('click', function () {	
		jQuery('.contact-slide-hide').animate({'right': '0px'});
	});
	jQuery('.contact_close').on('click', function () {	
		jQuery('.contact-slide-hide').animate({'right': '100%'});
	});		
	};		

	//________  Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
	function sticky_sidebar(){		
		$('.sticky_column')
			.theiaStickySidebar({
				additionalMarginTop: 100
			});		
	}

//________ Login Signup Form function by = custom.js ________//		
	function Get_in_touch(){		
	   $(".input input , .input textarea").focus(function() {
	
		  $(this).parent(".input").each(function() {
			 $("label", this).css({
				"line-height": "18px",
				"font-size": "12px",
				"font-weight": "500",
				"top": "0px"
			 })
			 $(".spin", this).css({
				"width": "100%"
			 })
		  });
	   }).blur(function() {
		  $(".spin").css({
			 "width": "0px"
		  })
		  if ($(this).val() == "") {
			 $(this).parent(".input").each(function() {
				$("label", this).css({
				   "line-height": "40px",
				   "font-size": "12px",
				   "font-weight": "500",
				   "top": "10px"
				})
			 });
	
		  }
	   });
	}
	



			
/*--------------------------------------------------------------------------------------------
	Window on load ALL FUNCTION START
---------------------------------------------------------------------------------------------*/

//________equal each box function by  = custom.js________//	

	function equalheight(container) {
		var currentTallest = 0, 
			currentRowStart = 0, 
			rowDivs = new Array(), 
			$el, topPosition = 0,
			currentDiv = 0;

		jQuery(container).each(function() {
			$el = jQuery(this);
			jQuery($el).height('auto');
			var topPostion = $el.position().top;
			if (currentRowStart != topPostion) {
				for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.height();
				rowDivs.push($el);
			} else {

				rowDivs.push($el);
				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			}

			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
	}


	

//________masonry function function by = isotope.pkgd.min.js________//	

	function masonryBox() {
		if ( jQuery().isotope ) {      
			var $container = jQuery('.masonry-outer');
				$container.isotope({
					itemSelector: '.masonry-item',
					transitionDuration: '1s',
					originLeft: true,
					stamp: '.stamp',
				});

			$container.imagesLoaded().progress( function() {
				$container.isotope('layout');
			});

			jQuery('.masonry-filter li').on('click',function() {                           
				var selector = jQuery(this).find("a").attr('data-filter');
				jQuery('.masonry-filter li').removeClass('active');
				jQuery(this).addClass('active');
				$container.isotope({ filter: selector });
				return false;
			});
		};
	}
		


		


	
//________skills bar function function by  = custom.js ________//	


	/* 2.1 skills bar tooltips*/
	function progress_bar_tooltips() {
		jQuery(function () { 
		  jQuery('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
		});  
	}

	/* 2.2 skills bar widths*/

	function progress_bar_width() {	
		jQuery(window).on('scroll', function(){   
		  jQuery(".progress-bar").each(function(){
			progress_bar_width = jQuery(this).attr('aria-valuenow');
			jQuery(this).width(progress_bar_width + '%');
		  });
		}); 
	}
	

/*--------------------------------------------------------------------------------------------
    Window on scroll ALL FUNCTION START
---------------------------------------------------------------------------------------------*/

    function color_fill_header() {
        var scroll = $(window).scrollTop();
        if(scroll >= 100) {
            $(".is-fixed").addClass("color-fill");
        } else {
            $(".is-fixed").removeClass("color-fill");
        }
    };	

/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
	jQuery(document).ready(function() {
			//  Shop Product Price Range Slider function by = bootstrap-slider.min.js ========================== //
			shop_product_price(),
			// > TouchSpin box function by  = jquery.bootstrap-touchspin.js =============== // 
			input_number_vertical_form(),
			// Bootstrap Select box function by  = bootstrap-select.min.js
			Bootstrap_Select(),
			//________Top Search bar Show Hide function by = custom.js ________//	 		
			site_search(),
			contact_slide(),
	       //________  Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
	        sticky_sidebar(),
			
			masonryBox(),
					
			//________graph images moving function by = jquery.bgscroll.js	________//	
             bg_moving()		
			//________Video responsive function by = custom.js ________//	
			video_responsive(),
			//________magnificPopup function	by = magnific-popup.js________//	
			magnific_popup(),
			//________magnificPopup for video function	by = magnific-popup.js________//	
			magnific_video(),
			//________Vertically center Bootstrap modal popup function by = custom.js________//	
			popup_vertical_center();
			//________Main menu sticky on top  when scroll down function by = custom.js	________//		
			sticky_header(),
			//________page scroll top on button click function by = custom.js________//		
			scroll_top(),
			//________input type file function by = custom.js	 ________//		
			input_type_file_form(),
			//________ input Placeholder in IE9 function by = custom.js	________//		
			placeholderSupport(),
			//________footer fixed on bottom function by = custom.js________//		
			footer_fixed(),
			//________accordion active calss function by = custom.js ________//	
			accordion_active(),
			
			//________Client logo Carousel function by = owl.carousel.js________//	
			home_client_carousel(),
			//________ Login Signup Form function by = custom.js ________//		
			Get_in_touch(),
			
			//________Projects carousel  function by = owl.carousel.js________//	
			home_projects_filter()		
			//________skills bar function function by  = custom.js________//				
			progress_bar_tooltips(),
			//________skills bar function function by  = custom.js________//			
			progress_bar_width()
		
				
	}); 

 /*===========================
	Window Scroll ALL FUNCTION START
===========================*/

	jQuery(window).on('scroll', function () {
//________Window on scroll header color fill________//	 
		color_fill_header()
		
	});
	
/*===========================
	Window Resize ALL FUNCTION START
===========================*/

	jQuery(window).on('resize', function () {
//________ footer fixed on bottom function by = custom.js	________//		 
	 	footer_fixed(),
	    equalheight(".equal-wraper .equal-col")	
	});

/*===========================
	Document on  Submit FUNCTION START
===========================*/

//________ Contact form function by = custom.js________//		
	jQuery(document).on('submit', 'form.cons-contact-form', function(e){
		e.preventDefault();
		var form = jQuery(this);
		/* sending message */
		jQuery.ajax({
			url: 'http://7xtheme.com/inteshape/form-handler.php',
			data: form.serialize() + "&action=contactform",
			type: 'POST',
			dataType: 'JSON',
			beforeSend: function() {
				jQuery('.loading-area').show();
			},

			success:function(data){
				jQuery('.loading-area').hide();
				if(data['success']){
				jQuery("<div class='alert alert-success'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');
				}else{
				jQuery("<div class='alert alert-danger'>"+data['message']+"</div>").insertBefore('form.cons-contact-form');	
				}
			}
		});
		jQuery('.cons-contact-form').trigger("reset");
		return false;
	});
	
	
	
	
//________ Contact form home page function by = custom.js________//	

	jQuery(document).on('submit', 'form.cons-contact-form2', function(e){
		e.preventDefault();
		var form = jQuery(this);
		/* sending message */
		
		jQuery.ajax({
			url: 'http://7xtheme.com/inteshape/form-handler2.php',
			data: form.serialize() + "&action=contactform",
			type: 'POST',
			dataType: 'JSON',
			beforeSend: function() {
				jQuery('.loading-area').show();
				
			},

			success:function(data){
				jQuery('.loading-area').hide();
				if(data['success']){
				jQuery("<div class='alert alert-success'>"+data['message']+"</div>").insertBefore('form.cons-contact-form2');
				}else{
				jQuery("<div class='alert alert-danger'>"+data['message']+"</div>").insertBefore('form.cons-contact-form2');
				}
			}
		});
		jQuery('.cons-contact-form2').trigger("reset");
		return false;
	});		
		

/*===========================
	Document on  Submit FUNCTION END
===========================*/	

	
//________Switcher panal slide function END	________//	




})(jQuery);

/*--------------------------------------------------------------------------------------------
	Window Load START
---------------------------------------------------------------------------------------------*/
	jQuery(window).on('load', function () {
		
		//  Shop Product Price Range Slider function by = bootstrap-slider.min.js ========================== //
		shop_product_price(),
		// > TouchSpin box function by  = jquery.bootstrap-touchspin.js =============== // 
		input_number_vertical_form(),
		// Bootstrap Select box function by  = bootstrap-select.min.js
		Bootstrap_Select(),
		
		//________equal each box function by  = custom.js________//				
		equalheight(".equal-wraper .equal-col"),
		//________masonry function function by = isotope.pkgd.min.js________//			
		masonryBox(),
		//________background image parallax function by = stellar.js	________//	
		bg_image_stellar(),
		//________page loader function by = custom.js________//			
		page_loader()
		
});
	
	//________masonry function function by = isotope.pkgd.min.js________//	

	function masonryBox() {
        if ( jQuery().isotope ) {      
            var $container = jQuery('.masonry-outer');
                $container.isotope({
                    itemSelector: '.masonry-item',
                    transitionDuration: '1s',
					originLeft: true,
					stamp: '.stamp',
                });

            jQuery('.masonry-filter li').on('click',function() {                           
                var selector = jQuery(this).find("a").attr('data-filter');
                jQuery('.masonry-filter li').removeClass('active');
                jQuery(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
    	};
	}
	
	//________equal each box function by  = custom.js________//	

	function equalheight(container) {
		var currentTallest = 0, 
			currentRowStart = 0, 
			rowDivs = new Array(), 
			$el, topPosition = 0,
			currentDiv = 0;

		jQuery(container).each(function() {
			$el = jQuery(this);
			jQuery($el).height('auto');
			var topPostion = $el.position().top;
			if (currentRowStart != topPostion) {
				for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
					rowDivs[currentDiv].height(currentTallest);
				}
				rowDivs.length = 0; // empty the array
				currentRowStart = topPostion;
				currentTallest = $el.height();
				rowDivs.push($el);
			} else {

				rowDivs.push($el);
				currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
			}

			for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
				rowDivs[currentDiv].height(currentTallest);
			}
		});
	}
	
	//________background image parallax function by = stellar.js ________//		
	function bg_image_stellar(){
		jQuery(function(){
				jQuery.stellar({
					horizontalScrolling: false,
					verticalOffset:0
				});
			});			
	}
	
	//________page loader function by = custom.js________//	

	function page_loader() {
		jQuery('.loading-area').fadeOut(1000)
	};

		function shop_product_price(){
		jQuery("#ex2").slider({});
	}
	
	// > TouchSpin box function by  = jquery.bootstrap-touchspin.js =============== // 
function input_number_vertical_form(){	
	jQuery("input[name='demo_vertical2']").TouchSpin({
	  verticalbuttons: true,
	  verticalupclass: 'fa fa-plus',
	  verticaldownclass: 'fa fa-minus'
	});	
}
// Bootstrap Select box function by  = bootstrap-select.min.js
function Bootstrap_Select(){	
	jQuery('.selectpicker').selectpicker();
}	