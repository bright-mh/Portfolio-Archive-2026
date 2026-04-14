/**
 * Swiper 4.1.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2018 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 11, 2018
 */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
      ? define(t)
      : (e.Swiper = t());
})(this, function () {
  "use strict";
  var e =
      "undefined" == typeof document
        ? {
            body: {},
            addEventListener: function () {},
            removeEventListener: function () {},
            activeElement: { blur: function () {}, nodeName: "" },
            querySelector: function () {
              return null;
            },
            querySelectorAll: function () {
              return [];
            },
            getElementById: function () {
              return null;
            },
            createEvent: function () {
              return { initEvent: function () {} };
            },
            createElement: function () {
              return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function () {},
                getElementsByTagName: function () {
                  return [];
                },
              };
            },
            location: { hash: "" },
          }
        : document,
    t =
      "undefined" == typeof window
        ? {
            document: e,
            navigator: { userAgent: "" },
            location: {},
            history: {},
            CustomEvent: function () {
              return this;
            },
            addEventListener: function () {},
            removeEventListener: function () {},
            getComputedStyle: function () {
              return {
                getPropertyValue: function () {
                  return "";
                },
              };
            },
            Image: function () {},
            Date: function () {},
            screen: {},
            setTimeout: function () {},
            clearTimeout: function () {},
          }
        : window,
    i = function (e) {
      for (var t = 0; t < e.length; t += 1) this[t] = e[t];
      return ((this.length = e.length), this);
    };
  function s(s, a) {
    var r = [],
      n = 0;
    if (s && !a && s instanceof i) return s;
    if (s)
      if ("string" == typeof s) {
        var o,
          l,
          d = s.trim();
        if (d.indexOf("<") >= 0 && d.indexOf(">") >= 0) {
          var h = "div";
          for (
            0 === d.indexOf("<li") && (h = "ul"),
              0 === d.indexOf("<tr") && (h = "tbody"),
              (0 !== d.indexOf("<td") && 0 !== d.indexOf("<th")) || (h = "tr"),
              0 === d.indexOf("<tbody") && (h = "table"),
              0 === d.indexOf("<option") && (h = "select"),
              (l = e.createElement(h)).innerHTML = d,
              n = 0;
            n < l.childNodes.length;
            n += 1
          )
            r.push(l.childNodes[n]);
        } else
          for (
            o =
              a || "#" !== s[0] || s.match(/[ .<>:~]/)
                ? (a || e).querySelectorAll(s.trim())
                : [e.getElementById(s.trim().split("#")[1])],
              n = 0;
            n < o.length;
            n += 1
          )
            o[n] && r.push(o[n]);
      } else if (s.nodeType || s === t || s === e) r.push(s);
      else if (s.length > 0 && s[0].nodeType) for (n = 0; n < s.length; n += 1) r.push(s[n]);
    return new i(r);
  }
  function a(e) {
    for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
    return t;
  }
  ((s.fn = i.prototype), (s.Class = i), (s.Dom7 = i));
  "resize scroll".split(" ");
  var r = {
    addClass: function (e) {
      if (void 0 === e) return this;
      for (var t = e.split(" "), i = 0; i < t.length; i += 1)
        for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.add(t[i]);
      return this;
    },
    removeClass: function (e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1)
        for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.remove(t[i]);
      return this;
    },
    hasClass: function (e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function (e) {
      for (var t = e.split(" "), i = 0; i < t.length; i += 1)
        for (var s = 0; s < this.length; s += 1) void 0 !== this[s].classList && this[s].classList.toggle(t[i]);
      return this;
    },
    attr: function (e, t) {
      var i = arguments;
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
      for (var s = 0; s < this.length; s += 1)
        if (2 === i.length) this[s].setAttribute(e, t);
        else for (var a in e) ((this[s][a] = e[a]), this[s].setAttribute(a, e[a]));
      return this;
    },
    removeAttr: function (e) {
      for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    data: function (e, t) {
      var i;
      if (void 0 !== t) {
        for (var s = 0; s < this.length; s += 1)
          ((i = this[s]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), (i.dom7ElementDataStorage[e] = t));
        return this;
      }
      if ((i = this[0])) {
        if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
        var a = i.getAttribute("data-" + e);
        return a || void 0;
      }
    },
    transform: function (e) {
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        ((i.webkitTransform = e), (i.transform = e));
      }
      return this;
    },
    transition: function (e) {
      "string" != typeof e && (e += "ms");
      for (var t = 0; t < this.length; t += 1) {
        var i = this[t].style;
        ((i.webkitTransitionDuration = e), (i.transitionDuration = e));
      }
      return this;
    },
    on: function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var i,
        a = e[0],
        r = e[1],
        n = e[2],
        o = e[3];
      function l(e) {
        var t = e.target;
        if (t) {
          var i = e.target.dom7EventData || [];
          if ((i.unshift(e), s(t).is(r))) n.apply(t, i);
          else for (var a = s(t).parents(), o = 0; o < a.length; o += 1) s(a[o]).is(r) && n.apply(a[o], i);
        }
      }
      function d(e) {
        var t = e && e.target ? e.target.dom7EventData || [] : [];
        (t.unshift(e), n.apply(this, t));
      }
      ("function" == typeof e[1] && ((a = (i = e)[0]), (n = i[1]), (o = i[2]), (r = void 0)), o || (o = !1));
      for (var h, p = a.split(" "), c = 0; c < this.length; c += 1) {
        var u = this[c];
        if (r)
          for (h = 0; h < p.length; h += 1)
            (u.dom7LiveListeners || (u.dom7LiveListeners = []),
              u.dom7LiveListeners.push({ type: a, listener: n, proxyListener: l }),
              u.addEventListener(p[h], l, o));
        else
          for (h = 0; h < p.length; h += 1)
            (u.dom7Listeners || (u.dom7Listeners = []),
              u.dom7Listeners.push({ type: a, listener: n, proxyListener: d }),
              u.addEventListener(p[h], d, o));
      }
      return this;
    },
    off: function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var i,
        s = e[0],
        a = e[1],
        r = e[2],
        n = e[3];
      ("function" == typeof e[1] && ((s = (i = e)[0]), (r = i[1]), (n = i[2]), (a = void 0)), n || (n = !1));
      for (var o = s.split(" "), l = 0; l < o.length; l += 1)
        for (var d = 0; d < this.length; d += 1) {
          var h = this[d];
          if (a) {
            if (h.dom7LiveListeners)
              for (var p = 0; p < h.dom7LiveListeners.length; p += 1)
                r
                  ? h.dom7LiveListeners[p].listener === r &&
                    h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n)
                  : h.dom7LiveListeners[p].type === o[l] &&
                    h.removeEventListener(o[l], h.dom7LiveListeners[p].proxyListener, n);
          } else if (h.dom7Listeners)
            for (var c = 0; c < h.dom7Listeners.length; c += 1)
              r
                ? h.dom7Listeners[c].listener === r && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n)
                : h.dom7Listeners[c].type === o[l] && h.removeEventListener(o[l], h.dom7Listeners[c].proxyListener, n);
        }
      return this;
    },
    trigger: function () {
      for (var i = [], s = arguments.length; s--; ) i[s] = arguments[s];
      for (var a = i[0].split(" "), r = i[1], n = 0; n < a.length; n += 1)
        for (var o = 0; o < this.length; o += 1) {
          var l = void 0;
          try {
            l = new t.CustomEvent(a[n], { detail: r, bubbles: !0, cancelable: !0 });
          } catch (t) {
            ((l = e.createEvent("Event")).initEvent(a[n], !0, !0), (l.detail = r));
          }
          ((this[o].dom7EventData = i.filter(function (e, t) {
            return t > 0;
          })),
            this[o].dispatchEvent(l),
            (this[o].dom7EventData = []),
            delete this[o].dom7EventData);
        }
      return this;
    },
    transitionEnd: function (e) {
      var t,
        i = ["webkitTransitionEnd", "transitionend"],
        s = this;
      function a(r) {
        if (r.target === this) for (e.call(this, r), t = 0; t < i.length; t += 1) s.off(i[t], a);
      }
      if (e) for (t = 0; t < i.length; t += 1) s.on(i[t], a);
      return this;
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(t.getPropertyValue("margin-right")) +
            parseFloat(t.getPropertyValue("margin-left"))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          var t = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(t.getPropertyValue("margin-top")) +
            parseFloat(t.getPropertyValue("margin-bottom"))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    offset: function () {
      if (this.length > 0) {
        var i = this[0],
          s = i.getBoundingClientRect(),
          a = e.body,
          r = i.clientTop || a.clientTop || 0,
          n = i.clientLeft || a.clientLeft || 0,
          o = i === t ? t.scrollY : i.scrollTop,
          l = i === t ? t.scrollX : i.scrollLeft;
        return { top: s.top + o - r, left: s.left + l - n };
      }
      return null;
    },
    css: function (e, i) {
      var s;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (s = 0; s < this.length; s += 1) for (var a in e) this[s].style[a] = e[a];
          return this;
        }
        if (this[0]) return t.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (s = 0; s < this.length; s += 1) this[s].style[e] = i;
        return this;
      }
      return this;
    },
    each: function (e) {
      if (!e) return this;
      for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
      return this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
      for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (a) {
      var r,
        n,
        o = this[0];
      if (!o || void 0 === a) return !1;
      if ("string" == typeof a) {
        if (o.matches) return o.matches(a);
        if (o.webkitMatchesSelector) return o.webkitMatchesSelector(a);
        if (o.msMatchesSelector) return o.msMatchesSelector(a);
        for (r = s(a), n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
        return !1;
      }
      if (a === e) return o === e;
      if (a === t) return o === t;
      if (a.nodeType || a instanceof i) {
        for (r = a.nodeType ? [a] : a, n = 0; n < r.length; n += 1) if (r[n] === o) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      var e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); ) 1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      var t,
        s = this.length;
      return new i(e > s - 1 ? [] : e < 0 ? ((t = s + e) < 0 ? [] : [this[t]]) : [this[e]]);
    },
    append: function () {
      for (var t, s = [], a = arguments.length; a--; ) s[a] = arguments[a];
      for (var r = 0; r < s.length; r += 1) {
        t = s[r];
        for (var n = 0; n < this.length; n += 1)
          if ("string" == typeof t) {
            var o = e.createElement("div");
            for (o.innerHTML = t; o.firstChild; ) this[n].appendChild(o.firstChild);
          } else if (t instanceof i) for (var l = 0; l < t.length; l += 1) this[n].appendChild(t[l]);
          else this[n].appendChild(t);
      }
      return this;
    },
    prepend: function (t) {
      var s, a;
      for (s = 0; s < this.length; s += 1)
        if ("string" == typeof t) {
          var r = e.createElement("div");
          for (r.innerHTML = t, a = r.childNodes.length - 1; a >= 0; a -= 1)
            this[s].insertBefore(r.childNodes[a], this[s].childNodes[0]);
        } else if (t instanceof i) for (a = 0; a < t.length; a += 1) this[s].insertBefore(t[a], this[s].childNodes[0]);
        else this[s].insertBefore(t, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && s(this[0].nextElementSibling).is(e)
            ? new i([this[0].nextElementSibling])
            : new i([])
          : this[0].nextElementSibling
            ? new i([this[0].nextElementSibling])
            : new i([])
        : new i([]);
    },
    nextAll: function (e) {
      var t = [],
        a = this[0];
      if (!a) return new i([]);
      for (; a.nextElementSibling; ) {
        var r = a.nextElementSibling;
        (e ? s(r).is(e) && t.push(r) : t.push(r), (a = r));
      }
      return new i(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        var t = this[0];
        return e
          ? t.previousElementSibling && s(t.previousElementSibling).is(e)
            ? new i([t.previousElementSibling])
            : new i([])
          : t.previousElementSibling
            ? new i([t.previousElementSibling])
            : new i([]);
      }
      return new i([]);
    },
    prevAll: function (e) {
      var t = [],
        a = this[0];
      if (!a) return new i([]);
      for (; a.previousElementSibling; ) {
        var r = a.previousElementSibling;
        (e ? s(r).is(e) && t.push(r) : t.push(r), (a = r));
      }
      return new i(t);
    },
    parent: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1)
        null !== this[i].parentNode &&
          (e ? s(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
      return s(a(t));
    },
    parents: function (e) {
      for (var t = [], i = 0; i < this.length; i += 1)
        for (var r = this[i].parentNode; r; ) (e ? s(r).is(e) && t.push(r) : t.push(r), (r = r.parentNode));
      return s(a(t));
    },
    closest: function (e) {
      var t = this;
      return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      for (var t = [], s = 0; s < this.length; s += 1)
        for (var a = this[s].querySelectorAll(e), r = 0; r < a.length; r += 1) t.push(a[r]);
      return new i(t);
    },
    children: function (e) {
      for (var t = [], r = 0; r < this.length; r += 1)
        for (var n = this[r].childNodes, o = 0; o < n.length; o += 1)
          e ? 1 === n[o].nodeType && s(n[o]).is(e) && t.push(n[o]) : 1 === n[o].nodeType && t.push(n[o]);
      return new i(a(t));
    },
    remove: function () {
      for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
    add: function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var i, a;
      for (i = 0; i < e.length; i += 1) {
        var r = s(e[i]);
        for (a = 0; a < r.length; a += 1) ((this[this.length] = r[a]), (this.length += 1));
      }
      return this;
    },
    styles: function () {
      return this[0] ? t.getComputedStyle(this[0], null) : {};
    },
  };
  Object.keys(r).forEach(function (e) {
    s.fn[e] = r[e];
  });
  var n,
    o,
    l,
    d = {
      deleteProps: function (e) {
        var t = e;
        Object.keys(t).forEach(function (e) {
          try {
            t[e] = null;
          } catch (e) {}
          try {
            delete t[e];
          } catch (e) {}
        });
      },
      nextTick: function (e, t) {
        return (void 0 === t && (t = 0), setTimeout(e, t));
      },
      now: function () {
        return Date.now();
      },
      getTranslate: function (e, i) {
        var s, a, r;
        void 0 === i && (i = "x");
        var n = t.getComputedStyle(e, null);
        return (
          t.WebKitCSSMatrix
            ? ((a = n.transform || n.webkitTransform).split(",").length > 6 &&
                (a = a
                  .split(", ")
                  .map(function (e) {
                    return e.replace(",", ".");
                  })
                  .join(", ")),
              (r = new t.WebKitCSSMatrix("none" === a ? "" : a)))
            : (s = (r =
                n.MozTransform ||
                n.OTransform ||
                n.MsTransform ||
                n.msTransform ||
                n.transform ||
                n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"))
                .toString()
                .split(",")),
          "x" === i && (a = t.WebKitCSSMatrix ? r.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])),
          "y" === i && (a = t.WebKitCSSMatrix ? r.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])),
          a || 0
        );
      },
      parseUrlQuery: function (e) {
        var i,
          s,
          a,
          r,
          n = {},
          o = e || t.location.href;
        if ("string" == typeof o && o.length)
          for (
            r = (s = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
              return "" !== e;
            })).length,
              i = 0;
            i < r;
            i += 1
          )
            ((a = s[i].replace(/#\S+/g, "").split("=")),
              (n[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || ""));
        return n;
      },
      isObject: function (e) {
        return "object" == typeof e && null !== e && e.constructor && e.constructor === Object;
      },
      extend: function () {
        for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
        for (var i = Object(e[0]), s = 1; s < e.length; s += 1) {
          var a = e[s];
          if (void 0 !== a && null !== a)
            for (var r = Object.keys(Object(a)), n = 0, o = r.length; n < o; n += 1) {
              var l = r[n],
                h = Object.getOwnPropertyDescriptor(a, l);
              void 0 !== h &&
                h.enumerable &&
                (d.isObject(i[l]) && d.isObject(a[l])
                  ? d.extend(i[l], a[l])
                  : !d.isObject(i[l]) && d.isObject(a[l])
                    ? ((i[l] = {}), d.extend(i[l], a[l]))
                    : (i[l] = a[l]));
            }
        }
        return i;
      },
    },
    h =
      ((l = e.createElement("div")),
      {
        touch:
          (t.Modernizr && !0 === t.Modernizr.touch) ||
          !!("ontouchstart" in t || (t.DocumentTouch && e instanceof t.DocumentTouch)),
        pointerEvents: !(!t.navigator.pointerEnabled && !t.PointerEvent),
        prefixedPointerEvents: !!t.navigator.msPointerEnabled,
        transition: ((o = l.style), "transition" in o || "webkitTransition" in o || "MozTransition" in o),
        transforms3d:
          (t.Modernizr && !0 === t.Modernizr.csstransforms3d) ||
          ((n = l.style),
          "webkitPerspective" in n ||
            "MozPerspective" in n ||
            "OPerspective" in n ||
            "MsPerspective" in n ||
            "perspective" in n),
        flexbox: (function () {
          for (
            var e = l.style,
              t =
                "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                  " ",
                ),
              i = 0;
            i < t.length;
            i += 1
          )
            if (t[i] in e) return !0;
          return !1;
        })(),
        observer: "MutationObserver" in t || "WebkitMutationObserver" in t,
        passiveListener: (function () {
          var e = !1;
          try {
            var i = Object.defineProperty({}, "passive", {
              get: function () {
                e = !0;
              },
            });
            t.addEventListener("testPassiveListener", null, i);
          } catch (e) {}
          return e;
        })(),
        gestures: "ongesturestart" in t,
      }),
    p = function (e) {
      void 0 === e && (e = {});
      var t = this;
      ((t.params = e),
        (t.eventsListeners = {}),
        t.params &&
          t.params.on &&
          Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e]);
          }));
    },
    c = { components: { configurable: !0 } };
  ((p.prototype.on = function (e, t) {
    var i = this;
    return "function" != typeof t
      ? i
      : (e.split(" ").forEach(function (e) {
          (i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e].push(t));
        }),
        i);
  }),
    (p.prototype.once = function (e, t) {
      var i = this;
      if ("function" != typeof t) return i;
      return i.on(e, function s() {
        for (var a = [], r = arguments.length; r--; ) a[r] = arguments[r];
        (t.apply(i, a), i.off(e, s));
      });
    }),
    (p.prototype.off = function (e, t) {
      var i = this;
      return (
        e.split(" ").forEach(function (e) {
          void 0 === t
            ? (i.eventsListeners[e] = [])
            : i.eventsListeners[e].forEach(function (s, a) {
                s === t && i.eventsListeners[e].splice(a, 1);
              });
        }),
        i
      );
    }),
    (p.prototype.emit = function () {
      for (var e = [], t = arguments.length; t--; ) e[t] = arguments[t];
      var i,
        s,
        a,
        r = this;
      return r.eventsListeners
        ? ("string" == typeof e[0] || Array.isArray(e[0])
            ? ((i = e[0]), (s = e.slice(1, e.length)), (a = r))
            : ((i = e[0].events), (s = e[0].data), (a = e[0].context || r)),
          (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
            if (r.eventsListeners[e]) {
              var t = [];
              (r.eventsListeners[e].forEach(function (e) {
                t.push(e);
              }),
                t.forEach(function (e) {
                  e.apply(a, s);
                }));
            }
          }),
          r)
        : r;
    }),
    (p.prototype.useModulesParams = function (e) {
      var t = this;
      t.modules &&
        Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i];
          s.params && d.extend(e, s.params);
        });
    }),
    (p.prototype.useModules = function (e) {
      void 0 === e && (e = {});
      var t = this;
      t.modules &&
        Object.keys(t.modules).forEach(function (i) {
          var s = t.modules[i],
            a = e[i] || {};
          (s.instance &&
            Object.keys(s.instance).forEach(function (e) {
              var i = s.instance[e];
              t[e] = "function" == typeof i ? i.bind(t) : i;
            }),
            s.on &&
              t.on &&
              Object.keys(s.on).forEach(function (e) {
                t.on(e, s.on[e]);
              }),
            s.create && s.create.bind(t)(a));
        });
    }),
    (c.components.set = function (e) {
      this.use && this.use(e);
    }),
    (p.installModule = function (e) {
      for (var t = [], i = arguments.length - 1; i-- > 0; ) t[i] = arguments[i + 1];
      var s = this;
      s.prototype.modules || (s.prototype.modules = {});
      var a = e.name || Object.keys(s.prototype.modules).length + "_" + d.now();
      return (
        (s.prototype.modules[a] = e),
        e.proto &&
          Object.keys(e.proto).forEach(function (t) {
            s.prototype[t] = e.proto[t];
          }),
        e.static &&
          Object.keys(e.static).forEach(function (t) {
            s[t] = e.static[t];
          }),
        e.install && e.install.apply(s, t),
        s
      );
    }),
    (p.use = function (e) {
      for (var t = [], i = arguments.length - 1; i-- > 0; ) t[i] = arguments[i + 1];
      var s = this;
      return Array.isArray(e)
        ? (e.forEach(function (e) {
            return s.installModule(e);
          }),
          s)
        : s.installModule.apply(s, [e].concat(t));
    }),
    Object.defineProperties(p, c));
  var u = {
      updateSize: function () {
        var e,
          t,
          i = this.$el;
        ((e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth),
          (t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight),
          (0 === e && this.isHorizontal()) ||
            (0 === t && this.isVertical()) ||
            ((e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10)),
            (t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10)),
            d.extend(this, { width: e, height: t, size: this.isHorizontal() ? e : t })));
      },
      updateSlides: function () {
        var e = this.params,
          t = this.$wrapperEl,
          i = this.size,
          s = this.rtl,
          a = this.wrongRTL,
          r = t.children("." + this.params.slideClass),
          n = this.virtual && e.virtual.enabled ? this.virtual.slides.length : r.length,
          o = [],
          l = [],
          p = [],
          c = e.slidesOffsetBefore;
        "function" == typeof c && (c = e.slidesOffsetBefore.call(this));
        var u = e.slidesOffsetAfter;
        "function" == typeof u && (u = e.slidesOffsetAfter.call(this));
        var v = n,
          f = this.snapGrid.length,
          m = this.snapGrid.length,
          g = e.spaceBetween,
          b = -c,
          w = 0,
          y = 0;
        if (void 0 !== i) {
          var x, E;
          ("string" == typeof g && g.indexOf("%") >= 0 && (g = (parseFloat(g.replace("%", "")) / 100) * i),
            (this.virtualSize = -g),
            s ? r.css({ marginLeft: "", marginTop: "" }) : r.css({ marginRight: "", marginBottom: "" }),
            e.slidesPerColumn > 1 &&
              ((x =
                Math.floor(n / e.slidesPerColumn) === n / this.params.slidesPerColumn
                  ? n
                  : Math.ceil(n / e.slidesPerColumn) * e.slidesPerColumn),
              "auto" !== e.slidesPerView &&
                "row" === e.slidesPerColumnFill &&
                (x = Math.max(x, e.slidesPerView * e.slidesPerColumn))));
          for (var T, S = e.slidesPerColumn, C = x / S, M = C - (e.slidesPerColumn * C - n), z = 0; z < n; z += 1) {
            E = 0;
            var P = r.eq(z);
            if (e.slidesPerColumn > 1) {
              var k = void 0,
                $ = void 0,
                L = void 0;
              ("column" === e.slidesPerColumnFill
                ? ((L = z - ($ = Math.floor(z / S)) * S),
                  ($ > M || ($ === M && L === S - 1)) && (L += 1) >= S && ((L = 0), ($ += 1)),
                  (k = $ + (L * x) / S),
                  P.css({
                    "-webkit-box-ordinal-group": k,
                    "-moz-box-ordinal-group": k,
                    "-ms-flex-order": k,
                    "-webkit-order": k,
                    order: k,
                  }))
                : ($ = z - (L = Math.floor(z / C)) * C),
                P.css(
                  "margin-" + (this.isHorizontal() ? "top" : "left"),
                  0 !== L && e.spaceBetween && e.spaceBetween + "px",
                )
                  .attr("data-swiper-column", $)
                  .attr("data-swiper-row", L));
            }
            "none" !== P.css("display") &&
              ("auto" === e.slidesPerView
                ? ((E = this.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0)),
                  e.roundLengths && (E = Math.floor(E)))
                : ((E = (i - (e.slidesPerView - 1) * g) / e.slidesPerView),
                  e.roundLengths && (E = Math.floor(E)),
                  r[z] && (this.isHorizontal() ? (r[z].style.width = E + "px") : (r[z].style.height = E + "px"))),
              r[z] && (r[z].swiperSlideSize = E),
              p.push(E),
              e.centeredSlides
                ? ((b = b + E / 2 + w / 2 + g),
                  0 === w && 0 !== z && (b = b - i / 2 - g),
                  0 === z && (b = b - i / 2 - g),
                  Math.abs(b) < 0.001 && (b = 0),
                  y % e.slidesPerGroup == 0 && o.push(b),
                  l.push(b))
                : (y % e.slidesPerGroup == 0 && o.push(b), l.push(b), (b = b + E + g)),
              (this.virtualSize += E + g),
              (w = E),
              (y += 1));
          }
          if (
            ((this.virtualSize = Math.max(this.virtualSize, i) + u),
            s &&
              a &&
              ("slide" === e.effect || "coverflow" === e.effect) &&
              t.css({ width: this.virtualSize + e.spaceBetween + "px" }),
            (h.flexbox && !e.setWrapperSize) ||
              (this.isHorizontal()
                ? t.css({ width: this.virtualSize + e.spaceBetween + "px" })
                : t.css({ height: this.virtualSize + e.spaceBetween + "px" })),
            e.slidesPerColumn > 1 &&
              ((this.virtualSize = (E + e.spaceBetween) * x),
              (this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween),
              this.isHorizontal()
                ? t.css({ width: this.virtualSize + e.spaceBetween + "px" })
                : t.css({ height: this.virtualSize + e.spaceBetween + "px" }),
              e.centeredSlides))
          ) {
            T = [];
            for (var I = 0; I < o.length; I += 1) o[I] < this.virtualSize + o[0] && T.push(o[I]);
            o = T;
          }
          if (!e.centeredSlides) {
            T = [];
            for (var D = 0; D < o.length; D += 1) o[D] <= this.virtualSize - i && T.push(o[D]);
            ((o = T),
              Math.floor(this.virtualSize - i) - Math.floor(o[o.length - 1]) > 1 && o.push(this.virtualSize - i));
          }
          (0 === o.length && (o = [0]),
            0 !== e.spaceBetween &&
              (this.isHorizontal()
                ? s
                  ? r.css({ marginLeft: g + "px" })
                  : r.css({ marginRight: g + "px" })
                : r.css({ marginBottom: g + "px" })),
            d.extend(this, { slides: r, snapGrid: o, slidesGrid: l, slidesSizesGrid: p }),
            n !== v && this.emit("slidesLengthChange"),
            o.length !== f && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")),
            l.length !== m && this.emit("slidesGridLengthChange"),
            (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset());
        }
      },
      updateAutoHeight: function () {
        var e,
          t = [],
          i = 0;
        if ("auto" !== this.params.slidesPerView && this.params.slidesPerView > 1)
          for (e = 0; e < Math.ceil(this.params.slidesPerView); e += 1) {
            var s = this.activeIndex + e;
            if (s > this.slides.length) break;
            t.push(this.slides.eq(s)[0]);
          }
        else t.push(this.slides.eq(this.activeIndex)[0]);
        for (e = 0; e < t.length; e += 1)
          if (void 0 !== t[e]) {
            var a = t[e].offsetHeight;
            i = a > i ? a : i;
          }
        i && this.$wrapperEl.css("height", i + "px");
      },
      updateSlidesOffset: function () {
        for (var e = this.slides, t = 0; t < e.length; t += 1)
          e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = this.translate || 0);
        var t = this.params,
          i = this.slides,
          s = this.rtl;
        if (0 !== i.length) {
          void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
          var a = -e;
          (s && (a = e), i.removeClass(t.slideVisibleClass));
          for (var r = 0; r < i.length; r += 1) {
            var n = i[r],
              o =
                (a + (t.centeredSlides ? this.minTranslate() : 0) - n.swiperSlideOffset) /
                (n.swiperSlideSize + t.spaceBetween);
            if (t.watchSlidesVisibility) {
              var l = -(a - n.swiperSlideOffset),
                d = l + this.slidesSizesGrid[r];
              ((l >= 0 && l < this.size) || (d > 0 && d <= this.size) || (l <= 0 && d >= this.size)) &&
                i.eq(r).addClass(t.slideVisibleClass);
            }
            n.progress = s ? -o : o;
          }
        }
      },
      updateProgress: function (e) {
        void 0 === e && (e = this.translate || 0);
        var t = this.params,
          i = this.maxTranslate() - this.minTranslate(),
          s = this.progress,
          a = this.isBeginning,
          r = this.isEnd,
          n = a,
          o = r;
        (0 === i ? ((s = 0), (a = !0), (r = !0)) : ((a = (s = (e - this.minTranslate()) / i) <= 0), (r = s >= 1)),
          d.extend(this, { progress: s, isBeginning: a, isEnd: r }),
          (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e),
          a && !n && this.emit("reachBeginning toEdge"),
          r && !o && this.emit("reachEnd toEdge"),
          ((n && !a) || (o && !r)) && this.emit("fromEdge"),
          this.emit("progress", s));
      },
      updateSlidesClasses: function () {
        var e,
          t = this.slides,
          i = this.params,
          s = this.$wrapperEl,
          a = this.activeIndex,
          r = this.realIndex,
          n = this.virtual && i.virtual.enabled;
        (t.removeClass(
          i.slideActiveClass +
            " " +
            i.slideNextClass +
            " " +
            i.slidePrevClass +
            " " +
            i.slideDuplicateActiveClass +
            " " +
            i.slideDuplicateNextClass +
            " " +
            i.slideDuplicatePrevClass,
        ),
          (e = n
            ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + a + '"]')
            : t.eq(a)).addClass(i.slideActiveClass),
          i.loop &&
            (e.hasClass(i.slideDuplicateClass)
              ? s
                  .children(
                    "." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + r + '"]',
                  )
                  .addClass(i.slideDuplicateActiveClass)
              : s
                  .children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + r + '"]')
                  .addClass(i.slideDuplicateActiveClass)));
        var o = e
          .nextAll("." + i.slideClass)
          .eq(0)
          .addClass(i.slideNextClass);
        i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
        var l = e
          .prevAll("." + i.slideClass)
          .eq(0)
          .addClass(i.slidePrevClass);
        (i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass),
          i.loop &&
            (o.hasClass(i.slideDuplicateClass)
              ? s
                  .children(
                    "." +
                      i.slideClass +
                      ":not(." +
                      i.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      o.attr("data-swiper-slide-index") +
                      '"]',
                  )
                  .addClass(i.slideDuplicateNextClass)
              : s
                  .children(
                    "." +
                      i.slideClass +
                      "." +
                      i.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      o.attr("data-swiper-slide-index") +
                      '"]',
                  )
                  .addClass(i.slideDuplicateNextClass),
            l.hasClass(i.slideDuplicateClass)
              ? s
                  .children(
                    "." +
                      i.slideClass +
                      ":not(." +
                      i.slideDuplicateClass +
                      ')[data-swiper-slide-index="' +
                      l.attr("data-swiper-slide-index") +
                      '"]',
                  )
                  .addClass(i.slideDuplicatePrevClass)
              : s
                  .children(
                    "." +
                      i.slideClass +
                      "." +
                      i.slideDuplicateClass +
                      '[data-swiper-slide-index="' +
                      l.attr("data-swiper-slide-index") +
                      '"]',
                  )
                  .addClass(i.slideDuplicatePrevClass)));
      },
      updateActiveIndex: function (e) {
        var t,
          i = this.rtl ? this.translate : -this.translate,
          s = this.slidesGrid,
          a = this.snapGrid,
          r = this.params,
          n = this.activeIndex,
          o = this.realIndex,
          l = this.snapIndex,
          h = e;
        if (void 0 === h) {
          for (var p = 0; p < s.length; p += 1)
            void 0 !== s[p + 1]
              ? i >= s[p] && i < s[p + 1] - (s[p + 1] - s[p]) / 2
                ? (h = p)
                : i >= s[p] && i < s[p + 1] && (h = p + 1)
              : i >= s[p] && (h = p);
          r.normalizeSlideIndex && (h < 0 || void 0 === h) && (h = 0);
        }
        if (
          ((t = a.indexOf(i) >= 0 ? a.indexOf(i) : Math.floor(h / r.slidesPerGroup)) >= a.length && (t = a.length - 1),
          h !== n)
        ) {
          var c = parseInt(this.slides.eq(h).attr("data-swiper-slide-index") || h, 10);
          (d.extend(this, { snapIndex: t, realIndex: c, previousIndex: n, activeIndex: h }),
            this.emit("activeIndexChange"),
            this.emit("snapIndexChange"),
            o !== c && this.emit("realIndexChange"),
            this.emit("slideChange"));
        } else t !== l && ((this.snapIndex = t), this.emit("snapIndexChange"));
      },
      updateClickedSlide: function (e) {
        var t = this.params,
          i = s(e.target).closest("." + t.slideClass)[0],
          a = !1;
        if (i) for (var r = 0; r < this.slides.length; r += 1) this.slides[r] === i && (a = !0);
        if (!i || !a) return ((this.clickedSlide = void 0), void (this.clickedIndex = void 0));
        ((this.clickedSlide = i),
          this.virtual && this.params.virtual.enabled
            ? (this.clickedIndex = parseInt(s(i).attr("data-swiper-slide-index"), 10))
            : (this.clickedIndex = s(i).index()),
          t.slideToClickedSlide &&
            void 0 !== this.clickedIndex &&
            this.clickedIndex !== this.activeIndex &&
            this.slideToClickedSlide());
      },
    },
    v = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        var t = this.params,
          i = this.rtl,
          s = this.translate,
          a = this.$wrapperEl;
        if (t.virtualTranslate) return i ? -s : s;
        var r = d.getTranslate(a[0], e);
        return (i && (r = -r), r || 0);
      },
      setTranslate: function (e, t) {
        var i = this.rtl,
          s = this.params,
          a = this.$wrapperEl,
          r = this.progress,
          n = 0,
          o = 0;
        (this.isHorizontal() ? (n = i ? -e : e) : (o = e),
          s.roundLengths && ((n = Math.floor(n)), (o = Math.floor(o))),
          s.virtualTranslate ||
            (h.transforms3d
              ? a.transform("translate3d(" + n + "px, " + o + "px, 0px)")
              : a.transform("translate(" + n + "px, " + o + "px)")),
          (this.translate = this.isHorizontal() ? n : o));
        var l = this.maxTranslate() - this.minTranslate();
        ((0 === l ? 0 : (e - this.minTranslate()) / l) !== r && this.updateProgress(e),
          this.emit("setTranslate", this.translate, t));
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
    },
    f = {
      setTransition: function (e, t) {
        (this.$wrapperEl.transition(e), this.emit("setTransition", e, t));
      },
      transitionStart: function (e, t) {
        void 0 === e && (e = !0);
        var i = this.activeIndex,
          s = this.params,
          a = this.previousIndex;
        s.autoHeight && this.updateAutoHeight();
        var r = t;
        if ((r || (r = i > a ? "next" : i < a ? "prev" : "reset"), this.emit("transitionStart"), e && i !== a)) {
          if ("reset" === r) return void this.emit("slideResetTransitionStart");
          (this.emit("slideChangeTransitionStart"),
            "next" === r ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart"));
        }
      },
      transitionEnd: function (e, t) {
        void 0 === e && (e = !0);
        var i = this.activeIndex,
          s = this.previousIndex;
        ((this.animating = !1), this.setTransition(0));
        var a = t;
        if ((a || (a = i > s ? "next" : i < s ? "prev" : "reset"), this.emit("transitionEnd"), e && i !== s)) {
          if ("reset" === a) return void this.emit("slideResetTransitionEnd");
          (this.emit("slideChangeTransitionEnd"),
            "next" === a ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd"));
        }
      },
    },
    m = {
      slideTo: function (e, t, i, s) {
        (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0));
        var a = this,
          r = e;
        r < 0 && (r = 0);
        var n = a.params,
          o = a.snapGrid,
          l = a.slidesGrid,
          d = a.previousIndex,
          p = a.activeIndex,
          c = a.rtl,
          u = a.$wrapperEl;
        if (a.animating && n.preventIntercationOnTransition) return !1;
        var v = Math.floor(r / n.slidesPerGroup);
        (v >= o.length && (v = o.length - 1),
          (p || n.initialSlide || 0) === (d || 0) && i && a.emit("beforeSlideChangeStart"));
        var f,
          m = -o[v];
        if ((a.updateProgress(m), n.normalizeSlideIndex))
          for (var g = 0; g < l.length; g += 1) -Math.floor(100 * m) >= Math.floor(100 * l[g]) && (r = g);
        if (a.initialized && r !== p) {
          if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
          if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (p || 0) !== r) return !1;
        }
        return (
          (f = r > p ? "next" : r < p ? "prev" : "reset"),
          (c && -m === a.translate) || (!c && m === a.translate)
            ? (a.updateActiveIndex(r),
              n.autoHeight && a.updateAutoHeight(),
              a.updateSlidesClasses(),
              "slide" !== n.effect && a.setTranslate(m),
              "reset" !== f && (a.transitionStart(i, f), a.transitionEnd(i, f)),
              !1)
            : (0 !== t && h.transition
                ? (a.setTransition(t),
                  a.setTranslate(m),
                  a.updateActiveIndex(r),
                  a.updateSlidesClasses(),
                  a.emit("beforeTransitionStart", t, s),
                  a.transitionStart(i, f),
                  a.animating ||
                    ((a.animating = !0),
                    u.transitionEnd(function () {
                      a && !a.destroyed && a.transitionEnd(i, f);
                    })))
                : (a.setTransition(0),
                  a.setTranslate(m),
                  a.updateActiveIndex(r),
                  a.updateSlidesClasses(),
                  a.emit("beforeTransitionStart", t, s),
                  a.transitionStart(i, f),
                  a.transitionEnd(i, f)),
              !0)
        );
      },
      slideToLoop: function (e, t, i, s) {
        (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0));
        var a = e;
        return (this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, s));
      },
      slideNext: function (e, t, i) {
        (void 0 === e && (e = this.params.speed), void 0 === t && (t = !0));
        var s = this.params,
          a = this.animating;
        return s.loop
          ? !a &&
              (this.loopFix(),
              (this._clientLeft = this.$wrapperEl[0].clientLeft),
              this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i))
          : this.slideTo(this.activeIndex + s.slidesPerGroup, e, t, i);
      },
      slidePrev: function (e, t, i) {
        (void 0 === e && (e = this.params.speed), void 0 === t && (t = !0));
        var s = this.params,
          a = this.animating;
        return s.loop
          ? !a &&
              (this.loopFix(),
              (this._clientLeft = this.$wrapperEl[0].clientLeft),
              this.slideTo(this.activeIndex - 1, e, t, i))
          : this.slideTo(this.activeIndex - 1, e, t, i);
      },
      slideReset: function (e, t, i) {
        (void 0 === e && (e = this.params.speed), void 0 === t && (t = !0));
        return this.slideTo(this.activeIndex, e, t, i);
      },
      slideToClickedSlide: function () {
        var e,
          t = this,
          i = t.params,
          a = t.$wrapperEl,
          r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView,
          n = t.clickedIndex;
        if (i.loop) {
          if (t.animating) return;
          ((e = parseInt(s(t.clickedSlide).attr("data-swiper-slide-index"), 10)),
            i.centeredSlides
              ? n < t.loopedSlides - r / 2 || n > t.slides.length - t.loopedSlides + r / 2
                ? (t.loopFix(),
                  (n = a
                    .children(
                      "." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")",
                    )
                    .eq(0)
                    .index()),
                  d.nextTick(function () {
                    t.slideTo(n);
                  }))
                : t.slideTo(n)
              : n > t.slides.length - r
                ? (t.loopFix(),
                  (n = a
                    .children(
                      "." + i.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + i.slideDuplicateClass + ")",
                    )
                    .eq(0)
                    .index()),
                  d.nextTick(function () {
                    t.slideTo(n);
                  }))
                : t.slideTo(n));
        } else t.slideTo(n);
      },
    },
    g = {
      loopCreate: function () {
        var t = this,
          i = t.params,
          a = t.$wrapperEl;
        a.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
        var r = a.children("." + i.slideClass);
        if (i.loopFillGroupWithBlank) {
          var n = i.slidesPerGroup - (r.length % i.slidesPerGroup);
          if (n !== i.slidesPerGroup) {
            for (var o = 0; o < n; o += 1) {
              var l = s(e.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
              a.append(l);
            }
            r = a.children("." + i.slideClass);
          }
        }
        ("auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length),
          (t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10)),
          (t.loopedSlides += i.loopAdditionalSlides),
          t.loopedSlides > r.length && (t.loopedSlides = r.length));
        var d = [],
          h = [];
        r.each(function (e, i) {
          var a = s(i);
          (e < t.loopedSlides && h.push(i),
            e < r.length && e >= r.length - t.loopedSlides && d.push(i),
            a.attr("data-swiper-slide-index", e));
        });
        for (var p = 0; p < h.length; p += 1) a.append(s(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
        for (var c = d.length - 1; c >= 0; c -= 1) a.prepend(s(d[c].cloneNode(!0)).addClass(i.slideDuplicateClass));
      },
      loopFix: function () {
        var e,
          t = this.params,
          i = this.activeIndex,
          s = this.slides,
          a = this.loopedSlides,
          r = this.allowSlidePrev,
          n = this.allowSlideNext,
          o = this.snapGrid,
          l = this.rtl;
        ((this.allowSlidePrev = !0), (this.allowSlideNext = !0));
        var d = -o[i] - this.getTranslate();
        i < a
          ? ((e = s.length - 3 * a + i),
            (e += a),
            this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d))
          : (("auto" === t.slidesPerView && i >= 2 * a) || i > s.length - 2 * t.slidesPerView) &&
            ((e = -s.length + i + a),
            (e += a),
            this.slideTo(e, 0, !1, !0) && 0 !== d && this.setTranslate((l ? -this.translate : this.translate) - d));
        ((this.allowSlidePrev = r), (this.allowSlideNext = n));
      },
      loopDestroy: function () {
        var e = this.$wrapperEl,
          t = this.params,
          i = this.slides;
        (e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(),
          i.removeAttr("data-swiper-slide-index"));
      },
    },
    b = {
      setGrabCursor: function (e) {
        if (!h.touch && this.params.simulateTouch) {
          var t = this.el;
          ((t.style.cursor = "move"),
            (t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
            (t.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
            (t.style.cursor = e ? "grabbing" : "grab"));
        }
      },
      unsetGrabCursor: function () {
        h.touch || (this.el.style.cursor = "");
      },
    },
    w = {
      appendSlide: function (e) {
        var t = this.$wrapperEl,
          i = this.params;
        if ((i.loop && this.loopDestroy(), "object" == typeof e && "length" in e))
          for (var s = 0; s < e.length; s += 1) e[s] && t.append(e[s]);
        else t.append(e);
        (i.loop && this.loopCreate(), (i.observer && h.observer) || this.update());
      },
      prependSlide: function (e) {
        var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
        t.loop && this.loopDestroy();
        var a = s + 1;
        if ("object" == typeof e && "length" in e) {
          for (var r = 0; r < e.length; r += 1) e[r] && i.prepend(e[r]);
          a = s + e.length;
        } else i.prepend(e);
        (t.loop && this.loopCreate(), (t.observer && h.observer) || this.update(), this.slideTo(a, 0, !1));
      },
      removeSlide: function (e) {
        var t = this.params,
          i = this.$wrapperEl,
          s = this.activeIndex;
        t.loop && (this.loopDestroy(), (this.slides = i.children("." + t.slideClass)));
        var a,
          r = s;
        if ("object" == typeof e && "length" in e) {
          for (var n = 0; n < e.length; n += 1)
            ((a = e[n]), this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1));
          r = Math.max(r, 0);
        } else ((a = e), this.slides[a] && this.slides.eq(a).remove(), a < r && (r -= 1), (r = Math.max(r, 0)));
        (t.loop && this.loopCreate(),
          (t.observer && h.observer) || this.update(),
          t.loop ? this.slideTo(r + this.loopedSlides, 0, !1) : this.slideTo(r, 0, !1));
      },
      removeAllSlides: function () {
        for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
        this.removeSlide(e);
      },
    },
    y = (function () {
      var i = t.navigator.userAgent,
        s = {
          ios: !1,
          android: !1,
          androidChrome: !1,
          desktop: !1,
          windows: !1,
          iphone: !1,
          ipod: !1,
          ipad: !1,
          cordova: t.cordova || t.phonegap,
          phonegap: t.cordova || t.phonegap,
        },
        a = i.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        r = i.match(/(Android);?[\s\/]+([\d.]+)?/),
        n = i.match(/(iPad).*OS\s([\d_]+)/),
        o = i.match(/(iPod)(.*OS\s([\d_]+))?/),
        l = !n && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      if (
        (a && ((s.os = "windows"), (s.osVersion = a[2]), (s.windows = !0)),
        r &&
          !a &&
          ((s.os = "android"),
          (s.osVersion = r[2]),
          (s.android = !0),
          (s.androidChrome = i.toLowerCase().indexOf("chrome") >= 0)),
        (n || l || o) && ((s.os = "ios"), (s.ios = !0)),
        l && !o && ((s.osVersion = l[2].replace(/_/g, ".")), (s.iphone = !0)),
        n && ((s.osVersion = n[2].replace(/_/g, ".")), (s.ipad = !0)),
        o && ((s.osVersion = o[3] ? o[3].replace(/_/g, ".") : null), (s.iphone = !0)),
        s.ios &&
          s.osVersion &&
          i.indexOf("Version/") >= 0 &&
          "10" === s.osVersion.split(".")[0] &&
          (s.osVersion = i.toLowerCase().split("version/")[1].split(" ")[0]),
        (s.desktop = !(s.os || s.android || s.webView)),
        (s.webView = (l || n || o) && i.match(/.*AppleWebKit(?!.*Safari)/i)),
        s.os && "ios" === s.os)
      ) {
        var d = s.osVersion.split("."),
          h = e.querySelector('meta[name="viewport"]');
        s.minimalUi =
          !s.webView &&
          (o || l) &&
          (1 * d[0] == 7 ? 1 * d[1] >= 1 : 1 * d[0] > 7) &&
          h &&
          h.getAttribute("content").indexOf("minimal-ui") >= 0;
      }
      return ((s.pixelRatio = t.devicePixelRatio || 1), s);
    })(),
    x = function (i) {
      var a = this.touchEventsData,
        r = this.params,
        n = this.touches;
      if (!this.animating || !r.preventIntercationOnTransition) {
        var o = i;
        if (
          (o.originalEvent && (o = o.originalEvent),
          (a.isTouchEvent = "touchstart" === o.type),
          (a.isTouchEvent || !("which" in o) || 3 !== o.which) && (!a.isTouched || !a.isMoved))
        )
          if (r.noSwiping && s(o.target).closest(r.noSwipingSelector ? r.noSwipingSelector : "." + r.noSwipingClass)[0])
            this.allowClick = !0;
          else if (!r.swipeHandler || s(o).closest(r.swipeHandler)[0]) {
            ((n.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX),
              (n.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY));
            var l = n.currentX,
              h = n.currentY;
            if (
              !(
                y.ios &&
                !y.cordova &&
                r.iOSEdgeSwipeDetection &&
                l <= r.iOSEdgeSwipeThreshold &&
                l >= t.screen.width - r.iOSEdgeSwipeThreshold
              )
            ) {
              if (
                (d.extend(a, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0,
                }),
                (n.startX = l),
                (n.startY = h),
                (a.touchStartTime = d.now()),
                (this.allowClick = !0),
                this.updateSize(),
                (this.swipeDirection = void 0),
                r.threshold > 0 && (a.allowThresholdMove = !1),
                "touchstart" !== o.type)
              ) {
                var p = !0;
                (s(o.target).is(a.formElements) && (p = !1),
                  e.activeElement &&
                    s(e.activeElement).is(a.formElements) &&
                    e.activeElement !== o.target &&
                    e.activeElement.blur(),
                  p && this.allowTouchMove && o.preventDefault());
              }
              this.emit("touchStart", o);
            }
          }
      }
    },
    E = function (t) {
      var i = this.touchEventsData,
        a = this.params,
        r = this.touches,
        n = this.rtl,
        o = t;
      if ((o.originalEvent && (o = o.originalEvent), i.isTouched)) {
        if (!i.isTouchEvent || "mousemove" !== o.type) {
          var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
            h = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
          if (o.preventedByNestedSwiper) return ((r.startX = l), void (r.startY = h));
          if (!this.allowTouchMove)
            return (
              (this.allowClick = !1),
              void (
                i.isTouched &&
                (d.extend(r, { startX: l, startY: h, currentX: l, currentY: h }), (i.touchStartTime = d.now()))
              )
            );
          if (i.isTouchEvent && a.touchReleaseOnEdges && !a.loop)
            if (this.isVertical()) {
              if (
                (h < r.startY && this.translate <= this.maxTranslate()) ||
                (h > r.startY && this.translate >= this.minTranslate())
              )
                return ((i.isTouched = !1), void (i.isMoved = !1));
            } else if (
              (l < r.startX && this.translate <= this.maxTranslate()) ||
              (l > r.startX && this.translate >= this.minTranslate())
            )
              return;
          if (i.isTouchEvent && e.activeElement && o.target === e.activeElement && s(o.target).is(i.formElements))
            return ((i.isMoved = !0), void (this.allowClick = !1));
          if ((i.allowTouchCallbacks && this.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1))) {
            ((r.currentX = l), (r.currentY = h));
            var p,
              c = r.currentX - r.startX,
              u = r.currentY - r.startY;
            if (void 0 === i.isScrolling)
              (this.isHorizontal() && r.currentY === r.startY) || (this.isVertical() && r.currentX === r.startX)
                ? (i.isScrolling = !1)
                : c * c + u * u >= 25 &&
                  ((p = (180 * Math.atan2(Math.abs(u), Math.abs(c))) / Math.PI),
                  (i.isScrolling = this.isHorizontal() ? p > a.touchAngle : 90 - p > a.touchAngle));
            if (
              (i.isScrolling && this.emit("touchMoveOpposite", o),
              "undefined" == typeof startMoving &&
                ((r.currentX === r.startX && r.currentY === r.startY) || (i.startMoving = !0)),
              i.isScrolling)
            )
              i.isTouched = !1;
            else if (i.startMoving) {
              ((this.allowClick = !1),
                o.preventDefault(),
                a.touchMoveStopPropagation && !a.nested && o.stopPropagation(),
                i.isMoved ||
                  (a.loop && this.loopFix(),
                  (i.startTranslate = this.getTranslate()),
                  this.setTransition(0),
                  this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
                  (i.allowMomentumBounce = !1),
                  !a.grabCursor || (!0 !== this.allowSlideNext && !0 !== this.allowSlidePrev) || this.setGrabCursor(!0),
                  this.emit("sliderFirstMove", o)),
                this.emit("sliderMove", o),
                (i.isMoved = !0));
              var v = this.isHorizontal() ? c : u;
              ((r.diff = v),
                (v *= a.touchRatio),
                n && (v = -v),
                (this.swipeDirection = v > 0 ? "prev" : "next"),
                (i.currentTranslate = v + i.startTranslate));
              var f = !0,
                m = a.resistanceRatio;
              if (
                (a.touchReleaseOnEdges && (m = 0),
                v > 0 && i.currentTranslate > this.minTranslate()
                  ? ((f = !1),
                    a.resistance &&
                      (i.currentTranslate =
                        this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + v, m)))
                  : v < 0 &&
                    i.currentTranslate < this.maxTranslate() &&
                    ((f = !1),
                    a.resistance &&
                      (i.currentTranslate =
                        this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - v, m))),
                f && (o.preventedByNestedSwiper = !0),
                !this.allowSlideNext &&
                  "next" === this.swipeDirection &&
                  i.currentTranslate < i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                !this.allowSlidePrev &&
                  "prev" === this.swipeDirection &&
                  i.currentTranslate > i.startTranslate &&
                  (i.currentTranslate = i.startTranslate),
                a.threshold > 0)
              ) {
                if (!(Math.abs(v) > a.threshold || i.allowThresholdMove))
                  return void (i.currentTranslate = i.startTranslate);
                if (!i.allowThresholdMove)
                  return (
                    (i.allowThresholdMove = !0),
                    (r.startX = r.currentX),
                    (r.startY = r.currentY),
                    (i.currentTranslate = i.startTranslate),
                    void (r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                  );
              }
              a.followFinger &&
                ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) &&
                  (this.updateActiveIndex(), this.updateSlidesClasses()),
                a.freeMode &&
                  (0 === i.velocities.length &&
                    i.velocities.push({
                      position: r[this.isHorizontal() ? "startX" : "startY"],
                      time: i.touchStartTime,
                    }),
                  i.velocities.push({ position: r[this.isHorizontal() ? "currentX" : "currentY"], time: d.now() })),
                this.updateProgress(i.currentTranslate),
                this.setTranslate(i.currentTranslate));
            }
          }
        }
      } else i.startMoving && i.isScrolling && this.emit("touchMoveOpposite", o);
    },
    T = function (e) {
      var t = this,
        i = t.touchEventsData,
        s = t.params,
        a = t.touches,
        r = t.rtl,
        n = t.$wrapperEl,
        o = t.slidesGrid,
        l = t.snapGrid,
        h = e;
      if (
        (h.originalEvent && (h = h.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", h),
        (i.allowTouchCallbacks = !1),
        !i.isTouched)
      )
        return (i.isMoved && s.grabCursor && t.setGrabCursor(!1), (i.isMoved = !1), void (i.startMoving = !1));
      s.grabCursor &&
        i.isMoved &&
        i.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      var p,
        c = d.now(),
        u = c - i.touchStartTime;
      if (
        (t.allowClick &&
          (t.updateClickedSlide(h),
          t.emit("tap", h),
          u < 300 &&
            c - i.lastClickTime > 300 &&
            (i.clickTimeout && clearTimeout(i.clickTimeout),
            (i.clickTimeout = d.nextTick(function () {
              t && !t.destroyed && t.emit("click", h);
            }, 300))),
          u < 300 &&
            c - i.lastClickTime < 300 &&
            (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", h))),
        (i.lastClickTime = d.now()),
        d.nextTick(function () {
          t.destroyed || (t.allowClick = !0);
        }),
        !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === a.diff || i.currentTranslate === i.startTranslate)
      )
        return ((i.isTouched = !1), (i.isMoved = !1), void (i.startMoving = !1));
      if (
        ((i.isTouched = !1),
        (i.isMoved = !1),
        (i.startMoving = !1),
        (p = s.followFinger ? (r ? t.translate : -t.translate) : -i.currentTranslate),
        s.freeMode)
      ) {
        if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
        if (p > -t.maxTranslate())
          return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));
        if (s.freeModeMomentum) {
          if (i.velocities.length > 1) {
            var v = i.velocities.pop(),
              f = i.velocities.pop(),
              m = v.position - f.position,
              g = v.time - f.time;
            ((t.velocity = m / g),
              (t.velocity /= 2),
              Math.abs(t.velocity) < s.freeModeMinimumVelocity && (t.velocity = 0),
              (g > 150 || d.now() - v.time > 300) && (t.velocity = 0));
          } else t.velocity = 0;
          ((t.velocity *= s.freeModeMomentumVelocityRatio), (i.velocities.length = 0));
          var b = 1e3 * s.freeModeMomentumRatio,
            w = t.velocity * b,
            y = t.translate + w;
          r && (y = -y);
          var x,
            E = !1,
            T = 20 * Math.abs(t.velocity) * s.freeModeMomentumBounceRatio;
          if (y < t.maxTranslate())
            s.freeModeMomentumBounce
              ? (y + t.maxTranslate() < -T && (y = t.maxTranslate() - T),
                (x = t.maxTranslate()),
                (E = !0),
                (i.allowMomentumBounce = !0))
              : (y = t.maxTranslate());
          else if (y > t.minTranslate())
            s.freeModeMomentumBounce
              ? (y - t.minTranslate() > T && (y = t.minTranslate() + T),
                (x = t.minTranslate()),
                (E = !0),
                (i.allowMomentumBounce = !0))
              : (y = t.minTranslate());
          else if (s.freeModeSticky) {
            for (var S, C = 0; C < l.length; C += 1)
              if (l[C] > -y) {
                S = C;
                break;
              }
            y = -(y = Math.abs(l[S] - y) < Math.abs(l[S - 1] - y) || "next" === t.swipeDirection ? l[S] : l[S - 1]);
          }
          if (0 !== t.velocity)
            b = r ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity);
          else if (s.freeModeSticky) return void t.slideReset();
          (s.freeModeMomentumBounce && E
            ? (t.updateProgress(x),
              t.setTransition(b),
              t.setTranslate(y),
              t.transitionStart(!0, t.swipeDirection),
              (t.animating = !0),
              n.transitionEnd(function () {
                t &&
                  !t.destroyed &&
                  i.allowMomentumBounce &&
                  (t.emit("momentumBounce"),
                  t.setTransition(s.speed),
                  t.setTranslate(x),
                  n.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  }));
              }))
            : t.velocity
              ? (t.updateProgress(y),
                t.setTransition(b),
                t.setTranslate(y),
                t.transitionStart(!0, t.swipeDirection),
                t.animating ||
                  ((t.animating = !0),
                  n.transitionEnd(function () {
                    t && !t.destroyed && t.transitionEnd();
                  })))
              : t.updateProgress(y),
            t.updateActiveIndex(),
            t.updateSlidesClasses());
        }
        (!s.freeModeMomentum || u >= s.longSwipesMs) &&
          (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses());
      } else {
        for (var M = 0, z = t.slidesSizesGrid[0], P = 0; P < o.length; P += s.slidesPerGroup)
          void 0 !== o[P + s.slidesPerGroup]
            ? p >= o[P] && p < o[P + s.slidesPerGroup] && ((M = P), (z = o[P + s.slidesPerGroup] - o[P]))
            : p >= o[P] && ((M = P), (z = o[o.length - 1] - o[o.length - 2]));
        var k = (p - o[M]) / z;
        if (u > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          ("next" === t.swipeDirection && (k >= s.longSwipesRatio ? t.slideTo(M + s.slidesPerGroup) : t.slideTo(M)),
            "prev" === t.swipeDirection &&
              (k > 1 - s.longSwipesRatio ? t.slideTo(M + s.slidesPerGroup) : t.slideTo(M)));
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          ("next" === t.swipeDirection && t.slideTo(M + s.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(M));
        }
      }
    },
    S = function () {
      var e = this.params,
        t = this.el;
      if (!t || 0 !== t.offsetWidth) {
        e.breakpoints && this.setBreakpoint();
        var i = this.allowSlideNext,
          s = this.allowSlidePrev;
        if (
          ((this.allowSlideNext = !0), (this.allowSlidePrev = !0), this.updateSize(), this.updateSlides(), e.freeMode)
        ) {
          var a = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
          (this.setTranslate(a),
            this.updateActiveIndex(),
            this.updateSlidesClasses(),
            e.autoHeight && this.updateAutoHeight());
        } else
          (this.updateSlidesClasses(),
            ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides
              ? this.slideTo(this.slides.length - 1, 0, !1, !0)
              : this.slideTo(this.activeIndex, 0, !1, !0));
        ((this.allowSlidePrev = s), (this.allowSlideNext = i));
      }
    },
    C = function (e) {
      this.allowClick ||
        (this.params.preventClicks && e.preventDefault(),
        this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
    };
  var M = {
      attachEvents: function () {
        var t = this.params,
          i = this.touchEvents,
          s = this.el,
          a = this.wrapperEl;
        ((this.onTouchStart = x.bind(this)),
          (this.onTouchMove = E.bind(this)),
          (this.onTouchEnd = T.bind(this)),
          (this.onClick = C.bind(this)));
        var r = "container" === t.touchEventsTarget ? s : a,
          n = !!t.nested;
        if (h.touch || (!h.pointerEvents && !h.prefixedPointerEvents)) {
          if (h.touch) {
            var o = !("touchstart" !== i.start || !h.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
            (r.addEventListener(i.start, this.onTouchStart, o),
              r.addEventListener(i.move, this.onTouchMove, h.passiveListener ? { passive: !1, capture: n } : n),
              r.addEventListener(i.end, this.onTouchEnd, o));
          }
          ((t.simulateTouch && !y.ios && !y.android) || (t.simulateTouch && !h.touch && y.ios)) &&
            (r.addEventListener("mousedown", this.onTouchStart, !1),
            e.addEventListener("mousemove", this.onTouchMove, n),
            e.addEventListener("mouseup", this.onTouchEnd, !1));
        } else
          (r.addEventListener(i.start, this.onTouchStart, !1),
            e.addEventListener(i.move, this.onTouchMove, n),
            e.addEventListener(i.end, this.onTouchEnd, !1));
        ((t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", this.onClick, !0),
          this.on("resize observerUpdate", S));
      },
      detachEvents: function () {
        var t = this.params,
          i = this.touchEvents,
          s = this.el,
          a = this.wrapperEl,
          r = "container" === t.touchEventsTarget ? s : a,
          n = !!t.nested;
        if (h.touch || (!h.pointerEvents && !h.prefixedPointerEvents)) {
          if (h.touch) {
            var o = !("onTouchStart" !== i.start || !h.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1,
            };
            (r.removeEventListener(i.start, this.onTouchStart, o),
              r.removeEventListener(i.move, this.onTouchMove, n),
              r.removeEventListener(i.end, this.onTouchEnd, o));
          }
          ((t.simulateTouch && !y.ios && !y.android) || (t.simulateTouch && !h.touch && y.ios)) &&
            (r.removeEventListener("mousedown", this.onTouchStart, !1),
            e.removeEventListener("mousemove", this.onTouchMove, n),
            e.removeEventListener("mouseup", this.onTouchEnd, !1));
        } else
          (r.removeEventListener(i.start, this.onTouchStart, !1),
            e.removeEventListener(i.move, this.onTouchMove, n),
            e.removeEventListener(i.end, this.onTouchEnd, !1));
        ((t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0),
          this.off("resize observerUpdate", S));
      },
    },
    z = {
      setBreakpoint: function () {
        var e = this.activeIndex,
          t = this.loopedSlides;
        void 0 === t && (t = 0);
        var i = this.params,
          s = i.breakpoints;
        if (s && (!s || 0 !== Object.keys(s).length)) {
          var a = this.getBreakpoint(s);
          if (a && this.currentBreakpoint !== a) {
            var r = a in s ? s[a] : this.originalParams,
              n = i.loop && r.slidesPerView !== i.slidesPerView;
            (d.extend(this.params, r),
              d.extend(this, {
                allowTouchMove: this.params.allowTouchMove,
                allowSlideNext: this.params.allowSlideNext,
                allowSlidePrev: this.params.allowSlidePrev,
              }),
              (this.currentBreakpoint = a),
              n &&
                (this.loopDestroy(),
                this.loopCreate(),
                this.updateSlides(),
                this.slideTo(e - t + this.loopedSlides, 0, !1)),
              this.emit("breakpoint", r));
          }
        }
      },
      getBreakpoint: function (e) {
        if (e) {
          var i = !1,
            s = [];
          (Object.keys(e).forEach(function (e) {
            s.push(e);
          }),
            s.sort(function (e, t) {
              return parseInt(e, 10) - parseInt(t, 10);
            }));
          for (var a = 0; a < s.length; a += 1) {
            var r = s[a];
            r >= t.innerWidth && !i && (i = r);
          }
          return i || "max";
        }
      },
    },
    P = (function () {
      return {
        isIE: !!t.navigator.userAgent.match(/Trident/g) || !!t.navigator.userAgent.match(/MSIE/g),
        isSafari:
          ((e = t.navigator.userAgent.toLowerCase()),
          e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),
      };
      var e;
    })();
  var k = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "container",
      initialSlide: 0,
      speed: 300,
      preventIntercationOnTransition: !1,
      iOSEdgeSwipeDetection: !1,
      iOSEdgeSwipeThreshold: 20,
      freeMode: !1,
      freeModeMomentum: !0,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: !0,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: !1,
      freeModeMinimumVelocity: 0.02,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: "column",
      slidesPerGroup: 1,
      centeredSlides: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      watchOverflow: !1,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !0,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      watchSlidesVisibility: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      containerModifierClass: "swiper-container-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
    },
    $ = {
      update: u,
      translate: v,
      transition: f,
      slide: m,
      loop: g,
      grabCursor: b,
      manipulation: w,
      events: M,
      breakpoints: z,
      checkOverflow: {
        checkOverflow: function () {
          var e = this.isLocked;
          ((this.isLocked = 1 === this.snapGrid.length),
            (this.allowTouchMove = !this.isLocked),
            e && e !== this.isLocked && ((this.isEnd = !1), this.navigation.update()));
        },
      },
      classes: {
        addClasses: function () {
          var e = this.classNames,
            t = this.params,
            i = this.rtl,
            s = this.$el,
            a = [];
          (a.push(t.direction),
            t.freeMode && a.push("free-mode"),
            h.flexbox || a.push("no-flexbox"),
            t.autoHeight && a.push("autoheight"),
            i && a.push("rtl"),
            t.slidesPerColumn > 1 && a.push("multirow"),
            y.android && a.push("android"),
            y.ios && a.push("ios"),
            P.isIE && (h.pointerEvents || h.prefixedPointerEvents) && a.push("wp8-" + t.direction),
            a.forEach(function (i) {
              e.push(t.containerModifierClass + i);
            }),
            s.addClass(e.join(" ")));
        },
        removeClasses: function () {
          var e = this.$el,
            t = this.classNames;
          e.removeClass(t.join(" "));
        },
      },
      images: {
        loadImage: function (e, i, s, a, r, n) {
          var o;
          function l() {
            n && n();
          }
          e.complete && r
            ? l()
            : i
              ? (((o = new t.Image()).onload = l),
                (o.onerror = l),
                a && (o.sizes = a),
                s && (o.srcset = s),
                i && (o.src = i))
              : l();
        },
        preloadImages: function () {
          var e = this;
          function t() {
            void 0 !== e &&
              null !== e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
          }
          e.imagesToLoad = e.$el.find("img");
          for (var i = 0; i < e.imagesToLoad.length; i += 1) {
            var s = e.imagesToLoad[i];
            e.loadImage(
              s,
              s.currentSrc || s.getAttribute("src"),
              s.srcset || s.getAttribute("srcset"),
              s.sizes || s.getAttribute("sizes"),
              !0,
              t,
            );
          }
        },
      },
    },
    L = {},
    I = (function (e) {
      function t() {
        for (var i, a, r, n = [], o = arguments.length; o--; ) n[o] = arguments[o];
        1 === n.length && n[0].constructor && n[0].constructor === Object ? (a = n[0]) : ((i = (r = n)[0]), (a = r[1]));
        (a || (a = {}),
          (a = d.extend({}, a)),
          i && !a.el && (a.el = i),
          e.call(this, a),
          Object.keys($).forEach(function (e) {
            Object.keys($[e]).forEach(function (i) {
              t.prototype[i] || (t.prototype[i] = $[e][i]);
            });
          }));
        var l = this;
        (void 0 === l.modules && (l.modules = {}),
          Object.keys(l.modules).forEach(function (e) {
            var t = l.modules[e];
            if (t.params) {
              var i = Object.keys(t.params)[0],
                s = t.params[i];
              if ("object" != typeof s) return;
              if (!(i in a && "enabled" in s)) return;
              (!0 === a[i] && (a[i] = { enabled: !0 }),
                "object" != typeof a[i] || "enabled" in a[i] || (a[i].enabled = !0),
                a[i] || (a[i] = { enabled: !1 }));
            }
          }));
        var p = d.extend({}, k);
        (l.useModulesParams(p),
          (l.params = d.extend({}, p, L, a)),
          (l.originalParams = d.extend({}, l.params)),
          (l.passedParams = d.extend({}, a)),
          (l.$ = s));
        var c = s(l.params.el);
        if ((i = c[0])) {
          if (c.length > 1) {
            var u = [];
            return (
              c.each(function (e, i) {
                var s = d.extend({}, a, { el: i });
                u.push(new t(s));
              }),
              u
            );
          }
          ((i.swiper = l), c.data("swiper", l));
          var v,
            f,
            m = c.children("." + l.params.wrapperClass);
          return (
            d.extend(l, {
              $el: c,
              el: i,
              $wrapperEl: m,
              wrapperEl: m[0],
              classNames: [],
              slides: s(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return "horizontal" === l.params.direction;
              },
              isVertical: function () {
                return "vertical" === l.params.direction;
              },
              rtl:
                "horizontal" === l.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === c.css("direction")),
              wrongRTL: "-webkit-box" === m.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: l.params.allowSlideNext,
              allowSlidePrev: l.params.allowSlidePrev,
              touchEvents:
                ((v = ["touchstart", "touchmove", "touchend"]),
                (f = ["mousedown", "mousemove", "mouseup"]),
                h.pointerEvents
                  ? (f = ["pointerdown", "pointermove", "pointerup"])
                  : h.prefixedPointerEvents && (f = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                (l.touchEventsTouch = { start: v[0], move: v[1], end: v[2] }),
                (l.touchEventsDesktop = { start: f[0], move: f[1], end: f[2] }),
                h.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements: "input, select, option, textarea, button, video",
                lastClickTime: d.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0,
              },
              allowClick: !0,
              allowTouchMove: l.params.allowTouchMove,
              touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
              imagesToLoad: [],
              imagesLoaded: 0,
            }),
            l.useModules(),
            l.params.init && l.init(),
            l
          );
        }
      }
      (e && (t.__proto__ = e), (t.prototype = Object.create(e && e.prototype)), (t.prototype.constructor = t));
      var i = {
        extendedDefaults: { configurable: !0 },
        defaults: { configurable: !0 },
        Class: { configurable: !0 },
        $: { configurable: !0 },
      };
      return (
        (t.prototype.slidesPerViewDynamic = function () {
          var e = this.params,
            t = this.slides,
            i = this.slidesGrid,
            s = this.size,
            a = this.activeIndex,
            r = 1;
          if (e.centeredSlides) {
            for (var n, o = t[a].swiperSlideSize, l = a + 1; l < t.length; l += 1)
              t[l] && !n && ((r += 1), (o += t[l].swiperSlideSize) > s && (n = !0));
            for (var d = a - 1; d >= 0; d -= 1) t[d] && !n && ((r += 1), (o += t[d].swiperSlideSize) > s && (n = !0));
          } else for (var h = a + 1; h < t.length; h += 1) i[h] - i[a] < s && (r += 1);
          return r;
        }),
        (t.prototype.update = function () {
          var e = this;
          e &&
            !e.destroyed &&
            (e.updateSize(),
            e.updateSlides(),
            e.updateProgress(),
            e.updateSlidesClasses(),
            e.params.freeMode
              ? (t(), e.params.autoHeight && e.updateAutoHeight())
              : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)) || t(),
            e.emit("update"));
          function t() {
            var t = e.rtl ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            (e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses());
          }
        }),
        (t.prototype.init = function () {
          this.initialized ||
            (this.emit("beforeInit"),
            this.params.breakpoints && this.setBreakpoint(),
            this.addClasses(),
            this.params.loop && this.loopCreate(),
            this.updateSize(),
            this.updateSlides(),
            this.params.watchOverflow && this.checkOverflow(),
            this.params.grabCursor && this.setGrabCursor(),
            this.params.preloadImages && this.preloadImages(),
            this.params.loop
              ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit)
              : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit),
            this.attachEvents(),
            (this.initialized = !0),
            this.emit("init"));
        }),
        (t.prototype.destroy = function (e, t) {
          (void 0 === e && (e = !0), void 0 === t && (t = !0));
          var i = this,
            s = i.params,
            a = i.$el,
            r = i.$wrapperEl,
            n = i.slides;
          (i.emit("beforeDestroy"),
            (i.initialized = !1),
            i.detachEvents(),
            s.loop && i.loopDestroy(),
            t &&
              (i.removeClasses(),
              a.removeAttr("style"),
              r.removeAttr("style"),
              n &&
                n.length &&
                n
                  .removeClass([s.slideVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass].join(" "))
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")
                  .removeAttr("data-swiper-column")
                  .removeAttr("data-swiper-row")),
            i.emit("destroy"),
            Object.keys(i.eventsListeners).forEach(function (e) {
              i.off(e);
            }),
            !1 !== e && ((i.$el[0].swiper = null), i.$el.data("swiper", null), d.deleteProps(i)),
            (i.destroyed = !0));
        }),
        (t.extendDefaults = function (e) {
          d.extend(L, e);
        }),
        (i.extendedDefaults.get = function () {
          return L;
        }),
        (i.defaults.get = function () {
          return k;
        }),
        (i.Class.get = function () {
          return e;
        }),
        (i.$.get = function () {
          return s;
        }),
        Object.defineProperties(t, i),
        t
      );
    })(p),
    D = { name: "device", proto: { device: y }, static: { device: y } },
    O = { name: "support", proto: { support: h }, static: { support: h } },
    A = { name: "browser", proto: { browser: P }, static: { browser: P } },
    H = {
      name: "resize",
      create: function () {
        var e = this;
        d.extend(e, {
          resize: {
            resizeHandler: function () {
              e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
            },
            orientationChangeHandler: function () {
              e && !e.destroyed && e.initialized && e.emit("orientationchange");
            },
          },
        });
      },
      on: {
        init: function () {
          (t.addEventListener("resize", this.resize.resizeHandler),
            t.addEventListener("orientationchange", this.resize.orientationChangeHandler));
        },
        destroy: function () {
          (t.removeEventListener("resize", this.resize.resizeHandler),
            t.removeEventListener("orientationchange", this.resize.orientationChangeHandler));
        },
      },
    },
    N = {
      func: t.MutationObserver || t.WebkitMutationObserver,
      attach: function (e, t) {
        void 0 === t && (t = {});
        var i = this,
          s = new (0, N.func)(function (e) {
            e.forEach(function (e) {
              i.emit("observerUpdate", e);
            });
          });
        (s.observe(e, {
          attributes: void 0 === t.attributes || t.attributes,
          childList: void 0 === t.childList || t.childList,
          characterData: void 0 === t.characterData || t.characterData,
        }),
          i.observer.observers.push(s));
      },
      init: function () {
        if (h.observer && this.params.observer) {
          if (this.params.observeParents)
            for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
          (this.observer.attach(this.$el[0], { childList: !1 }),
            this.observer.attach(this.$wrapperEl[0], { attributes: !1 }));
        }
      },
      destroy: function () {
        (this.observer.observers.forEach(function (e) {
          e.disconnect();
        }),
          (this.observer.observers = []));
      },
    },
    X = {
      name: "observer",
      params: { observer: !1, observeParents: !1 },
      create: function () {
        d.extend(this, {
          observer: {
            init: N.init.bind(this),
            attach: N.attach.bind(this),
            destroy: N.destroy.bind(this),
            observers: [],
          },
        });
      },
      on: {
        init: function () {
          this.observer.init();
        },
        destroy: function () {
          this.observer.destroy();
        },
      },
    },
    Y = {
      update: function (e) {
        var t = this,
          i = t.params,
          s = i.slidesPerView,
          a = i.slidesPerGroup,
          r = i.centeredSlides,
          n = t.virtual,
          o = n.from,
          l = n.to,
          h = n.slides,
          p = n.slidesGrid,
          c = n.renderSlide,
          u = n.offset;
        t.updateActiveIndex();
        var v,
          f,
          m,
          g = t.activeIndex || 0;
        ((v = t.rtl && t.isHorizontal() ? "right" : t.isHorizontal() ? "left" : "top"),
          r ? ((f = Math.floor(s / 2) + a), (m = Math.floor(s / 2) + a)) : ((f = s + (a - 1)), (m = a)));
        var b = Math.max((g || 0) - m, 0),
          w = Math.min((g || 0) + f, h.length - 1),
          y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);
        function x() {
          (t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses(),
            t.lazy && t.params.lazy.enabled && t.lazy.load());
        }
        if ((d.extend(t.virtual, { from: b, to: w, offset: y, slidesGrid: t.slidesGrid }), o === b && l === w && !e))
          return (t.slidesGrid !== p && y !== u && t.slides.css(v, y + "px"), void t.updateProgress());
        if (t.params.virtual.renderExternal)
          return (
            t.params.virtual.renderExternal.call(t, {
              offset: y,
              from: b,
              to: w,
              slides: (function () {
                for (var e = [], t = b; t <= w; t += 1) e.push(h[t]);
                return e;
              })(),
            }),
            void x()
          );
        var E = [],
          T = [];
        if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
        else
          for (var S = o; S <= l; S += 1)
            (S < b || S > w) &&
              t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + S + '"]').remove();
        for (var C = 0; C < h.length; C += 1)
          C >= b && C <= w && (void 0 === l || e ? T.push(C) : (C > l && T.push(C), C < o && E.push(C)));
        (T.forEach(function (e) {
          t.$wrapperEl.append(c(h[e], e));
        }),
          E.sort(function (e, t) {
            return e < t;
          }).forEach(function (e) {
            t.$wrapperEl.prepend(c(h[e], e));
          }),
          t.$wrapperEl.children(".swiper-slide").css(v, y + "px"),
          x());
      },
      renderSlide: function (e, t) {
        var i = this.params.virtual;
        if (i.cache && this.virtual.cache[t]) return this.virtual.cache[t];
        var a = i.renderSlide
          ? s(i.renderSlide.call(this, e, t))
          : s('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
        return (
          a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t),
          i.cache && (this.virtual.cache[t] = a),
          a
        );
      },
      appendSlide: function (e) {
        (this.virtual.slides.push(e), this.virtual.update(!0));
      },
      prependSlide: function (e) {
        if ((this.virtual.slides.unshift(e), this.params.virtual.cache)) {
          var t = this.virtual.cache,
            i = {};
          (Object.keys(t).forEach(function (e) {
            i[e + 1] = t[e];
          }),
            (this.virtual.cache = i));
        }
        (this.virtual.update(!0), this.slideNext(0));
      },
    },
    B = {
      name: "virtual",
      params: { virtual: { enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null } },
      create: function () {
        d.extend(this, {
          virtual: {
            update: Y.update.bind(this),
            appendSlide: Y.appendSlide.bind(this),
            prependSlide: Y.prependSlide.bind(this),
            renderSlide: Y.renderSlide.bind(this),
            slides: this.params.virtual.slides,
            cache: {},
          },
        });
      },
      on: {
        beforeInit: function () {
          if (this.params.virtual.enabled) {
            this.classNames.push(this.params.containerModifierClass + "virtual");
            var e = { watchSlidesProgress: !0 };
            (d.extend(this.params, e), d.extend(this.originalParams, e), this.virtual.update());
          }
        },
        setTranslate: function () {
          this.params.virtual.enabled && this.virtual.update();
        },
      },
    },
    G = {
      handle: function (i) {
        var s = i;
        s.originalEvent && (s = s.originalEvent);
        var a = s.keyCode || s.charCode;
        if (!this.allowSlideNext && ((this.isHorizontal() && 39 === a) || (this.isVertical() && 40 === a))) return !1;
        if (!this.allowSlidePrev && ((this.isHorizontal() && 37 === a) || (this.isVertical() && 38 === a))) return !1;
        if (
          !(
            s.shiftKey ||
            s.altKey ||
            s.ctrlKey ||
            s.metaKey ||
            (e.activeElement &&
              e.activeElement.nodeName &&
              ("input" === e.activeElement.nodeName.toLowerCase() ||
                "textarea" === e.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (this.params.keyboard.onlyInViewport && (37 === a || 39 === a || 38 === a || 40 === a)) {
            var r = !1;
            if (
              this.$el.parents("." + this.params.slideClass).length > 0 &&
              0 === this.$el.parents("." + this.params.slideActiveClass).length
            )
              return;
            var n = t.innerWidth,
              o = t.innerHeight,
              l = this.$el.offset();
            this.rtl && (l.left -= this.$el[0].scrollLeft);
            for (
              var d = [
                  [l.left, l.top],
                  [l.left + this.width, l.top],
                  [l.left, l.top + this.height],
                  [l.left + this.width, l.top + this.height],
                ],
                h = 0;
              h < d.length;
              h += 1
            ) {
              var p = d[h];
              p[0] >= 0 && p[0] <= n && p[1] >= 0 && p[1] <= o && (r = !0);
            }
            if (!r) return;
          }
          (this.isHorizontal()
            ? ((37 !== a && 39 !== a) || (s.preventDefault ? s.preventDefault() : (s.returnValue = !1)),
              ((39 === a && !this.rtl) || (37 === a && this.rtl)) && this.slideNext(),
              ((37 === a && !this.rtl) || (39 === a && this.rtl)) && this.slidePrev())
            : ((38 !== a && 40 !== a) || (s.preventDefault ? s.preventDefault() : (s.returnValue = !1)),
              40 === a && this.slideNext(),
              38 === a && this.slidePrev()),
            this.emit("keyPress", a));
        }
      },
      enable: function () {
        this.keyboard.enabled || (s(e).on("keydown", this.keyboard.handle), (this.keyboard.enabled = !0));
      },
      disable: function () {
        this.keyboard.enabled && (s(e).off("keydown", this.keyboard.handle), (this.keyboard.enabled = !1));
      },
    },
    V = {
      name: "keyboard",
      params: { keyboard: { enabled: !1, onlyInViewport: !0 } },
      create: function () {
        d.extend(this, {
          keyboard: {
            enabled: !1,
            enable: G.enable.bind(this),
            disable: G.disable.bind(this),
            handle: G.handle.bind(this),
          },
        });
      },
      on: {
        init: function () {
          this.params.keyboard.enabled && this.keyboard.enable();
        },
        destroy: function () {
          this.keyboard.enabled && this.keyboard.disable();
        },
      },
    };
  var R = {
      lastScrollTime: d.now(),
      event:
        t.navigator.userAgent.indexOf("firefox") > -1
          ? "DOMMouseScroll"
          : (function () {
                var t = "onwheel" in e;
                if (!t) {
                  var i = e.createElement("div");
                  (i.setAttribute("onwheel", "return;"), (t = "function" == typeof i.onwheel));
                }
                return (
                  !t &&
                    e.implementation &&
                    e.implementation.hasFeature &&
                    !0 !== e.implementation.hasFeature("", "") &&
                    (t = e.implementation.hasFeature("Events.wheel", "3.0")),
                  t
                );
              })()
            ? "wheel"
            : "mousewheel",
      normalize: function (e) {
        var t = 0,
          i = 0,
          s = 0,
          a = 0;
        return (
          "detail" in e && (i = e.detail),
          "wheelDelta" in e && (i = -e.wheelDelta / 120),
          "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120),
          "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120),
          "axis" in e && e.axis === e.HORIZONTAL_AXIS && ((t = i), (i = 0)),
          (s = 10 * t),
          (a = 10 * i),
          "deltaY" in e && (a = e.deltaY),
          "deltaX" in e && (s = e.deltaX),
          (s || a) && e.deltaMode && (1 === e.deltaMode ? ((s *= 40), (a *= 40)) : ((s *= 800), (a *= 800))),
          s && !t && (t = s < 1 ? -1 : 1),
          a && !i && (i = a < 1 ? -1 : 1),
          { spinX: t, spinY: i, pixelX: s, pixelY: a }
        );
      },
      handle: function (e) {
        var i = e,
          s = this,
          a = s.params.mousewheel;
        i.originalEvent && (i = i.originalEvent);
        var r = 0,
          n = s.rtl ? -1 : 1,
          o = R.normalize(i);
        if (a.forceToAxis)
          if (s.isHorizontal()) {
            if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
            r = o.pixelX * n;
          } else {
            if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
            r = o.pixelY;
          }
        else r = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * n : -o.pixelY;
        if (0 === r) return !0;
        if ((a.invert && (r = -r), s.params.freeMode)) {
          var l = s.getTranslate() + r * a.sensitivity,
            h = s.isBeginning,
            p = s.isEnd;
          if (
            (l >= s.minTranslate() && (l = s.minTranslate()),
            l <= s.maxTranslate() && (l = s.maxTranslate()),
            s.setTransition(0),
            s.setTranslate(l),
            s.updateProgress(),
            s.updateActiveIndex(),
            s.updateSlidesClasses(),
            ((!h && s.isBeginning) || (!p && s.isEnd)) && s.updateSlidesClasses(),
            s.params.freeModeSticky &&
              (clearTimeout(s.mousewheel.timeout),
              (s.mousewheel.timeout = d.nextTick(function () {
                s.slideReset();
              }, 300))),
            s.emit("scroll", i),
            s.params.autoplay && s.params.autoplayDisableOnInteraction && s.stopAutoplay(),
            l === s.minTranslate() || l === s.maxTranslate())
          )
            return !0;
        } else {
          if (d.now() - s.mousewheel.lastScrollTime > 60)
            if (r < 0)
              if ((s.isEnd && !s.params.loop) || s.animating) {
                if (a.releaseOnEdges) return !0;
              } else (s.slideNext(), s.emit("scroll", i));
            else if ((s.isBeginning && !s.params.loop) || s.animating) {
              if (a.releaseOnEdges) return !0;
            } else (s.slidePrev(), s.emit("scroll", i));
          s.mousewheel.lastScrollTime = new t.Date().getTime();
        }
        return (i.preventDefault ? i.preventDefault() : (i.returnValue = !1), !1);
      },
      enable: function () {
        if (!R.event) return !1;
        if (this.mousewheel.enabled) return !1;
        var e = this.$el;
        return (
          "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)),
          e.on(R.event, this.mousewheel.handle),
          (this.mousewheel.enabled = !0),
          !0
        );
      },
      disable: function () {
        if (!R.event) return !1;
        if (!this.mousewheel.enabled) return !1;
        var e = this.$el;
        return (
          "container" !== this.params.mousewheel.eventsTarged && (e = s(this.params.mousewheel.eventsTarged)),
          e.off(R.event, this.mousewheel.handle),
          (this.mousewheel.enabled = !1),
          !0
        );
      },
    },
    F = {
      update: function () {
        var e = this.params.navigation;
        if (!this.params.loop) {
          var t = this.navigation,
            i = t.$nextEl,
            s = t.$prevEl;
          (s &&
            s.length > 0 &&
            (this.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass),
            s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)),
            i &&
              i.length > 0 &&
              (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass),
              i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)));
        }
      },
      init: function () {
        var e,
          t,
          i = this,
          a = i.params.navigation;
        (a.nextEl || a.prevEl) &&
          (a.nextEl &&
            ((e = s(a.nextEl)),
            i.params.uniqueNavElements &&
              "string" == typeof a.nextEl &&
              e.length > 1 &&
              1 === i.$el.find(a.nextEl).length &&
              (e = i.$el.find(a.nextEl))),
          a.prevEl &&
            ((t = s(a.prevEl)),
            i.params.uniqueNavElements &&
              "string" == typeof a.prevEl &&
              t.length > 1 &&
              1 === i.$el.find(a.prevEl).length &&
              (t = i.$el.find(a.prevEl))),
          e &&
            e.length > 0 &&
            e.on("click", function (e) {
              (e.preventDefault(), (i.isEnd && !i.params.loop) || i.slideNext());
            }),
          t &&
            t.length > 0 &&
            t.on("click", function (e) {
              (e.preventDefault(), (i.isBeginning && !i.params.loop) || i.slidePrev());
            }),
          d.extend(i.navigation, { $nextEl: e, nextEl: e && e[0], $prevEl: t, prevEl: t && t[0] }));
      },
      destroy: function () {
        var e = this.navigation,
          t = e.$nextEl,
          i = e.$prevEl;
        (t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)),
          i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass)));
      },
    },
    W = {
      update: function () {
        var e = this.rtl,
          t = this.params.pagination;
        if (t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var i,
            a = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            r = this.pagination.$el,
            n = this.params.loop
              ? Math.ceil((a - 2 * this.loopedSlides) / this.params.slidesPerGroup)
              : this.snapGrid.length;
          if (
            (this.params.loop
              ? ((i = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) >
                  a - 1 - 2 * this.loopedSlides && (i -= a - 2 * this.loopedSlides),
                i > n - 1 && (i -= n),
                i < 0 && "bullets" !== this.params.paginationType && (i = n + i))
              : (i = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0),
            "bullets" === t.type && this.pagination.bullets && this.pagination.bullets.length > 0)
          ) {
            var o,
              l,
              d,
              h = this.pagination.bullets;
            if (
              (t.dynamicBullets &&
                ((this.pagination.bulletSize = h.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
                r.css(
                  this.isHorizontal() ? "width" : "height",
                  this.pagination.bulletSize * (t.dynamicMainBullets + 4) + "px",
                ),
                t.dynamicMainBullets > 1 &&
                  void 0 !== this.previousIndex &&
                  (i > this.previousIndex && this.pagination.dynamicBulletIndex < t.dynamicMainBullets - 1
                    ? (this.pagination.dynamicBulletIndex += 1)
                    : i < this.previousIndex &&
                      this.pagination.dynamicBulletIndex > 0 &&
                      (this.pagination.dynamicBulletIndex -= 1)),
                (o = i - this.pagination.dynamicBulletIndex),
                (d = ((l = o + (t.dynamicMainBullets - 1)) + o) / 2)),
              h.removeClass(
                t.bulletActiveClass +
                  " " +
                  t.bulletActiveClass +
                  "-next " +
                  t.bulletActiveClass +
                  "-next-next " +
                  t.bulletActiveClass +
                  "-prev " +
                  t.bulletActiveClass +
                  "-prev-prev " +
                  t.bulletActiveClass +
                  "-main",
              ),
              r.length > 1)
            )
              h.each(function (e, a) {
                var r = s(a),
                  n = r.index();
                (n === i && r.addClass(t.bulletActiveClass),
                  t.dynamicBullets &&
                    (n >= o && n <= l && r.addClass(t.bulletActiveClass + "-main"),
                    n === o &&
                      r
                        .prev()
                        .addClass(t.bulletActiveClass + "-prev")
                        .prev()
                        .addClass(t.bulletActiveClass + "-prev-prev"),
                    n === l &&
                      r
                        .next()
                        .addClass(t.bulletActiveClass + "-next")
                        .next()
                        .addClass(t.bulletActiveClass + "-next-next")));
              });
            else if ((h.eq(i).addClass(t.bulletActiveClass), t.dynamicBullets)) {
              for (var p = h.eq(o), c = h.eq(l), u = o; u <= l; u += 1) h.eq(u).addClass(t.bulletActiveClass + "-main");
              (p
                .prev()
                .addClass(t.bulletActiveClass + "-prev")
                .prev()
                .addClass(t.bulletActiveClass + "-prev-prev"),
                c
                  .next()
                  .addClass(t.bulletActiveClass + "-next")
                  .next()
                  .addClass(t.bulletActiveClass + "-next-next"));
            }
            if (t.dynamicBullets) {
              var v = Math.min(h.length, t.dynamicMainBullets + 4),
                f = (this.pagination.bulletSize * v - this.pagination.bulletSize) / 2 - d * this.pagination.bulletSize,
                m = e ? "right" : "left";
              h.css(this.isHorizontal() ? m : "top", f + "px");
            }
          }
          if (
            ("fraction" === t.type && (r.find("." + t.currentClass).text(i + 1), r.find("." + t.totalClass).text(n)),
            "progressbar" === t.type)
          ) {
            var g = (i + 1) / n,
              b = g,
              w = 1;
            (this.isHorizontal() || ((w = g), (b = 1)),
              r
                .find("." + t.progressbarFillClass)
                .transform("translate3d(0,0,0) scaleX(" + b + ") scaleY(" + w + ")")
                .transition(this.params.speed));
          }
          ("custom" === t.type && t.renderCustom
            ? (r.html(t.renderCustom(this, i + 1, n)), this.emit("paginationRender", this, r[0]))
            : this.emit("paginationUpdate", this, r[0]),
            r[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](t.lockClass));
        }
      },
      render: function () {
        var e = this.params.pagination;
        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
            i = this.pagination.$el,
            s = "";
          if ("bullets" === e.type) {
            for (
              var a = this.params.loop
                  ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup)
                  : this.snapGrid.length,
                r = 0;
              r < a;
              r += 1
            )
              e.renderBullet
                ? (s += e.renderBullet.call(this, r, e.bulletClass))
                : (s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">");
            (i.html(s), (this.pagination.bullets = i.find("." + e.bulletClass)));
          }
          ("fraction" === e.type &&
            ((s = e.renderFraction
              ? e.renderFraction.call(this, e.currentClass, e.totalClass)
              : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>'),
            i.html(s)),
            "progressbar" === e.type &&
              ((s = e.renderProgressbar
                ? e.renderProgressbar.call(this, e.progressbarFillClass)
                : '<span class="' + e.progressbarFillClass + '"></span>'),
              i.html(s)),
            "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0]));
        }
      },
      init: function () {
        var e = this,
          t = e.params.pagination;
        if (t.el) {
          var i = s(t.el);
          0 !== i.length &&
            (e.params.uniqueNavElements &&
              "string" == typeof t.el &&
              i.length > 1 &&
              1 === e.$el.find(t.el).length &&
              (i = e.$el.find(t.el)),
            "bullets" === t.type && t.clickable && i.addClass(t.clickableClass),
            i.addClass(t.modifierClass + t.type),
            "bullets" === t.type &&
              t.dynamicBullets &&
              (i.addClass("" + t.modifierClass + t.type + "-dynamic"),
              (e.pagination.dynamicBulletIndex = 0),
              t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
            t.clickable &&
              i.on("click", "." + t.bulletClass, function (t) {
                t.preventDefault();
                var i = s(this).index() * e.params.slidesPerGroup;
                (e.params.loop && (i += e.loopedSlides), e.slideTo(i));
              }),
            d.extend(e.pagination, { $el: i, el: i[0] }));
        }
      },
      destroy: function () {
        var e = this.params.pagination;
        if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
          var t = this.pagination.$el;
          (t.removeClass(e.hiddenClass),
            t.removeClass(e.modifierClass + e.type),
            this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass),
            e.clickable && t.off("click", "." + e.bulletClass));
        }
      },
    },
    q = {
      setTranslate: function () {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = this.rtl,
            i = this.progress,
            s = e.dragSize,
            a = e.trackSize,
            r = e.$dragEl,
            n = e.$el,
            o = this.params.scrollbar,
            l = s,
            d = (a - s) * i;
          (t && this.isHorizontal()
            ? (d = -d) > 0
              ? ((l = s - d), (d = 0))
              : -d + s > a && (l = a + d)
            : d < 0
              ? ((l = s + d), (d = 0))
              : d + s > a && (l = a - d),
            this.isHorizontal()
              ? (h.transforms3d
                  ? r.transform("translate3d(" + d + "px, 0, 0)")
                  : r.transform("translateX(" + d + "px)"),
                (r[0].style.width = l + "px"))
              : (h.transforms3d
                  ? r.transform("translate3d(0px, " + d + "px, 0)")
                  : r.transform("translateY(" + d + "px)"),
                (r[0].style.height = l + "px")),
            o.hide &&
              (clearTimeout(this.scrollbar.timeout),
              (n[0].style.opacity = 1),
              (this.scrollbar.timeout = setTimeout(function () {
                ((n[0].style.opacity = 0), n.transition(400));
              }, 1e3))));
        }
      },
      setTransition: function (e) {
        this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
      },
      updateSize: function () {
        if (this.params.scrollbar.el && this.scrollbar.el) {
          var e = this.scrollbar,
            t = e.$dragEl,
            i = e.$el;
          ((t[0].style.width = ""), (t[0].style.height = ""));
          var s,
            a = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
            r = this.size / this.virtualSize,
            n = r * (a / this.size);
          ((s = "auto" === this.params.scrollbar.dragSize ? a * r : parseInt(this.params.scrollbar.dragSize, 10)),
            this.isHorizontal() ? (t[0].style.width = s + "px") : (t[0].style.height = s + "px"),
            (i[0].style.display = r >= 1 ? "none" : ""),
            this.params.scrollbarHide && (i[0].style.opacity = 0),
            d.extend(e, { trackSize: a, divider: r, moveDivider: n, dragSize: s }),
            e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](
              this.params.scrollbar.lockClass,
            ));
        }
      },
      setDragPosition: function (e) {
        var t,
          i = this.scrollbar,
          s = i.$el,
          a = i.dragSize,
          r = i.trackSize;
        ((t =
          ((this.isHorizontal()
            ? "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].pageX
              : e.pageX || e.clientX
            : "touchstart" === e.type || "touchmove" === e.type
              ? e.targetTouches[0].pageY
              : e.pageY || e.clientY) -
            s.offset()[this.isHorizontal() ? "left" : "top"] -
            a / 2) /
          (r - a)),
          (t = Math.max(Math.min(t, 1), 0)),
          this.rtl && (t = 1 - t));
        var n = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
        (this.updateProgress(n), this.setTranslate(n), this.updateActiveIndex(), this.updateSlidesClasses());
      },
      onDragStart: function (e) {
        var t = this.params.scrollbar,
          i = this.scrollbar,
          s = this.$wrapperEl,
          a = i.$el,
          r = i.$dragEl;
        ((this.scrollbar.isTouched = !0),
          e.preventDefault(),
          e.stopPropagation(),
          s.transition(100),
          r.transition(100),
          i.setDragPosition(e),
          clearTimeout(this.scrollbar.dragTimeout),
          a.transition(0),
          t.hide && a.css("opacity", 1),
          this.emit("scrollbarDragStart", e));
      },
      onDragMove: function (e) {
        var t = this.scrollbar,
          i = this.$wrapperEl,
          s = t.$el,
          a = t.$dragEl;
        this.scrollbar.isTouched &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          t.setDragPosition(e),
          i.transition(0),
          s.transition(0),
          a.transition(0),
          this.emit("scrollbarDragMove", e));
      },
      onDragEnd: function (e) {
        var t = this.params.scrollbar,
          i = this.scrollbar.$el;
        this.scrollbar.isTouched &&
          ((this.scrollbar.isTouched = !1),
          t.hide &&
            (clearTimeout(this.scrollbar.dragTimeout),
            (this.scrollbar.dragTimeout = d.nextTick(function () {
              (i.css("opacity", 0), i.transition(400));
            }, 1e3))),
          this.emit("scrollbarDragEnd", e),
          t.snapOnRelease && this.slideReset());
      },
      enableDraggable: function () {
        if (this.params.scrollbar.el) {
          var t = this.scrollbar,
            i = this.touchEvents,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!h.passiveListener || !a.passiveListener) && { passive: !1, capture: !1 },
            o = !(!h.passiveListener || !a.passiveListener) && { passive: !0, capture: !1 };
          h.touch || (!h.pointerEvents && !h.prefixedPointerEvents)
            ? (h.touch &&
                (r.addEventListener(i.start, this.scrollbar.onDragStart, n),
                r.addEventListener(i.move, this.scrollbar.onDragMove, n),
                r.addEventListener(i.end, this.scrollbar.onDragEnd, o)),
              ((a.simulateTouch && !y.ios && !y.android) || (a.simulateTouch && !h.touch && y.ios)) &&
                (r.addEventListener("mousedown", this.scrollbar.onDragStart, n),
                e.addEventListener("mousemove", this.scrollbar.onDragMove, n),
                e.addEventListener("mouseup", this.scrollbar.onDragEnd, o)))
            : (r.addEventListener(s.start, this.scrollbar.onDragStart, n),
              e.addEventListener(s.move, this.scrollbar.onDragMove, n),
              e.addEventListener(s.end, this.scrollbar.onDragEnd, o));
        }
      },
      disableDraggable: function () {
        if (this.params.scrollbar.el) {
          var t = this.scrollbar,
            i = this.touchEvents,
            s = this.touchEventsDesktop,
            a = this.params,
            r = t.$el[0],
            n = !(!h.passiveListener || !a.passiveListener) && { passive: !1, capture: !1 },
            o = !(!h.passiveListener || !a.passiveListener) && { passive: !0, capture: !1 };
          h.touch || (!h.pointerEvents && !h.prefixedPointerEvents)
            ? (h.touch &&
                (r.removeEventListener(i.start, this.scrollbar.onDragStart, n),
                r.removeEventListener(i.move, this.scrollbar.onDragMove, n),
                r.removeEventListener(i.end, this.scrollbar.onDragEnd, o)),
              ((a.simulateTouch && !y.ios && !y.android) || (a.simulateTouch && !h.touch && y.ios)) &&
                (r.removeEventListener("mousedown", this.scrollbar.onDragStart, n),
                e.removeEventListener("mousemove", this.scrollbar.onDragMove, n),
                e.removeEventListener("mouseup", this.scrollbar.onDragEnd, o)))
            : (r.removeEventListener(s.start, this.scrollbar.onDragStart, n),
              e.removeEventListener(s.move, this.scrollbar.onDragMove, n),
              e.removeEventListener(s.end, this.scrollbar.onDragEnd, o));
        }
      },
      init: function () {
        if (this.params.scrollbar.el) {
          var e = this.scrollbar,
            t = this.$el,
            i = this.params.scrollbar,
            a = s(i.el);
          this.params.uniqueNavElements &&
            "string" == typeof i.el &&
            a.length > 1 &&
            1 === t.find(i.el).length &&
            (a = t.find(i.el));
          var r = a.find("." + this.params.scrollbar.dragClass);
          (0 === r.length && ((r = s('<div class="' + this.params.scrollbar.dragClass + '"></div>')), a.append(r)),
            d.extend(e, { $el: a, el: a[0], $dragEl: r, dragEl: r[0] }),
            i.draggable && e.enableDraggable());
        }
      },
      destroy: function () {
        this.scrollbar.disableDraggable();
      },
    },
    j = {
      setTransform: function (e, t) {
        var i = this.rtl,
          a = s(e),
          r = i ? -1 : 1,
          n = a.attr("data-swiper-parallax") || "0",
          o = a.attr("data-swiper-parallax-x"),
          l = a.attr("data-swiper-parallax-y"),
          d = a.attr("data-swiper-parallax-scale"),
          h = a.attr("data-swiper-parallax-opacity");
        if (
          (o || l
            ? ((o = o || "0"), (l = l || "0"))
            : this.isHorizontal()
              ? ((o = n), (l = "0"))
              : ((l = n), (o = "0")),
          (o = o.indexOf("%") >= 0 ? parseInt(o, 10) * t * r + "%" : o * t * r + "px"),
          (l = l.indexOf("%") >= 0 ? parseInt(l, 10) * t + "%" : l * t + "px"),
          void 0 !== h && null !== h)
        ) {
          var p = h - (h - 1) * (1 - Math.abs(t));
          a[0].style.opacity = p;
        }
        if (void 0 === d || null === d) a.transform("translate3d(" + o + ", " + l + ", 0px)");
        else {
          var c = d - (d - 1) * (1 - Math.abs(t));
          a.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + c + ")");
        }
      },
      setTranslate: function () {
        var e = this,
          t = e.$el,
          i = e.slides,
          a = e.progress,
          r = e.snapGrid;
        (t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
          e.parallax.setTransform(i, a);
        }),
          i.each(function (t, i) {
            var n = i.progress;
            (e.params.slidesPerGroup > 1 &&
              "auto" !== e.params.slidesPerView &&
              (n += Math.ceil(t / 2) - a * (r.length - 1)),
              (n = Math.min(Math.max(n, -1), 1)),
              s(i)
                .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]")
                .each(function (t, i) {
                  e.parallax.setTransform(i, n);
                }));
          }));
      },
      setTransition: function (e) {
        void 0 === e && (e = this.params.speed);
        this.$el
          .find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]")
          .each(function (t, i) {
            var a = s(i),
              r = parseInt(a.attr("data-swiper-parallax-duration"), 10) || e;
            (0 === e && (r = 0), a.transition(r));
          });
      },
    },
    K = {
      getDistanceBetweenTouches: function (e) {
        if (e.targetTouches.length < 2) return 1;
        var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          s = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
        return Math.sqrt(Math.pow(s - t, 2) + Math.pow(a - i, 2));
      },
      onGestureStart: function (e) {
        var t = this.params.zoom,
          i = this.zoom,
          a = i.gesture;
        if (((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1), !h.gestures)) {
          if ("touchstart" !== e.type || ("touchstart" === e.type && e.targetTouches.length < 2)) return;
          ((i.fakeGestureTouched = !0), (a.scaleStart = K.getDistanceBetweenTouches(e)));
        }
        (a.$slideEl && a.$slideEl.length) ||
        ((a.$slideEl = s(e.target).closest(".swiper-slide")),
        0 === a.$slideEl.length && (a.$slideEl = this.slides.eq(this.activeIndex)),
        (a.$imageEl = a.$slideEl.find("img, svg, canvas")),
        (a.$imageWrapEl = a.$imageEl.parent("." + t.containerClass)),
        (a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || t.maxRatio),
        0 !== a.$imageWrapEl.length)
          ? (a.$imageEl.transition(0), (this.zoom.isScaling = !0))
          : (a.$imageEl = void 0);
      },
      onGestureChange: function (e) {
        var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;
        if (!h.gestures) {
          if ("touchmove" !== e.type || ("touchmove" === e.type && e.targetTouches.length < 2)) return;
          ((i.fakeGestureMoved = !0), (s.scaleMove = K.getDistanceBetweenTouches(e)));
        }
        s.$imageEl &&
          0 !== s.$imageEl.length &&
          (h.gestures
            ? (this.zoom.scale = e.scale * i.currentScale)
            : (i.scale = (s.scaleMove / s.scaleStart) * i.currentScale),
          i.scale > s.maxRatio && (i.scale = s.maxRatio - 1 + Math.pow(i.scale - s.maxRatio + 1, 0.5)),
          i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, 0.5)),
          s.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"));
      },
      onGestureEnd: function (e) {
        var t = this.params.zoom,
          i = this.zoom,
          s = i.gesture;
        if (!h.gestures) {
          if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
          if ("touchend" !== e.type || ("touchend" === e.type && e.changedTouches.length < 2 && !y.android)) return;
          ((i.fakeGestureTouched = !1), (i.fakeGestureMoved = !1));
        }
        s.$imageEl &&
          0 !== s.$imageEl.length &&
          ((i.scale = Math.max(Math.min(i.scale, s.maxRatio), t.minRatio)),
          s.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"),
          (i.currentScale = i.scale),
          (i.isScaling = !1),
          1 === i.scale && (s.$slideEl = void 0));
      },
      onTouchStart: function (e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image;
        i.$imageEl &&
          0 !== i.$imageEl.length &&
          (s.isTouched ||
            (y.android && e.preventDefault(),
            (s.isTouched = !0),
            (s.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX),
            (s.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY)));
      },
      onTouchMove: function (e) {
        var t = this.zoom,
          i = t.gesture,
          s = t.image,
          a = t.velocity;
        if (i.$imageEl && 0 !== i.$imageEl.length && ((this.allowClick = !1), s.isTouched && i.$slideEl)) {
          s.isMoved ||
            ((s.width = i.$imageEl[0].offsetWidth),
            (s.height = i.$imageEl[0].offsetHeight),
            (s.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0),
            (s.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0),
            (i.slideWidth = i.$slideEl[0].offsetWidth),
            (i.slideHeight = i.$slideEl[0].offsetHeight),
            i.$imageWrapEl.transition(0),
            this.rtl && (s.startX = -s.startX),
            this.rtl && (s.startY = -s.startY));
          var r = s.width * t.scale,
            n = s.height * t.scale;
          if (!(r < i.slideWidth && n < i.slideHeight)) {
            if (
              ((s.minX = Math.min(i.slideWidth / 2 - r / 2, 0)),
              (s.maxX = -s.minX),
              (s.minY = Math.min(i.slideHeight / 2 - n / 2, 0)),
              (s.maxY = -s.minY),
              (s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX),
              (s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY),
              !s.isMoved && !t.isScaling)
            ) {
              if (
                this.isHorizontal() &&
                ((Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x) ||
                  (Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x))
              )
                return void (s.isTouched = !1);
              if (
                !this.isHorizontal() &&
                ((Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y) ||
                  (Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y))
              )
                return void (s.isTouched = !1);
            }
            (e.preventDefault(),
              e.stopPropagation(),
              (s.isMoved = !0),
              (s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX),
              (s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY),
              s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, 0.8)),
              s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, 0.8)),
              s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, 0.8)),
              s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, 0.8)),
              a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x),
              a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y),
              a.prevTime || (a.prevTime = Date.now()),
              (a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2),
              (a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2),
              Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0),
              Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0),
              (a.prevPositionX = s.touchesCurrent.x),
              (a.prevPositionY = s.touchesCurrent.y),
              (a.prevTime = Date.now()),
              i.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)"));
          }
        }
      },
      onTouchEnd: function () {
        var e = this.zoom,
          t = e.gesture,
          i = e.image,
          s = e.velocity;
        if (t.$imageEl && 0 !== t.$imageEl.length) {
          if (!i.isTouched || !i.isMoved) return ((i.isTouched = !1), void (i.isMoved = !1));
          ((i.isTouched = !1), (i.isMoved = !1));
          var a = 300,
            r = 300,
            n = s.x * a,
            o = i.currentX + n,
            l = s.y * r,
            d = i.currentY + l;
          (0 !== s.x && (a = Math.abs((o - i.currentX) / s.x)), 0 !== s.y && (r = Math.abs((d - i.currentY) / s.y)));
          var h = Math.max(a, r);
          ((i.currentX = o), (i.currentY = d));
          var p = i.width * e.scale,
            c = i.height * e.scale;
          ((i.minX = Math.min(t.slideWidth / 2 - p / 2, 0)),
            (i.maxX = -i.minX),
            (i.minY = Math.min(t.slideHeight / 2 - c / 2, 0)),
            (i.maxY = -i.minY),
            (i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX)),
            (i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY)),
            t.$imageWrapEl.transition(h).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)"));
        }
      },
      onTransitionEnd: function () {
        var e = this.zoom,
          t = e.gesture;
        t.$slideEl &&
          this.previousIndex !== this.activeIndex &&
          (t.$imageEl.transform("translate3d(0,0,0) scale(1)"),
          t.$imageWrapEl.transform("translate3d(0,0,0)"),
          (t.$slideEl = void 0),
          (t.$imageEl = void 0),
          (t.$imageWrapEl = void 0),
          (e.scale = 1),
          (e.currentScale = 1));
      },
      toggle: function (e) {
        var t = this.zoom;
        t.scale && 1 !== t.scale ? t.out() : t.in(e);
      },
      in: function (e) {
        var t,
          i,
          a,
          r,
          n,
          o,
          l,
          d,
          h,
          p,
          c,
          u,
          v,
          f,
          m,
          g,
          b = this.zoom,
          w = this.params.zoom,
          y = b.gesture,
          x = b.image;
        (y.$slideEl ||
          ((y.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex)),
          (y.$imageEl = y.$slideEl.find("img, svg, canvas")),
          (y.$imageWrapEl = y.$imageEl.parent("." + w.containerClass))),
        y.$imageEl && 0 !== y.$imageEl.length) &&
          (y.$slideEl.addClass("" + w.zoomedSlideClass),
          void 0 === x.touchesStart.x && e
            ? ((t = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX),
              (i = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((t = x.touchesStart.x), (i = x.touchesStart.y)),
          (b.scale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
          (b.currentScale = y.$imageWrapEl.attr("data-swiper-zoom") || w.maxRatio),
          e
            ? ((m = y.$slideEl[0].offsetWidth),
              (g = y.$slideEl[0].offsetHeight),
              (a = y.$slideEl.offset().left + m / 2 - t),
              (r = y.$slideEl.offset().top + g / 2 - i),
              (l = y.$imageEl[0].offsetWidth),
              (d = y.$imageEl[0].offsetHeight),
              (h = l * b.scale),
              (p = d * b.scale),
              (v = -(c = Math.min(m / 2 - h / 2, 0))),
              (f = -(u = Math.min(g / 2 - p / 2, 0))),
              (n = a * b.scale),
              (o = r * b.scale),
              n < c && (n = c),
              n > v && (n = v),
              o < u && (o = u),
              o > f && (o = f))
            : ((n = 0), (o = 0)),
          y.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + o + "px,0)"),
          y.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + b.scale + ")"));
      },
      out: function () {
        var e = this.zoom,
          t = this.params.zoom,
          i = e.gesture;
        (i.$slideEl ||
          ((i.$slideEl = this.clickedSlide ? s(this.clickedSlide) : this.slides.eq(this.activeIndex)),
          (i.$imageEl = i.$slideEl.find("img, svg, canvas")),
          (i.$imageWrapEl = i.$imageEl.parent("." + t.containerClass))),
          i.$imageEl &&
            0 !== i.$imageEl.length &&
            ((e.scale = 1),
            (e.currentScale = 1),
            i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"),
            i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"),
            i.$slideEl.removeClass("" + t.zoomedSlideClass),
            (i.$slideEl = void 0)));
      },
      enable: function () {
        var e = this.zoom;
        if (!e.enabled) {
          e.enabled = !0;
          var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
            passive: !0,
            capture: !1,
          };
          (h.gestures
            ? (this.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, t),
              this.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, t),
              this.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, t))
            : "touchstart" === this.touchEvents.start &&
              (this.$wrapperEl.on(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t),
              this.$wrapperEl.on(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t),
              this.$wrapperEl.on(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)),
            this.$wrapperEl.on(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove));
        }
      },
      disable: function () {
        var e = this.zoom;
        if (e.enabled) {
          this.zoom.enabled = !1;
          var t = !("touchstart" !== this.touchEvents.start || !h.passiveListener || !this.params.passiveListeners) && {
            passive: !0,
            capture: !1,
          };
          (h.gestures
            ? (this.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, t),
              this.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, t),
              this.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, t))
            : "touchstart" === this.touchEvents.start &&
              (this.$wrapperEl.off(this.touchEvents.start, ".swiper-slide", e.onGestureStart, t),
              this.$wrapperEl.off(this.touchEvents.move, ".swiper-slide", e.onGestureChange, t),
              this.$wrapperEl.off(this.touchEvents.end, ".swiper-slide", e.onGestureEnd, t)),
            this.$wrapperEl.off(this.touchEvents.move, "." + this.params.zoom.containerClass, e.onTouchMove));
        }
      },
    },
    U = {
      loadInSlide: function (e, t) {
        void 0 === t && (t = !0);
        var i = this,
          a = i.params.lazy;
        if (void 0 !== e && 0 !== i.slides.length) {
          var r =
              i.virtual && i.params.virtual.enabled
                ? i.$wrapperEl.children("." + i.params.slideClass + '[data-swiper-slide-index="' + e + '"]')
                : i.slides.eq(e),
            n = r.find("." + a.elementClass + ":not(." + a.loadedClass + "):not(." + a.loadingClass + ")");
          (!r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || (n = n.add(r[0])),
            0 !== n.length &&
              n.each(function (e, n) {
                var o = s(n);
                o.addClass(a.loadingClass);
                var l = o.attr("data-background"),
                  d = o.attr("data-src"),
                  h = o.attr("data-srcset"),
                  p = o.attr("data-sizes");
                (i.loadImage(o[0], d || l, h, p, !1, function () {
                  if (void 0 !== i && null !== i && i && (!i || i.params) && !i.destroyed) {
                    if (
                      (l
                        ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background"))
                        : (h && (o.attr("srcset", h), o.removeAttr("data-srcset")),
                          p && (o.attr("sizes", p), o.removeAttr("data-sizes")),
                          d && (o.attr("src", d), o.removeAttr("data-src"))),
                      o.addClass(a.loadedClass).removeClass(a.loadingClass),
                      r.find("." + a.preloaderClass).remove(),
                      i.params.loop && t)
                    ) {
                      var e = r.attr("data-swiper-slide-index");
                      if (r.hasClass(i.params.slideDuplicateClass)) {
                        var s = i.$wrapperEl.children(
                          '[data-swiper-slide-index="' + e + '"]:not(.' + i.params.slideDuplicateClass + ")",
                        );
                        i.lazy.loadInSlide(s.index(), !1);
                      } else {
                        var n = i.$wrapperEl.children(
                          "." + i.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]',
                        );
                        i.lazy.loadInSlide(n.index(), !1);
                      }
                    }
                    i.emit("lazyImageReady", r[0], o[0]);
                  }
                }),
                  i.emit("lazyImageLoad", r[0], o[0]));
              }));
        }
      },
      load: function () {
        var e = this,
          t = e.$wrapperEl,
          i = e.params,
          a = e.slides,
          r = e.activeIndex,
          n = e.virtual && i.virtual.enabled,
          o = i.lazy,
          l = i.slidesPerView;
        function d(e) {
          if (n) {
            if (t.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0;
          } else if (a[e]) return !0;
          return !1;
        }
        function h(e) {
          return n ? s(e).attr("data-swiper-slide-index") : s(e).index();
        }
        if (
          ("auto" === l && (l = 0),
          e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0),
          e.params.watchSlidesVisibility)
        )
          t.children("." + i.slideVisibleClass).each(function (t, i) {
            var a = n ? s(i).attr("data-swiper-slide-index") : s(i).index();
            e.lazy.loadInSlide(a);
          });
        else if (l > 1) for (var p = r; p < r + l; p += 1) d(p) && e.lazy.loadInSlide(p);
        else e.lazy.loadInSlide(r);
        if (o.loadPrevNext)
          if (l > 1 || (o.loadPrevNextAmount && o.loadPrevNextAmount > 1)) {
            for (
              var c = o.loadPrevNextAmount,
                u = l,
                v = Math.min(r + u + Math.max(c, u), a.length),
                f = Math.max(r - Math.max(u, c), 0),
                m = r + l;
              m < v;
              m += 1
            )
              d(m) && e.lazy.loadInSlide(m);
            for (var g = f; g < r; g += 1) d(g) && e.lazy.loadInSlide(g);
          } else {
            var b = t.children("." + i.slideNextClass);
            b.length > 0 && e.lazy.loadInSlide(h(b));
            var w = t.children("." + i.slidePrevClass);
            w.length > 0 && e.lazy.loadInSlide(h(w));
          }
      },
    },
    _ = {
      LinearSpline: function (e, t) {
        var i,
          s,
          a,
          r,
          n,
          o = function (e, t) {
            for (s = -1, i = e.length; i - s > 1; ) e[(a = (i + s) >> 1)] <= t ? (s = a) : (i = a);
            return i;
          };
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((n = o(this.x, e)),
                (r = n - 1),
                ((e - this.x[r]) * (this.y[n] - this.y[r])) / (this.x[n] - this.x[r]) + this.y[r])
              : 0;
          }),
          this
        );
      },
      getInterpolateFunction: function (e) {
        this.controller.spline ||
          (this.controller.spline = this.params.loop
            ? new _.LinearSpline(this.slidesGrid, e.slidesGrid)
            : new _.LinearSpline(this.snapGrid, e.snapGrid));
      },
      setTranslate: function (e, t) {
        var i,
          s,
          a = this,
          r = a.controller.control;
        function n(e) {
          var t = e.rtl && "horizontal" === e.params.direction ? -a.translate : a.translate;
          ("slide" === a.params.controller.by &&
            (a.controller.getInterpolateFunction(e), (s = -a.controller.spline.interpolate(-t))),
            (s && "container" !== a.params.controller.by) ||
              ((i = (e.maxTranslate() - e.minTranslate()) / (a.maxTranslate() - a.minTranslate())),
              (s = (t - a.minTranslate()) * i + e.minTranslate())),
            a.params.controller.inverse && (s = e.maxTranslate() - s),
            e.updateProgress(s),
            e.setTranslate(s, a),
            e.updateActiveIndex(),
            e.updateSlidesClasses());
        }
        if (Array.isArray(r)) for (var o = 0; o < r.length; o += 1) r[o] !== t && r[o] instanceof I && n(r[o]);
        else r instanceof I && t !== r && n(r);
      },
      setTransition: function (e, t) {
        var i,
          s = this,
          a = s.controller.control;
        function r(t) {
          (t.setTransition(e, s),
            0 !== e &&
              (t.transitionStart(),
              t.$wrapperEl.transitionEnd(function () {
                a && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
              })));
        }
        if (Array.isArray(a)) for (i = 0; i < a.length; i += 1) a[i] !== t && a[i] instanceof I && r(a[i]);
        else a instanceof I && t !== a && r(a);
      },
    },
    Z = {
      makeElFocusable: function (e) {
        return (e.attr("tabIndex", "0"), e);
      },
      addElRole: function (e, t) {
        return (e.attr("role", t), e);
      },
      addElLabel: function (e, t) {
        return (e.attr("aria-label", t), e);
      },
      disableEl: function (e) {
        return (e.attr("aria-disabled", !0), e);
      },
      enableEl: function (e) {
        return (e.attr("aria-disabled", !1), e);
      },
      onEnterKey: function (e) {
        var t = this.params.a11y;
        if (13 === e.keyCode) {
          var i = s(e.target);
          (this.navigation &&
            this.navigation.$nextEl &&
            i.is(this.navigation.$nextEl) &&
            ((this.isEnd && !this.params.loop) || this.slideNext(),
            this.isEnd ? this.a11y.notify(t.lastSlideMessage) : this.a11y.notify(t.nextSlideMessage)),
            this.navigation &&
              this.navigation.$prevEl &&
              i.is(this.navigation.$prevEl) &&
              ((this.isBeginning && !this.params.loop) || this.slidePrev(),
              this.isBeginning ? this.a11y.notify(t.firstSlideMessage) : this.a11y.notify(t.prevSlideMessage)),
            this.pagination && i.is("." + this.params.pagination.bulletClass) && i[0].click());
        }
      },
      notify: function (e) {
        var t = this.a11y.liveRegion;
        0 !== t.length && (t.html(""), t.html(e));
      },
      updateNavigation: function () {
        if (!this.params.loop) {
          var e = this.navigation,
            t = e.$nextEl,
            i = e.$prevEl;
          (i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)),
            t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t)));
        }
      },
      updatePagination: function () {
        var e = this,
          t = e.params.a11y;
        e.pagination &&
          e.params.pagination.clickable &&
          e.pagination.bullets &&
          e.pagination.bullets.length &&
          e.pagination.bullets.each(function (i, a) {
            var r = s(a);
            (e.a11y.makeElFocusable(r),
              e.a11y.addElRole(r, "button"),
              e.a11y.addElLabel(r, t.paginationBulletMessage.replace(/{{index}}/, r.index() + 1)));
          });
      },
      init: function () {
        this.$el.append(this.a11y.liveRegion);
        var e,
          t,
          i = this.params.a11y;
        (this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
          this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
          e &&
            (this.a11y.makeElFocusable(e),
            this.a11y.addElRole(e, "button"),
            this.a11y.addElLabel(e, i.nextSlideMessage),
            e.on("keydown", this.a11y.onEnterKey)),
          t &&
            (this.a11y.makeElFocusable(t),
            this.a11y.addElRole(t, "button"),
            this.a11y.addElLabel(t, i.prevSlideMessage),
            t.on("keydown", this.a11y.onEnterKey)),
          this.pagination &&
            this.params.pagination.clickable &&
            this.pagination.bullets &&
            this.pagination.bullets.length &&
            this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey));
      },
      destroy: function () {
        var e, t;
        (this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(),
          this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl),
          this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl),
          e && e.off("keydown", this.a11y.onEnterKey),
          t && t.off("keydown", this.a11y.onEnterKey),
          this.pagination &&
            this.params.pagination.clickable &&
            this.pagination.bullets &&
            this.pagination.bullets.length &&
            this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey));
      },
    },
    Q = {
      init: function () {
        if (this.params.history) {
          if (!t.history || !t.history.pushState)
            return ((this.params.history.enabled = !1), void (this.params.hashNavigation.enabled = !0));
          var e = this.history;
          ((e.initialized = !0),
            (e.paths = Q.getPathValues()),
            (e.paths.key || e.paths.value) &&
              (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit),
              this.params.history.replaceState || t.addEventListener("popstate", this.history.setHistoryPopState)));
        }
      },
      destroy: function () {
        this.params.history.replaceState || t.removeEventListener("popstate", this.history.setHistoryPopState);
      },
      setHistoryPopState: function () {
        ((this.history.paths = Q.getPathValues()),
          this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1));
      },
      getPathValues: function () {
        var e = t.location.pathname
            .slice(1)
            .split("/")
            .filter(function (e) {
              return "" !== e;
            }),
          i = e.length;
        return { key: e[i - 2], value: e[i - 1] };
      },
      setHistory: function (e, i) {
        if (this.history.initialized && this.params.history.enabled) {
          var s = this.slides.eq(i),
            a = Q.slugify(s.attr("data-history"));
          t.location.pathname.includes(e) || (a = e + "/" + a);
          var r = t.history.state;
          (r && r.value === a) ||
            (this.params.history.replaceState
              ? t.history.replaceState({ value: a }, null, a)
              : t.history.pushState({ value: a }, null, a));
        }
      },
      slugify: function (e) {
        return e
          .toString()
          .toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--+/g, "-")
          .replace(/^-+/, "")
          .replace(/-+$/, "");
      },
      scrollToSlide: function (e, t, i) {
        if (t)
          for (var s = 0, a = this.slides.length; s < a; s += 1) {
            var r = this.slides.eq(s);
            if (Q.slugify(r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
              var n = r.index();
              this.slideTo(n, e, i);
            }
          }
        else this.slideTo(0, e, i);
      },
    },
    J = {
      onHashCange: function () {
        var t = e.location.hash.replace("#", "");
        t !== this.slides.eq(this.activeIndex).attr("data-hash") &&
          this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + t + '"]').index());
      },
      setHash: function () {
        if (this.hashNavigation.initialized && this.params.hashNavigation.enabled)
          if (this.params.hashNavigation.replaceState && t.history && t.history.replaceState)
            t.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "");
          else {
            var i = this.slides.eq(this.activeIndex),
              s = i.attr("data-hash") || i.attr("data-history");
            e.location.hash = s || "";
          }
      },
      init: function () {
        if (!(!this.params.hashNavigation.enabled || (this.params.history && this.params.history.enabled))) {
          this.hashNavigation.initialized = !0;
          var i = e.location.hash.replace("#", "");
          if (i)
            for (var a = 0, r = this.slides.length; a < r; a += 1) {
              var n = this.slides.eq(a);
              if (
                (n.attr("data-hash") || n.attr("data-history")) === i &&
                !n.hasClass(this.params.slideDuplicateClass)
              ) {
                var o = n.index();
                this.slideTo(o, 0, this.params.runCallbacksOnInit, !0);
              }
            }
          this.params.hashNavigation.watchState && s(t).on("hashchange", this.hashNavigation.onHashCange);
        }
      },
      destroy: function () {
        this.params.hashNavigation.watchState && s(t).off("hashchange", this.hashNavigation.onHashCange);
      },
    },
    ee = {
      run: function () {
        var e = this,
          t = e.slides.eq(e.activeIndex),
          i = e.params.autoplay.delay;
        (t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
          (e.autoplay.timeout = d.nextTick(function () {
            e.params.autoplay.reverseDirection
              ? e.params.loop
                ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
                : e.isBeginning
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay"))
                  : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay"))
              : e.params.loop
                ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                : e.isEnd
                  ? e.params.autoplay.stopOnLastSlide
                    ? e.autoplay.stop()
                    : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay"))
                  : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
          }, i)));
      },
      start: function () {
        return (
          void 0 === this.autoplay.timeout &&
          !this.autoplay.running &&
          ((this.autoplay.running = !0), this.emit("autoplayStart"), this.autoplay.run(), !0)
        );
      },
      stop: function () {
        return (
          !!this.autoplay.running &&
          void 0 !== this.autoplay.timeout &&
          (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), (this.autoplay.timeout = void 0)),
          (this.autoplay.running = !1),
          this.emit("autoplayStop"),
          !0)
        );
      },
      pause: function (e) {
        var t = this;
        t.autoplay.running &&
          (t.autoplay.paused ||
            (t.autoplay.timeout && clearTimeout(t.autoplay.timeout),
            (t.autoplay.paused = !0),
            0 !== e && t.params.autoplay.waitForTransition
              ? t.$wrapperEl.transitionEnd(function () {
                  t &&
                    !t.destroyed &&
                    ((t.autoplay.paused = !1), t.autoplay.running ? t.autoplay.run() : t.autoplay.stop());
                })
              : ((t.autoplay.paused = !1), t.autoplay.run())));
      },
    },
    te = {
      setTranslate: function () {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          var i = this.slides.eq(t),
            s = -i[0].swiperSlideOffset;
          this.params.virtualTranslate || (s -= this.translate);
          var a = 0;
          this.isHorizontal() || ((a = s), (s = 0));
          var r = this.params.fadeEffect.crossFade
            ? Math.max(1 - Math.abs(i[0].progress), 0)
            : 1 + Math.min(Math.max(i[0].progress, -1), 0);
          i.css({ opacity: r }).transform("translate3d(" + s + "px, " + a + "px, 0px)");
        }
      },
      setTransition: function (e) {
        var t = this,
          i = t.slides,
          s = t.$wrapperEl;
        if ((i.transition(e), t.params.virtualTranslate && 0 !== e)) {
          var a = !1;
          i.transitionEnd(function () {
            if (!a && t && !t.destroyed) {
              ((a = !0), (t.animating = !1));
              for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) s.trigger(e[i]);
            }
          });
        }
      },
    },
    ie = {
      setTranslate: function () {
        var e,
          t = this.$el,
          i = this.$wrapperEl,
          a = this.slides,
          r = this.width,
          n = this.height,
          o = this.rtl,
          l = this.size,
          d = this.params.cubeEffect,
          h = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled,
          c = 0;
        d.shadow &&
          (h
            ? (0 === (e = i.find(".swiper-cube-shadow")).length &&
                ((e = s('<div class="swiper-cube-shadow"></div>')), i.append(e)),
              e.css({ height: r + "px" }))
            : 0 === (e = t.find(".swiper-cube-shadow")).length &&
              ((e = s('<div class="swiper-cube-shadow"></div>')), t.append(e)));
        for (var u = 0; u < a.length; u += 1) {
          var v = a.eq(u),
            f = u;
          p && (f = parseInt(v.attr("data-swiper-slide-index"), 10));
          var m = 90 * f,
            g = Math.floor(m / 360);
          o && ((m = -m), (g = Math.floor(-m / 360)));
          var b = Math.max(Math.min(v[0].progress, 1), -1),
            w = 0,
            y = 0,
            x = 0;
          (f % 4 == 0
            ? ((w = 4 * -g * l), (x = 0))
            : (f - 1) % 4 == 0
              ? ((w = 0), (x = 4 * -g * l))
              : (f - 2) % 4 == 0
                ? ((w = l + 4 * g * l), (x = l))
                : (f - 3) % 4 == 0 && ((w = -l), (x = 3 * l + 4 * l * g)),
            o && (w = -w),
            h || ((y = w), (w = 0)));
          var E =
            "rotateX(" +
            (h ? 0 : -m) +
            "deg) rotateY(" +
            (h ? m : 0) +
            "deg) translate3d(" +
            w +
            "px, " +
            y +
            "px, " +
            x +
            "px)";
          if (
            (b <= 1 && b > -1 && ((c = 90 * f + 90 * b), o && (c = 90 * -f - 90 * b)), v.transform(E), d.slideShadows)
          ) {
            var T = h ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"),
              S = h ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom");
            (0 === T.length &&
              ((T = s('<div class="swiper-slide-shadow-' + (h ? "left" : "top") + '"></div>')), v.append(T)),
              0 === S.length &&
                ((S = s('<div class="swiper-slide-shadow-' + (h ? "right" : "bottom") + '"></div>')), v.append(S)),
              T.length && (T[0].style.opacity = Math.max(-b, 0)),
              S.length && (S[0].style.opacity = Math.max(b, 0)));
          }
        }
        if (
          (i.css({
            "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
            "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
            "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
            "transform-origin": "50% 50% -" + l / 2 + "px",
          }),
          d.shadow)
        )
          if (h)
            e.transform(
              "translate3d(0px, " +
                (r / 2 + d.shadowOffset) +
                "px, " +
                -r / 2 +
                "px) rotateX(90deg) rotateZ(0deg) scale(" +
                d.shadowScale +
                ")",
            );
          else {
            var C = Math.abs(c) - 90 * Math.floor(Math.abs(c) / 90),
              M = 1.5 - (Math.sin((2 * C * Math.PI) / 360) / 2 + Math.cos((2 * C * Math.PI) / 360) / 2),
              z = d.shadowScale,
              k = d.shadowScale / M,
              $ = d.shadowOffset;
            e.transform(
              "scale3d(" +
                z +
                ", 1, " +
                k +
                ") translate3d(0px, " +
                (n / 2 + $) +
                "px, " +
                -n / 2 / k +
                "px) rotateX(-90deg)",
            );
          }
        var L = P.isSafari || P.isUiWebView ? -l / 2 : 0;
        i.transform(
          "translate3d(0px,0," +
            L +
            "px) rotateX(" +
            (this.isHorizontal() ? 0 : c) +
            "deg) rotateY(" +
            (this.isHorizontal() ? -c : 0) +
            "deg)",
        );
      },
      setTransition: function (e) {
        var t = this.$el;
        (this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
          )
          .transition(e),
          this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e));
      },
    },
    se = {
      setTranslate: function () {
        for (var e = this.slides, t = 0; t < e.length; t += 1) {
          var i = e.eq(t),
            a = i[0].progress;
          this.params.flipEffect.limitRotation && (a = Math.max(Math.min(i[0].progress, 1), -1));
          var r = -180 * a,
            n = 0,
            o = -i[0].swiperSlideOffset,
            l = 0;
          if (
            (this.isHorizontal() ? this.rtl && (r = -r) : ((l = o), (o = 0), (n = -r), (r = 0)),
            (i[0].style.zIndex = -Math.abs(Math.round(a)) + e.length),
            this.params.flipEffect.slideShadows)
          ) {
            var d = this.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
              h = this.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
            (0 === d.length &&
              ((d = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>')),
              i.append(d)),
              0 === h.length &&
                ((h = s('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>')),
                i.append(h)),
              d.length && (d[0].style.opacity = Math.max(-a, 0)),
              h.length && (h[0].style.opacity = Math.max(a, 0)));
          }
          i.transform("translate3d(" + o + "px, " + l + "px, 0px) rotateX(" + n + "deg) rotateY(" + r + "deg)");
        }
      },
      setTransition: function (e) {
        var t = this,
          i = t.slides,
          s = t.activeIndex,
          a = t.$wrapperEl;
        if (
          (i
            .transition(e)
            .find(
              ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
            )
            .transition(e),
          t.params.virtualTranslate && 0 !== e)
        ) {
          var r = !1;
          i.eq(s).transitionEnd(function () {
            if (!r && t && !t.destroyed) {
              ((r = !0), (t.animating = !1));
              for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) a.trigger(e[i]);
            }
          });
        }
      },
    },
    ae = {
      setTranslate: function () {
        for (
          var e = this.width,
            t = this.height,
            i = this.slides,
            a = this.$wrapperEl,
            r = this.slidesSizesGrid,
            n = this.params.coverflowEffect,
            o = this.isHorizontal(),
            l = this.translate,
            d = o ? e / 2 - l : t / 2 - l,
            p = o ? n.rotate : -n.rotate,
            c = n.depth,
            u = 0,
            v = i.length;
          u < v;
          u += 1
        ) {
          var f = i.eq(u),
            m = r[u],
            g = ((d - f[0].swiperSlideOffset - m / 2) / m) * n.modifier,
            b = o ? p * g : 0,
            w = o ? 0 : p * g,
            y = -c * Math.abs(g),
            x = o ? 0 : n.stretch * g,
            E = o ? n.stretch * g : 0;
          (Math.abs(E) < 0.001 && (E = 0),
            Math.abs(x) < 0.001 && (x = 0),
            Math.abs(y) < 0.001 && (y = 0),
            Math.abs(b) < 0.001 && (b = 0),
            Math.abs(w) < 0.001 && (w = 0));
          var T = "translate3d(" + E + "px," + x + "px," + y + "px)  rotateX(" + w + "deg) rotateY(" + b + "deg)";
          if ((f.transform(T), (f[0].style.zIndex = 1 - Math.abs(Math.round(g))), n.slideShadows)) {
            var S = o ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
              C = o ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
            (0 === S.length &&
              ((S = s('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>')), f.append(S)),
              0 === C.length &&
                ((C = s('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>')), f.append(C)),
              S.length && (S[0].style.opacity = g > 0 ? g : 0),
              C.length && (C[0].style.opacity = -g > 0 ? -g : 0));
          }
        }
        (h.pointerEvents || h.prefixedPointerEvents) && (a[0].style.perspectiveOrigin = d + "px 50%");
      },
      setTransition: function (e) {
        this.slides
          .transition(e)
          .find(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
          )
          .transition(e);
      },
    },
    re = [
      D,
      O,
      A,
      H,
      X,
      B,
      V,
      {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container",
          },
        },
        create: function () {
          d.extend(this, {
            mousewheel: {
              enabled: !1,
              enable: R.enable.bind(this),
              disable: R.disable.bind(this),
              handle: R.handle.bind(this),
              lastScrollTime: d.now(),
            },
          });
        },
        on: {
          init: function () {
            this.params.mousewheel.enabled && this.mousewheel.enable();
          },
          destroy: function () {
            this.mousewheel.enabled && this.mousewheel.disable();
          },
        },
      },
      {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
          },
        },
        create: function () {
          d.extend(this, {
            navigation: { init: F.init.bind(this), update: F.update.bind(this), destroy: F.destroy.bind(this) },
          });
        },
        on: {
          init: function () {
            (this.navigation.init(), this.navigation.update());
          },
          toEdge: function () {
            this.navigation.update();
          },
          fromEdge: function () {
            this.navigation.update();
          },
          destroy: function () {
            this.navigation.destroy();
          },
          click: function (e) {
            var t = this.navigation,
              i = t.$nextEl,
              a = t.$prevEl;
            !this.params.navigation.hideOnClick ||
              s(e.target).is(a) ||
              s(e.target).is(i) ||
              (i && i.toggleClass(this.params.navigation.hiddenClass),
              a && a.toggleClass(this.params.navigation.hiddenClass));
          },
        },
      },
      {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock",
          },
        },
        create: function () {
          d.extend(this, {
            pagination: {
              init: W.init.bind(this),
              render: W.render.bind(this),
              update: W.update.bind(this),
              destroy: W.destroy.bind(this),
              dynamicBulletIndex: 0,
            },
          });
        },
        on: {
          init: function () {
            (this.pagination.init(), this.pagination.render(), this.pagination.update());
          },
          activeIndexChange: function () {
            this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update();
          },
          snapIndexChange: function () {
            this.params.loop || this.pagination.update();
          },
          slidesLengthChange: function () {
            this.params.loop && (this.pagination.render(), this.pagination.update());
          },
          snapGridLengthChange: function () {
            this.params.loop || (this.pagination.render(), this.pagination.update());
          },
          destroy: function () {
            this.pagination.destroy();
          },
          click: function (e) {
            this.params.pagination.el &&
              this.params.pagination.hideOnClick &&
              this.pagination.$el.length > 0 &&
              !s(e.target).hasClass(this.params.pagination.bulletClass) &&
              this.pagination.$el.toggleClass(this.params.pagination.hiddenClass);
          },
        },
      },
      {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag",
          },
        },
        create: function () {
          d.extend(this, {
            scrollbar: {
              init: q.init.bind(this),
              destroy: q.destroy.bind(this),
              updateSize: q.updateSize.bind(this),
              setTranslate: q.setTranslate.bind(this),
              setTransition: q.setTransition.bind(this),
              enableDraggable: q.enableDraggable.bind(this),
              disableDraggable: q.disableDraggable.bind(this),
              setDragPosition: q.setDragPosition.bind(this),
              onDragStart: q.onDragStart.bind(this),
              onDragMove: q.onDragMove.bind(this),
              onDragEnd: q.onDragEnd.bind(this),
              isTouched: !1,
              timeout: null,
              dragTimeout: null,
            },
          });
        },
        on: {
          init: function () {
            (this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate());
          },
          update: function () {
            this.scrollbar.updateSize();
          },
          resize: function () {
            this.scrollbar.updateSize();
          },
          observerUpdate: function () {
            this.scrollbar.updateSize();
          },
          setTranslate: function () {
            this.scrollbar.setTranslate();
          },
          setTransition: function (e) {
            this.scrollbar.setTransition(e);
          },
          destroy: function () {
            this.scrollbar.destroy();
          },
        },
      },
      {
        name: "parallax",
        params: { parallax: { enabled: !1 } },
        create: function () {
          d.extend(this, {
            parallax: {
              setTransform: j.setTransform.bind(this),
              setTranslate: j.setTranslate.bind(this),
              setTransition: j.setTransition.bind(this),
            },
          });
        },
        on: {
          beforeInit: function () {
            this.params.parallax.enabled && (this.params.watchSlidesProgress = !0);
          },
          init: function () {
            this.params.parallax && this.parallax.setTranslate();
          },
          setTranslate: function () {
            this.params.parallax && this.parallax.setTranslate();
          },
          setTransition: function (e) {
            this.params.parallax && this.parallax.setTransition(e);
          },
        },
      },
      {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed",
          },
        },
        create: function () {
          var e = this,
            t = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3,
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {},
              },
              velocity: { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 },
            };
          ("onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out"
            .split(" ")
            .forEach(function (i) {
              t[i] = K[i].bind(e);
            }),
            d.extend(e, { zoom: t }));
        },
        on: {
          init: function () {
            this.params.zoom.enabled && this.zoom.enable();
          },
          destroy: function () {
            this.zoom.disable();
          },
          touchStart: function (e) {
            this.zoom.enabled && this.zoom.onTouchStart(e);
          },
          touchEnd: function (e) {
            this.zoom.enabled && this.zoom.onTouchEnd(e);
          },
          doubleTap: function (e) {
            this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e);
          },
          transitionEnd: function () {
            this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd();
          },
        },
      },
      {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader",
          },
        },
        create: function () {
          d.extend(this, {
            lazy: { initialImageLoaded: !1, load: U.load.bind(this), loadInSlide: U.loadInSlide.bind(this) },
          });
        },
        on: {
          beforeInit: function () {
            this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1);
          },
          init: function () {
            this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load();
          },
          scroll: function () {
            this.params.freeMode && !this.params.freeModeSticky && this.lazy.load();
          },
          resize: function () {
            this.params.lazy.enabled && this.lazy.load();
          },
          scrollbarDragMove: function () {
            this.params.lazy.enabled && this.lazy.load();
          },
          transitionStart: function () {
            this.params.lazy.enabled &&
              (this.params.lazy.loadOnTransitionStart ||
                (!this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded)) &&
              this.lazy.load();
          },
          transitionEnd: function () {
            this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load();
          },
        },
      },
      {
        name: "controller",
        params: { controller: { control: void 0, inverse: !1, by: "slide" } },
        create: function () {
          d.extend(this, {
            controller: {
              control: this.params.controller.control,
              getInterpolateFunction: _.getInterpolateFunction.bind(this),
              setTranslate: _.setTranslate.bind(this),
              setTransition: _.setTransition.bind(this),
            },
          });
        },
        on: {
          update: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0), delete this.controller.spline);
          },
          resize: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0), delete this.controller.spline);
          },
          observerUpdate: function () {
            this.controller.control &&
              this.controller.spline &&
              ((this.controller.spline = void 0), delete this.controller.spline);
          },
          setTranslate: function (e, t) {
            this.controller.control && this.controller.setTranslate(e, t);
          },
          setTransition: function (e, t) {
            this.controller.control && this.controller.setTransition(e, t);
          },
        },
      },
      {
        name: "a11y",
        params: {
          a11y: {
            enabled: !1,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}",
          },
        },
        create: function () {
          var e = this;
          (d.extend(e, {
            a11y: {
              liveRegion: s(
                '<span class="' +
                  e.params.a11y.notificationClass +
                  '" aria-live="assertive" aria-atomic="true"></span>',
              ),
            },
          }),
            Object.keys(Z).forEach(function (t) {
              e.a11y[t] = Z[t].bind(e);
            }));
        },
        on: {
          init: function () {
            this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
          },
          toEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          fromEdge: function () {
            this.params.a11y.enabled && this.a11y.updateNavigation();
          },
          paginationUpdate: function () {
            this.params.a11y.enabled && this.a11y.updatePagination();
          },
          destroy: function () {
            this.params.a11y.enabled && this.a11y.destroy();
          },
        },
      },
      {
        name: "history",
        params: { history: { enabled: !1, replaceState: !1, key: "slides" } },
        create: function () {
          d.extend(this, {
            history: {
              init: Q.init.bind(this),
              setHistory: Q.setHistory.bind(this),
              setHistoryPopState: Q.setHistoryPopState.bind(this),
              scrollToSlide: Q.scrollToSlide.bind(this),
              destroy: Q.destroy.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.params.history.enabled && this.history.init();
          },
          destroy: function () {
            this.params.history.enabled && this.history.destroy();
          },
          transitionEnd: function () {
            this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex);
          },
        },
      },
      {
        name: "hash-navigation",
        params: { hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } },
        create: function () {
          d.extend(this, {
            hashNavigation: {
              initialized: !1,
              init: J.init.bind(this),
              destroy: J.destroy.bind(this),
              setHash: J.setHash.bind(this),
              onHashCange: J.onHashCange.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.params.hashNavigation.enabled && this.hashNavigation.init();
          },
          destroy: function () {
            this.params.hashNavigation.enabled && this.hashNavigation.destroy();
          },
          transitionEnd: function () {
            this.hashNavigation.initialized && this.hashNavigation.setHash();
          },
        },
      },
      {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
          },
        },
        create: function () {
          d.extend(this, {
            autoplay: {
              running: !1,
              paused: !1,
              run: ee.run.bind(this),
              start: ee.start.bind(this),
              stop: ee.stop.bind(this),
              pause: ee.pause.bind(this),
            },
          });
        },
        on: {
          init: function () {
            this.params.autoplay.enabled && this.autoplay.start();
          },
          beforeTransitionStart: function (e, t) {
            this.autoplay.running &&
              (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop());
          },
          sliderFirstMove: function () {
            this.autoplay.running &&
              (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause());
          },
          destroy: function () {
            this.autoplay.running && this.autoplay.stop();
          },
        },
      },
      {
        name: "effect-fade",
        params: { fadeEffect: { crossFade: !1 } },
        create: function () {
          d.extend(this, {
            fadeEffect: { setTranslate: te.setTranslate.bind(this), setTransition: te.setTransition.bind(this) },
          });
        },
        on: {
          beforeInit: function () {
            if ("fade" === this.params.effect) {
              this.classNames.push(this.params.containerModifierClass + "fade");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              (d.extend(this.params, e), d.extend(this.originalParams, e));
            }
          },
          setTranslate: function () {
            "fade" === this.params.effect && this.fadeEffect.setTranslate();
          },
          setTransition: function (e) {
            "fade" === this.params.effect && this.fadeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-cube",
        params: { cubeEffect: { slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: 0.94 } },
        create: function () {
          d.extend(this, {
            cubeEffect: { setTranslate: ie.setTranslate.bind(this), setTransition: ie.setTransition.bind(this) },
          });
        },
        on: {
          beforeInit: function () {
            if ("cube" === this.params.effect) {
              (this.classNames.push(this.params.containerModifierClass + "cube"),
                this.classNames.push(this.params.containerModifierClass + "3d"));
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0,
              };
              (d.extend(this.params, e), d.extend(this.originalParams, e));
            }
          },
          setTranslate: function () {
            "cube" === this.params.effect && this.cubeEffect.setTranslate();
          },
          setTransition: function (e) {
            "cube" === this.params.effect && this.cubeEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-flip",
        params: { flipEffect: { slideShadows: !0, limitRotation: !0 } },
        create: function () {
          d.extend(this, {
            flipEffect: { setTranslate: se.setTranslate.bind(this), setTransition: se.setTransition.bind(this) },
          });
        },
        on: {
          beforeInit: function () {
            if ("flip" === this.params.effect) {
              (this.classNames.push(this.params.containerModifierClass + "flip"),
                this.classNames.push(this.params.containerModifierClass + "3d"));
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0,
              };
              (d.extend(this.params, e), d.extend(this.originalParams, e));
            }
          },
          setTranslate: function () {
            "flip" === this.params.effect && this.flipEffect.setTranslate();
          },
          setTransition: function (e) {
            "flip" === this.params.effect && this.flipEffect.setTransition(e);
          },
        },
      },
      {
        name: "effect-coverflow",
        params: { coverflowEffect: { rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0 } },
        create: function () {
          d.extend(this, {
            coverflowEffect: { setTranslate: ae.setTranslate.bind(this), setTransition: ae.setTransition.bind(this) },
          });
        },
        on: {
          beforeInit: function () {
            "coverflow" === this.params.effect &&
              (this.classNames.push(this.params.containerModifierClass + "coverflow"),
              this.classNames.push(this.params.containerModifierClass + "3d"),
              (this.params.watchSlidesProgress = !0),
              (this.originalParams.watchSlidesProgress = !0));
          },
          setTranslate: function () {
            "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
          },
          setTransition: function (e) {
            "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
          },
        },
      },
    ];
  return (void 0 === I.use && ((I.use = I.Class.use), (I.installModule = I.Class.installModule)), I.use(re), I);
});
//# sourceMappingURL=swiper.min.js.map

