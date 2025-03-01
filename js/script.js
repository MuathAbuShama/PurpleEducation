(function (a) {
	function b() {
		if (a(".preloader").length) {
			a(".preloader").delay(200).fadeOut(500);
		}
	}
	function c() {
		if (a(".main-header").length) {
			var k = a(window).scrollTop();
			var j = a(".main-header");
			var i = a(".scroll-to-top");
			var h = a(".main-header").height();
			if (k >= h) {
				j.addClass("fixed-header");
				i.fadeIn(300);
			} else {
				j.removeClass("fixed-header");
				i.fadeOut(300);
			}
		}
	}
	c();
	if (a(".main-header li.dropdown ul").length) {
		a(".main-header li.dropdown").append(
			'<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'
		);
		a(".main-header li.dropdown .dropdown-btn").on("click", function () {
			a(this).prev("ul").slideToggle(500);
		});
		a(".fullscreen-menu .navigation li.dropdown > a").on("click", function () {
			a(this).next("ul").slideToggle(500);
		});
		a(".navigation li.dropdown > a").on("click", function (h) {
			h.preventDefault();
		});
		a(
			".main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a"
		).on("click", function (h) {
			h.preventDefault();
		});
		a(".filter-dropdown").mouseenter(function () {
			a(".filter-categories").addClass("active");
		});
		a(".filter-dropdown").mouseleave(function () {
			a(".filter-categories").removeClass("active");
		});
	}
	if (a(".mobile-menu").length) {
		a(".mobile-menu .menu-box").mCustomScrollbar();
		var d = a(".main-header .nav-outer .main-menu").html();
		a(".mobile-menu .menu-box .menu-outer").append(d);
		a(".sticky-header .main-menu").append(d);
		a(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
			a(this).toggleClass("open");
			a(this).prev("ul").slideToggle(500);
		});
		a(".mobile-nav-toggler").on("click", function () {
			a("body").addClass("mobile-menu-visible");
		});
		a(".mobile-menu .menu-backdrop,.mobile-menu .close-btn").on(
			"click",
			function () {
				a("body").removeClass("mobile-menu-visible");
			}
		);
	}
	if (a(".custom-select-box").length) {
		a(".custom-select-box")
			.selectmenu()
			.selectmenu("menuWidget")
			.addClass("overflow");
	}
	if (a(".parallax-scene-1").length) {
		var f = a(".parallax-scene-1").get(0);
		var e = new Parallax(f);
	}
	if (a(".parallax-scene-2").length) {
		var f = a(".parallax-scene-2").get(0);
		var e = new Parallax(f);
	}
	if (a(".parallax-scene-3").length) {
		var f = a(".parallax-scene-3").get(0);
		var e = new Parallax(f);
	}
	if (a(".parallax-scene-4").length) {
		var f = a(".parallax-scene-4").get(0);
		var e = new Parallax(f);
	}
	if (a(".paroller").length) {
		a(".paroller").paroller({
			factor: 0.2,
			factorLg: 0.4,
			type: "foreground",
			direction: "horizontal",
		});
	}
	if (a(".filter-list").length) {
		a(".filter-list").mixItUp({});
	}
	if (a(".count-box").length) {
		a(".count-box").appear(
			function () {
				var h = a(this),
					i = h.find(".count-text").attr("data-stop"),
					j = parseInt(h.find(".count-text").attr("data-speed"), 10);
				if (!h.hasClass("counted")) {
					h.addClass("counted");
					a({ countNum: h.find(".count-text").text() }).animate(
						{ countNum: i },
						{
							duration: j,
							easing: "linear",
							step: function () {
								h.find(".count-text").text(Math.floor(this.countNum));
							},
							complete: function () {
								h.find(".count-text").text(this.countNum);
							},
						}
					);
				}
			},
			{ accY: 0 }
		);
	}

	if (a(".courses-carousel").length) {
		a(".courses-carousel").owlCarousel({
			loop: true,
			margin: 20,
			nav: true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [
				'<span class="fa fa-angle-left"></span>',
				'<span class="fa fa-angle-right"></span>',
			],
			responsive: {
				0: { items: 1 },
				480: { items: 1 },
				600: { items: 2 },
				800: { items: 2 },
				1024: { items: 3 },
			},
		});
	}

	if (a(".most-requested-carousel").length) {
		a(".most-requested-carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [
				'<span class="fa fa-angle-left"></span>',
				'<span class="fa fa-angle-right"></span>',
			],
			responsive: {
				0: { items: 1 },
				480: { items: 1 },
				600: { items: 1 },
				800: { items: 2 },
				1024: { items: 2 },
			},
		});
	}

	if (a(".similar-courses-carousel").length) {
		a(".similar-courses-carousel").owlCarousel({
			loop: true,
			margin: 30,
			dots: true,
			nav: false,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [
				'<span class="fa fa-angle-left"></span>',
				'<span class="fa fa-angle-right"></span>',
			],
			responsive: {
				0: { items: 1 },
				480: { items: 1 },
				600: { items: 1 },
				800: { items: 2 },
				1024: { items: 3 },
			},
		});
	}

	if (a(".testimonial-carousel").length) {
		a(".testimonial-carousel").owlCarousel({
			loop: true,
			margin: 0,
			center: true,
			nav: true,
			dots: false,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [
				'<span class="fa fa-angle-left"></span>',
				'<span class="fa fa-angle-right"></span>',
			],
			responsive: {
				0: { items: 1 },
				480: { items: 1 },
				600: { items: 1 },
				800: { items: 2 },
				1024: { items: 3 },
			},
		});
	}

	if (a(".sponsors-carousel").length) {
		a(".sponsors-carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [
				'<span class="fa fa-angle-left"></span>',
				'<span class="fa fa-angle-right"></span>',
			],
			responsive: {
				0: { items: 1 },
				480: { items: 2 },
				600: { items: 2 },
				800: { items: 3 },
				1024: { items: 4 },
			},
		});
	}

	if (a(".main-slider-carousel").length) {
		a(".main-slider-carousel").owlCarousel({
			animateOut: "fadeOut",
			animateIn: "fadeIn",
			loop: true,
			margin: 0,
			nav: true,
			autoHeight: true,
			smartSpeed: 500,
			autoplay: 6000,
			navText: [
				'<span class="flaticon-left-arrow-2"></span>',
				'<span class="flaticon-next-2"></span>',
			],
			responsive: {
				0: { items: 1 },
				600: { items: 1 },
				800: { items: 1 },
				1024: { items: 1 },
				1200: { items: 1 },
			},
		});
	}
	if (a(".single-item-carousel").length) {
		a(".single-item-carousel").owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [
				'<span class="fa fa-angle-left"></span>',
				'<span class="fa fa-angle-right"></span>',
			],
			responsive: {
				0: { items: 1 },
				480: { items: 1 },
				600: { items: 1 },
				800: { items: 1 },
				1024: { items: 1 },
			},
		});
	}

	if (a(".testimonial-carousel-two").length) {
		a(".testimonial-carousel-two").owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			smartSpeed: 500,
			autoplay: 4000,
			navText: [
				'<span class="fa fa-angle-left"></span>',
				'<span class="fa fa-angle-right"></span>',
			],
			responsive: {
				0: { items: 1 },
				480: { items: 1 },
				600: { items: 1 },
				800: { items: 2 },
				1024: { items: 3 },
				1224: { items: 3 },
			},
		});
	}
	if (a(".progress-line").length) {
		a(".progress-line").appear(
			function () {
				var h = a(this);
				var i = h.data("width");
				a(h).css("width", i + "%");
			},
			{ accY: 0 }
		);
	}

	if (a(".tabs-box").length) {
		a(".tabs-box .tab-buttons .tab-btn").on("click", function (h) {
			h.preventDefault();
			var i = a(a(this).attr("data-tab"));
			if (a(i).is(":visible")) {
				return false;
			} else {
				i.parents(".tabs-box")
					.find(".tab-buttons")
					.find(".tab-btn")
					.removeClass("active-btn");
				a(this).addClass("active-btn");
				i.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0);
				i.parents(".tabs-box")
					.find(".tabs-content")
					.find(".tab")
					.removeClass("active-tab");
				a(i).fadeIn(300);
				a(i).addClass("active-tab");
			}
		});
	}


	// upload cv

	$(".upload-cv-div").submit(function (e) {
		e.preventDefault();
	});
	$(".upload-cv-div input").on("change", function () {
		var file = $(this).prop("files")[0],
			convertToMb = Math.floor(file.size / 1024 / 1024);

		$(".upload-cv-div #info").html("<div><span>" + file.name + "</span></div>");
		console.log(file);
	});

	$(".upload-cv-div .txt_choose").click(function () {
		$("input[type='file']").click();
	});

	// end upload cv

	// start circle progress

	$(".circle_percent").each(function () {
		var $this = $(this),
			$dataV = $this.data("percent"),
			$dataDeg = $dataV * 3.6,
			$round = $this.find(".round_per");
		$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
		// $this.append(
		// 	'<div class="circle_inbox"><span class="percent_text"></span></div>'
		// );
		$this.prop("Counter", 0).animate(
			{ Counter: $dataV },
			{
				duration: 5000,
				easing: "swing",
				step: function (now) {
					$this.find(".percent_text").text(Math.ceil(now) + "%");
				},
			}
		);
		if ($dataV >= 51) {
			$round.css("transform", "rotate(" + 360 + "deg)");
			setTimeout(function () {
				$this.addClass("percent_more");
			}, 1000);
			setTimeout(function () {
				$round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
			}, 1000);
		}
	});

	// end circle progress

	if (a(".accordion-box, .accordion-box-two").length) {
		a(".accordion-box, .accordion-box-two").on(
			"click",
			".acc-btn",
			function () {
				var h = a(this).parents(".accordion-box, .accordion-box-two");
				var i = a(this).parents(".accordion");
				if (a(this).hasClass("active") !== true) {
					a(h).find(".accordion .acc-btn").removeClass("active");
				}
				if (a(this).next(".acc-content").is(":visible")) {
					return false;
				} else {
					a(this).addClass("active");
					a(h).children(".accordion").removeClass("active-block");
					a(h).find(".accordion").children(".acc-content").slideUp(300);
					i.addClass("active-block");
					a(this).next(".acc-content").slideDown(300);
				}
			}
		);
	}
	if (a(".lightbox-image").length) {
		a(".lightbox-image").fancybox({
			openEffect: "fade",
			closeEffect: "fade",
			helpers: { media: {} },
		});
	}
	if (a("#contact-form").length) {
		a("#contact-form").validate({
			rules: {
				username: { required: true },
				email: { required: true, email: true },
				phone: { required: true },
				message: { required: true },
			},
		});
	}
	if (a(".scroll-to-target").length) {
		a(".scroll-to-target").on("click", function () {
			var h = a(this).attr("data-target");
			a("html, body").animate({ scrollTop: a(h).offset().top }, 1500);
		});
	}
	if (a(".wow").length) {
		var g = new WOW({
			boxClass: "wow",
			animateClass: "animated",
			offset: 0,
			mobile: true,
			live: true,
		});
		g.init();
	}
	a(window).on("scroll", function () {
		c();
	});
	a(window).on("load", function () {
		b();
	});

	// audio level details

	var clicked_id;
