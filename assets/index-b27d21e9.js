var Ye=Object.defineProperty;var c=(e,t)=>Ye(e,"name",{value:t,configurable:!0});import{R as H,r as f}from"./index-07ae930a.js";import{r as qe}from"./index-db6ac595.js";import{a as j,j as x,F as P}from"./jsx-runtime-de59bf6d.js";var y="colors",I="sizes",g="space",Ce={gap:g,gridGap:g,columnGap:g,gridColumnGap:g,rowGap:g,gridRowGap:g,inset:g,insetBlock:g,insetBlockEnd:g,insetBlockStart:g,insetInline:g,insetInlineEnd:g,insetInlineStart:g,margin:g,marginTop:g,marginRight:g,marginBottom:g,marginLeft:g,marginBlock:g,marginBlockEnd:g,marginBlockStart:g,marginInline:g,marginInlineEnd:g,marginInlineStart:g,padding:g,paddingTop:g,paddingRight:g,paddingBottom:g,paddingLeft:g,paddingBlock:g,paddingBlockEnd:g,paddingBlockStart:g,paddingInline:g,paddingInlineEnd:g,paddingInlineStart:g,top:g,right:g,bottom:g,left:g,scrollMargin:g,scrollMarginTop:g,scrollMarginRight:g,scrollMarginBottom:g,scrollMarginLeft:g,scrollMarginX:g,scrollMarginY:g,scrollMarginBlock:g,scrollMarginBlockEnd:g,scrollMarginBlockStart:g,scrollMarginInline:g,scrollMarginInlineEnd:g,scrollMarginInlineStart:g,scrollPadding:g,scrollPaddingTop:g,scrollPaddingRight:g,scrollPaddingBottom:g,scrollPaddingLeft:g,scrollPaddingX:g,scrollPaddingY:g,scrollPaddingBlock:g,scrollPaddingBlockEnd:g,scrollPaddingBlockStart:g,scrollPaddingInline:g,scrollPaddingInlineEnd:g,scrollPaddingInlineStart:g,fontSize:"fontSizes",background:y,backgroundColor:y,backgroundImage:y,borderImage:y,border:y,borderBlock:y,borderBlockEnd:y,borderBlockStart:y,borderBottom:y,borderBottomColor:y,borderColor:y,borderInline:y,borderInlineEnd:y,borderInlineStart:y,borderLeft:y,borderLeftColor:y,borderRight:y,borderRightColor:y,borderTop:y,borderTopColor:y,caretColor:y,color:y,columnRuleColor:y,fill:y,outline:y,outlineColor:y,stroke:y,textDecorationColor:y,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:I,minBlockSize:I,maxBlockSize:I,inlineSize:I,minInlineSize:I,maxInlineSize:I,width:I,minWidth:I,maxWidth:I,height:I,minHeight:I,maxHeight:I,flexBasis:I,gridTemplateColumns:I,gridTemplateRows:I,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Ze=c((e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,"i"),G=c(()=>{const e=Object.create(null);return(t,n,...r)=>{const o=(i=>JSON.stringify(i,Ze))(t);return o in e?e[o]:e[o]=n(t,...r)}},"o"),N=Symbol.for("sxs.internal"),fe=c((e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),"s"),he=c(e=>{for(const t in e)return!0;return!1},"a"),{hasOwnProperty:Ke}=Object.prototype,ce=c(e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),"d"),Je=/\s+(?![^()]*\))/,U=c(e=>t=>e(...typeof t=="string"?String(t).split(Je):[t]),"p"),me={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:U((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:U((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:U((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:U((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:U((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:U((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},le=/([\d.]+)([^]*)/,Xe=c((e,t)=>e.length?e.reduce((n,r)=>(n.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(o)?`:is(${r})`:r):r+" "+o)),n),[]):t,"f"),Qe=c((e,t)=>e in et&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(n,r,o,i)=>r+(o==="stretch"?`-moz-available${i};${ce(e)}:${r}-webkit-fill-available`:`-moz-fit-content${i};${ce(e)}:${r}fit-content`)+i):String(t),"m"),et={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},O=c(e=>e?e+"-":"","S"),we=c((e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(r,o,i,l,a)=>l=="$"==!!i?r:(o||l=="--"?"calc(":"")+"var(--"+(l==="$"?O(t)+(a.includes("$")?"":O(n))+a.replace(/\$/g,"-"):a)+")"+(o||l=="--"?"*"+(o||"")+(i||"1")+")":"")),"k"),tt=/\s*,\s*(?![^()]*\))/,nt=Object.prototype.toString,V=c((e,t,n,r,o)=>{let i,l,a;const s=c((u,m,p)=>{let d,h;const b=c(S=>{for(d in S){const k=d.charCodeAt(0)===64,R=k&&Array.isArray(S[d])?S[d]:[S[d]];for(h of R){const w=/[A-Z]/.test($=d)?$:$.replace(/-[^]/g,z=>z[1].toUpperCase()),Y=typeof h=="object"&&h&&h.toString===nt&&(!r.utils[w]||!m.length);if(w in r.utils&&!Y){const z=r.utils[w];if(z!==l){l=z,b(z(h)),l=null;continue}}else if(w in me){const z=me[w];if(z!==a){a=z,b(z(h)),a=null;continue}}if(k&&(v=d.slice(1)in r.media?"@media "+r.media[d.slice(1)]:d,d=v.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(z,E,A,W,B,M)=>{const D=le.test(E),ee=.0625*(D?-1:1),[te,ge]=D?[W,E]:[E,W];return"("+(A[0]==="="?"":A[0]===">"===D?"max-":"min-")+te+":"+(A[0]!=="="&&A.length===1?ge.replace(le,(Ge,ae,se)=>Number(ae)+ee*(A===">"?1:-1)+se):ge)+(B?") and ("+(B[0]===">"?"min-":"max-")+te+":"+(B.length===1?M.replace(le,(Ge,ae,se)=>Number(ae)+ee*(B===">"?-1:1)+se):M):"")+")"})),Y){const z=k?p.concat(d):[...p],E=k?[...m]:Xe(m,d.split(tt));i!==void 0&&o(be(...i)),i=void 0,s(h,E,z)}else i===void 0&&(i=[[],m,p]),d=k||d.charCodeAt(0)!==36?d:`--${O(r.prefix)}${d.slice(1).replace(/\$/g,"-")}`,h=Y?h:typeof h=="number"?h&&w in rt?String(h)+"px":String(h):we(Qe(w,h??""),r.prefix,r.themeMap[w]),i[0].push(`${k?`${d} `:`${ce(d)}:`}${h}`)}}var v,$},"p");b(u),i!==void 0&&o(be(...i)),i=void 0},"a");s(e,t,n)},"$"),be=c((e,t,n)=>`${n.map(r=>`${r}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,"x"),rt={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},$e=c(e=>String.fromCharCode(e+(e>25?39:97)),"R"),L=c(e=>(t=>{let n,r="";for(n=Math.abs(t);n>52;n=n/52|0)r=$e(n%52)+r;return $e(n%52)+r})(((t,n)=>{let r=n.length;for(;r;)t=33*t^n.charCodeAt(--r);return t})(5381,JSON.stringify(e))>>>0),"z"),Z=["themed","global","styled","onevar","resonevar","allvar","inline"],ot=c(e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},"j"),it=c(e=>{let t;const n=c(()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,l)=>{const{cssText:a}=i;let s="";if(a.startsWith("--sxs"))return"";if(o[l-1]&&(s=o[l-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const u in t.rules)if(t.rules[u].group===i)return`--sxs{--sxs:${[...t.rules[u].cache].join(" ")}}${a}`;return i.cssRules.length?`${s}${a}`:""}return a}).join("")},"r"),r=c(()=>{if(t){const{rules:a,sheet:s}=t;if(!s.deleteRule){for(;Object(Object(s.cssRules)[0]).type===3;)s.cssRules.splice(0,1);s.cssRules=[]}for(const u in a)delete a[u]}const o=Object(e).styleSheets||[];for(const a of o)if(ot(a)){for(let s=0,u=a.cssRules;u[s];++s){const m=Object(u[s]);if(m.type!==1)continue;const p=Object(u[s+1]);if(p.type!==4)continue;++s;const{cssText:d}=m;if(!d.startsWith("--sxs"))continue;const h=d.slice(14,-3).trim().split(/\s+/),b=Z[h[0]];b&&(t||(t={sheet:a,reset:r,rules:{},toString:n}),t.rules[b]={group:p,index:s,cache:new Set(h)})}if(t)break}if(!t){const a=c((s,u)=>({type:u,cssRules:[],insertRule(m,p){this.cssRules.splice(p,0,a(m,{import:3,undefined:1}[(m.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return s==="@media{}"?`@media{${[].map.call(this.cssRules,m=>m.cssText).join("")}}`:s}}),"i");t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:a("","text/css"),rules:{},reset:r,toString:n}}const{sheet:i,rules:l}=t;for(let a=Z.length-1;a>=0;--a){const s=Z[a];if(!l[s]){const u=Z[a+1],m=l[u]?l[u].index:i.cssRules.length;i.insertRule("@media{}",m),i.insertRule(`--sxs{--sxs:${a}}`,m),l[s]={group:i.cssRules[m+1],index:m,cache:new Set([a])}}at(l[s])}},"n");return r(),t},"E"),at=c(e=>{const t=e.group;let n=t.cssRules.length;e.apply=r=>{try{t.insertRule(r,n),++n}catch{}}},"v"),q=Symbol(),st=G(),xe=c((e,t)=>st(e,()=>(...n)=>{let r={type:null,composers:new Set};for(const o of n)if(o!=null)if(o[N]){r.type==null&&(r.type=o[N].type);for(const i of o[N].composers)r.composers.add(i)}else o.constructor!==Object||o.$$typeof?r.type==null&&(r.type=o):r.composers.add(lt(o,e));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),ct(e,r,t)}),"M"),lt=c(({variants:e,compoundVariants:t,defaultVariants:n,...r},o)=>{const i=`${O(o.prefix)}c-${L(r)}`,l=[],a=[],s=Object.create(null),u=[];for(const d in n)s[d]=String(n[d]);if(typeof e=="object"&&e)for(const d in e){m=s,p=d,Ke.call(m,p)||(s[d]="undefined");const h=e[d];for(const b in h){const S={[d]:String(b)};String(b)==="undefined"&&u.push(d);const v=h[b],$=[S,v,!he(v)];l.push($)}}var m,p;if(typeof t=="object"&&t)for(const d of t){let{css:h,...b}=d;h=typeof h=="object"&&h||{};for(const v in b)b[v]=String(b[v]);const S=[b,h,!he(h)];a.push(S)}return[i,r,l,a,s,u]},"C"),ct=c((e,t,n)=>{const[r,o,i,l]=dt(t.composers),a=typeof t.type=="function"||t.type.$$typeof?(p=>{function d(){for(let h=0;h<d[q].length;h++){const[b,S]=d[q][h];p.rules[b].apply(S)}return d[q]=[],null}return c(d,"t"),d[q]=[],d.rules={},Z.forEach(h=>d.rules[h]={apply:b=>d[q].push([h,b])}),d})(n):null,s=(a||n).rules,u=`.${r}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,m=c(p=>{p=typeof p=="object"&&p||ut;const{css:d,...h}=p,b={};for(const $ in i)if(delete h[$],$ in p){let k=p[$];typeof k=="object"&&k?b[$]={"@initial":i[$],...k}:(k=String(k),b[$]=k!=="undefined"||l.has($)?k:i[$])}else b[$]=i[$];const S=new Set([...o]);for(const[$,k,R,w]of t.composers){n.rules.styled.cache.has($)||(n.rules.styled.cache.add($),V(k,[`.${$}`],[],e,E=>{s.styled.apply(E)}));const Y=ve(R,b,e.media),z=ve(w,b,e.media,!0);for(const E of Y)if(E!==void 0)for(const[A,W,B]of E){const M=`${$}-${L(W)}-${A}`;S.add(M);const D=(B?n.rules.resonevar:n.rules.onevar).cache,ee=B?s.resonevar:s.onevar;D.has(M)||(D.add(M),V(W,[`.${M}`],[],e,te=>{ee.apply(te)}))}for(const E of z)if(E!==void 0)for(const[A,W]of E){const B=`${$}-${L(W)}-${A}`;S.add(B),n.rules.allvar.cache.has(B)||(n.rules.allvar.cache.add(B),V(W,[`.${B}`],[],e,M=>{s.allvar.apply(M)}))}}if(typeof d=="object"&&d){const $=`${r}-i${L(d)}-css`;S.add($),n.rules.inline.cache.has($)||(n.rules.inline.cache.add($),V(d,[`.${$}`],[],e,k=>{s.inline.apply(k)}))}for(const $ of String(p.className||"").trim().split(/\s+/))$&&S.add($);const v=h.className=[...S].join(" ");return{type:t.type,className:v,selector:u,props:h,toString:()=>v,deferredInjector:a}},"p");return fe(m,{className:r,selector:u,[N]:t,toString:()=>(n.rules.styled.cache.has(r)||m(),r)})},"P"),dt=c(e=>{let t="";const n=[],r={},o=[];for(const[i,,,,l,a]of e){t===""&&(t=i),n.push(i),o.push(...a);for(const s in l){const u=l[s];(r[s]===void 0||u!=="undefined"||a.includes(u))&&(r[s]=u)}}return[t,n,r,new Set(o)]},"L"),ve=c((e,t,n,r)=>{const o=[];e:for(let[i,l,a]of e){if(a)continue;let s,u=0,m=!1;for(s in i){const p=i[s];let d=t[s];if(d!==p){if(typeof d!="object"||!d)continue e;{let h,b,S=0;for(const v in d){if(p===String(d[v])){if(v!=="@initial"){const $=v.slice(1);(b=b||[]).push($ in n?n[$]:v.replace(/^@media ?/,"")),m=!0}u+=S,h=!0}++S}if(b&&b.length&&(l={["@media "+b.join(", ")]:l}),!h)continue e}}}(o[u]=o[u]||[]).push([r?"cv":`${s}-${i[s]}`,l,m])}return o},"O"),ut={},ft=G(),pt=c((e,t)=>ft(e,()=>(...n)=>{const r=c(()=>{for(let o of n){o=typeof o=="object"&&o||{};let i=L(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let l=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let a of[].concat(o["@import"]))a=a.includes('"')||a.includes("'")?a:`"${a}"`,t.sheet.insertRule(`@import ${a};`,l++);delete o["@import"]}V(o,[],[],e,l=>{t.rules.global.apply(l)})}}return""},"n");return fe(r,{toString:r})}),"D"),gt=G(),ht=c((e,t)=>gt(e,()=>n=>{const r=`${O(e.prefix)}k-${L(n)}`,o=c(()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const i=[];V(n,[],[],e,a=>i.push(a));const l=`@keyframes ${r}{${i.join("")}}`;t.rules.global.apply(l)}return r},"i");return fe(o,{get name(){return o()},toString:o})}),"V"),mt=c(class{constructor(e,t,n,r){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=n==null?"":String(n),this.prefix=r==null?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+O(this.prefix)+O(this.scale)+this.token}toString(){return this.computedValue}},"G"),bt=G(),$t=c((e,t)=>bt(e,()=>(n,r)=>{r=typeof n=="object"&&n||Object(r);const o=`.${n=(n=typeof n=="string"?n:"")||`${O(e.prefix)}t-${L(r)}`}`,i={},l=[];for(const s in r){i[s]={};for(const u in r[s]){const m=`--${O(e.prefix)}${s}-${u}`,p=we(String(r[s][u]),e.prefix,s);i[s][u]=new mt(u,p,s,e.prefix),l.push(`${m}:${p}`)}}const a=c(()=>{if(l.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const s=`${r===e.theme?":root,":""}.${n}{${l.join(";")}}`;t.rules.themed.apply(s)}return n},"s");return{...i,get className(){return a()},selector:o,toString:a}}),"J"),xt=G(),vt=G(),yt=c(e=>{const t=(n=>{let r=!1;const o=xt(n,i=>{r=!0;const l="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",a=typeof i.media=="object"&&i.media||{},s=typeof i.root=="object"?i.root||null:globalThis.document||null,u=typeof i.theme=="object"&&i.theme||{},m={prefix:l,media:a,theme:u,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...Ce},utils:typeof i.utils=="object"&&i.utils||{}},p=it(s),d={css:xe(m,p),globalCss:pt(m,p),keyframes:ht(m,p),createTheme:$t(m,p),reset(){p.reset(),d.theme.toString()},theme:{},sheet:p,config:m,prefix:l,getCssText:p.toString,toString:p.toString};return String(d.theme=d.createTheme(u)),d});return r||o.reset(),o})(e);return t.styled=(({config:n,sheet:r})=>vt(n,()=>{const o=xe(n,r);return(...i)=>{const l=o(...i),a=l[N].type,s=H.forwardRef((u,m)=>{const p=u&&u.as||a,{props:d,deferredInjector:h}=l(u);return delete d.as,d.ref=m,h?H.createElement(H.Fragment,null,H.createElement(p,d),H.createElement(h,null)):H.createElement(p,d)});return s.className=l.className,s.displayName=`Styled.${a.displayName||a.name||a}`,s.selector=l.selector,s.toString=()=>l.selector,s[N]=l[N],s}}))(t),t},"q"),St=f.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),Re=c(function(t,n,r){var o=r.get(t);return o?o(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)},"renderPathForWeight");function ye(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}c(ye,"_objectWithoutPropertiesLoose");var Ie=f.forwardRef(function(e,t){var n=e.alt,r=e.color,o=e.size,i=e.weight,l=e.mirrored,a=e.children,s=e.renderPath,u=ye(e,["alt","color","size","weight","mirrored","children","renderPath"]),m=f.useContext(St),p=m.color,d=p===void 0?"currentColor":p,h=m.size,b=m.weight,S=b===void 0?"regular":b,v=m.mirrored,$=v===void 0?!1:v,k=ye(m,["color","size","weight","mirrored"]);return j("svg",{...Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o??h,height:o??h,fill:r??d,viewBox:"0 0 256 256",transform:l||$?"scale(-1, 1)":void 0},k,u),children:[!!n&&x("title",{children:n}),a,x("rect",{width:"256",height:"256",fill:"none"}),s(i??S,r??d)]})});Ie.displayName="IconBase";const ze=Ie;var T=new Map;T.set("bold",function(e){return x(P,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});T.set("duotone",function(e){return x(P,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});T.set("fill",function(){return x(P,{children:x("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});T.set("light",function(e){return x(P,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});T.set("thin",function(e){return x(P,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});T.set("regular",function(e){return x(P,{children:x("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var kt=c(function(t,n){return Re(t,n,T)},"renderPath"),Ee=f.forwardRef(function(e,t){return x(ze,{...Object.assign({ref:t},e,{renderPath:kt})})});Ee.displayName="Check";const Ct=Ee;var F=new Map;F.set("bold",function(e){return j(P,{children:[x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})]})});F.set("duotone",function(e){return j(P,{children:[x("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});F.set("fill",function(){return x(P,{children:x("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"})})});F.set("light",function(e){return j(P,{children:[x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})]})});F.set("thin",function(e){return j(P,{children:[x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})]})});F.set("regular",function(e){return j(P,{children:[x("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),x("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})]})});var wt=c(function(t,n){return Re(t,n,F)},"renderPath"),Be=f.forwardRef(function(e,t){return x(ze,{...Object.assign({ref:t},e,{renderPath:wt})})});Be.displayName="User";const Rt=Be;function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K.apply(this,arguments)}c(K,"_extends$3");function Pe(e,t=[]){let n=[];function r(i,l){const a=f.createContext(l),s=n.length;n=[...n,l];function u(p){const{scope:d,children:h,...b}=p,S=(d==null?void 0:d[e][s])||a,v=f.useMemo(()=>b,Object.values(b));return f.createElement(S.Provider,{value:v},h)}c(u,"Provider");function m(p,d){const h=(d==null?void 0:d[e][s])||a,b=f.useContext(h);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${p}\` must be used within \`${i}\``)}return c(m,"useContext"),u.displayName=i+"Provider",[u,m]}c(r,"$c512c27ab02ef895$export$fd42f52fd3ae1109");const o=c(()=>{const i=n.map(l=>f.createContext(l));return c(function(a){const s=(a==null?void 0:a[e])||i;return f.useMemo(()=>({[`__scope${e}`]:{...a,[e]:s}}),[a,s])},"useScope")},"createScope");return o.scopeName=e,[r,It(o,...t)]}c(Pe,"$c512c27ab02ef895$export$50c7b4e9d9f19c1");function It(...e){const t=e[0];if(e.length===1)return t;const n=c(()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return c(function(i){const l=r.reduce((a,{useScope:s,scopeName:u})=>{const p=s(i)[`__scope${u}`];return{...a,...p}},{});return f.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])},"useComposedScopes")},"createScope1");return n.scopeName=t.scopeName,n}c(It,"$c512c27ab02ef895$var$composeContextScopes");function pe(e){const t=f.useRef(e);return f.useEffect(()=>{t.current=e}),f.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}c(pe,"$b1b2314f5f9a1d84$export$25bec8c6f54ee79a");const J=globalThis!=null&&globalThis.document?f.useLayoutEffect:()=>{};function de(){return de=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},de.apply(this,arguments)}c(de,"_extends$2");function re(){return re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},re.apply(this,arguments)}c(re,"_extends$1");function zt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}c(zt,"$6ed0406888f73fc4$var$setRef");function je(...e){return t=>e.forEach(n=>zt(n,t))}c(je,"$6ed0406888f73fc4$export$43e446d32b3d21af");function Ae(...e){return f.useCallback(je(...e),e)}c(Ae,"$6ed0406888f73fc4$export$c7b2cbe3552a0d05");const Me=f.forwardRef((e,t)=>{const{children:n,...r}=e,o=f.Children.toArray(n),i=o.find(Bt);if(i){const l=i.props.children,a=o.map(s=>s===i?f.Children.count(l)>1?f.Children.only(null):f.isValidElement(l)?l.props.children:null:s);return f.createElement(ue,re({},r,{ref:t}),f.isValidElement(l)?f.cloneElement(l,void 0,a):null)}return f.createElement(ue,re({},r,{ref:t}),n)});Me.displayName="Slot";const ue=f.forwardRef((e,t)=>{const{children:n,...r}=e;return f.isValidElement(n)?f.cloneElement(n,{...Pt(r,n.props),ref:t?je(t,n.ref):n.ref}):f.Children.count(n)>1?f.Children.only(null):null});ue.displayName="SlotClone";const Et=c(({children:e})=>f.createElement(f.Fragment,null,e),"$5e63c961fc1ce211$export$d9f1ccf0bdb05d45");function Bt(e){return f.isValidElement(e)&&e.type===Et}c(Bt,"$5e63c961fc1ce211$var$isSlottable");function Pt(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}c(Pt,"$5e63c961fc1ce211$var$mergeProps");const jt=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],Q=jt.reduce((e,t)=>{const n=f.forwardRef((r,o)=>{const{asChild:i,...l}=r,a=i?Me:t;return f.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),f.createElement(a,de({},l,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),Oe="Avatar",[At,Dn]=Pe(Oe),[Mt,We]=At(Oe),Ot=f.forwardRef((e,t)=>{const{__scopeAvatar:n,...r}=e,[o,i]=f.useState("idle");return f.createElement(Mt,{scope:n,imageLoadingStatus:o,onImageLoadingStatusChange:i},f.createElement(Q.span,K({},r,{ref:t})))}),Wt="AvatarImage",Nt=f.forwardRef((e,t)=>{const{__scopeAvatar:n,src:r,onLoadingStatusChange:o=c(()=>{},"onLoadingStatusChange"),...i}=e,l=We(Wt,n),a=Tt(r),s=pe(u=>{o(u),l.onImageLoadingStatusChange(u)});return J(()=>{a!=="idle"&&s(a)},[a,s]),a==="loaded"?f.createElement(Q.img,K({},i,{ref:t,src:r})):null}),Lt="AvatarFallback",_t=f.forwardRef((e,t)=>{const{__scopeAvatar:n,delayMs:r,...o}=e,i=We(Lt,n),[l,a]=f.useState(r===void 0);return f.useEffect(()=>{if(r!==void 0){const s=window.setTimeout(()=>a(!0),r);return()=>window.clearTimeout(s)}},[r]),l&&i.imageLoadingStatus!=="loaded"?f.createElement(Q.span,K({},o,{ref:t})):null});function Tt(e){const[t,n]=f.useState("idle");return J(()=>{if(!e){n("error");return}let r=!0;const o=new window.Image,i=c(l=>()=>{r&&n(l)},"updateStatus");return n("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{r=!1}},[e]),t}c(Tt,"$cddcb0b647441e34$var$useImageLoadingStatus");const Ft=Ot,Dt=Nt,Ht=_t;function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X.apply(this,arguments)}c(X,"_extends");function Se(e,t,{checkForDefaultPrevented:n=!0}={}){return c(function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)},"handleEvent")}c(Se,"$e42e1063c40fb3ef$export$b9ecd428b558ff10");function Ut({prop:e,defaultProp:t,onChange:n=c(()=>{},"onChange")}){const[r,o]=Vt({defaultProp:t,onChange:n}),i=e!==void 0,l=i?e:r,a=pe(n),s=f.useCallback(u=>{if(i){const p=typeof u=="function"?u(e):u;p!==e&&a(p)}else o(u)},[i,e,o,a]);return[l,s]}c(Ut,"$71cd76cc60e0454e$export$6f32135080cb4c3");function Vt({defaultProp:e,onChange:t}){const n=f.useState(e),[r]=n,o=f.useRef(r),i=pe(t);return f.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}c(Vt,"$71cd76cc60e0454e$var$useUncontrolledState");function Gt(e){const t=f.useRef({value:e,previous:e});return f.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}c(Gt,"$010c2913dbd2fe3d$export$5cae361ad82dce8b");function Yt(e){const[t,n]=f.useState(void 0);return J(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,a;if("borderBoxSize"in i){const s=i.borderBoxSize,u=Array.isArray(s)?s[0]:s;l=u.inlineSize,a=u.blockSize}else l=e.offsetWidth,a=e.offsetHeight;n({width:l,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}c(Yt,"$db6c3485150b8e66$export$1ab7ae714698c4b8");function qt(e,t){return f.useReducer((n,r)=>{const o=t[n][r];return o??n},e)}c(qt,"$fe963b355347cc68$export$3e6543de14f8614f");const Ne=c(e=>{const{present:t,children:n}=e,r=Zt(t),o=typeof n=="function"?n({present:r.isPresent}):f.Children.only(n),i=Ae(r.ref,o.ref);return typeof n=="function"||r.isPresent?f.cloneElement(o,{ref:i}):null},"$921a889cee6df7e8$export$99c2b779aa4e8b8b");Ne.displayName="Presence";function Zt(e){const[t,n]=f.useState(),r=f.useRef({}),o=f.useRef(e),i=f.useRef("none"),l=e?"mounted":"unmounted",[a,s]=qt(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return f.useEffect(()=>{const u=ne(r.current);i.current=a==="mounted"?u:"none"},[a]),J(()=>{const u=r.current,m=o.current;if(m!==e){const d=i.current,h=ne(u);e?s("MOUNT"):h==="none"||(u==null?void 0:u.display)==="none"?s("UNMOUNT"):s(m&&d!==h?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,s]),J(()=>{if(t){const u=c(p=>{const h=ne(r.current).includes(p.animationName);p.target===t&&h&&qe.flushSync(()=>s("ANIMATION_END"))},"handleAnimationEnd"),m=c(p=>{p.target===t&&(i.current=ne(r.current))},"handleAnimationStart");return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",u),t.addEventListener("animationend",u),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",u),t.removeEventListener("animationend",u)}}else s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:f.useCallback(u=>{u&&(r.current=getComputedStyle(u)),n(u)},[])}}c(Zt,"$921a889cee6df7e8$var$usePresence");function ne(e){return(e==null?void 0:e.animationName)||"none"}c(ne,"$921a889cee6df7e8$var$getAnimationName");const Le="Checkbox",[Kt,Hn]=Pe(Le),[Jt,Xt]=Kt(Le),Qt=f.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:o,defaultChecked:i,required:l,disabled:a,value:s="on",onCheckedChange:u,...m}=e,[p,d]=f.useState(null),h=Ae(t,R=>d(R)),b=f.useRef(!1),S=p?!!p.closest("form"):!0,[v=!1,$]=Ut({prop:o,defaultProp:i,onChange:u}),k=f.useRef(v);return f.useEffect(()=>{const R=p==null?void 0:p.form;if(R){const w=c(()=>$(k.current),"reset");return R.addEventListener("reset",w),()=>R.removeEventListener("reset",w)}},[p,$]),f.createElement(Jt,{scope:n,state:v,disabled:a},f.createElement(Q.button,X({type:"button",role:"checkbox","aria-checked":_(v)?"mixed":v,"aria-required":l,"data-state":_e(v),"data-disabled":a?"":void 0,disabled:a,value:s},m,{ref:h,onKeyDown:Se(e.onKeyDown,R=>{R.key==="Enter"&&R.preventDefault()}),onClick:Se(e.onClick,R=>{$(w=>_(w)?!0:!w),S&&(b.current=R.isPropagationStopped(),b.current||R.stopPropagation())})})),S&&f.createElement(nn,{control:p,bubbles:!b.current,name:r,value:s,checked:v,required:l,disabled:a,style:{transform:"translateX(-100%)"}}))}),en="CheckboxIndicator",tn=f.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...o}=e,i=Xt(en,n);return f.createElement(Ne,{present:r||_(i.state)||i.state===!0},f.createElement(Q.span,X({"data-state":_e(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),nn=c(e=>{const{control:t,checked:n,bubbles:r=!0,...o}=e,i=f.useRef(null),l=Gt(n),a=Yt(t);return f.useEffect(()=>{const s=i.current,u=window.HTMLInputElement.prototype,p=Object.getOwnPropertyDescriptor(u,"checked").set;if(l!==n&&p){const d=new Event("click",{bubbles:r});s.indeterminate=_(n),p.call(s,_(n)?!1:n),s.dispatchEvent(d)}},[l,n,r]),f.createElement("input",X({type:"checkbox","aria-hidden":!0,defaultChecked:_(n)?!1:n},o,{tabIndex:-1,ref:i,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))},"$e698a72e93240346$var$BubbleInput");function _(e){return e==="indeterminate"}c(_,"$e698a72e93240346$var$isIndeterminate");function _e(e){return _(e)?"indeterminate":e?"checked":"unchecked"}c(_e,"$e698a72e93240346$var$getState");const rn=Qt,on=tn;var an=Object.defineProperty,sn=Object.defineProperties,ln=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable,ke=c((e,t,n)=>t in e?an(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,"__defNormalProp"),ie=c((e,t)=>{for(var n in t||(t={}))Te.call(t,n)&&ke(e,n,t[n]);if(oe)for(var n of oe(t))Fe.call(t,n)&&ke(e,n,t[n]);return e},"__spreadValues"),De=c((e,t)=>sn(e,ln(t)),"__spreadProps"),cn=c((e,t)=>{var n={};for(var r in e)Te.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&oe)for(var r of oe(e))t.indexOf(r)<0&&Fe.call(e,r)&&(n[r]=e[r]);return n},"__objRest"),dn={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D"},un={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},fn={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},pn={default:"Roboto, sans-serif",code:"monospace"},gn={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},hn={regular:"400",medium:"500",bold:"700"},mn={shorter:"125%",short:"140%",base:"160%",tall:"180%"},{styled:C,css:Un,globalCss:Vn,keyframes:He,getCssText:Gn,theme:Yn,createTheme:qn,config:Zn}=yt({themeMap:De(ie({},Ce),{height:"space",width:"space"}),theme:{colors:dn,fontSizes:gn,fontWeights:hn,fonts:pn,lineHeights:mn,radii:fn,space:un}}),bn=C("div",{padding:"$6",borderRadius:"$md",backgroundColor:"$gray800",border:"1px solid $gray600"});bn.displayName="Box";var Ue=C("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});Ue.displayName="Text";var $n=C("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}});$n.displayName="Heading";var xn=C(Ft,{borderRadius:"$full",display:"inline-block",width:"$16",height:"$16",overflow:"hidden"}),vn=C(Dt,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),yn=C(Ht,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}});function Sn(e){return j(xn,{children:[x(vn,ie({},e)),x(yn,{delayMs:600,children:x(Rt,{})})]})}c(Sn,"Avatar2");Sn.displayName="Avatar";var kn=C("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",padding:"0 $4",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer",svg:{width:"$4",height:"$4"},"&:disabled":{cursor:"not-allowed"},"&:focus":{boxShadow:"0 0 0 2px $colors$gray100"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{backgroundColor:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{color:"$gray200",borderColor:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}});kn.displayName="Button";var Cn=C("div",{backgroundColor:"$gray900",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"center",variants:{size:{sm:{padding:"$2 $3"},md:{padding:"$3 $4"}}},"&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"},defaultVariants:{size:"md"}}),wn=C("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"regular"}),Rn=C("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&::placeholder":{color:"$gray400"}}),Ve=f.forwardRef((e,t)=>{var n=e,{prefix:r}=n,o=cn(n,["prefix"]);return j(Cn,{children:[!!r&&x(wn,{children:r}),x(Rn,ie({ref:t},o))]})});Ve.displayName="TextInput";var In=C("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});In.displayName="TextArea";var zn=C(rn,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},'&:focus, &[data-state="checked"]':{border:"2px solid $ignite300"}}),En=He({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),Bn=He({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),Pn=C(on,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${En} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${Bn} 200ms ease-out`}});function jn(e){return x(zn,De(ie({},e),{children:x(Pn,{asChild:!0,children:x(Ct,{weight:"bold"})})}))}c(jn,"Checkbox2");jn.displayName="Checkbox";var An=C("div",{}),Mn=C(Ue,{color:"$gray200",defaultVariants:{size:"xs"}}),On=C("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),Wn=C("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function Nn({size:e,currentStep:t=1}){return j(An,{children:[j(Mn,{children:["Passo ",t," de ",e]}),x(On,{css:{"--steps-size":e},children:Array.from({length:e},(n,r)=>r+1).map(n=>x(Wn,{active:t>=n},n))})]})}c(Nn,"MultiStep");Nn.displayName="MultiStep";Ve.__docgenInfo={description:"",methods:[],displayName:"TextInput"};export{Sn as A,bn as B,jn as C,$n as H,ze as I,Nn as M,Ue as T,kn as a,In as b,Ve as c,Re as r};
//# sourceMappingURL=index-b27d21e9.js.map