/**
 * bxSlider v4.2.12
 * Copyright 2013-2015 Steven Wanderski
 * Written while drinking Belgian ales and listening to jazz
 * Licensed under MIT (http://opensource.org/licenses/MIT)
 */
!(function (t) {
  var e = {
    mode: "horizontal",
    slideSelector: "",
    infiniteLoop: !0,
    hideControlOnEnd: !1,
    speed: 500,
    easing: null,
    slideMargin: 0,
    startSlide: 0,
    randomStart: !1,
    captions: !1,
    ticker: !1,
    tickerHover: !1,
    adaptiveHeight: !1,
    adaptiveHeightSpeed: 500,
    video: !1,
    useCSS: !0,
    preloadImages: "visible",
    responsive: !0,
    slideZIndex: 1,
    wrapperClass: "bx-wrapper",
    touchEnabled: !0,
    swipeThreshold: 50,
    oneToOneTouch: !0,
    preventDefaultSwipeX: !0,
    preventDefaultSwipeY: !1,
    ariaLive: !0,
    ariaHidden: !0,
    keyboardEnabled: !1,
    pager: !0,
    pagerType: "full",
    pagerShortSeparator: " / ",
    pagerSelector: null,
    buildPager: null,
    pagerCustom: null,
    controls: !0,
    nextText: "Next",
    prevText: "Prev",
    nextSelector: null,
    prevSelector: null,
    autoControls: !1,
    startText: "Start",
    stopText: "Stop",
    autoControlsCombine: !1,
    autoControlsSelector: null,
    auto: !1,
    pause: 4e3,
    autoStart: !0,
    autoDirection: "next",
    stopAutoOnClick: !1,
    autoHover: !1,
    autoDelay: 0,
    autoSlideForOnePage: !1,
    minSlides: 1,
    maxSlides: 1,
    moveSlides: 0,
    slideWidth: 0,
    shrinkItems: !1,
    onSliderLoad: function () {
      return !0;
    },
    onSlideBefore: function () {
      return !0;
    },
    onSlideAfter: function () {
      return !0;
    },
    onSlideNext: function () {
      return !0;
    },
    onSlidePrev: function () {
      return !0;
    },
    onSliderResize: function () {
      return !0;
    },
  };
  t.fn.bxSlider = function (n) {
    if (0 === this.length) return this;
    if (this.length > 1)
      return (
        this.each(function () {
          t(this).bxSlider(n);
        }),
        this
      );
    var s = {},
      o = this,
      r = t(window).width(),
      a = t(window).height();
    if (!t(o).data("bxSlider")) {
      var l = function () {
          t(o).data("bxSlider") ||
            ((s.settings = t.extend({}, e, n)),
            (s.settings.slideWidth = parseInt(s.settings.slideWidth)),
            (s.children = o.children(s.settings.slideSelector)),
            s.children.length < s.settings.minSlides && (s.settings.minSlides = s.children.length),
            s.children.length < s.settings.maxSlides && (s.settings.maxSlides = s.children.length),
            s.settings.randomStart && (s.settings.startSlide = Math.floor(Math.random() * s.children.length)),
            (s.active = { index: s.settings.startSlide }),
            (s.carousel = s.settings.minSlides > 1 || s.settings.maxSlides > 1),
            s.carousel && (s.settings.preloadImages = "all"),
            (s.minThreshold =
              s.settings.minSlides * s.settings.slideWidth + (s.settings.minSlides - 1) * s.settings.slideMargin),
            (s.maxThreshold =
              s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin),
            (s.working = !1),
            (s.controls = {}),
            (s.interval = null),
            (s.animProp = "vertical" === s.settings.mode ? "top" : "left"),
            (s.usingCSS =
              s.settings.useCSS &&
              "fade" !== s.settings.mode &&
              (function () {
                for (
                  var t = document.createElement("div"),
                    e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"],
                    i = 0;
                  i < e.length;
                  i++
                )
                  if (void 0 !== t.style[e[i]])
                    return (
                      (s.cssPrefix = e[i].replace("Perspective", "").toLowerCase()),
                      (s.animProp = "-" + s.cssPrefix + "-transform"),
                      !0
                    );
                return !1;
              })()),
            "vertical" === s.settings.mode && (s.settings.maxSlides = s.settings.minSlides),
            o.data("origStyle", o.attr("style")),
            o.children(s.settings.slideSelector).each(function () {
              t(this).data("origStyle", t(this).attr("style"));
            }),
            d());
        },
        d = function () {
          var e = s.children.eq(s.settings.startSlide);
          (o.wrap('<div class="' + s.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'),
            (s.viewport = o.parent()),
            s.settings.ariaLive && !s.settings.ticker && s.viewport.attr("aria-live", "polite"),
            (s.loader = t('<div class="bx-loading" />')),
            s.viewport.prepend(s.loader),
            o.css({
              width: "horizontal" === s.settings.mode ? 1e3 * s.children.length + 215 + "%" : "auto",
              position: "relative",
            }),
            s.usingCSS && s.settings.easing
              ? o.css("-" + s.cssPrefix + "-transition-timing-function", s.settings.easing)
              : s.settings.easing || (s.settings.easing = "swing"),
            s.viewport.css({ width: "100%", overflow: "hidden", position: "relative" }),
            s.viewport.parent().css({ maxWidth: u() }),
            s.children.css({
              float: "horizontal" === s.settings.mode ? "left" : "none",
              listStyle: "none",
              position: "relative",
            }),
            s.children.css("width", h()),
            "horizontal" === s.settings.mode &&
              s.settings.slideMargin > 0 &&
              s.children.css("marginRight", s.settings.slideMargin),
            "vertical" === s.settings.mode &&
              s.settings.slideMargin > 0 &&
              s.children.css("marginBottom", s.settings.slideMargin),
            "fade" === s.settings.mode &&
              (s.children.css({ position: "absolute", zIndex: 0, display: "none" }),
              s.children.eq(s.settings.startSlide).css({ zIndex: s.settings.slideZIndex, display: "block" })),
            (s.controls.el = t('<div class="bx-controls" />')),
            s.settings.captions && P(),
            (s.active.last = s.settings.startSlide === f() - 1),
            s.settings.video && o.fitVids(),
            ("all" === s.settings.preloadImages || s.settings.ticker) && (e = s.children),
            s.settings.ticker
              ? (s.settings.pager = !1)
              : (s.settings.controls && C(),
                s.settings.auto && s.settings.autoControls && T(),
                s.settings.pager && w(),
                (s.settings.controls || s.settings.autoControls || s.settings.pager) &&
                  s.viewport.after(s.controls.el)),
            c(e, g));
        },
        c = function (e, i) {
          var n = e.find('img:not([src=""]), iframe').length,
            s = 0;
          return 0 === n
            ? void i()
            : void e.find('img:not([src=""]), iframe').each(function () {
                t(this)
                  .one("load error", function () {
                    ++s === n && i();
                  })
                  .each(function () {
                    this.complete && t(this).trigger("load");
                  });
              });
        },
        g = function () {
          if (s.settings.infiniteLoop && "fade" !== s.settings.mode && !s.settings.ticker) {
            var e = "vertical" === s.settings.mode ? s.settings.minSlides : s.settings.maxSlides,
              i = s.children.slice(0, e).clone(!0).addClass("bx-clone"),
              n = s.children.slice(-e).clone(!0).addClass("bx-clone");
            (s.settings.ariaHidden && (i.attr("aria-hidden", !0), n.attr("aria-hidden", !0)), o.append(i).prepend(n));
          }
          (s.loader.remove(),
            m(),
            "vertical" === s.settings.mode && (s.settings.adaptiveHeight = !0),
            s.viewport.height(p()),
            o.redrawSlider(),
            s.settings.onSliderLoad.call(o, s.active.index),
            (s.initialized = !0),
            s.settings.responsive && t(window).bind("resize", Z),
            s.settings.auto && s.settings.autoStart && (f() > 1 || s.settings.autoSlideForOnePage) && H(),
            s.settings.ticker && W(),
            s.settings.pager && I(s.settings.startSlide),
            s.settings.controls && D(),
            s.settings.touchEnabled && !s.settings.ticker && N(),
            s.settings.keyboardEnabled && !s.settings.ticker && t(document).keydown(F));
        },
        p = function () {
          var e = 0,
            n = t();
          if ("vertical" === s.settings.mode || s.settings.adaptiveHeight)
            if (s.carousel) {
              var o = 1 === s.settings.moveSlides ? s.active.index : s.active.index * x();
              for (n = s.children.eq(o), i = 1; i <= s.settings.maxSlides - 1; i++)
                n = o + i >= s.children.length ? n.add(s.children.eq(i - 1)) : n.add(s.children.eq(o + i));
            } else n = s.children.eq(s.active.index);
          else n = s.children;
          return (
            "vertical" === s.settings.mode
              ? (n.each(function (i) {
                  e += t(this).outerHeight();
                }),
                s.settings.slideMargin > 0 && (e += s.settings.slideMargin * (s.settings.minSlides - 1)))
              : (e = Math.max.apply(
                  Math,
                  n
                    .map(function () {
                      return t(this).outerHeight(!1);
                    })
                    .get(),
                )),
            "border-box" === s.viewport.css("box-sizing")
              ? (e +=
                  parseFloat(s.viewport.css("padding-top")) +
                  parseFloat(s.viewport.css("padding-bottom")) +
                  parseFloat(s.viewport.css("border-top-width")) +
                  parseFloat(s.viewport.css("border-bottom-width")))
              : "padding-box" === s.viewport.css("box-sizing") &&
                (e += parseFloat(s.viewport.css("padding-top")) + parseFloat(s.viewport.css("padding-bottom"))),
            e
          );
        },
        u = function () {
          var t = "100%";
          return (
            s.settings.slideWidth > 0 &&
              (t =
                "horizontal" === s.settings.mode
                  ? s.settings.maxSlides * s.settings.slideWidth + (s.settings.maxSlides - 1) * s.settings.slideMargin
                  : s.settings.slideWidth),
            t
          );
        },
        h = function () {
          var t = s.settings.slideWidth,
            e = s.viewport.width();
          if (
            0 === s.settings.slideWidth ||
            (s.settings.slideWidth > e && !s.carousel) ||
            "vertical" === s.settings.mode
          )
            t = e;
          else if (s.settings.maxSlides > 1 && "horizontal" === s.settings.mode) {
            if (e > s.maxThreshold) return t;
            e < s.minThreshold
              ? (t = (e - s.settings.slideMargin * (s.settings.minSlides - 1)) / s.settings.minSlides)
              : s.settings.shrinkItems &&
                (t = Math.floor(
                  (e + s.settings.slideMargin) /
                    Math.ceil((e + s.settings.slideMargin) / (t + s.settings.slideMargin)) -
                    s.settings.slideMargin,
                ));
          }
          return t;
        },
        v = function () {
          var t = 1,
            e = null;
          return (
            "horizontal" === s.settings.mode && s.settings.slideWidth > 0
              ? s.viewport.width() < s.minThreshold
                ? (t = s.settings.minSlides)
                : s.viewport.width() > s.maxThreshold
                  ? (t = s.settings.maxSlides)
                  : ((e = s.children.first().width() + s.settings.slideMargin),
                    (t = Math.floor((s.viewport.width() + s.settings.slideMargin) / e)))
              : "vertical" === s.settings.mode && (t = s.settings.minSlides),
            t
          );
        },
        f = function () {
          var t = 0,
            e = 0,
            i = 0;
          if (s.settings.moveSlides > 0)
            if (s.settings.infiniteLoop) t = Math.ceil(s.children.length / x());
            else
              for (; e < s.children.length; )
                (++t, (e = i + v()), (i += s.settings.moveSlides <= v() ? s.settings.moveSlides : v()));
          else t = Math.ceil(s.children.length / v());
          return t;
        },
        x = function () {
          return s.settings.moveSlides > 0 && s.settings.moveSlides <= v() ? s.settings.moveSlides : v();
        },
        m = function () {
          var t, e, i;
          s.children.length > s.settings.maxSlides && s.active.last && !s.settings.infiniteLoop
            ? "horizontal" === s.settings.mode
              ? ((e = s.children.last()),
                (t = e.position()),
                S(-(t.left - (s.viewport.width() - e.outerWidth())), "reset", 0))
              : "vertical" === s.settings.mode &&
                ((i = s.children.length - s.settings.minSlides),
                (t = s.children.eq(i).position()),
                S(-t.top, "reset", 0))
            : ((t = s.children.eq(s.active.index * x()).position()),
              s.active.index === f() - 1 && (s.active.last = !0),
              void 0 !== t &&
                ("horizontal" === s.settings.mode
                  ? S(-t.left, "reset", 0)
                  : "vertical" === s.settings.mode && S(-t.top, "reset", 0)));
        },
        S = function (e, i, n, r) {
          var a, l;
          s.usingCSS
            ? ((l =
                "vertical" === s.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)"),
              o.css("-" + s.cssPrefix + "-transition-duration", n / 1e3 + "s"),
              "slide" === i
                ? (o.css(s.animProp, l),
                  0 !== n
                    ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) {
                        t(e.target).is(o) &&
                          (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), q());
                      })
                    : q())
                : "reset" === i
                  ? o.css(s.animProp, l)
                  : "ticker" === i &&
                    (o.css("-" + s.cssPrefix + "-transition-timing-function", "linear"),
                    o.css(s.animProp, l),
                    0 !== n
                      ? o.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) {
                          t(e.target).is(o) &&
                            (o.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"),
                            S(r.resetValue, "reset", 0),
                            L());
                        })
                      : (S(r.resetValue, "reset", 0), L())))
            : ((a = {}),
              (a[s.animProp] = e),
              "slide" === i
                ? o.animate(a, n, s.settings.easing, function () {
                    q();
                  })
                : "reset" === i
                  ? o.css(s.animProp, e)
                  : "ticker" === i &&
                    o.animate(a, n, "linear", function () {
                      (S(r.resetValue, "reset", 0), L());
                    }));
        },
        b = function () {
          for (var e = "", i = "", n = f(), o = 0; o < n; o++)
            ((i = ""),
              (s.settings.buildPager && t.isFunction(s.settings.buildPager)) || s.settings.pagerCustom
                ? ((i = s.settings.buildPager(o)), s.pagerEl.addClass("bx-custom-pager"))
                : ((i = o + 1), s.pagerEl.addClass("bx-default-pager")),
              (e +=
                '<div class="bx-pager-item"><a href="" data-slide-index="' +
                o +
                '" class="bx-pager-link">' +
                i +
                "</a></div>"));
          s.pagerEl.html(e);
        },
        w = function () {
          (s.settings.pagerCustom
            ? (s.pagerEl = t(s.settings.pagerCustom))
            : ((s.pagerEl = t('<div class="bx-pager" />')),
              s.settings.pagerSelector
                ? t(s.settings.pagerSelector).html(s.pagerEl)
                : s.controls.el.addClass("bx-has-pager").append(s.pagerEl),
              b()),
            s.pagerEl.on("click touchend", "a", z));
        },
        C = function () {
          ((s.controls.next = t('<a class="bx-next" href="">' + s.settings.nextText + "</a>")),
            (s.controls.prev = t('<a class="bx-prev" href="">' + s.settings.prevText + "</a>")),
            s.controls.next.bind("click touchend", E),
            s.controls.prev.bind("click touchend", k),
            s.settings.nextSelector && t(s.settings.nextSelector).append(s.controls.next),
            s.settings.prevSelector && t(s.settings.prevSelector).append(s.controls.prev),
            s.settings.nextSelector ||
              s.settings.prevSelector ||
              ((s.controls.directionEl = t('<div class="bx-controls-direction" />')),
              s.controls.directionEl.append(s.controls.prev).append(s.controls.next),
              s.controls.el.addClass("bx-has-controls-direction").append(s.controls.directionEl)));
        },
        T = function () {
          ((s.controls.start = t(
            '<div class="bx-controls-auto-item"><a class="bx-start" href="">' + s.settings.startText + "</a></div>",
          )),
            (s.controls.stop = t(
              '<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + s.settings.stopText + "</a></div>",
            )),
            (s.controls.autoEl = t('<div class="bx-controls-auto" />')),
            s.controls.autoEl.on("click", ".bx-start", M),
            s.controls.autoEl.on("click", ".bx-stop", y),
            s.settings.autoControlsCombine
              ? s.controls.autoEl.append(s.controls.start)
              : s.controls.autoEl.append(s.controls.start).append(s.controls.stop),
            s.settings.autoControlsSelector
              ? t(s.settings.autoControlsSelector).html(s.controls.autoEl)
              : s.controls.el.addClass("bx-has-controls-auto").append(s.controls.autoEl),
            A(s.settings.autoStart ? "stop" : "start"));
        },
        P = function () {
          s.children.each(function (e) {
            var i = t(this).find("img:first").attr("title");
            void 0 !== i && ("" + i).length && t(this).append('<div class="bx-caption"><span>' + i + "</span></div>");
          });
        },
        E = function (t) {
          (t.preventDefault(),
            s.controls.el.hasClass("disabled") ||
              (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), o.goToNextSlide()));
        },
        k = function (t) {
          (t.preventDefault(),
            s.controls.el.hasClass("disabled") ||
              (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(), o.goToPrevSlide()));
        },
        M = function (t) {
          (o.startAuto(), t.preventDefault());
        },
        y = function (t) {
          (o.stopAuto(), t.preventDefault());
        },
        z = function (e) {
          var i, n;
          (e.preventDefault(),
            s.controls.el.hasClass("disabled") ||
              (s.settings.auto && s.settings.stopAutoOnClick && o.stopAuto(),
              (i = t(e.currentTarget)),
              void 0 !== i.attr("data-slide-index") &&
                ((n = parseInt(i.attr("data-slide-index"))), n !== s.active.index && o.goToSlide(n))));
        },
        I = function (e) {
          var i = s.children.length;
          return "short" === s.settings.pagerType
            ? (s.settings.maxSlides > 1 && (i = Math.ceil(s.children.length / s.settings.maxSlides)),
              void s.pagerEl.html(e + 1 + s.settings.pagerShortSeparator + i))
            : (s.pagerEl.find("a").removeClass("active"),
              void s.pagerEl.each(function (i, n) {
                t(n).find("a").eq(e).addClass("active");
              }));
        },
        q = function () {
          if (s.settings.infiniteLoop) {
            var t = "";
            (0 === s.active.index
              ? (t = s.children.eq(0).position())
              : s.active.index === f() - 1 && s.carousel
                ? (t = s.children.eq((f() - 1) * x()).position())
                : s.active.index === s.children.length - 1 && (t = s.children.eq(s.children.length - 1).position()),
              t &&
                ("horizontal" === s.settings.mode
                  ? S(-t.left, "reset", 0)
                  : "vertical" === s.settings.mode && S(-t.top, "reset", 0)));
          }
          ((s.working = !1),
            s.settings.onSlideAfter.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index));
        },
        A = function (t) {
          s.settings.autoControlsCombine
            ? s.controls.autoEl.html(s.controls[t])
            : (s.controls.autoEl.find("a").removeClass("active"),
              s.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"));
        },
        D = function () {
          1 === f()
            ? (s.controls.prev.addClass("disabled"), s.controls.next.addClass("disabled"))
            : !s.settings.infiniteLoop &&
              s.settings.hideControlOnEnd &&
              (0 === s.active.index
                ? (s.controls.prev.addClass("disabled"), s.controls.next.removeClass("disabled"))
                : s.active.index === f() - 1
                  ? (s.controls.next.addClass("disabled"), s.controls.prev.removeClass("disabled"))
                  : (s.controls.prev.removeClass("disabled"), s.controls.next.removeClass("disabled")));
        },
        H = function () {
          if (s.settings.autoDelay > 0) {
            setTimeout(o.startAuto, s.settings.autoDelay);
          } else
            (o.startAuto(),
              t(window)
                .focus(function () {
                  o.startAuto();
                })
                .blur(function () {
                  o.stopAuto();
                }));
          s.settings.autoHover &&
            o.hover(
              function () {
                s.interval && (o.stopAuto(!0), (s.autoPaused = !0));
              },
              function () {
                s.autoPaused && (o.startAuto(!0), (s.autoPaused = null));
              },
            );
        },
        W = function () {
          var e,
            i,
            n,
            r,
            a,
            l,
            d,
            c,
            g = 0;
          ("next" === s.settings.autoDirection
            ? o.append(s.children.clone().addClass("bx-clone"))
            : (o.prepend(s.children.clone().addClass("bx-clone")),
              (e = s.children.first().position()),
              (g = "horizontal" === s.settings.mode ? -e.left : -e.top)),
            S(g, "reset", 0),
            (s.settings.pager = !1),
            (s.settings.controls = !1),
            (s.settings.autoControls = !1),
            s.settings.tickerHover &&
              (s.usingCSS
                ? ((r = "horizontal" === s.settings.mode ? 4 : 5),
                  s.viewport.hover(
                    function () {
                      ((i = o.css("-" + s.cssPrefix + "-transform")),
                        (n = parseFloat(i.split(",")[r])),
                        S(n, "reset", 0));
                    },
                    function () {
                      ((c = 0),
                        s.children.each(function (e) {
                          c += "horizontal" === s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0);
                        }),
                        (a = s.settings.speed / c),
                        (l = "horizontal" === s.settings.mode ? "left" : "top"),
                        (d = a * (c - Math.abs(parseInt(n)))),
                        L(d));
                    },
                  ))
                : s.viewport.hover(
                    function () {
                      o.stop();
                    },
                    function () {
                      ((c = 0),
                        s.children.each(function (e) {
                          c += "horizontal" === s.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0);
                        }),
                        (a = s.settings.speed / c),
                        (l = "horizontal" === s.settings.mode ? "left" : "top"),
                        (d = a * (c - Math.abs(parseInt(o.css(l))))),
                        L(d));
                    },
                  )),
            L());
        },
        L = function (t) {
          var e,
            i,
            n,
            r = t ? t : s.settings.speed,
            a = { left: 0, top: 0 },
            l = { left: 0, top: 0 };
          ("next" === s.settings.autoDirection
            ? (a = o.find(".bx-clone").first().position())
            : (l = s.children.first().position()),
            (e = "horizontal" === s.settings.mode ? -a.left : -a.top),
            (i = "horizontal" === s.settings.mode ? -l.left : -l.top),
            (n = { resetValue: i }),
            S(e, "ticker", r, n));
        },
        O = function (e) {
          var i = t(window),
            n = { top: i.scrollTop(), left: i.scrollLeft() },
            s = e.offset();
          return (
            (n.right = n.left + i.width()),
            (n.bottom = n.top + i.height()),
            (s.right = s.left + e.outerWidth()),
            (s.bottom = s.top + e.outerHeight()),
            !(n.right < s.left || n.left > s.right || n.bottom < s.top || n.top > s.bottom)
          );
        },
        F = function (t) {
          var e = document.activeElement.tagName.toLowerCase(),
            i = "input|textarea",
            n = new RegExp(e, ["i"]),
            s = n.exec(i);
          if (null == s && O(o)) {
            if (39 === t.keyCode) return (E(t), !1);
            if (37 === t.keyCode) return (k(t), !1);
          }
        },
        N = function () {
          ((s.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }),
            s.viewport.bind("touchstart MSPointerDown pointerdown", X),
            s.viewport.on("click", ".bxslider a", function (t) {
              s.viewport.hasClass("click-disabled") && (t.preventDefault(), s.viewport.removeClass("click-disabled"));
            }));
        },
        X = function (t) {
          if ((s.controls.el.addClass("disabled"), s.working))
            (t.preventDefault(), s.controls.el.removeClass("disabled"));
          else {
            s.touch.originalPos = o.position();
            var e = t.originalEvent,
              i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e];
            ((s.touch.start.x = i[0].pageX),
              (s.touch.start.y = i[0].pageY),
              s.viewport.get(0).setPointerCapture &&
                ((s.pointerId = e.pointerId), s.viewport.get(0).setPointerCapture(s.pointerId)),
              s.viewport.bind("touchmove MSPointerMove pointermove", V),
              s.viewport.bind("touchend MSPointerUp pointerup", R),
              s.viewport.bind("MSPointerCancel pointercancel", Y));
          }
        },
        Y = function (t) {
          (S(s.touch.originalPos.left, "reset", 0),
            s.controls.el.removeClass("disabled"),
            s.viewport.unbind("MSPointerCancel pointercancel", Y),
            s.viewport.unbind("touchmove MSPointerMove pointermove", V),
            s.viewport.unbind("touchend MSPointerUp pointerup", R),
            s.viewport.get(0).releasePointerCapture && s.viewport.get(0).releasePointerCapture(s.pointerId));
        },
        V = function (t) {
          var e = t.originalEvent,
            i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
            n = Math.abs(i[0].pageX - s.touch.start.x),
            o = Math.abs(i[0].pageY - s.touch.start.y),
            r = 0,
            a = 0;
          (3 * n > o && s.settings.preventDefaultSwipeX
            ? t.preventDefault()
            : 3 * o > n && s.settings.preventDefaultSwipeY && t.preventDefault(),
            "fade" !== s.settings.mode &&
              s.settings.oneToOneTouch &&
              ("horizontal" === s.settings.mode
                ? ((a = i[0].pageX - s.touch.start.x), (r = s.touch.originalPos.left + a))
                : ((a = i[0].pageY - s.touch.start.y), (r = s.touch.originalPos.top + a)),
              S(r, "reset", 0)));
        },
        R = function (t) {
          (s.viewport.unbind("touchmove MSPointerMove pointermove", V), s.controls.el.removeClass("disabled"));
          var e = t.originalEvent,
            i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
            n = 0,
            r = 0;
          ((s.touch.end.x = i[0].pageX),
            (s.touch.end.y = i[0].pageY),
            "fade" === s.settings.mode
              ? ((r = Math.abs(s.touch.start.x - s.touch.end.x)),
                r >= s.settings.swipeThreshold &&
                  (s.touch.start.x > s.touch.end.x ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto()))
              : ("horizontal" === s.settings.mode
                  ? ((r = s.touch.end.x - s.touch.start.x), (n = s.touch.originalPos.left))
                  : ((r = s.touch.end.y - s.touch.start.y), (n = s.touch.originalPos.top)),
                !s.settings.infiniteLoop && ((0 === s.active.index && r > 0) || (s.active.last && r < 0))
                  ? S(n, "reset", 200)
                  : Math.abs(r) >= s.settings.swipeThreshold
                    ? (r < 0 ? o.goToNextSlide() : o.goToPrevSlide(), o.stopAuto())
                    : S(n, "reset", 200)),
            s.viewport.unbind("touchend MSPointerUp pointerup", R),
            s.viewport.get(0).releasePointerCapture && s.viewport.get(0).releasePointerCapture(s.pointerId));
        },
        Z = function (e) {
          if (s.initialized)
            if (s.working) window.setTimeout(Z, 10);
            else {
              var i = t(window).width(),
                n = t(window).height();
              (r === i && a === n) ||
                ((r = i), (a = n), o.redrawSlider(), s.settings.onSliderResize.call(o, s.active.index));
            }
        },
        B = function (t) {
          var e = v();
          s.settings.ariaHidden &&
            !s.settings.ticker &&
            (s.children.attr("aria-hidden", "true"), s.children.slice(t, t + e).attr("aria-hidden", "false"));
        },
        U = function (t) {
          return t < 0
            ? s.settings.infiniteLoop
              ? f() - 1
              : s.active.index
            : t >= f()
              ? s.settings.infiniteLoop
                ? 0
                : s.active.index
              : t;
        };
      return (
        (o.goToSlide = function (e, i) {
          var n,
            r,
            a,
            l,
            d = !0,
            c = 0,
            g = { left: 0, top: 0 },
            u = null;
          if (((s.oldIndex = s.active.index), (s.active.index = U(e)), !s.working && s.active.index !== s.oldIndex)) {
            if (
              ((s.working = !0),
              (d = s.settings.onSlideBefore.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index)),
              "undefined" != typeof d && !d)
            )
              return ((s.active.index = s.oldIndex), void (s.working = !1));
            ("next" === i
              ? s.settings.onSlideNext.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) || (d = !1)
              : "prev" === i &&
                (s.settings.onSlidePrev.call(o, s.children.eq(s.active.index), s.oldIndex, s.active.index) || (d = !1)),
              (s.active.last = s.active.index >= f() - 1),
              (s.settings.pager || s.settings.pagerCustom) && I(s.active.index),
              s.settings.controls && D(),
              "fade" === s.settings.mode
                ? (s.settings.adaptiveHeight &&
                    s.viewport.height() !== p() &&
                    s.viewport.animate({ height: p() }, s.settings.adaptiveHeightSpeed),
                  s.children.filter(":visible").fadeOut(s.settings.speed).css({ zIndex: 0 }),
                  s.children
                    .eq(s.active.index)
                    .css("zIndex", s.settings.slideZIndex + 1)
                    .fadeIn(s.settings.speed, function () {
                      (t(this).css("zIndex", s.settings.slideZIndex), q());
                    }))
                : (s.settings.adaptiveHeight &&
                    s.viewport.height() !== p() &&
                    s.viewport.animate({ height: p() }, s.settings.adaptiveHeightSpeed),
                  !s.settings.infiniteLoop && s.carousel && s.active.last
                    ? "horizontal" === s.settings.mode
                      ? ((u = s.children.eq(s.children.length - 1)),
                        (g = u.position()),
                        (c = s.viewport.width() - u.outerWidth()))
                      : ((n = s.children.length - s.settings.minSlides), (g = s.children.eq(n).position()))
                    : s.carousel && s.active.last && "prev" === i
                      ? ((r =
                          1 === s.settings.moveSlides
                            ? s.settings.maxSlides - x()
                            : (f() - 1) * x() - (s.children.length - s.settings.maxSlides)),
                        (u = o.children(".bx-clone").eq(r)),
                        (g = u.position()))
                      : "next" === i && 0 === s.active.index
                        ? ((g = o.find("> .bx-clone").eq(s.settings.maxSlides).position()), (s.active.last = !1))
                        : e >= 0 && ((l = e * parseInt(x())), (g = s.children.eq(l).position())),
                  "undefined" != typeof g
                    ? ((a = "horizontal" === s.settings.mode ? -(g.left - c) : -g.top), S(a, "slide", s.settings.speed))
                    : (s.working = !1)),
              s.settings.ariaHidden && B(s.active.index * x()));
          }
        }),
        (o.goToNextSlide = function () {
          if (s.settings.infiniteLoop || !s.active.last) {
            var t = parseInt(s.active.index) + 1;
            o.goToSlide(t, "next");
          }
        }),
        (o.goToPrevSlide = function () {
          if (s.settings.infiniteLoop || 0 !== s.active.index) {
            var t = parseInt(s.active.index) - 1;
            o.goToSlide(t, "prev");
          }
        }),
        (o.startAuto = function (t) {
          s.interval ||
            ((s.interval = setInterval(function () {
              "next" === s.settings.autoDirection ? o.goToNextSlide() : o.goToPrevSlide();
            }, s.settings.pause)),
            s.settings.autoControls && t !== !0 && A("stop"));
        }),
        (o.stopAuto = function (t) {
          s.interval &&
            (clearInterval(s.interval), (s.interval = null), s.settings.autoControls && t !== !0 && A("start"));
        }),
        (o.getCurrentSlide = function () {
          return s.active.index;
        }),
        (o.getCurrentSlideElement = function () {
          return s.children.eq(s.active.index);
        }),
        (o.getSlideElement = function (t) {
          return s.children.eq(t);
        }),
        (o.getSlideCount = function () {
          return s.children.length;
        }),
        (o.isWorking = function () {
          return s.working;
        }),
        (o.redrawSlider = function () {
          (s.children.add(o.find(".bx-clone")).outerWidth(h()),
            s.viewport.css("height", p()),
            s.settings.ticker || m(),
            s.active.last && (s.active.index = f() - 1),
            s.active.index >= f() && (s.active.last = !0),
            s.settings.pager && !s.settings.pagerCustom && (b(), I(s.active.index)),
            s.settings.ariaHidden && B(s.active.index * x()));
        }),
        (o.destroySlider = function () {
          s.initialized &&
            ((s.initialized = !1),
            t(".bx-clone", this).remove(),
            s.children.each(function () {
              void 0 !== t(this).data("origStyle")
                ? t(this).attr("style", t(this).data("origStyle"))
                : t(this).removeAttr("style");
            }),
            void 0 !== t(this).data("origStyle")
              ? this.attr("style", t(this).data("origStyle"))
              : t(this).removeAttr("style"),
            t(this).unwrap().unwrap(),
            s.controls.el && s.controls.el.remove(),
            s.controls.next && s.controls.next.remove(),
            s.controls.prev && s.controls.prev.remove(),
            s.pagerEl && s.settings.controls && !s.settings.pagerCustom && s.pagerEl.remove(),
            t(".bx-caption", this).remove(),
            s.controls.autoEl && s.controls.autoEl.remove(),
            clearInterval(s.interval),
            s.settings.responsive && t(window).unbind("resize", Z),
            s.settings.keyboardEnabled && t(document).unbind("keydown", F),
            t(this).removeData("bxSlider"));
        }),
        (o.reloadSlider = function (e) {
          (void 0 !== e && (n = e), o.destroySlider(), l(), t(o).data("bxSlider", this));
        }),
        l(),
        t(o).data("bxSlider", this),
        this
      );
    }
  };
})(jQuery);

