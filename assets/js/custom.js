/*
 *
 *		CUSTOM.JS
 *
 */

(function($){

	"use strict";

	// DETECT TOUCH DEVICE //
	function is_touch_device() {
		return !!('ontouchstart' in window) || ( !! ('onmsgesturechange' in window) && !! window.navigator.maxTouchPoints);
	}


	// SHOW/HIDE MOBILE MENU //
	function show_hide_mobile_menu() {

		$("#mobile-menu-button").on("click", function(e) {

			e.preventDefault();

			$("#mobile-menu").slideToggle(300);

        });

	}


	// MOBILE MENU //
	function mobile_menu() {

		if ($(window).width() < 1201) {

			if ($("#menu").length > 0) {

				if ($("#mobile-menu").length < 1) {

					$("#menu").clone().attr({
						id: "mobile-menu",
						class: ""
					}).insertAfter("#header");

					$("#mobile-menu .megamenu > a").on("click", function(e) {

						e.preventDefault();

						$(this).toggleClass("open").next("div").slideToggle(300);

                    });

					$("#mobile-menu .dropdown > a").on("click", function(e) {

						e.preventDefault();

						$(this).toggleClass("open").next("ul").slideToggle(300);

                    });

				}

			}

		} else {

			$("#mobile-menu").hide();

		}

	}

	// HEADER SEARCH
	function header_search() {

		$(".search a").on("click", function(e) {

			e.preventDefault();

			if(!$(".search a").hasClass("open")) {

				$("#search-form-container").addClass("open-search-form");

			} else {

				$("#search-form-container").removeClass("open-search-form");

			}

			$(window).resize(function(){
				$("#search-form-container").removeClass("open-search-form");
			})

		});

		$("#search-form").after('<a class="search-form-close" href="#">x</a>');

		$("#search-form-container a.search-form-close").on("click", function(event){

			event.preventDefault();
			$("#search-form-container").removeClass("open-search-form");

		});

	 }


	// STICKY //
	function sticky() {

		var sticky_point = 155;

		$("#header").clone().attr({
			id: "header-sticky",
			class: ""
		}).insertAfter("header");

		$(window).scroll(function(){

			if ($(window).scrollTop() > sticky_point) {
				$("#header-sticky").slideDown(300).addClass("header-sticky");
				$("#header .menu ul, #header .menu .megamenu-container").css({"visibility": "hidden"});
			} else {
				$("#header-sticky").slideUp(100).removeClass("header-sticky");
				$("#header .menu ul, #header .menu .megamenu-container").css({"visibility": "visible"});
			}

		});

	}




	function animations() {

		animations = new WOW({
			boxClass: 'wow',
			animateClass: 'animated',
			offset: 100,
			mobile: false,
			live: true
		})

		animations.init();

	}



	$(document).ready(function(){

		if ($("body").hasClass("sticky-header")) {
			sticky();
		}


		$(".menu").superfish({
			delay: 500,
			animation: {
				opacity: 'show',
				height: 'show'
			},
			speed: 300,
			autoArrows: true
		});

		show_hide_mobile_menu();

		mobile_menu();

		header_search();


})



	// WINDOW RESIZE //
	$(window).resize(function() {

		mobile_menu();
		full_screen();

	});

})(window.jQuery);
