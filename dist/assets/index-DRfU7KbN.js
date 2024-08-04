var Px=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var eS=Px(ie=>{const bx=Object.freeze(Object.defineProperty({__proto__:null,get ComponentInstance(){return Qr}},Symbol.toStringTag,{value:"Module"}));(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}})();function R({tag:t="span",className:e="",id:r="",content:n="",title:a="",tabIndex:o=!1,attributes:s={},style:x=!1,innerHTML:E="",onClick:T,doc:d}={}){if(d||(d=document),!d.createElement)return console.warn("no document or createElement"),console.warn(d),new HTMLElement;const g=d.createElement(t);if(e&&g.setAttribute("class",e),r&&g.setAttribute("id",r),n&&(g.innerHTML=n),a&&g.setAttribute("title",a),o===!0?g.setAttribute("tabIndex","0"):o!==!1&&g.setAttribute("tabIndex",o),Object.keys(s).forEach(y=>g.setAttribute(y,s[y])),x&&g.setAttribute("style",x),E){const y=document.createElement("template");y.innerHTML=E,g.appendChild(y.content)}return T&&typeof T=="function"&&g.addEventListener("click",T),g}function ne(t,e=[]){Array.isArray(e)?e.forEach(r=>{Array.isArray(r)?ne(t,r):t.appendChild(r)}):t.appendChild(e)}function se(t=""){let e=R();return e.innerHTML=t,e.firstElementChild}function jn(t,e){t!=null&&t.parentNode&&e&&t.parentNode.insertBefore(e,t.nextSibling)}const vx="*{box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:var(--global-transition)}:host{margin-right:8px;display:inline-block;width:max-content;min-width:40px;--fancy-gradient: linear-gradient( 135deg, var(--blue-l55), var(--purple-l45), var(--orange-l50), var(--purple-l45), var(--blue-l55), var(--purple-l45) );--fancy-animation: gradFade 120s linear infinite;--fancy-background-size: 500% 500%}@keyframes gradFade{0%{background-position:0% 0%}to{background-position:100% 100%}}:host(:active) .wrapper{top:1px;left:1px;box-shadow:none}:host([disabled]:active) .wrapper{top:0;left:0}.wrapper{display:inline-block;position:relative;top:0;left:0;margin:0;padding:2px;height:100%;width:100%;border-style:solid;border-width:0px;border-radius:5px;animation:var(--fancy-animation);box-shadow:var(--l2-shadow);background:var(--fancy-gradient);background-size:var(--fancy-background-size)}.wrapper:hover,.wrapper *:hover,.wrapper:focus,.wrapper *:focus{cursor:pointer}.wrapper:focus{outline:var(--global-focus-style)}.buttonContent{display:flex;align-items:center;padding:0;border-radius:3px;background-color:transparent;width:100%;height:100%}.buttonText{display:inline-block;width:max-content;height:max-content;margin:5px 10px;color:#fff;animation:var(--fancy-animation);background-color:transparent}.wrapper[secondary] .buttonContent{background-color:#fffffff2}.wrapper[secondary] .buttonText{background:var(--fancy-gradient);background-size:var(--fancy-background-size);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper:hover .buttonContent,.wrapper:active .buttonContent{background-color:#ffffff1a}.wrapper[secondary]:hover .buttonContent,.wrapper[secondary]:active .buttonContent{background-color:#fff}.wrapper[minimal]{padding:1px;box-shadow:var(--l1-shadow);background:linear-gradient(135deg,var(--blue-l85),var(--blue-l90));animation:var(--fancy-animation)}.wrapper[minimal] .buttonContent{background-color:#fffffff2}.wrapper[minimal] .buttonText{background:linear-gradient(135deg,var(--blue-l70),var(--blue-l90));background-size:var(--fancy-background-size);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[minimal]:hover,.wrapper[minimal]:active{box-shadow:var(--l2-shadow);background:linear-gradient(135deg,var(--blue-l65),var(--blue-l70))}.wrapper[minimal]:hover .buttonContent,.wrapper[minimal]:active .buttonContent{background-color:#fff}.wrapper[minimal]:hover .buttonText,.wrapper[minimal]:active .buttonText{background:linear-gradient(135deg,var(--blue-l40),var(--blue-l70));background-size:var(--fancy-background-size);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[danger]{background:linear-gradient(135deg,var(--orange-l50),var(--red));animation:var(--fancy-animation)}.wrapper[danger] .buttonText{background:#fff;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[secondary][danger] .buttonText{background:var(--red);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}.wrapper[disabled],.wrapper[disabled]:hover,.wrapper[disabled]:focus,.wrapper[disabled]:active{background-image:none;background-color:var(--disabled-border);cursor:default;box-shadow:none}.wrapper[disabled] .buttonContent,.wrapper[disabled]:hover .buttonContent,.wrapper[disabled]:focus .buttonContent,.wrapper[disabled]:active .buttonContent{background-color:var(--disabled-background);cursor:default}.wrapper[disabled] .buttonText,.wrapper[disabled]:hover .buttonText,.wrapper[disabled]:focus .buttonText,.wrapper[disabled]:active .buttonText{background-color:var(--disabled-background);background-clip:none;-webkit-text-fill-color:var(--disabled-border);color:var(--disabled-border);cursor:default}";class Ux extends HTMLElement{constructor(e={}){super(),Object.keys(e).forEach(a=>this.setAttribute(a,e[a])),this.wrapper=R({className:"wrapper"}),this.buttonContent=R({className:"buttonContent"}),this.buttonText=R({tag:"slot",className:"buttonText"}),this.hasAttribute("secondary")&&this.wrapper.setAttribute("secondary",""),this.hasAttribute("danger")&&this.wrapper.setAttribute("danger",""),this.hasAttribute("minimal")&&this.wrapper.setAttribute("minimal",""),this.hasAttribute("disabled")?(this.wrapper.setAttribute("disabled",""),this.disabled=!0):(this.wrapper.setAttribute("tabIndex","0"),this.disabled=!1);let r=this.attachShadow({mode:"open"}),n=R({tag:"style",innerHTML:vx});r.appendChild(n),this.buttonContent.appendChild(this.buttonText),this.wrapper.appendChild(this.buttonContent),r.appendChild(this.wrapper),this.disabled||this.addEventListener("keydown",this.keyPress)}static get observedAttributes(){return["disabled","secondary","danger","minimal"]}attributeChangedCallback(e,r,n){this.wrapper&&(e==="disabled"&&(n===""?this.wrapper.setAttribute("disabled",""):r===""&&this.wrapper.removeAttribute("disabled")),e==="secondary"&&(n===""?this.wrapper.setAttribute("secondary",""):r===""&&this.wrapper.removeAttribute("secondary")),e==="danger"&&(n===""?this.wrapper.setAttribute("danger",""):r===""&&this.wrapper.removeAttribute("danger")),e==="minimal"&&(n===""?this.wrapper.setAttribute("minimal",""):r===""&&this.wrapper.removeAttribute("minimal")))}keyPress(e){if(e.keyCode===13){let r=new MouseEvent("click",{shiftKey:e.shiftKey,ctrlKey:e.ctrlKey,altKey:e.altKey,metaKey:e.metaKey});this.dispatchEvent(r),this.flashAsPressed(this)}}flashAsPressed(e){e.wrapper.style.top="1px",e.wrapper.style.left="1px",e.wrapper.style.boxShadow="none",setTimeout(function(){e.wrapper.style.top="0px",e.wrapper.style.left="0px",e.wrapper.style.boxShadow="2px 2px 2px rgba(0, 0, 0, 0.3)"},100)}}function Gr(t={}){const e=Object.keys(t);return e.length?e[0]:!1}function H1(t,e="id"){let r=1,n=""+e+r;for(;t[n];)r+=1,n=""+e+r;return n}function Ut(t){return Object.keys(t).length}function or(t){try{return structuredClone(t)}catch{const r=Array.isArray(t)?[]:{};for(const n of Object.keys(t))t[n]&&typeof t[n]=="object"&&n!=="parent"&&n!=="cache"?r[n]=or(t[n]):r[n]=t[n];return r}}function ma(t,e){if(t=or(t),e)return JSON.stringify(t);{let r=JSON.stringify(t,void 0,2);return r=r||"",r=r.replace(/\n/g,`\r
`),r=r.replaceAll(`\r
                  "`,'"'),r=r.replaceAll(`\r
                }`,"}"),r=r.replaceAll(`\r
                "`,'"'),r=r.replaceAll(`\r
              }`,"}"),r=r.replaceAll('},"','}, "'),r}}function F1(t,e){if(typeof t!="object"&&typeof e!="object")return t===e;for(const r of Object.keys(t))if(e[r]){if(typeof t[r]=="object"&&typeof e[r]=="object"){if(!F1(t[r],e[r]))return!1}else if(t[r]!==e[r])return!1}else return!1;return!0}function pt(t,e,r=1){return isNaN(t.x)||isNaN(t.y)||isNaN(e.x)||isNaN(e.y)?!1:!!(t.x===e.x&&t.y===e.y||w0(t.x,e.x,r)&&w0(t.y,e.y,r))}function w0(t,e,r=1){return isNaN(t)||isNaN(e)?!1:t===e||Math.abs(t-e)<=r}function Ot(t,e=!1){const r=e?1:-1;return ae(t)+.5*r}function ae(t,e=0){return t&&+(Math.round(+`${t}e${e}`)+`e-${e}`)||0}function nr(t){t=He(t);const e=""+t;return(e.indexOf("0000")>-1||e.indexOf("9999")>-1)&&(t=ae(t,3)),t<1e-5&&t>0&&(t=0),t}function M1(t){return t=parseFloat(t),!(isNaN(t)||t!==Math.round(t))}function He(t=0){let e=+t;return isNaN(e)?0:e}function co(t=""){return t=String(t),t.replace(/[<>'"\\]/g,"")}function To(t=""){if(t=String(t),t==='""'||t==="''")return"";try{return t=t.replace(/^\s+|\s+$/g,""),t.replace(/(\r\n|\n|\r|\t)/gm,"")}catch{return""}}function ur(t="",e=""){return t=String(t),t=t.split(e).join(""),t||""}function G1(t=""){let e="";for(let r=0;r<t.length;r++){let n=t.charCodeAt(r);n<=90&&n>=65&&(e+="-"),e+=t.charAt(r).toLowerCase()}return e}function pi(t=""){let e="";for(let r=0;r<t.length;r++)t.charAt(r)==="-"?(r++,e+=t.charAt(r).toUpperCase()):e+=t.charAt(r);return e}function P1(t=""){if(typeof t=="string"){if(t==='""'||t==="''")return"";t.indexOf("&")>-1&&(t=t.replace(/&/g,"&amp;")),t.indexOf('"')>-1&&(t=t.replace(/"/g,"&quot;")),t.indexOf("'")>-1&&(t=t.replace(/'/g,"&apos;")),t.indexOf("<")>-1&&(t=t.replace(/</g,"&lt;")),t.indexOf(">")>-1&&(t=t.replace(/>/g,"&gt;"))}return t}function Tt(t){return t===0||t===!1?!0:t==null||typeof t=="object"&&Object.keys(t).length===0?!1:!!t}function zi(t){if(!t)return!0;for(const e of Object.keys(t))if(!Tt(t[e])||t[e]===Number.MAX_SAFE_INTEGER||t[e]===Number.MIN_SAFE_INTEGER)return!0;return!1}function Mn(t,e,r){return r.indexOf(t)===e}function ra(t=10){return new Promise(e=>{setTimeout(()=>{e("fast")},t)})}const wa=["top-left","middle-left","baseline-left","bottom-left","top-center","middle-center","baseline-center","bottom-center","top-right","middle-right","baseline-right","bottom-right"];function Io(t=0,e=0,r,n="baseline-left"){(n===!1||wa.indexOf(""+n)<0)&&(n="baseline-left"),n=""+n;let a={deltaX:0,deltaY:0};if(e!==0&&(n.includes("top")&&(a.deltaY=e*-1),n.includes("middle")&&(a.deltaY=e/-2),n.includes("baseline"))){let o=(e+r.height)/r.height,s=r.yMax*o,x=(r.yMax-s)*-1;a.deltaY=x-e}return t!==0&&(n.includes("right")&&(a.deltaX=t*-1),n.includes("center")&&(a.deltaX=t/-2)),a}function En(t,e={x:0,y:0}){let r=Math.atan2(t.y-e.y,t.x-e.x);return isNaN(r)&&(console.warn(`calculateAngle returned NaN
`+ma(t)+`

Item does not exist yet, click to create`),s==="new"&&(x=`

Item was created, but has not yet been edited`),s==="changed"&&(x=`

Item was recently edited`),this.hasAttribute("selected")&&this.wrapper.setAttribute("selected",""),this.glyph&&this.glyph.hasChangedThisSession===!0?(this.setAttribute("title",`${a}
${r}${x}`),this.thumbnail=R({tag:"span",className:"thumbnail"}),this.thumbnail.width=o,this.thumbnail.height=o):(this.setAttribute("title",`${a}
${r}${x}`),this.thumbnail=R({className:"thumbnail"}),Vx(ur(r,"glyph-"))?this.thumbnail.innerHTML=`
					<div class="whitespace-char-thumbnail">white space</div>
				`:n?this.thumbnail.innerHTML=n:this.thumbnail.innerHTML=`
						<div class="whitespace-char-thumbnail">${r}</div>
					`),this.name=R({className:"name"}),n?this.name.innerHTML=r==="glyph-0x20"?"Space":n:this.name.innerHTML=a.replaceAll("Component ","comp-");const E=this.attachShadow({mode:"open"}),T=R({tag:"style",innerHTML:zx});E.appendChild(T),this.wrapper.appendChild(this.thumbnail),this.wrapper.appendChild(this.name),E.appendChild(this.wrapper),this.redraw()}attributeChangedCallback(){const e=this.shadowRoot?this.shadowRoot.querySelector(".wrapper"):!1;e&&(this.hasAttribute("selected")?e.setAttribute("selected",""):e.removeAttribute("selected"))}redraw(){var e,r;(r=(e=this.glyph)==null?void 0:e.shapes)!=null&&r.length&&(this.thumbnail.innerHTML=this.project.makeItemThumbnail(this.glyph))}}const xt={gray:{l97:"hsl(200, 81%, 97%)",l95:"hsl(200, 81%, 94%)",l90:"hsl(200, 60%, 88%)",l85:"hsl(200, 52%, 82%)",l80:"hsl(200, 47%, 76%)",l75:"hsl(200, 42%, 71%)",l70:"hsl(200, 33%, 65%)",l65:"hsl(200, 27%, 60%)",l60:"hsl(200, 22%, 55%)",l55:"hsl(200, 18%, 50%)",l50:"hsl(200, 17%, 45%)",l45:"hsl(200, 17%, 40%)",l40:"hsl(200, 18%, 36%)",l35:"hsl(200, 18%, 31%)",l30:"hsl(200, 17%, 27%)",l25:"hsl(200, 18%, 23%)",l20:"hsl(200, 18%, 19%)",l15:"hsl(200, 17%, 15%)",l10:"hsl(200, 19%, 11%)",l05:"hsl(200, 18%, 7%)"},blue:{l95:"hsl(200, 100%, 94%)",l90:"hsl(200, 94%, 87%)",l85:"hsl(200, 100%, 80%)",l80:"hsl(200, 100%, 73%)",l75:"hsl(200, 100%, 64%)",l70:"hsl(200, 100%, 58%)",l65:"hsl(200, 100%, 49%)",l60:"hsl(200, 100%, 45%)",l55:"hsl(200, 100%, 41%)",l50:"hsl(200, 100%, 37%)",l45:"hsl(200, 100%, 33%)",l40:"hsl(200, 100%, 30%)",l35:"hsl(200, 100%, 25%)",l30:"hsl(200, 100%, 22%)",l25:"hsl(200, 100%, 19%)",l20:"hsl(200, 100%, 15%)",l15:"hsl(200, 100%, 12%)",l10:"hsl(200, 100%, 9%)",l05:"hsl(200, 100%, 6%)"},orange:{l95:"hsl(20, 100%, 95%)",l90:"hsl(20, 100%, 89%)",l85:"hsl(20, 100%, 84%)",l80:"hsl(20, 100%, 78%)",l75:"hsl(20, 100%, 72%)",l70:"hsl(20, 100%, 66%)",l65:"hsl(20, 100%, 56%)",l60:"hsl(20, 100%, 50%)",l55:"hsl(20, 100%, 46%)",l50:"hsl(20, 100%, 42%)",l45:"hsl(20, 100%, 37%)",l40:"hsl(20, 100%, 33%)",l35:"hsl(20, 100%, 29%)",l30:"hsl(20, 100%, 25%)",l25:"hsl(20, 100%, 22%)",l20:"hsl(20, 100%, 17%)",l15:"hsl(20, 100%, 14%)",l10:"hsl(20, 100%, 10%)",l05:"hsl(20, 100%, 6%)"},green:{l95:"hsl(125, 100%, 82%)",l90:"hsl(125, 97%, 74%)",l85:"hsl(125, 83%, 66%)",l80:"hsl(125, 74%, 58%)",l75:"hsl(125, 67%, 50%)",l70:"hsl(125, 82%, 43%)",l65:"hsl(125, 100%, 36%)",l60:"hsl(125, 100%, 33%)",l55:"hsl(125, 100%, 30%)",l50:"hsl(125, 100%, 27%)",l45:"hsl(125, 100%, 24%)",l40:"hsl(125, 95%, 22%)",l35:"hsl(125, 100%, 19%)",l30:"hsl(125, 100%, 16%)",l25:"hsl(125, 100%, 14%)",l20:"hsl(125, 100%, 11%)",l15:"hsl(125, 100%, 9%)",l10:"hsl(125, 100%, 6%)",l05:"hsl(125, 100%, 4%)"},purple:{l95:"hsl(285, 100%, 96%)",l90:"hsl(285, 100%, 92%)",l85:"hsl(285, 100%, 89%)",l80:"hsl(285, 100%, 85%)",l75:"hsl(285, 100%, 81%)",l70:"hsl(285, 100%, 77%)",l65:"hsl(285, 100%, 72%)",l60:"hsl(285, 100%, 66%)",l55:"hsl(285, 100%, 61%)",l50:"hsl(285, 100%, 50%)",l45:"hsl(285, 100%, 45%)",l40:"hsl(285, 100%, 40%)",l35:"hsl(285, 100%, 36%)",l30:"hsl(285, 100%, 31%)",l25:"hsl(285, 100%, 27%)",l20:"hsl(285, 100%, 22%)",l15:"hsl(285, 100%, 17%)",l10:"hsl(285, 100%, 13%)",l05:"hsl(285, 100%, 10%)"}},oA=xt.blue.l65,jr={accent:oA,offWhite:"hsl(200, 81%, 97%)",darkRed:"hsl(0, 100%, 23%)",red:"hsl(0, 100%, 48%)",lightRed:"hsl(0, 100%, 90%)",enabled:{resting:{text:"hsl(0, 0%, 5%)",lightText:"hsl(0, 0%, 10%)",border:"hsl(0, 0%, 75%)",fill:"hsl(0, 0%, 39%)",background:"hsl(0, 0%, 98%)"},restingLight:{text:"hsl(0, 0%, 20%)",lightText:"hsl(0, 0%, 30%)",border:"hsla(0, 0%, 75%, 0.2)",fill:"hsl(0, 0%, 39%, 0.4)",background:"hsl(0, 0%, 98%)"},focus:{text:"hsl(0, 0%, 0%)",lightText:"hsl(0, 0%, 10%)",border:"hsl(0, 0%, 63%)",fill:"hsl(200, 25%, 15%)",background:"white"},active:{text:"hsl(0, 0%, 0%)",lightText:"hsl(0, 0%, 10%)",border:"hsl(0, 0%, 63%)",fill:oA,background:"white"}},disabled:{text:"hsl(0, 0%, 40%)",border:"hsl(0, 0%, 82%)",fill:"hsl(0, 0%, 82%)",background:"hsl(0, 0%, 94%)"}};function Ya(t){const e={r:0,g:0,b:0,a:1};if(typeof t!="string")return e;if(t.charAt(0)==="#")t=t.substring(1,7),e.r=parseInt(t.substring(0,2),16),e.g=parseInt(t.substring(2,4),16),e.b=parseInt(t.substring(4,6),16);else if(t.substring(0,4)==="rgb("){let r=t.split("(")[1].split(")")[0].split(",");e.r=parseInt(r[0],10),e.g=parseInt(r[1],10),e.b=parseInt(r[2],10),e.a=parseInt(r[3],10)||1}return e}function W0(t){let e=Ya(t),r=e.r.toString(16).toUpperCase();r.length===1&&(r=`0${r}`);let n=e.g.toString(16).toUpperCase();n.length===1&&(n=`0${n}`);let a=e.b.toString(16).toUpperCase();return a.length===1&&(a=`0${a}`),`#${r}${n}${a}`}function Zx(t,e,r){e=Math.max(0,Math.min(e,1));const n=Ya(t);return n.r=Math.max(0,Math.min(n.r,255)),n.g=Math.max(0,Math.min(n.g,255)),n.b=Math.max(0,Math.min(n.b,255)),r?(n.r=ae((255-n.r)*e+n.r),n.g=ae((255-n.g)*e+n.g),n.b=ae((255-n.b)*e+n.b)):(n.r=ae(n.r-n.r*e),n.g=ae(n.g-n.g*e),n.b=ae(n.b-n.b*e)),`rgb(${n.r},${n.g},${n.b})`}function gr(t,e){const r=Ya(t),n=ae((255-r.r)*(1-e)),a=ae((255-r.g)*(1-e)),o=ae((255-r.b)*(1-e)),s=r.r+n,x=r.g+a,E=r.b+o;return`rgb(${s},${x},${E})`}function un(t){const e=parseInt(t);return!e||isNaN(e)?1:e>100?0:e<0?1:(100-e)/100}function Z1(){const t=Math.floor(Math.random()*5)*51,e=[],r=Math.floor(Math.random()*3);switch(e[r]=t,r){case 0:e[1]=0,e[2]=255;break;case 1:e[0]=0,e[2]=255;break;case 2:e[0]=255,e[1]=0;break}return"rgb("+e[0]+","+e[1]+","+e[2]+")"}const Xx=Object.freeze(Object.defineProperty({__proto__:null,accentColors:xt,getColorFromRGBA:gr,makeRandomSaturatedColor:Z1,parseColorString:Ya,rgbToHex:W0,shiftColor:Zx,transparencyToAlpha:un,uiColors:jr},Symbol.toStringTag,{value:"Module"}));let Je={};function pn(t){let e=20;t.name&&t.name.indexOf("page_")===0&&(e=24),t.name&&t.name.indexOf("panel_")===0&&(e=24);let r=t.color||"rgb(76,81,86)",n="";return Je[t.name]&&(Je[t.name].outline?n=Je[t.name].outline:n=Je[t.name]),`
		<svg version="1.1"
			xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
			x="0px" y="0px" width="${e}px" height="${e}px" viewBox="0 0 ${e} ${e}"
		>
			<defs></defs>
			<rect fill="transparent" width="${e}" height="${e}"/>
			<g pointer-events="none" fill="${r}">
				${n}
			</g>
		</svg>
	`}Je.panel_layers=`
	<polygon points="12 9 0 4.574 12 0 24 4.5 12 9"/>
	<polygon points="12 14 0 9.5 4 8 12 11 20 8 24 9.5 12 14"/>
	<polygon points="12 19 0 14.5 4 13 12 16 20 13 24 14.5 12 19"/>
	<polygon points="12 24 0 19.5 4 18 12 21 20 18 24 19.5 12 24"/>
`;Je.panel_guides=`
	<polygon points="2 17 5 20 5 17 2 17"/>
	<polygon points="24 22 0 22 0 23 24 23 24 22 24 22"/>
	<polygon points="24 7 0 7 0 8 24 8 24 7 24 7"/>
	<polygon points="24 3 0 3 0 3.5 24 3.5 24 3 24 3"/>
	<polygon points="24 1 0 1 0 2 24 2 24 1 24 1"/>
	<polygon points="24 15 0 15 0 17 24 17 24 15 24 15"/>
	<polygon points="7 0 5 0 5 24 7 24 7 0 7 0"/>
	<polygon points="22.5 0 22 0 22 24 22.5 24 22.5 0 22.5 0"/>
`;Je.panel_contextCharacters=`
	<path d="m8.942,16.997h-2.672v-.55c-.412.432-.882.647-1.407.647-.53,0-.973-.213-1.329-.64s-.534-.966-.534-1.621c0-.668.193-1.221.578-1.661s.875-.66,1.469-.66c.412,0,.82.141,1.224.424v-.737c0-.375-.047-.641-.139-.796s-.259-.233-.5-.233c-.322,0-.544.181-.666.542l-1.829-.383c.539-1.006,1.455-1.508,2.747-1.508.752,0,1.344.179,1.775.535s.646.879.646,1.569v3.57h.639v1.502Zm-2.672-1.801v-1.052c-.172-.216-.367-.324-.585-.324-.2,0-.358.083-.476.252-.118.168-.177.392-.177.669,0,.272.055.482.167.63s.264.221.459.221c.24,0,.444-.132.612-.397Z"/>
	<path d="m9.547,16.997v-1.502h.666v-6.995h-.666v-1.502h2.699v3.651h.027c.299-.496.727-.745,1.285-.745.594,0,1.068.292,1.424.876s.534,1.432.534,2.545c0,1.214-.171,2.146-.513,2.795s-.828.973-1.458.973c-.499,0-.931-.218-1.299-.657v.559h-2.699Zm2.699-3.987v1.416c0,.394.042.686.126.878.084.191.232.288.445.288.249,0,.409-.147.479-.441s.105-.843.105-1.648c0-.726-.04-1.23-.119-1.509-.079-.28-.239-.42-.479-.42-.213,0-.359.109-.439.326s-.119.587-.119,1.11Z"/>
	<path d="m19.429,14.229l1.571.598c-.258,1.581-1.079,2.371-2.461,2.371-.834,0-1.49-.334-1.968-1.001s-.717-1.587-.717-2.76c0-1.057.207-1.909.622-2.559s.958-.973,1.628-.973c.644,0,1.077.29,1.299.869h.027v-.757h1.462v2.823h-1.462c-.032-.505-.11-.878-.235-1.12-.125-.241-.312-.362-.561-.362-.263,0-.44.159-.53.476s-.136.85-.136,1.6c0,.819.044,1.401.133,1.746s.296.517.622.517c.227,0,.392-.118.496-.354s.174-.608.211-1.113Z"/>
	<path d="m18,4v-1h4v-1h-5v2h-1V0h-8v4h-1v-2H2v1h4v1H0v16h6v1H2v1h5v-2h1v4h8v-4h1v2h5v-1h-4v-1h6V4h-6ZM9,1h6v3h-6V1Zm6,22h-6v-3h6v3Zm7-5H2V6h20v12Z"/>
`;Je.panel_history=`
	<path d="m19.075,18.133l-.021.022c-.181.185-.478.189-.663.008l-5.229-5.102c-.185-.181.491-.874.676-.693l5.229,5.102c.185.181.189.478.008.663Z"/>
	<path d="m16.1,9.358l.022.021c.185.181.189.478.008.663l-2.291,2.348c-.181.185-.874-.491-.693-.676l2.291-2.348c.181-.185.478-.189.663-.008Z"/>
	<circle cx="13.165" cy="12.387" r="1.033"/>
	<path d="m19.551,5.842c.149.145.282.3.418.452l1.747-1.747c-.146-.159-.283-.322-.439-.475-2.259-2.204-5.187-3.302-8.112-3.302-3.021,0-6.039,1.171-8.315,3.504-2.196,2.251-3.287,5.166-3.295,8.08h2.475c.008-2.294.865-4.587,2.589-6.354,1.736-1.779,4.06-2.758,6.546-2.758,2.4,0,4.667.923,6.386,2.6Z"/>
	<path d="m1.608,11.33H.2l2.609,4.174,2.609-4.174h-1.166c-.954-.008-1.986-.008-2.644,0Z"/>
	<path d="m21.916,6.021l-.736.736c1.133,1.605,1.769,3.503,1.794,5.509.032,2.62-.958,5.096-2.788,6.971-1.862,1.908-4.355,2.959-7.022,2.959-2.574,0-5.007-.99-6.85-2.788-1.066-1.041-1.855-2.286-2.353-3.645l-.677,1.084c.541,1.201,1.309,2.324,2.309,3.3,2.108,2.057,4.841,3.082,7.571,3.082,2.819,0,5.636-1.093,7.761-3.27,3.747-3.841,4.05-9.742.991-13.938Z"/>
`;Je.panel_attributes=`
	<polygon points="12 10 0 10 0 11 12 11 12 10 12 10"/>
	<polygon points="12 12 0 12 0 13 12 13 12 12 12 12"/>
	<polygon points="12 14 0 14 0 15 12 15 12 14 12 14"/>
	<polygon points="24 2 12 2 12 3 24 3 24 2 24 2"/>
	<polygon points="24 4 12 4 12 5 24 5 24 4 24 4"/>
	<polygon points="24 6 12 6 12 7 24 7 24 6 24 6"/>
	<path d="m14,10v5c0,.552.448,1,1,1h8c.552,0,1-.448,1-1v-5c0-.552-.448-1-1-1h-8c-.552,0-1,.448-1,1Zm1,4l2-3,2,3h-4Zm6,0l-2-3h4l-2,3Z"/>
	<polygon points="12 18 0 18 0 19 12 19 12 18 12 18"/>
	<polygon points="12 20 0 20 0 21 12 21 12 20 12 20"/>
	<polygon points="12 22 0 22 0 23 12 23 12 22 12 22"/>
	<path d="m14,18v5c0,.552.448,1,1,1h8c.552,0,1-.448,1-1v-5c0-.552-.448-1-1-1h-8c-.552,0-1,.448-1,1Zm1,4l2-3,2,3h-4Zm6,0l-2-3h4l-2,3Z"/>
	<path d="m9,1H1c-.552,0-1,.448-1,1v5c0,.552.448,1,1,1h8c.552,0,1-.448,1-1V2c0-.552-.448-1-1-1Zm-4.5,5.5l-2.5-2.5,1-1,1.5,1.5,2.5-2.5,1,1-3.5,3.5Z"/>
`;Je.panel_view=`
	<circle cx="12" cy="13" r="4"/>
	<path d="m24,13h-2v-1c0-3.237-4.368-7-10-7S2,8.763,2,12v1H0v-1C0,7.29,5.72,3,12,3s12,4.29,12,9v1Z"/>
`;Je.command_save=`
	<path d="M0,0V17.22l2.78,2.78H20V0H0ZM5,1H15V10H5V1Zm2,18v-3h1v3h-1Zm2,0v-3h5v3h-5ZM19,3h-1v1h1v15h-4v-4H6v4H3.5l-2.5-2.5V1h3V11h12V1h3V3Z"/>
`;Je.command_export=`
	<polygon points="10 19.06 10 5.06 15.25 10.31 16 9.56 9.5 3.06 3 9.56 3.75 10.31 9 5.06 9 19.06 10 19.06"/>
	<rect width="19" height="1"/>
`;Je.command_newTab=`
	<polygon points="10.35 10.35 18.94 1.77 18.94 9 20 9 20 0 11 0 11 1.06 18.23 1.06 9.65 9.65 10.35 10.35"/>
	<polygon points="15 10 14.98 19 1 19 1 5 10 5 11 4 0 4 0 20 15.98 20 16 9 15 10"/>
`;Je.command_info=`
	<path d="M10,1c4.13,0,6.4,0,7.7,1.3,1.3,1.3,1.3,3.57,1.3,7.7s0,6.4-1.3,7.7c-1.3,1.3-3.57,1.3-7.7,1.3s-6.4,0-7.7-1.3c-1.3-1.3-1.3-3.57-1.3-7.7S1,3.6,2.3,2.3c1.3-1.3,3.57-1.3,7.7-1.3m0-1C5.62,0,3.18,0,1.59,1.59,0,3.18,0,5.62,0,10s0,6.82,1.59,8.41c1.59,1.59,4.03,1.59,8.41,1.59s6.82,0,8.41-1.59c1.59-1.59,1.59-4.03,1.59-8.41s0-6.82-1.59-8.41c-1.59-1.59-4.03-1.59-8.41-1.59h0Z"/>
	<path d="M9.28,14.06v-4.76h-1.13v-1.28h2.57v6.04h1.13v1.28h-3.7v-1.28h1.13Zm-.2-8.53c0-.23,.08-.43,.25-.6s.37-.26,.62-.26c.24,0,.44,.08,.61,.25s.26,.37,.26,.61-.09,.45-.26,.62c-.17,.17-.38,.25-.61,.25s-.45-.09-.62-.26-.25-.37-.25-.61Z"/>
`;Je.command_help=`
	<path d="M10,1c4.13,0,6.4,0,7.7,1.3,1.3,1.3,1.3,3.57,1.3,7.7s0,6.4-1.3,7.7c-1.3,1.3-3.57,1.3-7.7,1.3s-6.4,0-7.7-1.3c-1.3-1.3-1.3-3.57-1.3-7.7S1,3.6,2.3,2.3c1.3-1.3,3.57-1.3,7.7-1.3m0-1C5.62,0,3.18,0,1.59,1.59,0,3.18,0,5.62,0,10s0,6.82,1.59,8.41c1.59,1.59,4.03,1.59,8.41,1.59s6.82,0,8.41-1.59c1.59-1.59,1.59-4.03,1.59-8.41s0-6.82-1.59-8.41c-1.59-1.59-4.03-1.59-8.41-1.59h0Z"/>
	<path d="M10.06,12.65h-.82l-.19-3.53c.25,.06,.5,.1,.75,.1,.7,0,1.2-.18,1.5-.53s.46-.77,.46-1.25c0-.56-.17-1-.5-1.31-.33-.31-.75-.47-1.27-.47-.62,0-1.08,.18-1.39,.53s-.45,.8-.45,1.33c0,.11,0,.24,0,.39h-1.49c0-.14,0-.27,0-.37,0-1.09,.32-1.9,.97-2.41s1.42-.77,2.31-.77c1.08,0,1.91,.29,2.5,.87,.59,.58,.89,1.34,.89,2.28s-.28,1.64-.84,2.18-1.22,.81-1.98,.81c-.06,0-.14,0-.25,0l-.2,2.16Zm-1.41,2.99v-1.96h1.96v1.96h-1.96Z"/>
`;Je.command_autoFit=`
	<polygon points="6 9 3 9 4.75 7.25 4 6.5 1 9.5 4.25 12.25 5 11.5 3 10 6 10 6 9"/>
	<polygon points="14 9 17 9 15.25 7.25 16 6.5 19 9.5 15.75 12.25 15 11.5 17 10 14 10 14 9"/>
	<rect y="4" width="1" height="11"/>
	<rect x="19" y="4" width="1" height="11"/>
	<rect x="12" y="9" width="1" height="1"/>
	<rect x="7" y="9" width="1" height="1"/>
	<rect x="9" y="9" width="2" height="1"/>
`;Je.command_verticalBar='<rect x="9" y="0" width="2" height="18"/>';Je.command_horizontalBar='<rect y="9" x="1" height="2" width="19"/>';Je.command_crossProjectActions=`
  <path d="m18.916,7.084c-.962-.962-2.426-1.07-4.92-1.082-.013-2.48-.121-3.959-1.08-4.918-1.084-1.084-2.8-1.084-5.916-1.084S2.168,0,1.084,1.084,0,3.884,0,7s0,4.832,1.084,5.916c.959.959,2.437,1.068,4.918,1.081.012,2.493.12,3.958,1.082,4.919,1.084,1.084,2.8,1.084,5.916,1.084s4.832,0,5.916-1.084,1.084-2.8,1.084-5.916,0-4.832-1.084-5.916Zm-17.916-.084c0-2.849,0-4.418.791-5.209s2.36-.791,5.209-.791,4.418,0,5.209.791c.691.691.777,1.996.788,4.209-2.356,0-3.91.002-4.997.472v-.472h-2v2h.472c-.47,1.087-.472,2.641-.472,4.997-2.211-.011-3.518-.097-4.209-.788-.791-.791-.791-2.36-.791-5.209Zm17.209,11.209c-.791.791-2.36.791-5.209.791s-4.418,0-5.209-.791-.791-2.36-.791-5.209,0-4.418.791-5.209,2.36-.791,5.209-.791,4.418,0,5.209.791.791,2.36.791,5.209,0,4.418-.791,5.209Z"/>
  <rect x="9" y="9" width="2" height="2"/>
  <rect x="12" y="9" width="2" height="2"/>
  <rect x="9" y="12" width="2" height="2"/>
  <rect x="9" y="15" width="2" height="2"/>
  <rect x="12" y="12" width="2" height="2"/>
  <rect x="15" y="9" width="2" height="2"/>
  <rect x="3" y="3" width="2" height="2"/>
  <rect x="6" y="3" width="2" height="2"/>
  <rect x="3" y="6" width="2" height="2"/>
  <rect x="3" y="9" width="2" height="2"/>
  <rect x="9" y="3" width="2" height="2"/>
`;Je.page_about=`
	<path d="m12,1.2c4.955,0,7.684,0,9.242,1.558,1.558,1.558,1.558,4.287,1.558,9.242s0,7.684-1.558,9.242c-1.558,1.558-4.287,1.558-9.242,1.558s-7.684,0-9.242-1.558c-1.558-1.558-1.558-4.287-1.558-9.242s0-7.684,1.558-9.242c1.558-1.558,4.287-1.558,9.242-1.558m0-1.2C6.742,0,3.818,0,1.909,1.909,0,3.818,0,6.742,0,12s0,8.182,1.909,10.091c1.909,1.909,4.832,1.909,10.091,1.909s8.182,0,10.091-1.909c1.909-1.909,1.909-4.832,1.909-10.091s0-8.182-1.909-10.091c-1.909-1.909-4.832-1.909-10.091-1.909h0Z"/>
	<path d="m11,17v-6h-2v-2h4v8h2v2s-6,0-6,0v-2h2Zm-.95-11.258c0-.468.165-.877.495-1.223s.748-.52,1.255-.52c.477,0,.888.168,1.233.504s.517.749.517,1.238-.173.905-.517,1.244c-.345.342-.756.514-1.233.514-.487,0-.9-.174-1.24-.52s-.51-.758-.51-1.238Z"/>
`;Je.page_help=`
	<path d="m12,1.2c4.955,0,7.684,0,9.242,1.558,1.558,1.558,1.558,4.287,1.558,9.242s0,7.684-1.558,9.242c-1.558,1.558-4.287,1.558-9.242,1.558s-7.684,0-9.242-1.558c-1.558-1.558-1.558-4.287-1.558-9.242s0-7.684,1.558-9.242c1.558-1.558,4.287-1.558,9.242-1.558m0-1.2C6.742,0,3.818,0,1.909,1.909,0,3.818,0,6.742,0,12s0,8.182,1.909,10.091c1.909,1.909,4.832,1.909,10.091,1.909s8.182,0,10.091-1.909c1.909-1.909,1.909-4.832,1.909-10.091s0-8.182-1.909-10.091c-1.909-1.909-4.832-1.909-10.091-1.909h0Z"/>
	<path d="m12.398,16h-2v-4.5c2,0,4.202-.5,4.202-3,0-1.5-.6-2.5-2.202-2.5-2,0-2.398,1.3-2.398,2v1h-2v-1c0-1,.398-4,4.398-4,2.602,0,4.602,1.5,4.602,4.5s-2.602,4.5-4.102,4.5l-.5,3Z"/>
	<rect x="10" y="17" width="3" height="3" rx=".75" ry=".75"/>
`;Je.page_exportFont=`
	<polygon points="30.1,9.9 40.1,0 50,9.9 42.5,9.9 42.5,18.8 37.6,18.8 37.6,9.9"/>
	<path d="M15.2,12.7l-9.9,9.9V50h29.8V12.7H15.2z M26.7,29.1h-1.9l0.7-2.9H20L18.8,31h4.7l-0.4,1.8h-4.7l-1.3,5.4h1.7l-0.4,1.8H13l0.4-1.8h1.4l2.9-12h-1.5l0.4-1.8h11.3L26.7,29.1z"/>
`;Je.page_exportSVG=`
	<polygon points="7 4 4 0 1 4 3 4 3 7 5 7 5 4 7 4"/>
	<path d="m17.026,6H7v18h15v-12.75l-4.974-5.25Zm-5.835,11.758c-.272.247-.613.371-1.022.371-.359,0-.684-.115-.976-.344v.303h-.949v-1.575h.949c0,.369.051.608.154.718.103.11.238.165.406.165.15,0,.267-.043.351-.128.084-.084.126-.202.126-.353,0-.12-.048-.247-.143-.38-.095-.131-.332-.334-.711-.604-.511-.361-.836-.657-.978-.889-.141-.232-.212-.46-.212-.684,0-.339.124-.617.371-.834.247-.217.561-.326.94-.326.188,0,.353.022.494.065.141.045.309.137.503.279v-.303h.949v1.463h-.949c0-.308-.047-.515-.141-.62s-.228-.158-.402-.158c-.127,0-.227.033-.302.098-.075.065-.113.153-.113.262,0,.135.044.253.131.354.088.101.26.236.519.405.582.383.962.702,1.142.959.18.256.269.53.269.823,0,.375-.136.687-.408.934Zm5.908-3.793h-.437l-1.455,4.201h-1.213l-1.402-4.201h-.455v-.725h2.318v.725h-.464l.727,2.313.719-2.313h-.536v-.725h2.198v.725Zm3.308,3.02c-.062.274-.163.51-.304.706s-.313.341-.514.436-.43.142-.685.142c-.526,0-.941-.217-1.244-.65-.303-.435-.455-1.054-.455-1.857,0-.812.123-1.441.369-1.889.246-.448.591-.672,1.036-.672.299,0,.554.146.766.441h.014v-.366h.783v1.675h-.783c-.007-.31-.054-.542-.142-.695-.088-.154-.205-.23-.35-.23-.176,0-.288.101-.337.303-.049.201-.073.633-.073,1.295,0,.524.012.914.036,1.168.024.255.065.427.125.519.059.091.147.137.263.137.278,0,.42-.272.427-.817h-.328v-.734h1.49c0,.453-.031.817-.092,1.092Z"/>
`;Je.page_importAndExport=`
	<polygon points="17 20 20 24 23 20 21 20 21 17 19 17 19 20 17 20"/>
	<polygon points="7 4 4 0 1 4 3 4 3 7 5 7 5 4 7 4"/>
	<path d="m13.684,6h-6.684v12h10v-8.5l-3.316-3.5Zm1.316,9h-5v-1h5v1Zm0-2h-5v-1h5v1Zm0-2h-7v-1h7v1Z"/>
`;Je.page_settings=`
	<path d="m23.404,15.538c.366-1.11.572-2.291.596-3.518l-3.267-1.344c-.041-.326-.101-.645-.176-.959l2.601-2.372c-.448-1.126-1.057-2.169-1.806-3.098l-3.375,1.073c-.227-.21-.465-.408-.714-.594l.47-3.506c-1.043-.567-2.18-.982-3.381-1.221l-1.897,2.993c-.152-.008-.301-.023-.455-.023s-.303.015-.455.023l-1.897-2.993c-1.201.238-2.338.653-3.381,1.221l.47,3.506c-.249.186-.487.384-.714.594l-3.375-1.073c-.749.929-1.358,1.972-1.806,3.098l2.601,2.372c-.075.314-.135.633-.176.959l-3.267,1.344c.024,1.227.23,2.408.596,3.518l3.516.145c.153.308.319.607.505.893l-1.634,3.121c.785.893,1.699,1.665,2.715,2.294l2.777-2.142c.323.141.656.264.998.366l.752,3.43c.58.086,1.17.145,1.774.145s1.194-.059,1.774-.145l.752-3.43c.342-.102.675-.225.998-.366l2.777,2.142c1.016-.628,1.93-1.401,2.715-2.294l-1.634-3.121c.186-.286.353-.585.505-.893l3.516-.145Zm-11.404,1.284c-2.761,0-5-2.239-5-5s2.239-5,5-5,5,2.239,5,5-2.239,5-5,5Z"/>
`;Je.page_globalActions=`
	<path d="m22.198,17.785l-3.6-3.6c1.293-1.339,2.093-3.157,2.093-5.166,0-1.751-.609-3.358-1.621-4.629-.016.554-.129,1.161-.344,1.811-.555,1.67-1.718,3.448-3.277,5.006-2.205,2.205-4.81,3.581-6.833,3.625,1.272,1.016,2.882,1.627,4.636,1.627,1.923,0,3.669-.735,4.989-1.932l1.582,1.582c-3.828,3.509-9.79,3.421-13.497-.287-3.707-3.707-3.795-9.669-.287-13.497l1.705,1.705c-1.197,1.32-1.932,3.067-1.932,4.989,0,1.739.601,3.334,1.6,4.601,1.567.793,4.737-.5,7.343-3.106,1.453-1.453,2.532-3.095,3.04-4.622.377-1.137.382-2.067.055-2.715-1.266-.998-2.861-1.598-4.598-1.598-2.008,0-3.827.799-5.166,2.093L4.485.072c-.097-.097-.253-.097-.35,0s-.097.253,0,.35l.855.855c-4.085,4.406-3.998,11.309.287,15.593,1.774,1.774,4,2.818,6.31,3.157v1.583c-2.439.05-4.32.347-4.32.71v.96c0,.398,2.257.72,5.04.72s5.04-.322,5.04-.72v-.96c0-.362-1.881-.659-4.32-.71v-1.46c.068.001.136.01.205.01,2.747,0,5.487-1.009,7.638-3.003l.978.978c.048.048.112.073.175.073s.127-.024.175-.073c.097-.097.097-.253,0-.35Z"/>
`;Je.page_livePreview=`
	<rect x="20" y="5" width="1" height="15"/>
	<rect x="17" y="3.98" width="3" height="1"/>
	<rect x="21" y="4" width="3" height="1"/>
	<rect x="17" y="19.98" width="3" height="1"/>
	<rect x="21" y="20" width="3" height="1"/>
	<path d="m0,16v-2s2,0,2,0v-6H0v-2h6v2h-2v6h3v-2h2v4S0,16,0,16Z"/>
	<path d="m14,18v2h-4v-2h1v-7h-1v-2h3v.879c.618-.654,1.308-.981,2.069-.981.92,0,1.644.365,2.173,1.096s.794,1.582.794,2.554c0,1.03-.273,1.882-.819,2.558-.546.675-1.274,1.013-2.184,1.013-.742,0-1.42-.29-2.033-.869v2.751s1,0,1,0Zm1.759-5.495c0-.608-.126-1.063-.377-1.365s-.583-.453-.995-.453c-.417,0-.756.154-1.017.463s-.392.77-.392,1.383c0,.551.129.994.388,1.329s.603.503,1.035.503c.398,0,.723-.151.977-.453s.381-.771.381-1.408Z"/>
`;Je.page_kerning=`
	<path d="m16.697,18l-4.164-10.513h-1.534v-1.487h4.892v1.487h-1.432l3.156,7.976,3.072-7.976h-1.446v-1.487h4.758v1.487h-1.505l-4.078,10.513h-1.72Z"/>
	<path d="m11.616,16.5l-3.41-9h1.495v-1.5H3.379v1.5h1.445l-3.327,9H0v1.5h4.873v-1.5h-1.503l.946-2.714h4.456l.92,2.714h-1.538v1.5h4.846v-1.5h-1.384Zm-6.839-4.12l1.667-4.88h.26l1.602,4.88h-3.529Z"/>
	<rect x="11" y="2" width="13" height="1"/>
	<rect x="11" width="1" height="5"/>
	<rect y="21" width="13" height="1"/>
	<rect x="12" y="19" width="1" height="5"/>
`;Je.page_ligatures=`
	<path id="b" data-name="ligatures" d="m21,21v-13s-8,0-8,0c-.002-.479,0-1.249,0-2.083s.2-2.917,2.2-2.917c.642,0,2.572,0,2.572,1.423,0,.899.943,1.524,1.826,1.402.891-.116,1.402-.825,1.402-1.825,0-2-2.376-4-5-4-1.75,0-2.704.202-3.87,1.194-.541.461-1.147,1.187-1.525,2.294-.723-1.025-1.865-1.545-3.438-1.545-3.166,0-4.206,2.057-4.206,5.196v.861l-2.96-.035v3.035h3v10H0v3h24v-3h-3ZM6,7.142c0-1.076,0-2.596,1.383-2.596.701,0,1.107.518,1.218,1.553l1.634-.251v2.152h-4.236v-.858Zm0,13.858v-10h4v10h-4Zm7,0v-10h5v10h-5Z"/>
`;Je.page_components=`
	<path d="m9.831,15.308c-.899-.912-2.012-1.368-3.338-1.368-1.38,0-2.544.544-3.493,1.632v-5.572H0v1.986l1,.014v10H0v2h3.028l-.028-1.602c.279.405.736.773,1.373,1.104.637.332,1.34.497,2.109.497,1.373,0,2.499-.489,3.378-1.468.879-.978,1.318-2.184,1.318-3.617,0-1.493-.449-2.695-1.348-3.607Zm-.531,3.75c0,.979-.3,1.755-.9,2.329-.6.574-1.292.861-2.076.861-.008,0-.016-.002-.024-.002-.008,0-.016.002-.024.002-.784,0-1.477-.287-2.076-.861-.6-.574-.9-1.35-.9-2.329,0-.031.006-.057.007-.088,0-.03-.007-.057-.007-.087,0-.992.297-1.762.89-2.31.593-.548,1.288-.822,2.086-.822.008,0,.016.002.024.002.008,0,.016-.002.024-.002.797,0,1.493.274,2.086.822.593.548.89,1.318.89,2.31,0,.031-.006.057-.007.087,0,.031.007.057.007.088Z"/>
	<path d="m12.821,18.915c0,1.433.439,2.638,1.318,3.617.879.978,2.005,1.468,3.378,1.468.77,0,1.473-.166,2.109-.497.637-.332,1.094-.7,1.373-1.104l-.028,1.602h3.028s0-2,0-2h-1v-10l1-.014v-1.986s-3,0-3,0v5.572c-.949-1.088-2.113-1.632-3.493-1.632-1.327,0-2.439.456-3.338,1.368-.899.912-1.348,2.114-1.348,3.607Zm1.886.055c0-.03-.007-.057-.007-.087,0-.992.297-1.762.89-2.31.593-.548,1.289-.822,2.086-.822.008,0,.016.002.024.002.008,0,.016-.002.024-.002.797,0,1.493.274,2.086.822.593.548.89,1.318.89,2.31,0,.031-.006.057-.007.087,0,.031.007.057.007.088,0,.979-.3,1.755-.9,2.329-.6.574-1.292.861-2.076.861-.008,0-.016-.002-.024-.002-.008,0-.016.002-.024.002-.784,0-1.477-.287-2.076-.861-.6-.574-.9-1.35-.9-2.329,0-.031.006-.057.007-.088Z"/>
	<path d="m15,3.131c0-.992-.297-1.762-.89-2.31-.593-.548-1.288-.822-2.086-.822-.008,0-.016.002-.024.002-.008,0-.016-.002-.024-.002-.797,0-1.493.274-2.086.822-.593.548-.89,1.318-.89,2.31,0,.031.006.057.007.087,0,.031-.007.057-.007.088,0,.979.3,1.755.9,2.329.6.574,1.292.861,2.076.861.008,0,.016-.002.024-.002.008,0,.016.002.024.002.784,0,1.477-.287,2.076-.861.6-.574.9-1.35.9-2.329,0-.031-.006-.057-.007-.088,0-.03.007-.057.007-.087Z"/>
	<path d="m15.001,13.5c-.17,0-.335-.087-.429-.243l-2.571-4.285-2.571,4.285c-.142.236-.45.314-.686.172-.237-.142-.313-.449-.171-.686l3.429-5.715,3.429,5.715c.142.236.065.544-.171.686-.081.049-.169.071-.257.071Z"/>
`;Je.page_characters=`
	<path d="m13.548,0h2.452v6l-2.452.004c-.785-2.073-2.148-3.002-4.088-3.002-1.602,0-2.814.466-3.634,1.557s-1.231,2.399-1.231,3.923c0,1.594.434,2.884,1.302,3.87s1.973,1.479,3.316,1.479c1.1,0,3.795-.823,4.796-3.825l2.992,1.001c-1.225,3.805-3.923,5.84-8.094,5.84-2.945,0-5.166-.793-6.662-2.38S0,10.874,0,8.447c0-1.728.389-3.24,1.166-4.536S2.99,1.64,4.306.984s2.759-.984,4.33-.984c1.956,0,3.593.511,4.913,1.532V0Z"/>
	<polygon points="21 21 21 20.5 22 20.5 22 20 23 20 23 17 23 16.5 22.5 16.5 22.5 16 22 16 22 15.5 21.5 15.5 21.5 15 21 15 21 14.5 20.5 14.5 20.5 14 20 14 20 13.5 19.5 13.5 19.5 13 19 13 19 12.5 18.5 12.5 18.5 12 18 12 18 11.5 17.5 11.5 17.5 11 17 11 17 12 17.5 12 17.5 13 18 13 18 14 18.5 14 18.5 15 19 15 19 16 19.5 16 20 16 20 16.5 20.5 16.5 20.5 17.5 20 17.5 20 18 19.5 18 19 18 19 17.5 18.5 17.5 18.5 16.5 19 16.5 19 16 18.5 16 18.5 15 18 15 18 14 17.5 14 17.5 13 17 13 17 19 17 19.5 17.5 19.5 17.5 20 18 20 18 20.5 18.5 20.5 18.5 21 19 21 19 21.5 19.5 21.5 20 21.5 20 21 21 21"/>
	<polygon points="24 22 24 21 23.5 21 23.5 20 23 20 23 20.5 22 20.5 22 21 21 21 21 21.5 20 21.5 20 22 20 22.5 20.5 22.5 20.5 23.5 21.5 23.5 21.5 23 22.5 23 22.5 22.5 23.5 22.5 23.5 22 24 22"/>
`;Je.page_overview=`
	<path d="m7,9.646v1.362h-2.161v-.951c-.701.72-1.483,1.08-2.347,1.08-.671,0-1.254-.231-1.749-.693S0,9.39,0,8.671C0,7.946.263,7.344.789,6.866s1.16-.717,1.901-.717c.691,0,1.359.22,2.004.661v-.773c0-.397-.036-.704-.107-.918s-.238-.408-.499-.58-.603-.258-1.025-.258c-.726,0-1.252.306-1.577.918l-1.387-.387c.615-1.214,1.677-1.821,3.185-1.821.554,0,1.033.079,1.436.238s.705.363.903.612.331.52.4.81.103.752.103,1.386v3.609h.873Zm-2.306-1.539c-.625-.516-1.257-.773-1.898-.773-.401,0-.737.124-1.006.371s-.404.567-.404.959c0,.365.118.671.354.918s.558.371.964.371c.701,0,1.364-.312,1.989-.935v-.91Z"/>
	<path d="m8,11.007v-1.362h.925V1.362h-.925V0h2.343v4.312c.726-.881,1.618-1.321,2.675-1.321,1.016,0,1.868.369,2.557,1.108s1.033,1.712,1.033,2.921c0,1.16-.337,2.136-1.01,2.929s-1.536,1.188-2.587,1.188c-.589,0-1.128-.134-1.616-.403s-.838-.567-1.052-.894v1.168h-2.343Zm2.388-3.883c0,.811.235,1.454.705,1.93s1.012.713,1.627.713c.645,0,1.201-.252,1.669-.757s.701-1.182.701-2.03c0-.822-.232-1.46-.697-1.914s-1.01-.681-1.635-.681c-.615,0-1.163.235-1.646.705s-.724,1.148-.724,2.034Z"/>
	<path d="m24,3v3s-1.25,0-1.25,0c-.064-.564-.393-.999-.75-1.3s-.884-.294-1.356-.294c-.629,0-1.141.243-1.534.729s-.59,1.124-.59,1.914c0,.736.187,1.384.561,1.946s.915.842,1.623.842c.983,0,1.697-.51,2.139-1.531l1.158.596c-.639,1.552-1.758,2.328-3.356,2.328-1.131,0-2.021-.422-2.67-1.265s-.974-1.815-.974-2.917c0-1.176.354-2.147,1.062-2.913s1.524-1.148,2.449-1.148c.792,0,1.693.255,2.239.765v-.753h1.25Z"/>
	<path d="m4.047,17.842l-1.444,1.806h.941v1.406H0v-1.406h1.076l2.196-2.731-2.098-2.511H.189v-1.406h3.43v1.406h-.91l1.314,1.578,1.269-1.578h-.744v-1.406h3.452v1.406h-1.205l-2.002,2.503,2.281,2.739h.925v1.406h-3.452v-1.406h1.008l-1.51-1.806Z"/>
	<path d="m12.492,20.2l-2.503-5.798h-.989v-1.402h3.492v1.402h-.913l1.645,4.198,1.613-4.198h-1.007v-1.402h3.17v1.402h-.613l-3.883,9.598h-2.498v-1.5h1.593l.892-2.3Z"/>
	<path d="m18,21.054v-1.315l4.37-5.433h-3.12v.694h-1.25v-2h6v1.406l-4.387,5.333h3.191v-.74h1.196v2.054h-6Z"/>
`;function jx(t="baseline-left"){let e=xt.gray.l25,r=xt.blue.l70,n=0;t.includes("center")&&(n=7),t.includes("right")&&(n=14);let a=0;return t.includes("middle")&&(a=8),t.includes("baseline")&&(a=11),t.includes("bottom")&&(a=15),`
	<svg version="1.1"
	xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
	x="0px" y="0px" width="20px" height="20px" viewBox="0 0 20 20">
	<defs></defs>
	<rect fill="transparent" width="20" height="20"/>
	<g pointer-events="none" width="20" height="20">
			<path d="m2,2v16h15V2H2Zm14,15H3v-3h13v3Zm0-4H3V3h13v10Z"/>
			<rect x="${n}" y="${a}" width="5" height="5" style="fill: ${e};"/>
			<rect x="${n+1}" y="${a+1}" width="3" height="3" style="fill: ${r};"/>
		</g>
	</svg>
	`}Je.back='<polygon points="37,23 20,23 25,18 22,15 12,25 22,35 25,32 20,27 37,27"/>';Je.more='<polygon points="0,0 0,10 5,5"/>';Je.selected='<polygon points="6,6 6,14 14,10"/>';Je.notSelected='<rect x="5" y="9.75" width="10" height="0.5"/>';Je.keyboard=`
	<rect x="12" y="29" width="26" height="7"/>
	<rect y="29" width="10" height="7"/>
	<rect y="21" width="8" height="6"/>
	<rect x="10" y="21" width="6" height="6"/>
	<rect x="18" y="21" width="6" height="6"/>
	<rect x="26" y="21" width="6" height="6"/>
	<rect x="34" y="21" width="6" height="6"/>
	<rect x="42" y="21" width="8" height="6"/>
	<rect x="6" y="13" width="6" height="6"/>
	<rect x="14" y="13" width="6" height="6"/>
	<rect x="22" y="13" width="6" height="6"/>
	<rect x="38" y="13" width="6" height="6"/>
	<rect x="30" y="13" width="6" height="6"/>
	<rect x="46" y="13" width="4" height="6"/>
	<rect y="13" width="4" height="6"/>
	<rect x="40" y="29" width="10" height="7"/>
`;function Wa(t,e="",r=[],n=!1){let a=`current${t.objType}`;a==="currentControlPoint"&&(a=`currentPathPoint.${t.type}`);let o=[a].concat(r);e&&(e+=":&ensp;");let s=R({tag:"label",innerHTML:`${e}x${ka()}y`}),x=R({tag:"div",className:"doubleInput"}),E=bt(t,"x",o,"input-number"),T=bt(t,"y",o,"input-number");return n&&(E.setAttribute("disabled",""),T.setAttribute("disabled","")),x.appendChild(E),x.appendChild(Ka()),x.appendChild(T),[s,x]}function po(t,e=!1){let r=[],n=`current${t.objType}`,a=Ue(`width${ka()}height`),o=R({tag:"div",className:"doubleInput"}),s=bt(t,"width",n,"input-number"),x=bt(t,"height",n,"input-number");if(e&&(s.setAttribute("disabled",""),x.setAttribute("disabled","")),o.appendChild(s),o.appendChild(Ka()),o.appendChild(x),r.push(a),r.push(o),!e){let E=["top-left","baseline-left","bottom-left","top-right","baseline-right","bottom-right","middle-center"];E=wa;let T=Ue("transform origin",`With increases or decreases to width or height,
		the transform origin is the point that stays fixed.
		<br><br>
		This only takes effect when directly entering values
		into the width or height inputs.`),d=R({tag:"option-chooser",attributes:{"selected-id":t.transformOrigin,"selected-name":t.transformOrigin.replace("-"," ")}});E.forEach(C=>{let k=R({tag:"option",attributes:{"selection-id":C},innerHTML:`${jx(C)}${C.replace("-"," ")}`});k.addEventListener("click",()=>{t.transformOrigin=C,z().publish("editCanvasView",t)}),d.appendChild(k)});let g=Ue("lock aspect ratio",`
			When either the width or height is adjusted,
			the overall size will be kept proportional.
			<br><br>
			Maintaining aspect ratio will override value
			locks if need be.
		`),y=Hn(t,"ratioLock",n);r.push(T),r.push(d),r.push(g),r.push(y)}return r}function bt(t,e,r,n,a=[]){let o=Array.isArray(r)?r:[r],s=R({tag:n,className:`singleInput-${e}`,attributes:{"pubsub-topic":o[0]}}),x=n==="input"?t[e]:ae(t[e],3);s.setAttribute("value",x),t.isLockable&&(s.setAttribute("is-locked",t.isLocked(e)),s.addEventListener("lock",T=>{T.detail.isLocked?t.lock(e):t.unlock(e);const d=z();o.forEach(g=>d.publish(g,t))}));function E(T){if(t.isLockable&&t.isLocked(e))return;let d=T.target.value;const g=z();if(e==="leftSideBearing"){let y=g.view;g.view.dx-=(d-t.leftSideBearing)*y.dz,g.publish("editCanvasView",t)}if((t.objType==="Glyph"||t.objType==="VirtualGlyph"||t.objType==="Path")&&(e==="width"||e==="height")){let y={width:!1,height:!1};y.ratioLock=t.ratioLock,y.transformOrigin=t.transformOrigin,e==="width"?y.width=d:y.height=d,t.objType==="Path"?t.setShapeSize(y):t.setGlyphSize(y)}else t[e]=d;t.objType==="VirtualGlyph"?o.forEach(y=>g.publish(y,g.selectedItem)):t.objType==="VirtualShape"?o.forEach(y=>g.publish(y,g.selectedItem)):o.forEach(y=>g.publish(y,t))}return s.addEventListener("change",E),a&&a.forEach(T=>{s.addEventListener(T,E)}),z().subscribe({topic:o,subscriberID:`attributesPanel.${o[0]}.${e}`,callback:T=>{if(T&&(T[e]||T[e]===0)){let d;n==="input"?d=T[e]:d=ae(T[e],3),s.value=d,s.setAttribute("value",d)}}}),s}function Hn(t,e,r){let n=R({tag:"input",attributes:{type:"checkbox"}});return t[e]&&n.setAttribute("checked",""),n.addEventListener("change",a=>{let o=a.target.checked;t[e]=!!o,r&&(z().publish(r,t),e==="use"&&(c0(t.type,!!o),t.parent.reconcileHandle(t.type)))}),r&&z().subscribe({topic:r,subscriberID:`attributesPanel.${r}.${e}`,callback:a=>{a[e]?(n.setAttribute("checked",""),e==="use"&&c0(t.type,!0)):(n.removeAttribute("checked"),e==="use"&&c0(t.type,!1))}}),n}function c0(t,e){let r=document.getElementById(`${t}InputGroup`);r&&(r.style.display=e?"grid":"none")}function Ue(t,e=!1,r=!1,n=!1){let a=R({content:t}),o=R({tag:"label"});if(r&&o.setAttribute("for",r),o.appendChild(a),e){let s=R({tag:"info-bubble",content:e});o.appendChild(s),o.classList.add("info")}return n&&o.setAttribute("class",n),o}function Wr(){return R({tag:"div",className:"rowPad"})}function ka(){return'<span class="dimSplit">&#x2044;</span>'}function Ka(){return R({className:"dimSplit",innerHTML:"&#x2044;"})}function ar(t,e,r,n=!1){let a=R({tag:"input",attributes:{type:"checkbox"}});return t[e]&&a.setAttribute("checked",""),typeof n=="string"&&a.setAttribute("id",n),a.addEventListener("change",o=>{let s=o.target.checked;t[e]=!!s,r&&r(s)}),a}function X1(t){const e=z(),r=xe(),n=e.project.getItem(t);let a=R({className:"item-link__row",attributes:{"target-item-id":t}});return a.addEventListener("click",()=>{n.displayType==="Glyph"&&(e.nav.page="Characters"),n.displayType==="Component"&&(e.nav.page="Components"),n.displayType==="Ligature"&&(e.nav.page="Ligatures"),e.selectedItemID=t,e.navigate()}),a.appendChild(R({className:"item-link__thumbnail",attributes:{"target-item-id":t},innerHTML:r.makeItemThumbnail(n)})),a.appendChild(R({className:"item-link__title",innerHTML:`${(n==null?void 0:n.name)||"ERROR"}`})),a.appendChild(R({className:"item-link__subtitle",innerHTML:`${(n==null?void 0:n.displayType)||"ERROR"}&ensp;|&ensp;${t}`})),a}class Dr{constructor(){this.parent,this.id=""}changed(){this.cache&&(this.cache={}),this.parent&&this.parent.changed&&this.parent.changed(),this.hasChangedThisSession=!0}get objType(){return this._objType||this.constructor.name}get displayType(){if(this.id){if(this.id.startsWith("liga-"))return"Ligature";if(this.id.startsWith("comp-"))return"Component";if(this.id.startsWith("glyph-"))return"Glyph";if(this.id.startsWith("kern-"))return"Kern Group"}return this.objType}set objType(e){this._objType=e}get cache(){return this._cache||(this._cache={}),this._cache}set cache(e){this._cache=e||{}}save(e=!1){const r=or(this);return e?r.objType=this.objType:delete r.objType,r.cache&&delete r.cache,r}clone(){return this.save(!0)}toString(){return ma(this.save())}print(e=0,r=!1){let n="";for(let x=0;x<e;x++)n+="  ";let a=`${n}{${this.objType} ${r||""}
`;n+="  ";const o=this.save();let s;for(const x of Object.keys(o))s=this[x],s.print?a+=`${n}${x}: ${s.print(e+1)}
`:typeof s!="function"&&(typeof s=="object"?a+=`${n}${x}: ${JSON.stringify(s)}
`:a+=`${n}${x}: ${s}
`);return a+=`${n.substring(2)}}/${this.objType} ${r||""}`,a}get isLockable(){return!1}}function qx(){let t=["💖","🦧","🐆","✅","🐋","😈","🦑"],e="";for(let r=0;r<3;r++)e+=t[Math.floor(Math.random()*t.length)];return e}const Qx=Object.freeze(Object.defineProperty({__proto__:null,GlyphElement:Dr,makeRandomID:qx},Symbol.toStringTag,{value:"Module"}));class $t extends Dr{constructor({xMin:e,xMax:r,yMin:n,yMax:a}={}){return super(),this.xMin=e,this.xMax=r,this.yMin=n,this.yMax=a,this.objType="Maxes",this}save(e=!1){const r={};return Tt(this._xMin)&&(r.xMin=this._xMin),Tt(this._xMax)&&(r.xMax=this._xMax),Tt(this._yMin)&&(r.yMin=this._yMin),Tt(this._yMax)&&(r.yMax=this._yMax),e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{`;return n+=`xMin:${this.xMin} `,n+=`xMax:${this.xMax} `,n+=`yMin:${this.yMin} `,n+=`yMax:${this.yMax}`,n+="}",n}get xMin(){return Tt(this._xMin)?He(this._xMin):Number.MAX_SAFE_INTEGER}get xMax(){return Tt(this._xMax)?He(this._xMax):Number.MIN_SAFE_INTEGER}get yMin(){return Tt(this._yMin)?He(this._yMin):Number.MAX_SAFE_INTEGER}get yMax(){return Tt(this._yMax)?He(this._yMax):Number.MIN_SAFE_INTEGER}get center(){return{x:this.width/2+this.xMin,y:this.height/2+this.yMin}}get width(){return this.xMax-this.xMin}get height(){return this.yMax-this.yMin}set xMin(e){e===void 0||isNaN(+e)?delete this._xMin:this._xMin=He(e)}set xMax(e){e===void 0||isNaN(+e)?delete this._xMax:this._xMax=He(e)}set yMin(e){e===void 0||isNaN(+e)?delete this._yMin:this._yMin=He(e)}set yMax(e){e===void 0||isNaN(+e)?delete this._yMax:this._yMax=He(e)}roundAll(e=3){this.xMin=ae(this.xMin,e),this.xMax=ae(this.xMax,e),this.yMin=ae(this.yMin,e),this.yMax=ae(this.yMax,e)}isPointInside(e,r){return e<=this.xMax&&e>=this.xMin&&r<=this.yMax&&r>=this.yMin}}function So(t={}){return!(isNaN(t==null?void 0:t.yMin)||isNaN(t==null?void 0:t.xMin)||isNaN(t==null?void 0:t.yMax)||isNaN(t==null?void 0:t.xMax))}function k0(t,e,r=!0){let n;return r?n=t.xMin<e.xMax&&t.xMax>e.xMin&&t.yMin<e.yMax&&t.yMax>e.yMin:n=t.xMin<=e.xMax&&t.xMax>=e.xMin&&t.yMin<=e.yMax&&t.yMax>=e.yMin,n}function fa(t){const e=j1();let r;for(let n=0;n<t.length;n++)r=new $t(t[n]),e.xMin=Math.min(e.xMin,r.xMin),e.xMax=Math.max(e.xMax,r.xMax),e.yMin=Math.min(e.yMin,r.yMin),e.yMax=Math.max(e.yMax,r.yMax);return new $t(e)}function Co(t){return t.xMax===0&&t.xMin===0&&t.yMax===0&&t.yMin===0}function j1(){return{xMin:Number.MAX_SAFE_INTEGER,xMax:Number.MIN_SAFE_INTEGER,yMin:Number.MAX_SAFE_INTEGER,yMax:Number.MIN_SAFE_INTEGER}}function $x(){return{xMin:Number.MIN_SAFE_INTEGER,xMax:Number.MAX_SAFE_INTEGER,yMin:Number.MIN_SAFE_INTEGER,yMax:Number.MAX_SAFE_INTEGER}}const eE=Object.freeze(Object.defineProperty({__proto__:null,Maxes:$t,getOverallMaxes:fa,isAllZeros:Co,isMaxes:So,maxesMaxBounds:$x,maxesMinBounds:j1,maxesOverlap:k0},Symbol.toStringTag,{value:"Module"}));class Kr{constructor(e={}){this.text=e.text||"",this.fontSize=e.fontSize||48,this.lineGap=e.lineGap||12,this.pagePadding=e.pagePadding||10,this.pageWidth=e.pageWidth||"fit",this.pageHeight=e.pageHeight||"auto",this.showCharacterExtras=e.showCharacterExtras||!1,this.showLineExtras=e.showLineExtras||!1,this.showPageExtras=e.showPageExtras||!1,this.showPlaceholderMessage=e.showPlaceholderMessage||!1,this.widthAdjustment=e.widthAdjustment||0}get text(){let e=this._text;return e.substring(0,2)==="{{"&&(e=e.substring(2,e.length-2),kt[e])?kt[e]:this._text}set text(e){this._text=e}get displayName(){let e="";return e+=`${this.text.substring(0,40)}...`,e}save(){let e={};return this.fontSize&&this.fontSize!==48&&(e.fontSize=this.fontSize),this.lineGap&&this.lineGap!==12&&(e.lineGap=this.lineGap),this.pagePadding&&this.pagePadding!==10&&(e.pagePadding=this.pagePadding),this.pageWidth&&this.pageWidth!=="fit"&&(e.pageWidth=this.pageWidth),this.pageHeight&&this.pageHeight!=="auto"&&(e.pageHeight=this.pageHeight),this.showCharacterExtras&&(e.showCharacterExtras=this.showCharacterExtras),this.showLineExtras&&(e.showLineExtras=this.showLineExtras),this.showPageExtras&&(e.showPageExtras=this.showPageExtras),this._text&&(e.text=this._text),this.text===kt.swadesh_207_short&&(e.text="{{swadesh_207_short}}"),this.text===kt.swadesh_207_frequent&&(e.text="{{swadesh_207_frequent}}"),this.text===kt.scowl_10_short&&(e.text="{{scowl_10_short}}"),this.text===kt.scowl_10_frequent&&(e.text="{{scowl_10_frequent}}"),this.text===kt.scowl_50_short&&(e.text="{{scowl_50_short}}"),this.text===kt.scowl_50_frequent&&(e.text="{{scowl_50_frequent}}"),this.text===kt.scowl_70_short&&(e.text="{{scowl_70_short}}"),this.text===kt.scowl_70_frequent&&(e.text="{{scowl_70_frequent}}"),e}}let kt={};kt.swadesh_207_short="I you they we you they this that here there who what where when how not all many some few other one two three four five big long wide thick heavy small short narrow thin woman man child wife husband mother father animal fish bird dog louse snake worm tree forest stick fruit seed leaf root bark flower grass rope skin meat blood bone fat egg horn tail feather hair head ear eye nose mouth tooth tongue fingernail foot leg knee hand wing belly guts neck back breast heart liver drink eat bite suck spit vomit blow breathe laugh see hear know think smell fear sleep live die kill fight hunt hit cut split stab scratch dig swim fly walk come lie sit stand turn fall give hold squeeze rub wash wipe pull push throw tie sew count say sing play float flow freeze swell sun moon star water rain river lake sea salt stone sand dust earth cloud fog sky wind snow ice smoke fire ash burn road mountain red green yellow white black night day year warm cold full new old good bad rotten dirty straight round sharp dull smooth wet dry correct near far right left at in with and if because name";kt.swadesh_207_frequent="stab black head leaf fingernail snake animal name husband narrow breast feather because heavy play bird blood bone breathe burn ice scratch thick cloud correct cut day wide dirty dog drink dust seed squeeze left egg yellow rotten sleep forest wet few they father flower freeze full straight give good grass tongue sharp short three die wife wipe this fruit liver skin knee sky laugh child walk salt belly smell vomit mountain stone nose many float smoke hold woman smooth rope mother spit split pull bark worm dry sing some suck swell stick guts turn two rub four mouth water where you";kt.scowl_10_short="able act add leaf age ahead aid major make all am an chaos gap are as at cause gave law tax day lazy bad rubber be bid object able submit box brand jobs doubt bug obvious by can occur ice char city back club code acquire cry cs act cup cycle day feedback broadcast add code edge did adjust badly admit midnight do dry adds due advice hardware body eat debate neck bed see left leg behalf being reject seek cell deem end video deep equal err hes bet queue even few sex eye fan fed off fit fly for fry left fun modify gap age meaningful bigger high girl glad sign go grew bugs length gun apology had forthcoming withdraw he hid highly algorithm technical hot three months eight huge worthwhile why via library ice aid die if big like ill aim in prior chip unique air is it medium five fix size object job jump package key background kid quickly knew asks awkward lucky law album welcome old led half algorithm lie bulk all film log help already also felt blue solve always fly mad dumb me harmful mix firmly common autumn mod dump aims much my name inch and net info hang unhappy nice enjoy bank only government annoy no input unreasonable runs cent numb invent unwanted any boat job lock mod doe of dog oh oil project book old come on too pop or cost got our love how box boy dozen pay update pen helpful graph pi plan equipment pop apple press chips kept put upwards copy quit ran nearby force card re perfect argue perhaps rid dark girl arm turn row sharp err bars art run serve forward cry sad husband disc see satisfy she sit ask slip small so spot square less best sum answer busy tax catch ate doubtful the tie title treatment to output try its putt tune two city equal club luck judge due stuff bug quit bulk sum fun quote up our us but buy van even via vote heavy war we awful who win awkward slowly own two write laws growth exact except boxes exist expand next maybe cycle eye dying style symbol syntax you type buys byte anyway bizarre size";kt.scowl_10_frequent="establishment accidentally administration afterwards disadvantage ahead straightforward majority mistaking alternatively fundamentally misunderstanding chaos applications broadcasting automatically available withdraw maximum displaying crazy embarrassing rubbish deliberately responsibility objections submitting borrowing observation doubtful contributions obviously thereby communications circumstances characters background conclusion acquiring descriptions electronics introduction consistency recommendation feedback additional knowledge adjust admittedly midnight documentation addressing misunderstands undergraduates hardware everybody disappearing somebody sophisticated guaranteeing definitions registering comprehensive rejecting seeking announcement simultaneously representation consequences interpretation queue nevertheless elsewhere experiencing keyboard facilities professional difficulties significantly reflecting frequently justifying investigate arrangements meaningful suggestions discouraging accordingly algorithms buildings strength terminology beforehand forthcoming thoroughly techniques authorities throughout months hundreds worthwhile philosophy appreciating opportunities likewise mediums fixing bizarre justification packages brackets quickly networks awkward lucky calculations album considerable yourself talking almost development helpful already individuals absolutely themselves always combinations harmful harmless autumn demonstration comparatively mysterious unfortunately unhappy enjoy thinking certainly environment unnecessarily unpleasant unreasonable continuously conventional unwanted anonymous misunderstood whatsoever programmers oh pointless projects looking controlling possibilities potentially improvements boxes destroying dozens updating developing upsetting manipulation upwards occupying disturbing performance perhaps particularly information instruction intervention unnecessary husband successfully asking criticism square answering symbols switching atmosphere output publication excluding sufficiently requirements corrupting buying individually avoiding heavy awful widespread unknown rewrite borrows growth examined exceptions executing complexity extending cycles destroyed style syntax everyone anyplace everything everywhere citizen";kt.scowl_50_short="salaam abed acme gad aery aft jag bah fain rajah hake alb lam ankh baobab apps aqua agar asp tat auk aver awl axon dray laze bah bobby webcam abductee abed clubfeet subgroups subhead bier abjure lambkin bleep submerse hobnail bola subplot brr albs bobtail bur obverse bobwhite bobby cads cocci apace achoo cis beck clew acme picnicker coda acquirable craw docs bract cud chancy czarina coda oddball redcap adder deb gadfly cadge dhoti ding adjure bodkin addle adman gladness doc midpoint dram ids hardtop duh adverted dweeb dyer adze lea deb beck zed jeep fief aegis meh lei deejay pekoe ell emo wen oleo hep coequal ere espy eta euro bevy clew hex fey wheezy fa halfback serfdom fey doff afghan wolfhound fie flan hafnium fob halfpence frack coifs aft futz daffy gad bugbear dogcatcher hangdog loge dogfish boggy aught gird glop magma cosign agog grog ergs dogtrot ague wigwag gyro haw highboy ashcans archduke hep mirthful flashgun fishhook hie babushka phlox bathmat techno hob dishpan thru ankhs aught hula schwa ashy iamb jib mica ids fie coif brig jihad piing demijohn wiki mil sim ding viol pip cliquish dirk cis clit odium diva antiwar nix sukiyaki baize jag jeep jib josh julep kale backbit crankcase workday hake sackful ginkgo ankh kith lockjaw yukked anklet milkmaid knave kook chickpea krone auks buckteeth haiku inkwell balky la alb milch veld lea milf bilge bullhorn clit killjoy bilk ell palmy ulna lo pulpy catafalque bulrush awls dolt alum salvo bulwark lynx maw iamb gimcrack slumdog meh brimful farmhand mid mkay armlet jimmy limn emo ump kumquat armrest ems emu triumvirate dimwit gamy nary inbox conch wend pone confab bong inhere nib ninja ankh wanly enmesh jinn noel unpin jonquil unripe duns nth nu convoke unwed lynx onyx benzene roan fob doc hod aloe oft agog oho poi emoji gook pol tom yon coon fop toque orb hos sot lout coven cowl lox soy boozy paps soapbox topcoat stepdad jape campfire popgun aphid pip bumpkin plait stepmom grapnel poi apps prig apps inapt pug pwn pyx aqua brad orb orc gird ere serf erg rho brig marjoram dirk purl berm lorn euro carpi marquis brr burs arty drub nervy airway aery furze mesa busby scat misdo apse misfire disgorge ashy sim disjointedly rusk slaw ism snaky sol asp squab disrobe buss sty suet svelte swag hussy eta catbird butch cote outfox outgo nth ti catkin fitly litmus botnet tom potpie tram lats attar tun outvote twain sty futz aqua nub deuce cud ague mufti pug duh quid jujube auk hula ump dun quoit yup bur buss abut muumuu uvula bauxite obloquy abuzz diva aver vim vole chevron ovule divvy bevy swag cowbird howdah wen lawfully gewgaw whey wiki hawker awl bowman pwn wooer cowpox wrack haws newtons wuss dewy frowzy fixate oxbow coxcomb fixer oxford foxglove foxhound axial laxly laxness axon sexpot coxswain sextet nexus boxwood epoxy yaw flyby lyceum hydra ye mayfly cygnet tallyho yip skyjack beryl hymen lynx yon hypo gyro cloys mythic yuk byword pyx piazza zed zing buzzkill drizzly hazmat kazoo gazpacho kudzu zwieback boozy";kt.scowl_50_frequent="salaaming imperturbability ultraconservatives disadvantageously aerodynamically afforestation tetrahedrons praiseworthiness majorettes groundbreakings electroencephalograms contemporaneously chaotically electroencephalographs aquaculture counterrevolutionaries overenthusiastic interrelationships authoritativeness circumnavigations straightaways axiomatically companionways nonhazardous flibbertigibbets subcontracting molybdenum disencumbering obfuscating subgroups subheadings comprehensibility unobjectionable lambkins bloodthirstiness submersibles abnegating chlorofluorocarbons subprograms transubstantiation obtrusiveness bureaucratically obviousness dumbwaiters labyrinthine electrocardiographs unacceptability lackadaisically counterclaiming acmes picnickers acquisitiveness aristocratically electrodynamics cryptocurrency czarinas daguerreotyping rebroadcasting featherbedding inconsiderateness crowdfunding foreknowledge hardheadedness maladjustment bodkins disconnectedly administratively lightheartedness ambassadorships sandpipers hydroelectricity fountainheads superconductivity hundredweights kudzus rebelliousness electioneering prefabrication gregariousness reinterpretations steeplejacks inconsequentially electromagnetism neurotransmitters exemplifications monkeyshines intermezzos multifariousness beefburger serfdom paraprofessionals afghans halfheartedness aloofness disinformation halfpennies disenfranchisement weatherproofs antiaircraft unfaithfulness misidentifying herringbone dogcatchers hangdog counterintelligence wrongfulness microaggressions bacteriological uncompromisingly phlegmatically nongovernmental dogtrotting wigwagging parapsychology archbishoprics beachcombers archdeacons thoroughgoing bathhouses babushkas arithmetically biotechnology catchphrase philanthropically mouthwatering inconspicuousness annihilators shanghaiing demijohns sportsmanlike deliquescent conversationalists triumvirates contrariwise transfixing sukiyaki prizefighters jitterbugging photojournalists jurisdictional blackballing blackcurrant backdating cantankerousness thankfulness blackguards blockhouses lockjaw yukking huckleberries brinkmanship kookaburras backpedals bankrolling backstretches blackthorns skulduggery anticlockwise buckyballs spellbinders spellcheckers officeholders overindulgence levelheadedness killjoys streetwalkers schoolmistresses invulnerability palpitations milquetoasts chivalrously galvanometers councilwoman discombobulating gimcracks humdingers interdepartmental circumflexes warmhearted interdenominational mkay circumlocutions telecommunication anthropomorphism kumquats armrests bantamweights mysteriousness boysenberries teleconferencing circumnavigating unhesitatingly conjunctivitis dimensionless environmentalism interconnections unpredictability inquisitiveness nonrepresentational counterrevolutions discontinuances overanxious mulligatawny extravaganzas prohibitionists boisterousness psychokinesis grandiloquence atmospherically incontrovertible flamethrowers detoxification spermatozoon shipbuilders slipcovers snapdragons sheepfolds popguns slipknots developmental pneumatically apprehensiveness circumscriptions unscrupulousness sleepwalkers aromatherapy noninterference hypoallergenic porterhouses crackerjacks telemarketing disorderliness predetermination overqualified incorruptibility counterweights counterrevolutionary overzealous crossbreeding conscientiousness disfranchisement thanksgivings disjointedly muskellunges unreasonableness misquotations disreputably transversely swashbucklers syllabification carpetbaggers boastfulness remortgaging catkins shuttlecocking forthrightness breastplates agriculturalists outvoting trustworthiness chintziest longitudinally genuflections lugubriousness brouhahas jujitsu interleukin muumuus antediluvian luxuriousness colloquy puzzlement chevrons skivvying waterboardings shadowboxing weatherproofing viewfinders lawgivers horsewhipping nighthawks sawmills clownishness cowpunchers wrongheadedness newspaperwoman swallowtails knockwursts billowy frowziest counterexamples oxbows unexceptionable oxfords foxgloves inexhaustibly sexless laxness exorbitantly expostulations coxswains extemporaneously waxwings oxyacetylene cyberbullies underemployed ladyfingers lollygagging policyholders skyjackers asymmetrically embryologists cryptocurrencies tyrannosauruses crystallographic electrolytes polyunsaturated pennyweights asphyxia quizzically buzzkills bedazzling hazmat gazpacho mazurkas zwieback lazybones";kt.scowl_70_short="aah ab ac ad ae aft aga ah ai haj aka al am an ciao ape aqua ar as at aud av aw ax aye azo aba abb bobcat bd be bf pibgorn abhor bi obj bk bl abmho cobnut boa bp br abs btl bu abvolt lbw bx by subzero ca ecbolic cc cd ace cf cg ch cig ck cl cm acne co cp acquit cr cs ct cu cw cyl czar dab db dc dd de gadfly dg edh di adj dk bdl dm ordn do dpi hdqrs dr ads obdt dub adv dwt dye dz ea deb dec ed bee def beg eh lei eject eek el em en eon dep eq er es et feu eve dew ex bey fez fa offbeat offcuts mfd fec ff mfg offhand fib fjeld offkey fl fm hafnium fo fp fr ifs ft fug fwd defy rugby agcy gds age bagful egg ugh gi logjam gl gm gnu go magpie gr gs gt gum dogvane hgwy gym zigzag ha cashbox ahchoo hd he hf hg hhd hi kishke hl chm john ho hp earthquake hr chs ht hub boschvark hwy hyp machzor ria ib hic id die if big ihram aalii bijou oik ail aim in bio dip liq air is it ilium civ iwis fix hiya biz ja jct jet jg jib hajj prajna jo jr adjt jug ka kb kc jackdaw eke nakfa kg ankh ki lockjaw dekko kl km kn koa kph kr ks kt haku kvass kw sky la lb talc eld ale elf lg pelham li killjoy alk ll lm ln lo alp calque dlr ls alt flu lv lwei lx fly colza ma mb emcee mdse me mf mg mho mi ramjet mk ml mm damn mo mp kumquat amrita ms mt mu duumvir dimwit my hamza ana inbox enc and ne inf eng sinh nib conj ink enl unman ann no tnpk cinque nr ans ant nu inv unwed jinx any bonze ob doc od doe of bog oh oi mojo oka col om on oo op loq or os bot fou gov ow ox boy oz pa peepbo pc pd pe pf pg pi kopje pk pl pm apnea pod pp pr ps pt pub pvt pwn pya pzazz qadi sheqel qi ql qoph sqq qr qt qu qwerty bra arb arc rd re barf erg rho interj ark birl rm urn bro rpm cirque arr rs rt cru arvo crwth cry orzo sac sb sc sd sea sf sgd sh si masjid ask isl ism assn so sp sq sri ss st sub svelte swab sym grosz ta tb etc gtd ate artful mtg fth ti muntjac latke atm tn to hatpin cotquean tr ts att tub outvote two qty ditz qua bub buck cue buff aug uh oui juju auk bul um bun duo up tuque bur us ut lituus guv thruway aux buy buzz ova vb avdp ave avg vhf via vlf avn vo livre vs ovum vv ivy evzone wad bawbee bawcock wd we awful gewgaw whf wig blowjob wk awl cwm awn wo twp wry bows wt swum bowwow fwy blowzy coxa oxbow exc flexdollars axed boxful foxglove exhale xi axle taxman laxness axon exp exquisite exr bxs ext xu paxwax boxy ya flyby syce yd ye dayfly tyg anyhow yid skyjack dyke syn yo gyp yr mys byte yuk gyve ywis pyx sayyid coryza zap whizzbang vizcacha samizdat zed fizgig muzhik zig britzka zloty gizmo kibbutznik chutzpah buzzsaw azure mitzvah buzzword cozy";kt.scowl_70_frequent="aardwolves honorificabilitudinitatibus psychopharmacologies contradistinctively aerothermodynamics tetrafluoroethylene supercalifragilisticexpialidocious tetrahydrocannabinol photoreconnaissance majoritarianism groundbreakings pneumonoultramicroscopicsilicovolcanoconiosis extraordinarily electroencephalographic anthraquinone antidisestablishmentarianisms overenthusiastically floccinaucinihilipilification circumnavigations unseaworthiness chemoprophylaxis companionways succinylsulfathiazole bacteriologically flabbergasting subclassification subdirectories overbearingnesses dumbfounding subglacial abhorrently objectionableness knobkerries subminiaturize subnormalities bourgeoisification subprofessionals tribromoethanols insubstantialities unobtrusiveness subventionary cobwebbiest bxs presbyterianism subzero ecbolic synecdochically cf cg dichlorodiphenyltrichloroethane buckminsterfullerene chlortetracyclines blancmanges chromaticness ecphonesis acquaintanceship colicweed czarevitch hippopotomonstrosesquipedalian rebroadcasting featherbedding departmentalization grandfathering curmudgeonliness goodheartedness adjudications handkerchiefs otherworldlinesses maladministration straightforwardness childproofing headquartering magnetohydrodynamics straightforwards bloodthirstiness individualistically disadvantageously hundredweights dziggetais chickenheartedness thrombophlebitides feeblemindednesses indefatigabilities photodisintegration incomprehensibility deinstitutionalization nonprejudicial triskaidekaphobias contemporaneousnesses inconsequentiality counterrevolutionaries praiseworthiness attorneyships piezoelectricities surfboardings unselfconsciousness chiefdom counteroffensives roofgarden halfheartedness fjords offkey engulfment aloofness halfpennyworth softheartednesses halfwitted interstratifying hummingbirds dogcatchers subkingdoms counterinsurgencies meaningfulness microaggressions logjams glomerulonephritides segmentalization otorhinolaryngologists stringpiece misunderstandings superstrength contradistinguished dogvane songwriters otorhinolaryngology zigzagging archbishoprics archconservative archdeaconries reproachfulness thoroughgoing highhandedness babushkas biotechnological thoroughpaced earthquakes pseudohermaphroditism electroencephalographs boschvark northwestwardly electroencephalography machzor triiodomethane bijouterie unsportsmanlike impressionistically hemidemisemiquavers microsporangium uncommunicativenesses contrariwise interlocutrix semiyearly compartmentalization straitjacketing jct jg jitterbugging hajjes prajna photojournalists jr adjt injudiciousness lackadaisicalness stockbrokerage blackcurrants backdating breakfasting backgrounders backhandedness counterattacking stockjobbers bookkeepers kaffeeklatsches acknowledgments cuckooflowers backpedaling bankruptcies backscratchers breakthroughs skulduggery kvetchers counterclockwise ankylostomiasis albuminurias tetramethyldiarsine algorithmically diphenylhydantoins killjoys phenylketonuria diacetylmorphine caesalpiniaceous unnilquadiums hexylresorcinol convolvulaceous pickerelweeds calxes calzone somnambulistically uncircumcision humdingers uncomfortableness circumgyration warmheartedness circumjacent gymkhanas circumlocutions kumquats steamrollering circumterrestrial multidimensionality circumvallating bantamweights dihydrostreptomycin hamza nonbelligerents undemonstrativeness videoconferencing environmentalists unpretentiousnesses inquisitiveness nonrepresentational deoxyribonuclease conversationalists unwholesomeness nasopharynxes dinitrobenzene unapproachabilities autobiographically chlorofluorocarbons brokenheartedly grandiloquently underemployment photozincography clapboarding stepchildren stepdaughters leapfrogging campgrounds flapjacks pumpkinseeds oversimplifications developmentally disproportionateness disputatiousness impv shipwrecking endocrinotherapy pzazz sheqalim sheqel qindarkas ql qophs seqq hdqrs qto qwerty electrocardiographic interjectionally disembarkation preternaturalness anthropomorphically overqualified electrodynamometers ultraconservatives bilharziases jurisdictional unsatisfactoriness disgracefulness disjointedness contemporaneously misrepresentations transvestitisms upperclasswoman groszy heartbreakingly postconvalescent outdistancing roentgenotherapy pocketknives indiscreetnesses bulletproofing cotquean glottochronologies bodhisattva untrustworthiness quartziferous intellectualization insufficiently superdreadnought kieselguhrs hallelujahs lukewarmness dichlorodifluoromethane chautauqua duumvirate chauvinistically rauwolfias juxtapositional ventriloquy muzzleloading vb avdp incontrovertibilities avg vhf pavlovas czarevna vraisemblance leitmotivs advt improvvisatore heavyweights evzone shadowboxings cowcatchers bowdlerizations weatherboardings sorrowfulness shadowgraphs wholeheartedness showjumping sparrowhawks snowmobiling downheartedness cowpunchers wrongheadedness newspaperwoman yellowthroats knockwursts hollowwares lawyerly frowziness hexamethylenetetramine boxberries excommunications sexdecillion exemplifications exfoliating foxgloves exhibitionistically lexicographically orthodoxly fluxmeter complexnesses inexorabilities exquisiteness boxrooms exsanguinate extemporaneousness heterosexuality maxwells cyanocobalamins cybernetician encephalomyelitis gillyflowers acanthopterygians platyhelminths skyjackings pyknic polymorphonuclear electromyographies hyperparathyroidism psychophysiological demythologizations polyunsaturated polyvalence archaeopteryxes sayyid psychoanalyzing whizzbangs mezcaline samizdat anthropomorphized wayzgoose muzhiks anthropomorphizing blitzkriegs bamboozlement quizmasters kibbutzniks chutzpah buzzsaw gazumping rendezvousing buzzwords zygophyllaceous";class K0{constructor(e={}){this.textBlocks=[],this.lineBreakers=e.lineBreakers||[" "," "," "],this.data=[],this.pixelHeight=0,this.canvasMaxes=e.canvasMaxes,this.ctx=e.ctx,this.project=e.project||xe(),this.options=new Kr(e.options),this.hasDrawableCharacters=!1,this.drawPageExtras=e.drawPageExtras||!1,this.drawLineExtras=e.drawLineExtras||!1,this.drawCharacterExtras=e.drawCharacterExtras||!1,this.drawCharacter=e.drawCharacter||!1,this.roundUp=e.roundUp||!1,this.generateData()}get canvasMaxes(){return this._canvasMaxes}set canvasMaxes(e){this._canvasMaxes=new $t({xMin:e.xMin||0,xMax:e.xMax||1/0,yMin:e.yMin||0,yMax:e.yMax||1/0})}draw({showPageExtras:e=!1,showLineExtras:r=!1,showCharacterExtras:n=!1,showCharacter:a=!1}={}){if(this.drawPageExtras&&e&&this.drawPageExtras(this.ctx,this),this.options.text==="")return;let o=-1;this.drawLineExtras&&r&&this.iterator(s=>{s.lineNumber!==o&&(this.drawLineExtras(this.ctx,s,this),o=s.lineNumber)}),this.drawCharacterExtras&&n&&this.iterator(s=>{this.drawCharacterExtras(this.ctx,s,this.roundUp)}),this.drawCharacter&&a&&this.iterator(s=>{this.drawCharacter(this.ctx,s)})}iterator(e){for(let r=0;r<this.data.length;r++)for(let n=0;n<this.data[r].length;n++)e(this.data[r][n],this)}drawCanvasMaxes(e){e.fillStyle="transparent",e.strokeStyle="lime",e.lineWidth=1,e.strokeRect(this.canvasMaxes.xMin,this.canvasMaxes.yMin,this.canvasMaxes.width,this.canvasMaxes.height)}generateData(){var q;let e,r,n,a,o=0,s,x,E;for(this.data=[],this.textBlocks=this.options.text.split(`
`),n=0;n<this.textBlocks.length;n++)for(e=q1(this.textBlocks[n].split(""),this.project),this.data[n]=[],a=0;a<e.length;a++)r=e[a],r.startsWith("liga-")?(E=this.project.ligatures[r],r=E.chars):E=this.project.getItem(`glyph-${Yr(r)}`),(q=E==null?void 0:E.shapes)!=null&&q.length&&(this.hasDrawableCharacters=!0),s=E?E.advanceWidth:this.project.defaultAdvanceWidth,x=qr(r,e[a+1]),o+=s+x,this.data[n][a]={char:r,item:E,view:!1,widths:{advance:s,kern:x,aggregate:o},isLineBreaker:this.lineBreakers.indexOf(r)>-1,isVisible:!1,lineNumber:!1};let T,d,g,y=0,C=0,k=0,Y=!1;const _=this.options.fontSize/this.project.totalVertical,V=this.project.settings.font.ascent,ee={lineHeight:this.project.totalVertical+this.options.lineGap/_,width:this.canvasMaxes.width/_,yMax:this.canvasMaxes.yMax/_,yMin:this.canvasMaxes.yMin/_,xMin:this.canvasMaxes.xMin/_};for(this.options.pageHeight==="auto"&&(ee.yMax=1/0),C=ee.xMin,k=ee.yMin+V,n=0;n<this.data.length;n++){for(e=this.data[n],a=0;a<e.length;a++){if(T=e[a],T.view===!1){if(Y&&Number.isFinite(ee.width)){if(d=tE(e,a),g=d.widths.aggregate+d.widths.advance-T.widths.aggregate,C+g>ee.width){if(y++,k+ee.lineHeight>ee.yMax)return;C=ee.xMin,k=ee.yMin+V+y*ee.lineHeight}Y=!1}T.isVisible=!0,T.lineNumber=y,T.view={dx:C*_,dy:k*_,dz:_},C+=T.widths.advance+T.widths.kern}T.isLineBreaker&&(Y=!0)}if(y++,k+ee.lineHeight>ee.yMax)return;C=ee.xMin,k=ee.yMin+V+y*ee.lineHeight,this.pixelHeight=y*ee.lineHeight*_}}}function tE(t,e){for(let n=e;n<t.length;n++)if(t[n].isLineBreaker)return t[n];return t[t.length-1]}function qr(t,e){if(!t||!e)return 0;t=Ln(t).join(""),e=Ln(e).join("");let r=xe().kerning,n,a,o;for(let s of Object.keys(r))for(let x=0;x<r[s].leftGroup.length;x++)if(n=r[s].leftGroup[x],Ln(n)[0]===t){for(let E=0;E<r[s].rightGroup.length;E++)if(a=r[s].rightGroup[E],Ln(a)[0]===e)return o=r[s].value*-1,o}return 0}function q1(t,e){e=e||xe();const r=e.sortedLigatures;let n,a;for(let o=0;o<t.length;o++)for(let s=0;s<r.length;s++)n=r[s].chars,a=t.slice(o,o+n.length).join(""),a===n&&t.splice(o,n.length,r[s].id);return t}class go{constructor(e={}){this.objType="Guide",this.angle=e.angle===0?0:90,this.name=e.name,this.location=isNaN(parseInt(e.location))?200:parseInt(e.location),this.color=e.color||AA,this.visible=!!e.visible}save(){let e={},r=this.name;return r!=="Horizontal guide"&&r!=="Vertical guide"&&r!=="Guide"&&(e.name=this.name),this.angle!==90&&(e.angle=this.angle),this.location!==200&&(e.location=this.location),this.color!==AA&&(e.color=this.color),this.visible||(e.visible=this.visible),e}get name(){return this._name||(this.angle===90?this._name="Horizontal guide":this.angle===0?this._name="Vertical guide":this._name="Guide"),this._name}set name(e){e||(this.angle===90?e="Horizontal guide":this.angle===0?e="Vertical guide":e="Guide"),this._name=e}}const AA="rgb(127, 0, 255)",V0="rgb(227, 190, 171)",_0="rgb(212, 154, 125)",ga="rgb(191, 106, 64)";function sA(t){let e=[],r=(t==null?void 0:t.attributes)||{},n=Number(r.r)||Number(r.rx)||100;n=Math.abs(n);let a=Number(r.r)||Number(r.ry)||100;a=Math.abs(a);let o=Number(r.cx)||0,s=Number(r.cy)||0;if(!(n===0&&a===0)){let x={xMin:o-n,xMax:o+n,yMin:s-a,yMax:s+a};e=rE(x)}return[e]}function rE(t){let e=t.xMin,r=t.yMax,n=t.xMax,a=t.yMin,o=(n-e)/2,s=(r-a)/2,x=o*.448,E=s*.448,T={x:be(e+o),y:be(r)},d={x:be(e+x),y:be(r)},g={x:be(n-x),y:be(r)},y={x:be(n),y:be(a+s)},C={x:be(n),y:be(r-E)},k={x:be(n),y:be(a+E)},Y={x:be(e+o),y:be(a)},_={x:be(n-x),y:be(a)},V={x:be(e+x),y:be(a)},ee={x:be(e),y:be(a+s)},q={x:be(e),y:be(a+E)},he={x:be(e),y:be(r-E)};return[[T,g,C,y],[y,k,_,Y],[Y,V,q,ee],[ee,he,d,T]]}function Q1(t,e,r,n,a,o,s,x,E,T){let d={x:t,y:e},g={x,y:E};if(t===x&&e===E||!r||!n)return[d.x,d.y,g.x,g.y,g.x,g.y];let y=nE(a);o=!!o,s=!!s;let C={},k,Y;if(T)k=T[0],Y=T[1],C={x:T[2],y:T[3]};else{d=li(d,y*-1),g=li(g,y*-1);let We=(d.x-g.x)/2,ke=(d.y-g.y)/2,At=ke*ke,st=We*We,de=st/(r*r)+At/(n*n);de>1&&(de=Math.sqrt(de),r*=de,n*=de);let It=r*r,Ae=n*n,$e=o===s?-1:1;$e*=Math.sqrt(Math.abs((It*Ae-It*At-Ae*st)/(It*At+Ae*st))),C.x=$e*r*ke/n+(d.x+g.x)/2,C.y=$e*-1*n*We/r+(d.y+g.y)/2,k=Math.asin((d.y-C.y)/n),Y=Math.asin((g.y-C.y)/n),k=d.x<C.x?Math.PI-k:k,Y=g.x<C.x?Math.PI-Y:Y;let lt=Math.PI*2;k<0&&(k=lt+k),Y<0&&(Y=lt+Y),s&&k>Y&&(k=k-lt),!s&&Y>k&&(Y=Y-lt)}let _=Y-k,V=[],ee=Math.PI*120/180;if(Math.abs(_)>ee){let We=Y,ke=g.x,At=g.y;Y=k+ee*(s&&Y>k?1:-1),g.x=C.x+r*Math.cos(Y),g.y=C.y+n*Math.sin(Y),V=Q1(g.x,g.y,r,n,a,0,s,ke,At,[Y,We,C.x,C.y])}let q={x:Math.cos(k),y:Math.sin(k)},he={x:Math.cos(Y),y:Math.sin(Y)};_=Y-k;let ce=Math.tan(_/4)*4/3,oe={x:d.x,y:d.y},Te={x:d.x+r*ce*q.y,y:d.y-n*ce*q.x};Te.x=2*oe.x-Te.x,Te.y=2*oe.y-Te.y;let Ie={x:g.x+r*ce*he.y,y:g.y-n*ce*he.x},fe={x:g.x,y:g.y};if(V=[Te.x,Te.y,Ie.x,Ie.y,fe.x,fe.y].concat(V),T)return V;{let We=[];for(let ke=0;ke<V.length;ke++)ke%2?We[ke]=li({x:V[ke-1],y:V[ke]},y).y:We[ke]=li({x:V[ke],y:V[ke+1]},y).x,We[ke]=be(We[ke]);return We}}function nE(t){return t*(Math.PI/180)}function li(t,e,r){if(!t)return;if(e===0)return t;r=r||{},r.x=r.x||0,r.y=r.y||0;const n={x:0,y:0};return n.x=Math.cos(e)*(t.x-r.x)-Math.sin(e)*(t.y-r.y)+r.x,n.y=Math.sin(e)*(t.x-r.x)+Math.cos(e)*(t.y-r.y)+r.y,n}function lA(t={}){const e=t.attributes.d||"";if(e.length===0||e.length===1)return[];let r=iE(e);return r=oE(r),r=AE(r),r=sE(r),r=lE(r),r=xE(r),r=EE(r),aE(r)}function aE(t){let e=[],r=[],n=0,a=0;return t.forEach(o=>{const s=o.parameters||[];s.forEach((x,E)=>s[E]=be(x)),o.type==="M"&&(n=s[0],a=s[1]),o.type==="L"&&(r.push([{x:n,y:a},!1,!1,{x:s[0],y:s[1]}]),n=s[0],a=s[1]),o.type==="C"&&(r.push([{x:n,y:a},{x:s[0],y:s[1]},{x:s[2],y:s[3]},{x:s[4],y:s[5]}]),n=s[4],a=s[5]),o.type==="Z"&&(e.push(r),r=[])}),r.length&&e.push(r),e}function iE(t){let e=[],r=!1,n=rs(t);for(let a=0;a<n.length;a++)if(xA(n.charAt(a))){r=a;break}if(r===!1)return[{type:"Z"}];for(let a=r+1;a<n.length;a++)xA(n.charAt(a))&&(e.push({type:n.charAt(r),parameters:J0(n.substring(r+1,a))}),r=a);return r<n.length-1&&e.push({type:n.charAt(r),parameters:J0(n.substring(r+1,n.length))}),e}function oE(t){let e=[],r={},n={x:0,y:0},a={x:0,y:0};return t.forEach(o=>{if(o.type==="m"||o.type==="l"){r={type:o.type==="m"?"M":"L",parameters:[]};for(let s=0;s<o.parameters.length;s+=2)a.x=o.parameters[s+0]+n.x,a.y=o.parameters[s+1]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="h"){r={type:"H",parameters:[]};for(let s=0;s<o.parameters.length;s++)a.x=o.parameters[s]+n.x,r.parameters.push(a.x),n.x=a.x;e.push(r)}else if(o.type==="v"){r={type:"V",parameters:[]};for(let s=0;s<o.parameters.length;s++)a.y=o.parameters[s]+n.y,r.parameters.push(a.y),n.y=a.y;e.push(r)}else if(o.type==="c"){r={type:"C",parameters:[]};for(let s=0;s<o.parameters.length;s+=6)r.parameters.push(o.parameters[s+0]+n.x),r.parameters.push(o.parameters[s+1]+n.y),r.parameters.push(o.parameters[s+2]+n.x),r.parameters.push(o.parameters[s+3]+n.y),a.x=o.parameters[s+4]+n.x,a.y=o.parameters[s+5]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="s"){r={type:"S",parameters:[]};for(let s=0;s<o.parameters.length;s+=4)r.parameters.push(o.parameters[s+0]+n.x),r.parameters.push(o.parameters[s+1]+n.y),a.x=o.parameters[s+2]+n.x,a.y=o.parameters[s+3]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="q"){r={type:"Q",parameters:[]};for(let s=0;s<o.parameters.length;s+=4)r.parameters.push(o.parameters[s+0]+n.x),r.parameters.push(o.parameters[s+1]+n.y),a.x=o.parameters[s+2]+n.x,a.y=o.parameters[s+3]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="t"){r={type:"T",parameters:[]};for(let s=0;s<o.parameters.length;s+=2)a.x=o.parameters[s+0]+n.x,a.y=o.parameters[s+1]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else if(o.type==="a"){r={type:"A",parameters:[]};for(let s=0;s<o.parameters.length;s+=7)r.parameters.push(o.parameters[s+0]),r.parameters.push(o.parameters[s+1]),r.parameters.push(o.parameters[s+2]),r.parameters.push(o.parameters[s+3]),r.parameters.push(o.parameters[s+4]),a.x=o.parameters[s+5]+n.x,a.y=o.parameters[s+6]+n.y,r.parameters.push(a.x),r.parameters.push(a.y),n.x=a.x,n.y=a.y;e.push(r)}else o.type==="z"?e.push({type:"Z"}):(e.push(o),n=Va(n,o))}),e}function AE(t){let e=[];return t.forEach(r=>{if(r.type)switch(r.type){case"Z":case"z":e.push({type:"Z"});break;case"H":case"V":case"h":case"v":for(let n=0;n<r.parameters.length;n+=2)e.push({type:r.type,parameters:[r.parameters[n]]});break;case"M":for(let n=0;n<r.parameters.length;n+=2)e.push({type:n<2?"M":"L",parameters:[r.parameters[n],r.parameters[n+1]]});break;case"m":for(let n=0;n<r.parameters.length;n+=2)e.push({type:n<2?"m":"l",parameters:[r.parameters[n],r.parameters[n+1]]});break;case"L":case"T":case"l":case"t":for(let n=0;n<r.parameters.length;n+=2)e.push({type:r.type,parameters:[r.parameters[n],r.parameters[n+1]]});break;case"Q":case"S":case"q":case"s":for(let n=0;n<r.parameters.length;n+=4)e.push({type:r.type,parameters:[r.parameters[n],r.parameters[n+1],r.parameters[n+2],r.parameters[n+3]]});break;case"C":case"c":for(let n=0;n<r.parameters.length;n+=6)e.push({type:r.type,parameters:[r.parameters[n],r.parameters[n+1],r.parameters[n+2],r.parameters[n+3],r.parameters[n+4],r.parameters[n+5]]});break;case"A":case"a":for(let n=0;n<r.parameters.length;n+=7)e.push({type:r.type,parameters:[r.parameters[n],r.parameters[n+1],r.parameters[n+2],r.parameters[n+3],r.parameters[n+4],r.parameters[n+5],r.parameters[n+6]]});break}}),e}function sE(t){let e=[],r={x:0,y:0};return t.forEach(n=>{if(n.type==="H")for(let a=0;a<n.parameters.length;a++)e.push({type:"L",parameters:[n.parameters[a],r.y]});else if(n.type==="V")for(let a=0;a<n.parameters.length;a++)e.push({type:"L",parameters:[r.x,n.parameters[a]]});else e.push(n);r=Va(r,n)}),e}function lE(t){let e=[],r={x:0,y:0},n={x:0,y:0},a={x:0,y:0},o;return t.forEach(s=>{s.type==="S"||s.type==="T"?(o=e.length>1?e.at(-1):!1,o&&o.type==="C"?(n.x=o.parameters[2],n.y=o.parameters[3]):o&&o.type==="Q"?(n.x=o.parameters[0],n.y=o.parameters[1]):(n.x=r.x,n.y=r.y),a={x:r.x-n.x+r.x,y:r.y-n.y+r.y},s.type==="S"?e.push({type:"C",parameters:[a.x,a.y,s.parameters[0],s.parameters[1],s.parameters[2],s.parameters[3]]}):s.type==="T"&&e.push({type:"Q",parameters:[a.x,a.y,s.parameters[0],s.parameters[1]]})):e.push(s),r=Va(r,s)}),e}function xE(t){let e=[],r={x:0,y:0},n,a,o,s,x,E,T,d,g,y;return t.forEach(C=>{C.type==="Q"?(n=r.x,a=r.y,o=C.parameters[0],s=C.parameters[1],x=C.parameters[2],E=C.parameters[3],T=n+2/3*(o-n),d=a+2/3*(s-a),g=x+2/3*(o-x),y=E+2/3*(s-E),e.push({type:"C",parameters:[T,d,g,y,x,E]})):e.push(C),r=Va(r,C)}),e}function EE(t){let e=[],r=[],n={x:0,y:0};return t.forEach(a=>{if(a.type==="A")for(let o=0;o<a.parameters.length;o+=7){r=Q1(n.x,n.y,a.parameters[o+0],a.parameters[o+1],a.parameters[o+2],a.parameters[o+3],a.parameters[o+4],a.parameters[o+5],a.parameters[o+6],!1);for(let s=0;s<r.length;s+=6)e.push({type:"C",parameters:[r[s+0],r[s+1],r[s+2],r[s+3],r[s+4],r[s+5]]});n={x:r.at(-2),y:r.at(-1)}}else e.push(a),n=Va(n,a)}),e}function Va(t,e){let r={x:t.x||0,y:t.y||0};switch(e.type){case"Z":case"z":break;case"H":r.x=e.parameters.at(-1);break;case"V":r.y=e.parameters.at(-1);break;case"M":case"L":case"C":case"S":case"A":case"Q":case"T":r.x=e.parameters.at(-2),r.y=e.parameters.at(-1);break;case"h":for(let n=0;n<e.parameters.length;n++)r.x+=e.parameters[n];break;case"v":for(let n=0;n<e.parameters.length;n++)r.y+=e.parameters[n];break;case"m":case"l":case"t":for(let n=0;n<e.parameters.length;n+=2)r.x+=e.parameters[n+0],r.y+=e.parameters[n+1];break;case"q":case"s":for(let n=0;n<e.parameters.length;n+=4)r.x+=e.parameters[n+2],r.y+=e.parameters[n+3];break;case"c":for(let n=0;n<e.parameters.length;n+=6)r.x+=e.parameters[n+4],r.y+=e.parameters[n+5];break;case"a":for(let n=0;n<e.parameters.length;n+=7)r.x+=e.parameters[n+5],r.y+=e.parameters[n+6];break}return r}function xA(t){return"MmLlCcSsZzHhVvAaQqTt".indexOf(t)>-1}function EA(t){var a;let e=[],r=(a=t==null?void 0:t.attributes)==null?void 0:a.points;r=rs(r);let n=J0(r);if(n.length>4){let o=Number(n[0]),s=Number(n[1]);for(let x=0;x<n.length;x+=2){let E=Number(n[x])||0,T=Number(n[x+1])||0;e.push([{x:be(o),y:be(s)},!1,!1,{x:be(E),y:be(T)}]),o=E,s=T}}return[e]}function LE(t){let e=t.attributes||{},r=be(e.x)||0,n=be(e.y)||0,a=be(e.width)||100,o=be(e.height)||100,s=r+a,x=n+o,E={x:r,y:n},T={x:s,y:n},d={x:s,y:x},g={x:r,y:x};return[[[E,!1,!1,T],[T,!1,!1,d],[d,!1,!1,g],[g,!1,!1,E]]]}function hE(t){var o;if(!t||!(t!=null&&t.attributes))return[];const e=["matrix","translate","scale","rotate","skewx","skewy"];let r=[],n,a;return(o=t.attributes)!=null&&o.transform&&(n=t.attributes.transform.replaceAll(","," "),n=n.replaceAll("  "," "),n=n.toLowerCase(),n=n.split(")"),n.forEach(s=>{let x=s.split("(");x.length===2&&(x[0]=x[0].trim(),x[1]=x[1].trim(),e.indexOf(x[0])>-1&&(a=x[1].split(" "),a=a.map(E=>Number(E)),r.push({name:x[0],args:a})))})),t.attributes["transform-origin"]&&(n=t.attributes["transform-origin"],n=n.replaceAll(","," "),n=n.replaceAll("  "," "),a=n.split(" "),a=a.map(s=>Number(s)),r.push({name:"origin",args:a})),r}function cE(t=[],e=[]){JSON.stringify(t);const r=structuredClone(t);JSON.stringify(r);let n=e.reverse(),a=[0,0];for(let o=0;o<n.length;o++)if(n[o].name==="origin"){a=n.splice(o,1),a=a[0].args;break}return JSON.stringify(n),`${a.toString()}`,n.forEach(o=>{if(LA[o.name]){`${o.name}`;const s=LA[o.name];r.forEach((x,E)=>{x.forEach((T,d)=>{const g=s(T,o.args,a);r[E][d]=g})})}}),JSON.stringify(r),r}const LA={matrix:TE,translate:IE,scale:dE,rotate:uE,skewx:pE,skewy:SE};function TE(t=[],e=[],r=[]){const n=[];for(;e.length<6;)e.push(0);`${e.toString()}`;function a(o){if(o===!1)return!1;const s=o.x,x=o.y,E={x:0,y:0};return E.x=be(1*e[0]*s+1*e[2]*x+1*e[4]),E.y=be(1*e[1]*s+1*e[3]*x+1*e[5]),E}return n[0]=a(t[0]),n[1]=a(t[1]),n[2]=a(t[2]),n[3]=a(t[3]),n}function IE(t=[],e=[],r=[]){const n=[],a=e[0]||0,o=e[1]||0;`${t[0].x}${t[0].y}`;function s(x){if(x===!1)return!1;const E={x:0,y:0};return E.x=be(x.x+a),E.y=be(x.y+o),E}return n[0]=s(t[0]),n[1]=s(t[1]),n[2]=s(t[2]),n[3]=s(t[3]),n}function dE(t=[],e=[],r=[]){const n=e[0];let a=e[1];a||(a=n);const o=[];`${e.toString()}`;function s(x){if(x===!1)return!1;const E={x:0,y:0};return E.x=be(x.x*n),E.y=be(x.y*a),E}return o[0]=s(t[0]),o[1]=s(t[1]),o[2]=s(t[2]),o[3]=s(t[3]),o}function uE(t=[],e=[],r=[]){`${r.toString()}`;const n=Ro(e[0]),a={x:0,y:0};e[1]||(e[1]=0),e[2]||(e[2]=0),a.x=e[1]+r[0],a.y=e[2]+r[1];const o=[];`${e.toString()}`;function s(x){if(!x)return!1;const E={x:0,y:0};return E.x=be(Math.cos(n)*(x.x-a.x)-Math.sin(n)*(x.y-a.y)+a.x),E.y=be(Math.sin(n)*(x.x-a.x)+Math.cos(n)*(x.y-a.y)+a.y),E}return o[0]=s(t[0]),o[1]=s(t[1]),o[2]=s(t[2]),o[3]=s(t[3]),o}function pE(t=[],e=[],r=[]){const n=[];`${e.toString()}`;const a=Ro(e[0]),o=Math.tan(a);function s(x){if(!x)return!1;const E=x.x,T=x.y,d={x:0,y:0};return d.x=be(E+o*T),d.y=be(T),d}return n[0]=s(t[0]),n[1]=s(t[1]),n[2]=s(t[2]),n[3]=s(t[3]),n}function SE(t=[],e=[],r=[]){const n=[];`${e.toString()}`;const a=Ro(e[0]),o=Math.tan(a);function s(x){if(!x)return!1;const E=x.x,T=x.y,d={x:0,y:0};return d.x=be(E),d.y=be(T+o*E),d}return n[0]=s(t[0]),n[1]=s(t[1]),n[2]=s(t[2]),n[3]=s(t[3]),n}function Ro(t){return Math.PI/180*parseFloat(t)}function CE(t){let e,r;if(typeof window.DOMParser<"u")e=new window.DOMParser().parseFromString(t,"text/xml");else if(typeof window.ActiveXObject<"u"&&new window.ActiveXObject("Microsoft.XMLDOM"))e=new window.ActiveXObject("Microsoft.XMLDOM"),e.async="false",e.loadXML(t);else throw console.warn("No XML document parser found."),r=new SyntaxError("No XML document parser found."),r;if(e.getElementsByTagName("parserError").length){const o=e.getElementsByTagName("div")[0].innerHTML;throw r=new SyntaxError(fi(o)),r}return{name:e.documentElement.nodeName,attributes:es(e.documentElement.attributes),content:$1(e.documentElement)}}function $1(t){const e=t.childNodes;if(e.length===0)return fi(t.nodeValue);const r=[];let n,a,o;for(const s of e)n={},s.nodeName!=="#comment"&&(a=$1(s),o=es(s.attributes),s.nodeName==="#text"&&JSON.stringify(o)==="{}"?n=fi(a):(n.name=s.nodeName,n.attributes=o,n.content=a),n!==""&&r.push(n));return r}function es(t){if(!t||!t.length)return{};const e={};for(const r of t)e[r.name]=fi(r.value);return e}function fi(t){try{return t=t.replace(/^\s+|\s+$/g,""),t.replace(/(\r\n|\n|\r|\t)/gm,"")}catch{return""}}const gE=!1;function RE(t){let e=CE(t);return ts(e)}function ts(t){if(!(t!=null&&t.content))return[];let e=[];return t.content.forEach(r=>{const n=r.name.toLowerCase(),a=hE(r);if(hA[n]){let o=hA[n](r);a&&(o=cE(o,a)),e=e.concat(o)}}),e}const hA={circle:sA,ellipse:sA,path:lA,glyph:lA,polygon:EA,polyline:EA,rect:LE,g:ts};function rs(t){return t=t.replace(/\s+/g,","),t=t.replace(/e/gi,"e"),t=t.replace(/e-/g,"~~~"),t=t.replace(/-/g,",-"),t=t.replace(/~~~/g,"e-"),t=t.replace(/e\+/g,"~~~"),t=t.replace(/\+/g,","),t=t.replace(/~~~/g,"e+"),t=t.replace(/,+/g,","),t}function J0(t=""){let e=[];return t.charAt(0)===","&&(t=t.substring(1)),t.charAt(t.length-1)===","&&(t=t.substring(0,t.length-1)),t.length>0&&(t=t.split(","),t.forEach(r=>{if(r=r.split("."),r.length===1)e.push(Number(r[0]));else if(r.length===2)e.push(Number(r.join(".")));else if(r.length>2){e.push(+`${r[0]}.${r[1]}`);for(let n=2;n<r.length;n++)e.push(+`0.${r[n]}`)}})),e}function be(t){return t=yE(t),t=ns(t,gE),t}function ns(t,e=!1){return t?e===!1?parseFloat(t):(t=parseFloat(t),+(Math.round(`${t}e${e}`)+`e-${e}`)||0):0}function yE(t){const e=String(t);return(e.indexOf("00000")>-1||e.indexOf("99999")>-1)&&(t=ns(t,5)),t}class _r extends Dr{constructor({x:e=0,y:r=0,parent:n=!1}={}){super(),this.parent=n,this.x=e,this.y=r,this.objType="Coord"}save(){return{x:nr(this.x),y:nr(this.y)}}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{`;return n+=`x: ${Tt(this._x)?this._x:"--"}  `,n+=`y: ${Tt(this._y)?this._y:"--"}`,n+="}",n}get x(){return isNaN(this._x)?(this._x=0,console.warn("Coord.x was NaN, setting to 0"),0):this._x}get y(){return isNaN(this._y)?(this._y=0,console.warn("Coord.y was NaN, setting to 0"),0):this._y}set x(e){e=nr(e),isNaN(e)?this._x=0:this._x=e,this.changed()}set y(e){e=nr(e),isNaN(e)?this._y=0:this._y=e,this.changed()}}const mE=Object.freeze(Object.defineProperty({__proto__:null,Coord:_r},Symbol.toStringTag,{value:"Module"}));class we extends Dr{constructor({coord:e={},use:r=!0,xLock:n=!1,yLock:a=!1,parent:o=!1,type:s=""}={}){super(),this.parent=o,this.coord=e,this.use=r,this.xLock=n,this.yLock=a,this.type=s,this.objType="ControlPoint"}save(e=!1){const r={coord:this.coord.save()};return this.use||(r.use=!1),this.xLock&&(r.xLock=!0),this.yLock&&(r.yLock=!0),e&&(r.objType=this.objType),this.type==="p"&&delete r.use,r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{ControlPoint
`;return r+="  ",n+=`${r}coord: ${this.coord.print(e+1)}
`,this.type!=="p"&&(n+=`${r}use: ${this.use}
`),n+=`${r.substring(2)}}`,n}get x(){return this.use?this.coord.x:this.parent.p.x}get y(){return this.use?this.coord.y:this.parent.p.y}get coord(){return(this==null?void 0:this._coord)||new _r}get use(){return this._use!==!1}get xLock(){return this._xLock||!1}get yLock(){return this._yLock||!1}get type(){return this._type||"p"}set x(e){if(this.type==="p"){let r=e-this.x;this.parent?this.parent.updatePathPointPosition("p",r,0):this.coord.x=e}else this.coord.x=e,this.use=!0}set y(e){if(this.type==="p"){let r=e-this.y;this.parent?this.parent.updatePathPointPosition("p",0,r):this.coord.y=e}else this.coord.y=e,this.use=!0}set coord(e){this._coord=new _r(e),this._coord.parent=this,this.use=!0}set use(e){this._use=!!e,this.changed()}set xLock(e){this._xLock=!!e}set yLock(e){this._yLock=!!e}set type(e){this._type=e}get isLockable(){return!0}isLocked(e){return e==="x"?this.xLock:e==="y"?this.yLock:!1}lock(e){e==="x"&&(this.xLock=!0),e==="y"&&(this.yLock=!0)}unlock(e){e==="x"&&(this.xLock=!1),e==="y"&&(this.yLock=!1)}rotate(e,r){Ni(this.coord,e,r)}}const NE=Object.freeze(Object.defineProperty({__proto__:null,ControlPoint:we},Symbol.toStringTag,{value:"Module"}));class Kt extends Dr{constructor({p:e,h1:r,h2:n,type:a="corner",parent:o=!1}={}){super(),this.parent=o,this.p=e,this.h1=r,this.h2=n,this.type=a,this.objType="PathPoint",this.hasOverlappingHandle("h1")&&(this.h1.use=!1),this.hasOverlappingHandle("h2")&&(this.h2.use=!1)}save(e=!1){const r={type:this.type,p:this.p.save(e)};return(this.h1.use||!this.h1.use&&!this.hasOverlappingHandle("h1"))&&(r.h1=this.h1.save(e)),(this.h2.use||!this.h2.use&&!this.hasOverlappingHandle("h2"))&&(r.h2=this.h2.save(e)),e&&(r.objType=this.objType),r}print(e=0,r=!1){let n="";for(let s=0;s<e;s++)n+="  ";let a=He(r)?` ${He(r)}`:"",o=`${n}{PathPoint${a}
`;return n+="  ",o+=`${n}type: ${this.type}
`,o+=`${n}p: ${this.p.print(e+1)}
`,o+=`${n}h1: ${this.h1.print(e+1)}
`,o+=`${n}h2: ${this.h2.print(e+1)}
`,o+=`${n.substring(2)}}/PathPoint${a}`,o}get p(){return this._p||new we}get h1(){return this._h1||new we}get h2(){return this._h2||new we}get type(){return this._type||"corner"}get xLock(){return this.p.xLock}get yLock(){return this.p.yLock}get name(){let e=this.pointNumber===!1?"-1":this.pointNumber;return`${this.parent.name}: Path Point ${e}`}get pointNumber(){if(!this.parent)return!1;const e=this.parent.pathPoints;if(!e)return!1;for(let r=0;r<e.length;r++)if(e[r]===this)return r;return!1}set p(e){e||(e=new we),e.type="p",this._p=new we(e),this._p.parent=this}set h1(e){let r=!1;e||(e=new we,r=!0),(!e.coord||r)&&(e.coord=new _r({x:this.p.x-50,y:this.p.y}),e.use=!1),e.type="h1",this._h1=new we(e),this._h1.parent=this}set h2(e){let r=!1;e||(e=new we,r=!0),(!e.coord||r)&&(e.coord=new _r({x:this.p.x+50,y:this.p.y}),e.use=!1),e.type="h2",this._h2=new we(e),this._h2.parent=this}set type(e){e==="symmetric"?this.makeSymmetric():e==="flat"?this.makeFlat():this._type="corner"}updatePathPointPosition(e="p",r=0,n=0){switch(r=He(r),n=He(n),r=Number.isFinite(r)?r:0,n=Number.isFinite(n)?n:0,e){case"p":this.p.coord.x+=r,this.p.coord.y+=n,this.h1.coord.x+=r,this.h1.coord.y+=n,this.h2.coord.x+=r,this.h2.coord.y+=n;break;case"h1":this.h1.coord.x+=r,this.h1.coord.y+=n,this.h1.use&&(this.type==="symmetric"?this.makeSymmetric("h1"):this.type==="flat"&&this.makeFlat("h1"));break;case"h2":this.h2.coord.x+=r,this.h2.coord.y+=n,this.h2.use&&(this.type==="symmetric"?this.makeSymmetric("h2"):this.type==="flat"&&this.makeFlat("h2"));break}}makeSymmetric(e=!1){if(this._type="symmetric",!e&&(e=this.h1.use?"h1":"h2",!(this.h1.use||this.h2.use)&&pt(this.p.coord,this.h1.coord)&&pt(this.p.coord,this.h2.coord)))return this.h2.x-=200,this.h1.x+=200,this.h1.use=!0,this.h2.use=!0,this;this.h1.use=!0,this.h2.use=!0;let r,n,a=!1;switch(e){case"h1":r=this.p.x-this.h1.x+this.p.x,this.h2.x!==r&&(this.h2.x=r,a=!0),n=this.p.y-this.h1.y+this.p.y,this.h2.y!==n&&(this.h2.y=n,a=!0);break;case"h2":r=this.p.x-this.h2.x+this.p.x,this.h1.x!==r&&(this.h1.x=r,a=!0),n=this.p.y-this.h2.y+this.p.y,this.h1.y!==n&&(this.h1.y=n,a=!0);break}return this._type="symmetric",a&&(this.h1.use=!0,this.h2.use=!0),this}makeFlat(e=!1){if(this._type="flat",this.isFlat())return this;if(!e&&(e=this.h1.use?"h1":"h2",!(this.h1.use||this.h2.use)&&pt(this.p.coord,this.h1.coord)&&pt(this.p.coord,this.h2.coord)))return this.h2.x-=300,this.h1.x+=100,this;this.h1.use=!0,this.h2.use=!0;const r=En(this.h1.coord,this.p.coord),n=En(this.h2.coord,this.p.coord),a=Zn(this.p.coord,this.h1.coord),o=Zn(this.p.coord,this.h2.coord);let s,x,E,T;return e==="h1"?(E=Math.cos(r)*o,T=Math.tan(r)*E,s=this.p.x+E*-1,x=this.p.y+T*-1,!isNaN(s)&&!isNaN(x)&&(this.h2.x!==s&&(this.h2.x=s),this.h2.y!==x&&(this.h2.y=x))):e==="h2"&&(E=Math.cos(n)*a,T=Math.tan(n)*E,s=this.p.x+E*-1,x=this.p.y+T*-1,!isNaN(s)&&!isNaN(x)&&(this.h1.x!==s&&(this.h1.x=s),this.h1.y!==x&&(this.h1.y=x))),this}isFlat(){if(!this.h1.use||!this.h2.use)return!1;if(this.p.x===this.h1.x&&this.p.x===this.h2.x||this.p.y===this.h1.y&&this.p.y===this.h2.y)return!0;const e=En(this.h1.coord,this.p.coord),r=En(this.h2.coord,this.p.coord);return ae(Math.abs(e)+Math.abs(r),2)===3.14}reconcileHandle(e="h1"){let r=e==="h1"?"h2":"h1";this.type==="symmetric"?this.makeSymmetric(r):this.type==="flat"&&this.makeFlat(r)}resolvePointType(){if(this.isFlat()){const e=Zn(this.p.coord,this.h1.coord),r=Zn(this.p.coord,this.h2.coord);e===r?this._type="symmetric":this._type="flat"}else this._type="corner";return this.type}makePointedTo(e,r,n=0,a="h2",o=!1){const s=this.p.x-e,x=this.p.y-r,E=x>=0?-1:1,T=-1,d=Math.sqrt(s*s+x*x),g=Math.acos(s/d);return n=n||d/3,this[a].x=this.p.x+Math.cos(g)*n*T,this[a].y=this.p.y+Math.sin(g)*n*E,o||(this.type==="corner"?this.makeFlat(a):this.makeSymmetric(a)),this}hasOverlappingHandle(e){return!this[e]||!this[e].coord?!1:pt(this[e].coord,this.p.coord)}rotate(e,r){return this.p.rotate(e,r),this.h1.rotate(e,r),this.h2.rotate(e,r),this}resetHandles(){return this.type="corner",this.h1.use=!0,this.h2.use=!0,this.h2.x=this.p.x-100,this.h2.y=this.p.y,this.h1.x=this.p.x+100,this.h1.y=this.p.y,this}roundAll(e=9){this.p.x=ae(this.p.x,e),this.p.y=ae(this.p.y,e);let r=this.h1.use;this.h1.x=ae(this.h1.x,e),this.h1.y=ae(this.h1.y,e),this.h1.use=r;let n=this.h2.use;return this.h2.x=ae(this.h2.x,e),this.h2.y=ae(this.h2.y,e),this.h2.use=n,this}}const DE=Object.freeze(Object.defineProperty({__proto__:null,PathPoint:Kt},Symbol.toStringTag,{value:"Module"}));class vr{constructor(e=0,r=0){e=parseFloat(""+e),this.x=isNaN(e)?0:e,r=parseFloat(""+r),this.y=isNaN(r)?0:r}}const fE=Object.freeze(Object.defineProperty({__proto__:null,XYPoint:vr},Symbol.toStringTag,{value:"Module"}));class Xt extends Dr{constructor({p1x:e=0,p1y:r=0,p2x:n,p2y:a,p3x:o,p3y:s,p4x:x=0,p4y:E=0,point1ID:T=!1,point2ID:d=!1}={}){super(),this.p1x=nr(e),this.p1y=nr(r),this.p4x=nr(x),this.p4y=nr(E),this.p2x=n===void 0?this.p1x:nr(n),this.p2y=a===void 0?this.p1y:nr(a),this.p3x=o===void 0?this.p4x:nr(o),this.p3y=s===void 0?this.p4y:nr(s),T&&(this.point1ID=T),d&&(this.point2ID=d),this.objType="Segment",this.recalculateMaxes()}save(e=!1){const r={p1x:this.p1x,p1y:this.p1y,p2x:this.p2x,p2y:this.p2y,p3x:this.p3x,p3y:this.p3y,p4x:this.p4x,p4y:this.p4y};return e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{Segment
`;return r+="  ",n+=`${r+"  "}line: ${this.lineType}
`,n+=`${r+"  "}p1: ${this.p1x}/${this.p1y}
`,n+=`${r+"  "}p2: ${this.p2x}/${this.p2y}
`,n+=`${r+"  "}p3: ${this.p3x}/${this.p3y}
`,n+=`${r+"  "}p4: ${this.p4x}/${this.p4y}
`,n+=`${r+"  "}maxes: ${this.maxes.print(e+1)}
`,n+=`${r.substring(2)}}`,n}get lineType(){return Tt(this._lineType)||this.determineLineType(),this._lineType}get length(){return this.cache.length?this.cache.length:(this.cache.length=this.calculateLength(),this.cache.length)}get baseLength(){return Sa(this.p1x,this.p1y,this.p4x,this.p4y)}get topLength(){const e=Sa(this.p1x,this.p1y,this.p2x,this.p2y),r=Sa(this.p2x,this.p2y,this.p3x,this.p3y),n=Sa(this.p3x,this.p3y,this.p4x,this.p4y);return e+r+n}get quickLength(){return Math.max(this.topLength,this.baseLength)}get maxes(){return(!this.cache.maxes||zi(this.cache.maxes))&&this.recalculateMaxes(),new $t(this.cache.maxes)}get valuesAsArray(){return[this.p1x,this.p1y,this.p2x,this.p2y,this.p3x,this.p3y,this.p4x,this.p4y]}set maxes(e){this.cache.maxes={},this.cache.maxes=new $t(e)}split(e=.5){return typeof e=="object"&&Tt(e.x)&&Tt(e.y)?this.splitAtPoint(e):isNaN(e)?!1:this.splitAtTime(e)}splitAtPoint(e){if(this.containsTerminalPoint(e,.1))return!1;if(this.lineType==="horizontal"||this.lineType==="vertical"){let r,n,a=!1;return this.lineType==="horizontal"?ae(e.y,2)===ae(this.p1y,2)&&e.x>Math.min(this.p1x,this.p4x)&&e.x<Math.max(this.p1x,this.p4x)&&(r=e.x,n=this.p1y,a=!0):this.lineType==="vertical"&&ae(e.x,2)===ae(this.p1x,2)&&e.y>Math.min(this.p1y,this.p4y)&&e.y<Math.max(this.p1y,this.p4y)&&(r=this.p1x,n=e.y,a=!0),a?[new Xt({p1x:this.p1x,p1y:this.p1y,p4x:r,p4y:n}),new Xt({p1x:r,p1y:n,p4x:this.p4x,p4y:this.p4y})]:!1}else if(this.pointIsWithinMaxes(e)){const n=this.getSplitFromXYPoint(e,.1);if(n&&n.distance<.1)return this.splitAtTime(n.split)}return!1}splitAtTime(e=.5){const r=1-e,n=this.p1x*r+this.p2x*e,a=this.p1y*r+this.p2y*e,o=this.p2x*r+this.p3x*e,s=this.p2y*r+this.p3y*e,x=this.p3x*r+this.p4x*e,E=this.p3y*r+this.p4y*e,T=n*r+o*e,d=a*r+s*e,g=o*r+x*e,y=s*r+E*e,C=T*r+g*e,k=d*r+y*e;return[new Xt({p1x:this.p1x,p1y:this.p1y,p2x:n,p2y:a,p3x:T,p3y:d,p4x:C,p4y:k}),new Xt({p1x:C,p1y:k,p2x:g,p2y:y,p3x:x,p3y:E,p4x:this.p4x,p4y:this.p4y})]}splitAtManyPoints(e,r=1){const n=[new Xt(or(this))];let a;for(let o=0;o<e.length;o++)for(let s=0;s<n.length;s++)n[s].containsTerminalPoint(e[o],r)||(a=n[s].splitAtPoint(e[o]),a&&n.splice(s,1,a[0],a[1]));return n}pointIsWithinMaxes(e){const r=this.maxes;return e.x<=r.xMax&&e.x>=r.xMin&&e.y<=r.yMax&&e.y>=r.yMin}convertToLine(){return new Xt({p1x:this.p1x,p1y:this.p1y,p4x:this.p4x,p4y:this.p4y})}getSplitFromXYPoint(e,r=1){const n=this.quickLength*1e3;let a=999999999,o={},s,x;for(let E=0;E<1;E+=1/n)if(s=this.findXYPointFromSplit(E),x=Math.sqrt((s.x-e.x)*(s.x-e.x)+(s.y-e.y)*(s.y-e.y)),x<a&&(a=x,o={split:E,distance:x,x:s.x,y:s.y},r&&o.distance<r))return o;return o}calculateLength(){if(this.lineType)return this.baseLength;let e;if(this.quickLength<10)return this.quickLength;{const n=this.split();return e=n[0].calculateLength()+n[1].calculateLength(),e}}findXYPointFromSplit(e=.5){const r=1-e,n=this.p1x*r+this.p2x*e,a=this.p1y*r+this.p2y*e,o=this.p2x*r+this.p3x*e,s=this.p2y*r+this.p3y*e,x=this.p3x*r+this.p4x*e,E=this.p3y*r+this.p4y*e,T=n*r+o*e,d=a*r+s*e,g=o*r+x*e,y=s*r+E*e,C=T*r+g*e,k=d*r+y*e;return new vr(C,k)}getReverse(){return new Xt({p1x:this.p4x,p1y:this.p4y,p2x:this.p3x,p2y:this.p3y,p3x:this.p2x,p3y:this.p2y,p4x:this.p1x,p4y:this.p1y})}getXYPoint(e){return e===1?new vr(this.p1x,this.p1y):e===2?new vr(this.p2x,this.p2y):e===3?new vr(this.p3x,this.p3y):new vr(this.p4x,this.p4y)}getFastMaxes(){const e={xMin:Math.min(this.p1x,Math.min(this.p2x,Math.min(this.p3x,this.p4x))),yMin:Math.min(this.p1y,Math.min(this.p2y,Math.min(this.p3y,this.p4y))),xMax:Math.max(this.p1x,Math.max(this.p2x,Math.max(this.p3x,this.p4x))),yMax:Math.max(this.p1y,Math.max(this.p2y,Math.max(this.p3y,this.p4y)))};return new $t(e)}recalculateMaxes(){function e(V,ee){V.xMin>ee?V.xMin=ee:V.xMax<ee&&(V.xMax=ee)}function r(V,ee){V.yMin>ee?V.yMin=ee:V.yMax<ee&&(V.yMax=ee)}function n(V,ee,q,he,ce){const oe=1-V;return oe*oe*oe*ee+3*oe*oe*V*q+3*oe*V*V*he+V*V*V*ce}const a={xMin:Math.min(this.p1x,this.p4x),yMin:Math.min(this.p1y,this.p4y),xMax:Math.max(this.p1x,this.p4x),yMax:Math.max(this.p1y,this.p4y)};if(this.lineType){this.maxes=new $t(a);return}const o=this.p2x-this.p1x,s=this.p2y-this.p1y;let x=this.p3x-this.p2x,E=this.p3y-this.p2y;const T=this.p4x-this.p3x,d=this.p4y-this.p3y;let g,y,C,k,Y,_;(this.p2x<a.xMin||this.p2x>a.xMax||this.p3x<a.xMin||this.p3x>a.xMax)&&(o+T!==2*x&&(x+=.01),g=2*(o-x),y=2*(o-2*x+T),C=(2*x-2*o)*(2*x-2*o)-2*o*y,k=Math.sqrt(C),Y=(g+k)/y,_=(g-k)/y,0<Y&&Y<1&&e(a,n(Y,this.p1x,this.p2x,this.p3x,this.p4x)),0<_&&_<1&&e(a,n(_,this.p1x,this.p2x,this.p3x,this.p4x))),(this.p2y<a.yMin||this.p2y>a.yMax||this.p3y<a.yMin||this.p3y>a.yMax)&&(s+d!==2*E&&(E+=.01),g=2*(s-E),y=2*(s-2*E+d),C=(2*E-2*s)*(2*E-2*s)-2*s*y,k=Math.sqrt(C),Y=(g+k)/y,_=(g-k)/y,0<Y&&Y<1&&r(a,n(Y,this.p1y,this.p2y,this.p3y,this.p4y)),0<_&&_<1&&r(a,n(_,this.p1y,this.p2y,this.p3y,this.p4y))),this.maxes=new $t(a)}isLineOverlappedByLine(e){if(!this.lineType||!e.lineType)return!1;const r=e.containsPointOnLine(this.getXYPoint(1)),n=e.containsPointOnLine(this.getXYPoint(4));return r&&n}containsTerminalPoint(e,r=1){return this.containsStartPoint(e,r)?"start":this.containsEndPoint(e,r)?"end":!1}containsStartPoint(e,r=1){return pt(this.getXYPoint(1),e,r)}containsEndPoint(e,r=1){return pt(this.getXYPoint(4),e,r)}containsPointOnCurve(e,r=.1){if(this.containsTerminalPoint(e,r))return!0;if(this.lineType)return this.containsPointOnLine(e);const n=this.getSplitFromXYPoint(e,r);return!!(n&&n.distance<r)}containsPointOnLine(e){if(!this.lineType||this.containsTerminalPoint(e))return!1;function r(n,a,o){return n<=a&&a<=o||o<=a&&a<=n}return!!(r(this.p1x,e.x,this.p4x)&&r(this.p1y,e.y,this.p4y)&&Si(this.getXYPoint(1),this.getXYPoint(4),e))}precedes(e,r=1){const n=this.getXYPoint(4),a=e.getXYPoint(1);return pt(n,a,r)}determineLineType(e=1){let r=!1;const n=ae(this.p1x,e)===ae(this.p2x,e)&&ae(this.p1x,e)===ae(this.p3x,e)&&ae(this.p1x,e)===ae(this.p4x,e),a=ae(this.p1y,e)===ae(this.p2y,e)&&ae(this.p1y,e)===ae(this.p3y,e)&&ae(this.p1y,e)===ae(this.p4y,e),o=Si(this.getXYPoint(1),this.getXYPoint(4),this.getXYPoint(2))&&Si(this.getXYPoint(1),this.getXYPoint(4),this.getXYPoint(3));return n?r="vertical":a?r="horizontal":o&&(r="diagonal"),this._lineType=r,r}roundAll(e=3){return this.p1x=ae(this.p1x,e),this.p1y=ae(this.p1y,e),this.p2x=ae(this.p2x,e),this.p2y=ae(this.p2y,e),this.p3x=ae(this.p3x,e),this.p3y=ae(this.p3y,e),this.p4x=ae(this.p4x,e),this.p4y=ae(this.p4y,e),this}}function Sa(t,e,r,n){const a=Math.abs(t-r),o=Math.abs(e-n);return Math.sqrt(a*a+o*o)}function Si(t,e,r,n){n=Tt(n)?n:3;const a=(e.x-t.x)*(r.y-t.y),o=(r.x-t.x)*(e.y-t.y);return ae(a,n)===ae(o,n)}const OE=Object.freeze(Object.defineProperty({__proto__:null,Segment:Xt,getLineLength:Sa,pointsAreCollinear:Si},Symbol.toStringTag,{value:"Module"}));class Oa extends Dr{constructor({segments:e=[]}={}){super(),this.segments=e,this.objType="PolySegment"}save(e=!1){const r={segments:[]};for(let n=0;n<this._segments.length;n++)r.segments[n]=this._segments[n].save(e);return e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{PolySegment
`;return r+="  ",n+=`${r}segments: [
`,this.segments.forEach(a=>{n+=a.print(e+2),n+=`
`}),n+=`${r}]
`,n+=`${r.substring(2)}}`,n}get segments(){return this._segments}set segments(e){this._segments=[];for(let r=0;r<e.length;r++)this._segments[r]=new Xt(e[r])}get valuesAsArray(){let e=[];return this.segments.forEach(r=>e.push(r.valuesAsArray)),e}get path(){function e(x,E){const T={h1:{coord:{x:x.p3x,y:x.p3y}},p:{coord:{x:E.p1x,y:E.p1y}},h2:{coord:{x:E.p2x,y:E.p2y}}};return pt(T.h1.coord,T.p.coord)&&(T.h1.use=!1),pt(T.h2.coord,T.p.coord)&&(T.h2.use=!1),x.lineType&&(T.h1.use=!1),E.lineType&&(T.h2.use=!1),T}const r=[],n=or(this._segments),a=new vr(n[0].p1x,n[0].p1y),o=new vr(n.at(-1).p4x,n.at(-1).p4y);pt(a,o)||n.push(new Xt({p1x:o.x,p1y:o.y,p4x:a.x,p4y:a.y})),r.push(e(n.at(-1),n[0]));let s;for(let x=0;x<n.length-1;x++)s=n[x+1],r.push(e(n[x],s));return new Ar({pathPoints:r})}containsSegment(e){for(let r=0;r<this._segments.length;r++)if(z0(this._segments[r],e))return!0;return!1}roundAll(e=3){for(let r=0;r<this._segments.length;r++)this._segments[r].roundAll(e);return this}findIntersections(){let e,r,n=[];for(let a=0;a<this._segments.length;a++)for(let o=a;o<this._segments.length;o++)o!==a&&(e=new Xt(this._segments[a]),r=new Xt(this._segments[o]),n=n.concat(yo(e,r)));return n=n.filter(Mn),n}splitSegmentsAtIntersections(e=this.findIntersections(),r=1){let n,a;e.forEach(function(s,x){n=s.split("/")[0],a=s.split("/")[1],e[x]=new vr(n,a)});let o=[];for(let s=0;s<this._segments.length;s++)o=o.concat(this._segments[s].splitAtManyPoints(e,r));return this._segments=o,this.cache.splits=e,this}stitchSegmentsTogether(){const e=this.segments;let r=[];const n=[];function a(x){let E,T;for(let d=0;d<e.length;d++)if(E=e[d],E.objType==="Segment"&&E.containsStartPoint(x,0))return T=new Xt(E),E.objType="-"+n.length+"."+r.length,T;for(let d=0;d<e.length;d++)if(E=e[d].getReverse(),e[d].objType==="Segment"&&E.containsStartPoint(x,0))return T=new Xt(E),e[d].objType="R"+n.length+"."+r.length,T;return!1}function o(){for(let x=0;x<e.length;x++)if(e[x].objType==="Segment")return e[x].getXYPoint(1)}let s=o();for(let x=0;x<e.length;x++){let E=a(s);E?(r.push(E),s=E.getXYPoint(4)):r.length&&(n.push(new Oa({segments:r})),r[r.length-1].containsEndPoint(r[0].getXYPoint(1)),r=[],s=o(),x--)}return r.length&&(n.push(new Oa({segments:r})),r[r.length-1].containsEndPoint(r[0].getXYPoint(1))),n}removeZeroLengthSegments(){let e;for(let r=0;r<this._segments.length;r++)e=this._segments[r],pt(e.getXYPoint(1),e.getXYPoint(4))&&(e.lineType?e.objType="LINE ZERO":pt(e.getXYPoint(1),e.getXYPoint(2))&&pt(e.getXYPoint(1),e.getXYPoint(3))&&(e.objType="ZERO"));return this._segments=this._segments.filter(function(r){return r.objType==="Segment"}),this}removeRedundantLineSegments(){for(let e=0;e<this._segments.length;e++)for(let r=0;r<this._segments.length;r++)if(e!==r&&this._segments[e]&&this._segments[r]){let n=this._segments[e],a=this._segments[r];n.isLineOverlappedByLine(a)&&(n.objType="REDUNDANT"),a.isLineOverlappedByLine(n)&&(a.objType="REDUNDANT"),a.objType==="Segment"&&n.objType==="Segment"&&z0(n,a)&&(n.objType="DUPLICATE")}return this._segments=this._segments.filter(function(e){return e.objType==="Segment"}),this}removeNonConnectingSegments(){let e,r;const n=[],a=[];for(let s=0;s<this._segments.length;s++){e=this._segments[s],n[s]=!1,a[s]=!1;for(let x=0;x<this._segments.length&&(r=this._segments[x],!(s!==x&&(r.containsTerminalPoint(e.getXYPoint(1),1)&&(n[s]=!0),r.containsTerminalPoint(e.getXYPoint(4),1)&&(a[s]=!0),n[s]&&a[s])));x++);}for(let s=0;s<this._segments.length;s++)n[s]&&a[s]||(this._segments[s].objType="NON CONNECTED");return this._segments=this._segments.filter(function(s){return s.objType==="Segment"}),this}combineInlineSegments(){let e,r;for(let n=0;n<this.segments.length;n++)e=this.segments[n],r=this.segments[n+1],n===this.segments.length-1&&(r=this.segments[0]),e.lineType===r.lineType&&(this.segments[n]=new Xt({p1x:e.p1x,p1y:e.p1y,p4x:r.p4x,p4y:r.p4y}),this.segments.splice(n+1,1),n--)}}function yo(t,e,r=0){if(r===0){const _=as(t,e);if(_.length)return _}if(r===0){const _=is(t,e);if(_.length)return _}let n=[];r===0&&(t.lineType||e.lineType)&&(n=os(t,e));const a=t.getFastMaxes(),o=e.getFastMaxes();if(!k0(a,o))return[];const s=9e-4,x=3;let E=a.xMax-a.xMin,T=a.yMax-a.yMin,d=o.xMax-o.xMin,g=o.yMax-o.yMin;if(E<s&&T<s&&d<s&&g<s){E*=.5,T*=.5,d*=.5,g*=.5;let _=(a.xMin+E+(o.xMin+d))/2,V=(a.yMin+T+(o.yMin+g))/2;return _=ae(_,x),V=ae(V,x),[""+_+"/"+V]}let y=[];const C=t.splitAtTime(.5),k=e.splitAtTime(.5);let Y=[[C[0],k[0]],[C[0],k[1]],[C[1],k[1]],[C[1],k[0]]];return Y=Y.filter(function(_){return k0(_[0].getFastMaxes(),_[1].getFastMaxes(),"inclusive")}),Y.forEach(function(_){y=y.concat(yo(_[0],_[1],r+1))}),y=y.concat(n),y=y.filter(Mn),y}function z0(t,e,r=1){if(pt(t.getXYPoint(1),e.getXYPoint(1),r)&&pt(t.getXYPoint(4),e.getXYPoint(4),r)){if(t.lineType&&e.lineType)return!0;if(pt(t.getXYPoint(2),e.getXYPoint(2),r)&&pt(t.getXYPoint(3),e.getXYPoint(3),r))return!0}return!1}function as(t,e){const r=[];return t.containsPointOnLine(e.getXYPoint(1))&&r.push(""+e.p1x+"/"+e.p1y),t.containsPointOnLine(e.getXYPoint(4))&&r.push(""+e.p4x+"/"+e.p4y),e.containsPointOnLine(t.getXYPoint(1))&&r.push(""+t.p1x+"/"+t.p1y),e.containsPointOnLine(t.getXYPoint(4))&&r.push(""+t.p4x+"/"+t.p4y),r.length,r}function is(t,e){if(!t.lineType||!e.lineType)return[];const r=t.p4x-t.p1x,n=t.p4y-t.p1y,a=e.p4x-e.p1x,o=e.p4y-e.p1y,s=(-1*n*(t.p1x-e.p1x)+r*(t.p1y-e.p1y))/(-1*a*n+r*o),x=(a*(t.p1y-e.p1y)-o*(t.p1x-e.p1x))/(-1*a*n+r*o);if(s>=0&&s<=1&&x>=0&&x<=1){const E=nr(t.p1x+x*r),T=nr(t.p1y+x*n);return t.containsTerminalPoint({x:E,y:T})&&e.containsTerminalPoint({x:E,y:T})?[]:[""+E+"/"+T]}return[]}function os(t,e){const r=t.getXYPoint(1),n=t.getXYPoint(4),a=e.getXYPoint(1),o=e.getXYPoint(4),s=[];return t.containsPointOnCurve(a)&&s.push(`${a.x}/${a.y}`),t.containsPointOnCurve(o)&&s.push(`${o.x}/${o.y}`),e.containsPointOnCurve(r)&&s.push(`${r.x}/${r.y}`),e.containsPointOnCurve(n)&&s.push(`${n.x}/${n.y}`),s}const BE=Object.freeze(Object.defineProperty({__proto__:null,PolySegment:Oa,findCrossingLineSegmentIntersections:is,findEndPointSegmentIntersections:os,findOverlappingLineSegmentIntersections:as,findSegmentIntersections:yo,segmentsAreEqual:z0},Symbol.toStringTag,{value:"Module"}));let Ar=class extends Dr{constructor({name:e="Path",objType:r="Path",pathPoints:n=[],winding:a,xLock:o=!1,yLock:s=!1,wLock:x=!1,hLock:E=!1,transformOrigin:T="",ratioLock:d=!1,parent:g=!1}={}){super(),this.name=e,this.pathPoints=n,this.winding=a,this.xLock=o,this.yLock=s,this.wLock=x,this.hLock=E,this.transformOrigin=T,this.ratioLock=d,this.parent=g,this.link=!1,this.objType=r}save(e=!1){const r={name:this.name,winding:this.winding,pathPoints:[]};return this.xLock&&(r.xLock=!0),this.yLock&&(r.yLock=!0),this.wLock&&(r.wLock=!0),this.hLock&&(r.hLock=!0),this.transformOrigin&&this.transformOrigin!=="baseline-left"&&(r.transformOrigin=this.transformOrigin),this.ratioLock&&(r.ratioLock=!0),this.pathPoints.forEach(n=>{r.pathPoints.push(n.save(e))}),e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{Path
`;return r+="  ",n+=`${r}winding: ${this.winding}
`,this.name!=="Path"&&(n+=`${r}name: ${this.name}
`),this.xLock&&(n+=`${r}xLock: ${this.xLock}
`),this.yLock&&(n+=`${r}yLock: ${this.yLock}
`),this.wLock&&(n+=`${r}wLock: ${this.wLock}
`),this.hLock&&(n+=`${r}hLock: ${this.hLock}
`),this.ratioLock&&(n+=`${r}ratioLock: ${this.ratioLock}
`),n+=`${r}pathPoints: [
`,this.pathPoints.forEach((a,o)=>{n+=a.print(e+2,o),n+=`
`}),n+=`${r}]
`,n+=`${r.substring(2)}}/Path`,n}get name(){return this._name||""}get pathPoints(){return this._pathPoints||[]}get winding(){return Tt(this._winding)||(this.findWinding?this.findWinding():this._winding=0),this._winding||0}get x(){return this.maxes.xMin}get y(){return this.maxes.yMax}get height(){const e=this.maxes.yMax-this.maxes.yMin;return Math.max(e,0)}get width(){const e=this.maxes.xMax-this.maxes.xMin;return Math.max(e,0)}get xLock(){return!!this._xLock}get yLock(){return!!this._yLock}get wLock(){return!!this._wLock}get hLock(){return!!this._hLock}get transformOrigin(){return this._transformOrigin||(this._transformOrigin="baseline-left"),this._transformOrigin}get ratioLock(){return!!this._ratioLock}get maxes(){return this.cache.maxes?zi(this.cache.maxes)?this.recalculateMaxes():Co(this.cache.maxes)&&this.recalculateMaxes():this.recalculateMaxes(),new $t(this.cache.maxes)}get svgPathData(){return this.cache.svgPathData?this.cache.svgPathData:(this.cache.svgPathData=this.makeSVGPathData(),this.cache.svgPathData)}set name(e){e=co(e),e!==""&&(this._name=e)}set pathPoints(e){if(this._pathPoints=[],e&&e.length)for(let r=0;r<e.length;r++)this._pathPoints[r]=new Kt(e[r]),this._pathPoints[r].parent=this}set winding(e){Tt(e)?this._winding=e:this.findWinding()}set x(e){this.setShapePosition(e,!1)}set y(e){this.setShapePosition(!1,e)}set height(e){this.setShapeSize({height:e})}set width(e){this.setShapeSize({width:e})}set xLock(e){this._xLock=!!e}set yLock(e){this._yLock=!!e}set wLock(e){this._wLock=!!e}set hLock(e){this._hLock=!!e}set transformOrigin(e){wa.indexOf(e)>-1?this._transformOrigin=e:this._transformOrigin="baseline-left"}set ratioLock(e){this._ratioLock=!!e}set maxes(e){this.cache.maxes={},this.cache.maxes=new $t(e)}set svgPathData(e){this.cache.svgPathData=e}get isLockable(){return!0}isLocked(e){return e==="x"?this.xLock:e==="y"?this.yLock:e==="width"?this.wLock:e==="height"?this.hLock:!1}lock(e){e==="x"&&(this.xLock=!0),e==="y"&&(this.yLock=!0),e==="width"&&(this.wLock=!0),e==="height"&&(this.hLock=!0)}unlock(e){e==="x"&&(this.xLock=!1),e==="y"&&(this.yLock=!1),e==="width"&&(this.wLock=!1),e==="height"&&(this.hLock=!1)}setShapeSize({width:e=!1,height:r=!1,ratioLock:n=!1,transformOrigin:a=!1}={}){e!==!1&&(e=He(e)),r!==!1&&(r=He(r));const o=e!==!1?e-this.width:0,s=r!==!1?r-this.height:0;return this.updateShapeSize({width:o,height:s,ratioLock:n,transformOrigin:a}),this}updateShapeSize({width:e=0,height:r=0,ratioLock:n=!1,transformOrigin:a=!1}={}){let o=He(e),s=He(r);if(!o&&!s)return;if(n&&o!==s){const _=this.width/this.height;Math.abs(o)>Math.abs(s)?s=o/_:o=s*_}let x=this.width;x===0&&(x=1);let E=this.height;E===0&&(E=1);const T=Math.max(x+o,1),d=Math.max(E+s,1),g=d/E,y=T/x;if(n&&(T<=1||d<=1))return;let C=Io(o,s,this.maxes,a),k=this.maxes.xMin,Y=this.maxes.yMin;this.pathPoints.forEach(_=>{_.p.coord.x=(_.p.coord.x-this.maxes.xMin)*y+k,_.h1.coord.x=(_.h1.coord.x-this.maxes.xMin)*y+k,_.h2.coord.x=(_.h2.coord.x-this.maxes.xMin)*y+k,_.p.coord.y=(_.p.coord.y-this.maxes.yMin)*g+Y,_.h1.coord.y=(_.h1.coord.y-this.maxes.yMin)*g+Y,_.h2.coord.y=(_.h2.coord.y-this.maxes.yMin)*g+Y}),this.updateShapePosition(C.deltaX,C.deltaY)}setShapePosition(e=!1,r=!1){e!==!1&&(e=He(e)),r!==!1&&(r=He(r));const n=e!==!1?e*1-this.maxes.xMin:0,a=r!==!1?r*1-this.maxes.yMax:0;this.updateShapePosition(n,a)}updateShapePosition(e=0,r=0){e=He(e),r=He(r);for(let n=0;n<this.pathPoints.length;n++)this.pathPoints[n].updatePathPointPosition("p",e,r)}rotate(e,r=this.maxes.center){for(let n=0;n<this.pathPoints.length;n++)this.pathPoints[n].rotate(e,r)}getNextPointNum(e=0){return e=He(e),e+=1,e=e%this.pathPoints.length,e}getPreviousPointNum(e=0){return e=He(e),e-=1,e<0&&(e=e+this.pathPoints.length),e}containsPoint(e,r){for(let n=0;n<this.pathPoints.length;n++)if(pt(e,this.pathPoints[n].p,.01))if(r)r=!1;else return this.pathPoints[n];return!1}makeSVGPathData(e="not specified",r=8){if(!this.pathPoints||!this.pathPoints.length)return"";let n,a,o="",s="M"+ae(this.pathPoints[0].p.x,r)+","+ae(this.pathPoints[0].p.y,r);s.indexOf("NaN")>-1&&console.warn(e+" PathPoint 0 MOVE has NaN: "+s);for(let x=0;x<this.pathPoints.length;x++)n=this.pathPoints[x],a=this.pathPoints[this.getNextPointNum(x)],o=" C"+ae(n.h2.x,r)+","+ae(n.h2.y,r)+","+ae(a.h1.x,r)+","+ae(a.h1.y,r)+","+ae(a.p.x,r)+","+ae(a.p.y,r),o.indexOf("NaN")>-1&&console.warn(e+" PathPoint "+x+" has NaN: "+o),s+=o;return s+="Z",s}makePostScript(e=0,r=0){if(!this.pathPoints)return{re:"",lastX:e,lastY:r};let n,a,o,s,x,E,T,d,g="",y=`${this.pathPoints[0].p.x-e} ${this.pathPoints[0].p.y-r} rmoveto
		`;for(let C=0;C<this.pathPoints.length;C++)n=this.pathPoints[C],a=this.pathPoints[this.getNextPointNum(C)],o=n.h2.x-n.p.x,s=n.h2.y-n.p.y,x=a.h1.x-n.h2.x,E=a.h1.y-n.h2.y,T=a.p.x-a.h1.x,d=a.p.y-a.h1.y,g=`
					${o} ${s} ${x} ${E} ${T} ${d} rrcurveto
			`,y+=g;return{re:y.replaceAll("	",""),lastX:a.p.x,lastY:a.p.y}}makePolySegment(){const e=[];for(let n=0;n<this.pathPoints.length;n++)e.push(this.makeSegment(n));return new Oa({segments:e})}makeSegment(e=0){if(e=e%this.pathPoints.length,this.cache.segments||(this.cache.segments=[]),this.cache.segments[e])return this.cache.segments[e];const r=this.pathPoints[e];let n=Math.round(Math.random()*1e4);r.pointID||(r.pointID=`point-${e}-${n}`);const a=this.getNextPointNum(e),o=this.pathPoints[a];o.pointID||(o.pointID=`point-${a}-${n}`);const s=new Xt({point1ID:r.pointID,p1x:r.p.x,p1y:r.p.y,p2x:r.h2.x,p2y:r.h2.y,p3x:o.h1.x,p3y:o.h1.y,p4x:o.p.x,p4y:o.p.y,point2ID:o.pointID});return this.cache.segments[e]=s,s}addPointsAtPathIntersections(){const e=this.makePolySegment();e.splitSegmentsAtIntersections();const r=e.path;this._pathPoints=r.pathPoints}calculateQuickSegmentLength(e=0){return this.makeSegment(e).quickLength}findWinding(e=!1){let r,n,a,o=-1;const s=this.pathPoints;if(s.length===2)o=s[1].p.x>s[0].p.x?-1:1;else if(s.length>2)for(let x=0;x<s.length;x++)r=(x+1)%s.length,n=(x+2)%s.length,a=(s[r].p.x-s[x].p.x)*(s[n].p.y-s[r].p.y),a-=(s[r].p.y-s[x].p.y)*(s[n].p.x-s[r].p.x),a<0?o--:a>0&&o++;return o===0&&!e&&(this.reverseWinding(),o=this.findWinding(!0)*-1,this.reverseWinding()),this._winding=o,o}reverseWinding(){let e;this.pathPoints&&(this.pathPoints.forEach(r=>{e=r.h1,r.h1=r.h2,r.h2=e}),this.pathPoints.reverse(),this.winding*=-1,(this.winding===0||!Tt(this.winding))&&this.findWinding(!0))}flipNS(e=this.maxes.center.y){this.pathPoints.forEach(r=>{r.p.coord.y+=(e-r.p.coord.y)*2,r.h1.coord.y+=(e-r.h1.coord.y)*2,r.h2.coord.y+=(e-r.h2.coord.y)*2}),this.reverseWinding()}flipEW(e=this.maxes.center.x){this.pathPoints.forEach(r=>{r.p.coord.x+=(e-r.p.coord.x)*2,r.h1.coord.x+=(e-r.h1.coord.x)*2,r.h2.coord.x+=(e-r.h2.coord.x)*2}),this.reverseWinding()}roundAll(e=0){return this.pathPoints.forEach(r=>r.roundAll(e)),this}addPathPoint(e){return e=new Kt(e),e.parent=this,this.pathPoints.push(e),this.findWinding(),this.changed(),e}insertPathPoint(e=0,r=.5,n=!1){const a=this.pathPoints[e],o=this.getNextPointNum(e),s=this.pathPoints[o];let x,E,T,d;if(this.pathPoints.length>1){const g=this.makeSegment(e).split(r),y=g[0],C=g[1];x=new we({coord:{x:y.p4x,y:y.p4y}}),E=new we({coord:{x:y.p3x,y:y.p3y}}),T=new we({coord:{x:C.p2x,y:C.p2y}}),d=new Kt({p:x,h1:E,h2:T}),a.type==="symmetric"&&(a.type="flat"),a.h2.x=y.p2x,a.h2.y=y.p2y,s.type==="symmetric"&&(s.type="flat"),s.h1.x=C.p3x,s.h1.y=C.p3y}else x=new we({coord:{x:a.p.x+100,y:a.p.y+100}}),E=new we({coord:{x:a.h2.x+100,y:a.h2.y+100}}),T=new we({coord:{x:a.h1.x+100,y:a.h1.y+100}}),d=new Kt({p:x,h1:E,h2:T,type:a.type});return n&&d.roundAll(0),d.parent=this,this.pathPoints.splice(o,0,d),d}findClosestPointOnCurve(e=new vr,r=!1){let n=1e4,a=!1,o,s=999999999,x,E;for(let d=0;d<this.pathPoints.length;d++){n=this.makeSegment(d).quickLength*100;for(let g=0;g<1;g+=1/n)x=this.findXYPointFromSplit(g,d),E=Math.sqrt((x.x-e.x)*(x.x-e.x)+(x.y-e.y)*(x.y-e.y)),E<s&&(a&&a.point!==d&&(o=or(a)),s=E,a={point:d,split:g,distance:E,x:x.x,y:x.y})}return r?o:a}findXYPointFromSplit(e=.5,r=0){return this.pathPoints.length>1?this.makeSegment(r).findXYPointFromSplit(e):this.pathPoints[0].p}recalculateMaxes(){this.cache.maxes=new $t,this.cache.segments||(this.cache.segments=[]);let e=this.pathPoints.map((r,n)=>this.makeSegment(n).maxes);this.cache.maxes=fa(e)}checkForNaN(){for(let e=0;e<this.pathPoints.length;e++){const r=this.pathPoints[e];if(isNaN(r.p.x)||isNaN(r.p.y)||isNaN(r.h1.x)||isNaN(r.h1.y)||isNaN(r.h2.x)||isNaN(r.h2.y))return!0}return!1}};const HE=Object.freeze(Object.defineProperty({__proto__:null,Path:Ar},Symbol.toStringTag,{value:"Module"}));let it=class extends Dr{constructor({id:e="",parent:r=!1,objType:n="Glyph",name:a="",shapes:o=[],advanceWidth:s=0,transformOrigin:x="",ratioLock:E=!1,usedIn:T=[],gsub:d=[],contextCharacters:g=""}={}){if(super(),this.id=e,this.parent=r,this.objType=n,this.name=a,this.shapes=o,this.advanceWidth=s,this.transformOrigin=x,this.ratioLock=E,this.usedIn=T,this.gsub=d,this.contextCharacters=g,this.hasChangedThisSession=!1,this.wasCreatedThisSession=!0,this.id&&this.id.startsWith("liga-")&&this.gsub.length===0){let y=this.id.split("-");y.shift(),this.gsub=y.map(C=>U1(C)?Number(C):C.codePointAt(0))}}save(e=!1){const r={id:this.id};this.advanceWidth!==0&&(r.advanceWidth=this.advanceWidth),this.transformOrigin&&this.transformOrigin!=="baseline-left"&&(r.transformOrigin=this.transformOrigin),this.ratioLock!==!1&&(r.ratioLock=this.ratioLock),this.usedIn.length&&(r.usedIn=this.usedIn),this.gsub.length&&(r.gsub=this.gsub);let n=this.contextCharacters;if(n.length&&n!==this.char&&(r.contextCharacters=n),this.shapes&&this.shapes.length){r.shapes=[];for(let a=0;a<this.shapes.length;a++)r.shapes.push(this.shapes[a].save(e))}return e&&(r.objType=this.objType,r.name=this.name),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{Glyph
`;return r+="  ",n+=`${r}id: ${this.id}
`,n+=`${r}name: ${this.name}
`,this.advanceWidth!==0&&(n+=`${r}advanceWidth: ${this.advanceWidth}
`),this.transformOrigin!==!1&&(n+=`${r}transformOrigin: ${this.transformOrigin}
`),this.ratioLock!==!1&&(n+=`${r}ratioLock: ${this.ratioLock}
`),this.usedIn.length&&(n+=`${r}usedIn: ${JSON.stringify(this.usedIn)}
`),this.gsub.length&&(n+=`${r}gsub: ${JSON.stringify(this.gsub)}
`),this.shapes&&this.shapes.length?(n+=`${r}shapes: [
`,this.shapes.forEach(a=>{n+=a.print(e+2),n+=`
`}),n+=`${r}]
`):n+=`${r}shapes: []
`,this.maxes&&(n+=`${r}maxes: ${this.maxes.print(e+1)}
`),n+=`${r.substring(2)}}/Glyph ${this.id}`,n}get shapes(){return this._shapes||[]}get advanceWidth(){return this._advanceWidth||0}get transformOrigin(){return this._transformOrigin||(this._transformOrigin="baseline-left"),this._transformOrigin||""}get ratioLock(){return this._ratioLock||!1}get usedIn(){return this._usedIn||[]}get gsub(){return this._gsub||[]}get contextCharacters(){return!this._contextCharacters||this._contextCharacters===this.char?this.char:this._contextCharacters}get sessionState(){return this.hasChangedThisSession===!0?"changed":this.wasCreatedThisSession===!0?"new":"old"}get x(){return this.maxes.xMin}get y(){return this.maxes.yMax}get width(){const e=this.maxes.xMax-this.maxes.xMin;return Math.max(e,0)}get height(){const e=this.maxes.yMax-this.maxes.yMin;return Math.max(e,0)}get leftSideBearing(){return this.maxes.xMin}get rightSideBearing(){let e=this.maxes.xMax;return this.advanceWidth-e}get name(){let e=this._name;if(!e&&!this.id)return"[no id]";if(!e){if(this.id.startsWith("liga-")){let n=ur(this.id,"liga-").split("-");e="Ligature ",n.forEach(a=>{a.length===1?e+=a:e+=Rr(a)})}else if(this.id.startsWith("comp-"))e=`Component ${ur(this.id,"comp-")}`;else if(this.id.startsWith("glyph-")){let r=ur(this.id,"glyph-");e=la(r)}this._name=e}return e}get char(){let e;return this.gsub.length?e=this.gsub.reduce((r,n)=>`${r}${String.fromCodePoint(n)}`,""):e=Rr(ur(this.id,"glyph-")),e}get chars(){return this.char}get contentType(){if(this.cache.contentType)return this.cache.contentType;let e="unknown",r=0,n=0;return this.shapes.forEach(a=>{a.objType==="ComponentInstance"&&n++,a.objType==="Path"&&r++}),r>0&&n===0&&(e="paths"),n>0&&r===0&&(e="component instances"),r>0&&n>0&&(e="items"),this.cache.contentType=e,e}get pointCount(){let e=0;return this.shapes.forEach(r=>{r.objType==="ComponentInstance"?e+=r.pointCount:r.pathPoints.forEach(n=>{var a,o;e++,(a=n==null?void 0:n.h1)!=null&&a.use&&e++,(o=n==null?void 0:n.h2)!=null&&o.use&&e++})}),e}set shapes(e){this._shapes=[],e&&e.length&&e.forEach(r=>{this.addOneShape(r)}),this.changed()}addOneShape(e={}){if(e)return Array.isArray(this._shapes)||(this._shapes=[]),e!=null&&e.link?(e.parent=this,this._shapes.push(new Qr(e))):(e.parent=this,this._shapes.push(new Ar(e))),this.changed(),this._shapes.at(-1)}set advanceWidth(e){this._advanceWidth=He(e),isNaN(this._advanceWidth)&&(this._advanceWidth=0)}set transformOrigin(e){wa.indexOf(e)>-1?this._transformOrigin=e:this._transformOrigin=!1}set ratioLock(e){this._ratioLock=!!e}set usedIn(e){this._usedIn=e||[]}set gsub(e){this._gsub=e||[]}set contextCharacters(e){!e||e===this.char||typeof e!="string"?delete this._contextCharacters:this._contextCharacters=e}set name(e){this._name=e}set x(e){this.setGlyphPosition(e,!1)}set y(e){this.setGlyphPosition(!1,e)}set width(e){this.setGlyphSize({width:e})}set height(e){this.setGlyphSize({height:e})}set leftSideBearing(e){let r=e-this.leftSideBearing;this.setGlyphPosition(e),this.advanceWidth+=r}set rightSideBearing(e){let r=e-this.rightSideBearing;this.advanceWidth+=r}setGlyphPosition(e=!1,r=!1,n=!0){const a=this.maxes;e!==!1&&(e=He(e)),r!==!1&&(r=He(r));const o=e!==!1?e-a.xMin:0,s=r!==!1?r-a.yMax:0;this.updateGlyphPosition(o,s,n)}updateGlyphPosition(e=0,r=0,n=!0){e=He(e)||0,r=He(r)||0;for(let a=0;a<this.shapes.length;a++){const o=this.shapes[a];o.objType==="ComponentInstance"&&!n||o.updateShapePosition(e,r)}}setGlyphSize({width:e=!1,height:r=!1,ratioLock:n=!1,updateComponentInstances:a=!0,transformOrigin:o=""}={}){const s=this.maxes;e!==!1&&(e=He(e)),r!==!1&&(r=He(r));const x=s.yMax-s.yMin,E=s.xMax-s.xMin;let T=e!==!1?e-E:0,d=r!==!1?r-x:0;r=He(r),e=He(e),n&&(Math.abs(r)>Math.abs(e)?T=E*(r/x)-E:d=x*(e/E)-x),this.updateGlyphSize({width:T,height:d,updateComponentInstances:a,transformOrigin:o})}updateGlyphSize({width:e=0,height:r=0,ratioLock:n=!1,updateComponentInstances:a=!0,transformOrigin:o=""}={}){const s=this.maxes;let x=He(e)||0,E=He(r)||0;const T=s.width,d=s.height;let g=T+x,y=d+E;Math.abs(g)<1&&(g=1),Math.abs(y)<1&&(y=1);let C=y/d,k=g/T;n&&(x!==0&&E===0?(C=k,y=d*C,E=y-d):(k=C,g=T*k,x=g-T));const Y=Io(x,E,this.maxes,o);this.shapes.forEach(_=>{if(_.objType==="ComponentInstance"&&!a)return;const V=_.maxes,ee=V.xMax-V.xMin,q=ee*k;let he=0;k!==0&&(he=q-ee);const ce=V.yMax-V.yMin,oe=ce*C;let Te=0;C!==0&&(Te=oe-ce),_.updateShapeSize({width:he,height:Te,transformOrigin:"bottom-left"});const Ie=V.xMin-s.xMin,fe=Ie*k;let We=0;k!==0&&(We=fe-Ie);const ke=V.yMin-s.yMin,At=ke*C;let st=0;C!==0&&(st=At-ke),_.updateShapePosition(We,st,!0)}),this.updateGlyphPosition(Y.deltaX,Y.deltaY)}flipNS(e=this.maxes.center.y){for(let r=0;r<this.shapes.length;r++)this.shapes[r].flipNS(e);return this}flipEW(e=this.maxes.center.x){for(let r=0;r<this.shapes.length;r++)this.shapes[r].flipEW(e);return this}roundAll(e=0){return this.shapes.forEach(r=>{r.roundAll&&r.roundAll(e)}),this}rotate(e,r){r=r||this.maxes.center;for(let n=0;n<this.shapes.length;n++)this.shapes[n].rotate(e,r);return this}reverseWinding(){for(let e=0;e<this.shapes.length;e++)this.shapes[e].reverseWinding();return this}get svgPathData(){var e;return(e=this==null?void 0:this.cache)!=null&&e.svgPathData||(this.cache.svgPathData=this.makeSVGPathData()),this.cache.svgPathData}makeSVGPathData(){let e="M0,0";return this.shapes.forEach(r=>{if(r.objType==="ComponentInstance"){const n=r.transformedGlyph;n&&(e+=n.svgPathData)}else e+=r.svgPathData,e+=" "}),To(e)==="M0,0"&&(e="M0,0Z"),e}get maxes(){return this.cache.maxes?zi(this.cache.maxes)?this.recalculateGlyphMaxes():Co(this.cache.maxes)&&this.recalculateGlyphMaxes():this.recalculateGlyphMaxes(),this.cache.maxes}recalculateGlyphMaxes(){let e={xMax:0,xMin:0,yMax:0,yMin:0};return this.shapes&&this.shapes.length>0&&(e=fa(this.shapes.map(r=>r.maxes))),this.cache.maxes=new $t(e),this.cache.maxes}};const FE=Object.freeze(Object.defineProperty({__proto__:null,Glyph:it},Symbol.toStringTag,{value:"Module"}));function Ba(t,e=!0){const r=RE(t);if(e&&r.length===0)return xr(`
			Could not find any SVG tags to import.
			Supported tags are: &lt;path&gt;, &lt;rect&gt;, &lt;polygon&gt;, &lt;polyline&gt;, and &lt;ellipse&gt;.`),new it;let n=0,a=[];r.forEach(s=>{if(s=s.filter(x=>!(x[0].x===x[3].x&&x[0].y===x[3].y&&x[1]===!1&&x[2]===!1)),s.length){n++;const x=s[0][0].x===s.at(-1)[3].x&&s[0][0].y===s.at(-1)[3].y;let E=new Ar({name:`Path ${n}`}),T;x||(T=new Kt,T.p=new we({coord:new _r({x:s[0][0].x,y:s[0][0].y})}),s[0][1]&&(T.h2=new we({coord:new _r({x:s[0][1].x,y:s[0][1].y})})),E.addPathPoint(T));for(let d=0;d<s.length-1;d++)E.addPathPoint(cA(s[d],s[d+1]));x?E.addPathPoint(cA(s.at(-1),s[0])):(T=new Kt,T.p=new we({coord:new _r({x:s.at(-1)[3].x,y:s.at(-1)[3].y})}),s.at(-1)[2]&&(T.h1=new we({coord:new _r({x:s.at(-1)[2].x,y:s.at(-1)[2].y})})),E.addPathPoint(T)),a.push(E)}});const o=new it({shapes:a});return o.changed(),o}function cA(t,e){t[3].x!==e[0].x||(t[3].y,e[0].y);let r=new Kt;return r.p=new we({coord:{x:e[0].x,y:e[0].y}}),t[2]&&(r.h1=new we({coord:{x:t[2].x,y:t[2].y},use:!0})),e[1]&&(r.h2=new we({coord:{x:e[1].x,y:e[1].y},use:!0})),r}function Oi(t,e="SVG"){const r=Ba(t);if(r&&r.shapes.length){r.flipNS(),r.reverseWinding();const n=z(),a=kn(r,n.selectedItem);n.history.addState("Imported SVG to glyph "+n.selectedItem.name);const o=n.multiSelect.shapes;o.clear(),a.forEach(s=>o.add(s)),xe().settings.app.moveShapesOnSVGDragDrop&&o.setShapePosition(0,o.maxes.height),n.publish("currentItem",n.selectedItem),Ce(`Imported ${r.shapes.length} shapes from ${e}`)}else Ce("Could not import pasted SVG code.")}async function TA(t){var r;const e=t.clipboardData||window.clipboardData;if(e){let n=e.getData("Text");Oi(n,"<br>the operating system clipboard")}else if((r=navigator==null?void 0:navigator.clipboard)!=null&&r.readText)navigator.clipboard.readText().then(n=>{n?Oi(n,"<br>the operating system clipboard"):Ce("Could not import SVG from the operating system clipboard")});else{Ce("Could not import SVG from the operating system clipboard");return}}function ME(t){et(t);const r=t.dataTransfer.files[0];if(r!=null&&r.name){const n=r.name.split("."),a=n[n.length-1].toLowerCase(),o=new FileReader;a==="svg"?(o.onload=function(){Oi(o.result.toString(),"<br>from the dropped SVG file")},o.readAsText(r)):Ce("Only SVG files can be dropped on the canvas")}else Ce("Error reading file.")}/*! https://mths.be/codepointat v0.2.0 by @mathias */String.prototype.codePointAt||function(){var t=function(){try{var r={},n=Object.defineProperty,a=n(r,r,r)&&n}catch{}return a}(),e=function(r){if(this==null)throw TypeError();var n=String(this),a=n.length,o=r?Number(r):0;if(o!=o&&(o=0),!(o<0||o>=a)){var s=n.charCodeAt(o),x;return s>=55296&&s<=56319&&a>o+1&&(x=n.charCodeAt(o+1),x>=56320&&x<=57343)?(s-55296)*1024+x-56320+65536:s}};t?t(String.prototype,"codePointAt",{value:e,configurable:!0,writable:!0}):String.prototype.codePointAt=e}();var mo=0,As=-3;function Ha(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288)}function GE(t,e){this.source=t,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=e,this.destLen=0,this.ltree=new Ha,this.dtree=new Ha}var ss=new Ha,ls=new Ha,No=new Uint8Array(30),Do=new Uint16Array(30),xs=new Uint8Array(30),Es=new Uint16Array(30),PE=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),IA=new Ha,Hr=new Uint8Array(320);function Ls(t,e,r,n){var a,o;for(a=0;a<r;++a)t[a]=0;for(a=0;a<30-r;++a)t[a+r]=a/r|0;for(o=n,a=0;a<30;++a)e[a]=o,o+=1<<t[a]}function bE(t,e){var r;for(r=0;r<7;++r)t.table[r]=0;for(t.table[7]=24,t.table[8]=152,t.table[9]=112,r=0;r<24;++r)t.trans[r]=256+r;for(r=0;r<144;++r)t.trans[24+r]=r;for(r=0;r<8;++r)t.trans[168+r]=280+r;for(r=0;r<112;++r)t.trans[176+r]=144+r;for(r=0;r<5;++r)e.table[r]=0;for(e.table[5]=32,r=0;r<32;++r)e.trans[r]=r}var dA=new Uint16Array(16);function T0(t,e,r,n){var a,o;for(a=0;a<16;++a)t.table[a]=0;for(a=0;a<n;++a)t.table[e[r+a]]++;for(t.table[0]=0,o=0,a=0;a<16;++a)dA[a]=o,o+=t.table[a];for(a=0;a<n;++a)e[r+a]&&(t.trans[dA[e[r+a]]++]=a)}function vE(t){t.bitcount--||(t.tag=t.source[t.sourceIndex++],t.bitcount=7);var e=t.tag&1;return t.tag>>>=1,e}function br(t,e,r){if(!e)return r;for(;t.bitcount<24;)t.tag|=t.source[t.sourceIndex++]<<t.bitcount,t.bitcount+=8;var n=t.tag&65535>>>16-e;return t.tag>>>=e,t.bitcount-=e,n+r}function Z0(t,e){for(;t.bitcount<24;)t.tag|=t.source[t.sourceIndex++]<<t.bitcount,t.bitcount+=8;var r=0,n=0,a=0,o=t.tag;do n=2*n+(o&1),o>>>=1,++a,r+=e.table[a],n-=e.table[a];while(n>=0);return t.tag=o,t.bitcount-=a,e.trans[r+n]}function UE(t,e,r){var n,a,o,s,x,E;for(n=br(t,5,257),a=br(t,5,1),o=br(t,4,4),s=0;s<19;++s)Hr[s]=0;for(s=0;s<o;++s){var T=br(t,3,0);Hr[PE[s]]=T}for(T0(IA,Hr,0,19),x=0;x<n+a;){var d=Z0(t,IA);switch(d){case 16:var g=Hr[x-1];for(E=br(t,2,3);E;--E)Hr[x++]=g;break;case 17:for(E=br(t,3,3);E;--E)Hr[x++]=0;break;case 18:for(E=br(t,7,11);E;--E)Hr[x++]=0;break;default:Hr[x++]=d;break}}T0(e,Hr,0,n),T0(r,Hr,n,a)}function uA(t,e,r){for(;;){var n=Z0(t,e);if(n===256)return mo;if(n<256)t.dest[t.destLen++]=n;else{var a,o,s,x;for(n-=257,a=br(t,No[n],Do[n]),o=Z0(t,r),s=t.destLen-br(t,xs[o],Es[o]),x=s;x<s+a;++x)t.dest[t.destLen++]=t.dest[x]}}}function wE(t){for(var e,r,n;t.bitcount>8;)t.sourceIndex--,t.bitcount-=8;if(e=t.source[t.sourceIndex+1],e=256*e+t.source[t.sourceIndex],r=t.source[t.sourceIndex+3],r=256*r+t.source[t.sourceIndex+2],e!==(~r&65535))return As;for(t.sourceIndex+=4,n=e;n;--n)t.dest[t.destLen++]=t.source[t.sourceIndex++];return t.bitcount=0,mo}function YE(t,e){var r=new GE(t,e),n,a,o;do{switch(n=vE(r),a=br(r,2,0),a){case 0:o=wE(r);break;case 1:o=uA(r,ss,ls);break;case 2:UE(r,r.ltree,r.dtree),o=uA(r,r.ltree,r.dtree);break;default:o=As}if(o!==mo)throw new Error("Data error")}while(!n);return r.destLen<r.dest.length?typeof r.dest.slice=="function"?r.dest.slice(0,r.destLen):r.dest.subarray(0,r.destLen):r.dest}bE(ss,ls);Ls(No,Do,4,3);Ls(xs,Es,2,1);No[28]=0;Do[28]=258;var WE=YE;function _n(t,e,r,n,a){return Math.pow(1-a,3)*t+3*Math.pow(1-a,2)*a*e+3*(1-a)*Math.pow(a,2)*r+Math.pow(a,3)*n}function $r(){this.x1=Number.NaN,this.y1=Number.NaN,this.x2=Number.NaN,this.y2=Number.NaN}$r.prototype.isEmpty=function(){return isNaN(this.x1)||isNaN(this.y1)||isNaN(this.x2)||isNaN(this.y2)};$r.prototype.addPoint=function(t,e){typeof t=="number"&&((isNaN(this.x1)||isNaN(this.x2))&&(this.x1=t,this.x2=t),t<this.x1&&(this.x1=t),t>this.x2&&(this.x2=t)),typeof e=="number"&&((isNaN(this.y1)||isNaN(this.y2))&&(this.y1=e,this.y2=e),e<this.y1&&(this.y1=e),e>this.y2&&(this.y2=e))};$r.prototype.addX=function(t){this.addPoint(t,null)};$r.prototype.addY=function(t){this.addPoint(null,t)};$r.prototype.addBezier=function(t,e,r,n,a,o,s,x){var E=[t,e],T=[r,n],d=[a,o],g=[s,x];this.addPoint(t,e),this.addPoint(s,x);for(var y=0;y<=1;y++){var C=6*E[y]-12*T[y]+6*d[y],k=-3*E[y]+9*T[y]-9*d[y]+3*g[y],Y=3*T[y]-3*E[y];if(k===0){if(C===0)continue;var _=-Y/C;0<_&&_<1&&(y===0&&this.addX(_n(E[y],T[y],d[y],g[y],_)),y===1&&this.addY(_n(E[y],T[y],d[y],g[y],_)));continue}var V=Math.pow(C,2)-4*Y*k;if(!(V<0)){var ee=(-C+Math.sqrt(V))/(2*k);0<ee&&ee<1&&(y===0&&this.addX(_n(E[y],T[y],d[y],g[y],ee)),y===1&&this.addY(_n(E[y],T[y],d[y],g[y],ee)));var q=(-C-Math.sqrt(V))/(2*k);0<q&&q<1&&(y===0&&this.addX(_n(E[y],T[y],d[y],g[y],q)),y===1&&this.addY(_n(E[y],T[y],d[y],g[y],q)))}}};$r.prototype.addQuad=function(t,e,r,n,a,o){var s=t+.6666666666666666*(r-t),x=e+2/3*(n-e),E=s+1/3*(a-t),T=x+1/3*(o-e);this.addBezier(t,e,s,x,E,T,a,o)};function Mt(){this.commands=[],this.fill="black",this.stroke=null,this.strokeWidth=1}Mt.prototype.moveTo=function(t,e){this.commands.push({type:"M",x:t,y:e})};Mt.prototype.lineTo=function(t,e){this.commands.push({type:"L",x:t,y:e})};Mt.prototype.curveTo=Mt.prototype.bezierCurveTo=function(t,e,r,n,a,o){this.commands.push({type:"C",x1:t,y1:e,x2:r,y2:n,x:a,y:o})};Mt.prototype.quadTo=Mt.prototype.quadraticCurveTo=function(t,e,r,n){this.commands.push({type:"Q",x1:t,y1:e,x:r,y:n})};Mt.prototype.close=Mt.prototype.closePath=function(){this.commands.push({type:"Z"})};Mt.prototype.extend=function(t){if(t.commands)t=t.commands;else if(t instanceof $r){var e=t;this.moveTo(e.x1,e.y1),this.lineTo(e.x2,e.y1),this.lineTo(e.x2,e.y2),this.lineTo(e.x1,e.y2),this.close();return}Array.prototype.push.apply(this.commands,t)};Mt.prototype.getBoundingBox=function(){for(var t=new $r,e=0,r=0,n=0,a=0,o=0;o<this.commands.length;o++){var s=this.commands[o];switch(s.type){case"M":t.addPoint(s.x,s.y),e=n=s.x,r=a=s.y;break;case"L":t.addPoint(s.x,s.y),n=s.x,a=s.y;break;case"Q":t.addQuad(n,a,s.x1,s.y1,s.x,s.y),n=s.x,a=s.y;break;case"C":t.addBezier(n,a,s.x1,s.y1,s.x2,s.y2,s.x,s.y),n=s.x,a=s.y;break;case"Z":n=e,a=r;break;default:throw new Error("Unexpected path command "+s.type)}}return t.isEmpty()&&t.addPoint(0,0),t};Mt.prototype.draw=function(t){t.beginPath();for(var e=0;e<this.commands.length;e+=1){var r=this.commands[e];r.type==="M"?t.moveTo(r.x,r.y):r.type==="L"?t.lineTo(r.x,r.y):r.type==="C"?t.bezierCurveTo(r.x1,r.y1,r.x2,r.y2,r.x,r.y):r.type==="Q"?t.quadraticCurveTo(r.x1,r.y1,r.x,r.y):r.type==="Z"&&t.closePath()}this.fill&&(t.fillStyle=this.fill,t.fill()),this.stroke&&(t.strokeStyle=this.stroke,t.lineWidth=this.strokeWidth,t.stroke())};Mt.prototype.toPathData=function(t){t=t!==void 0?t:2;function e(s){return Math.round(s)===s?""+Math.round(s):s.toFixed(t)}function r(){for(var s=arguments,x="",E=0;E<arguments.length;E+=1){var T=s[E];T>=0&&E>0&&(x+=" "),x+=e(T)}return x}for(var n="",a=0;a<this.commands.length;a+=1){var o=this.commands[a];o.type==="M"?n+="M"+r(o.x,o.y):o.type==="L"?n+="L"+r(o.x,o.y):o.type==="C"?n+="C"+r(o.x1,o.y1,o.x2,o.y2,o.x,o.y):o.type==="Q"?n+="Q"+r(o.x1,o.y1,o.x,o.y):o.type==="Z"&&(n+="Z")}return n};Mt.prototype.toSVG=function(t){var e='<path d="';return e+=this.toPathData(t),e+='"',this.fill&&this.fill!=="black"&&(this.fill===null?e+=' fill="none"':e+=' fill="'+this.fill+'"'),this.stroke&&(e+=' stroke="'+this.stroke+'" stroke-width="'+this.strokeWidth+'"'),e+="/>",e};Mt.prototype.toDOMElement=function(t){var e=this.toPathData(t),r=document.createElementNS("http://www.w3.org/2000/svg","path");return r.setAttribute("d",e),r};function hs(t){throw new Error(t)}function pA(t,e){t||hs(e)}var Ge={fail:hs,argument:pA,assert:pA},SA=32768,CA=2147483648,na={},Se={},Pe={};function fr(t){return function(){return t}}Se.BYTE=function(t){return Ge.argument(t>=0&&t<=255,"Byte value should be between 0 and 255."),[t]};Pe.BYTE=fr(1);Se.CHAR=function(t){return[t.charCodeAt(0)]};Pe.CHAR=fr(1);Se.CHARARRAY=function(t){typeof t>"u"&&(t="",console.warn("Undefined CHARARRAY encountered and treated as an empty string. This is probably caused by a missing glyph name."));for(var e=[],r=0;r<t.length;r+=1)e[r]=t.charCodeAt(r);return e};Pe.CHARARRAY=function(t){return typeof t>"u"?0:t.length};Se.USHORT=function(t){return[t>>8&255,t&255]};Pe.USHORT=fr(2);Se.SHORT=function(t){return t>=SA&&(t=-(2*SA-t)),[t>>8&255,t&255]};Pe.SHORT=fr(2);Se.UINT24=function(t){return[t>>16&255,t>>8&255,t&255]};Pe.UINT24=fr(3);Se.ULONG=function(t){return[t>>24&255,t>>16&255,t>>8&255,t&255]};Pe.ULONG=fr(4);Se.LONG=function(t){return t>=CA&&(t=-(2*CA-t)),[t>>24&255,t>>16&255,t>>8&255,t&255]};Pe.LONG=fr(4);Se.FIXED=Se.ULONG;Pe.FIXED=Pe.ULONG;Se.FWORD=Se.SHORT;Pe.FWORD=Pe.SHORT;Se.UFWORD=Se.USHORT;Pe.UFWORD=Pe.USHORT;Se.LONGDATETIME=function(t){return[0,0,0,0,t>>24&255,t>>16&255,t>>8&255,t&255]};Pe.LONGDATETIME=fr(8);Se.TAG=function(t){return Ge.argument(t.length===4,"Tag should be exactly 4 ASCII characters."),[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]};Pe.TAG=fr(4);Se.Card8=Se.BYTE;Pe.Card8=Pe.BYTE;Se.Card16=Se.USHORT;Pe.Card16=Pe.USHORT;Se.OffSize=Se.BYTE;Pe.OffSize=Pe.BYTE;Se.SID=Se.USHORT;Pe.SID=Pe.USHORT;Se.NUMBER=function(t){return t>=-107&&t<=107?[t+139]:t>=108&&t<=1131?(t=t-108,[(t>>8)+247,t&255]):t>=-1131&&t<=-108?(t=-t-108,[(t>>8)+251,t&255]):t>=-32768&&t<=32767?Se.NUMBER16(t):Se.NUMBER32(t)};Pe.NUMBER=function(t){return Se.NUMBER(t).length};Se.NUMBER16=function(t){return[28,t>>8&255,t&255]};Pe.NUMBER16=fr(3);Se.NUMBER32=function(t){return[29,t>>24&255,t>>16&255,t>>8&255,t&255]};Pe.NUMBER32=fr(5);Se.REAL=function(t){var e=t.toString(),r=/\.(\d*?)(?:9{5,20}|0{5,20})\d{0,2}(?:e(.+)|$)/.exec(e);if(r){var n=parseFloat("1e"+((r[2]?+r[2]:0)+r[1].length));e=(Math.round(t*n)/n).toString()}for(var a="",o=0,s=e.length;o<s;o+=1){var x=e[o];x==="e"?a+=e[++o]==="-"?"c":"b":x==="."?a+="a":x==="-"?a+="e":a+=x}a+=a.length&1?"f":"ff";for(var E=[30],T=0,d=a.length;T<d;T+=2)E.push(parseInt(a.substr(T,2),16));return E};Pe.REAL=function(t){return Se.REAL(t).length};Se.NAME=Se.CHARARRAY;Pe.NAME=Pe.CHARARRAY;Se.STRING=Se.CHARARRAY;Pe.STRING=Pe.CHARARRAY;na.UTF8=function(t,e,r){for(var n=[],a=r,o=0;o<a;o++,e+=1)n[o]=t.getUint8(e);return String.fromCharCode.apply(null,n)};na.UTF16=function(t,e,r){for(var n=[],a=r/2,o=0;o<a;o++,e+=2)n[o]=t.getUint16(e);return String.fromCharCode.apply(null,n)};Se.UTF16=function(t){for(var e=[],r=0;r<t.length;r+=1){var n=t.charCodeAt(r);e[e.length]=n>>8&255,e[e.length]=n&255}return e};Pe.UTF16=function(t){return t.length*2};var X0={"x-mac-croatian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®Š™´¨≠ŽØ∞±≤≥∆µ∂∑∏š∫ªºΩžø¿¡¬√ƒ≈Ć«Č… ÀÃÕŒœĐ—“”‘’÷◊©⁄€‹›Æ»–·‚„‰ÂćÁčÈÍÎÏÌÓÔđÒÚÛÙıˆ˜¯πË˚¸Êæˇ","x-mac-cyrillic":"АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ†°Ґ£§•¶І®©™Ђђ≠Ѓѓ∞±≤≥іµґЈЄєЇїЉљЊњјЅ¬√ƒ≈∆«»… ЋћЌќѕ–—“”‘’÷„ЎўЏџ№Ёёяабвгдежзийклмнопрстуфхцчшщъыьэю","x-mac-gaelic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØḂ±≤≥ḃĊċḊḋḞḟĠġṀæøṁṖṗɼƒſṠ«»… ÀÃÕŒœ–—“”‘’ṡẛÿŸṪ€‹›Ŷŷṫ·Ỳỳ⁊ÂÊÁËÈÍÎÏÌÓÔ♣ÒÚÛÙıÝýŴŵẄẅẀẁẂẃ","x-mac-greek":"Ä¹²É³ÖÜ΅àâä΄¨çéèêë£™îï•½‰ôö¦€ùûü†ΓΔΘΛΞΠß®©ΣΪ§≠°·Α±≤≥¥ΒΕΖΗΙΚΜΦΫΨΩάΝ¬ΟΡ≈Τ«»… ΥΧΆΈœ–―“”‘’÷ΉΊΌΎέήίόΏύαβψδεφγηιξκλμνοπώρστθωςχυζϊϋΐΰ­","x-mac-icelandic":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûüÝ°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€ÐðÞþý·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-inuit":"ᐃᐄᐅᐆᐊᐋᐱᐲᐳᐴᐸᐹᑉᑎᑏᑐᑑᑕᑖᑦᑭᑮᑯᑰᑲᑳᒃᒋᒌᒍᒎᒐᒑ°ᒡᒥᒦ•¶ᒧ®©™ᒨᒪᒫᒻᓂᓃᓄᓅᓇᓈᓐᓯᓰᓱᓲᓴᓵᔅᓕᓖᓗᓘᓚᓛᓪᔨᔩᔪᔫᔭ… ᔮᔾᕕᕖᕗ–—“”‘’ᕘᕙᕚᕝᕆᕇᕈᕉᕋᕌᕐᕿᖀᖁᖂᖃᖄᖅᖏᖐᖑᖒᖓᖔᖕᙱᙲᙳᙴᙵᙶᖖᖠᖡᖢᖣᖤᖥᖦᕼŁł","x-mac-ce":"ÄĀāÉĄÖÜáąČäčĆćéŹźĎíďĒēĖóėôöõúĚěü†°Ę£§•¶ß®©™ę¨≠ģĮįĪ≤≥īĶ∂∑łĻļĽľĹĺŅņŃ¬√ńŇ∆«»… ňŐÕőŌ–—“”‘’÷◊ōŔŕŘ‹›řŖŗŠ‚„šŚśÁŤťÍŽžŪÓÔūŮÚůŰűŲųÝýķŻŁżĢˇ",macintosh:"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›ﬁﬂ‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-romanian":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ĂȘ∞±≤≥¥µ∂∑∏π∫ªºΩăș¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸ⁄€‹›Țț‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙıˆ˜¯˘˙˚¸˝˛ˇ","x-mac-turkish":"ÄÅÇÉÑÖÜáàâäãåçéèêëíìîïñóòôöõúùûü†°¢£§•¶ß®©™´¨≠ÆØ∞±≤≥¥µ∂∑∏π∫ªºΩæø¿¡¬√ƒ≈∆«»… ÀÃÕŒœ–—“”‘’÷◊ÿŸĞğİıŞş‡·‚„‰ÂÊÁËÈÍÎÏÌÓÔÒÚÛÙˆ˜¯˘˙˚¸˝˛ˇ"};na.MACSTRING=function(t,e,r,n){var a=X0[n];if(a!==void 0){for(var o="",s=0;s<r;s++){var x=t.getUint8(e+s);x<=127?o+=String.fromCharCode(x):o+=a[x&127]}return o}};var xi=typeof WeakMap=="function"&&new WeakMap,Ei,kE=function(t){if(!Ei){Ei={};for(var e in X0)Ei[e]=new String(e)}var r=Ei[t];if(r!==void 0){if(xi){var n=xi.get(r);if(n!==void 0)return n}var a=X0[t];if(a!==void 0){for(var o={},s=0;s<a.length;s++)o[a.charCodeAt(s)]=s+128;return xi&&xi.set(r,o),o}}};Se.MACSTRING=function(t,e){var r=kE(e);if(r!==void 0){for(var n=[],a=0;a<t.length;a++){var o=t.charCodeAt(a);if(o>=128&&(o=r[o],o===void 0))return;n[a]=o}return n}};Pe.MACSTRING=function(t,e){var r=Se.MACSTRING(t,e);return r!==void 0?r.length:0};function j0(t){return t>=-128&&t<=127}function KE(t,e,r){for(var n=0,a=t.length;e<a&&n<64&&t[e]===0;)++e,++n;return r.push(128|n-1),e}function VE(t,e,r){for(var n=0,a=t.length,o=e;o<a&&n<64;){var s=t[o];if(!j0(s)||s===0&&o+1<a&&t[o+1]===0)break;++o,++n}r.push(n-1);for(var x=e;x<o;++x)r.push(t[x]+256&255);return o}function _E(t,e,r){for(var n=0,a=t.length,o=e;o<a&&n<64;){var s=t[o];if(s===0||j0(s)&&o+1<a&&j0(t[o+1]))break;++o,++n}r.push(64|n-1);for(var x=e;x<o;++x){var E=t[x];r.push(E+65536>>8&255,E+256&255)}return o}Se.VARDELTAS=function(t){for(var e=0,r=[];e<t.length;){var n=t[e];n===0?e=KE(t,e,r):n>=-128&&n<=127?e=VE(t,e,r):e=_E(t,e,r)}return r};Se.INDEX=function(t){for(var e=1,r=[e],n=[],a=0;a<t.length;a+=1){var o=Se.OBJECT(t[a]);Array.prototype.push.apply(n,o),e+=o.length,r.push(e)}if(n.length===0)return[0,0];for(var s=[],x=1+Math.floor(Math.log(e)/Math.log(2))/8|0,E=[void 0,Se.BYTE,Se.USHORT,Se.UINT24,Se.ULONG][x],T=0;T<r.length;T+=1){var d=E(r[T]);Array.prototype.push.apply(s,d)}return Array.prototype.concat(Se.Card16(t.length),Se.OffSize(x),s,n)};Pe.INDEX=function(t){return Se.INDEX(t).length};Se.DICT=function(t){for(var e=[],r=Object.keys(t),n=r.length,a=0;a<n;a+=1){var o=parseInt(r[a],0),s=t[o];e=e.concat(Se.OPERAND(s.value,s.type)),e=e.concat(Se.OPERATOR(o))}return e};Pe.DICT=function(t){return Se.DICT(t).length};Se.OPERATOR=function(t){return t<1200?[t]:[12,t-1200]};Se.OPERAND=function(t,e){var r=[];if(Array.isArray(e))for(var n=0;n<e.length;n+=1)Ge.argument(t.length===e.length,"Not enough arguments given for type"+e),r=r.concat(Se.OPERAND(t[n],e[n]));else if(e==="SID")r=r.concat(Se.NUMBER(t));else if(e==="offset")r=r.concat(Se.NUMBER32(t));else if(e==="number")r=r.concat(Se.NUMBER(t));else if(e==="real")r=r.concat(Se.REAL(t));else throw new Error("Unknown operand type "+e);return r};Se.OP=Se.BYTE;Pe.OP=Pe.BYTE;var Li=typeof WeakMap=="function"&&new WeakMap;Se.CHARSTRING=function(t){if(Li){var e=Li.get(t);if(e!==void 0)return e}for(var r=[],n=t.length,a=0;a<n;a+=1){var o=t[a];r=r.concat(Se[o.type](o.value))}return Li&&Li.set(t,r),r};Pe.CHARSTRING=function(t){return Se.CHARSTRING(t).length};Se.OBJECT=function(t){var e=Se[t.type];return Ge.argument(e!==void 0,"No encoding function for type "+t.type),e(t.value)};Pe.OBJECT=function(t){var e=Pe[t.type];return Ge.argument(e!==void 0,"No sizeOf function for type "+t.type),e(t.value)};Se.TABLE=function(t){for(var e=[],r=t.fields.length,n=[],a=[],o=0;o<r;o+=1){var s=t.fields[o],x=Se[s.type];Ge.argument(x!==void 0,"No encoding function for field type "+s.type+" ("+s.name+")");var E=t[s.name];E===void 0&&(E=s.value);var T=x(E);s.type==="TABLE"?(a.push(e.length),e=e.concat([0,0]),n.push(T)):e=e.concat(T)}for(var d=0;d<n.length;d+=1){var g=a[d],y=e.length;Ge.argument(y<65536,"Table "+t.tableName+" too big."),e[g]=y>>8,e[g+1]=y&255,e=e.concat(n[d])}return e};Pe.TABLE=function(t){for(var e=0,r=t.fields.length,n=0;n<r;n+=1){var a=t.fields[n],o=Pe[a.type];Ge.argument(o!==void 0,"No sizeOf function for field type "+a.type+" ("+a.name+")");var s=t[a.name];s===void 0&&(s=a.value),e+=o(s),a.type==="TABLE"&&(e+=2)}return e};Se.RECORD=Se.TABLE;Pe.RECORD=Pe.TABLE;Se.LITERAL=function(t){return t};Pe.LITERAL=function(t){return t.length};function Vt(t,e,r){if(e.length&&(e[0].name!=="coverageFormat"||e[0].value===1))for(var n=0;n<e.length;n+=1){var a=e[n];this[a.name]=a.value}if(this.tableName=t,this.fields=e,r)for(var o=Object.keys(r),s=0;s<o.length;s+=1){var x=o[s],E=r[x];this[x]!==void 0&&(this[x]=E)}}Vt.prototype.encode=function(){return Se.TABLE(this)};Vt.prototype.sizeOf=function(){return Pe.TABLE(this)};function Fa(t,e,r){r===void 0&&(r=e.length);var n=new Array(e.length+1);n[0]={name:t+"Count",type:"USHORT",value:r};for(var a=0;a<e.length;a++)n[a+1]={name:t+a,type:"USHORT",value:e[a]};return n}function q0(t,e,r){var n=e.length,a=new Array(n+1);a[0]={name:t+"Count",type:"USHORT",value:n};for(var o=0;o<n;o++)a[o+1]={name:t+o,type:"TABLE",value:r(e[o],o)};return a}function Ma(t,e,r){var n=e.length,a=[];a[0]={name:t+"Count",type:"USHORT",value:n};for(var o=0;o<n;o++)a=a.concat(r(e[o],o));return a}function Bi(t){t.format===1?Vt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:1}].concat(Fa("glyph",t.glyphs))):t.format===2?Vt.call(this,"coverageTable",[{name:"coverageFormat",type:"USHORT",value:2}].concat(Ma("rangeRecord",t.ranges,function(e){return[{name:"startGlyphID",type:"USHORT",value:e.start},{name:"endGlyphID",type:"USHORT",value:e.end},{name:"startCoverageIndex",type:"USHORT",value:e.index}]}))):Ge.assert(!1,"Coverage format must be 1 or 2.")}Bi.prototype=Object.create(Vt.prototype);Bi.prototype.constructor=Bi;function Hi(t){Vt.call(this,"scriptListTable",Ma("scriptRecord",t,function(e,r){var n=e.script,a=n.defaultLangSys;return Ge.assert(!!a,"Unable to write GSUB: script "+e.tag+" has no default language system."),[{name:"scriptTag"+r,type:"TAG",value:e.tag},{name:"script"+r,type:"TABLE",value:new Vt("scriptTable",[{name:"defaultLangSys",type:"TABLE",value:new Vt("defaultLangSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:a.reqFeatureIndex}].concat(Fa("featureIndex",a.featureIndexes)))}].concat(Ma("langSys",n.langSysRecords,function(o,s){var x=o.langSys;return[{name:"langSysTag"+s,type:"TAG",value:o.tag},{name:"langSys"+s,type:"TABLE",value:new Vt("langSys",[{name:"lookupOrder",type:"USHORT",value:0},{name:"reqFeatureIndex",type:"USHORT",value:x.reqFeatureIndex}].concat(Fa("featureIndex",x.featureIndexes)))}]})))}]}))}Hi.prototype=Object.create(Vt.prototype);Hi.prototype.constructor=Hi;function Fi(t){Vt.call(this,"featureListTable",Ma("featureRecord",t,function(e,r){var n=e.feature;return[{name:"featureTag"+r,type:"TAG",value:e.tag},{name:"feature"+r,type:"TABLE",value:new Vt("featureTable",[{name:"featureParams",type:"USHORT",value:n.featureParams}].concat(Fa("lookupListIndex",n.lookupListIndexes)))}]}))}Fi.prototype=Object.create(Vt.prototype);Fi.prototype.constructor=Fi;function Mi(t,e){Vt.call(this,"lookupListTable",q0("lookup",t,function(r){var n=e[r.lookupType];return Ge.assert(!!n,"Unable to write GSUB lookup type "+r.lookupType+" tables."),new Vt("lookupTable",[{name:"lookupType",type:"USHORT",value:r.lookupType},{name:"lookupFlag",type:"USHORT",value:r.lookupFlag}].concat(q0("subtable",r.subtables,n)))}))}Mi.prototype=Object.create(Vt.prototype);Mi.prototype.constructor=Mi;var ge={Table:Vt,Record:Vt,Coverage:Bi,ScriptList:Hi,FeatureList:Fi,LookupList:Mi,ushortList:Fa,tableList:q0,recordList:Ma};function gA(t,e){return t.getUint8(e)}function Gi(t,e){return t.getUint16(e,!1)}function JE(t,e){return t.getInt16(e,!1)}function fo(t,e){return t.getUint32(e,!1)}function cs(t,e){var r=t.getInt16(e,!1),n=t.getUint16(e+2,!1);return r+n/65535}function zE(t,e){for(var r="",n=e;n<e+4;n+=1)r+=String.fromCharCode(t.getInt8(n));return r}function ZE(t,e,r){for(var n=0,a=0;a<r;a+=1)n<<=8,n+=t.getUint8(e+a);return n}function XE(t,e,r){for(var n=[],a=e;a<r;a+=1)n.push(t.getUint8(a));return n}function jE(t){for(var e="",r=0;r<t.length;r+=1)e+=String.fromCharCode(t[r]);return e}var qE={byte:1,uShort:2,short:2,uLong:4,fixed:4,longDateTime:8,tag:4};function te(t,e){this.data=t,this.offset=e,this.relativeOffset=0}te.prototype.parseByte=function(){var t=this.data.getUint8(this.offset+this.relativeOffset);return this.relativeOffset+=1,t};te.prototype.parseChar=function(){var t=this.data.getInt8(this.offset+this.relativeOffset);return this.relativeOffset+=1,t};te.prototype.parseCard8=te.prototype.parseByte;te.prototype.parseUShort=function(){var t=this.data.getUint16(this.offset+this.relativeOffset);return this.relativeOffset+=2,t};te.prototype.parseCard16=te.prototype.parseUShort;te.prototype.parseSID=te.prototype.parseUShort;te.prototype.parseOffset16=te.prototype.parseUShort;te.prototype.parseShort=function(){var t=this.data.getInt16(this.offset+this.relativeOffset);return this.relativeOffset+=2,t};te.prototype.parseF2Dot14=function(){var t=this.data.getInt16(this.offset+this.relativeOffset)/16384;return this.relativeOffset+=2,t};te.prototype.parseULong=function(){var t=fo(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,t};te.prototype.parseOffset32=te.prototype.parseULong;te.prototype.parseFixed=function(){var t=cs(this.data,this.offset+this.relativeOffset);return this.relativeOffset+=4,t};te.prototype.parseString=function(t){var e=this.data,r=this.offset+this.relativeOffset,n="";this.relativeOffset+=t;for(var a=0;a<t;a++)n+=String.fromCharCode(e.getUint8(r+a));return n};te.prototype.parseTag=function(){return this.parseString(4)};te.prototype.parseLongDateTime=function(){var t=fo(this.data,this.offset+this.relativeOffset+4);return t-=2082844800,this.relativeOffset+=8,t};te.prototype.parseVersion=function(t){var e=Gi(this.data,this.offset+this.relativeOffset),r=Gi(this.data,this.offset+this.relativeOffset+2);return this.relativeOffset+=4,t===void 0&&(t=4096),e+r/t/10};te.prototype.skip=function(t,e){e===void 0&&(e=1),this.relativeOffset+=qE[t]*e};te.prototype.parseULongList=function(t){t===void 0&&(t=this.parseULong());for(var e=new Array(t),r=this.data,n=this.offset+this.relativeOffset,a=0;a<t;a++)e[a]=r.getUint32(n),n+=4;return this.relativeOffset+=t*4,e};te.prototype.parseOffset16List=te.prototype.parseUShortList=function(t){t===void 0&&(t=this.parseUShort());for(var e=new Array(t),r=this.data,n=this.offset+this.relativeOffset,a=0;a<t;a++)e[a]=r.getUint16(n),n+=2;return this.relativeOffset+=t*2,e};te.prototype.parseShortList=function(t){for(var e=new Array(t),r=this.data,n=this.offset+this.relativeOffset,a=0;a<t;a++)e[a]=r.getInt16(n),n+=2;return this.relativeOffset+=t*2,e};te.prototype.parseByteList=function(t){for(var e=new Array(t),r=this.data,n=this.offset+this.relativeOffset,a=0;a<t;a++)e[a]=r.getUint8(n++);return this.relativeOffset+=t,e};te.prototype.parseList=function(t,e){e||(e=t,t=this.parseUShort());for(var r=new Array(t),n=0;n<t;n++)r[n]=e.call(this);return r};te.prototype.parseList32=function(t,e){e||(e=t,t=this.parseULong());for(var r=new Array(t),n=0;n<t;n++)r[n]=e.call(this);return r};te.prototype.parseRecordList=function(t,e){e||(e=t,t=this.parseUShort());for(var r=new Array(t),n=Object.keys(e),a=0;a<t;a++){for(var o={},s=0;s<n.length;s++){var x=n[s],E=e[x];o[x]=E.call(this)}r[a]=o}return r};te.prototype.parseRecordList32=function(t,e){e||(e=t,t=this.parseULong());for(var r=new Array(t),n=Object.keys(e),a=0;a<t;a++){for(var o={},s=0;s<n.length;s++){var x=n[s],E=e[x];o[x]=E.call(this)}r[a]=o}return r};te.prototype.parseStruct=function(t){if(typeof t=="function")return t.call(this);for(var e=Object.keys(t),r={},n=0;n<e.length;n++){var a=e[n],o=t[a];r[a]=o.call(this)}return r};te.prototype.parseValueRecord=function(t){if(t===void 0&&(t=this.parseUShort()),t!==0){var e={};return t&1&&(e.xPlacement=this.parseShort()),t&2&&(e.yPlacement=this.parseShort()),t&4&&(e.xAdvance=this.parseShort()),t&8&&(e.yAdvance=this.parseShort()),t&16&&(e.xPlaDevice=void 0,this.parseShort()),t&32&&(e.yPlaDevice=void 0,this.parseShort()),t&64&&(e.xAdvDevice=void 0,this.parseShort()),t&128&&(e.yAdvDevice=void 0,this.parseShort()),e}};te.prototype.parseValueRecordList=function(){for(var t=this.parseUShort(),e=this.parseUShort(),r=new Array(e),n=0;n<e;n++)r[n]=this.parseValueRecord(t);return r};te.prototype.parsePointer=function(t){var e=this.parseOffset16();if(e>0)return new te(this.data,this.offset+e).parseStruct(t)};te.prototype.parsePointer32=function(t){var e=this.parseOffset32();if(e>0)return new te(this.data,this.offset+e).parseStruct(t)};te.prototype.parseListOfLists=function(t){for(var e=this.parseOffset16List(),r=e.length,n=this.relativeOffset,a=new Array(r),o=0;o<r;o++){var s=e[o];if(s===0){a[o]=void 0;continue}if(this.relativeOffset=s,t){for(var x=this.parseOffset16List(),E=new Array(x.length),T=0;T<x.length;T++)this.relativeOffset=s+x[T],E[T]=t.call(this);a[o]=E}else a[o]=this.parseUShortList()}return this.relativeOffset=n,a};te.prototype.parseCoverage=function(){var t=this.offset+this.relativeOffset,e=this.parseUShort(),r=this.parseUShort();if(e===1)return{format:1,glyphs:this.parseUShortList(r)};if(e===2){for(var n=new Array(r),a=0;a<r;a++)n[a]={start:this.parseUShort(),end:this.parseUShort(),index:this.parseUShort()};return{format:2,ranges:n}}throw new Error("0x"+t.toString(16)+": Coverage format must be 1 or 2.")};te.prototype.parseClassDef=function(){var t=this.offset+this.relativeOffset,e=this.parseUShort();if(e===1)return{format:1,startGlyph:this.parseUShort(),classes:this.parseUShortList()};if(e===2)return{format:2,ranges:this.parseRecordList({start:te.uShort,end:te.uShort,classId:te.uShort})};throw new Error("0x"+t.toString(16)+": ClassDef format must be 1 or 2.")};te.list=function(t,e){return function(){return this.parseList(t,e)}};te.list32=function(t,e){return function(){return this.parseList32(t,e)}};te.recordList=function(t,e){return function(){return this.parseRecordList(t,e)}};te.recordList32=function(t,e){return function(){return this.parseRecordList32(t,e)}};te.pointer=function(t){return function(){return this.parsePointer(t)}};te.pointer32=function(t){return function(){return this.parsePointer32(t)}};te.tag=te.prototype.parseTag;te.byte=te.prototype.parseByte;te.uShort=te.offset16=te.prototype.parseUShort;te.uShortList=te.prototype.parseUShortList;te.uLong=te.offset32=te.prototype.parseULong;te.uLongList=te.prototype.parseULongList;te.struct=te.prototype.parseStruct;te.coverage=te.prototype.parseCoverage;te.classDef=te.prototype.parseClassDef;var RA={reserved:te.uShort,reqFeatureIndex:te.uShort,featureIndexes:te.uShortList};te.prototype.parseScriptList=function(){return this.parsePointer(te.recordList({tag:te.tag,script:te.pointer({defaultLangSys:te.pointer(RA),langSysRecords:te.recordList({tag:te.tag,langSys:te.pointer(RA)})})}))||[]};te.prototype.parseFeatureList=function(){return this.parsePointer(te.recordList({tag:te.tag,feature:te.pointer({featureParams:te.offset16,lookupListIndexes:te.uShortList})}))||[]};te.prototype.parseLookupList=function(t){return this.parsePointer(te.list(te.pointer(function(){var e=this.parseUShort();Ge.argument(1<=e&&e<=9,"GPOS/GSUB lookup type "+e+" unknown.");var r=this.parseUShort(),n=r&16;return{lookupType:e,lookupFlag:r,subtables:this.parseList(te.pointer(t[e])),markFilteringSet:n?this.parseUShort():void 0}})))||[]};te.prototype.parseFeatureVariationsList=function(){return this.parsePointer32(function(){var t=this.parseUShort(),e=this.parseUShort();Ge.argument(t===1&&e<1,"GPOS/GSUB feature variations table unknown.");var r=this.parseRecordList32({conditionSetOffset:te.offset32,featureTableSubstitutionOffset:te.offset32});return r})||[]};var ye={getByte:gA,getCard8:gA,getUShort:Gi,getCard16:Gi,getShort:JE,getULong:fo,getFixed:cs,getTag:zE,getOffset:ZE,getBytes:XE,bytesToString:jE,Parser:te};function QE(t,e){e.parseUShort(),t.length=e.parseULong(),t.language=e.parseULong();var r;t.groupCount=r=e.parseULong(),t.glyphIndexMap={};for(var n=0;n<r;n+=1)for(var a=e.parseULong(),o=e.parseULong(),s=e.parseULong(),x=a;x<=o;x+=1)t.glyphIndexMap[x]=s,s++}function $E(t,e,r,n,a){t.length=e.parseUShort(),t.language=e.parseUShort();var o;t.segCount=o=e.parseUShort()>>1,e.skip("uShort",3),t.glyphIndexMap={};for(var s=new ye.Parser(r,n+a+14),x=new ye.Parser(r,n+a+16+o*2),E=new ye.Parser(r,n+a+16+o*4),T=new ye.Parser(r,n+a+16+o*6),d=n+a+16+o*8,g=0;g<o-1;g+=1)for(var y=void 0,C=s.parseUShort(),k=x.parseUShort(),Y=E.parseShort(),_=T.parseUShort(),V=k;V<=C;V+=1)_!==0?(d=T.offset+T.relativeOffset-2,d+=_,d+=(V-k)*2,y=ye.getUShort(r,d),y!==0&&(y=y+Y&65535)):y=V+Y&65535,t.glyphIndexMap[V]=y}function eL(t,e){var r={};r.version=ye.getUShort(t,e),Ge.argument(r.version===0,"cmap table version should be 0."),r.numTables=ye.getUShort(t,e+2);for(var n=-1,a=r.numTables-1;a>=0;a-=1){var o=ye.getUShort(t,e+4+a*8),s=ye.getUShort(t,e+4+a*8+2);if(o===3&&(s===0||s===1||s===10)||o===0&&(s===0||s===1||s===2||s===3||s===4)){n=ye.getULong(t,e+4+a*8+4);break}}if(n===-1)throw new Error("No valid cmap sub-tables found.");var x=new ye.Parser(t,e+n);if(r.format=x.parseUShort(),r.format===12)QE(r,x);else if(r.format===4)$E(r,x,t,e,n);else throw new Error("Only format 4 and 12 cmap tables are supported (found format "+r.format+").");return r}function tL(t,e,r){t.segments.push({end:e,start:e,delta:-(e-r),offset:0,glyphIndex:r})}function rL(t){t.segments.push({end:65535,start:65535,delta:1,offset:0})}function nL(t){var e=!0,r;for(r=t.length-1;r>0;r-=1){var n=t.get(r);if(n.unicode>65535){console.log("Adding CMAP format 12 (needed!)"),e=!1;break}}var a=[{name:"version",type:"USHORT",value:0},{name:"numTables",type:"USHORT",value:e?1:2},{name:"platformID",type:"USHORT",value:3},{name:"encodingID",type:"USHORT",value:1},{name:"offset",type:"ULONG",value:e?12:20}];e||(a=a.concat([{name:"cmap12PlatformID",type:"USHORT",value:3},{name:"cmap12EncodingID",type:"USHORT",value:10},{name:"cmap12Offset",type:"ULONG",value:0}])),a=a.concat([{name:"format",type:"USHORT",value:4},{name:"cmap4Length",type:"USHORT",value:0},{name:"language",type:"USHORT",value:0},{name:"segCountX2",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);var o=new ge.Table("cmap",a);for(o.segments=[],r=0;r<t.length;r+=1){for(var s=t.get(r),x=0;x<s.unicodes.length;x+=1)tL(o,s.unicodes[x],r);o.segments=o.segments.sort(function(ee,q){return ee.start-q.start})}rL(o);var E=o.segments.length,T=0,d=[],g=[],y=[],C=[],k=[],Y=[];for(r=0;r<E;r+=1){var _=o.segments[r];_.end<=65535&&_.start<=65535?(d=d.concat({name:"end_"+r,type:"USHORT",value:_.end}),g=g.concat({name:"start_"+r,type:"USHORT",value:_.start}),y=y.concat({name:"idDelta_"+r,type:"SHORT",value:_.delta}),C=C.concat({name:"idRangeOffset_"+r,type:"USHORT",value:_.offset}),_.glyphId!==void 0&&(k=k.concat({name:"glyph_"+r,type:"USHORT",value:_.glyphId}))):T+=1,!e&&_.glyphIndex!==void 0&&(Y=Y.concat({name:"cmap12Start_"+r,type:"ULONG",value:_.start}),Y=Y.concat({name:"cmap12End_"+r,type:"ULONG",value:_.end}),Y=Y.concat({name:"cmap12Glyph_"+r,type:"ULONG",value:_.glyphIndex}))}if(o.segCountX2=(E-T)*2,o.searchRange=Math.pow(2,Math.floor(Math.log(E-T)/Math.log(2)))*2,o.entrySelector=Math.log(o.searchRange/2)/Math.log(2),o.rangeShift=o.segCountX2-o.searchRange,o.fields=o.fields.concat(d),o.fields.push({name:"reservedPad",type:"USHORT",value:0}),o.fields=o.fields.concat(g),o.fields=o.fields.concat(y),o.fields=o.fields.concat(C),o.fields=o.fields.concat(k),o.cmap4Length=14+d.length*2+2+g.length*2+y.length*2+C.length*2+k.length*2,!e){var V=16+Y.length*4;o.cmap12Offset=12+2*2+4+o.cmap4Length,o.fields=o.fields.concat([{name:"cmap12Format",type:"USHORT",value:12},{name:"cmap12Reserved",type:"USHORT",value:0},{name:"cmap12Length",type:"ULONG",value:V},{name:"cmap12Language",type:"ULONG",value:0},{name:"cmap12nGroups",type:"ULONG",value:Y.length/3}]),o.fields=o.fields.concat(Y)}return o}var Ts={parse:eL,make:nL},Ci=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","266 ff","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],aL=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],iL=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],fn=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"];function Is(t){this.font=t}Is.prototype.charToGlyphIndex=function(t){var e=t.codePointAt(0),r=this.font.glyphs;if(r){for(var n=0;n<r.length;n+=1)for(var a=r.get(n),o=0;o<a.unicodes.length;o+=1)if(a.unicodes[o]===e)return n}return null};function ds(t){this.cmap=t}ds.prototype.charToGlyphIndex=function(t){return this.cmap.glyphIndexMap[t.codePointAt(0)]||0};function Pi(t,e){this.encoding=t,this.charset=e}Pi.prototype.charToGlyphIndex=function(t){var e=t.codePointAt(0),r=this.encoding[e];return this.charset.indexOf(r)};function Oo(t){switch(t.version){case 1:this.names=fn.slice();break;case 2:this.names=new Array(t.numberOfGlyphs);for(var e=0;e<t.numberOfGlyphs;e++)t.glyphNameIndex[e]<fn.length?this.names[e]=fn[t.glyphNameIndex[e]]:this.names[e]=t.names[t.glyphNameIndex[e]-fn.length];break;case 2.5:this.names=new Array(t.numberOfGlyphs);for(var r=0;r<t.numberOfGlyphs;r++)this.names[r]=fn[r+t.glyphNameIndex[r]];break;case 3:this.names=[];break;default:this.names=[];break}}Oo.prototype.nameToGlyphIndex=function(t){return this.names.indexOf(t)};Oo.prototype.glyphIndexToName=function(t){return this.names[t]};function oL(t){for(var e,r=t.tables.cmap.glyphIndexMap,n=Object.keys(r),a=0;a<n.length;a+=1){var o=n[a],s=r[o];e=t.glyphs.get(s),e.addUnicode(parseInt(o))}for(var x=0;x<t.glyphs.length;x+=1)e=t.glyphs.get(x),t.cffEncoding?t.isCIDFont?e.name="gid"+x:e.name=t.cffEncoding.charset[x]:t.glyphNames.names&&(e.name=t.glyphNames.glyphIndexToName(x))}function AL(t){t._IndexToUnicodeMap={};for(var e=t.tables.cmap.glyphIndexMap,r=Object.keys(e),n=0;n<r.length;n+=1){var a=r[n],o=e[a];t._IndexToUnicodeMap[o]===void 0?t._IndexToUnicodeMap[o]={unicodes:[parseInt(a)]}:t._IndexToUnicodeMap[o].unicodes.push(parseInt(a))}}function sL(t,e){e.lowMemory?AL(t):oL(t)}function lL(t,e,r,n,a){t.beginPath(),t.moveTo(e,r),t.lineTo(n,a),t.stroke()}var mn={line:lL};function xL(t,e){var r=e||new Mt;return{configurable:!0,get:function(){return typeof r=="function"&&(r=r()),r},set:function(n){r=n}}}function Lr(t){this.bindConstructorValues(t)}Lr.prototype.bindConstructorValues=function(t){this.index=t.index||0,this.name=t.name||null,this.unicode=t.unicode||void 0,this.unicodes=t.unicodes||t.unicode!==void 0?[t.unicode]:[],"xMin"in t&&(this.xMin=t.xMin),"yMin"in t&&(this.yMin=t.yMin),"xMax"in t&&(this.xMax=t.xMax),"yMax"in t&&(this.yMax=t.yMax),"advanceWidth"in t&&(this.advanceWidth=t.advanceWidth),Object.defineProperty(this,"path",xL(this,t.path))};Lr.prototype.addUnicode=function(t){this.unicodes.length===0&&(this.unicode=t),this.unicodes.push(t)};Lr.prototype.getBoundingBox=function(){return this.path.getBoundingBox()};Lr.prototype.getPath=function(t,e,r,n,a){t=t!==void 0?t:0,e=e!==void 0?e:0,r=r!==void 0?r:72;var o,s;n||(n={});var x=n.xScale,E=n.yScale;if(n.hinting&&a&&a.hinting&&(s=this.path&&a.hinting.exec(this,r)),s)o=a.hinting.getCommands(s),t=Math.round(t),e=Math.round(e),x=E=1;else{o=this.path.commands;var T=1/(this.path.unitsPerEm||1e3)*r;x===void 0&&(x=T),E===void 0&&(E=T)}for(var d=new Mt,g=0;g<o.length;g+=1){var y=o[g];y.type==="M"?d.moveTo(t+y.x*x,e+-y.y*E):y.type==="L"?d.lineTo(t+y.x*x,e+-y.y*E):y.type==="Q"?d.quadraticCurveTo(t+y.x1*x,e+-y.y1*E,t+y.x*x,e+-y.y*E):y.type==="C"?d.curveTo(t+y.x1*x,e+-y.y1*E,t+y.x2*x,e+-y.y2*E,t+y.x*x,e+-y.y*E):y.type==="Z"&&d.closePath()}return d};Lr.prototype.getContours=function(){if(this.points===void 0)return[];for(var t=[],e=[],r=0;r<this.points.length;r+=1){var n=this.points[r];e.push(n),n.lastPointOfContour&&(t.push(e),e=[])}return Ge.argument(e.length===0,"There are still points left in the current contour."),t};Lr.prototype.getMetrics=function(){for(var t=this.path.commands,e=[],r=[],n=0;n<t.length;n+=1){var a=t[n];a.type!=="Z"&&(e.push(a.x),r.push(a.y)),(a.type==="Q"||a.type==="C")&&(e.push(a.x1),r.push(a.y1)),a.type==="C"&&(e.push(a.x2),r.push(a.y2))}var o={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,r),xMax:Math.max.apply(null,e),yMax:Math.max.apply(null,r),leftSideBearing:this.leftSideBearing};return isFinite(o.xMin)||(o.xMin=0),isFinite(o.xMax)||(o.xMax=this.advanceWidth),isFinite(o.yMin)||(o.yMin=0),isFinite(o.yMax)||(o.yMax=0),o.rightSideBearing=this.advanceWidth-o.leftSideBearing-(o.xMax-o.xMin),o};Lr.prototype.draw=function(t,e,r,n,a){this.getPath(e,r,n,a).draw(t)};Lr.prototype.drawPoints=function(t,e,r,n){function a(g,y,C,k){t.beginPath();for(var Y=0;Y<g.length;Y+=1)t.moveTo(y+g[Y].x*k,C+g[Y].y*k),t.arc(y+g[Y].x*k,C+g[Y].y*k,2,0,Math.PI*2,!1);t.closePath(),t.fill()}e=e!==void 0?e:0,r=r!==void 0?r:0,n=n!==void 0?n:24;for(var o=1/this.path.unitsPerEm*n,s=[],x=[],E=this.path,T=0;T<E.commands.length;T+=1){var d=E.commands[T];d.x!==void 0&&s.push({x:d.x,y:-d.y}),d.x1!==void 0&&x.push({x:d.x1,y:-d.y1}),d.x2!==void 0&&x.push({x:d.x2,y:-d.y2})}t.fillStyle="blue",a(s,e,r,o),t.fillStyle="red",a(x,e,r,o)};Lr.prototype.drawMetrics=function(t,e,r,n){var a;e=e!==void 0?e:0,r=r!==void 0?r:0,n=n!==void 0?n:24,a=1/this.path.unitsPerEm*n,t.lineWidth=1,t.strokeStyle="black",mn.line(t,e,-1e4,e,1e4),mn.line(t,-1e4,r,1e4,r);var o=this.xMin||0,s=this.yMin||0,x=this.xMax||0,E=this.yMax||0,T=this.advanceWidth||0;t.strokeStyle="blue",mn.line(t,e+o*a,-1e4,e+o*a,1e4),mn.line(t,e+x*a,-1e4,e+x*a,1e4),mn.line(t,-1e4,r+-s*a,1e4,r+-s*a),mn.line(t,-1e4,r+-E*a,1e4,r+-E*a),t.strokeStyle="green",mn.line(t,e+T*a,-1e4,e+T*a,1e4)};function hi(t,e,r){Object.defineProperty(t,e,{get:function(){return t.path,t[r]},set:function(n){t[r]=n},enumerable:!0,configurable:!0})}function Bo(t,e){if(this.font=t,this.glyphs={},Array.isArray(e))for(var r=0;r<e.length;r++){var n=e[r];n.path.unitsPerEm=t.unitsPerEm,this.glyphs[r]=n}this.length=e&&e.length||0}Bo.prototype.get=function(t){if(this.glyphs[t]===void 0){this.font._push(t),typeof this.glyphs[t]=="function"&&(this.glyphs[t]=this.glyphs[t]());var e=this.glyphs[t],r=this.font._IndexToUnicodeMap[t];if(r)for(var n=0;n<r.unicodes.length;n++)e.addUnicode(r.unicodes[n]);this.font.cffEncoding?this.font.isCIDFont?e.name="gid"+t:e.name=this.font.cffEncoding.charset[t]:this.font.glyphNames.names&&(e.name=this.font.glyphNames.glyphIndexToName(t)),this.glyphs[t].advanceWidth=this.font._hmtxTableData[t].advanceWidth,this.glyphs[t].leftSideBearing=this.font._hmtxTableData[t].leftSideBearing}else typeof this.glyphs[t]=="function"&&(this.glyphs[t]=this.glyphs[t]());return this.glyphs[t]};Bo.prototype.push=function(t,e){this.glyphs[t]=e,this.length++};function EL(t,e){return new Lr({index:e,font:t})}function LL(t,e,r,n,a,o){return function(){var s=new Lr({index:e,font:t});return s.path=function(){r(s,n,a);var x=o(t.glyphs,s);return x.unitsPerEm=t.unitsPerEm,x},hi(s,"xMin","_xMin"),hi(s,"xMax","_xMax"),hi(s,"yMin","_yMin"),hi(s,"yMax","_yMax"),s}}function hL(t,e,r,n){return function(){var a=new Lr({index:e,font:t});return a.path=function(){var o=r(t,a,n);return o.unitsPerEm=t.unitsPerEm,o},a}}var wr={GlyphSet:Bo,glyphLoader:EL,ttfGlyphLoader:LL,cffGlyphLoader:hL};function us(t,e){if(t===e)return!0;if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;for(var r=0;r<t.length;r+=1)if(!us(t[r],e[r]))return!1;return!0}else return!1}function Q0(t){var e;return t.length<1240?e=107:t.length<33900?e=1131:e=32768,e}function xn(t,e,r){var n=[],a=[],o=ye.getCard16(t,e),s,x;if(o!==0){var E=ye.getByte(t,e+2);s=e+(o+1)*E+2;for(var T=e+3,d=0;d<o+1;d+=1)n.push(ye.getOffset(t,T,E)),T+=E;x=s+n[o]}else x=e+2;for(var g=0;g<n.length-1;g+=1){var y=ye.getBytes(t,s+n[g],s+n[g+1]);r&&(y=r(y)),a.push(y)}return{objects:a,startOffset:e,endOffset:x}}function cL(t,e){var r=[],n=ye.getCard16(t,e),a,o;if(n!==0){var s=ye.getByte(t,e+2);a=e+(n+1)*s+2;for(var x=e+3,E=0;E<n+1;E+=1)r.push(ye.getOffset(t,x,s)),x+=s;o=a+r[n]}else o=e+2;return{offsets:r,startOffset:e,endOffset:o}}function TL(t,e,r,n,a){var o=ye.getCard16(r,n),s=0;if(o!==0){var x=ye.getByte(r,n+2);s=n+(o+1)*x+2}var E=ye.getBytes(r,s+e[t],s+e[t+1]);return a&&(E=a(E)),E}function IL(t){for(var e="",r=15,n=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"];;){var a=t.parseByte(),o=a>>4,s=a&15;if(o===r||(e+=n[o],s===r))break;e+=n[s]}return parseFloat(e)}function dL(t,e){var r,n,a,o;if(e===28)return r=t.parseByte(),n=t.parseByte(),r<<8|n;if(e===29)return r=t.parseByte(),n=t.parseByte(),a=t.parseByte(),o=t.parseByte(),r<<24|n<<16|a<<8|o;if(e===30)return IL(t);if(e>=32&&e<=246)return e-139;if(e>=247&&e<=250)return r=t.parseByte(),(e-247)*256+r+108;if(e>=251&&e<=254)return r=t.parseByte(),-(e-251)*256-r-108;throw new Error("Invalid b0 "+e)}function uL(t){for(var e={},r=0;r<t.length;r+=1){var n=t[r][0],a=t[r][1],o=void 0;if(a.length===1?o=a[0]:o=a,e.hasOwnProperty(n)&&!isNaN(e[n]))throw new Error("Object "+e+" already has key "+n);e[n]=o}return e}function ps(t,e,r){e=e!==void 0?e:0;var n=new ye.Parser(t,e),a=[],o=[];for(r=r!==void 0?r:t.length;n.relativeOffset<r;){var s=n.parseByte();s<=21?(s===12&&(s=1200+n.parseByte()),a.push([s,o]),o=[]):o.push(dL(n,s))}return uL(a)}function Ra(t,e){return e<=390?e=Ci[e]:e=t[e-391],e}function Ss(t,e,r){for(var n={},a,o=0;o<e.length;o+=1){var s=e[o];if(Array.isArray(s.type)){var x=[];x.length=s.type.length;for(var E=0;E<s.type.length;E++)a=t[s.op]!==void 0?t[s.op][E]:void 0,a===void 0&&(a=s.value!==void 0&&s.value[E]!==void 0?s.value[E]:null),s.type[E]==="SID"&&(a=Ra(r,a)),x[E]=a;n[s.name]=x}else a=t[s.op],a===void 0&&(a=s.value!==void 0?s.value:null),s.type==="SID"&&(a=Ra(r,a)),n[s.name]=a}return n}function pL(t,e){var r={};return r.formatMajor=ye.getCard8(t,e),r.formatMinor=ye.getCard8(t,e+1),r.size=ye.getCard8(t,e+2),r.offsetSize=ye.getCard8(t,e+3),r.startOffset=e,r.endOffset=e+4,r}var Cs=[{name:"version",op:0,type:"SID"},{name:"notice",op:1,type:"SID"},{name:"copyright",op:1200,type:"SID"},{name:"fullName",op:2,type:"SID"},{name:"familyName",op:3,type:"SID"},{name:"weight",op:4,type:"SID"},{name:"isFixedPitch",op:1201,type:"number",value:0},{name:"italicAngle",op:1202,type:"number",value:0},{name:"underlinePosition",op:1203,type:"number",value:-100},{name:"underlineThickness",op:1204,type:"number",value:50},{name:"paintType",op:1205,type:"number",value:0},{name:"charstringType",op:1206,type:"number",value:2},{name:"fontMatrix",op:1207,type:["real","real","real","real","real","real"],value:[.001,0,0,.001,0,0]},{name:"uniqueId",op:13,type:"number"},{name:"fontBBox",op:5,type:["number","number","number","number"],value:[0,0,0,0]},{name:"strokeWidth",op:1208,type:"number",value:0},{name:"xuid",op:14,type:[],value:null},{name:"charset",op:15,type:"offset",value:0},{name:"encoding",op:16,type:"offset",value:0},{name:"charStrings",op:17,type:"offset",value:0},{name:"private",op:18,type:["number","offset"],value:[0,0]},{name:"ros",op:1230,type:["SID","SID","number"]},{name:"cidFontVersion",op:1231,type:"number",value:0},{name:"cidFontRevision",op:1232,type:"number",value:0},{name:"cidFontType",op:1233,type:"number",value:0},{name:"cidCount",op:1234,type:"number",value:8720},{name:"uidBase",op:1235,type:"number"},{name:"fdArray",op:1236,type:"offset"},{name:"fdSelect",op:1237,type:"offset"},{name:"fontName",op:1238,type:"SID"}],gs=[{name:"subrs",op:19,type:"offset",value:0},{name:"defaultWidthX",op:20,type:"number",value:0},{name:"nominalWidthX",op:21,type:"number",value:0}];function SL(t,e){var r=ps(t,0,t.byteLength);return Ss(r,Cs,e)}function Rs(t,e,r,n){var a=ps(t,e,r);return Ss(a,gs,n)}function yA(t,e,r,n){for(var a=[],o=0;o<r.length;o+=1){var s=new DataView(new Uint8Array(r[o]).buffer),x=SL(s,n);x._subrs=[],x._subrsBias=0,x._defaultWidthX=0,x._nominalWidthX=0;var E=x.private[0],T=x.private[1];if(E!==0&&T!==0){var d=Rs(t,T+e,E,n);if(x._defaultWidthX=d.defaultWidthX,x._nominalWidthX=d.nominalWidthX,d.subrs!==0){var g=T+d.subrs,y=xn(t,g+e);x._subrs=y.objects,x._subrsBias=Q0(x._subrs)}x._privateDict=d}a.push(x)}return a}function CL(t,e,r,n){var a,o,s=new ye.Parser(t,e);r-=1;var x=[".notdef"],E=s.parseCard8();if(E===0)for(var T=0;T<r;T+=1)a=s.parseSID(),x.push(Ra(n,a));else if(E===1)for(;x.length<=r;){a=s.parseSID(),o=s.parseCard8();for(var d=0;d<=o;d+=1)x.push(Ra(n,a)),a+=1}else if(E===2)for(;x.length<=r;){a=s.parseSID(),o=s.parseCard16();for(var g=0;g<=o;g+=1)x.push(Ra(n,a)),a+=1}else throw new Error("Unknown charset format "+E);return x}function gL(t,e,r){var n,a={},o=new ye.Parser(t,e),s=o.parseCard8();if(s===0)for(var x=o.parseCard8(),E=0;E<x;E+=1)n=o.parseCard8(),a[n]=E;else if(s===1){var T=o.parseCard8();n=1;for(var d=0;d<T;d+=1)for(var g=o.parseCard8(),y=o.parseCard8(),C=g;C<=g+y;C+=1)a[C]=n,n+=1}else throw new Error("Unknown encoding format "+s);return new Pi(a,r)}function mA(t,e,r){var n,a,o,s,x=new Mt,E=[],T=0,d=!1,g=!1,y=0,C=0,k,Y,_,V;if(t.isCIDFont){var ee=t.tables.cff.topDict._fdSelect[e.index],q=t.tables.cff.topDict._fdArray[ee];k=q._subrs,Y=q._subrsBias,_=q._defaultWidthX,V=q._nominalWidthX}else k=t.tables.cff.topDict._subrs,Y=t.tables.cff.topDict._subrsBias,_=t.tables.cff.topDict._defaultWidthX,V=t.tables.cff.topDict._nominalWidthX;var he=_;function ce(Ie,fe){g&&x.closePath(),x.moveTo(Ie,fe),g=!0}function oe(){var Ie;Ie=E.length%2!==0,Ie&&!d&&(he=E.shift()+V),T+=E.length>>1,E.length=0,d=!0}function Te(Ie){for(var fe,We,ke,At,st,de,It,Ae,$e,lt,Oe,ht,ct=0;ct<Ie.length;){var Gt=Ie[ct];switch(ct+=1,Gt){case 1:oe();break;case 3:oe();break;case 4:E.length>1&&!d&&(he=E.shift()+V,d=!0),C+=E.pop(),ce(y,C);break;case 5:for(;E.length>0;)y+=E.shift(),C+=E.shift(),x.lineTo(y,C);break;case 6:for(;E.length>0&&(y+=E.shift(),x.lineTo(y,C),E.length!==0);)C+=E.shift(),x.lineTo(y,C);break;case 7:for(;E.length>0&&(C+=E.shift(),x.lineTo(y,C),E.length!==0);)y+=E.shift(),x.lineTo(y,C);break;case 8:for(;E.length>0;)n=y+E.shift(),a=C+E.shift(),o=n+E.shift(),s=a+E.shift(),y=o+E.shift(),C=s+E.shift(),x.curveTo(n,a,o,s,y,C);break;case 10:st=E.pop()+Y,de=k[st],de&&Te(de);break;case 11:return;case 12:switch(Gt=Ie[ct],ct+=1,Gt){case 35:n=y+E.shift(),a=C+E.shift(),o=n+E.shift(),s=a+E.shift(),It=o+E.shift(),Ae=s+E.shift(),$e=It+E.shift(),lt=Ae+E.shift(),Oe=$e+E.shift(),ht=lt+E.shift(),y=Oe+E.shift(),C=ht+E.shift(),E.shift(),x.curveTo(n,a,o,s,It,Ae),x.curveTo($e,lt,Oe,ht,y,C);break;case 34:n=y+E.shift(),a=C,o=n+E.shift(),s=a+E.shift(),It=o+E.shift(),Ae=s,$e=It+E.shift(),lt=s,Oe=$e+E.shift(),ht=C,y=Oe+E.shift(),x.curveTo(n,a,o,s,It,Ae),x.curveTo($e,lt,Oe,ht,y,C);break;case 36:n=y+E.shift(),a=C+E.shift(),o=n+E.shift(),s=a+E.shift(),It=o+E.shift(),Ae=s,$e=It+E.shift(),lt=s,Oe=$e+E.shift(),ht=lt+E.shift(),y=Oe+E.shift(),x.curveTo(n,a,o,s,It,Ae),x.curveTo($e,lt,Oe,ht,y,C);break;case 37:n=y+E.shift(),a=C+E.shift(),o=n+E.shift(),s=a+E.shift(),It=o+E.shift(),Ae=s+E.shift(),$e=It+E.shift(),lt=Ae+E.shift(),Oe=$e+E.shift(),ht=lt+E.shift(),Math.abs(Oe-y)>Math.abs(ht-C)?y=Oe+E.shift():C=ht+E.shift(),x.curveTo(n,a,o,s,It,Ae),x.curveTo($e,lt,Oe,ht,y,C);break;default:console.log("Glyph "+e.index+": unknown operator 1200"+Gt),E.length=0}break;case 14:E.length>0&&!d&&(he=E.shift()+V,d=!0),g&&(x.closePath(),g=!1);break;case 18:oe();break;case 19:case 20:oe(),ct+=T+7>>3;break;case 21:E.length>2&&!d&&(he=E.shift()+V,d=!0),C+=E.pop(),y+=E.pop(),ce(y,C);break;case 22:E.length>1&&!d&&(he=E.shift()+V,d=!0),y+=E.pop(),ce(y,C);break;case 23:oe();break;case 24:for(;E.length>2;)n=y+E.shift(),a=C+E.shift(),o=n+E.shift(),s=a+E.shift(),y=o+E.shift(),C=s+E.shift(),x.curveTo(n,a,o,s,y,C);y+=E.shift(),C+=E.shift(),x.lineTo(y,C);break;case 25:for(;E.length>6;)y+=E.shift(),C+=E.shift(),x.lineTo(y,C);n=y+E.shift(),a=C+E.shift(),o=n+E.shift(),s=a+E.shift(),y=o+E.shift(),C=s+E.shift(),x.curveTo(n,a,o,s,y,C);break;case 26:for(E.length%2&&(y+=E.shift());E.length>0;)n=y,a=C+E.shift(),o=n+E.shift(),s=a+E.shift(),y=o,C=s+E.shift(),x.curveTo(n,a,o,s,y,C);break;case 27:for(E.length%2&&(C+=E.shift());E.length>0;)n=y+E.shift(),a=C,o=n+E.shift(),s=a+E.shift(),y=o+E.shift(),C=s,x.curveTo(n,a,o,s,y,C);break;case 28:fe=Ie[ct],We=Ie[ct+1],E.push((fe<<24|We<<16)>>16),ct+=2;break;case 29:st=E.pop()+t.gsubrsBias,de=t.gsubrs[st],de&&Te(de);break;case 30:for(;E.length>0&&(n=y,a=C+E.shift(),o=n+E.shift(),s=a+E.shift(),y=o+E.shift(),C=s+(E.length===1?E.shift():0),x.curveTo(n,a,o,s,y,C),E.length!==0);)n=y+E.shift(),a=C,o=n+E.shift(),s=a+E.shift(),C=s+E.shift(),y=o+(E.length===1?E.shift():0),x.curveTo(n,a,o,s,y,C);break;case 31:for(;E.length>0&&(n=y+E.shift(),a=C,o=n+E.shift(),s=a+E.shift(),C=s+E.shift(),y=o+(E.length===1?E.shift():0),x.curveTo(n,a,o,s,y,C),E.length!==0);)n=y,a=C+E.shift(),o=n+E.shift(),s=a+E.shift(),y=o+E.shift(),C=s+(E.length===1?E.shift():0),x.curveTo(n,a,o,s,y,C);break;default:Gt<32?console.log("Glyph "+e.index+": unknown operator "+Gt):Gt<247?E.push(Gt-139):Gt<251?(fe=Ie[ct],ct+=1,E.push((Gt-247)*256+fe+108)):Gt<255?(fe=Ie[ct],ct+=1,E.push(-(Gt-251)*256-fe-108)):(fe=Ie[ct],We=Ie[ct+1],ke=Ie[ct+2],At=Ie[ct+3],ct+=4,E.push((fe<<24|We<<16|ke<<8|At)/65536))}}}return Te(r),e.advanceWidth=he,x}function RL(t,e,r,n){var a=[],o,s=new ye.Parser(t,e),x=s.parseCard8();if(x===0)for(var E=0;E<r;E++){if(o=s.parseCard8(),o>=n)throw new Error("CFF table CID Font FDSelect has bad FD index value "+o+" (FD count "+n+")");a.push(o)}else if(x===3){var T=s.parseCard16(),d=s.parseCard16();if(d!==0)throw new Error("CFF Table CID Font FDSelect format 3 range has bad initial GID "+d);for(var g,y=0;y<T;y++){if(o=s.parseCard8(),g=s.parseCard16(),o>=n)throw new Error("CFF table CID Font FDSelect has bad FD index value "+o+" (FD count "+n+")");if(g>r)throw new Error("CFF Table CID Font FDSelect format 3 range has bad GID "+g);for(;d<g;d++)a.push(o);d=g}if(g!==r)throw new Error("CFF Table CID Font FDSelect format 3 range has bad final GID "+g)}else throw new Error("CFF Table CID Font FDSelect table has unsupported format "+x);return a}function yL(t,e,r,n){r.tables.cff={};var a=pL(t,e),o=xn(t,a.endOffset,ye.bytesToString),s=xn(t,o.endOffset),x=xn(t,s.endOffset,ye.bytesToString),E=xn(t,x.endOffset);r.gsubrs=E.objects,r.gsubrsBias=Q0(r.gsubrs);var T=yA(t,e,s.objects,x.objects);if(T.length!==1)throw new Error("CFF table has too many fonts in 'FontSet' - count of fonts NameIndex.length = "+T.length);var d=T[0];if(r.tables.cff.topDict=d,d._privateDict&&(r.defaultWidthX=d._privateDict.defaultWidthX,r.nominalWidthX=d._privateDict.nominalWidthX),d.ros[0]!==void 0&&d.ros[1]!==void 0&&(r.isCIDFont=!0),r.isCIDFont){var g=d.fdArray,y=d.fdSelect;if(g===0||y===0)throw new Error("Font is marked as a CID font, but FDArray and/or FDSelect information is missing");g+=e;var C=xn(t,g),k=yA(t,e,C.objects,x.objects);d._fdArray=k,y+=e,d._fdSelect=RL(t,y,r.numGlyphs,k.length)}var Y=e+d.private[1],_=Rs(t,Y,d.private[0],x.objects);if(r.defaultWidthX=_.defaultWidthX,r.nominalWidthX=_.nominalWidthX,_.subrs!==0){var V=Y+_.subrs,ee=xn(t,V);r.subrs=ee.objects,r.subrsBias=Q0(r.subrs)}else r.subrs=[],r.subrsBias=0;var q;n.lowMemory?(q=cL(t,e+d.charStrings),r.nGlyphs=q.offsets.length):(q=xn(t,e+d.charStrings),r.nGlyphs=q.objects.length);var he=CL(t,e+d.charset,r.nGlyphs,x.objects);if(d.encoding===0?r.cffEncoding=new Pi(aL,he):d.encoding===1?r.cffEncoding=new Pi(iL,he):r.cffEncoding=gL(t,e+d.encoding,he),r.encoding=r.encoding||r.cffEncoding,r.glyphs=new wr.GlyphSet(r),n.lowMemory)r._push=function(Te){var Ie=TL(Te,q.offsets,t,e+d.charStrings);r.glyphs.push(Te,wr.cffGlyphLoader(r,Te,mA,Ie))};else for(var ce=0;ce<r.nGlyphs;ce+=1){var oe=q.objects[ce];r.glyphs.push(ce,wr.cffGlyphLoader(r,ce,mA,oe))}}function ys(t,e){var r,n=Ci.indexOf(t);return n>=0&&(r=n),n=e.indexOf(t),n>=0?r=n+Ci.length:(r=Ci.length+e.length,e.push(t)),r}function mL(){return new ge.Record("Header",[{name:"major",type:"Card8",value:1},{name:"minor",type:"Card8",value:0},{name:"hdrSize",type:"Card8",value:4},{name:"major",type:"Card8",value:1}])}function NL(t){var e=new ge.Record("Name INDEX",[{name:"names",type:"INDEX",value:[]}]);e.names=[];for(var r=0;r<t.length;r+=1)e.names.push({name:"name_"+r,type:"NAME",value:t[r]});return e}function ms(t,e,r){for(var n={},a=0;a<t.length;a+=1){var o=t[a],s=e[o.name];s!==void 0&&!us(s,o.value)&&(o.type==="SID"&&(s=ys(s,r)),n[o.op]={name:o.name,type:o.type,value:s})}return n}function NA(t,e){var r=new ge.Record("Top DICT",[{name:"dict",type:"DICT",value:{}}]);return r.dict=ms(Cs,t,e),r}function DA(t){var e=new ge.Record("Top DICT INDEX",[{name:"topDicts",type:"INDEX",value:[]}]);return e.topDicts=[{name:"topDict_0",type:"TABLE",value:t}],e}function DL(t){var e=new ge.Record("String INDEX",[{name:"strings",type:"INDEX",value:[]}]);e.strings=[];for(var r=0;r<t.length;r+=1)e.strings.push({name:"string_"+r,type:"STRING",value:t[r]});return e}function fL(){return new ge.Record("Global Subr INDEX",[{name:"subrs",type:"INDEX",value:[]}])}function OL(t,e){for(var r=new ge.Record("Charsets",[{name:"format",type:"Card8",value:0}]),n=0;n<t.length;n+=1){var a=t[n],o=ys(a,e);r.fields.push({name:"glyph_"+n,type:"SID",value:o})}return r}function BL(t){var e=[],r=t.path;e.push({name:"width",type:"NUMBER",value:t.advanceWidth});for(var n=0,a=0,o=0;o<r.commands.length;o+=1){var s=void 0,x=void 0,E=r.commands[o];if(E.type==="Q"){var T=.3333333333333333,d=2/3;E={type:"C",x:E.x,y:E.y,x1:Math.round(T*n+d*E.x1),y1:Math.round(T*a+d*E.y1),x2:Math.round(T*E.x+d*E.x1),y2:Math.round(T*E.y+d*E.y1)}}if(E.type==="M")s=Math.round(E.x-n),x=Math.round(E.y-a),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:x}),e.push({name:"rmoveto",type:"OP",value:21}),n=Math.round(E.x),a=Math.round(E.y);else if(E.type==="L")s=Math.round(E.x-n),x=Math.round(E.y-a),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:x}),e.push({name:"rlineto",type:"OP",value:5}),n=Math.round(E.x),a=Math.round(E.y);else if(E.type==="C"){var g=Math.round(E.x1-n),y=Math.round(E.y1-a),C=Math.round(E.x2-E.x1),k=Math.round(E.y2-E.y1);s=Math.round(E.x-E.x2),x=Math.round(E.y-E.y2),e.push({name:"dx1",type:"NUMBER",value:g}),e.push({name:"dy1",type:"NUMBER",value:y}),e.push({name:"dx2",type:"NUMBER",value:C}),e.push({name:"dy2",type:"NUMBER",value:k}),e.push({name:"dx",type:"NUMBER",value:s}),e.push({name:"dy",type:"NUMBER",value:x}),e.push({name:"rrcurveto",type:"OP",value:8}),n=Math.round(E.x),a=Math.round(E.y)}}return e.push({name:"endchar",type:"OP",value:14}),e}function HL(t){for(var e=new ge.Record("CharStrings INDEX",[{name:"charStrings",type:"INDEX",value:[]}]),r=0;r<t.length;r+=1){var n=t.get(r),a=BL(n);e.charStrings.push({name:n.name,type:"CHARSTRING",value:a})}return e}function FL(t,e){var r=new ge.Record("Private DICT",[{name:"dict",type:"DICT",value:{}}]);return r.dict=ms(gs,t,e),r}function ML(t,e){for(var r=new ge.Table("CFF ",[{name:"header",type:"RECORD"},{name:"nameIndex",type:"RECORD"},{name:"topDictIndex",type:"RECORD"},{name:"stringIndex",type:"RECORD"},{name:"globalSubrIndex",type:"RECORD"},{name:"charsets",type:"RECORD"},{name:"charStringsIndex",type:"RECORD"},{name:"privateDict",type:"RECORD"}]),n=1/e.unitsPerEm,a={version:e.version,fullName:e.fullName,familyName:e.familyName,weight:e.weightName,fontBBox:e.fontBBox||[0,0,0,0],fontMatrix:[n,0,0,n,0,0],charset:999,encoding:0,charStrings:999,private:[0,999]},o={},s=[],x,E=1;E<t.length;E+=1)x=t.get(E),s.push(x.name);var T=[];r.header=mL(),r.nameIndex=NL([e.postScriptName]);var d=NA(a,T);r.topDictIndex=DA(d),r.globalSubrIndex=fL(),r.charsets=OL(s,T),r.charStringsIndex=HL(t),r.privateDict=FL(o,T),r.stringIndex=DL(T);var g=r.header.sizeOf()+r.nameIndex.sizeOf()+r.topDictIndex.sizeOf()+r.stringIndex.sizeOf()+r.globalSubrIndex.sizeOf();return a.charset=g,a.encoding=0,a.charStrings=a.charset+r.charsets.sizeOf(),a.private[1]=a.charStrings+r.charStringsIndex.sizeOf(),d=NA(a,T),r.topDictIndex=DA(d),r}var Ns={parse:yL,make:ML};function GL(t,e){var r={},n=new ye.Parser(t,e);return r.version=n.parseVersion(),r.fontRevision=Math.round(n.parseFixed()*1e3)/1e3,r.checkSumAdjustment=n.parseULong(),r.magicNumber=n.parseULong(),Ge.argument(r.magicNumber===1594834165,"Font header has wrong magic number."),r.flags=n.parseUShort(),r.unitsPerEm=n.parseUShort(),r.created=n.parseLongDateTime(),r.modified=n.parseLongDateTime(),r.xMin=n.parseShort(),r.yMin=n.parseShort(),r.xMax=n.parseShort(),r.yMax=n.parseShort(),r.macStyle=n.parseUShort(),r.lowestRecPPEM=n.parseUShort(),r.fontDirectionHint=n.parseShort(),r.indexToLocFormat=n.parseShort(),r.glyphDataFormat=n.parseShort(),r}function PL(t){var e=Math.round(new Date().getTime()/1e3)+2082844800,r=e;return t.createdTimestamp&&(r=t.createdTimestamp+2082844800),new ge.Table("head",[{name:"version",type:"FIXED",value:65536},{name:"fontRevision",type:"FIXED",value:65536},{name:"checkSumAdjustment",type:"ULONG",value:0},{name:"magicNumber",type:"ULONG",value:1594834165},{name:"flags",type:"USHORT",value:0},{name:"unitsPerEm",type:"USHORT",value:1e3},{name:"created",type:"LONGDATETIME",value:r},{name:"modified",type:"LONGDATETIME",value:e},{name:"xMin",type:"SHORT",value:0},{name:"yMin",type:"SHORT",value:0},{name:"xMax",type:"SHORT",value:0},{name:"yMax",type:"SHORT",value:0},{name:"macStyle",type:"USHORT",value:0},{name:"lowestRecPPEM",type:"USHORT",value:0},{name:"fontDirectionHint",type:"SHORT",value:2},{name:"indexToLocFormat",type:"SHORT",value:0},{name:"glyphDataFormat",type:"SHORT",value:0}],t)}var Ds={parse:GL,make:PL};function bL(t,e){var r={},n=new ye.Parser(t,e);return r.version=n.parseVersion(),r.ascender=n.parseShort(),r.descender=n.parseShort(),r.lineGap=n.parseShort(),r.advanceWidthMax=n.parseUShort(),r.minLeftSideBearing=n.parseShort(),r.minRightSideBearing=n.parseShort(),r.xMaxExtent=n.parseShort(),r.caretSlopeRise=n.parseShort(),r.caretSlopeRun=n.parseShort(),r.caretOffset=n.parseShort(),n.relativeOffset+=8,r.metricDataFormat=n.parseShort(),r.numberOfHMetrics=n.parseUShort(),r}function vL(t){return new ge.Table("hhea",[{name:"version",type:"FIXED",value:65536},{name:"ascender",type:"FWORD",value:0},{name:"descender",type:"FWORD",value:0},{name:"lineGap",type:"FWORD",value:0},{name:"advanceWidthMax",type:"UFWORD",value:0},{name:"minLeftSideBearing",type:"FWORD",value:0},{name:"minRightSideBearing",type:"FWORD",value:0},{name:"xMaxExtent",type:"FWORD",value:0},{name:"caretSlopeRise",type:"SHORT",value:1},{name:"caretSlopeRun",type:"SHORT",value:0},{name:"caretOffset",type:"SHORT",value:0},{name:"reserved1",type:"SHORT",value:0},{name:"reserved2",type:"SHORT",value:0},{name:"reserved3",type:"SHORT",value:0},{name:"reserved4",type:"SHORT",value:0},{name:"metricDataFormat",type:"SHORT",value:0},{name:"numberOfHMetrics",type:"USHORT",value:0}],t)}var fs={parse:bL,make:vL};function UL(t,e,r,n,a){for(var o,s,x=new ye.Parser(t,e),E=0;E<n;E+=1){E<r&&(o=x.parseUShort(),s=x.parseShort());var T=a.get(E);T.advanceWidth=o,T.leftSideBearing=s}}function wL(t,e,r,n,a){t._hmtxTableData={};for(var o,s,x=new ye.Parser(e,r),E=0;E<a;E+=1)E<n&&(o=x.parseUShort(),s=x.parseShort()),t._hmtxTableData[E]={advanceWidth:o,leftSideBearing:s}}function YL(t,e,r,n,a,o,s){s.lowMemory?wL(t,e,r,n,a):UL(e,r,n,a,o)}function WL(t){for(var e=new ge.Table("hmtx",[]),r=0;r<t.length;r+=1){var n=t.get(r),a=n.advanceWidth||0,o=n.leftSideBearing||0;e.fields.push({name:"advanceWidth_"+r,type:"USHORT",value:a}),e.fields.push({name:"leftSideBearing_"+r,type:"SHORT",value:o})}return e}var Os={parse:YL,make:WL};function kL(t){for(var e=new ge.Table("ltag",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"numTags",type:"ULONG",value:t.length}]),r="",n=12+t.length*4,a=0;a<t.length;++a){var o=r.indexOf(t[a]);o<0&&(o=r.length,r+=t[a]),e.fields.push({name:"offset "+a,type:"USHORT",value:n+o}),e.fields.push({name:"length "+a,type:"USHORT",value:t[a].length})}return e.fields.push({name:"stringPool",type:"CHARARRAY",value:r}),e}function KL(t,e){var r=new ye.Parser(t,e),n=r.parseULong();Ge.argument(n===1,"Unsupported ltag table version."),r.skip("uLong",1);for(var a=r.parseULong(),o=[],s=0;s<a;s++){for(var x="",E=e+r.parseUShort(),T=r.parseUShort(),d=E;d<E+T;++d)x+=String.fromCharCode(t.getInt8(d));o.push(x)}return o}var Bs={make:kL,parse:KL};function VL(t,e){var r={},n=new ye.Parser(t,e);return r.version=n.parseVersion(),r.numGlyphs=n.parseUShort(),r.version===1&&(r.maxPoints=n.parseUShort(),r.maxContours=n.parseUShort(),r.maxCompositePoints=n.parseUShort(),r.maxCompositeContours=n.parseUShort(),r.maxZones=n.parseUShort(),r.maxTwilightPoints=n.parseUShort(),r.maxStorage=n.parseUShort(),r.maxFunctionDefs=n.parseUShort(),r.maxInstructionDefs=n.parseUShort(),r.maxStackElements=n.parseUShort(),r.maxSizeOfInstructions=n.parseUShort(),r.maxComponentElements=n.parseUShort(),r.maxComponentDepth=n.parseUShort()),r}function _L(t){return new ge.Table("maxp",[{name:"version",type:"FIXED",value:20480},{name:"numGlyphs",type:"USHORT",value:t}])}var Hs={parse:VL,make:_L},Fs=["copyright","fontFamily","fontSubfamily","uniqueID","fullName","version","postScriptName","trademark","manufacturer","designer","description","manufacturerURL","designerURL","license","licenseURL","reserved","preferredFamily","preferredSubfamily","compatibleFullName","sampleText","postScriptFindFontName","wwsFamily","wwsSubfamily"],Ms={0:"en",1:"fr",2:"de",3:"it",4:"nl",5:"sv",6:"es",7:"da",8:"pt",9:"no",10:"he",11:"ja",12:"ar",13:"fi",14:"el",15:"is",16:"mt",17:"tr",18:"hr",19:"zh-Hant",20:"ur",21:"hi",22:"th",23:"ko",24:"lt",25:"pl",26:"hu",27:"es",28:"lv",29:"se",30:"fo",31:"fa",32:"ru",33:"zh",34:"nl-BE",35:"ga",36:"sq",37:"ro",38:"cz",39:"sk",40:"si",41:"yi",42:"sr",43:"mk",44:"bg",45:"uk",46:"be",47:"uz",48:"kk",49:"az-Cyrl",50:"az-Arab",51:"hy",52:"ka",53:"mo",54:"ky",55:"tg",56:"tk",57:"mn-CN",58:"mn",59:"ps",60:"ks",61:"ku",62:"sd",63:"bo",64:"ne",65:"sa",66:"mr",67:"bn",68:"as",69:"gu",70:"pa",71:"or",72:"ml",73:"kn",74:"ta",75:"te",76:"si",77:"my",78:"km",79:"lo",80:"vi",81:"id",82:"tl",83:"ms",84:"ms-Arab",85:"am",86:"ti",87:"om",88:"so",89:"sw",90:"rw",91:"rn",92:"ny",93:"mg",94:"eo",128:"cy",129:"eu",130:"ca",131:"la",132:"qu",133:"gn",134:"ay",135:"tt",136:"ug",137:"dz",138:"jv",139:"su",140:"gl",141:"af",142:"br",143:"iu",144:"gd",145:"gv",146:"ga",147:"to",148:"el-polyton",149:"kl",150:"az",151:"nn"},JL={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0,10:5,11:1,12:4,13:0,14:6,15:0,16:0,17:0,18:0,19:2,20:4,21:9,22:21,23:3,24:29,25:29,26:29,27:29,28:29,29:0,30:0,31:4,32:7,33:25,34:0,35:0,36:0,37:0,38:29,39:29,40:0,41:5,42:7,43:7,44:7,45:7,46:7,47:7,48:7,49:7,50:4,51:24,52:23,53:7,54:7,55:7,56:7,57:27,58:7,59:4,60:4,61:4,62:4,63:26,64:9,65:9,66:9,67:13,68:13,69:11,70:10,71:12,72:17,73:16,74:14,75:15,76:18,77:19,78:20,79:22,80:30,81:0,82:0,83:0,84:4,85:28,86:28,87:28,88:0,89:0,90:0,91:0,92:0,93:0,94:0,128:0,129:0,130:0,131:0,132:0,133:0,134:0,135:7,136:4,137:26,138:0,139:0,140:0,141:0,142:0,143:28,144:0,145:0,146:0,147:0,148:6,149:0,150:0,151:0},Gs={1078:"af",1052:"sq",1156:"gsw",1118:"am",5121:"ar-DZ",15361:"ar-BH",3073:"ar",2049:"ar-IQ",11265:"ar-JO",13313:"ar-KW",12289:"ar-LB",4097:"ar-LY",6145:"ary",8193:"ar-OM",16385:"ar-QA",1025:"ar-SA",10241:"ar-SY",7169:"aeb",14337:"ar-AE",9217:"ar-YE",1067:"hy",1101:"as",2092:"az-Cyrl",1068:"az",1133:"ba",1069:"eu",1059:"be",2117:"bn",1093:"bn-IN",8218:"bs-Cyrl",5146:"bs",1150:"br",1026:"bg",1027:"ca",3076:"zh-HK",5124:"zh-MO",2052:"zh",4100:"zh-SG",1028:"zh-TW",1155:"co",1050:"hr",4122:"hr-BA",1029:"cs",1030:"da",1164:"prs",1125:"dv",2067:"nl-BE",1043:"nl",3081:"en-AU",10249:"en-BZ",4105:"en-CA",9225:"en-029",16393:"en-IN",6153:"en-IE",8201:"en-JM",17417:"en-MY",5129:"en-NZ",13321:"en-PH",18441:"en-SG",7177:"en-ZA",11273:"en-TT",2057:"en-GB",1033:"en",12297:"en-ZW",1061:"et",1080:"fo",1124:"fil",1035:"fi",2060:"fr-BE",3084:"fr-CA",1036:"fr",5132:"fr-LU",6156:"fr-MC",4108:"fr-CH",1122:"fy",1110:"gl",1079:"ka",3079:"de-AT",1031:"de",5127:"de-LI",4103:"de-LU",2055:"de-CH",1032:"el",1135:"kl",1095:"gu",1128:"ha",1037:"he",1081:"hi",1038:"hu",1039:"is",1136:"ig",1057:"id",1117:"iu",2141:"iu-Latn",2108:"ga",1076:"xh",1077:"zu",1040:"it",2064:"it-CH",1041:"ja",1099:"kn",1087:"kk",1107:"km",1158:"quc",1159:"rw",1089:"sw",1111:"kok",1042:"ko",1088:"ky",1108:"lo",1062:"lv",1063:"lt",2094:"dsb",1134:"lb",1071:"mk",2110:"ms-BN",1086:"ms",1100:"ml",1082:"mt",1153:"mi",1146:"arn",1102:"mr",1148:"moh",1104:"mn",2128:"mn-CN",1121:"ne",1044:"nb",2068:"nn",1154:"oc",1096:"or",1123:"ps",1045:"pl",1046:"pt",2070:"pt-PT",1094:"pa",1131:"qu-BO",2155:"qu-EC",3179:"qu",1048:"ro",1047:"rm",1049:"ru",9275:"smn",4155:"smj-NO",5179:"smj",3131:"se-FI",1083:"se",2107:"se-SE",8251:"sms",6203:"sma-NO",7227:"sms",1103:"sa",7194:"sr-Cyrl-BA",3098:"sr",6170:"sr-Latn-BA",2074:"sr-Latn",1132:"nso",1074:"tn",1115:"si",1051:"sk",1060:"sl",11274:"es-AR",16394:"es-BO",13322:"es-CL",9226:"es-CO",5130:"es-CR",7178:"es-DO",12298:"es-EC",17418:"es-SV",4106:"es-GT",18442:"es-HN",2058:"es-MX",19466:"es-NI",6154:"es-PA",15370:"es-PY",10250:"es-PE",20490:"es-PR",3082:"es",1034:"es",21514:"es-US",14346:"es-UY",8202:"es-VE",2077:"sv-FI",1053:"sv",1114:"syr",1064:"tg",2143:"tzm",1097:"ta",1092:"tt",1098:"te",1054:"th",1105:"bo",1055:"tr",1090:"tk",1152:"ug",1058:"uk",1070:"hsb",1056:"ur",2115:"uz-Cyrl",1091:"uz",1066:"vi",1106:"cy",1160:"wo",1157:"sah",1144:"ii",1130:"yo"};function zL(t,e,r){switch(t){case 0:if(e===65535)return"und";if(r)return r[e];break;case 1:return Ms[e];case 3:return Gs[e]}}var $0="utf-16",ZL={0:"macintosh",1:"x-mac-japanese",2:"x-mac-chinesetrad",3:"x-mac-korean",6:"x-mac-greek",7:"x-mac-cyrillic",9:"x-mac-devanagai",10:"x-mac-gurmukhi",11:"x-mac-gujarati",12:"x-mac-oriya",13:"x-mac-bengali",14:"x-mac-tamil",15:"x-mac-telugu",16:"x-mac-kannada",17:"x-mac-malayalam",18:"x-mac-sinhalese",19:"x-mac-burmese",20:"x-mac-khmer",21:"x-mac-thai",22:"x-mac-lao",23:"x-mac-georgian",24:"x-mac-armenian",25:"x-mac-chinesesimp",26:"x-mac-tibetan",27:"x-mac-mongolian",28:"x-mac-ethiopic",29:"x-mac-ce",30:"x-mac-vietnamese",31:"x-mac-extarabic"},XL={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"};function Ps(t,e,r){switch(t){case 0:return $0;case 1:return XL[r]||ZL[e];case 3:if(e===1||e===10)return $0;break}}function jL(t,e,r){for(var n={},a=new ye.Parser(t,e),o=a.parseUShort(),s=a.parseUShort(),x=a.offset+a.parseUShort(),E=0;E<s;E++){var T=a.parseUShort(),d=a.parseUShort(),g=a.parseUShort(),y=a.parseUShort(),C=Fs[y]||y,k=a.parseUShort(),Y=a.parseUShort(),_=zL(T,g,r),V=Ps(T,d,g);if(V!==void 0&&_!==void 0){var ee=void 0;if(V===$0?ee=na.UTF16(t,x+Y,k):ee=na.MACSTRING(t,x+Y,k,V),ee){var q=n[C];q===void 0&&(q=n[C]={}),q[_]=ee}}}return o===1&&a.parseUShort(),n}function I0(t){var e={};for(var r in t)e[t[r]]=parseInt(r);return e}function fA(t,e,r,n,a,o){return new ge.Record("NameRecord",[{name:"platformID",type:"USHORT",value:t},{name:"encodingID",type:"USHORT",value:e},{name:"languageID",type:"USHORT",value:r},{name:"nameID",type:"USHORT",value:n},{name:"length",type:"USHORT",value:a},{name:"offset",type:"USHORT",value:o}])}function qL(t,e){var r=t.length,n=e.length-r+1;e:for(var a=0;a<n;a++)for(;a<n;a++){for(var o=0;o<r;o++)if(e[a+o]!==t[o])continue e;return a}return-1}function OA(t,e){var r=qL(t,e);if(r<0){r=e.length;for(var n=0,a=t.length;n<a;++n)e.push(t[n])}return r}function QL(t,e){var r,n=[],a={},o=I0(Fs);for(var s in t){var x=o[s];if(x===void 0&&(x=s),r=parseInt(x),isNaN(r))throw new Error('Name table entry "'+s+'" does not exist, see nameTableNames for complete list.');a[r]=t[s],n.push(r)}for(var E=I0(Ms),T=I0(Gs),d=[],g=[],y=0;y<n.length;y++){r=n[y];var C=a[r];for(var k in C){var Y=C[k],_=1,V=E[k],ee=JL[V],q=Ps(_,ee,V),he=Se.MACSTRING(Y,q);he===void 0&&(_=0,V=e.indexOf(k),V<0&&(V=e.length,e.push(k)),ee=4,he=Se.UTF16(Y));var ce=OA(he,g);d.push(fA(_,ee,V,r,he.length,ce));var oe=T[k];if(oe!==void 0){var Te=Se.UTF16(Y),Ie=OA(Te,g);d.push(fA(3,1,oe,r,Te.length,Ie))}}}d.sort(function(ke,At){return ke.platformID-At.platformID||ke.encodingID-At.encodingID||ke.languageID-At.languageID||ke.nameID-At.nameID});for(var fe=new ge.Table("name",[{name:"format",type:"USHORT",value:0},{name:"count",type:"USHORT",value:d.length},{name:"stringOffset",type:"USHORT",value:6+d.length*12}]),We=0;We<d.length;We++)fe.fields.push({name:"record_"+We,type:"RECORD",value:d[We]});return fe.fields.push({name:"strings",type:"LITERAL",value:g}),fe}var bs={parse:jL,make:QL},eo=[{begin:0,end:127},{begin:128,end:255},{begin:256,end:383},{begin:384,end:591},{begin:592,end:687},{begin:688,end:767},{begin:768,end:879},{begin:880,end:1023},{begin:11392,end:11519},{begin:1024,end:1279},{begin:1328,end:1423},{begin:1424,end:1535},{begin:42240,end:42559},{begin:1536,end:1791},{begin:1984,end:2047},{begin:2304,end:2431},{begin:2432,end:2559},{begin:2560,end:2687},{begin:2688,end:2815},{begin:2816,end:2943},{begin:2944,end:3071},{begin:3072,end:3199},{begin:3200,end:3327},{begin:3328,end:3455},{begin:3584,end:3711},{begin:3712,end:3839},{begin:4256,end:4351},{begin:6912,end:7039},{begin:4352,end:4607},{begin:7680,end:7935},{begin:7936,end:8191},{begin:8192,end:8303},{begin:8304,end:8351},{begin:8352,end:8399},{begin:8400,end:8447},{begin:8448,end:8527},{begin:8528,end:8591},{begin:8592,end:8703},{begin:8704,end:8959},{begin:8960,end:9215},{begin:9216,end:9279},{begin:9280,end:9311},{begin:9312,end:9471},{begin:9472,end:9599},{begin:9600,end:9631},{begin:9632,end:9727},{begin:9728,end:9983},{begin:9984,end:10175},{begin:12288,end:12351},{begin:12352,end:12447},{begin:12448,end:12543},{begin:12544,end:12591},{begin:12592,end:12687},{begin:43072,end:43135},{begin:12800,end:13055},{begin:13056,end:13311},{begin:44032,end:55215},{begin:55296,end:57343},{begin:67840,end:67871},{begin:19968,end:40959},{begin:57344,end:63743},{begin:12736,end:12783},{begin:64256,end:64335},{begin:64336,end:65023},{begin:65056,end:65071},{begin:65040,end:65055},{begin:65104,end:65135},{begin:65136,end:65279},{begin:65280,end:65519},{begin:65520,end:65535},{begin:3840,end:4095},{begin:1792,end:1871},{begin:1920,end:1983},{begin:3456,end:3583},{begin:4096,end:4255},{begin:4608,end:4991},{begin:5024,end:5119},{begin:5120,end:5759},{begin:5760,end:5791},{begin:5792,end:5887},{begin:6016,end:6143},{begin:6144,end:6319},{begin:10240,end:10495},{begin:40960,end:42127},{begin:5888,end:5919},{begin:66304,end:66351},{begin:66352,end:66383},{begin:66560,end:66639},{begin:118784,end:119039},{begin:119808,end:120831},{begin:1044480,end:1048573},{begin:65024,end:65039},{begin:917504,end:917631},{begin:6400,end:6479},{begin:6480,end:6527},{begin:6528,end:6623},{begin:6656,end:6687},{begin:11264,end:11359},{begin:11568,end:11647},{begin:19904,end:19967},{begin:43008,end:43055},{begin:65536,end:65663},{begin:65856,end:65935},{begin:66432,end:66463},{begin:66464,end:66527},{begin:66640,end:66687},{begin:66688,end:66735},{begin:67584,end:67647},{begin:68096,end:68191},{begin:119552,end:119647},{begin:73728,end:74751},{begin:119648,end:119679},{begin:7040,end:7103},{begin:7168,end:7247},{begin:7248,end:7295},{begin:43136,end:43231},{begin:43264,end:43311},{begin:43312,end:43359},{begin:43520,end:43615},{begin:65936,end:65999},{begin:66e3,end:66047},{begin:66208,end:66271},{begin:127024,end:127135}];function $L(t){for(var e=0;e<eo.length;e+=1){var r=eo[e];if(t>=r.begin&&t<r.end)return e}return-1}function eh(t,e){var r={},n=new ye.Parser(t,e);r.version=n.parseUShort(),r.xAvgCharWidth=n.parseShort(),r.usWeightClass=n.parseUShort(),r.usWidthClass=n.parseUShort(),r.fsType=n.parseUShort(),r.ySubscriptXSize=n.parseShort(),r.ySubscriptYSize=n.parseShort(),r.ySubscriptXOffset=n.parseShort(),r.ySubscriptYOffset=n.parseShort(),r.ySuperscriptXSize=n.parseShort(),r.ySuperscriptYSize=n.parseShort(),r.ySuperscriptXOffset=n.parseShort(),r.ySuperscriptYOffset=n.parseShort(),r.yStrikeoutSize=n.parseShort(),r.yStrikeoutPosition=n.parseShort(),r.sFamilyClass=n.parseShort(),r.panose=[];for(var a=0;a<10;a++)r.panose[a]=n.parseByte();return r.ulUnicodeRange1=n.parseULong(),r.ulUnicodeRange2=n.parseULong(),r.ulUnicodeRange3=n.parseULong(),r.ulUnicodeRange4=n.parseULong(),r.achVendID=String.fromCharCode(n.parseByte(),n.parseByte(),n.parseByte(),n.parseByte()),r.fsSelection=n.parseUShort(),r.usFirstCharIndex=n.parseUShort(),r.usLastCharIndex=n.parseUShort(),r.sTypoAscender=n.parseShort(),r.sTypoDescender=n.parseShort(),r.sTypoLineGap=n.parseShort(),r.usWinAscent=n.parseUShort(),r.usWinDescent=n.parseUShort(),r.version>=1&&(r.ulCodePageRange1=n.parseULong(),r.ulCodePageRange2=n.parseULong()),r.version>=2&&(r.sxHeight=n.parseShort(),r.sCapHeight=n.parseShort(),r.usDefaultChar=n.parseUShort(),r.usBreakChar=n.parseUShort(),r.usMaxContent=n.parseUShort()),r}function th(t){return new ge.Table("OS/2",[{name:"version",type:"USHORT",value:3},{name:"xAvgCharWidth",type:"SHORT",value:0},{name:"usWeightClass",type:"USHORT",value:0},{name:"usWidthClass",type:"USHORT",value:0},{name:"fsType",type:"USHORT",value:0},{name:"ySubscriptXSize",type:"SHORT",value:650},{name:"ySubscriptYSize",type:"SHORT",value:699},{name:"ySubscriptXOffset",type:"SHORT",value:0},{name:"ySubscriptYOffset",type:"SHORT",value:140},{name:"ySuperscriptXSize",type:"SHORT",value:650},{name:"ySuperscriptYSize",type:"SHORT",value:699},{name:"ySuperscriptXOffset",type:"SHORT",value:0},{name:"ySuperscriptYOffset",type:"SHORT",value:479},{name:"yStrikeoutSize",type:"SHORT",value:49},{name:"yStrikeoutPosition",type:"SHORT",value:258},{name:"sFamilyClass",type:"SHORT",value:0},{name:"bFamilyType",type:"BYTE",value:0},{name:"bSerifStyle",type:"BYTE",value:0},{name:"bWeight",type:"BYTE",value:0},{name:"bProportion",type:"BYTE",value:0},{name:"bContrast",type:"BYTE",value:0},{name:"bStrokeVariation",type:"BYTE",value:0},{name:"bArmStyle",type:"BYTE",value:0},{name:"bLetterform",type:"BYTE",value:0},{name:"bMidline",type:"BYTE",value:0},{name:"bXHeight",type:"BYTE",value:0},{name:"ulUnicodeRange1",type:"ULONG",value:0},{name:"ulUnicodeRange2",type:"ULONG",value:0},{name:"ulUnicodeRange3",type:"ULONG",value:0},{name:"ulUnicodeRange4",type:"ULONG",value:0},{name:"achVendID",type:"CHARARRAY",value:"XXXX"},{name:"fsSelection",type:"USHORT",value:0},{name:"usFirstCharIndex",type:"USHORT",value:0},{name:"usLastCharIndex",type:"USHORT",value:0},{name:"sTypoAscender",type:"SHORT",value:0},{name:"sTypoDescender",type:"SHORT",value:0},{name:"sTypoLineGap",type:"SHORT",value:0},{name:"usWinAscent",type:"USHORT",value:0},{name:"usWinDescent",type:"USHORT",value:0},{name:"ulCodePageRange1",type:"ULONG",value:0},{name:"ulCodePageRange2",type:"ULONG",value:0},{name:"sxHeight",type:"SHORT",value:0},{name:"sCapHeight",type:"SHORT",value:0},{name:"usDefaultChar",type:"USHORT",value:0},{name:"usBreakChar",type:"USHORT",value:0},{name:"usMaxContext",type:"USHORT",value:0}],t)}var to={parse:eh,make:th,unicodeRanges:eo,getUnicodeRange:$L};function rh(t,e){var r={},n=new ye.Parser(t,e);switch(r.version=n.parseVersion(),r.italicAngle=n.parseFixed(),r.underlinePosition=n.parseShort(),r.underlineThickness=n.parseShort(),r.isFixedPitch=n.parseULong(),r.minMemType42=n.parseULong(),r.maxMemType42=n.parseULong(),r.minMemType1=n.parseULong(),r.maxMemType1=n.parseULong(),r.version){case 1:r.names=fn.slice();break;case 2:r.numberOfGlyphs=n.parseUShort(),r.glyphNameIndex=new Array(r.numberOfGlyphs);for(var a=0;a<r.numberOfGlyphs;a++)r.glyphNameIndex[a]=n.parseUShort();r.names=[];for(var o=0;o<r.numberOfGlyphs;o++)if(r.glyphNameIndex[o]>=fn.length){var s=n.parseChar();r.names.push(n.parseString(s))}break;case 2.5:r.numberOfGlyphs=n.parseUShort(),r.offset=new Array(r.numberOfGlyphs);for(var x=0;x<r.numberOfGlyphs;x++)r.offset[x]=n.parseChar();break}return r}function nh(){return new ge.Table("post",[{name:"version",type:"FIXED",value:196608},{name:"italicAngle",type:"FIXED",value:0},{name:"underlinePosition",type:"FWORD",value:0},{name:"underlineThickness",type:"FWORD",value:0},{name:"isFixedPitch",type:"ULONG",value:0},{name:"minMemType42",type:"ULONG",value:0},{name:"maxMemType42",type:"ULONG",value:0},{name:"minMemType1",type:"ULONG",value:0},{name:"maxMemType1",type:"ULONG",value:0}])}var vs={parse:rh,make:nh},yr=new Array(9);yr[1]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{substFormat:1,coverage:this.parsePointer(te.coverage),deltaGlyphId:this.parseUShort()};if(r===2)return{substFormat:2,coverage:this.parsePointer(te.coverage),substitute:this.parseOffset16List()};Ge.assert(!1,"0x"+e.toString(16)+": lookup type 1 format must be 1 or 2.")};yr[2]=function(){var e=this.parseUShort();return Ge.argument(e===1,"GSUB Multiple Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(te.coverage),sequences:this.parseListOfLists()}};yr[3]=function(){var e=this.parseUShort();return Ge.argument(e===1,"GSUB Alternate Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(te.coverage),alternateSets:this.parseListOfLists()}};yr[4]=function(){var e=this.parseUShort();return Ge.argument(e===1,"GSUB ligature table identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(te.coverage),ligatureSets:this.parseListOfLists(function(){return{ligGlyph:this.parseUShort(),components:this.parseUShortList(this.parseUShort()-1)}})}};var qn={sequenceIndex:te.uShort,lookupListIndex:te.uShort};yr[5]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{substFormat:r,coverage:this.parsePointer(te.coverage),ruleSets:this.parseListOfLists(function(){var o=this.parseUShort(),s=this.parseUShort();return{input:this.parseUShortList(o-1),lookupRecords:this.parseRecordList(s,qn)}})};if(r===2)return{substFormat:r,coverage:this.parsePointer(te.coverage),classDef:this.parsePointer(te.classDef),classSets:this.parseListOfLists(function(){var o=this.parseUShort(),s=this.parseUShort();return{classes:this.parseUShortList(o-1),lookupRecords:this.parseRecordList(s,qn)}})};if(r===3){var n=this.parseUShort(),a=this.parseUShort();return{substFormat:r,coverages:this.parseList(n,te.pointer(te.coverage)),lookupRecords:this.parseRecordList(a,qn)}}Ge.assert(!1,"0x"+e.toString(16)+": lookup type 5 format must be 1, 2 or 3.")};yr[6]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{substFormat:1,coverage:this.parsePointer(te.coverage),chainRuleSets:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(qn)}})};if(r===2)return{substFormat:2,coverage:this.parsePointer(te.coverage),backtrackClassDef:this.parsePointer(te.classDef),inputClassDef:this.parsePointer(te.classDef),lookaheadClassDef:this.parsePointer(te.classDef),chainClassSet:this.parseListOfLists(function(){return{backtrack:this.parseUShortList(),input:this.parseUShortList(this.parseShort()-1),lookahead:this.parseUShortList(),lookupRecords:this.parseRecordList(qn)}})};if(r===3)return{substFormat:3,backtrackCoverage:this.parseList(te.pointer(te.coverage)),inputCoverage:this.parseList(te.pointer(te.coverage)),lookaheadCoverage:this.parseList(te.pointer(te.coverage)),lookupRecords:this.parseRecordList(qn)};Ge.assert(!1,"0x"+e.toString(16)+": lookup type 6 format must be 1, 2 or 3.")};yr[7]=function(){var e=this.parseUShort();Ge.argument(e===1,"GSUB Extension Substitution subtable identifier-format must be 1");var r=this.parseUShort(),n=new te(this.data,this.offset+this.parseULong());return{substFormat:1,lookupType:r,extension:yr[r].call(n)}};yr[8]=function(){var e=this.parseUShort();return Ge.argument(e===1,"GSUB Reverse Chaining Contextual Single Substitution Subtable identifier-format must be 1"),{substFormat:e,coverage:this.parsePointer(te.coverage),backtrackCoverage:this.parseList(te.pointer(te.coverage)),lookaheadCoverage:this.parseList(te.pointer(te.coverage)),substitutes:this.parseUShortList()}};function ah(t,e){e=e||0;var r=new te(t,e),n=r.parseVersion(1);return Ge.argument(n===1||n===1.1,"Unsupported GSUB table version."),n===1?{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(yr)}:{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(yr),variations:r.parseFeatureVariationsList()}}var xa=new Array(9);xa[1]=function(e){return e.substFormat===1?new ge.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new ge.Coverage(e.coverage)},{name:"deltaGlyphID",type:"USHORT",value:e.deltaGlyphId}]):new ge.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:2},{name:"coverage",type:"TABLE",value:new ge.Coverage(e.coverage)}].concat(ge.ushortList("substitute",e.substitute)))};xa[2]=function(e){return Ge.assert(e.substFormat===1,"Lookup type 2 substFormat must be 1."),new ge.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new ge.Coverage(e.coverage)}].concat(ge.tableList("seqSet",e.sequences,function(r){return new ge.Table("sequenceSetTable",ge.ushortList("sequence",r))})))};xa[3]=function(e){return Ge.assert(e.substFormat===1,"Lookup type 3 substFormat must be 1."),new ge.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new ge.Coverage(e.coverage)}].concat(ge.tableList("altSet",e.alternateSets,function(r){return new ge.Table("alternateSetTable",ge.ushortList("alternate",r))})))};xa[4]=function(e){return Ge.assert(e.substFormat===1,"Lookup type 4 substFormat must be 1."),new ge.Table("substitutionTable",[{name:"substFormat",type:"USHORT",value:1},{name:"coverage",type:"TABLE",value:new ge.Coverage(e.coverage)}].concat(ge.tableList("ligSet",e.ligatureSets,function(r){return new ge.Table("ligatureSetTable",ge.tableList("ligature",r,function(n){return new ge.Table("ligatureTable",[{name:"ligGlyph",type:"USHORT",value:n.ligGlyph}].concat(ge.ushortList("component",n.components,n.components.length+1)))}))})))};xa[6]=function(e){if(e.substFormat===1){var r=new ge.Table("chainContextTable",[{name:"substFormat",type:"USHORT",value:e.substFormat},{name:"coverage",type:"TABLE",value:new ge.Coverage(e.coverage)}].concat(ge.tableList("chainRuleSet",e.chainRuleSets,function(o){return new ge.Table("chainRuleSetTable",ge.tableList("chainRule",o,function(s){var x=ge.ushortList("backtrackGlyph",s.backtrack,s.backtrack.length).concat(ge.ushortList("inputGlyph",s.input,s.input.length+1)).concat(ge.ushortList("lookaheadGlyph",s.lookahead,s.lookahead.length)).concat(ge.ushortList("substitution",[],s.lookupRecords.length));return s.lookupRecords.forEach(function(E,T){x=x.concat({name:"sequenceIndex"+T,type:"USHORT",value:E.sequenceIndex}).concat({name:"lookupListIndex"+T,type:"USHORT",value:E.lookupListIndex})}),new ge.Table("chainRuleTable",x)}))})));return r}else if(e.substFormat===2)Ge.assert(!1,"lookup type 6 format 2 is not yet supported.");else if(e.substFormat===3){var n=[{name:"substFormat",type:"USHORT",value:e.substFormat}];n.push({name:"backtrackGlyphCount",type:"USHORT",value:e.backtrackCoverage.length}),e.backtrackCoverage.forEach(function(o,s){n.push({name:"backtrackCoverage"+s,type:"TABLE",value:new ge.Coverage(o)})}),n.push({name:"inputGlyphCount",type:"USHORT",value:e.inputCoverage.length}),e.inputCoverage.forEach(function(o,s){n.push({name:"inputCoverage"+s,type:"TABLE",value:new ge.Coverage(o)})}),n.push({name:"lookaheadGlyphCount",type:"USHORT",value:e.lookaheadCoverage.length}),e.lookaheadCoverage.forEach(function(o,s){n.push({name:"lookaheadCoverage"+s,type:"TABLE",value:new ge.Coverage(o)})}),n.push({name:"substitutionCount",type:"USHORT",value:e.lookupRecords.length}),e.lookupRecords.forEach(function(o,s){n=n.concat({name:"sequenceIndex"+s,type:"USHORT",value:o.sequenceIndex}).concat({name:"lookupListIndex"+s,type:"USHORT",value:o.lookupListIndex})});var a=new ge.Table("chainContextTable",n);return a}Ge.assert(!1,"lookup type 6 format must be 1, 2 or 3.")};function ih(t){return new ge.Table("GSUB",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new ge.ScriptList(t.scripts)},{name:"features",type:"TABLE",value:new ge.FeatureList(t.features)},{name:"lookups",type:"TABLE",value:new ge.LookupList(t.lookups,xa)}])}var Us={parse:ah,make:ih};function oh(t,e){var r=new ye.Parser(t,e),n=r.parseULong();Ge.argument(n===1,"Unsupported META table version."),r.parseULong(),r.parseULong();for(var a=r.parseULong(),o={},s=0;s<a;s++){var x=r.parseTag(),E=r.parseULong(),T=r.parseULong(),d=na.UTF8(t,e+E,T);o[x]=d}return o}function Ah(t){var e=Object.keys(t).length,r="",n=16+e*12,a=new ge.Table("meta",[{name:"version",type:"ULONG",value:1},{name:"flags",type:"ULONG",value:0},{name:"offset",type:"ULONG",value:n},{name:"numTags",type:"ULONG",value:e}]);for(var o in t){var s=r.length;r+=t[o],a.fields.push({name:"tag "+o,type:"TAG",value:o}),a.fields.push({name:"offset "+o,type:"ULONG",value:n+s}),a.fields.push({name:"length "+o,type:"ULONG",value:t[o].length})}return a.fields.push({name:"stringPool",type:"CHARARRAY",value:r}),a}var ws={parse:oh,make:Ah};function BA(t){return Math.log(t)/Math.log(2)|0}function Ho(t){for(;t.length%4!==0;)t.push(0);for(var e=0,r=0;r<t.length;r+=4)e+=(t[r]<<24)+(t[r+1]<<16)+(t[r+2]<<8)+t[r+3];return e%=Math.pow(2,32),e}function HA(t,e,r,n){return new ge.Record("Table Record",[{name:"tag",type:"TAG",value:t!==void 0?t:""},{name:"checkSum",type:"ULONG",value:e!==void 0?e:0},{name:"offset",type:"ULONG",value:r!==void 0?r:0},{name:"length",type:"ULONG",value:n!==void 0?n:0}])}function Ys(t){var e=new ge.Table("sfnt",[{name:"version",type:"TAG",value:"OTTO"},{name:"numTables",type:"USHORT",value:0},{name:"searchRange",type:"USHORT",value:0},{name:"entrySelector",type:"USHORT",value:0},{name:"rangeShift",type:"USHORT",value:0}]);e.tables=t,e.numTables=t.length;var r=Math.pow(2,BA(e.numTables));e.searchRange=16*r,e.entrySelector=BA(r),e.rangeShift=e.numTables*16-e.searchRange;for(var n=[],a=[],o=e.sizeOf()+HA().sizeOf()*e.numTables;o%4!==0;)o+=1,a.push({name:"padding",type:"BYTE",value:0});for(var s=0;s<t.length;s+=1){var x=t[s];Ge.argument(x.tableName.length===4,"Table name"+x.tableName+" is invalid.");var E=x.sizeOf(),T=HA(x.tableName,Ho(x.encode()),o,E);for(n.push({name:T.tag+" Table Record",type:"RECORD",value:T}),a.push({name:x.tableName+" table",type:"RECORD",value:x}),o+=E,Ge.argument(!isNaN(o),"Something went wrong calculating the offset.");o%4!==0;)o+=1,a.push({name:"padding",type:"BYTE",value:0})}return n.sort(function(d,g){return d.value.tag>g.value.tag?1:-1}),e.fields=e.fields.concat(n),e.fields=e.fields.concat(a),e}function FA(t,e,r){for(var n=0;n<e.length;n+=1){var a=t.charToGlyphIndex(e[n]);if(a>0){var o=t.glyphs.get(a);return o.getMetrics()}}return r}function sh(t){for(var e=0,r=0;r<t.length;r+=1)e+=t[r];return e/t.length}function lh(t){for(var e=[],r=[],n=[],a=[],o=[],s=[],x=[],E,T=0,d=0,g=0,y=0,C=0,k=0;k<t.glyphs.length;k+=1){var Y=t.glyphs.get(k),_=Y.unicode|0;if(isNaN(Y.advanceWidth))throw new Error("Glyph "+Y.name+" ("+k+"): advanceWidth is not a number.");(E>_||E===void 0)&&_>0&&(E=_),T<_&&(T=_);var V=to.getUnicodeRange(_);if(V<32)d|=1<<V;else if(V<64)g|=1<<V-32;else if(V<96)y|=1<<V-64;else if(V<123)C|=1<<V-96;else throw new Error("Unicode ranges bits > 123 are reserved for internal usage");if(Y.name!==".notdef"){var ee=Y.getMetrics();e.push(ee.xMin),r.push(ee.yMin),n.push(ee.xMax),a.push(ee.yMax),s.push(ee.leftSideBearing),x.push(ee.rightSideBearing),o.push(Y.advanceWidth)}}var q={xMin:Math.min.apply(null,e),yMin:Math.min.apply(null,r),xMax:Math.max.apply(null,n),yMax:Math.max.apply(null,a),advanceWidthMax:Math.max.apply(null,o),advanceWidthAvg:sh(o),minLeftSideBearing:Math.min.apply(null,s),maxLeftSideBearing:Math.max.apply(null,s),minRightSideBearing:Math.min.apply(null,x)};q.ascender=t.ascender,q.descender=t.descender;var he=Ds.make({flags:3,unitsPerEm:t.unitsPerEm,xMin:q.xMin,yMin:q.yMin,xMax:q.xMax,yMax:q.yMax,lowestRecPPEM:3,createdTimestamp:t.createdTimestamp}),ce=fs.make({ascender:q.ascender,descender:q.descender,advanceWidthMax:q.advanceWidthMax,minLeftSideBearing:q.minLeftSideBearing,minRightSideBearing:q.minRightSideBearing,xMaxExtent:q.maxLeftSideBearing+(q.xMax-q.xMin),numberOfHMetrics:t.glyphs.length}),oe=Hs.make(t.glyphs.length),Te=to.make(Object.assign({xAvgCharWidth:Math.round(q.advanceWidthAvg),usFirstCharIndex:E,usLastCharIndex:T,ulUnicodeRange1:d,ulUnicodeRange2:g,ulUnicodeRange3:y,ulUnicodeRange4:C,sTypoAscender:q.ascender,sTypoDescender:q.descender,sTypoLineGap:0,usWinAscent:q.yMax,usWinDescent:Math.abs(q.yMin),ulCodePageRange1:1,sxHeight:FA(t,"xyvw",{yMax:Math.round(q.ascender/2)}).yMax,sCapHeight:FA(t,"HIKLEFJMNTZBDPRAGOQSUVWXY",q).yMax,usDefaultChar:t.hasChar(" ")?32:0,usBreakChar:t.hasChar(" ")?32:0},t.tables.os2)),Ie=Os.make(t.glyphs),fe=Ts.make(t.glyphs),We=t.getEnglishName("fontFamily"),ke=t.getEnglishName("fontSubfamily"),At=We+" "+ke,st=t.getEnglishName("postScriptName");st||(st=We.replace(/\s/g,"")+"-"+ke);var de={};for(var It in t.names)de[It]=t.names[It];de.uniqueID||(de.uniqueID={en:t.getEnglishName("manufacturer")+":"+At}),de.postScriptName||(de.postScriptName={en:st}),de.preferredFamily||(de.preferredFamily=t.names.fontFamily),de.preferredSubfamily||(de.preferredSubfamily=t.names.fontSubfamily);var Ae=[],$e=bs.make(de,Ae),lt=Ae.length>0?Bs.make(Ae):void 0,Oe=vs.make(),ht=Ns.make(t.glyphs,{version:t.getEnglishName("version"),fullName:At,familyName:We,weightName:ke,postScriptName:st,unitsPerEm:t.unitsPerEm,fontBBox:[0,q.yMin,q.ascender,q.advanceWidthMax]}),ct=t.metas&&Object.keys(t.metas).length>0?ws.make(t.metas):void 0,Gt=[he,ce,oe,Te,$e,fe,Oe,ht,Ie];lt&&Gt.push(lt),t.tables.gsub&&Gt.push(Us.make(t.tables.gsub)),ct&&Gt.push(ct);for(var rn=Ys(Gt),L0=rn.encode(),Ht=Ho(L0),nn=rn.fields,Vn=!1,an=0;an<nn.length;an+=1)if(nn[an].name==="head table"){nn[an].value.checkSumAdjustment=2981146554-Ht,Vn=!0;break}if(!Vn)throw new Error("Could not find head table with checkSum to adjust.");return rn}var xh={make:Ys,fontToTable:lh,computeCheckSum:Ho};function d0(t,e){for(var r=0,n=t.length-1;r<=n;){var a=r+n>>>1,o=t[a].tag;if(o===e)return a;o<e?r=a+1:n=a-1}return-r-1}function MA(t,e){for(var r=0,n=t.length-1;r<=n;){var a=r+n>>>1,o=t[a];if(o===e)return a;o<e?r=a+1:n=a-1}return-r-1}function GA(t,e){for(var r,n=0,a=t.length-1;n<=a;){var o=n+a>>>1;r=t[o];var s=r.start;if(s===e)return r;s<e?n=o+1:a=o-1}if(n>0)return r=t[n-1],e>r.end?0:r}function _a(t,e){this.font=t,this.tableName=e}_a.prototype={searchTag:d0,binSearch:MA,getTable:function(t){var e=this.font.tables[this.tableName];return!e&&t&&(e=this.font.tables[this.tableName]=this.createDefaultTable()),e},getScriptNames:function(){var t=this.getTable();return t?t.scripts.map(function(e){return e.tag}):[]},getDefaultScriptName:function(){var t=this.getTable();if(t){for(var e=!1,r=0;r<t.scripts.length;r++){var n=t.scripts[r].tag;if(n==="DFLT")return n;n==="latn"&&(e=!0)}if(e)return"latn"}},getScriptTable:function(t,e){var r=this.getTable(e);if(r){t=t||"DFLT";var n=r.scripts,a=d0(r.scripts,t);if(a>=0)return n[a].script;if(e){var o={tag:t,script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}};return n.splice(-1-a,0,o),o.script}}},getLangSysTable:function(t,e,r){var n=this.getScriptTable(t,r);if(n){if(!e||e==="dflt"||e==="DFLT")return n.defaultLangSys;var a=d0(n.langSysRecords,e);if(a>=0)return n.langSysRecords[a].langSys;if(r){var o={tag:e,langSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]}};return n.langSysRecords.splice(-1-a,0,o),o.langSys}}},getFeatureTable:function(t,e,r,n){var a=this.getLangSysTable(t,e,n);if(a){for(var o,s=a.featureIndexes,x=this.font.tables[this.tableName].features,E=0;E<s.length;E++)if(o=x[s[E]],o.tag===r)return o.feature;if(n){var T=x.length;return Ge.assert(T===0||r>=x[T-1].tag,"Features must be added in alphabetical order."),o={tag:r,feature:{params:0,lookupListIndexes:[]}},x.push(o),s.push(T),o.feature}}},getLookupTables:function(t,e,r,n,a){var o=this.getFeatureTable(t,e,r,a),s=[];if(o){for(var x,E=o.lookupListIndexes,T=this.font.tables[this.tableName].lookups,d=0;d<E.length;d++)x=T[E[d]],x.lookupType===n&&s.push(x);if(s.length===0&&a){x={lookupType:n,lookupFlag:0,subtables:[],markFilteringSet:void 0};var g=T.length;return T.push(x),E.push(g),[x]}}return s},getGlyphClass:function(t,e){switch(t.format){case 1:return t.startGlyph<=e&&e<t.startGlyph+t.classes.length?t.classes[e-t.startGlyph]:0;case 2:var r=GA(t.ranges,e);return r?r.classId:0}},getCoverageIndex:function(t,e){switch(t.format){case 1:var r=MA(t.glyphs,e);return r>=0?r:-1;case 2:var n=GA(t.ranges,e);return n?n.index+e-n.start:-1}},expandCoverage:function(t){if(t.format===1)return t.glyphs;for(var e=[],r=t.ranges,n=0;n<r.length;n++)for(var a=r[n],o=a.start,s=a.end,x=o;x<=s;x++)e.push(x);return e}};function Ja(t){_a.call(this,t,"gpos")}Ja.prototype=_a.prototype;Ja.prototype.init=function(){var t=this.getDefaultScriptName();this.defaultKerningTables=this.getKerningTables(t)};Ja.prototype.getKerningValue=function(t,e,r){for(var n=0;n<t.length;n++)for(var a=t[n].subtables,o=0;o<a.length;o++){var s=a[o],x=this.getCoverageIndex(s.coverage,e);if(!(x<0))switch(s.posFormat){case 1:for(var E=s.pairSets[x],T=0;T<E.length;T++){var d=E[T];if(d.secondGlyph===r)return d.value1&&d.value1.xAdvance||0}break;case 2:var g=this.getGlyphClass(s.classDef1,e),y=this.getGlyphClass(s.classDef2,r),C=s.classRecords[g][y];return C.value1&&C.value1.xAdvance||0}}return 0};Ja.prototype.getKerningTables=function(t,e){if(this.font.tables.gpos)return this.getLookupTables(t,e,"kern",2)};function hr(t){_a.call(this,t,"gsub")}function Eh(t,e){var r=t.length;if(r!==e.length)return!1;for(var n=0;n<r;n++)if(t[n]!==e[n])return!1;return!0}function Fo(t,e,r){for(var n=t.subtables,a=0;a<n.length;a++){var o=n[a];if(o.substFormat===e)return o}if(r)return n.push(r),r}hr.prototype=_a.prototype;hr.prototype.createDefaultTable=function(){return{version:1,scripts:[{tag:"DFLT",script:{defaultLangSys:{reserved:0,reqFeatureIndex:65535,featureIndexes:[]},langSysRecords:[]}}],features:[],lookups:[]}};hr.prototype.getSingle=function(t,e,r){for(var n=[],a=this.getLookupTables(e,r,t,1),o=0;o<a.length;o++)for(var s=a[o].subtables,x=0;x<s.length;x++){var E=s[x],T=this.expandCoverage(E.coverage),d=void 0;if(E.substFormat===1){var g=E.deltaGlyphId;for(d=0;d<T.length;d++){var y=T[d];n.push({sub:y,by:y+g})}}else{var C=E.substitute;for(d=0;d<T.length;d++)n.push({sub:T[d],by:C[d]})}}return n};hr.prototype.getMultiple=function(t,e,r){for(var n=[],a=this.getLookupTables(e,r,t,2),o=0;o<a.length;o++)for(var s=a[o].subtables,x=0;x<s.length;x++){var E=s[x],T=this.expandCoverage(E.coverage),d=void 0;for(d=0;d<T.length;d++){var g=T[d],y=E.sequences[d];n.push({sub:g,by:y})}}return n};hr.prototype.getAlternates=function(t,e,r){for(var n=[],a=this.getLookupTables(e,r,t,3),o=0;o<a.length;o++)for(var s=a[o].subtables,x=0;x<s.length;x++)for(var E=s[x],T=this.expandCoverage(E.coverage),d=E.alternateSets,g=0;g<T.length;g++)n.push({sub:T[g],by:d[g]});return n};hr.prototype.getLigatures=function(t,e,r){for(var n=[],a=this.getLookupTables(e,r,t,4),o=0;o<a.length;o++)for(var s=a[o].subtables,x=0;x<s.length;x++)for(var E=s[x],T=this.expandCoverage(E.coverage),d=E.ligatureSets,g=0;g<T.length;g++)for(var y=T[g],C=d[g],k=0;k<C.length;k++){var Y=C[k];n.push({sub:[y].concat(Y.components),by:Y.ligGlyph})}return n};hr.prototype.addSingle=function(t,e,r,n){var a=this.getLookupTables(r,n,t,1,!0)[0],o=Fo(a,2,{substFormat:2,coverage:{format:1,glyphs:[]},substitute:[]});Ge.assert(o.coverage.format===1,"Single: unable to modify coverage table format "+o.coverage.format);var s=e.sub,x=this.binSearch(o.coverage.glyphs,s);x<0&&(x=-1-x,o.coverage.glyphs.splice(x,0,s),o.substitute.splice(x,0,0)),o.substitute[x]=e.by};hr.prototype.addMultiple=function(t,e,r,n){Ge.assert(e.by instanceof Array&&e.by.length>1,'Multiple: "by" must be an array of two or more ids');var a=this.getLookupTables(r,n,t,2,!0)[0],o=Fo(a,1,{substFormat:1,coverage:{format:1,glyphs:[]},sequences:[]});Ge.assert(o.coverage.format===1,"Multiple: unable to modify coverage table format "+o.coverage.format);var s=e.sub,x=this.binSearch(o.coverage.glyphs,s);x<0&&(x=-1-x,o.coverage.glyphs.splice(x,0,s),o.sequences.splice(x,0,0)),o.sequences[x]=e.by};hr.prototype.addAlternate=function(t,e,r,n){var a=this.getLookupTables(r,n,t,3,!0)[0],o=Fo(a,1,{substFormat:1,coverage:{format:1,glyphs:[]},alternateSets:[]});Ge.assert(o.coverage.format===1,"Alternate: unable to modify coverage table format "+o.coverage.format);var s=e.sub,x=this.binSearch(o.coverage.glyphs,s);x<0&&(x=-1-x,o.coverage.glyphs.splice(x,0,s),o.alternateSets.splice(x,0,0)),o.alternateSets[x]=e.by};hr.prototype.addLigature=function(t,e,r,n){var a=this.getLookupTables(r,n,t,4,!0)[0],o=a.subtables[0];o||(o={substFormat:1,coverage:{format:1,glyphs:[]},ligatureSets:[]},a.subtables[0]=o),Ge.assert(o.coverage.format===1,"Ligature: unable to modify coverage table format "+o.coverage.format);var s=e.sub[0],x=e.sub.slice(1),E={ligGlyph:e.by,components:x},T=this.binSearch(o.coverage.glyphs,s);if(T>=0){for(var d=o.ligatureSets[T],g=0;g<d.length;g++)if(Eh(d[g].components,x))return;d.push(E)}else T=-1-T,o.coverage.glyphs.splice(T,0,s),o.ligatureSets.splice(T,0,[E])};hr.prototype.getFeature=function(t,e,r){if(/ss\d\d/.test(t))return this.getSingle(t,e,r);switch(t){case"aalt":case"salt":return this.getSingle(t,e,r).concat(this.getAlternates(t,e,r));case"dlig":case"liga":case"rlig":return this.getLigatures(t,e,r);case"ccmp":return this.getMultiple(t,e,r).concat(this.getLigatures(t,e,r));case"stch":return this.getMultiple(t,e,r)}};hr.prototype.add=function(t,e,r,n){if(/ss\d\d/.test(t))return this.addSingle(t,e,r,n);switch(t){case"aalt":case"salt":return typeof e.by=="number"?this.addSingle(t,e,r,n):this.addAlternate(t,e,r,n);case"dlig":case"liga":case"rlig":return this.addLigature(t,e,r,n);case"ccmp":return e.by instanceof Array?this.addMultiple(t,e,r,n):this.addLigature(t,e,r,n)}};function Lh(){return typeof window<"u"}function Ws(t){for(var e=new ArrayBuffer(t.length),r=new Uint8Array(e),n=0;n<t.length;++n)r[n]=t[n];return e}function hh(t){for(var e=new Buffer(t.byteLength),r=new Uint8Array(t),n=0;n<e.length;++n)e[n]=r[n];return e}function Ia(t,e){if(!t)throw e}function PA(t,e,r,n,a){var o;return(e&n)>0?(o=t.parseByte(),e&a||(o=-o),o=r+o):(e&a)>0?o=r:o=r+t.parseShort(),o}function ks(t,e,r){var n=new ye.Parser(e,r);t.numberOfContours=n.parseShort(),t._xMin=n.parseShort(),t._yMin=n.parseShort(),t._xMax=n.parseShort(),t._yMax=n.parseShort();var a,o;if(t.numberOfContours>0){for(var s=t.endPointIndices=[],x=0;x<t.numberOfContours;x+=1)s.push(n.parseUShort());t.instructionLength=n.parseUShort(),t.instructions=[];for(var E=0;E<t.instructionLength;E+=1)t.instructions.push(n.parseByte());var T=s[s.length-1]+1;a=[];for(var d=0;d<T;d+=1)if(o=n.parseByte(),a.push(o),(o&8)>0)for(var g=n.parseByte(),y=0;y<g;y+=1)a.push(o),d+=1;if(Ge.argument(a.length===T,"Bad flags."),s.length>0){var C=[],k;if(T>0){for(var Y=0;Y<T;Y+=1)o=a[Y],k={},k.onCurve=!!(o&1),k.lastPointOfContour=s.indexOf(Y)>=0,C.push(k);for(var _=0,V=0;V<T;V+=1)o=a[V],k=C[V],k.x=PA(n,o,_,2,16),_=k.x;for(var ee=0,q=0;q<T;q+=1)o=a[q],k=C[q],k.y=PA(n,o,ee,4,32),ee=k.y}t.points=C}else t.points=[]}else if(t.numberOfContours===0)t.points=[];else{t.isComposite=!0,t.points=[],t.components=[];for(var he=!0;he;){a=n.parseUShort();var ce={glyphIndex:n.parseUShort(),xScale:1,scale01:0,scale10:0,yScale:1,dx:0,dy:0};(a&1)>0?(a&2)>0?(ce.dx=n.parseShort(),ce.dy=n.parseShort()):ce.matchedPoints=[n.parseUShort(),n.parseUShort()]:(a&2)>0?(ce.dx=n.parseChar(),ce.dy=n.parseChar()):ce.matchedPoints=[n.parseByte(),n.parseByte()],(a&8)>0?ce.xScale=ce.yScale=n.parseF2Dot14():(a&64)>0?(ce.xScale=n.parseF2Dot14(),ce.yScale=n.parseF2Dot14()):(a&128)>0&&(ce.xScale=n.parseF2Dot14(),ce.scale01=n.parseF2Dot14(),ce.scale10=n.parseF2Dot14(),ce.yScale=n.parseF2Dot14()),t.components.push(ce),he=!!(a&32)}if(a&256){t.instructionLength=n.parseUShort(),t.instructions=[];for(var oe=0;oe<t.instructionLength;oe+=1)t.instructions.push(n.parseByte())}}}function u0(t,e){for(var r=[],n=0;n<t.length;n+=1){var a=t[n],o={x:e.xScale*a.x+e.scale01*a.y+e.dx,y:e.scale10*a.x+e.yScale*a.y+e.dy,onCurve:a.onCurve,lastPointOfContour:a.lastPointOfContour};r.push(o)}return r}function ch(t){for(var e=[],r=[],n=0;n<t.length;n+=1){var a=t[n];r.push(a),a.lastPointOfContour&&(e.push(r),r=[])}return Ge.argument(r.length===0,"There are still points left in the current contour."),e}function Ks(t){var e=new Mt;if(!t)return e;for(var r=ch(t),n=0;n<r.length;++n){var a=r[n],o=null,s=a[a.length-1],x=a[0];if(s.onCurve)e.moveTo(s.x,s.y);else if(x.onCurve)e.moveTo(x.x,x.y);else{var E={x:(s.x+x.x)*.5,y:(s.y+x.y)*.5};e.moveTo(E.x,E.y)}for(var T=0;T<a.length;++T)if(o=s,s=x,x=a[(T+1)%a.length],s.onCurve)e.lineTo(s.x,s.y);else{var d=x;o.onCurve||((s.x+o.x)*.5,(s.y+o.y)*.5),x.onCurve||(d={x:(s.x+x.x)*.5,y:(s.y+x.y)*.5}),e.quadraticCurveTo(s.x,s.y,d.x,d.y)}e.closePath()}return e}function Vs(t,e){if(e.isComposite)for(var r=0;r<e.components.length;r+=1){var n=e.components[r],a=t.get(n.glyphIndex);if(a.getPath(),a.points){var o=void 0;if(n.matchedPoints===void 0)o=u0(a.points,n);else{if(n.matchedPoints[0]>e.points.length-1||n.matchedPoints[1]>a.points.length-1)throw Error("Matched points out of range in "+e.name);var s=e.points[n.matchedPoints[0]],x=a.points[n.matchedPoints[1]],E={xScale:n.xScale,scale01:n.scale01,scale10:n.scale10,yScale:n.yScale,dx:0,dy:0};x=u0([x],E)[0],E.dx=s.x-x.x,E.dy=s.y-x.y,o=u0(a.points,E)}e.points=e.points.concat(o)}}return Ks(e.points)}function Th(t,e,r,n){for(var a=new wr.GlyphSet(n),o=0;o<r.length-1;o+=1){var s=r[o],x=r[o+1];s!==x?a.push(o,wr.ttfGlyphLoader(n,o,ks,t,e+s,Vs)):a.push(o,wr.glyphLoader(n,o))}return a}function Ih(t,e,r,n){var a=new wr.GlyphSet(n);return n._push=function(o){var s=r[o],x=r[o+1];s!==x?a.push(o,wr.ttfGlyphLoader(n,o,ks,t,e+s,Vs)):a.push(o,wr.glyphLoader(n,o))},a}function dh(t,e,r,n,a){return a.lowMemory?Ih(t,e,r,n):Th(t,e,r,n)}var _s={getPath:Ks,parse:dh},Js,Gn,zs,ro;function Zs(t){this.font=t,this.getCommands=function(e){return _s.getPath(e).commands},this._fpgmState=this._prepState=void 0,this._errorState=0}function uh(t){return t}function Xs(t){return Math.sign(t)*Math.round(Math.abs(t))}function ph(t){return Math.sign(t)*Math.round(Math.abs(t*2))/2}function Sh(t){return Math.sign(t)*(Math.round(Math.abs(t)+.5)-.5)}function Ch(t){return Math.sign(t)*Math.ceil(Math.abs(t))}function gh(t){return Math.sign(t)*Math.floor(Math.abs(t))}var js=function(t){var e=this.srPeriod,r=this.srPhase,n=this.srThreshold,a=1;return t<0&&(t=-t,a=-1),t+=n-r,t=Math.trunc(t/e)*e,t+=r,t<0?r*a:t*a},Ur={x:1,y:0,axis:"x",distance:function(t,e,r,n){return(r?t.xo:t.x)-(n?e.xo:e.x)},interpolate:function(t,e,r,n){var a,o,s,x,E,T,d;if(!n||n===this){if(a=t.xo-e.xo,o=t.xo-r.xo,E=e.x-e.xo,T=r.x-r.xo,s=Math.abs(a),x=Math.abs(o),d=s+x,d===0){t.x=t.xo+(E+T)/2;return}t.x=t.xo+(E*x+T*s)/d;return}if(a=n.distance(t,e,!0,!0),o=n.distance(t,r,!0,!0),E=n.distance(e,e,!1,!0),T=n.distance(r,r,!1,!0),s=Math.abs(a),x=Math.abs(o),d=s+x,d===0){Ur.setRelative(t,t,(E+T)/2,n,!0);return}Ur.setRelative(t,t,(E*x+T*s)/d,n,!0)},normalSlope:Number.NEGATIVE_INFINITY,setRelative:function(t,e,r,n,a){if(!n||n===this){t.x=(a?e.xo:e.x)+r;return}var o=a?e.xo:e.x,s=a?e.yo:e.y,x=o+r*n.x,E=s+r*n.y;t.x=x+(t.y-E)/n.normalSlope},slope:0,touch:function(t){t.xTouched=!0},touched:function(t){return t.xTouched},untouch:function(t){t.xTouched=!1}},Jr={x:0,y:1,axis:"y",distance:function(t,e,r,n){return(r?t.yo:t.y)-(n?e.yo:e.y)},interpolate:function(t,e,r,n){var a,o,s,x,E,T,d;if(!n||n===this){if(a=t.yo-e.yo,o=t.yo-r.yo,E=e.y-e.yo,T=r.y-r.yo,s=Math.abs(a),x=Math.abs(o),d=s+x,d===0){t.y=t.yo+(E+T)/2;return}t.y=t.yo+(E*x+T*s)/d;return}if(a=n.distance(t,e,!0,!0),o=n.distance(t,r,!0,!0),E=n.distance(e,e,!1,!0),T=n.distance(r,r,!1,!0),s=Math.abs(a),x=Math.abs(o),d=s+x,d===0){Jr.setRelative(t,t,(E+T)/2,n,!0);return}Jr.setRelative(t,t,(E*x+T*s)/d,n,!0)},normalSlope:0,setRelative:function(t,e,r,n,a){if(!n||n===this){t.y=(a?e.yo:e.y)+r;return}var o=a?e.xo:e.x,s=a?e.yo:e.y,x=o+r*n.x,E=s+r*n.y;t.y=E+n.normalSlope*(t.x-x)},slope:Number.POSITIVE_INFINITY,touch:function(t){t.yTouched=!0},touched:function(t){return t.yTouched},untouch:function(t){t.yTouched=!1}};Object.freeze(Ur);Object.freeze(Jr);function za(t,e){this.x=t,this.y=e,this.axis=void 0,this.slope=e/t,this.normalSlope=-t/e,Object.freeze(this)}za.prototype.distance=function(t,e,r,n){return this.x*Ur.distance(t,e,r,n)+this.y*Jr.distance(t,e,r,n)};za.prototype.interpolate=function(t,e,r,n){var a,o,s,x,E,T,d;if(s=n.distance(t,e,!0,!0),x=n.distance(t,r,!0,!0),a=n.distance(e,e,!1,!0),o=n.distance(r,r,!1,!0),E=Math.abs(s),T=Math.abs(x),d=E+T,d===0){this.setRelative(t,t,(a+o)/2,n,!0);return}this.setRelative(t,t,(a*T+o*E)/d,n,!0)};za.prototype.setRelative=function(t,e,r,n,a){n=n||this;var o=a?e.xo:e.x,s=a?e.yo:e.y,x=o+r*n.x,E=s+r*n.y,T=n.normalSlope,d=this.slope,g=t.x,y=t.y;t.x=(d*g-T*x+E-y)/(d-T),t.y=d*(t.x-g)+y};za.prototype.touch=function(t){t.xTouched=!0,t.yTouched=!0};function Za(t,e){var r=Math.sqrt(t*t+e*e);return t/=r,e/=r,t===1&&e===0?Ur:t===0&&e===1?Jr:new za(t,e)}function Zr(t,e,r,n){this.x=this.xo=Math.round(t*64)/64,this.y=this.yo=Math.round(e*64)/64,this.lastPointOfContour=r,this.onCurve=n,this.prevPointOnContour=void 0,this.nextPointOnContour=void 0,this.xTouched=!1,this.yTouched=!1,Object.preventExtensions(this)}Zr.prototype.nextTouched=function(t){for(var e=this.nextPointOnContour;!t.touched(e)&&e!==this;)e=e.nextPointOnContour;return e};Zr.prototype.prevTouched=function(t){for(var e=this.prevPointOnContour;!t.touched(e)&&e!==this;)e=e.prevPointOnContour;return e};var Ga=Object.freeze(new Zr(0,0)),Rh={cvCutIn:17/16,deltaBase:9,deltaShift:.125,loop:1,minDis:1,autoFlip:!0};function hn(t,e){switch(this.env=t,this.stack=[],this.prog=e,t){case"glyf":this.zp0=this.zp1=this.zp2=1,this.rp0=this.rp1=this.rp2=0;case"prep":this.fv=this.pv=this.dpv=Ur,this.round=Xs}}Zs.prototype.exec=function(t,e){if(typeof e!="number")throw new Error("Point size is not a number!");if(!(this._errorState>2)){var r=this.font,n=this._prepState;if(!n||n.ppem!==e){var a=this._fpgmState;if(!a){hn.prototype=Rh,a=this._fpgmState=new hn("fpgm",r.tables.fpgm),a.funcs=[],a.font=r,ie.DEBUG&&(console.log("---EXEC FPGM---"),a.step=-1);try{Gn(a)}catch(T){console.log("Hinting error in FPGM:"+T),this._errorState=3;return}}hn.prototype=a,n=this._prepState=new hn("prep",r.tables.prep),n.ppem=e;var o=r.tables.cvt;if(o)for(var s=n.cvt=new Array(o.length),x=e/r.unitsPerEm,E=0;E<o.length;E++)s[E]=o[E]*x;else n.cvt=[];ie.DEBUG&&(console.log("---EXEC PREP---"),n.step=-1);try{Gn(n)}catch(T){this._errorState<2&&console.log("Hinting error in PREP:"+T),this._errorState=2}}if(!(this._errorState>1))try{return zs(t,n)}catch(T){this._errorState<1&&(console.log("Hinting error:"+T),console.log("Note: further hinting errors are silenced")),this._errorState=1;return}}};zs=function(t,e){var r=e.ppem/e.font.unitsPerEm,n=r,a=t.components,o,s,x;if(hn.prototype=e,!a)x=new hn("glyf",t.instructions),ie.DEBUG&&(console.log("---EXEC GLYPH---"),x.step=-1),ro(t,x,r,n),s=x.gZone;else{var E=e.font;s=[],o=[];for(var T=0;T<a.length;T++){var d=a[T],g=E.glyphs.get(d.glyphIndex);x=new hn("glyf",g.instructions),ie.DEBUG&&(console.log("---EXEC COMP "+T+"---"),x.step=-1),ro(g,x,r,n);for(var y=Math.round(d.dx*r),C=Math.round(d.dy*n),k=x.gZone,Y=x.contours,_=0;_<k.length;_++){var V=k[_];V.xTouched=V.yTouched=!1,V.xo=V.x=V.x+y,V.yo=V.y=V.y+C}var ee=s.length;s.push.apply(s,k);for(var q=0;q<Y.length;q++)o.push(Y[q]+ee)}t.instructions&&!x.inhibitGridFit&&(x=new hn("glyf",t.instructions),x.gZone=x.z0=x.z1=x.z2=s,x.contours=o,s.push(new Zr(0,0),new Zr(Math.round(t.advanceWidth*r),0)),ie.DEBUG&&(console.log("---EXEC COMPOSITE---"),x.step=-1),Gn(x),s.length-=2)}return s};ro=function(t,e,r,n){for(var a=t.points||[],o=a.length,s=e.gZone=e.z0=e.z1=e.z2=[],x=e.contours=[],E,T=0;T<o;T++)E=a[T],s[T]=new Zr(E.x*r,E.y*n,E.lastPointOfContour,E.onCurve);for(var d,g,y=0;y<o;y++)E=s[y],d||(d=E,x.push(y)),E.lastPointOfContour?(E.nextPointOnContour=d,d.prevPointOnContour=E,d=void 0):(g=s[y+1],E.nextPointOnContour=g,g.prevPointOnContour=E);if(!e.inhibitGridFit){if(ie.DEBUG){console.log("PROCESSING GLYPH",e.stack);for(var C=0;C<o;C++)console.log(C,s[C].x,s[C].y)}if(s.push(new Zr(0,0),new Zr(Math.round(t.advanceWidth*r),0)),Gn(e),s.length-=2,ie.DEBUG){console.log("FINISHED GLYPH",e.stack);for(var k=0;k<o;k++)console.log(k,s[k].x,s[k].y)}}};Gn=function(t){var e=t.prog;if(e){var r=e.length,n;for(t.ip=0;t.ip<r;t.ip++){if(ie.DEBUG&&t.step++,n=Js[e[t.ip]],!n)throw new Error("unknown instruction: 0x"+Number(e[t.ip]).toString(16));n(t)}}};function Qi(t){for(var e=t.tZone=new Array(t.gZone.length),r=0;r<e.length;r++)e[r]=new Zr(0,0)}function qs(t,e){var r=t.prog,n=t.ip,a=1,o;do if(o=r[++n],o===88)a++;else if(o===89)a--;else if(o===64)n+=r[n+1]+1;else if(o===65)n+=2*r[n+1]+1;else if(o>=176&&o<=183)n+=o-176+1;else if(o>=184&&o<=191)n+=(o-184+1)*2;else if(e&&a===1&&o===27)break;while(a>0);t.ip=n}function bA(t,e){ie.DEBUG&&console.log(e.step,"SVTCA["+t.axis+"]"),e.fv=e.pv=e.dpv=t}function vA(t,e){ie.DEBUG&&console.log(e.step,"SPVTCA["+t.axis+"]"),e.pv=e.dpv=t}function UA(t,e){ie.DEBUG&&console.log(e.step,"SFVTCA["+t.axis+"]"),e.fv=t}function wA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z2[n],s=e.z1[a];ie.DEBUG&&console.log("SPVTL["+t+"]",n,a);var x,E;t?(x=o.y-s.y,E=s.x-o.x):(x=s.x-o.x,E=s.y-o.y),e.pv=e.dpv=Za(x,E)}function YA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z2[n],s=e.z1[a];ie.DEBUG&&console.log("SFVTL["+t+"]",n,a);var x,E;t?(x=o.y-s.y,E=s.x-o.x):(x=s.x-o.x,E=s.y-o.y),e.fv=Za(x,E)}function yh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"SPVFS[]",r,n),t.pv=t.dpv=Za(n,r)}function mh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"SPVFS[]",r,n),t.fv=Za(n,r)}function Nh(t){var e=t.stack,r=t.pv;ie.DEBUG&&console.log(t.step,"GPV[]"),e.push(r.x*16384),e.push(r.y*16384)}function Dh(t){var e=t.stack,r=t.fv;ie.DEBUG&&console.log(t.step,"GFV[]"),e.push(r.x*16384),e.push(r.y*16384)}function fh(t){t.fv=t.pv,ie.DEBUG&&console.log(t.step,"SFVTPV[]")}function Oh(t){var e=t.stack,r=e.pop(),n=e.pop(),a=e.pop(),o=e.pop(),s=e.pop(),x=t.z0,E=t.z1,T=x[r],d=x[n],g=E[a],y=E[o],C=t.z2[s];ie.DEBUG&&console.log("ISECT[], ",r,n,a,o,s);var k=T.x,Y=T.y,_=d.x,V=d.y,ee=g.x,q=g.y,he=y.x,ce=y.y,oe=(k-_)*(q-ce)-(Y-V)*(ee-he),Te=k*V-Y*_,Ie=ee*ce-q*he;C.x=(Te*(ee-he)-Ie*(k-_))/oe,C.y=(Te*(q-ce)-Ie*(Y-V))/oe}function Bh(t){t.rp0=t.stack.pop(),ie.DEBUG&&console.log(t.step,"SRP0[]",t.rp0)}function Hh(t){t.rp1=t.stack.pop(),ie.DEBUG&&console.log(t.step,"SRP1[]",t.rp1)}function Fh(t){t.rp2=t.stack.pop(),ie.DEBUG&&console.log(t.step,"SRP2[]",t.rp2)}function Mh(t){var e=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"SZP0[]",e),t.zp0=e,e){case 0:t.tZone||Qi(t),t.z0=t.tZone;break;case 1:t.z0=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function Gh(t){var e=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"SZP1[]",e),t.zp1=e,e){case 0:t.tZone||Qi(t),t.z1=t.tZone;break;case 1:t.z1=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function Ph(t){var e=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"SZP2[]",e),t.zp2=e,e){case 0:t.tZone||Qi(t),t.z2=t.tZone;break;case 1:t.z2=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function bh(t){var e=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"SZPS[]",e),t.zp0=t.zp1=t.zp2=e,e){case 0:t.tZone||Qi(t),t.z0=t.z1=t.z2=t.tZone;break;case 1:t.z0=t.z1=t.z2=t.gZone;break;default:throw new Error("Invalid zone pointer")}}function vh(t){t.loop=t.stack.pop(),ie.DEBUG&&console.log(t.step,"SLOOP[]",t.loop)}function Uh(t){ie.DEBUG&&console.log(t.step,"RTG[]"),t.round=Xs}function wh(t){ie.DEBUG&&console.log(t.step,"RTHG[]"),t.round=Sh}function Yh(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SMD[]",e),t.minDis=e/64}function Wh(t){ie.DEBUG&&console.log(t.step,"ELSE[]"),qs(t,!1)}function kh(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"JMPR[]",e),t.ip+=e-1}function Kh(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SCVTCI[]",e),t.cvCutIn=e/64}function Vh(t){var e=t.stack;ie.DEBUG&&console.log(t.step,"DUP[]"),e.push(e[e.length-1])}function p0(t){ie.DEBUG&&console.log(t.step,"POP[]"),t.stack.pop()}function _h(t){ie.DEBUG&&console.log(t.step,"CLEAR[]"),t.stack.length=0}function Jh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"SWAP[]"),e.push(r),e.push(n)}function zh(t){var e=t.stack;ie.DEBUG&&console.log(t.step,"DEPTH[]"),e.push(e.length)}function Zh(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"LOOPCALL[]",r,n);var a=t.ip,o=t.prog;t.prog=t.funcs[r];for(var s=0;s<n;s++)Gn(t),ie.DEBUG&&console.log(++t.step,s+1<n?"next loopcall":"done loopcall",s);t.ip=a,t.prog=o}function Xh(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"CALL[]",e);var r=t.ip,n=t.prog;t.prog=t.funcs[e],Gn(t),t.ip=r,t.prog=n,ie.DEBUG&&console.log(++t.step,"returning from",e)}function jh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"CINDEX[]",r),e.push(e[e.length-r])}function qh(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"MINDEX[]",r),e.push(e.splice(e.length-r,1)[0])}function Qh(t){if(t.env!=="fpgm")throw new Error("FDEF not allowed here");var e=t.stack,r=t.prog,n=t.ip,a=e.pop(),o=n;for(ie.DEBUG&&console.log(t.step,"FDEF[]",a);r[++n]!==45;);t.ip=n,t.funcs[a]=r.slice(o+1,n)}function WA(t,e){var r=e.stack.pop(),n=e.z0[r],a=e.fv,o=e.pv;ie.DEBUG&&console.log(e.step,"MDAP["+t+"]",r);var s=o.distance(n,Ga);t&&(s=e.round(s)),a.setRelative(n,Ga,s,o),a.touch(n),e.rp0=e.rp1=r}function kA(t,e){var r=e.z2,n=r.length-2,a,o,s;ie.DEBUG&&console.log(e.step,"IUP["+t.axis+"]");for(var x=0;x<n;x++)a=r[x],!t.touched(a)&&(o=a.prevTouched(t),o!==a&&(s=a.nextTouched(t),o===s&&t.setRelative(a,a,t.distance(o,o,!1,!0),t,!0),t.interpolate(a,o,s,t)))}function KA(t,e){for(var r=e.stack,n=t?e.rp1:e.rp2,a=(t?e.z0:e.z1)[n],o=e.fv,s=e.pv,x=e.loop,E=e.z2;x--;){var T=r.pop(),d=E[T],g=s.distance(a,a,!1,!0);o.setRelative(d,d,g,s),o.touch(d),ie.DEBUG&&console.log(e.step,(e.loop>1?"loop "+(e.loop-x)+": ":"")+"SHP["+(t?"rp1":"rp2")+"]",T)}e.loop=1}function VA(t,e){var r=e.stack,n=t?e.rp1:e.rp2,a=(t?e.z0:e.z1)[n],o=e.fv,s=e.pv,x=r.pop(),E=e.z2[e.contours[x]],T=E;ie.DEBUG&&console.log(e.step,"SHC["+t+"]",x);var d=s.distance(a,a,!1,!0);do T!==a&&o.setRelative(T,T,d,s),T=T.nextPointOnContour;while(T!==E)}function _A(t,e){var r=e.stack,n=t?e.rp1:e.rp2,a=(t?e.z0:e.z1)[n],o=e.fv,s=e.pv,x=r.pop();ie.DEBUG&&console.log(e.step,"SHZ["+t+"]",x);var E;switch(x){case 0:E=e.tZone;break;case 1:E=e.gZone;break;default:throw new Error("Invalid zone")}for(var T,d=s.distance(a,a,!1,!0),g=E.length-2,y=0;y<g;y++)T=E[y],o.setRelative(T,T,d,s)}function $h(t){for(var e=t.stack,r=t.loop,n=t.fv,a=e.pop()/64,o=t.z2;r--;){var s=e.pop(),x=o[s];ie.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-r)+": ":"")+"SHPIX[]",s,a),n.setRelative(x,x,a),n.touch(x)}t.loop=1}function ec(t){for(var e=t.stack,r=t.rp1,n=t.rp2,a=t.loop,o=t.z0[r],s=t.z1[n],x=t.fv,E=t.dpv,T=t.z2;a--;){var d=e.pop(),g=T[d];ie.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-a)+": ":"")+"IP[]",d,r,"<->",n),x.interpolate(g,o,s,E),x.touch(g)}t.loop=1}function JA(t,e){var r=e.stack,n=r.pop()/64,a=r.pop(),o=e.z1[a],s=e.z0[e.rp0],x=e.fv,E=e.pv;x.setRelative(o,s,n,E),x.touch(o),ie.DEBUG&&console.log(e.step,"MSIRP["+t+"]",n,a),e.rp1=e.rp0,e.rp2=a,t&&(e.rp0=a)}function tc(t){for(var e=t.stack,r=t.rp0,n=t.z0[r],a=t.loop,o=t.fv,s=t.pv,x=t.z1;a--;){var E=e.pop(),T=x[E];ie.DEBUG&&console.log(t.step,(t.loop>1?"loop "+(t.loop-a)+": ":"")+"ALIGNRP[]",E),o.setRelative(T,n,0,s),o.touch(T)}t.loop=1}function rc(t){ie.DEBUG&&console.log(t.step,"RTDG[]"),t.round=ph}function zA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z0[a],s=e.fv,x=e.pv,E=e.cvt[n];ie.DEBUG&&console.log(e.step,"MIAP["+t+"]",n,"(",E,")",a);var T=x.distance(o,Ga);t&&(Math.abs(T-E)<e.cvCutIn&&(T=E),T=e.round(T)),s.setRelative(o,Ga,T,x),e.zp0===0&&(o.xo=o.x,o.yo=o.y),s.touch(o),e.rp0=e.rp1=a}function nc(t){var e=t.prog,r=t.ip,n=t.stack,a=e[++r];ie.DEBUG&&console.log(t.step,"NPUSHB[]",a);for(var o=0;o<a;o++)n.push(e[++r]);t.ip=r}function ac(t){var e=t.ip,r=t.prog,n=t.stack,a=r[++e];ie.DEBUG&&console.log(t.step,"NPUSHW[]",a);for(var o=0;o<a;o++){var s=r[++e]<<8|r[++e];s&32768&&(s=-((s^65535)+1)),n.push(s)}t.ip=e}function ic(t){var e=t.stack,r=t.store;r||(r=t.store=[]);var n=e.pop(),a=e.pop();ie.DEBUG&&console.log(t.step,"WS",n,a),r[a]=n}function oc(t){var e=t.stack,r=t.store,n=e.pop();ie.DEBUG&&console.log(t.step,"RS",n);var a=r&&r[n]||0;e.push(a)}function Ac(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"WCVTP",r,n),t.cvt[n]=r/64}function sc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"RCVT",r),e.push(t.cvt[r]*64)}function ZA(t,e){var r=e.stack,n=r.pop(),a=e.z2[n];ie.DEBUG&&console.log(e.step,"GC["+t+"]",n),r.push(e.dpv.distance(a,Ga,t,!1)*64)}function XA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z1[n],s=e.z0[a],x=e.dpv.distance(s,o,t,t);ie.DEBUG&&console.log(e.step,"MD["+t+"]",n,a,"->",x),e.stack.push(Math.round(x*64))}function lc(t){ie.DEBUG&&console.log(t.step,"MPPEM[]"),t.stack.push(t.ppem)}function xc(t){ie.DEBUG&&console.log(t.step,"FLIPON[]"),t.autoFlip=!0}function Ec(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"LT[]",r,n),e.push(n<r?1:0)}function Lc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"LTEQ[]",r,n),e.push(n<=r?1:0)}function hc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"GT[]",r,n),e.push(n>r?1:0)}function cc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"GTEQ[]",r,n),e.push(n>=r?1:0)}function Tc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"EQ[]",r,n),e.push(r===n?1:0)}function Ic(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"NEQ[]",r,n),e.push(r!==n?1:0)}function dc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"ODD[]",r),e.push(Math.trunc(r)%2?1:0)}function uc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"EVEN[]",r),e.push(Math.trunc(r)%2?0:1)}function pc(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"IF[]",e),e||(qs(t,!0),ie.DEBUG&&console.log(t.step,"EIF[]"))}function Sc(t){ie.DEBUG&&console.log(t.step,"EIF[]")}function Cc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"AND[]",r,n),e.push(r&&n?1:0)}function gc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"OR[]",r,n),e.push(r||n?1:0)}function Rc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"NOT[]",r),e.push(r?0:1)}function S0(t,e){var r=e.stack,n=r.pop(),a=e.fv,o=e.pv,s=e.ppem,x=e.deltaBase+(t-1)*16,E=e.deltaShift,T=e.z0;ie.DEBUG&&console.log(e.step,"DELTAP["+t+"]",n,r);for(var d=0;d<n;d++){var g=r.pop(),y=r.pop(),C=x+((y&240)>>4);if(C===s){var k=(y&15)-8;k>=0&&k++,ie.DEBUG&&console.log(e.step,"DELTAPFIX",g,"by",k*E);var Y=T[g];a.setRelative(Y,Y,k*E,o)}}}function yc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"SDB[]",r),t.deltaBase=r}function mc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"SDS[]",r),t.deltaShift=Math.pow(.5,r)}function Nc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"ADD[]",r,n),e.push(n+r)}function Dc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"SUB[]",r,n),e.push(n-r)}function fc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"DIV[]",r,n),e.push(n*64/r)}function Oc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"MUL[]",r,n),e.push(n*r/64)}function Bc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"ABS[]",r),e.push(Math.abs(r))}function Hc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"NEG[]",r),e.push(-r)}function Fc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"FLOOR[]",r),e.push(Math.floor(r/64)*64)}function Mc(t){var e=t.stack,r=e.pop();ie.DEBUG&&console.log(t.step,"CEILING[]",r),e.push(Math.ceil(r/64)*64)}function ci(t,e){var r=e.stack,n=r.pop();ie.DEBUG&&console.log(e.step,"ROUND[]"),r.push(e.round(n/64)*64)}function Gc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"WCVTF[]",r,n),t.cvt[n]=r*t.ppem/t.font.unitsPerEm}function C0(t,e){var r=e.stack,n=r.pop(),a=e.ppem,o=e.deltaBase+(t-1)*16,s=e.deltaShift;ie.DEBUG&&console.log(e.step,"DELTAC["+t+"]",n,r);for(var x=0;x<n;x++){var E=r.pop(),T=r.pop(),d=o+((T&240)>>4);if(d===a){var g=(T&15)-8;g>=0&&g++;var y=g*s;ie.DEBUG&&console.log(e.step,"DELTACFIX",E,"by",y),e.cvt[E]+=y}}}function Pc(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SROUND[]",e),t.round=js;var r;switch(e&192){case 0:r=.5;break;case 64:r=1;break;case 128:r=2;break;default:throw new Error("invalid SROUND value")}switch(t.srPeriod=r,e&48){case 0:t.srPhase=0;break;case 16:t.srPhase=.25*r;break;case 32:t.srPhase=.5*r;break;case 48:t.srPhase=.75*r;break;default:throw new Error("invalid SROUND value")}e&=15,e===0?t.srThreshold=0:t.srThreshold=(e/8-.5)*r}function bc(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"S45ROUND[]",e),t.round=js;var r;switch(e&192){case 0:r=Math.sqrt(2)/2;break;case 64:r=Math.sqrt(2);break;case 128:r=2*Math.sqrt(2);break;default:throw new Error("invalid S45ROUND value")}switch(t.srPeriod=r,e&48){case 0:t.srPhase=0;break;case 16:t.srPhase=.25*r;break;case 32:t.srPhase=.5*r;break;case 48:t.srPhase=.75*r;break;default:throw new Error("invalid S45ROUND value")}e&=15,e===0?t.srThreshold=0:t.srThreshold=(e/8-.5)*r}function vc(t){ie.DEBUG&&console.log(t.step,"ROFF[]"),t.round=uh}function Uc(t){ie.DEBUG&&console.log(t.step,"RUTG[]"),t.round=Ch}function wc(t){ie.DEBUG&&console.log(t.step,"RDTG[]"),t.round=gh}function Yc(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SCANCTRL[]",e)}function jA(t,e){var r=e.stack,n=r.pop(),a=r.pop(),o=e.z2[n],s=e.z1[a];ie.DEBUG&&console.log(e.step,"SDPVTL["+t+"]",n,a);var x,E;t?(x=o.y-s.y,E=s.x-o.x):(x=s.x-o.x,E=s.y-o.y),e.dpv=Za(x,E)}function Wc(t){var e=t.stack,r=e.pop(),n=0;ie.DEBUG&&console.log(t.step,"GETINFO[]",r),r&1&&(n=35),r&32&&(n|=4096),e.push(n)}function kc(t){var e=t.stack,r=e.pop(),n=e.pop(),a=e.pop();ie.DEBUG&&console.log(t.step,"ROLL[]"),e.push(n),e.push(r),e.push(a)}function Kc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"MAX[]",r,n),e.push(Math.max(n,r))}function Vc(t){var e=t.stack,r=e.pop(),n=e.pop();ie.DEBUG&&console.log(t.step,"MIN[]",r,n),e.push(Math.min(n,r))}function _c(t){var e=t.stack.pop();ie.DEBUG&&console.log(t.step,"SCANTYPE[]",e)}function Jc(t){var e=t.stack.pop(),r=t.stack.pop();switch(ie.DEBUG&&console.log(t.step,"INSTCTRL[]",e,r),e){case 1:t.inhibitGridFit=!!r;return;case 2:t.ignoreCvt=!!r;return;default:throw new Error("invalid INSTCTRL[] selector")}}function sn(t,e){var r=e.stack,n=e.prog,a=e.ip;ie.DEBUG&&console.log(e.step,"PUSHB["+t+"]");for(var o=0;o<t;o++)r.push(n[++a]);e.ip=a}function ln(t,e){var r=e.ip,n=e.prog,a=e.stack;ie.DEBUG&&console.log(e.ip,"PUSHW["+t+"]");for(var o=0;o<t;o++){var s=n[++r]<<8|n[++r];s&32768&&(s=-((s^65535)+1)),a.push(s)}e.ip=r}function Re(t,e,r,n,a,o){var s=o.stack,x=t&&s.pop(),E=s.pop(),T=o.rp0,d=o.z0[T],g=o.z1[E],y=o.minDis,C=o.fv,k=o.dpv,Y,_,V,ee;_=Y=k.distance(g,d,!0,!0),V=_>=0?1:-1,_=Math.abs(_),t&&(ee=o.cvt[x],n&&Math.abs(_-ee)<o.cvCutIn&&(_=ee)),r&&_<y&&(_=y),n&&(_=o.round(_)),C.setRelative(g,d,V*_,k),C.touch(g),ie.DEBUG&&console.log(o.step,(t?"MIRP[":"MDRP[")+(e?"M":"m")+(r?">":"_")+(n?"R":"_")+(a===0?"Gr":a===1?"Bl":a===2?"Wh":"")+"]",t?x+"("+o.cvt[x]+","+ee+")":"",E,"(d =",Y,"->",V*_,")"),o.rp1=o.rp0,o.rp2=E,e&&(o.rp0=E)}Js=[bA.bind(void 0,Jr),bA.bind(void 0,Ur),vA.bind(void 0,Jr),vA.bind(void 0,Ur),UA.bind(void 0,Jr),UA.bind(void 0,Ur),wA.bind(void 0,0),wA.bind(void 0,1),YA.bind(void 0,0),YA.bind(void 0,1),yh,mh,Nh,Dh,fh,Oh,Bh,Hh,Fh,Mh,Gh,Ph,bh,vh,Uh,wh,Yh,Wh,kh,Kh,void 0,void 0,Vh,p0,_h,Jh,zh,jh,qh,void 0,void 0,void 0,Zh,Xh,Qh,void 0,WA.bind(void 0,0),WA.bind(void 0,1),kA.bind(void 0,Jr),kA.bind(void 0,Ur),KA.bind(void 0,0),KA.bind(void 0,1),VA.bind(void 0,0),VA.bind(void 0,1),_A.bind(void 0,0),_A.bind(void 0,1),$h,ec,JA.bind(void 0,0),JA.bind(void 0,1),tc,rc,zA.bind(void 0,0),zA.bind(void 0,1),nc,ac,ic,oc,Ac,sc,ZA.bind(void 0,0),ZA.bind(void 0,1),void 0,XA.bind(void 0,0),XA.bind(void 0,1),lc,void 0,xc,void 0,void 0,Ec,Lc,hc,cc,Tc,Ic,dc,uc,pc,Sc,Cc,gc,Rc,S0.bind(void 0,1),yc,mc,Nc,Dc,fc,Oc,Bc,Hc,Fc,Mc,ci.bind(void 0,0),ci.bind(void 0,1),ci.bind(void 0,2),ci.bind(void 0,3),void 0,void 0,void 0,void 0,Gc,S0.bind(void 0,2),S0.bind(void 0,3),C0.bind(void 0,1),C0.bind(void 0,2),C0.bind(void 0,3),Pc,bc,void 0,void 0,vc,void 0,Uc,wc,p0,p0,void 0,void 0,void 0,void 0,void 0,Yc,jA.bind(void 0,0),jA.bind(void 0,1),Wc,void 0,kc,Kc,Vc,_c,Jc,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,void 0,sn.bind(void 0,1),sn.bind(void 0,2),sn.bind(void 0,3),sn.bind(void 0,4),sn.bind(void 0,5),sn.bind(void 0,6),sn.bind(void 0,7),sn.bind(void 0,8),ln.bind(void 0,1),ln.bind(void 0,2),ln.bind(void 0,3),ln.bind(void 0,4),ln.bind(void 0,5),ln.bind(void 0,6),ln.bind(void 0,7),ln.bind(void 0,8),Re.bind(void 0,0,0,0,0,0),Re.bind(void 0,0,0,0,0,1),Re.bind(void 0,0,0,0,0,2),Re.bind(void 0,0,0,0,0,3),Re.bind(void 0,0,0,0,1,0),Re.bind(void 0,0,0,0,1,1),Re.bind(void 0,0,0,0,1,2),Re.bind(void 0,0,0,0,1,3),Re.bind(void 0,0,0,1,0,0),Re.bind(void 0,0,0,1,0,1),Re.bind(void 0,0,0,1,0,2),Re.bind(void 0,0,0,1,0,3),Re.bind(void 0,0,0,1,1,0),Re.bind(void 0,0,0,1,1,1),Re.bind(void 0,0,0,1,1,2),Re.bind(void 0,0,0,1,1,3),Re.bind(void 0,0,1,0,0,0),Re.bind(void 0,0,1,0,0,1),Re.bind(void 0,0,1,0,0,2),Re.bind(void 0,0,1,0,0,3),Re.bind(void 0,0,1,0,1,0),Re.bind(void 0,0,1,0,1,1),Re.bind(void 0,0,1,0,1,2),Re.bind(void 0,0,1,0,1,3),Re.bind(void 0,0,1,1,0,0),Re.bind(void 0,0,1,1,0,1),Re.bind(void 0,0,1,1,0,2),Re.bind(void 0,0,1,1,0,3),Re.bind(void 0,0,1,1,1,0),Re.bind(void 0,0,1,1,1,1),Re.bind(void 0,0,1,1,1,2),Re.bind(void 0,0,1,1,1,3),Re.bind(void 0,1,0,0,0,0),Re.bind(void 0,1,0,0,0,1),Re.bind(void 0,1,0,0,0,2),Re.bind(void 0,1,0,0,0,3),Re.bind(void 0,1,0,0,1,0),Re.bind(void 0,1,0,0,1,1),Re.bind(void 0,1,0,0,1,2),Re.bind(void 0,1,0,0,1,3),Re.bind(void 0,1,0,1,0,0),Re.bind(void 0,1,0,1,0,1),Re.bind(void 0,1,0,1,0,2),Re.bind(void 0,1,0,1,0,3),Re.bind(void 0,1,0,1,1,0),Re.bind(void 0,1,0,1,1,1),Re.bind(void 0,1,0,1,1,2),Re.bind(void 0,1,0,1,1,3),Re.bind(void 0,1,1,0,0,0),Re.bind(void 0,1,1,0,0,1),Re.bind(void 0,1,1,0,0,2),Re.bind(void 0,1,1,0,0,3),Re.bind(void 0,1,1,0,1,0),Re.bind(void 0,1,1,0,1,1),Re.bind(void 0,1,1,0,1,2),Re.bind(void 0,1,1,0,1,3),Re.bind(void 0,1,1,1,0,0),Re.bind(void 0,1,1,1,0,1),Re.bind(void 0,1,1,1,0,2),Re.bind(void 0,1,1,1,0,3),Re.bind(void 0,1,1,1,1,0),Re.bind(void 0,1,1,1,1,1),Re.bind(void 0,1,1,1,1,2),Re.bind(void 0,1,1,1,1,3)];function Ea(t){this.char=t,this.state={},this.activeState=null}function Mo(t,e,r){this.contextName=r,this.startIndex=t,this.endOffset=e}function zc(t,e,r){this.contextName=t,this.openRange=null,this.ranges=[],this.checkStart=e,this.checkEnd=r}function mr(t,e){this.context=t,this.index=e,this.length=t.length,this.current=t[e],this.backtrack=t.slice(0,e),this.lookahead=t.slice(e+1)}function $i(t){this.eventId=t,this.subscribers=[]}function Zc(t){var e=this,r=["start","end","next","newToken","contextStart","contextEnd","insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD","updateContextsRanges"];r.forEach(function(a){Object.defineProperty(e.events,a,{value:new $i(a)})}),t&&r.forEach(function(a){var o=t[a];typeof o=="function"&&e.events[a].subscribe(o)});var n=["insertToken","removeToken","removeRange","replaceToken","replaceRange","composeRUD"];n.forEach(function(a){e.events[a].subscribe(e.updateContextsRanges)})}function yt(t){this.tokens=[],this.registeredContexts={},this.contextCheckers=[],this.events={},this.registeredModifiers=[],Zc.call(this,t)}Ea.prototype.setState=function(t,e){return this.state[t]=e,this.activeState={key:t,value:this.state[t]},this.activeState};Ea.prototype.getState=function(t){return this.state[t]||null};yt.prototype.inboundIndex=function(t){return t>=0&&t<this.tokens.length};yt.prototype.composeRUD=function(t){var e=this,r=!0,n=t.map(function(o){return e[o[0]].apply(e,o.slice(1).concat(r))}),a=function(o){return typeof o=="object"&&o.hasOwnProperty("FAIL")};if(n.every(a))return{FAIL:"composeRUD: one or more operations hasn't completed successfully",report:n.filter(a)};this.dispatch("composeRUD",[n.filter(function(o){return!a(o)})])};yt.prototype.replaceRange=function(t,e,r,n){e=e!==null?e:this.tokens.length;var a=r.every(function(s){return s instanceof Ea});if(!isNaN(t)&&this.inboundIndex(t)&&a){var o=this.tokens.splice.apply(this.tokens,[t,e].concat(r));return n||this.dispatch("replaceToken",[t,e,r]),[o,r]}else return{FAIL:"replaceRange: invalid tokens or startIndex."}};yt.prototype.replaceToken=function(t,e,r){if(!isNaN(t)&&this.inboundIndex(t)&&e instanceof Ea){var n=this.tokens.splice(t,1,e);return r||this.dispatch("replaceToken",[t,e]),[n[0],e]}else return{FAIL:"replaceToken: invalid token or index."}};yt.prototype.removeRange=function(t,e,r){e=isNaN(e)?this.tokens.length:e;var n=this.tokens.splice(t,e);return r||this.dispatch("removeRange",[n,t,e]),n};yt.prototype.removeToken=function(t,e){if(!isNaN(t)&&this.inboundIndex(t)){var r=this.tokens.splice(t,1);return e||this.dispatch("removeToken",[r,t]),r}else return{FAIL:"removeToken: invalid token index."}};yt.prototype.insertToken=function(t,e,r){var n=t.every(function(a){return a instanceof Ea});return n?(this.tokens.splice.apply(this.tokens,[e,0].concat(t)),r||this.dispatch("insertToken",[t,e]),t):{FAIL:"insertToken: invalid token(s)."}};yt.prototype.registerModifier=function(t,e,r){this.events.newToken.subscribe(function(n,a){var o=[n,a],s=e===null||e.apply(this,o)===!0,x=[n,a];if(s){var E=r.apply(this,x);n.setState(t,E)}}),this.registeredModifiers.push(t)};$i.prototype.subscribe=function(t){return typeof t=="function"?this.subscribers.push(t)-1:{FAIL:"invalid '"+this.eventId+"' event handler"}};$i.prototype.unsubscribe=function(t){this.subscribers.splice(t,1)};mr.prototype.setCurrentIndex=function(t){this.index=t,this.current=this.context[t],this.backtrack=this.context.slice(0,t),this.lookahead=this.context.slice(t+1)};mr.prototype.get=function(t){switch(!0){case t===0:return this.current;case(t<0&&Math.abs(t)<=this.backtrack.length):return this.backtrack.slice(t)[0];case(t>0&&t<=this.lookahead.length):return this.lookahead[t-1];default:return null}};yt.prototype.rangeToText=function(t){if(t instanceof Mo)return this.getRangeTokens(t).map(function(e){return e.char}).join("")};yt.prototype.getText=function(){return this.tokens.map(function(t){return t.char}).join("")};yt.prototype.getContext=function(t){var e=this.registeredContexts[t];return e||null};yt.prototype.on=function(t,e){var r=this.events[t];return r?r.subscribe(e):null};yt.prototype.dispatch=function(t,e){var r=this,n=this.events[t];n instanceof $i&&n.subscribers.forEach(function(a){a.apply(r,e||[])})};yt.prototype.registerContextChecker=function(t,e,r){if(this.getContext(t))return{FAIL:"context name '"+t+"' is already registered."};if(typeof e!="function")return{FAIL:"missing context start check."};if(typeof r!="function")return{FAIL:"missing context end check."};var n=new zc(t,e,r);return this.registeredContexts[t]=n,this.contextCheckers.push(n),n};yt.prototype.getRangeTokens=function(t){var e=t.startIndex+t.endOffset;return[].concat(this.tokens.slice(t.startIndex,e))};yt.prototype.getContextRanges=function(t){var e=this.getContext(t);return e?e.ranges:{FAIL:"context checker '"+t+"' is not registered."}};yt.prototype.resetContextsRanges=function(){var t=this.registeredContexts;for(var e in t)if(t.hasOwnProperty(e)){var r=t[e];r.ranges=[]}};yt.prototype.updateContextsRanges=function(){this.resetContextsRanges();for(var t=this.tokens.map(function(n){return n.char}),e=0;e<t.length;e++){var r=new mr(t,e);this.runContextCheck(r)}this.dispatch("updateContextsRanges",[this.registeredContexts])};yt.prototype.setEndOffset=function(t,e){var r=this.getContext(e).openRange.startIndex,n=new Mo(r,t,e),a=this.getContext(e).ranges;return n.rangeId=e+"."+a.length,a.push(n),this.getContext(e).openRange=null,n};yt.prototype.runContextCheck=function(t){var e=this,r=t.index;this.contextCheckers.forEach(function(n){var a=n.contextName,o=e.getContext(a).openRange;if(!o&&n.checkStart(t)&&(o=new Mo(r,null,a),e.getContext(a).openRange=o,e.dispatch("contextStart",[a,r])),o&&n.checkEnd(t)){var s=r-o.startIndex+1,x=e.setEndOffset(s,a);e.dispatch("contextEnd",[a,x])}})};yt.prototype.tokenize=function(t){this.tokens=[],this.resetContextsRanges();var e=Array.from(t);this.dispatch("start");for(var r=0;r<e.length;r++){var n=e[r],a=new mr(e,r);this.dispatch("next",[a]),this.runContextCheck(a);var o=new Ea(n);this.tokens.push(o),this.dispatch("newToken",[o,a])}return this.dispatch("end",[this.tokens]),this.tokens};function In(t){return/[\u0600-\u065F\u066A-\u06D2\u06FA-\u06FF]/.test(t)}function Qs(t){return/[\u0630\u0690\u0621\u0631\u0661\u0671\u0622\u0632\u0672\u0692\u06C2\u0623\u0673\u0693\u06C3\u0624\u0694\u06C4\u0625\u0675\u0695\u06C5\u06E5\u0676\u0696\u06C6\u0627\u0677\u0697\u06C7\u0648\u0688\u0698\u06C8\u0689\u0699\u06C9\u068A\u06CA\u066B\u068B\u06CB\u068C\u068D\u06CD\u06FD\u068E\u06EE\u06FE\u062F\u068F\u06CF\u06EF]/.test(t)}function Sn(t){return/[\u0600-\u0605\u060C-\u060E\u0610-\u061B\u061E\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED]/.test(t)}function gi(t){return/[A-z]/.test(t)}function Xc(t){return/\s/.test(t)}function cr(t){this.font=t,this.features={}}function On(t){this.id=t.id,this.tag=t.tag,this.substitution=t.substitution}function Xa(t,e){if(!t)return-1;switch(e.format){case 1:return e.glyphs.indexOf(t);case 2:for(var r=e.ranges,n=0;n<r.length;n++){var a=r[n];if(t>=a.start&&t<=a.end){var o=t-a.start;return a.index+o}}break;default:return-1}return-1}function jc(t,e){var r=Xa(t,e.coverage);return r===-1?null:t+e.deltaGlyphId}function qc(t,e){var r=Xa(t,e.coverage);return r===-1?null:e.substitute[r]}function g0(t,e){for(var r=[],n=0;n<t.length;n++){var a=t[n],o=e.current;o=Array.isArray(o)?o[0]:o;var s=Xa(o,a);s!==-1&&r.push(s)}return r.length!==t.length?-1:r}function Qc(t,e){var r=e.inputCoverage.length+e.lookaheadCoverage.length+e.backtrackCoverage.length;if(t.context.length<r)return[];var n=g0(e.inputCoverage,t);if(n===-1)return[];var a=e.inputCoverage.length-1;if(t.lookahead.length<e.lookaheadCoverage.length)return[];for(var o=t.lookahead.slice(a);o.length&&Sn(o[0].char);)o.shift();var s=new mr(o,0),x=g0(e.lookaheadCoverage,s),E=[].concat(t.backtrack);for(E.reverse();E.length&&Sn(E[0].char);)E.shift();if(E.length<e.backtrackCoverage.length)return[];var T=new mr(E,0),d=g0(e.backtrackCoverage,T),g=n.length===e.inputCoverage.length&&x.length===e.lookaheadCoverage.length&&d.length===e.backtrackCoverage.length,y=[];if(g)for(var C=0;C<e.lookupRecords.length;C++)for(var k=e.lookupRecords[C],Y=k.lookupListIndex,_=this.getLookupByIndex(Y),V=0;V<_.subtables.length;V++){var ee=_.subtables[V],q=this.getLookupMethod(_,ee),he=this.getSubstitutionType(_,ee);if(he==="12")for(var ce=0;ce<n.length;ce++){var oe=t.get(ce),Te=q(oe);Te&&y.push(Te)}}return y}function $c(t,e){var r=t.current,n=Xa(r,e.coverage);if(n===-1)return null;for(var a,o=e.ligatureSets[n],s=0;s<o.length;s++){a=o[s];for(var x=0;x<a.components.length;x++){var E=t.lookahead[x],T=a.components[x];if(E!==T)break;if(x===a.components.length-1)return a}}return null}function eT(t,e){var r=Xa(t,e.coverage);return r===-1?null:e.sequences[r]}cr.prototype.getDefaultScriptFeaturesIndexes=function(){for(var t=this.font.tables.gsub.scripts,e=0;e<t.length;e++){var r=t[e];if(r.tag==="DFLT")return r.script.defaultLangSys.featureIndexes}return[]};cr.prototype.getScriptFeaturesIndexes=function(t){var e=this.font.tables;if(!e.gsub)return[];if(!t)return this.getDefaultScriptFeaturesIndexes();for(var r=this.font.tables.gsub.scripts,n=0;n<r.length;n++){var a=r[n];if(a.tag===t&&a.script.defaultLangSys)return a.script.defaultLangSys.featureIndexes;var o=a.langSysRecords;if(o)for(var s=0;s<o.length;s++){var x=o[s];if(x.tag===t){var E=x.langSys;return E.featureIndexes}}}return this.getDefaultScriptFeaturesIndexes()};cr.prototype.mapTagsToFeatures=function(t,e){for(var r={},n=0;n<t.length;n++){var a=t[n].tag,o=t[n].feature;r[a]=o}this.features[e].tags=r};cr.prototype.getScriptFeatures=function(t){var e=this.features[t];if(this.features.hasOwnProperty(t))return e;var r=this.getScriptFeaturesIndexes(t);if(!r)return null;var n=this.font.tables.gsub;return e=r.map(function(a){return n.features[a]}),this.features[t]=e,this.mapTagsToFeatures(e,t),e};cr.prototype.getSubstitutionType=function(t,e){var r=t.lookupType.toString(),n=e.substFormat.toString();return r+n};cr.prototype.getLookupMethod=function(t,e){var r=this,n=this.getSubstitutionType(t,e);switch(n){case"11":return function(a){return jc.apply(r,[a,e])};case"12":return function(a){return qc.apply(r,[a,e])};case"63":return function(a){return Qc.apply(r,[a,e])};case"41":return function(a){return $c.apply(r,[a,e])};case"21":return function(a){return eT.apply(r,[a,e])};default:throw new Error("lookupType: "+t.lookupType+" - substFormat: "+e.substFormat+" is not yet supported")}};cr.prototype.lookupFeature=function(t){var e=t.contextParams,r=e.index,n=this.getFeature({tag:t.tag,script:t.script});if(!n)return new Error("font '"+this.font.names.fullName.en+"' doesn't support feature '"+t.tag+"' for script '"+t.script+"'.");for(var a=this.getFeatureLookups(n),o=[].concat(e.context),s=0;s<a.length;s++)for(var x=a[s],E=this.getLookupSubtables(x),T=0;T<E.length;T++){var d=E[T],g=this.getSubstitutionType(x,d),y=this.getLookupMethod(x,d),C=void 0;switch(g){case"11":C=y(e.current),C&&o.splice(r,1,new On({id:11,tag:t.tag,substitution:C}));break;case"12":C=y(e.current),C&&o.splice(r,1,new On({id:12,tag:t.tag,substitution:C}));break;case"63":C=y(e),Array.isArray(C)&&C.length&&o.splice(r,1,new On({id:63,tag:t.tag,substitution:C}));break;case"41":C=y(e),C&&o.splice(r,1,new On({id:41,tag:t.tag,substitution:C}));break;case"21":C=y(e.current),C&&o.splice(r,1,new On({id:21,tag:t.tag,substitution:C}));break}e=new mr(o,r),!(Array.isArray(C)&&!C.length)&&(C=null)}return o.length?o:null};cr.prototype.supports=function(t){if(!t.script)return!1;this.getScriptFeatures(t.script);var e=this.features.hasOwnProperty(t.script);if(!t.tag)return e;var r=this.features[t.script].some(function(n){return n.tag===t.tag});return e&&r};cr.prototype.getLookupSubtables=function(t){return t.subtables||null};cr.prototype.getLookupByIndex=function(t){var e=this.font.tables.gsub.lookups;return e[t]||null};cr.prototype.getFeatureLookups=function(t){return t.lookupListIndexes.map(this.getLookupByIndex.bind(this))};cr.prototype.getFeature=function(e){if(!this.font)return{FAIL:"No font was found"};this.features.hasOwnProperty(e.script)||this.getScriptFeatures(e.script);var r=this.features[e.script];return r?r.tags[e.tag]?this.features[e.script].tags[e.tag]:null:{FAIL:"No feature for script "+e.script}};function tT(t){var e=t.current,r=t.get(-1);return r===null&&In(e)||!In(r)&&In(e)}function rT(t){var e=t.get(1);return e===null||!In(e)}var nT={startCheck:tT,endCheck:rT};function aT(t){var e=t.current,r=t.get(-1);return(In(e)||Sn(e))&&!In(r)}function iT(t){var e=t.get(1);switch(!0){case e===null:return!0;case(!In(e)&&!Sn(e)):var r=Xc(e);if(!r)return!0;if(r){var n=!1;if(n=t.lookahead.some(function(a){return In(a)||Sn(a)}),!n)return!0}break;default:return!1}}var oT={startCheck:aT,endCheck:iT};function AT(t,e,r){e[r].setState(t.tag,t.substitution)}function sT(t,e,r){e[r].setState(t.tag,t.substitution)}function lT(t,e,r){t.substitution.forEach(function(n,a){var o=e[r+a];o.setState(t.tag,n)})}function xT(t,e,r){var n=e[r];n.setState(t.tag,t.substitution.ligGlyph);for(var a=t.substitution.components.length,o=0;o<a;o++)n=e[r+o+1],n.setState("deleted",!0)}var qA={11:AT,12:sT,63:lT,41:xT};function Go(t,e,r){t instanceof On&&qA[t.id]&&qA[t.id](t,e,r)}function ET(t){for(var e=[].concat(t.backtrack),r=e.length-1;r>=0;r--){var n=e[r],a=Qs(n),o=Sn(n);if(!a&&!o)return!0;if(a)return!1}return!1}function LT(t){if(Qs(t.current))return!1;for(var e=0;e<t.lookahead.length;e++){var r=t.lookahead[e],n=Sn(r);if(!n)return!0}return!1}function hT(t){var e=this,r="arab",n=this.featuresTags[r],a=this.tokenizer.getRangeTokens(t);if(a.length!==1){var o=new mr(a.map(function(x){return x.getState("glyphIndex")}),0),s=new mr(a.map(function(x){return x.char}),0);a.forEach(function(x,E){if(!Sn(x.char)){o.setCurrentIndex(E),s.setCurrentIndex(E);var T=0;ET(s)&&(T|=1),LT(s)&&(T|=2);var d;switch(T){case 1:d="fina";break;case 2:d="init";break;case 3:d="medi";break}if(n.indexOf(d)!==-1){var g=e.query.lookupFeature({tag:d,script:r,contextParams:o});if(g instanceof Error)return console.info(g.message);g.forEach(function(y,C){y instanceof On&&(Go(y,a,C),o.context[C]=y.substitution)})}}})}}function QA(t,e){var r=t.map(function(n){return n.activeState.value});return new mr(r,e||0)}function cT(t){var e=this,r="arab",n=this.tokenizer.getRangeTokens(t),a=QA(n);a.context.forEach(function(o,s){a.setCurrentIndex(s);var x=e.query.lookupFeature({tag:"rlig",script:r,contextParams:a});x.length&&(x.forEach(function(E){return Go(E,n,s)}),a=QA(n))})}function TT(t){var e=t.current,r=t.get(-1);return r===null&&gi(e)||!gi(r)&&gi(e)}function IT(t){var e=t.get(1);return e===null||!gi(e)}var dT={startCheck:TT,endCheck:IT};function $A(t,e){var r=t.map(function(n){return n.activeState.value});return new mr(r,e||0)}function uT(t){var e=this,r="latn",n=this.tokenizer.getRangeTokens(t),a=$A(n);a.context.forEach(function(o,s){a.setCurrentIndex(s);var x=e.query.lookupFeature({tag:"liga",script:r,contextParams:a});x.length&&(x.forEach(function(E){return Go(E,n,s)}),a=$A(n))})}function Or(t){this.baseDir=t||"ltr",this.tokenizer=new yt,this.featuresTags={}}Or.prototype.setText=function(t){this.text=t};Or.prototype.contextChecks={latinWordCheck:dT,arabicWordCheck:nT,arabicSentenceCheck:oT};function R0(t){var e=this.contextChecks[t+"Check"];return this.tokenizer.registerContextChecker(t,e.startCheck,e.endCheck)}function pT(){return R0.call(this,"latinWord"),R0.call(this,"arabicWord"),R0.call(this,"arabicSentence"),this.tokenizer.tokenize(this.text)}function ST(){var t=this,e=this.tokenizer.getContextRanges("arabicSentence");e.forEach(function(r){var n=t.tokenizer.getRangeTokens(r);t.tokenizer.replaceRange(r.startIndex,r.endOffset,n.reverse())})}Or.prototype.registerFeatures=function(t,e){var r=this,n=e.filter(function(a){return r.query.supports({script:t,tag:a})});this.featuresTags.hasOwnProperty(t)?this.featuresTags[t]=this.featuresTags[t].concat(n):this.featuresTags[t]=n};Or.prototype.applyFeatures=function(t,e){if(!t)throw new Error("No valid font was provided to apply features");this.query||(this.query=new cr(t));for(var r=0;r<e.length;r++){var n=e[r];this.query.supports({script:n.script})&&this.registerFeatures(n.script,n.tags)}};Or.prototype.registerModifier=function(t,e,r){this.tokenizer.registerModifier(t,e,r)};function Po(){if(this.tokenizer.registeredModifiers.indexOf("glyphIndex")===-1)throw new Error("glyphIndex modifier is required to apply arabic presentation features.")}function CT(){var t=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){Po.call(this);var r=this.tokenizer.getContextRanges("arabicWord");r.forEach(function(n){hT.call(t,n)})}}function gT(){var t=this,e="arab";if(this.featuresTags.hasOwnProperty(e)){var r=this.featuresTags[e];if(r.indexOf("rlig")!==-1){Po.call(this);var n=this.tokenizer.getContextRanges("arabicWord");n.forEach(function(a){cT.call(t,a)})}}}function RT(){var t=this,e="latn";if(this.featuresTags.hasOwnProperty(e)){var r=this.featuresTags[e];if(r.indexOf("liga")!==-1){Po.call(this);var n=this.tokenizer.getContextRanges("latinWord");n.forEach(function(a){uT.call(t,a)})}}}Or.prototype.checkContextReady=function(t){return!!this.tokenizer.getContext(t)};Or.prototype.applyFeaturesToContexts=function(){this.checkContextReady("arabicWord")&&(CT.call(this),gT.call(this)),this.checkContextReady("latinWord")&&RT.call(this),this.checkContextReady("arabicSentence")&&ST.call(this)};Or.prototype.processText=function(t){(!this.text||this.text!==t)&&(this.setText(t),pT.call(this),this.applyFeaturesToContexts())};Or.prototype.getBidiText=function(t){return this.processText(t),this.tokenizer.getText()};Or.prototype.getTextGlyphs=function(t){this.processText(t);for(var e=[],r=0;r<this.tokenizer.tokens.length;r++){var n=this.tokenizer.tokens[r];if(!n.state.deleted){var a=n.activeState.value;e.push(Array.isArray(a)?a[0]:a)}}return e};function Lt(t){t=t||{},t.tables=t.tables||{},t.empty||(Ia(t.familyName,"When creating a new Font object, familyName is required."),Ia(t.styleName,"When creating a new Font object, styleName is required."),Ia(t.unitsPerEm,"When creating a new Font object, unitsPerEm is required."),Ia(t.ascender,"When creating a new Font object, ascender is required."),Ia(t.descender<=0,"When creating a new Font object, negative descender value is required."),this.names={fontFamily:{en:t.familyName||" "},fontSubfamily:{en:t.styleName||" "},fullName:{en:t.fullName||t.familyName+" "+t.styleName},postScriptName:{en:t.postScriptName||(t.familyName+t.styleName).replace(/\s/g,"")},designer:{en:t.designer||" "},designerURL:{en:t.designerURL||" "},manufacturer:{en:t.manufacturer||" "},manufacturerURL:{en:t.manufacturerURL||" "},license:{en:t.license||" "},licenseURL:{en:t.licenseURL||" "},version:{en:t.version||"Version 0.1"},description:{en:t.description||" "},copyright:{en:t.copyright||" "},trademark:{en:t.trademark||" "}},this.unitsPerEm=t.unitsPerEm||1e3,this.ascender=t.ascender,this.descender=t.descender,this.createdTimestamp=t.createdTimestamp,this.tables=Object.assign(t.tables,{os2:Object.assign({usWeightClass:t.weightClass||this.usWeightClasses.MEDIUM,usWidthClass:t.widthClass||this.usWidthClasses.MEDIUM,fsSelection:t.fsSelection||this.fsSelectionValues.REGULAR},t.tables.os2)})),this.supported=!0,this.glyphs=new wr.GlyphSet(this,t.glyphs||[]),this.encoding=new Is(this),this.position=new Ja(this),this.substitution=new hr(this),this.tables=this.tables||{},this._push=null,this._hmtxTableData={},Object.defineProperty(this,"hinting",{get:function(){if(this._hinting)return this._hinting;if(this.outlinesFormat==="truetype")return this._hinting=new Zs(this)}})}Lt.prototype.hasChar=function(t){return this.encoding.charToGlyphIndex(t)!==null};Lt.prototype.charToGlyphIndex=function(t){return this.encoding.charToGlyphIndex(t)};Lt.prototype.charToGlyph=function(t){var e=this.charToGlyphIndex(t),r=this.glyphs.get(e);return r||(r=this.glyphs.get(0)),r};Lt.prototype.updateFeatures=function(t){return this.defaultRenderOptions.features.map(function(e){return e.script==="latn"?{script:"latn",tags:e.tags.filter(function(r){return t[r]})}:e})};Lt.prototype.stringToGlyphs=function(t,e){var r=this,n=new Or,a=function(g){return r.charToGlyphIndex(g.char)};n.registerModifier("glyphIndex",null,a);var o=e?this.updateFeatures(e.features):this.defaultRenderOptions.features;n.applyFeatures(this,o);for(var s=n.getTextGlyphs(t),x=s.length,E=new Array(x),T=this.glyphs.get(0),d=0;d<x;d+=1)E[d]=this.glyphs.get(s[d])||T;return E};Lt.prototype.nameToGlyphIndex=function(t){return this.glyphNames.nameToGlyphIndex(t)};Lt.prototype.nameToGlyph=function(t){var e=this.nameToGlyphIndex(t),r=this.glyphs.get(e);return r||(r=this.glyphs.get(0)),r};Lt.prototype.glyphIndexToName=function(t){return this.glyphNames.glyphIndexToName?this.glyphNames.glyphIndexToName(t):""};Lt.prototype.getKerningValue=function(t,e){t=t.index||t,e=e.index||e;var r=this.position.defaultKerningTables;return r?this.position.getKerningValue(r,t,e):this.kerningPairs[t+","+e]||0};Lt.prototype.defaultRenderOptions={kerning:!0,features:[{script:"arab",tags:["init","medi","fina","rlig"]},{script:"latn",tags:["liga","rlig"]}]};Lt.prototype.forEachGlyph=function(t,e,r,n,a,o){e=e!==void 0?e:0,r=r!==void 0?r:0,n=n!==void 0?n:72,a=Object.assign({},this.defaultRenderOptions,a);var s=1/this.unitsPerEm*n,x=this.stringToGlyphs(t,a),E;if(a.kerning){var T=a.script||this.position.getDefaultScriptName();E=this.position.getKerningTables(T,a.language)}for(var d=0;d<x.length;d+=1){var g=x[d];if(o.call(this,g,e,r,n,a),g.advanceWidth&&(e+=g.advanceWidth*s),a.kerning&&d<x.length-1){var y=E?this.position.getKerningValue(E,g.index,x[d+1].index):this.getKerningValue(g,x[d+1]);e+=y*s}a.letterSpacing?e+=a.letterSpacing*n:a.tracking&&(e+=a.tracking/1e3*n)}return e};Lt.prototype.getPath=function(t,e,r,n,a){var o=new Mt;return this.forEachGlyph(t,e,r,n,a,function(s,x,E,T){var d=s.getPath(x,E,T,a,this);o.extend(d)}),o};Lt.prototype.getPaths=function(t,e,r,n,a){var o=[];return this.forEachGlyph(t,e,r,n,a,function(s,x,E,T){var d=s.getPath(x,E,T,a,this);o.push(d)}),o};Lt.prototype.getAdvanceWidth=function(t,e,r){return this.forEachGlyph(t,0,0,e,r,function(){})};Lt.prototype.draw=function(t,e,r,n,a,o){this.getPath(e,r,n,a,o).draw(t)};Lt.prototype.drawPoints=function(t,e,r,n,a,o){this.forEachGlyph(e,r,n,a,o,function(s,x,E,T){s.drawPoints(t,x,E,T)})};Lt.prototype.drawMetrics=function(t,e,r,n,a,o){this.forEachGlyph(e,r,n,a,o,function(s,x,E,T){s.drawMetrics(t,x,E,T)})};Lt.prototype.getEnglishName=function(t){var e=this.names[t];if(e)return e.en};Lt.prototype.validate=function(){var t=this;function e(n,a){}function r(n){var a=t.getEnglishName(n);a&&a.trim().length>0}r("fontFamily"),r("weightName"),r("manufacturer"),r("copyright"),r("version"),this.unitsPerEm>0};Lt.prototype.toTables=function(){return xh.fontToTable(this)};Lt.prototype.toBuffer=function(){return console.warn("Font.toBuffer is deprecated. Use Font.toArrayBuffer instead."),this.toArrayBuffer()};Lt.prototype.toArrayBuffer=function(){for(var t=this.toTables(),e=t.encode(),r=new ArrayBuffer(e.length),n=new Uint8Array(r),a=0;a<e.length;a++)n[a]=e[a];return r};Lt.prototype.download=function(t){var e=this.getEnglishName("fontFamily"),r=this.getEnglishName("fontSubfamily");t=t||e.replace(/\s/g,"")+"-"+r+".otf";var n=this.toArrayBuffer();if(Lh())if(window.URL=window.URL||window.webkitURL,window.URL){var a=new DataView(n),o=new Blob([a],{type:"font/opentype"}),s=document.createElement("a");s.href=window.URL.createObjectURL(o),s.download=t;var x=document.createEvent("MouseEvents");x.initEvent("click",!0,!1),s.dispatchEvent(x)}else console.warn("Font file could not be downloaded. Try using a different browser.");else{var E=require("fs"),T=hh(n);E.writeFileSync(t,T)}};Lt.prototype.fsSelectionValues={ITALIC:1,UNDERSCORE:2,NEGATIVE:4,OUTLINED:8,STRIKEOUT:16,BOLD:32,REGULAR:64,USER_TYPO_METRICS:128,WWS:256,OBLIQUE:512};Lt.prototype.usWidthClasses={ULTRA_CONDENSED:1,EXTRA_CONDENSED:2,CONDENSED:3,SEMI_CONDENSED:4,MEDIUM:5,SEMI_EXPANDED:6,EXPANDED:7,EXTRA_EXPANDED:8,ULTRA_EXPANDED:9};Lt.prototype.usWeightClasses={THIN:100,EXTRA_LIGHT:200,LIGHT:300,NORMAL:400,MEDIUM:500,SEMI_BOLD:600,BOLD:700,EXTRA_BOLD:800,BLACK:900};function $s(t,e){var r=JSON.stringify(t),n=256;for(var a in e){var o=parseInt(a);if(!(!o||o<256)){if(JSON.stringify(e[a])===r)return o;n<=o&&(n=o+1)}}return e[n]=t,n}function yT(t,e,r){var n=$s(e.name,r);return[{name:"tag_"+t,type:"TAG",value:e.tag},{name:"minValue_"+t,type:"FIXED",value:e.minValue<<16},{name:"defaultValue_"+t,type:"FIXED",value:e.defaultValue<<16},{name:"maxValue_"+t,type:"FIXED",value:e.maxValue<<16},{name:"flags_"+t,type:"USHORT",value:0},{name:"nameID_"+t,type:"USHORT",value:n}]}function mT(t,e,r){var n={},a=new ye.Parser(t,e);return n.tag=a.parseTag(),n.minValue=a.parseFixed(),n.defaultValue=a.parseFixed(),n.maxValue=a.parseFixed(),a.skip("uShort",1),n.name=r[a.parseUShort()]||{},n}function NT(t,e,r,n){for(var a=$s(e.name,n),o=[{name:"nameID_"+t,type:"USHORT",value:a},{name:"flags_"+t,type:"USHORT",value:0}],s=0;s<r.length;++s){var x=r[s].tag;o.push({name:"axis_"+t+" "+x,type:"FIXED",value:e.coordinates[x]<<16})}return o}function DT(t,e,r,n){var a={},o=new ye.Parser(t,e);a.name=n[o.parseUShort()]||{},o.skip("uShort",1),a.coordinates={};for(var s=0;s<r.length;++s)a.coordinates[r[s].tag]=o.parseFixed();return a}function fT(t,e){var r=new ge.Table("fvar",[{name:"version",type:"ULONG",value:65536},{name:"offsetToData",type:"USHORT",value:0},{name:"countSizePairs",type:"USHORT",value:2},{name:"axisCount",type:"USHORT",value:t.axes.length},{name:"axisSize",type:"USHORT",value:20},{name:"instanceCount",type:"USHORT",value:t.instances.length},{name:"instanceSize",type:"USHORT",value:4+t.axes.length*4}]);r.offsetToData=r.sizeOf();for(var n=0;n<t.axes.length;n++)r.fields=r.fields.concat(yT(n,t.axes[n],e));for(var a=0;a<t.instances.length;a++)r.fields=r.fields.concat(NT(a,t.instances[a],t.axes,e));return r}function OT(t,e,r){var n=new ye.Parser(t,e),a=n.parseULong();Ge.argument(a===65536,"Unsupported fvar table version.");var o=n.parseOffset16();n.skip("uShort",1);for(var s=n.parseUShort(),x=n.parseUShort(),E=n.parseUShort(),T=n.parseUShort(),d=[],g=0;g<s;g++)d.push(mT(t,e+o+g*x,r));for(var y=[],C=e+o+s*x,k=0;k<E;k++)y.push(DT(t,C+k*T,d,r));return{axes:d,instances:y}}var BT={make:fT,parse:OT},HT=function(){return{coverage:this.parsePointer(te.coverage),attachPoints:this.parseList(te.pointer(te.uShortList))}},FT=function(){var t=this.parseUShort();if(Ge.argument(t===1||t===2||t===3,"Unsupported CaretValue table version."),t===1)return{coordinate:this.parseShort()};if(t===2)return{pointindex:this.parseShort()};if(t===3)return{coordinate:this.parseShort()}},MT=function(){return this.parseList(te.pointer(FT))},GT=function(){return{coverage:this.parsePointer(te.coverage),ligGlyphs:this.parseList(te.pointer(MT))}},PT=function(){return this.parseUShort(),this.parseList(te.pointer(te.coverage))};function bT(t,e){e=e||0;var r=new te(t,e),n=r.parseVersion(1);Ge.argument(n===1||n===1.2||n===1.3,"Unsupported GDEF table version.");var a={version:n,classDef:r.parsePointer(te.classDef),attachList:r.parsePointer(HT),ligCaretList:r.parsePointer(GT),markAttachClassDef:r.parsePointer(te.classDef)};return n>=1.2&&(a.markGlyphSets=r.parsePointer(PT)),a}var vT={parse:bT},Nr=new Array(10);Nr[1]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();if(r===1)return{posFormat:1,coverage:this.parsePointer(te.coverage),value:this.parseValueRecord()};if(r===2)return{posFormat:2,coverage:this.parsePointer(te.coverage),values:this.parseValueRecordList()};Ge.assert(!1,"0x"+e.toString(16)+": GPOS lookup type 1 format must be 1 or 2.")};Nr[2]=function(){var e=this.offset+this.relativeOffset,r=this.parseUShort();Ge.assert(r===1||r===2,"0x"+e.toString(16)+": GPOS lookup type 2 format must be 1 or 2.");var n=this.parsePointer(te.coverage),a=this.parseUShort(),o=this.parseUShort();if(r===1)return{posFormat:r,coverage:n,valueFormat1:a,valueFormat2:o,pairSets:this.parseList(te.pointer(te.list(function(){return{secondGlyph:this.parseUShort(),value1:this.parseValueRecord(a),value2:this.parseValueRecord(o)}})))};if(r===2){var s=this.parsePointer(te.classDef),x=this.parsePointer(te.classDef),E=this.parseUShort(),T=this.parseUShort();return{posFormat:r,coverage:n,valueFormat1:a,valueFormat2:o,classDef1:s,classDef2:x,class1Count:E,class2Count:T,classRecords:this.parseList(E,te.list(T,function(){return{value1:this.parseValueRecord(a),value2:this.parseValueRecord(o)}}))}}};Nr[3]=function(){return{error:"GPOS Lookup 3 not supported"}};Nr[4]=function(){return{error:"GPOS Lookup 4 not supported"}};Nr[5]=function(){return{error:"GPOS Lookup 5 not supported"}};Nr[6]=function(){return{error:"GPOS Lookup 6 not supported"}};Nr[7]=function(){return{error:"GPOS Lookup 7 not supported"}};Nr[8]=function(){return{error:"GPOS Lookup 8 not supported"}};Nr[9]=function(){return{error:"GPOS Lookup 9 not supported"}};function UT(t,e){e=e||0;var r=new te(t,e),n=r.parseVersion(1);return Ge.argument(n===1||n===1.1,"Unsupported GPOS table version "+n),n===1?{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(Nr)}:{version:n,scripts:r.parseScriptList(),features:r.parseFeatureList(),lookups:r.parseLookupList(Nr),variations:r.parseFeatureVariationsList()}}var wT=new Array(10);function YT(t){return new ge.Table("GPOS",[{name:"version",type:"ULONG",value:65536},{name:"scripts",type:"TABLE",value:new ge.ScriptList(t.scripts)},{name:"features",type:"TABLE",value:new ge.FeatureList(t.features)},{name:"lookups",type:"TABLE",value:new ge.LookupList(t.lookups,wT)}])}var WT={parse:UT,make:YT};function kT(t){var e={};t.skip("uShort");var r=t.parseUShort();Ge.argument(r===0,"Unsupported kern sub-table version."),t.skip("uShort",2);var n=t.parseUShort();t.skip("uShort",3);for(var a=0;a<n;a+=1){var o=t.parseUShort(),s=t.parseUShort(),x=t.parseShort();e[o+","+s]=x}return e}function KT(t){var e={};t.skip("uShort");var r=t.parseULong();r>1&&console.warn("Only the first kern subtable is supported."),t.skip("uLong");var n=t.parseUShort(),a=n&255;if(t.skip("uShort"),a===0){var o=t.parseUShort();t.skip("uShort",3);for(var s=0;s<o;s+=1){var x=t.parseUShort(),E=t.parseUShort(),T=t.parseShort();e[x+","+E]=T}}return e}function VT(t,e){var r=new ye.Parser(t,e),n=r.parseUShort();if(n===0)return kT(r);if(n===1)return KT(r);throw new Error("Unsupported kern table version ("+n+").")}var _T={parse:VT};function JT(t,e,r,n){for(var a=new ye.Parser(t,e),o=n?a.parseUShort:a.parseULong,s=[],x=0;x<r+1;x+=1){var E=o.call(a);n&&(E*=2),s.push(E)}return s}var zT={parse:JT};function ZT(t,e){var r=require("fs");r.readFile(t,function(n,a){if(n)return e(n.message);e(null,Ws(a))})}function XT(t,e){var r=new XMLHttpRequest;r.open("get",t,!0),r.responseType="arraybuffer",r.onload=function(){return r.response?e(null,r.response):e("Font could not be loaded: "+r.statusText)},r.onerror=function(){e("Font could not be loaded")},r.send()}function e1(t,e){for(var r=[],n=12,a=0;a<e;a+=1){var o=ye.getTag(t,n),s=ye.getULong(t,n+4),x=ye.getULong(t,n+8),E=ye.getULong(t,n+12);r.push({tag:o,checksum:s,offset:x,length:E,compression:!1}),n+=16}return r}function jT(t,e){for(var r=[],n=44,a=0;a<e;a+=1){var o=ye.getTag(t,n),s=ye.getULong(t,n+4),x=ye.getULong(t,n+8),E=ye.getULong(t,n+12),T=void 0;x<E?T="WOFF":T=!1,r.push({tag:o,offset:s,compression:T,compressedLength:x,length:E}),n+=20}return r}function ft(t,e){if(e.compression==="WOFF"){var r=new Uint8Array(t.buffer,e.offset+2,e.compressedLength-2),n=new Uint8Array(e.length);if(WE(r,n),n.byteLength!==e.length)throw new Error("Decompression error: "+e.tag+" decompressed length doesn't match recorded length");var a=new DataView(n.buffer,0);return{data:a,offset:0}}else return{data:t,offset:e.offset}}function bo(t,e){e=e??{};var r,n,a=new Lt({empty:!0}),o=new DataView(t,0),s,x=[],E=ye.getTag(o,0);if(E==="\0\0\0"||E==="true"||E==="typ1")a.outlinesFormat="truetype",s=ye.getUShort(o,4),x=e1(o,s);else if(E==="OTTO")a.outlinesFormat="cff",s=ye.getUShort(o,4),x=e1(o,s);else if(E==="wOFF"){var T=ye.getTag(o,4);if(T==="\0\0\0")a.outlinesFormat="truetype";else if(T==="OTTO")a.outlinesFormat="cff";else throw new Error("Unsupported OpenType flavor "+E);s=ye.getUShort(o,12),x=jT(o,s)}else throw new Error("Unsupported OpenType signature "+E);for(var d,g,y,C,k,Y,_,V,ee,q,he,ce,oe=0;oe<s;oe+=1){var Te=x[oe],Ie=void 0;switch(Te.tag){case"cmap":Ie=ft(o,Te),a.tables.cmap=Ts.parse(Ie.data,Ie.offset),a.encoding=new ds(a.tables.cmap);break;case"cvt ":Ie=ft(o,Te),ce=new ye.Parser(Ie.data,Ie.offset),a.tables.cvt=ce.parseShortList(Te.length/2);break;case"fvar":g=Te;break;case"fpgm":Ie=ft(o,Te),ce=new ye.Parser(Ie.data,Ie.offset),a.tables.fpgm=ce.parseByteList(Te.length);break;case"head":Ie=ft(o,Te),a.tables.head=Ds.parse(Ie.data,Ie.offset),a.unitsPerEm=a.tables.head.unitsPerEm,r=a.tables.head.indexToLocFormat;break;case"hhea":Ie=ft(o,Te),a.tables.hhea=fs.parse(Ie.data,Ie.offset),a.ascender=a.tables.hhea.ascender,a.descender=a.tables.hhea.descender,a.numberOfHMetrics=a.tables.hhea.numberOfHMetrics;break;case"hmtx":_=Te;break;case"ltag":Ie=ft(o,Te),n=Bs.parse(Ie.data,Ie.offset);break;case"maxp":Ie=ft(o,Te),a.tables.maxp=Hs.parse(Ie.data,Ie.offset),a.numGlyphs=a.tables.maxp.numGlyphs;break;case"name":q=Te;break;case"OS/2":Ie=ft(o,Te),a.tables.os2=to.parse(Ie.data,Ie.offset);break;case"post":Ie=ft(o,Te),a.tables.post=vs.parse(Ie.data,Ie.offset),a.glyphNames=new Oo(a.tables.post);break;case"prep":Ie=ft(o,Te),ce=new ye.Parser(Ie.data,Ie.offset),a.tables.prep=ce.parseByteList(Te.length);break;case"glyf":y=Te;break;case"loca":ee=Te;break;case"CFF ":d=Te;break;case"kern":V=Te;break;case"GDEF":C=Te;break;case"GPOS":k=Te;break;case"GSUB":Y=Te;break;case"meta":he=Te;break}}var fe=ft(o,q);if(a.tables.name=bs.parse(fe.data,fe.offset,n),a.names=a.tables.name,y&&ee){var We=r===0,ke=ft(o,ee),At=zT.parse(ke.data,ke.offset,a.numGlyphs,We),st=ft(o,y);a.glyphs=_s.parse(st.data,st.offset,At,a,e)}else if(d){var de=ft(o,d);Ns.parse(de.data,de.offset,a,e)}else throw new Error("Font doesn't contain TrueType or CFF outlines.");var It=ft(o,_);if(Os.parse(a,It.data,It.offset,a.numberOfHMetrics,a.numGlyphs,a.glyphs,e),sL(a,e),V){var Ae=ft(o,V);a.kerningPairs=_T.parse(Ae.data,Ae.offset)}else a.kerningPairs={};if(C){var $e=ft(o,C);a.tables.gdef=vT.parse($e.data,$e.offset)}if(k){var lt=ft(o,k);a.tables.gpos=WT.parse(lt.data,lt.offset),a.position.init()}if(Y){var Oe=ft(o,Y);a.tables.gsub=Us.parse(Oe.data,Oe.offset)}if(g){var ht=ft(o,g);a.tables.fvar=BT.parse(ht.data,ht.offset,a.names)}if(he){var ct=ft(o,he);a.tables.meta=ws.parse(ct.data,ct.offset),a.metas=a.tables.meta}return a}function qT(t,e,r){r=r??{};var n=typeof window>"u",a=n&&!r.isUrl?ZT:XT;return new Promise(function(o,s){a(t,function(x,E){if(x){if(e)return e(x);s(x)}var T;try{T=bo(E,r)}catch(d){if(e)return e(d,null);s(d)}if(e)return e(null,T);o(T)})})}function QT(t,e){var r=require("fs"),n=r.readFileSync(t);return bo(Ws(n),e)}var Cn=Object.freeze({__proto__:null,Font:Lt,Glyph:Lr,Path:Mt,BoundingBox:$r,_parse:ye,parse:bo,load:qT,loadSync:QT});function y0(t){const e=ue,r=z();if(e.mousePosition=el(t),t.button===3||t.button===4){et(t);return}if(t.button,t.button===1&&(t.type==="mousedown"&&ix(t),t.type==="mouseup"&&ox(t)),t.button===0){switch(r.selectedTool){case"resize":e.currentToolHandler=r.eventHandlers.tool_resize;break;case"pathEdit":e.currentToolHandler=r.eventHandlers.tool_pathEdit;break;case"pan":e.currentToolHandler=r.eventHandlers.tool_pan;break;case"pathAddPoint":e.currentToolHandler=r.eventHandlers.tool_pathAddPoint;break;case"newPath":e.currentToolHandler=r.eventHandlers.tool_addPath;break;case"newRectangle":e.currentToolHandler=r.eventHandlers.tool_addRectOval;break;case"newOval":e.currentToolHandler=r.eventHandlers.tool_addRectOval;break;case"kern":e.currentToolHandler=r.eventHandlers.tool_kern;break;case r.selectedTool:e.currentToolHandler=r.eventHandlers.tool_resize}e.currentToolHandler[t.type](t)}}function el(t){let e={};return t.offsetX||t.offsetY?(e.x=t.offsetX,e.y=t.offsetY):(t.layerX||t.layerY)&&(e.x=t.layerX,e.y=t.layerY),e}function no(){const t=z();t.multiSelect.points.clear(),t.multiSelect.shapes.clear()}function t1(){let e=z().multiSelect.shapes,r=ue.handle,n=Ct(ue.mousePosition.x),a=Rt(ue.mousePosition.y),o=Ct(ue.lastX),x=Rt(ue.lastY)-a,E=o-n,T=e.ratioLock,d=e.maxes;switch(r.includes("e")&&n+E<=d.xMax&&(E=0),r.includes("w")&&(n+E>=d.xMin&&(E=0),d.width+E<0&&(E=d.width*-.9)),r.includes("n")&&a<=d.yMax-x&&(x=0),r.includes("s")&&(a+x>=d.yMin&&(x=0),d.height+x<0&&(x=d.height*-.9)),r){case"n":Bt("n")&&(Ye("n-resize"),e.updateShapeSize({width:0,height:x*-1,ratioLock:T,transformOrigin:"bottom-center"}));break;case"ne":Bt("ne")&&(Ye("ne-resize"),e.updateShapeSize({width:E*-1,height:x*-1,ratioLock:T,transformOrigin:"bottom-left"}));break;case"e":Bt("e")&&(Ye("e-resize"),e.updateShapeSize({width:E*-1,height:0,ratioLock:T,transformOrigin:"middle-left"}));break;case"be":Bt("be")&&(Ye("e-resize"),e.updateShapeSize({width:E*-1,height:0,ratioLock:T,transformOrigin:"baseline-left"}));break;case"se":Bt("se")&&(Ye("se-resize"),e.updateShapeSize({width:E*-1,height:x,ratioLock:T,transformOrigin:"top-left"}));break;case"s":Bt("s")&&(Ye("s-resize"),e.updateShapeSize({width:0,height:x,ratioLock:T,transformOrigin:"top-center"}));break;case"sw":Bt("sw")&&(Ye("sw-resize"),e.updateShapeSize({width:E,height:x,ratioLock:T,transformOrigin:"top-right"}));break;case"bw":Bt("bw")&&(Ye("ew-resize"),e.updateShapeSize({width:E,height:0,ratioLock:T,transformOrigin:"baseline-right"}));break;case"w":Bt("w")&&(Ye("w-resize"),e.updateShapeSize({width:E,height:0,ratioLock:T,transformOrigin:"middle-right"}));break;case"nw":Bt("nw")&&(Ye("nw-resize"),e.updateShapeSize({width:E,height:x*-1,ratioLock:T,transformOrigin:"bottom-right"}));break}}function tl(t,e){const r=z();if(lx(t,e)){let n=qp(t,e);Ye("pointer"),n!==ue.canvasHotspotHovering&&r.publish("editCanvasView",r.view),ue.canvasHotspotHovering=n}else ue.canvasHotspotHovering&&r.publish("editCanvasView",r.view),ue.canvasHotspotHovering=!1}function Bt(t){const e=z(),r=e.multiSelect.shapes;let n=r;r.length>1&&(n=r.virtualGlyph);let a=n.ratioLock,o=n.xLock,s=n.yLock,x=n.wLock,E=n.hLock,T=n.maxes.yMax,d=n.maxes.yMin,g=vt/2/e.view.dz,y=!0;switch(t){case"nw":y=a?!1:!s&&!E&&!o&&!x;break;case"n":y=!s&&!E;break;case"ne":y=a?!1:!s&&!E&&!x;break;case"e":y=!x;break;case"be":y=!x&&a&&d<g*-1&&T>g;break;case"se":y=a?!1:!E&&!x;break;case"s":y=!E;break;case"sw":y=a?!1:!E&&!o&&!x;break;case"bw":y=!o&&!x&&a&&d<g*-1&&T>g;break;case"w":y=!o&&!x}return y}function $T(t){let e=t.deltaY*-1;const r=z(),n=el(t);r.nav.isOnEditCanvasPage&&(t.ctrlKey||t.metaKey)&&(et(t),va(),ue.hoverPoint=!1,e>0?r.updateViewZoom(1.1,n):r.updateViewZoom(.9,n))}let vt=7,bi=40,vo=xt.blue.l65,eI=xt.green.l65,tI=xt.gray.l65,rI="#000",rl="#FFF",nI=3;function aI(t){let r=z().multiSelect.shapes;if(r.length<1)return;let n=r.maxes,a=ja();nl(t,n,a.thickness,a.accent)}function iI(t){let e=ja();sI(t,e.accent,e.thickness)}function oI(t){let r=z().multiSelect.shapes;if(r.length<1)return;let n=r.maxes,a=ja();AI(t,n,a.thickness,a.accent)}function ja(){let e=z().multiSelect.shapes,r=1,n=vo;return e.length>1?(r=nI,n=tI):e.singleton.objType==="ComponentInstance"&&(n=eI),{thickness:r,accent:n}}function nl(t,e,r,n){const a=Uo(e,r);let o=a.rightX-a.leftX,s=a.topY-a.bottomY;t.fillStyle="transparent",t.strokeStyle=n||ja().accent,t.lineWidth=r||1,t.strokeRect(a.leftX,a.bottomY,o,s)}function AI(t,e,r,n){let a=Uo(e,r);if(t.fillStyle=rl,t.lineWidth=1,t.strokeStyle=n,z().multiSelect.shapes.isRotatable()){const s=vt/2;t.lineWidth=r,al(t,{x:a.midX+1,y:a.topY},{x:a.midX+1,y:a.topY-bi}),t.lineWidth=1,wo(t,{x:a.midX+1,y:a.topY-bi+s})}Bt("nw")&&Fr(t,a.nw),Bt("n")&&Fr(t,a.n),Bt("ne")&&Fr(t,a.ne),Bt("e")&&Fr(t,a.e),Bt("be")&&Fr(t,a.be),Bt("se")&&Fr(t,a.se),Bt("s")&&Fr(t,a.s),Bt("sw")&&Fr(t,a.sw),Bt("bw")&&Fr(t,a.bw),Bt("w")&&Fr(t,a.w)}function sI(t,e=vo,r=1){const n=ue;let a=n.rotationStartCenter,o=n.rotationStartMaxesTopY,s=n.mousePosition.x,x=n.mousePosition.y,E=En({x:Ct(s),y:Rt(x)},a);n.isShiftDown&&(E=b1(E));let d={x:a.x,y:o};Ni(d,E,a),Ni(d,Math.PI/-2,a);let g=!1;Math.abs(E)>Math.PI/2&&(g=!0);let y={x:St(d.x),y:Et(d.y)},C={x:St(a.x),y:Et(a.y)};o=Et(o);let k=Zn(C,y);t.fillStyle=e,t.strokeStyle=e,t.globalAlpha=.3,t.beginPath(),t.moveTo(C.x,C.y),t.arc(C.x,C.y,k,Math.PI/-2,E*-1,g),t.closePath(),t.stroke(),t.fill(),t.strokeStyle=e,t.fillStyle=rl,t.lineWidth=r,al(t,{x:y.x,y:y.y},{x:C.x,y:C.y}),t.lineWidth=1,wo(t,y);let Y=ae(v1(E),1);g&&(Y-=360),Y=ae(Y,1),t.font='24px FiraGo, "Open Sans", sans-serif',t.fillStyle=e,t.globalAlpha=.8,t.fillText(""+Y+"°",C.x,o-24),t.globalAlpha=1}function r1(t,e,r){if(!r)return!1;const n=z();let a="",o=vt,s=Uo(r);return n.multiSelect.shapes.isRotatable()&&t>s.midX&&t<s.midX+o&&e>s.topY-bi&&e<s.topY-bi+o&&(a="rotate"),t>s.nw.x&&t<s.nw.x+o&&e>s.nw.y&&e<s.nw.y+o&&(a="nw"),t>s.n.x&&t<s.n.x+o&&e>s.n.y&&e<s.n.y+o&&(a="n"),t>s.ne.x&&t<s.ne.x+o&&e>s.ne.y&&e<s.ne.y+o&&(a="ne"),t>s.e.x&&t<s.e.x+o&&e>s.e.y&&e<s.e.y+o&&(a="e"),t>s.be.x&&t<s.be.x+o&&e>s.be.y&&e<s.be.y+o&&(a="be"),t>s.se.x&&t<s.se.x+o&&e>s.se.y&&e<s.se.y+o&&(a="se"),t>s.s.x&&t<s.s.x+o&&e>s.s.y&&e<s.s.y+o&&(a="s"),t>s.sw.x&&t<s.sw.x+o&&e>s.sw.y&&e<s.sw.y+o&&(a="sw"),t>s.bw.x&&t<s.bw.x+o&&e>s.bw.y&&e<s.bw.y+o&&(a="bw"),t>s.w.x&&t<s.w.x+o&&e>s.w.y&&e<s.w.y+o&&(a="w"),a}function Uo(t,e=1){const r=vt,n=vt/2,a=1;let o=St(t.xMin),s=ae(St(t.xMin)+(St(t.xMax)-St(t.xMin))/2),x=St(t.xMax),E=Et(t.yMax),T=Et(0),d=ae(Et(t.yMax)+(Et(t.yMin)-Et(t.yMax))/2),g=Et(t.yMin);return e>1&&(o-=e,x+=e,E-=e,g+=e),o=Ot(o,!1)-a,s=Ot(s,!1),x=Ot(x,!0)+a,E=Ot(E,!1)-a,d=Ot(d,!1),g=Ot(g,!0)+a,{leftX:o,midX:s,rightX:x,topY:E,midY:d,bottomY:g,nw:{x:o-r,y:E-r},n:{x:Ot(s-n)+a,y:E-r},ne:{x,y:E-r},e:{x,y:Ot(d-n)+a},be:{x,y:Ot(T-n)+a},se:{x,y:g},s:{x:Ot(s-n)+a,y:g},sw:{x:o-r,y:g},bw:{x:o-r,y:Ot(T-n)+a},w:{x:o-r,y:Ot(d-n)+a}}}function m0(t,e){let n=z().multiSelect.shapes,a=n.members.length,o=ja();a>0&&(t.beginPath(),n.drawShapes(t,e),t.closePath(),t.strokeStyle=o.accent,t.lineWidth=o.thickness,t.stroke())}function lI(t,e,r){t.beginPath(),ai(e,t,r),t.closePath(),t.fillStyle=rI,t.fill(),t.strokeStyle=vo,t.stroke(),nl(t,e.maxes)}function al(t,e,r){t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(r.x,r.y),t.closePath(),t.stroke()}function Fr(t,e){t.fillRect(e.x,e.y,vt,vt),t.strokeRect(e.x,e.y,vt,vt)}function wo(t,e){t.beginPath(),t.arc(e.x,e.y,vt/2,0,Math.PI*2,!0),t.closePath(),t.fill(),t.stroke()}function n1(t){const e=z();e.multiSelect.shapes.members.forEach(n=>{n.objType!=="ComponentInstance"&&n.pathPoints.forEach(a=>{e.multiSelect.points.isSelected(a)&&hI(a,t)})})}function Ti(t,e=!1){const r=z();let n=r.multiSelect.shapes.members;e&&(n=r.selectedItem.shapes),n.forEach(a=>{a.objType!=="ComponentInstance"&&a.pathPoints.forEach((o,s)=>{if(s===0){let x=a.pathPoints[a.getNextPointNum(0)];LI(o,t,r.multiSelect.points.isSelected(o),x)}else EI(o,t,r.multiSelect.points.isSelected(o))})})}function xI(t,e){let r=vt;e&&(t.fillStyle=xt.blue.l85,t.fillRect(e.x,e.y,r,r))}function EI(t,e,r){let n=7,a=jr.offWhite,o=jr.accent;const s=n/2;e.fillStyle=r?a:o,e.strokeStyle=o,e.font="10px Consolas";let x=St(t.p.x)-s,E=Et(t.p.y)-s;e.fillRect(x,E,n,n),e.strokeRect(x,E,n,n),e.fillStyle=o}function LI(t,e,r,n){let a=jr.offWhite,o=jr.accent;e.fillStyle=r?a:o,e.strokeStyle=o,e.lineWidth=1;const s={x:t.p.x,y:t.p.y};let x={x:t.h2.x,y:t.h2.y};t.h2.use||(x={x:n.p.x,y:n.p.y});const E=vt/2,T=[[E*3,0],[E,E],[-E,E],[-E,-E],[E,-E]],d=[];let g=Math.atan2(x.y-s.y,x.x-s.x)*-1;!g&&g!==0&&(g=t.p.x>t.h2.x?Math.PI:0);for(const y of Object.keys(T))d.push([T[y][0]*Math.cos(g)-T[y][1]*Math.sin(g),T[y][0]*Math.sin(g)+T[y][1]*Math.cos(g)]);e.beginPath(),e.moveTo(d[0][0]+St(t.p.x),d[0][1]+Et(t.p.y)),d.forEach((y,C)=>{C>0&&e.lineTo(d[C][0]+St(t.p.x),d[C][1]+Et(t.p.y))}),e.lineTo(d[0][0]+St(t.p.x),d[0][1]+Et(t.p.y)),e.fill(),e.stroke(),e.fillStyle=o,e.fillRect(Ot(St(t.p.x)),Ot(Et(t.p.y)),1,1)}function hI(t,e,r=!0,n=!0){let a=jr.accent;e.fillStyle=a,e.strokeStyle=a,e.lineWidth=1,e.font="10px Consolas",r&&t.h1.use&&o(t.h1,"1"),n&&t.h2.use&&o(t.h2,"2");function o(s,x){const E=St(s.x),T=Et(s.y);wo(e,{x:E,y:T}),e.beginPath(),e.moveTo(St(t.p.x),Et(t.p.y)),e.lineTo(E,T),e.closePath(),e.stroke(),e.fillText(x,E+12,T)}}function cI(t=[],e,r){for(let n=0;n<t.length;n++){let a=Yo(t[n],e,r);if(a)return a}return!1}function N0(t,e,r,n){let a;return t!==!1&&(Array.isArray(t)?a=cI(t,e,r):t.objType==="Glyph"||t.objType==="VirtualGlyph"?t.shapes&&t.shapes.length&&(a=TI(t,e,r,n)):t.objType==="Path"?a=il(t,e,r,n):t.objType==="PathPoint"&&(a=Yo(t,e,r,n))),a}function TI(t,e,r,n){let a=!1;for(let o=0;o<t.shapes.length;o++)if(t.shapes[o].objType!=="ComponentInstance"&&(a=il(t.shapes[o],e,r,n),a))return a;return!1}function il(t,e,r,n){let a=t.pathPoints||[],o=!1;for(let s=a.length-1;s>=0;s--)if(o=Yo(a[s],e,r,n),o)return o;return!1}function a1(t,e,r){let n=t.pathPoints[0];return n?pt({x:e,y:r},n.p.coord,vt):!1}function Yo(t,e=0,r=0,n=!1){const a=z().view.dz,o=vt/a,s={x:e,y:r};let x=!1;return pt(t.p,s,o)&&(x={pathPoint:t,controlPoint:"p"}),x||(t.h1.use&&!n&&pt(t.h1,s,o)&&(x={pathPoint:t,controlPoint:"h1"}),t.h2.use&&!n&&pt(t.h2,s,o)&&(x={pathPoint:t,controlPoint:"h2"})),x}const II=":root{--gray-l99: hsl(200, 90%, 99%);--gray-l97: hsl(200, 81%, 97%);--gray-l95: hsl(200, 81%, 94%);--gray-l90: hsl(200, 60%, 88%);--gray-l85: hsl(200, 52%, 82%);--gray-l80: hsl(200, 47%, 76%);--gray-l75: hsl(200, 42%, 71%);--gray-l70: hsl(200, 33%, 65%);--gray-l65: hsl(200, 27%, 60%);--gray-l60: hsl(200, 22%, 55%);--gray-l55: hsl(200, 18%, 50%);--gray-l50: hsl(200, 17%, 45%);--gray-l45: hsl(200, 17%, 40%);--gray-l40: hsl(200, 18%, 36%);--gray-l35: hsl(200, 18%, 31%);--gray-l30: hsl(200, 17%, 27%);--gray-l25: hsl(200, 18%, 23%);--gray-l20: hsl(200, 18%, 19%);--gray-l15: hsl(200, 17%, 15%);--gray-l10: hsl(200, 19%, 11%);--gray-l05: hsl(350, 17%, 7%);--blue-l98: hsl(200, 100%, 98%);--blue-l95: hsl(200, 100%, 94%);--blue-l90: hsl(200, 100%, 87%);--blue-l85: hsl(200, 100%, 80%);--blue-l80: hsl(200, 100%, 73%);--blue-l75: hsl(199, 100%, 64%);--blue-l70: hsl(200, 100%, 58%);--blue-l65: hsl(200, 100%, 49%);--blue-l60: hsl(200, 100%, 45%);--blue-l55: hsl(200, 100%, 41%);--blue-l50: hsl(200, 100%, 37%);--blue-l45: hsl(200, 100%, 33%);--blue-l40: hsl(200, 100%, 30%);--blue-l35: hsl(200, 100%, 25%);--blue-l30: hsl(200, 100%, 22%);--blue-l25: hsl(200, 100%, 19%);--blue-l20: hsl(200, 100%, 15%);--blue-l15: hsl(200, 100%, 12%);--blue-l10: hsl(200, 100%, 9%);--blue-l05: hsl(200, 100%, 6%);--orange-l98: hsl(20, 100%, 98%);--orange-l95: hsl(20, 100%, 95%);--orange-l90: hsl(20, 100%, 89%);--orange-l85: hsl(20, 100%, 84%);--orange-l80: hsl(20, 100%, 78%);--orange-d80: hsl(20, 50%, 78%);--orange-l75: hsl(20, 100%, 72%);--orange-l70: hsl(20, 100%, 66%);--orange-d70: hsl(20, 50%, 66%);--orange-l65: hsl(20, 100%, 56%);--orange-l60: hsl(20, 100%, 50%);--orange-d60: hsl(20, 50%, 50%);--orange-l55: hsl(20, 100%, 46%);--orange-l50: hsl(20, 100%, 42%);--orange-d50: hsl(20, 50%, 42%);--orange-l45: hsl(20, 100%, 37%);--orange-l40: hsl(20, 100%, 33%);--orange-d40: hsl(20, 50%, 33%);--orange-l35: hsl(20, 100%, 29%);--orange-l30: hsl(20, 100%, 25%);--orange-l25: hsl(20, 100%, 22%);--orange-l20: hsl(20, 100%, 17%);--orange-l15: hsl(20, 100%, 14%);--orange-l10: hsl(20, 100%, 10%);--orange-l05: hsl(20, 100%, 6%);--green-l98: hsl(125, 100%, 98%);--green-l95: hsl(125, 100%, 82%);--green-l90: hsl(125, 97%, 74%);--green-l85: hsl(125, 83%, 66%);--green-l80: hsl(125, 74%, 58%);--green-l75: hsl(125, 67%, 50%);--green-l70: hsl(125, 82%, 43%);--green-l65: hsl(125, 100%, 36%);--green-l60: hsl(125, 100%, 33%);--green-l55: hsl(125, 100%, 30%);--green-l50: hsl(125, 100%, 27%);--green-l45: hsl(125, 100%, 24%);--green-l40: hsl(125, 95%, 22%);--green-l35: hsl(125, 100%, 19%);--green-l30: hsl(125, 100%, 16%);--green-l25: hsl(125, 100%, 14%);--green-l20: hsl(125, 100%, 11%);--green-l15: hsl(125, 100%, 9%);--green-l10: hsl(125, 100%, 6%);--green-l05: hsl(125, 100%, 4%);--purple-l98: hsl(285, 100%, 98%);--purple-l95: hsl(285, 100%, 96%);--purple-l90: hsl(285, 100%, 92%);--purple-l85: hsl(285, 100%, 89%);--purple-l80: hsl(285, 100%, 85%);--purple-l75: hsl(285, 100%, 81%);--purple-l70: hsl(285, 100%, 77%);--purple-l65: hsl(285, 100%, 72%);--purple-l60: hsl(285, 100%, 66%);--purple-l55: hsl(285, 100%, 61%);--purple-l50: hsl(285, 100%, 50%);--purple-l45: hsl(285, 100%, 45%);--purple-l40: hsl(285, 100%, 40%);--purple-l35: hsl(285, 100%, 36%);--purple-l30: hsl(285, 100%, 31%);--purple-l25: hsl(285, 100%, 27%);--purple-l20: hsl(285, 100%, 22%);--purple-l15: hsl(285, 100%, 17%);--purple-l10: hsl(285, 100%, 13%);--purple-l05: hsl(285, 100%, 10%);--offWhite: hsl(200, 81%, 97%);--darkRed: hsl(0, 100%, 23%);--red: hsl(0, 100%, 48%);--lightRed: hsl(0, 100%, 90%);--accent-color: hsl(200, 100%, 37%);--accent-color-light: hsl(200, 100%, 49%);--enabled-resting-text: hsl(0, 0%, 5%);--enabled-resting-lightText: hsl(0, 0%, 10%);--enabled-resting-border: hsl(0, 0%, 75%);--enabled-resting-fill: hsl(0, 0%, 40%);--enabled-resting-background: hsl(0, 0%, 98%);--enabled-restingLight-text: hsl(0, 0%, 20%);--enabled-restingLight-lightText: hsl(0, 0%, 30%);--enabled-restingLight-border: hsl(0, 0%, 80%);--enabled-restingLight-fill: hsl(0, 0%, 60%);--enabled-restingLight-background: hsl(0, 0%, 98%);--enabled-focus-text: hsl(0, 0%, 0%);--enabled-focus-lightText: hsl(0, 0%, 10%);--enabled-focus-border: hsl(200, 25%, 63%);--enabled-focus-fill: hsl(200, 25%, 25%);--enabled-focus-background: white;--enabled-active-text: hsl(0, 0%, 0%);--enabled-active-lightText: hsl(0, 0%, 10%);--enabled-active-border: hsl(0, 0%, 63%);--enabled-active-fill: var(--accent-color);--enabled-active-background: white;--disabled-text: hsl(0, 0%, 40%);--disabled-text-light: hsl(0, 0%, 60%);--disabled-text-dark: hsl(0, 0%, 20%);--disabled-border: hsl(0, 0%, 82%);--disabled-fill: hsl(0, 0%, 82%);--disabled-background: hsl(0, 0%, 94%)}",dI=`<?xml version="1.0" encoding="UTF-8"?>\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">\r
  <path fill="hsl(200, 100%, 41%)" d="m491.109,170.926c-89.722,0-162.715,82.261-162.715,183.377,0,124.258,113.791,137.671,162.715,137.671s162.715-13.413,162.715-137.671c0-101.116-72.993-183.377-162.715-183.377Z"/>\r
  <path fill="hsl(200, 100%, 41%)" d="m920.448,79.552C840.896,0,719.097,0,500,0S159.104,0,79.552,79.552C0,159.104,0,280.903,0,500s0,340.896,79.552,420.448c79.552,79.552,201.351,79.552,420.448,79.552s340.896,0,420.448-79.552c79.552-79.552,79.552-201.351,79.552-420.448s0-340.896-79.552-420.448Zm-146.744,112.456c0,2.761-2.239,5-5,5h-7.034c-.038,0-.074-.01-.112-.011-.004,0-.007.001-.01.001h-45.856c-1.075,0-2.087.506-2.731,1.366l-8.66,11.546c27.074,41.021,42.88,90.25,42.88,143.144,0,70.001-27.646,127.253-79.957,165.578-44.577,32.657-105.478,49.921-176.114,49.921-55.318,0-104.663-10.591-144.875-30.869-10.283,10.57-17.335,24.213-17.335,38.766,0,34.131,21.332,54.11,94.524,54.11,90.099,0,163.146-23.565,231.294-23.565,80.615,0,85.357,57.752,85.357,99.583,0,118.551-27.271,209.05-292.825,209.05-33.161,0-97.221-1.724-132.317-9.312-3.75-.811-6.015-4.609-5.018-8.314l20.862-78.928c.909-3.377,4.229-5.502,7.667-4.855,21.23,3.999,80.354,10.479,108.806,10.479,156.167,0,209.013,8.004,209.245-98.506-.071-11.553,3.771-19.614-12.673-19.614-61.646,0-130.08,16.099-239.25,16.099-126.868,0-158.866-87.434-158.866-144.64,0-26.761,14.174-60.59,39.162-86.528-32.729-36.272-49.828-83.42-49.828-138.455,0-142.651,114.875-258.706,256.071-258.706,59.47,0,114.268,20.59,157.783,55.082l12.693-16.924c7.611-10.15,19.559-16.123,32.245-16.123h67.717c.01,0,.019.003.029.003.032,0,.062-.009.094-.009h7.034c2.761,0,5,2.239,5,5v70.632Z"/>\r
</svg>`,uI=":root{--dark-gradient-background: linear-gradient(135deg, var(--blue-l15), var(--purple-l05));--global-focus-style: 1px dashed var(--purple-l50);--global-transition: all 80ms ease;--animate-fade-in-slide-down: .18s ease-in fade-slide-in;--animate-fade-in: .18s ease-in fade-in;--animate-fade-out: .18s ease-out fade-out;--animate-fade-update: .14s ease-in fade-in-update;--l1-shadow: 0px 0px 2px rgba(0, 0, 0, .1);--l1-shadow-down: 0px 2px 2px rgba(0, 0, 0, .1);--l2-shadow: 0px 0px 4px rgba(0, 0, 0, .2);--l2-shadow-upper-left: -1px -1px 4px rgba(0, 0, 0, .2);--l2-shadow-down: 0px 4px 4px rgba(0, 0, 0, .3);--l3-shadow: 0px 0px 6px rgba(0, 0, 0, .3);--l3-shadow-down: 0px 6px 6px rgba(0, 0, 0, .3)}@font-face{font-family:FiraGo;font-style:normal;font-weight:400;src:url(/app/assets/FiraGO-Regular-aODw3bZ7.woff2)}*{margin:0;padding:0;font-family:FiraGo,Tahoma,Verdana,sans-serif;font-size:14px;font-weight:400;text-align:left;box-sizing:border-box;transition:var(--global-transition)}html,body{background-color:var(--dark-gradient-background);height:100%;width:100%;min-height:100%;min-width:100%;overflow:hidden}html[lang=en],html[lang=en] body{overflow:auto}::-webkit-scrollbar{width:8px;padding:1px;border-radius:4px;border:1px solid var(--gray-l90);background-color:var(--offWhite)}::-webkit-scrollbar-button{height:0px;background-color:transparent}::-webkit-scrollbar-track{width:8px}::-webkit-scrollbar-track-piece{background-color:transparent}::-webkit-scrollbar-thumb{margin:2px;background-color:var(--gray-l80);border-radius:4px}::-webkit-scrollbar-corner{display:none}::-webkit-resizer{display:block;border:2px outset var(--enabled-restingLight-background)}div,p,h1,h2,h3,table,td,label,button{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}b,strong{font-weight:700}a,a:visited{background-color:transparent;border-radius:4px;color:var(--blue-l55);text-decoration:none}a:active{color:var(--blue-l40);background-color:#0099e61a}a:focus,a:hover{color:var(--blue-l65);text-decoration:underline;cursor:pointer}a[danger],a[danger]:visited{color:var(--darkRed)}a[danger]:hover,a[danger]:focus{color:var(--red)}p{display:block}span:disabled,span[disabled=disabled]{color:var(--disabled-text)}hr{border-style:solid;border-color:var(--gray-l85)}h1{margin-left:0;color:var(--gray-l55);font-size:2em;margin-bottom:8px;clear:right}h2{color:var(--gray-l45);font-size:1.6em}h3{color:var(--gray-l45);font-size:1.3em;margin-bottom:4px}h4{color:var(--gray-l45);font-size:1.2em;margin-bottom:4px}table{border-collapse:collapse}td{vertical-align:top}svg{overflow:visible}.number{font-family:monospace}label,label:focus,label:active{display:inline}label:hover{color:#000}input,textarea{border:none;padding:0 0 0 4px;height:24px;text-align:left;font-family:monospace;background-color:var(--enabled-restingLight-background);color:var(--enabled-restingLight-text);border:1px solid var(--enabled-restingLight-border);border-radius:4px;-webkit-user-select:text;-moz-user-select:text;-ms-user-select:text;user-select:text}input:hover,textarea:hover{background-color:var(--enabled-focus-background);color:var(--enabled-focus-text);border-color:var(--enabled-focus-border)}input:focus,textarea:focus{background-color:var(--enabled-focus-background);color:var(--enabled-focus-text);border-color:var(--enabled-focus-border)}textarea:hover::-webkit-resizer,textarea:focus::-webkit-resizer{display:block;border:2px outset var(--enabled-focus-background)}info-bubble{width:12px}input:focus,button:focus,textarea:focus,info-bubble:focus,glyph-tile:focus{outline:var(--global-focus-style);outline-offset:-1px}input[type=image]{height:auto;width:auto;background-color:transparent;border-width:0px}input[type=number]{text-align:right;width:70px;border:1px solid white;border:1px solid var(--gray-l90);cursor:default}input[type=text][disabled=disabled],input[type=number][disabled=disabled]{background-color:var(--gray-l90);border:1px solid var(--gray-l90);color:var(--gray-l65)}input[type=checkbox]{accent-color:var(--accent-color);opacity:.75}ul li{margin-left:20px;margin-top:10px}canvas:focus,canvas:focus-visible,edit-canvas:focus,edit-canvas:focus-visible{border:0;border-image:none;outline:0}@keyframes fade-slide-in{0%{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}@keyframes fade-in-update{0%{opacity:.6}to{opacity:1}}@keyframes fade-in{0%{opacity:0;transform:scale(1.01)}to{opacity:1;transform:scale(1)}}@keyframes fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.99)}}.span-all-columns{grid-column:-1 / 1!important}button,button:active,button:hover,button:focus{text-align:center;padding:4px 8px;margin:2px 0;cursor:pointer;border-radius:4px;border:1px solid var(--gray-l90);background-color:var(--gray-l90);color:var(--enabled-text);box-shadow:var(--l1-shadow)}button:hover{color:var(--enabled-focus-text);border-color:var(--blue-l85);box-shadow:var(--l1-shadow)}button[disabled],button[disabled]:active,button[disabled]:hover,button[disabled]:focus{background-color:var(--gray-l95);border-color:var(--gray-l95);color:var(--disabled-text);cursor:default}.button__call-to-action,.button__call-to-action:hover,.button__call-to-action:active,.button__call-to-action:focus{background-color:var(--blue-l60);color:var(--gray-l95)}.button__call-to-action:hover{color:#fff}",pI="dialog{z-index:1000}#toast,#error{display:none;width:300px;position:absolute;left:520px;top:0;margin:5px 0;background-color:var(--green-l90);color:var(--green-l10);padding:4px 8px;z-index:2010;text-align:center;border:1px solid var(--green-l60);border-radius:4px;box-shadow:var(--l3-shadow-down);animation:var(--animate-fade-in-slide-down)}#toast[fancy]{background-color:var(--purple-l30);background:linear-gradient(135deg,var(--purple-l25),var(--purple-l10));color:var(--purple-l95);font-size:1.2em;border-color:var(--purple-l30);padding:10px}#toast a{color:var(--green-l10)}#notation{display:none;position:absolute;right:900px;top:400px;width:auto;height:auto;padding:0;z-index:2020;background-color:#e5eaef;border:5px solid rgb(229,234,239);border-radius:5px 5px 0;box-shadow:var(--l2-shadow-upper-left);animation:var(--animate-fade-in)}.notation__path-add-point{display:grid;grid-template-columns:20px min-content min-content;margin:0 5px 2px}.notation__path-add-point span{font-family:monospace}.notation__path-add-point label{font-family:monospace;color:var(--enabled-restingLight-lightText)}#error{margin-top:10px;border-color:var(--red);color:var(--darkRed);background-color:var(--lightRed);display:grid;grid-template-rows:20px 1fr;padding:10px 12px 12px;row-gap:10px}#error hr{border-color:var(--red);margin:10px 0}.error__header{display:grid;grid-template-columns:1fr 20px}.error__header h3{color:var(--darkRed)}.error__header button{background-color:var(--darkRed);border-color:var(--darkRed);color:var(--lightRed);width:20px;height:20px;line-height:20px;padding:0;margin:0}.error__header button:hover{color:#fff;border-color:var(--red)}#context-menu{display:grid;grid-template-columns:24px 1fr min-content min-content;column-gap:0px;row-gap:5px;width:fit-content;overflow-y:auto;padding:10px;position:absolute;z-index:2030;background-color:var(--enabled-resting-background);border:1px solid var(--enabled-focus-border);border-radius:0 4px 4px;box-shadow:var(--l3-shadow-down);animation:var(--animate-fade-in-slide-down)}#context-menu:focus{outline:0}.context-menu-row{display:contents;padding:5px 10px 5px 5px;height:24px;border-radius:4px}.context-menu-row:hover>span,.context-menu-row:hover>.row-notes,.context-menu-row:hover>.row-notes span,.context-menu-row:hover>.row-notes code{background-color:var(--enabled-focus-background);color:var(--blue-l45);cursor:pointer}.context-menu-row:focus{outline:var(--global-focus-style)}.context-menu-row[disabled]{opacity:.5;color:var(--disabled-text-light)}.context-menu-row[disabled]:hover>span,.context-menu-row[disabled]:hover>.row-notes,.context-menu-row[disabled]:hover>.row-notes span,.context-menu-row[disabled]:hover>.row-notes code{color:var(--disabled-text-light);cursor:default;background-color:transparent}.context-menu-row[disabled] svg g{fill:var(--disabled-text-light)!important}#context-menu .spanAll h2{font-size:.8em;color:var(--enabled-restingLight-lightText);font-family:monospace;padding:0 20px 0 0}.context-menu-row hr,.context-menu-row hr:hover,.context-menu-row hr:active,.context-menu-row hr:focus{margin:8px 0;grid-column:1 / -1;border-width:0px 0px 1px 0px;border-color:var(--gray-l90)}.context-menu-row .row-icon{height:24px;width:24px}.context-menu-row .row-icon svg{height:20px;width:20px;margin:2px}.context-menu-row .row-name{line-height:22px;height:24px;padding:2px 20px 0 10px;display:flex}.context-menu-row .row-name svg{margin-right:10px}.context-menu-row .row-notes{background-color:transparent;width:max-content;height:24px;opacity:.8;display:contents;margin-left:20px}.context-menu-row .row-notes code{height:20px;line-height:18px;margin:2px;font-size:.8em;min-height:24px;min-width:24px}.context-menu-row .row-notes span{grid-column:span 2;font-size:.8em;line-height:24px;padding:0 0 0 4px;height:24px;margin:0}#modal-dialog{display:block;position:absolute;text-align:center;border-width:0px;padding:0px auto;left:0;top:0;width:100vw;height:100vh;z-index:2000;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);background-color:#ffffffbf;animation:var(--animate-fade-in)}.modal-dialog__content{display:grid;grid-template-rows:30px 1fr;width:clamp(500px,66vw,1000px);max-height:calc(100vh - 80px);overflow-y:hidden;margin:40px auto;text-align:left;background-color:var(--enabled-focus-background);border:1px solid var(--blue-l60);border-radius:8px;box-shadow:var(--l3-shadow-down);animation:var(--animate-fade-in-slide-down)}.modal-dialog__header{margin:4px;height:20px;display:grid;grid-template-columns:1fr 20px}.modal-dialog__body{display:block;max-height:calc(100vh - 120px);overflow-y:auto;padding:0 20px 20px}.modal-dialog__close-button{background-color:var(--blue-l95);border-color:var(--blue-l85);color:var(--blue-l50);text-align:center;width:20px;height:20px;line-height:14px;font-size:1.2em;padding:0 0 2px;margin:0}.modal-dialog__close-button:hover{background-color:var(--blue-l90);color:var(--blue-l30);border-color:var(--blue-l70);cursor:pointer;padding:0 0 2px;margin:0}.modal-dialog__close-button:active,.modal-dialog__close-button:focus{background-color:var(--blue-l90);color:var(--blue-l50);cursor:pointer;padding:0;margin:0}.modal-dialog__glyph-chooser-scroll-area{height:100%;padding:10px 5px 5px 10px;background-color:var(--offWhite);margin-bottom:10px}",SI="";class qa extends HTMLElement{constructor(e={}){super(),this.isSetUp=!1,this.initialAttributes=e,this.observedAttrs=["text","font-size","line-gap","page-padding","show-page-extras","show-line-extras","show-character-extras","show-placeholder-message","width-adjustment"]}connectedCallback(){this.constructor.name!=="DisplayCanvas"&&(this.__proto__=customElements.get("display-canvas").prototype),this.textBlockOptions=new Kr,Object.keys(this.initialAttributes).forEach(n=>{let a=this.initialAttributes[n];n!=="_text"?(n!=="width"&&n!=="height"&&this.setAttribute(G1(n),a),this.textBlockOptions[pi(n)]&&(this.textBlockOptions[pi(n)]=a)):(this.textBlockOptions.text=this.initialAttributes._text,this.setAttribute("text",this.textBlockOptions.text))}),this.observedAttrs.forEach(n=>{if(this.hasAttribute(n)){let a=this.getAttribute(n);n.startsWith("show")?a==="false"?a=!1:a=!0:n!=="text"&&(a=parseFloat(a)),this.textBlockOptions[pi(n)]=a}});const e=this.attachShadow({mode:"open"}),r=R({tag:"style",innerHTML:SI});e.appendChild(r),this.canvas=R({tag:"canvas",id:"mainDisplayCanvas"}),e.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.drawCrisp=!1,this.isSetUp=!0,this.resizeAndRedraw?this.resizeAndRedraw():console.warn(`${this.constructor.name}: Methods not available on connectedCallback`)}resizeAndRedraw(){this.isSetUp&&(this.updateTextBlock(),this.updateCanvasSize(),this.redraw())}updateCanvasSize(){var s;const e=(s=this==null?void 0:this.parentElement)==null?void 0:s.getClientRects()[0],r=this.textBlockOptions.pageHeight,n=this.textBlockOptions.pageWidth;let a=1e3,o=1e3;r==="auto"?(a=this.textBlock.pixelHeight,a+=this.textBlockOptions.pagePadding):r==="fit"?a=e.height:isNaN(parseInt(r))||(a=parseInt(r)),n==="fit"?o=e.width:isNaN(parseInt(n))||(o=parseInt(n)),this.widthAdjustment&&(o+=this.widthAdjustment),this.height=a,this.width=o,this.canvas.height=a,this.canvas.width=o}updateTextBlock(){let e=this.calculatePageMaxes(),r=!1,n=parseInt(this.getAttribute("project-editor"));isNaN(n)||(r=rt().projectEditors[n].project),this.textBlock=new K0({options:this.textBlockOptions,canvasMaxes:e,ctx:this.ctx,drawPageExtras:this.drawDisplayPageExtras,drawLineExtras:this.drawDisplayLineExtras,drawCharacterExtras:this.drawDisplayCharacterExtras,drawCharacter:this.drawDisplayCharacter,project:r})}calculatePageMaxes(){var s;const e=(s=this==null?void 0:this.parentElement)==null?void 0:s.getClientRects()[0],r=this.textBlockOptions.pagePadding,n=this.textBlockOptions.pageHeight,a=this.textBlockOptions.pageWidth,o={xMin:r,yMin:r,xMax:1e3,yMax:1e3};return n==="auto"?o.yMax=1/0:n==="fit"?o.yMax=e.height-r:isNaN(parseInt(n))||(o.yMax=parseInt(n)),a==="fit"?o.xMax=e.width-r:isNaN(parseInt(a))||(o.xMax=parseInt(a)),this.widthAdjustment&&(o.xMax+=this.widthAdjustment),o}static get observedAttributes(){return this.observedAttrs}attributeChangedCallback(e,r,n){this.constructor.name==="DisplayCanvas"&&(e==="text"&&(this.textBlockOptions.text=n,this.resizeAndRedraw()),e==="font-size"&&(this.textBlockOptions.fontSize=Math.max(parseInt(n),1),this.resizeAndRedraw()),e==="line-gap"&&(this.textBlockOptions.lineGap=Math.max(parseInt(n),0),this.resizeAndRedraw()),e==="page-padding"&&(this.textBlockOptions.pagePadding=Math.max(parseInt(n),0),this.resizeAndRedraw()),e==="show-page-extras"&&(this.textBlockOptions.showPageExtras=n==="true",this.redraw()),e==="show-line-extras"&&(this.textBlockOptions.showLineExtras=n==="true",this.redraw()),e==="show-character-extras"&&(this.textBlockOptions.showCharacterExtras=n==="true",this.redraw()),e==="show-placeholder-message"&&(this.textBlockOptions.showPlaceholderMessage=n==="true",this.redraw()),e==="width-adjustment"&&(this.widthAdjustment=parseInt(n),this.resizeAndRedraw()))}redraw(){if(this.isSetUp){if(this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.textBlock.hasDrawableCharacters)this.textBlock.draw({showPageExtras:this.textBlockOptions.showPageExtras,showLineExtras:this.textBlockOptions.showLineExtras,showCharacterExtras:this.textBlockOptions.showCharacterExtras,showCharacter:!0});else if(this.textBlockOptions.showPlaceholderMessage){this.ctx.fillStyle=jr.disabled.text,this.ctx.font="14px sans-serif",this.ctx.textBaseline="middle";let e=this.textBlock.canvasMaxes.xMin,r=this.height/2;this.ctx.fillText("Project preview text will be shown here.",e,r)}}}iterator(e){const r=this.textBlock.data;for(let n=0;n<r.length;n++)for(let a=0;a<r[n].length;a++)e(r[n][a],this)}drawDisplayPageExtras(e,r){const n=r.canvasMaxes,a=n.yMin||0,o=n.yMax===1/0?r.pixelHeight:n.yMax,s=n.xMin||0,E=(n.xMax||1e3)-s,T=o-a;e.fillStyle="transparent",e.strokeStyle=xt.gray.l90,e.lineWidth=1,e.strokeRect(Ot(s),Ot(a),ae(E),ae(T))}drawDisplayLineExtras(e,r,n){e.strokeStyle=xt.gray.l85,e.beginPath(),e.moveTo(n.canvasMaxes.xMin,r.view.dy),e.lineTo(n.canvasMaxes.xMax,r.view.dy),e.closePath(),e.stroke()}drawDisplayCharacterExtras(e,r){const n=xe(),a=n.settings.font,o=r.view.dz;let s=r.widths.advance*o,x=n.totalVertical*o,E=r.view.dy-a.ascent*o,T=r.view.dx;const d=r.widths.kern*o*-1;r.widths.kern&&(e.fillStyle="orange",e.globalAlpha=.3,e.fillRect(T+s-d,E,d,x),e.globalAlpha=1),e.fillStyle="transparent",e.strokeStyle=xt.blue.l85,e.lineWidth=1,this.drawCrisp&&(T=Ot(T),E=Ot(E),s=ae(s),x=ae(x)),e.strokeRect(T,E,s,x)}drawDisplayCharacter(e,r){const n=r.item,a=or(r.view);n&&(e.fillStyle=jr.enabled.resting.text,e.strokeStyle="transparent",ya(n,e,a,1))}}function CI(t){let e,r;if(typeof window.DOMParser<"u")e=new window.DOMParser().parseFromString(t,"text/xml");else if(typeof window.ActiveXObject<"u"&&new window.ActiveXObject("Microsoft.XMLDOM"))e=new window.ActiveXObject("Microsoft.XMLDOM"),e.async="false",e.loadXML(t);else throw console.warn("No XML document parser found."),r=new SyntaxError("No XML document parser found."),r;if(e.getElementsByTagName("parsererror").length){const E=e.getElementsByTagName("div")[0].innerHTML;throw r=new SyntaxError(x(E)),r}return{name:e.documentElement.nodeName,attributes:s(e.documentElement.attributes),content:o(e.documentElement)};function o(E){const T=E.childNodes;if(T.length===0)return x(E.nodeValue);const d=[];let g,y,C;for(const k of T)g={name:"",attributes:{},content:""},k.nodeName!=="#comment"&&(y=o(k),C=s(k.attributes),k.nodeName==="#text"&&JSON.stringify(C)==="{}"?g=x(y):(g.name=k.nodeName,g.attributes=C,g.content=y),g!==""&&d.push(g));return d}function s(E){if(!E||!E.length)return{};const T={};for(const d of E)T[d.name]=x(d.value);return T}function x(E){try{return E=E.replace(/^\s+|\s+$/g,""),E.replace(/(\r\n|\n|\r|\t)/gm,"")}catch{return""}}}let D0=0;async function Wo(t){const e=document.querySelector("#progress-indicator__message");if(e){const r=document.querySelector("#progress-indicator__bar");r&&(D0=(D0+.95)%100,r.style.backgroundPosition=`${D0}%`,t&&(e.innerHTML=t)),await ra()}}function gI(){let t=R({id:"progress-indicator__wrapper"}),e=R({id:"progress-indicator__message",innerHTML:"Working..."}),r=R({tag:"div",id:"progress-indicator__bar"});return ne(t,[e,r]),t}function RI(t){let e=R({tag:"div",className:"panel__card",innerHTML:"<h3>Component instance</h3>"}),r=Ue("name"),n=bt(t,"name","currentComponentInstance","input"),a=yI(t),o=mI(t),s=Ue("flip vertical",`
		Flip top to bottom,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),x=Hn(t,"isFlippedNS","currentComponentInstance"),E=Ue("flip horizontal",`
		Flip left to right,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),T=Hn(t,"isFlippedEW","currentComponentInstance"),d=Ue("reverse winding",`
		Reverse all the windings,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),g=Hn(t,"reverseWinding","currentComponentInstance"),y=Ue("rotate"),C=bt(t,"rotation","currentComponentInstance","input-number"),k=Ue("rotate first",NI());k.querySelector("info-bubble").setAttribute("bubble-width","540px");let Y=Hn(t,"rotateFirst","currentComponentInstance"),_=R({tag:"h3",innerHTML:"Component root"}),V=X1(t.link);return ne(e,[r,n,a,o,s,x,E,T,d,g,y,C]),t.rotation!==0&&ne(e,[k,Y]),ne(e,[Wr(),_,V]),ne(e,Wr()),ne(e,C2()),e}function yI(t){let e=Ue(`Δ x${ka()}Δ y`,`
		The difference in x or y position,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),r=R({tag:"div",className:"doubleInput"}),n=bt(t,"translateX","currentComponentInstance","input-number"),a=bt(t,"translateY","currentComponentInstance","input-number");return r.appendChild(n),r.appendChild(Ka()),r.appendChild(a),[e,r]}function mI(t){let e=Ue(`Δ width${ka()}Δ height`,`
		The difference in width or height,
		as compared to the root Glyph or Component
		that this Component Instance is linked to.
	`),r=R({tag:"div",className:"doubleInput"}),n=bt(t,"resizeWidth","currentComponentInstance","input-number"),a=bt(t,"resizeHeight","currentComponentInstance","input-number");r.appendChild(n),r.appendChild(Ka()),r.appendChild(a);let o=Ue("lock aspect ratio",`
		When either the width or height is adjusted,
		the overall size will be kept proportional.
		<br><br>
		Maintaining aspect ratio will override value
		locks if need be.
	`),s=Hn(t,"ratioLock","currentComponentInstance");return[e,r,o,s]}function NI(){return`
		<h1>Rotate First - Resize First</h1>
		<div style="width: 500px;">
		Component Instances are rotated around their center point.  But if they are resized, their center point changes.  When Component Instances are rendered, the Root Component is adjusted according to the delta values stored by the Component Instance.
		<br><br>
		This option changes how this Component Instance is rendered.  The default order is to resize, then rotate. When this option is selected to be true, the new order will be rotate, then resize. This order has an impact on the Component Instance's resulting shape.
		<br><br>
		<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAFXCAYAAABUXrzKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAFkJJREFUeNrs3btz29aCwOGjTLoUyyb10m1SRC5uHapNE7mIW0ttdmdszexsK6m9jZRitxXdKoWdJq3ov8Da4t42vPUtrC2yLReHAMSH+ab4wMH3zdC2KFkPCAc/HBAEQwAAAAAAAAAAAAAAAAAAAAAA2JTbXsNC2L4vLQJqsoFpZX8eZre4oXnIbvfh5UFnysceZ+97b6HByt5k46ibjaO2RSHo8FSzhPPsdlKEfPz9Mewx3JfZhqdb3Bc/9ia7HViAsJabbDwFURd0WDfmx0WYZx36axSxP84+/uxxIwSIegWZhZBizE/GwlzOxD9kt24R8u+nztyjlwcHS37NqxAPM076v7e93oz/eTRy6D//3uNRhWZ2i/efZe+/90tlB+OoWYyRVcTx1Rp6+3ShqOdf87z4v83i3jgOfvEwmKBTz43Qx6FQvy82Jg8TPjZ+zNXEjdYyQc8fn7+b+H/H3zcr6IOP7RQ7H6+Kn+PZxO8fNjuW5q27y5od9Xxn9ipMP6p2aqY/2xcWAYkZPszezjYAL6bGML//lzU3eo3ia3bnfGS3H/rPb52hj3ldfFyM/EU/9vnPcuzXSsXlJ6LO/5hGf9yG8LzYMX5W7JSHIvbM4DF0UppRxLPYW0MBPV3g49edgcSYx6MC16E85D4t6POVZ+APb+BCGBx6hG26L3YqVxGPLp0MrcdHcx86iofUb3vPHk9Qze/rFue3HPfHR37U4H5orL0f+bz5Dvbk9wk6VMrwTPZywZiv/nzZ/BDhcTGj+G1K0A+X+IxvQ34SUZydd4oZeyg+P2xXfgSrs+LYaC0V8+GAz9vJiN/Xbe+7Yuz92J/ND5QPod0XO9lm6FBR3w39e5EN0Ys1Yt4sNh5xA3Q2I9yNx79ve8NHA34L+UMCD0Mbs3axoTovbvF9pwts5GAfLRfz6U5GYp6LR99a/XEXd4DjQ1T5TsTJ4/treN6JoJOSxsJ7+utvZMrH6l8UM4Z5Hz8e/FY/2re90Q3ey4Oz7L74uH5zbAMGmxd3VJ9mB7L7JDHPj6SVR6rORo4e3PbiDvldMY46YfDMlsu6PjNE0GH5jcxFEeTLqVebG7guZirdMHhM/McweMrcu5Cf+BPGdkbMytn2eh2D+I/sdrH253qKs9Hzx8PLh8U+H2vx7dteee7Ku+Lj7osTSmtJ0ElJd2TPfhN76fmM4XzhDUc+wx5/LC9uiP4nlCfUbep7heVifhLmnXuyve9nOObtGWPtMoxeT+Kszr9GT1sjJR+G/v16Q1/jvPj7sH/BmPI2fLb84L5FZzBeyIJ9iPm+fD9xp/mPkD9MdTnn2SonY+PnVZ1/lS4sQ0obpkaxISgH+PMnn/nmJ7a1FvrYWRenyTdaHzf2fcJqMe+GVR/uiddPeJqYlzPzeReiaYbBRaTOip3t8ryWWl5VTtBJbQN1MTSLnn+Wbb4TcJJ9zPWaX7f1OEsfvVJc/H7aIycaDQ4nHob8+fLP/OLY8VhZ37KXS14n5qM71+/7F5C67cXH0q+KcV/LqysKOinO0stYllG/DONPEcs/9iQMLjXZnnshmtWC3psw8xme4b9wjWr2ZKzsOuifwvyHnzr9IwGDnZHReI9HXtAh2Q1VZ+jfh2Mbj7hBeL7yU3amB33a45PxqMHZAmfJwzbHyuXOzhKfd97JYAzHw+sfJ+4Qjx+GX/fIm6DD3myoYkyPF9xIvNjoIbr8cGLjMeaeX85+Rv2yzk/7EnTY741VnDnHM1/j382xGXncs39rloxx8hj13wQdAKoe9dueV/YDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAglK+9DCw2XhrFq7qxIV9YBLDSxim+1vrH4nXOgdkhv8j+9Uf/Fv8t7Bvh9dBhtZifFG/F11U/Ci8P7i0YGAt5CG+y2+vsNh7wOG5+yW7X2dh5sLAEHXYd8yDqsEDI/8yGyO9Zv//ZDeGn8xC+bgq7oMOexLzTzjdQ53chfNUQdZgV8t+v83+XWifCLuiwJzH/79P8/uahqCPki4Z8nLALOuxFzEuiTn3HRhwXV0uHfNwPb/Kwf9UQdkGHHcVc1KlvyM/jmr9WyIfFsRPD/sNrYRd02FHMRR0hXz3kwi7osFcxF3WE/GkJu6DDzmIu6gj5tsLezW6X2bhq+yUJOmwm5qKOkAu7oEMiMRd1hFzY9yro+bV366aTrRAdo1rM1465qCPkwr5HQe/VcHnEFeHC6BbzJyXqCLmw70XQf71Mfyl8+30I37QEXcyfPuaiThVCXq7/cXsfr7deRcI+8xfeK6Ke/u2ni17x84p53WJeruc/32x+PWse9sLNp3Jd++SlV9lJyG97fzyu9+W6/3Uzne35V418mz4Ya73iZz5J/dfr9dAxM9/kzHxYN5uQXx6VhzLjFOJO1NlqyEO4eZyVx/X+357l635VZ+WTxPH1azY3+/dn+RGHfLw1+z974mEXdMR8GzEXdXazrrdqE3JhF3TEfOtEne2E/K6/btUt5NPC/p/P82WQSzLsgo6Y74Kos/mQt2od8nHxZ4/LIC6LRMMu6Ii5qCPkwp5A2AUdMRd1hFzYPw97S9BBzEUdIa9+2O/6y7hCYRd0xFzUEXImh71VpbALOmIu6gg5CYRd0BFzUUfISSDsgo6YizpVCPnfO0Iu7IKOmIs6lQ55XBcujoRc2AUdMRd1Kh3yv3UsI2EXdMRc1BFy6hB2QUfMRZ3tr7fNYt0V8lTCHq8V//fOTsMu6Ii5qLP9kP/xuO4KeTpjNP4O4+9yR2EXdMRc1BFynkr8Xe4o7IKOmIs6Qs72w/7k41bQEXNRR8jZftg/9teRuK4IOmJ+Wt9lIepCTgphP+mvK08UdkFHzEUdISeBsAs6Yi7qCDkJhF3QEXNRR8hJIOyCjpiLOuuEvLywiJCz47ALOmIu6qwT8tFLf8LOwi7oiLmoI+QkEHZBR8xFnc/Xw0Z2uxJy9irscWzPCLugs1+zoRCOH9/+/RfLZJ2oD/bqY9RfWShLOXkMeenXSyFnt2H/fJsY19FzQWf/vDzIpkAh2w0N/allOL8LoWliuZKfb0L4y+O+UTtbtmcWylLr4nX2ZzYVD5eP62Ncpv+VTdhbJ5YP2xXXubjuxXVwoN1fR18enAo6+7ohvX+M+lcNUV815oPotIcHPEutiw/Z7WIk7F83hZ3dhDyue+MhzydBQdARdTFn+bBf9+8Tdjbp21YIf/24cMgFHVEXc5YP+1kR9raws5GQX9yNb+/mhlzQEXUxZ7X1slssX2Hn6UP+TWvpkAs6oi7mCDsJhFzQEXUxZ9Nhjxvrb1uWERsNuaAj6mLOpsMeN9ZxXRV2NhhyQUfUxRxhJ4GQCzqiLuYIOwmEXNARdTFH2Ekg5IKOqIs5ws7mQ97Jbs83GXJBR9TFHGFnsyE/yn7XR8W2auMEHVEXc4SdzYS8s81vR9ARdTFH2FlG3L7sUcgFHVEXc/Yz7EdFHIR935QXDIovnLJHIRd0RF3M2c/1uNOPg7DvX8hHL+m7NyEXdERdzBF2Egi5oCPqYk4KYR+8XjY1DbmgI+piTgphj9GJ646w1zbkgo6oizmphD2uO8Je25ALOqIu5gi7kCcQckFH1MUcYRfyBEIu6Ij6rqMu5gj7PoS8W/WQCzqivsuoiznCvg8hjy+Y8qzqIRd0RH1XURdzhH1fQt5O6ccVdER9m1EXc4RdyAUdKh51MWd/wt5NMuxxLP90kV9rvUYhLx1Mfc9tr1fDVf4y+4VfGPk1ctuLFc9qHhrhz4dsDci2dd0NvHSxmLN/635cIc+z26Dknax3v16G8M9u9UL+w5vs9jr/9yDkl6lHXNAFnW1GXcwRdiHfadBB1MUcYd/HsAu5oMNWoy7mpBD2OBZ+/yW7Xef/FnJBh1pFXcwRdiEXdKh41MUcYRdyQYeKR13MEXYhF3SoeNTFHGEXckGHikddzBH21cM+OeTxk2SfMFxn4+nBAhd02HzUxRxhXy3sQi7osDdRF3NYPuxCLuiwV1H/eyeEvxyLOXwe9qv+OJkU9hjyn86FXNBhj6I+IOYwOk7i+MjKHV6PhP3/HoZfBEbIBR32KupiDsuEXcgFHfYw6q+yDdKZhQELhz0IOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD77MAigBlue4f9v18e3FsY1HD9b2R/xjFwn42BBwtE0KHKG7RW9ue77HYk6tRknT/J/vwxux2PvScG/X12e5uNhc7Yxzez+y4svN36wiKAueIs5e5xtg5phvwwu33M/nUzIeblODgpxsK7/uw9j/mNhbcfvrQIYKmoLzdTz2f4reKtbnbrZP+/a3GydzGP63e+noeR9TWEf2S370J+6L1ZvO947O1Vvmb5ObrZmGgP3d8sdhwmGz8SkH/8cfG9t+s8vhxypy4brLuhsK4jHnacH/U85DdTNninIxsw2O3YiOvox6GYx3X7bOSw+vz1+nKpQ+75DsTH4q24k3s09L7Zs/6XBwdzdkRqO77M0GH5mfpVP+rTN1aNYiNTznLi447/G/LHJQ/7G6vbXnfiBhO272Ys5kdTT4CL6+xt75diDKz7NadpDo2dt3M+z1Wxk/28+PumuE/QIWGrntBWnuU7/HlezPwfcWN42zvt/9+XB9dD77nI7v+j2GC9CvnhTNjl7DzOuFtDAT2aeTZ7Pnu+WvNrXhVjqhNmHzV7u8Csv1UcHegWnzvubBz3f64a7jALOvXw8uBsjQ3e3UKzl9Gv1566kQrh/HFGNPr5j8bOHo4bvjfFzOOZpw2xAa+G/n25QMzXOwEuX9/fFDH/MCXo/7LEZ4wh/34s8OX9ZujA1Bn+0RNE9cfi7w9F+OMhzOtiIxcPxT8vZviHxX2hf0RAzNmMwwV2QkvNfvQnmz8bzh+KelfsoL4YWr+nf0/5DkDo/5/J562c9T9nfuTrofi/13U9MU7QYVsxzzdOh2HwfN7BzCifWRwWs/ezoZnQtcfa2ULQ569j6z/PvHys/kWx0zrv48+LWzl+uiE/We/90Pf0vv/MkxBeF5+71iecCjrpyWe359nAfrFHMT8sZieh2Ch1hzZK5WPuH/uzlvys4/zpPNNnRFClMXkS8qeWtUeCPFl5KL7cySjPY2kWs/EXY1HvBOej9LmwDCnGfPxpLKuLsV0/5o2h2Ul74gwiP5xYxru8qMepQ+1sWLlj2dzgmIyf+6r4WmcLjLmL/lPT4lPZ8ls8g/3Z0Pd67tcm6Ij5Lr+nwyLmp3OOBpQewupn5sOi7h+DvrkrIZY7s/FrxSNQF/3b4GS2ZnHfyYzId4d2eF2xcQqH3Ek15o2hE2qWn7U8xUk1o9/T7Mf2BrP4ctYUZzX5NeRhc34LgyNCceb7YgNfoxyHx2HyJWWbxdfuhNnPH3e0StCp6cy8vG8VcSZwsbWYj85iOsVG9Y/+hvC292bsuezwlOJj0VfFunfcnyUvclJZ3AFd/OGgaeeBfF/EPu7Avu3/Pfvzvho7qsAYl34l1aCv43KtM3pHv5/7YhY0SX7d6cHze/MrXuX3HYfBU3yeu/47Gxw/5bo2f/0fHEmKs+r1ThbND7vnM/Py0q+DS8vGHY0PxfrfKGI+fG5J2y/ODJ0UxRPK8qeuDEe93OtfRWfN7+h46Ps4DNMf8+sUT925GtqQdoufKT4d533xud6F/NKWsInxE9e1GMiT4p7z7O1Xxfgpx0Jcn38cW7fvNrRexp2FN2Hy89SvxdwMnfrN1Edf8GG730ecZbQW+Mj2UPAfPju0ns+Gyo3ae6/HzobX23LGvIj84jDrXCNhME7GX22tvH/4CnAfjAFBp75Rv99Z0KHa4+c8TD55rQx5PHJ05imVgg7b2yg9zYVloI5jqBk+f7io46qFwC42SA0LAQAAAAAAAAAAAAAAAAAAAAAAAABIQHw539vep+ISylSIa7kDMIh5/nrkUXzxlSOvcCboAFQ35kHUq+cLiwBAzB9j3s3afXkUwp/9V0eNL3J05/A7AFQh5re9Xv/214+98FWjl93bC83DXrj51Cve5zF1AKhczMubqANAxWMu6gCQSMxFHQASibmoA0AiMRd1AEgk5qIOAInEXNT3mivFAaQe88kXjVlPM2v4+V3Idg7iW64oJ+gAVC7moi7oACQSc1EXdAASibmoCzoAicRc1AUdgERiLuqCDkAiMRd1QQcgkZiLuqADkEjMRV3QAUgk5qIu6AAkEnNRF3QAEom5qAs6AInEXNQFHYBEYi7qgg5AIjEXdUEHEPNEYi7qgg4g5onEXNQFHUDME4m5qAs6gJgnRtQFHUDMRR1BBxBzURd0AMRc1KsS9NveXQ2Xx9ts5WlbLZbeCGWjMFxZEMYIYi7qu/PljPe1arg8PlglVtKo6foSjBHE/ImVP38e9bhtucuWj6ivGfRcXLCp+/5VlqMTa8NTqMP6UkfGiJiLegJB/1sn/aXwjcnlk6nD+lJHxoiYi/re+8IiABDzvY56vlzKqB9aMIIOIOaiLugAiLmoCzoAYi7qgg4g5qIu6oIOsHuDiy+9PRNzURd0gIqKF2nIK/4f7/IroiHqgg5QMfnzp/Oox8uaxudXi7qoCzqAqIu6qAs6gKiLuqADIOqiLugAiLqoCzqAqCPqgg4g6qIu6ACIuqgLOgCiLuqCDiDqiLqgA4i6qCccdUEHEHVRF3QARF3UBR0AURd1QQcQdURd0AFEXdSTibqgA4i6qCcQdUEHEHVRTyDqgg4g6qKeQNQFHUDURT2BqAs6gKiTQNQFHUDUSSDqgg4g6iQQdUEHEHUSiLqgA4g6CURd0AFEnQSiLugAok4CURd0AFEngagLOoCok0DUBR1A1Ekg6oIOIOokEHVBBxB1Eoi6oAOIOglEXdABRJ0Eoi7oAKJuuSQQdUEHEHVRTyDqgg4g6qKeQNQFHUDURT2BqAs6gKiLegJRF3QAURf1BKIu6ACIegJRF3QARH2TUc+VUW8IOgCiXjU/vB5+6yxbvg+CDoCoV8nPNyG0Tsq3TrPl2t7klxN0AES94jEXdABEPYGYCzoAop5AzAUdAFFPIObRl3M/4ttW+r+Er//VivhU6rC+1JExQoz6bS9G/S6LeqMf9fiUrPjULHYe88WCHn9psCjrC4i6mLd38W3MCnqnhr+WrhG7koeari/BGEHUax71PYk5AKwmXsb0tvcpu/XCzadeaB72snvrdfv5ptf/+fPbiZUCAFEXcwAQdTEHAFEXcwCoTdTFHABRF3MAEHUxBwBRF3MAqGvUxRwAKh51MQeAikddzAGg4lEXcwCoeNTFHAAqHnUxB4CKR13MAaDiURdzAKh41MUcACoedTEHgIpHXcwBoOJRF3MAqHjUxRwAKh51MQeAikddzAGg4lEXcwCoeNTFHAAqHnUxB4CKR13MAaDiURdzAKh41MUcACoedTEPB9YQACoV9RDuslsj/PkQwuVRCD+8DqH12PDT8PKgLegAUKWoj6ptzAUdgFSiXuuYA0C1o54/pn5iYQAAAAAAAAAAAAAAAAAAAAAAAACwf/5fgAEANYw/F5fXdHUAAAAASUVORK5CYII='/>
		<br><br>
		If a Component Instance is not resized, or not rotated, this option has no effect.
		</div>
	`}function DI(t){let e=R({tag:"div",className:"panel__card",innerHTML:`<h3>${t.displayType} ${t.ident||""}</h3>`}),r=Ue("advance width"),n=R({tag:"div",className:"doubleInput"}),a=bt(t,"advanceWidth","currentItem","input-number"),o=R({tag:"button",className:"panel-card__action-button",title:`Auto-fit advance width
The advance width will be set to the x-max of the paths in this glyph.`,innerHTML:pn({name:"command_autoFit"}),onClick:()=>{let d=z();d.selectedItem.advanceWidth=d.selectedItem.maxes.xMax,d.publish("currentItem",d.selectedItem)}});ne(n,[a,R(),o]);let s=R({tag:"label",className:"info",innerHTML:`
			<span>bearings: left${ka()}right</span>
			<info-bubble>
				<h1>Side Bearings</h1>
				Side bearings are the blank space to the left and right
				of shapes in a glyph. The open space between
				characters is very important for legibility.
				<br><br>
				These are calculated values based on shape positions and the
				Advance Width. They are not properties that are saved with the
				glyph, but it's helpful to think about them as if they were.
				<br>
				<h2>Left side bearing</h2>
				Distance from x=0 to the leftmost side of shapes in the glyph.
				Editing this will move all the shapes in the glyph, and update
				the Advance Width.
				<br>
				<h2>Right side bearing</h2>
				Distance from the rightmost side of shapes in the glyph to the
				Advance Width.
			</info-bubble>
		`}),x=R({tag:"div",className:"doubleInput"}),E=bt(t,"leftSideBearing","currentItem","input-number"),T=bt(t,"rightSideBearing","currentItem","input-number");if(x.appendChild(E),x.appendChild(Ka()),x.appendChild(T),t.displayType!=="Component"?(ne(e,[r,n]),t.shapes.length&&ne(e,[s,x])):ne(e,[Ue("name"),bt(t,"name","currentItem","input")]),t.shapes.length){const d=!!z().multiSelect.shapes.length;ne(e,Wr()),ne(e,R({tag:"h4",content:d?"Overall paths":"Bulk-edit paths"})),ne(e,Wa(t,"",[],d)),ne(e,po(t,d))}return ne(e,Wr()),ne(e,p2()),ne(e,S2()),e}function fI(t){if(!t.usedIn.length)return"";let e=R({tag:"div",className:"panel__card full-width item-links__rows-area",innerHTML:`
		<h3>Links</h3>
		This ${t.displayType} is linked to the following items.
		It is used as a component root and will show up in these items as a component instance.
		`});return t.usedIn.forEach(r=>{e.appendChild(X1(r))}),z().subscribe({topic:"currentItem",subscriberID:"ItemLinkRow",callback:()=>{const r=z(),n=xe();document.querySelectorAll(".item-link__thumbnail").forEach(o=>{const s=o.getAttribute("target-item-id"),x=r.project.getItem(s);o.innerHTML=n.makeItemThumbnail(x)})}}),e}function OI(t){const e=xe(),r=z();let n=R({tag:"div",className:"panel__card no-card",style:"grid-template-columns: max-content 1fr max-content;"}),a=i1(t,-1),o=r.project.getItemName(a.id,!0),s=R({tag:"fancy-button",className:"thumbnail-button button-left",attributes:{minimal:""},title:`Navigate to:
${o}
${a.id}`});s.innerHTML=e.makeItemThumbnail(a,24)+"<span>Previous&nbsp;item</span>",s.addEventListener("click",()=>{r.selectedItemID=a.id,r.history.addState(`Navigated to ${o}`)});let x=i1(t,1),E=r.project.getItemName(x.id,!0),T=R({tag:"fancy-button",className:"thumbnail-button button-right",attributes:{minimal:""},title:`Navigate to:
${E}
${x.id}`});return T.innerHTML="<span>Next&nbsp;item</span>"+e.makeItemThumbnail(x,24),T.addEventListener("click",()=>{r.selectedItemID=x.id,r.history.addState(`Navigated to ${E}`)}),ne(n,[s,se("<span></span>"),T]),n}function i1(t,e){const r=xe(),n=t.id;let a;t.id.startsWith("glyph-")?a=r.glyphs:t.id.startsWith("liga-")?a=r.ligatures:t.id.startsWith("comp-")?a=r.components:t.id.startsWith("kern-")&&(a=r.kerning);let o=Object.keys(a);o.sort(),t.id.startsWith("glyph-")&&(o=o.filter(BI));const s=o.indexOf(n),x=o.at((s+e)%o.length);return r.getItem(x)}function BI(t){const e=xe();let r=!1,n=e.settings.project.characterRanges.filter(a=>a.enabled);for(let a=0;a<n.length;a++)if(n[a].getMemberIDs().indexOf(t.substring(6))>-1){r=!0;break}return r}function HI(t){let e=R({tag:"div",className:"panel__card",innerHTML:`<h3>Path ${t.ident||""}</h3>`}),r=Ue("path name"),n=bt(t,"name","currentPath","input"),a=R({tag:"label",className:"info",innerHTML:`
			<span>winding</span>
			<info-bubble>
				<h1>Winding</h1>
				Ordered Path Points that make up a path outline have either a clockwise or counter-clockwise direction.
				This path direction is also known as a path&rsquo;s &ldquo;winding&rdquo;.
				Paths with the same winding will visually combine, opposite windings will cut-out.
				<br><br>
				For example, to create the glyph &lsquo;o&rsquo;, draw two overlapping oval paths.
				If the outside oval has a clockwise winding, select the inside oval and change it&rsquo;s winding to counter-clockwise.
				This will result in the inside oval appearing transparent (or cutting out) in relation to the outside oval.
				<br><br>
				<div style="display: grid; gap: 10px; grid-template-columns: 1fr 1fr; width: 350px;">
					<span>Same Winding</span>
					<span>Different Winding</span>
					<img
						alt="Paths with the same winding will visually combine"
						class="winding-help-image"
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ0AAABkCAYAAACcuzIHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAACutJREFUeNrsXS1YI0kQ7SAXcWNYy+hdQQw60ZzYmMWCvhNwYjVg17CI08laTsCJW0vQKwji1jLYQ5ATnM3N6+qamYQkkGRmuqd66vuGQPib6nr1qrqmu1qpWmopWRqVudPzURh/xNWMr8C8u2ney0oUX/eZz+nabUQV0DHI6NfMfKc18ZPD+LrNfN3XH3cb/Rp0qwGsHV9bZvDbyfee4vG+H6SfR7fjv/s+Y5/N+FfXAzVhHPzytX61DcTzUdvo1ppwJqV+ZPATxbf89G/69Ubsa2+Nr72JfyVsTjod69iPdRzUoJttAIzcXnx1EvbCwP99TYP+ENHrMgKj6GuLXt8lGB4YIH4txTjkTB0Dsk4CKH3dkjNpgA0X/9sbIQERurGeGyGz4qUB4WWs59Bv0JERDhKgAVjf4/H5/mcMtoIjxfvYONsf4qvDxok0+JTq5c6A56P9+OMHrScABR1/XNPrU4EYgF7QD+y/3eF3e8bJ+n6BjsIKgY2B1v+6PJOtKmCFdkyyrX0Ox2CGs5UMQw61b/QMEh3xakOgF4C3c8DhGI51YoP9GhbAdqTzGITOv87sGWGWtPcJgBSC+9owi4CPwHakAQcW+xbr2O9ReuCKgAE/HpGuFH7jm1RfXAi9+YLtfHQVXyN1fDWKQ9softftC/eIe8U90703X5x5no+O9c//fjeKDeq+juvBSH08HqnuI3R8NGlA5cEGQ3QrBbZp4Pt8w+A7NWWN5zkbjAbjwYhV0xHg+6XLOt6YiFRJwHUSQ1TB61+6dg6zjNBJQikzOIwG41VZx7CZZffpDuYwu13oG/90UX1DTDICdCKjXGgAIpRWkcFf52B3L6YVTtTacKO44e2OLENkgcdsAD2lAY6vjTDLeoeuAo7yGuQ/uGGpgIN+ABvYgD+X6mC49k8ZeF3XAHec5DVSBx/5DgCGcIrPJxNwCXnrrAu6Ubi9cSPP49kpPF864MBs03JUZgO8Sh8D68BjwEn2ch5s5DfzJkUYAx/YnspHloDnE+BeCyQfgMd5benA843hFs1/pKcbAB5y29KAR7NU2YDDoM7L4V5T5/LFKVEcL+EZquyEmcMHPHmVwjbPanmmKxt43aIAF+o6HCryUgeRwYKBzAMsCM34W5KeysxKJwpZLID4var3V2UA8yr2cpheNC+sZgH5Md9HZlz8lRwq8BQFAMk7dcBjMukTC1w8o83xeWo1l+wsGgqLYnJesyb18eB4fnecT1gFiiUDjmebRT68B6Clh1k4F+V3zVUAdyg+rHLeVfSMnMOs5DJKGmavlgVcoJNDyeURToLLmmFiZix9MsbOxQtdF548SJ/uI8cqM8nnyYr0/JhqlHfLsZwPgwPmKTvv8cWZF6rd+cRyZedYnEPWbFezXOl5pK3/7QDbrU2BHRLAQH37osQK73bHZm8bgv+LDc/tfbljzJ0bqD/Ni6A70DvSn4ZyBwSAA/Cue3YN0t5TouWbduq26XowA3RU1GuaH5Yr6Odh27HQ1wStKzZCueOMJkjUTuNgHtPtrdSSqwoCI6OBDDpD2RTu2LTdke3gFGI780DXca6hTRGhldt12RaEd+khFoyONnCZR2NrE6E1ND8kV2BkVxwLDR/T5oUyhRtaZiYUWaZriw+t64EboXUyxKJBo/wQ254Gug+Fd7+0Ldz29YdDeuJe0BFUsoDRMUE1m3iyoGvqlqSSBW1Ql+3pW3SIlc90CdutZfK5QHRo1els0y2Wg6C5NXI6yXkd53bmmIK1hOXSb8gOr5NHAFhnOuMEb70AXSsLutA5BshbmElcdCzc0zvhkwly9jALupb6J5Kt9FuHQYeqAQ4kkSx04Ew4PpF4uJetNE7PeYjcZQHp4ZVJLZ4/rCWzCun5HGp0roIO8iaQPf7p2Acp0/03VLVYEuTT0ssmqQRr3hiWa3S12HUupeLwymudnjxguuxJgrVYkzWeUdQsUEuZoKullhp0tcgHHcVV6ctranEIdKKOW3xB1n+qLW5TTC3Sn/DqwxIi14XGf8CgG4pfWuOy6NUv3lQPhgy6gXjQ4THMpsNMJ/2JUIqvYYbpNuWDbt3R55s+PC3hBQ27jSS83nqzysHFWTpYQPrTElovGGUnEgPxiwjBdHjU52IagXsSv4h2k3A2Brp0diFXsJAw3HIstBpn92F/CiJqArrdRqTzOulsh7KJazrifpiFpQrvN1aqn2U6euN9SzboeN2aSxMKMK8v+40nwivkWj7TGeO61LQG9+LDfmMAzjz9yoLuMkODcgUbf9+13AEc35NkIT2TXh4p6Civi8R3EUJe5wrToZ2Eax0HiphAUMXg8jnomO186JfG7V9dYAAfumSBzHYbg1mgO9OolAw8zBQxobDN6Og3DPD7EVrHPGscdBRiB+K7CIFdMBg2C8XcJ8/lbZF5AI7GuDcbdMx28ELJCwC437Ct7uYYW1QKpIfWnw8oZSMymwO63QZQORTdbh6CZt5oeG2jZvfxKNvyXu4Egkpwr+ya7sOJOdDNxok5tk7qcejEnFkrh7/ERhmqnUO5nojwijC7d1ou2zHL9XuyWY4i5cliv8hsJ/k05rJPJfSF5XCY8pyj1eftkQDbRdozJZdPysztfu3KZzmsmqFc7rfl/gAOEyv6mHEXcjscDvfpotj/s90ZeTOWS59snQLvSvyJfUUDoixg276QpuAEzYmzwJYBXejFseoARFFHnZd5ZLutK2zyUZs5zT7xh3wIDQBG3mzELIrXOqwuDLwL8d7KANk5zHd2jJqV/JpcDmH1OegCXez7fCN7ABEKATyEi1W9H2OFS7KjwkEprBa0SgSHnADR0j0XdaZVa5QYI/yNVcFbhciAmm6hwmWUsgqqtnKUVViKwo3sHBjOBKc6H3XLKQAy8CRX1jkfWxR4VDaQPTYp4G74kLmygHfqzeC+FngYixpwhQOvm+tsr8rA45BaA64U4FENT/LkIgu8aRMDHwCH/NQJwE3meCisSi0PIMcD6DDwPEGArjzTlQy4tCzSdQNwKfDaupwyiw2kzGrhWDx7RxVeclkE+jKLI4d3Uug57Y02hOQ8jx750CV1vSEcCQRCTxoqsD2QZ7YIPZKMAl1ogeLI6HinHUzac1Uu+1D+FqrKCIXbu1JX5hYZZsYN0cw8GuyKcTDkqimLH6tKChnlWCsBZaqYbOOeyRCPMw3BDgY98ey2apMpOAvnqlgpUil2m5/rdSsFvhRsPGsLX6HnoQYns7vr4APY0onCXVm5W6P0kKsUduB29F6BP05o76crDWSwT6K1T5uE053pJ5ObhV9kd6UOjZ6B3g+BfRguddrEznt0GKCWD5HRsVfWv29YYz6ljjT4noaBBt73P+1tPsbgo5UGbZuDB1wuDLbp4OsYPUMNOuzov+7ZcTI4EfQD2Mih+go9RkoEm13QPTcMWKGpjQHgoUlgkQyIQde7lloEONoJRkagNgjDnPUEw+8ZXYMEgGjkUyQDQkc4U9pTJDIOdbaSQ1UadM/ZD0ZB9562fg8hGN0zH+7JQGjLv2jDGQw2jivAtji0Wk37pSljgGs1pd9GgXpmdQy1Y6EBN/rmAYA4xGTRdrDczBJ6sY7jLVeZ1ZyI8e6Abjo74NrSLMiHIUPYUPNk81lv4cgY4FYbYbfRd8TRoGPL6Nce+z6DcJ5DjTc6GhodB8aZ+i4eOOgu6KYbqanDExnopdlkZK6hKx6+ABBDo+drevH2E0aryImW/wswAEGrvdgr+YXFAAAAAElFTkSuQmCC"
					>
					<img
						alt="Paths with different windings will appear transparent where they overlap"
						class="winding-help-image"
						src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJ4AAABkCAYAAAB3jIkEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAChtJREFUeNrsXS1020gQ3hQ2oCYpjXADahIc4R6IyZXauCQh5T56xFdw2DH1ATvgjtrGAXZAS63QBtgFCdXp21lZ8k8cO5G0q9md97bKe/3bmf3mm5ldaVYIJ040yIHxM+yGlejXqhrH6inUs7Llb86jMVE/43mnnhPx+WBuoJ6xjl40PirdPDW2yUTpGqzoGDjg7Q+0WjTOouFLwweRLTHu7+j5GNn5Z2TX+y22PYrW63003kb/nBet59ExPT2JW/zFYTRG0ehrAWI39JV+pOe90uf7SCx+fpiTvtvkxKfncaTXe6Ujfj6szFM6DiMdJw5464vgKbDVpdf/GNICyOcw+/8Pi/UhGidn9CSW6CgQBjnqCR3Ppa73QUXc9BM9HzLGPhxP6hnpeFoDEAOpH/Q0AIQHmgEXg60mF+HmWsjnQ4EEdFihhTk9p2eyOP0MneoiGg0Jtn+/kY73BUdCMKFfJx2PvEA52l9Gph25hdJueBmNqfh7GopPl2G0+GH0O/oH5oH5YF6YXzdsqND/slDaDXvRCMWXdhgtvBk6YpzWQvG1F8q5dcO2cg7WoGtGYyaag1D4DXMW4qnFwTwxXzjKfoAbiPYsFL83zXGqTePII6dgC0CEVDDIn+MwyjvMBtzqwHwJgFOVGjwdUrF4ZQDcdgC2XszyBgHOW3i/6Qz33MD8KQQP1pghZnIsXpkAtwmACcs3ygq6S6lAo1XuxVjNAaFPHH6x99YNx5LJTcrhskgzQBbkZJWyAK4iJwx2KFtY3Sf8UlgiIHLUEU5GBchsa4phzO47JooJc2G5TQtC+dBUVq1gBk5stynFIPZrmQq6hmQAbEdwXQTkQAir6RAU6132HHbbgGOt6m0I6FrSK7iG1tj45PntJ5ke1SxX/cH0VHiMzQBfvIXAOdwkoGs8m2YgDHO1A0aSZlT1gg4UjBBkM+iWC6uxJeCb6QFfDDquRcS+oLMXfF6RoGvKBXFMtw18vHO+BHwF5XxYCO45HVicTimar95a4lztpsFXwD4d7+oVg7YO2hnYy5f24u6kWdlra/jgvE+HQUdi2YUPHK2BPTnnwki5XpqW7GDAgTyR4Aw6nFHmkTDjhIO77egYMeNK1wavhW7ktbWcosWUfbRAMZVZvkevNs3Y53V0IN7LMT/22e8EJPlxM5sQy/UNjPUwke+2AI4WcezE2ZYopOjNHe81hqpJL+UcYjFo66Qh8pa4QEMuyb9AG7zGUFP2+1CUlwxEUQKAA+icbZrky74zUOYGehX4xuwdGoUUiOtFbMe9oCia7dKFBnenflEK49iuCPAN2LMe9NuL9WzI7SgUDIQuscG5MXZ2blSy9oQBvR+x2JPOrO2PvtlgjroYdgRrifuHZNUf5eXSEZ8ueNt6eIVfa6v7em/W9pnwh+gPMwbeOS26frlSnZz42hrNiW76BL4tjFfT0slIB+Nh0XULtUTrq/kwZr0ORdItwDuXrcK4g+6wYlLHzGvFwHyFWs9V0+H2zVqYvekzB54xYTaWPvtwC0HzyVS4TTOeL9uePjDv00dhbWjMfKgx4kR1JmXMetcUUTcA74x9mPVUb2DD+gHLcIu2uJyFWgr7mxnvx5A/8Exiu1T6zZ7x4obiajM5Dbzqsx3Gyy4fJKvcGjiziXIKG1ivmgAPKIzb23OW956ZjBfneSfcWQ/XcMg7PBaM57FnO8l4PrGLmRLIKwL4V7beCvBueStNizo3uL3+LXvg4VIcVWDEwPvI/rSCwqzJtB4I7yP/AmOlqq2wB95b4zdoA/abyFLLiawpEuBxF6oaR845NMvjfInxqrncGeZkn8p2aMWWykqodeKkGKEtO88Bz0nBOd6tA54TF2qdOOA5cZKj0F5lkADPhj0kk6X0NybuKISzBfAmNpXyhkqV/WtpG0It/+vB6SWIM4dvzaLOoxPgHTNnvEfjfctj/1paDLzPB8MYeLfsczxiPN9o4NnxhtAS4wXs3/mP2cTcJN6WN4SGy8Dj/i4YhJJ3U3MKCz498AlrC+DhgBrAc+FWjxAL838LnPbwbtOMRxTI/UsnyqFMfNvSt2IrJfWVXxp4E9u+7TRIztizHSLqkbf4pjkNvJEl33ZW9F7y+wTjfR/xtv1KB4cEeOgVByrkXmQQ69UNyu88WVhw71lD0XS0DjwS/i2zqE2HSdTOv1ESilbCVf8p4F0Lv84ceIuWWaaE27oVreFQQ6Raw60zng3hlhhGv4fZEmaJzJZawy0Djz52vhK/Me/L+983/NowYCYN2faX8xktSIyK1qungUfSEWcN3sDD1gVVt7oVvRAj5o3OicSuVjs4rAMPpxho1eozB98/f+gNtwB9MKmw/qwURQWRWGd3o7jLP/IGnrug0BlGA9u5K7uccTTc3uic+hkDjeU/4C56yxJ0l/L6dOfQW43kW3FDN4AAQOQPOrqhm/v9ZV/aG+8v29dYPfG1x9tQAAIAsXLfVg7A68lFcbbcw0tPa7wN1mjlW2jgpkju0QO60a2Yl85o2oxmofNSiB1kbby2aA5sCRPVjG03YB9iqUjLIV0hrx3LkMR/G2Ca2ddo3bApixfO0cKrxlVsLa88pSpRzX0PCsVUFiEDe6FYECwM5xSFdgVaeW8J1CwyZvvVTso5r0vs1BOFiC2eTOGj6SLD1mJiXOxH8lgQ7uBLcpeGA50JoEtXuvaA73Jn0HGvYLWCzk7ma1vNdEg/qPAam9GDBqGoG4asjX7kJQXHqtFJf/6gI/3HZjU+QrUL43Pe54PxsYlOxveWGJ/zwf8ujK8ZfFW5KFgcMATvc92Z3OsDC3BOMz5dhjKaFfH2TgYnHFR0cN3Dgl7EAJRoczyVAHEQu08NbPmxQ+hFMsqF/aAHJdczpV9Fsh5eLuDkZGA5cqxWObvRp9kPZ6BlZgbMP85z1osLcrKypxjIU6mAmGr7CCpjAPoLZihb5Yf50utSg62LQU7WWoTfMgEwCauzF53UlACADelNMQBNZUDMKwHcdM+TC0+xovkABMOlAcf+khcC4ECGLlSIplSFAAnmQyF18KpOAwkAKQSbkgPGTkUhVRvgDrRvv6CNA1p14av6YYca6hTZ/Ry9PdDNCI1lvCraLKCDzre4c2UmeS71abkQD3NP6ofuUEU26onbhJ2eJ52bSMcrXUt/YBQLChFZRviyrwlaO/wYUSPFLIEIoKEjFhoFYhHQHpXANsp9IcjR6tLRAEL0PUYnUDyzbkV74lOzHOhJTXPwH3Skrql2YQ54q8UINU88k090U7qb0OI8/BJLjao39R45SdUAMPrhOwIbbi+izvZDQd0ph7JXjB4dvSUd0fUdev2MMHF/F7fNpT/7M1h3Pq+adOmP9UJX9dixCGgTpWd/tWmOA97uTIGFwvOdSO6qqIjN91bA4PPUz7/UM8gshOax9US6VJVe6U7om6rpudIp/vlW0B0SgTZn2kP+F2AAw6cPzxGbmzkAAAAASUVORK5CYII="
					>
				</div>
			</info-bubble>
		`}),o=R({tag:"option-toggle",innerHTML:"<option>Clockwise</option><option>Counter-clockwise</option>",attributes:{"selected-name":f0(t.winding),"selected-value":f0(t.winding)},onClick:()=>{const E=z();t.reverseWinding(),E.history.addState(`Toggled path winding to ${f0(t.winding)}`),E.publish("currentPath",t)}}),s=Wa(t),x=po(t);return ne(e,[r,n,a,o,s,x]),ne(e,Wr()),ne(e,Tx()),e}function f0(t){let e="Unknown";return t>0&&(e="Counter-clockwise"),t<0&&(e="Clockwise"),e}function FI(t){let e=R({tag:"div",className:"panel__card",innerHTML:`<h3>${t.shapes.length} selected paths</h3>`});return ne(e,Wa(t)),ne(e,po(t)),ne(e,Tx()),e}function MI(t){const e=z();let r=R({tag:"div",className:"panel__card",innerHTML:`<h3>Path point ${t.pointNumber+1} ${t.ident||""}</h3>`}),n=Wa(t.p,"point"),a=Ue("point type"),o=R();ne(o,[O0("symmetric",t.type==="symmetric",()=>{t.type="symmetric",t.makeSymmetric(),e.publish("currentPathPoint",t)}),O0("flat",t.type==="flat",()=>{t.type="flat",t.makeFlat(),e.publish("currentPathPoint",t)}),O0("corner",t.type==="corner",()=>{t.type="corner",e.publish("currentPathPoint",t)})]),e.subscribe({topic:"currentPathPoint",subscriberID:"pointTypeButtons",callback:E=>{document.getElementById(`pointTypeButton-${E.type}`)&&(document.getElementById("pointTypeButton-symmetric").removeAttribute("selected"),document.getElementById("pointTypeButton-flat").removeAttribute("selected"),document.getElementById("pointTypeButton-corner").removeAttribute("selected"),document.getElementById(`pointTypeButton-${E.type}`).setAttribute("selected","")),vi("h1",E),vi("h2",E)}});let s=R({id:"h1Group",className:"span-all-columns"});ne(s,o1("h1",t));let x=R({id:"h2Group",className:"span-all-columns"});return ne(x,o1("h2",t)),ne(r,n),ne(r,[a,o]),ne(r,[s,x]),ne(r,Wr()),ne(r,Ix()),r}function o1(t="h1",e){let r=R({className:"pre-checkbox"}),n=Hn(e[t],"use","currentPathPoint");e.type!=="corner"&&n.setAttribute("disabled",""),ne(r,[n,R({tag:"h4",content:`Use handle ${t.charAt(1)}`})]);let a=R({id:`${t}InputGroup`,style:`display: ${e[t].use?"grid":"none"}`}),o=Wa(e[t],t);return ne(a,o),z().subscribe({topic:"currentPathPoint",subscriberID:`controlPointInputGroup.${t}`,callback:s=>{s.type==="symmetric"&&s.makeSymmetric(t),s.type==="flat"&&s.makeFlat(t),vi("h1",s),vi("h2",s)}}),[r,a]}function vi(t="h1",e){let r=e;e.objType==="ControlPoint"&&(r=e.parent);let n=document.getElementById(`${t}Group`);if(n){let a=r[t].use,o=n.querySelector("input");if(o.removeAttribute("checked"),o.removeAttribute("disabled"),a){o.setAttribute("checked",""),r.type!=="corner"&&o.setAttribute("disabled","");let s=document.getElementById(`${t}InputGroup`);s.style.display="grid",s.querySelectorAll("input-number")[0].setAttribute("value",r[t].x),s.querySelectorAll("input-number")[1].setAttribute("value",r[t].y)}}}function GI(t){let e=R({tag:"div",className:"panel__card",innerHTML:`<h3>${t.pathPoints.length} selected path points</h3>`});return ne(e,Ix()),e}function O0(t,e,r){let n=xt.gray.l40,a=R({tag:"button",className:"pointTypeButton",id:`pointTypeButton-${t}`,attributes:{title:`point type: ${t}`}});a.addEventListener("click",r),e&&a.setAttribute("selected","");let o=`
	<svg version="1.1"
		xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0" y="0" width="20" height="20" viewBox="0 0 20 20" enable-background="new 0 0 20 20">
		<g fill="${n}">
		<rect x="8" y="8" width="1" height="4"/>
		<rect x="11" y="8" width="1" height="4"/>
		<rect x="8" y="8" width="4" height="1"/>
		<rect x="8" y="11" width="4" height="1"/>
		<rect x="4" y="4" width="1" height="1"/>
		<rect x="5" y="5" width="1" height="1"/>
		<rect x="6" y="6" width="1" height="1"/>
		<rect x="7" y="7" width="1" height="1"/>
		<circle cx="3" cy="3" r="1.5"/>
	`;switch(t){case"corner":o+=`
			<rect x="7" y="12" width="1" height="1"/>
			<rect x="6" y="13" width="1" height="1"/>
			<rect x="5" y="14" width="1" height="1"/>
			<rect x="4" y="15" width="1" height="1"/>
			<circle cx="3" cy="17" r="1.5"/>
			`;break;case"symmetric":o+=`
			<rect x="12" y="12" width="1" height="1"/>
			<rect x="13" y="13" width="1" height="1"/>
			<rect x="14" y="14" width="1" height="1"/>
			<rect x="15" y="15" width="1" height="1"/>
			<circle cx="17" cy="17" r="1.5"/>
			`;break;case"flat":o+=`
			<rect x="12" y="12" width="1" height="1"/>
			<rect x="13" y="13" width="1" height="1"/>
			<circle cx="15" cy="15" r="1.5"/>
			`;break}return o+="</g></svg>",a.innerHTML=o,a}function PI(){const t=z();let e=[],r=t.multiSelect.points;if(r.length===1)e.push(MI(r.singleton));else if(r.length>1){let o=r.virtualShape;e.push(GI(o))}let n=t.multiSelect.shapes;n.length===1?n.singleton.objType==="ComponentInstance"?e.push(RI(n.singleton)):e.push(HI(n.singleton)):n.length>1&&r.length===0&&e.push(FI(n.virtualGlyph)),e.push(DI(t.selectedItem)),e.push(OI(t.selectedItem));const a=fI(t.selectedItem);return a&&e.push(a),t.subscribe({topic:"whichShapeIsSelected",subscriberID:"attributesPanel",callback:()=>{pr()}}),t.subscribe({topic:"whichPathPointIsSelected",subscriberID:"attributesPanel",callback:()=>{pr()}}),e}let La,ha;function ko(t,e="",r=z(),n=!1){La=t,ha=!0;let a=R({tag:"div",className:"item-chooser__wrapper"}),o=R({tag:"div",className:"item-chooser__header"});o.appendChild(vI(r)),a.appendChild(o);let s=e||r.nav.page;return s==="Ligatures"?a.appendChild(e0(r,!n)):s==="Components"?a.appendChild(t0(r,!n)):a.appendChild(Ko(r,!n)),a}function bI(t,e){La=e,ha=!0;let r=R({tag:"div",className:"item-chooser__wrapper"});if(t==="Ligatures")r.appendChild(e0()),r.appendChild(R({tag:"fancy-button",innerHTML:"Create new ligature",onClick:cl}));else if(t==="Components")r.appendChild(t0()),r.appendChild(R({tag:"fancy-button",innerHTML:"Create new component",onClick:jl}));else if(t==="Kerning")r.appendChild(Al()),r.appendChild(R({tag:"fancy-button",innerHTML:"Create a new kern group",onClick:()=>Ui(!1)}));else{let n=R({tag:"div",className:"item-chooser__header"});r.appendChild(n),n.appendChild(UI()),r.appendChild(Ko())}return r}function vI(t=z()){let e=t.selectedCharacterRange,r=R({tag:"option-chooser",attributes:{"selected-name":e.name,"selected-id":e.id}}),n,a=Ut(t.project.ligatures),o=Ut(t.project.components);return a&&(n=R({tag:"option",innerHTML:"Ligatures",attributes:{note:`${a}&nbsp;items`}}),n.addEventListener("click",()=>{t.selectedCharacterRange="Ligatures",document.querySelector(".item-chooser__tile-grid").remove(),document.querySelector(".item-chooser__wrapper").appendChild(e0())}),r.appendChild(n)),o&&(n=R({tag:"option",innerHTML:"Components",attributes:{note:`${o}&nbsp;items`}}),n.addEventListener("click",()=>{t.selectedCharacterRange="Components",document.querySelector(".item-chooser__tile-grid").remove(),document.querySelector(".item-chooser__wrapper").appendChild(t0())}),r.appendChild(n)),(a||o)&&r.appendChild(R({tag:"hr"})),ol(r,t),r}function UI(t=z()){let e=t.selectedCharacterRange,r=R({tag:"option-chooser",attributes:{"selected-name":e.name,"selected-id":e.id}});return ol(r),r}function ol(t,e=z()){let n=xe().settings.project.characterRanges,a;n.forEach(o=>{o.enabled&&(a=R({tag:"option",innerHTML:o.name,attributes:{note:o.note}}),a.addEventListener("click",()=>{e.selectedCharacterRange=o,document.querySelector(".item-chooser__tile-grid").remove(),document.querySelector(".item-chooser__wrapper").appendChild(Ko())}),t.appendChild(a))})}function Ko(t=z(),e=!0){let r=R({tag:"div",className:"item-chooser__tile-grid"}),n=t.selectedCharacterRange.getMemberIDs(t.project.settings.app.showNonCharPoints);return n!=null&&n.length&&n.forEach(a=>{const o=`glyph-${a}`;let s=new qi({"displayed-item-id":o,project:t.project});e&&t.selectedGlyphID===o&&s.setAttribute("selected",""),s.addEventListener("click",()=>La(o)),ha&&t.subscribe({topic:"whichGlyphIsSelected",subscriberID:`glyphTile.${o}`,callback:x=>{parseInt(x)===parseInt(o)?e&&s.setAttribute("selected",""):s.removeAttribute("selected")}}),r.appendChild(s)}),r}function e0(t=z(),e=!0){const r=R({tag:"div",className:"item-chooser__tile-grid"}),n=t.project.sortedLigatures,a=Vo(n,t.chooserPage.ligatures,t);return n.length>a.length&&r.appendChild(_o("ligatures",n,t)),a.forEach(o=>{let s=new qi({"displayed-item-id":o.id});e&&t.selectedLigatureID===o.id&&s.setAttribute("selected",""),s.addEventListener("click",()=>La(o.id)),ha&&t.subscribe({topic:"whichLigatureIsSelected",subscriberID:`glyphTile.${o.id}`,callback:x=>{x===o.id?e&&s.setAttribute("selected",""):s.removeAttribute("selected")}}),r.appendChild(s)}),r}function t0(t=z(),e=!0){let r=R({tag:"div",className:"item-chooser__tile-grid"});const n=t.project.sortedComponents,a=Vo(n,t.chooserPage.components,t);return n.length>a.length&&r.appendChild(_o("components",n,t)),a.forEach(o=>{let s=new qi({"displayed-item-id":o.id});e&&t.selectedComponentID===o.id&&s.setAttribute("selected",""),s.addEventListener("click",()=>La(o.id)),ha&&t.subscribe({topic:"whichComponentIsSelected",subscriberID:`glyphTile.${o.id}`,callback:x=>{x===o.id?e&&s.setAttribute("selected",""):s.removeAttribute("selected")}}),r.appendChild(s)}),r}function Al(t=z()){let e=R({tag:"div",className:"kern-group-chooser__list"});const r=t.project.sortedKernGroups,n=Vo(r,t.chooserPage.kerning,t);return r.length>n.length&&e.appendChild(_o("kerning",r,t)),n.forEach(a=>{let o=sl(a.id);t.selectedKernGroupID===a.id&&o.setAttribute("selected",""),o.addEventListener("click",()=>La(a.id)),ha&&t.subscribe({topic:"whichKernGroupIsSelected",subscriberID:`kernGroupRow.${a.id}`,callback:s=>{s===a.id?o.setAttribute("selected",""):o.removeAttribute("selected")}}),e.appendChild(o)}),e}function sl(t,e=xe()){const r=e.getItem(t),n=R({className:"kern-group-chooser__row"}),a=R({className:"kern-group-chooser__left-members"});a.appendChild(aa(r.leftGroup));const o=R({className:"kern-group-chooser__right-members"});return o.appendChild(aa(r.rightGroup)),ne(n,[R({content:t}),a,R({className:"kern-group-chooser__members-divider",content:"&emsp;|&emsp;"}),o]),n}function Vo(t=[],e=0,r=z()){const n=parseInt(r.project.settings.app.itemChooserPageSize)||256;if(t.length<n)return t;const a=e*n,o=a+n;return t.slice(a,o)}function _o(t,e=[],r=z()){const n={ligatures:e0,components:t0,kerning:Al},a=parseInt(r.project.settings.app.itemChooserPageSize)||256,o=r.chooserPage[t],s=Math.ceil(e.length/a),x=R({tag:"button",className:"editor-page__tool",content:"◁"});r.chooserPage[t]===0?x.setAttribute("disabled",""):x.addEventListener("click",()=>{r.chooserPage[t]-=1,r.chooserPage[t]=Math.max(r.chooserPage[t],0);let d;t==="kerning"?d=document.querySelector(".kern-group-chooser__list"):d=document.querySelector(".item-chooser__tile-grid"),d.innerHTML="",d.appendChild(n[t]())});const E=R({tag:"button",className:"editor-page__tool",content:"▷"});r.chooserPage[t]===s-1?E.setAttribute("disabled",""):E.addEventListener("click",()=>{r.chooserPage[t]+=1,r.chooserPage[t]=Math.min(r.chooserPage[t],s-1);let d;t==="kerning"?d=document.querySelector(".kern-group-chooser__list"):d=document.querySelector(".item-chooser__tile-grid"),d.innerHTML="",d.appendChild(n[t]())});const T=R({tag:"div",className:"item-chooser__page-control"});return ne(T,[x,R({content:`Page ${o+1} of ${s}`}),E]),T}class en extends Dr{constructor({leftGroup:e=[],rightGroup:r=[],value:n=0}={}){super(),this.leftGroup=e,this.rightGroup=r,this.value=n,this.objType="KernGroup"}save(e=!1){const r={leftGroup:this.leftGroup.slice(),rightGroup:this.rightGroup.slice(),value:this._value};return e&&(r.objType=this.objType),r}print(e=0){let r="";for(let a=0;a<e;a++)r+="  ";let n=`${r}{${this.objType} 
`;return r+="  ",n+=`${r}leftGroup: ${JSON.stringify(this.leftGroup)}
`,n+=`${r}rightGroup: ${JSON.stringify(this.rightGroup)}
`,n+=`${r}value: ${this.value}
`,n+=`${r.substring(2)}}/${this.objType}`,n}get leftGroup(){return this._leftGroup||[]}get rightGroup(){return this._rightGroup||[]}get value(){return this._value||0}get name(){return`${this.leftGroupAsString} | ${this.rightGroupAsString}`}get leftGroupAsString(){let e="";return this.leftGroup&&(e=Rr(this.leftGroup.join(""))),e||""}get rightGroupAsString(){let e="";return this.rightGroup&&(e=Rr(this.rightGroup.join(""))),e||""}set leftGroup(e){e=e.map(r=>tr(r)),e=e.filter(Mn),this.changed(),this._leftGroup=e}set rightGroup(e){e=e.map(r=>tr(r)),e=e.filter(Mn),this.changed(),this._rightGroup=e}set value(e){this._value=He(e)||0,this.changed()}}const wI=Object.freeze(Object.defineProperty({__proto__:null,KernGroup:en},Symbol.toStringTag,{value:"Module"}));function YI(){const t=z(),e=t.selectedKernGroupID,a=R({tag:"div",id:"app__page",innerHTML:`
		<div class="editor__page">
			<div class="editor-page__left-area">
				<div class="editor-page__nav-area">
					${_t({level:"l1",superTitle:"PAGE",title:"Kerning"})}
				</div>
				<div id="editor-page__panel"></div>
			</div>
			${e?`
		<div class="editor-page__tools-area"></div>
		<div class="editor-page__edit-canvas-wrapper"></div>
		<div class="editor-page__zoom-area"></div>
	`:'<div class="editor-page__edit-canvas-wrapper" style="grid-column: span 2; overflow-y: scroll;"></div>'}
		</div>
	`});t.showPageTransitions&&a.classList.add("app__page-animation");let o=a.querySelector("#nav-button-l1");o.addEventListener("click",function(){Jt(o)});const s=a.querySelector(".editor-page__nav-area"),x=a.querySelector(".editor-page__edit-canvas-wrapper");if(!e)return ne(x,WI()),s.style.display="block",o.style.width="100%",o.style.borderRadius="4px",a;const E=t.selectedKernGroup,T=_t({level:"l2",superTitle:"EDITING",title:E.name}),d=_t({level:"l3",superTitle:"PANEL",title:t.nav.panel});s.appendChild(se(T)),s.appendChild(se(d));const g=R({tag:"edit-canvas",id:"editor-page__edit-canvas",attributes:{"editing-item-id":t.selectedKernGroupID}});x.appendChild(g);let y=a.querySelector("#nav-button-l2");y.addEventListener("click",function(){Jt(y)}),t.subscribe({topic:"whichKernGroupIsSelected",subscriberID:"nav.kernChooserButton",callback:()=>{var q;t.selectedKernGroup&&(y.innerHTML=Aa((q=t.selectedKernGroup)==null?void 0:q.name,"EDITING"))}});let C=a.querySelector("#nav-button-l3");C.addEventListener("click",function(){Jt(C)});const k=a.querySelector("#editor-page__panel");k.appendChild(Qa()),k.addEventListener("scroll",kr),t.subscribe({topic:["whichKernGroupIsSelected"],subscriberID:"nav.panelChooserButton",callback:()=>{pr()}}),t.selectedTool="kern";let Y=a.querySelector(".editor-page__tools-area");Y.innerHTML="";let _=Ip();_&&ne(Y,_);let V=a.querySelector(".editor-page__zoom-area");V.innerHTML="";let ee=i0();return ee&&ne(V,ee),t.subscribe({topic:"whichKernGroupIsSelected",subscriberID:"editCanvas.selectedKernGroup",callback:q=>{a.querySelector("#editor-page__edit-canvas").setAttribute("editing-item-id",q)}}),a}function WI(){const t=R({className:"editor-page__first-run",innerHTML:`
			<h1>There are no kern pairs in your project</h1>
			<p>
				Kerning is an advanced feature of fonts that recognizes a pair of characters, then
				adjusts the spacing between them to some custom value. The default spacing between
				characters is zero - which is to say, the white space (side bearings) within each
				character are the only space shown.
			</p>
			<p>
				Some letter combinations, like <code>VA</code>
				as an example, if the default side bearing spacing
				is used, the letters visually look very far apart. Kerning can help the visual flow of
				character pairs look more well considered. Many character pairs may need either negative
				or positive kern values to make them "look right".
			</p>
			<h2>Class-based kerning</h2>
			<p>
				Font files encode kerning values as three pieces of information: a left character, a right
				character, and a horizontal adjustment value. Fonts with many characters can end up having
				a huge amount of kern pairs. Glyphr Studio uses a system called Class-based Kerning, where
				groups of characters with similar edges (like
					<code>V</code><code>v</code><code>W</code><code>w</code>
					)
				can be treated as a single left-hand group, and a group of right-hand characters (for example,
				<code>A</code><code>/</code>) can be treated as single group - which can be given a single value.
				When a font is exported, the permutations are saved as individual kern pairs. But, while
				editing, grouping common characters often simplifies the overall kerning process.
			</p>
		`}),e=R({tag:"fancy-button",innerHTML:"Create a new kern group",onClick:()=>Ui(!1)});return t.appendChild(e),t}function kI(t,e,r){const n=Jo(),a=xe();return a.addItemByType(new en({leftGroup:t,rightGroup:e,value:r}),"KernGroup",n),a.kerning[n]}function Jo(t=xe().kerning){let e=Ut(t);for(;t[`kern-${e}`];)e++;return`kern-${e}`}function Ui(t){const e=R({innerHTML:`
		<h2>${t?"Edit this":"Create a new"} kern group</h2>
		Specify which characters should be in the left-side group,
		the right-side group, then what distance in <code>Em</code>
		units should be used for the kern value.
		<br><br>

		<h3>Left group</h3>
		<input id="kerning__add-new-kern-group__left-group" type="text"
		value="${t?t.leftGroupAsString:""}"
		autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
		/>
		<br><br>
		<h3>Right group</h3>
		<input id="kerning__add-new-kern-group__right-group" type="text"
		value="${t?t.rightGroupAsString:""}"
		autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
		/>
		<br><br>
		<h3>Value</h3>
		<input id="kerning__add-new-kern-group__value" type="text"
			value="${t?t.value:""}"
			autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
		/>
		<br><br>
		<fancy-button disabled id="kerning__add-new-kern-group__submit-button">
			${t?"Save changes":"Add new kern group"}
		</fancy-button>
		`}),r=e.querySelector("#kerning__add-new-kern-group__submit-button"),n=e.querySelector("#kerning__add-new-kern-group__left-group"),a=e.querySelector("#kerning__add-new-kern-group__right-group"),o=e.querySelector("#kerning__add-new-kern-group__value");n.addEventListener("change",s),a.addEventListener("change",s),o.addEventListener("change",s),n.addEventListener("keyup",s),a.addEventListener("keyup",s),o.addEventListener("keyup",s),t&&(r.removeAttribute("disabled"),r.addEventListener("click",x));function s(){n.value!==""&&a.value!==""&&o.value?(r.removeAttribute("disabled"),r.addEventListener("click",x)):(r.setAttribute("disabled",""),r.removeEventListener("click",x))}function x(){const E=z();let T=Da(n.value),d=Da(a.value),g=parseInt(o.value);if(t)t.leftGroup=T,t.rightGroup=d,t.value=g,E.history.addState("Edited kern group: "+E.selectedKernGroupID),E.publish("currentKernGroup",E.selectedKernGroup),E.navigate(),_e();else{const y=kI(T,d,g);typeof y=="string"?xr(y):(E.selectedItemID=y.id,E.navigate(),E.history.addWholeProjectChangePostState(),_e())}}Tr(e,500)}function KI(){const t=R({innerHTML:`
		<h2>Find a letter pair</h2>
		Specify a pair of letters below, and search will return all the Kern Groups
		that contain that pair. Clicking on a search result will select that Kern Group
		behind the dialog box.
		<br><br>
		It is good to not have duplicate values for a letter pair - the value that actually
		gets used may not be the expected one.
		<br><br>

		<div class="list__two-column" style="max-width: 100px;">
			<div class="list__column-header">Left group letter</div>
			<div class="list__column-header">Right group letter</div>
			<input
				id="kerning__letter-pair__left-group" type="text" value=""
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="1"
				onclick="this.select();"
			/>
			<input
				id="kerning__letter-pair__right-group" type="text" value=""
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="1"
				onclick="this.select();"
			/>
		</div>
		<br>

		<fancy-button disabled id="kerning__letter-pair__search-button">
			Search
		</fancy-button>
		<br><br>
		<hr/>
		<br>
		<div id="kerning__letter-pair__results">
			<i>Search results...</i>
		</div>
		`}),e=t.querySelector("#kerning__letter-pair__left-group");e.addEventListener("change",cn),e.addEventListener("keyup",cn);const r=t.querySelector("#kerning__letter-pair__right-group");r.addEventListener("change",cn),r.addEventListener("keyup",cn),t.querySelector("#kerning__letter-pair__search-button").addEventListener("click",_I),Tr(t,800)}function VI(){const t=R({innerHTML:`
		<h2>Delete letter pairs</h2>
		Specify a pair of letters below, and search will find and attempt to delete all
		the letter pairs from the applicable Kern Groups.
		<br><br>
		<b>Note</b>: This will only affect Kern Groups where either the left group or the right group has only one member. Kern Groups affect all possible permutations of left group / right group.
		Because of this, if a left group and a right group both have multiple members, including
		the specified letter pair, removing the letters from the letter pair would remove more
		than just the kern value for those two letters.
		<br><br>

		<div class="list__two-column" style="max-width: 100px;">
			<div class="list__column-header">Left group letter</div>
			<div class="list__column-header">Right group letter</div>
			<input
				id="kerning__letter-pair__left-group" type="text" value=""
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="1"
				onclick="this.select();"
			/>
			<input
				id="kerning__letter-pair__right-group" type="text" value=""
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" maxlength="1"
				onclick="this.select();"
			/>
		</div>
		<br>

		<fancy-button disabled danger id="kerning__letter-pair__search-button">
			Find and delete
		</fancy-button>
		<div id="kerning__result-message"></div>
		`}),e=t.querySelector("#kerning__letter-pair__left-group");e.addEventListener("change",cn),e.addEventListener("keyup",cn);const r=t.querySelector("#kerning__letter-pair__right-group");r.addEventListener("change",cn),r.addEventListener("keyup",cn),t.querySelector("#kerning__letter-pair__search-button").addEventListener("click",JI),Tr(t,800)}function cn(){const t=document.querySelector("#kerning__letter-pair__left-group"),e=document.querySelector("#kerning__letter-pair__right-group"),r=document.querySelector("#kerning__letter-pair__search-button");t.value.length&&e.value.length?r.removeAttribute("disabled"):r.setAttribute("disabled","")}function _I(){const e=document.querySelector("#kerning__letter-pair__left-group").value.charAt(0),n=document.querySelector("#kerning__letter-pair__right-group").value.charAt(0),a=xe().kerning,o=[];Object.keys(a).forEach(x=>{a[x].leftGroup.includes(Yr(e))&&a[x].rightGroup.includes(Yr(n))&&o.push(x)});const s=document.querySelector("#kerning__letter-pair__results");if(s.innerHTML="",o.length){const x=z().selectedKernGroupID;o.forEach(E=>{let T=sl(E);T.addEventListener("click",()=>{const d=z();d.selectedItemID=E,d.history.addState(`Navigated to ${d.project.getItemName(E,!0)}`),document.querySelectorAll(".kern-group-chooser__row").forEach(y=>y.removeAttribute("selected")),T.setAttribute("selected","")}),E===x&&T.setAttribute("selected",""),s.appendChild(T)})}else s.innerHTML="<i>No Kern Groups exist with that letter pair</i>"}function JI(){const e=document.querySelector("#kerning__letter-pair__left-group").value.charAt(0),n=document.querySelector("#kerning__letter-pair__right-group").value.charAt(0),a=document.querySelector("#kerning__result-message");a.innerHTML="";const o=xe().kerning;let s,x=[],E=[];Object.keys(o).forEach(T=>{o[T].leftGroup.includes(Yr(e))&&o[T].rightGroup.includes(Yr(n))&&(s=zI(e,n,T),s?E.push(T):x.push(T))}),x.length&&(a.innerHTML=`
			<br><br>
			<b>Warning</b><br>
			The following Kern Groups contain the specified letter pair, but
			the letters could not be removed because both the left group and
			the right group contain multiple members.
			<br><br>
			${x.join(", ")}
			<br><br>
			<hr>
		`),E.length>0?(a.innerHTML+=`
			<br>
			Successfully removed letter pair from Kern Group${E.length>1?"s:":":"}
			<br><br>
			${E.join(", ")}
		`,z().navigate()):x.length||(a.innerHTML+=`
				<br>
				<i>No Kern Groups with the specified letter pair was found.</i>
			`)}function zI(t="",e="",r=""){let n={},a=Yr(t),o=Yr(e);const s=z();let x=!1;if(r){let E=s.project.getItem(r);E&&(n[r]=E)}else n=s.project.kerning;return Object.keys(n).forEach(E=>{let T=n[E].leftGroup,d=n[E].rightGroup;T.includes(a)&&d.includes(o)&&(T.length===1&&d.length===1?(s.deleteItem(E,s.project.kerning),x=!0):T.length===1?(d.splice(d.indexOf(o),1),x=!0):d.length===1&&(T.splice(T.indexOf(a),1),x=!0))}),x}function aa(t){const e=R();return t.forEach(r=>{e.appendChild(ZI(r))}),e}function ZI(t){let e=Rr(t)||"",r=la(t),n=t;return r&&(n=`${r}
${t}`),R({tag:"code",innerHTML:e,attributes:{title:n}})}function XI(t){let e=R({tag:"div",className:"panel__card",innerHTML:"<h3>Kern Group</h3>"}),r=Ue("Value"),n=bt(t,"value","currentKernGroup","input-number"),a=Ue("Left group"),o=aa(t.leftGroup),s=Ue("Right group"),x=aa(t.rightGroup);return ne(e,[r,n,a,o,s,x]),ne(e,Wr()),ne(e,g2()),e}function jI(){let t=R({tag:"div",className:"panel__card",innerHTML:"<h3>Other kern group actions</h3>"}),e=R({tag:"div",className:"panel__actions-area"});return er(e,ir("otherKernGroupActions")),t.appendChild(e),t}function qI(){const t=z();return Ut(t.project.kerning)<=0?[]:[XI(t.selectedKernGroup),jI()]}function wi(t=50,e,r=0,n=100,a=1){let o=R({className:"fancy-slider__wrapper"}),s=R({className:"fancy-slider__slider-readout",innerHTML:""+t});const x=t/(n-r)*100;let E=R({tag:"input",attributes:{type:"range",value:t,style:`accent-color: hsl(${x+200}, 100%, 40%);`,min:r,max:n,step:a},className:"fancy-slider__bar"});return E.addEventListener("input",T=>{const d=parseInt(T.target.value);s.innerHTML=""+d;const g=d/(n-r)*100;E.setAttribute("style",`accent-color: hsl(${g+200}, 100%, 40%);`),e&&e(d)}),ne(o,[E,s]),o}function QI(){const t=z(),e=xe();let r=R({tag:"div",className:"panel__card",innerHTML:"<h3>Characters</h3>"}),n=R({tag:"p",className:"spanAll",content:`Context characters are a small set of letters that are shown around
		the character you are currently editing.`});const a=e.settings.app.contextCharacters;let o=Ue("Show&nbsp;context&nbsp;characters&nbsp;&nbsp;"),s=ar(a,"showCharacters",()=>{z().autoFitView(),A1()}),x=bt(t.selectedItem,"contextCharacters","editCanvasView","input",["input"]);x.addEventListener("input",()=>z().autoFitView());let E=Ue("Transparency"),T=wi(a.characterTransparency,Y=>{a.characterTransparency=Y,z().editCanvas.redraw()});x.classList.add("spanAll"),ne(r,[n,x,Wr(),o,s,E,T]);let d=R({tag:"div",className:"panel__card",innerHTML:`<h3>Guides and labels</h3>
	`}),g=Ue("Show guides and labels"),y=ar(a,"showGuides",A1),C=Ue("Transparency"),k=wi(a.guidesTransparency,Y=>{a.guidesTransparency=Y,z().editCanvas.redraw()});return ne(d,[g,y,C,k]),[r,d,_l(!0)]}function A1(){z().editCanvas.redraw()}function ll({iconName:t="default",iconOptions:e=!1,title:r="",disabled:n=!1,onClick:a=()=>{},id:o=!1}={}){let s=R({tag:"button",innerHTML:Ke[t](e),attributes:{title:r}});return a&&s.addEventListener("click",a),n&&s.setAttribute("disabled","disabled"),typeof o=="string"&&s.setAttribute("id",o),s}let Ke={};function Ze(t,e="30"){return`
		<svg
			version="1.1" viewBox="0 0 ${e} ${e}"
			height="100%" width="100%"
			xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
		>
			${t}
			`}let Ee={darkFill:xt.gray.l25,lightFill:xt.gray.l85,blueOutline:xt.blue.l70,greenOutline:xt.green.l70,grayOutline:xt.gray.l70,purpleOutline:xt.purple.l40,redX:jr.red};Ke.copy=()=>{let t="",e=Ee.blueOutline,r=Ee.grayOutline,n=Ee.darkFill;return t+=`
		<polygon fill="${n}" points="1,22 1,10.4 10.4,1 18,1 18,22"/>
		<path fill="${r}" d="M17,2v19H2V10.8L10.8,2H17 M19,0h-9L0,10v13h19V0L19,0z"/>
		<polygon fill="${n}" points="12,29 12,17.4 21.4,8 29,8 29,29"/>
		<path fill="${e}" d="M28,9v19H13V17.8L21.8,9H28 M30,7h-9L11,17v13h19V7L30,7z"/>
	`,Ze(t)};Ke.paste=()=>{let t="",e=Ee.blueOutline,r=Ee.darkFill;return t+=`
		<rect fill="${r}" x="5" y="7"	width="20" height="22"/>
		<path fill="${e}" d="M24,8v20H6V8H24 M26,6H4v24h22V6L26,6z"/>
		<path fill="${r}" d="M9,9V4h3V3c0-1.3,1.8-2,3-2s3,0.7,3,2v1h3v5H9z"/>
		<path fill="${e}" d="M15,2c0.9,0,2,0.5,2,1v2h2h1v3H10V5h1h2V3C13,2.5,14.1,2,15,2 M15,0c-1.7,0-4,1-4,3H8v7h14V3h-3C19,1,16.7,0,15,0L15,0z"/>
	`,Ze(t)};Ke.clearClipboard=()=>{let t="",e=Ee.blueOutline,r=Ee.darkFill,n=Ee.redX;return t+=`
		<rect fill="${r}" x="5" y="7"	width="20" height="22"/>
		<path fill="${e}" d="M24,8v20H6V8H24 M26,6H4v24h22V6L26,6z"/>
		<path fill="${r}" d="M9,9V4h3V3c0-1.3,1.8-2,3-2s3,0.7,3,2v1h3v5H9z"/>
		<path fill="${e}" d="M15,2c0.9,0,2,0.5,2,1v2h2h1v3H10V5h1h2V3C13,2.5,14.1,2,15,2 M15,0c-1.7,0-4,1-4,3H8v7h14V3h-3C19,1,16.7,0,15,0L15,0z"/>
		<path fill="${n}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${n}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>
	`,Ze(t)};Ke.pastePathsFromAnotherGlyph=()=>{let t="",e=Ee.blueOutline,r=Ee.darkFill;return t+=`
		<rect fill="${r}" x="5" y="7"	width="20" height="22"/>
		<path fill="${e}" d="M24,8v20H6V8H24 M26,6H4v24h22V6L26,6z"/>
		<path fill="${r}" d="M9,9V4h3V3c0-1.3,1.8-2,3-2s3,0.7,3,2v1h3v5H9z"/>
		<path fill="${e}" d="M15,2c0.9,0,2,0.5,2,1v2h2h1v3H10V5h1h2V3C13,2.5,14.1,2,15,2 M15,0c-1.7,0-4,1-4,3H8v7h14V3h-3C19,1,16.7,0,15,0L15,0z"/>
		<path fill="${e}" d="M17.4,20.6h-4.8l-1,3h1.6v1.7H8v-1.7h1.6l3.6-10.2h-1.6V12h6.8v1.5h-1.7l3.7,10.2H22v1.7h-5.2v-1.7h1.7L17.4,20.6z M16.9,19.1l-1.8-5.6H15l-1.8,5.6H16.9z"/>
	`,Ze(t)};Ke.pastePathsFromAnotherProject=()=>{let t=Ee.lightFill,e=Ee.purpleOutline;const r=`
		<path fill="${t}" d="m11.5,1c4.817,0,7.471,0,8.986,1.514,1.514,1.515,1.514,4.168,1.514,8.986s0,7.471-1.514,8.985c-1.515,1.515-4.168,1.515-8.986,1.515s-7.471,0-8.985-1.515c-1.515-1.514-1.515-4.168-1.515-8.985s0-7.471,1.515-8.986c1.514-1.514,4.168-1.514,8.985-1.514"/>
		<path fill="${e}" d="m11.5,23c-5.084,0-7.886,0-9.692-1.808-1.808-1.808-1.808-4.608-1.808-9.692S0,3.615,1.808,1.808C3.614,0,6.416,0,11.5,0s7.886,0,9.692,1.808c1.808,1.808,1.808,4.608,1.808,9.692s0,7.885-1.808,9.692c-1.807,1.808-4.608,1.808-9.692,1.808Zm0-21c-4.55,0-7.057,0-8.278,1.222s-1.222,3.729-1.222,8.278,0,7.057,1.222,8.278,3.728,1.222,8.278,1.222,7.057,0,8.278-1.222,1.222-3.729,1.222-8.278,0-7.057-1.222-8.278-3.728-1.222-8.278-1.222Z"/>
		<rect fill="${e}" x="5" y="5" width="3" height="3"/>
		<path fill="${t}" d="m18.5,8c4.817,0,7.471,0,8.986,1.514,1.514,1.515,1.514,4.168,1.514,8.986s0,7.471-1.514,8.985c-1.515,1.515-4.168,1.515-8.986,1.515s-7.471,0-8.985-1.515c-1.515-1.514-1.515-4.168-1.515-8.985s0-7.471,1.515-8.986c1.514-1.514,4.168-1.514,8.985-1.514"/>
		<path fill="${e}" d="m28.192,8.808c-1.807-1.808-4.608-1.808-9.692-1.808-.176,0-.329,0-.5,0v-2.001h-3v2.033c-.735.022-1.389.068-2,.133v-2.166h-3v2.961c-.437.228-.841.495-1.192.847-.352.352-.618.756-.847,1.192h-2.961v3h2.166c-.065.611-.111,1.265-.133,2h-2.033v3h2.001c0,.171,0,.324,0,.5,0,5.084,0,7.885,1.808,9.692,1.807,1.808,4.608,1.808,9.692,1.808s7.886,0,9.692-1.808c1.808-1.808,1.808-4.608,1.808-9.692s0-7.885-1.808-9.692Zm-1.414,17.971c-1.222,1.222-3.728,1.222-8.278,1.222s-7.057,0-8.278-1.222-1.222-3.729-1.222-8.278,0-7.057,1.222-8.278,3.728-1.222,8.278-1.222,7.057,0,8.278,1.222,1.222,3.729,1.222,8.278,0,7.057-1.222,8.278Z"/>
		<path fill="${e}" d="m20.233,20h-3.467l-1.092,3h1.525v2h-5.2v-2h1.733l3.467-9h-1.733v-2h6.067v2h-1.733l3.467,9h1.733v2h-5.2v-2h1.517l-1.083-3Zm-.433-1l-1.3-4-1.3,4h2.6Z"/>
	`;return Ze(r)};Ke.addPath=function(t=!1){let e="",r=Ee.blueOutline,n=Ee.darkFill;return t&&(r=Ee.greenOutline,n=Ee.lightFill),e+=`
		<rect fill="${n}" x="1" y="1"	width="16" height="16"/>
		<path fill="${r}" d="M16,2v14H2V2H16 M18,0H0v18h18V0L18,0z"/>
	`,e+=`
		<rect x="21" y="15" fill="${r}" width="3" height="15"/>
		<rect x="15" y="21" fill="${r}" width="15" height="3"/>
	`,Ze(e)};Ke.undo=()=>{let t="",e=Ee.blueOutline,r=Ee.darkFill;return t+=`
		<path fill="${r}" d="M20.1,23c4.6-5,6.6-9.6,5.5-12.8C24.9,8.2,22.9,7,20,7c-5.9,0-8.8,5.3-8.9,5.5L10.9,13l2.4,4.1l-12,0.8l4-14.4l2.5,4.2l0.9-1.1c0,0,4-4.6,11.2-4.6c4.1,0,7.9,2.8,8.8,6.5C29.4,10.8,29.3,16.3,20.1,23z"/>
		<path fill="${e}" d="M20,3c3.1,0,6.9,2,7.8,5.7c0.5,2.1-0.1,4.4-1.6,6.7c0.7-2,0.9-3.9,0.3-5.5C25.7,7.4,23.3,6,20,6c-6.5,0-9.6,5.8-9.8,6.1l-0.5,1l0.6,1l1.3,2.2l-8.9,0.6L5.7,6l0.6,1l1.4,2.4l1.8-2.2C9.6,7.2,13.2,3,20,3 M20,1C12.2,1,8,6,8,6L5,1L0,19l15-1l-3-5c0,0,2.6-5,8-5c7.7,0,7.2,9.2-8,21C39.8,15,29.5,1,20,1L20,1z"/>
	`,Ze(t)};Ke.linkToGlyph=()=>{let t="",e=Ee.greenOutline;return t+=`
		<path fill="${e}" d="M18,8.8L8.8,18c-0.5,0.5-1.3,0.5-1.8,0s-0.5-1.3,0-1.8L16.2,7c0.5-0.5,1.3-0.5,1.8,0S18.5,8.3,18,8.8z"/>
		<path fill="${e}" d="M7.5,21.2c-1.1,1.1-2.8,1.8-4.1,0.5s-0.6-3,0.5-4.1l5.9-5.9c-1.8-0.5-3.8,0.1-5.5,1.8L2,15.7c-2.4,2.4-2.6,5.7-0.5,7.8s5.4,2,7.8-0.5l2.3-2.3c1.7-1.7,2.3-3.7,1.8-5.5L7.5,21.2z"/>
		<path fill="${e}" d="M21.2,7.5c1.1-1.1,1.8-2.8,0.5-4.1s-3-0.6-4.1,0.5l-5.9,5.9c-0.5-1.8,0.1-3.8,1.8-5.5L15.7,2c2.4-2.4,5.7-2.6,7.8-0.5s2,5.4-0.5,7.8l-2.3,2.3c-1.7,1.7-3.7,2.3-5.5,1.8L21.2,7.5z"/>
		<rect x="21" y="15" fill="${e}" width="3" height="15"/>
		<rect x="15" y="21" fill="${e}" width="15" height="3"/>
	`,Ze(t)};Ke.round=()=>{let t=Ee.redX,e=Ee.darkFill,r=`
		<path fill="${t}" d="M17.4,21.9c0.4,0.5,2-0.5,1.4-1.4c-1.3-1.9-4.8-5.9-6.5-7.3C11.1,12.2,10,13,10,13S14.4,17.5,17.4,21.9z"/>
		<path fill="${t}" d="M12.2,21.6c-0.5,1-2.1-0.1-1.3-1.2c1.5-2.2,4.4-6.4,6.5-7.9c1.3-1,2.1-0.1,2.1-0.1S14.9,16.7,12.2,21.6z"/>
		<path fill="${t}" d="M28,21.9c0.4,0.5,2-0.5,1.4-1.4c-1.3-1.9-4.8-5.9-6.5-7.3c-1.2-1-2.3-0.3-2.3-0.3S24.9,17.5,28,21.9z"/>
		<path fill="${t}" d="M22.7,21.6c-0.5,1-2.1-0.1-1.3-1.2c1.5-2.2,4.4-6.4,6.5-7.9c1.3-1,2.1-0.1,2.1-0.1S25.5,16.7,22.7,21.6z"/>
		<path fill="${e}" d="M2,20V9H0V7h4v13h2v2H0v-2H2z"/>
		<path fill="${e}" d="M7,22v-2h2v2H7z"/>
	`;return Ze(r)};Ke.flipVertical=()=>{let t="",e=Ee.blueOutline,r=Ee.grayOutline,n=Ee.darkFill;return t+=`
		<polygon fill="${n}" points="6.4,13 1,7.6 1,1 14.7,1 29,9.6 29,13"/>
		<path fill="${r}" d="M14.2,2L28,10.1V12H6.8L2,7.2V2h12 M15,0H0v8l6,6h24V9L15,0L15,0z"/>
		<polygon fill="${n}" points="1,29 1,22.4 6.4,17 29,17 29,20.4 14.7,29"/>
		<path fill="${e}" d="M28,18v1.9L14.4,28H2v-5.2L6.8,18H28 M30,16H6l-6,6v8h15l15-9V16L30,16z"/>
	`,Ze(t)};Ke.flipHorizontal=()=>{let t="",e=Ee.blueOutline,r=Ee.grayOutline,n=Ee.darkFill;return t+=`
		<polygon fill="${n}" points="1,29 1,15.3 9.6,1 13,1 13,23.6 7.6,29"/>
		<path fill="${r}" d="M12,2v21.2L7.2,28H2V15.6L10.1,2H12 M14,0H9L0,15v15h8l6-6V0L14,0z"/>
		<polygon fill="${n}" points="22.4,29 17,23.6 17,1 20.4,1 29,15.3 29,29"/>
		<path fill="${e}" d="M19.9,2L28,15.6V28h-5.2L18,23.2V2H19.9 M21,0h-5v24l6,6h8V15L21,0L21,0z"/>
	`,Ze(t)};Ke.exportGlyphSVG=()=>{let t=Ee.blueOutline,e=Ee.darkFill,r=`
      <rect x="7" y="1" width="16" height="2" fill="${t}"/>
      <polygon points="20 9 15 4 10 9 13.778 9 13.778 14 16.222 14 16.222 9 20 9" fill="${t}"/>
      <path d="M4.811,24.279c.448,0,.809-.071,1.083-.213s.413-.354.413-.638c0-.192-.054-.354-.162-.484-.108-.13-.314-.255-.621-.374-.306-.119-.759-.261-1.36-.425-.55-.147-1.036-.334-1.458-.561-.422-.227-.75-.519-.986-.876-.235-.356-.353-.802-.353-1.334,0-.539.15-1.018.45-1.437.3-.42.743-.75,1.326-.99.583-.241,1.297-.361,2.142-.361.805,0,1.506.104,2.104.31.598.207,1.115.47,1.551.787l-1.071,1.58c-.374-.231-.776-.417-1.207-.557-.431-.139-.864-.208-1.301-.208s-.761.059-.973.175-.319.29-.319.522c0,.153.056.284.166.396.11.11.319.224.625.34.306.116.754.259,1.343.429.583.165,1.092.354,1.526.569.433.216.769.503,1.007.863.238.359.357.834.357,1.424,0,.657-.196,1.208-.587,1.653-.391.444-.909.777-1.555.998-.646.222-1.354.332-2.125.332-.873,0-1.644-.125-2.312-.374-.669-.249-1.238-.578-1.708-.986l1.352-1.513c.351.272.749.499,1.194.68.445.182.931.272,1.458.272Z" fill="${e}"/>
      <path d="M19.214,16.884l-3.009,9.027h-3.162l-3.043-9.027h2.898l1.759,6.971,1.836-6.971h2.72Z" fill="${e}"/>
      <path d="M28.371,15.439l.629,1.972c-.317.125-.688.216-1.113.272-.425.057-.921.085-1.488.085.567.243.999.545,1.296.905.297.359.446.831.446,1.415s-.156,1.104-.468,1.56c-.312.456-.753.814-1.326,1.075-.573.261-1.25.391-2.032.391-.192,0-.374-.008-.544-.025-.17-.017-.337-.042-.501-.076-.096.051-.17.125-.221.221-.051.097-.076.195-.076.298,0,.142.058.27.174.383.116.113.389.17.82.17h1.479c.702,0,1.31.113,1.823.34.513.227.911.535,1.194.927.284.391.425.838.425,1.343,0,.924-.405,1.651-1.216,2.185-.81.532-2.014.799-3.612.799-1.156,0-2.05-.118-2.682-.353-.632-.235-1.071-.57-1.317-1.003-.247-.434-.37-.948-.37-1.543h2.38c0,.261.052.475.157.642.104.167.306.29.604.37.297.079.729.118,1.296.118.572,0,1.009-.045,1.309-.136s.506-.214.616-.369c.11-.156.166-.331.166-.523,0-.267-.105-.481-.314-.646-.21-.165-.542-.247-.995-.247h-1.437c-.975,0-1.683-.18-2.125-.539-.442-.36-.663-.781-.663-1.263,0-.334.089-.651.268-.952.179-.3.429-.553.752-.756-.578-.307-.992-.668-1.241-1.084-.249-.417-.374-.917-.374-1.5,0-.681.173-1.266.519-1.756s.823-.868,1.433-1.135c.609-.266,1.305-.399,2.086-.399.674.012,1.261-.035,1.76-.14.499-.105.946-.25,1.343-.434.396-.185.776-.382,1.139-.591ZM24.198,18.346c-.425,0-.762.135-1.012.404s-.374.639-.374,1.109c0,.498.127.881.382,1.147.255.267.589.399,1.003.399.447,0,.789-.133,1.024-.399s.353-.66.353-1.182c0-.504-.116-.877-.349-1.118-.232-.24-.575-.361-1.028-.361Z" fill="${e}"/>
	`;return Ze(r)};Ke.importGlyphSVG=()=>{let t=Ee.blueOutline,e=Ee.darkFill,r=`
    <path d="M28,4l-2-2-5,5-3-3c0-.143,0,8,0,8h8l-3-3,5-5Z" fill="${t}"/>
    <path d="M4.811,24.279c.448,0,.809-.071,1.083-.213s.413-.354.413-.638c0-.192-.054-.354-.162-.484-.108-.13-.314-.255-.621-.374-.306-.119-.759-.261-1.36-.425-.55-.147-1.036-.334-1.458-.561-.422-.227-.75-.519-.986-.876-.235-.356-.353-.802-.353-1.334,0-.539.15-1.018.45-1.437.3-.42.743-.75,1.326-.99.583-.241,1.297-.361,2.142-.361.805,0,1.506.104,2.104.31.598.207,1.115.47,1.551.787l-1.071,1.58c-.374-.231-.776-.417-1.207-.557-.431-.139-.864-.208-1.301-.208s-.761.059-.973.175-.319.29-.319.522c0,.153.056.284.166.396.11.11.319.224.625.34.306.116.754.259,1.343.429.583.165,1.092.354,1.526.569.433.216.769.503,1.007.863.238.359.357.834.357,1.424,0,.657-.196,1.208-.587,1.653-.391.444-.909.777-1.555.998-.646.222-1.354.332-2.125.332-.873,0-1.644-.125-2.312-.374-.669-.249-1.238-.578-1.708-.986l1.352-1.513c.351.272.749.499,1.194.68.445.182.931.272,1.458.272Z" fill="${e}"/>
    <path d="M19.214,16.884l-3.009,9.027h-3.162l-3.043-9.027h2.898l1.759,6.971,1.836-6.971h2.72Z" fill="${e}"/>
    <path d="M28.371,15.439l.629,1.972c-.317.125-.688.216-1.113.272-.425.057-.921.085-1.488.085.567.243.999.545,1.296.905.297.359.446.831.446,1.415s-.156,1.104-.468,1.56c-.312.456-.753.814-1.326,1.075-.573.261-1.25.391-2.032.391-.192,0-.374-.008-.544-.025-.17-.017-.337-.042-.501-.076-.096.051-.17.125-.221.221-.051.097-.076.195-.076.298,0,.142.058.27.174.383.116.113.389.17.82.17h1.479c.702,0,1.31.113,1.823.34.513.227.911.535,1.194.927.284.391.425.838.425,1.343,0,.924-.405,1.651-1.216,2.185-.81.532-2.014.799-3.612.799-1.156,0-2.05-.118-2.682-.353-.632-.235-1.071-.57-1.317-1.003-.247-.434-.37-.948-.37-1.543h2.38c0,.261.052.475.157.642.104.167.306.29.604.37.297.079.729.118,1.296.118.572,0,1.009-.045,1.309-.136s.506-.214.616-.369c.11-.156.166-.331.166-.523,0-.267-.105-.481-.314-.646-.21-.165-.542-.247-.995-.247h-1.437c-.975,0-1.683-.18-2.125-.539-.442-.36-.663-.781-.663-1.263,0-.334.089-.651.268-.952.179-.3.429-.553.752-.756-.578-.307-.992-.668-1.241-1.084-.249-.417-.374-.917-.374-1.5,0-.681.173-1.266.519-1.756s.823-.868,1.433-1.135c.609-.266,1.305-.399,2.086-.399.674.012,1.261-.035,1.76-.14.499-.105.946-.25,1.343-.434.396-.185.776-.382,1.139-.591ZM24.198,18.346c-.425,0-.762.135-1.012.404s-.374.639-.374,1.109c0,.498.127.881.382,1.147.255.267.589.399,1.003.399.447,0,.789-.133,1.024-.399s.353-.66.353-1.182c0-.504-.116-.877-.349-1.118-.232-.24-.575-.361-1.028-.361Z" fill="${e}"/>
	`;return Ze(r)};Ke.deleteGlyph=()=>{let t=Ee.redX,r=`
		<path fill="${Ee.darkFill}" d="M20.2,18.5H10L7.8,25h3.5v3.6H0V25h3.5l7.8-21.8H7.8V0h14.6v3.2h-3.6l8,21.8H30v3.6H18.8V25h3.5L20.2,18.5zM19.2,15.2L15.4,3.2H15l-4,11.9H19.2z"/>
		<path fill="${t}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${t}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>
	`;return Ze(r)};Ke.reverseWinding=()=>{let t="",e=Ee.blueOutline,r=Ee.grayOutline;return t+=`
		<path fill="${r}" d="M3.7,7.8V5L0,8.7l3.7,3.7V9.6c6.2,0,11.2,5,11.2,11.2h1.9C16.8,13.6,10.9,7.8,3.7,7.8z"/>
		<path fill="${e}" d="M25.2,22.3C25.2,10,15.2,0,3,0v3.2c10.5,0,19.1,8.6,19.1,19.1h-4.8l6.4,6.4l6.4-6.4H25.2z"/>
	`,Ze(t)};Ke.switchPathComponent=function(t=!1){let e="",r=Ee.blueOutline,n=Ee.greenOutline,a=Ee.darkFill,o=Ee.lightFill;return t&&(r=Ee.greenOutline,n=Ee.blueOutline,a=Ee.lightFill,o=Ee.darkFill),e+=`
	<polygon fill="${a}" points="5.1,21 1,17.2 1,1 3.4,1 10,11.3 10,21"/>
	<path fill="${r}" d="M2.9,2L9,11.6V20H5.5L2,16.7V2H2.9 M3.9,0H0v17.6L4.7,22H11V11L3.9,0L3.9,0z"/>
	<polygon fill="${o}" points="21.8,29 16,23.6 16,1 19.8,1 29,15.3 29,29"/>
	<path fill="${n}" d="M19.1,2L28,15.6V28h-5.8L17,23.1V2h2 M20.4,0H15v24l6.4,6H30V15L20.4,0L20.4,0z"/>
	`,Ze(e)};Ke.deletePath=function(t=!1){let e="",r=Ee.redX,n=Ee.blueOutline,a=Ee.darkFill;return t&&(n=Ee.greenOutline,a=Ee.lightFill),e+=`
		<rect fill="${a}" x="1" y="1"	width="16" height="16"/>
		<path fill="${n}" d="M16,2v14H2V2H16 M18,0H0v18h18V0L18,0z"/>
	`,e+=`
		<path fill="${r}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${r}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>
	`,Ze(e)};Ke.combine_unite=()=>{let t="",e=Ee.blueOutline,r=Ee.darkFill;return t+=`
		<path d="M15.164,6.4c-.8-3.104-3.61-5.4-6.964-5.4-3.976,0-7.2,3.223-7.2,7.2,0,3.354,2.296,6.164,5.4,6.964v3.836h12.6V6.4h-3.836Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM18,18h-10v-4c-.702,0-1.373-.127-2-.35-2.327-.826-4-3.044-4-5.65,0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4,.223.627.35,1.298.35,2h4v10Z" style="fill: ${e};"/>
	`,Ze(t,"20")};Ke.combine_divide=()=>{let t="",e=Ee.blueOutline,r=Ee.darkFill;return t+=`
		<path d="M15.164,6.4c-.8-3.104-3.61-5.4-6.964-5.4C4.224,1,1,4.223,1,8.2c0,3.354,2.296,6.164,5.4,6.964v3.836h12.6V6.4h-3.836Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM2,8c0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4h-7.65v7.65c-2.327-.826-4-3.044-4-5.65ZM14,8c0,3.308-2.692,6-6,6v-6h6ZM18,18h-10v-2c4.418,0,8-3.582,8-8h2v10Z" style="fill: ${e};"/>
	`,Ze(t,"20")};Ke.combine_subtract=()=>{let t="",e=Ee.blueOutline,r=Ee.darkFill;return t+=`
		<path d="M15,6.337c-.791-3.068-3.568-5.337-6.883-5.337C4.186,1,1,4.186,1,8.117c0,3.315,2.27,6.092,5.337,6.883V6.337h8.663Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM2,8c0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4h-7.65v7.65c-2.327-.826-4-3.044-4-5.65ZM18,18h-10v-10h10v10Z" style="fill: ${e};"/>
	`,Ze(t,"20")};Ke.combine_exclude=()=>{let t="",e=Ee.blueOutline,r=Ee.darkFill;return t+=`
		<path d="M15.347,7c0,5-3.347,8.347-8.347,8.347v3.653h12V7h-3.653Z" style="fill: ${r};"/>
		<path d="M15,6.337c-.791-3.068-3.568-5.337-6.883-5.337-3.93,0-7.117,3.186-7.117,7.117,0,3.315,2.27,6.092,5.337,6.883V6.337h8.663Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM2,8c0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4h-7.65v7.65c-2.327-.826-4-3.044-4-5.65ZM14,8c0,3.308-2.692,6-6,6v-6h6ZM18,18h-10v-2c4.418,0,8-3.582,8-8h2v10Z" style="fill: ${e};"/>
	`,Ze(t,"20")};Ke.combine_intersect=()=>{let t="",e=Ee.blueOutline,r=Ee.darkFill;return t+=`
		<path d="M15,8.6c0-.554-.078-1.088-.21-1.6h-7.79v7.79c.512.132,1.046.21,1.6.21,3.535,0,6.4-2.865,6.4-6.4Z" style="fill: ${r};"/>
		<path d="M15.738,6c-.889-3.449-4.011-6-7.738-6C3.582,0,0,3.582,0,8c0,3.726,2.551,6.848,6,7.738v4.262h14V6h-4.262ZM2,8c0-3.308,2.692-6,6-6,2.606,0,4.824,1.673,5.65,4h-7.65v7.65c-2.327-.826-4-3.044-4-5.65ZM14,8c0,3.308-2.692,6-6,6v-6h6ZM18,18h-10v-2c4.418,0,8-3.582,8-8h2v10Z" style="fill: ${e};"/>
	`,Ze(t,"20")};Ke.edit=()=>{let t="",e=Ee.blueOutline,r=Ee.darkFill;return t+=`
		<path fill="${e}" d="m28.643,1.357c-1.577-1.577-4.109-1.891-5.651-.349L4,20,0,29l1,1,9-4L28.992,7.008c1.542-1.542,1.228-4.074-.349-5.651Z"/>
		<path fill="${r}" d="m28.643,1.357C27.771.486,26.608,0,25.482,0,24.57,0,23.682.318,22.992,1.008L4,20,0,29l1,1,9-4L28.992,7.008c1.542-1.542,1.228-4.074-.349-5.651ZM6.268,20.561l15.793-15.793,3.172,3.172-15.793,15.793-3.172-3.172Zm-.662.752l3.082,3.082-5.548,2.466,2.466-5.548ZM27.577,5.594l-1.638,1.638-3.172-3.172,1.638-1.638c.281-.28.643-.423,1.076-.423.611,0,1.264.288,1.747.771.44.44.719,1.018.765,1.586.028.346-.021.842-.416,1.237Z"/>
	`,Ze(t)};Ke.delete=()=>{let t="",e=Ee.redX;return t+=`
		<path fill="${e}" d="m23.597,28.681c1.121,1.472,6.349-1.368,4.386-3.98C23.74,19.055,12.613,7.416,7.367,3.301,3.535.295,0,2.518,0,2.518c0,0,13.846,13.354,23.597,26.164Z"/>
		<path fill="${e}" d="m6.893,28.339c-1.703,2.813-6.56-.4-4.174-3.566C7.551,18.364,16.797,6.057,23.298,1.396c4.182-2.998,6.702-.235,6.702-.235,0,0-14.277,12.59-23.107,27.178Z"/>
	`,Ze(t)};Ke.createNewKernGroup=()=>{let t="",e=Ee.greenOutline,r=Ee.darkFill;return t+=`
		<path d="m16.306,19.001l-4.324-11.39h-1.593v-1.611h5.08v1.611h-1.487l3.278,8.641,3.19-8.641h-1.501v-1.611h4.941v1.611h-1.563l-4.235,11.39h-1.786Z" fill="${r}"/>
		<path d="m12.197,17.375l-3.58-9.75h1.57v-1.625H3.548v1.625h1.517l-3.493,9.75H0v1.625h5.116v-1.625h-1.578l.994-2.941h4.679l.966,2.941h-1.615v1.625h5.088v-1.625h-1.453Zm-7.181-4.463l1.751-5.287h.273l1.682,5.287h-3.705Z" fill="${r}"/>
		<polygon points="13 20.5 13 22.5 0 22.5 0 23.5 13 23.5 13 25.5 14 25.5 14 20.5 13 20.5" fill="${r}"/>
		<polygon points="24 2 10 2 10 0 9 0 9 5 10 5 10 3 24 3 24 2" fill="${r}"/>
		<rect x="21" y="15" width="3" height="15" fill="${e}"/>
		<rect x="21" y="15" width="3" height="15" transform="translate(45 0) rotate(90)" fill="${e}"/>
	`,Ze(t)};Ke.deleteSingleLetterPair=()=>{let t="",e=Ee.redX,r=Ee.darkFill;return t+=`
		<path d="m16.306,19.001l-4.324-11.39h-1.593v-1.611h5.08v1.611h-1.487l3.278,8.641,3.19-8.641h-1.501v-1.611h4.941v1.611h-1.563l-4.235,11.39h-1.786Z" fill="${r}"/>
		<path d="m12.197,17.375l-3.58-9.75h1.57v-1.625H3.548v1.625h1.517l-3.493,9.75H0v1.625h5.116v-1.625h-1.578l.994-2.941h4.679l.966,2.941h-1.615v1.625h5.088v-1.625h-1.453Zm-7.181-4.463l1.751-5.287h.273l1.682,5.287h-3.705Z" fill="${r}"/>
		<path d="m26.428,29.033c.625.821,3.542-.763,2.447-2.22-2.367-3.149-8.574-9.642-11.5-11.938-2.138-1.677-4.11-.437-4.11-.437,0,0,7.723,7.449,13.163,14.595Z" fill="${e}"/>
		<path d="m17.111,28.842c-.95,1.569-3.659-.223-2.328-1.989,2.695-3.575,7.853-10.44,11.479-13.04,2.333-1.673,3.739-.131,3.739-.131,0,0-7.964,7.023-12.889,15.16Z" fill="${e}"/>
	`,Ze(t)};Ke.findSingleLetterPair=()=>{let t="",e=Ee.blueOutline,r=Ee.darkFill;return t+=`
		<path d="m16.306,19.001l-4.324-11.39h-1.593v-1.611h5.08v1.611h-1.487l3.278,8.641,3.19-8.641h-1.501v-1.611h4.941v1.611h-1.563l-4.235,11.39h-1.786Z" fill="${r}"/>
		<path d="m12.197,17.375l-3.58-9.75h1.57v-1.625H3.548v1.625h1.517l-3.493,9.75H0v1.625h5.116v-1.625h-1.578l.994-2.941h4.679l.966,2.941h-1.615v1.625h5.088v-1.625h-1.453Zm-7.181-4.463l1.751-5.287h.273l1.682,5.287h-3.705Z" fill="${r}"/>
		<path d="m30,28l-5.154-5.154c.728-1.104,1.154-2.425,1.154-3.846,0-3.866-3.134-7-7-7s-7,3.134-7,7,3.134,7,7,7c1.421,0,2.742-.426,3.846-1.154l5.154,5.154,2-2Zm-15.5-9c0-2.481,2.019-4.5,4.5-4.5s4.5,2.019,4.5,4.5-2.019,4.5-4.5,4.5-4.5-2.019-4.5-4.5Z" fill="${e}"/>
	`,Ze(t)};Ke.moveLayerDown=()=>{let t="",e=Ee.blueOutline,r=Ee.darkFill;return t+=`
		<rect fill="${e}" x="23" y="21" width="2" height="7"/>
		<path fill="${e}" d="M20,26h8l-4,4C24,30,19.9,25.9,20,26z"/>
		<polygon fill="${e}" points="15,17 5.4,12.5 0,15 15,22 30,15 24.6,12.5"/>
		<polygon fill="${r}" points="15,14 0,7 15,0 30,7"/>
	`,Ze(t)};Ke.moveLayerUp=()=>{let t="",e=Ee.blueOutline,r=Ee.darkFill;return t+=`
		<rect fill="${e}" x="23" y="23" width="2" height="7"/>
		<path fill="${e}" d="M20,25h8l-4-4C24,21,19.9,25.1,20,25z"/>
		<polygon fill="${r}" points="15,17 5.4,12.5 0,15 15,22 30,15 24.6,12.5"/>
		<polygon fill="${e}" points="15,14 0,7 15,0 30,7"/>
	`,Ze(t)};Ke.align=function(t){let e="",r=Ee.blueOutline,n=Ee.darkFill;switch(t){case"bottom":e+=`
				<rect x="0" y="18" width="20" height="2" style="fill: ${r};"/>
				<rect x="1" y="11" width="4" height="6" style="fill: ${n};"/>
				<rect x="8" y="1" width="4" height="16" style="fill: ${n};"/>
				<rect x="15" y="5" width="4" height="12" style="fill: ${n};"/>
			`;break;case"middle":e+=`
				<rect x="0" y="9" width="20" height="2" style="fill: ${r};"/>
				<rect x="1" y="7" width="4" height="6" style="fill: ${n};"/>
				<rect x="8" y="2" width="4" height="16" style="fill: ${n};"/>
				<rect x="15" y="4" width="4" height="12" style="fill: ${n};"/>
			`;break;case"top":e+=`
				<rect x="0" width="20" height="2" style="fill: ${r};"/>
				<rect x="1" y="3" width="4" height="6" style="fill: ${n};"/>
				<rect x="8" y="3" width="4" height="16" style="fill: ${n};"/>
				<rect x="15" y="3" width="4" height="12" style="fill: ${n};"/>
			`;break;case"left":e+=`
				<rect x="0" width="2" height="20" style="fill: ${r};"/>
				<rect x="3" y="1" width="6" height="4" style="fill: ${n};"/>
				<rect x="3" y="8" width="16" height="4" style="fill: ${n};"/>
				<rect x="3" y="15" width="12" height="4" style="fill: ${n};"/>
			`;break;case"center":e+=`
				<rect x="9.016" width="2" height="20" style="fill: ${r};"/>
				<rect x="7" y="1" width="6" height="4" style="fill: ${n};"/>
				<rect x="2" y="8" width="16" height="4" style="fill: ${n};"/>
				<rect x="4" y="15" width="12" height="4" style="fill: ${n};"/>
			`;break;case"right":e+=`
				<rect x="18" width="2" height="20" style="fill: ${r};"/>
				<rect x="11" y="1" width="6" height="4" style="fill: ${n};"/>
				<rect x="1" y="8" width="16" height="4" style="fill: ${n};"/>
				<rect x="5" y="15" width="12" height="4" style="fill: ${n};"/>
			`;break}return Ze(e,"20")};Ke.resetPathPoint=()=>{let t="",e=Ee.blueOutline,r=Ee.grayOutline;return t+=`
		<circle display="inline" fill="${r}" cx="20" cy="27" r="3"/>
		<circle display="inline" fill="${r}" cx="27" cy="13" r="3"/>
		<line display="inline" fill="none" stroke="${r}" stroke-miterlimit="10" x1="20" y1="27" x2="13" y2="13"/>
		<line display="inline" fill="none" stroke="${r}" stroke-miterlimit="10" x1="13" y1="13" x2="27" y2="13"/>
	`,t+=`
		<line stroke="${e}" fill="none" stroke-miterlimit="10" x1="4" y1="22" x2="22" y2="4"/>
		<rect fill="#FFFFFF" x="9.5" y="9.5" width="7" height="7"/>
		<path fill="${e}" d="M16,10v6h-6v-6H16 M17,9h-1h-6H9v1v6v1h1h6h1v-1v-6V9L17,9z"/>
		<circle fill="${e}" cx="3" cy="23" r="3"/>
		<circle fill="${e}" cx="23" cy="3" r="3"/>
	`,Ze(t)};Ke.deletePathPoint=()=>{let t="",e=Ee.blueOutline,r=Ee.redX;return t+=`
		<line stroke="${e}" fill="none" stroke-miterlimit="10" x1="4" y1="22" x2="22" y2="4"/>
		<rect fill="#FFFFFF" x="9.5" y="9.5" width="7" height="7"/>
		<path fill="${e}" d="M16,10v6h-6v-6H16 M17,9h-1h-6H9v1v6v1h1h6h1v-1v-6V9L17,9z"/>
		<circle fill="${e}" cx="3" cy="23" r="3"/>
		<circle fill="${e}" cx="23" cy="3" r="3"/>
	`,t+=`
		<path fill="${r}" d="M26.4,29c0.6,0.8,3.5-0.8,2.4-2.2c-2.4-3.1-8.6-9.6-11.5-11.9c-2.1-1.7-4.1-0.4-4.1-0.4S21,21.9,26.4,29z"/>
		<path fill="${r}" d="M17.2,28.8c-0.9,1.6-3.7-0.2-2.3-2c2.7-3.6,7.9-10.4,11.5-13c2.3-1.7,3.7-0.1,3.7-0.1S22.1,20.7,17.2,28.8z"/>';
	`,Ze(t)};Ke.insertPathPoint=()=>{let t="",e=Ee.blueOutline;return t+=`
		<line stroke="${e}" fill="none" stroke-miterlimit="10" x1="4" y1="22" x2="22" y2="4"/>
		<rect fill="#FFFFFF" x="9.5" y="9.5" width="7" height="7"/>
		<path fill="${e}" d="M16,10v6h-6v-6H16 M17,9h-1h-6H9v1v6v1h1h6h1v-1v-6V9L17,9z"/>
		<circle fill="${e}" cx="3" cy="23" r="3"/>
		<circle fill="${e}" cx="23" cy="3" r="3"/>
	`,t+=`
		<rect x="21" y="15" fill="${e}" width="3" height="15"/>
		<rect x="15" y="21" fill="${e}" width="15" height="3"/>';
	`,Ze(t)};Ke.selectNextPathPoint=()=>{let t="",e=Ee.blueOutline,r=Ee.grayOutline;return t+=`
		<rect x="22.5" y="11.5" width="7" height="7" fill="white"/>
		<path d="m29,12v6h-6v-6h6m1-1h-8v8h8v-8h0Z" fill="${e}"/>
		<path d="m19,15s-7-7-7-7v5h-6v4h6v5s7-7,7-7Z" fill="${r}"/>
		<rect y="13" width="3" height="4" fill="${r}"/>
	`,Ze(t)};Ke.selectPreviousPathPoint=()=>{let t="",e=Ee.blueOutline,r=Ee.grayOutline;return t+=`
		<rect x=".5" y="11.5" width="7" height="7" fill="white"/>
		<path d="m7,12v6H1v-6h6m1-1H0v8h8v-8h0Z" fill="${e}"/>
		<path d="m11,15s7-7,7-7v5h6v4h-6s0,5,0,5l-7-7Z" fill="${r}"/>
		<rect x="27" y="13" width="3" height="4" fill="${r}"/>
	`,Ze(t)};Ke.default=()=>{let t=`<rect width="30" height="30" fill="${Ee.greenOutline}"/>`;return Ze(t)};Ke.test=()=>{let t=`
		<path d="M28.05,23.82c-1.65-1.79-9.55-13.02-9.55-17.82V3h1c.28,0,.5-.72,.5-1s-.22-1-.5-1H10.5c-.28,0-.5,.72-.5,1s.22,1,.5,1h1v3c0,4.8-7.9,16.03-9.55,17.82-.58,.55-.95,1.32-.95,2.18,0,1.66,1.34,3,3,3H26c1.66,0,3-1.34,3-3,0-.86-.37-1.63-.95-2.18ZM13.5,6V3h3v3c0,2.76,2.01,6.95,4.25,10.72-3.27,1.69-5.6-.72-7.75-.72-.34,0-1.86-.31-4,1.15,2.34-3.88,4.5-8.28,4.5-11.15Zm3.5,20c-1.66,0-3-1.34-3-3s1.34-3,3-3,3,1.34,3,3-1.34,3-3,3Zm-6-7.5c0-.83,.67-1.5,1.5-1.5s1.5,.67,1.5,1.5-.67,1.5-1.5,1.5-1.5-.67-1.5-1.5Z" fill="${Ee.redX}"/>
		<circle cx="15" cy="14" r="1" fill="${Ee.redX}"/>
	`;return Ze(t)};function $I(){let t=R({className:"panel__card guides-card__view-options",innerHTML:"<h3>View options</h3>"});const e=xe().settings.app.guides,r=e.systemShowGuides,n=e.customShowGuides;ne(t,[ar(e,"drawGuidesOnTop",Qn),R({tag:"label",style:"grid-column: 2 / -1;",content:"Draw guides over shapes"})]);const a=ar(e,"systemShowGuides");a.addEventListener("change",()=>{z().navigate()}),ne(t,[a,R({tag:"h4",content:"Key metrics guides"})]),r&&ne(t,[R(),Ue("Transparency"),wi(e.systemTransparency,x=>{e.systemTransparency=x,z().editCanvas.redraw()}),R(),Ue("Show labels"),ar(e,"systemShowLabels",Qn),Wr()]);const o=ar(e,"customShowGuides");o.addEventListener("change",()=>{z().navigate()}),ne(t,[o,R({tag:"h4",content:"Custom guides"})]),n&&ne(t,[R(),Ue("Transparency"),wi(e.customTransparency,x=>{e.customTransparency=x,z().editCanvas.redraw()}),R(),Ue("Show labels"),ar(e,"customShowLabels",Qn)]);let s=[t];return r&&s.push(ed()),n&&s.push(td()),s}function Qn(){pr(),z().editCanvas.redraw()}function ed(){let t=R({className:"panel__card guides-card__system",innerHTML:"<h3>Key metrics guides</h3>"});const e=xe().settings.font,r=z().selectedItem.advanceWidth;return ne(t,[Nn("ascent","Ascent",e.ascent,_0),Nn("capHeight","Cap height",e.capHeight,V0),Nn("xHeight","X height",e.xHeight,V0),Nn("baseline","Baseline","0",ga),Nn("descent","Descent",e.descent,_0),Nn("leftSide","Left side","0",ga),Nn("rightSide","Right side",r,ga)]),t}function Nn(t,e,r="0000",n){const a=z().systemGuides,o=ar(a,t,E=>{const T=z();let d=T.project.settings.app.guides.systemGuides;E?d.includes(t)||d.push(t):d.includes(t)&&(d=d.filter(g=>g!==t)),T.editCanvas.redraw()});o.setAttribute("title","Show / hide guide"),o.setAttribute("style",`accent-color: ${n};`);let s=R({className:"guide-system-angle",innerHTML:pn({name:"command_horizontalBar",color:n})});s.setAttribute("title","Horizontal guideline"),(t==="leftSide"||t==="rightSide")&&(s.innerHTML=pn({name:"command_verticalBar",color:n}),s.setAttribute("title","Vertical guideline"));const x=R({className:"guide-system-value",content:r});return x.setAttribute("title",`Guide line position
These are based on this font's key metrics,
which you can edit on the Font Settings page.`),[o,Ue(e),s,x]}function td(){let t=R({className:"panel__card guides-card__custom",innerHTML:"<h3>Custom guides</h3>"});const e=xe().settings.app.guides.custom;e.length&&(e.forEach((n,a)=>{ne(t,rd(n,a))}),t.appendChild(Wr()));const r=R({tag:"fancy-button",attributes:{secondary:""},innerHTML:"Add a custom guide"});return r.addEventListener("click",()=>{xe().settings.app.guides.custom.push(new go({visible:!0,color:Z1()})),Qn()}),t.appendChild(r),t}function rd(t,e){const r=ar(t,"visible",()=>{z().editCanvas.redraw()});r.setAttribute("style",`accent-color: ${t.color}`),r.setAttribute("title","Show / hide guide");const n=bt(t,"name","editCanvasView","input"),a=ll({iconName:"delete",title:"Delete guide"});a.setAttribute("class","guide-delete-button"),a.addEventListener("click",()=>{xe().settings.app.guides.custom.splice(e,1),Qn()});const o=R({tag:"input",className:"guide-color-button",title:"Change guide color",attributes:{type:"color",style:`background-color: ${t.color};`,value:W0(t.color)}});o.addEventListener("input",E=>{let T=Ya(E.target.value),d=`rgb(${T.r},${T.g},${T.b})`;o.setAttribute("value",W0(d)),o.style.backgroundColor=d,r.style.accentColor=d,s.querySelector("g").setAttribute("fill",d);const g=xe().settings.app.guides.custom[e];g.color=d,z().editCanvas.redraw()});const s=R({tag:"button",title:"Toggle vertical / horizontal",className:"guide-angle-button",innerHTML:pn({name:"command_verticalBar",color:t.color})});t.angle===90&&(s.innerHTML=pn({name:"command_horizontalBar",color:t.color})),s.addEventListener("click",()=>{const E=xe().settings.app.guides.custom[e];E.angle===90?(E.angle=0,E.name=E.name.replace("Horizontal","Vertical")):(E.angle=90,E.name=E.name.replace("Vertical","Horizontal")),Qn()});const x=bt(t,"location","editCanvasView","input-number");return x.setAttribute("title","Guide line position"),[r,n,a,o,s,x]}function nd(){const t=z();let e=R({className:"panel__card history-list"}),r=t.history.length,n=R({tag:"button",className:r>0?"button__call-to-action number":"number",innerHTML:`undo ${r}`,style:"max-width: 30%; grid-column: 1 / -1;"});e.appendChild(n),r>0?n.addEventListener("click",()=>{t.history.restoreState()}):(n.setAttribute("disabled",""),e.appendChild(R({tag:"h3",innerHTML:t.project.getItemName(t.selectedItemID,!0)||""})));let a="initial";return t.history.queue.forEach(o=>{if(o.title!=="_whole_project_change_post_state_"){o.itemID&&o.itemID!==a&&(e.appendChild(R({tag:"h3",innerHTML:t.project.getItemName(o.itemID,!0)||""})),a=o.itemID);let s=o.title;o.wholeProjectSave&&(s=`<strong>${o.title}</strong>`),e.appendChild(R({className:"history-list__title",innerHTML:s})),e.appendChild(R({className:"history-list__date number",innerHTML:new Date(o.timeStamp).toLocaleTimeString(),title:new Date(o.timeStamp).toLocaleString()}))}}),e.appendChild(R({className:"history-list__title history-list__initial-entry",innerHTML:"Initial state"})),e.appendChild(R({className:"history-list__date number history-list__initial-entry",innerHTML:new Date(t.history.initialTimeStamp).toLocaleTimeString()})),e}const xl={isCtrlDown:!1,isSpaceDown:!1,isShiftDown:!1,isAltDown:!1};function s1(t){const e=o0(t);El(e,"down")}function l1(t){let e=o0(t);El(e,"up")}function El(t,e){const r=xl;e==="down"&&(t==="Control"&&(r.isCtrlDown=!0),t==="Space"&&(r.isSpaceDown=!0),t==="Shift"&&(r.isShiftDown=!0),t==="Alt"&&(r.isAltDown=!0)),e==="up"&&(t==="Control"&&(r.isCtrlDown=!1),t==="Space"&&(r.isSpaceDown=!1),t==="Shift"&&(r.isShiftDown=!1),t==="Alt"&&(r.isAltDown=!1))}function ad(){var o;let t=R({className:"panel__card full-width item-links__rows-area"});const e=z(),r=xe();let a=e.selectedItem.shapes;if((o=ue==null?void 0:ue.newBasicPath)!=null&&o.objType){let s=ue.newBasicPath,x=R();x.setAttribute("class","item-link__row layer-panel__new-path"),x.classList.add("layer-panel__selected"),x.appendChild(R({className:"item-link__thumbnail",innerHTML:r.makeItemThumbnail(s)})),x.appendChild(R({className:"item-link__title",innerHTML:s.name})),t.appendChild(x)}if(a.length>0)for(let s=a.length-1;s>=0;s--){let x=a[s],E=R({attributes:{"target-path-index":s}});x.objType==="ComponentInstance"?E.setAttribute("class","item-link__row layer-panel__component-row"):E.setAttribute("class","item-link__row layer-panel__path-row"),e.multiSelect.shapes.isSelected(x)&&E.classList.add("layer-panel__selected"),e.subscribe({topic:"whichShapeIsSelected",subscriberID:`layersPanel.item-link-row-${s}`,callback:()=>{let g=e.multiSelect.shapes.isSelected(x);E.classList.toggle("layer-panel__selected",g)}}),E.addEventListener("click",()=>{xl.isCtrlDown?e.multiSelect.shapes.toggle(x):e.multiSelect.shapes.select(x),e.publish("whichShapeIsSelected",x)});const T=R({className:"item-link__thumbnail",attributes:{"target-path-index":s},innerHTML:r.makeItemThumbnail(x)});E.appendChild(T),E.appendChild(R({className:"item-link__title",innerHTML:`${x.name}`}));let d="Path";x.link&&(d=`Component instance&emsp;|&emsp;${r.getItem(x.link).name}`),E.appendChild(R({className:"item-link__subtitle",innerHTML:d})),t.appendChild(E)}else t.appendChild(R({content:'No paths exist yet.  You can create one with the New Path tools on the canvas, or by pressing "add new path" below.'}));return e.subscribe({topic:["currentPath","currentItem"],subscriberID:"layersPanel",callback:()=>{const s=z(),x=xe();document.querySelectorAll(".item-link__thumbnail").forEach(T=>{const d=T.getAttribute("target-path-index");T.innerHTML=x.makeItemThumbnail(s.selectedItem.shapes[d])})}}),[t,id()]}function id(){const t=z();let e=R({className:"panel__card full-width",content:"<h3>Actions</h3>"}),r=R({tag:"div",className:"panel__actions-area"});er(r,ir("addShapeActions"));let n=t.multiSelect.shapes.members;return t.selectedItem.shapes.length>1&&n.length===1&&er(r,ir("layerActions")),ne(e,r),e}function Qa(){const t=z();let e=R(),r=t.nav.panel;return r!=="Layers"&&(document.removeEventListener("keydown",s1,!1),document.removeEventListener("keyup",l1,!1)),t.nav.page==="Components"&&Ut(t.project.components)<=0||t.nav.page==="Ligatures"&&Ut(t.project.ligatures)<=0||t.nav.page==="Kerning"&&Ut(t.project.kerning)<=0||(r==="Attributes"?(t.unsubscribe({idToRemove:"layersPanel"}),t.unsubscribe({idToRemove:"historyPanel"}),t.unsubscribe({idToRemove:"guidesPanel"}),t.unsubscribe({idToRemove:"contextCharactersPanel"}),t.nav.page==="Kerning"?ne(e,qI()):ne(e,PI())):r==="Layers"?(t.unsubscribe({idToRemove:"attributesPanel"}),t.unsubscribe({idToRemove:"historyPanel"}),t.unsubscribe({idToRemove:"guidesPanel"}),t.unsubscribe({idToRemove:"contextCharactersPanel"}),ne(e,ad()),document.addEventListener("keydown",s1,!1),document.addEventListener("keyup",l1,!1)):r==="Context characters"?(t.unsubscribe({idToRemove:"attributesPanel"}),t.unsubscribe({idToRemove:"layersPanel"}),t.unsubscribe({idToRemove:"historyPanel"}),t.unsubscribe({idToRemove:"guidesPanel"}),ne(e,QI())):r==="History"?(t.unsubscribe({idToRemove:"attributesPanel"}),t.unsubscribe({idToRemove:"layersPanel"}),t.unsubscribe({idToRemove:"guidesPanel"}),t.unsubscribe({idToRemove:"contextCharactersPanel"}),ne(e,nd())):r==="Guides"&&(t.unsubscribe({idToRemove:"attributesPanel"}),t.unsubscribe({idToRemove:"layersPanel"}),t.unsubscribe({idToRemove:"historyPanel"}),t.unsubscribe({idToRemove:"contextCharactersPanel"}),ne(e,$I()))),e}function pr(){let t=document.querySelector("#editor-page__panel");if(t){let e=Qa();t.innerHTML="",t.appendChild(e)}}function od(){const t=z(),e=t.selectedLigatureID,a=R({tag:"div",id:"app__page",innerHTML:`
		<div class="editor__page">
			<div class="editor-page__left-area">
				<div class="editor-page__nav-area">
					${_t({level:"l1",superTitle:"PAGE",title:"Ligatures"})}
				</div>
				<div id="editor-page__panel"></div>
			</div>
			${e?`
		<div class="editor-page__tools-area"></div>
		<div class="editor-page__edit-canvas-wrapper"></div>
		<div class="editor-page__zoom-area"></div>
	`:'<div class="editor-page__edit-canvas-wrapper" style="grid-column: span 2; overflow-y: scroll;"></div>'}
		</div>
	`});t.showPageTransitions&&a.classList.add("app__page-animation");let o=a.querySelector("#nav-button-l1");o.addEventListener("click",function(){Jt(o)});const s=a.querySelector(".editor-page__nav-area"),x=a.querySelector(".editor-page__edit-canvas-wrapper");if(!e)return ne(x,Ad()),s.style.display="block",o.style.width="100%",o.style.borderRadius="4px",a;const E=t.selectedLigature,T=_t({level:"l2",superTitle:"EDITING",title:E.name}),d=_t({level:"l3",superTitle:"PANEL",title:t.nav.panel});s.appendChild(se(T)),s.appendChild(se(d));const g=R({tag:"edit-canvas",id:"editor-page__edit-canvas",attributes:{"editing-item-id":t.selectedLigatureID}});x.appendChild(g);let y=a.querySelector("#nav-button-l2");y.addEventListener("click",function(){Jt(y)}),t.subscribe({topic:"whichLigatureIsSelected",subscriberID:"nav.ligatureChooserButton",callback:()=>{var q;t.selectedLigature&&(y.innerHTML=Aa((q=t.selectedLigature)==null?void 0:q.name,"EDITING"))}});let C=a.querySelector("#nav-button-l3");C.addEventListener("click",function(){Jt(C)});const k=a.querySelector("#editor-page__panel");k.appendChild(Qa()),k.addEventListener("scroll",kr),t.subscribe({topic:["whichLigatureIsSelected","whichShapeIsSelected"],subscriberID:"nav.panelChooserButton",callback:()=>{pr()}}),t.selectedTool==="kern"&&(t.selectedTool="resize");let Y=a.querySelector(".editor-page__tools-area");Y.innerHTML="";let _=Qo();_&&ne(Y,_);let V=a.querySelector(".editor-page__zoom-area");V.innerHTML="";let ee=i0();return ee&&ne(V,ee),t.subscribe({topic:"whichLigatureIsSelected",subscriberID:"editCanvas.selectedLigature",callback:q=>{vn(),a.querySelector("#editor-page__edit-canvas").setAttribute("editing-item-id",q)}}),t.subscribe({topic:"whichShapeIsSelected",subscriberID:"editCanvas.selectedPath",callback:()=>{vn(),t.editCanvas.redraw()}}),t.subscribe({topic:"whichPathPointIsSelected",subscriberID:"editCanvas.selectedPathPoint",callback:()=>{t.editCanvas.redraw()}}),a}function Ad(){let t="";Ll.forEach(a=>{t+=`
			<span class="first-run__example-wrapper">
					<pre>${a.display}</pre>
					<span> ➞ </span>
					<pre>&#${parseInt(a.point)};</pre>
			</span>
		`});const e=R({className:"editor-page__first-run",innerHTML:`
			<h1>There are no ligatures in your project</h1>
			<p>
				Ligatures are a feature of fonts where a specified sequence of characters
				is recognized and replaced with a single new character that you design.
				In Latin, there are some common ligatures:
				<div class="first-run__examples-table">
				${t}
				</div>
			</p>
			<p>
				These are just some examples. <strong>Ligatures can have any sequence of two
				or more characters.</strong> In a text editing program that has ligatures enabled,
				this sequence of characters is recognized, then replaced with the custom ligature
				character that you design.
			</p>
		`}),r=R({tag:"fancy-button",innerHTML:"Create a new ligature",onClick:cl}),n=R({tag:"fancy-button",innerHTML:"Add the common Latin ligatures to your project",attributes:{secondary:""},onClick:sd});return e.appendChild(r),e.appendChild(n),e}const Ll=[{chars:"ae",display:"ae",point:"0xE6"},{chars:"AE",display:"AE",point:"0xC6"},{chars:"ff",display:"f‌f",point:"0xFB00"},{chars:"fi",display:"f‌i",point:"0xFB01"},{chars:"fl",display:"f‌l",point:"0xFB02"},{chars:"oe",display:"oe",point:"0x153"},{chars:"OE",display:"OE",point:"0x152"},{chars:"st",display:"st",point:"0xFB06"},{chars:"ffi",display:"f‌f‌i",point:"0xFB03"},{chars:"ffl",display:"f‌f‌l",point:"0xFB04"}];function sd(){Ll.forEach(e=>hl(e.chars));const t=z();t.nav.page="Ligatures",t.navigate(),t.history.addWholeProjectChangePostState()}function hl(t){if(t.length<2)return"Ligature sequences need to be two or more characters.";let e="";const r=Xi(t);let n=[];if(r.startsWith("U+")?(n=r.split("U+"),n=n.slice(1),e="U+"):r.startsWith("0x")&&(n=r.split("0x"),n=n.slice(1),e="0x"),e&&n.length>1){t="";for(let s=0;s<n.length;s++){let x=n[s],E=ji(x);if(E)t+=Rr(`0x${E}`);else return`Invalid Hex or Unicode format: ${e}${x}.`}}const a=$a(t),o=xe();return o.ligatures[a]?"Ligature already exists":a===!1?"Characters could not be read for the ligature sequence":(o.addItemByType(new it({id:a,parent:o,objType:"Ligature",gsub:t.split("").map(s=>s.codePointAt(0))}),"Ligature",a),o.ligatures[a])}function $a(t=""){if(t==="")return!1;let e="liga";return t.split("").forEach(n=>{let a=n.charCodeAt(0);a>=65&&a<=90||a>=97&&a<=122?e+="-"+n:e+="-"+Yr(n)}),e}function cl(){const t=R({innerHTML:`
			<h2>Create a new ligature</h2>
			Create a new ligature by specifying two or more individual characters:
			<br><br>
			<input id="ligatures__new-ligature-input" type="text"
				autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
			/>
			<info-bubble style="display: inline-block; margin-left: 10px;">
				Ligature characters can be specified in three different formats:
				<ul>
					<li>By just typing characters: <code>ff</code></li>
					<li>Specifying Unicode code points: <code>U+66U+66</code></li>
					<li>Specifying Hexadecimal format: <code>0x660x66</code></li>
				</ul>
				<br><br>
				Hexadecimal, Unicode, and regular character formats cannot be mixed - choose one type!
				<br><br>
				<b>Warning!</b><br>
				Specifying ligature characters beyond the Basic Multilingual Plane
				(above Unicode <code>U+FFFF</code>) will cause errors!
			</info-bubble>
			<br><br>
			<fancy-button disabled id="ligatures__add-new-ligature-button">Add new ligature to project</fancy-button>
		`}),e=t.querySelector("#ligatures__add-new-ligature-button"),r=t.querySelector("#ligatures__new-ligature-input");r.addEventListener("keyup",()=>{r.value.length<2?e.setAttribute("disabled",""):e.removeAttribute("disabled")}),e.addEventListener("click",()=>{const n=hl(r.value);if(typeof n=="string")xr(n);else{const a=z();a.selectedLigatureID=n.id,a.navigate(),a.history.addWholeProjectChangePostState(),n.hasChangedThisSession=!1,n.wasCreatedThisSession=!0,_e()}}),Tr(t,500)}let Ir=[],zn=[];async function ld(t,e=!1){const r=e?new s0:oi(),n=r.project;await Wo("Reading font data..."),Ir=Ri(t,"glyph");const a={},o={};let s=0;for(await da("character",1);s<Ir.length;)await x(Ir[s]);async function x(Y){if(Y&&Y.attributes){const _=Y.attributes,V=_["glyph-name"];let ee=Ln(_.unicode);if((_.unicode===" "||V.toLowerCase()==="space")&&(ee=["0x20"]),!_.unicode&&V.startsWith("uni")){const q=tr(`0x${V.substring(3)}`);q&&(ee=[q],n.settings.app.showNonCharPoints=!0)}if(ee[0]==="0x0")Ir.splice(s,1);else{const q=`<svg><glyph d="${Ir[s].attributes.d}"/></svg>`,he=Ba(q,!1),ce=parseInt(_["horiz-adv-x"]);if(he.advanceWidth=ce,ee.length===1){await da("character",s);const oe=ee[0];n.incrementRangeCountFor(oe),he.id=`glyph-${oe}`,a[`glyph-${oe}`]=he,la(oe)==="[name not found]"&&(n.settings.app.showNonCharPoints=!0)}else{await da("ligature",s);const oe=ee.join(""),Te=Rr(oe);if(Te){const Ie=$a(Te);Ie&&(he.id=Ie,he.gsub=Y1(oe),o[Ie]=he)}}}s++}else Ir.splice(s,1)}let E=Ri(t,"missing-glyph");if(E.length){const Y=E[0].attributes,_=`<svg><glyph d="${Y.d}"/></svg>`,V=Ba(_,!1),ee=parseInt(Y["horiz-adv-x"]);V.advanceWidth=ee,n.incrementRangeCountFor(0),V.id="glyph-0x0",a["glyph-0x0"]=V}zn=Ri(t,"hkern");const T={};let d=0;for(await da("kern pair",1);d<zn.length;)await g(zn[d]);async function g(Y){await da("kern pair",d+Ir.length);let _=[],V=[];if(Y)if(_=x1(Y.attributes.g1,Ir,_),V=x1(Y.attributes.g2,Ir,V),_=E1(Y.attributes.u1,Ir,_),V=E1(Y.attributes.u2,Ir,V),_.length&&V.length){const ee=H1(T,"kern-"),q=Y.attributes.k||0;T[ee]=new en({leftGroup:_,rightGroup:V,value:q}),T[ee].id=ee,d++}else zn.splice(d,1);else zn.splice(d,1)}n.glyphs=a,n.ligatures=o,n.kerning=T;const y=zo(t,"font-face").attributes,C=n.settings.font,k=y["font-family"]||"My Font";if(C.family=k,C.style=y["font-style"]||"Regular",C.panose=y["panose-1"]||"0 0 0 0 0 0 0 0 0 0",C.upm=1*y["units-per-em"]||C.upm,C.ascent=1*y.ascent||C.ascent,C.capHeight=1*y["cap-height"]||C.capHeight,C.xHeight=1*y["x-height"]||C.xHeight,C.descent=1*y.descent||C.descent,C.variant=y["font-variant"]||"normal",C.weight=1*y["font-weight"]||400,C.stretch=y["font-stretch"]||"normal",C.underlinePosition=1*y["underline-position"]||-100,C.underlineThickness=1*y["underline-thickness"]||20,C.strikethroughPosition=1*y["strikethrough-position"]||C.xHeight/2,C.strikethroughThickness=1*y["strikethrough-thickness"]||20,C.overlinePosition=1*y["overline-position"]||C.ascent+50,C.overlineThickness=1*y["overline-thickness"]||20,C.overshoot=C.upm>2e3?30:20,n.settings.project.name=k,e)return r.project.save();E0(r),r.project.resetSessionStateForAllItems(),r.nav.page="Overview",r.navigate()}async function da(t,e){const r=Ir.length+zn.length;await Wo(`
			Importing ${t}:
			<span class="progress-indicator__counter">${e}</span>
			 of
			<span class="progress-indicator__counter">${r}</span>
		`)}function Ri(t,e){typeof e=="string"&&(e=[e]);let r=[];if(t.content)for(let n=0;n<t.content.length;n++)r=r.concat(Ri(t.content[n],e));else e.indexOf(t.name)>-1&&(r=[t]);return r}function zo(t,e){if(e===t.name)return t;if(t.content)for(let r=0;r<t.content.length;r++){const n=zo(t.content[r],e);if(n)return n}else return!1}function x1(t,e,r,n){n=n||65535;let a;if(t){const o=t.split(",");for(let s=0;s<o.length;s++)for(let x=0;x<e.length;x++)e[x].attributes.unicode&&o[s]===e[x].attributes["glyph-name"]&&(a=Ln(e[x].attributes.unicode),1*a[0]<n&&(r=r.concat(a)))}return r}function E1(t,e,r,n){n=n||65535;let a;if(t){const o=t.split(",");for(let s=0;s<o.length;s++)for(let x=0;x<e.length;x++)e[x].attributes.unicode&&o[s]===e[x].attributes.unicode&&(a=Ln(e[x].attributes.unicode),1*a[0]<n&&(r=r.concat(a)))}return r}const gt={fileName:"",fileSuffix:"",fileType:"",fileHandle:!1,errorMessage:"",content:!1};let ei;async function xd(t,e){ei=e;let r;window.showOpenFilePicker&&window.showSaveFilePicker?(gt.fileHandle=t,r=await t.getFile()):r=t,gt.fileName=r.name;let n=r.name.split(".");n=n[n.length-1].toLowerCase(),gt.fileSuffix=n;const a=new FileReader;if(a.onerror=()=>{dr("A file reader error occurred. [FR0]")},gt.fileSuffix==="otf"||gt.fileSuffix==="ttf"||gt.fileSuffix==="woff")gt.fileType="font",a.onload=Ed,a.readAsArrayBuffer(r);else if(gt.fileSuffix==="svg")gt.fileType="svg",a.onload=Ld,a.readAsText(r);else if(gt.fileSuffix==="txt")gt.fileType="project",a.onload=L1,a.readAsText(r);else if(gt.fileSuffix==="gs2")gt.fileType="project",a.onload=L1,a.readAsText(r);else return dr(`
			Unrecognized file type (.${gt.fileSuffix}).
			Try loading a Glyphr Studio Project file, or a font file.
			[FR1]
		`)}function Ed(){var r;const t=this.result;let e=!1;try{e=Cn.parse(t)}catch(n){return dr(`
			Font file could not be read. [FF0]
			<hr>
			${n.message}
		`)}if(e)if((r=e==null?void 0:e.glyphs)!=null&&r.length)gt.content=e;else return dr("Font file does not have any glyph data. [FF1]");ei(gt)}function Ld(){let t=this.result,e;try{t=t.replace(/&#x/g,"0x"),e=CI(t)}catch(n){return dr(`
			SVG file could not be read. [SVG0]
			<hr>
			${n.message}
		`)}let r=zo(e,"font");if(r)gt.content=r;else return dr(`
			The SVG file you tried to load was not a SVG Font file.
			See Glyphr Studio help for more information. [SVG1]`);ei(gt)}function L1(){var a,o,s;const t=this.result;let e;try{e=JSON.parse(t)}catch(x){return dr(`
			The file could not be read. Expecting a Glyphr Studio Project file
			in JSON format. [PF0]
			<hr>
			${x.message}
		`)}if(!e.settings&&!e.projectsettings)return dr(`
		The provided text file is missing project settings.
		It may not be a Glyphr Studio Project file. [PF1]
		`);if(!((o=(a=e==null?void 0:e.settings)==null?void 0:a.project)!=null&&o.latestVersion)&&!((s=e==null?void 0:e.projectsettings)!=null&&s.versionnum))return dr(`
			The provided text file has no version information associated with it.
			It may not be a Glyphr Studio Project file. [PF2]
		`);let r=Tl(e);if(!r)return dr(`
			The version information could not be read for the provided project file. [PF3]
		`);let n=Yi(rt().version);if(h1(n,r))return dr(`
			This Glyphr Studio project file was created with a future version of
			Glyphr Studio (0_o) As with most software, Glyphr Studio is not forwards-compatible. [PF4]
		`);if(h1(r,[1,13,2]))return dr(`
			Only Glyphr Studio Project files with version 1.13.2 and above can be
			imported into Glyphr Studio v2. For versions 1.13.1 and below, open and re-save
			the project file with Glyphr Studio v1 App (which will update it). [PF5]
		`);gt.content=e,ei(gt)}function Tl(t){var r,n,a;let e=Yi((r=t==null?void 0:t.projectsettings)==null?void 0:r.versionnum);return e||(e=Yi((a=(n=t==null?void 0:t.settings)==null?void 0:n.project)==null?void 0:a.latestVersion)),e}function dr(t){return gt.errorMessage=t,console.warn(t.replace(/\s\s+/g," ")),ei(gt),!1}function h1(t,e){Array.isArray(e)&&(e={major:e[0],minor:e[1],patch:e[2]});let r="";return t.major<e.major?r="major":t.major===e.major&&(t.minor<e.minor?r="minor":t.minor===e.minor&&t.patch<e.patch&&(r="patch")),r}function Yi(t){if(!t)return!1;const e=t.split("-"),r=e[0].split(".");if(r.length!==3)return!1;const n={major:parseInt(r[0]),minor:parseInt(r[1]),patch:parseInt(r[2])};return e[1]&&(n.preRelease=e[1]||!1),n}function hd(t){const e=(t==null?void 0:t.major)||"0",r=(t==null?void 0:t.minor)||"0",n=(t==null?void 0:t.patch)||"0",a=t==null?void 0:t.preRelease;let o=`${e}.${r}.${n}`;return a&&(o=`${o}-${a}`),o}function Ca(t){var o,s,x;typeof t=="string"&&(t=JSON.parse(t)),t||(t=new Un({}));const e=Tl(t);e.major===1&&(t=cd(t));const r=rt();t.settings.project.latestVersion=r.version,t.settings.project.initialVersion||(t.settings.project.initialVersion=hd(e));const n=new Un(t),a=(x=(s=(o=n==null?void 0:n.settings)==null?void 0:o.app)==null?void 0:s.guides)==null?void 0:x.systemGuides;if(a){const E=z();E.systemGuides={ascent:a.includes("ascent"),capHeight:a.includes("capHeight"),xHeight:a.includes("xHeight"),baseline:a.includes("baseline"),descent:a.includes("descent"),leftSide:a.includes("leftSide"),rightSide:a.includes("rightSide")}}return n}function cd(t){const e=new Un({}),r=t.projectsettings.defaultlsb,n=t.projectsettings.defaultrsb;Object.keys(t.glyphs).forEach(k=>{const Y=Xn(k);e.glyphs[Y]=B0(t.glyphs[k],Y,r,n)}),Object.keys(t.ligatures).forEach(k=>{const Y=Xn(k),_=Rr(k);if(_!==!1){let V=_.split("").map(Yr);e.ligatures[Y]=B0(t.ligatures[k],Y,r,n),e.ligatures[Y].objType="Ligature",e.ligatures[Y].gsub=V}}),Object.keys(t.components).forEach(k=>{const Y=Xn(k);e.components[Y]=B0(t.components[k],Y,r,n),e.components[Y].objType="Component",e.components[Y].advanceWidth=!1}),Object.keys(t.kerning).forEach(k=>{const Y=Xn(k),_=t.kerning[k];e.kerning[Y]=new en({value:_.value,leftGroup:_.leftgroup.map(V=>tr(V)),rightGroup:_.rightgroup.map(V=>tr(V))})});const a=e.settings.app,o=e.settings.project.characterRanges,s=e.settings.app.guides,x=e.settings.font,E=t.projectsettings,T=t.projectsettings.glyphrange,d=t.projectsettings.guides,g=t.projectsettings.colors,y=t.metadata;e.settings.project.name=E.name||"My Font";const C={basicLatin:{begin:32,end:127,name:"Basic Latin"},latinSupplementControls:{begin:128,end:159,name:"Latin Supplement Controls"},latinSupplement:{begin:160,end:255,name:"Latin Supplement"},latinExtendedA:{begin:256,end:383,name:"Latin Extended A"},latinExtendedB:{begin:384,end:591,name:"Latin Extended B"}};return T.basiclatin&&o.push(C.basicLatin),T.latinsupplement&&o.push(C.latinSupplement),T.latinextendeda&&o.push(C.latinExtendedA),T.latinextendedb&&o.push(C.latinExtendedB),T.custom.length&&T.custom.forEach(k=>o.push(k)),a.stopPageNavigation=E.stoppagenavigation||!0,a.formatSaveFile=E.formatsavefile||!0,a.contextCharacters.showGuides=E.showcontextglyphguides||!0,a.contextCharacters.transparency=g.contextglyphtransparency||90,s.systemTransparency=g.systemguidetransparency||70,s.customTransparency=g.systemguidetransparency||70,Object.keys(d).forEach(k=>{let Y=d[k];Y.editable&&s.custom.push(new go({angle:Y.type==="horizontal"?90:0,location:Y.location,name:Y.name,color:Y.color,visible:Y.visible}))}),x.family=y.font_family||"My Font",x.style=y.font_style||"normal",x.panose=y.panose_1||"2 0 0 0 0 0 0 0 0 0",x.upm=E.upm||1e3,x.ascent=E.ascent||700,x.descent=E.descent||-300,x.capHeight=E.capHeight||675,x.xHeight=E.xHeight||400,x.lineGap=E.lineGap||250,x.italicAngle=E.italicAngle||0,x.overshoot=E.overshoot||10,x.designer=y.designer||"",x.designerURL=y.designerURL||"",x.manufacturer=y.manufacturer||"",x.manufacturerURL=y.manufacturerURL||"",x.license=y.license||"",x.licenseURL=y.licenseURL||"",x.version=y.version||"",x.description=y.description||"",x.copyright=y.copyright||"",x.trademark=y.trademark||"",x.variant=y.font_variant||"normal",x.weight=y.font_weight||400,x.stretch=y.font_stretch||"normal",x.stemv=y.stemv||0,x.stemh=y.stemh||0,x.slope=y.slope||0,x.underlinePosition=y.underline_position||-50,x.underlineThickness=y.underline_thickness||10,x.strikethroughPosition=y.strikethrough_position||300,x.strikethrough_thickness=y.strikethrough_thickness||10,x.overlinePosition=y.overline_position||750,x.overlineThickness=y.overline_thickness||10,e}function B0(t,e,r=0,n=0){const a=new it({id:e,parent:xe(),advanceWidth:t.glyphwidth,ratioLock:t.ratiolock,usedIn:t.usedin.map(Xn),contextCharacters:t.contextglyphs});let o;if(t.shapes.forEach(s=>{s.path?(o=Td(s,a),a.addOneShape(o)):(o=dd(s),a.addOneShape(o))}),t.isautowide){const s=t.leftsidebearing||r,x=t.rightsidebearing||n;a.leftSideBearing=s,a.rightSideBearing=x}return a}function Td(t,e){const r=new Ar;return r.parent=e,r.name=t.name,r.xLock=t.xlock,r.yLock=t.ylock,r.wLock=t.wlock,r.hLock=t.hlock,r.ratioLock=t.ratiolock,t.path&&t.path.pathpoints.forEach(n=>{r.pathPoints.push(Id(n,r))}),r}function Id(t,e){const r=new Kt;return r.parent=e,r.p=new we({coord:t.P,type:"p",parent:r}),r.h1=new we({coord:t.H1,type:"h1",use:t.useh1,parent:r}),r.h2=new we({coord:t.H2,type:"h2",use:t.useh2,parent:r}),r}function dd(t){const e=new Qr;return e.link=Xn(t.link),e.translateX=t.translatex,e.translateY=t.translatey,e.resizeWidth=t.scalew,e.resizeHeight=t.scaleh,e.isFlippedNS=t.flipns,e.isFlippedEW=t.flipew,e.reverseWinding=t.reversewinding,e.rotation=t.rotation,e.rotateFirst=t.rotatefirst,e}function Xn(t){let e="";t.startsWith("com")&&(e=`comp-${t.split("com")[1]}`),t.startsWith("kern")&&(e=`kern-${t.split("kern")[1]}`),t.startsWith("id")&&(e=`kern-${t.split("id")[1]}`);const r=Rr(t);return r!==!1&&r.length>1&&(e=$a(r)||""),r!==!1&&r.length===1&&(e=`glyph-${tr(t)}`),e}const ud=`{\r
  "settings": {\r
    "project": {\r
      "name": "Boolean Test Project",\r
      "latestVersion": "2.1.4",\r
      "initialVersion": "2.1.4",\r
      "id": "g2_BOOLTEST",\r
      "characterRanges": [\r
        {\r
          "name": "Test Range",\r
          "begin": "0x41",\r
          "end": "0x7A"\r
        },\r
        {\r
          "name": "Basic Latin",\r
          "begin": "0x20",\r
          "end": "0x7F"\r
        }\r
      ]\r
    },\r
    "app": {\r
      "stopPageNavigation": true,\r
      "formatSaveFile": true,\r
      "saveLivePreviews": true,\r
      "autoSave": true,\r
      "savePreferences": false,\r
      "unlinkComponentInstances": true,\r
      "showNonCharPoints": false,\r
      "itemChooserPageSize": 256,\r
      "previewText": false,\r
      "exportLigatures": true,\r
      "exportKerning": true,\r
      "moveShapesOnSVGDragDrop": false,\r
      "guides": {\r
        "drawGuidesOnTop": false,\r
        "systemShowGuides": true,\r
        "systemShowLabels": false,\r
        "systemTransparency": 70,\r
        "systemGuides": [\r
          "baseline",\r
          "leftSide",\r
          "rightSide"\r
        ],\r
        "customShowGuides": true,\r
        "customShowLabels": false,\r
        "customTransparency": 70,\r
        "custom": []\r
      },\r
      "contextCharacters": {\r
        "showCharacters": false,\r
        "characterTransparency": 20,\r
        "showGuides": true,\r
        "guidesTransparency": 70\r
      },\r
      "livePreviews": [\r
        {\r
          "fontSize": 118,\r
          "text": "the quick brown fox jumps over a lazy dog"\r
        }\r
      ]\r
    },\r
    "font": {\r
      "family": "Boolean Test Project",\r
      "style": "Regular",\r
      "version": "1.0",\r
      "description": "",\r
      "panose": "0 0 0 0 0 0 0 0 0 0",\r
      "upm": 2048,\r
      "ascent": 1550,\r
      "descent": -440,\r
      "capHeight": 1480,\r
      "xHeight": 1100,\r
      "overshoot": 30,\r
      "lineGap": 58,\r
      "italicAngle": 0,\r
      "designer": "",\r
      "designerURL": "",\r
      "manufacturer": "",\r
      "manufacturerURL": "",\r
      "license": "",\r
      "licenseURL": "",\r
      "copyright": "",\r
      "trademark": "",\r
      "variant": "normal",\r
      "weight": 400,\r
      "stretch": "normal",\r
      "stemv": 0,\r
      "stemh": 0,\r
      "slope": 0,\r
      "underlinePosition": -50,\r
      "underlineThickness": 10,\r
      "strikethroughPosition": 300,\r
      "strikethroughThickness": 10,\r
      "overlinePosition": 750,\r
      "overlineThickness": 10\r
    }\r
  },\r
  "glyphs": {\r
    "glyph-0x41": {\r
      "id": "glyph-0x41",\r
      "advanceWidth": 900,\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 600}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 600}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 100}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 100}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 100}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 100}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 300,"y": 800}},\r
              "h1": {"coord": {"x": 267.381974248927,"y": 800}, "use": false},\r
              "h2": {"coord": {"x": 332.618025751073,"y": 800}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 800}},\r
              "h1": {"coord": {"x": 767.3819742489266,"y": 800}, "use": false},\r
              "h2": {"coord": {"x": 832.6180257510724,"y": 800}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 300}},\r
              "h1": {"coord": {"x": 767.3819742489266,"y": 300}, "use": false},\r
              "h2": {"coord": {"x": 832.6180257510724,"y": 300}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 300,"y": 300}},\r
              "h1": {"coord": {"x": 267.381974248927,"y": 300}, "use": false},\r
              "h2": {"coord": {"x": 332.618025751073,"y": 300}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x20": {\r
      "id": "glyph-0x20",\r
      "advanceWidth": 200\r
    },\r
    "glyph-0x42": {\r
      "id": "glyph-0x42",\r
      "advanceWidth": 1300,\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 600}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 600}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 100}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 100}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 100}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 100}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 400,"y": 900}},\r
              "h1": {"coord": {"x": 367.381974248927,"y": 900}, "use": false},\r
              "h2": {"coord": {"x": 432.618025751073,"y": 900}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 900,"y": 900}},\r
              "h1": {"coord": {"x": 867.3819742489271,"y": 900}, "use": false},\r
              "h2": {"coord": {"x": 932.618025751073,"y": 900}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 900,"y": 400}},\r
              "h1": {"coord": {"x": 867.3819742489271,"y": 400}, "use": false},\r
              "h2": {"coord": {"x": 932.618025751073,"y": 400}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 400,"y": 400}},\r
              "h1": {"coord": {"x": 367.381974248927,"y": 400}, "use": false},\r
              "h2": {"coord": {"x": 432.618025751073,"y": 400}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy 2)",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 700,"y": 1200}},\r
              "h1": {"coord": {"x": 667.381974248927,"y": 1200}, "use": false},\r
              "h2": {"coord": {"x": 732.618025751073,"y": 1200}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1200,"y": 1200}},\r
              "h1": {"coord": {"x": 1167.381974248928,"y": 1200}, "use": false},\r
              "h2": {"coord": {"x": 1232.6180257510737,"y": 1200}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1200,"y": 700}},\r
              "h1": {"coord": {"x": 1167.381974248928,"y": 700}, "use": false},\r
              "h2": {"coord": {"x": 1232.6180257510737,"y": 700}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 700,"y": 700}},\r
              "h1": {"coord": {"x": 667.381974248927,"y": 700}, "use": false},\r
              "h2": {"coord": {"x": 732.618025751073,"y": 700}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x43": {\r
      "id": "glyph-0x43",\r
      "advanceWidth": 1050,\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 750}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 750}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 750}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 750}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 750}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 750}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 250}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 250}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 250}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 250}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 250}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 250}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 300,"y": 950}},\r
              "h1": {"coord": {"x": 267.381974248927,"y": 950}, "use": false},\r
              "h2": {"coord": {"x": 332.618025751073,"y": 950}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 950}},\r
              "h1": {"coord": {"x": 767.3819742489266,"y": 950}, "use": false},\r
              "h2": {"coord": {"x": 832.6180257510724,"y": 950}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 450}},\r
              "h1": {"coord": {"x": 767.3819742489266,"y": 450}, "use": false},\r
              "h2": {"coord": {"x": 832.6180257510724,"y": 450}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 300,"y": 450}},\r
              "h1": {"coord": {"x": 267.381974248927,"y": 450}, "use": false},\r
              "h2": {"coord": {"x": 332.618025751073,"y": 450}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy 2)",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 450,"y": 600}},\r
              "h1": {"coord": {"x": 417.381974248927,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 482.6180257510729,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 950,"y": 600}},\r
              "h1": {"coord": {"x": 917.3819742489262,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 982.6180257510722,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 950,"y": 100}},\r
              "h1": {"coord": {"x": 917.3819742489262,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 982.6180257510722,"y": 100}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 450,"y": 100}},\r
              "h1": {"coord": {"x": 417.381974248927,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 482.6180257510729,"y": 100}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x44": {\r
      "id": "glyph-0x44",\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 600}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 600}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 100}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 100}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 100}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 100}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 300,"y": 600}},\r
              "h1": {"coord": {"x": 267.381974248927,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 332.618025751073,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 600}},\r
              "h1": {"coord": {"x": 767.3819742489266,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 832.6180257510724,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 100}},\r
              "h1": {"coord": {"x": 767.3819742489266,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 832.6180257510724,"y": 100}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 300,"y": 100}},\r
              "h1": {"coord": {"x": 267.381974248927,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 332.618025751073,"y": 100}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x45": {\r
      "id": "glyph-0x45",\r
      "shapes": [\r
        {\r
          "name": "Oval 1",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 349.7510373443983,"y": 650}},\r
              "h1": {"coord": {"x": 184.13858921161824,"y": 650}},\r
              "h2": {"coord": {"x": 515.3634854771783,"y": 650}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 650,"y": 350.2746987951807}},\r
              "h1": {"coord": {"x": 650,"y": 515.8192771084338}},\r
              "h2": {"coord": {"x": 650,"y": 184.73012048192766}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 349.7510373443983,"y": 50}},\r
              "h1": {"coord": {"x": 515.8614107883817,"y": 50}},\r
              "h2": {"coord": {"x": 183.6406639004149,"y": 50}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 50,"y": 350.2746987951807}},\r
              "h1": {"coord": {"x": 50,"y": 184.1807228915663}},\r
              "h2": {"coord": {"x": 50,"y": 516.3686746987951}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Oval 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 899.8147208121827,"y": 600}},\r
              "h1": {"coord": {"x": 761.5380710659898,"y": 600}},\r
              "h2": {"coord": {"x": 1038.0913705583757,"y": 600}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 1150,"y": 349.9}},\r
              "h1": {"coord": {"x": 1150,"y": 488}},\r
              "h2": {"coord": {"x": 1150,"y": 211.8}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 899.8147208121827,"y": 100}},\r
              "h1": {"coord": {"x": 1038.46192893401,"y": 100}},\r
              "h2": {"coord": {"x": 761.1675126903554,"y": 100}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 650,"y": 349.9}},\r
              "h1": {"coord": {"x": 650,"y": 212}},\r
              "h2": {"coord": {"x": 650,"y": 487.8}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x46": {\r
      "id": "glyph-0x46",\r
      "advanceWidth": 700,\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 600}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 600}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 100}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 100}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 100}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 100}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 250,"y": 250}},\r
              "h1": {"coord": {"x": 263.04721030042936,"y": 250}, "use": false},\r
              "h2": {"coord": {"x": 236.95278969957073,"y": 250}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 450,"y": 250}},\r
              "h1": {"coord": {"x": 463.0472103004289,"y": 250}, "use": false},\r
              "h2": {"coord": {"x": 436.952343801653,"y": 250}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 450,"y": 450}},\r
              "h1": {"coord": {"x": 463.0472103004289,"y": 450}, "use": false},\r
              "h2": {"coord": {"x": 436.952343801653,"y": 450}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 250,"y": 450}},\r
              "h1": {"coord": {"x": 263.04721030042936,"y": 450}, "use": false},\r
              "h2": {"coord": {"x": 236.95278969957073,"y": 450}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x47": {\r
      "id": "glyph-0x47",\r
      "advanceWidth": 1100,\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 600}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 600}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 100}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 100}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 100}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 100}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 250,"y": 250}},\r
              "h1": {"coord": {"x": 263.04721030042936,"y": 250}, "use": false},\r
              "h2": {"coord": {"x": 236.95278969957073,"y": 250}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 450,"y": 250}},\r
              "h1": {"coord": {"x": 463.0472103004289,"y": 250}, "use": false},\r
              "h2": {"coord": {"x": 436.952343801653,"y": 250}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 450,"y": 450}},\r
              "h1": {"coord": {"x": 463.0472103004289,"y": 450}, "use": false},\r
              "h2": {"coord": {"x": 436.952343801653,"y": 450}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 250,"y": 450}},\r
              "h1": {"coord": {"x": 263.04721030042936,"y": 450}, "use": false},\r
              "h2": {"coord": {"x": 236.95278969957073,"y": 450}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 500,"y": 1000}},\r
              "h1": {"coord": {"x": 467.3820598006646,"y": 1000}, "use": false},\r
              "h2": {"coord": {"x": 532.6179401993357,"y": 1000}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1000,"y": 1000}},\r
              "h1": {"coord": {"x": 967.3820598006632,"y": 1000}, "use": false},\r
              "h2": {"coord": {"x": 1032.6179401993352,"y": 1000}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1000,"y": 500}},\r
              "h1": {"coord": {"x": 967.3820598006632,"y": 500}, "use": false},\r
              "h2": {"coord": {"x": 1032.6179401993352,"y": 500}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 500,"y": 500}},\r
              "h1": {"coord": {"x": 467.3820598006646,"y": 500}, "use": false},\r
              "h2": {"coord": {"x": 532.6179401993357,"y": 500}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy 2)",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 650}},\r
              "h1": {"coord": {"x": 663.0469102990019,"y": 650}, "use": false},\r
              "h2": {"coord": {"x": 636.9527906976746,"y": 650}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 650}},\r
              "h1": {"coord": {"x": 863.0469102990018,"y": 650}, "use": false},\r
              "h2": {"coord": {"x": 836.9521594684384,"y": 650}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 850}},\r
              "h1": {"coord": {"x": 863.0469102990018,"y": 850}, "use": false},\r
              "h2": {"coord": {"x": 836.9521594684384,"y": 850}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 850}},\r
              "h1": {"coord": {"x": 663.0469102990019,"y": 850}, "use": false},\r
              "h2": {"coord": {"x": 636.9527906976746,"y": 850}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x48": {\r
      "id": "glyph-0x48",\r
      "advanceWidth": 950,\r
      "shapes": [\r
        {\r
          "name": "Rectangle 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 600}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 600}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 600}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 600}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 100}},\r
              "h1": {"coord": {"x": 567.381974248927,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 632.6180257510729,"y": 100}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 100}},\r
              "h1": {"coord": {"x": 67.38197424892704,"y": 100}, "use": false},\r
              "h2": {"coord": {"x": 132.61802575107296,"y": 100}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 250,"y": 250}},\r
              "h1": {"coord": {"x": 263.04721030042936,"y": 250}, "use": false},\r
              "h2": {"coord": {"x": 236.95278969957073,"y": 250}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 450,"y": 250}},\r
              "h1": {"coord": {"x": 463.0472103004289,"y": 250}, "use": false},\r
              "h2": {"coord": {"x": 436.952343801653,"y": 250}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 450,"y": 450}},\r
              "h1": {"coord": {"x": 463.0472103004289,"y": 450}, "use": false},\r
              "h2": {"coord": {"x": 436.952343801653,"y": 450}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 250,"y": 450}},\r
              "h1": {"coord": {"x": 263.04721030042936,"y": 450}, "use": false},\r
              "h2": {"coord": {"x": 236.95278969957073,"y": 450}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy)",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 350,"y": 850}},\r
              "h1": {"coord": {"x": 317.3820598006646,"y": 850}, "use": false},\r
              "h2": {"coord": {"x": 382.61794019933575,"y": 850}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 850}},\r
              "h1": {"coord": {"x": 817.3820598006625,"y": 850}, "use": false},\r
              "h2": {"coord": {"x": 882.6179401993343,"y": 850}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 350}},\r
              "h1": {"coord": {"x": 817.3820598006625,"y": 350}, "use": false},\r
              "h2": {"coord": {"x": 882.6179401993343,"y": 350}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 350,"y": 350}},\r
              "h1": {"coord": {"x": 317.3820598006646,"y": 350}, "use": false},\r
              "h2": {"coord": {"x": 382.61794019933575,"y": 350}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 0 (copy 2)",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 500,"y": 500}},\r
              "h1": {"coord": {"x": 513.0469102990012,"y": 500}, "use": false},\r
              "h2": {"coord": {"x": 486.952790697674,"y": 500}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 700,"y": 500}},\r
              "h1": {"coord": {"x": 713.046910299001,"y": 500}, "use": false},\r
              "h2": {"coord": {"x": 686.9521594684377,"y": 500}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 700,"y": 700}},\r
              "h1": {"coord": {"x": 713.046910299001,"y": 700}, "use": false},\r
              "h2": {"coord": {"x": 686.9521594684377,"y": 700}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 500,"y": 700}},\r
              "h1": {"coord": {"x": 513.0469102990012,"y": 700}, "use": false},\r
              "h2": {"coord": {"x": 486.952790697674,"y": 700}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x49": {\r
      "id": "glyph-0x49",\r
      "advanceWidth": 1046.1516604685944,\r
      "shapes": [\r
        {\r
          "name": "Oval 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 349.8147208121827,"y": 600}},\r
              "h1": {"coord": {"x": 211.5380710659898,"y": 600}},\r
              "h2": {"coord": {"x": 488.0913705583756,"y": 600}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 600,"y": 349.9}},\r
              "h1": {"coord": {"x": 600,"y": 488}},\r
              "h2": {"coord": {"x": 600,"y": 211.8}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 349.8147208121827,"y": 100}},\r
              "h1": {"coord": {"x": 488.46192893401013,"y": 100}},\r
              "h2": {"coord": {"x": 211.1675126903553,"y": 100}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 100,"y": 349.9}},\r
              "h1": {"coord": {"x": 100,"y": 212}},\r
              "h2": {"coord": {"x": 100,"y": 487.8}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 492.51162790697674,"y": 651.8272425249173}},\r
              "h1": {"coord": {"x": 196.83056478405263,"y": 226.57807308970018}},\r
              "h2": {"coord": {"x": 788.1926910299009,"y": 1077.0764119601345}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 695.1694352159468,"y": 286.3787375415282}},\r
              "h1": {"coord": {"x": 1230.0531561461796,"y": 312.95681063122925}},\r
              "h2": {"coord": {"x": 160.285714285714,"y": 259.8006644518272}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 721.747508305648,"y": 555.4817275747511}},\r
              "h1": {"coord": {"x": 794.8372093023256,"y": 469.10299003322325}},\r
              "h2": {"coord": {"x": 648.6578073089704,"y": 641.8604651162789}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4A": {\r
      "id": "glyph-0x4A",\r
      "advanceWidth": 1009.8512753082377,\r
      "shapes": [\r
        {\r
          "name": "Oval 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 480.29703204063384,"y": 600}},\r
              "h1": {"coord": {"x": 342.02038229444094,"y": 600}},\r
              "h2": {"coord": {"x": 618.5736817868267,"y": 600}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 730.4823112284512,"y": 349.9}},\r
              "h1": {"coord": {"x": 730.4823112284512,"y": 488}},\r
              "h2": {"coord": {"x": 730.4823112284512,"y": 211.8}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 480.29703204063384,"y": 100}},\r
              "h1": {"coord": {"x": 618.9442401624613,"y": 100}},\r
              "h2": {"coord": {"x": 341.6498239188064,"y": 100}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 230.48231122845112,"y": 349.9}},\r
              "h1": {"coord": {"x": 230.48231122845112,"y": 212}},\r
              "h2": {"coord": {"x": 230.48231122845112,"y": 487.8}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 249.00961223921098,"y": 456.257362994337}},\r
              "h1": {"coord": {"x": -376.5604085008617,"y": 284.80123931528044}},\r
              "h2": {"coord": {"x": 888.7830427088813,"y": 624.3717836576856}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 443.62941708584185,"y": 248.6604326209002}},\r
              "h1": {"coord": {"x": 1370.650893521688,"y": 50.99549041624297}},\r
              "h2": {"coord": {"x": -483.1573382248501,"y": 447.3200572437637}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 778.6209306829899,"y": 336.0498216025141}},\r
              "h1": {"coord": {"x": 885.2025229186208,"y": 246.26987211946928}},\r
              "h2": {"coord": {"x": 662.0642385057556,"y": 428.6907057837829}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4B": {\r
      "id": "glyph-0x4B",\r
      "advanceWidth": 1482.790697645294,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 3,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 229.56810631229249,"y": 728.2392026578071}},\r
              "h1": {"coord": {"x": 179.56810631229246,"y": 728.2392026578071}, "use": false},\r
              "h2": {"coord": {"x": 279.56810631229246,"y": 728.2392026578071}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 100,"y": 628.5714285714288}},\r
              "h1": {"coord": {"x": 50,"y": 628.5714285714288}, "use": false},\r
              "h2": {"coord": {"x": 150,"y": 628.5714285714288}, "use": false}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 913.9534883720931,"y": 63.78737541528254}},\r
              "h1": {"coord": {"x": 448.83720930232573,"y": 60.46511627906992}},\r
              "h2": {"coord": {"x": 1379.0697674418607,"y": 67.10963455149516}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 1382.392026578073,"y": 449.16943521594703}},\r
              "h1": {"coord": {"x": 1385.7142857142856,"y": 246.51162790697663}},\r
              "h2": {"coord": {"x": 1379.0697674418604,"y": 651.8272425249174}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 997.0099667774085,"y": 834.5514950166114}},\r
              "h1": {"coord": {"x": 1262.7906976744182,"y": 834.5514950166115}},\r
              "h2": {"coord": {"x": 731.2292358803988,"y": 834.5514950166113}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119.9335548172757,"y": 209.9667774086379}},\r
              "h1": {"coord": {"x": 69.9335548172757,"y": 209.9667774086379}, "use": false},\r
              "h2": {"coord": {"x": 169.93355481727568,"y": 209.9667774086379}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 262.79069767441865,"y": 50.49833887043204}},\r
              "h1": {"coord": {"x": 212.79069767441862,"y": 50.49833887043204}, "use": false},\r
              "h2": {"coord": {"x": 312.79069767441865,"y": 50.49833887043204}, "use": false}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 997.0099667774087,"y": 651.8272425249171}},\r
              "h1": {"coord": {"x": 787.7076411960135,"y": 658.4717607973423}},\r
              "h2": {"coord": {"x": 1206.312292358804,"y": 645.1827242524919}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 1236.2126245847173,"y": 429.2358803986712}},\r
              "h1": {"coord": {"x": 1239.53488372093,"y": 528.9036544850501}},\r
              "h2": {"coord": {"x": 1232.8903654485046,"y": 329.56810631229234}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 894.0199335548174,"y": 200}},\r
              "h1": {"coord": {"x": 1149.8338870431894,"y": 206.6445182724251}},\r
              "h2": {"coord": {"x": 638.2059800664454,"y": 193.3554817275749}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Rectangle 1",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 400}},\r
              "h1": {"coord": {"x": 814.1666666666666,"y": 400}, "use": false},\r
              "h2": {"coord": {"x": 885.8333333333334,"y": 400}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 950,"y": 400}},\r
              "h1": {"coord": {"x": 914.1666666666666,"y": 400}, "use": false},\r
              "h2": {"coord": {"x": 985.8333333333333,"y": 400}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 950,"y": 300}},\r
              "h1": {"coord": {"x": 914.1666666666666,"y": 300}, "use": false},\r
              "h2": {"coord": {"x": 985.8333333333333,"y": 300}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 300}},\r
              "h1": {"coord": {"x": 814.1666666666666,"y": 300}, "use": false},\r
              "h2": {"coord": {"x": 885.8333333333334,"y": 300}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4C": {\r
      "id": "glyph-0x4C",\r
      "advanceWidth": 700,\r
      "shapes": [\r
        {\r
          "name": "Oval 1",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 349.7510373443983,"y": 650}},\r
              "h1": {"coord": {"x": 184.13858921161824,"y": 650}},\r
              "h2": {"coord": {"x": 515.3634854771783,"y": 650}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 650,"y": 350.2746987951807}},\r
              "h1": {"coord": {"x": 650,"y": 515.8192771084338}},\r
              "h2": {"coord": {"x": 650,"y": 184.73012048192766}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 349.7510373443983,"y": 50}},\r
              "h1": {"coord": {"x": 515.8614107883817,"y": 50}},\r
              "h2": {"coord": {"x": 183.6406639004149,"y": 50}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 50,"y": 350.2746987951807}},\r
              "h1": {"coord": {"x": 50,"y": 184.1807228915663}},\r
              "h2": {"coord": {"x": 50,"y": 516.3686746987951}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Oval 0",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 150,"y": 349.92}},\r
              "h1": {"coord": {"x": 150,"y": 460.24}},\r
              "h2": {"coord": {"x": 150,"y": 239.6}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 349.85177664974606,"y": 150}},\r
              "h1": {"coord": {"x": 238.93401015228432,"y": 150}},\r
              "h2": {"coord": {"x": 460.7695431472078,"y": 150}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 550,"y": 349.92}},\r
              "h1": {"coord": {"x": 550,"y": 239.44}},\r
              "h2": {"coord": {"x": 550,"y": 460.4}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 349.85177664974606,"y": 550}},\r
              "h1": {"coord": {"x": 460.4730964467003,"y": 550}},\r
              "h2": {"coord": {"x": 239.2304568527918,"y": 550}}\r
            }\r
          ],\r
          "transformOrigin": "middle-center"\r
        },\r
        {\r
          "name": "Rectangle 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 300,"y": 700}},\r
              "h1": {"coord": {"x": 249.5921693898437,"y": 700}, "use": false},\r
              "h2": {"coord": {"x": 350.4078306101563,"y": 700}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 400,"y": 700}},\r
              "h1": {"coord": {"x": 349.5921693898437,"y": 700}, "use": false},\r
              "h2": {"coord": {"x": 450.40783061015634,"y": 700}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 400,"y": 0}},\r
              "h1": {"coord": {"x": 349.5921693898437,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 450.40783061015634,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 300,"y": 0}},\r
              "h1": {"coord": {"x": 249.5921693898437,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 350.4078306101563,"y": 0}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4D": {\r
      "id": "glyph-0x4D",\r
      "advanceWidth": 1293.7111040495865,\r
      "shapes": [\r
        {\r
          "name": "Oval 0",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 426.498769569797,"y": 369.13910391925504}},\r
              "h1": {"coord": {"x": 426.498769569797,"y": 517.6556402556512}},\r
              "h2": {"coord": {"x": 426.498769569797,"y": 220.6225675828594}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 676.3134903819797,"y": 100}},\r
              "h1": {"coord": {"x": 537.6662822601522,"y": 100}},\r
              "h2": {"coord": {"x": 814.9606985038072,"y": 100}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 926.498769569797,"y": 369.13910391925504}},\r
              "h1": {"coord": {"x": 926.498769569797,"y": 220.40717014074713}},\r
              "h2": {"coord": {"x": 926.498769569797,"y": 517.8710376977633}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 676.3134903819797,"y": 638.4936052806227}},\r
              "h1": {"coord": {"x": 814.5901401281726,"y": 638.4936052806227}},\r
              "h2": {"coord": {"x": 538.0368406357868,"y": 638.4936052806227}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 280.7738858488668,"y": 496.8951039199978}},\r
              "h1": {"coord": {"x": -468.36201388153097,"y": 179.05473751658434}},\r
              "h2": {"coord": {"x": 1057.3545873438309,"y": 814.7354703234118}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 616.4986769334952,"y": 335.49202893012404}},\r
              "h1": {"coord": {"x": 1819.5122629684727,"y": 355.8325000152958}},\r
              "h2": {"coord": {"x": -586.5155958787078,"y": 316.1024019248308}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 1005.0496488205681,"y": 501.35268950272155}},\r
              "h1": {"coord": {"x": 1159.8596082215054,"y": 436.8068372670515}},\r
              "h2": {"coord": {"x": 831.085708932448,"y": 566.3463066024372}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Oval 0",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 484.3204494618038,"y": 779.4019933554814}},\r
              "h1": {"coord": {"x": 336.4628195208687,"y": 779.4019933554814}},\r
              "h2": {"coord": {"x": 632.1780794027391,"y": 779.4019933554814}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 751.8406887409622,"y": 529.3019933554821}},\r
              "h1": {"coord": {"x": 751.8406887409622,"y": 667.4019933554814}},\r
              "h2": {"coord": {"x": 751.8406887409622,"y": 391.2019933554827}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 484.3204494618038,"y": 279.4019933554817}},\r
              "h1": {"coord": {"x": 632.5743132084958,"y": 279.4019933554817}},\r
              "h2": {"coord": {"x": 336.06658571511275,"y": 279.4019933554817}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 217.1964439884016,"y": 529.3019933554821}},\r
              "h1": {"coord": {"x": 217.1964439884016,"y": 391.4019933554819}},\r
              "h2": {"coord": {"x": 217.1964439884016,"y": 667.2019933554823}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 832.2994340216236,"y": 734.8837209302325}},\r
              "h1": {"coord": {"x": 759.2097330249464,"y": 821.2624584717603}},\r
              "h2": {"coord": {"x": 905.3891350183007,"y": 648.5049833887047}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 805.7213609319226,"y": 465.7807308970102}},\r
              "h1": {"coord": {"x": 270.8376400016903,"y": 439.2026578073091}},\r
              "h2": {"coord": {"x": 1340.605081862155,"y": 492.3588039867113}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 603.0635536229532,"y": 831.2292358803987}},\r
              "h1": {"coord": {"x": 898.7446167458766,"y": 1256.4784053156172}},\r
              "h2": {"coord": {"x": 307.3824905000299,"y": 405.9800664451802}}\r
            }\r
          ]\r
        }\r
      ]\r
    }\r
  },\r
  "ligatures": {},\r
  "components": {},\r
  "kerning": {}\r
}`,ao=`{\r
  "settings": {\r
    "project": {\r
      "name": "Oblegg",\r
      "latestVersion": "2.1.2",\r
      "initialVersion": "2.1.2",\r
      "id": "g2_OBLEGG2",\r
      "characterRanges": [\r
        {\r
          "name": "Basic Latin",\r
          "begin": "0x20",\r
          "end": "0x7F"\r
        },\r
        {\r
          "name": "General Punctuation",\r
          "begin": "0x2000",\r
          "end": "0x206F"\r
        }\r
      ]\r
    },\r
    "app": {\r
      "savePreferences": false,\r
      "stopPageNavigation": true,\r
      "autoSave": true,\r
      "showNonCharPoints": false,\r
      "itemChooserPageSize": 256,\r
      "formatSaveFile": true,\r
      "moveShapesOnSVGDragDrop": true,\r
      "guides": {\r
        "drawGuidesOnTop": false,\r
        "systemShowGuides": true,\r
        "systemShowLabels": false,\r
        "systemTransparency": 70,\r
        "systemGuides": [\r
          "baseline",\r
          "leftSide",\r
          "rightSide"\r
        ],\r
        "customShowGuides": true,\r
        "customShowLabels": false,\r
        "customTransparency": 70,\r
        "custom": []\r
      },\r
      "contextCharacters": {\r
        "showCharacters": true,\r
        "characterTransparency": 20,\r
        "showGuides": true,\r
        "guidesTransparency": 70\r
      },\r
      "saveLivePreviews": true,\r
      "livePreviews": [\r
        {\r
          "text": "the five boxing wizards jump quickly"\r
        },\r
        {\r
          "fontSize": 128,\r
          "text": "pack my box with five dozen liquor waffle coffins."\r
        },\r
        {\r
          "fontSize": 28,\r
          "text": "{{scowl_10_short}}"\r
        }\r
      ],\r
      "previewText": false\r
    },\r
    "font": {\r
      "family": "Oblegg",\r
      "style": "Regular",\r
      "version": "1.0",\r
      "description": "Test font for Glyphr Studio v2",\r
      "panose": "0 0 0 0 0 0 0 0 0 0",\r
      "upm": 2048,\r
      "ascent": 1490,\r
      "descent": -430,\r
      "capHeight": 1490,\r
      "xHeight": 1020,\r
      "overshoot": 20,\r
      "lineGap": 250,\r
      "italicAngle": 0,\r
      "designer": "Matt LaGrandeur",\r
      "designerURL": "mattlag.com",\r
      "manufacturer": "Matt LaGrandeur",\r
      "manufacturerURL": "mattlag.com",\r
      "license": "OFL",\r
      "licenseURL": "",\r
      "copyright": "2023",\r
      "trademark": "",\r
      "variant": "normal",\r
      "weight": 400,\r
      "stretch": "normal",\r
      "stemv": 0,\r
      "stemh": 0,\r
      "slope": 0,\r
      "underlinePosition": -50,\r
      "underlineThickness": 10,\r
      "strikethroughPosition": 300,\r
      "strikethroughThickness": 10,\r
      "overlinePosition": 750,\r
      "overlineThickness": 10\r
    }\r
  },\r
  "glyphs": {\r
    "glyph-0x41": {\r
      "id": "glyph-0x41",\r
      "advanceWidth": 1252,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 15,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1207,"y": 174}},\r
              "h1": {"coord": {"x": 1210,"y": 174}},\r
              "h2": {"coord": {"x": 1257,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1113,"y": 174}},\r
              "h1": {"coord": {"x": 1063,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1163,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 1316}},\r
              "h1": {"coord": {"x": 705,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 805,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 1316}},\r
              "h1": {"coord": {"x": 750,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 803,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 805,"y": 1321}},\r
              "h1": {"coord": {"x": 805,"y": 1318}},\r
              "h2": {"coord": {"x": 855,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 805,"y": 1485}},\r
              "h1": {"coord": {"x": 755,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 805,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 1490}},\r
              "h1": {"coord": {"x": 803,"y": 1490}},\r
              "h2": {"coord": {"x": 850,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 439,"y": 1490}},\r
              "h1": {"coord": {"x": 389,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 436,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 434,"y": 1485}},\r
              "h1": {"coord": {"x": 434,"y": 1488}},\r
              "h2": {"coord": {"x": 484,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 434,"y": 1321}},\r
              "h1": {"coord": {"x": 384,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 434,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 439,"y": 1316}},\r
              "h1": {"coord": {"x": 436,"y": 1316}},\r
              "h2": {"coord": {"x": 489,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 484,"y": 1316}},\r
              "h1": {"coord": {"x": 434,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 534,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 126,"y": 174}},\r
              "h1": {"coord": {"x": 76,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 176,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 289,"y": 174}},\r
              "h1": {"coord": {"x": 239,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 339,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 378,"y": 456}},\r
              "h1": {"coord": {"x": 328,"y": 456}, "use": false},\r
              "h2": {"coord": {"x": 428,"y": 456}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 851,"y": 456}},\r
              "h1": {"coord": {"x": 801,"y": 456}, "use": false},\r
              "h2": {"coord": {"x": 901,"y": 456}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 940,"y": 174}},\r
              "h1": {"coord": {"x": 890,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 990,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 872,"y": 174}},\r
              "h1": {"coord": {"x": 822,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 869,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 867,"y": 169}},\r
              "h1": {"coord": {"x": 867,"y": 172}},\r
              "h2": {"coord": {"x": 917,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 867,"y": 5}},\r
              "h1": {"coord": {"x": 817,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 867,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 872,"y": 0}},\r
              "h1": {"coord": {"x": 869,"y": 0}},\r
              "h2": {"coord": {"x": 922,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1207,"y": 0}},\r
              "h1": {"coord": {"x": 1157,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1210,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1212,"y": 5}},\r
              "h1": {"coord": {"x": 1212,"y": 2}},\r
              "h2": {"coord": {"x": 1262,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1212,"y": 169}},\r
              "h1": {"coord": {"x": 1162,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1212,"y": 172}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -4,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 432,"y": 630}},\r
              "h1": {"coord": {"x": 382,"y": 630}, "use": false},\r
              "h2": {"coord": {"x": 482,"y": 630}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 614,"y": 1211}},\r
              "h1": {"coord": {"x": 564,"y": 1211}, "use": false},\r
              "h2": {"coord": {"x": 664,"y": 1211}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 797,"y": 630}},\r
              "h1": {"coord": {"x": 747,"y": 630}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 630}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x42": {\r
      "id": "glyph-0x42",\r
      "advanceWidth": 1052,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 832,"y": 783}},\r
              "h1": {"coord": {"x": 978,"y": 686}},\r
              "h2": {"coord": {"x": 906,"y": 862}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 940,"y": 1058}},\r
              "h1": {"coord": {"x": 940,"y": 969}},\r
              "h2": {"coord": {"x": 940,"y": 1180}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 578,"y": 1490}},\r
              "h1": {"coord": {"x": 907,"y": 1483}},\r
              "h2": {"coord": {"x": 628,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 578,"y": 1490}},\r
              "h1": {"coord": {"x": 528,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 628,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1323}},\r
              "h1": {"coord": {"x": -10,"y": 1323}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1320}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1318}},\r
              "h1": {"coord": {"x": 42,"y": 1318}},\r
              "h2": {"coord": {"x": 95,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 150,"y": 1318}},\r
              "h1": {"coord": {"x": 100,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 200,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 150,"y": 172}},\r
              "h1": {"coord": {"x": 100,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 200,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 172}},\r
              "h1": {"coord": {"x": -5,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 167}},\r
              "h1": {"coord": {"x": 40,"y": 170}},\r
              "h2": {"coord": {"x": 90,"y": 167}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 628,"y": 0}},\r
              "h1": {"coord": {"x": 578,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 938,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1012,"y": 396}},\r
              "h1": {"coord": {"x": 1012,"y": 230}},\r
              "h2": {"coord": {"x": 1012,"y": 489}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 565,"y": 1318}},\r
              "h1": {"coord": {"x": 515,"y": 1318}},\r
              "h2": {"coord": {"x": 732,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 796,"y": 1058}},\r
              "h1": {"coord": {"x": 796,"y": 1225}},\r
              "h2": {"coord": {"x": 796,"y": 938}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 566,"y": 840}},\r
              "h1": {"coord": {"x": 708,"y": 840}},\r
              "h2": {"coord": {"x": 616,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 322,"y": 840}},\r
              "h1": {"coord": {"x": 272,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 322,"y": 1318}},\r
              "h1": {"coord": {"x": 272,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 1318}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 3",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 628,"y": 172}},\r
              "h1": {"coord": {"x": 774,"y": 172}},\r
              "h2": {"coord": {"x": 578,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 322,"y": 172}},\r
              "h1": {"coord": {"x": 272,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 322,"y": 665}},\r
              "h1": {"coord": {"x": 272,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 628,"y": 665}},\r
              "h1": {"coord": {"x": 578,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 799,"y": 665}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 864,"y": 396}},\r
              "h1": {"coord": {"x": 864,"y": 568}},\r
              "h2": {"coord": {"x": 864,"y": 273}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x43": {\r
      "id": "glyph-0x43",\r
      "advanceWidth": 1062,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 852,"y": 1256}},\r
              "h1": {"coord": {"x": 849,"y": 1256}},\r
              "h2": {"coord": {"x": 902,"y": 1256}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1017,"y": 1256}},\r
              "h1": {"coord": {"x": 967,"y": 1256}, "use": false},\r
              "h2": {"coord": {"x": 1020,"y": 1256}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 1261}},\r
              "h1": {"coord": {"x": 1022,"y": 1258}},\r
              "h2": {"coord": {"x": 1072,"y": 1261}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 1407}},\r
              "h1": {"coord": {"x": 972,"y": 1407}, "use": false},\r
              "h2": {"coord": {"x": 1022,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 939,"y": 1490}},\r
              "h1": {"coord": {"x": 985,"y": 1490}},\r
              "h2": {"coord": {"x": 989,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 704,"y": 1490}},\r
              "h1": {"coord": {"x": 654,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 490,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 196,"y": 1230}},\r
              "h1": {"coord": {"x": 314,"y": 1400}},\r
              "h2": {"coord": {"x": 144,"y": 1155}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 78,"y": 965}},\r
              "h1": {"coord": {"x": 104,"y": 1066}},\r
              "h2": {"coord": {"x": 53,"y": 870}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 657}},\r
              "h1": {"coord": {"x": 40,"y": 766}},\r
              "h2": {"coord": {"x": 40,"y": 431}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 207,"y": 159}},\r
              "h1": {"coord": {"x": 95,"y": 268}},\r
              "h2": {"coord": {"x": 317,"y": 52}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 704,"y": 0}},\r
              "h1": {"coord": {"x": 479,"y": 0}},\r
              "h2": {"coord": {"x": 754,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 939,"y": 0}},\r
              "h1": {"coord": {"x": 889,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 985,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 83}},\r
              "h1": {"coord": {"x": 1022,"y": 37}},\r
              "h2": {"coord": {"x": 1072,"y": 83}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 224}},\r
              "h1": {"coord": {"x": 972,"y": 224}, "use": false},\r
              "h2": {"coord": {"x": 1022,"y": 227}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1017,"y": 229}},\r
              "h1": {"coord": {"x": 1020,"y": 229}},\r
              "h2": {"coord": {"x": 1067,"y": 229}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 852,"y": 229}},\r
              "h1": {"coord": {"x": 802,"y": 229}, "use": false},\r
              "h2": {"coord": {"x": 849,"y": 229}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 224}},\r
              "h1": {"coord": {"x": 847,"y": 227}},\r
              "h2": {"coord": {"x": 897,"y": 224}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 172}},\r
              "h1": {"coord": {"x": 797,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 897,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 704,"y": 172}},\r
              "h1": {"coord": {"x": 654,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 350,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 657}},\r
              "h1": {"coord": {"x": 212,"y": 308}},\r
              "h2": {"coord": {"x": 212,"y": 847}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 337,"y": 1132}},\r
              "h1": {"coord": {"x": 256,"y": 1016}},\r
              "h2": {"coord": {"x": 423,"y": 1255}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 704,"y": 1318}},\r
              "h1": {"coord": {"x": 547,"y": 1318}},\r
              "h2": {"coord": {"x": 754,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 1318}},\r
              "h1": {"coord": {"x": 797,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 897,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 1261}},\r
              "h1": {"coord": {"x": 797,"y": 1261}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 1258}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x44": {\r
      "id": "glyph-0x44",\r
      "advanceWidth": 1167,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 463,"y": 0}},\r
              "h1": {"coord": {"x": 413,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 688,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 960,"y": 159}},\r
              "h1": {"coord": {"x": 850,"y": 52}},\r
              "h2": {"coord": {"x": 1072,"y": 268}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1127,"y": 657}},\r
              "h1": {"coord": {"x": 1127,"y": 431}},\r
              "h2": {"coord": {"x": 1127,"y": 766}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1090,"y": 965}},\r
              "h1": {"coord": {"x": 1115,"y": 870}},\r
              "h2": {"coord": {"x": 1064,"y": 1066}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 971,"y": 1230}},\r
              "h1": {"coord": {"x": 1023,"y": 1155}},\r
              "h2": {"coord": {"x": 853,"y": 1400}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 463,"y": 1490}},\r
              "h1": {"coord": {"x": 677,"y": 1490}},\r
              "h2": {"coord": {"x": 513,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1323}},\r
              "h1": {"coord": {"x": -10,"y": 1323}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1320}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1318}},\r
              "h1": {"coord": {"x": 42,"y": 1318}},\r
              "h2": {"coord": {"x": 95,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 148,"y": 1318}},\r
              "h1": {"coord": {"x": 98,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 198,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 148,"y": 172}},\r
              "h1": {"coord": {"x": 98,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 198,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 172}},\r
              "h1": {"coord": {"x": -5,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 167}},\r
              "h1": {"coord": {"x": 40,"y": 170}},\r
              "h2": {"coord": {"x": 90,"y": 167}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 320,"y": 1318}},\r
              "h1": {"coord": {"x": 270,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 463,"y": 1318}},\r
              "h1": {"coord": {"x": 413,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 620,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 830,"y": 1132}},\r
              "h1": {"coord": {"x": 744,"y": 1255}},\r
              "h2": {"coord": {"x": 911,"y": 1016}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 955,"y": 657}},\r
              "h1": {"coord": {"x": 955,"y": 847}},\r
              "h2": {"coord": {"x": 955,"y": 308}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 463,"y": 172}},\r
              "h1": {"coord": {"x": 817,"y": 172}},\r
              "h2": {"coord": {"x": 513,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 320,"y": 172}},\r
              "h1": {"coord": {"x": 270,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 320,"y": 1318}},\r
              "h1": {"coord": {"x": 270,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 1318}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x45": {\r
      "id": "glyph-0x45",\r
      "advanceWidth": 1001,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 1232}},\r
              "h1": {"coord": {"x": 737,"y": 1232}, "use": false},\r
              "h2": {"coord": {"x": 787,"y": 1229}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 792,"y": 1227}},\r
              "h1": {"coord": {"x": 789,"y": 1227}},\r
              "h2": {"coord": {"x": 842,"y": 1227}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 956,"y": 1227}},\r
              "h1": {"coord": {"x": 906,"y": 1227}, "use": false},\r
              "h2": {"coord": {"x": 959,"y": 1227}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 961,"y": 1232}},\r
              "h1": {"coord": {"x": 961,"y": 1229}},\r
              "h2": {"coord": {"x": 1011,"y": 1232}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 961,"y": 1490}},\r
              "h1": {"coord": {"x": 911,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1011,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 101,"y": 1316}},\r
              "h1": {"coord": {"x": 51,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 151,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 101,"y": 174}},\r
              "h1": {"coord": {"x": 51,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 151,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 961,"y": 0}},\r
              "h1": {"coord": {"x": 911,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1011,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 961,"y": 258}},\r
              "h1": {"coord": {"x": 911,"y": 258}, "use": false},\r
              "h2": {"coord": {"x": 961,"y": 261}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 956,"y": 263}},\r
              "h1": {"coord": {"x": 959,"y": 263}},\r
              "h2": {"coord": {"x": 1006,"y": 263}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 792,"y": 263}},\r
              "h1": {"coord": {"x": 742,"y": 263}, "use": false},\r
              "h2": {"coord": {"x": 789,"y": 263}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 258}},\r
              "h1": {"coord": {"x": 787,"y": 261}},\r
              "h2": {"coord": {"x": 837,"y": 258}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 174}},\r
              "h1": {"coord": {"x": 737,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 837,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 274,"y": 174}},\r
              "h1": {"coord": {"x": 224,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 324,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 274,"y": 665}},\r
              "h1": {"coord": {"x": 224,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 324,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 583,"y": 665}},\r
              "h1": {"coord": {"x": 533,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 586,"y": 665}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 588,"y": 670}},\r
              "h1": {"coord": {"x": 588,"y": 667}},\r
              "h2": {"coord": {"x": 638,"y": 670}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 588,"y": 835}},\r
              "h1": {"coord": {"x": 538,"y": 835}, "use": false},\r
              "h2": {"coord": {"x": 588,"y": 838}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 583,"y": 840}},\r
              "h1": {"coord": {"x": 586,"y": 840}},\r
              "h2": {"coord": {"x": 633,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 274,"y": 840}},\r
              "h1": {"coord": {"x": 224,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 324,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 274,"y": 1316}},\r
              "h1": {"coord": {"x": 224,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 324,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 1316}},\r
              "h1": {"coord": {"x": 737,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 837,"y": 1316}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x46": {\r
      "id": "glyph-0x46",\r
      "advanceWidth": 1003,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 174}},\r
              "h1": {"coord": {"x": 226,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 665}},\r
              "h1": {"coord": {"x": 226,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 665}},\r
              "h1": {"coord": {"x": 550,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 603,"y": 665}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 605,"y": 670}},\r
              "h1": {"coord": {"x": 605,"y": 667}},\r
              "h2": {"coord": {"x": 655,"y": 670}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 605,"y": 835}},\r
              "h1": {"coord": {"x": 555,"y": 835}, "use": false},\r
              "h2": {"coord": {"x": 605,"y": 838}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 840}},\r
              "h1": {"coord": {"x": 603,"y": 840}},\r
              "h2": {"coord": {"x": 650,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 840}},\r
              "h1": {"coord": {"x": 226,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 1316}},\r
              "h1": {"coord": {"x": 226,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 789,"y": 1316}},\r
              "h1": {"coord": {"x": 739,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 839,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 789,"y": 1232}},\r
              "h1": {"coord": {"x": 739,"y": 1232}, "use": false},\r
              "h2": {"coord": {"x": 789,"y": 1229}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 794,"y": 1227}},\r
              "h1": {"coord": {"x": 791,"y": 1227}},\r
              "h2": {"coord": {"x": 844,"y": 1227}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 958,"y": 1227}},\r
              "h1": {"coord": {"x": 908,"y": 1227}, "use": false},\r
              "h2": {"coord": {"x": 961,"y": 1227}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 1232}},\r
              "h1": {"coord": {"x": 963,"y": 1229}},\r
              "h2": {"coord": {"x": 1013,"y": 1232}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 1490}},\r
              "h1": {"coord": {"x": 913,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1013,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 103,"y": 1316}},\r
              "h1": {"coord": {"x": 53,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 103,"y": 174}},\r
              "h1": {"coord": {"x": 53,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 174}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x47": {\r
      "id": "glyph-0x47",\r
      "advanceWidth": 1299,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 9,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 650,"y": -20}},\r
              "h1": {"coord": {"x": 268,"y": -20}},\r
              "h2": {"coord": {"x": 830,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1084,"y": 128}},\r
              "h1": {"coord": {"x": 978,"y": 23}},\r
              "h2": {"coord": {"x": 1134,"y": 128}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1084,"y": 4}},\r
              "h1": {"coord": {"x": 1034,"y": 4}, "use": false},\r
              "h2": {"coord": {"x": 1084,"y": 1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1089,"y": -1}},\r
              "h1": {"coord": {"x": 1086,"y": -1}},\r
              "h2": {"coord": {"x": 1139,"y": -1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1254,"y": -1}},\r
              "h1": {"coord": {"x": 1204,"y": -1}, "use": false},\r
              "h2": {"coord": {"x": 1257,"y": -1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1259,"y": 4}},\r
              "h1": {"coord": {"x": 1259,"y": 1}},\r
              "h2": {"coord": {"x": 1309,"y": 4}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1259,"y": 625}},\r
              "h1": {"coord": {"x": 1209,"y": 625}, "use": false},\r
              "h2": {"coord": {"x": 1259,"y": 628}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1254,"y": 630}},\r
              "h1": {"coord": {"x": 1257,"y": 630}},\r
              "h2": {"coord": {"x": 1304,"y": 630}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 714,"y": 630}},\r
              "h1": {"coord": {"x": 664,"y": 630}, "use": false},\r
              "h2": {"coord": {"x": 711,"y": 630}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 709,"y": 625}},\r
              "h1": {"coord": {"x": 709,"y": 628}},\r
              "h2": {"coord": {"x": 759,"y": 625}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 709,"y": 460}},\r
              "h1": {"coord": {"x": 659,"y": 460}, "use": false},\r
              "h2": {"coord": {"x": 709,"y": 457}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 714,"y": 455}},\r
              "h1": {"coord": {"x": 711,"y": 455}},\r
              "h2": {"coord": {"x": 764,"y": 455}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1058,"y": 455}},\r
              "h1": {"coord": {"x": 1008,"y": 455}, "use": false},\r
              "h2": {"coord": {"x": 1017,"y": 291}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 158}},\r
              "h1": {"coord": {"x": 911,"y": 158}},\r
              "h2": {"coord": {"x": 304,"y": 158}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 218,"y": 684}},\r
              "h1": {"coord": {"x": 218,"y": 434}},\r
              "h2": {"coord": {"x": 218,"y": 997}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1332}},\r
              "h1": {"coord": {"x": 295,"y": 1332}},\r
              "h2": {"coord": {"x": 859,"y": 1332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1029,"y": 1054}},\r
              "h1": {"coord": {"x": 972,"y": 1215}},\r
              "h2": {"coord": {"x": 1079,"y": 1054}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1202,"y": 1095}},\r
              "h1": {"coord": {"x": 1152,"y": 1095}, "use": false},\r
              "h2": {"coord": {"x": 1130,"y": 1314}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1510}},\r
              "h1": {"coord": {"x": 975,"y": 1510}},\r
              "h2": {"coord": {"x": 117,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 684}},\r
              "h1": {"coord": {"x": 40,"y": 954}},\r
              "h2": {"coord": {"x": 40,"y": 198}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x48": {\r
      "id": "glyph-0x48",\r
      "advanceWidth": 1221,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 19,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 174}},\r
              "h1": {"coord": {"x": 242,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 665}},\r
              "h1": {"coord": {"x": 242,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 665}},\r
              "h1": {"coord": {"x": 879,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 174}},\r
              "h1": {"coord": {"x": 879,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 174}},\r
              "h1": {"coord": {"x": 800,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 169}},\r
              "h1": {"coord": {"x": 845,"y": 172}},\r
              "h2": {"coord": {"x": 895,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 5}},\r
              "h1": {"coord": {"x": 795,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 845,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 0}},\r
              "h1": {"coord": {"x": 847,"y": 0}},\r
              "h2": {"coord": {"x": 900,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 0}},\r
              "h1": {"coord": {"x": 1126,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1179,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 5}},\r
              "h1": {"coord": {"x": 1181,"y": 2}},\r
              "h2": {"coord": {"x": 1231,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 169}},\r
              "h1": {"coord": {"x": 1131,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1181,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 174}},\r
              "h1": {"coord": {"x": 1179,"y": 174}},\r
              "h2": {"coord": {"x": 1226,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1102,"y": 174}},\r
              "h1": {"coord": {"x": 1052,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1152,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1102,"y": 1316}},\r
              "h1": {"coord": {"x": 1052,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1152,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 1316}},\r
              "h1": {"coord": {"x": 1126,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1179,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 1321}},\r
              "h1": {"coord": {"x": 1181,"y": 1318}},\r
              "h2": {"coord": {"x": 1231,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 1485}},\r
              "h1": {"coord": {"x": 1131,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1181,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 1490}},\r
              "h1": {"coord": {"x": 1179,"y": 1490}},\r
              "h2": {"coord": {"x": 1226,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 1490}},\r
              "h1": {"coord": {"x": 800,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 1485}},\r
              "h1": {"coord": {"x": 845,"y": 1488}},\r
              "h2": {"coord": {"x": 895,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 1321}},\r
              "h1": {"coord": {"x": 795,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 845,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 1316}},\r
              "h1": {"coord": {"x": 847,"y": 1316}},\r
              "h2": {"coord": {"x": 900,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 1316}},\r
              "h1": {"coord": {"x": 879,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 840}},\r
              "h1": {"coord": {"x": 879,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 840}},\r
              "h1": {"coord": {"x": 242,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 1316}},\r
              "h1": {"coord": {"x": 242,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1316}},\r
              "h1": {"coord": {"x": 321,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1321}},\r
              "h1": {"coord": {"x": 376,"y": 1318}},\r
              "h2": {"coord": {"x": 426,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1485}},\r
              "h1": {"coord": {"x": 326,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1490}},\r
              "h1": {"coord": {"x": 374,"y": 1490}},\r
              "h2": {"coord": {"x": 421,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 1316}},\r
              "h1": {"coord": {"x": 69,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 174}},\r
              "h1": {"coord": {"x": 69,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x49": {\r
      "id": "glyph-0x49",\r
      "advanceWidth": 1096,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1056,"y": 0}},\r
              "h1": {"coord": {"x": 1006,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1106,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1056,"y": 231}},\r
              "h1": {"coord": {"x": 1006,"y": 231}, "use": false},\r
              "h2": {"coord": {"x": 1056,"y": 234}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1051,"y": 236}},\r
              "h1": {"coord": {"x": 1054,"y": 236}},\r
              "h2": {"coord": {"x": 1101,"y": 236}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 236}},\r
              "h1": {"coord": {"x": 837,"y": 236}, "use": false},\r
              "h2": {"coord": {"x": 884,"y": 236}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 882,"y": 231}},\r
              "h1": {"coord": {"x": 882,"y": 234}},\r
              "h2": {"coord": {"x": 932,"y": 231}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 882,"y": 174}},\r
              "h1": {"coord": {"x": 832,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 932,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 629,"y": 174}},\r
              "h1": {"coord": {"x": 579,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 679,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 629,"y": 1316}},\r
              "h1": {"coord": {"x": 579,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 679,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 882,"y": 1316}},\r
              "h1": {"coord": {"x": 832,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 932,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 882,"y": 1256}},\r
              "h1": {"coord": {"x": 832,"y": 1256}, "use": false},\r
              "h2": {"coord": {"x": 882,"y": 1253}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 1251}},\r
              "h1": {"coord": {"x": 884,"y": 1251}},\r
              "h2": {"coord": {"x": 937,"y": 1251}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1051,"y": 1251}},\r
              "h1": {"coord": {"x": 1001,"y": 1251}, "use": false},\r
              "h2": {"coord": {"x": 1054,"y": 1251}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1056,"y": 1256}},\r
              "h1": {"coord": {"x": 1056,"y": 1253}},\r
              "h2": {"coord": {"x": 1106,"y": 1256}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1056,"y": 1490}},\r
              "h1": {"coord": {"x": 1006,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1106,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1490}},\r
              "h1": {"coord": {"x": -10,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1256}},\r
              "h1": {"coord": {"x": -10,"y": 1256}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1253}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1251}},\r
              "h1": {"coord": {"x": 42,"y": 1251}},\r
              "h2": {"coord": {"x": 95,"y": 1251}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 1251}},\r
              "h1": {"coord": {"x": 159,"y": 1251}, "use": false},\r
              "h2": {"coord": {"x": 212,"y": 1251}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 1256}},\r
              "h1": {"coord": {"x": 214,"y": 1253}},\r
              "h2": {"coord": {"x": 264,"y": 1256}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 1316}},\r
              "h1": {"coord": {"x": 164,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 455,"y": 1316}},\r
              "h1": {"coord": {"x": 405,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 505,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 455,"y": 174}},\r
              "h1": {"coord": {"x": 405,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 505,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 174}},\r
              "h1": {"coord": {"x": 164,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 231}},\r
              "h1": {"coord": {"x": 164,"y": 231}, "use": false},\r
              "h2": {"coord": {"x": 214,"y": 234}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 236}},\r
              "h1": {"coord": {"x": 212,"y": 236}},\r
              "h2": {"coord": {"x": 259,"y": 236}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 236}},\r
              "h1": {"coord": {"x": -5,"y": 236}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 236}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 231}},\r
              "h1": {"coord": {"x": 40,"y": 234}},\r
              "h2": {"coord": {"x": 90,"y": 231}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 0}},\r
              "h1": {"coord": {"x": -10,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 0}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4A": {\r
      "id": "glyph-0x4A",\r
      "advanceWidth": 1009,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 964,"y": 1490}},\r
              "h1": {"coord": {"x": 967,"y": 1490}},\r
              "h2": {"coord": {"x": 1014,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 216,"y": 1490}},\r
              "h1": {"coord": {"x": 166,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 213,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 211,"y": 1485}},\r
              "h1": {"coord": {"x": 211,"y": 1488}},\r
              "h2": {"coord": {"x": 261,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 211,"y": 1321}},\r
              "h1": {"coord": {"x": 161,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 211,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 216,"y": 1316}},\r
              "h1": {"coord": {"x": 213,"y": 1316}},\r
              "h2": {"coord": {"x": 266,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 747,"y": 1316}},\r
              "h1": {"coord": {"x": 697,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 797,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 747,"y": 710}},\r
              "h1": {"coord": {"x": 697,"y": 710}, "use": false},\r
              "h2": {"coord": {"x": 797,"y": 710}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 747,"y": 710}},\r
              "h1": {"coord": {"x": 697,"y": 710}, "use": false},\r
              "h2": {"coord": {"x": 747,"y": 701}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 748,"y": 684}},\r
              "h1": {"coord": {"x": 748,"y": 693}},\r
              "h2": {"coord": {"x": 748,"y": 438}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 314,"y": 154}},\r
              "h1": {"coord": {"x": 688,"y": 156}},\r
              "h2": {"coord": {"x": 364,"y": 154}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 314,"y": 154}},\r
              "h1": {"coord": {"x": 264,"y": 154}, "use": false},\r
              "h2": {"coord": {"x": 364,"y": 154}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 154}},\r
              "h1": {"coord": {"x": 164,"y": 154}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 154}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 233}},\r
              "h1": {"coord": {"x": 164,"y": 233}, "use": false},\r
              "h2": {"coord": {"x": 214,"y": 236}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 238}},\r
              "h1": {"coord": {"x": 212,"y": 238}},\r
              "h2": {"coord": {"x": 259,"y": 238}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 238}},\r
              "h1": {"coord": {"x": -5,"y": 238}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 238}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 233}},\r
              "h1": {"coord": {"x": 40,"y": 236}},\r
              "h2": {"coord": {"x": 90,"y": 233}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 63}},\r
              "h1": {"coord": {"x": -10,"y": 63}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 17}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 123,"y": -20}},\r
              "h1": {"coord": {"x": 77,"y": -20}},\r
              "h2": {"coord": {"x": 173,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 314,"y": -20}},\r
              "h1": {"coord": {"x": 264,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 364,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 314,"y": -20}},\r
              "h1": {"coord": {"x": 264,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 681,"y": -19}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 920,"y": 684}},\r
              "h1": {"coord": {"x": 920,"y": 166}},\r
              "h2": {"coord": {"x": 920,"y": 693}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 920,"y": 710}},\r
              "h1": {"coord": {"x": 920,"y": 701}},\r
              "h2": {"coord": {"x": 970,"y": 710}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 920,"y": 710}},\r
              "h1": {"coord": {"x": 870,"y": 710}, "use": false},\r
              "h2": {"coord": {"x": 970,"y": 710}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 920,"y": 1316}},\r
              "h1": {"coord": {"x": 870,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 970,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 964,"y": 1316}},\r
              "h1": {"coord": {"x": 914,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 967,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1321}},\r
              "h1": {"coord": {"x": 969,"y": 1318}},\r
              "h2": {"coord": {"x": 1019,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 1485}},\r
              "h1": {"coord": {"x": 919,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 969,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4B": {\r
      "id": "glyph-0x4B",\r
      "advanceWidth": 1100,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 18,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 174}},\r
              "h1": {"coord": {"x": 242,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 665}},\r
              "h1": {"coord": {"x": 242,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 361,"y": 665}},\r
              "h1": {"coord": {"x": 311,"y": 665}, "use": false},\r
              "h2": {"coord": {"x": 411,"y": 665}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 778,"y": 174}},\r
              "h1": {"coord": {"x": 728,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 828,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 729,"y": 174}},\r
              "h1": {"coord": {"x": 679,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 724,"y": 169}},\r
              "h1": {"coord": {"x": 724,"y": 172}},\r
              "h2": {"coord": {"x": 774,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 724,"y": 5}},\r
              "h1": {"coord": {"x": 674,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 724,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 729,"y": 0}},\r
              "h1": {"coord": {"x": 726,"y": 0}},\r
              "h2": {"coord": {"x": 779,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1055,"y": 0}},\r
              "h1": {"coord": {"x": 1005,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1058,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1060,"y": 5}},\r
              "h1": {"coord": {"x": 1060,"y": 2}},\r
              "h2": {"coord": {"x": 1110,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1060,"y": 169}},\r
              "h1": {"coord": {"x": 1010,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1060,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1055,"y": 174}},\r
              "h1": {"coord": {"x": 1058,"y": 174}},\r
              "h2": {"coord": {"x": 1105,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1004,"y": 174}},\r
              "h1": {"coord": {"x": 954,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1054,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 475,"y": 796}},\r
              "h1": {"coord": {"x": 425,"y": 796}, "use": false},\r
              "h2": {"coord": {"x": 525,"y": 796}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 891,"y": 1316}},\r
              "h1": {"coord": {"x": 841,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 941,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 985,"y": 1316}},\r
              "h1": {"coord": {"x": 935,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 988,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 990,"y": 1321}},\r
              "h1": {"coord": {"x": 990,"y": 1318}},\r
              "h2": {"coord": {"x": 1040,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 990,"y": 1485}},\r
              "h1": {"coord": {"x": 940,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 990,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 985,"y": 1490}},\r
              "h1": {"coord": {"x": 988,"y": 1490}},\r
              "h2": {"coord": {"x": 1035,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 659,"y": 1490}},\r
              "h1": {"coord": {"x": 609,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 656,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 1485}},\r
              "h1": {"coord": {"x": 654,"y": 1488}},\r
              "h2": {"coord": {"x": 704,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 1321}},\r
              "h1": {"coord": {"x": 604,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 654,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 659,"y": 1316}},\r
              "h1": {"coord": {"x": 656,"y": 1316}},\r
              "h2": {"coord": {"x": 709,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 714,"y": 1316}},\r
              "h1": {"coord": {"x": 664,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 764,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 320,"y": 840}},\r
              "h1": {"coord": {"x": 270,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 840}},\r
              "h1": {"coord": {"x": 242,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 1316}},\r
              "h1": {"coord": {"x": 242,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1316}},\r
              "h1": {"coord": {"x": 321,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1321}},\r
              "h1": {"coord": {"x": 376,"y": 1318}},\r
              "h2": {"coord": {"x": 426,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1485}},\r
              "h1": {"coord": {"x": 326,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1490}},\r
              "h1": {"coord": {"x": 374,"y": 1490}},\r
              "h2": {"coord": {"x": 421,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 1316}},\r
              "h1": {"coord": {"x": 69,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 174}},\r
              "h1": {"coord": {"x": 69,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4C": {\r
      "id": "glyph-0x4C",\r
      "advanceWidth": 1003,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 256}},\r
              "h1": {"coord": {"x": 913,"y": 256}, "use": false},\r
              "h2": {"coord": {"x": 963,"y": 259}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 958,"y": 261}},\r
              "h1": {"coord": {"x": 961,"y": 261}},\r
              "h2": {"coord": {"x": 1008,"y": 261}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 794,"y": 261}},\r
              "h1": {"coord": {"x": 744,"y": 261}, "use": false},\r
              "h2": {"coord": {"x": 791,"y": 261}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 789,"y": 256}},\r
              "h1": {"coord": {"x": 789,"y": 259}},\r
              "h2": {"coord": {"x": 839,"y": 256}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 789,"y": 174}},\r
              "h1": {"coord": {"x": 739,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 839,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 174}},\r
              "h1": {"coord": {"x": 226,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 276,"y": 1316}},\r
              "h1": {"coord": {"x": 226,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 326,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1316}},\r
              "h1": {"coord": {"x": 321,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1321}},\r
              "h1": {"coord": {"x": 376,"y": 1318}},\r
              "h2": {"coord": {"x": 426,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 1485}},\r
              "h1": {"coord": {"x": 326,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 1490}},\r
              "h1": {"coord": {"x": 374,"y": 1490}},\r
              "h2": {"coord": {"x": 421,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 103,"y": 1316}},\r
              "h1": {"coord": {"x": 53,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 103,"y": 174}},\r
              "h1": {"coord": {"x": 53,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 963,"y": 0}},\r
              "h1": {"coord": {"x": 913,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1013,"y": 0}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4F": {\r
      "id": "glyph-0x4F",\r
      "advanceWidth": 1300,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 3,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 650,"y": 1510}},\r
              "h1": {"coord": {"x": 1187,"y": 1510}},\r
              "h2": {"coord": {"x": 117,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 684}},\r
              "h1": {"coord": {"x": 40,"y": 954}},\r
              "h2": {"coord": {"x": 40,"y": 198}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": -20}},\r
              "h1": {"coord": {"x": 268,"y": -20}},\r
              "h2": {"coord": {"x": 1019,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1260,"y": 684}},\r
              "h1": {"coord": {"x": 1260,"y": 164}},\r
              "h2": {"coord": {"x": 1260,"y": 979}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 650,"y": 158}},\r
              "h1": {"coord": {"x": 1028,"y": 158}},\r
              "h2": {"coord": {"x": 304,"y": 158}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 218,"y": 684}},\r
              "h1": {"coord": {"x": 218,"y": 434}},\r
              "h2": {"coord": {"x": 218,"y": 997}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1332}},\r
              "h1": {"coord": {"x": 295,"y": 1332}},\r
              "h2": {"coord": {"x": 1003,"y": 1332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1081,"y": 684}},\r
              "h1": {"coord": {"x": 1081,"y": 997}},\r
              "h2": {"coord": {"x": 1081,"y": 437}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4E": {\r
      "id": "glyph-0x4E",\r
      "advanceWidth": 1221,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 0}},\r
              "h1": {"coord": {"x": 879,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1102,"y": 0}},\r
              "h1": {"coord": {"x": 1052,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1152,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1102,"y": 1315}},\r
              "h1": {"coord": {"x": 1052,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 1152,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 1315}},\r
              "h1": {"coord": {"x": 1126,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 1179,"y": 1315}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 1320}},\r
              "h1": {"coord": {"x": 1181,"y": 1317}},\r
              "h2": {"coord": {"x": 1231,"y": 1320}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1181,"y": 1484}},\r
              "h1": {"coord": {"x": 1131,"y": 1484}, "use": false},\r
              "h2": {"coord": {"x": 1181,"y": 1487}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1176,"y": 1489}},\r
              "h1": {"coord": {"x": 1179,"y": 1489}},\r
              "h2": {"coord": {"x": 1226,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 1489}},\r
              "h1": {"coord": {"x": 800,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 1489}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 1484}},\r
              "h1": {"coord": {"x": 845,"y": 1487}},\r
              "h2": {"coord": {"x": 895,"y": 1484}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 845,"y": 1320}},\r
              "h1": {"coord": {"x": 795,"y": 1320}, "use": false},\r
              "h2": {"coord": {"x": 845,"y": 1317}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 850,"y": 1315}},\r
              "h1": {"coord": {"x": 847,"y": 1315}},\r
              "h2": {"coord": {"x": 900,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 1315}},\r
              "h1": {"coord": {"x": 879,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 929,"y": 366}},\r
              "h1": {"coord": {"x": 879,"y": 366}, "use": false},\r
              "h2": {"coord": {"x": 979,"y": 366}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 297,"y": 1481}},\r
              "h1": {"coord": {"x": 247,"y": 1481}, "use": false},\r
              "h2": {"coord": {"x": 347,"y": 1481}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 297,"y": 1484}},\r
              "h1": {"coord": {"x": 247,"y": 1484}, "use": false},\r
              "h2": {"coord": {"x": 297,"y": 1487}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1489}},\r
              "h1": {"coord": {"x": 295,"y": 1489}},\r
              "h2": {"coord": {"x": 343,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 1490}},\r
              "h1": {"coord": {"x": 242,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 291,"y": 1489}},\r
              "h1": {"coord": {"x": 241,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 341,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1489}},\r
              "h1": {"coord": {"x": -5,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1489}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1484}},\r
              "h1": {"coord": {"x": 40,"y": 1487}},\r
              "h2": {"coord": {"x": 90,"y": 1484}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1320}},\r
              "h1": {"coord": {"x": -10,"y": 1320}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1317}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1315}},\r
              "h1": {"coord": {"x": 42,"y": 1315}},\r
              "h2": {"coord": {"x": 95,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 1315}},\r
              "h1": {"coord": {"x": 69,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 119,"y": 174}},\r
              "h1": {"coord": {"x": 69,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 169,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 0}},\r
              "h1": {"coord": {"x": 321,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 374,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 5}},\r
              "h1": {"coord": {"x": 376,"y": 2}},\r
              "h2": {"coord": {"x": 426,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 376,"y": 169}},\r
              "h1": {"coord": {"x": 326,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 376,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 371,"y": 174}},\r
              "h1": {"coord": {"x": 374,"y": 174}},\r
              "h2": {"coord": {"x": 421,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 174}},\r
              "h1": {"coord": {"x": 242,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 292,"y": 1114}},\r
              "h1": {"coord": {"x": 242,"y": 1114}, "use": false},\r
              "h2": {"coord": {"x": 342,"y": 1114}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x4D": {\r
      "id": "glyph-0x4D",\r
      "advanceWidth": 1336,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 15,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1291,"y": 1489}},\r
              "h1": {"coord": {"x": 1294,"y": 1489}},\r
              "h2": {"coord": {"x": 1341,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 1489}},\r
              "h1": {"coord": {"x": 998,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 1098,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 1489}},\r
              "h1": {"coord": {"x": 998,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 1098,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1047,"y": 1490}},\r
              "h1": {"coord": {"x": 997,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1097,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1046,"y": 1489}},\r
              "h1": {"coord": {"x": 996,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 1044,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 1484}},\r
              "h1": {"coord": {"x": 1043,"y": 1486}},\r
              "h2": {"coord": {"x": 1093,"y": 1484}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 1483}},\r
              "h1": {"coord": {"x": 993,"y": 1483}, "use": false},\r
              "h2": {"coord": {"x": 1093,"y": 1483}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 682,"y": 811}},\r
              "h1": {"coord": {"x": 632,"y": 811}, "use": false},\r
              "h2": {"coord": {"x": 732,"y": 811}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1483}},\r
              "h1": {"coord": {"x": 243,"y": 1483}, "use": false},\r
              "h2": {"coord": {"x": 343,"y": 1483}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1484}},\r
              "h1": {"coord": {"x": 243,"y": 1484}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 1486}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 290,"y": 1489}},\r
              "h1": {"coord": {"x": 292,"y": 1488}},\r
              "h2": {"coord": {"x": 340,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 289,"y": 1490}},\r
              "h1": {"coord": {"x": 239,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 339,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 288,"y": 1489}},\r
              "h1": {"coord": {"x": 238,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 338,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 288,"y": 1489}},\r
              "h1": {"coord": {"x": 238,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 338,"y": 1489}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1489}},\r
              "h1": {"coord": {"x": -5,"y": 1489}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1489}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1484}},\r
              "h1": {"coord": {"x": 40,"y": 1487}},\r
              "h2": {"coord": {"x": 90,"y": 1484}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1320}},\r
              "h1": {"coord": {"x": -10,"y": 1320}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1317}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1315}},\r
              "h1": {"coord": {"x": 42,"y": 1315}},\r
              "h2": {"coord": {"x": 95,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 120,"y": 1315}},\r
              "h1": {"coord": {"x": 70,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 170,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 120,"y": 174}},\r
              "h1": {"coord": {"x": 70,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 170,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 46,"y": 174}},\r
              "h1": {"coord": {"x": -4,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 43,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 169}},\r
              "h1": {"coord": {"x": 41,"y": 172}},\r
              "h2": {"coord": {"x": 91,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 5}},\r
              "h1": {"coord": {"x": -9,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 46,"y": 0}},\r
              "h1": {"coord": {"x": 43,"y": 0}},\r
              "h2": {"coord": {"x": 96,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 372,"y": 0}},\r
              "h1": {"coord": {"x": 322,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 375,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 377,"y": 5}},\r
              "h1": {"coord": {"x": 377,"y": 2}},\r
              "h2": {"coord": {"x": 427,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 377,"y": 169}},\r
              "h1": {"coord": {"x": 327,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 377,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 372,"y": 174}},\r
              "h1": {"coord": {"x": 375,"y": 174}},\r
              "h2": {"coord": {"x": 422,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 174}},\r
              "h1": {"coord": {"x": 243,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 343,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1110}},\r
              "h1": {"coord": {"x": 243,"y": 1110}, "use": false},\r
              "h2": {"coord": {"x": 343,"y": 1110}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 678,"y": 451}},\r
              "h1": {"coord": {"x": 628,"y": 451}, "use": false},\r
              "h2": {"coord": {"x": 728,"y": 451}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 1103}},\r
              "h1": {"coord": {"x": 993,"y": 1103}, "use": false},\r
              "h2": {"coord": {"x": 1093,"y": 1103}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 174}},\r
              "h1": {"coord": {"x": 993,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1093,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 964,"y": 174}},\r
              "h1": {"coord": {"x": 914,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 961,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 959,"y": 169}},\r
              "h1": {"coord": {"x": 959,"y": 172}},\r
              "h2": {"coord": {"x": 1009,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 959,"y": 5}},\r
              "h1": {"coord": {"x": 909,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 959,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 964,"y": 0}},\r
              "h1": {"coord": {"x": 961,"y": 0}},\r
              "h2": {"coord": {"x": 1014,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1290,"y": 0}},\r
              "h1": {"coord": {"x": 1240,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1293,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1295,"y": 5}},\r
              "h1": {"coord": {"x": 1295,"y": 2}},\r
              "h2": {"coord": {"x": 1345,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1295,"y": 169}},\r
              "h1": {"coord": {"x": 1245,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1295,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1290,"y": 174}},\r
              "h1": {"coord": {"x": 1293,"y": 174}},\r
              "h2": {"coord": {"x": 1340,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1216,"y": 174}},\r
              "h1": {"coord": {"x": 1166,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1266,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1216,"y": 1315}},\r
              "h1": {"coord": {"x": 1166,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 1266,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1291,"y": 1315}},\r
              "h1": {"coord": {"x": 1241,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 1294,"y": 1315}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1296,"y": 1320}},\r
              "h1": {"coord": {"x": 1296,"y": 1317}},\r
              "h2": {"coord": {"x": 1346,"y": 1320}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1296,"y": 1484}},\r
              "h1": {"coord": {"x": 1246,"y": 1484}, "use": false},\r
              "h2": {"coord": {"x": 1296,"y": 1487}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x50": {\r
      "id": "glyph-0x50",\r
      "advanceWidth": 994,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 573,"y": 666}},\r
              "h1": {"coord": {"x": 523,"y": 666}, "use": false},\r
              "h2": {"coord": {"x": 834,"y": 666}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 954,"y": 1059}},\r
              "h1": {"coord": {"x": 954,"y": 897}},\r
              "h2": {"coord": {"x": 954,"y": 1181}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 585,"y": 1490}},\r
              "h1": {"coord": {"x": 914,"y": 1483}},\r
              "h2": {"coord": {"x": 635,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 585,"y": 1490}},\r
              "h1": {"coord": {"x": 535,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 635,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 157,"y": 1316}},\r
              "h1": {"coord": {"x": 107,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 207,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 157,"y": 174}},\r
              "h1": {"coord": {"x": 107,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 207,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 422,"y": 0}},\r
              "h1": {"coord": {"x": 372,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 472,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": 1}},\r
              "h1": {"coord": {"x": 375,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 475,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 426,"y": 1}},\r
              "h1": {"coord": {"x": 376,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 476,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 426,"y": 2}},\r
              "h1": {"coord": {"x": 376,"y": 2}, "use": false},\r
              "h2": {"coord": {"x": 476,"y": 2}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 427,"y": 5}},\r
              "h1": {"coord": {"x": 377,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 477,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 427,"y": 169}},\r
              "h1": {"coord": {"x": 377,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 477,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 426,"y": 172}},\r
              "h1": {"coord": {"x": 376,"y": 172}, "use": false},\r
              "h2": {"coord": {"x": 476,"y": 172}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 426,"y": 173}},\r
              "h1": {"coord": {"x": 376,"y": 173}, "use": false},\r
              "h2": {"coord": {"x": 476,"y": 173}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": 173}},\r
              "h1": {"coord": {"x": 375,"y": 173}, "use": false},\r
              "h2": {"coord": {"x": 475,"y": 173}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 422,"y": 174}},\r
              "h1": {"coord": {"x": 372,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 472,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 329,"y": 174}},\r
              "h1": {"coord": {"x": 279,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 379,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 329,"y": 666}},\r
              "h1": {"coord": {"x": 279,"y": 666}, "use": false},\r
              "h2": {"coord": {"x": 379,"y": 666}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 572,"y": 1318}},\r
              "h1": {"coord": {"x": 522,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 739,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 803,"y": 1059}},\r
              "h1": {"coord": {"x": 803,"y": 1226}},\r
              "h2": {"coord": {"x": 803,"y": 939}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 573,"y": 841}},\r
              "h1": {"coord": {"x": 715,"y": 841}},\r
              "h2": {"coord": {"x": 623,"y": 841}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 329,"y": 840}},\r
              "h1": {"coord": {"x": 279,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 379,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 329,"y": 1318}},\r
              "h1": {"coord": {"x": 279,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 379,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 572,"y": 1318}},\r
              "h1": {"coord": {"x": 522,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 622,"y": 1318}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x51": {\r
      "id": "glyph-0x51",\r
      "advanceWidth": 1318,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1119,"y": 167}},\r
              "h1": {"coord": {"x": 1069,"y": 167}, "use": false},\r
              "h2": {"coord": {"x": 1209,"y": 279}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1260,"y": 684}},\r
              "h1": {"coord": {"x": 1260,"y": 446}},\r
              "h2": {"coord": {"x": 1260,"y": 979}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1510}},\r
              "h1": {"coord": {"x": 1187,"y": 1510}},\r
              "h2": {"coord": {"x": 117,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 684}},\r
              "h1": {"coord": {"x": 40,"y": 954}},\r
              "h2": {"coord": {"x": 40,"y": 198}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": -20}},\r
              "h1": {"coord": {"x": 268,"y": -20}},\r
              "h2": {"coord": {"x": 779,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 985,"y": 54}},\r
              "h1": {"coord": {"x": 892,"y": 2}},\r
              "h2": {"coord": {"x": 1035,"y": 54}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1155,"y": -116}},\r
              "h1": {"coord": {"x": 1105,"y": -116}, "use": false},\r
              "h2": {"coord": {"x": 1157,"y": -118}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1162,"y": -116}},\r
              "h1": {"coord": {"x": 1160,"y": -118}},\r
              "h2": {"coord": {"x": 1212,"y": -116}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1278,"y": 0}},\r
              "h1": {"coord": {"x": 1228,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1280,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1278,"y": 7}},\r
              "h1": {"coord": {"x": 1280,"y": 5}},\r
              "h2": {"coord": {"x": 1328,"y": 7}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -3,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 650,"y": 158}},\r
              "h1": {"coord": {"x": 729,"y": 158}},\r
              "h2": {"coord": {"x": 304,"y": 158}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 218,"y": 684}},\r
              "h1": {"coord": {"x": 218,"y": 434}},\r
              "h2": {"coord": {"x": 218,"y": 997}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 1332}},\r
              "h1": {"coord": {"x": 295,"y": 1332}},\r
              "h2": {"coord": {"x": 1003,"y": 1332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1081,"y": 684}},\r
              "h1": {"coord": {"x": 1081,"y": 997}},\r
              "h2": {"coord": {"x": 1081,"y": 548}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 987,"y": 299}},\r
              "h1": {"coord": {"x": 1065,"y": 402}},\r
              "h2": {"coord": {"x": 1037,"y": 299}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 848,"y": 437}},\r
              "h1": {"coord": {"x": 798,"y": 437}, "use": false},\r
              "h2": {"coord": {"x": 846,"y": 439}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 841,"y": 437}},\r
              "h1": {"coord": {"x": 843,"y": 439}},\r
              "h2": {"coord": {"x": 891,"y": 437}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 725,"y": 322}},\r
              "h1": {"coord": {"x": 675,"y": 322}, "use": false},\r
              "h2": {"coord": {"x": 723,"y": 320}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 725,"y": 314}},\r
              "h1": {"coord": {"x": 723,"y": 316}},\r
              "h2": {"coord": {"x": 775,"y": 314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 847,"y": 192}},\r
              "h1": {"coord": {"x": 797,"y": 192}, "use": false},\r
              "h2": {"coord": {"x": 794,"y": 170}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x52": {\r
      "id": "glyph-0x52",\r
      "advanceWidth": 1103,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 9,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1058,"y": 175}},\r
              "h1": {"coord": {"x": 1061,"y": 175}},\r
              "h2": {"coord": {"x": 1108,"y": 175}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 930,"y": 175}},\r
              "h1": {"coord": {"x": 880,"y": 175}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 175}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 642,"y": 674}},\r
              "h1": {"coord": {"x": 592,"y": 674}, "use": false},\r
              "h2": {"coord": {"x": 847,"y": 716}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 942,"y": 1059}},\r
              "h1": {"coord": {"x": 942,"y": 915}},\r
              "h2": {"coord": {"x": 942,"y": 1181}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 573,"y": 1490}},\r
              "h1": {"coord": {"x": 902,"y": 1483}},\r
              "h2": {"coord": {"x": 623,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 573,"y": 1490}},\r
              "h1": {"coord": {"x": 523,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 623,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 44,"y": 1490}},\r
              "h1": {"coord": {"x": -6,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 94,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 44,"y": 1490}},\r
              "h1": {"coord": {"x": -6,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1487}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 145,"y": 1316}},\r
              "h1": {"coord": {"x": 95,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 195,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 145,"y": 174}},\r
              "h1": {"coord": {"x": 95,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 195,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 422,"y": 0}},\r
              "h1": {"coord": {"x": 372,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 425,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 427,"y": 5}},\r
              "h1": {"coord": {"x": 427,"y": 2}},\r
              "h2": {"coord": {"x": 477,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 427,"y": 169}},\r
              "h1": {"coord": {"x": 377,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 427,"y": 172}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 422,"y": 174}},\r
              "h1": {"coord": {"x": 425,"y": 174}},\r
              "h2": {"coord": {"x": 472,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 174}},\r
              "h1": {"coord": {"x": 267,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 666}},\r
              "h1": {"coord": {"x": 267,"y": 666}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 666}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 445,"y": 666}},\r
              "h1": {"coord": {"x": 395,"y": 666}, "use": false},\r
              "h2": {"coord": {"x": 495,"y": 666}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 1}},\r
              "h1": {"coord": {"x": 756,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 856,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 809,"y": 1}},\r
              "h1": {"coord": {"x": 759,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 859,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 809,"y": 1}},\r
              "h1": {"coord": {"x": 759,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 859,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1058,"y": 1}},\r
              "h1": {"coord": {"x": 1008,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 1061,"y": 1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1063,"y": 6}},\r
              "h1": {"coord": {"x": 1063,"y": 3}},\r
              "h2": {"coord": {"x": 1113,"y": 6}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1063,"y": 170}},\r
              "h1": {"coord": {"x": 1013,"y": 170}, "use": false},\r
              "h2": {"coord": {"x": 1063,"y": 173}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -3,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 1318}},\r
              "h1": {"coord": {"x": 267,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 1318}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 560,"y": 1318}},\r
              "h1": {"coord": {"x": 510,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 727,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 791,"y": 1059}},\r
              "h1": {"coord": {"x": 791,"y": 1226}},\r
              "h2": {"coord": {"x": 791,"y": 939}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 561,"y": 841}},\r
              "h1": {"coord": {"x": 703,"y": 841}},\r
              "h2": {"coord": {"x": 611,"y": 841}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 503,"y": 841}},\r
              "h1": {"coord": {"x": 453,"y": 841}, "use": false},\r
              "h2": {"coord": {"x": 553,"y": 841}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 503,"y": 840}},\r
              "h1": {"coord": {"x": 453,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 553,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 840}},\r
              "h1": {"coord": {"x": 267,"y": 840}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 840}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 317,"y": 1318}},\r
              "h1": {"coord": {"x": 267,"y": 1318}, "use": false},\r
              "h2": {"coord": {"x": 367,"y": 1318}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x53": {\r
      "id": "glyph-0x53",\r
      "advanceWidth": 981,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 490,"y": 849}},\r
              "h1": {"coord": {"x": 910,"y": 849}},\r
              "h2": {"coord": {"x": 540,"y": 849}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 490,"y": 850}},\r
              "h1": {"coord": {"x": 440,"y": 850}, "use": false},\r
              "h2": {"coord": {"x": 257,"y": 850}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 228,"y": 1054}},\r
              "h1": {"coord": {"x": 228,"y": 988}},\r
              "h2": {"coord": {"x": 228,"y": 1201}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 490,"y": 1316}},\r
              "h1": {"coord": {"x": 296,"y": 1316}},\r
              "h2": {"coord": {"x": 553,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 684,"y": 1316}},\r
              "h1": {"coord": {"x": 624,"y": 1316}},\r
              "h2": {"coord": {"x": 734,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 684,"y": 1234}},\r
              "h1": {"coord": {"x": 634,"y": 1234}, "use": false},\r
              "h2": {"coord": {"x": 684,"y": 1231}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 689,"y": 1229}},\r
              "h1": {"coord": {"x": 686,"y": 1229}},\r
              "h2": {"coord": {"x": 739,"y": 1229}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 853,"y": 1229}},\r
              "h1": {"coord": {"x": 803,"y": 1229}, "use": false},\r
              "h2": {"coord": {"x": 856,"y": 1229}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 858,"y": 1234}},\r
              "h1": {"coord": {"x": 858,"y": 1231}},\r
              "h2": {"coord": {"x": 908,"y": 1234}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 858,"y": 1407}},\r
              "h1": {"coord": {"x": 808,"y": 1407}, "use": false},\r
              "h2": {"coord": {"x": 858,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 775,"y": 1490}},\r
              "h1": {"coord": {"x": 821,"y": 1490}},\r
              "h2": {"coord": {"x": 825,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 490,"y": 1490}},\r
              "h1": {"coord": {"x": 440,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 310,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 54,"y": 1054}},\r
              "h1": {"coord": {"x": 54,"y": 1395}},\r
              "h2": {"coord": {"x": 54,"y": 880}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 486,"y": 676}},\r
              "h1": {"coord": {"x": 207,"y": 676}},\r
              "h2": {"coord": {"x": 741,"y": 676}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 767,"y": 394}},\r
              "h1": {"coord": {"x": 767,"y": 552}},\r
              "h2": {"coord": {"x": 767,"y": 324}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 486,"y": 174}},\r
              "h1": {"coord": {"x": 762,"y": 174}},\r
              "h2": {"coord": {"x": 536,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 174}},\r
              "h1": {"coord": {"x": 164,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 254}},\r
              "h1": {"coord": {"x": 164,"y": 254}, "use": false},\r
              "h2": {"coord": {"x": 214,"y": 257}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 259}},\r
              "h1": {"coord": {"x": 212,"y": 259}},\r
              "h2": {"coord": {"x": 259,"y": 259}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 259}},\r
              "h1": {"coord": {"x": -5,"y": 259}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 259}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 254}},\r
              "h1": {"coord": {"x": 40,"y": 257}},\r
              "h2": {"coord": {"x": 90,"y": 254}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 83}},\r
              "h1": {"coord": {"x": -10,"y": 83}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 38}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 121,"y": 0}},\r
              "h1": {"coord": {"x": 76,"y": 1}},\r
              "h2": {"coord": {"x": 171,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 121,"y": 0}},\r
              "h1": {"coord": {"x": 71,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 171,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 486,"y": 0}},\r
              "h1": {"coord": {"x": 436,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 956,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 941,"y": 394}},\r
              "h1": {"coord": {"x": 941,"y": 331}},\r
              "h2": {"coord": {"x": 941,"y": 517}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x54": {\r
      "id": "glyph-0x54",\r
      "advanceWidth": 1104,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1064,"y": 1490}},\r
              "h1": {"coord": {"x": 1014,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1114,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1490}},\r
              "h1": {"coord": {"x": -10,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1215}},\r
              "h1": {"coord": {"x": -10,"y": 1215}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1212}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1210}},\r
              "h1": {"coord": {"x": 42,"y": 1210}},\r
              "h2": {"coord": {"x": 95,"y": 1210}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 210,"y": 1210}},\r
              "h1": {"coord": {"x": 160,"y": 1210}, "use": false},\r
              "h2": {"coord": {"x": 213,"y": 1210}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 215,"y": 1215}},\r
              "h1": {"coord": {"x": 215,"y": 1212}},\r
              "h2": {"coord": {"x": 265,"y": 1215}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 215,"y": 1315}},\r
              "h1": {"coord": {"x": 165,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 265,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 458,"y": 1315}},\r
              "h1": {"coord": {"x": 408,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 508,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 458,"y": 176}},\r
              "h1": {"coord": {"x": 408,"y": 176}, "use": false},\r
              "h2": {"coord": {"x": 508,"y": 176}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 359,"y": 176}},\r
              "h1": {"coord": {"x": 309,"y": 176}, "use": false},\r
              "h2": {"coord": {"x": 356,"y": 176}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 354,"y": 171}},\r
              "h1": {"coord": {"x": 354,"y": 174}},\r
              "h2": {"coord": {"x": 404,"y": 171}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 354,"y": 5}},\r
              "h1": {"coord": {"x": 304,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 354,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 359,"y": 0}},\r
              "h1": {"coord": {"x": 356,"y": 0}},\r
              "h2": {"coord": {"x": 409,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 723,"y": 0}},\r
              "h1": {"coord": {"x": 673,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 728,"y": 5}},\r
              "h1": {"coord": {"x": 728,"y": 2}},\r
              "h2": {"coord": {"x": 778,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 728,"y": 171}},\r
              "h1": {"coord": {"x": 678,"y": 171}, "use": false},\r
              "h2": {"coord": {"x": 728,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 723,"y": 176}},\r
              "h1": {"coord": {"x": 726,"y": 176}},\r
              "h2": {"coord": {"x": 773,"y": 176}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 634,"y": 176}},\r
              "h1": {"coord": {"x": 584,"y": 176}, "use": false},\r
              "h2": {"coord": {"x": 684,"y": 176}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 634,"y": 1315}},\r
              "h1": {"coord": {"x": 584,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 684,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 888,"y": 1315}},\r
              "h1": {"coord": {"x": 838,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 938,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 888,"y": 1215}},\r
              "h1": {"coord": {"x": 838,"y": 1215}, "use": false},\r
              "h2": {"coord": {"x": 888,"y": 1212}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 893,"y": 1210}},\r
              "h1": {"coord": {"x": 890,"y": 1210}},\r
              "h2": {"coord": {"x": 943,"y": 1210}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1058,"y": 1210}},\r
              "h1": {"coord": {"x": 1008,"y": 1210}, "use": false},\r
              "h2": {"coord": {"x": 1061,"y": 1210}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1063,"y": 1215}},\r
              "h1": {"coord": {"x": 1063,"y": 1212}},\r
              "h2": {"coord": {"x": 1113,"y": 1215}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x55": {\r
      "id": "glyph-0x55",\r
      "advanceWidth": 1301,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 12,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1256,"y": 1490}},\r
              "h1": {"coord": {"x": 1259,"y": 1490}},\r
              "h2": {"coord": {"x": 1306,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 892,"y": 1490}},\r
              "h1": {"coord": {"x": 842,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 889,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 1485}},\r
              "h1": {"coord": {"x": 887,"y": 1488}},\r
              "h2": {"coord": {"x": 937,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 1319}},\r
              "h1": {"coord": {"x": 837,"y": 1319}, "use": false},\r
              "h2": {"coord": {"x": 887,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 892,"y": 1314}},\r
              "h1": {"coord": {"x": 889,"y": 1314}},\r
              "h2": {"coord": {"x": 942,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 984,"y": 1314}},\r
              "h1": {"coord": {"x": 934,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 1034,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 984,"y": 506}},\r
              "h1": {"coord": {"x": 934,"y": 506}, "use": false},\r
              "h2": {"coord": {"x": 984,"y": 379}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 907,"y": 237}},\r
              "h1": {"coord": {"x": 959,"y": 291}},\r
              "h2": {"coord": {"x": 854,"y": 182}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 642,"y": 155}},\r
              "h1": {"coord": {"x": 768,"y": 155}},\r
              "h2": {"coord": {"x": 518,"y": 155}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 385,"y": 235}},\r
              "h1": {"coord": {"x": 434,"y": 181}},\r
              "h2": {"coord": {"x": 336,"y": 288}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 312,"y": 506}},\r
              "h1": {"coord": {"x": 312,"y": 377}},\r
              "h2": {"coord": {"x": 362,"y": 506}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 312,"y": 1314}},\r
              "h1": {"coord": {"x": 262,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 362,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 409,"y": 1314}},\r
              "h1": {"coord": {"x": 359,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 412,"y": 1314}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 414,"y": 1319}},\r
              "h1": {"coord": {"x": 414,"y": 1316}},\r
              "h2": {"coord": {"x": 464,"y": 1319}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 414,"y": 1485}},\r
              "h1": {"coord": {"x": 364,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 414,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 409,"y": 1490}},\r
              "h1": {"coord": {"x": 412,"y": 1490}},\r
              "h2": {"coord": {"x": 459,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1319}},\r
              "h1": {"coord": {"x": -10,"y": 1319}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1314}},\r
              "h1": {"coord": {"x": 42,"y": 1314}},\r
              "h2": {"coord": {"x": 95,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 138,"y": 1314}},\r
              "h1": {"coord": {"x": 88,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 188,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 138,"y": 506}},\r
              "h1": {"coord": {"x": 88,"y": 506}, "use": false},\r
              "h2": {"coord": {"x": 138,"y": 332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 256,"y": 118}},\r
              "h1": {"coord": {"x": 176,"y": 205}},\r
              "h2": {"coord": {"x": 340,"y": 25}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 642,"y": -20}},\r
              "h1": {"coord": {"x": 466,"y": -20}},\r
              "h2": {"coord": {"x": 728,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 864,"y": 12}},\r
              "h1": {"coord": {"x": 800,"y": -9}},\r
              "h2": {"coord": {"x": 931,"y": 35}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1033,"y": 116}},\r
              "h1": {"coord": {"x": 988,"y": 69}},\r
              "h2": {"coord": {"x": 1117,"y": 205}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1159,"y": 506}},\r
              "h1": {"coord": {"x": 1159,"y": 332}},\r
              "h2": {"coord": {"x": 1209,"y": 506}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1159,"y": 1314}},\r
              "h1": {"coord": {"x": 1109,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 1209,"y": 1314}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1256,"y": 1314}},\r
              "h1": {"coord": {"x": 1206,"y": 1314}, "use": false},\r
              "h2": {"coord": {"x": 1259,"y": 1314}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1261,"y": 1319}},\r
              "h1": {"coord": {"x": 1261,"y": 1316}},\r
              "h2": {"coord": {"x": 1311,"y": 1319}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1261,"y": 1485}},\r
              "h1": {"coord": {"x": 1211,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1261,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x56": {\r
      "id": "glyph-0x56",\r
      "advanceWidth": 1276,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1231,"y": 1490}},\r
              "h1": {"coord": {"x": 1234,"y": 1490}},\r
              "h2": {"coord": {"x": 1281,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1018,"y": 1490}},\r
              "h1": {"coord": {"x": 968,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1016,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1013,"y": 1486}},\r
              "h1": {"coord": {"x": 1013,"y": 1488}},\r
              "h2": {"coord": {"x": 1063,"y": 1486}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 650,"y": 395}},\r
              "h1": {"coord": {"x": 600,"y": 395}, "use": false},\r
              "h2": {"coord": {"x": 700,"y": 395}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 263,"y": 1486}},\r
              "h1": {"coord": {"x": 213,"y": 1486}, "use": false},\r
              "h2": {"coord": {"x": 263,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 258,"y": 1490}},\r
              "h1": {"coord": {"x": 260,"y": 1490}},\r
              "h2": {"coord": {"x": 308,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 1316}},\r
              "h1": {"coord": {"x": 81,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 181,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 597,"y": 0}},\r
              "h1": {"coord": {"x": 547,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 647,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 705,"y": 0}},\r
              "h1": {"coord": {"x": 655,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 755,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1141,"y": 1316}},\r
              "h1": {"coord": {"x": 1091,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1191,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1231,"y": 1316}},\r
              "h1": {"coord": {"x": 1181,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1234,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1236,"y": 1321}},\r
              "h1": {"coord": {"x": 1236,"y": 1318}},\r
              "h2": {"coord": {"x": 1286,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1236,"y": 1485}},\r
              "h1": {"coord": {"x": 1186,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1236,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x57": {\r
      "id": "glyph-0x57",\r
      "advanceWidth": 1549,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 12,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1504,"y": 1490}},\r
              "h1": {"coord": {"x": 1507,"y": 1490}},\r
              "h2": {"coord": {"x": 1554,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1291,"y": 1490}},\r
              "h1": {"coord": {"x": 1241,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1288,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1286,"y": 1485}},\r
              "h1": {"coord": {"x": 1286,"y": 1488}},\r
              "h2": {"coord": {"x": 1336,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1067,"y": 385}},\r
              "h1": {"coord": {"x": 1017,"y": 385}, "use": false},\r
              "h2": {"coord": {"x": 1117,"y": 385}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 803,"y": 897}},\r
              "h1": {"coord": {"x": 753,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 853,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 741,"y": 897}},\r
              "h1": {"coord": {"x": 691,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 791,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 484,"y": 392}},\r
              "h1": {"coord": {"x": 434,"y": 392}, "use": false},\r
              "h2": {"coord": {"x": 534,"y": 392}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 263,"y": 1485}},\r
              "h1": {"coord": {"x": 213,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 263,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 258,"y": 1490}},\r
              "h1": {"coord": {"x": 261,"y": 1490}},\r
              "h2": {"coord": {"x": 308,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 123,"y": 1316}},\r
              "h1": {"coord": {"x": 73,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 173,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 366,"y": 0}},\r
              "h1": {"coord": {"x": 316,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 416,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 515,"y": 0}},\r
              "h1": {"coord": {"x": 465,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 565,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 771,"y": 523}},\r
              "h1": {"coord": {"x": 721,"y": 523}, "use": false},\r
              "h2": {"coord": {"x": 821,"y": 523}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1034,"y": 0}},\r
              "h1": {"coord": {"x": 984,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1084,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1183,"y": 0}},\r
              "h1": {"coord": {"x": 1133,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1233,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1428,"y": 1316}},\r
              "h1": {"coord": {"x": 1378,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1478,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1504,"y": 1316}},\r
              "h1": {"coord": {"x": 1454,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1507,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1509,"y": 1321}},\r
              "h1": {"coord": {"x": 1509,"y": 1318}},\r
              "h2": {"coord": {"x": 1559,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1509,"y": 1485}},\r
              "h1": {"coord": {"x": 1459,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1509,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x58": {\r
      "id": "glyph-0x58",\r
      "advanceWidth": 1180,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 19,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1135,"y": 174}},\r
              "h1": {"coord": {"x": 1138,"y": 174}},\r
              "h2": {"coord": {"x": 1185,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1022,"y": 174}},\r
              "h1": {"coord": {"x": 972,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 1072,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 702,"y": 759}},\r
              "h1": {"coord": {"x": 652,"y": 759}, "use": false},\r
              "h2": {"coord": {"x": 752,"y": 759}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1010,"y": 1316}},\r
              "h1": {"coord": {"x": 960,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1060,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1115,"y": 1316}},\r
              "h1": {"coord": {"x": 1065,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1118,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1120,"y": 1321}},\r
              "h1": {"coord": {"x": 1120,"y": 1318}},\r
              "h2": {"coord": {"x": 1170,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1120,"y": 1485}},\r
              "h1": {"coord": {"x": 1070,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1120,"y": 1488}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1115,"y": 1490}},\r
              "h1": {"coord": {"x": 1118,"y": 1490}},\r
              "h2": {"coord": {"x": 1165,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 902,"y": 1490}},\r
              "h1": {"coord": {"x": 852,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 900,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 898,"y": 1488}},\r
              "h1": {"coord": {"x": 848,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 948,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 897,"y": 1487}},\r
              "h1": {"coord": {"x": 847,"y": 1487}, "use": false},\r
              "h2": {"coord": {"x": 947,"y": 1487}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 600,"y": 945}},\r
              "h1": {"coord": {"x": 550,"y": 945}, "use": false},\r
              "h2": {"coord": {"x": 650,"y": 945}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 303,"y": 1487}},\r
              "h1": {"coord": {"x": 253,"y": 1487}, "use": false},\r
              "h2": {"coord": {"x": 353,"y": 1487}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 302,"y": 1488}},\r
              "h1": {"coord": {"x": 252,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 352,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 298,"y": 1490}},\r
              "h1": {"coord": {"x": 300,"y": 1490}},\r
              "h2": {"coord": {"x": 348,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 85,"y": 1490}},\r
              "h1": {"coord": {"x": 35,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 82,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 80,"y": 1485}},\r
              "h1": {"coord": {"x": 80,"y": 1488}},\r
              "h2": {"coord": {"x": 130,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 80,"y": 1321}},\r
              "h1": {"coord": {"x": 30,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 80,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 85,"y": 1316}},\r
              "h1": {"coord": {"x": 82,"y": 1316}},\r
              "h2": {"coord": {"x": 135,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 190,"y": 1316}},\r
              "h1": {"coord": {"x": 140,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 240,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 488,"y": 777}},\r
              "h1": {"coord": {"x": 438,"y": 777}, "use": false},\r
              "h2": {"coord": {"x": 538,"y": 777}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 157,"y": 174}},\r
              "h1": {"coord": {"x": 107,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 207,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 174}},\r
              "h1": {"coord": {"x": -5,"y": 174}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 174}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 169}},\r
              "h1": {"coord": {"x": 40,"y": 172}},\r
              "h2": {"coord": {"x": 90,"y": 169}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 258,"y": 0}},\r
              "h1": {"coord": {"x": 208,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 260,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 262,"y": 2}},\r
              "h1": {"coord": {"x": 212,"y": 2}, "use": false},\r
              "h2": {"coord": {"x": 312,"y": 2}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 263,"y": 3}},\r
              "h1": {"coord": {"x": 213,"y": 3}, "use": false},\r
              "h2": {"coord": {"x": 313,"y": 3}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 590,"y": 593}},\r
              "h1": {"coord": {"x": 540,"y": 593}, "use": false},\r
              "h2": {"coord": {"x": 640,"y": 593}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 917,"y": 3}},\r
              "h1": {"coord": {"x": 867,"y": 3}, "use": false},\r
              "h2": {"coord": {"x": 967,"y": 3}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 918,"y": 2}},\r
              "h1": {"coord": {"x": 868,"y": 2}, "use": false},\r
              "h2": {"coord": {"x": 968,"y": 2}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 922,"y": 0}},\r
              "h1": {"coord": {"x": 920,"y": 0}},\r
              "h2": {"coord": {"x": 972,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1135,"y": 0}},\r
              "h1": {"coord": {"x": 1085,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1138,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1140,"y": 5}},\r
              "h1": {"coord": {"x": 1140,"y": 2}},\r
              "h2": {"coord": {"x": 1190,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1140,"y": 169}},\r
              "h1": {"coord": {"x": 1090,"y": 169}, "use": false},\r
              "h2": {"coord": {"x": 1140,"y": 172}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x59": {\r
      "id": "glyph-0x59",\r
      "advanceWidth": 1276,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 14,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1231,"y": 1490}},\r
              "h1": {"coord": {"x": 1234,"y": 1490}},\r
              "h2": {"coord": {"x": 1281,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1018,"y": 1490}},\r
              "h1": {"coord": {"x": 968,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1016,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1014,"y": 1488}},\r
              "h1": {"coord": {"x": 964,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 1064,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1014,"y": 1487}},\r
              "h1": {"coord": {"x": 964,"y": 1487}, "use": false},\r
              "h2": {"coord": {"x": 1064,"y": 1487}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 891}},\r
              "h1": {"coord": {"x": 604,"y": 891}, "use": false},\r
              "h2": {"coord": {"x": 704,"y": 891}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 262,"y": 1488}},\r
              "h1": {"coord": {"x": 212,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 312,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 262,"y": 1488}},\r
              "h1": {"coord": {"x": 212,"y": 1488}, "use": false},\r
              "h2": {"coord": {"x": 312,"y": 1488}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 258,"y": 1490}},\r
              "h1": {"coord": {"x": 260,"y": 1490}},\r
              "h2": {"coord": {"x": 308,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1321}},\r
              "h1": {"coord": {"x": -10,"y": 1321}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1318}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1316}},\r
              "h1": {"coord": {"x": 42,"y": 1316}},\r
              "h2": {"coord": {"x": 95,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 145,"y": 1316}},\r
              "h1": {"coord": {"x": 95,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 195,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 572,"y": 657}},\r
              "h1": {"coord": {"x": 522,"y": 657}, "use": false},\r
              "h2": {"coord": {"x": 622,"y": 657}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 572,"y": 171}},\r
              "h1": {"coord": {"x": 522,"y": 171}, "use": false},\r
              "h2": {"coord": {"x": 622,"y": 171}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 493,"y": 171}},\r
              "h1": {"coord": {"x": 443,"y": 171}, "use": false},\r
              "h2": {"coord": {"x": 490,"y": 171}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 488,"y": 166}},\r
              "h1": {"coord": {"x": 488,"y": 169}},\r
              "h2": {"coord": {"x": 538,"y": 166}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 488,"y": 2}},\r
              "h1": {"coord": {"x": 438,"y": 2}, "use": false},\r
              "h2": {"coord": {"x": 488,"y": -1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 493,"y": -3}},\r
              "h1": {"coord": {"x": 490,"y": -3}},\r
              "h2": {"coord": {"x": 543,"y": -3}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": -3}},\r
              "h1": {"coord": {"x": 769,"y": -3}, "use": false},\r
              "h2": {"coord": {"x": 822,"y": -3}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 824,"y": 2}},\r
              "h1": {"coord": {"x": 824,"y": -1}},\r
              "h2": {"coord": {"x": 874,"y": 2}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 824,"y": 166}},\r
              "h1": {"coord": {"x": 774,"y": 166}, "use": false},\r
              "h2": {"coord": {"x": 824,"y": 169}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 171}},\r
              "h1": {"coord": {"x": 822,"y": 171}},\r
              "h2": {"coord": {"x": 869,"y": 171}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 745,"y": 171}},\r
              "h1": {"coord": {"x": 695,"y": 171}, "use": false},\r
              "h2": {"coord": {"x": 795,"y": 171}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 745,"y": 687}},\r
              "h1": {"coord": {"x": 695,"y": 687}, "use": false},\r
              "h2": {"coord": {"x": 795,"y": 687}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1124,"y": 1316}},\r
              "h1": {"coord": {"x": 1074,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1174,"y": 1316}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1231,"y": 1316}},\r
              "h1": {"coord": {"x": 1181,"y": 1316}, "use": false},\r
              "h2": {"coord": {"x": 1234,"y": 1316}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1236,"y": 1321}},\r
              "h1": {"coord": {"x": 1236,"y": 1318}},\r
              "h2": {"coord": {"x": 1286,"y": 1321}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1236,"y": 1485}},\r
              "h1": {"coord": {"x": 1186,"y": 1485}, "use": false},\r
              "h2": {"coord": {"x": 1236,"y": 1488}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x5A": {\r
      "id": "glyph-0x5A",\r
      "advanceWidth": 1146,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1101,"y": 242}},\r
              "h1": {"coord": {"x": 1104,"y": 242}},\r
              "h2": {"coord": {"x": 1151,"y": 242}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 933,"y": 242}},\r
              "h1": {"coord": {"x": 883,"y": 242}, "use": false},\r
              "h2": {"coord": {"x": 930,"y": 242}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 928,"y": 237}},\r
              "h1": {"coord": {"x": 928,"y": 240}},\r
              "h2": {"coord": {"x": 978,"y": 237}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 928,"y": 175}},\r
              "h1": {"coord": {"x": 878,"y": 175}, "use": false},\r
              "h2": {"coord": {"x": 978,"y": 175}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 334,"y": 175}},\r
              "h1": {"coord": {"x": 284,"y": 175}, "use": false},\r
              "h2": {"coord": {"x": 384,"y": 175}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1086,"y": 1460}},\r
              "h1": {"coord": {"x": 1036,"y": 1460}, "use": false},\r
              "h2": {"coord": {"x": 1136,"y": 1460}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1086,"y": 1490}},\r
              "h1": {"coord": {"x": 1036,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 1136,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 86,"y": 1490}},\r
              "h1": {"coord": {"x": 36,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 83,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 81,"y": 1485}},\r
              "h1": {"coord": {"x": 81,"y": 1488}},\r
              "h2": {"coord": {"x": 131,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 81,"y": 1253}},\r
              "h1": {"coord": {"x": 31,"y": 1253}, "use": false},\r
              "h2": {"coord": {"x": 81,"y": 1250}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 86,"y": 1248}},\r
              "h1": {"coord": {"x": 83,"y": 1248}},\r
              "h2": {"coord": {"x": 136,"y": 1248}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 255,"y": 1248}},\r
              "h1": {"coord": {"x": 205,"y": 1248}, "use": false},\r
              "h2": {"coord": {"x": 258,"y": 1248}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 260,"y": 1253}},\r
              "h1": {"coord": {"x": 260,"y": 1250}},\r
              "h2": {"coord": {"x": 310,"y": 1253}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 260,"y": 1315}},\r
              "h1": {"coord": {"x": 210,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 310,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 793,"y": 1315}},\r
              "h1": {"coord": {"x": 743,"y": 1315}, "use": false},\r
              "h2": {"coord": {"x": 843,"y": 1315}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 30}},\r
              "h1": {"coord": {"x": -9,"y": 30}, "use": false},\r
              "h2": {"coord": {"x": 91,"y": 30}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 0}},\r
              "h1": {"coord": {"x": -10,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1101,"y": 0}},\r
              "h1": {"coord": {"x": 1051,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1104,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1106,"y": 5}},\r
              "h1": {"coord": {"x": 1106,"y": 2}},\r
              "h2": {"coord": {"x": 1156,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1106,"y": 237}},\r
              "h1": {"coord": {"x": 1056,"y": 237}, "use": false},\r
              "h2": {"coord": {"x": 1106,"y": 240}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x61": {\r
      "id": "glyph-0x61",\r
      "advanceWidth": 949,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 904,"y": 165}},\r
              "h1": {"coord": {"x": 854,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 954,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 165}},\r
              "h1": {"coord": {"x": 769,"y": 165}},\r
              "h2": {"coord": {"x": 869,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 820,"y": 605}},\r
              "h1": {"coord": {"x": 820,"y": 571}},\r
              "h2": {"coord": {"x": 820,"y": 755}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 356,"y": 1040}},\r
              "h1": {"coord": {"x": 858,"y": 1040}},\r
              "h2": {"coord": {"x": 232,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 67,"y": 992}},\r
              "h1": {"coord": {"x": 100,"y": 1005}},\r
              "h2": {"coord": {"x": 50,"y": 985}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 51,"y": 965}},\r
              "h1": {"coord": {"x": 48,"y": 979}},\r
              "h2": {"coord": {"x": 101,"y": 965}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 84,"y": 842}},\r
              "h1": {"coord": {"x": 34,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 134,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 84,"y": 842}},\r
              "h1": {"coord": {"x": 34,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 134,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 84,"y": 842}},\r
              "h1": {"coord": {"x": 34,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 88,"y": 825}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 109,"y": 826}},\r
              "h1": {"coord": {"x": 96,"y": 823}},\r
              "h2": {"coord": {"x": 144,"y": 834}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 356,"y": 879}},\r
              "h1": {"coord": {"x": 240,"y": 879}},\r
              "h2": {"coord": {"x": 645,"y": 879}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 647,"y": 651}},\r
              "h1": {"coord": {"x": 647,"y": 827}},\r
              "h2": {"coord": {"x": 647,"y": 645}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 647,"y": 589}},\r
              "h1": {"coord": {"x": 647,"y": 619}},\r
              "h2": {"coord": {"x": 585,"y": 639}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 415,"y": 671}},\r
              "h1": {"coord": {"x": 505,"y": 671}},\r
              "h2": {"coord": {"x": 197,"y": 671}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 292}},\r
              "h1": {"coord": {"x": 40,"y": 512}},\r
              "h2": {"coord": {"x": 40,"y": 184}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": -20}},\r
              "h1": {"coord": {"x": 125,"y": -20}},\r
              "h2": {"coord": {"x": 522,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 669,"y": 37}},\r
              "h1": {"coord": {"x": 606,"y": 7}},\r
              "h2": {"coord": {"x": 684,"y": 15}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 737,"y": 1}},\r
              "h1": {"coord": {"x": 709,"y": 1}},\r
              "h2": {"coord": {"x": 787,"y": 1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 904,"y": 1}},\r
              "h1": {"coord": {"x": 854,"y": 1}, "use": false},\r
              "h2": {"coord": {"x": 907,"y": 1}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 909,"y": 6}},\r
              "h1": {"coord": {"x": 909,"y": 3}},\r
              "h2": {"coord": {"x": 959,"y": 6}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 909,"y": 160}},\r
              "h1": {"coord": {"x": 859,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 909,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 904,"y": 165}},\r
              "h1": {"coord": {"x": 907,"y": 165}},\r
              "h2": {"coord": {"x": 954,"y": 165}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 212}},\r
              "h1": {"coord": {"x": 604,"y": 212}, "use": false},\r
              "h2": {"coord": {"x": 654,"y": 164}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": 117}},\r
              "h1": {"coord": {"x": 593,"y": 117}},\r
              "h2": {"coord": {"x": 355,"y": 117}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 203,"y": 293}},\r
              "h1": {"coord": {"x": 203,"y": 116}},\r
              "h2": {"coord": {"x": 203,"y": 437}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 415,"y": 534}},\r
              "h1": {"coord": {"x": 287,"y": 534}},\r
              "h2": {"coord": {"x": 543,"y": 534}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 654,"y": 340}},\r
              "h1": {"coord": {"x": 654,"y": 458}},\r
              "h2": {"coord": {"x": 654,"y": 271}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x62": {\r
      "id": "glyph-0x62",\r
      "advanceWidth": 1085,\r
      "usedIn": [\r
        "glyph-0x64"\r
      ],\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 9,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": -5,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 0}},\r
              "h1": {"coord": {"x": 162,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 257,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 82}},\r
              "h1": {"coord": {"x": 293,"y": 37}},\r
              "h2": {"coord": {"x": 343,"y": 82}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 93}},\r
              "h1": {"coord": {"x": 243,"y": 93}, "use": false},\r
              "h2": {"coord": {"x": 356,"y": 25}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 590,"y": -20}},\r
              "h1": {"coord": {"x": 451,"y": -20}},\r
              "h2": {"coord": {"x": 893,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1045,"y": 384}},\r
              "h1": {"coord": {"x": 1045,"y": 159}},\r
              "h2": {"coord": {"x": 1095,"y": 384}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1045,"y": 589}},\r
              "h1": {"coord": {"x": 995,"y": 589}, "use": false},\r
              "h2": {"coord": {"x": 1095,"y": 589}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1045,"y": 589}},\r
              "h1": {"coord": {"x": 995,"y": 589}, "use": false},\r
              "h2": {"coord": {"x": 1044,"y": 851}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 593,"y": 1040}},\r
              "h1": {"coord": {"x": 840,"y": 1040}},\r
              "h2": {"coord": {"x": 477,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 915}},\r
              "h1": {"coord": {"x": 373,"y": 992}},\r
              "h2": {"coord": {"x": 344,"y": 915}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 1408}},\r
              "h1": {"coord": {"x": 243,"y": 1408}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 1490}},\r
              "h1": {"coord": {"x": 257,"y": 1490}},\r
              "h2": {"coord": {"x": 262,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1332}},\r
              "h1": {"coord": {"x": -10,"y": 1332}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1329}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1327}},\r
              "h1": {"coord": {"x": 42,"y": 1327}},\r
              "h2": {"coord": {"x": 95,"y": 1327}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 1327}},\r
              "h1": {"coord": {"x": 80,"y": 1327}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 1327}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 164}},\r
              "h1": {"coord": {"x": 80,"y": 164}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 164}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 164}},\r
              "h1": {"coord": {"x": -5,"y": 164}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 164}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 159}},\r
              "h1": {"coord": {"x": 40,"y": 162}},\r
              "h2": {"coord": {"x": 90,"y": 159}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -7,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 605}},\r
              "h1": {"coord": {"x": 243,"y": 605}, "use": false},\r
              "h2": {"coord": {"x": 299,"y": 776}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 593,"y": 896}},\r
              "h1": {"coord": {"x": 439,"y": 896}},\r
              "h2": {"coord": {"x": 750,"y": 896}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 880,"y": 576}},\r
              "h1": {"coord": {"x": 880,"y": 766}},\r
              "h2": {"coord": {"x": 930,"y": 576}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 880,"y": 396}},\r
              "h1": {"coord": {"x": 830,"y": 396}, "use": false},\r
              "h2": {"coord": {"x": 880,"y": 155}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 590,"y": 133}},\r
              "h1": {"coord": {"x": 663,"y": 133}},\r
              "h2": {"coord": {"x": 484,"y": 133}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 403}},\r
              "h1": {"coord": {"x": 300,"y": 179}},\r
              "h2": {"coord": {"x": 343,"y": 403}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x70": {\r
      "id": "glyph-0x70",\r
      "advanceWidth": 1090,\r
      "usedIn": [\r
        "glyph-0x71"\r
      ],\r
      "contextCharacters": "gpgy",\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1016}},\r
              "h1": {"coord": {"x": -10,"y": 1016}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1016}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 863}},\r
              "h1": {"coord": {"x": -10,"y": 863}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 860}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 858}},\r
              "h1": {"coord": {"x": 42,"y": 858}},\r
              "h2": {"coord": {"x": 95,"y": 858}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 858}},\r
              "h1": {"coord": {"x": 80,"y": 858}},\r
              "h2": {"coord": {"x": 130,"y": 507}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": -265}},\r
              "h1": {"coord": {"x": 80,"y": -265}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": -265}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 46,"y": -265}},\r
              "h1": {"coord": {"x": -4,"y": -265}, "use": false},\r
              "h2": {"coord": {"x": 43,"y": -265}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": -270}},\r
              "h1": {"coord": {"x": 41,"y": -267}},\r
              "h2": {"coord": {"x": 91,"y": -270}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": -424}},\r
              "h1": {"coord": {"x": -9,"y": -424}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": -427}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 46,"y": -429}},\r
              "h1": {"coord": {"x": 43,"y": -429}},\r
              "h2": {"coord": {"x": 96,"y": -429}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": -429}},\r
              "h1": {"coord": {"x": 162,"y": -429}, "use": false},\r
              "h2": {"coord": {"x": 257,"y": -429}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": -347}},\r
              "h1": {"coord": {"x": 294,"y": -392}},\r
              "h2": {"coord": {"x": 344,"y": -347}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 99}},\r
              "h1": {"coord": {"x": 244,"y": 99}, "use": false},\r
              "h2": {"coord": {"x": 356,"y": 28}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 595,"y": -19}},\r
              "h1": {"coord": {"x": 453,"y": -19}},\r
              "h2": {"coord": {"x": 898,"y": -19}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1050,"y": 385}},\r
              "h1": {"coord": {"x": 1050,"y": 160}},\r
              "h2": {"coord": {"x": 1100,"y": 385}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1050,"y": 589}},\r
              "h1": {"coord": {"x": 1000,"y": 589}, "use": false},\r
              "h2": {"coord": {"x": 1049,"y": 851}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 598,"y": 1041}},\r
              "h1": {"coord": {"x": 845,"y": 1041}},\r
              "h2": {"coord": {"x": 480,"y": 1041}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 910}},\r
              "h1": {"coord": {"x": 372,"y": 990}},\r
              "h2": {"coord": {"x": 343,"y": 910}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 293,"y": 940}},\r
              "h1": {"coord": {"x": 243,"y": 940}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 985}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 1021}},\r
              "h1": {"coord": {"x": 257,"y": 1021}},\r
              "h2": {"coord": {"x": 262,"y": 1021}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1021}},\r
              "h1": {"coord": {"x": -5,"y": 1021}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1021}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1016}},\r
              "h1": {"coord": {"x": 40,"y": 1019}},\r
              "h2": {"coord": {"x": 90,"y": 1016}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -7,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 298,"y": 417}},\r
              "h1": {"coord": {"x": 298,"y": 182}},\r
              "h2": {"coord": {"x": 298,"y": 422}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 298,"y": 595}},\r
              "h1": {"coord": {"x": 298,"y": 550}},\r
              "h2": {"coord": {"x": 298,"y": 772}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 598,"y": 897}},\r
              "h1": {"coord": {"x": 441,"y": 897}},\r
              "h2": {"coord": {"x": 755,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 885,"y": 577}},\r
              "h1": {"coord": {"x": 885,"y": 767}},\r
              "h2": {"coord": {"x": 935,"y": 577}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 885,"y": 397}},\r
              "h1": {"coord": {"x": 835,"y": 397}, "use": false},\r
              "h2": {"coord": {"x": 885,"y": 156}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 595,"y": 134}},\r
              "h1": {"coord": {"x": 668,"y": 134}},\r
              "h2": {"coord": {"x": 487,"y": 134}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x64": {\r
      "id": "glyph-0x64",\r
      "advanceWidth": 1085,\r
      "shapes": [\r
        {\r
          "link": "glyph-0x62",\r
          "isFlippedEW": true\r
        }\r
      ]\r
    },\r
    "glyph-0x63": {\r
      "id": "glyph-0x63",\r
      "advanceWidth": 898,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 6,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 849,"y": 272}},\r
              "h1": {"coord": {"x": 854,"y": 270}},\r
              "h2": {"coord": {"x": 824,"y": 282}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 720,"y": 331}},\r
              "h1": {"coord": {"x": 753,"y": 316}},\r
              "h2": {"coord": {"x": 717,"y": 332}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 714,"y": 327}},\r
              "h1": {"coord": {"x": 714,"y": 330}},\r
              "h2": {"coord": {"x": 714,"y": 173}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 585,"y": 142}},\r
              "h2": {"coord": {"x": 372,"y": 142}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 392}},\r
              "h1": {"coord": {"x": 204,"y": 158}},\r
              "h2": {"coord": {"x": 254,"y": 392}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 592}},\r
              "h1": {"coord": {"x": 154,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 254,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 592}},\r
              "h1": {"coord": {"x": 154,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 205,"y": 767}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 897}},\r
              "h1": {"coord": {"x": 324,"y": 897}},\r
              "h2": {"coord": {"x": 529,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 897}},\r
              "h1": {"coord": {"x": 429,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 897}},\r
              "h1": {"coord": {"x": 429,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 590,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 739}},\r
              "h1": {"coord": {"x": 670,"y": 847}},\r
              "h2": {"coord": {"x": 698,"y": 729}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 712,"y": 736}},\r
              "h1": {"coord": {"x": 705,"y": 733}},\r
              "h2": {"coord": {"x": 742,"y": 750}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 837,"y": 799}},\r
              "h1": {"coord": {"x": 801,"y": 783}},\r
              "h2": {"coord": {"x": 840,"y": 800}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 842,"y": 808}},\r
              "h1": {"coord": {"x": 844,"y": 801}},\r
              "h2": {"coord": {"x": 801,"y": 949}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 1040}},\r
              "h1": {"coord": {"x": 670,"y": 1040}},\r
              "h2": {"coord": {"x": 529,"y": 1040}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 1040}},\r
              "h1": {"coord": {"x": 429,"y": 1040}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": 1040}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 1040}},\r
              "h1": {"coord": {"x": 429,"y": 1040}, "use": false},\r
              "h2": {"coord": {"x": 233,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 590}},\r
              "h1": {"coord": {"x": 40,"y": 838}},\r
              "h2": {"coord": {"x": 90,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 590}},\r
              "h1": {"coord": {"x": -10,"y": 590}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": 175}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": -20}},\r
              "h1": {"coord": {"x": 169,"y": -20}},\r
              "h2": {"coord": {"x": 785,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 858,"y": 262}},\r
              "h1": {"coord": {"x": 858,"y": 205}},\r
              "h2": {"coord": {"x": 858,"y": 267}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x71": {\r
      "id": "glyph-0x71",\r
      "advanceWidth": 1090,\r
      "contextCharacters": "gqpgy",\r
      "shapes": [\r
        {\r
          "link": "glyph-0x70",\r
          "isFlippedEW": true\r
        }\r
      ]\r
    },\r
    "glyph-0x6F": {\r
      "id": "glyph-0x6F",\r
      "advanceWidth": 959,\r
      "contextCharacters": "bgo",\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 2,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 919,"y": 592}},\r
              "h1": {"coord": {"x": 869,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 918,"y": 839}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 480,"y": 1040}},\r
              "h1": {"coord": {"x": 725,"y": 1040}},\r
              "h2": {"coord": {"x": 235,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 41,"y": 592}},\r
              "h1": {"coord": {"x": 42,"y": 839}},\r
              "h2": {"coord": {"x": 91,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 592}},\r
              "h1": {"coord": {"x": -10,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": 175}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": -20}},\r
              "h1": {"coord": {"x": 170,"y": -20}},\r
              "h2": {"coord": {"x": 530,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": -20}},\r
              "h1": {"coord": {"x": 430,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 790,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 919,"y": 390}},\r
              "h1": {"coord": {"x": 918,"y": 175}},\r
              "h2": {"coord": {"x": 969,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 919,"y": 390}},\r
              "h1": {"coord": {"x": 869,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 969,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 919,"y": 592}},\r
              "h1": {"coord": {"x": 869,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 969,"y": 592}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 480,"y": 142}},\r
              "h1": {"coord": {"x": 587,"y": 142}},\r
              "h2": {"coord": {"x": 430,"y": 142}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 429,"y": 142}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": 142}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 429,"y": 142}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 142}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 392}},\r
              "h1": {"coord": {"x": 204,"y": 158}},\r
              "h2": {"coord": {"x": 254,"y": 392}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 590}},\r
              "h1": {"coord": {"x": 154,"y": 590}, "use": false},\r
              "h2": {"coord": {"x": 254,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 205,"y": 590}},\r
              "h1": {"coord": {"x": 155,"y": 590}, "use": false},\r
              "h2": {"coord": {"x": 205,"y": 766}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 480,"y": 897}},\r
              "h1": {"coord": {"x": 324,"y": 897}},\r
              "h2": {"coord": {"x": 636,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 590}},\r
              "h1": {"coord": {"x": 755,"y": 766}},\r
              "h2": {"coord": {"x": 805,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 590}},\r
              "h1": {"coord": {"x": 705,"y": 590}, "use": false},\r
              "h2": {"coord": {"x": 805,"y": 590}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 755,"y": 392}},\r
              "h1": {"coord": {"x": 705,"y": 392}, "use": false},\r
              "h2": {"coord": {"x": 755,"y": 158}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x65": {\r
      "id": "glyph-0x65",\r
      "advanceWidth": 932,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": -1,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": -20}},\r
              "h1": {"coord": {"x": 429,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": -20}},\r
              "h1": {"coord": {"x": 430,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 530,"y": -20}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": -20}},\r
              "h1": {"coord": {"x": 430,"y": -20}, "use": false},\r
              "h2": {"coord": {"x": 714,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 877,"y": 155}},\r
              "h1": {"coord": {"x": 843,"y": 106}},\r
              "h2": {"coord": {"x": 886,"y": 168}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 734,"y": 244}},\r
              "h1": {"coord": {"x": 745,"y": 255}},\r
              "h2": {"coord": {"x": 680,"y": 187}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 480,"y": 142}},\r
              "h1": {"coord": {"x": 564,"y": 142}},\r
              "h2": {"coord": {"x": 530,"y": 142}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 429,"y": 142}, "use": false},\r
              "h2": {"coord": {"x": 529,"y": 142}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": 142}},\r
              "h1": {"coord": {"x": 429,"y": 142}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 142}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 392}},\r
              "h1": {"coord": {"x": 204,"y": 158}},\r
              "h2": {"coord": {"x": 254,"y": 392}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 204,"y": 462}},\r
              "h1": {"coord": {"x": 154,"y": 462}, "use": false},\r
              "h2": {"coord": {"x": 254,"y": 462}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 880,"y": 489}},\r
              "h1": {"coord": {"x": 830,"y": 489}, "use": false},\r
              "h2": {"coord": {"x": 887,"y": 489}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 892,"y": 502}},\r
              "h1": {"coord": {"x": 892,"y": 495}},\r
              "h2": {"coord": {"x": 942,"y": 502}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 891,"y": 573}},\r
              "h1": {"coord": {"x": 841,"y": 573}, "use": false},\r
              "h2": {"coord": {"x": 941,"y": 573}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 891,"y": 573}},\r
              "h1": {"coord": {"x": 841,"y": 573}, "use": false},\r
              "h2": {"coord": {"x": 886,"y": 887}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 482,"y": 1040}},\r
              "h1": {"coord": {"x": 724,"y": 1040}},\r
              "h2": {"coord": {"x": 532,"y": 1040}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 481,"y": 1040}},\r
              "h1": {"coord": {"x": 431,"y": 1040}, "use": false},\r
              "h2": {"coord": {"x": 531,"y": 1040}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 481,"y": 1040}},\r
              "h1": {"coord": {"x": 431,"y": 1040}, "use": false},\r
              "h2": {"coord": {"x": 236,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 592}},\r
              "h1": {"coord": {"x": 41,"y": 839}},\r
              "h2": {"coord": {"x": 90,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 592}},\r
              "h1": {"coord": {"x": -10,"y": 592}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 592}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 390}},\r
              "h1": {"coord": {"x": -10,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 41,"y": 175}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 479,"y": -20}},\r
              "h1": {"coord": {"x": 169,"y": -20}},\r
              "h2": {"coord": {"x": 529,"y": -20}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -6,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 481,"y": 897}},\r
              "h1": {"coord": {"x": 335,"y": 897}},\r
              "h2": {"coord": {"x": 531,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 481,"y": 897}},\r
              "h1": {"coord": {"x": 431,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 531,"y": 897}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 482,"y": 897}},\r
              "h1": {"coord": {"x": 432,"y": 897}, "use": false},\r
              "h2": {"coord": {"x": 624,"y": 897}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 725,"y": 636}},\r
              "h1": {"coord": {"x": 711,"y": 788}},\r
              "h2": {"coord": {"x": 775,"y": 636}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 207,"y": 622}},\r
              "h1": {"coord": {"x": 157,"y": 622}, "use": false},\r
              "h2": {"coord": {"x": 221,"y": 781}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x66": {\r
      "id": "glyph-0x66",\r
      "advanceWidth": 771,\r
      "usedIn": [\r
        "liga-f-i",\r
        "liga-f-f-i",\r
        "liga-f-f",\r
        "liga-f-f",\r
        "liga-f-l"\r
      ],\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 0}},\r
              "h1": {"coord": {"x": 331,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 384,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 5}},\r
              "h1": {"coord": {"x": 386,"y": 2}},\r
              "h2": {"coord": {"x": 436,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 160}},\r
              "h1": {"coord": {"x": 336,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 386,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 165}},\r
              "h1": {"coord": {"x": 384,"y": 165}},\r
              "h2": {"coord": {"x": 431,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 165}},\r
              "h1": {"coord": {"x": 246,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 855}},\r
              "h1": {"coord": {"x": 246,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 501,"y": 855}},\r
              "h1": {"coord": {"x": 451,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 504,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 506,"y": 860}},\r
              "h1": {"coord": {"x": 506,"y": 857}},\r
              "h2": {"coord": {"x": 556,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 506,"y": 1015}},\r
              "h1": {"coord": {"x": 456,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 506,"y": 1018}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 501,"y": 1020}},\r
              "h1": {"coord": {"x": 504,"y": 1020}},\r
              "h2": {"coord": {"x": 551,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 1020}},\r
              "h1": {"coord": {"x": 246,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 1111}},\r
              "h1": {"coord": {"x": 246,"y": 1111}, "use": false},\r
              "h2": {"coord": {"x": 296,"y": 1287}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 514,"y": 1339}},\r
              "h1": {"coord": {"x": 368,"y": 1339}},\r
              "h2": {"coord": {"x": 568,"y": 1339}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 671,"y": 1327}},\r
              "h1": {"coord": {"x": 627,"y": 1333}},\r
              "h2": {"coord": {"x": 684,"y": 1325}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 1343}},\r
              "h1": {"coord": {"x": 692,"y": 1326}},\r
              "h2": {"coord": {"x": 746,"y": 1343}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 1343}},\r
              "h1": {"coord": {"x": 646,"y": 1343}, "use": false},\r
              "h2": {"coord": {"x": 746,"y": 1343}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 1343}},\r
              "h1": {"coord": {"x": 646,"y": 1343}, "use": false},\r
              "h2": {"coord": {"x": 746,"y": 1343}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 730,"y": 1466}},\r
              "h1": {"coord": {"x": 680,"y": 1466}, "use": false},\r
              "h2": {"coord": {"x": 733,"y": 1480}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 713,"y": 1493}},\r
              "h1": {"coord": {"x": 731,"y": 1489}},\r
              "h2": {"coord": {"x": 646,"y": 1508}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 514,"y": 1510}},\r
              "h1": {"coord": {"x": 541,"y": 1510}},\r
              "h2": {"coord": {"x": 136,"y": 1510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 1076}},\r
              "h1": {"coord": {"x": 131,"y": 1226}},\r
              "h2": {"coord": {"x": 181,"y": 1076}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 1020}},\r
              "h1": {"coord": {"x": 81,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 181,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 855}},\r
              "h1": {"coord": {"x": 81,"y": 855}},\r
              "h2": {"coord": {"x": 181,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 131,"y": 165}},\r
              "h1": {"coord": {"x": 81,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 181,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x67": {\r
      "id": "glyph-0x67",\r
      "advanceWidth": 1048,\r
      "contextCharacters": "bgy",\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 8,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1003,"y": 1020}},\r
              "h1": {"coord": {"x": 953,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 1053,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 872,"y": 1020}},\r
              "h1": {"coord": {"x": 822,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 849,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 814,"y": 991}},\r
              "h1": {"coord": {"x": 828,"y": 1009}},\r
              "h2": {"coord": {"x": 864,"y": 991}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 781,"y": 947}},\r
              "h1": {"coord": {"x": 731,"y": 947}, "use": false},\r
              "h2": {"coord": {"x": 704,"y": 1005}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 1040}},\r
              "h1": {"coord": {"x": 609,"y": 1040}},\r
              "h2": {"coord": {"x": 249,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 571}},\r
              "h1": {"coord": {"x": 40,"y": 830}},\r
              "h2": {"coord": {"x": 40,"y": 471}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 319}},\r
              "h1": {"coord": {"x": 71,"y": 385}},\r
              "h2": {"coord": {"x": 85,"y": 272}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 59,"y": 162}},\r
              "h1": {"coord": {"x": 59,"y": 211}},\r
              "h2": {"coord": {"x": 59,"y": 58}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 348,"y": -100}},\r
              "h1": {"coord": {"x": 118,"y": -100}},\r
              "h2": {"coord": {"x": 546,"y": -100}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 773,"y": -44}},\r
              "h1": {"coord": {"x": 661,"y": -44}},\r
              "h2": {"coord": {"x": 803,"y": -44}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 796,"y": -79}},\r
              "h1": {"coord": {"x": 796,"y": -58}},\r
              "h2": {"coord": {"x": 796,"y": -272}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": -287}},\r
              "h1": {"coord": {"x": 708,"y": -287}},\r
              "h2": {"coord": {"x": 373,"y": -287}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 228,"y": -271}},\r
              "h1": {"coord": {"x": 267,"y": -278}},\r
              "h2": {"coord": {"x": 222,"y": -270}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": -279}},\r
              "h1": {"coord": {"x": 216,"y": -273}},\r
              "h2": {"coord": {"x": 264,"y": -279}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 176,"y": -418}},\r
              "h1": {"coord": {"x": 126,"y": -418}, "use": false},\r
              "h2": {"coord": {"x": 174,"y": -425}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 185,"y": -433}},\r
              "h1": {"coord": {"x": 178,"y": -432}},\r
              "h2": {"coord": {"x": 249,"y": -447}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": -450}},\r
              "h1": {"coord": {"x": 365,"y": -450}},\r
              "h2": {"coord": {"x": 907,"y": -450}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 956,"y": -44}},\r
              "h1": {"coord": {"x": 956,"y": -259}},\r
              "h2": {"coord": {"x": 956,"y": 32}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 137}},\r
              "h1": {"coord": {"x": 947,"y": 137}},\r
              "h2": {"coord": {"x": 677,"y": 137}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 382,"y": 67}},\r
              "h1": {"coord": {"x": 545,"y": 67}},\r
              "h2": {"coord": {"x": 249,"y": 67}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 210,"y": 165}},\r
              "h1": {"coord": {"x": 210,"y": 103}},\r
              "h2": {"coord": {"x": 210,"y": 191}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 242,"y": 236}},\r
              "h1": {"coord": {"x": 223,"y": 217}},\r
              "h2": {"coord": {"x": 315,"y": 199}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 180}},\r
              "h1": {"coord": {"x": 405,"y": 180}},\r
              "h2": {"coord": {"x": 633,"y": 180}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 824,"y": 270}},\r
              "h1": {"coord": {"x": 743,"y": 211}},\r
              "h2": {"coord": {"x": 919,"y": 340}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 969,"y": 571}},\r
              "h1": {"coord": {"x": 969,"y": 444}},\r
              "h2": {"coord": {"x": 969,"y": 670}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 887,"y": 838}},\r
              "h1": {"coord": {"x": 939,"y": 762}},\r
              "h2": {"coord": {"x": 937,"y": 838}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 899,"y": 857}},\r
              "h1": {"coord": {"x": 849,"y": 857}, "use": false},\r
              "h2": {"coord": {"x": 949,"y": 857}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1003,"y": 857}},\r
              "h1": {"coord": {"x": 953,"y": 857}, "use": false},\r
              "h2": {"coord": {"x": 1006,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1008,"y": 862}},\r
              "h1": {"coord": {"x": 1008,"y": 859}},\r
              "h2": {"coord": {"x": 1058,"y": 862}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1008,"y": 1015}},\r
              "h1": {"coord": {"x": 958,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 1008,"y": 1018}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1003,"y": 1020}},\r
              "h1": {"coord": {"x": 1006,"y": 1020}},\r
              "h2": {"coord": {"x": 1053,"y": 1020}, "use": false}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": -5,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 209,"y": 568}},\r
              "h1": {"coord": {"x": 209,"y": 343}},\r
              "h2": {"coord": {"x": 209,"y": 751}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 901}},\r
              "h1": {"coord": {"x": 342,"y": 901}},\r
              "h2": {"coord": {"x": 668,"y": 901}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 800,"y": 568}},\r
              "h1": {"coord": {"x": 800,"y": 751}},\r
              "h2": {"coord": {"x": 800,"y": 343}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 505,"y": 319}},\r
              "h1": {"coord": {"x": 594,"y": 319}},\r
              "h2": {"coord": {"x": 416,"y": 319}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x68": {\r
      "id": "glyph-0x68",\r
      "advanceWidth": 1088,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 14,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 165}},\r
              "h1": {"coord": {"x": 1046,"y": 165}},\r
              "h2": {"coord": {"x": 1093,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 165}},\r
              "h1": {"coord": {"x": 933,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1033,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 635}},\r
              "h1": {"coord": {"x": 933,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 1033,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 635}},\r
              "h1": {"coord": {"x": 933,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 983,"y": 860}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 536,"y": 1039}},\r
              "h1": {"coord": {"x": 839,"y": 1039}},\r
              "h2": {"coord": {"x": 434,"y": 1039}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 975}},\r
              "h1": {"coord": {"x": 355,"y": 1015}},\r
              "h2": {"coord": {"x": 345,"y": 975}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 1408}},\r
              "h1": {"coord": {"x": 245,"y": 1408}, "use": false},\r
              "h2": {"coord": {"x": 295,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1490}},\r
              "h1": {"coord": {"x": 258,"y": 1490}},\r
              "h2": {"coord": {"x": 263,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1330}},\r
              "h1": {"coord": {"x": -10,"y": 1330}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1327}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1325}},\r
              "h1": {"coord": {"x": 42,"y": 1325}},\r
              "h2": {"coord": {"x": 95,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 1325}},\r
              "h1": {"coord": {"x": 80,"y": 1325}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 0}},\r
              "h1": {"coord": {"x": 307,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 360,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 5}},\r
              "h1": {"coord": {"x": 362,"y": 2}},\r
              "h2": {"coord": {"x": 412,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 160}},\r
              "h1": {"coord": {"x": 312,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 362,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 165}},\r
              "h1": {"coord": {"x": 360,"y": 165}},\r
              "h2": {"coord": {"x": 407,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 165}},\r
              "h1": {"coord": {"x": 245,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 345,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 791}},\r
              "h1": {"coord": {"x": 245,"y": 791}, "use": false},\r
              "h2": {"coord": {"x": 366,"y": 875}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 536,"y": 894}},\r
              "h1": {"coord": {"x": 482,"y": 894}},\r
              "h2": {"coord": {"x": 574,"y": 894}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 635}},\r
              "h1": {"coord": {"x": 816,"y": 876}},\r
              "h2": {"coord": {"x": 866,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 635}},\r
              "h1": {"coord": {"x": 766,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 866,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 165}},\r
              "h1": {"coord": {"x": 766,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 866,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 731,"y": 165}},\r
              "h1": {"coord": {"x": 681,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 728,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 160}},\r
              "h1": {"coord": {"x": 726,"y": 163}},\r
              "h2": {"coord": {"x": 776,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 5}},\r
              "h1": {"coord": {"x": 676,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 731,"y": 0}},\r
              "h1": {"coord": {"x": 728,"y": 0}},\r
              "h2": {"coord": {"x": 781,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 0}},\r
              "h1": {"coord": {"x": 993,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1046,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 5}},\r
              "h1": {"coord": {"x": 1048,"y": 2}},\r
              "h2": {"coord": {"x": 1098,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 160}},\r
              "h1": {"coord": {"x": 998,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 1048,"y": 163}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x69": {\r
      "id": "glyph-0x69",\r
      "advanceWidth": 412,\r
      "usedIn": [\r
        "liga-f-i"\r
      ],\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 855}},\r
              "h1": {"coord": {"x": 80,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 55,"y": 165}},\r
              "h1": {"coord": {"x": 5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 52,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 50,"y": 160}},\r
              "h1": {"coord": {"x": 50,"y": 163}},\r
              "h2": {"coord": {"x": 100,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 50,"y": 5}},\r
              "h1": {"coord": {"x": 0,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 50,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 55,"y": 0}},\r
              "h1": {"coord": {"x": 52,"y": 0}},\r
              "h2": {"coord": {"x": 105,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 367,"y": 0}},\r
              "h1": {"coord": {"x": 317,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 370,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 372,"y": 5}},\r
              "h1": {"coord": {"x": 372,"y": 2}},\r
              "h2": {"coord": {"x": 422,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 372,"y": 160}},\r
              "h1": {"coord": {"x": 322,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 372,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 367,"y": 165}},\r
              "h1": {"coord": {"x": 370,"y": 165}},\r
              "h2": {"coord": {"x": 417,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 165}},\r
              "h1": {"coord": {"x": 245,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 345,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 938}},\r
              "h1": {"coord": {"x": 245,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 295,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1020}},\r
              "h1": {"coord": {"x": 259,"y": 1020}},\r
              "h2": {"coord": {"x": 263,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 92,"y": 1187}},\r
              "h1": {"coord": {"x": 69,"y": 1204}},\r
              "h2": {"coord": {"x": 112.10440353665814,"y": 1172.1402234729048}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 171,"y": 1164}},\r
              "h1": {"coord": {"x": 139,"y": 1164}},\r
              "h2": {"coord": {"x": 203,"y": 1164}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 250,"y": 1187}},\r
              "h1": {"coord": {"x": 230,"y": 1172}},\r
              "h2": {"coord": {"x": 273,"y": 1204}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 286,"y": 1261}},\r
              "h1": {"coord": {"x": 286,"y": 1230}},\r
              "h2": {"coord": {"x": 286,"y": 1325}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 171,"y": 1377}},\r
              "h1": {"coord": {"x": 234,"y": 1377}},\r
              "h2": {"coord": {"x": 108,"y": 1377}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 56,"y": 1261}},\r
              "h1": {"coord": {"x": 56,"y": 1325}},\r
              "h2": {"coord": {"x": 56,"y": 1230}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6A": {\r
      "id": "glyph-0x6A",\r
      "advanceWidth": 300,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 5,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 57,"y": 1187}},\r
              "h1": {"coord": {"x": 34,"y": 1204}},\r
              "h2": {"coord": {"x": 77.10440353665814,"y": 1172.1402234729048}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 136,"y": 1165}},\r
              "h1": {"coord": {"x": 104,"y": 1165}},\r
              "h2": {"coord": {"x": 168,"y": 1165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 215,"y": 1187}},\r
              "h1": {"coord": {"x": 195,"y": 1172}},\r
              "h2": {"coord": {"x": 238,"y": 1204}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 251,"y": 1261}},\r
              "h1": {"coord": {"x": 251,"y": 1230}},\r
              "h2": {"coord": {"x": 251,"y": 1325}}\r
            },\r
            {\r
              "type": "symmetric",\r
              "p": {"coord": {"x": 136,"y": 1378}},\r
              "h1": {"coord": {"x": 199,"y": 1378}},\r
              "h2": {"coord": {"x": 73,"y": 1378}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 21,"y": 1261}},\r
              "h1": {"coord": {"x": 21,"y": 1325}},\r
              "h2": {"coord": {"x": 21,"y": 1230}}\r
            }\r
          ]\r
        },\r
        {\r
          "name": "Path 2",\r
          "winding": 7,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": -322,"y": -419}},\r
              "h1": {"coord": {"x": -340,"y": -415}},\r
              "h2": {"coord": {"x": -255,"y": -434}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -123,"y": -436}},\r
              "h1": {"coord": {"x": -150,"y": -436}},\r
              "h2": {"coord": {"x": 255,"y": -436}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 260,"y": -1}},\r
              "h1": {"coord": {"x": 260,"y": -151}},\r
              "h2": {"coord": {"x": 310,"y": -1}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 260,"y": 938}},\r
              "h1": {"coord": {"x": 210,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 260,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 178,"y": 1020}},\r
              "h1": {"coord": {"x": 224,"y": 1020}},\r
              "h2": {"coord": {"x": 228,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 10,"y": 1020}},\r
              "h1": {"coord": {"x": -40,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 7,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 5,"y": 1015}},\r
              "h1": {"coord": {"x": 5,"y": 1018}},\r
              "h2": {"coord": {"x": 55,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 5,"y": 861}},\r
              "h1": {"coord": {"x": -45,"y": 861}, "use": false},\r
              "h2": {"coord": {"x": 5,"y": 858}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 10,"y": 856}},\r
              "h1": {"coord": {"x": 7,"y": 856}},\r
              "h2": {"coord": {"x": 60,"y": 856}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 95,"y": 856}},\r
              "h1": {"coord": {"x": 45,"y": 856}, "use": false},\r
              "h2": {"coord": {"x": 145,"y": 856}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 95,"y": -37}},\r
              "h1": {"coord": {"x": 45,"y": -37}, "use": false},\r
              "h2": {"coord": {"x": 95,"y": -213}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -123,"y": -265}},\r
              "h1": {"coord": {"x": 23,"y": -265}},\r
              "h2": {"coord": {"x": -177,"y": -265}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -280,"y": -253}},\r
              "h1": {"coord": {"x": -236,"y": -259}},\r
              "h2": {"coord": {"x": -293,"y": -251}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -305,"y": -269}},\r
              "h1": {"coord": {"x": -301,"y": -252}},\r
              "h2": {"coord": {"x": -255,"y": -269}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -305,"y": -269}},\r
              "h1": {"coord": {"x": -355,"y": -269}, "use": false},\r
              "h2": {"coord": {"x": -255,"y": -269}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -305,"y": -269}},\r
              "h1": {"coord": {"x": -355,"y": -269}, "use": false},\r
              "h2": {"coord": {"x": -255,"y": -269}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": -339,"y": -392}},\r
              "h1": {"coord": {"x": -389,"y": -392}, "use": false},\r
              "h2": {"coord": {"x": -342,"y": -406}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6B": {\r
      "id": "glyph-0x6B",\r
      "advanceWidth": 846,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 16,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 0}},\r
              "h1": {"coord": {"x": 331,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 384,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 5}},\r
              "h1": {"coord": {"x": 386,"y": 2}},\r
              "h2": {"coord": {"x": 436,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 160}},\r
              "h1": {"coord": {"x": 336,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 386,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 165}},\r
              "h1": {"coord": {"x": 384,"y": 165}},\r
              "h2": {"coord": {"x": 431,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 165}},\r
              "h1": {"coord": {"x": 246,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 524}},\r
              "h1": {"coord": {"x": 246,"y": 524}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 524}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 312,"y": 540}},\r
              "h1": {"coord": {"x": 262,"y": 540}, "use": false},\r
              "h2": {"coord": {"x": 400,"y": 394}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 623,"y": 26}},\r
              "h1": {"coord": {"x": 613,"y": 40}},\r
              "h2": {"coord": {"x": 636,"y": 8}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 685,"y": 0}},\r
              "h1": {"coord": {"x": 662,"y": 0}},\r
              "h2": {"coord": {"x": 735,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 0}},\r
              "h1": {"coord": {"x": 751,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 804,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 5}},\r
              "h1": {"coord": {"x": 806,"y": 2}},\r
              "h2": {"coord": {"x": 856,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 160}},\r
              "h1": {"coord": {"x": 756,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 806,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 165}},\r
              "h1": {"coord": {"x": 804,"y": 165}},\r
              "h2": {"coord": {"x": 851,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 165}},\r
              "h1": {"coord": {"x": 676,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 776,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 425,"y": 650}},\r
              "h1": {"coord": {"x": 375,"y": 650}, "use": false},\r
              "h2": {"coord": {"x": 475,"y": 650}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 634,"y": 854}},\r
              "h1": {"coord": {"x": 584,"y": 854}, "use": false},\r
              "h2": {"coord": {"x": 684,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 854}},\r
              "h1": {"coord": {"x": 751,"y": 854}, "use": false},\r
              "h2": {"coord": {"x": 804,"y": 854}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 859}},\r
              "h1": {"coord": {"x": 806,"y": 856}},\r
              "h2": {"coord": {"x": 856,"y": 859}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 806,"y": 1014}},\r
              "h1": {"coord": {"x": 756,"y": 1014}, "use": false},\r
              "h2": {"coord": {"x": 806,"y": 1017}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 801,"y": 1019}},\r
              "h1": {"coord": {"x": 804,"y": 1019}},\r
              "h2": {"coord": {"x": 851,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 632,"y": 1019}},\r
              "h1": {"coord": {"x": 582,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 609,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 574,"y": 995}},\r
              "h1": {"coord": {"x": 589,"y": 1010}},\r
              "h2": {"coord": {"x": 562,"y": 983}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 724}},\r
              "h1": {"coord": {"x": 376,"y": 802}},\r
              "h2": {"coord": {"x": 346,"y": 724}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 1407}},\r
              "h1": {"coord": {"x": 246,"y": 1407}, "use": false},\r
              "h2": {"coord": {"x": 296,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1490}},\r
              "h1": {"coord": {"x": 259,"y": 1490}},\r
              "h2": {"coord": {"x": 263,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1330}},\r
              "h1": {"coord": {"x": -10,"y": 1330}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1327}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1325}},\r
              "h1": {"coord": {"x": 42,"y": 1325}},\r
              "h2": {"coord": {"x": 95,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 1325}},\r
              "h1": {"coord": {"x": 80,"y": 1325}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6C": {\r
      "id": "glyph-0x6C",\r
      "advanceWidth": 426,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 0}},\r
              "h1": {"coord": {"x": 331,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 384,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 5}},\r
              "h1": {"coord": {"x": 386,"y": 2}},\r
              "h2": {"coord": {"x": 436,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 386,"y": 160}},\r
              "h1": {"coord": {"x": 336,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 386,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 381,"y": 165}},\r
              "h1": {"coord": {"x": 384,"y": 165}},\r
              "h2": {"coord": {"x": 431,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 165}},\r
              "h1": {"coord": {"x": 246,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 346,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 296,"y": 1407}},\r
              "h1": {"coord": {"x": 246,"y": 1407}, "use": false},\r
              "h2": {"coord": {"x": 296,"y": 1453}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1490}},\r
              "h1": {"coord": {"x": 259,"y": 1490}},\r
              "h2": {"coord": {"x": 263,"y": 1490}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1490}},\r
              "h1": {"coord": {"x": -5,"y": 1490}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1490}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1485}},\r
              "h1": {"coord": {"x": 40,"y": 1488}},\r
              "h2": {"coord": {"x": 90,"y": 1485}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1330}},\r
              "h1": {"coord": {"x": -10,"y": 1330}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 1327}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1325}},\r
              "h1": {"coord": {"x": 42,"y": 1325}},\r
              "h2": {"coord": {"x": 95,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 1325}},\r
              "h1": {"coord": {"x": 80,"y": 1325}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 1325}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6D": {\r
      "id": "glyph-0x6D",\r
      "advanceWidth": 1556,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 16,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1511,"y": 165}},\r
              "h1": {"coord": {"x": 1461,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1561,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1451,"y": 165}},\r
              "h1": {"coord": {"x": 1401,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1501,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1451,"y": 635}},\r
              "h1": {"coord": {"x": 1401,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 1501,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1451,"y": 635}},\r
              "h1": {"coord": {"x": 1401,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 1451,"y": 860}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1034,"y": 1039}},\r
              "h1": {"coord": {"x": 1337,"y": 1039}},\r
              "h2": {"coord": {"x": 920,"y": 1039}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 773,"y": 960}},\r
              "h1": {"coord": {"x": 835,"y": 1009}},\r
              "h2": {"coord": {"x": 707,"y": 1010}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 493,"y": 1039}},\r
              "h1": {"coord": {"x": 616,"y": 1039}},\r
              "h2": {"coord": {"x": 403,"y": 1039}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 275,"y": 989}},\r
              "h1": {"coord": {"x": 332,"y": 1021}},\r
              "h2": {"coord": {"x": 260,"y": 1007}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 1019}},\r
              "h1": {"coord": {"x": 238,"y": 1019}},\r
              "h2": {"coord": {"x": 262,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1019}},\r
              "h1": {"coord": {"x": -5,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1014}},\r
              "h1": {"coord": {"x": 40,"y": 1017}},\r
              "h2": {"coord": {"x": 90,"y": 1014}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 859}},\r
              "h1": {"coord": {"x": -10,"y": 859}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 856}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 854}},\r
              "h1": {"coord": {"x": 42,"y": 854}},\r
              "h2": {"coord": {"x": 95,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 129,"y": 854}},\r
              "h1": {"coord": {"x": 79,"y": 854}, "use": false},\r
              "h2": {"coord": {"x": 179,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 129,"y": 165}},\r
              "h1": {"coord": {"x": 79,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 179,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 0}},\r
              "h1": {"coord": {"x": 307,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 360,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 5}},\r
              "h1": {"coord": {"x": 362,"y": 2}},\r
              "h2": {"coord": {"x": 412,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 160}},\r
              "h1": {"coord": {"x": 312,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 362,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 165}},\r
              "h1": {"coord": {"x": 360,"y": 165}},\r
              "h2": {"coord": {"x": 407,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 165}},\r
              "h1": {"coord": {"x": 244,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 344,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 830}},\r
              "h1": {"coord": {"x": 244,"y": 830}, "use": false},\r
              "h2": {"coord": {"x": 363,"y": 881}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 493,"y": 894}},\r
              "h1": {"coord": {"x": 449,"y": 894}},\r
              "h2": {"coord": {"x": 531,"y": 894}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 743,"y": 635}},\r
              "h1": {"coord": {"x": 743,"y": 876}},\r
              "h2": {"coord": {"x": 793,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 743,"y": 635}},\r
              "h1": {"coord": {"x": 693,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 793,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 743,"y": 165}},\r
              "h1": {"coord": {"x": 693,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 793,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 701,"y": 165}},\r
              "h1": {"coord": {"x": 651,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 698,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 160}},\r
              "h1": {"coord": {"x": 696,"y": 163}},\r
              "h2": {"coord": {"x": 746,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 696,"y": 5}},\r
              "h1": {"coord": {"x": 646,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 696,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 701,"y": 0}},\r
              "h1": {"coord": {"x": 698,"y": 0}},\r
              "h2": {"coord": {"x": 751,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 953,"y": 0}},\r
              "h1": {"coord": {"x": 903,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 956,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 958,"y": 5}},\r
              "h1": {"coord": {"x": 958,"y": 2}},\r
              "h2": {"coord": {"x": 1008,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 958,"y": 160}},\r
              "h1": {"coord": {"x": 908,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 958,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 953,"y": 165}},\r
              "h1": {"coord": {"x": 956,"y": 165}},\r
              "h2": {"coord": {"x": 1003,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 910,"y": 165}},\r
              "h1": {"coord": {"x": 860,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 960,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 910,"y": 635}},\r
              "h1": {"coord": {"x": 860,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 960,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 910,"y": 635}},\r
              "h1": {"coord": {"x": 860,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 910,"y": 714}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 865,"y": 849}},\r
              "h1": {"coord": {"x": 896,"y": 787}},\r
              "h2": {"coord": {"x": 927,"y": 884}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1034,"y": 894}},\r
              "h1": {"coord": {"x": 996,"y": 894}},\r
              "h2": {"coord": {"x": 1072,"y": 894}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1284,"y": 635}},\r
              "h1": {"coord": {"x": 1284,"y": 876}},\r
              "h2": {"coord": {"x": 1334,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1284,"y": 635}},\r
              "h1": {"coord": {"x": 1234,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 1334,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1284,"y": 165}},\r
              "h1": {"coord": {"x": 1234,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1334,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1199,"y": 165}},\r
              "h1": {"coord": {"x": 1149,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1196,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1194,"y": 160}},\r
              "h1": {"coord": {"x": 1194,"y": 163}},\r
              "h2": {"coord": {"x": 1244,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1194,"y": 5}},\r
              "h1": {"coord": {"x": 1144,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 1194,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1199,"y": 0}},\r
              "h1": {"coord": {"x": 1196,"y": 0}},\r
              "h2": {"coord": {"x": 1249,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1511,"y": 0}},\r
              "h1": {"coord": {"x": 1461,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1514,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1516,"y": 5}},\r
              "h1": {"coord": {"x": 1516,"y": 2}},\r
              "h2": {"coord": {"x": 1566,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1516,"y": 160}},\r
              "h1": {"coord": {"x": 1466,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 1516,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1511,"y": 165}},\r
              "h1": {"coord": {"x": 1514,"y": 165}},\r
              "h2": {"coord": {"x": 1561,"y": 165}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x6E": {\r
      "id": "glyph-0x6E",\r
      "advanceWidth": 1088,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 13,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 165}},\r
              "h1": {"coord": {"x": 1046,"y": 165}},\r
              "h2": {"coord": {"x": 1093,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 165}},\r
              "h1": {"coord": {"x": 933,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 1033,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 983,"y": 635}},\r
              "h1": {"coord": {"x": 933,"y": 635}, "use": false},\r
              "h2": {"coord": {"x": 983,"y": 860}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 536,"y": 1039}},\r
              "h1": {"coord": {"x": 839,"y": 1039}},\r
              "h2": {"coord": {"x": 429,"y": 1039}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 287,"y": 969}},\r
              "h1": {"coord": {"x": 348,"y": 1012}},\r
              "h2": {"coord": {"x": 274,"y": 998}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 212,"y": 1019}},\r
              "h1": {"coord": {"x": 246,"y": 1019}},\r
              "h2": {"coord": {"x": 262,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1019}},\r
              "h1": {"coord": {"x": -5,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1014}},\r
              "h1": {"coord": {"x": 40,"y": 1017}},\r
              "h2": {"coord": {"x": 90,"y": 1014}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 859}},\r
              "h1": {"coord": {"x": -10,"y": 859}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 856}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 854}},\r
              "h1": {"coord": {"x": 42,"y": 854}},\r
              "h2": {"coord": {"x": 95,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 129,"y": 854}},\r
              "h1": {"coord": {"x": 79,"y": 854}, "use": false},\r
              "h2": {"coord": {"x": 179,"y": 854}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 129,"y": 165}},\r
              "h1": {"coord": {"x": 79,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 179,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 0}},\r
              "h1": {"coord": {"x": 307,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 360,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 5}},\r
              "h1": {"coord": {"x": 362,"y": 2}},\r
              "h2": {"coord": {"x": 412,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 362,"y": 160}},\r
              "h1": {"coord": {"x": 312,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 362,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 357,"y": 165}},\r
              "h1": {"coord": {"x": 360,"y": 165}},\r
              "h2": {"coord": {"x": 407,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 165}},\r
              "h1": {"coord": {"x": 244,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 344,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 294,"y": 790}},\r
              "h1": {"coord": {"x": 244,"y": 790}, "use": false},\r
              "h2": {"coord": {"x": 365,"y": 874}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 536,"y": 894}},\r
              "h1": {"coord": {"x": 482,"y": 894}},\r
              "h2": {"coord": {"x": 574,"y": 894}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 635}},\r
              "h1": {"coord": {"x": 816,"y": 876}},\r
              "h2": {"coord": {"x": 866,"y": 635}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 816,"y": 165}},\r
              "h1": {"coord": {"x": 766,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 866,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 731,"y": 165}},\r
              "h1": {"coord": {"x": 681,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 728,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 160}},\r
              "h1": {"coord": {"x": 726,"y": 163}},\r
              "h2": {"coord": {"x": 776,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 5}},\r
              "h1": {"coord": {"x": 676,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 731,"y": 0}},\r
              "h1": {"coord": {"x": 728,"y": 0}},\r
              "h2": {"coord": {"x": 781,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1043,"y": 0}},\r
              "h1": {"coord": {"x": 993,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1046,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 5}},\r
              "h1": {"coord": {"x": 1048,"y": 2}},\r
              "h2": {"coord": {"x": 1098,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1048,"y": 160}},\r
              "h1": {"coord": {"x": 998,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 1048,"y": 163}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x72": {\r
      "id": "glyph-0x72",\r
      "advanceWidth": 866,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 12,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 855}},\r
              "h1": {"coord": {"x": 80,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 130,"y": 165}},\r
              "h1": {"coord": {"x": 80,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 180,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 69,"y": 165}},\r
              "h1": {"coord": {"x": 19,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 66,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 64,"y": 160}},\r
              "h1": {"coord": {"x": 64,"y": 163}},\r
              "h2": {"coord": {"x": 114,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 64,"y": 5}},\r
              "h1": {"coord": {"x": 14,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 64,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 69,"y": 0}},\r
              "h1": {"coord": {"x": 66,"y": 0}},\r
              "h2": {"coord": {"x": 119,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 380,"y": 0}},\r
              "h1": {"coord": {"x": 330,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 383,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 385,"y": 5}},\r
              "h1": {"coord": {"x": 385,"y": 2}},\r
              "h2": {"coord": {"x": 435,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 385,"y": 160}},\r
              "h1": {"coord": {"x": 335,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 385,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 380,"y": 165}},\r
              "h1": {"coord": {"x": 383,"y": 165}},\r
              "h2": {"coord": {"x": 430,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 165}},\r
              "h1": {"coord": {"x": 245,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 345,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 698}},\r
              "h1": {"coord": {"x": 245,"y": 698}, "use": false},\r
              "h2": {"coord": {"x": 340,"y": 814}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 596,"y": 864}},\r
              "h1": {"coord": {"x": 464,"y": 864}},\r
              "h2": {"coord": {"x": 613,"y": 864}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 737,"y": 844}},\r
              "h1": {"coord": {"x": 675,"y": 864}},\r
              "h2": {"coord": {"x": 751,"y": 840}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 764,"y": 852}},\r
              "h1": {"coord": {"x": 756,"y": 838}},\r
              "h2": {"coord": {"x": 814,"y": 852}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 823,"y": 979}},\r
              "h1": {"coord": {"x": 773,"y": 979}, "use": false},\r
              "h2": {"coord": {"x": 829,"y": 991}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 819,"y": 1001}},\r
              "h1": {"coord": {"x": 827,"y": 997}},\r
              "h2": {"coord": {"x": 869,"y": 1001}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 814,"y": 1002}},\r
              "h1": {"coord": {"x": 764,"y": 1002}, "use": false},\r
              "h2": {"coord": {"x": 864,"y": 1002}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 814,"y": 1002}},\r
              "h1": {"coord": {"x": 764,"y": 1002}, "use": false},\r
              "h2": {"coord": {"x": 752,"y": 1026}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 596,"y": 1040}},\r
              "h1": {"coord": {"x": 679,"y": 1040}},\r
              "h2": {"coord": {"x": 455,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 922}},\r
              "h1": {"coord": {"x": 359,"y": 991}},\r
              "h2": {"coord": {"x": 345,"y": 922}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 938}},\r
              "h1": {"coord": {"x": 245,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 295,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1020}},\r
              "h1": {"coord": {"x": 259,"y": 1020}},\r
              "h2": {"coord": {"x": 263,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x73": {\r
      "id": "glyph-0x73",\r
      "advanceWidth": 925,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 6,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 307,"y": 390}},\r
              "h1": {"coord": {"x": 257,"y": 390}, "use": false},\r
              "h2": {"coord": {"x": 505,"y": 390}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 712,"y": 416}},\r
              "h1": {"coord": {"x": 600,"y": 416}},\r
              "h2": {"coord": {"x": 742,"y": 416}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 735,"y": 381}},\r
              "h1": {"coord": {"x": 735,"y": 402}},\r
              "h2": {"coord": {"x": 735,"y": 188}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 374,"y": 143}},\r
              "h1": {"coord": {"x": 631,"y": 143}},\r
              "h2": {"coord": {"x": 322,"y": 143}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 97,"y": 159}},\r
              "h1": {"coord": {"x": 136,"y": 152}},\r
              "h2": {"coord": {"x": 91,"y": 160}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 83,"y": 151}},\r
              "h1": {"coord": {"x": 85,"y": 157}},\r
              "h2": {"coord": {"x": 133,"y": 151}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 12}},\r
              "h1": {"coord": {"x": -5,"y": 12}, "use": false},\r
              "h2": {"coord": {"x": 43,"y": 5}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 54,"y": -3}},\r
              "h1": {"coord": {"x": 47,"y": -2}},\r
              "h2": {"coord": {"x": 118,"y": -17}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 374,"y": -20}},\r
              "h1": {"coord": {"x": 314,"y": -20}},\r
              "h2": {"coord": {"x": 814,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 885,"y": 406}},\r
              "h1": {"coord": {"x": 885,"y": 191}},\r
              "h2": {"coord": {"x": 885,"y": 482}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 730,"y": 587}},\r
              "h1": {"coord": {"x": 876,"y": 587}},\r
              "h2": {"coord": {"x": 606,"y": 587}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 351,"y": 547}},\r
              "h1": {"coord": {"x": 514,"y": 547}},\r
              "h2": {"coord": {"x": 218,"y": 547}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 199,"y": 645}},\r
              "h1": {"coord": {"x": 199,"y": 583}},\r
              "h2": {"coord": {"x": 199,"y": 695}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 560,"y": 879}},\r
              "h1": {"coord": {"x": 186,"y": 879}},\r
              "h2": {"coord": {"x": 676,"y": 879}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 807,"y": 826}},\r
              "h1": {"coord": {"x": 772,"y": 834}},\r
              "h2": {"coord": {"x": 820,"y": 823}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 832,"y": 842}},\r
              "h1": {"coord": {"x": 828,"y": 825}},\r
              "h2": {"coord": {"x": 882,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 832,"y": 842}},\r
              "h1": {"coord": {"x": 782,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 882,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 832,"y": 842}},\r
              "h1": {"coord": {"x": 782,"y": 842}, "use": false},\r
              "h2": {"coord": {"x": 882,"y": 842}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 865,"y": 965}},\r
              "h1": {"coord": {"x": 815,"y": 965}, "use": false},\r
              "h2": {"coord": {"x": 868,"y": 979}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 849,"y": 992}},\r
              "h1": {"coord": {"x": 866,"y": 985}},\r
              "h2": {"coord": {"x": 816,"y": 1005}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 560,"y": 1040}},\r
              "h1": {"coord": {"x": 684,"y": 1040}},\r
              "h2": {"coord": {"x": 55,"y": 1040}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 612}},\r
              "h1": {"coord": {"x": 40,"y": 666}},\r
              "h2": {"coord": {"x": 40,"y": 510}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 307,"y": 390}},\r
              "h1": {"coord": {"x": 99,"y": 390}},\r
              "h2": {"coord": {"x": 357,"y": 390}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x74": {\r
      "id": "glyph-0x74",\r
      "advanceWidth": 546,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 501,"y": 855}},\r
              "h1": {"coord": {"x": 451,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 504,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 506,"y": 860}},\r
              "h1": {"coord": {"x": 506,"y": 857}},\r
              "h2": {"coord": {"x": 556,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 506,"y": 1015}},\r
              "h1": {"coord": {"x": 456,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 506,"y": 1018}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 501,"y": 1020}},\r
              "h1": {"coord": {"x": 504,"y": 1020}},\r
              "h2": {"coord": {"x": 551,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 318,"y": 1020}},\r
              "h1": {"coord": {"x": 268,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 368,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 318,"y": 1382}},\r
              "h1": {"coord": {"x": 268,"y": 1382}, "use": false},\r
              "h2": {"coord": {"x": 318,"y": 1387}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 310,"y": 1390}},\r
              "h1": {"coord": {"x": 315,"y": 1390}},\r
              "h2": {"coord": {"x": 360,"y": 1390}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 162,"y": 1390}},\r
              "h1": {"coord": {"x": 112,"y": 1390}, "use": false},\r
              "h2": {"coord": {"x": 157,"y": 1390}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 153,"y": 1382}},\r
              "h1": {"coord": {"x": 153,"y": 1387}},\r
              "h2": {"coord": {"x": 203,"y": 1382}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 153,"y": 1020}},\r
              "h1": {"coord": {"x": 103,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 203,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 855}},\r
              "h1": {"coord": {"x": 42,"y": 855}},\r
              "h2": {"coord": {"x": 95,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 153,"y": 855}},\r
              "h1": {"coord": {"x": 103,"y": 855}},\r
              "h2": {"coord": {"x": 203,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 153,"y": 91}},\r
              "h1": {"coord": {"x": 103,"y": 91}, "use": false},\r
              "h2": {"coord": {"x": 153,"y": 41}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 244,"y": 0}},\r
              "h1": {"coord": {"x": 194,"y": 0}},\r
              "h2": {"coord": {"x": 294,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 446,"y": 0}},\r
              "h1": {"coord": {"x": 396,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 449,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 451,"y": 5}},\r
              "h1": {"coord": {"x": 451,"y": 2}},\r
              "h2": {"coord": {"x": 501,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 451,"y": 160}},\r
              "h1": {"coord": {"x": 401,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 451,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 446,"y": 165}},\r
              "h1": {"coord": {"x": 449,"y": 165}},\r
              "h2": {"coord": {"x": 496,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 327,"y": 165}},\r
              "h1": {"coord": {"x": 277,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 322,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 318,"y": 174}},\r
              "h1": {"coord": {"x": 318,"y": 169}},\r
              "h2": {"coord": {"x": 368,"y": 174}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 318,"y": 855}},\r
              "h1": {"coord": {"x": 268,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 368,"y": 855}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x75": {\r
      "id": "glyph-0x75",\r
      "advanceWidth": 1022,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 10,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 366}},\r
              "h1": {"coord": {"x": -10,"y": 366}, "use": false},\r
              "h2": {"coord": {"x": 47,"y": 149}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 487,"y": -20}},\r
              "h1": {"coord": {"x": 192,"y": -20}},\r
              "h2": {"coord": {"x": 594,"y": -20}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 735,"y": 50}},\r
              "h1": {"coord": {"x": 674,"y": 7}},\r
              "h2": {"coord": {"x": 748,"y": 21}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 811,"y": 0}},\r
              "h1": {"coord": {"x": 777,"y": 0}},\r
              "h2": {"coord": {"x": 861,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 977,"y": 0}},\r
              "h1": {"coord": {"x": 927,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 982,"y": 5}},\r
              "h1": {"coord": {"x": 982,"y": 2}},\r
              "h2": {"coord": {"x": 1032,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 982,"y": 160}},\r
              "h1": {"coord": {"x": 932,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 982,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 977,"y": 165}},\r
              "h1": {"coord": {"x": 980,"y": 165}},\r
              "h2": {"coord": {"x": 1027,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 893,"y": 165}},\r
              "h1": {"coord": {"x": 843,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 943,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 892,"y": 855}},\r
              "h1": {"coord": {"x": 842,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 942,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 977,"y": 855}},\r
              "h1": {"coord": {"x": 927,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 980,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 982,"y": 860}},\r
              "h1": {"coord": {"x": 982,"y": 857}},\r
              "h2": {"coord": {"x": 1032,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 982,"y": 1014}},\r
              "h1": {"coord": {"x": 932,"y": 1014}, "use": false},\r
              "h2": {"coord": {"x": 982,"y": 1017}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 977,"y": 1019}},\r
              "h1": {"coord": {"x": 980,"y": 1019}},\r
              "h2": {"coord": {"x": 1027,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 810,"y": 1019}},\r
              "h1": {"coord": {"x": 760,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 765,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 729,"y": 937}},\r
              "h1": {"coord": {"x": 729,"y": 982}},\r
              "h2": {"coord": {"x": 779,"y": 937}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 729,"y": 229}},\r
              "h1": {"coord": {"x": 679,"y": 229}, "use": false},\r
              "h2": {"coord": {"x": 658,"y": 145}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 487,"y": 125}},\r
              "h1": {"coord": {"x": 541,"y": 125}},\r
              "h2": {"coord": {"x": 449,"y": 125}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 206,"y": 384}},\r
              "h1": {"coord": {"x": 206,"y": 143}},\r
              "h2": {"coord": {"x": 256,"y": 384}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 205,"y": 855}},\r
              "h1": {"coord": {"x": 155,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 255,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 290,"y": 855}},\r
              "h1": {"coord": {"x": 240,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 293,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 860}},\r
              "h1": {"coord": {"x": 295,"y": 857}},\r
              "h2": {"coord": {"x": 345,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 295,"y": 1015}},\r
              "h1": {"coord": {"x": 245,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 295,"y": 1018}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 290,"y": 1020}},\r
              "h1": {"coord": {"x": 293,"y": 1020}},\r
              "h2": {"coord": {"x": 340,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 122,"y": 1020}},\r
              "h1": {"coord": {"x": 72,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 76,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 937}},\r
              "h1": {"coord": {"x": 40,"y": 983}},\r
              "h2": {"coord": {"x": 90,"y": 937}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 366}},\r
              "h1": {"coord": {"x": -10,"y": 366}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 366}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x76": {\r
      "id": "glyph-0x76",\r
      "advanceWidth": 1089,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 6,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1044,"y": 1020}},\r
              "h1": {"coord": {"x": 1047,"y": 1020}},\r
              "h2": {"coord": {"x": 1094,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 906,"y": 1020}},\r
              "h1": {"coord": {"x": 856,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 873,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 831,"y": 972}},\r
              "h1": {"coord": {"x": 844,"y": 1000}},\r
              "h2": {"coord": {"x": 881,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 831,"y": 972}},\r
              "h1": {"coord": {"x": 781,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 881,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 571,"y": 292}},\r
              "h1": {"coord": {"x": 521,"y": 292}, "use": false},\r
              "h2": {"coord": {"x": 621,"y": 292}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 224,"y": 1020}},\r
              "h1": {"coord": {"x": 174,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 274,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1020}},\r
              "h1": {"coord": {"x": -10,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 521,"y": 0}},\r
              "h1": {"coord": {"x": 471,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 571,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 632,"y": 0}},\r
              "h1": {"coord": {"x": 582,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 682,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 953,"y": 855}},\r
              "h1": {"coord": {"x": 903,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 1003,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1044,"y": 855}},\r
              "h1": {"coord": {"x": 994,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 1047,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1049,"y": 860}},\r
              "h1": {"coord": {"x": 1049,"y": 857}},\r
              "h2": {"coord": {"x": 1099,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1049,"y": 1015}},\r
              "h1": {"coord": {"x": 999,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 1049,"y": 1018}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x77": {\r
      "id": "glyph-0x77",\r
      "advanceWidth": 1374,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 8,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1329,"y": 1020}},\r
              "h1": {"coord": {"x": 1332,"y": 1020}},\r
              "h2": {"coord": {"x": 1379,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1191,"y": 1020}},\r
              "h1": {"coord": {"x": 1141,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 1158,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1116,"y": 972}},\r
              "h1": {"coord": {"x": 1129,"y": 1000}},\r
              "h2": {"coord": {"x": 1166,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1116,"y": 972}},\r
              "h1": {"coord": {"x": 1066,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 1166,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1115,"y": 970}},\r
              "h1": {"coord": {"x": 1065,"y": 970}, "use": false},\r
              "h2": {"coord": {"x": 1112,"y": 962}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1109,"y": 946}},\r
              "h1": {"coord": {"x": 1110,"y": 955}},\r
              "h2": {"coord": {"x": 1159,"y": 946}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 944,"y": 312}},\r
              "h1": {"coord": {"x": 894,"y": 312}, "use": false},\r
              "h2": {"coord": {"x": 994,"y": 312}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 726,"y": 820}},\r
              "h1": {"coord": {"x": 676,"y": 820}, "use": false},\r
              "h2": {"coord": {"x": 776,"y": 820}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 680,"y": 820}},\r
              "h1": {"coord": {"x": 630,"y": 820}, "use": false},\r
              "h2": {"coord": {"x": 730,"y": 820}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 451,"y": 334}},\r
              "h1": {"coord": {"x": 401,"y": 334}, "use": false},\r
              "h2": {"coord": {"x": 501,"y": 334}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 214,"y": 1020}},\r
              "h1": {"coord": {"x": 164,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 264,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1020}},\r
              "h1": {"coord": {"x": -10,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 90,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 391,"y": 0}},\r
              "h1": {"coord": {"x": 341,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 441,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 502,"y": 0}},\r
              "h1": {"coord": {"x": 452,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 552,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 700,"y": 458}},\r
              "h1": {"coord": {"x": 650,"y": 458}, "use": false},\r
              "h2": {"coord": {"x": 750,"y": 458}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 926,"y": 0}},\r
              "h1": {"coord": {"x": 876,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 976,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1037,"y": 0}},\r
              "h1": {"coord": {"x": 987,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 1087,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1245,"y": 855}},\r
              "h1": {"coord": {"x": 1195,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 1295,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1329,"y": 855}},\r
              "h1": {"coord": {"x": 1279,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 1332,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1334,"y": 860}},\r
              "h1": {"coord": {"x": 1334,"y": 857}},\r
              "h2": {"coord": {"x": 1384,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1334,"y": 1015}},\r
              "h1": {"coord": {"x": 1284,"y": 1015}, "use": false},\r
              "h2": {"coord": {"x": 1334,"y": 1018}}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x78": {\r
      "id": "glyph-0x78",\r
      "advanceWidth": 977,\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 11,\r
          "pathPoints": [\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": -5,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 183,"y": 0}},\r
              "h1": {"coord": {"x": 133,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 217,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 259,"y": 50}},\r
              "h1": {"coord": {"x": 246,"y": 21}},\r
              "h2": {"coord": {"x": 309,"y": 50}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 485,"y": 387}},\r
              "h1": {"coord": {"x": 435,"y": 387}, "use": false},\r
              "h2": {"coord": {"x": 535,"y": 387}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 711,"y": 43}},\r
              "h1": {"coord": {"x": 661,"y": 43}, "use": false},\r
              "h2": {"coord": {"x": 761,"y": 43}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 712,"y": 43}},\r
              "h1": {"coord": {"x": 662,"y": 43}, "use": false},\r
              "h2": {"coord": {"x": 726,"y": 17}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 784,"y": 0}},\r
              "h1": {"coord": {"x": 753,"y": 0}},\r
              "h2": {"coord": {"x": 834,"y": 0}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 922,"y": 0}},\r
              "h1": {"coord": {"x": 872,"y": 0}, "use": false},\r
              "h2": {"coord": {"x": 925,"y": 0}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 927,"y": 5}},\r
              "h1": {"coord": {"x": 927,"y": 2}},\r
              "h2": {"coord": {"x": 977,"y": 5}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 927,"y": 160}},\r
              "h1": {"coord": {"x": 877,"y": 160}, "use": false},\r
              "h2": {"coord": {"x": 927,"y": 163}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 922,"y": 165}},\r
              "h1": {"coord": {"x": 925,"y": 165}},\r
              "h2": {"coord": {"x": 972,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 823,"y": 165}},\r
              "h1": {"coord": {"x": 773,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 873,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 590,"y": 516}},\r
              "h1": {"coord": {"x": 540,"y": 516}, "use": false},\r
              "h2": {"coord": {"x": 640,"y": 516}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 825,"y": 855}},\r
              "h1": {"coord": {"x": 775,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 875,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 932,"y": 855}},\r
              "h1": {"coord": {"x": 882,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 935,"y": 855}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 937,"y": 860}},\r
              "h1": {"coord": {"x": 937,"y": 857}},\r
              "h2": {"coord": {"x": 987,"y": 860}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 937,"y": 1014}},\r
              "h1": {"coord": {"x": 887,"y": 1014}, "use": false},\r
              "h2": {"coord": {"x": 937,"y": 1017}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 932,"y": 1019}},\r
              "h1": {"coord": {"x": 935,"y": 1019}},\r
              "h2": {"coord": {"x": 982,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 794,"y": 1019}},\r
              "h1": {"coord": {"x": 744,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 761,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 719,"y": 972}},\r
              "h1": {"coord": {"x": 732,"y": 1000}},\r
              "h2": {"coord": {"x": 769,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 719,"y": 972}},\r
              "h1": {"coord": {"x": 669,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 769,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 495,"y": 659}},\r
              "h1": {"coord": {"x": 445,"y": 659}, "use": false},\r
              "h2": {"coord": {"x": 545,"y": 659}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 288,"y": 972}},\r
              "h1": {"coord": {"x": 238,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 338,"y": 972}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 288,"y": 972}},\r
              "h1": {"coord": {"x": 238,"y": 972}, "use": false},\r
              "h2": {"coord": {"x": 275,"y": 1000}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 213,"y": 1019}},\r
              "h1": {"coord": {"x": 246,"y": 1019}},\r
              "h2": {"coord": {"x": 263,"y": 1019}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 75,"y": 1019}},\r
              "h1": {"coord": {"x": 25,"y": 1019}, "use": false},\r
              "h2": {"coord": {"x": 72,"y": 1019}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 70,"y": 1014}},\r
              "h1": {"coord": {"x": 70,"y": 1017}},\r
              "h2": {"coord": {"x": 120,"y": 1014}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 70,"y": 860}},\r
              "h1": {"coord": {"x": 20,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 70,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 75,"y": 855}},\r
              "h1": {"coord": {"x": 72,"y": 855}},\r
              "h2": {"coord": {"x": 125,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 178,"y": 855}},\r
              "h1": {"coord": {"x": 128,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 228,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 391,"y": 531}},\r
              "h1": {"coord": {"x": 341,"y": 531}, "use": false},\r
              "h2": {"coord": {"x": 441,"y": 531}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 140,"y": 165}},\r
              "h1": {"coord": {"x": 90,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 190,"y": 165}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 165}},\r
              "h1": {"coord": {"x": -5,"y": 165}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 165}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 160}},\r
              "h1": {"coord": {"x": 40,"y": 163}},\r
              "h2": {"coord": {"x": 90,"y": 160}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 5}},\r
              "h1": {"coord": {"x": -10,"y": 5}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 2}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 0}},\r
              "h1": {"coord": {"x": 42,"y": 0}},\r
              "h2": {"coord": {"x": 95,"y": 0}, "use": false}\r
            }\r
          ]\r
        }\r
      ]\r
    },\r
    "glyph-0x79": {\r
      "id": "glyph-0x79",\r
      "advanceWidth": 1067,\r
      "contextCharacters": "bgy",\r
      "shapes": [\r
        {\r
          "name": "Path 1",\r
          "winding": 9,\r
          "pathPoints": [\r
            {\r
              "type": "flat",\r
              "p": {"coord": {"x": 474,"y": -279}},\r
              "h1": {"coord": {"x": 763,"y": -279}},\r
              "h2": {"coord": {"x": 420,"y": -279}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 277,"y": -267}},\r
              "h1": {"coord": {"x": 321,"y": -273}},\r
              "h2": {"coord": {"x": 264,"y": -265}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 252,"y": -283}},\r
              "h1": {"coord": {"x": 256,"y": -266}},\r
              "h2": {"coord": {"x": 302,"y": -283}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 252,"y": -283}},\r
              "h1": {"coord": {"x": 202,"y": -283}, "use": false},\r
              "h2": {"coord": {"x": 302,"y": -283}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 252,"y": -283}},\r
              "h1": {"coord": {"x": 202,"y": -283}, "use": false},\r
              "h2": {"coord": {"x": 302,"y": -283}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 218,"y": -406}},\r
              "h1": {"coord": {"x": 168,"y": -406}, "use": false},\r
              "h2": {"coord": {"x": 215,"y": -420}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 235,"y": -433}},\r
              "h1": {"coord": {"x": 217,"y": -429}},\r
              "h2": {"coord": {"x": 302,"y": -448}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 478,"y": -450}},\r
              "h1": {"coord": {"x": 451,"y": -450}},\r
              "h2": {"coord": {"x": 969,"y": -450}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1027,"y": -57}},\r
              "h1": {"coord": {"x": 1021,"y": -212}},\r
              "h2": {"coord": {"x": 1077,"y": -57}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1027,"y": -57}},\r
              "h1": {"coord": {"x": 977,"y": -57}, "use": false},\r
              "h2": {"coord": {"x": 1077,"y": -57}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 1027,"y": 938}},\r
              "h1": {"coord": {"x": 977,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 1027,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 945,"y": 1020}},\r
              "h1": {"coord": {"x": 991,"y": 1020}},\r
              "h2": {"coord": {"x": 995,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 1020}},\r
              "h1": {"coord": {"x": 737,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 784,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 782,"y": 1015}},\r
              "h1": {"coord": {"x": 782,"y": 1018}},\r
              "h2": {"coord": {"x": 832,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 782,"y": 860}},\r
              "h1": {"coord": {"x": 732,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 782,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 787,"y": 855}},\r
              "h1": {"coord": {"x": 784,"y": 855}},\r
              "h2": {"coord": {"x": 837,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 862,"y": 855}},\r
              "h1": {"coord": {"x": 812,"y": 855}, "use": false},\r
              "h2": {"coord": {"x": 912,"y": 855}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 862,"y": 277}},\r
              "h1": {"coord": {"x": 812,"y": 277}, "use": false},\r
              "h2": {"coord": {"x": 812,"y": 175}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 578,"y": 139}},\r
              "h1": {"coord": {"x": 678,"y": 139}},\r
              "h2": {"coord": {"x": 540,"y": 139}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 285,"y": 386}},\r
              "h1": {"coord": {"x": 285,"y": 151}},\r
              "h2": {"coord": {"x": 335,"y": 386}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 285,"y": 938}},\r
              "h1": {"coord": {"x": 235,"y": 938}, "use": false},\r
              "h2": {"coord": {"x": 285,"y": 984}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 203,"y": 1020}},\r
              "h1": {"coord": {"x": 249,"y": 1020}},\r
              "h2": {"coord": {"x": 253,"y": 1020}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 45,"y": 1020}},\r
              "h1": {"coord": {"x": -5,"y": 1020}, "use": false},\r
              "h2": {"coord": {"x": 42,"y": 1020}}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 1015}},\r
              "h1": {"coord": {"x": 40,"y": 1018}},\r
              "h2": {"coord": {"x": 90,"y": 1015}, "use": false}\r
            },\r
            {\r
              "type": "corner",\r
              "p": {"coord": {"x": 40,"y": 860}},\r
              "h1": {"coord": {"x": -10,"y": 860}, "use": false},\r
              "h2": {"coord": {"x": 40,"y": 857}}\r
            },\r
            {\r
              "type": "corner",\r
            },\r
            {\r