/**
 * jQuery CSS Customizable Scrollbar
 *
 * Copyright 2015, Yuriy Khabarov
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found bug, please contact me via email <13real008@gmail.com>
 *
 * Compressed by http://jscompress.com/
 *
 * @author Yuriy Khabarov aka Gromo
 * @version 0.2.10
 * @url https://github.com/gromo/jquery.scrollbar/
 *
 */
!(function (l, e) {
  "function" == typeof define && define.amd ? define(["jquery"], e) : e(l.jQuery);
})(this, function (l) {
  "use strict";
  function e(e) {
    if (t.webkit && !e) return { height: 0, width: 0 };
    if (!t.data.outer) {
      var o = {
        border: "none",
        "box-sizing": "content-box",
        height: "200px",
        margin: "0",
        padding: "0",
        width: "200px",
      };
      ((t.data.inner = l("<div>").css(l.extend({}, o))),
        (t.data.outer = l("<div>")
          .css(l.extend({ left: "-1000px", overflow: "scroll", position: "absolute", top: "-1000px" }, o))
          .append(t.data.inner)
          .appendTo("body")));
    }
    return (
      t.data.outer.scrollLeft(1e3).scrollTop(1e3),
      {
        height: Math.ceil(t.data.outer.offset().top - t.data.inner.offset().top || 0),
        width: Math.ceil(t.data.outer.offset().left - t.data.inner.offset().left || 0),
      }
    );
  }
  function o() {
    var l = e(!0);
    return !(l.height || l.width);
  }
  function s(l) {
    var e = l.originalEvent;
    return e.axis && e.axis === e.HORIZONTAL_AXIS ? !1 : e.wheelDeltaX ? !1 : !0;
  }
  var r = !1,
    t = {
      data: { index: 0, name: "scrollbar" },
      macosx: /mac/i.test(navigator.platform),
      mobile: /android|webos|iphone|ipad|ipod|blackberry/i.test(navigator.userAgent),
      overlay: null,
      scroll: null,
      scrolls: [],
      webkit: /webkit/i.test(navigator.userAgent) && !/edge\/\d+/i.test(navigator.userAgent),
    };
  ((t.scrolls.add = function (l) {
    this.remove(l).push(l);
  }),
    (t.scrolls.remove = function (e) {
      for (; l.inArray(e, this) >= 0; ) this.splice(l.inArray(e, this), 1);
      return this;
    }));
  var i = {
      autoScrollSize: !0,
      autoUpdate: !0,
      debug: !1,
      disableBodyScroll: !1,
      duration: 200,
      ignoreMobile: !1,
      ignoreOverlay: !1,
      scrollStep: 30,
      showArrows: !1,
      stepScrolling: !0,
      scrollx: null,
      scrolly: null,
      onDestroy: null,
      onInit: null,
      onScroll: null,
      onUpdate: null,
    },
    n = function (s) {
      (t.scroll ||
        ((t.overlay = o()),
        (t.scroll = e()),
        a(),
        l(window).resize(function () {
          var l = !1;
          if (t.scroll && (t.scroll.height || t.scroll.width)) {
            var o = e();
            (o.height !== t.scroll.height || o.width !== t.scroll.width) && ((t.scroll = o), (l = !0));
          }
          a(l);
        })),
        (this.container = s),
        (this.namespace = ".scrollbar_" + t.data.index++),
        (this.options = l.extend({}, i, window.jQueryScrollbarOptions || {})),
        (this.scrollTo = null),
        (this.scrollx = {}),
        (this.scrolly = {}),
        s.data(t.data.name, this),
        t.scrolls.add(this));
    };
  n.prototype = {
    destroy: function () {
      if (this.wrapper) {
        (this.container.removeData(t.data.name), t.scrolls.remove(this));
        var e = this.container.scrollLeft(),
          o = this.container.scrollTop();
        (this.container
          .insertBefore(this.wrapper)
          .css({ height: "", margin: "", "max-height": "" })
          .removeClass("scroll-content scroll-scrollx_visible scroll-scrolly_visible")
          .off(this.namespace)
          .scrollLeft(e)
          .scrollTop(o),
          this.scrollx.scroll.removeClass("scroll-scrollx_visible").find("div").andSelf().off(this.namespace),
          this.scrolly.scroll.removeClass("scroll-scrolly_visible").find("div").andSelf().off(this.namespace),
          this.wrapper.remove(),
          l(document).add("body").off(this.namespace),
          l.isFunction(this.options.onDestroy) && this.options.onDestroy.apply(this, [this.container]));
      }
    },
    init: function (e) {
      var o = this,
        r = this.container,
        i = this.containerWrapper || r,
        n = this.namespace,
        c = l.extend(this.options, e || {}),
        a = { x: this.scrollx, y: this.scrolly },
        d = this.wrapper,
        h = { scrollLeft: r.scrollLeft(), scrollTop: r.scrollTop() };
      if ((t.mobile && c.ignoreMobile) || (t.overlay && c.ignoreOverlay) || (t.macosx && !t.webkit)) return !1;
      if (d)
        i.css({
          height: "auto",
          "margin-bottom": -1 * t.scroll.height + "px",
          "margin-right": -1 * t.scroll.width + "px",
          "max-height": "",
        });
      else {
        if (
          ((this.wrapper = d =
            l("<div>")
              .addClass("scroll-wrapper")
              .addClass(r.attr("class"))
              .css("position", "absolute" == r.css("position") ? "absolute" : "relative")
              .insertBefore(r)
              .append(r)),
          r.is("textarea") &&
            ((this.containerWrapper = i = l("<div>").insertBefore(r).append(r)), d.addClass("scroll-textarea")),
          i
            .addClass("scroll-content")
            .css({
              height: "auto",
              "margin-bottom": -1 * t.scroll.height + "px",
              "margin-right": -1 * t.scroll.width + "px",
              "max-height": "",
            }),
          r.on("scroll" + n, function (e) {
            (l.isFunction(c.onScroll) &&
              c.onScroll.call(
                o,
                { maxScroll: a.y.maxScrollOffset, scroll: r.scrollTop(), size: a.y.size, visible: a.y.visible },
                { maxScroll: a.x.maxScrollOffset, scroll: r.scrollLeft(), size: a.x.size, visible: a.x.visible },
              ),
              a.x.isVisible && a.x.scroll.bar.css("left", r.scrollLeft() * a.x.kx + "px"),
              a.y.isVisible && a.y.scroll.bar.css("top", r.scrollTop() * a.y.kx + "px"));
          }),
          d.on("scroll" + n, function () {
            d.scrollTop(0).scrollLeft(0);
          }),
          c.disableBodyScroll)
        ) {
          var p = function (l) {
            s(l) ? a.y.isVisible && a.y.mousewheel(l) : a.x.isVisible && a.x.mousewheel(l);
          };
          (d.on("MozMousePixelScroll" + n, p),
            d.on("mousewheel" + n, p),
            t.mobile &&
              d.on("touchstart" + n, function (e) {
                var o = (e.originalEvent.touches && e.originalEvent.touches[0]) || e,
                  s = { pageX: o.pageX, pageY: o.pageY },
                  t = { left: r.scrollLeft(), top: r.scrollTop() };
                (l(document).on("touchmove" + n, function (l) {
                  var e = (l.originalEvent.targetTouches && l.originalEvent.targetTouches[0]) || l;
                  (r.scrollLeft(t.left + s.pageX - e.pageX),
                    r.scrollTop(t.top + s.pageY - e.pageY),
                    l.preventDefault());
                }),
                  l(document).on("touchend" + n, function () {
                    l(document).off(n);
                  }));
              }));
        }
        l.isFunction(c.onInit) && c.onInit.apply(this, [r]);
      }
      (l.each(a, function (e, t) {
        var i = null,
          d = 1,
          h = "x" === e ? "scrollLeft" : "scrollTop",
          p = c.scrollStep,
          u = function () {
            var l = r[h]();
            (r[h](l + p),
              1 == d && l + p >= f && (l = r[h]()),
              -1 == d && f >= l + p && (l = r[h]()),
              r[h]() == l && i && i());
          },
          f = 0;
        t.scroll ||
          ((t.scroll = o._getScroll(c["scroll" + e]).addClass("scroll-" + e)),
          c.showArrows && t.scroll.addClass("scroll-element_arrows_visible"),
          (t.mousewheel = function (l) {
            if (!t.isVisible || ("x" === e && s(l))) return !0;
            if ("y" === e && !s(l)) return (a.x.mousewheel(l), !0);
            var i = -1 * l.originalEvent.wheelDelta || l.originalEvent.detail,
              n = t.size - t.visible - t.offset;
            return (
              ((i > 0 && n > f) || (0 > i && f > 0)) &&
                ((f += i),
                0 > f && (f = 0),
                f > n && (f = n),
                (o.scrollTo = o.scrollTo || {}),
                (o.scrollTo[h] = f),
                setTimeout(function () {
                  o.scrollTo &&
                    (r.stop().animate(o.scrollTo, 240, "linear", function () {
                      f = r[h]();
                    }),
                    (o.scrollTo = null));
                }, 1)),
              l.preventDefault(),
              !1
            );
          }),
          t.scroll
            .on("MozMousePixelScroll" + n, t.mousewheel)
            .on("mousewheel" + n, t.mousewheel)
            .on("mouseenter" + n, function () {
              f = r[h]();
            }),
          t.scroll.find(".scroll-arrow, .scroll-element_track").on("mousedown" + n, function (s) {
            if (1 != s.which) return !0;
            d = 1;
            var n = {
                eventOffset: s["x" === e ? "pageX" : "pageY"],
                maxScrollValue: t.size - t.visible - t.offset,
                scrollbarOffset: t.scroll.bar.offset()["x" === e ? "left" : "top"],
                scrollbarSize: t.scroll.bar["x" === e ? "outerWidth" : "outerHeight"](),
              },
              a = 0,
              v = 0;
            return (
              l(this).hasClass("scroll-arrow")
                ? ((d = l(this).hasClass("scroll-arrow_more") ? 1 : -1),
                  (p = c.scrollStep * d),
                  (f = d > 0 ? n.maxScrollValue : 0))
                : ((d =
                    n.eventOffset > n.scrollbarOffset + n.scrollbarSize
                      ? 1
                      : n.eventOffset < n.scrollbarOffset
                        ? -1
                        : 0),
                  (p = Math.round(0.75 * t.visible) * d),
                  (f =
                    n.eventOffset -
                    n.scrollbarOffset -
                    (c.stepScrolling ? (1 == d ? n.scrollbarSize : 0) : Math.round(n.scrollbarSize / 2))),
                  (f = r[h]() + f / t.kx)),
              (o.scrollTo = o.scrollTo || {}),
              (o.scrollTo[h] = c.stepScrolling ? r[h]() + p : f),
              c.stepScrolling &&
                ((i = function () {
                  ((f = r[h]()), clearInterval(v), clearTimeout(a), (a = 0), (v = 0));
                }),
                (a = setTimeout(function () {
                  v = setInterval(u, 40);
                }, c.duration + 100))),
              setTimeout(function () {
                o.scrollTo && (r.animate(o.scrollTo, c.duration), (o.scrollTo = null));
              }, 1),
              o._handleMouseDown(i, s)
            );
          }),
          t.scroll.bar.on("mousedown" + n, function (s) {
            if (1 != s.which) return !0;
            var i = s["x" === e ? "pageX" : "pageY"],
              c = r[h]();
            return (
              t.scroll.addClass("scroll-draggable"),
              l(document).on("mousemove" + n, function (l) {
                var o = parseInt((l["x" === e ? "pageX" : "pageY"] - i) / t.kx, 10);
                r[h](c + o);
              }),
              o._handleMouseDown(function () {
                (t.scroll.removeClass("scroll-draggable"), (f = r[h]()));
              }, s)
            );
          }));
      }),
        l.each(a, function (l, e) {
          var o = "scroll-scroll" + l + "_visible",
            s = "x" == l ? a.y : a.x;
          (e.scroll.removeClass(o), s.scroll.removeClass(o), i.removeClass(o));
        }),
        l.each(a, function (e, o) {
          l.extend(
            o,
            "x" == e
              ? { offset: parseInt(r.css("left"), 10) || 0, size: r.prop("scrollWidth"), visible: d.width() }
              : { offset: parseInt(r.css("top"), 10) || 0, size: r.prop("scrollHeight"), visible: d.height() },
          );
        }),
        this._updateScroll("x", this.scrollx),
        this._updateScroll("y", this.scrolly),
        l.isFunction(c.onUpdate) && c.onUpdate.apply(this, [r]),
        l.each(a, function (l, e) {
          var o = "x" === l ? "left" : "top",
            s = "x" === l ? "outerWidth" : "outerHeight",
            t = "x" === l ? "width" : "height",
            i = parseInt(r.css(o), 10) || 0,
            n = e.size,
            a = e.visible + i,
            d = e.scroll.size[s]() + (parseInt(e.scroll.size.css(o), 10) || 0);
          (c.autoScrollSize &&
            ((e.scrollbarSize = parseInt((d * a) / n, 10)), e.scroll.bar.css(t, e.scrollbarSize + "px")),
            (e.scrollbarSize = e.scroll.bar[s]()),
            (e.kx = (d - e.scrollbarSize) / (n - a) || 1),
            (e.maxScrollOffset = n - a));
        }),
        r.scrollLeft(h.scrollLeft).scrollTop(h.scrollTop).trigger("scroll"));
    },
    _getScroll: function (e) {
      var o = {
        advanced: [
          '<div class="scroll-element">',
          '<div class="scroll-element_corner"></div>',
          '<div class="scroll-arrow scroll-arrow_less"></div>',
          '<div class="scroll-arrow scroll-arrow_more"></div>',
          '<div class="scroll-element_outer">',
          '<div class="scroll-element_size"></div>',
          '<div class="scroll-element_inner-wrapper">',
          '<div class="scroll-element_inner scroll-element_track">',
          '<div class="scroll-element_inner-bottom"></div>',
          "</div>",
          "</div>",
          '<div class="scroll-bar">',
          '<div class="scroll-bar_body">',
          '<div class="scroll-bar_body-inner"></div>',
          "</div>",
          '<div class="scroll-bar_bottom"></div>',
          '<div class="scroll-bar_center"></div>',
          "</div>",
          "</div>",
          "</div>",
        ].join(""),
        simple: [
          '<div class="scroll-element">',
          '<div class="scroll-element_outer">',
          '<div class="scroll-element_size"></div>',
          '<div class="scroll-element_track"></div>',
          '<div class="scroll-bar"></div>',
          "</div>",
          "</div>",
        ].join(""),
      };
      return (
        o[e] && (e = o[e]),
        e || (e = o.simple),
        (e = "string" == typeof e ? l(e).appendTo(this.wrapper) : l(e)),
        l.extend(e, {
          bar: e.find(".scroll-bar"),
          size: e.find(".scroll-element_size"),
          track: e.find(".scroll-element_track"),
        }),
        e
      );
    },
    _handleMouseDown: function (e, o) {
      var s = this.namespace;
      return (
        l(document).on("blur" + s, function () {
          (l(document).add("body").off(s), e && e());
        }),
        l(document).on("dragstart" + s, function (l) {
          return (l.preventDefault(), !1);
        }),
        l(document).on("mouseup" + s, function () {
          (l(document).add("body").off(s), e && e());
        }),
        l("body").on("selectstart" + s, function (l) {
          return (l.preventDefault(), !1);
        }),
        o && o.preventDefault(),
        !1
      );
    },
    _updateScroll: function (e, o) {
      var s = this.container,
        r = this.containerWrapper || s,
        i = "scroll-scroll" + e + "_visible",
        n = "x" === e ? this.scrolly : this.scrollx,
        c = parseInt(this.container.css("x" === e ? "left" : "top"), 10) || 0,
        a = this.wrapper,
        d = o.size,
        h = o.visible + c;
      ((o.isVisible = d - h > 1),
        o.isVisible
          ? (o.scroll.addClass(i), n.scroll.addClass(i), r.addClass(i))
          : (o.scroll.removeClass(i), n.scroll.removeClass(i), r.removeClass(i)),
        "y" === e &&
          (s.is("textarea") || h > d
            ? r.css({ height: h + t.scroll.height + "px", "max-height": "none" })
            : r.css({ "max-height": h + t.scroll.height + "px" })),
        (o.size != s.prop("scrollWidth") ||
          n.size != s.prop("scrollHeight") ||
          o.visible != a.width() ||
          n.visible != a.height() ||
          o.offset != (parseInt(s.css("left"), 10) || 0) ||
          n.offset != (parseInt(s.css("top"), 10) || 0)) &&
          (l.extend(this.scrollx, {
            offset: parseInt(s.css("left"), 10) || 0,
            size: s.prop("scrollWidth"),
            visible: a.width(),
          }),
          l.extend(this.scrolly, {
            offset: parseInt(s.css("top"), 10) || 0,
            size: this.container.prop("scrollHeight"),
            visible: a.height(),
          }),
          this._updateScroll("x" === e ? "y" : "x", n)));
    },
  };
  var c = n;
  ((l.fn.scrollbar = function (e, o) {
    return (
      "string" != typeof e && ((o = e), (e = "init")),
      "undefined" == typeof o && (o = []),
      l.isArray(o) || (o = [o]),
      this.not("body, .scroll-wrapper").each(function () {
        var s = l(this),
          r = s.data(t.data.name);
        (r || "init" === e) && (r || (r = new c(s)), r[e] && r[e].apply(r, o));
      }),
      this
    );
  }),
    (l.fn.scrollbar.options = i));
  var a = (function () {
    var l = 0,
      e = 0;
    return function (o) {
      var s, i, n, c, d, h, p;
      for (s = 0; s < t.scrolls.length; s++)
        ((c = t.scrolls[s]),
          (i = c.container),
          (n = c.options),
          (d = c.wrapper),
          (h = c.scrollx),
          (p = c.scrolly),
          (o ||
            (n.autoUpdate &&
              d &&
              d.is(":visible") &&
              (i.prop("scrollWidth") != h.size ||
                i.prop("scrollHeight") != p.size ||
                d.width() != h.visible ||
                d.height() != p.visible))) &&
            (c.init(),
            n.debug &&
              (window.console &&
                console.log(
                  {
                    scrollHeight: i.prop("scrollHeight") + ":" + c.scrolly.size,
                    scrollWidth: i.prop("scrollWidth") + ":" + c.scrollx.size,
                    visibleHeight: d.height() + ":" + c.scrolly.visible,
                    visibleWidth: d.width() + ":" + c.scrollx.visible,
                  },
                  !0,
                ),
              e++)));
      r && e > 10
        ? (window.console && console.log("Scroll updates exceed 10"), (a = function () {}))
        : (clearTimeout(l), (l = setTimeout(a, 300)));
    };
  })();
  window.angular &&
    !(function (l) {
      l.module("jQueryScrollbar", [])
        .provider("jQueryScrollbar", function () {
          var e = i;
          return {
            setOptions: function (o) {
              l.extend(e, o);
            },
            $get: function () {
              return { options: l.copy(e) };
            },
          };
        })
        .directive("jqueryScrollbar", [
          "jQueryScrollbar",
          "$parse",
          function (l, e) {
            return {
              restrict: "AC",
              link: function (o, s, r) {
                var t = e(r.jqueryScrollbar),
                  i = t(o);
                s.scrollbar(i || l.options).on("$destroy", function () {
                  s.scrollbar("destroy");
                });
              },
            };
          },
        ]);
    })(window.angular);
});

