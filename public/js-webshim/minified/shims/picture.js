/*! respimage - v1.2.1 - 2014-12-23
 Licensed MIT */
!function(a,b,c){"use strict";function d(a){return a.trim?a.trim():a.replace(/^\s+|\s+$/g,"")}function e(){var b;T=!1,W=a.devicePixelRatio,U={},V={},b=(W||1)*D.xQuant,D.uT||(D.maxX=Math.max(1.3,D.maxX),b=Math.min(b,D.maxX),v.DPR=b),X.width=Math.max(a.innerWidth||0,B.clientWidth),X.height=Math.max(a.innerHeight||0,B.clientHeight),X.vw=X.width/100,X.vh=X.height/100,X.em=v.getEmValue(),X.rem=X.em,p=D.lazyFactor/2,p=p*b+p,r=.1*b,m=.5+.2*b,n=.5+.25*b,q=b+1.3,(o=X.width>X.height)||(p*=.9),J&&(p*=.9)}function f(a,b,c){var d=b*Math.pow(a,2);return o||(d/=1.3),a+=d,a>c}function g(a){if(!a.getBoundingClientRect)return!0;var b,c,d,e,f=a.getBoundingClientRect();return!!((b=f.bottom)>=-9&&(e=f.top)<=X.height+9&&(c=f.right)>=-9&&(d=f.left)<=X.height+9&&(b||c||d||e))}function h(a){var b,c=v.getSet(a),d=!1;"pending"!=c&&(d=!0,c&&(b=v.setRes(c),d=v.applySetCandidate(b,a))),a[v.ns].evaled=d}function i(a,b){return a.res-b.res}function j(a,b,c){var d;return!c&&b&&(c=a[v.ns].sets,c=c&&c[c.length-1]),d=k(b,c),d&&(b=v.makeUrl(b),a[v.ns].curSrc=b,a[v.ns].curCan=d,d.res||cb(d,d.set.sizes)),d}function k(a,b){var c,d,e;if(a&&b)for(e=v.parseSet(b),a=v.makeUrl(a),c=0;c<e.length;c++)if(a==v.makeUrl(e[c].url)){d=e[c];break}return d}function l(a,b){var c,d,e,f,g=a.getElementsByTagName("source");for(c=0,d=g.length;d>c;c++)e=g[c],e[v.ns]=!0,f=e.getAttribute("srcset"),f&&b.push({srcset:f,media:e.getAttribute("media"),type:e.getAttribute("type"),sizes:e.getAttribute("sizes")})}b.createElement("picture");var m,n,o,p,q,r,s,t,u,v={},w=function(){},x=b.createElement("img"),y=x.getAttribute,z=x.setAttribute,A=x.removeAttribute,B=b.documentElement,C={},D={xQuant:1,lazyFactor:.4,maxX:2},E="data-risrc",F=E+"set",G="webkitBackfaceVisibility"in B.style,H=navigator.userAgent,I=/AppleWebKit/i.test(H),J=/rident/.test(H)||/ecko/.test(H)&&H.match(/rv\:(\d+)/)&&RegExp.$1>35,K=0,L="currentSrc",M=/\s+\+?\d+(e\d+)?w/,N=/(\([^)]+\))?\s*(.+)/,O=/^([\+eE\d\.]+)(w|x)$/,P=/\s*\d+h\s*/,Q=a.respimgCFG,R=("https:"==location.protocol,"position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)"),S="font-size:100%!important;",T=!0,U={},V={},W=a.devicePixelRatio,X={px:1,"in":96},Y=b.createElement("a"),Z=!1,$=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d||!1):a.attachEvent&&a.attachEvent("on"+b,c)},_=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d||!1):a.detachEvent&&a.detachEvent("on"+b,c)},ab=function(a){var b={};return function(c){return c in b||(b[c]=a(c)),b[c]}},bb=function(){var a=/^([\d\.]+)(em|vw|px)$/,b=function(){for(var a=arguments,b=0,c=a[0];++b in a;)c=c.replace(a[b],a[++b]);return c},c=ab(function(a){return"return "+b((a||"").toLowerCase(),/\band\b/g,"&&",/,/g,"||",/min-([a-z-\s]+):/g,"e.$1>=",/max-([a-z-\s]+):/g,"e.$1<=",/calc([^)]+)/g,"($1)",/(\d+[\.]*[\d]*)([a-z]+)/g,"($1 * e.$2)",/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi,"")});return function(b,d){var e;if(!(b in U))if(U[b]=!1,d&&(e=b.match(a)))U[b]=e[1]*X[e[2]];else try{U[b]=new Function("e",c(b))(X)}catch(f){}return U[b]}}(),cb=function(a,b){return a.w?(a.cWidth=v.calcListLength(b||"100vw"),a.res=a.w/a.cWidth):a.res=a.x,a},db=function(a){var c,d,e,f=a||{};if(f.elements&&1==f.elements.nodeType&&("IMG"==f.elements.nodeName.toUpperCase()?f.elements=[f.elements]:(f.context=f.elements,f.elements=null)),c=f.elements||v.qsa(f.context||b,f.reevaluate||f.reparse?v.sel:v.selShort),e=c.length){for(v.setupRun(f),Z=!0,d=0;e>d;d++)K++,6>K&&!c[d].complete&&K++,v.fillImg(c[d],f);v.teardownRun(f),K++}},eb=function(){var a=function(){_(this,"load",a),_(this,"error",a),v.fillImgs({elements:[this]})};return function(b){_(b,"load",a),_(b,"error",a),$(b,"error",a),$(b,"load",a)}}(),fb=ab(function(a){var b=[1,"x"],c=d(a||"");return c&&(c=c.replace(P,""),b=c.match(O)?[1*RegExp.$1,RegExp.$2]:!1),b});L in x||(L="src"),C["image/jpeg"]=!0,C["image/gif"]=!0,C["image/png"]=!0,C["image/svg+xml"]=b.implementation.hasFeature("http://wwwindow.w3.org/TR/SVG11/feature#Image","1.1"),v.ns=("ri"+(new Date).getTime()).substr(0,9),v.supSrcset="srcset"in x,v.supSizes="sizes"in x,v.selShort="picture>img,img[srcset]",v.sel=v.selShort,v.cfg=D,v.supSrcset&&(v.sel+=",img["+F+"]"),v.DPR=W||1,v.u=X,v.types=C,t=v.supSrcset&&!v.supSizes,v.setSize=w,v.makeUrl=ab(function(a){return Y.href=a,Y.href}),v.qsa=function(a,b){return a.querySelectorAll(b)},v.matchesMedia=function(){return v.matchesMedia=a.matchMedia&&(matchMedia("(min-width: 0.1em)")||{}).matches?function(a){return!a||matchMedia(a).matches}:v.mMQ,v.matchesMedia.apply(this,arguments)},v.mMQ=function(a){return a?bb(a):!0},v.calcLength=function(a){var b=bb(a,!0)||!1;return 0>b&&(b=!1),b},v.supportsType=function(a){return a?C[a]:!0},v.parseSize=ab(function(a){var b=(a||"").match(N);return{media:b&&b[1],length:b&&b[2]}}),v.parseSet=function(a){if(!a.cands){var b,c,d,e,f,g,h=a.srcset;for(a.cands=[];h;)h=h.replace(/^\s+/g,""),b=h.search(/\s/g),d=null,-1!=b?(c=h.slice(0,b),e=c.charAt(c.length-1),","!=e&&c||(c=c.replace(/,+$/,""),d=""),h=h.slice(b+1),null==d&&(f=h.indexOf(","),-1!=f?(d=h.slice(0,f),h=h.slice(f+1)):(d=h,h=""))):(c=h,h=""),c&&(d=fb(d))&&(g={url:c.replace(/^,+/,""),set:a},g[d[1]]=d[0],"x"==d[1]&&1==d[0]&&(a.has1x=!0),a.cands.push(g))}return a.cands},v.getEmValue=function(){var a;if(!s&&(a=b.body)){var c=b.createElement("div"),d=B.style.cssText,e=a.style.cssText;c.style.cssText=R,B.style.cssText=S,a.style.cssText=S,a.appendChild(c),s=c.offsetWidth,a.removeChild(c),s=parseFloat(s,10),B.style.cssText=d,a.style.cssText=e}return s||16},v.calcListLength=function(a){if(!(a in V)||D.uT){var b,c,e,f,g,h,i=d(a).split(/\s*,\s*/),j=!1;for(g=0,h=i.length;h>g&&(b=i[g],c=v.parseSize(b),e=c.length,f=c.media,!e||!v.matchesMedia(f)||(j=v.calcLength(e))===!1);g++);V[a]=j?j:X.width}return V[a]},v.setRes=function(a){var b;if(a){b=v.parseSet(a);for(var c=0,d=b.length;d>c;c++)cb(b[c],a.sizes)}return b},v.setRes.res=cb,v.applySetCandidate=function(a,b){if(a.length){var c,d,e,h,k,l,o,s,t,u,w,x,z,A=b[v.ns],B=!0,C=p,D=r;if(s=A.curSrc||b[L],t=A.curCan||j(b,s,a[0].set),d=v.DPR,z=t&&t.res,!o&&s&&(x=J&&!b.complete&&t&&z>d,x||t&&!(q>z)||(t&&d>z&&z>m&&(n>z&&(C*=.87,D+=.04*d),t.res+=C*Math.pow(z-D,2)),u=!A.pic||t&&t.set==a[0].set,t&&u&&t.res>=d?o=t:I||b.complete||!y.call(b,"src")||b.lazyload||J&&!(5>K)||!u&&g(b)||(o=t,w=s,B="L",eb(b)))),!o)for(z&&(t.res=t.res-(t.res-z)/2),a.sort(i),l=a.length,o=a[l-1],e=0;l>e;e++)if(c=a[e],c.res>=d){h=e-1,o=a[h]&&(k=c.res-d)&&(x||s!=v.makeUrl(c.url))&&f(a[h].res,k,d)?a[h]:c;break}return z&&(t.res=z),o&&(w=v.makeUrl(o.url),A.curSrc=w,A.curCan=o,w!=s&&v.setSrc(b,o),v.setSize(b)),B}},v.setSrc=function(a,b){var c;a.src=b.url,G&&(c=a.style.zoom,a.style.zoom="0.999",a.style.zoom=c)},v.getSet=function(a){var b,c,d,e=!1,f=a[v.ns].sets;for(b=0;b<f.length&&!e;b++)if(c=f[b],c.srcset&&v.matchesMedia(c.media)&&(d=v.supportsType(c.type))){"pending"==d&&(c=d),e=c;break}return e},v.parseSets=function(a,b){var d,e,f,g,h="PICTURE"==b.nodeName.toUpperCase(),i=a[v.ns];i.src===c&&(i.src=y.call(a,"src"),i.src?z.call(a,E,i.src):A.call(a,E)),i.srcset===c&&(d=y.call(a,"srcset"),i.srcset=d,g=!0),i.sets=[],h&&(i.pic=!0,l(b,i.sets)),i.srcset?(e={srcset:i.srcset,sizes:y.call(a,"sizes")},i.sets.push(e),f=(t||i.src)&&M.test(i.srcset||""),f||!i.src||k(i.src,e)||e.has1x||(e.srcset+=", "+i.src,e.cands.push({url:i.src,x:1,set:e}))):i.src&&i.sets.push({srcset:i.src,sizes:null}),i.curCan=null,i.supported=!(h||e&&!v.supSrcset||f),g&&v.supSrcset&&!i.supported&&(d?(z.call(a,F,d),a.srcset=""):A.call(a,F)),i.supported&&!i.srcset&&(!i.src&&a.src||a.src!=v.makeUrl(i.src))&&(null==i.src?a.removeAttribute("src"):a.src=i.src),i.parsed=!0},v.fillImg=function(a,b){var c,d,e=b.reparse||b.reevaluate;if(a[v.ns]||(a[v.ns]={}),d=a[v.ns],"L"==d.evaled&&a.complete&&(d.evaled=!1),e||!d.evaled){if(!d.parsed||b.reparse){if(c=a.parentNode,!c)return;v.parseSets(a,c,b)}d.supported?d.evaled=!0:h(a)}},v.setupRun=function(a){(!Z||a.reevaluate||T)&&(e(),a.elements||a.context||clearTimeout(u))},a.HTMLPictureElement?(db=w,v.fillImg=w):!function(){var c,d=a.attachEvent?/d$|^c/:/d$|^c|^i/,e=function(){var a=b.readyState||"";h=setTimeout(e,"loading"==a?200:999),b.body&&(c=c||d.test(a),v.fillImgs(),c&&(K+=6,clearTimeout(h)))},f=function(){v.fillImgs({reevaluate:!0})},g=function(){clearTimeout(u),T=!0,u=setTimeout(f,99)},h=setTimeout(e,b.body?9:99);$(a,"resize",g),$(b,"readystatechange",e)}(),v.respimage=db,v.fillImgs=db,v.teardownRun=w,db._=v,a.respimage=db,a.respimgCFG={ri:v,push:function(a){var b=a.shift();"function"==typeof v[b]?v[b].apply(v,a):(D[b]=a[0],Z&&v.fillImgs({reevaluate:!0}))}};for(;Q&&Q.length;)a.respimgCFG.push(Q.shift())}(window,document),function(a){"use strict";var b,c=0,d=function(){window.respimage&&a(window.respimage),(window.respimage||c>9999)&&clearInterval(b),c++};b=setInterval(d,8),d()}(function(a){"use strict";var b=a._,c=0,d=function(a,c){var d;for(d=0;d<a.length;d++)b.types[a[d]]=c};return window.HTMLPictureElement&&!b.cfg.uT?void(a.testTypeSupport=function(){}):(b.types["image/bmp"]=!0,b.types["image/x-bmp"]=!0,a.testTypeSupport=function(b,e,f,g){"string"==typeof b&&(b=b.split(/\s*\,*\s+/g));var h,i="pending",j=document.createElement("img"),k=function(){c--,d(b,i),1>c&&a({reevaluate:!0})};return g&&(h=document.createElement("canvas"),!h.getContext)?void d(b,!1):(j.onload=function(){var a;i=!0,f&&(i=j.width==f),g&&(a=h.getContext("2d"),a.drawImage(j,0,0),i=0===a.getImageData(0,0,1,1).data[3]),k()},j.onerror=function(){i=!1,k()},c++,d(b,"pending"),void(j.src=e))},a.testTypeSupport("image/webp","data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",1),a.testTypeSupport("image/jp2 image/jpx image/jpm","data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k=",1),a.testTypeSupport("image/vnd.ms-photo","data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAQAAAMC8BAABAAAAWgAAAMG8BAABAAAAHwAAAAAAAAAkw91vA07+S7GFPXd2jckNV01QSE9UTwAZAYBxAAAAABP/gAAEb/8AAQAAAQAAAA==",1),void a.testTypeSupport("video/png video/apng video/x-mng video/x-png","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACGFjVEwAAAABAAAAAcMq2TYAAAANSURBVAiZY2BgYPgPAAEEAQB9ssjfAAAAGmZjVEwAAAAAAAAAAQAAAAEAAAAAAAAAAAD6A+gBAbNU+2sAAAARZmRBVAAAAAEImWNgYGBgAAAABQAB6MzFdgAAAABJRU5ErkJggg==",!1,!0))}),function(a){"use strict";var b,c=0,d=function(){window.respimage&&a(window.respimage),(window.respimage||c>9999)&&clearInterval(b),c++};b=setInterval(d,8),d()}(function(a,b){"use strict";var c=a._,d={},e=c.cfg,f="currentSrc",g=function(a,b,c){var d=c.curCan;a&&b.setAttribute("width",parseInt(a/d.res,10))},h=function(a,b,c){var e,h,i;d[a]?g(d[a],b,c):(i=function(){c.pendingURLSize=null,e.onload=null,e.onerror=null,b=null,e=null},c.pendingURLSize=a,h=c.curCan,h.w&&g(h.w,b,c),e=document.createElement("img"),e.onload=function(){d[a]=e.naturalWidth||e.width,a==b[f]&&g(d[a],b,c),i()},e.onerror=i,e.src=a,e&&e.complete&&e.onload())},i=function(){var a,b,d=function(){var d,e,f,g=document.getElementsByTagName("img"),h={elements:[]};for(c.setupRun(h),a=!1,clearTimeout(b),d=0,e=g.length;e>d;d++)f=g[d][c.ns],f&&f.curCan&&(c.setRes.res(f.curCan,f.curCan.set.sizes),c.setSize(g[d]));c.teardownRun(h)};return function(){!a&&e.addSize&&(a=!0,clearTimeout(b),b=setTimeout(d))}}();f in document.createElement("img")||(f="src"),c.setSize=function(a){var d,g=a[c.ns],i=g.curCan;g.dims===b&&(g.dims=a.getAttribute("height")&&a.getAttribute("width")),e.addSize&&i&&!g.dims&&(d=c.makeUrl(i.url),d==a[f]&&d!==g.pendingURLSize&&h(d,a,g))},window.addEventListener&&addEventListener("resize",i,!1),e.addSize="addSize"in e?!!e.addSize:!0,i()}),function(){webshim.isReady("picture",!0);var a="picture, img[srcset]";webshim.addReady(function(b){b.querySelector(a)&&window.respimage()})}();