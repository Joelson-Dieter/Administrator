"use strict";var Ea=Object.create;var Kt=Object.defineProperty;var Da=Object.getOwnPropertyDescriptor;var Na=Object.getOwnPropertyNames;var Ma=Object.getPrototypeOf,Aa=Object.prototype.hasOwnProperty;var La=(o,e,t)=>e in o?Kt(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var U=(o,e)=>()=>(e||o((e={exports:{}}).exports,e),e.exports),Oa=(o,e)=>{for(var t in e)Kt(o,t,{get:e[t],enumerable:!0})},pn=(o,e,t,i)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Na(e))!Aa.call(o,s)&&s!==t&&Kt(o,s,{get:()=>e[s],enumerable:!(i=Da(e,s))||i.enumerable});return o};var T=(o,e,t)=>(t=o!=null?Ea(Ma(o)):{},pn(e||!o||!o.__esModule?Kt(t,"default",{value:o,enumerable:!0}):t,o)),$a=o=>pn(Kt({},"__esModule",{value:!0}),o);var q=(o,e,t)=>(La(o,typeof e!="symbol"?e+"":e,t),t);var Fi=U((Xl,vn)=>{vn.exports=Yt;Yt.default=Yt;Yt.stable=mn;Yt.stableStringify=mn;var Pi="[...]",hn="[Circular]",ut=[],dt=[];function fn(){return{depthLimit:Number.MAX_SAFE_INTEGER,edgesLimit:Number.MAX_SAFE_INTEGER}}function Yt(o,e,t,i){typeof i>"u"&&(i=fn()),ss(o,"",0,[],void 0,0,i);var s;try{dt.length===0?s=JSON.stringify(o,e,t):s=JSON.stringify(o,bn(e),t)}catch{return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;ut.length!==0;){var n=ut.pop();n.length===4?Object.defineProperty(n[0],n[1],n[3]):n[0][n[1]]=n[2]}}return s}function At(o,e,t,i){var s=Object.getOwnPropertyDescriptor(i,t);s.get!==void 0?s.configurable?(Object.defineProperty(i,t,{value:o}),ut.push([i,t,e,s])):dt.push([e,t,o]):(i[t]=o,ut.push([i,t,e]))}function ss(o,e,t,i,s,n,a){n+=1;var r;if(typeof o=="object"&&o!==null){for(r=0;r<i.length;r++)if(i[r]===o){At(hn,o,e,s);return}if(typeof a.depthLimit<"u"&&n>a.depthLimit){At(Pi,o,e,s);return}if(typeof a.edgesLimit<"u"&&t+1>a.edgesLimit){At(Pi,o,e,s);return}if(i.push(o),Array.isArray(o))for(r=0;r<o.length;r++)ss(o[r],r,r,i,o,n,a);else{var l=Object.keys(o);for(r=0;r<l.length;r++){var c=l[r];ss(o[c],c,r,i,o,n,a)}}i.pop()}}function Ta(o,e){return o<e?-1:o>e?1:0}function mn(o,e,t,i){typeof i>"u"&&(i=fn());var s=ns(o,"",0,[],void 0,0,i)||o,n;try{dt.length===0?n=JSON.stringify(s,e,t):n=JSON.stringify(s,bn(e),t)}catch{return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]")}finally{for(;ut.length!==0;){var a=ut.pop();a.length===4?Object.defineProperty(a[0],a[1],a[3]):a[0][a[1]]=a[2]}}return n}function ns(o,e,t,i,s,n,a){n+=1;var r;if(typeof o=="object"&&o!==null){for(r=0;r<i.length;r++)if(i[r]===o){At(hn,o,e,s);return}try{if(typeof o.toJSON=="function")return}catch{return}if(typeof a.depthLimit<"u"&&n>a.depthLimit){At(Pi,o,e,s);return}if(typeof a.edgesLimit<"u"&&t+1>a.edgesLimit){At(Pi,o,e,s);return}if(i.push(o),Array.isArray(o))for(r=0;r<o.length;r++)ns(o[r],r,r,i,o,n,a);else{var l={},c=Object.keys(o).sort(Ta);for(r=0;r<c.length;r++){var d=c[r];ns(o[d],d,r,i,o,n,a),l[d]=o[d]}if(typeof s<"u")ut.push([s,e,o]),s[e]=l;else return l}i.pop()}}function bn(o){return o=typeof o<"u"?o:function(e,t){return t},function(e,t){if(dt.length>0)for(var i=0;i<dt.length;i++){var s=dt[i];if(s[1]===e&&s[0]===t){t=s[2],dt.splice(i,1);break}}return o.call(this,e,t)}}});var _n=U((Jl,gn)=>{"use strict";gn.exports=function(e){return e?e instanceof Array||Array.isArray(e)||e.length>=0&&e.splice instanceof Function:!1}});var yn=U((Ql,Cn)=>{"use strict";var Ra=require("util"),Ua=_n(),os=function(e,t){(!e||e.constructor!==String)&&(t=e||{},e=Error.name);var i=function s(n){if(!this)return new s(n);n=n instanceof Error?n.message:n||this.message,Error.call(this,n),Error.captureStackTrace(this,i),this.name=e,Object.defineProperty(this,"message",{configurable:!0,enumerable:!1,get:function(){var d=n.split(/\r?\n/g);for(var u in t)if(!!t.hasOwnProperty(u)){var h=t[u];"message"in h&&(d=h.message(this[u],d)||d,Ua(d)||(d=[d]))}return d.join(`
`)},set:function(d){n=d}});var a=null,r=Object.getOwnPropertyDescriptor(this,"stack"),l=r.get,c=r.value;delete r.value,delete r.writable,r.set=function(d){a=d},r.get=function(){var d=(a||(l?l.call(this):c)).split(/\r?\n+/g);a||(d[0]=this.name+": "+this.message);var u=1;for(var h in t)if(!!t.hasOwnProperty(h)){var p=t[h];if("line"in p){var f=p.line(this[h]);f&&d.splice(u++,0,"    "+f)}"stack"in p&&p.stack(this[h],d)}return d.join(`
`)},Object.defineProperty(this,"stack",r)};return Object.setPrototypeOf?(Object.setPrototypeOf(i.prototype,Error.prototype),Object.setPrototypeOf(i,Error)):Ra.inherits(i,Error),i};os.append=function(o,e){return{message:function(t,i){return t=t||e,t&&(i[0]+=" "+o.replace("%s",t.toString())),i}}};os.line=function(o,e){return{line:function(t){return t=t||e,t?o.replace("%s",t.toString()):null}}};Cn.exports=os});var Fn=U((ec,Pn)=>{"use strict";Pn.exports=Va;function Va(o,e,t){t=t||20;try{return JSON.parse(o,e)}catch(i){if(typeof o!="string"){let r="Cannot parse "+(Array.isArray(o)&&o.length===0?"an empty array":String(o));throw new TypeError(r)}let s=i.message.match(/^Unexpected token.*position\s+(\d+)/i),n=s?+s[1]:i.message.match(/^Unexpected end of JSON.*/i)?o.length-1:null;if(n!=null){let a=n<=t?0:n-t,r=n+t>=o.length?o.length:n+t;i.message+=` while parsing near '${a===0?"":"..."}${o.slice(a,r)}${r===o.length?"":"..."}'`}else i.message+=` while parsing '${o.slice(0,t*2)}'`;throw i}}});var xn=U((tc,In)=>{"use strict";var Sn=yn(),Ba=Fn(),Wa=Sn("JSONError",{fileName:Sn.append("in %s")});In.exports=(o,e,t)=>{typeof e=="string"&&(t=e,e=null);try{try{return JSON.parse(o,e)}catch(i){throw Ba(o,e),i}}catch(i){i.message=i.message.replace(/\n/g,"");let s=new Wa(i);throw t&&(s.fileName=t),s}}});var kn=U((ic,wn)=>{"use strict";wn.exports=o=>{if(typeof o!="string")throw new TypeError(`Expected a string, got ${typeof o}`);return o.charCodeAt(0)===65279?o.slice(1):o}});var rs=U((sc,En)=>{"use strict";var as=Symbol("singleComment"),jn=Symbol("multiComment"),Ha=()=>"",Ga=(o,e,t)=>o.slice(e,t).replace(/\S/g," "),qa=(o,e)=>{let t=e-1,i=0;for(;o[t]==="\\";)t-=1,i+=1;return Boolean(i%2)};En.exports=(o,e={})=>{if(typeof o!="string")throw new TypeError(`Expected argument \`jsonString\` to be a \`string\`, got \`${typeof o}\``);let t=e.whitespace===!1?Ha:Ga,i=!1,s=!1,n=0,a="";for(let r=0;r<o.length;r++){let l=o[r],c=o[r+1];if(!s&&l==='"'&&(qa(o,r)||(i=!i)),!i){if(!s&&l+c==="//")a+=o.slice(n,r),n=r,s=as,r++;else if(s===as&&l+c===`\r
`){r++,s=!1,a+=t(o,n,r),n=r;continue}else if(s===as&&l===`
`)s=!1,a+=t(o,n,r),n=r;else if(!s&&l+c==="/*"){a+=o.slice(n,r),n=r,s=jn,r++;continue}else if(s===jn&&l+c==="*/"){r++,s=!1,a+=t(o,n,r+1),n=r+1;continue}}}return a+(s?t(o.slice(n)):o.slice(n))}});var Nn=U((nc,Dn)=>{var et=require("constants"),za=process.cwd,Si=null,Za=process.env.GRACEFUL_FS_PLATFORM||process.platform;process.cwd=function(){return Si||(Si=za.call(process)),Si};try{process.cwd()}catch{}typeof process.chdir=="function"&&(ls=process.chdir,process.chdir=function(o){Si=null,ls.call(process,o)},Object.setPrototypeOf&&Object.setPrototypeOf(process.chdir,ls));var ls;Dn.exports=Ka;function Ka(o){et.hasOwnProperty("O_SYMLINK")&&process.version.match(/^v0\.6\.[0-2]|^v0\.5\./)&&e(o),o.lutimes||t(o),o.chown=n(o.chown),o.fchown=n(o.fchown),o.lchown=n(o.lchown),o.chmod=i(o.chmod),o.fchmod=i(o.fchmod),o.lchmod=i(o.lchmod),o.chownSync=a(o.chownSync),o.fchownSync=a(o.fchownSync),o.lchownSync=a(o.lchownSync),o.chmodSync=s(o.chmodSync),o.fchmodSync=s(o.fchmodSync),o.lchmodSync=s(o.lchmodSync),o.stat=r(o.stat),o.fstat=r(o.fstat),o.lstat=r(o.lstat),o.statSync=l(o.statSync),o.fstatSync=l(o.fstatSync),o.lstatSync=l(o.lstatSync),o.chmod&&!o.lchmod&&(o.lchmod=function(d,u,h){h&&process.nextTick(h)},o.lchmodSync=function(){}),o.chown&&!o.lchown&&(o.lchown=function(d,u,h,p){p&&process.nextTick(p)},o.lchownSync=function(){}),Za==="win32"&&(o.rename=typeof o.rename!="function"?o.rename:function(d){function u(h,p,f){var b=Date.now(),v=0;d(h,p,function m(_){if(_&&(_.code==="EACCES"||_.code==="EPERM"||_.code==="EBUSY")&&Date.now()-b<6e4){setTimeout(function(){o.stat(p,function(C,P){C&&C.code==="ENOENT"?d(h,p,m):f(_)})},v),v<100&&(v+=10);return}f&&f(_)})}return Object.setPrototypeOf&&Object.setPrototypeOf(u,d),u}(o.rename)),o.read=typeof o.read!="function"?o.read:function(d){function u(h,p,f,b,v,m){var _;if(m&&typeof m=="function"){var C=0;_=function(P,D,N){if(P&&P.code==="EAGAIN"&&C<10)return C++,d.call(o,h,p,f,b,v,_);m.apply(this,arguments)}}return d.call(o,h,p,f,b,v,_)}return Object.setPrototypeOf&&Object.setPrototypeOf(u,d),u}(o.read),o.readSync=typeof o.readSync!="function"?o.readSync:function(d){return function(u,h,p,f,b){for(var v=0;;)try{return d.call(o,u,h,p,f,b)}catch(m){if(m.code==="EAGAIN"&&v<10){v++;continue}throw m}}}(o.readSync);function e(d){d.lchmod=function(u,h,p){d.open(u,et.O_WRONLY|et.O_SYMLINK,h,function(f,b){if(f){p&&p(f);return}d.fchmod(b,h,function(v){d.close(b,function(m){p&&p(v||m)})})})},d.lchmodSync=function(u,h){var p=d.openSync(u,et.O_WRONLY|et.O_SYMLINK,h),f=!0,b;try{b=d.fchmodSync(p,h),f=!1}finally{if(f)try{d.closeSync(p)}catch{}else d.closeSync(p)}return b}}function t(d){et.hasOwnProperty("O_SYMLINK")&&d.futimes?(d.lutimes=function(u,h,p,f){d.open(u,et.O_SYMLINK,function(b,v){if(b){f&&f(b);return}d.futimes(v,h,p,function(m){d.close(v,function(_){f&&f(m||_)})})})},d.lutimesSync=function(u,h,p){var f=d.openSync(u,et.O_SYMLINK),b,v=!0;try{b=d.futimesSync(f,h,p),v=!1}finally{if(v)try{d.closeSync(f)}catch{}else d.closeSync(f)}return b}):d.futimes&&(d.lutimes=function(u,h,p,f){f&&process.nextTick(f)},d.lutimesSync=function(){})}function i(d){return d&&function(u,h,p){return d.call(o,u,h,function(f){c(f)&&(f=null),p&&p.apply(this,arguments)})}}function s(d){return d&&function(u,h){try{return d.call(o,u,h)}catch(p){if(!c(p))throw p}}}function n(d){return d&&function(u,h,p,f){return d.call(o,u,h,p,function(b){c(b)&&(b=null),f&&f.apply(this,arguments)})}}function a(d){return d&&function(u,h,p){try{return d.call(o,u,h,p)}catch(f){if(!c(f))throw f}}}function r(d){return d&&function(u,h,p){typeof h=="function"&&(p=h,h=null);function f(b,v){v&&(v.uid<0&&(v.uid+=4294967296),v.gid<0&&(v.gid+=4294967296)),p&&p.apply(this,arguments)}return h?d.call(o,u,h,f):d.call(o,u,f)}}function l(d){return d&&function(u,h){var p=h?d.call(o,u,h):d.call(o,u);return p&&(p.uid<0&&(p.uid+=4294967296),p.gid<0&&(p.gid+=4294967296)),p}}function c(d){if(!d||d.code==="ENOSYS")return!0;var u=!process.getuid||process.getuid()!==0;return!!(u&&(d.code==="EINVAL"||d.code==="EPERM"))}}});var Ln=U((oc,An)=>{var Mn=require("stream").Stream;An.exports=Ya;function Ya(o){return{ReadStream:e,WriteStream:t};function e(i,s){if(!(this instanceof e))return new e(i,s);Mn.call(this);var n=this;this.path=i,this.fd=null,this.readable=!0,this.paused=!1,this.flags="r",this.mode=438,this.bufferSize=64*1024,s=s||{};for(var a=Object.keys(s),r=0,l=a.length;r<l;r++){var c=a[r];this[c]=s[c]}if(this.encoding&&this.setEncoding(this.encoding),this.start!==void 0){if(typeof this.start!="number")throw TypeError("start must be a Number");if(this.end===void 0)this.end=1/0;else if(typeof this.end!="number")throw TypeError("end must be a Number");if(this.start>this.end)throw new Error("start must be <= end");this.pos=this.start}if(this.fd!==null){process.nextTick(function(){n._read()});return}o.open(this.path,this.flags,this.mode,function(d,u){if(d){n.emit("error",d),n.readable=!1;return}n.fd=u,n.emit("open",u),n._read()})}function t(i,s){if(!(this instanceof t))return new t(i,s);Mn.call(this),this.path=i,this.fd=null,this.writable=!0,this.flags="w",this.encoding="binary",this.mode=438,this.bytesWritten=0,s=s||{};for(var n=Object.keys(s),a=0,r=n.length;a<r;a++){var l=n[a];this[l]=s[l]}if(this.start!==void 0){if(typeof this.start!="number")throw TypeError("start must be a Number");if(this.start<0)throw new Error("start must be >= zero");this.pos=this.start}this.busy=!1,this._queue=[],this.fd===null&&(this._open=o.open,this._queue.push([this._open,this.path,this.flags,this.mode,void 0]),this.flush())}}});var $n=U((ac,On)=>{"use strict";On.exports=Ja;var Xa=Object.getPrototypeOf||function(o){return o.__proto__};function Ja(o){if(o===null||typeof o!="object")return o;if(o instanceof Object)var e={__proto__:Xa(o)};else var e=Object.create(null);return Object.getOwnPropertyNames(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}),e}});var Vn=U((rc,us)=>{var se=require("fs"),Qa=Nn(),er=Ln(),tr=$n(),Ii=require("util"),me,wi;typeof Symbol=="function"&&typeof Symbol.for=="function"?(me=Symbol.for("graceful-fs.queue"),wi=Symbol.for("graceful-fs.previous")):(me="___graceful-fs.queue",wi="___graceful-fs.previous");function ir(){}function Un(o,e){Object.defineProperty(o,me,{get:function(){return e}})}var pt=ir;Ii.debuglog?pt=Ii.debuglog("gfs4"):/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&(pt=function(){var o=Ii.format.apply(Ii,arguments);o="GFS4: "+o.split(/\n/).join(`
GFS4: `),console.error(o)});se[me]||(Tn=global[me]||[],Un(se,Tn),se.close=function(o){function e(t,i){return o.call(se,t,function(s){s||Rn(),typeof i=="function"&&i.apply(this,arguments)})}return Object.defineProperty(e,wi,{value:o}),e}(se.close),se.closeSync=function(o){function e(t){o.apply(se,arguments),Rn()}return Object.defineProperty(e,wi,{value:o}),e}(se.closeSync),/\bgfs4\b/i.test(process.env.NODE_DEBUG||"")&&process.on("exit",function(){pt(se[me]),require("assert").equal(se[me].length,0)}));var Tn;global[me]||Un(global,se[me]);us.exports=cs(tr(se));process.env.TEST_GRACEFUL_FS_GLOBAL_PATCH&&!se.__patched&&(us.exports=cs(se),se.__patched=!0);function cs(o){Qa(o),o.gracefulify=cs,o.createReadStream=D,o.createWriteStream=N;var e=o.readFile;o.readFile=t;function t(x,k,F){return typeof k=="function"&&(F=k,k=null),E(x,k,F);function E(L,$,V,G){return e(L,$,function(Y){Y&&(Y.code==="EMFILE"||Y.code==="ENFILE")?Lt([E,[L,$,V],Y,G||Date.now(),Date.now()]):typeof V=="function"&&V.apply(this,arguments)})}}var i=o.writeFile;o.writeFile=s;function s(x,k,F,E){return typeof F=="function"&&(E=F,F=null),L(x,k,F,E);function L($,V,G,Y,fe){return i($,V,G,function(ee){ee&&(ee.code==="EMFILE"||ee.code==="ENFILE")?Lt([L,[$,V,G,Y],ee,fe||Date.now(),Date.now()]):typeof Y=="function"&&Y.apply(this,arguments)})}}var n=o.appendFile;n&&(o.appendFile=a);function a(x,k,F,E){return typeof F=="function"&&(E=F,F=null),L(x,k,F,E);function L($,V,G,Y,fe){return n($,V,G,function(ee){ee&&(ee.code==="EMFILE"||ee.code==="ENFILE")?Lt([L,[$,V,G,Y],ee,fe||Date.now(),Date.now()]):typeof Y=="function"&&Y.apply(this,arguments)})}}var r=o.copyFile;r&&(o.copyFile=l);function l(x,k,F,E){return typeof F=="function"&&(E=F,F=0),L(x,k,F,E);function L($,V,G,Y,fe){return r($,V,G,function(ee){ee&&(ee.code==="EMFILE"||ee.code==="ENFILE")?Lt([L,[$,V,G,Y],ee,fe||Date.now(),Date.now()]):typeof Y=="function"&&Y.apply(this,arguments)})}}var c=o.readdir;o.readdir=u;var d=/^v[0-5]\./;function u(x,k,F){typeof k=="function"&&(F=k,k=null);var E=d.test(process.version)?function(V,G,Y,fe){return c(V,L(V,G,Y,fe))}:function(V,G,Y,fe){return c(V,G,L(V,G,Y,fe))};return E(x,k,F);function L($,V,G,Y){return function(fe,ee){fe&&(fe.code==="EMFILE"||fe.code==="ENFILE")?Lt([E,[$,V,G],fe,Y||Date.now(),Date.now()]):(ee&&ee.sort&&ee.sort(),typeof G=="function"&&G.call(this,fe,ee))}}}if(process.version.substr(0,4)==="v0.8"){var h=er(o);m=h.ReadStream,C=h.WriteStream}var p=o.ReadStream;p&&(m.prototype=Object.create(p.prototype),m.prototype.open=_);var f=o.WriteStream;f&&(C.prototype=Object.create(f.prototype),C.prototype.open=P),Object.defineProperty(o,"ReadStream",{get:function(){return m},set:function(x){m=x},enumerable:!0,configurable:!0}),Object.defineProperty(o,"WriteStream",{get:function(){return C},set:function(x){C=x},enumerable:!0,configurable:!0});var b=m;Object.defineProperty(o,"FileReadStream",{get:function(){return b},set:function(x){b=x},enumerable:!0,configurable:!0});var v=C;Object.defineProperty(o,"FileWriteStream",{get:function(){return v},set:function(x){v=x},enumerable:!0,configurable:!0});function m(x,k){return this instanceof m?(p.apply(this,arguments),this):m.apply(Object.create(m.prototype),arguments)}function _(){var x=this;g(x.path,x.flags,x.mode,function(k,F){k?(x.autoClose&&x.destroy(),x.emit("error",k)):(x.fd=F,x.emit("open",F),x.read())})}function C(x,k){return this instanceof C?(f.apply(this,arguments),this):C.apply(Object.create(C.prototype),arguments)}function P(){var x=this;g(x.path,x.flags,x.mode,function(k,F){k?(x.destroy(),x.emit("error",k)):(x.fd=F,x.emit("open",F))})}function D(x,k){return new o.ReadStream(x,k)}function N(x,k){return new o.WriteStream(x,k)}var S=o.open;o.open=g;function g(x,k,F,E){return typeof F=="function"&&(E=F,F=null),L(x,k,F,E);function L($,V,G,Y,fe){return S($,V,G,function(ee,Zl){ee&&(ee.code==="EMFILE"||ee.code==="ENFILE")?Lt([L,[$,V,G,Y],ee,fe||Date.now(),Date.now()]):typeof Y=="function"&&Y.apply(this,arguments)})}}return o}function Lt(o){pt("ENQUEUE",o[0].name,o[1]),se[me].push(o),ds()}var xi;function Rn(){for(var o=Date.now(),e=0;e<se[me].length;++e)se[me][e].length>2&&(se[me][e][3]=o,se[me][e][4]=o);ds()}function ds(){if(clearTimeout(xi),xi=void 0,se[me].length!==0){var o=se[me].shift(),e=o[0],t=o[1],i=o[2],s=o[3],n=o[4];if(s===void 0)pt("RETRY",e.name,t),e.apply(null,t);else if(Date.now()-s>=6e4){pt("TIMEOUT",e.name,t);var a=t.pop();typeof a=="function"&&a.call(null,i)}else{var r=Date.now()-n,l=Math.max(n-s,1),c=Math.min(l*1.2,100);r>=c?(pt("RETRY",e.name,t),e.apply(null,t.concat([s]))):se[me].push(o)}xi===void 0&&(xi=setTimeout(ds,0))}}});var Gn=U((lc,Hn)=>{var Xt=require("path"),Bn=require("fs"),Wn=parseInt("0777",8);Hn.exports=Ot.mkdirp=Ot.mkdirP=Ot;function Ot(o,e,t,i){typeof e=="function"?(t=e,e={}):(!e||typeof e!="object")&&(e={mode:e});var s=e.mode,n=e.fs||Bn;s===void 0&&(s=Wn),i||(i=null);var a=t||function(){};o=Xt.resolve(o),n.mkdir(o,s,function(r){if(!r)return i=i||o,a(null,i);switch(r.code){case"ENOENT":if(Xt.dirname(o)===o)return a(r);Ot(Xt.dirname(o),e,function(l,c){l?a(l,c):Ot(o,e,a,c)});break;default:n.stat(o,function(l,c){l||!c.isDirectory()?a(r,i):a(null,i)});break}})}Ot.sync=function o(e,t,i){(!t||typeof t!="object")&&(t={mode:t});var s=t.mode,n=t.fs||Bn;s===void 0&&(s=Wn),i||(i=null),e=Xt.resolve(e);try{n.mkdirSync(e,s),i=i||e}catch(r){switch(r.code){case"ENOENT":i=o(Xt.dirname(e),t,i),o(e,t,i);break;default:var a;try{a=n.statSync(e)}catch{throw r}if(!a.isDirectory())throw r;break}}return i}});var ms=U(Qt=>{"use strict";var Jt=Qt&&Qt.__assign||function(){return Jt=Object.assign||function(o){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(o[s]=e[s])}return o},Jt.apply(this,arguments)};Object.defineProperty(Qt,"__esModule",{value:!0});var sr=Fi(),ps=Vn(),qn=Gn(),nr=Object.prototype;function hs(o){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return new Promise(function(i,s){o.apply(void 0,e.concat([function(n,a){n?s(n):i(a)}]))})}}var fs={replacer:null,space:0,handleCircular:!0},ki={isObject:function(o){return nr.toString.call(o)==="[object Object]"},isPrimitive:function(o){var e=typeof o;return o==null||e!=="function"&&e!=="object"},strLog:function(o,e){if(ki.isPrimitive(o))return o;var t=e?"  ":null;return sr.default(o,null,t)},getLogger:function(o,e){return function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];var s=o.stream,n=t.map(function(a){return a instanceof Error?(s=o.streamErr,a.stack||a.message||String(a)):ki.strLog(a,e)}).join(" ");s.write(n+`
`)}},getStringifyOptions:function(o,e){return ki.isObject(o)?Jt({},fs,o):typeof o=="function"||Array.isArray(o)?Jt({},fs,{replacer:o,space:e}):Jt({},fs,{space:e})},fs:ps,mkdirp:qn,promise:{readFile:hs(ps.readFile),writeFile:hs(ps.writeFile),mkdirp:hs(qn)},safeSync:function(o){return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];try{return[null,o.apply(void 0,e)]}catch(i){return[i,void 0]}}},safeAsync:function(o){return o.then(function(e){return[null,e]}).catch(function(e){return[e,void 0]})}};Qt.helper=ki});var Zn=U(vs=>{"use strict";Object.defineProperty(vs,"__esModule",{value:!0});var or=Fi(),ar=rs(),bs=ms(),we=gs(),ht=bs.helper.safeSync,zn=bs.helper.safeAsync,rr=function(){function o(){}return o.config=function(e){we.jsonc.config(e)},o.log=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];we.jsonc.log.apply(we.jsonc,e)},o.logp=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];we.jsonc.logp.apply(we.jsonc,e)},o.parse=function(e,t){return ht(we.jsonc.parse)(e,t)},o.stringify=function(e,t,i){var s=bs.helper.getStringifyOptions(t,i);try{return[null,or.default(e,s.replacer,s.space)]}catch(n){return[n,void 0]}},o.isJSON=function(e,t){return t===void 0&&(t=!1),we.jsonc.isJSON(e,t)},o.stripComments=function(e,t){return t===void 0&&(t=!1),ht(ar)(e,{whitespace:t})},o.uglify=function(e){return ht(we.jsonc.uglify)(e)},o.beautify=function(e,t){return t===void 0&&(t=2),ht(we.jsonc.beautify)(e,t)},o.normalize=function(e,t){return ht(we.jsonc.normalize)(e,t)},o.read=function(e,t){return zn(we.jsonc.read(e,t))},o.readSync=function(e,t){return ht(we.jsonc.readSync)(e,t)},o.write=function(e,t,i){return zn(we.jsonc.write(e,t,i))},o.writeSync=function(e,t,i){return ht(we.jsonc.writeSync)(e,t,i)},o}();vs.jsoncSafe=rr});var gs=U(Re=>{"use strict";var ft=Re&&Re.__assign||function(){return ft=Object.assign||function(o){for(var e,t=1,i=arguments.length;t<i;t++){e=arguments[t];for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&(o[s]=e[s])}return o},ft.apply(this,arguments)},Kn=Re&&Re.__awaiter||function(o,e,t,i){return new(t||(t=Promise))(function(s,n){function a(c){try{l(i.next(c))}catch(d){n(d)}}function r(c){try{l(i.throw(c))}catch(d){n(d)}}function l(c){c.done?s(c.value):new t(function(d){d(c.value)}).then(a,r)}l((i=i.apply(o,e||[])).next())})},Yn=Re&&Re.__generator||function(o,e){var t={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},i,s,n,a;return a={next:r(0),throw:r(1),return:r(2)},typeof Symbol=="function"&&(a[Symbol.iterator]=function(){return this}),a;function r(c){return function(d){return l([c,d])}}function l(c){if(i)throw new TypeError("Generator is already executing.");for(;t;)try{if(i=1,s&&(n=c[0]&2?s.return:c[0]?s.throw||((n=s.return)&&n.call(s),0):s.next)&&!(n=n.call(s,c[1])).done)return n;switch(s=0,n&&(c=[c[0]&2,n.value]),c[0]){case 0:case 1:n=c;break;case 4:return t.label++,{value:c[1],done:!1};case 5:t.label++,s=c[1],c=[0];continue;case 7:c=t.ops.pop(),t.trys.pop();continue;default:if(n=t.trys,!(n=n.length>0&&n[n.length-1])&&(c[0]===6||c[0]===2)){t=0;continue}if(c[0]===3&&(!n||c[1]>n[0]&&c[1]<n[3])){t.label=c[1];break}if(c[0]===6&&t.label<n[1]){t.label=n[1],n=c;break}if(n&&t.label<n[2]){t.label=n[2],t.ops.push(c);break}n[2]&&t.ops.pop(),t.trys.pop();continue}c=e.call(o,t)}catch(d){c=[6,d],s=0}finally{i=n=0}if(c[0]&5)throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}};Object.defineProperty(Re,"__esModule",{value:!0});var Xn=require("path"),lr=Fi(),_s=xn(),Jn=kn(),ji=rs(),mt=ms(),cr=Zn(),Ei=mt.helper.fs,dr=mt.helper.mkdirp,Cs=mt.helper.promise;var ei=function(){function o(){}return o.config=function(e){var t=ft({stream:process.stdout,streamErr:process.stderr},e||{});o._={logger:mt.helper.getLogger(t,!1),prettyLogger:mt.helper.getLogger(t,!0)}},o.log=function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];(e=o._).logger.apply(e,t)},o.logp=function(){for(var e,t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];(e=o._).prettyLogger.apply(e,t)},o.parse=function(e,t){var i=typeof t=="function"?{reviver:t}:t||{};return i.stripComments!==!1&&(e=ji(e,{whitespace:!1})),_s(e,i.reviver)},o.stringify=function(e,t,i){var s=mt.helper.getStringifyOptions(t,i);return s.handleCircular?lr.default(e,s.replacer,s.space):JSON.stringify(e,s.replacer,s.space)},o.isJSON=function(e,t){if(t===void 0&&(t=!1),typeof e!="string")return!1;var i=o.safe.parse(e,{stripComments:t}),s=i[0],n=i[1];return!s&&(mt.helper.isObject(n)||Array.isArray(n))},o.stripComments=function(e,t){return t===void 0&&(t=!1),ji(e,{whitespace:t})},o.uglify=function(e){return o.stringify(o.parse(e,{stripComments:!0}))},o.beautify=function(e,t){return t===void 0&&(t=2),t||(t=2),o.stringify(o.parse(e),{space:t})},o.normalize=function(e,t){return o.parse(o.stringify(e,{replacer:t}))},o.read=function(e,t){return Kn(this,void 0,void 0,function(){var i,s;return Yn(this,function(n){switch(n.label){case 0:return i=ft({reviver:null,stripComments:!0},t||{}),[4,Cs.readFile(e,"utf8")];case 1:return s=n.sent(),i.stripComments!==!1&&(s=ji(s)),[2,_s(Jn(s),i.reviver,e)]}})})},o.readSync=function(e,t){var i=ft({reviver:null,stripComments:!0},t||{}),s=Ei.readFileSync(e,"utf8");return i.stripComments!==!1&&(s=ji(s)),_s(Jn(s),i.reviver,e)},o.write=function(e,t,i){return Kn(this,void 0,void 0,function(){var s,n;return Yn(this,function(a){switch(a.label){case 0:return s=ft({replacer:null,space:0,mode:438,autoPath:!0},i||{}),s.autoPath?[4,Cs.mkdirp(Xn.dirname(e),{fs:Ei})]:[3,2];case 1:a.sent(),a.label=2;case 2:return n=JSON.stringify(t,s.replacer,s.space),[4,Cs.writeFile(e,n+`
`,{mode:s.mode,encoding:"utf8"})];case 3:return a.sent(),[2,!0]}})})},o.writeSync=function(e,t,i){var s=ft({replacer:null,space:0,mode:438,autoPath:!0},i||{});s.autoPath&&dr.sync(Xn.dirname(e),{fs:Ei});var n=JSON.stringify(t,s.replacer,s.space);return Ei.writeFileSync(e,n+`
`,{mode:s.mode,encoding:"utf8"}),!0},o}();Re.jsonc=ei;ei.config(null);(function(o){o.safe=cr.jsoncSafe})(ei||(ei={}));Re.jsonc=ei});var ti=U((pc,Di)=>{var ys=gs().jsonc;Di.exports=ys;Di.exports.jsonc=ys;Di.exports.safe=ys.safe});var Ps=U(eo=>{eo.require=function(){if(typeof process=="object"&&process.versions&&process.versions.electron)try{let o=require("original-fs");if(Object.keys(o).length>0)return o}catch{}return require("fs")}});var Fs=U((bc,to)=>{to.exports={LOCHDR:30,LOCSIG:67324752,LOCVER:4,LOCFLG:6,LOCHOW:8,LOCTIM:10,LOCCRC:14,LOCSIZ:18,LOCLEN:22,LOCNAM:26,LOCEXT:28,EXTSIG:134695760,EXTHDR:16,EXTCRC:4,EXTSIZ:8,EXTLEN:12,CENHDR:46,CENSIG:33639248,CENVEM:4,CENVER:6,CENFLG:8,CENHOW:10,CENTIM:12,CENCRC:16,CENSIZ:20,CENLEN:24,CENNAM:28,CENEXT:30,CENCOM:32,CENDSK:34,CENATT:36,CENATX:38,CENOFF:42,ENDHDR:22,ENDSIG:101010256,ENDSUB:8,ENDTOT:10,ENDSIZ:12,ENDOFF:16,ENDCOM:20,END64HDR:20,END64SIG:117853008,END64START:4,END64OFF:8,END64NUMDISKS:16,ZIP64SIG:101075792,ZIP64HDR:56,ZIP64LEAD:12,ZIP64SIZE:4,ZIP64VEM:12,ZIP64VER:14,ZIP64DSK:16,ZIP64DSKDIR:20,ZIP64SUB:24,ZIP64TOT:32,ZIP64SIZB:40,ZIP64OFF:48,ZIP64EXTRA:56,STORED:0,SHRUNK:1,REDUCED1:2,REDUCED2:3,REDUCED3:4,REDUCED4:5,IMPLODED:6,DEFLATED:8,ENHANCED_DEFLATED:9,PKWARE:10,BZIP2:12,LZMA:14,IBM_TERSE:18,IBM_LZ77:19,AES_ENCRYPT:99,FLG_ENC:1,FLG_COMP1:2,FLG_COMP2:4,FLG_DESC:8,FLG_ENH:16,FLG_PATCH:32,FLG_STR:64,FLG_EFS:2048,FLG_MSK:4096,FILE:2,BUFFER:1,NONE:0,EF_ID:0,EF_SIZE:2,ID_ZIP64:1,ID_AVINFO:7,ID_PFS:8,ID_OS2:9,ID_NTFS:10,ID_OPENVMS:12,ID_UNIX:13,ID_FORK:14,ID_PATCH:15,ID_X509_PKCS7:20,ID_X509_CERTID_F:21,ID_X509_CERTID_C:22,ID_STRONGENC:23,ID_RECORD_MGT:24,ID_X509_PKCS7_RL:25,ID_IBM1:101,ID_IBM2:102,ID_POSZIP:18064,EF_ZIP64_OR_32:4294967295,EF_ZIP64_OR_16:65535,EF_ZIP64_SUNCOMP:0,EF_ZIP64_SCOMP:8,EF_ZIP64_RHO:16,EF_ZIP64_DSN:24}});var Ss=U((vc,io)=>{io.exports={INVALID_LOC:"Invalid LOC header (bad signature)",INVALID_CEN:"Invalid CEN header (bad signature)",INVALID_END:"Invalid END header (bad signature)",NO_DATA:"Nothing to decompress",BAD_CRC:"CRC32 checksum failed",FILE_IN_THE_WAY:"There is a file in the way: %s",UNKNOWN_METHOD:"Invalid/unsupported compression method",AVAIL_DATA:"inflate::Available inflate data did not terminate",INVALID_DISTANCE:"inflate::Invalid literal/length or distance code in fixed or dynamic block",TO_MANY_CODES:"inflate::Dynamic block code description: too many length or distance codes",INVALID_REPEAT_LEN:"inflate::Dynamic block code description: repeat more than specified lengths",INVALID_REPEAT_FIRST:"inflate::Dynamic block code description: repeat lengths with no first length",INCOMPLETE_CODES:"inflate::Dynamic block code description: code lengths codes incomplete",INVALID_DYN_DISTANCE:"inflate::Dynamic block code description: invalid distance code lengths",INVALID_CODES_LEN:"inflate::Dynamic block code description: invalid literal/length code lengths",INVALID_STORE_BLOCK:"inflate::Stored block length did not match one's complement",INVALID_BLOCK_TYPE:"inflate::Invalid block type (type == 3)",CANT_EXTRACT_FILE:"Could not extract the file",CANT_OVERRIDE:"Target file already exists",NO_ZIP:"No zip file was loaded",NO_ENTRY:"Entry doesn't exist",DIRECTORY_CONTENT_ERROR:"A directory cannot have content",FILE_NOT_FOUND:"File not found: %s",NOT_IMPLEMENTED:"Not implemented",INVALID_FILENAME:"Invalid filename",INVALID_FORMAT:"Invalid or unsupported zip format. No END header found"}});var ao=U((gc,oo)=>{var pr=Ps().require(),ye=require("path"),so=Fs(),hr=Ss(),fr=typeof process=="object"&&process.platform==="win32",no=o=>o&&typeof o=="object",Is=new Uint32Array(256).map((o,e)=>{for(let t=0;t<8;t++)(e&1)!==0?e=3988292384^e>>>1:e>>>=1;return e>>>0});function be(o){this.sep=ye.sep,this.fs=pr,no(o)&&no(o.fs)&&typeof o.fs.statSync=="function"&&(this.fs=o.fs)}oo.exports=be;be.prototype.makeDir=function(o){let e=this;function t(i){let s=i.split(e.sep)[0];i.split(e.sep).forEach(function(n){if(!(!n||n.substr(-1,1)===":")){s+=e.sep+n;var a;try{a=e.fs.statSync(s)}catch{e.fs.mkdirSync(s)}if(a&&a.isFile())throw hr.FILE_IN_THE_WAY.replace("%s",s)}})}t(o)};be.prototype.writeFileTo=function(o,e,t,i){let s=this;if(s.fs.existsSync(o)){if(!t)return!1;var n=s.fs.statSync(o);if(n.isDirectory())return!1}var a=ye.dirname(o);s.fs.existsSync(a)||s.makeDir(a);var r;try{r=s.fs.openSync(o,"w",438)}catch{s.fs.chmodSync(o,438),r=s.fs.openSync(o,"w",438)}if(r)try{s.fs.writeSync(r,e,0,e.length,0)}finally{s.fs.closeSync(r)}return s.fs.chmodSync(o,i||438),!0};be.prototype.writeFileToAsync=function(o,e,t,i,s){typeof i=="function"&&(s=i,i=void 0);let n=this;n.fs.exists(o,function(a){if(a&&!t)return s(!1);n.fs.stat(o,function(r,l){if(a&&l.isDirectory())return s(!1);var c=ye.dirname(o);n.fs.exists(c,function(d){d||n.makeDir(c),n.fs.open(o,"w",438,function(u,h){u?n.fs.chmod(o,438,function(){n.fs.open(o,"w",438,function(p,f){n.fs.write(f,e,0,e.length,0,function(){n.fs.close(f,function(){n.fs.chmod(o,i||438,function(){s(!0)})})})})}):h?n.fs.write(h,e,0,e.length,0,function(){n.fs.close(h,function(){n.fs.chmod(o,i||438,function(){s(!0)})})}):n.fs.chmod(o,i||438,function(){s(!0)})})})})})};be.prototype.findFiles=function(o){let e=this;function t(i,s,n){typeof s=="boolean"&&(n=s,s=void 0);let a=[];return e.fs.readdirSync(i).forEach(function(r){var l=ye.join(i,r);e.fs.statSync(l).isDirectory()&&n&&(a=a.concat(t(l,s,n))),(!s||s.test(l))&&a.push(ye.normalize(l)+(e.fs.statSync(l).isDirectory()?e.sep:""))}),a}return t(o,void 0,!0)};be.prototype.getAttributes=function(){};be.prototype.setAttributes=function(){};be.crc32update=function(o,e){return Is[(o^e)&255]^o>>>8};be.crc32=function(o){typeof o=="string"&&(o=Buffer.from(o,"utf8")),Is.length||genCRCTable();let e=o.length,t=-1;for(let i=0;i<e;)t=be.crc32update(t,o[i++]);return~t>>>0};be.methodToString=function(o){switch(o){case so.STORED:return"STORED ("+o+")";case so.DEFLATED:return"DEFLATED ("+o+")";default:return"UNSUPPORTED ("+o+")"}};be.canonical=function(o){if(!o)return"";var e=ye.posix.normalize("/"+o.split("\\").join("/"));return ye.join(".",e)};be.sanitize=function(o,e){o=ye.resolve(ye.normalize(o));for(var t=e.split("/"),i=0,s=t.length;i<s;i++){var n=ye.normalize(ye.join(o,t.slice(i,s).join(ye.sep)));if(n.indexOf(o)===0)return n}return ye.normalize(ye.join(o,ye.basename(e)))};be.toBuffer=function(e){return Buffer.isBuffer(e)?e:e instanceof Uint8Array?Buffer.from(e):typeof e=="string"?Buffer.from(e,"utf8"):Buffer.alloc(0)};be.readBigUInt64LE=function(o,e){var t=Buffer.from(o.slice(e,e+8));return t.swap64(),parseInt(`0x${t.toString("hex")}`)};be.isWin=fr;be.crcTable=Is});var co=U((_c,lo)=>{var $i=Ps().require(),ro=require("path");$i.existsSync=$i.existsSync||ro.existsSync;lo.exports=function(o){var e=o||"",t=s(),i=null;function s(){return{directory:!1,readonly:!1,hidden:!1,executable:!1,mtime:0,atime:0}}return e&&$i.existsSync(e)?(i=$i.statSync(e),t.directory=i.isDirectory(),t.mtime=i.mtime,t.atime=i.atime,t.executable=(73&i.mode)!==0,t.readonly=(128&i.mode)===0,t.hidden=ro.basename(e)[0]==="."):console.warn("Invalid path: "+e),{get directory(){return t.directory},get readOnly(){return t.readonly},get hidden(){return t.hidden},get mtime(){return t.mtime},get atime(){return t.atime},get executable(){return t.executable},decodeAttributes:function(){},encodeAttributes:function(){},toJSON:function(){return{path:e,isDirectory:t.directory,isReadOnly:t.readonly,isHidden:t.hidden,isExecutable:t.executable,mTime:t.mtime,aTime:t.atime}},toString:function(){return JSON.stringify(this.toJSON(),null,"	")}}}});var Rt=U((Cc,ni)=>{ni.exports=ao();ni.exports.Constants=Fs();ni.exports.Errors=Ss();ni.exports.FileAttr=co()});var po=U((yc,uo)=>{var oi=Rt(),M=oi.Constants;uo.exports=function(){var o=20,e=10,t=0,i=0,s=0,n=0,a=0,r=0,l=0,c=0,d=0,u=0,h=0,p=0,f=0;o|=oi.isWin?2560:768,t|=M.FLG_EFS;var b={};function v(m){m=new Date(m),s=(m.getFullYear()-1980&127)<<25|m.getMonth()+1<<21|m.getDate()<<16|m.getHours()<<11|m.getMinutes()<<5|m.getSeconds()>>1}return v(+new Date),{get made(){return o},set made(m){o=m},get version(){return e},set version(m){e=m},get flags(){return t},set flags(m){t=m},get method(){return i},set method(m){switch(m){case M.STORED:this.version=10;case M.DEFLATED:default:this.version=20}i=m},get time(){return new Date((s>>25&127)+1980,(s>>21&15)-1,s>>16&31,s>>11&31,s>>5&63,(s&31)<<1)},set time(m){v(m)},get timeHighByte(){return s>>>8&255},get crc(){return n},set crc(m){n=Math.max(0,m)>>>0},get compressedSize(){return a},set compressedSize(m){a=Math.max(0,m)>>>0},get size(){return r},set size(m){r=Math.max(0,m)>>>0},get fileNameLength(){return l},set fileNameLength(m){l=m},get extraLength(){return c},set extraLength(m){c=m},get commentLength(){return d},set commentLength(m){d=m},get diskNumStart(){return u},set diskNumStart(m){u=Math.max(0,m)>>>0},get inAttr(){return h},set inAttr(m){h=Math.max(0,m)>>>0},get attr(){return p},set attr(m){p=Math.max(0,m)>>>0},get fileAttr(){return p?(p>>>0|0)>>16&4095:0},get offset(){return f},set offset(m){f=Math.max(0,m)>>>0},get encripted(){return(t&1)===1},get entryHeaderSize(){return M.CENHDR+l+c+d},get realDataOffset(){return f+M.LOCHDR+b.fnameLen+b.extraLen},get dataHeader(){return b},loadDataHeaderFromBinary:function(m){var _=m.slice(f,f+M.LOCHDR);if(_.readUInt32LE(0)!==M.LOCSIG)throw new Error(oi.Errors.INVALID_LOC);b={version:_.readUInt16LE(M.LOCVER),flags:_.readUInt16LE(M.LOCFLG),method:_.readUInt16LE(M.LOCHOW),time:_.readUInt32LE(M.LOCTIM),crc:_.readUInt32LE(M.LOCCRC),compressedSize:_.readUInt32LE(M.LOCSIZ),size:_.readUInt32LE(M.LOCLEN),fnameLen:_.readUInt16LE(M.LOCNAM),extraLen:_.readUInt16LE(M.LOCEXT)}},loadFromBinary:function(m){if(m.length!==M.CENHDR||m.readUInt32LE(0)!==M.CENSIG)throw new Error(oi.Errors.INVALID_CEN);o=m.readUInt16LE(M.CENVEM),e=m.readUInt16LE(M.CENVER),t=m.readUInt16LE(M.CENFLG),i=m.readUInt16LE(M.CENHOW),s=m.readUInt32LE(M.CENTIM),n=m.readUInt32LE(M.CENCRC),a=m.readUInt32LE(M.CENSIZ),r=m.readUInt32LE(M.CENLEN),l=m.readUInt16LE(M.CENNAM),c=m.readUInt16LE(M.CENEXT),d=m.readUInt16LE(M.CENCOM),u=m.readUInt16LE(M.CENDSK),h=m.readUInt16LE(M.CENATT),p=m.readUInt32LE(M.CENATX),f=m.readUInt32LE(M.CENOFF)},dataHeaderToBinary:function(){var m=Buffer.alloc(M.LOCHDR);return m.writeUInt32LE(M.LOCSIG,0),m.writeUInt16LE(e,M.LOCVER),m.writeUInt16LE(t,M.LOCFLG),m.writeUInt16LE(i,M.LOCHOW),m.writeUInt32LE(s,M.LOCTIM),m.writeUInt32LE(n,M.LOCCRC),m.writeUInt32LE(a,M.LOCSIZ),m.writeUInt32LE(r,M.LOCLEN),m.writeUInt16LE(l,M.LOCNAM),m.writeUInt16LE(c,M.LOCEXT),m},entryHeaderToBinary:function(){var m=Buffer.alloc(M.CENHDR+l+c+d);return m.writeUInt32LE(M.CENSIG,0),m.writeUInt16LE(o,M.CENVEM),m.writeUInt16LE(e,M.CENVER),m.writeUInt16LE(t,M.CENFLG),m.writeUInt16LE(i,M.CENHOW),m.writeUInt32LE(s,M.CENTIM),m.writeUInt32LE(n,M.CENCRC),m.writeUInt32LE(a,M.CENSIZ),m.writeUInt32LE(r,M.CENLEN),m.writeUInt16LE(l,M.CENNAM),m.writeUInt16LE(c,M.CENEXT),m.writeUInt16LE(d,M.CENCOM),m.writeUInt16LE(u,M.CENDSK),m.writeUInt16LE(h,M.CENATT),m.writeUInt32LE(p,M.CENATX),m.writeUInt32LE(f,M.CENOFF),m.fill(0,M.CENHDR),m},toJSON:function(){let m=function(_){return _+" bytes"};return{made:o,version:e,flags:t,method:oi.methodToString(i),time:this.time,crc:"0x"+n.toString(16).toUpperCase(),compressedSize:m(a),size:m(r),fileNameLength:m(l),extraLength:m(c),commentLength:m(d),diskNumStart:u,inAttr:h,attr:p,offset:f,entryHeaderSize:m(M.CENHDR+l+c+d)}},toString:function(){return JSON.stringify(this.toJSON(),null,"	")}}}});var fo=U((Pc,ho)=>{var Ut=Rt(),ne=Ut.Constants;ho.exports=function(){var o=0,e=0,t=0,i=0,s=0;return{get diskEntries(){return o},set diskEntries(n){o=e=n},get totalEntries(){return e},set totalEntries(n){e=o=n},get size(){return t},set size(n){t=n},get offset(){return i},set offset(n){i=n},get commentLength(){return s},set commentLength(n){s=n},get mainHeaderSize(){return ne.ENDHDR+s},loadFromBinary:function(n){if((n.length!==ne.ENDHDR||n.readUInt32LE(0)!==ne.ENDSIG)&&(n.length<ne.ZIP64HDR||n.readUInt32LE(0)!==ne.ZIP64SIG))throw new Error(Ut.Errors.INVALID_END);n.readUInt32LE(0)===ne.ENDSIG?(o=n.readUInt16LE(ne.ENDSUB),e=n.readUInt16LE(ne.ENDTOT),t=n.readUInt32LE(ne.ENDSIZ),i=n.readUInt32LE(ne.ENDOFF),s=n.readUInt16LE(ne.ENDCOM)):(o=Ut.readBigUInt64LE(n,ne.ZIP64SUB),e=Ut.readBigUInt64LE(n,ne.ZIP64TOT),t=Ut.readBigUInt64LE(n,ne.ZIP64SIZE),i=Ut.readBigUInt64LE(n,ne.ZIP64OFF),s=0)},toBinary:function(){var n=Buffer.alloc(ne.ENDHDR+s);return n.writeUInt32LE(ne.ENDSIG,0),n.writeUInt32LE(0,4),n.writeUInt16LE(o,ne.ENDSUB),n.writeUInt16LE(e,ne.ENDTOT),n.writeUInt32LE(t,ne.ENDSIZ),n.writeUInt32LE(i,ne.ENDOFF),n.writeUInt16LE(s,ne.ENDCOM),n.fill(" ",ne.ENDHDR),n},toJSON:function(){let n=function(a,r){let l=a.toString(16).toUpperCase();for(;l.length<r;)l="0"+l;return"0x"+l};return{diskEntries:o,totalEntries:e,size:t+" bytes",offset:n(i,4),commentLength:s}},toString:function(){return JSON.stringify(this.toJSON(),null,"	")}}}});var ws=U(xs=>{xs.EntryHeader=po();xs.MainHeader=fo()});var bo=U((Sc,mo)=>{mo.exports=function(o){var e=require("zlib"),t={chunkSize:(parseInt(o.length/1024)+1)*1024};return{deflate:function(){return e.deflateRawSync(o,t)},deflateAsync:function(i){var s=e.createDeflateRaw(t),n=[],a=0;s.on("data",function(r){n.push(r),a+=r.length}),s.on("end",function(){var r=Buffer.alloc(a),l=0;r.fill(0);for(var c=0;c<n.length;c++){var d=n[c];d.copy(r,l),l+=d.length}i&&i(r)}),s.end(o)}}}});var go=U((Ic,vo)=>{vo.exports=function(o){var e=require("zlib");return{inflate:function(){return e.inflateRawSync(o)},inflateAsync:function(t){var i=e.createInflateRaw(),s=[],n=0;i.on("data",function(a){s.push(a),n+=a.length}),i.on("end",function(){var a=Buffer.alloc(n),r=0;a.fill(0);for(var l=0;l<s.length;l++){var c=s[l];c.copy(a,r),r+=c.length}t&&t(a)}),i.end(o)}}}});var Fo=U((xc,Po)=>{"use strict";var{randomFillSync:_o}=require("crypto"),mr=new Uint32Array(256).map((o,e)=>{for(let t=0;t<8;t++)(e&1)!==0?e=e>>>1^3988292384:e>>>=1;return e>>>0}),yo=(o,e)=>Math.imul(o,e)>>>0,Co=(o,e)=>mr[(o^e)&255]^o>>>8,ai=()=>typeof _o=="function"?_o(Buffer.alloc(12)):ai.node();ai.node=()=>{let o=Buffer.alloc(12),e=o.length;for(let t=0;t<e;t++)o[t]=Math.random()*256&255;return o};var Ti={genSalt:ai};function Ri(o){let e=Buffer.isBuffer(o)?o:Buffer.from(o);this.keys=new Uint32Array([305419896,591751049,878082192]);for(let t=0;t<e.length;t++)this.updateKeys(e[t])}Ri.prototype.updateKeys=function(o){let e=this.keys;return e[0]=Co(e[0],o),e[1]+=e[0]&255,e[1]=yo(e[1],134775813)+1,e[2]=Co(e[2],e[1]>>>24),o};Ri.prototype.next=function(){let o=(this.keys[2]|2)>>>0;return yo(o,o^1)>>8&255};function br(o){let e=new Ri(o);return function(t){let i=Buffer.alloc(t.length),s=0;for(let n of t)i[s++]=e.updateKeys(n^e.next());return i}}function vr(o){let e=new Ri(o);return function(t,i,s=0){i||(i=Buffer.alloc(t.length));for(let n of t){let a=e.next();i[s++]=n^a,e.updateKeys(n)}return i}}function gr(o,e,t){if(!o||!Buffer.isBuffer(o)||o.length<12)return Buffer.alloc(0);let i=br(t),s=i(o.slice(0,12)),n=(e.flags&8)===8?e.timeHighByte:e.crc>>>24;if(s[11]!==n)throw"ADM-ZIP: Wrong Password";return i(o.slice(12))}function _r(o){Buffer.isBuffer(o)&&o.length>=12?Ti.genSalt=function(){return o.slice(0,12)}:o==="node"?Ti.genSalt=ai.node:Ti.genSalt=ai}function Cr(o,e,t,i=!1){o==null&&(o=Buffer.alloc(0)),Buffer.isBuffer(o)||(o=Buffer.from(o.toString()));let s=vr(t),n=Ti.genSalt();n[11]=e.crc>>>24&255,i&&(n[10]=e.crc>>>16&255);let a=Buffer.alloc(o.length+12);return s(n,a),s(o,a,12)}Po.exports={decrypt:gr,encrypt:Cr,_salter:_r}});var So=U(Ui=>{Ui.Deflater=bo();Ui.Inflater=go();Ui.ZipCrypto=Fo()});var js=U((kc,Io)=>{var de=Rt(),yr=ws(),je=de.Constants,ks=So();Io.exports=function(o){var e=new yr.EntryHeader,t=Buffer.alloc(0),i=Buffer.alloc(0),s=!1,n=null,a=Buffer.alloc(0);function r(){return!o||!Buffer.isBuffer(o)?Buffer.alloc(0):(e.loadDataHeaderFromBinary(o),o.slice(e.realDataOffset,e.realDataOffset+e.compressedSize))}function l(f){return!((e.flags&8)!==8&&de.crc32(f)!==e.dataHeader.crc)}function c(f,b,v){if(typeof b>"u"&&typeof f=="string"&&(v=f,f=void 0),s)return f&&b&&b(Buffer.alloc(0),de.Errors.DIRECTORY_CONTENT_ERROR),Buffer.alloc(0);var m=r();if(m.length===0)return f&&b&&b(m),m;if(e.encripted){if(typeof v!="string"&&!Buffer.isBuffer(v))throw new Error("ADM-ZIP: Incompatible password parameter");m=ks.ZipCrypto.decrypt(m,e,v)}var _=Buffer.alloc(e.size);switch(e.method){case de.Constants.STORED:if(m.copy(_),l(_))return f&&b&&b(_),_;throw f&&b&&b(_,de.Errors.BAD_CRC),new Error(de.Errors.BAD_CRC);case de.Constants.DEFLATED:var C=new ks.Inflater(m);if(f)C.inflateAsync(function(P){P.copy(P,0),b&&(l(P)?b(P):b(P,de.Errors.BAD_CRC))});else{if(C.inflate(_).copy(_,0),!l(_))throw new Error(de.Errors.BAD_CRC+" "+t.toString());return _}break;default:throw f&&b&&b(Buffer.alloc(0),de.Errors.UNKNOWN_METHOD),new Error(de.Errors.UNKNOWN_METHOD)}}function d(f,b){if((!n||!n.length)&&Buffer.isBuffer(o))return f&&b&&b(r()),r();if(n.length&&!s){var v;switch(e.method){case de.Constants.STORED:return e.compressedSize=e.size,v=Buffer.alloc(n.length),n.copy(v),f&&b&&b(v),v;default:case de.Constants.DEFLATED:var m=new ks.Deflater(n);if(f)m.deflateAsync(function(C){v=Buffer.alloc(C.length),e.compressedSize=C.length,C.copy(v),b&&b(v)});else{var _=m.deflate();return e.compressedSize=_.length,_}m=null;break}}else if(f&&b)b(Buffer.alloc(0));else return Buffer.alloc(0)}function u(f,b){return(f.readUInt32LE(b+4)<<4)+f.readUInt32LE(b)}function h(f){for(var b=0,v,m,_;b<f.length;)v=f.readUInt16LE(b),b+=2,m=f.readUInt16LE(b),b+=2,_=f.slice(b,b+m),b+=m,je.ID_ZIP64===v&&p(_)}function p(f){var b,v,m,_;f.length>=je.EF_ZIP64_SCOMP&&(b=u(f,je.EF_ZIP64_SUNCOMP),e.size===je.EF_ZIP64_OR_32&&(e.size=b)),f.length>=je.EF_ZIP64_RHO&&(v=u(f,je.EF_ZIP64_SCOMP),e.compressedSize===je.EF_ZIP64_OR_32&&(e.compressedSize=v)),f.length>=je.EF_ZIP64_DSN&&(m=u(f,je.EF_ZIP64_RHO),e.offset===je.EF_ZIP64_OR_32&&(e.offset=m)),f.length>=je.EF_ZIP64_DSN+4&&(_=f.readUInt32LE(je.EF_ZIP64_DSN),e.diskNumStart===je.EF_ZIP64_OR_16&&(e.diskNumStart=_))}return{get entryName(){return t.toString()},get rawEntryName(){return t},set entryName(f){t=de.toBuffer(f);var b=t[t.length-1];s=b===47||b===92,e.fileNameLength=t.length},get extra(){return a},set extra(f){a=f,e.extraLength=f.length,h(f)},get comment(){return i.toString()},set comment(f){i=de.toBuffer(f),e.commentLength=i.length},get name(){var f=t.toString();return s?f.substr(f.length-1).split("/").pop():f.split("/").pop()},get isDirectory(){return s},getCompressedData:function(){return d(!1,null)},getCompressedDataAsync:function(f){d(!0,f)},setData:function(f){n=de.toBuffer(f),!s&&n.length?(e.size=n.length,e.method=de.Constants.DEFLATED,e.crc=de.crc32(f),e.changed=!0):e.method=de.Constants.STORED},getData:function(f){return e.changed?n:c(!1,null,f)},getDataAsync:function(f,b){e.changed?f(n):c(!0,f,b)},set attr(f){e.attr=f},get attr(){return e.attr},set header(f){e.loadFromBinary(f)},get header(){return e},packHeader:function(){var f=e.entryHeaderToBinary(),b=de.Constants.CENHDR;return t.copy(f,b),b+=t.length,e.extraLength&&(a.copy(f,b),b+=e.extraLength),e.commentLength&&i.copy(f,b),f},toJSON:function(){let f=function(b){return"<"+(b&&b.length+" bytes buffer"||"null")+">"};return{entryName:this.entryName,name:this.name,comment:this.comment,isDirectory:this.isDirectory,header:e.toJSON(),compressedData:f(o),data:f(n)}},toString:function(){return JSON.stringify(this.toJSON(),null,"	")}}}});var ko=U((jc,wo)=>{var xo=js(),Pr=ws(),ge=Rt();wo.exports=function(o,e){var t=[],i={},s=Buffer.alloc(0),n=new Pr.MainHeader,a=!1,r=null;let l=Object.assign(Object.create(null),e),{noSort:c}=l;o?h(l.readEntries):a=!0;function d(f){let b=n.diskEntries,v=n.offset;for(let m=0;m<b;m++){let _=v,C=new xo(o);C.header=o.slice(_,_+=ge.Constants.CENHDR),C.entryName=o.slice(_,_+=C.header.fileNameLength),v+=C.header.entryHeaderSize,f(C)}}function u(){a=!0,i={},t=new Array(n.diskEntries);for(var f=n.offset,b=0;b<t.length;b++){var v=f,m=new xo(o);m.header=o.slice(v,v+=ge.Constants.CENHDR),m.entryName=o.slice(v,v+=m.header.fileNameLength),m.header.extraLength&&(m.extra=o.slice(v,v+=m.header.extraLength)),m.header.commentLength&&(m.comment=o.slice(v,v+m.header.commentLength)),f+=m.header.entryHeaderSize,t[b]=m,i[m.entryName]=m}}function h(f){var b=o.length-ge.Constants.ENDHDR,v=Math.max(0,b-65535),m=v,_=o.length,C=-1,P=0;for(b;b>=m;b--)if(o[b]===80){if(o.readUInt32LE(b)===ge.Constants.ENDSIG){C=b,P=b,_=b+ge.Constants.ENDHDR,m=b-ge.Constants.END64HDR;continue}if(o.readUInt32LE(b)===ge.Constants.END64SIG){m=v;continue}if(o.readUInt32LE(b)===ge.Constants.ZIP64SIG){C=b,_=b+ge.readBigUInt64LE(o,b+ge.Constants.ZIP64SIZE)+ge.Constants.ZIP64LEAD;break}}if(!~C)throw new Error(ge.Errors.INVALID_FORMAT);n.loadFromBinary(o.slice(C,_)),n.commentLength&&(s=o.slice(P+ge.Constants.ENDHDR)),f&&u()}function p(){t.length>1&&!c&&t.sort((f,b)=>f.entryName.toLowerCase().localeCompare(b.entryName.toLowerCase()))}return{get entries(){return a||u(),t},get comment(){return s.toString()},set comment(f){s=ge.toBuffer(f),n.commentLength=s.length},getEntryCount:function(){return a?t.length:n.diskEntries},forEach:function(f){if(!a){d(f);return}t.forEach(f)},getEntry:function(f){return a||u(),i[f]||null},setEntry:function(f){a||u(),t.push(f),i[f.entryName]=f,n.totalEntries=t.length},deleteEntry:function(f){a||u();var b=i[f];if(b&&b.isDirectory){var v=this;this.getEntryChildren(b).forEach(function(m){m.entryName!==f&&v.deleteEntry(m.entryName)})}t.splice(t.indexOf(b),1),delete i[f],n.totalEntries=t.length},getEntryChildren:function(f){if(a||u(),f&&f.isDirectory){let b=[],v=f.entryName,m=v.length;return t.forEach(function(_){_.entryName.substr(0,m)===v&&b.push(_)}),b}return[]},compressToBuffer:function(){a||u(),p();let f=[],b=[],v=0,m=0;n.size=0,n.offset=0;for(let P of t){let D=P.getCompressedData();P.header.offset=m;let N=P.header.dataHeaderToBinary(),S=P.rawEntryName.length,g=Buffer.alloc(S+P.extra.length);P.rawEntryName.copy(g,0),P.extra.copy(g,S);let x=N.length+g.length+D.length;m+=x,f.push(N),f.push(g),f.push(D);let k=P.packHeader();b.push(k),n.size+=k.length,v+=x+k.length}v+=n.mainHeaderSize,n.offset=m,m=0;let _=Buffer.alloc(v);for(let P of f)P.copy(_,m),m+=P.length;for(let P of b)P.copy(_,m),m+=P.length;let C=n.toBinary();return s&&s.copy(C,ge.Constants.ENDHDR),C.copy(_,m),_},toAsyncBuffer:function(f,b,v,m){try{a||u(),p();let _=[],C=[],P=0,D=0;n.size=0,n.offset=0;let N=function(S){if(S.length){let g=S.pop(),x=g.entryName+g.extra.toString();v&&v(x),g.getCompressedDataAsync(function(k){m&&m(x),g.header.offset=D;let F=g.header.dataHeaderToBinary(),E=Buffer.alloc(x.length,x),L=F.length+E.length+k.length;D+=L,_.push(F),_.push(E),_.push(k);let $=g.packHeader();C.push($),n.size+=$.length,P+=L+$.length,N(S)})}else{P+=n.mainHeaderSize,n.offset=D,D=0;let g=Buffer.alloc(P);_.forEach(function(k){k.copy(g,D),D+=k.length}),C.forEach(function(k){k.copy(g,D),D+=k.length});let x=n.toBinary();s&&s.copy(x,ge.Constants.ENDHDR),x.copy(g,D),f(g)}};N(t)}catch(_){b(_)}}}}});var Ds=U((Ec,jo)=>{var he=Rt(),Ve=require("path"),Fr=js(),Sr=ko(),gt=(o,e)=>typeof o=="boolean"?o:e,Es=(o,e)=>typeof o=="string"?o:e,Ir={noSort:!1,readEntries:!1,method:he.Constants.NONE,fs:null};jo.exports=function(o,e){let t=null,i=Object.assign(Object.create(null),Ir);o&&typeof o=="object"&&(o instanceof Uint8Array||(Object.assign(i,o),o=i.input?i.input:void 0,i.input&&delete i.input),Buffer.isBuffer(o)&&(t=o,i.method=he.Constants.BUFFER,o=void 0)),Object.assign(i,e);let s=new he(i);if(o&&typeof o=="string")if(s.fs.existsSync(o))i.method=he.Constants.FILE,i.filename=o,t=s.fs.readFileSync(o);else throw new Error(he.Errors.INVALID_FILENAME);let n=new Sr(t,i),{canonical:a,sanitize:r}=he;function l(d){if(d&&n){var u;if(typeof d=="string"&&(u=n.getEntry(d)),typeof d=="object"&&typeof d.entryName<"u"&&typeof d.header<"u"&&(u=n.getEntry(d.entryName)),u)return u}return null}function c(d){let{join:u,normalize:h,sep:p}=Ve.posix;return u(".",h(p+d.split("\\").join(p)+p))}return{readFile:function(d,u){var h=l(d);return h&&h.getData(u)||null},readFileAsync:function(d,u){var h=l(d);h?h.getDataAsync(u):u(null,"getEntry failed for:"+d)},readAsText:function(d,u){var h=l(d);if(h){var p=h.getData();if(p&&p.length)return p.toString(u||"utf8")}return""},readAsTextAsync:function(d,u,h){var p=l(d);p?p.getDataAsync(function(f,b){if(b){u(f,b);return}f&&f.length?u(f.toString(h||"utf8")):u("")}):u("")},deleteFile:function(d){var u=l(d);u&&n.deleteEntry(u.entryName)},addZipComment:function(d){n.comment=d},getZipComment:function(){return n.comment||""},addZipEntryComment:function(d,u){var h=l(d);h&&(h.comment=u)},getZipEntryComment:function(d){var u=l(d);return u&&u.comment||""},updateFile:function(d,u){var h=l(d);h&&h.setData(u)},addLocalFile:function(d,u,h,p){if(s.fs.existsSync(d)){u=u?c(u):"";var f=d.split("\\").join("/").split("/").pop();u+=h||f;let b=s.fs.statSync(d);this.addFile(u,s.fs.readFileSync(d),p,b)}else throw new Error(he.Errors.FILE_NOT_FOUND.replace("%s",d))},addLocalFolder:function(d,u,h,p){if(h instanceof RegExp?h=function(f){return function(b){return f.test(b)}}(h):typeof h!="function"&&(h=function(){return!0}),u=u?c(u):"",d=Ve.normalize(d),s.fs.existsSync(d)){let f=s.findFiles(d),b=this;f.length&&f.forEach(function(v){var m=Ve.relative(d,v).split("\\").join("/");if(h(m)){var _=s.fs.statSync(v);_.isFile()?b.addFile(u+m,s.fs.readFileSync(v),"",p||_):b.addFile(u+m+"/",Buffer.alloc(0),"",p||_)}})}else throw new Error(he.Errors.FILE_NOT_FOUND.replace("%s",d))},addLocalFolderAsync:function(d,u,h,p){p instanceof RegExp?p=function(b){return function(v){return b.test(v)}}(p):typeof p!="function"&&(p=function(){return!0}),h=h?c(h):"",d=Ve.normalize(d);var f=this;s.fs.open(d,"r",function(b){if(b&&b.code==="ENOENT")u(void 0,he.Errors.FILE_NOT_FOUND.replace("%s",d));else if(b)u(void 0,b);else{var v=s.findFiles(d),m=-1,_=function(){if(m+=1,m<v.length){var C=v[m],P=Ve.relative(d,C).split("\\").join("/");P=P.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^\x20-\x7E]/g,""),p(P)?s.fs.stat(C,function(D,N){D&&u(void 0,D),N.isFile()?s.fs.readFile(C,function(S,g){S?u(void 0,S):(f.addFile(h+P,g,"",N),_())}):(f.addFile(h+P+"/",Buffer.alloc(0),"",N),_())}):process.nextTick(()=>{_()})}else u(!0,void 0)};_()}})},addLocalFolderPromise:function(d,u){return new Promise((h,p)=>{let{filter:f,zipPath:b}=Object.assign({},u);this.addLocalFolderAsync(d,(v,m)=>{m&&p(m),v&&h(this)},b,f)})},addFile:function(d,u,h,p){let f=l(d),b=f!=null;b||(f=new Fr,f.entryName=d),f.comment=h||"";let v=typeof p=="object"&&p instanceof s.fs.Stats;v&&(f.header.time=p.mtime);var m=f.isDirectory?16:0;let _=f.isDirectory?16384:32768;v?_|=4095&p.mode:typeof p=="number"?_|=4095&p:_|=f.isDirectory?493:420,m=(m|_<<16)>>>0,f.attr=m,f.setData(u),b||n.setEntry(f)},getEntries:function(d){return n.password=d,n?n.entries:[]},getEntry:function(d){return l(d)},getEntryCount:function(){return n.getEntryCount()},forEach:function(d){return n.forEach(d)},extractEntryTo:function(d,u,h,p,f,b){p=gt(p,!1),f=gt(f,!1),h=gt(h,!0),b=Es(b,Es(f,void 0));var v=l(d);if(!v)throw new Error(he.Errors.NO_ENTRY);var m=a(v.entryName),_=r(u,b&&!v.isDirectory?b:h?m:Ve.basename(m));if(v.isDirectory){var C=n.getEntryChildren(v);return C.forEach(function(N){if(N.isDirectory)return;var S=N.getData();if(!S)throw new Error(he.Errors.CANT_EXTRACT_FILE);var g=a(N.entryName),x=r(u,h?g:Ve.basename(g));let k=f?N.header.fileAttr:void 0;s.writeFileTo(x,S,p,k)}),!0}var P=v.getData(n.password);if(!P)throw new Error(he.Errors.CANT_EXTRACT_FILE);if(s.fs.existsSync(_)&&!p)throw new Error(he.Errors.CANT_OVERRIDE);let D=f?d.header.fileAttr:void 0;return s.writeFileTo(_,P,p,D),!0},test:function(d){if(!n)return!1;for(var u in n.entries)try{if(u.isDirectory)continue;var h=n.entries[u].getData(d);if(!h)return!1}catch{return!1}return!0},extractAllTo:function(d,u,h,p){if(u=gt(u,!1),p=Es(h,p),h=gt(h,!1),!n)throw new Error(he.Errors.NO_ZIP);n.entries.forEach(function(f){var b=r(d,a(f.entryName.toString()));if(f.isDirectory){s.makeDir(b);return}var v=f.getData(p);if(!v)throw new Error(he.Errors.CANT_EXTRACT_FILE);let m=h?f.header.fileAttr:void 0;s.writeFileTo(b,v,u,m);try{s.fs.utimesSync(b,f.header.time,f.header.time)}catch{throw new Error(he.Errors.CANT_EXTRACT_FILE)}})},extractAllToAsync:function(d,u,h,p){if(u=gt(u,!1),typeof h=="function"&&!p&&(p=h),h=gt(h,!1),p||(p=function(C){throw new Error(C)}),!n){p(new Error(he.Errors.NO_ZIP));return}d=Ve.resolve(d);let f=C=>r(d,Ve.normalize(a(C.entryName.toString()))),b=(C,P)=>new Error(C+': "'+P+'"'),v=[],m=new Set;n.entries.forEach(C=>{C.isDirectory?v.push(C):m.add(C)});for(let C of v){let P=f(C),D=h?C.header.fileAttr:void 0;try{s.makeDir(P),D&&s.fs.chmodSync(P,D),s.fs.utimesSync(P,C.header.time,C.header.time)}catch{p(b("Unable to create folder",P))}}let _=()=>{m.size===0&&p()};for(let C of m.values()){let P=Ve.normalize(a(C.entryName.toString())),D=r(d,P);C.getDataAsync(function(N,S){if(S){p(new Error(S));return}if(!N)p(new Error(he.Errors.CANT_EXTRACT_FILE));else{let g=h?C.header.fileAttr:void 0;s.writeFileToAsync(D,N,u,g,function(x){if(!x){p(b("Unable to write file",D));return}s.fs.utimes(D,C.header.time,C.header.time,function(k){if(k){p(b("Unable to set times",D));return}_(),m.delete(C)})})}})}_()},writeZip:function(d,u){if(arguments.length===1&&typeof d=="function"&&(u=d,d=""),!d&&i.filename&&(d=i.filename),!!d){var h=n.compressToBuffer();if(h){var p=s.writeFileTo(d,h,!0);typeof u=="function"&&u(p?null:new Error("failed"),"")}}},writeZipPromise:function(d,u){let{overwrite:h,perm:p}=Object.assign({overwrite:!0},u);return new Promise((f,b)=>{!d&&i.filename&&(d=i.filename),d||b("ADM-ZIP: ZIP File Name Missing"),this.toBufferPromise().then(v=>{let m=_=>_?f(_):b("ADM-ZIP: Wasn't able to write zip file");s.writeFileToAsync(d,v,h,p,m)},b)})},toBufferPromise:function(){return new Promise((d,u)=>{n.toAsyncBuffer(d,u)})},toBuffer:function(d,u,h,p){return this.valueOf=2,typeof d=="function"?(n.toAsyncBuffer(d,u,h,p),null):n.compressToBuffer()}}}});var Yi=U(Ye=>{"use strict";var Wo=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",Nr=Wo+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",Ho="["+Wo+"]["+Nr+"]*",Mr=new RegExp("^"+Ho+"$"),Ar=function(o,e){let t=[],i=e.exec(o);for(;i;){let s=[];s.startIndex=e.lastIndex-i[0].length;let n=i.length;for(let a=0;a<n;a++)s.push(i[a]);t.push(s),i=e.exec(o)}return t},Lr=function(o){let e=Mr.exec(o);return!(e===null||typeof e>"u")};Ye.isExist=function(o){return typeof o<"u"};Ye.isEmptyObject=function(o){return Object.keys(o).length===0};Ye.merge=function(o,e,t){if(e){let i=Object.keys(e),s=i.length;for(let n=0;n<s;n++)t==="strict"?o[i[n]]=[e[i[n]]]:o[i[n]]=e[i[n]]}};Ye.getValue=function(o){return Ye.isExist(o)?o:""};Ye.isName=Lr;Ye.getAllMatches=Ar;Ye.nameRegexp=Ho});var Vs=U(Ko=>{"use strict";var Us=Yi(),Or={allowBooleanAttributes:!1,unpairedTags:[]};Ko.validate=function(o,e){e=Object.assign({},Or,e);let t=[],i=!1,s=!1;o[0]==="\uFEFF"&&(o=o.substr(1));for(let n=0;n<o.length;n++)if(o[n]==="<"&&o[n+1]==="?"){if(n+=2,n=qo(o,n),n.err)return n}else if(o[n]==="<"){let a=n;if(n++,o[n]==="!"){n=zo(o,n);continue}else{let r=!1;o[n]==="/"&&(r=!0,n++);let l="";for(;n<o.length&&o[n]!==">"&&o[n]!==" "&&o[n]!=="	"&&o[n]!==`
`&&o[n]!=="\r";n++)l+=o[n];if(l=l.trim(),l[l.length-1]==="/"&&(l=l.substring(0,l.length-1),n--),!Hr(l)){let u;return l.trim().length===0?u="Invalid space after '<'.":u="Tag '"+l+"' is an invalid name.",le("InvalidTag",u,Fe(o,n))}let c=Rr(o,n);if(c===!1)return le("InvalidAttr","Attributes for '"+l+"' have open quote.",Fe(o,n));let d=c.value;if(n=c.index,d[d.length-1]==="/"){let u=n-d.length;d=d.substring(0,d.length-1);let h=Zo(d,e);if(h===!0)i=!0;else return le(h.err.code,h.err.msg,Fe(o,u+h.err.line))}else if(r)if(c.tagClosed){if(d.trim().length>0)return le("InvalidTag","Closing tag '"+l+"' can't have attributes or invalid starting.",Fe(o,a));if(t.length===0)return le("InvalidTag","Closing tag '"+l+"' has not been opened.",Fe(o,a));{let u=t.pop();if(l!==u.tagName){let h=Fe(o,u.tagStartPos);return le("InvalidTag","Expected closing tag '"+u.tagName+"' (opened in line "+h.line+", col "+h.col+") instead of closing tag '"+l+"'.",Fe(o,a))}t.length==0&&(s=!0)}}else return le("InvalidTag","Closing tag '"+l+"' doesn't have proper closing.",Fe(o,n));else{let u=Zo(d,e);if(u!==!0)return le(u.err.code,u.err.msg,Fe(o,n-d.length+u.err.line));if(s===!0)return le("InvalidXml","Multiple possible root nodes found.",Fe(o,n));e.unpairedTags.indexOf(l)!==-1||t.push({tagName:l,tagStartPos:a}),i=!0}for(n++;n<o.length;n++)if(o[n]==="<")if(o[n+1]==="!"){n++,n=zo(o,n);continue}else if(o[n+1]==="?"){if(n=qo(o,++n),n.err)return n}else break;else if(o[n]==="&"){let u=Br(o,n);if(u==-1)return le("InvalidChar","char '&' is not expected.",Fe(o,n));n=u}else if(s===!0&&!Go(o[n]))return le("InvalidXml","Extra text at the end",Fe(o,n));o[n]==="<"&&n--}}else{if(Go(o[n]))continue;return le("InvalidChar","char '"+o[n]+"' is not expected.",Fe(o,n))}if(i){if(t.length==1)return le("InvalidTag","Unclosed tag '"+t[0].tagName+"'.",Fe(o,t[0].tagStartPos));if(t.length>0)return le("InvalidXml","Invalid '"+JSON.stringify(t.map(n=>n.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1})}else return le("InvalidXml","Start tag expected.",1);return!0};function Go(o){return o===" "||o==="	"||o===`
`||o==="\r"}function qo(o,e){let t=e;for(;e<o.length;e++)if(o[e]=="?"||o[e]==" "){let i=o.substr(t,e-t);if(e>5&&i==="xml")return le("InvalidXml","XML declaration allowed only at the start of the document.",Fe(o,e));if(o[e]=="?"&&o[e+1]==">"){e++;break}else continue}return e}function zo(o,e){if(o.length>e+5&&o[e+1]==="-"&&o[e+2]==="-"){for(e+=3;e<o.length;e++)if(o[e]==="-"&&o[e+1]==="-"&&o[e+2]===">"){e+=2;break}}else if(o.length>e+8&&o[e+1]==="D"&&o[e+2]==="O"&&o[e+3]==="C"&&o[e+4]==="T"&&o[e+5]==="Y"&&o[e+6]==="P"&&o[e+7]==="E"){let t=1;for(e+=8;e<o.length;e++)if(o[e]==="<")t++;else if(o[e]===">"&&(t--,t===0))break}else if(o.length>e+9&&o[e+1]==="["&&o[e+2]==="C"&&o[e+3]==="D"&&o[e+4]==="A"&&o[e+5]==="T"&&o[e+6]==="A"&&o[e+7]==="["){for(e+=8;e<o.length;e++)if(o[e]==="]"&&o[e+1]==="]"&&o[e+2]===">"){e+=2;break}}return e}var $r='"',Tr="'";function Rr(o,e){let t="",i="",s=!1;for(;e<o.length;e++){if(o[e]===$r||o[e]===Tr)i===""?i=o[e]:i!==o[e]||(i="");else if(o[e]===">"&&i===""){s=!0;break}t+=o[e]}return i!==""?!1:{value:t,index:e,tagClosed:s}}var Ur=new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");function Zo(o,e){let t=Us.getAllMatches(o,Ur),i={};for(let s=0;s<t.length;s++){if(t[s][1].length===0)return le("InvalidAttr","Attribute '"+t[s][2]+"' has no space in starting.",fi(t[s]));if(t[s][3]!==void 0&&t[s][4]===void 0)return le("InvalidAttr","Attribute '"+t[s][2]+"' is without value.",fi(t[s]));if(t[s][3]===void 0&&!e.allowBooleanAttributes)return le("InvalidAttr","boolean attribute '"+t[s][2]+"' is not allowed.",fi(t[s]));let n=t[s][2];if(!Wr(n))return le("InvalidAttr","Attribute '"+n+"' is an invalid name.",fi(t[s]));if(!i.hasOwnProperty(n))i[n]=1;else return le("InvalidAttr","Attribute '"+n+"' is repeated.",fi(t[s]))}return!0}function Vr(o,e){let t=/\d/;for(o[e]==="x"&&(e++,t=/[\da-fA-F]/);e<o.length;e++){if(o[e]===";")return e;if(!o[e].match(t))break}return-1}function Br(o,e){if(e++,o[e]===";")return-1;if(o[e]==="#")return e++,Vr(o,e);let t=0;for(;e<o.length;e++,t++)if(!(o[e].match(/\w/)&&t<20)){if(o[e]===";")break;return-1}return e}function le(o,e,t){return{err:{code:o,msg:e,line:t.line||t,col:t.col}}}function Wr(o){return Us.isName(o)}function Hr(o){return Us.isName(o)}function Fe(o,e){let t=o.substring(0,e).split(/\r?\n/);return{line:t.length,col:t[t.length-1].length+1}}function fi(o){return o.startIndex+o[1].length}});var Xo=U(Bs=>{var Yo={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(o,e){return e},attributeValueProcessor:function(o,e){return e},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(o,e,t){return o}},Gr=function(o){return Object.assign({},Yo,o)};Bs.buildOptions=Gr;Bs.defaultOptions=Yo});var Qo=U((yd,Jo)=>{"use strict";var Ws=class{constructor(e){this.tagname=e,this.child=[],this[":@"]={}}add(e,t){e==="__proto__"&&(e="#__proto__"),this.child.push({[e]:t})}addChild(e){e.tagname==="__proto__"&&(e.tagname="#__proto__"),e[":@"]&&Object.keys(e[":@"]).length>0?this.child.push({[e.tagname]:e.child,[":@"]:e[":@"]}):this.child.push({[e.tagname]:e.child})}};Jo.exports=Ws});var ta=U((Pd,ea)=>{var qr=Yi();function zr(o,e){let t={};if(o[e+3]==="O"&&o[e+4]==="C"&&o[e+5]==="T"&&o[e+6]==="Y"&&o[e+7]==="P"&&o[e+8]==="E"){e=e+9;let i=1,s=!1,n=!1,a="";for(;e<o.length;e++)if(o[e]==="<"&&!n){if(s&&Yr(o,e))e+=7,[entityName,val,e]=Zr(o,e+1),val.indexOf("&")===-1&&(t[el(entityName)]={regx:RegExp(`&${entityName};`,"g"),val});else if(s&&Xr(o,e))e+=8;else if(s&&Jr(o,e))e+=8;else if(s&&Qr(o,e))e+=9;else if(Kr)n=!0;else throw new Error("Invalid DOCTYPE");i++,a=""}else if(o[e]===">"){if(n?o[e-1]==="-"&&o[e-2]==="-"&&(n=!1,i--):i--,i===0)break}else o[e]==="["?s=!0:a+=o[e];if(i!==0)throw new Error("Unclosed DOCTYPE")}else throw new Error("Invalid Tag instead of DOCTYPE");return{entities:t,i:e}}function Zr(o,e){let t="";for(;e<o.length&&o[e]!=="'"&&o[e]!=='"';e++)t+=o[e];if(t=t.trim(),t.indexOf(" ")!==-1)throw new Error("External entites are not supported");let i=o[e++],s="";for(;e<o.length&&o[e]!==i;e++)s+=o[e];return[t,s,e]}function Kr(o,e){return o[e+1]==="!"&&o[e+2]==="-"&&o[e+3]==="-"}function Yr(o,e){return o[e+1]==="!"&&o[e+2]==="E"&&o[e+3]==="N"&&o[e+4]==="T"&&o[e+5]==="I"&&o[e+6]==="T"&&o[e+7]==="Y"}function Xr(o,e){return o[e+1]==="!"&&o[e+2]==="E"&&o[e+3]==="L"&&o[e+4]==="E"&&o[e+5]==="M"&&o[e+6]==="E"&&o[e+7]==="N"&&o[e+8]==="T"}function Jr(o,e){return o[e+1]==="!"&&o[e+2]==="A"&&o[e+3]==="T"&&o[e+4]==="T"&&o[e+5]==="L"&&o[e+6]==="I"&&o[e+7]==="S"&&o[e+8]==="T"}function Qr(o,e){return o[e+1]==="!"&&o[e+2]==="N"&&o[e+3]==="O"&&o[e+4]==="T"&&o[e+5]==="A"&&o[e+6]==="T"&&o[e+7]==="I"&&o[e+8]==="O"&&o[e+9]==="N"}function el(o){if(qr.isName(o))return o;throw new Error(`Invalid entity name ${o}`)}ea.exports=zr});var sa=U((Fd,ia)=>{var tl=/^[-+]?0x[a-fA-F0-9]+$/,il=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt);!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);var sl={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};function nl(o,e={}){if(e=Object.assign({},sl,e),!o||typeof o!="string")return o;let t=o.trim();if(e.skipLike!==void 0&&e.skipLike.test(t))return o;if(e.hex&&tl.test(t))return Number.parseInt(t,16);{let i=il.exec(t);if(i){let s=i[1],n=i[2],a=ol(i[3]),r=i[4]||i[6];if(!e.leadingZeros&&n.length>0&&s&&t[2]!==".")return o;if(!e.leadingZeros&&n.length>0&&!s&&t[1]!==".")return o;{let l=Number(t),c=""+l;return c.search(/[eE]/)!==-1||r?e.eNotation?l:o:t.indexOf(".")!==-1?c==="0"&&a===""||c===a||s&&c==="-"+a?l:o:n?a===c||s+a===c?l:o:t===c||t===s+c?l:o}}else return o}}function ol(o){return o&&o.indexOf(".")!==-1&&(o=o.replace(/0+$/,""),o==="."?o="0":o[0]==="."?o="0"+o:o[o.length-1]==="."&&(o=o.substr(0,o.length-1))),o}ia.exports=nl});var aa=U((Sd,oa)=>{"use strict";var na=Yi(),mi=Qo(),al=ta(),rl=sa(),Hs=class{constructor(e){this.options=e,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.ampEntity={regex:/&(amp|#38|#x26);/g,val:"&"},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"\xA2"},pound:{regex:/&(pound|#163);/g,val:"\xA3"},yen:{regex:/&(yen|#165);/g,val:"\xA5"},euro:{regex:/&(euro|#8364);/g,val:"\u20AC"},copyright:{regex:/&(copy|#169);/g,val:"\xA9"},reg:{regex:/&(reg|#174);/g,val:"\xAE"},inr:{regex:/&(inr|#8377);/g,val:"\u20B9"},num_dec:{regex:/&#([0-9]{1,7});/g,val:(t,i)=>String.fromCharCode(Number.parseInt(i,10))},num_hex:{regex:/&#x([0-9a-fA-F]{1,6});/g,val:(t,i)=>String.fromCharCode(Number.parseInt(i,16))}},this.addExternalEntities=ll,this.parseXml=hl,this.parseTextData=cl,this.resolveNameSpace=dl,this.buildAttributesMap=pl,this.isItStopNode=vl,this.replaceEntitiesValue=ml,this.readStopNodeData=_l,this.saveTextToParentTag=bl,this.addChild=fl}};function ll(o){let e=Object.keys(o);for(let t=0;t<e.length;t++){let i=e[t];this.lastEntities[i]={regex:new RegExp("&"+i+";","g"),val:o[i]}}}function cl(o,e,t,i,s,n,a){if(o!==void 0&&(this.options.trimValues&&!i&&(o=o.trim()),o.length>0)){a||(o=this.replaceEntitiesValue(o));let r=this.options.tagValueProcessor(e,o,t,s,n);return r==null?o:typeof r!=typeof o||r!==o?r:this.options.trimValues?qs(o,this.options.parseTagValue,this.options.numberParseOptions):o.trim()===o?qs(o,this.options.parseTagValue,this.options.numberParseOptions):o}}function dl(o){if(this.options.removeNSPrefix){let e=o.split(":"),t=o.charAt(0)==="/"?"/":"";if(e[0]==="xmlns")return"";e.length===2&&(o=t+e[1])}return o}var ul=new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");function pl(o,e,t){if(!this.options.ignoreAttributes&&typeof o=="string"){let i=na.getAllMatches(o,ul),s=i.length,n={};for(let a=0;a<s;a++){let r=this.resolveNameSpace(i[a][1]),l=i[a][4],c=this.options.attributeNamePrefix+r;if(r.length)if(this.options.transformAttributeName&&(c=this.options.transformAttributeName(c)),c==="__proto__"&&(c="#__proto__"),l!==void 0){this.options.trimValues&&(l=l.trim()),l=this.replaceEntitiesValue(l);let d=this.options.attributeValueProcessor(r,l,e);d==null?n[c]=l:typeof d!=typeof l||d!==l?n[c]=d:n[c]=qs(l,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(n[c]=!0)}if(!Object.keys(n).length)return;if(this.options.attributesGroupName){let a={};return a[this.options.attributesGroupName]=n,a}return n}}var hl=function(o){o=o.replace(/\r\n?/g,`
`);let e=new mi("!xml"),t=e,i="",s="";for(let n=0;n<o.length;n++)if(o[n]==="<")if(o[n+1]==="/"){let r=Pt(o,">",n,"Closing Tag is not closed."),l=o.substring(n+2,r).trim();if(this.options.removeNSPrefix){let u=l.indexOf(":");u!==-1&&(l=l.substr(u+1))}this.options.transformTagName&&(l=this.options.transformTagName(l)),t&&(i=this.saveTextToParentTag(i,t,s));let c=s.substring(s.lastIndexOf(".")+1);if(l&&this.options.unpairedTags.indexOf(l)!==-1)throw new Error(`Unpaired tag can not be used as closing tag: </${l}>`);let d=0;c&&this.options.unpairedTags.indexOf(c)!==-1?(d=s.lastIndexOf(".",s.lastIndexOf(".")-1),this.tagsNodeStack.pop()):d=s.lastIndexOf("."),s=s.substring(0,d),t=this.tagsNodeStack.pop(),i="",n=r}else if(o[n+1]==="?"){let r=Gs(o,n,!1,"?>");if(!r)throw new Error("Pi Tag is not closed.");if(i=this.saveTextToParentTag(i,t,s),!(this.options.ignoreDeclaration&&r.tagName==="?xml"||this.options.ignorePiTags)){let l=new mi(r.tagName);l.add(this.options.textNodeName,""),r.tagName!==r.tagExp&&r.attrExpPresent&&(l[":@"]=this.buildAttributesMap(r.tagExp,s,r.tagName)),this.addChild(t,l,s)}n=r.closeIndex+1}else if(o.substr(n+1,3)==="!--"){let r=Pt(o,"-->",n+4,"Comment is not closed.");if(this.options.commentPropName){let l=o.substring(n+4,r-2);i=this.saveTextToParentTag(i,t,s),t.add(this.options.commentPropName,[{[this.options.textNodeName]:l}])}n=r}else if(o.substr(n+1,2)==="!D"){let r=al(o,n);this.docTypeEntities=r.entities,n=r.i}else if(o.substr(n+1,2)==="!["){let r=Pt(o,"]]>",n,"CDATA is not closed.")-2,l=o.substring(n+9,r);i=this.saveTextToParentTag(i,t,s);let c=this.parseTextData(l,t.tagname,s,!0,!1,!0,!0);c==null&&(c=""),this.options.cdataPropName?t.add(this.options.cdataPropName,[{[this.options.textNodeName]:l}]):t.add(this.options.textNodeName,c),n=r+2}else{let r=Gs(o,n,this.options.removeNSPrefix),l=r.tagName,c=r.rawTagName,d=r.tagExp,u=r.attrExpPresent,h=r.closeIndex;this.options.transformTagName&&(l=this.options.transformTagName(l)),t&&i&&t.tagname!=="!xml"&&(i=this.saveTextToParentTag(i,t,s,!1));let p=t;if(p&&this.options.unpairedTags.indexOf(p.tagname)!==-1&&(t=this.tagsNodeStack.pop(),s=s.substring(0,s.lastIndexOf("."))),l!==e.tagname&&(s+=s?"."+l:l),this.isItStopNode(this.options.stopNodes,s,l)){let f="";if(d.length>0&&d.lastIndexOf("/")===d.length-1)l[l.length-1]==="/"?(l=l.substr(0,l.length-1),s=s.substr(0,s.length-1),d=l):d=d.substr(0,d.length-1),n=r.closeIndex;else if(this.options.unpairedTags.indexOf(l)!==-1)n=r.closeIndex;else{let v=this.readStopNodeData(o,c,h+1);if(!v)throw new Error(`Unexpected end of ${c}`);n=v.i,f=v.tagContent}let b=new mi(l);l!==d&&u&&(b[":@"]=this.buildAttributesMap(d,s,l)),f&&(f=this.parseTextData(f,l,s,!0,u,!0,!0)),s=s.substr(0,s.lastIndexOf(".")),b.add(this.options.textNodeName,f),this.addChild(t,b,s)}else{if(d.length>0&&d.lastIndexOf("/")===d.length-1){l[l.length-1]==="/"?(l=l.substr(0,l.length-1),s=s.substr(0,s.length-1),d=l):d=d.substr(0,d.length-1),this.options.transformTagName&&(l=this.options.transformTagName(l));let f=new mi(l);l!==d&&u&&(f[":@"]=this.buildAttributesMap(d,s,l)),this.addChild(t,f,s),s=s.substr(0,s.lastIndexOf("."))}else{let f=new mi(l);this.tagsNodeStack.push(t),l!==d&&u&&(f[":@"]=this.buildAttributesMap(d,s,l)),this.addChild(t,f,s),t=f}i="",n=h}}else i+=o[n];return e.child};function fl(o,e,t){let i=this.options.updateTag(e.tagname,t,e[":@"]);i===!1||(typeof i=="string"&&(e.tagname=i),o.addChild(e))}var ml=function(o){if(this.options.processEntities){for(let e in this.docTypeEntities){let t=this.docTypeEntities[e];o=o.replace(t.regx,t.val)}for(let e in this.lastEntities){let t=this.lastEntities[e];o=o.replace(t.regex,t.val)}if(this.options.htmlEntities)for(let e in this.htmlEntities){let t=this.htmlEntities[e];o=o.replace(t.regex,t.val)}o=o.replace(this.ampEntity.regex,this.ampEntity.val)}return o};function bl(o,e,t,i){return o&&(i===void 0&&(i=Object.keys(e.child).length===0),o=this.parseTextData(o,e.tagname,t,!1,e[":@"]?Object.keys(e[":@"]).length!==0:!1,i),o!==void 0&&o!==""&&e.add(this.options.textNodeName,o),o=""),o}function vl(o,e,t){let i="*."+t;for(let s in o){let n=o[s];if(i===n||e===n)return!0}return!1}function gl(o,e,t=">"){let i,s="";for(let n=e;n<o.length;n++){let a=o[n];if(i)a===i&&(i="");else if(a==='"'||a==="'")i=a;else if(a===t[0])if(t[1]){if(o[n+1]===t[1])return{data:s,index:n}}else return{data:s,index:n};else a==="	"&&(a=" ");s+=a}}function Pt(o,e,t,i){let s=o.indexOf(e,t);if(s===-1)throw new Error(i);return s+e.length-1}function Gs(o,e,t,i=">"){let s=gl(o,e+1,i);if(!s)return;let n=s.data,a=s.index,r=n.search(/\s/),l=n,c=!0;r!==-1&&(l=n.substring(0,r),n=n.substring(r+1).trimStart());let d=l;if(t){let u=l.indexOf(":");u!==-1&&(l=l.substr(u+1),c=l!==s.data.substr(u+1))}return{tagName:l,tagExp:n,closeIndex:a,attrExpPresent:c,rawTagName:d}}function _l(o,e,t){let i=t,s=1;for(;t<o.length;t++)if(o[t]==="<")if(o[t+1]==="/"){let n=Pt(o,">",t,`${e} is not closed`);if(o.substring(t+2,n).trim()===e&&(s--,s===0))return{tagContent:o.substring(i,t),i:n};t=n}else if(o[t+1]==="?")t=Pt(o,"?>",t+1,"StopNode is not closed.");else if(o.substr(t+1,3)==="!--")t=Pt(o,"-->",t+3,"StopNode is not closed.");else if(o.substr(t+1,2)==="![")t=Pt(o,"]]>",t,"StopNode is not closed.")-2;else{let n=Gs(o,t,">");n&&((n&&n.tagName)===e&&n.tagExp[n.tagExp.length-1]!=="/"&&s++,t=n.closeIndex)}}function qs(o,e,t){if(e&&typeof o=="string"){let i=o.trim();return i==="true"?!0:i==="false"?!1:rl(o,t)}else return na.isExist(o)?o:""}oa.exports=Hs});var ca=U(la=>{"use strict";function Cl(o,e){return ra(o,e)}function ra(o,e,t){let i,s={};for(let n=0;n<o.length;n++){let a=o[n],r=yl(a),l="";if(t===void 0?l=r:l=t+"."+r,r===e.textNodeName)i===void 0?i=a[r]:i+=""+a[r];else{if(r===void 0)continue;if(a[r]){let c=ra(a[r],e,l),d=Fl(c,e);a[":@"]?Pl(c,a[":@"],l,e):Object.keys(c).length===1&&c[e.textNodeName]!==void 0&&!e.alwaysCreateTextNode?c=c[e.textNodeName]:Object.keys(c).length===0&&(e.alwaysCreateTextNode?c[e.textNodeName]="":c=""),s[r]!==void 0&&s.hasOwnProperty(r)?(Array.isArray(s[r])||(s[r]=[s[r]]),s[r].push(c)):e.isArray(r,l,d)?s[r]=[c]:s[r]=c}}}return typeof i=="string"?i.length>0&&(s[e.textNodeName]=i):i!==void 0&&(s[e.textNodeName]=i),s}function yl(o){let e=Object.keys(o);for(let t=0;t<e.length;t++){let i=e[t];if(i!==":@")return i}}function Pl(o,e,t,i){if(e){let s=Object.keys(e),n=s.length;for(let a=0;a<n;a++){let r=s[a];i.isArray(r,t+"."+r,!0,!0)?o[r]=[e[r]]:o[r]=e[r]}}}function Fl(o,e){let{textNodeName:t}=e,i=Object.keys(o).length;return!!(i===0||i===1&&(o[t]||typeof o[t]=="boolean"||o[t]===0))}la.prettify=Cl});var ua=U((xd,da)=>{var{buildOptions:Sl}=Xo(),Il=aa(),{prettify:xl}=ca(),wl=Vs(),zs=class{constructor(e){this.externalEntities={},this.options=Sl(e)}parse(e,t){if(typeof e!="string")if(e.toString)e=e.toString();else throw new Error("XML data is accepted in String or Bytes[] form.");if(t){t===!0&&(t={});let n=wl.validate(e,t);if(n!==!0)throw Error(`${n.err.msg}:${n.err.line}:${n.err.col}`)}let i=new Il(this.options);i.addExternalEntities(this.externalEntities);let s=i.parseXml(e);return this.options.preserveOrder||s===void 0?s:xl(s,this.options)}addEntity(e,t){if(t.indexOf("&")!==-1)throw new Error("Entity value can't have '&'");if(e.indexOf("&")!==-1||e.indexOf(";")!==-1)throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if(t==="&")throw new Error("An entity with value '&' is not permitted");this.externalEntities[e]=t}};da.exports=zs});var ba=U((wd,ma)=>{var kl=`
`;function jl(o,e){let t="";return e.format&&e.indentBy.length>0&&(t=kl),ha(o,e,"",t)}function ha(o,e,t,i){let s="",n=!1;for(let a=0;a<o.length;a++){let r=o[a],l=El(r);if(l===void 0)continue;let c="";if(t.length===0?c=l:c=`${t}.${l}`,l===e.textNodeName){let f=r[l];Dl(c,e)||(f=e.tagValueProcessor(l,f),f=fa(f,e)),n&&(s+=i),s+=f,n=!1;continue}else if(l===e.cdataPropName){n&&(s+=i),s+=`<![CDATA[${r[l][0][e.textNodeName]}]]>`,n=!1;continue}else if(l===e.commentPropName){s+=i+`<!--${r[l][0][e.textNodeName]}-->`,n=!0;continue}else if(l[0]==="?"){let f=pa(r[":@"],e),b=l==="?xml"?"":i,v=r[l][0][e.textNodeName];v=v.length!==0?" "+v:"",s+=b+`<${l}${v}${f}?>`,n=!0;continue}let d=i;d!==""&&(d+=e.indentBy);let u=pa(r[":@"],e),h=i+`<${l}${u}`,p=ha(r[l],e,c,d);e.unpairedTags.indexOf(l)!==-1?e.suppressUnpairedNode?s+=h+">":s+=h+"/>":(!p||p.length===0)&&e.suppressEmptyNode?s+=h+"/>":p&&p.endsWith(">")?s+=h+`>${p}${i}</${l}>`:(s+=h+">",p&&i!==""&&(p.includes("/>")||p.includes("</"))?s+=i+e.indentBy+p+i:s+=p,s+=`</${l}>`),n=!0}return s}function El(o){let e=Object.keys(o);for(let t=0;t<e.length;t++){let i=e[t];if(!!o.hasOwnProperty(i)&&i!==":@")return i}}function pa(o,e){let t="";if(o&&!e.ignoreAttributes)for(let i in o){if(!o.hasOwnProperty(i))continue;let s=e.attributeValueProcessor(i,o[i]);s=fa(s,e),s===!0&&e.suppressBooleanAttributes?t+=` ${i.substr(e.attributeNamePrefix.length)}`:t+=` ${i.substr(e.attributeNamePrefix.length)}="${s}"`}return t}function Dl(o,e){o=o.substr(0,o.length-e.textNodeName.length-1);let t=o.substr(o.lastIndexOf(".")+1);for(let i in e.stopNodes)if(e.stopNodes[i]===o||e.stopNodes[i]==="*."+t)return!0;return!1}function fa(o,e){if(o&&o.length>0&&e.processEntities)for(let t=0;t<e.entities.length;t++){let i=e.entities[t];o=o.replace(i.regex,i.val)}return o}ma.exports=jl});var ga=U((kd,va)=>{"use strict";var Nl=ba(),Ml={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(o,e){return e},attributeValueProcessor:function(o,e){return e},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function rt(o){this.options=Object.assign({},Ml,o),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=Ol),this.processTextOrObjNode=Al,this.options.format?(this.indentate=Ll,this.tagEndChar=`>
`,this.newLine=`
`):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}rt.prototype.build=function(o){return this.options.preserveOrder?Nl(o,this.options):(Array.isArray(o)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(o={[this.options.arrayNodeName]:o}),this.j2x(o,0).val)};rt.prototype.j2x=function(o,e){let t="",i="";for(let s in o)if(!!Object.prototype.hasOwnProperty.call(o,s))if(typeof o[s]>"u")this.isAttribute(s)&&(i+="");else if(o[s]===null)this.isAttribute(s)?i+="":s[0]==="?"?i+=this.indentate(e)+"<"+s+"?"+this.tagEndChar:i+=this.indentate(e)+"<"+s+"/"+this.tagEndChar;else if(o[s]instanceof Date)i+=this.buildTextValNode(o[s],s,"",e);else if(typeof o[s]!="object"){let n=this.isAttribute(s);if(n)t+=this.buildAttrPairStr(n,""+o[s]);else if(s===this.options.textNodeName){let a=this.options.tagValueProcessor(s,""+o[s]);i+=this.replaceEntitiesValue(a)}else i+=this.buildTextValNode(o[s],s,"",e)}else if(Array.isArray(o[s])){let n=o[s].length,a="";for(let r=0;r<n;r++){let l=o[s][r];typeof l>"u"||(l===null?s[0]==="?"?i+=this.indentate(e)+"<"+s+"?"+this.tagEndChar:i+=this.indentate(e)+"<"+s+"/"+this.tagEndChar:typeof l=="object"?this.options.oneListGroup?a+=this.j2x(l,e+1).val:a+=this.processTextOrObjNode(l,s,e):a+=this.buildTextValNode(l,s,"",e))}this.options.oneListGroup&&(a=this.buildObjectNode(a,s,"",e)),i+=a}else if(this.options.attributesGroupName&&s===this.options.attributesGroupName){let n=Object.keys(o[s]),a=n.length;for(let r=0;r<a;r++)t+=this.buildAttrPairStr(n[r],""+o[s][n[r]])}else i+=this.processTextOrObjNode(o[s],s,e);return{attrStr:t,val:i}};rt.prototype.buildAttrPairStr=function(o,e){return e=this.options.attributeValueProcessor(o,""+e),e=this.replaceEntitiesValue(e),this.options.suppressBooleanAttributes&&e==="true"?" "+o:" "+o+'="'+e+'"'};function Al(o,e,t){let i=this.j2x(o,t+1);return o[this.options.textNodeName]!==void 0&&Object.keys(o).length===1?this.buildTextValNode(o[this.options.textNodeName],e,i.attrStr,t):this.buildObjectNode(i.val,e,i.attrStr,t)}rt.prototype.buildObjectNode=function(o,e,t,i){if(o==="")return e[0]==="?"?this.indentate(i)+"<"+e+t+"?"+this.tagEndChar:this.indentate(i)+"<"+e+t+this.closeTag(e)+this.tagEndChar;{let s="</"+e+this.tagEndChar,n="";return e[0]==="?"&&(n="?",s=""),(t||t==="")&&o.indexOf("<")===-1?this.indentate(i)+"<"+e+t+n+">"+o+s:this.options.commentPropName!==!1&&e===this.options.commentPropName&&n.length===0?this.indentate(i)+`<!--${o}-->`+this.newLine:this.indentate(i)+"<"+e+t+n+this.tagEndChar+o+this.indentate(i)+s}};rt.prototype.closeTag=function(o){let e="";return this.options.unpairedTags.indexOf(o)!==-1?this.options.suppressUnpairedNode||(e="/"):this.options.suppressEmptyNode?e="/":e=`></${o}`,e};rt.prototype.buildTextValNode=function(o,e,t,i){if(this.options.cdataPropName!==!1&&e===this.options.cdataPropName)return this.indentate(i)+`<![CDATA[${o}]]>`+this.newLine;if(this.options.commentPropName!==!1&&e===this.options.commentPropName)return this.indentate(i)+`<!--${o}-->`+this.newLine;if(e[0]==="?")return this.indentate(i)+"<"+e+t+"?"+this.tagEndChar;{let s=this.options.tagValueProcessor(e,o);return s=this.replaceEntitiesValue(s),s===""?this.indentate(i)+"<"+e+t+this.closeTag(e)+this.tagEndChar:this.indentate(i)+"<"+e+t+">"+s+"</"+e+this.tagEndChar}};rt.prototype.replaceEntitiesValue=function(o){if(o&&o.length>0&&this.options.processEntities)for(let e=0;e<this.options.entities.length;e++){let t=this.options.entities[e];o=o.replace(t.regex,t.val)}return o};function Ll(o){return this.options.indentBy.repeat(o)}function Ol(o){return o.startsWith(this.options.attributeNamePrefix)&&o!==this.options.textNodeName?o.substr(this.attrPrefixLen):!1}va.exports=rt});var Ca=U((jd,_a)=>{"use strict";var $l=Vs(),Tl=ua(),Rl=ga();_a.exports={XMLParser:Tl,XMLValidator:$l,XMLBuilder:Rl}});var zl={};Oa(zl,{activate:()=>ql});module.exports=$a(zl);var R=T(require("vscode"));var K=T(require("vscode"));var yi=T(require("vscode"));async function Te(){let o={canSelectMany:!1,openLabel:"Select",canSelectFiles:!1,canSelectFolders:!0};return(await yi.window.showOpenDialog(o))?.[0]?.fsPath}async function Mt(){let o={canSelectMany:!1,openLabel:"Select",canSelectFiles:!0,canSelectFolders:!1};return(await yi.window.showOpenDialog(o))?.[0]?.fsPath}function re(o,e=4){o=o>>>0;let t="0x",i=o.toString(16).toUpperCase();if(e){let s=e*2-i.length;for(let n=0;n<s;++n)t+="0"}return t+=i,t}function ce(){let o="",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let t=0;t<32;t++)o+=e.charAt(Math.floor(Math.random()*e.length));return o}var He=T(require("vscode"));var te=T(require("vscode")),A=T(require("fs")),Q=T(ti()),B=T(require("path"));var O=T(require("vscode")),w=T(require("fs")),Ft=T(require("os")),Ys=T(require("crypto")),oe=T(ti()),y=T(require("path")),ue=T(require("child_process"));var bt=T(require("fs")),Ne=T(require("path")),ur=["incDirList","srcFileList","asmFileList","ldFileList"],Mi=class{incDirList;srcFileList;asmFileList;ldFileList;ldDirList;excluedPathList;excludeFileList;strPreDefines;constructor(){this.incDirList=new Array,this.srcFileList=new Array,this.asmFileList=new Array,this.ldDirList=new Array,this.ldFileList=new Array,this.excluedPathList=new Array,this.excludeFileList=new Array,this.strPreDefines=[]}},Ni;(a=>{function o(r,l,c){let d=!0;switch(r){case".c":case".C":d=c.srcFileList.includes(l);break;case".S":d=c.asmFileList.includes(l);break;case".ld":d=c.ldFileList.includes(l);break}return!d}a.isFileNotIn_ConfPorject=o;function e(r,l){let c=!1;if(!c){for(let d of l.incDirList)if(d.includes(r)){c=!0;break}}if(!c){for(let d of l.srcFileList)if(d.includes(r)){c=!0;break}}if(!c){for(let d of l.asmFileList)if(d.includes(r)){c=!0;break}}if(!c){for(let d of l.ldFileList)if(d.includes(r)){c=!0;break}}return c}a.isDirIn_ConfPorject=e;function t(r,l){bt.existsSync(r)&&bt.readdirSync(r,{encoding:"utf-8",withFileTypes:!0}).forEach(d=>{if(d.isFile()){let u=d.name,h=u.lastIndexOf("."),p=Ne.default.join(r,u),f=u.substring(h);o(f,p,l)&&l.excludeFileList.push(p)}else if(d.isDirectory()){let u=Ne.default.join(r,d.name);e(u,l)?t(u,l):l.excluedPathList.push(u)}})}a.getConf_DirFile=t;function i(r,l,c){let d="End_"+l,u="*"+l+": ",h=c.length,p=r.indexOf(d),f=r.indexOf(u)+u.length,b=r.substring(f,p),v=0,m=new Array;for(v=b.indexOf(c);v!==-1&&v<b.length-h;){{let _=b.indexOf(" ",v+h+1);if(_!==-1){let C=b.substring(v+h,_).trim();C.length&&m.push(C),b=b.substring(_+1).trim()}else{let C=b.substring(v+h).trim();C.length&&m.push(C);break}}v=b.indexOf(c)}return m}a.getOptionStringArray=i;function s(r,l,c){let d="End_"+l,u="*"+l+": ",h=c.length,p=r.indexOf(d),f=r.indexOf(u)+u.length,b=r.substring(f,p),v=0,m="";for(;v!==-1&&(v=b.indexOf(c),v<b.length-h);){let _=b.indexOf(" ",v+h+1);if(_!==-1){let C=b.substring(v+h+1,_).trim();C.includes("__FILENAME__")||(m+=" "+C),b=b.substring(_+1).trim()}else{let C=b.substring(v+h+1).trim();C.length&&(m+=" "+C);break}}return m}a.getOptionStrings=s;function n(r,l,c,d){let u="End_"+l,h="*"+l+": ",p=r.indexOf(u),f=r.indexOf(h)+h.length,b=r.substring(f,p),v=b.trim();l==="incDirList"&&(v=b.trimEnd(),v=v.replaceAll(" -I "," ").trim());let m=v.replaceAll(/\s+/g," ");if(m.length!==0){let _=m.split(" "),C=_.length;for(let P=0;P<C;++P){let D=_[P];if(D.charAt(0)==="/"&&D.charAt(2)==="/"){let S=D.substring(0,2),g=D.charAt(1)+":";D=_[P].replace(S,g),_[P]=D}let N=Ne.default.resolve(c,D);_[P]=N}switch(l){case"incDirList":d.incDirList=_;break;case"srcFileList":d.srcFileList=_;break;case"asmFileList":d.asmFileList=_;break;case"ldFileList":d.ldFileList=_}}}a.getOptionInfo=n})(Ni||={});function Qn(o,e,t,i){if(bt.existsSync(o)){let s=bt.readFileSync(o,{encoding:"utf-8"});if(s=s.trimStart(),s.startsWith("'")&&(s=s.replaceAll("'","")),ur.forEach(n=>{Ni.getOptionInfo(s,n,t,i)}),i.incDirList.length===0){i.incDirList=Ni.getOptionStringArray(s,"CFLAG","-I");for(let n in i.incDirList)i.incDirList[n]=Ne.default.resolve(t,i.incDirList[n])}i.strPreDefines=Ni.getOptionStringArray(s,"CFLAG","-D");for(let n in i.incDirList)i.incDirList[n]=Ne.default.relative(e,i.incDirList[n]);for(let n in i.srcFileList)i.srcFileList[n]=Ne.default.relative(e,i.srcFileList[n]);for(let n in i.asmFileList)i.asmFileList[n]=Ne.default.relative(e,i.asmFileList[n]);for(let n in i.ldFileList)i.ldDirList.push(Ne.default.dirname(i.ldFileList[n])),i.ldFileList[n]=Ne.default.relative(e,i.ldFileList[n]);for(let n in i.ldDirList)i.ldDirList[n]=Ne.default.relative(e,i.ldDirList[n])}return i}var ve=T(require("vscode"));var $o=T(require("child_process")),Ze=T(require("path")),Ct=T(require("fs")),To=T(require("os"));var _e=T(require("vscode")),W=T(require("fs")),Ms=T(require("os")),ze=T(ti()),z=T(require("path"));var Lo=T(require("child_process"));var Ai=class{devVendor;devName;procName;devCore;devCoreVersion;devFpu;devMpu;devDsp;constructor(){this.devVendor=this.devName="",this.procName=this.devCore=this.devCoreVersion="",this.devFpu=this.devMpu=this.devDsp=""}copy(e){this.procName=e.procName,this.devCore=e.devCore,this.devCoreVersion=e.devCoreVersion,this.devFpu=e.devFpu,this.devMpu=e.devMpu,this.devDsp=e.devDsp}},ii=class{comClass;comGroup;comSubgroup;comVariant;comVersion;comApiVersion;vendor;constructor(){this.comClass=this.comGroup="",this.comVersion=""}copy(e){this.comClass=e.comClass,this.comGroup=e.comGroup,this.comSubgroup=e.comSubgroup,this.comVariant=e.comVariant,this.comVersion=e.comVersion,this.comApiVersion=e.comApiVersion,this.vendor=e.vendor}},$t=class{deviceVendor;deviceNames;procNames;deviceCores;devFpu;devMpu;devDsp;comRequires;copy(e){if(e.deviceVendor&&(this.deviceVendor=e.deviceVendor),e.deviceNames?.length&&(this.deviceNames=e.deviceNames),e.procNames&&(this.procNames=e.procNames),e.deviceCores?.length&&(this.deviceCores=e.deviceCores),e.devFpu&&(this.devFpu=e.devFpu),e.devMpu&&(this.devMpu=e.devMpu),e.devDsp&&(this.devDsp=e.devDsp),this.comRequires=void 0,e.comRequires){this.comRequires=[];for(let t of e.comRequires){let i=new si;i.copy(t),this.comRequires.push(i)}}}clear(){this.deviceVendor=void 0,this.deviceNames=void 0,this.procNames=void 0,this.deviceCores=void 0,this.devFpu=void 0,this.devMpu=void 0,this.devDsp=void 0,this.comRequires=void 0}},si=class{comClass;comGroup;comSubgroup;comVariant;comVersion;comApiVersion;copy(e){e.comClass&&(this.comClass=e.comClass),e.comGroup&&(this.comGroup=e.comGroup),e.comSubgroup&&(this.comSubgroup=e.comSubgroup),e.comVariant&&(this.comVariant=e.comVariant),e.comVersion&&(this.comVersion=e.comVersion),e.comApiVersion&&(this.comApiVersion=e.comApiVersion)}},tt=class{procName;proUnits;devCore;devEndian;devCoreVersion;devFpu;devMpu;devDsp;memoryMap;constructor(){this.procName="",this.proUnits=1,this.devCore="",this.devEndian=["Little-endian"],this.devCoreVersion="",this.devFpu="NO_FPU",this.devMpu="NO_MPU",this.devDsp="NO_DSP"}copy(e){e.procName&&(this.procName=e.procName),e.proUnits!==void 0&&(this.proUnits=e.proUnits),e.devCore!==void 0&&(this.devCore=e.devCore),e.devEndian&&(this.devEndian=Array.from(e.devEndian)),e.devCoreVersion&&(this.devCoreVersion=e.devCoreVersion),e.devFpu&&(this.devFpu=e.devFpu),e.devDsp&&(this.devDsp=e.devDsp)}clear(){this.procName="",this.proUnits=1,this.devCore="",this.devEndian=["Little-endian"],this.devCoreVersion="",this.devFpu="NO_FPU",this.devMpu="NO_MPU",this.devDsp="NO_DSP"}getDFP_InterfaceCopy(){return{procName:this.procName,proUnits:this.proUnits,devCore:this.devCore,devEndian:this.devEndian,devCoreVersion:this.devCoreVersion,devFpu:this.devFpu,devMpu:this.devMpu,devDsp:this.devDsp,memoryMap:this.memoryMap}}},Ce=class{procName;name;access;start;size;default;startup;uninit;alias;description;constructor(){this.startup=this.default=this.uninit=!1,this.procName=this.name=this.access="",this.start=this.size="",this.description=""}copy(e){e.procName&&(this.procName=e.procName),e.name&&(this.name=e.name),e.access&&(this.access=e.access),e.start!==void 0&&(this.start=e.start),e.size&&(this.size=e.size),e.default!==void 0&&(this.default=e.default),e.startup!==void 0&&(this.startup=e.startup),e.uninit!==void 0&&(this.uninit=e.uninit),e.alias!==void 0&&(this.alias=e.alias),e.description!==void 0&&(this.description=e.description)}},it=class extends tt{strArch;strAbi;bAbicalls;bMicromips;bMcu;bMt;bEva;bVirt;strEndianess;strDsp;strFloatPointType;strFloatPointAbi;strUnalignAcess;strRuntimeLibary;strOtherTargetFlags;strMainStackSize;strShadowStackSize;strExceptVecBase;constructor(){super(),this.strArch="mips32r5",this.strAbi="32",this.bMicromips=this.bAbicalls=this.bMcu=this.bMt=this.bEva=this.bVirt=!1,this.strEndianess=this.devEndian[0].toLowerCase(),this.strDsp=this.devDsp.toLowerCase(),this.strFloatPointType="single-float",this.strFloatPointAbi="soft-float",this.strUnalignAcess="",this.strRuntimeLibary="newlib",this.strOtherTargetFlags="-G0",this.strMainStackSize="0x1000",this.strShadowStackSize="0x1000",this.strExceptVecBase="0x20"}getGCCFlag(){let e="";return e+=" -march="+this.strArch,e+=" -mabi="+this.strAbi,this.bAbicalls?e+=" -mabicalls":e+=" -mno-abicalls",this.bMicromips?e+=" -mmicromips":e+=" -mno-micromips",this.bMcu?e+=" -mmcu":e+=" -mno-mcu",this.bMt?e+=" -mmt":e+=" -mno-mt",this.bEva?e+=" -meva":e+=" -mno-eva",this.bVirt?e+=" -mvirt":e+=" -mno-virt",this.strEndianess==="little-endian"&&(e+=" -EL"),this.strFloatPointType&&(e+=" -m"+this.strFloatPointType),this.strFloatPointAbi&&(e+=" -m"+this.strFloatPointAbi),this.strRuntimeLibary&&(e+=" -mclib="+this.strRuntimeLibary),e+=" "+this.strOtherTargetFlags,e}copy(e){if(e.procName&&(this.procName=e.procName),e.proUnits!==void 0&&(this.proUnits=e.proUnits),e.devCore!==void 0&&(this.devCore=e.devCore),e.devEndian&&(this.devEndian=Array.from(e.devEndian),this.devEndian.length&&(this.strEndianess=this.devEndian[0].toLowerCase())),e.devCoreVersion&&(this.devCoreVersion=e.devCoreVersion),e.devFpu&&(this.devFpu=e.devFpu),e.devMpu&&(this.devMpu=e.devMpu),e.devDsp&&(this.devDsp=e.devDsp),e.strArch&&(this.strArch=e.strArch),e.strAbi&&(this.strAbi=e.strAbi),e.bAbicalls!==void 0&&(this.bAbicalls=e.bAbicalls),e.bMicromips!==void 0&&(this.bMicromips=e.bMicromips),e.bMcu!==void 0&&(this.bMcu=e.bMcu),e.bMt!==void 0&&(this.bMt=e.bMt),e.bEva!==void 0&&(this.bEva=e.bEva),e.bVirt!==void 0&&(this.bVirt=e.bVirt),e.strEndianess&&(this.strEndianess=e.strEndianess),e.strDsp&&(this.strDsp=e.strDsp),e.strFloatPointType&&(this.strFloatPointType=e.strFloatPointType),e.strFloatPointAbi&&(this.strFloatPointAbi=e.strFloatPointAbi),e.strUnalignAcess&&(this.strUnalignAcess=e.strUnalignAcess),e.strRuntimeLibary&&(this.strRuntimeLibary=e.strRuntimeLibary),e.strOtherTargetFlags&&(this.strOtherTargetFlags=e.strOtherTargetFlags),e.strMainStackSize&&(this.strMainStackSize=e.strMainStackSize),e.strShadowStackSize&&(this.strShadowStackSize=e.strShadowStackSize),e.strExceptVecBase&&(this.strExceptVecBase=e.strExceptVecBase),e.memoryMap){this.memoryMap=[];for(let t of e.memoryMap){let i=new Ce;i.copy(t),this.memoryMap.push(i)}}}},Ue=class{vendor;familyName;subfamilyName;deviceName;description;processors;memorys;debugPort;constructor(){this.vendor=this.familyName=this.subfamilyName=this.deviceName="",this.processors=[]}clear(){this.vendor=this.familyName=this.subfamilyName=this.deviceName="",this.description=void 0,this.processors=[],this.memorys=void 0,this.debugPort=void 0}copy(e){if(e.vendor&&(this.vendor=e.vendor),e.familyName&&(this.familyName=e.familyName),e.subfamilyName&&(this.subfamilyName=e.subfamilyName),e.deviceName&&(this.deviceName=e.deviceName),e.description&&(this.description=e.description),e.processors)for(let t of e.processors){let i=new it;i.copy(t),this.processors.push(i)}if(e.memorys){this.memorys=[];for(let t of e.memorys){let i=new Ce;i.copy(t),this.memorys.push(i)}}e.debugPort&&(this.debugPort=e.debugPort)}getDFP_InterfaceCopy(){let e=[];for(let i of this.processors)e.push(i.getDFP_InterfaceCopy());return{deviceName:this.deviceName,description:this.description,processors:e,memory:this.memorys,debugPort:this.debugPort}}},st=class{subfamilyName;description;memorys;devices;constructor(){this.subfamilyName=this.description="",this.devices=[]}copy(e){this.subfamilyName=e.subfamilyName,this.description=e.description,this.devices.splice(0);for(let t of e.devices){let i=new Ue;i.copy(t),this.devices.push(i)}if(e.memorys){this.memorys=[];for(let t of e.memorys){let i=new Ce;i.copy(t),this.memorys.push(i)}}}clear(){this.subfamilyName=this.description="",this.devices=[],this.memorys=void 0}getDFP_InterfaceCopy(){let e=[];for(let i of this.devices)e.push(i.getDFP_InterfaceCopy());return{subfamilyName:this.subfamilyName,description:this.description,memory:this.memorys,devices:e}}},qe=class{vendor;familyName;description;deviceVendor;subfamilies;constructor(){this.vendor=this.familyName=this.description="",this.deviceVendor="",this.subfamilies=[]}clear(){this.vendor=this.familyName=this.description="",this.deviceVendor="",this.subfamilies=[]}copy(e){this.vendor=e.vendor,this.familyName=e.familyName,this.description=e.description,this.deviceVendor=e.deviceVendor,this.subfamilies.splice(0);for(let t of e.subfamilies){let i=new st;i.copy(t),this.subfamilies.push(i)}}getDFP_InterfaceCopy(){let e=[];for(let i of this.subfamilies)e.push(i.getDFP_InterfaceCopy());return{familyName:this.familyName,deviceVendor:this.deviceVendor,description:this.description,subfamilies:e}}},nt=class{category;name;attribute;path;select;version;constructor(){this.category=this.name=""}copy(e){this.category=e.category,this.name=e.name,this.attribute=e.attribute,this.path=e.path,this.select=e.select,this.version=e.version}clear(){this.category=this.name="",this.path=this.select=this.version=void 0}},Me=class{vendor;packVersion;packRootPath;comClass;comGroup;comSubgroup;comVariant;comVersion;comApiVersion;condition;custom;description;files;constructor(){this.vendor="",this.comClass=this.comGroup="",this.comVersion="",this.description="",this.files=[]}copy(e){if(this.comClass=e.comClass,this.comGroup=e.comGroup,this.comSubgroup=e.comSubgroup,this.comVariant=e.comVariant,this.comVersion=e.comVersion,this.comApiVersion=e.comApiVersion,e.condition?(this.condition=new $t,this.condition.copy(e.condition)):this.condition=void 0,this.custom=e.custom,this.description=e.description,this.files.splice(0),e.files)for(let t of e.files){let i=new nt;i.copy(t),this.files.push(i)}}clear(){this.vendor="",this.packVersion=this.packRootPath="",this.comClass=this.comGroup="",this.comSubgroup=this.comVariant=this.comApiVersion=void 0,this.comVersion="",this.condition=void 0,this.custom=void 0,this.description="",this.files=[]}getDFP_InterfaceCopy(){return{comClass:this.comClass,comGroup:this.comGroup,comSubgroup:this.comSubgroup,comVariant:this.comVariant,comVersion:this.comVersion,comApiVersion:this.comApiVersion,condition:this.condition,custom:this.custom,description:this.description,files:this.files}}isFilterIn(e){let t=this.vendor.toLowerCase().includes(e);return t||(t=this.comClass.toLowerCase().includes(e)),t||(t=this.comGroup.toLowerCase().includes(e)),!t&&this.comSubgroup&&(t=this.comSubgroup.includes(e)),!t&&this.comVariant&&(t=this.comVariant.toLowerCase().includes(e)),t||(t=this.comVersion.toLowerCase().includes(e)),t||(t=this.description.toLowerCase().includes(e)),t}},Tt=class{version;date;changeDesc;tag;constructor(){this.version="",this.date="",this.changeDesc=""}copy(e){this.version=e.version,this.date=e.date,this.changeDesc=e.changeDesc,this.tag=e.tag}},vt=class{name;vendor;description;url;license;releases;families;components;packVersion;packRootPath;constructor(){this.name=this.vendor=this.description="",this.packRootPath="",this.families=[],this.releases=[]}getPackVersion(){let e="",t=this.releases.length;return t&&(e=this.releases[t-1].version),e}copy(e){this.name=e.name,this.vendor=e.vendor,this.description=e.description,this.url=e.url,this.license=e.license,this.releases.splice(0);for(let t of e.releases){let i=new Tt;i.copy(t),this.releases.push(i)}this.families.splice(0);for(let t of e.families){let i=new qe;i.copy(t),this.families.push(i)}if(this.components?.splice(0),e.components){this.components||(this.components=[]);for(let t of e.components){let i=new Me;i.copy(t),this.components.push(i)}}}getDFPTnterfaceCopy(){let e=[];for(let s of this.families)e.push(s.getDFP_InterfaceCopy());let t;if(this.components){t=[];for(let s of this.components)t.push(s.getDFP_InterfaceCopy())}return{vendor:this.vendor,name:this.name,description:this.description,url:this.url,license:this.license,releases:this.releases,families:e,components:t}}},Li=class{vendor;description;familyNames;configFilePath;constructor(){this.vendor=this.description="",this.familyNames=[],this.configFilePath=""}},Oi=class{groupName;tool_name;tool_path;constructor(){this.groupName="MIPS_GCC",this.tool_name=this.tool_path=""}};var Oo=T(Ds());var xr="mipsSln_tpl.mpsln",wr="mipsProj_tpl.mpproj",kr="cip.mips_cpu_dfp.json",Eo="recentSolutions.json",Vt="launch.json",Ns="tpl",jr="config",Do="usr",Vi="packs",No="supported_devices",Bi="Mips Studio",Mo="Studio Toolchains",Ao="OpenOCD Path";function As(o){W.existsSync(o)&&W.readdirSync(o,{encoding:"utf-8",withFileTypes:!0}).forEach(t=>{if(t.isFile()){let i=t.name,s=z.default.join(o,i);try{W.chmodSync(s,292)}catch{console.log("chmodFileInDir chmodSync Failed on "+s)}}else if(t.isDirectory()){let i=z.default.join(o,t.name);As(i)}})}var X=class{slnToOpen;recentSlnList;mapToolChainExeInfo;supportedDFP_DeviceArr;mapVendorProcessorFamily;mapFamilySubFamily;mapDeviceDDFPath;OutputChannel_;supported_deviceFamilys_;installed_sdkPackcages;supported_families;constructor(){this.mapToolChainExeInfo=new Map,this.supportedDFP_DeviceArr=[],this.mapVendorProcessorFamily=new Map,this.mapFamilySubFamily=new Map,this.mapDeviceDDFPath=new Map,this.recentSlnList=[],this.supported_deviceFamilys_=[],this.installed_sdkPackcages=[],this.supported_families=[]}static getInstance(){return X.instance||(X.instance=new X),X.instance}init(e){X.studioRootPath=e.extensionPath,X.globalStoragePath_=e.globalStorageUri.fsPath,this.GetOutputChannelInstance(),this.updateToolChainExeInfo(),this.loadFromExtensionConfig(),this.checkInstalledSdkPackages()}updateToolChainExeInfo(){let e=this.getToolChainSettingsArr();for(let t of e)this.initToolChainExeInfo_imp(t.tool_path)}getOpenOCDPath(){return _e.workspace.getConfiguration().get(Ao,"")}getDeviceDDFPath(e){let t;return this.mapDeviceDDFPath.has(e)&&(t=this.mapDeviceDDFPath.get(e)),t}getOpenOCDGdbCmdPara(e,t){let i="";if(e==="M-Class_M5150"){let n=_e.workspace.getConfiguration().get(Ao,"");if(n){Ms.platform()==="win32"?i='&"'+n+'"':i=n;let a=X.getTemplateConfigPath();a&&(i+=' -s "'+a+'"',i+=" -f  mips_ejtag.cfg",i+=" -f  h1.cfg",i+=" -c 'gdb_port "+t+"'",i+=" -c 'init; jtag_reset 1 1; jtag_reset 0 0;  halt'")}}return i}readPackageVersion(e,t,i,s){this.loadSdkPackConfigFromDFPFile(e,t,i,s);let n=z.default.join(e,"debug/ddf");if(W.existsSync(n)){let a=W.readdirSync(n,{encoding:"utf-8",withFileTypes:!0});for(let r of a)if(r.isFile()){let l=r.name;if(l.includes("_DDF.json")){let c=z.default.join(n,l).replaceAll("\\","/"),d=l.replace("_DDF.json","").toUpperCase();this.mapDeviceDDFPath.set(d,c)}}}}static getPackPathRoot(){let e=z.default.join(X.globalStoragePath_,Vi);return e=e.replaceAll("\\","/"),e}readPackage(e,t,i){let s=W.readdirSync(e,{encoding:"utf-8",withFileTypes:!0});for(let n of s)if(n.isDirectory()){let a=n.name,r=z.default.join(e,a);this.readPackageVersion(r,t,i,a)}}readVendorSdkPackages(e,t){let i=W.readdirSync(e,{encoding:"utf-8",withFileTypes:!0});for(let s of i)if(s.isDirectory()){let n=s.name,a=z.default.join(e,n);this.readPackage(a,t,n)}}checkInstalledSdkPackages(){if(X.studioRootPath){let e=X.getPackPathRoot();if(W.existsSync(e)){let t=W.readdirSync(e,{encoding:"utf-8",withFileTypes:!0});for(let i of t)if(i.isDirectory()){let s=i.name,n=z.default.join(e,s);this.readVendorSdkPackages(n,s)}}}}getSupportedDeviceInfo(){return this.supported_deviceFamilys_}getInstalledSdkPackagesnfo(){return this.installed_sdkPackcages}getSupportFamilies(){return this.supported_families}getToolChainPathByGroupMixName(e){let t=e.split(ke);if(t.length>=2)return this.getToolChainPath(t[0],t[1])}getToolChainPath(e,t){let i=this.getToolChainSettingsArr();for(let s of i)if(s.groupName==e&&s.tool_name===t)return s.tool_path}getToolChainExePathNameByGroupMixName(e,t){let i=e.split(ke);if(i.length>=2)return this.getToolChainExePathName(i[0],i[1],t)}getToolChainExePathName(e,t,i){let s=this.getToolChainPath(e,t);if(s){let n=this.mapToolChainExeInfo.get(s);if(n?.has(i)){let a=n.get(i);if(a?.fileName)return z.default.join(s,a.fileName)}}}getToolChainExeFileNameByGroupMixName(e,t){let i=e.split(ke);if(i.length>=2)return this.getToolChainExeFileName(i[0],i[1],t)}getToolChainExeFileName(e,t,i){let s=this.getToolChainPath(e,t);if(s){let n=this.mapToolChainExeInfo.get(s);if(n?.has(i))return n.get(i)?.fileName}}GetOutputChannelInstance(){return this.OutputChannel_||(this.OutputChannel_=_e.window.createOutputChannel(Bi,{log:!0})),this.OutputChannel_}initToolChainExeInfo_imp(e){if(e&&e.length){let t;if(this.mapToolChainExeInfo.has(e)&&(t=this.mapToolChainExeInfo.get(e)),!t)for(let i of ot)this.getToolChainExeVersionInChildProcess(e,i)}}checkToolChainExe(e,t){let i="";if(W.existsSync(e)){let s=W.readdirSync(e,{encoding:"utf-8",withFileTypes:!0});Ms.platform()==="win32"&&(t+=".exe");for(let a of s)if(a.isFile()){let r=a.name.toLowerCase();if(r.lastIndexOf(t)===r.length-t.length){i=r;break}}}return i}getToolChainExeVersionInChildProcess(e,t){let i=this.checkToolChainExe(e,t),s=z.default.join(e,i),n=this.GetOutputChannelInstance();if(i&&i.length&&W.existsSync(s)){let a='"'+s+'" --version',r=z.default.dirname(e);this.mapToolChainExeInfo.has(e)||this.mapToolChainExeInfo.set(e,new Map);let l=this.mapToolChainExeInfo.get(e);try{let c=Lo.execSync(a,{cwd:r,encoding:"utf8",timeout:0}),d=c.indexOf(i);d===-1?d=0:d+=i.length+1;let u=c.indexOf(`
`);if(u){let h=c.substring(d,u),p=new ri;p.fileName=i,p.version=h,l?.set(t,p)}}catch(c){n.error(`getToolChainExeVersionInChildProcess Error: 
`+c)}}else n.warn(t+" File not Found.")}static getTemplateConfigPath(){if(X.studioRootPath)return z.default.join(X.studioRootPath,Ns)}static getSlnConfigTplPathName(){if(X.studioRootPath)return z.default.join(X.studioRootPath,Ns,xr)}static getProjectConfigTplPathName(){if(X.studioRootPath)return z.default.join(X.studioRootPath,Ns,wr)}updateSolutionToOpen(e){this.slnToOpen=e,this.updateRecentSolutionsConfig()}updateRecentSolutionList(e,t,i){let s=this.recentSlnList.length,n=-1,a=new Date,r=a.toLocaleString(),l=a,c=-1;for(let d=0;d<s;++d){if(this.recentSlnList[d].slnPath===t){if(this.recentSlnList[d].slnCfgFileName&&this.recentSlnList[d].slnCfgFileName===i){this.recentSlnList[d].slnName=e,this.recentSlnList[d].lastOpentime=a.toLocaleString(),n=d;break}else if(this.recentSlnList[d].slnName===e){this.recentSlnList[d].slnCfgFileName=i,this.recentSlnList[d].lastOpentime=a.toLocaleString(),n=d;break}}if(this.recentSlnList[d].lastOpentime){let u=new Date(this.recentSlnList[d].lastOpentime??"");u.getTime()<l.getTime()&&(l=u,c=d)}}n===-1&&(s<6?this.recentSlnList.push({slnName:e,slnPath:t,slnCfgFileName:i,lastOpentime:r}):c!==-1&&(this.recentSlnList[c].slnName=e,this.recentSlnList[c].slnPath=t,this.recentSlnList[c].slnCfgFileName=i,this.recentSlnList[c].lastOpentime=r.toLocaleString())),this.updateRecentSolutionsConfig()}loadFromExtensionConfig(){if(X.studioRootPath){let e=z.default.join(X.studioRootPath,jr),t=z.default.join(e,kr);this.loadDeviceConfigFromDFPFile(t);let i=z.default.join(e,"cip.mp32gm51xx_dfp.json");this.loadDeviceConfigFromDFPFile(i)}if(X.globalStoragePath_){let e=z.default.join(X.globalStoragePath_,Vi,No);if(W.existsSync(e)){let s=W.readdirSync(e,{encoding:"utf-8",withFileTypes:!0});for(let n of s)if(n.isFile()&&z.default.extname(n.name)===".json"){let r=z.default.join(e,n.name);this.loadDeviceConfigFromDFPFile(r,!0)}}let t=z.default.join(X.globalStoragePath_,Do),i=z.default.join(t,Eo);if(W.existsSync(i)){let s=W.readFileSync(i),n=ze.jsonc.parse(s.toString());n.recentSlnList&&(this.recentSlnList=Array.from(n.recentSlnList)),n.slnToOpen&&(this.slnToOpen=n.slnToOpen)}else W.existsSync(t)||_e.workspace.fs.createDirectory(_e.Uri.file(t))}}addDevItemIfNotExisted(e){let t=!1;for(let i of this.supportedDFP_DeviceArr)if(i.familyName===e.familyName&&i.subfamilyName===e.subfamilyName&&i.deviceName===e.deviceName){if(t=!0,i.memorys)for(let s of i.memorys)this.addMemItemIfNotExisted(e,s);break}t||this.supportedDFP_DeviceArr.push(e)}addMemItemIfNotExisted(e,t){let i=!1;if(e.memorys){for(let s of e.memorys)if(s.name===t.name){i=!0;break}}if(!i){let s=new Ce;s.copy(t),e.memorys||(e.memorys=[]),e.memorys.push(s)}}loadDeviceConfigFromDFPFile(e,t){if(W.existsSync(e)){let i=W.readFileSync(e),s=ze.jsonc.parse(i.toString());if(s.package){let n=s.package;this.loadDeviceConfigFromPackage(t,n,e)}}}loadDeviceConfigFromPackage(e,t,i){let s=new Li;if(e&&(s.description=t.description,s.vendor=t.vendor,s.configFilePath=i),t.families)for(let n of t.families){if(e&&s.familyNames.push(n.familyName),n.vendor=t.vendor,n.subfamilies){for(let r of n.subfamilies)if(r.devices)for(let l of r.devices){let c=new Ue;if(c.copy(l),c.vendor=n.deviceVendor,c.familyName=n.familyName,c.subfamilyName=r.subfamilyName,r.memorys)for(let d of r.memorys)this.addMemItemIfNotExisted(c,d);this.addDevItemIfNotExisted(c)}}this.updateVendorFamilySubFamily_DFP_(n);let a=!1;for(let r of this.supported_families)if(r.familyName===n.familyName&&n.deviceVendor===r.deviceVendor){a=!0;break}a||this.supported_families.push(n)}e&&this.supported_deviceFamilys_.push(s)}updateVendorFamilySubFamilyMap(e){if(e.vendor&&e.familyName){let t=e.sdkName?e.vendor+"_"+e.sdkName:e.vendor;if(this.mapVendorProcessorFamily.has(t)){let i=this.mapVendorProcessorFamily.get(t);if(i)i.includes(e.familyName)||i.push(e.familyName);else{let s=new Array;s.push(e.familyName),this.mapVendorProcessorFamily.set(t,s)}}else{let i=new Array;i.push(e.familyName),this.mapVendorProcessorFamily.set(t,i)}}if(e.familyName&&e.subFamilys)if(this.mapVendorProcessorFamily.has(e.familyName)){let t=this.mapFamilySubFamily.get(e.familyName);if(t)for(let i of e.subFamilys)t.includes(i.name)||t.push(i.name);else{let i=new Array;for(let s of e.subFamilys)i.includes(s.name)||i.push(s.name);this.mapFamilySubFamily.set(e.familyName,i)}}else{let t=new Array;for(let i of e.subFamilys)t.includes(i.name)||t.push(i.name);this.mapFamilySubFamily.set(e.familyName,t)}}updateVendorFamilySubFamily_DFP_(e){if(e.vendor&&e.familyName){let t=e.deviceVendor;if(this.mapVendorProcessorFamily.has(t)){let i=this.mapVendorProcessorFamily.get(t);if(i)i.includes(e.familyName)||i.push(e.familyName);else{let s=new Array;s.push(e.familyName),this.mapVendorProcessorFamily.set(t,s)}}else{let i=new Array;i.push(e.familyName),this.mapVendorProcessorFamily.set(t,i)}}if(e.familyName&&e.subfamilies)if(this.mapVendorProcessorFamily.has(e.familyName)){let t=this.mapFamilySubFamily.get(e.familyName);if(t)for(let i of e.subfamilies)t.includes(i.subfamilyName)||t.push(i.subfamilyName);else{let i=new Array;for(let s of e.subfamilies)i.includes(s.subfamilyName)||i.push(s.subfamilyName);this.mapFamilySubFamily.set(e.familyName,i)}}else{let t=new Array;for(let i of e.subfamilies)t.includes(i.subfamilyName)||t.push(i.subfamilyName);this.mapFamilySubFamily.set(e.familyName,t)}}updateRecentSolutionsConfig(){if(X.studioRootPath){let e=z.default.join(X.globalStoragePath_,Do),t=z.default.join(e,Eo);if(W.existsSync(t)){let i=W.readFileSync(t),s=ze.jsonc.parse(i.toString());s.slnToOpen=this.slnToOpen,s.recentSlnList=this.recentSlnList;let n=ze.jsonc.beautify(ze.jsonc.stringify(s));W.writeFileSync(t,n)}else W.existsSync(e)?this.writeRecentSlnConfigFile_(t):_e.workspace.fs.createDirectory(_e.Uri.file(e)).then(()=>{this.writeRecentSlnConfigFile_(t)})}}writeRecentSlnConfigFile_(e){let t={slnToOpen:this.slnToOpen,recentSlnList:this.recentSlnList},i=ze.jsonc.beautify(ze.jsonc.stringify(t));W.writeFileSync(e,i)}getToolChainSettingsArr(){return _e.workspace.getConfiguration().get(Mo,[])}updateToolChainsSettingsArr(e){_e.workspace.getConfiguration().update(Mo,e,!0)}getSupportedDeviceArr_DFP(e,t,i){let s=this.supportedDFP_DeviceArr,n=this.supportedDFP_DeviceArr.length;if(e){s=new Array;for(let a=0;a<n;++a)this.supportedDFP_DeviceArr[a].vendor===e&&(t?t===this.supportedDFP_DeviceArr[a].familyName&&(i?this.supportedDFP_DeviceArr[a].subfamilyName===i&&s.push(this.supportedDFP_DeviceArr[a]):s.push(this.supportedDFP_DeviceArr[a])):s.push(this.supportedDFP_DeviceArr[a]))}else if(t){s=new Array;for(let a=0;a<n;++a)t===this.supportedDFP_DeviceArr[a].familyName&&(i?this.supportedDFP_DeviceArr[a].subfamilyName===i&&s.push(this.supportedDFP_DeviceArr[a]):s.push(this.supportedDFP_DeviceArr[a]))}return s}getAllDeviceVendors(){let e=new Array,t=this.mapVendorProcessorFamily.keys();for(let i of t)e.push(i);return e}getAllProcessorFamilys(e){let t=new Array;if(e){let i=this.mapVendorProcessorFamily.get(e);i&&(t=t.concat(i))}else{let i=this.mapVendorProcessorFamily.values();for(let s of i)t=t.concat(s)}return t}getAllProcessorSubFamilys(e){let t=new Array,i=this.mapFamilySubFamily.get(e);return i&&(t=Array.from(i)),t}async addDevDFPFileToSys(e){let t=!1;if(W.existsSync(e)){let i=z.default.basename(e),s=z.default.join(X.globalStoragePath_,Vi,No);if(!W.existsSync(s))await _e.workspace.fs.createDirectory(_e.Uri.file(s)).then(()=>{let n=z.default.join(s,i);W.copyFileSync(e,n),this.loadDeviceConfigFromDFPFile(n,!0),t=!0});else{let n=z.default.join(s,i);W.copyFileSync(e,n),this.loadDeviceConfigFromDFPFile(n,!0),t=!0}}return t}async addSdkPackToSys(e){let t=!1,i=new Oo.default(e),s=z.default.basename(e,".pack"),n=s.split(".");if(n.length>=4){let a=n[0],r=n[1],c=s.indexOf(r)+r.length+1,d=s.substring(c),u=z.default.join(X.globalStoragePath_,Vi,a,r,d);W.existsSync(u)?(i.extractAllTo(u,!0),As(u),this.loadSdkPackConfigFromDFPFile(u,a,r,d),t=!0):await _e.workspace.fs.createDirectory(_e.Uri.file(u)).then(()=>{i.extractAllTo(u,!0),As(u),this.loadSdkPackConfigFromDFPFile(u,a,r,d),t=!0})}return t}loadSdkPackConfigFromDFPFile(e,t,i,s){let n=t+"."+i,a=z.default.join(e,n+"."+s+".json"),r=z.default.join(e,n+".json"),l;if(W.existsSync(a)?l=a:W.existsSync(r)&&(l=r),l){let c=W.readFileSync(l),d=ze.jsonc.parse(c.toString());if(d.package){let u=new vt;u.copy(d.package),u.packRootPath=e,u.packVersion=s,this.installed_sdkPackcages.push(u),u.families&&this.loadDeviceConfigFromPackage(!0,u,l)}}}},j=X;q(j,"studioRootPath"),q(j,"globalStoragePath_"),q(j,"instance");var ke="_*++*_",ot=["gcc","g++","ld","objcopy","objdump","size","gdb"],Er=["C Compiler","C++ Compiler","Linker","Hex/Bin converter","Listing generator","Size command","debugger"],ri=class{fileName;version;constructor(){this.fileName="",this.version=""}isValidInfo(){return!!(this.version.length&&this.fileName.length)}},Ls=class{bDisplaySource;bDisplayAllHeaders;bDemangel;bDisplayDebuginfo;bDisassemble;bDisplayFileHeaders;bDisplayLineNumbers;bDisplayRelocationInfo;bDisplaySymbols;bWideLines;constructor(){this.bDisplaySource=!0,this.bDisplayAllHeaders=!0,this.bDemangel=!0,this.bDisplayDebuginfo=!1,this.bDisassemble=!1,this.bDisplayFileHeaders=!1,this.bDisplayLineNumbers=!0,this.bDisplayRelocationInfo=!1,this.bDisplaySymbols=!1,this.bWideLines=!0}copy(e){e.bDisplaySource!==void 0&&(this.bDisplaySource=e.bDisplaySource),e.bDisplayAllHeaders!==void 0&&(this.bDisplayAllHeaders=e.bDisplayAllHeaders),e.bDemangel!==void 0&&(this.bDemangel=e.bDemangel),e.bDisplayDebuginfo!==void 0&&(this.bDisplayDebuginfo=e.bDisplayDebuginfo),e.bDisassemble!==void 0&&(this.bDisassemble=e.bDisassemble),e.bDisplayFileHeaders!==void 0&&(this.bDisplayFileHeaders=e.bDisplayFileHeaders),e.bDisplayLineNumbers!==void 0&&(this.bDisplayLineNumbers=e.bDisplayLineNumbers),e.bDisplayRelocationInfo!==void 0&&(this.bDisplayRelocationInfo=e.bDisplayRelocationInfo),e.bDisplaySymbols!==void 0&&(this.bDisplaySymbols=e.bDisplaySymbols),e.bWideLines!==void 0&&(this.bWideLines=e.bWideLines)}},Ke=class{outType;outName;outFileExt;outNamePrefix;outPath;bOutBinFile;bOUtHexFile;bOutDasmFile;bShowSizeInfo;objdumpCfg;constructor(){this.outType="elf",this.outFileExt="elf",this.outName="",this.outNamePrefix="",this.outPath="",this.bOutBinFile=this.bOUtHexFile=this.bOutDasmFile=!1,this.bShowSizeInfo=!0,this.objdumpCfg=new Ls}getOutputFilePathName(e){let t=this.outNamePrefix+this.outName;return e&&(t+="."+this.outFileExt),Ze.default.join(this.outPath,t)}getOutputFileName(e){let t=this.outNamePrefix+this.outName;return e&&(t+="."+this.outFileExt),t}copy(e){e.outType&&(this.outType=e.outType),e.outName&&(this.outName=e.outName),e.outFileExt&&(this.outFileExt=e.outFileExt),e.outNamePrefix&&(this.outNamePrefix=e.outNamePrefix),e.outPath&&(this.outPath=e.outPath.replaceAll("\\","/")),e.bOutBinFile!==void 0&&(this.bOutBinFile=e.bOutBinFile),e.bOUtHexFile!==void 0&&(this.bOUtHexFile=e.bOUtHexFile),e.bOutDasmFile!==void 0&&(this.bOutDasmFile=e.bOutDasmFile),e.objdumpCfg&&this.objdumpCfg.copy(e.objdumpCfg),e.bShowSizeInfo!==void 0&&(this.bShowSizeInfo=e.bShowSizeInfo)}},Wi=class{bAlwaysPreproceAsm;bNoStdInc;bProper;definedSymbols;undefinedSymbols;includePaths;includeFiles;bGenerateAsmlst;bSaveTempFile;bVerbose;strOtherFlag;constructor(){this.bAlwaysPreproceAsm=!0,this.bNoStdInc=!1,this.bProper=!1,this.definedSymbols=[],this.undefinedSymbols=[],this.includePaths=[],this.includeFiles=[],this.bGenerateAsmlst=!1,this.bSaveTempFile=!1,this.bVerbose=!1,this.strOtherFlag=""}copy(e){e.bAlwaysPreproceAsm!==void 0&&(this.bAlwaysPreproceAsm=e.bAlwaysPreproceAsm),e.bNoStdInc!==void 0&&(this.bNoStdInc=e.bNoStdInc),e.bProper!==void 0&&(this.bProper=e.bProper),e.definedSymbols&&(this.definedSymbols=Array.from(e.definedSymbols)),e.undefinedSymbols&&(this.undefinedSymbols=Array.from(e.undefinedSymbols)),e.includePaths&&(this.includePaths=Array.from(e.includePaths),this.includePaths.forEach((t,i)=>{this.includePaths[i]=t.replaceAll("\\","/")}),this.includePaths=Array.from(new Set(this.includePaths))),e.includeFiles&&(this.includeFiles=Array.from(e.includeFiles),this.includeFiles.forEach((t,i)=>{this.includeFiles[i]=t.replaceAll("\\","/")}),this.includeFiles=Array.from(new Set(this.includeFiles))),e.bGenerateAsmlst!==void 0&&(this.bGenerateAsmlst=e.bGenerateAsmlst),e.bSaveTempFile!==void 0&&(this.bSaveTempFile=e.bSaveTempFile),e.bVerbose!==void 0&&(this.bVerbose=e.bVerbose),this.strOtherFlag=e.strOtherFlag}getIncOptionStrArr(){let e=[];for(let t of this.includePaths)e.push(' -I "'+t+'"');for(let t of this.includeFiles)e.push(' -include "'+t+'"');return e}getAllOptionString(){let e="";this.bAlwaysPreproceAsm?e+=" -x assembler-with-cpp":e+=" -x assembler",this.bNoStdInc&&(e+=" -nostdinc"),this.bProper&&(e+=" -E");for(let t of this.definedSymbols)e+=" -D "+t;for(let t of this.undefinedSymbols)e+=" -U "+t;return e+=this.getIncOptionStrArr().join(""),this.bGenerateAsmlst&&(e+=" -Wa,-adhln=${outName}.lst"),this.bSaveTempFile&&(e+=" -save-temps"),this.bVerbose&&(e+=" -V"),e+=" "+this.strOtherFlag,e}},Os=class{bEnableWarning;bEnableExtraWarning;bTreatWarningAsErr;bAsFatalErr;bPedantic;bPedanticError;bWarnMissIncDir;bWarnSwitchDefault;bWarnSwitchEnum;bWconversion;bWMissingPrototypes;bWStrictPrototypes;bWBadCast;strOtherWarnFlag;constructor(){this.bEnableWarning=!0,this.bEnableExtraWarning=this.bTreatWarningAsErr=this.bAsFatalErr=this.bPedantic=!1,this.bPedanticError=this.bWarnMissIncDir=this.bWarnSwitchDefault=this.bWarnSwitchEnum=!1,this.bWconversion=this.bWMissingPrototypes=this.bWStrictPrototypes=this.bWBadCast=!1,this.strOtherWarnFlag=""}copy(e){e.bEnableWarning!==void 0&&(this.bEnableWarning=e.bEnableWarning),e.bEnableExtraWarning!==void 0&&(this.bEnableExtraWarning=e.bEnableExtraWarning),e.bTreatWarningAsErr!==void 0&&(this.bTreatWarningAsErr=e.bTreatWarningAsErr),e.bAsFatalErr!==void 0&&(this.bAsFatalErr=e.bAsFatalErr),e.bPedantic!==void 0&&(this.bPedantic=e.bPedantic),e.bPedanticError!==void 0&&(this.bPedanticError=e.bPedanticError),e.bWarnMissIncDir!==void 0&&(this.bWarnMissIncDir=e.bWarnMissIncDir),e.bWarnSwitchDefault!==void 0&&(this.bWarnSwitchDefault=e.bWarnSwitchDefault),e.bWarnSwitchEnum!==void 0&&(this.bWarnSwitchEnum=e.bWarnSwitchEnum),e.bWconversion!==void 0&&(this.bWconversion=e.bWconversion),e.bWMissingPrototypes!==void 0&&(this.bWMissingPrototypes=e.bWMissingPrototypes),e.bWMissingPrototypes!==void 0&&(this.bWStrictPrototypes=e.bWStrictPrototypes),e.bWMissingPrototypes!==void 0&&(this.bWBadCast=e.bWBadCast),this.strOtherWarnFlag=e.strOtherWarnFlag}getAllOptionString(){let e="";return this.bEnableWarning&&(e+=" -Wall"),this.bEnableExtraWarning&&(e+=" -Wextra"),this.bTreatWarningAsErr&&(e+=" -Werror"),this.bAsFatalErr&&(e+=" -Wfatal-errors"),this.bPedantic&&(e+=" -pedantic"),this.bPedanticError&&(e+=" -pedantic-error"),this.bWarnMissIncDir&&(e+=" -Wmissing-include-dirs"),this.bWarnSwitchDefault&&(e+=" -Wswitch-default"),this.bWarnSwitchEnum&&(e+=" -Wswitch-enum"),this.bWconversion&&(e+=" -Wconversion"),this.bWMissingPrototypes&&(e+=" -Wmissing-prototypes"),this.bWStrictPrototypes&&(e+=" --Wstrict-prototypes"),this.bWBadCast&&(e+=" -Wbad-function-cast"),e+=" "+this.strOtherWarnFlag,e}},Hi=class{bNoStdInc;bProper;definedSymbols;undefinedSymbols;includePaths;includeFiles;cStd;opLevel;bFunctionSsection;bDataSection;bNoException;bSignedChar;bNoBuildIn;bFreestanding;bLinkTimeOp;bNoRTTI;bNoCxa_atexit;bNoThreadsafe;strOtherOpFlag;debugLevel;debugFormat;bProinfo;bGProInfo;warnCfg;bVerbose;bPic;bStackUsage;bCyclomaticComplexity;bGenerateAsmlst;bSaveTempFile;constructor(){this.bNoStdInc=!1,this.bProper=!1,this.definedSymbols=[],this.undefinedSymbols=[],this.includePaths=[],this.includeFiles=[],this.cStd="gnu17",this.opLevel="Og",this.bSignedChar=this.bNoBuildIn=this.bFreestanding=this.bLinkTimeOp=!1,this.bNoRTTI=this.bNoCxa_atexit=this.bNoThreadsafe=!1,this.bFunctionSsection=this.bDataSection=this.bNoException=!0,this.strOtherOpFlag="",this.debugLevel="g",this.debugFormat="gdb",this.bProinfo=this.bGProInfo=!1,this.warnCfg=new Os,this.bVerbose=this.bPic=this.bStackUsage=this.bCyclomaticComplexity=!1,this.bGenerateAsmlst=this.bSaveTempFile=!1}copy(e){e.bNoStdInc!==void 0&&(this.bNoStdInc=e.bNoStdInc),e.bProper!==void 0&&(this.bProper=e.bProper),e.definedSymbols?.length&&(this.definedSymbols=Array.from(e.definedSymbols)),e.undefinedSymbols?.length&&(this.undefinedSymbols=Array.from(e.undefinedSymbols)),e.includePaths&&(this.includePaths=Array.from(e.includePaths),this.includePaths.forEach((t,i)=>{this.includePaths[i]=t.replaceAll("\\","/")}),this.includePaths=Array.from(new Set(this.includePaths))),e.includeFiles&&(this.includeFiles=Array.from(e.includeFiles),this.includeFiles.forEach((t,i)=>{this.includeFiles[i]=t.replaceAll("\\","/")}),this.includeFiles=Array.from(new Set(this.includeFiles))),e.bVerbose!==void 0&&(this.bVerbose=e.bVerbose),e.cStd&&(this.cStd=e.cStd),e.opLevel&&(this.opLevel=e.opLevel),e.bFunctionSsection!==void 0&&(this.bFunctionSsection=e.bFunctionSsection),e.bDataSection!==void 0&&(this.bDataSection=e.bDataSection),e.bNoException!==void 0&&(this.bNoException=e.bNoException),e.bSignedChar!==void 0&&(this.bSignedChar=e.bSignedChar),e.bNoBuildIn!==void 0&&(this.bNoBuildIn=e.bNoBuildIn),e.bFreestanding!==void 0&&(this.bFreestanding=e.bFreestanding),e.bLinkTimeOp!==void 0&&(this.bLinkTimeOp=e.bLinkTimeOp),e.bNoRTTI!==void 0&&(this.bNoRTTI=e.bNoRTTI),e.bNoCxa_atexit!==void 0&&(this.bNoCxa_atexit=e.bNoCxa_atexit),e.bNoThreadsafe!==void 0&&(this.bNoThreadsafe=e.bNoThreadsafe),e.strOtherOpFlag!==void 0&&(this.strOtherOpFlag=e.strOtherOpFlag),e.debugLevel!==void 0&&(this.debugLevel=e.debugLevel),e.debugFormat!==void 0&&(this.debugFormat=e.debugFormat),e.bProinfo!==void 0&&(this.bProinfo=e.bProinfo),e.bGProInfo!==void 0&&(this.bGProInfo=e.bGProInfo),e.warnCfg&&this.warnCfg.copy(e.warnCfg),e.bVerbose!==void 0&&(this.bVerbose=e.bVerbose),e.bPic!==void 0&&(this.bPic=e.bPic),e.bStackUsage!==void 0&&(this.bStackUsage=e.bStackUsage),e.bCyclomaticComplexity!==void 0&&(this.bCyclomaticComplexity=e.bCyclomaticComplexity),this.bGenerateAsmlst!==void 0&&(this.bGenerateAsmlst=e.bGenerateAsmlst),this.bSaveTempFile!==void 0&&(this.bSaveTempFile=e.bSaveTempFile)}getOptionForLinkUse(){let e="";return this.bLinkTimeOp&&(e+=" -flto"),this.bProinfo&&(e+=" -p"),this.bGProInfo&&(e+=" -pg"),e}getIncOptionStrArr(){let e=[];for(let t of this.includePaths)e.push(' -I "'+t+'"');for(let t of this.includeFiles)e.push(' -include "'+t+'"');return e}getAllOptionString(){let e="";this.bNoStdInc&&(e+=" -nostdinc"),this.bProper&&(e+=" -E");for(let t of this.definedSymbols)e+=" -D"+t;for(let t of this.undefinedSymbols)e+=" -U"+t;return e+=this.getIncOptionStrArr().join(""),e+=" -std="+this.cStd,e+=" -"+this.opLevel,this.bFunctionSsection&&(e+=" -ffunction-sections"),this.bDataSection&&(e+=" -fdata-sections"),this.bNoException&&(e+=" -fno-exceptions"),this.bSignedChar&&(e+=" -fsigned-char"),this.bNoBuildIn&&(e+=" -fno-builtin"),this.bFreestanding&&(e+=" -ffreestanding"),this.bLinkTimeOp&&(e+=" -flto"),this.bNoRTTI&&(e+=" -fno-rtti"),this.bNoCxa_atexit&&(e+=" -fno-use-cxa-atexit"),this.bNoThreadsafe&&(e+=" -fno-threadsafe-statics"),e+=" "+this.strOtherOpFlag,this.debugLevel&&(e+=" -"+this.debugLevel),this.debugLevel&&(e+=" -g"+this.debugFormat),this.bProinfo&&(e+=" -p"),this.bGProInfo&&(e+=" -pg"),e+=" "+this.warnCfg.getAllOptionString(),this.bVerbose&&(e+=" -V"),this.bPic&&(e+=" -fPIC"),this.bStackUsage&&(e+=" -fstack-usage"),this.bCyclomaticComplexity&&(e+=" -fcyclomatic-complexity"),this.bGenerateAsmlst&&(e+=" -Wa,-adhln=${outName}.lst"),this.bSaveTempFile&&(e+=" -save-temps"),e}},Gi=class{linkscirptFiles;syscall;bGenerateMapFile;bCref;bDiscardUnusedSection;bPrtUnusedSection;bVerbose;bNoStdStartFiles;bNoDefaultLibs;bNoStdlib;bOmitSymbolInfo;libFiles;libPaths;bPlacelibsInGroup;bUseCMathLib;otherFlags;otherObjects;constructor(){this.linkscirptFiles=[],this.syscall="",this.bGenerateMapFile=this.bCref=!1,this.bDiscardUnusedSection=!0,this.bPrtUnusedSection=!1,this.bVerbose=this.bNoStdStartFiles=this.bNoDefaultLibs=this.bNoStdlib=this.bOmitSymbolInfo=!1,this.libFiles=[],this.libPaths=[],this.bPlacelibsInGroup=this.bUseCMathLib=!1,this.otherFlags=[],this.otherObjects=[]}copy(e){e.linkscirptFiles&&(this.linkscirptFiles=Array.from(e.linkscirptFiles),this.linkscirptFiles.forEach((t,i)=>{this.linkscirptFiles[i]=t.replaceAll("\\","/")})),e.syscall&&(this.syscall=e.syscall),e.bGenerateMapFile!==void 0&&(this.bGenerateMapFile=e.bGenerateMapFile),e.bCref!==void 0&&(this.bCref=e.bCref),e.bDiscardUnusedSection!==void 0&&(this.bDiscardUnusedSection=e.bDiscardUnusedSection),e.bPrtUnusedSection!==void 0&&(this.bPrtUnusedSection=e.bPrtUnusedSection),e.bVerbose!==void 0&&(this.bVerbose=e.bVerbose),e.bNoStdStartFiles!==void 0&&(this.bNoStdStartFiles=e.bNoStdStartFiles),e.bNoDefaultLibs!==void 0&&(this.bNoDefaultLibs=e.bNoDefaultLibs),e.bNoStdlib!==void 0&&(this.bNoStdlib=e.bNoStdlib),e.bOmitSymbolInfo!==void 0&&(this.bOmitSymbolInfo=e.bOmitSymbolInfo),e.libFiles&&(this.libFiles=Array.from(e.libFiles)),e.libPaths&&(this.libPaths=Array.from(e.libPaths)),e.bPlacelibsInGroup!==void 0&&(this.bPlacelibsInGroup=e.bPlacelibsInGroup),e.bUseCMathLib!==void 0&&(this.bUseCMathLib=e.bUseCMathLib),e.otherFlags&&(this.otherFlags=e.otherFlags),e.otherObjects&&(this.otherObjects=Array.from(e.otherObjects))}getAllOptionString(e){let t="";if(this.syscall&&this.syscall!=="no"&&(t+=" -specs="+this.syscall+".specs"),this.bGenerateMapFile&&(t+=' "-Wl,-Map=${outName}.map"'),this.bCref&&(t+=' "-Wl,--cref"'),this.bDiscardUnusedSection&&(t+=' "-Wl,--gc-sections"'),this.bPrtUnusedSection&&(t+=' "-Wl,--print-gc-sections"'),this.bVerbose&&(t+=' "-Wl,--verbose"'),this.bNoStdStartFiles&&(t+=" -nostartfiles"),this.bNoDefaultLibs&&(t+=" -nodefaultlibs"),this.bNoStdlib&&(t+=" -nostdlib"),this.bOmitSymbolInfo&&(t+=" -s"),!e)for(let i of this.linkscirptFiles)t+=" -T "+i;for(let i of this.libPaths)t+=" -L "+i;if(this.bPlacelibsInGroup)for(let i of this.libFiles)t+=" -l "+i;else if(this.libFiles.length){t+=' "-Wl,--start-group"';for(let i of this.libFiles)t+=" -l "+i;t+=' "-Wl,--end-group"'}this.bUseCMathLib&&(t+=' "-Wl,--start-group" -lc -lm  "-Wl,--end-group"');for(let i of this.otherFlags)t+="  "+i;for(let i of this.otherObjects)t+="  "+i;return t}},qi=class{bStartOpenOCDLocal;nGdbPort;nTelnetPort;nTclPort;strCfgOption;bStartGdb;strCmdSession;bStartRemoteTarget;strSvrHost;nSvrPort;bResetAfterConnect;strResectConnectAtction;bRestartReset;strRestartResetAtction;bSetBreakPoint;strBreakPoint;bSetPCValue;strPCValue;bContinue;bLoadElf;strElfPathName;bElfLoadOffset;nElfLoadOffset;bLoadBin;strBinPathName;bBinLoadOffset;nBinLoadOffset;constructor(){this.bStartOpenOCDLocal=this.bStartGdb=!0,this.bStartRemoteTarget=!1,this.nGdbPort=3333,this.nTelnetPort=4444,this.nTclPort=6666,this.strCfgOption=this.strCmdSession="",this.strSvrHost="localhost",this.nSvrPort=3333,this.bResetAfterConnect=!1,this.strResectConnectAtction="Init",this.bRestartReset=!1,this.strRestartResetAtction="halt",this.bSetBreakPoint=!1,this.bSetPCValue=!1,this.strBreakPoint="main",this.strPCValue="0x0000",this.bContinue=!1,this.bLoadElf=!1,this.strElfPathName="",this.bElfLoadOffset=!1,this.nElfLoadOffset=0,this.bLoadBin=!1,this.strBinPathName="",this.bBinLoadOffset=!1,this.nBinLoadOffset=0}copy(e){e.bStartOpenOCDLocal!==void 0&&(this.bStartOpenOCDLocal=e.bStartOpenOCDLocal),e.bStartGdb!==void 0&&(this.bStartGdb=e.bStartGdb),e.bStartRemoteTarget!==void 0&&(this.bStartRemoteTarget=e.bStartRemoteTarget),e.nGdbPort&&(this.nGdbPort=e.nGdbPort),e.nTelnetPort&&(this.nTelnetPort=e.nTelnetPort),e.nTclPort&&(this.nTclPort=e.nTclPort),e.strCfgOption&&(this.strCfgOption=e.strCfgOption),e.strCmdSession&&(this.strCmdSession=e.strCmdSession),e.strSvrHost&&(this.strSvrHost=e.strSvrHost),e.nSvrPort&&(this.nSvrPort=e.nSvrPort),e.bResetAfterConnect!=null&&(this.bResetAfterConnect=e.bResetAfterConnect),e.strResectConnectAtction&&(this.strResectConnectAtction=e.strResectConnectAtction),e.bRestartReset!=null&&(this.bRestartReset=e.bRestartReset),e.strRestartResetAtction&&(this.strRestartResetAtction=e.strRestartResetAtction),e.bSetBreakPoint!=null&&(this.bSetBreakPoint=e.bSetBreakPoint),e.strBreakPoint&&(this.strBreakPoint=e.strBreakPoint),e.bSetPCValue!=null&&(this.bSetPCValue=e.bSetPCValue),e.strPCValue&&(this.strPCValue=e.strPCValue),e.bContinue!=null&&(this.bContinue=e.bContinue),e.bLoadElf!=null&&(this.bLoadElf=e.bLoadElf),e.strElfPathName&&(this.strElfPathName=e.strElfPathName.replaceAll("\\","/")),e.bElfLoadOffset!=null&&(this.bElfLoadOffset=e.bElfLoadOffset),e.nElfLoadOffset&&(this.nElfLoadOffset=e.nElfLoadOffset),e.bLoadBin!=null&&(this.bLoadBin=e.bLoadBin),e.strBinPathName&&(this.strBinPathName=e.strBinPathName.replaceAll("\\","/")),e.bBinLoadOffset!=null&&(this.bBinLoadOffset=e.bBinLoadOffset),e.nBinLoadOffset&&(this.nBinLoadOffset=e.nBinLoadOffset)}},li=class{strSelectedVendor;strSelectedFamily;strSelectedSubFamily;strSelectedDeviceName;strDevPeripCfgFilePath;procCoreCfgs;coreSelectIndex;curSelectedToolChainMixName;buildOutCfg;asmCompilerCfg;cCompilerCfg;linkerCfg;debugCfg;constructor(){this.strSelectedDeviceName="",this.strSelectedVendor=this.strSelectedFamily=this.strSelectedSubFamily="",this.strDevPeripCfgFilePath="",this.procCoreCfgs=[],this.coreSelectIndex=0,this.curSelectedToolChainMixName="",this.buildOutCfg=new Ke,this.asmCompilerCfg=new Wi,this.cCompilerCfg=new Hi,this.linkerCfg=new Gi,this.debugCfg=new qi}copy(e){if(e.strSelectedVendor&&(this.strSelectedVendor=e.strSelectedVendor),e.strSelectedFamily&&(this.strSelectedFamily=e.strSelectedFamily),e.strSelectedSubFamily&&(this.strSelectedSubFamily=e.strSelectedSubFamily),e.strSelectedDeviceName&&(this.strSelectedDeviceName=e.strSelectedDeviceName),e.strDevPeripCfgFilePath&&(this.strDevPeripCfgFilePath=e.strDevPeripCfgFilePath),this.procCoreCfgs.splice(0),e.procCoreCfgs){for(let t of e.procCoreCfgs){let i=new it;i.copy(t),this.procCoreCfgs.push(i)}e.coreSelectIndex<=e.procCoreCfgs.length&&(this.coreSelectIndex=e.coreSelectIndex)}e.curSelectedToolChainMixName&&(this.curSelectedToolChainMixName=e.curSelectedToolChainMixName),e.buildOutCfg&&this.buildOutCfg.copy(e.buildOutCfg),e.asmCompilerCfg&&this.asmCompilerCfg.copy(e.asmCompilerCfg),e.cCompilerCfg&&this.cCompilerCfg.copy(e.cCompilerCfg),e.linkerCfg&&this.linkerCfg.copy(e.linkerCfg),e.debugCfg&&this.debugCfg.copy(e.debugCfg)}getInstanceCopy(){return{strSelectedVendor:this.strSelectedVendor,strSelectedFamily:this.strSelectedFamily,strSelectedSubFamily:this.strSelectedSubFamily,strSelectedDeviceName:this.strSelectedDeviceName,strDevPeripCfgFilePath:this.strDevPeripCfgFilePath,procCoreCfgs:this.procCoreCfgs,coreSelectIndex:this.coreSelectIndex,buildOutCfg:this.buildOutCfg,asmCompilerCfg:this.asmCompilerCfg,cCompilerCfg:this.cCompilerCfg,linkerCfg:this.linkerCfg,debugCfg:this.debugCfg}}},zi=class{debugConfig;releaseConfig;curMode;constructor(){this.debugConfig=new li,this.releaseConfig=new li,this.curMode=De}copy(e){this.debugConfig.copy(e.debugConfig),this.releaseConfig.copy(e.releaseConfig)}getInstanceCopy(){return{debugConfig:this.debugConfig.getInstanceCopy(),releaseConfig:this.releaseConfig.getInstanceCopy()}}},_t=class{_panel;_extensionUri;_disposables=[];settingDetailIndex;currentListItemEditInfo;mapToolChainExeInfo;mapProcessorInfo;curMode;projectSettingItem;strSelectedDeviceName;strSelectedVendor;strSelectedFamily;strSelectedSubFamily;strDevPeripCfgFilePath;buildOutCfg;asmCompilerCfg;cCompilerCfg;projCppIncPathList;projAsmIncPathList;linerCfg;debugCfg;curSelectedToolChainName;curSelectedToolChainGroupName;nCoreSelectedindex_;procCoreCfgs;curAddNewitemListTitle;compileAssemblyDetailOpen_;compileCppDetailOpen_;static getInstance(){return _t.instance||(_t.instance=new _t),_t.instance}constructor(){this.settingDetailIndex=0,this.curMode=De,this.projectSettingItem=new li,this.curSelectedToolChainGroupName=this.curSelectedToolChainName="",this.strDevPeripCfgFilePath="",this.currentListItemEditInfo={elem_title:"",data_index:""},this.mapToolChainExeInfo=new Map(j.getInstance().mapToolChainExeInfo),this.buildOutCfg=new Ke,this.asmCompilerCfg=new Wi,this.cCompilerCfg=new Hi,this.projCppIncPathList=[],this.projAsmIncPathList=[],this.curAddNewitemListTitle="",this.linerCfg=new Gi,this.debugCfg=new qi,this.strSelectedDeviceName="",this.strSelectedVendor=this.strSelectedFamily=this.strSelectedSubFamily="",this.nCoreSelectedindex_=-1,this.procCoreCfgs=[],this.mapProcessorInfo=new Map,this.compileAssemblyDetailOpen_=!0,this.compileCppDetailOpen_=!0}show(e){let t=ve.window.activeTextEditor?ve.window.activeTextEditor.viewColumn:void 0;if(this._extensionUri=e,this._panel)this._panel.reveal(t||ve.ViewColumn.One);else{this._panel=ve.window.createWebviewPanel(_t.viewType,"MIPS Studio: ProjectSettings",t??ve.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0,localResourceRoots:[this._extensionUri]}),this.loadProcessorAndProjectSettings(),this._panel.onDidDispose(()=>this.dispose(),null,this._disposables);let i=["ItemTarget","ItemToolchains","ItemBuildOutput","ItemCompile","ItemLinker","ItemDebug"];this._panel.webview.onDidReceiveMessage(s=>{switch(s.type){case"cancel":this.dispose();break;case"btnEditToolChiansSetting":ve.commands.executeCommand("mipsstudio.toolChainsSetting.show");break;case"btnViewSetting":ve.commands.executeCommand("workbench.action.openSettings","OpenOCD Path");break;case"btnRefreshOpenOCD":{let a=ve.workspace.getConfiguration().get("OpenOCD Path"),r=String(a);this._panel?.webview.postMessage({type:"updateElemValue",elem_id:"OpenOCDFsPath",elem_value:r})}break;case"actionItemClicked":if(s.actionItem){let n=i.indexOf(s.actionItem);n!==-1&&this.settingDetailIndex!==n&&(this.settingDetailIndex=n,this._update())}break;case"listRowEdit":s.elem_title&&s.data_index&&(this.currentListItemEditInfo.data_index=s.data_index,this.currentListItemEditInfo.elem_title=s.elem_title,this._update());break;case"listRowEditOk":s.elem_title&&s.data_index&&s.listItemValueLst&&this.updateConfigListItemValue(s.elem_title,s.data_index,s.listItemValueLst);break;case"listNewRowOk":s.elem_title&&s.listItemValueLst&&this.addConfigListItemValue(s.elem_title,s.listItemValueLst);break;case"listRowRemove":if(s.elem_title&&s.data_index){let n=parseInt(s.data_index);this.handleListRowRemoved(s.elem_title,n)}break;case"listRowEditCancel":this.currentListItemEditInfo.data_index="",this.currentListItemEditInfo.elem_title="",this._update();break;case"listNewRowCancel":this.curAddNewitemListTitle="",this._update();break;case"listRowMoveUp":if(s.elem_title&&s.data_index){let n=parseInt(s.data_index);this.handleListRowMoveUp(s.elem_title,n)}break;case"listRowMoveDown":if(s.elem_title&&s.data_index){let n=parseInt(s.data_index);this.handleListRowMoveUp(s.elem_title,n,-1)}break;case"BrowseOutPath":Te().then(n=>{if(n!==void 0){let a=I.getInstance().getCurrentSolutionPath();a&&(n=Ze.default.relative(a,n),n=n.replaceAll("\\","/")),this.buildOutCfg.outPath=n||".",this._panel?.webview.postMessage({type:"BroweeOutPath",OutputPath:n})}});break;case"BrowseFile":if(s.valueid){let n=s.valueid;Mt().then(a=>{if(a!==void 0){let r=I.getInstance().getCurrentSolutionPath();r&&(a=Ze.default.relative(r,a),a=a.replaceAll("\\","/")),this.handleFilePathChanged(a,n),this._panel?.webview.postMessage({type:"BrowseFile",FilePath:a,valueid:n})}})}break;case"BrowsePath":if(s.valueid){let n=s.valueid;Te().then(a=>{if(a!==void 0){let r=I.getInstance().getCurrentSolutionPath();r&&(a=Ze.default.relative(r,a),a===""?a=".":a=a.replaceAll("\\","/")),this.handleFilePathChanged(a,n),this._panel?.webview.postMessage({type:"BrowsePath",path:a,valueid:s.valueid})}})}break;case"listAddRow":s.elem_title&&(this.curAddNewitemListTitle=s.elem_title,this._update());break;case"inputElemChanged":s.elem_id&&s.elem_value!==void 0&&this.handleInputElemChanged(s.elem_id,s.elem_value,s.selindex);break;case"detailElemChanged":if(s.elem_id&&s.elem_value!==void 0)switch(s.elem_id){case"compileCppDetail":this.compileCppDetailOpen_=s.elem_value==="true";break;case"compileAsmDetail":this.compileAssemblyDetailOpen_=s.elem_value==="true";break}break}},null,this._disposables),this._update()}}handleFilePathChanged(e,t){switch(this.settingDetailIndex){case 0:switch(t){case"PeripFile":this.strDevPeripCfgFilePath=e;break}break;case 5:switch(t){case"input_ElfFilePath":this.debugCfg.strElfPathName=e;break;case"input_BinFilePath":this.debugCfg.strBinPathName=e;break}break}}isVisible(){return!!this._panel?.visible}updateIfVisible(){this._panel?.visible&&(this.loadProcessorAndProjectSettings(),this._update())}handleListRowMoveUp(e,t,i){i===void 0&&(i=1);let s=!1;if(t>=0)switch(this.settingDetailIndex){case 3:switch(e){case"asm_IncludePaths":{let n=t-i,a=this.projAsmIncPathList.length;if(t<a&&n>=0&&n<a){let r=this.projAsmIncPathList[t].slice();this.projAsmIncPathList[t]=this.projAsmIncPathList[n],this.projAsmIncPathList[n]=r,s=!0}}break;case"cpp_IncludePaths":{let n=t-i,a=this.projCppIncPathList.length;if(t<a&&n>=0&&n<a){let r=this.projCppIncPathList[t].slice();this.projCppIncPathList[t]=this.projCppIncPathList[n],this.projCppIncPathList[n]=r,s=!0}}break}break}s&&this._update()}handleListRowRemoved(e,t){let i=!1;if(t>=0)switch(this.settingDetailIndex){case 0:{let s=parseInt(e.charAt(4)),n=this.mapProcessorInfo.get(this.strSelectedDeviceName);if(n){let a=n.processors.length,r=n.processors[s];s<a&&r.memoryMap&&t<r.memoryMap.length&&(r.memoryMap.splice(t,1),i=!0)}}break;case 3:switch(e){case"asm_defineSymbols":this.asmCompilerCfg.definedSymbols.length>t&&(this.asmCompilerCfg.definedSymbols.splice(t,1),i=!0);break;case"asm_UndefineSymbols":this.asmCompilerCfg.undefinedSymbols.length>t&&(this.asmCompilerCfg.undefinedSymbols.splice(t,1),i=!0);break;case"asm_IncludePaths":this.projAsmIncPathList.length>t&&(this.projAsmIncPathList.splice(t,1),i=!0);break;case"asm_IncludeFiles":this.asmCompilerCfg.includeFiles.length>t&&(this.asmCompilerCfg.includeFiles.splice(t,1),i=!0);break;case"cpp_defineSymbols":this.cCompilerCfg.definedSymbols.length>t&&(this.cCompilerCfg.definedSymbols.splice(t,1),i=!0);break;case"cpp_UndefineSymbols":this.cCompilerCfg.undefinedSymbols.length>t&&(this.cCompilerCfg.undefinedSymbols.splice(t,1),i=!0);break;case"cpp_IncludePaths":this.projCppIncPathList.length>t&&(this.projCppIncPathList.splice(t,1),i=!0);break;case"cpp_IncludeFiles":this.cCompilerCfg.includeFiles.length>t&&(this.cCompilerCfg.includeFiles.splice(t,1),i=!0);break}break;case 4:switch(e){case"linker_ScriptFiles":this.linerCfg.linkscirptFiles.length>t&&(this.linerCfg.linkscirptFiles.splice(t,1),i=!0);break;case"linker_Libraries":this.linerCfg.libFiles.length>t&&(this.linerCfg.libFiles.splice(t,1),i=!0);break;case"linker_LibSearchPaths":this.linerCfg.libPaths.length>t&&(this.linerCfg.libPaths.splice(t,1),i=!0);break;case"linker_OtherFlags":this.linerCfg.otherFlags.length>t&&(this.linerCfg.otherFlags.splice(t,1),i=!0);break;case"linker_OtherFiles":this.linerCfg.otherObjects.length>t&&(this.linerCfg.otherObjects.splice(t,1),i=!0);break}break;case 5:break}i&&(this.currentListItemEditInfo.data_index="",this.currentListItemEditInfo.elem_title="",this._update())}handleInputElemChanged_BuildOutCfg_imp(e,t){switch(e){case"chkOutputBin":this.buildOutCfg.bOutBinFile=t==="checked";break;case"chkOutputHex":this.buildOutCfg.bOUtHexFile=t==="checked";break;case"chkOutputDasm":this.buildOutCfg.bOutDasmFile=t==="checked";break;case"chkOutpuSize":this.buildOutCfg.bShowSizeInfo=t==="checked";break;case"chkDispalySource":this.buildOutCfg.objdumpCfg.bDisplaySource=t==="checked";break;case"chkDispalyAllHeader":this.buildOutCfg.objdumpCfg.bDisplayAllHeaders=t==="checked";break;case"chkDemagle":this.buildOutCfg.objdumpCfg.bDemangel=t==="checked";break;case"chkDisplayDebug":this.buildOutCfg.objdumpCfg.bDisplayDebuginfo=t==="checked";break;case"chkDisassemble":this.buildOutCfg.objdumpCfg.bDisassemble=t==="checked";break;case"chkDisplayFileHeader":this.buildOutCfg.objdumpCfg.bDisplayFileHeaders=t==="checked";break;case"chkDisplayLineNumber":this.buildOutCfg.objdumpCfg.bDisplayLineNumbers=t==="checked";break;case"chkDisplayRelocation":this.buildOutCfg.objdumpCfg.bDisplayRelocationInfo=t==="checked";break;case"chkDisplaySymbol":this.buildOutCfg.objdumpCfg.bDisplaySymbols=t==="checked";break;case"chkWideLine":this.buildOutCfg.objdumpCfg.bWideLines=t==="checked";break;case"outNamePrefix":this.buildOutCfg.outNamePrefix=t;break;case"outFileExt":this.buildOutCfg.outFileExt=t;break;case"outFileName":this.buildOutCfg.outName=t;break;case"outType":this.buildOutCfg.outType=t,this.buildOutCfg.outType==="lib"?this.buildOutCfg.outFileExt="a":this.buildOutCfg.outType==="elf"&&(this.buildOutCfg.outFileExt="elf"),this._panel?.webview.postMessage({type:"updateElemValue",elem_id:"outFileExt",elem_value:this.buildOutCfg.outFileExt});break}}handleInputElemChanged_CompilerCfg_imp(e,t){let i=!1;switch(e){case"chkAsmNostdinc":this.asmCompilerCfg.bNoStdInc=t==="checked",i=!0;break;case"chkAsmPreprocessOnly":this.asmCompilerCfg.bProper=t==="checked",i=!0;break;case"chkAssemblerlist":this.asmCompilerCfg.bGenerateAsmlst=t==="checked",i=!0;break;case"chkSavetempfiles":this.asmCompilerCfg.bSaveTempFile=t==="checked",i=!0;break;case"chkVerboase":this.asmCompilerCfg.bVerbose=t==="checked",i=!0;break;case"asmOtherFlag":this.asmCompilerCfg.strOtherFlag=t,i=!0;break;case"chkAlwaysPreproceAsm":this.asmCompilerCfg.bAlwaysPreproceAsm=t==="checked",i=!0;break}if(i){let s=this.asmCompilerCfg.getAllOptionString();this._panel?.webview.postMessage({type:"asmOptionChanged",option:s})}else{let s=!1;switch(e){case"chkCppNostdinc":this.cCompilerCfg.bNoStdInc=t==="checked",s=!0;break;case"chkCppPreprocessOnly":this.cCompilerCfg.bProper=t==="checked",s=!0;break;case"chkfunction-sections":this.cCompilerCfg.bFunctionSsection=t==="checked",s=!0;break;case"chkdata-section":this.cCompilerCfg.bDataSection=t==="checked",s=!0;break;case"chkno-exception":this.cCompilerCfg.bNoException=t==="checked",s=!0;break;case"chkCharisSigned":this.cCompilerCfg.bSignedChar=t==="checked",s=!0;break;case"chkno-buildin":this.cCompilerCfg.bNoBuildIn=t==="checked",s=!0;break;case"chkfreestanding":this.cCompilerCfg.bFreestanding=t==="checked",s=!0;break;case"chkLinkTimeOp":this.cCompilerCfg.bLinkTimeOp=t==="checked",s=!0;break;case"chkno-rtti":this.cCompilerCfg.bNoRTTI=t==="checked",s=!0;break;case"chkcxa_atexit":this.cCompilerCfg.bNoCxa_atexit=t==="checked",s=!0;break;case"chkthread-safe":this.cCompilerCfg.bNoThreadsafe=t==="checked",s=!0;break;case"chkWall":this.cCompilerCfg.warnCfg.bEnableWarning=t==="checked",s=!0;break;case"chkwextra":this.cCompilerCfg.warnCfg.bEnableExtraWarning=t==="checked",s=!0;break;case"chkwerror":this.cCompilerCfg.warnCfg.bTreatWarningAsErr=t==="checked",s=!0;break;case"chkfatal-error":this.cCompilerCfg.warnCfg.bAsFatalErr=t==="checked",s=!0;break;case"chkpedantic":this.cCompilerCfg.warnCfg.bPedantic=t==="checked",s=!0;break;case"chkpedantic-errors":this.cCompilerCfg.warnCfg.bPedanticError=t==="checked",s=!0;break;case"chkmissingIncDir":this.cCompilerCfg.warnCfg.bWarnMissIncDir=t==="checked",s=!0;break;case"chkswitch-default":this.cCompilerCfg.warnCfg.bWarnSwitchDefault=t==="checked",s=!0;break;case"chkWswitchEnum":this.cCompilerCfg.warnCfg.bWarnSwitchEnum=t==="checked",s=!0;break;case"chkconversion":this.cCompilerCfg.warnCfg.bWconversion=t==="checked",s=!0;break;case"chkmissing-prototypes":this.cCompilerCfg.warnCfg.bWMissingPrototypes=t==="checked",s=!0;break;case"chkstrict-prototypes":this.cCompilerCfg.warnCfg.bWStrictPrototypes=t==="checked",s=!0;break;case"chkbad-function-cast":this.cCompilerCfg.warnCfg.bWBadCast=t==="checked",s=!0;break;case"chkCppVerboase":this.cCompilerCfg.bVerbose=t==="checked",s=!0;break;case"chkPIC":this.cCompilerCfg.bPic=t==="checked",s=!0;break;case"chkStack-usage":this.cCompilerCfg.bStackUsage=t==="checked",s=!0;break;case"chkCyclomatic":this.cCompilerCfg.bCyclomaticComplexity=t==="checked",s=!0;break;case"chkCppAssemblerlist":this.cCompilerCfg.bGenerateAsmlst=t==="checked",s=!0;break;case"chkCppSavetempfiles":this.cCompilerCfg.bSaveTempFile=t==="checked",s=!0;break;case"otherOpFlag":this.cCompilerCfg.strOtherOpFlag=t,s=!0;break;case"otherWarnFlag":this.cCompilerCfg.warnCfg.strOtherWarnFlag=t,s=!0;break;case"select_cStd":this.cCompilerCfg.cStd=t,s=!0;break;case"select_cOplevel":this.cCompilerCfg.opLevel=t,s=!0;break;case"select_cDebuglevel":this.cCompilerCfg.debugLevel=t,s=!0;break;case"select_cDebugFormat":this.cCompilerCfg.debugFormat=t,s=!0;break;case"chkProInfo":this.cCompilerCfg.bProinfo=t==="checked",s=!0;break;case"chkGProInfo":this.cCompilerCfg.bGProInfo=t==="checked",s=!0;break}if(s){let n=this.cCompilerCfg.getAllOptionString();this._panel?.webview.postMessage({type:"cppOptionChanged",option:n})}}}handleInputElemChanged_LinkerCfg_imp(e,t){let i=!1;switch(e){case"chkMap":this.linerCfg.bGenerateMapFile=t==="checked",i=!0;break;case"chkCref":this.linerCfg.bCref=t==="checked",i=!0;break;case"chkGc-sections":this.linerCfg.bDiscardUnusedSection=t==="checked",i=!0;break;case"chkPrint-gc-sections":this.linerCfg.bPrtUnusedSection=t==="checked",i=!0;break;case"chkVerboase":this.linerCfg.bVerbose=t==="checked",i=!0;break;case"chkNostartfiles":this.linerCfg.bNoStdStartFiles=t==="checked",i=!0;break;case"chkNodefaultlibs":this.linerCfg.bNoDefaultLibs=t==="checked",i=!0;break;case"chkNostdlib":this.linerCfg.bNoStdlib=t==="checked",i=!0;break;case"chkRemoveAllInformation":this.linerCfg.bOmitSymbolInfo=t==="checked",i=!0;break;case"chkPlaceLibsInGroup":this.linerCfg.bPlacelibsInGroup=t==="checked",i=!0;break;case"chkUseCMathLib":this.linerCfg.bUseCMathLib=t==="checked",i=!0;break;case"selectSysCall":this.linerCfg.syscall=t,i=!0;break}if(i){let s=this.linerCfg.getAllOptionString();this._panel?.webview.postMessage({type:"linkerOptionChanged",option:s})}}handleInputElemChanged_DebugCfg_imp(e,t){switch(e){case"chkStartOpenOCD":this.debugCfg.bStartOpenOCDLocal=t==="checked",this.debugCfg.bStartOpenOCDLocal&&(this.debugCfg.strSvrHost="localhost",this.debugCfg.nSvrPort=this.debugCfg.nGdbPort,this._panel?.webview.postMessage({type:"updateElemValue",elem_id:"gdbSvrHost",elem_value:this.debugCfg.strSvrHost}),this._panel?.webview.postMessage({type:"updateElemValue",elem_id:"gdbSvrPort",elem_value:this.debugCfg.nSvrPort}));break;case"chkResetAfterConnect":this.debugCfg.bResetAfterConnect=t==="checked";break;case"chkRestartReset":this.debugCfg.bRestartReset=t==="checked";break;case"chkSetBreakPointAt":this.debugCfg.bSetBreakPoint=t==="checked";break;case"chkSetProgCounterAt":this.debugCfg.bSetPCValue=t==="checked";break;case"chkContinue":this.debugCfg.bContinue=t==="checked";break;case"chkloadELF":this.debugCfg.bLoadElf=t==="checked",this.debugCfg.bLoadBin=!this.debugCfg.bLoadElf;break;case"chkloadAppAtStartUp":this.debugCfg.bElfLoadOffset=t==="checked";break;case"chkloadBin":this.debugCfg.bLoadBin=t==="checked",this.debugCfg.bLoadElf=!this.debugCfg.bLoadElf;break;case"chkBinloadAppAtStartUp":this.debugCfg.bBinLoadOffset=t==="checked";break;case"resetAfterConn_Action":this.debugCfg.strResectConnectAtction=t;break;case"restartReset_Action":this.debugCfg.strRestartResetAtction=t;break;case"breakPoint_At":this.debugCfg.strBreakPoint=t;break;case"PC_Val":this.debugCfg.strPCValue=t;break;case"openOcdGdbPort":this.debugCfg.nGdbPort=parseInt(t),this.debugCfg.bStartOpenOCDLocal&&(this.debugCfg.nSvrPort=this.debugCfg.nGdbPort,this._panel?.webview.postMessage({type:"updateElemValue",elem_id:"gdbSvrPort",elem_value:this.debugCfg.nSvrPort}));break;case"openOcdTelnetPort":this.debugCfg.nTelnetPort=parseInt(t);break;case"openOcdTclPort":this.debugCfg.nTclPort=parseInt(t);break;case"openOcdCfgOption":this.debugCfg.strCfgOption=t;break;case"chkStartGDB":this.debugCfg.bStartGdb=t==="checked";break;case"gdbCmdSession":this.debugCfg.strCmdSession=t;break;case"chkStartRemoteTarget":this.debugCfg.bStartRemoteTarget=t==="checked";break;case"gdbSvrHost":this.debugCfg.strSvrHost=t;break;case"gdbSvrPort":this.debugCfg.nSvrPort=parseInt(t);break}}handleInputElemChanged(e,t,i){if(e==="select_ProjectBuildType")switch(this.saveConfigSettings(),t){case De:this.curMode=t,this.loadProjectSettings_imp(),this._update();break;case Pe:this.curMode=t,this.loadProjectSettings_imp(),this._update();break}else switch(this.settingDetailIndex){case 0:if(e==="selectVendor")this.strSelectedVendor=t,this.strSelectedFamily="",this.strSelectedSubFamily="",this.strSelectedDeviceName="",this.nCoreSelectedindex_=-1,this.procCoreCfgs=[],this._update();else if(e==="selectFamily")this.strSelectedDeviceName="",this.strSelectedSubFamily="",this.strSelectedFamily=t,this.nCoreSelectedindex_=-1,this._update();else if(e==="selectSubFamily")this.strSelectedDeviceName="",this.strSelectedSubFamily=t,this.nCoreSelectedindex_=-1,this._update();else if(e==="selectTargetProcessor")this.strSelectedDeviceName=t,this.nCoreSelectedindex_=-1,this._update();else if(e==="selectTargetCore")i&&(this.nCoreSelectedindex_=i,this._update());else{let s=this.nCoreSelectedindex_;if(s>=0&&s<this.procCoreCfgs.length){let n=this.procCoreCfgs[s],a="core"+s+"_textOtherTargetFlags";a===e&&(n.strOtherTargetFlags=t),a="core"+s+"_strArch",e===a&&(n.strArch=t),a="core"+s+"_strAbi",e===a&&(n.strAbi=t),a="core"+s+"_chkbAbicalls",e===a&&(n.bAbicalls=t==="checked"),a="core"+s+"_chkMicromips",e===a&&(n.bMicromips=t==="checked"),a="core"+s+"_chkMCU",e===a&&(n.bMcu=t==="checked"),a="core"+s+"_chkMMT",e===a&&(n.bMt=t==="checked"),a="core"+s+"_chkEVA",e===a&&(n.bEva=t==="checked"),a="core"+s+"_chkVIRT",e===a&&(n.bVirt=t==="checked"),a="core"+s+"_strEndianness",e===a&&(n.strEndianess=t),a="core"+s+"_strFloatType",e===a&&(n.strFloatPointType=t),a="core"+s+"_strFloatABI",e===a&&(n.strFloatPointAbi=t),a="core"+s+"_strUnalignedAccess",e===a&&(n.strUnalignAcess=t),a="core"+s+"_strRuntimeLibrary",e===a&&(n.strRuntimeLibary=t)}}break;case 1:e==="selectToolChainName"&&t!==void 0?(this.curSelectedToolChainName=t,this._update()):e==="selectToolChainGroup"&&t!==void 0&&(this.curSelectedToolChainGroupName=t,this._update());break;case 2:this.handleInputElemChanged_BuildOutCfg_imp(e,t);break;case 3:this.handleInputElemChanged_CompilerCfg_imp(e,t);break;case 4:this.handleInputElemChanged_LinkerCfg_imp(e,t);break;case 5:this.handleInputElemChanged_DebugCfg_imp(e,t);break}}updateConfiglistItem_Validfy(e,t,i){let s=!1,n=i?parseInt(i):-1;switch(this.settingDetailIndex){case 0:{let a="core"+this.nCoreSelectedindex_+"_listMemoryMap";if(e===a){let r=this.procCoreCfgs[this.nCoreSelectedindex_];if(r){let l=r;if(l.memoryMap&&l.memoryMap.length>n){if(n===-1){let c=new Ce;c.startup=t[0]==="true",c.name=t[1],c.access=t[2],c.start=t[3],c.size=t[4],c.description=t[5],l.memoryMap.push(c)}else{let c=l.memoryMap[n];c.startup=t[0]==="true",c.name=t[1],c.access=t[2],c.start=t[3],c.size=t[4],c.description=t[5]}s=!0}}}}break;case 3:switch(e){case"asm_defineSymbols":this.asmCompilerCfg.definedSymbols.length>n&&t[0]&&(n===-1?this.asmCompilerCfg.definedSymbols.push(t[0]):this.asmCompilerCfg.definedSymbols[n]=t[0],s=!0);break;case"asm_UndefineSymbols":this.asmCompilerCfg.undefinedSymbols.length>n&&t[0]&&(n===-1?this.asmCompilerCfg.undefinedSymbols.push(t[0]):this.asmCompilerCfg.undefinedSymbols[n]=t[0],s=!0);break;case"asm_IncludePaths":{let a=t[0];if(Ct.existsSync(a)){let r=I.getInstance().getCurrentSolutionPath();r&&(a=Ze.default.relative(r,a))}a=a.replaceAll("\\","/"),this.projAsmIncPathList.length>n&&a&&(n===-1?this.projAsmIncPathList.push(a):this.projAsmIncPathList[n]=a,s=!0)}break;case"asm_IncludeFiles":{let a=t[0];this.asmCompilerCfg.includeFiles.length>n&&a&&(a=a.replaceAll("\\","/"),n===-1?this.asmCompilerCfg.includeFiles.push(a):this.asmCompilerCfg.includeFiles[n]=a,s=!0)}break;case"cpp_defineSymbols":this.cCompilerCfg.definedSymbols.length>n&&t[0]&&(n===-1?this.cCompilerCfg.definedSymbols.push(t[0]):this.cCompilerCfg.definedSymbols[n]=t[0],s=!0);break;case"cpp_UndefineSymbols":this.cCompilerCfg.undefinedSymbols.length>n&&t[0]&&(n===-1?this.cCompilerCfg.undefinedSymbols.push(t[0]):this.cCompilerCfg.undefinedSymbols[n]=t[0],s=!0);break;case"cpp_IncludePaths":{let a=t[0];if(Ct.existsSync(a)){let r=I.getInstance().getCurrentSolutionPath();r&&(a=Ze.default.relative(r,a))}a=a.replaceAll("\\","/"),this.projCppIncPathList.length>n&&a&&(n===-1?this.projCppIncPathList.push(a):this.projCppIncPathList[n]=a,s=!0)}break;case"cpp_IncludeFiles":{let a=t[0];this.cCompilerCfg.includeFiles.length>n&&a&&(a=a.replaceAll("\\","/"),n===-1?this.cCompilerCfg.includeFiles.push(a):this.cCompilerCfg.includeFiles[n]=a,s=!0)}break}break;case 4:switch(e){case"linker_ScriptFiles":{let a=t[0];this.linerCfg.linkscirptFiles.length>n&&a&&(a=a.replaceAll("\\","/"),n===-1?this.linerCfg.linkscirptFiles.push(a):this.linerCfg.linkscirptFiles[n]=a,s=!0)}break;case"linker_Libraries":{let a=t[0];this.linerCfg.libFiles.length>n&&a&&(a=a.replaceAll("\\","/"),n===-1?this.linerCfg.libFiles.push(a):this.linerCfg.libFiles[n]=a,s=!0)}break;case"linker_LibSearchPaths":{let a=t[0];this.linerCfg.libPaths.length>n&&a&&(a=a.replaceAll("\\","/"),n===-1?this.linerCfg.libPaths.push(a):this.linerCfg.libPaths[n]=a,s=!0)}break;case"linker_OtherFlags":this.linerCfg.otherFlags.length>n&&t[0]&&(n===-1?this.linerCfg.otherFlags.push(t[0]):this.linerCfg.otherFlags[n]=t[0],s=!0);break;case"linker_OtherFiles":{let a=t[0];this.linerCfg.otherObjects.length>n&&a&&(a=a.replaceAll("\\","/"),n===-1?this.linerCfg.otherObjects.push(a):this.linerCfg.otherObjects[n]=a,s=!0)}break}break}return s}addConfigListItemValue(e,t){this.updateConfiglistItem_Validfy(e,t)&&(this.curAddNewitemListTitle="",this._update())}updateConfigListItemValue(e,t,i){this.updateConfiglistItem_Validfy(e,i,t)&&(this.currentListItemEditInfo.data_index="",this.currentListItemEditInfo.elem_title="",this._update())}loadProcessorAndProjectSettings(){if(I.getInstance().isHaveInit()){let e=I.getCurrentProjManager()?.getActiveMode();e&&(this.curMode=e),this.loadProjectSettings_imp()}}loadProjectSettings_imp(){let e=I.getCurrentProjManager();if(e){this.projectSettingItem.copy(e.getProjectSettingItem(this.curMode)),this.buildOutCfg.copy(this.projectSettingItem.buildOutCfg),this.linerCfg.copy(this.projectSettingItem.linkerCfg),this.asmCompilerCfg.copy(this.projectSettingItem.asmCompilerCfg),this.cCompilerCfg.copy(this.projectSettingItem.cCompilerCfg);let t=e.getIncPathList();this.projCppIncPathList=Array.from(this.cCompilerCfg.includePaths),this.projAsmIncPathList=Array.from(this.asmCompilerCfg.includePaths);for(let n of t)this.projCppIncPathList.includes(n)||this.projCppIncPathList.push(n),this.projAsmIncPathList.includes(n)||this.projAsmIncPathList.push(n);this.debugCfg=this.projectSettingItem.debugCfg,this.strSelectedFamily=this.projectSettingItem.strSelectedFamily,this.strSelectedVendor=this.projectSettingItem.strSelectedVendor,this.strSelectedSubFamily=this.projectSettingItem.strSelectedSubFamily,this.strSelectedDeviceName=this.projectSettingItem.strSelectedDeviceName,this.strDevPeripCfgFilePath=this.projectSettingItem.strDevPeripCfgFilePath,this.nCoreSelectedindex_=this.projectSettingItem.coreSelectIndex,this.procCoreCfgs=Array.from(this.projectSettingItem.procCoreCfgs);let s=this.projectSettingItem.curSelectedToolChainMixName.split(ke);s.length>=2&&(this.curSelectedToolChainGroupName=s[0],this.curSelectedToolChainName=s[1])}}saveConfigSettings(){let e=I.getCurrentProjManager();if(e){let t=e.getProjectSettingItem(this.curMode);if(t){let i=!1;(t.curSelectedToolChainMixName!==this.curSelectedToolChainGroupName+ke+this.curSelectedToolChainName||t.strSelectedVendor!==this.strSelectedVendor||t.strSelectedFamily!==this.strSelectedFamily||t.strSelectedSubFamily!==this.strSelectedSubFamily||t.strSelectedDeviceName!==this.strSelectedDeviceName||t.coreSelectIndex!==this.nCoreSelectedindex_||t.asmCompilerCfg.getAllOptionString()!==this.asmCompilerCfg.getAllOptionString()||t.cCompilerCfg.getAllOptionString()!==this.cCompilerCfg.getAllOptionString())&&(i=!0),t.buildOutCfg.copy(this.buildOutCfg),t.linkerCfg.copy(this.linerCfg),this.asmCompilerCfg.includePaths=Array.from(this.projAsmIncPathList),t.asmCompilerCfg.copy(this.asmCompilerCfg),this.cCompilerCfg.includePaths=Array.from(this.projCppIncPathList),t.cCompilerCfg.copy(this.cCompilerCfg),t.curSelectedToolChainMixName="",t.debugCfg.copy(this.debugCfg),this.debugCfg.strElfPathName||(t.debugCfg.strElfPathName=this.buildOutCfg.getOutputFilePathName(!0)),t.strSelectedVendor=this.strSelectedVendor.slice(0),t.strSelectedFamily=this.strSelectedFamily.slice(0),t.strSelectedSubFamily=this.strSelectedSubFamily.slice(0),t.strSelectedDeviceName=this.strSelectedDeviceName.slice(0),t.strDevPeripCfgFilePath=this.strDevPeripCfgFilePath.slice(0),t.coreSelectIndex=this.nCoreSelectedindex_,t.procCoreCfgs=Array.from(this.procCoreCfgs),t.curSelectedToolChainMixName=this.curSelectedToolChainGroupName+ke+this.curSelectedToolChainName,e.onProjectSettingsUpdated(i),I.getInstance().updateOnConfigSettingsChanged()}}}dispose(){this.saveConfigSettings(),this.mapToolChainExeInfo.clear(),this._panel?.dispose(),this._panel=void 0}_update(){if(this._panel){let e=this._panel.webview;this._panel.webview.html=this._getHtmlForWebview(e)}}checkToolChainExe(e,t){let i="";if(Ct.existsSync(e)){let s=Ct.readdirSync(e,{encoding:"utf-8",withFileTypes:!0});for(let n of s)if(n.isFile()){let a=n.name.toLowerCase(),r=To.platform();if(r==="win32"){if(a.lastIndexOf(t+".exe")!==-1){i=a;break}}else if(r==="linux"&&a.lastIndexOf(t)===a.length-3){i=a;break}}}return i}getToolChainExeVersionInChildProcess(e,t){if(this._panel){let i=this._panel.webview,s=this.checkToolChainExe(e,t),n=Ze.default.join(e,s),a=j.getInstance().GetOutputChannelInstance();if(s&&s.length&&Ct.existsSync(n)){let r='"'+n+'" --version',l=Ze.default.dirname(e);this.mapToolChainExeInfo.has(e)||this.mapToolChainExeInfo.set(e,new Map);let c=this.mapToolChainExeInfo.get(e);$o.exec(r,{cwd:l,encoding:"utf-8",timeout:0},function(d,u){if(d)a.error(`getToolChainExeVersionInChildProcess Error: 
`+d),i.postMessage({type:"ToolChainExeVersion",exeFlag:t,exeFileName:s,versionInfo:""});else{let h=u.indexOf(s);h===-1?h=0:h+=s.length+1;let p=u.indexOf(`
`);if(p){let f=u.substring(h,p),b=new ri;b.fileName=s,b.version=f,c?.set(t,b),i.postMessage({type:"ToolChainExeVersion",exeFlag:t,exeFileName:s,versionInfo:f})}}})}else a.warn(t+" File not Found.")}}checkProcessorTargetEqual(){let e=!1;return this.strSelectedVendor===this.projectSettingItem.strSelectedVendor&&this.strSelectedFamily===this.projectSettingItem.strSelectedFamily&&this.strSelectedSubFamily===this.projectSettingItem.strSelectedSubFamily&&this.strSelectedDeviceName===this.projectSettingItem.strSelectedDeviceName&&(e=!0),e}_updateProcessorTargetConfigContent(){let e=`<div class="settingsArea">
        <div class="settingContainer">
        <div>
        <details open="true" id="TargetDevice">
        <summary>Device</summary>
            <hr />
            <div class="class1">
                <label class="minilabel">Manufacturer:</label>
                <select class="normalinput" id='selectVendor'>`,t=j.getInstance().getAllDeviceVendors(),i=this.strSelectedVendor;for(let u=0;u<t.length;++u)t[u]===i?e+=`<option value="${t[u]}" selected>${t[u]}</option>`:e+=`<option value="${t[u]}">${t[u]}</option>`;t.length&&i===""&&(i=t[0]),this.strSelectedVendor=i,e+=` </select>
            </div>
            <div class="class1">
               <label class="minilabel">Device Family:</label>
               <select class="normalinput" id='selectFamily'>`;let s=j.getInstance().getAllProcessorFamilys(i),n=this.strSelectedFamily;for(let u=0;u<s.length;++u)s[u]===n?e+=`<option value="${s[u]}" selected>${s[u]}</option>`:e+=`<option value="${s[u]}">${s[u]}</option>`;s.length&&n===""&&(n=s[0]),this.strSelectedFamily=n,e+=` </select>
            </div>
            <div class="class1">
               <label class="minilabel">Device SubFamily:</label>
               <select class="normalinput" id='selectSubFamily'>`;let a=j.getInstance().getAllProcessorSubFamilys(n),r=this.strSelectedSubFamily;for(let u=0;u<a.length;++u)a[u]===r?e+=`<option value="${a[u]}" selected>${a[u]}</option>`:e+=`<option value="${a[u]}">${a[u]}</option>`;a.length&&r===""&&(r=a[0]),this.strSelectedSubFamily=r,e+=`</select>
               </div>
               <div class="class1">
               <label class="minilabel">Device:</label>
               <select class="normalinput" id='selectTargetProcessor'>`;let l=j.getInstance().getSupportedDeviceArr_DFP(i,n,r),c=-1;for(let u=0;u<l.length;++u){let h=l[u].deviceName;l[u].deviceName===this.strSelectedDeviceName?(e+=`<option value="${h}" selected>${h}</option>`,c=u):e+=`<option value="${h}" >${h}</option>`}let d=this.strDevPeripCfgFilePath;if(d.startsWith(Z)||d.startsWith(at)?e+=`</select>
            </div>  
            <div class="class1">
                <label class="minilabel">Peripheral config Path:</label>
                <input class="normalinput" id='PeripFile' value="${d}" readonly></input>
            </div>
        </details>
        </div>
        <div><details open="true">
                        <summary>Target </summary>
                        <hr />`:e+=`</select>
            </div>  
            <div class="class1">
                <label class="minilabel">Peripheral config Path:</label>
                <input class="normalinput" id='PeripFile' value="${d}" readonly></input>
                <button class="monaco-text-button" valueid="PeripFile" name="btnBrowseFile">Browse</button>
            </div>
        </details>
        </div>
        <div><details open="true">
                        <summary>Target </summary>
                        <hr />`,l.length&&c===-1&&(c=0),c!==-1){let u=l[c];if(u){this.strSelectedDeviceName=u.deviceName;let h=u.processors.length;e+=`<div class="class1">
                <label class="minilabel">Target Processor:</label>
                <select class="normalinput" id='selectTargetCore'>`;for(let F=0;F<h;++F){let E=u.processors[F].procName;this.nCoreSelectedindex_===F?e+=`<option value="${E}" selected>${E}</option>`:e+=`<option value="${E}" >${E}</option>`}if(h&&(this.nCoreSelectedindex_<0||this.nCoreSelectedindex_>h)&&(this.nCoreSelectedindex_=0),e+=`</select>
                </div>`,this.checkProcessorTargetEqual()&&this.projectSettingItem.procCoreCfgs.length&&(this.procCoreCfgs=Array.from(this.projectSettingItem.procCoreCfgs)),this.procCoreCfgs.length===0){for(let F of u.processors){let E=new it;E.copy(F),(n==="MIPS Warrior M-Class"||n==="MP32GM51xx Series")&&(E.bMcu=!0),this.procCoreCfgs.push(E)}if(u.memorys)for(let F of u.memorys)if(F.procName)for(let E of this.procCoreCfgs)E.procName===F.procName&&ci(E,F);else for(let E of this.procCoreCfgs)ci(E,F)}let p=this.nCoreSelectedindex_,f=this.procCoreCfgs[p];(n==="MIPS Warrior M-Class"||n==="MP32GM51xx Series")&&(f.bMcu=!0),e+=`<ul>
                            <li>Processor</li>
                            <div class="settingContent">
                                <div class="class1">
                                    <label class="minilabel" >Architecture(-march):</label>
                                    <input class="normalinput" id="core${p}_strArch" value="-march=${f.strArch}" readonly>
                                </div>
                                <div class="class1">
                                    <label class="minilabel" >Instruction set(-mabi):</label>
                                    <input class="normalinput" id="core${p}_strAbi" value="-mabi${f.strAbi}" readonly>
                                </div>
                                <div class="class1">
                                    <label class="minilabel"></label>
                                    <div class="class2">`;let b=f.bAbicalls?"checked":"";e+=` <div class="class3"><input type="checkbox" id="core${p}_chkbAbicalls" ${b} class="setting-value-checkbox"/><label
                                                                        for="core${p}_chkbAbicalls">Generate Code suitable for SVR4-style(-mabicalls)</label></div>`,b=f.bMicromips?"checked":"",e+=` <div class="class3"><input type="checkbox" id="core${p}_chkMicromips" ${b} class="setting-value-checkbox"/><label
                                                for="core${p}_chkMicromips">Micromips Code(-mmicromips)</label></div>`,b=f.bMcu?"checked":"",e+=`<div class="class3"><input type="checkbox" id="core${p}_chkMCU" ${b} class="setting-value-checkbox"/><label for="core${p}_chkMCU">mips MCU
                                                ASE(-mmcu)</label>
                                        </div>`,b=f.bMt?"checked":"",e+=`<div class="class3"><input type="checkbox" id="core${p}_chkMMT" ${b} class="setting-value-checkbox"/><label for="core${p}_chkMMT">use
                                                Multithreading instructions(-mmt)</label></div>`,b=f.bEva?"checked":"",e+=`<div class="class3"><input type="checkbox" id="core${p}_chkEVA" ${b} class="setting-value-checkbox"/><label for="core${p}_chkEVA">use
                                                Enhanced
                                                Virtual Addressing instructions(-meva)</label></div>`,b=f.bVirt?"checked":"",e+=`<div class="class3"><input type="checkbox" id="core${p}_chkVIRT" ${b} class="setting-value-checkbox"/><label for="core${p}_chkVIRT">use
                                                Virtualization (VZ) instructions(-mvirt)</label></div>
                                    </div>`,e+=` </div>
                                <div class="class1">
                                    <label class="minilabel">Endianness:</label>
                                    <input class="normalinput" id="core${p}_strEndianness" value="${f.strEndianess}" readonly/>
                                </div>
                                <div class="class1">
                                    <label class="minilabel">Digital Signal Processor (DSP) ASE:</label>
                                    <select class="normalinput" id="core${p}_strDsp">`;let v=["no-dsp","dsp","dspr2"],m=["No DSP(-mno-dsp)","Use revision 1(-mdsp)","Use revision 2(-mdspr2)"];for(let F=0;F<v.length;++F){let E=f.strDsp===v[F]?"selected":"";e+=` <option value="${v[F]}" ${E}>${m[F]}</option>`}e+=` </select>
                                </div>
                                <div class="class1">
                                    <label class="minilabel">Floating-point(FPU) Type:</label>
                                    <select class="normalinput" id="core${p}_strFloatType">`;let _=["Single-precision","Double-precision","No hard-FPU"],C=["single-float","double-float",""],P=_.length;for(let F=0;F<P;++F){let E=C[F];E===f.strFloatPointType?e+=` <option value="${E}" selected>${_[F]}</option>`:e+=` <option value="${E}">${_[F]}</option>`}e+=`</select>
                            </div>
                                <div class="class1">
                                    <label class="minilabel">Floating-point ABI:</label>
                                    <select class="normalinput" id="core${p}_strFloatABI">`;let D=["hard-float","soft-float","no-float"];for(let F of D)F===f.strFloatPointAbi?e+=` <option value="${F}" selected>${F}</option>`:e+=` <option value="${F}">${F}</option>`;e+=`</select>
                            </div>
                                <div class="class1">
                                    <label class="minilabel">Unaligned access:</label>
                                    <select class="normalinput" id="core${p}_strUnalignedAccess" />
                                    `;let N=["None","Unaligned access","No Unaligned access"],S=["None","Unaligned access(-munaligned-access)","No Unaligned access(-mno-unaligned-access)"];for(let F=0;F<N.length;++F){let E=f.strUnalignAcess===N[F]?"selected":"";e+=` <option value="${N[F]}" ${E}>${S[F]}</option>`}e+=`  </select>
                                </div>`;let g=f.strRuntimeLibary==="small"?"selected":"";e+=` <div class="class1">
                                    <label class="minilabel">Runtime Library:</label>
                                    <select class="normalinput" id="core${p}_strRuntimeLibrary">
                                        <option value="newlib" >Stand library</option>
                                        <option value="small" ${g}>Small library</option>
                                    </select>
                                </div>
                                <div class="class1">
                                    <label class="minilabel">Other target flags:</label>
                                    <textarea class="normalTextArea" id="core${p}_textOtherTargetFlags">${f.strOtherTargetFlags}</textarea>
                                </div>
                            </div>`,e+=`<li>Stack and Vector</li>
                            <div class="settingContent">
                                <div class="class1">
                                    <label class="minilabel">Main Stack Size:</label>
                                    <input class="normalinput"  id="core${p}_strMainStackSize" value="${f.strMainStackSize}"/>
                                </div>
                                <div class="class1">
                                    <label class="minilabel">Shadow Stack Size:</label>
                                    <input class="normalinput"  id="core${p}_strShadowStackSize" value="${f.strShadowStackSize}"/>
                                </div>
                                <div class="class1">
                                    <label class="minilabel">Except Vector Base:</label>
                                    <input class="normalinput"  id="core${p}_strExceptVecBase" value="${f.strExceptVecBase}"/>
                                </div>
                            </div>`,e+=`<li>Memory map</li>
                            <div class="setting-item-value">
                                <div class="setting-item-control" title="core${p}_listMemoryMap">
                                    <div role="list" class="setting-list-object-widget" tabindex="-1"
                                        data-focusable="true">
                                        <div class="setting-list-row-header">
                                            <div class="setting-list-object-Left">StartUp</div>
                                            <div class="setting-list-object-value">RegionName</div>
                                            <div class="setting-list-object-valueMin">Attribute</div>
                                            <div class="setting-list-object-value">StartAddress</div>
                                            <div class="setting-list-object-valueMin">Size</div>
                                            <div class="setting-list-object-valueMidLong">Description</div>
                                        </div>`;let x=!1;this.currentListItemEditInfo.elem_title===`core${p}_listMemoryMap`&&(x=!0);let k=f.memoryMap;if(k){let F=0,E=parseInt(this.currentListItemEditInfo.data_index);for(let L of k){if(x&&E===F){e+=`<div class="setting-list-row" data-index="${F}"  col-count="5" tabindex="-1" role="listitem">
                <div class="setting-list-object-Left">`;let $=`chk_core${p}_listMemoryMap_${F}`;L.startup?e+=`<input type="checkbox" id="${$}" checked><label for="${$}">startup</label>`:e+=`<input type="checkbox" id="${$}" ><label for="${$}">startup</label>`,e+=`</div>
                <div class="setting-list-object-value">
                    <div class="setting-list-object-edit-item"><input class="setting-list-object-input" value="${L.name}"></input></div>
                </div>
                <div class="setting-list-object-valueMin">
                    <div class="setting-list-object-edit-item"><input class="setting-list-object-input" value="${L.access}"></input></div>
                </div>
                <div class="setting-list-object-value">
                    <div class="setting-list-object-edit-item"><input class="setting-list-object-input" value="${L.start}"></input></div>
                </div>
                <div class="setting-list-object-valueMin">
                    <div class="setting-list-object-edit-item"><input class="setting-list-object-input" value="${L.size}"></input></div>
                </div>
                <div class="setting-list-object-valueMidLong">
                    <div class="setting-list-object-edit-item"><input class="setting-list-object-input" value="${L.description}"></input></div>
                </div>
                <div class="setting-list-row-editdiv">
                    <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                    <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                </div>
            </div>`}else e+=`<div class="setting-list-row" data-index="${F}" tabindex="-1" role="listitem">
                    <div class="setting-list-object-Left">`,L.startup&&(e+=`<a class="codicon codicon-circle-filled"
                            style="vertical-align: middle;"></a>`),e+=`</div>
                    <div class="setting-list-object-value">${L.name}
                    </div>
                    <div class="setting-list-object-valueMin">${L.access}
                    </div>
                    <div class="setting-list-object-value">${L.start}
                    </div>
                    <div class="setting-list-object-valueMin">${L.size}
                    </div>
                    <div class="setting-list-object-valueMidLong">${L.description}
                    </div>
                    <div class="monaco-action-bar">
                        <ul class="actions-container" role="toolbar">
                            <li class="action-item" role="presentation" title="Edit Item">
                            <a class="codicon codicon-edit" role="button"
                                    aria-label="Edit Item" tabindex="-1"
                                    data-focusable="true"></a>
                            </li>
                            <li class="action-item" role="presentation" title="Remove Item"><a
                                    class="codicon codicon-remove" role="button"
                                    aria-label="Remove Item" data-focusable="true"
                                    tabindex="-1"></a></li>
                        </ul>
                    </div>
                </div>`;++F}}if(this.curAddNewitemListTitle===`core${p}_listMemoryMap`){let F=`core${p}_listMemoryMap_NewItemChk`;e+=`<div class="setting-list-new-row">
                    <div class="setting-list-object-Left">
                        <input type="checkbox" id="${F}"><label for="${F}">startup</label>
                    </div>
                    <div class="setting-list-object-value">
                        <div class="setting-list-object-edit-item"><input class="setting-list-object-input" ></input></div>
                    </div>
                    <div class="setting-list-object-valueMin">
                        <div class="setting-list-object-edit-item"><input class="setting-list-object-input" ></input></div>
                    </div>
                    <div class="setting-list-object-value">
                        <div class="setting-list-object-edit-item"><input class="setting-list-object-input" ></input></div>
                    </div>
                    <div class="setting-list-object-valueMin">
                        <div class="setting-list-object-edit-item"><input class="setting-list-object-input" ></input></div>
                    </div>
                    <div class="setting-list-object-valueMidLong">
                        <div class="setting-list-object-edit-item"><input class="setting-list-object-input" ></input></div>
                    </div>
                    <div class="setting-list-row-editdiv">
                        <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                        <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                    </div>
                </div>`}else e+=`</div>
                            <div class="setting-list-new-row">
                                <a class="monaco-text-button setting-list-addButton" tabindex="-1"
                                    role="button" 
                                    data-focusable="true">Add Item</a>
                            </div>`;e+=`</div>
                    </ul>
                </details>
            </div>`}}return e+="</div></div>",e}_updateToolchainsConfigContent(){let e=`<div class="settingsArea">
        <div class="settingContainer">
        <div class="class1">
            <label class="smallLabel">ToolChain Name:</label>
            <select class="wideinput" id='selectToolChainGroup'>`,t=j.getInstance().getToolChainSettingsArr(),i=this.curSelectedToolChainGroupName,s="",n=new Array;if(t&&t.length)for(let l of t)n.includes(l.groupName)||n.push(l.groupName);let a=!1;for(let l of n)l===i?(e+=`<option value="${l}" selected>${l}</option>`,a=!0):e+=`<option value="${l}">${l}</option>`;if(a||(i=n[0]),this.curSelectedToolChainGroupName=i,e+=`  </select>
            </div>`,e+=` <div class="class1">
                <label class="smallLabel">Version</label>
                <select class="wideinput" id='selectToolChainName'>`,t&&t.length){let l=!1,c=new Array;for(let d of t)d.groupName===i&&(c.push(d),d.tool_name===this.curSelectedToolChainName?(s=d.tool_path,l=!0,e+=`<option value="${d.tool_name}" selected>${d.tool_name}</option>`):e+=`<option value="${d.tool_name}">${d.tool_name}</option>`);!l&&c.length&&(this.curSelectedToolChainName=c[0].tool_name,s=c[0].tool_path)}let r=new Array(ot.length);if(s&&s.length){let l;if(l=this.mapToolChainExeInfo.get(s),l){let c=0;for(let d of ot){if(l.has(d)){let u=l.get(d);u?.isValidInfo()?r[c]=u:this.getToolChainExeVersionInChildProcess(s,d)}++c}}else for(let c of ot)this.getToolChainExeVersionInChildProcess(s,c)}e+=`</select>
            </div>
            <div class="class1">
                <label class="smallLabel">Toolchain Path:</label>
                <div class="class2">
                    <div class="class3">
                        <input class="wideinput" id="toolchainPath" readonly value="${s}">
                        </input>
                    </div>
                    <div class="class3">
                        <label>To change,use "Settings"->"Extensions"->"MIPS Studio" Or</label>
                        <button class="monaco-text-button" id="btnEditToolChiansSetting">Edit ToolChains Settings</button>
                    </div>
                </div>
            </div>
            <div class="class1">
                <div class="class2">
                    <div class="class3">
                        <div role="list" class="setting-list-object-widget" tabindex="-1" data-focusable="true">
                            <div class="setting-list-row-header">
                                <div class="list_item_min">Tools</div>
                                <div class="list_item">Execubale</div>
                                <div class="list_item">Version</div>
                            </div>`;for(let l=0;l<ot.length;++l)e+=`<div class="setting-list-row" data-index="0" tabindex="-1" role="listitem">
                            <div class="list_item_min">
                                <label>${Er[l]}</label>
                            </div>
                            <div class="list_item" id="${ot[l]}Name">${r[l]?.fileName}
                            </div>
                            <div class="list_item_long" id="${ot[l]}Version">${r[l]?.version}
                            </div>
                        </div>`;return e+=`</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>`,e}_updateBuildOutConfigContent(){let e=this.buildOutCfg,t=e.bOutBinFile?"checked":"",i=e.bOUtHexFile?"checked":"",s=e.bOutDasmFile?"checked":"",n=e.bShowSizeInfo?"checked":"",a=e.bOutDasmFile?"":"disabled",r=e.objdumpCfg.bDisplaySource?"checked":"",l=e.objdumpCfg.bDisplayAllHeaders?"checked":"",c=e.objdumpCfg.bDemangel?"checked":"",d=e.objdumpCfg.bDisplayDebuginfo?"checked":"",u=e.objdumpCfg.bDisassemble?"checked":"",h=e.objdumpCfg.bDisplayFileHeaders?"checked":"",p=e.objdumpCfg.bDisplayLineNumbers?"checked":"",f=e.objdumpCfg.bDisplayRelocationInfo?"checked":"",b=e.objdumpCfg.bDisplaySymbols?"checked":"",v=e.objdumpCfg.bWideLines?"checked":"",m=`<div class="settingsArea">
        <div class="settingContainer">
            <div class="class1">
                <label class="smallLabel">Artifact Type:</label>
                <select class="wideinput" id="outType">`;return e.outType==="lib"?(m+=`<option value="elf">Exeutable</option>
                <option value="lib" selected>lib</option>`,e.outFileExt="a"):(m+=`<option value="elf" selected>Exeutable</option>
                <option value="lib">lib</option>`,e.outFileExt="elf"),m+=`</select>
            </div>
            <div class="class1">
                <label class="smallLabel">Artifact name:</label>
                <input class="wideinput" id="outFileName" value="${e.outName}">
                </input>
            </div>
            <div class="class1">
                <label class="smallLabel">Artifact extension:</label>
                <input class="wideinput" id="outFileExt"  value="${e.outFileExt}" readonly>
                </input>
            </div>
            <div class="class1">
                <label class="smallLabel">Output prefix:</label>
                <input class="wideinput" id="outNamePrefix" value="${e.outNamePrefix}">
                </input>
            </div>
            <div class="class1">
                <label class="smallLabel"></label>
                <div class="class2">
                    <div class="class2">
                        <div class="class3"><input type="checkbox" id="chkOutputBin" ${t}/>
                            <label for="chkOutputBin">Create flash image of binary file (-O binary)</label>
                        </div>
                        <div class="class3"><input type="checkbox" id="chkOutputHex" ${i}/>
                            <label for="chkOutputHex">Create flash image of intel hex file (-O ihex)</label>
                        </div>

                        <div class="class3"><input type="checkbox" id="chkOutpuSize" ${n}/>
                            <label for="chkOutpuSize">Show size infomation about built artifact</label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="class1">
                <label class="smallLabel">Build directory:</label>
                <div class="class2">
                    <div class="class3">
                        <input class="wideinput" id="outputPath" value="${e.outPath}" readonly>
                        <button class="monaco-text-button" id="btnBrowseOutPath">Browse</button>
                    </div>
                    <div class="class3">
                        <label>(Relative to current workspace Path.)</label>
                    </div>
                </div>  
            </div>
            <div class="class1">
                <div class="smallLabel">
                    <input type="checkbox" id="chkOutputDasm" ${s}/>
                    <label for="chkOutputDasm">Generate dassembley file (-S)</label>
                </div>
                <div class="class2">
                    <div class="class3">
                        <label class="smallLabel"></label>
                    </div>
                    <div class="class3">
                        <input type="checkbox" id="chkDisplaySource" data-group="chk_dasm" ${r} ${a}/>
                        <label for="chkDisplaySource">Display source(--source)</label>
                    </div>
                    <div class="class3">
                        <input type="checkbox" id="chkDisplayAllHeader" data-group="chk_dasm" ${l} ${a}/>
                        <label for="chkDispalyAllHeader">Display all headers(--all-headers | -x)</label>
                    </div>
                    <div class="class3">
                        <input type="checkbox" id="chkDemagle" data-group="chk_dasm" ${c} ${a}/>
                        <label for="chkDemagle">Demangle names(--demangle | -C)</label>
                    </div>
                    <div class="class3">
                        <input type="checkbox" id="chkDisplayDebug" data-group="chk_dasm" ${d} ${a}/>
                        <label for="chkDisplayDebug">Display debugging info(--debugging | -g)</label>
                    </div>
                    <div class="class3">
                        <input type="checkbox" id="chkDisassemble" data-group="chk_dasm" ${u} ${a}/>
                        <label for="chkDisassemble">Disassemble(--disassemble | -d)</label>
                    </div>
                    <div class="class3">
                        <input type="checkbox" id="chkDisplayFileHeader" data-group="chk_dasm" ${h} ${a}/>
                        <label for="chkDisplayFileHeader">Display file headers(--file-headers | -f)</label>
                    </div>
                    <div class="class3">
                        <input type="checkbox" id="chkDisplayLineNumber" data-group="chk_dasm" ${p} ${a}/>
                        <label for="chkDisplayLineNumber">Display line numbers(--line-numbers | -l)</label>
                    </div>
                    <div class="class3">
                        <input type="checkbox" id="chkDisplayRelocation" data-group="chk_dasm" ${f} ${a}/>
                        <label for="chkDisplayRelocation">Display relocation info(--reloc | -r)</label>
                    </div>
                    <div class="class3">
                        <input type="checkbox" id="chkDisplaySymbol" data-group="chk_dasm" ${b} ${a}/>
                        <label for="chkDisplaySymbol">Display symbols(--syms | -t)</label>
                    </div>
                    <div class="class3">
                        <input type="checkbox" id="chkWideLine" data-group="chk_dasm" ${v} ${a}/>
                        <label for="chkWideLine">Wide lines(--wide | -w)</label>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>`,m}_updateCompileConfigContent(){let e=this.asmCompilerCfg.bAlwaysPreproceAsm?"checked":"",t=this.asmCompilerCfg.bNoStdInc?"checked":"",i=this.asmCompilerCfg.bProper?"checked":"",s=this.compileAssemblyDetailOpen_?"open":"",n=this.compileCppDetailOpen_?"open":"",a=`<div class="settingsArea">
        <div class="settingContainer">
            <div>
                <details ${s} id="compileAsmDetail">
                    <summary>Assembly</summary>
                    <hr />
                    <ul>
                        <li>Preprocessor</li>
                        <div class="settingContent">
                            <div>
                                <input type="checkbox" id="chkAlwaysPreproceAsm" ${e}/>
                                <label for="chkAlwaysPreproceAsm">Aways use preprocessor (-x assembler-with-cpp)</label>
                            </div>
                            <div>
                                <input type="checkbox" id="chkAsmNostdinc" ${t}/>
                                <label for="chkAsmNostdinc">Do not search system directories (-nostdinc)</label>
                            </div>
                            <div>
                                <input type="checkbox" id="chkAsmPreprocessOnly" ${i} />
                                <label for="chkAsmPreprocessOnly">Preprocessonly(-E)</label>
                            </div>
                            <div class="setting-item-value">
                                <div class="setting-item-control" title="asm_defineSymbols">
                                    <div role="list" class="setting-list-widget" data-key="Assmebly.Defined" tabindex="-1"
                                        data-focusable="true" >
                                        <div class="setting-list-row-header">
                                            <div class="setting-list-value">Defined symbols (-D)</div>
                                        </div>`,r=this.currentListItemEditInfo.elem_title==="asm_defineSymbols",l=parseInt(this.currentListItemEditInfo.data_index),c=this.asmCompilerCfg.definedSymbols;for(let g=0;g<c.length;++g)a+=`<div class="setting-list-row" data-index="${g}" col-count="1" tabindex="-1" role="listitem">`,l===g&&r?a+=`<div class="setting-list-object-valueLong">
                                <div class="setting-list-object-edit-item">
                                    <input class="setting-list-object-input" value="${c[g]}"></input>
                                </div>
                            </div> 
                            <div class="setting-list-row-editdiv">
                                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                            </div>
                        </div>`:a+=`<div class="setting-list-value">${c[g]}</div>
                            <div class="setting-list-sibling"></div>
                            <div class="monaco-action-bar">
                                <ul class="actions-container" role="toolbar">
                                    <li class="action-item" role="presentation"
                                        title="Edit Item">
                                        <a class="codicon codicon-edit"
                                            role="button" aria-label="Edit Item"
                                            tabindex="-1" data-focusable="true">
                                        </a>
                                    </li>
                                    <li class="action-item" role="presentation"
                                        title="Remove Item">
                                        <a class="codicon codicon-remove"
                                            role="button" aria-label="Remove Item"
                                            data-focusable="true" tabindex="-1">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>`;this.curAddNewitemListTitle==="asm_defineSymbols"?a+=`<div class="setting-list-new-row" role="listitem">
                            <div class="setting-list-object-valueLong">
                                <div class='setting-list-object-edit-item'>
                                    <input class='setting-list-object-input' ></input>
                                </div>
                            </div>
                            <div class="setting-list-row-editdiv">
                                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                            </div>
                        </div>`:a+=`<div class="setting-list-new-row">
                            <a class="monaco-text-button setting-list-addButton" tabindex="-1"
                                role="button" data-focusable="true">Add Item</a>
                        </div>`,a+=`</div>
                </div>
            </div>
            <div class="setting-item-value">
                <div class="setting-item-control" title="asm_UndefineSymbols">
                    <div role="list" class="setting-list-widget" tabindex="-1"
                        data-focusable="true" >
                        <div class="setting-list-row-header">
                            <div class="setting-list-value">Undefined symbols (-U)</div>
                        </div>`;let d=this.asmCompilerCfg.undefinedSymbols;r=this.currentListItemEditInfo.elem_title==="asm_UndefineSymbols";for(let g=0;g<d.length;++g)a+=`<div class="setting-list-row" data-index="${g}"  col-count="1" tabindex="-1" role="listitem"> `,l===g&&r?a+=`<div class="setting-list-object-valueLong">
                                <div class="setting-list-object-edit-item">
                                    <input class="setting-list-object-input" value="${d[g]}"></input>
                                </div>
                            </div> 
                            <div class="setting-list-row-editdiv">
                                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                            </div>
                        </div>`:a+=`<div class="setting-list-value">${d[g]}</div>
                            <div class="setting-list-sibling"></div>
                            <div class="monaco-action-bar">
                                <ul class="actions-container" role="toolbar">
                                    <li class="action-item" role="presentation" title="Edit Item">
                                        <a class="codicon codicon-edit"
                                            role="button" aria-label="Edit Item"
                                            tabindex="-1" data-focusable="true">
                                        </a>
                                    </li>
                                    <li class="action-item" role="presentation"
                                        title="Remove Item">
                                        <a class="codicon codicon-remove" role="button"
                                            aria-label="Remove Item" data-focusable="true"
                                            tabindex="-1"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>`;this.curAddNewitemListTitle==="asm_UndefineSymbols"?a+=`<div class="setting-list-new-row">
                            <div class="setting-list-object-valueLong">
                                <div class='setting-list-object-edit-item'>
                                    <input class='setting-list-object-input' ></input>
                                </div>
                            </div>
                            <div class="setting-list-row-editdiv">
                                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                            </div>
                        </div>`:a+=`<div class="setting-list-new-row">
                            <a class="monaco-text-button setting-list-addButton" tabindex="-1"
                                role="button" 
                                data-focusable="true">Add Item</a>
                        </div>`,a+=`</div>
            </div>
        </div>
        <div class="setting-item-value">
            <div class="setting-item-control" title="asm_IncludePaths">
                <div role="list" class="setting-list-widget" tabindex="-1"
                    data-focusable="true" >
                    <div class="setting-list-row-header">
                        <div class="setting-list-value">Include paths (-I)</div>
                    </div>`;let u=this.projAsmIncPathList;r=this.currentListItemEditInfo.elem_title==="asm_IncludePaths";for(let g=0;g<u.length;++g)a+=`<div class="setting-list-row" data-index="${g}"  col-count="1" tabindex="-1" role="listitem">`,l===g&&r?a+=`<div class="setting-list-object-valueLong">
                                <div class="setting-list-object-edit-item">
                                    <input class="setting-list-object-input" value="${u[g]}" id="incPathAsm_${g}"></input>
                                    <button class="monaco-text-button"  name="btnBrowsePath" valueid="incPathAsm_${g}">Browse</button>
                                </div>
                            </div> <div class="setting-list-row-editdiv">
                                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                            </div>
                        </div>`:(a+=`<div class="setting-list-object-valueLong">${u[g]}</div>
                            <div class="setting-list-sibling"></div>
                            <div class="monaco-action-bar">
                                <ul class="actions-container" role="toolbar">`,g!==0&&(a+=` <li class="action-item" role="presentation"   title="Move Up">
                                        <a class="codicon codicon-arrow-up" role="button" aria-label="Move Up"
                                            tabindex="-1" data-focusable="true">
                                        </a>
                                    </li>`),g!==u.length-1&&(a+=`<li class="action-item" role="presentation"   title="Move Down">
                                        <a class="codicon codicon-arrow-down" role="button" aria-label="Move Down"
                                            tabindex="-1" data-focusable="true">
                                        </a>
                                    </li>`),a+=` <li class="action-item" role="presentation" title="Edit Item">
                                        <a class="codicon codicon-edit"
                                            role="button" aria-label="Edit Item"
                                            tabindex="-1" data-focusable="true">
                                        </a>
                                    </li>
                                    <li class="action-item" role="presentation"
                                        title="Remove Item">
                                        <a class="codicon codicon-remove" role="button"
                                            aria-label="Remove Item" data-focusable="true"
                                            tabindex="-1"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>`);this.curAddNewitemListTitle==="asm_IncludePaths"?a+=`<div class="setting-list-new-row">
            <div class="setting-list-object-valueLong">
                <div class='setting-list-object-edit-item'>
                    <input class='setting-list-object-input' id="incPathAsm_-1"></input>
                    <button class="monaco-text-button"  name="btnBrowsePath" valueid="incPathAsm_-1">Browse</button>
                </div>
            </div>
            <div class="setting-list-row-editdiv">
                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
            </div>
            </div>`:a+=`<div class="setting-list-new-row">
                        <a class="monaco-text-button setting-list-addButton" tabindex="-1"
                            role="button" 
                            data-focusable="true">Add Item</a>
                    </div>`,a+=`</div>
            </div>
        </div>
        <div class="setting-item-value">
            <div class="setting-item-control" title="asm_IncludeFiles">
                <div role="list" class="setting-list-widget" tabindex="-1"
                    data-focusable="true" >
                    <div class="setting-list-row-header">
                        <div class="setting-list-value">Include files (-include)</div>
                    </div>`;let h=this.asmCompilerCfg.includeFiles;r=this.currentListItemEditInfo.elem_title==="asm_IncludeFiles";for(let g=0;g<h.length;++g)a+=`<div class="setting-list-row" data-index="${g}"  col-count="1" tabindex="-1" role="listitem">`,l===g&&r?a+=`<div class="setting-list-object-valueLong">
                                <div class="setting-list-object-edit-item">
                                    <input class="setting-list-object-input" value="${h[g]}" id="incFileAsm_${g}"></input>
                                    <button class="monaco-text-button"  name="btnBrowseFile" valueid="incFileAsm_${g}">Browse</button>
                                </div>
                            </div> 
                            <div class="setting-list-row-editdiv">
                                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                            </div>
                        </div>`:a+=`<div class="setting-list-value">${h[g]}</div>
                            <div class="setting-list-sibling"></div>
                            <div class="monaco-action-bar">
                                <ul class="actions-container" role="toolbar">
                                    <li class="action-item" role="presentation"
                                        title="Edit Item"><a class="codicon codicon-edit"
                                            role="button" aria-label="Edit Item"
                                            tabindex="-1" data-focusable="true"></a></li>
                                    <li class="action-item" role="presentation"
                                        title="Remove Item">
                                        <a class="codicon codicon-remove" role="button"
                                            aria-label="Remove Item" data-focusable="true"
                                            tabindex="-1"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>`;this.curAddNewitemListTitle==="asm_IncludeFiles"?a+=`<div class="setting-list-new-row">
                            <div class="setting-list-object-valueLong">
                                <div class='setting-list-object-edit-item'>
                                    <input class='setting-list-object-input' id="incFileAsm_-1"></input>
                                    <button class="monaco-text-button"  name="btnBrowseFile" valueid="incFileAsm_-1">Browse</button>
                                </div>
                            </div>
                            <div class="setting-list-row-editdiv">
                                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                            </div>
                        </div>`:a+=`<div class="setting-list-new-row">
                            <a class="monaco-text-button setting-list-addButton" tabindex="-1"
                                role="button" 
                                data-focusable="true">Add Item</a>
                        </div> `,a+=`</div>
                </div>
            </div>
        </div>
        <li>Miscellaneous</li>
        <div class="settingContent">`;let p=this.asmCompilerCfg.bGenerateAsmlst?"checked":"";a+=`<div><input type="checkbox" id="chkAssemblerlist" ${p}/><label for="chkAssemblerlist">Generate
                    assembler listing (-Wa,-adhlns="$@.lst")
                </label>
            </div>`,p=this.asmCompilerCfg.bSaveTempFile?"checked":"",a+=`<div><input type="checkbox" id="chkSavetempfiles" ${p}/><label for="chkSavetempfiles">Save temporary
                    files
                    (--save-temps Use with caution!)</label>
            </div>`,p=this.asmCompilerCfg.bVerbose?"checked":"",a+=`<div><input type="checkbox" id="chkVerboase" ${p}/><label for="chkVerboase">Verobse (-v)</label>
            </div>`,a+=`<div class="class1"><label class="minilabel">Other assembler flags</label>
                <textarea class="normalTextArea" id="asmOtherFlag">${this.asmCompilerCfg.strOtherFlag}</textarea>
            </div>
        </div>
        <li>All Options</li>
        <div class="settingContent">`;let f=this.asmCompilerCfg.getAllOptionString();a+=`<textarea class="noLeftTextArea" id="allAsmOption" readonly>${f}</textarea>
        </div>
    </ul>
    </details>
    </div> `,t=this.cCompilerCfg.bNoStdInc?"checked":"",i=this.cCompilerCfg.bProper?"checked":"",a+=`<div>
        <details ${n} id="compileCppDetail">
            <summary>C/C++ Compiler</summary>
            <hr />
            <ul>
                <li>Preprocessor</li>
                <div class="settingContent">
                    <div><input type="checkbox" id="chkCppNostdinc" ${t}/><label for="chkCppNostdinc">Do not
                            search system directories (-nostdinc)</label>
                    </div>
                    <div><input type="checkbox" id="chkCppPreprocessOnly" ${i}/><label for="chkCppPreprocessOnly">Preprocess
                            only(-E)</label>
                    </div>
                    <div class="setting-item-value">
                        <div class="setting-item-control" title="cpp_defineSymbols">
                            <div role="list" class="setting-list-widget" tabindex="-1"
                                data-focusable="true">
                                <div class="setting-list-row-header">
                                    <div class="setting-list-value">Defined symbols (-D)</div>
                                </div>`,c=this.cCompilerCfg.definedSymbols,r=this.currentListItemEditInfo.elem_title==="cpp_defineSymbols";for(let g=0;g<c.length;++g)a+=`<div class="setting-list-row" data-index="${g}"  col-count="1" tabindex="-1" role="listitem">`,l===g&&r?a+=`<div class="setting-list-object-valueLong">
                                <div class="setting-list-object-edit-item">
                                    <input class="setting-list-object-input" value="${c[g]}"></input>
                                </div>
                            </div> 
                            <div class="setting-list-row-editdiv">
                                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                            </div>
                        </div>`:a+=`<div class="setting-list-value">${c[g]}</div>
                            <div class="setting-list-sibling"></div>
                            <div class="monaco-action-bar">
                                <ul class="actions-container" role="toolbar">
                                    <li class="action-item" role="presentation"
                                        title="Edit Item"><a class="codicon codicon-edit"
                                            role="button" aria-label="Edit Item"
                                            tabindex="-1" data-focusable="true"></a></li>
                                    <li class="action-item" role="presentation"
                                        title="Remove Item">
                                        <a class="codicon codicon-remove" role="button"
                                            aria-label="Remove Item" data-focusable="true"
                                            tabindex="-1"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>`;this.curAddNewitemListTitle==="cpp_defineSymbols"?a+=`<div class="setting-list-new-row">
                <div class="setting-list-object-valueLong">
                    <div class='setting-list-object-edit-item'>
                        <input class='setting-list-object-input' ></input>
                    </div>
                </div>
                <div class="setting-list-row-editdiv">
                    <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                    <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                </div>
            </div>`:a+=`<div class="setting-list-new-row">
                <a class="monaco-text-button setting-list-addButton" tabindex="-1"
                role="button" 
                data-focusable="true">Add Item</a>
             </div> `,a+=`</div>
            </div>
        </div>
        <div class="setting-item-value">
            <div class="setting-item-control" title="cpp_UndefineSymbols">
                <div role="list" class="setting-list-widget" tabindex="-1"
                    data-focusable="true">
                    <div class="setting-list-row-header">
                        <div class="setting-list-value">Undefined symbols (-U)</div>
                    </div> `,d=this.cCompilerCfg.undefinedSymbols,r=this.currentListItemEditInfo.elem_title==="cpp_UndefineSymbols";for(let g=0;g<d.length;++g)a+=`<div class="setting-list-row" data-index="${g}"  col-count="1" tabindex="-1" role="listitem">`,l===g&&r?a+=`<div class="setting-list-object-valueLong">
                                <div class="setting-list-object-edit-item">
                                    <input class="setting-list-object-input" value="${d[g]}"></input>
                                </div>
                            </div> 
                            <div class="setting-list-row-editdiv">
                                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                            </div>
                        </div>`:a+=`<div class="setting-list-value">${d[g]}</div>
                            <div class="setting-list-sibling"></div>
                            <div class="monaco-action-bar">
                                <ul class="actions-container" role="toolbar">
                                    <li class="action-item" role="presentation"
                                        title="Edit Item"><a class="codicon codicon-edit"
                                            role="button" aria-label="Edit Item"
                                            tabindex="-1" data-focusable="true"></a></li>
                                    <li class="action-item" role="presentation"
                                        title="Remove Item">
                                        <a class="codicon codicon-remove" role="button"
                                            aria-label="Remove Item" data-focusable="true"
                                            tabindex="-1"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>`;this.curAddNewitemListTitle==="cpp_UndefineSymbols"?a+=`<div class="setting-list-new-row">
                <div class="setting-list-object-valueLong">
                    <div class='setting-list-object-edit-item'>
                        <input class='setting-list-object-input' ></input>
                    </div>
                </div>
                <div class="setting-list-row-editdiv">
                    <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                    <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                </div>
            </div>`:a+=`<div class="setting-list-new-row">
                <a class="monaco-text-button setting-list-addButton" tabindex="-1"
                role="button" data-focusable="true">Add Item</a>
            </div> `,a+=`</div>
            </div>
        </div>
        <li>Includes</li>
        <div class="settingContent">
            <div class="setting-item-value" >
                <div class="setting-item-control" title="cpp_IncludePaths">
                    <div role="list" class="setting-list-widget" tabindex="-1"
                        data-focusable="true">
                        <div class="setting-list-row-header">
                            <div class="setting-list-value">Include paths (-I)</div>
                        </div>`,u=this.projCppIncPathList,r=this.currentListItemEditInfo.elem_title==="cpp_IncludePaths";for(let g=0;g<u.length;++g)a+=`<div class="setting-list-row" data-index="${g}"  col-count="1" tabindex="-1" role="listitem">`,l===g&&r?a+=`<div class="setting-list-object-valueLong">
                                <div class="setting-list-object-edit-item">
                                    <input class="setting-list-object-input" value="${u[g]}" id="incPathCpp_${g}"></input>
                                    <button class="monaco-text-button"  name="btnBrowsePath" valueid="incPathCpp_${g}">Browse</button>
                                </div>
                            </div> 
                            <div class="setting-list-row-editdiv">
                                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                            </div>
                        </div>`:(a+=`<div class="setting-list-object-valueLong">${u[g]}</div>
                            <div class="setting-list-sibling"></div>
                            <div class="monaco-action-bar">
                                <ul class="actions-container" role="toolbar">`,g!==0&&(a+=` <li class="action-item" role="presentation"   title="Move Up">
                        <a class="codicon codicon-arrow-up" role="button" aria-label="Move Up"
                            tabindex="-1" data-focusable="true">
                        </a>
                    </li>`),g!==u.length-1&&(a+=`<li class="action-item" role="presentation"   title="Move Down">
                        <a class="codicon codicon-arrow-down" role="button" aria-label="Move Down"
                            tabindex="-1" data-focusable="true">
                        </a>
                    </li>`),a+=`<li class="action-item" role="presentation"
                                        title="Edit Item"><a class="codicon codicon-edit"
                                            role="button" aria-label="Edit Item"
                                            tabindex="-1" data-focusable="true"></a></li>
                                    <li class="action-item" role="presentation"
                                        title="Remove Item">
                                        <a class="codicon codicon-remove" role="button"
                                            aria-label="Remove Item" data-focusable="true"
                                            tabindex="-1"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>`);this.curAddNewitemListTitle==="cpp_IncludePaths"?a+=`<div class="setting-list-new-row">
                <div class="setting-list-object-valueLong">
                    <div class='setting-list-object-edit-item'>
                        <input class="setting-list-object-input" id="incPathCpp_-1"></input>
                        <button class="monaco-text-button"  name="btnBrowsePath" valueid="incPathCpp_-1">Browse</button>
                    </div>
                </div>
                <div class="setting-list-row-editdiv">
                    <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                    <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                </div>
            </div>`:a+=`<div class="setting-list-new-row">
                <a class="monaco-text-button setting-list-addButton" tabindex="-1"
                role="button" data-focusable="true">Add Item</a>
            </div> `,a+=`</div>
            </div>
        </div>
        <div class="setting-item-value">
            <div class="setting-item-control" title="cpp_IncludeFiles">
                <div role="list" class="setting-list-widget" tabindex="-1"
                    data-focusable="true">
                    <div class="setting-list-row-header">
                        <div class="setting-list-value">Include files (-include)</div>
                    </div>`,h=this.cCompilerCfg.includeFiles,r=this.currentListItemEditInfo.elem_title==="cpp_IncludeFiles";for(let g=0;g<h.length;++g)a+=`<div class="setting-list-row" data-index="${g}"  col-count="1" tabindex="-1" role="listitem">`,l===g&&r?a+=`<div class="setting-list-object-valueLong">
                                <div class="setting-list-object-edit-item">
                                    <input class="setting-list-object-input" value="${h[g]}" id="incFileCpp_${g}"></input>
                                    <button class="monaco-text-button"  name="btnBrowseFile" valueid="incFileCpp_${g}">Browse</button>
                                </div>
                            </div> 
                            <div class="setting-list-row-editdiv">
                                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                            </div>
                        </div>`:a+=`<div class="setting-list-value">${h[g]}</div>
                            <div class="setting-list-sibling"></div>
                            <div class="monaco-action-bar">
                                <ul class="actions-container" role="toolbar">
                                    <li class="action-item" role="presentation"
                                        title="Edit Item"><a class="codicon codicon-edit"
                                            role="button" aria-label="Edit Item"
                                            tabindex="-1" data-focusable="true"></a></li>
                                    <li class="action-item" role="presentation"
                                        title="Remove Item">
                                        <a class="codicon codicon-remove" role="button"
                                            aria-label="Remove Item" data-focusable="true"
                                            tabindex="-1"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>`;this.curAddNewitemListTitle==="cpp_IncludeFiles"?a+=`<div class="setting-list-new-row">
                <div class="setting-list-object-valueLong">
                    <div class='setting-list-object-edit-item'>
                        <input class='setting-list-object-input' id="incFileCpp_-1"></input>
                        <button class="monaco-text-button"  name="btnBrowseFile" valueid="incFileCpp_-1">Browse</button>
                    </div>
                </div>
                <div class="setting-list-row-editdiv">
                    <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                    <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                </div>
            </div>`:a+=`<div class="setting-list-new-row">
                <a class="monaco-text-button setting-list-addButton" tabindex="-1"
                role="button" data-focusable="true">Add Item</a>
            </div> `,a+=`</div>
                    </div>
                </div>
                <li>Optimization</li>
                <div class="settingContent">
                    <div class="class1"><label class="minilabel">Language Standard:</label>
                        <select class="normalinput" id="select_cStd">`;let b=["c17","c11","c99","c90","gnu17","gnu11","gnu99","gnu90"],v=["ISO_C17(-std=c17)","ISO_C11(-std=c11)","ISO_C99(-std=c99)","ISO_C90/ANSI C89(-std=c90)","GNU_C17(-std=gnu17)","GUN_C11(-std=gnu11)","GNC_C99(-std=gnu99)","GNC_C90(-std=gnu90)"];for(let g=0;g<b.length;++g)a+=`<option value="${b[g]}" `,this.cCompilerCfg.cStd===b[g]&&(a+="selected"),a+=`>${v[g]}</option>`;a+=`</select>
                    </div>
                    <div class="class1"><label class="minilabel">Optimization Level:</label>
                        <select class="normalinput" id="select_cOplevel">`;let m=["O0","Og","O1","O2","O3","Os","Ofast"],_=["default,None Optimization(-O0)","Optimize debugging experience(-Og)","Optimize(-O1)","Optimize even more(-O2)","Optimize yet more(-O3)","Optimize for size(-Os)","Optimize fast(-Ofast)"];for(let g=0;g<m.length;++g)a+=`<option value="${m[g]}" `,this.cCompilerCfg.opLevel===m[g]&&(a+="selected"),a+=`>${_[g]}</option>`;a+=`</select>
                        </div>
                    <div class="class1">
                        <label class="minilabel"></label>
                        <div class="class2">`,p=this.cCompilerCfg.bFunctionSsection?"checked":"",a+=`<div class="class3"><input type="checkbox" id="chkfunction-sections" ${p}/><label
                                    for="chkfunction-sections">Place function in their own section
                                    (-ffuction-sections)</label>
                            </div>`,p=this.cCompilerCfg.bDataSection?"checked":"",a+=`<div class="class3"><input type="checkbox" id="chkdata-section" ${p}/><label
                                    for="chkdata-section">Place data in their own section
                                    (-fdata-section)</label>
                            </div>`,p=this.cCompilerCfg.bNoException?"checked":"",a+=`<div class="class3"><input type="checkbox" id="chkno-exception" ${p}/><label
                                    for="chkno-exception">Not use exceptions (-fno-exceptions)</label></div>`,p=this.cCompilerCfg.bSignedChar?"checked":"",a+=`<div class="class3"><input type="checkbox" id="chkCharisSigned" ${p}/><label
                                     for="chkCharisSigned">Char is signed (-fsigned-char)</label></div>`,p=this.cCompilerCfg.bNoBuildIn?"checked":"",a+=`<div class="class3"><input type="checkbox" id="chkno-buildin" ${p}/><label
                                    for="chkno-buildin">Don't recognize build-in functions (-fno-buildin)</label></div>`,p=this.cCompilerCfg.bFreestanding?"checked":"",a+=`<div class="class3"><input type="checkbox" id="chkfreestanding" ${p}/><label
                                    for="chkfreestanding">Target a freestanding environment (-ffreestanding)</label></div>`,p=this.cCompilerCfg.bLinkTimeOp?"checked":"",a+=`<div class="class3"><input type="checkbox" id="chkLinkTimeOp" ${p}/><label
                                    for="chkLinkTimeOp">Link-time optimize (-flto)</label></div>`,p=this.cCompilerCfg.bNoRTTI?"checked":"",a+=`<div class="class3"><input type="checkbox" id="chkno-rtti" ${p}/><label
                                    for="chkno-rtti">Not use RTTI(-fno-rtti)</label></div>`,p=this.cCompilerCfg.bNoCxa_atexit?"checked":"",a+=`<div class="class3"><input type="checkbox" id="chkcxa_atexit" ${p}/><label
                                    for="chkcxa_atexit">Not use _cxa_atexit(-fno-use-cxa-atexit)</label></div>`,p=this.cCompilerCfg.bNoThreadsafe?"checked":"",a+=`<div class="class3"><input type="checkbox" id="chkthread-safe" ${p}/><label
                                    for="chkthread-safe">Not use thread-safe statics
                                    (-fno-threadsafe-statics)</label>
                            </div>
                        </div>
                    </div>
                    <div class="class1"><label class="minilabel">Other optimization flags:</label>
                        <textarea class="normalTextArea" id="otherOpFlag">${this.cCompilerCfg.strOtherOpFlag}</textarea>
                    </div>
                </div>
                <li>Debug</li>
                <div class="settingContent">
                    <div class="class1"><label class="minilabel">Debug Level:</label>
                        <select class="normalinput" id="select_cDebuglevel">`;let C=["g","g1","g3","g0"],P=["Request debugging information(-g,-g2)","minimal debug information(-g1)","includes extra info,such as Macro exp(-g3)"," no debug information(-g0)"];for(let g=0;g<C.length;++g)a+=`<option value="${C[g]}" `,this.cCompilerCfg.debugLevel===C[g]&&(a+="selected"),a+=`>${P[g]}</option>`;a+=`</select>
                    </div>
                    <div class="class1"><label class="minilabel">Debug Format:</label>
                    <select class="normalinput" id="select_cDebugFormat">`;let D=["gdb","stabs","stabs+"],N=["GDB (-ggdb)","Stabs (-gstabs)","Stabs+ (-gstabs+)"];for(let g=0;g<N.length;++g)a+=`<option value="${D[g]}" `,this.cCompilerCfg.debugFormat===D[g]&&(a+="selected"),a+=`>${N[g]}</option>`;a+=`</select>
                </div>
                <div class="class1"><label class="minilabel"></label>
                <div class="class2">`,p=this.cCompilerCfg.bProinfo?"checked":"",a+=`<div class="class3">
                        <input type="checkbox" id="chkProInfo" ${p}/>
                        <label for="chkProInfo">Generate pro Information(-p)</label>
                    </div>`,p=this.cCompilerCfg.bGProInfo?"checked":"",a+=`<div class="class3">
                        <input type="checkbox" id="chkGProInfo" ${p}/>
                        <label for="chkGProInfo">Generate gpro Information(-pg)</label>
                    </div>`,a+=`</div>
                </div>
                <li>Warning</li>
                <div class="settingContent">`,p=this.cCompilerCfg.warnCfg.bEnableWarning?"checked":"",a+=`<div><input type="checkbox" id="chkWall" ${p}/><label for="chkWall"> Enable all warnings (-Wall)
                        </label>
                    </div>`,p=this.cCompilerCfg.warnCfg.bEnableExtraWarning?"checked":"",a+=`<div><input type="checkbox" id="chkwextra" ${p}/><label for="chkwextra"> Enable extra Warning
                            flags(-Wextra)</label>
                    </div>`,p=this.cCompilerCfg.warnCfg.bTreatWarningAsErr?"checked":"",a+=`<div><input type="checkbox" id="chkwerror" ${p}/><label for="chkwerror"> Treat warnings as errors
                            (-Werror)</label>
                    </div>`,p=this.cCompilerCfg.warnCfg.bAsFatalErr?"checked":"",a+=`<div><input type="checkbox" id="chkfatal-error" ${p}/><label for="chkfatal-error"> Abort compilation
                            on first error (-Wfatal-error)</label>
                    </div>`,p=this.cCompilerCfg.warnCfg.bPedantic?"checked":"",a+=`<div><input type="checkbox" id="chkpedantic" ${p}/><label for="chkpedantic">
                            Issue all warnings demanded by strict ISO C/C++ (-pedantic)
                        </label>
                    </div>`,p=this.cCompilerCfg.warnCfg.bPedanticError?"checked":"",a+=`<div><input type="checkbox" id="chkpedantic-errors" ${p}/><label for="chkpedantic-errors">
                            Generate error instead of warnings from strict ISO C/C++ (-pedantic-error)
                        </label>
                    </div>`,p=this.cCompilerCfg.warnCfg.bWarnMissIncDir?"checked":"",a+=`<div><input type="checkbox" id="chkmissingIncDir" ${p}/><label for="chkmissingIncDir">
                            Warn if a user-supplied include directory dose not exist
                            (-Wmissing-include-dirs)
                        </label>
                    </div>`,p=this.cCompilerCfg.warnCfg.bWarnSwitchDefault?"checked":"",a+=`<div><input type="checkbox" id="chkswitch-default" ${p}/><label for="chkswitch-default">
                            Warn when a switch statement dose not have a default case (-Wswitch-default)
                        </label>
                    </div>`,p=this.cCompilerCfg.warnCfg.bWarnSwitchEnum?"checked":"",a+=`<div><input type="checkbox" id="chkWswitchEnum" ${p}/><label for="chkWswitchEnum">
                            Warn if switch is used on an enum type and the switch statement case lacks for
                            some enumer (-Wswitch-enum)
                        </label>
                    </div>`,p=this.cCompilerCfg.warnCfg.bWconversion?"checked":"",a+=`<div><input type="checkbox" id="chkconversion" ${p}/><label for="chkconversion">
                            Warn for implicit conversions (-Wconversion)
                        </label>
                    </div>`,p=this.cCompilerCfg.warnCfg.bWMissingPrototypes?"checked":"",a+=`<div><input type="checkbox" id="chkmissing-prototypes" ${p}/><label
                            for="chkmissing-prototypes">
                            Warn if a global function has no prototype (-Wmissing-prototypes)
                        </label>
                    </div>`,p=this.cCompilerCfg.warnCfg.bWStrictPrototypes?"checked":"",a+=`<div><input type="checkbox" id="chkstrict-prototypes" ${p}/><label for="chkstrict-prototypes">
                            Warn if a function has no arg type (-Wstrict-prototypes)
                        </label>
                    </div>`,p=this.cCompilerCfg.warnCfg.bWBadCast?"checked":"",a+=`<div><input type="checkbox" id="chkbad-function-cast" ${p}/><label for="chkbad-function-cast">
                            Warn if wrong cast (-Wbad-function-cast)
                        </label>
                    </div>
                    <div class="class1"><label class="minilabel">Other warning flags</label>
                        <textarea class="normalTextArea" id="otherWarnFlag">${this.cCompilerCfg.warnCfg.strOtherWarnFlag}</textarea>
                    </div>
                </div>
                <li>Miscellaneous</li>
                <div class="settingContent">`,p=this.cCompilerCfg.bPic?"checked":"",a+=`<div><input type="checkbox" id="chkPIC" ${p}/>
                    <label for="chkPIC"> Position Independent Code (-fPIC)</label>
                    </div>`,p=this.cCompilerCfg.bStackUsage?"checked":"",a+=`<div><input type="checkbox" id="chkStack-usage" ${p}/>
                    <label for="chkStack-usage"> Enable statc usage analysis (-fstatck-usage)</label>
                    </div>`,p=this.cCompilerCfg.bCyclomaticComplexity?"checked":"",a+=`<div><input type="checkbox" id="chkCyclomatic" ${p}/>
                    <label for="chkCyclomatic"> Cyclomatic Complexity (-fcyclomatic-complexity)</label>
                    </div>`,p=this.cCompilerCfg.bGenerateAsmlst?"checked":"",a+=`<div><input type="checkbox" id="chkCppAssemblerlist" ${p}/>
                        <label for="chkCppAssemblerlist">Generate assembler listing (-Wa,-adhlns="$@.lst")
                        </label>
                    </div>`,p=this.cCompilerCfg.bSaveTempFile?"checked":"",a+=`<div><input type="checkbox" id="chkCppSavetempfiles" ${p}/>
                        <label for="chkCppSavetempfiles">Save temporary files (--save-temps Use with caution!)
                        </label>
                    </div>`,p=this.cCompilerCfg.bVerbose?"checked":"",a+=`<div><input type="checkbox" id="chkCppVerboase" ${p}/>
                        <label for="chkCppVerboase"> Verobse (-v)</label>
                    </div>`,a+=`</div>
                <li>All Options</li>
                <div class="settingContent">`;let S=this.cCompilerCfg.getAllOptionString();return a+=`<textarea class="noLeftTextArea" id="allCppOption" readonly>${S}</textarea>
                </div>
            </ul>
            </details>
        </div>
    </div>`,a}_updateLinkerConfigContent(){let e=`<div class="settingsArea">
        <div class="settingContainer">
            <div>
                <ul>
                    <li>General</li>
                    <div class="settingContent">
                        <div class="setting-item-value">
                            <div class="setting-item-control" title="linker_ScriptFiles">
                                <div role="list" class="setting-list-widget" tabindex="-1" data-focusable="true">
                                    <div class="setting-list-row-header">
                                        <div class="setting-list-value">Linker script file (-T)</div>
                                    </div>`,t=this.currentListItemEditInfo.elem_title==="linker_ScriptFiles",i=parseInt(this.currentListItemEditInfo.data_index),s=this.linerCfg.linkscirptFiles;for(let h=0;h<s.length;++h)e+=`<div class="setting-list-row" data-index="${h}" col-count="1" tabindex="-1" role="listitem">`,i===h&&t?e+=`<div class="setting-list-object-valueLong">
                                <div class="setting-list-object-edit-item">
                                    <input class="setting-list-object-input" id="ldFile_${h}" value="${s[h]}"></input>
                                    <button class="monaco-text-button" valueid="ldFile_${h}" name="btnBrowseFile">Browse</button>
                                </div>
                            </div> 
                            <div class="setting-list-row-editdiv">
                                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                            </div>
                        </div>`:e+=`<div class="setting-list-value">${s[h]}</div>
                            <div class="setting-list-sibling"></div>
                            <div class="monaco-action-bar">
                                <ul class="actions-container" role="toolbar">
                                    <li class="action-item" role="presentation"
                                        title="Edit Item">
                                        <a class="codicon codicon-edit"
                                            role="button" aria-label="Edit Item"
                                            tabindex="-1" data-focusable="true">
                                        </a>
                                    </li>
                                    <li class="action-item" role="presentation"
                                        title="Remove Item">
                                        <a class="codicon codicon-remove"
                                            role="button" aria-label="Remove Item"
                                            data-focusable="true" tabindex="-1">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>`;this.curAddNewitemListTitle==="linker_ScriptFiles"?e+=`<div class="setting-list-new-row">
                            <div class="setting-list-object-valueLong">
                                <div class='setting-list-object-edit-item'>
                                    <input class="setting-list-object-input" id="ldFile_New" ></input>
                                    <button class="monaco-text-button" valueid="ldFile_New" name="btnBrowseFile">Browse</button>
                                </div>
                            </div>
                            <div class="setting-list-row-editdiv">
                                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                            </div>
                        </div>`:e+=`<div class="setting-list-new-row">
                            <a class="monaco-text-button setting-list-addButton" tabindex="-1"
                                role="button" data-focusable="true">Add Item</a>
                        </div>`,e+=`</div>
            </div>
        </div>
        <div class="classNoMargin"><label class="minilabel">System call:</label>
            <select class="normalinput" id="selectSysCall">`;let n=this.linerCfg.syscall==="msys"?"":"selected";e+=`<option value="msys">Minimal implementation (-specs=msys.specs)</option>
                <option value="no" ${n}>Do not use system calls from library</option>
            </select>
        </div>
        <div style="margin-bottom: 12px;margin-top: 8px;">`;let a=this.linerCfg.bGenerateMapFile?"checked":"";e+=`<div><input type="checkbox" id="chkMap" ${a}/><label for="chkMap" > Generate map file (-Wl,-Map=)
                                </label>
                            </div>`,a=this.linerCfg.bCref?"checked":"",e+=`<div><input type="checkbox" id="chkCref" ${a}/>
                        <label for="chkCref" > Add symbol cross reference
                                    table to map file (-Wl,--cref)
                        </label>
                    </div>`,a=this.linerCfg.bDiscardUnusedSection?"checked":"",e+=`<div><input type="checkbox" id="chkGc-sections" ${a} /><label for="chkGc-sections"> Discard
                                    unused sections (-Wl,--gc-sections)
                                </label>
                            </div>`,a=this.linerCfg.bPrtUnusedSection?"checked":"",e+=`<div><input type="checkbox" id="chkPrint-gc-sections" ${a} />
                        <label for="chkPrint-gc-sections">
                                    Print unused sections (-Wl,print--gc-sections)
                        </label>
                    </div>`,a=this.linerCfg.bVerbose?"checked":"",e+=`<div><input type="checkbox" id="chkVerbose" ${a} />
                            <label for="chkVerbose"> Verbose (-Wl,--verbose)
                            </label>
                        </div>`,a=this.linerCfg.bNoStdStartFiles?"checked":"",e+=`<div><input type="checkbox" id="chkNostartfiles" ${a} />
                        <label for="chkNostartfiles"> Do not use standard start files (-nostartfiles)
                        </label>
                    </div>`,a=this.linerCfg.bNoDefaultLibs?"checked":"",e+=`<div><input type="checkbox" id="chkNodefaultlibs" ${a} />
                            <label for="chkNodefaultlibs">
                            Do not use default libs (-nodefaultlibs)
                            </label>
                        </div>`,a=this.linerCfg.bNoStdlib?"checked":"",e+=`<div><input type="checkbox" id="chkNostdlib" ${a} />
                        <label for="chkNostdlib"> No startup or default libs (-nostdlib)
                        </label>
                    </div>`,a=this.linerCfg.bOmitSymbolInfo?"checked":"",e+=`<div><input type="checkbox" id="chkRemoveAllInformation" ${a} />
                        <label for="chkRemoveAllInformation"> Omit all symbol information (-s)
                        </label>
                    </div>`,e+=`</div>
                </div>
                <li>Libraries</li>
                <div class="settingContent">
                    <div class="setting-item-value">
                        <div class="setting-item-control" title="linker_Libraries">
                            <div role="list" class="setting-list-widget" tabindex="-1" data-focusable="true">
                                <div class="setting-list-row-header">
                                    <div class="setting-list-value">Libraries (-l)</div>
                                </div>`,t=this.currentListItemEditInfo.elem_title==="linker_Libraries";let r=this.linerCfg.libFiles;for(let h=0;h<r.length;++h)e+=`<div class="setting-list-row" data-index="${h}" col-count="1" tabindex="-1" role="listitem">`,i===h&&t?e+=`<div class="setting-list-object-valueLong">
                                <div class="setting-list-object-edit-item">
                                    <input class="setting-list-object-input" value="${r[h]}"></input>
                                </div>
                            </div> 
                            <div class="setting-list-row-editdiv">
                                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                            </div>
                        </div>`:e+=`<div class="setting-list-value">${r[h]}</div>
                            <div class="setting-list-sibling"></div>
                            <div class="monaco-action-bar">
                                <ul class="actions-container" role="toolbar">
                                    <li class="action-item" role="presentation"
                                        title="Edit Item">
                                        <a class="codicon codicon-edit"
                                            role="button" aria-label="Edit Item"
                                            tabindex="-1" data-focusable="true">
                                        </a>
                                    </li>
                                    <li class="action-item" role="presentation"
                                        title="Remove Item">
                                        <a class="codicon codicon-remove"
                                            role="button" aria-label="Remove Item"
                                            data-focusable="true" tabindex="-1">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>`;this.curAddNewitemListTitle==="linker_Libraries"?e+=`<div class="setting-list-new-row">
                            <div class="setting-list-object-valueLong">
                                <div class='setting-list-object-edit-item'>
                                    <input class='setting-list-object-input' ></input>
                                </div>
                            </div>
                            <div class="setting-list-row-editdiv">
                                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                            </div>
                        </div>`:e+=`<div class="setting-list-new-row">
                            <a class="monaco-text-button setting-list-addButton" tabindex="-1"
                                role="button" data-focusable="true">Add Item</a>
                        </div>`,e+=`</div>
            </div>
        </div>
        <div class="setting-item-value">
            <div class="setting-item-control" title="linker_LibSearchPaths">
                <div role="list" class="setting-list-widget" tabindex="-1" data-focusable="true">
                    <div class="setting-list-row-header">
                        <div class="setting-list-value">Libraries search path (-L)</div>
                    </div>`,t=this.currentListItemEditInfo.elem_title==="linker_LibSearchPaths";let l=this.linerCfg.libPaths;for(let h=0;h<l.length;++h)e+=`<div class="setting-list-row" data-index="${h}" col-count="1" tabindex="-1" role="listitem">`,i===h&&t?e+=`<div class="setting-list-object-valueLong">
                                            <div class="setting-list-object-edit-item">
                                                <input class="setting-list-object-input" value="${l[h]}"></input>
                                            </div>
                                        </div> 
                                        <div class="setting-list-row-editdiv">
                                            <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                            <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                                        </div>
                                    </div>`:e+=`<div class="setting-list-value">${l[h]}</div>
                                        <div class="setting-list-sibling"></div>
                                        <div class="monaco-action-bar">
                                            <ul class="actions-container" role="toolbar">
                                                <li class="action-item" role="presentation"
                                                    title="Edit Item">
                                                    <a class="codicon codicon-edit"
                                                        role="button" aria-label="Edit Item"
                                                        tabindex="-1" data-focusable="true">
                                                    </a>
                                                </li>
                                                <li class="action-item" role="presentation"
                                                    title="Remove Item">
                                                    <a class="codicon codicon-remove"
                                                        role="button" aria-label="Remove Item"
                                                        data-focusable="true" tabindex="-1">
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>`;this.curAddNewitemListTitle==="linker_LibSearchPaths"?e+=`<div class="setting-list-new-row">
                                        <div class="setting-list-object-valueLong">
                                            <div class='setting-list-object-edit-item'>
                                                <input class='setting-list-object-input' ></input>
                                            </div>
                                        </div>
                                        <div class="setting-list-row-editdiv">
                                            <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                            <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                                        </div>
                                    </div>`:e+=`<div class="setting-list-new-row">
                                        <a class="monaco-text-button setting-list-addButton" tabindex="-1"
                                            role="button" data-focusable="true">Add Item</a>
                                    </div>`,e+=`</div>
        </div>
    </div>`,a=this.linerCfg.bPlacelibsInGroup?"checked":"",e+=`<div><input type="checkbox" id="chkPlaceLibsInGroup" ${a} />
                    <label for="chkPlaceLibsInGroup">Place libraries in a linker groups (-Wl,--start-group $(LIBS) -Wl,--end-group)
                    </label>
                </div>`,a=this.linerCfg.bUseCMathLib?"checked":"",e+=`<div><input type="checkbox" id="chkUseCMathLib" ${a} />
                        <label for="chkUseCMathLib">Use C math library (-Wl,--start-group -lc -lm -Wl,--end-group)
                        </label>
                    </div>`,e+=`<div class="setting-item-value">
            <div class="setting-item-control" title="linker_OtherObjects">
                <div role="list" class="setting-list-widget" tabindex = "-1" data - focusable="true" >
                    <div class="setting-list-row-header" >
                        <div class="setting-list-value" > Objects </div>
                    </div>`,t=this.currentListItemEditInfo.elem_title==="linker_OtherObjects";let c=this.linerCfg.otherObjects;for(let h=0;h<c.length;++h)e+=`<div class="setting-list-row" data-index="${h}" col-count="1" tabindex="-1" role="listitem">`,i===h&&t?e+=`<div class="setting-list-object-valueLong">
                            <div class="setting-list-object-edit-item">
                                <input class="setting-list-object-input" value="${c[h]}"></input>
                            </div>
                        </div> 
                        <div class="setting-list-row-editdiv">
                            <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                            <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                        </div>
                    </div>`:e+=`<div class="setting-list-value">${c[h]}</div>
                            <div class="setting-list-sibling"></div>
                            <div class="monaco-action-bar">
                                <ul class="actions-container" role="toolbar">
                                    <li class="action-item" role="presentation"
                                        title="Edit Item">
                                        <a class="codicon codicon-edit"
                                            role="button" aria-label="Edit Item"
                                            tabindex="-1" data-focusable="true">
                                        </a>
                                    </li>
                                    <li class="action-item" role="presentation"
                                        title="Remove Item">
                                        <a class="codicon codicon-remove"
                                            role="button" aria-label="Remove Item"
                                            data-focusable="true" tabindex="-1">
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>`;this.curAddNewitemListTitle==="linker_OtherObjects"?e+=`<div class="setting-list-new-row">
                        <div class="setting-list-object-valueLong">
                            <div class='setting-list-object-edit-item'>
                                <input class='setting-list-object-input' ></input>
                            </div>
                        </div>
                        <div class="setting-list-row-editdiv">
                            <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                            <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                        </div>
                    </div>`:e+=`<div class="setting-list-new-row">
                        <a class="monaco-text-button setting-list-addButton" tabindex="-1"
                            role="button" data-focusable="true">Add Item</a>
                    </div>`,e+=`</div>
                </div>
            </div>
            </div>
            <li> Other </li>
            <div class="settingContent" >
                <div class="setting-item-value">
                    <div class="setting-item-control" title="linker_OtherFlags">
                        <div role="list" class="setting-list-widget" tabindex = "-1" data - focusable="true" >
                            <div class="setting-list-row-header" >
                                <div class="setting-list-value" > Other flags </div>
                            </div>`,t=this.currentListItemEditInfo.elem_title==="linker_OtherFlags";let d=this.linerCfg.otherFlags;for(let h=0;h<d.length;++h)e+=`<div class="setting-list-row" data-index="${h}" col-count="1" tabindex="-1" role="listitem">`,i===h&&t?e+=`<div class="setting-list-object-valueLong">
                                <div class="setting-list-object-edit-item">
                                    <input class="setting-list-object-input" value="${d[h]}"></input>
                                </div>
                            </div> 
                            <div class="setting-list-row-editdiv">
                                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                            </div>
                        </div>`:e+=`<div class="setting-list-value">${d[h]}</div>
                                <div class="setting-list-sibling"></div>
                                <div class="monaco-action-bar">
                                    <ul class="actions-container" role="toolbar">
                                        <li class="action-item" role="presentation"
                                            title="Edit Item">
                                            <a class="codicon codicon-edit"
                                                role="button" aria-label="Edit Item"
                                                tabindex="-1" data-focusable="true">
                                            </a>
                                        </li>
                                        <li class="action-item" role="presentation"
                                            title="Remove Item">
                                            <a class="codicon codicon-remove"
                                                role="button" aria-label="Remove Item"
                                                data-focusable="true" tabindex="-1">
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>`;this.curAddNewitemListTitle==="linker_OtherFlags"?e+=`<div class="setting-list-new-row">
                            <div class="setting-list-object-valueLong">
                                <div class='setting-list-object-edit-item'>
                                    <input class='setting-list-object-input' ></input>
                                </div>
                            </div>
                            <div class="setting-list-row-editdiv">
                                <a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
                                <a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
                            </div>
                        </div>`:e+=`<div class="setting-list-new-row">
                            <a class="monaco-text-button setting-list-addButton" tabindex="-1"
                                role="button" data-focusable="true">Add Item</a>
                        </div>`;let u=this.linerCfg.getAllOptionString();return e+=`</div>
                    </div>
                </div>
                <li> All Options </li>
                <div class="settingContent" >
                    <textarea class="noLeftTextArea" id="allLinkerOption" readonly> ${u} </textarea>
                </div>
                </ul>
                </div>
            </div>
        </div>`,e}_updateDebugConfigContent(){let e=`<div class="settingsArea">
        <div class="settingContainer">
            <div>
                <details open="true">
                    <summary>Debugger</summary>
                    <hr />
                    <ul>
                        <li>Debug adapter</li>
                        <div class="settingContent">
                            <div class="class1">
                                <label class="smallLabel">Debug adapter select</label>
                                <select class="wideinput">
                                    <option>BusBlaster V4</option>
                                    <option>BusBlaster V3</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div class="class1">
                                <label class="smallLabel">Hardware version</label>
                                <input class="smallinput" readonly>
                                </input>
                                <label class="smallLabel">Firmware version</label>
                                <input class="smallinput" readonly>
                                </input>
                            </div>
                            <div class="class1">
                                <label class="smallLabel">Debug port</label>
                                <select class="smallinput">
                                    <option>JTAG</option>
                                </select>
                                <label class="smallLabel">Max Clock</label>
                                <select class="smallinput">
                                    <option>10MHz</option>
                                    <option>30MHz</option>
                                </select>
                            </div>
                            <div class="class1">
                                <label class="smallLabel">Target device ID</label>
                                <div class="wideListBox">
                                    <div class="setting-list-row-header">
                                        <div class="list_item">CPU Core</div>
                                        <div class="list_item_lastcol">ID Code</div>
                                    </div>`;for(let c of this.procCoreCfgs)e+=`<div class="setting-list-row" data-index="0" tabindex="-1" role="listitem">
                <div class="list_item">
                    <div class="setting-list-object-edit-item"><input
                            class="setting-list-object-input" value="${c.procName}"></div>
                </div>
                <div class="list_item_lastcol">
                    <div class="setting-list-object-edit-item"><input
                            class="setting-list-object-input"></div>
                </div>
            </div>`;e+=` </div>
                            </div>
                        </div>
                        <li>OpenOCD GDB Server Setup</li>
                        <div class="classNoMargin">`;let t=this.debugCfg.bStartOpenOCDLocal?"checked":"";e+=`<input type="checkbox" id="chkStartOpenOCD" ${t}/>
                            <label for="chkStartOpenOCD"> Start OpenOCD locally when start debug
                            </label>
                        </div>
                        <div class="class1">
                            <label class="smallLabel">Executable path:</label>
                            <div class="class2">
                                <div class="class3">`;let s=ve.workspace.getConfiguration().get("OpenOCD Path"),n=String(s),a=this.debugCfg;e+=`<input class="wideinput" readonly id="OpenOCDFsPath" value="${n}">
                                </div>
                                <div class="class3">
                                    <label>To change it,use the global Settings->Extensions->MIPS Studio, Or </label>
                                    <button class="monaco-text-button" id="btnViewSetting">Edit Settings</button>
                                </div>
                                <div class="class3">
                                    <label>After Modify settings,Please Refresh</label>
                                    <button class="monaco-text-button" id="btnRefreshOpenOCD">Refresh</button>
                                </div>
                            </div>
                        </div>
                        <div class="class1">
                            <label class="smallLabel">GDB port:</label>`,e+=`<input type="number" class="wideinput" id="openOcdGdbPort" value="${a.nGdbPort}">
                            </input>
                        </div>
                        <div class="class1">
                            <label class="smallLabel">Telnet port:</label>
                            <input type="number" class="wideinput" id="openOcdTelnetPort" value="${a.nTelnetPort}">
                            </input>
                        </div>
                        <div class="class1">
                            <label class="smallLabel">Tcl port:</label>
                            <input type="number" class="wideinput" id="openOcdTclPort" value="${a.nTclPort}">
                            </input>
                        </div>
                        <div class="class1">
                            <label class="smallLabel">Config options:</label>
                            <textarea class="wideTextArea" id="openOcdCfgOption">${a.strCfgOption}</textarea>
                        </div>
                        <li>GDB Client Setup</li>
                        <div class="classNoMargin">`,t=a.bStartGdb?"checked":"",e+=`<input type="checkbox" id="chkStartGDB" ${t}/>
                            <label for="chkStartGDB"> Start GDB session when start debug
                            </label>
                        </div>
                        <div class="class1">
                            <label class="smallLabel">Executable path:</label>
                            <div class="class2">
                                <div class="class3">`;let r=j.getInstance().getToolChainExePathName(this.curSelectedToolChainGroupName,this.curSelectedToolChainName,"gdb");e+=`<input class="wideinput" readonly
                                        value="${r}">
                                </div>
                                <div class="class3">
                                    <label>(to change it,use the global Settings->Extensions->MIPS Studio)</label>
                                </div>
                            </div>
                        </div>
                        <div class="class1">
                            <label class="smallLabel">Execute commands session at start:</label>
                            <textarea class="wideTextArea" id="gdbCmdSession">${a.strCmdSession}</textarea>
                        </div>
                        <li>Remote Target</li>
                        <div class="classNoMargin">`,t=a.bStartRemoteTarget?"checked":"",e+=`<input type="checkbox" id="chkStartRemoteTarget" ${t}/>
                            <label for="chkStartRemoteTarget"> Start remote target when start debug
                            </label>
                        </div>
                        <div class="class1">
                            <label class="smallLabel">host name or iP address:</label>
                            <div class="class2">`,e+=`<div class="class3">
                                    <input class="wideinput" id="gdbSvrHost" value="${a.strSvrHost}">
                                </div>
                            </div>
                        </div>
                        <div class="class1">
                            <label class="smallLabel">Port number:</label>
                            <input  type="number" class="wideinput" id="gdbSvrPort" value="${a.nSvrPort}"></input>
                        </div>
                    </ul>
                </details>
            </div>
            <div>
                <details open="true">
                    <summary>Startup</summary>
                    <hr />
                    <ul>
                        <li>Connect and Reset</li>
                        <div>
                            <div class="classNoMargin">`,t=a.bResetAfterConnect?"checked":"",e+=`<input type="checkbox" id="chkResetAfterConnect" ${t}/>
                                <label for="chkResetAfterConnect"> Reset after connect
                                </label>
                            </div>
                            <div class="class1">
                                <label class="smallLabel">Action Type:</label>
                                <input class="wideinput" id="resetAfterConn_Action" value="${a.strResectConnectAtction}">
                            </div>
                            <div class="classNoMargin">`,t=a.bRestartReset?"checked":"",e+=`<input type="checkbox" id="chkRestartReset" ${t}/>
                                <label for="chkRestartReset"> Restart reset
                                </label>
                            </div>
                            <div class="class1">
                                <label class="smallLabel">Action Type:</label>
                                <input class="wideinput" id="restartReset_Action" value="${a.strRestartResetAtction}">
                            </div>
                            <div class="classNoMargin">`,t=a.bSetBreakPoint?"checked":"",e+=`<input type="checkbox" id="chkSetBreakPointAt" ${t}/>
                                <label for="chkSetBreakPointAt"> Set breakpoint at
                                </label>
                            </div>
                            <div class="class1">
                                <label class="smallLabel"></label>
                                <input class="wideinput" id="breakPoint_At" value="${a.strBreakPoint}">
                            </div>
                            <div class="classNoMargin">`,t=a.bSetPCValue?"checked":"",e+=`<input type="checkbox" id="chkSetProgCounterAt" ${t}/>
                                <label for="chkSetProgCounterAt"> Set program counter at (hex):
                                </label>
                            </div>
                            <div class="class1">
                                <label class="smallLabel"></label>
                                <input class="wideinput" id="PC_Val" value="${a.strPCValue}">
                            </div>
                            <div class="classNoMargin">`,t=this.debugCfg.bContinue?"checked":"",e+=`<input type="checkbox" id="chkContinue" ${t}/>
                                <label for="chkContinue"> Continue
                                </label>
                            </div>
                        </div>
                        <li>Load symbol and executable</li>
                        <div>
                            <div class="classNoMargin">`,t=this.debugCfg.bLoadElf?"checked":"";let l=this.debugCfg.bLoadElf?"":"disabled";return e+=`<input type="radio" name="chkloadType" id="chkloadELF" ${t}/>
                                <label for="chkloadELF"> Load ELF file
                                </label>
                            </div>
                            <div class="class1">
                                <label class="smallLabel label${l}">File path:</label>
                                <input class="wideinput" id="input_ElfFilePath" value="${a.strElfPathName}" readonly ${l}>
                                <button class="monaco-text-button" valueid="input_ElfFilePath" name="btnBrowseFile" id="btnBrowser_ElfFilePath" ${l}>Browse</button>
                            </div>
                            <div class="classNoMargin">`,t=this.debugCfg.bElfLoadOffset?"checked":"",l=this.debugCfg.bElfLoadOffset?"":"disabled",e+=`<input type="checkbox" id="chkloadAppAtStartUp" ${l}  ${t}/>
                                <label for="chkloadAppAtStartUp" class="label${l}}"> Load application at startup
                                </label>
                            </div>
                            <div class="class1">
                                <label class="smallLabel label${l}">Load offset(hex):</label>
                                <input class="wideinput" id="input_ElfLoadOffset" value="${a.nElfLoadOffset}" disabled>
                            </div>
                            <div class="classNoMargin">`,t=this.debugCfg.bLoadBin?"checked":"",l=this.debugCfg.bLoadBin?"":"disabled",e+=`<input type="radio" name="chkloadType" id="chkloadBin" ${t}/>
                                <label for="chkloadBin"> Load binary file
                                </label>
                            </div>
                            <div class="class1">
                                <label class="smallLabel label${l}" >File path:</label>
                                <input class="wideinput" id="input_BinFilePath" value="${a.strBinPathName}" readonly ${l}>
                                <button class="monaco-text-button" valueid="input_BinFilePath" name="btnBrowseFile" id="btnBrowser_BinFilePath" ${l}>Browse</button>
                            </div>
                            <div class="classNoMargin">
                            `,t=this.debugCfg.bBinLoadOffset?"checked":"",l=this.debugCfg.bBinLoadOffset?"":"disabled",e+=`<input type="checkbox" id="chkBinloadAppAtStartUp" ${l}  ${t}/>
                                <label for="chkBinloadAppAtStartUp" class="label${l}"> Load application at startup
                                </label>
                            </div>
                            <div class="class1">
                                <label class="smallLabel label${l}">Load offset(hex):</label>
                                <input class="wideinput" id="input_BinLoadOffset" value="${a.nBinLoadOffset}" ${l}>
                            </div>
                        </div>
                    </ul>
                </details>
            </div>
        </div>
    </div>`,e}_getHtmlForWebview(e){let t="";if(this._extensionUri){let i=e.asWebviewUri(ve.Uri.joinPath(this._extensionUri,"media","projectConfigSettings.css")),s=e.asWebviewUri(ve.Uri.joinPath(this._extensionUri,"media","projectConfigSettings.js")),n=e.asWebviewUri(ve.Uri.joinPath(this._extensionUri,"media","codicon.css")),a=ce(),r=["","","","","",""];this.settingDetailIndex>=0&&this.settingDetailIndex<r.length&&(r[this.settingDetailIndex]="checked"),t=`<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<!--
					Use a content security policy to only allow loading specific resources in the webview
				-->
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; font-src ${e.cspSource}; style-src ${e.cspSource};script-src 'nonce-${a}';">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Project Settings</title>
				<link href="${i}" rel="stylesheet" />
				<link href="${n}" rel="stylesheet" />
			</head>
			<body data-vscode-context='{"preventDefaultContextMenuItems": true }'>
            <div class="content">
            <h1>Project Settings</h1>
                <div class="class1"><label class="minilabel">Build Type:</label>
                    <select class="normalinput" id="select_ProjectBuildType">`;let l=this.curMode===Pe?"selected":"";switch(t+=`<option value="${De}">Debug</option>
                        <option value="${Pe}" ${l}>Release</option>
                    </select>
                </div> 
                <div class="monaco-action-bar">
                    <ul class="actions-container" role="toolbar" aria-label="Settings Switcher" id="setingDetailActionBarSwitch" select_index="${this.settingDetailIndex}">
                        <li class="action-tab-item" role="presentation"><a class="action-label ${r[0]}" role="button" 
                            tabindex="0" id="ItemTarget">Target Processor</a></li>
                        <li class="action-tab-item" role="presentation"><a class="action-label ${r[1]}" role="button"
                            tabindex="0" id="ItemToolchains">Toolchains</a></li>
                        <li class="action-tab-item" role="presentation"><a class="action-label ${r[2]}" role="button"
                            tabindex="0" id="ItemBuildOutput">Build Output</a></li>
                        <li class="action-tab-item" role="presentation"><a class="action-label ${r[3]}" role="button"
                            tabindex="0" id="ItemCompile">Compile</a></li>
                        <li class="action-tab-item" role="presentation"><a class="action-label ${r[4]}" role="button"
                            tabindex="0" id="ItemLinker">Linker</a></li>
                        <li class="action-tab-item" role="presentation"><a class="action-label ${r[5]}" role="button"
                            tabindex="0" id="ItemDebug">Debug</a></li>
                    </ul>
                </div>`,this.settingDetailIndex){case 0:t+=this._updateProcessorTargetConfigContent();break;case 1:t+=this._updateToolchainsConfigContent();break;case 2:t+=this._updateBuildOutConfigContent();break;case 3:t+=this._updateCompileConfigContent();break;case 4:t+=this._updateLinkerConfigContent();break;case 5:t+=this._updateDebugConfigContent();break}t+=`</div><script nonce="${a}" src="${s}"><\/script></body></html>`}return t}},Ae=_t;q(Ae,"viewType","mipsstudio.projectsettings"),q(Ae,"instance");var Ee=T(require("vscode"));function Ro(o,e){if(o.vendor<e.vendor)return-1;if(o.vendor>e.vendor)return 1;if(o.comVersion<e.comVersion)return-1;if(o.comVersion>e.comVersion)return 1;if(o.comVariant&&e.comVariant){if(o.comVariant<e.comVariant)return-1;if(o.comVariant>e.comVariant)return 1}return 0}function $s(o,e){let t=!1;return o.comClass===e.comClass&&o.comGroup===e.comGroup&&o.comSubgroup===e.comSubgroup&&o.vendor===e.vendor&&o.comVersion===e.comVersion&&o.comVariant===e.comVariant&&o.comApiVersion===e.comApiVersion&&(t=!0),t}function Uo(o,e){let t=!1;return o.comClass===e.comClass&&o.comGroup===e.comGroup&&(t=!0,e.comSubgroup&&o.comSubgroup!==e.comSubgroup&&(t=!1),e.comVersion&&o.comVersion!==e.comVersion&&(t=!1),e.comVariant&&o.comVariant!==e.comVariant&&(t=!1),e.comApiVersion&&o.comApiVersion!==e.comApiVersion&&(t=!1)),t}function Dr(o,e){return o.comClass<e.comClass?-1:o.comClass>e.comClass?1:o.comGroup<e.comGroup?-1:o.comGroup>e.comGroup?1:o.comSubgroup?e.comSubgroup?o.comSubgroup<e.comSubgroup?-1:o.comSubgroup>e.comSubgroup?1:Ro(o,e):1:e.comSubgroup?1:Ro(o,e)}var yt=class{_panel;_extensionUri;_disposables=[];projectFamilyName;projectName;projDevProcItem;projectComponents;selectedProjComponentIndex;projComponentConditions;projComponentErrinfos;projectComponentChkArr;componentWebStatusToChangeMap;failedCompRequireItems;bShowChedkedOnly;static getInstance(){return yt.instance||(yt.instance=new yt),yt.instance}constructor(){this.projectComponents=[],this.projectComponentChkArr=[],this.componentWebStatusToChangeMap=new Map,this.failedCompRequireItems=[],this.selectedProjComponentIndex=-1,this.projComponentConditions=[],this.projComponentErrinfos=[],this.bShowChedkedOnly=!1}getCurrentProjectInfo(){if(this.projectName=I.getInstance().getCurrentProjectName(),this.projectFamilyName=I.getInstance().getCurrentProjectFamilyName(),this.projectName&&this.projectFamilyName){if(this.projDevProcItem=I.getInstance().getCurrentProjectDevProcConfig(),this.projDevProcItem){this.getInstalledPackComponentsByDevProcCfg(this.projectFamilyName,this.projDevProcItem),this.projectComponents.sort(Dr);let e=this.projectComponents.length;for(let i=0;i<e;++i){this.projectComponentChkArr.push(0);let s=this.projectComponents[i].condition,n="";if(s?.comRequires)for(let a of s.comRequires)a.comClass&&(n+="comClass: "+a.comClass),a.comGroup&&(n+=" comGroup: "+a.comGroup),a.comSubgroup&&(n+=" comSubGroup: "+a.comSubgroup),a.comVersion&&(n+=" comVersion: "+a.comVersion),a.comVariant&&(n+=" comVariatn: "+a.comVariant),a.comApiVersion&&(n+=" comApiVersion: "+a.comApiVersion),n+=`
`;this.projComponentConditions[i]=n,this.projComponentErrinfos[i]=""}let t=I.getInstance().getCurrentProjectComponents();if(t){for(let i of t)for(let s=0;s<e;++s)if($s(i,this.projectComponents[s])){this.projectComponentChkArr[s]=1;break}}}}else this.projectComponents=[],this.projectComponentChkArr=[],this.projDevProcItem=void 0,this.selectedProjComponentIndex=-1,this.projComponentConditions=[],this.projComponentErrinfos=[],this.bShowChedkedOnly=!1}show(e){let t=Ee.window.activeTextEditor?Ee.window.activeTextEditor.viewColumn:void 0;this._extensionUri=e,this.getCurrentProjectInfo(),this._panel?this._panel.reveal(t||Ee.ViewColumn.One):(this._panel=Ee.window.createWebviewPanel(yt.viewType,"MIPS Studio: Project Components Manage",t??Ee.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0,localResourceRoots:[this._extensionUri]}),this._panel.onDidDispose(()=>this.dispose(),null,this._disposables),this._panel.webview.onDidReceiveMessage(i=>{switch(i.type){case"btnClicked":if(i.elem_id)switch(i.elem_id){case"btnFinish":this.handleComponentChangeApply();break;case"btnCancel":{let s,n=this.projectComponentChkArr.length;for(s=0;s<n;++s)this.projectComponentChkArr[s]>1&&(this.projectComponentChkArr[s]-=2);this.componentWebStatusToChangeMap.clear(),this.failedCompRequireItems.splice(0),this._update()}break}break;case"inputElemChanged":i.elem_id&&i.elem_value!==void 0&&this.handleInputElemchanged(i.elem_id,i.elem_value);break;case"list-row-selected":if(i.data_index){this.selectedProjComponentIndex=parseInt(i.data_index);let s=this.projComponentConditions[this.selectedProjComponentIndex];this._panel?.webview.postMessage({type:"conditionInfo",conditionInfo:s});let n=this.projComponentErrinfos[this.selectedProjComponentIndex];this._panel?.webview.postMessage({type:"ItemErrInfo",errinfo:n})}break}},null,this._disposables),this._update())}dispose(){this.projectComponents.splice(0),this.projectComponentChkArr.splice(0),this.componentWebStatusToChangeMap.clear(),this.failedCompRequireItems.splice(0),this.selectedProjComponentIndex=-1,this.projComponentConditions.splice(0),this.projComponentErrinfos.splice(0),this.bShowChedkedOnly=!1,this._panel?.dispose(),this._panel=void 0}handleComponentChangeApply(){let e=this.projectComponentChkArr.length,t=!0,i=I.getCurrentProjManager();if(i){for(let s=0;s<e;++s)this.projectComponentChkArr[s]===2?i.installComponent(this.projectComponents[s])?this.projectComponentChkArr[s]=1:t=!1:this.projectComponentChkArr[s]===3&&(i.unInstallComponent(this.projectComponents[s]),this.projectComponentChkArr[s]=0);if(this.componentWebStatusToChangeMap.clear(),t){for(let s=0;s<e;++s)this.projectComponentChkArr[s]===1&&i.AfterInstalledComponent(this.projectComponents[s]);i.che,Ee.window.showInformationMessage("Apply Component Changes Success.",{modal:!0})}else Ee.window.showInformationMessage("Apply Component Changes have some errors.",{modal:!0})}}handleFilterInputValue(e){if(e)if(this.bShowChedkedOnly){let t=this.projectComponentChkArr.length,i="";for(let s=0;s<t;++s){let n=this.projectComponents[s];if((this.projectComponentChkArr[s]===1||this.projectComponentChkArr[s]===2)&&n.isFilterIn(e)){let r="checked";this.selectedProjComponentIndex===s?i+=`<div class="setting-list-row selected" data-index="${s}" tabindex="-1" role="listitem">`:i+=`<div class="setting-list-row" data-index="${s}" tabindex="-1" role="listitem">`,i+=`<div class="setting-list-object-valueLong">
									<div class="setting-list-object-valueMin">${n.comClass}</div>
									<div class="setting-list-object-valueMin">${n.comGroup}</div>
									<div class="setting-list-object-valueMin">${n.comSubgroup??""}</div>
								</div>
								<div class="setting-list-object-valueMin">
								<input type="checkbox" ${r} id="chk_component_${s}"  class="setting-value-checkbox"/>
								</div>
								<div class="setting-list-object-valueMin">${n.vendor}
								</div>
								<div class="setting-list-object-valueMin">${n.comVersion}
								</div>
								<div class="setting-list-object-valueMin">${n.comVariant??""}
								</div>
								<div class="setting-list-object-valueLong">${n.description}</div>
								</div>`}}this._panel?.webview.postMessage({type:"listRowChange",strhtml:i})}else{let t=this.projectComponentChkArr.length,i="";for(let s=0;s<t;++s){let n=this.projectComponents[s];if(n.isFilterIn(e)){let r="";(this.projectComponentChkArr[s]===1||this.projectComponentChkArr[s]===2)&&(r="checked"),this.selectedProjComponentIndex===s?i+=`<div class="setting-list-row selected" data-index="${s}" tabindex="-1" role="listitem">`:i+=`<div class="setting-list-row" data-index="${s}" tabindex="-1" role="listitem">`,i+=`<div class="setting-list-object-valueLong">
								<div class="setting-list-object-valueMin">${n.comClass}</div>
								<div class="setting-list-object-valueMin">${n.comGroup}</div>
								<div class="setting-list-object-valueMin">${n.comSubgroup??""}</div>
							</div>
							<div class="setting-list-object-valueMin">
							<input type="checkbox" ${r} id="chk_component_${s}"  class="setting-value-checkbox"/>
							</div>
							<div class="setting-list-object-valueMin">${n.vendor}
							</div>
							<div class="setting-list-object-valueMin">${n.comVersion}
							</div>
							<div class="setting-list-object-valueMin">${n.comVariant??""}
							</div>
							<div class="setting-list-object-valueLong">${n.description}</div>
							</div>`}}this._panel?.webview.postMessage({type:"listRowChange",strhtml:i})}else if(this.bShowChedkedOnly){let t=this.projectComponentChkArr.length,i="";for(let s=0;s<t;++s){let n=this.projectComponents[s];if(this.projectComponentChkArr[s]===1||this.projectComponentChkArr[s]===2){let a="checked";this.selectedProjComponentIndex===s?i+=`<div class="setting-list-row selected" data-index="${s}" tabindex="-1" role="listitem">`:i+=`<div class="setting-list-row" data-index="${s}" tabindex="-1" role="listitem">`,i+=`<div class="setting-list-object-valueLong">
									<div class="setting-list-object-valueMin">${n.comClass}</div>
									<div class="setting-list-object-valueMin">${n.comGroup}</div>
									<div class="setting-list-object-valueMin">${n.comSubgroup??""}</div>
								</div>
								<div class="setting-list-object-valueMin">
								<input type="checkbox" ${a} id="chk_component_${s}"  class="setting-value-checkbox"/>
								</div>
								<div class="setting-list-object-valueMin">${n.vendor}
								</div>
								<div class="setting-list-object-valueMin">${n.comVersion}
								</div>
								<div class="setting-list-object-valueMin">${n.comVariant??""}
								</div>
								<div class="setting-list-object-valueLong">${n.description}</div>
								</div>`}}this._panel?.webview.postMessage({type:"listRowChange",strhtml:i})}else{let t=this.projectComponentChkArr.length,i="";for(let s=0;s<t;++s){let n=this.projectComponents[s],a="";(this.projectComponentChkArr[s]===1||this.projectComponentChkArr[s]===2)&&(a="checked"),this.selectedProjComponentIndex===s?i+=`<div class="setting-list-row selected" data-index="${s}" tabindex="-1" role="listitem">`:i+=`<div class="setting-list-row" data-index="${s}" tabindex="-1" role="listitem">`,i+=`<div class="setting-list-object-valueLong">
								<div class="setting-list-object-valueMin">${n.comClass}</div>
								<div class="setting-list-object-valueMin">${n.comGroup}</div>
								<div class="setting-list-object-valueMin">${n.comSubgroup??""}</div>
							</div>
							<div class="setting-list-object-valueMin">
							<input type="checkbox" ${a} id="chk_component_${s}"  class="setting-value-checkbox"/>
							</div>
							<div class="setting-list-object-valueMin">${n.vendor}
							</div>
							<div class="setting-list-object-valueMin">${n.comVersion}
							</div>
							<div class="setting-list-object-valueMin">${n.comVariant??""}
							</div>
							<div class="setting-list-object-valueLong">${n.description}</div>
							</div>`}this._panel?.webview.postMessage({type:"listRowChange",strhtml:i})}}handleInputElemchanged(e,t){if(e==="slider-switch")this.handleShowSelectedComponentsChange(t);else if(e==="sidebar-filter-input")this.handleFilterInputValue(t);else{this.failedCompRequireItems.splice(0),this.componentWebStatusToChangeMap.clear();let i=e.indexOf("chk_component_");if(i===0){let s=e.substring(i+14),n=parseInt(s),a=this.projectComponentChkArr.length;if(n>=0&&n<a)if(t==="checked")if(this.checkCompRequireItem(n,!0)){this.postItemCheckStatusChanged();let l=this.projComponentErrinfos[n]="";this._panel?.webview.postMessage({type:"ItemErrInfo",errinfo:l}),this.projectComponentChkArr[n]===3?this.projectComponentChkArr[n]=1:this.projectComponentChkArr[n]===0&&(this.projectComponentChkArr[n]=2)}else{let l="";for(let c of this.failedCompRequireItems)l+="comClass: "+c.comClass+" comGroup: "+c.comGroup,c.comSubgroup&&(l+=" comSubGroup: "+c.comSubgroup),c.comVersion&&(l+=" comVersion: "+c.comVersion),c.comVariant&&(l+=" comVariatn: "+c.comVariant),l+=` Failed to checked. 
`;this.projComponentErrinfos[n]=l,n===this.selectedProjComponentIndex&&this._panel?.webview.postMessage({type:"checkItemErrInfo",errinfo:l,d_index:n})}else this.unCheckItemsOnItemUncheck(n),this.projectComponentChkArr[n]===1?this.projectComponentChkArr[n]=3:this.projectComponentChkArr[n]===2&&(this.projectComponentChkArr[n]=0),this.postItemCheckStatusChanged()}}}handleShowSelectedComponentsChange(e){if(e==="checked"){this.bShowChedkedOnly=!0;let t=this.projectComponentChkArr.length,i="";for(let s=0;s<t;++s){let n=this.projectComponents[s];if(this.projectComponentChkArr[s]===1||this.projectComponentChkArr[s]===2){let a="checked";this.selectedProjComponentIndex===s?i+=`<div class="setting-list-row selected" data-index="${s}" tabindex="-1" role="listitem">`:i+=`<div class="setting-list-row" data-index="${s}" tabindex="-1" role="listitem">`,i+=`<div class="setting-list-object-valueLong">
								<div class="setting-list-object-valueMin">${n.comClass}</div>
								<div class="setting-list-object-valueMin">${n.comGroup}</div>
								<div class="setting-list-object-valueMin">${n.comSubgroup??""}</div>
							</div>
							<div class="setting-list-object-valueMin">
							<input type="checkbox" ${a} id="chk_component_${s}"  class="setting-value-checkbox"/>
							</div>
							<div class="setting-list-object-valueMin">${n.vendor}
							</div>
							<div class="setting-list-object-valueMin">${n.comVersion}
							</div>
							<div class="setting-list-object-valueMin">${n.comVariant??""}
							</div>
							<div class="setting-list-object-valueLong">${n.description}</div>
							</div>`}}this._panel?.webview.postMessage({type:"listRowChange",strhtml:i})}else{this.bShowChedkedOnly=!1;let t=this.projectComponentChkArr.length,i="";for(let s=0;s<t;++s){let n=this.projectComponents[s],a="";(this.projectComponentChkArr[s]===1||this.projectComponentChkArr[s]===2)&&(a="checked"),this.selectedProjComponentIndex===s?i+=`<div class="setting-list-row selected" data-index="${s}" tabindex="-1" role="listitem">`:i+=`<div class="setting-list-row" data-index="${s}" tabindex="-1" role="listitem">`,i+=`<div class="setting-list-object-valueLong">
							<div class="setting-list-object-valueMin">${n.comClass}</div>
							<div class="setting-list-object-valueMin">${n.comGroup}</div>
							<div class="setting-list-object-valueMin">${n.comSubgroup??""}</div>
						</div>
						<div class="setting-list-object-valueMin">
						<input type="checkbox" ${a} id="chk_component_${s}"  class="setting-value-checkbox"/>
						</div>
						<div class="setting-list-object-valueMin">${n.vendor}
						</div>
						<div class="setting-list-object-valueMin">${n.comVersion}
						</div>
						<div class="setting-list-object-valueMin">${n.comVariant??""}
						</div>
						<div class="setting-list-object-valueLong">${n.description}</div>
						</div>`}this._panel?.webview.postMessage({type:"listRowChange",strhtml:i})}}postItemCheckStatusChanged(){if(this.componentWebStatusToChangeMap.size){let e=new Array,t=new Array;this.componentWebStatusToChangeMap.forEach((i,s)=>{e.push(s),t.push(i)}),this._panel?.webview.postMessage({type:"changeItemMap",itemKeys:e,itemValues:t})}}unCheckItemsOnItemUncheck(e){let t=this.projectComponents.length,i=this.projectComponents[e];for(let s=0;s<t;++s)if(s!==e&&(this.projectComponentChkArr[s]===1||this.projectComponentChkArr[s]===2)){let n=this.projectComponents[s].condition?.comRequires;if(n){for(let a of n)if(Uo(i,a)){this.projectComponentChkArr[s]===1?this.projectComponentChkArr[s]=3:this.projectComponentChkArr[s]===2&&(this.projectComponentChkArr[s]=0),this.componentWebStatusToChangeMap.set(s,!1),this.unCheckItemsOnItemUncheck(s);break}}}}checkCompRequireItem(e,t){let i=!0,s=this.projectComponents.length,n=this.projectComponents[e].condition;if(n&&n.comRequires){i=!1;let a=0;for(let r of n.comRequires){let l=!1;for(let c=0;c<s;++c)if(c!==e&&Uo(this.projectComponents[c],r)){this.isNeedChangeCheckComponentItem(c)?this.checkCompRequireItem(c,!1)&&(l=!0,this.componentWebStatusToChangeMap.set(c,!0)):l=!0;break}l?++a:this.failedCompRequireItems.includes(r)||this.failedCompRequireItems.push(r)}a===n.comRequires.length&&(i=!0)}return i||t&&this.componentWebStatusToChangeMap.clear(),i}isNeedChangeCheckComponentItem(e){let t=!1;return this.projectComponentChkArr[e]===0?(this.projectComponentChkArr[e]=2,t=!0):this.projectComponentChkArr[e]===3&&(this.projectComponentChkArr[e]=1,t=!0),t}_getHtmlForWebview(e){let t=ce(),i="";if(this._panel&&this._extensionUri){let s=e.asWebviewUri(Ee.Uri.joinPath(this._extensionUri,"media","projectComponentMgrView.js")).toString(),n=e.asWebviewUri(Ee.Uri.joinPath(this._extensionUri,"media","projectComponentMgrView.css")).toString(),a=e.asWebviewUri(Ee.Uri.joinPath(this._extensionUri,"media","codicon.css"));i=`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<link href="${n}" rel="stylesheet" />
			<meta http-equiv="Content-Security-Policy" content="default-src 'none'; font-src ${e.cspSource}; style-src ${e.cspSource};script-src 'nonce-${t}';">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>>Mips Studio</title>
			<link href="${n}" rel="stylesheet" />
			<link href="${a}" rel="stylesheet" />
		</head>
		<body data-vscode-context='{"preventDefaultContextMenuItems": true }'>`,i+=`<div class="main-container">
		<h1>Software Components</h1>
			<label>${this.projectName??"Project"}</label>
			<div class="mainArea">
				<div class="componentSelectFilterContainer">
					<div class="selectType">
					<label>All</label>
					<label class="switch">
						<input type="checkbox" id="slider-switch">
						<span class="slider round"></span>
					</label>
					<label>Selected</label>
					</div>
					<div class="sidebar-filter-container">
					<div class="sidebar-filter">
					<input id="sidebar-filter-input" class="sidebar-filter-input" type="text" placeholder="Filter" value="">
						<div class="monaco-action-bar">
						<ul class="actions-container" role="toolbar">
							<li class="action-item" role="presentation" title="Clear Filter"><a
									class="codicon codicon-clear-all" role="button"
									aria-label="Clear Filter" data-focusable="true"
									tabindex="-1"></a></li>
						</ul>
						</div>
					</div>
					</div>
				</div>
				<div class="setting-item-control" title="projectComponentsList">
					<div role="list" class="setting-list-widget"  tabindex="-1"
						data-focusable="true" >
						<div class="setting-list-row-header">
							<div class="setting-list-object-valueLong">Components</div>
							<div class="setting-list-object-valueMin">Selected</div>
							<div class="setting-list-object-valueMin">Vendor</div>
							<div class="setting-list-object-valueMin">Version</div>
							<div class="setting-list-object-valueMin">Variant</div>
							<div class="setting-list-object-valueLong">Description</div>
						</div>
						<div id="list-row-container">`;let r=0;for(let l of this.projectComponents){let c=this.projectComponentChkArr[r]===1||this.projectComponentChkArr[r]===2?"checked":"";this.selectedProjComponentIndex===r?i+=`<div class="setting-list-row selected" data-index="${r}" tabindex="-1" role="listitem">`:i+=`<div class="setting-list-row" data-index="${r}" tabindex="-1" role="listitem">`,i+=`<div class="setting-list-object-valueLong">
				<div class="setting-list-object-valueMin">${l.comClass}</div>
				<div class="setting-list-object-valueMin">${l.comGroup}</div>
				<div class="setting-list-object-valueMin">${l.comSubgroup??""}</div>
			</div>
			<div class="setting-list-object-valueMin">
			<input type="checkbox" ${c} id="chk_component_${r}"  class="setting-value-checkbox"/>
			</div>
			<div class="setting-list-object-valueMin">${l.vendor}
			</div>
			<div class="setting-list-object-valueMin">${l.comVersion}
			</div>
			<div class="setting-list-object-valueMin">${l.comVariant??""}
			</div>
			<div class="setting-list-object-valueLong">${l.description}</div>
			</div>`,++r}i+=`</div>
					</div>
				</div>
				<div class="finishBtnArea">
					<button class="func-button" id="btnFinish">Apply</button>
					<button class="func-button" id="btnCancel">Reset</button>
				</div>
				</div>
			</div>
			<div class="sidebar-container">
				<p>Validation</p>
				<div class="item-condition">
				<label>Conditions:</label>
				<p id="condition-info"></p>
				</div>
				<div class="itemCheckErr-infoArea">
				<label>Error Info:</label>
				<p id="err-info"></p>
				</div>
			</div>
		</div>
		<script nonce="${t}" src="${s}"><\/script>
		</body>
		</html>`}return i}_update(){if(this._panel){let e=this._panel.webview;this._panel.webview.html=this._getHtmlForWebview(e)}}getInstalledPackComponentsByFamily(e){let t=j.getInstance().getInstalledSdkPackagesnfo();for(let i of t)if(i.components){for(let s of i.families)if(s.familyName===e){for(let n of i.components){let a=new Me;a.vendor=i.vendor,a.packRootPath=i.packRootPath,a.packVersion=i.packVersion,a.copy(n),this.projectComponents.push(a)}break}}}getInstalledPackComponentsByDevProcCfg(e,t){let i=j.getInstance().getInstalledSdkPackagesnfo();for(let s of i)if(s.components){for(let n of s.families)if(n.familyName===e){for(let a of s.components){if(a.condition){let l=a.condition;if(l.deviceVendor&&l.deviceVendor!==t.devVendor||l.deviceNames&&!l.deviceNames.includes(t.devName)||l.procNames&&!l.procNames.includes(t.procName)||l.deviceCores&&!l.deviceCores.includes(t.devCore)||l.devDsp&&l.devDsp!==t.devDsp||l.devFpu&&l.devFpu!==t.devFpu||l.devMpu&&l.devMpu!==t.devMpu)break}let r=new Me;r.vendor=s.vendor,r.packRootPath=s.packRootPath,r.packVersion=s.packVersion,r.copy(a),this.projectComponents.push(r)}break}}}},Bt=yt;q(Bt,"instance"),q(Bt,"viewType","mipsstudio.projectcomponentMgrView");var Ts=class{enumName;enumValues;constructor(){this.enumName="",this.enumValues=[]}},Zi=class{minimum;maximum;constructor(){this.minimum=0,this.maximum=0}};function Vo(o){let e="",t=o.length,i=o.indexOf("-");return i!==-1&&i<t-1?(e=o.charAt(0)+o.charAt(i+1),e=e.toUpperCase()):e=o,e}var di=class{name;bitOffset;bitWidth;access;enumeration;writeConstraint;range;nFdvalue;constructor(){this.name="",this.bitOffset=0,this.bitWidth=0,this.access="",this.enumeration=new Ts,this.writeConstraint="",this.nFdvalue=0}From(e){e.name&&(this.name=e.name),e.bitOffset&&(this.bitOffset=e.bitOffset),e.bitWidth&&(this.bitWidth=e.bitWidth),e.access&&(this.access=Vo(e.access)),e.enumeration&&(this.enumeration=e.enumeration),this.writeConstraint=e.writeConstraint,e.range&&(this.range=e.range)}Copy(e){e.name&&(this.name=e.name),e.bitOffset!==void 0&&(this.bitOffset=e.bitOffset),e.bitWidth!==void 0&&(this.bitWidth=e.bitWidth),e.access&&(this.access=Vo(e.access))}},Be=class{name;dim;dimIncrement;dimName;description;addressOffset;size;access;resetValue;resetMask;fields;constructor(){this.name="",this.dim=0,this.dimIncrement=0,this.dimName="",this.description="",this.addressOffset="",this.size=32,this.access="",this.resetValue="",this.resetMask="",this.fields=[]}From(e){if(this.name=e.name,this.dim=e.dim,this.dimIncrement=e.dimIncrement,this.dimName=e.dimName,this.description=e.description,this.addressOffset=e.addressOffset,this.size=e.size,this.access=e.access,this.resetValue=e.resetValue,this.resetMask=e.resetMask,this.fields=[],e.fields){for(let t of e.fields){let i=new di;i.From(t),this.fields.push(i)}this.fields.sort((t,i)=>i.bitOffset-t.bitOffset)}}Copy(e){if(e.name&&(this.name=e.name),e.dim!==void 0&&(this.dim=e.dim),e.dimIncrement!==void 0&&(this.dimIncrement=e.dimIncrement),e.dimName&&(this.dimName=e.dimName),e.description&&(this.description=e.description),e.resetValue!==void 0&&(this.resetValue=re(e.resetValue,0)),e.resetMask!==void 0&&(this.resetMask=re(e.resetMask,0)),e.size&&(this.size=e.size),e.access&&(this.access=e.access),e.addressOffset!==void 0&&(this.addressOffset=re(e.addressOffset,0)),this.fields=[],e.fields?.field)if(Array.isArray(e.fields.field)){for(let t of e.fields.field){let i=new di;i.Copy(t),this.fields.push(i)}this.fields.sort((t,i)=>i.bitOffset-t.bitOffset)}else{let t=new di;t.Copy(e.fields.field),this.fields.push(t)}}},pi=class{name;dim;dimIncrement;dimName;description;addressOffset;registers;clusters;constructor(){this.name="",this.dim=0,this.dimIncrement=0,this.dimName="",this.description="",this.addressOffset="",this.registers=[]}reOrder(){if(this.clusters)for(let e of this.clusters){e.reOrder();let t=parseInt(e.addressOffset,16);if(e.dim)for(let i=0;i<e.dim;++i){let s=t+i*e.dimIncrement;if(e.registers)for(let n of e.registers){let a=new Be;a.From(n),a.name=e.name+"_"+i+"_"+n.name;let r=parseInt(n.addressOffset,16);a.addressOffset=re(s+r,0),this.registers.push(a)}}else if(e.registers)for(let i of e.registers){let s=new Be;s.From(i),s.name=e.name+"_"+i.name;let n=parseInt(i.addressOffset,16);s.addressOffset=re(t+n,0),this.registers.push(s)}}this.registers=this.registers.sort(Bo)}From(e){if(this.name=e.name,this.dim=e.dim,this.dimIncrement=e.dimIncrement,this.dimName=e.dimName,this.description=e.description,this.addressOffset=e.addressOffset,this.registers=[],e.registers)for(let t of e.registers){let i=new Be;i.From(t),this.registers.push(i)}if(e.clusters){this.clusters=[];for(let t of e.clusters){let i=new pi;i.From(t),this.clusters?.push(i)}}}};function Bo(o,e){let t=parseInt(o.addressOffset,16),i=parseInt(e.addressOffset,16);return t-i}var Ki=class{start;end;constructor(){this.start=0,this.end=0}},Rs=class{offset;size;usage;constructor(){this.offset=0,this.size=0,this.usage=""}},ui=class{name;derivedFrom;systemDomain;moduleName;baseAddress;addressOffset;addressBlocks;memoryContinueReadable;memUnReadableRanges;clusters;registers;constructor(){this.name="",this.derivedFrom="",this.systemDomain="",this.moduleName="",this.baseAddress="",this.addressOffset="",this.addressBlocks=[],this.memoryContinueReadable=!0,this.memUnReadableRanges=[],this.registers=[]}reOrder(){if(this.clusters)for(let e of this.clusters){e.reOrder();let t=parseInt(e.addressOffset,16);if(e.dim)for(let i=0;i<e.dim;++i){let s=t+i*e.dimIncrement;if(e.registers)for(let n of e.registers){let a=new Be;a.From(n),a.name=e.name+"_"+i+"_"+n.name;let r=parseInt(n.addressOffset,16);a.addressOffset=re(s+r,0),this.registers.push(a)}}else if(e.registers)for(let i of e.registers){let s=new Be;s.From(i),s.name=e.name+"_"+i.name;let n=parseInt(i.addressOffset,16);s.addressOffset=re(t+n,0),this.registers.push(s)}}this.registers=this.registers.sort(Bo)}From(e){if(this.name=e.name,this.derivedFrom=e.derivedFrom,this.systemDomain=e.systemDomain,this.moduleName=e.moduleName,this.baseAddress=e.baseAddress,e.memoryContinueReadable!==void 0&&(this.memoryContinueReadable=e.memoryContinueReadable),this.memUnReadableRanges=[],e.memUnReadableRanges?.length){for(let t of e.memUnReadableRanges){let i=new Ki;i.start=parseInt(t.start.toString()),i.end=parseInt(t.end.toString()),this.memUnReadableRanges.push(i)}this.memoryContinueReadable=!1}if(this.addressBlocks=[],e.addressBlocks?.length){let t=!1;for(let i of e.addressBlocks){let s=parseInt(i.offset.toString()),n=parseInt(i.size.toString());if(i.usage==="reserved"){let r=new Ki;r.start=s,r.end=r.start+n,this.memUnReadableRanges.push(r),t=!0}let a=new Rs;a.offset=s,a.size=n,a.usage=i.usage,this.addressBlocks.push(a)}t&&(this.memoryContinueReadable=!1)}if(e.addressOffset&&(this.addressOffset=e.addressOffset),this.registers=[],e.registers)for(let t of e.registers){let i=new Be;i.From(t),this.registers.push(i)}if(e.clusters){this.clusters=[];for(let t of e.clusters){let i=new pi;i.From(t),this.clusters?.push(i)}}}Copy(e){if(e.name&&(this.name=e.name),e.baseAddress!==void 0&&(this.baseAddress=re(e.baseAddress)),this.addressOffset="",e.derivedFrom&&(this.derivedFrom=e.derivedFrom),this.registers=[],e.registers?.register)if(Array.isArray(e.registers.register))for(let t of e.registers.register){let i=new Be;i.Copy(t),this.registers.push(i)}else{let t=new Be;t.Copy(e.registers.register),this.registers.push(t)}}},hi=class{name;vendor;version;series;description;cpus;peripherals;constructor(){this.name="",this.vendor="",this.version="",this.series="",this.description="",this.cpus=[],this.peripherals=[]}From(e){if(e.name&&(this.name=e.name),e.description&&(this.description=e.description),e.vendor&&(this.vendor=e.vendor),e.version&&(this.version=e.version),this.peripherals=[],e.peripherals)for(let t of e.peripherals){let i=new ui;if(i.From(t),i.derivedFrom){for(let s of this.peripherals)if(s.name===i.derivedFrom){i.registers=s.registers;break}}this.peripherals.push(i)}}Copy(e){if(e.name&&(this.name=e.name),e.description&&(this.description=e.description),e.vendor&&(this.vendor=e.vendor),e.version&&(this.version=e.version),this.peripherals=[],e.peripherals?.peripheral)if(Array.isArray(e.peripherals.peripheral))for(let t of e.peripherals.peripheral){let i=new ui;if(i.Copy(t),i.derivedFrom){for(let s of this.peripherals)if(s.name===i.derivedFrom){i.registers=s.registers;break}}this.peripherals.push(i)}else{let t=new ui;if(t.Copy(e.peripherals.peripheral),t.derivedFrom){for(let i of this.peripherals)if(i.name===t.derivedFrom){t.registers=i.registers;break}}this.peripherals.push(t)}}};var Fa=T(Ca()),De="Debug",Pe="Release",Qs="build/debug",en="build/release";var Z="${PackRoot}",at="${Pack}",Zs=o=>new Promise(e=>setTimeout(e,o)),Ks=12,lt=4,Ul=100;function bi(o,e){let t=e.indexOf(o);t!==-1?e.splice(t,1):(o=o.replaceAll("\\","/"),t=e.indexOf(o),t!==-1&&e.splice(t,1))}function Xi(o){return Array.from(new Set(o))}function Se(o,e,t){let i=!1;if(o)for(let s in o){let n=o[s],a=!1;if(n.startsWith(Z)){a=!0;let r=n.replaceAll("\\","/");n!==r&&(o[s]=r,i=!0)}else if(y.default.isAbsolute(n)){if(i=!0,e){let r=n.replaceAll("\\","/");r.startsWith(e)&&(a=!0,o[s]=r.replace(e,Z))}if(!a){let r=y.default.relative(t,n);r=r.replaceAll("\\","/"),o[s]=r}}else{let r=n.replaceAll("\\","/");n!==r&&(o[s]=r,i=!0)}}return i}function Vl(o,e){let t=!1;return t=o.includes(e),t||(o=o.replaceAll("\\","/"),e=e.replaceAll("\\","/"),t=o.includes(e)),t}var ya=`\r
LOGSTR = '*incDirList: ' $(INC_PATH)  ' End_incDirList   *srcFileList: ' $(CSOURCES)  ' End_srcFileList  *asmFileList: ' $(ASOURCES) ' End_asmFileList  *ldFileList: ' $(LD_PATH)/link.ld ' End_ldFileList *CFLAG: ' $(CFLAGS) ' End_CFLAG' \r
ProjConf: \r
	@echo  $(LOGSTR) > ./conf.txt \r
`,Bl=`#############################################\r
#        Mips Studio Makefile 				#\r
#############################################\r
\r
# out root\r
BUILD_ROOT = `,Wl=`EXECUTABLE = $(targetname).elf\r
HEXFile    = $(targetname).hex\r
BINARY     = $(targetname).bin\r
DISASS     = $(targetname).dasm\r
MAPFILE    = $(targetname).map\r
Cleartarget  = $(EXECUTABLE)  $(HEXFile)  $(BINARY)  $(DISASS)  $(MAPFILE)\r
`,Hl=`# objects in build/obj
cobjects = $(patsubst %.c,%.o,$(notdir $(CSRC))  )
cobjects += $(patsubst %.*,%.o,$(notdir $(CCSRC))  )
todel_CObjs = $(addprefix $(OBJ_PATH)/, $(cobjects))
depobjs = $(todel_CObjs:.o=.d)
listobjs = $(todel_CObjs:.o=.lst)
asmobjects = $(patsubst %.S,%.o,$(notdir $(ASMSRC))  )
objects = $(cobjects) $(asmobjects)
total_Objs = $(addprefix $(OBJ_PATH)/, $(objects))

ALLINC = $(INC) $(USER_INC)

#define a function compile C files
define COMPILE_C = 
		$(shell $(CC) $(CFlags) -c "$(strip $2)"  -o  $(addprefix $(OBJ_PATH)/, $(strip $1) )  $(ALLINC) )
endef

#define a function compile ASM files
define COMPILE_ASM = 
		@echo  $(CC) $(ASMFlags) -c "$(strip $2)" -o  $(addprefix $(OBJ_PATH)/, $(strip $1) )  $(ALLINC)
		$(shell $(CC) $(ASMFlags) -c "$(strip $2)"  -o  $(addprefix $(OBJ_PATH)/, $(strip $1) )  $(ALLINC) )
endef

#define a function to delete files
define Delete_File = 
		$(shell if [ -e $1 ] ; then rm $1; fi)
endef

#define a function to delete files
define DeleteFileInList = 
		$(foreach f,$(1),$(call Delete_File, $(f) ) )
endef
					
#define a function Link all obj files
define LINK_OUT = 
		@echo 'Building target: $1'
		$(CC) $(LDFlags) -o $1 $2
		$(OD) -d -S -l -t $1 > $(DISASS)
		@echo ' '
		$(SZ) $(EXECUTABLE)
		@echo '******************* Finished Building ******************************'
		@echo ' '
endef
					
#define a function export hex/bin files
define OUT_HEX_BIN = 
		$(OC) -O binary $(EXECUTABLE) $(BINARY)
		@echo ' '
endef
									
.PHONY: CObjs
CObjs : 
		$(foreach temp,$(CSRC),$(call COMPILE_C, $(basename $(notdir $(temp)) ).o, $(temp) ) )
		$(foreach temp,$(ASMSRC),$(call COMPILE_ASM, $(basename $(notdir $(temp)) ).o, $(temp) ) )
		$(call LINK_OUT, $(EXECUTABLE), $(total_Objs) )
		$(call OUT_HEX_BIN)					

.PHONY: out
out: CObjs
		
.PHONY: clean
clean:
		@echo 'Delete target files'
		$(call DeleteFileInList, $(Cleartarget) )
		@echo 'Delete obj files'
		$(call DeleteFileInList, $(total_Objs) )
		$(call DeleteFileInList, $(listobjs) )
		$(call DeleteFileInList, $(depobjs) )

all: out`;function tn(){let o,e=O.window.terminals.findIndex(t=>t.name===Bi);if(e!==-1)o=O.window.terminals[e];else{let t={name:Bi};Ft.platform()==="win32"&&(t.shellPath="PowerShell"),t.env=process.env,o=O.window.createTerminal(t)}return o.show(!0),o}function Xe(o,e){let t=new Array;return e.forEach(i=>{i.indexOf(o)!==0&&t.push(i)}),t}function Pa(o){return/[\u4e00-\u9fa5]+/g.test(o)}var Xs=class{incDirList;incFilelist;ldDirList;cppflag;srcFileList;cppSrcFileList;asmFileList;ldFileList;srcDirList;ccSrcDirLlst;asmDirLlst;excluedPathList;excludeFileList;otherPathList;installedPackRoot;installedCompnents_List;name;projectSetting;constructor(){this.cppflag=!1,this.projectSetting=new zi,this.incDirList=new Array,this.incFilelist=new Array,this.srcDirList=new Array,this.asmDirLlst=new Array,this.ldDirList=new Array,this.ccSrcDirLlst=new Array,this.srcFileList=new Array,this.cppSrcFileList=new Array,this.asmFileList=new Array,this.ldFileList=new Array,this.excluedPathList=new Array,this.excludeFileList=new Array,this.otherPathList=new Array,this.installedPackRoot="",this.installedCompnents_List=[],this.name=""}getinstancecopy(){let e=this.installedPackRoot,t=j.getPackPathRoot();return e=e.replace(t,at),{cppflag:this.cppflag,projectSetting:this.projectSetting.getInstanceCopy(),incFilelist:this.incFilelist,incDirList:this.incDirList,srcDirList:this.srcDirList,asmDirLlst:this.asmDirLlst,ldDirList:this.ldDirList,ccSrcDirLlst:this.ccSrcDirLlst,srcFileList:this.srcFileList,cppSrcFileList:this.cppSrcFileList,asmFileList:this.asmFileList,ldFileList:this.ldFileList,excludeFileList:this.excludeFileList,excluedPathList:this.excluedPathList,otherPathList:this.otherPathList,installedPackRoot:e,installedCompnents_List:this.installedCompnents_List,name:this.name}}copy(e,t){if(e.projectSetting&&this.projectSetting.copy(e.projectSetting),e.cppflag!==void 0&&(this.cppflag=e.cppflag),e.incDirList&&(this.incDirList=e.incDirList),e.incFilelist&&(this.incFilelist=e.incFilelist),e.srcDirList&&(this.srcDirList=e.srcDirList),e.asmDirLlst&&(this.asmDirLlst=e.asmDirLlst),e.ldDirList&&(this.ldDirList=e.ldDirList),e.ccSrcDirLlst&&(this.ccSrcDirLlst=e.ccSrcDirLlst),e.srcFileList&&(this.srcFileList=e.srcFileList),e.cppSrcFileList&&(this.cppSrcFileList=e.cppSrcFileList),e.asmFileList&&(this.asmFileList=e.asmFileList),e.ldFileList&&(this.ldFileList=e.ldFileList),e.excludeFileList&&(this.excludeFileList=e.excludeFileList),e.excluedPathList&&(this.excluedPathList=e.excluedPathList),e.otherPathList&&(this.otherPathList=e.otherPathList),e.installedPackRoot&&(this.installedPackRoot=e.installedPackRoot),e.installedCompnents_List){this.installedCompnents_List.splice(0);for(let i of e.installedCompnents_List){let s=new ii;s.copy(i),this.installedCompnents_List.push(s)}if(this.installedPackRoot===""&&this.installedCompnents_List.length){let i=this.installedCompnents_List[0],s=j.getInstance().getInstalledSdkPackagesnfo();for(let n of s){let a=!1;if(n.components){for(let r of n.components)if(n.vendor===i.vendor&&r.comGroup===i.comGroup&&r.comVersion===i.comVersion&&r.comClass===i.comClass){a=!0,this.installedPackRoot=n.packRootPath;break}}if(a)break}}}this.installedPackRoot&&(this.installedPackRoot=this.installedPackRoot.replaceAll("\\","/")),e.name&&(this.name=e.name)}},Js=class{filePath;errInfo;constructor(e,t){this.filePath=e,this.errInfo=t}},J=class extends Xs{projFsPath;obj_lst;projLocalRelativeDir_usedForProjView;bhaveInit;BuildFailedItemlst_;objFileCacheMap;srcFileDependsMap;ChangedHeaderFilelst_;BuildFilelst_;BuildOkFilelst_;curTimePoint_WhileStartBuild;_buildOption;_toolChainMixName;_gccExePathName;_gnuToolsPath;_configFilePath;_st_dev;constructor(){super(),this.projFsPath="",this.projLocalRelativeDir_usedForProjView="",this.obj_lst=new Array,this.bhaveInit=!1,this.BuildFailedItemlst_=new Array,this.ChangedHeaderFilelst_=[],this.objFileCacheMap=new Map,this.srcFileDependsMap=new Map,this.BuildFilelst_=new Array,this.BuildOkFilelst_=new Array,this.curTimePoint_WhileStartBuild=Date.now(),this._toolChainMixName="",this._configFilePath="",this._buildOption=new Ke}setProjectLocalDir(e){this.projLocalRelativeDir_usedForProjView=e}isPackFile(e){let t=!1;return this.installedPackRoot&&(e.startsWith(this.installedPackRoot)||e.startsWith(Z))&&(t=!0),t}loadDevPerips(e){if(e){if(e.endsWith(".json")){let t=e;if(y.default.isAbsolute(e)||(t=y.default.resolve(this.projFsPath,e)),w.existsSync(t)){let i=w.readFileSync(t,"utf-8");try{let s=oe.jsonc.parse(i);this._st_dev=new hi,this._st_dev.From(s)}catch(s){console.log(s)}}}else e.endsWith(".svd")&&this.loadDevPeripsFromSvdFile(e);I.getInstance().dbgPeripViewProvider?.refreshDevPeripsInfo()}}loadDevPeripsFromSvdFile(e){if(e){let t=e;if(y.default.isAbsolute(t)||(t=y.default.resolve(this.projFsPath,t)),w.existsSync(t)){let i=w.readFileSync(t,"utf-8"),n=new Fa.XMLParser({ignoreAttributes:!1,attributeNamePrefix:""}).parse(i);n.device&&(this._st_dev=new hi,this._st_dev.Copy(n.device))}}}getProjectDevPerip(){return this._st_dev}setConfigFilePath(e){if(this._configFilePath=e,e){let t=y.default.dirname(e);y.default.resolve(this.projFsPath,t)!==this.projFsPath&&this.setProjectLocalDir(t)}}setProjectUserCfg(e){this.projectSetting.curMode=e.curMode,this.projectSetting.debugConfig.curSelectedToolChainMixName=e.toolchainName_debug,this.projectSetting.releaseConfig.curSelectedToolChainMixName=e.toolchainName_release,e.curMode===Pe?(this._toolChainMixName=e.toolchainName_release,this._buildOption=this.projectSetting.releaseConfig.buildOutCfg):(this._toolChainMixName=e.toolchainName_debug,this._buildOption=this.projectSetting.debugConfig.buildOutCfg)}initFromConfigFile(){if(this._configFilePath){let e=y.default.join(this.projFsPath,this._configFilePath);if(w.existsSync(e)){let t=w.readFileSync(e,"utf-8"),i=oe.jsonc.parse(t);this.CopyConfig(i,1)}else O.window.showErrorMessage("Project File: "+this._configFilePath+" is missing!")}}getIncPathList(){return this.incDirList}updateProjectConfigToFile(){if(this._configFilePath){let e=y.default.join(this.projFsPath,this._configFilePath),t=w.readFileSync(e,"utf-8"),i=oe.jsonc.beautify(oe.jsonc.stringify(this.getinstancecopy()));t!==i&&w.writeFileSync(e,i)}}changeProjectSettingActiveMode(e){this.projectSetting.curMode!==e&&(e===De||e===Pe)&&(this.projectSetting.curMode=e,this.onProjectActiveModeChanged_())}getInstalledComponents(){return this.installedCompnents_List}onProjectActiveModeChanged_(){this.onProjectSettingsUpdated(!0)}getActiveProjectSettingItem(){let e=this.projectSetting.debugConfig;return this.projectSetting.curMode===Pe&&(e=this.projectSetting.releaseConfig),e}getProjectSettingItem(e){let t=this.projectSetting.debugConfig;return e===Pe&&(t=this.projectSetting.releaseConfig),t}onProjectSettingsUpdated(e){let t=this.getActiveProjectSettingItem();this._toolChainMixName=t.curSelectedToolChainMixName,this._buildOption=t.buildOutCfg,t.linkerCfg.linkscirptFiles.length===0&&this.ldFileList.length&&(t.linkerCfg.linkscirptFiles=Array.from(this.ldFileList)),t.strDevPeripCfgFilePath&&this.updateDevPeripCfgFilePath(t),e&&(this.objFileCacheMap.clear(),this.updateUseRelativeFsPath()),this.updateProjectConfig_imp(),t.debugCfg.bStartOpenOCDLocal,this.updateDebugConfig_imp(t.debugCfg)}renameFileinProject(e,t){let i=y.default.dirname(e),s=y.default.relative(this.projFsPath,i),n=y.default.join(s,t);if(this.isFileNameExistinProject(n))O.window.showErrorMessage("the same name file is already exist in this Project, Can not rename to the same name!");else{this.addExistFileToProject_imp(n);let a=y.default.resolve(this.projFsPath,n);O.workspace.fs.rename(O.Uri.file(e),O.Uri.file(a))}}renameFolderinProject(e,t){let i=y.default.dirname(e),s=y.default.relative(this.projFsPath,i),n=y.default.join(s,t),a=y.default.relative(this.projFsPath,e),r=this.srcFileList.length;for(let c=0;c<r;++c)this.srcFileList[c].indexOf(a)===0&&(this.srcFileList[c]=this.srcFileList[c].replace(a,n));r=this.srcDirList.length;for(let c=0;c<r;++c)this.srcDirList[c].indexOf(a)===0&&(this.srcDirList[c]=this.srcDirList[c].replace(a,n));r=this.cppSrcFileList.length;for(let c=0;c<r;++c)this.cppSrcFileList[c].indexOf(a)===0&&(this.cppSrcFileList[c]=this.cppSrcFileList[c].replace(a,n));r=this.ccSrcDirLlst.length;for(let c=0;c<r;++c)this.ccSrcDirLlst[c].indexOf(a)===0&&(this.ccSrcDirLlst[c]=this.ccSrcDirLlst[c].replace(a,n));r=this.asmFileList.length;for(let c=0;c<r;++c)this.asmFileList[c].indexOf(a)===0&&(this.asmFileList[c]=this.asmFileList[c].replace(a,n));r=this.asmDirLlst.length;for(let c=0;c<r;++c)this.asmDirLlst[c].indexOf(a)===0&&(this.asmDirLlst[c]=this.asmDirLlst[c].replace(a,n));r=this.ldFileList.length;for(let c=0;c<r;++c)this.ldFileList[c].indexOf(a)===0&&(this.ldFileList[c]=this.ldFileList[c].replace(a,n));r=this.ldDirList.length;for(let c=0;c<r;++c)this.ldDirList[c].indexOf(a)===0&&(this.ldDirList[c]=this.ldDirList[c].replace(a,n));r=this.incDirList.length;for(let c=0;c<r;++c)this.incDirList[c].indexOf(a)===0&&(this.incDirList[c]=this.incDirList[c].replace(a,n));r=this.incFilelist.length;for(let c=0;c<r;++c)this.incFilelist[c].indexOf(a)===0&&(this.incFilelist[c]=this.incFilelist[c].replace(a,n));let l=y.default.resolve(this.projFsPath,n);O.workspace.fs.rename(O.Uri.file(e),O.Uri.file(l)).then(()=>{this.updateProjectConfig_imp(),this.updateProjectView()})}getToolChainsinfo(){this._gnuToolsPath=j.getInstance().getToolChainPathByGroupMixName(this._toolChainMixName),this._gccExePathName=j.getInstance().getToolChainExePathNameByGroupMixName(this._toolChainMixName,"gcc")}UpdateBuildPathInfo_imp(){this.ccSrcDirLlst.length&&(this.cppflag=!0)}onProjectInitFinish(){this.bhaveInit=!0,this.ResetBuildFileList(),this.updateProjectView(),this.checkCreateBuildDir();let e=this.getActiveProjectSettingItem();if(e.strSelectedDeviceName){let t=j.getInstance().getDeviceDDFPath(e.strSelectedDeviceName);t&&(e.strDevPeripCfgFilePath=t)}this.updateDebugConfig_imp(e.debugCfg),e.strDevPeripCfgFilePath&&this.updateDevPeripCfgFilePath(e),this.updateCppExtensionCfg()}updateDevPeripCfgFilePath(e){let t=e.strDevPeripCfgFilePath,i=j.getPackPathRoot();t.startsWith(Z)&&this.installedPackRoot?t=t.replace(Z,this.installedPackRoot):t.startsWith(at)&&i&&(t=t.replace(at,i)),this.loadDevPerips(t),this.installedPackRoot?e.strDevPeripCfgFilePath=e.strDevPeripCfgFilePath.replace(this.installedPackRoot,Z):i&&(e.strDevPeripCfgFilePath=e.strDevPeripCfgFilePath.replace(i,at))}getActiveMode(){return this.projectSetting.curMode}getActiveTargetCoreFlashBaseAddr(){let e=this.getActiveProcCoreCfg();if(e?.memoryMap){for(let t of e.memoryMap)if(t.startup===!0)return t.start}}getActiveProcCoreCfg(){let e=this.getActiveProjectSettingItem();if(e.coreSelectIndex<e.procCoreCfgs.length&&e.coreSelectIndex>=0)return e.procCoreCfgs[e.coreSelectIndex]}getTargetCoreOptionStr(){let e=this.getActiveProjectSettingItem(),t="";return e.coreSelectIndex<e.procCoreCfgs.length&&e.coreSelectIndex>=0&&(t=e.procCoreCfgs[e.coreSelectIndex].getGCCFlag()),t}getAsmCompileOptionStr(){let t=this.getActiveProjectSettingItem().asmCompilerCfg.getAllOptionString();return t=t.replaceAll(Z,this.installedPackRoot),t}getAsmIncOptionStrArr(){let t=this.getActiveProjectSettingItem().asmCompilerCfg.getIncOptionStrArr();for(let i in t)t[i]=t[i].replace(Z,this.installedPackRoot);return t}getCppCompileOptionStr(){let t=this.getActiveProjectSettingItem().cCompilerCfg.getAllOptionString();return t=t.replaceAll(Z,this.installedPackRoot),t}getCppIncOptionStrArr(){let t=this.getActiveProjectSettingItem().cCompilerCfg.getIncOptionStrArr();for(let i in t)t[i]=t[i].replace(Z,this.installedPackRoot);return t}getLinkerOptionStr(){let e=this.getActiveProjectSettingItem();return e.cCompilerCfg.getOptionForLinkUse()+e.linkerCfg.getAllOptionString(!0)}async buildProject_imp(e,t){if(this.bhaveInit&&this._gccExePathName){this.checkCreateBuildDir(),e.info("Now we Compile the Project."),e.show(!0),this.curTimePoint_WhileStartBuild=Date.now();let i=this.srcFileList.length+this.cppSrcFileList.length,s=this.asmFileList.length;e.info("Project total  C/C++ src Files: "+i+". ASM Files: "+s+"."),this.ResetBuildFileList();let n=Ft.cpus.length*2,a=this.BuildFilelst_.length-this.BuildOkFilelst_.length,r=10;if(a!==0){a!==i+s&&e.info("Now Build Changed "+a+" srcFiles (also which include Files Changed).");let l=this.getCppCompileOptionStr(),c=this.getTargetCoreOptionStr(),d=c+l,u=this.getAsmCompileOptionStr(),h=c+u,p=this.getCppIncOptionStrArr(),f=this.getAsmIncOptionStrArr(),b=800;for(let v of this.BuildFilelst_)if(!this.BuildOkFilelst_.includes(v)){let m=y.default.extname(v),_=d,C=p;if(m===".S"&&(_=h,C=f),this.compileSrcFile_objDir_imp(v,_,C,e,!1,!0),++b===n?(await Zs(Ks+4),b=0):await Zs(Ks),this.isFailed())break}}else e.info("No Files have been Changed.");setTimeout(()=>{this.onBuildTimeOutCheck_imp(e,t)},r)}else e.warn("\u8BF7\u5148\u5BF9\u9879\u76EE\u53CA\u5DE5\u5177\u94FE\u505A\u597D\u914D\u7F6E")}onBuildStoped_getSrcDepsCahces(){let e={cwd:this.projFsPath,encoding:"utf8",timeout:0};if(this._gccExePathName){let t=this._gccExePathName;setTimeout(async()=>{let i=this.getCppCompileOptionStr(),s=this.getTargetCoreOptionStr(),n=s+i,a=this.getAsmCompileOptionStr(),r=s+a,l=this.getCppIncOptionStrArr(),c=this.getAsmIncOptionStrArr();for(let d of this.BuildOkFilelst_){let u=y.default.extname(d),h=n,p=l;u===".S"&&(h=r,p=c);let f=d.replaceAll("\\","/"),b=f,v=this.isPackFile(f);v&&(b=f.replace(Z,this.installedPackRoot));let m=v?b:f,_=J.GetOutputChannelInstance();if(!0){let P=`-M ${h}`,D=p.join(""),S=P.replaceAll(D,"").trim().split(/\s+/);for(let x of p){let k=x.indexOf('"');if(k!==-1){let F=x.substring(0,k);F=F.replaceAll(" ","");let E=x.substring(k);F+=E.replaceAll('"',""),S.push(F)}else S.push(x)}S.push(m);let g=ue.execFile(t,S,e,(x,k,F)=>{x?_.error(`Pid:${g.pid}, gcc -M  ${m} Error: 
`+x):k.length&&this.srcFileDependsMap.set(d,k)});await Zs(Ks)}else{let P=`"${this._gccExePathName}" -M ${h} ${m}`,D=ue.exec(P,e,(N,S,g)=>{N?_.error(`Pid:${D.pid}, gcc -M  ${m} Error: 
`+N):S.length&&this.srcFileDependsMap.set(d,S)})}}},30)}}onBuildTimeOutCheck_imp(e,t){if(this.BuildFilelst_.length)if(this.BuildFailedItemlst_.length+this.BuildOkFilelst_.length===this.BuildFilelst_.length)if(this.BuildFailedItemlst_.length==0){t&&setTimeout(()=>{this.linkOutput_objDir_imp(e)},lt);let i=Date.now()-this.curTimePoint_WhileStartBuild;e.info("Project Compile Successed! Compile total used "+i+"ms."),this.ChangedHeaderFilelst_.splice(0)}else e.error("Project Compile Failed!!"),this.BuildFailedItemlst_.forEach(i=>{let s=y.default.resolve(this.projFsPath,i.filePath);e.info("Failed File: "+s);let n=i.errInfo.split(`
`),a="",r="",l=0;for(let c of n)if(c.includes("error"))r+=c.replace(i.filePath,s)+`
`,l=1;else if(c.includes("warning"))a+=c.replace(i.filePath,s)+`
`,l=2;else switch(l){case 1:r+=c+`
`;break;case 2:a+=c+`
`;break}e.error(r),a.length&&e.warn(a)}),this.onBuildStoped_getSrcDepsCahces();else this.isFailed()?e.error("Project Compile Failed. Failed Files maybe more than AlllowMax:6."):setTimeout(()=>{this.onBuildTimeOutCheck_imp(e,t)},Ul)}linkOutput_objDir_imp(e,t){if(this.bhaveInit&&this.obj_lst.length&&this._gccExePathName){let i=y.default.resolve(this.projFsPath,this._buildOption.outPath);Pa(i)&&e.warn("\u8BF7\u6CE8\u610F\uFF0C\u8DEF\u5F84\u4E2D\u542B\u6709\u4E2D\u6587\u5B57\u7B26\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u65E0\u6CD5\u8C03\u8BD5!");let s=this._buildOption.outNamePrefix+this._buildOption.outName,n=y.default.join(i,s);if(i?.length&&s){let a=y.default.join(this.projFsPath,this.getCActiveModeObjectDir()),r=y.default.join(a,"temp"),l=y.default.relative(r,n);n=y.default.relative(a,n);let c=this.getTargetCoreOptionStr(),d=this.getActiveProjectSettingItem().linkerCfg,u="",h="",p=c,f="",b="";d.linkscirptFiles.forEach(g=>{let x=y.default.resolve(this.projFsPath,g),k=y.default.relative(a,x),F=y.default.relative(r,x);u+=" -T "+k,f+=" -T "+F;let E=y.default.dirname(x),L=y.default.relative(a,E),$=y.default.relative(r,E);h+=" -L "+L,b+=" -L "+$}),c+=u,c+=h,p+=f,p+=b,this.obj_lst.forEach(g=>{c+=" "+g});let v=" -o "+n+"."+this._buildOption.outFileExt;c+=v;let m=" -o "+l+"."+this._buildOption.outFileExt;p+=m;let _=this.getLinkerOptionStr();if(_.includes("-Wl,-Map=${outName}.map")){let g=_.replace("${outName}",n);c+=g,p+=g}else c+=_,p+=_;let C={cwd:a,encoding:"utf8",maxBuffer:8192*1024,detached:!0,timeout:0},P=this.curTimePoint_WhileStartBuild,D=!0,N=!1,S=this._gccExePathName;if(c.length>10240&&(N=!0),!N)if(D){let g=c.trim().replaceAll('"',"").split(/\s+/);if(t){let x='"'+this._gccExePathName+'" '+c;e.info(`Now we link use command: 
`+x)}try{let x=ue.execFile(S,g,C,function(k,F,E){if(k)e.error(`Project LinkOutput  Error: 
`+k);else{if(x.exitCode===0){let L=Date.now()-P;e.info("Project LinkOutput Success! Build total used "+L+"ms.");let $=y.default.join(a,n);I.getCurrentProjManager()?.handleOutputElf_imp($)}else e.info(`Project Link exitCode  ${x.exitCode}.`);E.length?e.warn(`Link out stderr:
${E}`):F.length&&e.info(`Link out stdout:
${F}`)}})}catch(x){e.error("link Failed"+x),N=!0}}else{let g='"'+this._gccExePathName+'" '+c,x=Ft.platform(),k={cwd:a,encoding:"utf8",maxBuffer:4096*4096,timeout:0,detached:!0,shell:"powershell.exe"},F;x==="win32"&&c.length>8e3?(F=k,g=`&"${this._gccExePathName}"  ${c}`,t&&e.info(`Now we link use command in PS: 
 ${g}`)):(F=C,t&&e.info(`Now we link use command: 
`+g));try{let E=ue.exec(g,F,function(L,$,V){if(L)e.error(`Project LinkOutput  Error: 
`+L);else{if(E.exitCode===0){let G=Date.now()-P;e.info("Project LinkOutput Success! Build total used "+G+"ms."),I.getCurrentProjManager()?.handleOutputElf_imp(n)}else e.info(`Project Link exitCode  ${E.exitCode}.`);V.length?e.warn(`Link out stderr:
${V}`):$.length&&e.info(`Link out stdout:
${$}`)}})}catch(E){e.error("link Failed"+E),N=!0}}if(N){if(!w.existsSync(r))try{w.mkdirSync(r)}catch(E){e.error("mkdirSync Failed"+E)}let g=1;this.obj_lst.forEach(E=>{let L=g+".o",$=y.default.join(r,L),V=y.default.join(a,E);try{w.copyFileSync(V,$)}catch(G){e.error("copyFileSync Failed"+G)}p+=" "+L,g=g+1});let x={cwd:r,encoding:"utf8",maxBuffer:8192*1024,detached:!0,timeout:0},k=p.trim().replaceAll('"',"").split(/\s+/),F=ue.execFile(S,k,x,function(E,L,$){if(E)e.error(`Project LinkOutput  Error: 
`+E);else{if(F.exitCode===0){let V=Date.now()-P;e.info("Project LinkOutput Success! Build total used "+V+"ms.");let G=y.default.join(r,l);I.getCurrentProjManager()?.handleOutputElf_imp(G)}else e.info(`Project Link exitCode  ${F.exitCode}.`);$.length?e.warn(`Link out stderr:
${$}`):L.length&&e.info(`Link out stdout:
${L}`)}})}}else e.warn("outdir or outfilename is wrong, please check!")}}handleOutputElf_imp(e){if(this._buildOption.outType!=="elf"){this.onBuildStoped_getSrcDepsCahces();return}let t="."+this._buildOption.outFileExt,i=J.GetOutputChannelInstance(),s=j.getInstance().getToolChainExePathNameByGroupMixName(this._toolChainMixName,"objcopy"),n=this._buildOption,a=!0;e=y.default.relative(this.projFsPath,e);let r={cwd:this.projFsPath,encoding:"utf8",timeout:0};if((n.bOUtHexFile||n.bOutBinFile)&&s&&w.existsSync(s)&&w.existsSync(s)){if(n.bOutBinFile)if(a){let c=("-O  binary "+e+t+" "+e+".bin").replaceAll('"',"").split(/\s+/);setTimeout(()=>{ue.execFile(s,c,r,(d,u)=>{if(d)i.error(`objcopy bin Failed: 
`+d);else{let h=u?`objcopy bin Success.
`+u:"objcopy bin Success.";i.info(h)}})},lt)}else{let l='"'+s+'" -O  binary '+e+t+" "+e+".bin";setTimeout(()=>{ue.exec(l,r,(c,d)=>{if(c)i.error(`objcopy bin Failed: 
`+c);else{let u=d?`objcopy bin Success.
`+d:"objcopy bin Success.";i.info(u)}})},lt)}if(n.bOUtHexFile){let l=this.getActiveTargetCoreFlashBaseAddr();if(l)if(a){let d=("-O  ihex --change-addresses "+l+" "+e+t+" "+e+".hex").replaceAll('"',"").split(/\s+/);setTimeout(()=>{ue.execFile(s,d,r,(u,h)=>{if(u)i.error(`objcopy hex Failed: 
`+u);else{let p=h?`objcopy hex Success.
`+h:"objcopy hex Success.";i.info(p)}})},lt)}else{let c='"'+s+'" -O  ihex --change-addresses '+l+" "+e+t+" "+e+".hex";setTimeout(()=>{ue.exec(c,r,(d,u)=>{if(d)i.error(`objcopy hex Failed: 
`+d);else{let h=u?`objcopy hex Success.
`+u:"objcopy hex Success.";i.info(h)}})},lt)}else i.warn("Active TargetCore MemoryFlash BaseAddr is undefined.")}}if(n.bShowSizeInfo){let l=j.getInstance().getToolChainExePathNameByGroupMixName(this._toolChainMixName,"size");if(l&&w.existsSync(l))if(a){let d=[e+t];setTimeout(()=>{ue.execFile(l,d,r,(u,h)=>{u?i.error(`Get size info Failed: 
`+u):i.info(`Size Infomation.
`+h)})},lt)}else{let c='"'+l+'" '+e+t;setTimeout(()=>{ue.exec(c,r,(d,u)=>{d?i.error(`Get size info Failed: 
`+d):i.info(`Size Infomation.
`+u)})})}}if(n.bOutDasmFile){let l=j.getInstance().getToolChainExePathNameByGroupMixName(this._toolChainMixName,"objdump");if(l&&w.existsSync(l)){let c="";n.objdumpCfg.bDisplaySource&&(c+=" -S "),n.objdumpCfg.bDisplayAllHeaders&&(c+=" -x "),n.objdumpCfg.bDemangel&&(c+=" -C "),n.objdumpCfg.bDisplayDebuginfo&&(c+=" -g "),n.objdumpCfg.bDisassemble&&(c+=" -d "),n.objdumpCfg.bDisplayFileHeaders&&(c+=" -f "),n.objdumpCfg.bDisplayLineNumbers&&(c+=" -l "),n.objdumpCfg.bDisplayRelocationInfo&&(c+=" -r "),n.objdumpCfg.bDisplaySymbols&&(c+=" -t "),n.objdumpCfg.bWideLines&&(c+=" -w ");let d='"'+l+'"'+c+e+t+" > "+e+".list";setTimeout(()=>{ue.exec(d,r,(u,h)=>{if(u)i.error(`objdump Failed: 
`+u);else{let p=h?`objdump Success.
`+h:"objdump Success.";i.info(p)}})},15)}}this.onBuildStoped_getSrcDepsCahces()}compileSrcFile(e){this.getToolChainsinfo();let t=J.GetOutputChannelInstance();if(t.show(!0),this._gccExePathName&&w.existsSync(this._gccExePathName)){let i=y.default.extname(e),s=this.getCppCompileOptionStr(),n=this.getTargetCoreOptionStr()+s,a=this.getCppIncOptionStrArr();if(i===".S"){let r=this.getAsmCompileOptionStr();n=this.getTargetCoreOptionStr()+r,a=this.getAsmIncOptionStrArr()}this.compileSrcFile_objDir_imp(e,n,a,t,!0,!1,!0)}else t.warn("Please configure the tool chain first!  \u8BF7\u5148\u5BF9\u5DE5\u5177\u94FE\u505A\u597D\u914D\u7F6E")}projectCompileOnly(){this.getToolChainsinfo();let e=J.GetOutputChannelInstance();e.clear(),e.show(!0),this._gccExePathName&&w.existsSync(this._gccExePathName)?this.buildProject_imp(e,!1):e.warn("Please configure the tool chain first!  \u8BF7\u5148\u5BF9\u5DE5\u5177\u94FE\u505A\u597D\u914D\u7F6E")}projectlinkOnly(){this.getToolChainsinfo();let e=J.GetOutputChannelInstance();e.clear(),e.show(!0),this._gccExePathName&&w.existsSync(this._gccExePathName)?this.linkOutput_objDir_imp(e,!0):e.warn("Please configure the tool chain first!  \u8BF7\u5148\u5BF9\u5DE5\u5177\u94FE\u505A\u597D\u914D\u7F6E")}projectBuild(){this.getToolChainsinfo();let e=J.GetOutputChannelInstance();e.clear(),this.delOutputFiles(),e.info("Now Remove all output Files of the project."),this._gccExePathName&&w.existsSync(this._gccExePathName)?this.buildProject_imp(e,!0):e.warn("Please configure the tool chain first!  \u8BF7\u5148\u5BF9\u5DE5\u5177\u94FE\u505A\u597D\u914D\u7F6E")}getCActiveModeObjectDir(){let e="objects/debug";return this.projectSetting.curMode===Pe&&(e="objects/release"),this.projLocalRelativeDir_usedForProjView&&(e=y.default.join(this.projLocalRelativeDir_usedForProjView,e)),e}compileSrcFile_objDir_imp(e,t,i,s,n,a,r){let l=this.getCActiveModeObjectDir();e=e.replaceAll("\\","/");let c=e,d=this.projFsPath,u=this.isPackFile(e);if(y.default.isAbsolute(e)?u?e=e.replace(this.installedPackRoot,Z):e=y.default.relative(d,e):u?c=e.replace(Z,this.installedPackRoot):(c=y.default.resolve(d,e),c=c.replaceAll("\\","/")),this._gccExePathName){let h=this.getFileBaseName_impl(e),p=e;u&&(p=c);let f=h.lastIndexOf(".");f!==-1&&(h=h.substring(0,f));let b=h+".o",v=y.default.join(l,b),m=y.default.dirname(v),_=y.default.resolve(this.projFsPath,m);if(n&&!w.existsSync(_)){let g=m.split(y.default.sep),x=g.length,k=this.projFsPath;for(let F=0;F<x;++F)if(k=y.default.join(k,g[F]),!w.existsSync(k))try{w.mkdirSync(k)}catch{s.error("mkdir Failed"+k)}}let C=y.default.join(l,h);a&&this.obj_lst.push(b),t.includes("${outName}")&&(t=t.replace("${outName}",C));let P={cwd:this.projFsPath,encoding:"utf8",timeout:0};v=v.replaceAll("\\","/");let D=v.substring(0,v.length-1)+"ii",N=`${t}  -c -o  ${v} `;if(t.includes(" -E ")&&(N=`${t}  -c -o ${D} `),!0){let g=i.join(""),k=N.replaceAll(g,"").trim().split(/\s+/);for(let E of i){let L=E.indexOf('"');if(L!==-1){let $=E.substring(0,L);$=$.replaceAll(" ","");let V=E.substring(L);$+=V.replaceAll('"',""),k.push($)}else k.push(E)}k.push(p);let F=this._gccExePathName;r&&s.info(`Now we compile use command: 
"${this._gccExePathName}"  ${N} ${p}`),setTimeout(()=>{let E=ue.execFile(F,k,P,(L,$,V)=>{if(L)s.error(`Pid:${E.pid}, compileSrcFile ${e} Error: 
`+L),this.UpdateBuildFailedFile(e,L.message);else{s.info(`Pid:${E.pid}, compileSrcFile ${e} Success.`);let G=!1;if(V.length){let Y=V.replaceAll(e,c);s.warn(`compileSrcFile ${e} out:
${Y}`),G=V.includes("error")||V.includes("Error")}if($.length){let Y=V.replaceAll(e,c);s.info(`compileSrcFile ${e} out:
${Y}`)}G?this.UpdateBuildFailedFile(e,V):this.UpdateBuildOkFile(e,u)}})},lt)}else{let g=`"${this._gccExePathName}"  ${N} ${p}`,x=Ft.platform(),k={cwd:this.projFsPath,encoding:"utf16",timeout:0},F={cwd:this.projFsPath,encoding:"utf8",timeout:0,shell:"powershell.exe"},E=P;x==="win32"&&(N.length>8e3?(E=F,g=`&"${this._gccExePathName}"  ${N} ${p}`):E=k),r&&s.info(g),setTimeout(()=>{let L=ue.exec(g,E,($,V,G)=>{$?(s.error(`Pid:${L.pid}, compileSrcFile ${p} Error: 
`+$),this.UpdateBuildFailedFile(e,$.message)):(s.info(`Pid:${L.pid}, compileSrcFile ${p} Success.`),G.length?s.warn(`compileSrcFile ${p} out:
${G}`):(V.length&&s.info(`compileSrcFile ${p} out:
${V}`),this.UpdateBuildOkFile(e,u)))})},lt)}}}static GetOutputChannelInstance(){return j.getInstance().GetOutputChannelInstance()}CopyConfig(e,t){super.copy(e,t),this.updateUseRelativeFsPath(),this.name.length===0&&(this.name=y.default.basename(this.projFsPath))}isHaveInit(){return this.bhaveInit}searchInProject(){let e=this.incFilelist.concat(this.srcFileList).toString();O.commands.executeCommand("workbench.action.findInFiles",{filesToInclude:e})}updateUseRelativeFsPath(){let e=!1,t=j.getPackPathRoot();this.installedPackRoot.startsWith(at)?this.installedPackRoot=this.installedPackRoot.replace(at,t):e=!0,Se(this.projectSetting.debugConfig.asmCompilerCfg.includeFiles,this.installedPackRoot,this.projFsPath)&&(e=!0),Se(this.projectSetting.debugConfig.asmCompilerCfg.includePaths,this.installedPackRoot,this.projFsPath)&&(e=!0),Se(this.projectSetting.debugConfig.cCompilerCfg.includeFiles,this.installedPackRoot,this.projFsPath)&&(e=!0),Se(this.projectSetting.debugConfig.cCompilerCfg.includePaths,this.installedPackRoot,this.projFsPath)&&(e=!0),Se(this.projectSetting.releaseConfig.asmCompilerCfg.includeFiles,this.installedPackRoot,this.projFsPath)&&(e=!0),Se(this.projectSetting.releaseConfig.asmCompilerCfg.includePaths,this.installedPackRoot,this.projFsPath)&&(e=!0),Se(this.projectSetting.releaseConfig.cCompilerCfg.includeFiles,this.installedPackRoot,this.projFsPath)&&(e=!0),Se(this.projectSetting.releaseConfig.cCompilerCfg.includePaths,this.installedPackRoot,this.projFsPath)&&(e=!0),Se(this.incDirList,this.installedPackRoot,this.projFsPath)&&(e=!0);let i=this.incFilelist.length;this.incFilelist=Xi(this.incFilelist),i!==this.incFilelist.length&&(e=!0),Se(this.incFilelist,this.installedPackRoot,this.projFsPath)&&(e=!0),i=this.srcFileList.length,this.srcFileList=Xi(this.srcFileList),i!==this.srcFileList.length&&(e=!0),Se(this.srcFileList,this.installedPackRoot,this.projFsPath)&&(e=!0),Se(this.cppSrcFileList,this.installedPackRoot,this.projFsPath)&&(e=!0),i=this.asmFileList.length,this.asmFileList=Xi(this.asmFileList),i!==this.asmFileList.length&&(e=!0),Se(this.asmFileList,this.installedPackRoot,this.projFsPath)&&(e=!0),i=this.ldFileList.length,this.ldFileList=Xi(this.ldFileList),i!==this.ldFileList.length&&(e=!0),Se(this.ldFileList,this.installedPackRoot,this.projFsPath)&&(e=!0);let s=this.projectSetting.debugConfig.buildOutCfg;this.projectSetting.curMode===Pe&&(s=this.projectSetting.releaseConfig.buildOutCfg),s.outPath&&y.default.isAbsolute(s.outPath)&&(s.outPath=y.default.relative(this.projFsPath,s.outPath));let n=this.projectSetting.debugConfig.linkerCfg;this.projectSetting.curMode===Pe&&(n=this.projectSetting.releaseConfig.linkerCfg);for(let r in n.linkscirptFiles){let l=n.linkscirptFiles[r];y.default.isAbsolute(l)&&(l=y.default.relative(this.projFsPath,l),e=!0);let c=l.replaceAll("\\","/");c!==l&&(n.linkscirptFiles[r]=c,e=!0)}Se(this.otherPathList,this.installedPackRoot,this.projFsPath)&&(e=!0);let a=this.incFilelist.concat(this.srcFileList.concat(this.asmFileList).concat(this.ldFileList).concat(this.cppSrcFileList));for(let r in this.otherPathList){let l=this.otherPathList[r];if(l){for(let c of a)if(Vl(c,l)){this.otherPathList[r]="",e=!0;break}}}this.otherPathList=this.otherPathList.filter(r=>r&&r.trim()),e&&this.updateProjectConfigToFile()}updateProjectView(){let e=this.incFilelist.concat(this.srcFileList.concat(this.asmFileList).concat(this.ldFileList).concat(this.cppSrcFileList));I.getInstance().updateProjctView(this.incDirList,e,this.projFsPath,this.projLocalRelativeDir_usedForProjView,this.installedPackRoot,this.otherPathList)}getGccLibInc_i(e){let t={bFind:!1,incPath:""},i=w.readdirSync(e,{encoding:"utf-8",withFileTypes:!0});for(let s of i)if(s.isDirectory()){let n=y.default.join(e,s.name);if(s.name==="include"){t.bFind=!0,t.incPath=n.replaceAll("\\","/");break}else if(t=this.getGccLibInc_i(n),t.bFind)break}return t}getGccIncPath(e){let t=new Array,i=w.readdirSync(e,{encoding:"utf-8",withFileTypes:!0});for(let s of i)if(s.isDirectory()){if(s.name.includes("mips-")){let n=y.default.join(e,s.name);if(n=y.default.join(n,"include"),n=n.replaceAll("\\","/"),w.existsSync(n))if(t.length===0)t.push(n);else{let a=t[0];t[0]=n,t.push(a)}}else if(s.name==="lib"){let n=y.default.join(e,s.name);n=y.default.join(n,"gcc");let a=this.getGccLibInc_i(n);a.bFind&&t.push(a.incPath)}}return t}updateCppPropertiesJson(){let e=this.projFsPath,t=new Array,i=j.getInstance().getToolChainExePathNameByGroupMixName(this._toolChainMixName,"gcc")?.replaceAll("\\","/");for(let d of this.incDirList){let u=d;u.startsWith(Z)?u=u.replaceAll(Z,this.installedPackRoot):y.default.isAbsolute(u)||(u="${workspaceFolder}/"+u.replaceAll("\\","/")),t.includes(u)||t.push(u)}let s=this.getActiveProjectSettingItem();for(let d of s.cCompilerCfg.includePaths){let u=d;u.startsWith(Z)?u=u.replaceAll(Z,this.installedPackRoot):y.default.isAbsolute(u)||(u="${workspaceFolder}/"+u.replaceAll("\\","/")),t.includes(u)||t.push(u)}let n=Ft.platform().toString();n=n.replace(n[0],n[0].toUpperCase());let a=s.cCompilerCfg.definedSymbols,r=new Array;for(let d of this.srcFileList){let u=y.default.dirname(d);u.startsWith(Z)&&this.installedPackRoot?(u=u.replace(Z,this.installedPackRoot),r.includes(u)||r.push(u)):u.startsWith("../")&&(r.includes(u)||r.push(u))}let l=y.default.join(e,".vscode"),c=y.default.join(l,"c_cpp_properties.json");if(w.existsSync(c)){let d=w.readFileSync(c),u=d.toString();try{let h=oe.jsonc.parse(d.toString());if(h&&h.configurations){for(let f in h.configurations)if(h.configurations[f].name===n){h.configurations[f].intelliSenseMode="windows-gcc-arm";let b=h.configurations[f].compilerPath;h.configurations[f].compilerPath=i??b,h.configurations[f].includePath=t,h.configurations[f].defines=a,h.configurations[f].browse={path:r},h.configurations[f].cStandard=s.cCompilerCfg.cStd}let p=oe.jsonc.beautify(oe.jsonc.stringify(h));p!==u&&w.writeFileSync(c,p)}}catch{O.window.showErrorMessage("c_cpp_properties.json maybe have errors, Please check!")}}else if(!w.existsSync(l))O.workspace.fs.createDirectory(O.Uri.file(l)).then(()=>{let d={version:4,enableConfigurationSquiggles:!0,configurations:[{name:n,intelliSenseMode:"windows-gcc-arm",compilerPath:i,includePath:t,defines:a,browse:{path:r},cStandard:s.cCompilerCfg.cStd}]},u=oe.jsonc.beautify(oe.jsonc.stringify(d));w.writeFileSync(c,u)});else{let d={version:4,enableConfigurationSquiggles:!0,configurations:[{name:n,intelliSenseMode:"windows-gcc-arm",compilerPath:i,includePath:t,defines:a,browse:{path:r},cStandard:s.cCompilerCfg.cStd}]},u=oe.jsonc.beautify(oe.jsonc.stringify(d));w.writeFileSync(c,u)}}updateClangdSettings(){let e=this.projFsPath,t=y.default.join(e,".vscode"),i=y.default.join(t,"settings.json");if(w.existsSync(i)){let s=w.readFileSync(i),n=s.toString();try{let a=oe.jsonc.parse(s.toString());if(a){a["C_Cpp.codeAnalysis.clangTidy.checks.enabled"]=["clang-analyzer-*","cppcoreguidelines-*"],a["C_Cpp.codeAnalysis.clangTidy.enabled"]=!0,a["C_Cpp.codeAnalysis.clangTidy.args"]=["--extra-arg-before=--target=mips"];let r=["cppcoreguidelines-avoid-magic-numbers","cppcoreguidelines-macro-to-enum","cppcoreguidelines-avoid-non-const-global-variables"];if(a["C_Cpp.codeAnalysis.clangTidy.checks.disabled"]){let c=a["C_Cpp.codeAnalysis.clangTidy.checks.disabled"];if(c instanceof Array)for(let d of r)c.includes(d)||c.push(d);else a["C_Cpp.codeAnalysis.clangTidy.checks.disabled"]=r}else a["C_Cpp.codeAnalysis.clangTidy.checks.disabled"]=r;let l=oe.jsonc.beautify(oe.jsonc.stringify(a));l!==n&&w.writeFileSync(i,l)}}catch{O.window.showErrorMessage("settings.json maybe have errors, Please check!")}}else{let s={"C_Cpp.codeAnalysis.clangTidy.checks.enabled":["clang-analyzer-*","cppcoreguidelines-*"],"C_Cpp.codeAnalysis.clangTidy.enabled":!0,"C_Cpp.codeAnalysis.clangTidy.args":["--extra-arg-before=--target=mips"],"C_Cpp.codeAnalysis.clangTidy.checks.disabled":["cppcoreguidelines-avoid-magic-numbers","cppcoreguidelines-macro-to-enum","cppcoreguidelines-avoid-non-const-global-variables"]};if(!w.existsSync(t))O.workspace.fs.createDirectory(O.Uri.file(t)).then(()=>{let n=oe.jsonc.beautify(oe.jsonc.stringify(s));w.writeFileSync(i,n)});else{let n=oe.jsonc.beautify(oe.jsonc.stringify(s));w.writeFileSync(i,n)}}}dispose(){}getAbsoluteExcludeList(){let e=new Array;for(let i of this.excluedPathList)y.default.isAbsolute(i)?e.push(i):e.push(y.default.resolve(this.projFsPath,i));let t=new Array;for(let i of this.excludeFileList)y.default.isAbsolute(i)?t.push(i):t.push(y.default.resolve(this.projFsPath,i));return{pathList:e,fileList:t}}excludeDirFromProject(e){this.rmDirFromProj(e)}async addExistFilesToProject(){if(I.getInstance().getCurrentSolutionPath())if(!this.isHaveInit())O.window.showInformationMessage("Please create Project First!");else{let t=await O.window.showOpenDialog({canSelectMany:!0,canSelectFiles:!0,canSelectFolders:!1,openLabel:"Add Existed Files to Project"});t&&t.length>0&&(t.forEach(i=>{let s=i.fsPath;this.addExistFileToProject_imp(s)}),this.updateProjectConfig_imp(),this.updateProjectView())}else O.window.showInformationMessage("Please create Project Solution First!")}async addFolderRecursionAllFilesToProject(){if(I.getInstance().getCurrentSolutionPath())if(!this.isHaveInit())O.window.showInformationMessage("Please create Project First!");else{let t=await O.window.showOpenDialog({canSelectMany:!1,canSelectFiles:!1,canSelectFolders:!0,openLabel:"Add All Existed Files to Project Recursional"});if(t&&t.length>0){let i=t[0].fsPath;this.addDirFileToProject(i),this.updateProjectConfig_imp(),this.updateProjectView()}}else O.window.showInformationMessage("Please create Project Solution First!")}addExistFileToProject_imp(e,t){let i=y.default.dirname(e),s=y.default.extname(e).toLowerCase();if(!t){let n=i.replaceAll("\\","/");t=this.isPackFile(n)}this.handleFileAddedToProject_imp(s,i,e,t)}AfterInstalledComponent(e){if(e.comClass==="Device"&&e.comGroup==="HAL Drivers"&&e.comSubgroup){let t="HAL_"+e.comSubgroup.toUpperCase()+"_MODULE_ENABLED",i="// #define "+t,s="//#define "+t,n="#define "+t,a="include/mp32gm51_components.h",r=this.getProjectLocalDir(),l=y.default.join(r,a);if(w.existsSync(l)){let c=w.readFileSync(l,{encoding:"utf8"});c.includes(i)?(c=c.replace(i,n),w.writeFileSync(l,c)):c.includes(s)&&(c=c.replace(s,n),w.writeFileSync(l,c))}}}installComponent(e){let t=!1;if(e.packRootPath){let i=e.packRootPath;t=!0;let s=J.GetOutputChannelInstance();this.installedPackRoot=i.replaceAll("\\","/");for(let n of e.files){let r=y.default.join(i,n.name).replaceAll("\\","/");if(n.attribute&&["config","template"].includes(n.attribute)){let l=n.name.replaceAll("\\","/");if(n.attribute==="config"){let c="/source/templates/",d=l.lastIndexOf("/source/templates/");d!==-1&&(l="device/source/"+l.substring(d+c.length)),l=l.replaceAll("projects/templates/",""),l=l.replaceAll("drivers/hal_driver/",""),l=l.replaceAll("_template.",".")}else n.attribute==="template"&&(l=l.replaceAll("projects/templates/",""),l=l.replaceAll("drivers/hal_driver/",""),l=l.replaceAll("drivers/device/","device/"),l=l.replaceAll("templates/",""),l=l.replaceAll("_template.","."));if(!this.copyFileToProject_imp(r,l)){t=!1,s.error("installComponent failed on copy "+r+" to "+l);break}}else if(n.category==="include")this.addIncPath(r,!0);else if(n.category==="linkerScript"){let l=n.name.replaceAll("\\","/");l=y.default.basename(l);let c="ldscripts/"+l;if(!this.copyFileToProject_imp(r,c)){t=!1,s.error("installComponent failed on copy "+r+" to "+c);break}if(l==="link.ld"){let d=this.getActiveProjectSettingItem().linkerCfg,u=this.projLocalRelativeDir_usedForProjView+"/"+c;d.linkscirptFiles.includes(u)||d.linkscirptFiles.push(u)}}else this.addExistFileToProject_imp(r,!0)}if(t){let n=new ii;if(n.copy(e),this.installedCompnents_List.push(n),e.vendor==="CIP"&&e.comGroup==="Startup"){let a=this.getActiveProjectSettingItem().asmCompilerCfg;a.definedSymbols.includes("MP32GM51Fxx")||a.definedSymbols.push("MP32GM51Fxx");let r=this.getActiveProjectSettingItem().cCompilerCfg;r.definedSymbols.includes("MP32GM51Fxx")||r.definedSymbols.push("MP32GM51Fxx"),r.definedSymbols.includes("USE_HAL_DRIVER")||r.definedSymbols.push("USE_HAL_DRIVER")}this.updateProjectConfig_imp(),this.updateProjectView(),this.checkCreateBuildDir()}}return t}unInstallComponent(e){let t=e.packRootPath;if(t)for(let s of e.files){let a=y.default.join(t,s.name).replaceAll("\\","/");if(s.category==="include")this.removeIncPath(a);else{let r=a;if(s.attribute&&["config","template"].includes(s.attribute)){r=s.name.replaceAll("\\","/");let c="templates/",d=r.indexOf(c);d!==-1&&(r=r.substring(d+c.length))}this.removeFileFromProject(r)}}let i=this.installedCompnents_List.length;for(let s=0;s<i;++s)if($s(this.installedCompnents_List[s],e)){this.installedCompnents_List.splice(s,1);break}if(e.comClass==="Device"&&e.comGroup==="HAL Drivers"&&e.comSubgroup){let s="HAL_"+e.comSubgroup.toUpperCase()+"_MODULE_ENABLED",n="// #define "+s,a="#define "+s,r="include/mp32gm51_components.h",l=this.getProjectLocalDir(),c=y.default.join(l,r);if(w.existsSync(c)){let d=w.readFileSync(c,{encoding:"utf8"});d.includes(a)&&(d=d.replace(a,n),w.writeFileSync(c,d))}}this.installedCompnents_List.length===0&&(this.installedPackRoot=""),this.updateProjectConfig_imp(),this.updateProjectView()}addExistFileToProject(e){I.getInstance().getCurrentSolutionPath()&&(this.isHaveInit()?(this.addExistFileToProject_imp(e),this.updateProjectConfig_imp(),this.updateProjectView()):O.window.showInformationMessage("Please create Project First!"))}copyFileToProject_imp(e,t){let i=!1;if(this.isHaveInit()){let s=this.getProjectLocalDir(),n=y.default.join(s,t),a=y.default.dirname(n),r=J.GetOutputChannelInstance(),l=y.default.relative(s,a);if(!w.existsSync(a)){let c=l.split(y.default.sep),d=c.length,u=s;for(let h=0;h<d;++h)if(u=y.default.join(u,c[h]),!w.existsSync(u))try{w.mkdirSync(u)}catch{r.error("copyFileToProject_imp mkdir: "+u+" Failed.")}}try{w.copyFileSync(e,n);try{w.chmodSync(n,438)}catch{r.error("chmodSync Failed on "+n)}this.addExistFileToProject_imp(n),i=!0}catch{r.error("copyFileToProject_imp copyFile "+n+" Failed.")}}return i}removeFileFromProject(e){if(this.isHaveInit())if(y.default.isAbsolute(e)){e.startsWith(this.installedPackRoot)&&(e=e.replace(this.installedPackRoot,Z));let t=y.default.extname(e).toLowerCase();e=e.replaceAll("\\","/"),this.handleOnFileDeled_imp(t,e)}else this.removeFileFromProject_imp(e)}removeFileFromProject_imp(e){let t=this.projFsPath,i=y.default.join(t,e);if(w.existsSync(i)){let s=y.default.extname(i).toLowerCase();this.handleOnFileDeled_imp(s,i)}}getProjectLocalDir(){let e=this.projFsPath;return this.projLocalRelativeDir_usedForProjView&&(e=y.default.resolve(this.projFsPath,this.projLocalRelativeDir_usedForProjView)),e}addIncPath_impl(e){let t=e.replaceAll("\\","/");this.isPackFile(t)||y.default.isAbsolute(t)&&(t=y.default.relative(this.projFsPath,e)),this.projectSetting.debugConfig.asmCompilerCfg.includePaths.includes(t)||this.projectSetting.debugConfig.asmCompilerCfg.includePaths.push(t),this.projectSetting.debugConfig.cCompilerCfg.includePaths.includes(t)||this.projectSetting.debugConfig.cCompilerCfg.includePaths.push(t),this.projectSetting.releaseConfig.asmCompilerCfg.includePaths.includes(t)||this.projectSetting.releaseConfig.asmCompilerCfg.includePaths.push(t),this.projectSetting.releaseConfig.cCompilerCfg.includePaths.includes(t)||this.projectSetting.releaseConfig.cCompilerCfg.includePaths.push(t),this.incDirList.includes(t)||this.incDirList.push(t)}addIncPath(e,t){let i=e.replaceAll("\\","/");t&&(i=i.replace(this.installedPackRoot,Z)),this.addIncPath_impl(i)}removeIncPath(e){let t=e.replaceAll("\\","/"),i=this.isPackFile(t);y.default.isAbsolute(t)&&(i?t=t.replace(this.installedPackRoot,Z):t=y.default.relative(this.projFsPath,e));let s=this.projectSetting.debugConfig.asmCompilerCfg.includePaths.indexOf(t);s!==-1&&this.projectSetting.debugConfig.asmCompilerCfg.includePaths.splice(s,1),s=this.projectSetting.debugConfig.cCompilerCfg.includePaths.indexOf(t),s!==-1&&this.projectSetting.debugConfig.cCompilerCfg.includePaths.splice(s,1),s=this.projectSetting.releaseConfig.asmCompilerCfg.includePaths.indexOf(t),s!==-1&&this.projectSetting.releaseConfig.asmCompilerCfg.includePaths.splice(s,1),s=this.projectSetting.releaseConfig.cCompilerCfg.includePaths.indexOf(t),s!==-1&&this.projectSetting.releaseConfig.cCompilerCfg.includePaths.splice(s,1),s=this.incDirList.indexOf(t),s!==-1&&this.incDirList.splice(s,1)}addNewFileToProject(e,t){let i=y.default.join(t,e);if(w.existsSync(i))O.window.showErrorMessage(i+" File is already exist, Can not new the same name file!");else if(this.isFileNameExistinProject(i))O.window.showErrorMessage("the same name file is already exist in this Project, Can not new the same name file!");else{let s=`/** File create by mipsstudio\r
* @file    ${e}\r
* @author  * (*@*.com) \r
* @brief   mips project source file.\r
* @version 0.01 \r
* @date    \r
* 
* @copyright Copyright (c) 2023 \r
**/\r
`;w.writeFileSync(i,s),this.addExistFileToProject(i),this.updateProjectConfig_imp(),I.getInstance().showFilePathInProjectView(i,!1,"File")}}addNewFolderToProject(e,t){let i=y.default.join(t,e);w.existsSync(i)?O.window.showErrorMessage(i+" Folder is already exist, Can not new the same name Folder!"):(w.mkdirSync(i),this.otherPathList.push(i),this.updateProjectView(),this.updateProjectConfig_imp(),I.getInstance().showFilePathInProjectView(i,!0,"Folder"))}excludeFileFromProject(e){if(this.getCurProjectPath()){let i=e.replaceAll("\\","/");switch(y.default.isAbsolute(i)&&(this.isPackFile(i)?i=i.replace(this.installedPackRoot,Z):i=y.default.relative(this.projFsPath,i)),y.default.extname(e).toLowerCase()){case".s":bi(i,this.asmFileList);break;case".c":bi(i,this.srcFileList);break;case".cc":case".cpp":bi(i,this.cppSrcFileList);break;case".ld":bi(i,this.ldFileList);break;case".h":case".hpp":bi(i,this.incFilelist);break}this.updateProjectConfig_imp(),this.updateProjectView()}}HandleFilePathAdded(e){}isFileNameExistinProject(e){y.default.isAbsolute(e)&&(e=y.default.relative(this.projFsPath,e));let t=y.default.extname(e).toLowerCase(),i=!1;switch(t){case".h":case".hpp":this.incFilelist.includes(e)&&(i=!0);break;case".c":this.srcFileList.includes(e)&&(i=!0);break;case".cc":case".cpp":this.cppSrcFileList.includes(e)&&(i=!0);break;case".s":this.asmFileList.includes(e)&&(i=!0);break;case".ld":this.ldFileList.includes(e)&&(i=!0);break}return i}handleFileAddedToProject_imp(e,t,i,s){let n=this.projFsPath,a=t.replaceAll("\\","/"),r=i.replaceAll("\\","/");switch(t.length===0&&(t="."),s&&this.installedPackRoot?(a=a.replace(this.installedPackRoot,Z),r=r.replace(this.installedPackRoot,Z)):(y.default.isAbsolute(a)&&(a=y.default.relative(n,a)),y.default.isAbsolute(r)&&(r=y.default.relative(n,r))),r=r.replaceAll("\\","/"),e){case".h":case".hpp":this.addIncPath_impl(a),this.incFilelist.includes(r)||this.incFilelist.push(r);break;case".c":this.srcFileList.includes(r)||this.srcFileList.push(r);break;case".cc":case".cpp":this.cppSrcFileList.includes(r)||this.cppSrcFileList.push(r),this.cppflag=!0;break;case".s":this.asmFileList.includes(r)||this.asmFileList.push(r);break;case".ld":this.ldFileList.includes(r)||this.ldFileList.push(r);break}}HandleOnFilePathDeled(e){let t=y.default.dirname(e),i=y.default.extname(e).toLowerCase();i===""?(t=e,this.onDirDeleted(t),this.updateProjectConfig_imp()):this.handleOnFileDeled_imp(i,e)&&(this.updateProjectView(),this.updateProjectConfig_imp())}handleOnFileDeled_imp(e,t){y.default.isAbsolute(t)&&(t=y.default.relative(this.projFsPath,t)),t=t.replaceAll("\\","/");let i=!1;switch(e){case".c":{let s=this.srcFileList.indexOf(t);s!==-1&&(this.srcFileList.splice(s,1),i=!0)}break;case".cc":case".cpp":{let s=this.cppSrcFileList.indexOf(t);s!==-1&&(this.cppSrcFileList.splice(s,1),i=!0)}break;case".s":{let s=this.asmFileList.indexOf(t);s!==-1&&(this.asmFileList.splice(s,1),i=!0)}break;case".ld":{let s=this.ldFileList.indexOf(t);s!==-1&&(this.ldFileList.splice(s,1),i=!0)}break;case".h":{let s=this.incFilelist.indexOf(t);s!==-1&&(this.incFilelist.splice(s,1),i=!0)}break}return i}updateDebugConfig_imp(e){let t=this.getCurProjectPath(),i=y.default.join(t,".vscode"),s=y.default.join(i,Vt),n=j.getInstance().getToolChainExePathNameByGroupMixName(this._toolChainMixName,"gdb")??"gdb";if(w.existsSync(s)||I.getInstance().AddlaunchFile2Sln(),w.existsSync(s)){let r=w.readFileSync(s).toString();try{let c=oe.jsonc.parse(r);if(c.configurations[0]){let d=e.strElfPathName;y.default.isAbsolute(e.strElfPathName)||(d=y.default.resolve(this.projFsPath,e.strElfPathName)),d=d.replaceAll("\\","/"),n=n.replaceAll("\\","/"),c.configurations[0].program=d,c.configurations[0].cwd="${workspaceFolder}",c.configurations[0].miDebuggerPath=n,c.configurations[0].miDebuggerArgs="",c.configurations[0].stopAtEntry=!1,c.configurations[0].externalConsole=!1,c.configurations[0].miDebuggerServerAddress="";let u=!0,h='-file-exec-and-symbols "'+d+'"',p=!0,f=e.bSetPCValue,b=e.bContinue,v=e.bSetBreakPoint;e.strBreakPoint&&e.strBreakPoint!=="main"&&(v=!0);let m=[],_={description:"endlian little",text:"set endian little",ignoreFailures:!1};m.push(_);let C={text:"target remote "+e.strSvrHost+":"+e.nSvrPort,description:"connect to target",ignoreFailures:!1};m.push(C);let P={description:"monitor reset",text:"monitor reset",ignoreFailures:!1};m.push(P);let D={description:"monitor halt",text:"monitor halt",ignoreFailures:!1};if(m.push(D),u){let S={description:"file",text:h,ignoreFailures:!1};m.push(S)}if(p){let S={description:"load file",text:"load",ignoreFailures:!1};m.push(S)}if(f){let S={description:"set PC",text:"set $pc = "+e.strPCValue,ignoreFailures:!1};m.push(S)}if(b?c.configurations[0].launchCompleteCommand="exec-continue":c.configurations[0].launchCompleteCommand="None",v){let S={description:"break point",text:"break "+e.strBreakPoint,ignoreFailures:!0};m.push(S)}c.configurations[0].setupCommands=m;let N=oe.jsonc.beautify(oe.jsonc.stringify(c));N!==r&&w.writeFileSync(s,N)}}catch(l){J.GetOutputChannelInstance().error("updatelaunchconf error: "+l)}}}updateFlashDownloadSettings(e){}updateLinkFile(){this.ldDirList.length}debugProject(){this.bhaveInit?Pa(this.projFsPath)?O.window.showErrorMessage("\u8BF7\u6CE8\u610F\uFF0C\u8DEF\u5F84\u4E2D\u542B\u6709\u4E2D\u6587\u5B57\u7B26\uFF0C\u53EF\u80FD\u4F1A\u5BFC\u81F4\u65E0\u6CD5\u8C03\u8BD5!",{modal:!0}):this.getActiveProjectSettingItem().debugCfg.bStartOpenOCDLocal?O.window.showInformationMessage("\u60A8\u5DF2\u8BBE\u7F6E\u81EA\u52A8\u542F\u52A8OpenOCD,\u5373\u5C06\u542F\u52A8OpenOCD\uFF0C\u5982\u60A8\u53E6\u5916\u5DF2\u542F\u52A8\u6709OpenOCD\uFF0C\u8BF7\u9009\u62E9No",{modal:!0},"Yes","No").then(t=>{t==="Yes"&&this.startopenocd(),t&&O.commands.executeCommand("workbench.action.debug.start").then(()=>{O.window.showInformationMessage("start to debug...")},i=>{O.window.showErrorMessage(i.message)})}):O.window.showInformationMessage("\u60A8\u5F53\u524D\u8BBE\u7F6E\u4E3A\u4E0D\u81EA\u52A8\u542F\u52A8OpenOCD\uFF0C\u5373\u5C06\u542F\u52A8gdb\u5F00\u59CB\u8C03\u8BD5",{modal:!0},"Yes","No").then(t=>{t==="Yes"&&O.commands.executeCommand("workbench.action.debug.start").then(()=>{O.window.showInformationMessage("start to debug...")},i=>{O.window.showErrorMessage(i.message)})}):O.window.showErrorMessage("Please Init Project first.")}execLoadRam(e){}execFlashDownload(e,t){let i=this.getActiveProjectSettingItem();if(this.bhaveInit&&i.buildOutCfg.outName!==void 0){let s=this.getActiveProjectSettingItem().buildOutCfg.getOutputFilePathName(!0);w.existsSync(s)?O.window.showInformationMessage("\u8BF7\u786E\u8BA4\u672C\u673A\u5DF2\u8BBE\u7F6Eopenocd\u8DEF\u5F84\u5E76\u5DF2\u8FDE\u63A5EJTAG"):O.window.showErrorMessage("binary file:"+s+" dose not exist!")}else O.window.showErrorMessage("Please Init Project first.")}startopenocd(){if(this.bhaveInit){let e=tn();if(j.getInstance().getOpenOCDPath().length===0)O.window.showInformationMessage("Please set OpenOCD Path First.");else{let i=this.getActiveProcCoreCfg();if(i){let s=this.getActiveProjectSettingItem();if(s.debugCfg.bStartOpenOCDLocal){let n=s.debugCfg.nGdbPort,a=j.getInstance().getOpenOCDGdbCmdPara(i.procName,n);a?e.sendText(a):J.GetOutputChannelInstance().warn(i.procName+" now NEED config and start OpenOCD by user manualy.")}}}}else O.window.showErrorMessage("Please Init Project first.")}onDirDeleted(e){}rmDirFromProj(e){let t=e;y.default.isAbsolute(e)&&(t=y.default.relative(this.projFsPath,e)),this.srcDirList=Xe(t,this.srcDirList),this.srcFileList=Xe(t,this.srcFileList),this.ccSrcDirLlst=Xe(t,this.ccSrcDirLlst),this.cppSrcFileList=Xe(t,this.cppSrcFileList),this.asmDirLlst=Xe(t,this.asmDirLlst),this.asmFileList=Xe(t,this.asmFileList),this.ldDirList=Xe(t,this.ldDirList),this.ldFileList=Xe(t,this.ldFileList),this.incDirList=Xe(t,this.incDirList),this.updateProjectView(),this.updateProjectConfig_imp()}addDirFileToProject(e){w.readdirSync(e,{encoding:"utf-8",withFileTypes:!0}).forEach(i=>{if(i.isFile()){let s=i.name,n=s.lastIndexOf("."),a=y.default.join(e,s),r=s.substring(n).toLowerCase();this.handleFileAddedToProject_imp(r,e,a)}else if(i.isDirectory()){let s=y.default.join(e,i.name);this.addDirFileToProject(s)}})}getUserIncPath(e=!1){let t="",i=this.getActiveProjectSettingItem().cCompilerCfg.includePaths;for(let s of i)s.trim().length&&(e?(t.length&&(t+=`\\\r
`),t+=' -I"'+s+'"'):t+=" -I"+s);return t}UpdateBuildOkFile(e,t){this.BuildFilelst_.includes(e)&&(this.BuildOkFilelst_.includes(e)||(this.BuildOkFilelst_.push(e),setTimeout(()=>{let i="";if(t?i=e.replace(Z,this.installedPackRoot):i=y.default.resolve(this.projFsPath,e),w.existsSync(i)){let s=w.readFileSync(i),n=Ys.createHash("md5");n.update(s);let a=n.digest("hex");this.objFileCacheMap.set(e,a)}},10)))}UpdateBuildFailedFile(e,t){if(this.BuildFilelst_.includes(e)){let i=!1;for(let s in this.BuildFailedItemlst_)if(this.BuildFailedItemlst_[s].filePath===e){i=!0,this.BuildFailedItemlst_[s].errInfo=t;break}if(!i){let s=new Js(e,t);this.BuildFailedItemlst_.push(s)}}}ImportFromMakefile(e){let t=!1;if(w.existsSync(e)){let i=w.readFileSync(e,{encoding:"utf8"});i.includes(ya)||(i+=`\r
CSOURCES += $(C_SRCS)\r
INC_PATH += $(C_INCLUDES) \r
INC_PATH += $(INCLUDES)\r
ASOURCES += $(ASM_SRCS)`,i+=ya),w.writeFileSync(e,i);let s=y.default.dirname(e),n=J.GetOutputChannelInstance();try{let a=ue.execSync("make ProjConf",{cwd:s,encoding:"utf-8",maxBuffer:4194304,timeout:0});a&&a.includes("error")&&n.error(a),t=this.InitFromMakeConfig_(s)}catch(a){n.error(`ImportFromMakefile make ProjConf: Error: 
`+a)}}return t}InitFromMakeConfig_(e){let t=!1,i=y.default.join(e,"conf.txt"),s=new Mi;if(s=Qn(i,this.projFsPath,e,s),s.incDirList.length===0||s.srcFileList.length===0)O.window.showErrorMessage("ImportFromMakefile error, maybe the file content not supported!");else{this.incDirList=Array.from(s.incDirList),this.srcFileList=Array.from(s.srcFileList),this.asmFileList=Array.from(s.asmFileList),this.ldFileList=Array.from(s.ldFileList),this.ldDirList=Array.from(s.ldDirList);let n=this.projectSetting.debugConfig;n.asmCompilerCfg.definedSymbols=Array.from(s.strPreDefines),n.cCompilerCfg.definedSymbols=Array.from(s.strPreDefines),n.buildOutCfg.outName=this.name,n.buildOutCfg.outPath=Qs,n.linkerCfg.linkscirptFiles.length===0&&this.ldFileList.length&&(n.linkerCfg.linkscirptFiles=Array.from(this.ldFileList));let a=this.projectSetting.releaseConfig;a.asmCompilerCfg.definedSymbols=Array.from(s.strPreDefines),a.cCompilerCfg.definedSymbols=Array.from(s.strPreDefines),a.buildOutCfg.outName=this.name,a.buildOutCfg.outPath=en,a.linkerCfg.linkscirptFiles.length===0&&this.ldFileList.length&&(a.linkerCfg.linkscirptFiles=Array.from(this.ldFileList));let r=j.getInstance().getToolChainSettingsArr();r.length&&(this._toolChainMixName=r[0].groupName+ke+r[0].tool_name,a.curSelectedToolChainMixName=n.curSelectedToolChainMixName=this._toolChainMixName),this.onProjectInitFinish(),t=!0}return t}exportMakefile(){}buildProjectWithOption(e){switch(e){case"clean":this.buildClear();break;case"compileOnly":this.projectCompileOnly();break;case"linkOnly":this.curTimePoint_WhileStartBuild=Date.now(),this.projectlinkOnly();break}}buildClear(){let e=J.GetOutputChannelInstance();e.clear(),e.info("Now Remove all output files and obj  files of the Project."),this.delOutputFiles(),this.delAllObjFilesInObjDir(),this.BuildOkFilelst_.splice(0),this.BuildFilelst_.splice(0),this.BuildFailedItemlst_.splice(0),this.objFileCacheMap.clear(),this.obj_lst.splice(0),e.show(!0)}isFailed(){return this.BuildFailedItemlst_.length>6}ResetBuildFileList(){this.obj_lst.splice(0),this.BuildFilelst_=this.srcFileList.concat(this.cppSrcFileList).concat(this.asmFileList),this.BuildFilelst_.sort(),this.BuildFailedItemlst_.splice(0),this.BuildOkFilelst_.splice(0);let e=J.GetOutputChannelInstance(),t=this.getCActiveModeObjectDir(),i=this.projFsPath;this.BuildFilelst_.forEach(s=>{if(this.objFileCacheMap.has(s)){let n=this.objFileCacheMap.get(s),a=s.startsWith(Z),r=s,l=s;if(a?l=r.replace(Z,this.installedPackRoot):y.default.isAbsolute(r)||(l=y.default.resolve(i,r),l=l.replaceAll("\\","/")),w.existsSync(l)){let c=w.readFileSync(l),d=Ys.createHash("md5");d.update(c);let u=d.digest("hex");if(n===u){let h=!1;if(this.ChangedHeaderFilelst_.length&&this.srcFileDependsMap.has(s)){let p=this.srcFileDependsMap.get(s);if(p)for(let f of this.ChangedHeaderFilelst_){let b=f.replaceAll("\\","/"),v=y.default.relative(this.projFsPath,f).replaceAll("\\","/");if(p.includes(b)){h=!0;break}if(p.includes(v)){h=!0;break}}}if(!h){this.BuildOkFilelst_.push(s);let p=this.getFileBaseName_impl(r),f=p.lastIndexOf(".");f!==-1&&(p=p.substring(0,f));let b=p+".o";this.obj_lst.push(b)}}}}else{let n=s.replaceAll("\\","/"),a=this.getFileBaseName_impl(n),r=a.lastIndexOf(".");r!==-1&&(a=a.substring(0,r));let l=a+".o",c=y.default.join(t,l),d=y.default.dirname(c),u=y.default.resolve(this.projFsPath,d);if(!w.existsSync(u)){let h=d.split(y.default.sep),p=h.length,f=this.projFsPath;for(let b=0;b<p;++b)if(f=y.default.join(f,h[b]),!w.existsSync(f))try{w.mkdirSync(f)}catch{e.error("mkdir Failed"+f)}}}})}getFileBaseName_impl(e){let t=this.projLocalRelativeDir_usedForProjView,i=e.replace(t,"");i.startsWith("../")&&(i=i.replaceAll("../",""));let s=i.indexOf("/"),n=new Array;for(;s!==-1;)n.push(s),s=i.indexOf("/",s+1);if(n.length>3){let a=n[2],r=i.substring(0,a),l=n[n.length-1];i=r+i.substring(l)}return i.startsWith("/")&&(i=i.substring(1)),i}CallConsoleInChildProcess(e,t){let i=e;t&&(i=e+" "+t.join(" "));let s=J.GetOutputChannelInstance(),n=y.default.dirname(e);ue.exec(i,{cwd:n,encoding:"utf-8",maxBuffer:4096*1024,timeout:0},function(a,r){if(a)s.error(`CallConsoleInChildProcess Error: 
`+a);else{let l=oe.jsonc.parse(r);if(l.length)for(let c of l)s.info(c.Name+" "+c.Port)}})}delAllObjFiles(){let e=y.default.resolve(this.projFsPath,this.getActiveProjectSettingItem().buildOutCfg.outPath);if(e){let t=J.GetOutputChannelInstance(),i=y.default.join(e,"obj");w.readdirSync(i,{encoding:"utf-8",withFileTypes:!0}).forEach(n=>{if(n.isFile()){let a=y.default.join(i,n.name);try{w.rmSync(a)}catch(r){t.error("rm "+a+" Failed."),console.log(r)}}})}}delAllObjFilesInDir(e){if(e&&w.existsSync(e)){let t=J.GetOutputChannelInstance();w.readdirSync(e,{encoding:"utf-8",withFileTypes:!0}).forEach(s=>{let n=y.default.join(e,s.name);if(s.isFile()){let a=y.default.extname(s.name);if(a===".o"||a===".lst"||a===".d")try{w.rmSync(n)}catch(r){t.error("rm "+n+" Failed."),console.log(r)}}else s.isDirectory()&&this.delAllObjFilesInDir(n)})}}delAllObjFilesInObjDir(){let e=y.default.resolve(this.projFsPath,this.getCActiveModeObjectDir());this.delAllObjFilesInDir(e)}delOutputFiles(){let e=this.getActiveProjectSettingItem().buildOutCfg.getOutputFilePathName(),t=y.default.resolve(this.projFsPath,e);if(t){let i=J.GetOutputChannelInstance(),s=[".elf",".dasm",".hex",".bin",".map",".list"];for(let n of s){let a=t+n;if(w.existsSync(a))try{w.rmSync(a)}catch(r){i.error("rm "+a+" Failed."),console.log(r)}}}}checkCreateBuildDir(){let e=y.default.resolve(this.projFsPath,this.getCActiveModeObjectDir());e&&!w.existsSync(e)&&O.workspace.fs.createDirectory(O.Uri.file(e));let t=this.getActiveProjectSettingItem().buildOutCfg.outPath;t=y.default.resolve(this.projFsPath,t),t&&!w.existsSync(t)&&O.workspace.fs.createDirectory(O.Uri.file(t))}getCurProjectPath(){return this.projFsPath}onProjectHeaderFileChanged(e){this.ChangedHeaderFilelst_.includes(e)||this.ChangedHeaderFilelst_.push(e)}updateProjectConfig_imp(){this.UpdateBuildPathInfo_imp(),I.getInstance().stopFileWatcher(),this.updateProjectConfigToFile(),this.updateCppExtensionCfg(),I.getInstance().continueFileWatcher()}updateCppExtensionCfg(){this.updateCppPropertiesJson(),this.updateClangdSettings()}};var pe=T(require("vscode")),vi=T(require("fs")),ae=T(require("path"));var Le=class{resource;isDirectory;contextvalue;fsPath;constructor(){this.isDirectory=!1,this.contextvalue="undefined"}},sn=class{_onDidChangeTreeData=new pe.EventEmitter;onDidChangeTreeData=this._onDidChangeTreeData.event;bShowFilesOnlyinProj;refresh(e){this._onDidChangeTreeData.fire(e)}incPathList;resFileList;otherPathList;projectPath;projectLocalDir;packRoot;resFilesOutside;resFileNotExist;constructor(e,t,i,s,n,a){this.incPathList=Array.from(e),this.resFileList=Array.from(t),this.projectPath=String(i),this.projectLocalDir=String(s),this.packRoot=String(n),this.otherPathList=Array.from(a),this.bShowFilesOnlyinProj=!1,this.resFilesOutside=[],this.resFileNotExist=[];for(let r of t)r.indexOf("..")===0?this.resFilesOutside.includes(r)||this.resFilesOutside.push(r):ae.default.isAbsolute(r)&&(this.resFilesOutside.includes(r)||this.resFilesOutside.push(r));this.updatePathListToAbslutePath()}updateData(e,t,i,s,n,a){this.incPathList=Array.from(e),this.resFileList=Array.from(t),this.projectPath=String(i),this.projectLocalDir=String(s),this.packRoot=String(n),this.otherPathList=Array.from(a),this.resFilesOutside=[],this.resFileNotExist=[];for(let r of t)r.indexOf("..")===0?this.resFilesOutside.includes(r)||this.resFilesOutside.push(r):ae.default.isAbsolute(r)&&(this.resFilesOutside.includes(r)||this.resFilesOutside.push(r));this.updatePathListToAbslutePath(),this.refresh()}isFileInList(e){return this.resFileList.includes(e)}updateOnShowOnlyFilesInProjectChanged(e){this.bShowFilesOnlyinProj!==e&&(this.bShowFilesOnlyinProj=e,this.refresh())}updatePathListToAbslutePath(){ae.default.isAbsolute(this.projectLocalDir)||(this.projectLocalDir=ae.default.resolve(this.projectPath,this.projectLocalDir),this.projectLocalDir=this.projectLocalDir.replaceAll("\\","/"));for(let e in this.resFileList){let t=this.resFileList[e];if(t.startsWith(Z)&&(t=t.replace(Z,this.packRoot),this.resFileList[e]=t,this.resFilesOutside.includes(t)||this.resFilesOutside.push(t)),!ae.default.isAbsolute(t)){let s=ae.default.resolve(this.projectPath,t);this.resFileList[e]=s}let i=this.resFileList[e];if(!vi.existsSync(i)){let s=ae.default.relative(this.projectPath,i);this.resFileNotExist.includes(s)||this.resFileNotExist.push(s)}}for(let e in this.incPathList)if(!ae.default.isAbsolute(this.incPathList[e])){let t=ae.default.resolve(this.projectPath,this.incPathList[e]);this.incPathList[e]=t}for(let e in this.otherPathList)if(!ae.default.isAbsolute(this.otherPathList[e])){let t=ae.default.resolve(this.projectPath,this.otherPathList[e]);this.otherPathList[e]=t}for(let e in this.resFilesOutside)if(!ae.default.isAbsolute(this.resFilesOutside[e])){let t=ae.default.resolve(this.projectPath,this.resFilesOutside[e]);this.resFilesOutside[e]=t}}getTreeItem(e){return e.resource?{resourceUri:e.resource,collapsibleState:e.isDirectory?pe.TreeItemCollapsibleState.Expanded:void 0,contextValue:e.contextvalue,command:e.isDirectory?void 0:{title:"open",command:"vscode.open",arguments:[e.resource]}}:e.contextvalue==="FileNotExist"?{label:e.fsPath,collapsibleState:void 0,contextValue:e.contextvalue,tooltip:"The File Not Exist!"}:e.contextvalue==="rootNotExist"?{label:"Not Exist Files",collapsibleState:pe.TreeItemCollapsibleState.Expanded,contextValue:e.contextvalue}:e.contextvalue==="rootOutside"?{label:"Outside Files",collapsibleState:pe.TreeItemCollapsibleState.Expanded,contextValue:e.contextvalue}:{label:"Unkonwn",collapsibleState:e.isDirectory?pe.TreeItemCollapsibleState.Expanded:void 0,contextValue:e.contextvalue}}isPathHasResFiles(e){let t=e+ae.default.sep,i=!1,s=t.replaceAll("\\","/");for(let n of this.resFileList)if(n.includes(t)||n.includes(s)){i=!0;break}if(!i){for(let n of this.resFilesOutside)if(n.includes(t)||n.includes(s)){i=!0;break}}return i}isPathInProject(e){let t=!1,i=e.replaceAll("\\","/");if((this.projectLocalDir.includes(e)||this.projectLocalDir.includes(i)||e.includes(this.projectLocalDir)||i.includes(this.projectLocalDir))&&(t=!0),!t){let s=e+ae.default.sep,n=i+"/";for(let a of this.otherPathList)if(a.includes(s)||a.includes(n)){t=!0;break}if(!t){for(let a of this.incPathList)if(a.includes(s)||a.includes(n)){t=!0;break}}}return t}isSrcFile(e){let t=!1;switch(ae.default.extname(e)){case".c":case".C":case".cpp":case".Cpp":case".CPP":case".S":t=!0;break}return t}isProjectIncFile(e){let t=!1,i=ae.default.extname(e).toLowerCase();if(i===".h"||i===".hpp"){for(let s of this.incPathList)if(e.includes(s)){t=!0;break}}return t}isResFile(e){let t=this.resFileList.includes(e);return t||(e=e.replaceAll("\\","/"),t=this.resFileList.includes(e)),t}getParent(e){if(e.resource)if(e.isDirectory){if(e.contextvalue==="root"||e.contextvalue==="rootOutside"||e.contextvalue==="rootNotExist")return null;if(e.contextvalue==="FolderOutside"){let s=new Le;return s.contextvalue="rootOutside",s.isDirectory=!0,s}let t=new Le,i=ae.default.dirname(e.resource?.fsPath);return t.contextvalue="Folder",i===this.projectPath&&(t.contextvalue="root"),t.isDirectory=!0,t.resource=pe.Uri.file(i),t}else{let t=e.resource.fsPath,i=ae.default.dirname(t),s=new Le;if(e.contextvalue==="FileNotExist")s.contextvalue="rootNotExist",s.isDirectory=!0;else if(this.resFilesOutside.includes(t))s.contextvalue="FolderOutside",s.isDirectory=!0,s.resource=pe.Uri.file(i);else{let n=!1;for(let a of this.resFilesOutside)if(t.includes(a)){n=!0;break}n?(s.contextvalue="FolderOutside",s.isDirectory=!0,s.resource=pe.Uri.file(i)):(s.contextvalue="Folder",i===this.projectPath&&(s.contextvalue="root"),s.isDirectory=!0,s.resource=pe.Uri.file(i))}return s}return null}getChildren(e){if(e){if(e.isDirectory)if(e.resource){let t=new Array,i=e.resource.fsPath;if(vi.existsSync(i))return vi.readdirSync(i,{encoding:"utf-8",withFileTypes:!0}).forEach(n=>{let a=new Le,r=n.name,l=ae.default.join(i,r);a.resource=pe.Uri.file(l),n.isDirectory()?(a.isDirectory=!0,a.contextvalue="Folder",(this.isPathHasResFiles(l)||this.isPathInProject(l))&&t.push(a)):this.isResFile(l)?(this.isSrcFile(l)?a.contextvalue="SrcFile":a.contextvalue="ResFile",t.push(a)):!this.bShowFilesOnlyinProj&&this.isProjectIncFile(l)&&(a.contextvalue="File",t.push(a))}),Promise.resolve(t)}else if(e.contextvalue==="rootNotExist"){let t=new Array;for(let i of this.resFileNotExist){let s=new Le;s.fsPath=i,s.isDirectory=!1,s.contextvalue="FileNotExist",t.push(s)}return Promise.resolve(t)}else{let t=new Array,i=new Array;for(let s of this.resFilesOutside){let n=ae.default.dirname(s),a=ae.default.dirname(n);if(!i.includes(a)){let r=!1;for(let l of i)if(a.includes(l)){r=!0;break}if(!r){i.push(a);let l=new Le;l.resource=pe.Uri.file(a),l.isDirectory=!0,l.contextvalue="FolderOutside",t.push(l)}}}return Promise.resolve(t)}}else{let t=new Array,i=new Le,s=this.projectPath;if(i.resource=pe.Uri.file(s),i.isDirectory=!0,i.contextvalue="root",t.push(i),this.resFilesOutside.length){let n=new Le;n.isDirectory=!0,n.contextvalue="rootOutside",t.push(n)}if(this.resFileNotExist.length){let n=new Le;n.isDirectory=!0,n.contextvalue="rootNotExist",t.push(n)}return Promise.resolve(t)}return Promise.resolve([])}},Ji=class{Viewer;treeDataProvider;constructor(e,t,i,s,n,a){this.treeDataProvider=new sn(e,t,i,s,n,a),this.Viewer=pe.window.createTreeView("mipsstudio.projectview",{treeDataProvider:this.treeDataProvider,showCollapseAll:!0})}updateData(e,t,i,s,n,a){this.treeDataProvider.updateData(e,t,i,s,n,a)}updateOnShowOnlyFilesInProjectChanged(e){this.treeDataProvider.updateOnShowOnlyFilesInProjectChanged(e)}show(){}showElement(e,t,i){if(t){let s={resource:pe.Uri.file(e),isDirectory:t,contextvalue:i};this.Viewer.reveal(s,{select:!0,expand:!0})}else if(this.treeDataProvider.isFileInList(e)){let s={resource:pe.Uri.file(e),isDirectory:t,contextvalue:i};this.Viewer.reveal(s,{select:!0,focus:!0})}}dispose(){this.Viewer.dispose()}};var Oe=".mpsln",gi=".mpproj",Qi=".user",nn=1;function ci(o,e){let t=!1;if(o.memoryMap){for(let i of o.memoryMap)if(i.name===e.name){t=!0;break}t||(new Ce().copy(e),o.memoryMap.push(e))}else o.memoryMap=[],new Ce().copy(e),o.memoryMap.push(e)}var _i=class{name;projConfigPath;constructor(){this.name="",this.projConfigPath=""}},Ie=class{currentSolutionName;currentSolutionPath;currentSlnCfgFsPath;projlst_;activeProjMgr_;activeProjIndex_;projectView_;supportReadMemory;supportWriteMemory;supportSetExpression;dbgMemViewProvider;dbgPeripViewProvider;fsdirfilewatcher;bWatching;projectUserCfg;constructor(){this.projlst_=new Array,this.activeProjIndex_=-1,this.supportReadMemory=!1,this.supportWriteMemory=!1,this.supportSetExpression=!1,this.bWatching=!1,this.projectUserCfg=[]}getCurrentProjManager_imp(){return this.activeProjMgr_}getCurrProjectDevPerip(){return this.activeProjMgr_?.getProjectDevPerip()}solutionProvider_;isHaveInit(){let e=!1;return this.currentSolutionPath&&this.projlst_.length&&(e=!0),e}IsMutilProject(){let e=!1;if(this.currentSolutionPath&&this.projlst_.length){for(let t of this.projlst_)if(t.projConfigPath.includes("projects/")){e=!0;break}}return e}getSolutionName(){return this.currentSolutionName}updateProjetViewOnShowOnlyFilesInProjectChanged(e){this.projectView_&&this.projectView_.updateOnShowOnlyFilesInProjectChanged(e)}updateProjctView(e,t,i,s,n,a){this.projectView_?this.projectView_.updateData(e,t,i,s,n,a):this.projectView_=new Ji(e,t,i,s,n,a)}showFilePathInProjectView(e,t,i){this.projectView_&&this.activeProjMgr_&&this.projectView_.showElement(e,t,i)}static getCurrentProjManager(){return Ie.getInstance().getCurrentProjManager_imp()}RundebugTracker(){te.debug.registerDebugAdapterTrackerFactory("*",{createDebugAdapterTracker(){return{onWillReceiveMessage:e=>{console.log("recv:"),console.log(e)},onWillStartSession:()=>{console.log("session started")},onDidSendMessage:e=>{if(console.log("send:"),console.log(e),e.type==="response")e.command==="initialize"?(e.body.supportsReadMemoryRequest!==void 0&&(Ie.getInstance().supportReadMemory=e.body.supportsReadMemoryRequest),e.body.supportsWriteMemoryRequest!==void 0&&(Ie.getInstance().supportWriteMemory=e.body.supportsWriteMemoryRequest),e.body.supportsSetExpression!==void 0&&(Ie.getInstance().supportSetExpression=e.body.supportsSetExpression)):e.command==="disconnect"&&Ie.getInstance().dbgPeripViewProvider?.setInDebugMode(!1);else if(e.type==="event")switch(e.event){case"stopped":e.body.reason==="exception"&&e.body.text==="Signal 0"&&(e.body.reason=""),Ie.getInstance().dbgMemViewProvider?.NotifyDebugStopped(),Ie.getInstance().dbgPeripViewProvider?.refreshPeripItemsOnDebugNotify();break;case"initialized":Ie.getInstance().dbgPeripViewProvider?.setInDebugMode(!0);break;case"exited":case"terminated":Ie.getInstance().dbgPeripViewProvider?.setInDebugMode(!1);break;default:break}}}}})}getCurrentProjectName(){let e;return this.isHaveInit()&&(e=this.getCurrentProjManager_imp()?.name),e}getCurrentProjectFamilyName(){let e;if(this.isHaveInit()){let t=this.getCurrentProjManager_imp();t&&(e=t.getActiveProjectSettingItem().strSelectedFamily)}return e}getCurrentProjectDeviceName(){let e;if(this.isHaveInit()){let t=this.getCurrentProjManager_imp();t&&(e=t.getActiveProjectSettingItem().strSelectedDeviceName)}return e}getCurrentProjectDevProcConfig(){let e;if(this.isHaveInit()){let t=this.getCurrentProjManager_imp();if(t){e=new Ai;let i=t.getActiveProjectSettingItem();e.devName=i.strSelectedDeviceName,e.devVendor=i.strSelectedVendor,e.copy(i.procCoreCfgs[i.coreSelectIndex])}}return e}getCurrentProjectComponents(){let e;if(this.isHaveInit()){let t=this.getCurrentProjManager_imp();t&&(e=t.getInstalledComponents())}return e}getAllProjectNames(){let e;if(this.isHaveInit()&&this.projlst_.length){e=new Array;for(let t of this.projlst_)e.push(t.name)}return e}switchProjectbyName(e){if(this.currentSolutionPath){this.stopFileWatcher(),this.activeProjMgr_&&(this.activeProjMgr_.updateProjectConfigToFile(),this.activeProjMgr_=void 0);for(let t=0;t<this.projlst_.length;++t)if(this.projlst_[t].name===e){let i=this.projlst_[t].projConfigPath,s=new J;if(s.projFsPath=this.currentSolutionPath,s.name=e,s.setConfigFilePath(i),this.projectUserCfg){for(let n of this.projectUserCfg)if(n.projName===s.name){s.setProjectUserCfg(n);break}}s.initFromConfigFile(),this.activeProjIndex_=t,this.activeProjMgr_=s;break}this.activeProjMgr_&&(this.activeProjMgr_.onProjectInitFinish(),Ae.getInstance().updateIfVisible(),this.continueFileWatcher()),this.updateSolutionConfig()}}static getInstance(){return Ie.instance||(Ie.instance=new Ie),Ie.instance}stopFileWatcher(){this.fsdirfilewatcher?.dispose(),this.bWatching=!1}continueFileWatcher(){setTimeout(()=>{this.watchProjectDirFileChanged(),this.bWatching=!0},2e3)}dispose(){this.stopFileWatcher()}getCurrentSolutionPath(){if(!this.currentSolutionPath&&te.workspace.workspaceFolders){let t=te.workspace.workspaceFolders.find(i=>i.uri.scheme==="file")?.uri.fsPath;this.currentSolutionPath=t}return this.currentSolutionPath}AddSolutionConfiginfo(e,t,i,s){this.AddSolutionConfigFile_imp(e,t);let n=B.default.join(e,t+Oe),a=A.readFileSync(n,"utf-8"),r=Q.jsonc.parse(a);r&&r.confversion!==void 0&&r.confversion>=nn}AddSolutionConfigFile_imp(e,t){let i=t+Oe,s=B.default.join(e,i);if(A.existsSync(s))te.window.showErrorMessage(i+" File is already existed!");else{let n=j.getSlnConfigTplPathName();n&&A.copyFileSync(n,s)}return s}copySlnConfigFromTpl(e,t){let i=!1,s=t+Oe,n=B.default.join(e,s);if(A.existsSync(n))te.window.showErrorMessage(s+" File is already existed!");else{let a=j.getSlnConfigTplPathName();a&&(A.copyFileSync(a,n),i=A.existsSync(n))}return i}copyProjConfigFromTpl(e,t,i,s,n,a){let r=!1,l=t+gi,c=B.default.join(e,l);if(A.existsSync(c))te.window.showErrorMessage(l+" File is already existed!");else{let d=j.getProjectConfigTplPathName();if(d){A.copyFileSync(d,c);let u=A.readFileSync(c,"utf-8"),h=Q.jsonc.parse(u),p=h.projectSetting.debugConfig,f=h.projectSetting.releaseConfig;i&&(p.strSelectedVendor=i,f.strSelectedVendor=i),s&&(p.strSelectedFamily=s,f.strSelectedFamily=s),n&&(p.strSelectedSubFamily=n,f.strSelectedSubFamily=n),a&&(p.strSelectedDeviceName=a,f.strSelectedDeviceName=a),p.buildOutCfg=new Ke,p.buildOutCfg.outName=t,p.buildOutCfg.outPath=Qs,f.buildOutCfg=new Ke,f.buildOutCfg.outName=t,f.buildOutCfg.outPath=en;let b=j.getInstance().getSupportedDeviceArr_DFP(i,s,n);if(b.length>0){let m=b[0];f.procCoreCfgs=[],p.procCoreCfgs=[];for(let _ of m.processors){let C=new it;if(C.copy(_),m.memorys)for(let P of m.memorys)P.procName?C.procName===P.procName&&ci(C,P):ci(C,P);(s==="MIPS Warrior M-Class"||s==="MP32GM51xx Series")&&(C.bMcu=!0),p.procCoreCfgs.push(C),f.procCoreCfgs.push(C)}p.coreSelectIndex=0,f.coreSelectIndex=0}let v=j.getInstance().getToolChainSettingsArr();if(v.length){let m=v[0].groupName+ke+v[0].tool_name;f.curSelectedToolChainMixName=p.curSelectedToolChainMixName=m}A.writeFileSync(c,Q.jsonc.beautify(Q.jsonc.stringify(h))),r=!0}}return r}createNewProject(e){let t=B.default.join(e.slnLocation,e.slnName),i=B.default.join(t,e.projname),s=B.default.join(t,"projects");e.bMutliProject&&(i=B.default.join(s,e.projname));let n=e.slnName+Oe,a=B.default.join(t,n),r=a+Qi;if(e.bAddToCurrentSln&&A.existsSync(a)){if(e.toolchain&&A.existsSync(r)){let l=A.readFileSync(r,"utf-8"),c=Q.jsonc.parse(l),d={projName:e.projname,curMode:"debug",toolchainName_debug:e.toolchain,toolchainName_release:e.toolchain};c&&(c.projectUserCfgs?c.projectUserCfgs.push(d):c.projectUserCfgs=[d],A.writeFileSync(r,Q.jsonc.beautify(Q.jsonc.stringify(c))))}e.bMutliProject&&(A.existsSync(s)||A.mkdirSync(s)),this.addNewProjectInSolution(e.projname,i,a,e.selectVendor,e.selectFamily,e.selectSubFamily,e.selectDevice)}else{if(A.existsSync(t)||A.mkdirSync(t),e.bMutliProject&&(A.existsSync(s)||A.mkdirSync(s)),this.copySlnConfigFromTpl(t,e.slnName)&&e.toolchain){let l=a+Qi,d={activeProjIndex:0,projectUserCfgs:[{projName:e.projname,curMode:"debug",toolchainName_debug:e.toolchain,toolchainName_release:e.toolchain}]};A.writeFileSync(l,Q.jsonc.beautify(Q.jsonc.stringify(d)))}this.addNewProjectInSolution(e.projname,i,a,e.selectVendor,e.selectFamily,e.selectSubFamily,e.selectDevice),te.commands.executeCommand("vscode.openFolder",te.Uri.file(t))}}addNewProject(e){if(this.currentSolutionPath){let t=B.default.relative(this.currentSolutionPath,e),i=t.replaceAll("\\","/");if(this.projlst_.length){for(let l of this.projlst_)if(l.projConfigPath===t){te.window.showInformationMessage("The same project is already exist in solution.");return}}let s=new J;if(s.name=B.default.basename(e,gi),A.existsSync(t)){let l=A.readFileSync(t,"utf-8"),c=Q.jsonc.parse(l);c.name&&s.name!==c.name&&(s.name=c.name)}let n=!1,a=s.name;for(let l=1;l<16;++l){for(let c of this.projlst_)if(c.name===s.name){n=!0;break}if(n)s.name=a+"_"+l,n=!1;else break}s.projFsPath=this.currentSolutionPath;let r=new _i;r.name=s.name,r.projConfigPath=i,s.setConfigFilePath(r.projConfigPath),s.initFromConfigFile(),s.name!==r.name&&(s.name=r.name),this.projlst_.push(r),this.activeProjIndex_=this.projlst_.length-1,s.onProjectInitFinish(),this.activeProjMgr_=s,Ae.getInstance().updateIfVisible(),this.onSolutionInitFinish()}}addNewProjectInSolution(e,t,i,s,n,a,r){if(A.existsSync(t))te.window.showErrorMessage("ProjPath is already existed!");else{A.mkdirSync(t);let l=B.default.join(t,"objects");if(A.mkdirSync(l),A.existsSync(l)){let c=B.default.join(l,"debug");A.mkdirSync(c),c=B.default.join(l,"release"),A.mkdirSync(c)}if(l=B.default.join(t,"device"),A.mkdirSync(l),l=B.default.join(t,"include"),A.mkdirSync(l),l=B.default.join(t,"source"),A.mkdirSync(l),l=B.default.join(t,"ldscripts"),A.mkdirSync(l),this.copyProjConfigFromTpl(t,e,s,n,a,r)){let c=B.default.join(t,e+gi),d=!1;if(this.currentSolutionPath){let u=this.currentSolutionName+Oe,h=B.default.join(this.currentSolutionPath,u);i===h&&(this.addNewProject(c),d=!0)}if(!d){let u=B.default.dirname(i),h=A.readFileSync(i,"utf-8"),p=Q.jsonc.parse(h);if(p){let f={name:e,projConfigPath:B.default.relative(u,c)};p.projects.push(f),A.writeFileSync(i,Q.jsonc.beautify(Q.jsonc.stringify(p)))}}}}}AddlaunchFile2Sln(e){if(e||(e=this.currentSolutionPath),e){let t=e;t=B.default.join(t,".vscode");let i=B.default.join(t,Vt);A.existsSync(t)||A.mkdirSync(t);let s=j.getTemplateConfigPath();s&&(s=B.default.join(s,Vt),A.copyFileSync(s,i))}}updateSolutionConfig(e){if(this.stopFileWatcher(),e||(e=this.currentSlnCfgFsPath),e){let t={confversion:nn,projects:this.projlst_},i=Q.jsonc.beautify(Q.jsonc.stringify(t));A.existsSync(e)?A.readFileSync(e,"utf-8")!==i&&A.writeFileSync(e,i):A.writeFileSync(e,i);let s=e+Qi;if(A.existsSync(s)){let n=A.readFileSync(s,"utf-8"),a=Q.jsonc.parse(n),r=a.projectUserCfgs;a.activeProjIndex=this.activeProjIndex_;let l=r.length;if(l===this.projlst_.length){if(this.activeProjMgr_)for(let d=0;d<l;++d)r[d].projName===this.activeProjMgr_.name&&(r[d].curMode=this.activeProjMgr_.projectSetting.curMode,r[d].toolchainName_debug=this.activeProjMgr_.projectSetting.debugConfig.curSelectedToolChainMixName,r[d].toolchainName_release=this.activeProjMgr_.projectSetting.releaseConfig.curSelectedToolChainMixName);this.projectUserCfg=Array.from(a.projectUserCfgs);let c=Q.jsonc.beautify(Q.jsonc.stringify(a));c!==n&&A.writeFileSync(s,c)}else{let c=[];for(let h of this.projlst_){let p=!0;for(let f=0;f<l;++f)if(r[f].projName===h.name){this.activeProjMgr_&&this.activeProjMgr_.name===h.name&&(r[f].curMode=this.activeProjMgr_.projectSetting.curMode,r[f].toolchainName_debug=this.activeProjMgr_.projectSetting.debugConfig.curSelectedToolChainMixName,r[f].toolchainName_release=this.activeProjMgr_.projectSetting.releaseConfig.curSelectedToolChainMixName),c.push(r[f]),p=!1;break}if(p){let f={projName:h.name,curMode:De,toolchainName_debug:"",toolchainName_release:""};c.push(f)}}let d={activeProjIndex:this.activeProjIndex_,projectUserCfgs:c};this.projectUserCfg=Array.from(c);let u=Q.jsonc.beautify(Q.jsonc.stringify(d));u!==n&&A.writeFileSync(s,u)}}else{let n=[],a=0;for(let c of this.projlst_){let d={projName:c.name,curMode:"debug",toolchainName_debug:"",toolchainName_release:""};a===this.activeProjIndex_&&this.activeProjMgr_&&(d.curMode=this.activeProjMgr_.projectSetting.curMode,d.toolchainName_debug=this.activeProjMgr_.projectSetting.debugConfig.curSelectedToolChainMixName,d.toolchainName_release=this.activeProjMgr_.projectSetting.releaseConfig.curSelectedToolChainMixName),n.push(d),++a}let r={activeProjIndex:this.activeProjIndex_,projectUserCfgs:n};this.projectUserCfg=Array.from(n);let l=Q.jsonc.beautify(Q.jsonc.stringify(r));A.writeFileSync(s,l)}}this.continueFileWatcher()}checkExistLaunchConfigFile(e){let t=!1;if(this.currentSolutionName){let i=B.default.join(e,this.currentSolutionName),s=B.default.join(e,".vscode");if(A.existsSync(i)){let n=B.default.join(s,Vt);A.existsSync(n)&&(t=!0)}}return t}initMipsSolution(){let e=this.getCurrentSolutionPath();if(e){let t=j.getInstance().slnToOpen;t&&B.default.dirname(t)===e?(this.currentSolutionName||(this.currentSolutionName=B.default.basename(t,Oe)),this.initFromSolutionConfigFile_imp(t,e)):this.initFromDefaultSlnConfigFileInFolder()}}onSolutionInitFinish(){if(this.currentSolutionPath&&this.currentSolutionName&&this.currentSlnCfgFsPath){let e=B.default.basename(this.currentSlnCfgFsPath);j.getInstance().updateRecentSolutionList(this.currentSolutionName,this.currentSolutionPath,e),this.solutionProvider_&&this.solutionProvider_.update(),this.activeProjMgr_&&this.activeProjMgr_.updateCppExtensionCfg(),this.updateSolutionConfig(),j.getInstance().updateSolutionToOpen(""),this.continueFileWatcher(),j.getInstance().GetOutputChannelInstance().info("Welcome to use MIPS Studio!")}}watchProjectDirFileChanged(){if(this.currentSolutionPath){let e=this.currentSolutionPath;this.fsdirfilewatcher?.dispose();let t=te.workspace.createFileSystemWatcher(new te.RelativePattern(e,"**/*.{mpsln,mpproj,hpp,h}"),!1,!1,!1);this.fsdirfilewatcher=t,t.onDidChange(i=>{if(this.currentSolutionName&&this.bWatching){let s=i.fsPath,n=B.default.join(e,this.currentSolutionName+Oe);if(s===n){console.log("Sln Changed:"+s),te.window.showWarningMessage("Sln\u6587\u4EF6\u88AB\u4FEE\u6539,\u662F\u5426\u91CD\u65B0\u52A0\u8F7D?",{modal:!0},"Yes","No").then(a=>{a==="Yes"&&(this.stopFileWatcher(),this.initMipsSolution())});return}else{let a=!1;for(let r of this.projlst_){let l=r.projConfigPath,c=B.default.resolve(e,l);if(s===c){a=!0,console.log("ProjectFile Changed:"+s),te.window.showWarningMessage("Project\u6587\u4EF6\u88AB\u4FEE\u6539,\u662F\u5426\u91CD\u65B0\u52A0\u8F7D?",{modal:!0},"Yes","No").then(d=>{d==="Yes"&&(this.stopFileWatcher(),this.initMipsSolution())});break}}a||this.getCurrentProjManager_imp()?.onProjectHeaderFileChanged(s)}}})}}updateOnConfigSettingsChanged(){this.solutionProvider_&&this.solutionProvider_.update(),this.updateSolutionConfig()}initFromDefaultSlnConfigFileInFolder(){if(this.currentSolutionPath){let e=this.currentSolutionPath,t=A.readdirSync(e,{encoding:"utf-8",withFileTypes:!0}),i=new Array;t.forEach(s=>{if(s.isFile()){let n=s.name;if(B.default.extname(n)===Oe){let r=B.default.join(e,n);i.push(r)}}}),i.length===1&&(this.currentSolutionName||(this.currentSolutionName=B.default.basename(i[0],Oe)),this.initFromSolutionConfigFile_imp(i[0],this.currentSolutionPath))}}initFromSolutionConfigFile_imp(e,t){this.currentSlnCfgFsPath=e;let i=A.readFileSync(e,"utf-8"),s=Q.jsonc.parse(i);if(s){if(s.confversion!==void 0&&s.confversion>=nn){let n=e+Qi,a=-1,r;if(s.projects?.length){this.projlst_=Array.from(s.projects);for(let c=0;c<s.projects.length;++c)this.projlst_[c].projConfigPath=s.projects[c].projConfigPath.replaceAll("\\","/");let l=new J;if(l.projFsPath=t,l.name=s.projects[0].name,A.existsSync(n)){let c=A.readFileSync(n,"utf-8");r=Q.jsonc.parse(c),r&&(r.activeProjIndex!==void 0&&(a=r.activeProjIndex),this.projectUserCfg=Array.from(r.projectUserCfgs)),(a<0||a>=s.projects.length)&&(a=0),l.name=s.projects[a].name;for(let d of this.projectUserCfg)if(d.projName===l.name){l.setProjectUserCfg(d);break}}else{let c=j.getInstance().getToolChainSettingsArr();if(c.length){let d=c[0],u=d.groupName+ke+d.tool_name,h={projName:l.name,curMode:De,toolchainName_debug:u,toolchainName_release:""};l.setProjectUserCfg(h)}}(a<0||a>=s.projects.length)&&(a=0),l.setConfigFilePath(s.projects[a].projConfigPath),l.initFromConfigFile(),l.onProjectInitFinish(),this.activeProjMgr_=l}this.activeProjIndex_=a}this.onSolutionInitFinish()}}openSolution(e){if(A.existsSync(e)){let t=B.default.dirname(e);t!==this.currentSolutionPath?(j.getInstance().updateSolutionToOpen(e),te.commands.executeCommand("vscode.openFolder",te.Uri.file(t))):this.currentSolutionPath&&(j.getInstance().updateSolutionToOpen(e),this.initFromSolutionConfigFile_imp(e,t))}}ImportFromMakeFile(e){let t=this.getCurrentSolutionPath();if(t)if(this.currentSolutionName){let i=new J,s=i.name=this.currentSolutionName,n=!1;for(let a=1;a<16;++a){for(let r of this.projlst_)if(r.name===i.name){n=!0;break}if(n)i.name=s+"_"+a,n=!1;else break}if(n)j.getInstance().GetOutputChannelInstance().error("ImportFromMakeFile Failed, maybe too many projects in this solution.");else{i.projFsPath=t;let a=new _i;a.name=i.name,a.projConfigPath=i.name+gi,i.setConfigFilePath(a.projConfigPath),i.ImportFromMakefile(e)&&(this.projlst_.push(a),this.activeProjIndex_=this.projlst_.length-1,this.activeProjMgr_=i,this.onSolutionInitFinish(),te.commands.executeCommand("mipsstudio.project.settings"))}}else{let i=B.default.basename(t);this.AddSolutionConfigFile_imp(t,i),this.currentSolutionName=i,this.AddlaunchFile2Sln(t);let s=new J;s.name=i,s.projFsPath=t;let n=new _i;n.name=s.name,n.projConfigPath=s.name+gi,s.setConfigFilePath(n.projConfigPath),s.ImportFromMakefile(e)&&(this.projlst_.push(n),this.activeProjIndex_=this.projlst_.length-1,this.activeProjMgr_=s,this.onSolutionInitFinish(),te.commands.executeCommand("mipsstudio.project.settings"))}}async debugProject(){this.currentSolutionPath&&this.checkExistLaunchConfigFile(this.currentSolutionPath)&&this.getCurrentProjManager_imp()?.debugProject()}},I=Ie;q(I,"instance");var St=T(require("path"));var It=class{_panel;_extensionUri;_disposables=[];slnLocation;slnLocation_Re;slnName;slnName_Re;bChkAddToCurrentSolution;bChkMutliProject;bAllowShowAddToCurSln;projType;projToolChain;projName;projFsPath;strSelectedDevice;strSelectedVendor;strSelectedFamily;strSelectedSubFamily;static getInstance(){return It.instance||(It.instance=new It),It.instance}constructor(){this.bChkAddToCurrentSolution=!1,this.bAllowShowAddToCurSln=!1,this.bChkMutliProject=!1,this.slnLocation_Re=this.slnLocation="",this.slnName_Re=this.slnName="newSln",this.projName="newProj",this.projFsPath="",this.strSelectedDevice="",this.strSelectedVendor=this.strSelectedFamily=this.strSelectedSubFamily=""}show(e,t,i,s,n){s!==void 0&&(this.bAllowShowAddToCurSln=this.bChkAddToCurrentSolution=s),n!==void 0&&(this.bChkMutliProject=n),i&&(this.slnLocation_Re=this.slnLocation=i),t&&(this.slnName_Re=this.slnName=t),this.bChkMutliProject?this.projFsPath=St.default.join(this.slnLocation,this.slnName,"projects",this.projName):this.projFsPath=St.default.join(this.slnLocation,this.slnName,this.projName);let a=He.window.activeTextEditor?He.window.activeTextEditor.viewColumn:void 0;this._extensionUri=e,this._panel?this._panel.reveal(a||He.ViewColumn.One):(this._panel=He.window.createWebviewPanel(It.viewType,"MIPS Studio: New Project",a??He.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0,localResourceRoots:[this._extensionUri]}),this._panel.onDidDispose(()=>this.dispose(),null,this._disposables),this._panel.webview.onDidReceiveMessage(r=>{switch(r.type){case"selectPath":Te().then(l=>{l!==void 0&&(this.slnLocation=l,this.updateProjectFsPath(),this._panel?.webview.postMessage({type:"selectedPath",path:l}))});break;case"ok":{let l=r.newprojcfg;l&&l.slnLocation&&l.slnName&&l.projname&&(l.bAddToCurrentSln=this.bChkAddToCurrentSolution,I.getInstance().createNewProject(l)),this.dispose();break}case"chkStatusChanged":r.newprojcfg?.bAddToCurrentSln!==void 0&&(this.bChkAddToCurrentSolution=r.newprojcfg.bAddToCurrentSln,this.bChkAddToCurrentSolution&&(this.slnLocation=this.slnLocation_Re,this.slnName=this.slnName_Re),this._update());break;case"inputElemChanged":r.elem_id&&r.elem_value!==void 0&&this.handleInputElemChanged(r.elem_id,r.elem_value,r.selindex);break;case"chkMutliProjectChanged":r.elem_id==="chkMutliProject"&&r.checked!==void 0&&this.handleChkMutliProjectChanged(r.checked);break;case"onDataSaved":r.newprojcfg?.projname&&(this.projName=r.newprojcfg.projname),r.newprojcfg?.slnLocation&&(this.slnLocation=r.newprojcfg.slnLocation),r.newprojcfg?.projType&&(this.projType=r.newprojcfg.projType),r.newprojcfg?.toolchain&&(this.projToolChain=r.newprojcfg.toolchain),r.newprojcfg?.selectVendor&&(this.strSelectedVendor=r.newprojcfg.selectVendor),r.newprojcfg?.selectFamily&&(this.strSelectedFamily=r.newprojcfg.selectFamily),r.newprojcfg?.selectSubFamily&&(this.strSelectedSubFamily=r.newprojcfg.selectSubFamily),r.newprojcfg?.selectDevice&&(this.strSelectedDevice=r.newprojcfg.selectDevice),r.newprojcfg?.bAddToCurrentSln!==void 0&&(this.bChkAddToCurrentSolution=r.newprojcfg.bAddToCurrentSln);break;case"cancel":this.dispose();break}},null,this._disposables),this._update())}dispose(){this._panel?.dispose(),this._panel=void 0,this.bChkAddToCurrentSolution=!1,this.slnLocation="",this.slnName="newSln",this.projName="newProj",this.strSelectedDevice="",this.strSelectedVendor=this.strSelectedFamily=this.strSelectedSubFamily=""}handleChkMutliProjectChanged(e){e?this.projFsPath=St.default.join(this.slnLocation,this.slnName,"projects",this.projName):this.projFsPath=St.default.join(this.slnLocation,this.slnName,this.projName),this.bChkMutliProject=e,this._update()}updateProjectFsPath(){this.bChkMutliProject?this.projFsPath=St.default.join(this.slnLocation,this.slnName,"projects",this.projName):this.projFsPath=St.default.join(this.slnLocation,this.slnName,this.projName);let e=this.projFsPath;this._panel?.webview.postMessage({type:"updateProjectFsPath",projFsPath:e})}handleInputElemChanged(e,t,i){switch(e){case"selectVendor":this.strSelectedVendor=t,this.strSelectedFamily="",this.strSelectedSubFamily="",this.strSelectedDevice="",this._update();break;case"selectFamily":this.strSelectedDevice="",this.strSelectedSubFamily="",this.strSelectedFamily=t,this._update();break;case"selectSubFamily":this.strSelectedDevice="",this.strSelectedSubFamily=t,this._update();break;case"selectTargetProcessor":this.strSelectedDevice=t;break;case"slnName":this.slnName=t,this.updateProjectFsPath();break;case"slnLocation":this.slnLocation=t,this.updateProjectFsPath();break;case"projname":this.projName=t,this.updateProjectFsPath();break;case"projType":this.projType=t;break;case"toolchains":this.projToolChain=t;break}}_getHtmlForWebview(e){let t=ce(),i="";if(this._panel&&this._extensionUri){let s=e.asWebviewUri(He.Uri.joinPath(this._extensionUri,"media","createProject.js")).toString(),n=e.asWebviewUri(He.Uri.joinPath(this._extensionUri,"media","createProject.css")).toString(),a=this.slnName,r=this.projName,l=this.projFsPath,c=this.slnLocation,d=c.length===0||!this.bChkAddToCurrentSolution?"":"disabled";if(i=`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${e.cspSource}; script-src 'nonce-${t}';">
			<title>Mips Studio</title>
			<link href="${n}" rel="stylesheet" />
		</head>
		<body data-vscode-context='{"preventDefaultContextMenuItems": true }'>
		<div>
		<h2>New Project Wizard</h2>
        <fieldset class="funcarea">
            <legend>C/C++ Projects</legend>
            <div class="mainArea">`,this.bAllowShowAddToCurSln&&c.length!==0){let S=this.bChkAddToCurrentSolution?"checked":"";i+=`<div class="divitem">      
                    <input type="checkbox" id="chkAddToCurrentSolution" ${S}></input>
					<label for="chkAddToCurrentSolution" >create a new project in Current Solution</label>
                </div>`}if(this.bChkAddToCurrentSolution&&a?i+=`<div class="divitem">
				<label class="minilabel" for="slnName">Solution name:</label>
				<input type="text" class="normalinput"  id="slnName" disabled value="${a}"></input>
			</div>
			<div class="divitem">
			<label class="minilabel" for="slnLocation">Location of solution:</label>
			<input type="text" class="normalinput" id="slnLocation"  disabled value="${c}"></input>`:i+=`<div class="divitem">
					<label class="minilabel" for="slnName">Solution name:</label>
					<input type="text" class="normalinput"  id="slnName"  value="${a}"></input>
				</div>                
				<div class="divitem">
				<label class="minilabel" for="slnLocation">Location of solution:</label>
				<input type="text" class="normalinput" id="slnLocation"  value="${c}"></input>`,i+=`
                    <button class="func-button" id="selectPath" ${d}>Browse...</button>
                </div>
				<div class="divitem">
                    <label class="minilabel" for="projname">Project name:</label>
                    <input type="text" class="normalinput"  id="projname" value="${r}"></input>
                </div>`,this.bChkAddToCurrentSolution){let S=this.bChkMutliProject?"checked":"";i+=`<div class="divitem">
						<input type="checkbox" id="chkMutliProject" ${S} disabled></input>
						<label for="chkMutliProject" disabled>Mutli-Project</label>
					</div>`}else{let S=this.bChkMutliProject?"checked":"";i+=`<div class="divitem">
						<input type="checkbox" id="chkMutliProject" ${S}></input>
						<label for="chkMutliProject" >Mutli-Project</label>
					</div>`}i+=`<div class="divitem">
                    <label class="minilabel" for="projPath">Location of Project:</label>
                    <input type="text" class="normalinput"  id="projPath" readonly value="${l}" ></input>
                </div>
				<div class="divitem">
                <label class="minilabel">Manufacturer:</label>
                <select class="normalinput" id='selectVendor'>`;let u=j.getInstance().getAllDeviceVendors(),h=this.strSelectedVendor;for(let S=0;S<u.length;++S)u[S]===h?i+=`<option value="${u[S]}" selected>${u[S]}</option>`:i+=`<option value="${u[S]}">${u[S]}</option>`;u.length&&h===""&&(h=u[0]),this.strSelectedVendor=h,i+=` </select>
            </div>
            <div class="divitem">
               <label class="minilabel">Device Family:</label>
               <select class="normalinput" id='selectFamily'>`;let p=j.getInstance().getAllProcessorFamilys(h),f=this.strSelectedFamily;for(let S=0;S<p.length;++S)p[S]===f?i+=`<option value="${p[S]}" selected>${p[S]}</option>`:i+=`<option value="${p[S]}">${p[S]}</option>`;p.length&&f===""&&(f=p[0]),this.strSelectedFamily=f,i+=` </select>
            </div>
            <div class="divitem">
               <label class="minilabel">Device SubFamily:</label>
               <select class="normalinput" id='selectSubFamily'>`;let b=j.getInstance().getAllProcessorSubFamilys(f),v=this.strSelectedSubFamily;for(let S=0;S<b.length;++S)b[S]===v?i+=`<option value="${b[S]}" selected>${b[S]}</option>`:i+=`<option value="${b[S]}">${b[S]}</option>`;b.length&&v===""&&(v=b[0]),this.strSelectedSubFamily=v,i+=`</select>
               </div>
               <div class="divitem">
               <label class="minilabel">Device:</label>
               <select class="normalinput" id='selectTargetProcessor'>`;let m=j.getInstance().getSupportedDeviceArr_DFP(h,f,v);for(let S=0;S<m.length;++S){let g=m[S].deviceName;m[S].deviceName===this.strSelectedDevice?i+=`<option value="${g}" selected>${g}</option>`:i+=`<option value="${g}" >${g}</option>`}i+=`</select>
        </div> `;let _=["empty elf","c/c++","c++","c","empty dll","empty lib"],C=["Empty Project","C/C++ Project","C++ Project","C Project","Empty Project","Empty Project"],P=["","","","","",""];for(let S=0;S<P.length;++S)_[S]===this.projType&&(P[S]="selected");i+=`<div class="class2">
						<div class="class3">
							<label class="minilabel" for="projType">Project type:</label>
							<select class="normalListBox" size="9" id="projType">
								<optgroup label="Executable" >`,i+=`<option value="${_[0]}" ${P[0]}>${C[0]}</option>
									<option value="${_[1]}" ${P[1]}>${C[1]}</option>
									<option value="${_[2]}" ${P[2]}>${C[2]}</option>
									<option value="${_[3]}" ${P[3]}>${C[3]}</option>
								</optgroup>
								<optgroup label="Shared Library">
									<option value="${_[4]}" ${P[5]}>${C[4]}</option>
								</optgroup>
								<optgroup label="Static Library">
									<option value="${_[5]}" ${P[5]}>${C[5]}</option>
								</optgroup>
							</select>
						</div>`,i+=`<div class="class3">
							<label class="minilabel">Toolchains:</label>
							<select class="normalListBox2" size="9" id="toolchains">
								`;let D=j.getInstance().getToolChainSettingsArr(),N=new Array;if(D&&D.length)for(let S of D)N.includes(S.groupName)||N.push(S.groupName);for(let S of N){i+=` <optgroup label="${S}"> `;for(let g of D)if(g.groupName===S){let x=S+ke+g.tool_name;x===this.projToolChain?i+=`<option value="${x}" selected>${g.tool_name}</option>`:i+=`<option value="${x}">${g.tool_name}</option>`}i+=" </optgroup>"}i+=`</select></div>
				</div>
			</fieldset>
			<div class="finishBtnArea">
			<button class="func-button" id="btnFinish">Finish</button>
			<button class="func-button" id="btnCancel">Cancel</button>
			</div>
		</div>
		<script nonce="${t}" src="${s}"><\/script>
		</body>
		</html>`}return i}_update(){if(this._panel){let e=this._panel.webview;this._panel.webview.html=this._getHtmlForWebview(e)}}},We=It;q(We,"instance"),q(We,"viewType","mipsstudio.newproject");var es=T(require("path"));var on=T(require("os")),Sa=T(require("fs"));var xt=class{_panel;_extensionUri;_disposables=[];static getInstance(){return xt.instance||(xt.instance=new xt),xt.instance}show(e){let t=K.window.activeTextEditor?K.window.activeTextEditor.viewColumn:void 0;this._extensionUri=e,this._panel?this._panel.reveal(t||K.ViewColumn.One):(this._panel=K.window.createWebviewPanel(xt.viewType,"MIPS Studio: Starting",t??K.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!1,localResourceRoots:[K.Uri.joinPath(e,"media")]}),this._panel.onDidDispose(()=>this.dispose(),null,this._disposables),this._panel.onDidChangeViewState(i=>{i.webviewPanel.visible&&this._update()},null),this._panel.webview.html=this._getHtmlForWebview(),this._panel.webview.onDidReceiveMessage(i=>{switch(i.type){case"newproject":this._extensionUri&&We.getInstance().show(this._extensionUri);break;case"openFile":K.commands.executeCommand("workbench.action.files.openFile");break;case"openFolder":K.commands.executeCommand("workbench.action.files.openFolder");break;case"openproject":K.window.showOpenDialog({canSelectMany:!1,canSelectFiles:!0,canSelectFolders:!1,openLabel:"Select MipsSln File",filters:{mips_Sln:["mpsln"]}}).then(s=>{if(s&&s.length){let n=s[0].fsPath;I.getInstance().openSolution(n)}});break;case"openRecentProj":if(i.openrecent?.slnName&&i.openrecent?.slnPath)if(i.openrecent.slnCfgFileName){let s=es.default.join(i.openrecent.slnPath,i.openrecent.slnCfgFileName);I.getInstance().openSolution(s)}else{let s=es.default.join(i.openrecent.slnPath,i.openrecent.slnName+Oe);if(Sa.existsSync(s))I.getInstance().openSolution(s);else{let n=i.openrecent?.slnPath;K.commands.executeCommand("vscode.openFolder",K.Uri.file(n))}}break;case"newFile":K.commands.executeCommand("welcome.showNewFileEntries");break;case"gitClone":K.commands.executeCommand("git.clone");break;case"SetMipsGCCPath":break;case"importProjectWithMakefile":Mt().then(s=>{s!==void 0&&I.getInstance().ImportFromMakeFile(s)});break;case"ViewDocument":{let s=j.getTemplateConfigPath();if(s){let n=es.default.join(s,"manual.pdf"),a=tn();on.platform()==="win32"?a.sendText("Start-Process -FilePath "+n):on.platform()==="linux"&&a.sendText("open "+n)}}break;case"visitWebHome":{let s=K.Uri.parse("https://www.cipunited.com/");K.commands.executeCommand("vscode.open",s)}break}}),this._update())}_update(){this._panel&&(this._panel.webview.html=this._getHtmlForWebview())}dispose(){this._panel?.dispose(),this._panel=void 0}_getHtmlForWebview(){let e=ce(),t="";if(this._panel&&this._extensionUri){let i=this._panel.webview,s=i.asWebviewUri(K.Uri.joinPath(this._extensionUri,"media","start.css")),n=i.asWebviewUri(K.Uri.joinPath(this._extensionUri,"media","start.js")),a=i.asWebviewUri(K.Uri.joinPath(this._extensionUri,"media","cProject.png")),r=i.asWebviewUri(K.Uri.joinPath(this._extensionUri,"media","openProj.png")),l=i.asWebviewUri(K.Uri.joinPath(this._extensionUri,"media","importFromMakefile.png")),c=i.asWebviewUri(K.Uri.joinPath(this._extensionUri,"media","newFile.png")),d=i.asWebviewUri(K.Uri.joinPath(this._extensionUri,"media","openFile.png")),u=i.asWebviewUri(K.Uri.joinPath(this._extensionUri,"media","openFolder.png")),h=i.asWebviewUri(K.Uri.joinPath(this._extensionUri,"media","git.png")),p=i.asWebviewUri(K.Uri.joinPath(this._extensionUri,"media","overview.png")),f=i.asWebviewUri(K.Uri.joinPath(this._extensionUri,"media","tutorial.png")),b=i.asWebviewUri(K.Uri.joinPath(this._extensionUri,"media","samples.png")),v=i.asWebviewUri(K.Uri.joinPath(this._extensionUri,"media","news.png")),m=i.asWebviewUri(K.Uri.joinPath(this._extensionUri,"media","about.png"));t=`<!DOCTYPE html>
			<html>
			<head>
				<meta charset="utf-8"/>
				<!--
					Use a content security policy to only allow loading specific resources in the webview
				-->
				<meta http-equiv="Content-Security-Policy" content="default-src 'none';img-src ${i.cspSource}; style-src ${i.cspSource}; script-src 'nonce-${e}';">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Starting</title>
				<link href="${s}" rel="stylesheet" />
				<title>MIPS Studio Starting</title>
			</head>
			<body data-vscode-context='{"preventDefaultContextMenuItems": true }'>
			<div class="mainArea">
				<h1>MIPS Studio</h1>
				<h2>Let's get start </h1>
				<div class="content">
					<div class="leftItems">
						<div>
							<fieldset class="startArea">
								<legend>Start</legend>
								<ul>
									<li>
										<button class="button-link" id="createProject">
											<img class="fit-picture" src="${a}">
											<span class="fit-picture">Create a C/C++ Project</span>
										</button>
									</li>
									<li>
										<button class="button-link" id="openProject">
											<img class="fit-picture" src="${r}">
											<span class="fit-picture">Open existing Project</span>
										</button>
									</li>
									<li>
										<button class="button-link" id="importProjectWithMakefile">
											<img class="fit-picture" src="${l}">
											<span class="fit-picture">Import existing project with Makefile</span>
										</button>
									</li>
									<li>
										<button class="button-link" id="newFile">
											<img class="fit-picture" src="${c}">
											<span class="fit-picture">New File</span>
										</button>
									</li>
									<li>
										<button class="button-link" id="openFile">
											<img class="fit-picture" src="${d}">
											<span class="fit-picture">Open File</span>
										</button>
									</li>
									<li>
										<button class="button-link" id="openFolder">
											<img class="fit-picture" src="${u}">
											<span class="fit-picture">Open Folder</span>
										</button>
									</li>
									<li>
										<button class="button-link" id="gitClone">
											<img class="fit-picture" src="${h}">
											<span class="fit-picture">Clone Git repository</span>
										</button>
									</li>
								</ul>
							</fieldset>
						</div>
						<div>
							<fieldset class="recentArea">
								<legend>Recent</legend>
								<ul>`;let _=["project1","project2","project3","project4","project5","project6"],C=j.getInstance().recentSlnList;if(C){let P=0;for(let D of C)if(D.slnName&&D.slnPath){let N='<li><button class="button-link" id="'+_[P]+'">'+D.slnName+'</button><span class="path-detail" id="label'+_[P]+'">'+D.slnPath+'</span><div hidden id="slnFile'+_[P]+'">'+D.slnCfgFileName+"</div></li>";t+=N,P++}}t+=`</ul>
						</fieldset>
					</div>
				</div>
				<div class="rightItems">
					<fieldset class="helpArea">
						<legend>Help</legend>
						<ul>
							<li>
							<button class="buttonhelpLink">
							<div class="class1">
								<div>
									<img class="fit-picture2" src="${p}">
								</div>
								<div class="class2">
									<div class="helpTitle">Overview</div>
									<div>Get an overview of the features</div>
								</div>
							</div>
							</button>
							</li>
							<li>
							<button class="buttonhelpLink" id="ViewDocument">
							<div class="class1">
								<div>
									<img class="fit-picture2" src="${f}">
								</div>
								<div class="class2">
									<div class="helpTitle">Tutorial</div>
									<div>Go Through Tutorials</div>
								</div>
							</div>
							</button>
							</li>
							<li>
							<button class="buttonhelpLink">
							<div class="class1">
								<div>
									<img class="fit-picture2" src="${b}">
								</div>
								<div class="class2">
									<div class="helpTitle">Samples</div>
									<div>Try out the samples</div>
								</div>
							</div>
							</button>
							</li>
							<li>
							<button class="buttonhelpLink">
							<div class="class1">
								<div>
									<img class="fit-picture2" src="${v}">
								</div>
								<div class="class2">
									<div class="helpTitle">What's New</div>
									<div>Find out what is new</div>
								</div>
							</div>
							</button>
							</li>
							<li>
							<button class="buttonhelpLink" id="visitWebHome">
							<div class="class1">
								<div>
									<img class="fit-picture2" src="${m}">
								</div>
								<div class="class2">
									<div class="helpTitle">About</div>
									<div>CIPU Homepage</div>
								</div>
							</div>
							</button>
							</li>
						</ul>
					</fieldset>
				</div>
			</div>
			<script nonce="${e}" src="${n}"><\/script>
			</body>	
			</html>`}return t}},wt=xt;q(wt,"instance"),q(wt,"viewType","mipsstudio.startpage");var Ci=T(require("vscode"));var an=T(require("path"));var Wt=class{constructor(e){this._extensionUri=e}_view;resolveWebviewView(e){this._view=e,e.webview.options={enableScripts:!0,localResourceRoots:[this._extensionUri]},e.webview.html=this._getHtmlForWebview(e.webview),e.webview.onDidReceiveMessage(t=>{switch(t.type){case"createProject":{this.createProject();break}case"buildProject":{this.buildMipsProject();break}case"projSettings":{this._extensionUri&&Ae.getInstance().show(this._extensionUri);break}case"SelectElemChanged":t.elem_id&&t.elem_value&&this.handleSelectElemChanged(t.elem_id,t.elem_value);break;case"AddProject":Ci.window.showOpenDialog({canSelectMany:!1,canSelectFiles:!0,canSelectFolders:!1,openLabel:"Add Existed Project",filters:{ProjectFile:["mpproj"]}}).then(i=>{if(i&&i.length>0){let s=i[0].fsPath;I.getInstance().addNewProject(s)}});break}})}update(){this._view&&(this._view.webview.html=this._getHtmlForWebview(this._view.webview))}createProject(){if(this._extensionUri){let e=I.getInstance(),t=e.getCurrentSolutionPath(),i=t?an.default.dirname(t):"";We.getInstance().show(this._extensionUri,e.getSolutionName(),i,e.isHaveInit(),e.IsMutilProject())}}buildMipsProject(){I.getCurrentProjManager()?.projectBuild()}handleSelectElemChanged(e,t){switch(e){case"moreBuildOption":I.getCurrentProjManager()?.buildProjectWithOption(t);break;case"buildType":I.getCurrentProjManager()?.changeProjectSettingActiveMode(t);break;case"projectname":I.getInstance().switchProjectbyName(t),this.update();break}}_getHtmlForWebview(e){let t=e.asWebviewUri(Ci.Uri.joinPath(this._extensionUri,"media","solutionview.js")).toString(),i=e.asWebviewUri(Ci.Uri.joinPath(this._extensionUri,"media","solutionview.css")).toString(),s=ce(),n=I.getCurrentProjManager(),a=n?.isHaveInit(),r=n?.getActiveProjectSettingItem(),l=" ";r&&r.procCoreCfgs.length>r.coreSelectIndex&&r.coreSelectIndex>=0&&(l=r.procCoreCfgs[r.coreSelectIndex].procName);let c=I.getInstance().getSolutionName()??"No Solution",d=c?an.default.basename(c):"No Solution",u="<option>No project found</option>";if(a){let b=I.getInstance().getAllProjectNames(),v=I.getCurrentProjManager()?.name;if(b){u="";for(let m of b)m&&(m===v?u+='<option value="'+m+'" selected>'+m+"</option>":u+='<option value="'+m+'">'+m+"</option>")}}let h=a?"":"disabled",p=n?.projectSetting.curMode===Pe?"selected":"";return`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${e.cspSource}; script-src 'nonce-${s}';">
			<link href="${i}" rel="stylesheet">
			<title>Mips studio Function</title>
		</head>
		<body data-vscode-context='{"preventDefaultContextMenuItems": true }'>
		<div>
			<div class="divitem">
			<label for="solutionName">Solution</label>
			<input class="normalinput" id="solutionName" readonly value="${d}">	
			</div>
			<div class="divitem">
			<label for="projectName">Project</label>
			<select class="normalinput" id="projectname" ${h}>${u}
			</select>
			<button class="minibutton" id="AddProject" ${h}>Add</button>
			</div>
			<div class="divitem">
			<label for="targetType">Target Type</label>
			<input class="normalinput" id="targetType" readonly value="${l}" ${h}>
			</input>
			</div>
			<div class="divitem">
			<label for="buildType">Build Type</label>
			<select class="normalinput" id="buildType" ${h}>
				<option value="${De}">${De}</option>
				<option value="${Pe}" ${p}>${Pe}</option>
			</select>
			</div>
			<div class="funcarea">
				<button class="func-button" id="createProject">NewProject</button>
				<button class="func-button" id="buildProject" ${h}>Build</button>
				<select class="minSelect" id="moreBuildOption" ${h}>
					<option value="">--Please choose an option--</option>
					<option value="clean">Clean Project</option>
					<option value="compileOnly">Compile Only</option>
					<option value="linkOnly">Link Only</option>
				</select>
				<button class="func-button" id="projSettings" ${h}>Settings</button>
			</div>
		</div>
		<script nonce="${s}" src="${t}"><\/script>
		</body>
		</html>`}};q(Wt,"viewType","mipsstudio.solutionview");var $e=T(require("vscode"));var kt=class{_panel;_extensionUri;_disposables=[];currentListItemEditInfo;curAddNewitemListTitle;toolChainArr_;static getInstance(){return kt.instance||(kt.instance=new kt),kt.instance}constructor(){this.currentListItemEditInfo={elem_title:"",data_index:""},this.curAddNewitemListTitle="",this.toolChainArr_=[]}show(e){let t=$e.window.activeTextEditor?$e.window.activeTextEditor.viewColumn:void 0;this._extensionUri=e,this._panel?this._panel.reveal(t||$e.ViewColumn.One):(this._panel=$e.window.createWebviewPanel(kt.viewType,"MIPS Studio: ToolChains Settings",t??$e.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0,localResourceRoots:[this._extensionUri]}),this._panel.onDidDispose(()=>this.dispose(),null,this._disposables),this.toolChainArr_=Array.from(j.getInstance().getToolChainSettingsArr()),this._panel.webview.onDidReceiveMessage(i=>{switch(i.type){case"BrowsePath":i.data_index&&Te().then(s=>{s!==void 0&&this._panel?.webview.postMessage({type:"BrowsePath",path:s,index:i.data_index})});break;case"listRowEdit":i.elem_title&&i.data_index&&(this.currentListItemEditInfo.data_index=i.data_index,this.currentListItemEditInfo.elem_title=i.elem_title,this._update());break;case"listRowEditOk":i.elem_title&&i.data_index&&i.listItemValueLst&&this.updateConfigListItemValue(i.elem_title,i.data_index,i.listItemValueLst);break;case"listNewRowOk":i.elem_title&&i.listItemValueLst&&this.addConfigListItemValue(i.elem_title,i.listItemValueLst);break;case"listRowRemove":if(i.elem_title&&i.data_index){let s=parseInt(i.data_index);this.handleListRowRemoved(i.elem_title,s)}break;case"listRowEditCancel":this.currentListItemEditInfo.data_index="",this.currentListItemEditInfo.elem_title="",this._update();break;case"listNewRowCancel":this.curAddNewitemListTitle="",this._update();break;case"listAddRow":i.elem_title&&(this.curAddNewitemListTitle=i.elem_title,this._update());break}},null,this._disposables),this._update())}dispose(){j.getInstance().updateToolChainsSettingsArr(this.toolChainArr_),this._panel?.dispose(),this._panel=void 0}handleListRowRemoved(e,t){e==="toolChainsSettings"&&t>=0&&t<this.toolChainArr_.length&&this.toolChainArr_.splice(t,1),this.currentListItemEditInfo.data_index="",this.currentListItemEditInfo.elem_title="",this._update()}addConfigListItemValue(e,t){this.updateConfiglistItem_Validfy(e,t)&&(this.curAddNewitemListTitle="",this._update())}updateConfigListItemValue(e,t,i){this.updateConfiglistItem_Validfy(e,i,t)&&(this.currentListItemEditInfo.data_index="",this.currentListItemEditInfo.elem_title="",this._update())}updateConfiglistItem_Validfy(e,t,i){let s=!1,n=i?parseInt(i):-1;if(e==="toolChainsSettings")if(n===-1){let a=new Oi;a.groupName=t[0],a.tool_name=t[1],a.tool_path=t[2],this.toolChainArr_.push(a),s=!0}else n>=0&&n<this.toolChainArr_.length&&(this.toolChainArr_[n].groupName=t[0],this.toolChainArr_[n].tool_name=t[1],this.toolChainArr_[n].tool_path=t[2],s=!0);return s}_getHtmlForWebview(e){let t=ce(),i="";if(this._panel&&this._extensionUri){let s=e.asWebviewUri($e.Uri.joinPath(this._extensionUri,"media","toolChainsSettingView.js")).toString(),n=e.asWebviewUri($e.Uri.joinPath(this._extensionUri,"media","toolChainsSettingView.css")).toString(),a=e.asWebviewUri($e.Uri.joinPath(this._extensionUri,"media","codicon.css"));i=`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<link href="${n}" rel="stylesheet" />
			<meta http-equiv="Content-Security-Policy" content="default-src 'none'; font-src ${e.cspSource}; style-src ${e.cspSource};script-src 'nonce-${t}';">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>>Mips Studio</title>
			<link href="${n}" rel="stylesheet" />
			<link href="${a}" rel="stylesheet" />
		</head>
		<body data-vscode-context='{"preventDefaultContextMenuItems": true }'>
		<div class="mainArea">
		<h1>ToolChains Settings</h1>`,i+=`
		<div class="setting-item-value">
			<div class="setting-item-control" title="toolChainsSettings">
				<div role="list" class="setting-list-object-widget" tabindex="-1"
					data-focusable="true">
					<div class="setting-list-row-header">
						<div class="setting-list-object-value">toolChain Name</div>
						<div class="setting-list-object-value">version Description</div>
						<div class="setting-list-object-valueLong">Path</div>
					</div>`;let r=!1;this.currentListItemEditInfo.elem_title==="toolChainsSettings"&&(r=!0);let l=0,c=parseInt(this.currentListItemEditInfo.data_index);for(let u of this.toolChainArr_)r&&l===c?i+=`<div class="setting-list-row" data-index="${l}"  col-count="5" tabindex="-1" role="listitem">
<div class="setting-list-object-value">
<div class="setting-list-object-edit-item"><input class="setting-list-object-input" value="${u.groupName}"></input></div>
</div>
<div class="setting-list-object-value">
<div class="setting-list-object-edit-item"><input class="setting-list-object-input" value="${u.tool_name}"></input></div>
</div>
<div class="setting-list-object-valueLong">
<div class="setting-list-object-edit-item"><input class="setting-list-object-input" value="${u.tool_path}" id="PathValue_${l}"></input>
<button class="monaco-text-button"  id="btnBrowseFile" data_index="${l}">Browse</button></div>
</div>
<div class="setting-list-row-editdiv">
<a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
<a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
</div>
</div>`:i+=`<div class="setting-list-row" data-index="${l}" tabindex="-1" role="listitem">
<div class="setting-list-object-value">${u.groupName}
</div>
<div class="setting-list-object-value">${u.tool_name}
</div>
<div class="setting-list-object-valueLong">${u.tool_path}
</div>
<div class="monaco-action-bar">
	<ul class="actions-container" role="toolbar">
		<li class="action-item" role="presentation" title="Edit Item">
		<a class="codicon codicon-edit" role="button"
				aria-label="Edit Item" tabindex="-1"
				data-focusable="true"></a>
		</li>
		<li class="action-item" role="presentation" title="Remove Item"><a
				class="codicon codicon-remove" role="button"
				aria-label="Remove Item" data-focusable="true"
				tabindex="-1"></a></li>
	</ul>
</div>
</div>`,++l;this.curAddNewitemListTitle==="toolChainsSettings"?i+=`<div class="setting-list-new-row">
<div class="setting-list-object-value">
	<div class="setting-list-object-edit-item"><input class="setting-list-object-input"></input></div>
</div>
<div class="setting-list-object-value">
	<div class="setting-list-object-edit-item"><input class="setting-list-object-input"></input></div>
</div>
<div class="setting-list-object-valueLong">
	<div class="setting-list-object-edit-item"><input class="setting-list-object-input" id="PathValue_-1"></input>
	<button class="monaco-text-button"  id="btnBrowseFile" data_index="-1">Browse</button>
	</div>
</div>
<div class="setting-list-row-editdiv">
	<a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
	<a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
</div>
</div>`:i+=`</div>
		<div class="setting-list-new-row">
			<a class="monaco-text-button setting-list-addButton" tabindex="-1"
				role="button" 
				data-focusable="true">Add Item</a>
		</div>`,i+=`<script nonce="${t}" src="${s}"><\/script>
			</body>
			</html>`}return i}_update(){if(this._panel){let e=this._panel.webview;this._panel.webview.html=this._getHtmlForWebview(e)}}},Ht=kt;q(Ht,"instance"),q(Ht,"viewType","mipsstudio.toolChainsSettingView");var un=T(require("path"));var xe=T(require("vscode"));var jt=class{_panel;_extensionUri;_disposables=[];_installed_sdkPackages;_selectedFamilyStr;static getInstance(){return jt.instance||(jt.instance=new jt),jt.instance}constructor(){this._selectedFamilyStr=""}loadSdkPackageInfo(){this._installed_sdkPackages=j.getInstance().getInstalledSdkPackagesnfo()}show(e){let t=xe.window.activeTextEditor?xe.window.activeTextEditor.viewColumn:void 0;this._extensionUri=e,this._panel?this._panel.reveal(t||xe.ViewColumn.One):(this._panel=xe.window.createWebviewPanel(jt.viewType,"MIPS Studio: Sdk Package Manage",t??xe.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0,localResourceRoots:[this._extensionUri]}),this._panel.onDidDispose(()=>this.dispose(),null,this._disposables),this.loadSdkPackageInfo(),this._panel.webview.onDidReceiveMessage(i=>{switch(i.type){case"listAddRow":xe.window.showOpenDialog({canSelectMany:!1,canSelectFiles:!0,canSelectFolders:!1,openLabel:"Select sdk pack File",filters:{pack:["pack"]}}).then(s=>{if(s&&s.length){let n=s[0].fsPath;j.getInstance().addSdkPackToSys(n).then(a=>{a&&(this.loadSdkPackageInfo(),this._update())})}});break;case"listRowRemove":if(i.elem_title&&i.data_index){let s=parseInt(i.data_index);this.handleListRowRemoved(i.elem_title,s)}break;case"familySelected":i.familystr&&(this._selectedFamilyStr=i.familystr);break}},null,this._disposables),this._update())}dispose(){this._panel?.dispose(),this._panel=void 0}handleListRowRemoved(e,t){if(t>=0)switch(e){case"installedSdkPackages":if(this._installed_sdkPackages&&this._installed_sdkPackages.length>t){let i=this._installed_sdkPackages[t];xe.workspace.fs.delete(xe.Uri.file(i.packRootPath),{recursive:!0}),this._installed_sdkPackages.splice(t,1),this._update()}break}}_getHtmlForWebview(e){let t=ce(),i="";if(this._panel&&this._extensionUri){let s=e.asWebviewUri(xe.Uri.joinPath(this._extensionUri,"media","sdkPackageManageView.js")).toString(),n=e.asWebviewUri(xe.Uri.joinPath(this._extensionUri,"media","sdkPackageManageView.css")).toString(),a=e.asWebviewUri(xe.Uri.joinPath(this._extensionUri,"media","codicon.css"));i=`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<link href="${n}" rel="stylesheet" />
			<meta http-equiv="Content-Security-Policy" content="default-src 'none'; font-src ${e.cspSource}; style-src ${e.cspSource};script-src 'nonce-${t}';">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>>Mips Studio</title>
			<link href="${n}" rel="stylesheet" />
			<link href="${a}" rel="stylesheet" />
		</head>
		<body data-vscode-context='{"preventDefaultContextMenuItems": true }'>
		<div class="sidebar-container">
			<div class="sidebar-body">
				<div class="sidebar-filter">
					<input id="sidebar-filter-input" class="sidebar-filter-input" type="text" placeholder="Filter" value="">
					<div class="monaco-action-bar">
					<ul class="actions-container" role="toolbar">
						<li class="action-item" role="presentation" title="Clear Filter"><a
								class="codicon codicon-clear-all" role="button"
								aria-label="Clear Filter" data-focusable="true"
								tabindex="-1"></a></li>
					</ul>
					</div>
				</div>
				<div class="devicelist" id="sidebar_deviceList">`;let r=j.getInstance().getAllDeviceVendors();for(let c of r){i+=`<div class="detail-manufacuter" tabindex="-1">
				<details  open><summary> ${c}</summary><ul>`;let d=j.getInstance().getAllProcessorFamilys(c);for(let u of d){let h=c+"*#_#*"+u;this._selectedFamilyStr===h?i+=`<li><div class="detail-family-selected" tabindex="-1" data-family="${h}" ><details open><summary>${u}</summary><ul>`:i+=`<li><div class="detail-family" tabindex="-1" data-family="${h}" ><details open><summary>${u}</summary><ul>`;let p=j.getInstance().getAllProcessorSubFamilys(u);for(let f of p){i+=`<li><div class="detail-subfamily"><details open><summary>${f}</summary><ul>`;let b=j.getInstance().getSupportedDeviceArr_DFP(c,u,f);for(let v of b)i+=`<li><label>${v.deviceName}</label></li>`;i+="</ul></details></div></li>"}i+="</ul></details></div></li>"}i+="</ul></details></div>"}i+=`</div>
				</div>
			</div>
		</div>
		<main class="mainArea">
		<h1>Sdk Package Info</h1>`,i+=`<h2>Installed SDK Packages</h2>
		<div class="setting-item-value">
			<div class="setting-item-control" title="installedSdkPackages">
				<div role="list" class="setting-list-object-widget" tabindex="-1"
					data-focusable="true">
					<div class="setting-list-row-header">
						<div class="list_item_min">Package Vendor</div>
						<div class="setting-list-object-value">Description</div>
						<div class="list_item_min">Version</div>
						<div class="list_item_min">Date</div>
						<div class="setting-list-object-value">Version Description</div>
						<div class="setting-list-object-valueLong">Familys</div>
						<div class="setting-list-object-valueLong">Components</div>
					</div>`;let l=0;if(this._installed_sdkPackages)for(let c of this._installed_sdkPackages){let d=c.releases.length,u=c.releases[d-1];i+=`<div class="setting-list-row" data-index="${l}" tabindex="-1" role="listitem">
			<div class="list_item_min">${c.vendor}
			</div>
			<div class="setting-list-object-value">${c.description}
			</div>
			<div class="list_item_min">${u.version}
			</div>
			<div class="list_item_min">${u.date}
			</div>
			<div class="setting-list-object-value">${u.changeDesc}
			</div>
			<div class="setting-list-object-valueLong">`;for(let h of c.families){i+=`<details open><summary>${h.familyName}</summary>
						<ul class="subFamilyList">`;for(let p of h.subfamilies)i+=`<li class="subfamilyName"> ${p.subfamilyName}</li> `;i+="</ul></details> "}if(i+=`</div>
			<div class="setting-list-object-valueLong">`,c.components){let h="",p=!1,f=!1;for(let b of c.components)b.comGroup!==h?(f&&(i+="</ul>"),f=!1,h&&(p=!0,i+="</details>"),i+=`<details open><summary> ${b.comGroup} </summary>`,h=b.comGroup):p=!1,b.comSubgroup&&(p&&(i+="<ul>",f=!0),i+=`<li class="comSubGroup"> ${b.comSubgroup}</li> `);p&&(i+="</details>")}i+=`</div>
			<div class="monaco-action-bar">
				<ul class="actions-container" role="toolbar">
					<li class="action-item" role="presentation" title="Remove Item"><a
							class="codicon codicon-remove" role="button"
							aria-label="Remove Item" data-focusable="true"
							tabindex="-1"></a></li>
				</ul>
			</div>
			</div>`,++l}i+=`</div>
		<div class="setting-list-new-row">
			<a class="monaco-text-button setting-list-addButton" tabindex="-1"
				role="button" 
				data-focusable="true">Add Local Sdk Package</a>
		</div>
		<h2>Available SDK Packages On Netowrk Server</h2>
		<div class="setting-item-value">
			<div class="setting-item-control" title="availableSdkPackages">
				<div role="list" class="setting-list-object-widget" tabindex="-1"
					data-focusable="true">
					<div class="setting-list-row-header">
						<div class="list_item_min">Vendor</div>
						<div class="setting-list-object-value">Description</div>
						<div class="list_item_min">Version</div>
						<div class="list_item_min">Date</div>
						<div class="setting-list-object-value">Version Description</div>
						<div class="setting-list-object-valueLong">Familys</div>
						<div class="setting-list-object-valueLong">Components</div>
					</div>
				</div>
			</div>
		</div>`,i+=`</main><script nonce="${t}" src="${s}"><\/script>
			</body>
			</html>`}return i}_update(){if(this._panel){let e=this._panel.webview;this._panel.webview.html=this._getHtmlForWebview(e)}}},Gt=jt;q(Gt,"instance"),q(Gt,"viewType","mipsstudio.sdkPackageManageView");var ie=T(require("vscode"));var Ge=T(require("path")),ts=T(ti()),Je=T(require("fs"));var wa=T(Ds());var rn=["Audio","Board Support","Core","CMSIS Driver","Device","File System","Gaphics","IoT Client","IoT Service","IoT Utility","Network","Operating systems","Security","USB","Utility"],Ia=["header","include","source","sourceC","sourceCpp","sourceAsm","library","object","linkerScript","utility","doc","image","other"],xa=["template","config"],ln=class{vendor;familyName;constructor(){this.vendor=this.familyName=""}},Et=class{_panel;_extensionUri;_disposables=[];supportedFamilies;supportedDeviceVendors;packageItem;releaseInfoItem;componentItems;curEdit_componentItem;curEdit_componentIndex;componentFiles;curEdit_componentFile;curEdit_componentFileIndex;curEdit_ComponentFileCategory_New;curEdit_ComponentFileCategory_Edit;curEdit_componentCondition;curEdit_compConditionRequireIndex;selectedFamilies;curEdit_SelectedFamilyIndex;curEdit_FamilyItem;familyItems;curEdit_familyIndex;subFamilyItems;curEdit_subFamilyItem;curEdit_subFamilyIndex;subFamily_memoryMap;curEdit_subFamilyMemoryIndex;deviceItems;curEdit_device;curEdit_DeviceIndex;device_memoryMap;curEdit_deviceMemoryIndex;devProcessors;curEdit_ProcessorIndex;curEdit_devProcessor;static getInstance(){return Et.instance||(Et.instance=new Et),Et.instance}constructor(){this.packageItem=new vt,this.releaseInfoItem=new Tt,this.selectedFamilies=[],this.curEdit_SelectedFamilyIndex=-1,this.componentItems=this.packageItem.components??[],this.curEdit_componentItem=new Me,this.curEdit_componentIndex=-1,this.componentFiles=this.curEdit_componentItem.files,this.curEdit_componentFile=new nt,this.curEdit_componentFileIndex=-1,this.curEdit_ComponentFileCategory_New="",this.curEdit_ComponentFileCategory_Edit="",this.curEdit_compConditionRequireIndex=-1,this.supportedDeviceVendors=[],this.supportedFamilies=[],this.familyItems=this.packageItem.families,this.curEdit_FamilyItem=new qe,this.curEdit_familyIndex=-1,this.curEdit_subFamilyIndex=-1,this.subFamilyItems=this.curEdit_FamilyItem.subfamilies,this.curEdit_subFamilyItem=new st,this.subFamily_memoryMap=this.curEdit_subFamilyItem.memorys,this.curEdit_subFamilyMemoryIndex=-1,this.deviceItems=this.curEdit_subFamilyItem.devices,this.curEdit_device=new Ue,this.curEdit_DeviceIndex=-1,this.curEdit_devProcessor=new tt,this.devProcessors=this.curEdit_device.processors,this.curEdit_ProcessorIndex=-1,this.curEdit_deviceMemoryIndex=-1,this.device_memoryMap=this.curEdit_device.memorys}resetOnPackageItemChanged(){let e=this.packageItem.releases.length;e&&this.releaseInfoItem.copy(this.packageItem.releases[e-1]),this.selectedFamilies=[],this.curEdit_SelectedFamilyIndex=-1,this.componentItems=this.packageItem.components??[],this.curEdit_componentItem=new Me,this.curEdit_componentIndex=-1,this.componentFiles=this.curEdit_componentItem.files,this.curEdit_componentFile=new nt,this.curEdit_componentFileIndex=-1,this.curEdit_ComponentFileCategory_New="",this.curEdit_ComponentFileCategory_Edit="",this.curEdit_compConditionRequireIndex=-1,this.familyItems=this.packageItem.families,this.curEdit_FamilyItem=new qe,this.curEdit_familyIndex=-1,this.curEdit_subFamilyIndex=-1,this.subFamilyItems=this.curEdit_FamilyItem.subfamilies,this.curEdit_subFamilyItem=new st,this.deviceItems=this.curEdit_subFamilyItem.devices,this.curEdit_device=new Ue,this.curEdit_DeviceIndex=-1,this.curEdit_devProcessor=new tt,this.devProcessors=this.curEdit_device.processors,this.curEdit_ProcessorIndex=-1,this.curEdit_deviceMemoryIndex=-1,this.device_memoryMap=this.curEdit_device.memorys}ResetMemberValues(){this.packageItem=new vt,this.releaseInfoItem=new Tt,this.selectedFamilies=[],this.curEdit_SelectedFamilyIndex=-1,this.componentItems=this.packageItem.components??[],this.curEdit_componentItem=new Me,this.curEdit_componentIndex=-1,this.componentFiles=this.curEdit_componentItem.files,this.curEdit_componentFile=new nt,this.curEdit_componentFileIndex=-1,this.curEdit_ComponentFileCategory_New="",this.curEdit_ComponentFileCategory_Edit="",this.curEdit_compConditionRequireIndex=-1,this.supportedDeviceVendors=[],this.supportedFamilies=[],this.familyItems=this.packageItem.families,this.curEdit_FamilyItem=new qe,this.curEdit_familyIndex=-1,this.curEdit_subFamilyIndex=-1,this.subFamilyItems=this.curEdit_FamilyItem.subfamilies,this.curEdit_subFamilyItem=new st,this.deviceItems=this.curEdit_subFamilyItem.devices,this.curEdit_device=new Ue,this.curEdit_DeviceIndex=-1,this.curEdit_devProcessor=new tt,this.devProcessors=this.curEdit_device.processors,this.curEdit_ProcessorIndex=-1,this.curEdit_deviceMemoryIndex=-1,this.device_memoryMap=this.curEdit_device.memorys}loadDeviceInfo(){this.supportedDeviceVendors=j.getInstance().getAllDeviceVendors(),this.supportedFamilies=j.getInstance().getAllProcessorFamilys()}show(e){let t=ie.window.activeTextEditor?ie.window.activeTextEditor.viewColumn:void 0;this._extensionUri=e,this._panel?this._panel.reveal(t||ie.ViewColumn.One):(this._panel=ie.window.createWebviewPanel(Et.viewType,"MIPS Studio: package Edit",t??ie.ViewColumn.One,{enableScripts:!0,retainContextWhenHidden:!0,localResourceRoots:[this._extensionUri]}),this._panel.onDidDispose(()=>this.dispose(),null,this._disposables),this.loadDeviceInfo(),this._panel.webview.onDidReceiveMessage(i=>{switch(i.type){case"BrowseFile":if(i.valueid){let s=!1,n=0,a=!1;i.valueid==="PathValue_FileList_New"?(s=this.curEdit_ComponentFileCategory_New==="include",n=1):i.valueid==="PathValue_FileList_Edit"?(s=this.curEdit_ComponentFileCategory_Edit==="include",n=2):i.valueid==="packDFPFile"&&(a=!0),s?Te().then(r=>{r!==void 0&&this._panel?.webview.postMessage({type:"BrowsePath",path:r,valueid:i.valueid})}):a?ie.window.showOpenDialog({canSelectMany:!1,canSelectFiles:!0,canSelectFolders:!1,openLabel:"Select DFP File",filters:{DFP:["json"]}}).then(r=>{if(r&&r.length){let l=r[0].fsPath;this._panel?.webview.postMessage({type:"BrowsePath",path:l,valueid:i.valueid});let c=Je.readFileSync(l),d=ts.jsonc.parse(c.toString());d.package&&(this.packageItem.copy(d.package),this.packageItem.packRootPath=Ge.default.dirname(l),this.resetOnPackageItemChanged()),this.updatePackageValue()}}):Mt().then(r=>{if(r!==void 0&&(this._panel?.webview.postMessage({type:"BrowsePath",path:r,valueid:i.valueid}),n>0)){let l=Ge.default.extname(r),c="";switch(l){case".c":case".C":c="sourceC";break;case".S":c="sourceAsm";break;case".h":case".H":c="header";break}n===1?this.updateHtmlElemItemValue("select_FileList_Category_New",c):n===2&&this.updateHtmlElemItemValue("select_FileList_Category_Edit",c)}})}break;case"BrowsePath":i.valueid&&Te().then(s=>{s!==void 0&&(this._panel?.webview.postMessage({type:"BrowsePath",path:s,valueid:i.valueid}),i.valueid==="pack_BasePath"&&(this.packageItem.packRootPath=s))});break;case"listRowEditOk":i.elem_title&&i.data_index&&i.listItemValueLst&&this.updateConfigListItemValue(i.elem_title,i.data_index,i.listItemValueLst);break;case"listNewRowOk":i.elem_title&&i.listItemValueLst&&this.addConfigListItemValue(i.elem_title,i.listItemValueLst);break;case"listRowRemove":if(i.elem_title&&i.data_index){let s=parseInt(i.data_index);this.handleListRowRemoved(i.elem_title,s)}break;case"listRowEdit":if(i.elem_title&&i.data_index){let s=parseInt(i.data_index);this.handleListRowEdit(i.elem_title,s)}break;case"listRowEditCancel":if(i.elem_title&&i.data_index){let s=parseInt(i.data_index);this.handleListRowEditCancel(i.elem_title,s)}break;case"listNewRowCancel":i.elem_title&&this.handleListNewRowCancel(i.elem_title);break;case"inputElemChanged":i.elem_id&&i.elem_value!==void 0&&this.handleInputElemChanged(i.elem_id,i.elem_value);break;case"buttonClickedOn":i.elem_id&&this.handleButtonClickedOn(i.elem_id);break}},null,this._disposables),this._update())}updateProcessorItems(e){let t="";if(this.devProcessors){let i=0;for(let s of this.devProcessors)t+=`<div class="setting-list-row" data-index="${i}"  tabindex="-1" role="listitem">
						<div class="setting-list-object-valueMin">
							${s.procName}
						</div>
						<div class="setting-list-object-valueMin">
							${s.proUnits}
						</div>
						<div class="setting-list-object-valueMin">
							${s.devCore}
						</div>
						<div class="setting-list-object-value">
							${s.devEndian}
						</div>
						<div class="setting-list-object-valueMin">
							${s.devCoreVersion}
						</div>
						<div class="setting-list-object-valueMin">
							${s.devFpu}
						</div>
						<div class="setting-list-object-valueMin">
							${s.devMpu}
						</div>
						<div class="setting-list-object-valueMin">
							${s.devDsp}
						</div>
						<div class="setting-list-sibling"></div>
                            <div class="monaco-action-bar">
                                <ul class="actions-container" role="toolbar">
                                    <li class="action-item" role="presentation" title="Edit Item">
                                        <a class="codicon codicon-edit"
                                            role="button" aria-label="Edit Item"
                                            tabindex="-1" data-focusable="true">
                                        </a>
                                    </li>
                                    <li class="action-item" role="presentation"
                                        title="Remove Item">
                                        <a class="codicon codicon-remove" role="button"
                                            aria-label="Remove Item" data-focusable="true"
                                            tabindex="-1"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
					</div>`,++i}this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"ProcessorList-row-container",strhtml:t}),e&&this.updateProcessorItemValue()}updateComponentConditionValues(){if(this.curEdit_componentCondition){let e=`<summary>Condition</summary>
			<hr />
			<div class="class1">
				<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevVendor" `;if(this.curEdit_componentCondition.deviceVendor?e+=` checked>
				<label class="minilabel" for="chk_conditionDevVendor">Device Vendor</label>
				<input class="wideinput" id="input_condition_devVendors"  value="${this.curEdit_componentCondition.deviceVendor}">
				</input>`:e+=`disabled>
				<label class="minilabel" for="chk_conditionDevVendor">Device Vendor</label>
				<input class="wideinput" id="input_condition_devVendors"  hidden disabled>
				</input>`,e+=`</div>
			<div class="class1">
				<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevName" `,this.curEdit_componentCondition.deviceNames?.length?e+=` checked>
				<label class="minilabel" for="chk_conditionDevName">Device Name</label>
				<input class="wideinput" id="input_condition_devNames"  value="${this.curEdit_componentCondition.deviceNames}">
				</input>`:e+=`disabled>
				<label class="minilabel" for="chk_conditionDevName">Device Name</label>
				<input class="wideinput" id="input_condition_devNames" placeholder="Use commas to separate multiple"  hidden disabled>
				</input>`,e+=`</div>
			<div class="class1">
				<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionProcName" `,this.curEdit_componentCondition.procNames?.length?e+=` checked>
					<label class="minilabel" for="chk_conditionProcName">Proc Name</label>
					<input class="wideinput" id="input_condition_procNames"  value="${this.curEdit_componentCondition.procNames}">
					</input>`:e+=`disabled>
					<label class="minilabel" for="chk_conditionProcName">Proc Name</label>
					<input class="wideinput" id="input_condition_procNames" placeholder="Use commas to separate multiple"  hidden disabled>
					</input>`,e+=`</div>
			<div class="class1">
				<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevCores" `,this.curEdit_componentCondition.deviceCores?.length?e+=` checked>
					<label class="minilabel" for="chk_conditionDevCores">Dev Core</label>
					<input class="wideinput" id="input_condition_devCores"  value="${this.curEdit_componentCondition.deviceCores}">
					</input>`:e+=`disabled>
					<label class="minilabel" for="chk_conditionDevCores">Dev Core</label>
					<input class="wideinput" id="input_condition_devCores" placeholder="Use commas to separate multiple"  hidden disabled>
					</input>`,e+=`</div>
			<div class="class1">
				<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevFPU" `,this.curEdit_componentCondition.devFpu){e+=` checked>
						<label class="minilabel" for="chk_conditionDevFPU">FPU</label>
						<select class="wideinput" id="select_condition_devPFU" hidden disabled>`;let t=["FPU","SP_FPU","DP_FPU"];for(let i of t){let s=this.curEdit_componentCondition.devFpu===i?"checked":"";e+=` <option value="${i}" ${s}>${i}</option>`}e+="</select>"}else e+=`disabled>
						<label class="minilabel" for="chk_conditionDevFPU">FPU</label>
						<select class="wideinput" id="select_condition_devPFU" hidden disabled>
							<option value="FPU">FPU</option>
							<option value="SP_FPU">SP_FPU</option>
							<option value="DP_FPU">DP_FPU</option>
						</select>`;e+=`</div>
			<div class="class1">
				<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevMPU" `,this.curEdit_componentCondition.devMpu?e+=` checked>
						<label class="minilabel" for="chk_conditionDevMPU">MPU</label>
						<select class="wideinput" id="select_condition_devMFU" hidden disabled>
							<option value="MPU">MPU</option>
						</select>`:e+=`disabled>
						<label class="minilabel" for="chk_conditionDevMPU">MPU</label>
						<select class="wideinput" id="select_condition_devMFU" hidden disabled>
							<option value="MPU">MPU</option>
						</select>`,e+=`</div>
			<div class="class1">
				<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevDSP" `,this.curEdit_componentCondition.devDsp?e+=` checked>
							<label class="minilabel" for="chk_conditionDevDSP">DSP</label>
							<select class="wideinput" id="select_condition_devDSP" hidden disabled>
								<option value="DSP">DSP</option>
							</select>`:e+=`disabled>
							<label class="minilabel" for="chk_conditionDevDSP">DSP</label>
							<select class="wideinput" id="select_condition_devDSP" hidden disabled>
								<option value="DSP">DSP</option>
							</select>`,e+=`</div>
			<div class="classInner">
			<label class="minilabel">Requires:</label>
			<div class="setting-item-control" title="listConditionComRequires">
					<div role="list" class="setting-list-widget" tabindex="-1"
						data-focusable="true">
						<div class="setting-list-row-header">		
							<div class="setting-list-object-value">Class</div>
							<div class="setting-list-object-value">Group</div>
							<div class="setting-list-object-value">SubGroup</div>
							<div class="setting-list-object-value">Version</div>
							<div class="setting-list-object-value">Variant</div>
						</div>
						<div id="ConditionComRequiresList-row-container">
						</div>
						<div class="setting-list-new-row" id="ConditionComRequiresList-new-row">
							<button class="monaco-text-button"  id="btnConditionComRequiresListAdd" disabled>Add Item</button>
						</div>
					</div>
				</div>
			</div>
			<div class="finishBtnArea">
				<button class="monaco-text-button" id="btnApplyCondition" disabled>Apply</button>
				<button class="monaco-text-button" id="btnRemoveCondition" disabled>Remove Condition</button>
				<button class="monaco-text-button" id="btnResetCondition" disabled>Reset Condition</button>
			</div>`,this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"detail_Condition",strhtml:e})}else{let e=`<summary>Condition</summary>
			<hr />
			<div class="class1">
				<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevVendor" disabled>
				<label class="minilabel" for="chk_conditionDevVendor">Device Vendor</label>
				<input class="wideinput" id="input_condition_devVendors"  placeholder="Use commas to separate multiple" hidden disabled>
				</input>
			</div>
			<div class="class1">
				<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevName" disabled>
				<label class="minilabel" for="chk_conditionDevName">Device Name</label>
				<input class="wideinput" id="input_condition_devNames" hidden disabled>
				</input>
			</div>
			<div class="class1">
				<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionProcName" disabled>
				<label class="minilabel" for="chk_conditionProcName">Proc Name</label>
				<input class="wideinput" id="input_condition_procNames" hidden disabled>
				</input>
			</div>
			<div class="class1">
				<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevCores" disabled>
				<label class="minilabel" for="chk_conditionDevCores">Dev Core</label>
				<input class="wideinput" id="input_condition_devCores" hidden disabled>
				</input>
			</div>
			<div class="class1">
				<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevFPU" disabled>
				<label class="minilabel" for="chk_conditionDevFPU">FPU</label>
				<select class="wideinput" id="select_condition_devPFU" hidden disabled>
					<option value="FPU">FPU</option>
					<option value="SP_FPU">SP_FPU</option>
					<option value="DP_FPU">DP_FPU</option>
				</select>
			</div>
			<div class="class1">
				<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevMPU" disabled>
				<label class="minilabel" for="chk_conditionDevMPU">MPU</label>
				<select class="wideinput" id="select_condition_devMFU" hidden disabled>
					<option value="MPU">MPU</option>
				</select>
			</div>
			<div class="class1">
				<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevDSP" disabled>
				<label class="minilabel" for="chk_conditionDevDSP">DSP</label>
				<select class="wideinput" id="select_condition_devDSP" hidden disabled>
					<option value="DSP">DSP</option>
				</select>
			</div>
			<div class="classInner">
			<label class="minilabel">Requires:</label>
			<div class="setting-item-control" title="listConditionComRequires">
					<div role="list" class="setting-list-widget" tabindex="-1"
						data-focusable="true">
						<div class="setting-list-row-header">		
							<div class="setting-list-object-value">Class</div>
							<div class="setting-list-object-value">Group</div>
							<div class="setting-list-object-value">SubGroup</div>
							<div class="setting-list-object-value">Version</div>
							<div class="setting-list-object-value">Variant</div>
						</div>
						<div id="ConditionComRequiresList-row-container">
						</div>
						<div class="setting-list-new-row" id="ConditionComRequiresList-new-row">
							<button class="monaco-text-button"  id="btnConditionComRequiresListAdd" disabled>Add Item</button>
						</div>
					</div>
				</div>
			</div>
			<div class="finishBtnArea">
				<button class="monaco-text-button" id="btnApplyCondition" disabled>Apply</button>
				<button class="monaco-text-button" id="btnRemoveCondition" disabled>Remove Condition</button>
				<button class="monaco-text-button" id="btnResetCondition" disabled>Reset Condition</button>
			</div>`;this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"detail_Condition",strhtml:e})}this.updateConditionRequireItems()}updateComponentCondition(){this.curEdit_componentCondition?(this.updateComponentConditionValues(),this.enableAndOpenDetailItems("detail_Condition")):(this.updateComponentConditionValues(),this.disableAndhideDetailItems("detail_Condition"))}updateComponentFileItems(){let e=0,t="";for(let i of this.componentFiles){if(e===this.curEdit_componentFileIndex){t+=`<div class="setting-list-row Editing" data-index="${e}"  tabindex="-1" role="listitem">
								<div class="setting-list-object-valueLongLong">
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input"  id="PathValue_FileList_Edit" value="${i.name}"></input>
										<button class="monaco-text-button"  name="btnBrowseFile" valueid="PathValue_FileList_Edit">Browse</button>
									</div>
								</div>
								<div class="setting-list-object-value">	
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input"  value="${i.version??""}"></input>
									</div>
								</div>
								<div class="setting-list-object-value">	
									<div class='setting-list-object-edit-item'>
										<select class="wideinput" id="select_FileList_Category_Edit">`;for(let s of Ia)s===i.category?t+=`<option value="${s}" selected>${s}</option>`:t+=`<option value="${s}">${s}</option>`;t+=`</select>
									</div>
								</div>
								<div class="setting-list-object-value">
									<div class='setting-list-object-edit-item'>
										<select class="setting-list-object-input" >`;for(let s of xa)s===i.attribute?t+=`<option value="${s}" selected>${s}</option>`:t+=`<option value="${s}">${s}</option>`;t+=`<option style='display: none'></option>
							</select>
									</div>
								</div>
								<div class="setting-list-row-editdiv">
									<a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
									<a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
								</div>
							</div>`}else t+=`<div class="setting-list-row" data-index="${e}"  tabindex="-1" role="listitem">
								<div class="setting-list-object-valueLongLong">${i.name}</div>
								<div class="setting-list-object-value">${i.version??""}</div>
								<div class="setting-list-object-value">${i.category}</div>
								<div class="setting-list-object-value">${i.attribute??""}</div>											
								<div class="setting-list-sibling"></div>
									<div class="monaco-action-bar">
										<ul class="actions-container" role="toolbar">
											<li class="action-item" role="presentation" title="Edit Item">
												<a class="codicon codicon-edit"
													role="button" aria-label="Edit Item"
													tabindex="-1" data-focusable="true">
												</a>
											</li>
											<li class="action-item" role="presentation"
												title="Remove Item">
												<a class="codicon codicon-remove" role="button"
													aria-label="Remove Item" data-focusable="true"
													tabindex="-1"></a>
											</li>
										</ul>
									</div>
								</div>
							</div>`;++e}this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"componentFilesList-row-container",strhtml:t})}updateComponentItems(){let e="",t=0;for(let i of this.componentItems){let s="";for(let n of i.files)s&&(s+="<br>"),s+=n.name;this.curEdit_componentIndex==t?e+=`<div class="setting-list-row Editing" data-index="${t}"  tabindex="-1" role="listitem">`:e+=`<div class="setting-list-row" data-index="${t}"  tabindex="-1" role="listitem">`,e+=`<div class="setting-list-object-valueMin">
							${i.comClass}
						</div>
						<div class="setting-list-object-valueMin">
							${i.comGroup}
						</div>
						<div class="setting-list-object-valueMin">
							${i.comSubgroup??""}
						</div>
						<div class="setting-list-object-valueMin">
							${i.comVersion}
						</div>
						<div class="setting-list-object-valueMin">
							${i.comVariant??""}
						</div>
						<div class="setting-list-object-valueMidLong">
							${i.description}
						</div>
						<div class="setting-list-object-valueLongLong">
							${s}
						</div>
						<div class="setting-list-sibling"></div>
                            <div class="monaco-action-bar">
                                <ul class="actions-container" role="toolbar">
                                    <li class="action-item" role="presentation" title="Edit Item">
                                        <a class="codicon codicon-edit"
                                            role="button" aria-label="Edit Item"
                                            tabindex="-1" data-focusable="true">
                                        </a>
                                    </li>
                                    <li class="action-item" role="presentation"
                                        title="Remove Item">
                                        <a class="codicon codicon-remove" role="button"
                                            aria-label="Remove Item" data-focusable="true"
                                            tabindex="-1"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
					</div>`,++t}this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"ComponentsList-row-container",strhtml:e}),this.updateComponentItemValue()}updatePackageValue(){this.updateHtmlElemItemValue("pack_Vendor",this.packageItem.vendor),this.updateHtmlElemItemValue("pack_Name",this.packageItem.name),this.updateHtmlElemItemValue("pack_Desciption",this.packageItem.description),this.updateHtmlElemItemValue("pack_Url",this.packageItem.url??""),this.updateHtmlElemItemValue("pack_ReleaseVersion",this.releaseInfoItem.version),this.updateHtmlElemItemValue("pack_ChangeDesc",this.releaseInfoItem.changeDesc),this.updateHtmlElemItemValue("pack_Tag",this.releaseInfoItem.tag??""),this.updateHtmlElemItemValue("pack_BasePath",this.packageItem.packRootPath),this.updateFamilyItems(!0),this.updateComponentItems()}updateFamilyItems(e){let t="",i=0;for(let s of this.familyItems){let n="";for(let a of s.subfamilies)n&&(n+=","),n+=a.subfamilyName;t+=`<div class="setting-list-row" data-index="${i}"  tabindex="-1" role="listitem">
						<div class="setting-list-object-value">
							${s.deviceVendor}
						</div>
						<div class="setting-list-object-value">
							${s.familyName}
						</div>
						<div class="setting-list-object-valueLong">
							${s.description??""}
						</div>
						<div class="setting-list-object-valueMidLong">
							${n}
						</div>
						<div class="setting-list-sibling"></div>
                            <div class="monaco-action-bar">
                                <ul class="actions-container" role="toolbar">
                                    <li class="action-item" role="presentation" title="Edit Item">
                                        <a class="codicon codicon-edit"
                                            role="button" aria-label="Edit Item"
                                            tabindex="-1" data-focusable="true">
                                        </a>
                                    </li>
                                    <li class="action-item" role="presentation"
                                        title="Remove Item">
                                        <a class="codicon codicon-remove" role="button"
                                            aria-label="Remove Item" data-focusable="true"
                                            tabindex="-1"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
					</div>`,++i}this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"FamiyList-row-container",strhtml:t}),e&&this.updateFamilyItemValue()}updateSubFamilyItems(e){let t="",i=0;for(let s of this.subFamilyItems){let n="";for(let a of s.devices)n&&(n+=","),n+=a.deviceName;t+=`<div class="setting-list-row" data-index="${i}"  tabindex="-1" role="listitem">
						<div class="setting-list-object-value">
							${s.subfamilyName}
						</div>
						<div class="setting-list-object-valueLong">
							${s.description??""}
						</div>
						<div class="setting-list-object-valueMidLong">
							${n}
						</div>
						<div class="setting-list-sibling"></div>
                            <div class="monaco-action-bar">
                                <ul class="actions-container" role="toolbar">
                                    <li class="action-item" role="presentation" title="Edit Item">
                                        <a class="codicon codicon-edit"
                                            role="button" aria-label="Edit Item"
                                            tabindex="-1" data-focusable="true">
                                        </a>
                                    </li>
                                    <li class="action-item" role="presentation"
                                        title="Remove Item">
                                        <a class="codicon codicon-remove" role="button"
                                            aria-label="Remove Item" data-focusable="true"
                                            tabindex="-1"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
					</div>`,++i}this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"SubFamiyList-row-container",strhtml:t}),e&&this.updateSubFamilyItemValue()}updateFamilyItemValue(){this.updateHtmlElemItemValue("input_familyName",this.curEdit_FamilyItem.familyName),this.updateHtmlElemItemValue("input_deviceVendor",this.curEdit_FamilyItem.deviceVendor),this.updateHtmlElemItemValue("input_familyDescription",this.curEdit_FamilyItem.description??""),this.updateSubFamilyItems(!0)}updateSubFamilyItemValue(){this.updateHtmlElemItemValue("input_subFamilyName",this.curEdit_subFamilyItem.subfamilyName),this.updateHtmlElemItemValue("input_subFamilyDesc",this.curEdit_subFamilyItem.description??""),this.updateDeviceItems(!0),this.updateSubFamilyMemoryItems()}updateDeviceItems(e){let t="";if(this.deviceItems){let i=0;for(let s of this.deviceItems){let n="";for(let a of s.processors)n&&(n+=","),n+=a.procName;t+=`<div class="setting-list-row" data-index="${i}"  tabindex="-1" role="listitem">
						<div class="setting-list-object-value">
							${s.deviceName}
						</div>
						<div class="setting-list-object-valueLong">
							${s.description??""}
						</div>
						<div class="setting-list-object-valueMidLong">
							${n}
						</div>
						<div class="setting-list-sibling"></div>
                            <div class="monaco-action-bar">
                                <ul class="actions-container" role="toolbar">
                                    <li class="action-item" role="presentation" title="Edit Item">
                                        <a class="codicon codicon-edit"
                                            role="button" aria-label="Edit Item"
                                            tabindex="-1" data-focusable="true">
                                        </a>
                                    </li>
                                    <li class="action-item" role="presentation"
                                        title="Remove Item">
                                        <a class="codicon codicon-remove" role="button"
                                            aria-label="Remove Item" data-focusable="true"
                                            tabindex="-1"></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
					</div>`,++i}}this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"DeviceList-row-container",strhtml:t}),e&&this.updateDeviceItemValue()}disableAndhideDetailItems(e){this._panel?.webview.postMessage({type:"disableDetailItems",title:e})}handleButtonClickedOn(e){switch(e){case"btnAddComponent":this.curEdit_componentIndex!==-1?ie.window.showWarningMessage("\u5F53\u524D\u5176\u5B83Component\u884C\u5728\u7F16\u8F91\u72B6\u6001,\u662F\u5426\u5207\u6362?",{modal:!0},"Yes","No").then(t=>{t==="Yes"&&(this.resetComponentItem(),this.updateComponentItems())}):this.enableAndOpenDetailItems("detail_Component");break;case"btnApplyComponent":{if(this.curEdit_componentIndex===-1){let t=new Me;t.copy(this.curEdit_componentItem),this.componentItems.push(t)}else this.componentItems[this.curEdit_componentIndex].copy(this.curEdit_componentItem);this.resetComponent()}break;case"btnCancelComponent":this.resetComponent();break;case"btnResetComponent":this.curEdit_componentIndex!==-1&&this.curEdit_componentIndex<this.componentItems.length&&(this.curEdit_componentItem.copy(this.componentItems[this.curEdit_componentIndex]),this.resetCurrentComponentItemFile(),this.updateComponentItemValue());break;case"btnAddFamily":this.enableAndOpenDetailItems("detail_Family");break;case"btnApplyFamily":{if(this.curEdit_familyIndex===-1){this.familyItems.push(this.curEdit_FamilyItem);let t=new qe;this.curEdit_FamilyItem=t}else this.familyItems[this.curEdit_familyIndex].copy(this.curEdit_FamilyItem);this.resetFamily()}break;case"btnCancelFamily":this.resetFamily();break;case"btnResetFamily":this.curEdit_familyIndex!==-1&&this.familyItems&&this.curEdit_familyIndex<this.familyItems.length&&(this.curEdit_FamilyItem.copy(this.familyItems[this.curEdit_familyIndex]),this.updateFamilyItemValue());break;case"btnAddSubFamily":this.enableAndOpenDetailItems("detail_SubFamily");break;case"btnApplySubFamily":{if(this.curEdit_subFamilyIndex===-1){this.subFamilyItems.push(this.curEdit_subFamilyItem);let t=new st;this.curEdit_subFamilyItem=t}else this.subFamilyItems[this.curEdit_subFamilyIndex].copy(this.curEdit_subFamilyItem);this.resetSubFamily()}break;case"btnCancelSubFamily":this.resetSubFamily();break;case"btnResetSubFamily":this.curEdit_subFamilyIndex!==-1&&this.subFamilyItems&&this.curEdit_subFamilyIndex<this.subFamilyItems.length&&(this.curEdit_subFamilyItem.copy(this.subFamilyItems[this.curEdit_subFamilyIndex]),this.updateSubFamilyItemValue());break;case"btnAddDevice":this.enableAndOpenDetailItems("detail_Device");break;case"btnApplyDevice":{if(this.curEdit_DeviceIndex===-1){this.deviceItems.push(this.curEdit_device);let t=new Ue;this.curEdit_device=t}else this.deviceItems[this.curEdit_DeviceIndex].copy(this.curEdit_device);this.resetDevice()}break;case"btnCancelDevice":this.resetDevice();break;case"btnResetDevice":this.curEdit_DeviceIndex!==-1&&this.deviceItems&&this.curEdit_DeviceIndex<this.deviceItems.length&&(this.curEdit_device.copy(this.deviceItems[this.curEdit_DeviceIndex]),this.updateDeviceItemValue());break;case"btnAddProcessor":this.enableAndOpenDetailItems("detail_Processor"),this.devProcessors||(this.devProcessors=this.curEdit_device.processors);break;case"btnApplyProcessor":{if(this.curEdit_ProcessorIndex===-1){this.devProcessors.push(this.curEdit_devProcessor);let t=new tt;this.curEdit_devProcessor=t}else this.devProcessors[this.curEdit_ProcessorIndex].copy(this.curEdit_devProcessor);this.resetProcessor()}break;case"btnResetProcessor":this.resetProcessor();break;case"btnCancelProcessor":this.curEdit_ProcessorIndex===-1?this.disableAndhideDetailItems("detail_Processor"):this.devProcessors&&this.curEdit_ProcessorIndex<this.devProcessors.length&&(this.curEdit_devProcessor.copy(this.devProcessors[this.curEdit_ProcessorIndex]),this.updateProcessorItemValue());break;case"btnComponentFileListAdd":this.on_ComponentFileListAddItem();break;case"btnConditionComRequiresListAdd":this.on_ConditionComRequiresListAddItem();break;case"btnMemoryListAdd":this.on_MemoryListAddItem();break;case"btnDeviceMemoryListAdd":this.on_DeviceMemoryListAddItem();break;case"btnSelectFamilyListAdd":this.on_SelectFamilyListAddItem();break;case"btnMakeDfpFile":if(this.packageItem.packRootPath){let t=this.getDFPFileName(),i=Ge.default.join(this.packageItem.packRootPath,t);this.generateDFPFile(i)&&ie.window.showInformationMessage("DFP\u6587\u4EF6\u5DF2\u521B\u5EFA\u5B8C\u6BD5!\uFF0C\u662F\u5426\u6253\u5F00\u8BE5\u6587\u4EF6?",{modal:!0},"Yes","No").then(s=>{s==="Yes"&&ie.commands.executeCommand("vscode.open",ie.Uri.file(i))})}break;case"btnMakePack":if(this.packageItem.packRootPath){let t=this.getDFPFileName(),i=this.getDFPPackFileName(),s=Ge.default.join(this.packageItem.packRootPath,t);if(Je.existsSync(s)||this.generateDFPFile(s),Je.existsSync(s)){let n=new wa.default;if(this.packageItem.components){for(let r of this.packageItem.components)if(r.files)for(let l of r.files){let c=Ge.default.resolve(this.packageItem.packRootPath,l.name);if(Je.existsSync(c))if(l.category==="include")n.addLocalFolder(c,l.name);else{let d=Ge.default.dirname(l.name);n.addLocalFile(c,d)}else console.log("File Not Exit! "+c)}}n.addLocalFile(s);let a=Ge.default.join(this.packageItem.packRootPath,i);n.writeZip(a)}}break;case"btnEnableCondition":this.curEdit_componentCondition||(this.curEdit_componentCondition=new $t),this.enableAndOpenDetailItems("detail_Condition");break;case"btnApplyCondition":this.curEdit_componentCondition&&(this.curEdit_componentItem.condition=this.curEdit_componentCondition),this.curEdit_componentCondition=void 0,this.updateComponentConditionValues(),this.disableAndhideDetailItems("detail_Condition");break;case"btnRemoveCondition":this.curEdit_componentCondition=void 0,this.updateComponentConditionValues(),this.disableAndhideDetailItems("detail_Condition");break;case"btnResetCondition":this.curEdit_componentCondition&&(this.curEdit_componentCondition.clear(),this.updateComponentConditionValues());break}}getDFPPackFileName(){return this.packageItem.vendor+"."+this.packageItem.name+"."+this.releaseInfoItem.version+".pack"}getDFPFileName(){return this.packageItem.vendor+"."+this.packageItem.name+"."+this.releaseInfoItem.version+".json"}generateDFPFile(e){let t=!1;if(this.packageItem.packRootPath){if(this.selectedFamilies){let l=j.getInstance().getSupportFamilies();for(let c of this.selectedFamilies)for(let d of l)if(d.deviceVendor===c.vendor&&d.familyName===c.familyName){let u=new qe;u.copy(d),this.packageItem.families.push(u);break}}if(this.componentItems.length){for(let l of this.componentItems)if(l.files)for(let c of l.files)c.name&&(Ge.default.isAbsolute(c.name)&&(c.name=Ge.default.relative(this.packageItem.packRootPath,c.name)),c.name=c.name.replaceAll("\\","/"));this.packageItem.components=this.componentItems}let i=Date.now(),s=new Date(i);this.releaseInfoItem.date=`${s.getFullYear()}-${s.getMonth()+1}-${s.getDate()}`;let n=!1,a=this.packageItem.releases.length;if(a){let l=this.packageItem.releases[a-1];l.version===this.releaseInfoItem.version&&(l.copy(this.releaseInfoItem),n=!0)}n||this.packageItem.releases.push(this.releaseInfoItem);let r={package:this.packageItem.getDFPTnterfaceCopy()};Je.writeFileSync(e,ts.jsonc.beautify(ts.jsonc.stringify(r))),t=Je.existsSync(e)}return t}on_SelectFamilyListAddItem(){let e=`<div class="setting-list-object-valueMidLong">
									<div class='setting-list-object-edit-item'>
										<select class="wideinput" id="select_FamilyList_Vendor_New">
										<option style='display: none'></option>`;for(let t of this.supportedDeviceVendors)e+=`<option value="${t}">${t}</option>`;e+=`</select>
									</div>
								</div>
								<div class="setting-list-object-valueMidLong">
									<div class='setting-list-object-edit-item'>
										<select class="wideinput" id="select_FamilyList_Name_New">
										<option style='display: none'></option>`;for(let t of this.supportedFamilies)e+=`<option value="${t}">${t}</option>`;e+=`</select>
									</div>
								</div>
								<div class="setting-list-row-editdiv">
									<a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
									<a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
								</div>`,this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"selectFamiyList-new-row",strhtml:e})}on_DeviceMemoryListAddItem(){let e=`<div class="setting-list-object-value">
									<div class='setting-list-object-edit-item'>
										<select class="setting-list-object-input">
										<option style='display: none'></option>`;for(let t of this.curEdit_device.processors)e+=`<option value="${t.procName}">${t.procName}</option>`;e+=`</select>
									</div>
								</div>
								<div class="setting-list-object-value">
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input" ></input>
									</div>
								</div>
								<div class="setting-list-object-valueMin">
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input" ></input>
									</div>
								</div>
								<div class="setting-list-object-value">
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input" ></input>
									</div>
								</div>
								<div class="setting-list-object-valueMin">
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input" ></input>
									</div>
								</div>
								<div class="setting-list-object-valueMin">
									<div class='setting-list-object-edit-item'>
										<input type="checkbox" class="setting-list-object-input"  ></input>
									</div>
								</div>
								<div class="setting-list-object-valueMin">
									<div class='setting-list-object-edit-item'>
										<input type="checkbox" class="setting-list-object-input"  ></input>
									</div>
								</div>
								<div class="setting-list-object-valueMin">
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input" ></input>
									</div>
								</div>
								<div class="setting-list-object-valueMin">
									<div class='setting-list-object-edit-item'>
										<input type="checkbox" class="setting-list-object-input"  ></input>
									</div>
								</div>
								<div class="setting-list-object-valueLong">
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input"  ></input>
									</div>
								</div>
								<div class="setting-list-row-editdiv">
									<a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
									<a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
								</div>`,this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"deviceMemorylist-new-row",strhtml:e})}on_ConditionComRequiresListAddItem(){let e=`<div class="setting-list-object-value">
									<div class='setting-list-object-edit-item'>
										<select class="setting-list-object-input" id="select_comRequire_Class_New">
										<option style='display: none'></option>`;for(let t of rn)e+=`<option value="${t}">${t}</option>`;e+=`</select>
									</div>
								</div>
								<div class="setting-list-object-value">
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input" id="input_comRequire_Group_New">`,e+=`	</div>
								</div>
								<div class="setting-list-object-value">
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input"  id="input_comRequire_SubGroup_New"></input>
									</div>
								</div>
								<div class="setting-list-object-value">
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input"  id="input_comRequire_Version_New"></input>
									</div>
								</div>
								<div class="setting-list-object-value">
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input"  id="input_comRequire_Variant_New"></input>
									</div>
								</div>
								<div class="setting-list-row-editdiv">
									<a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
									<a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
								</div>`,this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"ConditionComRequiresList-new-row",strhtml:e})}on_ComponentFileListAddItem(){let e=`<div class="setting-list-object-valueLongLong">
						<div class='setting-list-object-edit-item'>
							<input class="setting-list-object-input"  id="PathValue_FileList_New"></input>
							<button class="monaco-text-button"  name="btnBrowseFile" valueid="PathValue_FileList_New">Browse</button>
						</div>
					</div>
					<div class="setting-list-object-value">
						<div class='setting-list-object-edit-item'>
							<input class="setting-list-object-input"  ></input>
						</div>
					</div>
					<div class="setting-list-object-value">
						<div class='setting-list-object-edit-item'>
							<select class="setting-list-object-input" id="select_FileList_Category_New">`;for(let t of Ia)e+=`<option value="${t}">${t}</option>`;e+=`</select>
						</div>
					</div>
					<div class="setting-list-object-value">
						<div class='setting-list-object-edit-item'>
							<select class="setting-list-object-input" >`;for(let t of xa)e+=`<option value="${t}">${t}</option>`;e+=`<option style='display: none'></option>
						</select>
						</div>
					</div>
					<div class="setting-list-row-editdiv">
						<a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
						<a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
					</div>`,this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"componentFilesList-new-row",strhtml:e})}on_MemoryListAddItem(){let e=`<div class="setting-list-object-value">
									<div class='setting-list-object-edit-item'>
										<select class="setting-list-object-input">
										<option style='display: none'></option>`;for(let t of this.curEdit_subFamilyItem.devices)for(let i of t.processors)e+=`<option value="${i.procName}">${i.procName}</option>`;e+=`</select>
									</div>
								</div>
								<div class="setting-list-object-value">
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input" ></input>
									</div>
								</div>
								<div class="setting-list-object-valueMin">
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input" ></input>
									</div>
								</div>
								<div class="setting-list-object-value">
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input" ></input>
									</div>
								</div>
								<div class="setting-list-object-valueMin">
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input" ></input>
									</div>
								</div>
								<div class="setting-list-object-valueMin">
									<div class='setting-list-object-edit-item'>
										<input type="checkbox" class="setting-list-object-input"  ></input>
									</div>
								</div>
								<div class="setting-list-object-valueMin">
									<div class='setting-list-object-edit-item'>
										<input type="checkbox" class="setting-list-object-input"  ></input>
									</div>
								</div>
								<div class="setting-list-object-valueMin">
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input" ></input>
									</div>
								</div>
								<div class="setting-list-object-valueMin">
									<div class='setting-list-object-edit-item'>
										<input type="checkbox" class="setting-list-object-input"  ></input>
									</div>
								</div>
								<div class="setting-list-object-valueLong">
									<div class='setting-list-object-edit-item'>
										<input class="setting-list-object-input"  ></input>
									</div>
								</div>
								<div class="setting-list-row-editdiv">
									<a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
									<a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
								</div>`,this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"memoryList-new-row",strhtml:e})}resetComponent(){this.resetComponentItem(),this.updateComponentItems(),this.disableAndhideDetailItems("detail_Component")}resetProcessor(){this.resetProcessorItem(),this.updateProcessorItems(!0),this.disableAndhideDetailItems("detail_Processor")}resetDevice(){this.resetDeviceItem(),this.updateDeviceItems(!0),this.disableAndhideDetailItems("detail_Device")}resetSubFamily(){this.resetSubFamilyItem(),this.updateSubFamilyItems(!0),this.disableAndhideDetailItems("detail_SubFamily")}resetFamily(){this.resetFamilyItem(),this.updateFamilyItems(!0),this.disableAndhideDetailItems("detail_Family")}resetProcessorItem(){this.curEdit_ProcessorIndex=-1,this.curEdit_devProcessor.clear()}resetDeviceItem(){this.curEdit_DeviceIndex=-1,this.curEdit_device.clear(),this.devProcessors=this.curEdit_device.processors,this.device_memoryMap=this.curEdit_device.memorys,this.curEdit_deviceMemoryIndex=-1,this.resetProcessorItem()}resetSubFamilyItem(){this.curEdit_subFamilyIndex=-1,this.curEdit_subFamilyItem.clear(),this.deviceItems=this.curEdit_subFamilyItem.devices,this.subFamily_memoryMap=this.curEdit_subFamilyItem.memorys,this.curEdit_subFamilyMemoryIndex=-1,this.resetDeviceItem()}resetFamilyItem(){this.curEdit_familyIndex=-1,this.curEdit_FamilyItem.clear(),this.subFamilyItems=this.curEdit_FamilyItem.subfamilies,this.resetSubFamilyItem()}resetComponentItem(){this.curEdit_componentIndex=-1,this.curEdit_componentItem.clear(),this.componentFiles=this.curEdit_componentItem.files,this.resetCurrentComponentItemFile(!0),this.resetComponentConditions()}resetComponentConditions(){this.curEdit_componentItem.condition?(this.curEdit_componentCondition=new $t,this.curEdit_componentCondition.copy(this.curEdit_componentItem.condition)):this.curEdit_componentCondition=void 0,this.curEdit_compConditionRequireIndex=-1}resetCurrentComponentItemFile(e){this.curEdit_componentFile.clear(),this.curEdit_componentFileIndex=-1,this.curEdit_ComponentFileCategory_Edit="",e&&(this.curEdit_ComponentFileCategory_New="")}enableAndOpenDetailItems(e){this._panel?.webview.postMessage({type:"enableDetailItems",title:e})}updateHtmlElemItemValue(e,t){this._panel?.webview.postMessage({type:"updateElemValue",elem_id:e,elem_value:t})}updateHtmlSelectItemValue(e,t){this._panel?.webview.postMessage({type:"updateSelectElemValues",elem_id:e,optionValues:t})}handleListNewRowCancel(e){switch(e){case"selectFamiyList":{let t='<button class="monaco-text-button" id="btnSelectFamilyListAdd">Add Item</button>';this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"selectFamiyList-new-row",strhtml:t})}break;case"listComponentFiles":{let t='<button class="monaco-text-button"  id="btnComponentFileListAdd">Add Item</button>';this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"componentFilesList-new-row",strhtml:t}),this.curEdit_ComponentFileCategory_New=""}break;case"listConditionComRequires":{let t='<button class="monaco-text-button"  id="btnConditionComRequiresListAdd" >Add Item</button>';this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"ConditionComRequiresList-new-row",strhtml:t}),this.curEdit_ComponentFileCategory_New=""}break;case"listMemoryMap_Device":{let t='<button class="monaco-text-button" id="btnDeviceMemoryListAdd" >Add Item</button>';this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"deviceMemorylist-new-row",strhtml:t})}break;case"listMemoryMap":{let t='<button class="monaco-text-button" id="btnMemoryListAdd" >Add Item</button>';this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"memoryList-new-row",strhtml:t})}break}}handleListRowEditCancel(e,t){if(t>=0)switch(e){case"listProcessors":break;case"selectFamiyList":if(t===this.curEdit_SelectedFamilyIndex){this.curEdit_SelectedFamilyIndex=-1;let i=this.selectedFamilies[t],s=`<div class="setting-list-object-valueMidLong">${i.vendor}</div>
								<div class="setting-list-object-valueMidLong">${i.familyName}</div>
								<div class="setting-list-sibling"></div>
									<div class="monaco-action-bar">
										<ul class="actions-container" role="toolbar">
											<li class="action-item" role="presentation" title="Edit Item">
												<a class="codicon codicon-edit"
													role="button" aria-label="Edit Item"
													tabindex="-1" data-focusable="true">
												</a>
											</li>
											<li class="action-item" role="presentation"
												title="Remove Item">
												<a class="codicon codicon-remove" role="button"
													aria-label="Remove Item" data-focusable="true"
													tabindex="-1"></a>
											</li>
										</ul>
									</div>
								</div>`;this._panel?.webview.postMessage({type:"updateListRowElemInnerHtml",elem_id:"selectFamiyList-row-container",data_index:`${t}`,strhtml:s})}break;case"listComponentFiles":if(t===this.curEdit_componentFileIndex){this.curEdit_componentFileIndex=-1,this.curEdit_ComponentFileCategory_Edit="",this.curEdit_componentFile.clear();let i=this.componentFiles[t],s=`<div class="setting-list-object-valueLongLong">${i.name}</div>
							<div class="setting-list-object-value">${i.version??""}</div>
							<div class="setting-list-object-value">${i.category}</div>
							<div class="setting-list-object-value">${i.attribute??""}</div>		
							<div class="setting-list-sibling"></div>
								<div class="monaco-action-bar">
									<ul class="actions-container" role="toolbar">
										<li class="action-item" role="presentation" title="Edit Item">
											<a class="codicon codicon-edit"
												role="button" aria-label="Edit Item"
												tabindex="-1" data-focusable="true">
											</a>
										</li>
										<li class="action-item" role="presentation"
											title="Remove Item">
											<a class="codicon codicon-remove" role="button"
												aria-label="Remove Item" data-focusable="true"
												tabindex="-1"></a>
										</li>
									</ul>
								</div>
							</div>`;this._panel?.webview.postMessage({type:"updateListRowElemInnerHtml",elem_id:"componentFilesList-row-container",data_index:`${t}`,strhtml:s,bChangeEditing:!0})}break;case"listConditionComRequires":if(this.curEdit_componentCondition?.comRequires&&t===this.curEdit_compConditionRequireIndex){this.curEdit_compConditionRequireIndex=-1;let i=this.curEdit_componentCondition?.comRequires[t],s=`<div class="setting-list-object-value">${i.comClass??""}
								</div>
								<div class="setting-list-object-value">${i.comGroup??""}
								</div>
								<div class="setting-list-object-value">${i.comSubgroup??""}									
								</div>
								<div class="setting-list-object-value">${i.comVersion??""}
								</div>
								<div class="setting-list-object-value">${i.comVariant??""}
								</div>
								<div class="setting-list-sibling"></div>
									<div class="monaco-action-bar">
										<ul class="actions-container" role="toolbar">
											<li class="action-item" role="presentation" title="Edit Item">
												<a class="codicon codicon-edit"
													role="button" aria-label="Edit Item"
													tabindex="-1" data-focusable="true">
												</a>
											</li>
											<li class="action-item" role="presentation"
												title="Remove Item">
												<a class="codicon codicon-remove" role="button"
													aria-label="Remove Item" data-focusable="true"
													tabindex="-1"></a>
											</li>
										</ul>
									</div>
								</div>`;this._panel?.webview.postMessage({type:"updateListRowElemInnerHtml",elem_id:"ConditionComRequiresList-row-container",data_index:`${t}`,strhtml:s})}break;case"listMemoryMap_Device":if(this.device_memoryMap&&t===this.curEdit_deviceMemoryIndex){this.curEdit_deviceMemoryIndex=-1;let i=this.device_memoryMap[t],s=`<div class="setting-list-object-value">${i.procName}</div>
									<div class="setting-list-object-value">${i.name}</div>
									<div class="setting-list-object-valueMin">${i.access}</div>
									<div class="setting-list-object-value">${i.start}</div>
									<div class="setting-list-object-valueMin">${i.size}</div>
									<div class="setting-list-object-valueMin">${i.startup}</div>
									<div class="setting-list-object-valueMin">${i.default}</div>
									<div class="setting-list-object-valueMin">${i.alias??""}</div>
									<div class="setting-list-object-valueMin">${i.uninit}</div>
									<div class="setting-list-object-valueLong">${i.description}</div>
									<div class="setting-list-sibling"></div>
										<div class="monaco-action-bar">
											<ul class="actions-container" role="toolbar">
												<li class="action-item" role="presentation" title="Edit Item">
													<a class="codicon codicon-edit"
														role="button" aria-label="Edit Item"
														tabindex="-1" data-focusable="true">
													</a>
												</li>
												<li class="action-item" role="presentation"
													title="Remove Item">
													<a class="codicon codicon-remove" role="button"
														aria-label="Remove Item" data-focusable="true"
														tabindex="-1"></a>
												</li>
											</ul>
										</div>
									</div>`;this._panel?.webview.postMessage({type:"updateListRowElemInnerHtml",elem_id:"deviceMemorylist-row-container",data_index:`${t}`,strhtml:s})}break;case"listMemoryMap":if(this.subFamily_memoryMap&&t===this.curEdit_subFamilyMemoryIndex){this.curEdit_subFamilyMemoryIndex=-1;let i=this.subFamily_memoryMap[t],s=`<div class="setting-list-object-value">${i.procName}</div>
									<div class="setting-list-object-value">${i.name}</div>
									<div class="setting-list-object-valueMin">${i.access}</div>
									<div class="setting-list-object-value">${i.start}</div>
									<div class="setting-list-object-valueMin">${i.size}</div>
									<div class="setting-list-object-valueMin">${i.startup}</div>
									<div class="setting-list-object-valueMin">${i.default}</div>
									<div class="setting-list-object-valueMin">${i.alias??""}</div>
									<div class="setting-list-object-valueMin">${i.uninit}</div>
									<div class="setting-list-object-valueLong">${i.description}</div>
									<div class="setting-list-sibling"></div>
										<div class="monaco-action-bar">
											<ul class="actions-container" role="toolbar">
												<li class="action-item" role="presentation" title="Edit Item">
													<a class="codicon codicon-edit"
														role="button" aria-label="Edit Item"
														tabindex="-1" data-focusable="true">
													</a>
												</li>
												<li class="action-item" role="presentation"
													title="Remove Item">
													<a class="codicon codicon-remove" role="button"
														aria-label="Remove Item" data-focusable="true"
														tabindex="-1"></a>
												</li>
											</ul>
										</div>
									</div>`;this._panel?.webview.postMessage({type:"updateListRowElemInnerHtml",elem_id:"memorylist-row-container",data_index:`${t}`,strhtml:s})}break}}handleListRowEdit(e,t){if(t>=0)switch(e){case"listProcessors":this.devProcessors&&this.devProcessors.length>t&&this.curEdit_ProcessorIndex!==t&&(this.curEdit_ProcessorIndex===-1&&this.enableAndOpenDetailItems("detail_Processor"),this.curEdit_ProcessorIndex=t,this.curEdit_devProcessor.copy(this.devProcessors[t]),this.updateProcessorItemValue());break;case"listMemoryMap_Device":this.device_memoryMap&&this.device_memoryMap.length>t&&this.curEdit_deviceMemoryIndex!==t&&(this.curEdit_deviceMemoryIndex=t,this.updateDeviceMemoryItems());break;case"listMemoryMap":this.subFamily_memoryMap&&this.subFamily_memoryMap.length>t&&this.curEdit_subFamilyMemoryIndex!==t&&(this.curEdit_subFamilyMemoryIndex=t,this.updateSubFamilyMemoryItems());break;case"listDevices":this.deviceItems&&this.deviceItems.length>t&&this.curEdit_DeviceIndex!==t&&(this.curEdit_DeviceIndex===-1&&this.enableAndOpenDetailItems("detail_Device"),this.resetDeviceItem(),this.curEdit_DeviceIndex=t,this.curEdit_device.copy(this.deviceItems[t]),this.updateDeviceItemValue());break;case"listSubFamilies":this.subFamilyItems&&this.subFamilyItems.length>t&&this.curEdit_subFamilyIndex!==t&&(this.curEdit_subFamilyIndex===-1&&this.enableAndOpenDetailItems("detail_SubFamily"),this.resetSubFamilyItem(),this.curEdit_subFamilyIndex=t,this.curEdit_subFamilyItem.copy(this.subFamilyItems[t]),this.updateSubFamilyItemValue());break;case"listFamilies":this.familyItems&&this.familyItems.length>t&&this.curEdit_familyIndex!==t&&(this.curEdit_familyIndex===-1&&this.enableAndOpenDetailItems("detail_Family"),this.resetFamilyItem(),this.curEdit_familyIndex=t,this.curEdit_FamilyItem.copy(this.familyItems[t]),this.updateFamilyItemValue());break;case"selectFamiyList":this.selectedFamilies.length>t&&(this.curEdit_SelectedFamilyIndex=t,this.updateSelectedFamiyItems());break;case"listComponentFiles":this.componentFiles.length>t&&(this.curEdit_componentFileIndex=t,this.curEdit_componentFile.copy(this.componentFiles[t]),this.curEdit_ComponentFileCategory_Edit=this.curEdit_componentFile.category,this.updateComponentFileItems());break;case"ComponentsList":this.componentItems.length>t&&t!==this.curEdit_componentIndex&&(this.curEdit_componentIndex!==-1?ie.window.showWarningMessage("\u5F53\u524D\u5176\u5B83\u884C\u5DF2\u5728\u7F16\u8F91\u72B6\u6001\uFF0C\u662F\u5426\u5207\u6362?",{modal:!0},"Yes","No").then(i=>{i==="Yes"&&(this.curEdit_componentIndex=t,this.curEdit_componentItem.copy(this.componentItems[t]),this.resetCurrentComponentItemFile(),this.resetComponentConditions()),this.updateComponentItems()}):(this.curEdit_componentIndex=t,this.curEdit_componentItem.copy(this.componentItems[t]),this.resetCurrentComponentItemFile(),this.resetComponentConditions(),this.updateComponentItems(),this.enableAndOpenDetailItems("detail_Component")));break;case"listConditionComRequires":this.curEdit_componentCondition?.comRequires&&this.curEdit_componentCondition.comRequires.length>t&&(this.curEdit_compConditionRequireIndex=t,this.updateConditionRequireItems());break}}updateSelectedFamiyItems(){let e=0,t="";for(let i of this.selectedFamilies){if(e===this.curEdit_SelectedFamilyIndex){t+=`<div class="setting-list-row Editing" data-index="${e}"  tabindex="-1" role="listitem">
									<div class="setting-list-object-valueMidLong">	
									<div class='setting-list-object-edit-item'>
										<select class="wideinput" id="select_FamilyList_Vendor_Edit">`;for(let n of this.supportedDeviceVendors)n===i.vendor?t+=`<option value="${n}" selected>${n}</option>`:t+=`<option value="${n}">${n}</option>`;t+=`</select>
									</div>
								</div>
								<div class="setting-list-object-valueMidLong">
									<div class='setting-list-object-edit-item'>
										<select class="wideinput" id="select_FamilyList_Name_Edit">`;let s=j.getInstance().getAllProcessorFamilys(i.vendor);for(let n of s)n===i.familyName?t+=`<option value="${n}" selected>${n}</option>`:t+=`<option value="${n}">${n}</option>`;t+=`</select>
									</div>
								</div>
								<div class="setting-list-row-editdiv">
									<a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
									<a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
								</div>
							</div>`}else t+=`<div class="setting-list-row" data-index="${e}"  tabindex="-1" role="listitem">
								<div class="setting-list-object-valueMidLong">${i.vendor}</div>
								<div class="setting-list-object-valueMidLong">${i.familyName}</div>
								<div class="setting-list-sibling"></div>
									<div class="monaco-action-bar">
										<ul class="actions-container" role="toolbar">
											<li class="action-item" role="presentation" title="Edit Item">
												<a class="codicon codicon-edit"
													role="button" aria-label="Edit Item"
													tabindex="-1" data-focusable="true">
												</a>
											</li>
											<li class="action-item" role="presentation"
												title="Remove Item">
												<a class="codicon codicon-remove" role="button"
													aria-label="Remove Item" data-focusable="true"
													tabindex="-1"></a>
											</li>
										</ul>
									</div>
								</div>
							</div>`;++e}this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"selectFamiyList-row-container",strhtml:t})}updateComponentItemValue(){this.updateHtmlElemItemValue("select_comClass",this.curEdit_componentItem.comClass),this.updateHtmlElemItemValue("input_comGroup",this.curEdit_componentItem.comGroup),this.updateHtmlElemItemValue("input_comSubGroup",this.curEdit_componentItem.comSubgroup??""),this.updateHtmlElemItemValue("input_comVersion",this.curEdit_componentItem.comVersion),this.updateHtmlElemItemValue("input_comVariant",this.curEdit_componentItem.comVariant??""),this.updateHtmlElemItemValue("input_comDescription",this.curEdit_componentItem.description),this.updateComponentFileItems(),this.updateComponentCondition()}updateDeviceItemValue(){this.updateHtmlElemItemValue("input_deviceName",this.curEdit_device.deviceName),this.updateHtmlElemItemValue("input_deviceDesc",this.curEdit_device.description??""),this.updateProcessorItems(!0),this.updateDeviceMemoryItems()}updateProcessorItemValue(){this.updateHtmlElemItemValue("input_procName",this.curEdit_devProcessor.procName),this.updateHtmlElemItemValue("input_proUnits",this.curEdit_devProcessor.proUnits.toString()),this.updateHtmlElemItemValue("input_devCore",this.curEdit_devProcessor.devCore),this.updateHtmlSelectItemValue("select_devEndian",this.curEdit_devProcessor.devEndian),this.updateHtmlElemItemValue("input_devCoreVersion",this.curEdit_devProcessor.devCoreVersion),this.updateHtmlElemItemValue("input_devFpu",this.curEdit_devProcessor.devFpu),this.updateHtmlElemItemValue("input_devMpu",this.curEdit_devProcessor.devMpu),this.updateHtmlElemItemValue("input_devDsp",this.curEdit_devProcessor.devDsp)}handleListRowRemoved(e,t){if(t>=0)switch(e){case"listProcessors":this.devProcessors.length>t&&(this.devProcessors.splice(t,1),this.updateProcessorItems(),this.curEdit_ProcessorIndex===t&&(this.resetProcessorItem(),this.updateProcessorItemValue(),this.disableAndhideDetailItems("detail_Processor")));break;case"listDevices":this.deviceItems.length>t&&(this.deviceItems.splice(t,1),this.updateDeviceItems(),this.curEdit_DeviceIndex===t&&(this.resetDeviceItem(),this.updateDeviceItemValue(),this.disableAndhideDetailItems("detail_Device")));break;case"listSubFamilies":this.subFamilyItems.length>t&&(this.subFamilyItems.splice(t,1),this.updateSubFamilyItems(),this.curEdit_subFamilyIndex===t&&(this.resetSubFamilyItem(),this.updateSubFamilyItemValue(),this.disableAndhideDetailItems("detail_SubFamily")));break;case"listFamilies":this.familyItems.length>t&&(this.familyItems.splice(t,1),this.updateFamilyItems(),this.curEdit_familyIndex===t&&(this.resetFamilyItem(),this.updateFamilyItemValue(),this.disableAndhideDetailItems("detail_Family")));break;case"listComponentFiles":this.componentFiles.length>t&&ie.window.showWarningMessage("\u786E\u8BA4\u5220\u9664\u5F53\u524D\u884C\u6570\u636E?",{modal:!0},"Yes","No").then(i=>{i==="Yes"&&(this.componentFiles.splice(t,1),this.updateComponentFileItems(),this.curEdit_componentFileIndex===t&&this.resetCurrentComponentItemFile())});break;case"ComponentsList":this.componentItems.length>t&&ie.window.showWarningMessage("\u786E\u8BA4\u5220\u9664\u5F53\u524D\u884C\u6570\u636E?",{modal:!0},"Yes","No").then(i=>{i==="Yes"&&(this.componentItems.splice(t,1),this.updateComponentItems(),this.curEdit_componentIndex===t&&(this.resetComponentItem(),this.disableAndhideDetailItems("detail_Component")))});break;case"listConditionComRequires":if(this.curEdit_componentCondition?.comRequires&&this.curEdit_componentCondition?.comRequires.length>t){let i=this.curEdit_componentCondition.comRequires;ie.window.showWarningMessage("\u786E\u8BA4\u5220\u9664\u5F53\u524D\u884C\u6570\u636E?",{modal:!0},"Yes","No").then(s=>{s==="Yes"&&(i.splice(t,1),this.updateConditionRequireItems())})}break}}updateConfiglistItem_Validfy(e,t,i){let s=i?parseInt(i):-1;switch(e){case"listComponentFiles":if(t.length===4&&t[0]){if(s===-1){let n=new nt;n.name=t[0],t[1]?n.version=t[1]:n.version=void 0,n.category=t[2],n.attribute=t[3],this.componentFiles.push(n);let a='<button class="monaco-text-button"  id="btnComponentFileListAdd">Add Item</button>';this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"componentFilesList-new-row",strhtml:a}),this.curEdit_ComponentFileCategory_New="",this.updateComponentFileItems()}else if(s===this.curEdit_componentFileIndex){let n=this.componentFiles[s];n.name=t[0],t[1]?n.version=t[1]:n.version=void 0,n.category=t[2],n.attribute=t[3],this.curEdit_componentFileIndex=-1,this.curEdit_ComponentFileCategory_Edit="",this.updateComponentFileItems()}}break;case"listConditionComRequires":if(t.length===5){if(s===-1){let n=new si;n.comClass=t[0],n.comGroup=t[1],n.comSubgroup=t[2],n.comVersion=t[3],n.comVariant=t[4],this.curEdit_componentCondition&&(this.curEdit_componentCondition.comRequires||(this.curEdit_componentCondition.comRequires=[]),this.curEdit_componentCondition.comRequires.push(n));let a='<button class="monaco-text-button"  id="btnConditionComRequiresListAdd" >Add Item</button>';this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"ConditionComRequiresList-new-row",strhtml:a}),this.updateConditionRequireItems()}else if(this.curEdit_componentCondition?.comRequires&&s<this.curEdit_componentCondition.comRequires.length){let n=this.curEdit_componentCondition.comRequires[s];n.comClass=t[0],n.comGroup=t[1],n.comSubgroup=t[2],n.comVersion=t[3],n.comVariant=t[4],this.curEdit_compConditionRequireIndex=-1,this.updateConditionRequireItems()}}break;case"listMemoryMap":if(t.length===10){if(s===-1){let n=new Ce;n.procName=t[0],n.name=t[1],n.access=t[2],n.start=t[3],n.size=t[4],n.startup=t[5]==="true",n.default=t[6]==="true",n.alias=t[7],n.uninit=t[8]==="true",n.description=t[9],this.subFamily_memoryMap||(this.subFamily_memoryMap=this.curEdit_subFamilyItem.memorys=[]),this.subFamily_memoryMap.push(n);let a='<button class="monaco-text-button" id="btnMemoryListAdd" >Add Item</button>';this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"memoryList-new-row",strhtml:a}),this.updateSubFamilyMemoryItems()}else if(this.subFamily_memoryMap&&s<this.subFamily_memoryMap.length){let n=this.subFamily_memoryMap[s];n.procName=t[0],n.name=t[1],n.access=t[2],n.start=t[3],n.size=t[4],n.startup=t[5]==="true",n.default=t[6]==="true",n.alias=t[7],n.uninit=t[8]==="true",n.description=t[9],this.curEdit_subFamilyMemoryIndex=-1,this.updateSubFamilyMemoryItems()}}break;case"listMemoryMap_Device":if(t.length===10){if(s===-1){let n=new Ce;n.procName=t[0],n.name=t[1],n.access=t[2],n.start=t[3],n.size=t[4],n.startup=t[5]==="true",n.default=t[6]==="true",n.alias=t[7],n.uninit=t[8]==="true",n.description=t[9],this.device_memoryMap||(this.device_memoryMap=this.curEdit_device.memorys=[]),this.device_memoryMap.push(n);let a='<button class="monaco-text-button" id="btnDeviceMemoryListAdd" >Add Item</button>';this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"deviceMemorylist-new-row",strhtml:a}),this.updateDeviceMemoryItems()}else if(this.device_memoryMap&&s<this.device_memoryMap.length){let n=this.device_memoryMap[s];n.procName=t[0],n.name=t[1],n.access=t[2],n.start=t[3],n.size=t[4],n.startup=t[5]==="true",n.default=t[6]==="true",n.alias=t[7],n.uninit=t[8]==="true",n.description=t[9],this.curEdit_deviceMemoryIndex=-1,this.updateDeviceMemoryItems()}}break;case"selectFamiyList":if(t.length===2&&t[1])if(s===-1){let n=new ln;n.vendor=t[0],n.familyName=t[1],this.selectedFamilies.push(n);let a='<button class="monaco-text-button" id="btnSelectFamilyListAdd">Add Item</button>';this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"selectFamiyList-new-row",strhtml:a}),this.updateSelectedFamiyItems()}else s<this.selectedFamilies.length&&(this.selectedFamilies[s].vendor=t[0],this.selectedFamilies[s].familyName=t[1],this.curEdit_SelectedFamilyIndex=-1,this.updateSelectedFamiyItems());break}}updateDeviceMemoryItems(){let e="";if(this.device_memoryMap){let t=0;for(let i of this.device_memoryMap){if(t===this.curEdit_deviceMemoryIndex){e+=`<div class="setting-list-row Editing" data-index="${t}"  tabindex="-1" role="listitem">
									<div class="setting-list-object-value">
										<div class='setting-list-object-edit-item'>
											<select class="setting-list-object-input">
											<option style='display: none'></option>`;for(let s of this.curEdit_device.processors)i.procName===s.procName?e+=`<option value="${s.procName}" selected>${s.procName}</option>`:e+=`<option value="${s.procName}">${s.procName}</option>`;e+=`</select>
						</div>
					</div>
					<div class="setting-list-object-value">
						<div class='setting-list-object-edit-item'>
							<input class="setting-list-object-input" value="${i.name}"></input>
						</div>
					</div>
					<div class="setting-list-object-valueMin">
						<div class='setting-list-object-edit-item'>
							<input class="setting-list-object-input" value="${i.access}">
							</input>
						</div>
					</div>
					<div class="setting-list-object-value">
						<div class='setting-list-object-edit-item'>
							<input class="setting-list-object-input" value="${i.start}"></input>
						</div>
					</div>
					<div class="setting-list-object-valueMin">
						<div class='setting-list-object-edit-item'>
							<input class="setting-list-object-input" value="${i.size}"></input>
						</div>
					</div>
					<div class="setting-list-object-valueMin">
						<div class='setting-list-object-edit-item'>
							<input type="checkbox" class="setting-list-object-input"  ${i.startup?"checked":""}></input>
						</div>
					</div>
					<div class="setting-list-object-valueMin">
						<div class='setting-list-object-edit-item'>
							<input type="checkbox" class="setting-list-object-input" ${i.default?"checked":""}></input>
						</div>
					</div>
					<div class="setting-list-object-valueMin">
						<div class='setting-list-object-edit-item'>
							<input class="setting-list-object-input" ${i.alias??""}></input>
						</div>
					</div>
					<div class="setting-list-object-valueMin">
						<div class='setting-list-object-edit-item'>
							<input type="checkbox" class="setting-list-object-input"  ${i.uninit?"checked":""}></input>
						</div>
					</div>
					<div class="setting-list-object-valueLong">
						<div class='setting-list-object-edit-item'>
							<input class="setting-list-object-input"  value="${i.description}"></input>
						</div>
					</div>
					<div class="setting-list-row-editdiv">
						<a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
						<a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
					</div>
				</div>`}else e+=`<div class="setting-list-row" data-index="${t}"  tabindex="-1" role="listitem">
									<div class="setting-list-object-value">${i.procName}</div>
									<div class="setting-list-object-value">${i.name}</div>
									<div class="setting-list-object-valueMin">${i.access}</div>
									<div class="setting-list-object-value">${i.start}</div>
									<div class="setting-list-object-valueMin">${i.size}</div>
									<div class="setting-list-object-valueMin">${i.startup}</div>
									<div class="setting-list-object-valueMin">${i.default}</div>
									<div class="setting-list-object-valueMin">${i.alias??""}</div>
									<div class="setting-list-object-valueMin">${i.uninit}</div>
									<div class="setting-list-object-valueLong">${i.description}</div>
									<div class="setting-list-sibling"></div>
										<div class="monaco-action-bar">
											<ul class="actions-container" role="toolbar">
												<li class="action-item" role="presentation" title="Edit Item">
													<a class="codicon codicon-edit"
														role="button" aria-label="Edit Item"
														tabindex="-1" data-focusable="true">
													</a>
												</li>
												<li class="action-item" role="presentation"
													title="Remove Item">
													<a class="codicon codicon-remove" role="button"
														aria-label="Remove Item" data-focusable="true"
														tabindex="-1"></a>
												</li>
											</ul>
										</div>
									</div>
								</div>`;++t}}this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"deviceMemorylist-row-container",strhtml:e})}updateSubFamilyMemoryItems(){let e="";if(this.subFamily_memoryMap){let t=0;for(let i of this.subFamily_memoryMap){if(t===this.curEdit_subFamilyMemoryIndex){e+=`<div class="setting-list-row Editing" data-index="${t}"  tabindex="-1" role="listitem">
									<div class="setting-list-object-value">
										<div class='setting-list-object-edit-item'>
											<select class="setting-list-object-input">
											<option style='display: none'></option>`;for(let s of this.curEdit_subFamilyItem.devices)for(let n of s.processors)i.procName===n.procName?e+=`<option value="${n.procName}" selected>${n.procName}</option>`:e+=`<option value="${n.procName}">${n.procName}</option>`;e+=`</select>
						</div>
					</div>
					<div class="setting-list-object-value">
						<div class='setting-list-object-edit-item'>
							<input class="setting-list-object-input" value="${i.name}"></input>
						</div>
					</div>
					<div class="setting-list-object-valueMin">
						<div class='setting-list-object-edit-item'>
							<input class="setting-list-object-input" value="${i.access}">
							</input>
						</div>
					</div>
					<div class="setting-list-object-value">
						<div class='setting-list-object-edit-item'>
							<input class="setting-list-object-input" value="${i.start}"></input>
						</div>
					</div>
					<div class="setting-list-object-valueMin">
						<div class='setting-list-object-edit-item'>
							<input class="setting-list-object-input" value="${i.size}"></input>
						</div>
					</div>
					<div class="setting-list-object-valueMin">
						<div class='setting-list-object-edit-item'>
							<input type="checkbox" class="setting-list-object-input"  ${i.startup?"checked":""}></input>
						</div>
					</div>
					<div class="setting-list-object-valueMin">
						<div class='setting-list-object-edit-item'>
							<input type="checkbox" class="setting-list-object-input" ${i.default?"checked":""}></input>
						</div>
					</div>
					<div class="setting-list-object-valueMin">
						<div class='setting-list-object-edit-item'>
							<input class="setting-list-object-input" ${i.alias??""}></input>
						</div>
					</div>
					<div class="setting-list-object-valueMin">
						<div class='setting-list-object-edit-item'>
							<input type="checkbox" class="setting-list-object-input"  ${i.uninit?"checked":""}></input>
						</div>
					</div>
					<div class="setting-list-object-valueLong">
						<div class='setting-list-object-edit-item'>
							<input class="setting-list-object-input"  value="${i.description}"></input>
						</div>
					</div>
					<div class="setting-list-row-editdiv">
						<a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
						<a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
					</div>
				</div>`}else e+=`<div class="setting-list-row" data-index="${t}"  tabindex="-1" role="listitem">
									<div class="setting-list-object-value">${i.procName}</div>
									<div class="setting-list-object-value">${i.name}</div>
									<div class="setting-list-object-valueMin">${i.access}</div>
									<div class="setting-list-object-value">${i.start}</div>
									<div class="setting-list-object-valueMin">${i.size}</div>
									<div class="setting-list-object-valueMin">${i.startup}</div>
									<div class="setting-list-object-valueMin">${i.default}</div>
									<div class="setting-list-object-valueMin">${i.alias??""}</div>
									<div class="setting-list-object-valueMin">${i.uninit}</div>
									<div class="setting-list-object-valueLong">${i.description}</div>
									<div class="setting-list-sibling"></div>
										<div class="monaco-action-bar">
											<ul class="actions-container" role="toolbar">
												<li class="action-item" role="presentation" title="Edit Item">
													<a class="codicon codicon-edit"
														role="button" aria-label="Edit Item"
														tabindex="-1" data-focusable="true">
													</a>
												</li>
												<li class="action-item" role="presentation"
													title="Remove Item">
													<a class="codicon codicon-remove" role="button"
														aria-label="Remove Item" data-focusable="true"
														tabindex="-1"></a>
												</li>
											</ul>
										</div>
									</div>
								</div>`;++t}}this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"memoryList-row-container",strhtml:e})}updateConditionRequireItems(){let e="";if(this.curEdit_componentCondition?.comRequires){let t=this.curEdit_componentCondition.comRequires,i=0;for(let s of t){if(i===this.curEdit_compConditionRequireIndex){e+=`<div class="setting-list-row Editing" data-index="${i}"  tabindex="-1" role="listitem">
									<div class="setting-list-object-value">
										<div class='setting-list-object-edit-item'>
											<select class="setting-list-object-input" >
												<option style='display: none'></option>`;for(let n of rn)n===s.comClass?e+=`<option value="${n}" selected>${n}</option>`:e+=`<option value="${n}">${n}</option>`;e+=`</select>
								</div>
							</div>
							<div class="setting-list-object-value">
								<div class='setting-list-object-edit-item'>
									<input class="setting-list-object-input" value="${s.comGroup??""}" > </input>
								</div>
							</div>
							<div class="setting-list-object-value">
								<div class='setting-list-object-edit-item'>
									<input class="setting-list-object-input" value="${s.comSubgroup??""}"></input>
								</div>
							</div>
							<div class="setting-list-object-value">
								<div class='setting-list-object-edit-item'>
									<input class="setting-list-object-input" value="${s.comVersion??""}" ></input>
								</div>
							</div>
							<div class="setting-list-object-value">
								<div class='setting-list-object-edit-item'>
									<input class="setting-list-object-input" value="${s.comVariant??""}"></input>
								</div>
							</div>
							<div class="setting-list-row-editdiv">
								<a class="monaco-text-button setting-list-ok-button" tabindex="0" role="button">OK</a>
								<a class="monaco-text-button setting-list-cacel-button" tabindex="0" role="button">Cancel</a>
							</div>
						</div>`}else e+=`<div class="setting-list-row" data-index="${i}"  tabindex="-1" role="listitem">
									<div class="setting-list-object-value">${s.comClass??""}
									</div>
									<div class="setting-list-object-value">${s.comGroup??""}
									</div>
									<div class="setting-list-object-value">${s.comSubgroup??""}									
									</div>
									<div class="setting-list-object-value">${s.comVersion??""}
									</div>
									<div class="setting-list-object-value">${s.comVariant??""}
									</div>
									<div class="setting-list-sibling"></div>
										<div class="monaco-action-bar">
											<ul class="actions-container" role="toolbar">
												<li class="action-item" role="presentation" title="Edit Item">
													<a class="codicon codicon-edit"
														role="button" aria-label="Edit Item"
														tabindex="-1" data-focusable="true">
													</a>
												</li>
												<li class="action-item" role="presentation"
													title="Remove Item">
													<a class="codicon codicon-remove" role="button"
														aria-label="Remove Item" data-focusable="true"
														tabindex="-1"></a>
												</li>
											</ul>
										</div>
									</div>
								</div>`;++i}}this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"ConditionComRequiresList-row-container",strhtml:e})}addConfigListItemValue(e,t){this.updateConfiglistItem_Validfy(e,t)}updateConfigListItemValue(e,t,i){this.updateConfiglistItem_Validfy(e,i,t)}handleInputElemChanged(e,t){switch(e){case"chkUpdate":t==="checked"&&this._panel?.webview.postMessage({type:"enableElem",elem_id:"BrowseDFPFile"});break;case"chkNewEdit":t==="checked"&&(this._panel?.webview.postMessage({type:"enableElem",elem_id:"BrowseDFPFile",enableValue:"false"}),this.ResetMemberValues(),this.updateFamilyItems(!0));break;case"input_procName":this.curEdit_devProcessor.procName=t;break;case"input_proUnits":this.curEdit_devProcessor.proUnits=parseInt(t);break;case"input_devCore":this.curEdit_devProcessor.devCore=t;break;case"select_devEndian":{let i=t.split("##");this.curEdit_devProcessor.devEndian=i}break;case"input_devCoreVersion":this.curEdit_devProcessor.devCoreVersion=t;break;case"input_devFpu":this.curEdit_devProcessor.devFpu=t;break;case"input_devMpu":this.curEdit_devProcessor.devMpu=t;break;case"input_devDsp":this.curEdit_devProcessor.devDsp=t;break;case"input_deviceName":this.curEdit_device.deviceName=t;break;case"input_deviceDesc":this.curEdit_device.description=t;break;case"input_subFamilyName":this.curEdit_subFamilyItem.subfamilyName=t;break;case"input_subFamilyDesc":this.curEdit_subFamilyItem.description=t;break;case"input_familyName":this.curEdit_FamilyItem.familyName=t;break;case"input_deviceVendor":this.curEdit_FamilyItem.deviceVendor=t;break;case"input_familyDescription":this.curEdit_FamilyItem.description=t;break;case"select_FamilyList_Vendor_Edit":if(t){let i=t,s=j.getInstance().getAllProcessorFamilys(i),n="";for(let a of s)n+=`<option value="${a}">${a}</option>`;this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"select_FamilyList_Name_Edit",strhtml:n})}break;case"select_FamilyList_Vendor_New":if(t){let i=t,s=j.getInstance().getAllProcessorFamilys(i),n="";for(let a of s)n+=`<option value="${a}">${a}</option>`;this._panel?.webview.postMessage({type:"updateElemInnerHtml",elem_id:"select_FamilyList_Name_New",strhtml:n})}break;case"select_FileList_Category_New":this.curEdit_ComponentFileCategory_New=t;break;case"select_FileList_Category_Edit":this.curEdit_ComponentFileCategory_Edit=t;break;case"pack_Vendor":if(t.includes("_")||t.includes(".")){let i=new RegExp(/[_.]/g);this.packageItem.vendor=t=t.replace(i,""),ie.window.showWarningMessage("char [_.] is Not allowed."),this._panel?.webview.postMessage({type:"updateElemValue",elem_id:e,elem_value:t})}else this.packageItem.vendor=t;break;case"pack_Name":t.includes(".")?(this.packageItem.name=t=t.replaceAll(".",""),ie.window.showWarningMessage("char . is Not allowed."),this._panel?.webview.postMessage({type:"updateElemValue",elem_id:e,elem_value:t})):this.packageItem.name=t;break;case"pack_Desciption":this.packageItem.description=t;break;case"pack_Url":this.packageItem.url=t;break;case"pack_ReleaseVersion":{if(t.includes("_")){let i=new RegExp(/[_]/g);t=t.replace(i,""),ie.window.showWarningMessage("char _ is Not allowed."),this._panel?.webview.postMessage({type:"updateElemValue",elem_id:e,elem_value:t})}this.releaseInfoItem.version=t}break;case"pack_ChangeDesc":this.releaseInfoItem.changeDesc=t;break;case"pack_Tag":this.releaseInfoItem.tag=t;break;case"pack_BasePath":this.packageItem.packRootPath=t;break;case"select_comClass":this.curEdit_componentItem.comClass=t;break;case"input_comGroup":this.curEdit_componentItem.comGroup=t;break;case"input_comSubGroup":this.curEdit_componentItem.comSubgroup=t;break;case"input_comVersion":this.curEdit_componentItem.comVersion=t;break;case"input_comVariant":this.curEdit_componentItem.comVariant=t;break;case"input_comDescription":this.curEdit_componentItem.description=t;break;case"input_condition_devVendors":this.curEdit_componentCondition&&(this.curEdit_componentCondition.deviceVendor=t);break;case"input_condition_devNames":this.curEdit_componentCondition&&(this.curEdit_componentCondition.deviceNames=t.split(","));break;case"input_condition_procNames":this.curEdit_componentCondition&&(this.curEdit_componentCondition.procNames=t.split(","));break;case"input_condition_devCores":this.curEdit_componentCondition&&(this.curEdit_componentCondition.deviceCores=t.split(","));break;case"select_condition_devPFU":this.curEdit_componentCondition&&(this.curEdit_componentCondition.devFpu=t);break;case"select_condition_devMFU":this.curEdit_componentCondition&&(this.curEdit_componentCondition.devMpu=t);break;case"select_condition_devDSP":this.curEdit_componentCondition&&(this.curEdit_componentCondition.devDsp=t);break}}dispose(){this.ResetMemberValues(),this._panel?.dispose(),this._panel=void 0}_getHtmlForWebview(e){let t=ce(),i="";if(this._panel&&this._extensionUri){let s=e.asWebviewUri(ie.Uri.joinPath(this._extensionUri,"media","packageEditView.js")).toString(),n=e.asWebviewUri(ie.Uri.joinPath(this._extensionUri,"media","packageEditView.css")).toString(),a=e.asWebviewUri(ie.Uri.joinPath(this._extensionUri,"media","codicon.css"));i=`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<link href="${n}" rel="stylesheet" />
			<meta http-equiv="Content-Security-Policy" content="default-src 'none'; font-src ${e.cspSource}; style-src ${e.cspSource};script-src 'nonce-${t}';">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>>Mips Studio</title>
			<link href="${n}" rel="stylesheet" />
			<link href="${a}" rel="stylesheet" />
		</head>
		<body data-vscode-context='{"preventDefaultContextMenuItems": true }'>
		<div class="content" data-vscode-context='{"preventDefaultContextMenuItems": true }'>
			<h1>Package Edit Tool</h1>`,i+=`
			<div>
				<div class="class1">
					<input class="setting-value-checkbox" type="radio" name="chkEditType" id="chkUpdate">
					<label class="minilabel" for="chkUpdate" >Update from existing pack</label>
					<input class="wideinput" id="packDFPFile" disabled/>
					<button class="monaco-text-button"  name="btnBrowseFile" valueid="packDFPFile" id="BrowseDFPFile" disabled>Browse</button>
				</div>
				<div class="class1">
					<input class="setting-value-checkbox" checked type="radio" name="chkEditType" id="chkNewEdit">
					<label class="minilabel" for="chkNewEdit">Add New</label>
				</div>
				<div class="settingsArea">
					<div class="settingContainer">
						<div>
							<details open="true" id="detail_PackInfo">
								<summary>Pack Info</summary>
								<hr />
								<div class="class1">
									<label class="minilabel">Vendor:</label>
									<input class="wideinput" id="pack_Vendor" required>
								</div>
								<div class="class1">
									<label class="minilabel">Name:</label>
									<input class="wideinput" id="pack_Name" required>
								</div>
								<div class="class1">
									<label class="minilabel">Description:</label>
									<input class="wideinput" id="pack_Desciption" required> </input>
								</div>
								<div class="class1">
									<label class="minilabel">Url:</label>
									<input class="wideinput" id="pack_Url" >
								</div>
								<div class="class1">
									<label class="minilabel">Release Version:</label>
									<input class="wideinput" id="pack_ReleaseVersion" required>
								</div>
								<div class="class1">
									<label class="minilabel">Version Change Description:</label>
									<input class="wideinput" id="pack_ChangeDesc" required>
								</div>
								<div class="class1">
									<label class="minilabel">Tag:</label>
									<input class="wideinput" id="pack_Tag" >
								</div>
								<div class="class1">
									<label class="minilabel">PackBasePath:</label>
									<input class="wideinput" id="pack_BasePath" >
									<button class="monaco-text-button"  name="btnBrowsePath" valueid="pack_BasePath" required>Browse</button>
								</div>
							</details>
						</div>
						<div>
							<details open="true">
								<summary>Families</summary>
								<hr />
								<ul>
									<li>
										<label>Select from existing Families</label>
										<div class="setting-item-control" title="selectFamiyList">
											<div role="list" class="setting-list-widget"  tabindex="-1" data-focusable="true" >
												<div class="setting-list-row-header">
													<div class="setting-list-object-valueMidLong">DeviceVendor</div>
													<div class="setting-list-object-valueMidLong">FamilyName</div>
												</div>
												<div id="selectFamiyList-row-container">
												</div>
												<div class="setting-list-new-row" id="selectFamiyList-new-row">
													<button class="monaco-text-button" id="btnSelectFamilyListAdd">Add Item</button>
												</div>
											</div>
										</div>
									</li>
									<li>
										<label>Add New Families</label>
										<div class="setting-item-control" title="listFamilies">
											<div role="list" class="setting-list-widget" tabindex="-1"
												data-focusable="true">
												<div class="setting-list-row-header">
													<div class="setting-list-object-value">DeviceVendor</div>
													<div class="setting-list-object-value">FamilyName</div>
													<div class="setting-list-object-valueLong">Description</div>
													<div class="setting-list-object-valueMidLong">SubFamilies</div>
												</div>
												<div id="FamiyList-row-container">
												</div>
											</div>
										</div>
										<button class="monaco-text-button"  id="btnAddFamily" >Add Family</button>
										<details id="detail_Family">
											<summary>Family</summary>
											<div class="class1">
												<label class="minilabel">FamilyName:</label>
												<input class="wideinput" id="input_familyName" disabled>
											</div>
											<div class="class1">
												<label class="minilabel">DeviceVendor:</label>
												<input class="wideinput" id="input_deviceVendor" disabled>
											</div>
											<div class="class1">
												<label class="minilabel">Description:</label>
												<input class="wideinput" id="input_familyDescription" disabled>
											</div>
											<div class="classInner">
												<label>SubFamilies</label>
												<div class="setting-item-control" title="listSubFamilies">
													<div role="list" class="setting-list-widget" tabindex="-1"
														data-focusable="true">
														<div class="setting-list-row-header">
															<div class="setting-list-object-value">SubfamilyName</div>
															<div class="setting-list-object-valueLong">Description</div>
															<div class="setting-list-object-valueMidLong">Devices</div>
														</div>
													</div>
													<div id="SubFamiyList-row-container">
													</div>
												</div>
												<button class="monaco-text-button"  id="btnAddSubFamily" disabled>Add SubFamily</button>
												<details id="detail_SubFamily">
													<summary>SubFamily</summary>
													<div class="class1">
														<label class="minilabel">SubfamilyName:</label>
														<input class="wideinput" id="input_subFamilyName" disabled>
													</div>
													<div class="class1">
														<label class="minilabel">Description:</label>
														<input class="wideinput" id="input_subFamilyDesc" disabled>
													</div>
													<div class="classInner">
														<label>Devices</label>
														<div class="setting-item-control" title="listDevices">
															<div role="list" class="setting-list-widget" tabindex="-1"
																data-focusable="true">
																<div class="setting-list-row-header">
																	<div class="setting-list-object-value">DeviceName</div>
																	<div class="setting-list-object-valueLong">Description</div>
																	<div class="setting-list-object-valueMidLong">Processors</div>
																</div>
																<div id="DeviceList-row-container">
																</div>
															</div>
														</div>
														<button class="monaco-text-button"  id="btnAddDevice" disabled>Add Device</button>
														<details id="detail_Device">
															<summary>Device</summary>
															<div class="class1">
																<label class="minilabel">DeviceName:</label>
																<input class="wideinput" id="input_deviceName" disabled>
															</div>
															<div class="class1">
																<label class="minilabel">Description:</label>
																<input class="wideinput" id="input_deviceDesc" disabled>
															</div>
															<div class="classInner">
																<label>Processors</label>
																<div class="setting-item-control" title="listProcessors">
																	<div role="list" class="setting-list-widget" tabindex="-1"
																		data-focusable="true">
																		<div class="setting-list-row-header">
																			<div class="setting-list-object-valueMin">ProcName</div>
																			<div class="setting-list-object-valueMin">ProUnits</div>
																			<div class="setting-list-object-valueMin">DevCore</div>
																			<div class="setting-list-object-value">Endian</div>
																			<div class="setting-list-object-valueMin">CoreVersion</div>
																			<div class="setting-list-object-valueMin">FPU</div>
																			<div class="setting-list-object-valueMin">MPU</div>
																			<div class="setting-list-object-valueMin">DSP</div>
																		</div>
																		<div id="ProcessorList-row-container">
																		</div>
																	</div>
																</div>
																<button class="monaco-text-button"  id="btnAddProcessor" disabled>Add Processor</button>
																<details id="detail_Processor">
																	<summary>Processor</summary>
																	<div class="class1">
																		<label class="minilabel">ProcName:</label>
																		<input class="wideinput" id="input_procName" disabled>
																	</div>
																	<div class="class1">
																		<label class="minilabel">ProUnits:</label>
																		<input class="wideinput" id="input_proUnits" type="number" disabled>
																	</div>
																	<div class="class1">
																		<label class="minilabel">DevCore:</label>
																		<input class="wideinput" id="input_devCore" disabled>
																	</div>
																	<div class="class1">
																		<label class="minilabel">DevEndian:</label>
																		<select class="wideinput" id="select_devEndian" multiple size=2 disabled>
																			<option value="Little-endian">Little-endian</option>
																			<option value="Big-endian">Big-endian</option>
																		</select>
																	</div>	
																	<div class="class1">
																		<label class="minilabel">DevCoreVersion:</label>
																		<input class="wideinput" id="input_devCoreVersion" disabled>
																	</div>
																	<div class="class1">
																		<label class="minilabel">DevFpu:</label>
																		<select class="wideinput" id="input_devFpu" disabled>
																			<option value="NO_FPU">NO_FPU</option>
																			<option value="FPU">FPU</option>
																			<option value="SP_FPU">SP_FPU</option>
																			<option value="DP_FPU">DP_FPU</option>
																		</select>
																	</div>	
																	<div class="class1">
																		<label class="minilabel">DevMpu:</label>
																		<select class="wideinput" id="input_devMpu" disabled>
																			<option value="NO_MPU">NO_MPU</option>
																			<option value="MPU">MPU</option>
																		</select>
																	</div>	
																	<div class="class1">
																		<label class="minilabel">DevDsp:</label>
																		<select class="wideinput" id="input_devDsp" disabled>
																			<option value="NO_DSP">NO_DSP</option>
																			<option value="DSP">DSP</option>
																		</select>
																	</div>	
																	<div class="finishBtnArea">
																		<button class="monaco-text-button" id="btnApplyProcessor" disabled>Apply</button>
																		<button class="monaco-text-button" id="btnCancelProcessor" disabled>Cancel Processor</button>
																		<button class="monaco-text-button" id="btnResetProcessor" disabled>Reset Processor</button>
																	</div>
																</details>
															</div>
															<div class="classInner">
																<label>Device Memory</label>
																<div class="setting-item-control" title="listMemoryMap_Device">
																	<div role="list" class="setting-list-widget" tabindex="-1"
																		data-focusable="true">
																		<div class="setting-list-row-header">		
																			<div class="setting-list-object-value">ProcName</div>
																			<div class="setting-list-object-value">RegionName</div>
																			<div class="setting-list-object-valueMin">Attribute</div>
																			<div class="setting-list-object-value">StartAddress</div>
																			<div class="setting-list-object-valueMin">Size</div>
																			<div class="setting-list-object-valueMin">StartUp</div>
																			<div class="setting-list-object-valueMin">Default</div>
																			<div class="setting-list-object-valueMin">Alias</div>
																			<div class="setting-list-object-valueMin">Uninit</div>
																			<div class="setting-list-object-valueLong">Description</div>
																		</div>
																		<div id="deviceMemorylist-row-container">
																		</div>
																		<div class="setting-list-new-row" id="deviceMemorylist-new-row">
																			<button class="monaco-text-button" id="btnDeviceMemoryListAdd" disabled>Add Item</button>
																		</div>
																	</div>
																</div>
															</div>
															<div class="finishBtnArea">
																<button class="monaco-text-button" id="btnApplyDevice" disabled>Apply</button>
																<button class="monaco-text-button" id="btnCancelDevice" disabled>Cancel Device</button>
																<button class="monaco-text-button" id="btnResetDevice" disabled>Reset Device</button>
															</div>
														</details>
													</div>
													<div class="classInner">
														<label>SubFamily Memory</label>
														<div class="setting-item-control" title="listMemoryMap">
															<div role="list" class="setting-list-widget" tabindex="-1"
																data-focusable="true">
																<div class="setting-list-row-header">		
																	<div class="setting-list-object-value">ProcName</div>
																	<div class="setting-list-object-value">RegionName</div>
																	<div class="setting-list-object-valueMin">Attribute</div>
																	<div class="setting-list-object-value">StartAddress</div>
																	<div class="setting-list-object-valueMin">Size</div>
																	<div class="setting-list-object-valueMin">StartUp</div>
																	<div class="setting-list-object-valueMin">Default</div>
																	<div class="setting-list-object-valueMin">Alias</div>
																	<div class="setting-list-object-valueMin">Uninit</div>
																	<div class="setting-list-object-valueLong">Description</div>
																</div>
																<div id="memoryList-row-container">
																</div>
																<div class="setting-list-new-row" id="memoryList-new-row">
																	<button class="monaco-text-button" id="btnMemoryListAdd" disabled>Add Item</button>
																</div>
															</div>
														</div>
													</div>
													<div class="finishBtnArea">
														<button class="monaco-text-button" id="btnApplySubFamily" disabled>Apply</button>
														<button class="monaco-text-button" id="btnCancelSubFamily" disabled>Cancel SubFamily</button>
														<button class="monaco-text-button" id="btnResetSubFamily" disabled>Reset SubFamily</button>
													</div>
												</details>
											</div>
											<div class="finishBtnArea">
												<button class="monaco-text-button" id="btnApplyFamily" disabled>Apply</button>
												<button class="monaco-text-button" id="btnCancelFamily" disabled>Cancel Family</button>
												<button class="monaco-text-button" id="btnResetFamily" disabled>Reset Family</button>
											</div>
										</details>
									</li>
								</ul>
							</details>
						</div>
						<div>
							<details open="true">
								<summary>Components</summary>
								<hr />
								<div class="classInner">
									<div class="setting-item-control" title="ComponentsList">
										<div role="list" class="setting-list-widget"  tabindex="-1" data-focusable="true" >
											<div class="setting-list-row-header">
												<div class="setting-list-object-valueMin">Class</div>
												<div class="setting-list-object-valueMin">Group</div>
												<div class="setting-list-object-valueMin">SubGroup</div>
												<div class="setting-list-object-valueMin">Version</div>
												<div class="setting-list-object-valueMin">Variant</div>
												<div class="setting-list-object-valueMidLong">Description</div>
												<div class="setting-list-object-valueLongLong">Files</div>
											</div>
											<div id="ComponentsList-row-container">
											</div>
										</div>
									</div>
									<button class="monaco-text-button"  id="btnAddComponent">Add Component</button>
									<details id="detail_Component">
										<summary>Component</summary>
										<div class="classInner">
											<div class="class1">
												<label class="minilabel">Class:</label>
												<select class="wideinput" id="select_comClass" disabled>`;for(let r of rn)i+=`<option value="${r}">${r}</option>`;i+=`</select>
											</div>
											<div class="class1">
												<label class="minilabel">Group:</label>
												<input class="wideinput" id="input_comGroup"  required disabled>
											</div>
											<div class="class1">
												<label class="minilabel">subGroup:</label>
												<input class="wideinput" id="input_comSubGroup" disabled>
											</div>
											<div class="class1">
												<label class="minilabel">Version:</label>
												<input class="wideinput" id="input_comVersion" required disabled>
											</div>	
											<div class="class1">
												<label class="minilabel">Variant:</label>
												<input class="wideinput" id="input_comVariant" disabled>
											</div>
											<div class="class1">
												<label class="minilabel">Description:</label>
												<input class="wideinput" id="input_comDescription" required disabled>
											</div>	
											<div class="classInner">
												<label class="minilabel">Files:</label>
												<div class="setting-item-control" title="listComponentFiles">
													<div role="list" class="setting-list-widget" tabindex="-1"
														data-focusable="true">
														<div class="setting-list-row-header">
															<div class="setting-list-object-valueLongLong">FilePath</div>		
															<div class="setting-list-object-value">Version</div>
															<div class="setting-list-object-value">category</div>
															<div class="setting-list-object-value">Attribute</div>
														</div>
														<div id="componentFilesList-row-container">
														</div>
														<div class="setting-list-new-row" id="componentFilesList-new-row">
															<button class="monaco-text-button"  id="btnComponentFileListAdd" disabled>Add Item</button>
														</div>
													</div>
												</div>
											</div>
											<button class="monaco-text-button"  id="btnEnableCondition" disabled>Edit Condition</button>
											<details id="detail_Condition">
												<summary>Condition</summary>
												<hr />
												<div class="class1">
													<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevVendor" disabled>
													<label class="minilabel" for="chk_conditionDevVendor">Device Vendor</label>
													<input class="wideinput" id="input_condition_devVendors"  placeholder="Use commas to separate multiple" hidden disabled>
													</input>
												</div>
												<div class="class1">
													<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevName" disabled>
													<label class="minilabel" for="chk_conditionDevName">Device Name</label>
													<input class="wideinput" id="input_condition_devNames" hidden disabled>
													</input>
												</div>
												<div class="class1">
													<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionProcName" disabled>
													<label class="minilabel" for="chk_conditionProcName">Proc Name</label>
													<input class="wideinput" id="input_condition_procNames" hidden disabled>
													</input>
												</div>
												<div class="class1">
													<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevCores" disabled>
													<label class="minilabel" for="chk_conditionDevCores">Dev Core</label>
													<input class="wideinput" id="input_condition_devCores" hidden disabled>
													</input>
												</div>
												<div class="class1">
													<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevFPU" disabled>
													<label class="minilabel" for="chk_conditionDevFPU">FPU</label>
													<select class="wideinput" id="select_condition_devPFU" hidden disabled>
														<option value="FPU">FPU</option>
														<option value="SP_FPU">SP_FPU</option>
														<option value="DP_FPU">DP_FPU</option>
													</select>
												</div>
												<div class="class1">
													<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevMPU" disabled>
													<label class="minilabel" for="chk_conditionDevMPU">MPU</label>
													<select class="wideinput" id="select_condition_devMFU" hidden disabled>
														<option value="MPU">MPU</option>
													</select>
												</div>
												<div class="class1">
													<input class="setting-value-checkbox" type="checkbox" data-group="condition" id="chk_conditionDevDSP" disabled>
													<label class="minilabel" for="chk_conditionDevDSP">DSP</label>
													<select class="wideinput" id="select_condition_devDSP" hidden disabled>
														<option value="DSP">DSP</option>
													</select>
												</div>
												<div class="classInner">
												<label class="minilabel">Requires:</label>
												<div class="setting-item-control" title="listConditionComRequires">
														<div role="list" class="setting-list-widget" tabindex="-1"
															data-focusable="true">
															<div class="setting-list-row-header">		
																<div class="setting-list-object-value">Class</div>
																<div class="setting-list-object-value">Group</div>
																<div class="setting-list-object-value">SubGroup</div>
																<div class="setting-list-object-value">Version</div>
																<div class="setting-list-object-value">Variant</div>
															</div>
															<div id="ConditionComRequiresList-row-container">
															</div>
															<div class="setting-list-new-row" id="ConditionComRequiresList-new-row">
																<button class="monaco-text-button"  id="btnConditionComRequiresListAdd" disabled>Add Item</button>
															</div>
														</div>
													</div>
												</div>
												<div class="finishBtnArea">
													<button class="monaco-text-button" id="btnApplyCondition" disabled>Apply</button>
													<button class="monaco-text-button" id="btnRemoveCondition" disabled>Remove Condition</button>
													<button class="monaco-text-button" id="btnResetCondition" disabled>Reset Condition</button>
												</div>
											</details>
											<div class="finishBtnArea">
												<button class="monaco-text-button" id="btnApplyComponent" disabled>Apply</button>
												<button class="monaco-text-button" id="btnCancelComponent" disabled>Cancel Component</button>
												<button class="monaco-text-button" id="btnResetComponent" disabled>Reset Component</button>
											</div>
										</div>
									</details>
								</div>
							</details>
						</div>
					</div>
				</div>
				<div class="finishBtnArea">
					<button class="monaco-text-button" id="btnMakePack">Generate Package</button>
					<button class="monaco-text-button" id="btnMakeDfpFile">Generate DFP Only</button>
				</div>
			</div>`,i+=`
		</div>
		<script nonce="${t}" src="${s}"><\/script>
		</body>
		</html>`}return i}_update(){if(this._panel){let e=this._panel.webview;this._panel.webview.html=this._getHtmlForWebview(e)}}},qt=Et;q(qt,"instance"),q(qt,"viewType","mipsstudio.packageEditView");var Qe=T(require("vscode"));var cn=require("util");var Dt="	",H=32;function Gl(o){if(o.length%2===0){let e=o.length/2,t=new Uint8Array(e);for(let i=0;i<e;i++)t[i]=parseInt(o.substring(i*2,2),16);return t}else return}var zt=class{constructor(e){this._extensionUri=e;this.memroy_addr=268435456,this.mem_size=64,this.mem_data=Buffer.from([255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255,255]),this.bDataModify=!1,this.nWriteDataSize=this.mem_size,this.data_toWrite="",this.bDataReaded=!1,this.bReadDataChanged=!1,this.bFlagMemDataChanged=!1}_view;memroy_addr;mem_size;mem_data;bDataModify;nWriteDataSize;data_toWrite;bDataReaded;bReadDataChanged;bFlagMemDataChanged;resolveWebviewView(e){this._view=e,e.webview.options={enableScripts:!0,localResourceRoots:[this._extensionUri]},e.webview.html=this._getHtmlForWebview(e.webview),e.webview.onDidReceiveMessage(t=>{switch(t.type){case"ReadMemory":this.readMemory();break;case"WriteMemory":this.writeMemory();break;case"CopyData":if(this.mem_data){let i=this.mem_data.byteLength,s=Math.floor((i+H-1)/H),n=i%H,a="";for(let r=0;r<s;++r)if(r==s-1){let l=H;n!==0&&(l=n);for(let c=0;c<l;++c){let d=r*H+c,u=this.getbyteStr(d);a+=u,c!=l-1&&(a+=" ")}}else{for(let l=0;l<H;++l){let c=r*H+l,d=this.getbyteStr(c);a+=d,l!=H-1&&(a+=" ")}a+=`
`}Qe.env.clipboard.writeText(a)}break;case"CopySelected":if(t.selected_data){let i=t.selected_data.replaceAll(`
`," ");Qe.env.clipboard.writeText(i)}break;case"inputElemChanged":t.elem_id&&t.elem_value!==void 0&&this.handleInputElemChanged(t.elem_id,t.elem_value);break;case"txtElemChanged":t.elem_id&&t.elem_value!==void 0&&this.handleInputElemChanged(t.elem_id,t.elem_value);break;case"selectChange":if(t.anchorIndex&&t.focusIndex&&this.mem_data.byteLength){let i=parseInt(t.anchorIndex),s=parseInt(t.focusIndex);if(i>=0&&s>=0){let n;if(s>i?n=this.mem_data.subarray(i,s+1):n=this.mem_data.subarray(s,i+1),n){let r=new cn.TextDecoder().decode(n),c=new cn.TextDecoder("chinese").decode(n),d=`utf-8: ${r}
cn: ${c}`,u=n.length;if(u<=8){let h="";for(let p=u-1;p>=0;--p){let f=n.at(p);if(f!==void 0){let b=f.toString(16).toUpperCase();b.length<2?h+="0"+b:h+=b}}if(u===8){let p=BigInt("0x"+h);d+=`
Hex: 0x${h} Int64: ${p}`}else{let p=parseInt(h,16);if(u===4)if(p>2147483647){let f=p-4294967296;d+=`
Hex: 0x${h}${Dt}UInt32: ${p}${Dt}Int32: ${f}`}else d+=`
Hex: 0x${h}${Dt}UInt32: ${p}`;else if(u===2)if(p>32767){let f=p-65536;d+=`
Hex: 0x${h}${Dt}UInt16: ${p}${Dt}Int16: ${f}`}else d+=`
Hex: 0x${h}${Dt}UInt16: ${p}`;else d+=`
Hex: 0x${h}${Dt}UINT: ${p}`}}this._view?.webview.postMessage({type:"select_mem_data_info",strInfo:d})}}}break}})}checkMemChanged(){this.bFlagMemDataChanged&&this.readMemory()}writeMemory(){let e=Qe.debug.activeDebugSession;if(e!==void 0){let t=Gl(this.data_toWrite),i=I.getInstance().supportWriteMemory,s=I.getInstance().supportSetExpression;if(t){let n=Buffer.from(t);if(i){let a=n.toString("base64"),r={memoryReference:"0x"+this.memroy_addr.toString(16),data:a};e.customRequest("writeMemory",r).then(l=>{console.log(l),this.bFlagMemDataChanged=!0}),setTimeout(()=>{this.checkMemChanged()},1e3)}else if(s){let a=this.memroy_addr,r="0x",l=this.mem_data.byteLength,c=Math.floor((this.data_toWrite.length+1)/2),d=Math.floor((c+H-1)/H),u=c%H;for(let h=0;h<d;++h)if(h==d-1&&u!==0)for(let p=0;p<u;p+=4){let f=h*H+p;a=this.memroy_addr+f;let b=this.getToWrite4BytesHexStr(f);r="0x"+b,f<l?this.get4bytesStr(f)!==b&&this.setExpression(e,a,r):this.setExpression(e,a,r)}else for(let p=0;p<H;p+=4){let f=h*H+p;a=this.memroy_addr+f;let b=this.getToWrite4BytesHexStr(f);r="0x"+b,f<l?this.get4bytesStr(f)!==b&&this.setExpression(e,a,r):this.setExpression(e,a,r)}setTimeout(()=>{this.checkMemChanged()},1e3)}}}}setExpression(e,t,i){let s={expression:"*((unsigned int*)0x"+t.toString(16)+" )",value:i,frameId:1e3};try{e.customRequest("setExpression",s).then(n=>{this.bFlagMemDataChanged=!0})}catch(n){console.log(n);let r={expression:"set *0x"+t.toString(16)+" = "+i,context:"repl",frameId:1e3};e.customRequest("evaluate",r).then(l=>{this.bFlagMemDataChanged=!0})}}readMemory(){let e=Qe.debug.activeDebugSession;if(e!==void 0){let t={memoryReference:"0x"+this.memroy_addr.toString(16),count:this.mem_size};e.customRequest("readMemory",t).then(i=>{let s=this.mem_data;if(this.mem_data=Buffer.from(i.data,"base64"),this.bDataReaded=!0,this.bFlagMemDataChanged=!1,Buffer.compare(s,this.mem_data)!=0){this.bReadDataChanged=!0;let n=this.getMemDataStyled_CompareLastData(s);this._view?.webview.postMessage({type:"mem_data_area",strhtml:n})}else if(this.bReadDataChanged){this.bReadDataChanged=!1;let n=this.getMemDataStyled_CompareLastData(s);this._view?.webview.postMessage({type:"mem_data_area",strhtml:n})}})}}NotifyDebugStopped(){this.bDataReaded&&this.readMemory()}reset(){this.bDataModify=!1,this.nWriteDataSize=this.mem_size,this.data_toWrite="",this.bDataReaded=!1,this.bReadDataChanged=!1,this.bFlagMemDataChanged=!1}update(){this._view&&(this._view.webview.html=this._getHtmlForWebview(this._view.webview))}getToWriteByteHexStr(e){let t=e*2,i="",s=this.data_toWrite.length;return t<s-2?i=this.data_toWrite.substring(t,t+2):t==s-2&&(i=this.data_toWrite.substring(t)),i.toUpperCase()}getToWrite4BytesHexStr(e){let t="";for(let i=3;i>=0;--i){let s=(e+i)*2,n="",a=this.data_toWrite.length;s<a-2?n=this.data_toWrite.substring(s,s+2):s==a-2&&(n=this.data_toWrite.substring(s)),t+=n.toUpperCase()}return t}getMemDataStyled_CompareLastData(e){let t=this.mem_data.byteLength,i=e.byteLength,s="",n=Math.floor((t+H-1)/H),a=t%H;for(let r=0;r<n;++r){let l=(r*H).toString(16);if(l=ct(l,8),r==n-1&&a!==0){s+=`<div class="dataDisplay_Row"><div class="dataDisplay__address">${l}</div>
					<div class="dataDisplay__data-cell-group" id="memoryData_${r}">`;for(let c=0;c<a;++c){let d=r*H+c,u=this.memroy_addr+d,h=re(u,4),p=this.getbyteStr(d),f=this.getByteDataTitle(d,h);d<i?this.mem_data.at(d)!==e.at(d)?s+=`<span tabindex="0" title="${f}" class="dataDisplayContext__data-cell_h data-changed" data-key="${d}">${p}</span>`:s+=`<span tabindex="0" title="${f}" class="dataDisplayContext__data-cell_h" data-key="${d}">${p}</span>`:s+=`<span tabindex="0" title="${f}" class="dataDisplayContext__data-cell_h data-changed" data-key="${d}">${p}</span>`}s+="</div></div>"}else{s+=`<div class="dataDisplay_Row"><div class="dataDisplay__address">${l}</div>
					<div class="dataDisplay__data-cell-group" id="memoryData_${r}">`;for(let c=0;c<H;++c){let d=r*H+c,u=this.memroy_addr+d,h=re(u,4),p=this.getbyteStr(d),f=this.getByteDataTitle(d,h);d<i?this.mem_data.at(d)!==e.at(d)?s+=`<span tabindex="0" title="${f}" class="dataDisplayContext__data-cell_h data-changed" data-key="${d}">${p}</span>`:s+=`<span tabindex="0" title="${f}" class="dataDisplayContext__data-cell_h" data-key="${d}">${p}</span>`:s+=`<span tabindex="0" title="${f}" class="dataDisplayContext__data-cell_h data-changed" data-key="${d}">${p}</span>`}s+="</div></div>"}}return s+="</div>",s}getMemDataStyled_(){let e=this.mem_data.byteLength,t=Math.floor((this.data_toWrite.length+1)/2),i="",s=Math.floor((e+H-1)/H),n=e%H;for(let a=0;a<s;++a){let r=(a*H).toString(16);if(r=ct(r,8),a==s-1&&n!==0){i+=`<div class="dataDisplay_Row"><div class="dataDisplay__address">${r}</div>
					<div class="dataDisplay__data-cell-group" id="memoryData_${a}">`;for(let l=0;l<n;++l){let c=a*H+l,d=this.memroy_addr+c,u=re(d,4),h=this.getbyteStr(c),p=this.getByteDataTitle(c,u);c<t?h!==this.getToWriteByteHexStr(c)?i+=`<span tabindex="0" title="${p}" class="dataDisplayContext__data-cell_h data-notequal" data-key="${c}">${h}</span>`:i+=`<span tabindex="0" title="${p}" class="dataDisplayContext__data-cell_h data-equal" data-key="${c}">${h}</span>`:i+=`<span tabindex="0" title="${p}" class="dataDisplayContext__data-cell_h" data-key="${c}">${h}</span>`}i+="</div></div>"}else{i+=`<div class="dataDisplay_Row"><div class="dataDisplay__address">${r}</div>
					<div class="dataDisplay__data-cell-group" id="memoryData_${a}">`;for(let l=0;l<H;++l){let c=a*H+l,d=this.memroy_addr+c,u=re(d,4),h=this.getbyteStr(c),p=this.getByteDataTitle(c,u);c<t?h!==this.getToWriteByteHexStr(c)?i+=`<span tabindex="0" title="${p}" class="dataDisplayContext__data-cell_h data-notequal" data-key="${c}">${h}</span>`:i+=`<span tabindex="0" title="${p}" class="dataDisplayContext__data-cell_h data-equal" data-key="${c}">${h}</span>`:i+=`<span tabindex="0" title="${p}" class="dataDisplayContext__data-cell_h" data-key="${c}">${h}</span>`}i+="</div></div>"}}return i+="</div>",i}compareMemDataWithToWrite(){let e=this.getMemDataStyled_();this._view?.webview.postMessage({type:"mem_data_area",strhtml:e})}handleInputElemChanged(e,t){switch(e){case"addr":this.memroy_addr=parseInt(t,16);break;case"size":this.mem_size=parseInt(t);break;case"Modify":this.bDataModify=t==="checked",this.nWriteDataSize=this.mem_size,this.update();break;case"size_toWrite":this.nWriteDataSize=parseInt(t),this.update();break;case"mem_data_toWrite":this.data_toWrite=t,this.data_toWrite=this.data_toWrite.replaceAll(/\s+/g,""),this.compareMemDataWithToWrite();break}}_getHtmlForWebview(e){let t=ce(),i="",s=e.asWebviewUri(Qe.Uri.joinPath(this._extensionUri,"media","dbgMemView.js")).toString(),n=e.asWebviewUri(Qe.Uri.joinPath(this._extensionUri,"media","dbgMemView.css")).toString(),a=this.mem_data.byteLength,r=re(this.memroy_addr,4),l=I.getInstance().supportReadMemory,c=I.getInstance().supportWriteMemory,d=I.getInstance().supportSetExpression,u=l?"":"disabled",h=c||d?"":"hidden",p=this.bDataModify?"checked":"";if(!l)i=`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${e.cspSource}; script-src 'nonce-${t}';">
			<title>Mips Studio</title>
			<link href="${n}" rel="stylesheet" />
		</head>
		<body data-vscode-context='{"preventDefaultContextMenuItems": true }'>
    	<h2>Current Debug Session Do not support ReadMemory!</h2>
		<script nonce="${t}" src="${s}"><\/script>
		</body>
		</html>`;else{if(i=`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${e.cspSource}; script-src 'nonce-${t}';">
			<title>Mips Studio</title>
			<link href="${n}" rel="stylesheet" />
		</head>
		<body data-vscode-context='{"preventDefaultContextMenuItems": true }'>
    	<div class="content">
			<div class="leftItems">				
				<div class="class1">
					<div><label class="smallLabel">address:</label><input class="smallinput" id="addr" value="${r}"/></div>
					<div><label class="smallLabel">size:</label><input class="smallinput" id="size" value="${this.mem_size}"/></div>
					<div><button class="monaco-text-button" id="ReadMemory" ${u}>ReadMemory</button></div>
					<div><button class="monaco-text-button" id="CopyData">Copy Data</button></div>
					<div><button class="monaco-text-button" id="CopySelected">Copy Selected</button></div>
					<div><input type="checkbox" id="Modify" ${h} ${p}/>
					<label class="smallLabel" for="Modify" ${h}>Modify It</label></div>
				</div>
				<hr/>
				<div class="datadisplay_area" id="mem_data_area">`,a==this.mem_size)if(this.bDataModify&&this.data_toWrite.length)i+=this.getMemDataStyled_();else{let f=Math.floor((a+H-1)/H),b=a%H;for(let v=0;v<f;++v){let m=(v*H).toString(16);if(m=ct(m,8),v==f-1&&b!==0){i+=`<div class="dataDisplay_Row"><div class="dataDisplay__address">${m}</div>
					<div class="dataDisplay__data-cell-group" id="memoryData_${v}">`;for(let _=0;_<b;++_){let C=v*H+_,P=this.memroy_addr+C,D=re(P,4),N=this.getbyteStr(C),S=this.getByteDataTitle(C,D);i+=`<span tabindex="0" title="${S}" class="dataDisplayContext__data-cell_h" data-key="${C}">${N}</span>`}i+="</div></div>"}else{i+=`<div class="dataDisplay_Row"><div class="dataDisplay__address">${m}</div>
					<div class="dataDisplay__data-cell-group" id="memoryData_${v}">`;for(let _=0;_<H;++_){let C=v*H+_,P=this.memroy_addr+C,D=re(P,4),N=this.getbyteStr(C),S=this.getByteDataTitle(C,D);i+=`<span tabindex="0" title="${S}"  class="dataDisplayContext__data-cell_h" data-key="${C}">${N}</span>`}i+="</div></div>"}}i+="</div>"}else i+=`<div class="dataDisplay_Row"><div class="dataDisplay__address">00000000</div>
							<div class="dataDisplay__data-cell-group" id="memoryData_0">
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="0">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="1">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="2">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="3">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="4">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="5">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="6">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="7">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="8">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="9">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="10">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="11">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="12">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="13">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="14">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="15">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="16">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="17">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="18">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="19">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="20">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="21">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="22">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="23">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="24">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="25">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="26">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="27">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="28">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="29">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="30">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="31">FF</span>
							</div>
						</div>
						<div class="dataDisplay_Row">
							<div class="dataDisplay__address">00000020</div>
							<div class="dataDisplay__data-cell-group">
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="32">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="33">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="34">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="35">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="36">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="37">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="38">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="39">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="40">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="41">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="42">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="43">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="44">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="45">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="46">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="47">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="48">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="49">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="50">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="51">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="52">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="53">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="54">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="55">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="56">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="57">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="58">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="59">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="60">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="61">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="62">FF</span>
								<span tabindex="0" class="dataDisplayContext__data-cell_h" data-key="63">FF</span>
							</div>
						</div>`,i+="</div>";if(this.bDataModify){let f=Math.floor((this.nWriteDataSize+H-1)/H);i+=`<hr/>
				<div class="selected_info_area" id="selected_mem_data_info"></div>
				</div>
			<div class="rightItems">
				<div class="class1">
					<div><label class="smallLabel">size:</label><input class="smallinput" id="size_toWrite" value="${this.nWriteDataSize}"></div>
					<div><button class="monaco-text-button" id="WriteMemory">WriteMemory</button></div>
				</div>
				<hr/>
				<div class="datadisplay_area">
					<textarea class="memdata_txtarea" id="mem_data_toWrite" rows="${f}" cols="95" ></textarea>
				</div>
			</div>`}else i+=`<hr/>
				<div class="selected_info_area" id="selected_mem_data_info"></div>
				</div>`;i+=`</div>
		<script nonce="${t}" src="${s}"><\/script>
		</body>
		</html>`}return i}getbyteStr(e){let t=this.mem_data.at(e),i="  ";return t!==void 0&&(i=t.toString(16).toUpperCase(),i=ct(i,2)),i}get2bytesStr(e){let t="";for(let i=1;i>=0;--i){let s=this.mem_data.at(e+i),n="";s!==void 0&&(n=s.toString(16).toUpperCase(),n=ct(n,2)),t+=n}return t}get4bytesStr(e){let t="";for(let i=3;i>=0;--i){let s=this.mem_data.at(e+i),n="";s!==void 0&&(n=s.toString(16).toUpperCase(),n=ct(n,2)),t+=n}return t}getByteDataTitle(e,t){let i=this.mem_data.at(e),s=i!==void 0?i.toString():"",n=this.get2bytesStr(e),a=parseInt(n,16),r=this.get4bytesStr(e),l=parseInt(r,16),c=`Addr	${t}
U08:	D: ${s}
U16:	H: 0x${n}	D: ${a}`;if(a>32767){let d=a-65536;c+=`
I16:	 ${d}`}if(c+=`
U32:	H: 0x${r}	D: ${l}`,l>2147483647){let d=l-4294967296;c+=`
I32:	 ${d}`}return c}};q(zt,"viewType","mipsstudio.debugMemoryView");function ct(o,e){let t=e-o.length;if(t>0)for(let i=0;i<t;++i)o="0"+o;return o}var Nt=T(require("vscode"));var is=class{name;description;addrOffset;size;access;resetValue;fields;bViewDetailStatus;regValue;value_InEdit;bRegValueChanged;constructor(){this.name="",this.description="",this.addrOffset=0,this.size=0,this.access="",this.resetValue="",this.fields=[],this.bViewDetailStatus=!1,this.regValue=.1,this.value_InEdit=0,this.bRegValueChanged=!1}from(e){this.name=e.name;let t=parseInt(e.addressOffset,16);this.addrOffset=isNaN(t)?0:t,this.description=e.description;let i=e.size;this.size=isNaN(i)?0:i,this.access=e.access,this.resetValue=e.resetValue,this.fields=e.fields}};function ka(o){let e=0;switch(o){case 1:e=1;break;case 2:e=3;break;case 3:e=7;break;case 4:e=15;break;case 5:e=31;break;case 6:e=63;break;case 7:e=127;break;case 8:e=255;break;case 9:e=511;break;case 10:e=1023;break;case 11:e=2047;break;case 12:e=4095;break;case 13:e=8191;break;case 14:e=16383;break;case 15:e=32767;break;case 16:e=65535;break;case 17:e=131071;break;case 18:e=262143;break;case 19:e=524287;break;case 20:e=1048575;break;case 21:e=2097151;break;case 22:e=4194303;break;case 23:e=8388607;break;case 24:e=16777215;break;case 25:e=33554431;break;case 26:e=67108863;break;case 27:e=134217727;break;case 28:e=268435455;break;case 29:e=536870911;break;case 30:e=1073741823;break;case 31:e=2147483647;break;case 32:e=4294967295;break}return e}var dn=class{name;nBaseAddr;nSize;mem_data;getSize(){return this.nSize}registers;memUnReadableRanges;bMemoryContinueReadable;bViewDetailStatus;bAllRegSwitchClosed;constructor(e,t){this.name=e,this.nBaseAddr=0,this.nSize=t,this.mem_data=new Uint8Array(t),this.registers=[],this.memUnReadableRanges=[],this.bMemoryContinueReadable=!0,this.bViewDetailStatus=!0,this.bAllRegSwitchClosed=!0}},Zt=class{constructor(e){this._extensionUri=e;this._b_InDebugMOde=!1,this._st_dev_perip_items=[],this._selected_perip_names=[],this._current_peripTab_index=-1,this._peripTabUpdatedAfterNotify=[],this._RegModifed=!1,this._show_AllPerip_switch=!1}_view;_st_dev;_b_InDebugMOde;_peripTabUpdatedAfterNotify;_st_dev_perip_items;_selected_perip_names;_current_peripTab_index;_RegModifed;_show_AllPerip_switch;setInDebugMode(e){this._b_InDebugMOde&&!e?(this._b_InDebugMOde=e,this._peripTabUpdatedAfterNotify=[],this.refreshPeripItemsFromCached()):this._b_InDebugMOde=e}getInDebugMode(){return this._b_InDebugMOde}resolveWebviewView(e){this._view=e,e.webview.options={enableScripts:!0,localResourceRoots:[this._extensionUri]},this.refreshDevPeripsInfo(!1),e.webview.html=this._getHtmlForWebview(e.webview),e.webview.onDidReceiveMessage(t=>{switch(t.type){case"peripItemToggled":t.elem_id&&t.elem_open!==void 0&&this.handlePeripItemToggled(t.elem_id,t.elem_open);break;case"regItemToggled":t.elem_id&&t.elem_open!==void 0&&this.handleRegItemToggled(t.elem_id,t.elem_open);break;case"inputElemChanged":t.elem_id&&t.elem_value!==void 0&&this.handleInputElemChanged(t.elem_id,t.elem_value);break;case"SelectElemChanged":t.elem_id&&t.elem_value!==void 0&&this.handleInputElemChanged(t.elem_id,t.elem_value);break;case"SelectedPerip":t.elem_id==="Perip-select"&&t.elem_value&&this.handleSelectedPeripAdd(t.elem_value);break;case"regModifyApply":t.elem_id&&this.handleRegModifyApplyClicked(t.elem_id);break;case"tabSelected":t.elem_id&&this.handleTabSelectChange(t.elem_id);break;case"tabClosed":t.elem_id&&this.handleTabClosed(t.elem_id);break}})}handleTabClosed(e){let t=-1,i=!1;for(let s of this._selected_perip_names)if(++t,"tab_"+s===e){i=!0;break}i&&(this._selected_perip_names.splice(t,1),this._peripTabUpdatedAfterNotify.splice(t,1),t===this._current_peripTab_index&&(this._current_peripTab_index-=1,this._current_peripTab_index===-1&&this._selected_perip_names.length&&(this._current_peripTab_index=0),this.refreshPeripItemsFromCached()),this.updateSwitchViewOnPeripClosed())}refreshPeripItemsFromCached(){if(this._current_peripTab_index!==-1){let e=this._selected_perip_names[this._current_peripTab_index];for(let t of this._st_dev_perip_items)if(t.name===e){let i=`<div class="peripItemContent" id ="${t.name}">`;i+=this.getPeripItemHtmlStr(t,!1),i+="</div>",this._view?.webview.postMessage({type:"peripDetails_value",strhtml:i,perip_name:e}),this.getInDebugMode()&&(this._peripTabUpdatedAfterNotify[this._current_peripTab_index]||(this.readPerip(t),this._peripTabUpdatedAfterNotify[this._current_peripTab_index]=!0));break}}else if(this._show_AllPerip_switch){this._view?.webview.postMessage({type:"peripDetails_value",strhtml:"<h2>Please waiting for a moment.</h2>"});let e=this.updatePeripsHtmlStr(!0);this._view?.webview.postMessage({type:"peripDetails_value",strhtml:e})}else this._view?.webview.postMessage({type:"peripDetails_value",strhtml:""})}handleTabSelectChange(e){let t=0,i=!1;if(e==="AllPerips")t=-1,i=!0;else for(let s of this._selected_perip_names){if("tab_"+s===e){i=!0;break}++t}i&&(this._current_peripTab_index=t,this.refreshPeripItemsFromCached())}refreshDevPeripsInfo(e=!0){if(this._st_dev_perip_items=[],this._st_dev=I.getInstance().getCurrProjectDevPerip(),this._st_dev?.peripherals){let t=0;for(let i of this._st_dev.peripherals){let s=parseInt(i.addressOffset,16),n=isNaN(s)?0:s,r=parseInt(i.baseAddress,16)+n,l=4,c=[];i.reOrder();let d=new Array;for(let h of i.registers){let p=parseInt(h.addressOffset,16),b=h.size/8,v=p+b;if(h.dim){let m=h.name.indexOf("[%s]");m!==-1&&(h.name=h.name.slice(0,m));let _=h.dimIncrement;h.dimIncrement<b&&(_=b);for(let C=0;C<h.dim;++C){let P=new is;P.from(h),P.name=h.name+"["+C+"]",P.addrOffset=p+_*C,c.push(P),ja(P,b,d)}v=p+_*h.dim}else{let m=new is;m.from(h),c.push(m),ja(m,b,d)}l<v&&(l=v)}let u=new dn(i.name,l);u.bMemoryContinueReadable=i.memoryContinueReadable,u.memUnReadableRanges=Array.from(i.memUnReadableRanges),u.memUnReadableRanges.sort((h,p)=>h.start-p.start),u.nBaseAddr=r,u.registers=c,++t,t>3&&(u.bViewDetailStatus=!1),this._st_dev_perip_items.push(u)}}e&&this.update()}modifyRegValue(e,t){e=e>>>0;let i=Nt.debug.activeDebugSession;if(i!==void 0){let s={expression:"*((unsigned int*)0x"+e.toString(16)+" )",value:t,frameId:1e3};try{i.customRequest("setExpression",s).then(n=>{this._RegModifed=!0})}catch(n){console.log(n);let r={expression:"set *0x"+e.toString(16)+" = "+t,context:"repl",frameId:1e3};i.customRequest("evaluate",r).then(l=>{this._RegModifed=!0})}}}handleRegModifyApplyClicked(e){for(let t of this._st_dev_perip_items){let i=!1;for(let s of t.registers)if(`btnReg${t.name+"_"+s.name}_ModifyApply`===e){i=!0,s.value_InEdit!=s.regValue&&(this.modifyRegValue(s.addrOffset+t.nBaseAddr,"0x"+s.value_InEdit.toString(16)),setTimeout(()=>{this.checkRegModified()},1e3));break}if(i)break}}handleSelectedPeripAdd(e){let t=!1;for(let i of this._selected_perip_names)if(i===e){t=!0;break}if(!t){this._selected_perip_names.push(e),this._current_peripTab_index=this._selected_perip_names.length-1,this._peripTabUpdatedAfterNotify.push(!0),this.updateSwitchViewOnAddPerip();for(let i of this._st_dev_perip_items)if(i.name===e){let s=`<div class="peripItemContent" id ="${e}">`;s+=this.getPeripItemHtmlStr(i,!1),s+="</div>",this._view?.webview.postMessage({type:"peripDetails_value",strhtml:s,perip_name:e}),this.getInDebugMode()&&this.readPerip(i);break}}}updateSwitchViewOnPeripClosed(){let e='<div class="tab-switch" role="toolbar" aria-label="Perip Switcher" >';if(this._selected_perip_names.length===0){this._show_AllPerip_switch&&(e+=`<div class="tab-item" role="presentation">
					<div class="tab-label checked" role="button" tabindex="0" id="AllPerips">All Perips</div>
				</div>`),e+=`</div><div class="tab-add">
					<select class="tab-add-select" id="Perip-select">
						<option value="">-Add Perip to Watch-</option>`;for(let t of this._st_dev_perip_items)e+=`<option value="${t.name}">${t.name}</option>`;e+="</select></div>"}else{if(this._show_AllPerip_switch){let s=this._current_peripTab_index===-1?"checked":"";e+=`<div class="tab-item ${s}" role="presentation">
					<div class="tab-label" role="button" tabindex="0" id="AllPerips">All Perips</div>
				</div>`}let t=0;for(let s of this._selected_perip_names){let n=t==this._current_peripTab_index?"checked":"";e+=`<div class="tab-item ${n}" role="presentation">
			<div class="tab-label" role="button" tabindex="0" id="tab_${s}">${s}</div>
				<div class="tab-label-close" role="button" tabindex="0"></div>
			</div>`,++t}e+="</div>";let i=this._st_dev_perip_items.filter(s=>!this._selected_perip_names.includes(s.name));if(i.length){e+=`<div class="tab-add">
				<select class="tab-add-select" id="Perip-select">
					<option value="">-Add Perip to Watch-</option>`;for(let s of i)e+=`<option value="${s.name}">${s.name}</option>`;e+="</select></div>"}}this._view?.webview.postMessage({type:"PeripSwitch_value",strhtml:e})}updateSwitchViewOnAddPerip(){let e='<div class="tab-switch" role="toolbar" aria-label="Perip Switcher" >';if(this._show_AllPerip_switch){let s=this._current_peripTab_index===-1?"checked":"";e+=`<div class="tab-item ${s}" role="presentation">
					<div class="tab-label" role="button" tabindex="0" id="AllPerips">All Perips</div>
				</div>`}let t=0;for(let s of this._selected_perip_names){let n=t==this._current_peripTab_index?"checked":"";e+=`<div class="tab-item ${n}" role="presentation">
			<div class="tab-label" role="button" tabindex="0" id="tab_${s}">${s}</div>
				<div class="tab-label-close" role="button" tabindex="0"></div>
			</div>`,++t}e+="</div>";let i=this._st_dev_perip_items.filter(s=>!this._selected_perip_names.includes(s.name));if(i.length){e+=`<div class="tab-add">
			<select class="tab-add-select" id="Perip-select">
				<option value="">-Add Perip to Watch-</option>`;for(let s of i)e+=`<option value="${s.name}">${s.name}</option>`;e+="</select></div>"}this._view?.webview.postMessage({type:"PeripSwitch_value",strhtml:e})}handleInputElemChanged(e,t){let i=parseInt(t,16);for(let s of this._st_dev_perip_items){let n=!1;for(let a of s.registers){let r=s.name+"_"+a.name;for(let l of a.fields)if(`edit_${r}_${l.name}`===e){let d=l.bitOffset,u=ka(l.bitWidth);i&=u,i=i>>>0;let h=~(u<<d)>>>0;a.value_InEdit&=h,a.value_InEdit|=i<<d,a.value_InEdit=a.value_InEdit>>>0,n=!0}}if(n)break}}handlePeripItemToggled(e,t){let i=e.replace("detail_","");for(let s of this._st_dev_perip_items)if(s.name===i){t!==s.bViewDetailStatus&&(s.bViewDetailStatus=t,t&&this.readPerip(s));break}}handleRegItemToggled(e,t){for(let i of this._st_dev_perip_items){let s=!1;for(let n of i.registers)if(i.name+"_"+n.name===e){n.bViewDetailStatus=t,s=!0;break}if(s)break}}update(){this._view&&(this._view.webview.html=this._getHtmlForWebview(this._view.webview))}getRegisterValue(e,t,i){let s="0x";for(let n=i-1;n>=0;--n){let a=e.at(t+n),r="";a!==void 0&&(r=a.toString(16).toUpperCase(),r=ct(r,2)),s+=r}return s}refreshPeripItem_imp(e,t){if(this._view){let i=this.getPeripItemHtmlStr(e,t),s=e.name;this._view?.webview.postMessage({type:"perip_item_value",perip_name:s,strhtml:i})}}collapseAllPeripItems(){if(this._show_AllPerip_switch&&this._current_peripTab_index===-1){if(this._st_dev_perip_items)for(let e of this._st_dev_perip_items){e.bViewDetailStatus=!1;let t=e.name;this._view?.webview.postMessage({type:"PeripItemToggled",perip_name:t})}}else{let e=this._selected_perip_names[this._current_peripTab_index];for(let t of this._st_dev_perip_items)if(t.name===e){for(let i of t.registers)i.bViewDetailStatus=!1;this.refreshPeripItem_imp(t,!1);break}}}refreshPeripItemsOnDebugNotify(){this.refreshPeripItemsFromMemory();let e=this._peripTabUpdatedAfterNotify.length;for(let t=0;t<e;++t)this._peripTabUpdatedAfterNotify[t]=!1;this._current_peripTab_index!==-1&&(this._peripTabUpdatedAfterNotify[this._current_peripTab_index]=!0)}checkRegModified(){this._RegModifed&&this.refreshPeripItemsFromMemory()}refreshPeripItemsFromMemory(){if(this._st_dev_perip_items)if(this._current_peripTab_index===-1)for(let e of this._st_dev_perip_items)e.bViewDetailStatus&&this.readPerip(e);else{let e=this._selected_perip_names[this._current_peripTab_index];for(let t of this._st_dev_perip_items)if(t.name===e){this.readPerip(t);break}}this._RegModifed=!1}_getHtmlForWebview(e){let t=ce(),i="",s=e.asWebviewUri(Nt.Uri.joinPath(this._extensionUri,"media","dbgPeripView.js")).toString(),n=e.asWebviewUri(Nt.Uri.joinPath(this._extensionUri,"media","dbgPeripView.css")).toString(),a=e.asWebviewUri(Nt.Uri.joinPath(this._extensionUri,"media","reg.png"));if(i=`<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta http-equiv="Content-Security-Policy" content="default-src 'none'; img-src ${e.cspSource}; style-src ${e.cspSource}; script-src 'nonce-${t}';">
			<title>Mips Studio</title>
			<link href="${n}" rel="stylesheet" />
		</head>
		<body>
		<div class="tab-container" id="PeripSwitchContainer">
			<div class="tab-switch" role="toolbar" aria-label="Perip Switcher" >`,this._show_AllPerip_switch){let c=this._current_peripTab_index===-1?"checked":"";i+=`<div class="tab-item ${c}" role="presentation">
					<div class="tab-label" role="button" tabindex="0" id="AllPerips">All Perips</div>
				</div>`}let r=0;for(let c of this._selected_perip_names){let d=r==this._current_peripTab_index?"checked":"";i+=`<div class="tab-item ${d}" role="presentation">
			<div class="tab-label" role="button" tabindex="0" id="tab_${c}">${c}</div>
				<div class="tab-label-close" role="button" tabindex="0"></div>
			</div>`,++r}i+="</div>";let l=this._st_dev_perip_items.filter(c=>!this._selected_perip_names.includes(c.name));if(l.length){i+=`<div class="tab-add">
			<select class="tab-add-select" id="Perip-select">
				<option value="">-Add Perip to Watch-</option>`;for(let c of l)i+=`<option value="${c.name}">${c.name}</option>`;i+="</select></div>"}if(i+='</div><div class="peripDetails" id="peripDetails">',this._current_peripTab_index>=0&&this._current_peripTab_index<this._selected_perip_names.length){let c=this._selected_perip_names[this._current_peripTab_index];for(let d of this._st_dev_perip_items)if(d.name===c){i+=`<div class="peripItemContent" id ="${d.name}">`,i+=this.getPeripItemHtmlStr(d,!1),i+="</div>";break}}else this._st_dev_perip_items.length?this._show_AllPerip_switch&&(i+=this.updatePeripsHtmlStr(!1)):i+=`<h2>Below is a demo because there is not Perip config, You can Config it in Project Settings  --> Target Processor.</h2>
				<details class="peripDtails" open>
					<summary>UART0</summary>
					<hr />
					<details class="regsContainer" id="regDetail_IID" open>
						<summary><img src="${a}" height=16px></img><span class="regNameSpan"> IIR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="regValueSpan">0xD7999999</span></summary>
						<div class="regDataContainer">
							<div class="reginfoRowHeader">
								<div class="regInfo">Address</div>
								<div class="regInfo">Access:</div>
								<div class="regInfo">Reset</div>
								<div class="regInfoW">Description:</div>
							</div>
							<div class="reginfoRow">
								<div class="regInfo">0x82D04008</div>
								<div class="regInfo">R</div>
								<div class="regInfo">0x0000 0001</div>
								<div class="regInfoW">Interrupt Identification Register systemDomain Interrupt Identification Register systemDomain</div>
							</div>
							<div class="regValueRowHeader">
								<div class="regFieldContainer">
									<div class="regByte">
										<div class="regBitIndex">31</div>
										<div class="regBitIndexLast">24</div>
									</div>
									<div class="regByte">
										<div class="regBitIndex">23</div>
										<div class="regBitIndexLast">16</div>
									</div>
									<div class="regByte">
										<div class="regBitIndex">15</div>
										<div class="regBitIndexLast">8</div>
									</div>
									<div class="regByte last">
										<div class="regBitIndex">7</div>
										<div class="regBitIndexLast">0</div>
									</div>
								</div>
							</div>
							<div class="regValueRow">
								<div class="regFieldContainer">
									<div class="regByte">
										<div class="regUnusedField" data-key="31">1</div>
										<div class="regUnusedField" data-key="30">0</div>
										<div class="regUnusedField" data-key="29">0</div>
										<div class="regUnusedField" data-key="28">1</div>
										<div class="regUnusedField" data-key="27">1</div>
										<div class="regUnusedField" data-key="26">0</div>
										<div class="regUnusedField" data-key="25">0</div>
										<div class="regUnusedField" data-key="24">1</div>
									</div>
									<div class="regByte">
										<div class="regUnusedField" data-key="23">1</div>
										<div class="regUnusedField" data-key="22">0</div>
										<div class="regUnusedField" data-key="21">0</div>
										<div class="regUnusedField" data-key="20">1</div>
										<div class="regUnusedField" data-key="19">1</div>
										<div class="regUnusedField" data-key="18">0</div>
										<div class="regUnusedField" data-key="17">0</div>
										<div class="regUnusedField" data-key="16">1</div>
									</div>
									<div class="regByte">
										<div class="regUnusedField" data-key="15">1</div>
										<div class="regUnusedField" data-key="14">0</div>
										<div class="regUnusedField" data-key="13">0</div>
										<div class="regUnusedField" data-key="12">1</div>
										<div class="regUnusedField" data-key="11">1</div>
										<div class="regUnusedField" data-key="10">0</div>
										<div class="regUnusedField" data-key="9">0</div>
										<div class="regUnusedField" data-key="8">1</div>
									</div>
									<div class="regByte last">
										<div tabindex="0" class="regBitValue" data-key="7" data-fd="FIFOE">1</div>
										<div tabindex="0" class="regBitValue" data-key="6" data-fd="FIFOE">1</div>
										<div class="regUnusedField" data-key="5">0</div>
										<div class="regUnusedField" data-key="4">1</div>
										<div tabindex="0" class="regBitValue" data-key="3" data-fd="IID">0</div>
										<div tabindex="0" class="regBitValue" data-key="2" data-fd="IID">1</div>
										<div tabindex="0" class="regBitValue" data-key="1" data-fd="IID">1</div>
										<div tabindex="0" class="regBitValue" data-key="0" data-fd="IID">1</div>
									</div>
								</div>
							</div>
							<div class="fdRowHeader">
								<div class="fdBitInfo">Fields</div>
								<div class="fdName">Name</div>
								<div class="fdRW">RW</div>
								<div class="fdValue">Value</div>
							</div>
							<div class="fdRow">
								<div class="fdBitInfo">Bit [7:6]</div>
								<div class="fdName">FIFOE</div>
								<div class="fdRW">RO</div>
								<div class="fdValue">0x3
									<div class="fdModifyValue">
										<select class="edit_FieldValue" id="select_IIR_FIFOE" disabled>
											<option value="0x0">DISABLED</option>
											<option value="0x3" selected>ENABLED</option>
										</select>
									</div>
								</div>
							</div>
							<div class="fdRow">
								<div class="fdBitInfo">Bit [3:0]</div>
								<div class="fdName">IID</div>
								<div class="fdRW">RO</div>
								<div class="fdValue">0x7
									<div class="fdModifyValue">
										<select class="edit_FieldValue" id="select_IIR_IID" disabled>
											<option value="0x0">MDM_STAT</option>
											<option value="0x1">NO_INT</option>
											<option value="0x2">TRH_EMPTY</option>
											<option value="0x4">RCV_DAT</option>
											<option value="0x6">LINE_STAT</option>
											<option value="0x7" selected>BUSY_DET</option>
											<option value="0xC">CHAR_TMO</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</details>
					<details class="regsContainer" id="regDetail_FCR" open>
						<summary><img src="${a}" height=16px></img><span class="regNameSpan"> FCR&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="regValueSpan">0xAD999999</span></summary>
						<div class="regDataContainer">
							<div class="reginfoRowHeader">
								<div class="regInfo">Address</div>
								<div class="regInfo">Access:</div>
								<div class="regInfo">Reset</div>
								<div class="regInfoW">Description:</div>
							</div>
							<div class="reginfoRow">
								<div class="regInfo">0x82D04008</div>
								<div class="regInfo">W</div>
								<div class="regInfo">0x0000 0000</div>
								<div class="regInfoW">FIFO control Register</div>
							</div>
							<div class="regValueRowHeader">
								<div class="regFieldContainer">
									<div class="regByte">
										<div class="regBitIndex">31</div>
										<div class="regBitIndexLast">24</div>
									</div>
									<div class="regByte">
										<div class="regBitIndex">23</div>
										<div class="regBitIndexLast">16</div>
									</div>
									<div class="regByte">
										<div class="regBitIndex">15</div>
										<div class="regBitIndexLast">8</div>
									</div>
									<div class="regByte last">
										<div class="regBitIndex">7</div>
										<div class="regBitIndexLast">0</div>
									</div>
								</div>
							</div>
							<div class="regValueRow">
								<div class="regFieldContainer">
									<div class="regByte">
										<div class="regUnusedField" data-key="31">1</div>
										<div class="regUnusedField" data-key="30">0</div>
										<div class="regUnusedField" data-key="29">0</div>
										<div class="regUnusedField" data-key="28">1</div>
										<div class="regUnusedField" data-key="27">1</div>
										<div class="regUnusedField" data-key="26">0</div>
										<div class="regUnusedField" data-key="25">0</div>
										<div class="regUnusedField" data-key="24">1</div>
									</div>
									<div class="regByte">
										<div class="regUnusedField" data-key="23">1</div>
										<div class="regUnusedField" data-key="22">0</div>
										<div class="regUnusedField" data-key="21">0</div>
										<div class="regUnusedField" data-key="20">1</div>
										<div class="regUnusedField" data-key="19">1</div>
										<div class="regUnusedField" data-key="18">0</div>
										<div class="regUnusedField" data-key="17">0</div>
										<div class="regUnusedField" data-key="16">1</div>
									</div>
									<div class="regByte">
										<div class="regUnusedField" data-key="15">1</div>
										<div class="regUnusedField" data-key="14">0</div>
										<div class="regUnusedField" data-key="13">0</div>
										<div class="regUnusedField" data-key="12">1</div>
										<div class="regUnusedField" data-key="11">1</div>
										<div class="regUnusedField" data-key="10">0</div>
										<div class="regUnusedField" data-key="9">0</div>
										<div class="regUnusedField" data-key="8">1</div>
									</div>
									<div class="regByte last">
										<div tabindex="0" class="regBitValue" data-key="7" data-fd="RT">1</div>
										<div tabindex="0" class="regBitValue" data-key="6" data-fd="RT">0</div>
										<div tabindex="0" class="regBitValue" data-key="5" data-fd="TET">1</div>
										<div tabindex="0" class="regBitValue" data-key="4" data-fd="TET">0</div>
										<div tabindex="0" class="regBitValue" data-key="3" data-fd="DMAM">1</div>
										<div tabindex="0" class="regBitValue" data-key="2" data-fd="TFR">1</div>
										<div tabindex="0" class="regBitValue" data-key="1" data-fd="RFR">0</div>
										<div tabindex="0" class="regBitValue" data-key="0" data-fd="FIFOE">1</div>
									</div>
								</div>
							</div>
							<div class="fdRowHeader">
								<div class="fdBitInfo">Fields</div>
								<div class="fdName">Name</div>
								<div class="fdRW">RW</div>
								<div class="fdValue">Value</div>
							</div>
							<div class="fdRow">
								<div class="fdBitInfo">Bit [7:6]</div>
								<div class="fdName">RT</div>
								<div class="fdRW">WO</div>
								<div class="fdValue">0x2
									<div class="fdModifyValue">
										<select class="edit_FieldValue" id="select_FCR_RT" >
											<option value="0x0">CHAR</option>
											<option value="0x1">QUART</option>
											<option value="0x2" selected>HALF</option>
											<option value="0x3">FULL_2</option>
										</select>
									</div>
								</div>
							</div>
							<div class="fdRow">
								<div class="fdBitInfo">Bit [5:4]</div>
								<div class="fdName">TET</div>
								<div class="fdRW">WO</div>
								<div class="fdValue">0x2
									<div class="fdModifyValue">
										<select class="edit_FieldValue" id="select_FCR_TET">
											<option value="0x0">EMPTY</option>
											<option value="0x1">CHAR_2</option>
											<option value="0x2" selected>QUART</option>
											<option value="0x3">HALF</option>
										</select>
									</div>
								</div>
							</div>
							<div class="fdRow">
								<div class="fdBitInfo">Bit [3]</div>
								<div class="fdName">DMAM</div>
								<div class="fdRW">WO</div>
								<div class="fdValue">0x1
									<div class="fdModifyValue">
										<select class="edit_FieldValue" id="select_FCR_DMAM">
											<option value="0x0">MODE0</option>
											<option value="0x1" selected>MODE1</option>
										</select>
									</div>
								</div>
							</div>
							<div class="fdRow">
								<div class="fdBitInfo">Bit [2]</div>
								<div class="fdName">TFR</div>
								<div class="fdRW">WO</div>
								<div class="fdValue">0x1
									<div class="fdModifyValue">
										<input type="checkbox" id="chk_FCR_TFR" checked></input>
									</div>
								</div>
							</div>
							<div class="fdRow">
								<div class="fdBitInfo">Bit [1]</div>
								<div class="fdName">RFR</div>
								<div class="fdRW">WO</div>
								<div class="fdValue">0x0
									<div class="fdModifyValue">
										<input type="checkbox" id="chk_FCR_RFR"></input>
									</div>
								</div>
							</div>
							<div class="fdRow">
								<div class="fdBitInfo">Bit [0]</div>
								<div class="fdName">FIFOE</div>
								<div class="fdRW">WO</div>
								<div class="fdValue">0x1
									<div class="fdModifyValue">
										<select class="edit_FieldValue" id="select_FCR_FIFOE">
											<option value="0x0">DISABLED</option>
											<option value="0x1" selected>ENABLED</option>
										</select>
									</div>
								</div>
							</div>
						</div>
					</details>
				</details>`;return i+=`</div><script nonce="${t}" src="${s}"><\/script>
		</body>
		</html>`,i}getPeripItemHtmlStr(e,t){let i=e.bAllRegSwitchClosed?"":"checked",s=`<hr />
				<div class="regDetailSwitch">
				<label class="switch">
					<input class="switch-input" type="checkbox" id="${e.name}_Switch" ${i}/>
					<span class="switch-label" data-on="Expand" data-off="Collapse"></span> 
					<span class="switch-handle"></span> 
				</label>
				</div>`;if(e.registers)for(let n of e.registers){let a=n.name,r=n.size/8,l="";if(t){let v=this.getRegisterValue(e.mem_data,n.addrOffset,r),m=parseInt(v,16);n.regValue!==m?(l=" ValueChanged",n.bRegValueChanged=!0):n.bRegValueChanged=!1,n.value_InEdit=n.regValue=m}else n.bRegValueChanged&&(l=" ValueChanged");let c=n.regValue,d=re(n.addrOffset+e.nBaseAddr),u=n.bViewDetailStatus?"open":"",h=e.name+"_"+n.name,p=n.resetValue;s+=`<details class="regsContainer" id="${h}" ${u}>
						<summary class="regConSum"><div class="svgregIcon"></div><span class="regNameSpan">${a}</span>
						<span class="regValueSpan${l}">${re(c)}</span></summary>
						<div class="regDataContainer">
						<div class="reginfoRowHeader">
							<div class="regInfo">Address</div>
							<div class="regInfo">Access:</div>
							<div class="regInfo">Reset</div>
							<div class="regInfoW">Description:</div>
						</div>
						<div class="reginfoRow">
							<div class="regInfo">${d}</div>
							<div class="regInfo">${n.access}</div>
							<div class="regInfo">${p}</div>
							<div class="regInfoW">${n.description}</div>
						</div>
						<div class="regValueRowHeader">
							<div class="regFieldContainer">`;for(let v=r;v>0;--v){let m=v===1?"regByte last":"regByte",_=v*8-1,C=(v-1)*8;s+=`<div class="${m}">
								<div class="regBitIndex">${_}</div>
								<div class="regBitIndexLast">${C}</div>
							</div>`}s+=`</div>
						</div>
						<div class="regValueRow">
							<div class="regFieldContainer">`;for(let v=r;v>0;--v){let m=v===1?"regByte last":"regByte",_=v*8-1,C=(v-1)*8;s+=`<div class="${m}">`;for(let P=_;P>=C;--P){let D=c&1<<P?"1":"0",N=!1,S="";for(let x of n.fields)if(x.bitOffset+x.bitWidth>P&&x.bitOffset<=P){N=!0,S=`data-fd="${x.name}" tabindex="0"`;break}s+=`<div class="${N?"regBitValue":"regUnusedField"}" data-key="${P}" ${S}>${D}</div>`}s+="</div>"}s+=`</div>
						</div>`;let b=this.getInDebugMode()?n.access.toUpperCase().includes("W"):!1;if(n.fields){s+=`<div class="fdRowHeader">
							<div class="fdBitInfo">Fields</div>
							<div class="fdName">Name</div>
							<div class="fdRW">RW</div>
							<div class="fdValue">Value</div>
						</div>`;for(let v of n.fields){let m=v.bitOffset,_=m+v.bitWidth-1,C=ka(v.bitWidth),P=c;m?P=c>>>m&C:P=c&C,P=P>>>0;let D=!1;l&&v.nFdvalue!=P&&(D=!0),v.nFdvalue=P;let N=re(P,0);s+=`<div class="fdRow">
						<div class="fdBitInfo">Bit[${_}:${m}]</div>
						<div class="fdName">${v.name}</div>
						<div class="fdRW">${v.access}</div>
						<div class="fdValue">`,D?s+=`<div class="fdValueChanged">${N}</div>`:s+=`${N}`,s+='<div class="fdModifyValue">';let S=v.access.toUpperCase(),g=b?S.includes("W"):!1,x=g?"":"disabled",k=`edit_${h}_${v.name}`;if(v.enumeration.enumValues.length){s+=`<select class="edit_FieldValue" id="${k}" ${x}>`;for(let F of v.enumeration.enumValues)parseInt(F.value)===P?s+=`<option value="${F.value}" selected>${F.name}</option>`:s+=`<option value="${F.value}">${F.name}</option>`;s+="</select>"}else if(g)if(v.range){s+=`<select class="edit_FieldValue" id="${k}" ${x}>`;for(let F=v.range.minimum;F<=v.range.maximum;++F)s+=`<option value="${F}">${F}</option>`;s+="</select>"}else if(C===1)s+=`<input type="checkbox" class="edit_FieldValue" id="${k}" ${P===1?"checked":""}>`;else if(C<15){s+=`<select class="edit_FieldValue" id="${k}" ${x}>`;for(let F=0;F<=C;++F)F===P?s+=`<option value="${F}" selected>${F}</option>`:s+=`<option value="${F}">${F}</option>`;s+="</select>"}else s+=`<input class="edit_FieldValue" id="${k}" value="${N}">`;s+=`</div>
							</div>
						</div>`}}b&&(s+=`<div class="regModifyApply"><button name="btnregModifyApply" class="btnregModifyApply" id="btnReg${h}_ModifyApply">Apply Modify</button></div>`),s+="</details>"}return s}updatePeripsHtmlStr(e){let t="";for(let i of this._st_dev_perip_items){let s=i.bViewDetailStatus?"open":"";t+=`<details class="peripItem" id="detail_${i.name}" ${s}>
					<summary>${i.name}</summary>
					<div class="peripItemContent" id ="${i.name}">`,t+=this.getPeripItemHtmlStr(i,e),t+="</div></details>"}return t}async readPerip(e){let t=Nt.debug.activeDebugSession;if(t!==void 0){let i=e.memUnReadableRanges.length;if(!e.bMemoryContinueReadable&&i){let s=e.getSize();if(e.memUnReadableRanges[0].start===e.nBaseAddr){let a=e.memUnReadableRanges[0].end+1,r=a,l=!1;for(let c=1;c<i;++c)if(r=e.memUnReadableRanges[c].start,r>a){let d=r-a,h={memoryReference:"0x"+(e.nBaseAddr+a).toString(16),count:d};if(await t.customRequest("readMemory",h).then(p=>{let f=Buffer.from(p.data,"base64");f.byteLength!==d?l=!0:e.mem_data.set(f,a)}),l)break;a=e.memUnReadableRanges[c].end+1}if(!l){r=s;let c=r-a;if(c){let u={memoryReference:"0x"+(e.nBaseAddr+a).toString(16),count:c};await t.customRequest("readMemory",u).then(h=>{let p=Buffer.from(h.data,"base64");p.byteLength!==c?l=!0:e.mem_data.set(p,a)})}l||this.refreshPeripItem_imp(e,!0)}}else{let a=0,r=a,l=!1;for(let c=0;c<i;++c){r=e.memUnReadableRanges[c].start;let d=r-a,h={memoryReference:"0x"+(e.nBaseAddr+a).toString(16),count:d};if(await t.customRequest("readMemory",h).then(p=>{let f=Buffer.from(p.data,"base64");f.byteLength!==d?l=!0:e.mem_data.set(f,a)}),l)break;a=e.memUnReadableRanges[c].end+1}if(!l){r=s;let c=r-a;if(c){let u={memoryReference:"0x"+(e.nBaseAddr+a).toString(16),count:c};await t.customRequest("readMemory",u).then(h=>{let p=Buffer.from(h.data,"base64");p.byteLength!==c?l=!0:e.mem_data.set(p,a)})}l||this.refreshPeripItem_imp(e,!0)}}}else{let s={memoryReference:"0x"+e.nBaseAddr.toString(16),count:e.getSize()};t.customRequest("readMemory",s).then(n=>{e.mem_data=Buffer.from(n.data,"base64"),this.refreshPeripItem_imp(e,!0)})}}}};q(Zt,"viewType","mipsstudio.debugPeripheralView");function ja(o,e,t){let i=o.addrOffset,s=o.addrOffset+e,n=!1;for(let a of t)if(a.maximum>=i){a.minimum>i&&(a.minimum=i),a.maximum<s&&(a.maximum=s),n=!0;break}if(!n){let a=new Zi;a.minimum=i,a.maximum=s,t.push(a)}}function ql(o){j.getInstance().init(o),I.getInstance().initMipsSolution();let e=I.getInstance().solutionProvider_=new Wt(o.extensionUri);o.subscriptions.push(R.window.registerWebviewViewProvider(Wt.viewType,e)),R.commands.registerCommand("mipsstudio.project.build",()=>{I.getInstance().isHaveInit()&&I.getCurrentProjManager()?.projectBuild()}),R.commands.registerCommand("mipsstudio.build.clear",()=>{I.getInstance().isHaveInit()&&I.getCurrentProjManager()?.buildClear()}),R.commands.registerCommand("mipsstudio.build.exportMakefile",()=>{I.getInstance().isHaveInit()&&I.getCurrentProjManager()?.exportMakefile()}),R.commands.registerCommand("mipsstudio.project.openPath",a=>{a.resource&&R.commands.executeCommand("revealFileInOS",a.resource)}),R.commands.registerCommand("mipsstudio.build.compile",a=>{I.getInstance().isHaveInit()&&a.resource?.fsPath&&I.getCurrentProjManager()?.compileSrcFile(a.resource.fsPath)}),R.commands.registerCommand("mipsstudio.project.addFiles",()=>{I.getInstance().isHaveInit()&&I.getCurrentProjManager()?.addExistFilesToProject()}),R.commands.registerCommand("mipsstudio.project.addFolderRecursionAllFiles",()=>{I.getInstance().isHaveInit()&&I.getCurrentProjManager()?.addFolderRecursionAllFilesToProject()}),R.commands.registerCommand("mipsstudio.project.newFile",async a=>{if(I.getInstance().isHaveInit()&&a.isDirectory&&a.resource?.fsPath){let r=await R.window.showInputBox({ignoreFocusOut:!0,placeHolder:"input the filename",title:"Project new file",value:"demo.c"});r&&r.length&&I.getCurrentProjManager()?.addNewFileToProject(r,a.resource.fsPath)}}),R.commands.registerCommand("mipsstudio.project.newFolder",async a=>{if(I.getInstance().isHaveInit()&&a.isDirectory&&a.resource?.fsPath){let r=await R.window.showInputBox({ignoreFocusOut:!0,placeHolder:"input the folder name",title:"Project new Folder",value:"child"});r&&r.length&&I.getCurrentProjManager()?.addNewFolderToProject(r,a.resource.fsPath)}}),R.commands.registerCommand("mipsstudio.project.fileRename",async a=>{if(I.getInstance().isHaveInit()&&!a.isDirectory&&a.resource?.fsPath){let r=a.resource.fsPath,l=un.default.basename(r),c=await R.window.showInputBox({ignoreFocusOut:!0,placeHolder:"input the new file name",title:"file rename",value:l});c&&c.length&&I.getCurrentProjManager()?.renameFileinProject(r,c)}}),R.commands.registerCommand("mipsstudio.project.folderRename",async a=>{if(I.getInstance().isHaveInit()&&a.isDirectory&&a.resource?.fsPath){let r=a.resource.fsPath,l=un.default.basename(r),c=await R.window.showInputBox({ignoreFocusOut:!0,placeHolder:"input the new folder name",title:"folder rename",value:l});c&&c.length&&I.getCurrentProjManager()?.renameFolderinProject(r,c)}}),R.commands.registerCommand("mipsstudio.project.fileDelete",async a=>{if(I.getInstance().isHaveInit()&&!a.isDirectory&&a.resource){let r=a.resource;R.window.showWarningMessage("\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\uFF0C\u662F\u5426\u786E\u8BA4?",{modal:!0},"Yes","No").then(l=>{l==="Yes"&&(I.getInstance().isHaveInit()&&a.resource?.fsPath&&I.getCurrentProjManager()?.excludeFileFromProject(a.resource?.fsPath),R.workspace.fs.delete(r))})}}),R.commands.registerCommand("mipsstudio.project.folderDelete",async a=>{if(I.getInstance().isHaveInit()&&a.isDirectory&&a.resource){let r=a.resource;R.window.showWarningMessage("\u5220\u9664\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\uFF0C\u662F\u5426\u786E\u8BA4?",{modal:!0},"Yes","No").then(l=>{l==="Yes"&&(a.resource?.fsPath&&I.getCurrentProjManager()?.excludeDirFromProject(a.resource?.fsPath),R.workspace.fs.delete(r,{recursive:!0}))})}}),R.commands.registerCommand("mipsstudio.project.settings",()=>{Ae.getInstance().show(o.extensionUri)}),R.commands.registerCommand("mipsstudio.output.debug",()=>{I.getInstance().isHaveInit()&&I.getCurrentProjManager()?.debugProject()}),R.commands.registerCommand("mipsstudio.output.flashdownload",()=>{I.getInstance().isHaveInit()}),R.commands.registerCommand("mipsstudio.project.excludedir",a=>{I.getInstance().isHaveInit()&&a.resource?.fsPath&&I.getCurrentProjManager()?.excludeDirFromProject(a.resource?.fsPath)}),R.commands.registerCommand("mipsstudio.project.excludefile",a=>{I.getInstance().isHaveInit()&&(a.resource?.fsPath?I.getCurrentProjManager()?.excludeFileFromProject(a.resource?.fsPath):a.fsPath&&I.getCurrentProjManager()?.excludeFileFromProject(a.fsPath))}),R.commands.registerCommand("mipsstudio.project.searchinProject",()=>{I.getInstance().isHaveInit()&&I.getCurrentProjManager()?.searchInProject()});let t=a=>{R.commands.executeCommand("setContext","mipsstudio.project:isShowProjectFileOnly",a)};R.commands.registerCommand("mipsstudio.project.showOnlyProjectFiles",()=>{t(!0),I.getInstance().updateProjetViewOnShowOnlyFilesInProjectChanged(!0)}),R.commands.registerCommand("mipsstudio.project.showAllIncDirHeaderFiles",()=>{t(!1),I.getInstance().updateProjetViewOnShowOnlyFilesInProjectChanged(!1)}),R.commands.registerCommand("mipsstudio.project.includefile",a=>{I.getInstance().isHaveInit()&&I.getCurrentProjManager()?.addExistFileToProject(a.fsPath)}),R.commands.registerCommand("mipsstudio.startPage.show",()=>{wt.getInstance().show(o.extensionUri)}),R.commands.registerCommand("mipsstudio.newProject",()=>{We.getInstance().show(o.extensionUri)}),R.commands.registerCommand("mipsstudio.toolChainsSetting.show",()=>{Ht.getInstance().show(o.extensionUri)}),R.commands.registerCommand("mipsstudio.sdkPackage.manager",()=>{Gt.getInstance().show(o.extensionUri)}),R.commands.registerCommand("mipsstudio.studio.components",()=>{Bt.getInstance().show(o.extensionUri)}),R.commands.registerCommand("mipsstudio.sdkPackage.Edit",()=>{qt.getInstance().show(o.extensionUri)}),R.commands.registerCommand("mipsstudio.debug.PeripRefresh",()=>{I.getInstance().dbgPeripViewProvider?.refreshPeripItemsFromMemory()}),R.commands.registerCommand("mipsstudio.debug.PeripCollapse",()=>{I.getInstance().dbgPeripViewProvider?.collapseAllPeripItems()});let i=new zt(o.extensionUri);o.subscriptions.push(R.window.registerWebviewViewProvider(zt.viewType,i,{webviewOptions:{retainContextWhenHidden:!0}})),I.getInstance().dbgMemViewProvider=i;let s=new Zt(o.extensionUri);o.subscriptions.push(R.window.registerWebviewViewProvider(Zt.viewType,s,{webviewOptions:{retainContextWhenHidden:!0}})),I.getInstance().dbgPeripViewProvider=s,I.getInstance().isHaveInit()||wt.getInstance().show(o.extensionUri);let n=R.window.onDidChangeActiveTextEditor(a=>{if(a){let r=a.document.fileName;r&&I.getInstance().showFilePathInProjectView(r,!1,"File")}});I.getInstance().RundebugTracker()}0&&(module.exports={activate});
/**
 *  JSON utility class that can handle comments and circular references; and
 *  other extra functionality.
 *  @class
 *  @author Onur Yıldırım <onur@cutepilot.com>
 *  @license MIT
 *  @see {@link https://github.com/onury/jsonc|GitHub Repo}
 *  @see {@link https://github.com/onury/jsonc#related-modules|Related Modules}
 *
 *  @example
 *  const jsonc = require('jsonc');
 *  // or
 *  import { jsonc } from 'jsonc';
 *
 *  const result = jsonc.parse('// comments\n{ "key": "value" }');
 *  console.log(result); // { key: "value" }
 */