/*
  zelect-0.0.9

  opts:
    throttle:       ms: delay to throttle filtering of results when search term updated, 0 means synchronous
    loader:         function(term, page, callback): load more items
                      callback expects an array of items
    renderItem:     function(item, term): render the content of a single item
    initial:        "item": arbitrary item to set the initial selection to
                      placeholder is not required if initial item is provided
    placeholder:    String/DOM/jQuery: placeholder text/html before anything is selected
                      zelect automatically selects first item if not provided
    noResults:      function(term?): function to create no results text
    regexpMatcher:  function(term): override regexp creation when filtering options
*/
(function ($) {
  var keys = { tab: 9, enter: 13, esc: 27, left: 37, up: 38, right: 39, down: 40 };
  var defaults = {
    throttle: 300,
    renderItem: defaultRenderItem,
    noResults: defaultNoResults,
    regexpMatcher: defaultRegexpMatcher,
  };

  $.fn.zelect = function (opts) {
    opts = $.extend({}, defaults, opts);

    return this.each(function () {
      if ($(this).parent().length === 0) throw new Error("<select> element must have a parent");
      var $select = $(this).hide().data("zelectItem", selectItem).data("refreshItem", refreshItem).data("reset", reset);

      var $zelect = $("<div>").addClass("zelect");
      var $selected = $("<div>").addClass("zelected").attr("tabindex", "0");
      var $dropdown = $("<div>").addClass("dropdown").hide();
      var $noResults = $("<div>").addClass("no-results");
      var $search = $("<input>").addClass("zearch");
      var $list = $("<ol>");
      var listNavigator = navigable($list);

      var itemHandler = opts.loader
        ? infiniteScroll($list, opts.loader, appendItem)
        : selectBased($select, $list, opts.regexpMatcher, appendItem);

      var filter = throttled(opts.throttle, function () {
        var term = searchTerm();
        itemHandler.load(term, function () {
          checkResults(term);
        });
      });

      $search.keyup(function (e) {
        switch (e.which) {
          case keys.esc:
            hide();
            return;
          case keys.up:
            return;
          case keys.down:
            return;
          case keys.enter:
            var curr = listNavigator.current().data("zelect-item");
            if (curr) selectItem(curr);
            return;
          default:
            filter();
        }
      });
      $search.keydown(function (e) {
        switch (e.which) {
          case keys.tab:
            e.preventDefault();
            hide();
            return;
          case keys.up:
            e.preventDefault();
            listNavigator.prev();
            return;
          case keys.down:
            e.preventDefault();
            listNavigator.next();
            return;
        }
      });

      $list.on("click", "li", function () {
        selectItem($(this).data("zelect-item"));
      });
      $zelect.mouseenter(function () {
        $zelect.addClass("hover");
      });
      $zelect.mouseleave(function () {
        $zelect.removeClass("hover");
      });
      $zelect.attr("tabindex", $select.attr("tabindex"));
      $zelect.blur(function () {
        if (!$zelect.hasClass("hover")) hide();
      });
      $search.blur(function () {
        if (!$zelect.hasClass("hover")) hide();
      });

      $selected.click(toggle);

      $selected.bind("keyup", function (e) {
        if (e.which == 13) {
          toggle();
        }
        e.preventDefault();
        return false;
      });

      $zelect
        .insertAfter($select)
        .append($selected)
        .append(
          $dropdown.append($("<div>").addClass("zearch-container").append($search).append($noResults)).append($list),
        );

      itemHandler.load($search.val(), function () {
        initialSelection(true);
        $select.trigger("ready");
      });

      function selectItem(item, triggerChange) {
        /* check */
        renderContent($selected, opts.renderItem(item)).removeClass("placeholder");
        hide();
        if (item && item.value !== undefined) $select.val(item.value);
        $select.data("zelected", item);
        if (triggerChange == null || triggerChange === true) $select.trigger("change", item);
      }

      function refreshItem(item, identityCheckFn) {
        var eq = function (a, b) {
          return identityCheckFn(a) === identityCheckFn(b);
        };
        if (eq($select.data("zelected"), item)) {
          renderContent($selected, opts.renderItem(item));
          $select.data("zelected", item);
        }
        var term = searchTerm();
        $list.find("li").each(function () {
          if (eq($(this).data("zelect-item"), item)) {
            renderContent($(this), opts.renderItem(item, term)).data("zelect-item", item);
          }
        });
      }

      function reset() {
        $search.val("");
        itemHandler.load("", function () {
          initialSelection(false);
        });
      }

      function toggle() {
        $dropdown.toggle();
        $zelect.toggleClass("open");
        if ($dropdown.is(":visible")) {
          $search.focus().select();
          itemHandler.check();
          listNavigator.ensure();
        }
      }

      function hide() {
        $dropdown.hide();
        $zelect.removeClass("open");
      }

      function renderContent($obj, content) {
        $obj[htmlOrText(content)](content);
        return $obj;
        function htmlOrText(x) {
          return x instanceof jQuery || x.nodeType != null ? "html" : "text";
        }
      }

      function appendItem(item, term) {
        $list.append(renderContent($("<li>").data("zelect-item", item), opts.renderItem(item, term)));
      }

      function checkResults(term) {
        if ($list.children().size() === 0) {
          $noResults.html(opts.noResults(term)).show();
        } else {
          $noResults.hide();
          listNavigator.ensure();
        }
      }
      function searchTerm() {
        return $.trim($search.val());
      }

      function initialSelection(useOptsInitial) {
        var $s = $select.find('option[selected="selected"]');
        if (useOptsInitial && opts.initial) {
          selectItem(opts.initial);
        } else if (!opts.loader && $s.size() > 0) {
          selectItem($list.children().eq($s.index()).data("zelect-item"));
        } else if (opts.placeholder) {
          $selected.html(opts.placeholder).addClass("placeholder");
        } else {
          var first = $list.find(":first").data("zelect-item");
          first !== undefined ? selectItem(first) : $selected.html(opts.noResults()).addClass("placeholder");
        }
        checkResults();
      }
    });
  };

  function selectBased($select, $list, regexpMatcher, appendItemFn) {
    var dummyRegexp = {
      test: function () {
        return true;
      },
    };
    var options = $select
      .find("option")
      .map(function () {
        return itemFromOption($(this));
      })
      .get();

    function filter(term) {
      var regexp = term === "" ? dummyRegexp : regexpMatcher(term);
      $list.empty();
      $.each(options, function (ii, item) {
        if (regexp.test(item.label)) appendItemFn(item, term);
      });
    }
    function itemFromOption($option) {
      return { value: $option.attr("value"), label: $option.text() };
    }
    function newTerm(term, callback) {
      filter(term);
      if (callback) callback();
    }
    return { load: newTerm, check: function () {} };
  }

  function infiniteScroll($list, loadFn, appendItemFn) {
    var state = { id: 0, term: "", page: 0, loading: false, exhausted: false, callback: undefined };

    $list.scroll(maybeLoadMore);

    function load() {
      if (state.loading || state.exhausted) return;
      state.loading = true;
      $list.addClass("loading");
      var stateId = state.id;
      loadFn(state.term, state.page, function (items) {
        if (stateId !== state.id) return;
        if (state.page == 0) $list.empty();
        state.page++;
        if (!items || items.length === 0) state.exhausted = true;
        $.each(items, function (ii, item) {
          appendItemFn(item, state.term);
        });
        state.loading = false;
        if (!maybeLoadMore()) {
          if (state.callback) state.callback();
          state.callback = undefined;
          $list.removeClass("loading");
        }
      });
    }

    function maybeLoadMore() {
      if (state.exhausted) return false;
      var $lastChild = $list.children(":last");
      if ($lastChild.size() === 0) {
        load();
        return true;
      } else {
        var lastChildTop = $lastChild.offset().top - $list.offset().top;
        var lastChildVisible = lastChildTop < $list.outerHeight();
        if (lastChildVisible) load();
        return lastChildVisible;
      }
    }

    function newTerm(term, callback) {
      state = { id: state.id + 1, term: term, page: 0, loading: false, exhausted: false, callback: callback };
      load();
    }
    return { load: newTerm, check: maybeLoadMore };
  }

  $.fn.zelectItem = callInstance("zelectItem");
  $.fn.refreshZelectItem = callInstance("refreshItem");
  $.fn.resetZelect = callInstance("reset");

  function callInstance(fnName) {
    return function () {
      var args = [].slice.call(arguments);
      return this.each(function () {
        var fn = $(this).data(fnName);
        fn && fn.apply(undefined, args);
      });
    };
  }

  function throttled(ms, callback) {
    if (ms <= 0) return callback;
    var timeout = undefined;
    return function () {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(callback, ms);
    };
  }

  function defaultRenderItem(item, term) {
    if (item == undefined || item == null) {
      return "";
    } else if ($.type(item) === "string") {
      return item;
    } else if (item.label) {
      return item.label;
    } else if (item.toString) {
      return item.toString();
    } else {
      return item;
    }
  }

  function defaultNoResults(term) {
    return "No results for '" + (term || "") + "'";
  }

  function defaultRegexpMatcher(term) {
    return new RegExp("(^|\\s)" + term, "i");
  }

  function navigable($list) {
    var skipMouseEvent = false;
    $list.on("mouseenter", "li", onMouseEnter);

    function next() {
      var $next = current().next("li");
      if (set($next)) ensureBottomVisible($next);
    }
    function prev() {
      var $prev = current().prev("li");
      if (set($prev)) ensureTopVisible($prev);
    }
    function current() {
      return $list.find(".current");
    }
    function ensure() {
      if (current().size() === 0) {
        $list.find("li:first").addClass("current");
      }
    }
    function set($item) {
      if ($item.size() === 0) return false;
      current().removeClass("current");
      $item.addClass("current");
      return true;
    }
    function onMouseEnter() {
      if (skipMouseEvent) {
        skipMouseEvent = false;
        return;
      }
      set($(this));
    }
    function itemTop($item) {
      return $item.offset().top - $list.offset().top;
    }
    function ensureTopVisible($item) {
      var scrollTop = $list.scrollTop();
      var offset = itemTop($item) + scrollTop;
      if (scrollTop > offset) {
        moveScroll(offset);
      }
    }
    function ensureBottomVisible($item) {
      var scrollBottom = $list.height();
      var itemBottom = itemTop($item) + $item.outerHeight();
      if (scrollBottom < itemBottom) {
        moveScroll($list.scrollTop() + itemBottom - scrollBottom);
      }
    }
    function moveScroll(offset) {
      $list.scrollTop(offset);
      skipMouseEvent = true;
    }
    return { next: next, prev: prev, current: current, ensure: ensure };
  }
})(jQuery);

