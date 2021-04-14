"use strict";
(function () {
	let
		plugins = {
			rdNavbar: $('.rd-navbar'),
		};
	
		if (plugins.rdNavbar.length) {
		plugins.rdNavbar.RDNavbar({
			stickUpClone: (plugins.rdNavbar.attr("data-stick-up-clone")) ? plugins.rdNavbar.attr("data-stick-up-clone") === 'true' : false,
		});
	}
	
	
	$('select.select-custom').each(function(){
		var $this = $(this), numberOfOptions = $(this).children('option').length;
		
		$this.addClass('select-hidden');
		$this.wrap('<div class="select"></div>');
		$this.after('<div class="select-styled"></div>');
		
		var $styledSelect = $this.next('div.select-styled');
		$styledSelect.text($this.children('option').eq(0).text());
		
		var $list = $('<ul />', {
			'class': 'select-options'
		}).insertAfter($styledSelect);
		
		for (var i = 0; i < numberOfOptions; i++) {
			$('<li />', {
				text: $this.children('option').eq(i).text(),
				rel: $this.children('option').eq(i).val()
			}).appendTo($list);
		}
		
		let $listItems = $list.children('li');
		
		$styledSelect.click(function(e) {
			e.stopPropagation();
			$('div.select-styled.active').not(this).each(function(){
				$(this).removeClass('active').next('ul.select-options').hide();
			});
			$(this).toggleClass('active').next('ul.select-options').toggle();
		});
		
		$listItems.click(function(e) {
			e.stopPropagation();
			$styledSelect.text($(this).text()).removeClass('active');
			$this.val($(this).attr('rel'));
			$list.hide();
		});
		
		$(document).click(function() {
			$styledSelect.removeClass('active');
			$list.hide();
		});
	});
	
	var swiper = new Swiper('.swiper-popular-news', {
		spaceBetween: -20,
		freeMode: true,
		slidesPerView: 1,
		autoplay: {
			delay: 4700,
			disableOnInteraction: false,
		},
		loop: false,
		navigation: {
			nextEl: '.slider-nav-next',
			prevEl: '.slider-nav-prev',
		},
		breakpoints: {
			320: {
				spaceBetween: -30,
				slidesPerView: 1,
				centeredSlides: true,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 20,
				centeredSlides: false,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
		},
	});
	
	
	var swiperArticles = new Swiper('.swiper-popular-articles', {
		spaceBetween: 20,
		freeMode: true,
		slidesPerView: 1,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		loop: false,
		navigation: {
			nextEl: '.slider-articles-nav-next',
			prevEl: '.slider-articles-nav-prev',
		},
		breakpoints: {
			320: {
				spaceBetween: 10,
				slidesPerView: 1,
				centeredSlides: true,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 20,
				centeredSlides: false,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
				spaceBetween: 20,
			},
		},
	});
	
	
	var swiperNewArticles = new Swiper('.swiper-new-articles', {
		spaceBetween: 20,
		freeMode: true,
		slidesPerView: 1,
		autoplay: {
			delay: 4300,
			disableOnInteraction: false,
		},
		loop: false,
		navigation: {
			nextEl: '.slider-new-nav-next',
			prevEl: '.slider-new-nav-prev',
		},
		breakpoints: {
			320: {
				spaceBetween: -30,
				slidesPerView: 1,
				centeredSlides: true,
			},
			576: {
				slidesPerView: 2,
				spaceBetween: 20,
				centeredSlides: false,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 5,
				spaceBetween: 20,
			},
		},
	});
}());