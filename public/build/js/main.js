/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/jquery.flexslider-min.js":
/*!********************************************!*\
  !*** ./assets/js/jquery.flexslider-min.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
 * jQuery FlexSlider v2.7.2
 * Copyright 2012 WooThemes
 * Contributing Author: Tyler Smith
 */
!function ($) {
  var e = !0;
  $.flexslider = function (t, a) {
    var n = $(t);
    void 0 === a.rtl && "rtl" == $("html").attr("dir") && (a.rtl = !0), n.vars = $.extend({}, $.flexslider.defaults, a);
    var i = n.vars.namespace,
        r = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
        s = ("ontouchstart" in window || r || window.DocumentTouch && document instanceof DocumentTouch) && n.vars.touch,
        o = "click touchend MSPointerUp keyup",
        l = "",
        c,
        d = "vertical" === n.vars.direction,
        u = n.vars.reverse,
        v = n.vars.itemWidth > 0,
        p = "fade" === n.vars.animation,
        m = "" !== n.vars.asNavFor,
        f = {};
    $.data(t, "flexslider", n), f = {
      init: function init() {
        n.animating = !1, n.currentSlide = parseInt(n.vars.startAt ? n.vars.startAt : 0, 10), isNaN(n.currentSlide) && (n.currentSlide = 0), n.animatingTo = n.currentSlide, n.atEnd = 0 === n.currentSlide || n.currentSlide === n.last, n.containerSelector = n.vars.selector.substr(0, n.vars.selector.search(" ")), n.slides = $(n.vars.selector, n), n.container = $(n.containerSelector, n), n.count = n.slides.length, n.syncExists = $(n.vars.sync).length > 0, "slide" === n.vars.animation && (n.vars.animation = "swing"), n.prop = d ? "top" : n.vars.rtl ? "marginRight" : "marginLeft", n.args = {}, n.manualPause = !1, n.stopped = !1, n.started = !1, n.startTimeout = null, n.transitions = !n.vars.video && !p && n.vars.useCSS && function () {
          var e = document.createElement("div"),
              t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];

          for (var a in t) {
            if (void 0 !== e.style[t[a]]) return n.pfx = t[a].replace("Perspective", "").toLowerCase(), n.prop = "-" + n.pfx + "-transform", !0;
          }

          return !1;
        }(), n.isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1, n.ensureAnimationEnd = "", "" !== n.vars.controlsContainer && (n.controlsContainer = $(n.vars.controlsContainer).length > 0 && $(n.vars.controlsContainer)), "" !== n.vars.manualControls && (n.manualControls = $(n.vars.manualControls).length > 0 && $(n.vars.manualControls)), "" !== n.vars.customDirectionNav && (n.customDirectionNav = 2 === $(n.vars.customDirectionNav).length && $(n.vars.customDirectionNav)), n.vars.randomize && (n.slides.sort(function () {
          return Math.round(Math.random()) - .5;
        }), n.container.empty().append(n.slides)), n.doMath(), n.setup("init"), n.vars.controlNav && f.controlNav.setup(), n.vars.directionNav && f.directionNav.setup(), n.vars.keyboard && (1 === $(n.containerSelector).length || n.vars.multipleKeyboard) && $(document).bind("keyup", function (e) {
          var t = e.keyCode;

          if (!n.animating && (39 === t || 37 === t)) {
            var a = n.vars.rtl ? 37 === t ? n.getTarget("next") : 39 === t && n.getTarget("prev") : 39 === t ? n.getTarget("next") : 37 === t && n.getTarget("prev");
            n.flexAnimate(a, n.vars.pauseOnAction);
          }
        }), n.vars.mousewheel && n.bind("mousewheel", function (e, t, a, i) {
          e.preventDefault();
          var r = t < 0 ? n.getTarget("next") : n.getTarget("prev");
          n.flexAnimate(r, n.vars.pauseOnAction);
        }), n.vars.pausePlay && f.pausePlay.setup(), n.vars.slideshow && n.vars.pauseInvisible && f.pauseInvisible.init(), n.vars.slideshow && (n.vars.pauseOnHover && n.hover(function () {
          n.manualPlay || n.manualPause || n.pause();
        }, function () {
          n.manualPause || n.manualPlay || n.stopped || n.play();
        }), n.vars.pauseInvisible && f.pauseInvisible.isHidden() || (n.vars.initDelay > 0 ? n.startTimeout = setTimeout(n.play, n.vars.initDelay) : n.play())), m && f.asNav.setup(), s && n.vars.touch && f.touch(), (!p || p && n.vars.smoothHeight) && $(window).bind("resize orientationchange focus", f.resize), n.find("img").attr("draggable", "false"), setTimeout(function () {
          n.vars.start(n);
        }, 200);
      },
      asNav: {
        setup: function setup() {
          n.asNav = !0, n.animatingTo = Math.floor(n.currentSlide / n.move), n.currentItem = n.currentSlide, n.slides.removeClass(i + "active-slide").eq(n.currentItem).addClass(i + "active-slide"), r ? (t._slider = n, n.slides.each(function () {
            var e = this;
            e._gesture = new MSGesture(), e._gesture.target = e, e.addEventListener("MSPointerDown", function (e) {
              e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId);
            }, !1), e.addEventListener("MSGestureTap", function (e) {
              e.preventDefault();
              var t = $(this),
                  a = t.index();
              $(n.vars.asNavFor).data("flexslider").animating || t.hasClass("active") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0));
            });
          })) : n.slides.on(o, function (e) {
            e.preventDefault();
            var t = $(this),
                a = t.index(),
                r;
            r = n.vars.rtl ? -1 * (t.offset().right - $(n).scrollLeft()) : t.offset().left - $(n).scrollLeft(), r <= 0 && t.hasClass(i + "active-slide") ? n.flexAnimate(n.getTarget("prev"), !0) : $(n.vars.asNavFor).data("flexslider").animating || t.hasClass(i + "active-slide") || (n.direction = n.currentItem < a ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction, !1, !0, !0));
          });
        }
      },
      controlNav: {
        setup: function setup() {
          n.manualControls ? f.controlNav.setupManual() : f.controlNav.setupPaging();
        },
        setupPaging: function setupPaging() {
          var e = "thumbnails" === n.vars.controlNav ? "control-thumbs" : "control-paging",
              t = 1,
              a,
              r;
          if (n.controlNavScaffold = $('<ol class="' + i + "control-nav " + i + e + '"></ol>'), n.pagingCount > 1) for (var s = 0; s < n.pagingCount; s++) {
            if (r = n.slides.eq(s), void 0 === r.attr("data-thumb-alt") && r.attr("data-thumb-alt", ""), a = $("<a></a>").attr("href", "#").text(t), "thumbnails" === n.vars.controlNav && (a = $("<img/>").attr("src", r.attr("data-thumb"))), "" !== r.attr("data-thumb-alt") && a.attr("alt", r.attr("data-thumb-alt")), "thumbnails" === n.vars.controlNav && !0 === n.vars.thumbCaptions) {
              var c = r.attr("data-thumbcaption");

              if ("" !== c && void 0 !== c) {
                var d = $("<span></span>").addClass(i + "caption").text(c);
                a.append(d);
              }
            }

            var u = $("<li>");
            a.appendTo(u), u.append("</li>"), n.controlNavScaffold.append(u), t++;
          }
          n.controlsContainer ? $(n.controlsContainer).append(n.controlNavScaffold) : n.append(n.controlNavScaffold), f.controlNav.set(), f.controlNav.active(), n.controlNavScaffold.delegate("a, img", o, function (e) {
            if (e.preventDefault(), "" === l || l === e.type) {
              var t = $(this),
                  a = n.controlNav.index(t);
              t.hasClass(i + "active") || (n.direction = a > n.currentSlide ? "next" : "prev", n.flexAnimate(a, n.vars.pauseOnAction));
            }

            "" === l && (l = e.type), f.setToClearWatchedEvent();
          });
        },
        setupManual: function setupManual() {
          n.controlNav = n.manualControls, f.controlNav.active(), n.controlNav.bind(o, function (e) {
            if (e.preventDefault(), "" === l || l === e.type) {
              var t = $(this),
                  a = n.controlNav.index(t);
              t.hasClass(i + "active") || (a > n.currentSlide ? n.direction = "next" : n.direction = "prev", n.flexAnimate(a, n.vars.pauseOnAction));
            }

            "" === l && (l = e.type), f.setToClearWatchedEvent();
          });
        },
        set: function set() {
          var e = "thumbnails" === n.vars.controlNav ? "img" : "a";
          n.controlNav = $("." + i + "control-nav li " + e, n.controlsContainer ? n.controlsContainer : n);
        },
        active: function active() {
          n.controlNav.removeClass(i + "active").eq(n.animatingTo).addClass(i + "active");
        },
        update: function update(e, t) {
          n.pagingCount > 1 && "add" === e ? n.controlNavScaffold.append($('<li><a href="#">' + n.count + "</a></li>")) : 1 === n.pagingCount ? n.controlNavScaffold.find("li").remove() : n.controlNav.eq(t).closest("li").remove(), f.controlNav.set(), n.pagingCount > 1 && n.pagingCount !== n.controlNav.length ? n.update(t, e) : f.controlNav.active();
        }
      },
      directionNav: {
        setup: function setup() {
          var e = $('<ul class="' + i + 'direction-nav"><li class="' + i + 'nav-prev"><a class="' + i + 'prev" href="#">' + n.vars.prevText + '</a></li><li class="' + i + 'nav-next"><a class="' + i + 'next" href="#">' + n.vars.nextText + "</a></li></ul>");
          n.customDirectionNav ? n.directionNav = n.customDirectionNav : n.controlsContainer ? ($(n.controlsContainer).append(e), n.directionNav = $("." + i + "direction-nav li a", n.controlsContainer)) : (n.append(e), n.directionNav = $("." + i + "direction-nav li a", n)), f.directionNav.update(), n.directionNav.bind(o, function (e) {
            e.preventDefault();
            var t;
            "" !== l && l !== e.type || (t = $(this).hasClass(i + "next") ? n.getTarget("next") : n.getTarget("prev"), n.flexAnimate(t, n.vars.pauseOnAction)), "" === l && (l = e.type), f.setToClearWatchedEvent();
          });
        },
        update: function update() {
          var e = i + "disabled";
          1 === n.pagingCount ? n.directionNav.addClass(e).attr("tabindex", "-1") : n.vars.animationLoop ? n.directionNav.removeClass(e).removeAttr("tabindex") : 0 === n.animatingTo ? n.directionNav.removeClass(e).filter("." + i + "prev").addClass(e).attr("tabindex", "-1") : n.animatingTo === n.last ? n.directionNav.removeClass(e).filter("." + i + "next").addClass(e).attr("tabindex", "-1") : n.directionNav.removeClass(e).removeAttr("tabindex");
        }
      },
      pausePlay: {
        setup: function setup() {
          var e = $('<div class="' + i + 'pauseplay"><a href="#"></a></div>');
          n.controlsContainer ? (n.controlsContainer.append(e), n.pausePlay = $("." + i + "pauseplay a", n.controlsContainer)) : (n.append(e), n.pausePlay = $("." + i + "pauseplay a", n)), f.pausePlay.update(n.vars.slideshow ? i + "pause" : i + "play"), n.pausePlay.bind(o, function (e) {
            e.preventDefault(), "" !== l && l !== e.type || ($(this).hasClass(i + "pause") ? (n.manualPause = !0, n.manualPlay = !1, n.pause()) : (n.manualPause = !1, n.manualPlay = !0, n.play())), "" === l && (l = e.type), f.setToClearWatchedEvent();
          });
        },
        update: function update(e) {
          "play" === e ? n.pausePlay.removeClass(i + "pause").addClass(i + "play").html(n.vars.playText) : n.pausePlay.removeClass(i + "play").addClass(i + "pause").html(n.vars.pauseText);
        }
      },
      touch: function touch() {
        function e(e) {
          e.stopPropagation(), n.animating ? e.preventDefault() : (n.pause(), t._gesture.addPointer(e.pointerId), w = 0, c = d ? n.h : n.w, f = Number(new Date()), l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c);
        }

        function a(e) {
          e.stopPropagation();
          var a = e.target._slider;

          if (a) {
            var n = -e.translationX,
                i = -e.translationY;
            if (w += d ? i : n, m = (a.vars.rtl ? -1 : 1) * w, x = d ? Math.abs(w) < Math.abs(-n) : Math.abs(w) < Math.abs(-i), e.detail === e.MSGESTURE_FLAG_INERTIA) return void setImmediate(function () {
              t._gesture.stop();
            });
            (!x || Number(new Date()) - f > 500) && (e.preventDefault(), !p && a.transitions && (a.vars.animationLoop || (m = w / (0 === a.currentSlide && w < 0 || a.currentSlide === a.last && w > 0 ? Math.abs(w) / c + 2 : 1)), a.setProps(l + m, "setTouch")));
          }
        }

        function i(e) {
          e.stopPropagation();
          var t = e.target._slider;

          if (t) {
            if (t.animatingTo === t.currentSlide && !x && null !== m) {
              var a = u ? -m : m,
                  n = a > 0 ? t.getTarget("next") : t.getTarget("prev");
              t.canAdvance(n) && (Number(new Date()) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : p || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0);
            }

            s = null, o = null, m = null, l = null, w = 0;
          }
        }

        var s,
            o,
            l,
            c,
            m,
            f,
            g,
            h,
            _S,
            x = !1,
            y = 0,
            b = 0,
            w = 0;

        r ? (t.style.msTouchAction = "none", t._gesture = new MSGesture(), t._gesture.target = t, t.addEventListener("MSPointerDown", e, !1), t._slider = n, t.addEventListener("MSGestureChange", a, !1), t.addEventListener("MSGestureEnd", i, !1)) : (g = function g(e) {
          n.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (n.pause(), c = d ? n.h : n.w, f = Number(new Date()), y = e.touches[0].pageX, b = e.touches[0].pageY, l = v && u && n.animatingTo === n.last ? 0 : v && u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : v && n.currentSlide === n.last ? n.limit : v ? (n.itemW + n.vars.itemMargin) * n.move * n.currentSlide : u ? (n.last - n.currentSlide + n.cloneOffset) * c : (n.currentSlide + n.cloneOffset) * c, s = d ? b : y, o = d ? y : b, t.addEventListener("touchmove", h, !1), t.addEventListener("touchend", _S, !1));
        }, h = function h(e) {
          y = e.touches[0].pageX, b = e.touches[0].pageY, m = d ? s - b : (n.vars.rtl ? -1 : 1) * (s - y), x = d ? Math.abs(m) < Math.abs(y - o) : Math.abs(m) < Math.abs(b - o);
          var t = 500;
          (!x || Number(new Date()) - f > 500) && (e.preventDefault(), !p && n.transitions && (n.vars.animationLoop || (m /= 0 === n.currentSlide && m < 0 || n.currentSlide === n.last && m > 0 ? Math.abs(m) / c + 2 : 1), n.setProps(l + m, "setTouch")));
        }, _S = function S(e) {
          if (t.removeEventListener("touchmove", h, !1), n.animatingTo === n.currentSlide && !x && null !== m) {
            var a = u ? -m : m,
                i = a > 0 ? n.getTarget("next") : n.getTarget("prev");
            n.canAdvance(i) && (Number(new Date()) - f < 550 && Math.abs(a) > 50 || Math.abs(a) > c / 2) ? n.flexAnimate(i, n.vars.pauseOnAction) : p || n.flexAnimate(n.currentSlide, n.vars.pauseOnAction, !0);
          }

          t.removeEventListener("touchend", _S, !1), s = null, o = null, m = null, l = null;
        }, t.addEventListener("touchstart", g, !1));
      },
      resize: function resize() {
        !n.animating && n.is(":visible") && (v || n.doMath(), p ? f.smoothHeight() : v ? (n.slides.width(n.computedW), n.update(n.pagingCount), n.setProps()) : d ? (n.viewport.height(n.h), n.setProps(n.h, "setTotal")) : (n.vars.smoothHeight && f.smoothHeight(), n.newSlides.width(n.computedW), n.setProps(n.computedW, "setTotal")));
      },
      smoothHeight: function smoothHeight(e) {
        if (!d || p) {
          var t = p ? n : n.viewport;
          e ? t.animate({
            height: n.slides.eq(n.animatingTo).innerHeight()
          }, e) : t.innerHeight(n.slides.eq(n.animatingTo).innerHeight());
        }
      },
      sync: function sync(e) {
        var t = $(n.vars.sync).data("flexslider"),
            a = n.animatingTo;

        switch (e) {
          case "animate":
            t.flexAnimate(a, n.vars.pauseOnAction, !1, !0);
            break;

          case "play":
            t.playing || t.asNav || t.play();
            break;

          case "pause":
            t.pause();
            break;
        }
      },
      uniqueID: function uniqueID(e) {
        return e.filter("[id]").add(e.find("[id]")).each(function () {
          var e = $(this);
          e.attr("id", e.attr("id") + "_clone");
        }), e;
      },
      pauseInvisible: {
        visProp: null,
        init: function init() {
          var e = f.pauseInvisible.getHiddenProp();

          if (e) {
            var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
            document.addEventListener(t, function () {
              f.pauseInvisible.isHidden() ? n.startTimeout ? clearTimeout(n.startTimeout) : n.pause() : n.started ? n.play() : n.vars.initDelay > 0 ? setTimeout(n.play, n.vars.initDelay) : n.play();
            });
          }
        },
        isHidden: function isHidden() {
          var e = f.pauseInvisible.getHiddenProp();
          return !!e && document[e];
        },
        getHiddenProp: function getHiddenProp() {
          var e = ["webkit", "moz", "ms", "o"];
          if ("hidden" in document) return "hidden";

          for (var t = 0; t < e.length; t++) {
            if (e[t] + "Hidden" in document) return e[t] + "Hidden";
          }

          return null;
        }
      },
      setToClearWatchedEvent: function setToClearWatchedEvent() {
        clearTimeout(c), c = setTimeout(function () {
          l = "";
        }, 3e3);
      }
    }, n.flexAnimate = function (e, t, a, r, o) {
      if (n.vars.animationLoop || e === n.currentSlide || (n.direction = e > n.currentSlide ? "next" : "prev"), m && 1 === n.pagingCount && (n.direction = n.currentItem < e ? "next" : "prev"), !n.animating && (n.canAdvance(e, o) || a) && n.is(":visible")) {
        if (m && r) {
          var l = $(n.vars.asNavFor).data("flexslider");
          if (n.atEnd = 0 === e || e === n.count - 1, l.flexAnimate(e, !0, !1, !0, o), n.direction = n.currentItem < e ? "next" : "prev", l.direction = n.direction, Math.ceil((e + 1) / n.visible) - 1 === n.currentSlide || 0 === e) return n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), !1;
          n.currentItem = e, n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), e = Math.floor(e / n.visible);
        }

        if (n.animating = !0, n.animatingTo = e, t && n.pause(), n.vars.before(n), n.syncExists && !o && f.sync("animate"), n.vars.controlNav && f.controlNav.active(), v || n.slides.removeClass(i + "active-slide").eq(e).addClass(i + "active-slide"), n.atEnd = 0 === e || e === n.last, n.vars.directionNav && f.directionNav.update(), e === n.last && (n.vars.end(n), n.vars.animationLoop || n.pause()), p) s ? (n.slides.eq(n.currentSlide).css({
          opacity: 0,
          zIndex: 1
        }), n.slides.eq(e).css({
          opacity: 1,
          zIndex: 2
        }), n.wrapup(c)) : (n.slides.eq(n.currentSlide).css({
          zIndex: 1
        }).animate({
          opacity: 0
        }, n.vars.animationSpeed, n.vars.easing), n.slides.eq(e).css({
          zIndex: 2
        }).animate({
          opacity: 1
        }, n.vars.animationSpeed, n.vars.easing, n.wrapup));else {
          var c = d ? n.slides.filter(":first").height() : n.computedW,
              g,
              h,
              S;
          v ? (g = n.vars.itemMargin, S = (n.itemW + g) * n.move * n.animatingTo, h = S > n.limit && 1 !== n.visible ? n.limit : S) : h = 0 === n.currentSlide && e === n.count - 1 && n.vars.animationLoop && "next" !== n.direction ? u ? (n.count + n.cloneOffset) * c : 0 : n.currentSlide === n.last && 0 === e && n.vars.animationLoop && "prev" !== n.direction ? u ? 0 : (n.count + 1) * c : u ? (n.count - 1 - e + n.cloneOffset) * c : (e + n.cloneOffset) * c, n.setProps(h, "", n.vars.animationSpeed), n.transitions ? (n.vars.animationLoop && n.atEnd || (n.animating = !1, n.currentSlide = n.animatingTo), n.container.unbind("webkitTransitionEnd transitionend"), n.container.bind("webkitTransitionEnd transitionend", function () {
            clearTimeout(n.ensureAnimationEnd), n.wrapup(c);
          }), clearTimeout(n.ensureAnimationEnd), n.ensureAnimationEnd = setTimeout(function () {
            n.wrapup(c);
          }, n.vars.animationSpeed + 100)) : n.container.animate(n.args, n.vars.animationSpeed, n.vars.easing, function () {
            n.wrapup(c);
          });
        }
        n.vars.smoothHeight && f.smoothHeight(n.vars.animationSpeed);
      }
    }, n.wrapup = function (e) {
      p || v || (0 === n.currentSlide && n.animatingTo === n.last && n.vars.animationLoop ? n.setProps(e, "jumpEnd") : n.currentSlide === n.last && 0 === n.animatingTo && n.vars.animationLoop && n.setProps(e, "jumpStart")), n.animating = !1, n.currentSlide = n.animatingTo, n.vars.after(n);
    }, n.animateSlides = function () {
      !n.animating && e && n.flexAnimate(n.getTarget("next"));
    }, n.pause = function () {
      clearInterval(n.animatedSlides), n.animatedSlides = null, n.playing = !1, n.vars.pausePlay && f.pausePlay.update("play"), n.syncExists && f.sync("pause");
    }, n.play = function () {
      n.playing && clearInterval(n.animatedSlides), n.animatedSlides = n.animatedSlides || setInterval(n.animateSlides, n.vars.slideshowSpeed), n.started = n.playing = !0, n.vars.pausePlay && f.pausePlay.update("pause"), n.syncExists && f.sync("play");
    }, n.stop = function () {
      n.pause(), n.stopped = !0;
    }, n.canAdvance = function (e, t) {
      var a = m ? n.pagingCount - 1 : n.last;
      return !!t || !(!m || n.currentItem !== n.count - 1 || 0 !== e || "prev" !== n.direction) || (!m || 0 !== n.currentItem || e !== n.pagingCount - 1 || "next" === n.direction) && !(e === n.currentSlide && !m) && (!!n.vars.animationLoop || (!n.atEnd || 0 !== n.currentSlide || e !== a || "next" === n.direction) && (!n.atEnd || n.currentSlide !== a || 0 !== e || "next" !== n.direction));
    }, n.getTarget = function (e) {
      return n.direction = e, "next" === e ? n.currentSlide === n.last ? 0 : n.currentSlide + 1 : 0 === n.currentSlide ? n.last : n.currentSlide - 1;
    }, n.setProps = function (e, t, a) {
      var i = function () {
        var a = e || (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo;
        return function () {
          if (v) return "setTouch" === t ? e : u && n.animatingTo === n.last ? 0 : u ? n.limit - (n.itemW + n.vars.itemMargin) * n.move * n.animatingTo : n.animatingTo === n.last ? n.limit : a;

          switch (t) {
            case "setTotal":
              return u ? (n.count - 1 - n.currentSlide + n.cloneOffset) * e : (n.currentSlide + n.cloneOffset) * e;

            case "setTouch":
              return e;

            case "jumpEnd":
              return u ? e : n.count * e;

            case "jumpStart":
              return u ? n.count * e : e;

            default:
              return e;
          }
        }() * (n.vars.rtl ? 1 : -1) + "px";
      }();

      n.transitions && (i = n.isFirefox ? d ? "translate3d(0," + i + ",0)" : "translate3d(" + parseInt(i) + "px,0,0)" : d ? "translate3d(0," + i + ",0)" : "translate3d(" + (n.vars.rtl ? -1 : 1) * parseInt(i) + "px,0,0)", a = void 0 !== a ? a / 1e3 + "s" : "0s", n.container.css("-" + n.pfx + "-transition-duration", a), n.container.css("transition-duration", a)), n.args[n.prop] = i, (n.transitions || void 0 === a) && n.container.css(n.args), n.container.css("transform", i);
    }, n.setup = function (e) {
      if (p) n.vars.rtl ? n.slides.css({
        width: "100%",
        "float": "right",
        marginLeft: "-100%",
        position: "relative"
      }) : n.slides.css({
        width: "100%",
        "float": "left",
        marginRight: "-100%",
        position: "relative"
      }), "init" === e && (s ? n.slides.css({
        opacity: 0,
        display: "block",
        webkitTransition: "opacity " + n.vars.animationSpeed / 1e3 + "s ease",
        zIndex: 1
      }).eq(n.currentSlide).css({
        opacity: 1,
        zIndex: 2
      }) : 0 == n.vars.fadeFirstSlide ? n.slides.css({
        opacity: 0,
        display: "block",
        zIndex: 1
      }).eq(n.currentSlide).css({
        zIndex: 2
      }).css({
        opacity: 1
      }) : n.slides.css({
        opacity: 0,
        display: "block",
        zIndex: 1
      }).eq(n.currentSlide).css({
        zIndex: 2
      }).animate({
        opacity: 1
      }, n.vars.animationSpeed, n.vars.easing)), n.vars.smoothHeight && f.smoothHeight();else {
        var t, a;
        "init" === e && (n.viewport = $('<div class="' + i + 'viewport"></div>').css({
          overflow: "hidden",
          position: "relative"
        }).appendTo(n).append(n.container), n.cloneCount = 0, n.cloneOffset = 0, u && (a = $.makeArray(n.slides).reverse(), n.slides = $(a), n.container.empty().append(n.slides))), n.vars.animationLoop && !v && (n.cloneCount = 2, n.cloneOffset = 1, "init" !== e && n.container.find(".clone").remove(), n.container.append(f.uniqueID(n.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(f.uniqueID(n.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), n.newSlides = $(n.vars.selector, n), t = u ? n.count - 1 - n.currentSlide + n.cloneOffset : n.currentSlide + n.cloneOffset, d && !v ? (n.container.height(200 * (n.count + n.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
          n.newSlides.css({
            display: "block"
          }), n.doMath(), n.viewport.height(n.h), n.setProps(t * n.h, "init");
        }, "init" === e ? 100 : 0)) : (n.container.width(200 * (n.count + n.cloneCount) + "%"), n.setProps(t * n.computedW, "init"), setTimeout(function () {
          n.doMath(), n.vars.rtl && n.isFirefox ? n.newSlides.css({
            width: n.computedW,
            marginRight: n.computedM,
            "float": "right",
            display: "block"
          }) : n.newSlides.css({
            width: n.computedW,
            marginRight: n.computedM,
            "float": "left",
            display: "block"
          }), n.vars.smoothHeight && f.smoothHeight();
        }, "init" === e ? 100 : 0));
      }
      v || n.slides.removeClass(i + "active-slide").eq(n.currentSlide).addClass(i + "active-slide"), n.vars.init(n);
    }, n.doMath = function () {
      var e = n.slides.first(),
          t = n.vars.itemMargin,
          a = n.vars.minItems,
          i = n.vars.maxItems;
      n.w = void 0 === n.viewport ? n.width() : n.viewport.width(), n.isFirefox && (n.w = n.width()), n.h = e.height(), n.boxPadding = e.outerWidth() - e.width(), v ? (n.itemT = n.vars.itemWidth + t, n.itemM = t, n.minW = a ? a * n.itemT : n.w, n.maxW = i ? i * n.itemT - t : n.w, n.itemW = n.minW > n.w ? (n.w - t * (a - 1)) / a : n.maxW < n.w ? (n.w - t * (i - 1)) / i : n.vars.itemWidth > n.w ? n.w : n.vars.itemWidth, n.visible = Math.floor(n.w / n.itemW), n.move = n.vars.move > 0 && n.vars.move < n.visible ? n.vars.move : n.visible, n.pagingCount = Math.ceil((n.count - n.visible) / n.move + 1), n.last = n.pagingCount - 1, n.limit = 1 === n.pagingCount ? 0 : n.vars.itemWidth > n.w ? n.itemW * (n.count - 1) + t * (n.count - 1) : (n.itemW + t) * n.count - n.w - t) : (n.itemW = n.w, n.itemM = t, n.pagingCount = n.count, n.last = n.count - 1), n.computedW = n.itemW - n.boxPadding, n.computedM = n.itemM;
    }, n.update = function (e, t) {
      n.doMath(), v || (e < n.currentSlide ? n.currentSlide += 1 : e <= n.currentSlide && 0 !== e && (n.currentSlide -= 1), n.animatingTo = n.currentSlide), n.vars.controlNav && !n.manualControls && ("add" === t && !v || n.pagingCount > n.controlNav.length ? f.controlNav.update("add") : ("remove" === t && !v || n.pagingCount < n.controlNav.length) && (v && n.currentSlide > n.last && (n.currentSlide -= 1, n.animatingTo -= 1), f.controlNav.update("remove", n.last))), n.vars.directionNav && f.directionNav.update();
    }, n.addSlide = function (e, t) {
      var a = $(e);
      n.count += 1, n.last = n.count - 1, d && u ? void 0 !== t ? n.slides.eq(n.count - t).after(a) : n.container.prepend(a) : void 0 !== t ? n.slides.eq(t).before(a) : n.container.append(a), n.update(t, "add"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.added(n);
    }, n.removeSlide = function (e) {
      var t = isNaN(e) ? n.slides.index($(e)) : e;
      n.count -= 1, n.last = n.count - 1, isNaN(e) ? $(e, n.slides).remove() : d && u ? n.slides.eq(n.last).remove() : n.slides.eq(e).remove(), n.doMath(), n.update(t, "remove"), n.slides = $(n.vars.selector + ":not(.clone)", n), n.setup(), n.vars.removed(n);
    }, f.init();
  }, $(window).blur(function (t) {
    e = !1;
  }).focus(function (t) {
    e = !0;
  }), $.flexslider.defaults = {
    namespace: "flex-",
    selector: ".slides > li",
    animation: "fade",
    easing: "swing",
    direction: "horizontal",
    reverse: !1,
    animationLoop: !0,
    smoothHeight: !1,
    startAt: 0,
    slideshow: !0,
    slideshowSpeed: 7e3,
    animationSpeed: 600,
    initDelay: 0,
    randomize: !1,
    fadeFirstSlide: !0,
    thumbCaptions: !1,
    pauseOnAction: !0,
    pauseOnHover: !1,
    pauseInvisible: !0,
    useCSS: !0,
    touch: !0,
    video: !1,
    controlNav: !0,
    directionNav: !0,
    prevText: "Previous",
    nextText: "Next",
    keyboard: !0,
    multipleKeyboard: !1,
    mousewheel: !1,
    pausePlay: !1,
    pauseText: "Pause",
    playText: "Play",
    controlsContainer: "",
    manualControls: "",
    customDirectionNav: "",
    sync: "",
    asNavFor: "",
    itemWidth: 0,
    itemMargin: 0,
    minItems: 1,
    maxItems: 0,
    move: 0,
    allowOneSlide: !0,
    isFirefox: !1,
    start: function start() {},
    before: function before() {},
    after: function after() {},
    end: function end() {},
    added: function added() {},
    removed: function removed() {},
    init: function init() {},
    rtl: !1
  }, $.fn.flexslider = function (e) {
    if (void 0 === e && (e = {}), "object" == _typeof(e)) return this.each(function () {
      var t = $(this),
          a = e.selector ? e.selector : ".slides > li",
          n = t.find(a);
      1 === n.length && !1 === e.allowOneSlide || 0 === n.length ? (n.fadeIn(400), e.start && e.start(t)) : void 0 === t.data("flexslider") && new $.flexslider(this, e);
    });
    var t = $(this).data("flexslider");

    switch (e) {
      case "play":
        t.play();
        break;

      case "pause":
        t.pause();
        break;

      case "stop":
        t.stop();
        break;

      case "next":
        t.flexAnimate(t.getTarget("next"), !0);
        break;

      case "prev":
      case "previous":
        t.flexAnimate(t.getTarget("prev"), !0);
        break;

      default:
        "number" == typeof e && t.flexAnimate(e, !0);
    }
  };
}(jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jquery_flexslider_min__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jquery.flexslider-min */ "./assets/js/jquery.flexslider-min.js");
/* harmony import */ var _jquery_flexslider_min__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jquery_flexslider_min__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./assets/js/menu.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ "./assets/js/slider.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./assets/js/render.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_render__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./assets/js/menu.js":
/*!***************************!*\
  !*** ./assets/js/menu.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = jQuery;
$(document).ready(function () {
  $("#menu-open").click(function () {
    $("#menu-open span").toggleClass("open");
    $(".nav").slideToggle("slow");
  }); //products sub menu

  $(".products-menu-link>a").click(function () {
    $(".downloads").removeClass("sub-menu-open");
    $(".products").toggleClass("sub-menu-open");
  }); //downloads sub menu

  $(".download-menu-link").click(function () {
    $(".products").removeClass("sub-menu-open");
    $(".downloads").toggleClass("sub-menu-open");
  }); //change product menu link on mobile

  var w = window.innerWidth;

  if (w < 1200) {
    $(".products-menu-link>a").attr("href", "/products");
    $(".download-menu-link>a").attr("href", "/downloads");
  } //collapsible menus function


  function setup_collapsible_submenus() {
    var $menu = $("#mobile_menu"),
        top_level_link = "#mobile_menu .menu-item-has-children > a";
    $menu.find("a").each(function () {
      $(this).off("click");

      if ($(this).is(top_level_link)) {
        $(this).attr("href", "#");
      }

      if (!$(this).siblings(".sub-menu").length) {
        $(this).on("click", function (event) {
          $(this).parents(".menu-button").trigger("click");
        });
      } else {
        $(this).on("click", function (event) {
          event.preventDefault();
          $(this).parent().toggleClass("visible");
        });
      }
    });
  }

  $(window).load(function () {
    setTimeout(function () {
      setup_collapsible_submenus();
    }, 700);
  });
});

/***/ }),

/***/ "./assets/js/render.js":
/*!*****************************!*\
  !*** ./assets/js/render.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Grab items
//Icons
var render = document.querySelector('.render');
var quotation = document.querySelector('.quotation');
var layout = document.querySelector('.layout');
var backBtn = document.querySelector('.back');
var main = document.querySelector('#content'); //Dropdown Content

var renderDropdown = document.querySelector('.render-image-wrapper');
var quotationDropdown = document.querySelector('.pdf-wrapper');
var layoutDropdwon = document.querySelector('.layout-image-wrapper'); //Content Cross

var renderCross = document.querySelectorAll('.render-cross'); //Event Listeners

if (render) //check if element exists
  render.addEventListener('click', function () {
    renderDropdown.classList.add('active');
    backBtn.classList.add('d-none');
  });
if (layout) layout.addEventListener('click', function () {
  layoutDropdwon.classList.add('active');
  backBtn.classList.add('d-none');
});
if (quotation) quotation.addEventListener('click', function () {
  quotationDropdown.classList.add('active');
  backBtn.classList.add('d-none');
  main.classList.add('hidden');
}); //Close content

renderCross.forEach(function (item) {
  item.addEventListener('click', function () {
    if (render && renderDropdown.classList.contains('active')) {
      renderDropdown.classList.remove('active');
      backBtn.classList.remove('d-none');
    } else if (layout && layoutDropdwon.classList.contains('active')) {
      layoutDropdwon.classList.remove('active');
      backBtn.classList.remove('d-none');
    } else if (quotation && quotationDropdown.classList.contains('active')) {
      quotationDropdown.classList.remove('active');
      backBtn.classList.remove('d-none');
      scrollBarDelay();
    }
  });
}); //Delay function

function scrollBarDelay() {
  setTimeout(function () {
    main.classList.remove('hidden');
  }, 2000);
}

/***/ }),

