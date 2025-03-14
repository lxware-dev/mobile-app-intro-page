/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Vs = "lit-localize-status";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const js = (s) => typeof s != "string" && "strTag" in s, bs = (s, e, t) => {
  let i = s[0];
  for (let r = 1; r < s.length; r++)
    i += e[t ? t[r - 1] : r - 1], i += s[r];
  return i;
};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ys = (s) => js(s) ? bs(s.strings, s.values) : s;
let He = ys, Ei = !1;
function Ys(s) {
  if (Ei)
    throw new Error("lit-localize can only be configured once");
  He = s, Ei = !0;
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Ss {
  constructor() {
    this.settled = !1, this.promise = new Promise((e, t) => {
      this._resolve = e, this._reject = t;
    });
  }
  resolve(e) {
    this.settled = !0, this._resolve(e);
  }
  reject(e) {
    this.settled = !0, this._reject(e);
  }
}
/**
 * @license
 * Copyright 2014 Travis Webb
 * SPDX-License-Identifier: MIT
 */
const ne = [];
for (let s = 0; s < 256; s++)
  ne[s] = (s >> 4 & 15).toString(16) + (s & 15).toString(16);
function Xs(s) {
  let e = 0, t = 8997, i = 0, r = 33826, n = 0, o = 40164, l = 0, a = 52210;
  for (let p = 0; p < s.length; p++)
    t ^= s.charCodeAt(p), e = t * 435, i = r * 435, n = o * 435, l = a * 435, n += t << 8, l += r << 8, i += e >>> 16, t = e & 65535, n += i >>> 16, r = i & 65535, a = l + (n >>> 16) & 65535, o = n & 65535;
  return ne[a >> 8] + ne[a & 255] + ne[o >> 8] + ne[o & 255] + ne[r >> 8] + ne[r & 255] + ne[t >> 8] + ne[t & 255];
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Us = "", Ws = "h", Ks = "s";
function Js(s, e) {
  return (e ? Ws : Ks) + Xs(typeof s == "string" ? s : s.join(Us));
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xi = /* @__PURE__ */ new WeakMap(), Ti = /* @__PURE__ */ new Map();
function Qs(s, e, t) {
  if (s) {
    const i = (t == null ? void 0 : t.id) ?? Zs(e), r = s[i];
    if (r) {
      if (typeof r == "string")
        return r;
      if ("strTag" in r)
        return bs(
          r.strings,
          // Cast `template` because its type wasn't automatically narrowed (but
          // we know it must be the same type as `localized`).
          e.values,
          r.values
        );
      {
        let n = xi.get(r);
        return n === void 0 && (n = r.values, xi.set(r, n)), {
          ...r,
          values: n.map((o) => e.values[o])
        };
      }
    }
  }
  return ys(e);
}
function Zs(s) {
  const e = typeof s == "string" ? s : s.strings;
  let t = Ti.get(e);
  return t === void 0 && (t = Js(e, typeof s != "string" && !("strTag" in s)), Ti.set(e, t)), t;
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function xt(s) {
  window.dispatchEvent(new CustomEvent(Vs, { detail: s }));
}
let lt = "", Tt, Es, dt, ni, xs, we = new Ss();
we.resolve();
let st = 0;
const er = (s) => (Ys((e, t) => Qs(xs, e, t)), lt = Es = s.sourceLocale, dt = new Set(s.targetLocales), dt.add(s.sourceLocale), ni = s.loadLocale, { getLocale: tr, setLocale: ir }), tr = () => lt, ir = (s) => {
  if (s === (Tt ?? lt))
    return we.promise;
  if (!dt || !ni)
    throw new Error("Internal error");
  if (!dt.has(s))
    throw new Error("Invalid locale code");
  st++;
  const e = st;
  return Tt = s, we.settled && (we = new Ss()), xt({ status: "loading", loadingLocale: s }), (s === Es ? (
    // We could switch to the source locale synchronously, but we prefer to
    // queue it on a microtask so that switching locales is consistently
    // asynchronous.
    Promise.resolve({ templates: void 0 })
  ) : ni(s)).then((i) => {
    st === e && (lt = s, Tt = void 0, xs = i.templates, xt({ status: "ready", readyLocale: s }), we.resolve());
  }, (i) => {
    st === e && (xt({
      status: "error",
      errorLocale: s,
      errorMessage: i.toString()
    }), we.reject(i));
  }), we.promise;
}, sr = '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}';
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const nt = globalThis, ui = nt.ShadowRoot && (nt.ShadyCSS === void 0 || nt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, pi = Symbol(), Mi = /* @__PURE__ */ new WeakMap();
let Ts = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== pi) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (ui && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = Mi.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && Mi.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ms = (s) => new Ts(typeof s == "string" ? s : s + "", void 0, pi), rr = (s, ...e) => {
  const t = s.length === 1 ? s[0] : e.reduce((i, r, n) => i + ((o) => {
    if (o._$cssResult$ === !0) return o.cssText;
    if (typeof o == "number") return o;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + o + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(r) + s[n + 1], s[0]);
  return new Ts(t, s, pi);
}, nr = (s, e) => {
  if (ui) s.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), r = nt.litNonce;
    r !== void 0 && i.setAttribute("nonce", r), i.textContent = t.cssText, s.appendChild(i);
  }
}, Ci = ui ? (s) => s : (s) => s instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return Ms(t);
})(s) : s;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: ar, defineProperty: or, getOwnPropertyDescriptor: lr, getOwnPropertyNames: dr, getOwnPropertySymbols: cr, getPrototypeOf: ur } = Object, fe = globalThis, Pi = fe.trustedTypes, pr = Pi ? Pi.emptyScript : "", Mt = fe.reactiveElementPolyfillSupport, Fe = (s, e) => s, ct = { toAttribute(s, e) {
  switch (e) {
    case Boolean:
      s = s ? pr : null;
      break;
    case Object:
    case Array:
      s = s == null ? s : JSON.stringify(s);
  }
  return s;
}, fromAttribute(s, e) {
  let t = s;
  switch (e) {
    case Boolean:
      t = s !== null;
      break;
    case Number:
      t = s === null ? null : Number(s);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(s);
      } catch {
        t = null;
      }
  }
  return t;
} }, fi = (s, e) => !ar(s, e), Ai = { attribute: !0, type: String, converter: ct, reflect: !1, hasChanged: fi };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), fe.litPropertyMetadata ?? (fe.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class $e extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ai) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), r = this.getPropertyDescriptor(e, i, t);
      r !== void 0 && or(this.prototype, e, r);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: r, set: n } = lr(this.prototype, e) ?? { get() {
      return this[t];
    }, set(o) {
      this[t] = o;
    } };
    return { get() {
      return r == null ? void 0 : r.call(this);
    }, set(o) {
      const l = r == null ? void 0 : r.call(this);
      n.call(this, o), this.requestUpdate(e, l, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ai;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Fe("elementProperties"))) return;
    const e = ur(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Fe("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Fe("properties"))) {
      const t = this.properties, i = [...dr(t), ...cr(t)];
      for (const r of i) this.createProperty(r, t[r]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, r] of t) this.elementProperties.set(i, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const r = this._$Eu(t, i);
      r !== void 0 && this._$Eh.set(r, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const r of i) t.unshift(Ci(r));
    } else e !== void 0 && t.push(Ci(e));
    return t;
  }
  static _$Eu(e, t) {
    const i = t.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((t) => t(this));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const i of t.keys()) this.hasOwnProperty(i) && (e.set(i, this[i]), delete this[i]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return nr(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostConnected) == null ? void 0 : i.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var i;
      return (i = t.hostDisconnected) == null ? void 0 : i.call(t);
    });
  }
  attributeChangedCallback(e, t, i) {
    this._$AK(e, i);
  }
  _$EC(e, t) {
    var n;
    const i = this.constructor.elementProperties.get(e), r = this.constructor._$Eu(e, i);
    if (r !== void 0 && i.reflect === !0) {
      const o = (((n = i.converter) == null ? void 0 : n.toAttribute) !== void 0 ? i.converter : ct).toAttribute(t, i.type);
      this._$Em = e, o == null ? this.removeAttribute(r) : this.setAttribute(r, o), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var n;
    const i = this.constructor, r = i._$Eh.get(e);
    if (r !== void 0 && this._$Em !== r) {
      const o = i.getPropertyOptions(r), l = typeof o.converter == "function" ? { fromAttribute: o.converter } : ((n = o.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? o.converter : ct;
      this._$Em = r, this[r] = l.fromAttribute(t, o.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    if (e !== void 0) {
      if (i ?? (i = this.constructor.getPropertyOptions(e)), !(i.hasChanged ?? fi)(this[e], t)) return;
      this.P(e, t, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, i) {
    this._$AL.has(e) || this._$AL.set(e, t), i.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$ET() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var i;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [n, o] of this._$Ep) this[n] = o;
        this._$Ep = void 0;
      }
      const r = this.constructor.elementProperties;
      if (r.size > 0) for (const [n, o] of r) o.wrapped !== !0 || this._$AL.has(n) || this[n] === void 0 || this.P(n, this[n], o);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((r) => {
        var n;
        return (n = r.hostUpdate) == null ? void 0 : n.call(r);
      }), this.update(t)) : this._$EU();
    } catch (r) {
      throw e = !1, this._$EU(), r;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var r;
      return (r = i.hostUpdated) == null ? void 0 : r.call(i);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EU() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
$e.elementStyles = [], $e.shadowRootOptions = { mode: "open" }, $e[Fe("elementProperties")] = /* @__PURE__ */ new Map(), $e[Fe("finalized")] = /* @__PURE__ */ new Map(), Mt == null || Mt({ ReactiveElement: $e }), (fe.reactiveElementVersions ?? (fe.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ve = globalThis, ut = Ve.trustedTypes, $i = ut ? ut.createPolicy("lit-html", { createHTML: (s) => s }) : void 0, Cs = "$lit$", ue = `lit$${Math.random().toFixed(9).slice(2)}$`, Ps = "?" + ue, fr = `<${Ps}>`, ye = document, Xe = () => ye.createComment(""), Ue = (s) => s === null || typeof s != "object" && typeof s != "function", hi = Array.isArray, hr = (s) => hi(s) || typeof (s == null ? void 0 : s[Symbol.iterator]) == "function", Ct = `[ 	
\f\r]`, Be = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Li = /-->/g, zi = />/g, ge = RegExp(`>|${Ct}(?:([^\\s"'>=/]+)(${Ct}*=${Ct}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Ii = /'/g, ki = /"/g, As = /^(?:script|style|textarea|title)$/i, mr = (s) => (e, ...t) => ({ _$litType$: s, strings: e, values: t }), Re = mr(1), Le = Symbol.for("lit-noChange"), Y = Symbol.for("lit-nothing"), _i = /* @__PURE__ */ new WeakMap(), ve = ye.createTreeWalker(ye, 129);
function $s(s, e) {
  if (!hi(s) || !s.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return $i !== void 0 ? $i.createHTML(e) : e;
}
const gr = (s, e) => {
  const t = s.length - 1, i = [];
  let r, n = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", o = Be;
  for (let l = 0; l < t; l++) {
    const a = s[l];
    let p, d, f = -1, w = 0;
    for (; w < a.length && (o.lastIndex = w, d = o.exec(a), d !== null); ) w = o.lastIndex, o === Be ? d[1] === "!--" ? o = Li : d[1] !== void 0 ? o = zi : d[2] !== void 0 ? (As.test(d[2]) && (r = RegExp("</" + d[2], "g")), o = ge) : d[3] !== void 0 && (o = ge) : o === ge ? d[0] === ">" ? (o = r ?? Be, f = -1) : d[1] === void 0 ? f = -2 : (f = o.lastIndex - d[2].length, p = d[1], o = d[3] === void 0 ? ge : d[3] === '"' ? ki : Ii) : o === ki || o === Ii ? o = ge : o === Li || o === zi ? o = Be : (o = ge, r = void 0);
    const h = o === ge && s[l + 1].startsWith("/>") ? " " : "";
    n += o === Be ? a + fr : f >= 0 ? (i.push(p), a.slice(0, f) + Cs + a.slice(f) + ue + h) : a + ue + (f === -2 ? l : h);
  }
  return [$s(s, n + (s[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class We {
  constructor({ strings: e, _$litType$: t }, i) {
    let r;
    this.parts = [];
    let n = 0, o = 0;
    const l = e.length - 1, a = this.parts, [p, d] = gr(e, t);
    if (this.el = We.createElement(p, i), ve.currentNode = this.el.content, t === 2 || t === 3) {
      const f = this.el.content.firstChild;
      f.replaceWith(...f.childNodes);
    }
    for (; (r = ve.nextNode()) !== null && a.length < l; ) {
      if (r.nodeType === 1) {
        if (r.hasAttributes()) for (const f of r.getAttributeNames()) if (f.endsWith(Cs)) {
          const w = d[o++], h = r.getAttribute(f).split(ue), c = /([.?@])?(.*)/.exec(w);
          a.push({ type: 1, index: n, name: c[2], strings: h, ctor: c[1] === "." ? vr : c[1] === "?" ? br : c[1] === "@" ? yr : ht }), r.removeAttribute(f);
        } else f.startsWith(ue) && (a.push({ type: 6, index: n }), r.removeAttribute(f));
        if (As.test(r.tagName)) {
          const f = r.textContent.split(ue), w = f.length - 1;
          if (w > 0) {
            r.textContent = ut ? ut.emptyScript : "";
            for (let h = 0; h < w; h++) r.append(f[h], Xe()), ve.nextNode(), a.push({ type: 2, index: ++n });
            r.append(f[w], Xe());
          }
        }
      } else if (r.nodeType === 8) if (r.data === Ps) a.push({ type: 2, index: n });
      else {
        let f = -1;
        for (; (f = r.data.indexOf(ue, f + 1)) !== -1; ) a.push({ type: 7, index: n }), f += ue.length - 1;
      }
      n++;
    }
  }
  static createElement(e, t) {
    const i = ye.createElement("template");
    return i.innerHTML = e, i;
  }
}
function ze(s, e, t = s, i) {
  var o, l;
  if (e === Le) return e;
  let r = i !== void 0 ? (o = t._$Co) == null ? void 0 : o[i] : t._$Cl;
  const n = Ue(e) ? void 0 : e._$litDirective$;
  return (r == null ? void 0 : r.constructor) !== n && ((l = r == null ? void 0 : r._$AO) == null || l.call(r, !1), n === void 0 ? r = void 0 : (r = new n(s), r._$AT(s, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = r : t._$Cl = r), r !== void 0 && (e = ze(s, r._$AS(s, e.values), r, i)), e;
}
class wr {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: i } = this._$AD, r = ((e == null ? void 0 : e.creationScope) ?? ye).importNode(t, !0);
    ve.currentNode = r;
    let n = ve.nextNode(), o = 0, l = 0, a = i[0];
    for (; a !== void 0; ) {
      if (o === a.index) {
        let p;
        a.type === 2 ? p = new Je(n, n.nextSibling, this, e) : a.type === 1 ? p = new a.ctor(n, a.name, a.strings, this, e) : a.type === 6 && (p = new Sr(n, this, e)), this._$AV.push(p), a = i[++l];
      }
      o !== (a == null ? void 0 : a.index) && (n = ve.nextNode(), o++);
    }
    return ve.currentNode = ye, r;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class Je {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, i, r) {
    this.type = 2, this._$AH = Y, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = r, this._$Cv = (r == null ? void 0 : r.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = ze(this, e, t), Ue(e) ? e === Y || e == null || e === "" ? (this._$AH !== Y && this._$AR(), this._$AH = Y) : e !== this._$AH && e !== Le && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : hr(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== Y && Ue(this._$AH) ? this._$AA.nextSibling.data = e : this.T(ye.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var n;
    const { values: t, _$litType$: i } = e, r = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = We.createElement($s(i.h, i.h[0]), this.options)), i);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === r) this._$AH.p(t);
    else {
      const o = new wr(r, this), l = o.u(this.options);
      o.p(t), this.T(l), this._$AH = o;
    }
  }
  _$AC(e) {
    let t = _i.get(e.strings);
    return t === void 0 && _i.set(e.strings, t = new We(e)), t;
  }
  k(e) {
    hi(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, r = 0;
    for (const n of e) r === t.length ? t.push(i = new Je(this.O(Xe()), this.O(Xe()), this, this.options)) : i = t[r], i._$AI(n), r++;
    r < t.length && (this._$AR(i && i._$AB.nextSibling, r), t.length = r);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const r = e.nextSibling;
      e.remove(), e = r;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ht {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, r, n) {
    this.type = 1, this._$AH = Y, this._$AN = void 0, this.element = e, this.name = t, this._$AM = r, this.options = n, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = Y;
  }
  _$AI(e, t = this, i, r) {
    const n = this.strings;
    let o = !1;
    if (n === void 0) e = ze(this, e, t, 0), o = !Ue(e) || e !== this._$AH && e !== Le, o && (this._$AH = e);
    else {
      const l = e;
      let a, p;
      for (e = n[0], a = 0; a < n.length - 1; a++) p = ze(this, l[i + a], t, a), p === Le && (p = this._$AH[a]), o || (o = !Ue(p) || p !== this._$AH[a]), p === Y ? e = Y : e !== Y && (e += (p ?? "") + n[a + 1]), this._$AH[a] = p;
    }
    o && !r && this.j(e);
  }
  j(e) {
    e === Y ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class vr extends ht {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === Y ? void 0 : e;
  }
}
class br extends ht {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== Y);
  }
}
class yr extends ht {
  constructor(e, t, i, r, n) {
    super(e, t, i, r, n), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = ze(this, e, t, 0) ?? Y) === Le) return;
    const i = this._$AH, r = e === Y && i !== Y || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, n = e !== Y && (i === Y || r);
    r && this.element.removeEventListener(this.name, this, i), n && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Sr {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    ze(this, e);
  }
}
const Pt = Ve.litHtmlPolyfillSupport;
Pt == null || Pt(We, Je), (Ve.litHtmlVersions ?? (Ve.litHtmlVersions = [])).push("3.2.1");
const Er = (s, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let r = i._$litPart$;
  if (r === void 0) {
    const n = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = r = new Je(e.insertBefore(Xe(), n), n, void 0, t ?? {});
  }
  return r._$AI(s), r;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let je = class extends $e {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Er(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return Le;
  }
};
var vs;
je._$litElement$ = !0, je.finalized = !0, (vs = globalThis.litElementHydrateSupport) == null || vs.call(globalThis, { LitElement: je });
const At = globalThis.litElementPolyfillSupport;
At == null || At({ LitElement: je });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xr = { attribute: !0, type: String, converter: ct, reflect: !1, hasChanged: fi }, Tr = (s = xr, e, t) => {
  const { kind: i, metadata: r } = t;
  let n = globalThis.litPropertyMetadata.get(r);
  if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = /* @__PURE__ */ new Map()), n.set(t.name, s), i === "accessor") {
    const { name: o } = t;
    return { set(l) {
      const a = e.get.call(this);
      e.set.call(this, l), this.requestUpdate(o, a, s);
    }, init(l) {
      return l !== void 0 && this.P(o, void 0, s), l;
    } };
  }
  if (i === "setter") {
    const { name: o } = t;
    return function(l) {
      const a = this[o];
      e.call(this, l), this.requestUpdate(o, a, s);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function mi(s) {
  return (e, t) => typeof t == "object" ? Tr(s, e, t) : ((i, r, n) => {
    const o = r.hasOwnProperty(n);
    return r.constructor.createProperty(n, o ? { ...i, wrapped: !0 } : i), o ? Object.getOwnPropertyDescriptor(r, n) : void 0;
  })(s, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function gi(s) {
  return mi({ ...s, state: !0, attribute: !1 });
}
function Mr(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var Ae = {}, $t, Oi;
function Cr() {
  return Oi || (Oi = 1, $t = function() {
    return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
  }), $t;
}
var Lt = {}, de = {}, Di;
function Ee() {
  if (Di) return de;
  Di = 1;
  let s;
  const e = [
    0,
    // Not used
    26,
    44,
    70,
    100,
    134,
    172,
    196,
    242,
    292,
    346,
    404,
    466,
    532,
    581,
    655,
    733,
    815,
    901,
    991,
    1085,
    1156,
    1258,
    1364,
    1474,
    1588,
    1706,
    1828,
    1921,
    2051,
    2185,
    2323,
    2465,
    2611,
    2761,
    2876,
    3034,
    3196,
    3362,
    3532,
    3706
  ];
  return de.getSymbolSize = function(i) {
    if (!i) throw new Error('"version" cannot be null or undefined');
    if (i < 1 || i > 40) throw new Error('"version" should be in range from 1 to 40');
    return i * 4 + 17;
  }, de.getSymbolTotalCodewords = function(i) {
    return e[i];
  }, de.getBCHDigit = function(t) {
    let i = 0;
    for (; t !== 0; )
      i++, t >>>= 1;
    return i;
  }, de.setToSJISFunction = function(i) {
    if (typeof i != "function")
      throw new Error('"toSJISFunc" is not a valid function.');
    s = i;
  }, de.isKanjiModeEnabled = function() {
    return typeof s < "u";
  }, de.toSJIS = function(i) {
    return s(i);
  }, de;
}
var zt = {}, Bi;
function wi() {
  return Bi || (Bi = 1, function(s) {
    s.L = { bit: 1 }, s.M = { bit: 0 }, s.Q = { bit: 3 }, s.H = { bit: 2 };
    function e(t) {
      if (typeof t != "string")
        throw new Error("Param is not a string");
      switch (t.toLowerCase()) {
        case "l":
        case "low":
          return s.L;
        case "m":
        case "medium":
          return s.M;
        case "q":
        case "quartile":
          return s.Q;
        case "h":
        case "high":
          return s.H;
        default:
          throw new Error("Unknown EC Level: " + t);
      }
    }
    s.isValid = function(i) {
      return i && typeof i.bit < "u" && i.bit >= 0 && i.bit < 4;
    }, s.from = function(i, r) {
      if (s.isValid(i))
        return i;
      try {
        return e(i);
      } catch {
        return r;
      }
    };
  }(zt)), zt;
}
var It, Ri;
function Pr() {
  if (Ri) return It;
  Ri = 1;
  function s() {
    this.buffer = [], this.length = 0;
  }
  return s.prototype = {
    get: function(e) {
      const t = Math.floor(e / 8);
      return (this.buffer[t] >>> 7 - e % 8 & 1) === 1;
    },
    put: function(e, t) {
      for (let i = 0; i < t; i++)
        this.putBit((e >>> t - i - 1 & 1) === 1);
    },
    getLengthInBits: function() {
      return this.length;
    },
    putBit: function(e) {
      const t = Math.floor(this.length / 8);
      this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
    }
  }, It = s, It;
}
var kt, Ni;
function Ar() {
  if (Ni) return kt;
  Ni = 1;
  function s(e) {
    if (!e || e < 1)
      throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
  }
  return s.prototype.set = function(e, t, i, r) {
    const n = e * this.size + t;
    this.data[n] = i, r && (this.reservedBit[n] = !0);
  }, s.prototype.get = function(e, t) {
    return this.data[e * this.size + t];
  }, s.prototype.xor = function(e, t, i) {
    this.data[e * this.size + t] ^= i;
  }, s.prototype.isReserved = function(e, t) {
    return this.reservedBit[e * this.size + t];
  }, kt = s, kt;
}
var _t = {}, Hi;
function $r() {
  return Hi || (Hi = 1, function(s) {
    const e = Ee().getSymbolSize;
    s.getRowColCoords = function(i) {
      if (i === 1) return [];
      const r = Math.floor(i / 7) + 2, n = e(i), o = n === 145 ? 26 : Math.ceil((n - 13) / (2 * r - 2)) * 2, l = [n - 7];
      for (let a = 1; a < r - 1; a++)
        l[a] = l[a - 1] - o;
      return l.push(6), l.reverse();
    }, s.getPositions = function(i) {
      const r = [], n = s.getRowColCoords(i), o = n.length;
      for (let l = 0; l < o; l++)
        for (let a = 0; a < o; a++)
          l === 0 && a === 0 || // top-left
          l === 0 && a === o - 1 || // bottom-left
          l === o - 1 && a === 0 || r.push([n[l], n[a]]);
      return r;
    };
  }(_t)), _t;
}
var Ot = {}, qi;
function Lr() {
  if (qi) return Ot;
  qi = 1;
  const s = Ee().getSymbolSize, e = 7;
  return Ot.getPositions = function(i) {
    const r = s(i);
    return [
      // top-left
      [0, 0],
      // top-right
      [r - e, 0],
      // bottom-left
      [0, r - e]
    ];
  }, Ot;
}
var Dt = {}, Gi;
function zr() {
  return Gi || (Gi = 1, function(s) {
    s.Patterns = {
      PATTERN000: 0,
      PATTERN001: 1,
      PATTERN010: 2,
      PATTERN011: 3,
      PATTERN100: 4,
      PATTERN101: 5,
      PATTERN110: 6,
      PATTERN111: 7
    };
    const e = {
      N1: 3,
      N2: 3,
      N3: 40,
      N4: 10
    };
    s.isValid = function(r) {
      return r != null && r !== "" && !isNaN(r) && r >= 0 && r <= 7;
    }, s.from = function(r) {
      return s.isValid(r) ? parseInt(r, 10) : void 0;
    }, s.getPenaltyN1 = function(r) {
      const n = r.size;
      let o = 0, l = 0, a = 0, p = null, d = null;
      for (let f = 0; f < n; f++) {
        l = a = 0, p = d = null;
        for (let w = 0; w < n; w++) {
          let h = r.get(f, w);
          h === p ? l++ : (l >= 5 && (o += e.N1 + (l - 5)), p = h, l = 1), h = r.get(w, f), h === d ? a++ : (a >= 5 && (o += e.N1 + (a - 5)), d = h, a = 1);
        }
        l >= 5 && (o += e.N1 + (l - 5)), a >= 5 && (o += e.N1 + (a - 5));
      }
      return o;
    }, s.getPenaltyN2 = function(r) {
      const n = r.size;
      let o = 0;
      for (let l = 0; l < n - 1; l++)
        for (let a = 0; a < n - 1; a++) {
          const p = r.get(l, a) + r.get(l, a + 1) + r.get(l + 1, a) + r.get(l + 1, a + 1);
          (p === 4 || p === 0) && o++;
        }
      return o * e.N2;
    }, s.getPenaltyN3 = function(r) {
      const n = r.size;
      let o = 0, l = 0, a = 0;
      for (let p = 0; p < n; p++) {
        l = a = 0;
        for (let d = 0; d < n; d++)
          l = l << 1 & 2047 | r.get(p, d), d >= 10 && (l === 1488 || l === 93) && o++, a = a << 1 & 2047 | r.get(d, p), d >= 10 && (a === 1488 || a === 93) && o++;
      }
      return o * e.N3;
    }, s.getPenaltyN4 = function(r) {
      let n = 0;
      const o = r.data.length;
      for (let a = 0; a < o; a++) n += r.data[a];
      return Math.abs(Math.ceil(n * 100 / o / 5) - 10) * e.N4;
    };
    function t(i, r, n) {
      switch (i) {
        case s.Patterns.PATTERN000:
          return (r + n) % 2 === 0;
        case s.Patterns.PATTERN001:
          return r % 2 === 0;
        case s.Patterns.PATTERN010:
          return n % 3 === 0;
        case s.Patterns.PATTERN011:
          return (r + n) % 3 === 0;
        case s.Patterns.PATTERN100:
          return (Math.floor(r / 2) + Math.floor(n / 3)) % 2 === 0;
        case s.Patterns.PATTERN101:
          return r * n % 2 + r * n % 3 === 0;
        case s.Patterns.PATTERN110:
          return (r * n % 2 + r * n % 3) % 2 === 0;
        case s.Patterns.PATTERN111:
          return (r * n % 3 + (r + n) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + i);
      }
    }
    s.applyMask = function(r, n) {
      const o = n.size;
      for (let l = 0; l < o; l++)
        for (let a = 0; a < o; a++)
          n.isReserved(a, l) || n.xor(a, l, t(r, a, l));
    }, s.getBestMask = function(r, n) {
      const o = Object.keys(s.Patterns).length;
      let l = 0, a = 1 / 0;
      for (let p = 0; p < o; p++) {
        n(p), s.applyMask(p, r);
        const d = s.getPenaltyN1(r) + s.getPenaltyN2(r) + s.getPenaltyN3(r) + s.getPenaltyN4(r);
        s.applyMask(p, r), d < a && (a = d, l = p);
      }
      return l;
    };
  }(Dt)), Dt;
}
var rt = {}, Fi;
function Ls() {
  if (Fi) return rt;
  Fi = 1;
  const s = wi(), e = [
    // L  M  Q  H
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    1,
    2,
    2,
    4,
    1,
    2,
    4,
    4,
    2,
    4,
    4,
    4,
    2,
    4,
    6,
    5,
    2,
    4,
    6,
    6,
    2,
    5,
    8,
    8,
    4,
    5,
    8,
    8,
    4,
    5,
    8,
    11,
    4,
    8,
    10,
    11,
    4,
    9,
    12,
    16,
    4,
    9,
    16,
    16,
    6,
    10,
    12,
    18,
    6,
    10,
    17,
    16,
    6,
    11,
    16,
    19,
    6,
    13,
    18,
    21,
    7,
    14,
    21,
    25,
    8,
    16,
    20,
    25,
    8,
    17,
    23,
    25,
    9,
    17,
    23,
    34,
    9,
    18,
    25,
    30,
    10,
    20,
    27,
    32,
    12,
    21,
    29,
    35,
    12,
    23,
    34,
    37,
    12,
    25,
    34,
    40,
    13,
    26,
    35,
    42,
    14,
    28,
    38,
    45,
    15,
    29,
    40,
    48,
    16,
    31,
    43,
    51,
    17,
    33,
    45,
    54,
    18,
    35,
    48,
    57,
    19,
    37,
    51,
    60,
    19,
    38,
    53,
    63,
    20,
    40,
    56,
    66,
    21,
    43,
    59,
    70,
    22,
    45,
    62,
    74,
    24,
    47,
    65,
    77,
    25,
    49,
    68,
    81
  ], t = [
    // L  M  Q  H
    7,
    10,
    13,
    17,
    10,
    16,
    22,
    28,
    15,
    26,
    36,
    44,
    20,
    36,
    52,
    64,
    26,
    48,
    72,
    88,
    36,
    64,
    96,
    112,
    40,
    72,
    108,
    130,
    48,
    88,
    132,
    156,
    60,
    110,
    160,
    192,
    72,
    130,
    192,
    224,
    80,
    150,
    224,
    264,
    96,
    176,
    260,
    308,
    104,
    198,
    288,
    352,
    120,
    216,
    320,
    384,
    132,
    240,
    360,
    432,
    144,
    280,
    408,
    480,
    168,
    308,
    448,
    532,
    180,
    338,
    504,
    588,
    196,
    364,
    546,
    650,
    224,
    416,
    600,
    700,
    224,
    442,
    644,
    750,
    252,
    476,
    690,
    816,
    270,
    504,
    750,
    900,
    300,
    560,
    810,
    960,
    312,
    588,
    870,
    1050,
    336,
    644,
    952,
    1110,
    360,
    700,
    1020,
    1200,
    390,
    728,
    1050,
    1260,
    420,
    784,
    1140,
    1350,
    450,
    812,
    1200,
    1440,
    480,
    868,
    1290,
    1530,
    510,
    924,
    1350,
    1620,
    540,
    980,
    1440,
    1710,
    570,
    1036,
    1530,
    1800,
    570,
    1064,
    1590,
    1890,
    600,
    1120,
    1680,
    1980,
    630,
    1204,
    1770,
    2100,
    660,
    1260,
    1860,
    2220,
    720,
    1316,
    1950,
    2310,
    750,
    1372,
    2040,
    2430
  ];
  return rt.getBlocksCount = function(r, n) {
    switch (n) {
      case s.L:
        return e[(r - 1) * 4 + 0];
      case s.M:
        return e[(r - 1) * 4 + 1];
      case s.Q:
        return e[(r - 1) * 4 + 2];
      case s.H:
        return e[(r - 1) * 4 + 3];
      default:
        return;
    }
  }, rt.getTotalCodewordsCount = function(r, n) {
    switch (n) {
      case s.L:
        return t[(r - 1) * 4 + 0];
      case s.M:
        return t[(r - 1) * 4 + 1];
      case s.Q:
        return t[(r - 1) * 4 + 2];
      case s.H:
        return t[(r - 1) * 4 + 3];
      default:
        return;
    }
  }, rt;
}
var Bt = {}, Ne = {}, Vi;
function Ir() {
  if (Vi) return Ne;
  Vi = 1;
  const s = new Uint8Array(512), e = new Uint8Array(256);
  return function() {
    let i = 1;
    for (let r = 0; r < 255; r++)
      s[r] = i, e[i] = r, i <<= 1, i & 256 && (i ^= 285);
    for (let r = 255; r < 512; r++)
      s[r] = s[r - 255];
  }(), Ne.log = function(i) {
    if (i < 1) throw new Error("log(" + i + ")");
    return e[i];
  }, Ne.exp = function(i) {
    return s[i];
  }, Ne.mul = function(i, r) {
    return i === 0 || r === 0 ? 0 : s[e[i] + e[r]];
  }, Ne;
}
var ji;
function kr() {
  return ji || (ji = 1, function(s) {
    const e = Ir();
    s.mul = function(i, r) {
      const n = new Uint8Array(i.length + r.length - 1);
      for (let o = 0; o < i.length; o++)
        for (let l = 0; l < r.length; l++)
          n[o + l] ^= e.mul(i[o], r[l]);
      return n;
    }, s.mod = function(i, r) {
      let n = new Uint8Array(i);
      for (; n.length - r.length >= 0; ) {
        const o = n[0];
        for (let a = 0; a < r.length; a++)
          n[a] ^= e.mul(r[a], o);
        let l = 0;
        for (; l < n.length && n[l] === 0; ) l++;
        n = n.slice(l);
      }
      return n;
    }, s.generateECPolynomial = function(i) {
      let r = new Uint8Array([1]);
      for (let n = 0; n < i; n++)
        r = s.mul(r, new Uint8Array([1, e.exp(n)]));
      return r;
    };
  }(Bt)), Bt;
}
var Rt, Yi;
function _r() {
  if (Yi) return Rt;
  Yi = 1;
  const s = kr();
  function e(t) {
    this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
  }
  return e.prototype.initialize = function(i) {
    this.degree = i, this.genPoly = s.generateECPolynomial(this.degree);
  }, e.prototype.encode = function(i) {
    if (!this.genPoly)
      throw new Error("Encoder not initialized");
    const r = new Uint8Array(i.length + this.degree);
    r.set(i);
    const n = s.mod(r, this.genPoly), o = this.degree - n.length;
    if (o > 0) {
      const l = new Uint8Array(this.degree);
      return l.set(n, o), l;
    }
    return n;
  }, Rt = e, Rt;
}
var Nt = {}, Ht = {}, qt = {}, Xi;
function zs() {
  return Xi || (Xi = 1, qt.isValid = function(e) {
    return !isNaN(e) && e >= 1 && e <= 40;
  }), qt;
}
var se = {}, Ui;
function Is() {
  if (Ui) return se;
  Ui = 1;
  const s = "[0-9]+", e = "[A-Z $%*+\\-./:]+";
  let t = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  t = t.replace(/u/g, "\\u");
  const i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + t + `)(?:.|[\r
]))+`;
  se.KANJI = new RegExp(t, "g"), se.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), se.BYTE = new RegExp(i, "g"), se.NUMERIC = new RegExp(s, "g"), se.ALPHANUMERIC = new RegExp(e, "g");
  const r = new RegExp("^" + t + "$"), n = new RegExp("^" + s + "$"), o = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  return se.testKanji = function(a) {
    return r.test(a);
  }, se.testNumeric = function(a) {
    return n.test(a);
  }, se.testAlphanumeric = function(a) {
    return o.test(a);
  }, se;
}
var Wi;
function xe() {
  return Wi || (Wi = 1, function(s) {
    const e = zs(), t = Is();
    s.NUMERIC = {
      id: "Numeric",
      bit: 1,
      ccBits: [10, 12, 14]
    }, s.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 2,
      ccBits: [9, 11, 13]
    }, s.BYTE = {
      id: "Byte",
      bit: 4,
      ccBits: [8, 16, 16]
    }, s.KANJI = {
      id: "Kanji",
      bit: 8,
      ccBits: [8, 10, 12]
    }, s.MIXED = {
      bit: -1
    }, s.getCharCountIndicator = function(n, o) {
      if (!n.ccBits) throw new Error("Invalid mode: " + n);
      if (!e.isValid(o))
        throw new Error("Invalid version: " + o);
      return o >= 1 && o < 10 ? n.ccBits[0] : o < 27 ? n.ccBits[1] : n.ccBits[2];
    }, s.getBestModeForData = function(n) {
      return t.testNumeric(n) ? s.NUMERIC : t.testAlphanumeric(n) ? s.ALPHANUMERIC : t.testKanji(n) ? s.KANJI : s.BYTE;
    }, s.toString = function(n) {
      if (n && n.id) return n.id;
      throw new Error("Invalid mode");
    }, s.isValid = function(n) {
      return n && n.bit && n.ccBits;
    };
    function i(r) {
      if (typeof r != "string")
        throw new Error("Param is not a string");
      switch (r.toLowerCase()) {
        case "numeric":
          return s.NUMERIC;
        case "alphanumeric":
          return s.ALPHANUMERIC;
        case "kanji":
          return s.KANJI;
        case "byte":
          return s.BYTE;
        default:
          throw new Error("Unknown mode: " + r);
      }
    }
    s.from = function(n, o) {
      if (s.isValid(n))
        return n;
      try {
        return i(n);
      } catch {
        return o;
      }
    };
  }(Ht)), Ht;
}
var Ki;
function Or() {
  return Ki || (Ki = 1, function(s) {
    const e = Ee(), t = Ls(), i = wi(), r = xe(), n = zs(), o = 7973, l = e.getBCHDigit(o);
    function a(w, h, c) {
      for (let u = 1; u <= 40; u++)
        if (h <= s.getCapacity(u, c, w))
          return u;
    }
    function p(w, h) {
      return r.getCharCountIndicator(w, h) + 4;
    }
    function d(w, h) {
      let c = 0;
      return w.forEach(function(u) {
        const b = p(u.mode, h);
        c += b + u.getBitsLength();
      }), c;
    }
    function f(w, h) {
      for (let c = 1; c <= 40; c++)
        if (d(w, c) <= s.getCapacity(c, h, r.MIXED))
          return c;
    }
    s.from = function(h, c) {
      return n.isValid(h) ? parseInt(h, 10) : c;
    }, s.getCapacity = function(h, c, u) {
      if (!n.isValid(h))
        throw new Error("Invalid QR Code version");
      typeof u > "u" && (u = r.BYTE);
      const b = e.getSymbolTotalCodewords(h), v = t.getTotalCodewordsCount(h, c), g = (b - v) * 8;
      if (u === r.MIXED) return g;
      const m = g - p(u, h);
      switch (u) {
        case r.NUMERIC:
          return Math.floor(m / 10 * 3);
        case r.ALPHANUMERIC:
          return Math.floor(m / 11 * 2);
        case r.KANJI:
          return Math.floor(m / 13);
        case r.BYTE:
        default:
          return Math.floor(m / 8);
      }
    }, s.getBestVersionForData = function(h, c) {
      let u;
      const b = i.from(c, i.M);
      if (Array.isArray(h)) {
        if (h.length > 1)
          return f(h, b);
        if (h.length === 0)
          return 1;
        u = h[0];
      } else
        u = h;
      return a(u.mode, u.getLength(), b);
    }, s.getEncodedBits = function(h) {
      if (!n.isValid(h) || h < 7)
        throw new Error("Invalid QR Code version");
      let c = h << 12;
      for (; e.getBCHDigit(c) - l >= 0; )
        c ^= o << e.getBCHDigit(c) - l;
      return h << 12 | c;
    };
  }(Nt)), Nt;
}
var Gt = {}, Ji;
function Dr() {
  if (Ji) return Gt;
  Ji = 1;
  const s = Ee(), e = 1335, t = 21522, i = s.getBCHDigit(e);
  return Gt.getEncodedBits = function(n, o) {
    const l = n.bit << 3 | o;
    let a = l << 10;
    for (; s.getBCHDigit(a) - i >= 0; )
      a ^= e << s.getBCHDigit(a) - i;
    return (l << 10 | a) ^ t;
  }, Gt;
}
var Ft = {}, Vt, Qi;
function Br() {
  if (Qi) return Vt;
  Qi = 1;
  const s = xe();
  function e(t) {
    this.mode = s.NUMERIC, this.data = t.toString();
  }
  return e.getBitsLength = function(i) {
    return 10 * Math.floor(i / 3) + (i % 3 ? i % 3 * 3 + 1 : 0);
  }, e.prototype.getLength = function() {
    return this.data.length;
  }, e.prototype.getBitsLength = function() {
    return e.getBitsLength(this.data.length);
  }, e.prototype.write = function(i) {
    let r, n, o;
    for (r = 0; r + 3 <= this.data.length; r += 3)
      n = this.data.substr(r, 3), o = parseInt(n, 10), i.put(o, 10);
    const l = this.data.length - r;
    l > 0 && (n = this.data.substr(r), o = parseInt(n, 10), i.put(o, l * 3 + 1));
  }, Vt = e, Vt;
}
var jt, Zi;
function Rr() {
  if (Zi) return jt;
  Zi = 1;
  const s = xe(), e = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":"
  ];
  function t(i) {
    this.mode = s.ALPHANUMERIC, this.data = i;
  }
  return t.getBitsLength = function(r) {
    return 11 * Math.floor(r / 2) + 6 * (r % 2);
  }, t.prototype.getLength = function() {
    return this.data.length;
  }, t.prototype.getBitsLength = function() {
    return t.getBitsLength(this.data.length);
  }, t.prototype.write = function(r) {
    let n;
    for (n = 0; n + 2 <= this.data.length; n += 2) {
      let o = e.indexOf(this.data[n]) * 45;
      o += e.indexOf(this.data[n + 1]), r.put(o, 11);
    }
    this.data.length % 2 && r.put(e.indexOf(this.data[n]), 6);
  }, jt = t, jt;
}
var Yt, es;
function Nr() {
  if (es) return Yt;
  es = 1;
  const s = xe();
  function e(t) {
    this.mode = s.BYTE, typeof t == "string" ? this.data = new TextEncoder().encode(t) : this.data = new Uint8Array(t);
  }
  return e.getBitsLength = function(i) {
    return i * 8;
  }, e.prototype.getLength = function() {
    return this.data.length;
  }, e.prototype.getBitsLength = function() {
    return e.getBitsLength(this.data.length);
  }, e.prototype.write = function(t) {
    for (let i = 0, r = this.data.length; i < r; i++)
      t.put(this.data[i], 8);
  }, Yt = e, Yt;
}
var Xt, ts;
function Hr() {
  if (ts) return Xt;
  ts = 1;
  const s = xe(), e = Ee();
  function t(i) {
    this.mode = s.KANJI, this.data = i;
  }
  return t.getBitsLength = function(r) {
    return r * 13;
  }, t.prototype.getLength = function() {
    return this.data.length;
  }, t.prototype.getBitsLength = function() {
    return t.getBitsLength(this.data.length);
  }, t.prototype.write = function(i) {
    let r;
    for (r = 0; r < this.data.length; r++) {
      let n = e.toSJIS(this.data[r]);
      if (n >= 33088 && n <= 40956)
        n -= 33088;
      else if (n >= 57408 && n <= 60351)
        n -= 49472;
      else
        throw new Error(
          "Invalid SJIS character: " + this.data[r] + `
Make sure your charset is UTF-8`
        );
      n = (n >>> 8 & 255) * 192 + (n & 255), i.put(n, 13);
    }
  }, Xt = t, Xt;
}
var Ut = { exports: {} }, is;
function qr() {
  return is || (is = 1, function(s) {
    var e = {
      single_source_shortest_paths: function(t, i, r) {
        var n = {}, o = {};
        o[i] = 0;
        var l = e.PriorityQueue.make();
        l.push(i, 0);
        for (var a, p, d, f, w, h, c, u, b; !l.empty(); ) {
          a = l.pop(), p = a.value, f = a.cost, w = t[p] || {};
          for (d in w)
            w.hasOwnProperty(d) && (h = w[d], c = f + h, u = o[d], b = typeof o[d] > "u", (b || u > c) && (o[d] = c, l.push(d, c), n[d] = p));
        }
        if (typeof r < "u" && typeof o[r] > "u") {
          var v = ["Could not find a path from ", i, " to ", r, "."].join("");
          throw new Error(v);
        }
        return n;
      },
      extract_shortest_path_from_predecessor_list: function(t, i) {
        for (var r = [], n = i; n; )
          r.push(n), t[n], n = t[n];
        return r.reverse(), r;
      },
      find_path: function(t, i, r) {
        var n = e.single_source_shortest_paths(t, i, r);
        return e.extract_shortest_path_from_predecessor_list(
          n,
          r
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(t) {
          var i = e.PriorityQueue, r = {}, n;
          t = t || {};
          for (n in i)
            i.hasOwnProperty(n) && (r[n] = i[n]);
          return r.queue = [], r.sorter = t.sorter || i.default_sorter, r;
        },
        default_sorter: function(t, i) {
          return t.cost - i.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(t, i) {
          var r = { value: t, cost: i };
          this.queue.push(r), this.queue.sort(this.sorter);
        },
        /**
         * Return the highest priority element in the queue.
         */
        pop: function() {
          return this.queue.shift();
        },
        empty: function() {
          return this.queue.length === 0;
        }
      }
    };
    s.exports = e;
  }(Ut)), Ut.exports;
}
var ss;
function Gr() {
  return ss || (ss = 1, function(s) {
    const e = xe(), t = Br(), i = Rr(), r = Nr(), n = Hr(), o = Is(), l = Ee(), a = qr();
    function p(v) {
      return unescape(encodeURIComponent(v)).length;
    }
    function d(v, g, m) {
      const y = [];
      let $;
      for (; ($ = v.exec(m)) !== null; )
        y.push({
          data: $[0],
          index: $.index,
          mode: g,
          length: $[0].length
        });
      return y;
    }
    function f(v) {
      const g = d(o.NUMERIC, e.NUMERIC, v), m = d(o.ALPHANUMERIC, e.ALPHANUMERIC, v);
      let y, $;
      return l.isKanjiModeEnabled() ? (y = d(o.BYTE, e.BYTE, v), $ = d(o.KANJI, e.KANJI, v)) : (y = d(o.BYTE_KANJI, e.BYTE, v), $ = []), g.concat(m, y, $).sort(function(A, C) {
        return A.index - C.index;
      }).map(function(A) {
        return {
          data: A.data,
          mode: A.mode,
          length: A.length
        };
      });
    }
    function w(v, g) {
      switch (g) {
        case e.NUMERIC:
          return t.getBitsLength(v);
        case e.ALPHANUMERIC:
          return i.getBitsLength(v);
        case e.KANJI:
          return n.getBitsLength(v);
        case e.BYTE:
          return r.getBitsLength(v);
      }
    }
    function h(v) {
      return v.reduce(function(g, m) {
        const y = g.length - 1 >= 0 ? g[g.length - 1] : null;
        return y && y.mode === m.mode ? (g[g.length - 1].data += m.data, g) : (g.push(m), g);
      }, []);
    }
    function c(v) {
      const g = [];
      for (let m = 0; m < v.length; m++) {
        const y = v[m];
        switch (y.mode) {
          case e.NUMERIC:
            g.push([
              y,
              { data: y.data, mode: e.ALPHANUMERIC, length: y.length },
              { data: y.data, mode: e.BYTE, length: y.length }
            ]);
            break;
          case e.ALPHANUMERIC:
            g.push([
              y,
              { data: y.data, mode: e.BYTE, length: y.length }
            ]);
            break;
          case e.KANJI:
            g.push([
              y,
              { data: y.data, mode: e.BYTE, length: p(y.data) }
            ]);
            break;
          case e.BYTE:
            g.push([
              { data: y.data, mode: e.BYTE, length: p(y.data) }
            ]);
        }
      }
      return g;
    }
    function u(v, g) {
      const m = {}, y = { start: {} };
      let $ = ["start"];
      for (let L = 0; L < v.length; L++) {
        const A = v[L], C = [];
        for (let S = 0; S < A.length; S++) {
          const x = A[S], P = "" + L + S;
          C.push(P), m[P] = { node: x, lastCount: 0 }, y[P] = {};
          for (let T = 0; T < $.length; T++) {
            const E = $[T];
            m[E] && m[E].node.mode === x.mode ? (y[E][P] = w(m[E].lastCount + x.length, x.mode) - w(m[E].lastCount, x.mode), m[E].lastCount += x.length) : (m[E] && (m[E].lastCount = x.length), y[E][P] = w(x.length, x.mode) + 4 + e.getCharCountIndicator(x.mode, g));
          }
        }
        $ = C;
      }
      for (let L = 0; L < $.length; L++)
        y[$[L]].end = 0;
      return { map: y, table: m };
    }
    function b(v, g) {
      let m;
      const y = e.getBestModeForData(v);
      if (m = e.from(g, y), m !== e.BYTE && m.bit < y.bit)
        throw new Error('"' + v + '" cannot be encoded with mode ' + e.toString(m) + `.
 Suggested mode is: ` + e.toString(y));
      switch (m === e.KANJI && !l.isKanjiModeEnabled() && (m = e.BYTE), m) {
        case e.NUMERIC:
          return new t(v);
        case e.ALPHANUMERIC:
          return new i(v);
        case e.KANJI:
          return new n(v);
        case e.BYTE:
          return new r(v);
      }
    }
    s.fromArray = function(g) {
      return g.reduce(function(m, y) {
        return typeof y == "string" ? m.push(b(y, null)) : y.data && m.push(b(y.data, y.mode)), m;
      }, []);
    }, s.fromString = function(g, m) {
      const y = f(g, l.isKanjiModeEnabled()), $ = c(y), L = u($, m), A = a.find_path(L.map, "start", "end"), C = [];
      for (let S = 1; S < A.length - 1; S++)
        C.push(L.table[A[S]].node);
      return s.fromArray(h(C));
    }, s.rawSplit = function(g) {
      return s.fromArray(
        f(g, l.isKanjiModeEnabled())
      );
    };
  }(Ft)), Ft;
}
var rs;
function Fr() {
  if (rs) return Lt;
  rs = 1;
  const s = Ee(), e = wi(), t = Pr(), i = Ar(), r = $r(), n = Lr(), o = zr(), l = Ls(), a = _r(), p = Or(), d = Dr(), f = xe(), w = Gr();
  function h(L, A) {
    const C = L.size, S = n.getPositions(A);
    for (let x = 0; x < S.length; x++) {
      const P = S[x][0], T = S[x][1];
      for (let E = -1; E <= 7; E++)
        if (!(P + E <= -1 || C <= P + E))
          for (let M = -1; M <= 7; M++)
            T + M <= -1 || C <= T + M || (E >= 0 && E <= 6 && (M === 0 || M === 6) || M >= 0 && M <= 6 && (E === 0 || E === 6) || E >= 2 && E <= 4 && M >= 2 && M <= 4 ? L.set(P + E, T + M, !0, !0) : L.set(P + E, T + M, !1, !0));
    }
  }
  function c(L) {
    const A = L.size;
    for (let C = 8; C < A - 8; C++) {
      const S = C % 2 === 0;
      L.set(C, 6, S, !0), L.set(6, C, S, !0);
    }
  }
  function u(L, A) {
    const C = r.getPositions(A);
    for (let S = 0; S < C.length; S++) {
      const x = C[S][0], P = C[S][1];
      for (let T = -2; T <= 2; T++)
        for (let E = -2; E <= 2; E++)
          T === -2 || T === 2 || E === -2 || E === 2 || T === 0 && E === 0 ? L.set(x + T, P + E, !0, !0) : L.set(x + T, P + E, !1, !0);
    }
  }
  function b(L, A) {
    const C = L.size, S = p.getEncodedBits(A);
    let x, P, T;
    for (let E = 0; E < 18; E++)
      x = Math.floor(E / 3), P = E % 3 + C - 8 - 3, T = (S >> E & 1) === 1, L.set(x, P, T, !0), L.set(P, x, T, !0);
  }
  function v(L, A, C) {
    const S = L.size, x = d.getEncodedBits(A, C);
    let P, T;
    for (P = 0; P < 15; P++)
      T = (x >> P & 1) === 1, P < 6 ? L.set(P, 8, T, !0) : P < 8 ? L.set(P + 1, 8, T, !0) : L.set(S - 15 + P, 8, T, !0), P < 8 ? L.set(8, S - P - 1, T, !0) : P < 9 ? L.set(8, 15 - P - 1 + 1, T, !0) : L.set(8, 15 - P - 1, T, !0);
    L.set(S - 8, 8, 1, !0);
  }
  function g(L, A) {
    const C = L.size;
    let S = -1, x = C - 1, P = 7, T = 0;
    for (let E = C - 1; E > 0; E -= 2)
      for (E === 6 && E--; ; ) {
        for (let M = 0; M < 2; M++)
          if (!L.isReserved(x, E - M)) {
            let k = !1;
            T < A.length && (k = (A[T] >>> P & 1) === 1), L.set(x, E - M, k), P--, P === -1 && (T++, P = 7);
          }
        if (x += S, x < 0 || C <= x) {
          x -= S, S = -S;
          break;
        }
      }
  }
  function m(L, A, C) {
    const S = new t();
    C.forEach(function(M) {
      S.put(M.mode.bit, 4), S.put(M.getLength(), f.getCharCountIndicator(M.mode, L)), M.write(S);
    });
    const x = s.getSymbolTotalCodewords(L), P = l.getTotalCodewordsCount(L, A), T = (x - P) * 8;
    for (S.getLengthInBits() + 4 <= T && S.put(0, 4); S.getLengthInBits() % 8 !== 0; )
      S.putBit(0);
    const E = (T - S.getLengthInBits()) / 8;
    for (let M = 0; M < E; M++)
      S.put(M % 2 ? 17 : 236, 8);
    return y(S, L, A);
  }
  function y(L, A, C) {
    const S = s.getSymbolTotalCodewords(A), x = l.getTotalCodewordsCount(A, C), P = S - x, T = l.getBlocksCount(A, C), E = S % T, M = T - E, k = Math.floor(S / T), R = Math.floor(P / T), z = R + 1, I = k - R, B = new a(I);
    let N = 0;
    const G = new Array(T), j = new Array(T);
    let K = 0;
    const me = new Uint8Array(L.buffer);
    for (let V = 0; V < T; V++) {
      const ee = V < M ? R : z;
      G[V] = me.slice(N, N + ee), j[V] = B.encode(G[V]), N += ee, K = Math.max(K, ee);
    }
    const O = new Uint8Array(S);
    let _ = 0, D, H;
    for (D = 0; D < K; D++)
      for (H = 0; H < T; H++)
        D < G[H].length && (O[_++] = G[H][D]);
    for (D = 0; D < I; D++)
      for (H = 0; H < T; H++)
        O[_++] = j[H][D];
    return O;
  }
  function $(L, A, C, S) {
    let x;
    if (Array.isArray(L))
      x = w.fromArray(L);
    else if (typeof L == "string") {
      let k = A;
      if (!k) {
        const R = w.rawSplit(L);
        k = p.getBestVersionForData(R, C);
      }
      x = w.fromString(L, k || 40);
    } else
      throw new Error("Invalid data");
    const P = p.getBestVersionForData(x, C);
    if (!P)
      throw new Error("The amount of data is too big to be stored in a QR Code");
    if (!A)
      A = P;
    else if (A < P)
      throw new Error(
        `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + P + `.
`
      );
    const T = m(A, C, x), E = s.getSymbolSize(A), M = new i(E);
    return h(M, A), c(M), u(M, A), v(M, C, 0), A >= 7 && b(M, A), g(M, T), isNaN(S) && (S = o.getBestMask(
      M,
      v.bind(null, M, C)
    )), o.applyMask(S, M), v(M, C, S), {
      modules: M,
      version: A,
      errorCorrectionLevel: C,
      maskPattern: S,
      segments: x
    };
  }
  return Lt.create = function(A, C) {
    if (typeof A > "u" || A === "")
      throw new Error("No input text");
    let S = e.M, x, P;
    return typeof C < "u" && (S = e.from(C.errorCorrectionLevel, e.M), x = p.from(C.version), P = o.from(C.maskPattern), C.toSJISFunc && s.setToSJISFunction(C.toSJISFunc)), $(A, x, S, P);
  }, Lt;
}
var Wt = {}, Kt = {}, ns;
function ks() {
  return ns || (ns = 1, function(s) {
    function e(t) {
      if (typeof t == "number" && (t = t.toString()), typeof t != "string")
        throw new Error("Color should be defined as hex string");
      let i = t.slice().replace("#", "").split("");
      if (i.length < 3 || i.length === 5 || i.length > 8)
        throw new Error("Invalid hex color: " + t);
      (i.length === 3 || i.length === 4) && (i = Array.prototype.concat.apply([], i.map(function(n) {
        return [n, n];
      }))), i.length === 6 && i.push("F", "F");
      const r = parseInt(i.join(""), 16);
      return {
        r: r >> 24 & 255,
        g: r >> 16 & 255,
        b: r >> 8 & 255,
        a: r & 255,
        hex: "#" + i.slice(0, 6).join("")
      };
    }
    s.getOptions = function(i) {
      i || (i = {}), i.color || (i.color = {});
      const r = typeof i.margin > "u" || i.margin === null || i.margin < 0 ? 4 : i.margin, n = i.width && i.width >= 21 ? i.width : void 0, o = i.scale || 4;
      return {
        width: n,
        scale: n ? 4 : o,
        margin: r,
        color: {
          dark: e(i.color.dark || "#000000ff"),
          light: e(i.color.light || "#ffffffff")
        },
        type: i.type,
        rendererOpts: i.rendererOpts || {}
      };
    }, s.getScale = function(i, r) {
      return r.width && r.width >= i + r.margin * 2 ? r.width / (i + r.margin * 2) : r.scale;
    }, s.getImageWidth = function(i, r) {
      const n = s.getScale(i, r);
      return Math.floor((i + r.margin * 2) * n);
    }, s.qrToImageData = function(i, r, n) {
      const o = r.modules.size, l = r.modules.data, a = s.getScale(o, n), p = Math.floor((o + n.margin * 2) * a), d = n.margin * a, f = [n.color.light, n.color.dark];
      for (let w = 0; w < p; w++)
        for (let h = 0; h < p; h++) {
          let c = (w * p + h) * 4, u = n.color.light;
          if (w >= d && h >= d && w < p - d && h < p - d) {
            const b = Math.floor((w - d) / a), v = Math.floor((h - d) / a);
            u = f[l[b * o + v] ? 1 : 0];
          }
          i[c++] = u.r, i[c++] = u.g, i[c++] = u.b, i[c] = u.a;
        }
    };
  }(Kt)), Kt;
}
var as;
function Vr() {
  return as || (as = 1, function(s) {
    const e = ks();
    function t(r, n, o) {
      r.clearRect(0, 0, n.width, n.height), n.style || (n.style = {}), n.height = o, n.width = o, n.style.height = o + "px", n.style.width = o + "px";
    }
    function i() {
      try {
        return document.createElement("canvas");
      } catch {
        throw new Error("You need to specify a canvas element");
      }
    }
    s.render = function(n, o, l) {
      let a = l, p = o;
      typeof a > "u" && (!o || !o.getContext) && (a = o, o = void 0), o || (p = i()), a = e.getOptions(a);
      const d = e.getImageWidth(n.modules.size, a), f = p.getContext("2d"), w = f.createImageData(d, d);
      return e.qrToImageData(w.data, n, a), t(f, p, d), f.putImageData(w, 0, 0), p;
    }, s.renderToDataURL = function(n, o, l) {
      let a = l;
      typeof a > "u" && (!o || !o.getContext) && (a = o, o = void 0), a || (a = {});
      const p = s.render(n, o, a), d = a.type || "image/png", f = a.rendererOpts || {};
      return p.toDataURL(d, f.quality);
    };
  }(Wt)), Wt;
}
var Jt = {}, os;
function jr() {
  if (os) return Jt;
  os = 1;
  const s = ks();
  function e(r, n) {
    const o = r.a / 255, l = n + '="' + r.hex + '"';
    return o < 1 ? l + " " + n + '-opacity="' + o.toFixed(2).slice(1) + '"' : l;
  }
  function t(r, n, o) {
    let l = r + n;
    return typeof o < "u" && (l += " " + o), l;
  }
  function i(r, n, o) {
    let l = "", a = 0, p = !1, d = 0;
    for (let f = 0; f < r.length; f++) {
      const w = Math.floor(f % n), h = Math.floor(f / n);
      !w && !p && (p = !0), r[f] ? (d++, f > 0 && w > 0 && r[f - 1] || (l += p ? t("M", w + o, 0.5 + h + o) : t("m", a, 0), a = 0, p = !1), w + 1 < n && r[f + 1] || (l += t("h", d), d = 0)) : a++;
    }
    return l;
  }
  return Jt.render = function(n, o, l) {
    const a = s.getOptions(o), p = n.modules.size, d = n.modules.data, f = p + a.margin * 2, w = a.color.light.a ? "<path " + e(a.color.light, "fill") + ' d="M0 0h' + f + "v" + f + 'H0z"/>' : "", h = "<path " + e(a.color.dark, "stroke") + ' d="' + i(d, p, a.margin) + '"/>', c = 'viewBox="0 0 ' + f + " " + f + '"', b = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + c + ' shape-rendering="crispEdges">' + w + h + `</svg>
`;
    return typeof l == "function" && l(null, b), b;
  }, Jt;
}
var ls;
function Yr() {
  if (ls) return Ae;
  ls = 1;
  const s = Cr(), e = Fr(), t = Vr(), i = jr();
  function r(n, o, l, a, p) {
    const d = [].slice.call(arguments, 1), f = d.length, w = typeof d[f - 1] == "function";
    if (!w && !s())
      throw new Error("Callback required as last argument");
    if (w) {
      if (f < 2)
        throw new Error("Too few arguments provided");
      f === 2 ? (p = l, l = o, o = a = void 0) : f === 3 && (o.getContext && typeof p > "u" ? (p = a, a = void 0) : (p = a, a = l, l = o, o = void 0));
    } else {
      if (f < 1)
        throw new Error("Too few arguments provided");
      return f === 1 ? (l = o, o = a = void 0) : f === 2 && !o.getContext && (a = l, l = o, o = void 0), new Promise(function(h, c) {
        try {
          const u = e.create(l, a);
          h(n(u, o, a));
        } catch (u) {
          c(u);
        }
      });
    }
    try {
      const h = e.create(l, a);
      p(null, n(h, o, a));
    } catch (h) {
      p(h);
    }
  }
  return Ae.create = e.create, Ae.toCanvas = r.bind(null, t.render), Ae.toDataURL = r.bind(null, t.renderToDataURL), Ae.toString = r.bind(null, function(n, o, l) {
    return i.render(n, l);
  }), Ae;
}
var Xr = Yr();
const Ur = /* @__PURE__ */ Mr(Xr);
function ds(s) {
  return s !== null && typeof s == "object" && "constructor" in s && s.constructor === Object;
}
function vi(s, e) {
  s === void 0 && (s = {}), e === void 0 && (e = {});
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter((i) => t.indexOf(i) < 0).forEach((i) => {
    typeof s[i] > "u" ? s[i] = e[i] : ds(e[i]) && ds(s[i]) && Object.keys(e[i]).length > 0 && vi(s[i], e[i]);
  });
}
const _s = {
  body: {},
  addEventListener() {
  },
  removeEventListener() {
  },
  activeElement: {
    blur() {
    },
    nodeName: ""
  },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return {
      initEvent() {
      }
    };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {
      },
      getElementsByTagName() {
        return [];
      }
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  }
};
function X() {
  const s = typeof document < "u" ? document : {};
  return vi(s, _s), s;
}
const Wr = {
  document: _s,
  navigator: {
    userAgent: ""
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: ""
  },
  history: {
    replaceState() {
    },
    pushState() {
    },
    go() {
    },
    back() {
    }
  },
  CustomEvent: function() {
    return this;
  },
  addEventListener() {
  },
  removeEventListener() {
  },
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      }
    };
  },
  Image() {
  },
  Date() {
  },
  screen: {},
  setTimeout() {
  },
  clearTimeout() {
  },
  matchMedia() {
    return {};
  },
  requestAnimationFrame(s) {
    return typeof setTimeout > "u" ? (s(), null) : setTimeout(s, 0);
  },
  cancelAnimationFrame(s) {
    typeof setTimeout > "u" || clearTimeout(s);
  }
};
function F() {
  const s = typeof window < "u" ? window : {};
  return vi(s, Wr), s;
}
function ce(s) {
  return s === void 0 && (s = ""), s.trim().split(" ").filter((e) => !!e.trim());
}
function Kr(s) {
  const e = s;
  Object.keys(e).forEach((t) => {
    try {
      e[t] = null;
    } catch {
    }
    try {
      delete e[t];
    } catch {
    }
  });
}
function Se(s, e) {
  return e === void 0 && (e = 0), setTimeout(s, e);
}
function te() {
  return Date.now();
}
function Jr(s) {
  const e = F();
  let t;
  return e.getComputedStyle && (t = e.getComputedStyle(s, null)), !t && s.currentStyle && (t = s.currentStyle), t || (t = s.style), t;
}
function ai(s, e) {
  e === void 0 && (e = "x");
  const t = F();
  let i, r, n;
  const o = Jr(s);
  return t.WebKitCSSMatrix ? (r = o.transform || o.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map((l) => l.replace(",", ".")).join(", ")), n = new t.WebKitCSSMatrix(r === "none" ? "" : r)) : (n = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = n.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? r = n.m41 : i.length === 16 ? r = parseFloat(i[12]) : r = parseFloat(i[4])), e === "y" && (t.WebKitCSSMatrix ? r = n.m42 : i.length === 16 ? r = parseFloat(i[13]) : r = parseFloat(i[5])), r || 0;
}
function qe(s) {
  return typeof s == "object" && s !== null && s.constructor && Object.prototype.toString.call(s).slice(8, -1) === "Object";
}
function Qr(s) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? s instanceof HTMLElement : s && (s.nodeType === 1 || s.nodeType === 11);
}
function Q() {
  const s = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
  for (let t = 1; t < arguments.length; t += 1) {
    const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (i != null && !Qr(i)) {
      const r = Object.keys(Object(i)).filter((n) => e.indexOf(n) < 0);
      for (let n = 0, o = r.length; n < o; n += 1) {
        const l = r[n], a = Object.getOwnPropertyDescriptor(i, l);
        a !== void 0 && a.enumerable && (qe(s[l]) && qe(i[l]) ? i[l].__swiper__ ? s[l] = i[l] : Q(s[l], i[l]) : !qe(s[l]) && qe(i[l]) ? (s[l] = {}, i[l].__swiper__ ? s[l] = i[l] : Q(s[l], i[l])) : s[l] = i[l]);
      }
    }
  }
  return s;
}
function Ge(s, e, t) {
  s.style.setProperty(e, t);
}
function Os(s) {
  let {
    swiper: e,
    targetPosition: t,
    side: i
  } = s;
  const r = F(), n = -e.translate;
  let o = null, l;
  const a = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
  const p = t > n ? "next" : "prev", d = (w, h) => p === "next" && w >= h || p === "prev" && w <= h, f = () => {
    l = (/* @__PURE__ */ new Date()).getTime(), o === null && (o = l);
    const w = Math.max(Math.min((l - o) / a, 1), 0), h = 0.5 - Math.cos(w * Math.PI) / 2;
    let c = n + h * (t - n);
    if (d(c, t) && (c = t), e.wrapperEl.scrollTo({
      [i]: c
    }), d(c, t)) {
      e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
          [i]: c
        });
      }), r.cancelAnimationFrame(e.cssModeFrameID);
      return;
    }
    e.cssModeFrameID = r.requestAnimationFrame(f);
  };
  f();
}
function Te(s) {
  return s.querySelector(".swiper-slide-transform") || s.shadowRoot && s.shadowRoot.querySelector(".swiper-slide-transform") || s;
}
function U(s, e) {
  e === void 0 && (e = "");
  const t = F(), i = [...s.children];
  return t.HTMLSlotElement && s instanceof HTMLSlotElement && i.push(...s.assignedElements()), e ? i.filter((r) => r.matches(e)) : i;
}
function Zr(s, e) {
  const t = [e];
  for (; t.length > 0; ) {
    const i = t.shift();
    if (s === i)
      return !0;
    t.push(...i.children, ...i.shadowRoot ? i.shadowRoot.children : [], ...i.assignedElements ? i.assignedElements() : []);
  }
}
function en(s, e) {
  const t = F();
  let i = e.contains(s);
  return !i && t.HTMLSlotElement && e instanceof HTMLSlotElement && (i = [...e.assignedElements()].includes(s), i || (i = Zr(s, e))), i;
}
function pt(s) {
  try {
    console.warn(s);
    return;
  } catch {
  }
}
function Z(s, e) {
  e === void 0 && (e = []);
  const t = document.createElement(s);
  return t.classList.add(...Array.isArray(e) ? e : ce(e)), t;
}
function ft(s) {
  const e = F(), t = X(), i = s.getBoundingClientRect(), r = t.body, n = s.clientTop || r.clientTop || 0, o = s.clientLeft || r.clientLeft || 0, l = s === e ? e.scrollY : s.scrollTop, a = s === e ? e.scrollX : s.scrollLeft;
  return {
    top: i.top + l - n,
    left: i.left + a - o
  };
}
function tn(s, e) {
  const t = [];
  for (; s.previousElementSibling; ) {
    const i = s.previousElementSibling;
    e ? i.matches(e) && t.push(i) : t.push(i), s = i;
  }
  return t;
}
function sn(s, e) {
  const t = [];
  for (; s.nextElementSibling; ) {
    const i = s.nextElementSibling;
    e ? i.matches(e) && t.push(i) : t.push(i), s = i;
  }
  return t;
}
function pe(s, e) {
  return F().getComputedStyle(s, null).getPropertyValue(e);
}
function Ke(s) {
  let e = s, t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function be(s, e) {
  const t = [];
  let i = s.parentElement;
  for (; i; )
    e ? i.matches(e) && t.push(i) : t.push(i), i = i.parentElement;
  return t;
}
function Ye(s, e) {
  function t(i) {
    i.target === s && (e.call(s, i), s.removeEventListener("transitionend", t));
  }
  e && s.addEventListener("transitionend", t);
}
function oi(s, e, t) {
  const i = F();
  return s[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(s, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(s, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"));
}
function q(s) {
  return (Array.isArray(s) ? s : [s]).filter((e) => !!e);
}
function mt(s) {
  return (e) => Math.abs(e) > 0 && s.browser && s.browser.need3dFix && Math.abs(e) % 90 === 0 ? e + 1e-3 : e;
}
let Qt;
function rn() {
  const s = F(), e = X();
  return {
    smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in s || s.DocumentTouch && e instanceof s.DocumentTouch)
  };
}
function Ds() {
  return Qt || (Qt = rn()), Qt;
}
let Zt;
function nn(s) {
  let {
    userAgent: e
  } = s === void 0 ? {} : s;
  const t = Ds(), i = F(), r = i.navigator.platform, n = e || i.navigator.userAgent, o = {
    ios: !1,
    android: !1
  }, l = i.screen.width, a = i.screen.height, p = n.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = n.match(/(iPad).*OS\s([\d_]+)/);
  const f = n.match(/(iPod)(.*OS\s([\d_]+))?/), w = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = r === "Win32";
  let c = r === "MacIntel";
  const u = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !d && c && t.touch && u.indexOf(`${l}x${a}`) >= 0 && (d = n.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), c = !1), p && !h && (o.os = "android", o.android = !0), (d || w || f) && (o.os = "ios", o.ios = !0), o;
}
function Bs(s) {
  return s === void 0 && (s = {}), Zt || (Zt = nn(s)), Zt;
}
let ei;
function an() {
  const s = F(), e = Bs();
  let t = !1;
  function i() {
    const l = s.navigator.userAgent.toLowerCase();
    return l.indexOf("safari") >= 0 && l.indexOf("chrome") < 0 && l.indexOf("android") < 0;
  }
  if (i()) {
    const l = String(s.navigator.userAgent);
    if (l.includes("Version/")) {
      const [a, p] = l.split("Version/")[1].split(" ")[0].split(".").map((d) => Number(d));
      t = a < 16 || a === 16 && p < 2;
    }
  }
  const r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent), n = i(), o = n || r && e.ios;
  return {
    isSafari: t || n,
    needPerspectiveFix: t,
    need3dFix: o,
    isWebView: r
  };
}
function Rs() {
  return ei || (ei = an()), ei;
}
function on(s) {
  let {
    swiper: e,
    on: t,
    emit: i
  } = s;
  const r = F();
  let n = null, o = null;
  const l = () => {
    !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
  }, a = () => {
    !e || e.destroyed || !e.initialized || (n = new ResizeObserver((f) => {
      o = r.requestAnimationFrame(() => {
        const {
          width: w,
          height: h
        } = e;
        let c = w, u = h;
        f.forEach((b) => {
          let {
            contentBoxSize: v,
            contentRect: g,
            target: m
          } = b;
          m && m !== e.el || (c = g ? g.width : (v[0] || v).inlineSize, u = g ? g.height : (v[0] || v).blockSize);
        }), (c !== w || u !== h) && l();
      });
    }), n.observe(e.el));
  }, p = () => {
    o && r.cancelAnimationFrame(o), n && n.unobserve && e.el && (n.unobserve(e.el), n = null);
  }, d = () => {
    !e || e.destroyed || !e.initialized || i("orientationchange");
  };
  t("init", () => {
    if (e.params.resizeObserver && typeof r.ResizeObserver < "u") {
      a();
      return;
    }
    r.addEventListener("resize", l), r.addEventListener("orientationchange", d);
  }), t("destroy", () => {
    p(), r.removeEventListener("resize", l), r.removeEventListener("orientationchange", d);
  });
}
function ln(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: r
  } = s;
  const n = [], o = F(), l = function(d, f) {
    f === void 0 && (f = {});
    const w = o.MutationObserver || o.WebkitMutationObserver, h = new w((c) => {
      if (e.__preventObserver__) return;
      if (c.length === 1) {
        r("observerUpdate", c[0]);
        return;
      }
      const u = function() {
        r("observerUpdate", c[0]);
      };
      o.requestAnimationFrame ? o.requestAnimationFrame(u) : o.setTimeout(u, 0);
    });
    h.observe(d, {
      attributes: typeof f.attributes > "u" ? !0 : f.attributes,
      childList: e.isElement || (typeof f.childList > "u" ? !0 : f).childList,
      characterData: typeof f.characterData > "u" ? !0 : f.characterData
    }), n.push(h);
  }, a = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const d = be(e.hostEl);
        for (let f = 0; f < d.length; f += 1)
          l(d[f]);
      }
      l(e.hostEl, {
        childList: e.params.observeSlideChildren
      }), l(e.wrapperEl, {
        attributes: !1
      });
    }
  }, p = () => {
    n.forEach((d) => {
      d.disconnect();
    }), n.splice(0, n.length);
  };
  t({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), i("init", a), i("destroy", p);
}
var dn = {
  on(s, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    const r = t ? "unshift" : "push";
    return s.split(" ").forEach((n) => {
      i.eventsListeners[n] || (i.eventsListeners[n] = []), i.eventsListeners[n][r](e);
    }), i;
  },
  once(s, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    function r() {
      i.off(s, r), r.__emitterProxy && delete r.__emitterProxy;
      for (var n = arguments.length, o = new Array(n), l = 0; l < n; l++)
        o[l] = arguments[l];
      e.apply(i, o);
    }
    return r.__emitterProxy = e, i.on(s, r, t);
  },
  onAny(s, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof s != "function") return t;
    const i = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(s) < 0 && t.eventsAnyListeners[i](s), t;
  },
  offAny(s) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(s);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(s, e) {
    const t = this;
    return !t.eventsListeners || t.destroyed || !t.eventsListeners || s.split(" ").forEach((i) => {
      typeof e > "u" ? t.eventsListeners[i] = [] : t.eventsListeners[i] && t.eventsListeners[i].forEach((r, n) => {
        (r === e || r.__emitterProxy && r.__emitterProxy === e) && t.eventsListeners[i].splice(n, 1);
      });
    }), t;
  },
  emit() {
    const s = this;
    if (!s.eventsListeners || s.destroyed || !s.eventsListeners) return s;
    let e, t, i;
    for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
      n[o] = arguments[o];
    return typeof n[0] == "string" || Array.isArray(n[0]) ? (e = n[0], t = n.slice(1, n.length), i = s) : (e = n[0].events, t = n[0].data, i = n[0].context || s), t.unshift(i), (Array.isArray(e) ? e : e.split(" ")).forEach((a) => {
      s.eventsAnyListeners && s.eventsAnyListeners.length && s.eventsAnyListeners.forEach((p) => {
        p.apply(i, [a, ...t]);
      }), s.eventsListeners && s.eventsListeners[a] && s.eventsListeners[a].forEach((p) => {
        p.apply(i, t);
      });
    }), s;
  }
};
function cn() {
  const s = this;
  let e, t;
  const i = s.el;
  typeof s.params.width < "u" && s.params.width !== null ? e = s.params.width : e = i.clientWidth, typeof s.params.height < "u" && s.params.height !== null ? t = s.params.height : t = i.clientHeight, !(e === 0 && s.isHorizontal() || t === 0 && s.isVertical()) && (e = e - parseInt(pe(i, "padding-left") || 0, 10) - parseInt(pe(i, "padding-right") || 0, 10), t = t - parseInt(pe(i, "padding-top") || 0, 10) - parseInt(pe(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(s, {
    width: e,
    height: t,
    size: s.isHorizontal() ? e : t
  }));
}
function un() {
  const s = this;
  function e(x, P) {
    return parseFloat(x.getPropertyValue(s.getDirectionLabel(P)) || 0);
  }
  const t = s.params, {
    wrapperEl: i,
    slidesEl: r,
    size: n,
    rtlTranslate: o,
    wrongRTL: l
  } = s, a = s.virtual && t.virtual.enabled, p = a ? s.virtual.slides.length : s.slides.length, d = U(r, `.${s.params.slideClass}, swiper-slide`), f = a ? s.virtual.slides.length : d.length;
  let w = [];
  const h = [], c = [];
  let u = t.slidesOffsetBefore;
  typeof u == "function" && (u = t.slidesOffsetBefore.call(s));
  let b = t.slidesOffsetAfter;
  typeof b == "function" && (b = t.slidesOffsetAfter.call(s));
  const v = s.snapGrid.length, g = s.slidesGrid.length;
  let m = t.spaceBetween, y = -u, $ = 0, L = 0;
  if (typeof n > "u")
    return;
  typeof m == "string" && m.indexOf("%") >= 0 ? m = parseFloat(m.replace("%", "")) / 100 * n : typeof m == "string" && (m = parseFloat(m)), s.virtualSize = -m, d.forEach((x) => {
    o ? x.style.marginLeft = "" : x.style.marginRight = "", x.style.marginBottom = "", x.style.marginTop = "";
  }), t.centeredSlides && t.cssMode && (Ge(i, "--swiper-centered-offset-before", ""), Ge(i, "--swiper-centered-offset-after", ""));
  const A = t.grid && t.grid.rows > 1 && s.grid;
  A ? s.grid.initSlides(d) : s.grid && s.grid.unsetSlides();
  let C;
  const S = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((x) => typeof t.breakpoints[x].slidesPerView < "u").length > 0;
  for (let x = 0; x < f; x += 1) {
    C = 0;
    let P;
    if (d[x] && (P = d[x]), A && s.grid.updateSlide(x, P, d), !(d[x] && pe(P, "display") === "none")) {
      if (t.slidesPerView === "auto") {
        S && (d[x].style[s.getDirectionLabel("width")] = "");
        const T = getComputedStyle(P), E = P.style.transform, M = P.style.webkitTransform;
        if (E && (P.style.transform = "none"), M && (P.style.webkitTransform = "none"), t.roundLengths)
          C = s.isHorizontal() ? oi(P, "width") : oi(P, "height");
        else {
          const k = e(T, "width"), R = e(T, "padding-left"), z = e(T, "padding-right"), I = e(T, "margin-left"), B = e(T, "margin-right"), N = T.getPropertyValue("box-sizing");
          if (N && N === "border-box")
            C = k + I + B;
          else {
            const {
              clientWidth: G,
              offsetWidth: j
            } = P;
            C = k + R + z + I + B + (j - G);
          }
        }
        E && (P.style.transform = E), M && (P.style.webkitTransform = M), t.roundLengths && (C = Math.floor(C));
      } else
        C = (n - (t.slidesPerView - 1) * m) / t.slidesPerView, t.roundLengths && (C = Math.floor(C)), d[x] && (d[x].style[s.getDirectionLabel("width")] = `${C}px`);
      d[x] && (d[x].swiperSlideSize = C), c.push(C), t.centeredSlides ? (y = y + C / 2 + $ / 2 + m, $ === 0 && x !== 0 && (y = y - n / 2 - m), x === 0 && (y = y - n / 2 - m), Math.abs(y) < 1 / 1e3 && (y = 0), t.roundLengths && (y = Math.floor(y)), L % t.slidesPerGroup === 0 && w.push(y), h.push(y)) : (t.roundLengths && (y = Math.floor(y)), (L - Math.min(s.params.slidesPerGroupSkip, L)) % s.params.slidesPerGroup === 0 && w.push(y), h.push(y), y = y + C + m), s.virtualSize += C + m, $ = C, L += 1;
    }
  }
  if (s.virtualSize = Math.max(s.virtualSize, n) + b, o && l && (t.effect === "slide" || t.effect === "coverflow") && (i.style.width = `${s.virtualSize + m}px`), t.setWrapperSize && (i.style[s.getDirectionLabel("width")] = `${s.virtualSize + m}px`), A && s.grid.updateWrapperSize(C, w), !t.centeredSlides) {
    const x = [];
    for (let P = 0; P < w.length; P += 1) {
      let T = w[P];
      t.roundLengths && (T = Math.floor(T)), w[P] <= s.virtualSize - n && x.push(T);
    }
    w = x, Math.floor(s.virtualSize - n) - Math.floor(w[w.length - 1]) > 1 && w.push(s.virtualSize - n);
  }
  if (a && t.loop) {
    const x = c[0] + m;
    if (t.slidesPerGroup > 1) {
      const P = Math.ceil((s.virtual.slidesBefore + s.virtual.slidesAfter) / t.slidesPerGroup), T = x * t.slidesPerGroup;
      for (let E = 0; E < P; E += 1)
        w.push(w[w.length - 1] + T);
    }
    for (let P = 0; P < s.virtual.slidesBefore + s.virtual.slidesAfter; P += 1)
      t.slidesPerGroup === 1 && w.push(w[w.length - 1] + x), h.push(h[h.length - 1] + x), s.virtualSize += x;
  }
  if (w.length === 0 && (w = [0]), m !== 0) {
    const x = s.isHorizontal() && o ? "marginLeft" : s.getDirectionLabel("marginRight");
    d.filter((P, T) => !t.cssMode || t.loop ? !0 : T !== d.length - 1).forEach((P) => {
      P.style[x] = `${m}px`;
    });
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let x = 0;
    c.forEach((T) => {
      x += T + (m || 0);
    }), x -= m;
    const P = x > n ? x - n : 0;
    w = w.map((T) => T <= 0 ? -u : T > P ? P + b : T);
  }
  if (t.centerInsufficientSlides) {
    let x = 0;
    c.forEach((T) => {
      x += T + (m || 0);
    }), x -= m;
    const P = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
    if (x + P < n) {
      const T = (n - x - P) / 2;
      w.forEach((E, M) => {
        w[M] = E - T;
      }), h.forEach((E, M) => {
        h[M] = E + T;
      });
    }
  }
  if (Object.assign(s, {
    slides: d,
    snapGrid: w,
    slidesGrid: h,
    slidesSizesGrid: c
  }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
    Ge(i, "--swiper-centered-offset-before", `${-w[0]}px`), Ge(i, "--swiper-centered-offset-after", `${s.size / 2 - c[c.length - 1] / 2}px`);
    const x = -s.snapGrid[0], P = -s.slidesGrid[0];
    s.snapGrid = s.snapGrid.map((T) => T + x), s.slidesGrid = s.slidesGrid.map((T) => T + P);
  }
  if (f !== p && s.emit("slidesLengthChange"), w.length !== v && (s.params.watchOverflow && s.checkOverflow(), s.emit("snapGridLengthChange")), h.length !== g && s.emit("slidesGridLengthChange"), t.watchSlidesProgress && s.updateSlidesOffset(), s.emit("slidesUpdated"), !a && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
    const x = `${t.containerModifierClass}backface-hidden`, P = s.el.classList.contains(x);
    f <= t.maxBackfaceHiddenSlides ? P || s.el.classList.add(x) : P && s.el.classList.remove(x);
  }
}
function pn(s) {
  const e = this, t = [], i = e.virtual && e.params.virtual.enabled;
  let r = 0, n;
  typeof s == "number" ? e.setTransition(s) : s === !0 && e.setTransition(e.params.speed);
  const o = (l) => i ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((l) => {
        t.push(l);
      });
    else
      for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
        const l = e.activeIndex + n;
        if (l > e.slides.length && !i) break;
        t.push(o(l));
      }
  else
    t.push(o(e.activeIndex));
  for (n = 0; n < t.length; n += 1)
    if (typeof t[n] < "u") {
      const l = t[n].offsetHeight;
      r = l > r ? l : r;
    }
  (r || r === 0) && (e.wrapperEl.style.height = `${r}px`);
}
function fn() {
  const s = this, e = s.slides, t = s.isElement ? s.isHorizontal() ? s.wrapperEl.offsetLeft : s.wrapperEl.offsetTop : 0;
  for (let i = 0; i < e.length; i += 1)
    e[i].swiperSlideOffset = (s.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - s.cssOverflowAdjustment();
}
const cs = (s, e, t) => {
  e && !s.classList.contains(t) ? s.classList.add(t) : !e && s.classList.contains(t) && s.classList.remove(t);
};
function hn(s) {
  s === void 0 && (s = this && this.translate || 0);
  const e = this, t = e.params, {
    slides: i,
    rtlTranslate: r,
    snapGrid: n
  } = e;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let o = -s;
  r && (o = s), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  let l = t.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
  for (let a = 0; a < i.length; a += 1) {
    const p = i[a];
    let d = p.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (d -= i[0].swiperSlideOffset);
    const f = (o + (t.centeredSlides ? e.minTranslate() : 0) - d) / (p.swiperSlideSize + l), w = (o - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - d) / (p.swiperSlideSize + l), h = -(o - d), c = h + e.slidesSizesGrid[a], u = h >= 0 && h <= e.size - e.slidesSizesGrid[a], b = h >= 0 && h < e.size - 1 || c > 1 && c <= e.size || h <= 0 && c >= e.size;
    b && (e.visibleSlides.push(p), e.visibleSlidesIndexes.push(a)), cs(p, b, t.slideVisibleClass), cs(p, u, t.slideFullyVisibleClass), p.progress = r ? -f : f, p.originalProgress = r ? -w : w;
  }
}
function mn(s) {
  const e = this;
  if (typeof s > "u") {
    const d = e.rtlTranslate ? -1 : 1;
    s = e && e.translate && e.translate * d || 0;
  }
  const t = e.params, i = e.maxTranslate() - e.minTranslate();
  let {
    progress: r,
    isBeginning: n,
    isEnd: o,
    progressLoop: l
  } = e;
  const a = n, p = o;
  if (i === 0)
    r = 0, n = !0, o = !0;
  else {
    r = (s - e.minTranslate()) / i;
    const d = Math.abs(s - e.minTranslate()) < 1, f = Math.abs(s - e.maxTranslate()) < 1;
    n = d || r <= 0, o = f || r >= 1, d && (r = 0), f && (r = 1);
  }
  if (t.loop) {
    const d = e.getSlideIndexByData(0), f = e.getSlideIndexByData(e.slides.length - 1), w = e.slidesGrid[d], h = e.slidesGrid[f], c = e.slidesGrid[e.slidesGrid.length - 1], u = Math.abs(s);
    u >= w ? l = (u - w) / c : l = (u + c - h) / c, l > 1 && (l -= 1);
  }
  Object.assign(e, {
    progress: r,
    progressLoop: l,
    isBeginning: n,
    isEnd: o
  }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(s), n && !a && e.emit("reachBeginning toEdge"), o && !p && e.emit("reachEnd toEdge"), (a && !n || p && !o) && e.emit("fromEdge"), e.emit("progress", r);
}
const ti = (s, e, t) => {
  e && !s.classList.contains(t) ? s.classList.add(t) : !e && s.classList.contains(t) && s.classList.remove(t);
};
function gn() {
  const s = this, {
    slides: e,
    params: t,
    slidesEl: i,
    activeIndex: r
  } = s, n = s.virtual && t.virtual.enabled, o = s.grid && t.grid && t.grid.rows > 1, l = (f) => U(i, `.${t.slideClass}${f}, swiper-slide${f}`)[0];
  let a, p, d;
  if (n)
    if (t.loop) {
      let f = r - s.virtual.slidesBefore;
      f < 0 && (f = s.virtual.slides.length + f), f >= s.virtual.slides.length && (f -= s.virtual.slides.length), a = l(`[data-swiper-slide-index="${f}"]`);
    } else
      a = l(`[data-swiper-slide-index="${r}"]`);
  else
    o ? (a = e.find((f) => f.column === r), d = e.find((f) => f.column === r + 1), p = e.find((f) => f.column === r - 1)) : a = e[r];
  a && (o || (d = sn(a, `.${t.slideClass}, swiper-slide`)[0], t.loop && !d && (d = e[0]), p = tn(a, `.${t.slideClass}, swiper-slide`)[0], t.loop && !p === 0 && (p = e[e.length - 1]))), e.forEach((f) => {
    ti(f, f === a, t.slideActiveClass), ti(f, f === d, t.slideNextClass), ti(f, f === p, t.slidePrevClass);
  }), s.emitSlidesClasses();
}
const at = (s, e) => {
  if (!s || s.destroyed || !s.params) return;
  const t = () => s.isElement ? "swiper-slide" : `.${s.params.slideClass}`, i = e.closest(t());
  if (i) {
    let r = i.querySelector(`.${s.params.lazyPreloaderClass}`);
    !r && s.isElement && (i.shadowRoot ? r = i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      i.shadowRoot && (r = i.shadowRoot.querySelector(`.${s.params.lazyPreloaderClass}`), r && r.remove());
    })), r && r.remove();
  }
}, ii = (s, e) => {
  if (!s.slides[e]) return;
  const t = s.slides[e].querySelector('[loading="lazy"]');
  t && t.removeAttribute("loading");
}, li = (s) => {
  if (!s || s.destroyed || !s.params) return;
  let e = s.params.lazyPreloadPrevNext;
  const t = s.slides.length;
  if (!t || !e || e < 0) return;
  e = Math.min(e, t);
  const i = s.params.slidesPerView === "auto" ? s.slidesPerViewDynamic() : Math.ceil(s.params.slidesPerView), r = s.activeIndex;
  if (s.params.grid && s.params.grid.rows > 1) {
    const o = r, l = [o - e];
    l.push(...Array.from({
      length: e
    }).map((a, p) => o + i + p)), s.slides.forEach((a, p) => {
      l.includes(a.column) && ii(s, p);
    });
    return;
  }
  const n = r + i - 1;
  if (s.params.rewind || s.params.loop)
    for (let o = r - e; o <= n + e; o += 1) {
      const l = (o % t + t) % t;
      (l < r || l > n) && ii(s, l);
    }
  else
    for (let o = Math.max(r - e, 0); o <= Math.min(n + e, t - 1); o += 1)
      o !== r && (o > n || o < r) && ii(s, o);
};
function wn(s) {
  const {
    slidesGrid: e,
    params: t
  } = s, i = s.rtlTranslate ? s.translate : -s.translate;
  let r;
  for (let n = 0; n < e.length; n += 1)
    typeof e[n + 1] < "u" ? i >= e[n] && i < e[n + 1] - (e[n + 1] - e[n]) / 2 ? r = n : i >= e[n] && i < e[n + 1] && (r = n + 1) : i >= e[n] && (r = n);
  return t.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0), r;
}
function vn(s) {
  const e = this, t = e.rtlTranslate ? e.translate : -e.translate, {
    snapGrid: i,
    params: r,
    activeIndex: n,
    realIndex: o,
    snapIndex: l
  } = e;
  let a = s, p;
  const d = (h) => {
    let c = h - e.virtual.slidesBefore;
    return c < 0 && (c = e.virtual.slides.length + c), c >= e.virtual.slides.length && (c -= e.virtual.slides.length), c;
  };
  if (typeof a > "u" && (a = wn(e)), i.indexOf(t) >= 0)
    p = i.indexOf(t);
  else {
    const h = Math.min(r.slidesPerGroupSkip, a);
    p = h + Math.floor((a - h) / r.slidesPerGroup);
  }
  if (p >= i.length && (p = i.length - 1), a === n && !e.params.loop) {
    p !== l && (e.snapIndex = p, e.emit("snapIndexChange"));
    return;
  }
  if (a === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = d(a);
    return;
  }
  const f = e.grid && r.grid && r.grid.rows > 1;
  let w;
  if (e.virtual && r.virtual.enabled && r.loop)
    w = d(a);
  else if (f) {
    const h = e.slides.find((u) => u.column === a);
    let c = parseInt(h.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(c) && (c = Math.max(e.slides.indexOf(h), 0)), w = Math.floor(c / r.grid.rows);
  } else if (e.slides[a]) {
    const h = e.slides[a].getAttribute("data-swiper-slide-index");
    h ? w = parseInt(h, 10) : w = a;
  } else
    w = a;
  Object.assign(e, {
    previousSnapIndex: l,
    snapIndex: p,
    previousRealIndex: o,
    realIndex: w,
    previousIndex: n,
    activeIndex: a
  }), e.initialized && li(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (o !== w && e.emit("realIndexChange"), e.emit("slideChange"));
}
function bn(s, e) {
  const t = this, i = t.params;
  let r = s.closest(`.${i.slideClass}, swiper-slide`);
  !r && t.isElement && e && e.length > 1 && e.includes(s) && [...e.slice(e.indexOf(s) + 1, e.length)].forEach((l) => {
    !r && l.matches && l.matches(`.${i.slideClass}, swiper-slide`) && (r = l);
  });
  let n = !1, o;
  if (r) {
    for (let l = 0; l < t.slides.length; l += 1)
      if (t.slides[l] === r) {
        n = !0, o = l;
        break;
      }
  }
  if (r && n)
    t.clickedSlide = r, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = o;
  else {
    t.clickedSlide = void 0, t.clickedIndex = void 0;
    return;
  }
  i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
}
var yn = {
  updateSize: cn,
  updateSlides: un,
  updateAutoHeight: pn,
  updateSlidesOffset: fn,
  updateSlidesProgress: hn,
  updateProgress: mn,
  updateSlidesClasses: gn,
  updateActiveIndex: vn,
  updateClickedSlide: bn
};
function Sn(s) {
  s === void 0 && (s = this.isHorizontal() ? "x" : "y");
  const e = this, {
    params: t,
    rtlTranslate: i,
    translate: r,
    wrapperEl: n
  } = e;
  if (t.virtualTranslate)
    return i ? -r : r;
  if (t.cssMode)
    return r;
  let o = ai(n, s);
  return o += e.cssOverflowAdjustment(), i && (o = -o), o || 0;
}
function En(s, e) {
  const t = this, {
    rtlTranslate: i,
    params: r,
    wrapperEl: n,
    progress: o
  } = t;
  let l = 0, a = 0;
  const p = 0;
  t.isHorizontal() ? l = i ? -s : s : a = s, r.roundLengths && (l = Math.floor(l), a = Math.floor(a)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? l : a, r.cssMode ? n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -a : r.virtualTranslate || (t.isHorizontal() ? l -= t.cssOverflowAdjustment() : a -= t.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${a}px, ${p}px)`);
  let d;
  const f = t.maxTranslate() - t.minTranslate();
  f === 0 ? d = 0 : d = (s - t.minTranslate()) / f, d !== o && t.updateProgress(s), t.emit("setTranslate", t.translate, e);
}
function xn() {
  return -this.snapGrid[0];
}
function Tn() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Mn(s, e, t, i, r) {
  s === void 0 && (s = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), i === void 0 && (i = !0);
  const n = this, {
    params: o,
    wrapperEl: l
  } = n;
  if (n.animating && o.preventInteractionOnTransition)
    return !1;
  const a = n.minTranslate(), p = n.maxTranslate();
  let d;
  if (i && s > a ? d = a : i && s < p ? d = p : d = s, n.updateProgress(d), o.cssMode) {
    const f = n.isHorizontal();
    if (e === 0)
      l[f ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!n.support.smoothScroll)
        return Os({
          swiper: n,
          targetPosition: -d,
          side: f ? "left" : "top"
        }), !0;
      l.scrollTo({
        [f ? "left" : "top"]: -d,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return e === 0 ? (n.setTransition(0), n.setTranslate(d), t && (n.emit("beforeTransitionStart", e, r), n.emit("transitionEnd"))) : (n.setTransition(e), n.setTranslate(d), t && (n.emit("beforeTransitionStart", e, r), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(w) {
    !n || n.destroyed || w.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, n.animating = !1, t && n.emit("transitionEnd"));
  }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0;
}
var Cn = {
  getTranslate: Sn,
  setTranslate: En,
  minTranslate: xn,
  maxTranslate: Tn,
  translateTo: Mn
};
function Pn(s, e) {
  const t = this;
  t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${s}ms`, t.wrapperEl.style.transitionDelay = s === 0 ? "0ms" : ""), t.emit("setTransition", s, e);
}
function Ns(s) {
  let {
    swiper: e,
    runCallbacks: t,
    direction: i,
    step: r
  } = s;
  const {
    activeIndex: n,
    previousIndex: o
  } = e;
  let l = i;
  if (l || (n > o ? l = "next" : n < o ? l = "prev" : l = "reset"), e.emit(`transition${r}`), t && n !== o) {
    if (l === "reset") {
      e.emit(`slideResetTransition${r}`);
      return;
    }
    e.emit(`slideChangeTransition${r}`), l === "next" ? e.emit(`slideNextTransition${r}`) : e.emit(`slidePrevTransition${r}`);
  }
}
function An(s, e) {
  s === void 0 && (s = !0);
  const t = this, {
    params: i
  } = t;
  i.cssMode || (i.autoHeight && t.updateAutoHeight(), Ns({
    swiper: t,
    runCallbacks: s,
    direction: e,
    step: "Start"
  }));
}
function $n(s, e) {
  s === void 0 && (s = !0);
  const t = this, {
    params: i
  } = t;
  t.animating = !1, !i.cssMode && (t.setTransition(0), Ns({
    swiper: t,
    runCallbacks: s,
    direction: e,
    step: "End"
  }));
}
var Ln = {
  setTransition: Pn,
  transitionStart: An,
  transitionEnd: $n
};
function zn(s, e, t, i, r) {
  s === void 0 && (s = 0), t === void 0 && (t = !0), typeof s == "string" && (s = parseInt(s, 10));
  const n = this;
  let o = s;
  o < 0 && (o = 0);
  const {
    params: l,
    snapGrid: a,
    slidesGrid: p,
    previousIndex: d,
    activeIndex: f,
    rtlTranslate: w,
    wrapperEl: h,
    enabled: c
  } = n;
  if (!c && !i && !r || n.destroyed || n.animating && l.preventInteractionOnTransition)
    return !1;
  typeof e > "u" && (e = n.params.speed);
  const u = Math.min(n.params.slidesPerGroupSkip, o);
  let b = u + Math.floor((o - u) / n.params.slidesPerGroup);
  b >= a.length && (b = a.length - 1);
  const v = -a[b];
  if (l.normalizeSlideIndex)
    for (let A = 0; A < p.length; A += 1) {
      const C = -Math.floor(v * 100), S = Math.floor(p[A] * 100), x = Math.floor(p[A + 1] * 100);
      typeof p[A + 1] < "u" ? C >= S && C < x - (x - S) / 2 ? o = A : C >= S && C < x && (o = A + 1) : C >= S && (o = A);
    }
  if (n.initialized && o !== f && (!n.allowSlideNext && (w ? v > n.translate && v > n.minTranslate() : v < n.translate && v < n.minTranslate()) || !n.allowSlidePrev && v > n.translate && v > n.maxTranslate() && (f || 0) !== o))
    return !1;
  o !== (d || 0) && t && n.emit("beforeSlideChangeStart"), n.updateProgress(v);
  let g;
  o > f ? g = "next" : o < f ? g = "prev" : g = "reset";
  const m = n.virtual && n.params.virtual.enabled;
  if (!(m && r) && (w && -v === n.translate || !w && v === n.translate))
    return n.updateActiveIndex(o), l.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), l.effect !== "slide" && n.setTranslate(v), g !== "reset" && (n.transitionStart(t, g), n.transitionEnd(t, g)), !1;
  if (l.cssMode) {
    const A = n.isHorizontal(), C = w ? v : -v;
    if (e === 0)
      m && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), m && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        h[A ? "scrollLeft" : "scrollTop"] = C;
      })) : h[A ? "scrollLeft" : "scrollTop"] = C, m && requestAnimationFrame(() => {
        n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1;
      });
    else {
      if (!n.support.smoothScroll)
        return Os({
          swiper: n,
          targetPosition: C,
          side: A ? "left" : "top"
        }), !0;
      h.scrollTo({
        [A ? "left" : "top"]: C,
        behavior: "smooth"
      });
    }
    return !0;
  }
  const L = Rs().isSafari;
  return m && !r && L && n.isElement && n.virtual.update(!1, !1, o), n.setTransition(e), n.setTranslate(v), n.updateActiveIndex(o), n.updateSlidesClasses(), n.emit("beforeTransitionStart", e, i), n.transitionStart(t, g), e === 0 ? n.transitionEnd(t, g) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(C) {
    !n || n.destroyed || C.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(t, g));
  }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0;
}
function In(s, e, t, i) {
  s === void 0 && (s = 0), t === void 0 && (t = !0), typeof s == "string" && (s = parseInt(s, 10));
  const r = this;
  if (r.destroyed) return;
  typeof e > "u" && (e = r.params.speed);
  const n = r.grid && r.params.grid && r.params.grid.rows > 1;
  let o = s;
  if (r.params.loop)
    if (r.virtual && r.params.virtual.enabled)
      o = o + r.virtual.slidesBefore;
    else {
      let l;
      if (n) {
        const w = o * r.params.grid.rows;
        l = r.slides.find((h) => h.getAttribute("data-swiper-slide-index") * 1 === w).column;
      } else
        l = r.getSlideIndexByData(o);
      const a = n ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length, {
        centeredSlides: p
      } = r.params;
      let d = r.params.slidesPerView;
      d === "auto" ? d = r.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(r.params.slidesPerView, 10)), p && d % 2 === 0 && (d = d + 1));
      let f = a - l < d;
      if (p && (f = f || l < Math.ceil(d / 2)), i && p && r.params.slidesPerView !== "auto" && !n && (f = !1), f) {
        const w = p ? l < r.activeIndex ? "prev" : "next" : l - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
        r.loopFix({
          direction: w,
          slideTo: !0,
          activeSlideIndex: w === "next" ? l + 1 : l - a + 1,
          slideRealIndex: w === "next" ? r.realIndex : void 0
        });
      }
      if (n) {
        const w = o * r.params.grid.rows;
        o = r.slides.find((h) => h.getAttribute("data-swiper-slide-index") * 1 === w).column;
      } else
        o = r.getSlideIndexByData(o);
    }
  return requestAnimationFrame(() => {
    r.slideTo(o, e, t, i);
  }), r;
}
function kn(s, e, t) {
  e === void 0 && (e = !0);
  const i = this, {
    enabled: r,
    params: n,
    animating: o
  } = i;
  if (!r || i.destroyed) return i;
  typeof s > "u" && (s = i.params.speed);
  let l = n.slidesPerGroup;
  n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const a = i.activeIndex < n.slidesPerGroupSkip ? 1 : l, p = i.virtual && n.virtual.enabled;
  if (n.loop) {
    if (o && !p && n.loopPreventsSliding) return !1;
    if (i.loopFix({
      direction: "next"
    }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && n.cssMode)
      return requestAnimationFrame(() => {
        i.slideTo(i.activeIndex + a, s, e, t);
      }), !0;
  }
  return n.rewind && i.isEnd ? i.slideTo(0, s, e, t) : i.slideTo(i.activeIndex + a, s, e, t);
}
function _n(s, e, t) {
  e === void 0 && (e = !0);
  const i = this, {
    params: r,
    snapGrid: n,
    slidesGrid: o,
    rtlTranslate: l,
    enabled: a,
    animating: p
  } = i;
  if (!a || i.destroyed) return i;
  typeof s > "u" && (s = i.params.speed);
  const d = i.virtual && r.virtual.enabled;
  if (r.loop) {
    if (p && !d && r.loopPreventsSliding) return !1;
    i.loopFix({
      direction: "prev"
    }), i._clientLeft = i.wrapperEl.clientLeft;
  }
  const f = l ? i.translate : -i.translate;
  function w(g) {
    return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g);
  }
  const h = w(f), c = n.map((g) => w(g)), u = r.freeMode && r.freeMode.enabled;
  let b = n[c.indexOf(h) - 1];
  if (typeof b > "u" && (r.cssMode || u)) {
    let g;
    n.forEach((m, y) => {
      h >= m && (g = y);
    }), typeof g < "u" && (b = u ? n[g] : n[g > 0 ? g - 1 : g]);
  }
  let v = 0;
  if (typeof b < "u" && (v = o.indexOf(b), v < 0 && (v = i.activeIndex - 1), r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (v = v - i.slidesPerViewDynamic("previous", !0) + 1, v = Math.max(v, 0))), r.rewind && i.isBeginning) {
    const g = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
    return i.slideTo(g, s, e, t);
  } else if (r.loop && i.activeIndex === 0 && r.cssMode)
    return requestAnimationFrame(() => {
      i.slideTo(v, s, e, t);
    }), !0;
  return i.slideTo(v, s, e, t);
}
function On(s, e, t) {
  e === void 0 && (e = !0);
  const i = this;
  if (!i.destroyed)
    return typeof s > "u" && (s = i.params.speed), i.slideTo(i.activeIndex, s, e, t);
}
function Dn(s, e, t, i) {
  e === void 0 && (e = !0), i === void 0 && (i = 0.5);
  const r = this;
  if (r.destroyed) return;
  typeof s > "u" && (s = r.params.speed);
  let n = r.activeIndex;
  const o = Math.min(r.params.slidesPerGroupSkip, n), l = o + Math.floor((n - o) / r.params.slidesPerGroup), a = r.rtlTranslate ? r.translate : -r.translate;
  if (a >= r.snapGrid[l]) {
    const p = r.snapGrid[l], d = r.snapGrid[l + 1];
    a - p > (d - p) * i && (n += r.params.slidesPerGroup);
  } else {
    const p = r.snapGrid[l - 1], d = r.snapGrid[l];
    a - p <= (d - p) * i && (n -= r.params.slidesPerGroup);
  }
  return n = Math.max(n, 0), n = Math.min(n, r.slidesGrid.length - 1), r.slideTo(n, s, e, t);
}
function Bn() {
  const s = this;
  if (s.destroyed) return;
  const {
    params: e,
    slidesEl: t
  } = s, i = e.slidesPerView === "auto" ? s.slidesPerViewDynamic() : e.slidesPerView;
  let r = s.clickedIndex, n;
  const o = s.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (s.animating) return;
    n = parseInt(s.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? r < s.loopedSlides - i / 2 || r > s.slides.length - s.loopedSlides + i / 2 ? (s.loopFix(), r = s.getSlideIndex(U(t, `${o}[data-swiper-slide-index="${n}"]`)[0]), Se(() => {
      s.slideTo(r);
    })) : s.slideTo(r) : r > s.slides.length - i ? (s.loopFix(), r = s.getSlideIndex(U(t, `${o}[data-swiper-slide-index="${n}"]`)[0]), Se(() => {
      s.slideTo(r);
    })) : s.slideTo(r);
  } else
    s.slideTo(r);
}
var Rn = {
  slideTo: zn,
  slideToLoop: In,
  slideNext: kn,
  slidePrev: _n,
  slideReset: On,
  slideToClosest: Dn,
  slideToClickedSlide: Bn
};
function Nn(s) {
  const e = this, {
    params: t,
    slidesEl: i
  } = e;
  if (!t.loop || e.virtual && e.params.virtual.enabled) return;
  const r = () => {
    U(i, `.${t.slideClass}, swiper-slide`).forEach((f, w) => {
      f.setAttribute("data-swiper-slide-index", w);
    });
  }, n = e.grid && t.grid && t.grid.rows > 1, o = t.slidesPerGroup * (n ? t.grid.rows : 1), l = e.slides.length % o !== 0, a = n && e.slides.length % t.grid.rows !== 0, p = (d) => {
    for (let f = 0; f < d; f += 1) {
      const w = e.isElement ? Z("swiper-slide", [t.slideBlankClass]) : Z("div", [t.slideClass, t.slideBlankClass]);
      e.slidesEl.append(w);
    }
  };
  if (l) {
    if (t.loopAddBlankSlides) {
      const d = o - e.slides.length % o;
      p(d), e.recalcSlides(), e.updateSlides();
    } else
      pt("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    r();
  } else if (a) {
    if (t.loopAddBlankSlides) {
      const d = t.grid.rows - e.slides.length % t.grid.rows;
      p(d), e.recalcSlides(), e.updateSlides();
    } else
      pt("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    r();
  } else
    r();
  e.loopFix({
    slideRealIndex: s,
    direction: t.centeredSlides ? void 0 : "next"
  });
}
function Hn(s) {
  let {
    slideRealIndex: e,
    slideTo: t = !0,
    direction: i,
    setTranslate: r,
    activeSlideIndex: n,
    byController: o,
    byMousewheel: l
  } = s === void 0 ? {} : s;
  const a = this;
  if (!a.params.loop) return;
  a.emit("beforeLoopFix");
  const {
    slides: p,
    allowSlidePrev: d,
    allowSlideNext: f,
    slidesEl: w,
    params: h
  } = a, {
    centeredSlides: c
  } = h;
  if (a.allowSlidePrev = !0, a.allowSlideNext = !0, a.virtual && h.virtual.enabled) {
    t && (!h.centeredSlides && a.snapIndex === 0 ? a.slideTo(a.virtual.slides.length, 0, !1, !0) : h.centeredSlides && a.snapIndex < h.slidesPerView ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0) : a.snapIndex === a.snapGrid.length - 1 && a.slideTo(a.virtual.slidesBefore, 0, !1, !0)), a.allowSlidePrev = d, a.allowSlideNext = f, a.emit("loopFix");
    return;
  }
  let u = h.slidesPerView;
  u === "auto" ? u = a.slidesPerViewDynamic() : (u = Math.ceil(parseFloat(h.slidesPerView, 10)), c && u % 2 === 0 && (u = u + 1));
  const b = h.slidesPerGroupAuto ? u : h.slidesPerGroup;
  let v = b;
  v % b !== 0 && (v += b - v % b), v += h.loopAdditionalSlides, a.loopedSlides = v;
  const g = a.grid && h.grid && h.grid.rows > 1;
  p.length < u + v ? pt("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : g && h.grid.fill === "row" && pt("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const m = [], y = [];
  let $ = a.activeIndex;
  typeof n > "u" ? n = a.getSlideIndex(p.find((E) => E.classList.contains(h.slideActiveClass))) : $ = n;
  const L = i === "next" || !i, A = i === "prev" || !i;
  let C = 0, S = 0;
  const x = g ? Math.ceil(p.length / h.grid.rows) : p.length, T = (g ? p[n].column : n) + (c && typeof r > "u" ? -u / 2 + 0.5 : 0);
  if (T < v) {
    C = Math.max(v - T, b);
    for (let E = 0; E < v - T; E += 1) {
      const M = E - Math.floor(E / x) * x;
      if (g) {
        const k = x - M - 1;
        for (let R = p.length - 1; R >= 0; R -= 1)
          p[R].column === k && m.push(R);
      } else
        m.push(x - M - 1);
    }
  } else if (T + u > x - v) {
    S = Math.max(T - (x - v * 2), b);
    for (let E = 0; E < S; E += 1) {
      const M = E - Math.floor(E / x) * x;
      g ? p.forEach((k, R) => {
        k.column === M && y.push(R);
      }) : y.push(M);
    }
  }
  if (a.__preventObserver__ = !0, requestAnimationFrame(() => {
    a.__preventObserver__ = !1;
  }), A && m.forEach((E) => {
    p[E].swiperLoopMoveDOM = !0, w.prepend(p[E]), p[E].swiperLoopMoveDOM = !1;
  }), L && y.forEach((E) => {
    p[E].swiperLoopMoveDOM = !0, w.append(p[E]), p[E].swiperLoopMoveDOM = !1;
  }), a.recalcSlides(), h.slidesPerView === "auto" ? a.updateSlides() : g && (m.length > 0 && A || y.length > 0 && L) && a.slides.forEach((E, M) => {
    a.grid.updateSlide(M, E, a.slides);
  }), h.watchSlidesProgress && a.updateSlidesOffset(), t) {
    if (m.length > 0 && A) {
      if (typeof e > "u") {
        const E = a.slidesGrid[$], k = a.slidesGrid[$ + C] - E;
        l ? a.setTranslate(a.translate - k) : (a.slideTo($ + Math.ceil(C), 0, !1, !0), r && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - k, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - k));
      } else if (r) {
        const E = g ? m.length / h.grid.rows : m.length;
        a.slideTo(a.activeIndex + E, 0, !1, !0), a.touchEventsData.currentTranslate = a.translate;
      }
    } else if (y.length > 0 && L)
      if (typeof e > "u") {
        const E = a.slidesGrid[$], k = a.slidesGrid[$ - S] - E;
        l ? a.setTranslate(a.translate - k) : (a.slideTo($ - S, 0, !1, !0), r && (a.touchEventsData.startTranslate = a.touchEventsData.startTranslate - k, a.touchEventsData.currentTranslate = a.touchEventsData.currentTranslate - k));
      } else {
        const E = g ? y.length / h.grid.rows : y.length;
        a.slideTo(a.activeIndex - E, 0, !1, !0);
      }
  }
  if (a.allowSlidePrev = d, a.allowSlideNext = f, a.controller && a.controller.control && !o) {
    const E = {
      slideRealIndex: e,
      direction: i,
      setTranslate: r,
      activeSlideIndex: n,
      byController: !0
    };
    Array.isArray(a.controller.control) ? a.controller.control.forEach((M) => {
      !M.destroyed && M.params.loop && M.loopFix({
        ...E,
        slideTo: M.params.slidesPerView === h.slidesPerView ? t : !1
      });
    }) : a.controller.control instanceof a.constructor && a.controller.control.params.loop && a.controller.control.loopFix({
      ...E,
      slideTo: a.controller.control.params.slidesPerView === h.slidesPerView ? t : !1
    });
  }
  a.emit("loopFix");
}
function qn() {
  const s = this, {
    params: e,
    slidesEl: t
  } = s;
  if (!e.loop || !t || s.virtual && s.params.virtual.enabled) return;
  s.recalcSlides();
  const i = [];
  s.slides.forEach((r) => {
    const n = typeof r.swiperSlideIndex > "u" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
    i[n] = r;
  }), s.slides.forEach((r) => {
    r.removeAttribute("data-swiper-slide-index");
  }), i.forEach((r) => {
    t.append(r);
  }), s.recalcSlides(), s.slideTo(s.realIndex, 0);
}
var Gn = {
  loopCreate: Nn,
  loopFix: Hn,
  loopDestroy: qn
};
function Fn(s) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = s ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  });
}
function Vn() {
  const s = this;
  s.params.watchOverflow && s.isLocked || s.params.cssMode || (s.isElement && (s.__preventObserver__ = !0), s[s.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", s.isElement && requestAnimationFrame(() => {
    s.__preventObserver__ = !1;
  }));
}
var jn = {
  setGrabCursor: Fn,
  unsetGrabCursor: Vn
};
function Yn(s, e) {
  e === void 0 && (e = this);
  function t(i) {
    if (!i || i === X() || i === F()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const r = i.closest(s);
    return !r && !i.getRootNode ? null : r || t(i.getRootNode().host);
  }
  return t(e);
}
function us(s, e, t) {
  const i = F(), {
    params: r
  } = s, n = r.edgeSwipeDetection, o = r.edgeSwipeThreshold;
  return n && (t <= o || t >= i.innerWidth - o) ? n === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
}
function Xn(s) {
  const e = this, t = X();
  let i = s;
  i.originalEvent && (i = i.originalEvent);
  const r = e.touchEventsData;
  if (i.type === "pointerdown") {
    if (r.pointerId !== null && r.pointerId !== i.pointerId)
      return;
    r.pointerId = i.pointerId;
  } else i.type === "touchstart" && i.targetTouches.length === 1 && (r.touchId = i.targetTouches[0].identifier);
  if (i.type === "touchstart") {
    us(e, i, i.targetTouches[0].pageX);
    return;
  }
  const {
    params: n,
    touches: o,
    enabled: l
  } = e;
  if (!l || !n.simulateTouch && i.pointerType === "mouse" || e.animating && n.preventInteractionOnTransition)
    return;
  !e.animating && n.cssMode && n.loop && e.loopFix();
  let a = i.target;
  if (n.touchEventsTarget === "wrapper" && !en(a, e.wrapperEl) || "which" in i && i.which === 3 || "button" in i && i.button > 0 || r.isTouched && r.isMoved) return;
  const p = !!n.noSwipingClass && n.noSwipingClass !== "", d = i.composedPath ? i.composedPath() : i.path;
  p && i.target && i.target.shadowRoot && d && (a = d[0]);
  const f = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`, w = !!(i.target && i.target.shadowRoot);
  if (n.noSwiping && (w ? Yn(f, a) : a.closest(f))) {
    e.allowClick = !0;
    return;
  }
  if (n.swipeHandler && !a.closest(n.swipeHandler))
    return;
  o.currentX = i.pageX, o.currentY = i.pageY;
  const h = o.currentX, c = o.currentY;
  if (!us(e, i, h))
    return;
  Object.assign(r, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), o.startX = h, o.startY = c, r.touchStartTime = te(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, n.threshold > 0 && (r.allowThresholdMove = !1);
  let u = !0;
  a.matches(r.focusableElements) && (u = !1, a.nodeName === "SELECT" && (r.isTouched = !1)), t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== a && (i.pointerType === "mouse" || i.pointerType !== "mouse" && !a.matches(r.focusableElements)) && t.activeElement.blur();
  const b = u && e.allowTouchMove && n.touchStartPreventDefault;
  (n.touchStartForcePreventDefault || b) && !a.isContentEditable && i.preventDefault(), n.freeMode && n.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", i);
}
function Un(s) {
  const e = X(), t = this, i = t.touchEventsData, {
    params: r,
    touches: n,
    rtlTranslate: o,
    enabled: l
  } = t;
  if (!l || !r.simulateTouch && s.pointerType === "mouse") return;
  let a = s;
  if (a.originalEvent && (a = a.originalEvent), a.type === "pointermove" && (i.touchId !== null || a.pointerId !== i.pointerId))
    return;
  let p;
  if (a.type === "touchmove") {
    if (p = [...a.changedTouches].find(($) => $.identifier === i.touchId), !p || p.identifier !== i.touchId) return;
  } else
    p = a;
  if (!i.isTouched) {
    i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", a);
    return;
  }
  const d = p.pageX, f = p.pageY;
  if (a.preventedByNestedSwiper) {
    n.startX = d, n.startY = f;
    return;
  }
  if (!t.allowTouchMove) {
    a.target.matches(i.focusableElements) || (t.allowClick = !1), i.isTouched && (Object.assign(n, {
      startX: d,
      startY: f,
      currentX: d,
      currentY: f
    }), i.touchStartTime = te());
    return;
  }
  if (r.touchReleaseOnEdges && !r.loop) {
    if (t.isVertical()) {
      if (f < n.startY && t.translate <= t.maxTranslate() || f > n.startY && t.translate >= t.minTranslate()) {
        i.isTouched = !1, i.isMoved = !1;
        return;
      }
    } else if (d < n.startX && t.translate <= t.maxTranslate() || d > n.startX && t.translate >= t.minTranslate())
      return;
  }
  if (e.activeElement && e.activeElement.matches(i.focusableElements) && e.activeElement !== a.target && a.pointerType !== "mouse" && e.activeElement.blur(), e.activeElement && a.target === e.activeElement && a.target.matches(i.focusableElements)) {
    i.isMoved = !0, t.allowClick = !1;
    return;
  }
  i.allowTouchCallbacks && t.emit("touchMove", a), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = d, n.currentY = f;
  const w = n.currentX - n.startX, h = n.currentY - n.startY;
  if (t.params.threshold && Math.sqrt(w ** 2 + h ** 2) < t.params.threshold) return;
  if (typeof i.isScrolling > "u") {
    let $;
    t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : w * w + h * h >= 25 && ($ = Math.atan2(Math.abs(h), Math.abs(w)) * 180 / Math.PI, i.isScrolling = t.isHorizontal() ? $ > r.touchAngle : 90 - $ > r.touchAngle);
  }
  if (i.isScrolling && t.emit("touchMoveOpposite", a), typeof i.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (i.startMoving = !0), i.isScrolling || a.type === "touchmove" && i.preventTouchMoveFromPointerMove) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving)
    return;
  t.allowClick = !1, !r.cssMode && a.cancelable && a.preventDefault(), r.touchMoveStopPropagation && !r.nested && a.stopPropagation();
  let c = t.isHorizontal() ? w : h, u = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
  r.oneWayMovement && (c = Math.abs(c) * (o ? 1 : -1), u = Math.abs(u) * (o ? 1 : -1)), n.diff = c, c *= r.touchRatio, o && (c = -c, u = -u);
  const b = t.touchesDirection;
  t.swipeDirection = c > 0 ? "prev" : "next", t.touchesDirection = u > 0 ? "prev" : "next";
  const v = t.params.loop && !r.cssMode, g = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
  if (!i.isMoved) {
    if (v && g && t.loopFix({
      direction: t.swipeDirection
    }), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
      const $ = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      t.wrapperEl.dispatchEvent($);
    }
    i.allowMomentumBounce = !1, r.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", a);
  }
  if ((/* @__PURE__ */ new Date()).getTime(), r._loopSwapReset !== !1 && i.isMoved && i.allowThresholdMove && b !== t.touchesDirection && v && g && Math.abs(c) >= 1) {
    Object.assign(n, {
      startX: d,
      startY: f,
      currentX: d,
      currentY: f,
      startTranslate: i.currentTranslate
    }), i.loopSwapReset = !0, i.startTranslate = i.currentTranslate;
    return;
  }
  t.emit("sliderMove", a), i.isMoved = !0, i.currentTranslate = c + i.startTranslate;
  let m = !0, y = r.resistanceRatio;
  if (r.touchReleaseOnEdges && (y = 0), c > 0 ? (v && g && i.allowThresholdMove && i.currentTranslate > (r.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] - (r.slidesPerView !== "auto" && t.slides.length - r.slidesPerView >= 2 ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween : 0) - t.params.spaceBetween : t.minTranslate()) && t.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), i.currentTranslate > t.minTranslate() && (m = !1, r.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + c) ** y))) : c < 0 && (v && g && i.allowThresholdMove && i.currentTranslate < (r.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween + (r.slidesPerView !== "auto" && t.slides.length - r.slidesPerView >= 2 ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween : 0) : t.maxTranslate()) && t.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: t.slides.length - (r.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
  }), i.currentTranslate < t.maxTranslate() && (m = !1, r.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - c) ** y))), m && (a.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (i.currentTranslate = i.startTranslate), r.threshold > 0)
    if (Math.abs(c) > r.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
  !r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && t.freeMode || r.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), r.freeMode && r.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate));
}
function Wn(s) {
  const e = this, t = e.touchEventsData;
  let i = s;
  i.originalEvent && (i = i.originalEvent);
  let r;
  if (i.type === "touchend" || i.type === "touchcancel") {
    if (r = [...i.changedTouches].find(($) => $.identifier === t.touchId), !r || r.identifier !== t.touchId) return;
  } else {
    if (t.touchId !== null || i.pointerId !== t.pointerId) return;
    r = i;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (e.browser.isSafari || e.browser.isWebView)))
    return;
  t.pointerId = null, t.touchId = null;
  const {
    params: o,
    touches: l,
    rtlTranslate: a,
    slidesGrid: p,
    enabled: d
  } = e;
  if (!d || !o.simulateTouch && i.pointerType === "mouse") return;
  if (t.allowTouchCallbacks && e.emit("touchEnd", i), t.allowTouchCallbacks = !1, !t.isTouched) {
    t.isMoved && o.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
    return;
  }
  o.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
  const f = te(), w = f - t.touchStartTime;
  if (e.allowClick) {
    const $ = i.path || i.composedPath && i.composedPath();
    e.updateClickedSlide($ && $[0] || i.target, $), e.emit("tap click", i), w < 300 && f - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", i);
  }
  if (t.lastClickTime = te(), Se(() => {
    e.destroyed || (e.allowClick = !0);
  }), !t.isTouched || !t.isMoved || !e.swipeDirection || l.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    return;
  }
  t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
  let h;
  if (o.followFinger ? h = a ? e.translate : -e.translate : h = -t.currentTranslate, o.cssMode)
    return;
  if (o.freeMode && o.freeMode.enabled) {
    e.freeMode.onTouchEnd({
      currentPos: h
    });
    return;
  }
  const c = h >= -e.maxTranslate() && !e.params.loop;
  let u = 0, b = e.slidesSizesGrid[0];
  for (let $ = 0; $ < p.length; $ += $ < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup) {
    const L = $ < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof p[$ + L] < "u" ? (c || h >= p[$] && h < p[$ + L]) && (u = $, b = p[$ + L] - p[$]) : (c || h >= p[$]) && (u = $, b = p[p.length - 1] - p[p.length - 2]);
  }
  let v = null, g = null;
  o.rewind && (e.isBeginning ? g = o.virtual && o.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (v = 0));
  const m = (h - p[u]) / b, y = u < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (w > o.longSwipesMs) {
    if (!o.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" && (m >= o.longSwipesRatio ? e.slideTo(o.rewind && e.isEnd ? v : u + y) : e.slideTo(u)), e.swipeDirection === "prev" && (m > 1 - o.longSwipesRatio ? e.slideTo(u + y) : g !== null && m < 0 && Math.abs(m) > o.longSwipesRatio ? e.slideTo(g) : e.slideTo(u));
  } else {
    if (!o.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation && (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl) ? i.target === e.navigation.nextEl ? e.slideTo(u + y) : e.slideTo(u) : (e.swipeDirection === "next" && e.slideTo(v !== null ? v : u + y), e.swipeDirection === "prev" && e.slideTo(g !== null ? g : u));
  }
}
function ps() {
  const s = this, {
    params: e,
    el: t
  } = s;
  if (t && t.offsetWidth === 0) return;
  e.breakpoints && s.setBreakpoint();
  const {
    allowSlideNext: i,
    allowSlidePrev: r,
    snapGrid: n
  } = s, o = s.virtual && s.params.virtual.enabled;
  s.allowSlideNext = !0, s.allowSlidePrev = !0, s.updateSize(), s.updateSlides(), s.updateSlidesClasses();
  const l = o && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) && s.isEnd && !s.isBeginning && !s.params.centeredSlides && !l ? s.slideTo(s.slides.length - 1, 0, !1, !0) : s.params.loop && !o ? s.slideToLoop(s.realIndex, 0, !1, !0) : s.slideTo(s.activeIndex, 0, !1, !0), s.autoplay && s.autoplay.running && s.autoplay.paused && (clearTimeout(s.autoplay.resizeTimeout), s.autoplay.resizeTimeout = setTimeout(() => {
    s.autoplay && s.autoplay.running && s.autoplay.paused && s.autoplay.resume();
  }, 500)), s.allowSlidePrev = r, s.allowSlideNext = i, s.params.watchOverflow && n !== s.snapGrid && s.checkOverflow();
}
function Kn(s) {
  const e = this;
  e.enabled && (e.allowClick || (e.params.preventClicks && s.preventDefault(), e.params.preventClicksPropagation && e.animating && (s.stopPropagation(), s.stopImmediatePropagation())));
}
function Jn() {
  const s = this, {
    wrapperEl: e,
    rtlTranslate: t,
    enabled: i
  } = s;
  if (!i) return;
  s.previousTranslate = s.translate, s.isHorizontal() ? s.translate = -e.scrollLeft : s.translate = -e.scrollTop, s.translate === 0 && (s.translate = 0), s.updateActiveIndex(), s.updateSlidesClasses();
  let r;
  const n = s.maxTranslate() - s.minTranslate();
  n === 0 ? r = 0 : r = (s.translate - s.minTranslate()) / n, r !== s.progress && s.updateProgress(t ? -s.translate : s.translate), s.emit("setTranslate", s.translate, !1);
}
function Qn(s) {
  const e = this;
  at(e, s.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
}
function Zn() {
  const s = this;
  s.documentTouchHandlerProceeded || (s.documentTouchHandlerProceeded = !0, s.params.touchReleaseOnEdges && (s.el.style.touchAction = "auto"));
}
const Hs = (s, e) => {
  const t = X(), {
    params: i,
    el: r,
    wrapperEl: n,
    device: o
  } = s, l = !!i.nested, a = e === "on" ? "addEventListener" : "removeEventListener", p = e;
  !r || typeof r == "string" || (t[a]("touchstart", s.onDocumentTouchStart, {
    passive: !1,
    capture: l
  }), r[a]("touchstart", s.onTouchStart, {
    passive: !1
  }), r[a]("pointerdown", s.onTouchStart, {
    passive: !1
  }), t[a]("touchmove", s.onTouchMove, {
    passive: !1,
    capture: l
  }), t[a]("pointermove", s.onTouchMove, {
    passive: !1,
    capture: l
  }), t[a]("touchend", s.onTouchEnd, {
    passive: !0
  }), t[a]("pointerup", s.onTouchEnd, {
    passive: !0
  }), t[a]("pointercancel", s.onTouchEnd, {
    passive: !0
  }), t[a]("touchcancel", s.onTouchEnd, {
    passive: !0
  }), t[a]("pointerout", s.onTouchEnd, {
    passive: !0
  }), t[a]("pointerleave", s.onTouchEnd, {
    passive: !0
  }), t[a]("contextmenu", s.onTouchEnd, {
    passive: !0
  }), (i.preventClicks || i.preventClicksPropagation) && r[a]("click", s.onClick, !0), i.cssMode && n[a]("scroll", s.onScroll), i.updateOnWindowResize ? s[p](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ps, !0) : s[p]("observerUpdate", ps, !0), r[a]("load", s.onLoad, {
    capture: !0
  }));
};
function ea() {
  const s = this, {
    params: e
  } = s;
  s.onTouchStart = Xn.bind(s), s.onTouchMove = Un.bind(s), s.onTouchEnd = Wn.bind(s), s.onDocumentTouchStart = Zn.bind(s), e.cssMode && (s.onScroll = Jn.bind(s)), s.onClick = Kn.bind(s), s.onLoad = Qn.bind(s), Hs(s, "on");
}
function ta() {
  Hs(this, "off");
}
var ia = {
  attachEvents: ea,
  detachEvents: ta
};
const fs = (s, e) => s.grid && e.grid && e.grid.rows > 1;
function sa() {
  const s = this, {
    realIndex: e,
    initialized: t,
    params: i,
    el: r
  } = s, n = i.breakpoints;
  if (!n || n && Object.keys(n).length === 0) return;
  const o = X(), l = i.breakpointsBase === "window" || !i.breakpointsBase ? i.breakpointsBase : "container", a = ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase ? s.el : o.querySelector(i.breakpointsBase), p = s.getBreakpoint(n, l, a);
  if (!p || s.currentBreakpoint === p) return;
  const f = (p in n ? n[p] : void 0) || s.originalParams, w = fs(s, i), h = fs(s, f), c = s.params.grabCursor, u = f.grabCursor, b = i.enabled;
  w && !h ? (r.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), s.emitContainerClasses()) : !w && h && (r.classList.add(`${i.containerModifierClass}grid`), (f.grid.fill && f.grid.fill === "column" || !f.grid.fill && i.grid.fill === "column") && r.classList.add(`${i.containerModifierClass}grid-column`), s.emitContainerClasses()), c && !u ? s.unsetGrabCursor() : !c && u && s.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((L) => {
    if (typeof f[L] > "u") return;
    const A = i[L] && i[L].enabled, C = f[L] && f[L].enabled;
    A && !C && s[L].disable(), !A && C && s[L].enable();
  });
  const v = f.direction && f.direction !== i.direction, g = i.loop && (f.slidesPerView !== i.slidesPerView || v), m = i.loop;
  v && t && s.changeDirection(), Q(s.params, f);
  const y = s.params.enabled, $ = s.params.loop;
  Object.assign(s, {
    allowTouchMove: s.params.allowTouchMove,
    allowSlideNext: s.params.allowSlideNext,
    allowSlidePrev: s.params.allowSlidePrev
  }), b && !y ? s.disable() : !b && y && s.enable(), s.currentBreakpoint = p, s.emit("_beforeBreakpoint", f), t && (g ? (s.loopDestroy(), s.loopCreate(e), s.updateSlides()) : !m && $ ? (s.loopCreate(e), s.updateSlides()) : m && !$ && s.loopDestroy()), s.emit("breakpoint", f);
}
function ra(s, e, t) {
  if (e === void 0 && (e = "window"), !s || e === "container" && !t) return;
  let i = !1;
  const r = F(), n = e === "window" ? r.innerHeight : t.clientHeight, o = Object.keys(s).map((l) => {
    if (typeof l == "string" && l.indexOf("@") === 0) {
      const a = parseFloat(l.substr(1));
      return {
        value: n * a,
        point: l
      };
    }
    return {
      value: l,
      point: l
    };
  });
  o.sort((l, a) => parseInt(l.value, 10) - parseInt(a.value, 10));
  for (let l = 0; l < o.length; l += 1) {
    const {
      point: a,
      value: p
    } = o[l];
    e === "window" ? r.matchMedia(`(min-width: ${p}px)`).matches && (i = a) : p <= t.clientWidth && (i = a);
  }
  return i || "max";
}
var na = {
  setBreakpoint: sa,
  getBreakpoint: ra
};
function aa(s, e) {
  const t = [];
  return s.forEach((i) => {
    typeof i == "object" ? Object.keys(i).forEach((r) => {
      i[r] && t.push(e + r);
    }) : typeof i == "string" && t.push(e + i);
  }), t;
}
function oa() {
  const s = this, {
    classNames: e,
    params: t,
    rtl: i,
    el: r,
    device: n
  } = s, o = aa(["initialized", t.direction, {
    "free-mode": s.params.freeMode && t.freeMode.enabled
  }, {
    autoheight: t.autoHeight
  }, {
    rtl: i
  }, {
    grid: t.grid && t.grid.rows > 1
  }, {
    "grid-column": t.grid && t.grid.rows > 1 && t.grid.fill === "column"
  }, {
    android: n.android
  }, {
    ios: n.ios
  }, {
    "css-mode": t.cssMode
  }, {
    centered: t.cssMode && t.centeredSlides
  }, {
    "watch-progress": t.watchSlidesProgress
  }], t.containerModifierClass);
  e.push(...o), r.classList.add(...e), s.emitContainerClasses();
}
function la() {
  const s = this, {
    el: e,
    classNames: t
  } = s;
  !e || typeof e == "string" || (e.classList.remove(...t), s.emitContainerClasses());
}
var da = {
  addClasses: oa,
  removeClasses: la
};
function ca() {
  const s = this, {
    isLocked: e,
    params: t
  } = s, {
    slidesOffsetBefore: i
  } = t;
  if (i) {
    const r = s.slides.length - 1, n = s.slidesGrid[r] + s.slidesSizesGrid[r] + i * 2;
    s.isLocked = s.size > n;
  } else
    s.isLocked = s.snapGrid.length === 1;
  t.allowSlideNext === !0 && (s.allowSlideNext = !s.isLocked), t.allowSlidePrev === !0 && (s.allowSlidePrev = !s.isLocked), e && e !== s.isLocked && (s.isEnd = !1), e !== s.isLocked && s.emit(s.isLocked ? "lock" : "unlock");
}
var ua = {
  checkOverflow: ca
}, di = {
  init: !0,
  direction: "horizontal",
  oneWayMovement: !1,
  swiperElementNodeName: "SWIPER-CONTAINER",
  touchEventsTarget: "wrapper",
  initialSlide: 0,
  speed: 300,
  cssMode: !1,
  updateOnWindowResize: !0,
  resizeObserver: !0,
  nested: !1,
  createElements: !1,
  eventsPrefix: "swiper",
  enabled: !0,
  focusableElements: "input, select, option, textarea, button, video, label",
  // Overrides
  width: null,
  height: null,
  //
  preventInteractionOnTransition: !1,
  // ssr
  userAgent: null,
  url: null,
  // To support iOS's swipe-to-go-back gesture (when being used in-app).
  edgeSwipeDetection: !1,
  edgeSwipeThreshold: 20,
  // Autoheight
  autoHeight: !1,
  // Set wrapper width
  setWrapperSize: !1,
  // Virtual Translate
  virtualTranslate: !1,
  // Effects
  effect: "slide",
  // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
  // Breakpoints
  breakpoints: void 0,
  breakpointsBase: "window",
  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerGroup: 1,
  slidesPerGroupSkip: 0,
  slidesPerGroupAuto: !1,
  centeredSlides: !1,
  centeredSlidesBounds: !1,
  slidesOffsetBefore: 0,
  // in px
  slidesOffsetAfter: 0,
  // in px
  normalizeSlideIndex: !0,
  centerInsufficientSlides: !1,
  // Disable swiper and hide navigation when container not overflow
  watchOverflow: !0,
  // Round length
  roundLengths: !1,
  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: !0,
  shortSwipes: !0,
  longSwipes: !0,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: !0,
  allowTouchMove: !0,
  threshold: 5,
  touchMoveStopPropagation: !1,
  touchStartPreventDefault: !0,
  touchStartForcePreventDefault: !1,
  touchReleaseOnEdges: !1,
  // Unique Navigation Elements
  uniqueNavElements: !0,
  // Resistance
  resistance: !0,
  resistanceRatio: 0.85,
  // Progress
  watchSlidesProgress: !1,
  // Cursor
  grabCursor: !1,
  // Clicks
  preventClicks: !0,
  preventClicksPropagation: !0,
  slideToClickedSlide: !1,
  // loop
  loop: !1,
  loopAddBlankSlides: !0,
  loopAdditionalSlides: 0,
  loopPreventsSliding: !0,
  // rewind
  rewind: !1,
  // Swiping/no swiping
  allowSlidePrev: !0,
  allowSlideNext: !0,
  swipeHandler: null,
  // '.swipe-handler',
  noSwiping: !0,
  noSwipingClass: "swiper-no-swiping",
  noSwipingSelector: null,
  // Passive Listeners
  passiveListeners: !0,
  maxBackfaceHiddenSlides: 10,
  // NS
  containerModifierClass: "swiper-",
  // NEW
  slideClass: "swiper-slide",
  slideBlankClass: "swiper-slide-blank",
  slideActiveClass: "swiper-slide-active",
  slideVisibleClass: "swiper-slide-visible",
  slideFullyVisibleClass: "swiper-slide-fully-visible",
  slideNextClass: "swiper-slide-next",
  slidePrevClass: "swiper-slide-prev",
  wrapperClass: "swiper-wrapper",
  lazyPreloaderClass: "swiper-lazy-preloader",
  lazyPreloadPrevNext: 0,
  // Callbacks
  runCallbacksOnInit: !0,
  // Internals
  _emitClasses: !1
};
function pa(s, e) {
  return function(i) {
    i === void 0 && (i = {});
    const r = Object.keys(i)[0], n = i[r];
    if (typeof n != "object" || n === null) {
      Q(e, i);
      return;
    }
    if (s[r] === !0 && (s[r] = {
      enabled: !0
    }), r === "navigation" && s[r] && s[r].enabled && !s[r].prevEl && !s[r].nextEl && (s[r].auto = !0), ["pagination", "scrollbar"].indexOf(r) >= 0 && s[r] && s[r].enabled && !s[r].el && (s[r].auto = !0), !(r in s && "enabled" in n)) {
      Q(e, i);
      return;
    }
    typeof s[r] == "object" && !("enabled" in s[r]) && (s[r].enabled = !0), s[r] || (s[r] = {
      enabled: !1
    }), Q(e, i);
  };
}
const si = {
  eventsEmitter: dn,
  update: yn,
  translate: Cn,
  transition: Ln,
  slide: Rn,
  loop: Gn,
  grabCursor: jn,
  events: ia,
  breakpoints: na,
  checkOverflow: ua,
  classes: da
}, ri = {};
class J {
  constructor() {
    let e, t;
    for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
      r[n] = arguments[n];
    r.length === 1 && r[0].constructor && Object.prototype.toString.call(r[0]).slice(8, -1) === "Object" ? t = r[0] : [e, t] = r, t || (t = {}), t = Q({}, t), e && !t.el && (t.el = e);
    const o = X();
    if (t.el && typeof t.el == "string" && o.querySelectorAll(t.el).length > 1) {
      const d = [];
      return o.querySelectorAll(t.el).forEach((f) => {
        const w = Q({}, t, {
          el: f
        });
        d.push(new J(w));
      }), d;
    }
    const l = this;
    l.__swiper__ = !0, l.support = Ds(), l.device = Bs({
      userAgent: t.userAgent
    }), l.browser = Rs(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
    const a = {};
    l.modules.forEach((d) => {
      d({
        params: t,
        swiper: l,
        extendParams: pa(t, a),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l)
      });
    });
    const p = Q({}, di, a);
    return l.params = Q({}, p, ri, t), l.originalParams = Q({}, l.params), l.passedParams = Q({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((d) => {
      l.on(d, l.params.on[d]);
    }), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
      enabled: l.params.enabled,
      el: e,
      // Classes
      classNames: [],
      // Slides
      slides: [],
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],
      // isDirection
      isHorizontal() {
        return l.params.direction === "horizontal";
      },
      isVertical() {
        return l.params.direction === "vertical";
      },
      // Indexes
      activeIndex: 0,
      realIndex: 0,
      //
      isBeginning: !0,
      isEnd: !1,
      // Props
      translate: 0,
      previousTranslate: 0,
      progress: 0,
      velocity: 0,
      animating: !1,
      cssOverflowAdjustment() {
        return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
      },
      // Locks
      allowSlideNext: l.params.allowSlideNext,
      allowSlidePrev: l.params.allowSlidePrev,
      // Touch Events
      touchEventsData: {
        isTouched: void 0,
        isMoved: void 0,
        allowTouchCallbacks: void 0,
        touchStartTime: void 0,
        isScrolling: void 0,
        currentTranslate: void 0,
        startTranslate: void 0,
        allowThresholdMove: void 0,
        // Form elements to match
        focusableElements: l.params.focusableElements,
        // Last click time
        lastClickTime: 0,
        clickTimeout: void 0,
        // Velocities
        velocities: [],
        allowMomentumBounce: void 0,
        startMoving: void 0,
        pointerId: null,
        touchId: null
      },
      // Clicks
      allowClick: !0,
      // Touches
      allowTouchMove: l.params.allowTouchMove,
      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0
      },
      // Images
      imagesToLoad: [],
      imagesLoaded: 0
    }), l.emit("_swiper"), l.params.init && l.init(), l;
  }
  getDirectionLabel(e) {
    return this.isHorizontal() ? e : {
      width: "height",
      "margin-top": "margin-left",
      "margin-bottom ": "margin-right",
      "margin-left": "margin-top",
      "margin-right": "margin-bottom",
      "padding-left": "padding-top",
      "padding-right": "padding-bottom",
      marginRight: "marginBottom"
    }[e];
  }
  getSlideIndex(e) {
    const {
      slidesEl: t,
      params: i
    } = this, r = U(t, `.${i.slideClass}, swiper-slide`), n = Ke(r[0]);
    return Ke(e) - n;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.find((t) => t.getAttribute("data-swiper-slide-index") * 1 === e));
  }
  recalcSlides() {
    const e = this, {
      slidesEl: t,
      params: i
    } = e;
    e.slides = U(t, `.${i.slideClass}, swiper-slide`);
  }
  enable() {
    const e = this;
    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
  }
  disable() {
    const e = this;
    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
  }
  setProgress(e, t) {
    const i = this;
    e = Math.min(Math.max(e, 0), 1);
    const r = i.minTranslate(), o = (i.maxTranslate() - r) * e + r;
    i.translateTo(o, typeof t > "u" ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses();
  }
  emitContainerClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = e.el.className.split(" ").filter((i) => i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
    e.emit("_containerClasses", t.join(" "));
  }
  getSlideClasses(e) {
    const t = this;
    return t.destroyed ? "" : e.className.split(" ").filter((i) => i.indexOf("swiper-slide") === 0 || i.indexOf(t.params.slideClass) === 0).join(" ");
  }
  emitSlidesClasses() {
    const e = this;
    if (!e.params._emitClasses || !e.el) return;
    const t = [];
    e.slides.forEach((i) => {
      const r = e.getSlideClasses(i);
      t.push({
        slideEl: i,
        classNames: r
      }), e.emit("_slideClass", i, r);
    }), e.emit("_slideClasses", t);
  }
  slidesPerViewDynamic(e, t) {
    e === void 0 && (e = "current"), t === void 0 && (t = !1);
    const i = this, {
      params: r,
      slides: n,
      slidesGrid: o,
      slidesSizesGrid: l,
      size: a,
      activeIndex: p
    } = i;
    let d = 1;
    if (typeof r.slidesPerView == "number") return r.slidesPerView;
    if (r.centeredSlides) {
      let f = n[p] ? Math.ceil(n[p].swiperSlideSize) : 0, w;
      for (let h = p + 1; h < n.length; h += 1)
        n[h] && !w && (f += Math.ceil(n[h].swiperSlideSize), d += 1, f > a && (w = !0));
      for (let h = p - 1; h >= 0; h -= 1)
        n[h] && !w && (f += n[h].swiperSlideSize, d += 1, f > a && (w = !0));
    } else if (e === "current")
      for (let f = p + 1; f < n.length; f += 1)
        (t ? o[f] + l[f] - o[p] < a : o[f] - o[p] < a) && (d += 1);
    else
      for (let f = p - 1; f >= 0; f -= 1)
        o[p] - o[f] < a && (d += 1);
    return d;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const {
      snapGrid: t,
      params: i
    } = e;
    i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
      o.complete && at(e, o);
    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
    function r() {
      const o = e.rtlTranslate ? e.translate * -1 : e.translate, l = Math.min(Math.max(o, e.maxTranslate()), e.minTranslate());
      e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let n;
    if (i.freeMode && i.freeMode.enabled && !i.cssMode)
      r(), i.autoHeight && e.updateAutoHeight();
    else {
      if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
        const o = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
        n = e.slideTo(o.length - 1, 0, !1, !0);
      } else
        n = e.slideTo(e.activeIndex, 0, !1, !0);
      n || r();
    }
    i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, t) {
    t === void 0 && (t = !0);
    const i = this, r = i.params.direction;
    return e || (e = r === "horizontal" ? "vertical" : "horizontal"), e === r || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${r}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach((n) => {
      e === "vertical" ? n.style.width = "" : n.style.height = "";
    }), i.emit("changeDirection"), t && i.update()), i;
  }
  changeLanguageDirection(e) {
    const t = this;
    t.rtl && e === "rtl" || !t.rtl && e === "ltr" || (t.rtl = e === "rtl", t.rtlTranslate = t.params.direction === "horizontal" && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update());
  }
  mount(e) {
    const t = this;
    if (t.mounted) return !0;
    let i = e || t.params.el;
    if (typeof i == "string" && (i = document.querySelector(i)), !i)
      return !1;
    i.swiper = t, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
    const r = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(r()) : U(i, r())[0];
    return !o && t.params.createElements && (o = Z("div", t.params.wrapperClass), i.append(o), U(i, `.${t.params.slideClass}`).forEach((l) => {
      o.append(l);
    })), Object.assign(t, {
      el: i,
      wrapperEl: o,
      slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : o,
      hostEl: t.isElement ? i.parentNode.host : i,
      mounted: !0,
      // RTL
      rtl: i.dir.toLowerCase() === "rtl" || pe(i, "direction") === "rtl",
      rtlTranslate: t.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || pe(i, "direction") === "rtl"),
      wrongRTL: pe(o, "display") === "-webkit-box"
    }), !0;
  }
  init(e) {
    const t = this;
    if (t.initialized || t.mount(e) === !1) return t;
    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
    const r = [...t.el.querySelectorAll('[loading="lazy"]')];
    return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach((n) => {
      n.complete ? at(t, n) : n.addEventListener("load", (o) => {
        at(t, o.target);
      });
    }), li(t), t.initialized = !0, li(t), t.emit("init"), t.emit("afterInit"), t;
  }
  destroy(e, t) {
    e === void 0 && (e = !0), t === void 0 && (t = !0);
    const i = this, {
      params: r,
      el: n,
      wrapperEl: o,
      slides: l
    } = i;
    return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), r.loop && i.loopDestroy(), t && (i.removeClasses(), n && typeof n != "string" && n.removeAttribute("style"), o && o.removeAttribute("style"), l && l.length && l.forEach((a) => {
      a.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index");
    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((a) => {
      i.off(a);
    }), e !== !1 && (i.el && typeof i.el != "string" && (i.el.swiper = null), Kr(i)), i.destroyed = !0), null;
  }
  static extendDefaults(e) {
    Q(ri, e);
  }
  static get extendedDefaults() {
    return ri;
  }
  static get defaults() {
    return di;
  }
  static installModule(e) {
    J.prototype.__modules__ || (J.prototype.__modules__ = []);
    const t = J.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((t) => J.installModule(t)), J) : (J.installModule(e), J);
  }
}
Object.keys(si).forEach((s) => {
  Object.keys(si[s]).forEach((e) => {
    J.prototype[e] = si[s][e];
  });
});
J.use([on, ln]);
function fa(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: r
  } = s;
  t({
    virtual: {
      enabled: !1,
      slides: [],
      cache: !0,
      renderSlide: null,
      renderExternal: null,
      renderExternalUpdate: !0,
      addSlidesBefore: 0,
      addSlidesAfter: 0
    }
  });
  let n;
  const o = X();
  e.virtual = {
    cache: {},
    from: void 0,
    to: void 0,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const l = o.createElement("div");
  function a(c, u) {
    const b = e.params.virtual;
    if (b.cache && e.virtual.cache[u])
      return e.virtual.cache[u];
    let v;
    return b.renderSlide ? (v = b.renderSlide.call(e, c, u), typeof v == "string" && (l.innerHTML = v, v = l.children[0])) : e.isElement ? v = Z("swiper-slide") : v = Z("div", e.params.slideClass), v.setAttribute("data-swiper-slide-index", u), b.renderSlide || (v.innerHTML = c), b.cache && (e.virtual.cache[u] = v), v;
  }
  function p(c, u, b) {
    const {
      slidesPerView: v,
      slidesPerGroup: g,
      centeredSlides: m,
      loop: y,
      initialSlide: $
    } = e.params;
    if (u && !y && $ > 0)
      return;
    const {
      addSlidesBefore: L,
      addSlidesAfter: A
    } = e.params.virtual, {
      from: C,
      to: S,
      slides: x,
      slidesGrid: P,
      offset: T
    } = e.virtual;
    e.params.cssMode || e.updateActiveIndex();
    const E = typeof b > "u" ? e.activeIndex || 0 : b;
    let M;
    e.rtlTranslate ? M = "right" : M = e.isHorizontal() ? "left" : "top";
    let k, R;
    m ? (k = Math.floor(v / 2) + g + A, R = Math.floor(v / 2) + g + L) : (k = v + (g - 1) + A, R = (y ? v : g) + L);
    let z = E - R, I = E + k;
    y || (z = Math.max(z, 0), I = Math.min(I, x.length - 1));
    let B = (e.slidesGrid[z] || 0) - (e.slidesGrid[0] || 0);
    y && E >= R ? (z -= R, m || (B += e.slidesGrid[0])) : y && E < R && (z = -R, m && (B += e.slidesGrid[0])), Object.assign(e.virtual, {
      from: z,
      to: I,
      offset: B,
      slidesGrid: e.slidesGrid,
      slidesBefore: R,
      slidesAfter: k
    });
    function N() {
      e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), r("virtualUpdate");
    }
    if (C === z && S === I && !c) {
      e.slidesGrid !== P && B !== T && e.slides.forEach((_) => {
        _.style[M] = `${B - Math.abs(e.cssOverflowAdjustment())}px`;
      }), e.updateProgress(), r("virtualUpdate");
      return;
    }
    if (e.params.virtual.renderExternal) {
      e.params.virtual.renderExternal.call(e, {
        offset: B,
        from: z,
        to: I,
        slides: function() {
          const D = [];
          for (let H = z; H <= I; H += 1)
            D.push(x[H]);
          return D;
        }()
      }), e.params.virtual.renderExternalUpdate ? N() : r("virtualUpdate");
      return;
    }
    const G = [], j = [], K = (_) => {
      let D = _;
      return _ < 0 ? D = x.length + _ : D >= x.length && (D = D - x.length), D;
    };
    if (c)
      e.slides.filter((_) => _.matches(`.${e.params.slideClass}, swiper-slide`)).forEach((_) => {
        _.remove();
      });
    else
      for (let _ = C; _ <= S; _ += 1)
        if (_ < z || _ > I) {
          const D = K(_);
          e.slides.filter((H) => H.matches(`.${e.params.slideClass}[data-swiper-slide-index="${D}"], swiper-slide[data-swiper-slide-index="${D}"]`)).forEach((H) => {
            H.remove();
          });
        }
    const me = y ? -x.length : 0, O = y ? x.length * 2 : x.length;
    for (let _ = me; _ < O; _ += 1)
      if (_ >= z && _ <= I) {
        const D = K(_);
        typeof S > "u" || c ? j.push(D) : (_ > S && j.push(D), _ < C && G.push(D));
      }
    if (j.forEach((_) => {
      e.slidesEl.append(a(x[_], _));
    }), y)
      for (let _ = G.length - 1; _ >= 0; _ -= 1) {
        const D = G[_];
        e.slidesEl.prepend(a(x[D], D));
      }
    else
      G.sort((_, D) => D - _), G.forEach((_) => {
        e.slidesEl.prepend(a(x[_], _));
      });
    U(e.slidesEl, ".swiper-slide, swiper-slide").forEach((_) => {
      _.style[M] = `${B - Math.abs(e.cssOverflowAdjustment())}px`;
    }), N();
  }
  function d(c) {
    if (typeof c == "object" && "length" in c)
      for (let u = 0; u < c.length; u += 1)
        c[u] && e.virtual.slides.push(c[u]);
    else
      e.virtual.slides.push(c);
    p(!0);
  }
  function f(c) {
    const u = e.activeIndex;
    let b = u + 1, v = 1;
    if (Array.isArray(c)) {
      for (let g = 0; g < c.length; g += 1)
        c[g] && e.virtual.slides.unshift(c[g]);
      b = u + c.length, v = c.length;
    } else
      e.virtual.slides.unshift(c);
    if (e.params.virtual.cache) {
      const g = e.virtual.cache, m = {};
      Object.keys(g).forEach((y) => {
        const $ = g[y], L = $.getAttribute("data-swiper-slide-index");
        L && $.setAttribute("data-swiper-slide-index", parseInt(L, 10) + v), m[parseInt(y, 10) + v] = $;
      }), e.virtual.cache = m;
    }
    p(!0), e.slideTo(b, 0);
  }
  function w(c) {
    if (typeof c > "u" || c === null) return;
    let u = e.activeIndex;
    if (Array.isArray(c))
      for (let b = c.length - 1; b >= 0; b -= 1)
        e.params.virtual.cache && (delete e.virtual.cache[c[b]], Object.keys(e.virtual.cache).forEach((v) => {
          v > c && (e.virtual.cache[v - 1] = e.virtual.cache[v], e.virtual.cache[v - 1].setAttribute("data-swiper-slide-index", v - 1), delete e.virtual.cache[v]);
        })), e.virtual.slides.splice(c[b], 1), c[b] < u && (u -= 1), u = Math.max(u, 0);
    else
      e.params.virtual.cache && (delete e.virtual.cache[c], Object.keys(e.virtual.cache).forEach((b) => {
        b > c && (e.virtual.cache[b - 1] = e.virtual.cache[b], e.virtual.cache[b - 1].setAttribute("data-swiper-slide-index", b - 1), delete e.virtual.cache[b]);
      })), e.virtual.slides.splice(c, 1), c < u && (u -= 1), u = Math.max(u, 0);
    p(!0), e.slideTo(u, 0);
  }
  function h() {
    e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), p(!0), e.slideTo(0, 0);
  }
  i("beforeInit", () => {
    if (!e.params.virtual.enabled) return;
    let c;
    if (typeof e.passedParams.virtual.slides > "u") {
      const u = [...e.slidesEl.children].filter((b) => b.matches(`.${e.params.slideClass}, swiper-slide`));
      u && u.length && (e.virtual.slides = [...u], c = !0, u.forEach((b, v) => {
        b.setAttribute("data-swiper-slide-index", v), e.virtual.cache[v] = b, b.remove();
      }));
    }
    c || (e.virtual.slides = e.params.virtual.slides), e.classNames.push(`${e.params.containerModifierClass}virtual`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, p(!1, !0);
  }), i("setTranslate", () => {
    e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(n), n = setTimeout(() => {
      p();
    }, 100)) : p());
  }), i("init update resize", () => {
    e.params.virtual.enabled && e.params.cssMode && Ge(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
  }), Object.assign(e.virtual, {
    appendSlide: d,
    prependSlide: f,
    removeSlide: w,
    removeAllSlides: h,
    update: p
  });
}
function ha(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: r
  } = s;
  const n = X(), o = F();
  e.keyboard = {
    enabled: !1
  }, t({
    keyboard: {
      enabled: !1,
      onlyInViewport: !0,
      pageUpDown: !0
    }
  });
  function l(d) {
    if (!e.enabled) return;
    const {
      rtlTranslate: f
    } = e;
    let w = d;
    w.originalEvent && (w = w.originalEvent);
    const h = w.keyCode || w.charCode, c = e.params.keyboard.pageUpDown, u = c && h === 33, b = c && h === 34, v = h === 37, g = h === 39, m = h === 38, y = h === 40;
    if (!e.allowSlideNext && (e.isHorizontal() && g || e.isVertical() && y || b) || !e.allowSlidePrev && (e.isHorizontal() && v || e.isVertical() && m || u))
      return !1;
    if (!(w.shiftKey || w.altKey || w.ctrlKey || w.metaKey) && !(n.activeElement && n.activeElement.nodeName && (n.activeElement.nodeName.toLowerCase() === "input" || n.activeElement.nodeName.toLowerCase() === "textarea"))) {
      if (e.params.keyboard.onlyInViewport && (u || b || v || g || m || y)) {
        let $ = !1;
        if (be(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && be(e.el, `.${e.params.slideActiveClass}`).length === 0)
          return;
        const L = e.el, A = L.clientWidth, C = L.clientHeight, S = o.innerWidth, x = o.innerHeight, P = ft(L);
        f && (P.left -= L.scrollLeft);
        const T = [[P.left, P.top], [P.left + A, P.top], [P.left, P.top + C], [P.left + A, P.top + C]];
        for (let E = 0; E < T.length; E += 1) {
          const M = T[E];
          if (M[0] >= 0 && M[0] <= S && M[1] >= 0 && M[1] <= x) {
            if (M[0] === 0 && M[1] === 0) continue;
            $ = !0;
          }
        }
        if (!$) return;
      }
      e.isHorizontal() ? ((u || b || v || g) && (w.preventDefault ? w.preventDefault() : w.returnValue = !1), ((b || g) && !f || (u || v) && f) && e.slideNext(), ((u || v) && !f || (b || g) && f) && e.slidePrev()) : ((u || b || m || y) && (w.preventDefault ? w.preventDefault() : w.returnValue = !1), (b || y) && e.slideNext(), (u || m) && e.slidePrev()), r("keyPress", h);
    }
  }
  function a() {
    e.keyboard.enabled || (n.addEventListener("keydown", l), e.keyboard.enabled = !0);
  }
  function p() {
    e.keyboard.enabled && (n.removeEventListener("keydown", l), e.keyboard.enabled = !1);
  }
  i("init", () => {
    e.params.keyboard.enabled && a();
  }), i("destroy", () => {
    e.keyboard.enabled && p();
  }), Object.assign(e.keyboard, {
    enable: a,
    disable: p
  });
}
function ma(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: r
  } = s;
  const n = F();
  t({
    mousewheel: {
      enabled: !1,
      releaseOnEdges: !1,
      invert: !1,
      forceToAxis: !1,
      sensitivity: 1,
      eventsTarget: "container",
      thresholdDelta: null,
      thresholdTime: null,
      noMousewheelClass: "swiper-no-mousewheel"
    }
  }), e.mousewheel = {
    enabled: !1
  };
  let o, l = te(), a;
  const p = [];
  function d(m) {
    let A = 0, C = 0, S = 0, x = 0;
    return "detail" in m && (C = m.detail), "wheelDelta" in m && (C = -m.wheelDelta / 120), "wheelDeltaY" in m && (C = -m.wheelDeltaY / 120), "wheelDeltaX" in m && (A = -m.wheelDeltaX / 120), "axis" in m && m.axis === m.HORIZONTAL_AXIS && (A = C, C = 0), S = A * 10, x = C * 10, "deltaY" in m && (x = m.deltaY), "deltaX" in m && (S = m.deltaX), m.shiftKey && !S && (S = x, x = 0), (S || x) && m.deltaMode && (m.deltaMode === 1 ? (S *= 40, x *= 40) : (S *= 800, x *= 800)), S && !A && (A = S < 1 ? -1 : 1), x && !C && (C = x < 1 ? -1 : 1), {
      spinX: A,
      spinY: C,
      pixelX: S,
      pixelY: x
    };
  }
  function f() {
    e.enabled && (e.mouseEntered = !0);
  }
  function w() {
    e.enabled && (e.mouseEntered = !1);
  }
  function h(m) {
    return e.params.mousewheel.thresholdDelta && m.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && te() - l < e.params.mousewheel.thresholdTime ? !1 : m.delta >= 6 && te() - l < 60 ? !0 : (m.direction < 0 ? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(), r("scroll", m.raw)) : (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(), r("scroll", m.raw)), l = new n.Date().getTime(), !1);
  }
  function c(m) {
    const y = e.params.mousewheel;
    if (m.direction < 0) {
      if (e.isEnd && !e.params.loop && y.releaseOnEdges)
        return !0;
    } else if (e.isBeginning && !e.params.loop && y.releaseOnEdges)
      return !0;
    return !1;
  }
  function u(m) {
    let y = m, $ = !0;
    if (!e.enabled || m.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)) return;
    const L = e.params.mousewheel;
    e.params.cssMode && y.preventDefault();
    let A = e.el;
    e.params.mousewheel.eventsTarget !== "container" && (A = document.querySelector(e.params.mousewheel.eventsTarget));
    const C = A && A.contains(y.target);
    if (!e.mouseEntered && !C && !L.releaseOnEdges) return !0;
    y.originalEvent && (y = y.originalEvent);
    let S = 0;
    const x = e.rtlTranslate ? -1 : 1, P = d(y);
    if (L.forceToAxis)
      if (e.isHorizontal())
        if (Math.abs(P.pixelX) > Math.abs(P.pixelY)) S = -P.pixelX * x;
        else return !0;
      else if (Math.abs(P.pixelY) > Math.abs(P.pixelX)) S = -P.pixelY;
      else return !0;
    else
      S = Math.abs(P.pixelX) > Math.abs(P.pixelY) ? -P.pixelX * x : -P.pixelY;
    if (S === 0) return !0;
    L.invert && (S = -S);
    let T = e.getTranslate() + S * L.sensitivity;
    if (T >= e.minTranslate() && (T = e.minTranslate()), T <= e.maxTranslate() && (T = e.maxTranslate()), $ = e.params.loop ? !0 : !(T === e.minTranslate() || T === e.maxTranslate()), $ && e.params.nested && y.stopPropagation(), !e.params.freeMode || !e.params.freeMode.enabled) {
      const E = {
        time: te(),
        delta: Math.abs(S),
        direction: Math.sign(S),
        raw: m
      };
      p.length >= 2 && p.shift();
      const M = p.length ? p[p.length - 1] : void 0;
      if (p.push(E), M ? (E.direction !== M.direction || E.delta > M.delta || E.time > M.time + 150) && h(E) : h(E), c(E))
        return !0;
    } else {
      const E = {
        time: te(),
        delta: Math.abs(S),
        direction: Math.sign(S)
      }, M = a && E.time < a.time + 500 && E.delta <= a.delta && E.direction === a.direction;
      if (!M) {
        a = void 0;
        let k = e.getTranslate() + S * L.sensitivity;
        const R = e.isBeginning, z = e.isEnd;
        if (k >= e.minTranslate() && (k = e.minTranslate()), k <= e.maxTranslate() && (k = e.maxTranslate()), e.setTransition(0), e.setTranslate(k), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!R && e.isBeginning || !z && e.isEnd) && e.updateSlidesClasses(), e.params.loop && e.loopFix({
          direction: E.direction < 0 ? "next" : "prev",
          byMousewheel: !0
        }), e.params.freeMode.sticky) {
          clearTimeout(o), o = void 0, p.length >= 15 && p.shift();
          const I = p.length ? p[p.length - 1] : void 0, B = p[0];
          if (p.push(E), I && (E.delta > I.delta || E.direction !== I.direction))
            p.splice(0);
          else if (p.length >= 15 && E.time - B.time < 500 && B.delta - E.delta >= 1 && E.delta <= 6) {
            const N = S > 0 ? 0.8 : 0.2;
            a = E, p.splice(0), o = Se(() => {
              e.destroyed || !e.params || e.slideToClosest(e.params.speed, !0, void 0, N);
            }, 0);
          }
          o || (o = Se(() => {
            if (e.destroyed || !e.params) return;
            const N = 0.5;
            a = E, p.splice(0), e.slideToClosest(e.params.speed, !0, void 0, N);
          }, 500));
        }
        if (M || r("scroll", y), e.params.autoplay && e.params.autoplay.disableOnInteraction && e.autoplay.stop(), L.releaseOnEdges && (k === e.minTranslate() || k === e.maxTranslate()))
          return !0;
      }
    }
    return y.preventDefault ? y.preventDefault() : y.returnValue = !1, !1;
  }
  function b(m) {
    let y = e.el;
    e.params.mousewheel.eventsTarget !== "container" && (y = document.querySelector(e.params.mousewheel.eventsTarget)), y[m]("mouseenter", f), y[m]("mouseleave", w), y[m]("wheel", u);
  }
  function v() {
    return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", u), !0) : e.mousewheel.enabled ? !1 : (b("addEventListener"), e.mousewheel.enabled = !0, !0);
  }
  function g() {
    return e.params.cssMode ? (e.wrapperEl.addEventListener(event, u), !0) : e.mousewheel.enabled ? (b("removeEventListener"), e.mousewheel.enabled = !1, !0) : !1;
  }
  i("init", () => {
    !e.params.mousewheel.enabled && e.params.cssMode && g(), e.params.mousewheel.enabled && v();
  }), i("destroy", () => {
    e.params.cssMode && v(), e.mousewheel.enabled && g();
  }), Object.assign(e.mousewheel, {
    enable: v,
    disable: g
  });
}
function bi(s, e, t, i) {
  return s.params.createElements && Object.keys(i).forEach((r) => {
    if (!t[r] && t.auto === !0) {
      let n = U(s.el, `.${i[r]}`)[0];
      n || (n = Z("div", i[r]), n.className = i[r], s.el.append(n)), t[r] = n, e[r] = n;
    }
  }), t;
}
function ga(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: r
  } = s;
  t({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled"
    }
  }), e.navigation = {
    nextEl: null,
    prevEl: null
  };
  function n(c) {
    let u;
    return c && typeof c == "string" && e.isElement && (u = e.el.querySelector(c) || e.hostEl.querySelector(c), u) ? u : (c && (typeof c == "string" && (u = [...document.querySelectorAll(c)]), e.params.uniqueNavElements && typeof c == "string" && u && u.length > 1 && e.el.querySelectorAll(c).length === 1 ? u = e.el.querySelector(c) : u && u.length === 1 && (u = u[0])), c && !u ? c : u);
  }
  function o(c, u) {
    const b = e.params.navigation;
    c = q(c), c.forEach((v) => {
      v && (v.classList[u ? "add" : "remove"](...b.disabledClass.split(" ")), v.tagName === "BUTTON" && (v.disabled = u), e.params.watchOverflow && e.enabled && v.classList[e.isLocked ? "add" : "remove"](b.lockClass));
    });
  }
  function l() {
    const {
      nextEl: c,
      prevEl: u
    } = e.navigation;
    if (e.params.loop) {
      o(u, !1), o(c, !1);
      return;
    }
    o(u, e.isBeginning && !e.params.rewind), o(c, e.isEnd && !e.params.rewind);
  }
  function a(c) {
    c.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), r("navigationPrev"));
  }
  function p(c) {
    c.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), r("navigationNext"));
  }
  function d() {
    const c = e.params.navigation;
    if (e.params.navigation = bi(e, e.originalParams.navigation, e.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    }), !(c.nextEl || c.prevEl)) return;
    let u = n(c.nextEl), b = n(c.prevEl);
    Object.assign(e.navigation, {
      nextEl: u,
      prevEl: b
    }), u = q(u), b = q(b);
    const v = (g, m) => {
      g && g.addEventListener("click", m === "next" ? p : a), !e.enabled && g && g.classList.add(...c.lockClass.split(" "));
    };
    u.forEach((g) => v(g, "next")), b.forEach((g) => v(g, "prev"));
  }
  function f() {
    let {
      nextEl: c,
      prevEl: u
    } = e.navigation;
    c = q(c), u = q(u);
    const b = (v, g) => {
      v.removeEventListener("click", g === "next" ? p : a), v.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    c.forEach((v) => b(v, "next")), u.forEach((v) => b(v, "prev"));
  }
  i("init", () => {
    e.params.navigation.enabled === !1 ? h() : (d(), l());
  }), i("toEdge fromEdge lock unlock", () => {
    l();
  }), i("destroy", () => {
    f();
  }), i("enable disable", () => {
    let {
      nextEl: c,
      prevEl: u
    } = e.navigation;
    if (c = q(c), u = q(u), e.enabled) {
      l();
      return;
    }
    [...c, ...u].filter((b) => !!b).forEach((b) => b.classList.add(e.params.navigation.lockClass));
  }), i("click", (c, u) => {
    let {
      nextEl: b,
      prevEl: v
    } = e.navigation;
    b = q(b), v = q(v);
    const g = u.target;
    let m = v.includes(g) || b.includes(g);
    if (e.isElement && !m) {
      const y = u.path || u.composedPath && u.composedPath();
      y && (m = y.find(($) => b.includes($) || v.includes($)));
    }
    if (e.params.navigation.hideOnClick && !m) {
      if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === g || e.pagination.el.contains(g))) return;
      let y;
      b.length ? y = b[0].classList.contains(e.params.navigation.hiddenClass) : v.length && (y = v[0].classList.contains(e.params.navigation.hiddenClass)), r(y === !0 ? "navigationShow" : "navigationHide"), [...b, ...v].filter(($) => !!$).forEach(($) => $.classList.toggle(e.params.navigation.hiddenClass));
    }
  });
  const w = () => {
    e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), d(), l();
  }, h = () => {
    e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), f();
  };
  Object.assign(e.navigation, {
    enable: w,
    disable: h,
    update: l,
    init: d,
    destroy: f
  });
}
function ae(s) {
  return s === void 0 && (s = ""), `.${s.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}
function wa(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: r
  } = s;
  const n = "swiper-pagination";
  t({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (g) => g,
      formatFractionTotal: (g) => g,
      bulletClass: `${n}-bullet`,
      bulletActiveClass: `${n}-bullet-active`,
      modifierClass: `${n}-`,
      currentClass: `${n}-current`,
      totalClass: `${n}-total`,
      hiddenClass: `${n}-hidden`,
      progressbarFillClass: `${n}-progressbar-fill`,
      progressbarOppositeClass: `${n}-progressbar-opposite`,
      clickableClass: `${n}-clickable`,
      lockClass: `${n}-lock`,
      horizontalClass: `${n}-horizontal`,
      verticalClass: `${n}-vertical`,
      paginationDisabledClass: `${n}-disabled`
    }
  }), e.pagination = {
    el: null,
    bullets: []
  };
  let o, l = 0;
  function a() {
    return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
  }
  function p(g, m) {
    const {
      bulletActiveClass: y
    } = e.params.pagination;
    g && (g = g[`${m === "prev" ? "previous" : "next"}ElementSibling`], g && (g.classList.add(`${y}-${m}`), g = g[`${m === "prev" ? "previous" : "next"}ElementSibling`], g && g.classList.add(`${y}-${m}-${m}`)));
  }
  function d(g, m, y) {
    if (g = g % y, m = m % y, m === g + 1)
      return "next";
    if (m === g - 1)
      return "previous";
  }
  function f(g) {
    const m = g.target.closest(ae(e.params.pagination.bulletClass));
    if (!m)
      return;
    g.preventDefault();
    const y = Ke(m) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === y) return;
      const $ = d(e.realIndex, y, e.slides.length);
      $ === "next" ? e.slideNext() : $ === "previous" ? e.slidePrev() : e.slideToLoop(y);
    } else
      e.slideTo(y);
  }
  function w() {
    const g = e.rtl, m = e.params.pagination;
    if (a()) return;
    let y = e.pagination.el;
    y = q(y);
    let $, L;
    const A = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, C = e.params.loop ? Math.ceil(A / e.params.slidesPerGroup) : e.snapGrid.length;
    if (e.params.loop ? (L = e.previousRealIndex || 0, $ = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? ($ = e.snapIndex, L = e.previousSnapIndex) : (L = e.previousIndex || 0, $ = e.activeIndex || 0), m.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const S = e.pagination.bullets;
      let x, P, T;
      if (m.dynamicBullets && (o = oi(S[0], e.isHorizontal() ? "width" : "height"), y.forEach((E) => {
        E.style[e.isHorizontal() ? "width" : "height"] = `${o * (m.dynamicMainBullets + 4)}px`;
      }), m.dynamicMainBullets > 1 && L !== void 0 && (l += $ - (L || 0), l > m.dynamicMainBullets - 1 ? l = m.dynamicMainBullets - 1 : l < 0 && (l = 0)), x = Math.max($ - l, 0), P = x + (Math.min(S.length, m.dynamicMainBullets) - 1), T = (P + x) / 2), S.forEach((E) => {
        const M = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((k) => `${m.bulletActiveClass}${k}`)].map((k) => typeof k == "string" && k.includes(" ") ? k.split(" ") : k).flat();
        E.classList.remove(...M);
      }), y.length > 1)
        S.forEach((E) => {
          const M = Ke(E);
          M === $ ? E.classList.add(...m.bulletActiveClass.split(" ")) : e.isElement && E.setAttribute("part", "bullet"), m.dynamicBullets && (M >= x && M <= P && E.classList.add(...`${m.bulletActiveClass}-main`.split(" ")), M === x && p(E, "prev"), M === P && p(E, "next"));
        });
      else {
        const E = S[$];
        if (E && E.classList.add(...m.bulletActiveClass.split(" ")), e.isElement && S.forEach((M, k) => {
          M.setAttribute("part", k === $ ? "bullet-active" : "bullet");
        }), m.dynamicBullets) {
          const M = S[x], k = S[P];
          for (let R = x; R <= P; R += 1)
            S[R] && S[R].classList.add(...`${m.bulletActiveClass}-main`.split(" "));
          p(M, "prev"), p(k, "next");
        }
      }
      if (m.dynamicBullets) {
        const E = Math.min(S.length, m.dynamicMainBullets + 4), M = (o * E - o) / 2 - T * o, k = g ? "right" : "left";
        S.forEach((R) => {
          R.style[e.isHorizontal() ? k : "top"] = `${M}px`;
        });
      }
    }
    y.forEach((S, x) => {
      if (m.type === "fraction" && (S.querySelectorAll(ae(m.currentClass)).forEach((P) => {
        P.textContent = m.formatFractionCurrent($ + 1);
      }), S.querySelectorAll(ae(m.totalClass)).forEach((P) => {
        P.textContent = m.formatFractionTotal(C);
      })), m.type === "progressbar") {
        let P;
        m.progressbarOpposite ? P = e.isHorizontal() ? "vertical" : "horizontal" : P = e.isHorizontal() ? "horizontal" : "vertical";
        const T = ($ + 1) / C;
        let E = 1, M = 1;
        P === "horizontal" ? E = T : M = T, S.querySelectorAll(ae(m.progressbarFillClass)).forEach((k) => {
          k.style.transform = `translate3d(0,0,0) scaleX(${E}) scaleY(${M})`, k.style.transitionDuration = `${e.params.speed}ms`;
        });
      }
      m.type === "custom" && m.renderCustom ? (S.innerHTML = m.renderCustom(e, $ + 1, C), x === 0 && r("paginationRender", S)) : (x === 0 && r("paginationRender", S), r("paginationUpdate", S)), e.params.watchOverflow && e.enabled && S.classList[e.isLocked ? "add" : "remove"](m.lockClass);
    });
  }
  function h() {
    const g = e.params.pagination;
    if (a()) return;
    const m = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
    let y = e.pagination.el;
    y = q(y);
    let $ = "";
    if (g.type === "bullets") {
      let L = e.params.loop ? Math.ceil(m / e.params.slidesPerGroup) : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && L > m && (L = m);
      for (let A = 0; A < L; A += 1)
        g.renderBullet ? $ += g.renderBullet.call(e, A, g.bulletClass) : $ += `<${g.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${g.bulletClass}"></${g.bulletElement}>`;
    }
    g.type === "fraction" && (g.renderFraction ? $ = g.renderFraction.call(e, g.currentClass, g.totalClass) : $ = `<span class="${g.currentClass}"></span> / <span class="${g.totalClass}"></span>`), g.type === "progressbar" && (g.renderProgressbar ? $ = g.renderProgressbar.call(e, g.progressbarFillClass) : $ = `<span class="${g.progressbarFillClass}"></span>`), e.pagination.bullets = [], y.forEach((L) => {
      g.type !== "custom" && (L.innerHTML = $ || ""), g.type === "bullets" && e.pagination.bullets.push(...L.querySelectorAll(ae(g.bulletClass)));
    }), g.type !== "custom" && r("paginationRender", y[0]);
  }
  function c() {
    e.params.pagination = bi(e, e.originalParams.pagination, e.params.pagination, {
      el: "swiper-pagination"
    });
    const g = e.params.pagination;
    if (!g.el) return;
    let m;
    typeof g.el == "string" && e.isElement && (m = e.el.querySelector(g.el)), !m && typeof g.el == "string" && (m = [...document.querySelectorAll(g.el)]), m || (m = g.el), !(!m || m.length === 0) && (e.params.uniqueNavElements && typeof g.el == "string" && Array.isArray(m) && m.length > 1 && (m = [...e.el.querySelectorAll(g.el)], m.length > 1 && (m = m.find((y) => be(y, ".swiper")[0] === e.el))), Array.isArray(m) && m.length === 1 && (m = m[0]), Object.assign(e.pagination, {
      el: m
    }), m = q(m), m.forEach((y) => {
      g.type === "bullets" && g.clickable && y.classList.add(...(g.clickableClass || "").split(" ")), y.classList.add(g.modifierClass + g.type), y.classList.add(e.isHorizontal() ? g.horizontalClass : g.verticalClass), g.type === "bullets" && g.dynamicBullets && (y.classList.add(`${g.modifierClass}${g.type}-dynamic`), l = 0, g.dynamicMainBullets < 1 && (g.dynamicMainBullets = 1)), g.type === "progressbar" && g.progressbarOpposite && y.classList.add(g.progressbarOppositeClass), g.clickable && y.addEventListener("click", f), e.enabled || y.classList.add(g.lockClass);
    }));
  }
  function u() {
    const g = e.params.pagination;
    if (a()) return;
    let m = e.pagination.el;
    m && (m = q(m), m.forEach((y) => {
      y.classList.remove(g.hiddenClass), y.classList.remove(g.modifierClass + g.type), y.classList.remove(e.isHorizontal() ? g.horizontalClass : g.verticalClass), g.clickable && (y.classList.remove(...(g.clickableClass || "").split(" ")), y.removeEventListener("click", f));
    })), e.pagination.bullets && e.pagination.bullets.forEach((y) => y.classList.remove(...g.bulletActiveClass.split(" ")));
  }
  i("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const g = e.params.pagination;
    let {
      el: m
    } = e.pagination;
    m = q(m), m.forEach((y) => {
      y.classList.remove(g.horizontalClass, g.verticalClass), y.classList.add(e.isHorizontal() ? g.horizontalClass : g.verticalClass);
    });
  }), i("init", () => {
    e.params.pagination.enabled === !1 ? v() : (c(), h(), w());
  }), i("activeIndexChange", () => {
    typeof e.snapIndex > "u" && w();
  }), i("snapIndexChange", () => {
    w();
  }), i("snapGridLengthChange", () => {
    h(), w();
  }), i("destroy", () => {
    u();
  }), i("enable disable", () => {
    let {
      el: g
    } = e.pagination;
    g && (g = q(g), g.forEach((m) => m.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
  }), i("lock unlock", () => {
    w();
  }), i("click", (g, m) => {
    const y = m.target, $ = q(e.pagination.el);
    if (e.params.pagination.el && e.params.pagination.hideOnClick && $ && $.length > 0 && !y.classList.contains(e.params.pagination.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && y === e.navigation.nextEl || e.navigation.prevEl && y === e.navigation.prevEl)) return;
      const L = $[0].classList.contains(e.params.pagination.hiddenClass);
      r(L === !0 ? "paginationShow" : "paginationHide"), $.forEach((A) => A.classList.toggle(e.params.pagination.hiddenClass));
    }
  });
  const b = () => {
    e.el.classList.remove(e.params.pagination.paginationDisabledClass);
    let {
      el: g
    } = e.pagination;
    g && (g = q(g), g.forEach((m) => m.classList.remove(e.params.pagination.paginationDisabledClass))), c(), h(), w();
  }, v = () => {
    e.el.classList.add(e.params.pagination.paginationDisabledClass);
    let {
      el: g
    } = e.pagination;
    g && (g = q(g), g.forEach((m) => m.classList.add(e.params.pagination.paginationDisabledClass))), u();
  };
  Object.assign(e.pagination, {
    enable: b,
    disable: v,
    render: h,
    update: w,
    init: c,
    destroy: u
  });
}
function va(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: r
  } = s;
  const n = X();
  let o = !1, l = null, a = null, p, d, f, w;
  t({
    scrollbar: {
      el: null,
      dragSize: "auto",
      hide: !1,
      draggable: !1,
      snapOnRelease: !0,
      lockClass: "swiper-scrollbar-lock",
      dragClass: "swiper-scrollbar-drag",
      scrollbarDisabledClass: "swiper-scrollbar-disabled",
      horizontalClass: "swiper-scrollbar-horizontal",
      verticalClass: "swiper-scrollbar-vertical"
    }
  }), e.scrollbar = {
    el: null,
    dragEl: null
  };
  function h() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const {
      scrollbar: T,
      rtlTranslate: E
    } = e, {
      dragEl: M,
      el: k
    } = T, R = e.params.scrollbar, z = e.params.loop ? e.progressLoop : e.progress;
    let I = d, B = (f - d) * z;
    E ? (B = -B, B > 0 ? (I = d - B, B = 0) : -B + d > f && (I = f + B)) : B < 0 ? (I = d + B, B = 0) : B + d > f && (I = f - B), e.isHorizontal() ? (M.style.transform = `translate3d(${B}px, 0, 0)`, M.style.width = `${I}px`) : (M.style.transform = `translate3d(0px, ${B}px, 0)`, M.style.height = `${I}px`), R.hide && (clearTimeout(l), k.style.opacity = 1, l = setTimeout(() => {
      k.style.opacity = 0, k.style.transitionDuration = "400ms";
    }, 1e3));
  }
  function c(T) {
    !e.params.scrollbar.el || !e.scrollbar.el || (e.scrollbar.dragEl.style.transitionDuration = `${T}ms`);
  }
  function u() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const {
      scrollbar: T
    } = e, {
      dragEl: E,
      el: M
    } = T;
    E.style.width = "", E.style.height = "", f = e.isHorizontal() ? M.offsetWidth : M.offsetHeight, w = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), e.params.scrollbar.dragSize === "auto" ? d = f * w : d = parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? E.style.width = `${d}px` : E.style.height = `${d}px`, w >= 1 ? M.style.display = "none" : M.style.display = "", e.params.scrollbar.hide && (M.style.opacity = 0), e.params.watchOverflow && e.enabled && T.el.classList[e.isLocked ? "add" : "remove"](e.params.scrollbar.lockClass);
  }
  function b(T) {
    return e.isHorizontal() ? T.clientX : T.clientY;
  }
  function v(T) {
    const {
      scrollbar: E,
      rtlTranslate: M
    } = e, {
      el: k
    } = E;
    let R;
    R = (b(T) - ft(k)[e.isHorizontal() ? "left" : "top"] - (p !== null ? p : d / 2)) / (f - d), R = Math.max(Math.min(R, 1), 0), M && (R = 1 - R);
    const z = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * R;
    e.updateProgress(z), e.setTranslate(z), e.updateActiveIndex(), e.updateSlidesClasses();
  }
  function g(T) {
    const E = e.params.scrollbar, {
      scrollbar: M,
      wrapperEl: k
    } = e, {
      el: R,
      dragEl: z
    } = M;
    o = !0, p = T.target === z ? b(T) - T.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, T.preventDefault(), T.stopPropagation(), k.style.transitionDuration = "100ms", z.style.transitionDuration = "100ms", v(T), clearTimeout(a), R.style.transitionDuration = "0ms", E.hide && (R.style.opacity = 1), e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"), r("scrollbarDragStart", T);
  }
  function m(T) {
    const {
      scrollbar: E,
      wrapperEl: M
    } = e, {
      el: k,
      dragEl: R
    } = E;
    o && (T.preventDefault && T.cancelable ? T.preventDefault() : T.returnValue = !1, v(T), M.style.transitionDuration = "0ms", k.style.transitionDuration = "0ms", R.style.transitionDuration = "0ms", r("scrollbarDragMove", T));
  }
  function y(T) {
    const E = e.params.scrollbar, {
      scrollbar: M,
      wrapperEl: k
    } = e, {
      el: R
    } = M;
    o && (o = !1, e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "", k.style.transitionDuration = ""), E.hide && (clearTimeout(a), a = Se(() => {
      R.style.opacity = 0, R.style.transitionDuration = "400ms";
    }, 1e3)), r("scrollbarDragEnd", T), E.snapOnRelease && e.slideToClosest());
  }
  function $(T) {
    const {
      scrollbar: E,
      params: M
    } = e, k = E.el;
    if (!k) return;
    const R = k, z = M.passiveListeners ? {
      passive: !1,
      capture: !1
    } : !1, I = M.passiveListeners ? {
      passive: !0,
      capture: !1
    } : !1;
    if (!R) return;
    const B = T === "on" ? "addEventListener" : "removeEventListener";
    R[B]("pointerdown", g, z), n[B]("pointermove", m, z), n[B]("pointerup", y, I);
  }
  function L() {
    !e.params.scrollbar.el || !e.scrollbar.el || $("on");
  }
  function A() {
    !e.params.scrollbar.el || !e.scrollbar.el || $("off");
  }
  function C() {
    const {
      scrollbar: T,
      el: E
    } = e;
    e.params.scrollbar = bi(e, e.originalParams.scrollbar, e.params.scrollbar, {
      el: "swiper-scrollbar"
    });
    const M = e.params.scrollbar;
    if (!M.el) return;
    let k;
    if (typeof M.el == "string" && e.isElement && (k = e.el.querySelector(M.el)), !k && typeof M.el == "string") {
      if (k = n.querySelectorAll(M.el), !k.length) return;
    } else k || (k = M.el);
    e.params.uniqueNavElements && typeof M.el == "string" && k.length > 1 && E.querySelectorAll(M.el).length === 1 && (k = E.querySelector(M.el)), k.length > 0 && (k = k[0]), k.classList.add(e.isHorizontal() ? M.horizontalClass : M.verticalClass);
    let R;
    k && (R = k.querySelector(ae(e.params.scrollbar.dragClass)), R || (R = Z("div", e.params.scrollbar.dragClass), k.append(R))), Object.assign(T, {
      el: k,
      dragEl: R
    }), M.draggable && L(), k && k.classList[e.enabled ? "remove" : "add"](...ce(e.params.scrollbar.lockClass));
  }
  function S() {
    const T = e.params.scrollbar, E = e.scrollbar.el;
    E && E.classList.remove(...ce(e.isHorizontal() ? T.horizontalClass : T.verticalClass)), A();
  }
  i("changeDirection", () => {
    if (!e.scrollbar || !e.scrollbar.el) return;
    const T = e.params.scrollbar;
    let {
      el: E
    } = e.scrollbar;
    E = q(E), E.forEach((M) => {
      M.classList.remove(T.horizontalClass, T.verticalClass), M.classList.add(e.isHorizontal() ? T.horizontalClass : T.verticalClass);
    });
  }), i("init", () => {
    e.params.scrollbar.enabled === !1 ? P() : (C(), u(), h());
  }), i("update resize observerUpdate lock unlock changeDirection", () => {
    u();
  }), i("setTranslate", () => {
    h();
  }), i("setTransition", (T, E) => {
    c(E);
  }), i("enable disable", () => {
    const {
      el: T
    } = e.scrollbar;
    T && T.classList[e.enabled ? "remove" : "add"](...ce(e.params.scrollbar.lockClass));
  }), i("destroy", () => {
    S();
  });
  const x = () => {
    e.el.classList.remove(...ce(e.params.scrollbar.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.remove(...ce(e.params.scrollbar.scrollbarDisabledClass)), C(), u(), h();
  }, P = () => {
    e.el.classList.add(...ce(e.params.scrollbar.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.add(...ce(e.params.scrollbar.scrollbarDisabledClass)), S();
  };
  Object.assign(e.scrollbar, {
    enable: x,
    disable: P,
    updateSize: u,
    setTranslate: h,
    init: C,
    destroy: S
  });
}
function ba(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = s;
  t({
    parallax: {
      enabled: !1
    }
  });
  const r = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]", n = (a, p) => {
    const {
      rtl: d
    } = e, f = d ? -1 : 1, w = a.getAttribute("data-swiper-parallax") || "0";
    let h = a.getAttribute("data-swiper-parallax-x"), c = a.getAttribute("data-swiper-parallax-y");
    const u = a.getAttribute("data-swiper-parallax-scale"), b = a.getAttribute("data-swiper-parallax-opacity"), v = a.getAttribute("data-swiper-parallax-rotate");
    if (h || c ? (h = h || "0", c = c || "0") : e.isHorizontal() ? (h = w, c = "0") : (c = w, h = "0"), h.indexOf("%") >= 0 ? h = `${parseInt(h, 10) * p * f}%` : h = `${h * p * f}px`, c.indexOf("%") >= 0 ? c = `${parseInt(c, 10) * p}%` : c = `${c * p}px`, typeof b < "u" && b !== null) {
      const m = b - (b - 1) * (1 - Math.abs(p));
      a.style.opacity = m;
    }
    let g = `translate3d(${h}, ${c}, 0px)`;
    if (typeof u < "u" && u !== null) {
      const m = u - (u - 1) * (1 - Math.abs(p));
      g += ` scale(${m})`;
    }
    if (v && typeof v < "u" && v !== null) {
      const m = v * p * -1;
      g += ` rotate(${m}deg)`;
    }
    a.style.transform = g;
  }, o = () => {
    const {
      el: a,
      slides: p,
      progress: d,
      snapGrid: f,
      isElement: w
    } = e, h = U(a, r);
    e.isElement && h.push(...U(e.hostEl, r)), h.forEach((c) => {
      n(c, d);
    }), p.forEach((c, u) => {
      let b = c.progress;
      e.params.slidesPerGroup > 1 && e.params.slidesPerView !== "auto" && (b += Math.ceil(u / 2) - d * (f.length - 1)), b = Math.min(Math.max(b, -1), 1), c.querySelectorAll(`${r}, [data-swiper-parallax-rotate]`).forEach((v) => {
        n(v, b);
      });
    });
  }, l = function(a) {
    a === void 0 && (a = e.params.speed);
    const {
      el: p,
      hostEl: d
    } = e, f = [...p.querySelectorAll(r)];
    e.isElement && f.push(...d.querySelectorAll(r)), f.forEach((w) => {
      let h = parseInt(w.getAttribute("data-swiper-parallax-duration"), 10) || a;
      a === 0 && (h = 0), w.style.transitionDuration = `${h}ms`;
    });
  };
  i("beforeInit", () => {
    e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
  }), i("init", () => {
    e.params.parallax.enabled && o();
  }), i("setTranslate", () => {
    e.params.parallax.enabled && o();
  }), i("setTransition", (a, p) => {
    e.params.parallax.enabled && l(p);
  });
}
function ya(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: r
  } = s;
  const n = F();
  t({
    zoom: {
      enabled: !1,
      limitToOriginalSize: !1,
      maxRatio: 3,
      minRatio: 1,
      panOnMouseMove: !1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed"
    }
  }), e.zoom = {
    enabled: !1
  };
  let o = 1, l = !1, a = !1, p = {
    x: 0,
    y: 0
  };
  const d = -3;
  let f, w;
  const h = [], c = {
    originX: 0,
    originY: 0,
    slideEl: void 0,
    slideWidth: void 0,
    slideHeight: void 0,
    imageEl: void 0,
    imageWrapEl: void 0,
    maxRatio: 3
  }, u = {
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
    touchesCurrent: {}
  }, b = {
    x: void 0,
    y: void 0,
    prevPositionX: void 0,
    prevPositionY: void 0,
    prevTime: void 0
  };
  let v = 1;
  Object.defineProperty(e.zoom, "scale", {
    get() {
      return v;
    },
    set(O) {
      if (v !== O) {
        const _ = c.imageEl, D = c.slideEl;
        r("zoomChange", O, _, D);
      }
      v = O;
    }
  });
  function g() {
    if (h.length < 2) return 1;
    const O = h[0].pageX, _ = h[0].pageY, D = h[1].pageX, H = h[1].pageY;
    return Math.sqrt((D - O) ** 2 + (H - _) ** 2);
  }
  function m() {
    const O = e.params.zoom, _ = c.imageWrapEl.getAttribute("data-swiper-zoom") || O.maxRatio;
    if (O.limitToOriginalSize && c.imageEl && c.imageEl.naturalWidth) {
      const D = c.imageEl.naturalWidth / c.imageEl.offsetWidth;
      return Math.min(D, _);
    }
    return _;
  }
  function y() {
    if (h.length < 2) return {
      x: null,
      y: null
    };
    const O = c.imageEl.getBoundingClientRect();
    return [(h[0].pageX + (h[1].pageX - h[0].pageX) / 2 - O.x - n.scrollX) / o, (h[0].pageY + (h[1].pageY - h[0].pageY) / 2 - O.y - n.scrollY) / o];
  }
  function $() {
    return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
  }
  function L(O) {
    const _ = $();
    return !!(O.target.matches(_) || e.slides.filter((D) => D.contains(O.target)).length > 0);
  }
  function A(O) {
    const _ = `.${e.params.zoom.containerClass}`;
    return !!(O.target.matches(_) || [...e.hostEl.querySelectorAll(_)].filter((D) => D.contains(O.target)).length > 0);
  }
  function C(O) {
    if (O.pointerType === "mouse" && h.splice(0, h.length), !L(O)) return;
    const _ = e.params.zoom;
    if (f = !1, w = !1, h.push(O), !(h.length < 2)) {
      if (f = !0, c.scaleStart = g(), !c.slideEl) {
        c.slideEl = O.target.closest(`.${e.params.slideClass}, swiper-slide`), c.slideEl || (c.slideEl = e.slides[e.activeIndex]);
        let D = c.slideEl.querySelector(`.${_.containerClass}`);
        if (D && (D = D.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), c.imageEl = D, D ? c.imageWrapEl = be(c.imageEl, `.${_.containerClass}`)[0] : c.imageWrapEl = void 0, !c.imageWrapEl) {
          c.imageEl = void 0;
          return;
        }
        c.maxRatio = m();
      }
      if (c.imageEl) {
        const [D, H] = y();
        c.originX = D, c.originY = H, c.imageEl.style.transitionDuration = "0ms";
      }
      l = !0;
    }
  }
  function S(O) {
    if (!L(O)) return;
    const _ = e.params.zoom, D = e.zoom, H = h.findIndex((V) => V.pointerId === O.pointerId);
    H >= 0 && (h[H] = O), !(h.length < 2) && (w = !0, c.scaleMove = g(), c.imageEl && (D.scale = c.scaleMove / c.scaleStart * o, D.scale > c.maxRatio && (D.scale = c.maxRatio - 1 + (D.scale - c.maxRatio + 1) ** 0.5), D.scale < _.minRatio && (D.scale = _.minRatio + 1 - (_.minRatio - D.scale + 1) ** 0.5), c.imageEl.style.transform = `translate3d(0,0,0) scale(${D.scale})`));
  }
  function x(O) {
    if (!L(O) || O.pointerType === "mouse" && O.type === "pointerout") return;
    const _ = e.params.zoom, D = e.zoom, H = h.findIndex((V) => V.pointerId === O.pointerId);
    H >= 0 && h.splice(H, 1), !(!f || !w) && (f = !1, w = !1, c.imageEl && (D.scale = Math.max(Math.min(D.scale, c.maxRatio), _.minRatio), c.imageEl.style.transitionDuration = `${e.params.speed}ms`, c.imageEl.style.transform = `translate3d(0,0,0) scale(${D.scale})`, o = D.scale, l = !1, D.scale > 1 && c.slideEl ? c.slideEl.classList.add(`${_.zoomedSlideClass}`) : D.scale <= 1 && c.slideEl && c.slideEl.classList.remove(`${_.zoomedSlideClass}`), D.scale === 1 && (c.originX = 0, c.originY = 0, c.slideEl = void 0)));
  }
  let P;
  function T() {
    e.touchEventsData.preventTouchMoveFromPointerMove = !1;
  }
  function E() {
    clearTimeout(P), e.touchEventsData.preventTouchMoveFromPointerMove = !0, P = setTimeout(() => {
      e.destroyed || T();
    });
  }
  function M(O) {
    const _ = e.device;
    if (!c.imageEl || u.isTouched) return;
    _.android && O.cancelable && O.preventDefault(), u.isTouched = !0;
    const D = h.length > 0 ? h[0] : O;
    u.touchesStart.x = D.pageX, u.touchesStart.y = D.pageY;
  }
  function k(O) {
    const D = O.pointerType === "mouse" && e.params.zoom.panOnMouseMove;
    if (!L(O) || !A(O))
      return;
    const H = e.zoom;
    if (!c.imageEl)
      return;
    if (!u.isTouched || !c.slideEl) {
      D && I(O);
      return;
    }
    if (D) {
      I(O);
      return;
    }
    u.isMoved || (u.width = c.imageEl.offsetWidth || c.imageEl.clientWidth, u.height = c.imageEl.offsetHeight || c.imageEl.clientHeight, u.startX = ai(c.imageWrapEl, "x") || 0, u.startY = ai(c.imageWrapEl, "y") || 0, c.slideWidth = c.slideEl.offsetWidth, c.slideHeight = c.slideEl.offsetHeight, c.imageWrapEl.style.transitionDuration = "0ms");
    const V = u.width * H.scale, ee = u.height * H.scale;
    if (u.minX = Math.min(c.slideWidth / 2 - V / 2, 0), u.maxX = -u.minX, u.minY = Math.min(c.slideHeight / 2 - ee / 2, 0), u.maxY = -u.minY, u.touchesCurrent.x = h.length > 0 ? h[0].pageX : O.pageX, u.touchesCurrent.y = h.length > 0 ? h[0].pageY : O.pageY, Math.max(Math.abs(u.touchesCurrent.x - u.touchesStart.x), Math.abs(u.touchesCurrent.y - u.touchesStart.y)) > 5 && (e.allowClick = !1), !u.isMoved && !l) {
      if (e.isHorizontal() && (Math.floor(u.minX) === Math.floor(u.startX) && u.touchesCurrent.x < u.touchesStart.x || Math.floor(u.maxX) === Math.floor(u.startX) && u.touchesCurrent.x > u.touchesStart.x)) {
        u.isTouched = !1, T();
        return;
      }
      if (!e.isHorizontal() && (Math.floor(u.minY) === Math.floor(u.startY) && u.touchesCurrent.y < u.touchesStart.y || Math.floor(u.maxY) === Math.floor(u.startY) && u.touchesCurrent.y > u.touchesStart.y)) {
        u.isTouched = !1, T();
        return;
      }
    }
    O.cancelable && O.preventDefault(), O.stopPropagation(), E(), u.isMoved = !0;
    const re = (H.scale - o) / (c.maxRatio - e.params.zoom.minRatio), {
      originX: le,
      originY: W
    } = c;
    u.currentX = u.touchesCurrent.x - u.touchesStart.x + u.startX + re * (u.width - le * 2), u.currentY = u.touchesCurrent.y - u.touchesStart.y + u.startY + re * (u.height - W * 2), u.currentX < u.minX && (u.currentX = u.minX + 1 - (u.minX - u.currentX + 1) ** 0.8), u.currentX > u.maxX && (u.currentX = u.maxX - 1 + (u.currentX - u.maxX + 1) ** 0.8), u.currentY < u.minY && (u.currentY = u.minY + 1 - (u.minY - u.currentY + 1) ** 0.8), u.currentY > u.maxY && (u.currentY = u.maxY - 1 + (u.currentY - u.maxY + 1) ** 0.8), b.prevPositionX || (b.prevPositionX = u.touchesCurrent.x), b.prevPositionY || (b.prevPositionY = u.touchesCurrent.y), b.prevTime || (b.prevTime = Date.now()), b.x = (u.touchesCurrent.x - b.prevPositionX) / (Date.now() - b.prevTime) / 2, b.y = (u.touchesCurrent.y - b.prevPositionY) / (Date.now() - b.prevTime) / 2, Math.abs(u.touchesCurrent.x - b.prevPositionX) < 2 && (b.x = 0), Math.abs(u.touchesCurrent.y - b.prevPositionY) < 2 && (b.y = 0), b.prevPositionX = u.touchesCurrent.x, b.prevPositionY = u.touchesCurrent.y, b.prevTime = Date.now(), c.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`;
  }
  function R() {
    const O = e.zoom;
    if (h.length = 0, !c.imageEl) return;
    if (!u.isTouched || !u.isMoved) {
      u.isTouched = !1, u.isMoved = !1;
      return;
    }
    u.isTouched = !1, u.isMoved = !1;
    let _ = 300, D = 300;
    const H = b.x * _, V = u.currentX + H, ee = b.y * D, oe = u.currentY + ee;
    b.x !== 0 && (_ = Math.abs((V - u.currentX) / b.x)), b.y !== 0 && (D = Math.abs((oe - u.currentY) / b.y));
    const re = Math.max(_, D);
    u.currentX = V, u.currentY = oe;
    const le = u.width * O.scale, W = u.height * O.scale;
    u.minX = Math.min(c.slideWidth / 2 - le / 2, 0), u.maxX = -u.minX, u.minY = Math.min(c.slideHeight / 2 - W / 2, 0), u.maxY = -u.minY, u.currentX = Math.max(Math.min(u.currentX, u.maxX), u.minX), u.currentY = Math.max(Math.min(u.currentY, u.maxY), u.minY), c.imageWrapEl.style.transitionDuration = `${re}ms`, c.imageWrapEl.style.transform = `translate3d(${u.currentX}px, ${u.currentY}px,0)`;
  }
  function z() {
    const O = e.zoom;
    c.slideEl && e.activeIndex !== e.slides.indexOf(c.slideEl) && (c.imageEl && (c.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), c.imageWrapEl && (c.imageWrapEl.style.transform = "translate3d(0,0,0)"), c.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`), O.scale = 1, o = 1, c.slideEl = void 0, c.imageEl = void 0, c.imageWrapEl = void 0, c.originX = 0, c.originY = 0);
  }
  function I(O) {
    if (o <= 1 || !c.imageWrapEl || !L(O) || !A(O)) return;
    const _ = n.getComputedStyle(c.imageWrapEl).transform, D = new n.DOMMatrix(_);
    if (!a) {
      a = !0, p.x = O.clientX, p.y = O.clientY, u.startX = D.e, u.startY = D.f, u.width = c.imageEl.offsetWidth || c.imageEl.clientWidth, u.height = c.imageEl.offsetHeight || c.imageEl.clientHeight, c.slideWidth = c.slideEl.offsetWidth, c.slideHeight = c.slideEl.offsetHeight;
      return;
    }
    const H = (O.clientX - p.x) * d, V = (O.clientY - p.y) * d, ee = u.width * o, oe = u.height * o, re = c.slideWidth, le = c.slideHeight, W = Math.min(re / 2 - ee / 2, 0), ie = -W, Oe = Math.min(le / 2 - oe / 2, 0), et = -Oe, Me = Math.max(Math.min(u.startX + H, ie), W), Ce = Math.max(Math.min(u.startY + V, et), Oe);
    c.imageWrapEl.style.transitionDuration = "0ms", c.imageWrapEl.style.transform = `translate3d(${Me}px, ${Ce}px, 0)`, p.x = O.clientX, p.y = O.clientY, u.startX = Me, u.startY = Ce, u.currentX = Me, u.currentY = Ce;
  }
  function B(O) {
    const _ = e.zoom, D = e.params.zoom;
    if (!c.slideEl) {
      O && O.target && (c.slideEl = O.target.closest(`.${e.params.slideClass}, swiper-slide`)), c.slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? c.slideEl = U(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : c.slideEl = e.slides[e.activeIndex]);
      let De = c.slideEl.querySelector(`.${D.containerClass}`);
      De && (De = De.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), c.imageEl = De, De ? c.imageWrapEl = be(c.imageEl, `.${D.containerClass}`)[0] : c.imageWrapEl = void 0;
    }
    if (!c.imageEl || !c.imageWrapEl) return;
    e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), c.slideEl.classList.add(`${D.zoomedSlideClass}`);
    let H, V, ee, oe, re, le, W, ie, Oe, et, Me, Ce, tt, it, vt, bt, yt, St;
    typeof u.touchesStart.x > "u" && O ? (H = O.pageX, V = O.pageY) : (H = u.touchesStart.x, V = u.touchesStart.y);
    const Et = o, Pe = typeof O == "number" ? O : null;
    o === 1 && Pe && (H = void 0, V = void 0, u.touchesStart.x = void 0, u.touchesStart.y = void 0);
    const Si = m();
    _.scale = Pe || Si, o = Pe || Si, O && !(o === 1 && Pe) ? (yt = c.slideEl.offsetWidth, St = c.slideEl.offsetHeight, ee = ft(c.slideEl).left + n.scrollX, oe = ft(c.slideEl).top + n.scrollY, re = ee + yt / 2 - H, le = oe + St / 2 - V, Oe = c.imageEl.offsetWidth || c.imageEl.clientWidth, et = c.imageEl.offsetHeight || c.imageEl.clientHeight, Me = Oe * _.scale, Ce = et * _.scale, tt = Math.min(yt / 2 - Me / 2, 0), it = Math.min(St / 2 - Ce / 2, 0), vt = -tt, bt = -it, Et > 0 && Pe && typeof u.currentX == "number" && typeof u.currentY == "number" ? (W = u.currentX * _.scale / Et, ie = u.currentY * _.scale / Et) : (W = re * _.scale, ie = le * _.scale), W < tt && (W = tt), W > vt && (W = vt), ie < it && (ie = it), ie > bt && (ie = bt)) : (W = 0, ie = 0), Pe && _.scale === 1 && (c.originX = 0, c.originY = 0), u.currentX = W, u.currentY = ie, c.imageWrapEl.style.transitionDuration = "300ms", c.imageWrapEl.style.transform = `translate3d(${W}px, ${ie}px,0)`, c.imageEl.style.transitionDuration = "300ms", c.imageEl.style.transform = `translate3d(0,0,0) scale(${_.scale})`;
  }
  function N() {
    const O = e.zoom, _ = e.params.zoom;
    if (!c.slideEl) {
      e.params.virtual && e.params.virtual.enabled && e.virtual ? c.slideEl = U(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : c.slideEl = e.slides[e.activeIndex];
      let D = c.slideEl.querySelector(`.${_.containerClass}`);
      D && (D = D.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), c.imageEl = D, D ? c.imageWrapEl = be(c.imageEl, `.${_.containerClass}`)[0] : c.imageWrapEl = void 0;
    }
    !c.imageEl || !c.imageWrapEl || (e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), O.scale = 1, o = 1, u.currentX = void 0, u.currentY = void 0, u.touchesStart.x = void 0, u.touchesStart.y = void 0, c.imageWrapEl.style.transitionDuration = "300ms", c.imageWrapEl.style.transform = "translate3d(0,0,0)", c.imageEl.style.transitionDuration = "300ms", c.imageEl.style.transform = "translate3d(0,0,0) scale(1)", c.slideEl.classList.remove(`${_.zoomedSlideClass}`), c.slideEl = void 0, c.originX = 0, c.originY = 0, e.params.zoom.panOnMouseMove && (p = {
      x: 0,
      y: 0
    }, a && (a = !1, u.startX = 0, u.startY = 0)));
  }
  function G(O) {
    const _ = e.zoom;
    _.scale && _.scale !== 1 ? N() : B(O);
  }
  function j() {
    const O = e.params.passiveListeners ? {
      passive: !0,
      capture: !1
    } : !1, _ = e.params.passiveListeners ? {
      passive: !1,
      capture: !0
    } : !0;
    return {
      passiveListener: O,
      activeListenerWithCapture: _
    };
  }
  function K() {
    const O = e.zoom;
    if (O.enabled) return;
    O.enabled = !0;
    const {
      passiveListener: _,
      activeListenerWithCapture: D
    } = j();
    e.wrapperEl.addEventListener("pointerdown", C, _), e.wrapperEl.addEventListener("pointermove", S, D), ["pointerup", "pointercancel", "pointerout"].forEach((H) => {
      e.wrapperEl.addEventListener(H, x, _);
    }), e.wrapperEl.addEventListener("pointermove", k, D);
  }
  function me() {
    const O = e.zoom;
    if (!O.enabled) return;
    O.enabled = !1;
    const {
      passiveListener: _,
      activeListenerWithCapture: D
    } = j();
    e.wrapperEl.removeEventListener("pointerdown", C, _), e.wrapperEl.removeEventListener("pointermove", S, D), ["pointerup", "pointercancel", "pointerout"].forEach((H) => {
      e.wrapperEl.removeEventListener(H, x, _);
    }), e.wrapperEl.removeEventListener("pointermove", k, D);
  }
  i("init", () => {
    e.params.zoom.enabled && K();
  }), i("destroy", () => {
    me();
  }), i("touchStart", (O, _) => {
    e.zoom.enabled && M(_);
  }), i("touchEnd", (O, _) => {
    e.zoom.enabled && R();
  }), i("doubleTap", (O, _) => {
    !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && G(_);
  }), i("transitionEnd", () => {
    e.zoom.enabled && e.params.zoom.enabled && z();
  }), i("slideChange", () => {
    e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && z();
  }), Object.assign(e.zoom, {
    enable: K,
    disable: me,
    in: B,
    out: N,
    toggle: G
  });
}
function Sa(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = s;
  t({
    controller: {
      control: void 0,
      inverse: !1,
      by: "slide"
      // or 'container'
    }
  }), e.controller = {
    control: void 0
  };
  function r(p, d) {
    const f = /* @__PURE__ */ function() {
      let u, b, v;
      return (g, m) => {
        for (b = -1, u = g.length; u - b > 1; )
          v = u + b >> 1, g[v] <= m ? b = v : u = v;
        return u;
      };
    }();
    this.x = p, this.y = d, this.lastIndex = p.length - 1;
    let w, h;
    return this.interpolate = function(u) {
      return u ? (h = f(this.x, u), w = h - 1, (u - this.x[w]) * (this.y[h] - this.y[w]) / (this.x[h] - this.x[w]) + this.y[w]) : 0;
    }, this;
  }
  function n(p) {
    e.controller.spline = e.params.loop ? new r(e.slidesGrid, p.slidesGrid) : new r(e.snapGrid, p.snapGrid);
  }
  function o(p, d) {
    const f = e.controller.control;
    let w, h;
    const c = e.constructor;
    function u(b) {
      if (b.destroyed) return;
      const v = e.rtlTranslate ? -e.translate : e.translate;
      e.params.controller.by === "slide" && (n(b), h = -e.controller.spline.interpolate(-v)), (!h || e.params.controller.by === "container") && (w = (b.maxTranslate() - b.minTranslate()) / (e.maxTranslate() - e.minTranslate()), (Number.isNaN(w) || !Number.isFinite(w)) && (w = 1), h = (v - e.minTranslate()) * w + b.minTranslate()), e.params.controller.inverse && (h = b.maxTranslate() - h), b.updateProgress(h), b.setTranslate(h, e), b.updateActiveIndex(), b.updateSlidesClasses();
    }
    if (Array.isArray(f))
      for (let b = 0; b < f.length; b += 1)
        f[b] !== d && f[b] instanceof c && u(f[b]);
    else f instanceof c && d !== f && u(f);
  }
  function l(p, d) {
    const f = e.constructor, w = e.controller.control;
    let h;
    function c(u) {
      u.destroyed || (u.setTransition(p, e), p !== 0 && (u.transitionStart(), u.params.autoHeight && Se(() => {
        u.updateAutoHeight();
      }), Ye(u.wrapperEl, () => {
        w && u.transitionEnd();
      })));
    }
    if (Array.isArray(w))
      for (h = 0; h < w.length; h += 1)
        w[h] !== d && w[h] instanceof f && c(w[h]);
    else w instanceof f && d !== w && c(w);
  }
  function a() {
    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
  }
  i("beforeInit", () => {
    if (typeof window < "u" && // eslint-disable-line
    (typeof e.params.controller.control == "string" || e.params.controller.control instanceof HTMLElement)) {
      (typeof e.params.controller.control == "string" ? [...document.querySelectorAll(e.params.controller.control)] : [e.params.controller.control]).forEach((d) => {
        if (e.controller.control || (e.controller.control = []), d && d.swiper)
          e.controller.control.push(d.swiper);
        else if (d) {
          const f = `${e.params.eventsPrefix}init`, w = (h) => {
            e.controller.control.push(h.detail[0]), e.update(), d.removeEventListener(f, w);
          };
          d.addEventListener(f, w);
        }
      });
      return;
    }
    e.controller.control = e.params.controller.control;
  }), i("update", () => {
    a();
  }), i("resize", () => {
    a();
  }), i("observerUpdate", () => {
    a();
  }), i("setTranslate", (p, d, f) => {
    !e.controller.control || e.controller.control.destroyed || e.controller.setTranslate(d, f);
  }), i("setTransition", (p, d, f) => {
    !e.controller.control || e.controller.control.destroyed || e.controller.setTransition(d, f);
  }), Object.assign(e.controller, {
    setTranslate: o,
    setTransition: l
  });
}
function Ea(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = s;
  t({
    a11y: {
      enabled: !0,
      notificationClass: "swiper-notification",
      prevSlideMessage: "Previous slide",
      nextSlideMessage: "Next slide",
      firstSlideMessage: "This is the first slide",
      lastSlideMessage: "This is the last slide",
      paginationBulletMessage: "Go to slide {{index}}",
      slideLabelMessage: "{{index}} / {{slidesLength}}",
      containerMessage: null,
      containerRoleDescriptionMessage: null,
      containerRole: null,
      itemRoleDescriptionMessage: null,
      slideRole: "group",
      id: null,
      scrollOnFocus: !0
    }
  }), e.a11y = {
    clicked: !1
  };
  let r = null, n, o, l = (/* @__PURE__ */ new Date()).getTime();
  function a(z) {
    const I = r;
    I.length !== 0 && (I.innerHTML = "", I.innerHTML = z);
  }
  function p(z) {
    const I = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(z).replace(/x/g, I);
  }
  function d(z) {
    z = q(z), z.forEach((I) => {
      I.setAttribute("tabIndex", "0");
    });
  }
  function f(z) {
    z = q(z), z.forEach((I) => {
      I.setAttribute("tabIndex", "-1");
    });
  }
  function w(z, I) {
    z = q(z), z.forEach((B) => {
      B.setAttribute("role", I);
    });
  }
  function h(z, I) {
    z = q(z), z.forEach((B) => {
      B.setAttribute("aria-roledescription", I);
    });
  }
  function c(z, I) {
    z = q(z), z.forEach((B) => {
      B.setAttribute("aria-controls", I);
    });
  }
  function u(z, I) {
    z = q(z), z.forEach((B) => {
      B.setAttribute("aria-label", I);
    });
  }
  function b(z, I) {
    z = q(z), z.forEach((B) => {
      B.setAttribute("id", I);
    });
  }
  function v(z, I) {
    z = q(z), z.forEach((B) => {
      B.setAttribute("aria-live", I);
    });
  }
  function g(z) {
    z = q(z), z.forEach((I) => {
      I.setAttribute("aria-disabled", !0);
    });
  }
  function m(z) {
    z = q(z), z.forEach((I) => {
      I.setAttribute("aria-disabled", !1);
    });
  }
  function y(z) {
    if (z.keyCode !== 13 && z.keyCode !== 32) return;
    const I = e.params.a11y, B = z.target;
    if (!(e.pagination && e.pagination.el && (B === e.pagination.el || e.pagination.el.contains(z.target)) && !z.target.matches(ae(e.params.pagination.bulletClass)))) {
      if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
        const N = q(e.navigation.prevEl);
        q(e.navigation.nextEl).includes(B) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? a(I.lastSlideMessage) : a(I.nextSlideMessage)), N.includes(B) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? a(I.firstSlideMessage) : a(I.prevSlideMessage));
      }
      e.pagination && B.matches(ae(e.params.pagination.bulletClass)) && B.click();
    }
  }
  function $() {
    if (e.params.loop || e.params.rewind || !e.navigation) return;
    const {
      nextEl: z,
      prevEl: I
    } = e.navigation;
    I && (e.isBeginning ? (g(I), f(I)) : (m(I), d(I))), z && (e.isEnd ? (g(z), f(z)) : (m(z), d(z)));
  }
  function L() {
    return e.pagination && e.pagination.bullets && e.pagination.bullets.length;
  }
  function A() {
    return L() && e.params.pagination.clickable;
  }
  function C() {
    const z = e.params.a11y;
    L() && e.pagination.bullets.forEach((I) => {
      e.params.pagination.clickable && (d(I), e.params.pagination.renderBullet || (w(I, "button"), u(I, z.paginationBulletMessage.replace(/\{\{index\}\}/, Ke(I) + 1)))), I.matches(ae(e.params.pagination.bulletActiveClass)) ? I.setAttribute("aria-current", "true") : I.removeAttribute("aria-current");
    });
  }
  const S = (z, I, B) => {
    d(z), z.tagName !== "BUTTON" && (w(z, "button"), z.addEventListener("keydown", y)), u(z, B), c(z, I);
  }, x = (z) => {
    o && o !== z.target && !o.contains(z.target) && (n = !0), e.a11y.clicked = !0;
  }, P = () => {
    n = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        e.destroyed || (e.a11y.clicked = !1);
      });
    });
  }, T = (z) => {
    l = (/* @__PURE__ */ new Date()).getTime();
  }, E = (z) => {
    if (e.a11y.clicked || !e.params.a11y.scrollOnFocus || (/* @__PURE__ */ new Date()).getTime() - l < 100) return;
    const I = z.target.closest(`.${e.params.slideClass}, swiper-slide`);
    if (!I || !e.slides.includes(I)) return;
    o = I;
    const B = e.slides.indexOf(I) === e.activeIndex, N = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(I);
    B || N || z.sourceCapabilities && z.sourceCapabilities.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, requestAnimationFrame(() => {
      n || (e.params.loop ? e.slideToLoop(parseInt(I.getAttribute("data-swiper-slide-index")), 0) : e.slideTo(e.slides.indexOf(I), 0), n = !1);
    }));
  }, M = () => {
    const z = e.params.a11y;
    z.itemRoleDescriptionMessage && h(e.slides, z.itemRoleDescriptionMessage), z.slideRole && w(e.slides, z.slideRole);
    const I = e.slides.length;
    z.slideLabelMessage && e.slides.forEach((B, N) => {
      const G = e.params.loop ? parseInt(B.getAttribute("data-swiper-slide-index"), 10) : N, j = z.slideLabelMessage.replace(/\{\{index\}\}/, G + 1).replace(/\{\{slidesLength\}\}/, I);
      u(B, j);
    });
  }, k = () => {
    const z = e.params.a11y;
    e.el.append(r);
    const I = e.el;
    z.containerRoleDescriptionMessage && h(I, z.containerRoleDescriptionMessage), z.containerMessage && u(I, z.containerMessage), z.containerRole && w(I, z.containerRole);
    const B = e.wrapperEl, N = z.id || B.getAttribute("id") || `swiper-wrapper-${p(16)}`, G = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
    b(B, N), v(B, G), M();
    let {
      nextEl: j,
      prevEl: K
    } = e.navigation ? e.navigation : {};
    j = q(j), K = q(K), j && j.forEach((O) => S(O, N, z.nextSlideMessage)), K && K.forEach((O) => S(O, N, z.prevSlideMessage)), A() && q(e.pagination.el).forEach((_) => {
      _.addEventListener("keydown", y);
    }), X().addEventListener("visibilitychange", T), e.el.addEventListener("focus", E, !0), e.el.addEventListener("focus", E, !0), e.el.addEventListener("pointerdown", x, !0), e.el.addEventListener("pointerup", P, !0);
  };
  function R() {
    r && r.remove();
    let {
      nextEl: z,
      prevEl: I
    } = e.navigation ? e.navigation : {};
    z = q(z), I = q(I), z && z.forEach((N) => N.removeEventListener("keydown", y)), I && I.forEach((N) => N.removeEventListener("keydown", y)), A() && q(e.pagination.el).forEach((G) => {
      G.removeEventListener("keydown", y);
    }), X().removeEventListener("visibilitychange", T), e.el && typeof e.el != "string" && (e.el.removeEventListener("focus", E, !0), e.el.removeEventListener("pointerdown", x, !0), e.el.removeEventListener("pointerup", P, !0));
  }
  i("beforeInit", () => {
    r = Z("span", e.params.a11y.notificationClass), r.setAttribute("aria-live", "assertive"), r.setAttribute("aria-atomic", "true");
  }), i("afterInit", () => {
    e.params.a11y.enabled && k();
  }), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
    e.params.a11y.enabled && M();
  }), i("fromEdge toEdge afterInit lock unlock", () => {
    e.params.a11y.enabled && $();
  }), i("paginationUpdate", () => {
    e.params.a11y.enabled && C();
  }), i("destroy", () => {
    e.params.a11y.enabled && R();
  });
}
function xa(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = s;
  t({
    history: {
      enabled: !1,
      root: "",
      replaceState: !1,
      key: "slides",
      keepQuery: !1
    }
  });
  let r = !1, n = {};
  const o = (h) => h.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), l = (h) => {
    const c = F();
    let u;
    h ? u = new URL(h) : u = c.location;
    const b = u.pathname.slice(1).split("/").filter((y) => y !== ""), v = b.length, g = b[v - 2], m = b[v - 1];
    return {
      key: g,
      value: m
    };
  }, a = (h, c) => {
    const u = F();
    if (!r || !e.params.history.enabled) return;
    let b;
    e.params.url ? b = new URL(e.params.url) : b = u.location;
    const v = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${c}"]`) : e.slides[c];
    let g = o(v.getAttribute("data-history"));
    if (e.params.history.root.length > 0) {
      let y = e.params.history.root;
      y[y.length - 1] === "/" && (y = y.slice(0, y.length - 1)), g = `${y}/${h ? `${h}/` : ""}${g}`;
    } else b.pathname.includes(h) || (g = `${h ? `${h}/` : ""}${g}`);
    e.params.history.keepQuery && (g += b.search);
    const m = u.history.state;
    m && m.value === g || (e.params.history.replaceState ? u.history.replaceState({
      value: g
    }, null, g) : u.history.pushState({
      value: g
    }, null, g));
  }, p = (h, c, u) => {
    if (c)
      for (let b = 0, v = e.slides.length; b < v; b += 1) {
        const g = e.slides[b];
        if (o(g.getAttribute("data-history")) === c) {
          const y = e.getSlideIndex(g);
          e.slideTo(y, h, u);
        }
      }
    else
      e.slideTo(0, h, u);
  }, d = () => {
    n = l(e.params.url), p(e.params.speed, n.value, !1);
  }, f = () => {
    const h = F();
    if (e.params.history) {
      if (!h.history || !h.history.pushState) {
        e.params.history.enabled = !1, e.params.hashNavigation.enabled = !0;
        return;
      }
      if (r = !0, n = l(e.params.url), !n.key && !n.value) {
        e.params.history.replaceState || h.addEventListener("popstate", d);
        return;
      }
      p(0, n.value, e.params.runCallbacksOnInit), e.params.history.replaceState || h.addEventListener("popstate", d);
    }
  }, w = () => {
    const h = F();
    e.params.history.replaceState || h.removeEventListener("popstate", d);
  };
  i("init", () => {
    e.params.history.enabled && f();
  }), i("destroy", () => {
    e.params.history.enabled && w();
  }), i("transitionEnd _freeModeNoMomentumRelease", () => {
    r && a(e.params.history.key, e.activeIndex);
  }), i("slideChange", () => {
    r && e.params.cssMode && a(e.params.history.key, e.activeIndex);
  });
}
function Ta(s) {
  let {
    swiper: e,
    extendParams: t,
    emit: i,
    on: r
  } = s, n = !1;
  const o = X(), l = F();
  t({
    hashNavigation: {
      enabled: !1,
      replaceState: !1,
      watchState: !1,
      getSlideIndex(w, h) {
        if (e.virtual && e.params.virtual.enabled) {
          const c = e.slides.find((b) => b.getAttribute("data-hash") === h);
          return c ? parseInt(c.getAttribute("data-swiper-slide-index"), 10) : 0;
        }
        return e.getSlideIndex(U(e.slidesEl, `.${e.params.slideClass}[data-hash="${h}"], swiper-slide[data-hash="${h}"]`)[0]);
      }
    }
  });
  const a = () => {
    i("hashChange");
    const w = o.location.hash.replace("#", ""), h = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], c = h ? h.getAttribute("data-hash") : "";
    if (w !== c) {
      const u = e.params.hashNavigation.getSlideIndex(e, w);
      if (typeof u > "u" || Number.isNaN(u)) return;
      e.slideTo(u);
    }
  }, p = () => {
    if (!n || !e.params.hashNavigation.enabled) return;
    const w = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], h = w ? w.getAttribute("data-hash") || w.getAttribute("data-history") : "";
    e.params.hashNavigation.replaceState && l.history && l.history.replaceState ? (l.history.replaceState(null, null, `#${h}` || ""), i("hashSet")) : (o.location.hash = h || "", i("hashSet"));
  }, d = () => {
    if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
    n = !0;
    const w = o.location.hash.replace("#", "");
    if (w) {
      const c = e.params.hashNavigation.getSlideIndex(e, w);
      e.slideTo(c || 0, 0, e.params.runCallbacksOnInit, !0);
    }
    e.params.hashNavigation.watchState && l.addEventListener("hashchange", a);
  }, f = () => {
    e.params.hashNavigation.watchState && l.removeEventListener("hashchange", a);
  };
  r("init", () => {
    e.params.hashNavigation.enabled && d();
  }), r("destroy", () => {
    e.params.hashNavigation.enabled && f();
  }), r("transitionEnd _freeModeNoMomentumRelease", () => {
    n && p();
  }), r("slideChange", () => {
    n && e.params.cssMode && p();
  });
}
function Ma(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: r,
    params: n
  } = s;
  e.autoplay = {
    running: !1,
    paused: !1,
    timeLeft: 0
  }, t({
    autoplay: {
      enabled: !1,
      delay: 3e3,
      waitForTransition: !0,
      disableOnInteraction: !1,
      stopOnLastSlide: !1,
      reverseDirection: !1,
      pauseOnMouseEnter: !1
    }
  });
  let o, l, a = n && n.autoplay ? n.autoplay.delay : 3e3, p = n && n.autoplay ? n.autoplay.delay : 3e3, d, f = (/* @__PURE__ */ new Date()).getTime(), w, h, c, u, b, v, g;
  function m(I) {
    !e || e.destroyed || !e.wrapperEl || I.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", m), !(g || I.detail && I.detail.bySwiperTouchMove) && x());
  }
  const y = () => {
    if (e.destroyed || !e.autoplay.running) return;
    e.autoplay.paused ? w = !0 : w && (p = d, w = !1);
    const I = e.autoplay.paused ? d : f + p - (/* @__PURE__ */ new Date()).getTime();
    e.autoplay.timeLeft = I, r("autoplayTimeLeft", I, I / a), l = requestAnimationFrame(() => {
      y();
    });
  }, $ = () => {
    let I;
    return e.virtual && e.params.virtual.enabled ? I = e.slides.find((N) => N.classList.contains("swiper-slide-active")) : I = e.slides[e.activeIndex], I ? parseInt(I.getAttribute("data-swiper-autoplay"), 10) : void 0;
  }, L = (I) => {
    if (e.destroyed || !e.autoplay.running) return;
    cancelAnimationFrame(l), y();
    let B = typeof I > "u" ? e.params.autoplay.delay : I;
    a = e.params.autoplay.delay, p = e.params.autoplay.delay;
    const N = $();
    !Number.isNaN(N) && N > 0 && typeof I > "u" && (B = N, a = N, p = N), d = B;
    const G = e.params.speed, j = () => {
      !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(G, !0, !0), r("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, G, !0, !0), r("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(G, !0, !0), r("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, G, !0, !0), r("autoplay")), e.params.cssMode && (f = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
        L();
      })));
    };
    return B > 0 ? (clearTimeout(o), o = setTimeout(() => {
      j();
    }, B)) : requestAnimationFrame(() => {
      j();
    }), B;
  }, A = () => {
    f = (/* @__PURE__ */ new Date()).getTime(), e.autoplay.running = !0, L(), r("autoplayStart");
  }, C = () => {
    e.autoplay.running = !1, clearTimeout(o), cancelAnimationFrame(l), r("autoplayStop");
  }, S = (I, B) => {
    if (e.destroyed || !e.autoplay.running) return;
    clearTimeout(o), I || (v = !0);
    const N = () => {
      r("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", m) : x();
    };
    if (e.autoplay.paused = !0, B) {
      b && (d = e.params.autoplay.delay), b = !1, N();
      return;
    }
    d = (d || e.params.autoplay.delay) - ((/* @__PURE__ */ new Date()).getTime() - f), !(e.isEnd && d < 0 && !e.params.loop) && (d < 0 && (d = 0), N());
  }, x = () => {
    e.isEnd && d < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (f = (/* @__PURE__ */ new Date()).getTime(), v ? (v = !1, L(d)) : L(), e.autoplay.paused = !1, r("autoplayResume"));
  }, P = () => {
    if (e.destroyed || !e.autoplay.running) return;
    const I = X();
    I.visibilityState === "hidden" && (v = !0, S(!0)), I.visibilityState === "visible" && x();
  }, T = (I) => {
    I.pointerType === "mouse" && (v = !0, g = !0, !(e.animating || e.autoplay.paused) && S(!0));
  }, E = (I) => {
    I.pointerType === "mouse" && (g = !1, e.autoplay.paused && x());
  }, M = () => {
    e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", T), e.el.addEventListener("pointerleave", E));
  }, k = () => {
    e.el && typeof e.el != "string" && (e.el.removeEventListener("pointerenter", T), e.el.removeEventListener("pointerleave", E));
  }, R = () => {
    X().addEventListener("visibilitychange", P);
  }, z = () => {
    X().removeEventListener("visibilitychange", P);
  };
  i("init", () => {
    e.params.autoplay.enabled && (M(), R(), A());
  }), i("destroy", () => {
    k(), z(), e.autoplay.running && C();
  }), i("_freeModeStaticRelease", () => {
    (c || v) && x();
  }), i("_freeModeNoMomentumRelease", () => {
    e.params.autoplay.disableOnInteraction ? C() : S(!0, !0);
  }), i("beforeTransitionStart", (I, B, N) => {
    e.destroyed || !e.autoplay.running || (N || !e.params.autoplay.disableOnInteraction ? S(!0, !0) : C());
  }), i("sliderFirstMove", () => {
    if (!(e.destroyed || !e.autoplay.running)) {
      if (e.params.autoplay.disableOnInteraction) {
        C();
        return;
      }
      h = !0, c = !1, v = !1, u = setTimeout(() => {
        v = !0, c = !0, S(!0);
      }, 200);
    }
  }), i("touchEnd", () => {
    if (!(e.destroyed || !e.autoplay.running || !h)) {
      if (clearTimeout(u), clearTimeout(o), e.params.autoplay.disableOnInteraction) {
        c = !1, h = !1;
        return;
      }
      c && e.params.cssMode && x(), c = !1, h = !1;
    }
  }), i("slideChange", () => {
    e.destroyed || !e.autoplay.running || (b = !0);
  }), Object.assign(e.autoplay, {
    start: A,
    stop: C,
    pause: S,
    resume: x
  });
}
function Ca(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = s;
  t({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs"
    }
  });
  let r = !1, n = !1;
  e.thumbs = {
    swiper: null
  };
  function o() {
    const p = e.thumbs.swiper;
    if (!p || p.destroyed) return;
    const d = p.clickedIndex, f = p.clickedSlide;
    if (f && f.classList.contains(e.params.thumbs.slideThumbActiveClass) || typeof d > "u" || d === null) return;
    let w;
    p.params.loop ? w = parseInt(p.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : w = d, e.params.loop ? e.slideToLoop(w) : e.slideTo(w);
  }
  function l() {
    const {
      thumbs: p
    } = e.params;
    if (r) return !1;
    r = !0;
    const d = e.constructor;
    if (p.swiper instanceof d) {
      if (p.swiper.destroyed)
        return r = !1, !1;
      e.thumbs.swiper = p.swiper, Object.assign(e.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(e.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), e.thumbs.swiper.update();
    } else if (qe(p.swiper)) {
      const f = Object.assign({}, p.swiper);
      Object.assign(f, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), e.thumbs.swiper = new d(f), n = !0;
    }
    return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", o), !0;
  }
  function a(p) {
    const d = e.thumbs.swiper;
    if (!d || d.destroyed) return;
    const f = d.params.slidesPerView === "auto" ? d.slidesPerViewDynamic() : d.params.slidesPerView;
    let w = 1;
    const h = e.params.thumbs.slideThumbActiveClass;
    if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (w = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (w = 1), w = Math.floor(w), d.slides.forEach((b) => b.classList.remove(h)), d.params.loop || d.params.virtual && d.params.virtual.enabled)
      for (let b = 0; b < w; b += 1)
        U(d.slidesEl, `[data-swiper-slide-index="${e.realIndex + b}"]`).forEach((v) => {
          v.classList.add(h);
        });
    else
      for (let b = 0; b < w; b += 1)
        d.slides[e.realIndex + b] && d.slides[e.realIndex + b].classList.add(h);
    const c = e.params.thumbs.autoScrollOffset, u = c && !d.params.loop;
    if (e.realIndex !== d.realIndex || u) {
      const b = d.activeIndex;
      let v, g;
      if (d.params.loop) {
        const m = d.slides.find((y) => y.getAttribute("data-swiper-slide-index") === `${e.realIndex}`);
        v = d.slides.indexOf(m), g = e.activeIndex > e.previousIndex ? "next" : "prev";
      } else
        v = e.realIndex, g = v > e.previousIndex ? "next" : "prev";
      u && (v += g === "next" ? c : -1 * c), d.visibleSlidesIndexes && d.visibleSlidesIndexes.indexOf(v) < 0 && (d.params.centeredSlides ? v > b ? v = v - Math.floor(f / 2) + 1 : v = v + Math.floor(f / 2) - 1 : v > b && d.params.slidesPerGroup, d.slideTo(v, p ? 0 : void 0));
    }
  }
  i("beforeInit", () => {
    const {
      thumbs: p
    } = e.params;
    if (!(!p || !p.swiper))
      if (typeof p.swiper == "string" || p.swiper instanceof HTMLElement) {
        const d = X(), f = () => {
          const h = typeof p.swiper == "string" ? d.querySelector(p.swiper) : p.swiper;
          if (h && h.swiper)
            p.swiper = h.swiper, l(), a(!0);
          else if (h) {
            const c = `${e.params.eventsPrefix}init`, u = (b) => {
              p.swiper = b.detail[0], h.removeEventListener(c, u), l(), a(!0), p.swiper.update(), e.update();
            };
            h.addEventListener(c, u);
          }
          return h;
        }, w = () => {
          if (e.destroyed) return;
          f() || requestAnimationFrame(w);
        };
        requestAnimationFrame(w);
      } else
        l(), a(!0);
  }), i("slideChange update resize observerUpdate", () => {
    a();
  }), i("setTransition", (p, d) => {
    const f = e.thumbs.swiper;
    !f || f.destroyed || f.setTransition(d);
  }), i("beforeDestroy", () => {
    const p = e.thumbs.swiper;
    !p || p.destroyed || n && p.destroy();
  }), Object.assign(e.thumbs, {
    init: l,
    update: a
  });
}
function Pa(s) {
  let {
    swiper: e,
    extendParams: t,
    emit: i,
    once: r
  } = s;
  t({
    freeMode: {
      enabled: !1,
      momentum: !0,
      momentumRatio: 1,
      momentumBounce: !0,
      momentumBounceRatio: 1,
      momentumVelocityRatio: 1,
      sticky: !1,
      minimumVelocity: 0.02
    }
  });
  function n() {
    if (e.params.cssMode) return;
    const a = e.getTranslate();
    e.setTranslate(a), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({
      currentPos: e.rtl ? e.translate : -e.translate
    });
  }
  function o() {
    if (e.params.cssMode) return;
    const {
      touchEventsData: a,
      touches: p
    } = e;
    a.velocities.length === 0 && a.velocities.push({
      position: p[e.isHorizontal() ? "startX" : "startY"],
      time: a.touchStartTime
    }), a.velocities.push({
      position: p[e.isHorizontal() ? "currentX" : "currentY"],
      time: te()
    });
  }
  function l(a) {
    let {
      currentPos: p
    } = a;
    if (e.params.cssMode) return;
    const {
      params: d,
      wrapperEl: f,
      rtlTranslate: w,
      snapGrid: h,
      touchEventsData: c
    } = e, b = te() - c.touchStartTime;
    if (p < -e.minTranslate()) {
      e.slideTo(e.activeIndex);
      return;
    }
    if (p > -e.maxTranslate()) {
      e.slides.length < h.length ? e.slideTo(h.length - 1) : e.slideTo(e.slides.length - 1);
      return;
    }
    if (d.freeMode.momentum) {
      if (c.velocities.length > 1) {
        const C = c.velocities.pop(), S = c.velocities.pop(), x = C.position - S.position, P = C.time - S.time;
        e.velocity = x / P, e.velocity /= 2, Math.abs(e.velocity) < d.freeMode.minimumVelocity && (e.velocity = 0), (P > 150 || te() - C.time > 300) && (e.velocity = 0);
      } else
        e.velocity = 0;
      e.velocity *= d.freeMode.momentumVelocityRatio, c.velocities.length = 0;
      let v = 1e3 * d.freeMode.momentumRatio;
      const g = e.velocity * v;
      let m = e.translate + g;
      w && (m = -m);
      let y = !1, $;
      const L = Math.abs(e.velocity) * 20 * d.freeMode.momentumBounceRatio;
      let A;
      if (m < e.maxTranslate())
        d.freeMode.momentumBounce ? (m + e.maxTranslate() < -L && (m = e.maxTranslate() - L), $ = e.maxTranslate(), y = !0, c.allowMomentumBounce = !0) : m = e.maxTranslate(), d.loop && d.centeredSlides && (A = !0);
      else if (m > e.minTranslate())
        d.freeMode.momentumBounce ? (m - e.minTranslate() > L && (m = e.minTranslate() + L), $ = e.minTranslate(), y = !0, c.allowMomentumBounce = !0) : m = e.minTranslate(), d.loop && d.centeredSlides && (A = !0);
      else if (d.freeMode.sticky) {
        let C;
        for (let S = 0; S < h.length; S += 1)
          if (h[S] > -m) {
            C = S;
            break;
          }
        Math.abs(h[C] - m) < Math.abs(h[C - 1] - m) || e.swipeDirection === "next" ? m = h[C] : m = h[C - 1], m = -m;
      }
      if (A && r("transitionEnd", () => {
        e.loopFix();
      }), e.velocity !== 0) {
        if (w ? v = Math.abs((-m - e.translate) / e.velocity) : v = Math.abs((m - e.translate) / e.velocity), d.freeMode.sticky) {
          const C = Math.abs((w ? -m : m) - e.translate), S = e.slidesSizesGrid[e.activeIndex];
          C < S ? v = d.speed : C < 2 * S ? v = d.speed * 1.5 : v = d.speed * 2.5;
        }
      } else if (d.freeMode.sticky) {
        e.slideToClosest();
        return;
      }
      d.freeMode.momentumBounce && y ? (e.updateProgress($), e.setTransition(v), e.setTranslate(m), e.transitionStart(!0, e.swipeDirection), e.animating = !0, Ye(f, () => {
        !e || e.destroyed || !c.allowMomentumBounce || (i("momentumBounce"), e.setTransition(d.speed), setTimeout(() => {
          e.setTranslate($), Ye(f, () => {
            !e || e.destroyed || e.transitionEnd();
          });
        }, 0));
      })) : e.velocity ? (i("_freeModeNoMomentumRelease"), e.updateProgress(m), e.setTransition(v), e.setTranslate(m), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, Ye(f, () => {
        !e || e.destroyed || e.transitionEnd();
      }))) : e.updateProgress(m), e.updateActiveIndex(), e.updateSlidesClasses();
    } else if (d.freeMode.sticky) {
      e.slideToClosest();
      return;
    } else d.freeMode && i("_freeModeNoMomentumRelease");
    (!d.freeMode.momentum || b >= d.longSwipesMs) && (i("_freeModeStaticRelease"), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses());
  }
  Object.assign(e, {
    freeMode: {
      onTouchStart: n,
      onTouchMove: o,
      onTouchEnd: l
    }
  });
}
function Aa(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = s;
  t({
    grid: {
      rows: 1,
      fill: "column"
    }
  });
  let r, n, o, l;
  const a = () => {
    let u = e.params.spaceBetween;
    return typeof u == "string" && u.indexOf("%") >= 0 ? u = parseFloat(u.replace("%", "")) / 100 * e.size : typeof u == "string" && (u = parseFloat(u)), u;
  }, p = (u) => {
    const {
      slidesPerView: b
    } = e.params, {
      rows: v,
      fill: g
    } = e.params.grid, m = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : u.length;
    o = Math.floor(m / v), Math.floor(m / v) === m / v ? r = m : r = Math.ceil(m / v) * v, b !== "auto" && g === "row" && (r = Math.max(r, b * v)), n = r / v;
  }, d = () => {
    e.slides && e.slides.forEach((u) => {
      u.swiperSlideGridSet && (u.style.height = "", u.style[e.getDirectionLabel("margin-top")] = "");
    });
  }, f = (u, b, v) => {
    const {
      slidesPerGroup: g
    } = e.params, m = a(), {
      rows: y,
      fill: $
    } = e.params.grid, L = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : v.length;
    let A, C, S;
    if ($ === "row" && g > 1) {
      const x = Math.floor(u / (g * y)), P = u - y * g * x, T = x === 0 ? g : Math.min(Math.ceil((L - x * y * g) / y), g);
      S = Math.floor(P / T), C = P - S * T + x * g, A = C + S * r / y, b.style.order = A;
    } else $ === "column" ? (C = Math.floor(u / y), S = u - C * y, (C > o || C === o && S === y - 1) && (S += 1, S >= y && (S = 0, C += 1))) : (S = Math.floor(u / n), C = u - S * n);
    b.row = S, b.column = C, b.style.height = `calc((100% - ${(y - 1) * m}px) / ${y})`, b.style[e.getDirectionLabel("margin-top")] = S !== 0 ? m && `${m}px` : "", b.swiperSlideGridSet = !0;
  }, w = (u, b) => {
    const {
      centeredSlides: v,
      roundLengths: g
    } = e.params, m = a(), {
      rows: y
    } = e.params.grid;
    if (e.virtualSize = (u + m) * r, e.virtualSize = Math.ceil(e.virtualSize / y) - m, e.params.cssMode || (e.wrapperEl.style[e.getDirectionLabel("width")] = `${e.virtualSize + m}px`), v) {
      const $ = [];
      for (let L = 0; L < b.length; L += 1) {
        let A = b[L];
        g && (A = Math.floor(A)), b[L] < e.virtualSize + b[0] && $.push(A);
      }
      b.splice(0, b.length), b.push(...$);
    }
  }, h = () => {
    l = e.params.grid && e.params.grid.rows > 1;
  }, c = () => {
    const {
      params: u,
      el: b
    } = e, v = u.grid && u.grid.rows > 1;
    l && !v ? (b.classList.remove(`${u.containerModifierClass}grid`, `${u.containerModifierClass}grid-column`), o = 1, e.emitContainerClasses()) : !l && v && (b.classList.add(`${u.containerModifierClass}grid`), u.grid.fill === "column" && b.classList.add(`${u.containerModifierClass}grid-column`), e.emitContainerClasses()), l = v;
  };
  i("init", h), i("update", c), e.grid = {
    initSlides: p,
    unsetSlides: d,
    updateSlide: f,
    updateWrapperSize: w
  };
}
function $a(s) {
  const e = this, {
    params: t,
    slidesEl: i
  } = e;
  t.loop && e.loopDestroy();
  const r = (n) => {
    if (typeof n == "string") {
      const o = document.createElement("div");
      o.innerHTML = n, i.append(o.children[0]), o.innerHTML = "";
    } else
      i.append(n);
  };
  if (typeof s == "object" && "length" in s)
    for (let n = 0; n < s.length; n += 1)
      s[n] && r(s[n]);
  else
    r(s);
  e.recalcSlides(), t.loop && e.loopCreate(), (!t.observer || e.isElement) && e.update();
}
function La(s) {
  const e = this, {
    params: t,
    activeIndex: i,
    slidesEl: r
  } = e;
  t.loop && e.loopDestroy();
  let n = i + 1;
  const o = (l) => {
    if (typeof l == "string") {
      const a = document.createElement("div");
      a.innerHTML = l, r.prepend(a.children[0]), a.innerHTML = "";
    } else
      r.prepend(l);
  };
  if (typeof s == "object" && "length" in s) {
    for (let l = 0; l < s.length; l += 1)
      s[l] && o(s[l]);
    n = i + s.length;
  } else
    o(s);
  e.recalcSlides(), t.loop && e.loopCreate(), (!t.observer || e.isElement) && e.update(), e.slideTo(n, 0, !1);
}
function za(s, e) {
  const t = this, {
    params: i,
    activeIndex: r,
    slidesEl: n
  } = t;
  let o = r;
  i.loop && (o -= t.loopedSlides, t.loopDestroy(), t.recalcSlides());
  const l = t.slides.length;
  if (s <= 0) {
    t.prependSlide(e);
    return;
  }
  if (s >= l) {
    t.appendSlide(e);
    return;
  }
  let a = o > s ? o + 1 : o;
  const p = [];
  for (let d = l - 1; d >= s; d -= 1) {
    const f = t.slides[d];
    f.remove(), p.unshift(f);
  }
  if (typeof e == "object" && "length" in e) {
    for (let d = 0; d < e.length; d += 1)
      e[d] && n.append(e[d]);
    a = o > s ? o + e.length : o;
  } else
    n.append(e);
  for (let d = 0; d < p.length; d += 1)
    n.append(p[d]);
  t.recalcSlides(), i.loop && t.loopCreate(), (!i.observer || t.isElement) && t.update(), i.loop ? t.slideTo(a + t.loopedSlides, 0, !1) : t.slideTo(a, 0, !1);
}
function Ia(s) {
  const e = this, {
    params: t,
    activeIndex: i
  } = e;
  let r = i;
  t.loop && (r -= e.loopedSlides, e.loopDestroy());
  let n = r, o;
  if (typeof s == "object" && "length" in s) {
    for (let l = 0; l < s.length; l += 1)
      o = s[l], e.slides[o] && e.slides[o].remove(), o < n && (n -= 1);
    n = Math.max(n, 0);
  } else
    o = s, e.slides[o] && e.slides[o].remove(), o < n && (n -= 1), n = Math.max(n, 0);
  e.recalcSlides(), t.loop && e.loopCreate(), (!t.observer || e.isElement) && e.update(), t.loop ? e.slideTo(n + e.loopedSlides, 0, !1) : e.slideTo(n, 0, !1);
}
function ka() {
  const s = this, e = [];
  for (let t = 0; t < s.slides.length; t += 1)
    e.push(t);
  s.removeSlide(e);
}
function _a(s) {
  let {
    swiper: e
  } = s;
  Object.assign(e, {
    appendSlide: $a.bind(e),
    prependSlide: La.bind(e),
    addSlide: za.bind(e),
    removeSlide: Ia.bind(e),
    removeAllSlides: ka.bind(e)
  });
}
function _e(s) {
  const {
    effect: e,
    swiper: t,
    on: i,
    setTranslate: r,
    setTransition: n,
    overwriteParams: o,
    perspective: l,
    recreateShadows: a,
    getEffectParams: p
  } = s;
  i("beforeInit", () => {
    if (t.params.effect !== e) return;
    t.classNames.push(`${t.params.containerModifierClass}${e}`), l && l() && t.classNames.push(`${t.params.containerModifierClass}3d`);
    const f = o ? o() : {};
    Object.assign(t.params, f), Object.assign(t.originalParams, f);
  }), i("setTranslate", () => {
    t.params.effect === e && r();
  }), i("setTransition", (f, w) => {
    t.params.effect === e && n(w);
  }), i("transitionEnd", () => {
    if (t.params.effect === e && a) {
      if (!p || !p().slideShadows) return;
      t.slides.forEach((f) => {
        f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((w) => w.remove());
      }), a();
    }
  });
  let d;
  i("virtualUpdate", () => {
    t.params.effect === e && (t.slides.length || (d = !0), requestAnimationFrame(() => {
      d && t.slides && t.slides.length && (r(), d = !1);
    }));
  });
}
function Qe(s, e) {
  const t = Te(e);
  return t !== e && (t.style.backfaceVisibility = "hidden", t.style["-webkit-backface-visibility"] = "hidden"), t;
}
function gt(s) {
  let {
    swiper: e,
    duration: t,
    transformElements: i,
    allSlides: r
  } = s;
  const {
    activeIndex: n
  } = e, o = (l) => l.parentElement ? l.parentElement : e.slides.find((p) => p.shadowRoot && p.shadowRoot === l.parentNode);
  if (e.params.virtualTranslate && t !== 0) {
    let l = !1, a;
    r ? a = i : a = i.filter((p) => {
      const d = p.classList.contains("swiper-slide-transform") ? o(p) : p;
      return e.getSlideIndex(d) === n;
    }), a.forEach((p) => {
      Ye(p, () => {
        if (l || !e || e.destroyed) return;
        l = !0, e.animating = !1;
        const d = new window.CustomEvent("transitionend", {
          bubbles: !0,
          cancelable: !0
        });
        e.wrapperEl.dispatchEvent(d);
      });
    });
  }
}
function Oa(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = s;
  t({
    fadeEffect: {
      crossFade: !1
    }
  }), _e({
    effect: "fade",
    swiper: e,
    on: i,
    setTranslate: () => {
      const {
        slides: o
      } = e, l = e.params.fadeEffect;
      for (let a = 0; a < o.length; a += 1) {
        const p = e.slides[a];
        let f = -p.swiperSlideOffset;
        e.params.virtualTranslate || (f -= e.translate);
        let w = 0;
        e.isHorizontal() || (w = f, f = 0);
        const h = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(p.progress), 0) : 1 + Math.min(Math.max(p.progress, -1), 0), c = Qe(l, p);
        c.style.opacity = h, c.style.transform = `translate3d(${f}px, ${w}px, 0px)`;
      }
    },
    setTransition: (o) => {
      const l = e.slides.map((a) => Te(a));
      l.forEach((a) => {
        a.style.transitionDuration = `${o}ms`;
      }), gt({
        swiper: e,
        duration: o,
        transformElements: l,
        allSlides: !0
      });
    },
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !e.params.cssMode
    })
  });
}
function Da(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = s;
  t({
    cubeEffect: {
      slideShadows: !0,
      shadow: !0,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const r = (a, p, d) => {
    let f = d ? a.querySelector(".swiper-slide-shadow-left") : a.querySelector(".swiper-slide-shadow-top"), w = d ? a.querySelector(".swiper-slide-shadow-right") : a.querySelector(".swiper-slide-shadow-bottom");
    f || (f = Z("div", `swiper-slide-shadow-cube swiper-slide-shadow-${d ? "left" : "top"}`.split(" ")), a.append(f)), w || (w = Z("div", `swiper-slide-shadow-cube swiper-slide-shadow-${d ? "right" : "bottom"}`.split(" ")), a.append(w)), f && (f.style.opacity = Math.max(-p, 0)), w && (w.style.opacity = Math.max(p, 0));
  };
  _e({
    effect: "cube",
    swiper: e,
    on: i,
    setTranslate: () => {
      const {
        el: a,
        wrapperEl: p,
        slides: d,
        width: f,
        height: w,
        rtlTranslate: h,
        size: c,
        browser: u
      } = e, b = mt(e), v = e.params.cubeEffect, g = e.isHorizontal(), m = e.virtual && e.params.virtual.enabled;
      let y = 0, $;
      v.shadow && (g ? ($ = e.wrapperEl.querySelector(".swiper-cube-shadow"), $ || ($ = Z("div", "swiper-cube-shadow"), e.wrapperEl.append($)), $.style.height = `${f}px`) : ($ = a.querySelector(".swiper-cube-shadow"), $ || ($ = Z("div", "swiper-cube-shadow"), a.append($))));
      for (let A = 0; A < d.length; A += 1) {
        const C = d[A];
        let S = A;
        m && (S = parseInt(C.getAttribute("data-swiper-slide-index"), 10));
        let x = S * 90, P = Math.floor(x / 360);
        h && (x = -x, P = Math.floor(-x / 360));
        const T = Math.max(Math.min(C.progress, 1), -1);
        let E = 0, M = 0, k = 0;
        S % 4 === 0 ? (E = -P * 4 * c, k = 0) : (S - 1) % 4 === 0 ? (E = 0, k = -P * 4 * c) : (S - 2) % 4 === 0 ? (E = c + P * 4 * c, k = c) : (S - 3) % 4 === 0 && (E = -c, k = 3 * c + c * 4 * P), h && (E = -E), g || (M = E, E = 0);
        const R = `rotateX(${b(g ? 0 : -x)}deg) rotateY(${b(g ? x : 0)}deg) translate3d(${E}px, ${M}px, ${k}px)`;
        T <= 1 && T > -1 && (y = S * 90 + T * 90, h && (y = -S * 90 - T * 90)), C.style.transform = R, v.slideShadows && r(C, T, g);
      }
      if (p.style.transformOrigin = `50% 50% -${c / 2}px`, p.style["-webkit-transform-origin"] = `50% 50% -${c / 2}px`, v.shadow)
        if (g)
          $.style.transform = `translate3d(0px, ${f / 2 + v.shadowOffset}px, ${-f / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${v.shadowScale})`;
        else {
          const A = Math.abs(y) - Math.floor(Math.abs(y) / 90) * 90, C = 1.5 - (Math.sin(A * 2 * Math.PI / 360) / 2 + Math.cos(A * 2 * Math.PI / 360) / 2), S = v.shadowScale, x = v.shadowScale / C, P = v.shadowOffset;
          $.style.transform = `scale3d(${S}, 1, ${x}) translate3d(0px, ${w / 2 + P}px, ${-w / 2 / x}px) rotateX(-89.99deg)`;
        }
      const L = (u.isSafari || u.isWebView) && u.needPerspectiveFix ? -c / 2 : 0;
      p.style.transform = `translate3d(0px,0,${L}px) rotateX(${b(e.isHorizontal() ? 0 : y)}deg) rotateY(${b(e.isHorizontal() ? -y : 0)}deg)`, p.style.setProperty("--swiper-cube-translate-z", `${L}px`);
    },
    setTransition: (a) => {
      const {
        el: p,
        slides: d
      } = e;
      if (d.forEach((f) => {
        f.style.transitionDuration = `${a}ms`, f.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((w) => {
          w.style.transitionDuration = `${a}ms`;
        });
      }), e.params.cubeEffect.shadow && !e.isHorizontal()) {
        const f = p.querySelector(".swiper-cube-shadow");
        f && (f.style.transitionDuration = `${a}ms`);
      }
    },
    recreateShadows: () => {
      const a = e.isHorizontal();
      e.slides.forEach((p) => {
        const d = Math.max(Math.min(p.progress, 1), -1);
        r(p, d, a);
      });
    },
    getEffectParams: () => e.params.cubeEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      resistanceRatio: 0,
      spaceBetween: 0,
      centeredSlides: !1,
      virtualTranslate: !0
    })
  });
}
function Ie(s, e, t) {
  const i = `swiper-slide-shadow${t ? `-${t}` : ""}${s ? ` swiper-slide-shadow-${s}` : ""}`, r = Te(e);
  let n = r.querySelector(`.${i.split(" ").join(".")}`);
  return n || (n = Z("div", i.split(" ")), r.append(n)), n;
}
function Ba(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = s;
  t({
    flipEffect: {
      slideShadows: !0,
      limitRotation: !0
    }
  });
  const r = (a, p) => {
    let d = e.isHorizontal() ? a.querySelector(".swiper-slide-shadow-left") : a.querySelector(".swiper-slide-shadow-top"), f = e.isHorizontal() ? a.querySelector(".swiper-slide-shadow-right") : a.querySelector(".swiper-slide-shadow-bottom");
    d || (d = Ie("flip", a, e.isHorizontal() ? "left" : "top")), f || (f = Ie("flip", a, e.isHorizontal() ? "right" : "bottom")), d && (d.style.opacity = Math.max(-p, 0)), f && (f.style.opacity = Math.max(p, 0));
  };
  _e({
    effect: "flip",
    swiper: e,
    on: i,
    setTranslate: () => {
      const {
        slides: a,
        rtlTranslate: p
      } = e, d = e.params.flipEffect, f = mt(e);
      for (let w = 0; w < a.length; w += 1) {
        const h = a[w];
        let c = h.progress;
        e.params.flipEffect.limitRotation && (c = Math.max(Math.min(h.progress, 1), -1));
        const u = h.swiperSlideOffset;
        let v = -180 * c, g = 0, m = e.params.cssMode ? -u - e.translate : -u, y = 0;
        e.isHorizontal() ? p && (v = -v) : (y = m, m = 0, g = -v, v = 0), h.style.zIndex = -Math.abs(Math.round(c)) + a.length, d.slideShadows && r(h, c);
        const $ = `translate3d(${m}px, ${y}px, 0px) rotateX(${f(g)}deg) rotateY(${f(v)}deg)`, L = Qe(d, h);
        L.style.transform = $;
      }
    },
    setTransition: (a) => {
      const p = e.slides.map((d) => Te(d));
      p.forEach((d) => {
        d.style.transitionDuration = `${a}ms`, d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((f) => {
          f.style.transitionDuration = `${a}ms`;
        });
      }), gt({
        swiper: e,
        duration: a,
        transformElements: p
      });
    },
    recreateShadows: () => {
      e.params.flipEffect, e.slides.forEach((a) => {
        let p = a.progress;
        e.params.flipEffect.limitRotation && (p = Math.max(Math.min(a.progress, 1), -1)), r(a, p);
      });
    },
    getEffectParams: () => e.params.flipEffect,
    perspective: () => !0,
    overwriteParams: () => ({
      slidesPerView: 1,
      slidesPerGroup: 1,
      watchSlidesProgress: !0,
      spaceBetween: 0,
      virtualTranslate: !e.params.cssMode
    })
  });
}
function Ra(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = s;
  t({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0
    }
  }), _e({
    effect: "coverflow",
    swiper: e,
    on: i,
    setTranslate: () => {
      const {
        width: o,
        height: l,
        slides: a,
        slidesSizesGrid: p
      } = e, d = e.params.coverflowEffect, f = e.isHorizontal(), w = e.translate, h = f ? -w + o / 2 : -w + l / 2, c = f ? d.rotate : -d.rotate, u = d.depth, b = mt(e);
      for (let v = 0, g = a.length; v < g; v += 1) {
        const m = a[v], y = p[v], $ = m.swiperSlideOffset, L = (h - $ - y / 2) / y, A = typeof d.modifier == "function" ? d.modifier(L) : L * d.modifier;
        let C = f ? c * A : 0, S = f ? 0 : c * A, x = -u * Math.abs(A), P = d.stretch;
        typeof P == "string" && P.indexOf("%") !== -1 && (P = parseFloat(d.stretch) / 100 * y);
        let T = f ? 0 : P * A, E = f ? P * A : 0, M = 1 - (1 - d.scale) * Math.abs(A);
        Math.abs(E) < 1e-3 && (E = 0), Math.abs(T) < 1e-3 && (T = 0), Math.abs(x) < 1e-3 && (x = 0), Math.abs(C) < 1e-3 && (C = 0), Math.abs(S) < 1e-3 && (S = 0), Math.abs(M) < 1e-3 && (M = 0);
        const k = `translate3d(${E}px,${T}px,${x}px)  rotateX(${b(S)}deg) rotateY(${b(C)}deg) scale(${M})`, R = Qe(d, m);
        if (R.style.transform = k, m.style.zIndex = -Math.abs(Math.round(A)) + 1, d.slideShadows) {
          let z = f ? m.querySelector(".swiper-slide-shadow-left") : m.querySelector(".swiper-slide-shadow-top"), I = f ? m.querySelector(".swiper-slide-shadow-right") : m.querySelector(".swiper-slide-shadow-bottom");
          z || (z = Ie("coverflow", m, f ? "left" : "top")), I || (I = Ie("coverflow", m, f ? "right" : "bottom")), z && (z.style.opacity = A > 0 ? A : 0), I && (I.style.opacity = -A > 0 ? -A : 0);
        }
      }
    },
    setTransition: (o) => {
      e.slides.map((a) => Te(a)).forEach((a) => {
        a.style.transitionDuration = `${o}ms`, a.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((p) => {
          p.style.transitionDuration = `${o}ms`;
        });
      });
    },
    perspective: () => !0,
    overwriteParams: () => ({
      watchSlidesProgress: !0
    })
  });
}
function Na(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = s;
  t({
    creativeEffect: {
      limitProgress: 1,
      shadowPerProgress: !1,
      progressMultiplier: 1,
      perspective: !0,
      prev: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      },
      next: {
        translate: [0, 0, 0],
        rotate: [0, 0, 0],
        opacity: 1,
        scale: 1
      }
    }
  });
  const r = (l) => typeof l == "string" ? l : `${l}px`;
  _e({
    effect: "creative",
    swiper: e,
    on: i,
    setTranslate: () => {
      const {
        slides: l,
        wrapperEl: a,
        slidesSizesGrid: p
      } = e, d = e.params.creativeEffect, {
        progressMultiplier: f
      } = d, w = e.params.centeredSlides, h = mt(e);
      if (w) {
        const c = p[0] / 2 - e.params.slidesOffsetBefore || 0;
        a.style.transform = `translateX(calc(50% - ${c}px))`;
      }
      for (let c = 0; c < l.length; c += 1) {
        const u = l[c], b = u.progress, v = Math.min(Math.max(u.progress, -d.limitProgress), d.limitProgress);
        let g = v;
        w || (g = Math.min(Math.max(u.originalProgress, -d.limitProgress), d.limitProgress));
        const m = u.swiperSlideOffset, y = [e.params.cssMode ? -m - e.translate : -m, 0, 0], $ = [0, 0, 0];
        let L = !1;
        e.isHorizontal() || (y[1] = y[0], y[0] = 0);
        let A = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        v < 0 ? (A = d.next, L = !0) : v > 0 && (A = d.prev, L = !0), y.forEach((M, k) => {
          y[k] = `calc(${M}px + (${r(A.translate[k])} * ${Math.abs(v * f)}))`;
        }), $.forEach((M, k) => {
          let R = A.rotate[k] * Math.abs(v * f);
          $[k] = R;
        }), u.style.zIndex = -Math.abs(Math.round(b)) + l.length;
        const C = y.join(", "), S = `rotateX(${h($[0])}deg) rotateY(${h($[1])}deg) rotateZ(${h($[2])}deg)`, x = g < 0 ? `scale(${1 + (1 - A.scale) * g * f})` : `scale(${1 - (1 - A.scale) * g * f})`, P = g < 0 ? 1 + (1 - A.opacity) * g * f : 1 - (1 - A.opacity) * g * f, T = `translate3d(${C}) ${S} ${x}`;
        if (L && A.shadow || !L) {
          let M = u.querySelector(".swiper-slide-shadow");
          if (!M && A.shadow && (M = Ie("creative", u)), M) {
            const k = d.shadowPerProgress ? v * (1 / d.limitProgress) : v;
            M.style.opacity = Math.min(Math.max(Math.abs(k), 0), 1);
          }
        }
        const E = Qe(d, u);
        E.style.transform = T, E.style.opacity = P, A.origin && (E.style.transformOrigin = A.origin);
      }
    },
    setTransition: (l) => {
      const a = e.slides.map((p) => Te(p));
      a.forEach((p) => {
        p.style.transitionDuration = `${l}ms`, p.querySelectorAll(".swiper-slide-shadow").forEach((d) => {
          d.style.transitionDuration = `${l}ms`;
        });
      }), gt({
        swiper: e,
        duration: l,
        transformElements: a,
        allSlides: !0
      });
    },
    perspective: () => e.params.creativeEffect.perspective,
    overwriteParams: () => ({
      watchSlidesProgress: !0,
      virtualTranslate: !e.params.cssMode
    })
  });
}
function Ha(s) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = s;
  t({
    cardsEffect: {
      slideShadows: !0,
      rotate: !0,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  }), _e({
    effect: "cards",
    swiper: e,
    on: i,
    setTranslate: () => {
      const {
        slides: o,
        activeIndex: l,
        rtlTranslate: a
      } = e, p = e.params.cardsEffect, {
        startTranslate: d,
        isTouched: f
      } = e.touchEventsData, w = a ? -e.translate : e.translate;
      for (let h = 0; h < o.length; h += 1) {
        const c = o[h], u = c.progress, b = Math.min(Math.max(u, -4), 4);
        let v = c.swiperSlideOffset;
        e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (v -= o[0].swiperSlideOffset);
        let g = e.params.cssMode ? -v - e.translate : -v, m = 0;
        const y = -100 * Math.abs(b);
        let $ = 1, L = -p.perSlideRotate * b, A = p.perSlideOffset - Math.abs(b) * 0.75;
        const C = e.virtual && e.params.virtual.enabled ? e.virtual.from + h : h, S = (C === l || C === l - 1) && b > 0 && b < 1 && (f || e.params.cssMode) && w < d, x = (C === l || C === l + 1) && b < 0 && b > -1 && (f || e.params.cssMode) && w > d;
        if (S || x) {
          const M = (1 - Math.abs((Math.abs(b) - 0.5) / 0.5)) ** 0.5;
          L += -28 * b * M, $ += -0.5 * M, A += 96 * M, m = `${-25 * M * Math.abs(b)}%`;
        }
        if (b < 0 ? g = `calc(${g}px ${a ? "-" : "+"} (${A * Math.abs(b)}%))` : b > 0 ? g = `calc(${g}px ${a ? "-" : "+"} (-${A * Math.abs(b)}%))` : g = `${g}px`, !e.isHorizontal()) {
          const M = m;
          m = g, g = M;
        }
        const P = b < 0 ? `${1 + (1 - $) * b}` : `${1 - (1 - $) * b}`, T = `
        translate3d(${g}, ${m}, ${y}px)
        rotateZ(${p.rotate ? a ? -L : L : 0}deg)
        scale(${P})
      `;
        if (p.slideShadows) {
          let M = c.querySelector(".swiper-slide-shadow");
          M || (M = Ie("cards", c)), M && (M.style.opacity = Math.min(Math.max((Math.abs(b) - 0.5) / 0.5, 0), 1));
        }
        c.style.zIndex = -Math.abs(Math.round(u)) + o.length;
        const E = Qe(p, c);
        E.style.transform = T;
      }
    },
    setTransition: (o) => {
      const l = e.slides.map((a) => Te(a));
      l.forEach((a) => {
        a.style.transitionDuration = `${o}ms`, a.querySelectorAll(".swiper-slide-shadow").forEach((p) => {
          p.style.transitionDuration = `${o}ms`;
        });
      }), gt({
        swiper: e,
        duration: o,
        transformElements: l
      });
    },
    perspective: () => !0,
    overwriteParams: () => ({
      _loopSwapReset: !1,
      watchSlidesProgress: !0,
      loopAdditionalSlides: 3,
      centeredSlides: !0,
      virtualTranslate: !e.params.cssMode
    })
  });
}
const qa = [fa, ha, ma, ga, wa, va, ba, ya, Sa, Ea, xa, Ta, Ma, Ca, Pa, Aa, _a, Oa, Da, Ba, Ra, Na, Ha];
J.use(qa);
const wt = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  // modules
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control"
];
function ke(s) {
  return typeof s == "object" && s !== null && s.constructor && Object.prototype.toString.call(s).slice(8, -1) === "Object" && !s.__swiper__;
}
function ci(s, e) {
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter((i) => t.indexOf(i) < 0).forEach((i) => {
    typeof s[i] > "u" ? s[i] = e[i] : ke(e[i]) && ke(s[i]) && Object.keys(e[i]).length > 0 ? e[i].__swiper__ ? s[i] = e[i] : ci(s[i], e[i]) : s[i] = e[i];
  });
}
function Ga(s) {
  return s === void 0 && (s = {}), s.navigation && typeof s.navigation.nextEl > "u" && typeof s.navigation.prevEl > "u";
}
function Fa(s) {
  return s === void 0 && (s = {}), s.pagination && typeof s.pagination.el > "u";
}
function Va(s) {
  return s === void 0 && (s = {}), s.scrollbar && typeof s.scrollbar.el > "u";
}
function ot(s) {
  return s === void 0 && (s = ""), s.replace(/-[a-z]/g, (e) => e.toUpperCase().replace("-", ""));
}
function ja(s) {
  let {
    swiper: e,
    slides: t,
    passedParams: i,
    changedParams: r,
    nextEl: n,
    prevEl: o,
    scrollbarEl: l,
    paginationEl: a
  } = s;
  const p = r.filter((S) => S !== "children" && S !== "direction" && S !== "wrapperClass"), {
    params: d,
    pagination: f,
    navigation: w,
    scrollbar: h,
    virtual: c,
    thumbs: u
  } = e;
  let b, v, g, m, y, $, L, A;
  r.includes("thumbs") && i.thumbs && i.thumbs.swiper && !i.thumbs.swiper.destroyed && d.thumbs && (!d.thumbs.swiper || d.thumbs.swiper.destroyed) && (b = !0), r.includes("controller") && i.controller && i.controller.control && d.controller && !d.controller.control && (v = !0), r.includes("pagination") && i.pagination && (i.pagination.el || a) && (d.pagination || d.pagination === !1) && f && !f.el && (g = !0), r.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || l) && (d.scrollbar || d.scrollbar === !1) && h && !h.el && (m = !0), r.includes("navigation") && i.navigation && (i.navigation.prevEl || o) && (i.navigation.nextEl || n) && (d.navigation || d.navigation === !1) && w && !w.prevEl && !w.nextEl && (y = !0);
  const C = (S) => {
    e[S] && (e[S].destroy(), S === "navigation" ? (e.isElement && (e[S].prevEl.remove(), e[S].nextEl.remove()), d[S].prevEl = void 0, d[S].nextEl = void 0, e[S].prevEl = void 0, e[S].nextEl = void 0) : (e.isElement && e[S].el.remove(), d[S].el = void 0, e[S].el = void 0));
  };
  r.includes("loop") && e.isElement && (d.loop && !i.loop ? $ = !0 : !d.loop && i.loop ? L = !0 : A = !0), p.forEach((S) => {
    if (ke(d[S]) && ke(i[S]))
      Object.assign(d[S], i[S]), (S === "navigation" || S === "pagination" || S === "scrollbar") && "enabled" in i[S] && !i[S].enabled && C(S);
    else {
      const x = i[S];
      (x === !0 || x === !1) && (S === "navigation" || S === "pagination" || S === "scrollbar") ? x === !1 && C(S) : d[S] = i[S];
    }
  }), p.includes("controller") && !v && e.controller && e.controller.control && d.controller && d.controller.control && (e.controller.control = d.controller.control), r.includes("children") && t && c && d.virtual.enabled ? (c.slides = t, c.update(!0)) : r.includes("virtual") && c && d.virtual.enabled && (t && (c.slides = t), c.update(!0)), r.includes("children") && t && d.loop && (A = !0), b && u.init() && u.update(!0), v && (e.controller.control = d.controller.control), g && (e.isElement && (!a || typeof a == "string") && (a = document.createElement("div"), a.classList.add("swiper-pagination"), a.part.add("pagination"), e.el.appendChild(a)), a && (d.pagination.el = a), f.init(), f.render(), f.update()), m && (e.isElement && (!l || typeof l == "string") && (l = document.createElement("div"), l.classList.add("swiper-scrollbar"), l.part.add("scrollbar"), e.el.appendChild(l)), l && (d.scrollbar.el = l), h.init(), h.updateSize(), h.setTranslate()), y && (e.isElement && ((!n || typeof n == "string") && (n = document.createElement("div"), n.classList.add("swiper-button-next"), n.innerHTML = e.hostEl.constructor.nextButtonSvg, n.part.add("button-next"), e.el.appendChild(n)), (!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-button-prev"), o.innerHTML = e.hostEl.constructor.prevButtonSvg, o.part.add("button-prev"), e.el.appendChild(o))), n && (d.navigation.nextEl = n), o && (d.navigation.prevEl = o), w.init(), w.update()), r.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext), r.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev), r.includes("direction") && e.changeDirection(i.direction, !1), ($ || A) && e.loopDestroy(), (L || A) && e.loopCreate(), e.update();
}
const hs = (s) => {
  if (parseFloat(s) === Number(s)) return Number(s);
  if (s === "true" || s === "") return !0;
  if (s === "false") return !1;
  if (s === "null") return null;
  if (s !== "undefined") {
    if (typeof s == "string" && s.includes("{") && s.includes("}") && s.includes('"')) {
      let e;
      try {
        e = JSON.parse(s);
      } catch {
        e = s;
      }
      return e;
    }
    return s;
  }
}, ms = ["a11y", "autoplay", "controller", "cards-effect", "coverflow-effect", "creative-effect", "cube-effect", "fade-effect", "flip-effect", "free-mode", "grid", "hash-navigation", "history", "keyboard", "mousewheel", "navigation", "pagination", "parallax", "scrollbar", "thumbs", "virtual", "zoom"];
function gs(s, e, t) {
  const i = {}, r = {};
  ci(i, di);
  const n = [...wt, "on"], o = n.map((a) => a.replace(/_/, ""));
  n.forEach((a) => {
    a = a.replace("_", ""), typeof s[a] < "u" && (r[a] = s[a]);
  });
  const l = [...s.attributes];
  return typeof e == "string" && typeof t < "u" && l.push({
    name: e,
    value: ke(t) ? {
      ...t
    } : t
  }), l.forEach((a) => {
    const p = ms.find((d) => a.name.startsWith(`${d}-`));
    if (p) {
      const d = ot(p), f = ot(a.name.split(`${p}-`)[1]);
      typeof r[d] > "u" && (r[d] = {}), r[d] === !0 && (r[d] = {
        enabled: !0
      }), r[d][f] = hs(a.value);
    } else {
      const d = ot(a.name);
      if (!o.includes(d)) return;
      const f = hs(a.value);
      r[d] && ms.includes(a.name) && !ke(f) ? (r[d].constructor !== Object && (r[d] = {}), r[d].enabled = !!f) : r[d] = f;
    }
  }), ci(i, r), i.navigation ? i.navigation = {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
    ...i.navigation !== !0 ? i.navigation : {}
  } : i.navigation === !1 && delete i.navigation, i.scrollbar ? i.scrollbar = {
    el: ".swiper-scrollbar",
    ...i.scrollbar !== !0 ? i.scrollbar : {}
  } : i.scrollbar === !1 && delete i.scrollbar, i.pagination ? i.pagination = {
    el: ".swiper-pagination",
    ...i.pagination !== !0 ? i.pagination : {}
  } : i.pagination === !1 && delete i.pagination, {
    params: i,
    passedParams: r
  };
}
const Ya = ":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}", Xa = "::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}";
class Ua {
}
const qs = typeof window > "u" || typeof HTMLElement > "u" ? Ua : HTMLElement, ws = `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>
    `, Gs = (s, e) => {
  if (typeof CSSStyleSheet < "u" && s.adoptedStyleSheets) {
    const t = new CSSStyleSheet();
    t.replaceSync(e), s.adoptedStyleSheets = [t];
  } else {
    const t = document.createElement("style");
    t.rel = "stylesheet", t.textContent = e, s.appendChild(t);
  }
};
class Fs extends qs {
  constructor() {
    super(), this.attachShadow({
      mode: "open"
    });
  }
  static get nextButtonSvg() {
    return ws;
  }
  static get prevButtonSvg() {
    return ws.replace("/></svg>", ' transform-origin="center" transform="rotate(180)"/></svg>');
  }
  cssStyles() {
    return [
      Ya,
      // eslint-disable-line
      ...this.injectStyles && Array.isArray(this.injectStyles) ? this.injectStyles : []
    ].join(`
`);
  }
  cssLinks() {
    return this.injectStylesUrls || [];
  }
  calcSlideSlots() {
    const e = this.slideSlots || 0, t = [...this.querySelectorAll("[slot^=slide-]")].map((i) => parseInt(i.getAttribute("slot").split("slide-")[1], 10));
    if (this.slideSlots = t.length ? Math.max(...t) + 1 : 0, !!this.rendered) {
      if (this.slideSlots > e)
        for (let i = e; i < this.slideSlots; i += 1) {
          const r = document.createElement("swiper-slide");
          r.setAttribute("part", `slide slide-${i + 1}`);
          const n = document.createElement("slot");
          n.setAttribute("name", `slide-${i + 1}`), r.appendChild(n), this.shadowRoot.querySelector(".swiper-wrapper").appendChild(r);
        }
      else if (this.slideSlots < e) {
        const i = this.swiper.slides;
        for (let r = i.length - 1; r >= 0; r -= 1)
          r > this.slideSlots && i[r].remove();
      }
    }
  }
  render() {
    if (this.rendered) return;
    this.calcSlideSlots();
    let e = this.cssStyles();
    this.slideSlots > 0 && (e = e.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1")), e.length && Gs(this.shadowRoot, e), this.cssLinks().forEach((i) => {
      if (this.shadowRoot.querySelector(`link[href="${i}"]`)) return;
      const n = document.createElement("link");
      n.rel = "stylesheet", n.href = i, this.shadowRoot.appendChild(n);
    });
    const t = document.createElement("div");
    t.classList.add("swiper"), t.part = "container", t.innerHTML = `
      <slot name="container-start"></slot>
      <div class="swiper-wrapper" part="wrapper">
        <slot></slot>
        ${Array.from({
      length: this.slideSlots
    }).map((i, r) => `
        <swiper-slide part="slide slide-${r}">
          <slot name="slide-${r}"></slot>
        </swiper-slide>
        `).join("")}
      </div>
      <slot name="container-end"></slot>
      ${Ga(this.passedParams) ? `
        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>
        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>
      ` : ""}
      ${Fa(this.passedParams) ? `
        <div part="pagination" class="swiper-pagination"></div>
      ` : ""}
      ${Va(this.passedParams) ? `
        <div part="scrollbar" class="swiper-scrollbar"></div>
      ` : ""}
    `, this.shadowRoot.appendChild(t), this.rendered = !0;
  }
  initialize() {
    var e = this;
    if (this.swiper && this.swiper.initialized) return;
    const {
      params: t,
      passedParams: i
    } = gs(this);
    this.swiperParams = t, this.passedParams = i, delete this.swiperParams.init, this.render(), this.swiper = new J(this.shadowRoot.querySelector(".swiper"), {
      ...t.virtual ? {} : {
        observer: !0
      },
      ...t,
      touchEventsTarget: "container",
      onAny: function(r) {
        r === "observerUpdate" && e.calcSlideSlots();
        const n = t.eventsPrefix ? `${t.eventsPrefix}${r.toLowerCase()}` : r.toLowerCase();
        for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), a = 1; a < o; a++)
          l[a - 1] = arguments[a];
        const p = new CustomEvent(n, {
          detail: l,
          bubbles: r !== "hashChange",
          cancelable: !0
        });
        e.dispatchEvent(p);
      }
    });
  }
  connectedCallback() {
    this.swiper && this.swiper.initialized && this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM || this.init === !1 || this.getAttribute("init") === "false" || this.initialize();
  }
  disconnectedCallback() {
    this.nested && this.closest("swiper-slide") && this.closest("swiper-slide").swiperLoopMoveDOM || this.swiper && this.swiper.destroy && this.swiper.destroy();
  }
  updateSwiperOnPropChange(e, t) {
    const {
      params: i,
      passedParams: r
    } = gs(this, e, t);
    this.passedParams = r, this.swiperParams = i, !(this.swiper && this.swiper.params[e] === t) && ja({
      swiper: this.swiper,
      passedParams: this.passedParams,
      changedParams: [ot(e)],
      ...e === "navigation" && r[e] ? {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      } : {},
      ...e === "pagination" && r[e] ? {
        paginationEl: ".swiper-pagination"
      } : {},
      ...e === "scrollbar" && r[e] ? {
        scrollbarEl: ".swiper-scrollbar"
      } : {}
    });
  }
  attributeChangedCallback(e, t, i) {
    this.swiper && this.swiper.initialized && (t === "true" && i === null && (i = !1), this.updateSwiperOnPropChange(e, i));
  }
  static get observedAttributes() {
    return wt.filter((t) => t.includes("_")).map((t) => t.replace(/[A-Z]/g, (i) => `-${i}`).replace("_", "").toLowerCase());
  }
}
wt.forEach((s) => {
  s !== "init" && (s = s.replace("_", ""), Object.defineProperty(Fs.prototype, s, {
    configurable: !0,
    get() {
      return (this.passedParams || {})[s];
    },
    set(e) {
      this.passedParams || (this.passedParams = {}), this.passedParams[s] = e, this.swiper && this.swiper.initialized && this.updateSwiperOnPropChange(s, e);
    }
  }));
});
class Wa extends qs {
  constructor() {
    super(), this.attachShadow({
      mode: "open"
    });
  }
  render() {
    const e = this.lazy || this.getAttribute("lazy") === "" || this.getAttribute("lazy") === "true";
    if (Gs(this.shadowRoot, Xa), this.shadowRoot.appendChild(document.createElement("slot")), e) {
      const t = document.createElement("div");
      t.classList.add("swiper-lazy-preloader"), t.part.add("preloader"), this.shadowRoot.appendChild(t);
    }
  }
  initialize() {
    this.render();
  }
  connectedCallback() {
    this.swiperLoopMoveDOM || this.initialize();
  }
}
const Ka = () => {
  typeof window > "u" || (window.customElements.get("swiper-container") || window.customElements.define("swiper-container", Fs), window.customElements.get("swiper-slide") || window.customElements.define("swiper-slide", Wa));
};
typeof window < "u" && (window.SwiperElementRegisterParams = (s) => {
  wt.push(...s);
});
const Ja = "en", Qa = [
  "zh-CN"
], Za = {
  s29bcbfa9d16e4bc0: "应用预览",
  s5e8250fb85d64c23: "关闭",
  sac8ba291078b3f8b: "使用手机扫描二维码下载应用",
  sd60397cf6fdb7697: "扫码下载"
}, eo = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  templates: Za
}, Symbol.toStringTag, { value: "Module" }));
var to = Object.defineProperty, Ze = (s, e, t, i) => {
  for (var r = void 0, n = s.length - 1, o; n >= 0; n--)
    (o = s[n]) && (r = o(e, t, r) || r);
  return r && to(e, t, r), r;
};
Ka();
const io = /* @__PURE__ */ new Map([["zh-CN", eo]]), { setLocale: so } = er({
  sourceLocale: Ja,
  targetLocales: Qa,
  loadLocale: async (s) => io.get(s)
}), yi = class yi extends je {
  constructor() {
    super(), this.config = "{}", this.language = "en", this.qrModalVisible = !1, this.currentQR = "", this.configObject = JSON.parse(this.config);
  }
  attributeChangedCallback(e, t, i) {
    if (super.attributeChangedCallback(e, t, i), e === "language" && t !== i && so(i), e === "config" && t !== i)
      try {
        this.configObject = JSON.parse(i), this.requestUpdate();
      } catch (r) {
        console.error("解析config JSON时出错:", r);
      }
  }
  async showQRCode(e) {
    const t = await Ur.toDataURL(e.url, {
      width: 200,
      margin: 1,
      color: {
        dark: "#000000",
        light: "#ffffff"
      }
    });
    this.currentQR = t, this.qrModalVisible = !0, this.requestUpdate();
  }
  closeQRModal() {
    this.qrModalVisible = !1, this.requestUpdate();
  }
  handleModalClick(e) {
    var i;
    const t = (i = this.shadowRoot) == null ? void 0 : i.getElementById("qrModal");
    e.target === t && this.closeQRModal();
  }
  firstUpdated() {
    var t;
    const e = (t = this.shadowRoot) == null ? void 0 : t.querySelector("swiper-container");
    e && (Object.assign(e, {
      slidesPerView: 2.5,
      spaceBetween: 20,
      pagination: {
        clickable: !0,
        type: "bullets"
      },
      autoplay: {
        delay: 3e3,
        disableOnInteraction: !1
      },
      breakpoints: {
        640: {
          slidesPerView: 2.5,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 20
        },
        1024: {
          slidesPerView: 4.5,
          spaceBetween: 20
        }
      }
    }), e.initialize());
  }
  render() {
    var e, t;
    return Re`
      <div class="overflow-x-hidden bg-gray-50 text-gray-800">
        <div class="w-full">
          <div class="top-content">
            <img
              src="${this.configObject.logo}"
              class="mb-6 size-24 shadow-md rounded-lg"
            />
            <h1 class="mb-4 text-3xl font-bold text-gray-800 md:text-4xl">
              ${this.configObject.name} <span class="text-blue-600">App</span>
            </h1>
            <p class="mb-6 text-lg text-gray-600">
              ${this.configObject.description}
            </p>

            <div class="mt-4 flex flex-wrap justify-center gap-4">
              ${(e = this.configObject.downloads) == null ? void 0 : e.map(
      (i) => Re`
                  <a
                    href="${i.url}"
                    target="_blank"
                    class="flex w-full items-center justify-center rounded-lg px-4 py-3 text-white shadow-sm transition-opacity hover:opacity-80 lg:w-auto"
                    style="background-color: ${i.color};"
                  >
                    <img src="${i.icon}" class="size-4.5 mr-2" />
                    <div class="font-semibold">${i.name}</div>
                    <div class="ml-2">
                      <div
                        class="i-tabler-qrcode cursor-pointer text-lg hover:opacity-80"
                        @click=${(r) => {
        r.preventDefault(), this.showQRCode(i);
      }}
                      ></div>
                    </div>
                  </a>
                `
    )}
            </div>
          </div>

          <div class="container mx-auto px-4 py-16">
            <h2 class="mb-8 text-center text-2xl font-bold text-gray-800">
              ${He("App Preview")}
            </h2>

            <div class="max-w-100% lg:max-w-70% mx-auto">
              <swiper-container init="false" pagination="true">
                ${(t = this.configObject.screenshots) == null ? void 0 : t.map(
      (i) => Re`
                    <swiper-slide>
                      <img
                        src="${i}"
                        class="app-screenshot"
                        alt="App Screenshot"
                      />
                    </swiper-slide>
                  `
    )}
              </swiper-container>
            </div>
          </div>
        </div>

        <div
          id="qrModal"
          class="fixed inset-0 z-999999 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300"
          style="${this.qrModalVisible ? "opacity: 1; visibility: visible;" : "opacity: 0; visibility: hidden; pointer-events: none;"}"
          @click=${this.handleModalClick}
        >
          <div
            class="max-w-90% relative flex w-80 transform flex-col items-center rounded-xl bg-white px-6 py-8 shadow-xl transition-transform duration-300"
          >
            <h3 class="mb-4 text-center text-xl font-bold text-gray-800">
              ${He("Scan to Download")}
            </h3>
            <div
              class="h-50 w-50 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gray-50 p-2"
            >
              ${this.currentQR ? Re`<img src="${this.currentQR}" class="h-full w-full" />` : Re`<div class="flex items-center justify-center">
                    <div
                      class="i-tabler-loader animate-spin text-2xl text-gray-400"
                    ></div>
                  </div>`}
            </div>
            <p class="mb-6 text-center text-sm text-gray-600">
              ${He("Scan the QR code with your phone to download the app")}
            </p>

            <button
              class="group mt-2 flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-5 py-2 text-gray-700 transition-colors hover:bg-gray-200"
              @click=${this.closeQRModal}
            >
              <div
                class="i-tabler-x text-sm text-gray-600 group-hover:text-gray-800"
              ></div>
              <span class="text-sm text-gray-600 group-hover:text-gray-800"
                >${He("Close")}</span
              >
            </button>
          </div>
        </div>
      </div>
    `;
  }
};
yi.styles = [
  Ms(sr),
  rr`
      :host {
        overflow-x: hidden;
      }
      .app-screenshot {
        border-radius: 12px;
      }
      .top-content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 3rem 1rem;
        background-color: #f5f7fa;
        background-image: url(data:image/webp;base64,UklGRkwBAABXRUJQVlA4TEABAAAvP0uAAQ9w+//L/ytI24Dxb7ndmf/4Adg2kqRow3jv8s/wvPUe7p6pIvqvxm3biJ7c6e4j4gZKzQYpO2XYl6mtxVr2gP/4j//4j//4j//4j//4j//4j//4j//4j//4j//4j//4j//471spb+eMlH35Iw5oahH8x3/8x3/8x3/8x3/8x3/8x3/8x3/8x3/8x3/8x3/8x3/8x3/vZ3k7p205c1OL4D/+4z/+4z/+4z/+4z/+4z/+4z/+4z/+4z/+4z/+4z/+4z/+ez/L2znneZj/+I//+I//+I//+I//+I//+I//+I//+I//+I//+I//+I//+O/9LG/nHFmpLZQtDfMf//Ef//Ef//Ef//Ef//Ef//Ef//Ef//Ef//Ef//Ef//Ef/72f5e2ctuXMTS2C//iP//iP//iP//iP//iP/+QhAA==);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }

      /* Swiper custom styles */
      swiper-container {
        width: 100%;
        padding: 20px 0 40px 0;
      }

      swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      swiper-container::part(bullet) {
        background-color: #d1d5db;
        opacity: 0.5;
        width: 12px;
        height: 12px;
      }

      swiper-container::part(bullet-active) {
        background-color: #3b82f6;
        opacity: 1;
        width: 12px;
        height: 12px;
      }

      swiper-container::part(pagination) {
        position: relative !important;
        bottom: 0 !important;
        margin-top: 20px;
      }

      /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: icons */
.i-tabler-loader{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M12 6V3m4.25 4.75L18.4 5.6M18 12h3m-4.75 4.25l2.15 2.15M12 18v3m-4.25-4.75L5.6 18.4M6 12H3m4.75-4.25L5.6 5.6'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}
.i-tabler-qrcode{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm3 12v.01M14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM7 7v.01M4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm13-8v.01M14 14h3m3 0v.01M14 14v3m0 3h3m0-3h3m0 0v3'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}
.i-tabler-x{--un-icon:url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1em' height='1em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='none' stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M18 6L6 18M6 6l12 12'/%3E%3C/svg%3E");-webkit-mask:var(--un-icon) no-repeat;mask:var(--un-icon) no-repeat;-webkit-mask-size:100% 100%;mask-size:100% 100%;background-color:currentColor;color:inherit;width:1em;height:1em;}
/* layer: shortcuts */
.container{width:100%;}
@media (min-width: 640px){
.container{max-width:640px;}
}
@media (min-width: 768px){
.container{max-width:768px;}
}
@media (min-width: 1024px){
.container{max-width:1024px;}
}
@media (min-width: 1280px){
.container{max-width:1280px;}
}
@media (min-width: 1536px){
.container{max-width:1536px;}
}
/* layer: default */
.visible{visibility:visible;}
.fixed{position:fixed;}
.relative{position:relative;}
.static{position:static;}
.inset-0{inset:0;}
.z-999999{z-index:999999;}
.mx-auto{margin-left:auto;margin-right:auto;}
.mb-4{margin-bottom:1rem;}
.mb-6{margin-bottom:1.5rem;}
.mb-8{margin-bottom:2rem;}
.ml-2{margin-left:0.5rem;}
.mr-2{margin-right:0.5rem;}
.mt-2{margin-top:0.5rem;}
.mt-4{margin-top:1rem;}
.hidden{display:none;}
.size-24{width:6rem;height:6rem;}
.size-4\\.5{width:1.125rem;height:1.125rem;}
.h-50{height:12.5rem;}
.h-full{height:100%;}
.max-w-100\\%{max-width:100%;}
.max-w-90\\%{max-width:90%;}
.w-50{width:12.5rem;}
.w-80{width:20rem;}
.w-full{width:100%;}
.flex{display:flex;}
.flex-col{flex-direction:column;}
.flex-wrap{flex-wrap:wrap;}
.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
.animate-spin{animation:spin 1s linear infinite;}
.cursor-pointer{cursor:pointer;}
.items-center{align-items:center;}
.justify-center{justify-content:center;}
.gap-2{gap:0.5rem;}
.gap-4{gap:1rem;}
.overflow-x-hidden{overflow-x:hidden;}
.rounded-lg{border-radius:0.5rem;}
.rounded-xl{border-radius:0.75rem;}
.bg-black\\/50{background-color:rgb(0 0 0 / 0.5) /* #000 */;}
.bg-gray-100{--un-bg-opacity:1;background-color:rgb(243 244 246 / var(--un-bg-opacity)) /* #f3f4f6 */;}
.bg-gray-50{--un-bg-opacity:1;background-color:rgb(249 250 251 / var(--un-bg-opacity)) /* #f9fafb */;}
.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.hover\\:bg-gray-200:hover{--un-bg-opacity:1;background-color:rgb(229 231 235 / var(--un-bg-opacity)) /* #e5e7eb */;}
.p-2{padding:0.5rem;}
.px-4{padding-left:1rem;padding-right:1rem;}
.px-5{padding-left:1.25rem;padding-right:1.25rem;}
.px-6{padding-left:1.5rem;padding-right:1.5rem;}
.py-16{padding-top:4rem;padding-bottom:4rem;}
.py-2{padding-top:0.5rem;padding-bottom:0.5rem;}
.py-3{padding-top:0.75rem;padding-bottom:0.75rem;}
.py-8{padding-top:2rem;padding-bottom:2rem;}
.text-center{text-align:center;}
.text-2xl{font-size:1.5rem;line-height:2rem;}
.text-3xl{font-size:1.875rem;line-height:2.25rem;}
.text-lg{font-size:1.125rem;line-height:1.75rem;}
.text-sm{font-size:0.875rem;line-height:1.25rem;}
.text-xl{font-size:1.25rem;line-height:1.75rem;}
.text-blue-600{--un-text-opacity:1;color:rgb(37 99 235 / var(--un-text-opacity)) /* #2563eb */;}
.text-gray-400{--un-text-opacity:1;color:rgb(156 163 175 / var(--un-text-opacity)) /* #9ca3af */;}
.text-gray-600{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.text-gray-700{--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity)) /* #374151 */;}
.text-gray-800,
.group:hover .group-hover\\:text-gray-800{--un-text-opacity:1;color:rgb(31 41 55 / var(--un-text-opacity)) /* #1f2937 */;}
.text-white{--un-text-opacity:1;color:rgb(255 255 255 / var(--un-text-opacity)) /* #fff */;}
.font-bold{font-weight:700;}
.font-semibold{font-weight:600;}
.hover\\:opacity-80:hover{opacity:0.8;}
.shadow-md{--un-shadow:var(--un-shadow-inset) 0 4px 6px -1px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 2px 4px -2px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-sm{--un-shadow:var(--un-shadow-inset) 0 1px 2px 0 var(--un-shadow-color, rgb(0 0 0 / 0.05));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-xl{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.backdrop-blur-sm{--un-backdrop-blur:blur(4px);-webkit-backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);backdrop-filter:var(--un-backdrop-blur) var(--un-backdrop-brightness) var(--un-backdrop-contrast) var(--un-backdrop-grayscale) var(--un-backdrop-hue-rotate) var(--un-backdrop-invert) var(--un-backdrop-opacity) var(--un-backdrop-saturate) var(--un-backdrop-sepia);}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.duration-300{transition-duration:300ms;}
@media (min-width: 768px){
.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}
}
@media (min-width: 1024px){
.lg\\:max-w-70\\%{max-width:70%;}
.lg\\:w-auto{width:auto;}
};
    `
];
let he = yi;
Ze([
  mi({ type: String, attribute: "config", reflect: !0 })
], he.prototype, "config");
Ze([
  mi({ type: String, attribute: "language" })
], he.prototype, "language");
Ze([
  gi()
], he.prototype, "configObject");
Ze([
  gi()
], he.prototype, "qrModalVisible");
Ze([
  gi()
], he.prototype, "currentQR");
customElements.define("mobile-app-page", he);
export {
  he as MobileAppPage
};
