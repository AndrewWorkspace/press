(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function () {
  var plugins = {
    rdNavbar: $('.rd-navbar')
  };

  if (plugins.rdNavbar.length) {
    plugins.rdNavbar.RDNavbar({
      stickUpClone: plugins.rdNavbar.attr("data-stick-up-clone") ? plugins.rdNavbar.attr("data-stick-up-clone") === 'true' : false
    });
  }

  $('select.select-custom').each(function () {
    var $this = $(this),
        numberOfOptions = $(this).children('option').length;
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

    var $listItems = $list.children('li');
    $styledSelect.click(function (e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function () {
        $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
    });
    $listItems.click(function (e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
    });
    $(document).click(function () {
      $styledSelect.removeClass('active');
      $list.hide();
    });
  });
  var swiper = new Swiper('.swiper-popular-news', {
    slidesPerView: 1,
    // autoplay: {
    // 	delay: 4700,
    // 	disableOnInteraction: false,
    // },
    loop: true,
    navigation: {
      nextEl: '.slider-nav-next',
      prevEl: '.slider-nav-prev'
    },
    breakpoints: {
      320: {
        spaceBetween: -30,
        slidesPerView: 1,
        centeredSlides: true
      },
      340: {
        spaceBetween: -40
      },
      350: {
        spaceBetween: -50
      },
      360: {
        spaceBetween: -60
      },
      370: {
        spaceBetween: -70
      },
      380: {
        spaceBetween: -80
      },
      400: {
        spaceBetween: -100
      },
      410: {
        spaceBetween: -110
      },
      420: {
        spaceBetween: -120
      },
      430: {
        spaceBetween: -130
      },
      440: {
        spaceBetween: -140
      },
      450: {
        spaceBetween: -150
      },
      460: {
        spaceBetween: -160
      },
      470: {
        spaceBetween: -170
      },
      480: {
        spaceBetween: -180
      },
      490: {
        spaceBetween: -190
      },
      500: {
        spaceBetween: -200
      },
      510: {
        spaceBetween: -210
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false
      },
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });
  var swiperArticles = new Swiper('.swiper-popular-articles', {
    spaceBetween: 20,
    freeMode: true,
    slidesPerView: 1,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false
    },
    loop: false,
    navigation: {
      nextEl: '.slider-articles-nav-next',
      prevEl: '.slider-articles-nav-prev'
    },
    breakpoints: {
      320: {
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: true
      },
      340: {
        spaceBetween: -10
      },
      350: {
        spaceBetween: -20
      },
      360: {
        spaceBetween: -30
      },
      370: {
        spaceBetween: -40
      },
      380: {
        spaceBetween: -50
      },
      400: {
        spaceBetween: -60
      },
      410: {
        spaceBetween: -70
      },
      420: {
        spaceBetween: -80
      },
      430: {
        spaceBetween: -90
      },
      440: {
        spaceBetween: -100
      },
      450: {
        spaceBetween: -120
      },
      460: {
        spaceBetween: -130
      },
      470: {
        spaceBetween: -140
      },
      480: {
        spaceBetween: -150
      },
      490: {
        spaceBetween: -160
      },
      500: {
        spaceBetween: -170
      },
      510: {
        spaceBetween: -180
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false
      },
      768: {
        slidesPerView: 2
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
  var swiperNewArticles = new Swiper('.swiper-new-articles', {
    freeMode: true,
    slidesPerView: 1,
    autoplay: {
      delay: 4300,
      disableOnInteraction: false
    },
    loop: false,
    navigation: {
      nextEl: '.slider-new-nav-next',
      prevEl: '.slider-new-nav-prev'
    },
    breakpoints: {
      320: {
        spaceBetween: -30,
        slidesPerView: 1,
        centeredSlides: true
      },
      340: {
        spaceBetween: -40
      },
      350: {
        spaceBetween: -50
      },
      360: {
        spaceBetween: -60
      },
      370: {
        spaceBetween: -70
      },
      380: {
        spaceBetween: -80
      },
      400: {
        spaceBetween: -100
      },
      410: {
        spaceBetween: -110
      },
      420: {
        spaceBetween: -120
      },
      430: {
        spaceBetween: -130
      },
      440: {
        spaceBetween: -140
      },
      450: {
        spaceBetween: -150
      },
      460: {
        spaceBetween: -160
      },
      470: {
        spaceBetween: -170
      },
      480: {
        spaceBetween: -180
      },
      490: {
        spaceBetween: -190
      },
      500: {
        spaceBetween: -200
      },
      510: {
        spaceBetween: -210
      },
      520: {
        slidesPerView: 2,
        spaceBetween: 20,
        centeredSlides: false
      },
      768: {
        slidesPerView: 3
      },
      992: {
        slidesPerView: 3
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });
  var galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4.5,
    speed: 500,
    loop: true,
    slideToClickedSlide: true,
    touchRatio: 0.2,
    loopedSlides: 8,
    centeredSlides: true,
    breakpoints: {
      576: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 5
      },
      992: {
        slidesPerView: 6
      },
      1200: {
        slidesPerView: 7
      }
    }
  });
  var galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 0,
    slidesPerView: 1,
    loopedSlides: 8,
    centeredSlides: true,
    speed: 500,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  });
  galleryTop.controller.control = galleryThumbs;
  galleryThumbs.controller.control = galleryTop;
  $('[data-fancybox="images"]').fancybox({
    selector: '.swiper-slide-fancy:not(.swiper-slide-duplicate)',
    hash: false,
    helpers: {
      media: {}
    },
    buttons: ['zoom', 'fullScreen', 'close', 'thumbs']
  });
})();

},{}],2:[function(require,module,exports){
'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

document.addEventListener('DOMContentLoaded', function () {
  Promise.resolve().then(function () {
    return _interopRequireWildcard(require('./inits'));
  });
});

},{"./inits":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9pbml0cy5qcyIsImpzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFDQyxhQUFZO0FBQ1osTUFDQyxPQUFPLEdBQUc7QUFDVCxJQUFBLFFBQVEsRUFBRSxDQUFDLENBQUMsWUFBRDtBQURGLEdBRFg7O0FBS0MsTUFBSSxPQUFPLENBQUMsUUFBUixDQUFpQixNQUFyQixFQUE2QjtBQUM3QixJQUFBLE9BQU8sQ0FBQyxRQUFSLENBQWlCLFFBQWpCLENBQTBCO0FBQ3pCLE1BQUEsWUFBWSxFQUFHLE9BQU8sQ0FBQyxRQUFSLENBQWlCLElBQWpCLENBQXNCLHFCQUF0QixDQUFELEdBQWlELE9BQU8sQ0FBQyxRQUFSLENBQWlCLElBQWpCLENBQXNCLHFCQUF0QixNQUFpRCxNQUFsRyxHQUEyRztBQURoRyxLQUExQjtBQUdBOztBQUdELEVBQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEIsSUFBMUIsQ0FBK0IsWUFBVTtBQUN4QyxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBRCxDQUFiO0FBQUEsUUFBcUIsZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxRQUFSLENBQWlCLFFBQWpCLEVBQTJCLE1BQWxFO0FBRUEsSUFBQSxLQUFLLENBQUMsUUFBTixDQUFlLGVBQWY7QUFDQSxJQUFBLEtBQUssQ0FBQyxJQUFOLENBQVcsNEJBQVg7QUFDQSxJQUFBLEtBQUssQ0FBQyxLQUFOLENBQVksbUNBQVo7QUFFQSxRQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBTixDQUFXLG1CQUFYLENBQXBCO0FBQ0EsSUFBQSxhQUFhLENBQUMsSUFBZCxDQUFtQixLQUFLLENBQUMsUUFBTixDQUFlLFFBQWYsRUFBeUIsRUFBekIsQ0FBNEIsQ0FBNUIsRUFBK0IsSUFBL0IsRUFBbkI7QUFFQSxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBRCxF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LEVBQUEsYUFBYSxDQUFDLFVBQWQsQ0FBeUIsT0FBekIsR0FBbUMsVUFBbkM7QUFHQSxFQUFBLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCLFFBQTlCLENBQXVDO0FBQ3RDLElBQUEsUUFBUSxFQUFHLGtEQUQyQjtBQUV0QyxJQUFBLElBQUksRUFBTyxLQUYyQjtBQUd0QyxJQUFBLE9BQU8sRUFBRztBQUNULE1BQUEsS0FBSyxFQUFHO0FBREMsS0FINEI7QUFNdEMsSUFBQSxPQUFPLEVBQUcsQ0FDVCxNQURTLEVBRVQsWUFGUyxFQUdULE9BSFMsRUFJVCxRQUpTO0FBTjRCLEdBQXZDO0FBZ0JBLENBNWFBLEdBQUQ7OztBQ0RBOzs7Ozs7OztBQUVBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVztBQUN2RDtBQUFBLDJDQUFPLFNBQVA7QUFBQTtBQUNELENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJcInVzZSBzdHJpY3RcIjtcclxuKGZ1bmN0aW9uICgpIHtcclxuXHRsZXRcclxuXHRcdHBsdWdpbnMgPSB7XHJcblx0XHRcdHJkTmF2YmFyOiAkKCcucmQtbmF2YmFyJyksXHJcblx0XHR9O1xyXG5cdFxyXG5cdFx0aWYgKHBsdWdpbnMucmROYXZiYXIubGVuZ3RoKSB7XHJcblx0XHRwbHVnaW5zLnJkTmF2YmFyLlJETmF2YmFyKHtcclxuXHRcdFx0c3RpY2tVcENsb25lOiAocGx1Z2lucy5yZE5hdmJhci5hdHRyKFwiZGF0YS1zdGljay11cC1jbG9uZVwiKSkgPyBwbHVnaW5zLnJkTmF2YmFyLmF0dHIoXCJkYXRhLXN0aWNrLXVwLWNsb25lXCIpID09PSAndHJ1ZScgOiBmYWxzZSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHQkKCdzZWxlY3Quc2VsZWN0LWN1c3RvbScpLmVhY2goZnVuY3Rpb24oKXtcclxuXHRcdHZhciAkdGhpcyA9ICQodGhpcyksIG51bWJlck9mT3B0aW9ucyA9ICQodGhpcykuY2hpbGRyZW4oJ29wdGlvbicpLmxlbmd0aDtcclxuXHRcdFxyXG5cdFx0JHRoaXMuYWRkQ2xhc3MoJ3NlbGVjdC1oaWRkZW4nKTtcclxuXHRcdCR0aGlzLndyYXAoJzxkaXYgY2xhc3M9XCJzZWxlY3RcIj48L2Rpdj4nKTtcclxuXHRcdCR0aGlzLmFmdGVyKCc8ZGl2IGNsYXNzPVwic2VsZWN0LXN0eWxlZFwiPjwvZGl2PicpO1xyXG5cdFx0XHJcblx0XHR2YXIgJHN0eWxlZFNlbGVjdCA9ICR0aGlzLm5leHQoJ2Rpdi5zZWxlY3Qtc3R5bGVkJyk7XHJcblx0XHQkc3R5bGVkU2VsZWN0LnRleHQoJHRoaXMuY2hpbGRyZW4oJ29wdGlvbicpLmVxKDApLnRleHQoKSk7XHJcblx0XHRcclxuXHRcdHZhciAkbGlzdCA9ICQoJzx1bCAvPicsIHtcclxuXHRcdFx0J2NsYXNzJzogJ3NlbGVjdC1vcHRpb25zJ1xyXG5cdFx0fSkuaW5zZXJ0QWZ0ZXIoJHN0eWxlZFNlbGVjdCk7XHJcblx0XHRcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcclxuXHRcdFx0JCgnPGxpIC8+Jywge1xyXG5cdFx0XHRcdHRleHQ6ICR0aGlzLmNoaWxkcmVuKCdvcHRpb24nKS5lcShpKS50ZXh0KCksXHJcblx0XHRcdFx0cmVsOiAkdGhpcy5jaGlsZHJlbignb3B0aW9uJykuZXEoaSkudmFsKClcclxuXHRcdFx0fSkuYXBwZW5kVG8oJGxpc3QpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRsZXQgJGxpc3RJdGVtcyA9ICRsaXN0LmNoaWxkcmVuKCdsaScpO1xyXG5cdFx0XHJcblx0XHQkc3R5bGVkU2VsZWN0LmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0JCgnZGl2LnNlbGVjdC1zdHlsZWQuYWN0aXZlJykubm90KHRoaXMpLmVhY2goZnVuY3Rpb24oKXtcclxuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCd1bC5zZWxlY3Qtb3B0aW9ucycpLmhpZGUoKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLm5leHQoJ3VsLnNlbGVjdC1vcHRpb25zJykudG9nZ2xlKCk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JGxpc3RJdGVtcy5jbGljayhmdW5jdGlvbihlKSB7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdCRzdHlsZWRTZWxlY3QudGV4dCgkKHRoaXMpLnRleHQoKSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkdGhpcy52YWwoJCh0aGlzKS5hdHRyKCdyZWwnKSk7XHJcblx0XHRcdCRsaXN0LmhpZGUoKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKGRvY3VtZW50KS5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0JHN0eWxlZFNlbGVjdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdCRsaXN0LmhpZGUoKTtcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cdFxyXG5cdHZhciBzd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLXBvcHVsYXItbmV3cycsIHtcclxuXHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHQvLyBhdXRvcGxheToge1xyXG5cdFx0Ly8gXHRkZWxheTogNDcwMCxcclxuXHRcdC8vIFx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG5cdFx0Ly8gfSxcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdG5leHRFbDogJy5zbGlkZXItbmF2LW5leHQnLFxyXG5cdFx0XHRwcmV2RWw6ICcuc2xpZGVyLW5hdi1wcmV2JyxcclxuXHRcdH0sXHJcblx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHQzMjA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC0zMCxcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRcdGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQzNDA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC00MCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0MzUwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtNTAsXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdDM2MDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTYwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQzNzA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC03MCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0MzgwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtODAsXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdDQwMDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTEwMCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0NDEwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtMTEwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ0MjA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC0xMjAsXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdDQzMDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTEzMCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0NDQwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtMTQwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ0NTA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC0xNTAsXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdDQ2MDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTE2MCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0NDcwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtMTcwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ0ODA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC0xODAsXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdDQ5MDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTE5MCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0NTAwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtMjAwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ1MTA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC0yMTAsXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdDUyMDoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0XHRjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcblx0XHRcdH0sXHJcblx0XHRcdDc2ODoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdH0sXHJcblx0XHRcdDk5Mjoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdH0sXHJcblx0XHRcdDEyMDA6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiA1LFxyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdHZhciBzd2lwZXJBcnRpY2xlcyA9IG5ldyBTd2lwZXIoJy5zd2lwZXItcG9wdWxhci1hcnRpY2xlcycsIHtcclxuXHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRmcmVlTW9kZTogdHJ1ZSxcclxuXHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRhdXRvcGxheToge1xyXG5cdFx0XHRkZWxheTogNDAwMCxcclxuXHRcdFx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG5cdFx0fSxcclxuXHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRuZXh0RWw6ICcuc2xpZGVyLWFydGljbGVzLW5hdi1uZXh0JyxcclxuXHRcdFx0cHJldkVsOiAnLnNsaWRlci1hcnRpY2xlcy1uYXYtcHJldicsXHJcblx0XHR9LFxyXG5cdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0MzIwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAwLFxyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdFx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdDM0MDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTEwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQzNTA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC0yMCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0MzYwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtMzAsXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdDM3MDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTQwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQzODA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC01MCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0NDAwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtNjAsXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdDQxMDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTcwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ0MjA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC04MCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0NDMwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtOTAsXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdDQ0MDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTEwMCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0NDUwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtMTIwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ0NjA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC0xMzAsXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdDQ3MDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTE0MCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0NDgwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtMTUwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ0OTA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC0xNjAsXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdDUwMDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTE3MCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0NTEwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtMTgwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ1MjA6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRcdFx0Y2VudGVyZWRTbGlkZXM6IGZhbHNlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ5OTI6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQxMjAwOiB7XHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0XHR9LFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHR2YXIgc3dpcGVyTmV3QXJ0aWNsZXMgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLW5ldy1hcnRpY2xlcycsIHtcclxuXHRcdGZyZWVNb2RlOiB0cnVlLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdGF1dG9wbGF5OiB7XHJcblx0XHRcdGRlbGF5OiA0MzAwLFxyXG5cdFx0XHRkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcblx0XHR9LFxyXG5cdFx0bG9vcDogZmFsc2UsXHJcblx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdG5leHRFbDogJy5zbGlkZXItbmV3LW5hdi1uZXh0JyxcclxuXHRcdFx0cHJldkVsOiAnLnNsaWRlci1uZXctbmF2LXByZXYnLFxyXG5cdFx0fSxcclxuXHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdDMyMDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTMwLFxyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdFx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdDM0MDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTQwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQzNTA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC01MCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0MzYwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtNjAsXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdDM3MDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTcwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQzODA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC04MCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0NDAwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtMTAwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ0MTA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC0xMTAsXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdDQyMDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTEyMCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0NDMwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtMTMwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ0NDA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC0xNDAsXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdDQ1MDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTE1MCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0NDYwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtMTYwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ0NzA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC0xNzAsXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdDQ4MDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTE4MCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0NDkwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtMTkwLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ1MDA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IC0yMDAsXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdDUxMDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTIxMCxcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdFx0NTIwOiB7XHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogMixcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0XHRcdGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuXHRcdFx0fSxcclxuXHRcdFx0NzY4OiB7XHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0fSxcclxuXHRcdFx0OTkyOiB7XHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0fSxcclxuXHRcdFx0MTIwMDoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDUsXHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSk7XHJcblx0XHJcblx0dmFyIGdhbGxlcnlUaHVtYnMgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeS10aHVtYnMnLCB7XHJcblx0XHRzcGFjZUJldHdlZW46IDEwLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogNC41LFxyXG5cdFx0c3BlZWQ6IDUwMCxcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0XHRzbGlkZVRvQ2xpY2tlZFNsaWRlOiB0cnVlLFxyXG5cdFx0dG91Y2hSYXRpbzogMC4yLFxyXG5cdFx0bG9vcGVkU2xpZGVzOiA4LFxyXG5cdFx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHQ1NzY6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiA1LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ3Njg6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiA1LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ5OTI6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiA2LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQxMjAwOiB7XHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogNyxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSk7XHJcblx0dmFyIGdhbGxlcnlUb3AgPSBuZXcgU3dpcGVyKCcuZ2FsbGVyeS10b3AnLCB7XHJcblx0XHRzcGFjZUJldHdlZW46IDAsXHJcblx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0bG9vcGVkU2xpZGVzOiA4LFxyXG5cdFx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblx0XHRzcGVlZDogNTAwLFxyXG5cdFx0bG9vcDogdHJ1ZSxcclxuXHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0bmV4dEVsOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXHJcblx0XHRcdHByZXZFbDogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHRcclxuXHRnYWxsZXJ5VG9wLmNvbnRyb2xsZXIuY29udHJvbCA9IGdhbGxlcnlUaHVtYnM7XHJcblx0Z2FsbGVyeVRodW1icy5jb250cm9sbGVyLmNvbnRyb2wgPSBnYWxsZXJ5VG9wO1xyXG5cdFxyXG5cdFxyXG5cdCQoJ1tkYXRhLWZhbmN5Ym94PVwiaW1hZ2VzXCJdJykuZmFuY3lib3goe1xyXG5cdFx0c2VsZWN0b3IgOiAnLnN3aXBlci1zbGlkZS1mYW5jeTpub3QoLnN3aXBlci1zbGlkZS1kdXBsaWNhdGUpJyxcclxuXHRcdGhhc2ggICAgIDogZmFsc2UsXHJcblx0XHRoZWxwZXJzIDoge1xyXG5cdFx0XHRtZWRpYSA6IHt9XHJcblx0XHR9LFxyXG5cdFx0YnV0dG9ucyA6IFtcclxuXHRcdFx0J3pvb20nLFxyXG5cdFx0XHQnZnVsbFNjcmVlbicsXHJcblx0XHRcdCdjbG9zZScsXHJcblx0XHRcdCd0aHVtYnMnLFxyXG5cdFx0XHRcclxuXHRcdF0sXHJcblx0XHRcclxuXHR9KTtcclxuXHRcclxufSgpKTsiLCIndXNlIHN0cmljdCc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24oKSB7XHJcbiAgaW1wb3J0KCcuL2luaXRzJyk7XHJcbn0pO1xyXG5cclxuIl19
