"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["profile"],{54679:(e,t,n)=>{n.d(t,{H:()=>o,v:()=>i});var r=n(59753);function i(){let e=document.getElementById("ajax-error-message");e&&(e.hidden=!1)}function o(){let e=document.getElementById("ajax-error-message");e&&(e.hidden=!0)}(0,r.on)("deprecatedAjaxError","[data-remote]",function(e){let t=e.detail,{error:n,text:r}=t;e.currentTarget===e.target&&"abort"!==n&&"canceled"!==n&&(/<html/.test(r)?(i(),e.stopImmediatePropagation()):setTimeout(function(){e.defaultPrevented||i()},0))}),(0,r.on)("deprecatedAjaxSend","[data-remote]",function(){o()}),(0,r.on)("click",".js-ajax-error-dismiss",function(){o()})},55240:(e,t,n)=>{n.d(t,{k:()=>a});var r=n(56959),i=n(80721),o=n(36071),s=n(98105);async function a(e){await i.C,c(e)}function l(e,t){e.style.visibility=t?"hidden":"";let n=e.getAttribute("data-tab-item");if(n){let e=document.querySelector(`[data-menu-item=${n}]`);e instanceof HTMLElement&&(e.hidden=!t)}}function c(e){let t=e.querySelectorAll(".js-responsive-underlinenav-item"),n=e.querySelector(".js-responsive-underlinenav-overflow"),r=(0,s.oE)(n,e);if(!r)return;let i=!1;for(let n of t){let t=(0,s.oE)(n,e);if(t){let e=t.left+n.offsetWidth>=r.left;l(n,e),i=i||e}}n.style.visibility=i?"":"hidden"}(0,o.N7)(".js-responsive-underlinenav",{constructor:HTMLElement,subscribe:e=>(a(e),(0,r.RB)(window,"resize",()=>c(e)))})},80721:(e,t,n)=>{n.d(t,{C:()=>r.C,x:()=>r.x});var r=n(4412)},4945:(e,t,n)=>{n.d(t,{DF:()=>u,Fr:()=>d,a_:()=>c});var r=n(75662);function i(e){let t=[...e.querySelectorAll("meta[name=html-safe-nonce]")].map(e=>e.content);if(t.length<1)throw Error("could not find html-safe-nonce on document");return t}let o=class ResponseError extends Error{constructor(e,t){super(`${e} for HTTP ${t.status}`),this.response=t}};function s(e,t,n=!1){let r=t.headers.get("content-type")||"";if(!n&&!r.startsWith("text/html"))throw new o(`expected response with text/html, but was ${r}`,t);if(n&&!(r.startsWith("text/html")||r.startsWith("application/json")))throw new o(`expected response with text/html or application/json, but was ${r}`,t);let i=t.headers.get("x-html-safe");if(i){if(!e.includes(i))throw new o("response X-HTML-Safe nonce did not match",t)}else throw new o("missing X-HTML-Safe nonce",t)}var a=n(22490);let l=a.Z.createPolicy("server-x-safe-html",{createHTML:(e,t)=>(s(i(document),t),e)});async function c(e,t,n){let i=new Request(t,n);i.headers.append("X-Requested-With","XMLHttpRequest");let o=await self.fetch(i);if(o.status<200||o.status>=300)throw Error(`HTTP ${o.status}${o.statusText||""}`);let s=l.createHTML(await o.text(),o);return(0,r.r)(e,s)}function u(e,t,n=1e3,r=[200]){return async function n(i){let o=new Request(e,t);o.headers.append("X-Requested-With","XMLHttpRequest");let s=await self.fetch(o);if(202===s.status)return await new Promise(e=>setTimeout(e,i)),n(1.5*i);if(r.includes(s.status))return s;if(s.status<200||s.status>=300)throw Error(`HTTP ${s.status}${s.statusText||""}`);throw Error(`Unexpected ${s.status} response status from poll endpoint`)}(n)}async function d(e,t,n){let{wait:r=500,acceptedStatusCodes:i=[200],max:o=3,attempt:s=0}=n||{},a=async()=>new Promise((n,a)=>{setTimeout(async()=>{try{let r=new Request(e,t);r.headers.append("X-Requested-With","XMLHttpRequest");let a=await self.fetch(r);if(i.includes(a.status)||s+1===o)return n(a);n("retry")}catch(e){a(e)}},r*s)}),l=await a();return"retry"!==l?l:d(e,t,{wait:r,acceptedStatusCodes:i,max:o,attempt:s+1})}},54650:(e,t,n)=>{n.d(t,{Bt:()=>a,DN:()=>u,KL:()=>p,Se:()=>c,qC:()=>m,sw:()=>d});var r=n(59753),i=n(76177),o=n(54679);function s(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:n}))}function a(e,t){t&&(l(e,t),(0,i.j)(t)),s(e,"submit",!0)&&e.submit()}function l(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}function c(e,t){if("boolean"==typeof t){if(e instanceof HTMLInputElement)e.checked=t;else throw TypeError("only checkboxes can be set to boolean value")}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}s(e,"change",!1)}function u(e,t){for(let n in t){let r=t[n],i=e.elements.namedItem(n);i instanceof HTMLInputElement?i.value=r:i instanceof HTMLTextAreaElement&&(i.value=r)}}function d(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n||e.isContentEditable}function f(e){return new URLSearchParams(e)}function p(e,t){let n=new URLSearchParams(e.search),r=f(t);for(let[e,t]of r)n.append(e,t);return n.toString()}function m(e){return f(new FormData(e)).toString()}(0,r.on)("click",".js-remote-submit-button",async function(e){let t;let n=e.currentTarget,r=n.form;e.preventDefault();try{t=await fetch(r.action,{method:r.method,body:new FormData(r),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch{}t&&!t.ok&&(0,o.v)()})},9302:(e,t,n)=>{let r,i;n.d(t,{lO:()=>p,qA:()=>f,y0:()=>a});let o=[],s=0;function a(){return r}function l(){try{return Math.min(Math.max(0,history.length)||0,9007199254740991)}catch(e){return 0}}function c(){return l()-1+s}function u(e){r=e;let t=location.href;o[c()]={url:t,state:r},o.length=l(),window.dispatchEvent(new CustomEvent("statechange",{bubbles:!1,cancelable:!1}))}function d(){return new Date().getTime()}function f(e,t,n){s=0;let r={_id:d(),...e};history.pushState(r,t,n),u(r)}function p(e,t,n){let r={...a(),...e};history.replaceState(r,t,n),u(r)}r=function(){let e={_id:new Date().getTime(),...history.state};return u(e),e}(),window.addEventListener("popstate",function(e){let t=e.state;if(!t||!t._id&&!t.turbo?.restorationIdentifier)return;let n=t.turbo?.restorationIdentifier,r=o[c()-1]?.state?.turbo?.restorationIdentifier;r===n?s--:s++,u(t)},!0),window.addEventListener("turbo:visit",e=>{e instanceof CustomEvent&&(i=e.detail.action)}),window.addEventListener("turbo:load",()=>{"restore"!==i&&(s=0,p(history.state,"",""))}),window.addEventListener("hashchange",function(){if(l()>o.length){let e={_id:d()};history.replaceState(e,"",location.href),u(e)}},!0),window.addEventListener("pageshow",()=>{o=[],s=0})},75662:(e,t,n)=>{n.d(t,{r:()=>r});function r(e,t){let n=e.createElement("template");return n.innerHTML=t,e.importNode(n.content,!0)}},29130:(e,t,n)=>{var r=n(76006),i=n(54650),o=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};let s=class WaitingFormElement extends HTMLElement{async submitPolitely(){this.submit.disabled=!0;try{this.prerequisites.length>0&&await Promise.all(this.prerequisites.map(e=>this.getPrerequisitePromise(e))),(0,i.Bt)(this.form)}finally{this.submit.disabled=!1}}getPrerequisitePromise(e){let t=e.getAttribute("data-waiting-form-method")||"getPromise";return e[t]()}};o([r.fA],s.prototype,"form",void 0),o([r.GO],s.prototype,"prerequisites",void 0),o([r.fA],s.prototype,"submit",void 0),s=o([r.Ih],s);let a=class SocialAccountEditorElement extends HTMLElement{recognizeUrl(){this.recognitionPromise=new Promise(async e=>{this.preprocessUrl();let t=await this.findMatchingSocialAccountIconOption(this.urlField.value);this.setChosenSocialIcon(t),e()})}resetToDefault(){this.urlField.value!==this.urlField.defaultValue&&(0,i.Se)(this.urlField,this.urlField.defaultValue)}waitForRecognition(){return this.recognitionPromise}preprocessUrl(){let e=this.urlField.value.trim();0===e.length||/^https?:\/\//.test(e)||(this.urlField.value=`https://${e}`)}setChosenSocialIcon(e){let t=e.getAttribute("data-provider-key")||"generic";for(let t of this.iconOptions)t.hidden=t!==e;this.iconSpinner.hidden=!0,this.iconField.value=t}async findMatchingSocialAccountIconOption(e){for(let t of this.iconOptions)for(let n of t.querySelectorAll("[data-provider-pattern]")){let r=RegExp(n.getAttribute("data-provider-pattern"),"i");if(r.test(e))return t}let t=await this.findNodeInfoIconOption(e);return t||this.iconGeneric}async findNodeInfoIconOption(e){if(0===this.nodeinfoSoftwareUrl.trim().length)return null;let t=new Map;for(let n of this.iconOptions)for(let r of n.querySelectorAll("[data-try-nodeinfo-pattern]")){let i=RegExp(r.getAttribute("data-try-nodeinfo-pattern"),"i"),o=r.getAttribute("data-nodeinfo-software"),s=e.match(i);s&&o&&t.set(o,n)}if(0===t.size)return null;let n=null;try{n=new URL(e,window.location.origin)}catch(e){return null}this.showSpinner();let r=new URL(this.nodeinfoSoftwareUrl,window.location.origin);r.searchParams.set("host",n.host);let i=await fetch(r,{headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json"}}),o=await i.json(),s=o?.software_name;return s&&t.get(s)||null}showSpinner(){for(let e of this.iconOptions)e.hidden=!0;this.iconSpinner.hidden=!1}constructor(...e){super(...e),this.recognitionPromise=Promise.resolve(),this.nodeinfoSoftwareUrl=""}};o([r.fA],a.prototype,"urlField",void 0),o([r.fA],a.prototype,"iconField",void 0),o([r.GO],a.prototype,"iconOptions",void 0),o([r.fA],a.prototype,"iconGeneric",void 0),o([r.fA],a.prototype,"iconSpinner",void 0),o([r.Lj],a.prototype,"nodeinfoSoftwareUrl",void 0),a=o([r.Ih],a)},5742:(e,t,n)=>{var r=n(36071),i=n(59753);let o=null,s=null;function a(e){let{item:t,oldIndex:n}=e,{parentNode:r}=t;s=r.children[n+1]}async function l(e){let{oldIndex:t,newIndex:n,item:r}=e;if(t===n)return;let i=r.closest(".js-pinned-items-reorder-form"),a=i.closest(".js-pinned-items-reorder-container"),l=a.querySelector(".js-pinned-items-spinner"),c=a.querySelector(".js-pinned-items-reorder-message"),u=l&&c;u&&(c.textContent="",l.style.display="inline-block"),o.option("disabled",!0);let d=await fetch(i.action,{method:i.method,body:new FormData(i),headers:{"X-Requested-With":"XMLHttpRequest"}});if(!d.ok){u&&(c.textContent=c.getAttribute("data-error-text")||"",l.style.display="none");let e=r.parentNode;s?e.insertBefore(r,s):e.appendChild(r);return}u&&(c.textContent=c.getAttribute("data-success-text")||"",l.style.display="none"),o.option("disabled",!1)}(0,r.N7)(".js-pinned-items-reorder-list",{async add(e){let{Sortable:t}=await Promise.all([n.e("vendors-node_modules_github_sortablejs_Sortable_js"),n.e("app_assets_modules_github_sortable-behavior_ts")]).then(n.bind(n,66884));o=t.create(e,{animation:150,item:".js-pinned-item-list-item",handle:".js-pinned-item-reorder",onUpdate:l,onStart:a,chosenClass:"is-dragging"})}}),(0,i.on)("submit",".js-pinned-items-reorder-form",function(e){e.preventDefault()}),(0,i.on)("click",".js-pinned-item-list-item .js-sortable-button",async function({currentTarget:e}){let{moveWithButton:t}=await Promise.all([n.e("vendors-node_modules_github_sortablejs_Sortable_js"),n.e("app_assets_modules_github_sortable-behavior_ts")]).then(n.bind(n,66884));t(e,e.closest(".js-pinned-item-list-item"),l)})},76177:(e,t,n)=>{function r(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let n=i(t);if(e.name){let r=e.matches("input[type=submit]")?"Submit":"",i=e.value||r;n||((n=document.createElement("input")).type="hidden",n.classList.add("js-submit-button-value"),t.prepend(n)),n.name=e.name,n.value=i}else n&&n.remove()}function i(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}n.d(t,{j:()=>r,u:()=>i})},57801:(e,t,n)=>{(0,n(59753).on)("change",".js-profile-editable-pronouns-select",function(){let e=document.querySelector(".js-profile-editable-pronouns-select"),t=document.querySelector(".js-profile-editable-pronouns-custom"),n=t.getAttribute("data-initial-value");"Custom"===e.value?([...e.options].find(e=>e.value===n)?t.value="":t.value=n,t.hidden=!1,t.focus()):(t.value=e.value,t.hidden=!0)})},60864:(e,t,n)=>{var r,i=n(76006),o=n(59753),s=n(9302),a=function(e,t,n,r){var i,o=arguments.length,s=o<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(i=e[a])&&(s=(o<3?i(s):o>3?i(t,n,s):i(t,n))||s);return o>3&&s&&Object.defineProperty(t,n,s),s};function l(e){let t=e.currentTarget,n=t.getAttribute("data-achievement-slug"),r=new URL(window.location.href,window.location.origin),i=new URLSearchParams(r.search);t.hasAttribute("open")&&n?i.set("achievement",n):i.delete("achievement"),r.search=i.toString(),(0,s.qA)(null,"",r.toString())}(0,o.on)("toggle",".js-achievement-card-details",l,{capture:!0});let c=((r=class AchievementBadgeFlipElement extends HTMLElement{connectedCallback(){if(this.tierCount<=1||!this.animate)return;let e=this.animate([{transform:"rotateY(0deg)"},{transform:`rotateY(${this.maxRotation}deg)`}],{duration:this.duration,easing:"cubic-bezier(0, 0, 0.25, 1)"});if(this.animations.set(this,e),!this.createTierAnimations()){let e=new MutationObserver((e,t)=>{this.createTierAnimations()&&t.disconnect()});e.observe(this,{childList:!0})}}get duration(){return 500*this.tierCount}get maxRotation(){return 180*this.tierCount}createTierAnimations(){for(let e of this.tiers)this.ensureTierAnimation(e);return this.tiers.length>=this.tierCount}ensureTierAnimation(e){if(this.animations.has(e))return;let t=this.tiers.indexOf(e);if(t<0)return;let n=this.BADGE_SIDE_KEYFRAMES[this.tierCount];if(!n)return;let r=this.tierCount%2==1,i=n.map((e,i)=>{let o=i===t||i===t+1||0===t&&i===this.tierCount,s={offset:e,opacity:o?1:0,easing:"step-start"};if(r&&0===t){let e=i===n.length-1?180:0;s.transform=`rotateY(${e}deg)`}return s}),o=e.animate(i,{duration:this.duration});this.animations.set(e,o)}flip(){for(let e of this.animations.values())if("running"===e.playState)return;for(let e of this.animations.values())e.play()}constructor(...e){super(...e),this.animations=new Map,this.BADGE_SIDE_KEYFRAMES=[[],[0,1],[0,.22,1],[0,.13,.34,1],[0,.09,.22,.42,1],[0,.07,.16,.29,.47,1]],this.tierCount=0}}).attrPrefix="",r);a([i.Lj],c.prototype,"tierCount",void 0),a([i.GO],c.prototype,"tiers",void 0),c=a([i.Ih],c),(0,o.on)("click",".js-new-user-contrib-example",async function(e){let t=document.querySelector(".js-calendar-graph");if(t.classList.contains("sample-graph"))return;t.classList.add("sample-graph");let n=e.currentTarget.getAttribute("data-url"),r=await fetch(n,{headers:{"X-Requested-With":"XMLHttpRequest"}});if(!r.ok){t.classList.remove("sample-graph");return}let i=await r.text(),o=document.createElement("div");o.innerHTML=i;let s=t.querySelector(".js-calendar-graph-svg");s.replaceWith(o.children[0])});var u=n(4945),d=n(36071),f=n(65935),p=n(48542);let m=null,h=document.createElement("div");function g(){let e=document.querySelector(".js-calendar-graph"),t=e.getAttribute("data-url");return new URL(t,window.location.origin)}function w(e){if("key"in e&&"Enter"!==e.key)return;let t=e.currentTarget;if(!((t instanceof HTMLElement||t instanceof SVGElement)&&t.matches("[data-level]")))return;let n=t.closest(".js-calendar-graph"),r=n.getAttribute("data-org"),i=t.getAttribute("data-date"),o=t.classList.contains("active"),s="shiftKey"in e&&!0===e.shiftKey;o?$(F()):U(D(i),s,r)}function y(e,t,{key:n}){let r=e=>e instanceof HTMLTableCellElement&&-1===e.tabIndex?e:void 0,i=(e,t)=>{let n=e?.querySelectorAll(t)??[];return Array.from(n).at(-1)};if(t instanceof HTMLTableCellElement){let e="[data-level]",o=`[data-ix="${t.getAttribute("data-ix")}"]`,s=t.parentElement,a=s?.parentElement;switch(n){case"ArrowLeft":return r(t.previousElementSibling??t);case"ArrowRight":return r(t.nextElementSibling??t);case"ArrowDown":return r(s?.nextElementSibling?.querySelector(o));case"ArrowUp":return r(s?.previousElementSibling?.querySelector(o));case"Home":return r(s?.querySelector(e));case"End":return r(i(s,e));case"PageUp":return r(a?.querySelector(o));case"PageDown":return r(i(a,o))}}}function b(){h&&(h.hidden=!0)}function v(e){let t=e.target;if(!((t instanceof HTMLElement||t instanceof SVGElement)&&t.matches("[data-level]")))return;b(),h.textContent=t.textContent,h.hidden=!1;let n=t.getBoundingClientRect(),r=n.left+window.pageXOffset-h.offsetWidth/2+n.width/2,i=n.bottom+window.pageYOffset-h.offsetHeight-2*n.height,o=document.querySelector(".js-calendar-graph"),s=o.getBoundingClientRect();h.style.top=`${i}px`,S(s,r)?(h.style.left=`${j(n)}px`,h.classList.add("left"),h.classList.remove("right")):L(s,r)?(h.style.left=`${E(n)}px`,h.classList.add("right"),h.classList.remove("left")):(h.style.left=`${r}px`,h.classList.remove("left"),h.classList.remove("right"))}function S(e,t){return e.x>t}function L(e,t){return e.x+e.width<t+h.offsetWidth}function j(e){return e.left+window.pageXOffset-.1*h.offsetWidth+e.width/2}function E(e){return e.left+window.pageXOffset-.9*h.offsetWidth+e.width/2}async function T(e){let t=document.getElementById("js-contribution-activity");if(!t)return;t.classList.add("loading");let n=await (0,u.a_)(document,e);t.classList.remove("loading"),t.textContent="",t.append(n)}function A(e,t){let n=new URLSearchParams(e);n.delete("from"),n.delete("to"),n.delete("org");let r=t.fromStr;t.from&&(r=H(t.from,!!t.forceLocalTime)),r&&n.append("from",r);let i=t.toStr;t.to&&(i=H(t.to,!!t.forceLocalTime)),i&&n.append("to",i);let o=t.org;return o&&n.append("org",o),n}async function q(e,t,n){let r=document.querySelector(".js-calendar-graph"),i=r.getAttribute("data-graph-url"),o=new URL(i,window.location.origin),s=A(o.search.slice(1),{from:e,to:t,org:n,forceLocalTime:!0});o.search=s.toString();let a=await (0,u.a_)(document,o.toString());document.querySelector(".js-yearly-contributions").replaceWith(a)}function x(e,t){let n=document.querySelector(".js-calendar-graph"),r=n.querySelectorAll("[data-level]");for(let e of r)e.classList.remove("active"),e.hasAttribute("aria-selected")&&e.setAttribute("aria-selected","false");if(n.classList.remove("days-selected"),e||t)for(let i of(n.classList.add("days-selected"),r))(function(n){let r=D(n.getAttribute("data-date")||"").getTime();return e&&t?e.getTime()<=r&&r<=t.getTime():e?r===e.getTime():void 0})(i)&&(i.classList.add("active"),i.hasAttribute("aria-selected")&&i.setAttribute("aria-selected","true"))}function _(){let e=new URLSearchParams(window.location.search.slice(1)),t=e.get("from"),n=e.get("to");return t&&n?{first:t,last:n}:null}function R(){let e=document.querySelector(".js-calendar-graph"),t=e.querySelectorAll(".active"),n=t[0],r=t[t.length-1],i=n&&n.getAttribute("data-date"),o=r&&r.getAttribute("data-date");return i&&o?{first:i,last:o}:null}function C(){let e=new URL(F(),window.location.origin),t=new URLSearchParams(e.search.slice(1)),n=t.get("from"),r=t.get("to");return n&&r?{first:n,last:r}:null}function M(){let e=document.querySelector(".js-calendar-graph"),t=e.getAttribute("data-from"),n=e.getAttribute("data-to");return{first:t,last:n}}function P(){let e=R()||_()||C();return e}function k(e){return`0${e}`.slice(-2)}function H(e,t){return t?`${e.getFullYear()}-${k(e.getMonth()+1)}-${k(e.getDate())}`:`${e.getUTCFullYear()}-${k(e.getUTCMonth()+1)}-${k(e.getUTCDate())}`}function D(e){let[t,n,r]=e.split("-").map(e=>parseInt(e,10));return new Date(Date.UTC(t,n-1,r))}function U(e,t,n){let r,i;if(m&&t){let t=m.getTime();[r,i]=e>m?[m,e]:[e,m],r=new Date(Math.max(r.getTime(),t-26784e5)),i=new Date(Math.min(i.getTime(),t+26784e5)),m=null}else m=i=r=e;x(r,i);let o=g(),s=A(o.search.slice(1),{from:r,to:i,org:n});s.append("tab","overview"),o.search=s.toString(),T(o.toString())}async function O(e,t){let n=document.getElementById("year-list-container");if(!n)return;t.append("year_list","1"),e.search=t.toString();let r=await (0,u.a_)(document,e.toString());n.textContent="",n.append(r)}async function I(e){let t=R(),n=M(),r=new Date(n.first),i=new Date(n.last);if(await q(r,i,e),t){let e=new Date(t.first),n=new Date(t.last);x(e,n)}}function F(){let e=document.querySelector(".js-profile-timeline-year-list .js-year-link.selected");return e.href||""}function $(e){let t=new URL(e,window.location.origin).search,n=new URLSearchParams(t.slice(1)),r=n.get("org"),i=n.get("from"),o=n.get("to"),s=new Date(i),a=new Date(o);q(s,a,r);let l=g(),c=A(l.search.slice(1),{from:s,to:a,org:r});c.append("tab","overview"),l.search=c.toString(),T(l.toString())}function X(e){let t=e.closest(".js-details-container");t&&t.classList.add("open");let n=e.getBoundingClientRect(),r=window.scrollY+n.top-62-10;window.scrollTo(0,r)}async function W(e){let{initializeOverviewGraphContainer:t}=await n.e("app_assets_modules_github_profile_contributions-spider-graph_ts").then(n.bind(n,98711));t(e)}h.classList.add("svg-tip","svg-tip-one-line"),h.style.pointerEvents="none",h.hidden=!0,document.body.appendChild(h),(0,d.N7)(".js-calendar-graph-svg, .js-calendar-graph-table",function(e){let t=e.closest(".js-calendar-graph");for(let t of e.querySelectorAll("[data-level]"))t.addEventListener("mouseover",v),t.addEventListener("mouseleave",b),t.addEventListener("click",w),t.hasAttribute("tabindex")&&(t.addEventListener("focus",v),t.addEventListener("blur",b),t.addEventListener("keypress",w));let n=t.getAttribute("data-from");n&&(m=D(n)),e instanceof HTMLElement&&(0,p.km)(e,{focusInStrategy:"previous",getNextFocusable:y,bindKeys:p.Qw.ArrowAll|p.Qw.HomeAndEnd|p.Qw.PageUpDown,focusOutBehavior:"stop"})}),(0,o.on)("click",".js-org-filter-link",function(e){e.stopPropagation(),e.preventDefault();let t=e.currentTarget,n=t.closest(".js-org-filter-links-container"),r=n.querySelector(".js-org-filter-link.selected"),i=new URL(t.href,window.location.origin),o=new URLSearchParams(i.search.slice(1)),a=o.get("org"),l=P(),c=new Date(l.first),u=new Date(l.last);r&&r.classList.remove("selected"),t!==r&&t.classList.add("selected"),I(a);let d=g(),f={org:a,from:null,to:null};o.has("from")&&(f.from=c),o.has("to")&&(f.to=u);let p=A(d.search.slice(1),f);d.search=p.toString(),T(d.toString()),O(d,p),(0,s.qA)(null,"",d.toString())}),(0,o.on)("click",".js-year-link",function(e){e.stopPropagation(),e.preventDefault();let t=e.currentTarget,n=t.closest("ul"),r=n.querySelector(".js-year-link.selected");r.classList.remove("selected"),t.classList.add("selected"),$(t.href),(0,s.qA)(null,"",t.href)}),function(){let e=window.location.hash;if(!e||0>e.indexOf("#event-"))return;let t=e.slice(1,e.length),n=document.getElementById(t);n&&X(n)}(),window.addEventListener("hashchange",function(e){let t=e.newURL||window.location.href,n=t.slice(t.indexOf("#")+1,t.length),r=document.getElementById(n);r&&(e.stopPropagation(),X(r))}),(0,f.AC)(".js-show-more-timeline-form",async function(e,t){await t.text();let n=document.querySelector(".js-show-more-timeline-form");if(n){let t=n.getAttribute("data-year"),r=document.querySelector(".js-year-link.selected"),i=document.querySelector(`#year-link-${t}`);r.classList.remove("selected"),i.classList.add("selected");let o=e.getAttribute("data-year");if(t!==o){let e=n.getAttribute("data-from"),t=new Date(e),r=n.getAttribute("data-to"),i=new Date(r),o=n.getAttribute("data-org");q(t,i,o)}}document.title=e.getAttribute("data-title")||"",(0,s.qA)(null,"",e.getAttribute("data-url")||"")}),(0,d.N7)(".js-activity-overview-graph-container",e=>{W(e)});var B=n(57801);function G(e){if(document.querySelector(".js-profile-editable-area").hidden=e,document.querySelector(".js-profile-editable-names").hidden=e,document.querySelector(".js-profile-editable-form").hidden=!e,document.querySelector(".js-profile-editable-error").textContent="",!e){let e=document.querySelector(".js-profile-editable-pronouns-select"),t=document.querySelector(".js-profile-editable-pronouns-custom");for(let n of(e&&t&&""===t.value&&(e.selectedIndex=0,t.hidden=!0),document.querySelectorAll("social-account-editor")))n.resetToDefault()}}function N(e){let t=document.querySelector(".js-profile-editable-replace");t.replaceWith(e)}function Y(){let e=document.querySelector(".js-user-profile-bio").getAttribute("data-bio-text");if("string"!=typeof e)return;let t=document.querySelector(".js-user-profile-bio-edit");t.value=e}(0,o.on)("click",".js-profile-editable-edit-button",function(){Y(),G(!0)}),(0,o.on)("click",".js-profile-editable-cancel",function(){G(!1)}),(0,f.AC)(".js-profile-editable-form",async(e,t)=>{let n;try{n=await t.html()}catch(e){if(422===e.response.status){let t=document.querySelector(".js-profile-editable-error");t.textContent=e.response.json.message}return}N(n.html),G(!1)});var K=n(29130),Q=n(5742);(0,d.N7)(".js-user-profile-sticky-fields.is-stuck",function(){let e=document.querySelector(".js-user-profile-sticky-bar");return{add(){e&&e.classList.add("is-stuck")},remove(){e&&e.classList.remove("is-stuck")}}}),(0,d.N7)(".js-user-profile-follow-button.is-stuck",function(){let e=document.querySelector(".js-user-profile-sticky-bar");return{add(){e&&e.classList.add("is-follow-stuck")},remove(){e&&e.classList.remove("is-follow-stuck")}}});var z=n(55240);function V(e){return e>999?`${(e/1e3).toFixed(1)}k`:e.toLocaleString()}function Z(e,t){t>0?(e.textContent=V(t),e.hidden=!1):e.remove()}async function J(e){let t=new URL(e.getAttribute("data-url"),window.location.origin),n=new URLSearchParams(t.search.slice(1)),r=e.querySelector(".js-profile-repository-count"),i=e.querySelector(".js-profile-project-count"),o=e.querySelector(".js-profile-team-count"),s=e.querySelector(".js-profile-member-count");r&&n.append("repo","1"),i&&n.append("project","1"),o&&n.append("team","1"),s&&n.append("member","1"),t.search=n.toString();let a=await fetch(t.toString(),{headers:{"X-Requested-With":"XMLHttpRequest"}});if(!a.ok)return;let l=await a.json(),c=l.data;r&&c.repositories&&Z(r,c.repositories.totalCount),i&&c.projects&&Z(i,c.projects.totalCount),o&&c.teams&&Z(o,c.teams.totalCount),s&&c.members&&Z(s,c.members.totalCount),e.classList.contains("js-responsive-underlinenav")&&(0,z.k)(e)}(0,d.N7)(".js-profile-tab-count-container",function(e){J(e)})},4412:(e,t,n)=>{n.d(t,{C:()=>o,x:()=>i});var r=n(86283);let i=r.n4?.readyState==="interactive"||r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),o=r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.iG?.addEventListener("load",e)})},86283:(e,t,n)=>{n.d(t,{Qg:()=>r.Qg,W6:()=>r.W6,cF:()=>r.cF,iG:()=>i.iG,jX:()=>i.jX,n4:()=>i.n4});var r=n(35647),i=n(73614)},73614:(e,t,n)=>{n.d(t,{iG:()=>i,jX:()=>o,n4:()=>r});let r="undefined"==typeof document?void 0:document,i="undefined"==typeof window?void 0:window,o="undefined"==typeof location?{pathname:"",origin:"",search:""}:location},35647:(e,t,n)=>{n.d(t,{Qg:()=>o,W6:()=>i,cF:()=>s});var r=n(73614);let i=void 0===r.n4,o=!i;function s(){return!!i||Boolean(r.n4.querySelector('react-app[data-ssr="true"]'))}},56959:(e,t,n)=>{n.d(t,{RB:()=>r,qC:()=>i,w0:()=>Subscription});let Subscription=class Subscription{constructor(e){this.closed=!1,this.unsubscribe=()=>{e(),this.closed=!0}}};function r(e,t,n,r={capture:!1}){return e.addEventListener(t,n,r),new Subscription(()=>{e.removeEventListener(t,n,r)})}function i(...e){return new Subscription(()=>{for(let t of e)t.unsubscribe()})}},22490:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(86283);function i(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let o={createHTML:i("createHTML"),createScript:i("createScript"),createScriptURL:i("createScriptURL")},s={createPolicy:(e,t)=>({name:e,...o,...t})},a=globalThis.trustedTypes??s,l=!1;r.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||l||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),l=!0)})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_github_selector-observer_dist_index_esm_js","vendors-node_modules_primer_behaviors_dist_esm_focus-zone_js","vendors-node_modules_github_remote-form_dist_index_js-node_modules_primer_behaviors_dist_esm_-b34105"],()=>t(60864));var n=e.O()}]);
//# sourceMappingURL=profile-485ea5986bd4.js.map