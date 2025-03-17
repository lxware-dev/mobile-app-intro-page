/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const En = "lit-localize-status";
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const xn = (r) => typeof r != "string" && "strTag" in r, js = (r, e, t) => {
  let i = r[0];
  for (let s = 1; s < r.length; s++)
    i += e[t ? t[s - 1] : s - 1], i += r[s];
  return i;
};
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Xs = (r) => xn(r) ? js(r.strings, r.values) : r;
let ht = Xs, br = !1;
function Sn(r) {
  if (br)
    throw new Error("lit-localize can only be configured once");
  ht = r, br = !0;
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class Gs {
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
const ye = [];
for (let r = 0; r < 256; r++)
  ye[r] = (r >> 4 & 15).toString(16) + (r & 15).toString(16);
function Tn(r) {
  let e = 0, t = 8997, i = 0, s = 33826, n = 0, a = 40164, l = 0, o = 52210;
  for (let c = 0; c < r.length; c++)
    t ^= r.charCodeAt(c), e = t * 435, i = s * 435, n = a * 435, l = o * 435, n += t << 8, l += s << 8, i += e >>> 16, t = e & 65535, n += i >>> 16, s = i & 65535, o = l + (n >>> 16) & 65535, a = n & 65535;
  return ye[o >> 8] + ye[o & 255] + ye[a >> 8] + ye[a & 255] + ye[s >> 8] + ye[s & 255] + ye[t >> 8] + ye[t & 255];
}
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Cn = "", Mn = "h", Pn = "s";
function An(r, e) {
  return (e ? Mn : Pn) + Tn(typeof r == "string" ? r : r.join(Cn));
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const yr = /* @__PURE__ */ new WeakMap(), Er = /* @__PURE__ */ new Map();
function zn(r, e, t) {
  if (r) {
    const i = (t == null ? void 0 : t.id) ?? In(e), s = r[i];
    if (s) {
      if (typeof s == "string")
        return s;
      if ("strTag" in s)
        return js(
          s.strings,
          // Cast `template` because its type wasn't automatically narrowed (but
          // we know it must be the same type as `localized`).
          e.values,
          s.values
        );
      {
        let n = yr.get(s);
        return n === void 0 && (n = s.values, yr.set(s, n)), {
          ...s,
          values: n.map((a) => e.values[a])
        };
      }
    }
  }
  return Xs(e);
}
function In(r) {
  const e = typeof r == "string" ? r : r.strings;
  let t = Er.get(e);
  return t === void 0 && (t = An(e, typeof r != "string" && !("strTag" in r)), Er.set(e, t)), t;
}
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ui(r) {
  window.dispatchEvent(new CustomEvent(En, { detail: r }));
}
let Gt = "", fi, Ws, Wt, Wi, Us, $e = new Gs();
$e.resolve();
let Dt = 0;
const Ln = (r) => (Sn((e, t) => zn(Us, e, t)), Gt = Ws = r.sourceLocale, Wt = new Set(r.targetLocales), Wt.add(r.sourceLocale), Wi = r.loadLocale, { getLocale: kn, setLocale: $n }), kn = () => Gt, $n = (r) => {
  if (r === (fi ?? Gt))
    return $e.promise;
  if (!Wt || !Wi)
    throw new Error("Internal error");
  if (!Wt.has(r))
    throw new Error("Invalid locale code");
  Dt++;
  const e = Dt;
  return fi = r, $e.settled && ($e = new Gs()), ui({ status: "loading", loadingLocale: r }), (r === Ws ? (
    // We could switch to the source locale synchronously, but we prefer to
    // queue it on a microtask so that switching locales is consistently
    // asynchronous.
    Promise.resolve({ templates: void 0 })
  ) : Wi(r)).then((i) => {
    Dt === e && (Gt = r, fi = void 0, Us = i.templates, ui({ status: "ready", readyLocale: r }), $e.resolve());
  }, (i) => {
    Dt === e && (ui({
      status: "error",
      errorLocale: r,
      errorMessage: i.toString()
    }), $e.reject(i));
  }), $e.promise;
}, _n = '*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:var(--un-default-border-color, #e5e7eb)}:before,:after{--un-content: ""}html,:host{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal;-webkit-tap-highlight-color:transparent}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-variation-settings:normal;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]:where(:not([hidden=until-found])){display:none}';
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Vt = globalThis, nr = Vt.ShadowRoot && (Vt.ShadyCSS === void 0 || Vt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ar = Symbol(), xr = /* @__PURE__ */ new WeakMap();
let Ks = class {
  constructor(e, t, i) {
    if (this._$cssResult$ = !0, i !== ar) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (nr && e === void 0) {
      const i = t !== void 0 && t.length === 1;
      i && (e = xr.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), i && xr.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Ui = (r) => new Ks(typeof r == "string" ? r : r + "", void 0, ar), Dn = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((i, s, n) => i + ((a) => {
    if (a._$cssResult$ === !0) return a.cssText;
    if (typeof a == "number") return a;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + a + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[n + 1], r[0]);
  return new Ks(t, r, ar);
}, On = (r, e) => {
  if (nr) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const i = document.createElement("style"), s = Vt.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = t.cssText, r.appendChild(i);
  }
}, Sr = nr ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const i of e.cssRules) t += i.cssText;
  return Ui(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Rn, defineProperty: Nn, getOwnPropertyDescriptor: Bn, getOwnPropertyNames: Hn, getOwnPropertySymbols: Vn, getPrototypeOf: Fn } = Object, Ie = globalThis, Tr = Ie.trustedTypes, qn = Tr ? Tr.emptyScript : "", pi = Ie.reactiveElementPolyfillSupport, vt = (r, e) => r, Ut = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? qn : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, e) {
  let t = r;
  switch (e) {
    case Boolean:
      t = r !== null;
      break;
    case Number:
      t = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(r);
      } catch {
        t = null;
      }
  }
  return t;
} }, or = (r, e) => !Rn(r, e), Cr = { attribute: !0, type: String, converter: Ut, reflect: !1, hasChanged: or };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), Ie.litPropertyMetadata ?? (Ie.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class We extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Cr) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const i = Symbol(), s = this.getPropertyDescriptor(e, i, t);
      s !== void 0 && Nn(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, i) {
    const { get: s, set: n } = Bn(this.prototype, e) ?? { get() {
      return this[t];
    }, set(a) {
      this[t] = a;
    } };
    return { get() {
      return s == null ? void 0 : s.call(this);
    }, set(a) {
      const l = s == null ? void 0 : s.call(this);
      n.call(this, a), this.requestUpdate(e, l, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Cr;
  }
  static _$Ei() {
    if (this.hasOwnProperty(vt("elementProperties"))) return;
    const e = Fn(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(vt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(vt("properties"))) {
      const t = this.properties, i = [...Hn(t), ...Vn(t)];
      for (const s of i) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [i, s] of t) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, i] of this.elementProperties) {
      const s = this._$Eu(t, i);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const i = new Set(e.flat(1 / 0).reverse());
      for (const s of i) t.unshift(Sr(s));
    } else e !== void 0 && t.push(Sr(e));
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
    return On(e, this.constructor.elementStyles), e;
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
    const i = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, i);
    if (s !== void 0 && i.reflect === !0) {
      const a = (((n = i.converter) == null ? void 0 : n.toAttribute) !== void 0 ? i.converter : Ut).toAttribute(t, i.type);
      this._$Em = e, a == null ? this.removeAttribute(s) : this.setAttribute(s, a), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var n;
    const i = this.constructor, s = i._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const a = i.getPropertyOptions(s), l = typeof a.converter == "function" ? { fromAttribute: a.converter } : ((n = a.converter) == null ? void 0 : n.fromAttribute) !== void 0 ? a.converter : Ut;
      this._$Em = s, this[s] = l.fromAttribute(t, a.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, i) {
    if (e !== void 0) {
      if (i ?? (i = this.constructor.getPropertyOptions(e)), !(i.hasChanged ?? or)(this[e], t)) return;
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
        for (const [n, a] of this._$Ep) this[n] = a;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [n, a] of s) a.wrapped !== !0 || this._$AL.has(n) || this[n] === void 0 || this.P(n, this[n], a);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (i = this._$EO) == null || i.forEach((s) => {
        var n;
        return (n = s.hostUpdate) == null ? void 0 : n.call(s);
      }), this.update(t)) : this._$EU();
    } catch (s) {
      throw e = !1, this._$EU(), s;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((i) => {
      var s;
      return (s = i.hostUpdated) == null ? void 0 : s.call(i);
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
We.elementStyles = [], We.shadowRootOptions = { mode: "open" }, We[vt("elementProperties")] = /* @__PURE__ */ new Map(), We[vt("finalized")] = /* @__PURE__ */ new Map(), pi == null || pi({ ReactiveElement: We }), (Ie.reactiveElementVersions ?? (Ie.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const bt = globalThis, Kt = bt.trustedTypes, Mr = Kt ? Kt.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, Zs = "$lit$", Ae = `lit$${Math.random().toFixed(9).slice(2)}$`, Js = "?" + Ae, Yn = `<${Js}>`, Ne = document, St = () => Ne.createComment(""), Tt = (r) => r === null || typeof r != "object" && typeof r != "function", lr = Array.isArray, jn = (r) => lr(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", hi = `[ 	
\f\r]`, ut = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Pr = /-->/g, Ar = />/g, ke = RegExp(`>|${hi}(?:([^\\s"'>=/]+)(${hi}*=${hi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), zr = /'/g, Ir = /"/g, Qs = /^(?:script|style|textarea|title)$/i, Xn = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ft = Xn(1), tt = Symbol.for("lit-noChange"), ie = Symbol.for("lit-nothing"), Lr = /* @__PURE__ */ new WeakMap(), De = Ne.createTreeWalker(Ne, 129);
function en(r, e) {
  if (!lr(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Mr !== void 0 ? Mr.createHTML(e) : e;
}
const Gn = (r, e) => {
  const t = r.length - 1, i = [];
  let s, n = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", a = ut;
  for (let l = 0; l < t; l++) {
    const o = r[l];
    let c, d, p = -1, g = 0;
    for (; g < o.length && (a.lastIndex = g, d = a.exec(o), d !== null); ) g = a.lastIndex, a === ut ? d[1] === "!--" ? a = Pr : d[1] !== void 0 ? a = Ar : d[2] !== void 0 ? (Qs.test(d[2]) && (s = RegExp("</" + d[2], "g")), a = ke) : d[3] !== void 0 && (a = ke) : a === ke ? d[0] === ">" ? (a = s ?? ut, p = -1) : d[1] === void 0 ? p = -2 : (p = a.lastIndex - d[2].length, c = d[1], a = d[3] === void 0 ? ke : d[3] === '"' ? Ir : zr) : a === Ir || a === zr ? a = ke : a === Pr || a === Ar ? a = ut : (a = ke, s = void 0);
    const h = a === ke && r[l + 1].startsWith("/>") ? " " : "";
    n += a === ut ? o + Yn : p >= 0 ? (i.push(c), o.slice(0, p) + Zs + o.slice(p) + Ae + h) : o + Ae + (p === -2 ? l : h);
  }
  return [en(r, n + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), i];
};
class Ct {
  constructor({ strings: e, _$litType$: t }, i) {
    let s;
    this.parts = [];
    let n = 0, a = 0;
    const l = e.length - 1, o = this.parts, [c, d] = Gn(e, t);
    if (this.el = Ct.createElement(c, i), De.currentNode = this.el.content, t === 2 || t === 3) {
      const p = this.el.content.firstChild;
      p.replaceWith(...p.childNodes);
    }
    for (; (s = De.nextNode()) !== null && o.length < l; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const p of s.getAttributeNames()) if (p.endsWith(Zs)) {
          const g = d[a++], h = s.getAttribute(p).split(Ae), u = /([.?@])?(.*)/.exec(g);
          o.push({ type: 1, index: n, name: u[2], strings: h, ctor: u[1] === "." ? Un : u[1] === "?" ? Kn : u[1] === "@" ? Zn : ei }), s.removeAttribute(p);
        } else p.startsWith(Ae) && (o.push({ type: 6, index: n }), s.removeAttribute(p));
        if (Qs.test(s.tagName)) {
          const p = s.textContent.split(Ae), g = p.length - 1;
          if (g > 0) {
            s.textContent = Kt ? Kt.emptyScript : "";
            for (let h = 0; h < g; h++) s.append(p[h], St()), De.nextNode(), o.push({ type: 2, index: ++n });
            s.append(p[g], St());
          }
        }
      } else if (s.nodeType === 8) if (s.data === Js) o.push({ type: 2, index: n });
      else {
        let p = -1;
        for (; (p = s.data.indexOf(Ae, p + 1)) !== -1; ) o.push({ type: 7, index: n }), p += Ae.length - 1;
      }
      n++;
    }
  }
  static createElement(e, t) {
    const i = Ne.createElement("template");
    return i.innerHTML = e, i;
  }
}
function it(r, e, t = r, i) {
  var a, l;
  if (e === tt) return e;
  let s = i !== void 0 ? (a = t._$Co) == null ? void 0 : a[i] : t._$Cl;
  const n = Tt(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== n && ((l = s == null ? void 0 : s._$AO) == null || l.call(s, !1), n === void 0 ? s = void 0 : (s = new n(r), s._$AT(r, t, i)), i !== void 0 ? (t._$Co ?? (t._$Co = []))[i] = s : t._$Cl = s), s !== void 0 && (e = it(r, s._$AS(r, e.values), s, i)), e;
}
class Wn {
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
    const { el: { content: t }, parts: i } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? Ne).importNode(t, !0);
    De.currentNode = s;
    let n = De.nextNode(), a = 0, l = 0, o = i[0];
    for (; o !== void 0; ) {
      if (a === o.index) {
        let c;
        o.type === 2 ? c = new It(n, n.nextSibling, this, e) : o.type === 1 ? c = new o.ctor(n, o.name, o.strings, this, e) : o.type === 6 && (c = new Jn(n, this, e)), this._$AV.push(c), o = i[++l];
      }
      a !== (o == null ? void 0 : o.index) && (n = De.nextNode(), a++);
    }
    return De.currentNode = Ne, s;
  }
  p(e) {
    let t = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(e, i, t), t += i.strings.length - 2) : i._$AI(e[t])), t++;
  }
}
class It {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, i, s) {
    this.type = 2, this._$AH = ie, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = i, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = it(this, e, t), Tt(e) ? e === ie || e == null || e === "" ? (this._$AH !== ie && this._$AR(), this._$AH = ie) : e !== this._$AH && e !== tt && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : jn(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== ie && Tt(this._$AH) ? this._$AA.nextSibling.data = e : this.T(Ne.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var n;
    const { values: t, _$litType$: i } = e, s = typeof i == "number" ? this._$AC(e) : (i.el === void 0 && (i.el = Ct.createElement(en(i.h, i.h[0]), this.options)), i);
    if (((n = this._$AH) == null ? void 0 : n._$AD) === s) this._$AH.p(t);
    else {
      const a = new Wn(s, this), l = a.u(this.options);
      a.p(t), this.T(l), this._$AH = a;
    }
  }
  _$AC(e) {
    let t = Lr.get(e.strings);
    return t === void 0 && Lr.set(e.strings, t = new Ct(e)), t;
  }
  k(e) {
    lr(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let i, s = 0;
    for (const n of e) s === t.length ? t.push(i = new It(this.O(St()), this.O(St()), this, this.options)) : i = t[s], i._$AI(n), s++;
    s < t.length && (this._$AR(i && i._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var i;
    for ((i = this._$AP) == null ? void 0 : i.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const s = e.nextSibling;
      e.remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class ei {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, i, s, n) {
    this.type = 1, this._$AH = ie, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = n, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = ie;
  }
  _$AI(e, t = this, i, s) {
    const n = this.strings;
    let a = !1;
    if (n === void 0) e = it(this, e, t, 0), a = !Tt(e) || e !== this._$AH && e !== tt, a && (this._$AH = e);
    else {
      const l = e;
      let o, c;
      for (e = n[0], o = 0; o < n.length - 1; o++) c = it(this, l[i + o], t, o), c === tt && (c = this._$AH[o]), a || (a = !Tt(c) || c !== this._$AH[o]), c === ie ? e = ie : e !== ie && (e += (c ?? "") + n[o + 1]), this._$AH[o] = c;
    }
    a && !s && this.j(e);
  }
  j(e) {
    e === ie ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class Un extends ei {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === ie ? void 0 : e;
  }
}
class Kn extends ei {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== ie);
  }
}
class Zn extends ei {
  constructor(e, t, i, s, n) {
    super(e, t, i, s, n), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = it(this, e, t, 0) ?? ie) === tt) return;
    const i = this._$AH, s = e === ie && i !== ie || e.capture !== i.capture || e.once !== i.once || e.passive !== i.passive, n = e !== ie && (i === ie || s);
    s && this.element.removeEventListener(this.name, this, i), n && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class Jn {
  constructor(e, t, i) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    it(this, e);
  }
}
const mi = bt.litHtmlPolyfillSupport;
mi == null || mi(Ct, It), (bt.litHtmlVersions ?? (bt.litHtmlVersions = [])).push("3.2.1");
const Qn = (r, e, t) => {
  const i = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = i._$litPart$;
  if (s === void 0) {
    const n = (t == null ? void 0 : t.renderBefore) ?? null;
    i._$litPart$ = s = new It(e.insertBefore(St(), n), n, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
let yt = class extends We {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = Qn(t, this.renderRoot, this.renderOptions);
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
    return tt;
  }
};
var Ys;
yt._$litElement$ = !0, yt.finalized = !0, (Ys = globalThis.litElementHydrateSupport) == null || Ys.call(globalThis, { LitElement: yt });
const gi = globalThis.litElementPolyfillSupport;
gi == null || gi({ LitElement: yt });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ea = { attribute: !0, type: String, converter: Ut, reflect: !1, hasChanged: or }, ta = (r = ea, e, t) => {
  const { kind: i, metadata: s } = t;
  let n = globalThis.litPropertyMetadata.get(s);
  if (n === void 0 && globalThis.litPropertyMetadata.set(s, n = /* @__PURE__ */ new Map()), n.set(t.name, r), i === "accessor") {
    const { name: a } = t;
    return { set(l) {
      const o = e.get.call(this);
      e.set.call(this, l), this.requestUpdate(a, o, r);
    }, init(l) {
      return l !== void 0 && this.P(a, void 0, r), l;
    } };
  }
  if (i === "setter") {
    const { name: a } = t;
    return function(l) {
      const o = this[a];
      e.call(this, l), this.requestUpdate(a, o, r);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function dr(r) {
  return (e, t) => typeof t == "object" ? ta(r, e, t) : ((i, s, n) => {
    const a = s.hasOwnProperty(n);
    return s.constructor.createProperty(n, a ? { ...i, wrapped: !0 } : i), a ? Object.getOwnPropertyDescriptor(s, n) : void 0;
  })(r, e, t);
}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
function ti(r) {
  return dr({ ...r, state: !0, attribute: !1 });
}
function ia(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var Xe = {}, wi, kr;
function ra() {
  return kr || (kr = 1, wi = function() {
    return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
  }), wi;
}
var vi = {}, Me = {}, $r;
function He() {
  if ($r) return Me;
  $r = 1;
  let r;
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
  return Me.getSymbolSize = function(i) {
    if (!i) throw new Error('"version" cannot be null or undefined');
    if (i < 1 || i > 40) throw new Error('"version" should be in range from 1 to 40');
    return i * 4 + 17;
  }, Me.getSymbolTotalCodewords = function(i) {
    return e[i];
  }, Me.getBCHDigit = function(t) {
    let i = 0;
    for (; t !== 0; )
      i++, t >>>= 1;
    return i;
  }, Me.setToSJISFunction = function(i) {
    if (typeof i != "function")
      throw new Error('"toSJISFunc" is not a valid function.');
    r = i;
  }, Me.isKanjiModeEnabled = function() {
    return typeof r < "u";
  }, Me.toSJIS = function(i) {
    return r(i);
  }, Me;
}
var bi = {}, _r;
function cr() {
  return _r || (_r = 1, function(r) {
    r.L = { bit: 1 }, r.M = { bit: 0 }, r.Q = { bit: 3 }, r.H = { bit: 2 };
    function e(t) {
      if (typeof t != "string")
        throw new Error("Param is not a string");
      switch (t.toLowerCase()) {
        case "l":
        case "low":
          return r.L;
        case "m":
        case "medium":
          return r.M;
        case "q":
        case "quartile":
          return r.Q;
        case "h":
        case "high":
          return r.H;
        default:
          throw new Error("Unknown EC Level: " + t);
      }
    }
    r.isValid = function(i) {
      return i && typeof i.bit < "u" && i.bit >= 0 && i.bit < 4;
    }, r.from = function(i, s) {
      if (r.isValid(i))
        return i;
      try {
        return e(i);
      } catch {
        return s;
      }
    };
  }(bi)), bi;
}
var yi, Dr;
function sa() {
  if (Dr) return yi;
  Dr = 1;
  function r() {
    this.buffer = [], this.length = 0;
  }
  return r.prototype = {
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
  }, yi = r, yi;
}
var Ei, Or;
function na() {
  if (Or) return Ei;
  Or = 1;
  function r(e) {
    if (!e || e < 1)
      throw new Error("BitMatrix size must be defined and greater than 0");
    this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
  }
  return r.prototype.set = function(e, t, i, s) {
    const n = e * this.size + t;
    this.data[n] = i, s && (this.reservedBit[n] = !0);
  }, r.prototype.get = function(e, t) {
    return this.data[e * this.size + t];
  }, r.prototype.xor = function(e, t, i) {
    this.data[e * this.size + t] ^= i;
  }, r.prototype.isReserved = function(e, t) {
    return this.reservedBit[e * this.size + t];
  }, Ei = r, Ei;
}
var xi = {}, Rr;
function aa() {
  return Rr || (Rr = 1, function(r) {
    const e = He().getSymbolSize;
    r.getRowColCoords = function(i) {
      if (i === 1) return [];
      const s = Math.floor(i / 7) + 2, n = e(i), a = n === 145 ? 26 : Math.ceil((n - 13) / (2 * s - 2)) * 2, l = [n - 7];
      for (let o = 1; o < s - 1; o++)
        l[o] = l[o - 1] - a;
      return l.push(6), l.reverse();
    }, r.getPositions = function(i) {
      const s = [], n = r.getRowColCoords(i), a = n.length;
      for (let l = 0; l < a; l++)
        for (let o = 0; o < a; o++)
          l === 0 && o === 0 || // top-left
          l === 0 && o === a - 1 || // bottom-left
          l === a - 1 && o === 0 || s.push([n[l], n[o]]);
      return s;
    };
  }(xi)), xi;
}
var Si = {}, Nr;
function oa() {
  if (Nr) return Si;
  Nr = 1;
  const r = He().getSymbolSize, e = 7;
  return Si.getPositions = function(i) {
    const s = r(i);
    return [
      // top-left
      [0, 0],
      // top-right
      [s - e, 0],
      // bottom-left
      [0, s - e]
    ];
  }, Si;
}
var Ti = {}, Br;
function la() {
  return Br || (Br = 1, function(r) {
    r.Patterns = {
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
    r.isValid = function(s) {
      return s != null && s !== "" && !isNaN(s) && s >= 0 && s <= 7;
    }, r.from = function(s) {
      return r.isValid(s) ? parseInt(s, 10) : void 0;
    }, r.getPenaltyN1 = function(s) {
      const n = s.size;
      let a = 0, l = 0, o = 0, c = null, d = null;
      for (let p = 0; p < n; p++) {
        l = o = 0, c = d = null;
        for (let g = 0; g < n; g++) {
          let h = s.get(p, g);
          h === c ? l++ : (l >= 5 && (a += e.N1 + (l - 5)), c = h, l = 1), h = s.get(g, p), h === d ? o++ : (o >= 5 && (a += e.N1 + (o - 5)), d = h, o = 1);
        }
        l >= 5 && (a += e.N1 + (l - 5)), o >= 5 && (a += e.N1 + (o - 5));
      }
      return a;
    }, r.getPenaltyN2 = function(s) {
      const n = s.size;
      let a = 0;
      for (let l = 0; l < n - 1; l++)
        for (let o = 0; o < n - 1; o++) {
          const c = s.get(l, o) + s.get(l, o + 1) + s.get(l + 1, o) + s.get(l + 1, o + 1);
          (c === 4 || c === 0) && a++;
        }
      return a * e.N2;
    }, r.getPenaltyN3 = function(s) {
      const n = s.size;
      let a = 0, l = 0, o = 0;
      for (let c = 0; c < n; c++) {
        l = o = 0;
        for (let d = 0; d < n; d++)
          l = l << 1 & 2047 | s.get(c, d), d >= 10 && (l === 1488 || l === 93) && a++, o = o << 1 & 2047 | s.get(d, c), d >= 10 && (o === 1488 || o === 93) && a++;
      }
      return a * e.N3;
    }, r.getPenaltyN4 = function(s) {
      let n = 0;
      const a = s.data.length;
      for (let o = 0; o < a; o++) n += s.data[o];
      return Math.abs(Math.ceil(n * 100 / a / 5) - 10) * e.N4;
    };
    function t(i, s, n) {
      switch (i) {
        case r.Patterns.PATTERN000:
          return (s + n) % 2 === 0;
        case r.Patterns.PATTERN001:
          return s % 2 === 0;
        case r.Patterns.PATTERN010:
          return n % 3 === 0;
        case r.Patterns.PATTERN011:
          return (s + n) % 3 === 0;
        case r.Patterns.PATTERN100:
          return (Math.floor(s / 2) + Math.floor(n / 3)) % 2 === 0;
        case r.Patterns.PATTERN101:
          return s * n % 2 + s * n % 3 === 0;
        case r.Patterns.PATTERN110:
          return (s * n % 2 + s * n % 3) % 2 === 0;
        case r.Patterns.PATTERN111:
          return (s * n % 3 + (s + n) % 2) % 2 === 0;
        default:
          throw new Error("bad maskPattern:" + i);
      }
    }
    r.applyMask = function(s, n) {
      const a = n.size;
      for (let l = 0; l < a; l++)
        for (let o = 0; o < a; o++)
          n.isReserved(o, l) || n.xor(o, l, t(s, o, l));
    }, r.getBestMask = function(s, n) {
      const a = Object.keys(r.Patterns).length;
      let l = 0, o = 1 / 0;
      for (let c = 0; c < a; c++) {
        n(c), r.applyMask(c, s);
        const d = r.getPenaltyN1(s) + r.getPenaltyN2(s) + r.getPenaltyN3(s) + r.getPenaltyN4(s);
        r.applyMask(c, s), d < o && (o = d, l = c);
      }
      return l;
    };
  }(Ti)), Ti;
}
var Ot = {}, Hr;
function tn() {
  if (Hr) return Ot;
  Hr = 1;
  const r = cr(), e = [
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
  return Ot.getBlocksCount = function(s, n) {
    switch (n) {
      case r.L:
        return e[(s - 1) * 4 + 0];
      case r.M:
        return e[(s - 1) * 4 + 1];
      case r.Q:
        return e[(s - 1) * 4 + 2];
      case r.H:
        return e[(s - 1) * 4 + 3];
      default:
        return;
    }
  }, Ot.getTotalCodewordsCount = function(s, n) {
    switch (n) {
      case r.L:
        return t[(s - 1) * 4 + 0];
      case r.M:
        return t[(s - 1) * 4 + 1];
      case r.Q:
        return t[(s - 1) * 4 + 2];
      case r.H:
        return t[(s - 1) * 4 + 3];
      default:
        return;
    }
  }, Ot;
}
var Ci = {}, pt = {}, Vr;
function da() {
  if (Vr) return pt;
  Vr = 1;
  const r = new Uint8Array(512), e = new Uint8Array(256);
  return function() {
    let i = 1;
    for (let s = 0; s < 255; s++)
      r[s] = i, e[i] = s, i <<= 1, i & 256 && (i ^= 285);
    for (let s = 255; s < 512; s++)
      r[s] = r[s - 255];
  }(), pt.log = function(i) {
    if (i < 1) throw new Error("log(" + i + ")");
    return e[i];
  }, pt.exp = function(i) {
    return r[i];
  }, pt.mul = function(i, s) {
    return i === 0 || s === 0 ? 0 : r[e[i] + e[s]];
  }, pt;
}
var Fr;
function ca() {
  return Fr || (Fr = 1, function(r) {
    const e = da();
    r.mul = function(i, s) {
      const n = new Uint8Array(i.length + s.length - 1);
      for (let a = 0; a < i.length; a++)
        for (let l = 0; l < s.length; l++)
          n[a + l] ^= e.mul(i[a], s[l]);
      return n;
    }, r.mod = function(i, s) {
      let n = new Uint8Array(i);
      for (; n.length - s.length >= 0; ) {
        const a = n[0];
        for (let o = 0; o < s.length; o++)
          n[o] ^= e.mul(s[o], a);
        let l = 0;
        for (; l < n.length && n[l] === 0; ) l++;
        n = n.slice(l);
      }
      return n;
    }, r.generateECPolynomial = function(i) {
      let s = new Uint8Array([1]);
      for (let n = 0; n < i; n++)
        s = r.mul(s, new Uint8Array([1, e.exp(n)]));
      return s;
    };
  }(Ci)), Ci;
}
var Mi, qr;
function ua() {
  if (qr) return Mi;
  qr = 1;
  const r = ca();
  function e(t) {
    this.genPoly = void 0, this.degree = t, this.degree && this.initialize(this.degree);
  }
  return e.prototype.initialize = function(i) {
    this.degree = i, this.genPoly = r.generateECPolynomial(this.degree);
  }, e.prototype.encode = function(i) {
    if (!this.genPoly)
      throw new Error("Encoder not initialized");
    const s = new Uint8Array(i.length + this.degree);
    s.set(i);
    const n = r.mod(s, this.genPoly), a = this.degree - n.length;
    if (a > 0) {
      const l = new Uint8Array(this.degree);
      return l.set(n, a), l;
    }
    return n;
  }, Mi = e, Mi;
}
var Pi = {}, Ai = {}, zi = {}, Yr;
function rn() {
  return Yr || (Yr = 1, zi.isValid = function(e) {
    return !isNaN(e) && e >= 1 && e <= 40;
  }), zi;
}
var ve = {}, jr;
function sn() {
  if (jr) return ve;
  jr = 1;
  const r = "[0-9]+", e = "[A-Z $%*+\\-./:]+";
  let t = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
  t = t.replace(/u/g, "\\u");
  const i = "(?:(?![A-Z0-9 $%*+\\-./:]|" + t + `)(?:.|[\r
]))+`;
  ve.KANJI = new RegExp(t, "g"), ve.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), ve.BYTE = new RegExp(i, "g"), ve.NUMERIC = new RegExp(r, "g"), ve.ALPHANUMERIC = new RegExp(e, "g");
  const s = new RegExp("^" + t + "$"), n = new RegExp("^" + r + "$"), a = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
  return ve.testKanji = function(o) {
    return s.test(o);
  }, ve.testNumeric = function(o) {
    return n.test(o);
  }, ve.testAlphanumeric = function(o) {
    return a.test(o);
  }, ve;
}
var Xr;
function Ve() {
  return Xr || (Xr = 1, function(r) {
    const e = rn(), t = sn();
    r.NUMERIC = {
      id: "Numeric",
      bit: 1,
      ccBits: [10, 12, 14]
    }, r.ALPHANUMERIC = {
      id: "Alphanumeric",
      bit: 2,
      ccBits: [9, 11, 13]
    }, r.BYTE = {
      id: "Byte",
      bit: 4,
      ccBits: [8, 16, 16]
    }, r.KANJI = {
      id: "Kanji",
      bit: 8,
      ccBits: [8, 10, 12]
    }, r.MIXED = {
      bit: -1
    }, r.getCharCountIndicator = function(n, a) {
      if (!n.ccBits) throw new Error("Invalid mode: " + n);
      if (!e.isValid(a))
        throw new Error("Invalid version: " + a);
      return a >= 1 && a < 10 ? n.ccBits[0] : a < 27 ? n.ccBits[1] : n.ccBits[2];
    }, r.getBestModeForData = function(n) {
      return t.testNumeric(n) ? r.NUMERIC : t.testAlphanumeric(n) ? r.ALPHANUMERIC : t.testKanji(n) ? r.KANJI : r.BYTE;
    }, r.toString = function(n) {
      if (n && n.id) return n.id;
      throw new Error("Invalid mode");
    }, r.isValid = function(n) {
      return n && n.bit && n.ccBits;
    };
    function i(s) {
      if (typeof s != "string")
        throw new Error("Param is not a string");
      switch (s.toLowerCase()) {
        case "numeric":
          return r.NUMERIC;
        case "alphanumeric":
          return r.ALPHANUMERIC;
        case "kanji":
          return r.KANJI;
        case "byte":
          return r.BYTE;
        default:
          throw new Error("Unknown mode: " + s);
      }
    }
    r.from = function(n, a) {
      if (r.isValid(n))
        return n;
      try {
        return i(n);
      } catch {
        return a;
      }
    };
  }(Ai)), Ai;
}
var Gr;
function fa() {
  return Gr || (Gr = 1, function(r) {
    const e = He(), t = tn(), i = cr(), s = Ve(), n = rn(), a = 7973, l = e.getBCHDigit(a);
    function o(g, h, u) {
      for (let f = 1; f <= 40; f++)
        if (h <= r.getCapacity(f, u, g))
          return f;
    }
    function c(g, h) {
      return s.getCharCountIndicator(g, h) + 4;
    }
    function d(g, h) {
      let u = 0;
      return g.forEach(function(f) {
        const b = c(f.mode, h);
        u += b + f.getBitsLength();
      }), u;
    }
    function p(g, h) {
      for (let u = 1; u <= 40; u++)
        if (d(g, u) <= r.getCapacity(u, h, s.MIXED))
          return u;
    }
    r.from = function(h, u) {
      return n.isValid(h) ? parseInt(h, 10) : u;
    }, r.getCapacity = function(h, u, f) {
      if (!n.isValid(h))
        throw new Error("Invalid QR Code version");
      typeof f > "u" && (f = s.BYTE);
      const b = e.getSymbolTotalCodewords(h), v = t.getTotalCodewordsCount(h, u), w = (b - v) * 8;
      if (f === s.MIXED) return w;
      const m = w - c(f, h);
      switch (f) {
        case s.NUMERIC:
          return Math.floor(m / 10 * 3);
        case s.ALPHANUMERIC:
          return Math.floor(m / 11 * 2);
        case s.KANJI:
          return Math.floor(m / 13);
        case s.BYTE:
        default:
          return Math.floor(m / 8);
      }
    }, r.getBestVersionForData = function(h, u) {
      let f;
      const b = i.from(u, i.M);
      if (Array.isArray(h)) {
        if (h.length > 1)
          return p(h, b);
        if (h.length === 0)
          return 1;
        f = h[0];
      } else
        f = h;
      return o(f.mode, f.getLength(), b);
    }, r.getEncodedBits = function(h) {
      if (!n.isValid(h) || h < 7)
        throw new Error("Invalid QR Code version");
      let u = h << 12;
      for (; e.getBCHDigit(u) - l >= 0; )
        u ^= a << e.getBCHDigit(u) - l;
      return h << 12 | u;
    };
  }(Pi)), Pi;
}
var Ii = {}, Wr;
function pa() {
  if (Wr) return Ii;
  Wr = 1;
  const r = He(), e = 1335, t = 21522, i = r.getBCHDigit(e);
  return Ii.getEncodedBits = function(n, a) {
    const l = n.bit << 3 | a;
    let o = l << 10;
    for (; r.getBCHDigit(o) - i >= 0; )
      o ^= e << r.getBCHDigit(o) - i;
    return (l << 10 | o) ^ t;
  }, Ii;
}
var Li = {}, ki, Ur;
function ha() {
  if (Ur) return ki;
  Ur = 1;
  const r = Ve();
  function e(t) {
    this.mode = r.NUMERIC, this.data = t.toString();
  }
  return e.getBitsLength = function(i) {
    return 10 * Math.floor(i / 3) + (i % 3 ? i % 3 * 3 + 1 : 0);
  }, e.prototype.getLength = function() {
    return this.data.length;
  }, e.prototype.getBitsLength = function() {
    return e.getBitsLength(this.data.length);
  }, e.prototype.write = function(i) {
    let s, n, a;
    for (s = 0; s + 3 <= this.data.length; s += 3)
      n = this.data.substr(s, 3), a = parseInt(n, 10), i.put(a, 10);
    const l = this.data.length - s;
    l > 0 && (n = this.data.substr(s), a = parseInt(n, 10), i.put(a, l * 3 + 1));
  }, ki = e, ki;
}
var $i, Kr;
function ma() {
  if (Kr) return $i;
  Kr = 1;
  const r = Ve(), e = [
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
    this.mode = r.ALPHANUMERIC, this.data = i;
  }
  return t.getBitsLength = function(s) {
    return 11 * Math.floor(s / 2) + 6 * (s % 2);
  }, t.prototype.getLength = function() {
    return this.data.length;
  }, t.prototype.getBitsLength = function() {
    return t.getBitsLength(this.data.length);
  }, t.prototype.write = function(s) {
    let n;
    for (n = 0; n + 2 <= this.data.length; n += 2) {
      let a = e.indexOf(this.data[n]) * 45;
      a += e.indexOf(this.data[n + 1]), s.put(a, 11);
    }
    this.data.length % 2 && s.put(e.indexOf(this.data[n]), 6);
  }, $i = t, $i;
}
var _i, Zr;
function ga() {
  if (Zr) return _i;
  Zr = 1;
  const r = Ve();
  function e(t) {
    this.mode = r.BYTE, typeof t == "string" ? this.data = new TextEncoder().encode(t) : this.data = new Uint8Array(t);
  }
  return e.getBitsLength = function(i) {
    return i * 8;
  }, e.prototype.getLength = function() {
    return this.data.length;
  }, e.prototype.getBitsLength = function() {
    return e.getBitsLength(this.data.length);
  }, e.prototype.write = function(t) {
    for (let i = 0, s = this.data.length; i < s; i++)
      t.put(this.data[i], 8);
  }, _i = e, _i;
}
var Di, Jr;
function wa() {
  if (Jr) return Di;
  Jr = 1;
  const r = Ve(), e = He();
  function t(i) {
    this.mode = r.KANJI, this.data = i;
  }
  return t.getBitsLength = function(s) {
    return s * 13;
  }, t.prototype.getLength = function() {
    return this.data.length;
  }, t.prototype.getBitsLength = function() {
    return t.getBitsLength(this.data.length);
  }, t.prototype.write = function(i) {
    let s;
    for (s = 0; s < this.data.length; s++) {
      let n = e.toSJIS(this.data[s]);
      if (n >= 33088 && n <= 40956)
        n -= 33088;
      else if (n >= 57408 && n <= 60351)
        n -= 49472;
      else
        throw new Error(
          "Invalid SJIS character: " + this.data[s] + `
Make sure your charset is UTF-8`
        );
      n = (n >>> 8 & 255) * 192 + (n & 255), i.put(n, 13);
    }
  }, Di = t, Di;
}
var Oi = { exports: {} }, Qr;
function va() {
  return Qr || (Qr = 1, function(r) {
    var e = {
      single_source_shortest_paths: function(t, i, s) {
        var n = {}, a = {};
        a[i] = 0;
        var l = e.PriorityQueue.make();
        l.push(i, 0);
        for (var o, c, d, p, g, h, u, f, b; !l.empty(); ) {
          o = l.pop(), c = o.value, p = o.cost, g = t[c] || {};
          for (d in g)
            g.hasOwnProperty(d) && (h = g[d], u = p + h, f = a[d], b = typeof a[d] > "u", (b || f > u) && (a[d] = u, l.push(d, u), n[d] = c));
        }
        if (typeof s < "u" && typeof a[s] > "u") {
          var v = ["Could not find a path from ", i, " to ", s, "."].join("");
          throw new Error(v);
        }
        return n;
      },
      extract_shortest_path_from_predecessor_list: function(t, i) {
        for (var s = [], n = i; n; )
          s.push(n), t[n], n = t[n];
        return s.reverse(), s;
      },
      find_path: function(t, i, s) {
        var n = e.single_source_shortest_paths(t, i, s);
        return e.extract_shortest_path_from_predecessor_list(
          n,
          s
        );
      },
      /**
       * A very naive priority queue implementation.
       */
      PriorityQueue: {
        make: function(t) {
          var i = e.PriorityQueue, s = {}, n;
          t = t || {};
          for (n in i)
            i.hasOwnProperty(n) && (s[n] = i[n]);
          return s.queue = [], s.sorter = t.sorter || i.default_sorter, s;
        },
        default_sorter: function(t, i) {
          return t.cost - i.cost;
        },
        /**
         * Add a new item to the queue and ensure the highest priority element
         * is at the front of the queue.
         */
        push: function(t, i) {
          var s = { value: t, cost: i };
          this.queue.push(s), this.queue.sort(this.sorter);
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
    r.exports = e;
  }(Oi)), Oi.exports;
}
var es;
function ba() {
  return es || (es = 1, function(r) {
    const e = Ve(), t = ha(), i = ma(), s = ga(), n = wa(), a = sn(), l = He(), o = va();
    function c(v) {
      return unescape(encodeURIComponent(v)).length;
    }
    function d(v, w, m) {
      const y = [];
      let z;
      for (; (z = v.exec(m)) !== null; )
        y.push({
          data: z[0],
          index: z.index,
          mode: w,
          length: z[0].length
        });
      return y;
    }
    function p(v) {
      const w = d(a.NUMERIC, e.NUMERIC, v), m = d(a.ALPHANUMERIC, e.ALPHANUMERIC, v);
      let y, z;
      return l.isKanjiModeEnabled() ? (y = d(a.BYTE, e.BYTE, v), z = d(a.KANJI, e.KANJI, v)) : (y = d(a.BYTE_KANJI, e.BYTE, v), z = []), w.concat(m, y, z).sort(function(A, T) {
        return A.index - T.index;
      }).map(function(A) {
        return {
          data: A.data,
          mode: A.mode,
          length: A.length
        };
      });
    }
    function g(v, w) {
      switch (w) {
        case e.NUMERIC:
          return t.getBitsLength(v);
        case e.ALPHANUMERIC:
          return i.getBitsLength(v);
        case e.KANJI:
          return n.getBitsLength(v);
        case e.BYTE:
          return s.getBitsLength(v);
      }
    }
    function h(v) {
      return v.reduce(function(w, m) {
        const y = w.length - 1 >= 0 ? w[w.length - 1] : null;
        return y && y.mode === m.mode ? (w[w.length - 1].data += m.data, w) : (w.push(m), w);
      }, []);
    }
    function u(v) {
      const w = [];
      for (let m = 0; m < v.length; m++) {
        const y = v[m];
        switch (y.mode) {
          case e.NUMERIC:
            w.push([
              y,
              { data: y.data, mode: e.ALPHANUMERIC, length: y.length },
              { data: y.data, mode: e.BYTE, length: y.length }
            ]);
            break;
          case e.ALPHANUMERIC:
            w.push([
              y,
              { data: y.data, mode: e.BYTE, length: y.length }
            ]);
            break;
          case e.KANJI:
            w.push([
              y,
              { data: y.data, mode: e.BYTE, length: c(y.data) }
            ]);
            break;
          case e.BYTE:
            w.push([
              { data: y.data, mode: e.BYTE, length: c(y.data) }
            ]);
        }
      }
      return w;
    }
    function f(v, w) {
      const m = {}, y = { start: {} };
      let z = ["start"];
      for (let P = 0; P < v.length; P++) {
        const A = v[P], T = [];
        for (let E = 0; E < A.length; E++) {
          const S = A[E], I = "" + P + E;
          T.push(I), m[I] = { node: S, lastCount: 0 }, y[I] = {};
          for (let C = 0; C < z.length; C++) {
            const x = z[C];
            m[x] && m[x].node.mode === S.mode ? (y[x][I] = g(m[x].lastCount + S.length, S.mode) - g(m[x].lastCount, S.mode), m[x].lastCount += S.length) : (m[x] && (m[x].lastCount = S.length), y[x][I] = g(S.length, S.mode) + 4 + e.getCharCountIndicator(S.mode, w));
          }
        }
        z = T;
      }
      for (let P = 0; P < z.length; P++)
        y[z[P]].end = 0;
      return { map: y, table: m };
    }
    function b(v, w) {
      let m;
      const y = e.getBestModeForData(v);
      if (m = e.from(w, y), m !== e.BYTE && m.bit < y.bit)
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
          return new s(v);
      }
    }
    r.fromArray = function(w) {
      return w.reduce(function(m, y) {
        return typeof y == "string" ? m.push(b(y, null)) : y.data && m.push(b(y.data, y.mode)), m;
      }, []);
    }, r.fromString = function(w, m) {
      const y = p(w, l.isKanjiModeEnabled()), z = u(y), P = f(z, m), A = o.find_path(P.map, "start", "end"), T = [];
      for (let E = 1; E < A.length - 1; E++)
        T.push(P.table[A[E]].node);
      return r.fromArray(h(T));
    }, r.rawSplit = function(w) {
      return r.fromArray(
        p(w, l.isKanjiModeEnabled())
      );
    };
  }(Li)), Li;
}
var ts;
function ya() {
  if (ts) return vi;
  ts = 1;
  const r = He(), e = cr(), t = sa(), i = na(), s = aa(), n = oa(), a = la(), l = tn(), o = ua(), c = fa(), d = pa(), p = Ve(), g = ba();
  function h(P, A) {
    const T = P.size, E = n.getPositions(A);
    for (let S = 0; S < E.length; S++) {
      const I = E[S][0], C = E[S][1];
      for (let x = -1; x <= 7; x++)
        if (!(I + x <= -1 || T <= I + x))
          for (let M = -1; M <= 7; M++)
            C + M <= -1 || T <= C + M || (x >= 0 && x <= 6 && (M === 0 || M === 6) || M >= 0 && M <= 6 && (x === 0 || x === 6) || x >= 2 && x <= 4 && M >= 2 && M <= 4 ? P.set(I + x, C + M, !0, !0) : P.set(I + x, C + M, !1, !0));
    }
  }
  function u(P) {
    const A = P.size;
    for (let T = 8; T < A - 8; T++) {
      const E = T % 2 === 0;
      P.set(T, 6, E, !0), P.set(6, T, E, !0);
    }
  }
  function f(P, A) {
    const T = s.getPositions(A);
    for (let E = 0; E < T.length; E++) {
      const S = T[E][0], I = T[E][1];
      for (let C = -2; C <= 2; C++)
        for (let x = -2; x <= 2; x++)
          C === -2 || C === 2 || x === -2 || x === 2 || C === 0 && x === 0 ? P.set(S + C, I + x, !0, !0) : P.set(S + C, I + x, !1, !0);
    }
  }
  function b(P, A) {
    const T = P.size, E = c.getEncodedBits(A);
    let S, I, C;
    for (let x = 0; x < 18; x++)
      S = Math.floor(x / 3), I = x % 3 + T - 8 - 3, C = (E >> x & 1) === 1, P.set(S, I, C, !0), P.set(I, S, C, !0);
  }
  function v(P, A, T) {
    const E = P.size, S = d.getEncodedBits(A, T);
    let I, C;
    for (I = 0; I < 15; I++)
      C = (S >> I & 1) === 1, I < 6 ? P.set(I, 8, C, !0) : I < 8 ? P.set(I + 1, 8, C, !0) : P.set(E - 15 + I, 8, C, !0), I < 8 ? P.set(8, E - I - 1, C, !0) : I < 9 ? P.set(8, 15 - I - 1 + 1, C, !0) : P.set(8, 15 - I - 1, C, !0);
    P.set(E - 8, 8, 1, !0);
  }
  function w(P, A) {
    const T = P.size;
    let E = -1, S = T - 1, I = 7, C = 0;
    for (let x = T - 1; x > 0; x -= 2)
      for (x === 6 && x--; ; ) {
        for (let M = 0; M < 2; M++)
          if (!P.isReserved(S, x - M)) {
            let $ = !1;
            C < A.length && ($ = (A[C] >>> I & 1) === 1), P.set(S, x - M, $), I--, I === -1 && (C++, I = 7);
          }
        if (S += E, S < 0 || T <= S) {
          S -= E, E = -E;
          break;
        }
      }
  }
  function m(P, A, T) {
    const E = new t();
    T.forEach(function(M) {
      E.put(M.mode.bit, 4), E.put(M.getLength(), p.getCharCountIndicator(M.mode, P)), M.write(E);
    });
    const S = r.getSymbolTotalCodewords(P), I = l.getTotalCodewordsCount(P, A), C = (S - I) * 8;
    for (E.getLengthInBits() + 4 <= C && E.put(0, 4); E.getLengthInBits() % 8 !== 0; )
      E.putBit(0);
    const x = (C - E.getLengthInBits()) / 8;
    for (let M = 0; M < x; M++)
      E.put(M % 2 ? 17 : 236, 8);
    return y(E, P, A);
  }
  function y(P, A, T) {
    const E = r.getSymbolTotalCodewords(A), S = l.getTotalCodewordsCount(A, T), I = E - S, C = l.getBlocksCount(A, T), x = E % C, M = C - x, $ = Math.floor(E / C), N = Math.floor(I / C), L = N + 1, k = $ - N, R = new o(k);
    let H = 0;
    const X = new Array(C), ee = new Array(C);
    let ae = 0;
    const Le = new Uint8Array(P.buffer);
    for (let Z = 0; Z < C; Z++) {
      const ue = Z < M ? N : L;
      X[Z] = Le.slice(H, H + ue), ee[Z] = R.encode(X[Z]), H += ue, ae = Math.max(ae, ue);
    }
    const D = new Uint8Array(E);
    let _ = 0, O, V;
    for (O = 0; O < ae; O++)
      for (V = 0; V < C; V++)
        O < X[V].length && (D[_++] = X[V][O]);
    for (O = 0; O < k; O++)
      for (V = 0; V < C; V++)
        D[_++] = ee[V][O];
    return D;
  }
  function z(P, A, T, E) {
    let S;
    if (Array.isArray(P))
      S = g.fromArray(P);
    else if (typeof P == "string") {
      let $ = A;
      if (!$) {
        const N = g.rawSplit(P);
        $ = c.getBestVersionForData(N, T);
      }
      S = g.fromString(P, $ || 40);
    } else
      throw new Error("Invalid data");
    const I = c.getBestVersionForData(S, T);
    if (!I)
      throw new Error("The amount of data is too big to be stored in a QR Code");
    if (!A)
      A = I;
    else if (A < I)
      throw new Error(
        `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + I + `.
`
      );
    const C = m(A, T, S), x = r.getSymbolSize(A), M = new i(x);
    return h(M, A), u(M), f(M, A), v(M, T, 0), A >= 7 && b(M, A), w(M, C), isNaN(E) && (E = a.getBestMask(
      M,
      v.bind(null, M, T)
    )), a.applyMask(E, M), v(M, T, E), {
      modules: M,
      version: A,
      errorCorrectionLevel: T,
      maskPattern: E,
      segments: S
    };
  }
  return vi.create = function(A, T) {
    if (typeof A > "u" || A === "")
      throw new Error("No input text");
    let E = e.M, S, I;
    return typeof T < "u" && (E = e.from(T.errorCorrectionLevel, e.M), S = c.from(T.version), I = a.from(T.maskPattern), T.toSJISFunc && r.setToSJISFunction(T.toSJISFunc)), z(A, S, E, I);
  }, vi;
}
var Ri = {}, Ni = {}, is;
function nn() {
  return is || (is = 1, function(r) {
    function e(t) {
      if (typeof t == "number" && (t = t.toString()), typeof t != "string")
        throw new Error("Color should be defined as hex string");
      let i = t.slice().replace("#", "").split("");
      if (i.length < 3 || i.length === 5 || i.length > 8)
        throw new Error("Invalid hex color: " + t);
      (i.length === 3 || i.length === 4) && (i = Array.prototype.concat.apply([], i.map(function(n) {
        return [n, n];
      }))), i.length === 6 && i.push("F", "F");
      const s = parseInt(i.join(""), 16);
      return {
        r: s >> 24 & 255,
        g: s >> 16 & 255,
        b: s >> 8 & 255,
        a: s & 255,
        hex: "#" + i.slice(0, 6).join("")
      };
    }
    r.getOptions = function(i) {
      i || (i = {}), i.color || (i.color = {});
      const s = typeof i.margin > "u" || i.margin === null || i.margin < 0 ? 4 : i.margin, n = i.width && i.width >= 21 ? i.width : void 0, a = i.scale || 4;
      return {
        width: n,
        scale: n ? 4 : a,
        margin: s,
        color: {
          dark: e(i.color.dark || "#000000ff"),
          light: e(i.color.light || "#ffffffff")
        },
        type: i.type,
        rendererOpts: i.rendererOpts || {}
      };
    }, r.getScale = function(i, s) {
      return s.width && s.width >= i + s.margin * 2 ? s.width / (i + s.margin * 2) : s.scale;
    }, r.getImageWidth = function(i, s) {
      const n = r.getScale(i, s);
      return Math.floor((i + s.margin * 2) * n);
    }, r.qrToImageData = function(i, s, n) {
      const a = s.modules.size, l = s.modules.data, o = r.getScale(a, n), c = Math.floor((a + n.margin * 2) * o), d = n.margin * o, p = [n.color.light, n.color.dark];
      for (let g = 0; g < c; g++)
        for (let h = 0; h < c; h++) {
          let u = (g * c + h) * 4, f = n.color.light;
          if (g >= d && h >= d && g < c - d && h < c - d) {
            const b = Math.floor((g - d) / o), v = Math.floor((h - d) / o);
            f = p[l[b * a + v] ? 1 : 0];
          }
          i[u++] = f.r, i[u++] = f.g, i[u++] = f.b, i[u] = f.a;
        }
    };
  }(Ni)), Ni;
}
var rs;
function Ea() {
  return rs || (rs = 1, function(r) {
    const e = nn();
    function t(s, n, a) {
      s.clearRect(0, 0, n.width, n.height), n.style || (n.style = {}), n.height = a, n.width = a, n.style.height = a + "px", n.style.width = a + "px";
    }
    function i() {
      try {
        return document.createElement("canvas");
      } catch {
        throw new Error("You need to specify a canvas element");
      }
    }
    r.render = function(n, a, l) {
      let o = l, c = a;
      typeof o > "u" && (!a || !a.getContext) && (o = a, a = void 0), a || (c = i()), o = e.getOptions(o);
      const d = e.getImageWidth(n.modules.size, o), p = c.getContext("2d"), g = p.createImageData(d, d);
      return e.qrToImageData(g.data, n, o), t(p, c, d), p.putImageData(g, 0, 0), c;
    }, r.renderToDataURL = function(n, a, l) {
      let o = l;
      typeof o > "u" && (!a || !a.getContext) && (o = a, a = void 0), o || (o = {});
      const c = r.render(n, a, o), d = o.type || "image/png", p = o.rendererOpts || {};
      return c.toDataURL(d, p.quality);
    };
  }(Ri)), Ri;
}
var Bi = {}, ss;
function xa() {
  if (ss) return Bi;
  ss = 1;
  const r = nn();
  function e(s, n) {
    const a = s.a / 255, l = n + '="' + s.hex + '"';
    return a < 1 ? l + " " + n + '-opacity="' + a.toFixed(2).slice(1) + '"' : l;
  }
  function t(s, n, a) {
    let l = s + n;
    return typeof a < "u" && (l += " " + a), l;
  }
  function i(s, n, a) {
    let l = "", o = 0, c = !1, d = 0;
    for (let p = 0; p < s.length; p++) {
      const g = Math.floor(p % n), h = Math.floor(p / n);
      !g && !c && (c = !0), s[p] ? (d++, p > 0 && g > 0 && s[p - 1] || (l += c ? t("M", g + a, 0.5 + h + a) : t("m", o, 0), o = 0, c = !1), g + 1 < n && s[p + 1] || (l += t("h", d), d = 0)) : o++;
    }
    return l;
  }
  return Bi.render = function(n, a, l) {
    const o = r.getOptions(a), c = n.modules.size, d = n.modules.data, p = c + o.margin * 2, g = o.color.light.a ? "<path " + e(o.color.light, "fill") + ' d="M0 0h' + p + "v" + p + 'H0z"/>' : "", h = "<path " + e(o.color.dark, "stroke") + ' d="' + i(d, c, o.margin) + '"/>', u = 'viewBox="0 0 ' + p + " " + p + '"', b = '<svg xmlns="http://www.w3.org/2000/svg" ' + (o.width ? 'width="' + o.width + '" height="' + o.width + '" ' : "") + u + ' shape-rendering="crispEdges">' + g + h + `</svg>
`;
    return typeof l == "function" && l(null, b), b;
  }, Bi;
}
var ns;
function Sa() {
  if (ns) return Xe;
  ns = 1;
  const r = ra(), e = ya(), t = Ea(), i = xa();
  function s(n, a, l, o, c) {
    const d = [].slice.call(arguments, 1), p = d.length, g = typeof d[p - 1] == "function";
    if (!g && !r())
      throw new Error("Callback required as last argument");
    if (g) {
      if (p < 2)
        throw new Error("Too few arguments provided");
      p === 2 ? (c = l, l = a, a = o = void 0) : p === 3 && (a.getContext && typeof c > "u" ? (c = o, o = void 0) : (c = o, o = l, l = a, a = void 0));
    } else {
      if (p < 1)
        throw new Error("Too few arguments provided");
      return p === 1 ? (l = a, a = o = void 0) : p === 2 && !a.getContext && (o = l, l = a, a = void 0), new Promise(function(h, u) {
        try {
          const f = e.create(l, o);
          h(n(f, a, o));
        } catch (f) {
          u(f);
        }
      });
    }
    try {
      const h = e.create(l, o);
      c(null, n(h, a, o));
    } catch (h) {
      c(h);
    }
  }
  return Xe.create = e.create, Xe.toCanvas = s.bind(null, t.render), Xe.toDataURL = s.bind(null, t.renderToDataURL), Xe.toString = s.bind(null, function(n, a, l) {
    return i.render(n, l);
  }), Xe;
}
var Ta = Sa();
const Ca = /* @__PURE__ */ ia(Ta);
function as(r) {
  return r !== null && typeof r == "object" && "constructor" in r && r.constructor === Object;
}
function ur(r, e) {
  r === void 0 && (r = {}), e === void 0 && (e = {});
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter((i) => t.indexOf(i) < 0).forEach((i) => {
    typeof r[i] > "u" ? r[i] = e[i] : as(e[i]) && as(r[i]) && Object.keys(e[i]).length > 0 && ur(r[i], e[i]);
  });
}
const an = {
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
function re() {
  const r = typeof document < "u" ? document : {};
  return ur(r, an), r;
}
const Ma = {
  document: an,
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
  requestAnimationFrame(r) {
    return typeof setTimeout > "u" ? (r(), null) : setTimeout(r, 0);
  },
  cancelAnimationFrame(r) {
    typeof setTimeout > "u" || clearTimeout(r);
  }
};
function K() {
  const r = typeof window < "u" ? window : {};
  return ur(r, Ma), r;
}
function Pe(r) {
  return r === void 0 && (r = ""), r.trim().split(" ").filter((e) => !!e.trim());
}
function Pa(r) {
  const e = r;
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
function Be(r, e) {
  return e === void 0 && (e = 0), setTimeout(r, e);
}
function pe() {
  return Date.now();
}
function Aa(r) {
  const e = K();
  let t;
  return e.getComputedStyle && (t = e.getComputedStyle(r, null)), !t && r.currentStyle && (t = r.currentStyle), t || (t = r.style), t;
}
function Ki(r, e) {
  e === void 0 && (e = "x");
  const t = K();
  let i, s, n;
  const a = Aa(r);
  return t.WebKitCSSMatrix ? (s = a.transform || a.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map((l) => l.replace(",", ".")).join(", ")), n = new t.WebKitCSSMatrix(s === "none" ? "" : s)) : (n = a.MozTransform || a.OTransform || a.MsTransform || a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = n.toString().split(",")), e === "x" && (t.WebKitCSSMatrix ? s = n.m41 : i.length === 16 ? s = parseFloat(i[12]) : s = parseFloat(i[4])), e === "y" && (t.WebKitCSSMatrix ? s = n.m42 : i.length === 16 ? s = parseFloat(i[13]) : s = parseFloat(i[5])), s || 0;
}
function mt(r) {
  return typeof r == "object" && r !== null && r.constructor && Object.prototype.toString.call(r).slice(8, -1) === "Object";
}
function za(r) {
  return typeof window < "u" && typeof window.HTMLElement < "u" ? r instanceof HTMLElement : r && (r.nodeType === 1 || r.nodeType === 11);
}
function le() {
  const r = Object(arguments.length <= 0 ? void 0 : arguments[0]), e = ["__proto__", "constructor", "prototype"];
  for (let t = 1; t < arguments.length; t += 1) {
    const i = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (i != null && !za(i)) {
      const s = Object.keys(Object(i)).filter((n) => e.indexOf(n) < 0);
      for (let n = 0, a = s.length; n < a; n += 1) {
        const l = s[n], o = Object.getOwnPropertyDescriptor(i, l);
        o !== void 0 && o.enumerable && (mt(r[l]) && mt(i[l]) ? i[l].__swiper__ ? r[l] = i[l] : le(r[l], i[l]) : !mt(r[l]) && mt(i[l]) ? (r[l] = {}, i[l].__swiper__ ? r[l] = i[l] : le(r[l], i[l])) : r[l] = i[l]);
      }
    }
  }
  return r;
}
function gt(r, e, t) {
  r.style.setProperty(e, t);
}
function on(r) {
  let {
    swiper: e,
    targetPosition: t,
    side: i
  } = r;
  const s = K(), n = -e.translate;
  let a = null, l;
  const o = e.params.speed;
  e.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(e.cssModeFrameID);
  const c = t > n ? "next" : "prev", d = (g, h) => c === "next" && g >= h || c === "prev" && g <= h, p = () => {
    l = (/* @__PURE__ */ new Date()).getTime(), a === null && (a = l);
    const g = Math.max(Math.min((l - a) / o, 1), 0), h = 0.5 - Math.cos(g * Math.PI) / 2;
    let u = n + h * (t - n);
    if (d(u, t) && (u = t), e.wrapperEl.scrollTo({
      [i]: u
    }), d(u, t)) {
      e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
          [i]: u
        });
      }), s.cancelAnimationFrame(e.cssModeFrameID);
      return;
    }
    e.cssModeFrameID = s.requestAnimationFrame(p);
  };
  p();
}
function Fe(r) {
  return r.querySelector(".swiper-slide-transform") || r.shadowRoot && r.shadowRoot.querySelector(".swiper-slide-transform") || r;
}
function se(r, e) {
  e === void 0 && (e = "");
  const t = K(), i = [...r.children];
  return t.HTMLSlotElement && r instanceof HTMLSlotElement && i.push(...r.assignedElements()), e ? i.filter((s) => s.matches(e)) : i;
}
function Ia(r, e) {
  const t = [e];
  for (; t.length > 0; ) {
    const i = t.shift();
    if (r === i)
      return !0;
    t.push(...i.children, ...i.shadowRoot ? i.shadowRoot.children : [], ...i.assignedElements ? i.assignedElements() : []);
  }
}
function La(r, e) {
  const t = K();
  let i = e.contains(r);
  return !i && t.HTMLSlotElement && e instanceof HTMLSlotElement && (i = [...e.assignedElements()].includes(r), i || (i = Ia(r, e))), i;
}
function Zt(r) {
  try {
    console.warn(r);
    return;
  } catch {
  }
}
function de(r, e) {
  e === void 0 && (e = []);
  const t = document.createElement(r);
  return t.classList.add(...Array.isArray(e) ? e : Pe(e)), t;
}
function Jt(r) {
  const e = K(), t = re(), i = r.getBoundingClientRect(), s = t.body, n = r.clientTop || s.clientTop || 0, a = r.clientLeft || s.clientLeft || 0, l = r === e ? e.scrollY : r.scrollTop, o = r === e ? e.scrollX : r.scrollLeft;
  return {
    top: i.top + l - n,
    left: i.left + o - a
  };
}
function ka(r, e) {
  const t = [];
  for (; r.previousElementSibling; ) {
    const i = r.previousElementSibling;
    e ? i.matches(e) && t.push(i) : t.push(i), r = i;
  }
  return t;
}
function $a(r, e) {
  const t = [];
  for (; r.nextElementSibling; ) {
    const i = r.nextElementSibling;
    e ? i.matches(e) && t.push(i) : t.push(i), r = i;
  }
  return t;
}
function ze(r, e) {
  return K().getComputedStyle(r, null).getPropertyValue(e);
}
function Mt(r) {
  let e = r, t;
  if (e) {
    for (t = 0; (e = e.previousSibling) !== null; )
      e.nodeType === 1 && (t += 1);
    return t;
  }
}
function Oe(r, e) {
  const t = [];
  let i = r.parentElement;
  for (; i; )
    e ? i.matches(e) && t.push(i) : t.push(i), i = i.parentElement;
  return t;
}
function Et(r, e) {
  function t(i) {
    i.target === r && (e.call(r, i), r.removeEventListener("transitionend", t));
  }
  e && r.addEventListener("transitionend", t);
}
function Zi(r, e, t) {
  const i = K();
  return r[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(r, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(r, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom"));
}
function Y(r) {
  return (Array.isArray(r) ? r : [r]).filter((e) => !!e);
}
function ii(r) {
  return (e) => Math.abs(e) > 0 && r.browser && r.browser.need3dFix && Math.abs(e) % 90 === 0 ? e + 1e-3 : e;
}
let Hi;
function _a() {
  const r = K(), e = re();
  return {
    smoothScroll: e.documentElement && e.documentElement.style && "scrollBehavior" in e.documentElement.style,
    touch: !!("ontouchstart" in r || r.DocumentTouch && e instanceof r.DocumentTouch)
  };
}
function ln() {
  return Hi || (Hi = _a()), Hi;
}
let Vi;
function Da(r) {
  let {
    userAgent: e
  } = r === void 0 ? {} : r;
  const t = ln(), i = K(), s = i.navigator.platform, n = e || i.navigator.userAgent, a = {
    ios: !1,
    android: !1
  }, l = i.screen.width, o = i.screen.height, c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
  let d = n.match(/(iPad).*OS\s([\d_]+)/);
  const p = n.match(/(iPod)(.*OS\s([\d_]+))?/), g = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), h = s === "Win32";
  let u = s === "MacIntel";
  const f = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
  return !d && u && t.touch && f.indexOf(`${l}x${o}`) >= 0 && (d = n.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), u = !1), c && !h && (a.os = "android", a.android = !0), (d || g || p) && (a.os = "ios", a.ios = !0), a;
}
function dn(r) {
  return r === void 0 && (r = {}), Vi || (Vi = Da(r)), Vi;
}
let Fi;
function Oa() {
  const r = K(), e = dn();
  let t = !1;
  function i() {
    const l = r.navigator.userAgent.toLowerCase();
    return l.indexOf("safari") >= 0 && l.indexOf("chrome") < 0 && l.indexOf("android") < 0;
  }
  if (i()) {
    const l = String(r.navigator.userAgent);
    if (l.includes("Version/")) {
      const [o, c] = l.split("Version/")[1].split(" ")[0].split(".").map((d) => Number(d));
      t = o < 16 || o === 16 && c < 2;
    }
  }
  const s = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(r.navigator.userAgent), n = i(), a = n || s && e.ios;
  return {
    isSafari: t || n,
    needPerspectiveFix: t,
    need3dFix: a,
    isWebView: s
  };
}
function cn() {
  return Fi || (Fi = Oa()), Fi;
}
function Ra(r) {
  let {
    swiper: e,
    on: t,
    emit: i
  } = r;
  const s = K();
  let n = null, a = null;
  const l = () => {
    !e || e.destroyed || !e.initialized || (i("beforeResize"), i("resize"));
  }, o = () => {
    !e || e.destroyed || !e.initialized || (n = new ResizeObserver((p) => {
      a = s.requestAnimationFrame(() => {
        const {
          width: g,
          height: h
        } = e;
        let u = g, f = h;
        p.forEach((b) => {
          let {
            contentBoxSize: v,
            contentRect: w,
            target: m
          } = b;
          m && m !== e.el || (u = w ? w.width : (v[0] || v).inlineSize, f = w ? w.height : (v[0] || v).blockSize);
        }), (u !== g || f !== h) && l();
      });
    }), n.observe(e.el));
  }, c = () => {
    a && s.cancelAnimationFrame(a), n && n.unobserve && e.el && (n.unobserve(e.el), n = null);
  }, d = () => {
    !e || e.destroyed || !e.initialized || i("orientationchange");
  };
  t("init", () => {
    if (e.params.resizeObserver && typeof s.ResizeObserver < "u") {
      o();
      return;
    }
    s.addEventListener("resize", l), s.addEventListener("orientationchange", d);
  }), t("destroy", () => {
    c(), s.removeEventListener("resize", l), s.removeEventListener("orientationchange", d);
  });
}
function Na(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: s
  } = r;
  const n = [], a = K(), l = function(d, p) {
    p === void 0 && (p = {});
    const g = a.MutationObserver || a.WebkitMutationObserver, h = new g((u) => {
      if (e.__preventObserver__) return;
      if (u.length === 1) {
        s("observerUpdate", u[0]);
        return;
      }
      const f = function() {
        s("observerUpdate", u[0]);
      };
      a.requestAnimationFrame ? a.requestAnimationFrame(f) : a.setTimeout(f, 0);
    });
    h.observe(d, {
      attributes: typeof p.attributes > "u" ? !0 : p.attributes,
      childList: e.isElement || (typeof p.childList > "u" ? !0 : p).childList,
      characterData: typeof p.characterData > "u" ? !0 : p.characterData
    }), n.push(h);
  }, o = () => {
    if (e.params.observer) {
      if (e.params.observeParents) {
        const d = Oe(e.hostEl);
        for (let p = 0; p < d.length; p += 1)
          l(d[p]);
      }
      l(e.hostEl, {
        childList: e.params.observeSlideChildren
      }), l(e.wrapperEl, {
        attributes: !1
      });
    }
  }, c = () => {
    n.forEach((d) => {
      d.disconnect();
    }), n.splice(0, n.length);
  };
  t({
    observer: !1,
    observeParents: !1,
    observeSlideChildren: !1
  }), i("init", o), i("destroy", c);
}
var Ba = {
  on(r, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    const s = t ? "unshift" : "push";
    return r.split(" ").forEach((n) => {
      i.eventsListeners[n] || (i.eventsListeners[n] = []), i.eventsListeners[n][s](e);
    }), i;
  },
  once(r, e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    function s() {
      i.off(r, s), s.__emitterProxy && delete s.__emitterProxy;
      for (var n = arguments.length, a = new Array(n), l = 0; l < n; l++)
        a[l] = arguments[l];
      e.apply(i, a);
    }
    return s.__emitterProxy = e, i.on(r, s, t);
  },
  onAny(r, e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || typeof r != "function") return t;
    const i = e ? "unshift" : "push";
    return t.eventsAnyListeners.indexOf(r) < 0 && t.eventsAnyListeners[i](r), t;
  },
  offAny(r) {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
    const t = e.eventsAnyListeners.indexOf(r);
    return t >= 0 && e.eventsAnyListeners.splice(t, 1), e;
  },
  off(r, e) {
    const t = this;
    return !t.eventsListeners || t.destroyed || !t.eventsListeners || r.split(" ").forEach((i) => {
      typeof e > "u" ? t.eventsListeners[i] = [] : t.eventsListeners[i] && t.eventsListeners[i].forEach((s, n) => {
        (s === e || s.__emitterProxy && s.__emitterProxy === e) && t.eventsListeners[i].splice(n, 1);
      });
    }), t;
  },
  emit() {
    const r = this;
    if (!r.eventsListeners || r.destroyed || !r.eventsListeners) return r;
    let e, t, i;
    for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++)
      n[a] = arguments[a];
    return typeof n[0] == "string" || Array.isArray(n[0]) ? (e = n[0], t = n.slice(1, n.length), i = r) : (e = n[0].events, t = n[0].data, i = n[0].context || r), t.unshift(i), (Array.isArray(e) ? e : e.split(" ")).forEach((o) => {
      r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach((c) => {
        c.apply(i, [o, ...t]);
      }), r.eventsListeners && r.eventsListeners[o] && r.eventsListeners[o].forEach((c) => {
        c.apply(i, t);
      });
    }), r;
  }
};
function Ha() {
  const r = this;
  let e, t;
  const i = r.el;
  typeof r.params.width < "u" && r.params.width !== null ? e = r.params.width : e = i.clientWidth, typeof r.params.height < "u" && r.params.height !== null ? t = r.params.height : t = i.clientHeight, !(e === 0 && r.isHorizontal() || t === 0 && r.isVertical()) && (e = e - parseInt(ze(i, "padding-left") || 0, 10) - parseInt(ze(i, "padding-right") || 0, 10), t = t - parseInt(ze(i, "padding-top") || 0, 10) - parseInt(ze(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(r, {
    width: e,
    height: t,
    size: r.isHorizontal() ? e : t
  }));
}
function Va() {
  const r = this;
  function e(S, I) {
    return parseFloat(S.getPropertyValue(r.getDirectionLabel(I)) || 0);
  }
  const t = r.params, {
    wrapperEl: i,
    slidesEl: s,
    size: n,
    rtlTranslate: a,
    wrongRTL: l
  } = r, o = r.virtual && t.virtual.enabled, c = o ? r.virtual.slides.length : r.slides.length, d = se(s, `.${r.params.slideClass}, swiper-slide`), p = o ? r.virtual.slides.length : d.length;
  let g = [];
  const h = [], u = [];
  let f = t.slidesOffsetBefore;
  typeof f == "function" && (f = t.slidesOffsetBefore.call(r));
  let b = t.slidesOffsetAfter;
  typeof b == "function" && (b = t.slidesOffsetAfter.call(r));
  const v = r.snapGrid.length, w = r.slidesGrid.length;
  let m = t.spaceBetween, y = -f, z = 0, P = 0;
  if (typeof n > "u")
    return;
  typeof m == "string" && m.indexOf("%") >= 0 ? m = parseFloat(m.replace("%", "")) / 100 * n : typeof m == "string" && (m = parseFloat(m)), r.virtualSize = -m, d.forEach((S) => {
    a ? S.style.marginLeft = "" : S.style.marginRight = "", S.style.marginBottom = "", S.style.marginTop = "";
  }), t.centeredSlides && t.cssMode && (gt(i, "--swiper-centered-offset-before", ""), gt(i, "--swiper-centered-offset-after", ""));
  const A = t.grid && t.grid.rows > 1 && r.grid;
  A ? r.grid.initSlides(d) : r.grid && r.grid.unsetSlides();
  let T;
  const E = t.slidesPerView === "auto" && t.breakpoints && Object.keys(t.breakpoints).filter((S) => typeof t.breakpoints[S].slidesPerView < "u").length > 0;
  for (let S = 0; S < p; S += 1) {
    T = 0;
    let I;
    if (d[S] && (I = d[S]), A && r.grid.updateSlide(S, I, d), !(d[S] && ze(I, "display") === "none")) {
      if (t.slidesPerView === "auto") {
        E && (d[S].style[r.getDirectionLabel("width")] = "");
        const C = getComputedStyle(I), x = I.style.transform, M = I.style.webkitTransform;
        if (x && (I.style.transform = "none"), M && (I.style.webkitTransform = "none"), t.roundLengths)
          T = r.isHorizontal() ? Zi(I, "width") : Zi(I, "height");
        else {
          const $ = e(C, "width"), N = e(C, "padding-left"), L = e(C, "padding-right"), k = e(C, "margin-left"), R = e(C, "margin-right"), H = C.getPropertyValue("box-sizing");
          if (H && H === "border-box")
            T = $ + k + R;
          else {
            const {
              clientWidth: X,
              offsetWidth: ee
            } = I;
            T = $ + N + L + k + R + (ee - X);
          }
        }
        x && (I.style.transform = x), M && (I.style.webkitTransform = M), t.roundLengths && (T = Math.floor(T));
      } else
        T = (n - (t.slidesPerView - 1) * m) / t.slidesPerView, t.roundLengths && (T = Math.floor(T)), d[S] && (d[S].style[r.getDirectionLabel("width")] = `${T}px`);
      d[S] && (d[S].swiperSlideSize = T), u.push(T), t.centeredSlides ? (y = y + T / 2 + z / 2 + m, z === 0 && S !== 0 && (y = y - n / 2 - m), S === 0 && (y = y - n / 2 - m), Math.abs(y) < 1 / 1e3 && (y = 0), t.roundLengths && (y = Math.floor(y)), P % t.slidesPerGroup === 0 && g.push(y), h.push(y)) : (t.roundLengths && (y = Math.floor(y)), (P - Math.min(r.params.slidesPerGroupSkip, P)) % r.params.slidesPerGroup === 0 && g.push(y), h.push(y), y = y + T + m), r.virtualSize += T + m, z = T, P += 1;
    }
  }
  if (r.virtualSize = Math.max(r.virtualSize, n) + b, a && l && (t.effect === "slide" || t.effect === "coverflow") && (i.style.width = `${r.virtualSize + m}px`), t.setWrapperSize && (i.style[r.getDirectionLabel("width")] = `${r.virtualSize + m}px`), A && r.grid.updateWrapperSize(T, g), !t.centeredSlides) {
    const S = [];
    for (let I = 0; I < g.length; I += 1) {
      let C = g[I];
      t.roundLengths && (C = Math.floor(C)), g[I] <= r.virtualSize - n && S.push(C);
    }
    g = S, Math.floor(r.virtualSize - n) - Math.floor(g[g.length - 1]) > 1 && g.push(r.virtualSize - n);
  }
  if (o && t.loop) {
    const S = u[0] + m;
    if (t.slidesPerGroup > 1) {
      const I = Math.ceil((r.virtual.slidesBefore + r.virtual.slidesAfter) / t.slidesPerGroup), C = S * t.slidesPerGroup;
      for (let x = 0; x < I; x += 1)
        g.push(g[g.length - 1] + C);
    }
    for (let I = 0; I < r.virtual.slidesBefore + r.virtual.slidesAfter; I += 1)
      t.slidesPerGroup === 1 && g.push(g[g.length - 1] + S), h.push(h[h.length - 1] + S), r.virtualSize += S;
  }
  if (g.length === 0 && (g = [0]), m !== 0) {
    const S = r.isHorizontal() && a ? "marginLeft" : r.getDirectionLabel("marginRight");
    d.filter((I, C) => !t.cssMode || t.loop ? !0 : C !== d.length - 1).forEach((I) => {
      I.style[S] = `${m}px`;
    });
  }
  if (t.centeredSlides && t.centeredSlidesBounds) {
    let S = 0;
    u.forEach((C) => {
      S += C + (m || 0);
    }), S -= m;
    const I = S > n ? S - n : 0;
    g = g.map((C) => C <= 0 ? -f : C > I ? I + b : C);
  }
  if (t.centerInsufficientSlides) {
    let S = 0;
    u.forEach((C) => {
      S += C + (m || 0);
    }), S -= m;
    const I = (t.slidesOffsetBefore || 0) + (t.slidesOffsetAfter || 0);
    if (S + I < n) {
      const C = (n - S - I) / 2;
      g.forEach((x, M) => {
        g[M] = x - C;
      }), h.forEach((x, M) => {
        h[M] = x + C;
      });
    }
  }
  if (Object.assign(r, {
    slides: d,
    snapGrid: g,
    slidesGrid: h,
    slidesSizesGrid: u
  }), t.centeredSlides && t.cssMode && !t.centeredSlidesBounds) {
    gt(i, "--swiper-centered-offset-before", `${-g[0]}px`), gt(i, "--swiper-centered-offset-after", `${r.size / 2 - u[u.length - 1] / 2}px`);
    const S = -r.snapGrid[0], I = -r.slidesGrid[0];
    r.snapGrid = r.snapGrid.map((C) => C + S), r.slidesGrid = r.slidesGrid.map((C) => C + I);
  }
  if (p !== c && r.emit("slidesLengthChange"), g.length !== v && (r.params.watchOverflow && r.checkOverflow(), r.emit("snapGridLengthChange")), h.length !== w && r.emit("slidesGridLengthChange"), t.watchSlidesProgress && r.updateSlidesOffset(), r.emit("slidesUpdated"), !o && !t.cssMode && (t.effect === "slide" || t.effect === "fade")) {
    const S = `${t.containerModifierClass}backface-hidden`, I = r.el.classList.contains(S);
    p <= t.maxBackfaceHiddenSlides ? I || r.el.classList.add(S) : I && r.el.classList.remove(S);
  }
}
function Fa(r) {
  const e = this, t = [], i = e.virtual && e.params.virtual.enabled;
  let s = 0, n;
  typeof r == "number" ? e.setTransition(r) : r === !0 && e.setTransition(e.params.speed);
  const a = (l) => i ? e.slides[e.getSlideIndexByData(l)] : e.slides[l];
  if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
    if (e.params.centeredSlides)
      (e.visibleSlides || []).forEach((l) => {
        t.push(l);
      });
    else
      for (n = 0; n < Math.ceil(e.params.slidesPerView); n += 1) {
        const l = e.activeIndex + n;
        if (l > e.slides.length && !i) break;
        t.push(a(l));
      }
  else
    t.push(a(e.activeIndex));
  for (n = 0; n < t.length; n += 1)
    if (typeof t[n] < "u") {
      const l = t[n].offsetHeight;
      s = l > s ? l : s;
    }
  (s || s === 0) && (e.wrapperEl.style.height = `${s}px`);
}
function qa() {
  const r = this, e = r.slides, t = r.isElement ? r.isHorizontal() ? r.wrapperEl.offsetLeft : r.wrapperEl.offsetTop : 0;
  for (let i = 0; i < e.length; i += 1)
    e[i].swiperSlideOffset = (r.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - r.cssOverflowAdjustment();
}
const os = (r, e, t) => {
  e && !r.classList.contains(t) ? r.classList.add(t) : !e && r.classList.contains(t) && r.classList.remove(t);
};
function Ya(r) {
  r === void 0 && (r = this && this.translate || 0);
  const e = this, t = e.params, {
    slides: i,
    rtlTranslate: s,
    snapGrid: n
  } = e;
  if (i.length === 0) return;
  typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
  let a = -r;
  s && (a = r), e.visibleSlidesIndexes = [], e.visibleSlides = [];
  let l = t.spaceBetween;
  typeof l == "string" && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * e.size : typeof l == "string" && (l = parseFloat(l));
  for (let o = 0; o < i.length; o += 1) {
    const c = i[o];
    let d = c.swiperSlideOffset;
    t.cssMode && t.centeredSlides && (d -= i[0].swiperSlideOffset);
    const p = (a + (t.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + l), g = (a - n[0] + (t.centeredSlides ? e.minTranslate() : 0) - d) / (c.swiperSlideSize + l), h = -(a - d), u = h + e.slidesSizesGrid[o], f = h >= 0 && h <= e.size - e.slidesSizesGrid[o], b = h >= 0 && h < e.size - 1 || u > 1 && u <= e.size || h <= 0 && u >= e.size;
    b && (e.visibleSlides.push(c), e.visibleSlidesIndexes.push(o)), os(c, b, t.slideVisibleClass), os(c, f, t.slideFullyVisibleClass), c.progress = s ? -p : p, c.originalProgress = s ? -g : g;
  }
}
function ja(r) {
  const e = this;
  if (typeof r > "u") {
    const d = e.rtlTranslate ? -1 : 1;
    r = e && e.translate && e.translate * d || 0;
  }
  const t = e.params, i = e.maxTranslate() - e.minTranslate();
  let {
    progress: s,
    isBeginning: n,
    isEnd: a,
    progressLoop: l
  } = e;
  const o = n, c = a;
  if (i === 0)
    s = 0, n = !0, a = !0;
  else {
    s = (r - e.minTranslate()) / i;
    const d = Math.abs(r - e.minTranslate()) < 1, p = Math.abs(r - e.maxTranslate()) < 1;
    n = d || s <= 0, a = p || s >= 1, d && (s = 0), p && (s = 1);
  }
  if (t.loop) {
    const d = e.getSlideIndexByData(0), p = e.getSlideIndexByData(e.slides.length - 1), g = e.slidesGrid[d], h = e.slidesGrid[p], u = e.slidesGrid[e.slidesGrid.length - 1], f = Math.abs(r);
    f >= g ? l = (f - g) / u : l = (f + u - h) / u, l > 1 && (l -= 1);
  }
  Object.assign(e, {
    progress: s,
    progressLoop: l,
    isBeginning: n,
    isEnd: a
  }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && e.updateSlidesProgress(r), n && !o && e.emit("reachBeginning toEdge"), a && !c && e.emit("reachEnd toEdge"), (o && !n || c && !a) && e.emit("fromEdge"), e.emit("progress", s);
}
const qi = (r, e, t) => {
  e && !r.classList.contains(t) ? r.classList.add(t) : !e && r.classList.contains(t) && r.classList.remove(t);
};
function Xa() {
  const r = this, {
    slides: e,
    params: t,
    slidesEl: i,
    activeIndex: s
  } = r, n = r.virtual && t.virtual.enabled, a = r.grid && t.grid && t.grid.rows > 1, l = (p) => se(i, `.${t.slideClass}${p}, swiper-slide${p}`)[0];
  let o, c, d;
  if (n)
    if (t.loop) {
      let p = s - r.virtual.slidesBefore;
      p < 0 && (p = r.virtual.slides.length + p), p >= r.virtual.slides.length && (p -= r.virtual.slides.length), o = l(`[data-swiper-slide-index="${p}"]`);
    } else
      o = l(`[data-swiper-slide-index="${s}"]`);
  else
    a ? (o = e.find((p) => p.column === s), d = e.find((p) => p.column === s + 1), c = e.find((p) => p.column === s - 1)) : o = e[s];
  o && (a || (d = $a(o, `.${t.slideClass}, swiper-slide`)[0], t.loop && !d && (d = e[0]), c = ka(o, `.${t.slideClass}, swiper-slide`)[0], t.loop && !c === 0 && (c = e[e.length - 1]))), e.forEach((p) => {
    qi(p, p === o, t.slideActiveClass), qi(p, p === d, t.slideNextClass), qi(p, p === c, t.slidePrevClass);
  }), r.emitSlidesClasses();
}
const Ft = (r, e) => {
  if (!r || r.destroyed || !r.params) return;
  const t = () => r.isElement ? "swiper-slide" : `.${r.params.slideClass}`, i = e.closest(t());
  if (i) {
    let s = i.querySelector(`.${r.params.lazyPreloaderClass}`);
    !s && r.isElement && (i.shadowRoot ? s = i.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
      i.shadowRoot && (s = i.shadowRoot.querySelector(`.${r.params.lazyPreloaderClass}`), s && s.remove());
    })), s && s.remove();
  }
}, Yi = (r, e) => {
  if (!r.slides[e]) return;
  const t = r.slides[e].querySelector('[loading="lazy"]');
  t && t.removeAttribute("loading");
}, Ji = (r) => {
  if (!r || r.destroyed || !r.params) return;
  let e = r.params.lazyPreloadPrevNext;
  const t = r.slides.length;
  if (!t || !e || e < 0) return;
  e = Math.min(e, t);
  const i = r.params.slidesPerView === "auto" ? r.slidesPerViewDynamic() : Math.ceil(r.params.slidesPerView), s = r.activeIndex;
  if (r.params.grid && r.params.grid.rows > 1) {
    const a = s, l = [a - e];
    l.push(...Array.from({
      length: e
    }).map((o, c) => a + i + c)), r.slides.forEach((o, c) => {
      l.includes(o.column) && Yi(r, c);
    });
    return;
  }
  const n = s + i - 1;
  if (r.params.rewind || r.params.loop)
    for (let a = s - e; a <= n + e; a += 1) {
      const l = (a % t + t) % t;
      (l < s || l > n) && Yi(r, l);
    }
  else
    for (let a = Math.max(s - e, 0); a <= Math.min(n + e, t - 1); a += 1)
      a !== s && (a > n || a < s) && Yi(r, a);
};
function Ga(r) {
  const {
    slidesGrid: e,
    params: t
  } = r, i = r.rtlTranslate ? r.translate : -r.translate;
  let s;
  for (let n = 0; n < e.length; n += 1)
    typeof e[n + 1] < "u" ? i >= e[n] && i < e[n + 1] - (e[n + 1] - e[n]) / 2 ? s = n : i >= e[n] && i < e[n + 1] && (s = n + 1) : i >= e[n] && (s = n);
  return t.normalizeSlideIndex && (s < 0 || typeof s > "u") && (s = 0), s;
}
function Wa(r) {
  const e = this, t = e.rtlTranslate ? e.translate : -e.translate, {
    snapGrid: i,
    params: s,
    activeIndex: n,
    realIndex: a,
    snapIndex: l
  } = e;
  let o = r, c;
  const d = (h) => {
    let u = h - e.virtual.slidesBefore;
    return u < 0 && (u = e.virtual.slides.length + u), u >= e.virtual.slides.length && (u -= e.virtual.slides.length), u;
  };
  if (typeof o > "u" && (o = Ga(e)), i.indexOf(t) >= 0)
    c = i.indexOf(t);
  else {
    const h = Math.min(s.slidesPerGroupSkip, o);
    c = h + Math.floor((o - h) / s.slidesPerGroup);
  }
  if (c >= i.length && (c = i.length - 1), o === n && !e.params.loop) {
    c !== l && (e.snapIndex = c, e.emit("snapIndexChange"));
    return;
  }
  if (o === n && e.params.loop && e.virtual && e.params.virtual.enabled) {
    e.realIndex = d(o);
    return;
  }
  const p = e.grid && s.grid && s.grid.rows > 1;
  let g;
  if (e.virtual && s.virtual.enabled && s.loop)
    g = d(o);
  else if (p) {
    const h = e.slides.find((f) => f.column === o);
    let u = parseInt(h.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(u) && (u = Math.max(e.slides.indexOf(h), 0)), g = Math.floor(u / s.grid.rows);
  } else if (e.slides[o]) {
    const h = e.slides[o].getAttribute("data-swiper-slide-index");
    h ? g = parseInt(h, 10) : g = o;
  } else
    g = o;
  Object.assign(e, {
    previousSnapIndex: l,
    snapIndex: c,
    previousRealIndex: a,
    realIndex: g,
    previousIndex: n,
    activeIndex: o
  }), e.initialized && Ji(e), e.emit("activeIndexChange"), e.emit("snapIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && (a !== g && e.emit("realIndexChange"), e.emit("slideChange"));
}
function Ua(r, e) {
  const t = this, i = t.params;
  let s = r.closest(`.${i.slideClass}, swiper-slide`);
  !s && t.isElement && e && e.length > 1 && e.includes(r) && [...e.slice(e.indexOf(r) + 1, e.length)].forEach((l) => {
    !s && l.matches && l.matches(`.${i.slideClass}, swiper-slide`) && (s = l);
  });
  let n = !1, a;
  if (s) {
    for (let l = 0; l < t.slides.length; l += 1)
      if (t.slides[l] === s) {
        n = !0, a = l;
        break;
      }
  }
  if (s && n)
    t.clickedSlide = s, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = a;
  else {
    t.clickedSlide = void 0, t.clickedIndex = void 0;
    return;
  }
  i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
}
var Ka = {
  updateSize: Ha,
  updateSlides: Va,
  updateAutoHeight: Fa,
  updateSlidesOffset: qa,
  updateSlidesProgress: Ya,
  updateProgress: ja,
  updateSlidesClasses: Xa,
  updateActiveIndex: Wa,
  updateClickedSlide: Ua
};
function Za(r) {
  r === void 0 && (r = this.isHorizontal() ? "x" : "y");
  const e = this, {
    params: t,
    rtlTranslate: i,
    translate: s,
    wrapperEl: n
  } = e;
  if (t.virtualTranslate)
    return i ? -s : s;
  if (t.cssMode)
    return s;
  let a = Ki(n, r);
  return a += e.cssOverflowAdjustment(), i && (a = -a), a || 0;
}
function Ja(r, e) {
  const t = this, {
    rtlTranslate: i,
    params: s,
    wrapperEl: n,
    progress: a
  } = t;
  let l = 0, o = 0;
  const c = 0;
  t.isHorizontal() ? l = i ? -r : r : o = r, s.roundLengths && (l = Math.floor(l), o = Math.floor(o)), t.previousTranslate = t.translate, t.translate = t.isHorizontal() ? l : o, s.cssMode ? n[t.isHorizontal() ? "scrollLeft" : "scrollTop"] = t.isHorizontal() ? -l : -o : s.virtualTranslate || (t.isHorizontal() ? l -= t.cssOverflowAdjustment() : o -= t.cssOverflowAdjustment(), n.style.transform = `translate3d(${l}px, ${o}px, ${c}px)`);
  let d;
  const p = t.maxTranslate() - t.minTranslate();
  p === 0 ? d = 0 : d = (r - t.minTranslate()) / p, d !== a && t.updateProgress(r), t.emit("setTranslate", t.translate, e);
}
function Qa() {
  return -this.snapGrid[0];
}
function eo() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function to(r, e, t, i, s) {
  r === void 0 && (r = 0), e === void 0 && (e = this.params.speed), t === void 0 && (t = !0), i === void 0 && (i = !0);
  const n = this, {
    params: a,
    wrapperEl: l
  } = n;
  if (n.animating && a.preventInteractionOnTransition)
    return !1;
  const o = n.minTranslate(), c = n.maxTranslate();
  let d;
  if (i && r > o ? d = o : i && r < c ? d = c : d = r, n.updateProgress(d), a.cssMode) {
    const p = n.isHorizontal();
    if (e === 0)
      l[p ? "scrollLeft" : "scrollTop"] = -d;
    else {
      if (!n.support.smoothScroll)
        return on({
          swiper: n,
          targetPosition: -d,
          side: p ? "left" : "top"
        }), !0;
      l.scrollTo({
        [p ? "left" : "top"]: -d,
        behavior: "smooth"
      });
    }
    return !0;
  }
  return e === 0 ? (n.setTransition(0), n.setTranslate(d), t && (n.emit("beforeTransitionStart", e, s), n.emit("transitionEnd"))) : (n.setTransition(e), n.setTranslate(d), t && (n.emit("beforeTransitionStart", e, s), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(g) {
    !n || n.destroyed || g.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, n.animating = !1, t && n.emit("transitionEnd"));
  }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0;
}
var io = {
  getTranslate: Za,
  setTranslate: Ja,
  minTranslate: Qa,
  maxTranslate: eo,
  translateTo: to
};
function ro(r, e) {
  const t = this;
  t.params.cssMode || (t.wrapperEl.style.transitionDuration = `${r}ms`, t.wrapperEl.style.transitionDelay = r === 0 ? "0ms" : ""), t.emit("setTransition", r, e);
}
function un(r) {
  let {
    swiper: e,
    runCallbacks: t,
    direction: i,
    step: s
  } = r;
  const {
    activeIndex: n,
    previousIndex: a
  } = e;
  let l = i;
  if (l || (n > a ? l = "next" : n < a ? l = "prev" : l = "reset"), e.emit(`transition${s}`), t && n !== a) {
    if (l === "reset") {
      e.emit(`slideResetTransition${s}`);
      return;
    }
    e.emit(`slideChangeTransition${s}`), l === "next" ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`);
  }
}
function so(r, e) {
  r === void 0 && (r = !0);
  const t = this, {
    params: i
  } = t;
  i.cssMode || (i.autoHeight && t.updateAutoHeight(), un({
    swiper: t,
    runCallbacks: r,
    direction: e,
    step: "Start"
  }));
}
function no(r, e) {
  r === void 0 && (r = !0);
  const t = this, {
    params: i
  } = t;
  t.animating = !1, !i.cssMode && (t.setTransition(0), un({
    swiper: t,
    runCallbacks: r,
    direction: e,
    step: "End"
  }));
}
var ao = {
  setTransition: ro,
  transitionStart: so,
  transitionEnd: no
};
function oo(r, e, t, i, s) {
  r === void 0 && (r = 0), t === void 0 && (t = !0), typeof r == "string" && (r = parseInt(r, 10));
  const n = this;
  let a = r;
  a < 0 && (a = 0);
  const {
    params: l,
    snapGrid: o,
    slidesGrid: c,
    previousIndex: d,
    activeIndex: p,
    rtlTranslate: g,
    wrapperEl: h,
    enabled: u
  } = n;
  if (!u && !i && !s || n.destroyed || n.animating && l.preventInteractionOnTransition)
    return !1;
  typeof e > "u" && (e = n.params.speed);
  const f = Math.min(n.params.slidesPerGroupSkip, a);
  let b = f + Math.floor((a - f) / n.params.slidesPerGroup);
  b >= o.length && (b = o.length - 1);
  const v = -o[b];
  if (l.normalizeSlideIndex)
    for (let A = 0; A < c.length; A += 1) {
      const T = -Math.floor(v * 100), E = Math.floor(c[A] * 100), S = Math.floor(c[A + 1] * 100);
      typeof c[A + 1] < "u" ? T >= E && T < S - (S - E) / 2 ? a = A : T >= E && T < S && (a = A + 1) : T >= E && (a = A);
    }
  if (n.initialized && a !== p && (!n.allowSlideNext && (g ? v > n.translate && v > n.minTranslate() : v < n.translate && v < n.minTranslate()) || !n.allowSlidePrev && v > n.translate && v > n.maxTranslate() && (p || 0) !== a))
    return !1;
  a !== (d || 0) && t && n.emit("beforeSlideChangeStart"), n.updateProgress(v);
  let w;
  a > p ? w = "next" : a < p ? w = "prev" : w = "reset";
  const m = n.virtual && n.params.virtual.enabled;
  if (!(m && s) && (g && -v === n.translate || !g && v === n.translate))
    return n.updateActiveIndex(a), l.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), l.effect !== "slide" && n.setTranslate(v), w !== "reset" && (n.transitionStart(t, w), n.transitionEnd(t, w)), !1;
  if (l.cssMode) {
    const A = n.isHorizontal(), T = g ? v : -v;
    if (e === 0)
      m && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), m && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
        h[A ? "scrollLeft" : "scrollTop"] = T;
      })) : h[A ? "scrollLeft" : "scrollTop"] = T, m && requestAnimationFrame(() => {
        n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1;
      });
    else {
      if (!n.support.smoothScroll)
        return on({
          swiper: n,
          targetPosition: T,
          side: A ? "left" : "top"
        }), !0;
      h.scrollTo({
        [A ? "left" : "top"]: T,
        behavior: "smooth"
      });
    }
    return !0;
  }
  const P = cn().isSafari;
  return m && !s && P && n.isElement && n.virtual.update(!1, !1, a), n.setTransition(e), n.setTranslate(v), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", e, i), n.transitionStart(t, w), e === 0 ? n.transitionEnd(t, w) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(T) {
    !n || n.destroyed || T.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(t, w));
  }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0;
}
function lo(r, e, t, i) {
  r === void 0 && (r = 0), t === void 0 && (t = !0), typeof r == "string" && (r = parseInt(r, 10));
  const s = this;
  if (s.destroyed) return;
  typeof e > "u" && (e = s.params.speed);
  const n = s.grid && s.params.grid && s.params.grid.rows > 1;
  let a = r;
  if (s.params.loop)
    if (s.virtual && s.params.virtual.enabled)
      a = a + s.virtual.slidesBefore;
    else {
      let l;
      if (n) {
        const g = a * s.params.grid.rows;
        l = s.slides.find((h) => h.getAttribute("data-swiper-slide-index") * 1 === g).column;
      } else
        l = s.getSlideIndexByData(a);
      const o = n ? Math.ceil(s.slides.length / s.params.grid.rows) : s.slides.length, {
        centeredSlides: c
      } = s.params;
      let d = s.params.slidesPerView;
      d === "auto" ? d = s.slidesPerViewDynamic() : (d = Math.ceil(parseFloat(s.params.slidesPerView, 10)), c && d % 2 === 0 && (d = d + 1));
      let p = o - l < d;
      if (c && (p = p || l < Math.ceil(d / 2)), i && c && s.params.slidesPerView !== "auto" && !n && (p = !1), p) {
        const g = c ? l < s.activeIndex ? "prev" : "next" : l - s.activeIndex - 1 < s.params.slidesPerView ? "next" : "prev";
        s.loopFix({
          direction: g,
          slideTo: !0,
          activeSlideIndex: g === "next" ? l + 1 : l - o + 1,
          slideRealIndex: g === "next" ? s.realIndex : void 0
        });
      }
      if (n) {
        const g = a * s.params.grid.rows;
        a = s.slides.find((h) => h.getAttribute("data-swiper-slide-index") * 1 === g).column;
      } else
        a = s.getSlideIndexByData(a);
    }
  return requestAnimationFrame(() => {
    s.slideTo(a, e, t, i);
  }), s;
}
function co(r, e, t) {
  e === void 0 && (e = !0);
  const i = this, {
    enabled: s,
    params: n,
    animating: a
  } = i;
  if (!s || i.destroyed) return i;
  typeof r > "u" && (r = i.params.speed);
  let l = n.slidesPerGroup;
  n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (l = Math.max(i.slidesPerViewDynamic("current", !0), 1));
  const o = i.activeIndex < n.slidesPerGroupSkip ? 1 : l, c = i.virtual && n.virtual.enabled;
  if (n.loop) {
    if (a && !c && n.loopPreventsSliding) return !1;
    if (i.loopFix({
      direction: "next"
    }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && n.cssMode)
      return requestAnimationFrame(() => {
        i.slideTo(i.activeIndex + o, r, e, t);
      }), !0;
  }
  return n.rewind && i.isEnd ? i.slideTo(0, r, e, t) : i.slideTo(i.activeIndex + o, r, e, t);
}
function uo(r, e, t) {
  e === void 0 && (e = !0);
  const i = this, {
    params: s,
    snapGrid: n,
    slidesGrid: a,
    rtlTranslate: l,
    enabled: o,
    animating: c
  } = i;
  if (!o || i.destroyed) return i;
  typeof r > "u" && (r = i.params.speed);
  const d = i.virtual && s.virtual.enabled;
  if (s.loop) {
    if (c && !d && s.loopPreventsSliding) return !1;
    i.loopFix({
      direction: "prev"
    }), i._clientLeft = i.wrapperEl.clientLeft;
  }
  const p = l ? i.translate : -i.translate;
  function g(w) {
    return w < 0 ? -Math.floor(Math.abs(w)) : Math.floor(w);
  }
  const h = g(p), u = n.map((w) => g(w)), f = s.freeMode && s.freeMode.enabled;
  let b = n[u.indexOf(h) - 1];
  if (typeof b > "u" && (s.cssMode || f)) {
    let w;
    n.forEach((m, y) => {
      h >= m && (w = y);
    }), typeof w < "u" && (b = f ? n[w] : n[w > 0 ? w - 1 : w]);
  }
  let v = 0;
  if (typeof b < "u" && (v = a.indexOf(b), v < 0 && (v = i.activeIndex - 1), s.slidesPerView === "auto" && s.slidesPerGroup === 1 && s.slidesPerGroupAuto && (v = v - i.slidesPerViewDynamic("previous", !0) + 1, v = Math.max(v, 0))), s.rewind && i.isBeginning) {
    const w = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
    return i.slideTo(w, r, e, t);
  } else if (s.loop && i.activeIndex === 0 && s.cssMode)
    return requestAnimationFrame(() => {
      i.slideTo(v, r, e, t);
    }), !0;
  return i.slideTo(v, r, e, t);
}
function fo(r, e, t) {
  e === void 0 && (e = !0);
  const i = this;
  if (!i.destroyed)
    return typeof r > "u" && (r = i.params.speed), i.slideTo(i.activeIndex, r, e, t);
}
function po(r, e, t, i) {
  e === void 0 && (e = !0), i === void 0 && (i = 0.5);
  const s = this;
  if (s.destroyed) return;
  typeof r > "u" && (r = s.params.speed);
  let n = s.activeIndex;
  const a = Math.min(s.params.slidesPerGroupSkip, n), l = a + Math.floor((n - a) / s.params.slidesPerGroup), o = s.rtlTranslate ? s.translate : -s.translate;
  if (o >= s.snapGrid[l]) {
    const c = s.snapGrid[l], d = s.snapGrid[l + 1];
    o - c > (d - c) * i && (n += s.params.slidesPerGroup);
  } else {
    const c = s.snapGrid[l - 1], d = s.snapGrid[l];
    o - c <= (d - c) * i && (n -= s.params.slidesPerGroup);
  }
  return n = Math.max(n, 0), n = Math.min(n, s.slidesGrid.length - 1), s.slideTo(n, r, e, t);
}
function ho() {
  const r = this;
  if (r.destroyed) return;
  const {
    params: e,
    slidesEl: t
  } = r, i = e.slidesPerView === "auto" ? r.slidesPerViewDynamic() : e.slidesPerView;
  let s = r.clickedIndex, n;
  const a = r.isElement ? "swiper-slide" : `.${e.slideClass}`;
  if (e.loop) {
    if (r.animating) return;
    n = parseInt(r.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? s < r.loopedSlides - i / 2 || s > r.slides.length - r.loopedSlides + i / 2 ? (r.loopFix(), s = r.getSlideIndex(se(t, `${a}[data-swiper-slide-index="${n}"]`)[0]), Be(() => {
      r.slideTo(s);
    })) : r.slideTo(s) : s > r.slides.length - i ? (r.loopFix(), s = r.getSlideIndex(se(t, `${a}[data-swiper-slide-index="${n}"]`)[0]), Be(() => {
      r.slideTo(s);
    })) : r.slideTo(s);
  } else
    r.slideTo(s);
}
var mo = {
  slideTo: oo,
  slideToLoop: lo,
  slideNext: co,
  slidePrev: uo,
  slideReset: fo,
  slideToClosest: po,
  slideToClickedSlide: ho
};
function go(r) {
  const e = this, {
    params: t,
    slidesEl: i
  } = e;
  if (!t.loop || e.virtual && e.params.virtual.enabled) return;
  const s = () => {
    se(i, `.${t.slideClass}, swiper-slide`).forEach((p, g) => {
      p.setAttribute("data-swiper-slide-index", g);
    });
  }, n = e.grid && t.grid && t.grid.rows > 1, a = t.slidesPerGroup * (n ? t.grid.rows : 1), l = e.slides.length % a !== 0, o = n && e.slides.length % t.grid.rows !== 0, c = (d) => {
    for (let p = 0; p < d; p += 1) {
      const g = e.isElement ? de("swiper-slide", [t.slideBlankClass]) : de("div", [t.slideClass, t.slideBlankClass]);
      e.slidesEl.append(g);
    }
  };
  if (l) {
    if (t.loopAddBlankSlides) {
      const d = a - e.slides.length % a;
      c(d), e.recalcSlides(), e.updateSlides();
    } else
      Zt("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    s();
  } else if (o) {
    if (t.loopAddBlankSlides) {
      const d = t.grid.rows - e.slides.length % t.grid.rows;
      c(d), e.recalcSlides(), e.updateSlides();
    } else
      Zt("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
    s();
  } else
    s();
  e.loopFix({
    slideRealIndex: r,
    direction: t.centeredSlides ? void 0 : "next"
  });
}
function wo(r) {
  let {
    slideRealIndex: e,
    slideTo: t = !0,
    direction: i,
    setTranslate: s,
    activeSlideIndex: n,
    byController: a,
    byMousewheel: l
  } = r === void 0 ? {} : r;
  const o = this;
  if (!o.params.loop) return;
  o.emit("beforeLoopFix");
  const {
    slides: c,
    allowSlidePrev: d,
    allowSlideNext: p,
    slidesEl: g,
    params: h
  } = o, {
    centeredSlides: u
  } = h;
  if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && h.virtual.enabled) {
    t && (!h.centeredSlides && o.snapIndex === 0 ? o.slideTo(o.virtual.slides.length, 0, !1, !0) : h.centeredSlides && o.snapIndex < h.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)), o.allowSlidePrev = d, o.allowSlideNext = p, o.emit("loopFix");
    return;
  }
  let f = h.slidesPerView;
  f === "auto" ? f = o.slidesPerViewDynamic() : (f = Math.ceil(parseFloat(h.slidesPerView, 10)), u && f % 2 === 0 && (f = f + 1));
  const b = h.slidesPerGroupAuto ? f : h.slidesPerGroup;
  let v = b;
  v % b !== 0 && (v += b - v % b), v += h.loopAdditionalSlides, o.loopedSlides = v;
  const w = o.grid && h.grid && h.grid.rows > 1;
  c.length < f + v ? Zt("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : w && h.grid.fill === "row" && Zt("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
  const m = [], y = [];
  let z = o.activeIndex;
  typeof n > "u" ? n = o.getSlideIndex(c.find((x) => x.classList.contains(h.slideActiveClass))) : z = n;
  const P = i === "next" || !i, A = i === "prev" || !i;
  let T = 0, E = 0;
  const S = w ? Math.ceil(c.length / h.grid.rows) : c.length, C = (w ? c[n].column : n) + (u && typeof s > "u" ? -f / 2 + 0.5 : 0);
  if (C < v) {
    T = Math.max(v - C, b);
    for (let x = 0; x < v - C; x += 1) {
      const M = x - Math.floor(x / S) * S;
      if (w) {
        const $ = S - M - 1;
        for (let N = c.length - 1; N >= 0; N -= 1)
          c[N].column === $ && m.push(N);
      } else
        m.push(S - M - 1);
    }
  } else if (C + f > S - v) {
    E = Math.max(C - (S - v * 2), b);
    for (let x = 0; x < E; x += 1) {
      const M = x - Math.floor(x / S) * S;
      w ? c.forEach(($, N) => {
        $.column === M && y.push(N);
      }) : y.push(M);
    }
  }
  if (o.__preventObserver__ = !0, requestAnimationFrame(() => {
    o.__preventObserver__ = !1;
  }), A && m.forEach((x) => {
    c[x].swiperLoopMoveDOM = !0, g.prepend(c[x]), c[x].swiperLoopMoveDOM = !1;
  }), P && y.forEach((x) => {
    c[x].swiperLoopMoveDOM = !0, g.append(c[x]), c[x].swiperLoopMoveDOM = !1;
  }), o.recalcSlides(), h.slidesPerView === "auto" ? o.updateSlides() : w && (m.length > 0 && A || y.length > 0 && P) && o.slides.forEach((x, M) => {
    o.grid.updateSlide(M, x, o.slides);
  }), h.watchSlidesProgress && o.updateSlidesOffset(), t) {
    if (m.length > 0 && A) {
      if (typeof e > "u") {
        const x = o.slidesGrid[z], $ = o.slidesGrid[z + T] - x;
        l ? o.setTranslate(o.translate - $) : (o.slideTo(z + Math.ceil(T), 0, !1, !0), s && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - $, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - $));
      } else if (s) {
        const x = w ? m.length / h.grid.rows : m.length;
        o.slideTo(o.activeIndex + x, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate;
      }
    } else if (y.length > 0 && P)
      if (typeof e > "u") {
        const x = o.slidesGrid[z], $ = o.slidesGrid[z - E] - x;
        l ? o.setTranslate(o.translate - $) : (o.slideTo(z - E, 0, !1, !0), s && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - $, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - $));
      } else {
        const x = w ? y.length / h.grid.rows : y.length;
        o.slideTo(o.activeIndex - x, 0, !1, !0);
      }
  }
  if (o.allowSlidePrev = d, o.allowSlideNext = p, o.controller && o.controller.control && !a) {
    const x = {
      slideRealIndex: e,
      direction: i,
      setTranslate: s,
      activeSlideIndex: n,
      byController: !0
    };
    Array.isArray(o.controller.control) ? o.controller.control.forEach((M) => {
      !M.destroyed && M.params.loop && M.loopFix({
        ...x,
        slideTo: M.params.slidesPerView === h.slidesPerView ? t : !1
      });
    }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({
      ...x,
      slideTo: o.controller.control.params.slidesPerView === h.slidesPerView ? t : !1
    });
  }
  o.emit("loopFix");
}
function vo() {
  const r = this, {
    params: e,
    slidesEl: t
  } = r;
  if (!e.loop || !t || r.virtual && r.params.virtual.enabled) return;
  r.recalcSlides();
  const i = [];
  r.slides.forEach((s) => {
    const n = typeof s.swiperSlideIndex > "u" ? s.getAttribute("data-swiper-slide-index") * 1 : s.swiperSlideIndex;
    i[n] = s;
  }), r.slides.forEach((s) => {
    s.removeAttribute("data-swiper-slide-index");
  }), i.forEach((s) => {
    t.append(s);
  }), r.recalcSlides(), r.slideTo(r.realIndex, 0);
}
var bo = {
  loopCreate: go,
  loopFix: wo,
  loopDestroy: vo
};
function yo(r) {
  const e = this;
  if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
  const t = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
  e.isElement && (e.__preventObserver__ = !0), t.style.cursor = "move", t.style.cursor = r ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
    e.__preventObserver__ = !1;
  });
}
function Eo() {
  const r = this;
  r.params.watchOverflow && r.isLocked || r.params.cssMode || (r.isElement && (r.__preventObserver__ = !0), r[r.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", r.isElement && requestAnimationFrame(() => {
    r.__preventObserver__ = !1;
  }));
}
var xo = {
  setGrabCursor: yo,
  unsetGrabCursor: Eo
};
function So(r, e) {
  e === void 0 && (e = this);
  function t(i) {
    if (!i || i === re() || i === K()) return null;
    i.assignedSlot && (i = i.assignedSlot);
    const s = i.closest(r);
    return !s && !i.getRootNode ? null : s || t(i.getRootNode().host);
  }
  return t(e);
}
function ls(r, e, t) {
  const i = K(), {
    params: s
  } = r, n = s.edgeSwipeDetection, a = s.edgeSwipeThreshold;
  return n && (t <= a || t >= i.innerWidth - a) ? n === "prevent" ? (e.preventDefault(), !0) : !1 : !0;
}
function To(r) {
  const e = this, t = re();
  let i = r;
  i.originalEvent && (i = i.originalEvent);
  const s = e.touchEventsData;
  if (i.type === "pointerdown") {
    if (s.pointerId !== null && s.pointerId !== i.pointerId)
      return;
    s.pointerId = i.pointerId;
  } else i.type === "touchstart" && i.targetTouches.length === 1 && (s.touchId = i.targetTouches[0].identifier);
  if (i.type === "touchstart") {
    ls(e, i, i.targetTouches[0].pageX);
    return;
  }
  const {
    params: n,
    touches: a,
    enabled: l
  } = e;
  if (!l || !n.simulateTouch && i.pointerType === "mouse" || e.animating && n.preventInteractionOnTransition)
    return;
  !e.animating && n.cssMode && n.loop && e.loopFix();
  let o = i.target;
  if (n.touchEventsTarget === "wrapper" && !La(o, e.wrapperEl) || "which" in i && i.which === 3 || "button" in i && i.button > 0 || s.isTouched && s.isMoved) return;
  const c = !!n.noSwipingClass && n.noSwipingClass !== "", d = i.composedPath ? i.composedPath() : i.path;
  c && i.target && i.target.shadowRoot && d && (o = d[0]);
  const p = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`, g = !!(i.target && i.target.shadowRoot);
  if (n.noSwiping && (g ? So(p, o) : o.closest(p))) {
    e.allowClick = !0;
    return;
  }
  if (n.swipeHandler && !o.closest(n.swipeHandler))
    return;
  a.currentX = i.pageX, a.currentY = i.pageY;
  const h = a.currentX, u = a.currentY;
  if (!ls(e, i, h))
    return;
  Object.assign(s, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0
  }), a.startX = h, a.startY = u, s.touchStartTime = pe(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, n.threshold > 0 && (s.allowThresholdMove = !1);
  let f = !0;
  o.matches(s.focusableElements) && (f = !1, o.nodeName === "SELECT" && (s.isTouched = !1)), t.activeElement && t.activeElement.matches(s.focusableElements) && t.activeElement !== o && (i.pointerType === "mouse" || i.pointerType !== "mouse" && !o.matches(s.focusableElements)) && t.activeElement.blur();
  const b = f && e.allowTouchMove && n.touchStartPreventDefault;
  (n.touchStartForcePreventDefault || b) && !o.isContentEditable && i.preventDefault(), n.freeMode && n.freeMode.enabled && e.freeMode && e.animating && !n.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", i);
}
function Co(r) {
  const e = re(), t = this, i = t.touchEventsData, {
    params: s,
    touches: n,
    rtlTranslate: a,
    enabled: l
  } = t;
  if (!l || !s.simulateTouch && r.pointerType === "mouse") return;
  let o = r;
  if (o.originalEvent && (o = o.originalEvent), o.type === "pointermove" && (i.touchId !== null || o.pointerId !== i.pointerId))
    return;
  let c;
  if (o.type === "touchmove") {
    if (c = [...o.changedTouches].find((z) => z.identifier === i.touchId), !c || c.identifier !== i.touchId) return;
  } else
    c = o;
  if (!i.isTouched) {
    i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", o);
    return;
  }
  const d = c.pageX, p = c.pageY;
  if (o.preventedByNestedSwiper) {
    n.startX = d, n.startY = p;
    return;
  }
  if (!t.allowTouchMove) {
    o.target.matches(i.focusableElements) || (t.allowClick = !1), i.isTouched && (Object.assign(n, {
      startX: d,
      startY: p,
      currentX: d,
      currentY: p
    }), i.touchStartTime = pe());
    return;
  }
  if (s.touchReleaseOnEdges && !s.loop) {
    if (t.isVertical()) {
      if (p < n.startY && t.translate <= t.maxTranslate() || p > n.startY && t.translate >= t.minTranslate()) {
        i.isTouched = !1, i.isMoved = !1;
        return;
      }
    } else if (d < n.startX && t.translate <= t.maxTranslate() || d > n.startX && t.translate >= t.minTranslate())
      return;
  }
  if (e.activeElement && e.activeElement.matches(i.focusableElements) && e.activeElement !== o.target && o.pointerType !== "mouse" && e.activeElement.blur(), e.activeElement && o.target === e.activeElement && o.target.matches(i.focusableElements)) {
    i.isMoved = !0, t.allowClick = !1;
    return;
  }
  i.allowTouchCallbacks && t.emit("touchMove", o), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = d, n.currentY = p;
  const g = n.currentX - n.startX, h = n.currentY - n.startY;
  if (t.params.threshold && Math.sqrt(g ** 2 + h ** 2) < t.params.threshold) return;
  if (typeof i.isScrolling > "u") {
    let z;
    t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : g * g + h * h >= 25 && (z = Math.atan2(Math.abs(h), Math.abs(g)) * 180 / Math.PI, i.isScrolling = t.isHorizontal() ? z > s.touchAngle : 90 - z > s.touchAngle);
  }
  if (i.isScrolling && t.emit("touchMoveOpposite", o), typeof i.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (i.startMoving = !0), i.isScrolling || o.type === "touchmove" && i.preventTouchMoveFromPointerMove) {
    i.isTouched = !1;
    return;
  }
  if (!i.startMoving)
    return;
  t.allowClick = !1, !s.cssMode && o.cancelable && o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation();
  let u = t.isHorizontal() ? g : h, f = t.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
  s.oneWayMovement && (u = Math.abs(u) * (a ? 1 : -1), f = Math.abs(f) * (a ? 1 : -1)), n.diff = u, u *= s.touchRatio, a && (u = -u, f = -f);
  const b = t.touchesDirection;
  t.swipeDirection = u > 0 ? "prev" : "next", t.touchesDirection = f > 0 ? "prev" : "next";
  const v = t.params.loop && !s.cssMode, w = t.touchesDirection === "next" && t.allowSlideNext || t.touchesDirection === "prev" && t.allowSlidePrev;
  if (!i.isMoved) {
    if (v && w && t.loopFix({
      direction: t.swipeDirection
    }), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating) {
      const z = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: {
          bySwiperTouchMove: !0
        }
      });
      t.wrapperEl.dispatchEvent(z);
    }
    i.allowMomentumBounce = !1, s.grabCursor && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!0), t.emit("sliderFirstMove", o);
  }
  if ((/* @__PURE__ */ new Date()).getTime(), s._loopSwapReset !== !1 && i.isMoved && i.allowThresholdMove && b !== t.touchesDirection && v && w && Math.abs(u) >= 1) {
    Object.assign(n, {
      startX: d,
      startY: p,
      currentX: d,
      currentY: p,
      startTranslate: i.currentTranslate
    }), i.loopSwapReset = !0, i.startTranslate = i.currentTranslate;
    return;
  }
  t.emit("sliderMove", o), i.isMoved = !0, i.currentTranslate = u + i.startTranslate;
  let m = !0, y = s.resistanceRatio;
  if (s.touchReleaseOnEdges && (y = 0), u > 0 ? (v && w && i.allowThresholdMove && i.currentTranslate > (s.centeredSlides ? t.minTranslate() - t.slidesSizesGrid[t.activeIndex + 1] - (s.slidesPerView !== "auto" && t.slides.length - s.slidesPerView >= 2 ? t.slidesSizesGrid[t.activeIndex + 1] + t.params.spaceBetween : 0) - t.params.spaceBetween : t.minTranslate()) && t.loopFix({
    direction: "prev",
    setTranslate: !0,
    activeSlideIndex: 0
  }), i.currentTranslate > t.minTranslate() && (m = !1, s.resistance && (i.currentTranslate = t.minTranslate() - 1 + (-t.minTranslate() + i.startTranslate + u) ** y))) : u < 0 && (v && w && i.allowThresholdMove && i.currentTranslate < (s.centeredSlides ? t.maxTranslate() + t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween + (s.slidesPerView !== "auto" && t.slides.length - s.slidesPerView >= 2 ? t.slidesSizesGrid[t.slidesSizesGrid.length - 1] + t.params.spaceBetween : 0) : t.maxTranslate()) && t.loopFix({
    direction: "next",
    setTranslate: !0,
    activeSlideIndex: t.slides.length - (s.slidesPerView === "auto" ? t.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
  }), i.currentTranslate < t.maxTranslate() && (m = !1, s.resistance && (i.currentTranslate = t.maxTranslate() + 1 - (t.maxTranslate() - i.startTranslate - u) ** y))), m && (o.preventedByNestedSwiper = !0), !t.allowSlideNext && t.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && t.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && !t.allowSlideNext && (i.currentTranslate = i.startTranslate), s.threshold > 0)
    if (Math.abs(u) > s.threshold || i.allowThresholdMove) {
      if (!i.allowThresholdMove) {
        i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
        return;
      }
    } else {
      i.currentTranslate = i.startTranslate;
      return;
    }
  !s.followFinger || s.cssMode || ((s.freeMode && s.freeMode.enabled && t.freeMode || s.watchSlidesProgress) && (t.updateActiveIndex(), t.updateSlidesClasses()), s.freeMode && s.freeMode.enabled && t.freeMode && t.freeMode.onTouchMove(), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate));
}
function Mo(r) {
  const e = this, t = e.touchEventsData;
  let i = r;
  i.originalEvent && (i = i.originalEvent);
  let s;
  if (i.type === "touchend" || i.type === "touchcancel") {
    if (s = [...i.changedTouches].find((z) => z.identifier === t.touchId), !s || s.identifier !== t.touchId) return;
  } else {
    if (t.touchId !== null || i.pointerId !== t.pointerId) return;
    s = i;
  }
  if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type) && !(["pointercancel", "contextmenu"].includes(i.type) && (e.browser.isSafari || e.browser.isWebView)))
    return;
  t.pointerId = null, t.touchId = null;
  const {
    params: a,
    touches: l,
    rtlTranslate: o,
    slidesGrid: c,
    enabled: d
  } = e;
  if (!d || !a.simulateTouch && i.pointerType === "mouse") return;
  if (t.allowTouchCallbacks && e.emit("touchEnd", i), t.allowTouchCallbacks = !1, !t.isTouched) {
    t.isMoved && a.grabCursor && e.setGrabCursor(!1), t.isMoved = !1, t.startMoving = !1;
    return;
  }
  a.grabCursor && t.isMoved && t.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
  const p = pe(), g = p - t.touchStartTime;
  if (e.allowClick) {
    const z = i.path || i.composedPath && i.composedPath();
    e.updateClickedSlide(z && z[0] || i.target, z), e.emit("tap click", i), g < 300 && p - t.lastClickTime < 300 && e.emit("doubleTap doubleClick", i);
  }
  if (t.lastClickTime = pe(), Be(() => {
    e.destroyed || (e.allowClick = !0);
  }), !t.isTouched || !t.isMoved || !e.swipeDirection || l.diff === 0 && !t.loopSwapReset || t.currentTranslate === t.startTranslate && !t.loopSwapReset) {
    t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
    return;
  }
  t.isTouched = !1, t.isMoved = !1, t.startMoving = !1;
  let h;
  if (a.followFinger ? h = o ? e.translate : -e.translate : h = -t.currentTranslate, a.cssMode)
    return;
  if (a.freeMode && a.freeMode.enabled) {
    e.freeMode.onTouchEnd({
      currentPos: h
    });
    return;
  }
  const u = h >= -e.maxTranslate() && !e.params.loop;
  let f = 0, b = e.slidesSizesGrid[0];
  for (let z = 0; z < c.length; z += z < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup) {
    const P = z < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    typeof c[z + P] < "u" ? (u || h >= c[z] && h < c[z + P]) && (f = z, b = c[z + P] - c[z]) : (u || h >= c[z]) && (f = z, b = c[c.length - 1] - c[c.length - 2]);
  }
  let v = null, w = null;
  a.rewind && (e.isBeginning ? w = a.virtual && a.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (v = 0));
  const m = (h - c[f]) / b, y = f < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
  if (g > a.longSwipesMs) {
    if (!a.longSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.swipeDirection === "next" && (m >= a.longSwipesRatio ? e.slideTo(a.rewind && e.isEnd ? v : f + y) : e.slideTo(f)), e.swipeDirection === "prev" && (m > 1 - a.longSwipesRatio ? e.slideTo(f + y) : w !== null && m < 0 && Math.abs(m) > a.longSwipesRatio ? e.slideTo(w) : e.slideTo(f));
  } else {
    if (!a.shortSwipes) {
      e.slideTo(e.activeIndex);
      return;
    }
    e.navigation && (i.target === e.navigation.nextEl || i.target === e.navigation.prevEl) ? i.target === e.navigation.nextEl ? e.slideTo(f + y) : e.slideTo(f) : (e.swipeDirection === "next" && e.slideTo(v !== null ? v : f + y), e.swipeDirection === "prev" && e.slideTo(w !== null ? w : f));
  }
}
function ds() {
  const r = this, {
    params: e,
    el: t
  } = r;
  if (t && t.offsetWidth === 0) return;
  e.breakpoints && r.setBreakpoint();
  const {
    allowSlideNext: i,
    allowSlidePrev: s,
    snapGrid: n
  } = r, a = r.virtual && r.params.virtual.enabled;
  r.allowSlideNext = !0, r.allowSlidePrev = !0, r.updateSize(), r.updateSlides(), r.updateSlidesClasses();
  const l = a && e.loop;
  (e.slidesPerView === "auto" || e.slidesPerView > 1) && r.isEnd && !r.isBeginning && !r.params.centeredSlides && !l ? r.slideTo(r.slides.length - 1, 0, !1, !0) : r.params.loop && !a ? r.slideToLoop(r.realIndex, 0, !1, !0) : r.slideTo(r.activeIndex, 0, !1, !0), r.autoplay && r.autoplay.running && r.autoplay.paused && (clearTimeout(r.autoplay.resizeTimeout), r.autoplay.resizeTimeout = setTimeout(() => {
    r.autoplay && r.autoplay.running && r.autoplay.paused && r.autoplay.resume();
  }, 500)), r.allowSlidePrev = s, r.allowSlideNext = i, r.params.watchOverflow && n !== r.snapGrid && r.checkOverflow();
}
function Po(r) {
  const e = this;
  e.enabled && (e.allowClick || (e.params.preventClicks && r.preventDefault(), e.params.preventClicksPropagation && e.animating && (r.stopPropagation(), r.stopImmediatePropagation())));
}
function Ao() {
  const r = this, {
    wrapperEl: e,
    rtlTranslate: t,
    enabled: i
  } = r;
  if (!i) return;
  r.previousTranslate = r.translate, r.isHorizontal() ? r.translate = -e.scrollLeft : r.translate = -e.scrollTop, r.translate === 0 && (r.translate = 0), r.updateActiveIndex(), r.updateSlidesClasses();
  let s;
  const n = r.maxTranslate() - r.minTranslate();
  n === 0 ? s = 0 : s = (r.translate - r.minTranslate()) / n, s !== r.progress && r.updateProgress(t ? -r.translate : r.translate), r.emit("setTranslate", r.translate, !1);
}
function zo(r) {
  const e = this;
  Ft(e, r.target), !(e.params.cssMode || e.params.slidesPerView !== "auto" && !e.params.autoHeight) && e.update();
}
function Io() {
  const r = this;
  r.documentTouchHandlerProceeded || (r.documentTouchHandlerProceeded = !0, r.params.touchReleaseOnEdges && (r.el.style.touchAction = "auto"));
}
const fn = (r, e) => {
  const t = re(), {
    params: i,
    el: s,
    wrapperEl: n,
    device: a
  } = r, l = !!i.nested, o = e === "on" ? "addEventListener" : "removeEventListener", c = e;
  !s || typeof s == "string" || (t[o]("touchstart", r.onDocumentTouchStart, {
    passive: !1,
    capture: l
  }), s[o]("touchstart", r.onTouchStart, {
    passive: !1
  }), s[o]("pointerdown", r.onTouchStart, {
    passive: !1
  }), t[o]("touchmove", r.onTouchMove, {
    passive: !1,
    capture: l
  }), t[o]("pointermove", r.onTouchMove, {
    passive: !1,
    capture: l
  }), t[o]("touchend", r.onTouchEnd, {
    passive: !0
  }), t[o]("pointerup", r.onTouchEnd, {
    passive: !0
  }), t[o]("pointercancel", r.onTouchEnd, {
    passive: !0
  }), t[o]("touchcancel", r.onTouchEnd, {
    passive: !0
  }), t[o]("pointerout", r.onTouchEnd, {
    passive: !0
  }), t[o]("pointerleave", r.onTouchEnd, {
    passive: !0
  }), t[o]("contextmenu", r.onTouchEnd, {
    passive: !0
  }), (i.preventClicks || i.preventClicksPropagation) && s[o]("click", r.onClick, !0), i.cssMode && n[o]("scroll", r.onScroll), i.updateOnWindowResize ? r[c](a.ios || a.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", ds, !0) : r[c]("observerUpdate", ds, !0), s[o]("load", r.onLoad, {
    capture: !0
  }));
};
function Lo() {
  const r = this, {
    params: e
  } = r;
  r.onTouchStart = To.bind(r), r.onTouchMove = Co.bind(r), r.onTouchEnd = Mo.bind(r), r.onDocumentTouchStart = Io.bind(r), e.cssMode && (r.onScroll = Ao.bind(r)), r.onClick = Po.bind(r), r.onLoad = zo.bind(r), fn(r, "on");
}
function ko() {
  fn(this, "off");
}
var $o = {
  attachEvents: Lo,
  detachEvents: ko
};
const cs = (r, e) => r.grid && e.grid && e.grid.rows > 1;
function _o() {
  const r = this, {
    realIndex: e,
    initialized: t,
    params: i,
    el: s
  } = r, n = i.breakpoints;
  if (!n || n && Object.keys(n).length === 0) return;
  const a = re(), l = i.breakpointsBase === "window" || !i.breakpointsBase ? i.breakpointsBase : "container", o = ["window", "container"].includes(i.breakpointsBase) || !i.breakpointsBase ? r.el : a.querySelector(i.breakpointsBase), c = r.getBreakpoint(n, l, o);
  if (!c || r.currentBreakpoint === c) return;
  const p = (c in n ? n[c] : void 0) || r.originalParams, g = cs(r, i), h = cs(r, p), u = r.params.grabCursor, f = p.grabCursor, b = i.enabled;
  g && !h ? (s.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), r.emitContainerClasses()) : !g && h && (s.classList.add(`${i.containerModifierClass}grid`), (p.grid.fill && p.grid.fill === "column" || !p.grid.fill && i.grid.fill === "column") && s.classList.add(`${i.containerModifierClass}grid-column`), r.emitContainerClasses()), u && !f ? r.unsetGrabCursor() : !u && f && r.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((P) => {
    if (typeof p[P] > "u") return;
    const A = i[P] && i[P].enabled, T = p[P] && p[P].enabled;
    A && !T && r[P].disable(), !A && T && r[P].enable();
  });
  const v = p.direction && p.direction !== i.direction, w = i.loop && (p.slidesPerView !== i.slidesPerView || v), m = i.loop;
  v && t && r.changeDirection(), le(r.params, p);
  const y = r.params.enabled, z = r.params.loop;
  Object.assign(r, {
    allowTouchMove: r.params.allowTouchMove,
    allowSlideNext: r.params.allowSlideNext,
    allowSlidePrev: r.params.allowSlidePrev
  }), b && !y ? r.disable() : !b && y && r.enable(), r.currentBreakpoint = c, r.emit("_beforeBreakpoint", p), t && (w ? (r.loopDestroy(), r.loopCreate(e), r.updateSlides()) : !m && z ? (r.loopCreate(e), r.updateSlides()) : m && !z && r.loopDestroy()), r.emit("breakpoint", p);
}
function Do(r, e, t) {
  if (e === void 0 && (e = "window"), !r || e === "container" && !t) return;
  let i = !1;
  const s = K(), n = e === "window" ? s.innerHeight : t.clientHeight, a = Object.keys(r).map((l) => {
    if (typeof l == "string" && l.indexOf("@") === 0) {
      const o = parseFloat(l.substr(1));
      return {
        value: n * o,
        point: l
      };
    }
    return {
      value: l,
      point: l
    };
  });
  a.sort((l, o) => parseInt(l.value, 10) - parseInt(o.value, 10));
  for (let l = 0; l < a.length; l += 1) {
    const {
      point: o,
      value: c
    } = a[l];
    e === "window" ? s.matchMedia(`(min-width: ${c}px)`).matches && (i = o) : c <= t.clientWidth && (i = o);
  }
  return i || "max";
}
var Oo = {
  setBreakpoint: _o,
  getBreakpoint: Do
};
function Ro(r, e) {
  const t = [];
  return r.forEach((i) => {
    typeof i == "object" ? Object.keys(i).forEach((s) => {
      i[s] && t.push(e + s);
    }) : typeof i == "string" && t.push(e + i);
  }), t;
}
function No() {
  const r = this, {
    classNames: e,
    params: t,
    rtl: i,
    el: s,
    device: n
  } = r, a = Ro(["initialized", t.direction, {
    "free-mode": r.params.freeMode && t.freeMode.enabled
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
  e.push(...a), s.classList.add(...e), r.emitContainerClasses();
}
function Bo() {
  const r = this, {
    el: e,
    classNames: t
  } = r;
  !e || typeof e == "string" || (e.classList.remove(...t), r.emitContainerClasses());
}
var Ho = {
  addClasses: No,
  removeClasses: Bo
};
function Vo() {
  const r = this, {
    isLocked: e,
    params: t
  } = r, {
    slidesOffsetBefore: i
  } = t;
  if (i) {
    const s = r.slides.length - 1, n = r.slidesGrid[s] + r.slidesSizesGrid[s] + i * 2;
    r.isLocked = r.size > n;
  } else
    r.isLocked = r.snapGrid.length === 1;
  t.allowSlideNext === !0 && (r.allowSlideNext = !r.isLocked), t.allowSlidePrev === !0 && (r.allowSlidePrev = !r.isLocked), e && e !== r.isLocked && (r.isEnd = !1), e !== r.isLocked && r.emit(r.isLocked ? "lock" : "unlock");
}
var Fo = {
  checkOverflow: Vo
}, Qi = {
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
function qo(r, e) {
  return function(i) {
    i === void 0 && (i = {});
    const s = Object.keys(i)[0], n = i[s];
    if (typeof n != "object" || n === null) {
      le(e, i);
      return;
    }
    if (r[s] === !0 && (r[s] = {
      enabled: !0
    }), s === "navigation" && r[s] && r[s].enabled && !r[s].prevEl && !r[s].nextEl && (r[s].auto = !0), ["pagination", "scrollbar"].indexOf(s) >= 0 && r[s] && r[s].enabled && !r[s].el && (r[s].auto = !0), !(s in r && "enabled" in n)) {
      le(e, i);
      return;
    }
    typeof r[s] == "object" && !("enabled" in r[s]) && (r[s].enabled = !0), r[s] || (r[s] = {
      enabled: !1
    }), le(e, i);
  };
}
const ji = {
  eventsEmitter: Ba,
  update: Ka,
  translate: io,
  transition: ao,
  slide: mo,
  loop: bo,
  grabCursor: xo,
  events: $o,
  breakpoints: Oo,
  checkOverflow: Fo,
  classes: Ho
}, Xi = {};
class oe {
  constructor() {
    let e, t;
    for (var i = arguments.length, s = new Array(i), n = 0; n < i; n++)
      s[n] = arguments[n];
    s.length === 1 && s[0].constructor && Object.prototype.toString.call(s[0]).slice(8, -1) === "Object" ? t = s[0] : [e, t] = s, t || (t = {}), t = le({}, t), e && !t.el && (t.el = e);
    const a = re();
    if (t.el && typeof t.el == "string" && a.querySelectorAll(t.el).length > 1) {
      const d = [];
      return a.querySelectorAll(t.el).forEach((p) => {
        const g = le({}, t, {
          el: p
        });
        d.push(new oe(g));
      }), d;
    }
    const l = this;
    l.__swiper__ = !0, l.support = ln(), l.device = dn({
      userAgent: t.userAgent
    }), l.browser = cn(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
    const o = {};
    l.modules.forEach((d) => {
      d({
        params: t,
        swiper: l,
        extendParams: qo(t, o),
        on: l.on.bind(l),
        once: l.once.bind(l),
        off: l.off.bind(l),
        emit: l.emit.bind(l)
      });
    });
    const c = le({}, Qi, o);
    return l.params = le({}, c, Xi, t), l.originalParams = le({}, l.params), l.passedParams = le({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((d) => {
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
    } = this, s = se(t, `.${i.slideClass}, swiper-slide`), n = Mt(s[0]);
    return Mt(e) - n;
  }
  getSlideIndexByData(e) {
    return this.getSlideIndex(this.slides.find((t) => t.getAttribute("data-swiper-slide-index") * 1 === e));
  }
  recalcSlides() {
    const e = this, {
      slidesEl: t,
      params: i
    } = e;
    e.slides = se(t, `.${i.slideClass}, swiper-slide`);
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
    const s = i.minTranslate(), a = (i.maxTranslate() - s) * e + s;
    i.translateTo(a, typeof t > "u" ? 0 : t), i.updateActiveIndex(), i.updateSlidesClasses();
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
      const s = e.getSlideClasses(i);
      t.push({
        slideEl: i,
        classNames: s
      }), e.emit("_slideClass", i, s);
    }), e.emit("_slideClasses", t);
  }
  slidesPerViewDynamic(e, t) {
    e === void 0 && (e = "current"), t === void 0 && (t = !1);
    const i = this, {
      params: s,
      slides: n,
      slidesGrid: a,
      slidesSizesGrid: l,
      size: o,
      activeIndex: c
    } = i;
    let d = 1;
    if (typeof s.slidesPerView == "number") return s.slidesPerView;
    if (s.centeredSlides) {
      let p = n[c] ? Math.ceil(n[c].swiperSlideSize) : 0, g;
      for (let h = c + 1; h < n.length; h += 1)
        n[h] && !g && (p += Math.ceil(n[h].swiperSlideSize), d += 1, p > o && (g = !0));
      for (let h = c - 1; h >= 0; h -= 1)
        n[h] && !g && (p += n[h].swiperSlideSize, d += 1, p > o && (g = !0));
    } else if (e === "current")
      for (let p = c + 1; p < n.length; p += 1)
        (t ? a[p] + l[p] - a[c] < o : a[p] - a[c] < o) && (d += 1);
    else
      for (let p = c - 1; p >= 0; p -= 1)
        a[c] - a[p] < o && (d += 1);
    return d;
  }
  update() {
    const e = this;
    if (!e || e.destroyed) return;
    const {
      snapGrid: t,
      params: i
    } = e;
    i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
      a.complete && Ft(e, a);
    }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
    function s() {
      const a = e.rtlTranslate ? e.translate * -1 : e.translate, l = Math.min(Math.max(a, e.maxTranslate()), e.minTranslate());
      e.setTranslate(l), e.updateActiveIndex(), e.updateSlidesClasses();
    }
    let n;
    if (i.freeMode && i.freeMode.enabled && !i.cssMode)
      s(), i.autoHeight && e.updateAutoHeight();
    else {
      if ((i.slidesPerView === "auto" || i.slidesPerView > 1) && e.isEnd && !i.centeredSlides) {
        const a = e.virtual && i.virtual.enabled ? e.virtual.slides : e.slides;
        n = e.slideTo(a.length - 1, 0, !1, !0);
      } else
        n = e.slideTo(e.activeIndex, 0, !1, !0);
      n || s();
    }
    i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
  }
  changeDirection(e, t) {
    t === void 0 && (t = !0);
    const i = this, s = i.params.direction;
    return e || (e = s === "horizontal" ? "vertical" : "horizontal"), e === s || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${s}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach((n) => {
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
    const s = () => `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let a = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : se(i, s())[0];
    return !a && t.params.createElements && (a = de("div", t.params.wrapperClass), i.append(a), se(i, `.${t.params.slideClass}`).forEach((l) => {
      a.append(l);
    })), Object.assign(t, {
      el: i,
      wrapperEl: a,
      slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : a,
      hostEl: t.isElement ? i.parentNode.host : i,
      mounted: !0,
      // RTL
      rtl: i.dir.toLowerCase() === "rtl" || ze(i, "direction") === "rtl",
      rtlTranslate: t.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || ze(i, "direction") === "rtl"),
      wrongRTL: ze(a, "display") === "-webkit-box"
    }), !0;
  }
  init(e) {
    const t = this;
    if (t.initialized || t.mount(e) === !1) return t;
    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
    const s = [...t.el.querySelectorAll('[loading="lazy"]')];
    return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((n) => {
      n.complete ? Ft(t, n) : n.addEventListener("load", (a) => {
        Ft(t, a.target);
      });
    }), Ji(t), t.initialized = !0, Ji(t), t.emit("init"), t.emit("afterInit"), t;
  }
  destroy(e, t) {
    e === void 0 && (e = !0), t === void 0 && (t = !0);
    const i = this, {
      params: s,
      el: n,
      wrapperEl: a,
      slides: l
    } = i;
    return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), n && typeof n != "string" && n.removeAttribute("style"), a && a.removeAttribute("style"), l && l.length && l.forEach((o) => {
      o.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), o.removeAttribute("style"), o.removeAttribute("data-swiper-slide-index");
    })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach((o) => {
      i.off(o);
    }), e !== !1 && (i.el && typeof i.el != "string" && (i.el.swiper = null), Pa(i)), i.destroyed = !0), null;
  }
  static extendDefaults(e) {
    le(Xi, e);
  }
  static get extendedDefaults() {
    return Xi;
  }
  static get defaults() {
    return Qi;
  }
  static installModule(e) {
    oe.prototype.__modules__ || (oe.prototype.__modules__ = []);
    const t = oe.prototype.__modules__;
    typeof e == "function" && t.indexOf(e) < 0 && t.push(e);
  }
  static use(e) {
    return Array.isArray(e) ? (e.forEach((t) => oe.installModule(t)), oe) : (oe.installModule(e), oe);
  }
}
Object.keys(ji).forEach((r) => {
  Object.keys(ji[r]).forEach((e) => {
    oe.prototype[e] = ji[r][e];
  });
});
oe.use([Ra, Na]);
function Yo(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: s
  } = r;
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
  const a = re();
  e.virtual = {
    cache: {},
    from: void 0,
    to: void 0,
    slides: [],
    offset: 0,
    slidesGrid: []
  };
  const l = a.createElement("div");
  function o(u, f) {
    const b = e.params.virtual;
    if (b.cache && e.virtual.cache[f])
      return e.virtual.cache[f];
    let v;
    return b.renderSlide ? (v = b.renderSlide.call(e, u, f), typeof v == "string" && (l.innerHTML = v, v = l.children[0])) : e.isElement ? v = de("swiper-slide") : v = de("div", e.params.slideClass), v.setAttribute("data-swiper-slide-index", f), b.renderSlide || (v.innerHTML = u), b.cache && (e.virtual.cache[f] = v), v;
  }
  function c(u, f, b) {
    const {
      slidesPerView: v,
      slidesPerGroup: w,
      centeredSlides: m,
      loop: y,
      initialSlide: z
    } = e.params;
    if (f && !y && z > 0)
      return;
    const {
      addSlidesBefore: P,
      addSlidesAfter: A
    } = e.params.virtual, {
      from: T,
      to: E,
      slides: S,
      slidesGrid: I,
      offset: C
    } = e.virtual;
    e.params.cssMode || e.updateActiveIndex();
    const x = typeof b > "u" ? e.activeIndex || 0 : b;
    let M;
    e.rtlTranslate ? M = "right" : M = e.isHorizontal() ? "left" : "top";
    let $, N;
    m ? ($ = Math.floor(v / 2) + w + A, N = Math.floor(v / 2) + w + P) : ($ = v + (w - 1) + A, N = (y ? v : w) + P);
    let L = x - N, k = x + $;
    y || (L = Math.max(L, 0), k = Math.min(k, S.length - 1));
    let R = (e.slidesGrid[L] || 0) - (e.slidesGrid[0] || 0);
    y && x >= N ? (L -= N, m || (R += e.slidesGrid[0])) : y && x < N && (L = -N, m && (R += e.slidesGrid[0])), Object.assign(e.virtual, {
      from: L,
      to: k,
      offset: R,
      slidesGrid: e.slidesGrid,
      slidesBefore: N,
      slidesAfter: $
    });
    function H() {
      e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s("virtualUpdate");
    }
    if (T === L && E === k && !u) {
      e.slidesGrid !== I && R !== C && e.slides.forEach((_) => {
        _.style[M] = `${R - Math.abs(e.cssOverflowAdjustment())}px`;
      }), e.updateProgress(), s("virtualUpdate");
      return;
    }
    if (e.params.virtual.renderExternal) {
      e.params.virtual.renderExternal.call(e, {
        offset: R,
        from: L,
        to: k,
        slides: function() {
          const O = [];
          for (let V = L; V <= k; V += 1)
            O.push(S[V]);
          return O;
        }()
      }), e.params.virtual.renderExternalUpdate ? H() : s("virtualUpdate");
      return;
    }
    const X = [], ee = [], ae = (_) => {
      let O = _;
      return _ < 0 ? O = S.length + _ : O >= S.length && (O = O - S.length), O;
    };
    if (u)
      e.slides.filter((_) => _.matches(`.${e.params.slideClass}, swiper-slide`)).forEach((_) => {
        _.remove();
      });
    else
      for (let _ = T; _ <= E; _ += 1)
        if (_ < L || _ > k) {
          const O = ae(_);
          e.slides.filter((V) => V.matches(`.${e.params.slideClass}[data-swiper-slide-index="${O}"], swiper-slide[data-swiper-slide-index="${O}"]`)).forEach((V) => {
            V.remove();
          });
        }
    const Le = y ? -S.length : 0, D = y ? S.length * 2 : S.length;
    for (let _ = Le; _ < D; _ += 1)
      if (_ >= L && _ <= k) {
        const O = ae(_);
        typeof E > "u" || u ? ee.push(O) : (_ > E && ee.push(O), _ < T && X.push(O));
      }
    if (ee.forEach((_) => {
      e.slidesEl.append(o(S[_], _));
    }), y)
      for (let _ = X.length - 1; _ >= 0; _ -= 1) {
        const O = X[_];
        e.slidesEl.prepend(o(S[O], O));
      }
    else
      X.sort((_, O) => O - _), X.forEach((_) => {
        e.slidesEl.prepend(o(S[_], _));
      });
    se(e.slidesEl, ".swiper-slide, swiper-slide").forEach((_) => {
      _.style[M] = `${R - Math.abs(e.cssOverflowAdjustment())}px`;
    }), H();
  }
  function d(u) {
    if (typeof u == "object" && "length" in u)
      for (let f = 0; f < u.length; f += 1)
        u[f] && e.virtual.slides.push(u[f]);
    else
      e.virtual.slides.push(u);
    c(!0);
  }
  function p(u) {
    const f = e.activeIndex;
    let b = f + 1, v = 1;
    if (Array.isArray(u)) {
      for (let w = 0; w < u.length; w += 1)
        u[w] && e.virtual.slides.unshift(u[w]);
      b = f + u.length, v = u.length;
    } else
      e.virtual.slides.unshift(u);
    if (e.params.virtual.cache) {
      const w = e.virtual.cache, m = {};
      Object.keys(w).forEach((y) => {
        const z = w[y], P = z.getAttribute("data-swiper-slide-index");
        P && z.setAttribute("data-swiper-slide-index", parseInt(P, 10) + v), m[parseInt(y, 10) + v] = z;
      }), e.virtual.cache = m;
    }
    c(!0), e.slideTo(b, 0);
  }
  function g(u) {
    if (typeof u > "u" || u === null) return;
    let f = e.activeIndex;
    if (Array.isArray(u))
      for (let b = u.length - 1; b >= 0; b -= 1)
        e.params.virtual.cache && (delete e.virtual.cache[u[b]], Object.keys(e.virtual.cache).forEach((v) => {
          v > u && (e.virtual.cache[v - 1] = e.virtual.cache[v], e.virtual.cache[v - 1].setAttribute("data-swiper-slide-index", v - 1), delete e.virtual.cache[v]);
        })), e.virtual.slides.splice(u[b], 1), u[b] < f && (f -= 1), f = Math.max(f, 0);
    else
      e.params.virtual.cache && (delete e.virtual.cache[u], Object.keys(e.virtual.cache).forEach((b) => {
        b > u && (e.virtual.cache[b - 1] = e.virtual.cache[b], e.virtual.cache[b - 1].setAttribute("data-swiper-slide-index", b - 1), delete e.virtual.cache[b]);
      })), e.virtual.slides.splice(u, 1), u < f && (f -= 1), f = Math.max(f, 0);
    c(!0), e.slideTo(f, 0);
  }
  function h() {
    e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), c(!0), e.slideTo(0, 0);
  }
  i("beforeInit", () => {
    if (!e.params.virtual.enabled) return;
    let u;
    if (typeof e.passedParams.virtual.slides > "u") {
      const f = [...e.slidesEl.children].filter((b) => b.matches(`.${e.params.slideClass}, swiper-slide`));
      f && f.length && (e.virtual.slides = [...f], u = !0, f.forEach((b, v) => {
        b.setAttribute("data-swiper-slide-index", v), e.virtual.cache[v] = b, b.remove();
      }));
    }
    u || (e.virtual.slides = e.params.virtual.slides), e.classNames.push(`${e.params.containerModifierClass}virtual`), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0, c(!1, !0);
  }), i("setTranslate", () => {
    e.params.virtual.enabled && (e.params.cssMode && !e._immediateVirtual ? (clearTimeout(n), n = setTimeout(() => {
      c();
    }, 100)) : c());
  }), i("init update resize", () => {
    e.params.virtual.enabled && e.params.cssMode && gt(e.wrapperEl, "--swiper-virtual-size", `${e.virtualSize}px`);
  }), Object.assign(e.virtual, {
    appendSlide: d,
    prependSlide: p,
    removeSlide: g,
    removeAllSlides: h,
    update: c
  });
}
function jo(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: s
  } = r;
  const n = re(), a = K();
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
      rtlTranslate: p
    } = e;
    let g = d;
    g.originalEvent && (g = g.originalEvent);
    const h = g.keyCode || g.charCode, u = e.params.keyboard.pageUpDown, f = u && h === 33, b = u && h === 34, v = h === 37, w = h === 39, m = h === 38, y = h === 40;
    if (!e.allowSlideNext && (e.isHorizontal() && w || e.isVertical() && y || b) || !e.allowSlidePrev && (e.isHorizontal() && v || e.isVertical() && m || f))
      return !1;
    if (!(g.shiftKey || g.altKey || g.ctrlKey || g.metaKey) && !(n.activeElement && n.activeElement.nodeName && (n.activeElement.nodeName.toLowerCase() === "input" || n.activeElement.nodeName.toLowerCase() === "textarea"))) {
      if (e.params.keyboard.onlyInViewport && (f || b || v || w || m || y)) {
        let z = !1;
        if (Oe(e.el, `.${e.params.slideClass}, swiper-slide`).length > 0 && Oe(e.el, `.${e.params.slideActiveClass}`).length === 0)
          return;
        const P = e.el, A = P.clientWidth, T = P.clientHeight, E = a.innerWidth, S = a.innerHeight, I = Jt(P);
        p && (I.left -= P.scrollLeft);
        const C = [[I.left, I.top], [I.left + A, I.top], [I.left, I.top + T], [I.left + A, I.top + T]];
        for (let x = 0; x < C.length; x += 1) {
          const M = C[x];
          if (M[0] >= 0 && M[0] <= E && M[1] >= 0 && M[1] <= S) {
            if (M[0] === 0 && M[1] === 0) continue;
            z = !0;
          }
        }
        if (!z) return;
      }
      e.isHorizontal() ? ((f || b || v || w) && (g.preventDefault ? g.preventDefault() : g.returnValue = !1), ((b || w) && !p || (f || v) && p) && e.slideNext(), ((f || v) && !p || (b || w) && p) && e.slidePrev()) : ((f || b || m || y) && (g.preventDefault ? g.preventDefault() : g.returnValue = !1), (b || y) && e.slideNext(), (f || m) && e.slidePrev()), s("keyPress", h);
    }
  }
  function o() {
    e.keyboard.enabled || (n.addEventListener("keydown", l), e.keyboard.enabled = !0);
  }
  function c() {
    e.keyboard.enabled && (n.removeEventListener("keydown", l), e.keyboard.enabled = !1);
  }
  i("init", () => {
    e.params.keyboard.enabled && o();
  }), i("destroy", () => {
    e.keyboard.enabled && c();
  }), Object.assign(e.keyboard, {
    enable: o,
    disable: c
  });
}
function Xo(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: s
  } = r;
  const n = K();
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
  let a, l = pe(), o;
  const c = [];
  function d(m) {
    let A = 0, T = 0, E = 0, S = 0;
    return "detail" in m && (T = m.detail), "wheelDelta" in m && (T = -m.wheelDelta / 120), "wheelDeltaY" in m && (T = -m.wheelDeltaY / 120), "wheelDeltaX" in m && (A = -m.wheelDeltaX / 120), "axis" in m && m.axis === m.HORIZONTAL_AXIS && (A = T, T = 0), E = A * 10, S = T * 10, "deltaY" in m && (S = m.deltaY), "deltaX" in m && (E = m.deltaX), m.shiftKey && !E && (E = S, S = 0), (E || S) && m.deltaMode && (m.deltaMode === 1 ? (E *= 40, S *= 40) : (E *= 800, S *= 800)), E && !A && (A = E < 1 ? -1 : 1), S && !T && (T = S < 1 ? -1 : 1), {
      spinX: A,
      spinY: T,
      pixelX: E,
      pixelY: S
    };
  }
  function p() {
    e.enabled && (e.mouseEntered = !0);
  }
  function g() {
    e.enabled && (e.mouseEntered = !1);
  }
  function h(m) {
    return e.params.mousewheel.thresholdDelta && m.delta < e.params.mousewheel.thresholdDelta || e.params.mousewheel.thresholdTime && pe() - l < e.params.mousewheel.thresholdTime ? !1 : m.delta >= 6 && pe() - l < 60 ? !0 : (m.direction < 0 ? (!e.isEnd || e.params.loop) && !e.animating && (e.slideNext(), s("scroll", m.raw)) : (!e.isBeginning || e.params.loop) && !e.animating && (e.slidePrev(), s("scroll", m.raw)), l = new n.Date().getTime(), !1);
  }
  function u(m) {
    const y = e.params.mousewheel;
    if (m.direction < 0) {
      if (e.isEnd && !e.params.loop && y.releaseOnEdges)
        return !0;
    } else if (e.isBeginning && !e.params.loop && y.releaseOnEdges)
      return !0;
    return !1;
  }
  function f(m) {
    let y = m, z = !0;
    if (!e.enabled || m.target.closest(`.${e.params.mousewheel.noMousewheelClass}`)) return;
    const P = e.params.mousewheel;
    e.params.cssMode && y.preventDefault();
    let A = e.el;
    e.params.mousewheel.eventsTarget !== "container" && (A = document.querySelector(e.params.mousewheel.eventsTarget));
    const T = A && A.contains(y.target);
    if (!e.mouseEntered && !T && !P.releaseOnEdges) return !0;
    y.originalEvent && (y = y.originalEvent);
    let E = 0;
    const S = e.rtlTranslate ? -1 : 1, I = d(y);
    if (P.forceToAxis)
      if (e.isHorizontal())
        if (Math.abs(I.pixelX) > Math.abs(I.pixelY)) E = -I.pixelX * S;
        else return !0;
      else if (Math.abs(I.pixelY) > Math.abs(I.pixelX)) E = -I.pixelY;
      else return !0;
    else
      E = Math.abs(I.pixelX) > Math.abs(I.pixelY) ? -I.pixelX * S : -I.pixelY;
    if (E === 0) return !0;
    P.invert && (E = -E);
    let C = e.getTranslate() + E * P.sensitivity;
    if (C >= e.minTranslate() && (C = e.minTranslate()), C <= e.maxTranslate() && (C = e.maxTranslate()), z = e.params.loop ? !0 : !(C === e.minTranslate() || C === e.maxTranslate()), z && e.params.nested && y.stopPropagation(), !e.params.freeMode || !e.params.freeMode.enabled) {
      const x = {
        time: pe(),
        delta: Math.abs(E),
        direction: Math.sign(E),
        raw: m
      };
      c.length >= 2 && c.shift();
      const M = c.length ? c[c.length - 1] : void 0;
      if (c.push(x), M ? (x.direction !== M.direction || x.delta > M.delta || x.time > M.time + 150) && h(x) : h(x), u(x))
        return !0;
    } else {
      const x = {
        time: pe(),
        delta: Math.abs(E),
        direction: Math.sign(E)
      }, M = o && x.time < o.time + 500 && x.delta <= o.delta && x.direction === o.direction;
      if (!M) {
        o = void 0;
        let $ = e.getTranslate() + E * P.sensitivity;
        const N = e.isBeginning, L = e.isEnd;
        if ($ >= e.minTranslate() && ($ = e.minTranslate()), $ <= e.maxTranslate() && ($ = e.maxTranslate()), e.setTransition(0), e.setTranslate($), e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses(), (!N && e.isBeginning || !L && e.isEnd) && e.updateSlidesClasses(), e.params.loop && e.loopFix({
          direction: x.direction < 0 ? "next" : "prev",
          byMousewheel: !0
        }), e.params.freeMode.sticky) {
          clearTimeout(a), a = void 0, c.length >= 15 && c.shift();
          const k = c.length ? c[c.length - 1] : void 0, R = c[0];
          if (c.push(x), k && (x.delta > k.delta || x.direction !== k.direction))
            c.splice(0);
          else if (c.length >= 15 && x.time - R.time < 500 && R.delta - x.delta >= 1 && x.delta <= 6) {
            const H = E > 0 ? 0.8 : 0.2;
            o = x, c.splice(0), a = Be(() => {
              e.destroyed || !e.params || e.slideToClosest(e.params.speed, !0, void 0, H);
            }, 0);
          }
          a || (a = Be(() => {
            if (e.destroyed || !e.params) return;
            const H = 0.5;
            o = x, c.splice(0), e.slideToClosest(e.params.speed, !0, void 0, H);
          }, 500));
        }
        if (M || s("scroll", y), e.params.autoplay && e.params.autoplay.disableOnInteraction && e.autoplay.stop(), P.releaseOnEdges && ($ === e.minTranslate() || $ === e.maxTranslate()))
          return !0;
      }
    }
    return y.preventDefault ? y.preventDefault() : y.returnValue = !1, !1;
  }
  function b(m) {
    let y = e.el;
    e.params.mousewheel.eventsTarget !== "container" && (y = document.querySelector(e.params.mousewheel.eventsTarget)), y[m]("mouseenter", p), y[m]("mouseleave", g), y[m]("wheel", f);
  }
  function v() {
    return e.params.cssMode ? (e.wrapperEl.removeEventListener("wheel", f), !0) : e.mousewheel.enabled ? !1 : (b("addEventListener"), e.mousewheel.enabled = !0, !0);
  }
  function w() {
    return e.params.cssMode ? (e.wrapperEl.addEventListener(event, f), !0) : e.mousewheel.enabled ? (b("removeEventListener"), e.mousewheel.enabled = !1, !0) : !1;
  }
  i("init", () => {
    !e.params.mousewheel.enabled && e.params.cssMode && w(), e.params.mousewheel.enabled && v();
  }), i("destroy", () => {
    e.params.cssMode && v(), e.mousewheel.enabled && w();
  }), Object.assign(e.mousewheel, {
    enable: v,
    disable: w
  });
}
function fr(r, e, t, i) {
  return r.params.createElements && Object.keys(i).forEach((s) => {
    if (!t[s] && t.auto === !0) {
      let n = se(r.el, `.${i[s]}`)[0];
      n || (n = de("div", i[s]), n.className = i[s], r.el.append(n)), t[s] = n, e[s] = n;
    }
  }), t;
}
function Go(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: s
  } = r;
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
  function n(u) {
    let f;
    return u && typeof u == "string" && e.isElement && (f = e.el.querySelector(u) || e.hostEl.querySelector(u), f) ? f : (u && (typeof u == "string" && (f = [...document.querySelectorAll(u)]), e.params.uniqueNavElements && typeof u == "string" && f && f.length > 1 && e.el.querySelectorAll(u).length === 1 ? f = e.el.querySelector(u) : f && f.length === 1 && (f = f[0])), u && !f ? u : f);
  }
  function a(u, f) {
    const b = e.params.navigation;
    u = Y(u), u.forEach((v) => {
      v && (v.classList[f ? "add" : "remove"](...b.disabledClass.split(" ")), v.tagName === "BUTTON" && (v.disabled = f), e.params.watchOverflow && e.enabled && v.classList[e.isLocked ? "add" : "remove"](b.lockClass));
    });
  }
  function l() {
    const {
      nextEl: u,
      prevEl: f
    } = e.navigation;
    if (e.params.loop) {
      a(f, !1), a(u, !1);
      return;
    }
    a(f, e.isBeginning && !e.params.rewind), a(u, e.isEnd && !e.params.rewind);
  }
  function o(u) {
    u.preventDefault(), !(e.isBeginning && !e.params.loop && !e.params.rewind) && (e.slidePrev(), s("navigationPrev"));
  }
  function c(u) {
    u.preventDefault(), !(e.isEnd && !e.params.loop && !e.params.rewind) && (e.slideNext(), s("navigationNext"));
  }
  function d() {
    const u = e.params.navigation;
    if (e.params.navigation = fr(e, e.originalParams.navigation, e.params.navigation, {
      nextEl: "swiper-button-next",
      prevEl: "swiper-button-prev"
    }), !(u.nextEl || u.prevEl)) return;
    let f = n(u.nextEl), b = n(u.prevEl);
    Object.assign(e.navigation, {
      nextEl: f,
      prevEl: b
    }), f = Y(f), b = Y(b);
    const v = (w, m) => {
      w && w.addEventListener("click", m === "next" ? c : o), !e.enabled && w && w.classList.add(...u.lockClass.split(" "));
    };
    f.forEach((w) => v(w, "next")), b.forEach((w) => v(w, "prev"));
  }
  function p() {
    let {
      nextEl: u,
      prevEl: f
    } = e.navigation;
    u = Y(u), f = Y(f);
    const b = (v, w) => {
      v.removeEventListener("click", w === "next" ? c : o), v.classList.remove(...e.params.navigation.disabledClass.split(" "));
    };
    u.forEach((v) => b(v, "next")), f.forEach((v) => b(v, "prev"));
  }
  i("init", () => {
    e.params.navigation.enabled === !1 ? h() : (d(), l());
  }), i("toEdge fromEdge lock unlock", () => {
    l();
  }), i("destroy", () => {
    p();
  }), i("enable disable", () => {
    let {
      nextEl: u,
      prevEl: f
    } = e.navigation;
    if (u = Y(u), f = Y(f), e.enabled) {
      l();
      return;
    }
    [...u, ...f].filter((b) => !!b).forEach((b) => b.classList.add(e.params.navigation.lockClass));
  }), i("click", (u, f) => {
    let {
      nextEl: b,
      prevEl: v
    } = e.navigation;
    b = Y(b), v = Y(v);
    const w = f.target;
    let m = v.includes(w) || b.includes(w);
    if (e.isElement && !m) {
      const y = f.path || f.composedPath && f.composedPath();
      y && (m = y.find((z) => b.includes(z) || v.includes(z)));
    }
    if (e.params.navigation.hideOnClick && !m) {
      if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === w || e.pagination.el.contains(w))) return;
      let y;
      b.length ? y = b[0].classList.contains(e.params.navigation.hiddenClass) : v.length && (y = v[0].classList.contains(e.params.navigation.hiddenClass)), s(y === !0 ? "navigationShow" : "navigationHide"), [...b, ...v].filter((z) => !!z).forEach((z) => z.classList.toggle(e.params.navigation.hiddenClass));
    }
  });
  const g = () => {
    e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), d(), l();
  }, h = () => {
    e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), p();
  };
  Object.assign(e.navigation, {
    enable: g,
    disable: h,
    update: l,
    init: d,
    destroy: p
  });
}
function Ee(r) {
  return r === void 0 && (r = ""), `.${r.trim().replace(/([\.:!+\/])/g, "\\$1").replace(/ /g, ".")}`;
}
function Wo(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: s
  } = r;
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
      formatFractionCurrent: (w) => w,
      formatFractionTotal: (w) => w,
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
  let a, l = 0;
  function o() {
    return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && e.pagination.el.length === 0;
  }
  function c(w, m) {
    const {
      bulletActiveClass: y
    } = e.params.pagination;
    w && (w = w[`${m === "prev" ? "previous" : "next"}ElementSibling`], w && (w.classList.add(`${y}-${m}`), w = w[`${m === "prev" ? "previous" : "next"}ElementSibling`], w && w.classList.add(`${y}-${m}-${m}`)));
  }
  function d(w, m, y) {
    if (w = w % y, m = m % y, m === w + 1)
      return "next";
    if (m === w - 1)
      return "previous";
  }
  function p(w) {
    const m = w.target.closest(Ee(e.params.pagination.bulletClass));
    if (!m)
      return;
    w.preventDefault();
    const y = Mt(m) * e.params.slidesPerGroup;
    if (e.params.loop) {
      if (e.realIndex === y) return;
      const z = d(e.realIndex, y, e.slides.length);
      z === "next" ? e.slideNext() : z === "previous" ? e.slidePrev() : e.slideToLoop(y);
    } else
      e.slideTo(y);
  }
  function g() {
    const w = e.rtl, m = e.params.pagination;
    if (o()) return;
    let y = e.pagination.el;
    y = Y(y);
    let z, P;
    const A = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length, T = e.params.loop ? Math.ceil(A / e.params.slidesPerGroup) : e.snapGrid.length;
    if (e.params.loop ? (P = e.previousRealIndex || 0, z = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : typeof e.snapIndex < "u" ? (z = e.snapIndex, P = e.previousSnapIndex) : (P = e.previousIndex || 0, z = e.activeIndex || 0), m.type === "bullets" && e.pagination.bullets && e.pagination.bullets.length > 0) {
      const E = e.pagination.bullets;
      let S, I, C;
      if (m.dynamicBullets && (a = Zi(E[0], e.isHorizontal() ? "width" : "height"), y.forEach((x) => {
        x.style[e.isHorizontal() ? "width" : "height"] = `${a * (m.dynamicMainBullets + 4)}px`;
      }), m.dynamicMainBullets > 1 && P !== void 0 && (l += z - (P || 0), l > m.dynamicMainBullets - 1 ? l = m.dynamicMainBullets - 1 : l < 0 && (l = 0)), S = Math.max(z - l, 0), I = S + (Math.min(E.length, m.dynamicMainBullets) - 1), C = (I + S) / 2), E.forEach((x) => {
        const M = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(($) => `${m.bulletActiveClass}${$}`)].map(($) => typeof $ == "string" && $.includes(" ") ? $.split(" ") : $).flat();
        x.classList.remove(...M);
      }), y.length > 1)
        E.forEach((x) => {
          const M = Mt(x);
          M === z ? x.classList.add(...m.bulletActiveClass.split(" ")) : e.isElement && x.setAttribute("part", "bullet"), m.dynamicBullets && (M >= S && M <= I && x.classList.add(...`${m.bulletActiveClass}-main`.split(" ")), M === S && c(x, "prev"), M === I && c(x, "next"));
        });
      else {
        const x = E[z];
        if (x && x.classList.add(...m.bulletActiveClass.split(" ")), e.isElement && E.forEach((M, $) => {
          M.setAttribute("part", $ === z ? "bullet-active" : "bullet");
        }), m.dynamicBullets) {
          const M = E[S], $ = E[I];
          for (let N = S; N <= I; N += 1)
            E[N] && E[N].classList.add(...`${m.bulletActiveClass}-main`.split(" "));
          c(M, "prev"), c($, "next");
        }
      }
      if (m.dynamicBullets) {
        const x = Math.min(E.length, m.dynamicMainBullets + 4), M = (a * x - a) / 2 - C * a, $ = w ? "right" : "left";
        E.forEach((N) => {
          N.style[e.isHorizontal() ? $ : "top"] = `${M}px`;
        });
      }
    }
    y.forEach((E, S) => {
      if (m.type === "fraction" && (E.querySelectorAll(Ee(m.currentClass)).forEach((I) => {
        I.textContent = m.formatFractionCurrent(z + 1);
      }), E.querySelectorAll(Ee(m.totalClass)).forEach((I) => {
        I.textContent = m.formatFractionTotal(T);
      })), m.type === "progressbar") {
        let I;
        m.progressbarOpposite ? I = e.isHorizontal() ? "vertical" : "horizontal" : I = e.isHorizontal() ? "horizontal" : "vertical";
        const C = (z + 1) / T;
        let x = 1, M = 1;
        I === "horizontal" ? x = C : M = C, E.querySelectorAll(Ee(m.progressbarFillClass)).forEach(($) => {
          $.style.transform = `translate3d(0,0,0) scaleX(${x}) scaleY(${M})`, $.style.transitionDuration = `${e.params.speed}ms`;
        });
      }
      m.type === "custom" && m.renderCustom ? (E.innerHTML = m.renderCustom(e, z + 1, T), S === 0 && s("paginationRender", E)) : (S === 0 && s("paginationRender", E), s("paginationUpdate", E)), e.params.watchOverflow && e.enabled && E.classList[e.isLocked ? "add" : "remove"](m.lockClass);
    });
  }
  function h() {
    const w = e.params.pagination;
    if (o()) return;
    const m = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length;
    let y = e.pagination.el;
    y = Y(y);
    let z = "";
    if (w.type === "bullets") {
      let P = e.params.loop ? Math.ceil(m / e.params.slidesPerGroup) : e.snapGrid.length;
      e.params.freeMode && e.params.freeMode.enabled && P > m && (P = m);
      for (let A = 0; A < P; A += 1)
        w.renderBullet ? z += w.renderBullet.call(e, A, w.bulletClass) : z += `<${w.bulletElement} ${e.isElement ? 'part="bullet"' : ""} class="${w.bulletClass}"></${w.bulletElement}>`;
    }
    w.type === "fraction" && (w.renderFraction ? z = w.renderFraction.call(e, w.currentClass, w.totalClass) : z = `<span class="${w.currentClass}"></span> / <span class="${w.totalClass}"></span>`), w.type === "progressbar" && (w.renderProgressbar ? z = w.renderProgressbar.call(e, w.progressbarFillClass) : z = `<span class="${w.progressbarFillClass}"></span>`), e.pagination.bullets = [], y.forEach((P) => {
      w.type !== "custom" && (P.innerHTML = z || ""), w.type === "bullets" && e.pagination.bullets.push(...P.querySelectorAll(Ee(w.bulletClass)));
    }), w.type !== "custom" && s("paginationRender", y[0]);
  }
  function u() {
    e.params.pagination = fr(e, e.originalParams.pagination, e.params.pagination, {
      el: "swiper-pagination"
    });
    const w = e.params.pagination;
    if (!w.el) return;
    let m;
    typeof w.el == "string" && e.isElement && (m = e.el.querySelector(w.el)), !m && typeof w.el == "string" && (m = [...document.querySelectorAll(w.el)]), m || (m = w.el), !(!m || m.length === 0) && (e.params.uniqueNavElements && typeof w.el == "string" && Array.isArray(m) && m.length > 1 && (m = [...e.el.querySelectorAll(w.el)], m.length > 1 && (m = m.find((y) => Oe(y, ".swiper")[0] === e.el))), Array.isArray(m) && m.length === 1 && (m = m[0]), Object.assign(e.pagination, {
      el: m
    }), m = Y(m), m.forEach((y) => {
      w.type === "bullets" && w.clickable && y.classList.add(...(w.clickableClass || "").split(" ")), y.classList.add(w.modifierClass + w.type), y.classList.add(e.isHorizontal() ? w.horizontalClass : w.verticalClass), w.type === "bullets" && w.dynamicBullets && (y.classList.add(`${w.modifierClass}${w.type}-dynamic`), l = 0, w.dynamicMainBullets < 1 && (w.dynamicMainBullets = 1)), w.type === "progressbar" && w.progressbarOpposite && y.classList.add(w.progressbarOppositeClass), w.clickable && y.addEventListener("click", p), e.enabled || y.classList.add(w.lockClass);
    }));
  }
  function f() {
    const w = e.params.pagination;
    if (o()) return;
    let m = e.pagination.el;
    m && (m = Y(m), m.forEach((y) => {
      y.classList.remove(w.hiddenClass), y.classList.remove(w.modifierClass + w.type), y.classList.remove(e.isHorizontal() ? w.horizontalClass : w.verticalClass), w.clickable && (y.classList.remove(...(w.clickableClass || "").split(" ")), y.removeEventListener("click", p));
    })), e.pagination.bullets && e.pagination.bullets.forEach((y) => y.classList.remove(...w.bulletActiveClass.split(" ")));
  }
  i("changeDirection", () => {
    if (!e.pagination || !e.pagination.el) return;
    const w = e.params.pagination;
    let {
      el: m
    } = e.pagination;
    m = Y(m), m.forEach((y) => {
      y.classList.remove(w.horizontalClass, w.verticalClass), y.classList.add(e.isHorizontal() ? w.horizontalClass : w.verticalClass);
    });
  }), i("init", () => {
    e.params.pagination.enabled === !1 ? v() : (u(), h(), g());
  }), i("activeIndexChange", () => {
    typeof e.snapIndex > "u" && g();
  }), i("snapIndexChange", () => {
    g();
  }), i("snapGridLengthChange", () => {
    h(), g();
  }), i("destroy", () => {
    f();
  }), i("enable disable", () => {
    let {
      el: w
    } = e.pagination;
    w && (w = Y(w), w.forEach((m) => m.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass)));
  }), i("lock unlock", () => {
    g();
  }), i("click", (w, m) => {
    const y = m.target, z = Y(e.pagination.el);
    if (e.params.pagination.el && e.params.pagination.hideOnClick && z && z.length > 0 && !y.classList.contains(e.params.pagination.bulletClass)) {
      if (e.navigation && (e.navigation.nextEl && y === e.navigation.nextEl || e.navigation.prevEl && y === e.navigation.prevEl)) return;
      const P = z[0].classList.contains(e.params.pagination.hiddenClass);
      s(P === !0 ? "paginationShow" : "paginationHide"), z.forEach((A) => A.classList.toggle(e.params.pagination.hiddenClass));
    }
  });
  const b = () => {
    e.el.classList.remove(e.params.pagination.paginationDisabledClass);
    let {
      el: w
    } = e.pagination;
    w && (w = Y(w), w.forEach((m) => m.classList.remove(e.params.pagination.paginationDisabledClass))), u(), h(), g();
  }, v = () => {
    e.el.classList.add(e.params.pagination.paginationDisabledClass);
    let {
      el: w
    } = e.pagination;
    w && (w = Y(w), w.forEach((m) => m.classList.add(e.params.pagination.paginationDisabledClass))), f();
  };
  Object.assign(e.pagination, {
    enable: b,
    disable: v,
    render: h,
    update: g,
    init: u,
    destroy: f
  });
}
function Uo(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: s
  } = r;
  const n = re();
  let a = !1, l = null, o = null, c, d, p, g;
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
      scrollbar: C,
      rtlTranslate: x
    } = e, {
      dragEl: M,
      el: $
    } = C, N = e.params.scrollbar, L = e.params.loop ? e.progressLoop : e.progress;
    let k = d, R = (p - d) * L;
    x ? (R = -R, R > 0 ? (k = d - R, R = 0) : -R + d > p && (k = p + R)) : R < 0 ? (k = d + R, R = 0) : R + d > p && (k = p - R), e.isHorizontal() ? (M.style.transform = `translate3d(${R}px, 0, 0)`, M.style.width = `${k}px`) : (M.style.transform = `translate3d(0px, ${R}px, 0)`, M.style.height = `${k}px`), N.hide && (clearTimeout(l), $.style.opacity = 1, l = setTimeout(() => {
      $.style.opacity = 0, $.style.transitionDuration = "400ms";
    }, 1e3));
  }
  function u(C) {
    !e.params.scrollbar.el || !e.scrollbar.el || (e.scrollbar.dragEl.style.transitionDuration = `${C}ms`);
  }
  function f() {
    if (!e.params.scrollbar.el || !e.scrollbar.el) return;
    const {
      scrollbar: C
    } = e, {
      dragEl: x,
      el: M
    } = C;
    x.style.width = "", x.style.height = "", p = e.isHorizontal() ? M.offsetWidth : M.offsetHeight, g = e.size / (e.virtualSize + e.params.slidesOffsetBefore - (e.params.centeredSlides ? e.snapGrid[0] : 0)), e.params.scrollbar.dragSize === "auto" ? d = p * g : d = parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? x.style.width = `${d}px` : x.style.height = `${d}px`, g >= 1 ? M.style.display = "none" : M.style.display = "", e.params.scrollbar.hide && (M.style.opacity = 0), e.params.watchOverflow && e.enabled && C.el.classList[e.isLocked ? "add" : "remove"](e.params.scrollbar.lockClass);
  }
  function b(C) {
    return e.isHorizontal() ? C.clientX : C.clientY;
  }
  function v(C) {
    const {
      scrollbar: x,
      rtlTranslate: M
    } = e, {
      el: $
    } = x;
    let N;
    N = (b(C) - Jt($)[e.isHorizontal() ? "left" : "top"] - (c !== null ? c : d / 2)) / (p - d), N = Math.max(Math.min(N, 1), 0), M && (N = 1 - N);
    const L = e.minTranslate() + (e.maxTranslate() - e.minTranslate()) * N;
    e.updateProgress(L), e.setTranslate(L), e.updateActiveIndex(), e.updateSlidesClasses();
  }
  function w(C) {
    const x = e.params.scrollbar, {
      scrollbar: M,
      wrapperEl: $
    } = e, {
      el: N,
      dragEl: L
    } = M;
    a = !0, c = C.target === L ? b(C) - C.target.getBoundingClientRect()[e.isHorizontal() ? "left" : "top"] : null, C.preventDefault(), C.stopPropagation(), $.style.transitionDuration = "100ms", L.style.transitionDuration = "100ms", v(C), clearTimeout(o), N.style.transitionDuration = "0ms", x.hide && (N.style.opacity = 1), e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "none"), s("scrollbarDragStart", C);
  }
  function m(C) {
    const {
      scrollbar: x,
      wrapperEl: M
    } = e, {
      el: $,
      dragEl: N
    } = x;
    a && (C.preventDefault && C.cancelable ? C.preventDefault() : C.returnValue = !1, v(C), M.style.transitionDuration = "0ms", $.style.transitionDuration = "0ms", N.style.transitionDuration = "0ms", s("scrollbarDragMove", C));
  }
  function y(C) {
    const x = e.params.scrollbar, {
      scrollbar: M,
      wrapperEl: $
    } = e, {
      el: N
    } = M;
    a && (a = !1, e.params.cssMode && (e.wrapperEl.style["scroll-snap-type"] = "", $.style.transitionDuration = ""), x.hide && (clearTimeout(o), o = Be(() => {
      N.style.opacity = 0, N.style.transitionDuration = "400ms";
    }, 1e3)), s("scrollbarDragEnd", C), x.snapOnRelease && e.slideToClosest());
  }
  function z(C) {
    const {
      scrollbar: x,
      params: M
    } = e, $ = x.el;
    if (!$) return;
    const N = $, L = M.passiveListeners ? {
      passive: !1,
      capture: !1
    } : !1, k = M.passiveListeners ? {
      passive: !0,
      capture: !1
    } : !1;
    if (!N) return;
    const R = C === "on" ? "addEventListener" : "removeEventListener";
    N[R]("pointerdown", w, L), n[R]("pointermove", m, L), n[R]("pointerup", y, k);
  }
  function P() {
    !e.params.scrollbar.el || !e.scrollbar.el || z("on");
  }
  function A() {
    !e.params.scrollbar.el || !e.scrollbar.el || z("off");
  }
  function T() {
    const {
      scrollbar: C,
      el: x
    } = e;
    e.params.scrollbar = fr(e, e.originalParams.scrollbar, e.params.scrollbar, {
      el: "swiper-scrollbar"
    });
    const M = e.params.scrollbar;
    if (!M.el) return;
    let $;
    if (typeof M.el == "string" && e.isElement && ($ = e.el.querySelector(M.el)), !$ && typeof M.el == "string") {
      if ($ = n.querySelectorAll(M.el), !$.length) return;
    } else $ || ($ = M.el);
    e.params.uniqueNavElements && typeof M.el == "string" && $.length > 1 && x.querySelectorAll(M.el).length === 1 && ($ = x.querySelector(M.el)), $.length > 0 && ($ = $[0]), $.classList.add(e.isHorizontal() ? M.horizontalClass : M.verticalClass);
    let N;
    $ && (N = $.querySelector(Ee(e.params.scrollbar.dragClass)), N || (N = de("div", e.params.scrollbar.dragClass), $.append(N))), Object.assign(C, {
      el: $,
      dragEl: N
    }), M.draggable && P(), $ && $.classList[e.enabled ? "remove" : "add"](...Pe(e.params.scrollbar.lockClass));
  }
  function E() {
    const C = e.params.scrollbar, x = e.scrollbar.el;
    x && x.classList.remove(...Pe(e.isHorizontal() ? C.horizontalClass : C.verticalClass)), A();
  }
  i("changeDirection", () => {
    if (!e.scrollbar || !e.scrollbar.el) return;
    const C = e.params.scrollbar;
    let {
      el: x
    } = e.scrollbar;
    x = Y(x), x.forEach((M) => {
      M.classList.remove(C.horizontalClass, C.verticalClass), M.classList.add(e.isHorizontal() ? C.horizontalClass : C.verticalClass);
    });
  }), i("init", () => {
    e.params.scrollbar.enabled === !1 ? I() : (T(), f(), h());
  }), i("update resize observerUpdate lock unlock changeDirection", () => {
    f();
  }), i("setTranslate", () => {
    h();
  }), i("setTransition", (C, x) => {
    u(x);
  }), i("enable disable", () => {
    const {
      el: C
    } = e.scrollbar;
    C && C.classList[e.enabled ? "remove" : "add"](...Pe(e.params.scrollbar.lockClass));
  }), i("destroy", () => {
    E();
  });
  const S = () => {
    e.el.classList.remove(...Pe(e.params.scrollbar.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.remove(...Pe(e.params.scrollbar.scrollbarDisabledClass)), T(), f(), h();
  }, I = () => {
    e.el.classList.add(...Pe(e.params.scrollbar.scrollbarDisabledClass)), e.scrollbar.el && e.scrollbar.el.classList.add(...Pe(e.params.scrollbar.scrollbarDisabledClass)), E();
  };
  Object.assign(e.scrollbar, {
    enable: S,
    disable: I,
    updateSize: f,
    setTranslate: h,
    init: T,
    destroy: E
  });
}
function Ko(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = r;
  t({
    parallax: {
      enabled: !1
    }
  });
  const s = "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]", n = (o, c) => {
    const {
      rtl: d
    } = e, p = d ? -1 : 1, g = o.getAttribute("data-swiper-parallax") || "0";
    let h = o.getAttribute("data-swiper-parallax-x"), u = o.getAttribute("data-swiper-parallax-y");
    const f = o.getAttribute("data-swiper-parallax-scale"), b = o.getAttribute("data-swiper-parallax-opacity"), v = o.getAttribute("data-swiper-parallax-rotate");
    if (h || u ? (h = h || "0", u = u || "0") : e.isHorizontal() ? (h = g, u = "0") : (u = g, h = "0"), h.indexOf("%") >= 0 ? h = `${parseInt(h, 10) * c * p}%` : h = `${h * c * p}px`, u.indexOf("%") >= 0 ? u = `${parseInt(u, 10) * c}%` : u = `${u * c}px`, typeof b < "u" && b !== null) {
      const m = b - (b - 1) * (1 - Math.abs(c));
      o.style.opacity = m;
    }
    let w = `translate3d(${h}, ${u}, 0px)`;
    if (typeof f < "u" && f !== null) {
      const m = f - (f - 1) * (1 - Math.abs(c));
      w += ` scale(${m})`;
    }
    if (v && typeof v < "u" && v !== null) {
      const m = v * c * -1;
      w += ` rotate(${m}deg)`;
    }
    o.style.transform = w;
  }, a = () => {
    const {
      el: o,
      slides: c,
      progress: d,
      snapGrid: p,
      isElement: g
    } = e, h = se(o, s);
    e.isElement && h.push(...se(e.hostEl, s)), h.forEach((u) => {
      n(u, d);
    }), c.forEach((u, f) => {
      let b = u.progress;
      e.params.slidesPerGroup > 1 && e.params.slidesPerView !== "auto" && (b += Math.ceil(f / 2) - d * (p.length - 1)), b = Math.min(Math.max(b, -1), 1), u.querySelectorAll(`${s}, [data-swiper-parallax-rotate]`).forEach((v) => {
        n(v, b);
      });
    });
  }, l = function(o) {
    o === void 0 && (o = e.params.speed);
    const {
      el: c,
      hostEl: d
    } = e, p = [...c.querySelectorAll(s)];
    e.isElement && p.push(...d.querySelectorAll(s)), p.forEach((g) => {
      let h = parseInt(g.getAttribute("data-swiper-parallax-duration"), 10) || o;
      o === 0 && (h = 0), g.style.transitionDuration = `${h}ms`;
    });
  };
  i("beforeInit", () => {
    e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0);
  }), i("init", () => {
    e.params.parallax.enabled && a();
  }), i("setTranslate", () => {
    e.params.parallax.enabled && a();
  }), i("setTransition", (o, c) => {
    e.params.parallax.enabled && l(c);
  });
}
function Zo(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: s
  } = r;
  const n = K();
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
  let a = 1, l = !1, o = !1, c = {
    x: 0,
    y: 0
  };
  const d = -3;
  let p, g;
  const h = [], u = {
    originX: 0,
    originY: 0,
    slideEl: void 0,
    slideWidth: void 0,
    slideHeight: void 0,
    imageEl: void 0,
    imageWrapEl: void 0,
    maxRatio: 3
  }, f = {
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
    set(D) {
      if (v !== D) {
        const _ = u.imageEl, O = u.slideEl;
        s("zoomChange", D, _, O);
      }
      v = D;
    }
  });
  function w() {
    if (h.length < 2) return 1;
    const D = h[0].pageX, _ = h[0].pageY, O = h[1].pageX, V = h[1].pageY;
    return Math.sqrt((O - D) ** 2 + (V - _) ** 2);
  }
  function m() {
    const D = e.params.zoom, _ = u.imageWrapEl.getAttribute("data-swiper-zoom") || D.maxRatio;
    if (D.limitToOriginalSize && u.imageEl && u.imageEl.naturalWidth) {
      const O = u.imageEl.naturalWidth / u.imageEl.offsetWidth;
      return Math.min(O, _);
    }
    return _;
  }
  function y() {
    if (h.length < 2) return {
      x: null,
      y: null
    };
    const D = u.imageEl.getBoundingClientRect();
    return [(h[0].pageX + (h[1].pageX - h[0].pageX) / 2 - D.x - n.scrollX) / a, (h[0].pageY + (h[1].pageY - h[0].pageY) / 2 - D.y - n.scrollY) / a];
  }
  function z() {
    return e.isElement ? "swiper-slide" : `.${e.params.slideClass}`;
  }
  function P(D) {
    const _ = z();
    return !!(D.target.matches(_) || e.slides.filter((O) => O.contains(D.target)).length > 0);
  }
  function A(D) {
    const _ = `.${e.params.zoom.containerClass}`;
    return !!(D.target.matches(_) || [...e.hostEl.querySelectorAll(_)].filter((O) => O.contains(D.target)).length > 0);
  }
  function T(D) {
    if (D.pointerType === "mouse" && h.splice(0, h.length), !P(D)) return;
    const _ = e.params.zoom;
    if (p = !1, g = !1, h.push(D), !(h.length < 2)) {
      if (p = !0, u.scaleStart = w(), !u.slideEl) {
        u.slideEl = D.target.closest(`.${e.params.slideClass}, swiper-slide`), u.slideEl || (u.slideEl = e.slides[e.activeIndex]);
        let O = u.slideEl.querySelector(`.${_.containerClass}`);
        if (O && (O = O.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), u.imageEl = O, O ? u.imageWrapEl = Oe(u.imageEl, `.${_.containerClass}`)[0] : u.imageWrapEl = void 0, !u.imageWrapEl) {
          u.imageEl = void 0;
          return;
        }
        u.maxRatio = m();
      }
      if (u.imageEl) {
        const [O, V] = y();
        u.originX = O, u.originY = V, u.imageEl.style.transitionDuration = "0ms";
      }
      l = !0;
    }
  }
  function E(D) {
    if (!P(D)) return;
    const _ = e.params.zoom, O = e.zoom, V = h.findIndex((Z) => Z.pointerId === D.pointerId);
    V >= 0 && (h[V] = D), !(h.length < 2) && (g = !0, u.scaleMove = w(), u.imageEl && (O.scale = u.scaleMove / u.scaleStart * a, O.scale > u.maxRatio && (O.scale = u.maxRatio - 1 + (O.scale - u.maxRatio + 1) ** 0.5), O.scale < _.minRatio && (O.scale = _.minRatio + 1 - (_.minRatio - O.scale + 1) ** 0.5), u.imageEl.style.transform = `translate3d(0,0,0) scale(${O.scale})`));
  }
  function S(D) {
    if (!P(D) || D.pointerType === "mouse" && D.type === "pointerout") return;
    const _ = e.params.zoom, O = e.zoom, V = h.findIndex((Z) => Z.pointerId === D.pointerId);
    V >= 0 && h.splice(V, 1), !(!p || !g) && (p = !1, g = !1, u.imageEl && (O.scale = Math.max(Math.min(O.scale, u.maxRatio), _.minRatio), u.imageEl.style.transitionDuration = `${e.params.speed}ms`, u.imageEl.style.transform = `translate3d(0,0,0) scale(${O.scale})`, a = O.scale, l = !1, O.scale > 1 && u.slideEl ? u.slideEl.classList.add(`${_.zoomedSlideClass}`) : O.scale <= 1 && u.slideEl && u.slideEl.classList.remove(`${_.zoomedSlideClass}`), O.scale === 1 && (u.originX = 0, u.originY = 0, u.slideEl = void 0)));
  }
  let I;
  function C() {
    e.touchEventsData.preventTouchMoveFromPointerMove = !1;
  }
  function x() {
    clearTimeout(I), e.touchEventsData.preventTouchMoveFromPointerMove = !0, I = setTimeout(() => {
      e.destroyed || C();
    });
  }
  function M(D) {
    const _ = e.device;
    if (!u.imageEl || f.isTouched) return;
    _.android && D.cancelable && D.preventDefault(), f.isTouched = !0;
    const O = h.length > 0 ? h[0] : D;
    f.touchesStart.x = O.pageX, f.touchesStart.y = O.pageY;
  }
  function $(D) {
    const O = D.pointerType === "mouse" && e.params.zoom.panOnMouseMove;
    if (!P(D) || !A(D))
      return;
    const V = e.zoom;
    if (!u.imageEl)
      return;
    if (!f.isTouched || !u.slideEl) {
      O && k(D);
      return;
    }
    if (O) {
      k(D);
      return;
    }
    f.isMoved || (f.width = u.imageEl.offsetWidth || u.imageEl.clientWidth, f.height = u.imageEl.offsetHeight || u.imageEl.clientHeight, f.startX = Ki(u.imageWrapEl, "x") || 0, f.startY = Ki(u.imageWrapEl, "y") || 0, u.slideWidth = u.slideEl.offsetWidth, u.slideHeight = u.slideEl.offsetHeight, u.imageWrapEl.style.transitionDuration = "0ms");
    const Z = f.width * V.scale, ue = f.height * V.scale;
    if (f.minX = Math.min(u.slideWidth / 2 - Z / 2, 0), f.maxX = -f.minX, f.minY = Math.min(u.slideHeight / 2 - ue / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = h.length > 0 ? h[0].pageX : D.pageX, f.touchesCurrent.y = h.length > 0 ? h[0].pageY : D.pageY, Math.max(Math.abs(f.touchesCurrent.x - f.touchesStart.x), Math.abs(f.touchesCurrent.y - f.touchesStart.y)) > 5 && (e.allowClick = !1), !f.isMoved && !l) {
      if (e.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) {
        f.isTouched = !1, C();
        return;
      }
      if (!e.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) {
        f.isTouched = !1, C();
        return;
      }
    }
    D.cancelable && D.preventDefault(), D.stopPropagation(), x(), f.isMoved = !0;
    const be = (V.scale - a) / (u.maxRatio - e.params.zoom.minRatio), {
      originX: Ce,
      originY: ne
    } = u;
    f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX + be * (f.width - Ce * 2), f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY + be * (f.height - ne * 2), f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8), b.prevPositionX || (b.prevPositionX = f.touchesCurrent.x), b.prevPositionY || (b.prevPositionY = f.touchesCurrent.y), b.prevTime || (b.prevTime = Date.now()), b.x = (f.touchesCurrent.x - b.prevPositionX) / (Date.now() - b.prevTime) / 2, b.y = (f.touchesCurrent.y - b.prevPositionY) / (Date.now() - b.prevTime) / 2, Math.abs(f.touchesCurrent.x - b.prevPositionX) < 2 && (b.x = 0), Math.abs(f.touchesCurrent.y - b.prevPositionY) < 2 && (b.y = 0), b.prevPositionX = f.touchesCurrent.x, b.prevPositionY = f.touchesCurrent.y, b.prevTime = Date.now(), u.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`;
  }
  function N() {
    const D = e.zoom;
    if (h.length = 0, !u.imageEl) return;
    if (!f.isTouched || !f.isMoved) {
      f.isTouched = !1, f.isMoved = !1;
      return;
    }
    f.isTouched = !1, f.isMoved = !1;
    let _ = 300, O = 300;
    const V = b.x * _, Z = f.currentX + V, ue = b.y * O, Te = f.currentY + ue;
    b.x !== 0 && (_ = Math.abs((Z - f.currentX) / b.x)), b.y !== 0 && (O = Math.abs((Te - f.currentY) / b.y));
    const be = Math.max(_, O);
    f.currentX = Z, f.currentY = Te;
    const Ce = f.width * D.scale, ne = f.height * D.scale;
    f.minX = Math.min(u.slideWidth / 2 - Ce / 2, 0), f.maxX = -f.minX, f.minY = Math.min(u.slideHeight / 2 - ne / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), u.imageWrapEl.style.transitionDuration = `${be}ms`, u.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`;
  }
  function L() {
    const D = e.zoom;
    u.slideEl && e.activeIndex !== e.slides.indexOf(u.slideEl) && (u.imageEl && (u.imageEl.style.transform = "translate3d(0,0,0) scale(1)"), u.imageWrapEl && (u.imageWrapEl.style.transform = "translate3d(0,0,0)"), u.slideEl.classList.remove(`${e.params.zoom.zoomedSlideClass}`), D.scale = 1, a = 1, u.slideEl = void 0, u.imageEl = void 0, u.imageWrapEl = void 0, u.originX = 0, u.originY = 0);
  }
  function k(D) {
    if (a <= 1 || !u.imageWrapEl || !P(D) || !A(D)) return;
    const _ = n.getComputedStyle(u.imageWrapEl).transform, O = new n.DOMMatrix(_);
    if (!o) {
      o = !0, c.x = D.clientX, c.y = D.clientY, f.startX = O.e, f.startY = O.f, f.width = u.imageEl.offsetWidth || u.imageEl.clientWidth, f.height = u.imageEl.offsetHeight || u.imageEl.clientHeight, u.slideWidth = u.slideEl.offsetWidth, u.slideHeight = u.slideEl.offsetHeight;
      return;
    }
    const V = (D.clientX - c.x) * d, Z = (D.clientY - c.y) * d, ue = f.width * a, Te = f.height * a, be = u.slideWidth, Ce = u.slideHeight, ne = Math.min(be / 2 - ue / 2, 0), me = -ne, dt = Math.min(Ce / 2 - Te / 2, 0), kt = -dt, qe = Math.max(Math.min(f.startX + V, me), ne), Ye = Math.max(Math.min(f.startY + Z, kt), dt);
    u.imageWrapEl.style.transitionDuration = "0ms", u.imageWrapEl.style.transform = `translate3d(${qe}px, ${Ye}px, 0)`, c.x = D.clientX, c.y = D.clientY, f.startX = qe, f.startY = Ye, f.currentX = qe, f.currentY = Ye;
  }
  function R(D) {
    const _ = e.zoom, O = e.params.zoom;
    if (!u.slideEl) {
      D && D.target && (u.slideEl = D.target.closest(`.${e.params.slideClass}, swiper-slide`)), u.slideEl || (e.params.virtual && e.params.virtual.enabled && e.virtual ? u.slideEl = se(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : u.slideEl = e.slides[e.activeIndex]);
      let ct = u.slideEl.querySelector(`.${O.containerClass}`);
      ct && (ct = ct.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), u.imageEl = ct, ct ? u.imageWrapEl = Oe(u.imageEl, `.${O.containerClass}`)[0] : u.imageWrapEl = void 0;
    }
    if (!u.imageEl || !u.imageWrapEl) return;
    e.params.cssMode && (e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.touchAction = "none"), u.slideEl.classList.add(`${O.zoomedSlideClass}`);
    let V, Z, ue, Te, be, Ce, ne, me, dt, kt, qe, Ye, $t, _t, ai, oi, li, di;
    typeof f.touchesStart.x > "u" && D ? (V = D.pageX, Z = D.pageY) : (V = f.touchesStart.x, Z = f.touchesStart.y);
    const ci = a, je = typeof D == "number" ? D : null;
    a === 1 && je && (V = void 0, Z = void 0, f.touchesStart.x = void 0, f.touchesStart.y = void 0);
    const vr = m();
    _.scale = je || vr, a = je || vr, D && !(a === 1 && je) ? (li = u.slideEl.offsetWidth, di = u.slideEl.offsetHeight, ue = Jt(u.slideEl).left + n.scrollX, Te = Jt(u.slideEl).top + n.scrollY, be = ue + li / 2 - V, Ce = Te + di / 2 - Z, dt = u.imageEl.offsetWidth || u.imageEl.clientWidth, kt = u.imageEl.offsetHeight || u.imageEl.clientHeight, qe = dt * _.scale, Ye = kt * _.scale, $t = Math.min(li / 2 - qe / 2, 0), _t = Math.min(di / 2 - Ye / 2, 0), ai = -$t, oi = -_t, ci > 0 && je && typeof f.currentX == "number" && typeof f.currentY == "number" ? (ne = f.currentX * _.scale / ci, me = f.currentY * _.scale / ci) : (ne = be * _.scale, me = Ce * _.scale), ne < $t && (ne = $t), ne > ai && (ne = ai), me < _t && (me = _t), me > oi && (me = oi)) : (ne = 0, me = 0), je && _.scale === 1 && (u.originX = 0, u.originY = 0), f.currentX = ne, f.currentY = me, u.imageWrapEl.style.transitionDuration = "300ms", u.imageWrapEl.style.transform = `translate3d(${ne}px, ${me}px,0)`, u.imageEl.style.transitionDuration = "300ms", u.imageEl.style.transform = `translate3d(0,0,0) scale(${_.scale})`;
  }
  function H() {
    const D = e.zoom, _ = e.params.zoom;
    if (!u.slideEl) {
      e.params.virtual && e.params.virtual.enabled && e.virtual ? u.slideEl = se(e.slidesEl, `.${e.params.slideActiveClass}`)[0] : u.slideEl = e.slides[e.activeIndex];
      let O = u.slideEl.querySelector(`.${_.containerClass}`);
      O && (O = O.querySelectorAll("picture, img, svg, canvas, .swiper-zoom-target")[0]), u.imageEl = O, O ? u.imageWrapEl = Oe(u.imageEl, `.${_.containerClass}`)[0] : u.imageWrapEl = void 0;
    }
    !u.imageEl || !u.imageWrapEl || (e.params.cssMode && (e.wrapperEl.style.overflow = "", e.wrapperEl.style.touchAction = ""), D.scale = 1, a = 1, f.currentX = void 0, f.currentY = void 0, f.touchesStart.x = void 0, f.touchesStart.y = void 0, u.imageWrapEl.style.transitionDuration = "300ms", u.imageWrapEl.style.transform = "translate3d(0,0,0)", u.imageEl.style.transitionDuration = "300ms", u.imageEl.style.transform = "translate3d(0,0,0) scale(1)", u.slideEl.classList.remove(`${_.zoomedSlideClass}`), u.slideEl = void 0, u.originX = 0, u.originY = 0, e.params.zoom.panOnMouseMove && (c = {
      x: 0,
      y: 0
    }, o && (o = !1, f.startX = 0, f.startY = 0)));
  }
  function X(D) {
    const _ = e.zoom;
    _.scale && _.scale !== 1 ? H() : R(D);
  }
  function ee() {
    const D = e.params.passiveListeners ? {
      passive: !0,
      capture: !1
    } : !1, _ = e.params.passiveListeners ? {
      passive: !1,
      capture: !0
    } : !0;
    return {
      passiveListener: D,
      activeListenerWithCapture: _
    };
  }
  function ae() {
    const D = e.zoom;
    if (D.enabled) return;
    D.enabled = !0;
    const {
      passiveListener: _,
      activeListenerWithCapture: O
    } = ee();
    e.wrapperEl.addEventListener("pointerdown", T, _), e.wrapperEl.addEventListener("pointermove", E, O), ["pointerup", "pointercancel", "pointerout"].forEach((V) => {
      e.wrapperEl.addEventListener(V, S, _);
    }), e.wrapperEl.addEventListener("pointermove", $, O);
  }
  function Le() {
    const D = e.zoom;
    if (!D.enabled) return;
    D.enabled = !1;
    const {
      passiveListener: _,
      activeListenerWithCapture: O
    } = ee();
    e.wrapperEl.removeEventListener("pointerdown", T, _), e.wrapperEl.removeEventListener("pointermove", E, O), ["pointerup", "pointercancel", "pointerout"].forEach((V) => {
      e.wrapperEl.removeEventListener(V, S, _);
    }), e.wrapperEl.removeEventListener("pointermove", $, O);
  }
  i("init", () => {
    e.params.zoom.enabled && ae();
  }), i("destroy", () => {
    Le();
  }), i("touchStart", (D, _) => {
    e.zoom.enabled && M(_);
  }), i("touchEnd", (D, _) => {
    e.zoom.enabled && N();
  }), i("doubleTap", (D, _) => {
    !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && X(_);
  }), i("transitionEnd", () => {
    e.zoom.enabled && e.params.zoom.enabled && L();
  }), i("slideChange", () => {
    e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && L();
  }), Object.assign(e.zoom, {
    enable: ae,
    disable: Le,
    in: R,
    out: H,
    toggle: X
  });
}
function Jo(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = r;
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
  function s(c, d) {
    const p = /* @__PURE__ */ function() {
      let f, b, v;
      return (w, m) => {
        for (b = -1, f = w.length; f - b > 1; )
          v = f + b >> 1, w[v] <= m ? b = v : f = v;
        return f;
      };
    }();
    this.x = c, this.y = d, this.lastIndex = c.length - 1;
    let g, h;
    return this.interpolate = function(f) {
      return f ? (h = p(this.x, f), g = h - 1, (f - this.x[g]) * (this.y[h] - this.y[g]) / (this.x[h] - this.x[g]) + this.y[g]) : 0;
    }, this;
  }
  function n(c) {
    e.controller.spline = e.params.loop ? new s(e.slidesGrid, c.slidesGrid) : new s(e.snapGrid, c.snapGrid);
  }
  function a(c, d) {
    const p = e.controller.control;
    let g, h;
    const u = e.constructor;
    function f(b) {
      if (b.destroyed) return;
      const v = e.rtlTranslate ? -e.translate : e.translate;
      e.params.controller.by === "slide" && (n(b), h = -e.controller.spline.interpolate(-v)), (!h || e.params.controller.by === "container") && (g = (b.maxTranslate() - b.minTranslate()) / (e.maxTranslate() - e.minTranslate()), (Number.isNaN(g) || !Number.isFinite(g)) && (g = 1), h = (v - e.minTranslate()) * g + b.minTranslate()), e.params.controller.inverse && (h = b.maxTranslate() - h), b.updateProgress(h), b.setTranslate(h, e), b.updateActiveIndex(), b.updateSlidesClasses();
    }
    if (Array.isArray(p))
      for (let b = 0; b < p.length; b += 1)
        p[b] !== d && p[b] instanceof u && f(p[b]);
    else p instanceof u && d !== p && f(p);
  }
  function l(c, d) {
    const p = e.constructor, g = e.controller.control;
    let h;
    function u(f) {
      f.destroyed || (f.setTransition(c, e), c !== 0 && (f.transitionStart(), f.params.autoHeight && Be(() => {
        f.updateAutoHeight();
      }), Et(f.wrapperEl, () => {
        g && f.transitionEnd();
      })));
    }
    if (Array.isArray(g))
      for (h = 0; h < g.length; h += 1)
        g[h] !== d && g[h] instanceof p && u(g[h]);
    else g instanceof p && d !== g && u(g);
  }
  function o() {
    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
  }
  i("beforeInit", () => {
    if (typeof window < "u" && // eslint-disable-line
    (typeof e.params.controller.control == "string" || e.params.controller.control instanceof HTMLElement)) {
      (typeof e.params.controller.control == "string" ? [...document.querySelectorAll(e.params.controller.control)] : [e.params.controller.control]).forEach((d) => {
        if (e.controller.control || (e.controller.control = []), d && d.swiper)
          e.controller.control.push(d.swiper);
        else if (d) {
          const p = `${e.params.eventsPrefix}init`, g = (h) => {
            e.controller.control.push(h.detail[0]), e.update(), d.removeEventListener(p, g);
          };
          d.addEventListener(p, g);
        }
      });
      return;
    }
    e.controller.control = e.params.controller.control;
  }), i("update", () => {
    o();
  }), i("resize", () => {
    o();
  }), i("observerUpdate", () => {
    o();
  }), i("setTranslate", (c, d, p) => {
    !e.controller.control || e.controller.control.destroyed || e.controller.setTranslate(d, p);
  }), i("setTransition", (c, d, p) => {
    !e.controller.control || e.controller.control.destroyed || e.controller.setTransition(d, p);
  }), Object.assign(e.controller, {
    setTranslate: a,
    setTransition: l
  });
}
function Qo(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = r;
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
  let s = null, n, a, l = (/* @__PURE__ */ new Date()).getTime();
  function o(L) {
    const k = s;
    k.length !== 0 && (k.innerHTML = "", k.innerHTML = L);
  }
  function c(L) {
    const k = () => Math.round(16 * Math.random()).toString(16);
    return "x".repeat(L).replace(/x/g, k);
  }
  function d(L) {
    L = Y(L), L.forEach((k) => {
      k.setAttribute("tabIndex", "0");
    });
  }
  function p(L) {
    L = Y(L), L.forEach((k) => {
      k.setAttribute("tabIndex", "-1");
    });
  }
  function g(L, k) {
    L = Y(L), L.forEach((R) => {
      R.setAttribute("role", k);
    });
  }
  function h(L, k) {
    L = Y(L), L.forEach((R) => {
      R.setAttribute("aria-roledescription", k);
    });
  }
  function u(L, k) {
    L = Y(L), L.forEach((R) => {
      R.setAttribute("aria-controls", k);
    });
  }
  function f(L, k) {
    L = Y(L), L.forEach((R) => {
      R.setAttribute("aria-label", k);
    });
  }
  function b(L, k) {
    L = Y(L), L.forEach((R) => {
      R.setAttribute("id", k);
    });
  }
  function v(L, k) {
    L = Y(L), L.forEach((R) => {
      R.setAttribute("aria-live", k);
    });
  }
  function w(L) {
    L = Y(L), L.forEach((k) => {
      k.setAttribute("aria-disabled", !0);
    });
  }
  function m(L) {
    L = Y(L), L.forEach((k) => {
      k.setAttribute("aria-disabled", !1);
    });
  }
  function y(L) {
    if (L.keyCode !== 13 && L.keyCode !== 32) return;
    const k = e.params.a11y, R = L.target;
    if (!(e.pagination && e.pagination.el && (R === e.pagination.el || e.pagination.el.contains(L.target)) && !L.target.matches(Ee(e.params.pagination.bulletClass)))) {
      if (e.navigation && e.navigation.prevEl && e.navigation.nextEl) {
        const H = Y(e.navigation.prevEl);
        Y(e.navigation.nextEl).includes(R) && (e.isEnd && !e.params.loop || e.slideNext(), e.isEnd ? o(k.lastSlideMessage) : o(k.nextSlideMessage)), H.includes(R) && (e.isBeginning && !e.params.loop || e.slidePrev(), e.isBeginning ? o(k.firstSlideMessage) : o(k.prevSlideMessage));
      }
      e.pagination && R.matches(Ee(e.params.pagination.bulletClass)) && R.click();
    }
  }
  function z() {
    if (e.params.loop || e.params.rewind || !e.navigation) return;
    const {
      nextEl: L,
      prevEl: k
    } = e.navigation;
    k && (e.isBeginning ? (w(k), p(k)) : (m(k), d(k))), L && (e.isEnd ? (w(L), p(L)) : (m(L), d(L)));
  }
  function P() {
    return e.pagination && e.pagination.bullets && e.pagination.bullets.length;
  }
  function A() {
    return P() && e.params.pagination.clickable;
  }
  function T() {
    const L = e.params.a11y;
    P() && e.pagination.bullets.forEach((k) => {
      e.params.pagination.clickable && (d(k), e.params.pagination.renderBullet || (g(k, "button"), f(k, L.paginationBulletMessage.replace(/\{\{index\}\}/, Mt(k) + 1)))), k.matches(Ee(e.params.pagination.bulletActiveClass)) ? k.setAttribute("aria-current", "true") : k.removeAttribute("aria-current");
    });
  }
  const E = (L, k, R) => {
    d(L), L.tagName !== "BUTTON" && (g(L, "button"), L.addEventListener("keydown", y)), f(L, R), u(L, k);
  }, S = (L) => {
    a && a !== L.target && !a.contains(L.target) && (n = !0), e.a11y.clicked = !0;
  }, I = () => {
    n = !1, requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        e.destroyed || (e.a11y.clicked = !1);
      });
    });
  }, C = (L) => {
    l = (/* @__PURE__ */ new Date()).getTime();
  }, x = (L) => {
    if (e.a11y.clicked || !e.params.a11y.scrollOnFocus || (/* @__PURE__ */ new Date()).getTime() - l < 100) return;
    const k = L.target.closest(`.${e.params.slideClass}, swiper-slide`);
    if (!k || !e.slides.includes(k)) return;
    a = k;
    const R = e.slides.indexOf(k) === e.activeIndex, H = e.params.watchSlidesProgress && e.visibleSlides && e.visibleSlides.includes(k);
    R || H || L.sourceCapabilities && L.sourceCapabilities.firesTouchEvents || (e.isHorizontal() ? e.el.scrollLeft = 0 : e.el.scrollTop = 0, requestAnimationFrame(() => {
      n || (e.params.loop ? e.slideToLoop(parseInt(k.getAttribute("data-swiper-slide-index")), 0) : e.slideTo(e.slides.indexOf(k), 0), n = !1);
    }));
  }, M = () => {
    const L = e.params.a11y;
    L.itemRoleDescriptionMessage && h(e.slides, L.itemRoleDescriptionMessage), L.slideRole && g(e.slides, L.slideRole);
    const k = e.slides.length;
    L.slideLabelMessage && e.slides.forEach((R, H) => {
      const X = e.params.loop ? parseInt(R.getAttribute("data-swiper-slide-index"), 10) : H, ee = L.slideLabelMessage.replace(/\{\{index\}\}/, X + 1).replace(/\{\{slidesLength\}\}/, k);
      f(R, ee);
    });
  }, $ = () => {
    const L = e.params.a11y;
    e.el.append(s);
    const k = e.el;
    L.containerRoleDescriptionMessage && h(k, L.containerRoleDescriptionMessage), L.containerMessage && f(k, L.containerMessage), L.containerRole && g(k, L.containerRole);
    const R = e.wrapperEl, H = L.id || R.getAttribute("id") || `swiper-wrapper-${c(16)}`, X = e.params.autoplay && e.params.autoplay.enabled ? "off" : "polite";
    b(R, H), v(R, X), M();
    let {
      nextEl: ee,
      prevEl: ae
    } = e.navigation ? e.navigation : {};
    ee = Y(ee), ae = Y(ae), ee && ee.forEach((D) => E(D, H, L.nextSlideMessage)), ae && ae.forEach((D) => E(D, H, L.prevSlideMessage)), A() && Y(e.pagination.el).forEach((_) => {
      _.addEventListener("keydown", y);
    }), re().addEventListener("visibilitychange", C), e.el.addEventListener("focus", x, !0), e.el.addEventListener("focus", x, !0), e.el.addEventListener("pointerdown", S, !0), e.el.addEventListener("pointerup", I, !0);
  };
  function N() {
    s && s.remove();
    let {
      nextEl: L,
      prevEl: k
    } = e.navigation ? e.navigation : {};
    L = Y(L), k = Y(k), L && L.forEach((H) => H.removeEventListener("keydown", y)), k && k.forEach((H) => H.removeEventListener("keydown", y)), A() && Y(e.pagination.el).forEach((X) => {
      X.removeEventListener("keydown", y);
    }), re().removeEventListener("visibilitychange", C), e.el && typeof e.el != "string" && (e.el.removeEventListener("focus", x, !0), e.el.removeEventListener("pointerdown", S, !0), e.el.removeEventListener("pointerup", I, !0));
  }
  i("beforeInit", () => {
    s = de("span", e.params.a11y.notificationClass), s.setAttribute("aria-live", "assertive"), s.setAttribute("aria-atomic", "true");
  }), i("afterInit", () => {
    e.params.a11y.enabled && $();
  }), i("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
    e.params.a11y.enabled && M();
  }), i("fromEdge toEdge afterInit lock unlock", () => {
    e.params.a11y.enabled && z();
  }), i("paginationUpdate", () => {
    e.params.a11y.enabled && T();
  }), i("destroy", () => {
    e.params.a11y.enabled && N();
  });
}
function el(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = r;
  t({
    history: {
      enabled: !1,
      root: "",
      replaceState: !1,
      key: "slides",
      keepQuery: !1
    }
  });
  let s = !1, n = {};
  const a = (h) => h.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), l = (h) => {
    const u = K();
    let f;
    h ? f = new URL(h) : f = u.location;
    const b = f.pathname.slice(1).split("/").filter((y) => y !== ""), v = b.length, w = b[v - 2], m = b[v - 1];
    return {
      key: w,
      value: m
    };
  }, o = (h, u) => {
    const f = K();
    if (!s || !e.params.history.enabled) return;
    let b;
    e.params.url ? b = new URL(e.params.url) : b = f.location;
    const v = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${u}"]`) : e.slides[u];
    let w = a(v.getAttribute("data-history"));
    if (e.params.history.root.length > 0) {
      let y = e.params.history.root;
      y[y.length - 1] === "/" && (y = y.slice(0, y.length - 1)), w = `${y}/${h ? `${h}/` : ""}${w}`;
    } else b.pathname.includes(h) || (w = `${h ? `${h}/` : ""}${w}`);
    e.params.history.keepQuery && (w += b.search);
    const m = f.history.state;
    m && m.value === w || (e.params.history.replaceState ? f.history.replaceState({
      value: w
    }, null, w) : f.history.pushState({
      value: w
    }, null, w));
  }, c = (h, u, f) => {
    if (u)
      for (let b = 0, v = e.slides.length; b < v; b += 1) {
        const w = e.slides[b];
        if (a(w.getAttribute("data-history")) === u) {
          const y = e.getSlideIndex(w);
          e.slideTo(y, h, f);
        }
      }
    else
      e.slideTo(0, h, f);
  }, d = () => {
    n = l(e.params.url), c(e.params.speed, n.value, !1);
  }, p = () => {
    const h = K();
    if (e.params.history) {
      if (!h.history || !h.history.pushState) {
        e.params.history.enabled = !1, e.params.hashNavigation.enabled = !0;
        return;
      }
      if (s = !0, n = l(e.params.url), !n.key && !n.value) {
        e.params.history.replaceState || h.addEventListener("popstate", d);
        return;
      }
      c(0, n.value, e.params.runCallbacksOnInit), e.params.history.replaceState || h.addEventListener("popstate", d);
    }
  }, g = () => {
    const h = K();
    e.params.history.replaceState || h.removeEventListener("popstate", d);
  };
  i("init", () => {
    e.params.history.enabled && p();
  }), i("destroy", () => {
    e.params.history.enabled && g();
  }), i("transitionEnd _freeModeNoMomentumRelease", () => {
    s && o(e.params.history.key, e.activeIndex);
  }), i("slideChange", () => {
    s && e.params.cssMode && o(e.params.history.key, e.activeIndex);
  });
}
function tl(r) {
  let {
    swiper: e,
    extendParams: t,
    emit: i,
    on: s
  } = r, n = !1;
  const a = re(), l = K();
  t({
    hashNavigation: {
      enabled: !1,
      replaceState: !1,
      watchState: !1,
      getSlideIndex(g, h) {
        if (e.virtual && e.params.virtual.enabled) {
          const u = e.slides.find((b) => b.getAttribute("data-hash") === h);
          return u ? parseInt(u.getAttribute("data-swiper-slide-index"), 10) : 0;
        }
        return e.getSlideIndex(se(e.slidesEl, `.${e.params.slideClass}[data-hash="${h}"], swiper-slide[data-hash="${h}"]`)[0]);
      }
    }
  });
  const o = () => {
    i("hashChange");
    const g = a.location.hash.replace("#", ""), h = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], u = h ? h.getAttribute("data-hash") : "";
    if (g !== u) {
      const f = e.params.hashNavigation.getSlideIndex(e, g);
      if (typeof f > "u" || Number.isNaN(f)) return;
      e.slideTo(f);
    }
  }, c = () => {
    if (!n || !e.params.hashNavigation.enabled) return;
    const g = e.virtual && e.params.virtual.enabled ? e.slidesEl.querySelector(`[data-swiper-slide-index="${e.activeIndex}"]`) : e.slides[e.activeIndex], h = g ? g.getAttribute("data-hash") || g.getAttribute("data-history") : "";
    e.params.hashNavigation.replaceState && l.history && l.history.replaceState ? (l.history.replaceState(null, null, `#${h}` || ""), i("hashSet")) : (a.location.hash = h || "", i("hashSet"));
  }, d = () => {
    if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
    n = !0;
    const g = a.location.hash.replace("#", "");
    if (g) {
      const u = e.params.hashNavigation.getSlideIndex(e, g);
      e.slideTo(u || 0, 0, e.params.runCallbacksOnInit, !0);
    }
    e.params.hashNavigation.watchState && l.addEventListener("hashchange", o);
  }, p = () => {
    e.params.hashNavigation.watchState && l.removeEventListener("hashchange", o);
  };
  s("init", () => {
    e.params.hashNavigation.enabled && d();
  }), s("destroy", () => {
    e.params.hashNavigation.enabled && p();
  }), s("transitionEnd _freeModeNoMomentumRelease", () => {
    n && c();
  }), s("slideChange", () => {
    n && e.params.cssMode && c();
  });
}
function il(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i,
    emit: s,
    params: n
  } = r;
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
  let a, l, o = n && n.autoplay ? n.autoplay.delay : 3e3, c = n && n.autoplay ? n.autoplay.delay : 3e3, d, p = (/* @__PURE__ */ new Date()).getTime(), g, h, u, f, b, v, w;
  function m(k) {
    !e || e.destroyed || !e.wrapperEl || k.target === e.wrapperEl && (e.wrapperEl.removeEventListener("transitionend", m), !(w || k.detail && k.detail.bySwiperTouchMove) && S());
  }
  const y = () => {
    if (e.destroyed || !e.autoplay.running) return;
    e.autoplay.paused ? g = !0 : g && (c = d, g = !1);
    const k = e.autoplay.paused ? d : p + c - (/* @__PURE__ */ new Date()).getTime();
    e.autoplay.timeLeft = k, s("autoplayTimeLeft", k, k / o), l = requestAnimationFrame(() => {
      y();
    });
  }, z = () => {
    let k;
    return e.virtual && e.params.virtual.enabled ? k = e.slides.find((H) => H.classList.contains("swiper-slide-active")) : k = e.slides[e.activeIndex], k ? parseInt(k.getAttribute("data-swiper-autoplay"), 10) : void 0;
  }, P = (k) => {
    if (e.destroyed || !e.autoplay.running) return;
    cancelAnimationFrame(l), y();
    let R = typeof k > "u" ? e.params.autoplay.delay : k;
    o = e.params.autoplay.delay, c = e.params.autoplay.delay;
    const H = z();
    !Number.isNaN(H) && H > 0 && typeof k > "u" && (R = H, o = H, c = H), d = R;
    const X = e.params.speed, ee = () => {
      !e || e.destroyed || (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(X, !0, !0), s("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, X, !0, !0), s("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(X, !0, !0), s("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, X, !0, !0), s("autoplay")), e.params.cssMode && (p = (/* @__PURE__ */ new Date()).getTime(), requestAnimationFrame(() => {
        P();
      })));
    };
    return R > 0 ? (clearTimeout(a), a = setTimeout(() => {
      ee();
    }, R)) : requestAnimationFrame(() => {
      ee();
    }), R;
  }, A = () => {
    p = (/* @__PURE__ */ new Date()).getTime(), e.autoplay.running = !0, P(), s("autoplayStart");
  }, T = () => {
    e.autoplay.running = !1, clearTimeout(a), cancelAnimationFrame(l), s("autoplayStop");
  }, E = (k, R) => {
    if (e.destroyed || !e.autoplay.running) return;
    clearTimeout(a), k || (v = !0);
    const H = () => {
      s("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", m) : S();
    };
    if (e.autoplay.paused = !0, R) {
      b && (d = e.params.autoplay.delay), b = !1, H();
      return;
    }
    d = (d || e.params.autoplay.delay) - ((/* @__PURE__ */ new Date()).getTime() - p), !(e.isEnd && d < 0 && !e.params.loop) && (d < 0 && (d = 0), H());
  }, S = () => {
    e.isEnd && d < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (p = (/* @__PURE__ */ new Date()).getTime(), v ? (v = !1, P(d)) : P(), e.autoplay.paused = !1, s("autoplayResume"));
  }, I = () => {
    if (e.destroyed || !e.autoplay.running) return;
    const k = re();
    k.visibilityState === "hidden" && (v = !0, E(!0)), k.visibilityState === "visible" && S();
  }, C = (k) => {
    k.pointerType === "mouse" && (v = !0, w = !0, !(e.animating || e.autoplay.paused) && E(!0));
  }, x = (k) => {
    k.pointerType === "mouse" && (w = !1, e.autoplay.paused && S());
  }, M = () => {
    e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", C), e.el.addEventListener("pointerleave", x));
  }, $ = () => {
    e.el && typeof e.el != "string" && (e.el.removeEventListener("pointerenter", C), e.el.removeEventListener("pointerleave", x));
  }, N = () => {
    re().addEventListener("visibilitychange", I);
  }, L = () => {
    re().removeEventListener("visibilitychange", I);
  };
  i("init", () => {
    e.params.autoplay.enabled && (M(), N(), A());
  }), i("destroy", () => {
    $(), L(), e.autoplay.running && T();
  }), i("_freeModeStaticRelease", () => {
    (u || v) && S();
  }), i("_freeModeNoMomentumRelease", () => {
    e.params.autoplay.disableOnInteraction ? T() : E(!0, !0);
  }), i("beforeTransitionStart", (k, R, H) => {
    e.destroyed || !e.autoplay.running || (H || !e.params.autoplay.disableOnInteraction ? E(!0, !0) : T());
  }), i("sliderFirstMove", () => {
    if (!(e.destroyed || !e.autoplay.running)) {
      if (e.params.autoplay.disableOnInteraction) {
        T();
        return;
      }
      h = !0, u = !1, v = !1, f = setTimeout(() => {
        v = !0, u = !0, E(!0);
      }, 200);
    }
  }), i("touchEnd", () => {
    if (!(e.destroyed || !e.autoplay.running || !h)) {
      if (clearTimeout(f), clearTimeout(a), e.params.autoplay.disableOnInteraction) {
        u = !1, h = !1;
        return;
      }
      u && e.params.cssMode && S(), u = !1, h = !1;
    }
  }), i("slideChange", () => {
    e.destroyed || !e.autoplay.running || (b = !0);
  }), Object.assign(e.autoplay, {
    start: A,
    stop: T,
    pause: E,
    resume: S
  });
}
function rl(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = r;
  t({
    thumbs: {
      swiper: null,
      multipleActiveThumbs: !0,
      autoScrollOffset: 0,
      slideThumbActiveClass: "swiper-slide-thumb-active",
      thumbsContainerClass: "swiper-thumbs"
    }
  });
  let s = !1, n = !1;
  e.thumbs = {
    swiper: null
  };
  function a() {
    const c = e.thumbs.swiper;
    if (!c || c.destroyed) return;
    const d = c.clickedIndex, p = c.clickedSlide;
    if (p && p.classList.contains(e.params.thumbs.slideThumbActiveClass) || typeof d > "u" || d === null) return;
    let g;
    c.params.loop ? g = parseInt(c.clickedSlide.getAttribute("data-swiper-slide-index"), 10) : g = d, e.params.loop ? e.slideToLoop(g) : e.slideTo(g);
  }
  function l() {
    const {
      thumbs: c
    } = e.params;
    if (s) return !1;
    s = !0;
    const d = e.constructor;
    if (c.swiper instanceof d) {
      if (c.swiper.destroyed)
        return s = !1, !1;
      e.thumbs.swiper = c.swiper, Object.assign(e.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), Object.assign(e.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), e.thumbs.swiper.update();
    } else if (mt(c.swiper)) {
      const p = Object.assign({}, c.swiper);
      Object.assign(p, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), e.thumbs.swiper = new d(p), n = !0;
    }
    return e.thumbs.swiper.el.classList.add(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", a), !0;
  }
  function o(c) {
    const d = e.thumbs.swiper;
    if (!d || d.destroyed) return;
    const p = d.params.slidesPerView === "auto" ? d.slidesPerViewDynamic() : d.params.slidesPerView;
    let g = 1;
    const h = e.params.thumbs.slideThumbActiveClass;
    if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (g = e.params.slidesPerView), e.params.thumbs.multipleActiveThumbs || (g = 1), g = Math.floor(g), d.slides.forEach((b) => b.classList.remove(h)), d.params.loop || d.params.virtual && d.params.virtual.enabled)
      for (let b = 0; b < g; b += 1)
        se(d.slidesEl, `[data-swiper-slide-index="${e.realIndex + b}"]`).forEach((v) => {
          v.classList.add(h);
        });
    else
      for (let b = 0; b < g; b += 1)
        d.slides[e.realIndex + b] && d.slides[e.realIndex + b].classList.add(h);
    const u = e.params.thumbs.autoScrollOffset, f = u && !d.params.loop;
    if (e.realIndex !== d.realIndex || f) {
      const b = d.activeIndex;
      let v, w;
      if (d.params.loop) {
        const m = d.slides.find((y) => y.getAttribute("data-swiper-slide-index") === `${e.realIndex}`);
        v = d.slides.indexOf(m), w = e.activeIndex > e.previousIndex ? "next" : "prev";
      } else
        v = e.realIndex, w = v > e.previousIndex ? "next" : "prev";
      f && (v += w === "next" ? u : -1 * u), d.visibleSlidesIndexes && d.visibleSlidesIndexes.indexOf(v) < 0 && (d.params.centeredSlides ? v > b ? v = v - Math.floor(p / 2) + 1 : v = v + Math.floor(p / 2) - 1 : v > b && d.params.slidesPerGroup, d.slideTo(v, c ? 0 : void 0));
    }
  }
  i("beforeInit", () => {
    const {
      thumbs: c
    } = e.params;
    if (!(!c || !c.swiper))
      if (typeof c.swiper == "string" || c.swiper instanceof HTMLElement) {
        const d = re(), p = () => {
          const h = typeof c.swiper == "string" ? d.querySelector(c.swiper) : c.swiper;
          if (h && h.swiper)
            c.swiper = h.swiper, l(), o(!0);
          else if (h) {
            const u = `${e.params.eventsPrefix}init`, f = (b) => {
              c.swiper = b.detail[0], h.removeEventListener(u, f), l(), o(!0), c.swiper.update(), e.update();
            };
            h.addEventListener(u, f);
          }
          return h;
        }, g = () => {
          if (e.destroyed) return;
          p() || requestAnimationFrame(g);
        };
        requestAnimationFrame(g);
      } else
        l(), o(!0);
  }), i("slideChange update resize observerUpdate", () => {
    o();
  }), i("setTransition", (c, d) => {
    const p = e.thumbs.swiper;
    !p || p.destroyed || p.setTransition(d);
  }), i("beforeDestroy", () => {
    const c = e.thumbs.swiper;
    !c || c.destroyed || n && c.destroy();
  }), Object.assign(e.thumbs, {
    init: l,
    update: o
  });
}
function sl(r) {
  let {
    swiper: e,
    extendParams: t,
    emit: i,
    once: s
  } = r;
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
    const o = e.getTranslate();
    e.setTranslate(o), e.setTransition(0), e.touchEventsData.velocities.length = 0, e.freeMode.onTouchEnd({
      currentPos: e.rtl ? e.translate : -e.translate
    });
  }
  function a() {
    if (e.params.cssMode) return;
    const {
      touchEventsData: o,
      touches: c
    } = e;
    o.velocities.length === 0 && o.velocities.push({
      position: c[e.isHorizontal() ? "startX" : "startY"],
      time: o.touchStartTime
    }), o.velocities.push({
      position: c[e.isHorizontal() ? "currentX" : "currentY"],
      time: pe()
    });
  }
  function l(o) {
    let {
      currentPos: c
    } = o;
    if (e.params.cssMode) return;
    const {
      params: d,
      wrapperEl: p,
      rtlTranslate: g,
      snapGrid: h,
      touchEventsData: u
    } = e, b = pe() - u.touchStartTime;
    if (c < -e.minTranslate()) {
      e.slideTo(e.activeIndex);
      return;
    }
    if (c > -e.maxTranslate()) {
      e.slides.length < h.length ? e.slideTo(h.length - 1) : e.slideTo(e.slides.length - 1);
      return;
    }
    if (d.freeMode.momentum) {
      if (u.velocities.length > 1) {
        const T = u.velocities.pop(), E = u.velocities.pop(), S = T.position - E.position, I = T.time - E.time;
        e.velocity = S / I, e.velocity /= 2, Math.abs(e.velocity) < d.freeMode.minimumVelocity && (e.velocity = 0), (I > 150 || pe() - T.time > 300) && (e.velocity = 0);
      } else
        e.velocity = 0;
      e.velocity *= d.freeMode.momentumVelocityRatio, u.velocities.length = 0;
      let v = 1e3 * d.freeMode.momentumRatio;
      const w = e.velocity * v;
      let m = e.translate + w;
      g && (m = -m);
      let y = !1, z;
      const P = Math.abs(e.velocity) * 20 * d.freeMode.momentumBounceRatio;
      let A;
      if (m < e.maxTranslate())
        d.freeMode.momentumBounce ? (m + e.maxTranslate() < -P && (m = e.maxTranslate() - P), z = e.maxTranslate(), y = !0, u.allowMomentumBounce = !0) : m = e.maxTranslate(), d.loop && d.centeredSlides && (A = !0);
      else if (m > e.minTranslate())
        d.freeMode.momentumBounce ? (m - e.minTranslate() > P && (m = e.minTranslate() + P), z = e.minTranslate(), y = !0, u.allowMomentumBounce = !0) : m = e.minTranslate(), d.loop && d.centeredSlides && (A = !0);
      else if (d.freeMode.sticky) {
        let T;
        for (let E = 0; E < h.length; E += 1)
          if (h[E] > -m) {
            T = E;
            break;
          }
        Math.abs(h[T] - m) < Math.abs(h[T - 1] - m) || e.swipeDirection === "next" ? m = h[T] : m = h[T - 1], m = -m;
      }
      if (A && s("transitionEnd", () => {
        e.loopFix();
      }), e.velocity !== 0) {
        if (g ? v = Math.abs((-m - e.translate) / e.velocity) : v = Math.abs((m - e.translate) / e.velocity), d.freeMode.sticky) {
          const T = Math.abs((g ? -m : m) - e.translate), E = e.slidesSizesGrid[e.activeIndex];
          T < E ? v = d.speed : T < 2 * E ? v = d.speed * 1.5 : v = d.speed * 2.5;
        }
      } else if (d.freeMode.sticky) {
        e.slideToClosest();
        return;
      }
      d.freeMode.momentumBounce && y ? (e.updateProgress(z), e.setTransition(v), e.setTranslate(m), e.transitionStart(!0, e.swipeDirection), e.animating = !0, Et(p, () => {
        !e || e.destroyed || !u.allowMomentumBounce || (i("momentumBounce"), e.setTransition(d.speed), setTimeout(() => {
          e.setTranslate(z), Et(p, () => {
            !e || e.destroyed || e.transitionEnd();
          });
        }, 0));
      })) : e.velocity ? (i("_freeModeNoMomentumRelease"), e.updateProgress(m), e.setTransition(v), e.setTranslate(m), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, Et(p, () => {
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
      onTouchMove: a,
      onTouchEnd: l
    }
  });
}
function nl(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = r;
  t({
    grid: {
      rows: 1,
      fill: "column"
    }
  });
  let s, n, a, l;
  const o = () => {
    let f = e.params.spaceBetween;
    return typeof f == "string" && f.indexOf("%") >= 0 ? f = parseFloat(f.replace("%", "")) / 100 * e.size : typeof f == "string" && (f = parseFloat(f)), f;
  }, c = (f) => {
    const {
      slidesPerView: b
    } = e.params, {
      rows: v,
      fill: w
    } = e.params.grid, m = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : f.length;
    a = Math.floor(m / v), Math.floor(m / v) === m / v ? s = m : s = Math.ceil(m / v) * v, b !== "auto" && w === "row" && (s = Math.max(s, b * v)), n = s / v;
  }, d = () => {
    e.slides && e.slides.forEach((f) => {
      f.swiperSlideGridSet && (f.style.height = "", f.style[e.getDirectionLabel("margin-top")] = "");
    });
  }, p = (f, b, v) => {
    const {
      slidesPerGroup: w
    } = e.params, m = o(), {
      rows: y,
      fill: z
    } = e.params.grid, P = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : v.length;
    let A, T, E;
    if (z === "row" && w > 1) {
      const S = Math.floor(f / (w * y)), I = f - y * w * S, C = S === 0 ? w : Math.min(Math.ceil((P - S * y * w) / y), w);
      E = Math.floor(I / C), T = I - E * C + S * w, A = T + E * s / y, b.style.order = A;
    } else z === "column" ? (T = Math.floor(f / y), E = f - T * y, (T > a || T === a && E === y - 1) && (E += 1, E >= y && (E = 0, T += 1))) : (E = Math.floor(f / n), T = f - E * n);
    b.row = E, b.column = T, b.style.height = `calc((100% - ${(y - 1) * m}px) / ${y})`, b.style[e.getDirectionLabel("margin-top")] = E !== 0 ? m && `${m}px` : "", b.swiperSlideGridSet = !0;
  }, g = (f, b) => {
    const {
      centeredSlides: v,
      roundLengths: w
    } = e.params, m = o(), {
      rows: y
    } = e.params.grid;
    if (e.virtualSize = (f + m) * s, e.virtualSize = Math.ceil(e.virtualSize / y) - m, e.params.cssMode || (e.wrapperEl.style[e.getDirectionLabel("width")] = `${e.virtualSize + m}px`), v) {
      const z = [];
      for (let P = 0; P < b.length; P += 1) {
        let A = b[P];
        w && (A = Math.floor(A)), b[P] < e.virtualSize + b[0] && z.push(A);
      }
      b.splice(0, b.length), b.push(...z);
    }
  }, h = () => {
    l = e.params.grid && e.params.grid.rows > 1;
  }, u = () => {
    const {
      params: f,
      el: b
    } = e, v = f.grid && f.grid.rows > 1;
    l && !v ? (b.classList.remove(`${f.containerModifierClass}grid`, `${f.containerModifierClass}grid-column`), a = 1, e.emitContainerClasses()) : !l && v && (b.classList.add(`${f.containerModifierClass}grid`), f.grid.fill === "column" && b.classList.add(`${f.containerModifierClass}grid-column`), e.emitContainerClasses()), l = v;
  };
  i("init", h), i("update", u), e.grid = {
    initSlides: c,
    unsetSlides: d,
    updateSlide: p,
    updateWrapperSize: g
  };
}
function al(r) {
  const e = this, {
    params: t,
    slidesEl: i
  } = e;
  t.loop && e.loopDestroy();
  const s = (n) => {
    if (typeof n == "string") {
      const a = document.createElement("div");
      a.innerHTML = n, i.append(a.children[0]), a.innerHTML = "";
    } else
      i.append(n);
  };
  if (typeof r == "object" && "length" in r)
    for (let n = 0; n < r.length; n += 1)
      r[n] && s(r[n]);
  else
    s(r);
  e.recalcSlides(), t.loop && e.loopCreate(), (!t.observer || e.isElement) && e.update();
}
function ol(r) {
  const e = this, {
    params: t,
    activeIndex: i,
    slidesEl: s
  } = e;
  t.loop && e.loopDestroy();
  let n = i + 1;
  const a = (l) => {
    if (typeof l == "string") {
      const o = document.createElement("div");
      o.innerHTML = l, s.prepend(o.children[0]), o.innerHTML = "";
    } else
      s.prepend(l);
  };
  if (typeof r == "object" && "length" in r) {
    for (let l = 0; l < r.length; l += 1)
      r[l] && a(r[l]);
    n = i + r.length;
  } else
    a(r);
  e.recalcSlides(), t.loop && e.loopCreate(), (!t.observer || e.isElement) && e.update(), e.slideTo(n, 0, !1);
}
function ll(r, e) {
  const t = this, {
    params: i,
    activeIndex: s,
    slidesEl: n
  } = t;
  let a = s;
  i.loop && (a -= t.loopedSlides, t.loopDestroy(), t.recalcSlides());
  const l = t.slides.length;
  if (r <= 0) {
    t.prependSlide(e);
    return;
  }
  if (r >= l) {
    t.appendSlide(e);
    return;
  }
  let o = a > r ? a + 1 : a;
  const c = [];
  for (let d = l - 1; d >= r; d -= 1) {
    const p = t.slides[d];
    p.remove(), c.unshift(p);
  }
  if (typeof e == "object" && "length" in e) {
    for (let d = 0; d < e.length; d += 1)
      e[d] && n.append(e[d]);
    o = a > r ? a + e.length : a;
  } else
    n.append(e);
  for (let d = 0; d < c.length; d += 1)
    n.append(c[d]);
  t.recalcSlides(), i.loop && t.loopCreate(), (!i.observer || t.isElement) && t.update(), i.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
}
function dl(r) {
  const e = this, {
    params: t,
    activeIndex: i
  } = e;
  let s = i;
  t.loop && (s -= e.loopedSlides, e.loopDestroy());
  let n = s, a;
  if (typeof r == "object" && "length" in r) {
    for (let l = 0; l < r.length; l += 1)
      a = r[l], e.slides[a] && e.slides[a].remove(), a < n && (n -= 1);
    n = Math.max(n, 0);
  } else
    a = r, e.slides[a] && e.slides[a].remove(), a < n && (n -= 1), n = Math.max(n, 0);
  e.recalcSlides(), t.loop && e.loopCreate(), (!t.observer || e.isElement) && e.update(), t.loop ? e.slideTo(n + e.loopedSlides, 0, !1) : e.slideTo(n, 0, !1);
}
function cl() {
  const r = this, e = [];
  for (let t = 0; t < r.slides.length; t += 1)
    e.push(t);
  r.removeSlide(e);
}
function ul(r) {
  let {
    swiper: e
  } = r;
  Object.assign(e, {
    appendSlide: al.bind(e),
    prependSlide: ol.bind(e),
    addSlide: ll.bind(e),
    removeSlide: dl.bind(e),
    removeAllSlides: cl.bind(e)
  });
}
function ot(r) {
  const {
    effect: e,
    swiper: t,
    on: i,
    setTranslate: s,
    setTransition: n,
    overwriteParams: a,
    perspective: l,
    recreateShadows: o,
    getEffectParams: c
  } = r;
  i("beforeInit", () => {
    if (t.params.effect !== e) return;
    t.classNames.push(`${t.params.containerModifierClass}${e}`), l && l() && t.classNames.push(`${t.params.containerModifierClass}3d`);
    const p = a ? a() : {};
    Object.assign(t.params, p), Object.assign(t.originalParams, p);
  }), i("setTranslate", () => {
    t.params.effect === e && s();
  }), i("setTransition", (p, g) => {
    t.params.effect === e && n(g);
  }), i("transitionEnd", () => {
    if (t.params.effect === e && o) {
      if (!c || !c().slideShadows) return;
      t.slides.forEach((p) => {
        p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((g) => g.remove());
      }), o();
    }
  });
  let d;
  i("virtualUpdate", () => {
    t.params.effect === e && (t.slides.length || (d = !0), requestAnimationFrame(() => {
      d && t.slides && t.slides.length && (s(), d = !1);
    }));
  });
}
function Lt(r, e) {
  const t = Fe(e);
  return t !== e && (t.style.backfaceVisibility = "hidden", t.style["-webkit-backface-visibility"] = "hidden"), t;
}
function ri(r) {
  let {
    swiper: e,
    duration: t,
    transformElements: i,
    allSlides: s
  } = r;
  const {
    activeIndex: n
  } = e, a = (l) => l.parentElement ? l.parentElement : e.slides.find((c) => c.shadowRoot && c.shadowRoot === l.parentNode);
  if (e.params.virtualTranslate && t !== 0) {
    let l = !1, o;
    s ? o = i : o = i.filter((c) => {
      const d = c.classList.contains("swiper-slide-transform") ? a(c) : c;
      return e.getSlideIndex(d) === n;
    }), o.forEach((c) => {
      Et(c, () => {
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
function fl(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = r;
  t({
    fadeEffect: {
      crossFade: !1
    }
  }), ot({
    effect: "fade",
    swiper: e,
    on: i,
    setTranslate: () => {
      const {
        slides: a
      } = e, l = e.params.fadeEffect;
      for (let o = 0; o < a.length; o += 1) {
        const c = e.slides[o];
        let p = -c.swiperSlideOffset;
        e.params.virtualTranslate || (p -= e.translate);
        let g = 0;
        e.isHorizontal() || (g = p, p = 0);
        const h = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(c.progress), 0) : 1 + Math.min(Math.max(c.progress, -1), 0), u = Lt(l, c);
        u.style.opacity = h, u.style.transform = `translate3d(${p}px, ${g}px, 0px)`;
      }
    },
    setTransition: (a) => {
      const l = e.slides.map((o) => Fe(o));
      l.forEach((o) => {
        o.style.transitionDuration = `${a}ms`;
      }), ri({
        swiper: e,
        duration: a,
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
function pl(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = r;
  t({
    cubeEffect: {
      slideShadows: !0,
      shadow: !0,
      shadowOffset: 20,
      shadowScale: 0.94
    }
  });
  const s = (o, c, d) => {
    let p = d ? o.querySelector(".swiper-slide-shadow-left") : o.querySelector(".swiper-slide-shadow-top"), g = d ? o.querySelector(".swiper-slide-shadow-right") : o.querySelector(".swiper-slide-shadow-bottom");
    p || (p = de("div", `swiper-slide-shadow-cube swiper-slide-shadow-${d ? "left" : "top"}`.split(" ")), o.append(p)), g || (g = de("div", `swiper-slide-shadow-cube swiper-slide-shadow-${d ? "right" : "bottom"}`.split(" ")), o.append(g)), p && (p.style.opacity = Math.max(-c, 0)), g && (g.style.opacity = Math.max(c, 0));
  };
  ot({
    effect: "cube",
    swiper: e,
    on: i,
    setTranslate: () => {
      const {
        el: o,
        wrapperEl: c,
        slides: d,
        width: p,
        height: g,
        rtlTranslate: h,
        size: u,
        browser: f
      } = e, b = ii(e), v = e.params.cubeEffect, w = e.isHorizontal(), m = e.virtual && e.params.virtual.enabled;
      let y = 0, z;
      v.shadow && (w ? (z = e.wrapperEl.querySelector(".swiper-cube-shadow"), z || (z = de("div", "swiper-cube-shadow"), e.wrapperEl.append(z)), z.style.height = `${p}px`) : (z = o.querySelector(".swiper-cube-shadow"), z || (z = de("div", "swiper-cube-shadow"), o.append(z))));
      for (let A = 0; A < d.length; A += 1) {
        const T = d[A];
        let E = A;
        m && (E = parseInt(T.getAttribute("data-swiper-slide-index"), 10));
        let S = E * 90, I = Math.floor(S / 360);
        h && (S = -S, I = Math.floor(-S / 360));
        const C = Math.max(Math.min(T.progress, 1), -1);
        let x = 0, M = 0, $ = 0;
        E % 4 === 0 ? (x = -I * 4 * u, $ = 0) : (E - 1) % 4 === 0 ? (x = 0, $ = -I * 4 * u) : (E - 2) % 4 === 0 ? (x = u + I * 4 * u, $ = u) : (E - 3) % 4 === 0 && (x = -u, $ = 3 * u + u * 4 * I), h && (x = -x), w || (M = x, x = 0);
        const N = `rotateX(${b(w ? 0 : -S)}deg) rotateY(${b(w ? S : 0)}deg) translate3d(${x}px, ${M}px, ${$}px)`;
        C <= 1 && C > -1 && (y = E * 90 + C * 90, h && (y = -E * 90 - C * 90)), T.style.transform = N, v.slideShadows && s(T, C, w);
      }
      if (c.style.transformOrigin = `50% 50% -${u / 2}px`, c.style["-webkit-transform-origin"] = `50% 50% -${u / 2}px`, v.shadow)
        if (w)
          z.style.transform = `translate3d(0px, ${p / 2 + v.shadowOffset}px, ${-p / 2}px) rotateX(89.99deg) rotateZ(0deg) scale(${v.shadowScale})`;
        else {
          const A = Math.abs(y) - Math.floor(Math.abs(y) / 90) * 90, T = 1.5 - (Math.sin(A * 2 * Math.PI / 360) / 2 + Math.cos(A * 2 * Math.PI / 360) / 2), E = v.shadowScale, S = v.shadowScale / T, I = v.shadowOffset;
          z.style.transform = `scale3d(${E}, 1, ${S}) translate3d(0px, ${g / 2 + I}px, ${-g / 2 / S}px) rotateX(-89.99deg)`;
        }
      const P = (f.isSafari || f.isWebView) && f.needPerspectiveFix ? -u / 2 : 0;
      c.style.transform = `translate3d(0px,0,${P}px) rotateX(${b(e.isHorizontal() ? 0 : y)}deg) rotateY(${b(e.isHorizontal() ? -y : 0)}deg)`, c.style.setProperty("--swiper-cube-translate-z", `${P}px`);
    },
    setTransition: (o) => {
      const {
        el: c,
        slides: d
      } = e;
      if (d.forEach((p) => {
        p.style.transitionDuration = `${o}ms`, p.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((g) => {
          g.style.transitionDuration = `${o}ms`;
        });
      }), e.params.cubeEffect.shadow && !e.isHorizontal()) {
        const p = c.querySelector(".swiper-cube-shadow");
        p && (p.style.transitionDuration = `${o}ms`);
      }
    },
    recreateShadows: () => {
      const o = e.isHorizontal();
      e.slides.forEach((c) => {
        const d = Math.max(Math.min(c.progress, 1), -1);
        s(c, d, o);
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
function rt(r, e, t) {
  const i = `swiper-slide-shadow${t ? `-${t}` : ""}${r ? ` swiper-slide-shadow-${r}` : ""}`, s = Fe(e);
  let n = s.querySelector(`.${i.split(" ").join(".")}`);
  return n || (n = de("div", i.split(" ")), s.append(n)), n;
}
function hl(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = r;
  t({
    flipEffect: {
      slideShadows: !0,
      limitRotation: !0
    }
  });
  const s = (o, c) => {
    let d = e.isHorizontal() ? o.querySelector(".swiper-slide-shadow-left") : o.querySelector(".swiper-slide-shadow-top"), p = e.isHorizontal() ? o.querySelector(".swiper-slide-shadow-right") : o.querySelector(".swiper-slide-shadow-bottom");
    d || (d = rt("flip", o, e.isHorizontal() ? "left" : "top")), p || (p = rt("flip", o, e.isHorizontal() ? "right" : "bottom")), d && (d.style.opacity = Math.max(-c, 0)), p && (p.style.opacity = Math.max(c, 0));
  };
  ot({
    effect: "flip",
    swiper: e,
    on: i,
    setTranslate: () => {
      const {
        slides: o,
        rtlTranslate: c
      } = e, d = e.params.flipEffect, p = ii(e);
      for (let g = 0; g < o.length; g += 1) {
        const h = o[g];
        let u = h.progress;
        e.params.flipEffect.limitRotation && (u = Math.max(Math.min(h.progress, 1), -1));
        const f = h.swiperSlideOffset;
        let v = -180 * u, w = 0, m = e.params.cssMode ? -f - e.translate : -f, y = 0;
        e.isHorizontal() ? c && (v = -v) : (y = m, m = 0, w = -v, v = 0), h.style.zIndex = -Math.abs(Math.round(u)) + o.length, d.slideShadows && s(h, u);
        const z = `translate3d(${m}px, ${y}px, 0px) rotateX(${p(w)}deg) rotateY(${p(v)}deg)`, P = Lt(d, h);
        P.style.transform = z;
      }
    },
    setTransition: (o) => {
      const c = e.slides.map((d) => Fe(d));
      c.forEach((d) => {
        d.style.transitionDuration = `${o}ms`, d.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((p) => {
          p.style.transitionDuration = `${o}ms`;
        });
      }), ri({
        swiper: e,
        duration: o,
        transformElements: c
      });
    },
    recreateShadows: () => {
      e.params.flipEffect, e.slides.forEach((o) => {
        let c = o.progress;
        e.params.flipEffect.limitRotation && (c = Math.max(Math.min(o.progress, 1), -1)), s(o, c);
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
function ml(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = r;
  t({
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      scale: 1,
      modifier: 1,
      slideShadows: !0
    }
  }), ot({
    effect: "coverflow",
    swiper: e,
    on: i,
    setTranslate: () => {
      const {
        width: a,
        height: l,
        slides: o,
        slidesSizesGrid: c
      } = e, d = e.params.coverflowEffect, p = e.isHorizontal(), g = e.translate, h = p ? -g + a / 2 : -g + l / 2, u = p ? d.rotate : -d.rotate, f = d.depth, b = ii(e);
      for (let v = 0, w = o.length; v < w; v += 1) {
        const m = o[v], y = c[v], z = m.swiperSlideOffset, P = (h - z - y / 2) / y, A = typeof d.modifier == "function" ? d.modifier(P) : P * d.modifier;
        let T = p ? u * A : 0, E = p ? 0 : u * A, S = -f * Math.abs(A), I = d.stretch;
        typeof I == "string" && I.indexOf("%") !== -1 && (I = parseFloat(d.stretch) / 100 * y);
        let C = p ? 0 : I * A, x = p ? I * A : 0, M = 1 - (1 - d.scale) * Math.abs(A);
        Math.abs(x) < 1e-3 && (x = 0), Math.abs(C) < 1e-3 && (C = 0), Math.abs(S) < 1e-3 && (S = 0), Math.abs(T) < 1e-3 && (T = 0), Math.abs(E) < 1e-3 && (E = 0), Math.abs(M) < 1e-3 && (M = 0);
        const $ = `translate3d(${x}px,${C}px,${S}px)  rotateX(${b(E)}deg) rotateY(${b(T)}deg) scale(${M})`, N = Lt(d, m);
        if (N.style.transform = $, m.style.zIndex = -Math.abs(Math.round(A)) + 1, d.slideShadows) {
          let L = p ? m.querySelector(".swiper-slide-shadow-left") : m.querySelector(".swiper-slide-shadow-top"), k = p ? m.querySelector(".swiper-slide-shadow-right") : m.querySelector(".swiper-slide-shadow-bottom");
          L || (L = rt("coverflow", m, p ? "left" : "top")), k || (k = rt("coverflow", m, p ? "right" : "bottom")), L && (L.style.opacity = A > 0 ? A : 0), k && (k.style.opacity = -A > 0 ? -A : 0);
        }
      }
    },
    setTransition: (a) => {
      e.slides.map((o) => Fe(o)).forEach((o) => {
        o.style.transitionDuration = `${a}ms`, o.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach((c) => {
          c.style.transitionDuration = `${a}ms`;
        });
      });
    },
    perspective: () => !0,
    overwriteParams: () => ({
      watchSlidesProgress: !0
    })
  });
}
function gl(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = r;
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
  const s = (l) => typeof l == "string" ? l : `${l}px`;
  ot({
    effect: "creative",
    swiper: e,
    on: i,
    setTranslate: () => {
      const {
        slides: l,
        wrapperEl: o,
        slidesSizesGrid: c
      } = e, d = e.params.creativeEffect, {
        progressMultiplier: p
      } = d, g = e.params.centeredSlides, h = ii(e);
      if (g) {
        const u = c[0] / 2 - e.params.slidesOffsetBefore || 0;
        o.style.transform = `translateX(calc(50% - ${u}px))`;
      }
      for (let u = 0; u < l.length; u += 1) {
        const f = l[u], b = f.progress, v = Math.min(Math.max(f.progress, -d.limitProgress), d.limitProgress);
        let w = v;
        g || (w = Math.min(Math.max(f.originalProgress, -d.limitProgress), d.limitProgress));
        const m = f.swiperSlideOffset, y = [e.params.cssMode ? -m - e.translate : -m, 0, 0], z = [0, 0, 0];
        let P = !1;
        e.isHorizontal() || (y[1] = y[0], y[0] = 0);
        let A = {
          translate: [0, 0, 0],
          rotate: [0, 0, 0],
          scale: 1,
          opacity: 1
        };
        v < 0 ? (A = d.next, P = !0) : v > 0 && (A = d.prev, P = !0), y.forEach((M, $) => {
          y[$] = `calc(${M}px + (${s(A.translate[$])} * ${Math.abs(v * p)}))`;
        }), z.forEach((M, $) => {
          let N = A.rotate[$] * Math.abs(v * p);
          z[$] = N;
        }), f.style.zIndex = -Math.abs(Math.round(b)) + l.length;
        const T = y.join(", "), E = `rotateX(${h(z[0])}deg) rotateY(${h(z[1])}deg) rotateZ(${h(z[2])}deg)`, S = w < 0 ? `scale(${1 + (1 - A.scale) * w * p})` : `scale(${1 - (1 - A.scale) * w * p})`, I = w < 0 ? 1 + (1 - A.opacity) * w * p : 1 - (1 - A.opacity) * w * p, C = `translate3d(${T}) ${E} ${S}`;
        if (P && A.shadow || !P) {
          let M = f.querySelector(".swiper-slide-shadow");
          if (!M && A.shadow && (M = rt("creative", f)), M) {
            const $ = d.shadowPerProgress ? v * (1 / d.limitProgress) : v;
            M.style.opacity = Math.min(Math.max(Math.abs($), 0), 1);
          }
        }
        const x = Lt(d, f);
        x.style.transform = C, x.style.opacity = I, A.origin && (x.style.transformOrigin = A.origin);
      }
    },
    setTransition: (l) => {
      const o = e.slides.map((c) => Fe(c));
      o.forEach((c) => {
        c.style.transitionDuration = `${l}ms`, c.querySelectorAll(".swiper-slide-shadow").forEach((d) => {
          d.style.transitionDuration = `${l}ms`;
        });
      }), ri({
        swiper: e,
        duration: l,
        transformElements: o,
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
function wl(r) {
  let {
    swiper: e,
    extendParams: t,
    on: i
  } = r;
  t({
    cardsEffect: {
      slideShadows: !0,
      rotate: !0,
      perSlideRotate: 2,
      perSlideOffset: 8
    }
  }), ot({
    effect: "cards",
    swiper: e,
    on: i,
    setTranslate: () => {
      const {
        slides: a,
        activeIndex: l,
        rtlTranslate: o
      } = e, c = e.params.cardsEffect, {
        startTranslate: d,
        isTouched: p
      } = e.touchEventsData, g = o ? -e.translate : e.translate;
      for (let h = 0; h < a.length; h += 1) {
        const u = a[h], f = u.progress, b = Math.min(Math.max(f, -4), 4);
        let v = u.swiperSlideOffset;
        e.params.centeredSlides && !e.params.cssMode && (e.wrapperEl.style.transform = `translateX(${e.minTranslate()}px)`), e.params.centeredSlides && e.params.cssMode && (v -= a[0].swiperSlideOffset);
        let w = e.params.cssMode ? -v - e.translate : -v, m = 0;
        const y = -100 * Math.abs(b);
        let z = 1, P = -c.perSlideRotate * b, A = c.perSlideOffset - Math.abs(b) * 0.75;
        const T = e.virtual && e.params.virtual.enabled ? e.virtual.from + h : h, E = (T === l || T === l - 1) && b > 0 && b < 1 && (p || e.params.cssMode) && g < d, S = (T === l || T === l + 1) && b < 0 && b > -1 && (p || e.params.cssMode) && g > d;
        if (E || S) {
          const M = (1 - Math.abs((Math.abs(b) - 0.5) / 0.5)) ** 0.5;
          P += -28 * b * M, z += -0.5 * M, A += 96 * M, m = `${-25 * M * Math.abs(b)}%`;
        }
        if (b < 0 ? w = `calc(${w}px ${o ? "-" : "+"} (${A * Math.abs(b)}%))` : b > 0 ? w = `calc(${w}px ${o ? "-" : "+"} (-${A * Math.abs(b)}%))` : w = `${w}px`, !e.isHorizontal()) {
          const M = m;
          m = w, w = M;
        }
        const I = b < 0 ? `${1 + (1 - z) * b}` : `${1 - (1 - z) * b}`, C = `
        translate3d(${w}, ${m}, ${y}px)
        rotateZ(${c.rotate ? o ? -P : P : 0}deg)
        scale(${I})
      `;
        if (c.slideShadows) {
          let M = u.querySelector(".swiper-slide-shadow");
          M || (M = rt("cards", u)), M && (M.style.opacity = Math.min(Math.max((Math.abs(b) - 0.5) / 0.5, 0), 1));
        }
        u.style.zIndex = -Math.abs(Math.round(f)) + a.length;
        const x = Lt(c, u);
        x.style.transform = C;
      }
    },
    setTransition: (a) => {
      const l = e.slides.map((o) => Fe(o));
      l.forEach((o) => {
        o.style.transitionDuration = `${a}ms`, o.querySelectorAll(".swiper-slide-shadow").forEach((c) => {
          c.style.transitionDuration = `${a}ms`;
        });
      }), ri({
        swiper: e,
        duration: a,
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
const vl = [Yo, jo, Xo, Go, Wo, Uo, Ko, Zo, Jo, Qo, el, tl, il, rl, sl, nl, ul, fl, pl, hl, ml, gl, wl];
oe.use(vl);
const si = [
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
function st(r) {
  return typeof r == "object" && r !== null && r.constructor && Object.prototype.toString.call(r).slice(8, -1) === "Object" && !r.__swiper__;
}
function er(r, e) {
  const t = ["__proto__", "constructor", "prototype"];
  Object.keys(e).filter((i) => t.indexOf(i) < 0).forEach((i) => {
    typeof r[i] > "u" ? r[i] = e[i] : st(e[i]) && st(r[i]) && Object.keys(e[i]).length > 0 ? e[i].__swiper__ ? r[i] = e[i] : er(r[i], e[i]) : r[i] = e[i];
  });
}
function bl(r) {
  return r === void 0 && (r = {}), r.navigation && typeof r.navigation.nextEl > "u" && typeof r.navigation.prevEl > "u";
}
function yl(r) {
  return r === void 0 && (r = {}), r.pagination && typeof r.pagination.el > "u";
}
function El(r) {
  return r === void 0 && (r = {}), r.scrollbar && typeof r.scrollbar.el > "u";
}
function qt(r) {
  return r === void 0 && (r = ""), r.replace(/-[a-z]/g, (e) => e.toUpperCase().replace("-", ""));
}
function xl(r) {
  let {
    swiper: e,
    slides: t,
    passedParams: i,
    changedParams: s,
    nextEl: n,
    prevEl: a,
    scrollbarEl: l,
    paginationEl: o
  } = r;
  const c = s.filter((E) => E !== "children" && E !== "direction" && E !== "wrapperClass"), {
    params: d,
    pagination: p,
    navigation: g,
    scrollbar: h,
    virtual: u,
    thumbs: f
  } = e;
  let b, v, w, m, y, z, P, A;
  s.includes("thumbs") && i.thumbs && i.thumbs.swiper && !i.thumbs.swiper.destroyed && d.thumbs && (!d.thumbs.swiper || d.thumbs.swiper.destroyed) && (b = !0), s.includes("controller") && i.controller && i.controller.control && d.controller && !d.controller.control && (v = !0), s.includes("pagination") && i.pagination && (i.pagination.el || o) && (d.pagination || d.pagination === !1) && p && !p.el && (w = !0), s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || l) && (d.scrollbar || d.scrollbar === !1) && h && !h.el && (m = !0), s.includes("navigation") && i.navigation && (i.navigation.prevEl || a) && (i.navigation.nextEl || n) && (d.navigation || d.navigation === !1) && g && !g.prevEl && !g.nextEl && (y = !0);
  const T = (E) => {
    e[E] && (e[E].destroy(), E === "navigation" ? (e.isElement && (e[E].prevEl.remove(), e[E].nextEl.remove()), d[E].prevEl = void 0, d[E].nextEl = void 0, e[E].prevEl = void 0, e[E].nextEl = void 0) : (e.isElement && e[E].el.remove(), d[E].el = void 0, e[E].el = void 0));
  };
  s.includes("loop") && e.isElement && (d.loop && !i.loop ? z = !0 : !d.loop && i.loop ? P = !0 : A = !0), c.forEach((E) => {
    if (st(d[E]) && st(i[E]))
      Object.assign(d[E], i[E]), (E === "navigation" || E === "pagination" || E === "scrollbar") && "enabled" in i[E] && !i[E].enabled && T(E);
    else {
      const S = i[E];
      (S === !0 || S === !1) && (E === "navigation" || E === "pagination" || E === "scrollbar") ? S === !1 && T(E) : d[E] = i[E];
    }
  }), c.includes("controller") && !v && e.controller && e.controller.control && d.controller && d.controller.control && (e.controller.control = d.controller.control), s.includes("children") && t && u && d.virtual.enabled ? (u.slides = t, u.update(!0)) : s.includes("virtual") && u && d.virtual.enabled && (t && (u.slides = t), u.update(!0)), s.includes("children") && t && d.loop && (A = !0), b && f.init() && f.update(!0), v && (e.controller.control = d.controller.control), w && (e.isElement && (!o || typeof o == "string") && (o = document.createElement("div"), o.classList.add("swiper-pagination"), o.part.add("pagination"), e.el.appendChild(o)), o && (d.pagination.el = o), p.init(), p.render(), p.update()), m && (e.isElement && (!l || typeof l == "string") && (l = document.createElement("div"), l.classList.add("swiper-scrollbar"), l.part.add("scrollbar"), e.el.appendChild(l)), l && (d.scrollbar.el = l), h.init(), h.updateSize(), h.setTranslate()), y && (e.isElement && ((!n || typeof n == "string") && (n = document.createElement("div"), n.classList.add("swiper-button-next"), n.innerHTML = e.hostEl.constructor.nextButtonSvg, n.part.add("button-next"), e.el.appendChild(n)), (!a || typeof a == "string") && (a = document.createElement("div"), a.classList.add("swiper-button-prev"), a.innerHTML = e.hostEl.constructor.prevButtonSvg, a.part.add("button-prev"), e.el.appendChild(a))), n && (d.navigation.nextEl = n), a && (d.navigation.prevEl = a), g.init(), g.update()), s.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext), s.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev), s.includes("direction") && e.changeDirection(i.direction, !1), (z || A) && e.loopDestroy(), (P || A) && e.loopCreate(), e.update();
}
const us = (r) => {
  if (parseFloat(r) === Number(r)) return Number(r);
  if (r === "true" || r === "") return !0;
  if (r === "false") return !1;
  if (r === "null") return null;
  if (r !== "undefined") {
    if (typeof r == "string" && r.includes("{") && r.includes("}") && r.includes('"')) {
      let e;
      try {
        e = JSON.parse(r);
      } catch {
        e = r;
      }
      return e;
    }
    return r;
  }
}, fs = ["a11y", "autoplay", "controller", "cards-effect", "coverflow-effect", "creative-effect", "cube-effect", "fade-effect", "flip-effect", "free-mode", "grid", "hash-navigation", "history", "keyboard", "mousewheel", "navigation", "pagination", "parallax", "scrollbar", "thumbs", "virtual", "zoom"];
function ps(r, e, t) {
  const i = {}, s = {};
  er(i, Qi);
  const n = [...si, "on"], a = n.map((o) => o.replace(/_/, ""));
  n.forEach((o) => {
    o = o.replace("_", ""), typeof r[o] < "u" && (s[o] = r[o]);
  });
  const l = [...r.attributes];
  return typeof e == "string" && typeof t < "u" && l.push({
    name: e,
    value: st(t) ? {
      ...t
    } : t
  }), l.forEach((o) => {
    const c = fs.find((d) => o.name.startsWith(`${d}-`));
    if (c) {
      const d = qt(c), p = qt(o.name.split(`${c}-`)[1]);
      typeof s[d] > "u" && (s[d] = {}), s[d] === !0 && (s[d] = {
        enabled: !0
      }), s[d][p] = us(o.value);
    } else {
      const d = qt(o.name);
      if (!a.includes(d)) return;
      const p = us(o.value);
      s[d] && fs.includes(o.name) && !st(p) ? (s[d].constructor !== Object && (s[d] = {}), s[d].enabled = !!p) : s[d] = p;
    }
  }), er(i, s), i.navigation ? i.navigation = {
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
    passedParams: s
  };
}
const Sl = ":host{--swiper-theme-color:#007aff}:host{position:relative;display:block;margin-left:auto;margin-right:auto;z-index:1}.swiper{width:100%;height:100%;margin-left:auto;margin-right:auto;position:relative;overflow:hidden;list-style:none;padding:0;z-index:1;display:block}.swiper-vertical>.swiper-wrapper{flex-direction:column}.swiper-wrapper{position:relative;width:100%;height:100%;z-index:1;display:flex;transition-property:transform;transition-timing-function:var(--swiper-wrapper-transition-timing-function,initial);box-sizing:content-box}.swiper-android ::slotted(swiper-slide),.swiper-ios ::slotted(swiper-slide),.swiper-wrapper{transform:translate3d(0px,0,0)}.swiper-horizontal{touch-action:pan-y}.swiper-vertical{touch-action:pan-x}::slotted(swiper-slide){flex-shrink:0;width:100%;height:100%;position:relative;transition-property:transform;display:block}::slotted(.swiper-slide-invisible-blank){visibility:hidden}.swiper-autoheight,.swiper-autoheight ::slotted(swiper-slide){height:auto}.swiper-autoheight .swiper-wrapper{align-items:flex-start;transition-property:transform,height}.swiper-backface-hidden ::slotted(swiper-slide){transform:translateZ(0);-webkit-backface-visibility:hidden;backface-visibility:hidden}.swiper-3d.swiper-css-mode .swiper-wrapper{perspective:1200px}.swiper-3d .swiper-wrapper{transform-style:preserve-3d}.swiper-3d{perspective:1200px}.swiper-3d .swiper-cube-shadow,.swiper-3d ::slotted(swiper-slide){transform-style:preserve-3d}.swiper-css-mode>.swiper-wrapper{overflow:auto;scrollbar-width:none;-ms-overflow-style:none}.swiper-css-mode>.swiper-wrapper::-webkit-scrollbar{display:none}.swiper-css-mode ::slotted(swiper-slide){scroll-snap-align:start start}.swiper-css-mode.swiper-horizontal>.swiper-wrapper{scroll-snap-type:x mandatory}.swiper-css-mode.swiper-vertical>.swiper-wrapper{scroll-snap-type:y mandatory}.swiper-css-mode.swiper-free-mode>.swiper-wrapper{scroll-snap-type:none}.swiper-css-mode.swiper-free-mode ::slotted(swiper-slide){scroll-snap-align:none}.swiper-css-mode.swiper-centered>.swiper-wrapper::before{content:'';flex-shrink:0;order:9999}.swiper-css-mode.swiper-centered ::slotted(swiper-slide){scroll-snap-align:center center;scroll-snap-stop:always}.swiper-css-mode.swiper-centered.swiper-horizontal ::slotted(swiper-slide):first-child{margin-inline-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-horizontal>.swiper-wrapper::before{height:100%;min-height:1px;width:var(--swiper-centered-offset-after)}.swiper-css-mode.swiper-centered.swiper-vertical ::slotted(swiper-slide):first-child{margin-block-start:var(--swiper-centered-offset-before)}.swiper-css-mode.swiper-centered.swiper-vertical>.swiper-wrapper::before{width:100%;min-width:1px;height:var(--swiper-centered-offset-after)}.swiper-virtual ::slotted(swiper-slide){-webkit-backface-visibility:hidden;transform:translateZ(0)}.swiper-virtual.swiper-css-mode .swiper-wrapper::after{content:'';position:absolute;left:0;top:0;pointer-events:none}.swiper-virtual.swiper-css-mode.swiper-horizontal .swiper-wrapper::after{height:1px;width:var(--swiper-virtual-size)}.swiper-virtual.swiper-css-mode.swiper-vertical .swiper-wrapper::after{width:1px;height:var(--swiper-virtual-size)}:host{--swiper-navigation-size:44px}.swiper-button-next,.swiper-button-prev{position:absolute;top:var(--swiper-navigation-top-offset,50%);width:calc(var(--swiper-navigation-size)/ 44 * 27);height:var(--swiper-navigation-size);margin-top:calc(0px - (var(--swiper-navigation-size)/ 2));z-index:10;cursor:pointer;display:flex;align-items:center;justify-content:center;color:var(--swiper-navigation-color,var(--swiper-theme-color))}.swiper-button-next.swiper-button-disabled,.swiper-button-prev.swiper-button-disabled{opacity:.35;cursor:auto;pointer-events:none}.swiper-button-next.swiper-button-hidden,.swiper-button-prev.swiper-button-hidden{opacity:0;cursor:auto;pointer-events:none}.swiper-navigation-disabled .swiper-button-next,.swiper-navigation-disabled .swiper-button-prev{display:none!important}.swiper-button-next svg,.swiper-button-prev svg{width:100%;height:100%;object-fit:contain;transform-origin:center}.swiper-rtl .swiper-button-next svg,.swiper-rtl .swiper-button-prev svg{transform:rotate(180deg)}.swiper-button-prev,.swiper-rtl .swiper-button-next{left:var(--swiper-navigation-sides-offset,10px);right:auto}.swiper-button-next,.swiper-rtl .swiper-button-prev{right:var(--swiper-navigation-sides-offset,10px);left:auto}.swiper-button-lock{display:none}.swiper-pagination{position:absolute;text-align:center;transition:.3s opacity;transform:translate3d(0,0,0);z-index:10}.swiper-pagination.swiper-pagination-hidden{opacity:0}.swiper-pagination-disabled>.swiper-pagination,.swiper-pagination.swiper-pagination-disabled{display:none!important}.swiper-horizontal>.swiper-pagination-bullets,.swiper-pagination-bullets.swiper-pagination-horizontal,.swiper-pagination-custom,.swiper-pagination-fraction{bottom:var(--swiper-pagination-bottom,8px);top:var(--swiper-pagination-top,auto);left:0;width:100%}.swiper-pagination-bullets-dynamic{overflow:hidden;font-size:0}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transform:scale(.33);position:relative}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{transform:scale(1)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev{transform:scale(.33)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next{transform:scale(.66)}.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next{transform:scale(.33)}.swiper-pagination-bullet{width:var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,8px));height:var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,8px));display:inline-block;border-radius:var(--swiper-pagination-bullet-border-radius,50%);background:var(--swiper-pagination-bullet-inactive-color,#000);opacity:var(--swiper-pagination-bullet-inactive-opacity, .2)}button.swiper-pagination-bullet{border:none;margin:0;padding:0;box-shadow:none;-webkit-appearance:none;appearance:none}.swiper-pagination-clickable .swiper-pagination-bullet{cursor:pointer}.swiper-pagination-bullet:only-child{display:none!important}.swiper-pagination-bullet-active{opacity:var(--swiper-pagination-bullet-opacity, 1);background:var(--swiper-pagination-color,var(--swiper-theme-color))}.swiper-pagination-vertical.swiper-pagination-bullets,.swiper-vertical>.swiper-pagination-bullets{right:var(--swiper-pagination-right,8px);left:var(--swiper-pagination-left,auto);top:50%;transform:translate3d(0px,-50%,0)}.swiper-pagination-vertical.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets .swiper-pagination-bullet{margin:var(--swiper-pagination-bullet-vertical-gap,6px) 0;display:block}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{top:50%;transform:translateY(-50%);width:8px}.swiper-pagination-vertical.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-vertical>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{display:inline-block;transition:.2s transform,.2s top}.swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet{margin:0 var(--swiper-pagination-bullet-horizontal-gap,4px)}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic{left:50%;transform:translateX(-50%);white-space:nowrap}.swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet,.swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s left}.swiper-horizontal.swiper-rtl>.swiper-pagination-bullets-dynamic .swiper-pagination-bullet{transition:.2s transform,.2s right}.swiper-pagination-fraction{color:var(--swiper-pagination-fraction-color,inherit)}.swiper-pagination-progressbar{background:var(--swiper-pagination-progressbar-bg-color,rgba(0,0,0,.25));position:absolute}.swiper-pagination-progressbar .swiper-pagination-progressbar-fill{background:var(--swiper-pagination-color,var(--swiper-theme-color));position:absolute;left:0;top:0;width:100%;height:100%;transform:scale(0);transform-origin:left top}.swiper-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill{transform-origin:right top}.swiper-horizontal>.swiper-pagination-progressbar,.swiper-pagination-progressbar.swiper-pagination-horizontal,.swiper-pagination-progressbar.swiper-pagination-vertical.swiper-pagination-progressbar-opposite,.swiper-vertical>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite{width:100%;height:var(--swiper-pagination-progressbar-size,4px);left:0;top:0}.swiper-horizontal>.swiper-pagination-progressbar.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-horizontal.swiper-pagination-progressbar-opposite,.swiper-pagination-progressbar.swiper-pagination-vertical,.swiper-vertical>.swiper-pagination-progressbar{width:var(--swiper-pagination-progressbar-size,4px);height:100%;left:0;top:0}.swiper-pagination-lock{display:none}.swiper-scrollbar{border-radius:var(--swiper-scrollbar-border-radius,10px);position:relative;touch-action:none;background:var(--swiper-scrollbar-bg-color,rgba(0,0,0,.1))}.swiper-scrollbar-disabled>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-disabled{display:none!important}.swiper-horizontal>.swiper-scrollbar,.swiper-scrollbar.swiper-scrollbar-horizontal{position:absolute;left:var(--swiper-scrollbar-sides-offset,1%);bottom:var(--swiper-scrollbar-bottom,4px);top:var(--swiper-scrollbar-top,auto);z-index:50;height:var(--swiper-scrollbar-size,4px);width:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar.swiper-scrollbar-vertical,.swiper-vertical>.swiper-scrollbar{position:absolute;left:var(--swiper-scrollbar-left,auto);right:var(--swiper-scrollbar-right,4px);top:var(--swiper-scrollbar-sides-offset,1%);z-index:50;width:var(--swiper-scrollbar-size,4px);height:calc(100% - 2 * var(--swiper-scrollbar-sides-offset,1%))}.swiper-scrollbar-drag{height:100%;width:100%;position:relative;background:var(--swiper-scrollbar-drag-bg-color,rgba(0,0,0,.5));border-radius:var(--swiper-scrollbar-border-radius,10px);left:0;top:0}.swiper-scrollbar-cursor-drag{cursor:move}.swiper-scrollbar-lock{display:none}::slotted(.swiper-slide-zoomed){cursor:move;touch-action:none}.swiper .swiper-notification{position:absolute;left:0;top:0;pointer-events:none;opacity:0;z-index:-1000}.swiper-free-mode>.swiper-wrapper{transition-timing-function:ease-out;margin:0 auto}.swiper-grid>.swiper-wrapper{flex-wrap:wrap}.swiper-grid-column>.swiper-wrapper{flex-wrap:wrap;flex-direction:column}.swiper-fade.swiper-free-mode ::slotted(swiper-slide){transition-timing-function:ease-out}.swiper-fade ::slotted(swiper-slide){pointer-events:none;transition-property:opacity}.swiper-fade ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-fade ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-fade ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper.swiper-cube{overflow:visible}.swiper-cube ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1;visibility:hidden;transform-origin:0 0;width:100%;height:100%}.swiper-cube ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-cube.swiper-rtl ::slotted(swiper-slide){transform-origin:100% 0}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-cube ::slotted(.swiper-slide-active),.swiper-cube ::slotted(.swiper-slide-next),.swiper-cube ::slotted(.swiper-slide-prev){pointer-events:auto;visibility:visible}.swiper-cube .swiper-cube-shadow{position:absolute;left:0;bottom:0px;width:100%;height:100%;opacity:.6;z-index:0}.swiper-cube .swiper-cube-shadow:before{content:'';background:#000;position:absolute;left:0;top:0;bottom:0;right:0;filter:blur(50px)}.swiper-cube ::slotted(.swiper-slide-next)+::slotted(swiper-slide){pointer-events:auto;visibility:visible}.swiper.swiper-flip{overflow:visible}.swiper-flip ::slotted(swiper-slide){pointer-events:none;-webkit-backface-visibility:hidden;backface-visibility:hidden;z-index:1}.swiper-flip ::slotted(swiper-slide) ::slotted(swiper-slide){pointer-events:none}.swiper-flip ::slotted(.swiper-slide-active),.swiper-flip ::slotted(.swiper-slide-active) ::slotted(.swiper-slide-active){pointer-events:auto}.swiper-creative ::slotted(swiper-slide){-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden;transition-property:transform,opacity,height}.swiper.swiper-cards{overflow:visible}.swiper-cards ::slotted(swiper-slide){transform-origin:center bottom;-webkit-backface-visibility:hidden;backface-visibility:hidden;overflow:hidden}", Tl = "::slotted(.swiper-slide-shadow),::slotted(.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-top){position:absolute;left:0;top:0;width:100%;height:100%;pointer-events:none;z-index:10}::slotted(.swiper-slide-shadow){background:rgba(0,0,0,.15)}::slotted(.swiper-slide-shadow-left){background-image:linear-gradient(to left,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-right){background-image:linear-gradient(to right,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-top){background-image:linear-gradient(to top,rgba(0,0,0,.5),rgba(0,0,0,0))}::slotted(.swiper-slide-shadow-bottom){background-image:linear-gradient(to bottom,rgba(0,0,0,.5),rgba(0,0,0,0))}.swiper-lazy-preloader{animation:swiper-preloader-spin 1s infinite linear;width:42px;height:42px;position:absolute;left:50%;top:50%;margin-left:-21px;margin-top:-21px;z-index:10;transform-origin:50%;box-sizing:border-box;border:4px solid var(--swiper-preloader-color,var(--swiper-theme-color));border-radius:50%;border-top-color:transparent}@keyframes swiper-preloader-spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-cube.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-bottom),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-left),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-right),::slotted(.swiper-slide-shadow-flip.swiper-slide-shadow-top){z-index:0;-webkit-backface-visibility:hidden;backface-visibility:hidden}::slotted(.swiper-zoom-container){width:100%;height:100%;display:flex;justify-content:center;align-items:center;text-align:center}::slotted(.swiper-zoom-container)>canvas,::slotted(.swiper-zoom-container)>img,::slotted(.swiper-zoom-container)>svg{max-width:100%;max-height:100%;object-fit:contain}";
class Cl {
}
const pn = typeof window > "u" || typeof HTMLElement > "u" ? Cl : HTMLElement, hs = `<svg width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>
    `, hn = (r, e) => {
  if (typeof CSSStyleSheet < "u" && r.adoptedStyleSheets) {
    const t = new CSSStyleSheet();
    t.replaceSync(e), r.adoptedStyleSheets = [t];
  } else {
    const t = document.createElement("style");
    t.rel = "stylesheet", t.textContent = e, r.appendChild(t);
  }
};
class mn extends pn {
  constructor() {
    super(), this.attachShadow({
      mode: "open"
    });
  }
  static get nextButtonSvg() {
    return hs;
  }
  static get prevButtonSvg() {
    return hs.replace("/></svg>", ' transform-origin="center" transform="rotate(180)"/></svg>');
  }
  cssStyles() {
    return [
      Sl,
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
          const s = document.createElement("swiper-slide");
          s.setAttribute("part", `slide slide-${i + 1}`);
          const n = document.createElement("slot");
          n.setAttribute("name", `slide-${i + 1}`), s.appendChild(n), this.shadowRoot.querySelector(".swiper-wrapper").appendChild(s);
        }
      else if (this.slideSlots < e) {
        const i = this.swiper.slides;
        for (let s = i.length - 1; s >= 0; s -= 1)
          s > this.slideSlots && i[s].remove();
      }
    }
  }
  render() {
    if (this.rendered) return;
    this.calcSlideSlots();
    let e = this.cssStyles();
    this.slideSlots > 0 && (e = e.replace(/::slotted\(([a-z-0-9.]*)\)/g, "$1")), e.length && hn(this.shadowRoot, e), this.cssLinks().forEach((i) => {
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
    }).map((i, s) => `
        <swiper-slide part="slide slide-${s}">
          <slot name="slide-${s}"></slot>
        </swiper-slide>
        `).join("")}
      </div>
      <slot name="container-end"></slot>
      ${bl(this.passedParams) ? `
        <div part="button-prev" class="swiper-button-prev">${this.constructor.prevButtonSvg}</div>
        <div part="button-next" class="swiper-button-next">${this.constructor.nextButtonSvg}</div>
      ` : ""}
      ${yl(this.passedParams) ? `
        <div part="pagination" class="swiper-pagination"></div>
      ` : ""}
      ${El(this.passedParams) ? `
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
    } = ps(this);
    this.swiperParams = t, this.passedParams = i, delete this.swiperParams.init, this.render(), this.swiper = new oe(this.shadowRoot.querySelector(".swiper"), {
      ...t.virtual ? {} : {
        observer: !0
      },
      ...t,
      touchEventsTarget: "container",
      onAny: function(s) {
        s === "observerUpdate" && e.calcSlideSlots();
        const n = t.eventsPrefix ? `${t.eventsPrefix}${s.toLowerCase()}` : s.toLowerCase();
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++)
          l[o - 1] = arguments[o];
        const c = new CustomEvent(n, {
          detail: l,
          bubbles: s !== "hashChange",
          cancelable: !0
        });
        e.dispatchEvent(c);
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
      passedParams: s
    } = ps(this, e, t);
    this.passedParams = s, this.swiperParams = i, !(this.swiper && this.swiper.params[e] === t) && xl({
      swiper: this.swiper,
      passedParams: this.passedParams,
      changedParams: [qt(e)],
      ...e === "navigation" && s[e] ? {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next"
      } : {},
      ...e === "pagination" && s[e] ? {
        paginationEl: ".swiper-pagination"
      } : {},
      ...e === "scrollbar" && s[e] ? {
        scrollbarEl: ".swiper-scrollbar"
      } : {}
    });
  }
  attributeChangedCallback(e, t, i) {
    this.swiper && this.swiper.initialized && (t === "true" && i === null && (i = !1), this.updateSwiperOnPropChange(e, i));
  }
  static get observedAttributes() {
    return si.filter((t) => t.includes("_")).map((t) => t.replace(/[A-Z]/g, (i) => `-${i}`).replace("_", "").toLowerCase());
  }
}
si.forEach((r) => {
  r !== "init" && (r = r.replace("_", ""), Object.defineProperty(mn.prototype, r, {
    configurable: !0,
    get() {
      return (this.passedParams || {})[r];
    },
    set(e) {
      this.passedParams || (this.passedParams = {}), this.passedParams[r] = e, this.swiper && this.swiper.initialized && this.updateSwiperOnPropChange(r, e);
    }
  }));
});
class Ml extends pn {
  constructor() {
    super(), this.attachShadow({
      mode: "open"
    });
  }
  render() {
    const e = this.lazy || this.getAttribute("lazy") === "" || this.getAttribute("lazy") === "true";
    if (hn(this.shadowRoot, Tl), this.shadowRoot.appendChild(document.createElement("slot")), e) {
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
const Pl = () => {
  typeof window > "u" || (window.customElements.get("swiper-container") || window.customElements.define("swiper-container", mn), window.customElements.get("swiper-slide") || window.customElements.define("swiper-slide", Ml));
};
typeof window < "u" && (window.SwiperElementRegisterParams = (r) => {
  si.push(...r);
});
/*!
 * Viewer.js v1.11.7
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-11-24T04:32:19.116Z
 */
function Al(r, e) {
  if (!(r instanceof e)) throw new TypeError("Cannot call a class as a function");
}
function ms(r, e) {
  for (var t = 0; t < e.length; t++) {
    var i = e[t];
    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(r, gn(i.key), i);
  }
}
function zl(r, e, t) {
  return e && ms(r.prototype, e), t && ms(r, t), Object.defineProperty(r, "prototype", {
    writable: !1
  }), r;
}
function Il(r, e, t) {
  return (e = gn(e)) in r ? Object.defineProperty(r, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[e] = t, r;
}
function gs(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(r);
    e && (i = i.filter(function(s) {
      return Object.getOwnPropertyDescriptor(r, s).enumerable;
    })), t.push.apply(t, i);
  }
  return t;
}
function pr(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? gs(Object(t), !0).forEach(function(i) {
      Il(r, i, t[i]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : gs(Object(t)).forEach(function(i) {
      Object.defineProperty(r, i, Object.getOwnPropertyDescriptor(t, i));
    });
  }
  return r;
}
function Ll(r, e) {
  if (typeof r != "object" || !r) return r;
  var t = r[Symbol.toPrimitive];
  if (t !== void 0) {
    var i = t.call(r, e);
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(r);
}
function gn(r) {
  var e = Ll(r, "string");
  return typeof e == "symbol" ? e : e + "";
}
function tr(r) {
  "@babel/helpers - typeof";
  return tr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, tr(r);
}
var ws = {
  /**
   * Enable a modal backdrop, specify `static` for a backdrop
   * which doesn't close the modal on click.
   * @type {boolean}
   */
  backdrop: !0,
  /**
   * Show the button on the top-right of the viewer.
   * @type {boolean}
   */
  button: !0,
  /**
   * Show the navbar.
   * @type {boolean | number}
   */
  navbar: !0,
  /**
   * Specify the visibility and the content of the title.
   * @type {boolean | number | Function | Array}
   */
  title: !0,
  /**
   * Show the toolbar.
   * @type {boolean | number | Object}
   */
  toolbar: !0,
  /**
   * Custom class name(s) to add to the viewer's root element.
   * @type {string}
   */
  className: "",
  /**
   * Define where to put the viewer in modal mode.
   * @type {string | Element}
   */
  container: "body",
  /**
   * Filter the images for viewing. Return true if the image is viewable.
   * @type {Function}
   */
  filter: null,
  /**
   * Enable to request fullscreen when play.
   * {@link https://developer.mozilla.org/en-US/docs/Web/API/FullscreenOptions}
   * @type {boolean|FullscreenOptions}
   */
  fullscreen: !0,
  /**
   * Define the extra attributes to inherit from the original image.
   * @type {Array}
   */
  inheritedAttributes: ["crossOrigin", "decoding", "isMap", "loading", "referrerPolicy", "sizes", "srcset", "useMap"],
  /**
   * Define the initial coverage of the viewing image.
   * @type {number}
   */
  initialCoverage: 0.9,
  /**
   * Define the initial index of the image for viewing.
   * @type {number}
   */
  initialViewIndex: 0,
  /**
   * Enable inline mode.
   * @type {boolean}
   */
  inline: !1,
  /**
   * The amount of time to delay between automatically cycling an image when playing.
   * @type {number}
   */
  interval: 5e3,
  /**
   * Enable keyboard support.
   * @type {boolean}
   */
  keyboard: !0,
  /**
   * Focus the viewer when initialized.
   * @type {boolean}
   */
  focus: !0,
  /**
   * Indicate if show a loading spinner when load image or not.
   * @type {boolean}
   */
  loading: !0,
  /**
   * Indicate if enable loop viewing or not.
   * @type {boolean}
   */
  loop: !0,
  /**
   * Min width of the viewer in inline mode.
   * @type {number}
   */
  minWidth: 200,
  /**
   * Min height of the viewer in inline mode.
   * @type {number}
   */
  minHeight: 100,
  /**
   * Enable to move the image.
   * @type {boolean}
   */
  movable: !0,
  /**
   * Enable to rotate the image.
   * @type {boolean}
   */
  rotatable: !0,
  /**
   * Enable to scale the image.
   * @type {boolean}
   */
  scalable: !0,
  /**
   * Enable to zoom the image.
   * @type {boolean}
   */
  zoomable: !0,
  /**
   * Enable to zoom the current image by dragging on the touch screen.
   * @type {boolean}
   */
  zoomOnTouch: !0,
  /**
   * Enable to zoom the image by wheeling mouse.
   * @type {boolean}
   */
  zoomOnWheel: !0,
  /**
   * Enable to slide to the next or previous image by swiping on the touch screen.
   * @type {boolean}
   */
  slideOnTouch: !0,
  /**
   * Indicate if toggle the image size between its natural size
   * and initial size when double click on the image or not.
   * @type {boolean}
   */
  toggleOnDblclick: !0,
  /**
   * Show the tooltip with image ratio (percentage) when zoom in or zoom out.
   * @type {boolean}
   */
  tooltip: !0,
  /**
   * Enable CSS3 Transition for some special elements.
   * @type {boolean}
   */
  transition: !0,
  /**
   * Define the CSS `z-index` value of viewer in modal mode.
   * @type {number}
   */
  zIndex: 2015,
  /**
   * Define the CSS `z-index` value of viewer in inline mode.
   * @type {number}
   */
  zIndexInline: 0,
  /**
   * Define the ratio when zoom the image by wheeling mouse.
   * @type {number}
   */
  zoomRatio: 0.1,
  /**
   * Define the min ratio of the image when zoom out.
   * @type {number}
   */
  minZoomRatio: 0.01,
  /**
   * Define the max ratio of the image when zoom in.
   * @type {number}
   */
  maxZoomRatio: 100,
  /**
   * Define where to get the original image URL for viewing.
   * @type {string | Function}
   */
  url: "src",
  /**
   * Event shortcuts.
   * @type {Function}
   */
  ready: null,
  show: null,
  shown: null,
  hide: null,
  hidden: null,
  view: null,
  viewed: null,
  move: null,
  moved: null,
  rotate: null,
  rotated: null,
  scale: null,
  scaled: null,
  zoom: null,
  zoomed: null,
  play: null,
  stop: null
}, kl = '<div class="viewer-container" tabindex="-1" touch-action="none"><div class="viewer-canvas"></div><div class="viewer-footer"><div class="viewer-title"></div><div class="viewer-toolbar"></div><div class="viewer-navbar"><ul class="viewer-list" role="navigation"></ul></div></div><div class="viewer-tooltip" role="alert" aria-hidden="true"></div><div class="viewer-button" data-viewer-action="mix" role="button"></div><div class="viewer-player"></div></div>', ni = typeof window < "u" && typeof window.document < "u", xe = ni ? window : {}, Qe = ni && xe.document.documentElement ? "ontouchstart" in xe.document.documentElement : !1, hr = ni ? "PointerEvent" in xe : !1, q = "viewer", Yt = "move", wn = "switch", wt = "zoom", Rt = "".concat(q, "-active"), $l = "".concat(q, "-close"), jt = "".concat(q, "-fade"), ir = "".concat(q, "-fixed"), _l = "".concat(q, "-fullscreen"), vs = "".concat(q, "-fullscreen-exit"), _e = "".concat(q, "-hide"), Dl = "".concat(q, "-hide-md-down"), Ol = "".concat(q, "-hide-sm-down"), Rl = "".concat(q, "-hide-xs-down"), fe = "".concat(q, "-in"), xt = "".concat(q, "-invisible"), et = "".concat(q, "-loading"), Nl = "".concat(q, "-move"), bs = "".concat(q, "-open"), Ge = "".concat(q, "-show"), Q = "".concat(q, "-transition"), nt = "click", rr = "dblclick", ys = "dragstart", Es = "focusin", xs = "keydown", he = "load", Re = "error", Bl = Qe ? "touchend touchcancel" : "mouseup", Hl = Qe ? "touchmove" : "mousemove", Vl = Qe ? "touchstart" : "mousedown", Ss = hr ? "pointerdown" : Vl, Ts = hr ? "pointermove" : Hl, Cs = hr ? "pointerup pointercancel" : Bl, Ms = "resize", ge = "transitionend", Ps = "wheel", As = "ready", zs = "show", Is = "shown", Ls = "hide", ks = "hidden", $s = "view", Pt = "viewed", _s = "move", Ds = "moved", Os = "rotate", Rs = "rotated", Ns = "scale", Bs = "scaled", Hs = "zoom", Vs = "zoomed", Fs = "play", qs = "stop", Qt = "".concat(q, "Action"), mr = /\s\s*/, Nt = ["zoom-in", "zoom-out", "one-to-one", "reset", "prev", "play", "next", "rotate-left", "rotate-right", "flip-horizontal", "flip-vertical"];
function At(r) {
  return typeof r == "string";
}
var Fl = Number.isNaN || xe.isNaN;
function J(r) {
  return typeof r == "number" && !Fl(r);
}
function Ke(r) {
  return typeof r > "u";
}
function at(r) {
  return tr(r) === "object" && r !== null;
}
var ql = Object.prototype.hasOwnProperty;
function Ze(r) {
  if (!at(r))
    return !1;
  try {
    var e = r.constructor, t = e.prototype;
    return e && t && ql.call(t, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function G(r) {
  return typeof r == "function";
}
function U(r, e) {
  if (r && G(e))
    if (Array.isArray(r) || J(r.length)) {
      var t = r.length, i;
      for (i = 0; i < t && e.call(r, r[i], i, r) !== !1; i += 1)
        ;
    } else at(r) && Object.keys(r).forEach(function(s) {
      e.call(r, r[s], s, r);
    });
  return r;
}
var ce = Object.assign || function(e) {
  for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
    i[s - 1] = arguments[s];
  return at(e) && i.length > 0 && i.forEach(function(n) {
    at(n) && Object.keys(n).forEach(function(a) {
      e[a] = n[a];
    });
  }), e;
}, Yl = /^(?:width|height|left|top|marginLeft|marginTop)$/;
function we(r, e) {
  var t = r.style;
  U(e, function(i, s) {
    Yl.test(s) && J(i) && (i += "px"), t[s] = i;
  });
}
function jl(r) {
  return At(r) ? r.replace(/&(?!amp;|quot;|#39;|lt;|gt;)/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;") : r;
}
function Ue(r, e) {
  return !r || !e ? !1 : r.classList ? r.classList.contains(e) : r.className.indexOf(e) > -1;
}
function B(r, e) {
  if (!(!r || !e)) {
    if (J(r.length)) {
      U(r, function(i) {
        B(i, e);
      });
      return;
    }
    if (r.classList) {
      r.classList.add(e);
      return;
    }
    var t = r.className.trim();
    t ? t.indexOf(e) < 0 && (r.className = "".concat(t, " ").concat(e)) : r.className = e;
  }
}
function j(r, e) {
  if (!(!r || !e)) {
    if (J(r.length)) {
      U(r, function(t) {
        j(t, e);
      });
      return;
    }
    if (r.classList) {
      r.classList.remove(e);
      return;
    }
    r.className.indexOf(e) >= 0 && (r.className = r.className.replace(e, ""));
  }
}
function zt(r, e, t) {
  if (e) {
    if (J(r.length)) {
      U(r, function(i) {
        zt(i, e, t);
      });
      return;
    }
    t ? B(r, e) : j(r, e);
  }
}
var Xl = /([a-z\d])([A-Z])/g;
function gr(r) {
  return r.replace(Xl, "$1-$2").toLowerCase();
}
function Je(r, e) {
  return at(r[e]) ? r[e] : r.dataset ? r.dataset[e] : r.getAttribute("data-".concat(gr(e)));
}
function sr(r, e, t) {
  at(t) ? r[e] = t : r.dataset ? r.dataset[e] = t : r.setAttribute("data-".concat(gr(e)), t);
}
var vn = function() {
  var r = !1;
  if (ni) {
    var e = !1, t = function() {
    }, i = Object.defineProperty({}, "once", {
      get: function() {
        return r = !0, e;
      },
      /**
       * This setter can fix a `TypeError` in strict mode
       * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/Getter_only}
       * @param {boolean} value - The value to set
       */
      set: function(n) {
        e = n;
      }
    });
    xe.addEventListener("test", t, i), xe.removeEventListener("test", t, i);
  }
  return r;
}();
function W(r, e, t) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, s = t;
  e.trim().split(mr).forEach(function(n) {
    if (!vn) {
      var a = r.listeners;
      a && a[n] && a[n][t] && (s = a[n][t], delete a[n][t], Object.keys(a[n]).length === 0 && delete a[n], Object.keys(a).length === 0 && delete r.listeners);
    }
    r.removeEventListener(n, s, i);
  });
}
function F(r, e, t) {
  var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, s = t;
  e.trim().split(mr).forEach(function(n) {
    if (i.once && !vn) {
      var a = r.listeners, l = a === void 0 ? {} : a;
      s = function() {
        delete l[n][t], r.removeEventListener(n, s, i);
        for (var c = arguments.length, d = new Array(c), p = 0; p < c; p++)
          d[p] = arguments[p];
        t.apply(r, d);
      }, l[n] || (l[n] = {}), l[n][t] && r.removeEventListener(n, l[n][t], i), l[n][t] = s, r.listeners = l;
    }
    r.addEventListener(n, s, i);
  });
}
function te(r, e, t, i) {
  var s;
  return G(Event) && G(CustomEvent) ? s = new CustomEvent(e, pr({
    bubbles: !0,
    cancelable: !0,
    detail: t
  }, i)) : (s = document.createEvent("CustomEvent"), s.initCustomEvent(e, !0, !0, t)), r.dispatchEvent(s);
}
function Gl(r) {
  var e = r.getBoundingClientRect();
  return {
    left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: e.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
function Xt(r) {
  var e = r.rotate, t = r.scaleX, i = r.scaleY, s = r.translateX, n = r.translateY, a = [];
  J(s) && s !== 0 && a.push("translateX(".concat(s, "px)")), J(n) && n !== 0 && a.push("translateY(".concat(n, "px)")), J(e) && e !== 0 && a.push("rotate(".concat(e, "deg)")), J(t) && t !== 1 && a.push("scaleX(".concat(t, ")")), J(i) && i !== 1 && a.push("scaleY(".concat(i, ")"));
  var l = a.length ? a.join(" ") : "none";
  return {
    WebkitTransform: l,
    msTransform: l,
    transform: l
  };
}
function Wl(r) {
  return At(r) ? decodeURIComponent(r.replace(/^.*\//, "").replace(/[?&#].*$/, "")) : "";
}
var Gi = xe.navigator && /Version\/\d+(\.\d+)+?\s+Safari/i.test(xe.navigator.userAgent);
function bn(r, e, t) {
  var i = document.createElement("img");
  if (r.naturalWidth && !Gi)
    return t(r.naturalWidth, r.naturalHeight), i;
  var s = document.body || document.documentElement;
  return i.onload = function() {
    t(i.width, i.height), Gi || s.removeChild(i);
  }, U(e.inheritedAttributes, function(n) {
    var a = r.getAttribute(n);
    a !== null && i.setAttribute(n, a);
  }), i.src = r.src, Gi || (i.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", s.appendChild(i)), i;
}
function Bt(r) {
  switch (r) {
    case 2:
      return Rl;
    case 3:
      return Ol;
    case 4:
      return Dl;
    default:
      return "";
  }
}
function Ul(r) {
  var e = pr({}, r), t = [];
  return U(r, function(i, s) {
    delete e[s], U(e, function(n) {
      var a = Math.abs(i.startX - n.startX), l = Math.abs(i.startY - n.startY), o = Math.abs(i.endX - n.endX), c = Math.abs(i.endY - n.endY), d = Math.sqrt(a * a + l * l), p = Math.sqrt(o * o + c * c), g = (p - d) / d;
      t.push(g);
    });
  }), t.sort(function(i, s) {
    return Math.abs(i) < Math.abs(s);
  }), t[0];
}
function Ht(r, e) {
  var t = r.pageX, i = r.pageY, s = {
    endX: t,
    endY: i
  };
  return e ? s : pr({
    timeStamp: Date.now(),
    startX: t,
    startY: i
  }, s);
}
function Kl(r) {
  var e = 0, t = 0, i = 0;
  return U(r, function(s) {
    var n = s.startX, a = s.startY;
    e += n, t += a, i += 1;
  }), e /= i, t /= i, {
    pageX: e,
    pageY: t
  };
}
var Zl = {
  render: function() {
    this.initContainer(), this.initViewer(), this.initList(), this.renderViewer();
  },
  initBody: function() {
    var e = this.element.ownerDocument, t = e.body || e.documentElement;
    this.body = t, this.scrollbarWidth = window.innerWidth - e.documentElement.clientWidth, this.initialBodyPaddingRight = t.style.paddingRight, this.initialBodyComputedPaddingRight = window.getComputedStyle(t).paddingRight;
  },
  initContainer: function() {
    this.containerData = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  },
  initViewer: function() {
    var e = this.options, t = this.parent, i;
    e.inline && (i = {
      width: Math.max(t.offsetWidth, e.minWidth),
      height: Math.max(t.offsetHeight, e.minHeight)
    }, this.parentData = i), (this.fulled || !i) && (i = this.containerData), this.viewerData = ce({}, i);
  },
  renderViewer: function() {
    this.options.inline && !this.fulled && we(this.viewer, this.viewerData);
  },
  initList: function() {
    var e = this, t = this.element, i = this.options, s = this.list, n = [];
    s.innerHTML = "", U(this.images, function(a, l) {
      var o = a.src, c = a.alt || Wl(o), d = e.getImageURL(a);
      if (o || d) {
        var p = document.createElement("li"), g = document.createElement("img");
        U(i.inheritedAttributes, function(h) {
          var u = a.getAttribute(h);
          u !== null && g.setAttribute(h, u);
        }), i.navbar && (g.src = o || d), g.alt = c, g.setAttribute("data-original-url", d || o), p.setAttribute("data-index", l), p.setAttribute("data-viewer-action", "view"), p.setAttribute("role", "button"), i.keyboard && p.setAttribute("tabindex", 0), p.appendChild(g), s.appendChild(p), n.push(p);
      }
    }), this.items = n, U(n, function(a) {
      var l = a.firstElementChild, o, c;
      sr(l, "filled", !0), i.loading && B(a, et), F(l, he, o = function(p) {
        W(l, Re, c), i.loading && j(a, et), e.loadImage(p);
      }, {
        once: !0
      }), F(l, Re, c = function() {
        W(l, he, o), i.loading && j(a, et);
      }, {
        once: !0
      });
    }), i.transition && F(t, Pt, function() {
      B(s, Q);
    }, {
      once: !0
    });
  },
  renderList: function() {
    var e = this.index, t = this.items[e];
    if (t) {
      var i = t.nextElementSibling, s = parseInt(window.getComputedStyle(i || t).marginLeft, 10), n = t.offsetWidth, a = n + s;
      we(this.list, ce({
        width: a * this.length - s
      }, Xt({
        translateX: (this.viewerData.width - n) / 2 - a * e
      })));
    }
  },
  resetList: function() {
    var e = this.list;
    e.innerHTML = "", j(e, Q), we(e, Xt({
      translateX: 0
    }));
  },
  initImage: function(e) {
    var t = this, i = this.options, s = this.image, n = this.viewerData, a = this.footer.offsetHeight, l = n.width, o = Math.max(n.height - a, a), c = this.imageData || {}, d;
    this.imageInitializing = {
      abort: function() {
        d.onload = null;
      }
    }, d = bn(s, i, function(p, g) {
      var h = p / g, u = Math.max(0, Math.min(1, i.initialCoverage)), f = l, b = o;
      t.imageInitializing = !1, o * h > l ? b = l / h : f = o * h, u = J(u) ? u : 0.9, f = Math.min(f * u, p), b = Math.min(b * u, g);
      var v = (l - f) / 2, w = (o - b) / 2, m = {
        left: v,
        top: w,
        x: v,
        y: w,
        width: f,
        height: b,
        oldRatio: 1,
        ratio: f / p,
        aspectRatio: h,
        naturalWidth: p,
        naturalHeight: g
      }, y = ce({}, m);
      i.rotatable && (m.rotate = c.rotate || 0, y.rotate = 0), i.scalable && (m.scaleX = c.scaleX || 1, m.scaleY = c.scaleY || 1, y.scaleX = 1, y.scaleY = 1), t.imageData = m, t.initialImageData = y, e && e();
    });
  },
  renderImage: function(e) {
    var t = this, i = this.image, s = this.imageData;
    if (we(i, ce({
      width: s.width,
      height: s.height,
      // XXX: Not to use translateX/Y to avoid image shaking when zooming
      marginLeft: s.x,
      marginTop: s.y
    }, Xt(s))), e)
      if ((this.viewing || this.moving || this.rotating || this.scaling || this.zooming) && this.options.transition && Ue(i, Q)) {
        var n = function() {
          t.imageRendering = !1, e();
        };
        this.imageRendering = {
          abort: function() {
            W(i, ge, n);
          }
        }, F(i, ge, n, {
          once: !0
        });
      } else
        e();
  },
  resetImage: function() {
    var e = this.image;
    e && (this.viewing && this.viewing.abort(), e.parentNode.removeChild(e), this.image = null, this.title.innerHTML = "");
  }
}, Jl = {
  bind: function() {
    var e = this.options, t = this.viewer, i = this.canvas, s = this.element.ownerDocument;
    F(t, nt, this.onClick = this.click.bind(this)), F(t, ys, this.onDragStart = this.dragstart.bind(this)), F(i, Ss, this.onPointerDown = this.pointerdown.bind(this)), F(s, Ts, this.onPointerMove = this.pointermove.bind(this)), F(s, Cs, this.onPointerUp = this.pointerup.bind(this)), F(s, xs, this.onKeyDown = this.keydown.bind(this)), F(window, Ms, this.onResize = this.resize.bind(this)), e.zoomable && e.zoomOnWheel && F(t, Ps, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), e.toggleOnDblclick && F(i, rr, this.onDblclick = this.dblclick.bind(this));
  },
  unbind: function() {
    var e = this.options, t = this.viewer, i = this.canvas, s = this.element.ownerDocument;
    W(t, nt, this.onClick), W(t, ys, this.onDragStart), W(i, Ss, this.onPointerDown), W(s, Ts, this.onPointerMove), W(s, Cs, this.onPointerUp), W(s, xs, this.onKeyDown), W(window, Ms, this.onResize), e.zoomable && e.zoomOnWheel && W(t, Ps, this.onWheel, {
      passive: !1,
      capture: !0
    }), e.toggleOnDblclick && W(i, rr, this.onDblclick);
  }
}, Ql = {
  click: function(e) {
    var t = this.options, i = this.imageData, s = e.target, n = Je(s, Qt);
    switch (!n && s.localName === "img" && s.parentElement.localName === "li" && (s = s.parentElement, n = Je(s, Qt)), Qe && e.isTrusted && s === this.canvas && clearTimeout(this.clickCanvasTimeout), n) {
      case "mix":
        this.played ? this.stop() : t.inline ? this.fulled ? this.exit() : this.full() : this.hide();
        break;
      case "hide":
        this.pointerMoved || this.hide();
        break;
      case "view":
        this.view(Je(s, "index"));
        break;
      case "zoom-in":
        this.zoom(0.1, !0);
        break;
      case "zoom-out":
        this.zoom(-0.1, !0);
        break;
      case "one-to-one":
        this.toggle();
        break;
      case "reset":
        this.reset();
        break;
      case "prev":
        this.prev(t.loop);
        break;
      case "play":
        this.play(t.fullscreen);
        break;
      case "next":
        this.next(t.loop);
        break;
      case "rotate-left":
        this.rotate(-90);
        break;
      case "rotate-right":
        this.rotate(90);
        break;
      case "flip-horizontal":
        this.scaleX(-i.scaleX || -1);
        break;
      case "flip-vertical":
        this.scaleY(-i.scaleY || -1);
        break;
      default:
        this.played && this.stop();
    }
  },
  dblclick: function(e) {
    e.preventDefault(), this.viewed && e.target === this.image && (Qe && e.isTrusted && clearTimeout(this.doubleClickImageTimeout), this.toggle(e.isTrusted ? e : e.detail && e.detail.originalEvent));
  },
  load: function() {
    var e = this;
    this.timeout && (clearTimeout(this.timeout), this.timeout = !1);
    var t = this.element, i = this.options, s = this.image, n = this.index, a = this.viewerData;
    j(s, xt), i.loading && j(this.canvas, et), s.style.cssText = "height:0;" + "margin-left:".concat(a.width / 2, "px;") + "margin-top:".concat(a.height / 2, "px;") + "max-width:none!important;position:relative;width:0;", this.initImage(function() {
      zt(s, Nl, i.movable), zt(s, Q, i.transition), e.renderImage(function() {
        e.viewed = !0, e.viewing = !1, G(i.viewed) && F(t, Pt, i.viewed, {
          once: !0
        }), te(t, Pt, {
          originalImage: e.images[n],
          index: n,
          image: s
        }, {
          cancelable: !1
        });
      });
    });
  },
  loadImage: function(e) {
    var t = e.target, i = t.parentNode, s = i.offsetWidth || 30, n = i.offsetHeight || 50, a = !!Je(t, "filled");
    bn(t, this.options, function(l, o) {
      var c = l / o, d = s, p = n;
      n * c > s ? a ? d = n * c : p = s / c : a ? p = s / c : d = n * c, we(t, ce({
        width: d,
        height: p
      }, Xt({
        translateX: (s - d) / 2,
        translateY: (n - p) / 2
      })));
    });
  },
  keydown: function(e) {
    var t = this.options;
    if (t.keyboard) {
      var i = e.keyCode || e.which || e.charCode;
      switch (i) {
        // Enter
        case 13:
          this.viewer.contains(e.target) && this.click(e);
          break;
      }
      if (this.fulled)
        switch (i) {
          // Escape
          case 27:
            this.played ? this.stop() : t.inline ? this.fulled && this.exit() : this.hide();
            break;
          // Space
          case 32:
            this.played && this.stop();
            break;
          // ArrowLeft
          case 37:
            this.played && this.playing ? this.playing.prev() : this.prev(t.loop);
            break;
          // ArrowUp
          case 38:
            e.preventDefault(), this.zoom(t.zoomRatio, !0);
            break;
          // ArrowRight
          case 39:
            this.played && this.playing ? this.playing.next() : this.next(t.loop);
            break;
          // ArrowDown
          case 40:
            e.preventDefault(), this.zoom(-t.zoomRatio, !0);
            break;
          // Ctrl + 0
          case 48:
          // Fall through
          // Ctrl + 1
          // eslint-disable-next-line no-fallthrough
          case 49:
            e.ctrlKey && (e.preventDefault(), this.toggle());
            break;
        }
    }
  },
  dragstart: function(e) {
    e.target.localName === "img" && e.preventDefault();
  },
  pointerdown: function(e) {
    var t = this.options, i = this.pointers, s = e.buttons, n = e.button;
    if (this.pointerMoved = !1, !(!this.viewed || this.showing || this.viewing || this.hiding || (e.type === "mousedown" || e.type === "pointerdown" && e.pointerType === "mouse") && // No primary button (Usually the left button)
    (J(s) && s !== 1 || J(n) && n !== 0 || e.ctrlKey))) {
      e.preventDefault(), e.changedTouches ? U(e.changedTouches, function(l) {
        i[l.identifier] = Ht(l);
      }) : i[e.pointerId || 0] = Ht(e);
      var a = t.movable ? Yt : !1;
      t.zoomOnTouch && t.zoomable && Object.keys(i).length > 1 ? a = wt : t.slideOnTouch && (e.pointerType === "touch" || e.type === "touchstart") && this.isSwitchable() && (a = wn), t.transition && (a === Yt || a === wt) && j(this.image, Q), this.action = a;
    }
  },
  pointermove: function(e) {
    var t = this.pointers, i = this.action;
    !this.viewed || !i || (e.preventDefault(), e.changedTouches ? U(e.changedTouches, function(s) {
      ce(t[s.identifier] || {}, Ht(s, !0));
    }) : ce(t[e.pointerId || 0] || {}, Ht(e, !0)), this.change(e));
  },
  pointerup: function(e) {
    var t = this, i = this.options, s = this.action, n = this.pointers, a;
    e.changedTouches ? U(e.changedTouches, function(l) {
      a = n[l.identifier], delete n[l.identifier];
    }) : (a = n[e.pointerId || 0], delete n[e.pointerId || 0]), s && (e.preventDefault(), i.transition && (s === Yt || s === wt) && B(this.image, Q), this.action = !1, Qe && s !== wt && a && Date.now() - a.timeStamp < 500 && (clearTimeout(this.clickCanvasTimeout), clearTimeout(this.doubleClickImageTimeout), i.toggleOnDblclick && this.viewed && e.target === this.image ? this.imageClicked ? (this.imageClicked = !1, this.doubleClickImageTimeout = setTimeout(function() {
      te(t.image, rr, {
        originalEvent: e
      });
    }, 50)) : (this.imageClicked = !0, this.doubleClickImageTimeout = setTimeout(function() {
      t.imageClicked = !1;
    }, 500)) : (this.imageClicked = !1, i.backdrop && i.backdrop !== "static" && e.target === this.canvas && (this.clickCanvasTimeout = setTimeout(function() {
      te(t.canvas, nt, {
        originalEvent: e
      });
    }, 50)))));
  },
  resize: function() {
    var e = this;
    if (!(!this.isShown || this.hiding) && (this.fulled && (this.close(), this.initBody(), this.open()), this.initContainer(), this.initViewer(), this.renderViewer(), this.renderList(), this.viewed && this.initImage(function() {
      e.renderImage();
    }), this.played)) {
      if (this.options.fullscreen && this.fulled && !(document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement)) {
        this.stop();
        return;
      }
      U(this.player.getElementsByTagName("img"), function(t) {
        F(t, he, e.loadImage.bind(e), {
          once: !0
        }), te(t, he);
      });
    }
  },
  wheel: function(e) {
    var t = this;
    if (this.viewed && (e.preventDefault(), !this.wheeling)) {
      this.wheeling = !0, setTimeout(function() {
        t.wheeling = !1;
      }, 50);
      var i = Number(this.options.zoomRatio) || 0.1, s = 1;
      e.deltaY ? s = e.deltaY > 0 ? 1 : -1 : e.wheelDelta ? s = -e.wheelDelta / 120 : e.detail && (s = e.detail > 0 ? 1 : -1), this.zoom(-s * i, !0, null, e);
    }
  }
}, ed = {
  /** Show the viewer (only available in modal mode)
   * @param {boolean} [immediate=false] - Indicates if show the viewer immediately or not.
   * @returns {Viewer} this
   */
  show: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, t = this.element, i = this.options;
    if (i.inline || this.showing || this.isShown || this.showing)
      return this;
    if (!this.ready)
      return this.build(), this.ready && this.show(e), this;
    if (G(i.show) && F(t, zs, i.show, {
      once: !0
    }), te(t, zs) === !1 || !this.ready)
      return this;
    this.hiding && this.transitioning.abort(), this.showing = !0, this.open();
    var s = this.viewer;
    if (j(s, _e), s.setAttribute("role", "dialog"), s.setAttribute("aria-labelledby", this.title.id), s.setAttribute("aria-modal", !0), s.removeAttribute("aria-hidden"), i.transition && !e) {
      var n = this.shown.bind(this);
      this.transitioning = {
        abort: function() {
          W(s, ge, n), j(s, fe);
        }
      }, B(s, Q), s.initialOffsetWidth = s.offsetWidth, F(s, ge, n, {
        once: !0
      }), B(s, fe);
    } else
      B(s, fe), this.shown();
    return this;
  },
  /**
   * Hide the viewer (only available in modal mode)
   * @param {boolean} [immediate=false] - Indicates if hide the viewer immediately or not.
   * @returns {Viewer} this
   */
  hide: function() {
    var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, i = this.element, s = this.options;
    if (s.inline || this.hiding || !(this.isShown || this.showing))
      return this;
    if (G(s.hide) && F(i, Ls, s.hide, {
      once: !0
    }), te(i, Ls) === !1)
      return this;
    this.showing && this.transitioning.abort(), this.hiding = !0, this.played ? this.stop() : this.viewing && this.viewing.abort();
    var n = this.viewer, a = this.image, l = function() {
      j(n, fe), e.hidden();
    };
    if (s.transition && !t) {
      var o = function(p) {
        p && p.target === n && (W(n, ge, o), e.hidden());
      }, c = function() {
        Ue(n, Q) ? (F(n, ge, o), j(n, fe)) : l();
      };
      this.transitioning = {
        abort: function() {
          e.viewed && Ue(a, Q) ? W(a, ge, c) : Ue(n, Q) && W(n, ge, o);
        }
      }, this.viewed && Ue(a, Q) ? (F(a, ge, c, {
        once: !0
      }), this.zoomTo(0, !1, null, null, !0)) : c();
    } else
      l();
    return this;
  },
  /**
   * View one of the images with image's index
   * @param {number} index - The index of the image to view.
   * @returns {Viewer} this
   */
  view: function() {
    var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : this.options.initialViewIndex;
    if (t = Number(t) || 0, this.hiding || this.played || t < 0 || t >= this.length || this.viewed && t === this.index)
      return this;
    if (!this.isShown)
      return this.index = t, this.show();
    this.viewing && this.viewing.abort();
    var i = this.element, s = this.options, n = this.title, a = this.canvas, l = this.items[t], o = l.querySelector("img"), c = Je(o, "originalUrl"), d = o.getAttribute("alt"), p = document.createElement("img");
    if (U(s.inheritedAttributes, function(b) {
      var v = o.getAttribute(b);
      v !== null && p.setAttribute(b, v);
    }), p.src = c, p.alt = d, G(s.view) && F(i, $s, s.view, {
      once: !0
    }), te(i, $s, {
      originalImage: this.images[t],
      index: t,
      image: p
    }) === !1 || !this.isShown || this.hiding || this.played)
      return this;
    var g = this.items[this.index];
    g && (j(g, Rt), g.removeAttribute("aria-selected")), B(l, Rt), l.setAttribute("aria-selected", !0), s.focus && l.focus(), this.image = p, this.viewed = !1, this.index = t, this.imageData = {}, B(p, xt), s.loading && B(a, et), a.innerHTML = "", a.appendChild(p), this.renderList(), n.innerHTML = "";
    var h = function() {
      var v = e.imageData, w = Array.isArray(s.title) ? s.title[1] : s.title;
      n.innerHTML = jl(G(w) ? w.call(e, p, v) : "".concat(d, " (").concat(v.naturalWidth, " × ").concat(v.naturalHeight, ")"));
    }, u, f;
    return F(i, Pt, h, {
      once: !0
    }), this.viewing = {
      abort: function() {
        W(i, Pt, h), p.complete ? e.imageRendering ? e.imageRendering.abort() : e.imageInitializing && e.imageInitializing.abort() : (p.src = "", W(p, he, u), e.timeout && clearTimeout(e.timeout));
      }
    }, p.complete ? this.load() : (F(p, he, u = function() {
      W(p, Re, f), e.load();
    }, {
      once: !0
    }), F(p, Re, f = function() {
      W(p, he, u), e.timeout && (clearTimeout(e.timeout), e.timeout = !1), j(p, xt), s.loading && j(e.canvas, et);
    }, {
      once: !0
    }), this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(function() {
      j(p, xt), e.timeout = !1;
    }, 1e3)), this;
  },
  /**
   * View the previous image
   * @param {boolean} [loop=false] - Indicate if view the last one
   * when it is the first one at present.
   * @returns {Viewer} this
   */
  prev: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, t = this.index - 1;
    return t < 0 && (t = e ? this.length - 1 : 0), this.view(t), this;
  },
  /**
   * View the next image
   * @param {boolean} [loop=false] - Indicate if view the first one
   * when it is the last one at present.
   * @returns {Viewer} this
   */
  next: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, t = this.length - 1, i = this.index + 1;
    return i > t && (i = e ? 0 : t), this.view(i), this;
  },
  /**
   * Move the image with relative offsets.
   * @param {number} x - The moving distance in the horizontal direction.
   * @param {number} [y=x] The moving distance in the vertical direction.
   * @returns {Viewer} this
   */
  move: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, i = this.imageData;
    return this.moveTo(Ke(e) ? e : i.x + Number(e), Ke(t) ? t : i.y + Number(t)), this;
  },
  /**
   * Move the image to an absolute point.
   * @param {number} x - The new position in the horizontal direction.
   * @param {number} [y=x] - The new position in the vertical direction.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  moveTo: function(e) {
    var t = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n = this.element, a = this.options, l = this.imageData;
    if (e = Number(e), i = Number(i), this.viewed && !this.played && a.movable) {
      var o = l.x, c = l.y, d = !1;
      if (J(e) ? d = !0 : e = o, J(i) ? d = !0 : i = c, d) {
        if (G(a.move) && F(n, _s, a.move, {
          once: !0
        }), te(n, _s, {
          x: e,
          y: i,
          oldX: o,
          oldY: c,
          originalEvent: s
        }) === !1)
          return this;
        l.x = e, l.y = i, l.left = e, l.top = i, this.moving = !0, this.renderImage(function() {
          t.moving = !1, G(a.moved) && F(n, Ds, a.moved, {
            once: !0
          }), te(n, Ds, {
            x: e,
            y: i,
            oldX: o,
            oldY: c,
            originalEvent: s
          }, {
            cancelable: !1
          });
        });
      }
    }
    return this;
  },
  /**
   * Rotate the image with a relative degree.
   * @param {number} degree - The rotate degree.
   * @returns {Viewer} this
   */
  rotate: function(e) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(e)), this;
  },
  /**
   * Rotate the image to an absolute degree.
   * @param {number} degree - The rotate degree.
   * @returns {Viewer} this
   */
  rotateTo: function(e) {
    var t = this, i = this.element, s = this.options, n = this.imageData;
    if (e = Number(e), J(e) && this.viewed && !this.played && s.rotatable) {
      var a = n.rotate;
      if (G(s.rotate) && F(i, Os, s.rotate, {
        once: !0
      }), te(i, Os, {
        degree: e,
        oldDegree: a
      }) === !1)
        return this;
      n.rotate = e, this.rotating = !0, this.renderImage(function() {
        t.rotating = !1, G(s.rotated) && F(i, Rs, s.rotated, {
          once: !0
        }), te(i, Rs, {
          degree: e,
          oldDegree: a
        }, {
          cancelable: !1
        });
      });
    }
    return this;
  },
  /**
   * Scale the image on the x-axis.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @returns {Viewer} this
   */
  scaleX: function(e) {
    return this.scale(e, this.imageData.scaleY), this;
  },
  /**
   * Scale the image on the y-axis.
   * @param {number} scaleY - The scale ratio on the y-axis.
   * @returns {Viewer} this
   */
  scaleY: function(e) {
    return this.scale(this.imageData.scaleX, e), this;
  },
  /**
   * Scale the image.
   * @param {number} scaleX - The scale ratio on the x-axis.
   * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
   * @returns {Viewer} this
   */
  scale: function(e) {
    var t = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, s = this.element, n = this.options, a = this.imageData;
    if (e = Number(e), i = Number(i), this.viewed && !this.played && n.scalable) {
      var l = a.scaleX, o = a.scaleY, c = !1;
      if (J(e) ? c = !0 : e = l, J(i) ? c = !0 : i = o, c) {
        if (G(n.scale) && F(s, Ns, n.scale, {
          once: !0
        }), te(s, Ns, {
          scaleX: e,
          scaleY: i,
          oldScaleX: l,
          oldScaleY: o
        }) === !1)
          return this;
        a.scaleX = e, a.scaleY = i, this.scaling = !0, this.renderImage(function() {
          t.scaling = !1, G(n.scaled) && F(s, Bs, n.scaled, {
            once: !0
          }), te(s, Bs, {
            scaleX: e,
            scaleY: i,
            oldScaleX: l,
            oldScaleY: o
          }, {
            cancelable: !1
          });
        });
      }
    }
    return this;
  },
  /**
   * Zoom the image with a relative ratio.
   * @param {number} ratio - The target ratio.
   * @param {boolean} [showTooltip=false] - Indicates whether to show the tooltip.
   * @param {Object} [pivot] - The pivot point coordinate for zooming.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  zoom: function(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, n = this.imageData;
    return e = Number(e), e < 0 ? e = 1 / (1 - e) : e = 1 + e, this.zoomTo(n.width * e / n.naturalWidth, t, i, s), this;
  },
  /**
   * Zoom the image to an absolute ratio.
   * @param {number} ratio - The target ratio.
   * @param {boolean} [showTooltip] - Indicates whether to show the tooltip.
   * @param {Object} [pivot] - The pivot point coordinate for zooming.
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @param {Event} [_zoomable=false] - Indicates if the current zoom is available or not.
   * @returns {Viewer} this
   */
  zoomTo: function(e) {
    var t = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1, l = this.element, o = this.options, c = this.pointers, d = this.imageData, p = d.x, g = d.y, h = d.width, u = d.height, f = d.naturalWidth, b = d.naturalHeight;
    if (e = Math.max(0, e), J(e) && this.viewed && !this.played && (a || o.zoomable)) {
      if (!a) {
        var v = Math.max(0.01, o.minZoomRatio), w = Math.min(100, o.maxZoomRatio);
        e = Math.min(Math.max(e, v), w);
      }
      if (n)
        switch (n.type) {
          case "wheel":
            o.zoomRatio >= 0.055 && e > 0.95 && e < 1.05 && (e = 1);
            break;
          case "pointermove":
          case "touchmove":
          case "mousemove":
            e > 0.99 && e < 1.01 && (e = 1);
            break;
        }
      var m = f * e, y = b * e, z = m - h, P = y - u, A = d.ratio;
      if (G(o.zoom) && F(l, Hs, o.zoom, {
        once: !0
      }), te(l, Hs, {
        ratio: e,
        oldRatio: A,
        originalEvent: n
      }) === !1)
        return this;
      if (this.zooming = !0, n) {
        var T = Gl(this.viewer), E = c && Object.keys(c).length > 0 ? Kl(c) : {
          pageX: n.pageX,
          pageY: n.pageY
        };
        d.x -= z * ((E.pageX - T.left - p) / h), d.y -= P * ((E.pageY - T.top - g) / u);
      } else Ze(s) && J(s.x) && J(s.y) ? (d.x -= z * ((s.x - p) / h), d.y -= P * ((s.y - g) / u)) : (d.x -= z / 2, d.y -= P / 2);
      d.left = d.x, d.top = d.y, d.width = m, d.height = y, d.oldRatio = A, d.ratio = e, this.renderImage(function() {
        t.zooming = !1, G(o.zoomed) && F(l, Vs, o.zoomed, {
          once: !0
        }), te(l, Vs, {
          ratio: e,
          oldRatio: A,
          originalEvent: n
        }, {
          cancelable: !1
        });
      }), i && this.tooltip();
    }
    return this;
  },
  /**
   * Play the images
   * @param {boolean|FullscreenOptions} [fullscreen=false] - Indicate if request fullscreen or not.
   * @returns {Viewer} this
   */
  play: function() {
    var e = this, t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    if (!this.isShown || this.played)
      return this;
    var i = this.element, s = this.options;
    if (G(s.play) && F(i, Fs, s.play, {
      once: !0
    }), te(i, Fs) === !1)
      return this;
    var n = this.player, a = this.loadImage.bind(this), l = [], o = 0, c = 0;
    if (this.played = !0, this.onLoadWhenPlay = a, t && this.requestFullscreen(t), B(n, Ge), U(this.items, function(g, h) {
      var u = g.querySelector("img"), f = document.createElement("img");
      f.src = Je(u, "originalUrl"), f.alt = u.getAttribute("alt"), f.referrerPolicy = u.referrerPolicy, o += 1, B(f, jt), zt(f, Q, s.transition), Ue(g, Rt) && (B(f, fe), c = h), l.push(f), F(f, he, a, {
        once: !0
      }), n.appendChild(f);
    }), J(s.interval) && s.interval > 0) {
      var d = function() {
        clearTimeout(e.playing.timeout), j(l[c], fe), c -= 1, c = c >= 0 ? c : o - 1, B(l[c], fe), e.playing.timeout = setTimeout(d, s.interval);
      }, p = function() {
        clearTimeout(e.playing.timeout), j(l[c], fe), c += 1, c = c < o ? c : 0, B(l[c], fe), e.playing.timeout = setTimeout(p, s.interval);
      };
      o > 1 && (this.playing = {
        prev: d,
        next: p,
        timeout: setTimeout(p, s.interval)
      });
    }
    return this;
  },
  // Stop play
  stop: function() {
    var e = this;
    if (!this.played)
      return this;
    var t = this.element, i = this.options;
    if (G(i.stop) && F(t, qs, i.stop, {
      once: !0
    }), te(t, qs) === !1)
      return this;
    var s = this.player;
    return clearTimeout(this.playing.timeout), this.playing = !1, this.played = !1, U(s.getElementsByTagName("img"), function(n) {
      W(n, he, e.onLoadWhenPlay);
    }), j(s, Ge), s.innerHTML = "", this.exitFullscreen(), this;
  },
  // Enter modal mode (only available in inline mode)
  full: function() {
    var e = this, t = this.options, i = this.viewer, s = this.image, n = this.list;
    return !this.isShown || this.played || this.fulled || !t.inline ? this : (this.fulled = !0, this.open(), B(this.button, vs), t.transition && (j(n, Q), this.viewed && j(s, Q)), B(i, ir), i.setAttribute("role", "dialog"), i.setAttribute("aria-labelledby", this.title.id), i.setAttribute("aria-modal", !0), i.removeAttribute("style"), we(i, {
      zIndex: t.zIndex
    }), t.focus && this.enforceFocus(), this.initContainer(), this.viewerData = ce({}, this.containerData), this.renderList(), this.viewed && this.initImage(function() {
      e.renderImage(function() {
        t.transition && setTimeout(function() {
          B(s, Q), B(n, Q);
        }, 0);
      });
    }), this);
  },
  // Exit modal mode (only available in inline mode)
  exit: function() {
    var e = this, t = this.options, i = this.viewer, s = this.image, n = this.list;
    return !this.isShown || this.played || !this.fulled || !t.inline ? this : (this.fulled = !1, this.close(), j(this.button, vs), t.transition && (j(n, Q), this.viewed && j(s, Q)), t.focus && this.clearEnforceFocus(), i.removeAttribute("role"), i.removeAttribute("aria-labelledby"), i.removeAttribute("aria-modal"), j(i, ir), we(i, {
      zIndex: t.zIndexInline
    }), this.viewerData = ce({}, this.parentData), this.renderViewer(), this.renderList(), this.viewed && this.initImage(function() {
      e.renderImage(function() {
        t.transition && setTimeout(function() {
          B(s, Q), B(n, Q);
        }, 0);
      });
    }), this);
  },
  // Show the current ratio of the image with percentage
  tooltip: function() {
    var e = this, t = this.options, i = this.tooltipBox, s = this.imageData;
    return !this.viewed || this.played || !t.tooltip ? this : (i.textContent = "".concat(Math.round(s.ratio * 100), "%"), this.tooltipping ? clearTimeout(this.tooltipping) : t.transition ? (this.fading && te(i, ge), B(i, Ge), B(i, jt), B(i, Q), i.removeAttribute("aria-hidden"), i.initialOffsetWidth = i.offsetWidth, B(i, fe)) : (B(i, Ge), i.removeAttribute("aria-hidden")), this.tooltipping = setTimeout(function() {
      t.transition ? (F(i, ge, function() {
        j(i, Ge), j(i, jt), j(i, Q), i.setAttribute("aria-hidden", !0), e.fading = !1;
      }, {
        once: !0
      }), j(i, fe), e.fading = !0) : (j(i, Ge), i.setAttribute("aria-hidden", !0)), e.tooltipping = !1;
    }, 1e3), this);
  },
  /**
   * Toggle the image size between its current size and natural size
   * @param {Event} [_originalEvent=null] - The original event if any.
   * @returns {Viewer} this
   */
  toggle: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
    return this.imageData.ratio === 1 ? this.zoomTo(this.imageData.oldRatio, !0, null, e) : this.zoomTo(1, !0, null, e), this;
  },
  // Reset the image to its initial state
  reset: function() {
    return this.viewed && !this.played && (this.imageData = ce({}, this.initialImageData), this.renderImage()), this;
  },
  // Update viewer when images changed
  update: function() {
    var e = this, t = this.element, i = this.options, s = this.isImg;
    if (s && !t.parentNode)
      return this.destroy();
    var n = [];
    if (U(s ? [t] : t.querySelectorAll("img"), function(c) {
      G(i.filter) ? i.filter.call(e, c) && n.push(c) : e.getImageURL(c) && n.push(c);
    }), !n.length)
      return this;
    if (this.images = n, this.length = n.length, this.ready) {
      var a = [];
      if (U(this.items, function(c, d) {
        var p = c.querySelector("img"), g = n[d];
        g && p ? (g.src !== p.src || g.alt !== p.alt) && a.push(d) : a.push(d);
      }), we(this.list, {
        width: "auto"
      }), this.initList(), this.isShown)
        if (this.length) {
          if (this.viewed) {
            var l = a.indexOf(this.index);
            if (l >= 0)
              this.viewed = !1, this.view(Math.max(Math.min(this.index - l, this.length - 1), 0));
            else {
              var o = this.items[this.index];
              B(o, Rt), o.setAttribute("aria-selected", !0);
            }
          }
        } else
          this.image = null, this.viewed = !1, this.index = 0, this.imageData = {}, this.canvas.innerHTML = "", this.title.innerHTML = "";
    } else
      this.build();
    return this;
  },
  // Destroy the viewer
  destroy: function() {
    var e = this.element, t = this.options;
    return e[q] ? (this.destroyed = !0, this.ready ? (this.played && this.stop(), t.inline ? (this.fulled && this.exit(), this.unbind()) : this.isShown ? (this.viewing && (this.imageRendering ? this.imageRendering.abort() : this.imageInitializing && this.imageInitializing.abort()), this.hiding && this.transitioning.abort(), this.hidden()) : this.showing && (this.transitioning.abort(), this.hidden()), this.ready = !1, this.viewer.parentNode.removeChild(this.viewer)) : t.inline && (this.delaying ? this.delaying.abort() : this.initializing && this.initializing.abort()), t.inline || W(e, nt, this.onStart), e[q] = void 0, this) : this;
  }
}, td = {
  getImageURL: function(e) {
    var t = this.options.url;
    return At(t) ? t = e.getAttribute(t) : G(t) ? t = t.call(this, e) : t = "", t;
  },
  enforceFocus: function() {
    var e = this;
    this.clearEnforceFocus(), F(document, Es, this.onFocusin = function(t) {
      var i = e.viewer, s = t.target;
      if (!(s === document || s === i || i.contains(s))) {
        for (; s; ) {
          if (s.getAttribute("tabindex") !== null || s.getAttribute("aria-modal") === "true")
            return;
          s = s.parentElement;
        }
        i.focus();
      }
    });
  },
  clearEnforceFocus: function() {
    this.onFocusin && (W(document, Es, this.onFocusin), this.onFocusin = null);
  },
  open: function() {
    var e = this.body;
    B(e, bs), this.scrollbarWidth > 0 && (e.style.paddingRight = "".concat(this.scrollbarWidth + (parseFloat(this.initialBodyComputedPaddingRight) || 0), "px"));
  },
  close: function() {
    var e = this.body;
    j(e, bs), this.scrollbarWidth > 0 && (e.style.paddingRight = this.initialBodyPaddingRight);
  },
  shown: function() {
    var e = this.element, t = this.options, i = this.viewer;
    this.fulled = !0, this.isShown = !0, this.render(), this.bind(), this.showing = !1, t.focus && (i.focus(), this.enforceFocus()), G(t.shown) && F(e, Is, t.shown, {
      once: !0
    }), te(e, Is) !== !1 && this.ready && this.isShown && !this.hiding && this.view(this.index);
  },
  hidden: function() {
    var e = this.element, t = this.options, i = this.viewer;
    t.fucus && this.clearEnforceFocus(), this.close(), this.unbind(), B(i, _e), i.removeAttribute("role"), i.removeAttribute("aria-labelledby"), i.removeAttribute("aria-modal"), i.setAttribute("aria-hidden", !0), this.resetList(), this.resetImage(), this.fulled = !1, this.viewed = !1, this.isShown = !1, this.hiding = !1, this.destroyed || (G(t.hidden) && F(e, ks, t.hidden, {
      once: !0
    }), te(e, ks, null, {
      cancelable: !1
    }));
  },
  requestFullscreen: function(e) {
    var t = this.element.ownerDocument;
    if (this.fulled && !(t.fullscreenElement || t.webkitFullscreenElement || t.mozFullScreenElement || t.msFullscreenElement)) {
      var i = t.documentElement;
      i.requestFullscreen ? Ze(e) ? i.requestFullscreen(e) : i.requestFullscreen() : i.webkitRequestFullscreen ? i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT) : i.mozRequestFullScreen ? i.mozRequestFullScreen() : i.msRequestFullscreen && i.msRequestFullscreen();
    }
  },
  exitFullscreen: function() {
    var e = this.element.ownerDocument;
    this.fulled && (e.fullscreenElement || e.webkitFullscreenElement || e.mozFullScreenElement || e.msFullscreenElement) && (e.exitFullscreen ? e.exitFullscreen() : e.webkitExitFullscreen ? e.webkitExitFullscreen() : e.mozCancelFullScreen ? e.mozCancelFullScreen() : e.msExitFullscreen && e.msExitFullscreen());
  },
  change: function(e) {
    var t = this.options, i = this.pointers, s = i[Object.keys(i)[0]];
    if (s) {
      var n = s.endX - s.startX, a = s.endY - s.startY;
      switch (this.action) {
        // Move the current image
        case Yt:
          (n !== 0 || a !== 0) && (this.pointerMoved = !0, this.move(n, a, e));
          break;
        // Zoom the current image
        case wt:
          this.zoom(Ul(i), !1, null, e);
          break;
        case wn: {
          this.action = "switched";
          var l = Math.abs(n);
          l > 1 && l > Math.abs(a) && (this.pointers = {}, n > 1 ? this.prev(t.loop) : n < -1 && this.next(t.loop));
          break;
        }
      }
      U(i, function(o) {
        o.startX = o.endX, o.startY = o.endY;
      });
    }
  },
  isSwitchable: function() {
    var e = this.imageData, t = this.viewerData;
    return this.length > 1 && e.x >= 0 && e.y >= 0 && e.width <= t.width && e.height <= t.height;
  }
}, id = xe.Viewer, rd = /* @__PURE__ */ function(r) {
  return function() {
    return r += 1, r;
  };
}(-1), yn = /* @__PURE__ */ function() {
  function r(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Al(this, r), !e || e.nodeType !== 1)
      throw new Error("The first argument is required and must be an element.");
    this.element = e, this.options = ce({}, ws, Ze(t) && t), this.action = !1, this.fading = !1, this.fulled = !1, this.hiding = !1, this.imageClicked = !1, this.imageData = {}, this.index = this.options.initialViewIndex, this.isImg = !1, this.isShown = !1, this.length = 0, this.moving = !1, this.played = !1, this.playing = !1, this.pointers = {}, this.ready = !1, this.rotating = !1, this.scaling = !1, this.showing = !1, this.timeout = !1, this.tooltipping = !1, this.viewed = !1, this.viewing = !1, this.wheeling = !1, this.zooming = !1, this.pointerMoved = !1, this.id = rd(), this.init();
  }
  return zl(r, [{
    key: "init",
    value: function() {
      var t = this, i = this.element, s = this.options;
      if (!i[q]) {
        i[q] = this, s.focus && !s.keyboard && (s.focus = !1);
        var n = i.localName === "img", a = [];
        if (U(n ? [i] : i.querySelectorAll("img"), function(c) {
          G(s.filter) ? s.filter.call(t, c) && a.push(c) : t.getImageURL(c) && a.push(c);
        }), this.isImg = n, this.length = a.length, this.images = a, this.initBody(), Ke(document.createElement(q).style.transition) && (s.transition = !1), s.inline) {
          var l = 0, o = function() {
            if (l += 1, l === t.length) {
              var d;
              t.initializing = !1, t.delaying = {
                abort: function() {
                  clearTimeout(d);
                }
              }, d = setTimeout(function() {
                t.delaying = !1, t.build();
              }, 0);
            }
          };
          this.initializing = {
            abort: function() {
              U(a, function(d) {
                d.complete || (W(d, he, o), W(d, Re, o));
              });
            }
          }, U(a, function(c) {
            if (c.complete)
              o();
            else {
              var d, p;
              F(c, he, d = function() {
                W(c, Re, p), o();
              }, {
                once: !0
              }), F(c, Re, p = function() {
                W(c, he, d), o();
              }, {
                once: !0
              });
            }
          });
        } else
          F(i, nt, this.onStart = function(c) {
            var d = c.target;
            d.localName === "img" && (!G(s.filter) || s.filter.call(t, d)) && t.view(t.images.indexOf(d));
          });
      }
    }
  }, {
    key: "build",
    value: function() {
      if (!this.ready) {
        var t = this.element, i = this.options, s = t.parentNode, n = document.createElement("div");
        n.innerHTML = kl;
        var a = n.querySelector(".".concat(q, "-container")), l = a.querySelector(".".concat(q, "-title")), o = a.querySelector(".".concat(q, "-toolbar")), c = a.querySelector(".".concat(q, "-navbar")), d = a.querySelector(".".concat(q, "-button")), p = a.querySelector(".".concat(q, "-canvas"));
        if (this.parent = s, this.viewer = a, this.title = l, this.toolbar = o, this.navbar = c, this.button = d, this.canvas = p, this.footer = a.querySelector(".".concat(q, "-footer")), this.tooltipBox = a.querySelector(".".concat(q, "-tooltip")), this.player = a.querySelector(".".concat(q, "-player")), this.list = a.querySelector(".".concat(q, "-list")), a.id = "".concat(q).concat(this.id), l.id = "".concat(q, "Title").concat(this.id), B(l, i.title ? Bt(Array.isArray(i.title) ? i.title[0] : i.title) : _e), B(c, i.navbar ? Bt(i.navbar) : _e), zt(d, _e, !i.button), i.keyboard && d.setAttribute("tabindex", 0), i.backdrop && (B(a, "".concat(q, "-backdrop")), !i.inline && i.backdrop !== "static" && sr(p, Qt, "hide")), At(i.className) && i.className && i.className.split(mr).forEach(function(m) {
          B(a, m);
        }), i.toolbar) {
          var g = document.createElement("ul"), h = Ze(i.toolbar), u = Nt.slice(0, 3), f = Nt.slice(7, 9), b = Nt.slice(9);
          h || B(o, Bt(i.toolbar)), U(h ? i.toolbar : Nt, function(m, y) {
            var z = h && Ze(m), P = h ? gr(y) : m, A = z && !Ke(m.show) ? m.show : m;
            if (!(!A || !i.zoomable && u.indexOf(P) !== -1 || !i.rotatable && f.indexOf(P) !== -1 || !i.scalable && b.indexOf(P) !== -1)) {
              var T = z && !Ke(m.size) ? m.size : m, E = z && !Ke(m.click) ? m.click : m, S = document.createElement("li");
              i.keyboard && S.setAttribute("tabindex", 0), S.setAttribute("role", "button"), B(S, "".concat(q, "-").concat(P)), G(E) || sr(S, Qt, P), J(A) && B(S, Bt(A)), ["small", "large"].indexOf(T) !== -1 ? B(S, "".concat(q, "-").concat(T)) : P === "play" && B(S, "".concat(q, "-large")), G(E) && F(S, nt, E), g.appendChild(S);
            }
          }), o.appendChild(g);
        } else
          B(o, _e);
        if (!i.rotatable) {
          var v = o.querySelectorAll('li[class*="rotate"]');
          B(v, xt), U(v, function(m) {
            o.appendChild(m);
          });
        }
        if (i.inline)
          B(d, _l), we(a, {
            zIndex: i.zIndexInline
          }), window.getComputedStyle(s).position === "static" && we(s, {
            position: "relative"
          }), s.insertBefore(a, t.nextSibling);
        else {
          B(d, $l), B(a, ir), B(a, jt), B(a, _e), we(a, {
            zIndex: i.zIndex
          });
          var w = i.container;
          At(w) && (w = t.ownerDocument.querySelector(w)), w || (w = this.body), w.appendChild(a);
        }
        if (i.inline && (this.render(), this.bind(), this.isShown = !0), this.ready = !0, G(i.ready) && F(t, As, i.ready, {
          once: !0
        }), te(t, As) === !1) {
          this.ready = !1;
          return;
        }
        this.ready && i.inline && this.view(this.index);
      }
    }
    /**
     * Get the no conflict viewer class.
     * @returns {Viewer} The viewer class.
     */
  }], [{
    key: "noConflict",
    value: function() {
      return window.Viewer = id, r;
    }
    /**
     * Change the default options.
     * @param {Object} options - The new default options.
     */
  }, {
    key: "setDefaults",
    value: function(t) {
      ce(ws, Ze(t) && t);
    }
  }]);
}();
ce(yn.prototype, Zl, Jl, Ql, ed, td);
const sd = `/*!
 * Viewer.js v1.11.7
 * https://fengyuanchen.github.io/viewerjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2024-11-24T04:32:14.526Z
 */.viewer-zoom-in:before,.viewer-zoom-out:before,.viewer-one-to-one:before,.viewer-reset:before,.viewer-prev:before,.viewer-play:before,.viewer-next:before,.viewer-rotate-left:before,.viewer-rotate-right:before,.viewer-flip-horizontal:before,.viewer-flip-vertical:before,.viewer-fullscreen:before,.viewer-fullscreen-exit:before,.viewer-close:before{background-image:url("data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 viewBox%3D%220 0 560 40%22%3E%3Cpath fill%3D%22%23fff%22 d%3D%22M49.6 17.9h20.2v3.9H49.6zm123.1 2 10.9-11 2.7 2.8-8.2 8.2 8.2 8.2-2.7 2.7-10.9-10.9zm94 0-10.8-11-2.7 2.8 8.1 8.2-8.1 8.2 2.7 2.7 10.8-10.9zM212 9.3l20.1 10.6L212 30.5V9.3zm161.5 4.6-7.2 6 7.2 5.9v-4h12.4v4l7.3-5.9-7.3-6v4h-12.4v-4zm40.2 12.3 5.9 7.2 5.9-7.2h-4V13.6h4l-5.9-7.3-5.9 7.3h4v12.6h-4zm35.9-16.5h6.3v2h-4.3V16h-2V9.7Zm14 0h6.2V16h-2v-4.3h-4.2v-2Zm6.2 14V30h-6.2v-2h4.2v-4.3h2Zm-14 6.3h-6.2v-6.3h2v4.4h4.3v2Zm-438 .1v-8.3H9.6v-3.9h8.2V9.7h3.9v8.2h8.1v3.9h-8.1v8.3h-3.9zM93.6 9.7h-5.8v3.9h2V30h3.8V9.7zm16.1 0h-5.8v3.9h1.9V30h3.9V9.7zm-11.9 4.1h3.9v3.9h-3.9zm0 8.2h3.9v3.9h-3.9zm244.6-11.7 7.2 5.9-7.2 6v-3.6c-5.4-.4-7.8.8-8.7 2.8-.8 1.7-1.8 4.9 2.8 8.2-6.3-2-7.5-6.9-6-11.3 1.6-4.4 8-5 11.9-4.9v-3.1Zm147.2 13.4h6.3V30h-2v-4.3h-4.3v-2zm14 6.3v-6.3h6.2v2h-4.3V30h-1.9zm6.2-14h-6.2V9.7h1.9V14h4.3v2zm-13.9 0h-6.3v-2h4.3V9.7h2V16zm33.3 12.5 8.6-8.6-8.6-8.7 1.9-1.9 8.6 8.7 8.6-8.7 1.9 1.9-8.6 8.7 8.6 8.6-1.9 2-8.6-8.7-8.6 8.7-1.9-2zM297 10.3l-7.1 5.9 7.2 6v-3.6c5.3-.4 7.7.8 8.7 2.8.8 1.7 1.7 4.9-2.9 8.2 6.3-2 7.5-6.9 6-11.3-1.6-4.4-7.9-5-11.8-4.9v-3.1Zm-157.3-.6c2.3 0 4.4.7 6 2l2.5-3 1.9 9.2h-9.3l2.6-3.1a6.2 6.2 0 0 0-9.9 5.1c0 3.4 2.8 6.3 6.2 6.3 2.8 0 5.1-1.9 6-4.4h4c-1 4.7-5 8.3-10 8.3a10 10 0 0 1-10-10.2 10 10 0 0 1 10-10.2Z%22%2F%3E%3C%2Fsvg%3E");background-repeat:no-repeat;background-size:280px;color:transparent;display:block;font-size:0;height:20px;line-height:0;width:20px}.viewer-zoom-in:before{background-position:0 0;content:"Zoom In"}.viewer-zoom-out:before{background-position:-20px 0;content:"Zoom Out"}.viewer-one-to-one:before{background-position:-40px 0;content:"One to One"}.viewer-reset:before{background-position:-60px 0;content:"Reset"}.viewer-prev:before{background-position:-80px 0;content:"Previous"}.viewer-play:before{background-position:-100px 0;content:"Play"}.viewer-next:before{background-position:-120px 0;content:"Next"}.viewer-rotate-left:before{background-position:-140px 0;content:"Rotate Left"}.viewer-rotate-right:before{background-position:-160px 0;content:"Rotate Right"}.viewer-flip-horizontal:before{background-position:-180px 0;content:"Flip Horizontal"}.viewer-flip-vertical:before{background-position:-200px 0;content:"Flip Vertical"}.viewer-fullscreen:before{background-position:-220px 0;content:"Enter Full Screen"}.viewer-fullscreen-exit:before{background-position:-240px 0;content:"Exit Full Screen"}.viewer-close:before{background-position:-260px 0;content:"Close"}.viewer-container{bottom:0;direction:ltr;font-size:0;left:0;line-height:0;overflow:hidden;position:absolute;right:0;-webkit-tap-highlight-color:transparent;top:0;-ms-touch-action:none;touch-action:none;-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.viewer-container::-moz-selection,.viewer-container *::-moz-selection{background-color:transparent}.viewer-container::selection,.viewer-container *::selection{background-color:transparent}.viewer-container:focus{outline:0}.viewer-container img{display:block;height:auto;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;width:100%}.viewer-canvas{bottom:0;left:0;overflow:hidden;position:absolute;right:0;top:0}.viewer-canvas>img{height:auto;margin:15px auto;max-width:90%!important;width:auto}.viewer-footer{bottom:0;left:0;overflow:hidden;position:absolute;right:0;text-align:center}.viewer-navbar{background-color:#00000080;overflow:hidden}.viewer-list{box-sizing:content-box;height:50px;margin:0;overflow:hidden;padding:1px 0}.viewer-list>li{color:transparent;cursor:pointer;float:left;font-size:0;height:50px;line-height:0;opacity:.5;overflow:hidden;transition:opacity .15s;width:30px}.viewer-list>li:focus,.viewer-list>li:hover{opacity:.75}.viewer-list>li:focus{outline:0}.viewer-list>li+li{margin-left:1px}.viewer-list>.viewer-loading{position:relative}.viewer-list>.viewer-loading:after{border-width:2px;height:20px;margin-left:-10px;margin-top:-10px;width:20px}.viewer-list>.viewer-active,.viewer-list>.viewer-active:focus,.viewer-list>.viewer-active:hover{opacity:1}.viewer-player{background-color:#000;bottom:0;cursor:none;display:none;left:0;position:absolute;right:0;top:0;z-index:1}.viewer-player>img{left:0;position:absolute;top:0}.viewer-toolbar>ul{display:inline-block;margin:0 auto 5px;overflow:hidden;padding:6px 3px}.viewer-toolbar>ul>li{background-color:#00000080;border-radius:50%;cursor:pointer;float:left;height:24px;overflow:hidden;transition:background-color .15s;width:24px}.viewer-toolbar>ul>li:focus,.viewer-toolbar>ul>li:hover{background-color:#000c}.viewer-toolbar>ul>li:focus{box-shadow:0 0 3px #fff;outline:0;position:relative;z-index:1}.viewer-toolbar>ul>li:before{margin:2px}.viewer-toolbar>ul>li+li{margin-left:1px}.viewer-toolbar>ul>.viewer-small{height:18px;margin-bottom:3px;margin-top:3px;width:18px}.viewer-toolbar>ul>.viewer-small:before{margin:-1px}.viewer-toolbar>ul>.viewer-large{height:30px;margin-bottom:-3px;margin-top:-3px;width:30px}.viewer-toolbar>ul>.viewer-large:before{margin:5px}.viewer-tooltip{background-color:#000c;border-radius:10px;color:#fff;display:none;font-size:12px;height:20px;left:50%;line-height:20px;margin-left:-25px;margin-top:-10px;position:absolute;text-align:center;top:50%;width:50px}.viewer-title{color:#ccc;display:inline-block;font-size:12px;line-height:1.2;margin:5px 5%;max-width:90%;min-height:14px;opacity:.8;overflow:hidden;text-overflow:ellipsis;transition:opacity .15s;white-space:nowrap}.viewer-title:hover{opacity:1}.viewer-button{-webkit-app-region:no-drag;background-color:#00000080;border-radius:50%;cursor:pointer;height:80px;overflow:hidden;position:absolute;right:-40px;top:-40px;transition:background-color .15s;width:80px}.viewer-button:focus,.viewer-button:hover{background-color:#000c}.viewer-button:focus{box-shadow:0 0 3px #fff;outline:0}.viewer-button:before{bottom:15px;left:15px;position:absolute}.viewer-fixed{position:fixed}.viewer-open{overflow:hidden}.viewer-show{display:block}.viewer-hide{display:none}.viewer-backdrop{background-color:#00000080}.viewer-invisible{visibility:hidden}.viewer-move{cursor:move;cursor:grab}.viewer-fade{opacity:0}.viewer-in{opacity:1}.viewer-transition{transition:all .3s}@keyframes viewer-spinner{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.viewer-loading:after{animation:viewer-spinner 1s linear infinite;border:4px solid rgba(255,255,255,.1);border-left-color:#ffffff80;border-radius:50%;content:"";display:inline-block;height:40px;left:50%;margin-left:-20px;margin-top:-20px;position:absolute;top:50%;width:40px;z-index:1}@media (max-width: 767px){.viewer-hide-xs-down{display:none}}@media (max-width: 991px){.viewer-hide-sm-down{display:none}}@media (max-width: 1199px){.viewer-hide-md-down{display:none}}`, nd = "en", ad = [
  "zh-CN"
], od = {
  s29bcbfa9d16e4bc0: "应用预览",
  s5e8250fb85d64c23: "关闭",
  sac8ba291078b3f8b: "使用手机扫描二维码下载应用",
  sd60397cf6fdb7697: "扫码下载"
}, ld = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  templates: od
}, Symbol.toStringTag, { value: "Module" }));
var dd = Object.defineProperty, lt = (r, e, t, i) => {
  for (var s = void 0, n = r.length - 1, a; n >= 0; n--)
    (a = r[n]) && (s = a(e, t, s) || s);
  return s && dd(e, t, s), s;
};
Pl();
const cd = /* @__PURE__ */ new Map([["zh-CN", ld]]), { setLocale: ud } = Ln({
  sourceLocale: nd,
  targetLocales: ad,
  loadLocale: async (r) => cd.get(r)
}), wr = class wr extends yt {
  constructor() {
    super(), this.config = "{}", this.language = "en", this.viewerInstance = null, this.qrModalVisible = !1, this.currentQR = "", this.configObject = JSON.parse(this.config);
  }
  attributeChangedCallback(e, t, i) {
    if (super.attributeChangedCallback(e, t, i), e === "language" && t !== i && ud(i), e === "config" && t !== i)
      try {
        this.configObject = JSON.parse(i), this.requestUpdate();
      } catch (s) {
        console.error("解析config JSON时出错:", s);
      }
  }
  async showQRCode(e) {
    const t = await Ca.toDataURL(e.url, {
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
    }), e.initialize()), this.initializeViewer();
  }
  initializeViewer() {
    var i;
    if (this.viewerInstance)
      return;
    const e = (i = this.shadowRoot) == null ? void 0 : i.getElementById("screenshot-gallery"), t = this.shadowRoot;
    e && e.querySelector("img") ? this.viewerInstance = new yn(e, {
      container: t,
      navbar: !0,
      toolbar: {
        zoomIn: !0,
        zoomOut: !0,
        oneToOne: !1,
        reset: !0,
        prev: !0,
        next: !0,
        play: !1,
        rotateLeft: !1,
        rotateRight: !1,
        flipHorizontal: !1,
        flipVertical: !1
      },
      title: !1,
      transition: !0,
      zIndex: 999999
    }) : setTimeout(() => this.initializeViewer(), 100);
  }
  render() {
    var e, t;
    return ft`
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
      (i) => ft`
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
                        @click=${(s) => {
        s.preventDefault(), this.showQRCode(i);
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
              ${ht("App Preview")}
            </h2>

            <div
              class="max-w-100% lg:max-w-80% mx-auto"
              id="screenshot-gallery"
            >
              <swiper-container init="false" pagination="true">
                ${(t = this.configObject.screenshots) == null ? void 0 : t.map(
      (i) => ft`
                    <swiper-slide>
                      <img
                        src="${i}"
                        class="app-screenshot cursor-pointer"
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
              ${ht("Scan to Download")}
            </h3>
            <div
              class="h-50 w-50 mx-auto mb-4 flex items-center justify-center rounded-lg bg-gray-50 p-2"
            >
              ${this.currentQR ? ft`<img src="${this.currentQR}" class="h-full w-full" />` : ft`<div class="flex items-center justify-center">
                    <div
                      class="i-tabler-loader animate-spin text-2xl text-gray-400"
                    ></div>
                  </div>`}
            </div>
            <p class="mb-6 text-center text-sm text-gray-600">
              ${ht("Scan the QR code with your phone to download the app")}
            </p>

            <button
              class="group mt-2 flex items-center justify-center gap-2 rounded-lg bg-gray-100 px-5 py-2 text-gray-700 transition-colors hover:bg-gray-200"
              @click=${this.closeQRModal}
            >
              <div
                class="i-tabler-x text-sm text-gray-600 group-hover:text-gray-800"
              ></div>
              <span class="text-sm text-gray-600 group-hover:text-gray-800"
                >${ht("Close")}</span
              >
            </button>
          </div>
        </div>
      </div>
    `;
  }
};
wr.styles = [
  Ui(_n),
  Ui(sd),
  Dn`
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
.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-all{transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-colors{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-opacity{transition-property:opacity;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.transition-transform{transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.duration-300{transition-duration:300ms;}
@media (min-width: 768px){
.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem;}
}
@media (min-width: 1024px){
.lg\\:max-w-80\\%{max-width:80%;}
.lg\\:w-auto{width:auto;}
};
    `
];
let Se = wr;
lt([
  dr({ type: String, attribute: "config", reflect: !0 })
], Se.prototype, "config");
lt([
  dr({ type: String, attribute: "language" })
], Se.prototype, "language");
lt([
  ti()
], Se.prototype, "configObject");
lt([
  ti()
], Se.prototype, "viewerInstance");
lt([
  ti()
], Se.prototype, "qrModalVisible");
lt([
  ti()
], Se.prototype, "currentQR");
customElements.define("mobile-app-page", Se);
export {
  Se as MobileAppPage
};
