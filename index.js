!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e() : "function" == typeof define && define.amd ? define(e) : e()
}(0, function() {
    "use strict";
    "undefined" != typeof document && function(t) {
        var e;
        function n() {
            e || (e = !0,
            t())
        }
        ["interactive", "complete"].indexOf(document.readyState) >= 0 ? t() : (e = !1,
        document.addEventListener("DOMContentLoaded", n, !1),
        window.addEventListener("load", n, !1))
    }(function() {
        var t = !0
          , e = !1
          , n = null
          , o = {
            text: !0,
            search: !0,
            url: !0,
            tel: !0,
            email: !0,
            password: !0,
            number: !0,
            date: !0,
            month: !0,
            week: !0,
            time: !0,
            datetime: !0,
            "datetime-local": !0
        };
        function r(t) {
            return !!(t && t !== document && "HTML" !== t.nodeName && "BODY" !== t.nodeName && "classList"in t && "contains"in t.classList)
        }
        function i(t) {
            "" !== t.getAttribute("is-focus-visible") && t.setAttribute("is-focus-visible", "")
        }
        function u(e) {
            t = !1
        }
        function c() {
            document.addEventListener("mousemove", s),
            document.addEventListener("mousedown", s),
            document.addEventListener("mouseup", s),
            document.addEventListener("pointermove", s),
            document.addEventListener("pointerdown", s),
            document.addEventListener("pointerup", s),
            document.addEventListener("touchmove", s),
            document.addEventListener("touchstart", s),
            document.addEventListener("touchend", s)
        }
        function s(e) {
            "html" !== e.target.nodeName.toLowerCase() && (t = !1,
            document.removeEventListener("mousemove", s),
            document.removeEventListener("mousedown", s),
            document.removeEventListener("mouseup", s),
            document.removeEventListener("pointermove", s),
            document.removeEventListener("pointerdown", s),
            document.removeEventListener("pointerup", s),
            document.removeEventListener("touchmove", s),
            document.removeEventListener("touchstart", s),
            document.removeEventListener("touchend", s))
        }
        document.addEventListener("keydown", function(e) {
            r(document.activeElement) && i(document.activeElement),
            t = !0
        }, !0),
        document.addEventListener("mousedown", u, !0),
        document.addEventListener("pointerdown", u, !0),
        document.addEventListener("touchstart", u, !0),
        document.addEventListener("focus", function(e) {
            var n, u, c;
            r(e.target) && (t || (n = e.target,
            u = n.type,
            "INPUT" == (c = n.tagName) && o[u] && !n.readOnly || "TEXTAREA" == c && !n.readOnly || n.isContentEditable)) && i(e.target)
        }, !0),
        document.addEventListener("blur", function(t) {
            var o;
            r(t.target) && t.target.hasAttribute("is-focus-visible") && (e = !0,
            window.clearTimeout(n),
            n = window.setTimeout(function() {
                e = !1,
                window.clearTimeout(n)
            }, 100),
            "" === (o = t.target).getAttribute("is-focus-visible") && o.removeAttribute("is-focus-visible"))
        }, !0),
        document.addEventListener("visibilitychange", function(n) {
            "hidden" == document.visibilityState && (e && (t = !0),
            c())
        }, !0),
        c(),
        document.documentElement.setAttribute("js-focus-visible-polyfill-available", "")
    })
}),
window.Debounce = ((t,e)=>{
    let n, o = -1;
    return function() {
        clearTimeout(n);
        const r = Date.now() - o;
        r > e ? t() : n = setTimeout(e=>t(), e - r),
        o = Date.now()
    }
}
);
const textBalancer = function() {
    var t, e, n, o, r = [], i = function() {
        var t, e;
        for (e = 0; e < r.length; e += 1)
            t = r[e],
            s(t) && (t.style.maxWidth = "",
            c(t, t.clientHeight, 0, t.clientWidth))
    }, u = (t = function() {
        i()
    }
    ,
    e = 100,
    function() {
        var r = this
          , i = arguments
          , u = n && !o;
        clearTimeout(o),
        o = setTimeout(function() {
            o = null,
            n || t.apply(r, i)
        }, e),
        u && t.apply(r, i)
    }
    );
    function c(t, e, n, o) {
        var r;
        n >= o ? t.style.maxWidth = o + "px" : (r = (n + o) / 2,
        t.style.maxWidth = r + "px",
        t.clientHeight > e ? c(t, e, r + 1, o) : c(t, e, n + 1, r))
    }
    window.addEventListener("resize", u);
    var s = function(t) {
        var e, n, o, r, i;
        return i = t.innerHTML,
        10,
        o = t.innerHTML.split(" "),
        (r = document.createElement("span")).id = "element-first-word",
        r.innerHTML = o[0],
        o = o.slice(1),
        t.innerHTML = "",
        t.appendChild(r),
        t.innerHTML += " " + o.join(" "),
        e = (r = document.getElementById("element-first-word")).offsetHeight,
        n = t.offsetHeight,
        t.innerHTML = i,
        n - 10 > e
    };
    return {
        initialize: function(t) {
            r = t,
            i()
        }
    }
}();
!function(t) {
    if ("object" == typeof exports && "undefined" != typeof module)
        module.exports = t();
    else if ("function" == typeof define && define.amd)
        define([], t);
    else {
        ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).basicScroll = t()
    }
}(function() {
    return function() {
        return function t(e, n, o) {
            function r(u, c) {
                if (!n[u]) {
                    if (!e[u]) {
                        var s = "function" == typeof require && require;
                        if (!c && s)
                            return s(u, !0);
                        if (i)
                            return i(u, !0);
                        var a = new Error("Cannot find module '" + u + "'");
                        throw a.code = "MODULE_NOT_FOUND",
                        a
                    }
                    var d = n[u] = {
                        exports: {}
                    };
                    e[u][0].call(d.exports, function(t) {
                        return r(e[u][1][t] || t)
                    }, d, d.exports, t, e, n, o)
                }
                return n[u].exports
            }
            for (var i = "function" == typeof require && require, u = 0; u < o.length; u++)
                r(o[u]);
            return r
        }
    }()({
        1: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
            }
        }
        , {}],
        2: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            }
        }
        , {}],
        3: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                var e = 1.70158;
                return --t * t * ((e + 1) * t + e) + 1
            }
        }
        , {}],
        4: [function(t, e, n) {
            "use strict";
            var o = t("./bounce-out");
            e.exports = function(t) {
                return t < .5 ? .5 * (1 - o(1 - 2 * t)) : .5 * o(2 * t - 1) + .5
            }
        }
        , {
            "./bounce-out": 6
        }],
        5: [function(t, e, n) {
            "use strict";
            var o = t("./bounce-out");
            e.exports = function(t) {
                return 1 - o(1 - t)
            }
        }
        , {
            "./bounce-out": 6
        }],
        6: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                var e = t * t;
                return t < 4 / 11 ? 7.5625 * e : t < 8 / 11 ? 9.075 * e - 9.9 * t + 3.4 : t < .9 ? 4356 / 361 * e - 35442 / 1805 * t + 16061 / 1805 : 10.8 * t * t - 20.52 * t + 10.72
            }
        }
        , {}],
        7: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }
        }
        , {}],
        8: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return 1 - Math.sqrt(1 - t * t)
            }
        }
        , {}],
        9: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return Math.sqrt(1 - --t * t)
            }
        }
        , {}],
        10: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return t < .5 ? 4 * t * t * t : .5 * Math.pow(2 * t - 2, 3) + 1
            }
        }
        , {}],
        11: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return t * t * t
            }
        }
        , {}],
        12: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                var e = t - 1;
                return e * e * e + 1
            }
        }
        , {}],
        13: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return t < .5 ? .5 * Math.sin(13 * Math.PI / 2 * 2 * t) * Math.pow(2, 10 * (2 * t - 1)) : .5 * Math.sin(-13 * Math.PI / 2 * (2 * t - 1 + 1)) * Math.pow(2, -10 * (2 * t - 1)) + 1
            }
        }
        , {}],
        14: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return Math.sin(13 * t * Math.PI / 2) * Math.pow(2, 10 * (t - 1))
            }
        }
        , {}],
        15: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return Math.sin(-13 * (t + 1) * Math.PI / 2) * Math.pow(2, -10 * t) + 1
            }
        }
        , {}],
        16: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return 0 === t || 1 === t ? t : t < .5 ? .5 * Math.pow(2, 20 * t - 10) : -.5 * Math.pow(2, 10 - 20 * t) + 1
            }
        }
        , {}],
        17: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return 0 === t ? t : Math.pow(2, 10 * (t - 1))
            }
        }
        , {}],
        18: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return 1 === t ? t : 1 - Math.pow(2, -10 * t)
            }
        }
        , {}],
        19: [function(t, e, n) {
            "use strict";
            e.exports = {
                backInOut: t("./back-in-out"),
                backIn: t("./back-in"),
                backOut: t("./back-out"),
                bounceInOut: t("./bounce-in-out"),
                bounceIn: t("./bounce-in"),
                bounceOut: t("./bounce-out"),
                circInOut: t("./circ-in-out"),
                circIn: t("./circ-in"),
                circOut: t("./circ-out"),
                cubicInOut: t("./cubic-in-out"),
                cubicIn: t("./cubic-in"),
                cubicOut: t("./cubic-out"),
                elasticInOut: t("./elastic-in-out"),
                elasticIn: t("./elastic-in"),
                elasticOut: t("./elastic-out"),
                expoInOut: t("./expo-in-out"),
                expoIn: t("./expo-in"),
                expoOut: t("./expo-out"),
                linear: t("./linear"),
                quadInOut: t("./quad-in-out"),
                quadIn: t("./quad-in"),
                quadOut: t("./quad-out"),
                quartInOut: t("./quart-in-out"),
                quartIn: t("./quart-in"),
                quartOut: t("./quart-out"),
                quintInOut: t("./quint-in-out"),
                quintIn: t("./quint-in"),
                quintOut: t("./quint-out"),
                sineInOut: t("./sine-in-out"),
                sineIn: t("./sine-in"),
                sineOut: t("./sine-out")
            }
        }
        , {
            "./back-in": 2,
            "./back-in-out": 1,
            "./back-out": 3,
            "./bounce-in": 5,
            "./bounce-in-out": 4,
            "./bounce-out": 6,
            "./circ-in": 8,
            "./circ-in-out": 7,
            "./circ-out": 9,
            "./cubic-in": 11,
            "./cubic-in-out": 10,
            "./cubic-out": 12,
            "./elastic-in": 14,
            "./elastic-in-out": 13,
            "./elastic-out": 15,
            "./expo-in": 17,
            "./expo-in-out": 16,
            "./expo-out": 18,
            "./linear": 20,
            "./quad-in": 22,
            "./quad-in-out": 21,
            "./quad-out": 23,
            "./quart-in": 25,
            "./quart-in-out": 24,
            "./quart-out": 26,
            "./quint-in": 28,
            "./quint-in-out": 27,
            "./quint-out": 29,
            "./sine-in": 31,
            "./sine-in-out": 30,
            "./sine-out": 32
        }],
        20: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return t
            }
        }
        , {}],
        21: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return (t /= .5) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            }
        }
        , {}],
        22: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return t * t
            }
        }
        , {}],
        23: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return -t * (t - 2)
            }
        }
        , {}],
        24: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return t < .5 ? 8 * Math.pow(t, 4) : -8 * Math.pow(t - 1, 4) + 1
            }
        }
        , {}],
        25: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return Math.pow(t, 4)
            }
        }
        , {}],
        26: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return Math.pow(t - 1, 3) * (1 - t) + 1
            }
        }
        , {}],
        27: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            }
        }
        , {}],
        28: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return t * t * t * t * t
            }
        }
        , {}],
        29: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return --t * t * t * t * t + 1
            }
        }
        , {}],
        30: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
            }
        }
        , {}],
        31: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                var e = Math.cos(t * Math.PI * .5);
                return Math.abs(e) < 1e-14 ? 1 : 1 - e
            }
        }
        , {}],
        32: [function(t, e, n) {
            "use strict";
            e.exports = function(t) {
                return Math.sin(t * Math.PI / 2)
            }
        }
        , {}],
        33: [function(t, e, n) {
            "use strict";
            e.exports = function(t, e) {
                e || (e = [0, ""]),
                t = String(t);
                var n = parseFloat(t, 10);
                return e[0] = n,
                e[1] = t.match(/[\d.\-\+]*\s*(.*)/)[1] || "",
                e
            }
        }
        , {}],
        34: [function(t, e, n) {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }),
            n.create = void 0;
            var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
              , r = u(t("parse-unit"))
              , i = u(t("eases"));
            function u(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var c, s, a, d = [], f = "undefined" != typeof window, l = document.scrollingElement || document.documentElement, m = (n.setScrollingElement = function(t) {
                l = t
            }
            ,
            function() {
                return l.scrollTop
            }
            ), p = function(t) {
                return !1 === isNaN((0,
                r.default)(t)[0])
            }, h = function(t) {
                var e = (0,
                r.default)(t);
                return {
                    value: e[0],
                    unit: e[1]
                }
            }, v = function(t) {
                return null !== String(t).match(/^[a-z]+-[a-z]+$/)
            }, b = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : m()
                  , o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : window.innerHeight || window.outerHeight
                  , r = e.getBoundingClientRect()
                  , i = t.match(/^[a-z]+/)[0]
                  , u = t.match(/[a-z]+$/)[0]
                  , c = 0;
                return "top" === u && (c -= 0),
                "middle" === u && (c -= o / 2),
                "bottom" === u && (c -= o),
                "top" === i && (c += r.top + n),
                "middle" === i && (c += r.top + n + r.height / 2),
                "bottom" === i && (c += r.top + n + r.height),
                c + "px"
            }, w = function(t) {
                var e, n, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : m(), r = t.getData(), i = r.to.value - r.from.value, u = (o - r.from.value) / (i / 100), c = Math.min(Math.max(u, 0), 100), s = (e = r.direct,
                n = {
                    global: document.documentElement,
                    elem: r.elem,
                    direct: r.direct
                },
                !0 === e ? n.elem : e instanceof HTMLElement == 1 ? n.direct : n.global), a = Object.keys(r.props).reduce(function(t, e) {
                    var n = r.props[e]
                      , o = n.from.unit || n.to.unit
                      , i = n.from.value - n.to.value
                      , u = n.timing(c / 100)
                      , s = n.from.value - i * u
                      , a = Math.round(1e4 * s) / 1e4;
                    return t[e] = a + o,
                    t
                }, {}), d = u < 0 || u > 100;
                return !0 === (u >= 0 && u <= 100) && r.inside(t, u, a),
                !0 === d && r.outside(t, u, a),
                {
                    elem: s,
                    props: a
                }
            }, y = function(t, e) {
                Object.keys(e).forEach(function(n) {
                    return function(t, e) {
                        t.style.setProperty(e.key, e.value)
                    }(t, {
                        key: n,
                        value: e[n]
                    })
                })
            };
            n.create = function(t) {
                var e = null
                  , n = !1
                  , r = {
                    isActive: function() {
                        return n
                    },
                    getData: function() {
                        return e
                    },
                    calculate: function() {
                        e = function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            if (null == (t = Object.assign({}, t)).inside && (t.inside = function() {}
                            ),
                            null == t.outside && (t.outside = function() {}
                            ),
                            null == t.direct && (t.direct = !1),
                            null == t.track && (t.track = !0),
                            null == t.props && (t.props = {}),
                            null == t.from)
                                throw new Error("Missing property `from`");
                            if (null == t.to)
                                throw new Error("Missing property `to`");
                            if ("function" != typeof t.inside)
                                throw new Error("Property `inside` must be undefined or a function");
                            if ("function" != typeof t.outside)
                                throw new Error("Property `outside` must be undefined or a function");
                            if ("boolean" != typeof t.direct && t.direct instanceof HTMLElement == 0)
                                throw new Error("Property `direct` must be undefined, a boolean or a DOM element/node");
                            if (!0 === t.direct && null == t.elem)
                                throw new Error("Property `elem` is required when `direct` is true");
                            if ("boolean" != typeof t.track)
                                throw new Error("Property `track` must be undefined or a boolean");
                            if ("object" !== o(t.props))
                                throw new Error("Property `props` must be undefined or an object");
                            if (null == t.elem) {
                                if (!1 === p(t.from))
                                    throw new Error("Property `from` must be a absolute value when no `elem` has been provided");
                                if (!1 === p(t.to))
                                    throw new Error("Property `to` must be a absolute value when no `elem` has been provided")
                            } else
                                !0 === v(t.from) && (t.from = b(t.from, t.elem)),
                                !0 === v(t.to) && (t.to = b(t.to, t.elem));
                            return t.from = h(t.from),
                            t.to = h(t.to),
                            t.props = Object.keys(t.props).reduce(function(e, n) {
                                var o = Object.assign({}, t.props[n]);
                                if (!1 === p(o.from))
                                    throw new Error("Property `from` of prop must be a absolute value");
                                if (!1 === p(o.to))
                                    throw new Error("Property `from` of prop must be a absolute value");
                                if (o.from = h(o.from),
                                o.to = h(o.to),
                                null == o.timing && (o.timing = i.default.linear),
                                "string" != typeof o.timing && "function" != typeof o.timing)
                                    throw new Error("Property `timing` of prop must be undefined, a string or a function");
                                if ("string" == typeof o.timing && null == i.default[o.timing])
                                    throw new Error("Unknown timing for property `timing` of prop");
                                return "string" == typeof o.timing && (o.timing = i.default[o.timing]),
                                e[n] = o,
                                e
                            }, {}),
                            t
                        }(t)
                    },
                    update: function() {
                        var t = w(r)
                          , e = t.elem
                          , n = t.props;
                        return y(e, n),
                        n
                    },
                    start: function() {
                        n = !0
                    },
                    stop: function() {
                        n = !1
                    },
                    destroy: function() {
                        d[u] = void 0
                    }
                }
                  , u = d.push(r) - 1;
                return r.calculate(),
                r
            }
            ;
            !0 === f ? (!function t(e, n) {
                var o = function() {
                    requestAnimationFrame(function() {
                        return t(e, n)
                    })
                }
                  , r = function(t) {
                    return t.filter(function(t) {
                        return null != t && t.isActive()
                    })
                }(d);
                if (0 === r.length)
                    return o();
                var i = m();
                if (n === i)
                    return o();
                n = i,
                r.map(function(t) {
                    return w(t, i)
                }).forEach(function(t) {
                    var e = t.elem
                      , n = t.props;
                    return y(e, n)
                }),
                o()
            }(),
            window.addEventListener("resize", (c = function() {
                (function(t) {
                    return t.filter(function(t) {
                        return null != t && t.getData().track
                    })
                }
                )(d).forEach(function(t) {
                    t.calculate(),
                    t.update()
                })
            }
            ,
            s = 50,
            a = null,
            function() {
                for (var t = arguments.length, e = Array(t), n = 0; n < t; n++)
                    e[n] = arguments[n];
                clearTimeout(a),
                a = setTimeout(function() {
                    return c.apply(void 0, e)
                }, s)
            }
            ))) : console.warn("basicScroll is not executing because you are using it in an environment without a `window` object")
        }
        , {
            eases: 19,
            "parse-unit": 33
        }]
    }, {}, [34])(34)
}),
(()=>{
    let t = !1;
    const e = ()=>t = window.matchMedia("(max-width: 768px)").matches;
    window.addEventListener("resize", ()=>{
        e()
    }
    , {
        passive: !0
    }),
    e();
    const n = t=>{
        document.addEventListener("selectionchange", e=>{
            const n = window.getSelection();
            null !== t && !n.isCollapsed && n.containsNode(t, !0) ? t.setAttribute("has-selection-contained-within", "") : t.removeAttribute("has-selection-contained-within")
        }
        )
    }
      , o = ()=>{
        const t = document.querySelectorAll("[data-js-latency-test]");
        (()=>{
            const t = "https://1.1.1.1/cdn-cgi/trace"
              , e = 5;
            let n = 0;
            return async function o() {
                n++,
                await fetch(t,{mode:"no-cors",cache:"no-store"}),
                n <= e && await o()
            }().then(()=>{
                let n = performance.getEntriesByName(t, "resource")
                  , o = null;
                for (let t = Math.max(0, n.length - e); t < n.length; t++) {
                    const e = n[t].duration || n[t].responseEnd - n[t].fetchStart;
                    (!o || e < o) && (o = e)
                }
                return 0 | o
            }
            )
        }
        )().then(e=>{
            t.forEach(t=>{
                (isNaN(e) || 0 === e || e > 50) && t.parentNode.removeChild(t);
                const n = t.querySelector("[data-js-latency-test-value]");
                if (!n)
                    return;
                const r = document.createElement("span");
                r.textContent = e + "ms",
                n.innerHTML = "",
                n.appendChild(r);
                const i = t.querySelector("[data-js-latency-test-retry-button]");
                i && "" !== i.getAttribute("data-js-latency-test-click-listener-added") && (i.setAttribute("data-js-latency-test-click-listener-added", ""),
                i.addEventListener("click", o))
            }
            )
        }
        ).catch(e=>{
            t.forEach(t=>t.parentNode.removeChild(t))
        }
        )
    }
    ;
    window.matchMedia("(hover: hover)").matches || document.querySelectorAll(".Button").forEach(t=>{
        t.addEventListener("touchstart", ()=>{}
        )
    }
    ),
    document.querySelector("[data-js-balance-text]") && textBalancer.initialize(Array.from(document.querySelectorAll("[data-js-balance-text]"))),
    document.querySelectorAll(".CodeBlock").forEach(t=>{
        n(t)
    }
    ),
    (()=>{
        const e = document.querySelector(".HeroSection--illustration");
        if (!e)
            return;
        n(e);
        const o = e.querySelector(".CodeBlock")
          , r = ()=>o.classList[t ? "add" : "remove"]("CodeBlock-scrolls-horizontally");
        document.addEventListener("resize", Debounce(r)),
        r()
    }
    )(),
    o()
}
)();
