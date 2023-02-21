var Uo=Object.defineProperty,hi=Object.defineProperties,pi=Object.getOwnPropertyDescriptor,fi=Object.getOwnPropertyDescriptors,ne=Object.getOwnPropertySymbols,Vo=Object.prototype.hasOwnProperty,Ho=Object.prototype.propertyIsEnumerable,oo=(t,e,o)=>e in t?Uo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,F=(t,e)=>{for(var o in e||(e={}))Vo.call(e,o)&&oo(t,o,e[o]);if(ne)for(var o of ne(e))Ho.call(e,o)&&oo(t,o,e[o]);return t},J=(t,e)=>hi(t,fi(e)),je=(t,e)=>{var o={};for(var i in t)Vo.call(t,i)&&e.indexOf(i)<0&&(o[i]=t[i]);if(t!=null&&ne)for(var i of ne(t))e.indexOf(i)<0&&Ho.call(t,i)&&(o[i]=t[i]);return o},s=(t,e,o,i)=>{for(var r=i>1?void 0:i?pi(e,o):e,a=t.length-1,l;a>=0;a--)(l=t[a])&&(r=(i?l(e,o,r):l(r))||r);return i&&r&&Uo(e,o,r),r},ft={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},We=t=>(...e)=>({_$litDirective$:t,values:e}),Ye=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,o,i){this._$Ct=e,this._$AM=o,this._$Ci=i}_$AS(e,o){return this.update(e,o)}update(e,o){return this.render(...o)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Xe=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Ge=Symbol(),io=new Map,No=class{constructor(e,o){if(this._$cssResult$=!0,o!==Ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){let e=io.get(this.cssText);return Xe&&e===void 0&&(io.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}},mi=t=>new No(typeof t=="string"?t:t+"",Ge),S=(t,...e)=>{const o=t.length===1?t[0]:e.reduce((i,r,a)=>i+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+t[a+1],t[0]);return new No(o,Ge)},gi=(t,e)=>{Xe?t.adoptedStyleSheets=e.map(o=>o instanceof CSSStyleSheet?o:o.styleSheet):e.forEach(o=>{const i=document.createElement("style"),r=window.litNonce;r!==void 0&&i.setAttribute("nonce",r),i.textContent=o.cssText,t.appendChild(i)})},ro=Xe?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let o="";for(const i of e.cssRules)o+=i.cssText;return mi(o)})(t):t,Ce,so=window.trustedTypes,bi=so?so.emptyScript:"",ao=window.reactiveElementPolyfillSupport,Wt={toAttribute(t,e){switch(e){case Boolean:t=t?bi:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let o=t;switch(e){case Boolean:o=t!==null;break;case Number:o=t===null?null:Number(t);break;case Object:case Array:try{o=JSON.parse(t)}catch{o=null}}return o}},qo=(t,e)=>e!==t&&(e==e||t==t),Ae={attribute:!0,type:String,converter:Wt,reflect:!1,hasChanged:qo},At=class extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(e){var o;(o=this.l)!==null&&o!==void 0||(this.l=[]),this.l.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((o,i)=>{const r=this._$Eh(i,o);r!==void 0&&(this._$Eu.set(r,i),e.push(r))}),e}static createProperty(e,o=Ae){if(o.state&&(o.attribute=!1),this.finalize(),this.elementProperties.set(e,o),!o.noAccessor&&!this.prototype.hasOwnProperty(e)){const i=typeof e=="symbol"?Symbol():"__"+e,r=this.getPropertyDescriptor(e,i,o);r!==void 0&&Object.defineProperty(this.prototype,e,r)}}static getPropertyDescriptor(e,o,i){return{get(){return this[o]},set(r){const a=this[e];this[o]=r,this.requestUpdate(e,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Ae}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const o=this.properties,i=[...Object.getOwnPropertyNames(o),...Object.getOwnPropertySymbols(o)];for(const r of i)this.createProperty(r,o[r])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const o=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const r of i)o.unshift(ro(r))}else e!==void 0&&o.push(ro(e));return o}static _$Eh(e,o){const i=o.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}o(){var e;this._$Ep=new Promise(o=>this.enableUpdating=o),this._$AL=new Map,this._$Em(),this.requestUpdate(),(e=this.constructor.l)===null||e===void 0||e.forEach(o=>o(this))}addController(e){var o,i;((o=this._$Eg)!==null&&o!==void 0?o:this._$Eg=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var o;(o=this._$Eg)===null||o===void 0||o.splice(this._$Eg.indexOf(e)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((e,o)=>{this.hasOwnProperty(o)&&(this._$Et.set(o,this[o]),delete this[o])})}createRenderRoot(){var e;const o=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return gi(o,this.constructor.elementStyles),o}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostConnected)===null||i===void 0?void 0:i.call(o)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$Eg)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostDisconnected)===null||i===void 0?void 0:i.call(o)})}attributeChangedCallback(e,o,i){this._$AK(e,i)}_$ES(e,o,i=Ae){var r,a;const l=this.constructor._$Eh(e,i);if(l!==void 0&&i.reflect===!0){const n=((a=(r=i.converter)===null||r===void 0?void 0:r.toAttribute)!==null&&a!==void 0?a:Wt.toAttribute)(o,i.type);this._$Ei=e,n==null?this.removeAttribute(l):this.setAttribute(l,n),this._$Ei=null}}_$AK(e,o){var i,r,a;const l=this.constructor,n=l._$Eu.get(e);if(n!==void 0&&this._$Ei!==n){const d=l.getPropertyOptions(n),u=d.converter,p=(a=(r=(i=u)===null||i===void 0?void 0:i.fromAttribute)!==null&&r!==void 0?r:typeof u=="function"?u:null)!==null&&a!==void 0?a:Wt.fromAttribute;this._$Ei=n,this[n]=p(o,d.type),this._$Ei=null}}requestUpdate(e,o,i){let r=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||qo)(this[e],o)?(this._$AL.has(e)||this._$AL.set(e,o),i.reflect===!0&&this._$Ei!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):r=!1),!this.isUpdatePending&&r&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(o){Promise.reject(o)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((r,a)=>this[a]=r),this._$Et=void 0);let o=!1;const i=this._$AL;try{o=this.shouldUpdate(i),o?(this.willUpdate(i),(e=this._$Eg)===null||e===void 0||e.forEach(r=>{var a;return(a=r.hostUpdate)===null||a===void 0?void 0:a.call(r)}),this.update(i)):this._$EU()}catch(r){throw o=!1,this._$EU(),r}o&&this._$AE(i)}willUpdate(e){}_$AE(e){var o;(o=this._$Eg)===null||o===void 0||o.forEach(i=>{var r;return(r=i.hostUpdated)===null||r===void 0?void 0:r.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((o,i)=>this._$ES(i,this[i],o)),this._$EC=void 0),this._$EU()}updated(e){}firstUpdated(e){}};At.finalized=!0,At.elementProperties=new Map,At.elementStyles=[],At.shadowRootOptions={mode:"open"},ao==null||ao({ReactiveElement:At}),((Ce=globalThis.reactiveElementVersions)!==null&&Ce!==void 0?Ce:globalThis.reactiveElementVersions=[]).push("1.3.2");var Se,zt=globalThis.trustedTypes,lo=zt?zt.createPolicy("lit-html",{createHTML:t=>t}):void 0,mt=`lit$${(Math.random()+"").slice(9)}$`,Ko="?"+mt,vi=`<${Ko}>`,Lt=document,Yt=(t="")=>Lt.createComment(t),Xt=t=>t===null||typeof t!="object"&&typeof t!="function",jo=Array.isArray,yi=t=>{var e;return jo(t)||typeof((e=t)===null||e===void 0?void 0:e[Symbol.iterator])=="function"},It=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,no=/-->/g,co=/>/g,vt=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,uo=/'/g,ho=/"/g,Wo=/^(?:script|style|textarea|title)$/i,wi=t=>(e,...o)=>({_$litType$:t,strings:e,values:o}),y=wi(1),Z=Symbol.for("lit-noChange"),M=Symbol.for("lit-nothing"),po=new WeakMap,_i=(t,e,o)=>{var i,r;const a=(i=o==null?void 0:o.renderBefore)!==null&&i!==void 0?i:e;let l=a._$litPart$;if(l===void 0){const n=(r=o==null?void 0:o.renderBefore)!==null&&r!==void 0?r:null;a._$litPart$=l=new we(e.insertBefore(Yt(),n),n,void 0,o??{})}return l._$AI(t),l},Tt=Lt.createTreeWalker(Lt,129,null,!1),xi=(t,e)=>{const o=t.length-1,i=[];let r,a=e===2?"<svg>":"",l=It;for(let d=0;d<o;d++){const u=t[d];let p,h,f=-1,m=0;for(;m<u.length&&(l.lastIndex=m,h=l.exec(u),h!==null);)m=l.lastIndex,l===It?h[1]==="!--"?l=no:h[1]!==void 0?l=co:h[2]!==void 0?(Wo.test(h[2])&&(r=RegExp("</"+h[2],"g")),l=vt):h[3]!==void 0&&(l=vt):l===vt?h[0]===">"?(l=r??It,f=-1):h[1]===void 0?f=-2:(f=l.lastIndex-h[2].length,p=h[1],l=h[3]===void 0?vt:h[3]==='"'?ho:uo):l===ho||l===uo?l=vt:l===no||l===co?l=It:(l=vt,r=void 0);const b=l===vt&&t[d+1].startsWith("/>")?" ":"";a+=l===It?u+vi:f>=0?(i.push(p),u.slice(0,f)+"$lit$"+u.slice(f)+mt+b):u+mt+(f===-2?(i.push(void 0),d):b)}const n=a+(t[o]||"<?>")+(e===2?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[lo!==void 0?lo.createHTML(n):n,i]},ce=class{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let r=0,a=0;const l=t.length-1,n=this.parts,[d,u]=xi(t,e);if(this.el=ce.createElement(d,o),Tt.currentNode=this.el.content,e===2){const p=this.el.content,h=p.firstChild;h.remove(),p.append(...h.childNodes)}for(;(i=Tt.nextNode())!==null&&n.length<l;){if(i.nodeType===1){if(i.hasAttributes()){const p=[];for(const h of i.getAttributeNames())if(h.endsWith("$lit$")||h.startsWith(mt)){const f=u[a++];if(p.push(h),f!==void 0){const m=i.getAttribute(f.toLowerCase()+"$lit$").split(mt),b=/([.?@])?(.*)/.exec(f);n.push({type:1,index:r,name:b[2],strings:m,ctor:b[1]==="."?$i:b[1]==="?"?Ai:b[1]==="@"?Si:_e})}else n.push({type:6,index:r})}for(const h of p)i.removeAttribute(h)}if(Wo.test(i.tagName)){const p=i.textContent.split(mt),h=p.length-1;if(h>0){i.textContent=zt?zt.emptyScript:"";for(let f=0;f<h;f++)i.append(p[f],Yt()),Tt.nextNode(),n.push({type:2,index:++r});i.append(p[h],Yt())}}}else if(i.nodeType===8)if(i.data===Ko)n.push({type:2,index:r});else{let p=-1;for(;(p=i.data.indexOf(mt,p+1))!==-1;)n.push({type:7,index:r}),p+=mt.length-1}r++}}static createElement(t,e){const o=Lt.createElement("template");return o.innerHTML=t,o}};function Dt(t,e,o=t,i){var r,a,l,n;if(e===Z)return e;let d=i!==void 0?(r=o._$Cl)===null||r===void 0?void 0:r[i]:o._$Cu;const u=Xt(e)?void 0:e._$litDirective$;return(d==null?void 0:d.constructor)!==u&&((a=d==null?void 0:d._$AO)===null||a===void 0||a.call(d,!1),u===void 0?d=void 0:(d=new u(t),d._$AT(t,o,i)),i!==void 0?((l=(n=o)._$Cl)!==null&&l!==void 0?l:n._$Cl=[])[i]=d:o._$Cu=d),d!==void 0&&(e=Dt(t,d._$AS(t,e.values),d,i)),e}var ki=class{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:o},parts:i}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:Lt).importNode(o,!0);Tt.currentNode=r;let a=Tt.nextNode(),l=0,n=0,d=i[0];for(;d!==void 0;){if(l===d.index){let u;d.type===2?u=new we(a,a.nextSibling,this,t):d.type===1?u=new d.ctor(a,d.name,d.strings,this,t):d.type===6&&(u=new Ei(a,this,t)),this.v.push(u),d=i[++n]}l!==(d==null?void 0:d.index)&&(a=Tt.nextNode(),l++)}return r}m(t){let e=0;for(const o of this.v)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},we=class{constructor(e,o,i,r){var a;this.type=2,this._$AH=M,this._$AN=void 0,this._$AA=e,this._$AB=o,this._$AM=i,this.options=r,this._$Cg=(a=r==null?void 0:r.isConnected)===null||a===void 0||a}get _$AU(){var e,o;return(o=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&o!==void 0?o:this._$Cg}get parentNode(){let e=this._$AA.parentNode;const o=this._$AM;return o!==void 0&&e.nodeType===11&&(e=o.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,o=this){e=Dt(this,e,o),Xt(e)?e===M||e==null||e===""?(this._$AH!==M&&this._$AR(),this._$AH=M):e!==this._$AH&&e!==Z&&this.$(e):e._$litType$!==void 0?this.T(e):e.nodeType!==void 0?this.k(e):yi(e)?this.S(e):this.$(e)}M(e,o=this._$AB){return this._$AA.parentNode.insertBefore(e,o)}k(e){this._$AH!==e&&(this._$AR(),this._$AH=this.M(e))}$(e){this._$AH!==M&&Xt(this._$AH)?this._$AA.nextSibling.data=e:this.k(Lt.createTextNode(e)),this._$AH=e}T(e){var o;const{values:i,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=ce.createElement(r.h,this.options)),r);if(((o=this._$AH)===null||o===void 0?void 0:o._$AD)===a)this._$AH.m(i);else{const l=new ki(a,this),n=l.p(this.options);l.m(i),this.k(n),this._$AH=l}}_$AC(e){let o=po.get(e.strings);return o===void 0&&po.set(e.strings,o=new ce(e)),o}S(e){jo(this._$AH)||(this._$AH=[],this._$AR());const o=this._$AH;let i,r=0;for(const a of e)r===o.length?o.push(i=new we(this.M(Yt()),this.M(Yt()),this,this.options)):i=o[r],i._$AI(a),r++;r<o.length&&(this._$AR(i&&i._$AB.nextSibling,r),o.length=r)}_$AR(e=this._$AA.nextSibling,o){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,o);e&&e!==this._$AB;){const r=e.nextSibling;e.remove(),e=r}}setConnected(e){var o;this._$AM===void 0&&(this._$Cg=e,(o=this._$AP)===null||o===void 0||o.call(this,e))}},_e=class{constructor(t,e,o,i,r){this.type=1,this._$AH=M,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=M}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const r=this.strings;let a=!1;if(r===void 0)t=Dt(this,t,e,0),a=!Xt(t)||t!==this._$AH&&t!==Z,a&&(this._$AH=t);else{const l=t;let n,d;for(t=r[0],n=0;n<r.length-1;n++)d=Dt(this,l[o+n],e,n),d===Z&&(d=this._$AH[n]),a||(a=!Xt(d)||d!==this._$AH[n]),d===M?t=M:t!==M&&(t+=(d??"")+r[n+1]),this._$AH[n]=d}a&&!i&&this.C(t)}C(t){t===M?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},$i=class extends _e{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===M?void 0:t}},Ci=zt?zt.emptyScript:"",Ai=class extends _e{constructor(){super(...arguments),this.type=4}C(e){e&&e!==M?this.element.setAttribute(this.name,Ci):this.element.removeAttribute(this.name)}},Si=class extends _e{constructor(t,e,o,i,r){super(t,e,o,i,r),this.type=5}_$AI(t,e=this){var o;if((t=(o=Dt(this,t,e,0))!==null&&o!==void 0?o:M)===Z)return;const i=this._$AH,r=t===M&&i!==M||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,a=t!==M&&(i===M||r);r&&this.element.removeEventListener(this.name,this,i),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},Ei=class{constructor(e,o,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=o,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Dt(this,e)}},fo=window.litHtmlPolyfillSupport;fo==null||fo(ce,we),((Se=globalThis.litHtmlVersions)!==null&&Se!==void 0?Se:globalThis.litHtmlVersions=[]).push("2.2.4");var Ee,Te,qt=class extends At{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=_i(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return Z}};qt.finalized=!0,qt._$litElement$=!0,(Ee=globalThis.litElementHydrateSupport)===null||Ee===void 0||Ee.call(globalThis,{LitElement:qt});var mo=globalThis.litElementPolyfillSupport;mo==null||mo({LitElement:qt});((Te=globalThis.litElementVersions)!==null&&Te!==void 0?Te:globalThis.litElementVersions=[]).push("3.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var O=We(class extends Ye{constructor(t){var e;if(super(t),t.type!==ft.ATTRIBUTE||t.name!=="class"||((e=t.strings)===null||e===void 0?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter(e=>t[e]).join(" ")+" "}update(t,[e]){var o,i;if(this.et===void 0){this.et=new Set,t.strings!==void 0&&(this.st=new Set(t.strings.join(" ").split(/\s/).filter(a=>a!=="")));for(const a in e)e[a]&&!(!((o=this.st)===null||o===void 0)&&o.has(a))&&this.et.add(a);return this.render(e)}const r=t.element.classList;this.et.forEach(a=>{a in e||(r.remove(a),this.et.delete(a))});for(const a in e){const l=!!e[a];l===this.et.has(a)||!((i=this.st)===null||i===void 0)&&i.has(a)||(l?(r.add(a),this.et.add(a)):(r.remove(a),this.et.delete(a)))}return Z}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var P=t=>e=>typeof e=="function"?((o,i)=>(window.customElements.define(o,i),i))(t,e):((o,i)=>{const{kind:r,elements:a}=i;return{kind:r,elements:a,finisher(l){window.customElements.define(o,l)}}})(t,e),Ti=(t,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?J(F({},e),{finisher(o){o.createProperty(e.key,t)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(o){o.createProperty(e.key,t)}};function c(t){return(e,o)=>o!==void 0?((i,r,a)=>{r.constructor.createProperty(a,i)})(t,e,o):Ti(t,e)}function N(t){return c(J(F({},t),{state:!0}))}var zi=({finisher:t,descriptor:e})=>(o,i)=>{var r;if(i===void 0){const a=(r=o.originalKey)!==null&&r!==void 0?r:o.key,l=e!=null?{kind:"method",placement:"prototype",key:a,descriptor:e(o.key)}:J(F({},o),{key:a});return t!=null&&(l.finisher=function(n){t(n,a)}),l}{const a=o.constructor;e!==void 0&&Object.defineProperty(o,i,e(i)),t==null||t(a,i)}};function x(t,e){return zi({descriptor:o=>{const i={get(){var r,a;return(a=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(t))!==null&&a!==void 0?a:null},enumerable:!0,configurable:!0};if(e){const r=typeof o=="symbol"?Symbol():"__"+o;i.get=function(){var a,l;return this[r]===void 0&&(this[r]=(l=(a=this.renderRoot)===null||a===void 0?void 0:a.querySelector(t))!==null&&l!==void 0?l:null),this[r]}}return i}})}var ze;((ze=window.HTMLSlotElement)===null||ze===void 0?void 0:ze.prototype.assignedElements)!=null;var E=class extends qt{emit(t,e){const o=new CustomEvent(t,F({bubbles:!0,cancelable:!1,composed:!0,detail:{}},e));return this.dispatchEvent(o),o}};s([c()],E.prototype,"dir",2);s([c()],E.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 *//**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var B=S`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Li=S`
  ${B}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: var(--sl-font-size-x-small);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 3px 6px;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Mt=class extends E{constructor(){super(...arguments),this.variant="primary",this.pill=!1,this.pulse=!1}render(){return y`
      <span
        part="base"
        class=${O({badge:!0,"badge--primary":this.variant==="primary","badge--success":this.variant==="success","badge--neutral":this.variant==="neutral","badge--warning":this.variant==="warning","badge--danger":this.variant==="danger","badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Mt.styles=Li;s([c({reflect:!0})],Mt.prototype,"variant",2);s([c({type:Boolean,reflect:!0})],Mt.prototype,"pill",2);s([c({type:Boolean,reflect:!0})],Mt.prototype,"pulse",2);Mt=s([P("sl-badge")],Mt);var Di=class extends Event{constructor(t){super("formdata"),this.formData=t}},Mi=class extends FormData{constructor(t){var e=(...o)=>{super(...o)};t?(e(t),this.form=t,t.dispatchEvent(new Di(this))):e()}append(t,e){if(!this.form)return super.append(t,e);let o=this.form.elements[t];if(o||(o=document.createElement("input"),o.type="hidden",o.name=t,this.form.appendChild(o)),this.has(t)){const i=this.getAll(t),r=i.indexOf(o.value);r!==-1&&i.splice(r,1),i.push(e),this.set(t,i)}else super.append(t,e);o.value=e}};function Fi(){const t=document.createElement("form");let e=!1;return document.body.append(t),t.addEventListener("submit",o=>{new FormData(o.target),o.preventDefault()}),t.addEventListener("formdata",()=>e=!0),t.dispatchEvent(new Event("submit",{cancelable:!0})),t.remove(),e}function go(){!window.FormData||Fi()||(window.FormData=Mi,window.addEventListener("submit",t=>{t.defaultPrevented||new FormData(t.target)}))}document.readyState==="complete"?go():window.addEventListener("DOMContentLoaded",()=>go());var Ut=new WeakMap,Pt=class{constructor(t,e){(this.host=t).addController(this),this.options=F({form:o=>o.closest("form"),name:o=>o.name,value:o=>o.value,defaultValue:o=>o.defaultValue,disabled:o=>o.disabled,reportValidity:o=>typeof o.reportValidity=="function"?o.reportValidity():!0,setValue:(o,i)=>{o.value=i}},e),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this)}hostConnected(){this.form=this.options.form(this.host),this.form&&(this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),Ut.has(this.form)||(Ut.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()))}hostDisconnected(){this.form&&(this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),Ut.has(this.form)&&(this.form.reportValidity=Ut.get(this.form),Ut.delete(this.form)),this.form=void 0)}handleFormData(t){const e=this.options.disabled(this.host),o=this.options.name(this.host),i=this.options.value(this.host);!e&&typeof o=="string"&&typeof i<"u"&&(Array.isArray(i)?i.forEach(r=>{t.formData.append(o,r.toString())}):t.formData.append(o,i.toString()))}handleFormSubmit(t){const e=this.options.disabled(this.host),o=this.options.reportValidity;this.form&&!this.form.noValidate&&!e&&!o(this.host)&&(t.preventDefault(),t.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host))}reportFormValidity(){if(this.form&&!this.form.noValidate){const t=this.form.querySelectorAll("*");for(const e of t)if(typeof e.reportValidity=="function"&&!e.reportValidity())return!1}return!0}doAction(t,e){if(this.form){const o=document.createElement("button");o.type=t,o.style.position="absolute",o.style.width="0",o.style.height="0",o.style.clipPath="inset(50%)",o.style.overflow="hidden",o.style.whiteSpace="nowrap",e&&["formaction","formmethod","formnovalidate","formtarget"].forEach(i=>{e.hasAttribute(i)&&o.setAttribute(i,e.getAttribute(i))}),this.form.append(o),o.click(),o.remove()}}reset(t){this.doAction("reset",t)}submit(t){this.doAction("submit",t)}},Pi=S`
  ${B}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--sl-transition-x-fast) background-color, var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border, var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label ::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-color-neutral-300);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    font-size: var(--sl-button-font-size-small);
    height: var(--sl-input-height-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    font-size: var(--sl-button-font-size-medium);
    height: var(--sl-input-height-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    font-size: var(--sl-button-font-size-large);
    height: var(--sl-input-height-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    display: flex;
    align-items: center;
  }

  .button--caret .button__caret svg {
    width: 1em;
    height: 1em;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) translateX(50%);
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    transform: translateY(-50%) translateX(-50%);
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--focus, .sl-button-group__button--first, .sl-button-group__button--radio, [variant='default']):not(:hover, :active, :focus))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`,Yo=Symbol.for(""),Bi=t=>{var e,o;if(((e=t)===null||e===void 0?void 0:e.r)===Yo)return(o=t)===null||o===void 0?void 0:o._$litStatic$},de=(t,...e)=>({_$litStatic$:e.reduce((o,i,r)=>o+(a=>{if(a._$litStatic$!==void 0)return a._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${a}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(i)+t[r+1],t[0]),r:Yo}),bo=new Map,Oi=t=>(e,...o)=>{const i=o.length;let r,a;const l=[],n=[];let d,u=0,p=!1;for(;u<i;){for(d=e[u];u<i&&(a=o[u],(r=Bi(a))!==void 0);)d+=r+e[++u],p=!0;n.push(a),l.push(d),u++}if(u===i&&l.push(e[i]),p){const h=l.join("$$lit$$");(e=bo.get(h))===void 0&&(l.raw=l,bo.set(h,e=l)),o=n}return t(e,...o)},le=Oi(y);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Pe=new Set,Ri=new MutationObserver(Zo),St=new Map,Xo=document.documentElement.dir||"ltr",Go=document.documentElement.lang||navigator.language,Kt;Ri.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});function Ii(...t){t.map(e=>{const o=e.$code.toLowerCase();St.has(o)?St.set(o,Object.assign(Object.assign({},St.get(o)),e)):St.set(o,e),Kt||(Kt=e)}),Zo()}function Zo(){Xo=document.documentElement.dir||"ltr",Go=document.documentElement.lang||navigator.language,[...Pe.keys()].map(t=>{typeof t.requestUpdate=="function"&&t.requestUpdate()})}var Ui=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Pe.add(this.host)}hostDisconnected(){Pe.delete(this.host)}dir(){return`${this.host.dir||Xo}`.toLowerCase()}lang(){return`${this.host.lang||Go}`.toLowerCase()}term(t,...e){const o=this.lang().toLowerCase().slice(0,2),i=this.lang().length>2?this.lang().toLowerCase():"",r=St.get(i),a=St.get(o);let l;if(r&&r[t])l=r[t];else if(a&&a[t])l=a[t];else if(Kt&&Kt[t])l=Kt[t];else return console.error(`No translation found for: ${String(t)}`),t;return typeof l=="function"?l(...e):l}date(t,e){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),e).format(t)}number(t,e){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),e).format(t)}relativeTime(t,e,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,e)}},et=class extends Ui{},Vi={$code:"en",$name:"English",$dir:"ltr",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",hidePassword:"Hide password",loading:"Loading",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",toggleColorFormat:"Toggle color format"};Ii(Vi);var xt=class{constructor(t,...e){this.slotNames=[],(this.host=t).addController(this),this.slotNames=e,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some(t=>{if(t.nodeType===t.TEXT_NODE&&t.textContent.trim()!=="")return!0;if(t.nodeType===t.ELEMENT_NODE){const e=t;if(e.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!e.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(t){return this.host.querySelector(`:scope > [slot="${t}"]`)!==null}test(t){return t==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(t)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(t){const e=t.target;(this.slotNames.includes("[default]")&&!e.name||e.name&&this.slotNames.includes(e.name))&&this.host.requestUpdate()}};function Jo(t){if(!t)return"";const e=t.assignedNodes({flatten:!0});let o="";return[...e].forEach(i=>{i.nodeType===Node.TEXT_NODE&&(o+=i.textContent)}),o}var g=t=>t??M;/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var A=class extends E{constructor(){super(...arguments),this.formSubmitController=new Pt(this,{form:t=>{if(t.hasAttribute("form")){const e=t.getRootNode(),o=t.getAttribute("form");return e.getElementById(o)}return t.closest("form")}}),this.hasSlotController=new xt(this,"[default]","prefix","suffix"),this.localize=new et(this),this.hasFocus=!1,this.variant="default",this.size="medium",this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type="button"}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){if(this.disabled||this.loading){t.preventDefault(),t.stopPropagation();return}this.type==="submit"&&this.formSubmitController.submit(this),this.type==="reset"&&this.formSubmitController.reset(this)}render(){const t=!!this.href,e=t?de`a`:de`button`;return le`
      <${e}
        part="base"
        class=${O({button:!0,"button--default":this.variant==="default","button--primary":this.variant==="primary","button--success":this.variant==="success","button--neutral":this.variant==="neutral","button--warning":this.variant==="warning","button--danger":this.variant==="danger","button--text":this.variant==="text","button--small":this.size==="small","button--medium":this.size==="medium","button--large":this.size==="large","button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()==="rtl","button--has-label":this.hasSlotController.test("[default]"),"button--has-prefix":this.hasSlotController.test("prefix"),"button--has-suffix":this.hasSlotController.test("suffix")})}
        ?disabled=${g(t?void 0:this.disabled)}
        type=${g(t?void 0:this.type)}
        name=${g(t?void 0:this.name)}
        value=${g(t?void 0:this.value)}
        href=${g(t?this.href:void 0)}
        target=${g(t?this.target:void 0)}
        download=${g(t?this.download:void 0)}
        rel=${g(t&&this.target?"noreferrer noopener":void 0)}
        role=${g(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <span part="prefix" class="button__prefix">
          <slot name="prefix"></slot>
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
        ${this.caret?le`
                <span part="caret" class="button__caret">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              `:""}
        ${this.loading?le`<sl-spinner></sl-spinner>`:""}
      </${e}>
    `}};A.styles=Pi;s([x(".button")],A.prototype,"button",2);s([N()],A.prototype,"hasFocus",2);s([c({reflect:!0})],A.prototype,"variant",2);s([c({reflect:!0})],A.prototype,"size",2);s([c({type:Boolean,reflect:!0})],A.prototype,"caret",2);s([c({type:Boolean,reflect:!0})],A.prototype,"disabled",2);s([c({type:Boolean,reflect:!0})],A.prototype,"loading",2);s([c({type:Boolean,reflect:!0})],A.prototype,"outline",2);s([c({type:Boolean,reflect:!0})],A.prototype,"pill",2);s([c({type:Boolean,reflect:!0})],A.prototype,"circle",2);s([c()],A.prototype,"type",2);s([c()],A.prototype,"name",2);s([c()],A.prototype,"value",2);s([c()],A.prototype,"href",2);s([c()],A.prototype,"target",2);s([c()],A.prototype,"download",2);s([c()],A.prototype,"form",2);s([c({attribute:"formaction"})],A.prototype,"formAction",2);s([c({attribute:"formmethod"})],A.prototype,"formMethod",2);s([c({attribute:"formnovalidate",type:Boolean})],A.prototype,"formNoValidate",2);s([c({attribute:"formtarget"})],A.prototype,"formTarget",2);A=s([P("sl-button")],A);var Hi=S`
  ${B}

  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
    mix-blend-mode: multiply;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.01em, 2.75em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.01em, 2.75em;
    }
  }
`,Be=class extends E{constructor(){super(...arguments),this.localize=new et(this)}render(){return y`
      <svg part="base" class="spinner" role="progressbar" aria-valuetext=${this.localize.term("loading")}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};Be.styles=Hi;Be=s([P("sl-spinner")],Be);var Ni=S`
  ${B}

  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Ft=class extends E{constructor(){super(...arguments),this.disableRole=!1,this.label=""}handleFocus(t){const e=Vt(t.target);e==null||e.classList.add("sl-button-group__button--focus")}handleBlur(t){const e=Vt(t.target);e==null||e.classList.remove("sl-button-group__button--focus")}handleMouseOver(t){const e=Vt(t.target);e==null||e.classList.add("sl-button-group__button--hover")}handleMouseOut(t){const e=Vt(t.target);e==null||e.classList.remove("sl-button-group__button--hover")}handleSlotChange(){const t=[...this.defaultSlot.assignedElements({flatten:!0})];t.forEach(e=>{const o=t.indexOf(e),i=Vt(e);i!==null&&(i.classList.add("sl-button-group__button"),i.classList.toggle("sl-button-group__button--first",o===0),i.classList.toggle("sl-button-group__button--inner",o>0&&o<t.length-1),i.classList.toggle("sl-button-group__button--last",o===t.length-1),i.classList.toggle("sl-button-group__button--radio",i.tagName.toLowerCase()==="sl-radio-button"))})}render(){return y`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?"presentation":"group"}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange} role="none"></slot>
      </div>
    `}};Ft.styles=Ni;s([x("slot")],Ft.prototype,"defaultSlot",2);s([N()],Ft.prototype,"disableRole",2);s([c()],Ft.prototype,"label",2);Ft=s([P("sl-button-group")],Ft);function Vt(t){const e=["sl-button","sl-radio-button"];return e.includes(t.tagName.toLowerCase())?t:t.querySelector(e.join(","))}var qi=t=>t.strings===void 0,Ki={},ji=(t,e=Ki)=>t._$AH=e,ue=We(class extends Ye{constructor(t){if(super(t),t.type!==ft.PROPERTY&&t.type!==ft.ATTRIBUTE&&t.type!==ft.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!qi(t))throw Error("`live` bindings can only contain a single expression")}render(t){return t}update(t,[e]){if(e===Z||e===M)return e;const o=t.element,i=t.name;if(t.type===ft.PROPERTY){if(e===o[i])return Z}else if(t.type===ft.BOOLEAN_ATTRIBUTE){if(!!e===o.hasAttribute(i))return Z}else if(t.type===ft.ATTRIBUTE&&o.getAttribute(i)===e+"")return Z;return ji(t),e}});/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var xe=(t="value")=>(e,o)=>{const i=e.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(a,l,n){var d;const u=i.getPropertyOptions(t),p=typeof u.attribute=="string"?u.attribute:t;if(a===p){const h=u.converter||Wt,m=(typeof h=="function"?h:(d=h==null?void 0:h.fromAttribute)!=null?d:Wt.fromAttribute)(n,u.type);this[t]!==m&&(this[o]=m)}r.call(this,a,l,n)}},Wi=S`
  ${B}

  :host {
    display: inline-block;
  }

  .checkbox {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__control .checkbox__icon {
    display: inline-flex;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
  }

  .checkbox__control .checkbox__icon svg {
    width: 100%;
    height: 100%;
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    color: var(--sl-input-label-color);
    line-height: var(--sl-toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`;function _(t,e){const o=F({waitUntilFirstUpdate:!1},e);return(i,r)=>{const{update:a}=i;if(t in i){const l=t;i.update=function(n){if(n.has(l)){const d=n.get(l),u=this[l];d!==u&&(!o.waitUntilFirstUpdate||this.hasUpdated)&&this[r](d,u)}a.call(this,n)}}}}var j=class extends E{constructor(){super(...arguments),this.formSubmitController=new Pt(this,{value:t=>t.checked?t.value||"on":void 0,defaultValue:t=>t.defaultChecked,setValue:(t,e)=>t.checked=e}),this.hasFocus=!1,this.disabled=!1,this.required=!1,this.checked=!1,this.indeterminate=!1,this.invalid=!1,this.defaultChecked=!1}firstUpdated(){this.invalid=!this.input.checkValidity()}click(){this.input.click()}focus(t){this.input.focus(t)}blur(){this.input.blur()}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit("sl-change")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleStateChange(){this.invalid=!this.input.checkValidity()}render(){return y`
      <label
        part="base"
        class=${O({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate})}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          name=${g(this.name)}
          value=${g(this.value)}
          .indeterminate=${ue(this.indeterminate)}
          .checked=${ue(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          aria-checked=${this.checked?"true":"false"}
          @click=${this.handleClick}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
        />

        <span part="control" class="checkbox__control">
          ${this.checked?y`
                <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                    <g stroke="currentColor" stroke-width="2">
                      <g transform="translate(3.428571, 3.428571)">
                        <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
                        <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              `:""}
          ${!this.checked&&this.indeterminate?y`
                <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
                  <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
                    <g stroke="currentColor" stroke-width="2">
                      <g transform="translate(2.285714, 6.857143)">
                        <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
                      </g>
                    </g>
                  </g>
                </svg>
              `:""}
        </span>

        <span part="label" class="checkbox__label">
          <slot></slot>
        </span>
      </label>
    `}};j.styles=Wi;s([x('input[type="checkbox"]')],j.prototype,"input",2);s([N()],j.prototype,"hasFocus",2);s([c()],j.prototype,"name",2);s([c()],j.prototype,"value",2);s([c({type:Boolean,reflect:!0})],j.prototype,"disabled",2);s([c({type:Boolean,reflect:!0})],j.prototype,"required",2);s([c({type:Boolean,reflect:!0})],j.prototype,"checked",2);s([c({type:Boolean,reflect:!0})],j.prototype,"indeterminate",2);s([c({type:Boolean,reflect:!0})],j.prototype,"invalid",2);s([xe("checked")],j.prototype,"defaultChecked",2);s([_("disabled",{waitUntilFirstUpdate:!0})],j.prototype,"handleDisabledChange",1);s([_("checked",{waitUntilFirstUpdate:!0}),_("indeterminate",{waitUntilFirstUpdate:!0})],j.prototype,"handleStateChange",1);j=s([P("sl-checkbox")],j);var Yi=S`
  ${B}

  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    cursor: pointer;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) transform ease;
  }

  .details--open .details__summary-icon {
    transform: rotate(90deg);
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    padding: var(--sl-spacing-medium);
  }
`;function Q(t,e){return new Promise(o=>{function i(r){r.target===t&&(t.removeEventListener(e,i),o())}t.addEventListener(e,i)})}function I(t,e,o){return new Promise(i=>{if((o==null?void 0:o.duration)===1/0)throw new Error("Promise-based animations must be finite.");const r=t.animate(e,J(F({},o),{duration:Xi()?0:o.duration}));r.addEventListener("cancel",i,{once:!0}),r.addEventListener("finish",i,{once:!0})})}function vo(t){return t=t.toString().toLowerCase(),t.indexOf("ms")>-1?parseFloat(t):t.indexOf("s")>-1?parseFloat(t)*1e3:parseFloat(t)}function Xi(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function q(t){return Promise.all(t.getAnimations().map(e=>new Promise(o=>{const i=requestAnimationFrame(o);e.addEventListener("cancel",()=>i,{once:!0}),e.addEventListener("finish",()=>i,{once:!0}),e.cancel()})))}function yo(t,e){return t.map(o=>J(F({},o),{height:o.height==="auto"?`${e}px`:o.height}))}var Qo=new Map,Gi=new WeakMap;function Zi(t){return t??{keyframes:[],options:{duration:0}}}function wo(t,e){return e.toLowerCase()==="rtl"?{keyframes:t.rtlKeyframes||t.keyframes,options:t.options}:t}function T(t,e){Qo.set(t,Zi(e))}function U(t,e,o){const i=Gi.get(t);if(i!=null&&i[e])return wo(i[e],o.dir);const r=Qo.get(e);return r?wo(r,o.dir):{keyframes:[],options:{duration:0}}}var ot=class extends E{constructor(){super(...arguments),this.localize=new et(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.hidden=!this.open,this.body.style.height=this.open?"auto":"0"}async show(){if(!(this.open||this.disabled))return this.open=!0,Q(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Q(this,"sl-after-hide")}handleSummaryClick(){this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.open?this.hide():this.show()),(t.key==="ArrowUp"||t.key==="ArrowLeft")&&(t.preventDefault(),this.hide()),(t.key==="ArrowDown"||t.key==="ArrowRight")&&(t.preventDefault(),this.show())}async handleOpenChange(){if(this.open){this.emit("sl-show"),await q(this.body),this.body.hidden=!1;const{keyframes:t,options:e}=U(this,"details.show",{dir:this.localize.dir()});await I(this.body,yo(t,this.body.scrollHeight),e),this.body.style.height="auto",this.emit("sl-after-show")}else{this.emit("sl-hide"),await q(this.body);const{keyframes:t,options:e}=U(this,"details.hide",{dir:this.localize.dir()});await I(this.body,yo(t,this.body.scrollHeight),e),this.body.hidden=!0,this.body.style.height="auto",this.emit("sl-after-hide")}}render(){return y`
      <div
        part="base"
        class=${O({details:!0,"details--open":this.open,"details--disabled":this.disabled})}
      >
        <header
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <div part="summary" class="details__summary">
            <slot name="summary">${this.summary}</slot>
          </div>

          <span part="summary-icon" class="details__summary-icon">
            <sl-icon name="chevron-right" library="system"></sl-icon>
          </span>
        </header>

        <div class="details__body">
          <div part="content" id="content" class="details__content" role="region" aria-labelledby="header">
            <slot></slot>
          </div>
        </div>
      </div>
    `}};ot.styles=Yi;s([x(".details")],ot.prototype,"details",2);s([x(".details__header")],ot.prototype,"header",2);s([x(".details__body")],ot.prototype,"body",2);s([c({type:Boolean,reflect:!0})],ot.prototype,"open",2);s([c()],ot.prototype,"summary",2);s([c({type:Boolean,reflect:!0})],ot.prototype,"disabled",2);s([_("open",{waitUntilFirstUpdate:!0})],ot.prototype,"handleOpenChange",1);ot=s([P("sl-details")],ot);T("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});T("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});var Oe="";function Re(t){Oe=t}function Ji(){if(!Oe){const t=[...document.getElementsByTagName("script")],e=t.find(o=>o.hasAttribute("data-shoelace"));if(e)Re(e.getAttribute("data-shoelace"));else{const o=t.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src));let i="";o&&(i=o.getAttribute("src")),Re(i.split("/").slice(0,-1).join("/"))}}return Oe.replace(/\/$/,"")}var Qi={name:"default",resolver:t=>`${Ji()}/assets/icons/${t}.svg`},tr=Qi,_o={"check-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
      <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,x:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
      <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},er={name:"system",resolver:t=>t in _o?`data:image/svg+xml,${encodeURIComponent(_o[t])}`:""},or=er,ir=[tr,or],Ie=[];function rr(t){Ie.push(t)}function sr(t){Ie=Ie.filter(e=>e!==t)}function xo(t){return ir.find(e=>e.name===t)}var Le=new Map;function ar(t,e="cors"){if(Le.has(t))return Le.get(t);const o=fetch(t,{mode:e}).then(async i=>({ok:i.ok,status:i.status,html:await i.text()}));return Le.set(t,o),o}var De=new Map;async function lr(t){if(De.has(t))return De.get(t);const e=await ar(t),o={ok:e.ok,status:e.status,svg:null};if(e.ok){const i=document.createElement("div");i.innerHTML=e.html;const r=i.firstElementChild;o.svg=(r==null?void 0:r.tagName.toLowerCase())==="svg"?r.outerHTML:""}return De.set(t,o),o}var nr=S`
  ${B}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    contain: strict;
    box-sizing: content-box !important;
  }

  .icon,
  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Ue=class extends Ye{constructor(t){if(super(t),this.it=M,t.type!==ft.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===M||t==null)return this.ft=void 0,this.it=t;if(t===Z)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this.ft;this.it=t;const e=[t];return e.raw=e,this.ft={_$litType$:this.constructor.resultType,strings:e,values:[]}}};Ue.directiveName="unsafeHTML",Ue.resultType=1;var Ve=class extends Ue{};Ve.directiveName="unsafeSVG",Ve.resultType=2;var cr=We(Ve),Me,ut=class extends E{constructor(){super(...arguments),this.svg="",this.label="",this.library="default"}connectedCallback(){super.connectedCallback(),rr(this)}firstUpdated(){this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),sr(this)}getUrl(){const t=xo(this.library);return this.name&&t?t.resolver(this.name):this.src}redraw(){this.setIcon()}async setIcon(){var t;const e=xo(this.library),o=this.getUrl();if(Me||(Me=new DOMParser),o)try{const i=await lr(o);if(o!==this.getUrl())return;if(i.ok){const a=Me.parseFromString(i.svg,"text/html").body.querySelector("svg");a!==null?((t=e==null?void 0:e.mutator)==null||t.call(e,a),this.svg=a.outerHTML,this.emit("sl-load")):(this.svg="",this.emit("sl-error"))}else this.svg="",this.emit("sl-error")}catch{this.emit("sl-error")}else this.svg.length>0&&(this.svg="")}handleChange(){this.setIcon()}render(){const t=typeof this.label=="string"&&this.label.length>0;return y` <div
      part="base"
      class="icon"
      role=${g(t?"img":void 0)}
      aria-label=${g(t?this.label:void 0)}
      aria-hidden=${g(t?void 0:"true")}
    >
      ${cr(this.svg)}
    </div>`}};ut.styles=nr;s([N()],ut.prototype,"svg",2);s([c({reflect:!0})],ut.prototype,"name",2);s([c()],ut.prototype,"src",2);s([c()],ut.prototype,"label",2);s([c({reflect:!0})],ut.prototype,"library",2);s([_("name"),_("src"),_("library")],ut.prototype,"setIcon",1);ut=s([P("sl-icon")],ut);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dr=S`
  ${B}

  :host {
    display: inline-block;
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,G=class extends E{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}click(){this.button.click()}focus(t){this.button.focus(t)}blur(){this.button.blur()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}render(){const t=!!this.href,e=t?de`a`:de`button`;return le`
      <${e}
        part="base"
        class=${O({"icon-button":!0,"icon-button--disabled":!t&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${g(t?void 0:this.disabled)}
        type=${g(t?void 0:"button")}
        href=${g(t?this.href:void 0)}
        target=${g(t?this.target:void 0)}
        download=${g(t?this.download:void 0)}
        rel=${g(t&&this.target?"noreferrer noopener":void 0)}
        role=${g(t?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${g(this.name)}
          library=${g(this.library)}
          src=${g(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${e}>
    `}};G.styles=dr;s([N()],G.prototype,"hasFocus",2);s([x(".icon-button")],G.prototype,"button",2);s([c()],G.prototype,"name",2);s([c()],G.prototype,"library",2);s([c()],G.prototype,"src",2);s([c()],G.prototype,"href",2);s([c()],G.prototype,"target",2);s([c()],G.prototype,"download",2);s([c()],G.prototype,"label",2);s([c({type:Boolean,reflect:!0})],G.prototype,"disabled",2);G=s([P("sl-icon-button")],G);var ur=S`
  ${B}

  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    pointer-events: none;
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
  }
`,H=class extends E{constructor(){super(...arguments),this.localize=new et(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleBlur=this.handleBlur.bind(this),this.handleClick=this.handleClick.bind(this),this.handleFocus=this.handleFocus.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleMouseOver=this.handleMouseOver.bind(this),this.handleMouseOut=this.handleMouseOut.bind(this),this.updateComplete.then(()=>{this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)})}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("blur",this.handleBlur,!0),this.removeEventListener("focus",this.handleFocus,!0),this.removeEventListener("click",this.handleClick),this.removeEventListener("keydown",this.handleKeyDown),this.removeEventListener("mouseover",this.handleMouseOver),this.removeEventListener("mouseout",this.handleMouseOut)}async show(){if(!this.open)return this.open=!0,Q(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Q(this,"sl-after-hide")}getTarget(){const t=[...this.children].find(e=>e.tagName.toLowerCase()!=="style"&&e.getAttribute("slot")!=="content");if(!t)throw new Error("Invalid tooltip target: no child element was found.");return t}handleBlur(){this.hasTrigger("focus")&&this.hide()}handleClick(){this.hasTrigger("click")&&(this.open?this.hide():this.show())}handleFocus(){this.hasTrigger("focus")&&this.show()}handleKeyDown(t){this.open&&t.key==="Escape"&&(t.stopPropagation(),this.hide())}handleMouseOver(){if(this.hasTrigger("hover")){const t=vo(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),t)}}handleMouseOut(){if(this.hasTrigger("hover")){const t=vo(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),t)}}async handleOpenChange(){if(this.open){if(this.disabled)return;this.emit("sl-show"),await q(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=U(this,"tooltip.show",{dir:this.localize.dir()});await I(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),await q(this.body);const{keyframes:t,options:e}=U(this,"tooltip.hide",{dir:this.localize.dir()});await I(this.popup.popup,t,e),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}hasTrigger(t){return this.trigger.split(" ").includes(t)}render(){return y`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${O({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
      >
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-hidden=${this.open?"false":"true"}>
          <slot name="content" aria-live=${this.open?"polite":"off"}> ${this.content} </slot>
        </div>
      </sl-popup>
    `}};H.styles=ur;s([x("slot:not([name])")],H.prototype,"defaultSlot",2);s([x(".tooltip__body")],H.prototype,"body",2);s([x("sl-popup")],H.prototype,"popup",2);s([c()],H.prototype,"content",2);s([c()],H.prototype,"placement",2);s([c({type:Boolean,reflect:!0})],H.prototype,"disabled",2);s([c({type:Number})],H.prototype,"distance",2);s([c({type:Boolean,reflect:!0})],H.prototype,"open",2);s([c({type:Number})],H.prototype,"skidding",2);s([c()],H.prototype,"trigger",2);s([c({type:Boolean})],H.prototype,"hoist",2);s([_("open",{waitUntilFirstUpdate:!0})],H.prototype,"handleOpenChange",1);s([_("content"),_("distance"),_("hoist"),_("placement"),_("skidding")],H.prototype,"handleOptionsChange",1);s([_("disabled")],H.prototype,"handleDisabledChange",1);H=s([P("sl-tooltip")],H);T("tooltip.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:150,easing:"ease"}});T("tooltip.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:150,easing:"ease"}});var hr=S`
  ${B}

  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    transform: rotate(45deg);
    background: var(--arrow-color);
    z-index: -1;
  }
`;function Bt(t){return t.split("-")[0]}function Qt(t){return t.split("-")[1]}function te(t){return["top","bottom"].includes(Bt(t))?"x":"y"}function Ze(t){return t==="y"?"height":"width"}function ko(t,e,o){let{reference:i,floating:r}=t;const a=i.x+i.width/2-r.width/2,l=i.y+i.height/2-r.height/2,n=te(e),d=Ze(n),u=i[d]/2-r[d]/2,p=n==="x";let h;switch(Bt(e)){case"top":h={x:a,y:i.y-r.height};break;case"bottom":h={x:a,y:i.y+i.height};break;case"right":h={x:i.x+i.width,y:l};break;case"left":h={x:i.x-r.width,y:l};break;default:h={x:i.x,y:i.y}}switch(Qt(e)){case"start":h[n]-=u*(o&&p?-1:1);break;case"end":h[n]+=u*(o&&p?-1:1)}return h}var pr=async(t,e,o)=>{const{placement:i="bottom",strategy:r="absolute",middleware:a=[],platform:l}=o,n=await(l.isRTL==null?void 0:l.isRTL(e));let d=await l.getElementRects({reference:t,floating:e,strategy:r}),{x:u,y:p}=ko(d,i,n),h=i,f={},m=0;for(let b=0;b<a.length;b++){const{name:w,fn:z}=a[b],{x:L,y:Y,data:R,reset:V}=await z({x:u,y:p,initialPlacement:i,placement:h,strategy:r,middlewareData:f,rects:d,platform:l,elements:{reference:t,floating:e}});u=L??u,p=Y??p,f=J(F({},f),{[w]:F(F({},f[w]),R)}),V&&m<=50&&(m++,typeof V=="object"&&(V.placement&&(h=V.placement),V.rects&&(d=V.rects===!0?await l.getElementRects({reference:t,floating:e,strategy:r}):V.rects),{x:u,y:p}=ko(d,h,n)),b=-1)}return{x:u,y:p,placement:h,strategy:r,middlewareData:f}};function ti(t){return typeof t!="number"?function(e){return F({top:0,right:0,bottom:0,left:0},e)}(t):{top:t,right:t,bottom:t,left:t}}function he(t){return J(F({},t),{top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height})}async function Je(t,e){var o;e===void 0&&(e={});const{x:i,y:r,platform:a,rects:l,elements:n,strategy:d}=t,{boundary:u="clippingAncestors",rootBoundary:p="viewport",elementContext:h="floating",altBoundary:f=!1,padding:m=0}=e,b=ti(m),w=n[f?h==="floating"?"reference":"floating":h],z=he(await a.getClippingRect({element:(o=await(a.isElement==null?void 0:a.isElement(w)))==null||o?w:w.contextElement||await(a.getDocumentElement==null?void 0:a.getDocumentElement(n.floating)),boundary:u,rootBoundary:p,strategy:d})),L=he(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({rect:h==="floating"?J(F({},l.floating),{x:i,y:r}):l.reference,offsetParent:await(a.getOffsetParent==null?void 0:a.getOffsetParent(n.floating)),strategy:d}):l[h]);return{top:z.top-L.top+b.top,bottom:L.bottom-z.bottom+b.bottom,left:z.left-L.left+b.left,right:L.right-z.right+b.right}}var fr=Math.min,wt=Math.max;function He(t,e,o){return wt(t,fr(e,o))}var mr=t=>({name:"arrow",options:t,async fn(e){const{element:o,padding:i=0}=t??{},{x:r,y:a,placement:l,rects:n,platform:d}=e;if(o==null)return{};const u=ti(i),p={x:r,y:a},h=te(l),f=Qt(l),m=Ze(h),b=await d.getDimensions(o),w=h==="y"?"top":"left",z=h==="y"?"bottom":"right",L=n.reference[m]+n.reference[h]-p[h]-n.floating[m],Y=p[h]-n.reference[h],R=await(d.getOffsetParent==null?void 0:d.getOffsetParent(o));let V=R?h==="y"?R.clientHeight||0:R.clientWidth||0:0;V===0&&(V=n.floating[m]);const kt=L/2-Y/2,$t=u[w],Ot=V-b[m]-u[z],lt=V/2-b[m]/2+kt,X=He($t,lt,Ot),nt=(f==="start"?u[w]:u[z])>0&&lt!==X&&n.reference[m]<=n.floating[m];return{[h]:p[h]-(nt?lt<$t?$t-lt:Ot-lt:0),data:{[h]:X,centerOffset:lt-X}}}}),gr={left:"right",right:"left",bottom:"top",top:"bottom"};function pe(t){return t.replace(/left|right|bottom|top/g,e=>gr[e])}function br(t,e,o){o===void 0&&(o=!1);const i=Qt(t),r=te(t),a=Ze(r);let l=r==="x"?i===(o?"end":"start")?"right":"left":i==="start"?"bottom":"top";return e.reference[a]>e.floating[a]&&(l=pe(l)),{main:l,cross:pe(l)}}var vr={start:"end",end:"start"};function $o(t){return t.replace(/start|end/g,e=>vr[e])}var yr=["top","right","bottom","left"];yr.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]);var wr=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;const{placement:i,middlewareData:r,rects:a,initialPlacement:l,platform:n,elements:d}=e,u=t,{mainAxis:p=!0,crossAxis:h=!0,fallbackPlacements:f,fallbackStrategy:m="bestFit",flipAlignment:b=!0}=u,w=je(u,["mainAxis","crossAxis","fallbackPlacements","fallbackStrategy","flipAlignment"]),z=Bt(i),L=f||(z===l||!b?[pe(l)]:function(X){const nt=pe(X);return[$o(X),nt,$o(nt)]}(l)),Y=[l,...L],R=await Je(e,w),V=[];let kt=((o=r.flip)==null?void 0:o.overflows)||[];if(p&&V.push(R[z]),h){const{main:X,cross:nt}=br(i,a,await(n.isRTL==null?void 0:n.isRTL(d.floating)));V.push(R[X],R[nt])}if(kt=[...kt,{placement:i,overflows:V}],!V.every(X=>X<=0)){var $t,Ot;const X=(($t=(Ot=r.flip)==null?void 0:Ot.index)!=null?$t:0)+1,nt=Y[X];if(nt)return{data:{index:X,overflows:kt},reset:{placement:nt}};let ie="bottom";switch(m){case"bestFit":{var lt;const eo=(lt=kt.map(re=>[re,re.overflows.filter(Rt=>Rt>0).reduce((Rt,ui)=>Rt+ui,0)]).sort((re,Rt)=>re[1]-Rt[1])[0])==null?void 0:lt[0].placement;eo&&(ie=eo);break}case"initialPlacement":ie=l}if(i!==ie)return{reset:{placement:ie}}}return{}}}},_r=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:i}=e,r=await async function(a,l){const{placement:n,platform:d,elements:u}=a,p=await(d.isRTL==null?void 0:d.isRTL(u.floating)),h=Bt(n),f=Qt(n),m=te(n)==="x",b=["left","top"].includes(h)?-1:1,w=p&&m?-1:1,z=typeof l=="function"?l(a):l;let{mainAxis:L,crossAxis:Y,alignmentAxis:R}=typeof z=="number"?{mainAxis:z,crossAxis:0,alignmentAxis:null}:F({mainAxis:0,crossAxis:0,alignmentAxis:null},z);return f&&typeof R=="number"&&(Y=f==="end"?-1*R:R),m?{x:Y*w,y:L*b}:{x:L*b,y:Y*w}}(e,t);return{x:o+r.x,y:i+r.y,data:r}}}};function xr(t){return t==="x"?"y":"x"}var kr=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:i,placement:r}=e,a=t,{mainAxis:l=!0,crossAxis:n=!1,limiter:d={fn:L=>{let{x:Y,y:R}=L;return{x:Y,y:R}}}}=a,u=je(a,["mainAxis","crossAxis","limiter"]),p={x:o,y:i},h=await Je(e,u),f=te(Bt(r)),m=xr(f);let b=p[f],w=p[m];if(l){const L=f==="y"?"bottom":"right";b=He(b+h[f==="y"?"top":"left"],b,b-h[L])}if(n){const L=m==="y"?"bottom":"right";w=He(w+h[m==="y"?"top":"left"],w,w-h[L])}const z=d.fn(J(F({},e),{[f]:b,[m]:w}));return J(F({},z),{data:{x:z.x-o,y:z.y-i}})}}},Co=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:o,rects:i,platform:r,elements:a}=e,l=t,{apply:n=()=>{}}=l,d=je(l,["apply"]),u=await Je(e,d),p=Bt(o),h=Qt(o);let f,m;p==="top"||p==="bottom"?(f=p,m=h===(await(r.isRTL==null?void 0:r.isRTL(a.floating))?"start":"end")?"left":"right"):(m=p,f=h==="end"?"top":"bottom");const b=wt(u.left,0),w=wt(u.right,0),z=wt(u.top,0),L=wt(u.bottom,0),Y={availableHeight:i.floating.height-(["left","right"].includes(o)?2*(z!==0||L!==0?z+L:wt(u.top,u.bottom)):u[f]),availableWidth:i.floating.width-(["top","bottom"].includes(o)?2*(b!==0||w!==0?b+w:wt(u.left,u.right)):u[m])};await n(F(F({},e),Y));const R=await r.getDimensions(a.floating);return i.floating.width!==R.width||i.floating.height!==R.height?{reset:{rects:!0}}:{}}}};function ei(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function pt(t){if(t==null)return window;if(!ei(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function ee(t){return pt(t).getComputedStyle(t)}function ct(t){return ei(t)?"":t?(t.nodeName||"").toLowerCase():""}function oi(){const t=navigator.userAgentData;return t!=null&&t.brands?t.brands.map(e=>e.brand+"/"+e.version).join(" "):navigator.userAgent}function it(t){return t instanceof pt(t).HTMLElement}function bt(t){return t instanceof pt(t).Element}function Qe(t){return typeof ShadowRoot>"u"?!1:t instanceof pt(t).ShadowRoot||t instanceof ShadowRoot}function ke(t){const{overflow:e,overflowX:o,overflowY:i}=ee(t);return/auto|scroll|overlay|hidden/.test(e+i+o)}function $r(t){return["table","td","th"].includes(ct(t))}function Ao(t){const e=/firefox/i.test(oi()),o=ee(t);return o.transform!=="none"||o.perspective!=="none"||o.contain==="paint"||["transform","perspective"].includes(o.willChange)||e&&o.willChange==="filter"||e&&!!o.filter&&o.filter!=="none"}function ii(){return!/^((?!chrome|android).)*safari/i.test(oi())}var So=Math.min,jt=Math.max,fe=Math.round;function dt(t,e,o){var i,r,a,l;e===void 0&&(e=!1),o===void 0&&(o=!1);const n=t.getBoundingClientRect();let d=1,u=1;e&&it(t)&&(d=t.offsetWidth>0&&fe(n.width)/t.offsetWidth||1,u=t.offsetHeight>0&&fe(n.height)/t.offsetHeight||1);const p=bt(t)?pt(t):window,h=!ii()&&o,f=(n.left+(h&&(i=(r=p.visualViewport)==null?void 0:r.offsetLeft)!=null?i:0))/d,m=(n.top+(h&&(a=(l=p.visualViewport)==null?void 0:l.offsetTop)!=null?a:0))/u,b=n.width/d,w=n.height/u;return{width:b,height:w,top:m,right:f+b,bottom:m+w,left:f,x:f,y:m}}function gt(t){return(e=t,(e instanceof pt(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function $e(t){return bt(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ri(t){return dt(gt(t)).left+$e(t).scrollLeft}function Cr(t,e,o){const i=it(e),r=gt(e),a=dt(t,i&&function(d){const u=dt(d);return fe(u.width)!==d.offsetWidth||fe(u.height)!==d.offsetHeight}(e),o==="fixed");let l={scrollLeft:0,scrollTop:0};const n={x:0,y:0};if(i||!i&&o!=="fixed")if((ct(e)!=="body"||ke(r))&&(l=$e(e)),it(e)){const d=dt(e,!0);n.x=d.x+e.clientLeft,n.y=d.y+e.clientTop}else r&&(n.x=ri(r));return{x:a.left+l.scrollLeft-n.x,y:a.top+l.scrollTop-n.y,width:a.width,height:a.height}}function si(t){return ct(t)==="html"?t:t.assignedSlot||t.parentNode||(Qe(t)?t.host:null)||gt(t)}function Eo(t){return it(t)&&getComputedStyle(t).position!=="fixed"?t.offsetParent:null}function Ne(t){const e=pt(t);let o=Eo(t);for(;o&&$r(o)&&getComputedStyle(o).position==="static";)o=Eo(o);return o&&(ct(o)==="html"||ct(o)==="body"&&getComputedStyle(o).position==="static"&&!Ao(o))?e:o||function(i){let r=si(i);for(Qe(r)&&(r=r.host);it(r)&&!["html","body"].includes(ct(r));){if(Ao(r))return r;r=r.parentNode}return null}(t)||e}function To(t){if(it(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=dt(t);return{width:e.width,height:e.height}}function ai(t){const e=si(t);return["html","body","#document"].includes(ct(e))?t.ownerDocument.body:it(e)&&ke(e)?e:ai(e)}function me(t,e){var o;e===void 0&&(e=[]);const i=ai(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),a=pt(i),l=r?[a].concat(a.visualViewport||[],ke(i)?i:[]):i,n=e.concat(l);return r?n:n.concat(me(l))}function zo(t,e,o){return e==="viewport"?he(function(i,r){const a=pt(i),l=gt(i),n=a.visualViewport;let d=l.clientWidth,u=l.clientHeight,p=0,h=0;if(n){d=n.width,u=n.height;const f=ii();(f||!f&&r==="fixed")&&(p=n.offsetLeft,h=n.offsetTop)}return{width:d,height:u,x:p,y:h}}(t,o)):bt(e)?function(i,r){const a=dt(i,!1,r==="fixed"),l=a.top+i.clientTop,n=a.left+i.clientLeft;return{top:l,left:n,x:n,y:l,right:n+i.clientWidth,bottom:l+i.clientHeight,width:i.clientWidth,height:i.clientHeight}}(e,o):he(function(i){var r;const a=gt(i),l=$e(i),n=(r=i.ownerDocument)==null?void 0:r.body,d=jt(a.scrollWidth,a.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),u=jt(a.scrollHeight,a.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0);let p=-l.scrollLeft+ri(i);const h=-l.scrollTop;return ee(n||a).direction==="rtl"&&(p+=jt(a.clientWidth,n?n.clientWidth:0)-d),{width:d,height:u,x:p,y:h}}(gt(t)))}function Ar(t){const e=me(t),o=["absolute","fixed"].includes(ee(t).position)&&it(t)?Ne(t):t;return bt(o)?e.filter(i=>bt(i)&&function(r,a){const l=a.getRootNode==null?void 0:a.getRootNode();if(r.contains(a))return!0;if(l&&Qe(l)){let n=a;do{if(n&&r===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(i,o)&&ct(i)!=="body"):[]}var Sr={getClippingRect:function(t){let{element:e,boundary:o,rootBoundary:i,strategy:r}=t;const a=[...o==="clippingAncestors"?Ar(e):[].concat(o),i],l=a[0],n=a.reduce((d,u)=>{const p=zo(e,u,r);return d.top=jt(p.top,d.top),d.right=So(p.right,d.right),d.bottom=So(p.bottom,d.bottom),d.left=jt(p.left,d.left),d},zo(e,l,r));return{width:n.right-n.left,height:n.bottom-n.top,x:n.left,y:n.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:o,strategy:i}=t;const r=it(o),a=gt(o);if(o===a)return e;let l={scrollLeft:0,scrollTop:0};const n={x:0,y:0};if((r||!r&&i!=="fixed")&&((ct(o)!=="body"||ke(a))&&(l=$e(o)),it(o))){const d=dt(o,!0);n.x=d.x+o.clientLeft,n.y=d.y+o.clientTop}return J(F({},e),{x:e.x-l.scrollLeft+n.x,y:e.y-l.scrollTop+n.y})},isElement:bt,getDimensions:To,getOffsetParent:Ne,getDocumentElement:gt,getElementRects:t=>{let{reference:e,floating:o,strategy:i}=t;return{reference:Cr(e,Ne(o),i),floating:J(F({},To(o)),{x:0,y:0})}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>ee(t).direction==="rtl"};function Er(t,e,o,i){i===void 0&&(i={});const{ancestorScroll:r=!0,ancestorResize:a=!0,elementResize:l=!0,animationFrame:n=!1}=i,d=r&&!n,u=a&&!n,p=d||u?[...bt(t)?me(t):[],...me(e)]:[];p.forEach(b=>{d&&b.addEventListener("scroll",o,{passive:!0}),u&&b.addEventListener("resize",o)});let h,f=null;if(l){let b=!0;f=new ResizeObserver(()=>{b||o(),b=!1}),bt(t)&&!n&&f.observe(t),f.observe(e)}let m=n?dt(t):null;return n&&function b(){const w=dt(t);!m||w.x===m.x&&w.y===m.y&&w.width===m.width&&w.height===m.height||o(),m=w,h=requestAnimationFrame(b)}(),o(),()=>{var b;p.forEach(w=>{d&&w.removeEventListener("scroll",o),u&&w.removeEventListener("resize",o)}),(b=f)==null||b.disconnect(),f=null,n&&cancelAnimationFrame(h)}}var Tr=(t,e,o)=>pr(t,e,F({platform:Sr},o)),C=class extends E{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="initial",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){this.stop()}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const t=this.getRootNode();this.anchorEl=t.getElementById(this.anchor)}else this.anchor instanceof HTMLElement?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');if(this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),!this.anchorEl)throw new Error("Invalid anchor element: no anchor could be found using the anchor slot or the anchor attribute.");this.start()}start(){this.anchorEl&&(this.cleanup=Er(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(t=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>t())):t()})}async updated(t){super.updated(t),t.has("active")&&(this.active?this.start():this.stop()),t.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}reposition(){if(!this.active||!this.anchorEl)return;const t=[_r({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?t.push(Co({apply:({rects:e})=>{const o=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${e.reference.width}px`:"",this.popup.style.height=i?`${e.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&t.push(wr({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&t.push(kr({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?t.push(Co({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${e}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&t.push(mr({element:this.arrowEl,padding:this.arrowPadding})),Tr(this.anchorEl,this.popup,{placement:this.placement,middleware:t,strategy:this.strategy}).then(({x:e,y:o,middlewareData:i,placement:r})=>{const a=getComputedStyle(this).direction==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${e}px`,top:`${o}px`}),this.arrow){const n=i.arrow.x,d=i.arrow.y;let u="",p="",h="",f="";if(this.arrowPlacement==="start"){const m=typeof n=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";u=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=a?m:"",f=a?"":m}else if(this.arrowPlacement==="end"){const m=typeof n=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=a?"":m,f=a?m:"",h=typeof d=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(f=typeof n=="number"?"calc(50% - var(--arrow-size-diagonal))":"",u=typeof d=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(f=typeof n=="number"?`${n}px`:"",u=typeof d=="number"?`${d}px`:"");Object.assign(this.arrowEl.style,{top:u,right:p,bottom:h,left:f,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),this.emit("sl-reposition")}render(){return y`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <div
        part="popup"
        class=${O({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?y`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};C.styles=hr;s([x(".popup")],C.prototype,"popup",2);s([x(".popup__arrow")],C.prototype,"arrowEl",2);s([c()],C.prototype,"anchor",2);s([c({type:Boolean,reflect:!0})],C.prototype,"active",2);s([c({reflect:!0})],C.prototype,"placement",2);s([c({reflect:!0})],C.prototype,"strategy",2);s([c({type:Number})],C.prototype,"distance",2);s([c({type:Number})],C.prototype,"skidding",2);s([c({type:Boolean})],C.prototype,"arrow",2);s([c({attribute:"arrow-placement"})],C.prototype,"arrowPlacement",2);s([c({attribute:"arrow-padding",type:Number})],C.prototype,"arrowPadding",2);s([c({type:Boolean})],C.prototype,"flip",2);s([c({attribute:"flip-fallback-placements",converter:{fromAttribute:t=>t.split(" ").map(e=>e.trim()).filter(e=>e!==""),toAttribute:t=>t.join(" ")}})],C.prototype,"flipFallbackPlacements",2);s([c({attribute:"flip-fallback-strategy"})],C.prototype,"flipFallbackStrategy",2);s([c({type:Object})],C.prototype,"flipBoundary",2);s([c({attribute:"flip-padding",type:Number})],C.prototype,"flipPadding",2);s([c({type:Boolean})],C.prototype,"shift",2);s([c({type:Object})],C.prototype,"shiftBoundary",2);s([c({attribute:"shift-padding",type:Number})],C.prototype,"shiftPadding",2);s([c({attribute:"auto-size"})],C.prototype,"autoSize",2);s([c()],C.prototype,"sync",2);s([c({type:Object})],C.prototype,"autoSizeBoundary",2);s([c({attribute:"auto-size-padding",type:Number})],C.prototype,"autoSizePadding",2);C=s([P("sl-popup")],C);var zr=S`
  ${B}

  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio__icon {
    display: inline-flex;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
  }

  .radio__icon svg {
    width: 100%;
    height: 100%;
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--sl-toggle-size);
    height: var(--sl-toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition: var(--sl-transition-fast) border-color, var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color, var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    color: var(--sl-input-label-color);
    line-height: var(--sl-toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
  }
`,ht=class extends E{constructor(){super(...arguments),this.checked=!1,this.hasFocus=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setInitialAttributes(),this.addEventListeners()}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false"),this.setAttribute("tabindex",this.checked?"0":"-1")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleClick(){this.disabled||(this.checked=!0)}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}addEventListeners(){this.addEventListener("blur",()=>this.handleBlur()),this.addEventListener("click",()=>this.handleClick()),this.addEventListener("focus",()=>this.handleFocus())}setInitialAttributes(){this.setAttribute("role","radio"),this.setAttribute("tabindex","-1"),this.setAttribute("aria-disabled",this.disabled?"true":"false")}render(){return y`
      <span
        part="base"
        class=${O({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus})}
      >
        <span part="control" class="radio__control">
          <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g fill="currentColor">
                <circle cx="8" cy="8" r="3.42857143"></circle>
              </g>
            </g>
          </svg>
        </span>

        <span part="label" class="radio__label">
          <slot></slot>
        </span>
      </span>
    `}};ht.styles=zr;s([N()],ht.prototype,"checked",2);s([N()],ht.prototype,"hasFocus",2);s([c()],ht.prototype,"value",2);s([c({type:Boolean,reflect:!0})],ht.prototype,"disabled",2);s([_("checked")],ht.prototype,"handleCheckedChange",1);s([_("disabled",{waitUntilFirstUpdate:!0})],ht.prototype,"handleDisabledChange",1);ht=s([P("sl-radio")],ht);var Lr=S`
  ${B}

  :host {
    display: block;
  }

  .radio-group {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-large);
    padding-top: var(--sl-spacing-x-small);
  }

  .radio-group .radio-group__label {
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-color);
    padding: 0 var(--sl-spacing-2x-small);
  }

  ::slotted(sl-radio:not(:last-of-type)) {
    margin-bottom: var(--sl-spacing-2x-small);
  }

  .radio-group:not(.radio-group--has-fieldset) {
    border: none;
    padding: 0;
    margin: 0;
    min-width: 0;
  }

  .radio-group:not(.radio-group--has-fieldset) .radio-group__label {
    position: absolute;
    width: 0;
    height: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,K=class extends E{constructor(){super(...arguments),this.formSubmitController=new Pt(this,{defaultValue:t=>t.defaultValue}),this.hasButtonGroup=!1,this.errorMessage="",this.customErrorMessage="",this.defaultValue="",this.label="",this.value="",this.name="option",this.invalid=!1,this.fieldset=!1,this.required=!1}handleValueChange(){this.hasUpdated&&(this.emit("sl-change"),this.updateCheckedRadio())}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}setCustomValidity(t=""){this.customErrorMessage=t,this.errorMessage=t,t?(this.invalid=!0,this.input.setCustomValidity(t)):this.invalid=!1}get validity(){const t=!(this.value&&this.required||!this.required),e=this.customErrorMessage!=="";return{badInput:!1,customError:e,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!(t||e),valueMissing:!t}}reportValidity(){const t=this.validity;return this.errorMessage=this.customErrorMessage||t.valid?"":this.input.validationMessage,this.invalid=!t.valid,t.valid||this.showNativeErrorMessage(),!this.invalid}getAllRadios(){return[...this.querySelectorAll("sl-radio, sl-radio-button")]}handleRadioClick(t){const e=t.target;if(e.disabled)return;this.value=e.value,this.getAllRadios().forEach(i=>i.checked=i===e)}handleKeyDown(t){var e;if(!["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(t.key))return;const o=this.getAllRadios().filter(l=>!l.disabled),i=(e=o.find(l=>l.checked))!=null?e:o[0],r=t.key===" "?0:["ArrowUp","ArrowLeft"].includes(t.key)?-1:1;let a=o.indexOf(i)+r;a<0&&(a=o.length-1),a>o.length-1&&(a=0),this.getAllRadios().forEach(l=>{l.checked=!1,this.hasButtonGroup||(l.tabIndex=-1)}),this.value=o[a].value,o[a].checked=!0,this.hasButtonGroup?o[a].shadowRoot.querySelector("button").focus():(o[a].tabIndex=0,o[a].focus()),t.preventDefault()}handleSlotChange(){var t;const e=this.getAllRadios();if(e.forEach(o=>o.checked=o.value===this.value),this.hasButtonGroup=e.some(o=>o.tagName.toLowerCase()==="sl-radio-button"),!e.some(o=>o.checked))if(this.hasButtonGroup){const o=e[0].shadowRoot.querySelector("button");o.tabIndex=0}else e[0].tabIndex=0;if(this.hasButtonGroup){const o=(t=this.shadowRoot)==null?void 0:t.querySelector("sl-button-group");o&&(o.disableRole=!0)}}showNativeErrorMessage(){this.input.hidden=!1,this.input.reportValidity(),setTimeout(()=>this.input.hidden=!0,1e4)}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value)}render(){const t=y`
      <slot
        @click=${this.handleRadioClick}
        @keydown=${this.handleKeyDown}
        @slotchange=${this.handleSlotChange}
        role="presentation"
      ></slot>
    `;return y`
      <fieldset
        part="base"
        role="radiogroup"
        aria-errormessage="radio-error-message"
        aria-invalid="${this.invalid}"
        class=${O({"radio-group":!0,"radio-group--has-fieldset":this.fieldset,"radio-group--required":this.required})}
      >
        <legend part="label" class="radio-group__label">
          <slot name="label">${this.label}</slot>
        </legend>
        <div class="visually-hidden">
          <div id="radio-error-message" aria-live="assertive">${this.errorMessage}</div>
          <label class="radio-group__validation visually-hidden">
            <input type="text" class="radio-group__validation-input" ?required=${this.required} tabindex="-1" hidden />
          </label>
        </div>
        ${this.hasButtonGroup?y`
              <sl-button-group part="button-group" exportparts="base:button-group__base">
                ${t}
              </sl-button-group>
            `:t}
      </fieldset>
    `}};K.styles=Lr;s([x("slot:not([name])")],K.prototype,"defaultSlot",2);s([x(".radio-group__validation-input")],K.prototype,"input",2);s([N()],K.prototype,"hasButtonGroup",2);s([N()],K.prototype,"errorMessage",2);s([N()],K.prototype,"customErrorMessage",2);s([N()],K.prototype,"defaultValue",2);s([c()],K.prototype,"label",2);s([c({reflect:!0})],K.prototype,"value",2);s([c()],K.prototype,"name",2);s([c({type:Boolean,reflect:!0})],K.prototype,"invalid",2);s([c({type:Boolean,attribute:"fieldset",reflect:!0})],K.prototype,"fieldset",2);s([c({type:Boolean,reflect:!0})],K.prototype,"required",2);s([_("value")],K.prototype,"handleValueChange",1);K=s([P("sl-radio-group")],K);var to=S`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control_label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
  }

  .form-control--has-help-text .form-control__help-text ::slotted(*) {
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }
`,Dr=S`
  ${B}
  ${to}

  :host {
    display: block;
  }

  .select {
    display: block;
  }

  .select::part(panel) {
    overflow: hidden;
  }

  .select__control {
    display: inline-flex;
    align-items: center;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .select::part(panel) {
    border-radius: var(--sl-border-radius-medium);
  }

  /* Standard selects */
  .select--standard .select__control {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    color: var(--sl-input-color);
  }

  .select--standard:not(.select--disabled) .select__control:hover {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
    color: var(--sl-input-color-hover);
  }

  .select--standard.select--focused:not(.select--disabled) .select__control {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
    outline: none;
  }

  .select--standard.select--disabled .select__control {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  /* Filled selects */
  .select--filled .select__control {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__control {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--focused:not(.select--disabled) .select__control {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .select--filled.select--disabled .select__control {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--disabled .select__tags,
  .select--disabled .select__clear {
    pointer-events: none;
  }

  .select__prefix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__label {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    user-select: none;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .select__label::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .select__clear {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    width: 1.25em;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__suffix {
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__icon {
    flex: 0 0 auto;
    display: inline-flex;
    transition: var(--sl-transition-medium) transform ease;
  }

  .select--open .select__icon {
    transform: rotate(-180deg);
  }

  /* Placeholder */
  .select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color);
  }

  .select--disabled.select--placeholder-visible .select__label {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Tags */
  .select__tags {
    display: inline-flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: left;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  /* Hidden input (for form control validation to show) */
  .select__hidden-select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
  }

  /*
   * Size modifiers
   */

  /* Small */
  .select--small .select__control {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
  }

  .select--small .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__label {
    margin: 0 var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__icon {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small .select__tags {
    padding-bottom: 2px;
  }

  .select--small .select__tags sl-tag {
    padding-top: 2px;
  }

  .select--small .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--small.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /* Medium */
  .select--medium .select__control {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
  }

  .select--medium .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__label {
    margin: 0 var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__icon {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium .select__tags {
    padding-bottom: 3px;
  }

  .select--medium .select__tags sl-tag {
    padding-top: 3px;
  }

  .select--medium .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--medium.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /* Large */
  .select--large .select__control {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
  }

  .select--large .select__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__label {
    margin: 0 var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__icon {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large .select__tags {
    padding-bottom: 4px;
  }
  .select--large .select__tags sl-tag {
    padding-top: 4px;
  }

  .select--large .select__tags sl-tag:not(:last-of-type) {
    margin-inline-end: var(--sl-spacing-2x-small);
  }

  .select--large.select--has-tags .select__label {
    margin-inline-start: 0;
  }

  /*
   * Pill modifier
   */
  .select--pill.select--small .select__control {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__control {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__control {
    border-radius: var(--sl-input-height-large);
  }
`,k=class extends E{constructor(){super(...arguments),this.formSubmitController=new Pt(this),this.hasSlotController=new xt(this,"help-text","label"),this.localize=new et(this),this.menuItems=[],this.hasFocus=!1,this.isOpen=!1,this.displayLabel="",this.displayTags=[],this.multiple=!1,this.maxTagsVisible=3,this.disabled=!1,this.name="",this.placeholder="",this.size="medium",this.hoist=!1,this.value="",this.filled=!1,this.pill=!1,this.label="",this.placement="bottom",this.helpText="",this.required=!1,this.clearable=!1,this.invalid=!1,this.defaultValue=""}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.resizeMenu()),this.updateComplete.then(()=>{this.resizeObserver.observe(this),this.syncItemsFromValue()})}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this)}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}getValueAsArray(){return this.multiple&&this.value===""?[]:Array.isArray(this.value)?this.value:[this.value]}focus(t){this.control.focus(t)}blur(){this.control.blur()}handleBlur(){this.isOpen||(this.hasFocus=!1,this.emit("sl-blur"))}handleClearClick(t){t.stopPropagation(),this.value=this.multiple?[]:"",this.emit("sl-clear"),this.syncItemsFromValue()}handleDisabledChange(){this.disabled&&this.isOpen&&this.dropdown.hide(),this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus||(this.hasFocus=!0,this.emit("sl-focus"))}handleKeyDown(t){const e=t.target,o=this.menuItems[0],i=this.menuItems[this.menuItems.length-1];if(e.tagName.toLowerCase()!=="sl-tag"){if(t.key==="Tab"){this.isOpen&&this.dropdown.hide();return}if(["ArrowDown","ArrowUp"].includes(t.key)){if(t.preventDefault(),this.isOpen||this.dropdown.show(),t.key==="ArrowDown"){this.menu.setCurrentItem(o),o.focus();return}if(t.key==="ArrowUp"){this.menu.setCurrentItem(i),i.focus();return}}t.ctrlKey||t.metaKey||!this.isOpen&&t.key.length===1&&(t.stopPropagation(),t.preventDefault(),this.dropdown.show(),this.menu.typeToSelect(t))}}handleLabelClick(){this.focus()}handleMenuSelect(t){const e=t.detail.item;this.multiple?this.value=this.value.includes(e.value)?this.value.filter(o=>o!==e.value):[...this.value,e.value]:this.value=e.value,this.syncItemsFromValue()}handleMenuShow(){this.resizeMenu(),this.isOpen=!0}handleMenuHide(){this.isOpen=!1,this.control.focus()}handleMenuItemLabelChange(){if(!this.multiple){const t=this.menuItems.find(e=>e.value===this.value);this.displayLabel=t?t.getTextLabel():""}}handleMultipleChange(){var t;const e=this.getValueAsArray();this.value=this.multiple?e:(t=e[0])!=null?t:"",this.syncItemsFromValue()}async handleMenuSlotChange(){this.menuItems=[...this.querySelectorAll("sl-menu-item")];const t=[];this.menuItems.forEach(e=>{t.includes(e.value)&&console.error(`Duplicate value found in <sl-select> menu item: '${e.value}'`,e),t.push(e.value)}),await Promise.all(this.menuItems.map(e=>e.render)),this.syncItemsFromValue()}handleTagInteraction(t){t.composedPath().find(i=>i instanceof HTMLElement?i.classList.contains("tag__remove"):!1)&&t.stopPropagation()}async handleValueChange(){this.syncItemsFromValue(),await this.updateComplete,this.invalid=!this.input.checkValidity(),this.emit("sl-change")}resizeMenu(){this.menu.style.width=`${this.control.clientWidth}px`,requestAnimationFrame(()=>this.dropdown.reposition())}syncItemsFromValue(){const t=this.getValueAsArray();if(this.menuItems.forEach(e=>e.checked=t.includes(e.value)),this.multiple){const e=this.menuItems.filter(o=>t.includes(o.value));if(this.displayLabel=e.length>0?e[0].getTextLabel():"",this.displayTags=e.map(o=>y`
          <sl-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button
            "
            variant="neutral"
            size=${this.size}
            ?pill=${this.pill}
            removable
            @click=${this.handleTagInteraction}
            @keydown=${this.handleTagInteraction}
            @sl-remove=${i=>{i.stopPropagation(),this.disabled||(o.checked=!1,this.syncValueFromItems())}}
          >
            ${o.getTextLabel()}
          </sl-tag>
        `),this.maxTagsVisible>0&&this.displayTags.length>this.maxTagsVisible){const o=this.displayTags.length;this.displayLabel="",this.displayTags=this.displayTags.slice(0,this.maxTagsVisible),this.displayTags.push(y`
          <sl-tag
            part="tag"
            exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button
            "
            variant="neutral"
            size=${this.size}
          >
            +${o-this.maxTagsVisible}
          </sl-tag>
        `)}}else{const e=this.menuItems.find(o=>o.value===t[0]);this.displayLabel=e?e.getTextLabel():"",this.displayTags=[]}}syncValueFromItems(){const e=this.menuItems.filter(o=>o.checked).map(o=>o.value);this.multiple?this.value=this.value.filter(o=>e.includes(o)):this.value=e.length>0?e[0]:""}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.multiple?this.value.length>0:this.value!=="",i=this.label?!0:!!t,r=this.helpText?!0:!!e,a=this.clearable&&!this.disabled&&o;return y`
      <div
        part="form-control"
        class=${O({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":i,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${i?"false":"true"}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-dropdown
            part="base"
            .hoist=${this.hoist}
            .placement=${this.placement}
            .stayOpenOnSelect=${this.multiple}
            .containingElement=${this}
            ?disabled=${this.disabled}
            class=${O({select:!0,"select--open":this.isOpen,"select--empty":!this.value,"select--focused":this.hasFocus,"select--clearable":this.clearable,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--standard":!this.filled,"select--filled":this.filled,"select--has-tags":this.multiple&&this.displayTags.length>0,"select--placeholder-visible":this.displayLabel==="","select--small":this.size==="small","select--medium":this.size==="medium","select--large":this.size==="large","select--pill":this.pill,"select--invalid":this.invalid})}
            @sl-show=${this.handleMenuShow}
            @sl-hide=${this.handleMenuHide}
          >
            <div
              part="control"
              slot="trigger"
              id="input"
              class="select__control"
              role="combobox"
              aria-describedby="help-text"
              aria-haspopup="true"
              aria-disabled=${this.disabled?"true":"false"}
              aria-expanded=${this.isOpen?"true":"false"}
              aria-controls="menu"
              tabindex=${this.disabled?"-1":"0"}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            >
              <span part="prefix" class="select__prefix">
                <slot name="prefix"></slot>
              </span>

              <div part="display-label" class="select__label">
                ${this.displayTags.length>0?y` <span part="tags" class="select__tags"> ${this.displayTags} </span> `:this.displayLabel.length>0?this.displayLabel:this.placeholder}
              </div>

              ${a?y`
                    <button
                      part="clear-button"
                      class="select__clear"
                      @click=${this.handleClearClick}
                      aria-label=${this.localize.term("clearEntry")}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}

              <span part="suffix" class="select__suffix">
                <slot name="suffix"></slot>
              </span>

              <span part="icon" class="select__icon" aria-hidden="true">
                <sl-icon name="chevron-down" library="system"></sl-icon>
              </span>

              <!-- The hidden input tricks the browser's built-in validation so it works as expected. We use an input
              instead of a select because, otherwise, iOS will show a list of options during validation. The focus
              handler is used to move focus to the primary control when it's marked invalid.  -->
              <input
                class="select__hidden-select"
                aria-hidden="true"
                ?required=${this.required}
                .value=${o?"1":""}
                tabindex="-1"
                @focus=${()=>this.control.focus()}
              />
            </div>

            <sl-menu part="menu" id="menu" class="select__menu" @sl-select=${this.handleMenuSelect}>
              <slot @slotchange=${this.handleMenuSlotChange} @sl-label-change=${this.handleMenuItemLabelChange}></slot>
            </sl-menu>
          </sl-dropdown>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};k.styles=Dr;s([x(".select")],k.prototype,"dropdown",2);s([x(".select__control")],k.prototype,"control",2);s([x(".select__hidden-select")],k.prototype,"input",2);s([x(".select__menu")],k.prototype,"menu",2);s([N()],k.prototype,"hasFocus",2);s([N()],k.prototype,"isOpen",2);s([N()],k.prototype,"displayLabel",2);s([N()],k.prototype,"displayTags",2);s([c({type:Boolean,reflect:!0})],k.prototype,"multiple",2);s([c({attribute:"max-tags-visible",type:Number})],k.prototype,"maxTagsVisible",2);s([c({type:Boolean,reflect:!0})],k.prototype,"disabled",2);s([c()],k.prototype,"name",2);s([c()],k.prototype,"placeholder",2);s([c()],k.prototype,"size",2);s([c({type:Boolean})],k.prototype,"hoist",2);s([c()],k.prototype,"value",2);s([c({type:Boolean,reflect:!0})],k.prototype,"filled",2);s([c({type:Boolean,reflect:!0})],k.prototype,"pill",2);s([c()],k.prototype,"label",2);s([c()],k.prototype,"placement",2);s([c({attribute:"help-text"})],k.prototype,"helpText",2);s([c({type:Boolean,reflect:!0})],k.prototype,"required",2);s([c({type:Boolean})],k.prototype,"clearable",2);s([c({type:Boolean,reflect:!0})],k.prototype,"invalid",2);s([xe()],k.prototype,"defaultValue",2);s([_("disabled",{waitUntilFirstUpdate:!0})],k.prototype,"handleDisabledChange",1);s([_("multiple")],k.prototype,"handleMultipleChange",1);s([_("value",{waitUntilFirstUpdate:!0})],k.prototype,"handleValueChange",1);k=s([P("sl-select")],k);var Mr=S`
  ${B}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    cursor: default;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--small .tag__remove {
    margin-inline-start: var(--sl-spacing-2x-small);
    margin-right: calc(-1 * var(--sl-spacing-3x-small));
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    font-size: 1.4em;
    margin-inline-start: var(--sl-spacing-2x-small);
    margin-inline-end: calc(-1 * var(--sl-spacing-x-small));
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,_t=class extends E{constructor(){super(...arguments),this.localize=new et(this),this.variant="neutral",this.size="medium",this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit("sl-remove")}render(){return y`
      <span
        part="base"
        class=${O({tag:!0,"tag--primary":this.variant==="primary","tag--success":this.variant==="success","tag--neutral":this.variant==="neutral","tag--warning":this.variant==="warning","tag--danger":this.variant==="danger","tag--text":this.variant==="text","tag--small":this.size==="small","tag--medium":this.size==="medium","tag--large":this.size==="large","tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <span part="content" class="tag__content">
          <slot></slot>
        </span>

        ${this.removable?y`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x"
                library="system"
                label=${this.localize.term("remove")}
                class="tag__remove"
                @click=${this.handleRemoveClick}
              ></sl-icon-button>
            `:""}
      </span>
    `}};_t.styles=Mr;s([c({reflect:!0})],_t.prototype,"variant",2);s([c({reflect:!0})],_t.prototype,"size",2);s([c({type:Boolean,reflect:!0})],_t.prototype,"pill",2);s([c({type:Boolean})],_t.prototype,"removable",2);_t=s([P("sl-tag")],_t);var Fr=S`
  ${B}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,ge=class extends E{constructor(){super(...arguments),this.typeToSelectString=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}getAllItems(t={includeDisabled:!0}){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.getAttribute("role")!=="menuitem"||!t.includeDisabled&&e.disabled))}getCurrentItem(){return this.getAllItems({includeDisabled:!1}).find(t=>t.getAttribute("tabindex")==="0")}setCurrentItem(t){const e=this.getAllItems({includeDisabled:!1}),o=t.disabled?e[0]:t;e.forEach(i=>{i.setAttribute("tabindex",i===o?"0":"-1")})}typeToSelect(t){var e;const o=this.getAllItems({includeDisabled:!1});clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString="",1e3),t.key==="Backspace"?t.metaKey||t.ctrlKey?this.typeToSelectString="":this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=t.key.toLowerCase();for(const i of o){const r=(e=i.shadowRoot)==null?void 0:e.querySelector("slot:not([name])");if(Jo(r).toLowerCase().trim().startsWith(this.typeToSelectString)){this.setCurrentItem(i),i.focus();break}}}handleClick(t){const o=t.target.closest("sl-menu-item");(o==null?void 0:o.disabled)===!1&&this.emit("sl-select",{detail:{item:o}})}handleKeyDown(t){if(t.key==="Enter"){const e=this.getCurrentItem();t.preventDefault(),e==null||e.click()}if(t.key===" "&&t.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(t.key)){const e=this.getAllItems({includeDisabled:!1}),o=this.getCurrentItem();let i=o?e.indexOf(o):0;if(e.length>0){t.preventDefault(),t.key==="ArrowDown"?i++:t.key==="ArrowUp"?i--:t.key==="Home"?i=0:t.key==="End"&&(i=e.length-1),i<0&&(i=e.length-1),i>e.length-1&&(i=0),this.setCurrentItem(e[i]),e[i].focus();return}}this.typeToSelect(t)}handleMouseDown(t){const e=t.target;e.getAttribute("role")==="menuitem"&&this.setCurrentItem(e)}handleSlotChange(){const t=this.getAllItems({includeDisabled:!1});t.length>0&&this.setCurrentItem(t[0])}render(){return y`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};ge.styles=Fr;s([x("slot")],ge.prototype,"defaultSlot",2);ge=s([P("sl-menu")],ge);var Pr=S`
  ${B}

  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    box-shadow: var(--sl-shadow-large);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`;function Lo(t){const e=t.tagName.toLowerCase();return t.getAttribute("tabindex")==="-1"||t.hasAttribute("disabled")||t.hasAttribute("aria-disabled")&&t.getAttribute("aria-disabled")!=="false"||e==="input"&&t.getAttribute("type")==="radio"&&!t.hasAttribute("checked")||t.offsetParent===null||window.getComputedStyle(t).visibility==="hidden"?!1:(e==="audio"||e==="video")&&t.hasAttribute("controls")||t.hasAttribute("tabindex")||t.hasAttribute("contenteditable")&&t.getAttribute("contenteditable")!=="false"?!0:["button","input","select","textarea","a","audio","video","summary"].includes(e)}function li(t){var e,o;const i=[];function r(n){n instanceof HTMLElement&&(i.push(n),n.shadowRoot!==null&&n.shadowRoot.mode==="open"&&r(n.shadowRoot)),[...n.children].forEach(d=>r(d))}r(t);const a=(e=i.find(n=>Lo(n)))!=null?e:null,l=(o=i.reverse().find(n=>Lo(n)))!=null?o:null;return{start:a,end:l}}function Br(t,e){return{top:Math.round(t.getBoundingClientRect().top-e.getBoundingClientRect().top),left:Math.round(t.getBoundingClientRect().left-e.getBoundingClientRect().left)}}var qe=new Set;function be(t){qe.add(t),document.body.classList.add("sl-scroll-lock")}function ve(t){qe.delete(t),qe.size===0&&document.body.classList.remove("sl-scroll-lock")}function Or(t,e,o="vertical",i="smooth"){const r=Br(t,e),a=r.top+e.scrollTop,l=r.left+e.scrollLeft,n=e.scrollLeft,d=e.scrollLeft+e.offsetWidth,u=e.scrollTop,p=e.scrollTop+e.offsetHeight;(o==="horizontal"||o==="both")&&(l<n?e.scrollTo({left:l,behavior:i}):l+t.clientWidth>d&&e.scrollTo({left:l-e.offsetWidth+t.clientWidth,behavior:i})),(o==="vertical"||o==="both")&&(a<u?e.scrollTo({top:a,behavior:i}):a+t.clientHeight>p&&e.scrollTo({top:a-e.offsetHeight+t.clientHeight,behavior:i}))}var W=class extends E{constructor(){super(...arguments),this.localize=new et(this),this.open=!1,this.placement="bottom-start",this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1}connectedCallback(){super.connectedCallback(),this.handleMenuItemActivate=this.handleMenuItemActivate.bind(this),this.handlePanelSelect=this.handlePanelSelect.bind(this),this.handleDocumentKeyDown=this.handleDocumentKeyDown.bind(this),this.handleDocumentMouseDown=this.handleDocumentMouseDown.bind(this),this.containingElement||(this.containingElement=this)}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){const e=this.trigger.querySelector("slot").assignedElements({flatten:!0})[0];typeof(e==null?void 0:e.focus)=="function"&&e.focus()}getMenu(){return this.panel.querySelector("slot").assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()==="sl-menu")}handleDocumentKeyDown(t){var e;if(t.key==="Escape"){this.hide(),this.focusOnTrigger();return}if(t.key==="Tab"){if(this.open&&((e=document.activeElement)==null?void 0:e.tagName.toLowerCase())==="sl-menu-item"){t.preventDefault(),this.hide(),this.focusOnTrigger();return}setTimeout(()=>{var o,i,r;const a=((o=this.containingElement)==null?void 0:o.getRootNode())instanceof ShadowRoot?(r=(i=document.activeElement)==null?void 0:i.shadowRoot)==null?void 0:r.activeElement:document.activeElement;(!this.containingElement||(a==null?void 0:a.closest(this.containingElement.tagName.toLowerCase()))!==this.containingElement)&&this.hide()})}}handleDocumentMouseDown(t){const e=t.composedPath();this.containingElement&&!e.includes(this.containingElement)&&this.hide()}handleMenuItemActivate(t){const e=t.target;Or(e,this.panel)}handlePanelSelect(t){const e=t.target;!this.stayOpenOnSelect&&e.tagName.toLowerCase()==="sl-menu"&&(this.hide(),this.focusOnTrigger())}handleTriggerClick(){this.open?this.hide():this.show()}handleTriggerKeyDown(t){if(t.key==="Escape"){this.focusOnTrigger(),this.hide();return}if([" ","Enter"].includes(t.key)){t.preventDefault(),this.handleTriggerClick();return}const e=this.getMenu();if(e){const o=e.defaultSlot.assignedElements({flatten:!0}),i=o[0],r=o[o.length-1];["ArrowDown","ArrowUp","Home","End"].includes(t.key)&&(t.preventDefault(),this.open||this.show(),o.length>0&&requestAnimationFrame(()=>{(t.key==="ArrowDown"||t.key==="Home")&&(e.setCurrentItem(i),i.focus()),(t.key==="ArrowUp"||t.key==="End")&&(e.setCurrentItem(r),r.focus())}));const a=["Tab","Shift","Meta","Ctrl","Alt"];this.open&&!a.includes(t.key)&&e.typeToSelect(t)}}handleTriggerKeyUp(t){t.key===" "&&t.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){const o=this.trigger.querySelector("slot").assignedElements({flatten:!0}).find(r=>li(r).start);let i;if(o){switch(o.tagName.toLowerCase()){case"sl-button":case"sl-icon-button":i=o.button;break;default:i=o}i.setAttribute("aria-haspopup","true"),i.setAttribute("aria-expanded",this.open?"true":"false")}}async show(){if(!this.open)return this.open=!0,Q(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Q(this,"sl-after-hide")}reposition(){this.popup.reposition()}addOpenListeners(){this.panel.addEventListener("sl-activate",this.handleMenuItemActivate),this.panel.addEventListener("sl-select",this.handlePanelSelect),document.addEventListener("keydown",this.handleDocumentKeyDown),document.addEventListener("mousedown",this.handleDocumentMouseDown)}removeOpenListeners(){this.panel.removeEventListener("sl-activate",this.handleMenuItemActivate),this.panel.removeEventListener("sl-select",this.handlePanelSelect),document.removeEventListener("keydown",this.handleDocumentKeyDown),document.removeEventListener("mousedown",this.handleDocumentMouseDown)}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit("sl-show"),this.addOpenListeners(),await q(this),this.panel.hidden=!1,this.popup.active=!0;const{keyframes:t,options:e}=U(this,"dropdown.show",{dir:this.localize.dir()});await I(this.popup.popup,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.removeOpenListeners(),await q(this);const{keyframes:t,options:e}=U(this,"dropdown.hide",{dir:this.localize.dir()});await I(this.popup.popup,t,e),this.panel.hidden=!0,this.popup.active=!1,this.emit("sl-after-hide")}}render(){return y`
      <sl-popup
        part="base"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        class=${O({dropdown:!0,"dropdown--open":this.open})}
      >
        <span
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
        >
          <slot name="trigger" @slotchange=${this.handleTriggerSlotChange}></slot>
        </span>

        <div
          part="panel"
          class="dropdown__panel"
          aria-hidden=${this.open?"false":"true"}
          aria-labelledby="dropdown"
        >
          <slot></slot>
        </div>
      </sl-popup>
    `}};W.styles=Pr;s([x(".dropdown")],W.prototype,"popup",2);s([x(".dropdown__trigger")],W.prototype,"trigger",2);s([x(".dropdown__panel")],W.prototype,"panel",2);s([c({type:Boolean,reflect:!0})],W.prototype,"open",2);s([c({reflect:!0})],W.prototype,"placement",2);s([c({type:Boolean,reflect:!0})],W.prototype,"disabled",2);s([c({attribute:"stay-open-on-select",type:Boolean,reflect:!0})],W.prototype,"stayOpenOnSelect",2);s([c({attribute:!1})],W.prototype,"containingElement",2);s([c({type:Number})],W.prototype,"distance",2);s([c({type:Number})],W.prototype,"skidding",2);s([c({type:Boolean})],W.prototype,"hoist",2);s([_("open",{waitUntilFirstUpdate:!0})],W.prototype,"handleOpenChange",1);W=s([P("sl-dropdown")],W);T("dropdown.show",{keyframes:[{opacity:0,transform:"scale(0.9)"},{opacity:1,transform:"scale(1)"}],options:{duration:100,easing:"ease"}});T("dropdown.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.9)"}],options:{duration:100,easing:"ease"}});var Rr=S`
  ${B}

  :host {
    display: block;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix ::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix ::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'])) .menu-item,
  :host(:focus-visible:not(.sl-focus-invisible):not([aria-disabled='true'])) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }
`,rt=class extends E{constructor(){super(...arguments),this.checked=!1,this.value="",this.disabled=!1}firstUpdated(){this.setAttribute("role","menuitem")}getTextLabel(){return Jo(this.defaultSlot)}handleCheckedChange(){this.setAttribute("aria-checked",this.checked?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleDefaultSlotChange(){const t=this.getTextLabel();if(typeof this.cachedTextLabel>"u"){this.cachedTextLabel=t;return}t!==this.cachedTextLabel&&(this.cachedTextLabel=t,this.emit("sl-label-change"))}render(){return y`
      <div
        part="base"
        class=${O({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check-lg" library="system" aria-hidden="true"></sl-icon>
        </span>

        <span part="prefix" class="menu-item__prefix">
          <slot name="prefix"></slot>
        </span>

        <span part="label" class="menu-item__label">
          <slot @slotchange=${this.handleDefaultSlotChange}></slot>
        </span>

        <span part="suffix" class="menu-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};rt.styles=Rr;s([x("slot:not([name])")],rt.prototype,"defaultSlot",2);s([x(".menu-item")],rt.prototype,"menuItem",2);s([c({type:Boolean,reflect:!0})],rt.prototype,"checked",2);s([c()],rt.prototype,"value",2);s([c({type:Boolean,reflect:!0})],rt.prototype,"disabled",2);s([_("checked")],rt.prototype,"handleCheckedChange",1);s([_("disabled")],rt.prototype,"handleDisabledChange",1);rt=s([P("sl-menu-item")],rt);var Ir=S`
  ${B}
  ${to}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    padding-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    padding-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide Firefox's clear button on date and time inputs */
  .input--is-firefox input[type='date'],
  .input--is-firefox input[type='time'] {
    clip-path: inset(0 2em 0 0);
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,Do,Ur=(Do=navigator.userAgentData)==null?void 0:Do.brands.some(t=>t.brand.includes("Chromium")),Vr=Ur?!1:navigator.userAgent.includes("Firefox"),v=class extends E{constructor(){super(...arguments),this.formSubmitController=new Pt(this),this.hasSlotController=new xt(this,"help-text","label"),this.localize=new et(this),this.hasFocus=!1,this.type="text",this.size="medium",this.value="",this.defaultValue="",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1}get valueAsDate(){var t,e;return(e=(t=this.input)==null?void 0:t.valueAsDate)!=null?e:null}set valueAsDate(t){const e=document.createElement("input");e.type="date",e.valueAsDate=t,this.value=e.value}get valueAsNumber(){var t,e;return(e=(t=this.input)==null?void 0:t.valueAsNumber)!=null?e:parseFloat(this.value)}set valueAsNumber(t){const e=document.createElement("input");e.type="number",e.valueAsNumber=t,this.value=e.value}firstUpdated(){this.invalid=!this.input.checkValidity()}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i="preserve"){this.input.setRangeText(t,e,o,i),this.value!==this.input.value&&(this.value=this.input.value,this.emit("sl-input"),this.emit("sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(t){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),t.stopPropagation()}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleStepChange(){this.input.step=String(this.step),this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleInvalid(){this.invalid=!0}handleKeyDown(t){const e=t.metaKey||t.ctrlKey||t.shiftKey||t.altKey;t.key==="Enter"&&!e&&setTimeout(()=>{t.defaultPrevented||this.formSubmitController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleValueChange(){this.invalid=!this.input.checkValidity()}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e,r=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value=="number"||this.value.length>0);return y`
      <div
        part="form-control"
        class=${O({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${O({input:!0,"input--small":this.size==="small","input--medium":this.size==="medium","input--large":this.size==="large","input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--invalid":this.invalid,"input--no-spin-buttons":this.noSpinButtons,"input--is-firefox":Vr})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type==="password"&&this.passwordVisible?"text":this.type}
              name=${g(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${g(this.placeholder)}
              minlength=${g(this.minlength)}
              maxlength=${g(this.maxlength)}
              min=${g(this.min)}
              max=${g(this.max)}
              step=${g(this.step)}
              .value=${ue(this.value)}
              autocapitalize=${g(this.type==="password"?"off":this.autocapitalize)}
              autocomplete=${g(this.type==="password"?"off":this.autocomplete)}
              autocorrect=${g(this.type==="password"?"off":this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${g(this.spellcheck)}
              pattern=${g(this.pattern)}
              enterkeyhint=${g(this.enterkeyhint)}
              inputmode=${g(this.inputmode)}
              aria-describedby="help-text"
              aria-invalid=${this.invalid?"true":"false"}
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?y`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term("clearEntry")}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:""}
            ${this.passwordToggle&&!this.disabled?y`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?y`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:y`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:""}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};v.styles=Ir;s([x(".input__control")],v.prototype,"input",2);s([N()],v.prototype,"hasFocus",2);s([c({reflect:!0})],v.prototype,"type",2);s([c({reflect:!0})],v.prototype,"size",2);s([c()],v.prototype,"name",2);s([c()],v.prototype,"value",2);s([xe()],v.prototype,"defaultValue",2);s([c({type:Boolean,reflect:!0})],v.prototype,"filled",2);s([c({type:Boolean,reflect:!0})],v.prototype,"pill",2);s([c()],v.prototype,"label",2);s([c({attribute:"help-text"})],v.prototype,"helpText",2);s([c({type:Boolean})],v.prototype,"clearable",2);s([c({attribute:"password-toggle",type:Boolean})],v.prototype,"passwordToggle",2);s([c({attribute:"password-visible",type:Boolean})],v.prototype,"passwordVisible",2);s([c({attribute:"no-spin-buttons",type:Boolean})],v.prototype,"noSpinButtons",2);s([c()],v.prototype,"placeholder",2);s([c({type:Boolean,reflect:!0})],v.prototype,"disabled",2);s([c({type:Boolean,reflect:!0})],v.prototype,"readonly",2);s([c({type:Number})],v.prototype,"minlength",2);s([c({type:Number})],v.prototype,"maxlength",2);s([c()],v.prototype,"min",2);s([c()],v.prototype,"max",2);s([c()],v.prototype,"step",2);s([c()],v.prototype,"pattern",2);s([c({type:Boolean,reflect:!0})],v.prototype,"required",2);s([c({type:Boolean,reflect:!0})],v.prototype,"invalid",2);s([c()],v.prototype,"autocapitalize",2);s([c()],v.prototype,"autocorrect",2);s([c()],v.prototype,"autocomplete",2);s([c({type:Boolean})],v.prototype,"autofocus",2);s([c()],v.prototype,"enterkeyhint",2);s([c({type:Boolean})],v.prototype,"spellcheck",2);s([c()],v.prototype,"inputmode",2);s([_("disabled",{waitUntilFirstUpdate:!0})],v.prototype,"handleDisabledChange",1);s([_("step",{waitUntilFirstUpdate:!0})],v.prototype,"handleStepChange",1);s([_("value",{waitUntilFirstUpdate:!0})],v.prototype,"handleValueChange",1);v=s([P("sl-input")],v);var Hr=S`
  ${B}
  ${to}

  :host {
    display: block;
  }

  .textarea {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
  }
`,$=class extends E{constructor(){super(...arguments),this.formSubmitController=new Pt(this),this.hasSlotController=new xt(this,"help-text","label"),this.hasFocus=!1,this.size="medium",this.value="",this.filled=!1,this.label="",this.helpText="",this.rows=4,this.resize="vertical",this.disabled=!1,this.readonly=!1,this.required=!1,this.invalid=!1,this.defaultValue=""}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.invalid=!this.input.checkValidity()}disconnectedCallback(){super.disconnectedCallback(),this.resizeObserver.unobserve(this.input)}focus(t){this.input.focus(t)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(t){if(t){typeof t.top=="number"&&(this.input.scrollTop=t.top),typeof t.left=="number"&&(this.input.scrollLeft=t.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(t,e,o="none"){this.input.setSelectionRange(t,e,o)}setRangeText(t,e,o,i="preserve"){this.input.setRangeText(t,e,o,i),this.value!==this.input.value&&(this.value=this.input.value,this.emit("sl-input")),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-input"),this.emit("sl-change"))}reportValidity(){return this.input.reportValidity()}setCustomValidity(t){this.input.setCustomValidity(t),this.invalid=!this.input.checkValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit("sl-change")}handleDisabledChange(){this.input.disabled=this.disabled,this.invalid=!this.input.checkValidity()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.emit("sl-input")}handleRowsChange(){this.setTextareaHeight()}handleValueChange(){this.invalid=!this.input.checkValidity(),this.updateComplete.then(()=>this.setTextareaHeight())}setTextareaHeight(){this.resize==="auto"?(this.input.style.height="auto",this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=void 0}render(){const t=this.hasSlotController.test("label"),e=this.hasSlotController.test("help-text"),o=this.label?!0:!!t,i=this.helpText?!0:!!e;return y`
      <div
        part="form-control"
        class=${O({"form-control":!0,"form-control--small":this.size==="small","form-control--medium":this.size==="medium","form-control--large":this.size==="large","form-control--has-label":o,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${o?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${O({textarea:!0,"textarea--small":this.size==="small","textarea--medium":this.size==="medium","textarea--large":this.size==="large","textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--invalid":this.invalid,"textarea--resize-none":this.resize==="none","textarea--resize-vertical":this.resize==="vertical","textarea--resize-auto":this.resize==="auto"})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              name=${g(this.name)}
              .value=${ue(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${g(this.placeholder)}
              rows=${g(this.rows)}
              minlength=${g(this.minlength)}
              maxlength=${g(this.maxlength)}
              autocapitalize=${g(this.autocapitalize)}
              autocorrect=${g(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${g(this.spellcheck)}
              enterkeyhint=${g(this.enterkeyhint)}
              inputmode=${g(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};$.styles=Hr;s([x(".textarea__control")],$.prototype,"input",2);s([N()],$.prototype,"hasFocus",2);s([c({reflect:!0})],$.prototype,"size",2);s([c()],$.prototype,"name",2);s([c()],$.prototype,"value",2);s([c({type:Boolean,reflect:!0})],$.prototype,"filled",2);s([c()],$.prototype,"label",2);s([c({attribute:"help-text"})],$.prototype,"helpText",2);s([c()],$.prototype,"placeholder",2);s([c({type:Number})],$.prototype,"rows",2);s([c()],$.prototype,"resize",2);s([c({type:Boolean,reflect:!0})],$.prototype,"disabled",2);s([c({type:Boolean,reflect:!0})],$.prototype,"readonly",2);s([c({type:Number})],$.prototype,"minlength",2);s([c({type:Number})],$.prototype,"maxlength",2);s([c({type:Boolean,reflect:!0})],$.prototype,"required",2);s([c({type:Boolean,reflect:!0})],$.prototype,"invalid",2);s([c()],$.prototype,"autocapitalize",2);s([c()],$.prototype,"autocorrect",2);s([c()],$.prototype,"autocomplete",2);s([c({type:Boolean})],$.prototype,"autofocus",2);s([c()],$.prototype,"enterkeyhint",2);s([c({type:Boolean})],$.prototype,"spellcheck",2);s([c()],$.prototype,"inputmode",2);s([xe()],$.prototype,"defaultValue",2);s([_("disabled",{waitUntilFirstUpdate:!0})],$.prototype,"handleDisabledChange",1);s([_("rows",{waitUntilFirstUpdate:!0})],$.prototype,"handleRowsChange",1);s([_("value",{waitUntilFirstUpdate:!0})],$.prototype,"handleValueChange",1);$=s([P("sl-textarea")],$);var Nr=S`
  ${B}

  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    transition: var(--sl-transition-medium) transform;
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .drawer__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    position: absolute;
  }
`,Ht=[],ni=class{constructor(t){this.tabDirection="forward",this.element=t,this.handleFocusIn=this.handleFocusIn.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleKeyUp=this.handleKeyUp.bind(this)}activate(){Ht.push(this.element),document.addEventListener("focusin",this.handleFocusIn),document.addEventListener("keydown",this.handleKeyDown),document.addEventListener("keyup",this.handleKeyUp)}deactivate(){Ht=Ht.filter(t=>t!==this.element),document.removeEventListener("focusin",this.handleFocusIn),document.removeEventListener("keydown",this.handleKeyDown),document.removeEventListener("keyup",this.handleKeyUp)}isActive(){return Ht[Ht.length-1]===this.element}checkFocus(){if(this.isActive()&&!this.element.matches(":focus-within")){const{start:t,end:e}=li(this.element),o=this.tabDirection==="forward"?t:e;typeof(o==null?void 0:o.focus)=="function"&&o.focus({preventScroll:!0})}}handleFocusIn(){this.checkFocus()}handleKeyDown(t){t.key==="Tab"&&t.shiftKey&&(this.tabDirection="backward"),requestAnimationFrame(()=>this.checkFocus())}handleKeyUp(){this.tabDirection="forward"}};function Mo(t){return t.charAt(0).toUpperCase()+t.slice(1)}var tt=class extends E{constructor(){super(...arguments),this.hasSlotController=new xt(this,"footer"),this.localize=new et(this),this.open=!1,this.label="",this.placement="end",this.contained=!1,this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new ni(this)}firstUpdated(){this.drawer.hidden=!this.open,this.open&&!this.contained&&(this.modal.activate(),be(this))}disconnectedCallback(){super.disconnectedCallback(),ve(this)}async show(){if(!this.open)return this.open=!0,Q(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Q(this,"sl-after-hide")}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const o=U(this,"drawer.denyClose",{dir:this.localize.dir()});I(this.panel,o.keyframes,o.options);return}this.hide()}handleKeyDown(t){t.key==="Escape"&&(t.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),be(this));const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([q(this.drawer),q(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=U(this,`drawer.show${Mo(this.placement)}`,{dir:this.localize.dir()}),o=U(this,"drawer.overlay.show",{dir:this.localize.dir()});await Promise.all([I(this.panel,e.keyframes,e.options),I(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.modal.deactivate(),ve(this),await Promise.all([q(this.drawer),q(this.overlay)]);const t=U(this,`drawer.hide${Mo(this.placement)}`,{dir:this.localize.dir()}),e=U(this,"drawer.overlay.hide",{dir:this.localize.dir()});await Promise.all([I(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),I(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;const o=this.originalTrigger;typeof(o==null?void 0:o.focus)=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}render(){return y`
      <div
        part="base"
        class=${O({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement==="top","drawer--end":this.placement==="end","drawer--bottom":this.placement==="bottom","drawer--start":this.placement==="start","drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()==="rtl","drawer--has-footer":this.hasSlotController.test("footer")})}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${g(this.noHeader?this.label:void 0)}
          aria-labelledby=${g(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":y`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="drawer__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click=${()=>this.requestClose("close-button")}
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="drawer__body">
            <slot></slot>
          </div>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};tt.styles=Nr;s([x(".drawer")],tt.prototype,"drawer",2);s([x(".drawer__panel")],tt.prototype,"panel",2);s([x(".drawer__overlay")],tt.prototype,"overlay",2);s([c({type:Boolean,reflect:!0})],tt.prototype,"open",2);s([c({reflect:!0})],tt.prototype,"label",2);s([c({reflect:!0})],tt.prototype,"placement",2);s([c({type:Boolean,reflect:!0})],tt.prototype,"contained",2);s([c({attribute:"no-header",type:Boolean,reflect:!0})],tt.prototype,"noHeader",2);s([_("open",{waitUntilFirstUpdate:!0})],tt.prototype,"handleOpenChange",1);tt=s([P("sl-drawer")],tt);T("drawer.showTop",{keyframes:[{opacity:0,transform:"translateY(-100%)"},{opacity:1,transform:"translateY(0)"}],options:{duration:250,easing:"ease"}});T("drawer.hideTop",{keyframes:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(-100%)"}],options:{duration:250,easing:"ease"}});T("drawer.showEnd",{keyframes:[{opacity:0,transform:"translateX(100%)"},{opacity:1,transform:"translateX(0)"}],rtlKeyframes:[{opacity:0,transform:"translateX(-100%)"},{opacity:1,transform:"translateX(0)"}],options:{duration:250,easing:"ease"}});T("drawer.hideEnd",{keyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(100%)"}],rtlKeyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-100%)"}],options:{duration:250,easing:"ease"}});T("drawer.showBottom",{keyframes:[{opacity:0,transform:"translateY(100%)"},{opacity:1,transform:"translateY(0)"}],options:{duration:250,easing:"ease"}});T("drawer.hideBottom",{keyframes:[{opacity:1,transform:"translateY(0)"},{opacity:0,transform:"translateY(100%)"}],options:{duration:250,easing:"ease"}});T("drawer.showStart",{keyframes:[{opacity:0,transform:"translateX(-100%)"},{opacity:1,transform:"translateX(0)"}],rtlKeyframes:[{opacity:0,transform:"translateX(100%)"},{opacity:1,transform:"translateX(0)"}],options:{duration:250,easing:"ease"}});T("drawer.hideStart",{keyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(-100%)"}],rtlKeyframes:[{opacity:1,transform:"translateX(0)"},{opacity:0,transform:"translateX(100%)"}],options:{duration:250,easing:"ease"}});T("drawer.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.01)"},{transform:"scale(1)"}],options:{duration:250}});T("drawer.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});T("drawer.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var qr=S`
  ${B}

  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
    transform: none;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__close {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-x-large);
    padding: 0 var(--header-spacing);
  }

  .dialog__body {
    flex: 1 1 auto;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }
`,st=class extends E{constructor(){super(...arguments),this.hasSlotController=new xt(this,"footer"),this.localize=new et(this),this.open=!1,this.label="",this.noHeader=!1}connectedCallback(){super.connectedCallback(),this.modal=new ni(this)}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.modal.activate(),be(this))}disconnectedCallback(){super.disconnectedCallback(),ve(this)}async show(){if(!this.open)return this.open=!0,Q(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Q(this,"sl-after-hide")}requestClose(t){if(this.emit("sl-request-close",{cancelable:!0,detail:{source:t}}).defaultPrevented){const o=U(this,"dialog.denyClose",{dir:this.localize.dir()});I(this.panel,o.keyframes,o.options);return}this.hide()}handleKeyDown(t){t.key==="Escape"&&(t.stopPropagation(),this.requestClose("keyboard"))}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.originalTrigger=document.activeElement,this.modal.activate(),be(this);const t=this.querySelector("[autofocus]");t&&t.removeAttribute("autofocus"),await Promise.all([q(this.dialog),q(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit("sl-initial-focus",{cancelable:!0}).defaultPrevented||(t?t.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),t&&t.setAttribute("autofocus","")});const e=U(this,"dialog.show",{dir:this.localize.dir()}),o=U(this,"dialog.overlay.show",{dir:this.localize.dir()});await Promise.all([I(this.panel,e.keyframes,e.options),I(this.overlay,o.keyframes,o.options)]),this.emit("sl-after-show")}else{this.emit("sl-hide"),this.modal.deactivate(),await Promise.all([q(this.dialog),q(this.overlay)]);const t=U(this,"dialog.hide",{dir:this.localize.dir()}),e=U(this,"dialog.overlay.hide",{dir:this.localize.dir()});await Promise.all([I(this.overlay,e.keyframes,e.options).then(()=>{this.overlay.hidden=!0}),I(this.panel,t.keyframes,t.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,ve(this);const o=this.originalTrigger;typeof(o==null?void 0:o.focus)=="function"&&setTimeout(()=>o.focus()),this.emit("sl-after-hide")}}render(){return y`
      <div
        part="base"
        class=${O({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test("footer")})}
        @keydown=${this.handleKeyDown}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose("overlay")} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?"false":"true"}
          aria-label=${g(this.noHeader?this.label:void 0)}
          aria-labelledby=${g(this.noHeader?void 0:"title")}
          tabindex="0"
        >
          ${this.noHeader?"":y`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:String.fromCharCode(65279)} </slot>
                  </h2>
                  <sl-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="dialog__close"
                    name="x"
                    label=${this.localize.term("close")}
                    library="system"
                    @click="${()=>this.requestClose("close-button")}"
                  ></sl-icon-button>
                </header>
              `}

          <div part="body" class="dialog__body">
            <slot></slot>
          </div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};st.styles=qr;s([x(".dialog")],st.prototype,"dialog",2);s([x(".dialog__panel")],st.prototype,"panel",2);s([x(".dialog__overlay")],st.prototype,"overlay",2);s([c({type:Boolean,reflect:!0})],st.prototype,"open",2);s([c({reflect:!0})],st.prototype,"label",2);s([c({attribute:"no-header",type:Boolean,reflect:!0})],st.prototype,"noHeader",2);s([_("open",{waitUntilFirstUpdate:!0})],st.prototype,"handleOpenChange",1);st=s([P("sl-dialog")],st);T("dialog.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});T("dialog.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});T("dialog.denyClose",{keyframes:[{transform:"scale(1)"},{transform:"scale(1.02)"},{transform:"scale(1)"}],options:{duration:250}});T("dialog.overlay.show",{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}});T("dialog.overlay.hide",{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}});var Kr=S`
  ${B}

  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--box-shadow);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-end: var(--sl-spacing-medium);
  }
`,Ct=Object.assign(document.createElement("div"),{className:"sl-toast-stack"}),at=class extends E{constructor(){super(...arguments),this.hasSlotController=new xt(this,"icon","suffix"),this.localize=new et(this),this.open=!1,this.closable=!1,this.variant="primary",this.duration=1/0}firstUpdated(){this.base.hidden=!this.open}async show(){if(!this.open)return this.open=!0,Q(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,Q(this,"sl-after-hide")}async toast(){return new Promise(t=>{Ct.parentElement===null&&document.body.append(Ct),Ct.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener("sl-after-hide",()=>{Ct.removeChild(this),t(),Ct.querySelector("sl-alert")===null&&Ct.remove()},{once:!0})})}restartAutoHide(){clearTimeout(this.autoHideTimeout),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration))}handleCloseClick(){this.hide()}handleMouseMove(){this.restartAutoHide()}async handleOpenChange(){if(this.open){this.emit("sl-show"),this.duration<1/0&&this.restartAutoHide(),await q(this.base),this.base.hidden=!1;const{keyframes:t,options:e}=U(this,"alert.show",{dir:this.localize.dir()});await I(this.base,t,e),this.emit("sl-after-show")}else{this.emit("sl-hide"),clearTimeout(this.autoHideTimeout),await q(this.base);const{keyframes:t,options:e}=U(this,"alert.hide",{dir:this.localize.dir()});await I(this.base,t,e),this.base.hidden=!0,this.emit("sl-after-hide")}}handleDurationChange(){this.restartAutoHide()}render(){return y`
      <div
        part="base"
        class=${O({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-icon":this.hasSlotController.test("icon"),"alert--primary":this.variant==="primary","alert--success":this.variant==="success","alert--neutral":this.variant==="neutral","alert--warning":this.variant==="warning","alert--danger":this.variant==="danger"})}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        aria-hidden=${this.open?"false":"true"}
        @mousemove=${this.handleMouseMove}
      >
        <span part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </span>

        <span part="message" class="alert__message">
          <slot></slot>
        </span>

        ${this.closable?y`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x"
                library="system"
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:""}
      </div>
    `}};at.styles=Kr;s([x('[part="base"]')],at.prototype,"base",2);s([c({type:Boolean,reflect:!0})],at.prototype,"open",2);s([c({type:Boolean,reflect:!0})],at.prototype,"closable",2);s([c({reflect:!0})],at.prototype,"variant",2);s([c({type:Number})],at.prototype,"duration",2);s([_("open",{waitUntilFirstUpdate:!0})],at.prototype,"handleOpenChange",1);s([_("duration")],at.prototype,"handleDurationChange",1);at=s([P("sl-alert")],at);T("alert.show",{keyframes:[{opacity:0,transform:"scale(0.8)"},{opacity:1,transform:"scale(1)"}],options:{duration:250,easing:"ease"}});T("alert.hide",{keyframes:[{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.8)"}],options:{duration:250,easing:"ease"}});const jr=t=>({production:"packs",development:"vite-dev",test:"vite-test"})[t];Re(`/${jr("production")}`);const Fo=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Po=["January","February","March","April","May","June","July","August","September","October","November","December"];function yt(t){return`0${t}`.slice(-2)}function Gt(t,e){const o=t.getDay(),i=t.getDate(),r=t.getMonth(),a=t.getFullYear(),l=t.getHours(),n=t.getMinutes(),d=t.getSeconds();return e.replace(/%([%aAbBcdeHIlmMpPSwyYZz])/g,function(u){let p;switch(u[1]){case"%":return"%";case"a":return Fo[o].slice(0,3);case"A":return Fo[o];case"b":return Po[r].slice(0,3);case"B":return Po[r];case"c":return t.toString();case"d":return yt(i);case"e":return String(i);case"H":return yt(l);case"I":return yt(Gt(t,"%l"));case"l":return String(l===0||l===12?12:(l+12)%12);case"m":return yt(r+1);case"M":return yt(n);case"p":return l>11?"PM":"AM";case"P":return l>11?"pm":"am";case"S":return yt(d);case"w":return String(o);case"y":return yt(a%100);case"Y":return String(a);case"Z":return p=t.toString().match(/\((\w+)\)$/),p?p[1]:"";case"z":return p=t.toString().match(/\w([+-]\d\d\d\d) /),p?p[1]:""}return""})}function oe(t){let e;return function(){if(e)return e;if("Intl"in window)try{return e=new Intl.DateTimeFormat(void 0,t),e}catch(o){if(!(o instanceof RangeError))throw o}}}let se=null;const Wr=oe({day:"numeric",month:"short"});function ci(){if(se!==null)return se;const t=Wr();return t?(se=!!t.format(new Date(0)).match(/^\d/),se):!1}let ae=null;const Yr=oe({day:"numeric",month:"short",year:"numeric"});function Xr(){if(ae!==null)return ae;const t=Yr();return t?(ae=!!t.format(new Date(0)).match(/\d,/),ae):!0}function Gr(t){return new Date().getUTCFullYear()===t.getUTCFullYear()}function Zr(t,e){if("Intl"in window&&"RelativeTimeFormat"in window.Intl)try{return new Intl.RelativeTimeFormat(t,e)}catch(o){if(!(o instanceof RangeError))throw o}}function Zt(t){const e=t.closest("[lang]");return e instanceof HTMLElement&&e.lang?e.lang:"default"}const Fe=new WeakMap;class di extends HTMLElement{static get observedAttributes(){return["datetime","day","format","lang","hour","minute","month","second","title","weekday","year","time-zone-name"]}connectedCallback(){const e=this.getFormattedTitle();e&&!this.hasAttribute("title")&&this.setAttribute("title",e);const o=this.getFormattedDate();o&&(this.textContent=o)}attributeChangedCallback(e,o,i){const r=this.getFormattedTitle();if(e==="datetime"){const d=Date.parse(i);isNaN(d)?Fe.delete(this):Fe.set(this,new Date(d))}const a=this.getFormattedTitle(),l=this.getAttribute("title");e!=="title"&&a&&(!l||l===r)&&this.setAttribute("title",a);const n=this.getFormattedDate();n&&(this.textContent=n)}get date(){return Fe.get(this)}getFormattedTitle(){const e=this.date;if(!e)return;const o=Jr();if(o)return o.format(e);try{return e.toLocaleString()}catch(i){if(i instanceof RangeError)return e.toString();throw i}}getFormattedDate(){}}const Jr=oe({day:"numeric",month:"short",year:"numeric",hour:"numeric",minute:"2-digit",timeZoneName:"short"}),Ke=new WeakMap;class Bo extends di{attributeChangedCallback(e,o,i){(e==="hour"||e==="minute"||e==="second"||e==="time-zone-name")&&Ke.delete(this),super.attributeChangedCallback(e,o,i)}getFormattedDate(){const e=this.date;if(!e)return;const o=Qr(this,e)||"",i=ts(this,e)||"";return`${o} ${i}`.trim()}}function Qr(t,e){const o={weekday:{short:"%a",long:"%A"},day:{numeric:"%e","2-digit":"%d"},month:{short:"%b",long:"%B"},year:{numeric:"%Y","2-digit":"%y"}};let i=ci()?"weekday day month year":"weekday month day, year";for(const r in o){const a=o[r][t.getAttribute(r)||""];i=i.replace(r,a||"")}return i=i.replace(/(\s,)|(,\s$)/,""),Gt(e,i).replace(/\s+/," ").trim()}function ts(t,e){const o={},i=t.getAttribute("hour");(i==="numeric"||i==="2-digit")&&(o.hour=i);const r=t.getAttribute("minute");(r==="numeric"||r==="2-digit")&&(o.minute=r);const a=t.getAttribute("second");(a==="numeric"||a==="2-digit")&&(o.second=a);const l=t.getAttribute("time-zone-name");if((l==="short"||l==="long")&&(o.timeZoneName=l),Object.keys(o).length===0)return;let n=Ke.get(t);n||(n=oe(o),Ke.set(t,n));const d=n();if(d)return d.format(e);{const u=o.second?"%H:%M:%S":"%H:%M";return Gt(e,u)}}window.customElements.get("local-time")||(window.LocalTimeElement=Bo,window.customElements.define("local-time",Bo));class Jt{constructor(e,o){this.date=e,this.locale=o}toString(){const e=this.timeElapsed();if(e)return e;{const o=this.timeAhead();return o||`on ${this.formatDate()}`}}timeElapsed(){const e=new Date().getTime()-this.date.getTime(),o=Math.round(e/1e3),i=Math.round(o/60),r=Math.round(i/60),a=Math.round(r/24);return e>=0&&a<30?this.timeAgoFromMs(e):null}timeAhead(){const e=this.date.getTime()-new Date().getTime(),o=Math.round(e/1e3),i=Math.round(o/60),r=Math.round(i/60),a=Math.round(r/24);return e>=0&&a<30?this.timeUntil():null}timeAgo(){const e=new Date().getTime()-this.date.getTime();return this.timeAgoFromMs(e)}timeAgoFromMs(e){const o=Math.round(e/1e3),i=Math.round(o/60),r=Math.round(i/60),a=Math.round(r/24),l=Math.round(a/30),n=Math.round(l/12);return e<0?D(this.locale,0,"second"):o<10?D(this.locale,0,"second"):o<45?D(this.locale,-o,"second"):o<90?D(this.locale,-i,"minute"):i<45?D(this.locale,-i,"minute"):i<90?D(this.locale,-r,"hour"):r<24?D(this.locale,-r,"hour"):r<36?D(this.locale,-a,"day"):a<30?D(this.locale,-a,"day"):l<18?D(this.locale,-l,"month"):D(this.locale,-n,"year")}microTimeAgo(){const e=new Date().getTime()-this.date.getTime(),o=Math.round(e/1e3),i=Math.round(o/60),r=Math.round(i/60),a=Math.round(r/24),l=Math.round(a/30),n=Math.round(l/12);return i<1?"1m":i<60?`${i}m`:r<24?`${r}h`:a<365?`${a}d`:`${n}y`}timeUntil(){const e=this.date.getTime()-new Date().getTime();return this.timeUntilFromMs(e)}timeUntilFromMs(e){const o=Math.round(e/1e3),i=Math.round(o/60),r=Math.round(i/60),a=Math.round(r/24),l=Math.round(a/30),n=Math.round(l/12);return l>=18?D(this.locale,n,"year"):l>=12?D(this.locale,n,"year"):a>=45?D(this.locale,l,"month"):a>=30?D(this.locale,l,"month"):r>=36?D(this.locale,a,"day"):r>=24?D(this.locale,a,"day"):i>=90?D(this.locale,r,"hour"):i>=45?D(this.locale,r,"hour"):o>=90?D(this.locale,i,"minute"):o>=45?D(this.locale,i,"minute"):o>=10?D(this.locale,o,"second"):D(this.locale,0,"second")}microTimeUntil(){const e=this.date.getTime()-new Date().getTime(),o=Math.round(e/1e3),i=Math.round(o/60),r=Math.round(i/60),a=Math.round(r/24),l=Math.round(a/30),n=Math.round(l/12);return a>=365?`${n}y`:r>=24?`${a}d`:i>=60?`${r}h`:i>1?`${i}m`:"1m"}formatDate(){let e=ci()?"%e %b":"%b %e";return Gr(this.date)||(e+=Xr()?", %Y":" %Y"),Gt(this.date,e)}formatTime(){const e=os();return e?e.format(this.date):Gt(this.date,"%l:%M%P")}}function D(t,e,o){const i=Zr(t,{numeric:"auto"});return i?i.format(e,o):es(e,o)}function es(t,e){if(t===0)switch(e){case"year":case"quarter":case"month":case"week":return`this ${e}`;case"day":return"today";case"hour":case"minute":return`in 0 ${e}s`;case"second":return"now"}else if(t===1)switch(e){case"year":case"quarter":case"month":case"week":return`next ${e}`;case"day":return"tomorrow";case"hour":case"minute":case"second":return`in 1 ${e}`}else if(t===-1)switch(e){case"year":case"quarter":case"month":case"week":return`last ${e}`;case"day":return"yesterday";case"hour":case"minute":case"second":return`1 ${e} ago`}else if(t>1)switch(e){case"year":case"quarter":case"month":case"week":case"day":case"hour":case"minute":case"second":return`in ${t} ${e}s`}else if(t<-1)switch(e){case"year":case"quarter":case"month":case"week":case"day":case"hour":case"minute":case"second":return`${-t} ${e}s ago`}throw new RangeError(`Invalid unit argument for format() '${e}'`)}const os=oe({hour:"numeric",minute:"2-digit"});class ye extends di{getFormattedDate(){const e=this.date;if(e)return new Jt(e,Zt(this)).toString()}connectedCallback(){Et.push(this),Nt||(Oo(),Nt=window.setInterval(Oo,60*1e3)),super.connectedCallback()}disconnectedCallback(){const e=Et.indexOf(this);e!==-1&&Et.splice(e,1),Et.length||Nt&&(clearInterval(Nt),Nt=null)}}const Et=[];let Nt;function Oo(){let t,e,o;for(e=0,o=Et.length;e<o;e++)t=Et[e],t.textContent=t.getFormattedDate()||""}window.customElements.get("relative-time")||(window.RelativeTimeElement=ye,window.customElements.define("relative-time",ye));class Ro extends ye{getFormattedDate(){const e=this.getAttribute("format"),o=this.date;if(o)return e==="micro"?new Jt(o,Zt(this)).microTimeAgo():new Jt(o,Zt(this)).timeAgo()}}window.customElements.get("time-ago")||(window.TimeAgoElement=Ro,window.customElements.define("time-ago",Ro));class Io extends ye{getFormattedDate(){const e=this.getAttribute("format"),o=this.date;if(o)return e==="micro"?new Jt(o,Zt(this)).microTimeUntil():new Jt(o,Zt(this)).timeUntil()}}window.customElements.get("time-until")||(window.TimeUntilElement=Io,window.customElements.define("time-until",Io));
//# sourceMappingURL=components.6922995d.js.map
