#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var ns=Object.create;var He=Object.defineProperty;var rs=Object.getOwnPropertyDescriptor;var os=Object.getOwnPropertyNames;var is=Object.getPrototypeOf,ss=Object.prototype.hasOwnProperty;var d=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var dt=(e,t)=>{for(var n in t)He(e,n,{get:t[n],enumerable:!0})},Ln=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of os(t))!ss.call(e,o)&&o!==n&&He(e,o,{get:()=>t[o],enumerable:!(r=rs(t,o))||r.enumerable});return e};var Cn=(e,t,n)=>(n=e!=null?ns(is(e)):{},Ln(t||!e||!e.__esModule?He(n,"default",{value:e,enumerable:!0}):n,e)),as=e=>Ln(He({},"__esModule",{value:!0}),e);function mt(){return"claude-plugin"}var ut,pt=d(()=>{"use strict";ut="claude-plugin/1.0.5"});function Ue(e,t){let n=ye(e.replace(/\\/g,"/"));return t==="win32"||t==="darwin"?n.toLowerCase():n}function ye(e){let t=e.length;for(;t>0&&e[t-1]==="/";)t--;return t===e.length?e:e.slice(0,t)}function ee(e){return e.replace(/\\/g,"/")}var $=d(()=>{"use strict"});function ms(e){return us.some(t=>(e[t]??"")!=="")}function te(e){try{return(0,ae.readFileSync)(e,"utf-8")}catch{return null}}function ft(e){try{return(0,ae.realpathSync)(e)}catch{return(0,A.resolve)(e)}}function $e(e){try{return(0,ae.statSync)(e).isDirectory()}catch{return!1}}function vn(e,t){let n=te((0,A.join)(e,"HEAD"))?.trim();return!n||!(je.test(n)||ps.test(n))?!1:$e((0,A.join)(t,"objects"))&&$e((0,A.join)(t,"refs"))}function fs(e,t,n){let r=/^gitdir:\s*(.+)$/m.exec(t);if(!r)return null;let o=r[1].trim();if(!o)return null;let i=(0,A.isAbsolute)(o)?o:(0,A.resolve)(e,o);return $e(i)?n?ft(i):i:null}function Pn(e,t){let n=te((0,A.join)(e,"commondir"))?.trim();if(!n)return e;let r=(0,A.isAbsolute)(n)?n:(0,A.resolve)(e,n);return t?ft(r):r}function le(e,t={}){let{env:n=process.env,realpath:r=!1}=t;if(ms(n))return null;let o=r?ft(e):(0,A.resolve)(e);for(;;){let i=(0,A.join)(o,".git");if($e(i)){let l=Pn(i,r);return vn(i,l)?{worktreeRoot:o,gitDir:i,commonDir:l}:null}let s=te(i);if(s!==null){let l=fs(o,s,r);if(l===null)return null;let c=Pn(l,r);return vn(l,c)?{worktreeRoot:o,gitDir:l,commonDir:c}:null}let a=(0,A.dirname)(o);if(a===o)return null;o=a}}function Mn(e){let t=te((0,A.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;let n=/^ref:\s*refs\/heads\/(.+)$/.exec(t);return n&&n[1].trim()||null}function hs(e){return gs.test(e)&&!e.split("/").includes("..")}function ys(e,t){let n=te((0,A.join)(e,"packed-refs"));if(n===null)return null;for(let r of n.split(`
`)){if(!r||r.startsWith("#")||r.startsWith("^"))continue;let o=r.indexOf(" ");if(!(o<=0)&&r.slice(o+1).trim()===t){let i=r.slice(0,o).trim();return je.test(i)?i:null}}return null}function Fn(e){let t=te((0,A.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;if(je.test(t))return t;let n=/^ref:\s*(.+)$/.exec(t);if(!n)return null;let r=n[1].trim();if(!hs(r))return null;for(let o of e.gitDir===e.commonDir?[e.gitDir]:[e.gitDir,e.commonDir]){let i=te((0,A.join)(o,r))?.trim();if(i&&je.test(i))return i;let s=ys(o,r);if(s)return s}return null}var ae,A,us,je,ps,gs,We=d(()=>{"use strict";ae=require("node:fs"),A=require("node:path");$();us=["GIT_DIR","GIT_WORK_TREE","GIT_COMMON_DIR"];je=/^[0-9a-f]{40}$|^[0-9a-f]{64}$/,ps=/^ref:\s*refs\//;gs=/^refs\/[A-Za-z0-9._\-/]+$/});function Un(){return _s.getStore()?.traceId}var Hn,Wc,_s,$n=d(()=>{"use strict";Hn=require("node:async_hooks"),Wc="0".repeat(32),_s=new Hn.AsyncLocalStorage});function R(e){return e instanceof Error?e.message:String(e)}function gt(e){return e instanceof Error&&e.code==="ENOENT"}function Gn(e){Bn=e}function de(){return Kn}function As(e,t){let n=Rs[t]??bs;return jn[e]>=jn[n]}function Ds(e,t,n,r,o){let i=new Date().toISOString(),s=e.toUpperCase().padEnd(5),a=n,l=0;a=a.replace(/%[sdj]/g,u=>{if(l>=r.length)return u;let f=r[l++];return u==="%d"?String(Number(f)):u==="%j"?JSON.stringify(f):String(f)});let c=o?` [trace=${o}]`:"";return`[${i}] ${s} [${t}]${c} ${a}`}function M(e){let t=e??Bn??process.cwd();return(0,ce.join)(t,Es,Ss)}function _e(e){return String(e).padStart(2,"0")}async function Ls(e,t){let n=new Date,r=`${n.getUTCFullYear()}-${_e(n.getUTCMonth()+1)}-${_e(n.getUTCDate())}_${_e(n.getUTCHours())}-${_e(n.getUTCMinutes())}-${_e(n.getUTCSeconds())}`;try{let o=(0,ce.join)(e,`debug_${r}.log`);for(let i=1;await Cs(o);i++)o=(0,ce.join)(e,`debug_${r}_${i}.log`);await(0,k.rename)(t,o)}catch{return}try{let o=(await(0,k.readdir)(e)).filter(i=>Is.test(i)).sort();for(let i=0;i<o.length-xs;i++)await(0,k.unlink)((0,ce.join)(e,o[i])).catch(()=>{})}catch{}}async function Cs(e){try{return await(0,k.stat)(e),!0}catch{return!1}}function Os(e){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||Kn||(Wn=Wn.then(async()=>{try{let t=M(),n=(0,ce.join)(t,Ts);await(0,k.stat)(t);try{(await(0,k.stat)(n)).size>Ns&&await Ls(t,n)}catch{}await(0,k.appendFile)(n,`${e}
`,"utf-8")}catch{}}))}function p(e){function t(n,r,o){let i=Ds(n,e,r,o,Un());ws&&(n==="info"||n==="debug")||(n==="warn"?console.warn(i):console.error(i)),As(n,e)&&Os(i)}return{debug(n,...r){t("debug",n,r)},info(n,...r){t("info",n,r)},warn(n,...r){t("warn",n,r)},error(n,...r){t("error",n,r)}}}var k,ce,Es,Ss,Ts,q,Bn,Kn,jn,bs,Rs,ws,Wn,Ns,xs,Is,E=d(()=>{"use strict";k=require("node:fs/promises"),ce=require("node:path");$n();Es=".jolli",Ss="jollimemory",Ts="debug.log";q="jollimemory/summaries/v3";Kn=!1;jn={debug:0,info:1,warn:2,error:3},bs="info",Rs={},ws=!0;Wn=Promise.resolve(),Ns=2*1024*1024,xs=10,Is=/^debug_.*\.log$/});function Ge(e,t,n){return(0,qn.promisify)(X.execFile)(e,t,{...Be,...n??{}})}function j(e,t,n){return(0,X.execFileSync)(e,t,{...Be,...n??{}})}var X,qn,Be,ne,W=d(()=>{"use strict";X=require("node:child_process"),qn=require("node:util"),Be={windowsHide:!0};ne=((e,t,n)=>Array.isArray(t)?(0,X.spawn)(e,t,{...Be,...n??{}}):(0,X.spawn)(e,{...Be,...t??{}}))});function Fs(){let e={...process.env,LC_ALL:"C"};for(let t of Ms)delete e[t];return e}function Vn(e){return Hs(e)??e}function Hs(e){let t=ht.get(e);if(t!==void 0)return t;let n=le(e,{realpath:!0})?.worktreeRoot;if(n){let o=ee(n);return ht.set(e,o),o}let r=null;try{let o=j("git",["rev-parse","--show-toplevel"],{cwd:e,encoding:"utf-8",env:Fs(),stdio:["ignore","pipe","pipe"]}).trim();o&&(r=o)}catch{}return ht.set(e,r),r}async function C(e,t){x.debug("git %s%s",t?`[cwd=${t}] `:"",e.join(" "));try{let{stdout:n,stderr:r}=await Ge("git",e,{maxBuffer:vs,env:{...process.env,LC_ALL:"C"},...t!==void 0&&{cwd:t}});return{stdout:n.trimEnd(),stderr:r.trim(),exitCode:0}}catch(n){let r=n,o=typeof r.code=="number"?r.code:r.code==="ENOENT"?127:1,i={stdout:(r.stdout??"").trimEnd(),stderr:(r.stderr??r.message??"").trim(),exitCode:o};return x.debug("git command failed (exit: %d, stderr: %s)",o,i.stderr.substring(0,200)),i}}async function yt(e,t){return(await C(["rev-parse","--verify",`refs/heads/${e}`],t)).exitCode===0}async function _t(e,t){if(await yt(e,t))return;x.info("Creating orphan branch '%s' using plumbing commands",e);let n=JSON.stringify({version:1,entries:[]},null,"	"),r=await Ws(n,t);x.debug("Created blob: %s",r);let o=`100644 blob ${r}	index.json
`,i=await Ks(o,t);x.debug("Created tree: %s",i);let s=await C(["commit-tree",i,"-m","Initialize Jolli Memory summaries"],t);if(s.exitCode!==0)throw new Error(`Failed to create commit: ${s.stderr}`);let a=s.stdout.trim();x.debug("Created commit: %s",a);let l=await C(["update-ref",`refs/heads/${e}`,a],t);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);x.info("Orphan branch '%s' created successfully",e)}function $s(e){let t=e.toLowerCase();return Us.some(n=>t.includes(n))}async function Et(e,t,n){x.debug("Reading file from branch: %s:%s",e,t);let r=await C(["show",`${e}:${t}`],n);return r.exitCode!==0?($s(r.stderr)?x.debug("File not found: %s:%s",e,t):x.warn("Read failed for %s:%s (git exit %d): %s",e,t,r.exitCode,r.stderr||"(no stderr)"),null):r.stdout}async function St(e,t,n){let r=new Map;if(t.length===0)return r;let o=["cat-file","--batch"];return x.debug("git (cat-file --batch stream) %s%s for %d paths",n?`[cwd=${n}] `:"",o.join(" "),t.length),new Promise((i,s)=>{let a=ne("git",o,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),l="",c=Buffer.alloc(0),u=!0,f=0,g=[],b=!1,y=0,m=!1,_=h=>{m||(m=!0,h?s(h):i(r))};a.stderr.on("data",h=>{l+=h.toString()}),a.stdout.on("data",h=>{for(c=Buffer.concat([c,h]);!m;){if(u){let S=c.indexOf(10);if(S<0)return;let I=c.subarray(0,S).toString("utf8");if(c=c.subarray(S+1),y>=t.length){_(new Error(`git cat-file --batch returned extra response: ${I}`));return}let w=t[y];if(y++,I.endsWith(" missing")){r.set(w,null);continue}let K=I.substring(I.lastIndexOf(" ")+1),ct=Number.parseInt(K,10);if(!Number.isFinite(ct)||ct<0){_(new Error(`Unexpected cat-file --batch header for ${w}: ${I}`));return}f=ct,g=[],u=!1,b=!0}if(f>0){if(c.length===0)return;let S=Math.min(f,c.length);if(g.push(c.subarray(0,S)),c=c.subarray(S),f-=S,f>0)return}if(b){if(c.length<1)return;c=c.subarray(1),b=!1;let S=t[y-1];r.set(S,Buffer.concat(g).toString("utf8")),g=[],u=!0}}}),a.on("close",h=>{if(h!==0){_(new Error(`git cat-file --batch failed (exit ${h}): ${l.trim()}`));return}if(y<t.length){_(new Error(`git cat-file --batch returned ${y} of ${t.length} expected responses; stderr=${l.trim()}`));return}_(null)}),a.on("error",h=>{_(h)}),a.stdin.on("error",h=>{_(h)});for(let h of t)a.stdin.write(`${e}:${h}
`);a.stdin.end()})}async function zn(e,t,n,r){await _t(e,r);let o=await C(["rev-parse",`refs/heads/${e}`],r);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let i=o.stdout.trim();await Bs(e,i,n,t,r);let s=t.filter(l=>!l.delete).length,a=t.filter(l=>l.delete).length;x.info("Updated branch '%s': %d written, %d deleted (via fast-import)",e,s,a)}async function Tt(e,t,n){x.debug("Listing files in branch %s under prefix '%s'",e,t);let r=await C(["ls-tree","-z","-r","--name-only",e,t],n);if(r.exitCode!==0)return x.debug("Failed to list files (branch may not exist): %s",r.stderr),[];let o=r.stdout.split(Ps).filter(i=>i.length>0);return x.debug("Found %d files",o.length),o}async function js(e){let t=await C(["rev-parse","--git-common-dir"],e);if(t.exitCode!==0)throw new Error(`Failed to get git common dir: ${t.stderr}`);let n=t.stdout.trim();return(0,Ee.resolve)(e,n)}async function Qn(e){let t=await js(e);return(0,Ee.dirname)(t)}async function Zn(e){let t=await C(["worktree","list","--porcelain"],e);if(t.exitCode!==0)throw new Error(`Failed to list worktrees: ${t.stderr}`);return t.stdout.split(`
`).filter(r=>r.startsWith("worktree ")).map(r=>r.slice(9).trim())}function er(e,t,n){return x.debug("git (stdin) %s%s",n?`[cwd=${n}] `:"",e.join(" ")),new Promise((r,o)=>{let i=ne("git",e,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),s="",a="";i.stdout.on("data",l=>{s+=l.toString()}),i.stderr.on("data",l=>{a+=l.toString()}),i.on("close",l=>{l!==0?o(new Error(`git ${e[0]} failed (exit ${l}): ${a.trim()}`)):r(s.trim())}),i.on("error",l=>{o(l)}),i.stdin.write(t),i.stdin.end()})}async function Ws(e,t){return er(["hash-object","-w","--stdin"],e,t)}async function Xn(e,t){let n=await C(["var",e],t);if(n.exitCode!==0)throw new Error(`Failed to read ${e}: ${n.stderr}`);return n.stdout.trim()}async function Bs(e,t,n,r,o){let i=await Xn("GIT_AUTHOR_IDENT",o),s=await Xn("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];x.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=r.filter(u=>!u.delete),c=r.filter(u=>u.delete);return new Promise((u,f)=>{let g=ne("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),b="";g.stderr.on("data",h=>{b+=h.toString()}),g.on("close",h=>{h!==0?f(new Error(`git fast-import failed (exit ${h}): ${b.trim()}`)):u()}),g.on("error",h=>{f(h)});let y=g.stdin;y.on("error",h=>{f(h)});let m=[];l.forEach((h,S)=>{let I=S+1,w=Buffer.from(h.content,"utf8");m.push(`blob
mark :${I}
data ${w.length}
`,w,`
`)});let _=Buffer.from(n,"utf8");m.push(`commit refs/heads/${e}
`,`author ${i}
`,`committer ${s}
`,`data ${_.length}
`,_,`
`,`from ${t}
`),l.forEach((h,S)=>{m.push(`M 100644 :${S+1} ${Jn(h.path)}
`)});for(let h of c)m.push(`D ${Jn(h.path)}
`);m.push(`done
`),Gs(y,m).then(()=>{y.end()},h=>{f(h)})})}async function Gs(e,t){for(let n of t)e.write(n)||await(0,Yn.once)(e,"drain")}function Jn(e){return/["\\\n\r]/.test(e)?`"${e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:e}async function Ks(e,t){return er(["mktree"],e,t)}var Yn,Ee,vs,Ps,x,ht,Ms,Us,J=d(()=>{"use strict";Yn=require("node:events"),Ee=require("node:path");E();W();We();$();vs=10*1024*1024,Ps="\0",x=p("GitOps"),ht=new Map,Ms=["GIT_DIR","GIT_WORK_TREE","GIT_INDEX_FILE","GIT_COMMON_DIR","GIT_PREFIX","GIT_OBJECT_DIRECTORY","GIT_NAMESPACE"];Us=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});var bt=d(()=>{"use strict"});async function rr(e,t,n){let r=`${e}.${process.pid}.${(0,nr.randomUUID)()}.tmp`;await(0,re.writeFile)(r,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n});try{await(0,re.rename)(r,e)}catch(o){let i=o.code;if(i==="EPERM"||i==="EACCES")await(0,re.writeFile)(e,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n}),await(0,re.rm)(r,{force:!0});else throw o}}var nr,re,or=d(()=>{"use strict";nr=require("node:crypto"),re=require("node:fs/promises")});function qs(e){return new Promise(t=>setTimeout(t,e))}function sr(e){let t=Number(e);if(!Number.isInteger(t)||t<=0)return!1;if(t===process.pid)return!0;try{return process.kill(t,0),!0}catch(n){return n.code!=="ESRCH"}}async function Rt(e){try{let t=await(0,F.stat)(e),n=Date.now()-t.mtimeMs,r=await ar(e),o=r!==null&&!sr(r);if(!o&&n<ir)return!1;o?Se.warn("Removing orphaned lock %s (PID %s no longer running)",e,r):Se.warn("Removing stale lock file %s (age: %dms)",e,n),await(0,F.rm)(e,{force:!0})}catch(t){if(t.code!=="ENOENT")return Se.error("Failed to check lock file %s: %s",e,t.message),!1}try{return await(0,F.writeFile)(e,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function ar(e){try{let n=(await(0,F.readFile)(e,"utf-8")).trim();return n.length>0?n:null}catch{return null}}async function wt(e,t){let n=await ar(e);if(n!==null&&n!==String(process.pid)){Se.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",t,n,process.pid);return}try{await(0,F.rm)(e,{force:!0})}catch(r){Se.error("Failed to release %s: %s",t,r.message)}}async function At(e,t){if(t.timeoutMs<=0)return Rt(e);let n=Date.now()+t.timeoutMs;for(;;){if(await Rt(e))return!0;if(Date.now()>=n)return!1;await qs(t.pollMs)}}var F,Se,ir,Dt=d(()=>{"use strict";F=require("node:fs/promises");E();Se=p("LockPrimitives"),ir=300*1e3});var lr,nd,Nt=d(()=>{"use strict";lr=require("node:async_hooks"),nd=new lr.AsyncLocalStorage});function Ys(e){return Ge("git",["rev-parse","--git-common-dir"],{cwd:e})}async function Zs(e){let t=e??process.cwd(),n=dr.get(t);if(n!==void 0)return n;let r;try{let{stdout:o}=await Ys(t),i=o.trim(),s=(0,Y.isAbsolute)(i)?i:(0,Y.resolve)(t,i);r=(0,Y.join)(s,"jollimemory")}catch{ur.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",t),r=M(t)}return dr.set(t,r),r}async function ea(e){let t=await Zs(e);return await(0,Ke.mkdir)(t,{recursive:!0}),t}async function ta(e,t,n,r){let o=r.timeoutMs??Qs,i=r.pollMs??mr;await(0,Ke.mkdir)(e,{recursive:!0});let s=(0,Y.join)(e,t),a=await At(s,{timeoutMs:o,pollMs:i});a||ur.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",t,o);try{return await n()}finally{a&&await wt(s,t)}}async function pr(e,t,n={}){return ta(e,Vs,t,n)}async function fr(e,t,n={}){let r=n.timeoutMs??zs,o=n.pollMs??mr,i=await ea(e),s=(0,Y.join)(i,cr);if(!await At(s,{timeoutMs:r,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await wt(s,cr)}}var Ke,Y,ur,cr,Vs,zs,mr,Qs,dr,Te=d(()=>{"use strict";Ke=require("node:fs/promises"),Y=require("node:path");E();W();Dt();Nt();ur=p("Locks");cr="profile.lock",Vs="config.lock",zs=5e3,mr=25,Qs=5e3,dr=new Map});var be=d(()=>{"use strict"});var gr=d(()=>{"use strict"});var hr=d(()=>{"use strict"});function yr(e){return Number.isFinite(e)&&e>=0&&e<=1114111&&!(e>=55296&&e<=57343)}function _r(e){return e.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(t,n)=>{if(n.startsWith("#x")){let o=Number.parseInt(n.slice(2),16);return yr(o)?String.fromCodePoint(o):t}if(n.startsWith("#")){let o=Number.parseInt(n.slice(1),10);return yr(o)?String.fromCodePoint(o):t}let r=na[n];return typeof r=="string"?r:t})}var na,Er=d(()=>{"use strict";na={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var ra,oa,Sr=d(()=>{"use strict";gr();be();hr();Er();ra={decodeHtmlEntities:_r,lowercase:e=>e.toLowerCase()},oa=new Set(Object.keys(ra))});var Tr=d(()=>{"use strict"});var br=d(()=>{"use strict"});var Rr=d(()=>{"use strict"});var It,ia,Lt,Dd,wr=d(()=>{"use strict";be();It=["mcp__Figma__","mcp__figma__"],ia={get_metadata:"Read structure",get_screenshot:"Viewed screenshot",get_variable_defs:"Read variables",get_figjam:"Read FigJam board",get_design_context:"Read design context"},Lt=Object.keys(ia),Dd=new Set(Lt)});var sa,aa,la,Ar=d(()=>{"use strict";wr();sa="^[0-9a-zA-Z]{22,128}$",aa=It.flatMap(e=>Lt.map(t=>`${e}${t}`)),la={id:"figma",label:"Figma",icon:"symbol-color",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,titleFallbackPattern:"^Figma file [0-9a-zA-Z]{1,8}$",match:{claude:{prefixes:[...It],exact:aa}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileKey"}],require:sa},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://www\\.figma\\.com/"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"figma-files",itemTag:"file",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Dr=d(()=>{"use strict"});var Nr=d(()=>{"use strict"});var xr=d(()=>{"use strict"});var Ir=d(()=>{"use strict"});var Lr=d(()=>{"use strict"});var Cr=d(()=>{"use strict"});var Ct,ca,da,Ot,Fd,Or=d(()=>{"use strict";be();Ct=["mcp__Sentry__","mcp__sentry__"],ca="get_sentry_resource",da="analyze_issue_with_seer",Ot=[ca,da],Fd=new Set(Ot)});var ua,ma,pa,fa,ga,kr=d(()=>{"use strict";Or();ua=Ct.flatMap(e=>Ot.map(t=>`${e}${t}`)),ma="^[A-Za-z0-9.-]{1,253}/[A-Za-z0-9_-]{1,128}$",pa="^Issue [A-Za-z0-9_-]{1,128}$",fa="^Issue [0-9]{1,128}$",ga={id:"sentry",label:"Sentry",icon:"bug",trackOnly:!0,argumentsDerived:!0,titleFallbackPattern:pa,titleFallbackPoorestPattern:fa,match:{claude:{prefixes:[...Ct],exact:ua}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"nativeId"}],require:ma},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://(?:[A-Za-z0-9-]{1,63}\\.)*sentry\\.io/issues/[A-Za-z0-9_-]{1,128}$",requireFlags:"i"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[{key:"issue-id",label:"Issue",icon:"bug",pipe:[{op:"path",path:"shortId"}]},{key:"project",label:"Project",icon:"symbol-property",pipe:[{op:"path",path:"project"}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"sentry-issues",itemTag:"issue",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var vr=d(()=>{"use strict"});var Pr=d(()=>{"use strict"});var Mr=d(()=>{"use strict"});var Fr=d(()=>{"use strict"});var Hr=d(()=>{"use strict";Tr();br();Rr();Ar();Dr();Nr();xr();Ir();Lr();Cr();kr();vr();Pr();Mr();Fr()});var kt=d(()=>{"use strict";be();Sr();Hr()});function vt(e){return Sa(e)}function ya(e){return e.replace(/^\n+/,"").replace(/\n+$/,"")}function _a(e){let t=e.indexOf(Ea);return t===-1?e:e.slice(0,t)}function Sa(e){if(typeof e!="string")return null;let t=e.split(`
`);if(t[0]?.trim()!=="---")return null;let n=-1;for(let S=1;S<t.length;S++)if(t[S].trim()==="---"){n=S;break}if(n===-1)return null;let r=t.slice(1,n),o=ya(_a(t.slice(n+1).join(`
`))),i={},s=[],a=!1;for(let S of r){if(a){let w=/^\s+- (.+)$/.exec(S);if(w){try{let K=JSON.parse(w[1]);Ta(K)&&s.push(K)}catch{}continue}a=!1}if(S.trim()==="fields:"){a=!0;continue}let I=/^([a-zA-Z]+):\s*(.+)$/.exec(S);I&&(i[I[1]]=I[2])}let l=S=>{let I=i[S];if(I!==void 0)try{let w=JSON.parse(I);return typeof w=="string"?w:void 0}catch{return}},c=l("source"),u=l("nativeId");if(c===void 0||u===void 0||!ba(c))return null;let f=c,g=u,b=l("title"),y=l("url"),m=l("referencedAt"),_=l("sourceToolName");return!b||m===void 0||!_?null:{mapKey:`${f}:${g}`,source:f,nativeId:g,title:b,referencedAt:m,toolName:_,...y!==void 0?{url:y}:{},...s.length>0?{fields:s}:{},...o.length>0?{description:o}:{}}}function Ta(e){if(typeof e!="object"||e===null)return!1;let t=e;return!(typeof t.key!="string"||typeof t.label!="string"||typeof t.value!="string"||!/^[\w-]+$/.test(t.key)||t.icon!==void 0&&typeof t.icon!="string")}function ba(e){return e.length>0&&/^[\w-]+$/.test(e)}var Nu,Ea,Re=d(()=>{"use strict";E();kt();Nu=p("ReferenceStore");Ea="<!-- jolli:auto-note -->"});var Pt=d(()=>{"use strict"});var Cu,Ur=d(()=>{"use strict";E();Cu=p("SkillStore")});function we(){return(0,qe.join)((0,$r.homedir)(),".jolli","jollimemory")}async function Ut(e){let t=(0,qe.join)(e,jr);try{let n=await(0,V.readFile)(t,"utf-8"),r=JSON.parse(n);return Ra(r)}catch{return Ht.debug("No config file found in %s, using defaults",e),{}}}function Ra(e){if(e.syncEnabled===void 0)return e;let{syncEnabled:t,...n}=e;return n.autoSyncEnabled===void 0?{...n,autoSyncEnabled:t}:n}function wa(e,t){return!("localAgentTool"in t)||"localAgentPath"in t||(e.localAgentTool??"claude-code")===(t.localAgentTool??"claude-code")||e.localAgentPath===void 0?t:(Ht.info("Clearing localAgentPath (was set for %s, switching to %s)",e.localAgentTool??"claude-code",t.localAgentTool),{...t,localAgentPath:void 0})}async function $t(e){return Aa(e,we())}async function Aa(e,t){return pr(t,async()=>{let{update:n,result:r}=e(await Ut(t));return n!==null&&(await Da(n,t),Ht.info("Config saved to %s",t)),r})}async function Da(e,t){let n=await Ut(t),r={...n,...wa(n,e)};await rr((0,qe.join)(t,jr),JSON.stringify(r,null,"	"))}async function jt(){return Ut(we())}function Mt(e,t){let n={...e},r=!1;for(let o of t)o in n&&(delete n[o],r=!0);return{value:n,changed:r}}function Wr(e){let t=!1,n={};for(let[s,a]of Object.entries(e.plans??{})){if(a.ignored===!0){t=!0;continue}let l=Mt(a,Na);l.changed&&(t=!0),n[s]=l.value}let r;if(e.notes!==void 0){r={};for(let[s,a]of Object.entries(e.notes)){if(a.ignored===!0){t=!0;continue}let l=Mt(a,xa);l.changed&&(t=!0),r[s]=l.value}}let o;if(e.references!==void 0){o={};for(let[s,a]of Object.entries(e.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){t=!0;continue}let c=Mt(a,Ia);c.changed&&(t=!0),o[s]=c.value}}return{registry:{version:1,plans:n,...r!==void 0?{notes:r}:{},...o!==void 0?{references:o}:{},...e.skills!==void 0?{skills:e.skills}:{}},changed:t}}var Ft,V,$r,qe,Ht,jr,Ju,Yu,Vu,zu,Na,xa,Ia,Ae=d(()=>{"use strict";Ft=require("node:crypto"),V=require("node:fs/promises"),$r=require("node:os"),qe=require("node:path");E();bt();or();Te();Re();Pt();Ur();Ht=p("SessionTracker"),jr="config.json",Ju=2880*60*1e3;Yu=2880*60*1e3,Vu=10080*60*1e3,zu=(0,Ft.randomBytes)(4).toString("hex"),Na=["ignored","branch","editCount"],xa=["ignored","branch"],Ia=["ignored","branch","commitHash","contentHashAtCommit"]});async function Kt(e,t,n={}){await(0,z.mkdir)((0,Br.dirname)(e),{recursive:!0});let r=`${e}.${process.pid}.tmp`;await(0,z.writeFile)(r,t,n.mode!==void 0?{encoding:"utf-8",mode:n.mode}:"utf-8");try{await(0,z.rename)(r,e)}catch(o){throw await(0,z.unlink)(r).catch(()=>{}),o}}var z,Br,qt=d(()=>{"use strict";z=require("node:fs/promises"),Br=require("node:path")});function ka(e,t){let n={...e,manuallyDisabled:t};return delete n.userDisabled,n}async function va(e){let t=le(e)?.commonDir;if(t)return t;let n=await C(["rev-parse","--git-common-dir"],e),r=n.exitCode===0?n.stdout.trim():"";return r?(0,H.isAbsolute)(r)?r:(0,H.join)(e,r):null}async function Jr(e){let t=await va(e);if(t===null)return{profilePath:(0,H.join)(M(e),Gr),legacyMarkerPath:null};let n=(0,H.dirname)(t);return{profilePath:(0,H.join)(M(n),Gr),legacyMarkerPath:(0,H.join)(t,La,Ca)}}async function Jt(e){try{let t=await(0,De.readFile)(e,"utf-8"),n=JSON.parse(t);return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}catch{return{}}}async function Pa(e){try{return await(0,De.stat)(e),!0}catch{return!1}}async function Ma(e,t){await Kt(e,`${JSON.stringify(t,null,"	")}
`)}function Xt(e,t,n,r,o,i){if(e==="read"){let s=`${o}|${t}|${n}`;if(Kr.has(s))return n;Kr.add(s)}return Xr.info("manual-disable %s \u2192 %s (by=%s, pid=%d, cwd=%s, profile=%s, raw: userDisabled=%s manuallyDisabled=%s fence=%s)",e,n,t,process.pid,r,o,String(i.userDisabled),String(i.manuallyDisabled),i.cutoverFence?i.cutoverFence.at:"none"),n}function Fa(){return(new Error("manual-disable write").stack??"(no stack)").split(`
`).slice(1,8).join(" | ").replace(/\s+/g," ")}async function Ha(e){let t;try{t=await Zn(e)}catch{t=[e]}for(let n of t)if(await Pa((0,H.join)(M(n),Oa)))return!0;return!1}async function Yr(e){let{profilePath:t}=await Jr(e),n=await Jt(t);if(n.userDisabled!==void 0){let i=await qr(e,t,n.userDisabled===!0);return Xt("read","migrate:userDisabled",i,e,t,n)}if(n.manuallyDisabled!==void 0)return Xt("read","manuallyDisabled",n.manuallyDisabled===!0,e,t,n);let r=await Ha(e),o=await qr(e,t,r);return Xt("read","migrate:legacy-marker",o,e,t,n)}async function qr(e,t,n){let r=await fr(e,async()=>{let o=await Jt(t),i=o.userDisabled??o.manuallyDisabled,s=i===void 0?n:i===!0;return o.userDisabled===void 0&&o.manuallyDisabled!==void 0||(Xr.info("manual-disable MIGRATE \u2192 manuallyDisabled=%s (pid=%d, profile=%s, fence=%s, from=%s) \u2190 %s",s,process.pid,t,o.cutoverFence?o.cutoverFence.at:"none",o.userDisabled!==void 0?"userDisabled":"legacy-marker",Fa()),await Ma(t,ka(o,s))),s}).catch(()=>{});return r?.acquired&&r.value!==void 0?r.value:n}async function Ne(e){let{profilePath:t}=await Jr(e);return(await Jt(t)).cutoverFence??null}var De,H,Xr,Gr,La,Ca,Oa,Kr,ue=d(()=>{"use strict";De=require("node:fs/promises"),H=require("node:path");E();W();qt();We();J();Te();Xr=p("RepoProfile"),Gr="profile.json",La="jollimemory",Ca="backfill-card-dismissed",Oa="disabled-by-user";Kr=new Set});function Vr(e){let t=e,n=t?.message??String(e),r=t?.code;return r==="ENOENT"?null:r==="EACCES"||r==="EPERM"?{kind:"permission",message:n}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(n)?{kind:"corrupt",message:n}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(n)?{kind:"locked",message:n}:/no such table|no such column/i.test(n)?{kind:"schema",message:n}:/SQLITE_CANTOPEN|unable to open/i.test(n)?{kind:"permission",message:n}:{kind:"unknown",message:n}}var zr=d(()=>{"use strict"});function T(e,t,n,r){if(!Qr.test(t))throw new Error(`unsafe table name in migration: ${t}`);if(!Qr.test(n))throw new Error(`unsafe column name in migration: ${n}`);if(!Ua.test(r))throw new Error(`unsafe column declaration in migration: ${r}`);e.prepare("SELECT name FROM pragma_table_info(?)").all(t).some(i=>i.name===n)||e.exec(`ALTER TABLE ${t} ADD COLUMN ${n} ${r};`)}var N,Qr,Ua,D=d(()=>{"use strict";N=(e,t)=>({name:e,sql:t,run:n=>n.exec(t)}),Qr=/^[A-Za-z_][A-Za-z0-9_]*$/,Ua=/^[A-Za-z0-9_ '.-]+$/});var $a,ja,Zr,eo=d(()=>{"use strict";D();$a=`
-- \u2500\u2500 Metadata \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
CREATE TABLE IF NOT EXISTS schema_meta (key TEXT PRIMARY KEY, value TEXT) STRICT;

-- \u2500\u2500 Repo registry \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- \`id\` is the surrogate key every other table references. repo_identity is a
-- normalized remote URL that legitimately CHANGES (a local-only repo gaining a
-- remote, a checkout moving), and it is 60-odd bytes that would otherwise ride
-- in every row and every composite index \u2014 measured, that one substitution took
-- commit_branches from 37.3 MiB to 30.2 MiB before any other change. It stays as
-- a UNIQUE natural key because that is what a worktree resolves to at startup.
--
-- Rows are NEVER deleted; disable is an UPDATE of \`disabled_at\`, so history
-- stays queryable and no single statement can wipe a repo's memories. The
-- trigger that enforces it is in DashboardDb, with the reasoning for why it is
-- the one trigger that survived.
-- Every column here is either read today or is a fact about the repo that only
-- this row records. \`bootstrap_cursor\` was neither \u2014 it was declared and never
-- written by anything \u2014 so it is the one that went.
CREATE TABLE IF NOT EXISTS repos (
  id                INTEGER PRIMARY KEY,
  repo_identity     TEXT NOT NULL UNIQUE,
  repo_name         TEXT NOT NULL,
  worktree_root     TEXT NOT NULL,
  remote_url        TEXT,
  enabled_at        TEXT NOT NULL,
  disabled_at       TEXT,
  last_ingested_at  TEXT,
  bootstrap_state   TEXT NOT NULL DEFAULT 'pending'
) STRICT;

-- \u2500\u2500 Sessions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- event_id embeds repo_identity + source + sessionId, so the PK IS the natural
-- key and every write can be a plain idempotent UPSERT.
-- Instants are stored ONCE, as epoch ms. The ISO twins (\`started_at\`,
-- \`updated_at\`) held the same instant a second time and were read by nothing \u2014
-- every query orders and filters on the \`_ms\` column. The instants themselves
-- stay: \`started_at_ms\` cannot be recovered from \`updated_at_ms\` and duration.
CREATE TABLE IF NOT EXISTS sessions (
  event_id        TEXT PRIMARY KEY,
  repo_id         INTEGER NOT NULL REFERENCES repos(id),
  source          TEXT NOT NULL,
  session_id      TEXT NOT NULL,
  title           TEXT,
  started_at_ms   INTEGER,
  updated_at_ms   INTEGER NOT NULL,
  message_count   INTEGER,
  duration_ms     INTEGER,
  model           TEXT,
  input_tokens    INTEGER NOT NULL DEFAULT 0,
  output_tokens   INTEGER NOT NULL DEFAULT 0,
  cached_tokens   INTEGER NOT NULL DEFAULT 0,
  est_cost_usd    REAL,
  token_coverage  TEXT NOT NULL DEFAULT 'sessions-only',
  prices_as_of    TEXT,
  UNIQUE (repo_id, source, session_id)
) STRICT;
CREATE INDEX IF NOT EXISTS ix_sessions_repo_time ON sessions(repo_id, updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_sessions_time ON sessions(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_sessions_source ON sessions(source);

-- Per-session, per-model split. A session can switch models mid-stream, so
-- sessions.model is a display convenience and THIS is authoritative.
--
-- Keyed on session_event_id rather than an integer: measured at 24 and 114 rows,
-- so the key-shape work that paid for itself on the commits chain would buy
-- nothing here while touching StopHook, the VS Code tick and two projections.
CREATE TABLE IF NOT EXISTS session_model_usage (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  model            TEXT NOT NULL,
  -- No \`provider\` column: it was recorded per row and selected by nothing.
  -- Pricing resolves the provider from the model id (see core/Pricing.ts), so a
  -- stored copy is a second answer to a question that already has one.
  input_tokens     INTEGER NOT NULL DEFAULT 0,
  output_tokens    INTEGER NOT NULL DEFAULT 0,
  cached_tokens    INTEGER NOT NULL DEFAULT 0,
  est_cost_usd     REAL,
  PRIMARY KEY (session_event_id, model)
) STRICT;
CREATE INDEX IF NOT EXISTS ix_smu_model ON session_model_usage(model);

CREATE TABLE IF NOT EXISTS session_tool_use (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  tool_name        TEXT NOT NULL,
  kind             TEXT NOT NULL,
  server           TEXT,
  calls            INTEGER NOT NULL DEFAULT 0,
  -- This table counts CALLS, nothing more. It used to carry a metadata_json
  -- column holding each recall call's own hit/miss and served commits, parsed
  -- back out of Claude's transcript; \`recall_receipts\` replaced that (see its
  -- DDL for why), so the column has no writer and no reader and is gone from
  -- the definition. Databases created before the change still have it \u2014 an
  -- unused nullable column, harmless, and cheaper to leave than to rewrite a
  -- STRICT table for.
  -- "kind" is part of the key, not just a column: a skill and a builtin can
  -- share a name, and the parser already groups on (kind, name). Keying on the
  -- name alone would silently merge two different things into one row.
  PRIMARY KEY (session_event_id, tool_name, kind)
) STRICT;
CREATE INDEX IF NOT EXISTS ix_stu_kind ON session_tool_use(kind);
CREATE INDEX IF NOT EXISTS ix_stu_server ON session_tool_use(server);

-- \u2500\u2500 Commits \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- Child tables reference \`id\`, never \`event_id\`. event_id is the producer's
-- idempotency key \u2014 'commit:<remote URL>:<40-hex sha>', measured at 80 bytes
-- average \u2014 and it is used only to dedupe at write time. Carrying it in the
-- children instead is what made commit_branches the largest object in the
-- database while holding no business data at all.
--
-- The memory projections that used to trail here (turns, tokens, est_cost_usd,
-- ticket_id, plus the commit_insights / commit_references / session_commit_link
-- child tables) are GONE (A3b): a copy falls behind whenever a memory is
-- regenerated, so the dashboard reads them from the memory tables instead \u2014
-- generated columns on \`memories\`, json_each over summary_json for insights,
-- transcript_sessions x memory_transcripts for the session link \u2014 which
-- recordCommitsFromWorker refreshes live at the same moment it emits
-- commit.summary. Do not reintroduce a stored copy; dev databases created
-- before the drop may still carry the dead columns/tables harmlessly
-- (pre-release, nothing reads or writes them).
--
-- work_category is deliberately NOT among them: it never was a summary field but
-- a mode computed over the topics' categories, and category belongs to a TOPIC.
-- Pages that aggregate by category read \`memory_topics\`; pages that want a
-- commit-level LABEL derive the mode at query time, so there is no stored copy
-- to fall behind.
-- Same instant-stored-once rule as \`sessions\`: \`committed_at\` (ISO) rode beside
-- \`committed_at_ms\` and no query read it. The author columns stay \u2014 nothing
-- displays them today, but they are the commit's own facts and re-deriving them
-- means re-walking git.
CREATE TABLE IF NOT EXISTS commits (
  id              INTEGER PRIMARY KEY,
  event_id        TEXT NOT NULL UNIQUE,
  repo_id         INTEGER NOT NULL REFERENCES repos(id),
  hash            TEXT NOT NULL,
  branch          TEXT,
  message         TEXT,
  author_name     TEXT,
  author_email    TEXT,
  committed_at_ms INTEGER NOT NULL,
  files_changed   INTEGER,
  insertions      INTEGER,
  deletions       INTEGER,
  UNIQUE (repo_id, hash)
) STRICT;
CREATE INDEX IF NOT EXISTS ix_commits_repo_time ON commits(repo_id, committed_at_ms);
CREATE INDEX IF NOT EXISTS ix_commits_branch ON commits(branch);





-- Branch-name dictionary. Measured: 87 distinct names referenced by 102,767
-- rows, average name length 27.4 bytes, so the names were repeating tens of
-- thousands of times \u2014 one of them 2,098 times by itself.
CREATE TABLE IF NOT EXISTS branches (
  id      INTEGER PRIMARY KEY,
  repo_id INTEGER NOT NULL REFERENCES repos(id),
  name    TEXT NOT NULL,
  UNIQUE (repo_id, name)
) STRICT;

-- Commit<->branch reachability. A commit is reachable from many branches, so
-- commits.branch cannot answer "group by branch" correctly \u2014 it is only a
-- heuristic "first seen on" label. Refreshed by unioning per-ref 'git rev-list',
-- never by 'git branch --contains' per commit.
--
-- The row count is correct and not worth optimizing: measured, 1,078 commits are
-- each reachable from 68 branches, because old branches all contain main's
-- history. O(commit x reachable branches) is the true answer to reachability.
-- What was wrong was 380 bytes per row for 3 bytes of information.
--
-- This is the ONE table with no repo_id: the boundary comes from
-- branches.repo_id, and "commits on branch X of repo Y" is two hops
-- (branches(repo_id,name) -> branch_id -> ix_cb_branch). One extra join, and the
-- table plus its indexes went from 30.19 MiB to 2.04 MiB on real data.
-- WITHOUT ROWID because a pure key table does not need a second rowid index.
CREATE TABLE IF NOT EXISTS commit_branches (
  commit_id INTEGER NOT NULL REFERENCES commits(id)  ON DELETE CASCADE,
  branch_id INTEGER NOT NULL REFERENCES branches(id) ON DELETE CASCADE,
  PRIMARY KEY (commit_id, branch_id)
) STRICT, WITHOUT ROWID;
CREATE INDEX IF NOT EXISTS ix_cb_branch ON commit_branches(branch_id, commit_id);

CREATE TABLE IF NOT EXISTS commit_files (
  commit_id  INTEGER NOT NULL REFERENCES commits(id) ON DELETE CASCADE,
  path       TEXT NOT NULL,
  insertions INTEGER,
  deletions  INTEGER,
  PRIMARY KEY (commit_id, path)
) STRICT, WITHOUT ROWID;
CREATE INDEX IF NOT EXISTS ix_commit_files_path ON commit_files(path);

-- \u2500\u2500 Workspace \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- Transient, latest-wins. A detached HEAD has no branch name; branch_key holds
-- the '' sentinel so the PK stays usable (SQLite treats every NULL as distinct,
-- which would let detached-HEAD rows accumulate without bound).
CREATE TABLE IF NOT EXISTS worktree_status (
  repo_id        INTEGER NOT NULL REFERENCES repos(id),
  branch_key     TEXT NOT NULL DEFAULT '',
  branch         TEXT,
  files_changed  INTEGER,
  insertions     INTEGER,
  deletions      INTEGER,
  -- Instant stored once, as epoch ms \u2014 see \`sessions\`.
  observed_at_ms INTEGER NOT NULL,
  PRIMARY KEY (repo_id, branch_key)
) STRICT;

-- \u2500\u2500 Write-ahead log / durable ingest queue \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- StatsWriter lands every event here as 'pending' and COMMITS before it
-- projects, so a crash mid-projection leaves something to drain. event_id is
-- deliberately NOT unique: the same event may be written repeatedly, and
-- idempotency lives in the projection tables.
--
-- This is the one table that keeps \`repo_identity\` instead of \`repo_id\`, and the
-- reason is the same one that makes it a separate transaction: the log's job is
-- to get the raw event onto disk before anything is interpreted. Resolving an id
-- would make that first commit depend on a repos row existing, which is exactly
-- the ordering assumption the log exists to avoid \u2014 producers write in any order,
-- and a session event can arrive before \`jolli enable\` has projected the
-- registry. Storing what the producer said keeps the log a log; the projection
-- resolves the id on the way out.
CREATE TABLE IF NOT EXISTS events_raw (
  seq               INTEGER PRIMARY KEY AUTOINCREMENT,
  event_id          TEXT,
  repo_identity     TEXT,
  type              TEXT NOT NULL,
  schema_version    INTEGER NOT NULL,
  producer_kind     TEXT,
  producer_version  TEXT,
  occurred_at       TEXT,
  received_at       TEXT NOT NULL,
  data_json         TEXT NOT NULL,
  projection_status TEXT NOT NULL DEFAULT 'pending',
  claimed_at_ms     INTEGER,
  attempts          INTEGER NOT NULL DEFAULT 0
) STRICT;
-- Only ONE index, and it is the drain's: every events_raw query filters on
-- projection_status (+ seq, attempts, schema_version) or prunes on received_at.
-- The three that used to sit here (on type, on (repo_identity, occurred_at) and
-- on event_id) indexed columns no query has ever filtered on \u2014 they cost a write
-- per enqueue on the blocking commit path and bought nothing. Re-add one only
-- alongside the query that needs it.
CREATE INDEX IF NOT EXISTS ix_events_pending ON events_raw(projection_status, seq);

-- \u2500\u2500 Gap-recovery cursors \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- A fast path for append-only history plus a rewrite detector \u2014 NOT the
-- correctness mechanism. Adds/changes are handled by idempotent UPSERT and
-- deletes by set reconciliation, because a high-water mark alone misses
-- out-of-order updates, history rewrites and deletions.
CREATE TABLE IF NOT EXISTS ingest_cursors (
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  source        TEXT NOT NULL,
  cursor        TEXT NOT NULL,
  updated_at_ms INTEGER NOT NULL,
  PRIMARY KEY (repo_id, source)
) STRICT;

-- \u2500\u2500 Aggregates \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- There are none. agg_repo_totals lived here and was removed unused: every
-- reader that wants tokens, cost or activity spans computes them live from the
-- detail tables (see the ~20 such queries in DashboardQuery), so the aggregate
-- was maintained on the projection path and read by nothing but a single
-- session count \u2014 which the Repositories page now counts live, the same way it
-- already counted memories. Read-time aggregation over the indexed detail rows
-- is what this schema is shaped for; re-adding a stored aggregate needs a
-- measured query that is actually too slow without it, not the assumption that
-- one will be.
-- \u2500\u2500 Provider usage / quota \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- There is none. \`usage_observations\` (and the Claude-shaped \`usage_samples\`
-- before it) recorded account-level limit pressure read out of Claude Code's own
-- local cache; the whole feature \u2014 reader, sampler, model, cards \u2014 was removed.
-- A database created before that still carries the table; it is simply unused,
-- and nothing here recreates it. Bringing quota tracking back means designing it
-- against whatever provider actually exposes it, not reviving this shape.

-- \u2500\u2500 Code graph \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- PARKED, not deleted. The graph page was removed (no view token, no route, no
-- reader), which left this table written by DbBackfill and read by nothing \u2014 a few
-- hundred KB of JSON per repo per import, for no query. The writer is commented
-- out in lockstep (StatsWriter.recordRepoGraph, DbBackfill's call site); uncomment
-- all three together if the page returns. Kept as commented DDL rather than
-- dropped from history because this is the exact shape it would come back to.
--
-- CREATE TABLE repo_graphs (
--   repo_id        INTEGER PRIMARY KEY REFERENCES repos(id),
--   generated_at   TEXT NOT NULL,
--   schema_version INTEGER NOT NULL,
--   categories     INTEGER NOT NULL DEFAULT 0,
--   topics         INTEGER NOT NULL DEFAULT 0,
--   units          INTEGER NOT NULL DEFAULT 0,
--   edges          INTEGER NOT NULL DEFAULT 0,
--   graph_json     TEXT NOT NULL
-- ) STRICT;
`,ja=`
-- Per-repo control state (JSON values): 'orphan-import', 'cutover',
-- 'v5-migration' (the raw bytes of the orphan's schema-v5-migration.json \u2014 a
-- completed-marker whose absence would make the v5 migration re-run), ...
-- Kept out of schema_meta, which is a whole-database singleton. A key-value
-- table rather than columns on \`repos\` because \`cutover\` has to be written in
-- the same transaction as the data it certifies, and because adding a column
-- after release is a cross-surface release event while adding a marker is an
-- INSERT.
CREATE TABLE IF NOT EXISTS repo_state (
  repo_id INTEGER NOT NULL REFERENCES repos(id),
  key     TEXT NOT NULL,
  value   TEXT NOT NULL,
  PRIMARY KEY (repo_id, key)
) STRICT;

-- \u2500\u2500 memories: identity, topology and content in one row \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- \`children[]\` is stored as edges + array position rather than nested copies of
-- the child files (measured: the nesting is 31.3% of the bytes). The key stays
-- present in \`summary_json\` with its value emptied to \`[]\` \u2014 removing it and
-- appending it back during reassembly would reorder the JSON keys, and the
-- byte-for-byte equivalence check does not allow that difference.
--
-- root_hash and depth are denormalizations the write module maintains: the tree
-- measures 17 levels deep, so without them every root read is a recursive query.
-- depth doubles as cycle detection \u2014 a cycle makes inspection query 1 return
-- rows.
CREATE TABLE IF NOT EXISTS memories (
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  commit_hash   TEXT NOT NULL,

  parent_hash   TEXT,
  child_pos     INTEGER,
  root_hash     TEXT NOT NULL,
  depth         INTEGER NOT NULL DEFAULT 0,

  summary_json   TEXT NOT NULL,
  -- A REAL column, not a generated one: measured 313/313, summary files carry
  -- no \`treeHash\` \u2014 it exists only in index.json entries, computed from git at
  -- index-build time. It is load-bearing for alias scanning (tree-hash matching
  -- finds "same content, new sha"), so the importer copies it off the index
  -- entry and the write module stamps it via getTreeHash, exactly as
  -- flattenSummaryTree does today. NULL when git could not answer.
  tree_hash      TEXT,
  -- Same story as \`tree_hash\`, and a REAL column for the same reason: legacy
  -- (pre-v4) summaries carry their root diff stats ONLY on the index entry,
  -- never in the body. \`synthIndex\` rebuilds index.json from these rows and
  -- reads \`diffStats\` off the body, so without this the badge \`jolli view\`,
  -- the sidebar and the SessionStart briefing render is lost for every legacy
  -- root, and the rebuilt entry stops matching the file the branch carried.
  -- Not folded into \`summary_json\`: that blob has to reproduce the source file
  -- byte-for-byte for the cutover compare. NULL means the body is the only
  -- source, which is every v4-and-later memory.
  index_diff_stats_json TEXT,
  first_seen_ms  INTEGER NOT NULL,
  written_at_ms  INTEGER NOT NULL,
  -- Hand-written, not generated: date functions are barred from generated
  -- columns. It must be derived from the same field as \`commit_date\`, and no
  -- constraint can enforce that. NOT NULL plus an optional source field means a
  -- missing \`commitDate\` fails the whole row, so the write module falls back
  -- commitDate -> git commit time -> first_seen_ms before giving up.
  commit_date_ms INTEGER NOT NULL,

  -- STORED only for columns that feed an index or get read as a whole column.
  -- STORED is also restricted to TEXT (see this module's header): all three are.
  branch          TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.branch'))            STORED,
  commit_message  TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.commitMessage'))     STORED,
  commit_type     TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.commitType'))        STORED,

  commit_date     TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.commitDate'))        VIRTUAL,
  commit_author   TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.commitAuthor'))      VIRTUAL,
  generated_at    TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.generatedAt'))       VIRTUAL,
  recap           TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.recap'))             VIRTUAL,
  ticket_id       TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.ticketId'))          VIRTUAL,
  jolli_doc_id    TEXT    GENERATED ALWAYS AS (json_extract(summary_json,'$.jolliDocId'))        VIRTUAL,
  -- No topics_json column: the topics are projected into \`memory_topics\` instead,
  -- for the reason spelled out on that table.
  -- Numeric columns pass through a json_type gate so an off-type value degrades
  -- to NULL \u2014 the case the pages already handle for a missing field \u2014 instead of
  -- handing a REAL back from an INTEGER column. VIRTUAL escapes STRICT's type
  -- check entirely, so nothing else would notice.
  turns           INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.conversationTurns')='integer'  THEN json_extract(summary_json,'$.conversationTurns')  END) VIRTUAL,
  tokens          INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.conversationTokens')='integer' THEN json_extract(summary_json,'$.conversationTokens') END) VIRTUAL,
  est_cost_usd    REAL    GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.estimatedCostUsd') IN ('integer','real') THEN json_extract(summary_json,'$.estimatedCostUsd') END) VIRTUAL,
  files_changed   INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.diffStats.filesChanged')='integer' THEN json_extract(summary_json,'$.diffStats.filesChanged') END) VIRTUAL,
  insertions      INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.diffStats.insertions')='integer'   THEN json_extract(summary_json,'$.diffStats.insertions')   END) VIRTUAL,
  deletions       INTEGER GENERATED ALWAYS AS (CASE WHEN json_type(summary_json,'$.diffStats.deletions')='integer'    THEN json_extract(summary_json,'$.diffStats.deletions')    END) VIRTUAL,

  PRIMARY KEY (repo_id, commit_hash),
  UNIQUE (repo_id, parent_hash, child_pos),
  -- Shape handed to the engine: a root has no position, a child must have one.
  -- Blocks "root with a position" and "child without one" in a single check.
  CHECK ((parent_hash IS NULL) = (child_pos IS NULL)),
  -- Non-negative, so a reorder's temporaries have to offset upward. A negative
  -- scheme would need this check relaxed for the duration of every reorder.
  CHECK (child_pos IS NULL OR child_pos >= 0),
  -- Deliberately as loose as 2x REORDER_OFFSET: it must admit the reorder's own
  -- temporaries, so it cannot be the tight bound. What it catches is a retried
  -- reorder offsetting crash residue a second time. The tight bound
  -- (final positions < REORDER_OFFSET) is an assertion in the write module,
  -- because as a CHECK it would reject the temporaries.
  CHECK (child_pos IS NULL OR child_pos < 2000000),
  -- Self-reference: deleting a root deletes the whole tree. Pruning is therefore
  -- a whole-tree decision by root_hash, never a row-by-row one by date.
  FOREIGN KEY (repo_id, parent_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE
) STRICT;
CREATE INDEX IF NOT EXISTS ix_mem_root   ON memories(repo_id, root_hash);
CREATE INDEX IF NOT EXISTS ix_mem_branch ON memories(repo_id, branch, commit_date_ms);
CREATE INDEX IF NOT EXISTS ix_mem_date   ON memories(repo_id, commit_date_ms);
CREATE INDEX IF NOT EXISTS ix_mem_ticket ON memories(repo_id, ticket_id);

-- \u2500\u2500 memory_topics: the summary's topics[], one row per topic \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- A topic is "one independent problem/goal within a commit" (TopicSummary), and
-- \`category\` / \`importance\` belong to IT, not to the commit \u2014 the model is asked
-- for one category per topic, not one per commit. Measured on this repo: 727
-- memories carry 5,159 topics, 7.6 on average and up to 43.
--
-- The old read model collapsed them with a mode ("the commit's dominant
-- category") and stored one value per commit. That loses information the data
-- plainly has: by topic the split is bugfix 2,050 / feature 1,292, while by
-- commit-mode it is 39 / 36 \u2014 and \`security\` (211 topics) and \`docs\` (30) vanish
-- entirely, because neither ever wins a commit's vote. 15% of commits had a TIE
-- at the top, where "dominant" silently meant "whichever topic came first".
--
-- Why a table rather than reading them out of summary_json, all four measured on
-- the real 727 rows:
--   GROUP BY commits.work_category   0.87 ms  \u2014 fast, wrong shape
--   parse topics in JS               37 ms    \u2014 wrong shape, and ships 11.2 MiB
--   json_each over summary_json      303 ms   \u2014 right shape, unusable
--   this table                       4.88 ms  \u2014 right shape, fast
-- Same reason \`transcript_sessions\` exists: a queryable field sitting inside a
-- payload SQL has to parse per row is not queryable. summary_json stays the
-- source of truth and keeps the full topics for byte-faithful reassembly; this is
-- a projection of it, replaced as a whole group on every write.
--
-- Only the queryable fields are projected. decisions / trigger / response are
-- long prose that only ever gets displayed, and the pages already read those
-- from summary_json \u2014 a second copy would be bytes with no query behind them.
CREATE TABLE IF NOT EXISTS memory_topics (
  repo_id     INTEGER NOT NULL,
  commit_hash TEXT NOT NULL,
  pos         INTEGER NOT NULL,          -- topics[] index; ordering is restored from it
  category    TEXT,                      -- TopicCategory; NULL when the model omitted it
  importance  TEXT,                      -- 'major' | 'minor'
  title       TEXT NOT NULL,
  PRIMARY KEY (repo_id, commit_hash, pos),
  CHECK (pos >= 0),
  FOREIGN KEY (repo_id, commit_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE
) STRICT;
-- Leads with repo_id because every page query is repo-scoped; category second
-- because "group by category" is the whole point of the table.
CREATE INDEX IF NOT EXISTS ix_mtopic_category ON memory_topics(repo_id, category);

-- \u2500\u2500 commit aliases (index.json's third top-level key) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- A rewritten SHA -> the live memory with the same tree hash. Step 2 of
-- getSummary()'s four-step lookup. Tree-hash matching costs a git subprocess
-- per candidate, so a computed alias is kept forever; in index.json every
-- rebuild path had to remember to copy them across (one of five did not), and a
-- table has no rebuild to forget.
CREATE TABLE IF NOT EXISTS commit_aliases (
  repo_id     INTEGER NOT NULL,
  old_hash    TEXT NOT NULL,
  target_hash TEXT NOT NULL,
  created_ms  INTEGER NOT NULL,
  PRIMARY KEY (repo_id, old_hash),
  FOREIGN KEY (repo_id, target_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE
) STRICT;

-- \u2500\u2500 transcripts (keyed by TranscriptId \u2014 UUID or legacy commit hash) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- sessions_blob is zlib-compressed JSON: no generated columns, not indexed,
-- stored and fetched whole. It is the only compressible block in the database
-- (everywhere else has a query dependency on the text) and the second largest.
CREATE TABLE IF NOT EXISTS transcripts (
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  transcript_id TEXT NOT NULL,
  sessions_blob BLOB NOT NULL,
  written_at_ms INTEGER NOT NULL,
  PRIMARY KEY (repo_id, transcript_id)
) STRICT;

-- Many-to-many: one transcript is shared by several nodes of an amend chain,
-- and one memory can reference several. No array index is stored \u2014
-- \`summary.transcripts\` carries the order in summary_json and that is what
-- reassembly uses, so this table only answers queries and owes no fidelity.
CREATE TABLE IF NOT EXISTS memory_transcripts (
  repo_id       INTEGER NOT NULL,
  commit_hash   TEXT NOT NULL,
  transcript_id TEXT NOT NULL,
  PRIMARY KEY (repo_id, commit_hash, transcript_id),
  FOREIGN KEY (repo_id, commit_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE,
  FOREIGN KEY (repo_id, transcript_id)
    REFERENCES transcripts(repo_id, transcript_id) ON DELETE CASCADE
) STRICT;
CREATE INDEX IF NOT EXISTS ix_mt_transcript ON memory_transcripts(repo_id, transcript_id);

-- Compression makes the sessions invisible to SQL, so the queryable fields are
-- projected out. Uncompressed it would still need this: one session lookup
-- would otherwise parse megabytes of transcript JSON.
CREATE TABLE IF NOT EXISTS transcript_sessions (
  repo_id       INTEGER NOT NULL,
  transcript_id TEXT NOT NULL,
  session_id    TEXT NOT NULL,
  source        TEXT,
  PRIMARY KEY (repo_id, transcript_id, session_id),
  FOREIGN KEY (repo_id, transcript_id)
    REFERENCES transcripts(repo_id, transcript_id) ON DELETE CASCADE
) STRICT;
-- session_id leads, not source: the only reason this table exists is "which
-- commits is this session tied to", and source is legitimately NULL on older
-- data and not always known by the caller. Leading with source degrades that
-- lookup to a repo_id prefix plus a scan.
CREATE INDEX IF NOT EXISTS ix_ts_session ON transcript_sessions(repo_id, session_id, source);

-- \u2500\u2500 context: plans / notes / references / skills unified \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- All four are the same shape: one key, one complete file body, one version.
-- body_md is exactly what readFile() returns today (frontmatter included for a
-- reference or a skill), so the round trip is byte-faithful by construction.
-- native_id is stored separately because path escaping is irreversible \u2014
-- GitHub's \`owner/repo#number\` cannot be recovered from context_key.
--
-- A kind registry table rather than a closed CHECK: adding a kind is an INSERT.
-- 'skill' is NOT inserted here \u2014 it arrived after this entry was already on
-- disk in dev databases, so it ships as its own append-only migration (see
-- {@link SKILL_CONTEXT_KIND_DDL}); a fresh database gets it by running that
-- migration, exactly like an existing one.
CREATE TABLE IF NOT EXISTS context_kinds (kind TEXT PRIMARY KEY) STRICT;
INSERT OR IGNORE INTO context_kinds (kind) VALUES ('plan'), ('note'), ('reference');
CREATE TABLE IF NOT EXISTS context (
  id            INTEGER PRIMARY KEY,
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  kind          TEXT NOT NULL REFERENCES context_kinds(kind),
  context_key   TEXT NOT NULL,
  source        TEXT,
  native_id     TEXT,
  tool_name     TEXT,
  referenced_at TEXT,
  original_slug TEXT,
  branch        TEXT,
  title         TEXT,
  url           TEXT,
  body_md       TEXT NOT NULL,
  created_at_ms INTEGER NOT NULL,
  updated_at_ms INTEGER,
  -- Non-NULL for plans only. This is plan_progress's foreign-key target, which
  -- is what replaced the three triggers that used to police that relation.
  plan_key TEXT GENERATED ALWAYS AS (CASE WHEN kind = 'plan' THEN context_key END) STORED,
  UNIQUE (repo_id, kind, context_key),
  UNIQUE (repo_id, plan_key),
  -- These three are stricter than file storage, which is a deliberate open
  -- question rather than a settled constraint: a historical reference file on
  -- orphan that lacks \`referencedAt\` is legal as a file but a CHECK violation
  -- here, and the importer's failure set has to be EMPTY before a repo may cut
  -- over. So the import phase counts how many real reference files are missing
  -- each field; if any are, the affected check degrades to the one-way form
  -- below (NULL unless reference) and the missing side is stored as NULL and
  -- logged. Until that measurement exists, keep them \u2014 do not relax them on
  -- the theory that looser is safer, because a silent NULL where the field was
  -- expected is its own class of bug.
  CHECK ((source        IS NOT NULL) = (kind = 'reference')),
  CHECK ((native_id     IS NOT NULL) = (kind = 'reference')),
  CHECK ((referenced_at IS NOT NULL) = (kind = 'reference')),
  CHECK (tool_name     IS NULL OR kind = 'reference'),
  CHECK (url           IS NULL OR kind = 'reference'),
  CHECK (original_slug IS NULL OR kind = 'plan'),
  CHECK (branch        IS NULL OR kind IN ('plan','note'))
) STRICT;
-- No indexes. Every context read is by (repo_id, kind, context_key) or
-- (repo_id, kind), both served by the UNIQUE constraint above. The three partial
-- indexes that used to sit here (on source, on (source, native_id), on branch)
-- were built for a queryable-metadata story no query ever arrived for; the
-- columns stay, the indexes do not.

-- \u2500\u2500 plan progress \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- One artifact per (plan, commit), keyed on the plan: a later commit for the
-- same plan overwrites the row. It has to be a table rather than a query
-- because rebuilding it is one LLM call per plan and the output is not
-- reproducible \u2014 the same criterion that keeps topic_pages a table.
--
-- ON UPDATE CASCADE is not optional. Plan slugs get normalized and rewritten
-- (which is why context.original_slug exists), and without the cascade an
-- in-place rename is rejected by the foreign key while a DELETE+INSERT rename
-- silently takes the progress with it.
CREATE TABLE IF NOT EXISTS plan_progress (
  repo_id       INTEGER NOT NULL,
  plan_slug     TEXT NOT NULL,
  artifact_json TEXT NOT NULL,
  updated_at_ms INTEGER NOT NULL,
  -- No generated columns. \`artifact_json\` is written and read whole (see
  -- SqliteStorage), so the eight projections that used to sit here \u2014 originalSlug,
  -- commitHash, commitMessage, commitDate, summary, steps, llm.model and a CAST
  -- payload_version \u2014 answered no query. Project a field out again when something
  -- needs to filter or sort on it, not on the theory that it might.
  PRIMARY KEY (repo_id, plan_slug),
  FOREIGN KEY (repo_id, plan_slug) REFERENCES context(repo_id, plan_key)
    ON UPDATE CASCADE ON DELETE CASCADE
) STRICT;

-- \u2500\u2500 topic KB \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- Not the same thing as summary_json's \`topics\`, which are groupings inside one
-- commit. A topic page is what accumulated about one topic across commits, so
-- it is derived but not cheap: one LLM call per topic, output not reproducible.
-- topic_pages.summary existed only inside topics/index.json; storing it here is
-- what lets that index become a view.
CREATE TABLE IF NOT EXISTS topic_pages (
  repo_id         INTEGER NOT NULL REFERENCES repos(id),
  stable_slug     TEXT NOT NULL,
  title           TEXT NOT NULL,
  summary         TEXT,
  content_md      TEXT NOT NULL,
  related_branches_json TEXT NOT NULL DEFAULT '[]',
  last_updated_at TEXT NOT NULL,
  payload_version INTEGER NOT NULL DEFAULT 1,
  PRIMARY KEY (repo_id, stable_slug)
) STRICT;

-- pos preserves the page's sourceRefs[] array order. The UNIQUE on it is the
-- same hazard as memories.child_pos, with a cheaper fix: this table has no
-- self-referencing foreign key, so the write module replaces a page's refs as a
-- whole group (DELETE then re-INSERT in one transaction) rather than updating
-- positions row by row. Never UPDATE pos in place.
CREATE TABLE IF NOT EXISTS topic_source_refs (
  repo_id     INTEGER NOT NULL,
  stable_slug TEXT NOT NULL,
  pos         INTEGER NOT NULL,
  ref_type    TEXT NOT NULL CHECK (ref_type IN ('summary','plan','note','userfile')),
  ref_id      TEXT NOT NULL,
  ts          TEXT NOT NULL,
  branch      TEXT,
  PRIMARY KEY (repo_id, stable_slug, ref_type, ref_id),
  UNIQUE (repo_id, stable_slug, pos),
  CHECK (pos >= 0),
  FOREIGN KEY (repo_id, stable_slug)
    REFERENCES topic_pages(repo_id, stable_slug) ON DELETE CASCADE
) STRICT;
CREATE INDEX IF NOT EXISTS ix_tsr_ref ON topic_source_refs(repo_id, ref_type, ref_id);

CREATE TABLE IF NOT EXISTS topic_processed_sources (
  repo_id     INTEGER NOT NULL REFERENCES repos(id),
  source_type TEXT NOT NULL CHECK (source_type IN ('summary','plan','note','userfile')),
  source_id   TEXT NOT NULL,
  PRIMARY KEY (repo_id, source_type, source_id)
) STRICT;

-- No views. \`v_topic_index\` used to live here, assembling topics/index.json's
-- array-ordered projection with ORDER BY inside json_group_array \u2014 but
-- SqliteStorage rebuilds that index directly from topic_pages + topic_source_refs
-- and never queried the view, so it was maintained by the engine on every write
-- and read by nothing.
`,Zr=N("BASELINE_DDL",$a+`
-- Policy: repo rows are NEVER deleted \u2014 disable = set disabled_at. Every table
-- references repos(id) with default NO ACTION (not CASCADE), so a stray DELETE
-- errors instead of silently wiping a repo's memories; this trigger catches even
-- the zero-data case.
--
-- This is the ONE trigger the no-triggers rule keeps, and the reasons it does
-- not fall under that rule are worth stating: it encodes no business rule that
-- could change (repo rows stay forever by design), it has no ordering
-- relationship with any other trigger, and what it prevents is not a wrong value
-- but the irreversible loss of every memory belonging to a repo. Replacing it
-- with "the code does not write DELETE, and a test pins that" would trade an
-- engine-enforced guarantee for a convention.
CREATE TRIGGER IF NOT EXISTS repos_no_delete BEFORE DELETE ON repos
BEGIN SELECT RAISE(ABORT, 'repos are never deleted: set disabled_at instead'); END;
`+ja)});var to,no=d(()=>{"use strict";D();to=N("RECALL_RECEIPTS_DDL",`
CREATE TABLE IF NOT EXISTS recall_receipts (
  -- The producer's own idempotency key (statsEventId), so a re-drained event
  -- converges on one row instead of appending a duplicate call.
  receipt_id   TEXT PRIMARY KEY,
  repo_id      INTEGER NOT NULL REFERENCES repos(id),
  at_ms        INTEGER NOT NULL,
  -- 'mcp' | 'cli'. Kept because the two answer different questions about
  -- adoption, and because a surface that stops reporting is only visible here.
  surface      TEXT NOT NULL,
  session_id   TEXT,
  hit          INTEGER NOT NULL,
  commit_count INTEGER NOT NULL DEFAULT 0,
  -- JSON array of {hash, date} for a hit; NULL for a miss. Powers "distinct
  -- memories used" and the stale-memory count, neither of which a bare
  -- commit_count can answer.
  commits_json TEXT
) STRICT;
CREATE INDEX IF NOT EXISTS ix_recall_receipts_repo_at ON recall_receipts(repo_id, at_ms);
`)});var ro,oo=d(()=>{"use strict";D();ro=N("SKILL_CONTEXT_KIND_DDL",`
INSERT OR IGNORE INTO context_kinds (kind) VALUES ('skill');
`)});var io,so=d(()=>{"use strict";D();io={name:"EVENT_FAILED_KIND_DDL",run:e=>T(e,"events_raw","failed_kind","TEXT")}});var ao,lo=d(()=>{"use strict";D();ao={name:"TOOL_CALL_TIME_DDL",run:e=>T(e,"session_tool_use","last_call_at_ms","INTEGER")}});var co,uo=d(()=>{"use strict";D();co=N("SCHEMA_MIGRATIONS_DDL",`
CREATE TABLE IF NOT EXISTS schema_migrations (
  seq           INTEGER PRIMARY KEY AUTOINCREMENT,
  -- Which array position it ran at. DIAGNOSTIC ONLY \u2014 nothing decides anything
  -- from it. Kept because "slot 5" is what a bug report says out loud.
  slot          INTEGER NOT NULL,
  name          TEXT    NOT NULL,
  outcome       TEXT    NOT NULL CHECK (outcome IN ('applied','failed','skipped','baseline')),
  -- \`JOLLI_CLIENT_HEADER\` \u2014 '<kind>/<version>', e.g. 'cli/0.99.11' or
  -- 'vscode-plugin/0.99.11'. The surface identity the user would go and upgrade.
  applied_by    TEXT    NOT NULL,
  applied_at_ms INTEGER NOT NULL,
  duration_ms   INTEGER NOT NULL,
  ddl           TEXT    NOT NULL
) STRICT;
CREATE INDEX IF NOT EXISTS ix_schema_migrations_name ON schema_migrations(name, seq);
`)});var mo,po=d(()=>{"use strict";D();mo=N("REPOS_DELETE_ALLOWED_DDL",`
DROP TRIGGER IF EXISTS repos_no_delete;
`)});function Ya(e){T(e,"sessions","written_at_ms","INTEGER NOT NULL DEFAULT 0"),T(e,"session_model_usage","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),T(e,"session_tool_use","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),T(e,"recall_receipts","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),T(e,"commits","written_at_ms","INTEGER NOT NULL DEFAULT 0"),e.exec(Wa),e.exec(Ga),e.exec(Ka),e.exec(qa),e.exec(Ja),e.exec(Xa)}var Wa,Ba,Ga,Ka,qa,Xa,Ja,fo,go=d(()=>{"use strict";D();Wa=`
CREATE TABLE IF NOT EXISTS session_usage_events (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  -- The response's identity, or 'line:<n>' when the source cannot name one.
  dedup_key        TEXT NOT NULL,
  -- THIS response's instant. The column the whole table exists for; named for
  -- what it IS rather than what reads do with it, because those bucket it by a
  -- timezone the table deliberately does not store.
  responded_at_ms  INTEGER NOT NULL,
  -- Empty string when the transcript recorded usage without naming a model,
  -- matching how the whole-slice aggregate buckets those.
  model            TEXT NOT NULL,
  input_tokens     INTEGER NOT NULL DEFAULT 0,
  output_tokens    INTEGER NOT NULL DEFAULT 0,
  cached_tokens    INTEGER NOT NULL DEFAULT 0,
  est_cost_usd     REAL,
  -- Sync stamp, same rule as SYNC_STAMP_DDL's columns: bumped on every write,
  -- never a business time. See that constant for why the two cannot be one.
  updated_at_ms    INTEGER NOT NULL,
  PRIMARY KEY (session_event_id, dedup_key)
) STRICT, WITHOUT ROWID;
-- Every read is "this window", and the window is on the RESPONSE's own time
-- rather than its session's \u2014 which is the point of the table.
CREATE INDEX IF NOT EXISTS ix_sue_at ON session_usage_events(responded_at_ms);
CREATE INDEX IF NOT EXISTS ix_sue_sync ON session_usage_events(updated_at_ms);
`,Ba=`
CREATE INDEX IF NOT EXISTS ix_stats_daily_day ON stats_daily(tz, day);
`,Ga=`
CREATE TABLE IF NOT EXISTS stats_daily (
  repo_id       INTEGER NOT NULL,
  tz            TEXT NOT NULL,
  day           TEXT NOT NULL,
  kind          TEXT NOT NULL,
  series_key    TEXT NOT NULL,
  value         REAL NOT NULL,
  cost_usd      REAL NOT NULL DEFAULT 0,
  built_at_ms   INTEGER NOT NULL,
  updated_at_ms INTEGER NOT NULL,
  PRIMARY KEY (repo_id, tz, day, kind, series_key)
) STRICT, WITHOUT ROWID;
${Ba}
`,Ka=`
CREATE INDEX IF NOT EXISTS ix_sessions_written ON sessions(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_smu_sync ON session_model_usage(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_stu_sync ON session_tool_use(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_sync ON recall_receipts(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_commits_written ON commits(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_mem_written ON memories(written_at_ms);
`,qa=`
CREATE INDEX IF NOT EXISTS ix_sessions_keyset ON sessions(written_at_ms, event_id);
CREATE INDEX IF NOT EXISTS ix_smu_keyset ON session_model_usage(updated_at_ms, session_event_id, model);
CREATE INDEX IF NOT EXISTS ix_stu_keyset ON session_tool_use(updated_at_ms, session_event_id, tool_name, kind);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_keyset ON recall_receipts(updated_at_ms, receipt_id);
`,Xa=`
UPDATE sessions        SET written_at_ms = COALESCE(updated_at_ms, 0) WHERE written_at_ms IS NULL;
UPDATE recall_receipts SET updated_at_ms = COALESCE(at_ms, 0)         WHERE updated_at_ms IS NULL;
UPDATE session_model_usage
   SET updated_at_ms = COALESCE((SELECT s.updated_at_ms FROM sessions s
                                  WHERE s.event_id = session_model_usage.session_event_id), 0)
 WHERE updated_at_ms IS NULL;
UPDATE session_tool_use
   SET updated_at_ms = COALESCE(last_call_at_ms,
                                (SELECT s.updated_at_ms FROM sessions s
                                  WHERE s.event_id = session_tool_use.session_event_id), 0)
 WHERE updated_at_ms IS NULL;
`,Ja=`
UPDATE sessions        SET written_at_ms = updated_at_ms WHERE written_at_ms = 0;
UPDATE recall_receipts SET updated_at_ms = at_ms         WHERE updated_at_ms = 0;
UPDATE session_model_usage
   SET updated_at_ms = COALESCE((SELECT s.updated_at_ms FROM sessions s
                                  WHERE s.event_id = session_model_usage.session_event_id), 0)
 WHERE updated_at_ms = 0;
UPDATE session_tool_use
   SET updated_at_ms = COALESCE((SELECT s.updated_at_ms FROM sessions s
                                  WHERE s.event_id = session_tool_use.session_event_id), 0)
 WHERE updated_at_ms = 0;
`;fo={name:"SESSION_STATS_SYNC_DDL",run:Ya}});var ho,yo=d(()=>{"use strict";D();ho=N("SESSION_ACTIVITY_DDL",`
CREATE TABLE IF NOT EXISTS session_activity (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  bucket_ms        INTEGER NOT NULL,
  recorded_at_ms   INTEGER NOT NULL,
  PRIMARY KEY (session_event_id, bucket_ms)
) STRICT;
CREATE INDEX IF NOT EXISTS ix_activity_bucket ON session_activity(bucket_ms);
CREATE INDEX IF NOT EXISTS ix_activity_recorded ON session_activity(recorded_at_ms);
`)});var _o,Eo=d(()=>{"use strict";D();_o={name:"SKILL_TOKEN_USAGE_DDL",run:e=>{T(e,"session_tool_use","input_tokens","INTEGER"),T(e,"session_tool_use","output_tokens","INTEGER"),T(e,"session_tool_use","cached_tokens","INTEGER"),T(e,"session_tool_use","usage_confidence","TEXT")}}});var So,To=d(()=>{"use strict";D();So=N("SKILL_INVOCATIONS_DDL",`
CREATE TABLE IF NOT EXISTS skill_invocations (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  skill_name       TEXT NOT NULL,
  -- Epoch ms, matching every other instant in this schema. The invocation's own
  -- moment from the transcript, never the row's write time: it is the identity.
  at_ms            INTEGER NOT NULL,
  ok               INTEGER NOT NULL,
  -- 'observed' (read from a result record) | 'assumed' (defaulted, unknowable).
  ok_confidence    TEXT NOT NULL,
  -- NULL when the entry was observed; 'heuristic' when inferred from a file read.
  detection        TEXT,
  -- 'tool' (the agent decided) | 'command' (the user asked for it) | NULL unknown.
  entry_path       TEXT,
  args             TEXT,
  -- Characters injected by THIS entry. See the docblock on why it cannot be folded.
  body_chars       INTEGER,
  PRIMARY KEY (session_event_id, skill_name, at_ms)
) STRICT;
-- Every read is "this skill's entries, oldest first". The primary key already
-- serves the cascade delete, whose lookup is by session_event_id.
CREATE INDEX IF NOT EXISTS ix_si_skill_time ON skill_invocations(skill_name, at_ms);
`)});var bo,Ro=d(()=>{"use strict";D();bo={name:"SKILL_PLUGIN_DDL",run:e=>T(e,"session_tool_use","plugin","TEXT")}});var wo,Ao=d(()=>{"use strict";D();wo={name:"SKILL_ORIGIN_ROOT_DDL",run:e=>T(e,"session_tool_use","origin_root","TEXT")}});var Do,No=d(()=>{"use strict";D();Do=N("2026-08-25-0000-memory-transcripts-covering-index",`
CREATE INDEX IF NOT EXISTS ix_mt_transcript_covering
  ON memory_transcripts(repo_id, transcript_id, commit_hash);
`)});var xo,Io=d(()=>{"use strict";D();xo={name:"2026-08-25-0001-memory-reachable",run:e=>T(e,"memories","reachable","INTEGER NOT NULL DEFAULT 1")}});var Lo,Co=d(()=>{"use strict";D();Lo={name:"2026-08-25-0002-commit-reachable",run:e=>T(e,"commits","reachable","INTEGER NOT NULL DEFAULT 1")}});var Xe,Yt=d(()=>{"use strict";eo();no();oo();so();lo();uo();po();go();yo();Eo();To();Ro();Ao();No();Io();Co();D();Xe=[Zr,to,ro,io,ao,co,mo,fo,ho,_o,So,bo,wo,Do,xo,Lo]});function Ie(){return(0,Ve.join)(we(),"jollimemory.db")}function oe(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>xe.major?!0:n<xe.major?!1:r>=xe.minor}function Za(e){try{return(e.prepare("SELECT COUNT(*) AS n FROM sqlite_master WHERE type = 'table' AND name = 'schema_migrations'").get()?.n??0)>0?"present":"absent"}catch{return"unknown"}}function Qt(e){try{return{kind:"rows",rows:e.prepare("SELECT seq, slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl FROM schema_migrations ORDER BY seq").all()}}catch(t){let n=Za(e);return n==="absent"?{kind:"none"}:{kind:"unreadable",reason:R(t),tableConfirmed:n==="present"}}}function Oo(e){let t=Qt(e);return t.kind==="rows"?t.rows:void 0}function Je(e,t){e.prepare(`INSERT INTO schema_migrations (slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t.slot,t.name,t.outcome,t.appliedBy,t.atMs,t.durationMs,t.ddl)}function el(e){let t=new Map;for(let n of e){let r=t.get(n.name);(!r||n.seq>r.seq)&&t.set(n.name,n)}return t}function Vt(e){return e.sql??""}function tl(e){let t=Qt(e);if(t.kind==="none")return;if(t.kind==="unreadable"){Ye.has(ko)||(Ye.add(ko),Q.warn(t.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`":"the database could not be queried for its migration log (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`",t.reason));return}let n=t.rows,r=new Set(Xe.map(o=>o.name));for(let[o,i]of el(n))r.has(o)||Ye.has(o)||(Ye.add(o),Q.warn("migration %s was touched by %s but is unknown to this build (%s) \u2014 the database has been opened by another build",o,i.applied_by,ut))}function nl(e,t={}){let n=t.now??Date.now,r=t.appliedBy??ut,o=Qt(e),i=new Set;if(o.kind==="rows")for(let c of o.rows)(c.outcome==="applied"||c.outcome==="baseline")&&i.add(c.name);else o.kind==="none"?Q.info("no migration log in this database \u2014 replaying every entry (all are re-runnable)"):Q.warn(o.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 replaying every entry and recording nothing":"the database could not be queried for its migration log (%s) \u2014 replaying every entry and recording nothing",o.reason);let s=Xe.map((c,u)=>({m:c,slot:u})).filter(({m:c})=>!i.has(c.name));if(s.length===0)return;let a=[],l=()=>{for(let c of a)Je(e,c);a.length=0};e.exec("PRAGMA foreign_keys = OFF");try{for(let{m:c,slot:u}of s){let f=n();e.exec("BEGIN IMMEDIATE");try{if(Oo(e)?.some(y=>y.name===c.name&&(y.outcome==="applied"||y.outcome==="baseline"))){l(),Je(e,{slot:u,name:c.name,outcome:"skipped",appliedBy:r,atMs:n(),durationMs:0,ddl:Vt(c)}),e.exec("COMMIT");continue}c.run(e);let b={slot:u,name:c.name,outcome:"applied",appliedBy:r,atMs:n(),durationMs:n()-f,ddl:Vt(c)};Oo(e)?(l(),Je(e,b)):a.push(b),e.exec("COMMIT")}catch(g){try{e.exec("ROLLBACK")}catch{}try{e.prepare("DELETE FROM schema_migrations WHERE name = ? AND outcome = 'failed'").run(c.name),Je(e,{slot:u,name:c.name,outcome:"failed",appliedBy:r,atMs:n(),durationMs:n()-f,ddl:Vt(c)})}catch(b){Q.debug("could not record the failed migration %s: %s",c.name,R(b))}throw g}}}finally{e.exec("PRAGMA foreign_keys = ON")}Q.info("dashboard schema migrated: %s",s.map(({m:c})=>c.name).join(", "))}function rl(e){let t=(0,Ve.dirname)(e);try{(0,B.mkdirSync)(t,{recursive:!0,mode:448}),((0,B.statSync)(t).mode&511)!==448&&(0,B.chmodSync)(t,448)}catch(n){Q.warn("could not restrict %s to owner-only: %s",t,R(n))}}function ol(e){for(let t of[e,`${e}-wal`,`${e}-shm`])try{((0,B.statSync)(t).mode&511)!==384&&(0,B.chmodSync)(t,384)}catch(n){gt(n)||Q.warn("could not restrict %s to 0600: %s",t,R(n))}}async function vo(e,t){if(!oe())throw new zt(process.versions.node);let n=t.dbPath??Ie(),r=t.maxAttempts??4,o=t.baseDelayMs??50;e||rl(n);let{DatabaseSync:i}=await import("node:sqlite");for(let s=1;;s++){let a;try{a=new i(n,{readOnly:e});for(let l of e?za:Va)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${t.busyTimeoutMs??Qa}`),e||ol(n),a}catch(l){try{a?.close()}catch{}if(Vr(l)?.kind!=="locked"||s>=r)throw l;await new Promise(c=>setTimeout(c,o*2**(s-1)))}}}async function Po(e,t={}){let n=await vo(!1,t);try{return tl(n),nl(n),await e(n)}finally{n.close()}}async function Zt(e,t={}){let n=await vo(!0,t);try{return await e(n)}finally{n.close()}}function ze(e,t){e.exec("BEGIN IMMEDIATE");try{let n=t();return e.exec("COMMIT"),n}catch(n){try{e.exec("ROLLBACK")}catch{}throw n}}var B,Ve,Q,xe,zt,Va,za,Qa,Ye,ko,Z=d(()=>{"use strict";B=require("node:fs"),Ve=require("node:path");pt();Ae();zr();E();Yt();Yt();D();Q=p("DashboardDb"),xe={major:22,minor:13};zt=class extends Error{constructor(t){super(`The Jolli dashboard needs Node >= ${xe.major}.${xe.minor} for built-in SQLite (running ${t}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},Va=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],za=["PRAGMA foreign_keys = ON"],Qa=2e3;Ye=new Set,ko="\0unreadable-log"});function en(e){let t=i=>{try{return(0,Le.statSync)(`${e}${i}`),!0}catch{return!1}},n=t(""),r=t("-wal"),o=t("-shm");return n?r&&o?"healthy-active":r?"healthy-recoverable":"healthy-clean":r||o?"alarm-sidecars-only":"absent"}var Le,_p,tn=d(()=>{"use strict";Le=require("node:fs");E();_p=p("DbDetection")});var Mo=d(()=>{"use strict";W()});var Np,Fo=d(()=>{"use strict";E();Mo();$();Np=p("MetadataManager")});function cl(e,t){if(process.env.VITEST)return null;let n=t?`${t}@${e}`:e;try{return j("ssh",["-G",n],{encoding:"utf-8",timeout:sl,stdio:["ignore","pipe","pipe"]})}catch(r){return il.debug("ssh -G %s failed: %s",n,r instanceof Error?r.message:String(r)),null}}function Uo(e,t){let n=new RegExp(`^${t}\\s+(\\S+)`,"i");for(let r of e.split(/\r?\n/)){let o=r.match(n);if(o?.[1])return o[1]}return null}function Qe(e,t){if(!e)return{host:e,port:"",endpointRemapped:!1};let n=`${t??""}\0${e}`,r=Ho.get(n);if(r!==void 0)return r;let o=e,i="",s=ll(e,t);if(s){let c=Uo(s,"hostname");c&&(o=c);let u=Uo(s,"port");u&&(i=u)}let a=al.get(o.toLowerCase()),l=a?{host:a,port:"",endpointRemapped:!0}:{host:o,port:i,endpointRemapped:!1};return Ho.set(n,l),l}function Ze(e){return e.includes(":")&&!e.startsWith("[")?`[${e}]`:e}var il,sl,al,Ho,ll,nn=d(()=>{"use strict";E();W();il=p("SshAliasResolver"),sl=5e3,al=new Map([["ssh.github.com","github.com"],["altssh.gitlab.com","gitlab.com"],["altssh.bitbucket.org","bitbucket.org"]]),Ho=new Map,ll=cl});function rn(e,t){return dl.has(e)?t:""}var Up,$o,dl,jo=d(()=>{"use strict";E();W();Fo();$();nn();Up=p("KBPathResolver"),$o=new Set(["github.com","gitlab.com","bitbucket.org"]),dl=new Set(["github.com","gitlab.com","bitbucket.org"])});async function Ko(e){let t=await C(["config","--get","remote.origin.url"],e),n=t.exitCode===0?t.stdout.trim():"";return n.length===0?Ce(e):ul(n,e)}function ul(e,t){let n=e.trim();if(n.length===0)return Ce(t);let r=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(n);if(r&&!n.includes("://")){let s=Qe(r[2],r[1].slice(0,-1)||void 0),a=s.host.toLowerCase(),l=Bo(a,Wo(r[3])),c=Go("ssh",rn(a,s.port));return`https://${Ze(a)}${c}/${l}`}let o;try{o=new URL(n)}catch{return Ce(t)}let i=o.protocol.replace(/:$/,"").toLowerCase();if(i==="ssh"||i==="git"||i==="http"||i==="https"){let a=i==="ssh"?Qe(o.hostname,o.username||void 0):{host:o.hostname,port:"",endpointRemapped:!1},l=a.host.toLowerCase(),c=Bo(l,Wo(o.pathname.replace(/^\/+/,""))),u=a.endpointRemapped?"":o.port!==""?o.port:a.port,f=i==="ssh"?rn(l,u):u,g=Go(i,f);return`https://${Ze(l)}${g}/${c}`}return Ce(i==="file"?o.pathname:t)}function Ce(e){let t=ye(ee(e));return t.length===0?"file:///":t.startsWith("/")?`file://${t}`:`file:///${t}`}function Wo(e){let t=ye(e);return t.toLowerCase().endsWith(".git")&&(t=t.slice(0,-4)),ye(t)}function Bo(e,t){return $o.has(e)?t.toLowerCase():t}function Go(e,t){return t.length===0?"":e==="ssh"||e==="git"?t===ml[e]?"":`:${t}`:`:${t}`}var ml,qo=d(()=>{"use strict";J();jo();$();nn();ml={ssh:"22",git:"9418"}});async function gl(e){try{let n=await Ko(e);if(n&&!n.startsWith("file:"))return{identity:n,remoteUrl:n}}catch(n){pl.debug("no canonical remote for %s (%s) \u2014 using path identity",e,R(n))}let t=(0,Xo.createHash)("sha256").update(ee(e)).digest("hex").slice(0,32);return{identity:`${fl}${t}`}}async function Oe(e){return gl(await Qn(e))}var Xo,pl,fl,ke=d(()=>{"use strict";Xo=require("node:crypto");qt();J();qo();Te();$();ue();Ae();E();pl=p("RepoRegistry"),fl="local:"});var Yo={};dt(Yo,{hasCutoverRow:()=>Sl,resetCutoverRouterCaches:()=>yl,resolveCutoverRoute:()=>sn,routeMovesOffOrphanBranch:()=>El});function yl(){on.clear()}async function _l(e){let t=on.get(e);if(t!==void 0)return t;let{identity:n}=await Oe(e);return on.set(e,n),n}function El(e){return e?.state==="cutover"||e?.state==="legacy-fenced"}async function Jo(e,t){if(!oe())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let n=en(t);if(n==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(n==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:r}=await import("node:sqlite"),o=new r(t,{readOnly:!0});try{let i=await _l(e),s=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(i);if(!s)return{kind:"no-row"};let a=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(s.id);return a?{kind:"row",record:JSON.parse(a.value)}:{kind:"no-row"}}finally{o.close()}}catch(r){return{kind:"unavailable",reason:R(r)}}}async function Sl(e,t={}){return(await Jo(e,t.dbPath??Ie())).kind==="row"}async function sn(e,t={}){let n=await Ne(e).catch(()=>null),r=await Jo(e,t.dbPath??Ie());return r.kind==="row"?{state:"cutover",record:r.record}:n!==null?r.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:r.reason}:r.kind==="unavailable"?(hl.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",r.reason),{state:"uncutover",warning:r.reason}):{state:"uncutover"}}var hl,on,an=d(()=>{"use strict";ue();E();Z();tn();ke();hl=p("CutoverRouter"),on=new Map});function Ii(){return"0.99.15"}function Di(e){return/^\d/.test(e)}function Li(e,t){if(!Di(e)||!Di(t))return!1;let n=i=>i.split(".").map(s=>Number.parseInt(s,10)||0),r=n(e),o=n(t);for(let i=0;i<Math.max(r.length,o.length);i++){let s=r[i]??0,a=o[i]??0;if(s!==a)return s>a}return!1}function it(e,t=nc){return new Promise(n=>{let r=Buffer.alloc(0),o=!1,i=c=>{o||(o=!0,clearTimeout(l),e.removeListener("data",s),e.removeListener("close",a),e.removeListener("error",a),n(c))},s=c=>{r=Buffer.concat([r,c]);let u=r.indexOf(10);if(u===-1){r.length>rc&&i(void 0);return}i({line:r.subarray(0,u).toString("utf8"),rest:r.subarray(u+1)})},a=()=>i(void 0),l=setTimeout(()=>i(void 0),t);l.unref?.(),e.on("data",s),e.once("close",a),e.once("error",a)})}function Ci(e,t){return(0,ge.join)((0,Ni.tmpdir)(),`.jolli-${e}-${t}`)}function yn(e){return`${JSON.stringify(e)}
`}var hn,Ni,ge,xi,gn,nc,rc,_n=d(()=>{"use strict";hn=require("node:fs"),Ni=require("node:os"),ge=require("node:path"),xi=require("node:url");$();nc=1e4,rc=4096});function sc(e){let t=(0,se.join)((0,se.dirname)((0,Sn.fileURLToPath)(e)),oc);return(0,En.existsSync)(t)?t:void 0}function Tn(e,t=process.argv[1],n=process.execArgv){let r=sc(e);if(r)return{entry:r,nodeArgs:[]};let o=(0,se.dirname)((0,Sn.fileURLToPath)(e)),i=(0,se.join)((0,se.dirname)(o),ic);if(t?.endsWith(".ts")&&(0,En.existsSync)(i))return{entry:i,nodeArgs:n}}var En,se,Sn,oc,ic,Oi=d(()=>{"use strict";En=require("node:fs"),se=require("node:path"),Sn=require("node:url"),oc="Cli.js",ic="Cli.ts"});function lc(e){return Ci("global",e)}function cc(e=(0,vi.homedir)()){return(0,ki.createHash)("sha256").update(Ue(e,"win32")).digest("hex").slice(0,16)}function st(e={}){if((e.platform??process.platform)==="win32")return`\\\\.\\pipe\\jolli-global-${cc(e.home)}`;let n=e.uid??process.getuid?.()??0;return(0,Pi.join)(lc(n),"daemon.sock")}function wn(e){let t;try{t=JSON.parse(e)}catch{return}if(typeof t!="object"||t===null)return;let{t:n,protocol:r,version:o,pid:i,startedAt:s}=t;if(!(n!=="hello"||r!==ac)&&!(typeof o!="string"||typeof i!="number"||typeof s!="number"))return{t:"hello",protocol:r,version:o,pid:i,startedAt:s}}var ki,vi,Pi,ac,bn,Rn,Mi=d(()=>{"use strict";ki=require("node:crypto"),vi=require("node:os"),Pi=require("node:path");_n();$();ac=1,bn="global-daemon",Rn=300});var Ui={};dt(Ui,{GLOBAL_DAEMON_ENSURE_COMMAND:()=>Dn,ensureGlobalDaemon:()=>pc,probeGlobalDaemon:()=>hc,retireGlobalDaemon:()=>gc,shouldSkipGlobalDaemon:()=>Nn,triggerEnsureGlobalDaemon:()=>fc});function Nn(e){return e!==null&&uc.has(e)}function xn(e){return new Promise(t=>{let n=!1,r=(0,Hi.connect)(e),o=s=>{n||(n=!0,clearTimeout(i),r.removeAllListeners("connect"),s.socket===void 0&&r.destroy(),t(s))},i=setTimeout(()=>o({socket:void 0}),dc);i.unref?.(),r.once("connect",()=>o({socket:r})),r.on("error",s=>{if(n){v.warn("global daemon socket error after connect: %s",R(s));return}o({socket:void 0,code:s.code})})})}async function mc(e){if(!e.startsWith("\\\\.\\pipe\\"))try{await(0,Fi.unlink)(e)}catch{}}async function pc(e={}){try{if(Nn(e.command??null))return"skipped-excluded-command";if(!oe(e.nodeVersion??process.versions.node))return"skipped-unsupported-node";let t=e.socketPath??st(),{socket:n,code:r}=await xn(t);if(!n)return r==="ECONNREFUSED"&&await mc(t),(e.spawnDaemon??yc)(t),"spawned";try{let o=await it(n,e.helloTimeoutMs??Rn),i=o?wn(o.line):void 0;if(!i)return"already-running";let s=e.ownVersion??Ii();return Li(s,i.version)?(n.write(yn({t:"retire"})),v.info("retiring global daemon pid %d (v%s < v%s)",i.pid,i.version,s),"retired-incumbent"):"already-running"}finally{n.end()}}catch(t){return v.warn("could not ensure the global daemon: %s",R(t)),"failed"}}function fc(e={}){try{return Nn(e.command??null)||!oe(e.nodeVersion??process.versions.node)?!1:(_c(e.socketPath),!0)}catch(t){return v.warn("could not trigger the global daemon ensure helper: %s",R(t)),!1}}async function gc(e={}){try{let{socket:t}=await xn(e.socketPath??st());return t?(await it(t,Rn),t.write(yn({t:"retire"})),t.end(),!0):!1}catch(t){return v.warn("could not retire the global daemon: %s",R(t)),!1}}async function hc(e){try{let{socket:t}=await xn(e??st());if(!t)return;try{let n=await it(t,5e3);return n?wn(n.line):void 0}finally{t.end()}}catch{return}}function yc(e){let t=Tn(__jmImportMetaUrl);if(!t){v.warn("Cannot locate the CLI entry to spawn the global daemon");return}let n=ne(process.execPath,[...t.nodeArgs,t.entry,bn,"--socket",e],{detached:!0,stdio:"ignore",cwd:(0,An.homedir)()});n.on("error",r=>v.warn("global daemon failed to spawn: %s",R(r))),n.unref(),v.info("spawned global daemon (pid %d)",n.pid??-1)}function _c(e){let t=Tn(__jmImportMetaUrl);if(!t){v.warn("Cannot locate the CLI entry to spawn the global daemon ensure helper");return}let n=[...t.nodeArgs,t.entry,Dn];e&&n.push("--socket",e);let r=ne(process.execPath,n,{detached:!0,stdio:"ignore",cwd:(0,An.homedir)()});r.on("error",o=>v.warn("global daemon ensure helper failed to start: %s",R(o))),r.unref(),v.info("spawned global daemon ensure helper (pid %d)",r.pid??-1)}var Fi,Hi,An,v,Dn,dc,uc,$i=d(()=>{"use strict";Fi=require("node:fs/promises"),Hi=require("node:net"),An=require("node:os");_n();Z();E();Oi();W();Mi();v=p("EnsureGlobalDaemon"),Dn="global-daemon-ensure",dc=200,uc=new Set([bn,Dn,"mcp","mcp-serve","daemon","uninstall","disable"])});var Pc={};dt(Pc,{armSessionStartDeadline:()=>Bi,buildSessionStartContext:()=>Vi,computeLoginReminder:()=>Ki,ensurePluginDefaultProvider:()=>bc,formatRecallSuggestion:()=>Qi,getAuthFailureReminder:()=>Ji,getLoginReminder:()=>qi,main:()=>Yi,warmBriefingCache:()=>wc});module.exports=as(Pc);var L=require("node:fs"),P=require("node:path"),Wi=require("node:url");var he=require("node:fs");var On=require("node:path"),ls="JOLLI_LOCAL_AGENT_CHILD",cs=".jolli-local-agent-child";function kn(e=process.env,t){return e[ls]==="1"?!0:t!==void 0&&(0,he.existsSync)((0,On.join)(t,cs))}pt();We();J();function tr(e){return e.aiProvider==="local-agent"?!0:e.aiProvider==="jolli"?!!e.jolliApiKey:e.aiProvider==="anthropic"?!!(e.apiKey||process.env.ANTHROPIC_API_KEY):!!(e.apiKey||process.env.ANTHROPIC_API_KEY||e.jolliApiKey)}Ae();var Wt={"claude-plugin":{host:"claude",localAgentTool:"claude-code",skillInvocation:"/jolli:<name>"},"codex-plugin":{host:"codex",localAgentTool:"codex",skillInvocation:"$jolli:<name>"},"cursor-plugin":{host:"cursor",localAgentTool:"cursor-agent",skillInvocation:"/jolli-<name>"}},em=Object.keys(Wt);function Bt(e){return e===void 0?void 0:Wt[e]?.localAgentTool}function Gt(e,t){return(e===void 0?void 0:Wt[e]?.skillInvocation)?.replace("<name>",t)}ue();Ae();an();ke();E();J();ue();var et=class extends Error{constructor(t){super(t),this.name="OrphanBranchFrozenError"}},me=class{constructor(t){this.cwd=t;this.kind="orphan-branch"}async readFile(t){return Et(q,t,this.cwd)}async batchReadFiles(t){return St(q,t,this.cwd)}async writeFiles(t,n){if(de())return;if(await Ne(this.cwd??process.cwd()).catch(()=>null)!==null)throw new et("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(an(),Yo));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new et("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await zn(q,t,n,this.cwd)}async listFiles(t){return[...await Tt(q,t,this.cwd)]}async exists(){return yt(q,this.cwd)}async ensure(){await _t(q,this.cwd)}};var _i=require("node:zlib");Z();var hi=require("node:zlib");Re();function Vo(e){return e.version>=4}function Tl(e){return[...e??[]].reverse()}function ve(e){let t=Tl(e.children).flatMap(ve),n=(e.topics??[]).map(r=>({...r,commitDate:e.commitDate,generatedAt:e.generatedAt}));return[...t,...n]}function ln(e){return Vo(e)?(e.topics??[]).map(t=>({...t,commitDate:e.commitDate,generatedAt:e.generatedAt})):ve(e)}function cn(e){let t=[e.commitHash];for(let n of e.children??[])t.push(...cn(n));return t}function pe(e,t){return e.transcripts!==void 0?e.transcripts:cn(e).filter(n=>t.has(n))}E();Z();J();E();E();bt();var dn=class{constructor(){this.slots=8;this.bytesCap=67108864;this.slotsInUse=0;this.bytesInUse=0;this.waiting=[]}get width(){return this.slots}configure(t){t.slots!==void 0&&(this.slots=Math.max(1,Math.floor(t.slots))),t.bytesInFlight!==void 0&&(this.bytesCap=Math.max(0,Math.floor(t.bytesInFlight))),this.pump()}reset(){this.slots=8,this.bytesCap=67108864,this.pump()}async run(t,n){let r=await this.acquire(Math.max(0,t));try{return await n()}finally{this.slotsInUse--,this.bytesInUse-=r,this.pump()}}clamp(t){return Math.min(t,this.bytesCap)}fits(t){return this.slotsInUse<this.slots&&this.bytesInUse+this.clamp(t)<=this.bytesCap}acquire(t){return this.waiting.length===0&&this.fits(t)?Promise.resolve(this.take(t)):new Promise(n=>{this.waiting.push({want:t,wake:n})})}take(t){let n=this.clamp(t);return this.slotsInUse++,this.bytesInUse+=n,n}pump(){for(;this.waiting.length>0&&this.fits(this.waiting[0].want);){let t=this.waiting.shift();t.wake(this.take(t.want))}}},yf=new dn;J();Te();Nt();Re();var bl="local-agent-auth";function zo(e){return e.summaryError===bl}var Qo="sonnet",Zo="inherit",tt={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop",defaultModel:Qo,models:[{id:"haiku",label:"Haiku \u2014 fastest"},{id:Qo,label:"Sonnet \u2014 balanced (default)"},{id:"opus",label:"Opus \u2014 most capable"},{id:Zo,label:"Use Claude Code's own setting"}]},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app",defaultModel:"gpt-5.6-terra",models:[{id:"gpt-5.6-luna",label:"GPT-5.6-Luna \u2014 fastest"},{id:"gpt-5.6-terra",label:"GPT-5.6-Terra \u2014 balanced (default)"},{id:"gpt-5.6-sol",label:"GPT-5.6-Sol \u2014 most capable"},{id:"gpt-5.5",label:"GPT-5.5 \u2014 previous generation"},{id:Zo,label:"Use Codex's own setting"}]},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."}};function nt(e){return tt[e]?.label??"Local agent"}function ei(e){return tt[e]?.loginHint??"Sign in to your local agent CLI."}function ti(e){let t=tt[e]?.separateDesktopApp;return t===void 0?null:`(This login is SEPARATE from ${t} \u2014 ${t} stays signed in on its own.)`}var wf=[...new Set(Object.values(tt).flatMap(e=>(e.models??[]).map(t=>t.id)))];kt();function U(e){return e.generatedAt||e.commitDate}Pt();var Rl;async function wl(e){let t=await ri(e);return t.ok?t.storage:(un.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",t.reason,e),new me(e))}async function Al(e,t){return e??Rl??await wl(t)}var un=p("SummaryStore"),Dl="index.json";async function rt(e,t){return Nl(e,t)}async function Nl(e,t){let n=await Al(t,e),r=await n.readFile(Dl);if(!r)return un.debug("loadIndex: no index.json in %s storage",n.kind??"unknown"),null;try{return JSON.parse(r)}catch(o){return un.error("Failed to parse index.json: %s",o.message),null}}function ni(e){let t=ln(e).map(n=>({title:n.title,...n.decisions!==void 0&&{decisions:n.decisions},...n.category!==void 0&&{category:n.category},...n.importance!==void 0&&{importance:n.importance},...n.filesAffected&&n.filesAffected.length>0&&{filesAffected:n.filesAffected}}));return{commitHash:e.commitHash,...e.recap!==void 0&&{recap:e.recap},...e.ticketId!==void 0&&{ticketId:e.ticketId},...t.length>0&&{topics:t}}}var Rg=p("ProcessedSourceStore");ue();Re();E();var Ng=p("TopicIndexStore");var xl=new Set(["index","processed"]);function si(e){if(!e.startsWith("topics/")||!e.endsWith(".json"))return!1;let t=e.slice(7,-5);return t.length>0&&!t.includes("/")&&!xl.has(t)}var ai=[["summaries/",e=>e.endsWith(".json")],["transcripts/",e=>e.endsWith(".json")],["plans/",e=>e.endsWith(".md")],["notes/",e=>e.endsWith(".md")],["references/",e=>e.endsWith(".md")],["skills/",e=>e.endsWith(".md")],["plan-progress/",e=>e.endsWith(".json")],["topics/",si]],Ig=ai.map(([e])=>e),Lg=Object.fromEntries(ai);E();var Pg=p("TopicPageStore");E();Z();Dt();E();Z();tn();ke();var Wg=p("ImportState");var Bg=10*6e4;ke();E();Z();E();var Xg=p("DashboardScope");var li=new Map;function Il(e){let t=li.get(e);return t||(t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}),li.set(e,t)),t}function Ll(e,t){let n=Il(t).formatToParts(e),r=o=>Number.parseInt(n.find(i=>i.type===o)?.value??"0",10);return{year:r("year"),month:r("month"),day:r("day"),hour:r("hour"),minute:r("minute")}}function ci(e,t){let n=Ll(e,t);return`${n.year}-${String(n.month).padStart(2,"0")}-${String(n.day).padStart(2,"0")}`}var di=`EXISTS (SELECT 1 FROM session_usage_events e0
	                                   WHERE e0.session_event_id = s.event_id)
	                         AND (SELECT COALESCE(SUM(e2.input_tokens + e2.output_tokens + e2.cached_tokens), 0)
	                                FROM session_usage_events e2
	                               WHERE e2.session_event_id = s.event_id)
	                             >= s.input_tokens + s.output_tokens + s.cached_tokens`,zg=`(${di})`,Qg=`NOT (${di})`,mn=`LEFT JOIN commits cm ON cm.repo_id = m.repo_id AND cm.hash = m.commit_hash
	  LEFT JOIN (
	      SELECT a.repo_id, a.target_hash, c.hash AS live_hash, MAX(c.committed_at_ms) AS at_ms
	        FROM commit_aliases a
	        JOIN commits c ON c.repo_id = a.repo_id AND c.hash = a.old_hash
	       GROUP BY a.repo_id, a.target_hash
	  ) al ON al.repo_id = m.repo_id AND al.target_hash = m.commit_hash`,pn="COALESCE(cm.committed_at_ms, al.at_ms, m.commit_date_ms)",Zg=`WITH memory_landing AS (
	SELECT m.repo_id, m.commit_hash,
	       COALESCE(cm.hash, al.live_hash, m.commit_hash) AS live_hash,
	       ${pn} AS at_ms
	  FROM memories m
	  ${mn}
	 WHERE m.parent_hash IS NULL
)`,Pe=`SELECT ${pn} AS at_ms
	  FROM memories m
	  ${mn}
	 WHERE m.repo_id = ? AND m.commit_hash = ?`;var ph=p("StatsRollup"),kl={model:!0,agent:!0,project:!0,branch:!0,ticket:!0,category:!0},vl=Object.keys(kl),Pl="built",Ml="tokens";var fh=[...vl,Ml,Pl];function Me(e,t){if(t.length===0)return;let n=e.prepare("SELECT DISTINCT tz FROM stats_daily").all();if(n.length!==0)for(let{tz:r}of n){let o=[...new Set(t.map(i=>ci(i,r)))];e.prepare(`DELETE FROM stats_daily WHERE tz = ? AND day IN (${o.map(()=>"?").join(", ")})`).run(r,...o)}}var Fl=p("SotImport");function G(e){if(e==null)return null;try{return JSON.parse(e)}catch{return null}}function ui(e){let t=/^#\s+(.+)$/m.exec(e);return t?t[1].trim():null}var Hl=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}];function mi(e,t,n){for(let{path:r,accepts:o}of Hl){let i=e;for(let a of r){if(i==null||typeof i!="object"){i=void 0;break}i=i[a]}i==null||(o==="integer"?Number.isInteger(i):typeof i=="number")||n("off-type numeric",`${t}.${r.join(".")} is ${typeof i} (${JSON.stringify(i)}) \u2014 column reads NULL`)}}function pi(e,t,n,r){let o=Date.parse(e.commitDate??"");return Number.isFinite(o)?o:(r("commit date",`${t} has no parsable commitDate \u2014 falling back to first-seen time`),n)}function fi(e,t,n,r,o){let i=e.prepare(Pe),s=e.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(t,n)?.target_hash,a=s!==void 0&&s!==r?[r,s]:[r],l=f=>i.get(t,f)?.at_ms??void 0,c=[],u=!1;for(let f of a){let g=i.get(t,f);f===r&&(u=g!==void 0),g?.at_ms!=null&&c.push(g.at_ms)}if(!u)return{stored:!1,days:[]};e.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
		 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(t,n,r,o);for(let f of a){let g=l(f);g!==void 0&&c.push(g)}return s!==void 0&&s!==r&&Fl.info("alias %s retargeted %s -> %s",n,s,r),{stored:!0,days:c}}function gi(e,t){let n=e.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(t),r=new Map,o=[];for(let l of n)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=r.get(l.parent_hash)??[];c.push(l.commit_hash),r.set(l.parent_hash,c)}let i=e.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),s=new Map(n.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:u}=o.shift();a++;let f=s.get(l);(f.root_hash!==c||f.depth!==u)&&i.run(c,u,t,l);for(let g of r.get(l)??[])o.push({hash:g,root:c,depth:u+1})}if(a!==n.length)throw new Error(`remountRepo: ${n.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}var ie=p("SotWrite"),Ul={plans:"plan",notes:"note",references:"reference",skills:"skill"};function $l(e){let t=[],n=(r,o,i)=>{t.push({hash:r.commitHash,parentInFile:o,pos:i,summary:r}),(r.children??[]).forEach((s,a)=>{n(s,r.commitHash,a)})};return n(e,null,null),t}function jl(e){let t={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let n of e){let r=n.delete===!0,o=n.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(r){t.summaryDeletes.push(o[1]);continue}let c=G(n.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${n.path}`);t.summaryTrees.push($l(c));continue}if(n.path==="index.json"){if(r)continue;let c=G(n.content);for(let u of c?.entries??[])u.treeHash&&t.treeHashes.set(u.commitHash,u.treeHash);for(let[u,f]of Object.entries(c?.commitAliases??{}))t.aliases.set(u,f);continue}if(n.path==="catalog.json")continue;if(n.path==="topics/index.json"){if(r)continue;let c=G(n.content);for(let u of c?.topics??[])u.stableSlug&&u.summary!==void 0&&t.topicSummaries.set(u.stableSlug,u.summary);continue}if(n.path==="topics/processed.json"){t.processedSet=r?null:n.content;continue}if(n.path==="schema-v5-migration.json"){r||(t.v5State=n.content);continue}let i=n.path.match(/^transcripts\/(.+)\.json$/);if(i){r?t.transcriptDeletes.push(i[1]):t.transcriptWrites.push({id:i[1],content:n.content});continue}let s=n.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(s){let c=Ul[s[1]];r?t.contextDeletes.push({kind:c,key:s[2]}):t.contextWrites.push({kind:c,key:s[2],body:n.content});continue}let a=n.path.match(/^plan-progress\/(.+)\.json$/);if(a){r?t.progressDeletes.push(a[1]):t.progressWrites.push({pathSlug:a[1],content:n.content});continue}let l=n.path.match(/^topics\/([^/]+)\.json$/);if(l){r?t.topicPageDeletes.push(l[1]):t.topicPageWrites.push({slug:l[1],content:n.content});continue}throw new Error(`SotWrite: no table backs path ${n.path}`)}return t}function Fe(e,t){ie.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",e,t)}function Wl(e,t,n){let r=/-([0-9a-f]{8})$/.exec(n);return r?e.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(t,r[1])?.branch??null:null}function Bl(e,t,n,r){let o=[];for(let y of n.summaryDeletes){let m=e.prepare(Pe).get(t,y);m?.at_ms!=null&&o.push(m.at_ms),e.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(t,y)}if(Me(e,o),n.summaryTrees.length===0)return;let i=new Set;for(let y of n.summaryTrees)for(let m of y)"children"in m.summary&&i.add(m.hash);let s=e.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let y of i)s.run(t,y);let a=new Map;for(let y of n.summaryTrees)for(let m of y){if(m.parentInFile===null||m.pos===null)continue;let _=a.get(m.parentInFile)??new Map;_.set(m.hash,m.pos),a.set(m.parentInFile,_)}let l=e.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),c=(y,m)=>ie.info("write degraded a value: %s %s",y,m);for(let y of n.summaryTrees)for(let m of y){let _=m.parentInFile,h=m.pos;if(m.parentInFile===null){let w=e.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,m.hash);w&&(_=w.parent_hash,h=w.child_pos,h!==null&&h>=1e6&&((_===null?void 0:a.get(_))?.has(m.hash)||(_=null,h=null)))}let S=JSON.stringify("children"in m.summary?{...m.summary,children:[]}:m.summary);l.run(t,m.hash,_,h,m.hash,0,S,n.treeHashes.get(m.hash)??null,r,r,pi(m.summary,m.hash,r,c)),mi(m.summary,m.hash,c),e.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(t,m.hash);let I=e.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(m.summary.topics??[]).forEach((w,K)=>{if(!w.title){c("topic",`${m.hash}[${K}] has no title`);return}I.run(t,m.hash,K,w.category??null,w.importance??null,w.title)})}let u=e.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`),f=[],g=e.prepare(`SELECT m.commit_hash FROM memories m
		  WHERE m.repo_id = ? AND m.parent_hash = ? AND m.child_pos >= ${1e6}`),b=e.prepare(Pe);for(let y of i){for(let{commit_hash:m}of g.all(t,y)){let _=b.get(t,m);_?.at_ms!=null&&f.push(_.at_ms)}u.run(t,y)}Me(e,f),gi(e,t)}function Gl(e,t,n,r){let o=[];for(let[i,s]of n.aliases){let a=fi(e,t,i,s,r);if(!a.stored){ie.info("dropping alias %s -> %s (no such memory row)",i,s);continue}o.push(...a.days)}Me(e,o)}function Kl(e,t,n,r){let o=new Set;for(let i of n.transcriptDeletes)e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,i),e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,i),e.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,i);for(let{id:i,content:s}of n.transcriptWrites){let a=G(s);if(!a||!Array.isArray(a.sessions)){Fe("transcript",i);continue}e.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(t,i,(0,hi.deflateSync)(Buffer.from(s,"utf8")),r),e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,i);for(let l of a.sessions)l.sessionId&&e.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(t,i,l.sessionId,l.source??null);o.add(i)}return o}function ql(e,t,n,r){if(r.size===0)return;let o=new Set(n.summaryTrees.flat().map(c=>c.hash)),i=new Set(n.summaryTrees.flat().flatMap(c=>[...pe(c.summary,r)])),s=[...r].filter(c=>!i.has(c));if(s.length===0)return;let a=e.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=e.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of s){let u=a.all(t,`%${c}%`);for(let f of u){if(o.has(f.commit_hash))continue;let g=G(f.summary_json);g&&pe(g,r).includes(c)&&(l.run(t,f.commit_hash,c),ie.info("linked stored transcript %s to memory %s written earlier",c,f.commit_hash))}}}function Xl(e,t,n){if(n.summaryTrees.length===0)return;let r=new Set(e.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(t).map(o=>o.transcript_id));for(let o of n.summaryTrees)for(let i of o){let s=[...new Set(pe(i.summary,r).filter(a=>r.has(a)))];for(let a of i.summary.transcripts??[])r.has(a)||ie.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",i.hash,a);e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(t,i.hash);for(let a of s)e.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(t,i.hash,a)}}function Jl(e,t,n,r){for(let{kind:i,key:s}of n.contextDeletes)e.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(t,i,s);let o=e.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:i,key:s,body:a}of n.contextWrites){if(i==="reference"){let u=vt(a);if(!u){Fe("reference frontmatter",`references/${s}.md`);continue}o.run(t,i,s,u.source,u.nativeId,u.toolName,u.referencedAt,null,null,u.title,u.url??null,a,r,r);continue}let l=i==="plan"||i==="note"?Wl(e,t,s):null,c=i==="plan"&&l!==null?s.replace(/-[0-9a-f]{8}$/,""):null;o.run(t,i,s,null,null,null,null,c,l,ui(a),null,a,r,r)}}function Yl(e,t,n,r){for(let o of n.progressDeletes)e.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(t,o);for(let{pathSlug:o,content:i}of n.progressWrites){let s=G(i);if(!s){Fe("plan-progress",`plan-progress/${o}.json`);continue}let a=s.planSlug??o;if(!e.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(t,a)){ie.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}e.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(t,a,i,r)}}function Vl(e,t,n,r){for(let o of n.topicPageDeletes)e.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(t,o);for(let{slug:o,content:i}of n.topicPageWrites){let s=G(i);if(!s?.stableSlug||s.title===void 0||s.content===void 0||!s.lastUpdatedAt){Fe("topic page",`topics/${o}.json`);continue}e.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(t,s.stableSlug,s.title,n.topicSummaries.get(s.stableSlug)??null,s.content,JSON.stringify(s.relatedBranches??[]),s.lastUpdatedAt,s.schemaVersion??1),e.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(t,s.stableSlug),(s.sourceRefs??[]).forEach((a,l)=>{e.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t,s.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,i]of n.topicSummaries){let s=e.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(i,t,o);Number(s.changes)===0&&ie.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(n.processedSet!==null){let o=G(n.processedSet);if(!o?.processed)Fe("processed set","topics/processed.json");else{e.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(t);let i=e.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[s,a]of Object.entries(o.processed))for(let l of a)i.run(t,s,l)}}n.v5State!==null&&e.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(t,n.v5State)}function yi(e,t,n,r){let o=jl(n);ze(e,()=>{e.exec("PRAGMA defer_foreign_keys = ON"),Bl(e,t,o,r),Gl(e,t,o,r);let i=Kl(e,t,o,r);Xl(e,t,o),ql(e,t,o,i),Jl(e,t,o,r),Yl(e,t,o,r),Vl(e,t,o,r)})}E();function Ei(e){let t=new Map;for(let n of e){if(n.parent_hash==null)continue;let r=t.get(n.parent_hash)??[];r.push(n),t.set(n.parent_hash,r)}for(let n of t.values())n.sort((r,o)=>Number(r.child_pos)-Number(o.child_pos));return t}function fn(e,t){let n=JSON.parse(t.summary_json);return"children"in n&&(n.children=(e.get(t.commit_hash)??[]).map(r=>fn(e,r))),n}function zl(e,t,n){let r=e.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,n);if(!r)return;let o=(r.parent_hash===null?e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):e.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(t,r.parent_hash===null?r.root_hash:n),i=o.find(s=>s.commit_hash===n);return i?fn(Ei(o),i):void 0}function Ql(e){if(e===null)return{};try{return{diffStats:JSON.parse(e)}}catch{return{}}}var ot=class{constructor(t,n){this.repoIdentity=t;this.dbPath=n;this.kind="sqlite"}async withDb(t){return Zt(n=>{let r=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!r)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return t(n,r.id)},{dbPath:this.dbPath})}async withDbOrAbsent(t,n){return Zt(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?t(r,o.id):n},{dbPath:this.dbPath})}async readFile(t){return this.withDbOrAbsent((n,r)=>this.readOne(n,r,t),null)}async batchReadFiles(t){return this.withDbOrAbsent((n,r)=>{let o=new Map;for(let i of t)o.set(i,this.readOne(n,r,i));return o},new Map(t.map(n=>[n,null])))}readOne(t,n,r){let o=r.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=zl(t,n,o[1]);return c?JSON.stringify(c,null,"	"):null}if(r==="index.json")return this.synthIndex(t,n);if(r==="catalog.json")return this.synthCatalog(t,n);if(r==="topics/index.json")return this.synthTopicIndex(t,n);if(r==="topics/processed.json")return this.synthProcessed(t,n);if(r==="schema-v5-migration.json")return t.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(n)?.value??null;let i=r.match(/^topics\/([^/]+)\.json$/);if(i)return this.synthTopicPage(t,n,i[1]);let s=r.match(/^transcripts\/(.+)\.json$/);if(s){let c=t.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(n,s[1]);return c?(0,_i.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=r.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return t.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(n,c,a[2])?.body_md??null}let l=r.match(/^plan-progress\/(.+)\.json$/);return l?t.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(n,l[1])?.artifact_json??null:null}allMemories(t,n){return t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n)}synthIndex(t,n){let r=t.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=new Map(t.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(n).map(a=>[a.root,a.n])),i=r.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...Ql(a.diff_stats_json)}})),s=t.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(n);return JSON.stringify({version:3,entries:i,...s.length>0&&{commitAliases:Object.fromEntries(s.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(t,n){let r=this.allMemories(t,n);if(r.length===0)return null;let o=Ei(r),i=r.filter(s=>s.parent_hash===null).map(s=>ni(fn(o,s)));return JSON.stringify({version:1,entries:i},null,"	")}topicRefs(t,n,r){return t.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(n,r).map(i=>({type:i.ref_type,id:i.ref_id,timestamp:i.ts,...i.branch!==null&&{branch:i.branch}}))}synthTopicPage(t,n,r){let o=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(n,r);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(t,n,r),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(t,n){let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=r.map(i=>({stableSlug:i.stable_slug,title:i.title,...i.summary!==null&&{summary:i.summary},relatedBranches:JSON.parse(i.related_branches_json),sourceRefs:this.topicRefs(t,n,i.stable_slug),lastUpdatedAt:i.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(t,n){let r=t.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(n);if(r.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let i of r)o[i.source_type].push(i.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(t){return this.withDbOrAbsent((n,r)=>{let o=(s,a)=>n.prepare(s).all(r).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",s=>`summaries/${s}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",s=>`transcripts/${s}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",s=>`plans/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",s=>`notes/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",s=>`references/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",s=>`skills/${s}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",s=>`plan-progress/${s}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",s=>`topics/${s}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",s=>s)].filter(s=>s.startsWith(t)).sort()},[])}async writeFiles(t,n){de()||await Po(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);yi(r,o.id,t,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(n),o=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(n);return{memoriesCount:r.n,memoriesNewestMs:r.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(t){return this.withDbOrAbsent((n,r)=>n.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(r,t)?.target_hash??null,null)}async findShallowestByTreeHash(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(r,t)?.commit_hash??null,null)}async findHashesByPrefix(t){return/^[0-9a-f]+$/.test(t)?this.withDbOrAbsent((n,r)=>n.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(r,t).map(i=>i.commit_hash),[]):[]}async listHeadEntries(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${t!==void 0?" AND branch = ?":""}`).all(...t!==void 0?[r,t]:[r]).map(i=>({commitHash:i.commit_hash,parentCommitHash:null,...i.tree_hash!==null?{treeHash:i.tree_hash}:{},...i.commit_type!==null?{commitType:i.commit_type}:{},commitMessage:i.commit_message??"",commitDate:i.commit_date??"",branch:i.branch??"",generatedAt:i.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(n),o=new Map;for(let i of r){let s=o.get(i.commit_hash)??[];s.push(i.title),o.set(i.commit_hash,s)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(n),o=t.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(n),i=new Map;for(let s of o){let a=i.get(s.stable_slug)??[];a.push(s.ref_type),i.set(s.stable_slug,a)}return r.map(s=>({stableSlug:s.stable_slug,title:s.title,summary:s.summary,content:s.content_md,relatedBranches:JSON.parse(s.related_branches_json),lastUpdatedAt:s.last_updated_at,refTypes:i.get(s.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((t,n)=>t.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(n).map(o=>this.readOne(t,n,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}};var Zl=3e3,Si=new Map;async function Ti(e){let t=Date.now(),n=Si.get(e);if(n&&t-n.at<Zl)return n.route;let r=await sn(e);return Si.set(e,{route:r,at:t}),r}async function bi(e,t,n){if(n.state==="legacy-fenced"||n.state==="cutover"){let{identity:r}=await Oe(t);return new ot(r)}return new me(e)}async function Ri(e){let t=e??process.cwd(),n=await Ti(t);if(n.state==="blocked")throw new Error(`storage unavailable: ${n.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return bi(e,t,n)}async function ri(e){let t=e??process.cwd(),n;try{n=await Ti(t)}catch(r){return{ok:!1,reason:r.message}}if(n.state==="blocked")return{ok:!1,reason:n.reason};try{return{ok:!0,state:n.state,storage:await bi(e,t,n)}}catch(r){return{ok:!1,reason:r.message}}}E();W();function ec(e){return[`1) Re-authenticate ${nt(e)}:  ${ei(e)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function tc(e,t){let n=ti(e);return n===null?[]:[`${t}${n}`]}function wi(e){return[`[Jolli Memory] Memory generation failed for a recent commit: ${nt(e)} authentication expired or is unavailable.`,...tc(e,""),"\u2192 Fix with either:",...ec(e).map(t=>`    ${t}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}function Ai(){return new Promise((e,t)=>{let n=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",r=>n.push(r)),process.stdin.on("end",()=>{process.stdin.destroy(),e(n.join(""))}),process.stdin.on("error",t)})}var O=p("SessionStartHook"),Ec=new Set(["main","master","develop","development","staging","production"]),at=500,Sc=250;function Bi(e=at+Sc){let t=setTimeout(()=>process.exit(0),e);return t.unref(),t}var Gi="login-reminder-dismissed";function Tc(e){let t=Gt(e,"init");return t===void 0?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${`Run ${t} to finish setup.`}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${Gi}.)`].join(`
`)}function Ki(e,t,n){return t||n?null:Tc(e)}async function bc(e,t){let n=Bt(e);if(n===void 0||t.aiProvider!==void 0)return!1;try{let r=await $t(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",...o.localAgentTool===void 0?{localAgentTool:n}:{}},result:o.localAgentTool??n}:{update:null,result:void 0});return r===void 0?(O.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",e),!1):(O.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",r,e),!0)}catch(r){return O.info("Failed to seed default local-agent provider: %s",r.message),!1}}async function qi(e,t=mt()){let n=await jt(),r=tr(n),o=(0,P.join)(e,".jolli","jollimemory",Gi),i=(0,L.existsSync)(o);if(r&&i)try{(0,L.rmSync)(o)}catch{}return Ki(t,r,i)}async function Xi(e,t){return(await Ri(t)).readFile(`summaries/${e}.json`)}async function Rc(e,t){try{let n=await Xi(e,t);return n?zo(JSON.parse(n)):!1}catch(n){return O.info("Failed to check auth-failure state for %s: %s",e.substring(0,8),n.message),!1}}async function Ji(e,t=mt()){let n=Bt(t);if(n===void 0)return null;let r=ts(e);if(!r)return null;let o=await rt(e);if(!o)return null;let i=o.entries.filter(l=>l.branch===r&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(i.length===0)return null;let s=[...i].sort((l,c)=>new Date(U(c)).getTime()-new Date(U(l)).getTime())[0];if(!await Rc(s.commitHash,e))return null;let a=await jt();return wi(a.localAgentTool??n)}async function Yi(){if(kn()){O.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let e=await Ai(),{cwd:t}=JSON.parse(e),n=Vn(t??process.cwd());if(Gn(n),O.info("SessionStartHook invoked (cwd=%s)",n),await Yr(n)){O.info("SessionStart hook skipped \u2014 repository manually disabled");return}let r=await Vi(n,"shared",{includeBriefing:!0,includePluginReminders:!1});r?process.stdout.write(r):O.info("No briefing or reminder generated (skipped or timed out)");let{triggerEnsureGlobalDaemon:o}=await Promise.resolve().then(()=>($i(),Ui));o()}catch(e){O.info("SessionStartHook failed: %s",e.message)}}async function Vi(e,t,n={}){let r=n.includeBriefing!==!1,o=n.includePluginReminders!==!1,[i,s,a]=await Promise.all([r?Promise.race([zi(e,t),In(at)]):Promise.resolve(null),o?Promise.race([Ji(e,t),In(at)]):Promise.resolve(null),o?Promise.race([qi(e,t),In(at)]):Promise.resolve(null)]),l=[s,a,i].filter(c=>!!c);return l.length===0?null:(O.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function wc(e,t="shared"){try{return await zi(e,t)===null?(O.info("Briefing cache not warmed \u2014 nothing to brief on this branch"),!1):(O.info("Briefing cache warmed for the next session start"),!0)}catch(n){return O.info("Briefing cache warm-up failed (non-fatal): %s",n.message),!1}}async function zi(e,t){let n=lt(e),r=ts(e,n);if(!r||Ec.has(r))return null;let o=Lc(e,r,t,n);if(o)return o;let i=await rt(e);if(!i)return null;let s=i.entries.filter(m=>m.branch===r&&(m.parentCommitHash===null||m.parentCommitHash===void 0));if(s.length===0)return null;let a=[...s].sort((m,_)=>new Date(U(_)).getTime()-new Date(U(m)).getTime()),l=a[0],c=a[a.length-1];if(a.length===1&&Oc(U(l)))return null;let u=await Ac(l.commitHash,e),f=Dc(e,r),g=Nc(a),b=xc(r,a,l,c,u,f,g,t),y=es(e,n);return Cc(e,r,y??l.commitHash,b,t),b}async function Ac(e,t){try{let n=await Xi(e,t);if(!n)return{lastTopicTitle:null,keyDecisions:[]};let r=JSON.parse(n),o=ve(r),i=o.length>0?o[o.length-1].title:null,s=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&s.push(a.decisions);return{lastTopicTitle:i,keyDecisions:s}}catch(n){return O.info("Failed to load last summary: %s",n.message),{lastTopicTitle:null,keyDecisions:[]}}}function Dc(e,t){try{let n=(0,P.join)(e,".jolli","jollimemory","plans.json");if(!(0,L.existsSync)(n))return[];let r=JSON.parse((0,L.readFileSync)(n,"utf-8")),o=Wr(r).registry,i=[];for(let s of Object.values(o.plans))!s.commitHash&&s.title&&i.push(s.title);return i}catch{return[]}}function Nc(e){let t=0,n=0,r=0,o=!1;for(let i of e)i.diffStats&&(t+=i.diffStats.filesChanged,n+=i.diffStats.insertions,r+=i.diffStats.deletions,o=!0);return o?{filesChanged:t,insertions:n,deletions:r}:null}function xc(e,t,n,r,o,i,s,a){let l=t.length,c=ji(U(r)),u=ji(U(n)),f=kc(U(n),new Date().toISOString()),g=[];g.push(`[Jolli Memory \u2014 ${e}]`);let b=`${l} commits (${c} ~ ${u})`;s&&(b+=` | ${s.filesChanged} files, +${s.insertions} -${s.deletions}`),g.push(b);let y=o.lastTopicTitle??n.commitMessage;if(g.push(`Last: ${y} (${u})`),o.keyDecisions.length>0){let _=Ic(o.keyDecisions);g.push(`Decisions: ${_}`)}i.length>0&&g.push(`Plans: ${i.join("; ")}`);let m=Qi(f,a);return m&&g.push(m),g.join(`
`)}function Qi(e,t){if(e<=0)return null;let n=Gt(t,"recall")??"`jolli recall`";return e>3?`Warning: ${e} days since last commit. Run ${n} for full context.`:`Tip: run ${n} for full context`}function Ic(e){let n=[],r=0;for(let o of e){let i=o.replace(/[.;]\s*$/,"").trim();if(i.length>200&&(i=`${i.slice(0,199)}\u2026`),r+i.length>200&&n.length>0)break;n.push(i),r+=i.length+2}return n.join("; ")}function Zi(e){return(0,P.join)(e,".jolli","jollimemory","briefing-cache.json")}function Lc(e,t,n,r=lt(e)){let o=Zi(e);if(!(0,L.existsSync)(o))return null;try{let i=JSON.parse((0,L.readFileSync)(o,"utf-8"));if(i.branch!==t||i.clientKind!==n)return null;let s=es(e,r);return!s||i.lastCommitHash!==s?null:i.briefingText}catch{return null}}function Cc(e,t,n,r,o){let i=Zi(e),s={branch:t,lastCommitHash:n,briefingText:r,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,P.dirname)(i);(0,L.existsSync)(a)||(0,L.mkdirSync)(a,{recursive:!0});let l=`${i}.${process.pid}.tmp`;(0,L.writeFileSync)(l,JSON.stringify(s,null,"	"),"utf-8"),(0,L.renameSync)(l,i)}catch{}}function lt(e){return le(e)}function es(e,t=lt(e)){let n=t?Fn(t):null;if(n)return n;try{return j("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function ts(e,t=lt(e)){let n=t?Mn(t):null;if(n)return n;if(t)return null;try{return j("git",["branch","--show-current"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function In(e){return new Promise(t=>{setTimeout(()=>t(null),e).unref()})}function Oc(e){let t=new Date(e),n=new Date;return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate()}function kc(e,t){let n=new Date(e).getTime(),r=new Date(t).getTime();return Math.floor(Math.abs(r-n)/(1e3*60*60*24))}function ji(e){return e?e.split("T")[0]:"unknown"}function vc(){let e=process.argv[1];if(process.env.VITEST||!e||(0,P.resolve)(e)!==(0,P.resolve)((0,Wi.fileURLToPath)(__jmImportMetaUrl)))return!1;let t=(0,P.basename)(e).toLowerCase();return t==="sessionstarthook.js"||t==="sessionstarthook.ts"}vc()&&(Bi(),Yi());0&&(module.exports={armSessionStartDeadline,buildSessionStartContext,computeLoginReminder,ensurePluginDefaultProvider,formatRecallSuggestion,getAuthFailureReminder,getLoginReminder,main,warmBriefingCache});
