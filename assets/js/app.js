(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

(function () {
  // Global letiables
  var userAgent = navigator.userAgent.toLowerCase(),
      initialDate = new Date(),
      $document = $(document),
      $window = $(window),
      $html = $("html"),
      $body = $("body"),
      isDesktop = $html.hasClass("desktop"),
      isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : false,
      isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
      windowReady = false,
      isNoviBuilder = false,
      livedemo = false,
      plugins = {
    rdNavbar: $('.rd-navbar')
  };

  if (plugins.rdNavbar.length) {
    var navbar = plugins.rdNavbar,
        aliases = {
      '-': 0,
      '-sm-': 576,
      '-md-': 768,
      '-lg-': 992,
      '-xl-': 1200,
      '-xxl-': 1600
    },
        responsive = {};

    for (var alias in aliases) {
      var link = responsive[aliases[alias]] = {};
      if (navbar.attr('data' + alias + 'layout')) link.layout = navbar.attr('data' + alias + 'layout');
      if (navbar.attr('data' + alias + 'device-layout')) link.deviceLayout = navbar.attr('data' + alias + 'device-layout');
      if (navbar.attr('data' + alias + 'hover-on')) link.focusOnHover = navbar.attr('data' + alias + 'hover-on') === 'true';
      if (navbar.attr('data' + alias + 'auto-height')) link.autoHeight = navbar.attr('data' + alias + 'auto-height') === 'true';
      if (navbar.attr('data' + alias + 'stick-up-offset')) link.stickUpOffset = navbar.attr('data' + alias + 'stick-up-offset');
      if (navbar.attr('data' + alias + 'stick-up')) link.stickUp = navbar.attr('data' + alias + 'stick-up') === 'true';
      if (isNoviBuilder) link.stickUp = false;else if (navbar.attr('data' + alias + 'stick-up')) link.stickUp = navbar.attr('data' + alias + 'stick-up') === 'true';
    }

    plugins.rdNavbar.RDNavbar({
      anchorNav: !isNoviBuilder,
      stickUpClone: plugins.rdNavbar.attr("data-stick-up-clone") && !isNoviBuilder ? plugins.rdNavbar.attr("data-stick-up-clone") === 'true' : false,
      responsive: responsive,
      callbacks: {
        onStuck: function onStuck() {
          var navbarSearch = this.$element.find('.rd-search input');

          if (navbarSearch) {
            navbarSearch.val('').trigger('propertychange');
          }
        },
        onDropdownOver: function onDropdownOver() {
          return !isNoviBuilder;
        },
        onUnstuck: function onUnstuck() {
          if (this.$clone === null) return;
          var navbarSearch = this.$clone.find('.rd-search input');

          if (navbarSearch) {
            navbarSearch.val('').trigger('propertychange');
            navbarSearch.trigger('blur');
          }
        }
      }
    });
  }
  /*
  Reference: http://jsfiddle.net/BB3JK/47/
  */


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
      $list.hide(); //console.log($this.val());
    });
    $(document).click(function () {
      $styledSelect.removeClass('active');
      $list.hide();
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9pbml0cy5qcyIsImpzL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTs7QUFHQyxhQUFZO0FBQ1o7QUFDQSxNQUNDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBVixDQUFvQixXQUFwQixFQURiO0FBQUEsTUFFQyxXQUFXLEdBQUcsSUFBSSxJQUFKLEVBRmY7QUFBQSxNQUlDLFNBQVMsR0FBRyxDQUFDLENBQUMsUUFBRCxDQUpkO0FBQUEsTUFLQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLE1BQUQsQ0FMWjtBQUFBLE1BTUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxNQUFELENBTlY7QUFBQSxNQU9DLEtBQUssR0FBRyxDQUFDLENBQUMsTUFBRCxDQVBWO0FBQUEsTUFTQyxTQUFTLEdBQUcsS0FBSyxDQUFDLFFBQU4sQ0FBZSxTQUFmLENBVGI7QUFBQSxNQVVDLElBQUksR0FBRyxTQUFTLENBQUMsT0FBVixDQUFrQixNQUFsQixNQUE4QixDQUFDLENBQS9CLEdBQW1DLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBVixDQUFnQixNQUFoQixFQUF3QixDQUF4QixDQUFELEVBQTZCLEVBQTdCLENBQTNDLEdBQThFLFNBQVMsQ0FBQyxPQUFWLENBQWtCLFNBQWxCLE1BQWlDLENBQUMsQ0FBbEMsR0FBc0MsRUFBdEMsR0FBMkMsU0FBUyxDQUFDLE9BQVYsQ0FBa0IsTUFBbEIsTUFBOEIsQ0FBQyxDQUEvQixHQUFtQyxFQUFuQyxHQUF3QyxLQVZ6SztBQUFBLE1BV0MsUUFBUSxHQUFHLGlFQUFpRSxJQUFqRSxDQUFzRSxTQUFTLENBQUMsU0FBaEYsQ0FYWjtBQUFBLE1BWUMsV0FBVyxHQUFHLEtBWmY7QUFBQSxNQWFDLGFBQWEsR0FBRyxLQWJqQjtBQUFBLE1BY0MsUUFBUSxHQUFHLEtBZFo7QUFBQSxNQWdCQyxPQUFPLEdBQUc7QUFDVCxJQUFBLFFBQVEsRUFBRSxDQUFDLENB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Q0FBRCxDQUFRLElBQVIsQ0FBYSxLQUFiLENBQVY7QUFDQSxNQUFBLEtBQUssQ0FBQyxJQUFOLEdBSjRCLENBSzVCO0FBQ0EsS0FORDtBQVFBLElBQUEsQ0FBQyxDQUFDLFFBQUQsQ0FBRCxDQUFZLEtBQVosQ0FBa0IsWUFBVztBQUM1QixNQUFBLGFBQWEsQ0FBQyxXQUFkLENBQTBCLFFBQTFCO0FBQ0EsTUFBQSxLQUFLLENBQUMsSUFBTjtBQUNBLEtBSEQ7QUFLQSxHQTVDRDtBQTZDQSxDQS9IQSxHQUFEOzs7QUNIQTs7Ozs7Ozs7QUFFQSxRQUFRLENBQUMsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVc7QUFDdkQ7QUFBQSwyQ0FBTyxTQUFQO0FBQUE7QUFDRCxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5cclxuKGZ1bmN0aW9uICgpIHtcclxuXHQvLyBHbG9iYWwgbGV0aWFibGVzXHJcblx0bGV0XHJcblx0XHR1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCksXHJcblx0XHRpbml0aWFsRGF0ZSA9IG5ldyBEYXRlKCksXHJcblx0XHRcclxuXHRcdCRkb2N1bWVudCA9ICQoZG9jdW1lbnQpLFxyXG5cdFx0JHdpbmRvdyA9ICQod2luZG93KSxcclxuXHRcdCRodG1sID0gJChcImh0bWxcIiksXHJcblx0XHQkYm9keSA9ICQoXCJib2R5XCIpLFxyXG5cdFx0XHJcblx0XHRpc0Rlc2t0b3AgPSAkaHRtbC5oYXNDbGFzcyhcImRlc2t0b3BcIiksXHJcblx0XHRpc0lFID0gdXNlckFnZW50LmluZGV4T2YoXCJtc2llXCIpICE9PSAtMSA/IHBhcnNlSW50KHVzZXJBZ2VudC5zcGxpdChcIm1zaWVcIilbMV0sIDEwKSA6IHVzZXJBZ2VudC5pbmRleE9mKFwidHJpZGVudFwiKSAhPT0gLTEgPyAxMSA6IHVzZXJBZ2VudC5pbmRleE9mKFwiZWRnZVwiKSAhPT0gLTEgPyAxMiA6IGZhbHNlLFxyXG5cdFx0aXNNb2JpbGUgPSAvQW5kcm9pZHx3ZWJPU3xpUGhvbmV8aVBhZHxpUG9kfEJsYWNrQmVycnl8SUVNb2JpbGV8T3BlcmEgTWluaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksXHJcblx0XHR3aW5kb3dSZWFkeSA9IGZhbHNlLFxyXG5cdFx0aXNOb3ZpQnVpbGRlciA9IGZhbHNlLFxyXG5cdFx0bGl2ZWRlbW8gPSBmYWxzZSxcclxuXHRcdFxyXG5cdFx0cGx1Z2lucyA9IHtcclxuXHRcdFx0cmROYXZiYXI6ICQoJy5yZC1uYXZiYXInKSxcclxuXHRcdH07XHJcblx0XHJcblx0XHRpZiAocGx1Z2lucy5yZE5hdmJhci5sZW5ndGgpIHtcclxuXHRcdGxldFxyXG5cdFx0XHRuYXZiYXIgPSBwbHVnaW5zLnJkTmF2YmFyLFxyXG5cdFx0XHRhbGlhc2VzID0ge1xyXG5cdFx0XHRcdCctJzogICAgIDAsXHJcblx0XHRcdFx0Jy1zbS0nOiAgNTc2LFxyXG5cdFx0XHRcdCctbWQtJzogIDc2OCxcclxuXHRcdFx0XHQnLWxnLSc6ICA5OTIsXHJcblx0XHRcdFx0Jy14bC0nOiAgMTIwMCxcclxuXHRcdFx0XHQnLXh4bC0nOiAxNjAwXHJcblx0XHRcdH0sXHJcblx0XHRcdHJlc3BvbnNpdmUgPSB7fTtcclxuXHRcdFxyXG5cdFx0Zm9yIChsZXQgYWxpYXMgaW4gYWxpYXNlcykge1xyXG5cdFx0XHRsZXQgbGluayA9IHJlc3BvbnNpdmVbYWxpYXNlc1thbGlhc11dID0ge307XHJcblx0XHRcdGlmIChuYXZiYXIuYXR0cignZGF0YScgKyBhbGlhcyArICdsYXlvdXQnKSkgbGluay5sYXlvdXQgPSBuYXZiYXIuYXR0cignZGF0YScgKyBhbGlhcyArICdsYXlvdXQnKTtcclxuXHRcdFx0aWYgKG5hdmJhci5hdHRyKCdkYXRhJyArIGFsaWFzICsgJ2RldmljZS1sYXlvdXQnKSkgbGluay5kZXZpY2VMYXlvdXQgPSBuYXZiYXIuYXR0cignZGF0YScgKyBhbGlhcyArICdkZXZpY2UtbGF5b3V0Jyk7XHJcblx0XHRcdGlmIChuYXZiYXIuYXR0cignZGF0YScgKyBhbGlhcyArICdob3Zlci1vbicpKSBsaW5rLmZvY3VzT25Ib3ZlciA9IG5hdmJhci5hdHRyKCdkYXRhJyArIGFsaWFzICsgJ2hvdmVyLW9uJykgPT09ICd0cnVlJztcclxuXHRcdFx0aWYgKG5hdmJhci5hdHRyKCdkYXRhJyArIGFsaWFzICsgJ2F1dG8taGVpZ2h0JykpIGxpbmsuYXV0b0hlaWdodCA9IG5hdmJhci5hdHRyKCdkYXRhJyArIGFsaWFzICsgJ2F1dG8taGVpZ2h0JykgPT09ICd0cnVlJztcclxuXHRcdFx0aWYgKG5hdmJhci5hdHRyKCdkYXRhJyArIGFsaWFzICsgJ3N0aWNrLXVwLW9mZnNldCcpKSBsaW5rLnN0aWNrVXBPZmZzZXQgPSBuYXZiYXIuYXR0cignZGF0YScgKyBhbGlhcyArICdzdGljay11cC1vZmZzZXQnKTtcclxuXHRcdFx0aWYgKG5hdmJhci5hdHRyKCdkYXRhJyArIGFsaWFzICsgJ3N0aWNrLXVwJykpIGxpbmsuc3RpY2tVcCA9IG5hdmJhci5hdHRyKCdkYXRhJyArIGFsaWFzICsgJ3N0aWNrLXVwJykgPT09ICd0cnVlJztcclxuXHRcdFx0aWYgKGlzTm92aUJ1aWxkZXIpIGxpbmsuc3RpY2tVcCA9IGZhbHNlO1xyXG5cdFx0XHRlbHNlIGlmIChuYXZiYXIuYXR0cignZGF0YScgKyBhbGlhcyArICdzdGljay11cCcpKSBsaW5rLnN0aWNrVXAgPSBuYXZiYXIuYXR0cignZGF0YScgKyBhbGlhcyArICdzdGljay11cCcpID09PSAndHJ1ZSc7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHBsdWdpbnMucmROYXZiYXIuUkROYXZiYXIoe1xyXG5cdFx0XHRhbmNob3JOYXY6ICAgICFpc05vdmlCdWlsZGVyLFxyXG5cdFx0XHRzdGlja1VwQ2xvbmU6IChwbHVnaW5zLnJkTmF2YmFyLmF0dHIoXCJkYXRhLXN0aWNrLXVwLWNsb25lXCIpICYmICFpc05vdmlCdWlsZGVyKSA/IHBsdWdpbnMucmROYXZiYXIuYXR0cihcImRhdGEtc3RpY2stdXAtY2xvbmVcIikgPT09ICd0cnVlJyA6IGZhbHNlLFxyXG5cdFx0XHRyZXNwb25zaXZlOiAgIHJlc3BvbnNpdmUsXHJcblx0XHRcdGNhbGxiYWNrczogICAge1xyXG5cdFx0XHRcdG9uU3R1Y2s6ICAgICAgICBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRsZXQgbmF2YmFyU2VhcmNoID0gdGhpcy4kZWxlbWVudC5maW5kKCcucmQtc2VhcmNoIGlucHV0Jyk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChuYXZiYXJTZWFyY2gpIHtcclxuXHRcdFx0XHRcdFx0bmF2YmFyU2VhcmNoLnZhbCgnJykudHJpZ2dlcigncHJvcGVydHljaGFuZ2UnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdG9uRHJvcGRvd25PdmVyOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gIWlzTm92aUJ1aWxkZXI7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRvblVuc3R1Y2s6ICAgICAgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcdFx0aWYgKHRoaXMuJGNsb25lID09PSBudWxsKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBuYXZiYXJTZWFyY2ggPSB0aGlzLiRjbG9uZS5maW5kKCcucmQtc2VhcmNoIGlucHV0Jyk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChuYXZiYXJTZWFyY2gpIHtcclxuXHRcdFx0XHRcdFx0bmF2YmFyU2VhcmNoLnZhbCgnJykudHJpZ2dlcigncHJvcGVydHljaGFuZ2UnKTtcclxuXHRcdFx0XHRcdFx0bmF2YmFyU2VhcmNoLnRyaWdnZXIoJ2JsdXInKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdC8qXHJcblJlZmVyZW5jZTogaHR0cDovL2pzZmlkZGxlLm5ldC9CQjNKSy80Ny9cclxuKi9cclxuXHRcclxuXHQkKCdzZWxlY3Quc2VsZWN0LWN1c3RvbScpLmVhY2goZnVuY3Rpb24oKXtcclxuXHRcdHZhciAkdGhpcyA9ICQodGhpcyksIG51bWJlck9mT3B0aW9ucyA9ICQodGhpcykuY2hpbGRyZW4oJ29wdGlvbicpLmxlbmd0aDtcclxuXHRcdFxyXG5cdFx0JHRoaXMuYWRkQ2xhc3MoJ3NlbGVjdC1oaWRkZW4nKTtcclxuXHRcdCR0aGlzLndyYXAoJzxkaXYgY2xhc3M9XCJzZWxlY3RcIj48L2Rpdj4nKTtcclxuXHRcdCR0aGlzLmFmdGVyKCc8ZGl2IGNsYXNzPVwic2VsZWN0LXN0eWxlZFwiPjwvZGl2PicpO1xyXG5cdFx0XHJcblx0XHR2YXIgJHN0eWxlZFNlbGVjdCA9ICR0aGlzLm5leHQoJ2Rpdi5zZWxlY3Qtc3R5bGVkJyk7XHJcblx0XHQkc3R5bGVkU2VsZWN0LnRleHQoJHRoaXMuY2hpbGRyZW4oJ29wdGlvbicpLmVxKDApLnRleHQoKSk7XHJcblx0XHRcclxuXHRcdHZhciAkbGlzdCA9ICQoJzx1bCAvPicsIHtcclxuXHRcdFx0J2NsYXNzJzogJ3NlbGVjdC1vcHRpb25zJ1xyXG5cdFx0fSkuaW5zZXJ0QWZ0ZXIoJHN0eWxlZFNlbGVjdCk7XHJcblx0XHRcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyT2ZPcHRpb25zOyBpKyspIHtcclxuXHRcdFx0JCgnPGxpIC8+Jywge1xyXG5cdFx0XHRcdHRleHQ6ICR0aGlzLmNoaWxkcmVuKCdvcHRpb24nKS5lcShpKS50ZXh0KCksXHJcblx0XHRcdFx0cmVsOiAkdGhpcy5jaGlsZHJlbignb3B0aW9uJykuZXEoaSkudmFsKClcclxuXHRcdFx0fSkuYXBwZW5kVG8oJGxpc3QpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRsZXQgJGxpc3RJdGVtcyA9ICRsaXN0LmNoaWxkcmVuKCdsaScpO1xyXG5cdFx0XHJcblx0XHQkc3R5bGVkU2VsZWN0LmNsaWNrKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0JCgnZGl2LnNlbGVjdC1zdHlsZWQuYWN0aXZlJykubm90KHRoaXMpLmVhY2goZnVuY3Rpb24oKXtcclxuXHRcdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKS5uZXh0KCd1bC5zZWxlY3Qtb3B0aW9ucycpLmhpZGUoKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpLm5leHQoJ3VsLnNlbGVjdC1vcHRpb25zJykudG9nZ2xlKCk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JGxpc3RJdGVtcy5jbGljayhmdW5jdGlvbihlKSB7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdCRzdHlsZWRTZWxlY3QudGV4dCgkKHRoaXMpLnRleHQoKSkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkdGhpcy52YWwoJCh0aGlzKS5hdHRyKCdyZWwnKSk7XHJcblx0XHRcdCRsaXN0LmhpZGUoKTtcclxuXHRcdFx0Ly9jb25zb2xlLmxvZygkdGhpcy52YWwoKSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JChkb2N1bWVudCkuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdCRzdHlsZWRTZWxlY3QucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkbGlzdC5oaWRlKCk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH0pO1xyXG59KCkpOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcclxuICBpbXBvcnQoJy4vaW5pdHMnKTtcclxufSk7XHJcblxyXG4iXX0=
