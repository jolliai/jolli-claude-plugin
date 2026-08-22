#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var js=Object.create;var $e=Object.defineProperty;var Ws=Object.getOwnPropertyDescriptor;var Bs=Object.getOwnPropertyNames;var Gs=Object.getPrototypeOf,Ks=Object.prototype.hasOwnProperty;var p=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var dt=(e,t)=>{for(var n in t)$e(e,n,{get:t[n],enumerable:!0})},Ln=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of Bs(t))!Ks.call(e,o)&&o!==n&&$e(e,o,{get:()=>t[o],enumerable:!(r=Ws(t,o))||r.enumerable});return e};var Cn=(e,t,n)=>(n=e!=null?js(Gs(e)):{},Ln(t||!e||!e.__esModule?$e(n,"default",{value:e,enumerable:!0}):n,e)),qs=e=>Ln($e({},"__esModule",{value:!0}),e);function ut(){return"claude-plugin"}var ye,mt=p(()=>{"use strict";ye="claude-plugin/1.0.4"});function je(e,t){let n=_e(e.replace(/\\/g,"/"));return t==="win32"||t==="darwin"?n.toLowerCase():n}function _e(e){let t=e.length;for(;t>0&&e[t-1]==="/";)t--;return t===e.length?e:e.slice(0,t)}function z(e){return e.replace(/\\/g,"/")}var F=p(()=>{"use strict"});function zs(e){return Vs.some(t=>(e[t]??"")!=="")}function Q(e){try{return(0,oe.readFileSync)(e,"utf-8")}catch{return null}}function pt(e){try{return(0,oe.realpathSync)(e)}catch{return(0,w.resolve)(e)}}function We(e){try{return(0,oe.statSync)(e).isDirectory()}catch{return!1}}function In(e,t){let n=Q((0,w.join)(e,"HEAD"))?.trim();return!n||!(Be.test(n)||Qs.test(n))?!1:We((0,w.join)(t,"objects"))&&We((0,w.join)(t,"refs"))}function Zs(e,t,n){let r=/^gitdir:\s*(.+)$/m.exec(t);if(!r)return null;let o=r[1].trim();if(!o)return null;let s=(0,w.isAbsolute)(o)?o:(0,w.resolve)(e,o);return We(s)?n?pt(s):s:null}function On(e,t){let n=Q((0,w.join)(e,"commondir"))?.trim();if(!n)return e;let r=(0,w.isAbsolute)(n)?n:(0,w.resolve)(e,n);return t?pt(r):r}function se(e,t={}){let{env:n=process.env,realpath:r=!1}=t;if(zs(n))return null;let o=r?pt(e):(0,w.resolve)(e);for(;;){let s=(0,w.join)(o,".git");if(We(s)){let l=On(s,r);return In(s,l)?{worktreeRoot:o,gitDir:s,commonDir:l}:null}let i=Q(s);if(i!==null){let l=Zs(o,i,r);if(l===null)return null;let c=On(l,r);return In(l,c)?{worktreeRoot:o,gitDir:l,commonDir:c}:null}let a=(0,w.dirname)(o);if(a===o)return null;o=a}}function Pn(e){let t=Q((0,w.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;let n=/^ref:\s*refs\/heads\/(.+)$/.exec(t);return n&&n[1].trim()||null}function ti(e){return ei.test(e)&&!e.split("/").includes("..")}function ni(e,t){let n=Q((0,w.join)(e,"packed-refs"));if(n===null)return null;for(let r of n.split(`
`)){if(!r||r.startsWith("#")||r.startsWith("^"))continue;let o=r.indexOf(" ");if(!(o<=0)&&r.slice(o+1).trim()===t){let s=r.slice(0,o).trim();return Be.test(s)?s:null}}return null}function Mn(e){let t=Q((0,w.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;if(Be.test(t))return t;let n=/^ref:\s*(.+)$/.exec(t);if(!n)return null;let r=n[1].trim();if(!ti(r))return null;for(let o of e.gitDir===e.commonDir?[e.gitDir]:[e.gitDir,e.commonDir]){let s=Q((0,w.join)(o,r))?.trim();if(s&&Be.test(s))return s;let i=ni(o,r);if(i)return i}return null}var oe,w,Vs,Be,Qs,ei,Ge=p(()=>{"use strict";oe=require("node:fs"),w=require("node:path");F();Vs=["GIT_DIR","GIT_WORK_TREE","GIT_COMMON_DIR"];Be=/^[0-9a-f]{40}$|^[0-9a-f]{64}$/,Qs=/^ref:\s*refs\//;ei=/^refs\/[A-Za-z0-9._\-/]+$/});function Hn(){return ri.getStore()?.traceId}var Fn,Sc,ri,Un=p(()=>{"use strict";Fn=require("node:async_hooks"),Sc="0".repeat(32),ri=new Fn.AsyncLocalStorage});function b(e){return e instanceof Error?e.message:String(e)}function ft(e){return e instanceof Error&&e.code==="ENOENT"}function Bn(e){Wn=e}function ae(){return Gn}function di(e,t){let n=li[t]??ai;return $n[e]>=$n[n]}function ui(e,t,n,r,o){let s=new Date().toISOString(),i=e.toUpperCase().padEnd(5),a=n,l=0;a=a.replace(/%[sdj]/g,u=>{if(l>=r.length)return u;let d=r[l++];return u==="%d"?String(Number(d)):u==="%j"?JSON.stringify(d):String(d)});let c=o?` [trace=${o}]`:"";return`[${s}] ${i} [${t}]${c} ${a}`}function I(e){let t=e??Wn??process.cwd();return(0,ie.join)(t,oi,si)}function Ee(e){return String(e).padStart(2,"0")}async function gi(e,t){let n=new Date,r=`${n.getUTCFullYear()}-${Ee(n.getUTCMonth()+1)}-${Ee(n.getUTCDate())}_${Ee(n.getUTCHours())}-${Ee(n.getUTCMinutes())}-${Ee(n.getUTCSeconds())}`;try{let o=(0,ie.join)(e,`debug_${r}.log`);for(let s=1;await hi(o);s++)o=(0,ie.join)(e,`debug_${r}_${s}.log`);await(0,C.rename)(t,o)}catch{return}try{let o=(await(0,C.readdir)(e)).filter(s=>fi.test(s)).sort();for(let s=0;s<o.length-pi;s++)await(0,C.unlink)((0,ie.join)(e,o[s])).catch(()=>{})}catch{}}async function hi(e){try{return await(0,C.stat)(e),!0}catch{return!1}}function yi(e){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||Gn||(jn=jn.then(async()=>{try{let t=I(),n=(0,ie.join)(t,ii);await(0,C.stat)(t);try{(await(0,C.stat)(n)).size>mi&&await gi(t,n)}catch{}await(0,C.appendFile)(n,`${e}
`,"utf-8")}catch{}}))}function g(e){function t(n,r,o){let s=ui(n,e,r,o,Hn());ci&&(n==="info"||n==="debug")||(n==="warn"?console.warn(s):console.error(s)),di(n,e)&&yi(s)}return{debug(n,...r){t("debug",n,r)},info(n,...r){t("info",n,r)},warn(n,...r){t("warn",n,r)},error(n,...r){t("error",n,r)}}}var C,ie,oi,si,ii,G,Wn,Gn,$n,ai,li,ci,jn,mi,pi,fi,E=p(()=>{"use strict";C=require("node:fs/promises"),ie=require("node:path");Un();oi=".jolli",si="jollimemory",ii="debug.log";G="jollimemory/summaries/v3";Gn=!1;$n={debug:0,info:1,warn:2,error:3},ai="info",li={},ci=!0;jn=Promise.resolve(),mi=2*1024*1024,pi=10,fi=/^debug_.*\.log$/});function qe(e,t,n){return(0,Kn.promisify)(K.execFile)(e,t,{...Ke,...n??{}})}function H(e,t,n){return(0,K.execFileSync)(e,t,{...Ke,...n??{}})}var K,Kn,Ke,Z,U=p(()=>{"use strict";K=require("node:child_process"),Kn=require("node:util"),Ke={windowsHide:!0};Z=((e,t,n)=>Array.isArray(t)?(0,K.spawn)(e,t,{...Ke,...n??{}}):(0,K.spawn)(e,{...Ke,...t??{}}))});function bi(){let e={...process.env,LC_ALL:"C"};for(let t of Ti)delete e[t];return e}function Yn(e){return Ri(e)??e}function Ri(e){let t=gt.get(e);if(t!==void 0)return t;let n=se(e,{realpath:!0})?.worktreeRoot;if(n){let o=z(n);return gt.set(e,o),o}let r=null;try{let o=H("git",["rev-parse","--show-toplevel"],{cwd:e,encoding:"utf-8",env:bi(),stdio:["ignore","pipe","pipe"]}).trim();o&&(r=o)}catch{}return gt.set(e,r),r}async function N(e,t){A.debug("git %s%s",t?`[cwd=${t}] `:"",e.join(" "));try{let{stdout:n,stderr:r}=await qe("git",e,{maxBuffer:Ei,env:{...process.env,LC_ALL:"C"},...t!==void 0&&{cwd:t}});return{stdout:n.trimEnd(),stderr:r.trim(),exitCode:0}}catch(n){let r=n,o=typeof r.code=="number"?r.code:r.code==="ENOENT"?127:1,s={stdout:(r.stdout??"").trimEnd(),stderr:(r.stderr??r.message??"").trim(),exitCode:o};return A.debug("git command failed (exit: %d, stderr: %s)",o,s.stderr.substring(0,200)),s}}async function ht(e,t){return(await N(["rev-parse","--verify",`refs/heads/${e}`],t)).exitCode===0}async function yt(e,t){if(await ht(e,t))return;A.info("Creating orphan branch '%s' using plumbing commands",e);let n=JSON.stringify({version:1,entries:[]},null,"	"),r=await Di(n,t);A.debug("Created blob: %s",r);let o=`100644 blob ${r}	index.json
`,s=await Ci(o,t);A.debug("Created tree: %s",s);let i=await N(["commit-tree",s,"-m","Initialize Jolli Memory summaries"],t);if(i.exitCode!==0)throw new Error(`Failed to create commit: ${i.stderr}`);let a=i.stdout.trim();A.debug("Created commit: %s",a);let l=await N(["update-ref",`refs/heads/${e}`,a],t);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);A.info("Orphan branch '%s' created successfully",e)}function Ai(e){let t=e.toLowerCase();return wi.some(n=>t.includes(n))}async function _t(e,t,n){A.debug("Reading file from branch: %s:%s",e,t);let r=await N(["show",`${e}:${t}`],n);return r.exitCode!==0?(Ai(r.stderr)?A.debug("File not found: %s:%s",e,t):A.warn("Read failed for %s:%s (git exit %d): %s",e,t,r.exitCode,r.stderr||"(no stderr)"),null):r.stdout}async function Et(e,t,n){let r=new Map;if(t.length===0)return r;let o=["cat-file","--batch"];return A.debug("git (cat-file --batch stream) %s%s for %d paths",n?`[cwd=${n}] `:"",o.join(" "),t.length),new Promise((s,i)=>{let a=Z("git",o,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),l="",c=Buffer.alloc(0),u=!0,d=0,f=[],T=!1,y=0,m=!1,_=h=>{m||(m=!0,h?i(h):s(r))};a.stderr.on("data",h=>{l+=h.toString()}),a.stdout.on("data",h=>{for(c=Buffer.concat([c,h]);!m;){if(u){let S=c.indexOf(10);if(S<0)return;let x=c.subarray(0,S).toString("utf8");if(c=c.subarray(S+1),y>=t.length){_(new Error(`git cat-file --batch returned extra response: ${x}`));return}let R=t[y];if(y++,x.endsWith(" missing")){r.set(R,null);continue}let B=x.substring(x.lastIndexOf(" ")+1),ct=Number.parseInt(B,10);if(!Number.isFinite(ct)||ct<0){_(new Error(`Unexpected cat-file --batch header for ${R}: ${x}`));return}d=ct,f=[],u=!1,T=!0}if(d>0){if(c.length===0)return;let S=Math.min(d,c.length);if(f.push(c.subarray(0,S)),c=c.subarray(S),d-=S,d>0)return}if(T){if(c.length<1)return;c=c.subarray(1),T=!1;let S=t[y-1];r.set(S,Buffer.concat(f).toString("utf8")),f=[],u=!0}}}),a.on("close",h=>{if(h!==0){_(new Error(`git cat-file --batch failed (exit ${h}): ${l.trim()}`));return}if(y<t.length){_(new Error(`git cat-file --batch returned ${y} of ${t.length} expected responses; stderr=${l.trim()}`));return}_(null)}),a.on("error",h=>{_(h)}),a.stdin.on("error",h=>{_(h)});for(let h of t)a.stdin.write(`${e}:${h}
`);a.stdin.end()})}async function Vn(e,t,n,r){await yt(e,r);let o=await N(["rev-parse",`refs/heads/${e}`],r);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let s=o.stdout.trim();await Ni(e,s,n,t,r);let i=t.filter(l=>!l.delete).length,a=t.filter(l=>l.delete).length;A.info("Updated branch '%s': %d written, %d deleted (via fast-import)",e,i,a)}async function St(e,t,n){A.debug("Listing files in branch %s under prefix '%s'",e,t);let r=await N(["ls-tree","-z","-r","--name-only",e,t],n);if(r.exitCode!==0)return A.debug("Failed to list files (branch may not exist): %s",r.stderr),[];let o=r.stdout.split(Si).filter(s=>s.length>0);return A.debug("Found %d files",o.length),o}async function xi(e){let t=await N(["rev-parse","--git-common-dir"],e);if(t.exitCode!==0)throw new Error(`Failed to get git common dir: ${t.stderr}`);let n=t.stdout.trim();return(0,Se.resolve)(e,n)}async function zn(e){let t=await xi(e);return(0,Se.dirname)(t)}async function Qn(e){let t=await N(["worktree","list","--porcelain"],e);if(t.exitCode!==0)throw new Error(`Failed to list worktrees: ${t.stderr}`);return t.stdout.split(`
`).filter(r=>r.startsWith("worktree ")).map(r=>r.slice(9).trim())}function Zn(e,t,n){return A.debug("git (stdin) %s%s",n?`[cwd=${n}] `:"",e.join(" ")),new Promise((r,o)=>{let s=Z("git",e,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),i="",a="";s.stdout.on("data",l=>{i+=l.toString()}),s.stderr.on("data",l=>{a+=l.toString()}),s.on("close",l=>{l!==0?o(new Error(`git ${e[0]} failed (exit ${l}): ${a.trim()}`)):r(i.trim())}),s.on("error",l=>{o(l)}),s.stdin.write(t),s.stdin.end()})}async function Di(e,t){return Zn(["hash-object","-w","--stdin"],e,t)}async function qn(e,t){let n=await N(["var",e],t);if(n.exitCode!==0)throw new Error(`Failed to read ${e}: ${n.stderr}`);return n.stdout.trim()}async function Ni(e,t,n,r,o){let s=await qn("GIT_AUTHOR_IDENT",o),i=await qn("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];A.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=r.filter(u=>!u.delete),c=r.filter(u=>u.delete);return new Promise((u,d)=>{let f=Z("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),T="";f.stderr.on("data",h=>{T+=h.toString()}),f.on("close",h=>{h!==0?d(new Error(`git fast-import failed (exit ${h}): ${T.trim()}`)):u()}),f.on("error",h=>{d(h)});let y=f.stdin;y.on("error",h=>{d(h)});let m=[];l.forEach((h,S)=>{let x=S+1,R=Buffer.from(h.content,"utf8");m.push(`blob
mark :${x}
data ${R.length}
`,R,`
`)});let _=Buffer.from(n,"utf8");m.push(`commit refs/heads/${e}
`,`author ${s}
`,`committer ${i}
`,`data ${_.length}
`,_,`
`,`from ${t}
`),l.forEach((h,S)=>{m.push(`M 100644 :${S+1} ${Jn(h.path)}
`)});for(let h of c)m.push(`D ${Jn(h.path)}
`);m.push(`done
`),Li(y,m).then(()=>{y.end()},h=>{d(h)})})}async function Li(e,t){for(let n of t)e.write(n)||await(0,Xn.once)(e,"drain")}function Jn(e){return/["\\\n\r]/.test(e)?`"${e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:e}async function Ci(e,t){return Zn(["mktree"],e,t)}var Xn,Se,Ei,Si,A,gt,Ti,wi,q=p(()=>{"use strict";Xn=require("node:events"),Se=require("node:path");E();U();Ge();F();Ei=10*1024*1024,Si="\0",A=g("GitOps"),gt=new Map,Ti=["GIT_DIR","GIT_WORK_TREE","GIT_INDEX_FILE","GIT_COMMON_DIR","GIT_PREFIX","GIT_OBJECT_DIRECTORY","GIT_NAMESPACE"];wi=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});var Tt=p(()=>{"use strict"});async function nr(e,t,n){let r=`${e}.${process.pid}.${(0,tr.randomUUID)()}.tmp`;await(0,ee.writeFile)(r,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n});try{await(0,ee.rename)(r,e)}catch(o){let s=o.code;if(s==="EPERM"||s==="EACCES")await(0,ee.writeFile)(e,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n}),await(0,ee.rm)(r,{force:!0});else throw o}}var tr,ee,rr=p(()=>{"use strict";tr=require("node:crypto"),ee=require("node:fs/promises")});function ki(e){return new Promise(t=>setTimeout(t,e))}function sr(e){let t=Number(e);if(!Number.isInteger(t)||t<=0)return!1;if(t===process.pid)return!0;try{return process.kill(t,0),!0}catch(n){return n.code!=="ESRCH"}}async function bt(e){try{let t=await(0,O.stat)(e),n=Date.now()-t.mtimeMs,r=await ir(e),o=r!==null&&!sr(r);if(!o&&n<or)return!1;o?Te.warn("Removing orphaned lock %s (PID %s no longer running)",e,r):Te.warn("Removing stale lock file %s (age: %dms)",e,n),await(0,O.rm)(e,{force:!0})}catch(t){if(t.code!=="ENOENT")return Te.error("Failed to check lock file %s: %s",e,t.message),!1}try{return await(0,O.writeFile)(e,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function ir(e){try{let n=(await(0,O.readFile)(e,"utf-8")).trim();return n.length>0?n:null}catch{return null}}async function Rt(e,t){let n=await ir(e);if(n!==null&&n!==String(process.pid)){Te.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",t,n,process.pid);return}try{await(0,O.rm)(e,{force:!0})}catch(r){Te.error("Failed to release %s: %s",t,r.message)}}async function wt(e,t){if(t.timeoutMs<=0)return bt(e);let n=Date.now()+t.timeoutMs;for(;;){if(await bt(e))return!0;if(Date.now()>=n)return!1;await ki(t.pollMs)}}var O,Te,or,At=p(()=>{"use strict";O=require("node:fs/promises");E();Te=g("LockPrimitives"),or=300*1e3});var ar,Oc,xt=p(()=>{"use strict";ar=require("node:async_hooks"),Oc=new ar.AsyncLocalStorage});function Oi(e){return qe("git",["rev-parse","--git-common-dir"],{cwd:e})}async function Hi(e){let t=e??process.cwd(),n=cr.get(t);if(n!==void 0)return n;let r;try{let{stdout:o}=await Oi(t),s=o.trim(),i=(0,J.isAbsolute)(s)?s:(0,J.resolve)(t,s);r=(0,J.join)(i,"jollimemory")}catch{dr.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",t),r=I(t)}return cr.set(t,r),r}async function Ui(e){let t=await Hi(e);return await(0,Je.mkdir)(t,{recursive:!0}),t}async function $i(e,t,n,r){let o=r.timeoutMs??Fi,s=r.pollMs??ur;await(0,Je.mkdir)(e,{recursive:!0});let i=(0,J.join)(e,t),a=await wt(i,{timeoutMs:o,pollMs:s});a||dr.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",t,o);try{return await n()}finally{a&&await Rt(i,t)}}async function mr(e,t,n={}){return $i(e,Pi,t,n)}async function pr(e,t,n={}){let r=n.timeoutMs??Mi,o=n.pollMs??ur,s=await Ui(e),i=(0,J.join)(s,lr);if(!await wt(i,{timeoutMs:r,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await Rt(i,lr)}}var Je,J,dr,lr,Pi,Mi,ur,Fi,cr,be=p(()=>{"use strict";Je=require("node:fs/promises"),J=require("node:path");E();U();At();xt();dr=g("Locks");lr="profile.lock",Pi="config.lock",Mi=5e3,ur=25,Fi=5e3,cr=new Map});var Re=p(()=>{"use strict"});var fr=p(()=>{"use strict"});var gr=p(()=>{"use strict"});function hr(e){return Number.isFinite(e)&&e>=0&&e<=1114111&&!(e>=55296&&e<=57343)}function yr(e){return e.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(t,n)=>{if(n.startsWith("#x")){let o=Number.parseInt(n.slice(2),16);return hr(o)?String.fromCodePoint(o):t}if(n.startsWith("#")){let o=Number.parseInt(n.slice(1),10);return hr(o)?String.fromCodePoint(o):t}let r=ji[n];return typeof r=="string"?r:t})}var ji,_r=p(()=>{"use strict";ji={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var Wi,Bi,Er=p(()=>{"use strict";fr();Re();gr();_r();Wi={decodeHtmlEntities:yr,lowercase:e=>e.toLowerCase()},Bi=new Set(Object.keys(Wi))});var Sr=p(()=>{"use strict"});var Tr=p(()=>{"use strict"});var br=p(()=>{"use strict"});var Nt,Gi,Lt,od,Rr=p(()=>{"use strict";Re();Nt=["mcp__Figma__","mcp__figma__"],Gi={get_metadata:"Read structure",get_screenshot:"Viewed screenshot",get_variable_defs:"Read variables",get_figjam:"Read FigJam board",get_design_context:"Read design context"},Lt=Object.keys(Gi),od=new Set(Lt)});var Ki,qi,Ji,wr=p(()=>{"use strict";Rr();Ki="^[0-9a-zA-Z]{22,128}$",qi=Nt.flatMap(e=>Lt.map(t=>`${e}${t}`)),Ji={id:"figma",label:"Figma",icon:"symbol-color",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,titleFallbackPattern:"^Figma file [0-9a-zA-Z]{1,8}$",match:{claude:{prefixes:[...Nt],exact:qi}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileKey"}],require:Ki},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://www\\.figma\\.com/"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"figma-files",itemTag:"file",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Ar=p(()=>{"use strict"});var xr=p(()=>{"use strict"});var Dr=p(()=>{"use strict"});var Nr=p(()=>{"use strict"});var Lr=p(()=>{"use strict"});var Cr=p(()=>{"use strict"});var Ct,Xi,Yi,kt,gd,kr=p(()=>{"use strict";Re();Ct=["mcp__Sentry__","mcp__sentry__"],Xi="get_sentry_resource",Yi="analyze_issue_with_seer",kt=[Xi,Yi],gd=new Set(kt)});var Vi,zi,Qi,Zi,ea,vr=p(()=>{"use strict";kr();Vi=Ct.flatMap(e=>kt.map(t=>`${e}${t}`)),zi="^[A-Za-z0-9.-]{1,253}/[A-Za-z0-9_-]{1,128}$",Qi="^Issue [A-Za-z0-9_-]{1,128}$",Zi="^Issue [0-9]{1,128}$",ea={id:"sentry",label:"Sentry",icon:"bug",trackOnly:!0,argumentsDerived:!0,titleFallbackPattern:Qi,titleFallbackPoorestPattern:Zi,match:{claude:{prefixes:[...Ct],exact:Vi}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"nativeId"}],require:zi},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://(?:[A-Za-z0-9-]{1,63}\\.)*sentry\\.io/issues/[A-Za-z0-9_-]{1,128}$",requireFlags:"i"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[{key:"issue-id",label:"Issue",icon:"bug",pipe:[{op:"path",path:"shortId"}]},{key:"project",label:"Project",icon:"symbol-property",pipe:[{op:"path",path:"project"}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"sentry-issues",itemTag:"issue",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var Ir=p(()=>{"use strict"});var Or=p(()=>{"use strict"});var Pr=p(()=>{"use strict"});var Mr=p(()=>{"use strict"});var Fr=p(()=>{"use strict";Sr();Tr();br();wr();Ar();xr();Dr();Nr();Lr();Cr();vr();Ir();Or();Pr();Mr()});var vt=p(()=>{"use strict";Re();Er();Fr()});function It(e){return sa(e)}function na(e){return e.replace(/^\n+/,"").replace(/\n+$/,"")}function ra(e){let t=e.indexOf(oa);return t===-1?e:e.slice(0,t)}function sa(e){if(typeof e!="string")return null;let t=e.split(`
`);if(t[0]?.trim()!=="---")return null;let n=-1;for(let S=1;S<t.length;S++)if(t[S].trim()==="---"){n=S;break}if(n===-1)return null;let r=t.slice(1,n),o=na(ra(t.slice(n+1).join(`
`))),s={},i=[],a=!1;for(let S of r){if(a){let R=/^\s+- (.+)$/.exec(S);if(R){try{let B=JSON.parse(R[1]);ia(B)&&i.push(B)}catch{}continue}a=!1}if(S.trim()==="fields:"){a=!0;continue}let x=/^([a-zA-Z]+):\s*(.+)$/.exec(S);x&&(s[x[1]]=x[2])}let l=S=>{let x=s[S];if(x!==void 0)try{let R=JSON.parse(x);return typeof R=="string"?R:void 0}catch{return}},c=l("source"),u=l("nativeId");if(c===void 0||u===void 0||!aa(c))return null;let d=c,f=u,T=l("title"),y=l("url"),m=l("referencedAt"),_=l("sourceToolName");return!T||m===void 0||!_?null:{mapKey:`${d}:${f}`,source:d,nativeId:f,title:T,referencedAt:m,toolName:_,...y!==void 0?{url:y}:{},...i.length>0?{fields:i}:{},...o.length>0?{description:o}:{}}}function ia(e){if(typeof e!="object"||e===null)return!1;let t=e;return!(typeof t.key!="string"||typeof t.label!="string"||typeof t.value!="string"||!/^[\w-]+$/.test(t.key)||t.icon!==void 0&&typeof t.icon!="string")}function aa(e){return e.length>0&&/^[\w-]+$/.test(e)}var su,oa,we=p(()=>{"use strict";E();vt();su=g("ReferenceStore");oa="<!-- jolli:auto-note -->"});var Ot=p(()=>{"use strict"});var cu,Hr=p(()=>{"use strict";E();cu=g("SkillStore")});function Ae(){return(0,Xe.join)((0,Ur.homedir)(),".jolli","jollimemory")}async function Ht(e){let t=(0,Xe.join)(e,$r);try{let n=await(0,X.readFile)(t,"utf-8"),r=JSON.parse(n);return la(r)}catch{return Ft.debug("No config file found in %s, using defaults",e),{}}}function la(e){if(e.syncEnabled===void 0)return e;let{syncEnabled:t,...n}=e;return n.autoSyncEnabled===void 0?{...n,autoSyncEnabled:t}:n}function ca(e,t){return!("localAgentTool"in t)||"localAgentPath"in t||(e.localAgentTool??"claude-code")===(t.localAgentTool??"claude-code")||e.localAgentPath===void 0?t:(Ft.info("Clearing localAgentPath (was set for %s, switching to %s)",e.localAgentTool??"claude-code",t.localAgentTool),{...t,localAgentPath:void 0})}async function Ut(e){return da(e,Ae())}async function da(e,t){return mr(t,async()=>{let{update:n,result:r}=e(await Ht(t));return n!==null&&(await ua(n,t),Ft.info("Config saved to %s",t)),r})}async function ua(e,t){let n=await Ht(t),r={...n,...ca(n,e)};await nr((0,Xe.join)(t,$r),JSON.stringify(r,null,"	"))}async function $t(){return Ht(Ae())}function Pt(e,t){let n={...e},r=!1;for(let o of t)o in n&&(delete n[o],r=!0);return{value:n,changed:r}}function jr(e){let t=!1,n={};for(let[i,a]of Object.entries(e.plans??{})){if(a.ignored===!0){t=!0;continue}let l=Pt(a,ma);l.changed&&(t=!0),n[i]=l.value}let r;if(e.notes!==void 0){r={};for(let[i,a]of Object.entries(e.notes)){if(a.ignored===!0){t=!0;continue}let l=Pt(a,pa);l.changed&&(t=!0),r[i]=l.value}}let o;if(e.references!==void 0){o={};for(let[i,a]of Object.entries(e.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){t=!0;continue}let c=Pt(a,fa);c.changed&&(t=!0),o[i]=c.value}}return{registry:{version:1,plans:n,...r!==void 0?{notes:r}:{},...o!==void 0?{references:o}:{},...e.skills!==void 0?{skills:e.skills}:{}},changed:t}}var Mt,X,Ur,Xe,Ft,$r,xu,Du,Nu,Lu,ma,pa,fa,xe=p(()=>{"use strict";Mt=require("node:crypto"),X=require("node:fs/promises"),Ur=require("node:os"),Xe=require("node:path");E();Tt();rr();be();we();Ot();Hr();Ft=g("SessionTracker"),$r="config.json",xu=2880*60*1e3;Du=2880*60*1e3,Nu=10080*60*1e3,Lu=(0,Mt.randomBytes)(4).toString("hex"),ma=["ignored","branch","editCount"],pa=["ignored","branch"],fa=["ignored","branch","commitHash","contentHashAtCommit"]});async function Gt(e,t,n={}){await(0,Y.mkdir)((0,Wr.dirname)(e),{recursive:!0});let r=`${e}.${process.pid}.tmp`;await(0,Y.writeFile)(r,t,n.mode!==void 0?{encoding:"utf-8",mode:n.mode}:"utf-8");try{await(0,Y.rename)(r,e)}catch(o){throw await(0,Y.unlink)(r).catch(()=>{}),o}}var Y,Wr,Kt=p(()=>{"use strict";Y=require("node:fs/promises"),Wr=require("node:path")});function _a(e,t){let n={...e,manuallyDisabled:t};return delete n.userDisabled,n}async function Ea(e){let t=se(e)?.commonDir;if(t)return t;let n=await N(["rev-parse","--git-common-dir"],e),r=n.exitCode===0?n.stdout.trim():"";return r?(0,P.isAbsolute)(r)?r:(0,P.join)(e,r):null}async function Jr(e){let t=await Ea(e);if(t===null)return{profilePath:(0,P.join)(I(e),Br),legacyMarkerPath:null};let n=(0,P.dirname)(t);return{profilePath:(0,P.join)(I(n),Br),legacyMarkerPath:(0,P.join)(t,ga,ha)}}async function Jt(e){try{let t=await(0,De.readFile)(e,"utf-8"),n=JSON.parse(t);return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}catch{return{}}}async function Sa(e){try{return await(0,De.stat)(e),!0}catch{return!1}}async function Ta(e,t){await Gt(e,`${JSON.stringify(t,null,"	")}
`)}function qt(e,t,n,r,o,s){if(e==="read"){let i=`${o}|${t}|${n}`;if(Gr.has(i))return n;Gr.add(i)}return qr.info("manual-disable %s \u2192 %s (by=%s, pid=%d, cwd=%s, profile=%s, raw: userDisabled=%s manuallyDisabled=%s fence=%s)",e,n,t,process.pid,r,o,String(s.userDisabled),String(s.manuallyDisabled),s.cutoverFence?s.cutoverFence.at:"none"),n}function ba(){return(new Error("manual-disable write").stack??"(no stack)").split(`
`).slice(1,8).join(" | ").replace(/\s+/g," ")}async function Ra(e){let t;try{t=await Qn(e)}catch{t=[e]}for(let n of t)if(await Sa((0,P.join)(I(n),ya)))return!0;return!1}async function Xr(e){let{profilePath:t}=await Jr(e),n=await Jt(t);if(n.userDisabled!==void 0){let s=await Kr(e,t,n.userDisabled===!0);return qt("read","migrate:userDisabled",s,e,t,n)}if(n.manuallyDisabled!==void 0)return qt("read","manuallyDisabled",n.manuallyDisabled===!0,e,t,n);let r=await Ra(e),o=await Kr(e,t,r);return qt("read","migrate:legacy-marker",o,e,t,n)}async function Kr(e,t,n){let r=await pr(e,async()=>{let o=await Jt(t),s=o.userDisabled??o.manuallyDisabled,i=s===void 0?n:s===!0;return o.userDisabled===void 0&&o.manuallyDisabled!==void 0||(qr.info("manual-disable MIGRATE \u2192 manuallyDisabled=%s (pid=%d, profile=%s, fence=%s, from=%s) \u2190 %s",i,process.pid,t,o.cutoverFence?o.cutoverFence.at:"none",o.userDisabled!==void 0?"userDisabled":"legacy-marker",ba()),await Ta(t,_a(o,i))),i}).catch(()=>{});return r?.acquired&&r.value!==void 0?r.value:n}async function Ne(e){let{profilePath:t}=await Jr(e);return(await Jt(t)).cutoverFence??null}var De,P,qr,Br,ga,ha,ya,Gr,le=p(()=>{"use strict";De=require("node:fs/promises"),P=require("node:path");E();U();Kt();Ge();q();be();qr=g("RepoProfile"),Br="profile.json",ga="jollimemory",ha="backfill-card-dismissed",ya="disabled-by-user";Gr=new Set});function Yr(e){let t=e,n=t?.message??String(e),r=t?.code;return r==="ENOENT"?null:r==="EACCES"||r==="EPERM"?{kind:"permission",message:n}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(n)?{kind:"corrupt",message:n}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(n)?{kind:"locked",message:n}:/no such table|no such column/i.test(n)?{kind:"schema",message:n}:/SQLITE_CANTOPEN|unable to open/i.test(n)?{kind:"permission",message:n}:{kind:"unknown",message:n}}var Vr=p(()=>{"use strict"});var zr,Qr,Zr,eo,to,no,ro,oo,so,io,ao,lo,co,uo,Xt,mo,po,fo,go,Ye=p(()=>{"use strict";zr=`
-- \u2500\u2500 Metadata \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
CREATE TABLE schema_meta (key TEXT PRIMARY KEY, value TEXT) STRICT;

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
CREATE TABLE repos (
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
CREATE TABLE sessions (
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
CREATE INDEX ix_sessions_repo_time ON sessions(repo_id, updated_at_ms);
CREATE INDEX ix_sessions_time ON sessions(updated_at_ms);
CREATE INDEX ix_sessions_source ON sessions(source);

-- Per-session, per-model split. A session can switch models mid-stream, so
-- sessions.model is a display convenience and THIS is authoritative.
--
-- Keyed on session_event_id rather than an integer: measured at 24 and 114 rows,
-- so the key-shape work that paid for itself on the commits chain would buy
-- nothing here while touching StopHook, the VS Code tick and two projections.
CREATE TABLE session_model_usage (
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
CREATE INDEX ix_smu_model ON session_model_usage(model);

CREATE TABLE session_tool_use (
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
CREATE INDEX ix_stu_kind ON session_tool_use(kind);
CREATE INDEX ix_stu_server ON session_tool_use(server);

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
CREATE TABLE commits (
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
CREATE INDEX ix_commits_repo_time ON commits(repo_id, committed_at_ms);
CREATE INDEX ix_commits_branch ON commits(branch);





-- Branch-name dictionary. Measured: 87 distinct names referenced by 102,767
-- rows, average name length 27.4 bytes, so the names were repeating tens of
-- thousands of times \u2014 one of them 2,098 times by itself.
CREATE TABLE branches (
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
CREATE TABLE commit_branches (
  commit_id INTEGER NOT NULL REFERENCES commits(id)  ON DELETE CASCADE,
  branch_id INTEGER NOT NULL REFERENCES branches(id) ON DELETE CASCADE,
  PRIMARY KEY (commit_id, branch_id)
) STRICT, WITHOUT ROWID;
CREATE INDEX ix_cb_branch ON commit_branches(branch_id, commit_id);

CREATE TABLE commit_files (
  commit_id  INTEGER NOT NULL REFERENCES commits(id) ON DELETE CASCADE,
  path       TEXT NOT NULL,
  insertions INTEGER,
  deletions  INTEGER,
  PRIMARY KEY (commit_id, path)
) STRICT, WITHOUT ROWID;
CREATE INDEX ix_commit_files_path ON commit_files(path);

-- \u2500\u2500 Workspace \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- Transient, latest-wins. A detached HEAD has no branch name; branch_key holds
-- the '' sentinel so the PK stays usable (SQLite treats every NULL as distinct,
-- which would let detached-HEAD rows accumulate without bound).
CREATE TABLE worktree_status (
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
CREATE TABLE events_raw (
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
CREATE INDEX ix_events_pending ON events_raw(projection_status, seq);

-- \u2500\u2500 Gap-recovery cursors \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- A fast path for append-only history plus a rewrite detector \u2014 NOT the
-- correctness mechanism. Adds/changes are handled by idempotent UPSERT and
-- deletes by set reconciliation, because a high-water mark alone misses
-- out-of-order updates, history rewrites and deletions.
CREATE TABLE ingest_cursors (
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
`,Qr=`
CREATE TABLE recall_receipts (
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
CREATE INDEX ix_recall_receipts_repo_at ON recall_receipts(repo_id, at_ms);
`,Zr=`
INSERT INTO context_kinds (kind) VALUES ('skill');
`,eo=`
ALTER TABLE events_raw ADD COLUMN failed_kind TEXT;
`,to=`
ALTER TABLE session_tool_use ADD COLUMN last_call_at_ms INTEGER;
`,no=`
CREATE TABLE session_usage_events (
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
CREATE INDEX ix_sue_at ON session_usage_events(responded_at_ms);
CREATE INDEX ix_sue_sync ON session_usage_events(updated_at_ms);
`,ro=`
ALTER TABLE sessions            ADD COLUMN written_at_ms INTEGER NOT NULL DEFAULT 0;
ALTER TABLE session_model_usage ADD COLUMN updated_at_ms INTEGER NOT NULL DEFAULT 0;
ALTER TABLE session_tool_use    ADD COLUMN updated_at_ms INTEGER NOT NULL DEFAULT 0;
ALTER TABLE recall_receipts     ADD COLUMN updated_at_ms INTEGER NOT NULL DEFAULT 0;

UPDATE sessions        SET written_at_ms = updated_at_ms WHERE written_at_ms = 0;
UPDATE recall_receipts SET updated_at_ms = at_ms         WHERE updated_at_ms = 0;
-- COALESCE is load-bearing twice over: the column is NOT NULL, so a child row
-- whose parent session is missing would abort the migration outright \u2014 and 0 is
-- the right value for it anyway, matching a row that predates the column.
UPDATE session_model_usage
   SET updated_at_ms = COALESCE((SELECT s.updated_at_ms FROM sessions s
                                  WHERE s.event_id = session_model_usage.session_event_id), 0)
 WHERE updated_at_ms = 0;
UPDATE session_tool_use
   SET updated_at_ms = COALESCE((SELECT s.updated_at_ms FROM sessions s
                                  WHERE s.event_id = session_tool_use.session_event_id), 0)
 WHERE updated_at_ms = 0;
`,oo=`
CREATE TABLE schema_migrations (
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
CREATE INDEX ix_schema_migrations_name ON schema_migrations(name, seq);
`,so=`
DROP TRIGGER IF EXISTS repos_no_delete;
`,io=`
CREATE TABLE session_activity (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  bucket_ms        INTEGER NOT NULL,
  recorded_at_ms   INTEGER NOT NULL,
  PRIMARY KEY (session_event_id, bucket_ms)
) STRICT;
CREATE INDEX ix_activity_bucket ON session_activity(bucket_ms);
CREATE INDEX ix_activity_recorded ON session_activity(recorded_at_ms);
`,ao=`
ALTER TABLE session_tool_use ADD COLUMN input_tokens INTEGER;
ALTER TABLE session_tool_use ADD COLUMN output_tokens INTEGER;
ALTER TABLE session_tool_use ADD COLUMN cached_tokens INTEGER;
ALTER TABLE session_tool_use ADD COLUMN usage_confidence TEXT;
`,lo=`
CREATE TABLE skill_invocations (
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
CREATE INDEX ix_si_skill_time ON skill_invocations(skill_name, at_ms);
`,co=`
ALTER TABLE session_tool_use ADD COLUMN plugin TEXT;
`,uo=`
-- Per-repo control state (JSON values): 'orphan-import', 'cutover',
-- 'v5-migration' (the raw bytes of the orphan's schema-v5-migration.json \u2014 a
-- completed-marker whose absence would make the v5 migration re-run), ...
-- Kept out of schema_meta, which is a whole-database singleton. A key-value
-- table rather than columns on \`repos\` because \`cutover\` has to be written in
-- the same transaction as the data it certifies, and because adding a column
-- after release is a cross-surface release event while adding a marker is an
-- INSERT.
CREATE TABLE repo_state (
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
CREATE TABLE memories (
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
CREATE INDEX ix_mem_root   ON memories(repo_id, root_hash);
CREATE INDEX ix_mem_branch ON memories(repo_id, branch, commit_date_ms);
CREATE INDEX ix_mem_date   ON memories(repo_id, commit_date_ms);
CREATE INDEX ix_mem_ticket ON memories(repo_id, ticket_id);

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
CREATE TABLE memory_topics (
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
CREATE INDEX ix_mtopic_category ON memory_topics(repo_id, category);

-- \u2500\u2500 commit aliases (index.json's third top-level key) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
-- A rewritten SHA -> the live memory with the same tree hash. Step 2 of
-- getSummary()'s four-step lookup. Tree-hash matching costs a git subprocess
-- per candidate, so a computed alias is kept forever; in index.json every
-- rebuild path had to remember to copy them across (one of five did not), and a
-- table has no rebuild to forget.
CREATE TABLE commit_aliases (
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
CREATE TABLE transcripts (
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
CREATE TABLE memory_transcripts (
  repo_id       INTEGER NOT NULL,
  commit_hash   TEXT NOT NULL,
  transcript_id TEXT NOT NULL,
  PRIMARY KEY (repo_id, commit_hash, transcript_id),
  FOREIGN KEY (repo_id, commit_hash)
    REFERENCES memories(repo_id, commit_hash) ON DELETE CASCADE,
  FOREIGN KEY (repo_id, transcript_id)
    REFERENCES transcripts(repo_id, transcript_id) ON DELETE CASCADE
) STRICT;
CREATE INDEX ix_mt_transcript ON memory_transcripts(repo_id, transcript_id);

-- Compression makes the sessions invisible to SQL, so the queryable fields are
-- projected out. Uncompressed it would still need this: one session lookup
-- would otherwise parse megabytes of transcript JSON.
CREATE TABLE transcript_sessions (
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
CREATE INDEX ix_ts_session ON transcript_sessions(repo_id, session_id, source);

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
CREATE TABLE context_kinds (kind TEXT PRIMARY KEY) STRICT;
INSERT INTO context_kinds (kind) VALUES ('plan'), ('note'), ('reference');
CREATE TABLE context (
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
CREATE TABLE plan_progress (
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
CREATE TABLE topic_pages (
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
CREATE TABLE topic_source_refs (
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
CREATE INDEX ix_tsr_ref ON topic_source_refs(repo_id, ref_type, ref_id);

CREATE TABLE topic_processed_sources (
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
`,Xt=`
CREATE INDEX IF NOT EXISTS ix_stats_daily_day ON stats_daily(tz, day);
`,mo=`
ALTER TABLE commits ADD COLUMN written_at_ms INTEGER NOT NULL DEFAULT 0;

-- IF NOT EXISTS because an earlier, unreleased build of this branch already
-- created this table on some machines (a developer's own among them) under a
-- migration name this log has no row for. Without the guard, such a database
-- re-runs the entry, dies on "table stats_daily already exists", and every open
-- after that fails until 'doctor --mark-migration' is run by hand.
--
-- The ALTER above cannot be guarded the same way -- SQLite has no
-- ADD COLUMN IF NOT EXISTS -- so a database that also already has that column
-- still needs that repair, which is precisely the state 'doctor
-- --mark-migration' documents itself as existing for. The two statements are
-- deliberately NOT split into separate entries to make each independently
-- markable: the split would leave a machine that has ALREADY applied this entry
-- under this name re-running the ALTER from a new slot, turning a repair anyone
-- can do into a failure everyone gets.
CREATE TABLE IF NOT EXISTS stats_daily (
  -- 0 on the 'built' sentinel, which speaks for the whole day rather than for
  -- one repo; a real repos.id on every data row. No foreign key, for that
  -- reason and because nothing here should cascade: this table is rebuilt, not
  -- maintained, and its delete path is explicit.
  repo_id       INTEGER NOT NULL,
  -- IANA zone the day was cut in. In the key because a day boundary is a
  -- property of the asker: a reader in another zone misses and builds its own
  -- rows rather than reading someone else's days as if they were its own.
  tz            TEXT NOT NULL,
  day           TEXT NOT NULL,           -- local calendar day, YYYY-MM-DD
  -- One of the spend axes, or 'tokens', or the 'built' sentinel.
  --
  -- The sentinel is what separates "this day was computed and had no activity"
  -- from "this day was never computed". Without it every quiet day misses
  -- forever and is recomputed on every request \u2014 the days most likely to be
  -- quiet being exactly the ones a wide range is full of. It is stored ONCE per
  -- day rather than once per repo so that a repo added later cannot leave old
  -- days permanently unavailable: a repo that did not exist contributed
  -- nothing, and when it does contribute, its own write stamp marks the day
  -- stale and the day is rebuilt.
  kind          TEXT NOT NULL,
  -- The series within the kind: a model/branch/ticket name for an axis,
  -- input|output|cached for 'tokens', '' for the sentinel.
  series_key    TEXT NOT NULL,
  -- REAL, not INTEGER: the category and branch axes apportion a commit's tokens
  -- across its topics or branches, so a day's contribution is fractional. The
  -- read path rounds at emission exactly as the live path does.
  value         REAL NOT NULL,
  cost_usd      REAL NOT NULL DEFAULT 0,
  -- When this day was computed. Staleness is "a source row was written after
  -- this", so it is compared against the sources' own write stamps and must
  -- never hold a business time.
  built_at_ms   INTEGER NOT NULL,
  -- Sync stamp, same rule as SYNC_STAMP_DDL's columns.
  updated_at_ms INTEGER NOT NULL,
  PRIMARY KEY (repo_id, tz, day, kind, series_key)
) STRICT, WITHOUT ROWID;
${Xt}
`,po=`
CREATE INDEX IF NOT EXISTS ix_sessions_written ON sessions(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_smu_sync ON session_model_usage(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_stu_sync ON session_tool_use(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_sync ON recall_receipts(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_commits_written ON commits(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_mem_written ON memories(written_at_ms);
`,fo=`
CREATE INDEX IF NOT EXISTS ix_sessions_keyset ON sessions(written_at_ms, event_id);
CREATE INDEX IF NOT EXISTS ix_smu_keyset ON session_model_usage(updated_at_ms, session_event_id, model);
CREATE INDEX IF NOT EXISTS ix_stu_keyset ON session_tool_use(updated_at_ms, session_event_id, tool_name, kind);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_keyset ON recall_receipts(updated_at_ms, receipt_id);
`,go=`
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
`});function ke(){return(0,Ve.join)(Ae(),"jollimemory.db")}function te(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>Ce.major?!0:n<Ce.major?!1:r>=Ce.minor}function de(e){try{let t=e.prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'").get(),n=Number.parseInt(t?.value??"",10);return Number.isFinite(n)?n:0}catch{return 0}}function Da(e){try{return(e.prepare("SELECT COUNT(*) AS n FROM sqlite_master WHERE type = 'table' AND name = 'schema_migrations'").get()?.n??0)>0?"present":"absent"}catch{return"unknown"}}function zt(e){try{return{kind:"rows",rows:e.prepare("SELECT seq, slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl FROM schema_migrations ORDER BY seq").all()}}catch(t){let n=Da(e);return n==="absent"?{kind:"none"}:{kind:"unreadable",reason:b(t),tableConfirmed:n==="present"}}}function ho(e){let t=zt(e);return t.kind==="rows"?t.rows:void 0}function Le(e,t){e.prepare(`INSERT INTO schema_migrations (slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t.slot,t.name,t.outcome,t.appliedBy,t.atMs,t.durationMs,t.ddl)}function Na(e){let t=new Map;for(let n of e){let r=t.get(n.name);(!r||n.seq>r.seq)&&t.set(n.name,n)}return t}function La(e){let t=new Map;for(let n of e){if(n.outcome!=="applied")continue;let r=t.get(n.name);(!r||n.seq>r.seq)&&t.set(n.name,n)}return t}function Ca(e){return ue.findIndex(t=>t.name===e)}function ka(e){let t=zt(e);if(t.kind==="none")return;if(t.kind==="unreadable"){ce.has(yo)||(ce.add(yo),$.warn(t.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`":"the database could not be queried for its migration log (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`",t.reason));return}let n=t.rows,r=new Set(ue.map(o=>o.name));for(let[o,s]of Na(n))r.has(o)||ce.has(o)||(ce.add(o),$.warn("migration %s was touched by %s but is unknown to this build (%s) \u2014 the database has been opened by another build",o,s.applied_by,ye));for(let[o,s]of La(n))r.has(o)&&(ce.has(o)||s.ddl!==ue[Ca(o)].ddl&&(ce.add(o),$.warn("migration %s (slot %d) was applied by %s on %s with DIFFERENT DDL than this build (%s) carries \u2014 run `jolli doctor --schema-log` to see the log",o,s.slot,s.applied_by,new Date(s.applied_at_ms).toISOString().slice(0,10),ye)))}function va(e,t={}){let n=t.now??Date.now,r=t.appliedBy??ye,o=de(e),s=zt(e),i=new Set,a=[];if(s.kind==="rows")for(let d of s.rows)(d.outcome==="applied"||d.outcome==="baseline")&&i.add(d.name);else{let d=Math.min(o,ue.length),f=ue.slice(0,d).map((T,y)=>({slot:y,name:T.name,ddl:T.ddl}));for(let T of f)i.add(T.name);s.kind==="none"?a=f:$.warn(s.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 migrating from the version stamp and recording nothing":"the database could not be queried for its migration log (%s) \u2014 migrating from the version stamp and recording nothing",s.reason)}let l=ue.map((d,f)=>({m:d,slot:f})).filter(({m:d})=>!i.has(d.name));if(l.length===0)return;let c=[],u=()=>{for(let d of a)Le(e,{...d,outcome:"baseline",appliedBy:r,atMs:n(),durationMs:0});a=[];for(let d of c)Le(e,d);c.length=0};e.exec("PRAGMA foreign_keys = OFF");try{for(let{m:d,slot:f}of l){let T=n();e.exec("BEGIN IMMEDIATE");try{let y=ho(e);if(y?.some(h=>h.name===d.name&&(h.outcome==="applied"||h.outcome==="baseline"))){u(),Le(e,{slot:f,name:d.name,outcome:"skipped",appliedBy:r,atMs:n(),durationMs:0,ddl:d.ddl}),e.exec("COMMIT");continue}if(!y&&de(e)>f){e.exec("COMMIT");continue}e.exec(d.ddl);let m={slot:f,name:d.name,outcome:"applied",appliedBy:r,atMs:n(),durationMs:n()-T,ddl:d.ddl};ho(e)?(u(),Le(e,m)):c.push(m);let _=Math.max(de(e),f+1);Ia(e,"schema_version",String(_)),e.exec("COMMIT")}catch(y){try{e.exec("ROLLBACK")}catch{}try{e.prepare("DELETE FROM schema_migrations WHERE name = ? AND outcome = 'failed'").run(d.name),Le(e,{slot:f,name:d.name,outcome:"failed",appliedBy:r,atMs:n(),durationMs:n()-T,ddl:d.ddl})}catch(m){$.debug("could not record the failed migration %s: %s",d.name,b(m))}throw y}}}finally{e.exec("PRAGMA foreign_keys = ON")}$.info("dashboard schema migrated %d \u2192 %d (%s)",o,de(e),l.map(({m:d})=>d.name).join(", "))}function Ia(e,t,n){e.prepare(`INSERT INTO schema_meta (key, value) VALUES (?, ?)
		 ON CONFLICT(key) DO UPDATE SET value = excluded.value`).run(t,n)}function Oa(e){_o!==e&&(_o=e,$.warn("database is at format v%d, this build (%s) reads v%d \u2014 data written by newer builds is not visible here",e,ye,Vt))}function Pa(e){let t=(0,Ve.dirname)(e);try{(0,j.mkdirSync)(t,{recursive:!0,mode:448}),((0,j.statSync)(t).mode&511)!==448&&(0,j.chmodSync)(t,448)}catch(n){$.warn("could not restrict %s to owner-only: %s",t,b(n))}}function Ma(e){for(let t of[e,`${e}-wal`,`${e}-shm`])try{((0,j.statSync)(t).mode&511)!==384&&(0,j.chmodSync)(t,384)}catch(n){ft(n)||$.warn("could not restrict %s to 0600: %s",t,b(n))}}async function Eo(e,t){if(!te())throw new Yt(process.versions.node);let n=t.dbPath??ke(),r=t.maxAttempts??4,o=t.baseDelayMs??50;e||Pa(n);let{DatabaseSync:s}=await import("node:sqlite");for(let i=1;;i++){let a;try{a=new s(n,{readOnly:e});for(let l of e?Aa:wa)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${t.busyTimeoutMs??xa}`),e||Ma(n),a}catch(l){try{a?.close()}catch{}if(Yr(l)?.kind!=="locked"||i>=r)throw l;await new Promise(c=>setTimeout(c,o*2**(i-1)))}}}async function So(e,t={}){let n=await Eo(!1,t);try{let r=de(n);return r>Vt&&Oa(r),ka(n),va(n),await e(n)}finally{n.close()}}async function Qt(e,t={}){let n=await Eo(!0,t);try{return await e(n)}finally{n.close()}}function ze(e,t){e.exec("BEGIN IMMEDIATE");try{let n=t();return e.exec("COMMIT"),n}catch(n){try{e.exec("ROLLBACK")}catch{}throw n}}var j,Ve,$,Vt,Ce,Yt,wa,Aa,xa,ue,ce,yo,_o,V=p(()=>{"use strict";j=require("node:fs"),Ve=require("node:path");mt();xe();Vr();E();Ye();$=g("DashboardDb"),Vt=12,Ce={major:22,minor:13};Yt=class extends Error{constructor(t){super(`The Jolli dashboard needs Node >= ${Ce.major}.${Ce.minor} for built-in SQLite (running ${t}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},wa=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],Aa=["PRAGMA foreign_keys = ON"],xa=2e3,ue=[{name:"BASELINE_DDL",ddl:zr+`
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
CREATE TRIGGER repos_no_delete BEFORE DELETE ON repos
BEGIN SELECT RAISE(ABORT, 'repos are never deleted: set disabled_at instead'); END;
`+uo},{name:"RECALL_RECEIPTS_DDL",ddl:Qr},{name:"SKILL_CONTEXT_KIND_DDL",ddl:Zr},{name:"EVENT_FAILED_KIND_DDL",ddl:eo},{name:"TOOL_CALL_TIME_DDL",ddl:to},{name:"SCHEMA_MIGRATIONS_DDL",ddl:oo},{name:"REPOS_DELETE_ALLOWED_DDL",ddl:so},{name:"SESSION_STATS_SYNC_DDL",ddl:ro+no+mo+Xt+po+fo+go},{name:"SESSION_ACTIVITY_DDL",ddl:io},{name:"SKILL_TOKEN_USAGE_DDL",ddl:ao},{name:"SKILL_INVOCATIONS_DDL",ddl:lo},{name:"SKILL_PLUGIN_DDL",ddl:co}];ce=new Set,yo="\0unreadable-log";_o=0});function Zt(e){let t=s=>{try{return(0,ve.statSync)(`${e}${s}`),!0}catch{return!1}},n=t(""),r=t("-wal"),o=t("-shm");return n?r&&o?"healthy-active":r?"healthy-recoverable":"healthy-clean":r||o?"alarm-sidecars-only":"absent"}var ve,zu,en=p(()=>{"use strict";ve=require("node:fs");E();zu=g("DbDetection")});var To=p(()=>{"use strict";U()});var im,bo=p(()=>{"use strict";E();To();F();im=g("MetadataManager")});function ja(e,t){if(process.env.VITEST)return null;let n=t?`${t}@${e}`:e;try{return H("ssh",["-G",n],{encoding:"utf-8",timeout:Ha,stdio:["ignore","pipe","pipe"]})}catch(r){return Fa.debug("ssh -G %s failed: %s",n,r instanceof Error?r.message:String(r)),null}}function wo(e,t){let n=new RegExp(`^${t}\\s+(\\S+)`,"i");for(let r of e.split(/\r?\n/)){let o=r.match(n);if(o?.[1])return o[1]}return null}function Qe(e,t){if(!e)return{host:e,port:"",endpointRemapped:!1};let n=`${t??""}\0${e}`,r=Ro.get(n);if(r!==void 0)return r;let o=e,s="",i=$a(e,t);if(i){let c=wo(i,"hostname");c&&(o=c);let u=wo(i,"port");u&&(s=u)}let a=Ua.get(o.toLowerCase()),l=a?{host:a,port:"",endpointRemapped:!0}:{host:o,port:s,endpointRemapped:!1};return Ro.set(n,l),l}function Ze(e){return e.includes(":")&&!e.startsWith("[")?`[${e}]`:e}var Fa,Ha,Ua,Ro,$a,tn=p(()=>{"use strict";E();U();Fa=g("SshAliasResolver"),Ha=5e3,Ua=new Map([["ssh.github.com","github.com"],["altssh.gitlab.com","gitlab.com"],["altssh.bitbucket.org","bitbucket.org"]]),Ro=new Map,$a=ja});function nn(e,t){return Wa.has(e)?t:""}var _m,Ao,Wa,xo=p(()=>{"use strict";E();U();bo();F();tn();_m=g("KBPathResolver"),Ao=new Set(["github.com","gitlab.com","bitbucket.org"]),Wa=new Set(["github.com","gitlab.com","bitbucket.org"])});async function Co(e){let t=await N(["config","--get","remote.origin.url"],e),n=t.exitCode===0?t.stdout.trim():"";return n.length===0?Ie(e):Ba(n,e)}function Ba(e,t){let n=e.trim();if(n.length===0)return Ie(t);let r=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(n);if(r&&!n.includes("://")){let i=Qe(r[2],r[1].slice(0,-1)||void 0),a=i.host.toLowerCase(),l=No(a,Do(r[3])),c=Lo("ssh",nn(a,i.port));return`https://${Ze(a)}${c}/${l}`}let o;try{o=new URL(n)}catch{return Ie(t)}let s=o.protocol.replace(/:$/,"").toLowerCase();if(s==="ssh"||s==="git"||s==="http"||s==="https"){let a=s==="ssh"?Qe(o.hostname,o.username||void 0):{host:o.hostname,port:"",endpointRemapped:!1},l=a.host.toLowerCase(),c=No(l,Do(o.pathname.replace(/^\/+/,""))),u=a.endpointRemapped?"":o.port!==""?o.port:a.port,d=s==="ssh"?nn(l,u):u,f=Lo(s,d);return`https://${Ze(l)}${f}/${c}`}return Ie(s==="file"?o.pathname:t)}function Ie(e){let t=_e(z(e));return t.length===0?"file:///":t.startsWith("/")?`file://${t}`:`file:///${t}`}function Do(e){let t=_e(e);return t.toLowerCase().endsWith(".git")&&(t=t.slice(0,-4)),_e(t)}function No(e,t){return Ao.has(e)?t.toLowerCase():t}function Lo(e,t){return t.length===0?"":e==="ssh"||e==="git"?t===Ga[e]?"":`:${t}`:`:${t}`}var Ga,ko=p(()=>{"use strict";q();xo();F();tn();Ga={ssh:"22",git:"9418"}});async function Ja(e){try{let n=await Co(e);if(n&&!n.startsWith("file:"))return{identity:n,remoteUrl:n}}catch(n){Ka.debug("no canonical remote for %s (%s) \u2014 using path identity",e,b(n))}let t=(0,vo.createHash)("sha256").update(z(e)).digest("hex").slice(0,32);return{identity:`${qa}${t}`}}async function Oe(e){return Ja(await zn(e))}var vo,Ka,qa,Pe=p(()=>{"use strict";vo=require("node:crypto");Kt();q();ko();be();F();le();xe();E();Ka=g("RepoRegistry"),qa="local:"});var Oo={};dt(Oo,{hasCutoverRow:()=>Qa,resetCutoverRouterCaches:()=>Ya,resolveCutoverRoute:()=>on,routeMovesOffOrphanBranch:()=>za});function Ya(){rn.clear()}async function Va(e){let t=rn.get(e);if(t!==void 0)return t;let{identity:n}=await Oe(e);return rn.set(e,n),n}function za(e){return e?.state==="cutover"||e?.state==="legacy-fenced"}async function Io(e,t){if(!te())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let n=Zt(t);if(n==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(n==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:r}=await import("node:sqlite"),o=new r(t,{readOnly:!0});try{let s=await Va(e),i=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(s);if(!i)return{kind:"no-row"};let a=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(i.id);return a?{kind:"row",record:JSON.parse(a.value)}:{kind:"no-row"}}finally{o.close()}}catch(r){return{kind:"unavailable",reason:b(r)}}}async function Qa(e,t={}){return(await Io(e,t.dbPath??ke())).kind==="row"}async function on(e,t={}){let n=await Ne(e).catch(()=>null),r=await Io(e,t.dbPath??ke());return r.kind==="row"?{state:"cutover",record:r.record}:n!==null?r.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:r.reason}:r.kind==="unavailable"?(Xa.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",r.reason),{state:"uncutover",warning:r.reason}):{state:"uncutover"}}var Xa,rn,sn=p(()=>{"use strict";le();E();V();en();Pe();Xa=g("CutoverRouter"),rn=new Map});function fs(){return"0.99.14"}function us(e){return/^\d/.test(e)}function gs(e,t){if(!us(e)||!us(t))return!1;let n=s=>s.split(".").map(i=>Number.parseInt(i,10)||0),r=n(e),o=n(t);for(let s=0;s<Math.max(r.length,o.length);s++){let i=r[s]??0,a=o[s]??0;if(i!==a)return i>a}return!1}function st(e,t=Ol){return new Promise(n=>{let r=Buffer.alloc(0),o=!1,s=c=>{o||(o=!0,clearTimeout(l),e.removeListener("data",i),e.removeListener("close",a),e.removeListener("error",a),n(c))},i=c=>{r=Buffer.concat([r,c]);let u=r.indexOf(10);if(u===-1){r.length>Pl&&s(void 0);return}s({line:r.subarray(0,u).toString("utf8"),rest:r.subarray(u+1)})},a=()=>s(void 0),l=setTimeout(()=>s(void 0),t);l.unref?.(),e.on("data",i),e.once("close",a),e.once("error",a)})}function hs(e,t){return(0,ge.join)((0,ms.tmpdir)(),`.jolli-${e}-${t}`)}function hn(e){return`${JSON.stringify(e)}
`}var gn,ms,ge,ps,fn,Ol,Pl,yn=p(()=>{"use strict";gn=require("node:fs"),ms=require("node:os"),ge=require("node:path"),ps=require("node:url");F();Ol=1e4,Pl=4096});function Hl(e){let t=(0,re.join)((0,re.dirname)((0,En.fileURLToPath)(e)),Ml);return(0,_n.existsSync)(t)?t:void 0}function Sn(e,t=process.argv[1],n=process.execArgv){let r=Hl(e);if(r)return{entry:r,nodeArgs:[]};let o=(0,re.dirname)((0,En.fileURLToPath)(e)),s=(0,re.join)((0,re.dirname)(o),Fl);if(t?.endsWith(".ts")&&(0,_n.existsSync)(s))return{entry:s,nodeArgs:n}}var _n,re,En,Ml,Fl,ys=p(()=>{"use strict";_n=require("node:fs"),re=require("node:path"),En=require("node:url"),Ml="Cli.js",Fl="Cli.ts"});function $l(e){return hs("global",e)}function jl(e=(0,Es.homedir)()){return(0,_s.createHash)("sha256").update(je(e,"win32")).digest("hex").slice(0,16)}function it(e={}){if((e.platform??process.platform)==="win32")return`\\\\.\\pipe\\jolli-global-${jl(e.home)}`;let n=e.uid??process.getuid?.()??0;return(0,Ss.join)($l(n),"daemon.sock")}function Rn(e){let t;try{t=JSON.parse(e)}catch{return}if(typeof t!="object"||t===null)return;let{t:n,protocol:r,version:o,pid:s,startedAt:i}=t;if(!(n!=="hello"||r!==Ul)&&!(typeof o!="string"||typeof s!="number"||typeof i!="number"))return{t:"hello",protocol:r,version:o,pid:s,startedAt:i}}var _s,Es,Ss,Ul,Tn,bn,Ts=p(()=>{"use strict";_s=require("node:crypto"),Es=require("node:os"),Ss=require("node:path");yn();F();Ul=1,Tn="global-daemon",bn=300});var ws={};dt(ws,{GLOBAL_DAEMON_ENSURE_COMMAND:()=>An,ensureGlobalDaemon:()=>Kl,probeGlobalDaemon:()=>Xl,retireGlobalDaemon:()=>Jl,shouldSkipGlobalDaemon:()=>xn,triggerEnsureGlobalDaemon:()=>ql});function xn(e){return e!==null&&Bl.has(e)}function Dn(e){return new Promise(t=>{let n=!1,r=(0,Rs.connect)(e),o=i=>{n||(n=!0,clearTimeout(s),r.removeAllListeners("connect"),i.socket===void 0&&r.destroy(),t(i))},s=setTimeout(()=>o({socket:void 0}),Wl);s.unref?.(),r.once("connect",()=>o({socket:r})),r.on("error",i=>{if(n){k.warn("global daemon socket error after connect: %s",b(i));return}o({socket:void 0,code:i.code})})})}async function Gl(e){if(!e.startsWith("\\\\.\\pipe\\"))try{await(0,bs.unlink)(e)}catch{}}async function Kl(e={}){try{if(xn(e.command??null))return"skipped-excluded-command";if(!te(e.nodeVersion??process.versions.node))return"skipped-unsupported-node";let t=e.socketPath??it(),{socket:n,code:r}=await Dn(t);if(!n)return r==="ECONNREFUSED"&&await Gl(t),(e.spawnDaemon??Yl)(t),"spawned";try{let o=await st(n,e.helloTimeoutMs??bn),s=o?Rn(o.line):void 0;if(!s)return"already-running";let i=e.ownVersion??fs();return gs(i,s.version)?(n.write(hn({t:"retire"})),k.info("retiring global daemon pid %d (v%s < v%s)",s.pid,s.version,i),"retired-incumbent"):"already-running"}finally{n.end()}}catch(t){return k.warn("could not ensure the global daemon: %s",b(t)),"failed"}}function ql(e={}){try{return xn(e.command??null)||!te(e.nodeVersion??process.versions.node)?!1:(Vl(e.socketPath),!0)}catch(t){return k.warn("could not trigger the global daemon ensure helper: %s",b(t)),!1}}async function Jl(e={}){try{let{socket:t}=await Dn(e.socketPath??it());return t?(await st(t,bn),t.write(hn({t:"retire"})),t.end(),!0):!1}catch(t){return k.warn("could not retire the global daemon: %s",b(t)),!1}}async function Xl(e){try{let{socket:t}=await Dn(e??it());if(!t)return;try{let n=await st(t,5e3);return n?Rn(n.line):void 0}finally{t.end()}}catch{return}}function Yl(e){let t=Sn(__jmImportMetaUrl);if(!t){k.warn("Cannot locate the CLI entry to spawn the global daemon");return}let n=Z(process.execPath,[...t.nodeArgs,t.entry,Tn,"--socket",e],{detached:!0,stdio:"ignore",cwd:(0,wn.homedir)()});n.on("error",r=>k.warn("global daemon failed to spawn: %s",b(r))),n.unref(),k.info("spawned global daemon (pid %d)",n.pid??-1)}function Vl(e){let t=Sn(__jmImportMetaUrl);if(!t){k.warn("Cannot locate the CLI entry to spawn the global daemon ensure helper");return}let n=[...t.nodeArgs,t.entry,An];e&&n.push("--socket",e);let r=Z(process.execPath,n,{detached:!0,stdio:"ignore",cwd:(0,wn.homedir)()});r.on("error",o=>k.warn("global daemon ensure helper failed to start: %s",b(o))),r.unref(),k.info("spawned global daemon ensure helper (pid %d)",r.pid??-1)}var bs,Rs,wn,k,An,Wl,Bl,As=p(()=>{"use strict";bs=require("node:fs/promises"),Rs=require("node:net"),wn=require("node:os");yn();V();E();ys();U();Ts();k=g("EnsureGlobalDaemon"),An="global-daemon-ensure",Wl=200,Bl=new Set([Tn,An,"mcp","mcp-serve","daemon","uninstall","disable"])});var pc={};dt(pc,{armSessionStartDeadline:()=>Ns,buildSessionStartContext:()=>Ps,computeLoginReminder:()=>Cs,ensurePluginDefaultProvider:()=>ec,formatRecallSuggestion:()=>Fs,getAuthFailureReminder:()=>Is,getLoginReminder:()=>ks,main:()=>Os,warmBriefingCache:()=>nc});module.exports=qs(pc);var D=require("node:fs"),v=require("node:path"),Ds=require("node:url");var he=require("node:fs");var kn=require("node:path"),Js="JOLLI_LOCAL_AGENT_CHILD",Xs=".jolli-local-agent-child";function vn(e=process.env,t){return e[Js]==="1"?!0:t!==void 0&&(0,he.existsSync)((0,kn.join)(t,Xs))}mt();Ge();q();function er(e){return e.aiProvider==="local-agent"?!0:e.aiProvider==="jolli"?!!e.jolliApiKey:e.aiProvider==="anthropic"?!!(e.apiKey||process.env.ANTHROPIC_API_KEY):!!(e.apiKey||process.env.ANTHROPIC_API_KEY||e.jolliApiKey)}xe();var jt={"claude-plugin":{host:"claude",localAgentTool:"claude-code",skillInvocation:"/jolli:<name>"},"codex-plugin":{host:"codex",localAgentTool:"codex",skillInvocation:"$jolli:<name>"},"cursor-plugin":{host:"cursor",localAgentTool:"cursor-agent",skillInvocation:"/jolli-<name>"}},vu=Object.keys(jt);function Wt(e){return e===void 0?void 0:jt[e]?.localAgentTool}function Bt(e,t){return(e===void 0?void 0:jt[e]?.skillInvocation)?.replace("<name>",t)}le();xe();sn();Pe();E();q();le();var et=class extends Error{constructor(t){super(t),this.name="OrphanBranchFrozenError"}},me=class{constructor(t){this.cwd=t;this.kind="orphan-branch"}async readFile(t){return _t(G,t,this.cwd)}async batchReadFiles(t){return Et(G,t,this.cwd)}async writeFiles(t,n){if(ae())return;if(await Ne(this.cwd??process.cwd()).catch(()=>null)!==null)throw new et("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(sn(),Oo));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new et("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await Vn(G,t,n,this.cwd)}async listFiles(t){return[...await St(G,t,this.cwd)]}async exists(){return ht(G,this.cwd)}async ensure(){await yt(G,this.cwd)}};var rs=require("node:zlib");V();var ts=require("node:zlib");we();function Po(e){return e.version>=4}function Za(e){return[...e??[]].reverse()}function Me(e){let t=Za(e.children).flatMap(Me),n=(e.topics??[]).map(r=>({...r,commitDate:e.commitDate,generatedAt:e.generatedAt}));return[...t,...n]}function an(e){return Po(e)?(e.topics??[]).map(t=>({...t,commitDate:e.commitDate,generatedAt:e.generatedAt})):Me(e)}function ln(e){let t=[e.commitHash];for(let n of e.children??[])t.push(...ln(n));return t}function pe(e,t){return e.transcripts!==void 0?e.transcripts:ln(e).filter(n=>t.has(n))}E();V();q();E();E();Tt();var cn=class{constructor(){this.slots=8;this.bytesCap=67108864;this.slotsInUse=0;this.bytesInUse=0;this.waiting=[]}get width(){return this.slots}configure(t){t.slots!==void 0&&(this.slots=Math.max(1,Math.floor(t.slots))),t.bytesInFlight!==void 0&&(this.bytesCap=Math.max(0,Math.floor(t.bytesInFlight))),this.pump()}reset(){this.slots=8,this.bytesCap=67108864,this.pump()}async run(t,n){let r=await this.acquire(Math.max(0,t));try{return await n()}finally{this.slotsInUse--,this.bytesInUse-=r,this.pump()}}clamp(t){return Math.min(t,this.bytesCap)}fits(t){return this.slotsInUse<this.slots&&this.bytesInUse+this.clamp(t)<=this.bytesCap}acquire(t){return this.waiting.length===0&&this.fits(t)?Promise.resolve(this.take(t)):new Promise(n=>{this.waiting.push({want:t,wake:n})})}take(t){let n=this.clamp(t);return this.slotsInUse++,this.bytesInUse+=n,n}pump(){for(;this.waiting.length>0&&this.fits(this.waiting[0].want);){let t=this.waiting.shift();t.wake(this.take(t.want))}}},Ym=new cn;q();be();xt();we();var el="local-agent-auth";function Mo(e){return e.summaryError===el}var Fo="sonnet",Ho="inherit",tt={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop",defaultModel:Fo,models:[{id:"haiku",label:"Haiku \u2014 fastest"},{id:Fo,label:"Sonnet \u2014 balanced (default)"},{id:"opus",label:"Opus \u2014 most capable"},{id:Ho,label:"Use Claude Code's own setting"}]},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app",defaultModel:"gpt-5.6-terra",models:[{id:"gpt-5.6-luna",label:"GPT-5.6-Luna \u2014 fastest"},{id:"gpt-5.6-terra",label:"GPT-5.6-Terra \u2014 balanced (default)"},{id:"gpt-5.6-sol",label:"GPT-5.6-Sol \u2014 most capable"},{id:"gpt-5.5",label:"GPT-5.5 \u2014 previous generation"},{id:Ho,label:"Use Codex's own setting"}]},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."}};function nt(e){return tt[e]?.label??"Local agent"}function Uo(e){return tt[e]?.loginHint??"Sign in to your local agent CLI."}function $o(e){let t=tt[e]?.separateDesktopApp;return t===void 0?null:`(This login is SEPARATE from ${t} \u2014 ${t} stays signed in on its own.)`}var np=[...new Set(Object.values(tt).flatMap(e=>(e.models??[]).map(t=>t.id)))];vt();function M(e){return e.generatedAt||e.commitDate}Ot();var tl;async function nl(e){let t=await Wo(e);return t.ok?t.storage:(dn.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",t.reason,e),new me(e))}async function rl(e,t){return e??tl??await nl(t)}var dn=g("SummaryStore"),ol="index.json";async function rt(e,t){return sl(e,t)}async function sl(e,t){let n=await rl(t,e),r=await n.readFile(ol);if(!r)return dn.debug("loadIndex: no index.json in %s storage",n.kind??"unknown"),null;try{return JSON.parse(r)}catch(o){return dn.error("Failed to parse index.json: %s",o.message),null}}function jo(e){let t=an(e).map(n=>({title:n.title,...n.decisions!==void 0&&{decisions:n.decisions},...n.category!==void 0&&{category:n.category},...n.importance!==void 0&&{importance:n.importance},...n.filesAffected&&n.filesAffected.length>0&&{filesAffected:n.filesAffected}}));return{commitHash:e.commitHash,...e.recap!==void 0&&{recap:e.recap},...e.ticketId!==void 0&&{ticketId:e.ticketId},...t.length>0&&{topics:t}}}var tf=g("ProcessedSourceStore");le();we();E();var sf=g("TopicIndexStore");var il=new Set(["index","processed"]);function Ko(e){if(!e.startsWith("topics/")||!e.endsWith(".json"))return!1;let t=e.slice(7,-5);return t.length>0&&!t.includes("/")&&!il.has(t)}var qo=[["summaries/",e=>e.endsWith(".json")],["transcripts/",e=>e.endsWith(".json")],["plans/",e=>e.endsWith(".md")],["notes/",e=>e.endsWith(".md")],["references/",e=>e.endsWith(".md")],["skills/",e=>e.endsWith(".md")],["plan-progress/",e=>e.endsWith(".json")],["topics/",Ko]],lf=qo.map(([e])=>e),cf=Object.fromEntries(qo);E();var ff=g("TopicPageStore");E();V();At();E();V();en();Pe();var Tf=g("ImportState");var bf=10*6e4;Pe();Ye();E();V();E();var Af=g("DashboardScope");var Jo=new Map;function al(e){let t=Jo.get(e);return t||(t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}),Jo.set(e,t)),t}function ll(e,t){let n=al(t).formatToParts(e),r=o=>Number.parseInt(n.find(s=>s.type===o)?.value??"0",10);return{year:r("year"),month:r("month"),day:r("day"),hour:r("hour"),minute:r("minute")}}function Xo(e,t){let n=ll(e,t);return`${n.year}-${String(n.month).padStart(2,"0")}-${String(n.day).padStart(2,"0")}`}var Yo=`EXISTS (SELECT 1 FROM session_usage_events e0
	                                   WHERE e0.session_event_id = s.event_id)
	                         AND (SELECT COALESCE(SUM(e2.input_tokens + e2.output_tokens + e2.cached_tokens), 0)
	                                FROM session_usage_events e2
	                               WHERE e2.session_event_id = s.event_id)
	                             >= s.input_tokens + s.output_tokens + s.cached_tokens`,Lf=`(${Yo})`,Cf=`NOT (${Yo})`,un=`LEFT JOIN commits cm ON cm.repo_id = m.repo_id AND cm.hash = m.commit_hash
	  LEFT JOIN (
	      SELECT a.repo_id, a.target_hash, c.hash AS live_hash, MAX(c.committed_at_ms) AS at_ms
	        FROM commit_aliases a
	        JOIN commits c ON c.repo_id = a.repo_id AND c.hash = a.old_hash
	       GROUP BY a.repo_id, a.target_hash
	  ) al ON al.repo_id = m.repo_id AND al.target_hash = m.commit_hash`,mn="COALESCE(cm.committed_at_ms, al.at_ms, m.commit_date_ms)",kf=`WITH memory_landing AS (
	SELECT m.repo_id, m.commit_hash,
	       COALESCE(cm.hash, al.live_hash, m.commit_hash) AS live_hash,
	       ${mn} AS at_ms
	  FROM memories m
	  ${un}
	 WHERE m.parent_hash IS NULL
)`,Fe=`SELECT ${mn} AS at_ms
	  FROM memories m
	  ${un}
	 WHERE m.repo_id = ? AND m.commit_hash = ?`;var Gf=g("StatsRollup"),ul={model:!0,agent:!0,project:!0,branch:!0,ticket:!0,category:!0},ml=Object.keys(ul),pl="built",fl="tokens";var Kf=[...ml,fl,pl];function He(e,t){if(t.length===0)return;let n=e.prepare("SELECT DISTINCT tz FROM stats_daily").all();if(n.length!==0)for(let{tz:r}of n){let o=[...new Set(t.map(s=>Xo(s,r)))];e.prepare(`DELETE FROM stats_daily WHERE tz = ? AND day IN (${o.map(()=>"?").join(", ")})`).run(r,...o)}}var gl=g("SotImport");function W(e){if(e==null)return null;try{return JSON.parse(e)}catch{return null}}function Vo(e){let t=/^#\s+(.+)$/m.exec(e);return t?t[1].trim():null}var hl=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}];function zo(e,t,n){for(let{path:r,accepts:o}of hl){let s=e;for(let a of r){if(s==null||typeof s!="object"){s=void 0;break}s=s[a]}s==null||(o==="integer"?Number.isInteger(s):typeof s=="number")||n("off-type numeric",`${t}.${r.join(".")} is ${typeof s} (${JSON.stringify(s)}) \u2014 column reads NULL`)}}function Qo(e,t,n,r){let o=Date.parse(e.commitDate??"");return Number.isFinite(o)?o:(r("commit date",`${t} has no parsable commitDate \u2014 falling back to first-seen time`),n)}function Zo(e,t,n,r,o){let s=e.prepare(Fe),i=e.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(t,n)?.target_hash,a=i!==void 0&&i!==r?[r,i]:[r],l=d=>s.get(t,d)?.at_ms??void 0,c=[],u=!1;for(let d of a){let f=s.get(t,d);d===r&&(u=f!==void 0),f?.at_ms!=null&&c.push(f.at_ms)}if(!u)return{stored:!1,days:[]};e.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
		 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(t,n,r,o);for(let d of a){let f=l(d);f!==void 0&&c.push(f)}return i!==void 0&&i!==r&&gl.info("alias %s retargeted %s -> %s",n,i,r),{stored:!0,days:c}}function es(e,t){let n=e.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(t),r=new Map,o=[];for(let l of n)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=r.get(l.parent_hash)??[];c.push(l.commit_hash),r.set(l.parent_hash,c)}let s=e.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),i=new Map(n.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:u}=o.shift();a++;let d=i.get(l);(d.root_hash!==c||d.depth!==u)&&s.run(c,u,t,l);for(let f of r.get(l)??[])o.push({hash:f,root:c,depth:u+1})}if(a!==n.length)throw new Error(`remountRepo: ${n.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}Ye();var ne=g("SotWrite"),yl={plans:"plan",notes:"note",references:"reference",skills:"skill"};function _l(e){let t=[],n=(r,o,s)=>{t.push({hash:r.commitHash,parentInFile:o,pos:s,summary:r}),(r.children??[]).forEach((i,a)=>{n(i,r.commitHash,a)})};return n(e,null,null),t}function El(e){let t={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let n of e){let r=n.delete===!0,o=n.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(r){t.summaryDeletes.push(o[1]);continue}let c=W(n.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${n.path}`);t.summaryTrees.push(_l(c));continue}if(n.path==="index.json"){if(r)continue;let c=W(n.content);for(let u of c?.entries??[])u.treeHash&&t.treeHashes.set(u.commitHash,u.treeHash);for(let[u,d]of Object.entries(c?.commitAliases??{}))t.aliases.set(u,d);continue}if(n.path==="catalog.json")continue;if(n.path==="topics/index.json"){if(r)continue;let c=W(n.content);for(let u of c?.topics??[])u.stableSlug&&u.summary!==void 0&&t.topicSummaries.set(u.stableSlug,u.summary);continue}if(n.path==="topics/processed.json"){t.processedSet=r?null:n.content;continue}if(n.path==="schema-v5-migration.json"){r||(t.v5State=n.content);continue}let s=n.path.match(/^transcripts\/(.+)\.json$/);if(s){r?t.transcriptDeletes.push(s[1]):t.transcriptWrites.push({id:s[1],content:n.content});continue}let i=n.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(i){let c=yl[i[1]];r?t.contextDeletes.push({kind:c,key:i[2]}):t.contextWrites.push({kind:c,key:i[2],body:n.content});continue}let a=n.path.match(/^plan-progress\/(.+)\.json$/);if(a){r?t.progressDeletes.push(a[1]):t.progressWrites.push({pathSlug:a[1],content:n.content});continue}let l=n.path.match(/^topics\/([^/]+)\.json$/);if(l){r?t.topicPageDeletes.push(l[1]):t.topicPageWrites.push({slug:l[1],content:n.content});continue}throw new Error(`SotWrite: no table backs path ${n.path}`)}return t}function Ue(e,t){ne.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",e,t)}function Sl(e,t,n){let r=/-([0-9a-f]{8})$/.exec(n);return r?e.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(t,r[1])?.branch??null:null}function Tl(e,t,n,r){let o=[];for(let y of n.summaryDeletes){let m=e.prepare(Fe).get(t,y);m?.at_ms!=null&&o.push(m.at_ms),e.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(t,y)}if(He(e,o),n.summaryTrees.length===0)return;let s=new Set;for(let y of n.summaryTrees)for(let m of y)"children"in m.summary&&s.add(m.hash);let i=e.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let y of s)i.run(t,y);let a=new Map;for(let y of n.summaryTrees)for(let m of y){if(m.parentInFile===null||m.pos===null)continue;let _=a.get(m.parentInFile)??new Map;_.set(m.hash,m.pos),a.set(m.parentInFile,_)}let l=e.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),c=(y,m)=>ne.info("write degraded a value: %s %s",y,m);for(let y of n.summaryTrees)for(let m of y){let _=m.parentInFile,h=m.pos;if(m.parentInFile===null){let R=e.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,m.hash);R&&(_=R.parent_hash,h=R.child_pos,h!==null&&h>=1e6&&((_===null?void 0:a.get(_))?.has(m.hash)||(_=null,h=null)))}let S=JSON.stringify("children"in m.summary?{...m.summary,children:[]}:m.summary);l.run(t,m.hash,_,h,m.hash,0,S,n.treeHashes.get(m.hash)??null,r,r,Qo(m.summary,m.hash,r,c)),zo(m.summary,m.hash,c),e.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(t,m.hash);let x=e.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(m.summary.topics??[]).forEach((R,B)=>{if(!R.title){c("topic",`${m.hash}[${B}] has no title`);return}x.run(t,m.hash,B,R.category??null,R.importance??null,R.title)})}let u=e.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`),d=[],f=e.prepare(`SELECT m.commit_hash FROM memories m
		  WHERE m.repo_id = ? AND m.parent_hash = ? AND m.child_pos >= ${1e6}`),T=e.prepare(Fe);for(let y of s){for(let{commit_hash:m}of f.all(t,y)){let _=T.get(t,m);_?.at_ms!=null&&d.push(_.at_ms)}u.run(t,y)}He(e,d),es(e,t)}function bl(e,t,n,r){let o=[];for(let[s,i]of n.aliases){let a=Zo(e,t,s,i,r);if(!a.stored){ne.info("dropping alias %s -> %s (no such memory row)",s,i);continue}o.push(...a.days)}He(e,o)}function Rl(e,t,n,r){let o=new Set;for(let s of n.transcriptDeletes)e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,s),e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,s),e.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,s);for(let{id:s,content:i}of n.transcriptWrites){let a=W(i);if(!a||!Array.isArray(a.sessions)){Ue("transcript",s);continue}e.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(t,s,(0,ts.deflateSync)(Buffer.from(i,"utf8")),r),e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,s);for(let l of a.sessions)l.sessionId&&e.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(t,s,l.sessionId,l.source??null);o.add(s)}return o}function wl(e,t,n,r){if(r.size===0)return;let o=new Set(n.summaryTrees.flat().map(c=>c.hash)),s=new Set(n.summaryTrees.flat().flatMap(c=>[...pe(c.summary,r)])),i=[...r].filter(c=>!s.has(c));if(i.length===0)return;let a=e.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=e.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of i){let u=a.all(t,`%${c}%`);for(let d of u){if(o.has(d.commit_hash))continue;let f=W(d.summary_json);f&&pe(f,r).includes(c)&&(l.run(t,d.commit_hash,c),ne.info("linked stored transcript %s to memory %s written earlier",c,d.commit_hash))}}}function Al(e,t,n){if(n.summaryTrees.length===0)return;let r=new Set(e.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(t).map(o=>o.transcript_id));for(let o of n.summaryTrees)for(let s of o){let i=[...new Set(pe(s.summary,r).filter(a=>r.has(a)))];for(let a of s.summary.transcripts??[])r.has(a)||ne.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",s.hash,a);e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(t,s.hash);for(let a of i)e.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(t,s.hash,a)}}function xl(e,t,n,r){for(let{kind:s,key:i}of n.contextDeletes)e.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(t,s,i);let o=e.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:s,key:i,body:a}of n.contextWrites){if(s==="reference"){let u=It(a);if(!u){Ue("reference frontmatter",`references/${i}.md`);continue}o.run(t,s,i,u.source,u.nativeId,u.toolName,u.referencedAt,null,null,u.title,u.url??null,a,r,r);continue}let l=s==="plan"||s==="note"?Sl(e,t,i):null,c=s==="plan"&&l!==null?i.replace(/-[0-9a-f]{8}$/,""):null;o.run(t,s,i,null,null,null,null,c,l,Vo(a),null,a,r,r)}}function Dl(e,t,n,r){for(let o of n.progressDeletes)e.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(t,o);for(let{pathSlug:o,content:s}of n.progressWrites){let i=W(s);if(!i){Ue("plan-progress",`plan-progress/${o}.json`);continue}let a=i.planSlug??o;if(!e.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(t,a)){ne.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}e.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(t,a,s,r)}}function Nl(e,t,n,r){for(let o of n.topicPageDeletes)e.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(t,o);for(let{slug:o,content:s}of n.topicPageWrites){let i=W(s);if(!i?.stableSlug||i.title===void 0||i.content===void 0||!i.lastUpdatedAt){Ue("topic page",`topics/${o}.json`);continue}e.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(t,i.stableSlug,i.title,n.topicSummaries.get(i.stableSlug)??null,i.content,JSON.stringify(i.relatedBranches??[]),i.lastUpdatedAt,i.schemaVersion??1),e.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(t,i.stableSlug),(i.sourceRefs??[]).forEach((a,l)=>{e.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t,i.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,s]of n.topicSummaries){let i=e.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(s,t,o);Number(i.changes)===0&&ne.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(n.processedSet!==null){let o=W(n.processedSet);if(!o?.processed)Ue("processed set","topics/processed.json");else{e.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(t);let s=e.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[i,a]of Object.entries(o.processed))for(let l of a)s.run(t,i,l)}}n.v5State!==null&&e.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(t,n.v5State)}function ns(e,t,n,r){let o=El(n);ze(e,()=>{e.exec("PRAGMA defer_foreign_keys = ON"),Tl(e,t,o,r),bl(e,t,o,r);let s=Rl(e,t,o,r);Al(e,t,o),wl(e,t,o,s),xl(e,t,o,r),Dl(e,t,o,r),Nl(e,t,o,r)})}E();function os(e){let t=new Map;for(let n of e){if(n.parent_hash==null)continue;let r=t.get(n.parent_hash)??[];r.push(n),t.set(n.parent_hash,r)}for(let n of t.values())n.sort((r,o)=>Number(r.child_pos)-Number(o.child_pos));return t}function pn(e,t){let n=JSON.parse(t.summary_json);return"children"in n&&(n.children=(e.get(t.commit_hash)??[]).map(r=>pn(e,r))),n}function Ll(e,t,n){let r=e.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,n);if(!r)return;let o=(r.parent_hash===null?e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):e.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(t,r.parent_hash===null?r.root_hash:n),s=o.find(i=>i.commit_hash===n);return s?pn(os(o),s):void 0}function Cl(e){if(e===null)return{};try{return{diffStats:JSON.parse(e)}}catch{return{}}}var ot=class{constructor(t,n){this.repoIdentity=t;this.dbPath=n;this.kind="sqlite"}async withDb(t){return Qt(n=>{let r=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!r)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return t(n,r.id)},{dbPath:this.dbPath})}async withDbOrAbsent(t,n){return Qt(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?t(r,o.id):n},{dbPath:this.dbPath})}async readFile(t){return this.withDbOrAbsent((n,r)=>this.readOne(n,r,t),null)}async batchReadFiles(t){return this.withDbOrAbsent((n,r)=>{let o=new Map;for(let s of t)o.set(s,this.readOne(n,r,s));return o},new Map(t.map(n=>[n,null])))}readOne(t,n,r){let o=r.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=Ll(t,n,o[1]);return c?JSON.stringify(c,null,"	"):null}if(r==="index.json")return this.synthIndex(t,n);if(r==="catalog.json")return this.synthCatalog(t,n);if(r==="topics/index.json")return this.synthTopicIndex(t,n);if(r==="topics/processed.json")return this.synthProcessed(t,n);if(r==="schema-v5-migration.json")return t.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(n)?.value??null;let s=r.match(/^topics\/([^/]+)\.json$/);if(s)return this.synthTopicPage(t,n,s[1]);let i=r.match(/^transcripts\/(.+)\.json$/);if(i){let c=t.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(n,i[1]);return c?(0,rs.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=r.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return t.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(n,c,a[2])?.body_md??null}let l=r.match(/^plan-progress\/(.+)\.json$/);return l?t.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(n,l[1])?.artifact_json??null:null}allMemories(t,n){return t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n)}synthIndex(t,n){let r=t.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=new Map(t.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(n).map(a=>[a.root,a.n])),s=r.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...Cl(a.diff_stats_json)}})),i=t.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(n);return JSON.stringify({version:3,entries:s,...i.length>0&&{commitAliases:Object.fromEntries(i.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(t,n){let r=this.allMemories(t,n);if(r.length===0)return null;let o=os(r),s=r.filter(i=>i.parent_hash===null).map(i=>jo(pn(o,i)));return JSON.stringify({version:1,entries:s},null,"	")}topicRefs(t,n,r){return t.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(n,r).map(s=>({type:s.ref_type,id:s.ref_id,timestamp:s.ts,...s.branch!==null&&{branch:s.branch}}))}synthTopicPage(t,n,r){let o=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(n,r);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(t,n,r),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(t,n){let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=r.map(s=>({stableSlug:s.stable_slug,title:s.title,...s.summary!==null&&{summary:s.summary},relatedBranches:JSON.parse(s.related_branches_json),sourceRefs:this.topicRefs(t,n,s.stable_slug),lastUpdatedAt:s.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(t,n){let r=t.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(n);if(r.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let s of r)o[s.source_type].push(s.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(t){return this.withDbOrAbsent((n,r)=>{let o=(i,a)=>n.prepare(i).all(r).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",i=>`summaries/${i}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",i=>`transcripts/${i}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",i=>`plans/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",i=>`notes/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",i=>`references/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",i=>`skills/${i}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",i=>`plan-progress/${i}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",i=>`topics/${i}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",i=>i)].filter(i=>i.startsWith(t)).sort()},[])}async writeFiles(t,n){ae()||await So(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);ns(r,o.id,t,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(n),o=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(n);return{memoriesCount:r.n,memoriesNewestMs:r.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(t){return this.withDbOrAbsent((n,r)=>n.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(r,t)?.target_hash??null,null)}async findShallowestByTreeHash(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(r,t)?.commit_hash??null,null)}async findHashesByPrefix(t){return/^[0-9a-f]+$/.test(t)?this.withDbOrAbsent((n,r)=>n.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(r,t).map(s=>s.commit_hash),[]):[]}async listHeadEntries(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${t!==void 0?" AND branch = ?":""}`).all(...t!==void 0?[r,t]:[r]).map(s=>({commitHash:s.commit_hash,parentCommitHash:null,...s.tree_hash!==null?{treeHash:s.tree_hash}:{},...s.commit_type!==null?{commitType:s.commit_type}:{},commitMessage:s.commit_message??"",commitDate:s.commit_date??"",branch:s.branch??"",generatedAt:s.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(n),o=new Map;for(let s of r){let i=o.get(s.commit_hash)??[];i.push(s.title),o.set(s.commit_hash,i)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(n),o=t.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(n),s=new Map;for(let i of o){let a=s.get(i.stable_slug)??[];a.push(i.ref_type),s.set(i.stable_slug,a)}return r.map(i=>({stableSlug:i.stable_slug,title:i.title,summary:i.summary,content:i.content_md,relatedBranches:JSON.parse(i.related_branches_json),lastUpdatedAt:i.last_updated_at,refTypes:s.get(i.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((t,n)=>t.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(n).map(o=>this.readOne(t,n,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}};var kl=3e3,ss=new Map;async function is(e){let t=Date.now(),n=ss.get(e);if(n&&t-n.at<kl)return n.route;let r=await on(e);return ss.set(e,{route:r,at:t}),r}async function as(e,t,n){if(n.state==="legacy-fenced"||n.state==="cutover"){let{identity:r}=await Oe(t);return new ot(r)}return new me(e)}async function ls(e){let t=e??process.cwd(),n=await is(t);if(n.state==="blocked")throw new Error(`storage unavailable: ${n.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return as(e,t,n)}async function Wo(e){let t=e??process.cwd(),n;try{n=await is(t)}catch(r){return{ok:!1,reason:r.message}}if(n.state==="blocked")return{ok:!1,reason:n.reason};try{return{ok:!0,state:n.state,storage:await as(e,t,n)}}catch(r){return{ok:!1,reason:r.message}}}E();U();function vl(e){return[`1) Re-authenticate ${nt(e)}:  ${Uo(e)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function Il(e,t){let n=$o(e);return n===null?[]:[`${t}${n}`]}function cs(e){return[`[Jolli Memory] Memory generation failed for a recent commit: ${nt(e)} authentication expired or is unavailable.`,...Il(e,""),"\u2192 Fix with either:",...vl(e).map(t=>`    ${t}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}function ds(){return new Promise((e,t)=>{let n=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",r=>n.push(r)),process.stdin.on("end",()=>{process.stdin.destroy(),e(n.join(""))}),process.stdin.on("error",t)})}var L=g("SessionStartHook"),zl=new Set(["main","master","develop","development","staging","production"]),at=500,Ql=250;function Ns(e=at+Ql){let t=setTimeout(()=>process.exit(0),e);return t.unref(),t}var Ls="login-reminder-dismissed";function Zl(e){let t=Bt(e,"init");return t===void 0?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${`Run ${t} to finish setup.`}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${Ls}.)`].join(`
`)}function Cs(e,t,n){return t||n?null:Zl(e)}async function ec(e,t){let n=Wt(e);if(n===void 0||t.aiProvider!==void 0)return!1;try{let r=await Ut(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",...o.localAgentTool===void 0?{localAgentTool:n}:{}},result:o.localAgentTool??n}:{update:null,result:void 0});return r===void 0?(L.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",e),!1):(L.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",r,e),!0)}catch(r){return L.info("Failed to seed default local-agent provider: %s",r.message),!1}}async function ks(e,t=ut()){let n=await $t(),r=er(n),o=(0,v.join)(e,".jolli","jollimemory",Ls),s=(0,D.existsSync)(o);if(r&&s)try{(0,D.rmSync)(o)}catch{}return Cs(t,r,s)}async function vs(e,t){return(await ls(t)).readFile(`summaries/${e}.json`)}async function tc(e,t){try{let n=await vs(e,t);return n?Mo(JSON.parse(n)):!1}catch(n){return L.info("Failed to check auth-failure state for %s: %s",e.substring(0,8),n.message),!1}}async function Is(e,t=ut()){let n=Wt(t);if(n===void 0)return null;let r=$s(e);if(!r)return null;let o=await rt(e);if(!o)return null;let s=o.entries.filter(l=>l.branch===r&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(s.length===0)return null;let i=[...s].sort((l,c)=>new Date(M(c)).getTime()-new Date(M(l)).getTime())[0];if(!await tc(i.commitHash,e))return null;let a=await $t();return cs(a.localAgentTool??n)}async function Os(){if(vn()){L.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let e=await ds(),{cwd:t}=JSON.parse(e),n=Yn(t??process.cwd());if(Bn(n),L.info("SessionStartHook invoked (cwd=%s)",n),await Xr(n)){L.info("SessionStart hook skipped \u2014 repository manually disabled");return}let r=await Ps(n,"shared",{includeBriefing:!0,includePluginReminders:!1});r?process.stdout.write(r):L.info("No briefing or reminder generated (skipped or timed out)");let{triggerEnsureGlobalDaemon:o}=await Promise.resolve().then(()=>(As(),ws));o()}catch(e){L.info("SessionStartHook failed: %s",e.message)}}async function Ps(e,t,n={}){let r=n.includeBriefing!==!1,o=n.includePluginReminders!==!1,[s,i,a]=await Promise.all([r?Promise.race([Ms(e,t),Nn(at)]):Promise.resolve(null),o?Promise.race([Is(e,t),Nn(at)]):Promise.resolve(null),o?Promise.race([ks(e,t),Nn(at)]):Promise.resolve(null)]),l=[i,a,s].filter(c=>!!c);return l.length===0?null:(L.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function nc(e,t="shared"){try{return await Ms(e,t)===null?(L.info("Briefing cache not warmed \u2014 nothing to brief on this branch"),!1):(L.info("Briefing cache warmed for the next session start"),!0)}catch(n){return L.info("Briefing cache warm-up failed (non-fatal): %s",n.message),!1}}async function Ms(e,t){let n=lt(e),r=$s(e,n);if(!r||zl.has(r))return null;let o=lc(e,r,t,n);if(o)return o;let s=await rt(e);if(!s)return null;let i=s.entries.filter(m=>m.branch===r&&(m.parentCommitHash===null||m.parentCommitHash===void 0));if(i.length===0)return null;let a=[...i].sort((m,_)=>new Date(M(_)).getTime()-new Date(M(m)).getTime()),l=a[0],c=a[a.length-1];if(a.length===1&&dc(M(l)))return null;let u=await rc(l.commitHash,e),d=oc(e,r),f=sc(a),T=ic(r,a,l,c,u,d,f,t),y=Us(e,n);return cc(e,r,y??l.commitHash,T,t),T}async function rc(e,t){try{let n=await vs(e,t);if(!n)return{lastTopicTitle:null,keyDecisions:[]};let r=JSON.parse(n),o=Me(r),s=o.length>0?o[o.length-1].title:null,i=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&i.push(a.decisions);return{lastTopicTitle:s,keyDecisions:i}}catch(n){return L.info("Failed to load last summary: %s",n.message),{lastTopicTitle:null,keyDecisions:[]}}}function oc(e,t){try{let n=(0,v.join)(e,".jolli","jollimemory","plans.json");if(!(0,D.existsSync)(n))return[];let r=JSON.parse((0,D.readFileSync)(n,"utf-8")),o=jr(r).registry,s=[];for(let i of Object.values(o.plans))!i.commitHash&&i.title&&s.push(i.title);return s}catch{return[]}}function sc(e){let t=0,n=0,r=0,o=!1;for(let s of e)s.diffStats&&(t+=s.diffStats.filesChanged,n+=s.diffStats.insertions,r+=s.diffStats.deletions,o=!0);return o?{filesChanged:t,insertions:n,deletions:r}:null}function ic(e,t,n,r,o,s,i,a){let l=t.length,c=xs(M(r)),u=xs(M(n)),d=uc(M(n),new Date().toISOString()),f=[];f.push(`[Jolli Memory \u2014 ${e}]`);let T=`${l} commits (${c} ~ ${u})`;i&&(T+=` | ${i.filesChanged} files, +${i.insertions} -${i.deletions}`),f.push(T);let y=o.lastTopicTitle??n.commitMessage;if(f.push(`Last: ${y} (${u})`),o.keyDecisions.length>0){let _=ac(o.keyDecisions);f.push(`Decisions: ${_}`)}s.length>0&&f.push(`Plans: ${s.join("; ")}`);let m=Fs(d,a);return m&&f.push(m),f.join(`
`)}function Fs(e,t){if(e<=0)return null;let n=Bt(t,"recall")??"`jolli recall`";return e>3?`Warning: ${e} days since last commit. Run ${n} for full context.`:`Tip: run ${n} for full context`}function ac(e){let n=[],r=0;for(let o of e){let s=o.replace(/[.;]\s*$/,"").trim();if(s.length>200&&(s=`${s.slice(0,199)}\u2026`),r+s.length>200&&n.length>0)break;n.push(s),r+=s.length+2}return n.join("; ")}function Hs(e){return(0,v.join)(e,".jolli","jollimemory","briefing-cache.json")}function lc(e,t,n,r=lt(e)){let o=Hs(e);if(!(0,D.existsSync)(o))return null;try{let s=JSON.parse((0,D.readFileSync)(o,"utf-8"));if(s.branch!==t||s.clientKind!==n)return null;let i=Us(e,r);return!i||s.lastCommitHash!==i?null:s.briefingText}catch{return null}}function cc(e,t,n,r,o){let s=Hs(e),i={branch:t,lastCommitHash:n,briefingText:r,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,v.dirname)(s);(0,D.existsSync)(a)||(0,D.mkdirSync)(a,{recursive:!0});let l=`${s}.${process.pid}.tmp`;(0,D.writeFileSync)(l,JSON.stringify(i,null,"	"),"utf-8"),(0,D.renameSync)(l,s)}catch{}}function lt(e){return se(e)}function Us(e,t=lt(e)){let n=t?Mn(t):null;if(n)return n;try{return H("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function $s(e,t=lt(e)){let n=t?Pn(t):null;if(n)return n;if(t)return null;try{return H("git",["branch","--show-current"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function Nn(e){return new Promise(t=>{setTimeout(()=>t(null),e).unref()})}function dc(e){let t=new Date(e),n=new Date;return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate()}function uc(e,t){let n=new Date(e).getTime(),r=new Date(t).getTime();return Math.floor(Math.abs(r-n)/(1e3*60*60*24))}function xs(e){return e?e.split("T")[0]:"unknown"}function mc(){let e=process.argv[1];if(process.env.VITEST||!e||(0,v.resolve)(e)!==(0,v.resolve)((0,Ds.fileURLToPath)(__jmImportMetaUrl)))return!1;let t=(0,v.basename)(e).toLowerCase();return t==="sessionstarthook.js"||t==="sessionstarthook.ts"}mc()&&(Ns(),Os());0&&(module.exports={armSessionStartDeadline,buildSessionStartContext,computeLoginReminder,ensurePluginDefaultProvider,formatRecallSuggestion,getAuthFailureReminder,getLoginReminder,main,warmBriefingCache});
