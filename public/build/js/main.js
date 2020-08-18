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
var body = document.querySelector('body'); //Dropdown Content

var renderDropdown = document.querySelector('.render-image-wrapper');
var quotationDropdown = document.querySelector('.pdf-wrapper');
var layoutDropdwon = document.querySelector('.layout-image-wrapper'); //Content Cross

var renderCross = document.querySelectorAll('.render-cross'); //Event Listeners

if (render) //check if element exists
  render.addEventListener('click', function () {
    renderDropdown.classList.add('active');
    scrollHide();
  });
if (layout) layout.addEventListener('click', function () {
  layoutDropdwon.classList.add('active');
  scrollHide();
});
if (quotation) quotation.addEventListener('click', function () {
  quotationDropdown.classList.add('active');
  scrollHide();
}); //Close content

renderCross.forEach(function (item) {
  item.addEventListener('click', function () {
    if (render && renderDropdown.classList.contains('active')) {
      renderDropdown.classList.remove('active');
      backBtn.classList.remove('d-none');
      scrollBarDelay();
    } else if (layout && layoutDropdwon.classList.contains('active')) {
      layoutDropdwon.classList.remove('active');
      backBtn.classList.remove('d-none');
      scrollBarDelay();
    } else if (quotation && quotationDropdown.classList.contains('active')) {
      quotationDropdown.classList.remove('active');
      backBtn.classList.remove('d-none');
      scrollBarDelay();
    }
  });
}); //Remove overflow 

function scrollHide() {
  //Hide back button
  backBtn.classList.add('d-none'); //scroll to top

  window.scroll({
    top: 100,
    left: 0,
    behavior: 'smooth'
  }); // const main = document.querySelector('#content');
  // console.log(main);
  // main.scrollTop = 0;
  // main.scrollLeft = 0;
  //remove overflow

  body.classList.add('hidden');
} //Delay function