var audio_var = new Audio();


$('.ppbutton').on("click",function(){
  var datasrc = $(this).attr('data-src');
  clicked_id= $(this).attr('id');
  console.log(clicked_id);
  audio_var.pause();
  
  $('.ppbutton').not(this).each(function(){
      $(this).removeClass('fa-pause');
       $(this).addClass('fa-play');
  });
  
  if($(this).hasClass('fa-play')){
     console.log('play_click');
     audio_var.src=datasrc;
     $(this).removeClass('fa-play');
     $(this).addClass('fa-pause');
     console.log(audio_var);
     audio_var.play();
   } else {
     console.log('pause_click');
     $(this).removeClass('fa-pause');
     $(this).addClass('fa-play');
     console.log(audio_var);
     audio_var.pause();
     //audio_var.src='';
     //audio_var.load();
	 console.log(audio_var);
   }

  
});

  audio_var.onended = function() {
     $("#"+clicked_id).removeClass('fa-pause');
     $("#"+clicked_id).addClass('fa-play');
  };

//   course level filter
$(document).ready(function () {
	var customContainer = jQuery(".iso-container");
	customContainer.isotope({
		filter: "*",
		transitionDuration: "2s",
		animationOptions: {
			duration: 7500,
			queue: false
		},
		layoutMode: "fitRows",
		fitRows: {
			gutter: 0
		}
	});

	jQuery("#custom-filter li:first-child > a").addClass("is-checked");

	jQuery("#custom-filter a").click(function () {
		jQuery("#custom-filter .is-checked").removeClass("is-checked");

		jQuery(this).addClass("is-checked");

		var customSelector = jQuery(this).attr("data-filter");
		customContainer.isotope({
			filter: customSelector,
			transitionDuration: "2s",
			animationOptions: {
				duration: 7500,
				queue: false
			},
			layoutMode: "fitRows",
			fitRows: {
				gutter: 0
			}
		});
		return false;
	});
});
// ######################################

$(document).ready(function () {
	var customContainer = jQuery(".iso-container-offer");
	customContainer.isotope({
		filter: "*",
		transitionDuration: "2s",
		animationOptions: {
			duration: 7500,
			queue: false
		},
		layoutMode: "fitRows",
		fitRows: {
			gutter: 0
		}
	});

	jQuery("#custom-filter-offer li:first-child > a").addClass("is-checked");

	jQuery("#custom-filter-offer a").click(function () {
		jQuery("#custom-filter-offer .is-checked").removeClass("is-checked");

		jQuery(this).addClass("is-checked");

		var customSelector = jQuery(this).attr("data-filter");
		customContainer.isotope({
			filter: customSelector,
			transitionDuration: "2s",
			animationOptions: {
				duration: 7500,
				queue: false
			},
			layoutMode: "fitRows",
			fitRows: {
				gutter: 0
			}
		});
		return false;
	});
});


// end course level

	

	// end level details
})(window.jQuery);