/*! highlight.js v9.12.0 | BSD3 License | git.io/hljslicense */
!(function (e) {
  var t = ("object" == typeof window && window) || ("object" == typeof self && self);
  "undefined" != typeof exports
    ? e(exports)
    : t &&
      ((t.hljs = e({})),
      "function" == typeof define &&
        define.amd &&
        define([], function () {
          return t.hljs;
        }));
})(function (e) {
  function t(e) {
    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function r(e) {
    return e.nodeName.toLowerCase();
  }
  function a(e, t) {
    var r = e && e.exec(t);
    return r && 0 === r.index;
  }
  function n(e) {
    return E.test(e);
  }
  function i(e) {
    var t,
      r,
      a,
      i,
      s = e.className + " ";
    if (((s += e.parentNode ? e.parentNode.className : ""), (r = M.exec(s)))) return w(r[1]) ? r[1] : "no-highlight";
    for (s = s.split(/\s+/), t = 0, a = s.length; a > t; t++) if (((i = s[t]), n(i) || w(i))) return i;
  }
  function s(e) {
    var t,
      r = {},
      a = Array.prototype.slice.call(arguments, 1);
    for (t in e) r[t] = e[t];
    return (
      a.forEach(function (e) {
        for (t in e) r[t] = e[t];
      }),
      r
    );
  }
  function c(e) {
    var t = [];
    return (
      (function a(e, n) {
        for (var i = e.firstChild; i; i = i.nextSibling)
          3 === i.nodeType
            ? (n += i.nodeValue.length)
            : 1 === i.nodeType &&
              (t.push({ event: "start", offset: n, node: i }),
              (n = a(i, n)),
              r(i).match(/br|hr|img|input/) || t.push({ event: "stop", offset: n, node: i }));
        return n;
      })(e, 0),
      t
    );
  }
  function o(e, a, n) {
    function i() {
      return e.length && a.length
        ? e[0].offset !== a[0].offset
          ? e[0].offset < a[0].offset
            ? e
            : a
          : "start" === a[0].event
            ? e
            : a
        : e.length
          ? e
          : a;
    }
    function s(e) {
      function a(e) {
        return " " + e.nodeName + '="' + t(e.value).replace('"', "&quot;") + '"';
      }
      u += "<" + r(e) + N.map.call(e.attributes, a).join("") + ">";
    }
    function c(e) {
      u += "</" + r(e) + ">";
    }
    function o(e) {
      ("start" === e.event ? s : c)(e.node);
    }
    for (var l = 0, u = "", d = []; e.length || a.length; ) {
      var b = i();
      if (((u += t(n.substring(l, b[0].offset))), (l = b[0].offset), b === e)) {
        d.reverse().forEach(c);
        do (o(b.splice(0, 1)[0]), (b = i()));
        while (b === e && b.length && b[0].offset === l);
        d.reverse().forEach(s);
      } else ("start" === b[0].event ? d.push(b[0].node) : d.pop(), o(b.splice(0, 1)[0]));
    }
    return u + t(n.substr(l));
  }
  function l(e) {
    return (
      e.v &&
        !e.cached_variants &&
        (e.cached_variants = e.v.map(function (t) {
          return s(e, { v: null }, t);
        })),
      e.cached_variants || (e.eW && [s(e)]) || [e]
    );
  }
  function u(e) {
    function t(e) {
      return (e && e.source) || e;
    }
    function r(r, a) {
      return new RegExp(t(r), "m" + (e.cI ? "i" : "") + (a ? "g" : ""));
    }
    function a(n, i) {
      if (!n.compiled) {
        if (((n.compiled = !0), (n.k = n.k || n.bK), n.k)) {
          var s = {},
            c = function (t, r) {
              (e.cI && (r = r.toLowerCase()),
                r.split(" ").forEach(function (e) {
                  var r = e.split("|");
                  s[r[0]] = [t, r[1] ? Number(r[1]) : 1];
                }));
            };
          ("string" == typeof n.k
            ? c("keyword", n.k)
            : k(n.k).forEach(function (e) {
                c(e, n.k[e]);
              }),
            (n.k = s));
        }
        ((n.lR = r(n.l || /\w+/, !0)),
          i &&
            (n.bK && (n.b = "\\b(" + n.bK.split(" ").join("|") + ")\\b"),
            n.b || (n.b = /\B|\b/),
            (n.bR = r(n.b)),
            n.e || n.eW || (n.e = /\B|\b/),
            n.e && (n.eR = r(n.e)),
            (n.tE = t(n.e) || ""),
            n.eW && i.tE && (n.tE += (n.e ? "|" : "") + i.tE)),
          n.i && (n.iR = r(n.i)),
          null == n.r && (n.r = 1),
          n.c || (n.c = []),
          (n.c = Array.prototype.concat.apply(
            [],
            n.c.map(function (e) {
              return l("self" === e ? n : e);
            }),
          )),
          n.c.forEach(function (e) {
            a(e, n);
          }),
          n.starts && a(n.starts, i));
        var o = n.c
          .map(function (e) {
            return e.bK ? "\\.?(" + e.b + ")\\.?" : e.b;
          })
          .concat([n.tE, n.i])
          .map(t)
          .filter(Boolean);
        n.t = o.length
          ? r(o.join("|"), !0)
          : {
              exec: function () {
                return null;
              },
            };
      }
    }
    a(e);
  }
  function d(e, r, n, i) {
    function s(e, t) {
      var r, n;
      for (r = 0, n = t.c.length; n > r; r++) if (a(t.c[r].bR, e)) return t.c[r];
    }
    function c(e, t) {
      if (a(e.eR, t)) {
        for (; e.endsParent && e.parent; ) e = e.parent;
        return e;
      }
      return e.eW ? c(e.parent, t) : void 0;
    }
    function o(e, t) {
      return !n && a(t.iR, e);
    }
    function l(e, t) {
      var r = v.cI ? t[0].toLowerCase() : t[0];
      return e.k.hasOwnProperty(r) && e.k[r];
    }
    function p(e, t, r, a) {
      var n = a ? "" : L.classPrefix,
        i = '<span class="' + n,
        s = r ? "" : R;
      return ((i += e + '">'), i + t + s);
    }
    function m() {
      var e, r, a, n;
      if (!N.k) return t(E);
      for (n = "", r = 0, N.lR.lastIndex = 0, a = N.lR.exec(E); a; )
        ((n += t(E.substring(r, a.index))),
          (e = l(N, a)),
          e ? ((M += e[1]), (n += p(e[0], t(a[0])))) : (n += t(a[0])),
          (r = N.lR.lastIndex),
          (a = N.lR.exec(E)));
      return n + t(E.substr(r));
    }
    function f() {
      var e = "string" == typeof N.sL;
      if (e && !x[N.sL]) return t(E);
      var r = e ? d(N.sL, E, !0, k[N.sL]) : b(E, N.sL.length ? N.sL : void 0);
      return (N.r > 0 && (M += r.r), e && (k[N.sL] = r.top), p(r.language, r.value, !1, !0));
    }
    function g() {
      ((C += null != N.sL ? f() : m()), (E = ""));
    }
    function _(e) {
      ((C += e.cN ? p(e.cN, "", !0) : ""), (N = Object.create(e, { parent: { value: N } })));
    }
    function h(e, t) {
      if (((E += e), null == t)) return (g(), 0);
      var r = s(t, N);
      if (r)
        return (r.skip ? (E += t) : (r.eB && (E += t), g(), r.rB || r.eB || (E = t)), _(r, t), r.rB ? 0 : t.length);
      var a = c(N, t);
      if (a) {
        var n = N;
        n.skip ? (E += t) : (n.rE || n.eE || (E += t), g(), n.eE && (E = t));
        do (N.cN && (C += R), N.skip || (M += N.r), (N = N.parent));
        while (N !== a.parent);
        return (a.starts && _(a.starts, ""), n.rE ? 0 : t.length);
      }
      if (o(t, N)) throw new Error('Illegal lexeme "' + t + '" for mode "' + (N.cN || "<unnamed>") + '"');
      return ((E += t), t.length || 1);
    }
    var v = w(e);
    if (!v) throw new Error('Unknown language: "' + e + '"');
    u(v);
    var y,
      N = i || v,
      k = {},
      C = "";
    for (y = N; y !== v; y = y.parent) y.cN && (C = p(y.cN, "", !0) + C);
    var E = "",
      M = 0;
    try {
      for (var B, S, $ = 0; ; ) {
        if (((N.t.lastIndex = $), (B = N.t.exec(r)), !B)) break;
        ((S = h(r.substring($, B.index), B[0])), ($ = B.index + S));
      }
      for (h(r.substr($)), y = N; y.parent; y = y.parent) y.cN && (C += R);
      return { r: M, value: C, language: e, top: N };
    } catch (A) {
      if (A.message && -1 !== A.message.indexOf("Illegal")) return { r: 0, value: t(r) };
      throw A;
    }
  }
  function b(e, r) {
    r = r || L.languages || k(x);
    var a = { r: 0, value: t(e) },
      n = a;
    return (
      r.filter(w).forEach(function (t) {
        var r = d(t, e, !1);
        ((r.language = t), r.r > n.r && (n = r), r.r > a.r && ((n = a), (a = r)));
      }),
      n.language && (a.second_best = n),
      a
    );
  }
  function p(e) {
    return L.tabReplace || L.useBR
      ? e.replace(B, function (e, t) {
          return L.useBR && "\n" === e ? "<br>" : L.tabReplace ? t.replace(/\t/g, L.tabReplace) : "";
        })
      : e;
  }
  function m(e, t, r) {
    var a = t ? C[t] : r,
      n = [e.trim()];
    return (e.match(/\bhljs\b/) || n.push("hljs"), -1 === e.indexOf(a) && n.push(a), n.join(" ").trim());
  }
  function f(e) {
    var t,
      r,
      a,
      s,
      l,
      u = i(e);
    n(u) ||
      (L.useBR
        ? ((t = document.createElementNS("http://www.w3.org/1999/xhtml", "div")),
          (t.innerHTML = e.innerHTML.replace(/\n/g, "").replace(/<br[ \/]*>/g, "\n")))
        : (t = e),
      (l = t.textContent),
      (a = u ? d(u, l, !0) : b(l)),
      (r = c(t)),
      r.length &&
        ((s = document.createElementNS("http://www.w3.org/1999/xhtml", "div")),
        (s.innerHTML = a.value),
        (a.value = o(r, c(s), l))),
      (a.value = p(a.value)),
      (e.innerHTML = a.value),
      (e.className = m(e.className, u, a.language)),
      (e.result = { language: a.language, re: a.r }),
      a.second_best && (e.second_best = { language: a.second_best.language, re: a.second_best.r }));
  }
  function g(e) {
    L = s(L, e);
  }
  function _() {
    if (!_.called) {
      _.called = !0;
      var e = document.querySelectorAll("pre code");
      N.forEach.call(e, f);
    }
  }
  function h() {
    (addEventListener("DOMContentLoaded", _, !1), addEventListener("load", _, !1));
  }
  function v(t, r) {
    var a = (x[t] = r(e));
    a.aliases &&
      a.aliases.forEach(function (e) {
        C[e] = t;
      });
  }
  function y() {
    return k(x);
  }
  function w(e) {
    return ((e = (e || "").toLowerCase()), x[e] || x[C[e]]);
  }
  var N = [],
    k = Object.keys,
    x = {},
    C = {},
    E = /^(no-?highlight|plain|text)$/i,
    M = /\blang(?:uage)?-([\w-]+)\b/i,
    B = /((^(<[^>]+>|\t|)+|(?:\n)))/gm,
    R = "</span>",
    L = { classPrefix: "hljs-", tabReplace: null, useBR: !1, languages: void 0 };
  return (
    (e.highlight = d),
    (e.highlightAuto = b),
    (e.fixMarkup = p),
    (e.highlightBlock = f),
    (e.configure = g),
    (e.initHighlighting = _),
    (e.initHighlightingOnLoad = h),
    (e.registerLanguage = v),
    (e.listLanguages = y),
    (e.getLanguage = w),
    (e.inherit = s),
    (e.IR = "[a-zA-Z]\\w*"),
    (e.UIR = "[a-zA-Z_]\\w*"),
    (e.NR = "\\b\\d+(\\.\\d+)?"),
    (e.CNR = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)"),
    (e.BNR = "\\b(0b[01]+)"),
    (e.RSR =
      "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~"),
    (e.BE = { b: "\\\\[\\s\\S]", r: 0 }),
    (e.ASM = { cN: "string", b: "'", e: "'", i: "\\n", c: [e.BE] }),
    (e.QSM = { cN: "string", b: '"', e: '"', i: "\\n", c: [e.BE] }),
    (e.PWM = {
      b: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/,
    }),
    (e.C = function (t, r, a) {
      var n = e.inherit({ cN: "comment", b: t, e: r, c: [] }, a || {});
      return (n.c.push(e.PWM), n.c.push({ cN: "doctag", b: "(?:TODO|FIXME|NOTE|BUG|XXX):", r: 0 }), n);
    }),
    (e.CLCM = e.C("//", "$")),
    (e.CBCM = e.C("/\\*", "\\*/")),
    (e.HCM = e.C("#", "$")),
    (e.NM = { cN: "number", b: e.NR, r: 0 }),
    (e.CNM = { cN: "number", b: e.CNR, r: 0 }),
    (e.BNM = { cN: "number", b: e.BNR, r: 0 }),
    (e.CSSNM = {
      cN: "number",
      b: e.NR + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
      r: 0,
    }),
    (e.RM = { cN: "regexp", b: /\//, e: /\/[gimuy]*/, i: /\n/, c: [e.BE, { b: /\[/, e: /\]/, r: 0, c: [e.BE] }] }),
    (e.TM = { cN: "title", b: e.IR, r: 0 }),
    (e.UTM = { cN: "title", b: e.UIR, r: 0 }),
    (e.METHOD_GUARD = { b: "\\.\\s*" + e.UIR, r: 0 }),
    e.registerLanguage("apache", function (e) {
      var t = { cN: "number", b: "[\\$%]\\d+" };
      return {
        aliases: ["apacheconf"],
        cI: !0,
        c: [
          e.HCM,
          { cN: "section", b: "</?", e: ">" },
          {
            cN: "attribute",
            b: /\w+/,
            r: 0,
            k: {
              nomarkup:
                "order deny allow setenv rewriterule rewriteengine rewritecond documentroot sethandler errordocument loadmodule options header listen serverroot servername",
            },
            starts: {
              e: /$/,
              r: 0,
              k: { literal: "on off all" },
              c: [
                { cN: "meta", b: "\\s\\[", e: "\\]$" },
                { cN: "variable", b: "[\\$%]\\{", e: "\\}", c: ["self", t] },
                t,
                e.QSM,
              ],
            },
          },
        ],
        i: /\S/,
      };
    }),
    e.registerLanguage("bash", function (e) {
      var t = { cN: "variable", v: [{ b: /\$[\w\d#@][\w\d_]*/ }, { b: /\$\{(.*?)}/ }] },
        r = { cN: "string", b: /"/, e: /"/, c: [e.BE, t, { cN: "variable", b: /\$\(/, e: /\)/, c: [e.BE] }] },
        a = { cN: "string", b: /'/, e: /'/ };
      return {
        aliases: ["sh", "zsh"],
        l: /\b-?[a-z\._]+\b/,
        k: {
          keyword: "if then else elif fi for while in do done case esac function",
          literal: "true false",
          built_in:
            "break cd continue eval exec exit export getopts hash pwd readonly return shift test times trap umask unset alias bind builtin caller command declare echo enable help let local logout mapfile printf read readarray source type typeset ulimit unalias set shopt autoload bg bindkey bye cap chdir clone comparguments compcall compctl compdescribe compfiles compgroups compquote comptags comptry compvalues dirs disable disown echotc echoti emulate fc fg float functions getcap getln history integer jobs kill limit log noglob popd print pushd pushln rehash sched setcap setopt stat suspend ttyctl unfunction unhash unlimit unsetopt vared wait whence where which zcompile zformat zftp zle zmodload zparseopts zprof zpty zregexparse zsocket zstyle ztcp",
          _: "-ne -eq -lt -gt -f -d -e -s -l -a",
        },
        c: [
          { cN: "meta", b: /^#![^\n]+sh\s*$/, r: 10 },
          { cN: "function", b: /\w[\w\d_]*\s*\(\s*\)\s*\{/, rB: !0, c: [e.inherit(e.TM, { b: /\w[\w\d_]*/ })], r: 0 },
          e.HCM,
          r,
          a,
          t,
        ],
      };
    }),
    e.registerLanguage("coffeescript", function (e) {
      var t = {
          keyword:
            "in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger super yield import export from as default await then unless until loop of by when and or is isnt not",
          literal: "true false null undefined yes no on off",
          built_in: "npm require console print module global window document",
        },
        r = "[A-Za-z$_][0-9A-Za-z$_]*",
        a = { cN: "subst", b: /#\{/, e: /}/, k: t },
        n = [
          e.BNM,
          e.inherit(e.CNM, { starts: { e: "(\\s*/)?", r: 0 } }),
          {
            cN: "string",
            v: [
              { b: /'''/, e: /'''/, c: [e.BE] },
              { b: /'/, e: /'/, c: [e.BE] },
              { b: /"""/, e: /"""/, c: [e.BE, a] },
              { b: /"/, e: /"/, c: [e.BE, a] },
            ],
          },
          {
            cN: "regexp",
            v: [
              { b: "///", e: "///", c: [a, e.HCM] },
              { b: "//[gim]*", r: 0 },
              { b: /\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/ },
            ],
          },
          { b: "@" + r },
          {
            sL: "javascript",
            eB: !0,
            eE: !0,
            v: [
              { b: "```", e: "```" },
              { b: "`", e: "`" },
            ],
          },
        ];
      a.c = n;
      var i = e.inherit(e.TM, { b: r }),
        s = "(\\(.*\\))?\\s*\\B[-=]>",
        c = { cN: "params", b: "\\([^\\(]", rB: !0, c: [{ b: /\(/, e: /\)/, k: t, c: ["self"].concat(n) }] };
      return {
        aliases: ["coffee", "cson", "iced"],
        k: t,
        i: /\/\*/,
        c: n.concat([
          e.C("###", "###"),
          e.HCM,
          { cN: "function", b: "^\\s*" + r + "\\s*=\\s*" + s, e: "[-=]>", rB: !0, c: [i, c] },
          { b: /[:\(,=]\s*/, r: 0, c: [{ cN: "function", b: s, e: "[-=]>", rB: !0, c: [c] }] },
          {
            cN: "class",
            bK: "class",
            e: "$",
            i: /[:="\[\]]/,
            c: [{ bK: "extends", eW: !0, i: /[:="\[\]]/, c: [i] }, i],
          },
          { b: r + ":", e: ":", rB: !0, rE: !0, r: 0 },
        ]),
      };
    }),
    e.registerLanguage("cpp", function (e) {
      var t = { cN: "keyword", b: "\\b[a-z\\d_]*_t\\b" },
        r = {
          cN: "string",
          v: [
            { b: '(u8?|U)?L?"', e: '"', i: "\\n", c: [e.BE] },
            { b: '(u8?|U)?R"', e: '"', c: [e.BE] },
            { b: "'\\\\?.", e: "'", i: "." },
          ],
        },
        a = {
          cN: "number",
          v: [
            { b: "\\b(0b[01']+)" },
            { b: "(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)" },
            { b: "(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)" },
          ],
          r: 0,
        },
        n = {
          cN: "meta",
          b: /#\s*[a-z]+\b/,
          e: /$/,
          k: { "meta-keyword": "if else elif endif define undef warning error line pragma ifdef ifndef include" },
          c: [
            { b: /\\\n/, r: 0 },
            e.inherit(r, { cN: "meta-string" }),
            { cN: "meta-string", b: /<[^\n>]*>/, e: /$/, i: "\\n" },
            e.CLCM,
            e.CBCM,
          ],
        },
        i = e.IR + "\\s*\\(",
        s = {
          keyword:
            "int float while private char catch import module export virtual operator sizeof dynamic_cast|10 typedef const_cast|10 const for static_cast|10 union namespace unsigned long volatile static protected bool template mutable if public friend do goto auto void enum else break extern using asm case typeid short reinterpret_cast|10 default double register explicit signed typename try this switch continue inline delete alignof constexpr decltype noexcept static_assert thread_local restrict _Bool complex _Complex _Imaginary atomic_bool atomic_char atomic_schar atomic_uchar atomic_short atomic_ushort atomic_int atomic_uint atomic_long atomic_ulong atomic_llong atomic_ullong new throw return and or not",
          built_in:
            "std string cin cout cerr clog stdin stdout stderr stringstream istringstream ostringstream auto_ptr deque list queue stack vector map set bitset multiset multimap unordered_set unordered_map unordered_multiset unordered_multimap array shared_ptr abort abs acos asin atan2 atan calloc ceil cosh cos exit exp fabs floor fmod fprintf fputs free frexp fscanf isalnum isalpha iscntrl isdigit isgraph islower isprint ispunct isspace isupper isxdigit tolower toupper labs ldexp log10 log malloc realloc memchr memcmp memcpy memset modf pow printf putchar puts scanf sinh sin snprintf sprintf sqrt sscanf strcat strchr strcmp strcpy strcspn strlen strncat strncmp strncpy strpbrk strrchr strspn strstr tanh tan vfprintf vprintf vsprintf endl initializer_list unique_ptr",
          literal: "true false nullptr NULL",
        },
        c = [t, e.CLCM, e.CBCM, a, r];
      return {
        aliases: ["c", "cc", "h", "c++", "h++", "hpp"],
        k: s,
        i: "</",
        c: c.concat([
          n,
          {
            b: "\\b(deque|list|queue|stack|vector|map|set|bitset|multiset|multimap|unordered_map|unordered_set|unordered_multiset|unordered_multimap|array)\\s*<",
            e: ">",
            k: s,
            c: ["self", t],
          },
          { b: e.IR + "::", k: s },
          {
            v: [
              { b: /=/, e: /;/ },
              { b: /\(/, e: /\)/ },
              { bK: "new throw return else", e: /;/ },
            ],
            k: s,
            c: c.concat([{ b: /\(/, e: /\)/, k: s, c: c.concat(["self"]), r: 0 }]),
            r: 0,
          },
          {
            cN: "function",
            b: "(" + e.IR + "[\\*&\\s]+)+" + i,
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: s,
            i: /[^\w\s\*&]/,
            c: [
              { b: i, rB: !0, c: [e.TM], r: 0 },
              { cN: "params", b: /\(/, e: /\)/, k: s, r: 0, c: [e.CLCM, e.CBCM, r, a, t] },
              e.CLCM,
              e.CBCM,
              n,
            ],
          },
          { cN: "class", bK: "class struct", e: /[{;:]/, c: [{ b: /</, e: />/, c: ["self"] }, e.TM] },
        ]),
        exports: { preprocessor: n, strings: r, k: s },
      };
    }),
    e.registerLanguage("cs", function (e) {
      var t = {
          keyword:
            "abstract as base bool break byte case catch char checked const continue decimal default delegate do double enum event explicit extern finally fixed float for foreach goto if implicit in int interface internal is lock long nameof object operator out override params private protected public readonly ref sbyte sealed short sizeof stackalloc static string struct switch this try typeof uint ulong unchecked unsafe ushort using virtual void volatile while add alias ascending async await by descending dynamic equals from get global group into join let on orderby partial remove select set value var where yield",
          literal: "null false true",
        },
        r = { cN: "string", b: '@"', e: '"', c: [{ b: '""' }] },
        a = e.inherit(r, { i: /\n/ }),
        n = { cN: "subst", b: "{", e: "}", k: t },
        i = e.inherit(n, { i: /\n/ }),
        s = { cN: "string", b: /\$"/, e: '"', i: /\n/, c: [{ b: "{{" }, { b: "}}" }, e.BE, i] },
        c = { cN: "string", b: /\$@"/, e: '"', c: [{ b: "{{" }, { b: "}}" }, { b: '""' }, n] },
        o = e.inherit(c, { i: /\n/, c: [{ b: "{{" }, { b: "}}" }, { b: '""' }, i] });
      ((n.c = [c, s, r, e.ASM, e.QSM, e.CNM, e.CBCM]),
        (i.c = [o, s, a, e.ASM, e.QSM, e.CNM, e.inherit(e.CBCM, { i: /\n/ })]));
      var l = { v: [c, s, r, e.ASM, e.QSM] },
        u = e.IR + "(<" + e.IR + "(\\s*,\\s*" + e.IR + ")*>)?(\\[\\])?";
      return {
        aliases: ["csharp"],
        k: t,
        i: /::/,
        c: [
          e.C("///", "$", {
            rB: !0,
            c: [{ cN: "doctag", v: [{ b: "///", r: 0 }, { b: "<!--|-->" }, { b: "</?", e: ">" }] }],
          }),
          e.CLCM,
          e.CBCM,
          {
            cN: "meta",
            b: "#",
            e: "$",
            k: {
              "meta-keyword": "if else elif endif define undef warning error line region endregion pragma checksum",
            },
          },
          l,
          e.CNM,
          { bK: "class interface", e: /[{;=]/, i: /[^\s:]/, c: [e.TM, e.CLCM, e.CBCM] },
          {
            bK: "namespace",
            e: /[{;=]/,
            i: /[^\s:]/,
            c: [e.inherit(e.TM, { b: "[a-zA-Z](\\.?\\w)*" }), e.CLCM, e.CBCM],
          },
          { cN: "meta", b: "^\\s*\\[", eB: !0, e: "\\]", eE: !0, c: [{ cN: "meta-string", b: /"/, e: /"/ }] },
          { bK: "new return throw await else", r: 0 },
          {
            cN: "function",
            b: "(" + u + "\\s+)+" + e.IR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: t,
            c: [
              { b: e.IR + "\\s*\\(", rB: !0, c: [e.TM], r: 0 },
              { cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, k: t, r: 0, c: [l, e.CNM, e.CBCM] },
              e.CLCM,
              e.CBCM,
            ],
          },
        ],
      };
    }),
    e.registerLanguage("css", function (e) {
      var t = "[a-zA-Z-][a-zA-Z0-9_-]*",
        r = {
          b: /[A-Z\_\.\-]+\s*:/,
          rB: !0,
          e: ";",
          eW: !0,
          c: [
            {
              cN: "attribute",
              b: /\S/,
              e: ":",
              eE: !0,
              starts: {
                eW: !0,
                eE: !0,
                c: [
                  {
                    b: /[\w-]+\(/,
                    rB: !0,
                    c: [
                      { cN: "built_in", b: /[\w-]+/ },
                      { b: /\(/, e: /\)/, c: [e.ASM, e.QSM] },
                    ],
                  },
                  e.CSSNM,
                  e.QSM,
                  e.ASM,
                  e.CBCM,
                  { cN: "number", b: "#[0-9A-Fa-f]+" },
                  { cN: "meta", b: "!important" },
                ],
              },
            },
          ],
        };
      return {
        cI: !0,
        i: /[=\/|'\$]/,
        c: [
          e.CBCM,
          { cN: "selector-id", b: /#[A-Za-z0-9_-]+/ },
          { cN: "selector-class", b: /\.[A-Za-z0-9_-]+/ },
          { cN: "selector-attr", b: /\[/, e: /\]/, i: "$" },
          { cN: "selector-pseudo", b: /:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/ },
          { b: "@(font-face|page)", l: "[a-z-]+", k: "font-face page" },
          {
            b: "@",
            e: "[{;]",
            i: /:/,
            c: [
              { cN: "keyword", b: /\w+/ },
              { b: /\s/, eW: !0, eE: !0, r: 0, c: [e.ASM, e.QSM, e.CSSNM] },
            ],
          },
          { cN: "selector-tag", b: t, r: 0 },
          { b: "{", e: "}", i: /\S/, c: [e.CBCM, r] },
        ],
      };
    }),
    e.registerLanguage("diff", function (e) {
      return {
        aliases: ["patch"],
        c: [
          {
            cN: "meta",
            r: 10,
            v: [
              { b: /^@@ +\-\d+,\d+ +\+\d+,\d+ +@@$/ },
              { b: /^\*\*\* +\d+,\d+ +\*\*\*\*$/ },
              { b: /^\-\-\- +\d+,\d+ +\-\-\-\-$/ },
            ],
          },
          {
            cN: "comment",
            v: [
              { b: /Index: /, e: /$/ },
              { b: /={3,}/, e: /$/ },
              { b: /^\-{3}/, e: /$/ },
              { b: /^\*{3} /, e: /$/ },
              { b: /^\+{3}/, e: /$/ },
              { b: /\*{5}/, e: /\*{5}$/ },
            ],
          },
          { cN: "addition", b: "^\\+", e: "$" },
          { cN: "deletion", b: "^\\-", e: "$" },
          { cN: "addition", b: "^\\!", e: "$" },
        ],
      };
    }),
    e.registerLanguage("http", function (e) {
      var t = "HTTP/[0-9\\.]+";
      return {
        aliases: ["https"],
        i: "\\S",
        c: [
          { b: "^" + t, e: "$", c: [{ cN: "number", b: "\\b\\d{3}\\b" }] },
          {
            b: "^[A-Z]+ (.*?) " + t + "$",
            rB: !0,
            e: "$",
            c: [{ cN: "string", b: " ", e: " ", eB: !0, eE: !0 }, { b: t }, { cN: "keyword", b: "[A-Z]+" }],
          },
          { cN: "attribute", b: "^\\w", e: ": ", eE: !0, i: "\\n|\\s|=", starts: { e: "$", r: 0 } },
          { b: "\\n\\n", starts: { sL: [], eW: !0 } },
        ],
      };
    }),
    e.registerLanguage("ini", function (e) {
      var t = {
        cN: "string",
        c: [e.BE],
        v: [
          { b: "'''", e: "'''", r: 10 },
          { b: '"""', e: '"""', r: 10 },
          { b: '"', e: '"' },
          { b: "'", e: "'" },
        ],
      };
      return {
        aliases: ["toml"],
        cI: !0,
        i: /\S/,
        c: [
          e.C(";", "$"),
          e.HCM,
          { cN: "section", b: /^\s*\[+/, e: /\]+/ },
          {
            b: /^[a-z0-9\[\]_-]+\s*=\s*/,
            e: "$",
            rB: !0,
            c: [
              { cN: "attr", b: /[a-z0-9\[\]_-]+/ },
              {
                b: /=/,
                eW: !0,
                r: 0,
                c: [
                  { cN: "literal", b: /\bon|off|true|false|yes|no\b/ },
                  { cN: "variable", v: [{ b: /\$[\w\d"][\w\d_]*/ }, { b: /\$\{(.*?)}/ }] },
                  t,
                  { cN: "number", b: /([\+\-]+)?[\d]+_[\d_]+/ },
                  e.NM,
                ],
              },
            ],
          },
        ],
      };
    }),
    e.registerLanguage("java", function (e) {
      var t = "[À-ʸa-zA-Z_$][À-ʸa-zA-Z_$0-9]*",
        r = t + "(<" + t + "(\\s*,\\s*" + t + ")*>)?",
        a =
          "false synchronized int abstract float private char boolean static null if const for true while long strictfp finally protected import native final void enum else break transient catch instanceof byte super volatile case assert short package default double public try this switch continue throws protected public private module requires exports do",
        n =
          "\\b(0[bB]([01]+[01_]+[01]+|[01]+)|0[xX]([a-fA-F0-9]+[a-fA-F0-9_]+[a-fA-F0-9]+|[a-fA-F0-9]+)|(([\\d]+[\\d_]+[\\d]+|[\\d]+)(\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))?|\\.([\\d]+[\\d_]+[\\d]+|[\\d]+))([eE][-+]?\\d+)?)[lLfF]?",
        i = { cN: "number", b: n, r: 0 };
      return {
        aliases: ["jsp"],
        k: a,
        i: /<\/|#/,
        c: [
          e.C("/\\*\\*", "\\*/", {
            r: 0,
            c: [
              { b: /\w+@/, r: 0 },
              { cN: "doctag", b: "@[A-Za-z]+" },
            ],
          }),
          e.CLCM,
          e.CBCM,
          e.ASM,
          e.QSM,
          {
            cN: "class",
            bK: "class interface",
            e: /[{;=]/,
            eE: !0,
            k: "class interface",
            i: /[:"\[\]]/,
            c: [{ bK: "extends implements" }, e.UTM],
          },
          { bK: "new throw return else", r: 0 },
          {
            cN: "function",
            b: "(" + r + "\\s+)+" + e.UIR + "\\s*\\(",
            rB: !0,
            e: /[{;=]/,
            eE: !0,
            k: a,
            c: [
              { b: e.UIR + "\\s*\\(", rB: !0, r: 0, c: [e.UTM] },
              { cN: "params", b: /\(/, e: /\)/, k: a, r: 0, c: [e.ASM, e.QSM, e.CNM, e.CBCM] },
              e.CLCM,
              e.CBCM,
            ],
          },
          i,
          { cN: "meta", b: "@[A-Za-z]+" },
        ],
      };
    }),
    e.registerLanguage("javascript", function (e) {
      var t = "[A-Za-z$_][0-9A-Za-z$_]*",
        r = {
          keyword:
            "in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",
          literal: "true false null undefined NaN Infinity",
          built_in:
            "eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise",
        },
        a = { cN: "number", v: [{ b: "\\b(0[bB][01]+)" }, { b: "\\b(0[oO][0-7]+)" }, { b: e.CNR }], r: 0 },
        n = { cN: "subst", b: "\\$\\{", e: "\\}", k: r, c: [] },
        i = { cN: "string", b: "`", e: "`", c: [e.BE, n] };
      n.c = [e.ASM, e.QSM, i, a, e.RM];
      var s = n.c.concat([e.CBCM, e.CLCM]);
      return {
        aliases: ["js", "jsx"],
        k: r,
        c: [
          { cN: "meta", r: 10, b: /^\s*['"]use (strict|asm)['"]/ },
          { cN: "meta", b: /^#!/, e: /$/ },
          e.ASM,
          e.QSM,
          i,
          e.CLCM,
          e.CBCM,
          a,
          { b: /[{,]\s*/, r: 0, c: [{ b: t + "\\s*:", rB: !0, r: 0, c: [{ cN: "attr", b: t, r: 0 }] }] },
          {
            b: "(" + e.RSR + "|\\b(case|return|throw)\\b)\\s*",
            k: "return throw case",
            c: [
              e.CLCM,
              e.CBCM,
              e.RM,
              {
                cN: "function",
                b: "(\\(.*?\\)|" + t + ")\\s*=>",
                rB: !0,
                e: "\\s*=>",
                c: [
                  { cN: "params", v: [{ b: t }, { b: /\(\s*\)/ }, { b: /\(/, e: /\)/, eB: !0, eE: !0, k: r, c: s }] },
                ],
              },
              {
                b: /</,
                e: /(\/\w+|\w+\/)>/,
                sL: "xml",
                c: [
                  { b: /<\w+\s*\/>/, skip: !0 },
                  { b: /<\w+/, e: /(\/\w+|\w+\/)>/, skip: !0, c: [{ b: /<\w+\s*\/>/, skip: !0 }, "self"] },
                ],
              },
            ],
            r: 0,
          },
          {
            cN: "function",
            bK: "function",
            e: /\{/,
            eE: !0,
            c: [e.inherit(e.TM, { b: t }), { cN: "params", b: /\(/, e: /\)/, eB: !0, eE: !0, c: s }],
            i: /\[|%/,
          },
          { b: /\$[(.]/ },
          e.METHOD_GUARD,
          { cN: "class", bK: "class", e: /[{;=]/, eE: !0, i: /[:"\[\]]/, c: [{ bK: "extends" }, e.UTM] },
          { bK: "constructor", e: /\{/, eE: !0 },
        ],
        i: /#(?!!)/,
      };
    }),
    e.registerLanguage("json", function (e) {
      var t = { literal: "true false null" },
        r = [e.QSM, e.CNM],
        a = { e: ",", eW: !0, eE: !0, c: r, k: t },
        n = {
          b: "{",
          e: "}",
          c: [{ cN: "attr", b: /"/, e: /"/, c: [e.BE], i: "\\n" }, e.inherit(a, { b: /:/ })],
          i: "\\S",
        },
        i = { b: "\\[", e: "\\]", c: [e.inherit(a)], i: "\\S" };
      return (r.splice(r.length, 0, n, i), { c: r, k: t, i: "\\S" });
    }),
    e.registerLanguage("makefile", function (e) {
      var t = { cN: "variable", v: [{ b: "\\$\\(" + e.UIR + "\\)", c: [e.BE] }, { b: /\$[@%<?\^\+\*]/ }] },
        r = { cN: "string", b: /"/, e: /"/, c: [e.BE, t] },
        a = {
          cN: "variable",
          b: /\$\([\w-]+\s/,
          e: /\)/,
          k: {
            built_in:
              "subst patsubst strip findstring filter filter-out sort word wordlist firstword lastword dir notdir suffix basename addsuffix addprefix join wildcard realpath abspath error warning shell origin flavor foreach if or and call eval file value",
          },
          c: [t],
        },
        n = { b: "^" + e.UIR + "\\s*[:+?]?=", i: "\\n", rB: !0, c: [{ b: "^" + e.UIR, e: "[:+?]?=", eE: !0 }] },
        i = { cN: "meta", b: /^\.PHONY:/, e: /$/, k: { "meta-keyword": ".PHONY" }, l: /[\.\w]+/ },
        s = { cN: "section", b: /^[^\s]+:/, e: /$/, c: [t] };
      return {
        aliases: ["mk", "mak"],
        k: "define endef undefine ifdef ifndef ifeq ifneq else endif include -include sinclude override export unexport private vpath",
        l: /[\w-]+/,
        c: [e.HCM, t, r, a, n, i, s],
      };
    }),
    e.registerLanguage("xml", function (e) {
      var t = "[A-Za-z0-9\\._:-]+",
        r = {
          eW: !0,
          i: /</,
          r: 0,
          c: [
            { cN: "attr", b: t, r: 0 },
            {
              b: /=\s*/,
              r: 0,
              c: [{ cN: "string", endsParent: !0, v: [{ b: /"/, e: /"/ }, { b: /'/, e: /'/ }, { b: /[^\s"'=<>`]+/ }] }],
            },
          ],
        };
      return {
        aliases: ["html", "xhtml", "rss", "atom", "xjb", "xsd", "xsl", "plist"],
        cI: !0,
        c: [
          { cN: "meta", b: "<!DOCTYPE", e: ">", r: 10, c: [{ b: "\\[", e: "\\]" }] },
          e.C("<!--", "-->", { r: 10 }),
          { b: "<\\!\\[CDATA\\[", e: "\\]\\]>", r: 10 },
          { b: /<\?(php)?/, e: /\?>/, sL: "php", c: [{ b: "/\\*", e: "\\*/", skip: !0 }] },
          {
            cN: "tag",
            b: "<style(?=\\s|>|$)",
            e: ">",
            k: { name: "style" },
            c: [r],
            starts: { e: "</style>", rE: !0, sL: ["css", "xml"] },
          },
          {
            cN: "tag",
            b: "<script(?=\\s|>|$)",
            e: ">",
            k: { name: "script" },
            c: [r],
            starts: { e: "</script>", rE: !0, sL: ["actionscript", "javascript", "handlebars", "xml"] },
          },
          {
            cN: "meta",
            v: [
              { b: /<\?xml/, e: /\?>/, r: 10 },
              { b: /<\?\w+/, e: /\?>/ },
            ],
          },
          { cN: "tag", b: "</?", e: "/?>", c: [{ cN: "name", b: /[^\/><\s]+/, r: 0 }, r] },
        ],
      };
    }),
    e.registerLanguage("markdown", function (e) {
      return {
        aliases: ["md", "mkdown", "mkd"],
        c: [
          { cN: "section", v: [{ b: "^#{1,6}", e: "$" }, { b: "^.+?\\n[=-]{2,}$" }] },
          { b: "<", e: ">", sL: "xml", r: 0 },
          { cN: "bullet", b: "^([*+-]|(\\d+\\.))\\s+" },
          { cN: "strong", b: "[*_]{2}.+?[*_]{2}" },
          { cN: "emphasis", v: [{ b: "\\*.+?\\*" }, { b: "_.+?_", r: 0 }] },
          { cN: "quote", b: "^>\\s+", e: "$" },
          { cN: "code", v: [{ b: "^```w*s*$", e: "^```s*$" }, { b: "`.+?`" }, { b: "^( {4}|	)", e: "$", r: 0 }] },
          { b: "^[-\\*]{3,}", e: "$" },
          {
            b: "\\[.+?\\][\\(\\[].*?[\\)\\]]",
            rB: !0,
            c: [
              { cN: "string", b: "\\[", e: "\\]", eB: !0, rE: !0, r: 0 },
              { cN: "link", b: "\\]\\(", e: "\\)", eB: !0, eE: !0 },
              { cN: "symbol", b: "\\]\\[", e: "\\]", eB: !0, eE: !0 },
            ],
            r: 10,
          },
          {
            b: /^\[[^\n]+\]:/,
            rB: !0,
            c: [
              { cN: "symbol", b: /\[/, e: /\]/, eB: !0, eE: !0 },
              { cN: "link", b: /:\s*/, e: /$/, eB: !0 },
            ],
          },
        ],
      };
    }),
    e.registerLanguage("nginx", function (e) {
      var t = { cN: "variable", v: [{ b: /\$\d+/ }, { b: /\$\{/, e: /}/ }, { b: "[\\$\\@]" + e.UIR }] },
        r = {
          eW: !0,
          l: "[a-z/_]+",
          k: {
            literal:
              "on off yes no true false none blocked debug info notice warn error crit select break last permanent redirect kqueue rtsig epoll poll /dev/poll",
          },
          r: 0,
          i: "=>",
          c: [
            e.HCM,
            {
              cN: "string",
              c: [e.BE, t],
              v: [
                { b: /"/, e: /"/ },
                { b: /'/, e: /'/ },
              ],
            },
            { b: "([a-z]+):/", e: "\\s", eW: !0, eE: !0, c: [t] },
            {
              cN: "regexp",
              c: [e.BE, t],
              v: [
                { b: "\\s\\^", e: "\\s|{|;", rE: !0 },
                { b: "~\\*?\\s+", e: "\\s|{|;", rE: !0 },
                { b: "\\*(\\.[a-z\\-]+)+" },
                { b: "([a-z\\-]+\\.)+\\*" },
              ],
            },
            { cN: "number", b: "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}(:\\d{1,5})?\\b" },
            { cN: "number", b: "\\b\\d+[kKmMgGdshdwy]*\\b", r: 0 },
            t,
          ],
        };
      return {
        aliases: ["nginxconf"],
        c: [
          e.HCM,
          { b: e.UIR + "\\s+{", rB: !0, e: "{", c: [{ cN: "section", b: e.UIR }], r: 0 },
          { b: e.UIR + "\\s", e: ";|{", rB: !0, c: [{ cN: "attribute", b: e.UIR, starts: r }], r: 0 },
        ],
        i: "[^\\s\\}]",
      };
    }),
    e.registerLanguage("objectivec", function (e) {
      var t = { cN: "built_in", b: "\\b(AV|CA|CF|CG|CI|CL|CM|CN|CT|MK|MP|MTK|MTL|NS|SCN|SK|UI|WK|XC)\\w+" },
        r = {
          keyword:
            "int float while char export sizeof typedef const struct for union unsigned long volatile static bool mutable if do return goto void enum else break extern asm case short default double register explicit signed typename this switch continue wchar_t inline readonly assign readwrite self @synchronized id typeof nonatomic super unichar IBOutlet IBAction strong weak copy in out inout bycopy byref oneway __strong __weak __block __autoreleasing @private @protected @public @try @property @end @throw @catch @finally @autoreleasepool @synthesize @dynamic @selector @optional @required @encode @package @import @defs @compatibility_alias __bridge __bridge_transfer __bridge_retained __bridge_retain __covariant __contravariant __kindof _Nonnull _Nullable _Null_unspecified __FUNCTION__ __PRETTY_FUNCTION__ __attribute__ getter setter retain unsafe_unretained nonnull nullable null_unspecified null_resettable class instancetype NS_DESIGNATED_INITIALIZER NS_UNAVAILABLE NS_REQUIRES_SUPER NS_RETURNS_INNER_POINTER NS_INLINE NS_AVAILABLE NS_DEPRECATED NS_ENUM NS_OPTIONS NS_SWIFT_UNAVAILABLE NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_REFINED_FOR_SWIFT NS_SWIFT_NAME NS_SWIFT_NOTHROW NS_DURING NS_HANDLER NS_ENDHANDLER NS_VALUERETURN NS_VOIDRETURN",
          literal: "false true FALSE TRUE nil YES NO NULL",
          built_in: "BOOL dispatch_once_t dispatch_queue_t dispatch_sync dispatch_async dispatch_once",
        },
        a = /[a-zA-Z@][a-zA-Z0-9_]*/,
        n = "@interface @class @protocol @implementation";
      return {
        aliases: ["mm", "objc", "obj-c"],
        k: r,
        l: a,
        i: "</",
        c: [
          t,
          e.CLCM,
          e.CBCM,
          e.CNM,
          e.QSM,
          {
            cN: "string",
            v: [
              { b: '@"', e: '"', i: "\\n", c: [e.BE] },
              { b: "'", e: "[^\\\\]'", i: "[^\\\\][^']" },
            ],
          },
          {
            cN: "meta",
            b: "#",
            e: "$",
            c: [
              {
                cN: "meta-string",
                v: [
                  { b: '"', e: '"' },
                  { b: "<", e: ">" },
                ],
              },
            ],
          },
          { cN: "class", b: "(" + n.split(" ").join("|") + ")\\b", e: "({|$)", eE: !0, k: n, l: a, c: [e.UTM] },
          { b: "\\." + e.UIR, r: 0 },
        ],
      };
    }),
    e.registerLanguage("perl", function (e) {
      var t =
          "getpwent getservent quotemeta msgrcv scalar kill dbmclose undef lc ma syswrite tr send umask sysopen shmwrite vec qx utime local oct semctl localtime readpipe do return format read sprintf dbmopen pop getpgrp not getpwnam rewinddir qqfileno qw endprotoent wait sethostent bless s|0 opendir continue each sleep endgrent shutdown dump chomp connect getsockname die socketpair close flock exists index shmgetsub for endpwent redo lstat msgctl setpgrp abs exit select print ref gethostbyaddr unshift fcntl syscall goto getnetbyaddr join gmtime symlink semget splice x|0 getpeername recv log setsockopt cos last reverse gethostbyname getgrnam study formline endhostent times chop length gethostent getnetent pack getprotoent getservbyname rand mkdir pos chmod y|0 substr endnetent printf next open msgsnd readdir use unlink getsockopt getpriority rindex wantarray hex system getservbyport endservent int chr untie rmdir prototype tell listen fork shmread ucfirst setprotoent else sysseek link getgrgid shmctl waitpid unpack getnetbyname reset chdir grep split require caller lcfirst until warn while values shift telldir getpwuid my getprotobynumber delete and sort uc defined srand accept package seekdir getprotobyname semop our rename seek if q|0 chroot sysread setpwent no crypt getc chown sqrt write setnetent setpriority foreach tie sin msgget map stat getlogin unless elsif truncate exec keys glob tied closedirioctl socket readlink eval xor readline binmode setservent eof ord bind alarm pipe atan2 getgrent exp time push setgrent gt lt or ne m|0 break given say state when",
        r = { cN: "subst", b: "[$@]\\{", e: "\\}", k: t },
        a = { b: "->{", e: "}" },
        n = {
          v: [{ b: /\$\d/ }, { b: /[\$%@](\^\w\b|#\w+(::\w+)*|{\w+}|\w+(::\w*)*)/ }, { b: /[\$%@][^\s\w{]/, r: 0 }],
        },
        i = [e.BE, r, n],
        s = [
          n,
          e.HCM,
          e.C("^\\=\\w", "\\=cut", { eW: !0 }),
          a,
          {
            cN: "string",
            c: i,
            v: [
              { b: "q[qwxr]?\\s*\\(", e: "\\)", r: 5 },
              { b: "q[qwxr]?\\s*\\[", e: "\\]", r: 5 },
              { b: "q[qwxr]?\\s*\\{", e: "\\}", r: 5 },
              { b: "q[qwxr]?\\s*\\|", e: "\\|", r: 5 },
              { b: "q[qwxr]?\\s*\\<", e: "\\>", r: 5 },
              { b: "qw\\s+q", e: "q", r: 5 },
              { b: "'", e: "'", c: [e.BE] },
              { b: '"', e: '"' },
              { b: "`", e: "`", c: [e.BE] },
              { b: "{\\w+}", c: [], r: 0 },
              { b: "-?\\w+\\s*\\=\\>", c: [], r: 0 },
            ],
          },
          { cN: "number", b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b", r: 0 },
          {
            b: "(\\/\\/|" + e.RSR + "|\\b(split|return|print|reverse|grep)\\b)\\s*",
            k: "split return print reverse grep",
            r: 0,
            c: [
              e.HCM,
              { cN: "regexp", b: "(s|tr|y)/(\\\\.|[^/])*/(\\\\.|[^/])*/[a-z]*", r: 10 },
              { cN: "regexp", b: "(m|qr)?/", e: "/[a-z]*", c: [e.BE], r: 0 },
            ],
          },
          { cN: "function", bK: "sub", e: "(\\s*\\(.*?\\))?[;{]", eE: !0, r: 5, c: [e.TM] },
          { b: "-\\w\\b", r: 0 },
          { b: "^__DATA__$", e: "^__END__$", sL: "mojolicious", c: [{ b: "^@@.*", e: "$", cN: "comment" }] },
        ];
      return ((r.c = s), (a.c = s), { aliases: ["pl", "pm"], l: /[\w\.]+/, k: t, c: s });
    }),
    e.registerLanguage("php", function (e) {
      var t = { b: "\\$+[a-zA-Z_-ÿ][a-zA-Z0-9_-ÿ]*" },
        r = { cN: "meta", b: /<\?(php)?|\?>/ },
        a = {
          cN: "string",
          c: [e.BE, r],
          v: [{ b: 'b"', e: '"' }, { b: "b'", e: "'" }, e.inherit(e.ASM, { i: null }), e.inherit(e.QSM, { i: null })],
        },
        n = { v: [e.BNM, e.CNM] };
      return {
        aliases: ["php3", "php4", "php5", "php6"],
        cI: !0,
        k: "and include_once list abstract global private echo interface as static endswitch array null if endwhile or const for endforeach self var while isset public protected exit foreach throw elseif include __FILE__ empty require_once do xor return parent clone use __CLASS__ __LINE__ else break print eval new catch __METHOD__ case exception default die require __FUNCTION__ enddeclare final try switch continue endfor endif declare unset true false trait goto instanceof insteadof __DIR__ __NAMESPACE__ yield finally",
        c: [
          e.HCM,
          e.C("//", "$", { c: [r] }),
          e.C("/\\*", "\\*/", { c: [{ cN: "doctag", b: "@[A-Za-z]+" }] }),
          e.C("__halt_compiler.+?;", !1, { eW: !0, k: "__halt_compiler", l: e.UIR }),
          {
            cN: "string",
            b: /<<<['"]?\w+['"]?$/,
            e: /^\w+;?$/,
            c: [e.BE, { cN: "subst", v: [{ b: /\$\w+/ }, { b: /\{\$/, e: /\}/ }] }],
          },
          r,
          { cN: "keyword", b: /\$this\b/ },
          t,
          { b: /(::|->)+[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/ },
          {
            cN: "function",
            bK: "function",
            e: /[;{]/,
            eE: !0,
            i: "\\$|\\[|%",
            c: [e.UTM, { cN: "params", b: "\\(", e: "\\)", c: ["self", t, e.CBCM, a, n] }],
          },
          {
            cN: "class",
            bK: "class interface",
            e: "{",
            eE: !0,
            i: /[:\(\$"]/,
            c: [{ bK: "extends implements" }, e.UTM],
          },
          { bK: "namespace", e: ";", i: /[\.']/, c: [e.UTM] },
          { bK: "use", e: ";", c: [e.UTM] },
          { b: "=>" },
          a,
          n,
        ],
      };
    }),
    e.registerLanguage("python", function (e) {
      var t = {
          keyword:
            "and elif is global as in if from raise for except finally print import pass return exec else break not with class assert yield try while continue del or def lambda async await nonlocal|10 None True False",
          built_in: "Ellipsis NotImplemented",
        },
        r = { cN: "meta", b: /^(>>>|\.\.\.) / },
        a = { cN: "subst", b: /\{/, e: /\}/, k: t, i: /#/ },
        n = {
          cN: "string",
          c: [e.BE],
          v: [
            { b: /(u|b)?r?'''/, e: /'''/, c: [r], r: 10 },
            { b: /(u|b)?r?"""/, e: /"""/, c: [r], r: 10 },
            { b: /(fr|rf|f)'''/, e: /'''/, c: [r, a] },
            { b: /(fr|rf|f)"""/, e: /"""/, c: [r, a] },
            { b: /(u|r|ur)'/, e: /'/, r: 10 },
            { b: /(u|r|ur)"/, e: /"/, r: 10 },
            { b: /(b|br)'/, e: /'/ },
            { b: /(b|br)"/, e: /"/ },
            { b: /(fr|rf|f)'/, e: /'/, c: [a] },
            { b: /(fr|rf|f)"/, e: /"/, c: [a] },
            e.ASM,
            e.QSM,
          ],
        },
        i = {
          cN: "number",
          r: 0,
          v: [{ b: e.BNR + "[lLjJ]?" }, { b: "\\b(0o[0-7]+)[lLjJ]?" }, { b: e.CNR + "[lLjJ]?" }],
        },
        s = { cN: "params", b: /\(/, e: /\)/, c: ["self", r, i, n] };
      return (
        (a.c = [n, i, r]),
        {
          aliases: ["py", "gyp"],
          k: t,
          i: /(<\/|->|\?)|=>/,
          c: [
            r,
            i,
            n,
            e.HCM,
            {
              v: [
                { cN: "function", bK: "def" },
                { cN: "class", bK: "class" },
              ],
              e: /:/,
              i: /[${=;\n,]/,
              c: [e.UTM, s, { b: /->/, eW: !0, k: "None" }],
            },
            { cN: "meta", b: /^[\t ]*@/, e: /$/ },
            { b: /\b(print|exec)\(/ },
          ],
        }
      );
    }),
    e.registerLanguage("ruby", function (e) {
      var t = "[a-zA-Z_]\\w*[!?=]?|[-+~]\\@|<<|>>|=~|===?|<=>|[<>]=?|\\*\\*|[-/+%^&*~`|]|\\[\\]=?",
        r = {
          keyword:
            "and then defined module in return redo if BEGIN retry end for self when next until do begin unless END rescue else break undef not super class case require yield alias while ensure elsif or include attr_reader attr_writer attr_accessor",
          literal: "true false nil",
        },
        a = { cN: "doctag", b: "@[A-Za-z]+" },
        n = { b: "#<", e: ">" },
        i = [e.C("#", "$", { c: [a] }), e.C("^\\=begin", "^\\=end", { c: [a], r: 10 }), e.C("^__END__", "\\n$")],
        s = { cN: "subst", b: "#\\{", e: "}", k: r },
        c = {
          cN: "string",
          c: [e.BE, s],
          v: [
            { b: /'/, e: /'/ },
            { b: /"/, e: /"/ },
            { b: /`/, e: /`/ },
            { b: "%[qQwWx]?\\(", e: "\\)" },
            { b: "%[qQwWx]?\\[", e: "\\]" },
            { b: "%[qQwWx]?{", e: "}" },
            { b: "%[qQwWx]?<", e: ">" },
            { b: "%[qQwWx]?/", e: "/" },
            { b: "%[qQwWx]?%", e: "%" },
            { b: "%[qQwWx]?-", e: "-" },
            { b: "%[qQwWx]?\\|", e: "\\|" },
            { b: /\B\?(\\\d{1,3}|\\x[A-Fa-f0-9]{1,2}|\\u[A-Fa-f0-9]{4}|\\?\S)\b/ },
            { b: /<<(-?)\w+$/, e: /^\s*\w+$/ },
          ],
        },
        o = { cN: "params", b: "\\(", e: "\\)", endsParent: !0, k: r },
        l = [
          c,
          n,
          {
            cN: "class",
            bK: "class module",
            e: "$|;",
            i: /=/,
            c: [
              e.inherit(e.TM, { b: "[A-Za-z_]\\w*(::\\w+)*(\\?|\\!)?" }),
              { b: "<\\s*", c: [{ b: "(" + e.IR + "::)?" + e.IR }] },
            ].concat(i),
          },
          { cN: "function", bK: "def", e: "$|;", c: [e.inherit(e.TM, { b: t }), o].concat(i) },
          { b: e.IR + "::" },
          { cN: "symbol", b: e.UIR + "(\\!|\\?)?:", r: 0 },
          { cN: "symbol", b: ":(?!\\s)", c: [c, { b: t }], r: 0 },
          { cN: "number", b: "(\\b0[0-7_]+)|(\\b0x[0-9a-fA-F_]+)|(\\b[1-9][0-9_]*(\\.[0-9_]+)?)|[0_]\\b", r: 0 },
          { b: "(\\$\\W)|((\\$|\\@\\@?)(\\w+))" },
          { cN: "params", b: /\|/, e: /\|/, k: r },
          {
            b: "(" + e.RSR + "|unless)\\s*",
            k: "unless",
            c: [
              n,
              {
                cN: "regexp",
                c: [e.BE, s],
                i: /\n/,
                v: [
                  { b: "/", e: "/[a-z]*" },
                  { b: "%r{", e: "}[a-z]*" },
                  { b: "%r\\(", e: "\\)[a-z]*" },
                  { b: "%r!", e: "![a-z]*" },
                  { b: "%r\\[", e: "\\][a-z]*" },
                ],
              },
            ].concat(i),
            r: 0,
          },
        ].concat(i);
      ((s.c = l), (o.c = l));
      var u = "[>?]>",
        d = "[\\w#]+\\(\\w+\\):\\d+:\\d+>",
        b = "(\\w+-)?\\d+\\.\\d+\\.\\d(p\\d+)?[^>]+>",
        p = [
          { b: /^\s*=>/, starts: { e: "$", c: l } },
          { cN: "meta", b: "^(" + u + "|" + d + "|" + b + ")", starts: { e: "$", c: l } },
        ];
      return { aliases: ["rb", "gemspec", "podspec", "thor", "irb"], k: r, i: /\/\*/, c: i.concat(p).concat(l) };
    }),
    e.registerLanguage("shell", function (e) {
      return {
        aliases: ["console"],
        c: [{ cN: "meta", b: "^\\s{0,3}[\\w\\d\\[\\]()@-]*[>%$#]", starts: { e: "$", sL: "bash" } }],
      };
    }),
    e.registerLanguage("sql", function (e) {
      var t = e.C("--", "$");
      return {
        cI: !0,
        i: /[<>{}*#]/,
        c: [
          {
            bK: "begin end start commit rollback savepoint lock alter create drop rename call delete do handler insert load replace select truncate update set show pragma grant merge describe use explain help declare prepare execute deallocate release unlock purge reset change stop analyze cache flush optimize repair kill install uninstall checksum restore check backup revoke comment",
            e: /;/,
            eW: !0,
            l: /[\w\.]+/,
            k: {
              keyword:
                "abort abs absolute acc acce accep accept access accessed accessible account acos action activate add addtime admin administer advanced advise aes_decrypt aes_encrypt after agent aggregate ali alia alias allocate allow alter always analyze ancillary and any anydata anydataset anyschema anytype apply archive archived archivelog are as asc ascii asin assembly assertion associate asynchronous at atan atn2 attr attri attrib attribu attribut attribute attributes audit authenticated authentication authid authors auto autoallocate autodblink autoextend automatic availability avg backup badfile basicfile before begin beginning benchmark between bfile bfile_base big bigfile bin binary_double binary_float binlog bit_and bit_count bit_length bit_or bit_xor bitmap blob_base block blocksize body both bound buffer_cache buffer_pool build bulk by byte byteordermark bytes cache caching call calling cancel capacity cascade cascaded case cast catalog category ceil ceiling chain change changed char_base char_length character_length characters characterset charindex charset charsetform charsetid check checksum checksum_agg child choose chr chunk class cleanup clear client clob clob_base clone close cluster_id cluster_probability cluster_set clustering coalesce coercibility col collate collation collect colu colum column column_value columns columns_updated comment commit compact compatibility compiled complete composite_limit compound compress compute concat concat_ws concurrent confirm conn connec connect connect_by_iscycle connect_by_isleaf connect_by_root connect_time connection consider consistent constant constraint constraints constructor container content contents context contributors controlfile conv convert convert_tz corr corr_k corr_s corresponding corruption cos cost count count_big counted covar_pop covar_samp cpu_per_call cpu_per_session crc32 create creation critical cross cube cume_dist curdate current current_date current_time current_timestamp current_user cursor curtime customdatum cycle data database databases datafile datafiles datalength date_add date_cache date_format date_sub dateadd datediff datefromparts datename datepart datetime2fromparts day day_to_second dayname dayofmonth dayofweek dayofyear days db_role_change dbtimezone ddl deallocate declare decode decompose decrement decrypt deduplicate def defa defau defaul default defaults deferred defi defin define degrees delayed delegate delete delete_all delimited demand dense_rank depth dequeue des_decrypt des_encrypt des_key_file desc descr descri describ describe descriptor deterministic diagnostics difference dimension direct_load directory disable disable_all disallow disassociate discardfile disconnect diskgroup distinct distinctrow distribute distributed div do document domain dotnet double downgrade drop dumpfile duplicate duration each edition editionable editions element ellipsis else elsif elt empty enable enable_all enclosed encode encoding encrypt end end-exec endian enforced engine engines enqueue enterprise entityescaping eomonth error errors escaped evalname evaluate event eventdata events except exception exceptions exchange exclude excluding execu execut execute exempt exists exit exp expire explain export export_set extended extent external external_1 external_2 externally extract failed failed_login_attempts failover failure far fast feature_set feature_value fetch field fields file file_name_convert filesystem_like_logging final finish first first_value fixed flash_cache flashback floor flush following follows for forall force form forma format found found_rows freelist freelists freepools fresh from from_base64 from_days ftp full function general generated get get_format get_lock getdate getutcdate global global_name globally go goto grant grants greatest group group_concat group_id grouping grouping_id groups gtid_subtract guarantee guard handler hash hashkeys having hea head headi headin heading heap help hex hierarchy high high_priority hosts hour http id ident_current ident_incr ident_seed identified identity idle_time if ifnull ignore iif ilike ilm immediate import in include including increment index indexes indexing indextype indicator indices inet6_aton inet6_ntoa inet_aton inet_ntoa infile initial initialized initially initrans inmemory inner innodb input insert install instance instantiable instr interface interleaved intersect into invalidate invisible is is_free_lock is_ipv4 is_ipv4_compat is_not is_not_null is_used_lock isdate isnull isolation iterate java join json json_exists keep keep_duplicates key keys kill language large last last_day last_insert_id last_value lax lcase lead leading least leaves left len lenght length less level levels library like like2 like4 likec limit lines link list listagg little ln load load_file lob lobs local localtime localtimestamp locate locator lock locked log log10 log2 logfile logfiles logging logical logical_reads_per_call logoff logon logs long loop low low_priority lower lpad lrtrim ltrim main make_set makedate maketime managed management manual map mapping mask master master_pos_wait match matched materialized max maxextents maximize maxinstances maxlen maxlogfiles maxloghistory maxlogmembers maxsize maxtrans md5 measures median medium member memcompress memory merge microsecond mid migration min minextents minimum mining minus minute minvalue missing mod mode model modification modify module monitoring month months mount move movement multiset mutex name name_const names nan national native natural nav nchar nclob nested never new newline next nextval no no_write_to_binlog noarchivelog noaudit nobadfile nocheck nocompress nocopy nocycle nodelay nodiscardfile noentityescaping noguarantee nokeep nologfile nomapping nomaxvalue nominimize nominvalue nomonitoring none noneditionable nonschema noorder nopr nopro noprom nopromp noprompt norely noresetlogs noreverse normal norowdependencies noschemacheck noswitch not nothing notice notrim novalidate now nowait nth_value nullif nulls num numb numbe nvarchar nvarchar2 object ocicoll ocidate ocidatetime ociduration ociinterval ociloblocator ocinumber ociref ocirefcursor ocirowid ocistring ocitype oct octet_length of off offline offset oid oidindex old on online only opaque open operations operator optimal optimize option optionally or oracle oracle_date oradata ord ordaudio orddicom orddoc order ordimage ordinality ordvideo organization orlany orlvary out outer outfile outline output over overflow overriding package pad parallel parallel_enable parameters parent parse partial partition partitions pascal passing password password_grace_time password_lock_time password_reuse_max password_reuse_time password_verify_function patch path patindex pctincrease pctthreshold pctused pctversion percent percent_rank percentile_cont percentile_disc performance period period_add period_diff permanent physical pi pipe pipelined pivot pluggable plugin policy position post_transaction pow power pragma prebuilt precedes preceding precision prediction prediction_cost prediction_details prediction_probability prediction_set prepare present preserve prior priority private private_sga privileges procedural procedure procedure_analyze processlist profiles project prompt protection public publishingservername purge quarter query quick quiesce quota quotename radians raise rand range rank raw read reads readsize rebuild record records recover recovery recursive recycle redo reduced ref reference referenced references referencing refresh regexp_like register regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy reject rekey relational relative relaylog release release_lock relies_on relocate rely rem remainder rename repair repeat replace replicate replication required reset resetlogs resize resource respect restore restricted result result_cache resumable resume retention return returning returns reuse reverse revoke right rlike role roles rollback rolling rollup round row row_count rowdependencies rowid rownum rows rtrim rules safe salt sample save savepoint sb1 sb2 sb4 scan schema schemacheck scn scope scroll sdo_georaster sdo_topo_geometry search sec_to_time second section securefile security seed segment select self sequence sequential serializable server servererror session session_user sessions_per_user set sets settings sha sha1 sha2 share shared shared_pool short show shrink shutdown si_averagecolor si_colorhistogram si_featurelist si_positionalcolor si_stillimage si_texture siblings sid sign sin size size_t sizes skip slave sleep smalldatetimefromparts smallfile snapshot some soname sort soundex source space sparse spfile split sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_small_result sql_variant_property sqlcode sqldata sqlerror sqlname sqlstate sqrt square standalone standby start starting startup statement static statistics stats_binomial_test stats_crosstab stats_ks_test stats_mode stats_mw_test stats_one_way_anova stats_t_test_ stats_t_test_indep stats_t_test_one stats_t_test_paired stats_wsr_test status std stddev stddev_pop stddev_samp stdev stop storage store stored str str_to_date straight_join strcmp strict string struct stuff style subdate subpartition subpartitions substitutable substr substring subtime subtring_index subtype success sum suspend switch switchoffset switchover sync synchronous synonym sys sys_xmlagg sysasm sysaux sysdate sysdatetimeoffset sysdba sysoper system system_user sysutcdatetime table tables tablespace tan tdo template temporary terminated tertiary_weights test than then thread through tier ties time time_format time_zone timediff timefromparts timeout timestamp timestampadd timestampdiff timezone_abbr timezone_minute timezone_region to to_base64 to_date to_days to_seconds todatetimeoffset trace tracking transaction transactional translate translation treat trigger trigger_nestlevel triggers trim truncate try_cast try_convert try_parse type ub1 ub2 ub4 ucase unarchived unbounded uncompress under undo unhex unicode uniform uninstall union unique unix_timestamp unknown unlimited unlock unpivot unrecoverable unsafe unsigned until untrusted unusable unused update updated upgrade upped upper upsert url urowid usable usage use use_stored_outlines user user_data user_resources users using utc_date utc_timestamp uuid uuid_short validate validate_password_strength validation valist value values var var_samp varcharc vari varia variab variabl variable variables variance varp varraw varrawc varray verify version versions view virtual visible void wait wallet warning warnings week weekday weekofyear wellformed when whene whenev wheneve whenever where while whitespace with within without work wrapped xdb xml xmlagg xmlattributes xmlcast xmlcolattval xmlelement xmlexists xmlforest xmlindex xmlnamespaces xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltype xor year year_to_month years yearweek",
              literal: "true false null",
              built_in:
                "array bigint binary bit blob boolean char character date dec decimal float int int8 integer interval number numeric real record serial serial8 smallint text varchar varying void",
            },
            c: [
              { cN: "string", b: "'", e: "'", c: [e.BE, { b: "''" }] },
              { cN: "string", b: '"', e: '"', c: [e.BE, { b: '""' }] },
              { cN: "string", b: "`", e: "`", c: [e.BE] },
              e.CNM,
              e.CBCM,
              t,
            ],
          },
          e.CBCM,
          t,
        ],
      };
    }),
    e
  );
});