/***/ "./assets/js/slider.js":
/*!*****************************!*\
  !*** ./assets/js/slider.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $ = jQuery;
$(window).load(function () {
  $(".flexslider").flexslider({
    animation: "fade",
    slideshowSpeed: 5000,
    animationSpeed: 600,
    animationLoop: false,
    pauseOnAction: false,
    controlNav: true,
    rtl: true,
    customDirectionNav: $(".custom-navigation a")
  });
});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};

/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
  "use strict";

  if (global.setImmediate) {
    return;
  }

  var nextHandle = 1; // Spec says greater than zero

  var tasksByHandle = {};
  var currentlyRunningATask = false;
  var doc = global.document;
  var registerImmediate;

  function setImmediate(callback) {
    // Callback can either be a function or a string
    if (typeof callback !== "function") {
      callback = new Function("" + callback);
    } // Copy function arguments


    var args = new Array(arguments.length - 1);

    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i + 1];
    } // Store and register the task


    var task = {
      callback: callback,
      args: args
    };
    tasksByHandle[nextHandle] = task;
    registerImmediate(nextHandle);
    return nextHandle++;
  }

  function clearImmediate(handle) {
    delete tasksByHandle[handle];
  }

  function run(task) {
    var callback = task.callback;
    var args = task.args;

    switch (args.length) {
      case 0:
        callback();
        break;

      case 1:
        callback(args[0]);
        break;

      case 2:
        callback(args[0], args[1]);
        break;

      case 3:
        callback(args[0], args[1], args[2]);
        break;

      default:
        callback.apply(undefined, args);
        break;
    }
  }

  function runIfPresent(handle) {
    // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
    // So if we're currently running a task, we'll need to delay this invocation.
    if (currentlyRunningATask) {
      // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
      // "too much recursion" error.
      setTimeout(runIfPresent, 0, handle);
    } else {
      var task = tasksByHandle[handle];

      if (task) {
        currentlyRunningATask = true;

        try {
          run(task);
        } finally {
          clearImmediate(handle);
          currentlyRunningATask = false;
        }
      }
    }
  }

  function installNextTickImplementation() {
    registerImmediate = function (handle) {
      process.nextTick(function () {
        runIfPresent(handle);
      });
    };
  }

  function canUsePostMessage() {
    // The test against `importScripts` prevents this implementation from being installed inside a web worker,
    // where `global.postMessage` means something completely different and can't be used for this purpose.
    if (global.postMessage && !global.importScripts) {
      var postMessageIsAsynchronous = true;
      var oldOnMessage = global.onmessage;

      global.onmessage = function () {
        postMessageIsAsynchronous = false;
      };

      global.postMessage("", "*");
      global.onmessage = oldOnMessage;
      return postMessageIsAsynchronous;
    }
  }

  function installPostMessageImplementation() {
    // Installs an event handler on `global` for the `message` event: see
    // * https://developer.mozilla.org/en/DOM/window.postMessage
    // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
    var messagePrefix = "setImmediate$" + Math.random() + "$";

    var onGlobalMessage = function (event) {
      if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
        runIfPresent(+event.data.slice(messagePrefix.length));
      }
    };

    if (global.addEventListener) {
      global.addEventListener("message", onGlobalMessage, false);
    } else {
      global.attachEvent("onmessage", onGlobalMessage);
    }

    registerImmediate = function (handle) {
      global.postMessage(messagePrefix + handle, "*");
    };
  }

  function installMessageChannelImplementation() {
    var channel = new MessageChannel();

    channel.port1.onmessage = function (event) {
      var handle = event.data;
      runIfPresent(handle);
    };

    registerImmediate = function (handle) {
      channel.port2.postMessage(handle);
    };
  }

  function installReadyStateChangeImplementation() {
    var html = doc.documentElement;

    registerImmediate = function (handle) {
      // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
      // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
      var script = doc.createElement("script");

      script.onreadystatechange = function () {
        runIfPresent(handle);
        script.onreadystatechange = null;
        html.removeChild(script);
        script = null;
      };

      html.appendChild(script);
    };
  }

  function installSetTimeoutImplementation() {
    registerImmediate = function (handle) {
      setTimeout(runIfPresent, 0, handle);
    };
  } // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.


  var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
  attachTo = attachTo && attachTo.setTimeout ? attachTo : global; // Don't get fooled by e.g. browserify environments.

  if ({}.toString.call(global.process) === "[object process]") {
    // For Node.js before 0.9
    installNextTickImplementation();
  } else if (canUsePostMessage()) {
    // For non-IE10 modern browsers
    installPostMessageImplementation();
  } else if (global.MessageChannel) {
    // For web workers, where supported
    installMessageChannelImplementation();
  } else if (doc && "onreadystatechange" in doc.createElement("script")) {
    // For IE 6–8
    installReadyStateChangeImplementation();
  } else {
    // For older browsers
    installSetTimeoutImplementation();
  }

  attachTo.setImmediate = setImmediate;
  attachTo.clearImmediate = clearImmediate;
})(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = typeof global !== "undefined" && global || typeof self !== "undefined" && self || window;
var apply = Function.prototype.apply; // DOM APIs, for completeness

exports.setTimeout = function () {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};

exports.setInterval = function () {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};

exports.clearTimeout = exports.clearInterval = function (timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}

Timeout.prototype.unref = Timeout.prototype.ref = function () {};

Timeout.prototype.close = function () {
  this._clearFn.call(scope, this._id);
}; // Does not start the time, just sets up the members needed.


exports.enroll = function (item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function (item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function (item) {
  clearTimeout(item._idleTimeoutId);
  var msecs = item._idleTimeout;

  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout) item._onTimeout();
    }, msecs);
  }
}; // setimmediate attaches itself to the global object


__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js"); // On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.


exports.setImmediate = typeof self !== "undefined" && self.setImmediate || typeof global !== "undefined" && global.setImmediate || this && this.setImmediate;
exports.clearImmediate = typeof self !== "undefined" && self.clearImmediate || typeof global !== "undefined" && global.clearImmediate || this && this.clearImmediate;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2pxdWVyeS5mbGV4c2xpZGVyLW1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbIiQiLCJlIiwiZmxleHNsaWRlciIsInQiLCJhIiwibiIsInJ0bCIsImF0dHIiLCJ2YXJzIiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCJpIiwibmFtZXNwYWNlIiwiciIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1zUG9pbnRlckVuYWJsZWQiLCJNU0dlc3R1cmUiLCJzIiwiRG9jdW1lbnRUb3VjaCIsImRvY3VtZW50IiwidG91Y2giLCJvIiwibCIsImMiLCJkIiwiZGlyZWN0aW9uIiwidSIsInJldmVyc2UiLCJ2IiwiaXRlbVdpZHRoIiwicCIsImFuaW1hdGlvbiIsIm0iLCJhc05hdkZvciIsImYiLCJkYXRhIiwiaW5pdCIsImFuaW1hdGluZyIsImN1cnJlbnRTbGlkZSIsInBhcnNlSW50Iiwic3RhcnRBdCIsImlzTmFOIiwiYW5pbWF0aW5nVG8iLCJhdEVuZCIsImxhc3QiLCJjb250YWluZXJTZWxlY3RvciIsInNlbGVjdG9yIiwic3Vic3RyIiwic2VhcmNoIiwic2xpZGVzIiwiY29udGFpbmVyIiwiY291bnQiLCJsZW5ndGgiLCJzeW5jRXhpc3RzIiwic3luYyIsInByb3AiLCJhcmdzIiwibWFudWFsUGF1c2UiLCJzdG9wcGVkIiwic3RhcnRlZCIsInN0YXJ0VGltZW91dCIsInRyYW5zaXRpb25zIiwidmlkZW8iLCJ1c2VDU1MiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJwZngiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJpc0ZpcmVmb3giLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiZW5zdXJlQW5pbWF0aW9uRW5kIiwiY29udHJvbHNDb250YWluZXIiLCJtYW51YWxDb250cm9scyIsImN1c3RvbURpcmVjdGlvbk5hdiIsInJhbmRvbWl6ZSIsInNvcnQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJlbXB0eSIsImFwcGVuZCIsImRvTWF0aCIsInNldHVwIiwiY29udHJvbE5hdiIsImRpcmVjdGlvbk5hdiIsImtleWJvYXJkIiwibXVsdGlwbGVLZXlib2FyZCIsImJpbmQiLCJrZXlDb2RlIiwiZ2V0VGFyZ2V0IiwiZmxleEFuaW1hdGUiLCJwYXVzZU9uQWN0aW9uIiwibW91c2V3aGVlbCIsInByZXZlbnREZWZhdWx0IiwicGF1c2VQbGF5Iiwic2xpZGVzaG93IiwicGF1c2VJbnZpc2libGUiLCJwYXVzZU9uSG92ZXIiLCJob3ZlciIsIm1hbnVhbFBsYXkiLCJwYXVzZSIsInBsYXkiLCJpc0hpZGRlbiIsImluaXREZWxheSIsInNldFRpbWVvdXQiLCJhc05hdiIsInNtb290aEhlaWdodCIsInJlc2l6ZSIsImZpbmQiLCJzdGFydCIsImZsb29yIiwibW92ZSIsImN1cnJlbnRJdGVtIiwicmVtb3ZlQ2xhc3MiLCJlcSIsImFkZENsYXNzIiwiX3NsaWRlciIsImVhY2giLCJfZ2VzdHVyZSIsInRhcmdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50VGFyZ2V0IiwiYWRkUG9pbnRlciIsInBvaW50ZXJJZCIsImluZGV4IiwiaGFzQ2xhc3MiLCJvbiIsIm9mZnNldCIsInJpZ2h0Iiwic2Nyb2xsTGVmdCIsImxlZnQiLCJzZXR1cE1hbnVhbCIsInNldHVwUGFnaW5nIiwiY29udHJvbE5hdlNjYWZmb2xkIiwicGFnaW5nQ291bnQiLCJ0ZXh0IiwidGh1bWJDYXB0aW9ucyIsImFwcGVuZFRvIiwic2V0IiwiYWN0aXZlIiwiZGVsZWdhdGUiLCJ0eXBlIiwic2V0VG9DbGVhcldhdGNoZWRFdmVudCIsInVwZGF0ZSIsInJlbW92ZSIsImNsb3Nlc3QiLCJwcmV2VGV4dCIsIm5leHRUZXh0IiwiYW5pbWF0aW9uTG9vcCIsInJlbW92ZUF0dHIiLCJmaWx0ZXIiLCJodG1sIiwicGxheVRleHQiLCJwYXVzZVRleHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ3IiwiaCIsIk51bWJlciIsIkRhdGUiLCJsaW1pdCIsIml0ZW1XIiwiaXRlbU1hcmdpbiIsImNsb25lT2Zmc2V0IiwidHJhbnNsYXRpb25YIiwidHJhbnNsYXRpb25ZIiwieCIsImFicyIsImRldGFpbCIsIk1TR0VTVFVSRV9GTEFHX0lORVJUSUEiLCJzZXRJbW1lZGlhdGUiLCJzdG9wIiwic2V0UHJvcHMiLCJjYW5BZHZhbmNlIiwiZyIsIlMiLCJ5IiwiYiIsIm1zVG91Y2hBY3Rpb24iLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpcyIsIndpZHRoIiwiY29tcHV0ZWRXIiwidmlld3BvcnQiLCJoZWlnaHQiLCJuZXdTbGlkZXMiLCJhbmltYXRlIiwiaW5uZXJIZWlnaHQiLCJwbGF5aW5nIiwidW5pcXVlSUQiLCJhZGQiLCJ2aXNQcm9wIiwiZ2V0SGlkZGVuUHJvcCIsImNsZWFyVGltZW91dCIsImNlaWwiLCJ2aXNpYmxlIiwiYmVmb3JlIiwiZW5kIiwiY3NzIiwib3BhY2l0eSIsInpJbmRleCIsIndyYXB1cCIsImFuaW1hdGlvblNwZWVkIiwiZWFzaW5nIiwidW5iaW5kIiwiYWZ0ZXIiLCJhbmltYXRlU2xpZGVzIiwiY2xlYXJJbnRlcnZhbCIsImFuaW1hdGVkU2xpZGVzIiwic2V0SW50ZXJ2YWwiLCJzbGlkZXNob3dTcGVlZCIsIm1hcmdpbkxlZnQiLCJwb3NpdGlvbiIsIm1hcmdpblJpZ2h0IiwiZGlzcGxheSIsIndlYmtpdFRyYW5zaXRpb24iLCJmYWRlRmlyc3RTbGlkZSIsIm92ZXJmbG93IiwiY2xvbmVDb3VudCIsIm1ha2VBcnJheSIsImZpcnN0IiwiY2xvbmUiLCJwcmVwZW5kIiwiY29tcHV0ZWRNIiwibWluSXRlbXMiLCJtYXhJdGVtcyIsImJveFBhZGRpbmciLCJvdXRlcldpZHRoIiwiaXRlbVQiLCJpdGVtTSIsIm1pblciLCJtYXhXIiwiYWRkU2xpZGUiLCJhZGRlZCIsInJlbW92ZVNsaWRlIiwicmVtb3ZlZCIsImJsdXIiLCJmb2N1cyIsImFsbG93T25lU2xpZGUiLCJmbiIsImZhZGVJbiIsImpRdWVyeSIsInJlYWR5IiwiY2xpY2siLCJ0b2dnbGVDbGFzcyIsInNsaWRlVG9nZ2xlIiwiaW5uZXJXaWR0aCIsInNldHVwX2NvbGxhcHNpYmxlX3N1Ym1lbnVzIiwiJG1lbnUiLCJ0b3BfbGV2ZWxfbGluayIsIm9mZiIsInNpYmxpbmdzIiwiZXZlbnQiLCJwYXJlbnRzIiwidHJpZ2dlciIsInBhcmVudCIsImxvYWQiLCJyZW5kZXIiLCJxdWVyeVNlbGVjdG9yIiwicXVvdGF0aW9uIiwibGF5b3V0IiwiYmFja0J0biIsIm1haW4iLCJyZW5kZXJEcm9wZG93biIsInF1b3RhdGlvbkRyb3Bkb3duIiwibGF5b3V0RHJvcGR3b24iLCJyZW5kZXJDcm9zcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjbGFzc0xpc3QiLCJmb3JFYWNoIiwiaXRlbSIsImNvbnRhaW5zIiwic2Nyb2xsQmFyRGVsYXkiLCJwcm9jZXNzIiwibW9kdWxlIiwiZXhwb3J0cyIsImNhY2hlZFNldFRpbWVvdXQiLCJjYWNoZWRDbGVhclRpbWVvdXQiLCJkZWZhdWx0U2V0VGltb3V0IiwiRXJyb3IiLCJkZWZhdWx0Q2xlYXJUaW1lb3V0IiwicnVuVGltZW91dCIsImZ1biIsImNhbGwiLCJydW5DbGVhclRpbWVvdXQiLCJtYXJrZXIiLCJxdWV1ZSIsImRyYWluaW5nIiwiY3VycmVudFF1ZXVlIiwicXVldWVJbmRleCIsImNsZWFuVXBOZXh0VGljayIsImNvbmNhdCIsImRyYWluUXVldWUiLCJ0aW1lb3V0IiwibGVuIiwicnVuIiwibmV4dFRpY2siLCJBcnJheSIsImFyZ3VtZW50cyIsInB1c2giLCJJdGVtIiwiYXJyYXkiLCJwcm90b3R5cGUiLCJhcHBseSIsInRpdGxlIiwiYnJvd3NlciIsImVudiIsImFyZ3YiLCJ2ZXJzaW9uIiwidmVyc2lvbnMiLCJub29wIiwiYWRkTGlzdGVuZXIiLCJvbmNlIiwicmVtb3ZlTGlzdGVuZXIiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwicHJlcGVuZExpc3RlbmVyIiwicHJlcGVuZE9uY2VMaXN0ZW5lciIsImxpc3RlbmVycyIsIm5hbWUiLCJiaW5kaW5nIiwiY3dkIiwiY2hkaXIiLCJkaXIiLCJ1bWFzayIsImdsb2JhbCIsInVuZGVmaW5lZCIsIm5leHRIYW5kbGUiLCJ0YXNrc0J5SGFuZGxlIiwiY3VycmVudGx5UnVubmluZ0FUYXNrIiwiZG9jIiwicmVnaXN0ZXJJbW1lZGlhdGUiLCJjYWxsYmFjayIsIkZ1bmN0aW9uIiwidGFzayIsImNsZWFySW1tZWRpYXRlIiwiaGFuZGxlIiwicnVuSWZQcmVzZW50IiwiaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24iLCJjYW5Vc2VQb3N0TWVzc2FnZSIsInBvc3RNZXNzYWdlIiwiaW1wb3J0U2NyaXB0cyIsInBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMiLCJvbGRPbk1lc3NhZ2UiLCJvbm1lc3NhZ2UiLCJpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbiIsIm1lc3NhZ2VQcmVmaXgiLCJvbkdsb2JhbE1lc3NhZ2UiLCJzb3VyY2UiLCJzbGljZSIsImF0dGFjaEV2ZW50IiwiaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24iLCJjaGFubmVsIiwiTWVzc2FnZUNoYW5uZWwiLCJwb3J0MSIsInBvcnQyIiwiaW5zdGFsbFJlYWR5U3RhdGVDaGFuZ2VJbXBsZW1lbnRhdGlvbiIsImRvY3VtZW50RWxlbWVudCIsInNjcmlwdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uIiwiYXR0YWNoVG8iLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsInRvU3RyaW5nIiwic2VsZiIsInNjb3BlIiwiVGltZW91dCIsImNsb3NlIiwiaWQiLCJjbGVhckZuIiwiX2lkIiwiX2NsZWFyRm4iLCJ1bnJlZiIsInJlZiIsImVucm9sbCIsIm1zZWNzIiwiX2lkbGVUaW1lb3V0SWQiLCJfaWRsZVRpbWVvdXQiLCJ1bmVucm9sbCIsIl91bnJlZkFjdGl2ZSIsIm9uVGltZW91dCIsIl9vblRpbWVvdXQiLCJyZXF1aXJlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQTs7Ozs7QUFJRyxDQUFDLFVBQVNBLENB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QVQsRUFDRWxILElBQUksQ0FBQ2tILFVBQUw7QUFDSCxLQUgrQixFQUc3Qk4sS0FINkIsQ0FBaEM7QUFJRDtBQUNGLENBVkQsQyxDQVlBOzs7QUFDQU8sbUJBQU8sQ0FBQyxpRUFBRCxDQUFQLEMsQ0FDQTtBQUNBO0FBQ0E7OztBQUNBOUcsT0FBTyxDQUFDNUcsWUFBUixHQUF3QixPQUFPd00sSUFBUCxLQUFnQixXQUFoQixJQUErQkEsSUFBSSxDQUFDeE0sWUFBckMsSUFDQyxPQUFPOEosTUFBUCxLQUFrQixXQUFsQixJQUFpQ0EsTUFBTSxDQUFDOUosWUFEekMsSUFFQyxRQUFRLEtBQUtBLFlBRnJDO0FBR0E0RyxPQUFPLENBQUM0RCxjQUFSLEdBQTBCLE9BQU9nQyxJQUFQLEtBQWdCLFdBQWhCLElBQStCQSxJQUFJLENBQUNoQyxjQUFyQyxJQUNDLE9BQU9WLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE1BQU0sQ0FBQ1UsY0FEekMsSUFFQyxRQUFRLEtBQUtBLGNBRnZDLEM7Ozs7Ozs7Ozs7OztBQzVEQSxJQUFJcEssQ0FBSixDLENBRUE7O0FBQ0FBLENBQUMsR0FBSSxZQUFXO0FBQ2YsU0FBTyxJQUFQO0FBQ0EsQ0FGRyxFQUFKOztBQUlBLElBQUk7QUFDSDtBQUNBQSxHQUFDLEdBQUdBLENBQUMsSUFBSSxJQUFJa0ssUUFBSixDQUFhLGFBQWIsR0FBVDtBQUNBLENBSEQsQ0FHRSxPQUFPalYsQ0FBUCxFQUFVO0FBQ1g7QUFDQSxNQUFJLE9BQU9hLE1BQVAsS0FBa0IsUUFBdEIsRUFBZ0NrSyxDQUFDLEdBQUdsSyxNQUFKO0FBQ2hDLEMsQ0FFRDtBQUNBO0FBQ0E7OztBQUVBeVEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCeEcsQ0FBakIsQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9hc3NldHMvanMvbWFpbi5qc1wiKTtcbiIsIi8qXHJcbiAqIGpRdWVyeSBGbGV4U2xpZGVyIHYyLjcuMlxyXG4gKiBDb3B5cmlnaHQgMjAxMiBXb29UaGVtZXNcclxuICogQ29udHJpYnV0aW5nIEF1dGhvcjogVHlsZXIgU21pdGhcclxuICovIWZ1bmN0aW9uKCQpe3ZhciBlPSEwOyQuZmxleHNsaWRlcj1mdW5jdGlvbih0LGEpe3ZhciBuPSQodCk7dm9pZCAwPT09YS5ydGwmJlwicnRsXCI9PSQoXCJodG1sXCIpLmF0dHIoXCJkaXJcIikmJihhLnJ0bD0hMCksbi52YXJzPSQuZXh0ZW5kKHt9LCQuZmxleHNsaWRlci5kZWZhdWx0cyxhKTt2YXIgaT1uLnZhcnMubmFtZXNwYWNlLHI9d2luZG93Lm5hdmlnYXRvciYmd2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkJiZ3aW5kb3cuTVNHZXN0dXJlLHM9KFwib250b3VjaHN0YXJ0XCJpbiB3aW5kb3d8fHJ8fHdpbmRvdy5Eb2N1bWVudFRvdWNoJiZkb2N1bWVudCBpbnN0YW5jZW9mIERvY3VtZW50VG91Y2gpJiZuLnZhcnMudG91Y2gsbz1cImNsaWNrIHRvdWNoZW5kIE1TUG9pbnRlclVwIGtleXVwXCIsbD1cIlwiLGMsZD1cInZlcnRpY2FsXCI9PT1uLnZhcnMuZGlyZWN0aW9uLHU9bi52YXJzLnJldmVyc2Usdj1uLnZhcnMuaXRlbVdpZHRoPjAscD1cImZhZGVcIj09PW4udmFycy5hbmltYXRpb24sbT1cIlwiIT09bi52YXJzLmFzTmF2Rm9yLGY9e307JC5kYXRhKHQsXCJmbGV4c2xpZGVyXCIsbiksZj17aW5pdDpmdW5jdGlvbigpe24uYW5pbWF0aW5nPSExLG4uY3VycmVudFNsaWRlPXBhcnNlSW50KG4udmFycy5zdGFydEF0P24udmFycy5zdGFydEF0OjAsMTApLGlzTmFOKG4uY3VycmVudFNsaWRlKSYmKG4uY3VycmVudFNsaWRlPTApLG4uYW5pbWF0aW5nVG89bi5jdXJyZW50U2xpZGUsbi5hdEVuZD0wPT09bi5jdXJyZW50U2xpZGV8fG4uY3VycmVudFNsaWRlPT09bi5sYXN0LG4uY29udGFpbmVyU2VsZWN0b3I9bi52YXJzLnNlbGVjdG9yLnN1YnN0cigwLG4udmFycy5zZWxlY3Rvci5zZWFyY2goXCIgXCIpKSxuLnNsaWRlcz0kKG4udmFycy5zZWxlY3RvcixuKSxuLmNvbnRhaW5lcj0kKG4uY29udGFpbmVyU2VsZWN0b3Isbiksbi5jb3VudD1uLnNsaWRlcy5sZW5ndGgsbi5zeW5jRXhpc3RzPSQobi52YXJzLnN5bmMpLmxlbmd0aD4wLFwic2xpZGVcIj09PW4udmFycy5hbmltYXRpb24mJihuLnZhcnMuYW5pbWF0aW9uPVwic3dpbmdcIiksbi5wcm9wPWQ/XCJ0b3BcIjpuLnZhcnMucnRsP1wibWFyZ2luUmlnaHRcIjpcIm1hcmdpbkxlZnRcIixuLmFyZ3M9e30sbi5tYW51YWxQYXVzZT0hMSxuLnN0b3BwZWQ9ITEsbi5zdGFydGVkPSExLG4uc3RhcnRUaW1lb3V0PW51bGwsbi50cmFuc2l0aW9ucz0hbi52YXJzLnZpZGVvJiYhcCYmbi52YXJzLnVzZUNTUyYmZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLHQ9W1wicGVyc3BlY3RpdmVQcm9wZXJ0eVwiLFwiV2Via2l0UGVyc3BlY3RpdmVcIixcIk1velBlcnNwZWN0aXZlXCIsXCJPUGVyc3BlY3RpdmVcIixcIm1zUGVyc3BlY3RpdmVcIl07Zm9yKHZhciBhIGluIHQpaWYodm9pZCAwIT09ZS5zdHlsZVt0W2FdXSlyZXR1cm4gbi5wZng9dFthXS5yZXBsYWNlKFwiUGVyc3BlY3RpdmVcIixcIlwiKS50b0xvd2VyQ2FzZSgpLG4ucHJvcD1cIi1cIituLnBmeCtcIi10cmFuc2Zvcm1cIiwhMDtyZXR1cm4hMX0oKSxuLmlzRmlyZWZveD1uYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihcImZpcmVmb3hcIik+LTEsbi5lbnN1cmVBbmltYXRpb25FbmQ9XCJcIixcIlwiIT09bi52YXJzLmNvbnRyb2xzQ29udGFpbmVyJiYobi5jb250cm9sc0NvbnRhaW5lcj0kKG4udmFycy5jb250cm9sc0NvbnRhaW5lcikubGVuZ3RoPjAmJiQobi52YXJzLmNvbnRyb2xzQ29udGFpbmVyKSksXCJcIiE9PW4udmFycy5tYW51YWxDb250cm9scyYmKG4ubWFudWFsQ29udHJvbHM9JChuLnZhcnMubWFudWFsQ29udHJvbHMpLmxlbmd0aD4wJiYkKG4udmFycy5tYW51YWxDb250cm9scykpLFwiXCIhPT1uLnZhcnMuY3VzdG9tRGlyZWN0aW9uTmF2JiYobi5jdXN0b21EaXJlY3Rpb25OYXY9Mj09PSQobi52YXJzLmN1c3RvbURpcmVjdGlvbk5hdikubGVuZ3RoJiYkKG4udmFycy5jdXN0b21EaXJlY3Rpb25OYXYpKSxuLnZhcnMucmFuZG9taXplJiYobi5zbGlkZXMuc29ydChmdW5jdGlvbigpe3JldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpLS41fSksbi5jb250YWluZXIuZW1wdHkoKS5hcHBlbmQobi5zbGlkZXMpKSxuLmRvTWF0aCgpLG4uc2V0dXAoXCJpbml0XCIpLG4udmFycy5jb250cm9sTmF2JiZmLmNvbnRyb2xOYXYuc2V0dXAoKSxuLnZhcnMuZGlyZWN0aW9uTmF2JiZmLmRpcmVjdGlvbk5hdi5zZXR1cCgpLG4udmFycy5rZXlib2FyZCYmKDE9PT0kKG4uY29udGFpbmVyU2VsZWN0b3IpLmxlbmd0aHx8bi52YXJzLm11bHRpcGxlS2V5Ym9hcmQpJiYkKGRvY3VtZW50KS5iaW5kKFwia2V5dXBcIixmdW5jdGlvbihlKXt2YXIgdD1lLmtleUNvZGU7aWYoIW4uYW5pbWF0aW5nJiYoMzk9PT10fHwzNz09PXQpKXt2YXIgYT1uLnZhcnMucnRsPzM3PT09dD9uLmdldFRhcmdldChcIm5leHRcIik6Mzk9PT10JiZuLmdldFRhcmdldChcInByZXZcIik6Mzk9PT10P24uZ2V0VGFyZ2V0KFwibmV4dFwiKTozNz09PXQmJm4uZ2V0VGFyZ2V0KFwicHJldlwiKTtuLmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24pfX0pLG4udmFycy5tb3VzZXdoZWVsJiZuLmJpbmQoXCJtb3VzZXdoZWVsXCIsZnVuY3Rpb24oZSx0LGEsaSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciByPXQ8MD9uLmdldFRhcmdldChcIm5leHRcIik6bi5nZXRUYXJnZXQoXCJwcmV2XCIpO24uZmxleEFuaW1hdGUocixuLnZhcnMucGF1c2VPbkFjdGlvbil9KSxuLnZhcnMucGF1c2VQbGF5JiZmLnBhdXNlUGxheS5zZXR1cCgpLG4udmFycy5zbGlkZXNob3cmJm4udmFycy5wYXVzZUludmlzaWJsZSYmZi5wYXVzZUludmlzaWJsZS5pbml0KCksbi52YXJzLnNsaWRlc2hvdyYmKG4udmFycy5wYXVzZU9uSG92ZXImJm4uaG92ZXIoZnVuY3Rpb24oKXtuLm1hbnVhbFBsYXl8fG4ubWFudWFsUGF1c2V8fG4ucGF1c2UoKX0sZnVuY3Rpb24oKXtuLm1hbnVhbFBhdXNlfHxuLm1hbnVhbFBsYXl8fG4uc3RvcHBlZHx8bi5wbGF5KCl9KSxuLnZhcnMucGF1c2VJbnZpc2libGUmJmYucGF1c2VJbnZpc2libGUuaXNIaWRkZW4oKXx8KG4udmFycy5pbml0RGVsYXk+MD9uLnN0YXJ0VGltZW91dD1zZXRUaW1lb3V0KG4ucGxheSxuLnZhcnMuaW5pdERlbGF5KTpuLnBsYXkoKSkpLG0mJmYuYXNOYXYuc2V0dXAoKSxzJiZuLnZhcnMudG91Y2gmJmYudG91Y2goKSwoIXB8fHAmJm4udmFycy5zbW9vdGhIZWlnaHQpJiYkKHdpbmRvdykuYmluZChcInJlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZSBmb2N1c1wiLGYucmVzaXplKSxuLmZpbmQoXCJpbWdcIikuYXR0cihcImRyYWdnYWJsZVwiLFwiZmFsc2VcIiksc2V0VGltZW91dChmdW5jdGlvbigpe24udmFycy5zdGFydChuKX0sMjAwKX0sYXNOYXY6e3NldHVwOmZ1bmN0aW9uKCl7bi5hc05hdj0hMCxuLmFuaW1hdGluZ1RvPU1hdGguZmxvb3Iobi5jdXJyZW50U2xpZGUvbi5tb3ZlKSxuLmN1cnJlbnRJdGVtPW4uY3VycmVudFNsaWRlLG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEobi5jdXJyZW50SXRlbSkuYWRkQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKSxyPyh0Ll9zbGlkZXI9bixuLnNsaWRlcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9dGhpcztlLl9nZXN0dXJlPW5ldyBNU0dlc3R1cmUsZS5fZ2VzdHVyZS50YXJnZXQ9ZSxlLmFkZEV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJEb3duXCIsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuY3VycmVudFRhcmdldC5fZ2VzdHVyZSYmZS5jdXJyZW50VGFyZ2V0Ll9nZXN0dXJlLmFkZFBvaW50ZXIoZS5wb2ludGVySWQpfSwhMSksZS5hZGRFdmVudExpc3RlbmVyKFwiTVNHZXN0dXJlVGFwXCIsZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciB0PSQodGhpcyksYT10LmluZGV4KCk7JChuLnZhcnMuYXNOYXZGb3IpLmRhdGEoXCJmbGV4c2xpZGVyXCIpLmFuaW1hdGluZ3x8dC5oYXNDbGFzcyhcImFjdGl2ZVwiKXx8KG4uZGlyZWN0aW9uPW4uY3VycmVudEl0ZW08YT9cIm5leHRcIjpcInByZXZcIixuLmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24sITEsITAsITApKX0pfSkpOm4uc2xpZGVzLm9uKG8sZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciB0PSQodGhpcyksYT10LmluZGV4KCkscjtyPW4udmFycy5ydGw/LTEqKHQub2Zmc2V0KCkucmlnaHQtJChuKS5zY3JvbGxMZWZ0KCkpOnQub2Zmc2V0KCkubGVmdC0kKG4pLnNjcm9sbExlZnQoKSxyPD0wJiZ0Lmhhc0NsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIik/bi5mbGV4QW5pbWF0ZShuLmdldFRhcmdldChcInByZXZcIiksITApOiQobi52YXJzLmFzTmF2Rm9yKS5kYXRhKFwiZmxleHNsaWRlclwiKS5hbmltYXRpbmd8fHQuaGFzQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKXx8KG4uZGlyZWN0aW9uPW4uY3VycmVudEl0ZW08YT9cIm5leHRcIjpcInByZXZcIixuLmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24sITEsITAsITApKX0pfX0sY29udHJvbE5hdjp7c2V0dXA6ZnVuY3Rpb24oKXtuLm1hbnVhbENvbnRyb2xzP2YuY29udHJvbE5hdi5zZXR1cE1hbnVhbCgpOmYuY29udHJvbE5hdi5zZXR1cFBhZ2luZygpfSxzZXR1cFBhZ2luZzpmdW5jdGlvbigpe3ZhciBlPVwidGh1bWJuYWlsc1wiPT09bi52YXJzLmNvbnRyb2xOYXY/XCJjb250cm9sLXRodW1ic1wiOlwiY29udHJvbC1wYWdpbmdcIix0PTEsYSxyO2lmKG4uY29udHJvbE5hdlNjYWZmb2xkPSQoJzxvbCBjbGFzcz1cIicraStcImNvbnRyb2wtbmF2IFwiK2krZSsnXCI+PC9vbD4nKSxuLnBhZ2luZ0NvdW50PjEpZm9yKHZhciBzPTA7czxuLnBhZ2luZ0NvdW50O3MrKyl7aWYocj1uLnNsaWRlcy5lcShzKSx2b2lkIDA9PT1yLmF0dHIoXCJkYXRhLXRodW1iLWFsdFwiKSYmci5hdHRyKFwiZGF0YS10aHVtYi1hbHRcIixcIlwiKSxhPSQoXCI8YT48L2E+XCIpLmF0dHIoXCJocmVmXCIsXCIjXCIpLnRleHQodCksXCJ0aHVtYm5haWxzXCI9PT1uLnZhcnMuY29udHJvbE5hdiYmKGE9JChcIjxpbWcvPlwiKS5hdHRyKFwic3JjXCIsci5hdHRyKFwiZGF0YS10aHVtYlwiKSkpLFwiXCIhPT1yLmF0dHIoXCJkYXRhLXRodW1iLWFsdFwiKSYmYS5hdHRyKFwiYWx0XCIsci5hdHRyKFwiZGF0YS10aHVtYi1hbHRcIikpLFwidGh1bWJuYWlsc1wiPT09bi52YXJzLmNvbnRyb2xOYXYmJiEwPT09bi52YXJzLnRodW1iQ2FwdGlvbnMpe3ZhciBjPXIuYXR0cihcImRhdGEtdGh1bWJjYXB0aW9uXCIpO2lmKFwiXCIhPT1jJiZ2b2lkIDAhPT1jKXt2YXIgZD0kKFwiPHNwYW4+PC9zcGFuPlwiKS5hZGRDbGFzcyhpK1wiY2FwdGlvblwiKS50ZXh0KGMpO2EuYXBwZW5kKGQpfX12YXIgdT0kKFwiPGxpPlwiKTthLmFwcGVuZFRvKHUpLHUuYXBwZW5kKFwiPC9saT5cIiksbi5jb250cm9sTmF2U2NhZmZvbGQuYXBwZW5kKHUpLHQrK31uLmNvbnRyb2xzQ29udGFpbmVyPyQobi5jb250cm9sc0NvbnRhaW5lcikuYXBwZW5kKG4uY29udHJvbE5hdlNjYWZmb2xkKTpuLmFwcGVuZChuLmNvbnRyb2xOYXZTY2FmZm9sZCksZi5jb250cm9sTmF2LnNldCgpLGYuY29udHJvbE5hdi5hY3RpdmUoKSxuLmNvbnRyb2xOYXZTY2FmZm9sZC5kZWxlZ2F0ZShcImEsIGltZ1wiLG8sZnVuY3Rpb24oZSl7aWYoZS5wcmV2ZW50RGVmYXVsdCgpLFwiXCI9PT1sfHxsPT09ZS50eXBlKXt2YXIgdD0kKHRoaXMpLGE9bi5jb250cm9sTmF2LmluZGV4KHQpO3QuaGFzQ2xhc3MoaStcImFjdGl2ZVwiKXx8KG4uZGlyZWN0aW9uPWE+bi5jdXJyZW50U2xpZGU/XCJuZXh0XCI6XCJwcmV2XCIsbi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uKSl9XCJcIj09PWwmJihsPWUudHlwZSksZi5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCl9KX0sc2V0dXBNYW51YWw6ZnVuY3Rpb24oKXtuLmNvbnRyb2xOYXY9bi5tYW51YWxDb250cm9scyxmLmNvbnRyb2xOYXYuYWN0aXZlKCksbi5jb250cm9sTmF2LmJpbmQobyxmdW5jdGlvbihlKXtpZihlLnByZXZlbnREZWZhdWx0KCksXCJcIj09PWx8fGw9PT1lLnR5cGUpe3ZhciB0PSQodGhpcyksYT1uLmNvbnRyb2xOYXYuaW5kZXgodCk7dC5oYXNDbGFzcyhpK1wiYWN0aXZlXCIpfHwoYT5uLmN1cnJlbnRTbGlkZT9uLmRpcmVjdGlvbj1cIm5leHRcIjpuLmRpcmVjdGlvbj1cInByZXZcIixuLmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24pKX1cIlwiPT09bCYmKGw9ZS50eXBlKSxmLnNldFRvQ2xlYXJXYXRjaGVkRXZlbnQoKX0pfSxzZXQ6ZnVuY3Rpb24oKXt2YXIgZT1cInRodW1ibmFpbHNcIj09PW4udmFycy5jb250cm9sTmF2P1wiaW1nXCI6XCJhXCI7bi5jb250cm9sTmF2PSQoXCIuXCIraStcImNvbnRyb2wtbmF2IGxpIFwiK2Usbi5jb250cm9sc0NvbnRhaW5lcj9uLmNvbnRyb2xzQ29udGFpbmVyOm4pfSxhY3RpdmU6ZnVuY3Rpb24oKXtuLmNvbnRyb2xOYXYucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZVwiKS5lcShuLmFuaW1hdGluZ1RvKS5hZGRDbGFzcyhpK1wiYWN0aXZlXCIpfSx1cGRhdGU6ZnVuY3Rpb24oZSx0KXtuLnBhZ2luZ0NvdW50PjEmJlwiYWRkXCI9PT1lP24uY29udHJvbE5hdlNjYWZmb2xkLmFwcGVuZCgkKCc8bGk+PGEgaHJlZj1cIiNcIj4nK24uY291bnQrXCI8L2E+PC9saT5cIikpOjE9PT1uLnBhZ2luZ0NvdW50P24uY29udHJvbE5hdlNjYWZmb2xkLmZpbmQoXCJsaVwiKS5yZW1vdmUoKTpuLmNvbnRyb2xOYXYuZXEodCkuY2xvc2VzdChcImxpXCIpLnJlbW92ZSgpLGYuY29udHJvbE5hdi5zZXQoKSxuLnBhZ2luZ0NvdW50PjEmJm4ucGFnaW5nQ291bnQhPT1uLmNvbnRyb2xOYXYubGVuZ3RoP24udXBkYXRlKHQsZSk6Zi5jb250cm9sTmF2LmFjdGl2ZSgpfX0sZGlyZWN0aW9uTmF2OntzZXR1cDpmdW5jdGlvbigpe3ZhciBlPSQoJzx1bCBjbGFzcz1cIicraSsnZGlyZWN0aW9uLW5hdlwiPjxsaSBjbGFzcz1cIicraSsnbmF2LXByZXZcIj48YSBjbGFzcz1cIicraSsncHJldlwiIGhyZWY9XCIjXCI+JytuLnZhcnMucHJldlRleHQrJzwvYT48L2xpPjxsaSBjbGFzcz1cIicraSsnbmF2LW5leHRcIj48YSBjbGFzcz1cIicraSsnbmV4dFwiIGhyZWY9XCIjXCI+JytuLnZhcnMubmV4dFRleHQrXCI8L2E+PC9saT48L3VsPlwiKTtuLmN1c3RvbURpcmVjdGlvbk5hdj9uLmRpcmVjdGlvbk5hdj1uLmN1c3RvbURpcmVjdGlvbk5hdjpuLmNvbnRyb2xzQ29udGFpbmVyPygkKG4uY29udHJvbHNDb250YWluZXIpLmFwcGVuZChlKSxuLmRpcmVjdGlvbk5hdj0kKFwiLlwiK2krXCJkaXJlY3Rpb24tbmF2IGxpIGFcIixuLmNvbnRyb2xzQ29udGFpbmVyKSk6KG4uYXBwZW5kKGUpLG4uZGlyZWN0aW9uTmF2PSQoXCIuXCIraStcImRpcmVjdGlvbi1uYXYgbGkgYVwiLG4pKSxmLmRpcmVjdGlvbk5hdi51cGRhdGUoKSxuLmRpcmVjdGlvbk5hdi5iaW5kKG8sZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpO3ZhciB0O1wiXCIhPT1sJiZsIT09ZS50eXBlfHwodD0kKHRoaXMpLmhhc0NsYXNzKGkrXCJuZXh0XCIpP24uZ2V0VGFyZ2V0KFwibmV4dFwiKTpuLmdldFRhcmdldChcInByZXZcIiksbi5mbGV4QW5pbWF0ZSh0LG4udmFycy5wYXVzZU9uQWN0aW9uKSksXCJcIj09PWwmJihsPWUudHlwZSksZi5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCl9KX0sdXBkYXRlOmZ1bmN0aW9uKCl7dmFyIGU9aStcImRpc2FibGVkXCI7MT09PW4ucGFnaW5nQ291bnQ/bi5kaXJlY3Rpb25OYXYuYWRkQ2xhc3MoZSkuYXR0cihcInRhYmluZGV4XCIsXCItMVwiKTpuLnZhcnMuYW5pbWF0aW9uTG9vcD9uLmRpcmVjdGlvbk5hdi5yZW1vdmVDbGFzcyhlKS5yZW1vdmVBdHRyKFwidGFiaW5kZXhcIik6MD09PW4uYW5pbWF0aW5nVG8/bi5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZSkuZmlsdGVyKFwiLlwiK2krXCJwcmV2XCIpLmFkZENsYXNzKGUpLmF0dHIoXCJ0YWJpbmRleFwiLFwiLTFcIik6bi5hbmltYXRpbmdUbz09PW4ubGFzdD9uLmRpcmVjdGlvbk5hdi5yZW1vdmVDbGFzcyhlKS5maWx0ZXIoXCIuXCIraStcIm5leHRcIikuYWRkQ2xhc3MoZSkuYXR0cihcInRhYmluZGV4XCIsXCItMVwiKTpuLmRpcmVjdGlvbk5hdi5yZW1vdmVDbGFzcyhlKS5yZW1vdmVBdHRyKFwidGFiaW5kZXhcIil9fSxwYXVzZVBsYXk6e3NldHVwOmZ1bmN0aW9uKCl7dmFyIGU9JCgnPGRpdiBjbGFzcz1cIicraSsncGF1c2VwbGF5XCI+PGEgaHJlZj1cIiNcIj48L2E+PC9kaXY+Jyk7bi5jb250cm9sc0NvbnRhaW5lcj8obi5jb250cm9sc0NvbnRhaW5lci5hcHBlbmQoZSksbi5wYXVzZVBsYXk9JChcIi5cIitpK1wicGF1c2VwbGF5IGFcIixuLmNvbnRyb2xzQ29udGFpbmVyKSk6KG4uYXBwZW5kKGUpLG4ucGF1c2VQbGF5PSQoXCIuXCIraStcInBhdXNlcGxheSBhXCIsbikpLGYucGF1c2VQbGF5LnVwZGF0ZShuLnZhcnMuc2xpZGVzaG93P2krXCJwYXVzZVwiOmkrXCJwbGF5XCIpLG4ucGF1c2VQbGF5LmJpbmQobyxmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksXCJcIiE9PWwmJmwhPT1lLnR5cGV8fCgkKHRoaXMpLmhhc0NsYXNzKGkrXCJwYXVzZVwiKT8obi5tYW51YWxQYXVzZT0hMCxuLm1hbnVhbFBsYXk9ITEsbi5wYXVzZSgpKToobi5tYW51YWxQYXVzZT0hMSxuLm1hbnVhbFBsYXk9ITAsbi5wbGF5KCkpKSxcIlwiPT09bCYmKGw9ZS50eXBlKSxmLnNldFRvQ2xlYXJXYXRjaGVkRXZlbnQoKX0pfSx1cGRhdGU6ZnVuY3Rpb24oZSl7XCJwbGF5XCI9PT1lP24ucGF1c2VQbGF5LnJlbW92ZUNsYXNzKGkrXCJwYXVzZVwiKS5hZGRDbGFzcyhpK1wicGxheVwiKS5odG1sKG4udmFycy5wbGF5VGV4dCk6bi5wYXVzZVBsYXkucmVtb3ZlQ2xhc3MoaStcInBsYXlcIikuYWRkQ2xhc3MoaStcInBhdXNlXCIpLmh0bWwobi52YXJzLnBhdXNlVGV4dCl9fSx0b3VjaDpmdW5jdGlvbigpe2Z1bmN0aW9uIGUoZSl7ZS5zdG9wUHJvcGFnYXRpb24oKSxuLmFuaW1hdGluZz9lLnByZXZlbnREZWZhdWx0KCk6KG4ucGF1c2UoKSx0Ll9nZXN0dXJlLmFkZFBvaW50ZXIoZS5wb2ludGVySWQpLHc9MCxjPWQ/bi5oOm4udyxmPU51bWJlcihuZXcgRGF0ZSksbD12JiZ1JiZuLmFuaW1hdGluZ1RvPT09bi5sYXN0PzA6diYmdT9uLmxpbWl0LShuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5hbmltYXRpbmdUbzp2JiZuLmN1cnJlbnRTbGlkZT09PW4ubGFzdD9uLmxpbWl0OnY/KG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmN1cnJlbnRTbGlkZTp1PyhuLmxhc3Qtbi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqYzoobi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCkqYyl9ZnVuY3Rpb24gYShlKXtlLnN0b3BQcm9wYWdhdGlvbigpO3ZhciBhPWUudGFyZ2V0Ll9zbGlkZXI7aWYoYSl7dmFyIG49LWUudHJhbnNsYXRpb25YLGk9LWUudHJhbnNsYXRpb25ZO2lmKHcrPWQ/aTpuLG09KGEudmFycy5ydGw/LTE6MSkqdyx4PWQ/TWF0aC5hYnModyk8TWF0aC5hYnMoLW4pOk1hdGguYWJzKHcpPE1hdGguYWJzKC1pKSxlLmRldGFpbD09PWUuTVNHRVNUVVJFX0ZMQUdfSU5FUlRJQSlyZXR1cm4gdm9pZCBzZXRJbW1lZGlhdGUoZnVuY3Rpb24oKXt0Ll9nZXN0dXJlLnN0b3AoKX0pOygheHx8TnVtYmVyKG5ldyBEYXRlKS1mPjUwMCkmJihlLnByZXZlbnREZWZhdWx0KCksIXAmJmEudHJhbnNpdGlvbnMmJihhLnZhcnMuYW5pbWF0aW9uTG9vcHx8KG09dy8oMD09PWEuY3VycmVudFNsaWRlJiZ3PDB8fGEuY3VycmVudFNsaWRlPT09YS5sYXN0JiZ3PjA/TWF0aC5hYnModykvYysyOjEpKSxhLnNldFByb3BzKGwrbSxcInNldFRvdWNoXCIpKSl9fWZ1bmN0aW9uIGkoZSl7ZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgdD1lLnRhcmdldC5fc2xpZGVyO2lmKHQpe2lmKHQuYW5pbWF0aW5nVG89PT10LmN1cnJlbnRTbGlkZSYmIXgmJm51bGwhPT1tKXt2YXIgYT11Py1tOm0sbj1hPjA/dC5nZXRUYXJnZXQoXCJuZXh0XCIpOnQuZ2V0VGFyZ2V0KFwicHJldlwiKTt0LmNhbkFkdmFuY2UobikmJihOdW1iZXIobmV3IERhdGUpLWY8NTUwJiZNYXRoLmFicyhhKT41MHx8TWF0aC5hYnMoYSk+Yy8yKT90LmZsZXhBbmltYXRlKG4sdC52YXJzLnBhdXNlT25BY3Rpb24pOnB8fHQuZmxleEFuaW1hdGUodC5jdXJyZW50U2xpZGUsdC52YXJzLnBhdXNlT25BY3Rpb24sITApfXM9bnVsbCxvPW51bGwsbT1udWxsLGw9bnVsbCx3PTB9fXZhciBzLG8sbCxjLG0sZixnLGgsUyx4PSExLHk9MCxiPTAsdz0wO3I/KHQuc3R5bGUubXNUb3VjaEFjdGlvbj1cIm5vbmVcIix0Ll9nZXN0dXJlPW5ldyBNU0dlc3R1cmUsdC5fZ2VzdHVyZS50YXJnZXQ9dCx0LmFkZEV2ZW50TGlzdGVuZXIoXCJNU1BvaW50ZXJEb3duXCIsZSwhMSksdC5fc2xpZGVyPW4sdC5hZGRFdmVudExpc3RlbmVyKFwiTVNHZXN0dXJlQ2hhbmdlXCIsYSwhMSksdC5hZGRFdmVudExpc3RlbmVyKFwiTVNHZXN0dXJlRW5kXCIsaSwhMSkpOihnPWZ1bmN0aW9uKGUpe24uYW5pbWF0aW5nP2UucHJldmVudERlZmF1bHQoKTood2luZG93Lm5hdmlnYXRvci5tc1BvaW50ZXJFbmFibGVkfHwxPT09ZS50b3VjaGVzLmxlbmd0aCkmJihuLnBhdXNlKCksYz1kP24uaDpuLncsZj1OdW1iZXIobmV3IERhdGUpLHk9ZS50b3VjaGVzWzBdLnBhZ2VYLGI9ZS50b3VjaGVzWzBdLnBhZ2VZLGw9diYmdSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdD8wOnYmJnU/bi5saW1pdC0obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uYW5pbWF0aW5nVG86diYmbi5jdXJyZW50U2xpZGU9PT1uLmxhc3Q/bi5saW1pdDp2PyhuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5jdXJyZW50U2xpZGU6dT8obi5sYXN0LW4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmM6KG4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmMscz1kP2I6eSxvPWQ/eTpiLHQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGgsITEpLHQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsUywhMSkpfSxoPWZ1bmN0aW9uKGUpe3k9ZS50b3VjaGVzWzBdLnBhZ2VYLGI9ZS50b3VjaGVzWzBdLnBhZ2VZLG09ZD9zLWI6KG4udmFycy5ydGw/LTE6MSkqKHMteSkseD1kP01hdGguYWJzKG0pPE1hdGguYWJzKHktbyk6TWF0aC5hYnMobSk8TWF0aC5hYnMoYi1vKTt2YXIgdD01MDA7KCF4fHxOdW1iZXIobmV3IERhdGUpLWY+NTAwKSYmKGUucHJldmVudERlZmF1bHQoKSwhcCYmbi50cmFuc2l0aW9ucyYmKG4udmFycy5hbmltYXRpb25Mb29wfHwobS89MD09PW4uY3VycmVudFNsaWRlJiZtPDB8fG4uY3VycmVudFNsaWRlPT09bi5sYXN0JiZtPjA/TWF0aC5hYnMobSkvYysyOjEpLG4uc2V0UHJvcHMobCttLFwic2V0VG91Y2hcIikpKX0sUz1mdW5jdGlvbihlKXtpZih0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixoLCExKSxuLmFuaW1hdGluZ1RvPT09bi5jdXJyZW50U2xpZGUmJiF4JiZudWxsIT09bSl7dmFyIGE9dT8tbTptLGk9YT4wP24uZ2V0VGFyZ2V0KFwibmV4dFwiKTpuLmdldFRhcmdldChcInByZXZcIik7bi5jYW5BZHZhbmNlKGkpJiYoTnVtYmVyKG5ldyBEYXRlKS1mPDU1MCYmTWF0aC5hYnMoYSk+NTB8fE1hdGguYWJzKGEpPmMvMik/bi5mbGV4QW5pbWF0ZShpLG4udmFycy5wYXVzZU9uQWN0aW9uKTpwfHxuLmZsZXhBbmltYXRlKG4uY3VycmVudFNsaWRlLG4udmFycy5wYXVzZU9uQWN0aW9uLCEwKX10LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLFMsITEpLHM9bnVsbCxvPW51bGwsbT1udWxsLGw9bnVsbH0sdC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLGcsITEpKX0scmVzaXplOmZ1bmN0aW9uKCl7IW4uYW5pbWF0aW5nJiZuLmlzKFwiOnZpc2libGVcIikmJih2fHxuLmRvTWF0aCgpLHA/Zi5zbW9vdGhIZWlnaHQoKTp2PyhuLnNsaWRlcy53aWR0aChuLmNvbXB1dGVkVyksbi51cGRhdGUobi5wYWdpbmdDb3VudCksbi5zZXRQcm9wcygpKTpkPyhuLnZpZXdwb3J0LmhlaWdodChuLmgpLG4uc2V0UHJvcHMobi5oLFwic2V0VG90YWxcIikpOihuLnZhcnMuc21vb3RoSGVpZ2h0JiZmLnNtb290aEhlaWdodCgpLG4ubmV3U2xpZGVzLndpZHRoKG4uY29tcHV0ZWRXKSxuLnNldFByb3BzKG4uY29tcHV0ZWRXLFwic2V0VG90YWxcIikpKX0sc21vb3RoSGVpZ2h0OmZ1bmN0aW9uKGUpe2lmKCFkfHxwKXt2YXIgdD1wP246bi52aWV3cG9ydDtlP3QuYW5pbWF0ZSh7aGVpZ2h0Om4uc2xpZGVzLmVxKG4uYW5pbWF0aW5nVG8pLmlubmVySGVpZ2h0KCl9LGUpOnQuaW5uZXJIZWlnaHQobi5zbGlkZXMuZXEobi5hbmltYXRpbmdUbykuaW5uZXJIZWlnaHQoKSl9fSxzeW5jOmZ1bmN0aW9uKGUpe3ZhciB0PSQobi52YXJzLnN5bmMpLmRhdGEoXCJmbGV4c2xpZGVyXCIpLGE9bi5hbmltYXRpbmdUbztzd2l0Y2goZSl7Y2FzZVwiYW5pbWF0ZVwiOnQuZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbiwhMSwhMCk7YnJlYWs7Y2FzZVwicGxheVwiOnQucGxheWluZ3x8dC5hc05hdnx8dC5wbGF5KCk7YnJlYWs7Y2FzZVwicGF1c2VcIjp0LnBhdXNlKCk7YnJlYWt9fSx1bmlxdWVJRDpmdW5jdGlvbihlKXtyZXR1cm4gZS5maWx0ZXIoXCJbaWRdXCIpLmFkZChlLmZpbmQoXCJbaWRdXCIpKS5lYWNoKGZ1bmN0aW9uKCl7dmFyIGU9JCh0aGlzKTtlLmF0dHIoXCJpZFwiLGUuYXR0cihcImlkXCIpK1wiX2Nsb25lXCIpfSksZX0scGF1c2VJbnZpc2libGU6e3Zpc1Byb3A6bnVsbCxpbml0OmZ1bmN0aW9uKCl7dmFyIGU9Zi5wYXVzZUludmlzaWJsZS5nZXRIaWRkZW5Qcm9wKCk7aWYoZSl7dmFyIHQ9ZS5yZXBsYWNlKC9bSHxoXWlkZGVuLyxcIlwiKStcInZpc2liaWxpdHljaGFuZ2VcIjtkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKHQsZnVuY3Rpb24oKXtmLnBhdXNlSW52aXNpYmxlLmlzSGlkZGVuKCk/bi5zdGFydFRpbWVvdXQ/Y2xlYXJUaW1lb3V0KG4uc3RhcnRUaW1lb3V0KTpuLnBhdXNlKCk6bi5zdGFydGVkP24ucGxheSgpOm4udmFycy5pbml0RGVsYXk+MD9zZXRUaW1lb3V0KG4ucGxheSxuLnZhcnMuaW5pdERlbGF5KTpuLnBsYXkoKX0pfX0saXNIaWRkZW46ZnVuY3Rpb24oKXt2YXIgZT1mLnBhdXNlSW52aXNpYmxlLmdldEhpZGRlblByb3AoKTtyZXR1cm4hIWUmJmRvY3VtZW50W2VdfSxnZXRIaWRkZW5Qcm9wOmZ1bmN0aW9uKCl7dmFyIGU9W1wid2Via2l0XCIsXCJtb3pcIixcIm1zXCIsXCJvXCJdO2lmKFwiaGlkZGVuXCJpbiBkb2N1bWVudClyZXR1cm5cImhpZGRlblwiO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKWlmKGVbdF0rXCJIaWRkZW5cImluIGRvY3VtZW50KXJldHVybiBlW3RdK1wiSGlkZGVuXCI7cmV0dXJuIG51bGx9fSxzZXRUb0NsZWFyV2F0Y2hlZEV2ZW50OmZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KGMpLGM9c2V0VGltZW91dChmdW5jdGlvbigpe2w9XCJcIn0sM2UzKX19LG4uZmxleEFuaW1hdGU9ZnVuY3Rpb24oZSx0LGEscixvKXtpZihuLnZhcnMuYW5pbWF0aW9uTG9vcHx8ZT09PW4uY3VycmVudFNsaWRlfHwobi5kaXJlY3Rpb249ZT5uLmN1cnJlbnRTbGlkZT9cIm5leHRcIjpcInByZXZcIiksbSYmMT09PW4ucGFnaW5nQ291bnQmJihuLmRpcmVjdGlvbj1uLmN1cnJlbnRJdGVtPGU/XCJuZXh0XCI6XCJwcmV2XCIpLCFuLmFuaW1hdGluZyYmKG4uY2FuQWR2YW5jZShlLG8pfHxhKSYmbi5pcyhcIjp2aXNpYmxlXCIpKXtpZihtJiZyKXt2YXIgbD0kKG4udmFycy5hc05hdkZvcikuZGF0YShcImZsZXhzbGlkZXJcIik7aWYobi5hdEVuZD0wPT09ZXx8ZT09PW4uY291bnQtMSxsLmZsZXhBbmltYXRlKGUsITAsITEsITAsbyksbi5kaXJlY3Rpb249bi5jdXJyZW50SXRlbTxlP1wibmV4dFwiOlwicHJldlwiLGwuZGlyZWN0aW9uPW4uZGlyZWN0aW9uLE1hdGguY2VpbCgoZSsxKS9uLnZpc2libGUpLTE9PT1uLmN1cnJlbnRTbGlkZXx8MD09PWUpcmV0dXJuIG4uY3VycmVudEl0ZW09ZSxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKGUpLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIiksITE7bi5jdXJyZW50SXRlbT1lLG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEoZSkuYWRkQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKSxlPU1hdGguZmxvb3IoZS9uLnZpc2libGUpfWlmKG4uYW5pbWF0aW5nPSEwLG4uYW5pbWF0aW5nVG89ZSx0JiZuLnBhdXNlKCksbi52YXJzLmJlZm9yZShuKSxuLnN5bmNFeGlzdHMmJiFvJiZmLnN5bmMoXCJhbmltYXRlXCIpLG4udmFycy5jb250cm9sTmF2JiZmLmNvbnRyb2xOYXYuYWN0aXZlKCksdnx8bi5zbGlkZXMucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKS5lcShlKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLG4uYXRFbmQ9MD09PWV8fGU9PT1uLmxhc3Qsbi52YXJzLmRpcmVjdGlvbk5hdiYmZi5kaXJlY3Rpb25OYXYudXBkYXRlKCksZT09PW4ubGFzdCYmKG4udmFycy5lbmQobiksbi52YXJzLmFuaW1hdGlvbkxvb3B8fG4ucGF1c2UoKSkscClzPyhuLnNsaWRlcy5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHtvcGFjaXR5OjAsekluZGV4OjF9KSxuLnNsaWRlcy5lcShlKS5jc3Moe29wYWNpdHk6MSx6SW5kZXg6Mn0pLG4ud3JhcHVwKGMpKToobi5zbGlkZXMuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7ekluZGV4OjF9KS5hbmltYXRlKHtvcGFjaXR5OjB9LG4udmFycy5hbmltYXRpb25TcGVlZCxuLnZhcnMuZWFzaW5nKSxuLnNsaWRlcy5lcShlKS5jc3Moe3pJbmRleDoyfSkuYW5pbWF0ZSh7b3BhY2l0eToxfSxuLnZhcnMuYW5pbWF0aW9uU3BlZWQsbi52YXJzLmVhc2luZyxuLndyYXB1cCkpO2Vsc2V7dmFyIGM9ZD9uLnNsaWRlcy5maWx0ZXIoXCI6Zmlyc3RcIikuaGVpZ2h0KCk6bi5jb21wdXRlZFcsZyxoLFM7dj8oZz1uLnZhcnMuaXRlbU1hcmdpbixTPShuLml0ZW1XK2cpKm4ubW92ZSpuLmFuaW1hdGluZ1RvLGg9Uz5uLmxpbWl0JiYxIT09bi52aXNpYmxlP24ubGltaXQ6Uyk6aD0wPT09bi5jdXJyZW50U2xpZGUmJmU9PT1uLmNvdW50LTEmJm4udmFycy5hbmltYXRpb25Mb29wJiZcIm5leHRcIiE9PW4uZGlyZWN0aW9uP3U/KG4uY291bnQrbi5jbG9uZU9mZnNldCkqYzowOm4uY3VycmVudFNsaWRlPT09bi5sYXN0JiYwPT09ZSYmbi52YXJzLmFuaW1hdGlvbkxvb3AmJlwicHJldlwiIT09bi5kaXJlY3Rpb24/dT8wOihuLmNvdW50KzEpKmM6dT8obi5jb3VudC0xLWUrbi5jbG9uZU9mZnNldCkqYzooZStuLmNsb25lT2Zmc2V0KSpjLG4uc2V0UHJvcHMoaCxcIlwiLG4udmFycy5hbmltYXRpb25TcGVlZCksbi50cmFuc2l0aW9ucz8obi52YXJzLmFuaW1hdGlvbkxvb3AmJm4uYXRFbmR8fChuLmFuaW1hdGluZz0hMSxuLmN1cnJlbnRTbGlkZT1uLmFuaW1hdGluZ1RvKSxuLmNvbnRhaW5lci51bmJpbmQoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmRcIiksbi5jb250YWluZXIuYmluZChcIndlYmtpdFRyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZFwiLGZ1bmN0aW9uKCl7Y2xlYXJUaW1lb3V0KG4uZW5zdXJlQW5pbWF0aW9uRW5kKSxuLndyYXB1cChjKX0pLGNsZWFyVGltZW91dChuLmVuc3VyZUFuaW1hdGlvbkVuZCksbi5lbnN1cmVBbmltYXRpb25FbmQ9c2V0VGltZW91dChmdW5jdGlvbigpe24ud3JhcHVwKGMpfSxuLnZhcnMuYW5pbWF0aW9uU3BlZWQrMTAwKSk6bi5jb250YWluZXIuYW5pbWF0ZShuLmFyZ3Msbi52YXJzLmFuaW1hdGlvblNwZWVkLG4udmFycy5lYXNpbmcsZnVuY3Rpb24oKXtuLndyYXB1cChjKX0pfW4udmFycy5zbW9vdGhIZWlnaHQmJmYuc21vb3RoSGVpZ2h0KG4udmFycy5hbmltYXRpb25TcGVlZCl9fSxuLndyYXB1cD1mdW5jdGlvbihlKXtwfHx2fHwoMD09PW4uY3VycmVudFNsaWRlJiZuLmFuaW1hdGluZ1RvPT09bi5sYXN0JiZuLnZhcnMuYW5pbWF0aW9uTG9vcD9uLnNldFByb3BzKGUsXCJqdW1wRW5kXCIpOm4uY3VycmVudFNsaWRlPT09bi5sYXN0JiYwPT09bi5hbmltYXRpbmdUbyYmbi52YXJzLmFuaW1hdGlvbkxvb3AmJm4uc2V0UHJvcHMoZSxcImp1bXBTdGFydFwiKSksbi5hbmltYXRpbmc9ITEsbi5jdXJyZW50U2xpZGU9bi5hbmltYXRpbmdUbyxuLnZhcnMuYWZ0ZXIobil9LG4uYW5pbWF0ZVNsaWRlcz1mdW5jdGlvbigpeyFuLmFuaW1hdGluZyYmZSYmbi5mbGV4QW5pbWF0ZShuLmdldFRhcmdldChcIm5leHRcIikpfSxuLnBhdXNlPWZ1bmN0aW9uKCl7Y2xlYXJJbnRlcnZhbChuLmFuaW1hdGVkU2xpZGVzKSxuLmFuaW1hdGVkU2xpZGVzPW51bGwsbi5wbGF5aW5nPSExLG4udmFycy5wYXVzZVBsYXkmJmYucGF1c2VQbGF5LnVwZGF0ZShcInBsYXlcIiksbi5zeW5jRXhpc3RzJiZmLnN5bmMoXCJwYXVzZVwiKX0sbi5wbGF5PWZ1bmN0aW9uKCl7bi5wbGF5aW5nJiZjbGVhckludGVydmFsKG4uYW5pbWF0ZWRTbGlkZXMpLG4uYW5pbWF0ZWRTbGlkZXM9bi5hbmltYXRlZFNsaWRlc3x8c2V0SW50ZXJ2YWwobi5hbmltYXRlU2xpZGVzLG4udmFycy5zbGlkZXNob3dTcGVlZCksbi5zdGFydGVkPW4ucGxheWluZz0hMCxuLnZhcnMucGF1c2VQbGF5JiZmLnBhdXNlUGxheS51cGRhdGUoXCJwYXVzZVwiKSxuLnN5bmNFeGlzdHMmJmYuc3luYyhcInBsYXlcIil9LG4uc3RvcD1mdW5jdGlvbigpe24ucGF1c2UoKSxuLnN0b3BwZWQ9ITB9LG4uY2FuQWR2YW5jZT1mdW5jdGlvbihlLHQpe3ZhciBhPW0/bi5wYWdpbmdDb3VudC0xOm4ubGFzdDtyZXR1cm4hIXR8fCghKCFtfHxuLmN1cnJlbnRJdGVtIT09bi5jb3VudC0xfHwwIT09ZXx8XCJwcmV2XCIhPT1uLmRpcmVjdGlvbil8fCghbXx8MCE9PW4uY3VycmVudEl0ZW18fGUhPT1uLnBhZ2luZ0NvdW50LTF8fFwibmV4dFwiPT09bi5kaXJlY3Rpb24pJiYoIShlPT09bi5jdXJyZW50U2xpZGUmJiFtKSYmKCEhbi52YXJzLmFuaW1hdGlvbkxvb3B8fCghbi5hdEVuZHx8MCE9PW4uY3VycmVudFNsaWRlfHxlIT09YXx8XCJuZXh0XCI9PT1uLmRpcmVjdGlvbikmJighbi5hdEVuZHx8bi5jdXJyZW50U2xpZGUhPT1hfHwwIT09ZXx8XCJuZXh0XCIhPT1uLmRpcmVjdGlvbikpKSl9LG4uZ2V0VGFyZ2V0PWZ1bmN0aW9uKGUpe3JldHVybiBuLmRpcmVjdGlvbj1lLFwibmV4dFwiPT09ZT9uLmN1cnJlbnRTbGlkZT09PW4ubGFzdD8wOm4uY3VycmVudFNsaWRlKzE6MD09PW4uY3VycmVudFNsaWRlP24ubGFzdDpuLmN1cnJlbnRTbGlkZS0xfSxuLnNldFByb3BzPWZ1bmN0aW9uKGUsdCxhKXt2YXIgaT1mdW5jdGlvbigpe3ZhciBhPWV8fChuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5hbmltYXRpbmdUbztyZXR1cm4gZnVuY3Rpb24oKXtpZih2KXJldHVyblwic2V0VG91Y2hcIj09PXQ/ZTp1JiZuLmFuaW1hdGluZ1RvPT09bi5sYXN0PzA6dT9uLmxpbWl0LShuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5hbmltYXRpbmdUbzpuLmFuaW1hdGluZ1RvPT09bi5sYXN0P24ubGltaXQ6YTtzd2l0Y2godCl7Y2FzZVwic2V0VG90YWxcIjpyZXR1cm4gdT8obi5jb3VudC0xLW4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmU6KG4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmU7Y2FzZVwic2V0VG91Y2hcIjpyZXR1cm4gZTtjYXNlXCJqdW1wRW5kXCI6cmV0dXJuIHU/ZTpuLmNvdW50KmU7Y2FzZVwianVtcFN0YXJ0XCI6cmV0dXJuIHU/bi5jb3VudCplOmU7ZGVmYXVsdDpyZXR1cm4gZX19KCkqKG4udmFycy5ydGw/MTotMSkrXCJweFwifSgpO24udHJhbnNpdGlvbnMmJihpPW4uaXNGaXJlZm94P2Q/XCJ0cmFuc2xhdGUzZCgwLFwiK2krXCIsMClcIjpcInRyYW5zbGF0ZTNkKFwiK3BhcnNlSW50KGkpK1wicHgsMCwwKVwiOmQ/XCJ0cmFuc2xhdGUzZCgwLFwiK2krXCIsMClcIjpcInRyYW5zbGF0ZTNkKFwiKyhuLnZhcnMucnRsPy0xOjEpKnBhcnNlSW50KGkpK1wicHgsMCwwKVwiLGE9dm9pZCAwIT09YT9hLzFlMytcInNcIjpcIjBzXCIsbi5jb250YWluZXIuY3NzKFwiLVwiK24ucGZ4K1wiLXRyYW5zaXRpb24tZHVyYXRpb25cIixhKSxuLmNvbnRhaW5lci5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsYSkpLG4uYXJnc1tuLnByb3BdPWksKG4udHJhbnNpdGlvbnN8fHZvaWQgMD09PWEpJiZuLmNvbnRhaW5lci5jc3Mobi5hcmdzKSxuLmNvbnRhaW5lci5jc3MoXCJ0cmFuc2Zvcm1cIixpKX0sbi5zZXR1cD1mdW5jdGlvbihlKXtpZihwKW4udmFycy5ydGw/bi5zbGlkZXMuY3NzKHt3aWR0aDpcIjEwMCVcIixmbG9hdDpcInJpZ2h0XCIsbWFyZ2luTGVmdDpcIi0xMDAlXCIscG9zaXRpb246XCJyZWxhdGl2ZVwifSk6bi5zbGlkZXMuY3NzKHt3aWR0aDpcIjEwMCVcIixmbG9hdDpcImxlZnRcIixtYXJnaW5SaWdodDpcIi0xMDAlXCIscG9zaXRpb246XCJyZWxhdGl2ZVwifSksXCJpbml0XCI9PT1lJiYocz9uLnNsaWRlcy5jc3Moe29wYWNpdHk6MCxkaXNwbGF5OlwiYmxvY2tcIix3ZWJraXRUcmFuc2l0aW9uOlwib3BhY2l0eSBcIituLnZhcnMuYW5pbWF0aW9uU3BlZWQvMWUzK1wicyBlYXNlXCIsekluZGV4OjF9KS5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHtvcGFjaXR5OjEsekluZGV4OjJ9KTowPT1uLnZhcnMuZmFkZUZpcnN0U2xpZGU/bi5zbGlkZXMuY3NzKHtvcGFjaXR5OjAsZGlzcGxheTpcImJsb2NrXCIsekluZGV4OjF9KS5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHt6SW5kZXg6Mn0pLmNzcyh7b3BhY2l0eToxfSk6bi5zbGlkZXMuY3NzKHtvcGFjaXR5OjAsZGlzcGxheTpcImJsb2NrXCIsekluZGV4OjF9KS5lcShuLmN1cnJlbnRTbGlkZSkuY3NzKHt6SW5kZXg6Mn0pLmFuaW1hdGUoe29wYWNpdHk6MX0sbi52YXJzLmFuaW1hdGlvblNwZWVkLG4udmFycy5lYXNpbmcpKSxuLnZhcnMuc21vb3RoSGVpZ2h0JiZmLnNtb290aEhlaWdodCgpO2Vsc2V7dmFyIHQsYTtcImluaXRcIj09PWUmJihuLnZpZXdwb3J0PSQoJzxkaXYgY2xhc3M9XCInK2krJ3ZpZXdwb3J0XCI+PC9kaXY+JykuY3NzKHtvdmVyZmxvdzpcImhpZGRlblwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIn0pLmFwcGVuZFRvKG4pLmFwcGVuZChuLmNvbnRhaW5lciksbi5jbG9uZUNvdW50PTAsbi5jbG9uZU9mZnNldD0wLHUmJihhPSQubWFrZUFycmF5KG4uc2xpZGVzKS5yZXZlcnNlKCksbi5zbGlkZXM9JChhKSxuLmNvbnRhaW5lci5lbXB0eSgpLmFwcGVuZChuLnNsaWRlcykpKSxuLnZhcnMuYW5pbWF0aW9uTG9vcCYmIXYmJihuLmNsb25lQ291bnQ9MixuLmNsb25lT2Zmc2V0PTEsXCJpbml0XCIhPT1lJiZuLmNvbnRhaW5lci5maW5kKFwiLmNsb25lXCIpLnJlbW92ZSgpLG4uY29udGFpbmVyLmFwcGVuZChmLnVuaXF1ZUlEKG4uc2xpZGVzLmZpcnN0KCkuY2xvbmUoKS5hZGRDbGFzcyhcImNsb25lXCIpKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIikpLnByZXBlbmQoZi51bmlxdWVJRChuLnNsaWRlcy5sYXN0KCkuY2xvbmUoKS5hZGRDbGFzcyhcImNsb25lXCIpKS5hdHRyKFwiYXJpYS1oaWRkZW5cIixcInRydWVcIikpKSxuLm5ld1NsaWRlcz0kKG4udmFycy5zZWxlY3RvcixuKSx0PXU/bi5jb3VudC0xLW4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQ6bi5jdXJyZW50U2xpZGUrbi5jbG9uZU9mZnNldCxkJiYhdj8obi5jb250YWluZXIuaGVpZ2h0KDIwMCoobi5jb3VudCtuLmNsb25lQ291bnQpK1wiJVwiKS5jc3MoXCJwb3NpdGlvblwiLFwiYWJzb2x1dGVcIikud2lkdGgoXCIxMDAlXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLm5ld1NsaWRlcy5jc3Moe2Rpc3BsYXk6XCJibG9ja1wifSksbi5kb01hdGgoKSxuLnZpZXdwb3J0LmhlaWdodChuLmgpLG4uc2V0UHJvcHModCpuLmgsXCJpbml0XCIpfSxcImluaXRcIj09PWU/MTAwOjApKToobi5jb250YWluZXIud2lkdGgoMjAwKihuLmNvdW50K24uY2xvbmVDb3VudCkrXCIlXCIpLG4uc2V0UHJvcHModCpuLmNvbXB1dGVkVyxcImluaXRcIiksc2V0VGltZW91dChmdW5jdGlvbigpe24uZG9NYXRoKCksbi52YXJzLnJ0bCYmbi5pc0ZpcmVmb3g/bi5uZXdTbGlkZXMuY3NzKHt3aWR0aDpuLmNvbXB1dGVkVyxtYXJnaW5SaWdodDpuLmNvbXB1dGVkTSxmbG9hdDpcInJpZ2h0XCIsZGlzcGxheTpcImJsb2NrXCJ9KTpuLm5ld1NsaWRlcy5jc3Moe3dpZHRoOm4uY29tcHV0ZWRXLG1hcmdpblJpZ2h0Om4uY29tcHV0ZWRNLGZsb2F0OlwibGVmdFwiLGRpc3BsYXk6XCJibG9ja1wifSksbi52YXJzLnNtb290aEhlaWdodCYmZi5zbW9vdGhIZWlnaHQoKX0sXCJpbml0XCI9PT1lPzEwMDowKSl9dnx8bi5zbGlkZXMucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKS5lcShuLmN1cnJlbnRTbGlkZSkuYWRkQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKSxuLnZhcnMuaW5pdChuKX0sbi5kb01hdGg9ZnVuY3Rpb24oKXt2YXIgZT1uLnNsaWRlcy5maXJzdCgpLHQ9bi52YXJzLml0ZW1NYXJnaW4sYT1uLnZhcnMubWluSXRlbXMsaT1uLnZhcnMubWF4SXRlbXM7bi53PXZvaWQgMD09PW4udmlld3BvcnQ/bi53aWR0aCgpOm4udmlld3BvcnQud2lkdGgoKSxuLmlzRmlyZWZveCYmKG4udz1uLndpZHRoKCkpLG4uaD1lLmhlaWdodCgpLG4uYm94UGFkZGluZz1lLm91dGVyV2lkdGgoKS1lLndpZHRoKCksdj8obi5pdGVtVD1uLnZhcnMuaXRlbVdpZHRoK3Qsbi5pdGVtTT10LG4ubWluVz1hP2Eqbi5pdGVtVDpuLncsbi5tYXhXPWk/aSpuLml0ZW1ULXQ6bi53LG4uaXRlbVc9bi5taW5XPm4udz8obi53LXQqKGEtMSkpL2E6bi5tYXhXPG4udz8obi53LXQqKGktMSkpL2k6bi52YXJzLml0ZW1XaWR0aD5uLnc/bi53Om4udmFycy5pdGVtV2lkdGgsbi52aXNpYmxlPU1hdGguZmxvb3Iobi53L24uaXRlbVcpLG4ubW92ZT1uLnZhcnMubW92ZT4wJiZuLnZhcnMubW92ZTxuLnZpc2libGU/bi52YXJzLm1vdmU6bi52aXNpYmxlLG4ucGFnaW5nQ291bnQ9TWF0aC5jZWlsKChuLmNvdW50LW4udmlzaWJsZSkvbi5tb3ZlKzEpLG4ubGFzdD1uLnBhZ2luZ0NvdW50LTEsbi5saW1pdD0xPT09bi5wYWdpbmdDb3VudD8wOm4udmFycy5pdGVtV2lkdGg+bi53P24uaXRlbVcqKG4uY291bnQtMSkrdCoobi5jb3VudC0xKToobi5pdGVtVyt0KSpuLmNvdW50LW4udy10KToobi5pdGVtVz1uLncsbi5pdGVtTT10LG4ucGFnaW5nQ291bnQ9bi5jb3VudCxuLmxhc3Q9bi5jb3VudC0xKSxuLmNvbXB1dGVkVz1uLml0ZW1XLW4uYm94UGFkZGluZyxuLmNvbXB1dGVkTT1uLml0ZW1NfSxuLnVwZGF0ZT1mdW5jdGlvbihlLHQpe24uZG9NYXRoKCksdnx8KGU8bi5jdXJyZW50U2xpZGU/bi5jdXJyZW50U2xpZGUrPTE6ZTw9bi5jdXJyZW50U2xpZGUmJjAhPT1lJiYobi5jdXJyZW50U2xpZGUtPTEpLG4uYW5pbWF0aW5nVG89bi5jdXJyZW50U2xpZGUpLG4udmFycy5jb250cm9sTmF2JiYhbi5tYW51YWxDb250cm9scyYmKFwiYWRkXCI9PT10JiYhdnx8bi5wYWdpbmdDb3VudD5uLmNvbnRyb2xOYXYubGVuZ3RoP2YuY29udHJvbE5hdi51cGRhdGUoXCJhZGRcIik6KFwicmVtb3ZlXCI9PT10JiYhdnx8bi5wYWdpbmdDb3VudDxuLmNvbnRyb2xOYXYubGVuZ3RoKSYmKHYmJm4uY3VycmVudFNsaWRlPm4ubGFzdCYmKG4uY3VycmVudFNsaWRlLT0xLG4uYW5pbWF0aW5nVG8tPTEpLGYuY29udHJvbE5hdi51cGRhdGUoXCJyZW1vdmVcIixuLmxhc3QpKSksbi52YXJzLmRpcmVjdGlvbk5hdiYmZi5kaXJlY3Rpb25OYXYudXBkYXRlKCl9LG4uYWRkU2xpZGU9ZnVuY3Rpb24oZSx0KXt2YXIgYT0kKGUpO24uY291bnQrPTEsbi5sYXN0PW4uY291bnQtMSxkJiZ1P3ZvaWQgMCE9PXQ/bi5zbGlkZXMuZXEobi5jb3VudC10KS5hZnRlcihhKTpuLmNvbnRhaW5lci5wcmVwZW5kKGEpOnZvaWQgMCE9PXQ/bi5zbGlkZXMuZXEodCkuYmVmb3JlKGEpOm4uY29udGFpbmVyLmFwcGVuZChhKSxuLnVwZGF0ZSh0LFwiYWRkXCIpLG4uc2xpZGVzPSQobi52YXJzLnNlbGVjdG9yK1wiOm5vdCguY2xvbmUpXCIsbiksbi5zZXR1cCgpLG4udmFycy5hZGRlZChuKX0sbi5yZW1vdmVTbGlkZT1mdW5jdGlvbihlKXt2YXIgdD1pc05hTihlKT9uLnNsaWRlcy5pbmRleCgkKGUpKTplO24uY291bnQtPTEsbi5sYXN0PW4uY291bnQtMSxpc05hTihlKT8kKGUsbi5zbGlkZXMpLnJlbW92ZSgpOmQmJnU/bi5zbGlkZXMuZXEobi5sYXN0KS5yZW1vdmUoKTpuLnNsaWRlcy5lcShlKS5yZW1vdmUoKSxuLmRvTWF0aCgpLG4udXBkYXRlKHQsXCJyZW1vdmVcIiksbi5zbGlkZXM9JChuLnZhcnMuc2VsZWN0b3IrXCI6bm90KC5jbG9uZSlcIixuKSxuLnNldHVwKCksbi52YXJzLnJlbW92ZWQobil9LGYuaW5pdCgpfSwkKHdpbmRvdykuYmx1cihmdW5jdGlvbih0KXtlPSExfSkuZm9jdXMoZnVuY3Rpb24odCl7ZT0hMH0pLCQuZmxleHNsaWRlci5kZWZhdWx0cz17bmFtZXNwYWNlOlwiZmxleC1cIixzZWxlY3RvcjpcIi5zbGlkZXMgPiBsaVwiLGFuaW1hdGlvbjpcImZhZGVcIixlYXNpbmc6XCJzd2luZ1wiLGRpcmVjdGlvbjpcImhvcml6b250YWxcIixyZXZlcnNlOiExLGFuaW1hdGlvbkxvb3A6ITAsc21vb3RoSGVpZ2h0OiExLHN0YXJ0QXQ6MCxzbGlkZXNob3c6ITAsc2xpZGVzaG93U3BlZWQ6N2UzLGFuaW1hdGlvblNwZWVkOjYwMCxpbml0RGVsYXk6MCxyYW5kb21pemU6ITEsZmFkZUZpcnN0U2xpZGU6ITAsdGh1bWJDYXB0aW9uczohMSxwYXVzZU9uQWN0aW9uOiEwLHBhdXNlT25Ib3ZlcjohMSxwYXVzZUludmlzaWJsZTohMCx1c2VDU1M6ITAsdG91Y2g6ITAsdmlkZW86ITEsY29udHJvbE5hdjohMCxkaXJlY3Rpb25OYXY6ITAscHJldlRleHQ6XCJQcmV2aW91c1wiLG5leHRUZXh0OlwiTmV4dFwiLGtleWJvYXJkOiEwLG11bHRpcGxlS2V5Ym9hcmQ6ITEsbW91c2V3aGVlbDohMSxwYXVzZVBsYXk6ITEscGF1c2VUZXh0OlwiUGF1c2VcIixwbGF5VGV4dDpcIlBsYXlcIixjb250cm9sc0NvbnRhaW5lcjpcIlwiLG1hbnVhbENvbnRyb2xzOlwiXCIsY3VzdG9tRGlyZWN0aW9uTmF2OlwiXCIsc3luYzpcIlwiLGFzTmF2Rm9yOlwiXCIsaXRlbVdpZHRoOjAsaXRlbU1hcmdpbjowLG1pbkl0ZW1zOjEsbWF4SXRlbXM6MCxtb3ZlOjAsYWxsb3dPbmVTbGlkZTohMCxpc0ZpcmVmb3g6ITEsc3RhcnQ6ZnVuY3Rpb24oKXt9LGJlZm9yZTpmdW5jdGlvbigpe30sYWZ0ZXI6ZnVuY3Rpb24oKXt9LGVuZDpmdW5jdGlvbigpe30sYWRkZWQ6ZnVuY3Rpb24oKXt9LHJlbW92ZWQ6ZnVuY3Rpb24oKXt9LGluaXQ6ZnVuY3Rpb24oKXt9LHJ0bDohMX0sJC5mbi5mbGV4c2xpZGVyPWZ1bmN0aW9uKGUpe2lmKHZvaWQgMD09PWUmJihlPXt9KSxcIm9iamVjdFwiPT10eXBlb2YgZSlyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCl7dmFyIHQ9JCh0aGlzKSxhPWUuc2VsZWN0b3I/ZS5zZWxlY3RvcjpcIi5zbGlkZXMgPiBsaVwiLG49dC5maW5kKGEpOzE9PT1uLmxlbmd0aCYmITE9PT1lLmFsbG93T25lU2xpZGV8fDA9PT1uLmxlbmd0aD8obi5mYWRlSW4oNDAwKSxlLnN0YXJ0JiZlLnN0YXJ0KHQpKTp2b2lkIDA9PT10LmRhdGEoXCJmbGV4c2xpZGVyXCIpJiZuZXcgJC5mbGV4c2xpZGVyKHRoaXMsZSl9KTt2YXIgdD0kKHRoaXMpLmRhdGEoXCJmbGV4c2xpZGVyXCIpO3N3aXRjaChlKXtjYXNlXCJwbGF5XCI6dC5wbGF5KCk7YnJlYWs7Y2FzZVwicGF1c2VcIjp0LnBhdXNlKCk7YnJlYWs7Y2FzZVwic3RvcFwiOnQuc3RvcCgpO2JyZWFrO2Nhc2VcIm5leHRcIjp0LmZsZXhBbmltYXRlKHQuZ2V0VGFyZ2V0KFwibmV4dFwiKSwhMCk7YnJlYWs7Y2FzZVwicHJldlwiOmNhc2VcInByZXZpb3VzXCI6dC5mbGV4QW5pbWF0ZSh0LmdldFRhcmdldChcInByZXZcIiksITApO2JyZWFrO2RlZmF1bHQ6XCJudW1iZXJcIj09dHlwZW9mIGUmJnQuZmxleEFuaW1hdGUoZSwhMCl9fX0oalF1ZXJ5KTsiLCJpbXBvcnQgXCIuL2pxdWVyeS5mbGV4c2xpZGVyLW1pblwiO1xyXG5pbXBvcnQgJy4vbWVudSc7XHJcbmltcG9ydCBcIi4vc2xpZGVyXCI7XHJcbmltcG9ydCAnLi9yZW5kZXInOyIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgJChcIiNtZW51LW9wZW5cIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiI21lbnUtb3BlbiBzcGFuXCIpLnRvZ2dsZUNsYXNzKFwib3BlblwiKTtcclxuICAgICQoXCIubmF2XCIpLnNsaWRlVG9nZ2xlKFwic2xvd1wiKTtcclxuICB9KTtcclxuXHJcbiAgLy9wcm9kdWN0cyBzdWIgbWVudVxyXG4gICQoXCIucHJvZHVjdHMtbWVudS1saW5rPmFcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLmRvd25sb2Fkc1wiKS5yZW1vdmVDbGFzcyhcInN1Yi1tZW51LW9wZW5cIik7XHJcbiAgICAkKFwiLnByb2R1Y3RzXCIpLnRvZ2dsZUNsYXNzKFwic3ViLW1lbnUtb3BlblwiKTtcclxuICB9KTtcclxuXHJcbiAgLy9kb3dubG9hZHMgc3ViIG1lbnVcclxuICAkKFwiLmRvd25sb2FkLW1lbnUtbGlua1wiKS5jbGljayhmdW5jdGlvbigpIHtcclxuICAgICQoXCIucHJvZHVjdHNcIikucmVtb3ZlQ2xhc3MoXCJzdWItbWVudS1vcGVuXCIpO1xyXG4gICAgJChcIi5kb3dubG9hZHNcIikudG9nZ2xlQ2xhc3MoXCJzdWItbWVudS1vcGVuXCIpO1xyXG4gIH0pO1xyXG5cclxuICAvL2NoYW5nZSBwcm9kdWN0IG1lbnUgbGluayBvbiBtb2JpbGVcclxuXHJcbiAgbGV0IHcgPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuXHJcbiAgaWYgKHcgPCAxMjAwKSB7XHJcbiAgICAkKFwiLnByb2R1Y3RzLW1lbnUtbGluaz5hXCIpLmF0dHIoXCJocmVmXCIsIFwiL3Byb2R1Y3RzXCIpO1xyXG4gICAgJChcIi5kb3dubG9hZC1tZW51LWxpbms+YVwiKS5hdHRyKFwiaHJlZlwiLCBcIi9kb3dubG9hZHNcIik7XHJcbiAgfVxyXG5cclxuICAvL2NvbGxhcHNpYmxlIG1lbnVzIGZ1bmN0aW9uXHJcbiAgZnVuY3Rpb24gc2V0dXBfY29sbGFwc2libGVfc3VibWVudXMoKSB7XHJcbiAgICB2YXIgJG1lbnUgPSAkKFwiI21vYmlsZV9tZW51XCIpLFxyXG4gICAgICB0b3BfbGV2ZWxfbGluayA9IFwiI21vYmlsZV9tZW51IC5tZW51LWl0ZW0taGFzLWNoaWxkcmVuID4gYVwiO1xyXG4gICAgJG1lbnUuZmluZChcImFcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgJCh0aGlzKS5vZmYoXCJjbGlja1wiKTtcclxuXHJcbiAgICAgIGlmICgkKHRoaXMpLmlzKHRvcF9sZXZlbF9saW5rKSkge1xyXG4gICAgICAgICQodGhpcykuYXR0cihcImhyZWZcIiwgXCIjXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoISQodGhpcykuc2libGluZ3MoXCIuc3ViLW1lbnVcIikubGVuZ3RoKSB7XHJcbiAgICAgICAgJCh0aGlzKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAkKHRoaXMpXHJcbiAgICAgICAgICAgIC5wYXJlbnRzKFwiLm1lbnUtYnV0dG9uXCIpXHJcbiAgICAgICAgICAgIC50cmlnZ2VyKFwiY2xpY2tcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgJCh0aGlzKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAucGFyZW50KClcclxuICAgICAgICAgICAgLnRvZ2dsZUNsYXNzKFwidmlzaWJsZVwiKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgIHNldHVwX2NvbGxhcHNpYmxlX3N1Ym1lbnVzKCk7XHJcbiAgICB9LCA3MDApO1xyXG4gIH0pO1xyXG59KTsiLCIvL0dyYWIgaXRlbXNcclxuXHJcbi8vSWNvbnNcclxuY29uc3QgcmVuZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbmRlcicpO1xyXG5jb25zdCBxdW90YXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucXVvdGF0aW9uJyk7XHJcbmNvbnN0IGxheW91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXlvdXQnKTtcclxuY29uc3QgYmFja0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrJyk7XHJcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xyXG5cclxuLy9Ecm9wZG93biBDb250ZW50XHJcbmNvbnN0IHJlbmRlckRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlbmRlci1pbWFnZS13cmFwcGVyJyk7XHJcbmNvbnN0IHF1b3RhdGlvbkRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBkZi13cmFwcGVyJyk7XHJcbmNvbnN0IGxheW91dERyb3Bkd29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxheW91dC1pbWFnZS13cmFwcGVyJyk7XHJcblxyXG4vL0NvbnRlbnQgQ3Jvc3NcclxuY29uc3QgcmVuZGVyQ3Jvc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVuZGVyLWNyb3NzJyk7XHJcblxyXG4vL0V2ZW50IExpc3RlbmVyc1xyXG5pZihyZW5kZXIpIC8vY2hlY2sgaWYgZWxlbWVudCBleGlzdHNcclxucmVuZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcmVuZGVyRHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBiYWNrQnRuLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG59KTtcclxuaWYobGF5b3V0KVxyXG5sYXlvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsYXlvdXREcm9wZHdvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIGJhY2tCdG4uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XHJcbn0pO1xyXG5pZihxdW90YXRpb24pXHJcbnF1b3RhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHF1b3RhdGlvbkRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgYmFja0J0bi5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbn0pO1xyXG5cclxuLy9DbG9zZSBjb250ZW50XHJcbnJlbmRlckNyb3NzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZW5kZXIgJiYgcmVuZGVyRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cclxuICAgICAgICAgICAgcmVuZGVyRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGJhY2tCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCAmJiBsYXlvdXREcm9wZHdvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsYXlvdXREcm9wZHdvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgYmFja0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgIFxyXG4gICAgICAgIH0gZWxzZSBpZiAocXVvdGF0aW9uICYmIHF1b3RhdGlvbkRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHJcbiAgICAgICAgICAgIHF1b3RhdGlvbkRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBiYWNrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICBzY3JvbGxCYXJEZWxheSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KTtcclxuXHJcbi8vRGVsYXkgZnVuY3Rpb25cclxuZnVuY3Rpb24gc2Nyb2xsQmFyRGVsYXkoKSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIG1haW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgIH0sIDIwMDApO1xyXG59IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuICAkKFwiLmZsZXhzbGlkZXJcIikuZmxleHNsaWRlcih7XHJcbiAgICBhbmltYXRpb246IFwiZmFkZVwiLFxyXG4gICAgc2xpZGVzaG93U3BlZWQ6IDUwMDAsXHJcbiAgICBhbmltYXRpb25TcGVlZDogNjAwLFxyXG4gICAgYW5pbWF0aW9uTG9vcDogZmFsc2UsXHJcbiAgICBwYXVzZU9uQWN0aW9uOiBmYWxzZSxcclxuICAgIGNvbnRyb2xOYXY6IHRydWUsXHJcbiAgICBydGw6IHRydWUsXHJcbiAgICBjdXN0b21EaXJlY3Rpb25OYXY6ICQoXCIuY3VzdG9tLW5hdmlnYXRpb24gYVwiKSxcclxuICB9KTtcclxufSk7XHJcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=