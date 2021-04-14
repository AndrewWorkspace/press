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
    spaceBetween: -20,
    freeMode: true,
    slidesPerView: 1,
    autoplay: {
      delay: 4700,
      disableOnInteraction: false
    },
    loop: false,
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
      576: {
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
        spaceBetween: 10,
        slidesPerView: 1,
        centeredSlides: true
      },
      576: {
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
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  });
  var swiperNewArticles = new Swiper('.swiper-new-articles', {
    spaceBetween: 20,
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
      576: {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9pbml0cy5qcyIsImpzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFDQyxhQUFZO0FBQ1osTUFDQyxPQUFPLEdBQUc7QUFDVCxJQUFBLFFBQVEsRUFBRSxDQUFDLENBQUMsWUFBRDtBQURGLEdBRFg7O0FBS0MsTUFBSSxPQUFPLENBQUMsUUFBUixDQUFpQixNQUFyQixFQUE2QjtBQUM3QixJQUFBLE9BQU8sQ0FBQyxRQUFSLENBQWlCLFFBQWpCLENBQTBCO0FBQ3pCLE1BQUEsWUFBWSxFQUFHLE9BQU8sQ0FBQyxRQUFSLENBQWlCLElBQWpCLENBQXNCLHFCQUF0QixDQUFELEdBQWlELE9BQU8sQ0FBQyxRQUFSLENBQWlCLElBQWpCLENBQXNCLHFCQUF0QixNQUFpRCxNQUFsRyxHQUEyRztBQURoRyxLQUExQjtBQUdBOztBQUdELEVBQUEsQ0FBQyxDQUFDLHNCQUFELENBQUQsQ0FBMEIsSUFBMUIsQ0FBK0IsWUFBVTtBQUN4QyxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBRCxDQUFiO0FBQUEsUUFBcUIsZUFBZSxHQUFHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUSxRQUFSLENBQWlCLFFBQWpCLEVBQTJCLE1BQWxFO0FBRUEsSUFBQSxLQUFLLENBQUMsUUFBTixDQUFlLGVBQWY7QUFDQSxJQUFBLEtBQUssQ0FBQyxJQUFOLENBQVcsNEJBQVg7QUFDQSxJQUFBLEtBQUssQ0FBQyxLQUFOLENBQVksbUNBQVo7QUFFQSxRQUFJLGFBQWEsR0FBRyxLQUFLLENBQUMsSUFBTixDQUFXLG1CQUFYLENBQXBCO0FBQ0EsSUFBQSxhQUFhLENBQUMsSUFBZCxDQUFtQixLQUFLLENBQUMsUUFBTixDQUFlLFFBQWYsRUFBeUIsRUFBekIsQ0FBNEIsQ0FBNUIsRUFBK0IsSUFBL0IsRUFBbkI7QUFFQSxRQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBRCxFQUFXO0FBQ3ZCLGVBQVM7QUFEYyxLQUFYLENBQUQsQ0FFVCxXQUZTLENBRUcsYUFGSCxDQUFaOztBQUlBLFNBQUssSUFBSSxDQUFDLEdBQUcsQ0FBYixFQUFnQixDQUFDLEdBQUcsZUFBcEIsRUFBcUMsQ0FBQyxFQUF0QyxFQUEwQztBQUN6QyxNQUFBLENBQUMsQ0FBQyxRQUFELEVBQVc7QUFDWCxRQUFBLElBQUksRUFBRSxLQUFLLENBQUMsUUFBTixDQUFlLFFBQWYsRUFBeUIsRUFBekIsQ0FBNEIsQ0FBNUIsRUFBK0IsSUFBL0IsRUFESztBQUVYLFFBQUEsR0FBRyxFQUFFLEtBQUssQ0FBQyxRQUFOLENBQWUsUUFBZixFQUF5QixFQUF6QixDQUE0QixDQUE1QixFQUErQixHQUEvQjtBQUZNLE9BQVgsQ0FBRCxDQUdHLFFBSEgsQ0FHWSxLQUhaO0FBSUE7O0FBRUQsUUFBSSxVQUFVLEdBQUcsS0FBSyxDQUFDLFFBQU4sQ0FBZSxJQUFmLENBQWpCO0FBRUEsSUFBQSxhQUFhLENBQUMsS0FBZCxDQUFvQixVQUFTLENBQVQsRUFBWTtBQUMvQixNQUFBLENBQUMsQ0FBQyxlQUFGO0FBQ0EsTUFBQSxDQUFDLENBQUMsMEJBQUQsQ0FBRCxDQUE4QixHQUE5QixDQUFrQyxJQUFsQyxFQUF3QyxJQUF4QyxDQUE2QyxZQUFVO0FBQ3RELFFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLFdBQVIsQ0FBb0IsUUFBcEIsRUFBOEIsSUFBOUIsQ0FBbUMsbUJBQW5DLEVBQXdELElBQXhEO0FBQ0EsT0FGRDtBQUdBLE1BQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLFdBQVIsQ0FBb0IsUUFBcEIsRUFBOEIsSUFBOUIsQ0FBbUMsbUJBQW5DLEVBQXdELE1BQXhEO0FBQ0EsS0FORDtBQVFBLElBQUEsVUFBVSxDQUFDLEtBQVgsQ0FBaUIsVUFBUyxDQUFULEVBQVk7QUFDNUIsTUFBQSxDQUFDLENBQUMsZUFBRjtBQUNBLE1BQUEsYUFBYSxDQUFDLElBQWQsQ0FBbUIsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLElBQVIsRUFBbkIsRUFBbUMsV0FBbkMsQ0FBK0MsUUFBL0M7QUFDQSxNQUFBLEtBQUssQ0FBQyxHQUFOLENBQVUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRLElBQVIsQ0FBYSxLQUFiLENBQVY7QUFDQSxNQUFBLEtBQUssQ0FBQyxJQUFOO0FBQ0EsS0FMRDtBQU9BLElBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLEtBQVosQ0FBa0IsWUFBVztBQUM1QixNQUFBLGFBQWEsQ0FBQyxXQUFkLENBQTBCLFFBQTFCO0FBQ0EsTUFBQSxLQUFLLENBQUMsSUFBTjtBQUNBLEtBSEQ7QUFJQSxHQTFDRDtBQTRDQSxNQUFJLE1BQU0sR0FBRyxJQUFJLE1BQUosQ0FBVyxzQkFBWCxFQUFtQztBQUMvQyxJQUFBLFlBQVksRUFBRSxDQUFDLEVBRGdDO0FBRS9DLElBQUEsUUFBUSxFQUFFLElBRnFDO0FBRy9DLElBQUEsYUFBYSxFQUFFLENBSGdDO0FBSS9DLElBQUEsUUFBUSxFQUFFO0FBQ1QsTUFBQSxLQUFLLEVBQUUsSUFERTtBQUVULE1BQUEsb0JBQW9CLEVBQUU7QUFGYixLQUpxQztBQVEvQyxJQUFBLElBQUksRUFBRSxLQVJ5QztBQVMvQyxJQUFBLFVBQVUsRUFBRTtBQUNYLE1BQUEsTUFBTSxFQUFFLGtCQURHO0FBRVgsTUFBQSxNQUFNLEVBQUU7QUFGRyxLQVRtQztBQWEvQyxJQUFBLFdBQVcsRUFBRTtBQUNaLFdBQUs7QUFDSixRQUFBLFlBQVksRUFBRSxDQUFDLEVBRFg7QUFFSixRQUFBLGFBQWEsRUFBRSxDQUZYO0FBR0osUUFBQSxjQUFjLEVBQUU7QUFIWixPQURPO0FBTVosV0FBSztBQUNKLFFBQUEsYUFBYSxFQUFFLENBRFg7QUFFSixRQUFBLFlBQVksRUFBRSxFQUZWO0FBR0osUUFBQSxjQUFjLEVBQUU7QUFIWixPQU5PO0FBV1osV0FBSztBQUNKLFFBQUEsYUFBYSxFQUFFO0FBRFgsT0FYTztBQWNaLFdBQUs7QUFDSixRQUFBLGFBQWEsRUFBRTtBQURYLE9BZE87QUFpQlosWUFBTTtBQUNMLFFBQUEsYUFBYSxFQUFFLENBRFY7QUFFTCxRQUFBLFlBQVksRUFBRTtBQUZUO0FBakJNO0FBYmtDLEdBQW5DLENBQWI7QUFzQ0EsTUFBSSxjQUFjLEdBQUcsSUFBSSxNQUFKLENBQVcsMEJBQVgsRUFBdUM7QUFDM0QsSUFBQSxZQUFZLEVBQUUsRUFENkM7QUFFM0QsSUFBQSxRQUFRLEVBQUUsSUFGaUQ7QUFHM0QsSUFBQSxhQUFhLEVBQUUsQ0FINEM7QUFJM0QsSUFBQSxRQUFRLEVBQUU7QUFDVCxNQUFBLEtBQUssRUFBRSxJQURFO0FBRVQsTUFBQSxvQkFBb0IsRUFBRTtBQUZiLEtBSmlEO0FBUTNELElBQUEsSUFBSSxFQUFFLEtBUnFEO0FBUzNELElBQUEsVUFBVSxFQUFFO0FBQ1gsTUFBQSxNQUFNLEVBQUUsMkJBREc7QUFFWCxNQUFBLE1BQU0sRUFBRTtBQUZHLEtBVCtDO0FBYTNELElBQUEsV0FBVyxFQUFFO0FBQ1osV0FBSztBQUNKLFFBQUEsWUFBWSxFQUFFLEVBRFY7QUFFSixRQUFBLGFBQWEsRUFBRSxDQUZYO0FBR0osUUFBQSxjQUFjLEVBQUU7QUFIWixPQURPO0FBTVosV0FBSztBQUNKLFFBQUEsYUFBYSxFQUFFLENBRFg7QUFFSixRQUFBLFlBQVksRUFBRSxFQUZWO0FBR0osUUFBQSxjQUFjLEVBQUU7QUFIWixPQU5PO0FBV1osV0FBSztBQUNKLFFBQUEsYUFBYSxFQUFFO0FBRFgsT0FYTztBQWNaLFdBQUs7QUFDSixRQUFBLGFBQWEsRUFBRTtBQURYLE9BZE87QUFpQlosWUFBTTtBQUNMLFFBQUEsYUFBYSxFQUFFLENBRFY7QUFFTCxRQUFBLFlBQVksRUFBRTtBQUZUO0FBakJNO0FBYjhDLEdBQXZDLENBQXJCO0FBc0NBLE1BQUksaUJBQWlCLEdBQUcsSUFBSSxNQUFKLENBQVcsc0JBQVgsRUFBbUM7QUFDMUQsSUFBQSxZQUFZLEVBQUUsRUFENEM7QUFFMUQsSUFBQSxRQUFRLEVBQUUsSUFGZ0Q7QUFHMUQsSUFBQSxhQUFhLEVBQUUsQ0FIMkM7QUFJMUQsSUFBQSxRQUFRLEVBQUU7QUFDVCxNQUFBLEtBQUssRUFBRSxJQURFO0FBRVQsTUFBQSxvQkFBb0IsRUFBRTtBQUZiLEtBSmdEO0FBUTFELElBQUEsSUFBSSxFQUFFLEtBUm9EO0FBUzFELElBQUEsVUFBVSxFQUFFO0FBQ1gsTUFBQSxNQUFNLEVBQUUsc0JBREc7QUFFWCxNQUFBLE1BQU0sRUFBRTtBQUZHLEtBVDhDO0FBYTFELElBQUEsV0FBVyxFQUFFO0FBQ1osV0FBSztBQUNKLFFBQUEsWUFBWSxFQUFFLENBQUMsRUFEWDtBQUVKLFFBQUEsYUFBYSxFQUFFLENBRlg7QUFHSixRQUFBLGNBQWMsRUFBRTtBQUhaLE9BRE87QUFNWixXQUFLO0FBQ0osUUFBQSxhQUFhLEVBQUUsQ0FEWDtBQUVKLFFBQUEsWUFBWSxFQUFFLEVBRlY7QUFHSixRQUFBLGNBQWMsRUFBRTtBQUhaLE9BTk87QUFXWixXQUFLO0FBQ0osUUFBQSxhQUFhLEVBQUU7QUFEWCxPQVhPO0FBY1osV0FBSztBQUNKLFFBQUEsYUFBYSxFQUFFO0FBRFgsT0FkTztBQWlCWixZQUFNO0FBQ0wsUUFBQSxhQUFhLEVBQUUsQ0FEVjtBQUVMLFFBQUEsWUFBWSxFQUFFO0FBRlQ7QUFqQk07QUFiNkMsR0FBbkMsQ0FBeEI7QUFvQ0EsQ0F6S0EsR0FBRDs7O0FDREE7Ozs7Ozs7O0FBRUEsUUFBUSxDQUFDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFXO0FBQ3ZEO0FBQUEsMkNBQU8sU0FBUDtBQUFBO0FBQ0QsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xyXG4oZnVuY3Rpb24gKCkge1xyXG5cdGxldFxyXG5cdFx0cGx1Z2lucyA9IHtcclxuXHRcdFx0cmROYXZiYXI6ICQoJy5yZC1uYXZiYXInKSxcclxuXHRcdH07XHJcblx0XHJcblx0XHRpZiAocGx1Z2lucy5yZE5hdmJhci5sZW5ndGgpIHtcclxuXHRcdHBsdWdpbnMucmROYXZiYXIuUkROYXZiYXIoe1xyXG5cdFx0XHRzdGlja1VwQ2xvbmU6IChwbHVnaW5zLnJkTmF2YmFyLmF0dHIoXCJkYXRhLXN0aWNrLXVwLWNsb25lXCIpKSA/IHBsdWdpbnMucmROYXZiYXIuYXR0cihcImRhdGEtc3RpY2stdXAtY2xvbmVcIikgPT09ICd0cnVlJyA6IGZhbHNlLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdCQoJ3NlbGVjdC5zZWxlY3QtY3VzdG9tJykuZWFjaChmdW5jdGlvbigpe1xyXG5cdFx0dmFyICR0aGlzID0gJCh0aGlzKSwgbnVtYmVyT2ZPcHRpb25zID0gJCh0aGlzKS5jaGlsZHJlbignb3B0aW9uJykubGVuZ3RoO1xyXG5cdFx0XHJcblx0XHQkdGhpcy5hZGRDbGFzcygnc2VsZWN0LWhpZGRlbicpO1xyXG5cdFx0JHRoaXMud3JhcCgnPGRpdiBjbGFzcz1cInNlbGVjdFwiPjwvZGl2PicpO1xyXG5cdFx0JHRoaXMuYWZ0ZXIoJzxkaXYgY2xhc3M9XCJzZWxlY3Qtc3R5bGVkXCI+PC9kaXY+Jyk7XHJcblx0XHRcclxuXHRcdHZhciAkc3R5bGVkU2VsZWN0ID0gJHRoaXMubmV4dCgnZGl2LnNlbGVjdC1zdHlsZWQnKTtcclxuXHRcdCRzdHlsZWRTZWxlY3QudGV4dCgkdGhpcy5jaGlsZHJlbignb3B0aW9uJykuZXEoMCkudGV4dCgpKTtcclxuXHRcdFxyXG5cdFx0dmFyICRsaXN0ID0gJCgnPHVsIC8+Jywge1xyXG5cdFx0XHQnY2xhc3MnOiAnc2VsZWN0LW9wdGlvbnMnXHJcblx0XHR9KS5pbnNlcnRBZnRlcigkc3R5bGVkU2VsZWN0KTtcclxuXHRcdFxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBudW1iZXJPZk9wdGlvbnM7IGkrKykge1xyXG5cdFx0XHQkKCc8bGkgLz4nLCB7XHJcblx0XHRcdFx0dGV4dDogJHRoaXMuY2hpbGRyZW4oJ29wdGlvbicpLmVxKGkpLnRleHQoKSxcclxuXHRcdFx0XHRyZWw6ICR0aGlzLmNoaWxkcmVuKCdvcHRpb24nKS5lcShpKS52YWwoKVxyXG5cdFx0XHR9KS5hcHBlbmRUbygkbGlzdCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGxldCAkbGlzdEl0ZW1zID0gJGxpc3QuY2hpbGRyZW4oJ2xpJyk7XHJcblx0XHRcclxuXHRcdCRzdHlsZWRTZWxlY3QuY2xpY2soZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHQkKCdkaXYuc2VsZWN0LXN0eWxlZC5hY3RpdmUnKS5ub3QodGhpcykuZWFjaChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpLm5leHQoJ3VsLnNlbGVjdC1vcHRpb25zJykuaGlkZSgpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0JCh0aGlzKS50b2dnbGVDbGFzcygnYWN0aXZlJykubmV4dCgndWwuc2VsZWN0LW9wdGlvbnMnKS50b2dnbGUoKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkbGlzdEl0ZW1zLmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0JHN0eWxlZFNlbGVjdC50ZXh0KCQodGhpcykudGV4dCgpKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdCR0aGlzLnZhbCgkKHRoaXMpLmF0dHIoJ3JlbCcpKTtcclxuXHRcdFx0JGxpc3QuaGlkZSgpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoZG9jdW1lbnQpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkc3R5bGVkU2VsZWN0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0JGxpc3QuaGlkZSgpO1xyXG5cdFx0fSk7XHJcblx0fSk7XHJcblx0XHJcblx0dmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItcG9wdWxhci1uZXdzJywge1xyXG5cdFx0c3BhY2VCZXR3ZWVuOiAtMjAsXHJcblx0XHRmcmVlTW9kZTogdHJ1ZSxcclxuXHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRhdXRvcGxheToge1xyXG5cdFx0XHRkZWxheTogNDcwMCxcclxuXHRcdFx0ZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlLFxyXG5cdFx0fSxcclxuXHRcdGxvb3A6IGZhbHNlLFxyXG5cdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRuZXh0RWw6ICcuc2xpZGVyLW5hdi1uZXh0JyxcclxuXHRcdFx0cHJldkVsOiAnLnNsaWRlci1uYXYtcHJldicsXHJcblx0XHR9LFxyXG5cdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0MzIwOiB7XHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAtMzAsXHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0XHRjZW50ZXJlZFNsaWRlczogdHJ1ZSxcclxuXHRcdFx0fSxcclxuXHRcdFx0NTc2OiB7XHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogMixcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IDIwLFxyXG5cdFx0XHRcdGNlbnRlcmVkU2xpZGVzOiBmYWxzZSxcclxuXHRcdFx0fSxcclxuXHRcdFx0NzY4OiB7XHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0fSxcclxuXHRcdFx0OTkyOiB7XHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0fSxcclxuXHRcdFx0MTIwMDoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDUsXHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0dmFyIHN3aXBlckFydGljbGVzID0gbmV3IFN3aXBlcignLnN3aXBlci1wb3B1bGFyLWFydGljbGVzJywge1xyXG5cdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdGZyZWVNb2RlOiB0cnVlLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdGF1dG9wbGF5OiB7XHJcblx0XHRcdGRlbGF5OiA0MDAwLFxyXG5cdFx0XHRkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcblx0XHR9LFxyXG5cdFx0bG9vcDogZmFsc2UsXHJcblx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdG5leHRFbDogJy5zbGlkZXItYXJ0aWNsZXMtbmF2LW5leHQnLFxyXG5cdFx0XHRwcmV2RWw6ICcuc2xpZGVyLWFydGljbGVzLW5hdi1wcmV2JyxcclxuXHRcdH0sXHJcblx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHQzMjA6IHtcclxuXHRcdFx0XHRzcGFjZUJldHdlZW46IDEwLFxyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdFx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdDU3Njoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0XHRjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcblx0XHRcdH0sXHJcblx0XHRcdDc2ODoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdH0sXHJcblx0XHRcdDk5Mjoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdH0sXHJcblx0XHRcdDEyMDA6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiA0LFxyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdHZhciBzd2lwZXJOZXdBcnRpY2xlcyA9IG5ldyBTd2lwZXIoJy5zd2lwZXItbmV3LWFydGljbGVzJywge1xyXG5cdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdGZyZWVNb2RlOiB0cnVlLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdGF1dG9wbGF5OiB7XHJcblx0XHRcdGRlbGF5OiA0MzAwLFxyXG5cdFx0XHRkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2UsXHJcblx0XHR9LFxyXG5cdFx0bG9vcDogZmFsc2UsXHJcblx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdG5leHRFbDogJy5zbGlkZXItbmV3LW5hdi1uZXh0JyxcclxuXHRcdFx0cHJldkVsOiAnLnNsaWRlci1uZXctbmF2LXByZXYnLFxyXG5cdFx0fSxcclxuXHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdDMyMDoge1xyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogLTMwLFxyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdFx0Y2VudGVyZWRTbGlkZXM6IHRydWUsXHJcblx0XHRcdH0sXHJcblx0XHRcdDU3Njoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAyMCxcclxuXHRcdFx0XHRjZW50ZXJlZFNsaWRlczogZmFsc2UsXHJcblx0XHRcdH0sXHJcblx0XHRcdDc2ODoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdH0sXHJcblx0XHRcdDk5Mjoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdH0sXHJcblx0XHRcdDEyMDA6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiA1LFxyXG5cdFx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdH0pO1xyXG59KCkpOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICBpbXBvcnQoJy4vaW5pdHMnKTtcclxufSk7XHJcblxyXG4iXX0=
