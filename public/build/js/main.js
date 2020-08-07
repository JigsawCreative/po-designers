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
var layout = document.querySelector('.layout'); //Dropdown Content

var renderDropdown = document.querySelector('.render-image-wrapper');
var quotationDropdown = document.querySelector('.pdf-wrapper');
var layoutDropdwon = document.querySelector('.layout-image-wrapper'); //Content Cross

var renderCross = document.querySelectorAll('.render-cross'); //Event Listeners

if (render) //check if element exists
  render.addEventListener('click', function () {
    renderDropdown.classList.add('active');
  });
if (layout) layout.addEventListener('click', function () {
  layoutDropdwon.classList.add('active');
});
if (quotation) quotation.addEventListener('click', function () {
  quotationDropdown.classList.add('active');
}); //Close content

renderCross.forEach(function (item) {
  item.addEventListener('click', function () {
    if (render && renderDropdown.classList.contains('active')) {
      renderDropdown.classList.remove('active');
    } else if (layout && layoutDropdwon.classList.contains('active')) {
      layoutDropdwon.classList.remove('active');
    } else if (quotation && quotationDropdown.classList.contains('active')) {
      quotationDropdown.classList.remove('active');
    }
  });
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2pxdWVyeS5mbGV4c2xpZGVyLW1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbIiQiLCJlIiwiZmxleHNsaWRlciIsInQiLCJhIiwibiIsInJ0bCIsImF0dHIiLCJ2YXJzIiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCJpIiwibmFtZXNwYWNlIiwiciIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1zUG9pbnRlckVuYWJsZWQiLCJNU0dlc3R1cmUiLCJzIiwiRG9jdW1lbnRUb3VjaCIsImRvY3VtZW50IiwidG91Y2giLCJvIiwibCIsImMiLCJkIiwiZGlyZWN0aW9uIiwidSIsInJldmVyc2UiLCJ2IiwiaXRlbVdpZHRoIiwicCIsImFuaW1hdGlvbiIsIm0iLCJhc05hdkZvciIsImYiLCJkYXRhIiwiaW5pdCIsImFuaW1hdGluZyIsImN1cnJlbnRTbGlkZSIsInBhcnNlSW50Iiwic3RhcnRBdCIsImlzTmFOIiwiYW5pbWF0aW5nVG8iLCJhdEVuZCIsImxhc3QiLCJjb250YWluZXJTZWxlY3RvciIsInNlbGVjdG9yIiwic3Vic3RyIiwic2VhcmNoIiwic2xpZGVzIiwiY29udGFpbmVyIiwiY291bnQiLCJsZW5ndGgiLCJzeW5jRXhpc3RzIiwic3luYyIsInByb3AiLCJhcmdzIiwibWFudWFsUGF1c2UiLCJzdG9wcGVkIiwic3RhcnRlZCIsInN0YXJ0VGltZW91dCIsInRyYW5zaXRpb25zIiwidmlkZW8iLCJ1c2VDU1MiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJwZngiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJpc0ZpcmVmb3giLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiZW5zdXJlQW5pbWF0aW9uRW5kIiwiY29udHJvbHNDb250YWluZXIiLCJtYW51YWxDb250cm9scyIsImN1c3RvbURpcmVjdGlvbk5hdiIsInJhbmRvbWl6ZSIsInNvcnQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJlbXB0eSIsImFwcGVuZCIsImRvTWF0aCIsInNldHVwIiwiY29udHJvbE5hdiIsImRpcmVjdGlvbk5hdiIsImtleWJvYXJkIiwibXVsdGlwbGVLZXlib2FyZCIsImJpbmQiLCJrZXlDb2RlIiwiZ2V0VGFyZ2V0IiwiZmxleEFuaW1hdGUiLCJwYXVzZU9uQWN0aW9uIiwibW91c2V3aGVlbCIsInByZXZlbnREZWZhdWx0IiwicGF1c2VQbGF5Iiwic2xpZGVzaG93IiwicGF1c2VJbnZpc2libGUiLCJwYXVzZU9uSG92ZXIiLCJob3ZlciIsIm1hbnVhbFBsYXkiLCJwYXVzZSIsInBsYXkiLCJpc0hpZGRlbiIsImluaXREZWxheSIsInNldFRpbWVvdXQiLCJhc05hdiIsInNtb290aEhlaWdodCIsInJlc2l6ZSIsImZpbmQiLCJzdGFydCIsImZsb29yIiwibW92ZSIsImN1cnJlbnRJdGVtIiwicmVtb3ZlQ2xhc3MiLCJlcSIsImFkZENsYXNzIiwiX3NsaWRlciIsImVhY2giLCJfZ2VzdHVyZSIsInRhcmdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50VGFyZ2V0IiwiYWRkUG9pbnRlciIsInBvaW50ZXJJZCIsImluZGV4IiwiaGFzQ2xhc3MiLCJvbiIsIm9mZnNldCIsInJpZ2h0Iiwic2Nyb2xsTGVmdCIsImxlZnQiLCJzZXR1cE1hbnVhbCIsInNldHVwUGFnaW5nIiwiY29udHJvbE5hdlNjYWZmb2xkIiwicGFnaW5nQ291bnQiLCJ0ZXh0IiwidGh1bWJDYXB0aW9ucyIsImFwcGVuZFRvIiwic2V0IiwiYWN0aXZlIiwiZGVsZWdhdGUiLCJ0eXBlIiwic2V0VG9DbGVhcldhdGNoZWRFdmVudCIsInVwZGF0ZSIsInJlbW92ZSIsImNsb3Nlc3QiLCJwcmV2VGV4dCIsIm5leHRUZXh0IiwiYW5pbWF0aW9uTG9vcCIsInJlbW92ZUF0dHIiLCJmaWx0ZXIiLCJodG1sIiwicGxheVRleHQiLCJwYXVzZVRleHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ3IiwiaCIsIk51bWJlciIsIkRhdGUiLCJsaW1pdCIsIml0ZW1XIiwiaXRlbU1hcmdpbiIsImNsb25lT2Zmc2V0IiwidHJhbnNsYXRpb25YIiwidHJhbnNsYXRpb25ZIiwieCIsImFicyIsImRldGFpbCIsIk1TR0VTVFVSRV9GTEFHX0lORVJUSUEiLCJzZXRJbW1lZGlhdGUiLCJzdG9wIiwic2V0UHJvcHMiLCJjYW5BZHZhbmNlIiwiZyIsIlMiLCJ5IiwiYiIsIm1zVG91Y2hBY3Rpb24iLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpcyIsIndpZHRoIiwiY29tcHV0ZWRXIiwidmlld3BvcnQiLCJoZWlnaHQiLCJuZXdTbGlkZXMiLCJhbmltYXRlIiwiaW5uZXJIZWlnaHQiLCJwbGF5aW5nIiwidW5pcXVlSUQiLCJhZGQiLCJ2aXNQcm9wIiwiZ2V0SGlkZGVuUHJvcCIsImNsZWFyVGltZW91dCIsImNlaWwiLCJ2aXNpYmxlIiwiYmVmb3JlIiwiZW5kIiwiY3NzIiwib3BhY2l0eSIsInpJbmRleCIsIndyYXB1cCIsImFuaW1hdGlvblNwZWVkIiwiZWFzaW5nIiwidW5iaW5kIiwiYWZ0ZXIiLCJhbmltYXRlU2xpZGVzIiwiY2xlYXJJbnRlcnZhbCIsImFuaW1hdGVkU2xpZGVzIiwic2V0SW50ZXJ2YWwiLCJzbGlkZXNob3dTcGVlZCIsIm1hcmdpbkxlZnQiLCJwb3NpdGlvbiIsIm1hcmdpblJpZ2h0IiwiZGlzcGxheSIsIndlYmtpdFRyYW5zaXRpb24iLCJmYWRlRmlyc3RTbGlkZSIsIm92ZXJmbG93IiwiY2xvbmVDb3VudCIsIm1ha2VBcnJheSIsImZpcnN0IiwiY2xvbmUiLCJwcmVwZW5kIiwiY29tcHV0ZWRNIiwibWluSXRlbXMiLCJtYXhJdGVtcyIsImJveFBhZGRpbmciLCJvdXRlcldpZHRoIiwiaXRlbVQiLCJpdGVtTSIsIm1pblciLCJtYXhXIiwiYWRkU2xpZGUiLCJhZGRlZCIsInJlbW92ZVNsaWRlIiwicmVtb3ZlZCIsImJsdXIiLCJmb2N1cyIsImFsbG93T25lU2xpZGUiLCJmbiIsImZhZGVJbiIsImpRdWVyeSIsInJlYWR5IiwiY2xpY2siLCJ0b2dnbGVDbGFzcyIsInNsaWRlVG9nZ2xlIiwiaW5uZXJXaWR0aCIsInNldHVwX2NvbGxhcHNpYmxlX3N1Ym1lbnVzIiwiJG1lbnUiLCJ0b3BfbGV2ZWxfbGluayIsIm9mZiIsInNpYmxpbmdzIiwiZXZlbnQiLCJwYXJlbnRzIiwidHJpZ2dlciIsInBhcmVudCIsImxvYWQiLCJyZW5kZXIiLCJxdWVyeVNlbGVjdG9yIiwicXVvdGF0aW9uIiwibGF5b3V0IiwicmVuZGVyRHJvcGRvd24iLCJxdW90YXRpb25Ecm9wZG93biIsImxheW91dERyb3Bkd29uIiwicmVuZGVyQ3Jvc3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xhc3NMaXN0IiwiZm9yRWFjaCIsIml0ZW0iLCJjb250YWlucyIsInByb2Nlc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJFcnJvciIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwiY2FsbCIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsIkFycmF5IiwiYXJndW1lbnRzIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwibmFtZSIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiZ2xvYmFsIiwidW5kZWZpbmVkIiwibmV4dEhhbmRsZSIsInRhc2tzQnlIYW5kbGUiLCJjdXJyZW50bHlSdW5uaW5nQVRhc2siLCJkb2MiLCJyZWdpc3RlckltbWVkaWF0ZSIsImNhbGxiYWNrIiwiRnVuY3Rpb24iLCJ0YXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJoYW5kbGUiLCJydW5JZlByZXNlbnQiLCJpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbiIsImNhblVzZVBvc3RNZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJpbXBvcnRTY3JpcHRzIiwicG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyIsIm9sZE9uTWVzc2FnZSIsIm9ubWVzc2FnZSIsImluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uIiwibWVzc2FnZVByZWZpeCIsIm9uR2xvYmFsTWVzc2FnZSIsInNvdXJjZSIsInNsaWNlIiwiYXR0YWNoRXZlbnQiLCJpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbiIsImNoYW5uZWwiLCJNZXNzYWdlQ2hhbm5lbCIsInBvcnQxIiwicG9ydDIiLCJpbnN0YWxsUmVhZHlTdGF0ZUNoYW5nZUltcGxlbWVudGF0aW9uIiwiZG9jdW1lbnRFbGVtZW50Iiwic2NyaXB0Iiwib25yZWFkeXN0YXRlY2hhbmdlIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCIsImluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24iLCJhdHRhY2hUbyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwidG9TdHJpbmciLCJzZWxmIiwic2NvcGUiLCJUaW1lb3V0IiwiY2xvc2UiLCJpZCIsImNsZWFyRm4iLCJfaWQiLCJfY2xlYXJGbiIsInVucmVmIiwicmVmIiwiZW5yb2xsIiwibXNlY3MiLCJfaWRsZVRpbWVvdXRJZCIsIl9pZGxlVGltZW91dCIsInVuZW5yb2xsIiwiX3VucmVmQWN0aXZlIiwib25UaW1lb3V0IiwiX29uVGltZW91dCIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7OztBQUlHLENBQUMsVUFBU0EsQ0FBVCxFQUFXO0FBQUMsTUFBSUMsQ0FBQyxHQUFDLENBQUMs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TUFBSSxPQUFPYSxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDa0ssQ0FBQyxHQUFHbEssTUFBSjtBQUNoQyxDLENBRUQ7QUFDQTtBQUNBOzs7QUFFQXNRLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnJHLENBQWpCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL21haW4uanNcIik7XG4iLCIvKlxyXG4gKiBqUXVlcnkgRmxleFNsaWRlciB2Mi43LjJcclxuICogQ29weXJpZ2h0IDIwMTIgV29vVGhlbWVzXHJcbiAqIENvbnRyaWJ1dGluZyBBdXRob3I6IFR5bGVyIFNtaXRoXHJcbiAqLyFmdW5jdGlvbigkKXt2YXIgZT0hMDskLmZsZXhzbGlkZXI9ZnVuY3Rpb24odCxhKXt2YXIgbj0kKHQpO3ZvaWQgMD09PWEucnRsJiZcInJ0bFwiPT0kKFwiaHRtbFwiKS5hdHRyKFwiZGlyXCIpJiYoYS5ydGw9ITApLG4udmFycz0kLmV4dGVuZCh7fSwkLmZsZXhzbGlkZXIuZGVmYXVsdHMsYSk7dmFyIGk9bi52YXJzLm5hbWVzcGFjZSxyPXdpbmRvdy5uYXZpZ2F0b3ImJndpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCYmd2luZG93Lk1TR2VzdHVyZSxzPShcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHxyfHx3aW5kb3cuRG9jdW1lbnRUb3VjaCYmZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKSYmbi52YXJzLnRvdWNoLG89XCJjbGljayB0b3VjaGVuZCBNU1BvaW50ZXJVcCBrZXl1cFwiLGw9XCJcIixjLGQ9XCJ2ZXJ0aWNhbFwiPT09bi52YXJzLmRpcmVjdGlvbix1PW4udmFycy5yZXZlcnNlLHY9bi52YXJzLml0ZW1XaWR0aD4wLHA9XCJmYWRlXCI9PT1uLnZhcnMuYW5pbWF0aW9uLG09XCJcIiE9PW4udmFycy5hc05hdkZvcixmPXt9OyQuZGF0YSh0LFwiZmxleHNsaWRlclwiLG4pLGY9e2luaXQ6ZnVuY3Rpb24oKXtuLmFuaW1hdGluZz0hMSxuLmN1cnJlbnRTbGlkZT1wYXJzZUludChuLnZhcnMuc3RhcnRBdD9uLnZhcnMuc3RhcnRBdDowLDEwKSxpc05hTihuLmN1cnJlbnRTbGlkZSkmJihuLmN1cnJlbnRTbGlkZT0wKSxuLmFuaW1hdGluZ1RvPW4uY3VycmVudFNsaWRlLG4uYXRFbmQ9MD09PW4uY3VycmVudFNsaWRlfHxuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCxuLmNvbnRhaW5lclNlbGVjdG9yPW4udmFycy5zZWxlY3Rvci5zdWJzdHIoMCxuLnZhcnMuc2VsZWN0b3Iuc2VhcmNoKFwiIFwiKSksbi5zbGlkZXM9JChuLnZhcnMuc2VsZWN0b3Isbiksbi5jb250YWluZXI9JChuLmNvbnRhaW5lclNlbGVjdG9yLG4pLG4uY291bnQ9bi5zbGlkZXMubGVuZ3RoLG4uc3luY0V4aXN0cz0kKG4udmFycy5zeW5jKS5sZW5ndGg+MCxcInNsaWRlXCI9PT1uLnZhcnMuYW5pbWF0aW9uJiYobi52YXJzLmFuaW1hdGlvbj1cInN3aW5nXCIpLG4ucHJvcD1kP1widG9wXCI6bi52YXJzLnJ0bD9cIm1hcmdpblJpZ2h0XCI6XCJtYXJnaW5MZWZ0XCIsbi5hcmdzPXt9LG4ubWFudWFsUGF1c2U9ITEsbi5zdG9wcGVkPSExLG4uc3RhcnRlZD0hMSxuLnN0YXJ0VGltZW91dD1udWxsLG4udHJhbnNpdGlvbnM9IW4udmFycy52aWRlbyYmIXAmJm4udmFycy51c2VDU1MmJmZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0PVtcInBlcnNwZWN0aXZlUHJvcGVydHlcIixcIldlYmtpdFBlcnNwZWN0aXZlXCIsXCJNb3pQZXJzcGVjdGl2ZVwiLFwiT1BlcnNwZWN0aXZlXCIsXCJtc1BlcnNwZWN0aXZlXCJdO2Zvcih2YXIgYSBpbiB0KWlmKHZvaWQgMCE9PWUuc3R5bGVbdFthXV0pcmV0dXJuIG4ucGZ4PXRbYV0ucmVwbGFjZShcIlBlcnNwZWN0aXZlXCIsXCJcIikudG9Mb3dlckNhc2UoKSxuLnByb3A9XCItXCIrbi5wZngrXCItdHJhbnNmb3JtXCIsITA7cmV0dXJuITF9KCksbi5pc0ZpcmVmb3g9bmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJmaXJlZm94XCIpPi0xLG4uZW5zdXJlQW5pbWF0aW9uRW5kPVwiXCIsXCJcIiE9PW4udmFycy5jb250cm9sc0NvbnRhaW5lciYmKG4uY29udHJvbHNDb250YWluZXI9JChuLnZhcnMuY29udHJvbHNDb250YWluZXIpLmxlbmd0aD4wJiYkKG4udmFycy5jb250cm9sc0NvbnRhaW5lcikpLFwiXCIhPT1uLnZhcnMubWFudWFsQ29udHJvbHMmJihuLm1hbnVhbENvbnRyb2xzPSQobi52YXJzLm1hbnVhbENvbnRyb2xzKS5sZW5ndGg+MCYmJChuLnZhcnMubWFudWFsQ29udHJvbHMpKSxcIlwiIT09bi52YXJzLmN1c3RvbURpcmVjdGlvbk5hdiYmKG4uY3VzdG9tRGlyZWN0aW9uTmF2PTI9PT0kKG4udmFycy5jdXN0b21EaXJlY3Rpb25OYXYpLmxlbmd0aCYmJChuLnZhcnMuY3VzdG9tRGlyZWN0aW9uTmF2KSksbi52YXJzLnJhbmRvbWl6ZSYmKG4uc2xpZGVzLnNvcnQoZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKS0uNX0pLG4uY29udGFpbmVyLmVtcHR5KCkuYXBwZW5kKG4uc2xpZGVzKSksbi5kb01hdGgoKSxuLnNldHVwKFwiaW5pdFwiKSxuLnZhcnMuY29udHJvbE5hdiYmZi5jb250cm9sTmF2LnNldHVwKCksbi52YXJzLmRpcmVjdGlvbk5hdiYmZi5kaXJlY3Rpb25OYXYuc2V0dXAoKSxuLnZhcnMua2V5Ym9hcmQmJigxPT09JChuLmNvbnRhaW5lclNlbGVjdG9yKS5sZW5ndGh8fG4udmFycy5tdWx0aXBsZUtleWJvYXJkKSYmJChkb2N1bWVudCkuYmluZChcImtleXVwXCIsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5rZXlDb2RlO2lmKCFuLmFuaW1hdGluZyYmKDM5PT09dHx8Mzc9PT10KSl7dmFyIGE9bi52YXJzLnJ0bD8zNz09PXQ/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOjM5PT09dCYmbi5nZXRUYXJnZXQoXCJwcmV2XCIpOjM5PT09dD9uLmdldFRhcmdldChcIm5leHRcIik6Mzc9PT10JiZuLmdldFRhcmdldChcInByZXZcIik7bi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uKX19KSxuLnZhcnMubW91c2V3aGVlbCYmbi5iaW5kKFwibW91c2V3aGVlbFwiLGZ1bmN0aW9uKGUsdCxhLGkpe2UucHJldmVudERlZmF1bHQoKTt2YXIgcj10PDA/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOm4uZ2V0VGFyZ2V0KFwicHJldlwiKTtuLmZsZXhBbmltYXRlKHIsbi52YXJzLnBhdXNlT25BY3Rpb24pfSksbi52YXJzLnBhdXNlUGxheSYmZi5wYXVzZVBsYXkuc2V0dXAoKSxuLnZhcnMuc2xpZGVzaG93JiZuLnZhcnMucGF1c2VJbnZpc2libGUmJmYucGF1c2VJbnZpc2libGUuaW5pdCgpLG4udmFycy5zbGlkZXNob3cmJihuLnZhcnMucGF1c2VPbkhvdmVyJiZuLmhvdmVyKGZ1bmN0aW9uKCl7bi5tYW51YWxQbGF5fHxuLm1hbnVhbFBhdXNlfHxuLnBhdXNlKCl9LGZ1bmN0aW9uKCl7bi5tYW51YWxQYXVzZXx8bi5tYW51YWxQbGF5fHxuLnN0b3BwZWR8fG4ucGxheSgpfSksbi52YXJzLnBhdXNlSW52aXNpYmxlJiZmLnBhdXNlSW52aXNpYmxlLmlzSGlkZGVuKCl8fChuLnZhcnMuaW5pdERlbGF5PjA/bi5zdGFydFRpbWVvdXQ9c2V0VGltZW91dChuLnBsYXksbi52YXJzLmluaXREZWxheSk6bi5wbGF5KCkpKSxtJiZmLmFzTmF2LnNldHVwKCkscyYmbi52YXJzLnRvdWNoJiZmLnRvdWNoKCksKCFwfHxwJiZuLnZhcnMuc21vb3RoSGVpZ2h0KSYmJCh3aW5kb3cpLmJpbmQoXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2UgZm9jdXNcIixmLnJlc2l6ZSksbi5maW5kKFwiaW1nXCIpLmF0dHIoXCJkcmFnZ2FibGVcIixcImZhbHNlXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLnZhcnMuc3RhcnQobil9LDIwMCl9LGFzTmF2OntzZXR1cDpmdW5jdGlvbigpe24uYXNOYXY9ITAsbi5hbmltYXRpbmdUbz1NYXRoLmZsb29yKG4uY3VycmVudFNsaWRlL24ubW92ZSksbi5jdXJyZW50SXRlbT1uLmN1cnJlbnRTbGlkZSxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKG4uY3VycmVudEl0ZW0pLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikscj8odC5fc2xpZGVyPW4sbi5zbGlkZXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5fZ2VzdHVyZT1uZXcgTVNHZXN0dXJlLGUuX2dlc3R1cmUudGFyZ2V0PWUsZS5hZGRFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyRG93blwiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLmN1cnJlbnRUYXJnZXQuX2dlc3R1cmUmJmUuY3VycmVudFRhcmdldC5fZ2VzdHVyZS5hZGRQb2ludGVyKGUucG9pbnRlcklkKX0sITEpLGUuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZVRhcFwiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdD0kKHRoaXMpLGE9dC5pbmRleCgpOyQobi52YXJzLmFzTmF2Rm9yKS5kYXRhKFwiZmxleHNsaWRlclwiKS5hbmltYXRpbmd8fHQuaGFzQ2xhc3MoXCJhY3RpdmVcIil8fChuLmRpcmVjdGlvbj1uLmN1cnJlbnRJdGVtPGE/XCJuZXh0XCI6XCJwcmV2XCIsbi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uLCExLCEwLCEwKSl9KX0pKTpuLnNsaWRlcy5vbihvLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdD0kKHRoaXMpLGE9dC5pbmRleCgpLHI7cj1uLnZhcnMucnRsPy0xKih0Lm9mZnNldCgpLnJpZ2h0LSQobikuc2Nyb2xsTGVmdCgpKTp0Lm9mZnNldCgpLmxlZnQtJChuKS5zY3JvbGxMZWZ0KCkscjw9MCYmdC5oYXNDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpP24uZmxleEFuaW1hdGUobi5nZXRUYXJnZXQoXCJwcmV2XCIpLCEwKTokKG4udmFycy5hc05hdkZvcikuZGF0YShcImZsZXhzbGlkZXJcIikuYW5pbWF0aW5nfHx0Lmhhc0NsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIil8fChuLmRpcmVjdGlvbj1uLmN1cnJlbnRJdGVtPGE/XCJuZXh0XCI6XCJwcmV2XCIsbi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uLCExLCEwLCEwKSl9KX19LGNvbnRyb2xOYXY6e3NldHVwOmZ1bmN0aW9uKCl7bi5tYW51YWxDb250cm9scz9mLmNvbnRyb2xOYXYuc2V0dXBNYW51YWwoKTpmLmNvbnRyb2xOYXYuc2V0dXBQYWdpbmcoKX0sc2V0dXBQYWdpbmc6ZnVuY3Rpb24oKXt2YXIgZT1cInRodW1ibmFpbHNcIj09PW4udmFycy5jb250cm9sTmF2P1wiY29udHJvbC10aHVtYnNcIjpcImNvbnRyb2wtcGFnaW5nXCIsdD0xLGEscjtpZihuLmNvbnRyb2xOYXZTY2FmZm9sZD0kKCc8b2wgY2xhc3M9XCInK2krXCJjb250cm9sLW5hdiBcIitpK2UrJ1wiPjwvb2w+Jyksbi5wYWdpbmdDb3VudD4xKWZvcih2YXIgcz0wO3M8bi5wYWdpbmdDb3VudDtzKyspe2lmKHI9bi5zbGlkZXMuZXEocyksdm9pZCAwPT09ci5hdHRyKFwiZGF0YS10aHVtYi1hbHRcIikmJnIuYXR0cihcImRhdGEtdGh1bWItYWx0XCIsXCJcIiksYT0kKFwiPGE+PC9hPlwiKS5hdHRyKFwiaHJlZlwiLFwiI1wiKS50ZXh0KHQpLFwidGh1bWJuYWlsc1wiPT09bi52YXJzLmNvbnRyb2xOYXYmJihhPSQoXCI8aW1nLz5cIikuYXR0cihcInNyY1wiLHIuYXR0cihcImRhdGEtdGh1bWJcIikpKSxcIlwiIT09ci5hdHRyKFwiZGF0YS10aHVtYi1hbHRcIikmJmEuYXR0cihcImFsdFwiLHIuYXR0cihcImRhdGEtdGh1bWItYWx0XCIpKSxcInRodW1ibmFpbHNcIj09PW4udmFycy5jb250cm9sTmF2JiYhMD09PW4udmFycy50aHVtYkNhcHRpb25zKXt2YXIgYz1yLmF0dHIoXCJkYXRhLXRodW1iY2FwdGlvblwiKTtpZihcIlwiIT09YyYmdm9pZCAwIT09Yyl7dmFyIGQ9JChcIjxzcGFuPjwvc3Bhbj5cIikuYWRkQ2xhc3MoaStcImNhcHRpb25cIikudGV4dChjKTthLmFwcGVuZChkKX19dmFyIHU9JChcIjxsaT5cIik7YS5hcHBlbmRUbyh1KSx1LmFwcGVuZChcIjwvbGk+XCIpLG4uY29udHJvbE5hdlNjYWZmb2xkLmFwcGVuZCh1KSx0Kyt9bi5jb250cm9sc0NvbnRhaW5lcj8kKG4uY29udHJvbHNDb250YWluZXIpLmFwcGVuZChuLmNvbnRyb2xOYXZTY2FmZm9sZCk6bi5hcHBlbmQobi5jb250cm9sTmF2U2NhZmZvbGQpLGYuY29udHJvbE5hdi5zZXQoKSxmLmNvbnRyb2xOYXYuYWN0aXZlKCksbi5jb250cm9sTmF2U2NhZmZvbGQuZGVsZWdhdGUoXCJhLCBpbWdcIixvLGZ1bmN0aW9uKGUpe2lmKGUucHJldmVudERlZmF1bHQoKSxcIlwiPT09bHx8bD09PWUudHlwZSl7dmFyIHQ9JCh0aGlzKSxhPW4uY29udHJvbE5hdi5pbmRleCh0KTt0Lmhhc0NsYXNzKGkrXCJhY3RpdmVcIil8fChuLmRpcmVjdGlvbj1hPm4uY3VycmVudFNsaWRlP1wibmV4dFwiOlwicHJldlwiLG4uZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbikpfVwiXCI9PT1sJiYobD1lLnR5cGUpLGYuc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpfSl9LHNldHVwTWFudWFsOmZ1bmN0aW9uKCl7bi5jb250cm9sTmF2PW4ubWFudWFsQ29udHJvbHMsZi5jb250cm9sTmF2LmFjdGl2ZSgpLG4uY29udHJvbE5hdi5iaW5kKG8sZnVuY3Rpb24oZSl7aWYoZS5wcmV2ZW50RGVmYXVsdCgpLFwiXCI9PT1sfHxsPT09ZS50eXBlKXt2YXIgdD0kKHRoaXMpLGE9bi5jb250cm9sTmF2LmluZGV4KHQpO3QuaGFzQ2xhc3MoaStcImFjdGl2ZVwiKXx8KGE+bi5jdXJyZW50U2xpZGU/bi5kaXJlY3Rpb249XCJuZXh0XCI6bi5kaXJlY3Rpb249XCJwcmV2XCIsbi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uKSl9XCJcIj09PWwmJihsPWUudHlwZSksZi5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCl9KX0sc2V0OmZ1bmN0aW9uKCl7dmFyIGU9XCJ0aHVtYm5haWxzXCI9PT1uLnZhcnMuY29udHJvbE5hdj9cImltZ1wiOlwiYVwiO24uY29udHJvbE5hdj0kKFwiLlwiK2krXCJjb250cm9sLW5hdiBsaSBcIitlLG4uY29udHJvbHNDb250YWluZXI/bi5jb250cm9sc0NvbnRhaW5lcjpuKX0sYWN0aXZlOmZ1bmN0aW9uKCl7bi5jb250cm9sTmF2LnJlbW92ZUNsYXNzKGkrXCJhY3RpdmVcIikuZXEobi5hbmltYXRpbmdUbykuYWRkQ2xhc3MoaStcImFjdGl2ZVwiKX0sdXBkYXRlOmZ1bmN0aW9uKGUsdCl7bi5wYWdpbmdDb3VudD4xJiZcImFkZFwiPT09ZT9uLmNvbnRyb2xOYXZTY2FmZm9sZC5hcHBlbmQoJCgnPGxpPjxhIGhyZWY9XCIjXCI+JytuLmNvdW50K1wiPC9hPjwvbGk+XCIpKToxPT09bi5wYWdpbmdDb3VudD9uLmNvbnRyb2xOYXZTY2FmZm9sZC5maW5kKFwibGlcIikucmVtb3ZlKCk6bi5jb250cm9sTmF2LmVxKHQpLmNsb3Nlc3QoXCJsaVwiKS5yZW1vdmUoKSxmLmNvbnRyb2xOYXYuc2V0KCksbi5wYWdpbmdDb3VudD4xJiZuLnBhZ2luZ0NvdW50IT09bi5jb250cm9sTmF2Lmxlbmd0aD9uLnVwZGF0ZSh0LGUpOmYuY29udHJvbE5hdi5hY3RpdmUoKX19LGRpcmVjdGlvbk5hdjp7c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZT0kKCc8dWwgY2xhc3M9XCInK2krJ2RpcmVjdGlvbi1uYXZcIj48bGkgY2xhc3M9XCInK2krJ25hdi1wcmV2XCI+PGEgY2xhc3M9XCInK2krJ3ByZXZcIiBocmVmPVwiI1wiPicrbi52YXJzLnByZXZUZXh0Kyc8L2E+PC9saT48bGkgY2xhc3M9XCInK2krJ25hdi1uZXh0XCI+PGEgY2xhc3M9XCInK2krJ25leHRcIiBocmVmPVwiI1wiPicrbi52YXJzLm5leHRUZXh0K1wiPC9hPjwvbGk+PC91bD5cIik7bi5jdXN0b21EaXJlY3Rpb25OYXY/bi5kaXJlY3Rpb25OYXY9bi5jdXN0b21EaXJlY3Rpb25OYXY6bi5jb250cm9sc0NvbnRhaW5lcj8oJChuLmNvbnRyb2xzQ29udGFpbmVyKS5hcHBlbmQoZSksbi5kaXJlY3Rpb25OYXY9JChcIi5cIitpK1wiZGlyZWN0aW9uLW5hdiBsaSBhXCIsbi5jb250cm9sc0NvbnRhaW5lcikpOihuLmFwcGVuZChlKSxuLmRpcmVjdGlvbk5hdj0kKFwiLlwiK2krXCJkaXJlY3Rpb24tbmF2IGxpIGFcIixuKSksZi5kaXJlY3Rpb25OYXYudXBkYXRlKCksbi5kaXJlY3Rpb25OYXYuYmluZChvLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdDtcIlwiIT09bCYmbCE9PWUudHlwZXx8KHQ9JCh0aGlzKS5oYXNDbGFzcyhpK1wibmV4dFwiKT9uLmdldFRhcmdldChcIm5leHRcIik6bi5nZXRUYXJnZXQoXCJwcmV2XCIpLG4uZmxleEFuaW1hdGUodCxuLnZhcnMucGF1c2VPbkFjdGlvbikpLFwiXCI9PT1sJiYobD1lLnR5cGUpLGYuc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpfSl9LHVwZGF0ZTpmdW5jdGlvbigpe3ZhciBlPWkrXCJkaXNhYmxlZFwiOzE9PT1uLnBhZ2luZ0NvdW50P24uZGlyZWN0aW9uTmF2LmFkZENsYXNzKGUpLmF0dHIoXCJ0YWJpbmRleFwiLFwiLTFcIik6bi52YXJzLmFuaW1hdGlvbkxvb3A/bi5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZSkucmVtb3ZlQXR0cihcInRhYmluZGV4XCIpOjA9PT1uLmFuaW1hdGluZ1RvP24uZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLmZpbHRlcihcIi5cIitpK1wicHJldlwiKS5hZGRDbGFzcyhlKS5hdHRyKFwidGFiaW5kZXhcIixcIi0xXCIpOm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/bi5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZSkuZmlsdGVyKFwiLlwiK2krXCJuZXh0XCIpLmFkZENsYXNzKGUpLmF0dHIoXCJ0YWJpbmRleFwiLFwiLTFcIik6bi5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZSkucmVtb3ZlQXR0cihcInRhYmluZGV4XCIpfX0scGF1c2VQbGF5OntzZXR1cDpmdW5jdGlvbigpe3ZhciBlPSQoJzxkaXYgY2xhc3M9XCInK2krJ3BhdXNlcGxheVwiPjxhIGhyZWY9XCIjXCI+PC9hPjwvZGl2PicpO24uY29udHJvbHNDb250YWluZXI/KG4uY29udHJvbHNDb250YWluZXIuYXBwZW5kKGUpLG4ucGF1c2VQbGF5PSQoXCIuXCIraStcInBhdXNlcGxheSBhXCIsbi5jb250cm9sc0NvbnRhaW5lcikpOihuLmFwcGVuZChlKSxuLnBhdXNlUGxheT0kKFwiLlwiK2krXCJwYXVzZXBsYXkgYVwiLG4pKSxmLnBhdXNlUGxheS51cGRhdGUobi52YXJzLnNsaWRlc2hvdz9pK1wicGF1c2VcIjppK1wicGxheVwiKSxuLnBhdXNlUGxheS5iaW5kKG8sZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLFwiXCIhPT1sJiZsIT09ZS50eXBlfHwoJCh0aGlzKS5oYXNDbGFzcyhpK1wicGF1c2VcIik/KG4ubWFudWFsUGF1c2U9ITAsbi5tYW51YWxQbGF5PSExLG4ucGF1c2UoKSk6KG4ubWFudWFsUGF1c2U9ITEsbi5tYW51YWxQbGF5PSEwLG4ucGxheSgpKSksXCJcIj09PWwmJihsPWUudHlwZSksZi5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCl9KX0sdXBkYXRlOmZ1bmN0aW9uKGUpe1wicGxheVwiPT09ZT9uLnBhdXNlUGxheS5yZW1vdmVDbGFzcyhpK1wicGF1c2VcIikuYWRkQ2xhc3MoaStcInBsYXlcIikuaHRtbChuLnZhcnMucGxheVRleHQpOm4ucGF1c2VQbGF5LnJlbW92ZUNsYXNzKGkrXCJwbGF5XCIpLmFkZENsYXNzKGkrXCJwYXVzZVwiKS5odG1sKG4udmFycy5wYXVzZVRleHQpfX0sdG91Y2g6ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksbi5hbmltYXRpbmc/ZS5wcmV2ZW50RGVmYXVsdCgpOihuLnBhdXNlKCksdC5fZ2VzdHVyZS5hZGRQb2ludGVyKGUucG9pbnRlcklkKSx3PTAsYz1kP24uaDpuLncsZj1OdW1iZXIobmV3IERhdGUpLGw9diYmdSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdD8wOnYmJnU/bi5saW1pdC0obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uYW5pbWF0aW5nVG86diYmbi5jdXJyZW50U2xpZGU9PT1uLmxhc3Q/bi5saW1pdDp2PyhuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5jdXJyZW50U2xpZGU6dT8obi5sYXN0LW4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmM6KG4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmMpfWZ1bmN0aW9uIGEoZSl7ZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgYT1lLnRhcmdldC5fc2xpZGVyO2lmKGEpe3ZhciBuPS1lLnRyYW5zbGF0aW9uWCxpPS1lLnRyYW5zbGF0aW9uWTtpZih3Kz1kP2k6bixtPShhLnZhcnMucnRsPy0xOjEpKncseD1kP01hdGguYWJzKHcpPE1hdGguYWJzKC1uKTpNYXRoLmFicyh3KTxNYXRoLmFicygtaSksZS5kZXRhaWw9PT1lLk1TR0VTVFVSRV9GTEFHX0lORVJUSUEpcmV0dXJuIHZvaWQgc2V0SW1tZWRpYXRlKGZ1bmN0aW9uKCl7dC5fZ2VzdHVyZS5zdG9wKCl9KTsoIXh8fE51bWJlcihuZXcgRGF0ZSktZj41MDApJiYoZS5wcmV2ZW50RGVmYXVsdCgpLCFwJiZhLnRyYW5zaXRpb25zJiYoYS52YXJzLmFuaW1hdGlvbkxvb3B8fChtPXcvKDA9PT1hLmN1cnJlbnRTbGlkZSYmdzwwfHxhLmN1cnJlbnRTbGlkZT09PWEubGFzdCYmdz4wP01hdGguYWJzKHcpL2MrMjoxKSksYS5zZXRQcm9wcyhsK20sXCJzZXRUb3VjaFwiKSkpfX1mdW5jdGlvbiBpKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIHQ9ZS50YXJnZXQuX3NsaWRlcjtpZih0KXtpZih0LmFuaW1hdGluZ1RvPT09dC5jdXJyZW50U2xpZGUmJiF4JiZudWxsIT09bSl7dmFyIGE9dT8tbTptLG49YT4wP3QuZ2V0VGFyZ2V0KFwibmV4dFwiKTp0LmdldFRhcmdldChcInByZXZcIik7dC5jYW5BZHZhbmNlKG4pJiYoTnVtYmVyKG5ldyBEYXRlKS1mPDU1MCYmTWF0aC5hYnMoYSk+NTB8fE1hdGguYWJzKGEpPmMvMik/dC5mbGV4QW5pbWF0ZShuLHQudmFycy5wYXVzZU9uQWN0aW9uKTpwfHx0LmZsZXhBbmltYXRlKHQuY3VycmVudFNsaWRlLHQudmFycy5wYXVzZU9uQWN0aW9uLCEwKX1zPW51bGwsbz1udWxsLG09bnVsbCxsPW51bGwsdz0wfX12YXIgcyxvLGwsYyxtLGYsZyxoLFMseD0hMSx5PTAsYj0wLHc9MDtyPyh0LnN0eWxlLm1zVG91Y2hBY3Rpb249XCJub25lXCIsdC5fZ2VzdHVyZT1uZXcgTVNHZXN0dXJlLHQuX2dlc3R1cmUudGFyZ2V0PXQsdC5hZGRFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyRG93blwiLGUsITEpLHQuX3NsaWRlcj1uLHQuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZUNoYW5nZVwiLGEsITEpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZUVuZFwiLGksITEpKTooZz1mdW5jdGlvbihlKXtuLmFuaW1hdGluZz9lLnByZXZlbnREZWZhdWx0KCk6KHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZHx8MT09PWUudG91Y2hlcy5sZW5ndGgpJiYobi5wYXVzZSgpLGM9ZD9uLmg6bi53LGY9TnVtYmVyKG5ldyBEYXRlKSx5PWUudG91Y2hlc1swXS5wYWdlWCxiPWUudG91Y2hlc1swXS5wYWdlWSxsPXYmJnUmJm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/MDp2JiZ1P24ubGltaXQtKG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmFuaW1hdGluZ1RvOnYmJm4uY3VycmVudFNsaWRlPT09bi5sYXN0P24ubGltaXQ6dj8obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uY3VycmVudFNsaWRlOnU/KG4ubGFzdC1uLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSpjOihuLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSpjLHM9ZD9iOnksbz1kP3k6Yix0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixoLCExKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLFMsITEpKX0saD1mdW5jdGlvbihlKXt5PWUudG91Y2hlc1swXS5wYWdlWCxiPWUudG91Y2hlc1swXS5wYWdlWSxtPWQ/cy1iOihuLnZhcnMucnRsPy0xOjEpKihzLXkpLHg9ZD9NYXRoLmFicyhtKTxNYXRoLmFicyh5LW8pOk1hdGguYWJzKG0pPE1hdGguYWJzKGItbyk7dmFyIHQ9NTAwOygheHx8TnVtYmVyKG5ldyBEYXRlKS1mPjUwMCkmJihlLnByZXZlbnREZWZhdWx0KCksIXAmJm4udHJhbnNpdGlvbnMmJihuLnZhcnMuYW5pbWF0aW9uTG9vcHx8KG0vPTA9PT1uLmN1cnJlbnRTbGlkZSYmbTwwfHxuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCYmbT4wP01hdGguYWJzKG0pL2MrMjoxKSxuLnNldFByb3BzKGwrbSxcInNldFRvdWNoXCIpKSl9LFM9ZnVuY3Rpb24oZSl7aWYodC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsaCwhMSksbi5hbmltYXRpbmdUbz09PW4uY3VycmVudFNsaWRlJiYheCYmbnVsbCE9PW0pe3ZhciBhPXU/LW06bSxpPWE+MD9uLmdldFRhcmdldChcIm5leHRcIik6bi5nZXRUYXJnZXQoXCJwcmV2XCIpO24uY2FuQWR2YW5jZShpKSYmKE51bWJlcihuZXcgRGF0ZSktZjw1NTAmJk1hdGguYWJzKGEpPjUwfHxNYXRoLmFicyhhKT5jLzIpP24uZmxleEFuaW1hdGUoaSxuLnZhcnMucGF1c2VPbkFjdGlvbik6cHx8bi5mbGV4QW5pbWF0ZShuLmN1cnJlbnRTbGlkZSxuLnZhcnMucGF1c2VPbkFjdGlvbiwhMCl9dC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixTLCExKSxzPW51bGwsbz1udWxsLG09bnVsbCxsPW51bGx9LHQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixnLCExKSl9LHJlc2l6ZTpmdW5jdGlvbigpeyFuLmFuaW1hdGluZyYmbi5pcyhcIjp2aXNpYmxlXCIpJiYodnx8bi5kb01hdGgoKSxwP2Yuc21vb3RoSGVpZ2h0KCk6dj8obi5zbGlkZXMud2lkdGgobi5jb21wdXRlZFcpLG4udXBkYXRlKG4ucGFnaW5nQ291bnQpLG4uc2V0UHJvcHMoKSk6ZD8obi52aWV3cG9ydC5oZWlnaHQobi5oKSxuLnNldFByb3BzKG4uaCxcInNldFRvdGFsXCIpKToobi52YXJzLnNtb290aEhlaWdodCYmZi5zbW9vdGhIZWlnaHQoKSxuLm5ld1NsaWRlcy53aWR0aChuLmNvbXB1dGVkVyksbi5zZXRQcm9wcyhuLmNvbXB1dGVkVyxcInNldFRvdGFsXCIpKSl9LHNtb290aEhlaWdodDpmdW5jdGlvbihlKXtpZighZHx8cCl7dmFyIHQ9cD9uOm4udmlld3BvcnQ7ZT90LmFuaW1hdGUoe2hlaWdodDpuLnNsaWRlcy5lcShuLmFuaW1hdGluZ1RvKS5pbm5lckhlaWdodCgpfSxlKTp0LmlubmVySGVpZ2h0KG4uc2xpZGVzLmVxKG4uYW5pbWF0aW5nVG8pLmlubmVySGVpZ2h0KCkpfX0sc3luYzpmdW5jdGlvbihlKXt2YXIgdD0kKG4udmFycy5zeW5jKS5kYXRhKFwiZmxleHNsaWRlclwiKSxhPW4uYW5pbWF0aW5nVG87c3dpdGNoKGUpe2Nhc2VcImFuaW1hdGVcIjp0LmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24sITEsITApO2JyZWFrO2Nhc2VcInBsYXlcIjp0LnBsYXlpbmd8fHQuYXNOYXZ8fHQucGxheSgpO2JyZWFrO2Nhc2VcInBhdXNlXCI6dC5wYXVzZSgpO2JyZWFrfX0sdW5pcXVlSUQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZmlsdGVyKFwiW2lkXVwiKS5hZGQoZS5maW5kKFwiW2lkXVwiKSkuZWFjaChmdW5jdGlvbigpe3ZhciBlPSQodGhpcyk7ZS5hdHRyKFwiaWRcIixlLmF0dHIoXCJpZFwiKStcIl9jbG9uZVwiKX0pLGV9LHBhdXNlSW52aXNpYmxlOnt2aXNQcm9wOm51bGwsaW5pdDpmdW5jdGlvbigpe3ZhciBlPWYucGF1c2VJbnZpc2libGUuZ2V0SGlkZGVuUHJvcCgpO2lmKGUpe3ZhciB0PWUucmVwbGFjZSgvW0h8aF1pZGRlbi8sXCJcIikrXCJ2aXNpYmlsaXR5Y2hhbmdlXCI7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0LGZ1bmN0aW9uKCl7Zi5wYXVzZUludmlzaWJsZS5pc0hpZGRlbigpP24uc3RhcnRUaW1lb3V0P2NsZWFyVGltZW91dChuLnN0YXJ0VGltZW91dCk6bi5wYXVzZSgpOm4uc3RhcnRlZD9uLnBsYXkoKTpuLnZhcnMuaW5pdERlbGF5PjA/c2V0VGltZW91dChuLnBsYXksbi52YXJzLmluaXREZWxheSk6bi5wbGF5KCl9KX19LGlzSGlkZGVuOmZ1bmN0aW9uKCl7dmFyIGU9Zi5wYXVzZUludmlzaWJsZS5nZXRIaWRkZW5Qcm9wKCk7cmV0dXJuISFlJiZkb2N1bWVudFtlXX0sZ2V0SGlkZGVuUHJvcDpmdW5jdGlvbigpe3ZhciBlPVtcIndlYmtpdFwiLFwibW96XCIsXCJtc1wiLFwib1wiXTtpZihcImhpZGRlblwiaW4gZG9jdW1lbnQpcmV0dXJuXCJoaWRkZW5cIjtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKylpZihlW3RdK1wiSGlkZGVuXCJpbiBkb2N1bWVudClyZXR1cm4gZVt0XStcIkhpZGRlblwiO3JldHVybiBudWxsfX0sc2V0VG9DbGVhcldhdGNoZWRFdmVudDpmdW5jdGlvbigpe2NsZWFyVGltZW91dChjKSxjPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsPVwiXCJ9LDNlMyl9fSxuLmZsZXhBbmltYXRlPWZ1bmN0aW9uKGUsdCxhLHIsbyl7aWYobi52YXJzLmFuaW1hdGlvbkxvb3B8fGU9PT1uLmN1cnJlbnRTbGlkZXx8KG4uZGlyZWN0aW9uPWU+bi5jdXJyZW50U2xpZGU/XCJuZXh0XCI6XCJwcmV2XCIpLG0mJjE9PT1uLnBhZ2luZ0NvdW50JiYobi5kaXJlY3Rpb249bi5jdXJyZW50SXRlbTxlP1wibmV4dFwiOlwicHJldlwiKSwhbi5hbmltYXRpbmcmJihuLmNhbkFkdmFuY2UoZSxvKXx8YSkmJm4uaXMoXCI6dmlzaWJsZVwiKSl7aWYobSYmcil7dmFyIGw9JChuLnZhcnMuYXNOYXZGb3IpLmRhdGEoXCJmbGV4c2xpZGVyXCIpO2lmKG4uYXRFbmQ9MD09PWV8fGU9PT1uLmNvdW50LTEsbC5mbGV4QW5pbWF0ZShlLCEwLCExLCEwLG8pLG4uZGlyZWN0aW9uPW4uY3VycmVudEl0ZW08ZT9cIm5leHRcIjpcInByZXZcIixsLmRpcmVjdGlvbj1uLmRpcmVjdGlvbixNYXRoLmNlaWwoKGUrMSkvbi52aXNpYmxlKS0xPT09bi5jdXJyZW50U2xpZGV8fDA9PT1lKXJldHVybiBuLmN1cnJlbnRJdGVtPWUsbi5zbGlkZXMucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKS5lcShlKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLCExO24uY3VycmVudEl0ZW09ZSxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKGUpLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIiksZT1NYXRoLmZsb29yKGUvbi52aXNpYmxlKX1pZihuLmFuaW1hdGluZz0hMCxuLmFuaW1hdGluZ1RvPWUsdCYmbi5wYXVzZSgpLG4udmFycy5iZWZvcmUobiksbi5zeW5jRXhpc3RzJiYhbyYmZi5zeW5jKFwiYW5pbWF0ZVwiKSxuLnZhcnMuY29udHJvbE5hdiYmZi5jb250cm9sTmF2LmFjdGl2ZSgpLHZ8fG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEoZSkuYWRkQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKSxuLmF0RW5kPTA9PT1lfHxlPT09bi5sYXN0LG4udmFycy5kaXJlY3Rpb25OYXYmJmYuZGlyZWN0aW9uTmF2LnVwZGF0ZSgpLGU9PT1uLmxhc3QmJihuLnZhcnMuZW5kKG4pLG4udmFycy5hbmltYXRpb25Mb29wfHxuLnBhdXNlKCkpLHApcz8obi5zbGlkZXMuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7b3BhY2l0eTowLHpJbmRleDoxfSksbi5zbGlkZXMuZXEoZSkuY3NzKHtvcGFjaXR5OjEsekluZGV4OjJ9KSxuLndyYXB1cChjKSk6KG4uc2xpZGVzLmVxKG4uY3VycmVudFNsaWRlKS5jc3Moe3pJbmRleDoxfSkuYW5pbWF0ZSh7b3BhY2l0eTowfSxuLnZhcnMuYW5pbWF0aW9uU3BlZWQsbi52YXJzLmVhc2luZyksbi5zbGlkZXMuZXEoZSkuY3NzKHt6SW5kZXg6Mn0pLmFuaW1hdGUoe29wYWNpdHk6MX0sbi52YXJzLmFuaW1hdGlvblNwZWVkLG4udmFycy5lYXNpbmcsbi53cmFwdXApKTtlbHNle3ZhciBjPWQ/bi5zbGlkZXMuZmlsdGVyKFwiOmZpcnN0XCIpLmhlaWdodCgpOm4uY29tcHV0ZWRXLGcsaCxTO3Y/KGc9bi52YXJzLml0ZW1NYXJnaW4sUz0obi5pdGVtVytnKSpuLm1vdmUqbi5hbmltYXRpbmdUbyxoPVM+bi5saW1pdCYmMSE9PW4udmlzaWJsZT9uLmxpbWl0OlMpOmg9MD09PW4uY3VycmVudFNsaWRlJiZlPT09bi5jb3VudC0xJiZuLnZhcnMuYW5pbWF0aW9uTG9vcCYmXCJuZXh0XCIhPT1uLmRpcmVjdGlvbj91PyhuLmNvdW50K24uY2xvbmVPZmZzZXQpKmM6MDpuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCYmMD09PWUmJm4udmFycy5hbmltYXRpb25Mb29wJiZcInByZXZcIiE9PW4uZGlyZWN0aW9uP3U/MDoobi5jb3VudCsxKSpjOnU/KG4uY291bnQtMS1lK24uY2xvbmVPZmZzZXQpKmM6KGUrbi5jbG9uZU9mZnNldCkqYyxuLnNldFByb3BzKGgsXCJcIixuLnZhcnMuYW5pbWF0aW9uU3BlZWQpLG4udHJhbnNpdGlvbnM/KG4udmFycy5hbmltYXRpb25Mb29wJiZuLmF0RW5kfHwobi5hbmltYXRpbmc9ITEsbi5jdXJyZW50U2xpZGU9bi5hbmltYXRpbmdUbyksbi5jb250YWluZXIudW5iaW5kKFwid2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kXCIpLG4uY29udGFpbmVyLmJpbmQoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmRcIixmdW5jdGlvbigpe2NsZWFyVGltZW91dChuLmVuc3VyZUFuaW1hdGlvbkVuZCksbi53cmFwdXAoYyl9KSxjbGVhclRpbWVvdXQobi5lbnN1cmVBbmltYXRpb25FbmQpLG4uZW5zdXJlQW5pbWF0aW9uRW5kPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLndyYXB1cChjKX0sbi52YXJzLmFuaW1hdGlvblNwZWVkKzEwMCkpOm4uY29udGFpbmVyLmFuaW1hdGUobi5hcmdzLG4udmFycy5hbmltYXRpb25TcGVlZCxuLnZhcnMuZWFzaW5nLGZ1bmN0aW9uKCl7bi53cmFwdXAoYyl9KX1uLnZhcnMuc21vb3RoSGVpZ2h0JiZmLnNtb290aEhlaWdodChuLnZhcnMuYW5pbWF0aW9uU3BlZWQpfX0sbi53cmFwdXA9ZnVuY3Rpb24oZSl7cHx8dnx8KDA9PT1uLmN1cnJlbnRTbGlkZSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdCYmbi52YXJzLmFuaW1hdGlvbkxvb3A/bi5zZXRQcm9wcyhlLFwianVtcEVuZFwiKTpuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCYmMD09PW4uYW5pbWF0aW5nVG8mJm4udmFycy5hbmltYXRpb25Mb29wJiZuLnNldFByb3BzKGUsXCJqdW1wU3RhcnRcIikpLG4uYW5pbWF0aW5nPSExLG4uY3VycmVudFNsaWRlPW4uYW5pbWF0aW5nVG8sbi52YXJzLmFmdGVyKG4pfSxuLmFuaW1hdGVTbGlkZXM9ZnVuY3Rpb24oKXshbi5hbmltYXRpbmcmJmUmJm4uZmxleEFuaW1hdGUobi5nZXRUYXJnZXQoXCJuZXh0XCIpKX0sbi5wYXVzZT1mdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwobi5hbmltYXRlZFNsaWRlcyksbi5hbmltYXRlZFNsaWRlcz1udWxsLG4ucGxheWluZz0hMSxuLnZhcnMucGF1c2VQbGF5JiZmLnBhdXNlUGxheS51cGRhdGUoXCJwbGF5XCIpLG4uc3luY0V4aXN0cyYmZi5zeW5jKFwicGF1c2VcIil9LG4ucGxheT1mdW5jdGlvbigpe24ucGxheWluZyYmY2xlYXJJbnRlcnZhbChuLmFuaW1hdGVkU2xpZGVzKSxuLmFuaW1hdGVkU2xpZGVzPW4uYW5pbWF0ZWRTbGlkZXN8fHNldEludGVydmFsKG4uYW5pbWF0ZVNsaWRlcyxuLnZhcnMuc2xpZGVzaG93U3BlZWQpLG4uc3RhcnRlZD1uLnBsYXlpbmc9ITAsbi52YXJzLnBhdXNlUGxheSYmZi5wYXVzZVBsYXkudXBkYXRlKFwicGF1c2VcIiksbi5zeW5jRXhpc3RzJiZmLnN5bmMoXCJwbGF5XCIpfSxuLnN0b3A9ZnVuY3Rpb24oKXtuLnBhdXNlKCksbi5zdG9wcGVkPSEwfSxuLmNhbkFkdmFuY2U9ZnVuY3Rpb24oZSx0KXt2YXIgYT1tP24ucGFnaW5nQ291bnQtMTpuLmxhc3Q7cmV0dXJuISF0fHwoISghbXx8bi5jdXJyZW50SXRlbSE9PW4uY291bnQtMXx8MCE9PWV8fFwicHJldlwiIT09bi5kaXJlY3Rpb24pfHwoIW18fDAhPT1uLmN1cnJlbnRJdGVtfHxlIT09bi5wYWdpbmdDb3VudC0xfHxcIm5leHRcIj09PW4uZGlyZWN0aW9uKSYmKCEoZT09PW4uY3VycmVudFNsaWRlJiYhbSkmJighIW4udmFycy5hbmltYXRpb25Mb29wfHwoIW4uYXRFbmR8fDAhPT1uLmN1cnJlbnRTbGlkZXx8ZSE9PWF8fFwibmV4dFwiPT09bi5kaXJlY3Rpb24pJiYoIW4uYXRFbmR8fG4uY3VycmVudFNsaWRlIT09YXx8MCE9PWV8fFwibmV4dFwiIT09bi5kaXJlY3Rpb24pKSkpfSxuLmdldFRhcmdldD1mdW5jdGlvbihlKXtyZXR1cm4gbi5kaXJlY3Rpb249ZSxcIm5leHRcIj09PWU/bi5jdXJyZW50U2xpZGU9PT1uLmxhc3Q/MDpuLmN1cnJlbnRTbGlkZSsxOjA9PT1uLmN1cnJlbnRTbGlkZT9uLmxhc3Q6bi5jdXJyZW50U2xpZGUtMX0sbi5zZXRQcm9wcz1mdW5jdGlvbihlLHQsYSl7dmFyIGk9ZnVuY3Rpb24oKXt2YXIgYT1lfHwobi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uYW5pbWF0aW5nVG87cmV0dXJuIGZ1bmN0aW9uKCl7aWYodilyZXR1cm5cInNldFRvdWNoXCI9PT10P2U6dSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdD8wOnU/bi5saW1pdC0obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uYW5pbWF0aW5nVG86bi5hbmltYXRpbmdUbz09PW4ubGFzdD9uLmxpbWl0OmE7c3dpdGNoKHQpe2Nhc2VcInNldFRvdGFsXCI6cmV0dXJuIHU/KG4uY291bnQtMS1uLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSplOihuLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSplO2Nhc2VcInNldFRvdWNoXCI6cmV0dXJuIGU7Y2FzZVwianVtcEVuZFwiOnJldHVybiB1P2U6bi5jb3VudCplO2Nhc2VcImp1bXBTdGFydFwiOnJldHVybiB1P24uY291bnQqZTplO2RlZmF1bHQ6cmV0dXJuIGV9fSgpKihuLnZhcnMucnRsPzE6LTEpK1wicHhcIn0oKTtuLnRyYW5zaXRpb25zJiYoaT1uLmlzRmlyZWZveD9kP1widHJhbnNsYXRlM2QoMCxcIitpK1wiLDApXCI6XCJ0cmFuc2xhdGUzZChcIitwYXJzZUludChpKStcInB4LDAsMClcIjpkP1widHJhbnNsYXRlM2QoMCxcIitpK1wiLDApXCI6XCJ0cmFuc2xhdGUzZChcIisobi52YXJzLnJ0bD8tMToxKSpwYXJzZUludChpKStcInB4LDAsMClcIixhPXZvaWQgMCE9PWE/YS8xZTMrXCJzXCI6XCIwc1wiLG4uY29udGFpbmVyLmNzcyhcIi1cIituLnBmeCtcIi10cmFuc2l0aW9uLWR1cmF0aW9uXCIsYSksbi5jb250YWluZXIuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLGEpKSxuLmFyZ3Nbbi5wcm9wXT1pLChuLnRyYW5zaXRpb25zfHx2b2lkIDA9PT1hKSYmbi5jb250YWluZXIuY3NzKG4uYXJncyksbi5jb250YWluZXIuY3NzKFwidHJhbnNmb3JtXCIsaSl9LG4uc2V0dXA9ZnVuY3Rpb24oZSl7aWYocCluLnZhcnMucnRsP24uc2xpZGVzLmNzcyh7d2lkdGg6XCIxMDAlXCIsZmxvYXQ6XCJyaWdodFwiLG1hcmdpbkxlZnQ6XCItMTAwJVwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIn0pOm4uc2xpZGVzLmNzcyh7d2lkdGg6XCIxMDAlXCIsZmxvYXQ6XCJsZWZ0XCIsbWFyZ2luUmlnaHQ6XCItMTAwJVwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIn0pLFwiaW5pdFwiPT09ZSYmKHM/bi5zbGlkZXMuY3NzKHtvcGFjaXR5OjAsZGlzcGxheTpcImJsb2NrXCIsd2Via2l0VHJhbnNpdGlvbjpcIm9wYWNpdHkgXCIrbi52YXJzLmFuaW1hdGlvblNwZWVkLzFlMytcInMgZWFzZVwiLHpJbmRleDoxfSkuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7b3BhY2l0eToxLHpJbmRleDoyfSk6MD09bi52YXJzLmZhZGVGaXJzdFNsaWRlP24uc2xpZGVzLmNzcyh7b3BhY2l0eTowLGRpc3BsYXk6XCJibG9ja1wiLHpJbmRleDoxfSkuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7ekluZGV4OjJ9KS5jc3Moe29wYWNpdHk6MX0pOm4uc2xpZGVzLmNzcyh7b3BhY2l0eTowLGRpc3BsYXk6XCJibG9ja1wiLHpJbmRleDoxfSkuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7ekluZGV4OjJ9KS5hbmltYXRlKHtvcGFjaXR5OjF9LG4udmFycy5hbmltYXRpb25TcGVlZCxuLnZhcnMuZWFzaW5nKSksbi52YXJzLnNtb290aEhlaWdodCYmZi5zbW9vdGhIZWlnaHQoKTtlbHNle3ZhciB0LGE7XCJpbml0XCI9PT1lJiYobi52aWV3cG9ydD0kKCc8ZGl2IGNsYXNzPVwiJytpKyd2aWV3cG9ydFwiPjwvZGl2PicpLmNzcyh7b3ZlcmZsb3c6XCJoaWRkZW5cIixwb3NpdGlvbjpcInJlbGF0aXZlXCJ9KS5hcHBlbmRUbyhuKS5hcHBlbmQobi5jb250YWluZXIpLG4uY2xvbmVDb3VudD0wLG4uY2xvbmVPZmZzZXQ9MCx1JiYoYT0kLm1ha2VBcnJheShuLnNsaWRlcykucmV2ZXJzZSgpLG4uc2xpZGVzPSQoYSksbi5jb250YWluZXIuZW1wdHkoKS5hcHBlbmQobi5zbGlkZXMpKSksbi52YXJzLmFuaW1hdGlvbkxvb3AmJiF2JiYobi5jbG9uZUNvdW50PTIsbi5jbG9uZU9mZnNldD0xLFwiaW5pdFwiIT09ZSYmbi5jb250YWluZXIuZmluZChcIi5jbG9uZVwiKS5yZW1vdmUoKSxuLmNvbnRhaW5lci5hcHBlbmQoZi51bmlxdWVJRChuLnNsaWRlcy5maXJzdCgpLmNsb25lKCkuYWRkQ2xhc3MoXCJjbG9uZVwiKSkuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpKS5wcmVwZW5kKGYudW5pcXVlSUQobi5zbGlkZXMubGFzdCgpLmNsb25lKCkuYWRkQ2xhc3MoXCJjbG9uZVwiKSkuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpKSksbi5uZXdTbGlkZXM9JChuLnZhcnMuc2VsZWN0b3IsbiksdD11P24uY291bnQtMS1uLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0Om4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQsZCYmIXY/KG4uY29udGFpbmVyLmhlaWdodCgyMDAqKG4uY291bnQrbi5jbG9uZUNvdW50KStcIiVcIikuY3NzKFwicG9zaXRpb25cIixcImFic29sdXRlXCIpLndpZHRoKFwiMTAwJVwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5uZXdTbGlkZXMuY3NzKHtkaXNwbGF5OlwiYmxvY2tcIn0pLG4uZG9NYXRoKCksbi52aWV3cG9ydC5oZWlnaHQobi5oKSxuLnNldFByb3BzKHQqbi5oLFwiaW5pdFwiKX0sXCJpbml0XCI9PT1lPzEwMDowKSk6KG4uY29udGFpbmVyLndpZHRoKDIwMCoobi5jb3VudCtuLmNsb25lQ291bnQpK1wiJVwiKSxuLnNldFByb3BzKHQqbi5jb21wdXRlZFcsXCJpbml0XCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLmRvTWF0aCgpLG4udmFycy5ydGwmJm4uaXNGaXJlZm94P24ubmV3U2xpZGVzLmNzcyh7d2lkdGg6bi5jb21wdXRlZFcsbWFyZ2luUmlnaHQ6bi5jb21wdXRlZE0sZmxvYXQ6XCJyaWdodFwiLGRpc3BsYXk6XCJibG9ja1wifSk6bi5uZXdTbGlkZXMuY3NzKHt3aWR0aDpuLmNvbXB1dGVkVyxtYXJnaW5SaWdodDpuLmNvbXB1dGVkTSxmbG9hdDpcImxlZnRcIixkaXNwbGF5OlwiYmxvY2tcIn0pLG4udmFycy5zbW9vdGhIZWlnaHQmJmYuc21vb3RoSGVpZ2h0KCl9LFwiaW5pdFwiPT09ZT8xMDA6MCkpfXZ8fG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEobi5jdXJyZW50U2xpZGUpLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIiksbi52YXJzLmluaXQobil9LG4uZG9NYXRoPWZ1bmN0aW9uKCl7dmFyIGU9bi5zbGlkZXMuZmlyc3QoKSx0PW4udmFycy5pdGVtTWFyZ2luLGE9bi52YXJzLm1pbkl0ZW1zLGk9bi52YXJzLm1heEl0ZW1zO24udz12b2lkIDA9PT1uLnZpZXdwb3J0P24ud2lkdGgoKTpuLnZpZXdwb3J0LndpZHRoKCksbi5pc0ZpcmVmb3gmJihuLnc9bi53aWR0aCgpKSxuLmg9ZS5oZWlnaHQoKSxuLmJveFBhZGRpbmc9ZS5vdXRlcldpZHRoKCktZS53aWR0aCgpLHY/KG4uaXRlbVQ9bi52YXJzLml0ZW1XaWR0aCt0LG4uaXRlbU09dCxuLm1pblc9YT9hKm4uaXRlbVQ6bi53LG4ubWF4Vz1pP2kqbi5pdGVtVC10Om4udyxuLml0ZW1XPW4ubWluVz5uLnc/KG4udy10KihhLTEpKS9hOm4ubWF4VzxuLnc/KG4udy10KihpLTEpKS9pOm4udmFycy5pdGVtV2lkdGg+bi53P24udzpuLnZhcnMuaXRlbVdpZHRoLG4udmlzaWJsZT1NYXRoLmZsb29yKG4udy9uLml0ZW1XKSxuLm1vdmU9bi52YXJzLm1vdmU+MCYmbi52YXJzLm1vdmU8bi52aXNpYmxlP24udmFycy5tb3ZlOm4udmlzaWJsZSxuLnBhZ2luZ0NvdW50PU1hdGguY2VpbCgobi5jb3VudC1uLnZpc2libGUpL24ubW92ZSsxKSxuLmxhc3Q9bi5wYWdpbmdDb3VudC0xLG4ubGltaXQ9MT09PW4ucGFnaW5nQ291bnQ/MDpuLnZhcnMuaXRlbVdpZHRoPm4udz9uLml0ZW1XKihuLmNvdW50LTEpK3QqKG4uY291bnQtMSk6KG4uaXRlbVcrdCkqbi5jb3VudC1uLnctdCk6KG4uaXRlbVc9bi53LG4uaXRlbU09dCxuLnBhZ2luZ0NvdW50PW4uY291bnQsbi5sYXN0PW4uY291bnQtMSksbi5jb21wdXRlZFc9bi5pdGVtVy1uLmJveFBhZGRpbmcsbi5jb21wdXRlZE09bi5pdGVtTX0sbi51cGRhdGU9ZnVuY3Rpb24oZSx0KXtuLmRvTWF0aCgpLHZ8fChlPG4uY3VycmVudFNsaWRlP24uY3VycmVudFNsaWRlKz0xOmU8PW4uY3VycmVudFNsaWRlJiYwIT09ZSYmKG4uY3VycmVudFNsaWRlLT0xKSxuLmFuaW1hdGluZ1RvPW4uY3VycmVudFNsaWRlKSxuLnZhcnMuY29udHJvbE5hdiYmIW4ubWFudWFsQ29udHJvbHMmJihcImFkZFwiPT09dCYmIXZ8fG4ucGFnaW5nQ291bnQ+bi5jb250cm9sTmF2Lmxlbmd0aD9mLmNvbnRyb2xOYXYudXBkYXRlKFwiYWRkXCIpOihcInJlbW92ZVwiPT09dCYmIXZ8fG4ucGFnaW5nQ291bnQ8bi5jb250cm9sTmF2Lmxlbmd0aCkmJih2JiZuLmN1cnJlbnRTbGlkZT5uLmxhc3QmJihuLmN1cnJlbnRTbGlkZS09MSxuLmFuaW1hdGluZ1RvLT0xKSxmLmNvbnRyb2xOYXYudXBkYXRlKFwicmVtb3ZlXCIsbi5sYXN0KSkpLG4udmFycy5kaXJlY3Rpb25OYXYmJmYuZGlyZWN0aW9uTmF2LnVwZGF0ZSgpfSxuLmFkZFNsaWRlPWZ1bmN0aW9uKGUsdCl7dmFyIGE9JChlKTtuLmNvdW50Kz0xLG4ubGFzdD1uLmNvdW50LTEsZCYmdT92b2lkIDAhPT10P24uc2xpZGVzLmVxKG4uY291bnQtdCkuYWZ0ZXIoYSk6bi5jb250YWluZXIucHJlcGVuZChhKTp2b2lkIDAhPT10P24uc2xpZGVzLmVxKHQpLmJlZm9yZShhKTpuLmNvbnRhaW5lci5hcHBlbmQoYSksbi51cGRhdGUodCxcImFkZFwiKSxuLnNsaWRlcz0kKG4udmFycy5zZWxlY3RvcitcIjpub3QoLmNsb25lKVwiLG4pLG4uc2V0dXAoKSxuLnZhcnMuYWRkZWQobil9LG4ucmVtb3ZlU2xpZGU9ZnVuY3Rpb24oZSl7dmFyIHQ9aXNOYU4oZSk/bi5zbGlkZXMuaW5kZXgoJChlKSk6ZTtuLmNvdW50LT0xLG4ubGFzdD1uLmNvdW50LTEsaXNOYU4oZSk/JChlLG4uc2xpZGVzKS5yZW1vdmUoKTpkJiZ1P24uc2xpZGVzLmVxKG4ubGFzdCkucmVtb3ZlKCk6bi5zbGlkZXMuZXEoZSkucmVtb3ZlKCksbi5kb01hdGgoKSxuLnVwZGF0ZSh0LFwicmVtb3ZlXCIpLG4uc2xpZGVzPSQobi52YXJzLnNlbGVjdG9yK1wiOm5vdCguY2xvbmUpXCIsbiksbi5zZXR1cCgpLG4udmFycy5yZW1vdmVkKG4pfSxmLmluaXQoKX0sJCh3aW5kb3cpLmJsdXIoZnVuY3Rpb24odCl7ZT0hMX0pLmZvY3VzKGZ1bmN0aW9uKHQpe2U9ITB9KSwkLmZsZXhzbGlkZXIuZGVmYXVsdHM9e25hbWVzcGFjZTpcImZsZXgtXCIsc2VsZWN0b3I6XCIuc2xpZGVzID4gbGlcIixhbmltYXRpb246XCJmYWRlXCIsZWFzaW5nOlwic3dpbmdcIixkaXJlY3Rpb246XCJob3Jpem9udGFsXCIscmV2ZXJzZTohMSxhbmltYXRpb25Mb29wOiEwLHNtb290aEhlaWdodDohMSxzdGFydEF0OjAsc2xpZGVzaG93OiEwLHNsaWRlc2hvd1NwZWVkOjdlMyxhbmltYXRpb25TcGVlZDo2MDAsaW5pdERlbGF5OjAscmFuZG9taXplOiExLGZhZGVGaXJzdFNsaWRlOiEwLHRodW1iQ2FwdGlvbnM6ITEscGF1c2VPbkFjdGlvbjohMCxwYXVzZU9uSG92ZXI6ITEscGF1c2VJbnZpc2libGU6ITAsdXNlQ1NTOiEwLHRvdWNoOiEwLHZpZGVvOiExLGNvbnRyb2xOYXY6ITAsZGlyZWN0aW9uTmF2OiEwLHByZXZUZXh0OlwiUHJldmlvdXNcIixuZXh0VGV4dDpcIk5leHRcIixrZXlib2FyZDohMCxtdWx0aXBsZUtleWJvYXJkOiExLG1vdXNld2hlZWw6ITEscGF1c2VQbGF5OiExLHBhdXNlVGV4dDpcIlBhdXNlXCIscGxheVRleHQ6XCJQbGF5XCIsY29udHJvbHNDb250YWluZXI6XCJcIixtYW51YWxDb250cm9sczpcIlwiLGN1c3RvbURpcmVjdGlvbk5hdjpcIlwiLHN5bmM6XCJcIixhc05hdkZvcjpcIlwiLGl0ZW1XaWR0aDowLGl0ZW1NYXJnaW46MCxtaW5JdGVtczoxLG1heEl0ZW1zOjAsbW92ZTowLGFsbG93T25lU2xpZGU6ITAsaXNGaXJlZm94OiExLHN0YXJ0OmZ1bmN0aW9uKCl7fSxiZWZvcmU6ZnVuY3Rpb24oKXt9LGFmdGVyOmZ1bmN0aW9uKCl7fSxlbmQ6ZnVuY3Rpb24oKXt9LGFkZGVkOmZ1bmN0aW9uKCl7fSxyZW1vdmVkOmZ1bmN0aW9uKCl7fSxpbml0OmZ1bmN0aW9uKCl7fSxydGw6ITF9LCQuZm4uZmxleHNsaWRlcj1mdW5jdGlvbihlKXtpZih2b2lkIDA9PT1lJiYoZT17fSksXCJvYmplY3RcIj09dHlwZW9mIGUpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PSQodGhpcyksYT1lLnNlbGVjdG9yP2Uuc2VsZWN0b3I6XCIuc2xpZGVzID4gbGlcIixuPXQuZmluZChhKTsxPT09bi5sZW5ndGgmJiExPT09ZS5hbGxvd09uZVNsaWRlfHwwPT09bi5sZW5ndGg/KG4uZmFkZUluKDQwMCksZS5zdGFydCYmZS5zdGFydCh0KSk6dm9pZCAwPT09dC5kYXRhKFwiZmxleHNsaWRlclwiKSYmbmV3ICQuZmxleHNsaWRlcih0aGlzLGUpfSk7dmFyIHQ9JCh0aGlzKS5kYXRhKFwiZmxleHNsaWRlclwiKTtzd2l0Y2goZSl7Y2FzZVwicGxheVwiOnQucGxheSgpO2JyZWFrO2Nhc2VcInBhdXNlXCI6dC5wYXVzZSgpO2JyZWFrO2Nhc2VcInN0b3BcIjp0LnN0b3AoKTticmVhaztjYXNlXCJuZXh0XCI6dC5mbGV4QW5pbWF0ZSh0LmdldFRhcmdldChcIm5leHRcIiksITApO2JyZWFrO2Nhc2VcInByZXZcIjpjYXNlXCJwcmV2aW91c1wiOnQuZmxleEFuaW1hdGUodC5nZXRUYXJnZXQoXCJwcmV2XCIpLCEwKTticmVhaztkZWZhdWx0OlwibnVtYmVyXCI9PXR5cGVvZiBlJiZ0LmZsZXhBbmltYXRlKGUsITApfX19KGpRdWVyeSk7IiwiaW1wb3J0IFwiLi9qcXVlcnkuZmxleHNsaWRlci1taW5cIjtcclxuaW1wb3J0ICcuL21lbnUnO1xyXG5pbXBvcnQgXCIuL3NsaWRlclwiO1xyXG5pbXBvcnQgJy4vcmVuZGVyJzsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICQoXCIjbWVudS1vcGVuXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIiNtZW51LW9wZW4gc3BhblwiKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAkKFwiLm5hdlwiKS5zbGlkZVRvZ2dsZShcInNsb3dcIik7XHJcbiAgfSk7XHJcblxyXG4gIC8vcHJvZHVjdHMgc3ViIG1lbnVcclxuICAkKFwiLnByb2R1Y3RzLW1lbnUtbGluaz5hXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIi5kb3dubG9hZHNcIikucmVtb3ZlQ2xhc3MoXCJzdWItbWVudS1vcGVuXCIpO1xyXG4gICAgJChcIi5wcm9kdWN0c1wiKS50b2dnbGVDbGFzcyhcInN1Yi1tZW51LW9wZW5cIik7XHJcbiAgfSk7XHJcblxyXG4gIC8vZG93bmxvYWRzIHN1YiBtZW51XHJcbiAgJChcIi5kb3dubG9hZC1tZW51LWxpbmtcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLnByb2R1Y3RzXCIpLnJlbW92ZUNsYXNzKFwic3ViLW1lbnUtb3BlblwiKTtcclxuICAgICQoXCIuZG93bmxvYWRzXCIpLnRvZ2dsZUNsYXNzKFwic3ViLW1lbnUtb3BlblwiKTtcclxuICB9KTtcclxuXHJcbiAgLy9jaGFuZ2UgcHJvZHVjdCBtZW51IGxpbmsgb24gbW9iaWxlXHJcblxyXG4gIGxldCB3ID0gd2luZG93LmlubmVyV2lkdGg7XHJcblxyXG4gIGlmICh3IDwgMTIwMCkge1xyXG4gICAgJChcIi5wcm9kdWN0cy1tZW51LWxpbms+YVwiKS5hdHRyKFwiaHJlZlwiLCBcIi9wcm9kdWN0c1wiKTtcclxuICAgICQoXCIuZG93bmxvYWQtbWVudS1saW5rPmFcIikuYXR0cihcImhyZWZcIiwgXCIvZG93bmxvYWRzXCIpO1xyXG4gIH1cclxuXHJcbiAgLy9jb2xsYXBzaWJsZSBtZW51cyBmdW5jdGlvblxyXG4gIGZ1bmN0aW9uIHNldHVwX2NvbGxhcHNpYmxlX3N1Ym1lbnVzKCkge1xyXG4gICAgdmFyICRtZW51ID0gJChcIiNtb2JpbGVfbWVudVwiKSxcclxuICAgICAgdG9wX2xldmVsX2xpbmsgPSBcIiNtb2JpbGVfbWVudSAubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGFcIjtcclxuICAgICRtZW51LmZpbmQoXCJhXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcbiAgICAgICQodGhpcykub2ZmKFwiY2xpY2tcIik7XHJcblxyXG4gICAgICBpZiAoJCh0aGlzKS5pcyh0b3BfbGV2ZWxfbGluaykpIHtcclxuICAgICAgICAkKHRoaXMpLmF0dHIoXCJocmVmXCIsIFwiI1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCEkKHRoaXMpLnNpYmxpbmdzKFwiLnN1Yi1tZW51XCIpLmxlbmd0aCkge1xyXG4gICAgICAgICQodGhpcykub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgJCh0aGlzKVxyXG4gICAgICAgICAgICAucGFyZW50cyhcIi5tZW51LWJ1dHRvblwiKVxyXG4gICAgICAgICAgICAudHJpZ2dlcihcImNsaWNrXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgICQodGhpcykub24oXCJjbGlja1wiLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICQodGhpcylcclxuICAgICAgICAgICAgLnBhcmVudCgpXHJcbiAgICAgICAgICAgIC50b2dnbGVDbGFzcyhcInZpc2libGVcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICBzZXR1cF9jb2xsYXBzaWJsZV9zdWJtZW51cygpO1xyXG4gICAgfSwgNzAwKTtcclxuICB9KTtcclxufSk7IiwiLy9HcmFiIGl0ZW1zXHJcblxyXG4vL0ljb25zXHJcbmNvbnN0IHJlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW5kZXInKTtcclxuY29uc3QgcXVvdGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1b3RhdGlvbicpO1xyXG5jb25zdCBsYXlvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGF5b3V0Jyk7XHJcblxyXG4vL0Ryb3Bkb3duIENvbnRlbnRcclxuY29uc3QgcmVuZGVyRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVuZGVyLWltYWdlLXdyYXBwZXInKTtcclxuY29uc3QgcXVvdGF0aW9uRHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGRmLXdyYXBwZXInKTtcclxuY29uc3QgbGF5b3V0RHJvcGR3b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGF5b3V0LWltYWdlLXdyYXBwZXInKTtcclxuXHJcbi8vQ29udGVudCBDcm9zc1xyXG5jb25zdCByZW5kZXJDcm9zcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZW5kZXItY3Jvc3MnKTtcclxuXHJcbi8vRXZlbnQgTGlzdGVuZXJzXHJcbmlmKHJlbmRlcikgLy9jaGVjayBpZiBlbGVtZW50IGV4aXN0c1xyXG5yZW5kZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICByZW5kZXJEcm9wZG93bi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxufSk7XHJcbmlmKGxheW91dClcclxubGF5b3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgbGF5b3V0RHJvcGR3b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbn0pO1xyXG5pZihxdW90YXRpb24pXHJcbnF1b3RhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHF1b3RhdGlvbkRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG59KTtcclxuXHJcbi8vQ2xvc2UgY29udGVudFxyXG5yZW5kZXJDcm9zcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBpZiAocmVuZGVyICYmIHJlbmRlckRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHJcbiAgICAgICAgICAgIHJlbmRlckRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgXHJcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgJiYgbGF5b3V0RHJvcGR3b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGF5b3V0RHJvcGR3b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKHF1b3RhdGlvbiAmJiBxdW90YXRpb25Ecm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcblxyXG4gICAgICAgICAgICBxdW90YXRpb25Ecm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufSk7IiwidmFyICQgPSBqUXVlcnk7XHJcblxyXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpIHtcclxuICAkKFwiLmZsZXhzbGlkZXJcIikuZmxleHNsaWRlcih7XHJcbiAgICBhbmltYXRpb246IFwiZmFkZVwiLFxyXG4gICAgc2xpZGVzaG93U3BlZWQ6IDUwMDAsXHJcbiAgICBhbmltYXRpb25TcGVlZDogNjAwLFxyXG4gICAgYW5pbWF0aW9uTG9vcDogZmFsc2UsXHJcbiAgICBwYXVzZU9uQWN0aW9uOiBmYWxzZSxcclxuICAgIGNvbnRyb2xOYXY6IHRydWUsXHJcbiAgICBydGw6IHRydWUsXHJcbiAgICBjdXN0b21EaXJlY3Rpb25OYXY6ICQoXCIuY3VzdG9tLW5hdmlnYXRpb24gYVwiKSxcclxuICB9KTtcclxufSk7XHJcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=