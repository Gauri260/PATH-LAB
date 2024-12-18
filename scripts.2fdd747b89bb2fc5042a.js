!function(t, e) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
        if (!t.document)
            throw new Error("jQuery requires a window with a document");
        return e(t)
    }
    : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    "use strict";
    var n = []
      , i = t.document
      , r = Object.getPrototypeOf
      , s = n.slice
      , o = n.concat
      , a = n.push
      , l = n.indexOf
      , c = {}
      , u = c.toString
      , h = c.hasOwnProperty
      , d = h.toString
      , f = d.call(Object)
      , p = {};
    function g(t, e) {
        var n = (e = e || i).createElement("script");
        n.text = t,
        e.head.appendChild(n).parentNode.removeChild(n)
    }
    var m = "3.2.1"
      , v = function(t, e) {
        return new v.fn.init(t,e)
    }
      , y = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , _ = /^-ms-/
      , w = /-([a-z])/g
      , b = function(t, e) {
        return e.toUpperCase()
    };
    function x(t) {
        var e = !!t && "length"in t && t.length
          , n = v.type(t);
        return "function" !== n && !v.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }
    v.fn = v.prototype = {
        jquery: m,
        constructor: v,
        length: 0,
        toArray: function() {
            return s.call(this)
        },
        get: function(t) {
            return null == t ? s.call(this) : t < 0 ? this[t + this.length] : this[t]
        },
        pushStack: function(t) {
            var e = v.merge(this.constructor(), t);
            return e.prevObject = this,
            e
        },
        each: function(t) {
            return v.each(this, t)
        },
        map: function(t) {
            return this.pushStack(v.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
              , n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: a,
        sort: n.sort,
        splice: n.splice
    },
    v.extend = v.fn.extend = function() {
        var t, e, n, i, r, s, o = arguments[0] || {}, a = 1, l = arguments.length, c = !1;
        for ("boolean" == typeof o && (c = o,
        o = arguments[a] || {},
        a++),
        "object" == typeof o || v.isFunction(o) || (o = {}),
        a === l && (o = this,
        a--); a < l; a++)
            if (null != (t = arguments[a]))
                for (e in t)
                    n = o[e],
                    o !== (i = t[e]) && (c && i && (v.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1,
                    s = n && Array.isArray(n) ? n : []) : s = n && v.isPlainObject(n) ? n : {},
                    o[e] = v.extend(c, s, i)) : void 0 !== i && (o[e] = i));
        return o
    }
    ,
    v.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(t) {
            throw new Error(t)
        },
        noop: function() {},
        isFunction: function(t) {
            return "function" === v.type(t)
        },
        isWindow: function(t) {
            return null != t && t === t.window
        },
        isNumeric: function(t) {
            var e = v.type(t);
            return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
        },
        isPlainObject: function(t) {
            var e, n;
            return !(!t || "[object Object]" !== u.call(t) || (e = r(t)) && (n = h.call(e, "constructor") && e.constructor,
            "function" != typeof n || d.call(n) !== f))
        },
        isEmptyObject: function(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        },
        type: function(t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? c[u.call(t)] || "object" : typeof t
        },
        globalEval: function(t) {
            g(t)
        },
        camelCase: function(t) {
            return t.replace(_, "ms-").replace(w, b)
        },
        each: function(t, e) {
            var n, i = 0;
            if (x(t))
                for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++)
                    ;
            else
                for (i in t)
                    if (!1 === e.call(t[i], i, t[i]))
                        break;
            return t
        },
        trim: function(t) {
            return null == t ? "" : (t + "").replace(y, "")
        },
        makeArray: function(t, e) {
            var n = e || [];
            return null != t && (x(Object(t)) ? v.merge(n, "string" == typeof t ? [t] : t) : a.call(n, t)),
            n
        },
        inArray: function(t, e, n) {
            return null == e ? -1 : l.call(e, t, n)
        },
        merge: function(t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n; i++)
                t[r++] = e[i];
            return t.length = r,
            t
        },
        grep: function(t, e, n) {
            for (var i = [], r = 0, s = t.length, o = !n; r < s; r++)
                !e(t[r], r) !== o && i.push(t[r]);
            return i
        },
        map: function(t, e, n) {
            var i, r, s = 0, a = [];
            if (x(t))
                for (i = t.length; s < i; s++)
                    null != (r = e(t[s], s, n)) && a.push(r);
            else
                for (s in t)
                    null != (r = e(t[s], s, n)) && a.push(r);
            return o.apply([], a)
        },
        guid: 1,
        proxy: function(t, e) {
            var n, i, r;
            if ("string" == typeof e && (n = t[e],
            e = t,
            t = n),
            v.isFunction(t))
                return i = s.call(arguments, 2),
                (r = function() {
                    return t.apply(e || this, i.concat(s.call(arguments)))
                }
                ).guid = t.guid = t.guid || v.guid++,
                r
        },
        now: Date.now,
        support: p
    }),
    "function" == typeof Symbol && (v.fn[Symbol.iterator] = n[Symbol.iterator]),
    v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
        c["[object " + e + "]"] = e.toLowerCase()
    });
    var C = function(t) {
        var e, n, i, r, s, o, a, l, c, u, h, d, f, p, g, m, v, y, _, w = "sizzle" + 1 * new Date, b = t.document, x = 0, C = 0, E = at(), T = at(), D = at(), S = function(t, e) {
            return t === e && (h = !0),
            0
        }, A = {}.hasOwnProperty, k = [], I = k.pop, N = k.push, j = k.push, O = k.slice, P = function(t, e) {
            for (var n = 0, i = t.length; n < i; n++)
                if (t[n] === e)
                    return n;
            return -1
        }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", H = "[\\x20\\t\\r\\n\\f]", $ = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", M = "\\[" + H + "*(" + $ + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + $ + "))|)" + H + "*\\]", R = ":(" + $ + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)", W = new RegExp(H + "+","g"), q = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$","g"), F = new RegExp("^" + H + "*," + H + "*"), z = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"), B = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]","g"), U = new RegExp(R), Q = new RegExp("^" + $ + "$"), K = {
            ID: new RegExp("^#(" + $ + ")"),
            CLASS: new RegExp("^\\.(" + $ + ")"),
            TAG: new RegExp("^(" + $ + "|[*])"),
            ATTR: new RegExp("^" + M),
            PSEUDO: new RegExp("^" + R),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)","i"),
            bool: new RegExp("^(?:" + L + ")$","i"),
            needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)","i")
        }, V = /^(?:input|select|textarea|button)$/i, Y = /^h\d$/i, X = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, G = /[+~]/, J = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)","ig"), tt = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, it = function(t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        }, rt = function() {
            d()
        }, st = _t(function(t) {
            return !0 === t.disabled && ("form"in t || "label"in t)
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            j.apply(k = O.call(b.childNodes), b.childNodes)
        } catch (nt) {
            j = {
                apply: k.length ? function(t, e) {
                    N.apply(t, O.call(e))
                }
                : function(t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++]; )
                        ;
                    t.length = n - 1
                }
            }
        }
        function ot(t, e, i, r) {
            var s, a, c, u, h, p, v, y = e && e.ownerDocument, x = e ? e.nodeType : 9;
            if (i = i || [],
            "string" != typeof t || !t || 1 !== x && 9 !== x && 11 !== x)
                return i;
            if (!r && ((e ? e.ownerDocument || e : b) !== f && d(e),
            e = e || f,
            g)) {
                if (11 !== x && (h = Z.exec(t)))
                    if (s = h[1]) {
                        if (9 === x) {
                            if (!(c = e.getElementById(s)))
                                return i;
                            if (c.id === s)
                                return i.push(c),
                                i
                        } else if (y && (c = y.getElementById(s)) && _(e, c) && c.id === s)
                            return i.push(c),
                            i
                    } else {
                        if (h[2])
                            return j.apply(i, e.getElementsByTagName(t)),
                            i;
                        if ((s = h[3]) && n.getElementsByClassName && e.getElementsByClassName)
                            return j.apply(i, e.getElementsByClassName(s)),
                            i
                    }
                if (n.qsa && !D[t + " "] && (!m || !m.test(t))) {
                    if (1 !== x)
                        y = e,
                        v = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((u = e.getAttribute("id")) ? u = u.replace(et, it) : e.setAttribute("id", u = w),
                        a = (p = o(t)).length; a--; )
                            p[a] = "#" + u + " " + yt(p[a]);
                        v = p.join(","),
                        y = G.test(t) && mt(e.parentNode) || e
                    }
                    if (v)
                        try {
                            return j.apply(i, y.querySelectorAll(v)),
                            i
                        } catch (C) {} finally {
                            u === w && e.removeAttribute("id")
                        }
                }
            }
            return l(t.replace(q, "$1"), e, i, r)
        }
        function at() {
            var t = [];
            return function e(n, r) {
                return t.push(n + " ") > i.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
        }
        function lt(t) {
            return t[w] = !0,
            t
        }
        function ct(t) {
            var e = f.createElement("fieldset");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                e = null
            }
        }
        function ut(t, e) {
            for (var n = t.split("|"), r = n.length; r--; )
                i.attrHandle[n[r]] = e
        }
        function ht(t, e) {
            var n = e && t
              , i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function dt(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }
        function ft(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function pt(t) {
            return function(e) {
                return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && st(e) === t : e.disabled === t : "label"in e && e.disabled === t
            }
        }
        function gt(t) {
            return lt(function(e) {
                return e = +e,
                lt(function(n, i) {
                    for (var r, s = t([], n.length, e), o = s.length; o--; )
                        n[r = s[o]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function mt(t) {
            return t && void 0 !== t.getElementsByTagName && t
        }
        for (e in n = ot.support = {},
        s = ot.isXML = function(t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }
        ,
        d = ot.setDocument = function(t) {
            var e, r, o = t ? t.ownerDocument || t : b;
            return o !== f && 9 === o.nodeType && o.documentElement ? (p = (f = o).documentElement,
            g = !s(f),
            b !== f && (r = f.defaultView) && r.top !== r && (r.addEventListener ? r.addEventListener("unload", rt, !1) : r.attachEvent && r.attachEvent("onunload", rt)),
            n.attributes = ct(function(t) {
                return t.className = "i",
                !t.getAttribute("className")
            }),
            n.getElementsByTagName = ct(function(t) {
                return t.appendChild(f.createComment("")),
                !t.getElementsByTagName("*").length
            }),
            n.getElementsByClassName = X.test(f.getElementsByClassName),
            n.getById = ct(function(t) {
                return p.appendChild(t).id = w,
                !f.getElementsByName || !f.getElementsByName(w).length
            }),
            n.getById ? (i.filter.ID = function(t) {
                var e = t.replace(J, tt);
                return function(t) {
                    return t.getAttribute("id") === e
                }
            }
            ,
            i.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && g) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }
            ) : (i.filter.ID = function(t) {
                var e = t.replace(J, tt);
                return function(t) {
                    var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }
            ,
            i.find.ID = function(t, e) {
                if (void 0 !== e.getElementById && g) {
                    var n, i, r, s = e.getElementById(t);
                    if (s) {
                        if ((n = s.getAttributeNode("id")) && n.value === t)
                            return [s];
                        for (r = e.getElementsByName(t),
                        i = 0; s = r[i++]; )
                            if ((n = s.getAttributeNode("id")) && n.value === t)
                                return [s]
                    }
                    return []
                }
            }
            ),
            i.find.TAG = n.getElementsByTagName ? function(t, e) {
                return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
            }
            : function(t, e) {
                var n, i = [], r = 0, s = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = s[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                return s
            }
            ,
            i.find.CLASS = n.getElementsByClassName && function(t, e) {
                if (void 0 !== e.getElementsByClassName && g)
                    return e.getElementsByClassName(t)
            }
            ,
            v = [],
            m = [],
            (n.qsa = X.test(f.querySelectorAll)) && (ct(function(t) {
                p.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + H + "*(?:''|\"\")"),
                t.querySelectorAll("[selected]").length || m.push("\\[" + H + "*(?:value|" + L + ")"),
                t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="),
                t.querySelectorAll(":checked").length || m.push(":checked"),
                t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
            }),
            ct(function(t) {
                t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var e = f.createElement("input");
                e.setAttribute("type", "hidden"),
                t.appendChild(e).setAttribute("name", "D"),
                t.querySelectorAll("[name=d]").length && m.push("name" + H + "*[*^$|!~]?="),
                2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                p.appendChild(t).disabled = !0,
                2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                t.querySelectorAll("*,:x"),
                m.push(",.*:")
            })),
            (n.matchesSelector = X.test(y = p.matches || p.webkitMatchesSelector || p.mozMatchesSelector || p.oMatchesSelector || p.msMatchesSelector)) && ct(function(t) {
                n.disconnectedMatch = y.call(t, "*"),
                y.call(t, "[s!='']:x"),
                v.push("!=", R)
            }),
            m = m.length && new RegExp(m.join("|")),
            v = v.length && new RegExp(v.join("|")),
            e = X.test(p.compareDocumentPosition),
            _ = e || X.test(p.contains) ? function(t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t
                  , i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            }
            : function(t, e) {
                if (e)
                    for (; e = e.parentNode; )
                        if (e === t)
                            return !0;
                return !1
            }
            ,
            S = e ? function(t, e) {
                if (t === e)
                    return h = !0,
                    0;
                var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === i ? t === f || t.ownerDocument === b && _(b, t) ? -1 : e === f || e.ownerDocument === b && _(b, e) ? 1 : u ? P(u, t) - P(u, e) : 0 : 4 & i ? -1 : 1)
            }
            : function(t, e) {
                if (t === e)
                    return h = !0,
                    0;
                var n, i = 0, r = t.parentNode, s = e.parentNode, o = [t], a = [e];
                if (!r || !s)
                    return t === f ? -1 : e === f ? 1 : r ? -1 : s ? 1 : u ? P(u, t) - P(u, e) : 0;
                if (r === s)
                    return ht(t, e);
                for (n = t; n = n.parentNode; )
                    o.unshift(n);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (; o[i] === a[i]; )
                    i++;
                return i ? ht(o[i], a[i]) : o[i] === b ? -1 : a[i] === b ? 1 : 0
            }
            ,
            f) : f
        }
        ,
        ot.matches = function(t, e) {
            return ot(t, null, null, e)
        }
        ,
        ot.matchesSelector = function(t, e) {
            if ((t.ownerDocument || t) !== f && d(t),
            e = e.replace(B, "='$1']"),
            n.matchesSelector && g && !D[e + " "] && (!v || !v.test(e)) && (!m || !m.test(e)))
                try {
                    var i = y.call(t, e);
                    if (i || n.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                        return i
                } catch (r) {}
            return ot(e, f, null, [t]).length > 0
        }
        ,
        ot.contains = function(t, e) {
            return (t.ownerDocument || t) !== f && d(t),
            _(t, e)
        }
        ,
        ot.attr = function(t, e) {
            (t.ownerDocument || t) !== f && d(t);
            var r = i.attrHandle[e.toLowerCase()]
              , s = r && A.call(i.attrHandle, e.toLowerCase()) ? r(t, e, !g) : void 0;
            return void 0 !== s ? s : n.attributes || !g ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null
        }
        ,
        ot.escape = function(t) {
            return (t + "").replace(et, it)
        }
        ,
        ot.error = function(t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }
        ,
        ot.uniqueSort = function(t) {
            var e, i = [], r = 0, s = 0;
            if (h = !n.detectDuplicates,
            u = !n.sortStable && t.slice(0),
            t.sort(S),
            h) {
                for (; e = t[s++]; )
                    e === t[s] && (r = i.push(s));
                for (; r--; )
                    t.splice(i[r], 1)
            }
            return u = null,
            t
        }
        ,
        r = ot.getText = function(t) {
            var e, n = "", i = 0, s = t.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof t.textContent)
                        return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling)
                        n += r(t)
                } else if (3 === s || 4 === s)
                    return t.nodeValue
            } else
                for (; e = t[i++]; )
                    n += r(e);
            return n
        }
        ,
        (i = ot.selectors = {
            cacheLength: 50,
            createPseudo: lt,
            match: K,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(t) {
                    return t[1] = t[1].replace(J, tt),
                    t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt),
                    "~=" === t[2] && (t[3] = " " + t[3] + " "),
                    t.slice(0, 4)
                },
                CHILD: function(t) {
                    return t[1] = t[1].toLowerCase(),
                    "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]),
                    t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                    t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]),
                    t
                },
                PSEUDO: function(t) {
                    var e, n = !t[6] && t[2];
                    return K.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && U.test(n) && (e = o(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                    t[2] = n.slice(0, e)),
                    t.slice(0, 3))
                }
            },
            filter: {
                TAG: function(t) {
                    var e = t.replace(J, tt).toLowerCase();
                    return "*" === t ? function() {
                        return !0
                    }
                    : function(t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function(t) {
                    var e = E[t + " "];
                    return e || (e = new RegExp("(^|" + H + ")" + t + "(" + H + "|$)")) && E(t, function(t) {
                        return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function(t, e, n) {
                    return function(i) {
                        var r = ot.attr(i, t);
                        return null == r ? "!=" === e : !e || (r += "",
                        "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r.replace(W, " ") + " ").indexOf(n) > -1 : "|=" === e && (r === n || r.slice(0, n.length + 1) === n + "-"))
                    }
                },
                CHILD: function(t, e, n, i, r) {
                    var s = "nth" !== t.slice(0, 3)
                      , o = "last" !== t.slice(-4)
                      , a = "of-type" === e;
                    return 1 === i && 0 === r ? function(t) {
                        return !!t.parentNode
                    }
                    : function(e, n, l) {
                        var c, u, h, d, f, p, g = s !== o ? "nextSibling" : "previousSibling", m = e.parentNode, v = a && e.nodeName.toLowerCase(), y = !l && !a, _ = !1;
                        if (m) {
                            if (s) {
                                for (; g; ) {
                                    for (d = e; d = d[g]; )
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    p = g = "only" === t && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [o ? m.firstChild : m.lastChild],
                            o && y) {
                                for (_ = (f = (c = (u = (h = (d = m)[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === x && c[1]) && c[2],
                                d = f && m.childNodes[f]; d = ++f && d && d[g] || (_ = f = 0) || p.pop(); )
                                    if (1 === d.nodeType && ++_ && d === e) {
                                        u[t] = [x, f, _];
                                        break
                                    }
                            } else if (y && (_ = f = (c = (u = (h = (d = e)[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] || [])[0] === x && c[1]),
                            !1 === _)
                                for (; (d = ++f && d && d[g] || (_ = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++_ || (y && ((u = (h = d[w] || (d[w] = {}))[d.uniqueID] || (h[d.uniqueID] = {}))[t] = [x, _]),
                                d !== e)); )
                                    ;
                            return (_ -= r) === i || _ % i == 0 && _ / i >= 0
                        }
                    }
                },
                PSEUDO: function(t, e) {
                    var n, r = i.pseudos[t] || i.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
                    return r[w] ? r(e) : r.length > 1 ? (n = [t, t, "", e],
                    i.setFilters.hasOwnProperty(t.toLowerCase()) ? lt(function(t, n) {
                        for (var i, s = r(t, e), o = s.length; o--; )
                            t[i = P(t, s[o])] = !(n[i] = s[o])
                    }) : function(t) {
                        return r(t, 0, n)
                    }
                    ) : r
                }
            },
            pseudos: {
                not: lt(function(t) {
                    var e = []
                      , n = []
                      , i = a(t.replace(q, "$1"));
                    return i[w] ? lt(function(t, e, n, r) {
                        for (var s, o = i(t, null, r, []), a = t.length; a--; )
                            (s = o[a]) && (t[a] = !(e[a] = s))
                    }) : function(t, r, s) {
                        return e[0] = t,
                        i(e, null, s, n),
                        e[0] = null,
                        !n.pop()
                    }
                }),
                has: lt(function(t) {
                    return function(e) {
                        return ot(t, e).length > 0
                    }
                }),
                contains: lt(function(t) {
                    return t = t.replace(J, tt),
                    function(e) {
                        return (e.textContent || e.innerText || r(e)).indexOf(t) > -1
                    }
                }),
                lang: lt(function(t) {
                    return Q.test(t || "") || ot.error("unsupported lang: " + t),
                    t = t.replace(J, tt).toLowerCase(),
                    function(e) {
                        var n;
                        do {
                            if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1
                    }
                }),
                target: function(e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function(t) {
                    return t === p
                },
                focus: function(t) {
                    return t === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: pt(!1),
                disabled: pt(!0),
                checked: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function(t) {
                    return !0 === t.selected
                },
                empty: function(t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(t) {
                    return !i.pseudos.empty(t)
                },
                header: function(t) {
                    return Y.test(t.nodeName)
                },
                input: function(t) {
                    return V.test(t.nodeName)
                },
                button: function(t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function(t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: gt(function() {
                    return [0]
                }),
                last: gt(function(t, e) {
                    return [e - 1]
                }),
                eq: gt(function(t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: gt(function(t, e) {
                    for (var n = 0; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                odd: gt(function(t, e) {
                    for (var n = 1; n < e; n += 2)
                        t.push(n);
                    return t
                }),
                lt: gt(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; --i >= 0; )
                        t.push(i);
                    return t
                }),
                gt: gt(function(t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e; )
                        t.push(i);
                    return t
                })
            }
        }).pseudos.nth = i.pseudos.eq,
        {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            i.pseudos[e] = dt(e);
        for (e in {
            submit: !0,
            reset: !0
        })
            i.pseudos[e] = ft(e);
        function vt() {}
        function yt(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++)
                i += t[e].value;
            return i
        }
        function _t(t, e, n) {
            var i = e.dir
              , r = e.next
              , s = r || i
              , o = n && "parentNode" === s
              , a = C++;
            return e.first ? function(e, n, r) {
                for (; e = e[i]; )
                    if (1 === e.nodeType || o)
                        return t(e, n, r);
                return !1
            }
            : function(e, n, l) {
                var c, u, h, d = [x, a];
                if (l) {
                    for (; e = e[i]; )
                        if ((1 === e.nodeType || o) && t(e, n, l))
                            return !0
                } else
                    for (; e = e[i]; )
                        if (1 === e.nodeType || o)
                            if (u = (h = e[w] || (e[w] = {}))[e.uniqueID] || (h[e.uniqueID] = {}),
                            r && r === e.nodeName.toLowerCase())
                                e = e[i] || e;
                            else {
                                if ((c = u[s]) && c[0] === x && c[1] === a)
                                    return d[2] = c[2];
                                if (u[s] = d,
                                d[2] = t(e, n, l))
                                    return !0
                            }
                return !1
            }
        }
        function wt(t) {
            return t.length > 1 ? function(e, n, i) {
                for (var r = t.length; r--; )
                    if (!t[r](e, n, i))
                        return !1;
                return !0
            }
            : t[0]
        }
        function bt(t, e, n, i, r) {
            for (var s, o = [], a = 0, l = t.length, c = null != e; a < l; a++)
                (s = t[a]) && (n && !n(s, i, r) || (o.push(s),
                c && e.push(a)));
            return o
        }
        function xt(t, e, n, i, r, s) {
            return i && !i[w] && (i = xt(i)),
            r && !r[w] && (r = xt(r, s)),
            lt(function(s, o, a, l) {
                var c, u, h, d = [], f = [], p = o.length, g = s || function(t, e, n) {
                    for (var i = 0, r = e.length; i < r; i++)
                        ot(t, e[i], n);
                    return n
                }(e || "*", a.nodeType ? [a] : a, []), m = !t || !s && e ? g : bt(g, d, t, a, l), v = n ? r || (s ? t : p || i) ? [] : o : m;
                if (n && n(m, v, a, l),
                i)
                    for (c = bt(v, f),
                    i(c, [], a, l),
                    u = c.length; u--; )
                        (h = c[u]) && (v[f[u]] = !(m[f[u]] = h));
                if (s) {
                    if (r || t) {
                        if (r) {
                            for (c = [],
                            u = v.length; u--; )
                                (h = v[u]) && c.push(m[u] = h);
                            r(null, v = [], c, l)
                        }
                        for (u = v.length; u--; )
                            (h = v[u]) && (c = r ? P(s, h) : d[u]) > -1 && (s[c] = !(o[c] = h))
                    }
                } else
                    v = bt(v === o ? v.splice(p, v.length) : v),
                    r ? r(null, o, v, l) : j.apply(o, v)
            })
        }
        function Ct(t) {
            for (var e, n, r, s = t.length, o = i.relative[t[0].type], a = o || i.relative[" "], l = o ? 1 : 0, u = _t(function(t) {
                return t === e
            }, a, !0), h = _t(function(t) {
                return P(e, t) > -1
            }, a, !0), d = [function(t, n, i) {
                var r = !o && (i || n !== c) || ((e = n).nodeType ? u(t, n, i) : h(t, n, i));
                return e = null,
                r
            }
            ]; l < s; l++)
                if (n = i.relative[t[l].type])
                    d = [_t(wt(d), n)];
                else {
                    if ((n = i.filter[t[l].type].apply(null, t[l].matches))[w]) {
                        for (r = ++l; r < s && !i.relative[t[r].type]; r++)
                            ;
                        return xt(l > 1 && wt(d), l > 1 && yt(t.slice(0, l - 1).concat({
                            value: " " === t[l - 2].type ? "*" : ""
                        })).replace(q, "$1"), n, l < r && Ct(t.slice(l, r)), r < s && Ct(t = t.slice(r)), r < s && yt(t))
                    }
                    d.push(n)
                }
            return wt(d)
        }
        function Et(t, e) {
            var n = e.length > 0
              , r = t.length > 0
              , s = function(s, o, a, l, u) {
                var h, p, m, v = 0, y = "0", _ = s && [], w = [], b = c, C = s || r && i.find.TAG("*", u), E = x += null == b ? 1 : Math.random() || .1, T = C.length;
                for (u && (c = o === f || o || u); y !== T && null != (h = C[y]); y++) {
                    if (r && h) {
                        for (p = 0,
                        o || h.ownerDocument === f || (d(h),
                        a = !g); m = t[p++]; )
                            if (m(h, o || f, a)) {
                                l.push(h);
                                break
                            }
                        u && (x = E)
                    }
                    n && ((h = !m && h) && v--,
                    s && _.push(h))
                }
                if (v += y,
                n && y !== v) {
                    for (p = 0; m = e[p++]; )
                        m(_, w, o, a);
                    if (s) {
                        if (v > 0)
                            for (; y--; )
                                _[y] || w[y] || (w[y] = I.call(l));
                        w = bt(w)
                    }
                    j.apply(l, w),
                    u && !s && w.length > 0 && v + e.length > 1 && ot.uniqueSort(l)
                }
                return u && (x = E,
                c = b),
                _
            };
            return n ? lt(s) : s
        }
        return vt.prototype = i.filters = i.pseudos,
        i.setFilters = new vt,
        o = ot.tokenize = function(t, e) {
            var n, r, s, o, a, l, c, u = T[t + " "];
            if (u)
                return e ? 0 : u.slice(0);
            for (a = t,
            l = [],
            c = i.preFilter; a; ) {
                for (o in n && !(r = F.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                l.push(s = [])),
                n = !1,
                (r = z.exec(a)) && (n = r.shift(),
                s.push({
                    value: n,
                    type: r[0].replace(q, " ")
                }),
                a = a.slice(n.length)),
                i.filter)
                    !(r = K[o].exec(a)) || c[o] && !(r = c[o](r)) || (n = r.shift(),
                    s.push({
                        value: n,
                        type: o,
                        matches: r
                    }),
                    a = a.slice(n.length));
                if (!n)
                    break
            }
            return e ? a.length : a ? ot.error(t) : T(t, l).slice(0)
        }
        ,
        a = ot.compile = function(t, e) {
            var n, i = [], r = [], s = D[t + " "];
            if (!s) {
                for (e || (e = o(t)),
                n = e.length; n--; )
                    (s = Ct(e[n]))[w] ? i.push(s) : r.push(s);
                (s = D(t, Et(r, i))).selector = t
            }
            return s
        }
        ,
        l = ot.select = function(t, e, n, r) {
            var s, l, c, u, h, d = "function" == typeof t && t, f = !r && o(t = d.selector || t);
            if (n = n || [],
            1 === f.length) {
                if ((l = f[0] = f[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && g && i.relative[l[1].type]) {
                    if (!(e = (i.find.ID(c.matches[0].replace(J, tt), e) || [])[0]))
                        return n;
                    d && (e = e.parentNode),
                    t = t.slice(l.shift().value.length)
                }
                for (s = K.needsContext.test(t) ? 0 : l.length; s-- && !i.relative[u = (c = l[s]).type]; )
                    if ((h = i.find[u]) && (r = h(c.matches[0].replace(J, tt), G.test(l[0].type) && mt(e.parentNode) || e))) {
                        if (l.splice(s, 1),
                        !(t = r.length && yt(l)))
                            return j.apply(n, r),
                            n;
                        break
                    }
            }
            return (d || a(t, f))(r, e, !g, n, !e || G.test(t) && mt(e.parentNode) || e),
            n
        }
        ,
        n.sortStable = w.split("").sort(S).join("") === w,
        n.detectDuplicates = !!h,
        d(),
        n.sortDetached = ct(function(t) {
            return 1 & t.compareDocumentPosition(f.createElement("fieldset"))
        }),
        ct(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || ut("type|href|height|width", function(t, e, n) {
            if (!n)
                return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        n.attributes && ct(function(t) {
            return t.innerHTML = "<input/>",
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || ut("value", function(t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase())
                return t.defaultValue
        }),
        ct(function(t) {
            return null == t.getAttribute("disabled")
        }) || ut(L, function(t, e, n) {
            var i;
            if (!n)
                return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }),
        ot
    }(t);
    v.find = C,
    v.expr = C.selectors,
    v.expr[":"] = v.expr.pseudos,
    v.uniqueSort = v.unique = C.uniqueSort,
    v.text = C.getText,
    v.isXMLDoc = C.isXML,
    v.contains = C.contains,
    v.escapeSelector = C.escape;
    var E = function(t, e, n) {
        for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
            if (1 === t.nodeType) {
                if (r && v(t).is(n))
                    break;
                i.push(t)
            }
        return i
    }
      , T = function(t, e) {
        for (var n = []; t; t = t.nextSibling)
            1 === t.nodeType && t !== e && n.push(t);
        return n
    }
      , D = v.expr.match.needsContext;
    function S(t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
    }
    var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
      , k = /^.[^:#\[\.,]*$/;
    function I(t, e, n) {
        return v.isFunction(e) ? v.grep(t, function(t, i) {
            return !!e.call(t, i, t) !== n
        }) : e.nodeType ? v.grep(t, function(t) {
            return t === e !== n
        }) : "string" != typeof e ? v.grep(t, function(t) {
            return l.call(e, t) > -1 !== n
        }) : k.test(e) ? v.filter(e, t, n) : (e = v.filter(e, t),
        v.grep(t, function(t) {
            return l.call(e, t) > -1 !== n && 1 === t.nodeType
        }))
    }
    v.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"),
        1 === e.length && 1 === i.nodeType ? v.find.matchesSelector(i, t) ? [i] : [] : v.find.matches(t, v.grep(e, function(t) {
            return 1 === t.nodeType
        }))
    }
    ,
    v.fn.extend({
        find: function(t) {
            var e, n, i = this.length, r = this;
            if ("string" != typeof t)
                return this.pushStack(v(t).filter(function() {
                    for (e = 0; e < i; e++)
                        if (v.contains(r[e], this))
                            return !0
                }));
            for (n = this.pushStack([]),
            e = 0; e < i; e++)
                v.find(t, r[e], n);
            return i > 1 ? v.uniqueSort(n) : n
        },
        filter: function(t) {
            return this.pushStack(I(this, t || [], !1))
        },
        not: function(t) {
            return this.pushStack(I(this, t || [], !0))
        },
        is: function(t) {
            return !!I(this, "string" == typeof t && D.test(t) ? v(t) : t || [], !1).length
        }
    });
    var N, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (v.fn.init = function(t, e, n) {
        var r, s;
        if (!t)
            return this;
        if (n = n || N,
        "string" == typeof t) {
            if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : j.exec(t)) || !r[1] && e)
                return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (r[1]) {
                if (v.merge(this, v.parseHTML(r[1], (e = e instanceof v ? e[0] : e) && e.nodeType ? e.ownerDocument || e : i, !0)),
                A.test(r[1]) && v.isPlainObject(e))
                    for (r in e)
                        v.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                return this
            }
            return (s = i.getElementById(r[2])) && (this[0] = s,
            this.length = 1),
            this
        }
        return t.nodeType ? (this[0] = t,
        this.length = 1,
        this) : v.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(v) : v.makeArray(t, this)
    }
    ).prototype = v.fn,
    N = v(i);
    var O = /^(?:parents|prev(?:Until|All))/
      , P = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    function L(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; )
            ;
        return t
    }
    v.fn.extend({
        has: function(t) {
            var e = v(t, this)
              , n = e.length;
            return this.filter(function() {
                for (var t = 0; t < n; t++)
                    if (v.contains(this, e[t]))
                        return !0
            })
        },
        closest: function(t, e) {
            var n, i = 0, r = this.length, s = [], o = "string" != typeof t && v(t);
            if (!D.test(t))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && v.find.matchesSelector(n, t))) {
                            s.push(n);
                            break
                        }
            return this.pushStack(s.length > 1 ? v.uniqueSort(s) : s)
        },
        index: function(t) {
            return t ? "string" == typeof t ? l.call(v(t), this[0]) : l.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(t, e) {
            return this.pushStack(v.uniqueSort(v.merge(this.get(), v(t, e))))
        },
        addBack: function(t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }),
    v.each({
        parent: function(t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(t) {
            return E(t, "parentNode")
        },
        parentsUntil: function(t, e, n) {
            return E(t, "parentNode", n)
        },
        next: function(t) {
            return L(t, "nextSibling")
        },
        prev: function(t) {
            return L(t, "previousSibling")
        },
        nextAll: function(t) {
            return E(t, "nextSibling")
        },
        prevAll: function(t) {
            return E(t, "previousSibling")
        },
        nextUntil: function(t, e, n) {
            return E(t, "nextSibling", n)
        },
        prevUntil: function(t, e, n) {
            return E(t, "previousSibling", n)
        },
        siblings: function(t) {
            return T((t.parentNode || {}).firstChild, t)
        },
        children: function(t) {
            return T(t.firstChild)
        },
        contents: function(t) {
            return S(t, "iframe") ? t.contentDocument : (S(t, "template") && (t = t.content || t),
            v.merge([], t.childNodes))
        }
    }, function(t, e) {
        v.fn[t] = function(n, i) {
            var r = v.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n),
            i && "string" == typeof i && (r = v.filter(i, r)),
            this.length > 1 && (P[t] || v.uniqueSort(r),
            O.test(t) && r.reverse()),
            this.pushStack(r)
        }
    });
    var H = /[^\x20\t\r\n\f]+/g;
    function $(t) {
        return t
    }
    function M(t) {
        throw t
    }
    function R(t, e, n, i) {
        var r;
        try {
            t && v.isFunction(r = t.promise) ? r.call(t).done(e).fail(n) : t && v.isFunction(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
        } catch (t) {
            n.apply(void 0, [t])
        }
    }
    v.Callbacks = function(t) {
        t = "string" == typeof t ? function(t) {
            var e = {};
            return v.each(t.match(H) || [], function(t, n) {
                e[n] = !0
            }),
            e
        }(t) : v.extend({}, t);
        var e, n, i, r, s = [], o = [], a = -1, l = function() {
            for (r = r || t.once,
            i = e = !0; o.length; a = -1)
                for (n = o.shift(); ++a < s.length; )
                    !1 === s[a].apply(n[0], n[1]) && t.stopOnFalse && (a = s.length,
                    n = !1);
            t.memory || (n = !1),
            e = !1,
            r && (s = n ? [] : "")
        }, c = {
            add: function() {
                return s && (n && !e && (a = s.length - 1,
                o.push(n)),
                function e(n) {
                    v.each(n, function(n, i) {
                        v.isFunction(i) ? t.unique && c.has(i) || s.push(i) : i && i.length && "string" !== v.type(i) && e(i)
                    })
                }(arguments),
                n && !e && l()),
                this
            },
            remove: function() {
                return v.each(arguments, function(t, e) {
                    for (var n; (n = v.inArray(e, s, n)) > -1; )
                        s.splice(n, 1),
                        n <= a && a--
                }),
                this
            },
            has: function(t) {
                return t ? v.inArray(t, s) > -1 : s.length > 0
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return r = o = [],
                s = n = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return r = o = [],
                n || e || (s = n = ""),
                this
            },
            locked: function() {
                return !!r
            },
            fireWith: function(t, n) {
                return r || (n = [t, (n = n || []).slice ? n.slice() : n],
                o.push(n),
                e || l()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!i
            }
        };
        return c
    }
    ,
    v.extend({
        Deferred: function(e) {
            var n = [["notify", "progress", v.Callbacks("memory"), v.Callbacks("memory"), 2], ["resolve", "done", v.Callbacks("once memory"), v.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", v.Callbacks("once memory"), v.Callbacks("once memory"), 1, "rejected"]]
              , i = "pending"
              , r = {
                state: function() {
                    return i
                },
                always: function() {
                    return s.done(arguments).fail(arguments),
                    this
                },
                catch: function(t) {
                    return r.then(null, t)
                },
                pipe: function() {
                    var t = arguments;
                    return v.Deferred(function(e) {
                        v.each(n, function(n, i) {
                            var r = v.isFunction(t[i[4]]) && t[i[4]];
                            s[i[1]](function() {
                                var t = r && r.apply(this, arguments);
                                t && v.isFunction(t.promise) ? t.promise().progress(e.notify).done(e.resolve).fail(e.reject) : e[i[0] + "With"](this, r ? [t] : arguments)
                            })
                        }),
                        t = null
                    }).promise()
                },
                then: function(e, i, r) {
                    var s = 0;
                    function o(e, n, i, r) {
                        return function() {
                            var a = this
                              , l = arguments
                              , c = function() {
                                var t, c;
                                if (!(e < s)) {
                                    if ((t = i.apply(a, l)) === n.promise())
                                        throw new TypeError("Thenable self-resolution");
                                    v.isFunction(c = t && ("object" == typeof t || "function" == typeof t) && t.then) ? r ? c.call(t, o(s, n, $, r), o(s, n, M, r)) : (s++,
                                    c.call(t, o(s, n, $, r), o(s, n, M, r), o(s, n, $, n.notifyWith))) : (i !== $ && (a = void 0,
                                    l = [t]),
                                    (r || n.resolveWith)(a, l))
                                }
                            }
                              , u = r ? c : function() {
                                try {
                                    c()
                                } catch (t) {
                                    v.Deferred.exceptionHook && v.Deferred.exceptionHook(t, u.stackTrace),
                                    e + 1 >= s && (i !== M && (a = void 0,
                                    l = [t]),
                                    n.rejectWith(a, l))
                                }
                            }
                            ;
                            e ? u() : (v.Deferred.getStackHook && (u.stackTrace = v.Deferred.getStackHook()),
                            t.setTimeout(u))
                        }
                    }
                    return v.Deferred(function(t) {
                        n[0][3].add(o(0, t, v.isFunction(r) ? r : $, t.notifyWith)),
                        n[1][3].add(o(0, t, v.isFunction(e) ? e : $)),
                        n[2][3].add(o(0, t, v.isFunction(i) ? i : M))
                    }).promise()
                },
                promise: function(t) {
                    return null != t ? v.extend(t, r) : r
                }
            }
              , s = {};
            return v.each(n, function(t, e) {
                var o = e[2]
                  , a = e[5];
                r[e[1]] = o.add,
                a && o.add(function() {
                    i = a
                }, n[3 - t][2].disable, n[0][2].lock),
                o.add(e[3].fire),
                s[e[0]] = function() {
                    return s[e[0] + "With"](this === s ? void 0 : this, arguments),
                    this
                }
                ,
                s[e[0] + "With"] = o.fireWith
            }),
            r.promise(s),
            e && e.call(s, s),
            s
        },
        when: function(t) {
            var e = arguments.length
              , n = e
              , i = Array(n)
              , r = s.call(arguments)
              , o = v.Deferred()
              , a = function(t) {
                return function(n) {
                    i[t] = this,
                    r[t] = arguments.length > 1 ? s.call(arguments) : n,
                    --e || o.resolveWith(i, r)
                }
            };
            if (e <= 1 && (R(t, o.done(a(n)).resolve, o.reject, !e),
            "pending" === o.state() || v.isFunction(r[n] && r[n].then)))
                return o.then();
            for (; n--; )
                R(r[n], a(n), o.reject);
            return o.promise()
        }
    });
    var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    v.Deferred.exceptionHook = function(e, n) {
        t.console && t.console.warn && e && W.test(e.name) && t.console.warn("jQuery.Deferred exception: " + e.message, e.stack, n)
    }
    ,
    v.readyException = function(e) {
        t.setTimeout(function() {
            throw e
        })
    }
    ;
    var q = v.Deferred();
    function F() {
        i.removeEventListener("DOMContentLoaded", F),
        t.removeEventListener("load", F),
        v.ready()
    }
    v.fn.ready = function(t) {
        return q.then(t).catch(function(t) {
            v.readyException(t)
        }),
        this
    }
    ,
    v.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(t) {
            (!0 === t ? --v.readyWait : v.isReady) || (v.isReady = !0,
            !0 !== t && --v.readyWait > 0 || q.resolveWith(i, [v]))
        }
    }),
    v.ready.then = q.then,
    "complete" === i.readyState || "loading" !== i.readyState && !i.documentElement.doScroll ? t.setTimeout(v.ready) : (i.addEventListener("DOMContentLoaded", F),
    t.addEventListener("load", F));
    var z = function(t, e, n, i, r, s, o) {
        var a = 0
          , l = t.length
          , c = null == n;
        if ("object" === v.type(n))
            for (a in r = !0,
            n)
                z(t, e, a, n[a], !0, s, o);
        else if (void 0 !== i && (r = !0,
        v.isFunction(i) || (o = !0),
        c && (o ? (e.call(t, i),
        e = null) : (c = e,
        e = function(t, e, n) {
            return c.call(v(t), n)
        }
        )),
        e))
            for (; a < l; a++)
                e(t[a], n, o ? i : i.call(t[a], a, e(t[a], n)));
        return r ? t : c ? e.call(t) : l ? e(t[0], n) : s
    }
      , B = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    };
    function U() {
        this.expando = v.expando + U.uid++
    }
    U.uid = 1,
    U.prototype = {
        cache: function(t) {
            var e = t[this.expando];
            return e || (e = {},
            B(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                value: e,
                configurable: !0
            }))),
            e
        },
        set: function(t, e, n) {
            var i, r = this.cache(t);
            if ("string" == typeof e)
                r[v.camelCase(e)] = n;
            else
                for (i in e)
                    r[v.camelCase(i)] = e[i];
            return r
        },
        get: function(t, e) {
            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][v.camelCase(e)]
        },
        access: function(t, e, n) {
            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n),
            void 0 !== n ? n : e)
        },
        remove: function(t, e) {
            var n, i = t[this.expando];
            if (void 0 !== i) {
                if (void 0 !== e) {
                    n = (e = Array.isArray(e) ? e.map(v.camelCase) : (e = v.camelCase(e))in i ? [e] : e.match(H) || []).length;
                    for (; n--; )
                        delete i[e[n]]
                }
                (void 0 === e || v.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
            }
        },
        hasData: function(t) {
            var e = t[this.expando];
            return void 0 !== e && !v.isEmptyObject(e)
        }
    };
    var Q = new U
      , K = new U
      , V = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Y = /[A-Z]/g;
    function X(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(Y, "-$&").toLowerCase(),
            "string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = function(t) {
                        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : V.test(t) ? JSON.parse(t) : t)
                    }(n)
                } catch (r) {}
                K.set(t, e, n)
            } else
                n = void 0;
        return n
    }
    v.extend({
        hasData: function(t) {
            return K.hasData(t) || Q.hasData(t)
        },
        data: function(t, e, n) {
            return K.access(t, e, n)
        },
        removeData: function(t, e) {
            K.remove(t, e)
        },
        _data: function(t, e, n) {
            return Q.access(t, e, n)
        },
        _removeData: function(t, e) {
            Q.remove(t, e)
        }
    }),
    v.fn.extend({
        data: function(t, e) {
            var n, i, r, s = this[0], o = s && s.attributes;
            if (void 0 === t) {
                if (this.length && (r = K.get(s),
                1 === s.nodeType && !Q.get(s, "hasDataAttrs"))) {
                    for (n = o.length; n--; )
                        o[n] && 0 === (i = o[n].name).indexOf("data-") && (i = v.camelCase(i.slice(5)),
                        X(s, i, r[i]));
                    Q.set(s, "hasDataAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function() {
                K.set(this, t)
            }) : z(this, function(e) {
                var n;
                if (s && void 0 === e) {
                    if (void 0 !== (n = K.get(s, t)))
                        return n;
                    if (void 0 !== (n = X(s, t)))
                        return n
                } else
                    this.each(function() {
                        K.set(this, t, e)
                    })
            }, null, e, arguments.length > 1, null, !0)
        },
        removeData: function(t) {
            return this.each(function() {
                K.remove(this, t)
            })
        }
    }),
    v.extend({
        queue: function(t, e, n) {
            var i;
            if (t)
                return i = Q.get(t, e = (e || "fx") + "queue"),
                n && (!i || Array.isArray(n) ? i = Q.access(t, e, v.makeArray(n)) : i.push(n)),
                i || []
        },
        dequeue: function(t, e) {
            var n = v.queue(t, e = e || "fx")
              , i = n.length
              , r = n.shift()
              , s = v._queueHooks(t, e);
            "inprogress" === r && (r = n.shift(),
            i--),
            r && ("fx" === e && n.unshift("inprogress"),
            delete s.stop,
            r.call(t, function() {
                v.dequeue(t, e)
            }, s)),
            !i && s && s.empty.fire()
        },
        _queueHooks: function(t, e) {
            var n = e + "queueHooks";
            return Q.get(t, n) || Q.access(t, n, {
                empty: v.Callbacks("once memory").add(function() {
                    Q.remove(t, [e + "queue", n])
                })
            })
        }
    }),
    v.fn.extend({
        queue: function(t, e) {
            var n = 2;
            return "string" != typeof t && (e = t,
            t = "fx",
            n--),
            arguments.length < n ? v.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                var n = v.queue(this, t, e);
                v._queueHooks(this, t),
                "fx" === t && "inprogress" !== n[0] && v.dequeue(this, t)
            })
        },
        dequeue: function(t) {
            return this.each(function() {
                v.dequeue(this, t)
            })
        },
        clearQueue: function(t) {
            return this.queue(t || "fx", [])
        },
        promise: function(t, e) {
            var n, i = 1, r = v.Deferred(), s = this, o = this.length, a = function() {
                --i || r.resolveWith(s, [s])
            };
            for ("string" != typeof t && (e = t,
            t = void 0),
            t = t || "fx"; o--; )
                (n = Q.get(s[o], t + "queueHooks")) && n.empty && (i++,
                n.empty.add(a));
            return a(),
            r.promise(e)
        }
    });
    var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , G = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$","i")
      , J = ["Top", "Right", "Bottom", "Left"]
      , tt = function(t, e) {
        return "none" === (t = e || t).style.display || "" === t.style.display && v.contains(t.ownerDocument, t) && "none" === v.css(t, "display")
    }
      , et = function(t, e, n, i) {
        var r, s, o = {};
        for (s in e)
            o[s] = t.style[s],
            t.style[s] = e[s];
        for (s in r = n.apply(t, i || []),
        e)
            t.style[s] = o[s];
        return r
    };
    function nt(t, e, n, i) {
        var r, s = 1, o = 20, a = i ? function() {
            return i.cur()
        }
        : function() {
            return v.css(t, e, "")
        }
        , l = a(), c = n && n[3] || (v.cssNumber[e] ? "" : "px"), u = (v.cssNumber[e] || "px" !== c && +l) && G.exec(v.css(t, e));
        if (u && u[3] !== c) {
            c = c || u[3],
            n = n || [],
            u = +l || 1;
            do {
                v.style(t, e, (u /= s = s || ".5") + c)
            } while (s !== (s = a() / l) && 1 !== s && --o)
        }
        return n && (u = +u || +l || 0,
        r = n[1] ? u + (n[1] + 1) * n[2] : +n[2],
        i && (i.unit = c,
        i.start = u,
        i.end = r)),
        r
    }
    var it = {};
    function rt(t) {
        var e, n = t.ownerDocument, i = t.nodeName, r = it[i];
        return r || (e = n.body.appendChild(n.createElement(i)),
        r = v.css(e, "display"),
        e.parentNode.removeChild(e),
        "none" === r && (r = "block"),
        it[i] = r,
        r)
    }
    function st(t, e) {
        for (var n, i, r = [], s = 0, o = t.length; s < o; s++)
            (i = t[s]).style && (n = i.style.display,
            e ? ("none" === n && (r[s] = Q.get(i, "display") || null,
            r[s] || (i.style.display = "")),
            "" === i.style.display && tt(i) && (r[s] = rt(i))) : "none" !== n && (r[s] = "none",
            Q.set(i, "display", n)));
        for (s = 0; s < o; s++)
            null != r[s] && (t[s].style.display = r[s]);
        return t
    }
    v.fn.extend({
        show: function() {
            return st(this, !0)
        },
        hide: function() {
            return st(this)
        },
        toggle: function(t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                tt(this) ? v(this).show() : v(this).hide()
            })
        }
    });
    var ot = /^(?:checkbox|radio)$/i
      , at = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
      , lt = /^$|\/(?:java|ecma)script/i
      , ct = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    function ut(t, e) {
        var n;
        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [],
        void 0 === e || e && S(t, e) ? v.merge([t], n) : n
    }
    function ht(t, e) {
        for (var n = 0, i = t.length; n < i; n++)
            Q.set(t[n], "globalEval", !e || Q.get(e[n], "globalEval"))
    }
    ct.optgroup = ct.option,
    ct.tbody = ct.tfoot = ct.colgroup = ct.caption = ct.thead,
    ct.th = ct.td;
    var dt = /<|&#?\w+;/;
    function ft(t, e, n, i, r) {
        for (var s, o, a, l, c, u, h = e.createDocumentFragment(), d = [], f = 0, p = t.length; f < p; f++)
            if ((s = t[f]) || 0 === s)
                if ("object" === v.type(s))
                    v.merge(d, s.nodeType ? [s] : s);
                else if (dt.test(s)) {
                    for (o = o || h.appendChild(e.createElement("div")),
                    a = (at.exec(s) || ["", ""])[1].toLowerCase(),
                    o.innerHTML = (l = ct[a] || ct._default)[1] + v.htmlPrefilter(s) + l[2],
                    u = l[0]; u--; )
                        o = o.lastChild;
                    v.merge(d, o.childNodes),
                    (o = h.firstChild).textContent = ""
                } else
                    d.push(e.createTextNode(s));
        for (h.textContent = "",
        f = 0; s = d[f++]; )
            if (i && v.inArray(s, i) > -1)
                r && r.push(s);
            else if (c = v.contains(s.ownerDocument, s),
            o = ut(h.appendChild(s), "script"),
            c && ht(o),
            n)
                for (u = 0; s = o[u++]; )
                    lt.test(s.type || "") && n.push(s);
        return h
    }
    !function() {
        var t = i.createDocumentFragment().appendChild(i.createElement("div"))
          , e = i.createElement("input");
        e.setAttribute("type", "radio"),
        e.setAttribute("checked", "checked"),
        e.setAttribute("name", "t"),
        t.appendChild(e),
        p.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
        t.innerHTML = "<textarea>x</textarea>",
        p.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var pt = i.documentElement
      , gt = /^key/
      , mt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , vt = /^([^.]*)(?:\.(.+)|)/;
    function yt() {
        return !0
    }
    function _t() {
        return !1
    }
    function wt() {
        try {
            return i.activeElement
        } catch (t) {}
    }
    function bt(t, e, n, i, r, s) {
        var o, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n,
            n = void 0),
            e)
                bt(t, a, n, i, e[a], s);
            return t
        }
        if (null == i && null == r ? (r = n,
        i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
        i = void 0) : (r = i,
        i = n,
        n = void 0)),
        !1 === r)
            r = _t;
        else if (!r)
            return t;
        return 1 === s && (o = r,
        (r = function(t) {
            return v().off(t),
            o.apply(this, arguments)
        }
        ).guid = o.guid || (o.guid = v.guid++)),
        t.each(function() {
            v.event.add(this, e, r, i, n)
        })
    }
    v.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var s, o, a, l, c, u, h, d, f, p, g, m = Q.get(t);
            if (m)
                for (n.handler && (n = (s = n).handler,
                r = s.selector),
                r && v.find.matchesSelector(pt, r),
                n.guid || (n.guid = v.guid++),
                (l = m.events) || (l = m.events = {}),
                (o = m.handle) || (o = m.handle = function(e) {
                    return void 0 !== v && v.event.triggered !== e.type ? v.event.dispatch.apply(t, arguments) : void 0
                }
                ),
                c = (e = (e || "").match(H) || [""]).length; c--; )
                    f = g = (a = vt.exec(e[c]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    f && (h = v.event.special[f] || {},
                    h = v.event.special[f = (r ? h.delegateType : h.bindType) || f] || {},
                    u = v.extend({
                        type: f,
                        origType: g,
                        data: i,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && v.expr.match.needsContext.test(r),
                        namespace: p.join(".")
                    }, s),
                    (d = l[f]) || ((d = l[f] = []).delegateCount = 0,
                    h.setup && !1 !== h.setup.call(t, i, p, o) || t.addEventListener && t.addEventListener(f, o)),
                    h.add && (h.add.call(t, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                    r ? d.splice(d.delegateCount++, 0, u) : d.push(u),
                    v.event.global[f] = !0)
        },
        remove: function(t, e, n, i, r) {
            var s, o, a, l, c, u, h, d, f, p, g, m = Q.hasData(t) && Q.get(t);
            if (m && (l = m.events)) {
                for (c = (e = (e || "").match(H) || [""]).length; c--; )
                    if (f = g = (a = vt.exec(e[c]) || [])[1],
                    p = (a[2] || "").split(".").sort(),
                    f) {
                        for (h = v.event.special[f] || {},
                        d = l[f = (i ? h.delegateType : h.bindType) || f] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        o = s = d.length; s--; )
                            u = d[s],
                            !r && g !== u.origType || n && n.guid !== u.guid || a && !a.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (d.splice(s, 1),
                            u.selector && d.delegateCount--,
                            h.remove && h.remove.call(t, u));
                        o && !d.length && (h.teardown && !1 !== h.teardown.call(t, p, m.handle) || v.removeEvent(t, f, m.handle),
                        delete l[f])
                    } else
                        for (f in l)
                            v.event.remove(t, f + e[c], n, i, !0);
                v.isEmptyObject(l) && Q.remove(t, "handle events")
            }
        },
        dispatch: function(t) {
            var e, n, i, r, s, o, a = v.event.fix(t), l = new Array(arguments.length), c = (Q.get(this, "events") || {})[a.type] || [], u = v.event.special[a.type] || {};
            for (l[0] = a,
            e = 1; e < arguments.length; e++)
                l[e] = arguments[e];
            if (a.delegateTarget = this,
            !u.preDispatch || !1 !== u.preDispatch.call(this, a)) {
                for (o = v.event.handlers.call(this, a, c),
                e = 0; (r = o[e++]) && !a.isPropagationStopped(); )
                    for (a.currentTarget = r.elem,
                    n = 0; (s = r.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                        a.rnamespace && !a.rnamespace.test(s.namespace) || (a.handleObj = s,
                        a.data = s.data,
                        void 0 !== (i = ((v.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, l)) && !1 === (a.result = i) && (a.preventDefault(),
                        a.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, a),
                a.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, s, o, a = [], l = e.delegateCount, c = t.target;
            if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                for (; c !== this; c = c.parentNode || this)
                    if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                        for (s = [],
                        o = {},
                        n = 0; n < l; n++)
                            void 0 === o[r = (i = e[n]).selector + " "] && (o[r] = i.needsContext ? v(r, this).index(c) > -1 : v.find(r, this, null, [c]).length),
                            o[r] && s.push(i);
                        s.length && a.push({
                            elem: c,
                            handlers: s
                        })
                    }
            return c = this,
            l < e.length && a.push({
                elem: c,
                handlers: e.slice(l)
            }),
            a
        },
        addProp: function(t, e) {
            Object.defineProperty(v.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: v.isFunction(e) ? function() {
                    if (this.originalEvent)
                        return e(this.originalEvent)
                }
                : function() {
                    if (this.originalEvent)
                        return this.originalEvent[t]
                }
                ,
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(t) {
            return t[v.expando] ? t : new v.Event(t)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== wt() && this.focus)
                        return this.focus(),
                        !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === wt() && this.blur)
                        return this.blur(),
                        !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && S(this, "input"))
                        return this.click(),
                        !1
                },
                _default: function(t) {
                    return S(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        }
    },
    v.removeEvent = function(t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    }
    ,
    v.Event = function(t, e) {
        return this instanceof v.Event ? (t && t.type ? (this.originalEvent = t,
        this.type = t.type,
        this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? yt : _t,
        this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target,
        this.currentTarget = t.currentTarget,
        this.relatedTarget = t.relatedTarget) : this.type = t,
        e && v.extend(this, e),
        this.timeStamp = t && t.timeStamp || v.now(),
        void (this[v.expando] = !0)) : new v.Event(t,e)
    }
    ,
    v.Event.prototype = {
        constructor: v.Event,
        isDefaultPrevented: _t,
        isPropagationStopped: _t,
        isImmediatePropagationStopped: _t,
        isSimulated: !1,
        preventDefault: function() {
            var t = this.originalEvent;
            this.isDefaultPrevented = yt,
            t && !this.isSimulated && t.preventDefault()
        },
        stopPropagation: function() {
            var t = this.originalEvent;
            this.isPropagationStopped = yt,
            t && !this.isSimulated && t.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = yt,
            t && !this.isSimulated && t.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    v.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(t) {
            var e = t.button;
            return null == t.which && gt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && mt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
        }
    }, v.event.addProp),
    v.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(t, e) {
        v.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function(t) {
                var n, i = this, r = t.relatedTarget, s = t.handleObj;
                return r && (r === i || v.contains(i, r)) || (t.type = s.origType,
                n = s.handler.apply(this, arguments),
                t.type = e),
                n
            }
        }
    }),
    v.fn.extend({
        on: function(t, e, n, i) {
            return bt(this, t, e, n, i)
        },
        one: function(t, e, n, i) {
            return bt(this, t, e, n, i, 1)
        },
        off: function(t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj)
                return i = t.handleObj,
                v(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                this;
            if ("object" == typeof t) {
                for (r in t)
                    this.off(r, e, t[r]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e,
            e = void 0),
            !1 === n && (n = _t),
            this.each(function() {
                v.event.remove(this, t, n, e)
            })
        }
    });
    var xt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
      , Ct = /<script|<style|<link/i
      , Et = /checked\s*(?:[^=]|=\s*.checked.)/i
      , Tt = /^true\/(.*)/
      , Dt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function St(t, e) {
        return S(t, "table") && S(11 !== e.nodeType ? e : e.firstChild, "tr") && v(">tbody", t)[0] || t
    }
    function At(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
        t
    }
    function kt(t) {
        var e = Tt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
        t
    }
    function It(t, e) {
        var n, i, r, s, o, a, l, c;
        if (1 === e.nodeType) {
            if (Q.hasData(t) && (s = Q.access(t),
            o = Q.set(e, s),
            c = s.events))
                for (r in delete o.handle,
                o.events = {},
                c)
                    for (n = 0,
                    i = c[r].length; n < i; n++)
                        v.event.add(e, r, c[r][n]);
            K.hasData(t) && (a = K.access(t),
            l = v.extend({}, a),
            K.set(e, l))
        }
    }
    function Nt(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && ot.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }
    function jt(t, e, n, i) {
        e = o.apply([], e);
        var r, s, a, l, c, u, h = 0, d = t.length, f = d - 1, m = e[0], y = v.isFunction(m);
        if (y || d > 1 && "string" == typeof m && !p.checkClone && Et.test(m))
            return t.each(function(r) {
                var s = t.eq(r);
                y && (e[0] = m.call(this, r, s.html())),
                jt(s, e, n, i)
            });
        if (d && (s = (r = ft(e, t[0].ownerDocument, !1, t, i)).firstChild,
        1 === r.childNodes.length && (r = s),
        s || i)) {
            for (l = (a = v.map(ut(r, "script"), At)).length; h < d; h++)
                c = r,
                h !== f && (c = v.clone(c, !0, !0),
                l && v.merge(a, ut(c, "script"))),
                n.call(t[h], c, h);
            if (l)
                for (u = a[a.length - 1].ownerDocument,
                v.map(a, kt),
                h = 0; h < l; h++)
                    lt.test((c = a[h]).type || "") && !Q.access(c, "globalEval") && v.contains(u, c) && (c.src ? v._evalUrl && v._evalUrl(c.src) : g(c.textContent.replace(Dt, ""), u))
        }
        return t
    }
    function Ot(t, e, n) {
        for (var i, r = e ? v.filter(e, t) : t, s = 0; null != (i = r[s]); s++)
            n || 1 !== i.nodeType || v.cleanData(ut(i)),
            i.parentNode && (n && v.contains(i.ownerDocument, i) && ht(ut(i, "script")),
            i.parentNode.removeChild(i));
        return t
    }
    v.extend({
        htmlPrefilter: function(t) {
            return t.replace(xt, "<$1></$2>")
        },
        clone: function(t, e, n) {
            var i, r, s, o, a = t.cloneNode(!0), l = v.contains(t.ownerDocument, t);
            if (!(p.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || v.isXMLDoc(t)))
                for (o = ut(a),
                i = 0,
                r = (s = ut(t)).length; i < r; i++)
                    Nt(s[i], o[i]);
            if (e)
                if (n)
                    for (s = s || ut(t),
                    o = o || ut(a),
                    i = 0,
                    r = s.length; i < r; i++)
                        It(s[i], o[i]);
                else
                    It(t, a);
            return (o = ut(a, "script")).length > 0 && ht(o, !l && ut(t, "script")),
            a
        },
        cleanData: function(t) {
            for (var e, n, i, r = v.event.special, s = 0; void 0 !== (n = t[s]); s++)
                if (B(n)) {
                    if (e = n[Q.expando]) {
                        if (e.events)
                            for (i in e.events)
                                r[i] ? v.event.remove(n, i) : v.removeEvent(n, i, e.handle);
                        n[Q.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }),
    v.fn.extend({
        detach: function(t) {
            return Ot(this, t, !0)
        },
        remove: function(t) {
            return Ot(this, t)
        },
        text: function(t) {
            return z(this, function(t) {
                return void 0 === t ? v.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                })
            }, null, t, arguments.length)
        },
        append: function() {
            return jt(this, arguments, function(t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || St(this, t).appendChild(t)
            })
        },
        prepend: function() {
            return jt(this, arguments, function(t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = St(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function() {
            return jt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function() {
            return jt(this, arguments, function(t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function() {
            for (var t, e = 0; null != (t = this[e]); e++)
                1 === t.nodeType && (v.cleanData(ut(t, !1)),
                t.textContent = "");
            return this
        },
        clone: function(t, e) {
            return t = null != t && t,
            e = null == e ? t : e,
            this.map(function() {
                return v.clone(this, t, e)
            })
        },
        html: function(t) {
            return z(this, function(t) {
                var e = this[0] || {}
                  , n = 0
                  , i = this.length;
                if (void 0 === t && 1 === e.nodeType)
                    return e.innerHTML;
                if ("string" == typeof t && !Ct.test(t) && !ct[(at.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = v.htmlPrefilter(t);
                    try {
                        for (; n < i; n++)
                            1 === (e = this[n] || {}).nodeType && (v.cleanData(ut(e, !1)),
                            e.innerHTML = t);
                        e = 0
                    } catch (r) {}
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function() {
            var t = [];
            return jt(this, arguments, function(e) {
                var n = this.parentNode;
                v.inArray(this, t) < 0 && (v.cleanData(ut(this)),
                n && n.replaceChild(e, this))
            }, t)
        }
    }),
    v.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(t, e) {
        v.fn[t] = function(t) {
            for (var n, i = [], r = v(t), s = r.length - 1, o = 0; o <= s; o++)
                n = o === s ? this : this.clone(!0),
                v(r[o])[e](n),
                a.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var Pt = /^margin/
      , Lt = new RegExp("^(" + Z + ")(?!px)[a-z%]+$","i")
      , Ht = function(e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t),
        n.getComputedStyle(e)
    };
    function $t(t, e, n) {
        var i, r, s, o, a = t.style;
        return (n = n || Ht(t)) && ("" !== (o = n.getPropertyValue(e) || n[e]) || v.contains(t.ownerDocument, t) || (o = v.style(t, e)),
        !p.pixelMarginRight() && Lt.test(o) && Pt.test(e) && (i = a.width,
        r = a.minWidth,
        s = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = o,
        o = n.width,
        a.width = i,
        a.minWidth = r,
        a.maxWidth = s)),
        void 0 !== o ? o + "" : o
    }
    function Mt(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    !function() {
        function e() {
            if (l) {
                l.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
                l.innerHTML = "",
                pt.appendChild(a);
                var e = t.getComputedStyle(l);
                n = "1%" !== e.top,
                o = "2px" === e.marginLeft,
                r = "4px" === e.width,
                l.style.marginRight = "50%",
                s = "4px" === e.marginRight,
                pt.removeChild(a),
                l = null
            }
        }
        var n, r, s, o, a = i.createElement("div"), l = i.createElement("div");
        l.style && (l.style.backgroundClip = "content-box",
        l.cloneNode(!0).style.backgroundClip = "",
        p.clearCloneStyle = "content-box" === l.style.backgroundClip,
        a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        a.appendChild(l),
        v.extend(p, {
            pixelPosition: function() {
                return e(),
                n
            },
            boxSizingReliable: function() {
                return e(),
                r
            },
            pixelMarginRight: function() {
                return e(),
                s
            },
            reliableMarginLeft: function() {
                return e(),
                o
            }
        }))
    }();
    var Rt = /^(none|table(?!-c[ea]).+)/
      , Wt = /^--/
      , qt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , Ft = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , zt = ["Webkit", "Moz", "ms"]
      , Bt = i.createElement("div").style;
    function Ut(t) {
        var e = v.cssProps[t];
        return e || (e = v.cssProps[t] = function(t) {
            if (t in Bt)
                return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = zt.length; n--; )
                if ((t = zt[n] + e)in Bt)
                    return t
        }(t) || t),
        e
    }
    function Qt(t, e, n) {
        var i = G.exec(e);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
    }
    function Kt(t, e, n, i, r) {
        var s, o = 0;
        for (s = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0; s < 4; s += 2)
            "margin" === n && (o += v.css(t, n + J[s], !0, r)),
            i ? ("content" === n && (o -= v.css(t, "padding" + J[s], !0, r)),
            "margin" !== n && (o -= v.css(t, "border" + J[s] + "Width", !0, r))) : (o += v.css(t, "padding" + J[s], !0, r),
            "padding" !== n && (o += v.css(t, "border" + J[s] + "Width", !0, r)));
        return o
    }
    function Vt(t, e, n) {
        var i, r = Ht(t), s = $t(t, e, r), o = "border-box" === v.css(t, "boxSizing", !1, r);
        return Lt.test(s) ? s : (i = o && (p.boxSizingReliable() || s === t.style[e]),
        "auto" === s && (s = t["offset" + e[0].toUpperCase() + e.slice(1)]),
        (s = parseFloat(s) || 0) + Kt(t, e, n || (o ? "border" : "content"), i, r) + "px")
    }
    function Yt(t, e, n, i, r) {
        return new Yt.prototype.init(t,e,n,i,r)
    }
    v.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = $t(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, s, o, a = v.camelCase(e), l = Wt.test(e), c = t.style;
                return l || (e = Ut(a)),
                o = v.cssHooks[e] || v.cssHooks[a],
                void 0 === n ? o && "get"in o && void 0 !== (r = o.get(t, !1, i)) ? r : c[e] : ("string" == (s = typeof n) && (r = G.exec(n)) && r[1] && (n = nt(t, e, r),
                s = "number"),
                void (null != n && n == n && ("number" === s && (n += r && r[3] || (v.cssNumber[a] ? "" : "px")),
                p.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"),
                o && "set"in o && void 0 === (n = o.set(t, n, i)) || (l ? c.setProperty(e, n) : c[e] = n))))
            }
        },
        css: function(t, e, n, i) {
            var r, s, o, a = v.camelCase(e);
            return Wt.test(e) || (e = Ut(a)),
            (o = v.cssHooks[e] || v.cssHooks[a]) && "get"in o && (r = o.get(t, !0, n)),
            void 0 === r && (r = $t(t, e, i)),
            "normal" === r && e in Ft && (r = Ft[e]),
            "" === n || n ? (s = parseFloat(r),
            !0 === n || isFinite(s) ? s || 0 : r) : r
        }
    }),
    v.each(["height", "width"], function(t, e) {
        v.cssHooks[e] = {
            get: function(t, n, i) {
                if (n)
                    return !Rt.test(v.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Vt(t, e, i) : et(t, qt, function() {
                        return Vt(t, e, i)
                    })
            },
            set: function(t, n, i) {
                var r, s = i && Ht(t), o = i && Kt(t, e, i, "border-box" === v.css(t, "boxSizing", !1, s), s);
                return o && (r = G.exec(n)) && "px" !== (r[3] || "px") && (t.style[e] = n,
                n = v.css(t, e)),
                Qt(0, n, o)
            }
        }
    }),
    v.cssHooks.marginLeft = Mt(p.reliableMarginLeft, function(t, e) {
        if (e)
            return (parseFloat($t(t, "marginLeft")) || t.getBoundingClientRect().left - et(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px"
    }),
    v.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(t, e) {
        v.cssHooks[t + e] = {
            expand: function(n) {
                for (var i = 0, r = {}, s = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++)
                    r[t + J[i] + e] = s[i] || s[i - 2] || s[0];
                return r
            }
        },
        Pt.test(t) || (v.cssHooks[t + e].set = Qt)
    }),
    v.fn.extend({
        css: function(t, e) {
            return z(this, function(t, e, n) {
                var i, r, s = {}, o = 0;
                if (Array.isArray(e)) {
                    for (i = Ht(t),
                    r = e.length; o < r; o++)
                        s[e[o]] = v.css(t, e[o], !1, i);
                    return s
                }
                return void 0 !== n ? v.style(t, e, n) : v.css(t, e)
            }, t, e, arguments.length > 1)
        }
    }),
    v.Tween = Yt,
    (Yt.prototype = {
        constructor: Yt,
        init: function(t, e, n, i, r, s) {
            this.elem = t,
            this.prop = n,
            this.easing = r || v.easing._default,
            this.options = e,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = s || (v.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var t = Yt.propHooks[this.prop];
            return t && t.get ? t.get(this) : Yt.propHooks._default.get(this)
        },
        run: function(t) {
            var e, n = Yt.propHooks[this.prop];
            return this.pos = e = this.options.duration ? v.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : t,
            this.now = (this.end - this.start) * e + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : Yt.propHooks._default.set(this),
            this
        }
    }).init.prototype = Yt.prototype,
    (Yt.propHooks = {
        _default: {
            get: function(t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = v.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(t) {
                v.fx.step[t.prop] ? v.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[v.cssProps[t.prop]] && !v.cssHooks[t.prop] ? t.elem[t.prop] = t.now : v.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }).scrollTop = Yt.propHooks.scrollLeft = {
        set: function(t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    },
    v.easing = {
        linear: function(t) {
            return t
        },
        swing: function(t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    },
    v.fx = Yt.prototype.init,
    v.fx.step = {};
    var Xt, Zt, Gt = /^(?:toggle|show|hide)$/, Jt = /queueHooks$/;
    function te() {
        Zt && (!1 === i.hidden && t.requestAnimationFrame ? t.requestAnimationFrame(te) : t.setTimeout(te, v.fx.interval),
        v.fx.tick())
    }
    function ee() {
        return t.setTimeout(function() {
            Xt = void 0
        }),
        Xt = v.now()
    }
    function ne(t, e) {
        var n, i = 0, r = {
            height: t
        };
        for (e = e ? 1 : 0; i < 4; i += 2 - e)
            r["margin" + (n = J[i])] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t),
        r
    }
    function ie(t, e, n) {
        for (var i, r = (re.tweeners[e] || []).concat(re.tweeners["*"]), s = 0, o = r.length; s < o; s++)
            if (i = r[s].call(n, e, t))
                return i
    }
    function re(t, e, n) {
        var i, r, s = 0, o = re.prefilters.length, a = v.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var e = Xt || ee(), n = Math.max(0, c.startTime + c.duration - e), i = 1 - (n / c.duration || 0), s = 0, o = c.tweens.length; s < o; s++)
                c.tweens[s].run(i);
            return a.notifyWith(t, [c, i, n]),
            i < 1 && o ? n : (o || a.notifyWith(t, [c, 1, 0]),
            a.resolveWith(t, [c]),
            !1)
        }, c = a.promise({
            elem: t,
            props: v.extend({}, e),
            opts: v.extend(!0, {
                specialEasing: {},
                easing: v.easing._default
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: Xt || ee(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = v.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(i),
                i
            },
            stop: function(e) {
                var n = 0
                  , i = e ? c.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; n < i; n++)
                    c.tweens[n].run(1);
                return e ? (a.notifyWith(t, [c, 1, 0]),
                a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]),
                this
            }
        }), u = c.props;
        for (function(t, e) {
            var n, i, r, s, o;
            for (n in t)
                if (r = e[i = v.camelCase(n)],
                s = t[n],
                Array.isArray(s) && (r = s[1],
                s = t[n] = s[0]),
                n !== i && (t[i] = s,
                delete t[n]),
                (o = v.cssHooks[i]) && "expand"in o)
                    for (n in s = o.expand(s),
                    delete t[i],
                    s)
                        n in t || (t[n] = s[n],
                        e[n] = r);
                else
                    e[i] = r
        }(u, c.opts.specialEasing); s < o; s++)
            if (i = re.prefilters[s].call(c, t, u, c.opts))
                return v.isFunction(i.stop) && (v._queueHooks(c.elem, c.opts.queue).stop = v.proxy(i.stop, i)),
                i;
        return v.map(u, ie, c),
        v.isFunction(c.opts.start) && c.opts.start.call(t, c),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
        v.fx.timer(v.extend(l, {
            elem: t,
            anim: c,
            queue: c.opts.queue
        })),
        c
    }
    v.Animation = v.extend(re, {
        tweeners: {
            "*": [function(t, e) {
                var n = this.createTween(t, e);
                return nt(n.elem, t, G.exec(e), n),
                n
            }
            ]
        },
        tweener: function(t, e) {
            v.isFunction(t) ? (e = t,
            t = ["*"]) : t = t.match(H);
            for (var n, i = 0, r = t.length; i < r; i++)
                (re.tweeners[n = t[i]] = re.tweeners[n] || []).unshift(e)
        },
        prefilters: [function(t, e, n) {
            var i, r, s, o, a, l, c, u, h = "width"in e || "height"in e, d = this, f = {}, p = t.style, g = t.nodeType && tt(t), m = Q.get(t, "fxshow");
            for (i in n.queue || (null == (o = v._queueHooks(t, "fx")).unqueued && (o.unqueued = 0,
            a = o.empty.fire,
            o.empty.fire = function() {
                o.unqueued || a()
            }
            ),
            o.unqueued++,
            d.always(function() {
                d.always(function() {
                    o.unqueued--,
                    v.queue(t, "fx").length || o.empty.fire()
                })
            })),
            e)
                if (Gt.test(r = e[i])) {
                    if (delete e[i],
                    s = s || "toggle" === r,
                    r === (g ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i])
                            continue;
                        g = !0
                    }
                    f[i] = m && m[i] || v.style(t, i)
                }
            if ((l = !v.isEmptyObject(e)) || !v.isEmptyObject(f))
                for (i in h && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                null == (c = m && m.display) && (c = Q.get(t, "display")),
                "none" === (u = v.css(t, "display")) && (c ? u = c : (st([t], !0),
                c = t.style.display || c,
                u = v.css(t, "display"),
                st([t]))),
                ("inline" === u || "inline-block" === u && null != c) && "none" === v.css(t, "float") && (l || (d.done(function() {
                    p.display = c
                }),
                null == c && (c = "none" === (u = p.display) ? "" : u)),
                p.display = "inline-block")),
                n.overflow && (p.overflow = "hidden",
                d.always(function() {
                    p.overflow = n.overflow[0],
                    p.overflowX = n.overflow[1],
                    p.overflowY = n.overflow[2]
                })),
                l = !1,
                f)
                    l || (m ? "hidden"in m && (g = m.hidden) : m = Q.access(t, "fxshow", {
                        display: c
                    }),
                    s && (m.hidden = !g),
                    g && st([t], !0),
                    d.done(function() {
                        for (i in g || st([t]),
                        Q.remove(t, "fxshow"),
                        f)
                            v.style(t, i, f[i])
                    })),
                    l = ie(g ? m[i] : 0, i, d),
                    i in m || (m[i] = l.start,
                    g && (l.end = l.start,
                    l.start = 0))
        }
        ],
        prefilter: function(t, e) {
            e ? re.prefilters.unshift(t) : re.prefilters.push(t)
        }
    }),
    v.speed = function(t, e, n) {
        var i = t && "object" == typeof t ? v.extend({}, t) : {
            complete: n || !n && e || v.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !v.isFunction(e) && e
        };
        return v.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration = i.duration in v.fx.speeds ? v.fx.speeds[i.duration] : v.fx.speeds._default),
        null != i.queue && !0 !== i.queue || (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            v.isFunction(i.old) && i.old.call(this),
            i.queue && v.dequeue(this, i.queue)
        }
        ,
        i
    }
    ,
    v.fn.extend({
        fadeTo: function(t, e, n, i) {
            return this.filter(tt).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function(t, e, n, i) {
            var r = v.isEmptyObject(t)
              , s = v.speed(e, n, i)
              , o = function() {
                var e = re(this, v.extend({}, t), s);
                (r || Q.get(this, "finish")) && e.stop(!0)
            };
            return o.finish = o,
            r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
        },
        stop: function(t, e, n) {
            var i = function(t) {
                var e = t.stop;
                delete t.stop,
                e(n)
            };
            return "string" != typeof t && (n = e,
            e = t,
            t = void 0),
            e && !1 !== t && this.queue(t || "fx", []),
            this.each(function() {
                var e = !0
                  , r = null != t && t + "queueHooks"
                  , s = v.timers
                  , o = Q.get(this);
                if (r)
                    o[r] && o[r].stop && i(o[r]);
                else
                    for (r in o)
                        o[r] && o[r].stop && Jt.test(r) && i(o[r]);
                for (r = s.length; r--; )
                    s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(n),
                    e = !1,
                    s.splice(r, 1));
                !e && n || v.dequeue(this, t)
            })
        },
        finish: function(t) {
            return !1 !== t && (t = t || "fx"),
            this.each(function() {
                var e, n = Q.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], s = v.timers, o = i ? i.length : 0;
                for (n.finish = !0,
                v.queue(this, t, []),
                r && r.stop && r.stop.call(this, !0),
                e = s.length; e--; )
                    s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0),
                    s.splice(e, 1));
                for (e = 0; e < o; e++)
                    i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }),
    v.each(["toggle", "show", "hide"], function(t, e) {
        var n = v.fn[e];
        v.fn[e] = function(t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ne(e, !0), t, i, r)
        }
    }),
    v.each({
        slideDown: ne("show"),
        slideUp: ne("hide"),
        slideToggle: ne("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(t, e) {
        v.fn[t] = function(t, n, i) {
            return this.animate(e, t, n, i)
        }
    }),
    v.timers = [],
    v.fx.tick = function() {
        var t, e = 0, n = v.timers;
        for (Xt = v.now(); e < n.length; e++)
            (t = n[e])() || n[e] !== t || n.splice(e--, 1);
        n.length || v.fx.stop(),
        Xt = void 0
    }
    ,
    v.fx.timer = function(t) {
        v.timers.push(t),
        v.fx.start()
    }
    ,
    v.fx.interval = 13,
    v.fx.start = function() {
        Zt || (Zt = !0,
        te())
    }
    ,
    v.fx.stop = function() {
        Zt = null
    }
    ,
    v.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    v.fn.delay = function(e, n) {
        return e = v.fx && v.fx.speeds[e] || e,
        this.queue(n = n || "fx", function(n, i) {
            var r = t.setTimeout(n, e);
            i.stop = function() {
                t.clearTimeout(r)
            }
        })
    }
    ,
    function() {
        var t = i.createElement("input")
          , e = i.createElement("select").appendChild(i.createElement("option"));
        t.type = "checkbox",
        p.checkOn = "" !== t.value,
        p.optSelected = e.selected,
        (t = i.createElement("input")).value = "t",
        t.type = "radio",
        p.radioValue = "t" === t.value
    }();
    var se, oe = v.expr.attrHandle;
    v.fn.extend({
        attr: function(t, e) {
            return z(this, v.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                v.removeAttr(this, t)
            })
        }
    }),
    v.extend({
        attr: function(t, e, n) {
            var i, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
                return void 0 === t.getAttribute ? v.prop(t, e, n) : (1 === s && v.isXMLDoc(t) || (r = v.attrHooks[e.toLowerCase()] || (v.expr.match.bool.test(e) ? se : void 0)),
                void 0 !== n ? null === n ? void v.removeAttr(t, e) : r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""),
                n) : r && "get"in r && null !== (i = r.get(t, e)) ? i : null == (i = v.find.attr(t, e)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (!p.radioValue && "radio" === e && S(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e),
                        n && (t.value = n),
                        e
                    }
                }
            }
        },
        removeAttr: function(t, e) {
            var n, i = 0, r = e && e.match(H);
            if (r && 1 === t.nodeType)
                for (; n = r[i++]; )
                    t.removeAttribute(n)
        }
    }),
    se = {
        set: function(t, e, n) {
            return !1 === e ? v.removeAttr(t, n) : t.setAttribute(n, n),
            n
        }
    },
    v.each(v.expr.match.bool.source.match(/\w+/g), function(t, e) {
        var n = oe[e] || v.find.attr;
        oe[e] = function(t, e, i) {
            var r, s, o = e.toLowerCase();
            return i || (s = oe[o],
            oe[o] = r,
            r = null != n(t, e, i) ? o : null,
            oe[o] = s),
            r
        }
    });
    var ae = /^(?:input|select|textarea|button)$/i
      , le = /^(?:a|area)$/i;
    function ce(t) {
        return (t.match(H) || []).join(" ")
    }
    function ue(t) {
        return t.getAttribute && t.getAttribute("class") || ""
    }
    v.fn.extend({
        prop: function(t, e) {
            return z(this, v.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[v.propFix[t] || t]
            })
        }
    }),
    v.extend({
        prop: function(t, e, n) {
            var i, r, s = t.nodeType;
            if (3 !== s && 8 !== s && 2 !== s)
                return 1 === s && v.isXMLDoc(t) || (r = v.propHooks[e = v.propFix[e] || e]),
                void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get"in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function(t) {
                    var e = v.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ae.test(t.nodeName) || le.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }),
    p.optSelected || (v.propHooks.selected = {
        get: function(t) {
            return null
        },
        set: function(t) {}
    }),
    v.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        v.propFix[this.toLowerCase()] = this
    }),
    v.fn.extend({
        addClass: function(t) {
            var e, n, i, r, s, o, a, l = 0;
            if (v.isFunction(t))
                return this.each(function(e) {
                    v(this).addClass(t.call(this, e, ue(this)))
                });
            if ("string" == typeof t && t)
                for (e = t.match(H) || []; n = this[l++]; )
                    if (r = ue(n),
                    i = 1 === n.nodeType && " " + ce(r) + " ") {
                        for (o = 0; s = e[o++]; )
                            i.indexOf(" " + s + " ") < 0 && (i += s + " ");
                        r !== (a = ce(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, s, o, a, l = 0;
            if (v.isFunction(t))
                return this.each(function(e) {
                    v(this).removeClass(t.call(this, e, ue(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match(H) || []; n = this[l++]; )
                    if (r = ue(n),
                    i = 1 === n.nodeType && " " + ce(r) + " ") {
                        for (o = 0; s = e[o++]; )
                            for (; i.indexOf(" " + s + " ") > -1; )
                                i = i.replace(" " + s + " ", " ");
                        r !== (a = ce(i)) && n.setAttribute("class", a)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : v.isFunction(t) ? this.each(function(n) {
                v(this).toggleClass(t.call(this, n, ue(this), e), e)
            }) : this.each(function() {
                var e, i, r, s;
                if ("string" === n)
                    for (i = 0,
                    r = v(this),
                    s = t.match(H) || []; e = s[i++]; )
                        r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else
                    void 0 !== t && "boolean" !== n || ((e = ue(this)) && Q.set(this, "__className__", e),
                    this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Q.get(this, "__className__") || ""))
            })
        },
        hasClass: function(t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++]; )
                if (1 === n.nodeType && (" " + ce(ue(n)) + " ").indexOf(e) > -1)
                    return !0;
            return !1
        }
    });
    var he = /\r/g;
    v.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = v.isFunction(t),
            this.each(function(n) {
                var r;
                1 === this.nodeType && (null == (r = i ? t.call(this, n, v(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : Array.isArray(r) && (r = v.map(r, function(t) {
                    return null == t ? "" : t + ""
                })),
                (e = v.valHooks[this.type] || v.valHooks[this.nodeName.toLowerCase()]) && "set"in e && void 0 !== e.set(this, r, "value") || (this.value = r))
            })) : r ? (e = v.valHooks[r.type] || v.valHooks[r.nodeName.toLowerCase()]) && "get"in e && void 0 !== (n = e.get(r, "value")) ? n : "string" == typeof (n = r.value) ? n.replace(he, "") : null == n ? "" : n : void 0
        }
    }),
    v.extend({
        valHooks: {
            option: {
                get: function(t) {
                    var e = v.find.attr(t, "value");
                    return null != e ? e : ce(v.text(t))
                }
            },
            select: {
                get: function(t) {
                    var e, n, i, r = t.options, s = t.selectedIndex, o = "select-one" === t.type, a = o ? null : [], l = o ? s + 1 : r.length;
                    for (i = s < 0 ? l : o ? s : 0; i < l; i++)
                        if (((n = r[i]).selected || i === s) && !n.disabled && (!n.parentNode.disabled || !S(n.parentNode, "optgroup"))) {
                            if (e = v(n).val(),
                            o)
                                return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) {
                    for (var n, i, r = t.options, s = v.makeArray(e), o = r.length; o--; )
                        ((i = r[o]).selected = v.inArray(v.valHooks.option.get(i), s) > -1) && (n = !0);
                    return n || (t.selectedIndex = -1),
                    s
                }
            }
        }
    }),
    v.each(["radio", "checkbox"], function() {
        v.valHooks[this] = {
            set: function(t, e) {
                if (Array.isArray(e))
                    return t.checked = v.inArray(v(t).val(), e) > -1
            }
        },
        p.checkOn || (v.valHooks[this].get = function(t) {
            return null === t.getAttribute("value") ? "on" : t.value
        }
        )
    });
    var de = /^(?:focusinfocus|focusoutblur)$/;
    v.extend(v.event, {
        trigger: function(e, n, r, s) {
            var o, a, l, c, u, d, f, p = [r || i], g = h.call(e, "type") ? e.type : e, m = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = l = r = r || i,
            3 !== r.nodeType && 8 !== r.nodeType && !de.test(g + v.event.triggered) && (g.indexOf(".") > -1 && (m = g.split("."),
            g = m.shift(),
            m.sort()),
            u = g.indexOf(":") < 0 && "on" + g,
            (e = e[v.expando] ? e : new v.Event(g,"object" == typeof e && e)).isTrigger = s ? 2 : 3,
            e.namespace = m.join("."),
            e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            e.result = void 0,
            e.target || (e.target = r),
            n = null == n ? [e] : v.makeArray(n, [e]),
            f = v.event.special[g] || {},
            s || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!s && !f.noBubble && !v.isWindow(r)) {
                    for (de.test((c = f.delegateType || g) + g) || (a = a.parentNode); a; a = a.parentNode)
                        p.push(a),
                        l = a;
                    l === (r.ownerDocument || i) && p.push(l.defaultView || l.parentWindow || t)
                }
                for (o = 0; (a = p[o++]) && !e.isPropagationStopped(); )
                    e.type = o > 1 ? c : f.bindType || g,
                    (d = (Q.get(a, "events") || {})[e.type] && Q.get(a, "handle")) && d.apply(a, n),
                    (d = u && a[u]) && d.apply && B(a) && (e.result = d.apply(a, n),
                    !1 === e.result && e.preventDefault());
                return e.type = g,
                s || e.isDefaultPrevented() || f._default && !1 !== f._default.apply(p.pop(), n) || !B(r) || u && v.isFunction(r[g]) && !v.isWindow(r) && ((l = r[u]) && (r[u] = null),
                v.event.triggered = g,
                r[g](),
                v.event.triggered = void 0,
                l && (r[u] = l)),
                e.result
            }
        },
        simulate: function(t, e, n) {
            var i = v.extend(new v.Event, n, {
                type: t,
                isSimulated: !0
            });
            v.event.trigger(i, null, e)
        }
    }),
    v.fn.extend({
        trigger: function(t, e) {
            return this.each(function() {
                v.event.trigger(t, e, this)
            })
        },
        triggerHandler: function(t, e) {
            var n = this[0];
            if (n)
                return v.event.trigger(t, e, n, !0)
        }
    }),
    v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, e) {
        v.fn[e] = function(t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }),
    v.fn.extend({
        hover: function(t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    }),
    p.focusin = "onfocusin"in t,
    p.focusin || v.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            v.event.simulate(e, t.target, v.event.fix(t))
        };
        v.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this
                  , r = Q.access(i, e);
                r || i.addEventListener(t, n, !0),
                Q.access(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                  , r = Q.access(i, e) - 1;
                r ? Q.access(i, e, r) : (i.removeEventListener(t, n, !0),
                Q.remove(i, e))
            }
        }
    });
    var fe = t.location
      , pe = v.now()
      , ge = /\?/;
    v.parseXML = function(e) {
        var n;
        if (!e || "string" != typeof e)
            return null;
        try {
            n = (new t.DOMParser).parseFromString(e, "text/xml")
        } catch (i) {
            n = void 0
        }
        return n && !n.getElementsByTagName("parsererror").length || v.error("Invalid XML: " + e),
        n
    }
    ;
    var me = /\[\]$/
      , ve = /\r?\n/g
      , ye = /^(?:submit|button|image|reset|file)$/i
      , _e = /^(?:input|select|textarea|keygen)/i;
    function we(t, e, n, i) {
        var r;
        if (Array.isArray(e))
            v.each(e, function(e, r) {
                n || me.test(t) ? i(t, r) : we(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
            });
        else if (n || "object" !== v.type(e))
            i(t, e);
        else
            for (r in e)
                we(t + "[" + r + "]", e[r], n, i)
    }
    v.param = function(t, e) {
        var n, i = [], r = function(t, e) {
            var n = v.isFunction(e) ? e() : e;
            i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
        };
        if (Array.isArray(t) || t.jquery && !v.isPlainObject(t))
            v.each(t, function() {
                r(this.name, this.value)
            });
        else
            for (n in t)
                we(n, t[n], e, r);
        return i.join("&")
    }
    ,
    v.fn.extend({
        serialize: function() {
            return v.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var t = v.prop(this, "elements");
                return t ? v.makeArray(t) : this
            }).filter(function() {
                var t = this.type;
                return this.name && !v(this).is(":disabled") && _e.test(this.nodeName) && !ye.test(t) && (this.checked || !ot.test(t))
            }).map(function(t, e) {
                var n = v(this).val();
                return null == n ? null : Array.isArray(n) ? v.map(n, function(t) {
                    return {
                        name: e.name,
                        value: t.replace(ve, "\r\n")
                    }
                }) : {
                    name: e.name,
                    value: n.replace(ve, "\r\n")
                }
            }).get()
        }
    });
    var be = /%20/g
      , xe = /#.*$/
      , Ce = /([?&])_=[^&]*/
      , Ee = /^(.*?):[ \t]*([^\r\n]*)$/gm
      , Te = /^(?:GET|HEAD)$/
      , De = /^\/\//
      , Se = {}
      , Ae = {}
      , ke = "*/".concat("*")
      , Ie = i.createElement("a");
    function Ne(t) {
        return function(e, n) {
            "string" != typeof e && (n = e,
            e = "*");
            var i, r = 0, s = e.toLowerCase().match(H) || [];
            if (v.isFunction(n))
                for (; i = s[r++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                    (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function je(t, e, n, i) {
        var r = {}
          , s = t === Ae;
        function o(a) {
            var l;
            return r[a] = !0,
            v.each(t[a] || [], function(t, a) {
                var c = a(e, n, i);
                return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (e.dataTypes.unshift(c),
                o(c),
                !1)
            }),
            l
        }
        return o(e.dataTypes[0]) || !r["*"] && o("*")
    }
    function Oe(t, e) {
        var n, i, r = v.ajaxSettings.flatOptions || {};
        for (n in e)
            void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && v.extend(!0, t, i),
        t
    }
    Ie.href = fe.href,
    v.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fe.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(fe.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": ke,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": v.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? Oe(Oe(t, v.ajaxSettings), e) : Oe(v.ajaxSettings, t)
        },
        ajaxPrefilter: Ne(Se),
        ajaxTransport: Ne(Ae),
        ajax: function(e, n) {
            "object" == typeof e && (n = e,
            e = void 0);
            var r, s, o, a, l, c, u, h, d, f, p = v.ajaxSetup({}, n = n || {}), g = p.context || p, m = p.context && (g.nodeType || g.jquery) ? v(g) : v.event, y = v.Deferred(), _ = v.Callbacks("once memory"), w = p.statusCode || {}, b = {}, x = {}, C = "canceled", E = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (u) {
                        if (!a)
                            for (a = {}; e = Ee.exec(o); )
                                a[e[1].toLowerCase()] = e[2];
                        e = a[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return u ? o : null
                },
                setRequestHeader: function(t, e) {
                    return null == u && (t = x[t.toLowerCase()] = x[t.toLowerCase()] || t,
                    b[t] = e),
                    this
                },
                overrideMimeType: function(t) {
                    return null == u && (p.mimeType = t),
                    this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (u)
                            E.always(t[E.status]);
                        else
                            for (e in t)
                                w[e] = [w[e], t[e]];
                    return this
                },
                abort: function(t) {
                    var e = t || C;
                    return r && r.abort(e),
                    D(0, e),
                    this
                }
            };
            if (y.promise(E),
            p.url = ((e || p.url || fe.href) + "").replace(De, fe.protocol + "//"),
            p.type = n.method || n.type || p.method || p.type,
            p.dataTypes = (p.dataType || "*").toLowerCase().match(H) || [""],
            null == p.crossDomain) {
                c = i.createElement("a");
                try {
                    c.href = p.url,
                    c.href = c.href,
                    p.crossDomain = Ie.protocol + "//" + Ie.host != c.protocol + "//" + c.host
                } catch (T) {
                    p.crossDomain = !0
                }
            }
            if (p.data && p.processData && "string" != typeof p.data && (p.data = v.param(p.data, p.traditional)),
            je(Se, p, n, E),
            u)
                return E;
            for (d in (h = v.event && p.global) && 0 == v.active++ && v.event.trigger("ajaxStart"),
            p.type = p.type.toUpperCase(),
            p.hasContent = !Te.test(p.type),
            s = p.url.replace(xe, ""),
            p.hasContent ? p.data && p.processData && 0 === (p.contentType || "").indexOf("application/x-www-form-urlencoded") && (p.data = p.data.replace(be, "+")) : (f = p.url.slice(s.length),
            p.data && (s += (ge.test(s) ? "&" : "?") + p.data,
            delete p.data),
            !1 === p.cache && (s = s.replace(Ce, "$1"),
            f = (ge.test(s) ? "&" : "?") + "_=" + pe++ + f),
            p.url = s + f),
            p.ifModified && (v.lastModified[s] && E.setRequestHeader("If-Modified-Since", v.lastModified[s]),
            v.etag[s] && E.setRequestHeader("If-None-Match", v.etag[s])),
            (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && E.setRequestHeader("Content-Type", p.contentType),
            E.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + ke + "; q=0.01" : "") : p.accepts["*"]),
            p.headers)
                E.setRequestHeader(d, p.headers[d]);
            if (p.beforeSend && (!1 === p.beforeSend.call(g, E, p) || u))
                return E.abort();
            if (C = "abort",
            _.add(p.complete),
            E.done(p.success),
            E.fail(p.error),
            r = je(Ae, p, n, E)) {
                if (E.readyState = 1,
                h && m.trigger("ajaxSend", [E, p]),
                u)
                    return E;
                p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                    E.abort("timeout")
                }, p.timeout));
                try {
                    u = !1,
                    r.send(b, D)
                } catch (T) {
                    if (u)
                        throw T;
                    D(-1, T)
                }
            } else
                D(-1, "No Transport");
            function D(e, n, i, a) {
                var c, d, f, b, x, C = n;
                u || (u = !0,
                l && t.clearTimeout(l),
                r = void 0,
                o = a || "",
                E.readyState = e > 0 ? 4 : 0,
                c = e >= 200 && e < 300 || 304 === e,
                i && (b = function(t, e, n) {
                    for (var i, r, s, o, a = t.contents, l = t.dataTypes; "*" === l[0]; )
                        l.shift(),
                        void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in a)
                            if (a[r] && a[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0]in n)
                        s = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || t.converters[r + " " + l[0]]) {
                                s = r;
                                break
                            }
                            o || (o = r)
                        }
                        s = s || o
                    }
                    if (s)
                        return s !== l[0] && l.unshift(s),
                        n[s]
                }(p, E, i)),
                b = function(t, e, n, i) {
                    var r, s, o, a, l, c = {}, u = t.dataTypes.slice();
                    if (u[1])
                        for (o in t.converters)
                            c[o.toLowerCase()] = t.converters[o];
                    for (s = u.shift(); s; )
                        if (t.responseFields[s] && (n[t.responseFields[s]] = e),
                        !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                        l = s,
                        s = u.shift())
                            if ("*" === s)
                                s = l;
                            else if ("*" !== l && l !== s) {
                                if (!(o = c[l + " " + s] || c["* " + s]))
                                    for (r in c)
                                        if ((a = r.split(" "))[1] === s && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                                            !0 === o ? o = c[r] : !0 !== c[r] && (s = a[0],
                                            u.unshift(a[1]));
                                            break
                                        }
                                if (!0 !== o)
                                    if (o && t.throws)
                                        e = o(e);
                                    else
                                        try {
                                            e = o(e)
                                        } catch (h) {
                                            return {
                                                state: "parsererror",
                                                error: o ? h : "No conversion from " + l + " to " + s
                                            }
                                        }
                            }
                    return {
                        state: "success",
                        data: e
                    }
                }(p, b, E, c),
                c ? (p.ifModified && ((x = E.getResponseHeader("Last-Modified")) && (v.lastModified[s] = x),
                (x = E.getResponseHeader("etag")) && (v.etag[s] = x)),
                204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state,
                d = b.data,
                c = !(f = b.error))) : (f = C,
                !e && C || (C = "error",
                e < 0 && (e = 0))),
                E.status = e,
                E.statusText = (n || C) + "",
                c ? y.resolveWith(g, [d, C, E]) : y.rejectWith(g, [E, C, f]),
                E.statusCode(w),
                w = void 0,
                h && m.trigger(c ? "ajaxSuccess" : "ajaxError", [E, p, c ? d : f]),
                _.fireWith(g, [E, C]),
                h && (m.trigger("ajaxComplete", [E, p]),
                --v.active || v.event.trigger("ajaxStop")))
            }
            return E
        },
        getJSON: function(t, e, n) {
            return v.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return v.get(t, void 0, e, "script")
        }
    }),
    v.each(["get", "post"], function(t, e) {
        v[e] = function(t, n, i, r) {
            return v.isFunction(n) && (r = r || i,
            i = n,
            n = void 0),
            v.ajax(v.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, v.isPlainObject(t) && t))
        }
    }),
    v._evalUrl = function(t) {
        return v.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }
    ,
    v.fn.extend({
        wrapAll: function(t) {
            var e;
            return this[0] && (v.isFunction(t) && (t = t.call(this[0])),
            e = v(t, this[0].ownerDocument).eq(0).clone(!0),
            this[0].parentNode && e.insertBefore(this[0]),
            e.map(function() {
                for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                return t
            }).append(this)),
            this
        },
        wrapInner: function(t) {
            return v.isFunction(t) ? this.each(function(e) {
                v(this).wrapInner(t.call(this, e))
            }) : this.each(function() {
                var e = v(this)
                  , n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function(t) {
            var e = v.isFunction(t);
            return this.each(function(n) {
                v(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function(t) {
            return this.parent(t).not("body").each(function() {
                v(this).replaceWith(this.childNodes)
            }),
            this
        }
    }),
    v.expr.pseudos.hidden = function(t) {
        return !v.expr.pseudos.visible(t)
    }
    ,
    v.expr.pseudos.visible = function(t) {
        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
    }
    ,
    v.ajaxSettings.xhr = function() {
        try {
            return new t.XMLHttpRequest
        } catch (e) {}
    }
    ;
    var Pe = {
        0: 200,
        1223: 204
    }
      , Le = v.ajaxSettings.xhr();
    p.cors = !!Le && "withCredentials"in Le,
    p.ajax = Le = !!Le,
    v.ajaxTransport(function(e) {
        var n, i;
        if (p.cors || Le && !e.crossDomain)
            return {
                send: function(r, s) {
                    var o, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password),
                    e.xhrFields)
                        for (o in e.xhrFields)
                            a[o] = e.xhrFields[o];
                    for (o in e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                    e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest"),
                    r)
                        a.setRequestHeader(o, r[o]);
                    n = function(t) {
                        return function() {
                            n && (n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null,
                            "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(Pe[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }
                    ,
                    a.onload = n(),
                    i = a.onerror = n("error"),
                    void 0 !== a.onabort ? a.onabort = i : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            n && i()
                        })
                    }
                    ,
                    n = n("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (l) {
                        if (n)
                            throw l
                    }
                },
                abort: function() {
                    n && n()
                }
            }
    }),
    v.ajaxPrefilter(function(t) {
        t.crossDomain && (t.contents.script = !1)
    }),
    v.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(t) {
                return v.globalEval(t),
                t
            }
        }
    }),
    v.ajaxPrefilter("script", function(t) {
        void 0 === t.cache && (t.cache = !1),
        t.crossDomain && (t.type = "GET")
    }),
    v.ajaxTransport("script", function(t) {
        var e, n;
        if (t.crossDomain)
            return {
                send: function(r, s) {
                    e = v("<script>").prop({
                        charset: t.scriptCharset,
                        src: t.url
                    }).on("load error", n = function(t) {
                        e.remove(),
                        n = null,
                        t && s("error" === t.type ? 404 : 200, t.type)
                    }
                    ),
                    i.head.appendChild(e[0])
                },
                abort: function() {
                    n && n()
                }
            }
    });
    var He = []
      , $e = /(=)\?(?=&|$)|\?\?/;
    v.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = He.pop() || v.expando + "_" + pe++;
            return this[t] = !0,
            t
        }
    }),
    v.ajaxPrefilter("json jsonp", function(e, n, i) {
        var r, s, o, a = !1 !== e.jsonp && ($e.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && $e.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0])
            return r = e.jsonpCallback = v.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
            a ? e[a] = e[a].replace($e, "$1" + r) : !1 !== e.jsonp && (e.url += (ge.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function() {
                return o || v.error(r + " was not called"),
                o[0]
            }
            ,
            e.dataTypes[0] = "json",
            s = t[r],
            t[r] = function() {
                o = arguments
            }
            ,
            i.always(function() {
                void 0 === s ? v(t).removeProp(r) : t[r] = s,
                e[r] && (e.jsonpCallback = n.jsonpCallback,
                He.push(r)),
                o && v.isFunction(s) && s(o[0]),
                o = s = void 0
            }),
            "script"
    }),
    p.createHTMLDocument = function() {
        var t = i.implementation.createHTMLDocument("").body;
        return t.innerHTML = "<form></form><form></form>",
        2 === t.childNodes.length
    }(),
    v.parseHTML = function(t, e, n) {
        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e,
        e = !1),
        e || (p.createHTMLDocument ? ((r = (e = i.implementation.createHTMLDocument("")).createElement("base")).href = i.location.href,
        e.head.appendChild(r)) : e = i),
        o = !n && [],
        (s = A.exec(t)) ? [e.createElement(s[1])] : (s = ft([t], e, o),
        o && o.length && v(o).remove(),
        v.merge([], s.childNodes)));
        var r, s, o
    }
    ,
    v.fn.load = function(t, e, n) {
        var i, r, s, o = this, a = t.indexOf(" ");
        return a > -1 && (i = ce(t.slice(a)),
        t = t.slice(0, a)),
        v.isFunction(e) ? (n = e,
        e = void 0) : e && "object" == typeof e && (r = "POST"),
        o.length > 0 && v.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function(t) {
            s = arguments,
            o.html(i ? v("<div>").append(v.parseHTML(t)).find(i) : t)
        }).always(n && function(t, e) {
            o.each(function() {
                n.apply(this, s || [t.responseText, e, t])
            })
        }
        ),
        this
    }
    ,
    v.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
        v.fn[e] = function(t) {
            return this.on(e, t)
        }
    }),
    v.expr.pseudos.animated = function(t) {
        return v.grep(v.timers, function(e) {
            return t === e.elem
        }).length
    }
    ,
    v.offset = {
        setOffset: function(t, e, n) {
            var i, r, s, o, a, l, c = v.css(t, "position"), u = v(t), h = {};
            "static" === c && (t.style.position = "relative"),
            a = u.offset(),
            s = v.css(t, "top"),
            l = v.css(t, "left"),
            ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (o = (i = u.position()).top,
            r = i.left) : (o = parseFloat(s) || 0,
            r = parseFloat(l) || 0),
            v.isFunction(e) && (e = e.call(t, n, v.extend({}, a))),
            null != e.top && (h.top = e.top - a.top + o),
            null != e.left && (h.left = e.left - a.left + r),
            "using"in e ? e.using.call(t, h) : u.css(h)
        }
    },
    v.fn.extend({
        offset: function(t) {
            if (arguments.length)
                return void 0 === t ? this : this.each(function(e) {
                    v.offset.setOffset(this, t, e)
                });
            var e, n, i, r, s = this[0];
            return s ? s.getClientRects().length ? {
                top: (i = s.getBoundingClientRect()).top + (r = (e = s.ownerDocument).defaultView).pageYOffset - (n = e.documentElement).clientTop,
                left: i.left + r.pageXOffset - n.clientLeft
            } : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var t, e, n = this[0], i = {
                    top: 0,
                    left: 0
                };
                return "fixed" === v.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(),
                e = this.offset(),
                S(t[0], "html") || (i = t.offset()),
                i = {
                    top: i.top + v.css(t[0], "borderTopWidth", !0),
                    left: i.left + v.css(t[0], "borderLeftWidth", !0)
                }),
                {
                    top: e.top - i.top - v.css(n, "marginTop", !0),
                    left: e.left - i.left - v.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent; t && "static" === v.css(t, "position"); )
                    t = t.offsetParent;
                return t || pt
            })
        }
    }),
    v.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, e) {
        var n = "pageYOffset" === e;
        v.fn[t] = function(i) {
            return z(this, function(t, i, r) {
                var s;
                return v.isWindow(t) ? s = t : 9 === t.nodeType && (s = t.defaultView),
                void 0 === r ? s ? s[e] : t[i] : void (s ? s.scrollTo(n ? s.pageXOffset : r, n ? r : s.pageYOffset) : t[i] = r)
            }, t, i, arguments.length)
        }
    }),
    v.each(["top", "left"], function(t, e) {
        v.cssHooks[e] = Mt(p.pixelPosition, function(t, n) {
            if (n)
                return n = $t(t, e),
                Lt.test(n) ? v(t).position()[e] + "px" : n
        })
    }),
    v.each({
        Height: "height",
        Width: "width"
    }, function(t, e) {
        v.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function(n, i) {
            v.fn[i] = function(r, s) {
                var o = arguments.length && (n || "boolean" != typeof r)
                  , a = n || (!0 === r || !0 === s ? "margin" : "border");
                return z(this, function(e, n, r) {
                    var s;
                    return v.isWindow(e) ? 0 === i.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (s = e.documentElement,
                    Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t])) : void 0 === r ? v.css(e, n, a) : v.style(e, n, r, a)
                }, e, o ? r : void 0, o)
            }
        })
    }),
    v.fn.extend({
        bind: function(t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function(t, e) {
            return this.off(t, null, e)
        },
        delegate: function(t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function(t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }),
    v.holdReady = function(t) {
        t ? v.readyWait++ : v.ready(!0)
    }
    ,
    v.isArray = Array.isArray,
    v.parseJSON = JSON.parse,
    v.nodeName = S,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return v
    });
    var Me = t.jQuery
      , Re = t.$;
    return v.noConflict = function(e) {
        return t.$ === v && (t.$ = Re),
        e && t.jQuery === v && (t.jQuery = Me),
        v
    }
    ,
    e || (t.jQuery = t.$ = v),
    v
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], e) : e(t.bootstrap = {}, t.jQuery, t.Popper)
}(this, function(t, e, n) {
    "use strict";
    function i(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1,
            i.configurable = !0,
            "value"in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i)
        }
    }
    function r(t, e, n) {
        return e && i(t.prototype, e),
        n && i(t, n),
        t
    }
    function s() {
        return (s = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        }
        ).apply(this, arguments)
    }
    e = e && e.hasOwnProperty("default") ? e.default : e,
    n = n && n.hasOwnProperty("default") ? n.default : n;
    var o, a, l, c, u, h, d, f, p, g, m, v, y, _, w, b, x, C, E = function(t) {
        var e = !1
          , n = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function(t) {
                do {
                    t += ~~(1e6 * Math.random())
                } while (document.getElementById(t));
                return t
            },
            getSelectorFromElement: function(e) {
                var n, i = e.getAttribute("data-target");
                i && "#" !== i || (i = e.getAttribute("href") || ""),
                "#" === i.charAt(0) && (n = i,
                i = n = "function" == typeof t.escapeSelector ? t.escapeSelector(n).substr(1) : n.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1"));
                try {
                    return t(document).find(i).length > 0 ? i : null
                } catch (t) {
                    return null
                }
            },
            reflow: function(t) {
                return t.offsetHeight
            },
            triggerTransitionEnd: function(n) {
                t(n).trigger(e.end)
            },
            supportsTransitionEnd: function() {
                return Boolean(e)
            },
            isElement: function(t) {
                return (t[0] || t).nodeType
            },
            typeCheckConfig: function(t, e, i) {
                for (var r in i)
                    if (Object.prototype.hasOwnProperty.call(i, r)) {
                        var s = i[r]
                          , o = e[r]
                          , a = o && n.isElement(o) ? "element" : {}.toString.call(o).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
                        if (!new RegExp(s).test(a))
                            throw new Error(t.toUpperCase() + ': Option "' + r + '" provided type "' + a + '" but expected type "' + s + '".')
                    }
            }
        };
        return e = ("undefined" == typeof window || !window.QUnit) && {
            end: "transitionend"
        },
        t.fn.emulateTransitionEnd = function(e) {
            var i = this
              , r = !1;
            return t(this).one(n.TRANSITION_END, function() {
                r = !0
            }),
            setTimeout(function() {
                r || n.triggerTransitionEnd(i)
            }, e),
            this
        }
        ,
        n.supportsTransitionEnd() && (t.event.special[n.TRANSITION_END] = {
            bindType: e.end,
            delegateType: e.end,
            handle: function(e) {
                if (t(e.target).is(this))
                    return e.handleObj.handler.apply(this, arguments)
            }
        }),
        n
    }(e), T = (c = "." + (l = "bs.alert"),
    u = (o = e).fn[a = "alert"],
    h = {
        CLOSE: "close" + c,
        CLOSED: "closed" + c,
        CLICK_DATA_API: "click" + c + ".data-api"
    },
    d = function() {
        function t(t) {
            this._element = t
        }
        var e = t.prototype;
        return e.close = function(t) {
            var e = this._getRootElement(t = t || this._element);
            this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
        }
        ,
        e.dispose = function() {
            o.removeData(this._element, l),
            this._element = null
        }
        ,
        e._getRootElement = function(t) {
            var e = E.getSelectorFromElement(t)
              , n = !1;
            return e && (n = o(e)[0]),
            n || (n = o(t).closest(".alert")[0]),
            n
        }
        ,
        e._triggerCloseEvent = function(t) {
            var e = o.Event(h.CLOSE);
            return o(t).trigger(e),
            e
        }
        ,
        e._removeElement = function(t) {
            var e = this;
            o(t).removeClass("show"),
            E.supportsTransitionEnd() && o(t).hasClass("fade") ? o(t).one(E.TRANSITION_END, function(n) {
                return e._destroyElement(t, n)
            }).emulateTransitionEnd(150) : this._destroyElement(t)
        }
        ,
        e._destroyElement = function(t) {
            o(t).detach().trigger(h.CLOSED).remove()
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each(function() {
                var n = o(this)
                  , i = n.data(l);
                i || (i = new t(this),
                n.data(l, i)),
                "close" === e && i[e](this)
            })
        }
        ,
        t._handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(),
                t.close(this)
            }
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0"
            }
        }]),
        t
    }(),
    o(document).on(h.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d)),
    o.fn[a] = d._jQueryInterface,
    o.fn[a].Constructor = d,
    o.fn[a].noConflict = function() {
        return o.fn[a] = u,
        d._jQueryInterface
    }
    ,
    d), D = (m = "." + (g = "bs.button"),
    y = (f = e).fn[p = "button"],
    _ = "active",
    w = '[data-toggle^="button"]',
    b = ".btn",
    x = {
        CLICK_DATA_API: "click" + m + (v = ".data-api"),
        FOCUS_BLUR_DATA_API: "focus" + m + v + " blur" + m + v
    },
    C = function() {
        function t(t) {
            this._element = t
        }
        var e = t.prototype;
        return e.toggle = function() {
            var t = !0
              , e = !0
              , n = f(this._element).closest('[data-toggle="buttons"]')[0];
            if (n) {
                var i = f(this._element).find("input")[0];
                if (i) {
                    if ("radio" === i.type)
                        if (i.checked && f(this._element).hasClass(_))
                            t = !1;
                        else {
                            var r = f(n).find(".active")[0];
                            r && f(r).removeClass(_)
                        }
                    if (t) {
                        if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled"))
                            return;
                        i.checked = !f(this._element).hasClass(_),
                        f(i).trigger("change")
                    }
                    i.focus(),
                    e = !1
                }
            }
            e && this._element.setAttribute("aria-pressed", !f(this._element).hasClass(_)),
            t && f(this._element).toggleClass(_)
        }
        ,
        e.dispose = function() {
            f.removeData(this._element, g),
            this._element = null
        }
        ,
        t._jQueryInterface = function(e) {
            return this.each(function() {
                var n = f(this).data(g);
                n || (n = new t(this),
                f(this).data(g, n)),
                "toggle" === e && n[e]()
            })
        }
        ,
        r(t, null, [{
            key: "VERSION",
            get: function() {
                return "4.0.0"
            }
        }]),
        t
    }(),
    f(document).on(x.CLICK_DATA_API, w, function(t) {
        t.preventDefault();
        var e = t.target;
        f(e).hasClass("btn") || (e = f(e).closest(b)),
        C._jQueryInterface.call(f(e), "toggle")
    }).on(x.FOCUS_BLUR_DATA_API, w, function(t) {
        var e = f(t.target).closest(b)[0];
        f(e).toggleClass("focus", /^focus(in)?$/.test(t.type))
    }),
    f.fn[p] = C._jQueryInterface,
    f.fn[p].Constructor = C,
    f.fn[p].noConflict = function() {
        return f.fn[p] = y,
        C._jQueryInterface
    }
    ,
    C), S = function(t) {
        var e = "carousel"
          , n = "bs.carousel"
          , i = "." + n
          , o = t.fn[e]
          , a = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }
          , l = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }
          , c = "next"
          , u = "prev"
          , h = {
            SLIDE: "slide" + i,
            SLID: "slid" + i,
            KEYDOWN: "keydown" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i,
            TOUCHEND: "touchend" + i,
            LOAD_DATA_API: "load" + i + ".data-api",
            CLICK_DATA_API: "click" + i + ".data-api"
        }
          , d = "active"
          , f = ".active.carousel-item"
          , p = function() {
            function o(e, n) {
                this._items = null,
                this._interval = null,
                this._activeElement = null,
                this._isPaused = !1,
                this._isSliding = !1,
                this.touchTimeout = null,
                this._config = this._getConfig(n),
                this._element = t(e)[0],
                this._indicatorsElement = t(this._element).find(".carousel-indicators")[0],
                this._addEventListeners()
            }
            var p = o.prototype;
            return p.next = function() {
                this._isSliding || this._slide(c)
            }
            ,
            p.nextWhenVisible = function() {
                !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }
            ,
            p.prev = function() {
                this._isSliding || this._slide(u)
            }
            ,
            p.pause = function(e) {
                e || (this._isPaused = !0),
                t(this._element).find(".carousel-item-next, .carousel-item-prev")[0] && E.supportsTransitionEnd() && (E.triggerTransitionEnd(this._element),
                this.cycle(!0)),
                clearInterval(this._interval),
                this._interval = null
            }
            ,
            p.cycle = function(t) {
                t || (this._isPaused = !1),
                this._interval && (clearInterval(this._interval),
                this._interval = null),
                this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }
            ,
            p.to = function(e) {
                var n = this;
                this._activeElement = t(this._element).find(f)[0];
                var i = this._getItemIndex(this._activeElement);
                if (!(e > this._items.length - 1 || e < 0))
                    if (this._isSliding)
                        t(this._element).one(h.SLID, function() {
                            return n.to(e)
                        });
                    else {
                        if (i === e)
                            return this.pause(),
                            void this.cycle();
                        this._slide(e > i ? c : u, this._items[e])
                    }
            }
            ,
            p.dispose = function() {
                t(this._element).off(i),
                t.removeData(this._element, n),
                this._items = null,
                this._config = null,
                this._element = null,
                this._interval = null,
                this._isPaused = null,
                this._isSliding = null,
                this._activeElement = null,
                this._indicatorsElement = null
            }
            ,
            p._getConfig = function(t) {
                return t = s({}, a, t),
                E.typeCheckConfig(e, t, l),
                t
            }
            ,
            p._addEventListeners = function() {
                var e = this;
                this._config.keyboard && t(this._element).on(h.KEYDOWN, function(t) {
                    return e._keydown(t)
                }),
                "hover" === this._config.pause && (t(this._element).on(h.MOUSEENTER, function(t) {
                    return e.pause(t)
                }).on(h.MOUSELEAVE, function(t) {
                    return e.cycle(t)
                }),
                "ontouchstart"in document.documentElement && t(this._element).on(h.TOUCHEND, function() {
                    e.pause(),
                    e.touchTimeout && clearTimeout(e.touchTimeout),
                    e.touchTimeout = setTimeout(function(t) {
                        return e.cycle(t)
                    }, 500 + e._config.interval)
                }))
            }
            ,
            p._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName))
                    switch (t.which) {
                    case 37:
                        t.preventDefault(),
                        this.prev();
                        break;
                    case 39:
                        t.preventDefault(),
                        this.next()
                    }
            }
            ,
            p._getItemIndex = function(e) {
                return this._items = t.makeArray(t(e).parent().find(".carousel-item")),
                this._items.indexOf(e)
            }
            ,
            p._getItemByDirection = function(t, e) {
                var n = t === c
                  , i = t === u
                  , r = this._getItemIndex(e);
                if ((i && 0 === r || n && r === this._items.length - 1) && !this._config.wrap)
                    return e;
                var s = (r + (t === u ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }
            ,
            p._triggerSlideEvent = function(e, n) {
                var i = this._getItemIndex(e)
                  , r = this._getItemIndex(t(this._element).find(f)[0])
                  , s = t.Event(h.SLIDE, {
                    relatedTarget: e,
                    direction: n,
                    from: r,
                    to: i
                });
                return t(this._element).trigger(s),
                s
            }
            ,
            p._setActiveIndicatorElement = function(e) {
                if (this._indicatorsElement) {
                    t(this._indicatorsElement).find(".active").removeClass(d);
                    var n = this._indicatorsElement.children[this._getItemIndex(e)];
                    n && t(n).addClass(d)
                }
            }
            ,
            p._slide = function(e, n) {
                var i, r, s, o = this, a = t(this._element).find(f)[0], l = this._getItemIndex(a), u = n || a && this._getItemByDirection(e, a), p = this._getItemIndex(u), g = Boolean(this._interval);
                if (e === c ? (i = "carousel-item-left",
                r = "carousel-item-next",
                s = "left") : (i = "carousel-item-right",
                r = "carousel-item-prev",
                s = "right"),
                u && t(u).hasClass(d))
                    this._isSliding = !1;
                else if (!this._triggerSlideEvent(u, s).isDefaultPrevented() && a && u) {
                    this._isSliding = !0,
                    g && this.pause(),
                    this._setActiveIndicatorElement(u);
                    var m = t.Event(h.SLID, {
                        relatedTarget: u,
                        direction: s,
                        from: l,
                        to: p
                    });
                    E.supportsTransitionEnd() && t(this._element).hasClass("slide") ? (t(u).addClass(r),
                    E.reflow(u),
                    t(a).addClass(i),
                    t(u).addClass(i),
                    t(a).one(E.TRANSITION_END, function() {
                        t(u).removeClass(i + " " + r).addClass(d),
                        t(a).removeClass(d + " " + r + " " + i),
                        o._isSliding = !1,
                        setTimeout(function() {
                            return t(o._element).trigger(m)
                        }, 0)
                    }).emulateTransitionEnd(600)) : (t(a).removeClass(d),
                    t(u).addClass(d),
                    this._isSliding = !1,
                    t(this._element).trigger(m)),
                    g && this.cycle()
                }
            }
            ,
            o._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = t(this).data(n)
                      , r = s({}, a, t(this).data());
                    "object" == typeof e && (r = s({}, r, e));
                    var l = "string" == typeof e ? e : r.slide;
                    if (i || (i = new o(this,r),
                    t(this).data(n, i)),
                    "number" == typeof e)
                        i.to(e);
                    else if ("string" == typeof l) {
                        if (void 0 === i[l])
                            throw new TypeError('No method named "' + l + '"');
                        i[l]()
                    } else
                        r.interval && (i.pause(),
                        i.cycle())
                })
            }
            ,
            o._dataApiClickHandler = function(e) {
                var i = E.getSelectorFromElement(this);
                if (i) {
                    var r = t(i)[0];
                    if (r && t(r).hasClass("carousel")) {
                        var a = s({}, t(r).data(), t(this).data())
                          , l = this.getAttribute("data-slide-to");
                        l && (a.interval = !1),
                        o._jQueryInterface.call(t(r), a),
                        l && t(r).data(n).to(l),
                        e.preventDefault()
                    }
                }
            }
            ,
            r(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return a
                }
            }]),
            o
        }();
        return t(document).on(h.CLICK_DATA_API, "[data-slide], [data-slide-to]", p._dataApiClickHandler),
        t(window).on(h.LOAD_DATA_API, function() {
            t('[data-ride="carousel"]').each(function() {
                var e = t(this);
                p._jQueryInterface.call(e, e.data())
            })
        }),
        t.fn[e] = p._jQueryInterface,
        t.fn[e].Constructor = p,
        t.fn[e].noConflict = function() {
            return t.fn[e] = o,
            p._jQueryInterface
        }
        ,
        p
    }(e), A = function(t) {
        var e = "collapse"
          , n = "bs.collapse"
          , i = "." + n
          , o = t.fn[e]
          , a = {
            toggle: !0,
            parent: ""
        }
          , l = {
            toggle: "boolean",
            parent: "(string|element)"
        }
          , c = {
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            CLICK_DATA_API: "click" + i + ".data-api"
        }
          , u = "show"
          , h = "collapse"
          , d = "collapsing"
          , f = "collapsed"
          , p = "width"
          , g = '[data-toggle="collapse"]'
          , m = function() {
            function i(e, n) {
                this._isTransitioning = !1,
                this._element = e,
                this._config = this._getConfig(n),
                this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
                for (var i = t(g), r = 0; r < i.length; r++) {
                    var s = i[r]
                      , o = E.getSelectorFromElement(s);
                    null !== o && t(o).filter(e).length > 0 && (this._selector = o,
                    this._triggerArray.push(s))
                }
                this._parent = this._config.parent ? this._getParent() : null,
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray),
                this._config.toggle && this.toggle()
            }
            var o = i.prototype;
            return o.toggle = function() {
                t(this._element).hasClass(u) ? this.hide() : this.show()
            }
            ,
            o.show = function() {
                var e, r, s = this;
                if (!(this._isTransitioning || t(this._element).hasClass(u) || (this._parent && 0 === (e = t.makeArray(t(this._parent).find(".show, .collapsing").filter('[data-parent="' + this._config.parent + '"]'))).length && (e = null),
                e && (r = t(e).not(this._selector).data(n)) && r._isTransitioning))) {
                    var o = t.Event(c.SHOW);
                    if (t(this._element).trigger(o),
                    !o.isDefaultPrevented()) {
                        e && (i._jQueryInterface.call(t(e).not(this._selector), "hide"),
                        r || t(e).data(n, null));
                        var a = this._getDimension();
                        t(this._element).removeClass(h).addClass(d),
                        this._element.style[a] = 0,
                        this._triggerArray.length > 0 && t(this._triggerArray).removeClass(f).attr("aria-expanded", !0),
                        this.setTransitioning(!0);
                        var l = function() {
                            t(s._element).removeClass(d).addClass(h).addClass(u),
                            s._element.style[a] = "",
                            s.setTransitioning(!1),
                            t(s._element).trigger(c.SHOWN)
                        };
                        if (E.supportsTransitionEnd()) {
                            var p = "scroll" + (a[0].toUpperCase() + a.slice(1));
                            t(this._element).one(E.TRANSITION_END, l).emulateTransitionEnd(600),
                            this._element.style[a] = this._element[p] + "px"
                        } else
                            l()
                    }
                }
            }
            ,
            o.hide = function() {
                var e = this;
                if (!this._isTransitioning && t(this._element).hasClass(u)) {
                    var n = t.Event(c.HIDE);
                    if (t(this._element).trigger(n),
                    !n.isDefaultPrevented()) {
                        var i = this._getDimension();
                        if (this._element.style[i] = this._element.getBoundingClientRect()[i] + "px",
                        E.reflow(this._element),
                        t(this._element).addClass(d).removeClass(h).removeClass(u),
                        this._triggerArray.length > 0)
                            for (var r = 0; r < this._triggerArray.length; r++) {
                                var s = this._triggerArray[r]
                                  , o = E.getSelectorFromElement(s);
                                null !== o && (t(o).hasClass(u) || t(s).addClass(f).attr("aria-expanded", !1))
                            }
                        this.setTransitioning(!0);
                        var a = function() {
                            e.setTransitioning(!1),
                            t(e._element).removeClass(d).addClass(h).trigger(c.HIDDEN)
                        };
                        this._element.style[i] = "",
                        E.supportsTransitionEnd() ? t(this._element).one(E.TRANSITION_END, a).emulateTransitionEnd(600) : a()
                    }
                }
            }
            ,
            o.setTransitioning = function(t) {
                this._isTransitioning = t
            }
            ,
            o.dispose = function() {
                t.removeData(this._element, n),
                this._config = null,
                this._parent = null,
                this._element = null,
                this._triggerArray = null,
                this._isTransitioning = null
            }
            ,
            o._getConfig = function(t) {
                return (t = s({}, a, t)).toggle = Boolean(t.toggle),
                E.typeCheckConfig(e, t, l),
                t
            }
            ,
            o._getDimension = function() {
                return t(this._element).hasClass(p) ? p : "height"
            }
            ,
            o._getParent = function() {
                var e = this
                  , n = null;
                E.isElement(this._config.parent) ? (n = this._config.parent,
                void 0 !== this._config.parent.jquery && (n = this._config.parent[0])) : n = t(this._config.parent)[0];
                var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                return t(n).find(r).each(function(t, n) {
                    e._addAriaAndCollapsedClass(i._getTargetFromElement(n), [n])
                }),
                n
            }
            ,
            o._addAriaAndCollapsedClass = function(e, n) {
                if (e) {
                    var i = t(e).hasClass(u);
                    n.length > 0 && t(n).toggleClass(f, !i).attr("aria-expanded", i)
                }
            }
            ,
            i._getTargetFromElement = function(e) {
                var n = E.getSelectorFromElement(e);
                return n ? t(n)[0] : null
            }
            ,
            i._jQueryInterface = function(e) {
                return this.each(function() {
                    var r = t(this)
                      , o = r.data(n)
                      , l = s({}, a, r.data(), "object" == typeof e && e);
                    if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1),
                    o || (o = new i(this,l),
                    r.data(n, o)),
                    "string" == typeof e) {
                        if (void 0 === o[e])
                            throw new TypeError('No method named "' + e + '"');
                        o[e]()
                    }
                })
            }
            ,
            r(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return a
                }
            }]),
            i
        }();
        return t(document).on(c.CLICK_DATA_API, g, function(e) {
            "A" === e.currentTarget.tagName && e.preventDefault();
            var i = t(this)
              , r = E.getSelectorFromElement(this);
            t(r).each(function() {
                var e = t(this)
                  , r = e.data(n) ? "toggle" : i.data();
                m._jQueryInterface.call(e, r)
            })
        }),
        t.fn[e] = m._jQueryInterface,
        t.fn[e].Constructor = m,
        t.fn[e].noConflict = function() {
            return t.fn[e] = o,
            m._jQueryInterface
        }
        ,
        m
    }(e), k = function(t) {
        var e = "dropdown"
          , i = "bs.dropdown"
          , o = "." + i
          , a = ".data-api"
          , l = t.fn[e]
          , c = new RegExp("38|40|27")
          , u = {
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            CLICK: "click" + o,
            CLICK_DATA_API: "click" + o + a,
            KEYDOWN_DATA_API: "keydown" + o + a,
            KEYUP_DATA_API: "keyup" + o + a
        }
          , h = "disabled"
          , d = "show"
          , f = "dropup"
          , p = "dropdown-menu-right"
          , g = '[data-toggle="dropdown"]'
          , m = ".dropdown-menu"
          , v = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent"
        }
          , y = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)"
        }
          , _ = function() {
            function a(t, e) {
                this._element = t,
                this._popper = null,
                this._config = this._getConfig(e),
                this._menu = this._getMenuElement(),
                this._inNavbar = this._detectNavbar(),
                this._addEventListeners()
            }
            var l = a.prototype;
            return l.toggle = function() {
                if (!this._element.disabled && !t(this._element).hasClass(h)) {
                    var e = a._getParentFromElement(this._element)
                      , i = t(this._menu).hasClass(d);
                    if (a._clearMenus(),
                    !i) {
                        var r = {
                            relatedTarget: this._element
                        }
                          , s = t.Event(u.SHOW, r);
                        if (t(e).trigger(s),
                        !s.isDefaultPrevented()) {
                            if (!this._inNavbar) {
                                if (void 0 === n)
                                    throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                var o = this._element;
                                t(e).hasClass(f) && (t(this._menu).hasClass("dropdown-menu-left") || t(this._menu).hasClass(p)) && (o = e),
                                "scrollParent" !== this._config.boundary && t(e).addClass("position-static"),
                                this._popper = new n(o,this._menu,this._getPopperConfig())
                            }
                            "ontouchstart"in document.documentElement && 0 === t(e).closest(".navbar-nav").length && t("body").children().on("mouseover", null, t.noop),
                            this._element.focus(),
                            this._element.setAttribute("aria-expanded", !0),
                            t(this._menu).toggleClass(d),
                            t(e).toggleClass(d).trigger(t.Event(u.SHOWN, r))
                        }
                    }
                }
            }
            ,
            l.dispose = function() {
                t.removeData(this._element, i),
                t(this._element).off(o),
                this._element = null,
                this._menu = null,
                null !== this._popper && (this._popper.destroy(),
                this._popper = null)
            }
            ,
            l.update = function() {
                this._inNavbar = this._detectNavbar(),
                null !== this._popper && this._popper.scheduleUpdate()
            }
            ,
            l._addEventListeners = function() {
                var e = this;
                t(this._element).on(u.CLICK, function(t) {
                    t.preventDefault(),
                    t.stopPropagation(),
                    e.toggle()
                })
            }
            ,
            l._getConfig = function(n) {
                return n = s({}, this.constructor.Default, t(this._element).data(), n),
                E.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
            }
            ,
            l._getMenuElement = function() {
                if (!this._menu) {
                    var e = a._getParentFromElement(this._element);
                    this._menu = t(e).find(m)[0]
                }
                return this._menu
            }
            ,
            l._getPlacement = function() {
                var e = t(this._element).parent()
                  , n = "bottom-start";
                return e.hasClass(f) ? (n = "top-start",
                t(this._menu).hasClass(p) && (n = "top-end")) : e.hasClass("dropright") ? n = "right-start" : e.hasClass("dropleft") ? n = "left-start" : t(this._menu).hasClass(p) && (n = "bottom-end"),
                n
            }
            ,
            l._detectNavbar = function() {
                return t(this._element).closest(".navbar").length > 0
            }
            ,
            l._getPopperConfig = function() {
                var t = this
                  , e = {};
                return "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = s({}, e.offsets, t._config.offset(e.offsets) || {}),
                    e
                }
                : e.offset = this._config.offset,
                {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: e,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                }
            }
            ,
            a._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this).data(i);
                    if (n || (n = new a(this,"object" == typeof e ? e : null),
                    t(this).data(i, n)),
                    "string" == typeof e) {
                        if (void 0 === n[e])
                            throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }
            ,
            a._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var n = t.makeArray(t(g)), r = 0; r < n.length; r++) {
                        var s = a._getParentFromElement(n[r])
                          , o = t(n[r]).data(i)
                          , l = {
                            relatedTarget: n[r]
                        };
                        if (o) {
                            var c = o._menu;
                            if (t(s).hasClass(d) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(s, e.target))) {
                                var h = t.Event(u.HIDE, l);
                                t(s).trigger(h),
                                h.isDefaultPrevented() || ("ontouchstart"in document.documentElement && t("body").children().off("mouseover", null, t.noop),
                                n[r].setAttribute("aria-expanded", "false"),
                                t(c).removeClass(d),
                                t(s).removeClass(d).trigger(t.Event(u.HIDDEN, l)))
                            }
                        }
                    }
            }
            ,
            a._getParentFromElement = function(e) {
                var n, i = E.getSelectorFromElement(e);
                return i && (n = t(i)[0]),
                n || e.parentNode
            }
            ,
            a._dataApiKeydownHandler = function(e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(m).length)) : c.test(e.which)) && (e.preventDefault(),
                e.stopPropagation(),
                !this.disabled && !t(this).hasClass(h))) {
                    var n = a._getParentFromElement(this)
                      , i = t(n).hasClass(d);
                    if ((i || 27 === e.which && 32 === e.which) && (!i || 27 !== e.which && 32 !== e.which)) {
                        var r = t(n).find(".dropdown-menu .dropdown-item:not(.disabled)").get();
                        if (0 !== r.length) {
                            var s = r.indexOf(e.target);
                            38 === e.which && s > 0 && s--,
                            40 === e.which && s < r.length - 1 && s++,
                            s < 0 && (s = 0),
                            r[s].focus()
                        }
                    } else {
                        if (27 === e.which) {
                            var o = t(n).find(g)[0];
                            t(o).trigger("focus")
                        }
                        t(this).trigger("click")
                    }
                }
            }
            ,
            r(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return v
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return y
                }
            }]),
            a
        }();
        return t(document).on(u.KEYDOWN_DATA_API, g, _._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API, m, _._dataApiKeydownHandler).on(u.CLICK_DATA_API + " " + u.KEYUP_DATA_API, _._clearMenus).on(u.CLICK_DATA_API, g, function(e) {
            e.preventDefault(),
            e.stopPropagation(),
            _._jQueryInterface.call(t(this), "toggle")
        }).on(u.CLICK_DATA_API, ".dropdown form", function(t) {
            t.stopPropagation()
        }),
        t.fn[e] = _._jQueryInterface,
        t.fn[e].Constructor = _,
        t.fn[e].noConflict = function() {
            return t.fn[e] = l,
            _._jQueryInterface
        }
        ,
        _
    }(e), I = function(t) {
        var e = "bs.modal"
          , n = "." + e
          , i = t.fn.modal
          , o = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }
          , a = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }
          , l = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            FOCUSIN: "focusin" + n,
            RESIZE: "resize" + n,
            CLICK_DISMISS: "click.dismiss" + n,
            KEYDOWN_DISMISS: "keydown.dismiss" + n,
            MOUSEUP_DISMISS: "mouseup.dismiss" + n,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
            CLICK_DATA_API: "click" + n + ".data-api"
        }
          , c = "modal-open"
          , u = "fade"
          , h = "show"
          , d = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top"
          , f = function() {
            function i(e, n) {
                this._config = this._getConfig(n),
                this._element = e,
                this._dialog = t(e).find(".modal-dialog")[0],
                this._backdrop = null,
                this._isShown = !1,
                this._isBodyOverflowing = !1,
                this._ignoreBackdropClick = !1,
                this._originalBodyPadding = 0,
                this._scrollbarWidth = 0
            }
            var f = i.prototype;
            return f.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }
            ,
            f.show = function(e) {
                var n = this;
                if (!this._isTransitioning && !this._isShown) {
                    E.supportsTransitionEnd() && t(this._element).hasClass(u) && (this._isTransitioning = !0);
                    var i = t.Event(l.SHOW, {
                        relatedTarget: e
                    });
                    t(this._element).trigger(i),
                    this._isShown || i.isDefaultPrevented() || (this._isShown = !0,
                    this._checkScrollbar(),
                    this._setScrollbar(),
                    this._adjustDialog(),
                    t(document.body).addClass(c),
                    this._setEscapeEvent(),
                    this._setResizeEvent(),
                    t(this._element).on(l.CLICK_DISMISS, '[data-dismiss="modal"]', function(t) {
                        return n.hide(t)
                    }),
                    t(this._dialog).on(l.MOUSEDOWN_DISMISS, function() {
                        t(n._element).one(l.MOUSEUP_DISMISS, function(e) {
                            t(e.target).is(n._element) && (n._ignoreBackdropClick = !0)
                        })
                    }),
                    this._showBackdrop(function() {
                        return n._showElement(e)
                    }))
                }
            }
            ,
            f.hide = function(e) {
                var n = this;
                if (e && e.preventDefault(),
                !this._isTransitioning && this._isShown) {
                    var i = t.Event(l.HIDE);
                    if (t(this._element).trigger(i),
                    this._isShown && !i.isDefaultPrevented()) {
                        this._isShown = !1;
                        var r = E.supportsTransitionEnd() && t(this._element).hasClass(u);
                        r && (this._isTransitioning = !0),
                        this._setEscapeEvent(),
                        this._setResizeEvent(),
                        t(document).off(l.FOCUSIN),
                        t(this._element).removeClass(h),
                        t(this._element).off(l.CLICK_DISMISS),
                        t(this._dialog).off(l.MOUSEDOWN_DISMISS),
                        r ? t(this._element).one(E.TRANSITION_END, function(t) {
                            return n._hideModal(t)
                        }).emulateTransitionEnd(300) : this._hideModal()
                    }
                }
            }
            ,
            f.dispose = function() {
                t.removeData(this._element, e),
                t(window, document, this._element, this._backdrop).off(n),
                this._config = null,
                this._element = null,
                this._dialog = null,
                this._backdrop = null,
                this._isShown = null,
                this._isBodyOverflowing = null,
                this._ignoreBackdropClick = null,
                this._scrollbarWidth = null
            }
            ,
            f.handleUpdate = function() {
                this._adjustDialog()
            }
            ,
            f._getConfig = function(t) {
                return t = s({}, o, t),
                E.typeCheckConfig("modal", t, a),
                t
            }
            ,
            f._showElement = function(e) {
                var n = this
                  , i = E.supportsTransitionEnd() && t(this._element).hasClass(u);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element),
                this._element.style.display = "block",
                this._element.removeAttribute("aria-hidden"),
                this._element.scrollTop = 0,
                i && E.reflow(this._element),
                t(this._element).addClass(h),
                this._config.focus && this._enforceFocus();
                var r = t.Event(l.SHOWN, {
                    relatedTarget: e
                })
                  , s = function() {
                    n._config.focus && n._element.focus(),
                    n._isTransitioning = !1,
                    t(n._element).trigger(r)
                };
                i ? t(this._dialog).one(E.TRANSITION_END, s).emulateTransitionEnd(300) : s()
            }
            ,
            f._enforceFocus = function() {
                var e = this;
                t(document).off(l.FOCUSIN).on(l.FOCUSIN, function(n) {
                    document !== n.target && e._element !== n.target && 0 === t(e._element).has(n.target).length && e._element.focus()
                })
            }
            ,
            f._setEscapeEvent = function() {
                var e = this;
                this._isShown && this._config.keyboard ? t(this._element).on(l.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(),
                    e.hide())
                }) : this._isShown || t(this._element).off(l.KEYDOWN_DISMISS)
            }
            ,
            f._setResizeEvent = function() {
                var e = this;
                this._isShown ? t(window).on(l.RESIZE, function(t) {
                    return e.handleUpdate(t)
                }) : t(window).off(l.RESIZE)
            }
            ,
            f._hideModal = function() {
                var e = this;
                this._element.style.display = "none",
                this._element.setAttribute("aria-hidden", !0),
                this._isTransitioning = !1,
                this._showBackdrop(function() {
                    t(document.body).removeClass(c),
                    e._resetAdjustments(),
                    e._resetScrollbar(),
                    t(e._element).trigger(l.HIDDEN)
                })
            }
            ,
            f._removeBackdrop = function() {
                this._backdrop && (t(this._backdrop).remove(),
                this._backdrop = null)
            }
            ,
            f._showBackdrop = function(e) {
                var n = this
                  , i = t(this._element).hasClass(u) ? u : "";
                if (this._isShown && this._config.backdrop) {
                    var r = E.supportsTransitionEnd() && i;
                    if (this._backdrop = document.createElement("div"),
                    this._backdrop.className = "modal-backdrop",
                    i && t(this._backdrop).addClass(i),
                    t(this._backdrop).appendTo(document.body),
                    t(this._element).on(l.CLICK_DISMISS, function(t) {
                        n._ignoreBackdropClick ? n._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === n._config.backdrop ? n._element.focus() : n.hide())
                    }),
                    r && E.reflow(this._backdrop),
                    t(this._backdrop).addClass(h),
                    !e)
                        return;
                    if (!r)
                        return void e();
                    t(this._backdrop).one(E.TRANSITION_END, e).emulateTransitionEnd(150)
                } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(h);
                    var s = function() {
                        n._removeBackdrop(),
                        e && e()
                    };
                    E.supportsTransitionEnd() && t(this._element).hasClass(u) ? t(this._backdrop).one(E.TRANSITION_END, s).emulateTransitionEnd(150) : s()
                } else
                    e && e()
            }
            ,
            f._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"),
                this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }
            ,
            f._resetAdjustments = function() {
                this._element.style.paddingLeft = "",
                this._element.style.paddingRight = ""
            }
            ,
            f._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth,
                this._scrollbarWidth = this._getScrollbarWidth()
            }
            ,
            f._setScrollbar = function() {
                var e = this;
                if (this._isBodyOverflowing) {
                    t(d).each(function(n, i) {
                        var r = t(i)[0].style.paddingRight
                          , s = t(i).css("padding-right");
                        t(i).data("padding-right", r).css("padding-right", parseFloat(s) + e._scrollbarWidth + "px")
                    }),
                    t(".sticky-top").each(function(n, i) {
                        var r = t(i)[0].style.marginRight
                          , s = t(i).css("margin-right");
                        t(i).data("margin-right", r).css("margin-right", parseFloat(s) - e._scrollbarWidth + "px")
                    }),
                    t(".navbar-toggler").each(function(n, i) {
                        var r = t(i)[0].style.marginRight
                          , s = t(i).css("margin-right");
                        t(i).data("margin-right", r).css("margin-right", parseFloat(s) + e._scrollbarWidth + "px")
                    });
                    var n = document.body.style.paddingRight
                      , i = t("body").css("padding-right");
                    t("body").data("padding-right", n).css("padding-right", parseFloat(i) + this._scrollbarWidth + "px")
                }
            }
            ,
            f._resetScrollbar = function() {
                t(d).each(function(e, n) {
                    var i = t(n).data("padding-right");
                    void 0 !== i && t(n).css("padding-right", i).removeData("padding-right")
                }),
                t(".sticky-top, .navbar-toggler").each(function(e, n) {
                    var i = t(n).data("margin-right");
                    void 0 !== i && t(n).css("margin-right", i).removeData("margin-right")
                });
                var e = t("body").data("padding-right");
                void 0 !== e && t("body").css("padding-right", e).removeData("padding-right")
            }
            ,
            f._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure",
                document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t),
                e
            }
            ,
            i._jQueryInterface = function(n, r) {
                return this.each(function() {
                    var o = t(this).data(e)
                      , a = s({}, i.Default, t(this).data(), "object" == typeof n && n);
                    if (o || (o = new i(this,a),
                    t(this).data(e, o)),
                    "string" == typeof n) {
                        if (void 0 === o[n])
                            throw new TypeError('No method named "' + n + '"');
                        o[n](r)
                    } else
                        a.show && o.show(r)
                })
            }
            ,
            r(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return o
                }
            }]),
            i
        }();
        return t(document).on(l.CLICK_DATA_API, '[data-toggle="modal"]', function(n) {
            var i, r = this, o = E.getSelectorFromElement(this);
            o && (i = t(o)[0]);
            var a = t(i).data(e) ? "toggle" : s({}, t(i).data(), t(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
            var c = t(i).one(l.SHOW, function(e) {
                e.isDefaultPrevented() || c.one(l.HIDDEN, function() {
                    t(r).is(":visible") && r.focus()
                })
            });
            f._jQueryInterface.call(t(i), a, this)
        }),
        t.fn.modal = f._jQueryInterface,
        t.fn.modal.Constructor = f,
        t.fn.modal.noConflict = function() {
            return t.fn.modal = i,
            f._jQueryInterface
        }
        ,
        f
    }(e), N = function(t) {
        var e = "tooltip"
          , i = "bs.tooltip"
          , o = "." + i
          , a = t.fn[e]
          , l = new RegExp("(^|\\s)bs-tooltip\\S+","g")
          , c = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }
          , u = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }
          , h = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }
          , d = "show"
          , f = "out"
          , p = {
            HIDE: "hide" + o,
            HIDDEN: "hidden" + o,
            SHOW: "show" + o,
            SHOWN: "shown" + o,
            INSERTED: "inserted" + o,
            CLICK: "click" + o,
            FOCUSIN: "focusin" + o,
            FOCUSOUT: "focusout" + o,
            MOUSEENTER: "mouseenter" + o,
            MOUSELEAVE: "mouseleave" + o
        }
          , g = "fade"
          , m = "show"
          , v = "hover"
          , y = "focus"
          , _ = function() {
            function a(t, e) {
                if (void 0 === n)
                    throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0,
                this._timeout = 0,
                this._hoverState = "",
                this._activeTrigger = {},
                this._popper = null,
                this.element = t,
                this.config = this._getConfig(e),
                this.tip = null,
                this._setListeners()
            }
            var _ = a.prototype;
            return _.enable = function() {
                this._isEnabled = !0
            }
            ,
            _.disable = function() {
                this._isEnabled = !1
            }
            ,
            _.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }
            ,
            _.toggle = function(e) {
                if (this._isEnabled)
                    if (e) {
                        var n = this.constructor.DATA_KEY
                          , i = t(e.currentTarget).data(n);
                        i || (i = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                        t(e.currentTarget).data(n, i)),
                        i._activeTrigger.click = !i._activeTrigger.click,
                        i._isWithActiveTrigger() ? i._enter(null, i) : i._leave(null, i)
                    } else {
                        if (t(this.getTipElement()).hasClass(m))
                            return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }
            ,
            _.dispose = function() {
                clearTimeout(this._timeout),
                t.removeData(this.element, this.constructor.DATA_KEY),
                t(this.element).off(this.constructor.EVENT_KEY),
                t(this.element).closest(".modal").off("hide.bs.modal"),
                this.tip && t(this.tip).remove(),
                this._isEnabled = null,
                this._timeout = null,
                this._hoverState = null,
                this._activeTrigger = null,
                null !== this._popper && this._popper.destroy(),
                this._popper = null,
                this.element = null,
                this.config = null,
                this.tip = null
            }
            ,
            _.show = function() {
                var e = this;
                if ("none" === t(this.element).css("display"))
                    throw new Error("Please use show on visible elements");
                var i = t.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(i);
                    var r = t.contains(this.element.ownerDocument.documentElement, this.element);
                    if (i.isDefaultPrevented() || !r)
                        return;
                    var s = this.getTipElement()
                      , o = E.getUID(this.constructor.NAME);
                    s.setAttribute("id", o),
                    this.element.setAttribute("aria-describedby", o),
                    this.setContent(),
                    this.config.animation && t(s).addClass(g);
                    var l = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement
                      , c = this._getAttachment(l);
                    this.addAttachmentClass(c);
                    var u = !1 === this.config.container ? document.body : t(this.config.container);
                    t(s).data(this.constructor.DATA_KEY, this),
                    t.contains(this.element.ownerDocument.documentElement, this.tip) || t(s).appendTo(u),
                    t(this.element).trigger(this.constructor.Event.INSERTED),
                    this._popper = new n(this.element,s,{
                        placement: c,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: ".arrow"
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            e._handlePopperPlacementChange(t)
                        }
                    }),
                    t(s).addClass(m),
                    "ontouchstart"in document.documentElement && t("body").children().on("mouseover", null, t.noop);
                    var h = function() {
                        e.config.animation && e._fixTransition();
                        var n = e._hoverState;
                        e._hoverState = null,
                        t(e.element).trigger(e.constructor.Event.SHOWN),
                        n === f && e._leave(null, e)
                    };
                    E.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(this.tip).one(E.TRANSITION_END, h).emulateTransitionEnd(a._TRANSITION_DURATION) : h()
                }
            }
            ,
            _.hide = function(e) {
                var n = this
                  , i = this.getTipElement()
                  , r = t.Event(this.constructor.Event.HIDE)
                  , s = function() {
                    n._hoverState !== d && i.parentNode && i.parentNode.removeChild(i),
                    n._cleanTipClass(),
                    n.element.removeAttribute("aria-describedby"),
                    t(n.element).trigger(n.constructor.Event.HIDDEN),
                    null !== n._popper && n._popper.destroy(),
                    e && e()
                };
                t(this.element).trigger(r),
                r.isDefaultPrevented() || (t(i).removeClass(m),
                "ontouchstart"in document.documentElement && t("body").children().off("mouseover", null, t.noop),
                this._activeTrigger.click = !1,
                this._activeTrigger[y] = !1,
                this._activeTrigger[v] = !1,
                E.supportsTransitionEnd() && t(this.tip).hasClass(g) ? t(i).one(E.TRANSITION_END, s).emulateTransitionEnd(150) : s(),
                this._hoverState = "")
            }
            ,
            _.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }
            ,
            _.isWithContent = function() {
                return Boolean(this.getTitle())
            }
            ,
            _.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass("bs-tooltip-" + e)
            }
            ,
            _.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0],
                this.tip
            }
            ,
            _.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(".tooltip-inner"), this.getTitle()),
                e.removeClass(g + " " + m)
            }
            ,
            _.setElementContent = function(e, n) {
                var i = this.config.html;
                "object" == typeof n && (n.nodeType || n.jquery) ? i ? t(n).parent().is(e) || e.empty().append(n) : e.text(t(n).text()) : e[i ? "html" : "text"](n)
            }
            ,
            _.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title),
                t
            }
            ,
            _._getAttachment = function(t) {
                return u[t.toUpperCase()]
            }
            ,
            _._setListeners = function() {
                var e = this;
                this.config.trigger.split(" ").forEach(function(n) {
                    if ("click" === n)
                        t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function(t) {
                            return e.toggle(t)
                        });
                    else if ("manual" !== n) {
                        var i = n === v ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN
                          , r = n === v ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                        t(e.element).on(i, e.config.selector, function(t) {
                            return e._enter(t)
                        }).on(r, e.config.selector, function(t) {
                            return e._leave(t)
                        })
                    }
                    t(e.element).closest(".modal").on("hide.bs.modal", function() {
                        return e.hide()
                    })
                }),
                this.config.selector ? this.config = s({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }
            ,
            _._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""),
                this.element.setAttribute("title", ""))
            }
            ,
            _._enter = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger["focusin" === e.type ? y : v] = !0),
                t(n.getTipElement()).hasClass(m) || n._hoverState === d ? n._hoverState = d : (clearTimeout(n._timeout),
                n._hoverState = d,
                n.config.delay && n.config.delay.show ? n._timeout = setTimeout(function() {
                    n._hoverState === d && n.show()
                }, n.config.delay.show) : n.show())
            }
            ,
            _._leave = function(e, n) {
                var i = this.constructor.DATA_KEY;
                (n = n || t(e.currentTarget).data(i)) || (n = new this.constructor(e.currentTarget,this._getDelegateConfig()),
                t(e.currentTarget).data(i, n)),
                e && (n._activeTrigger["focusout" === e.type ? y : v] = !1),
                n._isWithActiveTrigger() || (clearTimeout(n._timeout),
                n._hoverState = f,
                n.config.delay && n.config.delay.hide ? n._timeout = setTimeout(function() {
                    n._hoverState === f && n.hide()
                }, n.config.delay.hide) : n.hide())
            }
            ,
            _._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t])
                        return !0;
                return !1
            }
            ,
            _._getConfig = function(n) {
                return "number" == typeof (n = s({}, this.constructor.Default, t(this.element).data(), n)).delay && (n.delay = {
                    show: n.delay,
                    hide: n.delay
                }),
                "number" == typeof n.title && (n.title = n.title.toString()),
                "number" == typeof n.content && (n.content = n.content.toString()),
                E.typeCheckConfig(e, n, this.constructor.DefaultType),
                n
            }
            ,
            _._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config)
                        this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }
            ,
            _._cleanTipClass = function() {
                var e = t(this.getTipElement())
                  , n = e.attr("class").match(l);
                null !== n && n.length > 0 && e.removeClass(n.join(""))
            }
            ,
            _._handlePopperPlacementChange = function(t) {
                this._cleanTipClass(),
                this.addAttachmentClass(this._getAttachment(t.placement))
            }
            ,
            _._fixTransition = function() {
                var e = this.getTipElement()
                  , n = this.config.animation;
                null === e.getAttribute("x-placement") && (t(e).removeClass(g),
                this.config.animation = !1,
                this.hide(),
                this.show(),
                this.config.animation = n)
            }
            ,
            a._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = t(this).data(i)
                      , r = "object" == typeof e && e;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new a(this,r),
                    t(this).data(i, n)),
                    "string" == typeof e)) {
                        if (void 0 === n[e])
                            throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }
            ,
            r(a, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return h
                }
            }, {
                key: "NAME",
                get: function() {
                    return e
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return i
                }
            }, {
                key: "Event",
                get: function() {
                    return p
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return o
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return c
                }
            }]),
            a
        }();
        return t.fn[e] = _._jQueryInterface,
        t.fn[e].Constructor = _,
        t.fn[e].noConflict = function() {
            return t.fn[e] = a,
            _._jQueryInterface
        }
        ,
        _
    }(e), j = function(t) {
        var e = "popover"
          , n = "bs.popover"
          , i = "." + n
          , o = t.fn[e]
          , a = new RegExp("(^|\\s)bs-popover\\S+","g")
          , l = s({}, N.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        })
          , c = s({}, N.DefaultType, {
            content: "(string|element|function)"
        })
          , u = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            INSERTED: "inserted" + i,
            CLICK: "click" + i,
            FOCUSIN: "focusin" + i,
            FOCUSOUT: "focusout" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i
        }
          , h = function(s) {
            var o, h;
            function d() {
                return s.apply(this, arguments) || this
            }
            h = s,
            (o = d).prototype = Object.create(h.prototype),
            o.prototype.constructor = o,
            o.__proto__ = h;
            var f = d.prototype;
            return f.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }
            ,
            f.addAttachmentClass = function(e) {
                t(this.getTipElement()).addClass("bs-popover-" + e)
            }
            ,
            f.getTipElement = function() {
                return this.tip = this.tip || t(this.config.template)[0],
                this.tip
            }
            ,
            f.setContent = function() {
                var e = t(this.getTipElement());
                this.setElementContent(e.find(".popover-header"), this.getTitle());
                var n = this._getContent();
                "function" == typeof n && (n = n.call(this.element)),
                this.setElementContent(e.find(".popover-body"), n),
                e.removeClass("fade show")
            }
            ,
            f._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }
            ,
            f._cleanTipClass = function() {
                var e = t(this.getTipElement())
                  , n = e.attr("class").match(a);
                null !== n && n.length > 0 && e.removeClass(n.join(""))
            }
            ,
            d._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = t(this).data(n)
                      , r = "object" == typeof e ? e : null;
                    if ((i || !/destroy|hide/.test(e)) && (i || (i = new d(this,r),
                    t(this).data(n, i)),
                    "string" == typeof e)) {
                        if (void 0 === i[e])
                            throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }
            ,
            r(d, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return l
                }
            }, {
                key: "NAME",
                get: function() {
                    return e
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return n
                }
            }, {
                key: "Event",
                get: function() {
                    return u
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return i
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return c
                }
            }]),
            d
        }(N);
        return t.fn[e] = h._jQueryInterface,
        t.fn[e].Constructor = h,
        t.fn[e].noConflict = function() {
            return t.fn[e] = o,
            h._jQueryInterface
        }
        ,
        h
    }(e), O = function(t) {
        var e = "scrollspy"
          , n = "bs.scrollspy"
          , i = "." + n
          , o = t.fn[e]
          , a = {
            offset: 10,
            method: "auto",
            target: ""
        }
          , l = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }
          , c = {
            ACTIVATE: "activate" + i,
            SCROLL: "scroll" + i,
            LOAD_DATA_API: "load" + i + ".data-api"
        }
          , u = "active"
          , h = ".nav, .list-group"
          , d = ".list-group-item"
          , f = "position"
          , p = function() {
            function o(e, n) {
                var i = this;
                this._element = e,
                this._scrollElement = "BODY" === e.tagName ? window : e,
                this._config = this._getConfig(n),
                this._selector = this._config.target + " .nav-link," + this._config.target + " " + d + "," + this._config.target + " .dropdown-item",
                this._offsets = [],
                this._targets = [],
                this._activeTarget = null,
                this._scrollHeight = 0,
                t(this._scrollElement).on(c.SCROLL, function(t) {
                    return i._process(t)
                }),
                this.refresh(),
                this._process()
            }
            var p = o.prototype;
            return p.refresh = function() {
                var e = this
                  , n = "auto" === this._config.method ? this._scrollElement === this._scrollElement.window ? "offset" : f : this._config.method
                  , i = n === f ? this._getScrollTop() : 0;
                this._offsets = [],
                this._targets = [],
                this._scrollHeight = this._getScrollHeight(),
                t.makeArray(t(this._selector)).map(function(e) {
                    var r, s = E.getSelectorFromElement(e);
                    if (s && (r = t(s)[0]),
                    r) {
                        var o = r.getBoundingClientRect();
                        if (o.width || o.height)
                            return [t(r)[n]().top + i, s]
                    }
                    return null
                }).filter(function(t) {
                    return t
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).forEach(function(t) {
                    e._offsets.push(t[0]),
                    e._targets.push(t[1])
                })
            }
            ,
            p.dispose = function() {
                t.removeData(this._element, n),
                t(this._scrollElement).off(i),
                this._element = null,
                this._scrollElement = null,
                this._config = null,
                this._selector = null,
                this._offsets = null,
                this._targets = null,
                this._activeTarget = null,
                this._scrollHeight = null
            }
            ,
            p._getConfig = function(n) {
                if ("string" != typeof (n = s({}, a, n)).target) {
                    var i = t(n.target).attr("id");
                    i || (i = E.getUID(e),
                    t(n.target).attr("id", i)),
                    n.target = "#" + i
                }
                return E.typeCheckConfig(e, n, l),
                n
            }
            ,
            p._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }
            ,
            p._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
            ,
            p._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }
            ,
            p._process = function() {
                var t = this._getScrollTop() + this._config.offset
                  , e = this._getScrollHeight()
                  , n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(),
                t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0)
                        return this._activeTarget = null,
                        void this._clear();
                    for (var r = this._offsets.length; r--; )
                        this._activeTarget !== this._targets[r] && t >= this._offsets[r] && (void 0 === this._offsets[r + 1] || t < this._offsets[r + 1]) && this._activate(this._targets[r])
                }
            }
            ,
            p._activate = function(e) {
                this._activeTarget = e,
                this._clear();
                var n = this._selector.split(",");
                n = n.map(function(t) {
                    return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
                });
                var i = t(n.join(","));
                i.hasClass("dropdown-item") ? (i.closest(".dropdown").find(".dropdown-toggle").addClass(u),
                i.addClass(u)) : (i.addClass(u),
                i.parents(h).prev(".nav-link, " + d).addClass(u),
                i.parents(h).prev(".nav-item").children(".nav-link").addClass(u)),
                t(this._scrollElement).trigger(c.ACTIVATE, {
                    relatedTarget: e
                })
            }
            ,
            p._clear = function() {
                t(this._selector).filter(".active").removeClass(u)
            }
            ,
            o._jQueryInterface = function(e) {
                return this.each(function() {
                    var i = t(this).data(n);
                    if (i || (i = new o(this,"object" == typeof e && e),
                    t(this).data(n, i)),
                    "string" == typeof e) {
                        if (void 0 === i[e])
                            throw new TypeError('No method named "' + e + '"');
                        i[e]()
                    }
                })
            }
            ,
            r(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return a
                }
            }]),
            o
        }();
        return t(window).on(c.LOAD_DATA_API, function() {
            for (var e = t.makeArray(t('[data-spy="scroll"]')), n = e.length; n--; ) {
                var i = t(e[n]);
                p._jQueryInterface.call(i, i.data())
            }
        }),
        t.fn[e] = p._jQueryInterface,
        t.fn[e].Constructor = p,
        t.fn[e].noConflict = function() {
            return t.fn[e] = o,
            p._jQueryInterface
        }
        ,
        p
    }(e), P = function(t) {
        var e = "bs.tab"
          , n = "." + e
          , i = t.fn.tab
          , s = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            CLICK_DATA_API: "click.bs.tab.data-api"
        }
          , o = "active"
          , a = "show"
          , l = ".active"
          , c = "> li > .active"
          , u = function() {
            function n(t) {
                this._element = t
            }
            var i = n.prototype;
            return i.show = function() {
                var e = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(o) || t(this._element).hasClass("disabled"))) {
                    var n, i, r = t(this._element).closest(".nav, .list-group")[0], a = E.getSelectorFromElement(this._element);
                    if (r) {
                        var u = "UL" === r.nodeName ? c : l;
                        i = (i = t.makeArray(t(r).find(u)))[i.length - 1]
                    }
                    var h = t.Event(s.HIDE, {
                        relatedTarget: this._element
                    })
                      , d = t.Event(s.SHOW, {
                        relatedTarget: i
                    });
                    if (i && t(i).trigger(h),
                    t(this._element).trigger(d),
                    !d.isDefaultPrevented() && !h.isDefaultPrevented()) {
                        a && (n = t(a)[0]),
                        this._activate(this._element, r);
                        var f = function() {
                            var n = t.Event(s.HIDDEN, {
                                relatedTarget: e._element
                            })
                              , r = t.Event(s.SHOWN, {
                                relatedTarget: i
                            });
                            t(i).trigger(n),
                            t(e._element).trigger(r)
                        };
                        n ? this._activate(n, n.parentNode, f) : f()
                    }
                }
            }
            ,
            i.dispose = function() {
                t.removeData(this._element, e),
                this._element = null
            }
            ,
            i._activate = function(e, n, i) {
                var r = this
                  , s = ("UL" === n.nodeName ? t(n).find(c) : t(n).children(l))[0]
                  , o = i && E.supportsTransitionEnd() && s && t(s).hasClass("fade")
                  , a = function() {
                    return r._transitionComplete(e, s, i)
                };
                s && o ? t(s).one(E.TRANSITION_END, a).emulateTransitionEnd(150) : a()
            }
            ,
            i._transitionComplete = function(e, n, i) {
                if (n) {
                    t(n).removeClass(a + " " + o);
                    var r = t(n.parentNode).find("> .dropdown-menu .active")[0];
                    r && t(r).removeClass(o),
                    "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !1)
                }
                if (t(e).addClass(o),
                "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0),
                E.reflow(e),
                t(e).addClass(a),
                e.parentNode && t(e.parentNode).hasClass("dropdown-menu")) {
                    var s = t(e).closest(".dropdown")[0];
                    s && t(s).find(".dropdown-toggle").addClass(o),
                    e.setAttribute("aria-expanded", !0)
                }
                i && i()
            }
            ,
            n._jQueryInterface = function(i) {
                return this.each(function() {
                    var r = t(this)
                      , s = r.data(e);
                    if (s || (s = new n(this),
                    r.data(e, s)),
                    "string" == typeof i) {
                        if (void 0 === s[i])
                            throw new TypeError('No method named "' + i + '"');
                        s[i]()
                    }
                })
            }
            ,
            r(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.0.0"
                }
            }]),
            n
        }();
        return t(document).on(s.CLICK_DATA_API, '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', function(e) {
            e.preventDefault(),
            u._jQueryInterface.call(t(this), "show")
        }),
        t.fn.tab = u._jQueryInterface,
        t.fn.tab.Constructor = u,
        t.fn.tab.noConflict = function() {
            return t.fn.tab = i,
            u._jQueryInterface
        }
        ,
        u
    }(e);
    !function(t) {
        if (void 0 === t)
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var e = t.fn.jquery.split(" ")[0].split(".");
        if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4)
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e),
    t.Util = E,
    t.Alert = T,
    t.Button = D,
    t.Carousel = S,
    t.Collapse = A,
    t.Dropdown = k,
    t.Modal = I,
    t.Popover = j,
    t.Scrollspy = O,
    t.Tab = P,
    t.Tooltip = N,
    Object.defineProperty(t, "__esModule", {
        value: !0
    })
}),
function(t, e, n, i) {
    function r(e, n) {
        this.settings = null,
        this.options = t.extend({}, r.Defaults, n),
        this.$element = t(e),
        this._handlers = {},
        this._plugins = {},
        this._supress = {},
        this._current = null,
        this._speed = null,
        this._coordinates = [],
        this._breakpoint = null,
        this._width = null,
        this._items = [],
        this._clones = [],
        this._mergers = [],
        this._widths = [],
        this._invalidated = {},
        this._pipe = [],
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        },
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        },
        t.each(["onResize", "onThrottledResize"], t.proxy(function(e, n) {
            this._handlers[n] = t.proxy(this[n], this)
        }, this)),
        t.each(r.Plugins, t.proxy(function(t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this)
        }, this)),
        t.each(r.Workers, t.proxy(function(e, n) {
            this._pipe.push({
                filter: n.filter,
                run: t.proxy(n.run, this)
            })
        }, this)),
        this.setup(),
        this.initialize()
    }
    r.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        checkVisibility: !0,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: e,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    },
    r.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    },
    r.Type = {
        Event: "event",
        State: "state"
    },
    r.Plugins = {},
    r.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this.settings.margin || ""
              , n = this.settings.rtl
              , i = {
                width: "auto",
                "margin-left": n ? e : "",
                "margin-right": n ? "" : e
            };
            !!this.settings.autoWidth && this.$stage.children().css(i),
            t.css = i
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
              , n = null
              , i = this._items.length
              , r = !this.settings.autoWidth
              , s = [];
            for (t.items = {
                merge: !1,
                width: e
            }; i--; )
                n = this._mergers[i],
                n = this.settings.mergeFit && Math.min(n, this.settings.items) || n,
                t.items.merge = n > 1 || t.items.merge,
                s[i] = r ? e * n : this._items[i].width();
            this._widths = s
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var e = []
              , n = this._items
              , i = this.settings
              , r = Math.max(2 * i.items, 4)
              , s = 2 * Math.ceil(n.length / 2)
              , o = i.loop && n.length ? i.rewind ? r : Math.max(r, s) : 0
              , a = ""
              , l = "";
            for (o /= 2; o > 0; )
                e.push(this.normalize(e.length / 2, !0)),
                a += n[e[e.length - 1]][0].outerHTML,
                e.push(this.normalize(n.length - 1 - (e.length - 1) / 2, !0)),
                l = n[e[e.length - 1]][0].outerHTML + l,
                o -= 1;
            this._clones = e,
            t(a).addClass("cloned").appendTo(this.$stage),
            t(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, n = -1, i = 0, r = 0, s = []; ++n < e; )
                i = s[n - 1] || 0,
                r = this._widths[this.relative(n)] + this.settings.margin,
                s.push(i + r * t);
            this._coordinates = s
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var t = this.settings.stagePadding
              , e = this._coordinates
              , n = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || ""
            };
            this.$stage.css(n)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            var e = this._coordinates.length
              , n = !this.settings.autoWidth
              , i = this.$stage.children();
            if (n && t.items.merge)
                for (; e--; )
                    t.css.width = this._widths[this.relative(e)],
                    i.eq(e).css(t.css);
            else
                n && (t.css.width = t.items.width,
                i.css(t.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(t) {
            t.current = t.current ? this.$stage.children().index(t.current) : 0,
            t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)),
            this.reset(t.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var t, e, n, i, r = this.settings.rtl ? 1 : -1, s = 2 * this.settings.stagePadding, o = this.coordinates(this.current()) + s, a = o + this.width() * r, l = [];
            for (n = 0,
            i = this._coordinates.length; n < i; n++)
                t = this._coordinates[n - 1] || 0,
                e = Math.abs(this._coordinates[n]) + s * r,
                (this.op(t, "<=", o) && this.op(t, ">", a) || this.op(e, "<", o) && this.op(e, ">", a)) && l.push(n);
            this.$stage.children(".active").removeClass("active"),
            this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"),
            this.$stage.children(".center").removeClass("center"),
            this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }],
    r.prototype.initializeStage = function() {
        this.$stage = this.$element.find("." + this.settings.stageClass),
        this.$stage.length || (this.$element.addClass(this.options.loadingClass),
        this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'),
        this.$element.append(this.$stage.parent()))
    }
    ,
    r.prototype.initializeItems = function() {
        var e = this.$element.find(".owl-item");
        if (e.length)
            return this._items = e.get().map(function(e) {
                return t(e)
            }),
            this._mergers = this._items.map(function() {
                return 1
            }),
            void this.refresh();
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.isVisible() ? this.refresh() : this.invalidate("width"),
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass)
    }
    ,
    r.prototype.initialize = function() {
        var t, e;
        this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading") && (t = this.$element.find("img"),
        e = this.$element.children(this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : i).width(),
        t.length && e <= 0 && this.preloadAutoWidthImages(t)),
        this.initializeStage(),
        this.initializeItems(),
        this.registerEventHandlers(),
        this.leave("initializing"),
        this.trigger("initialized")
    }
    ,
    r.prototype.isVisible = function() {
        return !this.settings.checkVisibility || this.$element.is(":visible")
    }
    ,
    r.prototype.setup = function() {
        var e = this.viewport()
          , n = this.options.responsive
          , i = -1
          , r = null;
        n ? (t.each(n, function(t) {
            t <= e && t > i && (i = Number(t))
        }),
        "function" == typeof (r = t.extend({}, this.options, n[i])).stagePadding && (r.stagePadding = r.stagePadding()),
        delete r.responsive,
        r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s","g"), "$1" + i))) : r = t.extend({}, this.options),
        this.trigger("change", {
            property: {
                name: "settings",
                value: r
            }
        }),
        this._breakpoint = i,
        this.settings = r,
        this.invalidate("settings"),
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }
    ,
    r.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1,
        this.settings.merge = !1)
    }
    ,
    r.prototype.prepare = function(e) {
        var n = this.trigger("prepare", {
            content: e
        });
        return n.data || (n.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)),
        this.trigger("prepared", {
            content: n.data
        }),
        n.data
    }
    ,
    r.prototype.update = function() {
        for (var e = 0, n = this._pipe.length, i = t.proxy(function(t) {
            return this[t]
        }, this._invalidated), r = {}; e < n; )
            (this._invalidated.all || t.grep(this._pipe[e].filter, i).length > 0) && this._pipe[e].run(r),
            e++;
        this._invalidated = {},
        !this.is("valid") && this.enter("valid")
    }
    ,
    r.prototype.width = function(t) {
        switch (t = t || r.Width.Default) {
        case r.Width.Inner:
        case r.Width.Outer:
            return this._width;
        default:
            return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }
    ,
    r.prototype.refresh = function() {
        this.enter("refreshing"),
        this.trigger("refresh"),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave("refreshing"),
        this.trigger("refreshed")
    }
    ,
    r.prototype.onThrottledResize = function() {
        e.clearTimeout(this.resizeTimer),
        this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }
    ,
    r.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.isVisible() && (this.enter("resizing"),
        this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
        !1) : (this.invalidate("width"),
        this.refresh(),
        this.leave("resizing"),
        void this.trigger("resized")))
    }
    ,
    r.prototype.registerEventHandlers = function() {
        t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)),
        !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize),
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
        this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)),
        this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        })),
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)),
        this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this)))
    }
    ,
    r.prototype.onDragStart = function(e) {
        var i = null;
        3 !== e.which && (t.support.transform ? i = {
            x: (i = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","))[16 === i.length ? 12 : 4],
            y: i[16 === i.length ? 13 : 5]
        } : (i = this.$stage.position(),
        i = {
            x: this.settings.rtl ? i.left + this.$stage.width() - this.width() + this.settings.margin : i.left,
            y: i.top
        }),
        this.is("animating") && (t.support.transform ? this.animate(i.x) : this.$stage.stop(),
        this.invalidate("position")),
        this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type),
        this.speed(0),
        this._drag.time = (new Date).getTime(),
        this._drag.target = t(e.target),
        this._drag.stage.start = i,
        this._drag.stage.current = i,
        this._drag.pointer = this.pointer(e),
        t(n).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)),
        t(n).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
            var i = this.difference(this._drag.pointer, this.pointer(e));
            t(n).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)),
            Math.abs(i.x) < Math.abs(i.y) && this.is("valid") || (e.preventDefault(),
            this.enter("dragging"),
            this.trigger("drag"))
        }, this)))
    }
    ,
    r.prototype.onDragMove = function(t) {
        var e = null
          , n = null
          , i = null
          , r = this.difference(this._drag.pointer, this.pointer(t))
          , s = this.difference(this._drag.stage.start, r);
        this.is("dragging") && (t.preventDefault(),
        this.settings.loop ? (e = this.coordinates(this.minimum()),
        n = this.coordinates(this.maximum() + 1) - e,
        s.x = ((s.x - e) % n + n) % n + e) : (e = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()),
        n = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()),
        i = this.settings.pullDrag ? -1 * r.x / 5 : 0,
        s.x = Math.max(Math.min(s.x, e + i), n + i)),
        this._drag.stage.current = s,
        this.animate(s.x))
    }
    ,
    r.prototype.onDragEnd = function(e) {
        var i = this.difference(this._drag.pointer, this.pointer(e))
          , r = this._drag.stage.current
          , s = i.x > 0 ^ this.settings.rtl ? "left" : "right";
        t(n).off(".owl.core"),
        this.$element.removeClass(this.options.grabClass),
        (0 !== i.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
        this.current(this.closest(r.x, 0 !== i.x ? s : this._drag.direction)),
        this.invalidate("position"),
        this.update(),
        this._drag.direction = s,
        (Math.abs(i.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        })),
        this.is("dragging") && (this.leave("dragging"),
        this.trigger("dragged"))
    }
    ,
    r.prototype.closest = function(e, n) {
        var r = -1
          , s = this.width()
          , o = this.coordinates();
        return this.settings.freeDrag || t.each(o, t.proxy(function(t, a) {
            return "left" === n && e > a - 30 && e < a + 30 ? r = t : "right" === n && e > a - s - 30 && e < a - s + 30 ? r = t + 1 : this.op(e, "<", a) && this.op(e, ">", o[t + 1] !== i ? o[t + 1] : a - s) && (r = "left" === n ? t + 1 : t),
            -1 === r
        }, this)),
        this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? r = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (r = e = this.maximum())),
        r
    }
    ,
    r.prototype.animate = function(e) {
        var n = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
        n && (this.enter("animating"),
        this.trigger("translate")),
        t.support.transform3d && t.support.transition ? this.$stage.css({
            transform: "translate3d(" + e + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : n ? this.$stage.animate({
            left: e + "px"
        }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: e + "px"
        })
    }
    ,
    r.prototype.is = function(t) {
        return this._states.current[t] && this._states.current[t] > 0
    }
    ,
    r.prototype.current = function(t) {
        if (t === i)
            return this._current;
        if (0 === this._items.length)
            return i;
        if (t = this.normalize(t),
        this._current !== t) {
            var e = this.trigger("change", {
                property: {
                    name: "position",
                    value: t
                }
            });
            e.data !== i && (t = this.normalize(e.data)),
            this._current = t,
            this.invalidate("position"),
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }
    ,
    r.prototype.invalidate = function(e) {
        return "string" === t.type(e) && (this._invalidated[e] = !0,
        this.is("valid") && this.leave("valid")),
        t.map(this._invalidated, function(t, e) {
            return e
        })
    }
    ,
    r.prototype.reset = function(t) {
        (t = this.normalize(t)) !== i && (this._speed = 0,
        this._current = t,
        this.suppress(["translate", "translated"]),
        this.animate(this.coordinates(t)),
        this.release(["translate", "translated"]))
    }
    ,
    r.prototype.normalize = function(t, e) {
        var n = this._items.length
          , r = e ? 0 : this._clones.length;
        return !this.isNumeric(t) || n < 1 ? t = i : (t < 0 || t >= n + r) && (t = ((t - r / 2) % n + n) % n + r / 2),
        t
    }
    ,
    r.prototype.relative = function(t) {
        return this.normalize(t -= this._clones.length / 2, !0)
    }
    ,
    r.prototype.maximum = function(t) {
        var e, n, i, r = this.settings, s = this._coordinates.length;
        if (r.loop)
            s = this._clones.length / 2 + this._items.length - 1;
        else if (r.autoWidth || r.merge) {
            if (e = this._items.length)
                for (n = this._items[--e].width(),
                i = this.$element.width(); e-- && !((n += this._items[e].width() + this.settings.margin) > i); )
                    ;
            s = e + 1
        } else
            s = r.center ? this._items.length - 1 : this._items.length - r.items;
        return t && (s -= this._clones.length / 2),
        Math.max(s, 0)
    }
    ,
    r.prototype.minimum = function(t) {
        return t ? 0 : this._clones.length / 2
    }
    ,
    r.prototype.items = function(t) {
        return t === i ? this._items.slice() : (t = this.normalize(t, !0),
        this._items[t])
    }
    ,
    r.prototype.mergers = function(t) {
        return t === i ? this._mergers.slice() : (t = this.normalize(t, !0),
        this._mergers[t])
    }
    ,
    r.prototype.clones = function(e) {
        var n = this._clones.length / 2
          , r = n + this._items.length
          , s = function(t) {
            return t % 2 == 0 ? r + t / 2 : n - (t + 1) / 2
        };
        return t.map(this._clones, e === i ? function(t, e) {
            return s(e)
        }
        : function(t, n) {
            return t === e ? s(n) : null
        }
        )
    }
    ,
    r.prototype.speed = function(t) {
        return t !== i && (this._speed = t),
        this._speed
    }
    ,
    r.prototype.coordinates = function(e) {
        var n, r = 1, s = e - 1;
        return e === i ? t.map(this._coordinates, t.proxy(function(t, e) {
            return this.coordinates(e)
        }, this)) : (this.settings.center ? (this.settings.rtl && (r = -1,
        s = e + 1),
        n = this._coordinates[e],
        n += (this.width() - n + (this._coordinates[s] || 0)) / 2 * r) : n = this._coordinates[s] || 0,
        n = Math.ceil(n))
    }
    ,
    r.prototype.duration = function(t, e, n) {
        return 0 === n ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(n || this.settings.smartSpeed)
    }
    ,
    r.prototype.to = function(t, e) {
        var n = this.current()
          , i = null
          , r = t - this.relative(n)
          , s = (r > 0) - (r < 0)
          , o = this._items.length
          , a = this.minimum()
          , l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(r) > o / 2 && (r += -1 * s * o),
        (i = (((t = n + r) - a) % o + o) % o + a) !== t && i - r <= l && i - r > 0 && (t = i,
        this.reset(n = i - r))) : t = this.settings.rewind ? (t % (l += 1) + l) % l : Math.max(a, Math.min(l, t)),
        this.speed(this.duration(n, t, e)),
        this.current(t),
        this.isVisible() && this.update()
    }
    ,
    r.prototype.next = function(t) {
        t = t || !1,
        this.to(this.relative(this.current()) + 1, t)
    }
    ,
    r.prototype.prev = function(t) {
        t = t || !1,
        this.to(this.relative(this.current()) - 1, t)
    }
    ,
    r.prototype.onTransitionEnd = function(t) {
        if (t !== i && (t.stopPropagation(),
        (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0)))
            return !1;
        this.leave("animating"),
        this.trigger("translated")
    }
    ,
    r.prototype.viewport = function() {
        var i;
        return this.options.responsiveBaseElement !== e ? i = t(this.options.responsiveBaseElement).width() : e.innerWidth ? i = e.innerWidth : n.documentElement && n.documentElement.clientWidth ? i = n.documentElement.clientWidth : console.warn("Can not detect viewport width."),
        i
    }
    ,
    r.prototype.replace = function(e) {
        this.$stage.empty(),
        this._items = [],
        e && (e = e instanceof jQuery ? e : t(e)),
        this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)),
        e.filter(function() {
            return 1 === this.nodeType
        }).each(t.proxy(function(t, e) {
            e = this.prepare(e),
            this.$stage.append(e),
            this._items.push(e),
            this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)),
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
        this.invalidate("items")
    }
    ,
    r.prototype.add = function(e, n) {
        var r = this.relative(this._current);
        n = n === i ? this._items.length : this.normalize(n, !0),
        e = e instanceof jQuery ? e : t(e),
        this.trigger("add", {
            content: e,
            position: n
        }),
        e = this.prepare(e),
        0 === this._items.length || n === this._items.length ? (0 === this._items.length && this.$stage.append(e),
        0 !== this._items.length && this._items[n - 1].after(e),
        this._items.push(e),
        this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[n].before(e),
        this._items.splice(n, 0, e),
        this._mergers.splice(n, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
        this._items[r] && this.reset(this._items[r].index()),
        this.invalidate("items"),
        this.trigger("added", {
            content: e,
            position: n
        })
    }
    ,
    r.prototype.remove = function(t) {
        (t = this.normalize(t, !0)) !== i && (this.trigger("remove", {
            content: this._items[t],
            position: t
        }),
        this._items[t].remove(),
        this._items.splice(t, 1),
        this._mergers.splice(t, 1),
        this.invalidate("items"),
        this.trigger("removed", {
            content: null,
            position: t
        }))
    }
    ,
    r.prototype.preloadAutoWidthImages = function(e) {
        e.each(t.proxy(function(e, n) {
            this.enter("pre-loading"),
            n = t(n),
            t(new Image).one("load", t.proxy(function(t) {
                n.attr("src", t.target.src),
                n.css("opacity", 1),
                this.leave("pre-loading"),
                !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", n.attr("src") || n.attr("data-src") || n.attr("data-src-retina"))
        }, this))
    }
    ,
    r.prototype.destroy = function() {
        for (var i in this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        t(n).off(".owl.core"),
        !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer),
        this.off(e, "resize", this._handlers.onThrottledResize)),
        this._plugins)
            this._plugins[i].destroy();
        this.$stage.children(".cloned").remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s","g"), "")).removeData("owl.carousel")
    }
    ,
    r.prototype.op = function(t, e, n) {
        var i = this.settings.rtl;
        switch (e) {
        case "<":
            return i ? t > n : t < n;
        case ">":
            return i ? t < n : t > n;
        case ">=":
            return i ? t <= n : t >= n;
        case "<=":
            return i ? t >= n : t <= n
        }
    }
    ,
    r.prototype.on = function(t, e, n, i) {
        t.addEventListener ? t.addEventListener(e, n, i) : t.attachEvent && t.attachEvent("on" + e, n)
    }
    ,
    r.prototype.off = function(t, e, n, i) {
        t.removeEventListener ? t.removeEventListener(e, n, i) : t.detachEvent && t.detachEvent("on" + e, n)
    }
    ,
    r.prototype.trigger = function(e, n, i, s, o) {
        var a = {
            item: {
                count: this._items.length,
                index: this.current()
            }
        }
          , l = t.camelCase(t.grep(["on", e, i], function(t) {
            return t
        }).join("-").toLowerCase())
          , c = t.Event([e, "owl", i || "carousel"].join(".").toLowerCase(), t.extend({
            relatedTarget: this
        }, a, n));
        return this._supress[e] || (t.each(this._plugins, function(t, e) {
            e.onTrigger && e.onTrigger(c)
        }),
        this.register({
            type: r.Type.Event,
            name: e
        }),
        this.$element.trigger(c),
        this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, c)),
        c
    }
    ,
    r.prototype.enter = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e] === i && (this._states.current[e] = 0),
            this._states.current[e]++
        }, this))
    }
    ,
    r.prototype.leave = function(e) {
        t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) {
            this._states.current[e]--
        }, this))
    }
    ,
    r.prototype.register = function(e) {
        if (e.type === r.Type.Event) {
            if (t.event.special[e.name] || (t.event.special[e.name] = {}),
            !t.event.special[e.name].owl) {
                var n = t.event.special[e.name]._default;
                t.event.special[e.name]._default = function(t) {
                    return !n || !n.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : n.apply(this, arguments)
                }
                ,
                t.event.special[e.name].owl = !0
            }
        } else
            e.type === r.Type.State && (this._states.tags[e.name] = this._states.tags[e.name] ? this._states.tags[e.name].concat(e.tags) : e.tags,
            this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(n, i) {
                return t.inArray(n, this._states.tags[e.name]) === i
            }, this)))
    }
    ,
    r.prototype.suppress = function(e) {
        t.each(e, t.proxy(function(t, e) {
            this._supress[e] = !0
        }, this))
    }
    ,
    r.prototype.release = function(e) {
        t.each(e, t.proxy(function(t, e) {
            delete this._supress[e]
        }, this))
    }
    ,
    r.prototype.pointer = function(t) {
        var n = {
            x: null,
            y: null
        };
        return (t = (t = t.originalEvent || t || e.event).touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t).pageX ? (n.x = t.pageX,
        n.y = t.pageY) : (n.x = t.clientX,
        n.y = t.clientY),
        n
    }
    ,
    r.prototype.isNumeric = function(t) {
        return !isNaN(parseFloat(t))
    }
    ,
    r.prototype.difference = function(t, e) {
        return {
            x: t.x - e.x,
            y: t.y - e.y
        }
    }
    ,
    t.fn.owlCarousel = function(e) {
        var n = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var i = t(this)
              , s = i.data("owl.carousel");
            s || (s = new r(this,"object" == typeof e && e),
            i.data("owl.carousel", s),
            t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, n) {
                s.register({
                    type: r.Type.Event,
                    name: n
                }),
                s.$element.on(n + ".owl.carousel.core", t.proxy(function(t) {
                    t.namespace && t.relatedTarget !== this && (this.suppress([n]),
                    s[n].apply(this, [].slice.call(arguments, 1)),
                    this.release([n]))
                }, s))
            })),
            "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, n)
        })
    }
    ,
    t.fn.owlCarousel.Constructor = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var r = function(e) {
        this._core = e,
        this._interval = null,
        this._visible = null,
        this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        },
        this._core.options = t.extend({}, r.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    r.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    },
    r.prototype.watch = function() {
        this._interval || (this._visible = this._core.isVisible(),
        this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }
    ,
    r.prototype.refresh = function() {
        this._core.isVisible() !== this._visible && (this._visible = !this._visible,
        this._core.$element.toggleClass("owl-hidden", !this._visible),
        this._visible && this._core.invalidate("width") && this._core.refresh())
    }
    ,
    r.prototype.destroy = function() {
        var t, n;
        for (t in e.clearInterval(this._interval),
        this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (n in Object.getOwnPropertyNames(this))
            "function" != typeof this[n] && (this[n] = null)
    }
    ,
    t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var r = function(e) {
        this._core = e,
        this._loaded = [],
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                    for (var n = this._core.settings, i = n.center && Math.ceil(n.items / 2) || n.items, r = n.center && -1 * i || 0, s = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + r, o = this._core.clones().length, a = t.proxy(function(t, e) {
                        this.load(e)
                    }, this); r++ < i; )
                        this.load(o / 2 + this._core.relative(s)),
                        o && t.each(this._core.clones(this._core.relative(s)), a),
                        s++
            }, this)
        },
        this._core.options = t.extend({}, r.Defaults, this._core.options),
        this._core.$element.on(this._handlers)
    };
    r.Defaults = {
        lazyLoad: !1
    },
    r.prototype.load = function(n) {
        var i = this._core.$stage.children().eq(n)
          , r = i && i.find(".owl-lazy");
        !r || t.inArray(i.get(0), this._loaded) > -1 || (r.each(t.proxy(function(n, i) {
            var r, s = t(i), o = e.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src") || s.attr("data-srcset");
            this._core.trigger("load", {
                element: s,
                url: o
            }, "lazy"),
            s.is("img") ? s.one("load.owl.lazy", t.proxy(function() {
                s.css("opacity", 1),
                this._core.trigger("loaded", {
                    element: s,
                    url: o
                }, "lazy")
            }, this)).attr("src", o) : s.is("source") ? s.one("load.owl.lazy", t.proxy(function() {
                this._core.trigger("loaded", {
                    element: s,
                    url: o
                }, "lazy")
            }, this)).attr("srcset", o) : ((r = new Image).onload = t.proxy(function() {
                s.css({
                    "background-image": 'url("' + o + '")',
                    opacity: "1"
                }),
                this._core.trigger("loaded", {
                    element: s,
                    url: o
                }, "lazy")
            }, this),
            r.src = o)
        }, this)),
        this._loaded.push(i.get(0)))
    }
    ,
    r.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers)
            this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    t.fn.owlCarousel.Constructor.Plugins.Lazy = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var r = function(n) {
        this._core = n,
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && "position" === t.property.name && (console.log("update called"),
                this.update())
            }, this),
            "loaded.owl.lazy": t.proxy(function(t) {
                t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        },
        this._core.options = t.extend({}, r.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._intervalId = null;
        var i = this;
        t(e).on("load", function() {
            i._core.settings.autoHeight && i.update()
        }),
        t(e).resize(function() {
            i._core.settings.autoHeight && (null != i._intervalId && clearTimeout(i._intervalId),
            i._intervalId = setTimeout(function() {
                i.update()
            }, 250))
        })
    };
    r.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    },
    r.prototype.update = function() {
        var e, n = this._core._current, i = n + this._core.settings.items, r = this._core.$stage.children().toArray().slice(n, i), s = [];
        t.each(r, function(e, n) {
            s.push(t(n).height())
        }),
        e = Math.max.apply(null, s),
        this._core.$stage.parent().height(e).addClass(this._core.settings.autoHeightClass)
    }
    ,
    r.prototype.destroy = function() {
        var t, e;
        for (t in this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    t.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var r = function(e) {
        this._core = e,
        this._videos = {},
        this._playing = null,
        this._handlers = {
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault()
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" === t.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var n = t(e.content).find(".owl-video");
                    n.length && (n.css("display", "none"),
                    this.fetch(n, t(e.content)))
                }
            }, this)
        },
        this._core.options = t.extend({}, r.Defaults, this._core.options),
        this._core.$element.on(this._handlers),
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) {
            this.play(t)
        }, this))
    };
    r.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    },
    r.prototype.fetch = function(t, e) {
        var n = t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube"
          , i = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id")
          , r = t.attr("data-width") || this._core.settings.videoWidth
          , s = t.attr("data-height") || this._core.settings.videoHeight
          , o = t.attr("href");
        if (!o)
            throw new Error("Missing video URL.");
        if ((i = o.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/))[3].indexOf("youtu") > -1)
            n = "youtube";
        else if (i[3].indexOf("vimeo") > -1)
            n = "vimeo";
        else {
            if (!(i[3].indexOf("vzaar") > -1))
                throw new Error("Video URL not supported.");
            n = "vzaar"
        }
        this._videos[o] = {
            type: n,
            id: i = i[6],
            width: r,
            height: s
        },
        e.attr("data-video", o),
        this.thumbnail(t, this._videos[o])
    }
    ,
    r.prototype.thumbnail = function(e, n) {
        var i = n.width && n.height ? 'style="width:' + n.width + "px;height:" + n.height + 'px;"' : ""
          , r = e.find("img")
          , s = "src"
          , o = ""
          , a = this._core.settings
          , l = function(t) {
            e.after(a.lazyLoad ? '<div class="owl-video-tn ' + o + '" ' + s + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>'),
            e.after('<div class="owl-video-play-icon"></div>')
        };
        if (e.wrap('<div class="owl-video-wrapper"' + i + "></div>"),
        this._core.settings.lazyLoad && (s = "data-src",
        o = "owl-lazy"),
        r.length)
            return l(r.attr(s)),
            r.remove(),
            !1;
        "youtube" === n.type ? l("//img.youtube.com/vi/" + n.id + "/hqdefault.jpg") : "vimeo" === n.type ? t.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                l(t[0].thumbnail_large)
            }
        }) : "vzaar" === n.type && t.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + n.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(t) {
                l(t.framegrab_url)
            }
        })
    }
    ,
    r.prototype.stop = function() {
        this._core.trigger("stop", null, "video"),
        this._playing.find(".owl-video-frame").remove(),
        this._playing.removeClass("owl-video-playing"),
        this._playing = null,
        this._core.leave("playing"),
        this._core.trigger("stopped", null, "video")
    }
    ,
    r.prototype.play = function(e) {
        var n, i = t(e.target).closest("." + this._core.settings.itemClass), r = this._videos[i.attr("data-video")], s = r.width || "100%", o = r.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"),
        this._core.trigger("play", null, "video"),
        i = this._core.items(this._core.relative(i.index())),
        this._core.reset(i.index()),
        "youtube" === r.type ? n = '<iframe width="' + s + '" height="' + o + '" src="//www.youtube.com/embed/' + r.id + "?autoplay=1&rel=0&v=" + r.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === r.type ? n = '<iframe src="//player.vimeo.com/video/' + r.id + '?autoplay=1" width="' + s + '" height="' + o + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === r.type && (n = '<iframe frameborder="0"height="' + o + '"width="' + s + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + r.id + '/player?autoplay=true"></iframe>'),
        t('<div class="owl-video-frame">' + n + "</div>").insertAfter(i.find(".owl-video")),
        this._playing = i.addClass("owl-video-playing"))
    }
    ,
    r.prototype.isInFullScreen = function() {
        var e = n.fullscreenElement || n.mozFullScreenElement || n.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame")
    }
    ,
    r.prototype.destroy = function() {
        var t, e;
        for (t in this._core.$element.off("click.owl.video"),
        this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    t.fn.owlCarousel.Constructor.Plugins.Video = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var r = function(e) {
        this.core = e,
        this.core.options = t.extend({}, r.Defaults, this.core.options),
        this.swapping = !0,
        this.previous = i,
        this.next = i,
        this.handlers = {
            "change.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && (this.previous = this.core.current(),
                this.next = t.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) {
                t.namespace && (this.swapping = "translated" == t.type)
            }, this),
            "translate.owl.carousel": t.proxy(function(t) {
                t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        },
        this.core.$element.on(this.handlers)
    };
    r.Defaults = {
        animateOut: !1,
        animateIn: !1
    },
    r.prototype.swap = function() {
        if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
            this.core.speed(0);
            var e, n = t.proxy(this.clear, this), i = this.core.$stage.children().eq(this.previous), r = this.core.$stage.children().eq(this.next), s = this.core.settings.animateIn, o = this.core.settings.animateOut;
            this.core.current() !== this.previous && (o && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
            i.one(t.support.animation.end, n).css({
                left: e + "px"
            }).addClass("animated owl-animated-out").addClass(o)),
            s && r.one(t.support.animation.end, n).addClass("animated owl-animated-in").addClass(s))
        }
    }
    ,
    r.prototype.clear = function(e) {
        t(e.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
        this.core.onTransitionEnd()
    }
    ,
    r.prototype.destroy = function() {
        var t, e;
        for (t in this.handlers)
            this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    t.fn.owlCarousel.Constructor.Plugins.Animate = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    var r = function(e) {
        this._core = e,
        this._call = null,
        this._time = 0,
        this._timeout = 0,
        this._paused = !0,
        this._handlers = {
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._paused && (this._time = 0)
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": t.proxy(function(t, e, n) {
                t.namespace && this.play(e, n)
            }, this),
            "stop.owl.autoplay": t.proxy(function(t) {
                t.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": t.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        },
        this._core.$element.on(this._handlers),
        this._core.options = t.extend({}, r.Defaults, this._core.options)
    };
    r.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    },
    r.prototype._next = function(i) {
        this._call = e.setTimeout(t.proxy(this._next, this, i), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()),
        this._core.is("interacting") || n.hidden || this._core.next(i || this._core.settings.autoplaySpeed)
    }
    ,
    r.prototype.read = function() {
        return (new Date).getTime() - this._time
    }
    ,
    r.prototype.play = function(n, i) {
        var r;
        this._core.is("rotating") || this._core.enter("rotating"),
        n = n || this._core.settings.autoplayTimeout,
        r = Math.min(this._time % (this._timeout || n), n),
        this._paused ? (this._time = this.read(),
        this._paused = !1) : e.clearTimeout(this._call),
        this._time += this.read() % n - r,
        this._timeout = n,
        this._call = e.setTimeout(t.proxy(this._next, this, i), n - r)
    }
    ,
    r.prototype.stop = function() {
        this._core.is("rotating") && (this._time = 0,
        this._paused = !0,
        e.clearTimeout(this._call),
        this._core.leave("rotating"))
    }
    ,
    r.prototype.pause = function() {
        this._core.is("rotating") && !this._paused && (this._time = this.read(),
        this._paused = !0,
        e.clearTimeout(this._call))
    }
    ,
    r.prototype.destroy = function() {
        var t, e;
        for (t in this.stop(),
        this._handlers)
            this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
            "function" != typeof this[e] && (this[e] = null)
    }
    ,
    t.fn.owlCarousel.Constructor.Plugins.autoplay = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    "use strict";
    var r = function(e) {
        this._core = e,
        this._initialized = !1,
        this._pages = [],
        this._controls = {},
        this._templates = [],
        this.$element = this._core.$element,
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        },
        this._handlers = {
            "prepared.owl.carousel": t.proxy(function(e) {
                e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this),
            "added.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": t.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1)
            }, this),
            "changed.owl.carousel": t.proxy(function(t) {
                t.namespace && "position" == t.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": t.proxy(function(t) {
                t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                this.initialize(),
                this.update(),
                this.draw(),
                this._initialized = !0,
                this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": t.proxy(function(t) {
                t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                this.update(),
                this.draw(),
                this._core.trigger("refreshed", null, "navigation"))
            }, this)
        },
        this._core.options = t.extend({}, r.Defaults, this._core.options),
        this.$element.on(this._handlers)
    };
    r.Defaults = {
        nav: !1,
        navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button type="button" role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    },
    r.prototype.initialize = function() {
        var e, n = this._core.settings;
        for (e in this._controls.$relative = (n.navContainer ? t(n.navContainer) : t("<div>").addClass(n.navContainerClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$previous = t("<" + n.navElement + ">").addClass(n.navClass[0]).html(n.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) {
            this.prev(n.navSpeed)
        }, this)),
        this._controls.$next = t("<" + n.navElement + ">").addClass(n.navClass[1]).html(n.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) {
            this.next(n.navSpeed)
        }, this)),
        n.dotsData || (this._templates = [t('<button role="button">').addClass(n.dotClass).append(t("<span>")).prop("outerHTML")]),
        this._controls.$absolute = (n.dotsContainer ? t(n.dotsContainer) : t("<div>").addClass(n.dotsClass).appendTo(this.$element)).addClass("disabled"),
        this._controls.$absolute.on("click", "button", t.proxy(function(e) {
            var i = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
            e.preventDefault(),
            this.to(i, n.dotsSpeed)
        }, this)),
        this._overrides)
            this._core[e] = t.proxy(this[e], this)
    }
    ,
    r.prototype.destroy = function() {
        var t, e, n, i, r;
        for (t in r = this._core.settings,
        this._handlers)
            this.$element.off(t, this._handlers[t]);
        for (e in this._controls)
            "$relative" === e && r.navContainer ? this._controls[e].html("") : this._controls[e].remove();
        for (i in this.overides)
            this._core[i] = this._overrides[i];
        for (n in Object.getOwnPropertyNames(this))
            "function" != typeof this[n] && (this[n] = null)
    }
    ,
    r.prototype.update = function() {
        var t, e, n = this._core.clones().length / 2, i = n + this._core.items().length, r = this._core.maximum(!0), s = this._core.settings, o = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
        if ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)),
        s.dots || "page" == s.slideBy)
            for (this._pages = [],
            t = n,
            e = 0; t < i; t++) {
                if (e >= o || 0 === e) {
                    if (this._pages.push({
                        start: Math.min(r, t - n),
                        end: t - n + o - 1
                    }),
                    Math.min(r, t - n) === r)
                        break;
                    e = 0
                }
                e += this._core.mergers(this._core.relative(t))
            }
    }
    ,
    r.prototype.draw = function() {
        var e, n = this._core.settings, i = this._core.items().length <= n.items, r = this._core.relative(this._core.current()), s = n.loop || n.rewind;
        this._controls.$relative.toggleClass("disabled", !n.nav || i),
        n.nav && (this._controls.$previous.toggleClass("disabled", !s && r <= this._core.minimum(!0)),
        this._controls.$next.toggleClass("disabled", !s && r >= this._core.maximum(!0))),
        this._controls.$absolute.toggleClass("disabled", !n.dots || i),
        n.dots && (e = this._pages.length - this._controls.$absolute.children().length,
        n.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(),
        this._controls.$absolute.find(".active").removeClass("active"),
        this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
    }
    ,
    r.prototype.onTrigger = function(e) {
        var n = this._core.settings;
        e.page = {
            index: t.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: n && (n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items)
        }
    }
    ,
    r.prototype.current = function() {
        var e = this._core.relative(this._core.current());
        return t.grep(this._pages, t.proxy(function(t, n) {
            return t.start <= e && t.end >= e
        }, this)).pop()
    }
    ,
    r.prototype.getPosition = function(e) {
        var n, i, r = this._core.settings;
        return "page" == r.slideBy ? (n = t.inArray(this.current(), this._pages),
        e ? ++n : --n,
        n = this._pages[(n % (i = this._pages.length) + i) % i].start) : (n = this._core.relative(this._core.current()),
        i = this._core.items().length,
        e ? n += r.slideBy : n -= r.slideBy),
        n
    }
    ,
    r.prototype.next = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e)
    }
    ,
    r.prototype.prev = function(e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e)
    }
    ,
    r.prototype.to = function(e, n, i) {
        var r;
        !i && this._pages.length ? (r = this._pages.length,
        t.proxy(this._overrides.to, this._core)(this._pages[(e % r + r) % r].start, n)) : t.proxy(this._overrides.to, this._core)(e, n)
    }
    ,
    t.fn.owlCarousel.Constructor.Plugins.Navigation = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    "use strict";
    var r = function(n) {
        this._core = n,
        this._hashes = {},
        this.$element = this._core.$element,
        this._handlers = {
            "initialized.owl.carousel": t.proxy(function(n) {
                n.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": t.proxy(function(e) {
                if (e.namespace) {
                    var n = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!n)
                        return;
                    this._hashes[n] = e.content
                }
            }, this),
            "changed.owl.carousel": t.proxy(function(n) {
                if (n.namespace && "position" === n.property.name) {
                    var i = this._core.items(this._core.relative(this._core.current()))
                      , r = t.map(this._hashes, function(t, e) {
                        return t === i ? e : null
                    }).join();
                    if (!r || e.location.hash.slice(1) === r)
                        return;
                    e.location.hash = r
                }
            }, this)
        },
        this._core.options = t.extend({}, r.Defaults, this._core.options),
        this.$element.on(this._handlers),
        t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
            var n = e.location.hash.substring(1)
              , i = this._core.$stage.children()
              , r = this._hashes[n] && i.index(this._hashes[n]);
            void 0 !== r && r !== this._core.current() && this._core.to(this._core.relative(r), !1, !0)
        }, this))
    };
    r.Defaults = {
        URLhashListener: !1
    },
    r.prototype.destroy = function() {
        var n, i;
        for (n in t(e).off("hashchange.owl.navigation"),
        this._handlers)
            this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this))
            "function" != typeof this[i] && (this[i] = null)
    }
    ,
    t.fn.owlCarousel.Constructor.Plugins.Hash = r
}(window.Zepto || window.jQuery, window, document),
function(t, e, n, i) {
    function r(e, n) {
        var i = !1
          , r = e.charAt(0).toUpperCase() + e.slice(1);
        return t.each((e + " " + a.join(r + " ") + r).split(" "), function(t, e) {
            if (void 0 !== o[e])
                return i = !n || e,
                !1
        }),
        i
    }
    function s(t) {
        return r(t, !0)
    }
    var o = t("<support>").get(0).style
      , a = "Webkit Moz O ms".split(" ")
      , l = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    };
    !!r("transition") && (t.support.transition = new String(s("transition")),
    t.support.transition.end = l.transition.end[t.support.transition]),
    !!r("animation") && (t.support.animation = new String(s("animation")),
    t.support.animation.end = l.animation.end[t.support.animation]),
    r("transform") && (t.support.transform = new String(s("transform")),
    t.support.transform3d = !!r("perspective"))
}(window.Zepto || window.jQuery, window, document),
function(t, e) {
    var n = "accordion"
      , i = {
        speed: 200,
        showDelay: 0,
        hideDelay: 0,
        singleOpen: !0,
        clickEffect: !0,
        indicator: "submenu-indicator-minus",
        subMenu: "submenu",
        event: "click"
    };
    function r(e, r) {
        this.element = e,
        this.settings = t.extend({}, i, r),
        this._defaults = i,
        this._name = n,
        this.init()
    }
    t.extend(r.prototype, {
        init: function() {
            this.openSubmenu(),
            this.submenuIndicators(),
            i.clickEffect && this.addClickEffect()
        },
        openSubmenu: function() {
            t(this.element).children("ul").find("li").bind(i.event, function(n) {
                n.stopPropagation(),
                n.preventDefault();
                var r = t(this).children("." + i.subMenu);
                if (n = t(this).find("." + i.subMenu),
                0 < r.length) {
                    if ("none" == r.css("display"))
                        return r.slideDown(i.speed).siblings("a").addClass(i.indicator),
                        i.singleOpen && t(this).siblings().find("." + i.subMenu).slideUp(i.speed).end().find("a").removeClass(i.indicator),
                        !1;
                    t(this).find("." + i.subMenu).delay(i.hideDelay).slideUp(i.speed),
                    n.siblings("a").hasClass(i.indicator) && n.siblings("a").removeClass(i.indicator)
                }
                e.location.href = t(this).children("a").attr("href")
            })
        },
        submenuIndicators: function() {
            0 < t(this.element).find("." + i.subMenu).length && t(this.element).find("." + i.subMenu).siblings("a").append("<span class='submenu-indicator'><img src='https://uat-cdn.drlallab.com/2022-12/mbl-arrow1.png'></span>")
        },
        addClickEffect: function() {
            var e, n, i;
            t(this.element).find("a").bind("click", function(r) {
                t(".ink").remove(),
                0 === t(this).children(".ink").length && t(this).prepend("<span class='ink'></span>"),
                (e = t(this).find(".ink")).removeClass("animate-ink"),
                e.height() || e.width() || (i = Math.max(t(this).outerWidth(), t(this).outerHeight()),
                e.css({
                    height: i,
                    width: i
                })),
                n = r.pageX - t(this).offset().left - e.width() / 2,
                i = r.pageY - t(this).offset().top - e.height() / 2,
                e.css({
                    top: i + "px",
                    left: n + "px"
                }).addClass("animate-ink")
            })
        }
    }),
    t.fn[n] = function(e) {
        return this.each(function() {
            t.data(this, "plugin_" + n) || t.data(this, "plugin_" + n, new r(this,e))
        }),
        this
    }
}(jQuery, window, document);
