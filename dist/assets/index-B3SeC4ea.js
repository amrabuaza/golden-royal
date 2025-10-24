(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) u(a);
  new MutationObserver((a) => {
    for (const f of a)
      if (f.type === "childList")
        for (const h of f.addedNodes)
          h.tagName === "LINK" && h.rel === "modulepreload" && u(h);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(a) {
    const f = {};
    return (
      a.integrity && (f.integrity = a.integrity),
      a.referrerPolicy && (f.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (f.credentials = "include")
        : a.crossOrigin === "anonymous"
        ? (f.credentials = "omit")
        : (f.credentials = "same-origin"),
      f
    );
  }
  function u(a) {
    if (a.ep) return;
    a.ep = !0;
    const f = o(a);
    fetch(a.href, f);
  }
})();
var Ul = { exports: {} },
  Er = {},
  Vl = { exports: {} },
  X = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Gu;
function Tf() {
  if (Gu) return X;
  Gu = 1;
  var c = Symbol.for("react.element"),
    s = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    u = Symbol.for("react.strict_mode"),
    a = Symbol.for("react.profiler"),
    f = Symbol.for("react.provider"),
    h = Symbol.for("react.context"),
    m = Symbol.for("react.forward_ref"),
    x = Symbol.for("react.suspense"),
    k = Symbol.for("react.memo"),
    C = Symbol.for("react.lazy"),
    E = Symbol.iterator;
  function z(w) {
    return w === null || typeof w != "object"
      ? null
      : ((w = (E && w[E]) || w["@@iterator"]),
        typeof w == "function" ? w : null);
  }
  var I = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    T = Object.assign,
    V = {};
  function K(w, L, Z) {
    (this.props = w),
      (this.context = L),
      (this.refs = V),
      (this.updater = Z || I);
  }
  (K.prototype.isReactComponent = {}),
    (K.prototype.setState = function (w, L) {
      if (typeof w != "object" && typeof w != "function" && w != null)
        throw Error(
          "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, w, L, "setState");
    }),
    (K.prototype.forceUpdate = function (w) {
      this.updater.enqueueForceUpdate(this, w, "forceUpdate");
    });
  function ve() {}
  ve.prototype = K.prototype;
  function oe(w, L, Z) {
    (this.props = w),
      (this.context = L),
      (this.refs = V),
      (this.updater = Z || I);
  }
  var de = (oe.prototype = new ve());
  (de.constructor = oe), T(de, K.prototype), (de.isPureReactComponent = !0);
  var ee = Array.isArray,
    ye = Object.prototype.hasOwnProperty,
    Se = { current: null },
    ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(w, L, Z) {
    var G,
      q = {},
      se = null,
      fe = null;
    if (L != null)
      for (G in (L.ref !== void 0 && (fe = L.ref),
      L.key !== void 0 && (se = "" + L.key),
      L))
        ye.call(L, G) && !ce.hasOwnProperty(G) && (q[G] = L[G]);
    var ae = arguments.length - 2;
    if (ae === 1) q.children = Z;
    else if (1 < ae) {
      for (var we = Array(ae), et = 0; et < ae; et++)
        we[et] = arguments[et + 2];
      q.children = we;
    }
    if (w && w.defaultProps)
      for (G in ((ae = w.defaultProps), ae)) q[G] === void 0 && (q[G] = ae[G]);
    return {
      $$typeof: c,
      type: w,
      key: se,
      ref: fe,
      props: q,
      _owner: Se.current,
    };
  }
  function re(w, L) {
    return {
      $$typeof: c,
      type: w.type,
      key: L,
      ref: w.ref,
      props: w.props,
      _owner: w._owner,
    };
  }
  function J(w) {
    return typeof w == "object" && w !== null && w.$$typeof === c;
  }
  function Re(w) {
    var L = { "=": "=0", ":": "=2" };
    return (
      "$" +
      w.replace(/[=:]/g, function (Z) {
        return L[Z];
      })
    );
  }
  var st = /\/+/g;
  function xe(w, L) {
    return typeof w == "object" && w !== null && w.key != null
      ? Re("" + w.key)
      : L.toString(36);
  }
  function Ne(w, L, Z, G, q) {
    var se = typeof w;
    (se === "undefined" || se === "boolean") && (w = null);
    var fe = !1;
    if (w === null) fe = !0;
    else
      switch (se) {
        case "string":
        case "number":
          fe = !0;
          break;
        case "object":
          switch (w.$$typeof) {
            case c:
            case s:
              fe = !0;
          }
      }
    if (fe)
      return (
        (fe = w),
        (q = q(fe)),
        (w = G === "" ? "." + xe(fe, 0) : G),
        ee(q)
          ? ((Z = ""),
            w != null && (Z = w.replace(st, "$&/") + "/"),
            Ne(q, L, Z, "", function (et) {
              return et;
            }))
          : q != null &&
            (J(q) &&
              (q = re(
                q,
                Z +
                  (!q.key || (fe && fe.key === q.key)
                    ? ""
                    : ("" + q.key).replace(st, "$&/") + "/") +
                  w
              )),
            L.push(q)),
        1
      );
    if (((fe = 0), (G = G === "" ? "." : G + ":"), ee(w)))
      for (var ae = 0; ae < w.length; ae++) {
        se = w[ae];
        var we = G + xe(se, ae);
        fe += Ne(se, L, Z, we, q);
      }
    else if (((we = z(w)), typeof we == "function"))
      for (w = we.call(w), ae = 0; !(se = w.next()).done; )
        (se = se.value), (we = G + xe(se, ae++)), (fe += Ne(se, L, Z, we, q));
    else if (se === "object")
      throw (
        ((L = String(w)),
        Error(
          "Objects are not valid as a React child (found: " +
            (L === "[object Object]"
              ? "object with keys {" + Object.keys(w).join(", ") + "}"
              : L) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return fe;
  }
  function qe(w, L, Z) {
    if (w == null) return w;
    var G = [],
      q = 0;
    return (
      Ne(w, G, "", "", function (se) {
        return L.call(Z, se, q++);
      }),
      G
    );
  }
  function he(w) {
    if (w._status === -1) {
      var L = w._result;
      (L = L()),
        L.then(
          function (Z) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 1), (w._result = Z));
          },
          function (Z) {
            (w._status === 0 || w._status === -1) &&
              ((w._status = 2), (w._result = Z));
          }
        ),
        w._status === -1 && ((w._status = 0), (w._result = L));
    }
    if (w._status === 1) return w._result.default;
    throw w._result;
  }
  var ie = { current: null },
    F = { transition: null },
    B = {
      ReactCurrentDispatcher: ie,
      ReactCurrentBatchConfig: F,
      ReactCurrentOwner: Se,
    };
  function M() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return (
    (X.Children = {
      map: qe,
      forEach: function (w, L, Z) {
        qe(
          w,
          function () {
            L.apply(this, arguments);
          },
          Z
        );
      },
      count: function (w) {
        var L = 0;
        return (
          qe(w, function () {
            L++;
          }),
          L
        );
      },
      toArray: function (w) {
        return (
          qe(w, function (L) {
            return L;
          }) || []
        );
      },
      only: function (w) {
        if (!J(w))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return w;
      },
    }),
    (X.Component = K),
    (X.Fragment = o),
    (X.Profiler = a),
    (X.PureComponent = oe),
    (X.StrictMode = u),
    (X.Suspense = x),
    (X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = B),
    (X.act = M),
    (X.cloneElement = function (w, L, Z) {
      if (w == null)
        throw Error(
          "React.cloneElement(...): The argument must be a React element, but you passed " +
            w +
            "."
        );
      var G = T({}, w.props),
        q = w.key,
        se = w.ref,
        fe = w._owner;
      if (L != null) {
        if (
          (L.ref !== void 0 && ((se = L.ref), (fe = Se.current)),
          L.key !== void 0 && (q = "" + L.key),
          w.type && w.type.defaultProps)
        )
          var ae = w.type.defaultProps;
        for (we in L)
          ye.call(L, we) &&
            !ce.hasOwnProperty(we) &&
            (G[we] = L[we] === void 0 && ae !== void 0 ? ae[we] : L[we]);
      }
      var we = arguments.length - 2;
      if (we === 1) G.children = Z;
      else if (1 < we) {
        ae = Array(we);
        for (var et = 0; et < we; et++) ae[et] = arguments[et + 2];
        G.children = ae;
      }
      return {
        $$typeof: c,
        type: w.type,
        key: q,
        ref: se,
        props: G,
        _owner: fe,
      };
    }),
    (X.createContext = function (w) {
      return (
        (w = {
          $$typeof: h,
          _currentValue: w,
          _currentValue2: w,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null,
        }),
        (w.Provider = { $$typeof: f, _context: w }),
        (w.Consumer = w)
      );
    }),
    (X.createElement = te),
    (X.createFactory = function (w) {
      var L = te.bind(null, w);
      return (L.type = w), L;
    }),
    (X.createRef = function () {
      return { current: null };
    }),
    (X.forwardRef = function (w) {
      return { $$typeof: m, render: w };
    }),
    (X.isValidElement = J),
    (X.lazy = function (w) {
      return { $$typeof: C, _payload: { _status: -1, _result: w }, _init: he };
    }),
    (X.memo = function (w, L) {
      return { $$typeof: k, type: w, compare: L === void 0 ? null : L };
    }),
    (X.startTransition = function (w) {
      var L = F.transition;
      F.transition = {};
      try {
        w();
      } finally {
        F.transition = L;
      }
    }),
    (X.unstable_act = M),
    (X.useCallback = function (w, L) {
      return ie.current.useCallback(w, L);
    }),
    (X.useContext = function (w) {
      return ie.current.useContext(w);
    }),
    (X.useDebugValue = function () {}),
    (X.useDeferredValue = function (w) {
      return ie.current.useDeferredValue(w);
    }),
    (X.useEffect = function (w, L) {
      return ie.current.useEffect(w, L);
    }),
    (X.useId = function () {
      return ie.current.useId();
    }),
    (X.useImperativeHandle = function (w, L, Z) {
      return ie.current.useImperativeHandle(w, L, Z);
    }),
    (X.useInsertionEffect = function (w, L) {
      return ie.current.useInsertionEffect(w, L);
    }),
    (X.useLayoutEffect = function (w, L) {
      return ie.current.useLayoutEffect(w, L);
    }),
    (X.useMemo = function (w, L) {
      return ie.current.useMemo(w, L);
    }),
    (X.useReducer = function (w, L, Z) {
      return ie.current.useReducer(w, L, Z);
    }),
    (X.useRef = function (w) {
      return ie.current.useRef(w);
    }),
    (X.useState = function (w) {
      return ie.current.useState(w);
    }),
    (X.useSyncExternalStore = function (w, L, Z) {
      return ie.current.useSyncExternalStore(w, L, Z);
    }),
    (X.useTransition = function () {
      return ie.current.useTransition();
    }),
    (X.version = "18.3.1"),
    X
  );
}
var Xu;
function ql() {
  return Xu || ((Xu = 1), (Vl.exports = Tf())), Vl.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ju;
function Ff() {
  if (Ju) return Er;
  Ju = 1;
  var c = ql(),
    s = Symbol.for("react.element"),
    o = Symbol.for("react.fragment"),
    u = Object.prototype.hasOwnProperty,
    a = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(m, x, k) {
    var C,
      E = {},
      z = null,
      I = null;
    k !== void 0 && (z = "" + k),
      x.key !== void 0 && (z = "" + x.key),
      x.ref !== void 0 && (I = x.ref);
    for (C in x) u.call(x, C) && !f.hasOwnProperty(C) && (E[C] = x[C]);
    if (m && m.defaultProps)
      for (C in ((x = m.defaultProps), x)) E[C] === void 0 && (E[C] = x[C]);
    return {
      $$typeof: s,
      type: m,
      key: z,
      ref: I,
      props: E,
      _owner: a.current,
    };
  }
  return (Er.Fragment = o), (Er.jsx = h), (Er.jsxs = h), Er;
}
var qu;
function zf() {
  return qu || ((qu = 1), (Ul.exports = Ff())), Ul.exports;
}
var g = zf(),
  De = ql(),
  Vi = {},
  Bl = { exports: {} },
  Je = {},
  Hl = { exports: {} },
  Wl = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ec;
function If() {
  return (
    ec ||
      ((ec = 1),
      (function (c) {
        function s(F, B) {
          var M = F.length;
          F.push(B);
          e: for (; 0 < M; ) {
            var w = (M - 1) >>> 1,
              L = F[w];
            if (0 < a(L, B)) (F[w] = B), (F[M] = L), (M = w);
            else break e;
          }
        }
        function o(F) {
          return F.length === 0 ? null : F[0];
        }
        function u(F) {
          if (F.length === 0) return null;
          var B = F[0],
            M = F.pop();
          if (M !== B) {
            F[0] = M;
            e: for (var w = 0, L = F.length, Z = L >>> 1; w < Z; ) {
              var G = 2 * (w + 1) - 1,
                q = F[G],
                se = G + 1,
                fe = F[se];
              if (0 > a(q, M))
                se < L && 0 > a(fe, q)
                  ? ((F[w] = fe), (F[se] = M), (w = se))
                  : ((F[w] = q), (F[G] = M), (w = G));
              else if (se < L && 0 > a(fe, M))
                (F[w] = fe), (F[se] = M), (w = se);
              else break e;
            }
          }
          return B;
        }
        function a(F, B) {
          var M = F.sortIndex - B.sortIndex;
          return M !== 0 ? M : F.id - B.id;
        }
        if (
          typeof performance == "object" &&
          typeof performance.now == "function"
        ) {
          var f = performance;
          c.unstable_now = function () {
            return f.now();
          };
        } else {
          var h = Date,
            m = h.now();
          c.unstable_now = function () {
            return h.now() - m;
          };
        }
        var x = [],
          k = [],
          C = 1,
          E = null,
          z = 3,
          I = !1,
          T = !1,
          V = !1,
          K = typeof setTimeout == "function" ? setTimeout : null,
          ve = typeof clearTimeout == "function" ? clearTimeout : null,
          oe = typeof setImmediate < "u" ? setImmediate : null;
        typeof navigator < "u" &&
          navigator.scheduling !== void 0 &&
          navigator.scheduling.isInputPending !== void 0 &&
          navigator.scheduling.isInputPending.bind(navigator.scheduling);
        function de(F) {
          for (var B = o(k); B !== null; ) {
            if (B.callback === null) u(k);
            else if (B.startTime <= F)
              u(k), (B.sortIndex = B.expirationTime), s(x, B);
            else break;
            B = o(k);
          }
        }
        function ee(F) {
          if (((V = !1), de(F), !T))
            if (o(x) !== null) (T = !0), he(ye);
            else {
              var B = o(k);
              B !== null && ie(ee, B.startTime - F);
            }
        }
        function ye(F, B) {
          (T = !1), V && ((V = !1), ve(te), (te = -1)), (I = !0);
          var M = z;
          try {
            for (
              de(B), E = o(x);
              E !== null && (!(E.expirationTime > B) || (F && !Re()));

            ) {
              var w = E.callback;
              if (typeof w == "function") {
                (E.callback = null), (z = E.priorityLevel);
                var L = w(E.expirationTime <= B);
                (B = c.unstable_now()),
                  typeof L == "function"
                    ? (E.callback = L)
                    : E === o(x) && u(x),
                  de(B);
              } else u(x);
              E = o(x);
            }
            if (E !== null) var Z = !0;
            else {
              var G = o(k);
              G !== null && ie(ee, G.startTime - B), (Z = !1);
            }
            return Z;
          } finally {
            (E = null), (z = M), (I = !1);
          }
        }
        var Se = !1,
          ce = null,
          te = -1,
          re = 5,
          J = -1;
        function Re() {
          return !(c.unstable_now() - J < re);
        }
        function st() {
          if (ce !== null) {
            var F = c.unstable_now();
            J = F;
            var B = !0;
            try {
              B = ce(!0, F);
            } finally {
              B ? xe() : ((Se = !1), (ce = null));
            }
          } else Se = !1;
        }
        var xe;
        if (typeof oe == "function")
          xe = function () {
            oe(st);
          };
        else if (typeof MessageChannel < "u") {
          var Ne = new MessageChannel(),
            qe = Ne.port2;
          (Ne.port1.onmessage = st),
            (xe = function () {
              qe.postMessage(null);
            });
        } else
          xe = function () {
            K(st, 0);
          };
        function he(F) {
          (ce = F), Se || ((Se = !0), xe());
        }
        function ie(F, B) {
          te = K(function () {
            F(c.unstable_now());
          }, B);
        }
        (c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (F) {
            F.callback = null;
          }),
          (c.unstable_continueExecution = function () {
            T || I || ((T = !0), he(ye));
          }),
          (c.unstable_forceFrameRate = function (F) {
            0 > F || 125 < F
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (re = 0 < F ? Math.floor(1e3 / F) : 5);
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return z;
          }),
          (c.unstable_getFirstCallbackNode = function () {
            return o(x);
          }),
          (c.unstable_next = function (F) {
            switch (z) {
              case 1:
              case 2:
              case 3:
                var B = 3;
                break;
              default:
                B = z;
            }
            var M = z;
            z = B;
            try {
              return F();
            } finally {
              z = M;
            }
          }),
          (c.unstable_pauseExecution = function () {}),
          (c.unstable_requestPaint = function () {}),
          (c.unstable_runWithPriority = function (F, B) {
            switch (F) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                F = 3;
            }
            var M = z;
            z = F;
            try {
              return B();
            } finally {
              z = M;
            }
          }),
          (c.unstable_scheduleCallback = function (F, B, M) {
            var w = c.unstable_now();
            switch (
              (typeof M == "object" && M !== null
                ? ((M = M.delay),
                  (M = typeof M == "number" && 0 < M ? w + M : w))
                : (M = w),
              F)
            ) {
              case 1:
                var L = -1;
                break;
              case 2:
                L = 250;
                break;
              case 5:
                L = 1073741823;
                break;
              case 4:
                L = 1e4;
                break;
              default:
                L = 5e3;
            }
            return (
              (L = M + L),
              (F = {
                id: C++,
                callback: B,
                priorityLevel: F,
                startTime: M,
                expirationTime: L,
                sortIndex: -1,
              }),
              M > w
                ? ((F.sortIndex = M),
                  s(k, F),
                  o(x) === null &&
                    F === o(k) &&
                    (V ? (ve(te), (te = -1)) : (V = !0), ie(ee, M - w)))
                : ((F.sortIndex = L), s(x, F), T || I || ((T = !0), he(ye))),
              F
            );
          }),
          (c.unstable_shouldYield = Re),
          (c.unstable_wrapCallback = function (F) {
            var B = z;
            return function () {
              var M = z;
              z = B;
              try {
                return F.apply(this, arguments);
              } finally {
                z = M;
              }
            };
          });
      })(Wl)),
    Wl
  );
}
var tc;
function Df() {
  return tc || ((tc = 1), (Hl.exports = If())), Hl.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var nc;
function Mf() {
  if (nc) return Je;
  nc = 1;
  var c = ql(),
    s = Df();
  function o(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var u = new Set(),
    a = {};
  function f(e, t) {
    h(e, t), h(e + "Capture", t);
  }
  function h(e, t) {
    for (a[e] = t, e = 0; e < t.length; e++) u.add(t[e]);
  }
  var m = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    x = Object.prototype.hasOwnProperty,
    k = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    C = {},
    E = {};
  function z(e) {
    return x.call(E, e)
      ? !0
      : x.call(C, e)
      ? !1
      : k.test(e)
      ? (E[e] = !0)
      : ((C[e] = !0), !1);
  }
  function I(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function T(e, t, n, r) {
    if (t === null || typeof t > "u" || I(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function V(e, t, n, r, i, l, d) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = i),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = l),
      (this.removeEmptyString = d);
  }
  var K = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      K[e] = new V(e, 0, !1, e, null, !1, !1);
    }),
    [
      ["acceptCharset", "accept-charset"],
      ["className", "class"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
    ].forEach(function (e) {
      var t = e[0];
      K[t] = new V(t, 1, !1, e[1], null, !1, !1);
    }),
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (
      e
    ) {
      K[e] = new V(e, 2, !1, e.toLowerCase(), null, !1, !1);
    }),
    [
      "autoReverse",
      "externalResourcesRequired",
      "focusable",
      "preserveAlpha",
    ].forEach(function (e) {
      K[e] = new V(e, 2, !1, e, null, !1, !1);
    }),
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
      .split(" ")
      .forEach(function (e) {
        K[e] = new V(e, 3, !1, e.toLowerCase(), null, !1, !1);
      }),
    ["checked", "multiple", "muted", "selected"].forEach(function (e) {
      K[e] = new V(e, 3, !0, e, null, !1, !1);
    }),
    ["capture", "download"].forEach(function (e) {
      K[e] = new V(e, 4, !1, e, null, !1, !1);
    }),
    ["cols", "rows", "size", "span"].forEach(function (e) {
      K[e] = new V(e, 6, !1, e, null, !1, !1);
    }),
    ["rowSpan", "start"].forEach(function (e) {
      K[e] = new V(e, 5, !1, e.toLowerCase(), null, !1, !1);
    });
  var ve = /[\-:]([a-z])/g;
  function oe(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(ve, oe);
      K[t] = new V(t, 1, !1, e, null, !1, !1);
    }),
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
      .split(" ")
      .forEach(function (e) {
        var t = e.replace(ve, oe);
        K[t] = new V(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
      }),
    ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
      var t = e.replace(ve, oe);
      K[t] = new V(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
    }),
    ["tabIndex", "crossOrigin"].forEach(function (e) {
      K[e] = new V(e, 1, !1, e.toLowerCase(), null, !1, !1);
    }),
    (K.xlinkHref = new V(
      "xlinkHref",
      1,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    )),
    ["src", "href", "action", "formAction"].forEach(function (e) {
      K[e] = new V(e, 1, !1, e.toLowerCase(), null, !0, !0);
    });
  function de(e, t, n, r) {
    var i = K.hasOwnProperty(t) ? K[t] : null;
    (i !== null
      ? i.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (T(t, n, i, r) && (n = null),
      r || i === null
        ? z(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var ee = c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ye = Symbol.for("react.element"),
    Se = Symbol.for("react.portal"),
    ce = Symbol.for("react.fragment"),
    te = Symbol.for("react.strict_mode"),
    re = Symbol.for("react.profiler"),
    J = Symbol.for("react.provider"),
    Re = Symbol.for("react.context"),
    st = Symbol.for("react.forward_ref"),
    xe = Symbol.for("react.suspense"),
    Ne = Symbol.for("react.suspense_list"),
    qe = Symbol.for("react.memo"),
    he = Symbol.for("react.lazy"),
    ie = Symbol.for("react.offscreen"),
    F = Symbol.iterator;
  function B(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (F && e[F]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var M = Object.assign,
    w;
  function L(e) {
    if (w === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        w = (t && t[1]) || "";
      }
    return (
      `
` +
      w +
      e
    );
  }
  var Z = !1;
  function G(e, t) {
    if (!e || Z) return "";
    Z = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (j) {
            var r = j;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (j) {
            r = j;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (j) {
          r = j;
        }
        e();
      }
    } catch (j) {
      if (j && r && typeof j.stack == "string") {
        for (
          var i = j.stack.split(`
`),
            l = r.stack.split(`
`),
            d = i.length - 1,
            p = l.length - 1;
          1 <= d && 0 <= p && i[d] !== l[p];

        )
          p--;
        for (; 1 <= d && 0 <= p; d--, p--)
          if (i[d] !== l[p]) {
            if (d !== 1 || p !== 1)
              do
                if ((d--, p--, 0 > p || i[d] !== l[p])) {
                  var v =
                    `
` + i[d].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      v.includes("<anonymous>") &&
                      (v = v.replace("<anonymous>", e.displayName)),
                    v
                  );
                }
              while (1 <= d && 0 <= p);
            break;
          }
      }
    } finally {
      (Z = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? L(e) : "";
  }
  function q(e) {
    switch (e.tag) {
      case 5:
        return L(e.type);
      case 16:
        return L("Lazy");
      case 13:
        return L("Suspense");
      case 19:
        return L("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = G(e.type, !1)), e;
      case 11:
        return (e = G(e.type.render, !1)), e;
      case 1:
        return (e = G(e.type, !0)), e;
      default:
        return "";
    }
  }
  function se(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ce:
        return "Fragment";
      case Se:
        return "Portal";
      case re:
        return "Profiler";
      case te:
        return "StrictMode";
      case xe:
        return "Suspense";
      case Ne:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Re:
          return (e.displayName || "Context") + ".Consumer";
        case J:
          return (e._context.displayName || "Context") + ".Provider";
        case st:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case qe:
          return (
            (t = e.displayName || null), t !== null ? t : se(e.type) || "Memo"
          );
        case he:
          (t = e._payload), (e = e._init);
          try {
            return se(e(t));
          } catch {}
      }
    return null;
  }
  function fe(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return se(t);
      case 8:
        return t === te ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function ae(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function we(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function et(e) {
    var t = we(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var i = n.get,
        l = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return i.call(this);
          },
          set: function (d) {
            (r = "" + d), l.call(this, d);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (d) {
            r = "" + d;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function Tr(e) {
    e._valueTracker || (e._valueTracker = et(e));
  }
  function to(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = we(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Fr(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Yi(e, t) {
    var n = t.checked;
    return M({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function no(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = ae(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function ro(e, t) {
    (t = t.checked), t != null && de(e, "checked", t, !1);
  }
  function Zi(e, t) {
    ro(e, t);
    var n = ae(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Gi(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Gi(e, t.type, ae(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function io(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Gi(e, t, n) {
    (t !== "number" || Fr(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Un = Array.isArray;
  function pn(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
      for (n = 0; n < e.length; n++)
        (i = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== i && (e[n].selected = i),
          i && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ae(n), t = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
          (e[i].selected = !0), r && (e[i].defaultSelected = !0);
          return;
        }
        t !== null || e[i].disabled || (t = e[i]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Xi(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
    return M({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function so(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(o(92));
        if (Un(n)) {
          if (1 < n.length) throw Error(o(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: ae(n) };
  }
  function lo(e, t) {
    var n = ae(t.value),
      r = ae(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function oo(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function ao(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ji(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? ao(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var zr,
    uo = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, i) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, i);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          zr = zr || document.createElement("div"),
            zr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = zr.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Vn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Bn = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0,
    },
    Ic = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Bn).forEach(function (e) {
    Ic.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Bn[t] = Bn[e]);
    });
  });
  function co(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (Bn.hasOwnProperty(e) && Bn[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function fo(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          i = co(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
      }
  }
  var Dc = M(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function qi(e, t) {
    if (t) {
      if (Dc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(o(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(o(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(o(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(o(62));
    }
  }
  function es(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var ts = null;
  function ns(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var rs = null,
    hn = null,
    gn = null;
  function po(e) {
    if ((e = dr(e))) {
      if (typeof rs != "function") throw Error(o(280));
      var t = e.stateNode;
      t && ((t = ri(t)), rs(e.stateNode, e.type, t));
    }
  }
  function ho(e) {
    hn ? (gn ? gn.push(e) : (gn = [e])) : (hn = e);
  }
  function go() {
    if (hn) {
      var e = hn,
        t = gn;
      if (((gn = hn = null), po(e), t)) for (e = 0; e < t.length; e++) po(t[e]);
    }
  }
  function mo(e, t) {
    return e(t);
  }
  function vo() {}
  var is = !1;
  function yo(e, t, n) {
    if (is) return e(t, n);
    is = !0;
    try {
      return mo(e, t, n);
    } finally {
      (is = !1), (hn !== null || gn !== null) && (vo(), go());
    }
  }
  function Hn(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ri(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(o(231, t, typeof n));
    return n;
  }
  var ss = !1;
  if (m)
    try {
      var Wn = {};
      Object.defineProperty(Wn, "passive", {
        get: function () {
          ss = !0;
        },
      }),
        window.addEventListener("test", Wn, Wn),
        window.removeEventListener("test", Wn, Wn);
    } catch {
      ss = !1;
    }
  function Mc(e, t, n, r, i, l, d, p, v) {
    var j = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, j);
    } catch (O) {
      this.onError(O);
    }
  }
  var Kn = !1,
    Ir = null,
    Dr = !1,
    ls = null,
    bc = {
      onError: function (e) {
        (Kn = !0), (Ir = e);
      },
    };
  function $c(e, t, n, r, i, l, d, p, v) {
    (Kn = !1), (Ir = null), Mc.apply(bc, arguments);
  }
  function Ac(e, t, n, r, i, l, d, p, v) {
    if (($c.apply(this, arguments), Kn)) {
      if (Kn) {
        var j = Ir;
        (Kn = !1), (Ir = null);
      } else throw Error(o(198));
      Dr || ((Dr = !0), (ls = j));
    }
  }
  function Jt(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function xo(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function wo(e) {
    if (Jt(e) !== e) throw Error(o(188));
  }
  function Uc(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = Jt(e)), t === null)) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var i = n.return;
      if (i === null) break;
      var l = i.alternate;
      if (l === null) {
        if (((r = i.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === l.child) {
        for (l = i.child; l; ) {
          if (l === n) return wo(i), e;
          if (l === r) return wo(i), t;
          l = l.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== r.return) (n = i), (r = l);
      else {
        for (var d = !1, p = i.child; p; ) {
          if (p === n) {
            (d = !0), (n = i), (r = l);
            break;
          }
          if (p === r) {
            (d = !0), (r = i), (n = l);
            break;
          }
          p = p.sibling;
        }
        if (!d) {
          for (p = l.child; p; ) {
            if (p === n) {
              (d = !0), (n = l), (r = i);
              break;
            }
            if (p === r) {
              (d = !0), (r = l), (n = i);
              break;
            }
            p = p.sibling;
          }
          if (!d) throw Error(o(189));
        }
      }
      if (n.alternate !== r) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
    return n.stateNode.current === n ? e : t;
  }
  function ko(e) {
    return (e = Uc(e)), e !== null ? So(e) : null;
  }
  function So(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = So(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var No = s.unstable_scheduleCallback,
    jo = s.unstable_cancelCallback,
    Vc = s.unstable_shouldYield,
    Bc = s.unstable_requestPaint,
    Le = s.unstable_now,
    Hc = s.unstable_getCurrentPriorityLevel,
    os = s.unstable_ImmediatePriority,
    Co = s.unstable_UserBlockingPriority,
    Mr = s.unstable_NormalPriority,
    Wc = s.unstable_LowPriority,
    Eo = s.unstable_IdlePriority,
    br = null,
    xt = null;
  function Kc(e) {
    if (xt && typeof xt.onCommitFiberRoot == "function")
      try {
        xt.onCommitFiberRoot(br, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var ft = Math.clz32 ? Math.clz32 : Zc,
    Qc = Math.log,
    Yc = Math.LN2;
  function Zc(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Qc(e) / Yc) | 0)) | 0;
  }
  var $r = 64,
    Ar = 4194304;
  function Qn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function Ur(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      i = e.suspendedLanes,
      l = e.pingedLanes,
      d = n & 268435455;
    if (d !== 0) {
      var p = d & ~i;
      p !== 0 ? (r = Qn(p)) : ((l &= d), l !== 0 && (r = Qn(l)));
    } else (d = n & ~i), d !== 0 ? (r = Qn(d)) : l !== 0 && (r = Qn(l));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      (t & i) === 0 &&
      ((i = r & -r), (l = t & -t), i >= l || (i === 16 && (l & 4194240) !== 0))
    )
      return t;
    if (((r & 4) !== 0 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - ft(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
    return r;
  }
  function Gc(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Xc(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        i = e.expirationTimes,
        l = e.pendingLanes;
      0 < l;

    ) {
      var d = 31 - ft(l),
        p = 1 << d,
        v = i[d];
      v === -1
        ? ((p & n) === 0 || (p & r) !== 0) && (i[d] = Gc(p, t))
        : v <= t && (e.expiredLanes |= p),
        (l &= ~p);
    }
  }
  function as(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function Lo() {
    var e = $r;
    return ($r <<= 1), ($r & 4194240) === 0 && ($r = 64), e;
  }
  function us(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Yn(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - ft(t)),
      (e[t] = n);
  }
  function Jc(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var i = 31 - ft(n),
        l = 1 << i;
      (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l);
    }
  }
  function cs(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - ft(n),
        i = 1 << r;
      (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
    }
  }
  var ue = 0;
  function Po(e) {
    return (
      (e &= -e),
      1 < e ? (4 < e ? ((e & 268435455) !== 0 ? 16 : 536870912) : 4) : 1
    );
  }
  var Oo,
    ds,
    Ro,
    _o,
    To,
    fs = !1,
    Vr = [],
    Ft = null,
    zt = null,
    It = null,
    Zn = new Map(),
    Gn = new Map(),
    Dt = [],
    qc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
  function Fo(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ft = null;
        break;
      case "dragenter":
      case "dragleave":
        zt = null;
        break;
      case "mouseover":
      case "mouseout":
        It = null;
        break;
      case "pointerover":
      case "pointerout":
        Zn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gn.delete(t.pointerId);
    }
  }
  function Xn(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: l,
          targetContainers: [i],
        }),
        t !== null && ((t = dr(t)), t !== null && ds(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        i !== null && t.indexOf(i) === -1 && t.push(i),
        e);
  }
  function ed(e, t, n, r, i) {
    switch (t) {
      case "focusin":
        return (Ft = Xn(Ft, e, t, n, r, i)), !0;
      case "dragenter":
        return (zt = Xn(zt, e, t, n, r, i)), !0;
      case "mouseover":
        return (It = Xn(It, e, t, n, r, i)), !0;
      case "pointerover":
        var l = i.pointerId;
        return Zn.set(l, Xn(Zn.get(l) || null, e, t, n, r, i)), !0;
      case "gotpointercapture":
        return (
          (l = i.pointerId), Gn.set(l, Xn(Gn.get(l) || null, e, t, n, r, i)), !0
        );
    }
    return !1;
  }
  function zo(e) {
    var t = qt(e.target);
    if (t !== null) {
      var n = Jt(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = xo(n)), t !== null)) {
            (e.blockedOn = t),
              To(e.priority, function () {
                Ro(n);
              });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Br(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = hs(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (ts = r), n.target.dispatchEvent(r), (ts = null);
      } else return (t = dr(n)), t !== null && ds(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Io(e, t, n) {
    Br(e) && n.delete(t);
  }
  function td() {
    (fs = !1),
      Ft !== null && Br(Ft) && (Ft = null),
      zt !== null && Br(zt) && (zt = null),
      It !== null && Br(It) && (It = null),
      Zn.forEach(Io),
      Gn.forEach(Io);
  }
  function Jn(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      fs ||
        ((fs = !0),
        s.unstable_scheduleCallback(s.unstable_NormalPriority, td)));
  }
  function qn(e) {
    function t(i) {
      return Jn(i, e);
    }
    if (0 < Vr.length) {
      Jn(Vr[0], e);
      for (var n = 1; n < Vr.length; n++) {
        var r = Vr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      Ft !== null && Jn(Ft, e),
        zt !== null && Jn(zt, e),
        It !== null && Jn(It, e),
        Zn.forEach(t),
        Gn.forEach(t),
        n = 0;
      n < Dt.length;
      n++
    )
      (r = Dt[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Dt.length && ((n = Dt[0]), n.blockedOn === null); )
      zo(n), n.blockedOn === null && Dt.shift();
  }
  var mn = ee.ReactCurrentBatchConfig,
    Hr = !0;
  function nd(e, t, n, r) {
    var i = ue,
      l = mn.transition;
    mn.transition = null;
    try {
      (ue = 1), ps(e, t, n, r);
    } finally {
      (ue = i), (mn.transition = l);
    }
  }
  function rd(e, t, n, r) {
    var i = ue,
      l = mn.transition;
    mn.transition = null;
    try {
      (ue = 4), ps(e, t, n, r);
    } finally {
      (ue = i), (mn.transition = l);
    }
  }
  function ps(e, t, n, r) {
    if (Hr) {
      var i = hs(e, t, n, r);
      if (i === null) _s(e, t, r, Wr, n), Fo(e, r);
      else if (ed(i, e, t, n, r)) r.stopPropagation();
      else if ((Fo(e, r), t & 4 && -1 < qc.indexOf(e))) {
        for (; i !== null; ) {
          var l = dr(i);
          if (
            (l !== null && Oo(l),
            (l = hs(e, t, n, r)),
            l === null && _s(e, t, r, Wr, n),
            l === i)
          )
            break;
          i = l;
        }
        i !== null && r.stopPropagation();
      } else _s(e, t, r, null, n);
    }
  }
  var Wr = null;
  function hs(e, t, n, r) {
    if (((Wr = null), (e = ns(r)), (e = qt(e)), e !== null))
      if (((t = Jt(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = xo(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Wr = e), null;
  }
  function Do(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Hc()) {
          case os:
            return 1;
          case Co:
            return 4;
          case Mr:
          case Wc:
            return 16;
          case Eo:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Mt = null,
    gs = null,
    Kr = null;
  function Mo() {
    if (Kr) return Kr;
    var e,
      t = gs,
      n = t.length,
      r,
      i = "value" in Mt ? Mt.value : Mt.textContent,
      l = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var d = n - e;
    for (r = 1; r <= d && t[n - r] === i[l - r]; r++);
    return (Kr = i.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Qr(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function Yr() {
    return !0;
  }
  function bo() {
    return !1;
  }
  function tt(e) {
    function t(n, r, i, l, d) {
      (this._reactName = n),
        (this._targetInst = i),
        (this.type = r),
        (this.nativeEvent = l),
        (this.target = d),
        (this.currentTarget = null);
      for (var p in e)
        e.hasOwnProperty(p) && ((n = e[p]), (this[p] = n ? n(l) : l[p]));
      return (
        (this.isDefaultPrevented = (
          l.defaultPrevented != null ? l.defaultPrevented : l.returnValue === !1
        )
          ? Yr
          : bo),
        (this.isPropagationStopped = bo),
        this
      );
    }
    return (
      M(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Yr));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Yr));
        },
        persist: function () {},
        isPersistent: Yr,
      }),
      t
    );
  }
  var vn = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ms = tt(vn),
    er = M({}, vn, { view: 0, detail: 0 }),
    id = tt(er),
    vs,
    ys,
    tr,
    Zr = M({}, er, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ws,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== tr &&
              (tr && e.type === "mousemove"
                ? ((vs = e.screenX - tr.screenX), (ys = e.screenY - tr.screenY))
                : (ys = vs = 0),
              (tr = e)),
            vs);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ys;
      },
    }),
    $o = tt(Zr),
    sd = M({}, Zr, { dataTransfer: 0 }),
    ld = tt(sd),
    od = M({}, er, { relatedTarget: 0 }),
    xs = tt(od),
    ad = M({}, vn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    ud = tt(ad),
    cd = M({}, vn, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    dd = tt(cd),
    fd = M({}, vn, { data: 0 }),
    Ao = tt(fd),
    pd = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    hd = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    gd = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function md(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = gd[e])
      ? !!t[e]
      : !1;
  }
  function ws() {
    return md;
  }
  var vd = M({}, er, {
      key: function (e) {
        if (e.key) {
          var t = pd[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Qr(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? hd[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ws,
      charCode: function (e) {
        return e.type === "keypress" ? Qr(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Qr(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    yd = tt(vd),
    xd = M({}, Zr, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Uo = tt(xd),
    wd = M({}, er, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ws,
    }),
    kd = tt(wd),
    Sd = M({}, vn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Nd = tt(Sd),
    jd = M({}, Zr, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Cd = tt(jd),
    Ed = [9, 13, 27, 32],
    ks = m && "CompositionEvent" in window,
    nr = null;
  m && "documentMode" in document && (nr = document.documentMode);
  var Ld = m && "TextEvent" in window && !nr,
    Vo = m && (!ks || (nr && 8 < nr && 11 >= nr)),
    Bo = " ",
    Ho = !1;
  function Wo(e, t) {
    switch (e) {
      case "keyup":
        return Ed.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ko(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var yn = !1;
  function Pd(e, t) {
    switch (e) {
      case "compositionend":
        return Ko(t);
      case "keypress":
        return t.which !== 32 ? null : ((Ho = !0), Bo);
      case "textInput":
        return (e = t.data), e === Bo && Ho ? null : e;
      default:
        return null;
    }
  }
  function Od(e, t) {
    if (yn)
      return e === "compositionend" || (!ks && Wo(e, t))
        ? ((e = Mo()), (Kr = gs = Mt = null), (yn = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Vo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Rd = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Qo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Rd[e.type] : t === "textarea";
  }
  function Yo(e, t, n, r) {
    ho(r),
      (t = ei(t, "onChange")),
      0 < t.length &&
        ((n = new ms("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var rr = null,
    ir = null;
  function _d(e) {
    fa(e, 0);
  }
  function Gr(e) {
    var t = Nn(e);
    if (to(t)) return e;
  }
  function Td(e, t) {
    if (e === "change") return t;
  }
  var Zo = !1;
  if (m) {
    var Ss;
    if (m) {
      var Ns = "oninput" in document;
      if (!Ns) {
        var Go = document.createElement("div");
        Go.setAttribute("oninput", "return;"),
          (Ns = typeof Go.oninput == "function");
      }
      Ss = Ns;
    } else Ss = !1;
    Zo = Ss && (!document.documentMode || 9 < document.documentMode);
  }
  function Xo() {
    rr && (rr.detachEvent("onpropertychange", Jo), (ir = rr = null));
  }
  function Jo(e) {
    if (e.propertyName === "value" && Gr(ir)) {
      var t = [];
      Yo(t, ir, e, ns(e)), yo(_d, t);
    }
  }
  function Fd(e, t, n) {
    e === "focusin"
      ? (Xo(), (rr = t), (ir = n), rr.attachEvent("onpropertychange", Jo))
      : e === "focusout" && Xo();
  }
  function zd(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Gr(ir);
  }
  function Id(e, t) {
    if (e === "click") return Gr(t);
  }
  function Dd(e, t) {
    if (e === "input" || e === "change") return Gr(t);
  }
  function Md(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var pt = typeof Object.is == "function" ? Object.is : Md;
  function sr(e, t) {
    if (pt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!x.call(t, i) || !pt(e[i], t[i])) return !1;
    }
    return !0;
  }
  function qo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function ea(e, t) {
    var n = qo(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = qo(n);
    }
  }
  function ta(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? ta(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function na() {
    for (var e = window, t = Fr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Fr(e.document);
    }
    return t;
  }
  function js(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function bd(e) {
    var t = na(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      ta(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && js(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var i = n.textContent.length,
            l = Math.min(r.start, i);
          (r = r.end === void 0 ? l : Math.min(r.end, i)),
            !e.extend && l > r && ((i = r), (r = l), (l = i)),
            (i = ea(n, l));
          var d = ea(n, r);
          i &&
            d &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== i.node ||
              e.anchorOffset !== i.offset ||
              e.focusNode !== d.node ||
              e.focusOffset !== d.offset) &&
            ((t = t.createRange()),
            t.setStart(i.node, i.offset),
            e.removeAllRanges(),
            l > r
              ? (e.addRange(t), e.extend(d.node, d.offset))
              : (t.setEnd(d.node, d.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var $d = m && "documentMode" in document && 11 >= document.documentMode,
    xn = null,
    Cs = null,
    lr = null,
    Es = !1;
  function ra(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Es ||
      xn == null ||
      xn !== Fr(r) ||
      ((r = xn),
      "selectionStart" in r && js(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (lr && sr(lr, r)) ||
        ((lr = r),
        (r = ei(Cs, "onSelect")),
        0 < r.length &&
          ((t = new ms("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = xn))));
  }
  function Xr(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var wn = {
      animationend: Xr("Animation", "AnimationEnd"),
      animationiteration: Xr("Animation", "AnimationIteration"),
      animationstart: Xr("Animation", "AnimationStart"),
      transitionend: Xr("Transition", "TransitionEnd"),
    },
    Ls = {},
    ia = {};
  m &&
    ((ia = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete wn.animationend.animation,
      delete wn.animationiteration.animation,
      delete wn.animationstart.animation),
    "TransitionEvent" in window || delete wn.transitionend.transition);
  function Jr(e) {
    if (Ls[e]) return Ls[e];
    if (!wn[e]) return e;
    var t = wn[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in ia) return (Ls[e] = t[n]);
    return e;
  }
  var sa = Jr("animationend"),
    la = Jr("animationiteration"),
    oa = Jr("animationstart"),
    aa = Jr("transitionend"),
    ua = new Map(),
    ca = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
  function bt(e, t) {
    ua.set(e, t), f(t, [e]);
  }
  for (var Ps = 0; Ps < ca.length; Ps++) {
    var Os = ca[Ps],
      Ad = Os.toLowerCase(),
      Ud = Os[0].toUpperCase() + Os.slice(1);
    bt(Ad, "on" + Ud);
  }
  bt(sa, "onAnimationEnd"),
    bt(la, "onAnimationIteration"),
    bt(oa, "onAnimationStart"),
    bt("dblclick", "onDoubleClick"),
    bt("focusin", "onFocus"),
    bt("focusout", "onBlur"),
    bt(aa, "onTransitionEnd"),
    h("onMouseEnter", ["mouseout", "mouseover"]),
    h("onMouseLeave", ["mouseout", "mouseover"]),
    h("onPointerEnter", ["pointerout", "pointerover"]),
    h("onPointerLeave", ["pointerout", "pointerover"]),
    f(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    f(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    f("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    f(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    f(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
    Vd = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(or)
    );
  function da(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Ac(r, t, void 0, e), (e.currentTarget = null);
  }
  function fa(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        i = r.event;
      r = r.listeners;
      e: {
        var l = void 0;
        if (t)
          for (var d = r.length - 1; 0 <= d; d--) {
            var p = r[d],
              v = p.instance,
              j = p.currentTarget;
            if (((p = p.listener), v !== l && i.isPropagationStopped()))
              break e;
            da(i, p, j), (l = v);
          }
        else
          for (d = 0; d < r.length; d++) {
            if (
              ((p = r[d]),
              (v = p.instance),
              (j = p.currentTarget),
              (p = p.listener),
              v !== l && i.isPropagationStopped())
            )
              break e;
            da(i, p, j), (l = v);
          }
      }
    }
    if (Dr) throw ((e = ls), (Dr = !1), (ls = null), e);
  }
  function ge(e, t) {
    var n = t[Ms];
    n === void 0 && (n = t[Ms] = new Set());
    var r = e + "__bubble";
    n.has(r) || (pa(t, e, 2, !1), n.add(r));
  }
  function Rs(e, t, n) {
    var r = 0;
    t && (r |= 4), pa(n, e, r, t);
  }
  var qr = "_reactListening" + Math.random().toString(36).slice(2);
  function ar(e) {
    if (!e[qr]) {
      (e[qr] = !0),
        u.forEach(function (n) {
          n !== "selectionchange" && (Vd.has(n) || Rs(n, !1, e), Rs(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[qr] || ((t[qr] = !0), Rs("selectionchange", !1, t));
    }
  }
  function pa(e, t, n, r) {
    switch (Do(t)) {
      case 1:
        var i = nd;
        break;
      case 4:
        i = rd;
        break;
      default:
        i = ps;
    }
    (n = i.bind(null, t, n, e)),
      (i = void 0),
      !ss ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (i = !0),
      r
        ? i !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: i })
          : e.addEventListener(t, n, !0)
        : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1);
  }
  function _s(e, t, n, r, i) {
    var l = r;
    if ((t & 1) === 0 && (t & 2) === 0 && r !== null)
      e: for (;;) {
        if (r === null) return;
        var d = r.tag;
        if (d === 3 || d === 4) {
          var p = r.stateNode.containerInfo;
          if (p === i || (p.nodeType === 8 && p.parentNode === i)) break;
          if (d === 4)
            for (d = r.return; d !== null; ) {
              var v = d.tag;
              if (
                (v === 3 || v === 4) &&
                ((v = d.stateNode.containerInfo),
                v === i || (v.nodeType === 8 && v.parentNode === i))
              )
                return;
              d = d.return;
            }
          for (; p !== null; ) {
            if (((d = qt(p)), d === null)) return;
            if (((v = d.tag), v === 5 || v === 6)) {
              r = l = d;
              continue e;
            }
            p = p.parentNode;
          }
        }
        r = r.return;
      }
    yo(function () {
      var j = l,
        O = ns(n),
        R = [];
      e: {
        var P = ua.get(e);
        if (P !== void 0) {
          var D = ms,
            $ = e;
          switch (e) {
            case "keypress":
              if (Qr(n) === 0) break e;
            case "keydown":
            case "keyup":
              D = yd;
              break;
            case "focusin":
              ($ = "focus"), (D = xs);
              break;
            case "focusout":
              ($ = "blur"), (D = xs);
              break;
            case "beforeblur":
            case "afterblur":
              D = xs;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              D = $o;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = ld;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = kd;
              break;
            case sa:
            case la:
            case oa:
              D = ud;
              break;
            case aa:
              D = Nd;
              break;
            case "scroll":
              D = id;
              break;
            case "wheel":
              D = Cd;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = dd;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = Uo;
          }
          var A = (t & 4) !== 0,
            Pe = !A && e === "scroll",
            S = A ? (P !== null ? P + "Capture" : null) : P;
          A = [];
          for (var y = j, N; y !== null; ) {
            N = y;
            var _ = N.stateNode;
            if (
              (N.tag === 5 &&
                _ !== null &&
                ((N = _),
                S !== null &&
                  ((_ = Hn(y, S)), _ != null && A.push(ur(y, _, N)))),
              Pe)
            )
              break;
            y = y.return;
          }
          0 < A.length &&
            ((P = new D(P, $, null, n, O)), R.push({ event: P, listeners: A }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((P = e === "mouseover" || e === "pointerover"),
            (D = e === "mouseout" || e === "pointerout"),
            P &&
              n !== ts &&
              ($ = n.relatedTarget || n.fromElement) &&
              (qt($) || $[Ct]))
          )
            break e;
          if (
            (D || P) &&
            ((P =
              O.window === O
                ? O
                : (P = O.ownerDocument)
                ? P.defaultView || P.parentWindow
                : window),
            D
              ? (($ = n.relatedTarget || n.toElement),
                (D = j),
                ($ = $ ? qt($) : null),
                $ !== null &&
                  ((Pe = Jt($)), $ !== Pe || ($.tag !== 5 && $.tag !== 6)) &&
                  ($ = null))
              : ((D = null), ($ = j)),
            D !== $)
          ) {
            if (
              ((A = $o),
              (_ = "onMouseLeave"),
              (S = "onMouseEnter"),
              (y = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((A = Uo),
                (_ = "onPointerLeave"),
                (S = "onPointerEnter"),
                (y = "pointer")),
              (Pe = D == null ? P : Nn(D)),
              (N = $ == null ? P : Nn($)),
              (P = new A(_, y + "leave", D, n, O)),
              (P.target = Pe),
              (P.relatedTarget = N),
              (_ = null),
              qt(O) === j &&
                ((A = new A(S, y + "enter", $, n, O)),
                (A.target = N),
                (A.relatedTarget = Pe),
                (_ = A)),
              (Pe = _),
              D && $)
            )
              t: {
                for (A = D, S = $, y = 0, N = A; N; N = kn(N)) y++;
                for (N = 0, _ = S; _; _ = kn(_)) N++;
                for (; 0 < y - N; ) (A = kn(A)), y--;
                for (; 0 < N - y; ) (S = kn(S)), N--;
                for (; y--; ) {
                  if (A === S || (S !== null && A === S.alternate)) break t;
                  (A = kn(A)), (S = kn(S));
                }
                A = null;
              }
            else A = null;
            D !== null && ha(R, P, D, A, !1),
              $ !== null && Pe !== null && ha(R, Pe, $, A, !0);
          }
        }
        e: {
          if (
            ((P = j ? Nn(j) : window),
            (D = P.nodeName && P.nodeName.toLowerCase()),
            D === "select" || (D === "input" && P.type === "file"))
          )
            var U = Td;
          else if (Qo(P))
            if (Zo) U = Dd;
            else {
              U = zd;
              var H = Fd;
            }
          else
            (D = P.nodeName) &&
              D.toLowerCase() === "input" &&
              (P.type === "checkbox" || P.type === "radio") &&
              (U = Id);
          if (U && (U = U(e, j))) {
            Yo(R, U, n, O);
            break e;
          }
          H && H(e, P, j),
            e === "focusout" &&
              (H = P._wrapperState) &&
              H.controlled &&
              P.type === "number" &&
              Gi(P, "number", P.value);
        }
        switch (((H = j ? Nn(j) : window), e)) {
          case "focusin":
            (Qo(H) || H.contentEditable === "true") &&
              ((xn = H), (Cs = j), (lr = null));
            break;
          case "focusout":
            lr = Cs = xn = null;
            break;
          case "mousedown":
            Es = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (Es = !1), ra(R, n, O);
            break;
          case "selectionchange":
            if ($d) break;
          case "keydown":
          case "keyup":
            ra(R, n, O);
        }
        var W;
        if (ks)
          e: {
            switch (e) {
              case "compositionstart":
                var Q = "onCompositionStart";
                break e;
              case "compositionend":
                Q = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Q = "onCompositionUpdate";
                break e;
            }
            Q = void 0;
          }
        else
          yn
            ? Wo(e, n) && (Q = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (Q = "onCompositionStart");
        Q &&
          (Vo &&
            n.locale !== "ko" &&
            (yn || Q !== "onCompositionStart"
              ? Q === "onCompositionEnd" && yn && (W = Mo())
              : ((Mt = O),
                (gs = "value" in Mt ? Mt.value : Mt.textContent),
                (yn = !0))),
          (H = ei(j, Q)),
          0 < H.length &&
            ((Q = new Ao(Q, e, null, n, O)),
            R.push({ event: Q, listeners: H }),
            W ? (Q.data = W) : ((W = Ko(n)), W !== null && (Q.data = W)))),
          (W = Ld ? Pd(e, n) : Od(e, n)) &&
            ((j = ei(j, "onBeforeInput")),
            0 < j.length &&
              ((O = new Ao("onBeforeInput", "beforeinput", null, n, O)),
              R.push({ event: O, listeners: j }),
              (O.data = W)));
      }
      fa(R, t);
    });
  }
  function ur(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function ei(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var i = e,
        l = i.stateNode;
      i.tag === 5 &&
        l !== null &&
        ((i = l),
        (l = Hn(e, n)),
        l != null && r.unshift(ur(e, l, i)),
        (l = Hn(e, t)),
        l != null && r.push(ur(e, l, i))),
        (e = e.return);
    }
    return r;
  }
  function kn(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function ha(e, t, n, r, i) {
    for (var l = t._reactName, d = []; n !== null && n !== r; ) {
      var p = n,
        v = p.alternate,
        j = p.stateNode;
      if (v !== null && v === r) break;
      p.tag === 5 &&
        j !== null &&
        ((p = j),
        i
          ? ((v = Hn(n, l)), v != null && d.unshift(ur(n, v, p)))
          : i || ((v = Hn(n, l)), v != null && d.push(ur(n, v, p)))),
        (n = n.return);
    }
    d.length !== 0 && e.push({ event: t, listeners: d });
  }
  var Bd = /\r\n?/g,
    Hd = /\u0000|\uFFFD/g;
  function ga(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        Bd,
        `
`
      )
      .replace(Hd, "");
  }
  function ti(e, t, n) {
    if (((t = ga(t)), ga(e) !== t && n)) throw Error(o(425));
  }
  function ni() {}
  var Ts = null,
    Fs = null;
  function zs(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Is = typeof setTimeout == "function" ? setTimeout : void 0,
    Wd = typeof clearTimeout == "function" ? clearTimeout : void 0,
    ma = typeof Promise == "function" ? Promise : void 0,
    Kd =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof ma < "u"
        ? function (e) {
            return ma.resolve(null).then(e).catch(Qd);
          }
        : Is;
  function Qd(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Ds(e, t) {
    var n = t,
      r = 0;
    do {
      var i = n.nextSibling;
      if ((e.removeChild(n), i && i.nodeType === 8))
        if (((n = i.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(i), qn(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = i;
    } while (n);
    qn(t);
  }
  function $t(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function va(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var Sn = Math.random().toString(36).slice(2),
    wt = "__reactFiber$" + Sn,
    cr = "__reactProps$" + Sn,
    Ct = "__reactContainer$" + Sn,
    Ms = "__reactEvents$" + Sn,
    Yd = "__reactListeners$" + Sn,
    Zd = "__reactHandles$" + Sn;
  function qt(e) {
    var t = e[wt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[Ct] || n[wt])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = va(e); e !== null; ) {
            if ((n = e[wt])) return n;
            e = va(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function dr(e) {
    return (
      (e = e[wt] || e[Ct]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function Nn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(o(33));
  }
  function ri(e) {
    return e[cr] || null;
  }
  var bs = [],
    jn = -1;
  function At(e) {
    return { current: e };
  }
  function me(e) {
    0 > jn || ((e.current = bs[jn]), (bs[jn] = null), jn--);
  }
  function pe(e, t) {
    jn++, (bs[jn] = e.current), (e.current = t);
  }
  var Ut = {},
    Ae = At(Ut),
    Qe = At(!1),
    en = Ut;
  function Cn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Ut;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var i = {},
      l;
    for (l in n) i[l] = t[l];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      i
    );
  }
  function Ye(e) {
    return (e = e.childContextTypes), e != null;
  }
  function ii() {
    me(Qe), me(Ae);
  }
  function ya(e, t, n) {
    if (Ae.current !== Ut) throw Error(o(168));
    pe(Ae, t), pe(Qe, n);
  }
  function xa(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var i in r) if (!(i in t)) throw Error(o(108, fe(e) || "Unknown", i));
    return M({}, n, r);
  }
  function si(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Ut),
      (en = Ae.current),
      pe(Ae, e),
      pe(Qe, Qe.current),
      !0
    );
  }
  function wa(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(o(169));
    n
      ? ((e = xa(e, t, en)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        me(Qe),
        me(Ae),
        pe(Ae, e))
      : me(Qe),
      pe(Qe, n);
  }
  var Et = null,
    li = !1,
    $s = !1;
  function ka(e) {
    Et === null ? (Et = [e]) : Et.push(e);
  }
  function Gd(e) {
    (li = !0), ka(e);
  }
  function Vt() {
    if (!$s && Et !== null) {
      $s = !0;
      var e = 0,
        t = ue;
      try {
        var n = Et;
        for (ue = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Et = null), (li = !1);
      } catch (i) {
        throw (Et !== null && (Et = Et.slice(e + 1)), No(os, Vt), i);
      } finally {
        (ue = t), ($s = !1);
      }
    }
    return null;
  }
  var En = [],
    Ln = 0,
    oi = null,
    ai = 0,
    lt = [],
    ot = 0,
    tn = null,
    Lt = 1,
    Pt = "";
  function nn(e, t) {
    (En[Ln++] = ai), (En[Ln++] = oi), (oi = e), (ai = t);
  }
  function Sa(e, t, n) {
    (lt[ot++] = Lt), (lt[ot++] = Pt), (lt[ot++] = tn), (tn = e);
    var r = Lt;
    e = Pt;
    var i = 32 - ft(r) - 1;
    (r &= ~(1 << i)), (n += 1);
    var l = 32 - ft(t) + i;
    if (30 < l) {
      var d = i - (i % 5);
      (l = (r & ((1 << d) - 1)).toString(32)),
        (r >>= d),
        (i -= d),
        (Lt = (1 << (32 - ft(t) + i)) | (n << i) | r),
        (Pt = l + e);
    } else (Lt = (1 << l) | (n << i) | r), (Pt = e);
  }
  function As(e) {
    e.return !== null && (nn(e, 1), Sa(e, 1, 0));
  }
  function Us(e) {
    for (; e === oi; )
      (oi = En[--Ln]), (En[Ln] = null), (ai = En[--Ln]), (En[Ln] = null);
    for (; e === tn; )
      (tn = lt[--ot]),
        (lt[ot] = null),
        (Pt = lt[--ot]),
        (lt[ot] = null),
        (Lt = lt[--ot]),
        (lt[ot] = null);
  }
  var nt = null,
    rt = null,
    ke = !1,
    ht = null;
  function Na(e, t) {
    var n = dt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function ja(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (nt = e), (rt = $t(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (nt = e), (rt = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = tn !== null ? { id: Lt, overflow: Pt } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = dt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (nt = e),
              (rt = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function Vs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Bs(e) {
    if (ke) {
      var t = rt;
      if (t) {
        var n = t;
        if (!ja(e, t)) {
          if (Vs(e)) throw Error(o(418));
          t = $t(n.nextSibling);
          var r = nt;
          t && ja(e, t)
            ? Na(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (ke = !1), (nt = e));
        }
      } else {
        if (Vs(e)) throw Error(o(418));
        (e.flags = (e.flags & -4097) | 2), (ke = !1), (nt = e);
      }
    }
  }
  function Ca(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    nt = e;
  }
  function ui(e) {
    if (e !== nt) return !1;
    if (!ke) return Ca(e), (ke = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !zs(e.type, e.memoizedProps))),
      t && (t = rt))
    ) {
      if (Vs(e)) throw (Ea(), Error(o(418)));
      for (; t; ) Na(e, t), (t = $t(t.nextSibling));
    }
    if ((Ca(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(o(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                rt = $t(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        rt = null;
      }
    } else rt = nt ? $t(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ea() {
    for (var e = rt; e; ) e = $t(e.nextSibling);
  }
  function Pn() {
    (rt = nt = null), (ke = !1);
  }
  function Hs(e) {
    ht === null ? (ht = [e]) : ht.push(e);
  }
  var Xd = ee.ReactCurrentBatchConfig;
  function fr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(o(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(o(147, e));
        var i = r,
          l = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === l
          ? t.ref
          : ((t = function (d) {
              var p = i.refs;
              d === null ? delete p[l] : (p[l] = d);
            }),
            (t._stringRef = l),
            t);
      }
      if (typeof e != "string") throw Error(o(284));
      if (!n._owner) throw Error(o(290, e));
    }
    return e;
  }
  function ci(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        o(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function La(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Pa(e) {
    function t(S, y) {
      if (e) {
        var N = S.deletions;
        N === null ? ((S.deletions = [y]), (S.flags |= 16)) : N.push(y);
      }
    }
    function n(S, y) {
      if (!e) return null;
      for (; y !== null; ) t(S, y), (y = y.sibling);
      return null;
    }
    function r(S, y) {
      for (S = new Map(); y !== null; )
        y.key !== null ? S.set(y.key, y) : S.set(y.index, y), (y = y.sibling);
      return S;
    }
    function i(S, y) {
      return (S = Gt(S, y)), (S.index = 0), (S.sibling = null), S;
    }
    function l(S, y, N) {
      return (
        (S.index = N),
        e
          ? ((N = S.alternate),
            N !== null
              ? ((N = N.index), N < y ? ((S.flags |= 2), y) : N)
              : ((S.flags |= 2), y))
          : ((S.flags |= 1048576), y)
      );
    }
    function d(S) {
      return e && S.alternate === null && (S.flags |= 2), S;
    }
    function p(S, y, N, _) {
      return y === null || y.tag !== 6
        ? ((y = Il(N, S.mode, _)), (y.return = S), y)
        : ((y = i(y, N)), (y.return = S), y);
    }
    function v(S, y, N, _) {
      var U = N.type;
      return U === ce
        ? O(S, y, N.props.children, _, N.key)
        : y !== null &&
          (y.elementType === U ||
            (typeof U == "object" &&
              U !== null &&
              U.$$typeof === he &&
              La(U) === y.type))
        ? ((_ = i(y, N.props)), (_.ref = fr(S, y, N)), (_.return = S), _)
        : ((_ = zi(N.type, N.key, N.props, null, S.mode, _)),
          (_.ref = fr(S, y, N)),
          (_.return = S),
          _);
    }
    function j(S, y, N, _) {
      return y === null ||
        y.tag !== 4 ||
        y.stateNode.containerInfo !== N.containerInfo ||
        y.stateNode.implementation !== N.implementation
        ? ((y = Dl(N, S.mode, _)), (y.return = S), y)
        : ((y = i(y, N.children || [])), (y.return = S), y);
    }
    function O(S, y, N, _, U) {
      return y === null || y.tag !== 7
        ? ((y = dn(N, S.mode, _, U)), (y.return = S), y)
        : ((y = i(y, N)), (y.return = S), y);
    }
    function R(S, y, N) {
      if ((typeof y == "string" && y !== "") || typeof y == "number")
        return (y = Il("" + y, S.mode, N)), (y.return = S), y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case ye:
            return (
              (N = zi(y.type, y.key, y.props, null, S.mode, N)),
              (N.ref = fr(S, null, y)),
              (N.return = S),
              N
            );
          case Se:
            return (y = Dl(y, S.mode, N)), (y.return = S), y;
          case he:
            var _ = y._init;
            return R(S, _(y._payload), N);
        }
        if (Un(y) || B(y))
          return (y = dn(y, S.mode, N, null)), (y.return = S), y;
        ci(S, y);
      }
      return null;
    }
    function P(S, y, N, _) {
      var U = y !== null ? y.key : null;
      if ((typeof N == "string" && N !== "") || typeof N == "number")
        return U !== null ? null : p(S, y, "" + N, _);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case ye:
            return N.key === U ? v(S, y, N, _) : null;
          case Se:
            return N.key === U ? j(S, y, N, _) : null;
          case he:
            return (U = N._init), P(S, y, U(N._payload), _);
        }
        if (Un(N) || B(N)) return U !== null ? null : O(S, y, N, _, null);
        ci(S, N);
      }
      return null;
    }
    function D(S, y, N, _, U) {
      if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
        return (S = S.get(N) || null), p(y, S, "" + _, U);
      if (typeof _ == "object" && _ !== null) {
        switch (_.$$typeof) {
          case ye:
            return (
              (S = S.get(_.key === null ? N : _.key) || null), v(y, S, _, U)
            );
          case Se:
            return (
              (S = S.get(_.key === null ? N : _.key) || null), j(y, S, _, U)
            );
          case he:
            var H = _._init;
            return D(S, y, N, H(_._payload), U);
        }
        if (Un(_) || B(_)) return (S = S.get(N) || null), O(y, S, _, U, null);
        ci(y, _);
      }
      return null;
    }
    function $(S, y, N, _) {
      for (
        var U = null, H = null, W = y, Q = (y = 0), Ie = null;
        W !== null && Q < N.length;
        Q++
      ) {
        W.index > Q ? ((Ie = W), (W = null)) : (Ie = W.sibling);
        var le = P(S, W, N[Q], _);
        if (le === null) {
          W === null && (W = Ie);
          break;
        }
        e && W && le.alternate === null && t(S, W),
          (y = l(le, y, Q)),
          H === null ? (U = le) : (H.sibling = le),
          (H = le),
          (W = Ie);
      }
      if (Q === N.length) return n(S, W), ke && nn(S, Q), U;
      if (W === null) {
        for (; Q < N.length; Q++)
          (W = R(S, N[Q], _)),
            W !== null &&
              ((y = l(W, y, Q)),
              H === null ? (U = W) : (H.sibling = W),
              (H = W));
        return ke && nn(S, Q), U;
      }
      for (W = r(S, W); Q < N.length; Q++)
        (Ie = D(W, S, Q, N[Q], _)),
          Ie !== null &&
            (e &&
              Ie.alternate !== null &&
              W.delete(Ie.key === null ? Q : Ie.key),
            (y = l(Ie, y, Q)),
            H === null ? (U = Ie) : (H.sibling = Ie),
            (H = Ie));
      return (
        e &&
          W.forEach(function (Xt) {
            return t(S, Xt);
          }),
        ke && nn(S, Q),
        U
      );
    }
    function A(S, y, N, _) {
      var U = B(N);
      if (typeof U != "function") throw Error(o(150));
      if (((N = U.call(N)), N == null)) throw Error(o(151));
      for (
        var H = (U = null), W = y, Q = (y = 0), Ie = null, le = N.next();
        W !== null && !le.done;
        Q++, le = N.next()
      ) {
        W.index > Q ? ((Ie = W), (W = null)) : (Ie = W.sibling);
        var Xt = P(S, W, le.value, _);
        if (Xt === null) {
          W === null && (W = Ie);
          break;
        }
        e && W && Xt.alternate === null && t(S, W),
          (y = l(Xt, y, Q)),
          H === null ? (U = Xt) : (H.sibling = Xt),
          (H = Xt),
          (W = Ie);
      }
      if (le.done) return n(S, W), ke && nn(S, Q), U;
      if (W === null) {
        for (; !le.done; Q++, le = N.next())
          (le = R(S, le.value, _)),
            le !== null &&
              ((y = l(le, y, Q)),
              H === null ? (U = le) : (H.sibling = le),
              (H = le));
        return ke && nn(S, Q), U;
      }
      for (W = r(S, W); !le.done; Q++, le = N.next())
        (le = D(W, S, Q, le.value, _)),
          le !== null &&
            (e &&
              le.alternate !== null &&
              W.delete(le.key === null ? Q : le.key),
            (y = l(le, y, Q)),
            H === null ? (U = le) : (H.sibling = le),
            (H = le));
      return (
        e &&
          W.forEach(function (_f) {
            return t(S, _f);
          }),
        ke && nn(S, Q),
        U
      );
    }
    function Pe(S, y, N, _) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === ce &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case ye:
            e: {
              for (var U = N.key, H = y; H !== null; ) {
                if (H.key === U) {
                  if (((U = N.type), U === ce)) {
                    if (H.tag === 7) {
                      n(S, H.sibling),
                        (y = i(H, N.props.children)),
                        (y.return = S),
                        (S = y);
                      break e;
                    }
                  } else if (
                    H.elementType === U ||
                    (typeof U == "object" &&
                      U !== null &&
                      U.$$typeof === he &&
                      La(U) === H.type)
                  ) {
                    n(S, H.sibling),
                      (y = i(H, N.props)),
                      (y.ref = fr(S, H, N)),
                      (y.return = S),
                      (S = y);
                    break e;
                  }
                  n(S, H);
                  break;
                } else t(S, H);
                H = H.sibling;
              }
              N.type === ce
                ? ((y = dn(N.props.children, S.mode, _, N.key)),
                  (y.return = S),
                  (S = y))
                : ((_ = zi(N.type, N.key, N.props, null, S.mode, _)),
                  (_.ref = fr(S, y, N)),
                  (_.return = S),
                  (S = _));
            }
            return d(S);
          case Se:
            e: {
              for (H = N.key; y !== null; ) {
                if (y.key === H)
                  if (
                    y.tag === 4 &&
                    y.stateNode.containerInfo === N.containerInfo &&
                    y.stateNode.implementation === N.implementation
                  ) {
                    n(S, y.sibling),
                      (y = i(y, N.children || [])),
                      (y.return = S),
                      (S = y);
                    break e;
                  } else {
                    n(S, y);
                    break;
                  }
                else t(S, y);
                y = y.sibling;
              }
              (y = Dl(N, S.mode, _)), (y.return = S), (S = y);
            }
            return d(S);
          case he:
            return (H = N._init), Pe(S, y, H(N._payload), _);
        }
        if (Un(N)) return $(S, y, N, _);
        if (B(N)) return A(S, y, N, _);
        ci(S, N);
      }
      return (typeof N == "string" && N !== "") || typeof N == "number"
        ? ((N = "" + N),
          y !== null && y.tag === 6
            ? (n(S, y.sibling), (y = i(y, N)), (y.return = S), (S = y))
            : (n(S, y), (y = Il(N, S.mode, _)), (y.return = S), (S = y)),
          d(S))
        : n(S, y);
    }
    return Pe;
  }
  var On = Pa(!0),
    Oa = Pa(!1),
    di = At(null),
    fi = null,
    Rn = null,
    Ws = null;
  function Ks() {
    Ws = Rn = fi = null;
  }
  function Qs(e) {
    var t = di.current;
    me(di), (e._currentValue = t);
  }
  function Ys(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function _n(e, t) {
    (fi = e),
      (Ws = Rn = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        ((e.lanes & t) !== 0 && (Ze = !0), (e.firstContext = null));
  }
  function at(e) {
    var t = e._currentValue;
    if (Ws !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), Rn === null)) {
        if (fi === null) throw Error(o(308));
        (Rn = e), (fi.dependencies = { lanes: 0, firstContext: e });
      } else Rn = Rn.next = e;
    return t;
  }
  var rn = null;
  function Zs(e) {
    rn === null ? (rn = [e]) : rn.push(e);
  }
  function Ra(e, t, n, r) {
    var i = t.interleaved;
    return (
      i === null ? ((n.next = n), Zs(t)) : ((n.next = i.next), (i.next = n)),
      (t.interleaved = n),
      Ot(e, r)
    );
  }
  function Ot(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var Bt = !1;
  function Gs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function _a(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function Rt(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function Ht(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), (ne & 2) !== 0)) {
      var i = r.pending;
      return (
        i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
        (r.pending = t),
        Ot(e, n)
      );
    }
    return (
      (i = r.interleaved),
      i === null ? ((t.next = t), Zs(r)) : ((t.next = i.next), (i.next = t)),
      (r.interleaved = t),
      Ot(e, n)
    );
  }
  function pi(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), cs(e, n);
    }
  }
  function Ta(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var i = null,
        l = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var d = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          l === null ? (i = l = d) : (l = l.next = d), (n = n.next);
        } while (n !== null);
        l === null ? (i = l = t) : (l = l.next = t);
      } else i = l = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: l,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function hi(e, t, n, r) {
    var i = e.updateQueue;
    Bt = !1;
    var l = i.firstBaseUpdate,
      d = i.lastBaseUpdate,
      p = i.shared.pending;
    if (p !== null) {
      i.shared.pending = null;
      var v = p,
        j = v.next;
      (v.next = null), d === null ? (l = j) : (d.next = j), (d = v);
      var O = e.alternate;
      O !== null &&
        ((O = O.updateQueue),
        (p = O.lastBaseUpdate),
        p !== d &&
          (p === null ? (O.firstBaseUpdate = j) : (p.next = j),
          (O.lastBaseUpdate = v)));
    }
    if (l !== null) {
      var R = i.baseState;
      (d = 0), (O = j = v = null), (p = l);
      do {
        var P = p.lane,
          D = p.eventTime;
        if ((r & P) === P) {
          O !== null &&
            (O = O.next = {
              eventTime: D,
              lane: 0,
              tag: p.tag,
              payload: p.payload,
              callback: p.callback,
              next: null,
            });
          e: {
            var $ = e,
              A = p;
            switch (((P = t), (D = n), A.tag)) {
              case 1:
                if ((($ = A.payload), typeof $ == "function")) {
                  R = $.call(D, R, P);
                  break e;
                }
                R = $;
                break e;
              case 3:
                $.flags = ($.flags & -65537) | 128;
              case 0:
                if (
                  (($ = A.payload),
                  (P = typeof $ == "function" ? $.call(D, R, P) : $),
                  P == null)
                )
                  break e;
                R = M({}, R, P);
                break e;
              case 2:
                Bt = !0;
            }
          }
          p.callback !== null &&
            p.lane !== 0 &&
            ((e.flags |= 64),
            (P = i.effects),
            P === null ? (i.effects = [p]) : P.push(p));
        } else
          (D = {
            eventTime: D,
            lane: P,
            tag: p.tag,
            payload: p.payload,
            callback: p.callback,
            next: null,
          }),
            O === null ? ((j = O = D), (v = R)) : (O = O.next = D),
            (d |= P);
        if (((p = p.next), p === null)) {
          if (((p = i.shared.pending), p === null)) break;
          (P = p),
            (p = P.next),
            (P.next = null),
            (i.lastBaseUpdate = P),
            (i.shared.pending = null);
        }
      } while (!0);
      if (
        (O === null && (v = R),
        (i.baseState = v),
        (i.firstBaseUpdate = j),
        (i.lastBaseUpdate = O),
        (t = i.shared.interleaved),
        t !== null)
      ) {
        i = t;
        do (d |= i.lane), (i = i.next);
        while (i !== t);
      } else l === null && (i.shared.lanes = 0);
      (on |= d), (e.lanes = d), (e.memoizedState = R);
    }
  }
  function Fa(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          i = r.callback;
        if (i !== null) {
          if (((r.callback = null), (r = n), typeof i != "function"))
            throw Error(o(191, i));
          i.call(r);
        }
      }
  }
  var pr = {},
    kt = At(pr),
    hr = At(pr),
    gr = At(pr);
  function sn(e) {
    if (e === pr) throw Error(o(174));
    return e;
  }
  function Xs(e, t) {
    switch ((pe(gr, t), pe(hr, e), pe(kt, pr), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ji(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ji(t, e));
    }
    me(kt), pe(kt, t);
  }
  function Tn() {
    me(kt), me(hr), me(gr);
  }
  function za(e) {
    sn(gr.current);
    var t = sn(kt.current),
      n = Ji(t, e.type);
    t !== n && (pe(hr, e), pe(kt, n));
  }
  function Js(e) {
    hr.current === e && (me(kt), me(hr));
  }
  var je = At(0);
  function gi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var qs = [];
  function el() {
    for (var e = 0; e < qs.length; e++)
      qs[e]._workInProgressVersionPrimary = null;
    qs.length = 0;
  }
  var mi = ee.ReactCurrentDispatcher,
    tl = ee.ReactCurrentBatchConfig,
    ln = 0,
    Ce = null,
    _e = null,
    Fe = null,
    vi = !1,
    mr = !1,
    vr = 0,
    Jd = 0;
  function Ue() {
    throw Error(o(321));
  }
  function nl(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!pt(e[n], t[n])) return !1;
    return !0;
  }
  function rl(e, t, n, r, i, l) {
    if (
      ((ln = l),
      (Ce = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (mi.current = e === null || e.memoizedState === null ? nf : rf),
      (e = n(r, i)),
      mr)
    ) {
      l = 0;
      do {
        if (((mr = !1), (vr = 0), 25 <= l)) throw Error(o(301));
        (l += 1),
          (Fe = _e = null),
          (t.updateQueue = null),
          (mi.current = sf),
          (e = n(r, i));
      } while (mr);
    }
    if (
      ((mi.current = wi),
      (t = _e !== null && _e.next !== null),
      (ln = 0),
      (Fe = _e = Ce = null),
      (vi = !1),
      t)
    )
      throw Error(o(300));
    return e;
  }
  function il() {
    var e = vr !== 0;
    return (vr = 0), e;
  }
  function St() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Fe === null ? (Ce.memoizedState = Fe = e) : (Fe = Fe.next = e), Fe;
  }
  function ut() {
    if (_e === null) {
      var e = Ce.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = _e.next;
    var t = Fe === null ? Ce.memoizedState : Fe.next;
    if (t !== null) (Fe = t), (_e = e);
    else {
      if (e === null) throw Error(o(310));
      (_e = e),
        (e = {
          memoizedState: _e.memoizedState,
          baseState: _e.baseState,
          baseQueue: _e.baseQueue,
          queue: _e.queue,
          next: null,
        }),
        Fe === null ? (Ce.memoizedState = Fe = e) : (Fe = Fe.next = e);
    }
    return Fe;
  }
  function yr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function sl(e) {
    var t = ut(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = _e,
      i = r.baseQueue,
      l = n.pending;
    if (l !== null) {
      if (i !== null) {
        var d = i.next;
        (i.next = l.next), (l.next = d);
      }
      (r.baseQueue = i = l), (n.pending = null);
    }
    if (i !== null) {
      (l = i.next), (r = r.baseState);
      var p = (d = null),
        v = null,
        j = l;
      do {
        var O = j.lane;
        if ((ln & O) === O)
          v !== null &&
            (v = v.next = {
              lane: 0,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null,
            }),
            (r = j.hasEagerState ? j.eagerState : e(r, j.action));
        else {
          var R = {
            lane: O,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          };
          v === null ? ((p = v = R), (d = r)) : (v = v.next = R),
            (Ce.lanes |= O),
            (on |= O);
        }
        j = j.next;
      } while (j !== null && j !== l);
      v === null ? (d = r) : (v.next = p),
        pt(r, t.memoizedState) || (Ze = !0),
        (t.memoizedState = r),
        (t.baseState = d),
        (t.baseQueue = v),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      i = e;
      do (l = i.lane), (Ce.lanes |= l), (on |= l), (i = i.next);
      while (i !== e);
    } else i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function ll(e) {
    var t = ut(),
      n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      i = n.pending,
      l = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var d = (i = i.next);
      do (l = e(l, d.action)), (d = d.next);
      while (d !== i);
      pt(l, t.memoizedState) || (Ze = !0),
        (t.memoizedState = l),
        t.baseQueue === null && (t.baseState = l),
        (n.lastRenderedState = l);
    }
    return [l, r];
  }
  function Ia() {}
  function Da(e, t) {
    var n = Ce,
      r = ut(),
      i = t(),
      l = !pt(r.memoizedState, i);
    if (
      (l && ((r.memoizedState = i), (Ze = !0)),
      (r = r.queue),
      ol($a.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || l || (Fe !== null && Fe.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        xr(9, ba.bind(null, n, r, i, t), void 0, null),
        ze === null)
      )
        throw Error(o(349));
      (ln & 30) !== 0 || Ma(n, t, i);
    }
    return i;
  }
  function Ma(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ce.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function ba(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Aa(t) && Ua(e);
  }
  function $a(e, t, n) {
    return n(function () {
      Aa(t) && Ua(e);
    });
  }
  function Aa(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !pt(e, n);
    } catch {
      return !0;
    }
  }
  function Ua(e) {
    var t = Ot(e, 1);
    t !== null && yt(t, e, 1, -1);
  }
  function Va(e) {
    var t = St();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: yr,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = tf.bind(null, Ce, e)),
      [t.memoizedState, e]
    );
  }
  function xr(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = Ce.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (Ce.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ba() {
    return ut().memoizedState;
  }
  function yi(e, t, n, r) {
    var i = St();
    (Ce.flags |= e),
      (i.memoizedState = xr(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function xi(e, t, n, r) {
    var i = ut();
    r = r === void 0 ? null : r;
    var l = void 0;
    if (_e !== null) {
      var d = _e.memoizedState;
      if (((l = d.destroy), r !== null && nl(r, d.deps))) {
        i.memoizedState = xr(t, n, l, r);
        return;
      }
    }
    (Ce.flags |= e), (i.memoizedState = xr(1 | t, n, l, r));
  }
  function Ha(e, t) {
    return yi(8390656, 8, e, t);
  }
  function ol(e, t) {
    return xi(2048, 8, e, t);
  }
  function Wa(e, t) {
    return xi(4, 2, e, t);
  }
  function Ka(e, t) {
    return xi(4, 4, e, t);
  }
  function Qa(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Ya(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), xi(4, 4, Qa.bind(null, t, e), n)
    );
  }
  function al() {}
  function Za(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && nl(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function Ga(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && nl(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function Xa(e, t, n) {
    return (ln & 21) === 0
      ? (e.baseState && ((e.baseState = !1), (Ze = !0)), (e.memoizedState = n))
      : (pt(n, t) ||
          ((n = Lo()), (Ce.lanes |= n), (on |= n), (e.baseState = !0)),
        t);
  }
  function qd(e, t) {
    var n = ue;
    (ue = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = tl.transition;
    tl.transition = {};
    try {
      e(!1), t();
    } finally {
      (ue = n), (tl.transition = r);
    }
  }
  function Ja() {
    return ut().memoizedState;
  }
  function ef(e, t, n) {
    var r = Yt(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      qa(e))
    )
      eu(t, n);
    else if (((n = Ra(e, t, n, r)), n !== null)) {
      var i = Ke();
      yt(n, e, r, i), tu(n, t, r);
    }
  }
  function tf(e, t, n) {
    var r = Yt(e),
      i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (qa(e)) eu(t, i);
    else {
      var l = e.alternate;
      if (
        e.lanes === 0 &&
        (l === null || l.lanes === 0) &&
        ((l = t.lastRenderedReducer), l !== null)
      )
        try {
          var d = t.lastRenderedState,
            p = l(d, n);
          if (((i.hasEagerState = !0), (i.eagerState = p), pt(p, d))) {
            var v = t.interleaved;
            v === null
              ? ((i.next = i), Zs(t))
              : ((i.next = v.next), (v.next = i)),
              (t.interleaved = i);
            return;
          }
        } catch {
        } finally {
        }
      (n = Ra(e, t, i, r)),
        n !== null && ((i = Ke()), yt(n, e, r, i), tu(n, t, r));
    }
  }
  function qa(e) {
    var t = e.alternate;
    return e === Ce || (t !== null && t === Ce);
  }
  function eu(e, t) {
    mr = vi = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function tu(e, t, n) {
    if ((n & 4194240) !== 0) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), cs(e, n);
    }
  }
  var wi = {
      readContext: at,
      useCallback: Ue,
      useContext: Ue,
      useEffect: Ue,
      useImperativeHandle: Ue,
      useInsertionEffect: Ue,
      useLayoutEffect: Ue,
      useMemo: Ue,
      useReducer: Ue,
      useRef: Ue,
      useState: Ue,
      useDebugValue: Ue,
      useDeferredValue: Ue,
      useTransition: Ue,
      useMutableSource: Ue,
      useSyncExternalStore: Ue,
      useId: Ue,
      unstable_isNewReconciler: !1,
    },
    nf = {
      readContext: at,
      useCallback: function (e, t) {
        return (St().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: at,
      useEffect: Ha,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          yi(4194308, 4, Qa.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return yi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return yi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = St();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = St();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = ef.bind(null, Ce, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = St();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Va,
      useDebugValue: al,
      useDeferredValue: function (e) {
        return (St().memoizedState = e);
      },
      useTransition: function () {
        var e = Va(!1),
          t = e[0];
        return (e = qd.bind(null, e[1])), (St().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = Ce,
          i = St();
        if (ke) {
          if (n === void 0) throw Error(o(407));
          n = n();
        } else {
          if (((n = t()), ze === null)) throw Error(o(349));
          (ln & 30) !== 0 || Ma(r, t, n);
        }
        i.memoizedState = n;
        var l = { value: n, getSnapshot: t };
        return (
          (i.queue = l),
          Ha($a.bind(null, r, l, e), [e]),
          (r.flags |= 2048),
          xr(9, ba.bind(null, r, l, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = St(),
          t = ze.identifierPrefix;
        if (ke) {
          var n = Pt,
            r = Lt;
          (n = (r & ~(1 << (32 - ft(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = vr++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = Jd++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    rf = {
      readContext: at,
      useCallback: Za,
      useContext: at,
      useEffect: ol,
      useImperativeHandle: Ya,
      useInsertionEffect: Wa,
      useLayoutEffect: Ka,
      useMemo: Ga,
      useReducer: sl,
      useRef: Ba,
      useState: function () {
        return sl(yr);
      },
      useDebugValue: al,
      useDeferredValue: function (e) {
        var t = ut();
        return Xa(t, _e.memoizedState, e);
      },
      useTransition: function () {
        var e = sl(yr)[0],
          t = ut().memoizedState;
        return [e, t];
      },
      useMutableSource: Ia,
      useSyncExternalStore: Da,
      useId: Ja,
      unstable_isNewReconciler: !1,
    },
    sf = {
      readContext: at,
      useCallback: Za,
      useContext: at,
      useEffect: ol,
      useImperativeHandle: Ya,
      useInsertionEffect: Wa,
      useLayoutEffect: Ka,
      useMemo: Ga,
      useReducer: ll,
      useRef: Ba,
      useState: function () {
        return ll(yr);
      },
      useDebugValue: al,
      useDeferredValue: function (e) {
        var t = ut();
        return _e === null ? (t.memoizedState = e) : Xa(t, _e.memoizedState, e);
      },
      useTransition: function () {
        var e = ll(yr)[0],
          t = ut().memoizedState;
        return [e, t];
      },
      useMutableSource: Ia,
      useSyncExternalStore: Da,
      useId: Ja,
      unstable_isNewReconciler: !1,
    };
  function gt(e, t) {
    if (e && e.defaultProps) {
      (t = M({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ul(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : M({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ki = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? Jt(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ke(),
        i = Yt(e),
        l = Rt(r, i);
      (l.payload = t),
        n != null && (l.callback = n),
        (t = Ht(e, l, i)),
        t !== null && (yt(t, e, i, r), pi(t, e, i));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ke(),
        i = Yt(e),
        l = Rt(r, i);
      (l.tag = 1),
        (l.payload = t),
        n != null && (l.callback = n),
        (t = Ht(e, l, i)),
        t !== null && (yt(t, e, i, r), pi(t, e, i));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ke(),
        r = Yt(e),
        i = Rt(n, r);
      (i.tag = 2),
        t != null && (i.callback = t),
        (t = Ht(e, i, r)),
        t !== null && (yt(t, e, r, n), pi(t, e, r));
    },
  };
  function nu(e, t, n, r, i, l, d) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, l, d)
        : t.prototype && t.prototype.isPureReactComponent
        ? !sr(n, r) || !sr(i, l)
        : !0
    );
  }
  function ru(e, t, n) {
    var r = !1,
      i = Ut,
      l = t.contextType;
    return (
      typeof l == "object" && l !== null
        ? (l = at(l))
        : ((i = Ye(t) ? en : Ae.current),
          (r = t.contextTypes),
          (l = (r = r != null) ? Cn(e, i) : Ut)),
      (t = new t(n, l)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = ki),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = i),
        (e.__reactInternalMemoizedMaskedChildContext = l)),
      t
    );
  }
  function iu(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && ki.enqueueReplaceState(t, t.state, null);
  }
  function cl(e, t, n, r) {
    var i = e.stateNode;
    (i.props = n), (i.state = e.memoizedState), (i.refs = {}), Gs(e);
    var l = t.contextType;
    typeof l == "object" && l !== null
      ? (i.context = at(l))
      : ((l = Ye(t) ? en : Ae.current), (i.context = Cn(e, l))),
      (i.state = e.memoizedState),
      (l = t.getDerivedStateFromProps),
      typeof l == "function" && (ul(e, t, l, n), (i.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function" ||
        (typeof i.UNSAFE_componentWillMount != "function" &&
          typeof i.componentWillMount != "function") ||
        ((t = i.state),
        typeof i.componentWillMount == "function" && i.componentWillMount(),
        typeof i.UNSAFE_componentWillMount == "function" &&
          i.UNSAFE_componentWillMount(),
        t !== i.state && ki.enqueueReplaceState(i, i.state, null),
        hi(e, n, i, r),
        (i.state = e.memoizedState)),
      typeof i.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Fn(e, t) {
    try {
      var n = "",
        r = t;
      do (n += q(r)), (r = r.return);
      while (r);
      var i = n;
    } catch (l) {
      i =
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack;
    }
    return { value: e, source: t, stack: i, digest: null };
  }
  function dl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function fl(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var lf = typeof WeakMap == "function" ? WeakMap : Map;
  function su(e, t, n) {
    (n = Rt(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        Pi || ((Pi = !0), (Ll = r)), fl(e, t);
      }),
      n
    );
  }
  function lu(e, t, n) {
    (n = Rt(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var i = t.value;
      (n.payload = function () {
        return r(i);
      }),
        (n.callback = function () {
          fl(e, t);
        });
    }
    var l = e.stateNode;
    return (
      l !== null &&
        typeof l.componentDidCatch == "function" &&
        (n.callback = function () {
          fl(e, t),
            typeof r != "function" &&
              (Kt === null ? (Kt = new Set([this])) : Kt.add(this));
          var d = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: d !== null ? d : "",
          });
        }),
      n
    );
  }
  function ou(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new lf();
      var i = new Set();
      r.set(t, i);
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
    i.has(n) || (i.add(n), (e = wf.bind(null, e, t, n)), t.then(e, e));
  }
  function au(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function uu(e, t, n, r, i) {
    return (e.mode & 1) === 0
      ? (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = Rt(-1, 1)), (t.tag = 2), Ht(n, t, 1))),
            (n.lanes |= 1)),
        e)
      : ((e.flags |= 65536), (e.lanes = i), e);
  }
  var of = ee.ReactCurrentOwner,
    Ze = !1;
  function We(e, t, n, r) {
    t.child = e === null ? Oa(t, null, n, r) : On(t, e.child, n, r);
  }
  function cu(e, t, n, r, i) {
    n = n.render;
    var l = t.ref;
    return (
      _n(t, i),
      (r = rl(e, t, n, r, l, i)),
      (n = il()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          _t(e, t, i))
        : (ke && n && As(t), (t.flags |= 1), We(e, t, r, i), t.child)
    );
  }
  function du(e, t, n, r, i) {
    if (e === null) {
      var l = n.type;
      return typeof l == "function" &&
        !zl(l) &&
        l.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = l), fu(e, t, l, r, i))
        : ((e = zi(n.type, null, r, t, t.mode, i)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((l = e.child), (e.lanes & i) === 0)) {
      var d = l.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : sr), n(d, r) && e.ref === t.ref)
      )
        return _t(e, t, i);
    }
    return (
      (t.flags |= 1),
      (e = Gt(l, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function fu(e, t, n, r, i) {
    if (e !== null) {
      var l = e.memoizedProps;
      if (sr(l, r) && e.ref === t.ref)
        if (((Ze = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
          (e.flags & 131072) !== 0 && (Ze = !0);
        else return (t.lanes = e.lanes), _t(e, t, i);
    }
    return pl(e, t, n, r, i);
  }
  function pu(e, t, n) {
    var r = t.pendingProps,
      i = r.children,
      l = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if ((t.mode & 1) === 0)
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          pe(In, it),
          (it |= n);
      else {
        if ((n & 1073741824) === 0)
          return (
            (e = l !== null ? l.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            pe(In, it),
            (it |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = l !== null ? l.baseLanes : n),
          pe(In, it),
          (it |= r);
      }
    else
      l !== null ? ((r = l.baseLanes | n), (t.memoizedState = null)) : (r = n),
        pe(In, it),
        (it |= r);
    return We(e, t, i, n), t.child;
  }
  function hu(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function pl(e, t, n, r, i) {
    var l = Ye(n) ? en : Ae.current;
    return (
      (l = Cn(t, l)),
      _n(t, i),
      (n = rl(e, t, n, r, l, i)),
      (r = il()),
      e !== null && !Ze
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~i),
          _t(e, t, i))
        : (ke && r && As(t), (t.flags |= 1), We(e, t, n, i), t.child)
    );
  }
  function gu(e, t, n, r, i) {
    if (Ye(n)) {
      var l = !0;
      si(t);
    } else l = !1;
    if ((_n(t, i), t.stateNode === null))
      Ni(e, t), ru(t, n, r), cl(t, n, r, i), (r = !0);
    else if (e === null) {
      var d = t.stateNode,
        p = t.memoizedProps;
      d.props = p;
      var v = d.context,
        j = n.contextType;
      typeof j == "object" && j !== null
        ? (j = at(j))
        : ((j = Ye(n) ? en : Ae.current), (j = Cn(t, j)));
      var O = n.getDerivedStateFromProps,
        R =
          typeof O == "function" ||
          typeof d.getSnapshotBeforeUpdate == "function";
      R ||
        (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
          typeof d.componentWillReceiveProps != "function") ||
        ((p !== r || v !== j) && iu(t, d, r, j)),
        (Bt = !1);
      var P = t.memoizedState;
      (d.state = P),
        hi(t, r, d, i),
        (v = t.memoizedState),
        p !== r || P !== v || Qe.current || Bt
          ? (typeof O == "function" && (ul(t, n, O, r), (v = t.memoizedState)),
            (p = Bt || nu(t, n, p, r, P, v, j))
              ? (R ||
                  (typeof d.UNSAFE_componentWillMount != "function" &&
                    typeof d.componentWillMount != "function") ||
                  (typeof d.componentWillMount == "function" &&
                    d.componentWillMount(),
                  typeof d.UNSAFE_componentWillMount == "function" &&
                    d.UNSAFE_componentWillMount()),
                typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof d.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = v)),
            (d.props = r),
            (d.state = v),
            (d.context = j),
            (r = p))
          : (typeof d.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (d = t.stateNode),
        _a(e, t),
        (p = t.memoizedProps),
        (j = t.type === t.elementType ? p : gt(t.type, p)),
        (d.props = j),
        (R = t.pendingProps),
        (P = d.context),
        (v = n.contextType),
        typeof v == "object" && v !== null
          ? (v = at(v))
          : ((v = Ye(n) ? en : Ae.current), (v = Cn(t, v)));
      var D = n.getDerivedStateFromProps;
      (O =
        typeof D == "function" ||
        typeof d.getSnapshotBeforeUpdate == "function") ||
        (typeof d.UNSAFE_componentWillReceiveProps != "function" &&
          typeof d.componentWillReceiveProps != "function") ||
        ((p !== R || P !== v) && iu(t, d, r, v)),
        (Bt = !1),
        (P = t.memoizedState),
        (d.state = P),
        hi(t, r, d, i);
      var $ = t.memoizedState;
      p !== R || P !== $ || Qe.current || Bt
        ? (typeof D == "function" && (ul(t, n, D, r), ($ = t.memoizedState)),
          (j = Bt || nu(t, n, j, r, P, $, v) || !1)
            ? (O ||
                (typeof d.UNSAFE_componentWillUpdate != "function" &&
                  typeof d.componentWillUpdate != "function") ||
                (typeof d.componentWillUpdate == "function" &&
                  d.componentWillUpdate(r, $, v),
                typeof d.UNSAFE_componentWillUpdate == "function" &&
                  d.UNSAFE_componentWillUpdate(r, $, v)),
              typeof d.componentDidUpdate == "function" && (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof d.componentDidUpdate != "function" ||
                (p === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 4),
              typeof d.getSnapshotBeforeUpdate != "function" ||
                (p === e.memoizedProps && P === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = $)),
          (d.props = r),
          (d.state = $),
          (d.context = v),
          (r = j))
        : (typeof d.componentDidUpdate != "function" ||
            (p === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 4),
          typeof d.getSnapshotBeforeUpdate != "function" ||
            (p === e.memoizedProps && P === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return hl(e, t, n, r, l, i);
  }
  function hl(e, t, n, r, i, l) {
    hu(e, t);
    var d = (t.flags & 128) !== 0;
    if (!r && !d) return i && wa(t, n, !1), _t(e, t, l);
    (r = t.stateNode), (of.current = t);
    var p =
      d && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && d
        ? ((t.child = On(t, e.child, null, l)), (t.child = On(t, null, p, l)))
        : We(e, t, p, l),
      (t.memoizedState = r.state),
      i && wa(t, n, !0),
      t.child
    );
  }
  function mu(e) {
    var t = e.stateNode;
    t.pendingContext
      ? ya(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && ya(e, t.context, !1),
      Xs(e, t.containerInfo);
  }
  function vu(e, t, n, r, i) {
    return Pn(), Hs(i), (t.flags |= 256), We(e, t, n, r), t.child;
  }
  var gl = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ml(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function yu(e, t, n) {
    var r = t.pendingProps,
      i = je.current,
      l = !1,
      d = (t.flags & 128) !== 0,
      p;
    if (
      ((p = d) ||
        (p = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
      p
        ? ((l = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (i |= 1),
      pe(je, i & 1),
      e === null)
    )
      return (
        Bs(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? ((t.mode & 1) === 0
              ? (t.lanes = 1)
              : e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824),
            null)
          : ((d = r.children),
            (e = r.fallback),
            l
              ? ((r = t.mode),
                (l = t.child),
                (d = { mode: "hidden", children: d }),
                (r & 1) === 0 && l !== null
                  ? ((l.childLanes = 0), (l.pendingProps = d))
                  : (l = Ii(d, r, 0, null)),
                (e = dn(e, r, n, null)),
                (l.return = t),
                (e.return = t),
                (l.sibling = e),
                (t.child = l),
                (t.child.memoizedState = ml(n)),
                (t.memoizedState = gl),
                e)
              : vl(t, d))
      );
    if (((i = e.memoizedState), i !== null && ((p = i.dehydrated), p !== null)))
      return af(e, t, d, r, p, i, n);
    if (l) {
      (l = r.fallback), (d = t.mode), (i = e.child), (p = i.sibling);
      var v = { mode: "hidden", children: r.children };
      return (
        (d & 1) === 0 && t.child !== i
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = v),
            (t.deletions = null))
          : ((r = Gt(i, v)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
        p !== null ? (l = Gt(p, l)) : ((l = dn(l, d, n, null)), (l.flags |= 2)),
        (l.return = t),
        (r.return = t),
        (r.sibling = l),
        (t.child = r),
        (r = l),
        (l = t.child),
        (d = e.child.memoizedState),
        (d =
          d === null
            ? ml(n)
            : {
                baseLanes: d.baseLanes | n,
                cachePool: null,
                transitions: d.transitions,
              }),
        (l.memoizedState = d),
        (l.childLanes = e.childLanes & ~n),
        (t.memoizedState = gl),
        r
      );
    }
    return (
      (l = e.child),
      (e = l.sibling),
      (r = Gt(l, { mode: "visible", children: r.children })),
      (t.mode & 1) === 0 && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function vl(e, t) {
    return (
      (t = Ii({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Si(e, t, n, r) {
    return (
      r !== null && Hs(r),
      On(t, e.child, null, n),
      (e = vl(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function af(e, t, n, r, i, l, d) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = dl(Error(o(422)))), Si(e, t, d, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((l = r.fallback),
          (i = t.mode),
          (r = Ii({ mode: "visible", children: r.children }, i, 0, null)),
          (l = dn(l, i, d, null)),
          (l.flags |= 2),
          (r.return = t),
          (l.return = t),
          (r.sibling = l),
          (t.child = r),
          (t.mode & 1) !== 0 && On(t, e.child, null, d),
          (t.child.memoizedState = ml(d)),
          (t.memoizedState = gl),
          l);
    if ((t.mode & 1) === 0) return Si(e, t, d, null);
    if (i.data === "$!") {
      if (((r = i.nextSibling && i.nextSibling.dataset), r)) var p = r.dgst;
      return (
        (r = p), (l = Error(o(419))), (r = dl(l, r, void 0)), Si(e, t, d, r)
      );
    }
    if (((p = (d & e.childLanes) !== 0), Ze || p)) {
      if (((r = ze), r !== null)) {
        switch (d & -d) {
          case 4:
            i = 2;
            break;
          case 16:
            i = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            i = 32;
            break;
          case 536870912:
            i = 268435456;
            break;
          default:
            i = 0;
        }
        (i = (i & (r.suspendedLanes | d)) !== 0 ? 0 : i),
          i !== 0 &&
            i !== l.retryLane &&
            ((l.retryLane = i), Ot(e, i), yt(r, e, i, -1));
      }
      return Fl(), (r = dl(Error(o(421)))), Si(e, t, d, r);
    }
    return i.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = kf.bind(null, e)),
        (i._reactRetry = t),
        null)
      : ((e = l.treeContext),
        (rt = $t(i.nextSibling)),
        (nt = t),
        (ke = !0),
        (ht = null),
        e !== null &&
          ((lt[ot++] = Lt),
          (lt[ot++] = Pt),
          (lt[ot++] = tn),
          (Lt = e.id),
          (Pt = e.overflow),
          (tn = t)),
        (t = vl(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function xu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ys(e.return, t, n);
  }
  function yl(e, t, n, r, i) {
    var l = e.memoizedState;
    l === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: i,
        })
      : ((l.isBackwards = t),
        (l.rendering = null),
        (l.renderingStartTime = 0),
        (l.last = r),
        (l.tail = n),
        (l.tailMode = i));
  }
  function wu(e, t, n) {
    var r = t.pendingProps,
      i = r.revealOrder,
      l = r.tail;
    if ((We(e, t, r.children, n), (r = je.current), (r & 2) !== 0))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && xu(e, n, t);
          else if (e.tag === 19) xu(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((pe(je, r), (t.mode & 1) === 0)) t.memoizedState = null;
    else
      switch (i) {
        case "forwards":
          for (n = t.child, i = null; n !== null; )
            (e = n.alternate),
              e !== null && gi(e) === null && (i = n),
              (n = n.sibling);
          (n = i),
            n === null
              ? ((i = t.child), (t.child = null))
              : ((i = n.sibling), (n.sibling = null)),
            yl(t, !1, i, n, l);
          break;
        case "backwards":
          for (n = null, i = t.child, t.child = null; i !== null; ) {
            if (((e = i.alternate), e !== null && gi(e) === null)) {
              t.child = i;
              break;
            }
            (e = i.sibling), (i.sibling = n), (n = i), (i = e);
          }
          yl(t, !0, n, null, l);
          break;
        case "together":
          yl(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ni(e, t) {
    (t.mode & 1) === 0 &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function _t(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (on |= t.lanes),
      (n & t.childLanes) === 0)
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(o(153));
    if (t.child !== null) {
      for (
        e = t.child, n = Gt(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = Gt(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function uf(e, t, n) {
    switch (t.tag) {
      case 3:
        mu(t), Pn();
        break;
      case 5:
        za(t);
        break;
      case 1:
        Ye(t.type) && si(t);
        break;
      case 4:
        Xs(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          i = t.memoizedProps.value;
        pe(di, r._currentValue), (r._currentValue = i);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (pe(je, je.current & 1), (t.flags |= 128), null)
            : (n & t.child.childLanes) !== 0
            ? yu(e, t, n)
            : (pe(je, je.current & 1),
              (e = _t(e, t, n)),
              e !== null ? e.sibling : null);
        pe(je, je.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), (e.flags & 128) !== 0)) {
          if (r) return wu(e, t, n);
          t.flags |= 128;
        }
        if (
          ((i = t.memoizedState),
          i !== null &&
            ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
          pe(je, je.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), pu(e, t, n);
    }
    return _t(e, t, n);
  }
  var ku, xl, Su, Nu;
  (ku = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  }),
    (xl = function () {}),
    (Su = function (e, t, n, r) {
      var i = e.memoizedProps;
      if (i !== r) {
        (e = t.stateNode), sn(kt.current);
        var l = null;
        switch (n) {
          case "input":
            (i = Yi(e, i)), (r = Yi(e, r)), (l = []);
            break;
          case "select":
            (i = M({}, i, { value: void 0 })),
              (r = M({}, r, { value: void 0 })),
              (l = []);
            break;
          case "textarea":
            (i = Xi(e, i)), (r = Xi(e, r)), (l = []);
            break;
          default:
            typeof i.onClick != "function" &&
              typeof r.onClick == "function" &&
              (e.onclick = ni);
        }
        qi(n, r);
        var d;
        n = null;
        for (j in i)
          if (!r.hasOwnProperty(j) && i.hasOwnProperty(j) && i[j] != null)
            if (j === "style") {
              var p = i[j];
              for (d in p) p.hasOwnProperty(d) && (n || (n = {}), (n[d] = ""));
            } else
              j !== "dangerouslySetInnerHTML" &&
                j !== "children" &&
                j !== "suppressContentEditableWarning" &&
                j !== "suppressHydrationWarning" &&
                j !== "autoFocus" &&
                (a.hasOwnProperty(j)
                  ? l || (l = [])
                  : (l = l || []).push(j, null));
        for (j in r) {
          var v = r[j];
          if (
            ((p = i != null ? i[j] : void 0),
            r.hasOwnProperty(j) && v !== p && (v != null || p != null))
          )
            if (j === "style")
              if (p) {
                for (d in p)
                  !p.hasOwnProperty(d) ||
                    (v && v.hasOwnProperty(d)) ||
                    (n || (n = {}), (n[d] = ""));
                for (d in v)
                  v.hasOwnProperty(d) &&
                    p[d] !== v[d] &&
                    (n || (n = {}), (n[d] = v[d]));
              } else n || (l || (l = []), l.push(j, n)), (n = v);
            else
              j === "dangerouslySetInnerHTML"
                ? ((v = v ? v.__html : void 0),
                  (p = p ? p.__html : void 0),
                  v != null && p !== v && (l = l || []).push(j, v))
                : j === "children"
                ? (typeof v != "string" && typeof v != "number") ||
                  (l = l || []).push(j, "" + v)
                : j !== "suppressContentEditableWarning" &&
                  j !== "suppressHydrationWarning" &&
                  (a.hasOwnProperty(j)
                    ? (v != null && j === "onScroll" && ge("scroll", e),
                      l || p === v || (l = []))
                    : (l = l || []).push(j, v));
        }
        n && (l = l || []).push("style", n);
        var j = l;
        (t.updateQueue = j) && (t.flags |= 4);
      }
    }),
    (Nu = function (e, t, n, r) {
      n !== r && (t.flags |= 4);
    });
  function wr(e, t) {
    if (!ke)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ve(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags & 14680064),
          (r |= i.flags & 14680064),
          (i.return = e),
          (i = i.sibling);
    else
      for (i = e.child; i !== null; )
        (n |= i.lanes | i.childLanes),
          (r |= i.subtreeFlags),
          (r |= i.flags),
          (i.return = e),
          (i = i.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function cf(e, t, n) {
    var r = t.pendingProps;
    switch ((Us(t), t.tag)) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ve(t), null;
      case 1:
        return Ye(t.type) && ii(), Ve(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Tn(),
          me(Qe),
          me(Ae),
          el(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (ui(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), ht !== null && (Rl(ht), (ht = null)))),
          xl(e, t),
          Ve(t),
          null
        );
      case 5:
        Js(t);
        var i = sn(gr.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Su(e, t, n, r, i),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(o(166));
            return Ve(t), null;
          }
          if (((e = sn(kt.current)), ui(t))) {
            (r = t.stateNode), (n = t.type);
            var l = t.memoizedProps;
            switch (((r[wt] = t), (r[cr] = l), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                ge("cancel", r), ge("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < or.length; i++) ge(or[i], r);
                break;
              case "source":
                ge("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ge("error", r), ge("load", r);
                break;
              case "details":
                ge("toggle", r);
                break;
              case "input":
                no(r, l), ge("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!l.multiple }),
                  ge("invalid", r);
                break;
              case "textarea":
                so(r, l), ge("invalid", r);
            }
            qi(n, l), (i = null);
            for (var d in l)
              if (l.hasOwnProperty(d)) {
                var p = l[d];
                d === "children"
                  ? typeof p == "string"
                    ? r.textContent !== p &&
                      (l.suppressHydrationWarning !== !0 &&
                        ti(r.textContent, p, e),
                      (i = ["children", p]))
                    : typeof p == "number" &&
                      r.textContent !== "" + p &&
                      (l.suppressHydrationWarning !== !0 &&
                        ti(r.textContent, p, e),
                      (i = ["children", "" + p]))
                  : a.hasOwnProperty(d) &&
                    p != null &&
                    d === "onScroll" &&
                    ge("scroll", r);
              }
            switch (n) {
              case "input":
                Tr(r), io(r, l, !0);
                break;
              case "textarea":
                Tr(r), oo(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof l.onClick == "function" && (r.onclick = ni);
            }
            (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (d = i.nodeType === 9 ? i : i.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = ao(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = d.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = d.createElement(n, { is: r.is }))
                  : ((e = d.createElement(n)),
                    n === "select" &&
                      ((d = e),
                      r.multiple
                        ? (d.multiple = !0)
                        : r.size && (d.size = r.size)))
                : (e = d.createElementNS(e, n)),
              (e[wt] = t),
              (e[cr] = r),
              ku(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((d = es(n, r)), n)) {
                case "dialog":
                  ge("cancel", e), ge("close", e), (i = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ge("load", e), (i = r);
                  break;
                case "video":
                case "audio":
                  for (i = 0; i < or.length; i++) ge(or[i], e);
                  i = r;
                  break;
                case "source":
                  ge("error", e), (i = r);
                  break;
                case "img":
                case "image":
                case "link":
                  ge("error", e), ge("load", e), (i = r);
                  break;
                case "details":
                  ge("toggle", e), (i = r);
                  break;
                case "input":
                  no(e, r), (i = Yi(e, r)), ge("invalid", e);
                  break;
                case "option":
                  i = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (i = M({}, r, { value: void 0 })),
                    ge("invalid", e);
                  break;
                case "textarea":
                  so(e, r), (i = Xi(e, r)), ge("invalid", e);
                  break;
                default:
                  i = r;
              }
              qi(n, i), (p = i);
              for (l in p)
                if (p.hasOwnProperty(l)) {
                  var v = p[l];
                  l === "style"
                    ? fo(e, v)
                    : l === "dangerouslySetInnerHTML"
                    ? ((v = v ? v.__html : void 0), v != null && uo(e, v))
                    : l === "children"
                    ? typeof v == "string"
                      ? (n !== "textarea" || v !== "") && Vn(e, v)
                      : typeof v == "number" && Vn(e, "" + v)
                    : l !== "suppressContentEditableWarning" &&
                      l !== "suppressHydrationWarning" &&
                      l !== "autoFocus" &&
                      (a.hasOwnProperty(l)
                        ? v != null && l === "onScroll" && ge("scroll", e)
                        : v != null && de(e, l, v, d));
                }
              switch (n) {
                case "input":
                  Tr(e), io(e, r, !1);
                  break;
                case "textarea":
                  Tr(e), oo(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + ae(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (l = r.value),
                    l != null
                      ? pn(e, !!r.multiple, l, !1)
                      : r.defaultValue != null &&
                        pn(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof i.onClick == "function" && (e.onclick = ni);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ve(t), null;
      case 6:
        if (e && t.stateNode != null) Nu(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(o(166));
          if (((n = sn(gr.current)), sn(kt.current), ui(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[wt] = t),
              (l = r.nodeValue !== n) && ((e = nt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ti(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ti(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            l && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[wt] = t),
              (t.stateNode = r);
        }
        return Ve(t), null;
      case 13:
        if (
          (me(je),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (ke && rt !== null && (t.mode & 1) !== 0 && (t.flags & 128) === 0)
            Ea(), Pn(), (t.flags |= 98560), (l = !1);
          else if (((l = ui(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(o(317));
              l[wt] = t;
            } else
              Pn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            Ve(t), (l = !1);
          } else ht !== null && (Rl(ht), (ht = null)), (l = !0);
          if (!l) return t.flags & 65536 ? t : null;
        }
        return (t.flags & 128) !== 0
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              (t.mode & 1) !== 0 &&
                (e === null || (je.current & 1) !== 0
                  ? Te === 0 && (Te = 3)
                  : Fl())),
            t.updateQueue !== null && (t.flags |= 4),
            Ve(t),
            null);
      case 4:
        return (
          Tn(),
          xl(e, t),
          e === null && ar(t.stateNode.containerInfo),
          Ve(t),
          null
        );
      case 10:
        return Qs(t.type._context), Ve(t), null;
      case 17:
        return Ye(t.type) && ii(), Ve(t), null;
      case 19:
        if ((me(je), (l = t.memoizedState), l === null)) return Ve(t), null;
        if (((r = (t.flags & 128) !== 0), (d = l.rendering), d === null))
          if (r) wr(l, !1);
          else {
            if (Te !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((d = gi(e)), d !== null)) {
                  for (
                    t.flags |= 128,
                      wr(l, !1),
                      r = d.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (l = n),
                      (e = r),
                      (l.flags &= 14680066),
                      (d = l.alternate),
                      d === null
                        ? ((l.childLanes = 0),
                          (l.lanes = e),
                          (l.child = null),
                          (l.subtreeFlags = 0),
                          (l.memoizedProps = null),
                          (l.memoizedState = null),
                          (l.updateQueue = null),
                          (l.dependencies = null),
                          (l.stateNode = null))
                        : ((l.childLanes = d.childLanes),
                          (l.lanes = d.lanes),
                          (l.child = d.child),
                          (l.subtreeFlags = 0),
                          (l.deletions = null),
                          (l.memoizedProps = d.memoizedProps),
                          (l.memoizedState = d.memoizedState),
                          (l.updateQueue = d.updateQueue),
                          (l.type = d.type),
                          (e = d.dependencies),
                          (l.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return pe(je, (je.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null &&
              Le() > Dn &&
              ((t.flags |= 128), (r = !0), wr(l, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = gi(d)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                wr(l, !0),
                l.tail === null &&
                  l.tailMode === "hidden" &&
                  !d.alternate &&
                  !ke)
              )
                return Ve(t), null;
            } else
              2 * Le() - l.renderingStartTime > Dn &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), wr(l, !1), (t.lanes = 4194304));
          l.isBackwards
            ? ((d.sibling = t.child), (t.child = d))
            : ((n = l.last),
              n !== null ? (n.sibling = d) : (t.child = d),
              (l.last = d));
        }
        return l.tail !== null
          ? ((t = l.tail),
            (l.rendering = t),
            (l.tail = t.sibling),
            (l.renderingStartTime = Le()),
            (t.sibling = null),
            (n = je.current),
            pe(je, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ve(t), null);
      case 22:
      case 23:
        return (
          Tl(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && (t.mode & 1) !== 0
            ? (it & 1073741824) !== 0 &&
              (Ve(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ve(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function df(e, t) {
    switch ((Us(t), t.tag)) {
      case 1:
        return (
          Ye(t.type) && ii(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Tn(),
          me(Qe),
          me(Ae),
          el(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 5:
        return Js(t), null;
      case 13:
        if (
          (me(je), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(o(340));
          Pn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return me(je), null;
      case 4:
        return Tn(), null;
      case 10:
        return Qs(t.type._context), null;
      case 22:
      case 23:
        return Tl(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var ji = !1,
    Be = !1,
    ff = typeof WeakSet == "function" ? WeakSet : Set,
    b = null;
  function zn(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Ee(e, t, r);
        }
      else n.current = null;
  }
  function wl(e, t, n) {
    try {
      n();
    } catch (r) {
      Ee(e, t, r);
    }
  }
  var ju = !1;
  function pf(e, t) {
    if (((Ts = Hr), (e = na()), js(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var i = r.anchorOffset,
              l = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, l.nodeType;
            } catch {
              n = null;
              break e;
            }
            var d = 0,
              p = -1,
              v = -1,
              j = 0,
              O = 0,
              R = e,
              P = null;
            t: for (;;) {
              for (
                var D;
                R !== n || (i !== 0 && R.nodeType !== 3) || (p = d + i),
                  R !== l || (r !== 0 && R.nodeType !== 3) || (v = d + r),
                  R.nodeType === 3 && (d += R.nodeValue.length),
                  (D = R.firstChild) !== null;

              )
                (P = R), (R = D);
              for (;;) {
                if (R === e) break t;
                if (
                  (P === n && ++j === i && (p = d),
                  P === l && ++O === r && (v = d),
                  (D = R.nextSibling) !== null)
                )
                  break;
                (R = P), (P = R.parentNode);
              }
              R = D;
            }
            n = p === -1 || v === -1 ? null : { start: p, end: v };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Fs = { focusedElem: e, selectionRange: n }, Hr = !1, b = t;
      b !== null;

    )
      if (((t = b), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (b = e);
      else
        for (; b !== null; ) {
          t = b;
          try {
            var $ = t.alternate;
            if ((t.flags & 1024) !== 0)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if ($ !== null) {
                    var A = $.memoizedProps,
                      Pe = $.memoizedState,
                      S = t.stateNode,
                      y = S.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? A : gt(t.type, A),
                        Pe
                      );
                    S.__reactInternalSnapshotBeforeUpdate = y;
                  }
                  break;
                case 3:
                  var N = t.stateNode.containerInfo;
                  N.nodeType === 1
                    ? (N.textContent = "")
                    : N.nodeType === 9 &&
                      N.documentElement &&
                      N.removeChild(N.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(o(163));
              }
          } catch (_) {
            Ee(t, t.return, _);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (b = e);
            break;
          }
          b = t.return;
        }
    return ($ = ju), (ju = !1), $;
  }
  function kr(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var i = (r = r.next);
      do {
        if ((i.tag & e) === e) {
          var l = i.destroy;
          (i.destroy = void 0), l !== void 0 && wl(t, n, l);
        }
        i = i.next;
      } while (i !== r);
    }
  }
  function Ci(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function kl(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Cu(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Cu(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[wt],
          delete t[cr],
          delete t[Ms],
          delete t[Yd],
          delete t[Zd])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Eu(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function Lu(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Eu(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Sl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = ni));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Sl(e, t, n), e = e.sibling; e !== null; )
        Sl(e, t, n), (e = e.sibling);
  }
  function Nl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Nl(e, t, n), e = e.sibling; e !== null; )
        Nl(e, t, n), (e = e.sibling);
  }
  var Me = null,
    mt = !1;
  function Wt(e, t, n) {
    for (n = n.child; n !== null; ) Pu(e, t, n), (n = n.sibling);
  }
  function Pu(e, t, n) {
    if (xt && typeof xt.onCommitFiberUnmount == "function")
      try {
        xt.onCommitFiberUnmount(br, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Be || zn(n, t);
      case 6:
        var r = Me,
          i = mt;
        (Me = null),
          Wt(e, t, n),
          (Me = r),
          (mt = i),
          Me !== null &&
            (mt
              ? ((e = Me),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : Me.removeChild(n.stateNode));
        break;
      case 18:
        Me !== null &&
          (mt
            ? ((e = Me),
              (n = n.stateNode),
              e.nodeType === 8
                ? Ds(e.parentNode, n)
                : e.nodeType === 1 && Ds(e, n),
              qn(e))
            : Ds(Me, n.stateNode));
        break;
      case 4:
        (r = Me),
          (i = mt),
          (Me = n.stateNode.containerInfo),
          (mt = !0),
          Wt(e, t, n),
          (Me = r),
          (mt = i);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Be &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          i = r = r.next;
          do {
            var l = i,
              d = l.destroy;
            (l = l.tag),
              d !== void 0 && ((l & 2) !== 0 || (l & 4) !== 0) && wl(n, t, d),
              (i = i.next);
          } while (i !== r);
        }
        Wt(e, t, n);
        break;
      case 1:
        if (
          !Be &&
          (zn(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (p) {
            Ee(n, t, p);
          }
        Wt(e, t, n);
        break;
      case 21:
        Wt(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Be = (r = Be) || n.memoizedState !== null), Wt(e, t, n), (Be = r))
          : Wt(e, t, n);
        break;
      default:
        Wt(e, t, n);
    }
  }
  function Ou(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new ff()),
        t.forEach(function (r) {
          var i = Sf.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(i, i));
        });
    }
  }
  function vt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
          var l = e,
            d = t,
            p = d;
          e: for (; p !== null; ) {
            switch (p.tag) {
              case 5:
                (Me = p.stateNode), (mt = !1);
                break e;
              case 3:
                (Me = p.stateNode.containerInfo), (mt = !0);
                break e;
              case 4:
                (Me = p.stateNode.containerInfo), (mt = !0);
                break e;
            }
            p = p.return;
          }
          if (Me === null) throw Error(o(160));
          Pu(l, d, i), (Me = null), (mt = !1);
          var v = i.alternate;
          v !== null && (v.return = null), (i.return = null);
        } catch (j) {
          Ee(i, t, j);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) Ru(t, e), (t = t.sibling);
  }
  function Ru(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((vt(t, e), Nt(e), r & 4)) {
          try {
            kr(3, e, e.return), Ci(3, e);
          } catch (A) {
            Ee(e, e.return, A);
          }
          try {
            kr(5, e, e.return);
          } catch (A) {
            Ee(e, e.return, A);
          }
        }
        break;
      case 1:
        vt(t, e), Nt(e), r & 512 && n !== null && zn(n, n.return);
        break;
      case 5:
        if (
          (vt(t, e),
          Nt(e),
          r & 512 && n !== null && zn(n, n.return),
          e.flags & 32)
        ) {
          var i = e.stateNode;
          try {
            Vn(i, "");
          } catch (A) {
            Ee(e, e.return, A);
          }
        }
        if (r & 4 && ((i = e.stateNode), i != null)) {
          var l = e.memoizedProps,
            d = n !== null ? n.memoizedProps : l,
            p = e.type,
            v = e.updateQueue;
          if (((e.updateQueue = null), v !== null))
            try {
              p === "input" && l.type === "radio" && l.name != null && ro(i, l),
                es(p, d);
              var j = es(p, l);
              for (d = 0; d < v.length; d += 2) {
                var O = v[d],
                  R = v[d + 1];
                O === "style"
                  ? fo(i, R)
                  : O === "dangerouslySetInnerHTML"
                  ? uo(i, R)
                  : O === "children"
                  ? Vn(i, R)
                  : de(i, O, R, j);
              }
              switch (p) {
                case "input":
                  Zi(i, l);
                  break;
                case "textarea":
                  lo(i, l);
                  break;
                case "select":
                  var P = i._wrapperState.wasMultiple;
                  i._wrapperState.wasMultiple = !!l.multiple;
                  var D = l.value;
                  D != null
                    ? pn(i, !!l.multiple, D, !1)
                    : P !== !!l.multiple &&
                      (l.defaultValue != null
                        ? pn(i, !!l.multiple, l.defaultValue, !0)
                        : pn(i, !!l.multiple, l.multiple ? [] : "", !1));
              }
              i[cr] = l;
            } catch (A) {
              Ee(e, e.return, A);
            }
        }
        break;
      case 6:
        if ((vt(t, e), Nt(e), r & 4)) {
          if (e.stateNode === null) throw Error(o(162));
          (i = e.stateNode), (l = e.memoizedProps);
          try {
            i.nodeValue = l;
          } catch (A) {
            Ee(e, e.return, A);
          }
        }
        break;
      case 3:
        if (
          (vt(t, e), Nt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            qn(t.containerInfo);
          } catch (A) {
            Ee(e, e.return, A);
          }
        break;
      case 4:
        vt(t, e), Nt(e);
        break;
      case 13:
        vt(t, e),
          Nt(e),
          (i = e.child),
          i.flags & 8192 &&
            ((l = i.memoizedState !== null),
            (i.stateNode.isHidden = l),
            !l ||
              (i.alternate !== null && i.alternate.memoizedState !== null) ||
              (El = Le())),
          r & 4 && Ou(e);
        break;
      case 22:
        if (
          ((O = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Be = (j = Be) || O), vt(t, e), (Be = j)) : vt(t, e),
          Nt(e),
          r & 8192)
        ) {
          if (
            ((j = e.memoizedState !== null),
            (e.stateNode.isHidden = j) && !O && (e.mode & 1) !== 0)
          )
            for (b = e, O = e.child; O !== null; ) {
              for (R = b = O; b !== null; ) {
                switch (((P = b), (D = P.child), P.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    kr(4, P, P.return);
                    break;
                  case 1:
                    zn(P, P.return);
                    var $ = P.stateNode;
                    if (typeof $.componentWillUnmount == "function") {
                      (r = P), (n = P.return);
                      try {
                        (t = r),
                          ($.props = t.memoizedProps),
                          ($.state = t.memoizedState),
                          $.componentWillUnmount();
                      } catch (A) {
                        Ee(r, n, A);
                      }
                    }
                    break;
                  case 5:
                    zn(P, P.return);
                    break;
                  case 22:
                    if (P.memoizedState !== null) {
                      Fu(R);
                      continue;
                    }
                }
                D !== null ? ((D.return = P), (b = D)) : Fu(R);
              }
              O = O.sibling;
            }
          e: for (O = null, R = e; ; ) {
            if (R.tag === 5) {
              if (O === null) {
                O = R;
                try {
                  (i = R.stateNode),
                    j
                      ? ((l = i.style),
                        typeof l.setProperty == "function"
                          ? l.setProperty("display", "none", "important")
                          : (l.display = "none"))
                      : ((p = R.stateNode),
                        (v = R.memoizedProps.style),
                        (d =
                          v != null && v.hasOwnProperty("display")
                            ? v.display
                            : null),
                        (p.style.display = co("display", d)));
                } catch (A) {
                  Ee(e, e.return, A);
                }
              }
            } else if (R.tag === 6) {
              if (O === null)
                try {
                  R.stateNode.nodeValue = j ? "" : R.memoizedProps;
                } catch (A) {
                  Ee(e, e.return, A);
                }
            } else if (
              ((R.tag !== 22 && R.tag !== 23) ||
                R.memoizedState === null ||
                R === e) &&
              R.child !== null
            ) {
              (R.child.return = R), (R = R.child);
              continue;
            }
            if (R === e) break e;
            for (; R.sibling === null; ) {
              if (R.return === null || R.return === e) break e;
              O === R && (O = null), (R = R.return);
            }
            O === R && (O = null),
              (R.sibling.return = R.return),
              (R = R.sibling);
          }
        }
        break;
      case 19:
        vt(t, e), Nt(e), r & 4 && Ou(e);
        break;
      case 21:
        break;
      default:
        vt(t, e), Nt(e);
    }
  }
  function Nt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Eu(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(o(160));
        }
        switch (r.tag) {
          case 5:
            var i = r.stateNode;
            r.flags & 32 && (Vn(i, ""), (r.flags &= -33));
            var l = Lu(e);
            Nl(e, l, i);
            break;
          case 3:
          case 4:
            var d = r.stateNode.containerInfo,
              p = Lu(e);
            Sl(e, p, d);
            break;
          default:
            throw Error(o(161));
        }
      } catch (v) {
        Ee(e, e.return, v);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function hf(e, t, n) {
    (b = e), _u(e);
  }
  function _u(e, t, n) {
    for (var r = (e.mode & 1) !== 0; b !== null; ) {
      var i = b,
        l = i.child;
      if (i.tag === 22 && r) {
        var d = i.memoizedState !== null || ji;
        if (!d) {
          var p = i.alternate,
            v = (p !== null && p.memoizedState !== null) || Be;
          p = ji;
          var j = Be;
          if (((ji = d), (Be = v) && !j))
            for (b = i; b !== null; )
              (d = b),
                (v = d.child),
                d.tag === 22 && d.memoizedState !== null
                  ? zu(i)
                  : v !== null
                  ? ((v.return = d), (b = v))
                  : zu(i);
          for (; l !== null; ) (b = l), _u(l), (l = l.sibling);
          (b = i), (ji = p), (Be = j);
        }
        Tu(e);
      } else
        (i.subtreeFlags & 8772) !== 0 && l !== null
          ? ((l.return = i), (b = l))
          : Tu(e);
    }
  }
  function Tu(e) {
    for (; b !== null; ) {
      var t = b;
      if ((t.flags & 8772) !== 0) {
        var n = t.alternate;
        try {
          if ((t.flags & 8772) !== 0)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Be || Ci(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Be)
                  if (n === null) r.componentDidMount();
                  else {
                    var i =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : gt(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      i,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var l = t.updateQueue;
                l !== null && Fa(t, l, r);
                break;
              case 3:
                var d = t.updateQueue;
                if (d !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Fa(t, d, n);
                }
                break;
              case 5:
                var p = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = p;
                  var v = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      v.autoFocus && n.focus();
                      break;
                    case "img":
                      v.src && (n.src = v.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var j = t.alternate;
                  if (j !== null) {
                    var O = j.memoizedState;
                    if (O !== null) {
                      var R = O.dehydrated;
                      R !== null && qn(R);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(o(163));
            }
          Be || (t.flags & 512 && kl(t));
        } catch (P) {
          Ee(t, t.return, P);
        }
      }
      if (t === e) {
        b = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (b = n);
        break;
      }
      b = t.return;
    }
  }
  function Fu(e) {
    for (; b !== null; ) {
      var t = b;
      if (t === e) {
        b = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (b = n);
        break;
      }
      b = t.return;
    }
  }
  function zu(e) {
    for (; b !== null; ) {
      var t = b;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ci(4, t);
            } catch (v) {
              Ee(t, n, v);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var i = t.return;
              try {
                r.componentDidMount();
              } catch (v) {
                Ee(t, i, v);
              }
            }
            var l = t.return;
            try {
              kl(t);
            } catch (v) {
              Ee(t, l, v);
            }
            break;
          case 5:
            var d = t.return;
            try {
              kl(t);
            } catch (v) {
              Ee(t, d, v);
            }
        }
      } catch (v) {
        Ee(t, t.return, v);
      }
      if (t === e) {
        b = null;
        break;
      }
      var p = t.sibling;
      if (p !== null) {
        (p.return = t.return), (b = p);
        break;
      }
      b = t.return;
    }
  }
  var gf = Math.ceil,
    Ei = ee.ReactCurrentDispatcher,
    jl = ee.ReactCurrentOwner,
    ct = ee.ReactCurrentBatchConfig,
    ne = 0,
    ze = null,
    Oe = null,
    be = 0,
    it = 0,
    In = At(0),
    Te = 0,
    Sr = null,
    on = 0,
    Li = 0,
    Cl = 0,
    Nr = null,
    Ge = null,
    El = 0,
    Dn = 1 / 0,
    Tt = null,
    Pi = !1,
    Ll = null,
    Kt = null,
    Oi = !1,
    Qt = null,
    Ri = 0,
    jr = 0,
    Pl = null,
    _i = -1,
    Ti = 0;
  function Ke() {
    return (ne & 6) !== 0 ? Le() : _i !== -1 ? _i : (_i = Le());
  }
  function Yt(e) {
    return (e.mode & 1) === 0
      ? 1
      : (ne & 2) !== 0 && be !== 0
      ? be & -be
      : Xd.transition !== null
      ? (Ti === 0 && (Ti = Lo()), Ti)
      : ((e = ue),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Do(e.type))),
        e);
  }
  function yt(e, t, n, r) {
    if (50 < jr) throw ((jr = 0), (Pl = null), Error(o(185)));
    Yn(e, n, r),
      ((ne & 2) === 0 || e !== ze) &&
        (e === ze && ((ne & 2) === 0 && (Li |= n), Te === 4 && Zt(e, be)),
        Xe(e, r),
        n === 1 &&
          ne === 0 &&
          (t.mode & 1) === 0 &&
          ((Dn = Le() + 500), li && Vt()));
  }
  function Xe(e, t) {
    var n = e.callbackNode;
    Xc(e, t);
    var r = Ur(e, e === ze ? be : 0);
    if (r === 0)
      n !== null && jo(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && jo(n), t === 1))
        e.tag === 0 ? Gd(Du.bind(null, e)) : ka(Du.bind(null, e)),
          Kd(function () {
            (ne & 6) === 0 && Vt();
          }),
          (n = null);
      else {
        switch (Po(r)) {
          case 1:
            n = os;
            break;
          case 4:
            n = Co;
            break;
          case 16:
            n = Mr;
            break;
          case 536870912:
            n = Eo;
            break;
          default:
            n = Mr;
        }
        n = Hu(n, Iu.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Iu(e, t) {
    if (((_i = -1), (Ti = 0), (ne & 6) !== 0)) throw Error(o(327));
    var n = e.callbackNode;
    if (Mn() && e.callbackNode !== n) return null;
    var r = Ur(e, e === ze ? be : 0);
    if (r === 0) return null;
    if ((r & 30) !== 0 || (r & e.expiredLanes) !== 0 || t) t = Fi(e, r);
    else {
      t = r;
      var i = ne;
      ne |= 2;
      var l = bu();
      (ze !== e || be !== t) && ((Tt = null), (Dn = Le() + 500), un(e, t));
      do
        try {
          yf();
          break;
        } catch (p) {
          Mu(e, p);
        }
      while (!0);
      Ks(),
        (Ei.current = l),
        (ne = i),
        Oe !== null ? (t = 0) : ((ze = null), (be = 0), (t = Te));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((i = as(e)), i !== 0 && ((r = i), (t = Ol(e, i)))),
        t === 1)
      )
        throw ((n = Sr), un(e, 0), Zt(e, r), Xe(e, Le()), n);
      if (t === 6) Zt(e, r);
      else {
        if (
          ((i = e.current.alternate),
          (r & 30) === 0 &&
            !mf(i) &&
            ((t = Fi(e, r)),
            t === 2 && ((l = as(e)), l !== 0 && ((r = l), (t = Ol(e, l)))),
            t === 1))
        )
          throw ((n = Sr), un(e, 0), Zt(e, r), Xe(e, Le()), n);
        switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(o(345));
          case 2:
            cn(e, Ge, Tt);
            break;
          case 3:
            if (
              (Zt(e, r),
              (r & 130023424) === r && ((t = El + 500 - Le()), 10 < t))
            ) {
              if (Ur(e, 0) !== 0) break;
              if (((i = e.suspendedLanes), (i & r) !== r)) {
                Ke(), (e.pingedLanes |= e.suspendedLanes & i);
                break;
              }
              e.timeoutHandle = Is(cn.bind(null, e, Ge, Tt), t);
              break;
            }
            cn(e, Ge, Tt);
            break;
          case 4:
            if ((Zt(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, i = -1; 0 < r; ) {
              var d = 31 - ft(r);
              (l = 1 << d), (d = t[d]), d > i && (i = d), (r &= ~l);
            }
            if (
              ((r = i),
              (r = Le() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * gf(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = Is(cn.bind(null, e, Ge, Tt), r);
              break;
            }
            cn(e, Ge, Tt);
            break;
          case 5:
            cn(e, Ge, Tt);
            break;
          default:
            throw Error(o(329));
        }
      }
    }
    return Xe(e, Le()), e.callbackNode === n ? Iu.bind(null, e) : null;
  }
  function Ol(e, t) {
    var n = Nr;
    return (
      e.current.memoizedState.isDehydrated && (un(e, t).flags |= 256),
      (e = Fi(e, t)),
      e !== 2 && ((t = Ge), (Ge = n), t !== null && Rl(t)),
      e
    );
  }
  function Rl(e) {
    Ge === null ? (Ge = e) : Ge.push.apply(Ge, e);
  }
  function mf(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var i = n[r],
              l = i.getSnapshot;
            i = i.value;
            try {
              if (!pt(l(), i)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Zt(e, t) {
    for (
      t &= ~Cl,
        t &= ~Li,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - ft(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function Du(e) {
    if ((ne & 6) !== 0) throw Error(o(327));
    Mn();
    var t = Ur(e, 0);
    if ((t & 1) === 0) return Xe(e, Le()), null;
    var n = Fi(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = as(e);
      r !== 0 && ((t = r), (n = Ol(e, r)));
    }
    if (n === 1) throw ((n = Sr), un(e, 0), Zt(e, t), Xe(e, Le()), n);
    if (n === 6) throw Error(o(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      cn(e, Ge, Tt),
      Xe(e, Le()),
      null
    );
  }
  function _l(e, t) {
    var n = ne;
    ne |= 1;
    try {
      return e(t);
    } finally {
      (ne = n), ne === 0 && ((Dn = Le() + 500), li && Vt());
    }
  }
  function an(e) {
    Qt !== null && Qt.tag === 0 && (ne & 6) === 0 && Mn();
    var t = ne;
    ne |= 1;
    var n = ct.transition,
      r = ue;
    try {
      if (((ct.transition = null), (ue = 1), e)) return e();
    } finally {
      (ue = r), (ct.transition = n), (ne = t), (ne & 6) === 0 && Vt();
    }
  }
  function Tl() {
    (it = In.current), me(In);
  }
  function un(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), Wd(n)), Oe !== null))
      for (n = Oe.return; n !== null; ) {
        var r = n;
        switch ((Us(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && ii();
            break;
          case 3:
            Tn(), me(Qe), me(Ae), el();
            break;
          case 5:
            Js(r);
            break;
          case 4:
            Tn();
            break;
          case 13:
            me(je);
            break;
          case 19:
            me(je);
            break;
          case 10:
            Qs(r.type._context);
            break;
          case 22:
          case 23:
            Tl();
        }
        n = n.return;
      }
    if (
      ((ze = e),
      (Oe = e = Gt(e.current, null)),
      (be = it = t),
      (Te = 0),
      (Sr = null),
      (Cl = Li = on = 0),
      (Ge = Nr = null),
      rn !== null)
    ) {
      for (t = 0; t < rn.length; t++)
        if (((n = rn[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var i = r.next,
            l = n.pending;
          if (l !== null) {
            var d = l.next;
            (l.next = i), (r.next = d);
          }
          n.pending = r;
        }
      rn = null;
    }
    return e;
  }
  function Mu(e, t) {
    do {
      var n = Oe;
      try {
        if ((Ks(), (mi.current = wi), vi)) {
          for (var r = Ce.memoizedState; r !== null; ) {
            var i = r.queue;
            i !== null && (i.pending = null), (r = r.next);
          }
          vi = !1;
        }
        if (
          ((ln = 0),
          (Fe = _e = Ce = null),
          (mr = !1),
          (vr = 0),
          (jl.current = null),
          n === null || n.return === null)
        ) {
          (Te = 1), (Sr = t), (Oe = null);
          break;
        }
        e: {
          var l = e,
            d = n.return,
            p = n,
            v = t;
          if (
            ((t = be),
            (p.flags |= 32768),
            v !== null && typeof v == "object" && typeof v.then == "function")
          ) {
            var j = v,
              O = p,
              R = O.tag;
            if ((O.mode & 1) === 0 && (R === 0 || R === 11 || R === 15)) {
              var P = O.alternate;
              P
                ? ((O.updateQueue = P.updateQueue),
                  (O.memoizedState = P.memoizedState),
                  (O.lanes = P.lanes))
                : ((O.updateQueue = null), (O.memoizedState = null));
            }
            var D = au(d);
            if (D !== null) {
              (D.flags &= -257),
                uu(D, d, p, l, t),
                D.mode & 1 && ou(l, j, t),
                (t = D),
                (v = j);
              var $ = t.updateQueue;
              if ($ === null) {
                var A = new Set();
                A.add(v), (t.updateQueue = A);
              } else $.add(v);
              break e;
            } else {
              if ((t & 1) === 0) {
                ou(l, j, t), Fl();
                break e;
              }
              v = Error(o(426));
            }
          } else if (ke && p.mode & 1) {
            var Pe = au(d);
            if (Pe !== null) {
              (Pe.flags & 65536) === 0 && (Pe.flags |= 256),
                uu(Pe, d, p, l, t),
                Hs(Fn(v, p));
              break e;
            }
          }
          (l = v = Fn(v, p)),
            Te !== 4 && (Te = 2),
            Nr === null ? (Nr = [l]) : Nr.push(l),
            (l = d);
          do {
            switch (l.tag) {
              case 3:
                (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                var S = su(l, v, t);
                Ta(l, S);
                break e;
              case 1:
                p = v;
                var y = l.type,
                  N = l.stateNode;
                if (
                  (l.flags & 128) === 0 &&
                  (typeof y.getDerivedStateFromError == "function" ||
                    (N !== null &&
                      typeof N.componentDidCatch == "function" &&
                      (Kt === null || !Kt.has(N))))
                ) {
                  (l.flags |= 65536), (t &= -t), (l.lanes |= t);
                  var _ = lu(l, p, t);
                  Ta(l, _);
                  break e;
                }
            }
            l = l.return;
          } while (l !== null);
        }
        Au(n);
      } catch (U) {
        (t = U), Oe === n && n !== null && (Oe = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function bu() {
    var e = Ei.current;
    return (Ei.current = wi), e === null ? wi : e;
  }
  function Fl() {
    (Te === 0 || Te === 3 || Te === 2) && (Te = 4),
      ze === null ||
        ((on & 268435455) === 0 && (Li & 268435455) === 0) ||
        Zt(ze, be);
  }
  function Fi(e, t) {
    var n = ne;
    ne |= 2;
    var r = bu();
    (ze !== e || be !== t) && ((Tt = null), un(e, t));
    do
      try {
        vf();
        break;
      } catch (i) {
        Mu(e, i);
      }
    while (!0);
    if ((Ks(), (ne = n), (Ei.current = r), Oe !== null)) throw Error(o(261));
    return (ze = null), (be = 0), Te;
  }
  function vf() {
    for (; Oe !== null; ) $u(Oe);
  }
  function yf() {
    for (; Oe !== null && !Vc(); ) $u(Oe);
  }
  function $u(e) {
    var t = Bu(e.alternate, e, it);
    (e.memoizedProps = e.pendingProps),
      t === null ? Au(e) : (Oe = t),
      (jl.current = null);
  }
  function Au(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), (t.flags & 32768) === 0)) {
        if (((n = cf(n, t, it)), n !== null)) {
          Oe = n;
          return;
        }
      } else {
        if (((n = df(n, t)), n !== null)) {
          (n.flags &= 32767), (Oe = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Te = 6), (Oe = null);
          return;
        }
      }
      if (((t = t.sibling), t !== null)) {
        Oe = t;
        return;
      }
      Oe = t = e;
    } while (t !== null);
    Te === 0 && (Te = 5);
  }
  function cn(e, t, n) {
    var r = ue,
      i = ct.transition;
    try {
      (ct.transition = null), (ue = 1), xf(e, t, n, r);
    } finally {
      (ct.transition = i), (ue = r);
    }
    return null;
  }
  function xf(e, t, n, r) {
    do Mn();
    while (Qt !== null);
    if ((ne & 6) !== 0) throw Error(o(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(o(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var l = n.lanes | n.childLanes;
    if (
      (Jc(e, l),
      e === ze && ((Oe = ze = null), (be = 0)),
      ((n.subtreeFlags & 2064) === 0 && (n.flags & 2064) === 0) ||
        Oi ||
        ((Oi = !0),
        Hu(Mr, function () {
          return Mn(), null;
        })),
      (l = (n.flags & 15990) !== 0),
      (n.subtreeFlags & 15990) !== 0 || l)
    ) {
      (l = ct.transition), (ct.transition = null);
      var d = ue;
      ue = 1;
      var p = ne;
      (ne |= 4),
        (jl.current = null),
        pf(e, n),
        Ru(n, e),
        bd(Fs),
        (Hr = !!Ts),
        (Fs = Ts = null),
        (e.current = n),
        hf(n),
        Bc(),
        (ne = p),
        (ue = d),
        (ct.transition = l);
    } else e.current = n;
    if (
      (Oi && ((Oi = !1), (Qt = e), (Ri = i)),
      (l = e.pendingLanes),
      l === 0 && (Kt = null),
      Kc(n.stateNode),
      Xe(e, Le()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
    if (Pi) throw ((Pi = !1), (e = Ll), (Ll = null), e);
    return (
      (Ri & 1) !== 0 && e.tag !== 0 && Mn(),
      (l = e.pendingLanes),
      (l & 1) !== 0 ? (e === Pl ? jr++ : ((jr = 0), (Pl = e))) : (jr = 0),
      Vt(),
      null
    );
  }
  function Mn() {
    if (Qt !== null) {
      var e = Po(Ri),
        t = ct.transition,
        n = ue;
      try {
        if (((ct.transition = null), (ue = 16 > e ? 16 : e), Qt === null))
          var r = !1;
        else {
          if (((e = Qt), (Qt = null), (Ri = 0), (ne & 6) !== 0))
            throw Error(o(331));
          var i = ne;
          for (ne |= 4, b = e.current; b !== null; ) {
            var l = b,
              d = l.child;
            if ((b.flags & 16) !== 0) {
              var p = l.deletions;
              if (p !== null) {
                for (var v = 0; v < p.length; v++) {
                  var j = p[v];
                  for (b = j; b !== null; ) {
                    var O = b;
                    switch (O.tag) {
                      case 0:
                      case 11:
                      case 15:
                        kr(8, O, l);
                    }
                    var R = O.child;
                    if (R !== null) (R.return = O), (b = R);
                    else
                      for (; b !== null; ) {
                        O = b;
                        var P = O.sibling,
                          D = O.return;
                        if ((Cu(O), O === j)) {
                          b = null;
                          break;
                        }
                        if (P !== null) {
                          (P.return = D), (b = P);
                          break;
                        }
                        b = D;
                      }
                  }
                }
                var $ = l.alternate;
                if ($ !== null) {
                  var A = $.child;
                  if (A !== null) {
                    $.child = null;
                    do {
                      var Pe = A.sibling;
                      (A.sibling = null), (A = Pe);
                    } while (A !== null);
                  }
                }
                b = l;
              }
            }
            if ((l.subtreeFlags & 2064) !== 0 && d !== null)
              (d.return = l), (b = d);
            else
              e: for (; b !== null; ) {
                if (((l = b), (l.flags & 2048) !== 0))
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      kr(9, l, l.return);
                  }
                var S = l.sibling;
                if (S !== null) {
                  (S.return = l.return), (b = S);
                  break e;
                }
                b = l.return;
              }
          }
          var y = e.current;
          for (b = y; b !== null; ) {
            d = b;
            var N = d.child;
            if ((d.subtreeFlags & 2064) !== 0 && N !== null)
              (N.return = d), (b = N);
            else
              e: for (d = y; b !== null; ) {
                if (((p = b), (p.flags & 2048) !== 0))
                  try {
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Ci(9, p);
                    }
                  } catch (U) {
                    Ee(p, p.return, U);
                  }
                if (p === d) {
                  b = null;
                  break e;
                }
                var _ = p.sibling;
                if (_ !== null) {
                  (_.return = p.return), (b = _);
                  break e;
                }
                b = p.return;
              }
          }
          if (
            ((ne = i),
            Vt(),
            xt && typeof xt.onPostCommitFiberRoot == "function")
          )
            try {
              xt.onPostCommitFiberRoot(br, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ue = n), (ct.transition = t);
      }
    }
    return !1;
  }
  function Uu(e, t, n) {
    (t = Fn(n, t)),
      (t = su(e, t, 1)),
      (e = Ht(e, t, 1)),
      (t = Ke()),
      e !== null && (Yn(e, 1, t), Xe(e, t));
  }
  function Ee(e, t, n) {
    if (e.tag === 3) Uu(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Uu(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (Kt === null || !Kt.has(r)))
          ) {
            (e = Fn(n, e)),
              (e = lu(t, e, 1)),
              (t = Ht(t, e, 1)),
              (e = Ke()),
              t !== null && (Yn(t, 1, e), Xe(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function wf(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ke()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ze === e &&
        (be & n) === n &&
        (Te === 4 || (Te === 3 && (be & 130023424) === be && 500 > Le() - El)
          ? un(e, 0)
          : (Cl |= n)),
      Xe(e, t);
  }
  function Vu(e, t) {
    t === 0 &&
      ((e.mode & 1) === 0
        ? (t = 1)
        : ((t = Ar), (Ar <<= 1), (Ar & 130023424) === 0 && (Ar = 4194304)));
    var n = Ke();
    (e = Ot(e, t)), e !== null && (Yn(e, t, n), Xe(e, n));
  }
  function kf(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), Vu(e, n);
  }
  function Sf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(o(314));
    }
    r !== null && r.delete(t), Vu(e, n);
  }
  var Bu;
  Bu = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Qe.current) Ze = !0;
      else {
        if ((e.lanes & n) === 0 && (t.flags & 128) === 0)
          return (Ze = !1), uf(e, t, n);
        Ze = (e.flags & 131072) !== 0;
      }
    else (Ze = !1), ke && (t.flags & 1048576) !== 0 && Sa(t, ai, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Ni(e, t), (e = t.pendingProps);
        var i = Cn(t, Ae.current);
        _n(t, n), (i = rl(null, t, r, e, i, n));
        var l = il();
        return (
          (t.flags |= 1),
          typeof i == "object" &&
          i !== null &&
          typeof i.render == "function" &&
          i.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              Ye(r) ? ((l = !0), si(t)) : (l = !1),
              (t.memoizedState =
                i.state !== null && i.state !== void 0 ? i.state : null),
              Gs(t),
              (i.updater = ki),
              (t.stateNode = i),
              (i._reactInternals = t),
              cl(t, r, e, n),
              (t = hl(null, t, r, !0, l, n)))
            : ((t.tag = 0), ke && l && As(t), We(null, t, i, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Ni(e, t),
            (e = t.pendingProps),
            (i = r._init),
            (r = i(r._payload)),
            (t.type = r),
            (i = t.tag = jf(r)),
            (e = gt(r, e)),
            i)
          ) {
            case 0:
              t = pl(null, t, r, e, n);
              break e;
            case 1:
              t = gu(null, t, r, e, n);
              break e;
            case 11:
              t = cu(null, t, r, e, n);
              break e;
            case 14:
              t = du(null, t, r, gt(r.type, e), n);
              break e;
          }
          throw Error(o(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : gt(r, i)),
          pl(e, t, r, i, n)
        );
      case 1:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : gt(r, i)),
          gu(e, t, r, i, n)
        );
      case 3:
        e: {
          if ((mu(t), e === null)) throw Error(o(387));
          (r = t.pendingProps),
            (l = t.memoizedState),
            (i = l.element),
            _a(e, t),
            hi(t, r, null, n);
          var d = t.memoizedState;
          if (((r = d.element), l.isDehydrated))
            if (
              ((l = {
                element: r,
                isDehydrated: !1,
                cache: d.cache,
                pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
                transitions: d.transitions,
              }),
              (t.updateQueue.baseState = l),
              (t.memoizedState = l),
              t.flags & 256)
            ) {
              (i = Fn(Error(o(423)), t)), (t = vu(e, t, r, n, i));
              break e;
            } else if (r !== i) {
              (i = Fn(Error(o(424)), t)), (t = vu(e, t, r, n, i));
              break e;
            } else
              for (
                rt = $t(t.stateNode.containerInfo.firstChild),
                  nt = t,
                  ke = !0,
                  ht = null,
                  n = Oa(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Pn(), r === i)) {
              t = _t(e, t, n);
              break e;
            }
            We(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          za(t),
          e === null && Bs(t),
          (r = t.type),
          (i = t.pendingProps),
          (l = e !== null ? e.memoizedProps : null),
          (d = i.children),
          zs(r, i) ? (d = null) : l !== null && zs(r, l) && (t.flags |= 32),
          hu(e, t),
          We(e, t, d, n),
          t.child
        );
      case 6:
        return e === null && Bs(t), null;
      case 13:
        return yu(e, t, n);
      case 4:
        return (
          Xs(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = On(t, null, r, n)) : We(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : gt(r, i)),
          cu(e, t, r, i, n)
        );
      case 7:
        return We(e, t, t.pendingProps, n), t.child;
      case 8:
        return We(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return We(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (i = t.pendingProps),
            (l = t.memoizedProps),
            (d = i.value),
            pe(di, r._currentValue),
            (r._currentValue = d),
            l !== null)
          )
            if (pt(l.value, d)) {
              if (l.children === i.children && !Qe.current) {
                t = _t(e, t, n);
                break e;
              }
            } else
              for (l = t.child, l !== null && (l.return = t); l !== null; ) {
                var p = l.dependencies;
                if (p !== null) {
                  d = l.child;
                  for (var v = p.firstContext; v !== null; ) {
                    if (v.context === r) {
                      if (l.tag === 1) {
                        (v = Rt(-1, n & -n)), (v.tag = 2);
                        var j = l.updateQueue;
                        if (j !== null) {
                          j = j.shared;
                          var O = j.pending;
                          O === null
                            ? (v.next = v)
                            : ((v.next = O.next), (O.next = v)),
                            (j.pending = v);
                        }
                      }
                      (l.lanes |= n),
                        (v = l.alternate),
                        v !== null && (v.lanes |= n),
                        Ys(l.return, n, t),
                        (p.lanes |= n);
                      break;
                    }
                    v = v.next;
                  }
                } else if (l.tag === 10) d = l.type === t.type ? null : l.child;
                else if (l.tag === 18) {
                  if (((d = l.return), d === null)) throw Error(o(341));
                  (d.lanes |= n),
                    (p = d.alternate),
                    p !== null && (p.lanes |= n),
                    Ys(d, n, t),
                    (d = l.sibling);
                } else d = l.child;
                if (d !== null) d.return = l;
                else
                  for (d = l; d !== null; ) {
                    if (d === t) {
                      d = null;
                      break;
                    }
                    if (((l = d.sibling), l !== null)) {
                      (l.return = d.return), (d = l);
                      break;
                    }
                    d = d.return;
                  }
                l = d;
              }
          We(e, t, i.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (i = t.type),
          (r = t.pendingProps.children),
          _n(t, n),
          (i = at(i)),
          (r = r(i)),
          (t.flags |= 1),
          We(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (i = gt(r, t.pendingProps)),
          (i = gt(r.type, i)),
          du(e, t, r, i, n)
        );
      case 15:
        return fu(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (i = t.pendingProps),
          (i = t.elementType === r ? i : gt(r, i)),
          Ni(e, t),
          (t.tag = 1),
          Ye(r) ? ((e = !0), si(t)) : (e = !1),
          _n(t, n),
          ru(t, r, i),
          cl(t, r, i, n),
          hl(null, t, r, !0, e, n)
        );
      case 19:
        return wu(e, t, n);
      case 22:
        return pu(e, t, n);
    }
    throw Error(o(156, t.tag));
  };
  function Hu(e, t) {
    return No(e, t);
  }
  function Nf(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function dt(e, t, n, r) {
    return new Nf(e, t, n, r);
  }
  function zl(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function jf(e) {
    if (typeof e == "function") return zl(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === st)) return 11;
      if (e === qe) return 14;
    }
    return 2;
  }
  function Gt(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = dt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function zi(e, t, n, r, i, l) {
    var d = 2;
    if (((r = e), typeof e == "function")) zl(e) && (d = 1);
    else if (typeof e == "string") d = 5;
    else
      e: switch (e) {
        case ce:
          return dn(n.children, i, l, t);
        case te:
          (d = 8), (i |= 8);
          break;
        case re:
          return (
            (e = dt(12, n, t, i | 2)), (e.elementType = re), (e.lanes = l), e
          );
        case xe:
          return (e = dt(13, n, t, i)), (e.elementType = xe), (e.lanes = l), e;
        case Ne:
          return (e = dt(19, n, t, i)), (e.elementType = Ne), (e.lanes = l), e;
        case ie:
          return Ii(n, i, l, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case J:
                d = 10;
                break e;
              case Re:
                d = 9;
                break e;
              case st:
                d = 11;
                break e;
              case qe:
                d = 14;
                break e;
              case he:
                (d = 16), (r = null);
                break e;
            }
          throw Error(o(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = dt(d, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = l), t
    );
  }
  function dn(e, t, n, r) {
    return (e = dt(7, e, r, t)), (e.lanes = n), e;
  }
  function Ii(e, t, n, r) {
    return (
      (e = dt(22, e, r, t)),
      (e.elementType = ie),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function Il(e, t, n) {
    return (e = dt(6, e, null, t)), (e.lanes = n), e;
  }
  function Dl(e, t, n) {
    return (
      (t = dt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function Cf(e, t, n, r, i) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = us(0)),
      (this.expirationTimes = us(-1)),
      (this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0),
      (this.entanglements = us(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = i),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Ml(e, t, n, r, i, l, d, p, v) {
    return (
      (e = new Cf(e, t, n, p, v)),
      t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
      (l = dt(3, null, null, t)),
      (e.current = l),
      (l.stateNode = e),
      (l.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      Gs(l),
      e
    );
  }
  function Ef(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Se,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function Wu(e) {
    if (!e) return Ut;
    e = e._reactInternals;
    e: {
      if (Jt(e) !== e || e.tag !== 1) throw Error(o(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Ye(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(o(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Ye(n)) return xa(e, n, t);
    }
    return t;
  }
  function Ku(e, t, n, r, i, l, d, p, v) {
    return (
      (e = Ml(n, r, !0, e, i, l, d, p, v)),
      (e.context = Wu(null)),
      (n = e.current),
      (r = Ke()),
      (i = Yt(n)),
      (l = Rt(r, i)),
      (l.callback = t ?? null),
      Ht(n, l, i),
      (e.current.lanes = i),
      Yn(e, i, r),
      Xe(e, r),
      e
    );
  }
  function Di(e, t, n, r) {
    var i = t.current,
      l = Ke(),
      d = Yt(i);
    return (
      (n = Wu(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = Rt(l, d)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = Ht(i, t, d)),
      e !== null && (yt(e, i, d, l), pi(e, i, d)),
      d
    );
  }
  function Mi(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function Qu(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function bl(e, t) {
    Qu(e, t), (e = e.alternate) && Qu(e, t);
  }
  function Lf() {
    return null;
  }
  var Yu =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function $l(e) {
    this._internalRoot = e;
  }
  (bi.prototype.render = $l.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    Di(e, t, null, null);
  }),
    (bi.prototype.unmount = $l.prototype.unmount = function () {
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        an(function () {
          Di(null, e, null, null);
        }),
          (t[Ct] = null);
      }
    });
  function bi(e) {
    this._internalRoot = e;
  }
  bi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = _o();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Dt.length && t !== 0 && t < Dt[n].priority; n++);
      Dt.splice(n, 0, e), n === 0 && zo(e);
    }
  };
  function Al(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function $i(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function Zu() {}
  function Pf(e, t, n, r, i) {
    if (i) {
      if (typeof r == "function") {
        var l = r;
        r = function () {
          var j = Mi(d);
          l.call(j);
        };
      }
      var d = Ku(t, r, e, 0, null, !1, !1, "", Zu);
      return (
        (e._reactRootContainer = d),
        (e[Ct] = d.current),
        ar(e.nodeType === 8 ? e.parentNode : e),
        an(),
        d
      );
    }
    for (; (i = e.lastChild); ) e.removeChild(i);
    if (typeof r == "function") {
      var p = r;
      r = function () {
        var j = Mi(v);
        p.call(j);
      };
    }
    var v = Ml(e, 0, !1, null, null, !1, !1, "", Zu);
    return (
      (e._reactRootContainer = v),
      (e[Ct] = v.current),
      ar(e.nodeType === 8 ? e.parentNode : e),
      an(function () {
        Di(t, v, n, r);
      }),
      v
    );
  }
  function Ai(e, t, n, r, i) {
    var l = n._reactRootContainer;
    if (l) {
      var d = l;
      if (typeof i == "function") {
        var p = i;
        i = function () {
          var v = Mi(d);
          p.call(v);
        };
      }
      Di(t, d, e, i);
    } else d = Pf(n, t, e, i, r);
    return Mi(d);
  }
  (Oo = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Qn(t.pendingLanes);
          n !== 0 &&
            (cs(t, n | 1),
            Xe(t, Le()),
            (ne & 6) === 0 && ((Dn = Le() + 500), Vt()));
        }
        break;
      case 13:
        an(function () {
          var r = Ot(e, 1);
          if (r !== null) {
            var i = Ke();
            yt(r, e, 1, i);
          }
        }),
          bl(e, 1);
    }
  }),
    (ds = function (e) {
      if (e.tag === 13) {
        var t = Ot(e, 134217728);
        if (t !== null) {
          var n = Ke();
          yt(t, e, 134217728, n);
        }
        bl(e, 134217728);
      }
    }),
    (Ro = function (e) {
      if (e.tag === 13) {
        var t = Yt(e),
          n = Ot(e, t);
        if (n !== null) {
          var r = Ke();
          yt(n, e, t, r);
        }
        bl(e, t);
      }
    }),
    (_o = function () {
      return ue;
    }),
    (To = function (e, t) {
      var n = ue;
      try {
        return (ue = e), t();
      } finally {
        ue = n;
      }
    }),
    (rs = function (e, t, n) {
      switch (t) {
        case "input":
          if ((Zi(e, n), (t = n.name), n.type === "radio" && t != null)) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
              ),
                t = 0;
              t < n.length;
              t++
            ) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var i = ri(r);
                if (!i) throw Error(o(90));
                to(r), Zi(r, i);
              }
            }
          }
          break;
        case "textarea":
          lo(e, n);
          break;
        case "select":
          (t = n.value), t != null && pn(e, !!n.multiple, t, !1);
      }
    }),
    (mo = _l),
    (vo = an);
  var Of = { usingClientEntryPoint: !1, Events: [dr, Nn, ri, ho, go, _l] },
    Cr = {
      findFiberByHostInstance: qt,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    Rf = {
      bundleType: Cr.bundleType,
      version: Cr.version,
      rendererPackageName: Cr.rendererPackageName,
      rendererConfig: Cr.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: ee.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = ko(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: Cr.findFiberByHostInstance || Lf,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ui = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ui.isDisabled && Ui.supportsFiber)
      try {
        (br = Ui.inject(Rf)), (xt = Ui);
      } catch {}
  }
  return (
    (Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Of),
    (Je.createPortal = function (e, t) {
      var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Al(t)) throw Error(o(200));
      return Ef(e, t, null, n);
    }),
    (Je.createRoot = function (e, t) {
      if (!Al(e)) throw Error(o(299));
      var n = !1,
        r = "",
        i = Yu;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (n = !0),
          t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Ml(e, 1, !1, null, null, n, !1, r, i)),
        (e[Ct] = t.current),
        ar(e.nodeType === 8 ? e.parentNode : e),
        new $l(t)
      );
    }),
    (Je.findDOMNode = function (e) {
      if (e == null) return null;
      if (e.nodeType === 1) return e;
      var t = e._reactInternals;
      if (t === void 0)
        throw typeof e.render == "function"
          ? Error(o(188))
          : ((e = Object.keys(e).join(",")), Error(o(268, e)));
      return (e = ko(t)), (e = e === null ? null : e.stateNode), e;
    }),
    (Je.flushSync = function (e) {
      return an(e);
    }),
    (Je.hydrate = function (e, t, n) {
      if (!$i(t)) throw Error(o(200));
      return Ai(null, e, t, !0, n);
    }),
    (Je.hydrateRoot = function (e, t, n) {
      if (!Al(e)) throw Error(o(405));
      var r = (n != null && n.hydratedSources) || null,
        i = !1,
        l = "",
        d = Yu;
      if (
        (n != null &&
          (n.unstable_strictMode === !0 && (i = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onRecoverableError !== void 0 && (d = n.onRecoverableError)),
        (t = Ku(t, null, e, 1, n ?? null, i, !1, l, d)),
        (e[Ct] = t.current),
        ar(e),
        r)
      )
        for (e = 0; e < r.length; e++)
          (n = r[e]),
            (i = n._getVersion),
            (i = i(n._source)),
            t.mutableSourceEagerHydrationData == null
              ? (t.mutableSourceEagerHydrationData = [n, i])
              : t.mutableSourceEagerHydrationData.push(n, i);
      return new bi(t);
    }),
    (Je.render = function (e, t, n) {
      if (!$i(t)) throw Error(o(200));
      return Ai(null, e, t, !1, n);
    }),
    (Je.unmountComponentAtNode = function (e) {
      if (!$i(e)) throw Error(o(40));
      return e._reactRootContainer
        ? (an(function () {
            Ai(null, null, e, !1, function () {
              (e._reactRootContainer = null), (e[Ct] = null);
            });
          }),
          !0)
        : !1;
    }),
    (Je.unstable_batchedUpdates = _l),
    (Je.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
      if (!$i(n)) throw Error(o(200));
      if (e == null || e._reactInternals === void 0) throw Error(o(38));
      return Ai(e, t, n, !1, r);
    }),
    (Je.version = "18.3.1-next-f1338f8080-20240426"),
    Je
  );
}
var rc;
function bf() {
  if (rc) return Bl.exports;
  rc = 1;
  function c() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c);
      } catch (s) {
        console.error(s);
      }
  }
  return c(), (Bl.exports = Mf()), Bl.exports;
}
var ic;
function $f() {
  if (ic) return Vi;
  ic = 1;
  var c = bf();
  return (Vi.createRoot = c.createRoot), (Vi.hydrateRoot = c.hydrateRoot), Vi;
}
var Af = $f();
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Uf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Vf = (c) =>
    c
      .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
      .toLowerCase()
      .trim(),
  $e = (c, s) => {
    const o = De.forwardRef(
      (
        {
          color: u = "currentColor",
          size: a = 24,
          strokeWidth: f = 2,
          absoluteStrokeWidth: h,
          className: m = "",
          children: x,
          ...k
        },
        C
      ) =>
        De.createElement(
          "svg",
          {
            ref: C,
            ...Uf,
            width: a,
            height: a,
            stroke: u,
            strokeWidth: h ? (Number(f) * 24) / Number(a) : f,
            className: ["lucide", `lucide-${Vf(c)}`, m].join(" "),
            ...k,
          },
          [
            ...s.map(([E, z]) => De.createElement(E, z)),
            ...(Array.isArray(x) ? x : [x]),
          ]
        )
    );
    return (o.displayName = `${c}`), o;
  };
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bf = $e("Building2", [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hf = $e("Calendar", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Wf = $e("Car", [
  [
    "path",
    {
      d:
        "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      key: "5owen",
    },
  ],
  ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }],
  ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kf = $e("ChevronLeft", [
  ["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qf = $e("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yf = $e("FileCheck", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "m9 15 2 2 4-4", key: "1grp1n" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zf = $e("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sc = $e("Globe", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  [
    "path",
    { d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20", key: "13o1zl" },
  ],
  ["path", { d: "M2 12h20", key: "9i4pu4" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gf = $e("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xf = $e("MapPin", [
  [
    "path",
    { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z", key: "2oe9fu" },
  ],
  ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jf = $e("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qf = $e("Package", [
  ["path", { d: "m7.5 4.27 9 5.15", key: "1c824w" }],
  [
    "path",
    {
      d:
        "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",
      key: "hh9hay",
    },
  ],
  ["path", { d: "m3.3 7 8.7 5 8.7-5", key: "g66t2b" }],
  ["path", { d: "M12 22V12", key: "d0xqtd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ep = $e("Phone", [
  [
    "path",
    {
      d:
        "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tp = $e("Shield", [
  [
    "path",
    {
      d:
        "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const np = $e("Truck", [
  [
    "path",
    {
      d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
      key: "wrbu53",
    },
  ],
  ["path", { d: "M15 18H9", key: "1lyqi6" }],
  [
    "path",
    {
      d:
        "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
      key: "lysw3i",
    },
  ],
  ["circle", { cx: "17", cy: "18", r: "2", key: "332jqn" }],
  ["circle", { cx: "7", cy: "18", r: "2", key: "19iecd" }],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rp = $e("Wrench", [
  [
    "path",
    {
      d:
        "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",
      key: "cbrjhi",
    },
  ],
]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Cc = $e("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Y = (c) => typeof c == "string",
  Lr = () => {
    let c, s;
    const o = new Promise((u, a) => {
      (c = u), (s = a);
    });
    return (o.resolve = c), (o.reject = s), o;
  },
  lc = (c) => (c == null ? "" : "" + c),
  ip = (c, s, o) => {
    c.forEach((u) => {
      s[u] && (o[u] = s[u]);
    });
  },
  sp = /###/g,
  oc = (c) => (c && c.indexOf("###") > -1 ? c.replace(sp, ".") : c),
  ac = (c) => !c || Y(c),
  Pr = (c, s, o) => {
    const u = Y(s) ? s.split(".") : s;
    let a = 0;
    for (; a < u.length - 1; ) {
      if (ac(c)) return {};
      const f = oc(u[a]);
      !c[f] && o && (c[f] = new o()),
        Object.prototype.hasOwnProperty.call(c, f) ? (c = c[f]) : (c = {}),
        ++a;
    }
    return ac(c) ? {} : { obj: c, k: oc(u[a]) };
  },
  uc = (c, s, o) => {
    const { obj: u, k: a } = Pr(c, s, Object);
    if (u !== void 0 || s.length === 1) {
      u[a] = o;
      return;
    }
    let f = s[s.length - 1],
      h = s.slice(0, s.length - 1),
      m = Pr(c, h, Object);
    for (; m.obj === void 0 && h.length; )
      (f = `${h[h.length - 1]}.${f}`),
        (h = h.slice(0, h.length - 1)),
        (m = Pr(c, h, Object)),
        m != null &&
          m.obj &&
          typeof m.obj[`${m.k}.${f}`] < "u" &&
          (m.obj = void 0);
    m.obj[`${m.k}.${f}`] = o;
  },
  lp = (c, s, o, u) => {
    const { obj: a, k: f } = Pr(c, s, Object);
    (a[f] = a[f] || []), a[f].push(o);
  },
  Hi = (c, s) => {
    const { obj: o, k: u } = Pr(c, s);
    if (o && Object.prototype.hasOwnProperty.call(o, u)) return o[u];
  },
  op = (c, s, o) => {
    const u = Hi(c, o);
    return u !== void 0 ? u : Hi(s, o);
  },
  Ec = (c, s, o) => {
    for (const u in s)
      u !== "__proto__" &&
        u !== "constructor" &&
        (u in c
          ? Y(c[u]) ||
            c[u] instanceof String ||
            Y(s[u]) ||
            s[u] instanceof String
            ? o && (c[u] = s[u])
            : Ec(c[u], s[u], o)
          : (c[u] = s[u]));
    return c;
  },
  bn = (c) => c.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
var ap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
  "/": "&#x2F;",
};
const up = (c) => (Y(c) ? c.replace(/[&<>"'\/]/g, (s) => ap[s]) : c);
class cp {
  constructor(s) {
    (this.capacity = s), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(s) {
    const o = this.regExpMap.get(s);
    if (o !== void 0) return o;
    const u = new RegExp(s);
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(s, u),
      this.regExpQueue.push(s),
      u
    );
  }
}
const dp = [" ", ",", "?", "!", ";"],
  fp = new cp(20),
  pp = (c, s, o) => {
    (s = s || ""), (o = o || "");
    const u = dp.filter((h) => s.indexOf(h) < 0 && o.indexOf(h) < 0);
    if (u.length === 0) return !0;
    const a = fp.getRegExp(
      `(${u.map((h) => (h === "?" ? "\\?" : h)).join("|")})`
    );
    let f = !a.test(c);
    if (!f) {
      const h = c.indexOf(o);
      h > 0 && !a.test(c.substring(0, h)) && (f = !0);
    }
    return f;
  },
  Yl = (c, s, o = ".") => {
    if (!c) return;
    if (c[s]) return Object.prototype.hasOwnProperty.call(c, s) ? c[s] : void 0;
    const u = s.split(o);
    let a = c;
    for (let f = 0; f < u.length; ) {
      if (!a || typeof a != "object") return;
      let h,
        m = "";
      for (let x = f; x < u.length; ++x)
        if ((x !== f && (m += o), (m += u[x]), (h = a[m]), h !== void 0)) {
          if (
            ["string", "number", "boolean"].indexOf(typeof h) > -1 &&
            x < u.length - 1
          )
            continue;
          f += x - f + 1;
          break;
        }
      a = h;
    }
    return a;
  },
  Or = (c) => (c == null ? void 0 : c.replace("_", "-")),
  hp = {
    type: "logger",
    log(c) {
      this.output("log", c);
    },
    warn(c) {
      this.output("warn", c);
    },
    error(c) {
      this.output("error", c);
    },
    output(c, s) {
      var o, u;
      (u =
        (o = console == null ? void 0 : console[c]) == null
          ? void 0
          : o.apply) == null || u.call(o, console, s);
    },
  };
class Wi {
  constructor(s, o = {}) {
    this.init(s, o);
  }
  init(s, o = {}) {
    (this.prefix = o.prefix || "i18next:"),
      (this.logger = s || hp),
      (this.options = o),
      (this.debug = o.debug);
  }
  log(...s) {
    return this.forward(s, "log", "", !0);
  }
  warn(...s) {
    return this.forward(s, "warn", "", !0);
  }
  error(...s) {
    return this.forward(s, "error", "");
  }
  deprecate(...s) {
    return this.forward(s, "warn", "WARNING DEPRECATED: ", !0);
  }
  forward(s, o, u, a) {
    return a && !this.debug
      ? null
      : (Y(s[0]) && (s[0] = `${u}${this.prefix} ${s[0]}`), this.logger[o](s));
  }
  create(s) {
    return new Wi(this.logger, {
      prefix: `${this.prefix}:${s}:`,
      ...this.options,
    });
  }
  clone(s) {
    return (
      (s = s || this.options),
      (s.prefix = s.prefix || this.prefix),
      new Wi(this.logger, s)
    );
  }
}
var jt = new Wi();
class Qi {
  constructor() {
    this.observers = {};
  }
  on(s, o) {
    return (
      s.split(" ").forEach((u) => {
        this.observers[u] || (this.observers[u] = new Map());
        const a = this.observers[u].get(o) || 0;
        this.observers[u].set(o, a + 1);
      }),
      this
    );
  }
  off(s, o) {
    if (this.observers[s]) {
      if (!o) {
        delete this.observers[s];
        return;
      }
      this.observers[s].delete(o);
    }
  }
  emit(s, ...o) {
    this.observers[s] &&
      Array.from(this.observers[s].entries()).forEach(([a, f]) => {
        for (let h = 0; h < f; h++) a(...o);
      }),
      this.observers["*"] &&
        Array.from(this.observers["*"].entries()).forEach(([a, f]) => {
          for (let h = 0; h < f; h++) a.apply(a, [s, ...o]);
        });
  }
}
class cc extends Qi {
  constructor(s, o = { ns: ["translation"], defaultNS: "translation" }) {
    super(),
      (this.data = s || {}),
      (this.options = o),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(s) {
    this.options.ns.indexOf(s) < 0 && this.options.ns.push(s);
  }
  removeNamespaces(s) {
    const o = this.options.ns.indexOf(s);
    o > -1 && this.options.ns.splice(o, 1);
  }
  getResource(s, o, u, a = {}) {
    var k, C;
    const f =
        a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator,
      h =
        a.ignoreJSONStructure !== void 0
          ? a.ignoreJSONStructure
          : this.options.ignoreJSONStructure;
    let m;
    s.indexOf(".") > -1
      ? (m = s.split("."))
      : ((m = [s, o]),
        u &&
          (Array.isArray(u)
            ? m.push(...u)
            : Y(u) && f
            ? m.push(...u.split(f))
            : m.push(u)));
    const x = Hi(this.data, m);
    return (
      !x &&
        !o &&
        !u &&
        s.indexOf(".") > -1 &&
        ((s = m[0]), (o = m[1]), (u = m.slice(2).join("."))),
      x || !h || !Y(u)
        ? x
        : Yl(
            (C = (k = this.data) == null ? void 0 : k[s]) == null
              ? void 0
              : C[o],
            u,
            f
          )
    );
  }
  addResource(s, o, u, a, f = { silent: !1 }) {
    const h =
      f.keySeparator !== void 0 ? f.keySeparator : this.options.keySeparator;
    let m = [s, o];
    u && (m = m.concat(h ? u.split(h) : u)),
      s.indexOf(".") > -1 && ((m = s.split(".")), (a = o), (o = m[1])),
      this.addNamespaces(o),
      uc(this.data, m, a),
      f.silent || this.emit("added", s, o, u, a);
  }
  addResources(s, o, u, a = { silent: !1 }) {
    for (const f in u)
      (Y(u[f]) || Array.isArray(u[f])) &&
        this.addResource(s, o, f, u[f], { silent: !0 });
    a.silent || this.emit("added", s, o, u);
  }
  addResourceBundle(s, o, u, a, f, h = { silent: !1, skipCopy: !1 }) {
    let m = [s, o];
    s.indexOf(".") > -1 && ((m = s.split(".")), (a = u), (u = o), (o = m[1])),
      this.addNamespaces(o);
    let x = Hi(this.data, m) || {};
    h.skipCopy || (u = JSON.parse(JSON.stringify(u))),
      a ? Ec(x, u, f) : (x = { ...x, ...u }),
      uc(this.data, m, x),
      h.silent || this.emit("added", s, o, u);
  }
  removeResourceBundle(s, o) {
    this.hasResourceBundle(s, o) && delete this.data[s][o],
      this.removeNamespaces(o),
      this.emit("removed", s, o);
  }
  hasResourceBundle(s, o) {
    return this.getResource(s, o) !== void 0;
  }
  getResourceBundle(s, o) {
    return o || (o = this.options.defaultNS), this.getResource(s, o);
  }
  getDataByLanguage(s) {
    return this.data[s];
  }
  hasLanguageSomeTranslations(s) {
    const o = this.getDataByLanguage(s);
    return !!((o && Object.keys(o)) || []).find(
      (a) => o[a] && Object.keys(o[a]).length > 0
    );
  }
  toJSON() {
    return this.data;
  }
}
var Lc = {
  processors: {},
  addPostProcessor(c) {
    this.processors[c.name] = c;
  },
  handle(c, s, o, u, a) {
    return (
      c.forEach((f) => {
        var h;
        s =
          ((h = this.processors[f]) == null ? void 0 : h.process(s, o, u, a)) ??
          s;
      }),
      s
    );
  },
};
const Pc = Symbol("i18next/PATH_KEY");
function gp() {
  const c = [],
    s = Object.create(null);
  let o;
  return (
    (s.get = (u, a) => {
      var f;
      return (
        (f = o == null ? void 0 : o.revoke) == null || f.call(o),
        a === Pc ? c : (c.push(a), (o = Proxy.revocable(u, s)), o.proxy)
      );
    }),
    Proxy.revocable(Object.create(null), s).proxy
  );
}
function Zl(c, s) {
  const { [Pc]: o } = c(gp());
  return o.join((s == null ? void 0 : s.keySeparator) ?? ".");
}
const dc = {},
  Kl = (c) => !Y(c) && typeof c != "boolean" && typeof c != "number";
class Ki extends Qi {
  constructor(s, o = {}) {
    super(),
      ip(
        [
          "resourceStore",
          "languageUtils",
          "pluralResolver",
          "interpolator",
          "backendConnector",
          "i18nFormat",
          "utils",
        ],
        s,
        this
      ),
      (this.options = o),
      this.options.keySeparator === void 0 && (this.options.keySeparator = "."),
      (this.logger = jt.create("translator"));
  }
  changeLanguage(s) {
    s && (this.language = s);
  }
  exists(s, o = { interpolation: {} }) {
    const u = { ...o };
    if (s == null) return !1;
    const a = this.resolve(s, u);
    if ((a == null ? void 0 : a.res) === void 0) return !1;
    const f = Kl(a.res);
    return !(u.returnObjects === !1 && f);
  }
  extractFromKey(s, o) {
    let u = o.nsSeparator !== void 0 ? o.nsSeparator : this.options.nsSeparator;
    u === void 0 && (u = ":");
    const a =
      o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator;
    let f = o.ns || this.options.defaultNS || [];
    const h = u && s.indexOf(u) > -1,
      m =
        !this.options.userDefinedKeySeparator &&
        !o.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !o.nsSeparator &&
        !pp(s, u, a);
    if (h && !m) {
      const x = s.match(this.interpolator.nestingRegexp);
      if (x && x.length > 0) return { key: s, namespaces: Y(f) ? [f] : f };
      const k = s.split(u);
      (u !== a || (u === a && this.options.ns.indexOf(k[0]) > -1)) &&
        (f = k.shift()),
        (s = k.join(a));
    }
    return { key: s, namespaces: Y(f) ? [f] : f };
  }
  translate(s, o, u) {
    let a = typeof o == "object" ? { ...o } : o;
    if (
      (typeof a != "object" &&
        this.options.overloadTranslationOptionHandler &&
        (a = this.options.overloadTranslationOptionHandler(arguments)),
      typeof a == "object" && (a = { ...a }),
      a || (a = {}),
      s == null)
    )
      return "";
    typeof s == "function" && (s = Zl(s, { ...this.options, ...a })),
      Array.isArray(s) || (s = [String(s)]);
    const f =
        a.returnDetails !== void 0
          ? a.returnDetails
          : this.options.returnDetails,
      h =
        a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator,
      { key: m, namespaces: x } = this.extractFromKey(s[s.length - 1], a),
      k = x[x.length - 1];
    let C = a.nsSeparator !== void 0 ? a.nsSeparator : this.options.nsSeparator;
    C === void 0 && (C = ":");
    const E = a.lng || this.language,
      z = a.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if ((E == null ? void 0 : E.toLowerCase()) === "cimode")
      return z
        ? f
          ? {
              res: `${k}${C}${m}`,
              usedKey: m,
              exactUsedKey: m,
              usedLng: E,
              usedNS: k,
              usedParams: this.getUsedParamsDetails(a),
            }
          : `${k}${C}${m}`
        : f
        ? {
            res: m,
            usedKey: m,
            exactUsedKey: m,
            usedLng: E,
            usedNS: k,
            usedParams: this.getUsedParamsDetails(a),
          }
        : m;
    const I = this.resolve(s, a);
    let T = I == null ? void 0 : I.res;
    const V = (I == null ? void 0 : I.usedKey) || m,
      K = (I == null ? void 0 : I.exactUsedKey) || m,
      ve = ["[object Number]", "[object Function]", "[object RegExp]"],
      oe = a.joinArrays !== void 0 ? a.joinArrays : this.options.joinArrays,
      de = !this.i18nFormat || this.i18nFormat.handleAsObject,
      ee = a.count !== void 0 && !Y(a.count),
      ye = Ki.hasDefaultValue(a),
      Se = ee ? this.pluralResolver.getSuffix(E, a.count, a) : "",
      ce =
        a.ordinal && ee
          ? this.pluralResolver.getSuffix(E, a.count, { ordinal: !1 })
          : "",
      te = ee && !a.ordinal && a.count === 0,
      re =
        (te && a[`defaultValue${this.options.pluralSeparator}zero`]) ||
        a[`defaultValue${Se}`] ||
        a[`defaultValue${ce}`] ||
        a.defaultValue;
    let J = T;
    de && !T && ye && (J = re);
    const Re = Kl(J),
      st = Object.prototype.toString.apply(J);
    if (de && J && Re && ve.indexOf(st) < 0 && !(Y(oe) && Array.isArray(J))) {
      if (!a.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            "accessing an object - but returnObjects options is not enabled!"
          );
        const xe = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(V, J, { ...a, ns: x })
          : `key '${m} (${this.language})' returned an object instead of string.`;
        return f
          ? ((I.res = xe), (I.usedParams = this.getUsedParamsDetails(a)), I)
          : xe;
      }
      if (h) {
        const xe = Array.isArray(J),
          Ne = xe ? [] : {},
          qe = xe ? K : V;
        for (const he in J)
          if (Object.prototype.hasOwnProperty.call(J, he)) {
            const ie = `${qe}${h}${he}`;
            ye && !T
              ? (Ne[he] = this.translate(ie, {
                  ...a,
                  defaultValue: Kl(re) ? re[he] : void 0,
                  joinArrays: !1,
                  ns: x,
                }))
              : (Ne[he] = this.translate(ie, { ...a, joinArrays: !1, ns: x })),
              Ne[he] === ie && (Ne[he] = J[he]);
          }
        T = Ne;
      }
    } else if (de && Y(oe) && Array.isArray(T))
      (T = T.join(oe)), T && (T = this.extendTranslation(T, s, a, u));
    else {
      let xe = !1,
        Ne = !1;
      !this.isValidLookup(T) && ye && ((xe = !0), (T = re)),
        this.isValidLookup(T) || ((Ne = !0), (T = m));
      const he =
          (a.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          Ne
            ? void 0
            : T,
        ie = ye && re !== T && this.options.updateMissing;
      if (Ne || xe || ie) {
        if (
          (this.logger.log(
            ie ? "updateKey" : "missingKey",
            E,
            k,
            m,
            ie ? re : T
          ),
          h)
        ) {
          const w = this.resolve(m, { ...a, keySeparator: !1 });
          w &&
            w.res &&
            this.logger.warn(
              "Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format."
            );
        }
        let F = [];
        const B = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          a.lng || this.language
        );
        if (this.options.saveMissingTo === "fallback" && B && B[0])
          for (let w = 0; w < B.length; w++) F.push(B[w]);
        else
          this.options.saveMissingTo === "all"
            ? (F = this.languageUtils.toResolveHierarchy(
                a.lng || this.language
              ))
            : F.push(a.lng || this.language);
        const M = (w, L, Z) => {
          var q;
          const G = ye && Z !== T ? Z : he;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(w, k, L, G, ie, a)
            : (q = this.backendConnector) != null &&
              q.saveMissing &&
              this.backendConnector.saveMissing(w, k, L, G, ie, a),
            this.emit("missingKey", w, k, L, T);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && ee
            ? F.forEach((w) => {
                const L = this.pluralResolver.getSuffixes(w, a);
                te &&
                  a[`defaultValue${this.options.pluralSeparator}zero`] &&
                  L.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  L.push(`${this.options.pluralSeparator}zero`),
                  L.forEach((Z) => {
                    M([w], m + Z, a[`defaultValue${Z}`] || re);
                  });
              })
            : M(F, m, re));
      }
      (T = this.extendTranslation(T, s, a, I, u)),
        Ne &&
          T === m &&
          this.options.appendNamespaceToMissingKey &&
          (T = `${k}${C}${m}`),
        (Ne || xe) &&
          this.options.parseMissingKeyHandler &&
          (T = this.options.parseMissingKeyHandler(
            this.options.appendNamespaceToMissingKey ? `${k}${C}${m}` : m,
            xe ? T : void 0,
            a
          ));
    }
    return f
      ? ((I.res = T), (I.usedParams = this.getUsedParamsDetails(a)), I)
      : T;
  }
  extendTranslation(s, o, u, a, f) {
    var x, k;
    if ((x = this.i18nFormat) != null && x.parse)
      s = this.i18nFormat.parse(
        s,
        { ...this.options.interpolation.defaultVariables, ...u },
        u.lng || this.language || a.usedLng,
        a.usedNS,
        a.usedKey,
        { resolved: a }
      );
    else if (!u.skipInterpolation) {
      u.interpolation &&
        this.interpolator.init({
          ...u,
          interpolation: { ...this.options.interpolation, ...u.interpolation },
        });
      const C =
        Y(s) &&
        (((k = u == null ? void 0 : u.interpolation) == null
          ? void 0
          : k.skipOnVariables) !== void 0
          ? u.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let E;
      if (C) {
        const I = s.match(this.interpolator.nestingRegexp);
        E = I && I.length;
      }
      let z = u.replace && !Y(u.replace) ? u.replace : u;
      if (
        (this.options.interpolation.defaultVariables &&
          (z = { ...this.options.interpolation.defaultVariables, ...z }),
        (s = this.interpolator.interpolate(
          s,
          z,
          u.lng || this.language || a.usedLng,
          u
        )),
        C)
      ) {
        const I = s.match(this.interpolator.nestingRegexp),
          T = I && I.length;
        E < T && (u.nest = !1);
      }
      !u.lng && a && a.res && (u.lng = this.language || a.usedLng),
        u.nest !== !1 &&
          (s = this.interpolator.nest(
            s,
            (...I) =>
              (f == null ? void 0 : f[0]) === I[0] && !u.context
                ? (this.logger.warn(
                    `It seems you are nesting recursively key: ${I[0]} in key: ${o[0]}`
                  ),
                  null)
                : this.translate(...I, o),
            u
          )),
        u.interpolation && this.interpolator.reset();
    }
    const h = u.postProcess || this.options.postProcess,
      m = Y(h) ? [h] : h;
    return (
      s != null &&
        m != null &&
        m.length &&
        u.applyPostProcessor !== !1 &&
        (s = Lc.handle(
          m,
          s,
          o,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...a,
                  usedParams: this.getUsedParamsDetails(u),
                },
                ...u,
              }
            : u,
          this
        )),
      s
    );
  }
  resolve(s, o = {}) {
    let u, a, f, h, m;
    return (
      Y(s) && (s = [s]),
      s.forEach((x) => {
        if (this.isValidLookup(u)) return;
        const k = this.extractFromKey(x, o),
          C = k.key;
        a = C;
        let E = k.namespaces;
        this.options.fallbackNS && (E = E.concat(this.options.fallbackNS));
        const z = o.count !== void 0 && !Y(o.count),
          I = z && !o.ordinal && o.count === 0,
          T =
            o.context !== void 0 &&
            (Y(o.context) || typeof o.context == "number") &&
            o.context !== "",
          V = o.lngs
            ? o.lngs
            : this.languageUtils.toResolveHierarchy(
                o.lng || this.language,
                o.fallbackLng
              );
        E.forEach((K) => {
          var ve, oe;
          this.isValidLookup(u) ||
            ((m = K),
            !dc[`${V[0]}-${K}`] &&
              (ve = this.utils) != null &&
              ve.hasLoadedNamespace &&
              !((oe = this.utils) != null && oe.hasLoadedNamespace(m)) &&
              ((dc[`${V[0]}-${K}`] = !0),
              this.logger.warn(
                `key "${a}" for languages "${V.join(
                  ", "
                )}" won't get resolved as namespace "${m}" was not yet loaded`,
                "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
              )),
            V.forEach((de) => {
              var Se;
              if (this.isValidLookup(u)) return;
              h = de;
              const ee = [C];
              if ((Se = this.i18nFormat) != null && Se.addLookupKeys)
                this.i18nFormat.addLookupKeys(ee, C, de, K, o);
              else {
                let ce;
                z && (ce = this.pluralResolver.getSuffix(de, o.count, o));
                const te = `${this.options.pluralSeparator}zero`,
                  re = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (z &&
                    (o.ordinal &&
                      ce.indexOf(re) === 0 &&
                      ee.push(C + ce.replace(re, this.options.pluralSeparator)),
                    ee.push(C + ce),
                    I && ee.push(C + te)),
                  T)
                ) {
                  const J = `${C}${this.options.contextSeparator || "_"}${
                    o.context
                  }`;
                  ee.push(J),
                    z &&
                      (o.ordinal &&
                        ce.indexOf(re) === 0 &&
                        ee.push(
                          J + ce.replace(re, this.options.pluralSeparator)
                        ),
                      ee.push(J + ce),
                      I && ee.push(J + te));
                }
              }
              let ye;
              for (; (ye = ee.pop()); )
                this.isValidLookup(u) ||
                  ((f = ye), (u = this.getResource(de, K, ye, o)));
            }));
        });
      }),
      { res: u, usedKey: a, exactUsedKey: f, usedLng: h, usedNS: m }
    );
  }
  isValidLookup(s) {
    return (
      s !== void 0 &&
      !(!this.options.returnNull && s === null) &&
      !(!this.options.returnEmptyString && s === "")
    );
  }
  getResource(s, o, u, a = {}) {
    var f;
    return (f = this.i18nFormat) != null && f.getResource
      ? this.i18nFormat.getResource(s, o, u, a)
      : this.resourceStore.getResource(s, o, u, a);
  }
  getUsedParamsDetails(s = {}) {
    const o = [
        "defaultValue",
        "ordinal",
        "context",
        "replace",
        "lng",
        "lngs",
        "fallbackLng",
        "ns",
        "keySeparator",
        "nsSeparator",
        "returnObjects",
        "returnDetails",
        "joinArrays",
        "postProcess",
        "interpolation",
      ],
      u = s.replace && !Y(s.replace);
    let a = u ? s.replace : s;
    if (
      (u && typeof s.count < "u" && (a.count = s.count),
      this.options.interpolation.defaultVariables &&
        (a = { ...this.options.interpolation.defaultVariables, ...a }),
      !u)
    ) {
      a = { ...a };
      for (const f of o) delete a[f];
    }
    return a;
  }
  static hasDefaultValue(s) {
    const o = "defaultValue";
    for (const u in s)
      if (
        Object.prototype.hasOwnProperty.call(s, u) &&
        o === u.substring(0, o.length) &&
        s[u] !== void 0
      )
        return !0;
    return !1;
  }
}
class fc {
  constructor(s) {
    (this.options = s),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = jt.create("languageUtils"));
  }
  getScriptPartFromCode(s) {
    if (((s = Or(s)), !s || s.indexOf("-") < 0)) return null;
    const o = s.split("-");
    return o.length === 2 || (o.pop(), o[o.length - 1].toLowerCase() === "x")
      ? null
      : this.formatLanguageCode(o.join("-"));
  }
  getLanguagePartFromCode(s) {
    if (((s = Or(s)), !s || s.indexOf("-") < 0)) return s;
    const o = s.split("-");
    return this.formatLanguageCode(o[0]);
  }
  formatLanguageCode(s) {
    if (Y(s) && s.indexOf("-") > -1) {
      let o;
      try {
        o = Intl.getCanonicalLocales(s)[0];
      } catch {}
      return (
        o && this.options.lowerCaseLng && (o = o.toLowerCase()),
        o || (this.options.lowerCaseLng ? s.toLowerCase() : s)
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? s.toLowerCase()
      : s;
  }
  isSupportedCode(s) {
    return (
      (this.options.load === "languageOnly" ||
        this.options.nonExplicitSupportedLngs) &&
        (s = this.getLanguagePartFromCode(s)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(s) > -1
    );
  }
  getBestMatchFromCodes(s) {
    if (!s) return null;
    let o;
    return (
      s.forEach((u) => {
        if (o) return;
        const a = this.formatLanguageCode(u);
        (!this.options.supportedLngs || this.isSupportedCode(a)) && (o = a);
      }),
      !o &&
        this.options.supportedLngs &&
        s.forEach((u) => {
          if (o) return;
          const a = this.getScriptPartFromCode(u);
          if (this.isSupportedCode(a)) return (o = a);
          const f = this.getLanguagePartFromCode(u);
          if (this.isSupportedCode(f)) return (o = f);
          o = this.options.supportedLngs.find((h) => {
            if (h === f) return h;
            if (
              !(h.indexOf("-") < 0 && f.indexOf("-") < 0) &&
              ((h.indexOf("-") > 0 &&
                f.indexOf("-") < 0 &&
                h.substring(0, h.indexOf("-")) === f) ||
                (h.indexOf(f) === 0 && f.length > 1))
            )
              return h;
          });
        }),
      o || (o = this.getFallbackCodes(this.options.fallbackLng)[0]),
      o
    );
  }
  getFallbackCodes(s, o) {
    if (!s) return [];
    if (
      (typeof s == "function" && (s = s(o)),
      Y(s) && (s = [s]),
      Array.isArray(s))
    )
      return s;
    if (!o) return s.default || [];
    let u = s[o];
    return (
      u || (u = s[this.getScriptPartFromCode(o)]),
      u || (u = s[this.formatLanguageCode(o)]),
      u || (u = s[this.getLanguagePartFromCode(o)]),
      u || (u = s.default),
      u || []
    );
  }
  toResolveHierarchy(s, o) {
    const u = this.getFallbackCodes(
        (o === !1 ? [] : o) || this.options.fallbackLng || [],
        s
      ),
      a = [],
      f = (h) => {
        h &&
          (this.isSupportedCode(h)
            ? a.push(h)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${h}`
              ));
      };
    return (
      Y(s) && (s.indexOf("-") > -1 || s.indexOf("_") > -1)
        ? (this.options.load !== "languageOnly" &&
            f(this.formatLanguageCode(s)),
          this.options.load !== "languageOnly" &&
            this.options.load !== "currentOnly" &&
            f(this.getScriptPartFromCode(s)),
          this.options.load !== "currentOnly" &&
            f(this.getLanguagePartFromCode(s)))
        : Y(s) && f(this.formatLanguageCode(s)),
      u.forEach((h) => {
        a.indexOf(h) < 0 && f(this.formatLanguageCode(h));
      }),
      a
    );
  }
}
const pc = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  hc = {
    select: (c) => (c === 1 ? "one" : "other"),
    resolvedOptions: () => ({ pluralCategories: ["one", "other"] }),
  };
class mp {
  constructor(s, o = {}) {
    (this.languageUtils = s),
      (this.options = o),
      (this.logger = jt.create("pluralResolver")),
      (this.pluralRulesCache = {});
  }
  addRule(s, o) {
    this.rules[s] = o;
  }
  clearCache() {
    this.pluralRulesCache = {};
  }
  getRule(s, o = {}) {
    const u = Or(s === "dev" ? "en" : s),
      a = o.ordinal ? "ordinal" : "cardinal",
      f = JSON.stringify({ cleanedCode: u, type: a });
    if (f in this.pluralRulesCache) return this.pluralRulesCache[f];
    let h;
    try {
      h = new Intl.PluralRules(u, { type: a });
    } catch {
      if (!Intl)
        return (
          this.logger.error("No Intl support, please use an Intl polyfill!"), hc
        );
      if (!s.match(/-|_/)) return hc;
      const x = this.languageUtils.getLanguagePartFromCode(s);
      h = this.getRule(x, o);
    }
    return (this.pluralRulesCache[f] = h), h;
  }
  needsPlural(s, o = {}) {
    let u = this.getRule(s, o);
    return (
      u || (u = this.getRule("dev", o)),
      (u == null ? void 0 : u.resolvedOptions().pluralCategories.length) > 1
    );
  }
  getPluralFormsOfKey(s, o, u = {}) {
    return this.getSuffixes(s, u).map((a) => `${o}${a}`);
  }
  getSuffixes(s, o = {}) {
    let u = this.getRule(s, o);
    return (
      u || (u = this.getRule("dev", o)),
      u
        ? u
            .resolvedOptions()
            .pluralCategories.sort((a, f) => pc[a] - pc[f])
            .map(
              (a) =>
                `${this.options.prepend}${
                  o.ordinal ? `ordinal${this.options.prepend}` : ""
                }${a}`
            )
        : []
    );
  }
  getSuffix(s, o, u = {}) {
    const a = this.getRule(s, u);
    return a
      ? `${this.options.prepend}${
          u.ordinal ? `ordinal${this.options.prepend}` : ""
        }${a.select(o)}`
      : (this.logger.warn(`no plural rule found for: ${s}`),
        this.getSuffix("dev", o, u));
  }
}
const gc = (c, s, o, u = ".", a = !0) => {
    let f = op(c, s, o);
    return (
      !f && a && Y(o) && ((f = Yl(c, o, u)), f === void 0 && (f = Yl(s, o, u))),
      f
    );
  },
  Ql = (c) => c.replace(/\$/g, "$$$$");
class vp {
  constructor(s = {}) {
    var o;
    (this.logger = jt.create("interpolator")),
      (this.options = s),
      (this.format =
        ((o = s == null ? void 0 : s.interpolation) == null
          ? void 0
          : o.format) || ((u) => u)),
      this.init(s);
  }
  init(s = {}) {
    s.interpolation || (s.interpolation = { escapeValue: !0 });
    const {
      escape: o,
      escapeValue: u,
      useRawValueToEscape: a,
      prefix: f,
      prefixEscaped: h,
      suffix: m,
      suffixEscaped: x,
      formatSeparator: k,
      unescapeSuffix: C,
      unescapePrefix: E,
      nestingPrefix: z,
      nestingPrefixEscaped: I,
      nestingSuffix: T,
      nestingSuffixEscaped: V,
      nestingOptionsSeparator: K,
      maxReplaces: ve,
      alwaysFormat: oe,
    } = s.interpolation;
    (this.escape = o !== void 0 ? o : up),
      (this.escapeValue = u !== void 0 ? u : !0),
      (this.useRawValueToEscape = a !== void 0 ? a : !1),
      (this.prefix = f ? bn(f) : h || "{{"),
      (this.suffix = m ? bn(m) : x || "}}"),
      (this.formatSeparator = k || ","),
      (this.unescapePrefix = C ? "" : E || "-"),
      (this.unescapeSuffix = this.unescapePrefix ? "" : C || ""),
      (this.nestingPrefix = z ? bn(z) : I || bn("$t(")),
      (this.nestingSuffix = T ? bn(T) : V || bn(")")),
      (this.nestingOptionsSeparator = K || ","),
      (this.maxReplaces = ve || 1e3),
      (this.alwaysFormat = oe !== void 0 ? oe : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const s = (o, u) =>
      (o == null ? void 0 : o.source) === u
        ? ((o.lastIndex = 0), o)
        : new RegExp(u, "g");
    (this.regexp = s(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = s(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`
      )),
      (this.nestingRegexp = s(
        this.nestingRegexp,
        `${this.nestingPrefix}((?:[^()"']+|"[^"]*"|'[^']*'|\\((?:[^()]|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`
      ));
  }
  interpolate(s, o, u, a) {
    var I;
    let f, h, m;
    const x =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      k = (T) => {
        if (T.indexOf(this.formatSeparator) < 0) {
          const oe = gc(
            o,
            x,
            T,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          );
          return this.alwaysFormat
            ? this.format(oe, void 0, u, { ...a, ...o, interpolationkey: T })
            : oe;
        }
        const V = T.split(this.formatSeparator),
          K = V.shift().trim(),
          ve = V.join(this.formatSeparator).trim();
        return this.format(
          gc(
            o,
            x,
            K,
            this.options.keySeparator,
            this.options.ignoreJSONStructure
          ),
          ve,
          u,
          { ...a, ...o, interpolationkey: K }
        );
      };
    this.resetRegExp();
    const C =
        (a == null ? void 0 : a.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      E =
        ((I = a == null ? void 0 : a.interpolation) == null
          ? void 0
          : I.skipOnVariables) !== void 0
          ? a.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: (T) => Ql(T) },
        {
          regex: this.regexp,
          safeValue: (T) => (this.escapeValue ? Ql(this.escape(T)) : Ql(T)),
        },
      ].forEach((T) => {
        for (m = 0; (f = T.regex.exec(s)); ) {
          const V = f[1].trim();
          if (((h = k(V)), h === void 0))
            if (typeof C == "function") {
              const ve = C(s, f, a);
              h = Y(ve) ? ve : "";
            } else if (a && Object.prototype.hasOwnProperty.call(a, V)) h = "";
            else if (E) {
              h = f[0];
              continue;
            } else
              this.logger.warn(
                `missed to pass in variable ${V} for interpolating ${s}`
              ),
                (h = "");
          else !Y(h) && !this.useRawValueToEscape && (h = lc(h));
          const K = T.safeValue(h);
          if (
            ((s = s.replace(f[0], K)),
            E
              ? ((T.regex.lastIndex += h.length),
                (T.regex.lastIndex -= f[0].length))
              : (T.regex.lastIndex = 0),
            m++,
            m >= this.maxReplaces)
          )
            break;
        }
      }),
      s
    );
  }
  nest(s, o, u = {}) {
    let a, f, h;
    const m = (x, k) => {
      const C = this.nestingOptionsSeparator;
      if (x.indexOf(C) < 0) return x;
      const E = x.split(new RegExp(`${C}[ ]*{`));
      let z = `{${E[1]}`;
      (x = E[0]), (z = this.interpolate(z, h));
      const I = z.match(/'/g),
        T = z.match(/"/g);
      ((((I == null ? void 0 : I.length) ?? 0) % 2 === 0 && !T) ||
        T.length % 2 !== 0) &&
        (z = z.replace(/'/g, '"'));
      try {
        (h = JSON.parse(z)), k && (h = { ...k, ...h });
      } catch (V) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${x}`,
            V
          ),
          `${x}${C}${z}`
        );
      }
      return (
        h.defaultValue &&
          h.defaultValue.indexOf(this.prefix) > -1 &&
          delete h.defaultValue,
        x
      );
    };
    for (; (a = this.nestingRegexp.exec(s)); ) {
      let x = [];
      (h = { ...u }),
        (h = h.replace && !Y(h.replace) ? h.replace : h),
        (h.applyPostProcessor = !1),
        delete h.defaultValue;
      const k = /{.*}/.test(a[1])
        ? a[1].lastIndexOf("}") + 1
        : a[1].indexOf(this.formatSeparator);
      if (
        (k !== -1 &&
          ((x = a[1]
            .slice(k)
            .split(this.formatSeparator)
            .map((C) => C.trim())
            .filter(Boolean)),
          (a[1] = a[1].slice(0, k))),
        (f = o(m.call(this, a[1].trim(), h), h)),
        f && a[0] === s && !Y(f))
      )
        return f;
      Y(f) || (f = lc(f)),
        f ||
          (this.logger.warn(`missed to resolve ${a[1]} for nesting ${s}`),
          (f = "")),
        x.length &&
          (f = x.reduce(
            (C, E) =>
              this.format(C, E, u.lng, { ...u, interpolationkey: a[1].trim() }),
            f.trim()
          )),
        (s = s.replace(a[0], f)),
        (this.regexp.lastIndex = 0);
    }
    return s;
  }
}
const yp = (c) => {
    let s = c.toLowerCase().trim();
    const o = {};
    if (c.indexOf("(") > -1) {
      const u = c.split("(");
      s = u[0].toLowerCase().trim();
      const a = u[1].substring(0, u[1].length - 1);
      s === "currency" && a.indexOf(":") < 0
        ? o.currency || (o.currency = a.trim())
        : s === "relativetime" && a.indexOf(":") < 0
        ? o.range || (o.range = a.trim())
        : a.split(";").forEach((h) => {
            if (h) {
              const [m, ...x] = h.split(":"),
                k = x
                  .join(":")
                  .trim()
                  .replace(/^'+|'+$/g, ""),
                C = m.trim();
              o[C] || (o[C] = k),
                k === "false" && (o[C] = !1),
                k === "true" && (o[C] = !0),
                isNaN(k) || (o[C] = parseInt(k, 10));
            }
          });
    }
    return { formatName: s, formatOptions: o };
  },
  mc = (c) => {
    const s = {};
    return (o, u, a) => {
      let f = a;
      a &&
        a.interpolationkey &&
        a.formatParams &&
        a.formatParams[a.interpolationkey] &&
        a[a.interpolationkey] &&
        (f = { ...f, [a.interpolationkey]: void 0 });
      const h = u + JSON.stringify(f);
      let m = s[h];
      return m || ((m = c(Or(u), a)), (s[h] = m)), m(o);
    };
  },
  xp = (c) => (s, o, u) => c(Or(o), u)(s);
class wp {
  constructor(s = {}) {
    (this.logger = jt.create("formatter")), (this.options = s), this.init(s);
  }
  init(s, o = { interpolation: {} }) {
    this.formatSeparator = o.interpolation.formatSeparator || ",";
    const u = o.cacheInBuiltFormats ? mc : xp;
    this.formats = {
      number: u((a, f) => {
        const h = new Intl.NumberFormat(a, { ...f });
        return (m) => h.format(m);
      }),
      currency: u((a, f) => {
        const h = new Intl.NumberFormat(a, { ...f, style: "currency" });
        return (m) => h.format(m);
      }),
      datetime: u((a, f) => {
        const h = new Intl.DateTimeFormat(a, { ...f });
        return (m) => h.format(m);
      }),
      relativetime: u((a, f) => {
        const h = new Intl.RelativeTimeFormat(a, { ...f });
        return (m) => h.format(m, f.range || "day");
      }),
      list: u((a, f) => {
        const h = new Intl.ListFormat(a, { ...f });
        return (m) => h.format(m);
      }),
    };
  }
  add(s, o) {
    this.formats[s.toLowerCase().trim()] = o;
  }
  addCached(s, o) {
    this.formats[s.toLowerCase().trim()] = mc(o);
  }
  format(s, o, u, a = {}) {
    const f = o.split(this.formatSeparator);
    if (
      f.length > 1 &&
      f[0].indexOf("(") > 1 &&
      f[0].indexOf(")") < 0 &&
      f.find((m) => m.indexOf(")") > -1)
    ) {
      const m = f.findIndex((x) => x.indexOf(")") > -1);
      f[0] = [f[0], ...f.splice(1, m)].join(this.formatSeparator);
    }
    return f.reduce((m, x) => {
      var E;
      const { formatName: k, formatOptions: C } = yp(x);
      if (this.formats[k]) {
        let z = m;
        try {
          const I =
              ((E = a == null ? void 0 : a.formatParams) == null
                ? void 0
                : E[a.interpolationkey]) || {},
            T = I.locale || I.lng || a.locale || a.lng || u;
          z = this.formats[k](m, T, { ...C, ...a, ...I });
        } catch (I) {
          this.logger.warn(I);
        }
        return z;
      } else this.logger.warn(`there was no format function for ${k}`);
      return m;
    }, s);
  }
}
const kp = (c, s) => {
  c.pending[s] !== void 0 && (delete c.pending[s], c.pendingCount--);
};
class Sp extends Qi {
  constructor(s, o, u, a = {}) {
    var f, h;
    super(),
      (this.backend = s),
      (this.store = o),
      (this.services = u),
      (this.languageUtils = u.languageUtils),
      (this.options = a),
      (this.logger = jt.create("backendConnector")),
      (this.waitingReads = []),
      (this.maxParallelReads = a.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5),
      (this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      (h = (f = this.backend) == null ? void 0 : f.init) == null ||
        h.call(f, u, a.backend, a);
  }
  queueLoad(s, o, u, a) {
    const f = {},
      h = {},
      m = {},
      x = {};
    return (
      s.forEach((k) => {
        let C = !0;
        o.forEach((E) => {
          const z = `${k}|${E}`;
          !u.reload && this.store.hasResourceBundle(k, E)
            ? (this.state[z] = 2)
            : this.state[z] < 0 ||
              (this.state[z] === 1
                ? h[z] === void 0 && (h[z] = !0)
                : ((this.state[z] = 1),
                  (C = !1),
                  h[z] === void 0 && (h[z] = !0),
                  f[z] === void 0 && (f[z] = !0),
                  x[E] === void 0 && (x[E] = !0)));
        }),
          C || (m[k] = !0);
      }),
      (Object.keys(f).length || Object.keys(h).length) &&
        this.queue.push({
          pending: h,
          pendingCount: Object.keys(h).length,
          loaded: {},
          errors: [],
          callback: a,
        }),
      {
        toLoad: Object.keys(f),
        pending: Object.keys(h),
        toLoadLanguages: Object.keys(m),
        toLoadNamespaces: Object.keys(x),
      }
    );
  }
  loaded(s, o, u) {
    const a = s.split("|"),
      f = a[0],
      h = a[1];
    o && this.emit("failedLoading", f, h, o),
      !o &&
        u &&
        this.store.addResourceBundle(f, h, u, void 0, void 0, { skipCopy: !0 }),
      (this.state[s] = o ? -1 : 2),
      o && u && (this.state[s] = 0);
    const m = {};
    this.queue.forEach((x) => {
      lp(x.loaded, [f], h),
        kp(x, s),
        o && x.errors.push(o),
        x.pendingCount === 0 &&
          !x.done &&
          (Object.keys(x.loaded).forEach((k) => {
            m[k] || (m[k] = {});
            const C = x.loaded[k];
            C.length &&
              C.forEach((E) => {
                m[k][E] === void 0 && (m[k][E] = !0);
              });
          }),
          (x.done = !0),
          x.errors.length ? x.callback(x.errors) : x.callback());
    }),
      this.emit("loaded", m),
      (this.queue = this.queue.filter((x) => !x.done));
  }
  read(s, o, u, a = 0, f = this.retryTimeout, h) {
    if (!s.length) return h(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: s,
        ns: o,
        fcName: u,
        tried: a,
        wait: f,
        callback: h,
      });
      return;
    }
    this.readingCalls++;
    const m = (k, C) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const E = this.waitingReads.shift();
          this.read(E.lng, E.ns, E.fcName, E.tried, E.wait, E.callback);
        }
        if (k && C && a < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, s, o, u, a + 1, f * 2, h);
          }, f);
          return;
        }
        h(k, C);
      },
      x = this.backend[u].bind(this.backend);
    if (x.length === 2) {
      try {
        const k = x(s, o);
        k && typeof k.then == "function"
          ? k.then((C) => m(null, C)).catch(m)
          : m(null, k);
      } catch (k) {
        m(k);
      }
      return;
    }
    return x(s, o, m);
  }
  prepareLoading(s, o, u = {}, a) {
    if (!this.backend)
      return (
        this.logger.warn(
          "No backend was added via i18next.use. Will not load resources."
        ),
        a && a()
      );
    Y(s) && (s = this.languageUtils.toResolveHierarchy(s)), Y(o) && (o = [o]);
    const f = this.queueLoad(s, o, u, a);
    if (!f.toLoad.length) return f.pending.length || a(), null;
    f.toLoad.forEach((h) => {
      this.loadOne(h);
    });
  }
  load(s, o, u) {
    this.prepareLoading(s, o, {}, u);
  }
  reload(s, o, u) {
    this.prepareLoading(s, o, { reload: !0 }, u);
  }
  loadOne(s, o = "") {
    const u = s.split("|"),
      a = u[0],
      f = u[1];
    this.read(a, f, "read", void 0, void 0, (h, m) => {
      h &&
        this.logger.warn(
          `${o}loading namespace ${f} for language ${a} failed`,
          h
        ),
        !h &&
          m &&
          this.logger.log(`${o}loaded namespace ${f} for language ${a}`, m),
        this.loaded(s, h, m);
    });
  }
  saveMissing(s, o, u, a, f, h = {}, m = () => {}) {
    var x, k, C, E, z;
    if (
      (k = (x = this.services) == null ? void 0 : x.utils) != null &&
      k.hasLoadedNamespace &&
      !(
        (E = (C = this.services) == null ? void 0 : C.utils) != null &&
        E.hasLoadedNamespace(o)
      )
    ) {
      this.logger.warn(
        `did not save key "${u}" as the namespace "${o}" was not yet loaded`,
        "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!"
      );
      return;
    }
    if (!(u == null || u === "")) {
      if ((z = this.backend) != null && z.create) {
        const I = { ...h, isUpdate: f },
          T = this.backend.create.bind(this.backend);
        if (T.length < 6)
          try {
            let V;
            T.length === 5 ? (V = T(s, o, u, a, I)) : (V = T(s, o, u, a)),
              V && typeof V.then == "function"
                ? V.then((K) => m(null, K)).catch(m)
                : m(null, V);
          } catch (V) {
            m(V);
          }
        else T(s, o, u, a, m, I);
      }
      !s || !s[0] || this.store.addResource(s[0], o, u, a);
    }
  }
}
const vc = () => ({
    debug: !1,
    initAsync: !0,
    ns: ["translation"],
    defaultNS: ["translation"],
    fallbackLng: ["dev"],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: "all",
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: ".",
    nsSeparator: ":",
    pluralSeparator: "_",
    contextSeparator: "_",
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: "fallback",
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (c) => {
      let s = {};
      if (
        (typeof c[1] == "object" && (s = c[1]),
        Y(c[1]) && (s.defaultValue = c[1]),
        Y(c[2]) && (s.tDescription = c[2]),
        typeof c[2] == "object" || typeof c[3] == "object")
      ) {
        const o = c[3] || c[2];
        Object.keys(o).forEach((u) => {
          s[u] = o[u];
        });
      }
      return s;
    },
    interpolation: {
      escapeValue: !0,
      format: (c) => c,
      prefix: "{{",
      suffix: "}}",
      formatSeparator: ",",
      unescapePrefix: "-",
      nestingPrefix: "$t(",
      nestingSuffix: ")",
      nestingOptionsSeparator: ",",
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
    cacheInBuiltFormats: !0,
  }),
  yc = (c) => {
    var s, o;
    return (
      Y(c.ns) && (c.ns = [c.ns]),
      Y(c.fallbackLng) && (c.fallbackLng = [c.fallbackLng]),
      Y(c.fallbackNS) && (c.fallbackNS = [c.fallbackNS]),
      ((o = (s = c.supportedLngs) == null ? void 0 : s.indexOf) == null
        ? void 0
        : o.call(s, "cimode")) < 0 &&
        (c.supportedLngs = c.supportedLngs.concat(["cimode"])),
      typeof c.initImmediate == "boolean" && (c.initAsync = c.initImmediate),
      c
    );
  },
  Bi = () => {},
  Np = (c) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(c)).forEach((o) => {
      typeof c[o] == "function" && (c[o] = c[o].bind(c));
    });
  };
class Rr extends Qi {
  constructor(s = {}, o) {
    if (
      (super(),
      (this.options = yc(s)),
      (this.services = {}),
      (this.logger = jt),
      (this.modules = { external: [] }),
      Np(this),
      o && !this.isInitialized && !s.isClone)
    ) {
      if (!this.options.initAsync) return this.init(s, o), this;
      setTimeout(() => {
        this.init(s, o);
      }, 0);
    }
  }
  init(s = {}, o) {
    (this.isInitializing = !0),
      typeof s == "function" && ((o = s), (s = {})),
      s.defaultNS == null &&
        s.ns &&
        (Y(s.ns)
          ? (s.defaultNS = s.ns)
          : s.ns.indexOf("translation") < 0 && (s.defaultNS = s.ns[0]));
    const u = vc();
    (this.options = { ...u, ...this.options, ...yc(s) }),
      (this.options.interpolation = {
        ...u.interpolation,
        ...this.options.interpolation,
      }),
      s.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = s.keySeparator),
      s.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = s.nsSeparator);
    const a = (k) => (k ? (typeof k == "function" ? new k() : k) : null);
    if (!this.options.isClone) {
      this.modules.logger
        ? jt.init(a(this.modules.logger), this.options)
        : jt.init(null, this.options);
      let k;
      this.modules.formatter ? (k = this.modules.formatter) : (k = wp);
      const C = new fc(this.options);
      this.store = new cc(this.options.resources, this.options);
      const E = this.services;
      (E.logger = jt),
        (E.resourceStore = this.store),
        (E.languageUtils = C),
        (E.pluralResolver = new mp(C, {
          prepend: this.options.pluralSeparator,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        this.options.interpolation.format &&
          this.options.interpolation.format !== u.interpolation.format &&
          this.logger.deprecate(
            "init: you are still using the legacy format function, please use the new approach: https://www.i18next.com/translation-function/formatting"
          ),
        k &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === u.interpolation.format) &&
          ((E.formatter = a(k)),
          E.formatter.init && E.formatter.init(E, this.options),
          (this.options.interpolation.format = E.formatter.format.bind(
            E.formatter
          ))),
        (E.interpolator = new vp(this.options)),
        (E.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (E.backendConnector = new Sp(
          a(this.modules.backend),
          E.resourceStore,
          E,
          this.options
        )),
        E.backendConnector.on("*", (I, ...T) => {
          this.emit(I, ...T);
        }),
        this.modules.languageDetector &&
          ((E.languageDetector = a(this.modules.languageDetector)),
          E.languageDetector.init &&
            E.languageDetector.init(E, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((E.i18nFormat = a(this.modules.i18nFormat)),
          E.i18nFormat.init && E.i18nFormat.init(this)),
        (this.translator = new Ki(this.services, this.options)),
        this.translator.on("*", (I, ...T) => {
          this.emit(I, ...T);
        }),
        this.modules.external.forEach((I) => {
          I.init && I.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      o || (o = Bi),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const k = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng
      );
      k.length > 0 && k[0] !== "dev" && (this.options.lng = k[0]);
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        "init: no languageDetector is used and no lng is defined"
      ),
      [
        "getResource",
        "hasResourceBundle",
        "getResourceBundle",
        "getDataByLanguage",
      ].forEach((k) => {
        this[k] = (...C) => this.store[k](...C);
      }),
      [
        "addResource",
        "addResources",
        "addResourceBundle",
        "removeResourceBundle",
      ].forEach((k) => {
        this[k] = (...C) => (this.store[k](...C), this);
      });
    const m = Lr(),
      x = () => {
        const k = (C, E) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                "init: i18next is already initialized. You should call init just once!"
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log("initialized", this.options),
            this.emit("initialized", this.options),
            m.resolve(E),
            o(C, E);
        };
        if (this.languages && !this.isInitialized)
          return k(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, k);
      };
    return (
      this.options.resources || !this.options.initAsync
        ? x()
        : setTimeout(x, 0),
      m
    );
  }
  loadResources(s, o = Bi) {
    var f, h;
    let u = o;
    const a = Y(s) ? s : this.language;
    if (
      (typeof s == "function" && (u = s),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        (a == null ? void 0 : a.toLowerCase()) === "cimode" &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return u();
      const m = [],
        x = (k) => {
          if (!k || k === "cimode") return;
          this.services.languageUtils.toResolveHierarchy(k).forEach((E) => {
            E !== "cimode" && m.indexOf(E) < 0 && m.push(E);
          });
        };
      a
        ? x(a)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((C) => x(C)),
        (h = (f = this.options.preload) == null ? void 0 : f.forEach) == null ||
          h.call(f, (k) => x(k)),
        this.services.backendConnector.load(m, this.options.ns, (k) => {
          !k &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            u(k);
        });
    } else u(null);
  }
  reloadResources(s, o, u) {
    const a = Lr();
    return (
      typeof s == "function" && ((u = s), (s = void 0)),
      typeof o == "function" && ((u = o), (o = void 0)),
      s || (s = this.languages),
      o || (o = this.options.ns),
      u || (u = Bi),
      this.services.backendConnector.reload(s, o, (f) => {
        a.resolve(), u(f);
      }),
      a
    );
  }
  use(s) {
    if (!s)
      throw new Error(
        "You are passing an undefined module! Please check the object you are passing to i18next.use()"
      );
    if (!s.type)
      throw new Error(
        "You are passing a wrong module! Please check the object you are passing to i18next.use()"
      );
    return (
      s.type === "backend" && (this.modules.backend = s),
      (s.type === "logger" || (s.log && s.warn && s.error)) &&
        (this.modules.logger = s),
      s.type === "languageDetector" && (this.modules.languageDetector = s),
      s.type === "i18nFormat" && (this.modules.i18nFormat = s),
      s.type === "postProcessor" && Lc.addPostProcessor(s),
      s.type === "formatter" && (this.modules.formatter = s),
      s.type === "3rdParty" && this.modules.external.push(s),
      this
    );
  }
  setResolvedLanguage(s) {
    if (!(!s || !this.languages) && !(["cimode", "dev"].indexOf(s) > -1)) {
      for (let o = 0; o < this.languages.length; o++) {
        const u = this.languages[o];
        if (
          !(["cimode", "dev"].indexOf(u) > -1) &&
          this.store.hasLanguageSomeTranslations(u)
        ) {
          this.resolvedLanguage = u;
          break;
        }
      }
      !this.resolvedLanguage &&
        this.languages.indexOf(s) < 0 &&
        this.store.hasLanguageSomeTranslations(s) &&
        ((this.resolvedLanguage = s), this.languages.unshift(s));
    }
  }
  changeLanguage(s, o) {
    this.isLanguageChangingTo = s;
    const u = Lr();
    this.emit("languageChanging", s);
    const a = (m) => {
        (this.language = m),
          (this.languages = this.services.languageUtils.toResolveHierarchy(m)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(m);
      },
      f = (m, x) => {
        x
          ? this.isLanguageChangingTo === s &&
            (a(x),
            this.translator.changeLanguage(x),
            (this.isLanguageChangingTo = void 0),
            this.emit("languageChanged", x),
            this.logger.log("languageChanged", x))
          : (this.isLanguageChangingTo = void 0),
          u.resolve((...k) => this.t(...k)),
          o && o(m, (...k) => this.t(...k));
      },
      h = (m) => {
        var C, E;
        !s && !m && this.services.languageDetector && (m = []);
        const x = Y(m) ? m : m && m[0],
          k = this.store.hasLanguageSomeTranslations(x)
            ? x
            : this.services.languageUtils.getBestMatchFromCodes(Y(m) ? [m] : m);
        k &&
          (this.language || a(k),
          this.translator.language || this.translator.changeLanguage(k),
          (E =
            (C = this.services.languageDetector) == null
              ? void 0
              : C.cacheUserLanguage) == null || E.call(C, k)),
          this.loadResources(k, (z) => {
            f(z, k);
          });
      };
    return (
      !s &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? h(this.services.languageDetector.detect())
        : !s &&
          this.services.languageDetector &&
          this.services.languageDetector.async
        ? this.services.languageDetector.detect.length === 0
          ? this.services.languageDetector.detect().then(h)
          : this.services.languageDetector.detect(h)
        : h(s),
      u
    );
  }
  getFixedT(s, o, u) {
    const a = (f, h, ...m) => {
      let x;
      typeof h != "object"
        ? (x = this.options.overloadTranslationOptionHandler([f, h].concat(m)))
        : (x = { ...h }),
        (x.lng = x.lng || a.lng),
        (x.lngs = x.lngs || a.lngs),
        (x.ns = x.ns || a.ns),
        x.keyPrefix !== "" && (x.keyPrefix = x.keyPrefix || u || a.keyPrefix);
      const k = this.options.keySeparator || ".";
      let C;
      return (
        x.keyPrefix && Array.isArray(f)
          ? (C = f.map(
              (E) => (
                typeof E == "function" &&
                  (E = Zl(E, { ...this.options, ...h })),
                `${x.keyPrefix}${k}${E}`
              )
            ))
          : (typeof f == "function" && (f = Zl(f, { ...this.options, ...h })),
            (C = x.keyPrefix ? `${x.keyPrefix}${k}${f}` : f)),
        this.t(C, x)
      );
    };
    return Y(s) ? (a.lng = s) : (a.lngs = s), (a.ns = o), (a.keyPrefix = u), a;
  }
  t(...s) {
    var o;
    return (o = this.translator) == null ? void 0 : o.translate(...s);
  }
  exists(...s) {
    var o;
    return (o = this.translator) == null ? void 0 : o.exists(...s);
  }
  setDefaultNamespace(s) {
    this.options.defaultNS = s;
  }
  hasLoadedNamespace(s, o = {}) {
    if (!this.isInitialized)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18next was not initialized",
          this.languages
        ),
        !1
      );
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          "hasLoadedNamespace: i18n.languages were undefined or empty",
          this.languages
        ),
        !1
      );
    const u = o.lng || this.resolvedLanguage || this.languages[0],
      a = this.options ? this.options.fallbackLng : !1,
      f = this.languages[this.languages.length - 1];
    if (u.toLowerCase() === "cimode") return !0;
    const h = (m, x) => {
      const k = this.services.backendConnector.state[`${m}|${x}`];
      return k === -1 || k === 0 || k === 2;
    };
    if (o.precheck) {
      const m = o.precheck(this, h);
      if (m !== void 0) return m;
    }
    return !!(
      this.hasResourceBundle(u, s) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (h(u, s) && (!a || h(f, s)))
    );
  }
  loadNamespaces(s, o) {
    const u = Lr();
    return this.options.ns
      ? (Y(s) && (s = [s]),
        s.forEach((a) => {
          this.options.ns.indexOf(a) < 0 && this.options.ns.push(a);
        }),
        this.loadResources((a) => {
          u.resolve(), o && o(a);
        }),
        u)
      : (o && o(), Promise.resolve());
  }
  loadLanguages(s, o) {
    const u = Lr();
    Y(s) && (s = [s]);
    const a = this.options.preload || [],
      f = s.filter(
        (h) =>
          a.indexOf(h) < 0 && this.services.languageUtils.isSupportedCode(h)
      );
    return f.length
      ? ((this.options.preload = a.concat(f)),
        this.loadResources((h) => {
          u.resolve(), o && o(h);
        }),
        u)
      : (o && o(), Promise.resolve());
  }
  dir(s) {
    var a, f;
    if (
      (s ||
        (s =
          this.resolvedLanguage ||
          (((a = this.languages) == null ? void 0 : a.length) > 0
            ? this.languages[0]
            : this.language)),
      !s)
    )
      return "rtl";
    try {
      const h = new Intl.Locale(s);
      if (h && h.getTextInfo) {
        const m = h.getTextInfo();
        if (m && m.direction) return m.direction;
      }
    } catch {}
    const o = [
        "ar",
        "shu",
        "sqr",
        "ssh",
        "xaa",
        "yhd",
        "yud",
        "aao",
        "abh",
        "abv",
        "acm",
        "acq",
        "acw",
        "acx",
        "acy",
        "adf",
        "ads",
        "aeb",
        "aec",
        "afb",
        "ajp",
        "apc",
        "apd",
        "arb",
        "arq",
        "ars",
        "ary",
        "arz",
        "auz",
        "avl",
        "ayh",
        "ayl",
        "ayn",
        "ayp",
        "bbz",
        "pga",
        "he",
        "iw",
        "ps",
        "pbt",
        "pbu",
        "pst",
        "prp",
        "prd",
        "ug",
        "ur",
        "ydd",
        "yds",
        "yih",
        "ji",
        "yi",
        "hbo",
        "men",
        "xmn",
        "fa",
        "jpr",
        "peo",
        "pes",
        "prs",
        "dv",
        "sam",
        "ckb",
      ],
      u =
        ((f = this.services) == null ? void 0 : f.languageUtils) ||
        new fc(vc());
    return s.toLowerCase().indexOf("-latn") > 1
      ? "ltr"
      : o.indexOf(u.getLanguagePartFromCode(s)) > -1 ||
        s.toLowerCase().indexOf("-arab") > 1
      ? "rtl"
      : "ltr";
  }
  static createInstance(s = {}, o) {
    return new Rr(s, o);
  }
  cloneInstance(s = {}, o = Bi) {
    const u = s.forkResourceStore;
    u && delete s.forkResourceStore;
    const a = { ...this.options, ...s, isClone: !0 },
      f = new Rr(a);
    if (
      ((s.debug !== void 0 || s.prefix !== void 0) &&
        (f.logger = f.logger.clone(s)),
      ["store", "services", "language"].forEach((m) => {
        f[m] = this[m];
      }),
      (f.services = { ...this.services }),
      (f.services.utils = { hasLoadedNamespace: f.hasLoadedNamespace.bind(f) }),
      u)
    ) {
      const m = Object.keys(this.store.data).reduce(
        (x, k) => (
          (x[k] = { ...this.store.data[k] }),
          (x[k] = Object.keys(x[k]).reduce(
            (C, E) => ((C[E] = { ...x[k][E] }), C),
            x[k]
          )),
          x
        ),
        {}
      );
      (f.store = new cc(m, a)), (f.services.resourceStore = f.store);
    }
    return (
      (f.translator = new Ki(f.services, a)),
      f.translator.on("*", (m, ...x) => {
        f.emit(m, ...x);
      }),
      f.init(a, o),
      (f.translator.options = a),
      (f.translator.backendConnector.services.utils = {
        hasLoadedNamespace: f.hasLoadedNamespace.bind(f),
      }),
      f
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const He = Rr.createInstance();
He.createInstance = Rr.createInstance;
He.createInstance;
He.dir;
He.init;
He.loadResources;
He.reloadResources;
He.use;
He.changeLanguage;
He.getFixedT;
He.t;
He.exists;
He.setDefaultNamespace;
He.hasLoadedNamespace;
He.loadNamespaces;
He.loadLanguages;
const jp = (c, s, o, u) => {
    var f, h, m, x;
    const a = [o, { code: s, ...(u || {}) }];
    if (
      (h = (f = c == null ? void 0 : c.services) == null ? void 0 : f.logger) !=
        null &&
      h.forward
    )
      return c.services.logger.forward(a, "warn", "react-i18next::", !0);
    fn(a[0]) && (a[0] = `react-i18next:: ${a[0]}`),
      (x = (m = c == null ? void 0 : c.services) == null ? void 0 : m.logger) !=
        null && x.warn
        ? c.services.logger.warn(...a)
        : console != null && console.warn && console.warn(...a);
  },
  xc = {},
  Gl = (c, s, o, u) => {
    (fn(o) && xc[o]) || (fn(o) && (xc[o] = new Date()), jp(c, s, o, u));
  },
  Oc = (c, s) => () => {
    if (c.isInitialized) s();
    else {
      const o = () => {
        setTimeout(() => {
          c.off("initialized", o);
        }, 0),
          s();
      };
      c.on("initialized", o);
    }
  },
  Xl = (c, s, o) => {
    c.loadNamespaces(s, Oc(c, o));
  },
  wc = (c, s, o, u) => {
    if (
      (fn(o) && (o = [o]),
      c.options.preload && c.options.preload.indexOf(s) > -1)
    )
      return Xl(c, o, u);
    o.forEach((a) => {
      c.options.ns.indexOf(a) < 0 && c.options.ns.push(a);
    }),
      c.loadLanguages(s, Oc(c, u));
  },
  Cp = (c, s, o = {}) =>
    !s.languages || !s.languages.length
      ? (Gl(s, "NO_LANGUAGES", "i18n.languages were undefined or empty", {
          languages: s.languages,
        }),
        !0)
      : s.hasLoadedNamespace(c, {
          lng: o.lng,
          precheck: (u, a) => {
            if (
              o.bindI18n &&
              o.bindI18n.indexOf("languageChanging") > -1 &&
              u.services.backendConnector.backend &&
              u.isLanguageChangingTo &&
              !a(u.isLanguageChangingTo, c)
            )
              return !1;
          },
        }),
  fn = (c) => typeof c == "string",
  Ep = (c) => typeof c == "object" && c !== null,
  Lp = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  Pp = {
    "&amp;": "&",
    "&#38;": "&",
    "&lt;": "<",
    "&#60;": "<",
    "&gt;": ">",
    "&#62;": ">",
    "&apos;": "'",
    "&#39;": "'",
    "&quot;": '"',
    "&#34;": '"',
    "&nbsp;": " ",
    "&#160;": " ",
    "&copy;": "©",
    "&#169;": "©",
    "&reg;": "®",
    "&#174;": "®",
    "&hellip;": "…",
    "&#8230;": "…",
    "&#x2F;": "/",
    "&#47;": "/",
  },
  Op = (c) => Pp[c],
  Rp = (c) => c.replace(Lp, Op);
let Jl = {
  bindI18n: "languageChanged",
  bindI18nStore: "",
  transEmptyNodeValue: "",
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: "",
  transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
  useSuspense: !0,
  unescape: Rp,
};
const _p = (c = {}) => {
    Jl = { ...Jl, ...c };
  },
  Tp = () => Jl;
let Rc;
const Fp = (c) => {
    Rc = c;
  },
  zp = () => Rc,
  Ip = {
    type: "3rdParty",
    init(c) {
      _p(c.options.react), Fp(c);
    },
  },
  Dp = De.createContext();
class Mp {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(s) {
    s.forEach((o) => {
      this.usedNamespaces[o] || (this.usedNamespaces[o] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const bp = (c, s) => {
    const o = De.useRef();
    return (
      De.useEffect(() => {
        o.current = c;
      }, [c, s]),
      o.current
    );
  },
  _c = (c, s, o, u) => c.getFixedT(s, o, u),
  $p = (c, s, o, u) => De.useCallback(_c(c, s, o, u), [c, s, o, u]),
  _r = (c, s = {}) => {
    var ee, ye, Se, ce;
    const { i18n: o } = s,
      { i18n: u, defaultNS: a } = De.useContext(Dp) || {},
      f = o || u || zp();
    if ((f && !f.reportNamespaces && (f.reportNamespaces = new Mp()), !f)) {
      Gl(
        f,
        "NO_I18NEXT_INSTANCE",
        "useTranslation: You will need to pass in an i18next instance by using initReactI18next"
      );
      const te = (J, Re) =>
          fn(Re)
            ? Re
            : Ep(Re) && fn(Re.defaultValue)
            ? Re.defaultValue
            : Array.isArray(J)
            ? J[J.length - 1]
            : J,
        re = [te, {}, !1];
      return (re.t = te), (re.i18n = {}), (re.ready = !1), re;
    }
    (ee = f.options.react) != null &&
      ee.wait &&
      Gl(
        f,
        "DEPRECATED_OPTION",
        "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour."
      );
    const h = { ...Tp(), ...f.options.react, ...s },
      { useSuspense: m, keyPrefix: x } = h;
    let k = a || ((ye = f.options) == null ? void 0 : ye.defaultNS);
    (k = fn(k) ? [k] : k || ["translation"]),
      (ce = (Se = f.reportNamespaces).addUsedNamespaces) == null ||
        ce.call(Se, k);
    const C =
        (f.isInitialized || f.initializedStoreOnce) &&
        k.every((te) => Cp(te, f, h)),
      E = $p(f, s.lng || null, h.nsMode === "fallback" ? k : k[0], x),
      z = () => E,
      I = () => _c(f, s.lng || null, h.nsMode === "fallback" ? k : k[0], x),
      [T, V] = De.useState(z);
    let K = k.join();
    s.lng && (K = `${s.lng}${K}`);
    const ve = bp(K),
      oe = De.useRef(!0);
    De.useEffect(() => {
      const { bindI18n: te, bindI18nStore: re } = h;
      (oe.current = !0),
        !C &&
          !m &&
          (s.lng
            ? wc(f, s.lng, k, () => {
                oe.current && V(I);
              })
            : Xl(f, k, () => {
                oe.current && V(I);
              })),
        C && ve && ve !== K && oe.current && V(I);
      const J = () => {
        oe.current && V(I);
      };
      return (
        te && (f == null || f.on(te, J)),
        re && (f == null || f.store.on(re, J)),
        () => {
          (oe.current = !1),
            f &&
              te &&
              (te == null || te.split(" ").forEach((Re) => f.off(Re, J))),
            re && f && re.split(" ").forEach((Re) => f.store.off(Re, J));
        }
      );
    }, [f, K]),
      De.useEffect(() => {
        oe.current && C && V(z);
      }, [f, x, C]);
    const de = [T, f, C];
    if (((de.t = T), (de.i18n = f), (de.ready = C), C || (!C && !m))) return de;
    throw new Promise((te) => {
      s.lng ? wc(f, s.lng, k, () => te()) : Xl(f, k, () => te());
    });
  };
function eo({ className: c = "w-12 h-12" }) {
  return g.jsxs("svg", {
    viewBox: "0 0 100 100",
    className: c,
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      g.jsx("defs", {
        children: g.jsxs("linearGradient", {
          id: "logoGradient",
          x1: "0%",
          y1: "0%",
          x2: "100%",
          y2: "100%",
          children: [
            g.jsx("stop", {
              offset: "0%",
              style: { stopColor: "#8B6F3F", stopOpacity: 1 },
            }),
            g.jsx("stop", {
              offset: "100%",
              style: { stopColor: "#5A4527", stopOpacity: 1 },
            }),
          ],
        }),
      }),
      g.jsx("rect", {
        x: "5",
        y: "5",
        width: "90",
        height: "90",
        rx: "15",
        fill: "url(#logoGradient)",
      }),
      g.jsx("rect", {
        x: "10",
        y: "10",
        width: "80",
        height: "80",
        rx: "12",
        fill: "none",
        stroke: "white",
        strokeWidth: "2",
        opacity: "0.3",
      }),
      g.jsx("text", {
        x: "50",
        y: "45",
        fontSize: "32",
        fontWeight: "900",
        fill: "white",
        textAnchor: "middle",
        fontFamily: "Tajawal, sans-serif",
        children: "UI",
      }),
      g.jsx("text", {
        x: "50",
        y: "72",
        fontSize: "14",
        fontWeight: "700",
        fill: "white",
        textAnchor: "middle",
        fontFamily: "Tajawal, sans-serif",
        opacity: "0.9",
        children: "F.Z.E",
      }),
      g.jsx("path", {
        d: "M 25 20 L 35 20 M 65 20 L 75 20 M 25 80 L 35 80 M 65 80 L 75 80",
        stroke: "white",
        strokeWidth: "2.5",
        strokeLinecap: "round",
        opacity: "0.6",
      }),
    ],
  });
}
function Ap() {
  const [c, s] = De.useState(!1),
    [o, u] = De.useState(!1),
    { t: a, i18n: f } = _r();
  De.useEffect(() => {
    const x = () => {
      u(window.scrollY > 20);
    };
    return (
      window.addEventListener("scroll", x),
      () => window.removeEventListener("scroll", x)
    );
  }, []);
  const h = (x) => {
      const k = document.getElementById(x);
      k && (k.scrollIntoView({ behavior: "smooth" }), s(!1));
    },
    m = () => {
      const x = f.language === "ar" ? "en" : "ar";
      f.changeLanguage(x),
        (document.documentElement.dir = x === "ar" ? "rtl" : "ltr"),
        (document.documentElement.lang = x);
    };
  return g.jsxs("nav", {
    className: `fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
      o ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm shadow-md"
    }`,
    children: [
      g.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: g.jsxs("div", {
          className: "flex justify-between items-center h-20",
          children: [
            g.jsxs("div", {
              className: "flex items-center gap-3 animate-fade-in",
              children: [
                g.jsx("div", {
                  className:
                    "transition-transform hover:scale-105 duration-300",
                  children: g.jsx(eo, { className: "w-12 h-12" }),
                }),
                g.jsxs("div", {
                  className: "flex flex-col",
                  children: [
                    g.jsx("span", {
                      className:
                        "text-md  font-bold text-gray-800 hover:text-gold-600 transition-colors lg:text-2xl",
                      children: a("navbar.companyName"),
                    }),
                    g.jsx("span", {
                      className: "text-xs text-gray-600",
                      children: a("navbar.companySubtitle"),
                    }),
                  ],
                }),
              ],
            }),
            g.jsxs("div", {
              className: "hidden md:flex gap-8 items-center",
              children: [
                g.jsxs("button", {
                  onClick: () => h("home"),
                  className:
                    "text-gray-700 hover:text-gold-600 font-medium transition-all duration-300 text-lg relative group",
                  children: [
                    a("navbar.home"),
                    g.jsx("span", {
                      className:
                        "absolute bottom-0 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full",
                    }),
                  ],
                }),
                g.jsxs("button", {
                  onClick: () => h("about"),
                  className:
                    "text-gray-700 hover:text-gold-600 font-medium transition-all duration-300 text-lg relative group",
                  children: [
                    a("navbar.about"),
                    g.jsx("span", {
                      className:
                        "absolute bottom-0 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full",
                    }),
                  ],
                }),
                g.jsxs("button", {
                  onClick: () => h("gallery"),
                  className:
                    "text-gray-700 hover:text-gold-600 font-medium transition-all duration-300 text-lg relative group",
                  children: [
                    a("navbar.gallery"),
                    g.jsx("span", {
                      className:
                        "absolute bottom-0 left-0 w-0 h-0.5 bg-gold-600 transition-all duration-300 group-hover:w-full",
                    }),
                  ],
                }),
                g.jsxs("button", {
                  onClick: m,
                  className:
                    "flex items-center gap-2 px-3 py-2 text-gray-700 hover:text-gold-600 font-medium transition-all duration-300 text-sm border border-gray-300 rounded-lg hover:border-gold-500 hover:bg-gold-50",
                  children: [
                    g.jsx(sc, { className: "w-4 h-4" }),
                    g.jsx("span", {
                      className: `${f.language === "ar" ? "h-[15px]" : ""}`,
                      children: f.language === "ar" ? "EN" : "عربي",
                    }),
                  ],
                }),
              ],
            }),
            g.jsx("button", {
              onClick: () => s(!c),
              className:
                "md:hidden text-gray-700 hover:text-gold-600 transition-colors",
              children: c
                ? g.jsx(Cc, { className: "w-6 h-6" })
                : g.jsx(Jf, { className: "w-6 h-6" }),
            }),
          ],
        }),
      }),
      c &&
        g.jsx("div", {
          className:
            "md:hidden bg-white border-t border-gray-200 animate-fade-in",
          children: g.jsxs("div", {
            className: "px-4 py-6 space-y-4",
            children: [
              g.jsx("button", {
                onClick: () => h("home"),
                className:
                  "block w-full text-right text-gray-700 hover:text-gold-600 hover:bg-gold-50 font-medium text-lg py-2 px-3 rounded-lg transition-all duration-300",
                children: a("navbar.home"),
              }),
              g.jsx("button", {
                onClick: () => h("about"),
                className:
                  "block w-full text-right text-gray-700 hover:text-gold-600 hover:bg-gold-50 font-medium text-lg py-2 px-3 rounded-lg transition-all duration-300",
                children: a("navbar.about"),
              }),
              g.jsx("button", {
                onClick: () => h("gallery"),
                className:
                  "block w-full text-right text-gray-700 hover:text-gold-600 hover:bg-gold-50 font-medium text-lg py-2 px-3 rounded-lg transition-all duration-300",
                children: a("navbar.gallery"),
              }),
              g.jsxs("button", {
                onClick: m,
                className:
                  "flex items-center justify-center gap-2 w-full text-gray-700 hover:text-gold-600 hover:bg-gold-50 font-medium text-lg py-2 px-3 rounded-lg transition-all duration-300 border border-gray-300",
                children: [
                  g.jsx(sc, { className: "w-5 h-5" }),
                  g.jsx("span", {
                    children: f.language === "ar" ? "EN" : "عربي",
                  }),
                ],
              }),
            ],
          }),
        }),
    ],
  });
}
function Up() {
  const { t: c } = _r(),
    s = [
      {
        icon: Wf,
        title: c("home.newCars.title"),
        subtitle: c("home.newCars.subtitle"),
        description: c("home.newCars.description"),
      },
      {
        icon: Yf,
        title: c("home.customsClearance.title"),
        subtitle: c("home.customsClearance.subtitle"),
        description: c("home.customsClearance.description"),
      },
      {
        icon: qf,
        title: c("home.carAccessories.title"),
        subtitle: c("home.carAccessories.subtitle"),
        description: c("home.carAccessories.description"),
      },
      {
        icon: np,
        title: c("home.usedCars.title"),
        subtitle: c("home.usedCars.subtitle"),
        description: c("home.usedCars.description"),
      },
      {
        icon: rp,
        title: c("home.spareParts.title"),
        subtitle: c("home.spareParts.subtitle"),
        description: c("home.spareParts.description"),
      },
    ];
  return g.jsxs("section", {
    id: "home",
    className: "pt-20",
    children: [
      g.jsxs("div", {
        className:
          "relative bg-gradient-to-br from-gray-50 via-white to-gold-50 overflow-hidden",
        children: [
          g.jsx("div", {
            className: "absolute inset-0 opacity-5",
            children: g.jsx("div", {
              className: "absolute inset-0",
              style: {
                backgroundImage:
                  "radial-gradient(circle, #8B6F3F 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              },
            }),
          }),
          g.jsx("div", {
            className:
              "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32",
            children: g.jsxs("div", {
              className: "text-center",
              children: [
                g.jsx("div", {
                  className: "inline-block mb-6 animate-scale-in",
                  children: g.jsx(eo, {
                    className:
                      "w-24 h-24 mx-auto drop-shadow-xl hover:scale-110 transition-transform duration-500",
                  }),
                }),
                g.jsx("h1", {
                  className:
                    "text-4xl md:text-6xl font-bold text-gray-900 mb-4 animate-fade-in-up",
                  children: c("home.title"),
                }),
                g.jsx("p", {
                  className:
                    "text-2xl md:text-3xl text-gold-600 font-semibold mb-6 animate-fade-in-up",
                  style: { animationDelay: "0.1s" },
                  children: c("home.subtitle"),
                }),
                g.jsxs("div", {
                  className: "max-w-3xl mx-auto mb-8 animate-fade-in-up",
                  style: { animationDelay: "0.2s" },
                  children: [
                    g.jsx("p", {
                      className:
                        "text-lg md:text-xl text-gray-700 leading-relaxed",
                      children: c("home.description"),
                    }),
                    g.jsx("p", {
                      className: "text-base md:text-lg text-gray-600 mt-2",
                      children: c("home.subDescription"),
                    }),
                  ],
                }),
                g.jsxs("div", {
                  className:
                    "flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up",
                  style: { animationDelay: "0.3s" },
                  children: [
                    g.jsxs("div", {
                      className:
                        "bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gold-300 hover:border-gold-500 hover:shadow-xl transition-all duration-300 hover:scale-105",
                      children: [
                        g.jsx("p", {
                          className: "text-sm text-gray-600",
                          children: c("home.licenseNumber"),
                        }),
                        g.jsx("p", {
                          className: "text-lg font-bold text-gold-600",
                          children: "37744",
                        }),
                      ],
                    }),
                    g.jsxs("div", {
                      className:
                        "bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gold-300 hover:border-gold-500 hover:shadow-xl transition-all duration-300 hover:scale-105",
                      children: [
                        g.jsx("p", {
                          className: "text-sm text-gray-600",
                          children: c("home.location"),
                        }),
                        g.jsx("p", {
                          className: "text-lg font-bold text-gold-600",
                          children: "Ajman Free Zone",
                        }),
                      ],
                    }),
                    g.jsxs("div", {
                      className:
                        "bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gold-300 hover:border-gold-500 hover:shadow-xl transition-all duration-300 hover:scale-105",
                      children: [
                        g.jsx("p", {
                          className: "text-sm text-gray-600",
                          children: c("home.established"),
                        }),
                        g.jsx("p", {
                          className: "text-lg font-bold text-gold-600",
                          children: "2024",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      g.jsx("div", {
        className: "bg-white py-20",
        children: g.jsxs("div", {
          className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          children: [
            g.jsxs("div", {
              className: "text-center mb-16",
              children: [
                g.jsx("h2", {
                  className:
                    "text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up",
                  children: c("home.services"),
                }),
                g.jsx("div", {
                  className:
                    "w-24 h-1 bg-gold-600 mx-auto animate-slide-in-right",
                }),
              ],
            }),
            g.jsx("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              children: s.map((o, u) =>
                g.jsxs(
                  "div",
                  {
                    className:
                      "bg-gradient-to-br from-white to-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-gold-500 group hover:-translate-y-2 animate-fade-in-up",
                    style: { animationDelay: `${u * 0.1}s` },
                    children: [
                      g.jsx("div", {
                        className:
                          "bg-gradient-to-br from-[#D4AF37] to-[#B8860B] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg",
                        children: g.jsx(o.icon, {
                          className: "w-8 h-8 text-white",
                        }),
                      }),
                      g.jsx("h3", {
                        className:
                          "text-xl font-bold text-gray-900 mb-2 group-hover:text-gold-600 transition-colors",
                        children: o.title,
                      }),
                      g.jsx("p", {
                        className: "text-sm text-gold-600 font-medium mb-3",
                        children: o.subtitle,
                      }),
                      g.jsx("p", {
                        className: "text-gray-600 leading-relaxed",
                        children: o.description,
                      }),
                    ],
                  },
                  u
                )
              ),
            }),
          ],
        }),
      }),
      g.jsxs("div", {
        className:
          "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 py-16 relative overflow-hidden",
        children: [
          g.jsx("div", {
            className: "absolute inset-0 opacity-10",
            children: g.jsx("div", {
              className: "absolute inset-0",
              style: {
                backgroundImage:
                  "linear-gradient(45deg, #8B6F3F 25%, transparent 25%, transparent 75%, #8B6F3F 75%, #8B6F3F), linear-gradient(45deg, #8B6F3F 25%, transparent 25%, transparent 75%, #8B6F3F 75%, #8B6F3F)",
                backgroundSize: "60px 60px",
                backgroundPosition: "0 0, 30px 30px",
              },
            }),
          }),
          g.jsxs("div", {
            className:
              "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
            children: [
              g.jsx("h2", {
                className:
                  "text-3xl md:text-4xl font-bold text-white mb-6 animate-fade-in-up",
                children: c("home.inquiry.title"),
              }),
              g.jsx("p", {
                className: "text-xl text-gray-300 mb-8 animate-fade-in-up",
                style: { animationDelay: "0.1s" },
                children: c("home.inquiry.description"),
              }),
              g.jsxs("div", {
                className:
                  "flex flex-wrap justify-center gap-4 animate-fade-in-up",
                style: { animationDelay: "0.2s" },
                children: [
                  g.jsxs("div", {
                    className:
                      "bg-white px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300",
                    children: [
                      g.jsx("p", {
                        className: "text-sm text-gray-600",
                        children: c("home.inquiry.phone"),
                      }),
                      g.jsx("a", {
                        className: "text-lg font-bold text-gold-600 text-left",
                        href: "tel:(+971)65207204",
                        dir: "ltr",
                        children: "(+971) 6520 7204",
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className:
                      "bg-white px-8 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300",
                    children: [
                      g.jsx("p", {
                        className: "text-sm text-gray-600",
                        children: c("home.inquiry.email"),
                      }),
                      g.jsx("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-lg font-bold text-gold-600 hover:text-gold-700 transition-colors",
                        href: "mailto:info@unitedint-uae.com",
                        children: "info@unitedint-uae.com",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Vp() {
  const { t: c } = _r(),
    s = [
      {
        icon: Bf,
        title: c("about.legalForm"),
        value: c("about.legalFormValue"),
        subtitle: c("about.legalFormSubtitle"),
      },
      {
        icon: Zf,
        title: c("about.licenseNumber"),
        value: c("about.licenseNumberValue"),
        subtitle: c("about.licenseNumberSubtitle"),
      },
      {
        icon: Hf,
        title: c("about.establishmentDate"),
        value: c("about.establishmentDateValue"),
        subtitle: c("about.establishmentDateSubtitle"),
      },
      {
        icon: tp,
        title: c("about.authorizedCapital"),
        value: c("about.authorizedCapitalValue"),
        subtitle: c("about.authorizedCapitalSubtitle"),
      },
    ];
  return g.jsx("section", {
    id: "about",
    className: "py-20 bg-gradient-to-br from-white via-gray-50 to-white",
    children: g.jsxs("div", {
      className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
      children: [
        g.jsxs("div", {
          className: "text-center mb-16",
          children: [
            g.jsx("h2", {
              className:
                "text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up",
              children: c("about.title"),
            }),
            g.jsx("div", {
              className:
                "w-24 h-1 bg-gold-600 mx-auto mb-6 animate-slide-in-right",
            }),
            g.jsx("p", {
              className:
                "text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up",
              style: { animationDelay: "0.1s" },
              children: c("about.description"),
            }),
          ],
        }),
        g.jsx("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16",
          children: s.map((o, u) =>
            g.jsx(
              "div",
              {
                className:
                  "bg-white p-8 rounded-xl shadow-lg border-2 border-gray-200 hover:border-gold-500 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl animate-fade-in-up",
                style: { animationDelay: `${u * 0.1}s` },
                children: g.jsxs("div", {
                  className: "flex items-start gap-6",
                  children: [
                    g.jsx("div", {
                      className:
                        "bg-gradient-to-br from-[#D4AF37] to-[#B8860B] p-4 rounded-lg flex-shrink-0 shadow-lg",
                      children: g.jsx(o.icon, {
                        className: "w-8 h-8 text-white",
                      }),
                    }),
                    g.jsxs("div", {
                      className: "flex-grow",
                      children: [
                        g.jsx("h3", {
                          className: "text-lg font-bold text-gray-900 mb-2",
                          children: o.title,
                        }),
                        g.jsx("p", {
                          className: "text-xl text-gold-600 font-semibold mb-1",
                          children: o.value,
                        }),
                        g.jsx("p", {
                          className: "text-sm text-gray-600",
                          children: o.subtitle,
                        }),
                      ],
                    }),
                  ],
                }),
              },
              u
            )
          ),
        }),
        g.jsxs("div", {
          className:
            "bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl mb-16 animate-scale-in relative overflow-hidden",
          children: [
            g.jsx("div", {
              className: "absolute inset-0 opacity-5",
              children: g.jsx("div", {
                className: "absolute inset-0",
                style: {
                  backgroundImage:
                    "radial-gradient(circle, #8B6F3F 1px, transparent 1px)",
                  backgroundSize: "30px 30px",
                },
              }),
            }),
            g.jsxs("div", {
              className: "text-center mb-8 relative",
              children: [
                g.jsx("h3", {
                  className: "text-3xl font-bold text-white mb-4",
                  children: c("about.visionMission.title"),
                }),
                g.jsx("div", { className: "w-24 h-1 bg-gold-500 mx-auto" }),
              ],
            }),
            g.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-2 gap-8 relative",
              children: [
                g.jsxs("div", {
                  className:
                    "bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105",
                  children: [
                    g.jsx("h4", {
                      className: "text-xl font-bold text-white mb-4",
                      children: c("about.visionMission.vision.title"),
                    }),
                    g.jsx("p", {
                      className: "text-gray-200 leading-relaxed",
                      children: c("about.visionMission.vision.description"),
                    }),
                  ],
                }),
                g.jsxs("div", {
                  className:
                    "bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105",
                  children: [
                    g.jsx("h4", {
                      className: "text-xl font-bold text-white mb-4",
                      children: c("about.visionMission.mission.title"),
                    }),
                    g.jsx("p", {
                      className: "text-gray-200 leading-relaxed",
                      children: c("about.visionMission.mission.description"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        g.jsx("div", {
          className:
            "mt-16 bg-gradient-to-r from-gray-50 via-white to-gray-50 p-8 rounded-xl border-2 border-gray-200 hover:border-gold-500 transition-all duration-500 animate-fade-in-up shadow-lg",
          children: g.jsxs("div", {
            className: "max-w-4xl mx-auto",
            children: [
              g.jsx("h3", {
                className: "text-2xl font-bold text-gray-900 mb-6 text-center",
                children: c("about.contactInfo.title"),
              }),
              g.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-center",
                children: [
                  g.jsxs("div", {
                    className:
                      "hover:scale-105 transition-transform duration-300",
                    children: [
                      g.jsx("p", {
                        className: "text-gray-600 mb-2",
                        children: c("about.contactInfo.address"),
                      }),
                      g.jsx("p", {
                        className: "font-bold text-gold-600",
                        children: c("about.contactInfo.addressValue"),
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className:
                      "hover:scale-105 transition-transform duration-300",
                    children: [
                      g.jsx("p", {
                        className: "text-gray-600 mb-2",
                        children: c("about.contactInfo.phone"),
                      }),
                      g.jsx("a", {
                        className: "font-bold text-gold-600 text-center",
                        href: "tel:(+971)65207204",
                        dir: "ltr",
                        children: "(+971) 6520 7204",
                      }),
                    ],
                  }),
                  g.jsxs("div", {
                    className:
                      "hover:scale-105 transition-transform duration-300",
                    children: [
                      g.jsx("p", {
                        className: "text-gray-600 mb-2",
                        children: c("about.contactInfo.email"),
                      }),
                      g.jsx("a", {
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "font-bold text-gold-600",
                        href: "mailto:info@unitedint-uae.com",
                        children: "info@unitedint-uae.com",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function Bp() {
  const [c, s] = De.useState(null),
    [o, u] = De.useState(0),
    { t: a } = _r(),
    f = [
      {
        id: "black-bmw",
        title: "Black BMW",
        category: a("gallery.used"),
        images: [
          "/assets/black-bmw/black-bmw(1).jpeg",
          "/assets/black-bmw/black-bmw(2).jpeg",
          "/assets/black-bmw/black-bmw(3).jpeg",
          "/assets/black-bmw/black-bmw(4).jpeg",
        ],
        coverImage: "/assets/black-bmw/black-bmw(1).jpeg",
      },
      {
        id: "black-range-rover",
        title: "Black Range Rover",
        category: a("gallery.used"),
        images: [
          "/assets/black-range-rover/black-range-rover(1).jpeg",
          "/assets/black-range-rover/black-range-rover(2).jpeg",
          "/assets/black-range-rover/black-range-rover(3).jpeg",
          "/assets/black-range-rover/black-range-rover(4).jpeg",
          "/assets/black-range-rover/black-range-rover(5).jpeg",
          "/assets/black-range-rover/black-range-rover(6).jpeg",
          "/assets/black-range-rover/black-range-rover(7).jpeg",
          "/assets/black-range-rover/black-range-rover(8).jpeg",
          "/assets/black-range-rover/black-range-rover(9).jpeg",
          "/assets/black-range-rover/black-range-rover(10).jpeg",
          "/assets/black-range-rover/black-range-rover(11).jpeg",
        ],
        coverImage: "/assets/black-range-rover/black-range-rover(4).jpeg",
      },
      {
        id: "black-range-rover-2025",
        title: "Black Range Rover 2025",
        category: a("gallery.new"),
        images: [
          "/assets/black-range-rover-2025/black-range-rover-2025(1).jpeg",
          "/assets/black-range-rover-2025/black-range-rover-2025(2).jpeg",
          "/assets/black-range-rover-2025/black-range-rover-2025(3).jpeg",
          "/assets/black-range-rover-2025/black-range-rover-2025(4).jpeg",
          "/assets/black-range-rover-2025/black-range-rover-2025(5).jpeg",
          "/assets/black-range-rover-2025/black-range-rover-2025(6).jpeg",
          "/assets/black-range-rover-2025/black-range-rover-2025(7).jpeg",
          "/assets/black-range-rover-2025/black-range-rover-2025(8).jpeg",
        ],
        coverImage:
          "/assets/black-range-rover-2025/black-range-rover-2025(4).jpeg",
      },
      {
        id: "bmwx4",
        title: "BMW X4",
        category: a("gallery.used"),
        images: [
          "/assets/bmwx4/bmwx4(1).jpeg",
          "/assets/bmwx4/bmwx4(2).jpeg",
          "/assets/bmwx4/bmwx4(3).jpeg",
          "/assets/bmwx4/bmwx4(4).jpeg",
          "/assets/bmwx4/bmwx4(5).jpeg",
          "/assets/bmwx4/bmwx4(6).jpeg",
        ],
        coverImage: "/assets/bmwx4/bmwx4(1).jpeg",
      },
      {
        id: "e200",
        title: "Mercedes E200",
        category: a("gallery.used"),
        images: [
          "/assets/e200/e200(1).jpeg",
          "/assets/e200/e200(2).jpeg",
          "/assets/e200/e200(3).jpeg",
          "/assets/e200/e200(4).jpeg",
          "/assets/e200/e200(5).jpeg",
          "/assets/e200/e200(6).jpeg",
          "/assets/e200/e200(7).jpeg",
          "/assets/e200/e200(8).jpeg",
          "/assets/e200/e200(9).jpeg",
          "/assets/e200/e200(10).jpeg",
        ],
        coverImage: "/assets/e200/e200(10).jpeg",
      },
      {
        id: "e200-white",
        title: "Mercedes E200 White",
        category: a("gallery.used"),
        images: [
          "/assets/e200-white/e200-white(1).jpeg",
          "/assets/e200-white/e200-white(2).jpeg",
          "/assets/e200-white/e200-white(3).jpeg",
          "/assets/e200-white/e200-white(4).jpeg",
          "/assets/e200-white/e200-white(5).jpeg",
          "/assets/e200-white/e200-white(6).jpeg",
        ],
        coverImage: "/assets/e200-white/e200-white(1).jpeg",
      },
      {
        id: "range-rover-discovery",
        title: "Range Rover Discovery",
        category: a("gallery.used"),
        images: [
          "/assets/range-rover-discovery/range-rover-discovery(1).jpeg",
          "/assets/range-rover-discovery/range-rover-discovery(2).jpeg",
          "/assets/range-rover-discovery/range-rover-discovery(3).jpeg",
          "/assets/range-rover-discovery/range-rover-discovery(4).jpeg",
          "/assets/range-rover-discovery/range-rover-discovery(5).jpeg",
          "/assets/range-rover-discovery/range-rover-discovery(6).jpeg",
          "/assets/range-rover-discovery/range-rover-discovery(7).jpeg",
          "/assets/range-rover-discovery/range-rover-discovery(8).jpeg",
          "/assets/range-rover-discovery/range-rover-discovery(9).jpeg",
          "/assets/range-rover-discovery/range-rover-discovery(10).jpeg",
          "/assets/range-rover-discovery/range-rover-discovery(11).jpeg",
        ],
        coverImage:
          "/assets/range-rover-discovery/range-rover-discovery(1).jpeg",
      },
      {
        id: "range-svr",
        title: "Range SVR",
        category: a("gallery.new"),
        images: [
          "/assets/range-svr/range-svr(1).jpeg",
          "/assets/range-svr/range-svr(2).jpeg",
          "/assets/range-svr/range-svr(3).jpeg",
          "/assets/range-svr/range-svr(4).jpeg",
          "/assets/range-svr/range-svr(5).jpeg",
          "/assets/range-svr/range-svr(6).jpeg",
          "/assets/range-svr/range-svr(7).jpeg",
          "/assets/range-svr/range-svr(8).jpeg",
          "/assets/range-svr/range-svr(9).jpeg",
          "/assets/range-svr/range-svr(10).jpeg",
          "/assets/range-svr/range-svr(11).jpeg",
          "/assets/range-svr/range-svr(12).jpeg",
          "/assets/range-svr/range-svr(13).jpeg",
          "/assets/range-svr/range-svr(14).jpeg",
          "/assets/range-svr/range-svr(15).jpeg",
          "/assets/range-svr/range-svr(16).jpeg",
          "/assets/range-svr/range-svr(17).jpeg",
        ],
        coverImage: "/assets/range-svr/range-svr(1).jpeg",
      },
      {
        id: "silver-range-rover",
        title: "Silver Range Rover",
        category: a("gallery.used"),
        images: [
          "/assets/silver-range-rover/silver-range-rover(1).jpeg",
          "/assets/silver-range-rover/silver-range-rover(2).jpeg",
          "/assets/silver-range-rover/silver-range-rover(3).jpeg",
          "/assets/silver-range-rover/silver-range-rover(4).jpeg",
          "/assets/silver-range-rover/silver-range-rover(5).jpeg",
          "/assets/silver-range-rover/silver-range-rover(6).jpeg",
          "/assets/silver-range-rover/silver-range-rover(7).jpeg",
          "/assets/silver-range-rover/silver-range-rover(8).jpeg",
          "/assets/silver-range-rover/silver-range-rover(9).jpeg",
          "/assets/silver-range-rover/silver-range-rover(10).jpeg",
          "/assets/silver-range-rover/silver-range-rover(11).jpeg",
          "/assets/silver-range-rover/silver-range-rover(12).jpeg",
          "/assets/silver-range-rover/silver-range-rover(13).jpeg",
        ],
        coverImage: "/assets/silver-range-rover/silver-range-rover(10).jpeg",
      },
      {
        id: "white-porsche",
        title: "White Porsche",
        category: a("gallery.new"),
        images: [
          "/assets/white-porsche/white-porsche(1).jpeg",
          "/assets/white-porsche/white-porsche(2).jpeg",
          "/assets/white-porsche/white-porsche(3).jpeg",
          "/assets/white-porsche/white-porsche(4).jpeg",
          "/assets/white-porsche/white-porsche(5).jpeg",
          "/assets/white-porsche/white-porsche(6).jpeg",
          "/assets/white-porsche/white-porsche(7).jpeg",
          "/assets/white-porsche/white-porsche(8).jpeg",
          "/assets/white-porsche/white-porsche(9).jpeg",
          "/assets/white-porsche/white-porsche(10).jpeg",
          "/assets/white-porsche/white-porsche(11).jpeg",
        ],
        coverImage: "/assets/white-porsche/white-porsche(11).jpeg",
      },
      {
        id: "white-range-rover",
        title: "White Range Rover",
        category: a("gallery.used"),
        images: [
          "/assets/white-range-rover/white-range-rover(1).jpeg",
          "/assets/white-range-rover/white-range-rover(2).jpeg",
          "/assets/white-range-rover/white-range-rover(3).jpeg",
          "/assets/white-range-rover/white-range-rover(4).jpeg",
          "/assets/white-range-rover/white-range-rover(5).jpeg",
          "/assets/white-range-rover/white-range-rover(6).jpeg",
          "/assets/white-range-rover/white-range-rover(7).jpeg",
          "/assets/white-range-rover/white-range-rover(8).jpeg",
          "/assets/white-range-rover/white-range-rover(9).jpeg",
          "/assets/white-range-rover/white-range-rover(10).jpeg",
          "/assets/white-range-rover/white-range-rover(11).jpeg",
          "/assets/white-range-rover/white-range-rover(12).jpeg",
          "/assets/white-range-rover/white-range-rover(13).jpeg",
          "/assets/white-range-rover/white-range-rover(14).jpeg",
          "/assets/white-range-rover/white-range-rover(15).jpeg",
        ],
        coverImage: "/assets/white-range-rover/white-range-rover(1).jpeg",
      },
      {
        id: "black-range",
        title: "Black Range Rover",
        category: a("gallery.used"),
        images: [
          "/assets/black-range/black-range(1).jpeg",
          "/assets/black-range/black-range(2).jpeg",
          "/assets/black-range/black-range(3).jpeg",
          "/assets/black-range/black-range(4).jpeg",
          "/assets/black-range/black-range(5).jpeg",
          "/assets/black-range/black-range(6).jpeg",
          "/assets/black-range/black-range(7).jpeg",
          "/assets/black-range/black-range(8).jpeg",
          "/assets/black-range/black-range(9).jpeg",
          "/assets/black-range/black-range(10).jpeg",
          "/assets/black-range/black-range(11).jpeg",
          "/assets/black-range/black-range(12).jpeg",
          "/assets/black-range/black-range(13).jpeg",
        ],
        coverImage: "/assets/black-range/black-range(1).jpeg",
      },
    ],
    h = (C) => {
      s(C), u(0);
    },
    m = () => {
      s(null), u(0);
    },
    x = () => {
      c && o < c.images.length - 1 && u(o + 1);
    },
    k = () => {
      o > 0 && u(o - 1);
    };
  return g.jsxs("section", {
    id: "gallery",
    className: "py-20 bg-gradient-to-br from-white via-gray-50 to-white",
    children: [
      g.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          g.jsxs("div", {
            className: "text-center mb-16",
            children: [
              g.jsx("h2", {
                className:
                  "text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up",
                children: a("gallery.title"),
              }),
              g.jsx("div", {
                className:
                  "w-24 h-1 bg-gold-600 mx-auto mb-6 animate-slide-in-right",
              }),
              g.jsx("p", {
                className:
                  "text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up",
                style: { animationDelay: "0.1s" },
                children: a("gallery.description"),
              }),
            ],
          }),
          g.jsx("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: f.map((C, E) =>
              g.jsxs(
                "div",
                {
                  className:
                    "group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 animate-fade-in-up",
                  style: { animationDelay: `${E * 0.1}s` },
                  onClick: () => h(C),
                  children: [
                    g.jsx("div", {
                      className: "aspect-[4/3] overflow-hidden bg-gray-200",
                      children: g.jsx("img", {
                        src: C.coverImage,
                        alt: C.title,
                        className:
                          "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",
                        loading: "lazy",
                      }),
                    }),
                    g.jsx("div", {
                      className:
                        "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                      children: g.jsx("div", {
                        className:
                          "absolute bottom-0 right-0 left-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300",
                        children: g.jsx("div", {
                          className: "flex justify-between items-end",
                          children: g.jsxs("div", {
                            children: [
                              g.jsx("h3", {
                                className: "text-white text-xl font-bold mb-2",
                                children: C.title,
                              }),
                              g.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [
                                  g.jsx("span", {
                                    className:
                                      "inline-block bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg",
                                    children: C.category,
                                  }),
                                  g.jsxs("span", {
                                    className:
                                      "inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium",
                                    children: [
                                      C.images.length,
                                      " ",
                                      a("gallery.photos"),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                },
                C.id
              )
            ),
          }),
          g.jsx("div", {
            className:
              "mt-16 bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-200 hover:border-gold-500 transition-all duration-500 shadow-lg animate-fade-in-up",
            children: g.jsxs("div", {
              className: "text-center",
              children: [
                g.jsx("h3", {
                  className: "text-2xl font-bold text-gray-900 mb-4",
                  children: a("gallery.searchTitle"),
                }),
                g.jsx("p", {
                  className: "text-gray-600 text-lg mb-6",
                  children: a("gallery.searchDescription"),
                }),
                g.jsxs("div", {
                  className: "flex flex-wrap justify-center gap-4",
                  children: [
                    g.jsxs("div", {
                      className:
                        "bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gray-200 hover:border-gold-500 hover:scale-105 transition-all duration-300",
                      children: [
                        g.jsx("p", {
                          className: "text-sm text-gray-600",
                          children: a("gallery.phone"),
                        }),
                        g.jsx("a", {
                          className:
                            "text-lg font-bold text-gold-600 text-left",
                          href: "tel:(+971)65207204",
                          dir: "ltr",
                          children: "(+971) 6520 7204",
                        }),
                      ],
                    }),
                    g.jsxs("div", {
                      className:
                        "bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gray-200 hover:border-gold-500 hover:scale-105 transition-all duration-300",
                      children: [
                        g.jsx("p", {
                          className: "text-sm text-gray-600",
                          children: a("gallery.email"),
                        }),
                        g.jsx("a", {
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className:
                            "text-lg font-bold text-gold-600 hover:text-gold-700 transition-colors",
                          href: "mailto:info@unitedint-uae.com",
                          children: "info@unitedint-uae.com",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      c &&
        g.jsxs("div", {
          className:
            "fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in",
          onClick: m,
          children: [
            g.jsx("button", {
              className:
                "absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10",
              onClick: m,
              children: g.jsx(Cc, { className: "w-8 h-8" }),
            }),
            g.jsxs("div", {
              className:
                "absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white p-4 rounded-lg z-10",
              children: [
                g.jsx("h3", {
                  className: "text-2xl font-bold mb-1",
                  children: c.title,
                }),
                g.jsxs("div", {
                  className: "flex items-center gap-2",
                  children: [
                    g.jsx("span", {
                      className:
                        "bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-3 py-1 rounded-full text-sm font-medium",
                      children: c.category,
                    }),
                    g.jsxs("span", {
                      className: "bg-white/20 px-3 py-1 rounded-full text-sm",
                      children: [o + 1, " / ", c.images.length],
                    }),
                  ],
                }),
              ],
            }),
            o > 0 &&
              g.jsx("button", {
                className:
                  "absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10",
                onClick: (C) => {
                  C.stopPropagation(), k();
                },
                children: g.jsx(Kf, { className: "w-8 h-8" }),
              }),
            o < c.images.length - 1 &&
              g.jsx("button", {
                className:
                  "absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10",
                onClick: (C) => {
                  C.stopPropagation(), x();
                },
                children: g.jsx(Qf, { className: "w-8 h-8" }),
              }),
            g.jsx("div", {
              className:
                "max-w-5xl max-h-[80vh] flex items-center justify-center",
              children: g.jsx("img", {
                src: c.images[o],
                alt: `${c.title} - ${o + 1}`,
                className:
                  "max-w-full max-h-full object-contain animate-scale-in",
                onClick: (C) => C.stopPropagation(),
              }),
            }),
            g.jsx("div", {
              className:
                "absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 backdrop-blur-sm p-3 rounded-lg max-w-[90vw] overflow-x-auto",
              children: c.images.map((C, E) =>
                g.jsx(
                  "button",
                  {
                    onClick: (z) => {
                      z.stopPropagation(), u(E);
                    },
                    className: `flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                      E === o
                        ? "ring-2 ring-gold-500 scale-110"
                        : "opacity-50 hover:opacity-100"
                    }`,
                    children: g.jsx("img", {
                      src: C,
                      alt: `Thumbnail ${E + 1}`,
                      className: "w-full h-full object-cover",
                    }),
                  },
                  E
                )
              ),
            }),
          ],
        }),
    ],
  });
}
function Hp() {
  const { t: c } = _r();
  return g.jsxs("footer", {
    className:
      "bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden",
    children: [
      g.jsx("div", {
        className: "absolute inset-0 opacity-5",
        children: g.jsx("div", {
          className: "absolute inset-0",
          style: {
            backgroundImage:
              "radial-gradient(circle, #8B6F3F 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          },
        }),
      }),
      g.jsxs("div", {
        className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",
        children: [
          g.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-8",
            children: [
              g.jsxs("div", {
                className: "animate-fade-in-up",
                children: [
                  g.jsxs("div", {
                    className: "flex items-center gap-3 mb-4",
                    children: [
                      g.jsx(eo, { className: "w-12 h-12" }),
                      g.jsxs("div", {
                        children: [
                          g.jsx("h3", {
                            className: "text-xl font-bold text-gold-400",
                            children: c("footer.company"),
                          }),
                          g.jsx("p", {
                            className: "text-sm text-gray-400",
                            children: " GOLDE ROYAL E.Z.FE",
                          }),
                        ],
                      }),
                    ],
                  }),
                  g.jsx("p", {
                    className: "text-gray-400 leading-relaxed",
                    children: c("footer.description"),
                  }),
                ],
              }),
              g.jsxs("div", {
                className: "animate-fade-in-up",
                style: { animationDelay: "0.1s" },
                children: [
                  g.jsx("h4", {
                    className: "text-lg font-bold text-gold-400 mb-4",
                    children: c("footer.companyInfo"),
                  }),
                  g.jsxs("ul", {
                    className: "space-y-2 text-gray-400",
                    children: [
                      g.jsxs("li", {
                        className: "hover:text-gold-400 transition-colors",
                        children: [c("footer.licenseNumber"), ": 37744"],
                      }),
                      g.jsxs("li", {
                        className: "hover:text-gold-400 transition-colors",
                        children: [c("footer.registrationNumber"), ": 37744"],
                      }),
                      g.jsx("li", {
                        className: "hover:text-gold-400 transition-colors",
                        children: c("footer.freeZoneEstablishment"),
                      }),
                      g.jsxs("li", {
                        className: "hover:text-gold-400 transition-colors",
                        children: [c("footer.capital"), ": 10,000,000 AED"],
                      }),
                    ],
                  }),
                ],
              }),
              g.jsxs("div", {
                className: "animate-fade-in-up",
                style: { animationDelay: "0.2s" },
                children: [
                  g.jsx("h4", {
                    className: "text-lg font-bold text-gold-400 mb-4",
                    children: c("footer.contactUs"),
                  }),
                  g.jsxs("ul", {
                    className: "space-y-3",
                    children: [
                      g.jsxs("li", {
                        className:
                          "flex items-start gap-3 hover:text-gold-400 transition-colors",
                        children: [
                          g.jsx(Xf, {
                            className:
                              "w-5 h-5 text-gold-500 flex-shrink-0 mt-1",
                          }),
                          g.jsxs("span", {
                            className: "text-gray-400",
                            children: [c("footer.address"), g.jsx("br", {})],
                          }),
                        ],
                      }),
                      g.jsxs("li", {
                        className:
                          "flex items-center gap-3 hover:text-gold-400 transition-colors",
                        children: [
                          g.jsx(ep, {
                            className: "w-5 h-5 text-gold-500 flex-shrink-0",
                          }),
                          g.jsx("a", {
                            href: "tel:(+971)65207204",
                            className:
                              "text-gray-400 hover:text-gold-400 transition-colors",
                            dir: "ltr",
                            children: "(+971) 6520 7204",
                          }),
                        ],
                      }),
                      g.jsxs("li", {
                        className:
                          "flex items-center gap-3 hover:text-gold-400 transition-colors",
                        children: [
                          g.jsx(Gf, {
                            className: "w-5 h-5 text-gold-500 flex-shrink-0",
                          }),
                          g.jsx("a", {
                            href: "mailto:info@unitedint-uae.com",
                            className:
                              "text-gray-400 hover:text-gold-400 transition-colors",
                            children: "info@unitedint-uae.com",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          g.jsx("div", {
            className: "border-t border-gray-800 pt-8",
            children: g.jsxs("div", {
              className:
                "flex flex-col md:flex-row justify-between items-center gap-4",
              children: [
                g.jsxs("p", {
                  className: "text-gray-500 text-center md:text-right",
                  children: [
                    "© 2025 ",
                    c("footer.company"),
                    ". ",
                    c("footer.rights"),
                    ".",
                  ],
                }),
                g.jsx("p", {
                  className: "text-gray-500 text-center md:text-left",
                  children: c("footer.licensedBy"),
                }),
              ],
            }),
          }),
        ],
      }),
    ],
  });
}
function Wp() {
  return g.jsxs("div", {
    className: "min-h-screen bg-white",
    children: [
      g.jsx(Ap, {}),
      g.jsx(Up, {}),
      g.jsx(Vp, {}),
      g.jsx(Bp, {}),
      g.jsx(Hp, {}),
    ],
  });
}
const { slice: Kp, forEach: Qp } = [];
function Yp(c) {
  return (
    Qp.call(Kp.call(arguments, 1), (s) => {
      if (s) for (const o in s) c[o] === void 0 && (c[o] = s[o]);
    }),
    c
  );
}
function Zp(c) {
  return typeof c != "string"
    ? !1
    : [
        /<\s*script.*?>/i,
        /<\s*\/\s*script\s*>/i,
        /<\s*img.*?on\w+\s*=/i,
        /<\s*\w+\s*on\w+\s*=.*?>/i,
        /javascript\s*:/i,
        /vbscript\s*:/i,
        /expression\s*\(/i,
        /eval\s*\(/i,
        /alert\s*\(/i,
        /document\.cookie/i,
        /document\.write\s*\(/i,
        /window\.location/i,
        /innerHTML/i,
      ].some((o) => o.test(c));
}
const kc = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,
  Gp = function (c, s) {
    const u =
        arguments.length > 2 && arguments[2] !== void 0
          ? arguments[2]
          : { path: "/" },
      a = encodeURIComponent(s);
    let f = `${c}=${a}`;
    if (u.maxAge > 0) {
      const h = u.maxAge - 0;
      if (Number.isNaN(h)) throw new Error("maxAge should be a Number");
      f += `; Max-Age=${Math.floor(h)}`;
    }
    if (u.domain) {
      if (!kc.test(u.domain)) throw new TypeError("option domain is invalid");
      f += `; Domain=${u.domain}`;
    }
    if (u.path) {
      if (!kc.test(u.path)) throw new TypeError("option path is invalid");
      f += `; Path=${u.path}`;
    }
    if (u.expires) {
      if (typeof u.expires.toUTCString != "function")
        throw new TypeError("option expires is invalid");
      f += `; Expires=${u.expires.toUTCString()}`;
    }
    if (
      (u.httpOnly && (f += "; HttpOnly"),
      u.secure && (f += "; Secure"),
      u.sameSite)
    )
      switch (
        typeof u.sameSite == "string" ? u.sameSite.toLowerCase() : u.sameSite
      ) {
        case !0:
          f += "; SameSite=Strict";
          break;
        case "lax":
          f += "; SameSite=Lax";
          break;
        case "strict":
          f += "; SameSite=Strict";
          break;
        case "none":
          f += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    return u.partitioned && (f += "; Partitioned"), f;
  },
  Sc = {
    create(c, s, o, u) {
      let a =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : { path: "/", sameSite: "strict" };
      o &&
        ((a.expires = new Date()),
        a.expires.setTime(a.expires.getTime() + o * 60 * 1e3)),
        u && (a.domain = u),
        (document.cookie = Gp(c, s, a));
    },
    read(c) {
      const s = `${c}=`,
        o = document.cookie.split(";");
      for (let u = 0; u < o.length; u++) {
        let a = o[u];
        for (; a.charAt(0) === " "; ) a = a.substring(1, a.length);
        if (a.indexOf(s) === 0) return a.substring(s.length, a.length);
      }
      return null;
    },
    remove(c, s) {
      this.create(c, "", -1, s);
    },
  };
var Xp = {
    name: "cookie",
    lookup(c) {
      let { lookupCookie: s } = c;
      if (s && typeof document < "u") return Sc.read(s) || void 0;
    },
    cacheUserLanguage(c, s) {
      let {
        lookupCookie: o,
        cookieMinutes: u,
        cookieDomain: a,
        cookieOptions: f,
      } = s;
      o && typeof document < "u" && Sc.create(o, c, u, a, f);
    },
  },
  Jp = {
    name: "querystring",
    lookup(c) {
      var u;
      let { lookupQuerystring: s } = c,
        o;
      if (typeof window < "u") {
        let { search: a } = window.location;
        !window.location.search &&
          ((u = window.location.hash) == null ? void 0 : u.indexOf("?")) > -1 &&
          (a = window.location.hash.substring(
            window.location.hash.indexOf("?")
          ));
        const h = a.substring(1).split("&");
        for (let m = 0; m < h.length; m++) {
          const x = h[m].indexOf("=");
          x > 0 && h[m].substring(0, x) === s && (o = h[m].substring(x + 1));
        }
      }
      return o;
    },
  },
  qp = {
    name: "hash",
    lookup(c) {
      var a;
      let { lookupHash: s, lookupFromHashIndex: o } = c,
        u;
      if (typeof window < "u") {
        const { hash: f } = window.location;
        if (f && f.length > 2) {
          const h = f.substring(1);
          if (s) {
            const m = h.split("&");
            for (let x = 0; x < m.length; x++) {
              const k = m[x].indexOf("=");
              k > 0 &&
                m[x].substring(0, k) === s &&
                (u = m[x].substring(k + 1));
            }
          }
          if (u) return u;
          if (!u && o > -1) {
            const m = f.match(/\/([a-zA-Z-]*)/g);
            return Array.isArray(m)
              ? (a = m[typeof o == "number" ? o : 0]) == null
                ? void 0
                : a.replace("/", "")
              : void 0;
          }
        }
      }
      return u;
    },
  };
let $n = null;
const Nc = () => {
  if ($n !== null) return $n;
  try {
    if ((($n = typeof window < "u" && window.localStorage !== null), !$n))
      return !1;
    const c = "i18next.translate.boo";
    window.localStorage.setItem(c, "foo"), window.localStorage.removeItem(c);
  } catch {
    $n = !1;
  }
  return $n;
};
var eh = {
  name: "localStorage",
  lookup(c) {
    let { lookupLocalStorage: s } = c;
    if (s && Nc()) return window.localStorage.getItem(s) || void 0;
  },
  cacheUserLanguage(c, s) {
    let { lookupLocalStorage: o } = s;
    o && Nc() && window.localStorage.setItem(o, c);
  },
};
let An = null;
const jc = () => {
  if (An !== null) return An;
  try {
    if (((An = typeof window < "u" && window.sessionStorage !== null), !An))
      return !1;
    const c = "i18next.translate.boo";
    window.sessionStorage.setItem(c, "foo"),
      window.sessionStorage.removeItem(c);
  } catch {
    An = !1;
  }
  return An;
};
var th = {
    name: "sessionStorage",
    lookup(c) {
      let { lookupSessionStorage: s } = c;
      if (s && jc()) return window.sessionStorage.getItem(s) || void 0;
    },
    cacheUserLanguage(c, s) {
      let { lookupSessionStorage: o } = s;
      o && jc() && window.sessionStorage.setItem(o, c);
    },
  },
  nh = {
    name: "navigator",
    lookup(c) {
      const s = [];
      if (typeof navigator < "u") {
        const { languages: o, userLanguage: u, language: a } = navigator;
        if (o) for (let f = 0; f < o.length; f++) s.push(o[f]);
        u && s.push(u), a && s.push(a);
      }
      return s.length > 0 ? s : void 0;
    },
  },
  rh = {
    name: "htmlTag",
    lookup(c) {
      let { htmlTag: s } = c,
        o;
      const u = s || (typeof document < "u" ? document.documentElement : null);
      return (
        u &&
          typeof u.getAttribute == "function" &&
          (o = u.getAttribute("lang")),
        o
      );
    },
  },
  ih = {
    name: "path",
    lookup(c) {
      var a;
      let { lookupFromPathIndex: s } = c;
      if (typeof window > "u") return;
      const o = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
      return Array.isArray(o)
        ? (a = o[typeof s == "number" ? s : 0]) == null
          ? void 0
          : a.replace("/", "")
        : void 0;
    },
  },
  sh = {
    name: "subdomain",
    lookup(c) {
      var a, f;
      let { lookupFromSubdomainIndex: s } = c;
      const o = typeof s == "number" ? s + 1 : 1,
        u =
          typeof window < "u" &&
          ((f = (a = window.location) == null ? void 0 : a.hostname) == null
            ? void 0
            : f.match(
                /^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i
              ));
      if (u) return u[o];
    },
  };
let Tc = !1;
try {
  document.cookie, (Tc = !0);
} catch {}
const Fc = [
  "querystring",
  "cookie",
  "localStorage",
  "sessionStorage",
  "navigator",
  "htmlTag",
];
Tc || Fc.splice(1, 1);
const lh = () => ({
  order: Fc,
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  caches: ["localStorage"],
  excludeCacheFor: ["cimode"],
  convertDetectedLanguage: (c) => c,
});
class zc {
  constructor(s) {
    let o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.type = "languageDetector"), (this.detectors = {}), this.init(s, o);
  }
  init() {
    let s =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : { languageUtils: {} },
      o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    (this.services = s),
      (this.options = Yp(o, this.options || {}, lh())),
      typeof this.options.convertDetectedLanguage == "string" &&
        this.options.convertDetectedLanguage.indexOf("15897") > -1 &&
        (this.options.convertDetectedLanguage = (a) => a.replace("-", "_")),
      this.options.lookupFromUrlIndex &&
        (this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex),
      (this.i18nOptions = u),
      this.addDetector(Xp),
      this.addDetector(Jp),
      this.addDetector(eh),
      this.addDetector(th),
      this.addDetector(nh),
      this.addDetector(rh),
      this.addDetector(ih),
      this.addDetector(sh),
      this.addDetector(qp);
  }
  addDetector(s) {
    return (this.detectors[s.name] = s), this;
  }
  detect() {
    let s =
        arguments.length > 0 && arguments[0] !== void 0
          ? arguments[0]
          : this.options.order,
      o = [];
    return (
      s.forEach((u) => {
        if (this.detectors[u]) {
          let a = this.detectors[u].lookup(this.options);
          a && typeof a == "string" && (a = [a]), a && (o = o.concat(a));
        }
      }),
      (o = o
        .filter((u) => u != null && !Zp(u))
        .map((u) => this.options.convertDetectedLanguage(u))),
      this.services &&
      this.services.languageUtils &&
      this.services.languageUtils.getBestMatchFromCodes
        ? o
        : o.length > 0
        ? o[0]
        : null
    );
  }
  cacheUserLanguage(s) {
    let o =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : this.options.caches;
    o &&
      ((this.options.excludeCacheFor &&
        this.options.excludeCacheFor.indexOf(s) > -1) ||
        o.forEach((u) => {
          this.detectors[u] &&
            this.detectors[u].cacheUserLanguage(s, this.options);
        }));
  }
}
zc.type = "languageDetector";
const oh = {
    companyName: "جولدن رويال م.م.ح",
    companySubtitle: " GOLDE ROYAL E.Z.FE",
    home: "الرئيسية",
    about: "من نحن",
    gallery: "المعرض",
  },
  ah = {
    title: "جولدن رويال م.م.ح",
    subtitle: " GOLDE ROYAL E.Z.FE",
    description: "شريكك الموثوق في تجارة السيارات والخدمات اللوجستية",
    subDescription:
      "نقدم حلولاً شاملة في تجارة السيارات الجديدة والمستعملة، قطع الغيار، والتخليص الجمركي",
    licenseNumber: "رقم الرخصة",
    location: "الموقع",
    established: "تأسست",
    services: "خدماتنا",
    newCars: {
      title: "تجارة السيارات الجديدة",
      subtitle: "New Automobile Trading",
      description: "تصدير السيارات الجديدة إلى جميع أنحاء العالم",
    },
    customsClearance: {
      title: "خدمات التخليص الجمركي",
      subtitle: "Customs Clearance",
      description: "خدمات تخليص جمركي احترافية وسريعة",
    },
    carAccessories: {
      title: "تجارة إكسسوارات السيارات",
      subtitle: "Car Accessories Trading",
      description: "استيراد وتصدير أفضل إكسسوارات السيارات",
    },
    usedCars: {
      title: "تجارة السيارات المستعملة",
      subtitle: "Used Cars Trading",
      description: "سيارات مستعملة مفحوصة بعناية وجودة عالية",
    },
    spareParts: {
      title: "قطع الغيار المستعملة",
      subtitle: "Used Spare Parts",
      description: "قطع غيار أصلية للسيارات - استيراد وتصدير",
    },
    inquiry: {
      title: "هل لديك استفسار؟",
      description: "نحن هنا لمساعدتك في جميع احتياجاتك التجارية",
      phone: "الهاتف المجاني",
      website: "الموقع الإلكتروني",
      email: "البريد الإلكتروني",
    },
  },
  uh = {
    title: "من نحن",
    description:
      "جولدن رويال م.م.ح - شركة رائدة في تجارة السيارات والخدمات اللوجستية المتكاملة",
    legalForm: "الشكل القانوني",
    legalFormValue: "مؤسسة منطقة حرة – ذات مسؤولية محدودة",
    legalFormSubtitle: "Free Zone Establishment - Limited Liability",
    licenseNumber: "رقم الرخصة والسجل",
    licenseNumberValue: "37744",
    licenseNumberSubtitle: "License & Registration Number",
    establishmentDate: "تاريخ التأسيس",
    establishmentDateValue: "27 فبراير 2024",
    establishmentDateSubtitle: "February 27, 2024",
    authorizedCapital: "رأس المال المصرح",
    authorizedCapitalValue: "10,000,000 درهم إماراتي",
    authorizedCapitalSubtitle: "AED 10,000,000 Authorized Capital",
    visionMission: {
      title: "رؤيتنا ورسالتنا",
      vision: {
        title: "رؤيتنا",
        description:
          "أن نكون الشريك الأول والأكثر موثوقية في مجال تجارة السيارات والخدمات اللوجستية في منطقة الشرق الأوسط وخارجها",
      },
      mission: {
        title: "رسالتنا",
        description:
          "تقديم خدمات عالية الجودة في تجارة السيارات الجديدة والمستعملة، قطع الغيار، والتخليص الجمركي مع الالتزام بأعلى معايير الاحترافية والشفافية",
      },
    },
    documents: {
      title: "الوثائق الرسمية",
      description: "يمكنكم تحميل وثائقنا الرسمية والتراخيص المعتمدة",
      businessLicense: "الرخصة التجارية",
      businessLicenseSubtitle: "Business License",
      commercialRegistry: "السجل التجاري",
      commercialRegistrySubtitle: "Commercial Registry",
      downloadPdf: "تحميل PDF",
    },
    contactInfo: {
      title: "معلومات الاتصال",
      address: "العنوان",
      addressValue: "مبنى رقم ٤٤ ، الجرف الصناعه ١ ، عجمان, PO box : 20010",
      phone: "الهاتف المجاني",
      website: "الموقع الإلكتروني",
      email: "البريد الإلكتروني",
    },
  },
  ch = {
    title: "معرض السيارات",
    description: "اكتشف مجموعتنا المتنوعة من السيارات الفاخرة والعالية الجودة",
    searchTitle: "هل تبحث عن سيارة معينة؟",
    searchDescription:
      "نوفر خدمة البحث والتوريد حسب الطلب. تواصل معنا للحصول على السيارة التي تحلم بها",
    phone: "الهاتف المجاني",
    website: "الموقع الإلكتروني",
    email: "البريد الإلكتروني",
    fullView: "عرض كامل",
    new: "جديدة",
    used: "مستعملة",
    photos: "صور",
    car0: "رينج روفر أسود",
    car1: "فورد F-Series Pickup Raptor",
    car2: "مرسيدس-بنز",
    car3: "تويوتا سيدان",
    car4: "نيسان SUV",
    car5: "بي إم دبليو X5 V8",
    car6: "أودي سيدان",
    car7: "لكزس",
    car9: "بورشيه ماكان استاندرد",
  },
  dh = {
    rights: "جميع الحقوق محفوظة",
    company: "جولدن رويال م.م.ح",
    description:
      "شريكك الموثوق في تجارة السيارات والخدمات اللوجستية المتكاملة في منطقة عجمان الحرة",
    companyInfo: "معلومات الشركة",
    contactUs: "تواصل معنا",
    licenseNumber: "رقم الرخصة",
    registrationNumber: "رقم السجل",
    freeZoneEstablishment: "مؤسسة منطقة حرة",
    capital: "رأس المال",
    address: "مبنى رقم ٤٤ ، الجرف الصناعه ١ ، عجمان",
    licensedBy: "مرخصة من هيئة المناطق الحرة في عجمان",
  },
  fh = { navbar: oh, home: ah, about: uh, gallery: ch, footer: dh },
  ph = {
    companyName: "United International",
    companySubtitle: " GOLDE ROYAL E.Z.FE",
    home: "Home",
    about: "About Us",
    gallery: "Gallery",
  },
  hh = {
    title: "United International",
    subtitle: " GOLDE ROYAL E.Z.FE",
    description:
      "Your trusted partner in automotive trading and logistics services",
    subDescription:
      "We provide comprehensive solutions in new and used car trading, spare parts, and customs clearance",
    licenseNumber: "License Number",
    location: "Location",
    established: "Established",
    services: "Our Services",
    newCars: {
      title: "New Automobile Trading",
      subtitle: "New Automobile Trading",
      description: "Exporting new cars worldwide",
    },
    customsClearance: {
      title: "Customs Clearance Services",
      subtitle: "Customs Clearance",
      description: "Professional and fast customs clearance services",
    },
    carAccessories: {
      title: "Car Accessories Trading",
      subtitle: "Car Accessories Trading",
      description: "Import and export of the best car accessories",
    },
    usedCars: {
      title: "Used Cars Trading",
      subtitle: "Used Cars Trading",
      description: "Carefully inspected and high-quality used cars",
    },
    spareParts: {
      title: "Used Spare Parts",
      subtitle: "Used Spare Parts",
      description: "Original car spare parts - import and export",
    },
    inquiry: {
      title: "Have an inquiry?",
      description: "We are here to help you with all your business needs",
      phone: "Toll Free Phone",
      website: "Website",
      email: "Email",
    },
  },
  gh = {
    title: "About Us",
    description:
      "United International - A leading company in automotive trading and integrated logistics services",
    legalForm: "Legal Form",
    legalFormValue: "Free Zone Establishment - Limited Liability",
    legalFormSubtitle: "Free Zone Establishment - Limited Liability",
    licenseNumber: "License & Registration Number",
    licenseNumberValue: "37744",
    licenseNumberSubtitle: "License & Registration Number",
    establishmentDate: "Establishment Date",
    establishmentDateValue: "February 27, 2024",
    establishmentDateSubtitle: "February 27, 2024",
    authorizedCapital: "Authorized Capital",
    authorizedCapitalValue: "AED 10,000,000",
    authorizedCapitalSubtitle: "AED 10,000,000 Authorized Capital",
    visionMission: {
      title: "Our Vision & Mission",
      vision: {
        title: "Our Vision",
        description:
          "To be the first and most trusted partner in automotive trading and logistics services in the Middle East and beyond",
      },
      mission: {
        title: "Our Mission",
        description:
          "Providing high-quality services in new and used car trading, spare parts, and customs clearance while adhering to the highest standards of professionalism and transparency",
      },
    },
    documents: {
      title: "Official Documents",
      description:
        "You can download our official documents and approved licenses",
      businessLicense: "Business License",
      businessLicenseSubtitle: "Business License",
      commercialRegistry: "Commercial Registry",
      commercialRegistrySubtitle: "Commercial Registry",
      downloadPdf: "Download PDF",
    },
    contactInfo: {
      title: "Contact Information",
      address: "Address",
      addressValue: "Building 44, Aljurf 1, Ajman, PO box : 20010",
      phone: "Toll Free Phone",
      website: "Website",
      email: "Email",
    },
  },
  mh = {
    title: "Car Gallery",
    description:
      "Discover our diverse collection of luxury and high-quality cars",
    searchTitle: "Looking for a specific car?",
    searchDescription:
      "We provide search and supply services on demand. Contact us to get the car of your dreams",
    phone: "Toll Free Phone",
    website: "Website",
    email: "Email",
    fullView: "Full View",
    new: "New",
    used: "Used",
    photos: "Photos",
    car0: "Range Rover Black Edition",
    car1: "Ford F-Series Pickup Raptor",
    car2: "Mercedes-Benz",
    car3: "Toyota Sedan",
    car4: "Nissan SUV",
    car5: "BMW X5 V8",
    car6: "Audi Sedan",
    car7: "Lexus",
    car9: "Porsche Macan Standard    ",
  },
  vh = {
    rights: "All rights reserved",
    company: "United International",
    description:
      "Your trusted partner in automotive trading and integrated logistics services in Ajman Free Zone",
    companyInfo: "Company Information",
    contactUs: "Contact Us",
    licenseNumber: "License Number",
    registrationNumber: "Registration Number",
    freeZoneEstablishment: "Free Zone Establishment",
    capital: "Capital",
    address: "44, Aljurf 1, Ajman",
    addressLine2: "Aljurf 1, Ajman PO box : 20010",
    licensedBy: "Licensed by Ajman Free Zone Authority",
  },
  yh = { navbar: ph, home: hh, about: gh, gallery: mh, footer: vh },
  xh = { ar: { translation: fh }, en: { translation: yh } };
He.use(zc)
  .use(Ip)
  .init({
    resources: xh,
    fallbackLng: "ar",
    debug: !1,
    lng: "ar",
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    interpolation: { escapeValue: !1 },
  });
document.documentElement.dir = "rtl";
document.documentElement.lang = "ar";
Af.createRoot(document.getElementById("root")).render(
  g.jsx(De.StrictMode, { children: g.jsx(Wp, {}) })
);