function scrollBarDelay() {
  setTimeout(function () {
    body.classList.remove('hidden');
  }, 1000);
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
    animationLoop: true,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2pxdWVyeS5mbGV4c2xpZGVyLW1pbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2V0aW1tZWRpYXRlL3NldEltbWVkaWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdGltZXJzLWJyb3dzZXJpZnkvbWFpbi5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIl0sIm5hbWVzIjpbIiQiLCJlIiwiZmxleHNsaWRlciIsInQiLCJhIiwibiIsInJ0bCIsImF0dHIiLCJ2YXJzIiwiZXh0ZW5kIiwiZGVmYXVsdHMiLCJpIiwibmFtZXNwYWNlIiwiciIsIndpbmRvdyIsIm5hdmlnYXRvciIsIm1zUG9pbnRlckVuYWJsZWQiLCJNU0dlc3R1cmUiLCJzIiwiRG9jdW1lbnRUb3VjaCIsImRvY3VtZW50IiwidG91Y2giLCJvIiwibCIsImMiLCJkIiwiZGlyZWN0aW9uIiwidSIsInJldmVyc2UiLCJ2IiwiaXRlbVdpZHRoIiwicCIsImFuaW1hdGlvbiIsIm0iLCJhc05hdkZvciIsImYiLCJkYXRhIiwiaW5pdCIsImFuaW1hdGluZyIsImN1cnJlbnRTbGlkZSIsInBhcnNlSW50Iiwic3RhcnRBdCIsImlzTmFOIiwiYW5pbWF0aW5nVG8iLCJhdEVuZCIsImxhc3QiLCJjb250YWluZXJTZWxlY3RvciIsInNlbGVjdG9yIiwic3Vic3RyIiwic2VhcmNoIiwic2xpZGVzIiwiY29udGFpbmVyIiwiY291bnQiLCJsZW5ndGgiLCJzeW5jRXhpc3RzIiwic3luYyIsInByb3AiLCJhcmdzIiwibWFudWFsUGF1c2UiLCJzdG9wcGVkIiwic3RhcnRlZCIsInN0YXJ0VGltZW91dCIsInRyYW5zaXRpb25zIiwidmlkZW8iLCJ1c2VDU1MiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJwZngiLCJyZXBsYWNlIiwidG9Mb3dlckNhc2UiLCJpc0ZpcmVmb3giLCJ1c2VyQWdlbnQiLCJpbmRleE9mIiwiZW5zdXJlQW5pbWF0aW9uRW5kIiwiY29udHJvbHNDb250YWluZXIiLCJtYW51YWxDb250cm9scyIsImN1c3RvbURpcmVjdGlvbk5hdiIsInJhbmRvbWl6ZSIsInNvcnQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJlbXB0eSIsImFwcGVuZCIsImRvTWF0aCIsInNldHVwIiwiY29udHJvbE5hdiIsImRpcmVjdGlvbk5hdiIsImtleWJvYXJkIiwibXVsdGlwbGVLZXlib2FyZCIsImJpbmQiLCJrZXlDb2RlIiwiZ2V0VGFyZ2V0IiwiZmxleEFuaW1hdGUiLCJwYXVzZU9uQWN0aW9uIiwibW91c2V3aGVlbCIsInByZXZlbnREZWZhdWx0IiwicGF1c2VQbGF5Iiwic2xpZGVzaG93IiwicGF1c2VJbnZpc2libGUiLCJwYXVzZU9uSG92ZXIiLCJob3ZlciIsIm1hbnVhbFBsYXkiLCJwYXVzZSIsInBsYXkiLCJpc0hpZGRlbiIsImluaXREZWxheSIsInNldFRpbWVvdXQiLCJhc05hdiIsInNtb290aEhlaWdodCIsInJlc2l6ZSIsImZpbmQiLCJzdGFydCIsImZsb29yIiwibW92ZSIsImN1cnJlbnRJdGVtIiwicmVtb3ZlQ2xhc3MiLCJlcSIsImFkZENsYXNzIiwiX3NsaWRlciIsImVhY2giLCJfZ2VzdHVyZSIsInRhcmdldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50VGFyZ2V0IiwiYWRkUG9pbnRlciIsInBvaW50ZXJJZCIsImluZGV4IiwiaGFzQ2xhc3MiLCJvbiIsIm9mZnNldCIsInJpZ2h0Iiwic2Nyb2xsTGVmdCIsImxlZnQiLCJzZXR1cE1hbnVhbCIsInNldHVwUGFnaW5nIiwiY29udHJvbE5hdlNjYWZmb2xkIiwicGFnaW5nQ291bnQiLCJ0ZXh0IiwidGh1bWJDYXB0aW9ucyIsImFwcGVuZFRvIiwic2V0IiwiYWN0aXZlIiwiZGVsZWdhdGUiLCJ0eXBlIiwic2V0VG9DbGVhcldhdGNoZWRFdmVudCIsInVwZGF0ZSIsInJlbW92ZSIsImNsb3Nlc3QiLCJwcmV2VGV4dCIsIm5leHRUZXh0IiwiYW5pbWF0aW9uTG9vcCIsInJlbW92ZUF0dHIiLCJmaWx0ZXIiLCJodG1sIiwicGxheVRleHQiLCJwYXVzZVRleHQiLCJzdG9wUHJvcGFnYXRpb24iLCJ3IiwiaCIsIk51bWJlciIsIkRhdGUiLCJsaW1pdCIsIml0ZW1XIiwiaXRlbU1hcmdpbiIsImNsb25lT2Zmc2V0IiwidHJhbnNsYXRpb25YIiwidHJhbnNsYXRpb25ZIiwieCIsImFicyIsImRldGFpbCIsIk1TR0VTVFVSRV9GTEFHX0lORVJUSUEiLCJzZXRJbW1lZGlhdGUiLCJzdG9wIiwic2V0UHJvcHMiLCJjYW5BZHZhbmNlIiwiZyIsIlMiLCJ5IiwiYiIsIm1zVG91Y2hBY3Rpb24iLCJ0b3VjaGVzIiwicGFnZVgiLCJwYWdlWSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJpcyIsIndpZHRoIiwiY29tcHV0ZWRXIiwidmlld3BvcnQiLCJoZWlnaHQiLCJuZXdTbGlkZXMiLCJhbmltYXRlIiwiaW5uZXJIZWlnaHQiLCJwbGF5aW5nIiwidW5pcXVlSUQiLCJhZGQiLCJ2aXNQcm9wIiwiZ2V0SGlkZGVuUHJvcCIsImNsZWFyVGltZW91dCIsImNlaWwiLCJ2aXNpYmxlIiwiYmVmb3JlIiwiZW5kIiwiY3NzIiwib3BhY2l0eSIsInpJbmRleCIsIndyYXB1cCIsImFuaW1hdGlvblNwZWVkIiwiZWFzaW5nIiwidW5iaW5kIiwiYWZ0ZXIiLCJhbmltYXRlU2xpZGVzIiwiY2xlYXJJbnRlcnZhbCIsImFuaW1hdGVkU2xpZGVzIiwic2V0SW50ZXJ2YWwiLCJzbGlkZXNob3dTcGVlZCIsIm1hcmdpbkxlZnQiLCJwb3NpdGlvbiIsIm1hcmdpblJpZ2h0IiwiZGlzcGxheSIsIndlYmtpdFRyYW5zaXRpb24iLCJmYWRlRmlyc3RTbGlkZSIsIm92ZXJmbG93IiwiY2xvbmVDb3VudCIsIm1ha2VBcnJheSIsImZpcnN0IiwiY2xvbmUiLCJwcmVwZW5kIiwiY29tcHV0ZWRNIiwibWluSXRlbXMiLCJtYXhJdGVtcyIsImJveFBhZGRpbmciLCJvdXRlcldpZHRoIiwiaXRlbVQiLCJpdGVtTSIsIm1pblciLCJtYXhXIiwiYWRkU2xpZGUiLCJhZGRlZCIsInJlbW92ZVNsaWRlIiwicmVtb3ZlZCIsImJsdXIiLCJmb2N1cyIsImFsbG93T25lU2xpZGUiLCJmbiIsImZhZGVJbiIsImpRdWVyeSIsInJlYWR5IiwiY2xpY2siLCJ0b2dnbGVDbGFzcyIsInNsaWRlVG9nZ2xlIiwicmVuZGVyIiwicXVlcnlTZWxlY3RvciIsInF1b3RhdGlvbiIsImxheW91dCIsImJhY2tCdG4iLCJib2R5IiwicmVuZGVyRHJvcGRvd24iLCJxdW90YXRpb25Ecm9wZG93biIsImxheW91dERyb3Bkd29uIiwicmVuZGVyQ3Jvc3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2xhc3NMaXN0Iiwic2Nyb2xsSGlkZSIsImZvckVhY2giLCJpdGVtIiwiY29udGFpbnMiLCJzY3JvbGxCYXJEZWxheSIsInNjcm9sbCIsInRvcCIsImJlaGF2aW9yIiwibG9hZCIsInByb2Nlc3MiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2FjaGVkU2V0VGltZW91dCIsImNhY2hlZENsZWFyVGltZW91dCIsImRlZmF1bHRTZXRUaW1vdXQiLCJFcnJvciIsImRlZmF1bHRDbGVhclRpbWVvdXQiLCJydW5UaW1lb3V0IiwiZnVuIiwiY2FsbCIsInJ1bkNsZWFyVGltZW91dCIsIm1hcmtlciIsInF1ZXVlIiwiZHJhaW5pbmciLCJjdXJyZW50UXVldWUiLCJxdWV1ZUluZGV4IiwiY2xlYW5VcE5leHRUaWNrIiwiY29uY2F0IiwiZHJhaW5RdWV1ZSIsInRpbWVvdXQiLCJsZW4iLCJydW4iLCJuZXh0VGljayIsIkFycmF5IiwiYXJndW1lbnRzIiwicHVzaCIsIkl0ZW0iLCJhcnJheSIsInByb3RvdHlwZSIsImFwcGx5IiwidGl0bGUiLCJicm93c2VyIiwiZW52IiwiYXJndiIsInZlcnNpb24iLCJ2ZXJzaW9ucyIsIm5vb3AiLCJhZGRMaXN0ZW5lciIsIm9uY2UiLCJvZmYiLCJyZW1vdmVMaXN0ZW5lciIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJwcmVwZW5kTGlzdGVuZXIiLCJwcmVwZW5kT25jZUxpc3RlbmVyIiwibGlzdGVuZXJzIiwibmFtZSIsImJpbmRpbmciLCJjd2QiLCJjaGRpciIsImRpciIsInVtYXNrIiwiZ2xvYmFsIiwidW5kZWZpbmVkIiwibmV4dEhhbmRsZSIsInRhc2tzQnlIYW5kbGUiLCJjdXJyZW50bHlSdW5uaW5nQVRhc2siLCJkb2MiLCJyZWdpc3RlckltbWVkaWF0ZSIsImNhbGxiYWNrIiwiRnVuY3Rpb24iLCJ0YXNrIiwiY2xlYXJJbW1lZGlhdGUiLCJoYW5kbGUiLCJydW5JZlByZXNlbnQiLCJpbnN0YWxsTmV4dFRpY2tJbXBsZW1lbnRhdGlvbiIsImNhblVzZVBvc3RNZXNzYWdlIiwicG9zdE1lc3NhZ2UiLCJpbXBvcnRTY3JpcHRzIiwicG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyIsIm9sZE9uTWVzc2FnZSIsIm9ubWVzc2FnZSIsImluc3RhbGxQb3N0TWVzc2FnZUltcGxlbWVudGF0aW9uIiwibWVzc2FnZVByZWZpeCIsIm9uR2xvYmFsTWVzc2FnZSIsImV2ZW50Iiwic291cmNlIiwic2xpY2UiLCJhdHRhY2hFdmVudCIsImluc3RhbGxNZXNzYWdlQ2hhbm5lbEltcGxlbWVudGF0aW9uIiwiY2hhbm5lbCIsIk1lc3NhZ2VDaGFubmVsIiwicG9ydDEiLCJwb3J0MiIsImluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24iLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JpcHQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwiaW5zdGFsbFNldFRpbWVvdXRJbXBsZW1lbnRhdGlvbiIsImF0dGFjaFRvIiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJ0b1N0cmluZyIsInNlbGYiLCJzY29wZSIsIlRpbWVvdXQiLCJjbG9zZSIsImlkIiwiY2xlYXJGbiIsIl9pZCIsIl9jbGVhckZuIiwidW5yZWYiLCJyZWYiLCJlbnJvbGwiLCJtc2VjcyIsIl9pZGxlVGltZW91dElkIiwiX2lkbGVUaW1lb3V0IiwidW5lbnJvbGwiLCJfdW5yZWZBY3RpdmUiLCJvblRpbWVvdXQiLCJfb25UaW1lb3V0IiwicmVxdWlyZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7O0FBSUcsQ0FBQyxVQUFTQSxDQUFULEVBQVc7QUFBQyxNQUFJQyxDQUFDLEdBQUMsQ0FBQyxDQUFQO0FBQVNELEdBQUMsQ0FBQ0UsVUFBRixHQUFhLFVB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QVAsS0FBZ0IsV0FBaEIsSUFBK0JBLElBQUksQ0FBQ3BNLFlBQXJDLElBQ0MsT0FBT3lKLE1BQVAsS0FBa0IsV0FBbEIsSUFBaUNBLE1BQU0sQ0FBQ3pKLFlBRHpDLElBRUMsUUFBUSxLQUFLQSxZQUZyQztBQUdBc0csT0FBTyxDQUFDNkQsY0FBUixHQUEwQixPQUFPaUMsSUFBUCxLQUFnQixXQUFoQixJQUErQkEsSUFBSSxDQUFDakMsY0FBckMsSUFDQyxPQUFPVixNQUFQLEtBQWtCLFdBQWxCLElBQWlDQSxNQUFNLENBQUNVLGNBRHpDLElBRUMsUUFBUSxLQUFLQSxjQUZ2QyxDOzs7Ozs7Ozs7Ozs7QUM1REEsSUFBSS9KLENBQUosQyxDQUVBOztBQUNBQSxDQUFDLEdBQUksWUFBVztBQUNmLFNBQU8sSUFBUDtBQUNBLENBRkcsRUFBSjs7QUFJQSxJQUFJO0FBQ0g7QUFDQUEsR0FBQyxHQUFHQSxDQUFDLElBQUksSUFBSTZKLFFBQUosQ0FBYSxhQUFiLEdBQVQ7QUFDQSxDQUhELENBR0UsT0FBTzVVLENBQVAsRUFBVTtBQUNYO0FBQ0EsTUFBSSxPQUFPYSxNQUFQLEtBQWtCLFFBQXRCLEVBQWdDa0ssQ0FBQyxHQUFHbEssTUFBSjtBQUNoQyxDLENBRUQ7QUFDQTtBQUNBOzs7QUFFQW1RLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmxHLENBQWpCLEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYXNzZXRzL2pzL21haW4uanNcIik7XG4iLCIvKlxyXG4gKiBqUXVlcnkgRmxleFNsaWRlciB2Mi43LjJcclxuICogQ29weXJpZ2h0IDIwMTIgV29vVGhlbWVzXHJcbiAqIENvbnRyaWJ1dGluZyBBdXRob3I6IFR5bGVyIFNtaXRoXHJcbiAqLyFmdW5jdGlvbigkKXt2YXIgZT0hMDskLmZsZXhzbGlkZXI9ZnVuY3Rpb24odCxhKXt2YXIgbj0kKHQpO3ZvaWQgMD09PWEucnRsJiZcInJ0bFwiPT0kKFwiaHRtbFwiKS5hdHRyKFwiZGlyXCIpJiYoYS5ydGw9ITApLG4udmFycz0kLmV4dGVuZCh7fSwkLmZsZXhzbGlkZXIuZGVmYXVsdHMsYSk7dmFyIGk9bi52YXJzLm5hbWVzcGFjZSxyPXdpbmRvdy5uYXZpZ2F0b3ImJndpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCYmd2luZG93Lk1TR2VzdHVyZSxzPShcIm9udG91Y2hzdGFydFwiaW4gd2luZG93fHxyfHx3aW5kb3cuRG9jdW1lbnRUb3VjaCYmZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKSYmbi52YXJzLnRvdWNoLG89XCJjbGljayB0b3VjaGVuZCBNU1BvaW50ZXJVcCBrZXl1cFwiLGw9XCJcIixjLGQ9XCJ2ZXJ0aWNhbFwiPT09bi52YXJzLmRpcmVjdGlvbix1PW4udmFycy5yZXZlcnNlLHY9bi52YXJzLml0ZW1XaWR0aD4wLHA9XCJmYWRlXCI9PT1uLnZhcnMuYW5pbWF0aW9uLG09XCJcIiE9PW4udmFycy5hc05hdkZvcixmPXt9OyQuZGF0YSh0LFwiZmxleHNsaWRlclwiLG4pLGY9e2luaXQ6ZnVuY3Rpb24oKXtuLmFuaW1hdGluZz0hMSxuLmN1cnJlbnRTbGlkZT1wYXJzZUludChuLnZhcnMuc3RhcnRBdD9uLnZhcnMuc3RhcnRBdDowLDEwKSxpc05hTihuLmN1cnJlbnRTbGlkZSkmJihuLmN1cnJlbnRTbGlkZT0wKSxuLmFuaW1hdGluZ1RvPW4uY3VycmVudFNsaWRlLG4uYXRFbmQ9MD09PW4uY3VycmVudFNsaWRlfHxuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCxuLmNvbnRhaW5lclNlbGVjdG9yPW4udmFycy5zZWxlY3Rvci5zdWJzdHIoMCxuLnZhcnMuc2VsZWN0b3Iuc2VhcmNoKFwiIFwiKSksbi5zbGlkZXM9JChuLnZhcnMuc2VsZWN0b3Isbiksbi5jb250YWluZXI9JChuLmNvbnRhaW5lclNlbGVjdG9yLG4pLG4uY291bnQ9bi5zbGlkZXMubGVuZ3RoLG4uc3luY0V4aXN0cz0kKG4udmFycy5zeW5jKS5sZW5ndGg+MCxcInNsaWRlXCI9PT1uLnZhcnMuYW5pbWF0aW9uJiYobi52YXJzLmFuaW1hdGlvbj1cInN3aW5nXCIpLG4ucHJvcD1kP1widG9wXCI6bi52YXJzLnJ0bD9cIm1hcmdpblJpZ2h0XCI6XCJtYXJnaW5MZWZ0XCIsbi5hcmdzPXt9LG4ubWFudWFsUGF1c2U9ITEsbi5zdG9wcGVkPSExLG4uc3RhcnRlZD0hMSxuLnN0YXJ0VGltZW91dD1udWxsLG4udHJhbnNpdGlvbnM9IW4udmFycy52aWRlbyYmIXAmJm4udmFycy51c2VDU1MmJmZ1bmN0aW9uKCl7dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSx0PVtcInBlcnNwZWN0aXZlUHJvcGVydHlcIixcIldlYmtpdFBlcnNwZWN0aXZlXCIsXCJNb3pQZXJzcGVjdGl2ZVwiLFwiT1BlcnNwZWN0aXZlXCIsXCJtc1BlcnNwZWN0aXZlXCJdO2Zvcih2YXIgYSBpbiB0KWlmKHZvaWQgMCE9PWUuc3R5bGVbdFthXV0pcmV0dXJuIG4ucGZ4PXRbYV0ucmVwbGFjZShcIlBlcnNwZWN0aXZlXCIsXCJcIikudG9Mb3dlckNhc2UoKSxuLnByb3A9XCItXCIrbi5wZngrXCItdHJhbnNmb3JtXCIsITA7cmV0dXJuITF9KCksbi5pc0ZpcmVmb3g9bmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJmaXJlZm94XCIpPi0xLG4uZW5zdXJlQW5pbWF0aW9uRW5kPVwiXCIsXCJcIiE9PW4udmFycy5jb250cm9sc0NvbnRhaW5lciYmKG4uY29udHJvbHNDb250YWluZXI9JChuLnZhcnMuY29udHJvbHNDb250YWluZXIpLmxlbmd0aD4wJiYkKG4udmFycy5jb250cm9sc0NvbnRhaW5lcikpLFwiXCIhPT1uLnZhcnMubWFudWFsQ29udHJvbHMmJihuLm1hbnVhbENvbnRyb2xzPSQobi52YXJzLm1hbnVhbENvbnRyb2xzKS5sZW5ndGg+MCYmJChuLnZhcnMubWFudWFsQ29udHJvbHMpKSxcIlwiIT09bi52YXJzLmN1c3RvbURpcmVjdGlvbk5hdiYmKG4uY3VzdG9tRGlyZWN0aW9uTmF2PTI9PT0kKG4udmFycy5jdXN0b21EaXJlY3Rpb25OYXYpLmxlbmd0aCYmJChuLnZhcnMuY3VzdG9tRGlyZWN0aW9uTmF2KSksbi52YXJzLnJhbmRvbWl6ZSYmKG4uc2xpZGVzLnNvcnQoZnVuY3Rpb24oKXtyZXR1cm4gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKS0uNX0pLG4uY29udGFpbmVyLmVtcHR5KCkuYXBwZW5kKG4uc2xpZGVzKSksbi5kb01hdGgoKSxuLnNldHVwKFwiaW5pdFwiKSxuLnZhcnMuY29udHJvbE5hdiYmZi5jb250cm9sTmF2LnNldHVwKCksbi52YXJzLmRpcmVjdGlvbk5hdiYmZi5kaXJlY3Rpb25OYXYuc2V0dXAoKSxuLnZhcnMua2V5Ym9hcmQmJigxPT09JChuLmNvbnRhaW5lclNlbGVjdG9yKS5sZW5ndGh8fG4udmFycy5tdWx0aXBsZUtleWJvYXJkKSYmJChkb2N1bWVudCkuYmluZChcImtleXVwXCIsZnVuY3Rpb24oZSl7dmFyIHQ9ZS5rZXlDb2RlO2lmKCFuLmFuaW1hdGluZyYmKDM5PT09dHx8Mzc9PT10KSl7dmFyIGE9bi52YXJzLnJ0bD8zNz09PXQ/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOjM5PT09dCYmbi5nZXRUYXJnZXQoXCJwcmV2XCIpOjM5PT09dD9uLmdldFRhcmdldChcIm5leHRcIik6Mzc9PT10JiZuLmdldFRhcmdldChcInByZXZcIik7bi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uKX19KSxuLnZhcnMubW91c2V3aGVlbCYmbi5iaW5kKFwibW91c2V3aGVlbFwiLGZ1bmN0aW9uKGUsdCxhLGkpe2UucHJldmVudERlZmF1bHQoKTt2YXIgcj10PDA/bi5nZXRUYXJnZXQoXCJuZXh0XCIpOm4uZ2V0VGFyZ2V0KFwicHJldlwiKTtuLmZsZXhBbmltYXRlKHIsbi52YXJzLnBhdXNlT25BY3Rpb24pfSksbi52YXJzLnBhdXNlUGxheSYmZi5wYXVzZVBsYXkuc2V0dXAoKSxuLnZhcnMuc2xpZGVzaG93JiZuLnZhcnMucGF1c2VJbnZpc2libGUmJmYucGF1c2VJbnZpc2libGUuaW5pdCgpLG4udmFycy5zbGlkZXNob3cmJihuLnZhcnMucGF1c2VPbkhvdmVyJiZuLmhvdmVyKGZ1bmN0aW9uKCl7bi5tYW51YWxQbGF5fHxuLm1hbnVhbFBhdXNlfHxuLnBhdXNlKCl9LGZ1bmN0aW9uKCl7bi5tYW51YWxQYXVzZXx8bi5tYW51YWxQbGF5fHxuLnN0b3BwZWR8fG4ucGxheSgpfSksbi52YXJzLnBhdXNlSW52aXNpYmxlJiZmLnBhdXNlSW52aXNpYmxlLmlzSGlkZGVuKCl8fChuLnZhcnMuaW5pdERlbGF5PjA/bi5zdGFydFRpbWVvdXQ9c2V0VGltZW91dChuLnBsYXksbi52YXJzLmluaXREZWxheSk6bi5wbGF5KCkpKSxtJiZmLmFzTmF2LnNldHVwKCkscyYmbi52YXJzLnRvdWNoJiZmLnRvdWNoKCksKCFwfHxwJiZuLnZhcnMuc21vb3RoSGVpZ2h0KSYmJCh3aW5kb3cpLmJpbmQoXCJyZXNpemUgb3JpZW50YXRpb25jaGFuZ2UgZm9jdXNcIixmLnJlc2l6ZSksbi5maW5kKFwiaW1nXCIpLmF0dHIoXCJkcmFnZ2FibGVcIixcImZhbHNlXCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLnZhcnMuc3RhcnQobil9LDIwMCl9LGFzTmF2OntzZXR1cDpmdW5jdGlvbigpe24uYXNOYXY9ITAsbi5hbmltYXRpbmdUbz1NYXRoLmZsb29yKG4uY3VycmVudFNsaWRlL24ubW92ZSksbi5jdXJyZW50SXRlbT1uLmN1cnJlbnRTbGlkZSxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKG4uY3VycmVudEl0ZW0pLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikscj8odC5fc2xpZGVyPW4sbi5zbGlkZXMuZWFjaChmdW5jdGlvbigpe3ZhciBlPXRoaXM7ZS5fZ2VzdHVyZT1uZXcgTVNHZXN0dXJlLGUuX2dlc3R1cmUudGFyZ2V0PWUsZS5hZGRFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyRG93blwiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKSxlLmN1cnJlbnRUYXJnZXQuX2dlc3R1cmUmJmUuY3VycmVudFRhcmdldC5fZ2VzdHVyZS5hZGRQb2ludGVyKGUucG9pbnRlcklkKX0sITEpLGUuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZVRhcFwiLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdD0kKHRoaXMpLGE9dC5pbmRleCgpOyQobi52YXJzLmFzTmF2Rm9yKS5kYXRhKFwiZmxleHNsaWRlclwiKS5hbmltYXRpbmd8fHQuaGFzQ2xhc3MoXCJhY3RpdmVcIil8fChuLmRpcmVjdGlvbj1uLmN1cnJlbnRJdGVtPGE/XCJuZXh0XCI6XCJwcmV2XCIsbi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uLCExLCEwLCEwKSl9KX0pKTpuLnNsaWRlcy5vbihvLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdD0kKHRoaXMpLGE9dC5pbmRleCgpLHI7cj1uLnZhcnMucnRsPy0xKih0Lm9mZnNldCgpLnJpZ2h0LSQobikuc2Nyb2xsTGVmdCgpKTp0Lm9mZnNldCgpLmxlZnQtJChuKS5zY3JvbGxMZWZ0KCkscjw9MCYmdC5oYXNDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpP24uZmxleEFuaW1hdGUobi5nZXRUYXJnZXQoXCJwcmV2XCIpLCEwKTokKG4udmFycy5hc05hdkZvcikuZGF0YShcImZsZXhzbGlkZXJcIikuYW5pbWF0aW5nfHx0Lmhhc0NsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIil8fChuLmRpcmVjdGlvbj1uLmN1cnJlbnRJdGVtPGE/XCJuZXh0XCI6XCJwcmV2XCIsbi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uLCExLCEwLCEwKSl9KX19LGNvbnRyb2xOYXY6e3NldHVwOmZ1bmN0aW9uKCl7bi5tYW51YWxDb250cm9scz9mLmNvbnRyb2xOYXYuc2V0dXBNYW51YWwoKTpmLmNvbnRyb2xOYXYuc2V0dXBQYWdpbmcoKX0sc2V0dXBQYWdpbmc6ZnVuY3Rpb24oKXt2YXIgZT1cInRodW1ibmFpbHNcIj09PW4udmFycy5jb250cm9sTmF2P1wiY29udHJvbC10aHVtYnNcIjpcImNvbnRyb2wtcGFnaW5nXCIsdD0xLGEscjtpZihuLmNvbnRyb2xOYXZTY2FmZm9sZD0kKCc8b2wgY2xhc3M9XCInK2krXCJjb250cm9sLW5hdiBcIitpK2UrJ1wiPjwvb2w+Jyksbi5wYWdpbmdDb3VudD4xKWZvcih2YXIgcz0wO3M8bi5wYWdpbmdDb3VudDtzKyspe2lmKHI9bi5zbGlkZXMuZXEocyksdm9pZCAwPT09ci5hdHRyKFwiZGF0YS10aHVtYi1hbHRcIikmJnIuYXR0cihcImRhdGEtdGh1bWItYWx0XCIsXCJcIiksYT0kKFwiPGE+PC9hPlwiKS5hdHRyKFwiaHJlZlwiLFwiI1wiKS50ZXh0KHQpLFwidGh1bWJuYWlsc1wiPT09bi52YXJzLmNvbnRyb2xOYXYmJihhPSQoXCI8aW1nLz5cIikuYXR0cihcInNyY1wiLHIuYXR0cihcImRhdGEtdGh1bWJcIikpKSxcIlwiIT09ci5hdHRyKFwiZGF0YS10aHVtYi1hbHRcIikmJmEuYXR0cihcImFsdFwiLHIuYXR0cihcImRhdGEtdGh1bWItYWx0XCIpKSxcInRodW1ibmFpbHNcIj09PW4udmFycy5jb250cm9sTmF2JiYhMD09PW4udmFycy50aHVtYkNhcHRpb25zKXt2YXIgYz1yLmF0dHIoXCJkYXRhLXRodW1iY2FwdGlvblwiKTtpZihcIlwiIT09YyYmdm9pZCAwIT09Yyl7dmFyIGQ9JChcIjxzcGFuPjwvc3Bhbj5cIikuYWRkQ2xhc3MoaStcImNhcHRpb25cIikudGV4dChjKTthLmFwcGVuZChkKX19dmFyIHU9JChcIjxsaT5cIik7YS5hcHBlbmRUbyh1KSx1LmFwcGVuZChcIjwvbGk+XCIpLG4uY29udHJvbE5hdlNjYWZmb2xkLmFwcGVuZCh1KSx0Kyt9bi5jb250cm9sc0NvbnRhaW5lcj8kKG4uY29udHJvbHNDb250YWluZXIpLmFwcGVuZChuLmNvbnRyb2xOYXZTY2FmZm9sZCk6bi5hcHBlbmQobi5jb250cm9sTmF2U2NhZmZvbGQpLGYuY29udHJvbE5hdi5zZXQoKSxmLmNvbnRyb2xOYXYuYWN0aXZlKCksbi5jb250cm9sTmF2U2NhZmZvbGQuZGVsZWdhdGUoXCJhLCBpbWdcIixvLGZ1bmN0aW9uKGUpe2lmKGUucHJldmVudERlZmF1bHQoKSxcIlwiPT09bHx8bD09PWUudHlwZSl7dmFyIHQ9JCh0aGlzKSxhPW4uY29udHJvbE5hdi5pbmRleCh0KTt0Lmhhc0NsYXNzKGkrXCJhY3RpdmVcIil8fChuLmRpcmVjdGlvbj1hPm4uY3VycmVudFNsaWRlP1wibmV4dFwiOlwicHJldlwiLG4uZmxleEFuaW1hdGUoYSxuLnZhcnMucGF1c2VPbkFjdGlvbikpfVwiXCI9PT1sJiYobD1lLnR5cGUpLGYuc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpfSl9LHNldHVwTWFudWFsOmZ1bmN0aW9uKCl7bi5jb250cm9sTmF2PW4ubWFudWFsQ29udHJvbHMsZi5jb250cm9sTmF2LmFjdGl2ZSgpLG4uY29udHJvbE5hdi5iaW5kKG8sZnVuY3Rpb24oZSl7aWYoZS5wcmV2ZW50RGVmYXVsdCgpLFwiXCI9PT1sfHxsPT09ZS50eXBlKXt2YXIgdD0kKHRoaXMpLGE9bi5jb250cm9sTmF2LmluZGV4KHQpO3QuaGFzQ2xhc3MoaStcImFjdGl2ZVwiKXx8KGE+bi5jdXJyZW50U2xpZGU/bi5kaXJlY3Rpb249XCJuZXh0XCI6bi5kaXJlY3Rpb249XCJwcmV2XCIsbi5mbGV4QW5pbWF0ZShhLG4udmFycy5wYXVzZU9uQWN0aW9uKSl9XCJcIj09PWwmJihsPWUudHlwZSksZi5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCl9KX0sc2V0OmZ1bmN0aW9uKCl7dmFyIGU9XCJ0aHVtYm5haWxzXCI9PT1uLnZhcnMuY29udHJvbE5hdj9cImltZ1wiOlwiYVwiO24uY29udHJvbE5hdj0kKFwiLlwiK2krXCJjb250cm9sLW5hdiBsaSBcIitlLG4uY29udHJvbHNDb250YWluZXI/bi5jb250cm9sc0NvbnRhaW5lcjpuKX0sYWN0aXZlOmZ1bmN0aW9uKCl7bi5jb250cm9sTmF2LnJlbW92ZUNsYXNzKGkrXCJhY3RpdmVcIikuZXEobi5hbmltYXRpbmdUbykuYWRkQ2xhc3MoaStcImFjdGl2ZVwiKX0sdXBkYXRlOmZ1bmN0aW9uKGUsdCl7bi5wYWdpbmdDb3VudD4xJiZcImFkZFwiPT09ZT9uLmNvbnRyb2xOYXZTY2FmZm9sZC5hcHBlbmQoJCgnPGxpPjxhIGhyZWY9XCIjXCI+JytuLmNvdW50K1wiPC9hPjwvbGk+XCIpKToxPT09bi5wYWdpbmdDb3VudD9uLmNvbnRyb2xOYXZTY2FmZm9sZC5maW5kKFwibGlcIikucmVtb3ZlKCk6bi5jb250cm9sTmF2LmVxKHQpLmNsb3Nlc3QoXCJsaVwiKS5yZW1vdmUoKSxmLmNvbnRyb2xOYXYuc2V0KCksbi5wYWdpbmdDb3VudD4xJiZuLnBhZ2luZ0NvdW50IT09bi5jb250cm9sTmF2Lmxlbmd0aD9uLnVwZGF0ZSh0LGUpOmYuY29udHJvbE5hdi5hY3RpdmUoKX19LGRpcmVjdGlvbk5hdjp7c2V0dXA6ZnVuY3Rpb24oKXt2YXIgZT0kKCc8dWwgY2xhc3M9XCInK2krJ2RpcmVjdGlvbi1uYXZcIj48bGkgY2xhc3M9XCInK2krJ25hdi1wcmV2XCI+PGEgY2xhc3M9XCInK2krJ3ByZXZcIiBocmVmPVwiI1wiPicrbi52YXJzLnByZXZUZXh0Kyc8L2E+PC9saT48bGkgY2xhc3M9XCInK2krJ25hdi1uZXh0XCI+PGEgY2xhc3M9XCInK2krJ25leHRcIiBocmVmPVwiI1wiPicrbi52YXJzLm5leHRUZXh0K1wiPC9hPjwvbGk+PC91bD5cIik7bi5jdXN0b21EaXJlY3Rpb25OYXY/bi5kaXJlY3Rpb25OYXY9bi5jdXN0b21EaXJlY3Rpb25OYXY6bi5jb250cm9sc0NvbnRhaW5lcj8oJChuLmNvbnRyb2xzQ29udGFpbmVyKS5hcHBlbmQoZSksbi5kaXJlY3Rpb25OYXY9JChcIi5cIitpK1wiZGlyZWN0aW9uLW5hdiBsaSBhXCIsbi5jb250cm9sc0NvbnRhaW5lcikpOihuLmFwcGVuZChlKSxuLmRpcmVjdGlvbk5hdj0kKFwiLlwiK2krXCJkaXJlY3Rpb24tbmF2IGxpIGFcIixuKSksZi5kaXJlY3Rpb25OYXYudXBkYXRlKCksbi5kaXJlY3Rpb25OYXYuYmluZChvLGZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKTt2YXIgdDtcIlwiIT09bCYmbCE9PWUudHlwZXx8KHQ9JCh0aGlzKS5oYXNDbGFzcyhpK1wibmV4dFwiKT9uLmdldFRhcmdldChcIm5leHRcIik6bi5nZXRUYXJnZXQoXCJwcmV2XCIpLG4uZmxleEFuaW1hdGUodCxuLnZhcnMucGF1c2VPbkFjdGlvbikpLFwiXCI9PT1sJiYobD1lLnR5cGUpLGYuc2V0VG9DbGVhcldhdGNoZWRFdmVudCgpfSl9LHVwZGF0ZTpmdW5jdGlvbigpe3ZhciBlPWkrXCJkaXNhYmxlZFwiOzE9PT1uLnBhZ2luZ0NvdW50P24uZGlyZWN0aW9uTmF2LmFkZENsYXNzKGUpLmF0dHIoXCJ0YWJpbmRleFwiLFwiLTFcIik6bi52YXJzLmFuaW1hdGlvbkxvb3A/bi5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZSkucmVtb3ZlQXR0cihcInRhYmluZGV4XCIpOjA9PT1uLmFuaW1hdGluZ1RvP24uZGlyZWN0aW9uTmF2LnJlbW92ZUNsYXNzKGUpLmZpbHRlcihcIi5cIitpK1wicHJldlwiKS5hZGRDbGFzcyhlKS5hdHRyKFwidGFiaW5kZXhcIixcIi0xXCIpOm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/bi5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZSkuZmlsdGVyKFwiLlwiK2krXCJuZXh0XCIpLmFkZENsYXNzKGUpLmF0dHIoXCJ0YWJpbmRleFwiLFwiLTFcIik6bi5kaXJlY3Rpb25OYXYucmVtb3ZlQ2xhc3MoZSkucmVtb3ZlQXR0cihcInRhYmluZGV4XCIpfX0scGF1c2VQbGF5OntzZXR1cDpmdW5jdGlvbigpe3ZhciBlPSQoJzxkaXYgY2xhc3M9XCInK2krJ3BhdXNlcGxheVwiPjxhIGhyZWY9XCIjXCI+PC9hPjwvZGl2PicpO24uY29udHJvbHNDb250YWluZXI/KG4uY29udHJvbHNDb250YWluZXIuYXBwZW5kKGUpLG4ucGF1c2VQbGF5PSQoXCIuXCIraStcInBhdXNlcGxheSBhXCIsbi5jb250cm9sc0NvbnRhaW5lcikpOihuLmFwcGVuZChlKSxuLnBhdXNlUGxheT0kKFwiLlwiK2krXCJwYXVzZXBsYXkgYVwiLG4pKSxmLnBhdXNlUGxheS51cGRhdGUobi52YXJzLnNsaWRlc2hvdz9pK1wicGF1c2VcIjppK1wicGxheVwiKSxuLnBhdXNlUGxheS5iaW5kKG8sZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLFwiXCIhPT1sJiZsIT09ZS50eXBlfHwoJCh0aGlzKS5oYXNDbGFzcyhpK1wicGF1c2VcIik/KG4ubWFudWFsUGF1c2U9ITAsbi5tYW51YWxQbGF5PSExLG4ucGF1c2UoKSk6KG4ubWFudWFsUGF1c2U9ITEsbi5tYW51YWxQbGF5PSEwLG4ucGxheSgpKSksXCJcIj09PWwmJihsPWUudHlwZSksZi5zZXRUb0NsZWFyV2F0Y2hlZEV2ZW50KCl9KX0sdXBkYXRlOmZ1bmN0aW9uKGUpe1wicGxheVwiPT09ZT9uLnBhdXNlUGxheS5yZW1vdmVDbGFzcyhpK1wicGF1c2VcIikuYWRkQ2xhc3MoaStcInBsYXlcIikuaHRtbChuLnZhcnMucGxheVRleHQpOm4ucGF1c2VQbGF5LnJlbW92ZUNsYXNzKGkrXCJwbGF5XCIpLmFkZENsYXNzKGkrXCJwYXVzZVwiKS5odG1sKG4udmFycy5wYXVzZVRleHQpfX0sdG91Y2g6ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCksbi5hbmltYXRpbmc/ZS5wcmV2ZW50RGVmYXVsdCgpOihuLnBhdXNlKCksdC5fZ2VzdHVyZS5hZGRQb2ludGVyKGUucG9pbnRlcklkKSx3PTAsYz1kP24uaDpuLncsZj1OdW1iZXIobmV3IERhdGUpLGw9diYmdSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdD8wOnYmJnU/bi5saW1pdC0obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uYW5pbWF0aW5nVG86diYmbi5jdXJyZW50U2xpZGU9PT1uLmxhc3Q/bi5saW1pdDp2PyhuLml0ZW1XK24udmFycy5pdGVtTWFyZ2luKSpuLm1vdmUqbi5jdXJyZW50U2xpZGU6dT8obi5sYXN0LW4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmM6KG4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQpKmMpfWZ1bmN0aW9uIGEoZSl7ZS5zdG9wUHJvcGFnYXRpb24oKTt2YXIgYT1lLnRhcmdldC5fc2xpZGVyO2lmKGEpe3ZhciBuPS1lLnRyYW5zbGF0aW9uWCxpPS1lLnRyYW5zbGF0aW9uWTtpZih3Kz1kP2k6bixtPShhLnZhcnMucnRsPy0xOjEpKncseD1kP01hdGguYWJzKHcpPE1hdGguYWJzKC1uKTpNYXRoLmFicyh3KTxNYXRoLmFicygtaSksZS5kZXRhaWw9PT1lLk1TR0VTVFVSRV9GTEFHX0lORVJUSUEpcmV0dXJuIHZvaWQgc2V0SW1tZWRpYXRlKGZ1bmN0aW9uKCl7dC5fZ2VzdHVyZS5zdG9wKCl9KTsoIXh8fE51bWJlcihuZXcgRGF0ZSktZj41MDApJiYoZS5wcmV2ZW50RGVmYXVsdCgpLCFwJiZhLnRyYW5zaXRpb25zJiYoYS52YXJzLmFuaW1hdGlvbkxvb3B8fChtPXcvKDA9PT1hLmN1cnJlbnRTbGlkZSYmdzwwfHxhLmN1cnJlbnRTbGlkZT09PWEubGFzdCYmdz4wP01hdGguYWJzKHcpL2MrMjoxKSksYS5zZXRQcm9wcyhsK20sXCJzZXRUb3VjaFwiKSkpfX1mdW5jdGlvbiBpKGUpe2Uuc3RvcFByb3BhZ2F0aW9uKCk7dmFyIHQ9ZS50YXJnZXQuX3NsaWRlcjtpZih0KXtpZih0LmFuaW1hdGluZ1RvPT09dC5jdXJyZW50U2xpZGUmJiF4JiZudWxsIT09bSl7dmFyIGE9dT8tbTptLG49YT4wP3QuZ2V0VGFyZ2V0KFwibmV4dFwiKTp0LmdldFRhcmdldChcInByZXZcIik7dC5jYW5BZHZhbmNlKG4pJiYoTnVtYmVyKG5ldyBEYXRlKS1mPDU1MCYmTWF0aC5hYnMoYSk+NTB8fE1hdGguYWJzKGEpPmMvMik/dC5mbGV4QW5pbWF0ZShuLHQudmFycy5wYXVzZU9uQWN0aW9uKTpwfHx0LmZsZXhBbmltYXRlKHQuY3VycmVudFNsaWRlLHQudmFycy5wYXVzZU9uQWN0aW9uLCEwKX1zPW51bGwsbz1udWxsLG09bnVsbCxsPW51bGwsdz0wfX12YXIgcyxvLGwsYyxtLGYsZyxoLFMseD0hMSx5PTAsYj0wLHc9MDtyPyh0LnN0eWxlLm1zVG91Y2hBY3Rpb249XCJub25lXCIsdC5fZ2VzdHVyZT1uZXcgTVNHZXN0dXJlLHQuX2dlc3R1cmUudGFyZ2V0PXQsdC5hZGRFdmVudExpc3RlbmVyKFwiTVNQb2ludGVyRG93blwiLGUsITEpLHQuX3NsaWRlcj1uLHQuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZUNoYW5nZVwiLGEsITEpLHQuYWRkRXZlbnRMaXN0ZW5lcihcIk1TR2VzdHVyZUVuZFwiLGksITEpKTooZz1mdW5jdGlvbihlKXtuLmFuaW1hdGluZz9lLnByZXZlbnREZWZhdWx0KCk6KHdpbmRvdy5uYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZHx8MT09PWUudG91Y2hlcy5sZW5ndGgpJiYobi5wYXVzZSgpLGM9ZD9uLmg6bi53LGY9TnVtYmVyKG5ldyBEYXRlKSx5PWUudG91Y2hlc1swXS5wYWdlWCxiPWUudG91Y2hlc1swXS5wYWdlWSxsPXYmJnUmJm4uYW5pbWF0aW5nVG89PT1uLmxhc3Q/MDp2JiZ1P24ubGltaXQtKG4uaXRlbVcrbi52YXJzLml0ZW1NYXJnaW4pKm4ubW92ZSpuLmFuaW1hdGluZ1RvOnYmJm4uY3VycmVudFNsaWRlPT09bi5sYXN0P24ubGltaXQ6dj8obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uY3VycmVudFNsaWRlOnU/KG4ubGFzdC1uLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSpjOihuLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSpjLHM9ZD9iOnksbz1kP3k6Yix0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixoLCExKSx0LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLFMsITEpKX0saD1mdW5jdGlvbihlKXt5PWUudG91Y2hlc1swXS5wYWdlWCxiPWUudG91Y2hlc1swXS5wYWdlWSxtPWQ/cy1iOihuLnZhcnMucnRsPy0xOjEpKihzLXkpLHg9ZD9NYXRoLmFicyhtKTxNYXRoLmFicyh5LW8pOk1hdGguYWJzKG0pPE1hdGguYWJzKGItbyk7dmFyIHQ9NTAwOygheHx8TnVtYmVyKG5ldyBEYXRlKS1mPjUwMCkmJihlLnByZXZlbnREZWZhdWx0KCksIXAmJm4udHJhbnNpdGlvbnMmJihuLnZhcnMuYW5pbWF0aW9uTG9vcHx8KG0vPTA9PT1uLmN1cnJlbnRTbGlkZSYmbTwwfHxuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCYmbT4wP01hdGguYWJzKG0pL2MrMjoxKSxuLnNldFByb3BzKGwrbSxcInNldFRvdWNoXCIpKSl9LFM9ZnVuY3Rpb24oZSl7aWYodC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsaCwhMSksbi5hbmltYXRpbmdUbz09PW4uY3VycmVudFNsaWRlJiYheCYmbnVsbCE9PW0pe3ZhciBhPXU/LW06bSxpPWE+MD9uLmdldFRhcmdldChcIm5leHRcIik6bi5nZXRUYXJnZXQoXCJwcmV2XCIpO24uY2FuQWR2YW5jZShpKSYmKE51bWJlcihuZXcgRGF0ZSktZjw1NTAmJk1hdGguYWJzKGEpPjUwfHxNYXRoLmFicyhhKT5jLzIpP24uZmxleEFuaW1hdGUoaSxuLnZhcnMucGF1c2VPbkFjdGlvbik6cHx8bi5mbGV4QW5pbWF0ZShuLmN1cnJlbnRTbGlkZSxuLnZhcnMucGF1c2VPbkFjdGlvbiwhMCl9dC5yZW1vdmVFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIixTLCExKSxzPW51bGwsbz1udWxsLG09bnVsbCxsPW51bGx9LHQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIixnLCExKSl9LHJlc2l6ZTpmdW5jdGlvbigpeyFuLmFuaW1hdGluZyYmbi5pcyhcIjp2aXNpYmxlXCIpJiYodnx8bi5kb01hdGgoKSxwP2Yuc21vb3RoSGVpZ2h0KCk6dj8obi5zbGlkZXMud2lkdGgobi5jb21wdXRlZFcpLG4udXBkYXRlKG4ucGFnaW5nQ291bnQpLG4uc2V0UHJvcHMoKSk6ZD8obi52aWV3cG9ydC5oZWlnaHQobi5oKSxuLnNldFByb3BzKG4uaCxcInNldFRvdGFsXCIpKToobi52YXJzLnNtb290aEhlaWdodCYmZi5zbW9vdGhIZWlnaHQoKSxuLm5ld1NsaWRlcy53aWR0aChuLmNvbXB1dGVkVyksbi5zZXRQcm9wcyhuLmNvbXB1dGVkVyxcInNldFRvdGFsXCIpKSl9LHNtb290aEhlaWdodDpmdW5jdGlvbihlKXtpZighZHx8cCl7dmFyIHQ9cD9uOm4udmlld3BvcnQ7ZT90LmFuaW1hdGUoe2hlaWdodDpuLnNsaWRlcy5lcShuLmFuaW1hdGluZ1RvKS5pbm5lckhlaWdodCgpfSxlKTp0LmlubmVySGVpZ2h0KG4uc2xpZGVzLmVxKG4uYW5pbWF0aW5nVG8pLmlubmVySGVpZ2h0KCkpfX0sc3luYzpmdW5jdGlvbihlKXt2YXIgdD0kKG4udmFycy5zeW5jKS5kYXRhKFwiZmxleHNsaWRlclwiKSxhPW4uYW5pbWF0aW5nVG87c3dpdGNoKGUpe2Nhc2VcImFuaW1hdGVcIjp0LmZsZXhBbmltYXRlKGEsbi52YXJzLnBhdXNlT25BY3Rpb24sITEsITApO2JyZWFrO2Nhc2VcInBsYXlcIjp0LnBsYXlpbmd8fHQuYXNOYXZ8fHQucGxheSgpO2JyZWFrO2Nhc2VcInBhdXNlXCI6dC5wYXVzZSgpO2JyZWFrfX0sdW5pcXVlSUQ6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuZmlsdGVyKFwiW2lkXVwiKS5hZGQoZS5maW5kKFwiW2lkXVwiKSkuZWFjaChmdW5jdGlvbigpe3ZhciBlPSQodGhpcyk7ZS5hdHRyKFwiaWRcIixlLmF0dHIoXCJpZFwiKStcIl9jbG9uZVwiKX0pLGV9LHBhdXNlSW52aXNpYmxlOnt2aXNQcm9wOm51bGwsaW5pdDpmdW5jdGlvbigpe3ZhciBlPWYucGF1c2VJbnZpc2libGUuZ2V0SGlkZGVuUHJvcCgpO2lmKGUpe3ZhciB0PWUucmVwbGFjZSgvW0h8aF1pZGRlbi8sXCJcIikrXCJ2aXNpYmlsaXR5Y2hhbmdlXCI7ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0LGZ1bmN0aW9uKCl7Zi5wYXVzZUludmlzaWJsZS5pc0hpZGRlbigpP24uc3RhcnRUaW1lb3V0P2NsZWFyVGltZW91dChuLnN0YXJ0VGltZW91dCk6bi5wYXVzZSgpOm4uc3RhcnRlZD9uLnBsYXkoKTpuLnZhcnMuaW5pdERlbGF5PjA/c2V0VGltZW91dChuLnBsYXksbi52YXJzLmluaXREZWxheSk6bi5wbGF5KCl9KX19LGlzSGlkZGVuOmZ1bmN0aW9uKCl7dmFyIGU9Zi5wYXVzZUludmlzaWJsZS5nZXRIaWRkZW5Qcm9wKCk7cmV0dXJuISFlJiZkb2N1bWVudFtlXX0sZ2V0SGlkZGVuUHJvcDpmdW5jdGlvbigpe3ZhciBlPVtcIndlYmtpdFwiLFwibW96XCIsXCJtc1wiLFwib1wiXTtpZihcImhpZGRlblwiaW4gZG9jdW1lbnQpcmV0dXJuXCJoaWRkZW5cIjtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKylpZihlW3RdK1wiSGlkZGVuXCJpbiBkb2N1bWVudClyZXR1cm4gZVt0XStcIkhpZGRlblwiO3JldHVybiBudWxsfX0sc2V0VG9DbGVhcldhdGNoZWRFdmVudDpmdW5jdGlvbigpe2NsZWFyVGltZW91dChjKSxjPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtsPVwiXCJ9LDNlMyl9fSxuLmZsZXhBbmltYXRlPWZ1bmN0aW9uKGUsdCxhLHIsbyl7aWYobi52YXJzLmFuaW1hdGlvbkxvb3B8fGU9PT1uLmN1cnJlbnRTbGlkZXx8KG4uZGlyZWN0aW9uPWU+bi5jdXJyZW50U2xpZGU/XCJuZXh0XCI6XCJwcmV2XCIpLG0mJjE9PT1uLnBhZ2luZ0NvdW50JiYobi5kaXJlY3Rpb249bi5jdXJyZW50SXRlbTxlP1wibmV4dFwiOlwicHJldlwiKSwhbi5hbmltYXRpbmcmJihuLmNhbkFkdmFuY2UoZSxvKXx8YSkmJm4uaXMoXCI6dmlzaWJsZVwiKSl7aWYobSYmcil7dmFyIGw9JChuLnZhcnMuYXNOYXZGb3IpLmRhdGEoXCJmbGV4c2xpZGVyXCIpO2lmKG4uYXRFbmQ9MD09PWV8fGU9PT1uLmNvdW50LTEsbC5mbGV4QW5pbWF0ZShlLCEwLCExLCEwLG8pLG4uZGlyZWN0aW9uPW4uY3VycmVudEl0ZW08ZT9cIm5leHRcIjpcInByZXZcIixsLmRpcmVjdGlvbj1uLmRpcmVjdGlvbixNYXRoLmNlaWwoKGUrMSkvbi52aXNpYmxlKS0xPT09bi5jdXJyZW50U2xpZGV8fDA9PT1lKXJldHVybiBuLmN1cnJlbnRJdGVtPWUsbi5zbGlkZXMucmVtb3ZlQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKS5lcShlKS5hZGRDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLCExO24uY3VycmVudEl0ZW09ZSxuLnNsaWRlcy5yZW1vdmVDbGFzcyhpK1wiYWN0aXZlLXNsaWRlXCIpLmVxKGUpLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIiksZT1NYXRoLmZsb29yKGUvbi52aXNpYmxlKX1pZihuLmFuaW1hdGluZz0hMCxuLmFuaW1hdGluZ1RvPWUsdCYmbi5wYXVzZSgpLG4udmFycy5iZWZvcmUobiksbi5zeW5jRXhpc3RzJiYhbyYmZi5zeW5jKFwiYW5pbWF0ZVwiKSxuLnZhcnMuY29udHJvbE5hdiYmZi5jb250cm9sTmF2LmFjdGl2ZSgpLHZ8fG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEoZSkuYWRkQ2xhc3MoaStcImFjdGl2ZS1zbGlkZVwiKSxuLmF0RW5kPTA9PT1lfHxlPT09bi5sYXN0LG4udmFycy5kaXJlY3Rpb25OYXYmJmYuZGlyZWN0aW9uTmF2LnVwZGF0ZSgpLGU9PT1uLmxhc3QmJihuLnZhcnMuZW5kKG4pLG4udmFycy5hbmltYXRpb25Mb29wfHxuLnBhdXNlKCkpLHApcz8obi5zbGlkZXMuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7b3BhY2l0eTowLHpJbmRleDoxfSksbi5zbGlkZXMuZXEoZSkuY3NzKHtvcGFjaXR5OjEsekluZGV4OjJ9KSxuLndyYXB1cChjKSk6KG4uc2xpZGVzLmVxKG4uY3VycmVudFNsaWRlKS5jc3Moe3pJbmRleDoxfSkuYW5pbWF0ZSh7b3BhY2l0eTowfSxuLnZhcnMuYW5pbWF0aW9uU3BlZWQsbi52YXJzLmVhc2luZyksbi5zbGlkZXMuZXEoZSkuY3NzKHt6SW5kZXg6Mn0pLmFuaW1hdGUoe29wYWNpdHk6MX0sbi52YXJzLmFuaW1hdGlvblNwZWVkLG4udmFycy5lYXNpbmcsbi53cmFwdXApKTtlbHNle3ZhciBjPWQ/bi5zbGlkZXMuZmlsdGVyKFwiOmZpcnN0XCIpLmhlaWdodCgpOm4uY29tcHV0ZWRXLGcsaCxTO3Y/KGc9bi52YXJzLml0ZW1NYXJnaW4sUz0obi5pdGVtVytnKSpuLm1vdmUqbi5hbmltYXRpbmdUbyxoPVM+bi5saW1pdCYmMSE9PW4udmlzaWJsZT9uLmxpbWl0OlMpOmg9MD09PW4uY3VycmVudFNsaWRlJiZlPT09bi5jb3VudC0xJiZuLnZhcnMuYW5pbWF0aW9uTG9vcCYmXCJuZXh0XCIhPT1uLmRpcmVjdGlvbj91PyhuLmNvdW50K24uY2xvbmVPZmZzZXQpKmM6MDpuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCYmMD09PWUmJm4udmFycy5hbmltYXRpb25Mb29wJiZcInByZXZcIiE9PW4uZGlyZWN0aW9uP3U/MDoobi5jb3VudCsxKSpjOnU/KG4uY291bnQtMS1lK24uY2xvbmVPZmZzZXQpKmM6KGUrbi5jbG9uZU9mZnNldCkqYyxuLnNldFByb3BzKGgsXCJcIixuLnZhcnMuYW5pbWF0aW9uU3BlZWQpLG4udHJhbnNpdGlvbnM/KG4udmFycy5hbmltYXRpb25Mb29wJiZuLmF0RW5kfHwobi5hbmltYXRpbmc9ITEsbi5jdXJyZW50U2xpZGU9bi5hbmltYXRpbmdUbyksbi5jb250YWluZXIudW5iaW5kKFwid2Via2l0VHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kXCIpLG4uY29udGFpbmVyLmJpbmQoXCJ3ZWJraXRUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmRcIixmdW5jdGlvbigpe2NsZWFyVGltZW91dChuLmVuc3VyZUFuaW1hdGlvbkVuZCksbi53cmFwdXAoYyl9KSxjbGVhclRpbWVvdXQobi5lbnN1cmVBbmltYXRpb25FbmQpLG4uZW5zdXJlQW5pbWF0aW9uRW5kPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLndyYXB1cChjKX0sbi52YXJzLmFuaW1hdGlvblNwZWVkKzEwMCkpOm4uY29udGFpbmVyLmFuaW1hdGUobi5hcmdzLG4udmFycy5hbmltYXRpb25TcGVlZCxuLnZhcnMuZWFzaW5nLGZ1bmN0aW9uKCl7bi53cmFwdXAoYyl9KX1uLnZhcnMuc21vb3RoSGVpZ2h0JiZmLnNtb290aEhlaWdodChuLnZhcnMuYW5pbWF0aW9uU3BlZWQpfX0sbi53cmFwdXA9ZnVuY3Rpb24oZSl7cHx8dnx8KDA9PT1uLmN1cnJlbnRTbGlkZSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdCYmbi52YXJzLmFuaW1hdGlvbkxvb3A/bi5zZXRQcm9wcyhlLFwianVtcEVuZFwiKTpuLmN1cnJlbnRTbGlkZT09PW4ubGFzdCYmMD09PW4uYW5pbWF0aW5nVG8mJm4udmFycy5hbmltYXRpb25Mb29wJiZuLnNldFByb3BzKGUsXCJqdW1wU3RhcnRcIikpLG4uYW5pbWF0aW5nPSExLG4uY3VycmVudFNsaWRlPW4uYW5pbWF0aW5nVG8sbi52YXJzLmFmdGVyKG4pfSxuLmFuaW1hdGVTbGlkZXM9ZnVuY3Rpb24oKXshbi5hbmltYXRpbmcmJmUmJm4uZmxleEFuaW1hdGUobi5nZXRUYXJnZXQoXCJuZXh0XCIpKX0sbi5wYXVzZT1mdW5jdGlvbigpe2NsZWFySW50ZXJ2YWwobi5hbmltYXRlZFNsaWRlcyksbi5hbmltYXRlZFNsaWRlcz1udWxsLG4ucGxheWluZz0hMSxuLnZhcnMucGF1c2VQbGF5JiZmLnBhdXNlUGxheS51cGRhdGUoXCJwbGF5XCIpLG4uc3luY0V4aXN0cyYmZi5zeW5jKFwicGF1c2VcIil9LG4ucGxheT1mdW5jdGlvbigpe24ucGxheWluZyYmY2xlYXJJbnRlcnZhbChuLmFuaW1hdGVkU2xpZGVzKSxuLmFuaW1hdGVkU2xpZGVzPW4uYW5pbWF0ZWRTbGlkZXN8fHNldEludGVydmFsKG4uYW5pbWF0ZVNsaWRlcyxuLnZhcnMuc2xpZGVzaG93U3BlZWQpLG4uc3RhcnRlZD1uLnBsYXlpbmc9ITAsbi52YXJzLnBhdXNlUGxheSYmZi5wYXVzZVBsYXkudXBkYXRlKFwicGF1c2VcIiksbi5zeW5jRXhpc3RzJiZmLnN5bmMoXCJwbGF5XCIpfSxuLnN0b3A9ZnVuY3Rpb24oKXtuLnBhdXNlKCksbi5zdG9wcGVkPSEwfSxuLmNhbkFkdmFuY2U9ZnVuY3Rpb24oZSx0KXt2YXIgYT1tP24ucGFnaW5nQ291bnQtMTpuLmxhc3Q7cmV0dXJuISF0fHwoISghbXx8bi5jdXJyZW50SXRlbSE9PW4uY291bnQtMXx8MCE9PWV8fFwicHJldlwiIT09bi5kaXJlY3Rpb24pfHwoIW18fDAhPT1uLmN1cnJlbnRJdGVtfHxlIT09bi5wYWdpbmdDb3VudC0xfHxcIm5leHRcIj09PW4uZGlyZWN0aW9uKSYmKCEoZT09PW4uY3VycmVudFNsaWRlJiYhbSkmJighIW4udmFycy5hbmltYXRpb25Mb29wfHwoIW4uYXRFbmR8fDAhPT1uLmN1cnJlbnRTbGlkZXx8ZSE9PWF8fFwibmV4dFwiPT09bi5kaXJlY3Rpb24pJiYoIW4uYXRFbmR8fG4uY3VycmVudFNsaWRlIT09YXx8MCE9PWV8fFwibmV4dFwiIT09bi5kaXJlY3Rpb24pKSkpfSxuLmdldFRhcmdldD1mdW5jdGlvbihlKXtyZXR1cm4gbi5kaXJlY3Rpb249ZSxcIm5leHRcIj09PWU/bi5jdXJyZW50U2xpZGU9PT1uLmxhc3Q/MDpuLmN1cnJlbnRTbGlkZSsxOjA9PT1uLmN1cnJlbnRTbGlkZT9uLmxhc3Q6bi5jdXJyZW50U2xpZGUtMX0sbi5zZXRQcm9wcz1mdW5jdGlvbihlLHQsYSl7dmFyIGk9ZnVuY3Rpb24oKXt2YXIgYT1lfHwobi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uYW5pbWF0aW5nVG87cmV0dXJuIGZ1bmN0aW9uKCl7aWYodilyZXR1cm5cInNldFRvdWNoXCI9PT10P2U6dSYmbi5hbmltYXRpbmdUbz09PW4ubGFzdD8wOnU/bi5saW1pdC0obi5pdGVtVytuLnZhcnMuaXRlbU1hcmdpbikqbi5tb3ZlKm4uYW5pbWF0aW5nVG86bi5hbmltYXRpbmdUbz09PW4ubGFzdD9uLmxpbWl0OmE7c3dpdGNoKHQpe2Nhc2VcInNldFRvdGFsXCI6cmV0dXJuIHU/KG4uY291bnQtMS1uLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSplOihuLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0KSplO2Nhc2VcInNldFRvdWNoXCI6cmV0dXJuIGU7Y2FzZVwianVtcEVuZFwiOnJldHVybiB1P2U6bi5jb3VudCplO2Nhc2VcImp1bXBTdGFydFwiOnJldHVybiB1P24uY291bnQqZTplO2RlZmF1bHQ6cmV0dXJuIGV9fSgpKihuLnZhcnMucnRsPzE6LTEpK1wicHhcIn0oKTtuLnRyYW5zaXRpb25zJiYoaT1uLmlzRmlyZWZveD9kP1widHJhbnNsYXRlM2QoMCxcIitpK1wiLDApXCI6XCJ0cmFuc2xhdGUzZChcIitwYXJzZUludChpKStcInB4LDAsMClcIjpkP1widHJhbnNsYXRlM2QoMCxcIitpK1wiLDApXCI6XCJ0cmFuc2xhdGUzZChcIisobi52YXJzLnJ0bD8tMToxKSpwYXJzZUludChpKStcInB4LDAsMClcIixhPXZvaWQgMCE9PWE/YS8xZTMrXCJzXCI6XCIwc1wiLG4uY29udGFpbmVyLmNzcyhcIi1cIituLnBmeCtcIi10cmFuc2l0aW9uLWR1cmF0aW9uXCIsYSksbi5jb250YWluZXIuY3NzKFwidHJhbnNpdGlvbi1kdXJhdGlvblwiLGEpKSxuLmFyZ3Nbbi5wcm9wXT1pLChuLnRyYW5zaXRpb25zfHx2b2lkIDA9PT1hKSYmbi5jb250YWluZXIuY3NzKG4uYXJncyksbi5jb250YWluZXIuY3NzKFwidHJhbnNmb3JtXCIsaSl9LG4uc2V0dXA9ZnVuY3Rpb24oZSl7aWYocCluLnZhcnMucnRsP24uc2xpZGVzLmNzcyh7d2lkdGg6XCIxMDAlXCIsZmxvYXQ6XCJyaWdodFwiLG1hcmdpbkxlZnQ6XCItMTAwJVwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIn0pOm4uc2xpZGVzLmNzcyh7d2lkdGg6XCIxMDAlXCIsZmxvYXQ6XCJsZWZ0XCIsbWFyZ2luUmlnaHQ6XCItMTAwJVwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIn0pLFwiaW5pdFwiPT09ZSYmKHM/bi5zbGlkZXMuY3NzKHtvcGFjaXR5OjAsZGlzcGxheTpcImJsb2NrXCIsd2Via2l0VHJhbnNpdGlvbjpcIm9wYWNpdHkgXCIrbi52YXJzLmFuaW1hdGlvblNwZWVkLzFlMytcInMgZWFzZVwiLHpJbmRleDoxfSkuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7b3BhY2l0eToxLHpJbmRleDoyfSk6MD09bi52YXJzLmZhZGVGaXJzdFNsaWRlP24uc2xpZGVzLmNzcyh7b3BhY2l0eTowLGRpc3BsYXk6XCJibG9ja1wiLHpJbmRleDoxfSkuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7ekluZGV4OjJ9KS5jc3Moe29wYWNpdHk6MX0pOm4uc2xpZGVzLmNzcyh7b3BhY2l0eTowLGRpc3BsYXk6XCJibG9ja1wiLHpJbmRleDoxfSkuZXEobi5jdXJyZW50U2xpZGUpLmNzcyh7ekluZGV4OjJ9KS5hbmltYXRlKHtvcGFjaXR5OjF9LG4udmFycy5hbmltYXRpb25TcGVlZCxuLnZhcnMuZWFzaW5nKSksbi52YXJzLnNtb290aEhlaWdodCYmZi5zbW9vdGhIZWlnaHQoKTtlbHNle3ZhciB0LGE7XCJpbml0XCI9PT1lJiYobi52aWV3cG9ydD0kKCc8ZGl2IGNsYXNzPVwiJytpKyd2aWV3cG9ydFwiPjwvZGl2PicpLmNzcyh7b3ZlcmZsb3c6XCJoaWRkZW5cIixwb3NpdGlvbjpcInJlbGF0aXZlXCJ9KS5hcHBlbmRUbyhuKS5hcHBlbmQobi5jb250YWluZXIpLG4uY2xvbmVDb3VudD0wLG4uY2xvbmVPZmZzZXQ9MCx1JiYoYT0kLm1ha2VBcnJheShuLnNsaWRlcykucmV2ZXJzZSgpLG4uc2xpZGVzPSQoYSksbi5jb250YWluZXIuZW1wdHkoKS5hcHBlbmQobi5zbGlkZXMpKSksbi52YXJzLmFuaW1hdGlvbkxvb3AmJiF2JiYobi5jbG9uZUNvdW50PTIsbi5jbG9uZU9mZnNldD0xLFwiaW5pdFwiIT09ZSYmbi5jb250YWluZXIuZmluZChcIi5jbG9uZVwiKS5yZW1vdmUoKSxuLmNvbnRhaW5lci5hcHBlbmQoZi51bmlxdWVJRChuLnNsaWRlcy5maXJzdCgpLmNsb25lKCkuYWRkQ2xhc3MoXCJjbG9uZVwiKSkuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpKS5wcmVwZW5kKGYudW5pcXVlSUQobi5zbGlkZXMubGFzdCgpLmNsb25lKCkuYWRkQ2xhc3MoXCJjbG9uZVwiKSkuYXR0cihcImFyaWEtaGlkZGVuXCIsXCJ0cnVlXCIpKSksbi5uZXdTbGlkZXM9JChuLnZhcnMuc2VsZWN0b3IsbiksdD11P24uY291bnQtMS1uLmN1cnJlbnRTbGlkZStuLmNsb25lT2Zmc2V0Om4uY3VycmVudFNsaWRlK24uY2xvbmVPZmZzZXQsZCYmIXY/KG4uY29udGFpbmVyLmhlaWdodCgyMDAqKG4uY291bnQrbi5jbG9uZUNvdW50KStcIiVcIikuY3NzKFwicG9zaXRpb25cIixcImFic29sdXRlXCIpLndpZHRoKFwiMTAwJVwiKSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5uZXdTbGlkZXMuY3NzKHtkaXNwbGF5OlwiYmxvY2tcIn0pLG4uZG9NYXRoKCksbi52aWV3cG9ydC5oZWlnaHQobi5oKSxuLnNldFByb3BzKHQqbi5oLFwiaW5pdFwiKX0sXCJpbml0XCI9PT1lPzEwMDowKSk6KG4uY29udGFpbmVyLndpZHRoKDIwMCoobi5jb3VudCtuLmNsb25lQ291bnQpK1wiJVwiKSxuLnNldFByb3BzKHQqbi5jb21wdXRlZFcsXCJpbml0XCIpLHNldFRpbWVvdXQoZnVuY3Rpb24oKXtuLmRvTWF0aCgpLG4udmFycy5ydGwmJm4uaXNGaXJlZm94P24ubmV3U2xpZGVzLmNzcyh7d2lkdGg6bi5jb21wdXRlZFcsbWFyZ2luUmlnaHQ6bi5jb21wdXRlZE0sZmxvYXQ6XCJyaWdodFwiLGRpc3BsYXk6XCJibG9ja1wifSk6bi5uZXdTbGlkZXMuY3NzKHt3aWR0aDpuLmNvbXB1dGVkVyxtYXJnaW5SaWdodDpuLmNvbXB1dGVkTSxmbG9hdDpcImxlZnRcIixkaXNwbGF5OlwiYmxvY2tcIn0pLG4udmFycy5zbW9vdGhIZWlnaHQmJmYuc21vb3RoSGVpZ2h0KCl9LFwiaW5pdFwiPT09ZT8xMDA6MCkpfXZ8fG4uc2xpZGVzLnJlbW92ZUNsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIikuZXEobi5jdXJyZW50U2xpZGUpLmFkZENsYXNzKGkrXCJhY3RpdmUtc2xpZGVcIiksbi52YXJzLmluaXQobil9LG4uZG9NYXRoPWZ1bmN0aW9uKCl7dmFyIGU9bi5zbGlkZXMuZmlyc3QoKSx0PW4udmFycy5pdGVtTWFyZ2luLGE9bi52YXJzLm1pbkl0ZW1zLGk9bi52YXJzLm1heEl0ZW1zO24udz12b2lkIDA9PT1uLnZpZXdwb3J0P24ud2lkdGgoKTpuLnZpZXdwb3J0LndpZHRoKCksbi5pc0ZpcmVmb3gmJihuLnc9bi53aWR0aCgpKSxuLmg9ZS5oZWlnaHQoKSxuLmJveFBhZGRpbmc9ZS5vdXRlcldpZHRoKCktZS53aWR0aCgpLHY/KG4uaXRlbVQ9bi52YXJzLml0ZW1XaWR0aCt0LG4uaXRlbU09dCxuLm1pblc9YT9hKm4uaXRlbVQ6bi53LG4ubWF4Vz1pP2kqbi5pdGVtVC10Om4udyxuLml0ZW1XPW4ubWluVz5uLnc/KG4udy10KihhLTEpKS9hOm4ubWF4VzxuLnc/KG4udy10KihpLTEpKS9pOm4udmFycy5pdGVtV2lkdGg+bi53P24udzpuLnZhcnMuaXRlbVdpZHRoLG4udmlzaWJsZT1NYXRoLmZsb29yKG4udy9uLml0ZW1XKSxuLm1vdmU9bi52YXJzLm1vdmU+MCYmbi52YXJzLm1vdmU8bi52aXNpYmxlP24udmFycy5tb3ZlOm4udmlzaWJsZSxuLnBhZ2luZ0NvdW50PU1hdGguY2VpbCgobi5jb3VudC1uLnZpc2libGUpL24ubW92ZSsxKSxuLmxhc3Q9bi5wYWdpbmdDb3VudC0xLG4ubGltaXQ9MT09PW4ucGFnaW5nQ291bnQ/MDpuLnZhcnMuaXRlbVdpZHRoPm4udz9uLml0ZW1XKihuLmNvdW50LTEpK3QqKG4uY291bnQtMSk6KG4uaXRlbVcrdCkqbi5jb3VudC1uLnctdCk6KG4uaXRlbVc9bi53LG4uaXRlbU09dCxuLnBhZ2luZ0NvdW50PW4uY291bnQsbi5sYXN0PW4uY291bnQtMSksbi5jb21wdXRlZFc9bi5pdGVtVy1uLmJveFBhZGRpbmcsbi5jb21wdXRlZE09bi5pdGVtTX0sbi51cGRhdGU9ZnVuY3Rpb24oZSx0KXtuLmRvTWF0aCgpLHZ8fChlPG4uY3VycmVudFNsaWRlP24uY3VycmVudFNsaWRlKz0xOmU8PW4uY3VycmVudFNsaWRlJiYwIT09ZSYmKG4uY3VycmVudFNsaWRlLT0xKSxuLmFuaW1hdGluZ1RvPW4uY3VycmVudFNsaWRlKSxuLnZhcnMuY29udHJvbE5hdiYmIW4ubWFudWFsQ29udHJvbHMmJihcImFkZFwiPT09dCYmIXZ8fG4ucGFnaW5nQ291bnQ+bi5jb250cm9sTmF2Lmxlbmd0aD9mLmNvbnRyb2xOYXYudXBkYXRlKFwiYWRkXCIpOihcInJlbW92ZVwiPT09dCYmIXZ8fG4ucGFnaW5nQ291bnQ8bi5jb250cm9sTmF2Lmxlbmd0aCkmJih2JiZuLmN1cnJlbnRTbGlkZT5uLmxhc3QmJihuLmN1cnJlbnRTbGlkZS09MSxuLmFuaW1hdGluZ1RvLT0xKSxmLmNvbnRyb2xOYXYudXBkYXRlKFwicmVtb3ZlXCIsbi5sYXN0KSkpLG4udmFycy5kaXJlY3Rpb25OYXYmJmYuZGlyZWN0aW9uTmF2LnVwZGF0ZSgpfSxuLmFkZFNsaWRlPWZ1bmN0aW9uKGUsdCl7dmFyIGE9JChlKTtuLmNvdW50Kz0xLG4ubGFzdD1uLmNvdW50LTEsZCYmdT92b2lkIDAhPT10P24uc2xpZGVzLmVxKG4uY291bnQtdCkuYWZ0ZXIoYSk6bi5jb250YWluZXIucHJlcGVuZChhKTp2b2lkIDAhPT10P24uc2xpZGVzLmVxKHQpLmJlZm9yZShhKTpuLmNvbnRhaW5lci5hcHBlbmQoYSksbi51cGRhdGUodCxcImFkZFwiKSxuLnNsaWRlcz0kKG4udmFycy5zZWxlY3RvcitcIjpub3QoLmNsb25lKVwiLG4pLG4uc2V0dXAoKSxuLnZhcnMuYWRkZWQobil9LG4ucmVtb3ZlU2xpZGU9ZnVuY3Rpb24oZSl7dmFyIHQ9aXNOYU4oZSk/bi5zbGlkZXMuaW5kZXgoJChlKSk6ZTtuLmNvdW50LT0xLG4ubGFzdD1uLmNvdW50LTEsaXNOYU4oZSk/JChlLG4uc2xpZGVzKS5yZW1vdmUoKTpkJiZ1P24uc2xpZGVzLmVxKG4ubGFzdCkucmVtb3ZlKCk6bi5zbGlkZXMuZXEoZSkucmVtb3ZlKCksbi5kb01hdGgoKSxuLnVwZGF0ZSh0LFwicmVtb3ZlXCIpLG4uc2xpZGVzPSQobi52YXJzLnNlbGVjdG9yK1wiOm5vdCguY2xvbmUpXCIsbiksbi5zZXR1cCgpLG4udmFycy5yZW1vdmVkKG4pfSxmLmluaXQoKX0sJCh3aW5kb3cpLmJsdXIoZnVuY3Rpb24odCl7ZT0hMX0pLmZvY3VzKGZ1bmN0aW9uKHQpe2U9ITB9KSwkLmZsZXhzbGlkZXIuZGVmYXVsdHM9e25hbWVzcGFjZTpcImZsZXgtXCIsc2VsZWN0b3I6XCIuc2xpZGVzID4gbGlcIixhbmltYXRpb246XCJmYWRlXCIsZWFzaW5nOlwic3dpbmdcIixkaXJlY3Rpb246XCJob3Jpem9udGFsXCIscmV2ZXJzZTohMSxhbmltYXRpb25Mb29wOiEwLHNtb290aEhlaWdodDohMSxzdGFydEF0OjAsc2xpZGVzaG93OiEwLHNsaWRlc2hvd1NwZWVkOjdlMyxhbmltYXRpb25TcGVlZDo2MDAsaW5pdERlbGF5OjAscmFuZG9taXplOiExLGZhZGVGaXJzdFNsaWRlOiEwLHRodW1iQ2FwdGlvbnM6ITEscGF1c2VPbkFjdGlvbjohMCxwYXVzZU9uSG92ZXI6ITEscGF1c2VJbnZpc2libGU6ITAsdXNlQ1NTOiEwLHRvdWNoOiEwLHZpZGVvOiExLGNvbnRyb2xOYXY6ITAsZGlyZWN0aW9uTmF2OiEwLHByZXZUZXh0OlwiUHJldmlvdXNcIixuZXh0VGV4dDpcIk5leHRcIixrZXlib2FyZDohMCxtdWx0aXBsZUtleWJvYXJkOiExLG1vdXNld2hlZWw6ITEscGF1c2VQbGF5OiExLHBhdXNlVGV4dDpcIlBhdXNlXCIscGxheVRleHQ6XCJQbGF5XCIsY29udHJvbHNDb250YWluZXI6XCJcIixtYW51YWxDb250cm9sczpcIlwiLGN1c3RvbURpcmVjdGlvbk5hdjpcIlwiLHN5bmM6XCJcIixhc05hdkZvcjpcIlwiLGl0ZW1XaWR0aDowLGl0ZW1NYXJnaW46MCxtaW5JdGVtczoxLG1heEl0ZW1zOjAsbW92ZTowLGFsbG93T25lU2xpZGU6ITAsaXNGaXJlZm94OiExLHN0YXJ0OmZ1bmN0aW9uKCl7fSxiZWZvcmU6ZnVuY3Rpb24oKXt9LGFmdGVyOmZ1bmN0aW9uKCl7fSxlbmQ6ZnVuY3Rpb24oKXt9LGFkZGVkOmZ1bmN0aW9uKCl7fSxyZW1vdmVkOmZ1bmN0aW9uKCl7fSxpbml0OmZ1bmN0aW9uKCl7fSxydGw6ITF9LCQuZm4uZmxleHNsaWRlcj1mdW5jdGlvbihlKXtpZih2b2lkIDA9PT1lJiYoZT17fSksXCJvYmplY3RcIj09dHlwZW9mIGUpcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpe3ZhciB0PSQodGhpcyksYT1lLnNlbGVjdG9yP2Uuc2VsZWN0b3I6XCIuc2xpZGVzID4gbGlcIixuPXQuZmluZChhKTsxPT09bi5sZW5ndGgmJiExPT09ZS5hbGxvd09uZVNsaWRlfHwwPT09bi5sZW5ndGg/KG4uZmFkZUluKDQwMCksZS5zdGFydCYmZS5zdGFydCh0KSk6dm9pZCAwPT09dC5kYXRhKFwiZmxleHNsaWRlclwiKSYmbmV3ICQuZmxleHNsaWRlcih0aGlzLGUpfSk7dmFyIHQ9JCh0aGlzKS5kYXRhKFwiZmxleHNsaWRlclwiKTtzd2l0Y2goZSl7Y2FzZVwicGxheVwiOnQucGxheSgpO2JyZWFrO2Nhc2VcInBhdXNlXCI6dC5wYXVzZSgpO2JyZWFrO2Nhc2VcInN0b3BcIjp0LnN0b3AoKTticmVhaztjYXNlXCJuZXh0XCI6dC5mbGV4QW5pbWF0ZSh0LmdldFRhcmdldChcIm5leHRcIiksITApO2JyZWFrO2Nhc2VcInByZXZcIjpjYXNlXCJwcmV2aW91c1wiOnQuZmxleEFuaW1hdGUodC5nZXRUYXJnZXQoXCJwcmV2XCIpLCEwKTticmVhaztkZWZhdWx0OlwibnVtYmVyXCI9PXR5cGVvZiBlJiZ0LmZsZXhBbmltYXRlKGUsITApfX19KGpRdWVyeSk7IiwiaW1wb3J0IFwiLi9qcXVlcnkuZmxleHNsaWRlci1taW5cIjtcclxuaW1wb3J0ICcuL21lbnUnO1xyXG5pbXBvcnQgXCIuL3NsaWRlclwiO1xyXG5pbXBvcnQgJy4vcmVuZGVyJzsiLCJ2YXIgJCA9IGpRdWVyeTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG4gICQoXCIjbWVudS1vcGVuXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIiNtZW51LW9wZW4gc3BhblwiKS50b2dnbGVDbGFzcyhcIm9wZW5cIik7XHJcbiAgICAkKFwiLm5hdlwiKS5zbGlkZVRvZ2dsZShcInNsb3dcIik7XHJcbiAgfSk7XHJcblxyXG4gIC8vcHJvZHVjdHMgc3ViIG1lbnVcclxuICAkKFwiLnByb2R1Y3RzLW1lbnUtbGluaz5hXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG4gICAgJChcIi5kb3dubG9hZHNcIikucmVtb3ZlQ2xhc3MoXCJzdWItbWVudS1vcGVuXCIpO1xyXG4gICAgJChcIi5wcm9kdWN0c1wiKS50b2dnbGVDbGFzcyhcInN1Yi1tZW51LW9wZW5cIik7XHJcbiAgfSk7XHJcblxyXG4gIC8vZG93bmxvYWRzIHN1YiBtZW51XHJcbiAgJChcIi5kb3dubG9hZC1tZW51LWxpbmtcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcbiAgICAkKFwiLnByb2R1Y3RzXCIpLnJlbW92ZUNsYXNzKFwic3ViLW1lbnUtb3BlblwiKTtcclxuICAgICQoXCIuZG93bmxvYWRzXCIpLnRvZ2dsZUNsYXNzKFwic3ViLW1lbnUtb3BlblwiKTtcclxuICB9KTtcclxufSk7IiwiLy9HcmFiIGl0ZW1zXHJcblxyXG4vL0ljb25zXHJcbmNvbnN0IHJlbmRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW5kZXInKTtcclxuY29uc3QgcXVvdGF0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1b3RhdGlvbicpO1xyXG5jb25zdCBsYXlvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGF5b3V0Jyk7XHJcbmNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFjaycpO1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gXHJcbi8vRHJvcGRvd24gQ29udGVudFxyXG5jb25zdCByZW5kZXJEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZW5kZXItaW1hZ2Utd3JhcHBlcicpO1xyXG5jb25zdCBxdW90YXRpb25Ecm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wZGYtd3JhcHBlcicpO1xyXG5jb25zdCBsYXlvdXREcm9wZHdvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXlvdXQtaW1hZ2Utd3JhcHBlcicpO1xyXG5cclxuLy9Db250ZW50IENyb3NzXHJcbmNvbnN0IHJlbmRlckNyb3NzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlbmRlci1jcm9zcycpO1xyXG5cclxuLy9FdmVudCBMaXN0ZW5lcnNcclxuaWYocmVuZGVyKSAvL2NoZWNrIGlmIGVsZW1lbnQgZXhpc3RzXHJcbnJlbmRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHJlbmRlckRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgc2Nyb2xsSGlkZSgpO1xyXG59KTtcclxuaWYobGF5b3V0KVxyXG5sYXlvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICBsYXlvdXREcm9wZHdvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIHNjcm9sbEhpZGUoKTtcclxufSk7XHJcbmlmKHF1b3RhdGlvbilcclxucXVvdGF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgcXVvdGF0aW9uRHJvcGRvd24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBzY3JvbGxIaWRlKCk7XHJcbn0pO1xyXG5cclxuLy9DbG9zZSBjb250ZW50XHJcbnJlbmRlckNyb3NzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZW5kZXIgJiYgcmVuZGVyRHJvcGRvd24uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG5cclxuICAgICAgICAgICAgcmVuZGVyRHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGJhY2tCdG4uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICAgICAgICAgIHNjcm9sbEJhckRlbGF5KCk7XHJcbiAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCAmJiBsYXlvdXREcm9wZHdvbi5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsYXlvdXREcm9wZHdvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgYmFja0J0bi5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcclxuICAgICAgICAgICAgc2Nyb2xsQmFyRGVsYXkoKTtcclxuICAgIFxyXG4gICAgICAgIH0gZWxzZSBpZiAocXVvdGF0aW9uICYmIHF1b3RhdGlvbkRyb3Bkb3duLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuXHJcbiAgICAgICAgICAgIHF1b3RhdGlvbkRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBiYWNrQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgICAgICBzY3JvbGxCYXJEZWxheSgpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59KTtcclxuXHJcbi8vUmVtb3ZlIG92ZXJmbG93IFxyXG5mdW5jdGlvbiBzY3JvbGxIaWRlKCkge1xyXG4gICAgLy9IaWRlIGJhY2sgYnV0dG9uXHJcbiAgICBiYWNrQnRuLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgLy9zY3JvbGwgdG8gdG9wXHJcbiAgICB3aW5kb3cuc2Nyb2xsKHtcclxuICAgICAgICB0b3A6IDEwMCxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xyXG4gICAgfSk7XHJcbiAgICAvLyBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKG1haW4pO1xyXG4gICAgLy8gbWFpbi5zY3JvbGxUb3AgPSAwO1xyXG4gICAgLy8gbWFpbi5zY3JvbGxMZWZ0ID0gMDtcclxuICAgIC8vcmVtb3ZlIG92ZXJmbG93XHJcbiAgICBib2R5LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xyXG59XHJcblxyXG4vL0RlbGF5IGZ1bmN0aW9uXHJcbmZ1bmN0aW9uIHNjcm9sbEJhckRlbGF5KCkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xyXG4gICAgICB9LCAxMDAwKTtcclxufSIsInZhciAkID0galF1ZXJ5O1xyXG5cclxuJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKSB7XHJcbiAgJChcIi5mbGV4c2xpZGVyXCIpLmZsZXhzbGlkZXIoe1xyXG4gICAgYW5pbWF0aW9uOiBcImZhZGVcIixcclxuICAgIHNsaWRlc2hvd1NwZWVkOiA1MDAwLFxyXG4gICAgYW5pbWF0aW9uU3BlZWQ6IDYwMCxcclxuICAgIGFuaW1hdGlvbkxvb3A6IHRydWUsXHJcbiAgICBwYXVzZU9uQWN0aW9uOiBmYWxzZSxcclxuICAgIGNvbnRyb2xOYXY6IHRydWUsXHJcbiAgICBydGw6IHRydWUsXHJcbiAgICBjdXN0b21EaXJlY3Rpb25OYXY6ICQoXCIuY3VzdG9tLW5hdmlnYXRpb24gYVwiKSxcclxuICB9KTtcclxufSk7XHJcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIoZnVuY3Rpb24gKGdsb2JhbCwgdW5kZWZpbmVkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBpZiAoZ2xvYmFsLnNldEltbWVkaWF0ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG5leHRIYW5kbGUgPSAxOyAvLyBTcGVjIHNheXMgZ3JlYXRlciB0aGFuIHplcm9cbiAgICB2YXIgdGFza3NCeUhhbmRsZSA9IHt9O1xuICAgIHZhciBjdXJyZW50bHlSdW5uaW5nQVRhc2sgPSBmYWxzZTtcbiAgICB2YXIgZG9jID0gZ2xvYmFsLmRvY3VtZW50O1xuICAgIHZhciByZWdpc3RlckltbWVkaWF0ZTtcblxuICAgIGZ1bmN0aW9uIHNldEltbWVkaWF0ZShjYWxsYmFjaykge1xuICAgICAgLy8gQ2FsbGJhY2sgY2FuIGVpdGhlciBiZSBhIGZ1bmN0aW9uIG9yIGEgc3RyaW5nXG4gICAgICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgY2FsbGJhY2sgPSBuZXcgRnVuY3Rpb24oXCJcIiArIGNhbGxiYWNrKTtcbiAgICAgIH1cbiAgICAgIC8vIENvcHkgZnVuY3Rpb24gYXJndW1lbnRzXG4gICAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBhcmdzW2ldID0gYXJndW1lbnRzW2kgKyAxXTtcbiAgICAgIH1cbiAgICAgIC8vIFN0b3JlIGFuZCByZWdpc3RlciB0aGUgdGFza1xuICAgICAgdmFyIHRhc2sgPSB7IGNhbGxiYWNrOiBjYWxsYmFjaywgYXJnczogYXJncyB9O1xuICAgICAgdGFza3NCeUhhbmRsZVtuZXh0SGFuZGxlXSA9IHRhc2s7XG4gICAgICByZWdpc3RlckltbWVkaWF0ZShuZXh0SGFuZGxlKTtcbiAgICAgIHJldHVybiBuZXh0SGFuZGxlKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaGFuZGxlKSB7XG4gICAgICAgIGRlbGV0ZSB0YXNrc0J5SGFuZGxlW2hhbmRsZV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuKHRhc2spIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gdGFzay5jYWxsYmFjaztcbiAgICAgICAgdmFyIGFyZ3MgPSB0YXNrLmFyZ3M7XG4gICAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBjYWxsYmFjayhhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkodW5kZWZpbmVkLCBhcmdzKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcnVuSWZQcmVzZW50KGhhbmRsZSkge1xuICAgICAgICAvLyBGcm9tIHRoZSBzcGVjOiBcIldhaXQgdW50aWwgYW55IGludm9jYXRpb25zIG9mIHRoaXMgYWxnb3JpdGhtIHN0YXJ0ZWQgYmVmb3JlIHRoaXMgb25lIGhhdmUgY29tcGxldGVkLlwiXG4gICAgICAgIC8vIFNvIGlmIHdlJ3JlIGN1cnJlbnRseSBydW5uaW5nIGEgdGFzaywgd2UnbGwgbmVlZCB0byBkZWxheSB0aGlzIGludm9jYXRpb24uXG4gICAgICAgIGlmIChjdXJyZW50bHlSdW5uaW5nQVRhc2spIHtcbiAgICAgICAgICAgIC8vIERlbGF5IGJ5IGRvaW5nIGEgc2V0VGltZW91dC4gc2V0SW1tZWRpYXRlIHdhcyB0cmllZCBpbnN0ZWFkLCBidXQgaW4gRmlyZWZveCA3IGl0IGdlbmVyYXRlZCBhXG4gICAgICAgICAgICAvLyBcInRvbyBtdWNoIHJlY3Vyc2lvblwiIGVycm9yLlxuICAgICAgICAgICAgc2V0VGltZW91dChydW5JZlByZXNlbnQsIDAsIGhhbmRsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdGFzayA9IHRhc2tzQnlIYW5kbGVbaGFuZGxlXTtcbiAgICAgICAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBydW4odGFzayk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbW1lZGlhdGUoaGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudGx5UnVubmluZ0FUYXNrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5zdGFsbE5leHRUaWNrSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHsgcnVuSWZQcmVzZW50KGhhbmRsZSk7IH0pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhblVzZVBvc3RNZXNzYWdlKCkge1xuICAgICAgICAvLyBUaGUgdGVzdCBhZ2FpbnN0IGBpbXBvcnRTY3JpcHRzYCBwcmV2ZW50cyB0aGlzIGltcGxlbWVudGF0aW9uIGZyb20gYmVpbmcgaW5zdGFsbGVkIGluc2lkZSBhIHdlYiB3b3JrZXIsXG4gICAgICAgIC8vIHdoZXJlIGBnbG9iYWwucG9zdE1lc3NhZ2VgIG1lYW5zIHNvbWV0aGluZyBjb21wbGV0ZWx5IGRpZmZlcmVudCBhbmQgY2FuJ3QgYmUgdXNlZCBmb3IgdGhpcyBwdXJwb3NlLlxuICAgICAgICBpZiAoZ2xvYmFsLnBvc3RNZXNzYWdlICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgICAgICAgICAgdmFyIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXMgPSB0cnVlO1xuICAgICAgICAgICAgdmFyIG9sZE9uTWVzc2FnZSA9IGdsb2JhbC5vbm1lc3NhZ2U7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcG9zdE1lc3NhZ2VJc0FzeW5jaHJvbm91cyA9IGZhbHNlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShcIlwiLCBcIipcIik7XG4gICAgICAgICAgICBnbG9iYWwub25tZXNzYWdlID0gb2xkT25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIHBvc3RNZXNzYWdlSXNBc3luY2hyb25vdXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgLy8gSW5zdGFsbHMgYW4gZXZlbnQgaGFuZGxlciBvbiBgZ2xvYmFsYCBmb3IgdGhlIGBtZXNzYWdlYCBldmVudDogc2VlXG4gICAgICAgIC8vICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5wb3N0TWVzc2FnZVxuICAgICAgICAvLyAqIGh0dHA6Ly93d3cud2hhdHdnLm9yZy9zcGVjcy93ZWItYXBwcy9jdXJyZW50LXdvcmsvbXVsdGlwYWdlL2NvbW1zLmh0bWwjY3Jvc3NEb2N1bWVudE1lc3NhZ2VzXG5cbiAgICAgICAgdmFyIG1lc3NhZ2VQcmVmaXggPSBcInNldEltbWVkaWF0ZSRcIiArIE1hdGgucmFuZG9tKCkgKyBcIiRcIjtcbiAgICAgICAgdmFyIG9uR2xvYmFsTWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQuc291cmNlID09PSBnbG9iYWwgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZXZlbnQuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmRhdGEuaW5kZXhPZihtZXNzYWdlUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJ1bklmUHJlc2VudCgrZXZlbnQuZGF0YS5zbGljZShtZXNzYWdlUHJlZml4Lmxlbmd0aCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSwgZmFsc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2xvYmFsLmF0dGFjaEV2ZW50KFwib25tZXNzYWdlXCIsIG9uR2xvYmFsTWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKG1lc3NhZ2VQcmVmaXggKyBoYW5kbGUsIFwiKlwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbnN0YWxsTWVzc2FnZUNoYW5uZWxJbXBsZW1lbnRhdGlvbigpIHtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIGhhbmRsZSA9IGV2ZW50LmRhdGE7XG4gICAgICAgICAgICBydW5JZlByZXNlbnQoaGFuZGxlKTtcbiAgICAgICAgfTtcblxuICAgICAgICByZWdpc3RlckltbWVkaWF0ZSA9IGZ1bmN0aW9uKGhhbmRsZSkge1xuICAgICAgICAgICAgY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZShoYW5kbGUpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHZhciBodG1sID0gZG9jLmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgcmVnaXN0ZXJJbW1lZGlhdGUgPSBmdW5jdGlvbihoYW5kbGUpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIDxzY3JpcHQ+IGVsZW1lbnQ7IGl0cyByZWFkeXN0YXRlY2hhbmdlIGV2ZW50IHdpbGwgYmUgZmlyZWQgYXN5bmNocm9ub3VzbHkgb25jZSBpdCBpcyBpbnNlcnRlZFxuICAgICAgICAgICAgLy8gaW50byB0aGUgZG9jdW1lbnQuIERvIHNvLCB0aHVzIHF1ZXVpbmcgdXAgdGhlIHRhc2suIFJlbWVtYmVyIHRvIGNsZWFuIHVwIG9uY2UgaXQncyBiZWVuIGNhbGxlZC5cbiAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgICAgIHNjcmlwdC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcnVuSWZQcmVzZW50KGhhbmRsZSk7XG4gICAgICAgICAgICAgICAgc2NyaXB0Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgaHRtbC5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIHNjcmlwdCA9IG51bGw7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaHRtbC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3RhbGxTZXRUaW1lb3V0SW1wbGVtZW50YXRpb24oKSB7XG4gICAgICAgIHJlZ2lzdGVySW1tZWRpYXRlID0gZnVuY3Rpb24oaGFuZGxlKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KHJ1bklmUHJlc2VudCwgMCwgaGFuZGxlKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBJZiBzdXBwb3J0ZWQsIHdlIHNob3VsZCBhdHRhY2ggdG8gdGhlIHByb3RvdHlwZSBvZiBnbG9iYWwsIHNpbmNlIHRoYXQgaXMgd2hlcmUgc2V0VGltZW91dCBldCBhbC4gbGl2ZS5cbiAgICB2YXIgYXR0YWNoVG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgJiYgT2JqZWN0LmdldFByb3RvdHlwZU9mKGdsb2JhbCk7XG4gICAgYXR0YWNoVG8gPSBhdHRhY2hUbyAmJiBhdHRhY2hUby5zZXRUaW1lb3V0ID8gYXR0YWNoVG8gOiBnbG9iYWw7XG5cbiAgICAvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IGUuZy4gYnJvd3NlcmlmeSBlbnZpcm9ubWVudHMuXG4gICAgaWYgKHt9LnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIikge1xuICAgICAgICAvLyBGb3IgTm9kZS5qcyBiZWZvcmUgMC45XG4gICAgICAgIGluc3RhbGxOZXh0VGlja0ltcGxlbWVudGF0aW9uKCk7XG5cbiAgICB9IGVsc2UgaWYgKGNhblVzZVBvc3RNZXNzYWdlKCkpIHtcbiAgICAgICAgLy8gRm9yIG5vbi1JRTEwIG1vZGVybiBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsUG9zdE1lc3NhZ2VJbXBsZW1lbnRhdGlvbigpO1xuXG4gICAgfSBlbHNlIGlmIChnbG9iYWwuTWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgLy8gRm9yIHdlYiB3b3JrZXJzLCB3aGVyZSBzdXBwb3J0ZWRcbiAgICAgICAgaW5zdGFsbE1lc3NhZ2VDaGFubmVsSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSBpZiAoZG9jICYmIFwib25yZWFkeXN0YXRlY2hhbmdlXCIgaW4gZG9jLmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIikpIHtcbiAgICAgICAgLy8gRm9yIElFIDbigJM4XG4gICAgICAgIGluc3RhbGxSZWFkeVN0YXRlQ2hhbmdlSW1wbGVtZW50YXRpb24oKTtcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZvciBvbGRlciBicm93c2Vyc1xuICAgICAgICBpbnN0YWxsU2V0VGltZW91dEltcGxlbWVudGF0aW9uKCk7XG4gICAgfVxuXG4gICAgYXR0YWNoVG8uc2V0SW1tZWRpYXRlID0gc2V0SW1tZWRpYXRlO1xuICAgIGF0dGFjaFRvLmNsZWFySW1tZWRpYXRlID0gY2xlYXJJbW1lZGlhdGU7XG59KHR5cGVvZiBzZWxmID09PSBcInVuZGVmaW5lZFwiID8gdHlwZW9mIGdsb2JhbCA9PT0gXCJ1bmRlZmluZWRcIiA/IHRoaXMgOiBnbG9iYWwgOiBzZWxmKSk7XG4iLCJ2YXIgc2NvcGUgPSAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwpIHx8XG4gICAgICAgICAgICAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZikgfHxcbiAgICAgICAgICAgIHdpbmRvdztcbnZhciBhcHBseSA9IEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseTtcblxuLy8gRE9NIEFQSXMsIGZvciBjb21wbGV0ZW5lc3NcblxuZXhwb3J0cy5zZXRUaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBuZXcgVGltZW91dChhcHBseS5jYWxsKHNldFRpbWVvdXQsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhclRpbWVvdXQpO1xufTtcbmV4cG9ydHMuc2V0SW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIG5ldyBUaW1lb3V0KGFwcGx5LmNhbGwoc2V0SW50ZXJ2YWwsIHNjb3BlLCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7XG4gIGlmICh0aW1lb3V0KSB7XG4gICAgdGltZW91dC5jbG9zZSgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBUaW1lb3V0KGlkLCBjbGVhckZuKSB7XG4gIHRoaXMuX2lkID0gaWQ7XG4gIHRoaXMuX2NsZWFyRm4gPSBjbGVhckZuO1xufVxuVGltZW91dC5wcm90b3R5cGUudW5yZWYgPSBUaW1lb3V0LnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbigpIHt9O1xuVGltZW91dC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5fY2xlYXJGbi5jYWxsKHNjb3BlLCB0aGlzLl9pZCk7XG59O1xuXG4vLyBEb2VzIG5vdCBzdGFydCB0aGUgdGltZSwganVzdCBzZXRzIHVwIHRoZSBtZW1iZXJzIG5lZWRlZC5cbmV4cG9ydHMuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSwgbXNlY3MpIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IG1zZWNzO1xufTtcblxuZXhwb3J0cy51bmVucm9sbCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuICBpdGVtLl9pZGxlVGltZW91dCA9IC0xO1xufTtcblxuZXhwb3J0cy5fdW5yZWZBY3RpdmUgPSBleHBvcnRzLmFjdGl2ZSA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgY2xlYXJUaW1lb3V0KGl0ZW0uX2lkbGVUaW1lb3V0SWQpO1xuXG4gIHZhciBtc2VjcyA9IGl0ZW0uX2lkbGVUaW1lb3V0O1xuICBpZiAobXNlY3MgPj0gMCkge1xuICAgIGl0ZW0uX2lkbGVUaW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uIG9uVGltZW91dCgpIHtcbiAgICAgIGlmIChpdGVtLl9vblRpbWVvdXQpXG4gICAgICAgIGl0ZW0uX29uVGltZW91dCgpO1xuICAgIH0sIG1zZWNzKTtcbiAgfVxufTtcblxuLy8gc2V0aW1tZWRpYXRlIGF0dGFjaGVzIGl0c2VsZiB0byB0aGUgZ2xvYmFsIG9iamVjdFxucmVxdWlyZShcInNldGltbWVkaWF0ZVwiKTtcbi8vIE9uIHNvbWUgZXhvdGljIGVudmlyb25tZW50cywgaXQncyBub3QgY2xlYXIgd2hpY2ggb2JqZWN0IGBzZXRpbW1lZGlhdGVgIHdhc1xuLy8gYWJsZSB0byBpbnN0YWxsIG9udG8uICBTZWFyY2ggZWFjaCBwb3NzaWJpbGl0eSBpbiB0aGUgc2FtZSBvcmRlciBhcyB0aGVcbi8vIGBzZXRpbW1lZGlhdGVgIGxpYnJhcnkuXG5leHBvcnRzLnNldEltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsLnNldEltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMgJiYgdGhpcy5zZXRJbW1lZGlhdGUpO1xuZXhwb3J0cy5jbGVhckltbWVkaWF0ZSA9ICh0eXBlb2Ygc2VsZiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBzZWxmLmNsZWFySW1tZWRpYXRlKSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICh0eXBlb2YgZ2xvYmFsICE9PSBcInVuZGVmaW5lZFwiICYmIGdsb2JhbC5jbGVhckltbWVkaWF0ZSkgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcyAmJiB0aGlzLmNsZWFySW1tZWRpYXRlKTtcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiJdLCJzb3VyY2VSb290IjoiIn0=