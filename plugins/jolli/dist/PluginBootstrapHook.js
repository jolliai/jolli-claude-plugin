#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var QE=Object.create;var Bo=Object.defineProperty;var ZE=Object.getOwnPropertyDescriptor;var eb=Object.getOwnPropertyNames;var tb=Object.getPrototypeOf,nb=Object.prototype.hasOwnProperty;var y=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var v=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}},Sr=(e,t)=>{for(var n in t)Bo(e,n,{get:t[n],enumerable:!0})},ru=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of eb(t))!nb.call(e,o)&&o!==n&&Bo(e,o,{get:()=>t[o],enumerable:!(r=ZE(t,o))||r.enumerable});return e};var Er=(e,t,n)=>(n=e!=null?QE(tb(e)):{},ru(t||!e||!e.__esModule?Bo(n,"default",{value:e,enumerable:!0}):n,e)),rb=e=>ru(Bo({},"__esModule",{value:!0}),e);function It(e){return br(e,process.platform)}function br(e,t){let n=vn(e.replace(/\\/g,"/"));return t==="win32"||t==="darwin"?n.toLowerCase():n}function vn(e){let t=e.length;for(;t>0&&e[t-1]==="/";)t--;return t===e.length?e:e.slice(0,t)}function ia(e,t){let n=It(e),r=It(t);return n===r||n.startsWith(`${r}/`)}function _e(e){return e.replace(/\\/g,"/")}var te=y(()=>{"use strict"});function sb(e){return ob.some(t=>(e[t]??"")!=="")}function qt(e){try{return(0,An.readFileSync)(e,"utf-8")}catch{return null}}function aa(e){try{return(0,An.realpathSync)(e)}catch{return(0,q.resolve)(e)}}function Jo(e){try{return(0,An.statSync)(e).isDirectory()}catch{return!1}}function au(e,t){let n=qt((0,q.join)(e,"HEAD"))?.trim();return!n||!(Go.test(n)||ib.test(n))?!1:Jo((0,q.join)(t,"objects"))&&Jo((0,q.join)(t,"refs"))}function ab(e,t,n){let r=/^gitdir:\s*(.+)$/m.exec(t);if(!r)return null;let o=r[1].trim();if(!o)return null;let s=(0,q.isAbsolute)(o)?o:(0,q.resolve)(e,o);return Jo(s)?n?aa(s):s:null}function lu(e,t){let n=qt((0,q.join)(e,"commondir"))?.trim();if(!n)return e;let r=(0,q.isAbsolute)(n)?n:(0,q.resolve)(e,n);return t?aa(r):r}function qe(e,t={}){let{env:n=process.env,realpath:r=!1}=t;if(sb(n))return null;let o=r?aa(e):(0,q.resolve)(e);for(;;){let s=(0,q.join)(o,".git");if(Jo(s)){let l=lu(s,r);return au(s,l)?{worktreeRoot:o,gitDir:s,commonDir:l}:null}let i=qt(s);if(i!==null){let l=ab(o,i,r);if(l===null)return null;let c=lu(l,r);return au(l,c)?{worktreeRoot:o,gitDir:l,commonDir:c}:null}let a=(0,q.dirname)(o);if(a===o)return null;o=a}}function cu(e){let t=qt((0,q.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;let n=/^ref:\s*refs\/heads\/(.+)$/.exec(t);return n&&n[1].trim()||null}function cb(e){return lb.test(e)&&!e.split("/").includes("..")}function db(e,t){let n=qt((0,q.join)(e,"packed-refs"));if(n===null)return null;for(let r of n.split(`
`)){if(!r||r.startsWith("#")||r.startsWith("^"))continue;let o=r.indexOf(" ");if(!(o<=0)&&r.slice(o+1).trim()===t){let s=r.slice(0,o).trim();return Go.test(s)?s:null}}return null}function du(e){let t=qt((0,q.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;if(Go.test(t))return t;let n=/^ref:\s*(.+)$/.exec(t);if(!n)return null;let r=n[1].trim();if(!cb(r))return null;for(let o of e.gitDir===e.commonDir?[e.gitDir]:[e.gitDir,e.commonDir]){let s=qt((0,q.join)(o,r))?.trim();if(s&&Go.test(s))return s;let i=db(o,r);if(i)return i}return null}var An,q,ob,Go,ib,lb,Cn=y(()=>{"use strict";An=require("node:fs"),q=require("node:path");te();ob=["GIT_DIR","GIT_WORK_TREE","GIT_COMMON_DIR"];Go=/^[0-9a-f]{40}$|^[0-9a-f]{64}$/,ib=/^ref:\s*refs\//;lb=/^refs\/[A-Za-z0-9._\-/]+$/});function la(){return ub.getStore()?.traceId}var uu,DN,ub,qo=y(()=>{"use strict";uu=require("node:async_hooks"),DN="0".repeat(32),ub=new uu.AsyncLocalStorage});function k(e){return e instanceof Error?e.message:String(e)}function Kt(e){return e instanceof Error&&e.code==="ENOENT"}function Ko(e){fu=e}function J(){return gu}function wb(e,t){let n=hb[t]??gb;return pu[e]>=pu[n]}function Sb(e,t,n,r,o){let s=new Date().toISOString(),i=e.toUpperCase().padEnd(5),a=n,l=0;a=a.replace(/%[sdj]/g,d=>{if(l>=r.length)return d;let u=r[l++];return d==="%d"?String(Number(u)):d==="%j"?JSON.stringify(u):String(u)});let c=o?` [trace=${o}]`:"";return`[${s}] ${i} [${t}]${c} ${a}`}function j(e){let t=e??fu??process.cwd();return(0,xn.join)(t,pb,mb)}function Tr(e){return String(e).padStart(2,"0")}async function _b(e,t){let n=new Date,r=`${n.getUTCFullYear()}-${Tr(n.getUTCMonth()+1)}-${Tr(n.getUTCDate())}_${Tr(n.getUTCHours())}-${Tr(n.getUTCMinutes())}-${Tr(n.getUTCSeconds())}`;try{let o=(0,xn.join)(e,`debug_${r}.log`);for(let s=1;await Rb(o);s++)o=(0,xn.join)(e,`debug_${r}_${s}.log`);await(0,xe.rename)(t,o)}catch{return}try{let o=(await(0,xe.readdir)(e)).filter(s=>Tb.test(s)).sort();for(let s=0;s<o.length-bb;s++)await(0,xe.unlink)((0,xn.join)(e,o[s])).catch(()=>{})}catch{}}async function Rb(e){try{return await(0,xe.stat)(e),!0}catch{return!1}}function kb(e){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||gu||(mu=mu.then(async()=>{try{let t=j(),n=(0,xn.join)(t,fb);await(0,xe.stat)(t);try{(await(0,xe.stat)(n)).size>Eb&&await _b(t,n)}catch{}await(0,xe.appendFile)(n,`${e}
`,"utf-8")}catch{}}))}function f(e){function t(n,r,o){let s=Sb(n,e,r,o,la());yb&&(n==="info"||n==="debug")||(n==="warn"?console.warn(s):console.error(s)),wb(n,e)&&kb(s)}return{debug(n,...r){t("debug",n,r)},info(n,...r){t("info",n,r)},warn(n,...r){t("warn",n,r)},error(n,...r){t("error",n,r)}}}var xe,xn,pb,mb,fb,Fe,fu,gu,pu,gb,hb,yb,mu,Eb,bb,Tb,w=y(()=>{"use strict";xe=require("node:fs/promises"),xn=require("node:path");qo();pb=".jolli",mb="jollimemory",fb="debug.log";Fe="jollimemory/summaries/v3";gu=!1;pu={debug:0,info:1,warn:2,error:3},gb="info",hb={},yb=!0;mu=Promise.resolve(),Eb=2*1024*1024,bb=10,Tb=/^debug_.*\.log$/});function In(e,t,n){return(0,hu.promisify)(ut.execFile)(e,t,{..._r,...n??{}})}function Ee(e,t,n){return(0,ut.execFileSync)(e,t,{..._r,...n??{}})}function yu(e,t,n){return(0,ut.spawnSync)(e,t,{..._r,...n??{}})}var ut,hu,_r,pt,Re=y(()=>{"use strict";ut=require("node:child_process"),hu=require("node:util"),_r={windowsHide:!0};pt=((e,t,n)=>Array.isArray(t)?(0,ut.spawn)(e,t,{..._r,...n??{}}):(0,ut.spawn)(e,{..._r,...t??{}}))});function Ib(){let e={...process.env,LC_ALL:"C"};for(let t of xb)delete e[t];return e}function bu(e){return Pb(e)??e}function Pb(e){let t=ca.get(e);if(t!==void 0)return t;let n=qe(e,{realpath:!0})?.worktreeRoot;if(n){let o=_e(n);return ca.set(e,o),o}let r=null;try{let o=Ee("git",["rev-parse","--show-toplevel"],{cwd:e,encoding:"utf-8",env:Ib(),stdio:["ignore","pipe","pipe"]}).trim();o&&(r=o)}catch{}return ca.set(e,r),r}async function G(e,t){ne.debug("git %s%s",t?`[cwd=${t}] `:"",e.join(" "));try{let{stdout:n,stderr:r}=await In("git",e,{maxBuffer:Ab,env:{...process.env,LC_ALL:"C"},...t!==void 0&&{cwd:t}});return{stdout:n.trimEnd(),stderr:r.trim(),exitCode:0}}catch(n){let r=n,o=typeof r.code=="number"?r.code:r.code==="ENOENT"?127:1,s={stdout:(r.stdout??"").trimEnd(),stderr:(r.stderr??r.message??"").trim(),exitCode:o};return ne.debug("git command failed (exit: %d, stderr: %s)",o,s.stderr.substring(0,200)),s}}function Nb(e){let t=e.split(`
`).filter(s=>s.trim().length>0).pop()??"",n=t.match(/(\d+)\s+files?\s+changed/),r=t.match(/(\d+)\s+insertions?/),o=t.match(/(\d+)\s+deletions?/);return{filesChanged:n?Number.parseInt(n[1],10):0,insertions:r?Number.parseInt(r[1],10):0,deletions:o?Number.parseInt(o[1],10):0}}async function Yo(e,t,n){let r=await G(["diff","--stat",`${e}..${t}`],n);return Nb(r.stdout)}async function da(e,t){return(await G(["rev-parse","--verify",`refs/heads/${e}`],t)).exitCode===0}async function ua(e,t){if(await da(e,t))return;ne.info("Creating orphan branch '%s' using plumbing commands",e);let n=JSON.stringify({version:1,entries:[]},null,"	"),r=await Mb(n,t);ne.debug("Created blob: %s",r);let o=`100644 blob ${r}	index.json
`,s=await jb(o,t);ne.debug("Created tree: %s",s);let i=await G(["commit-tree",s,"-m","Initialize Jolli Memory summaries"],t);if(i.exitCode!==0)throw new Error(`Failed to create commit: ${i.stderr}`);let a=i.stdout.trim();ne.debug("Created commit: %s",a);let l=await G(["update-ref",`refs/heads/${e}`,a],t);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);ne.info("Orphan branch '%s' created successfully",e)}function Db(e){let t=e.toLowerCase();return Ob.some(n=>t.includes(n))}async function pa(e,t,n){ne.debug("Reading file from branch: %s:%s",e,t);let r=await G(["show",`${e}:${t}`],n);return r.exitCode!==0?(Db(r.stderr)?ne.debug("File not found: %s:%s",e,t):ne.warn("Read failed for %s:%s (git exit %d): %s",e,t,r.exitCode,r.stderr||"(no stderr)"),null):r.stdout}async function ma(e,t,n){let r=new Map;if(t.length===0)return r;let o=["cat-file","--batch"];return ne.debug("git (cat-file --batch stream) %s%s for %d paths",n?`[cwd=${n}] `:"",o.join(" "),t.length),new Promise((s,i)=>{let a=pt("git",o,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),l="",c=Buffer.alloc(0),d=!0,u=0,p=[],m=!1,g=0,h=!1,T=S=>{h||(h=!0,S?i(S):s(r))};a.stderr.on("data",S=>{l+=S.toString()}),a.stdout.on("data",S=>{for(c=Buffer.concat([c,S]);!h;){if(d){let _=c.indexOf(10);if(_<0)return;let R=c.subarray(0,_).toString("utf8");if(c=c.subarray(_+1),g>=t.length){T(new Error(`git cat-file --batch returned extra response: ${R}`));return}let N=t[g];if(g++,R.endsWith(" missing")){r.set(N,null);continue}let I=R.substring(R.lastIndexOf(" ")+1),F=Number.parseInt(I,10);if(!Number.isFinite(F)||F<0){T(new Error(`Unexpected cat-file --batch header for ${N}: ${R}`));return}u=F,p=[],d=!1,m=!0}if(u>0){if(c.length===0)return;let _=Math.min(u,c.length);if(p.push(c.subarray(0,_)),c=c.subarray(_),u-=_,u>0)return}if(m){if(c.length<1)return;c=c.subarray(1),m=!1;let _=t[g-1];r.set(_,Buffer.concat(p).toString("utf8")),p=[],d=!0}}}),a.on("close",S=>{if(S!==0){T(new Error(`git cat-file --batch failed (exit ${S}): ${l.trim()}`));return}if(g<t.length){T(new Error(`git cat-file --batch returned ${g} of ${t.length} expected responses; stderr=${l.trim()}`));return}T(null)}),a.on("error",S=>{T(S)}),a.stdin.on("error",S=>{T(S)});for(let S of t)a.stdin.write(`${e}:${S}
`);a.stdin.end()})}async function Tu(e,t,n,r){await ua(e,r);let o=await G(["rev-parse",`refs/heads/${e}`],r);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let s=o.stdout.trim();await Fb(e,s,n,t,r);let i=t.filter(l=>!l.delete).length,a=t.filter(l=>l.delete).length;ne.info("Updated branch '%s': %d written, %d deleted (via fast-import)",e,i,a)}async function Rr(e,t){let n=await G(["cat-file","-p",e],t);if(n.exitCode!==0)return null;let r=n.stdout.match(/^tree ([a-f0-9]+)/m);return r?r[1]:null}async function fa(e,t,n){ne.debug("Listing files in branch %s under prefix '%s'",e,t);let r=await G(["ls-tree","-z","-r","--name-only",e,t],n);if(r.exitCode!==0)return ne.debug("Failed to list files (branch may not exist): %s",r.stderr),[];let o=r.stdout.split(Cb).filter(s=>s.length>0);return ne.debug("Found %d files",o.length),o}async function Lb(e){let t=await G(["rev-parse","--git-common-dir"],e);if(t.exitCode!==0)throw new Error(`Failed to get git common dir: ${t.stderr}`);let n=t.stdout.trim();return(0,Ke.resolve)(e,n)}async function ga(e){let t=await Lb(e);return(0,Ke.dirname)(t)}async function Pn(e){return qe(e)!==null?!0:(await G(["rev-parse","--git-dir"],e)).exitCode===0}async function kr(e){let t=await G(["worktree","list","--porcelain"],e);if(t.exitCode!==0)throw new Error(`Failed to list worktrees: ${t.stderr}`);return t.stdout.split(`
`).filter(r=>r.startsWith("worktree ")).map(r=>r.slice(9).trim())}async function Nn(e){let t=(0,Ke.join)(e,".git");if((await(0,Vo.stat)(t)).isDirectory())return(0,Ke.join)(t,"hooks");let r=await(0,Vo.readFile)(t,"utf-8"),o=r.trim().match(/^gitdir:\s*(.+)$/);if(!o)throw new Error(`Unexpected .git file content: ${r.trim()}`);let s=o[1].trim(),i=(0,Ke.resolve)(e,s),a=i.replace(/\\/g,"/").lastIndexOf("/worktrees/");if(a>=0){let l=i.substring(0,a);return(0,Ke.join)(l,"hooks")}return(0,Ke.join)(i,"hooks")}function _u(e,t,n){return ne.debug("git (stdin) %s%s",n?`[cwd=${n}] `:"",e.join(" ")),new Promise((r,o)=>{let s=pt("git",e,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),i="",a="";s.stdout.on("data",l=>{i+=l.toString()}),s.stderr.on("data",l=>{a+=l.toString()}),s.on("close",l=>{l!==0?o(new Error(`git ${e[0]} failed (exit ${l}): ${a.trim()}`)):r(i.trim())}),s.on("error",l=>{o(l)}),s.stdin.write(t),s.stdin.end()})}async function Mb(e,t){return _u(["hash-object","-w","--stdin"],e,t)}async function wu(e,t){let n=await G(["var",e],t);if(n.exitCode!==0)throw new Error(`Failed to read ${e}: ${n.stderr}`);return n.stdout.trim()}async function Fb(e,t,n,r,o){let s=await wu("GIT_AUTHOR_IDENT",o),i=await wu("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];ne.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=r.filter(d=>!d.delete),c=r.filter(d=>d.delete);return new Promise((d,u)=>{let p=pt("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),m="";p.stderr.on("data",S=>{m+=S.toString()}),p.on("close",S=>{S!==0?u(new Error(`git fast-import failed (exit ${S}): ${m.trim()}`)):d()}),p.on("error",S=>{u(S)});let g=p.stdin;g.on("error",S=>{u(S)});let h=[];l.forEach((S,_)=>{let R=_+1,N=Buffer.from(S.content,"utf8");h.push(`blob
mark :${R}
data ${N.length}
`,N,`
`)});let T=Buffer.from(n,"utf8");h.push(`commit refs/heads/${e}
`,`author ${s}
`,`committer ${i}
`,`data ${T.length}
`,T,`
`,`from ${t}
`),l.forEach((S,_)=>{h.push(`M 100644 :${_+1} ${Su(S.path)}
`)});for(let S of c)h.push(`D ${Su(S.path)}
`);h.push(`done
`),$b(g,h).then(()=>{g.end()},S=>{u(S)})})}async function $b(e,t){for(let n of t)e.write(n)||await(0,Eu.once)(e,"drain")}function Su(e){return/["\\\n\r]/.test(e)?`"${e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:e}async function jb(e,t){return _u(["mktree"],e,t)}var Eu,Vo,Ke,Ab,Cb,ne,ca,xb,Ob,be=y(()=>{"use strict";Eu=require("node:events"),Vo=require("node:fs/promises"),Ke=require("node:path");w();Re();Cn();te();Ab=10*1024*1024,Cb="\0",ne=f("GitOps"),ca=new Map,xb=["GIT_DIR","GIT_WORK_TREE","GIT_INDEX_FILE","GIT_COMMON_DIR","GIT_PREFIX","GIT_OBJECT_DIRECTORY","GIT_NAMESPACE"];Ob=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});function Ub(e){return new Promise(t=>setTimeout(t,e))}function ku(e){let t=Number(e);if(!Number.isInteger(t)||t<=0)return!1;if(t===process.pid)return!0;try{return process.kill(t,0),!0}catch(n){return n.code!=="ESRCH"}}async function ha(e){try{let t=await(0,Ve.stat)(e),n=Date.now()-t.mtimeMs,r=await vu(e),o=r!==null&&!ku(r);if(!o&&n<Ru)return!1;o?vr.warn("Removing orphaned lock %s (PID %s no longer running)",e,r):vr.warn("Removing stale lock file %s (age: %dms)",e,n),await(0,Ve.rm)(e,{force:!0})}catch(t){if(t.code!=="ENOENT")return vr.error("Failed to check lock file %s: %s",e,t.message),!1}try{return await(0,Ve.writeFile)(e,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function vu(e){try{let n=(await(0,Ve.readFile)(e,"utf-8")).trim();return n.length>0?n:null}catch{return null}}async function On(e,t){let n=await vu(e);if(n!==null&&n!==String(process.pid)){vr.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",t,n,process.pid);return}try{await(0,Ve.rm)(e,{force:!0})}catch(r){vr.error("Failed to release %s: %s",t,r.message)}}async function Dn(e,t){if(t.timeoutMs<=0)return ha(e);let n=Date.now()+t.timeoutMs;for(;;){if(await ha(e))return!0;if(Date.now()>=n)return!1;await Ub(t.pollMs)}}var Ve,vr,Ru,ya=y(()=>{"use strict";Ve=require("node:fs/promises");w();vr=f("LockPrimitives"),Ru=300*1e3});function xu(e){return(0,Cu.resolve)(e??process.cwd())}function Ln(e){return wa.getStore()?.has(xu(e))===!0}function Mn(e,t){let n=new Set(wa.getStore()??[]);return n.add(xu(e)),wa.run(n,t)}var Au,Cu,wa,Xo=y(()=>{"use strict";Au=require("node:async_hooks"),Cu=require("node:path"),wa=new Au.AsyncLocalStorage});function Hb(e){return In("git",["rev-parse","--git-common-dir"],{cwd:e})}async function Fu(e){let t=e??process.cwd(),n=Ou.get(t);if(n!==void 0)return n;let r;try{let{stdout:o}=await Hb(t),s=o.trim(),i=(0,ke.isAbsolute)(s)?s:(0,ke.resolve)(t,s);r=(0,ke.join)(i,"jollimemory")}catch{Lu.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",t),r=j(t)}return Ou.set(t,r),r}async function Xb(e){let t=j(e);return await(0,Fn.mkdir)(t,{recursive:!0}),t}async function Sa(e){let t=await Fu(e);return await(0,Fn.mkdir)(t,{recursive:!0}),t}async function Ar(e,t={}){let n=t.timeoutMs??Jb,r=t.pollMs??Gb,o=await Sa(e);return Dn((0,ke.join)(o,Mu),{timeoutMs:n,pollMs:r})}async function Cr(e){let t=await Fu(e);await On((0,ke.join)(t,Mu),"orphan-write.lock")}async function $u(e,t,n,r){let o=r.timeoutMs??Kb,s=r.pollMs??Qo;await(0,Fn.mkdir)(e,{recursive:!0});let i=(0,ke.join)(e,t),a=await Dn(i,{timeoutMs:o,pollMs:s});a||Lu.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",t,o);try{return await n()}finally{a&&await On(i,t)}}async function ju(e,t,n={}){return $u(await Xb(e),Bb,t,n)}async function Ea(e,t,n={}){return $u(e,Wb,t,n)}async function xr(e,t={}){let n=t.timeoutMs??Vb,r=t.pollMs??Qo,o=await Sa(e),s=(0,ke.join)(o,Pu);return await Dn(s,{timeoutMs:n,pollMs:r})?{release:()=>On(s,Pu)}:null}async function ba(e,t,n={}){let r=await xr(e,n);if(!r)return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await r.release()}}async function Ta(e,t,n={}){let r=n.timeoutMs??qb,o=n.pollMs??Qo,s=await Sa(e),i=(0,ke.join)(s,Iu);if(!await Dn(i,{timeoutMs:r,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await On(i,Iu)}}async function _a(e,t={}){let n=t.timeoutMs??Yb,r=t.pollMs??Qo,o=t.globalDir??(0,ke.join)((0,Du.homedir)(),".jolli","jollimemory");await(0,Fn.mkdir)(o,{recursive:!0});let s=(0,ke.join)(o,Nu);if(!await Dn(s,{timeoutMs:n,pollMs:r}))return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await On(s,Nu)}}var Fn,Du,ke,Lu,Mu,Iu,Bb,Wb,Pu,Nu,Jb,zo,Gb,qb,Qo,Kb,Vb,Yb,Ou,Ye=y(()=>{"use strict";Fn=require("node:fs/promises"),Du=require("node:os"),ke=require("node:path");w();Re();ya();Xo();Lu=f("Locks");Mu="orphan-write.lock",Iu="profile.lock",Bb="sessions.lock",Wb="config.lock",Pu="repo-hooks.lock",Nu="runtime-registry.lock",Jb=1e3,zo=class extends Error{constructor(t,n){super(`${t}: could not acquire orphan-write.lock within ${n}ms`),this.name="OrphanWriteBusyError"}},Gb=50,qb=5e3,Qo=25,Kb=5e3,Vb=5e3,Yb=5e3,Ou=new Map});async function Ra(e,t,n={}){await(0,Pt.mkdir)((0,Uu.dirname)(e),{recursive:!0});let r=`${e}.${process.pid}.tmp`;await(0,Pt.writeFile)(r,t,n.mode!==void 0?{encoding:"utf-8",mode:n.mode}:"utf-8");try{await(0,Pt.rename)(r,e)}catch(o){throw await(0,Pt.unlink)(r).catch(()=>{}),o}}var Pt,Uu,ka=y(()=>{"use strict";Pt=require("node:fs/promises"),Uu=require("node:path")});function Ju(e,t){let n={...e,manuallyDisabled:t};return delete n.userDisabled,n}async function Zb(e){let t=qe(e)?.commonDir;if(t)return t;let n=await G(["rev-parse","--git-common-dir"],e),r=n.exitCode===0?n.stdout.trim():"";return r?(0,le.isAbsolute)(r)?r:(0,le.join)(e,r):null}async function xa(e){let t=await Zb(e);if(t===null)return{profilePath:(0,le.join)(j(e),Aa),legacyMarkerPath:null};let n=(0,le.dirname)(t);return{profilePath:(0,le.join)(j(n),Aa),legacyMarkerPath:(0,le.join)(t,zb,Qb)}}async function ts(e){try{let t=await(0,Ir.readFile)(e,"utf-8"),n=JSON.parse(t);return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}catch{return{}}}async function eT(e){try{return await(0,Ir.stat)(e),!0}catch{return!1}}async function Gu(e,t){await Ra(e,`${JSON.stringify(t,null,"	")}
`)}function Zo(e,t,n,r,o,s){if(e==="read"){let i=`${o}|${t}|${n}`;if(Hu.has(i))return n;Hu.add(i)}return Ca.info("manual-disable %s \u2192 %s (by=%s, pid=%d, cwd=%s, profile=%s, raw: userDisabled=%s manuallyDisabled=%s fence=%s)",e,n,t,process.pid,r,o,String(s.userDisabled),String(s.manuallyDisabled),s.cutoverFence?s.cutoverFence.at:"none"),n}function qu(){return(new Error("manual-disable write").stack??"(no stack)").split(`
`).slice(1,8).join(" | ").replace(/\s+/g," ")}async function tT(e){let t;try{t=await kr(e)}catch{t=[e]}for(let n of t)if(await eT((0,le.join)(j(n),Wu)))return!0;return!1}async function Nt(e){let{profilePath:t}=await xa(e),n=await ts(t);if(n.userDisabled!==void 0){let s=await Bu(e,t,n.userDisabled===!0);return Zo("read","migrate:userDisabled",s,e,t,n)}if(n.manuallyDisabled!==void 0)return Zo("read","manuallyDisabled",n.manuallyDisabled===!0,e,t,n);let r=await tT(e),o=await Bu(e,t,r);return Zo("read","migrate:legacy-marker",o,e,t,n)}async function Bu(e,t,n){let r=await Ta(e,async()=>{let o=await ts(t),s=o.userDisabled??o.manuallyDisabled,i=s===void 0?n:s===!0;return o.userDisabled===void 0&&o.manuallyDisabled!==void 0||(Ca.info("manual-disable MIGRATE \u2192 manuallyDisabled=%s (pid=%d, profile=%s, fence=%s, from=%s) \u2190 %s",i,process.pid,t,o.cutoverFence?o.cutoverFence.at:"none",o.userDisabled!==void 0?"userDisabled":"legacy-marker",qu()),await Gu(t,Ju(o,i))),i}).catch(()=>{});return r?.acquired&&r.value!==void 0?r.value:n}async function Ia(e,t){let{profilePath:n}=await xa(e);if(Ca.info("manual-disable WRITE %s (pid=%d, cwd=%s, profile=%s) \u2190 %s",t,process.pid,e,n,qu()),!(await Ta(e,async()=>{let o=await ts(n);Zo("write",`explicit:${t}`,t,e,n,o),await Gu(n,Ju(o,t))})).acquired)throw new Error("Timed out acquiring the repo profile lock")}async function Pr(e){let{profilePath:t}=await xa(e);return(await ts(t)).cutoverFence??null}function nT(e){let t=va.get(e);if(t!==void 0)return t;let n=qe(e)?.commonDir;if(n){let s=(0,le.dirname)(n);return va.set(e,s),s}let r="";try{let s=Ee("git",["rev-parse","--git-common-dir"],{cwd:e,encoding:"utf-8",stdio:["ignore","pipe","pipe"]}).trim();s&&(r=(0,le.isAbsolute)(s)?s:(0,le.join)(e,s))}catch{r=""}let o=r?(0,le.dirname)(r):e;return va.set(e,o),o}function Pa(e){let t=nT(e),n;try{n=(0,es.readFileSync)((0,le.join)(j(t),Aa),"utf-8")}catch{}let r=rT(n);if(r!==void 0)return r;try{return(0,es.statSync)((0,le.join)(j(e),Wu)),!0}catch{return!1}}function rT(e){if(e===void 0)return;let t;try{t=JSON.parse(e)}catch{return}if(!t||typeof t!="object"||Array.isArray(t))return;let n=t;if(n.userDisabled!==void 0)return n.userDisabled===!0;if(n.manuallyDisabled!==void 0)return n.manuallyDisabled===!0}var es,Ir,le,Ca,Aa,zb,Qb,Wu,Hu,va,Xe=y(()=>{"use strict";es=require("node:fs"),Ir=require("node:fs/promises"),le=require("node:path");w();Re();ka();Cn();be();Ye();Ca=f("RepoProfile"),Aa="profile.json",zb="jollimemory",Qb="backfill-card-dismissed",Wu="disabled-by-user";Hu=new Set;va=new Map});function Vu(e){return typeof e=="string"&&Ku.includes(e)}var Ku,Na,ns=y(()=>{"use strict";Ku=["claude","codex","gemini","opencode","cursor","cursor-cli","copilot","copilot-chat","cline","cline-cli","devin","antigravity","kimi"];Na=5});async function P(e,t,n){let r=`${e}.${process.pid}.${(0,Yu.randomUUID)()}.tmp`;await(0,Vt.writeFile)(r,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n});try{await(0,Vt.rename)(r,e)}catch(o){let s=o.code;if(s==="EPERM"||s==="EACCES")await(0,Vt.writeFile)(e,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n}),await(0,Vt.rm)(r,{force:!0});else throw o}}var Yu,Vt,ce=y(()=>{"use strict";Yu=require("node:crypto"),Vt=require("node:fs/promises")});function de(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}var Nr=y(()=>{"use strict"});var Xu=y(()=>{"use strict"});function Oa(e,t){if(e.length<=t)return e;let n=e.length-t;return`${e.slice(0,t)}
\u2026[truncated, ${n} more chars]`}var Da=y(()=>{"use strict"});function zu(e){return Number.isFinite(e)&&e>=0&&e<=1114111&&!(e>=55296&&e<=57343)}function Qu(e){return e.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(t,n)=>{if(n.startsWith("#x")){let o=Number.parseInt(n.slice(2),16);return zu(o)?String.fromCodePoint(o):t}if(n.startsWith("#")){let o=Number.parseInt(n.slice(1),10);return zu(o)?String.fromCodePoint(o):t}let r=oT[n];return typeof r=="string"?r:t})}var oT,Zu=y(()=>{"use strict";oT={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var sT,ep,tp=y(()=>{"use strict";Xu();Nr();Da();Zu();sT={decodeHtmlEntities:Qu,lowercase:e=>e.toLowerCase()},ep=new Set(Object.keys(sT))});var iT,np,rp=y(()=>{"use strict";iT="^https://app\\.asana\\.com/",np={id:"asana",label:"Asana",icon:"checklist",match:{claude:{prefixes:["mcp__claude_ai_Asana__"],acceptSuffix:"get_task"},codex:{namespaceSuffix:"asana",functionCallNames:["_get_task"],invocationTools:["asana.get_task"]}},wrapperKeys:["data"],reference:{nativeId:{pipe:[{op:"path",path:"gid"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"permalink_url"}],require:iT,requireFlags:"i"},description:{pipe:[{op:"path",path:"notes"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"task"}]},{key:"assignee",label:"Assignee",icon:"person",pipe:[{op:"path",path:"assignee.name"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"asana-tasks",itemTag:"task",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var aT,op,sp=y(()=>{"use strict";aT="^https://[^/]+/wiki/",op={id:"confluence",label:"Confluence",icon:"book",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"],acceptSuffix:"getConfluencePage"},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_getconfluencepage"],invocationTools:["atlassian_rovo.getConfluencePage"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"pageId"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:aT},description:{pipe:[{op:"path",path:"body"}],optional:!0}},fields:[{key:"space",label:"Space",icon:"symbol-namespace",pipe:[{op:"path",path:"space"}]},{key:"author",label:"Author",icon:"account",pipe:[{op:"path",path:"author"}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"entityType"}],[{op:"const",value:"page"}]]}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"confluence-pages",itemTag:"page",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var lT,ip,ap=y(()=>{"use strict";lT="^/[^/\\s]+/[^/\\s]+",ip={id:"context7",label:"Context7",icon:"book",trackOnly:!0,argumentsDerived:!0,match:{claude:{prefixes:["mcp__context7__"],acceptSuffix:"query-docs"},codex:{namespaceSuffix:"context7",functionCallNames:["_query_docs"],invocationTools:["query-docs","context7.query-docs"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"libraryId"}],require:lT},title:{pipe:[{op:"path",path:"libraryId"},{op:"regex",pattern:"^/(.+)$",extract:"$1"}],require:".+"},url:{pipe:[{op:"template",template:"https://context7.com{id}",from:{id:[{op:"path",path:"libraryId"}]}}],require:"^https://context7\\.com/"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"context7-libraries",itemTag:"library",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var La,cT,Ma,_O,lp=y(()=>{"use strict";Nr();La=["mcp__Figma__","mcp__figma__"],cT={get_metadata:"Read structure",get_screenshot:"Viewed screenshot",get_variable_defs:"Read variables",get_figjam:"Read FigJam board",get_design_context:"Read design context"},Ma=Object.keys(cT),_O=new Set(Ma)});var dT,uT,cp,dp=y(()=>{"use strict";lp();dT="^[0-9a-zA-Z]{22,128}$",uT=La.flatMap(e=>Ma.map(t=>`${e}${t}`)),cp={id:"figma",label:"Figma",icon:"symbol-color",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,titleFallbackPattern:"^Figma file [0-9a-zA-Z]{1,8}$",match:{claude:{prefixes:[...La],exact:uT}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileKey"}],require:dT},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://www\\.figma\\.com/"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"figma-files",itemTag:"file",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var pT,mT,up,pp=y(()=>{"use strict";pT="^https?://github\\.com/([^/]+)/[^/]+/(?:issues|pull)/\\d+",mT="^https?://github\\.com/[^/]+/([^/]+)/(?:issues|pull)/\\d+",up={id:"github",label:"GitHub",icon:"issues",match:{claude:{prefixes:["mcp__github__"]},codex:{namespaceSuffix:"github",functionCallNames:["_fetch_issue","_search_issues"],invocationTools:["github_fetch_issue","github_search_issues"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"template",template:"{owner}/{repo}#{number}",from:{owner:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^([^/]+)/[^/]+$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:pT,extract:"$1"}]]}],repo:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^[^/]+/([^/]+)$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:mT,extract:"$1"}]]}],number:[{op:"path",path:"number"}]}}],require:"^[^/]+/[^/]+#\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"html_url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"body"},{op:"transform",fn:"decodeHtmlEntities"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"state"}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]},{key:"assignees",label:"Assignees",icon:"account",pipe:[{op:"path",path:"assignees"},{op:"join",sep:", "}]},{key:"milestone",label:"Milestone",icon:"milestone",pipe:[{op:"coalesce",of:[[{op:"path",path:"milestone"}],[{op:"path",path:"milestone.title"}]]}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"issue_type"}],[{op:"path",path:"issue_type.name"}]]}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"github-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var fT,mp,fp=y(()=>{"use strict";fT="^[A-Z][A-Z0-9_]*-\\d+$",mp={id:"jira",label:"Jira",icon:"issues",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"]},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_fetch","_getjiraissue"],invocationTools:["atlassian_rovo.fetch","atlassian_rovo.getJiraIssue"]}},wrapperKeys:["nodes","issues","items","results"],reference:{nativeId:{pipe:[{op:"path",path:"key"}],require:fT},title:{pipe:[{op:"path",path:"fields.summary"}],require:".+"},url:{pipe:[{op:"path",path:"webUrl"}],require:"^https?://"},description:{pipe:[{op:"path",path:"fields.description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.status.name"}],[{op:"path",path:"fields.status"}]]}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.priority.name"}],[{op:"path",path:"fields.priority"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"fields.labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jira-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var gp,hp=y(()=>{"use strict";gp={id:"jollimemory",label:"Jolli Memory",icon:"history",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,match:{claude:{prefixes:["mcp__jollimemory__"],exact:["mcp__jollimemory__recall","mcp__jollimemory__search","mcp__jollimemory__get_decision_timeline"]},codex:{namespaceSuffix:"jollimemory",functionCallNames:["recall","search","get_decision_timeline"],invocationTools:["recall","search","get_decision_timeline"],invocationServer:"jollimemory"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"tool"}],require:"^(recall|search|get_decision_timeline)$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jolli-memory-lookups",itemTag:"lookup",bodyTag:"queries",maxCharsPerReference:2e3,maxTotalChars:6e3}}});var gT,yp,wp=y(()=>{"use strict";gT="^[A-Z][A-Z0-9_]*-\\d+$",yp={id:"linear",label:"Linear",icon:"issues",match:{claude:{prefixes:["mcp__linear__","mcp__claude_ai_Linear__"],denySuffixes:["list_issues","search_issues"]},codex:{namespaceSuffix:"linear",functionCallNames:["_fetch","_get_issue"],invocationTools:["linear_fetch","linear.get_issue"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:gT},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"status"}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"priority"}],[{op:"path",path:"priority.name"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"linear-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Sp,Ep=y(()=>{"use strict";Sp={id:"monday",label:"monday.com",icon:"table",match:{claude:{prefixes:["mcp__claude_ai_monday_com__"],acceptSuffix:"get_board_items_page"},codex:{namespaceSuffix:"monday_com",functionCallNames:["_get_board_items_page"],invocationTools:["monday_com.get_board_items_page"]}},wrapperKeys:["items"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://([\\w-]+\\.)*monday\\.com/",requireFlags:"i"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"item"}]},{key:"board",label:"Board",icon:"project",pipe:[{op:"path",path:"board"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"monday-items",itemTag:"item",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var hT,yT,wT,bp,Tp=y(()=>{"use strict";hT="[-/]([0-9a-fA-F]{32})(?=[/?#]|$)",yT="^https://(www\\.notion\\.so|notion\\.so|app\\.notion\\.com|[A-Za-z0-9.-]+\\.notion\\.site)/",wT="<content\\b[^>]*>([\\s\\S]*?)</content>",bp={id:"notion",label:"Notion",icon:"file-text",match:{claude:{prefixes:["mcp__claude_ai_Notion__"],acceptSuffix:"notion-fetch"},codex:{namespaceSuffix:"notion",functionCallNames:["_fetch"],invocationTools:["notion_fetch"]}},wrapperKeys:["results","items","pages"],reference:{guard:{pipe:[{op:"path",path:"metadata.type"}],require:"^page$"},nativeId:{pipe:[{op:"path",path:"url"},{op:"regex",pattern:hT,extract:"$1",lastMatch:!0},{op:"transform",fn:"lowercase"}],require:"^[0-9a-fA-F]{32}$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:yT,requireFlags:"i"},description:{pipe:[{op:"path",path:"text"},{op:"regex",pattern:wT,extract:"$1"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"page"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"notion-pages",itemTag:"page",bodyTag:"content",fieldAttrs:!1,maxCharsPerReference:3e4,maxTotalChars:6e4}}});var Fa,ST,ET,$a,DO,_p=y(()=>{"use strict";Nr();Fa=["mcp__Sentry__","mcp__sentry__"],ST="get_sentry_resource",ET="analyze_issue_with_seer",$a=[ST,ET],DO=new Set($a)});var bT,TT,_T,RT,Rp,kp=y(()=>{"use strict";_p();bT=Fa.flatMap(e=>$a.map(t=>`${e}${t}`)),TT="^[A-Za-z0-9.-]{1,253}/[A-Za-z0-9_-]{1,128}$",_T="^Issue [A-Za-z0-9_-]{1,128}$",RT="^Issue [0-9]{1,128}$",Rp={id:"sentry",label:"Sentry",icon:"bug",trackOnly:!0,argumentsDerived:!0,titleFallbackPattern:_T,titleFallbackPoorestPattern:RT,match:{claude:{prefixes:[...Fa],exact:bT}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"nativeId"}],require:TT},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://(?:[A-Za-z0-9-]{1,63}\\.)*sentry\\.io/issues/[A-Za-z0-9_-]{1,128}$",requireFlags:"i"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[{key:"issue-id",label:"Issue",icon:"bug",pipe:[{op:"path",path:"shortId"}]},{key:"project",label:"Project",icon:"symbol-property",pipe:[{op:"path",path:"project"}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"sentry-issues",itemTag:"issue",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var vp,Ap=y(()=>{"use strict";vp={id:"slack",label:"Slack",icon:"comment-discussion",match:{claude:{prefixes:["mcp__claude_ai_Slack__"],acceptSuffix:"slack_read_thread"},codex:{namespaceSuffix:"slack",functionCallNames:["_slack_read_thread"],invocationTools:["slack.slack_read_thread"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"template",template:"{c}-{t}",from:{c:[{op:"path",path:"channelId"}],t:[{op:"path",path:"parentTs"}]}}],require:"^[A-Z0-9]+-\\d{7,}\\.\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://"},description:{pipe:[{op:"path",path:"text"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"comment-discussion",pipe:[{op:"const",value:"thread"}]},{key:"replies",label:"Replies",icon:"reply",pipe:[{op:"path",path:"replyCount"}]},{key:"channel",label:"Channel",icon:"symbol-namespace",pipe:[{op:"path",path:"channelId"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"slack-threads",itemTag:"thread",bodyTag:"messages",fieldAttrs:!0,maxCharsPerReference:8e3,maxTotalChars:4e4}}});var kT,ja,Ua,Cp,xp=y(()=>{"use strict";kT="^dpl_[A-Za-z0-9]+$",ja=[{op:"coalesce",of:[[{op:"path",path:"readyState"}],[{op:"path",path:"state"}]]}],Ua=[{op:"template",template:"https://{host}",from:{host:[{op:"path",path:"url"}]}}],Cp={id:"vercel",label:"Vercel",icon:"rocket",trackOnly:!0,match:{claude:{prefixes:["mcp__claude_ai_Vercel__","mcp__vercel__"],acceptSuffix:"get_deployment"}},wrapperKeys:["deployment"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:kT},title:{pipe:[{op:"coalesce",of:[[{op:"template",template:"{name} ({state})",from:{name:[{op:"path",path:"name"}],state:ja}}],[{op:"path",path:"name"}]]}],require:".+"},url:{pipe:Ua,require:"^https://[A-Za-z0-9.-]+\\.vercel\\.app$",requireFlags:"i"},description:{pipe:[{op:"coalesce",of:[[{op:"path",path:"errorMessage"}],[{op:"template",template:"Deployment {state} \xB7 {target} \xB7 {url}",from:{state:ja,target:[{op:"path",path:"target"}],url:Ua}}],[{op:"template",template:"Deployment {state} \xB7 {url}",from:{state:ja,url:Ua}}]]}],optional:!0}},fields:[{key:"target",label:"Target",icon:"rocket",pipe:[{op:"path",path:"target"}]},{key:"framework",label:"Framework",icon:"symbol-property",pipe:[{op:"path",path:"project.framework"}]},{key:"error-code",label:"Error",icon:"error",pipe:[{op:"path",path:"errorCode"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"vercel-deployments",itemTag:"deployment",bodyTag:"content",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Ip,Pp=y(()=>{"use strict";Ip={id:"zoom-doc",label:"Zoom Doc",icon:"file",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"hub_get_file_content"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileId"}],require:"^[\\w.-]+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://docs\\.zoom\\.us/doc/"},description:{pipe:[{op:"path",path:"content"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"doc"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-docs",itemTag:"doc",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var Np,Op=y(()=>{"use strict";Np={id:"zoom-meeting",label:"Zoom Meeting",icon:"device-camera-video",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"get_meeting_assets"},codex:{namespaceSuffix:"zoom",functionCallNames:["_get_meeting_assets"],invocationTools:["zoom.get_meeting_assets"]}},wrapperKeys:[],reference:{guard:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],require:".+"},nativeId:{pipe:[{op:"path",path:"meeting_uuid"}],require:"^[\\w-]+$"},title:{pipe:[{op:"path",path:"topic"}],require:".+"},url:{pipe:[{op:"coalesce",of:[[{op:"path",path:"meeting_summary.summary_doc_url"}],[{op:"path",path:"deep_url"}]]}],require:"^https://"},description:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"meeting"}]},{key:"started",label:"Started",icon:"calendar",pipe:[{op:"path",path:"start_time"}]},{key:"meeting-number",label:"Meeting #",icon:"symbol-number",pipe:[{op:"path",path:"meeting_number"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-meetings",itemTag:"meeting",bodyTag:"summary",maxCharsPerReference:2e4,maxTotalChars:4e4}}});var Dp,Lp=y(()=>{"use strict";rp();sp();ap();dp();pp();fp();hp();wp();Ep();Tp();kp();Ap();xp();Pp();Op();Dp=[yp,op,mp,up,bp,vp,Np,Ip,np,Sp,ip,gp,Cp,cp,Rp]});function AT(e,t,n){if(!de(e))return"op must be an object";if(n.opCount++,n.opCount>Mp)return`pipe exceeds ${Mp} ops`;let r=e.op;if(typeof r!="string"||!vT.has(r))return`unknown op: ${String(r)}`;switch(r){case"path":return typeof e.path=="string"?void 0:"path op requires a string 'path'";case"const":return typeof e.value=="string"?void 0:"const op requires a string 'value'";case"join":return typeof e.sep=="string"?void 0:"join op requires a string 'sep'";case"regex":return typeof e.pattern!="string"?"regex op requires a string 'pattern'":e.extract!==void 0&&typeof e.extract!="string"?"regex.extract must be a string":e.lastMatch!==void 0&&typeof e.lastMatch!="boolean"?"regex.lastMatch must be a boolean":void 0;case"transform":return typeof e.fn!="string"?"transform op requires a string 'fn'":ep.has(e.fn)?void 0:`unknown transform: ${e.fn}`;case"coalesce":{if(t+1>rs)return`nesting depth exceeds ${rs}`;if(!Array.isArray(e.of))return"coalesce op requires an array 'of'";for(let o of e.of){let s=Ha(o,t+1,n);if(s!==void 0)return s}return}case"template":{if(t+1>rs)return`nesting depth exceeds ${rs}`;if(typeof e.template!="string")return"template op requires a string 'template'";if(!de(e.from))return"template op requires an object 'from'";for(let o of Object.values(e.from)){let s=Ha(o,t+1,n);if(s!==void 0)return s}return}}}function Ha(e,t,n){if(!Array.isArray(e))return"pipe must be an array";for(let r of e){let o=AT(r,t,n);if(o!==void 0)return o}}function Or(e,t){let n=Ha(e,0,{opCount:0});return n===void 0?void 0:`${t}: ${n}`}function CT(e){if(!de(e))return{ok:!1,error:"definition must be an object"};if(typeof e.id!="string"||e.id.length===0)return{ok:!1,error:"id must be a non-empty string"};if(typeof e.label!="string"||e.label.length===0)return{ok:!1,error:"label must be a non-empty string"};if(typeof e.icon!="string"||e.icon.length===0)return{ok:!1,error:"icon must be a non-empty string"};if(e.titleFallbackPattern!==void 0){if(typeof e.titleFallbackPattern!="string"||e.titleFallbackPattern.length===0)return{ok:!1,error:"titleFallbackPattern must be a non-empty string"};try{new RegExp(e.titleFallbackPattern)}catch(n){return{ok:!1,error:`titleFallbackPattern is not a valid regex: ${n.message}`}}}if(e.titleFallbackPoorestPattern!==void 0){if(typeof e.titleFallbackPoorestPattern!="string"||e.titleFallbackPoorestPattern.length===0)return{ok:!1,error:"titleFallbackPoorestPattern must be a non-empty string"};try{new RegExp(e.titleFallbackPoorestPattern)}catch(n){return{ok:!1,error:`titleFallbackPoorestPattern is not a valid regex: ${n.message}`}}if(e.titleFallbackPattern===void 0)return{ok:!1,error:"titleFallbackPoorestPattern requires titleFallbackPattern"}}if(!de(e.match))return{ok:!1,error:"match must be an object"};if(!Array.isArray(e.wrapperKeys))return{ok:!1,error:"wrapperKeys must be an array"};if(!de(e.reference))return{ok:!1,error:"reference must be an object"};if(!Array.isArray(e.fields))return{ok:!1,error:"fields must be an array"};if(!de(e.storage))return{ok:!1,error:"storage must be an object"};if(!de(e.render))return{ok:!1,error:"render must be an object"};let t=e.reference;for(let n of["nativeId","title"]){let r=t[n];if(!de(r))return{ok:!1,error:`reference.${n} is required`};let o=Or(r.pipe,`reference.${n}.pipe`);if(o!==void 0)return{ok:!1,error:o}}if(t.url!==void 0){if(!de(t.url))return{ok:!1,error:"reference.url must be an object"};let n=Or(t.url.pipe,"reference.url.pipe");if(n!==void 0)return{ok:!1,error:n}}if(t.description!==void 0){if(!de(t.description))return{ok:!1,error:"reference.description must be an object"};let n=Or(t.description.pipe,"reference.description.pipe");if(n!==void 0)return{ok:!1,error:n}}if(t.guard!==void 0){if(!de(t.guard))return{ok:!1,error:"reference.guard must be an object"};let n=Or(t.guard.pipe,"reference.guard.pipe");if(n!==void 0)return{ok:!1,error:n}}for(let[n,r]of e.fields.entries()){if(!de(r))return{ok:!1,error:`fields[${n}] must be an object`};if(typeof r.key!="string"||!Fp.test(r.key))return{ok:!1,error:`fields[${n}].key must match ${Fp}`};if(typeof r.label!="string"||r.label.length===0)return{ok:!1,error:`fields[${n}].label must be a non-empty string`};let o=Or(r.pipe,`fields[${n}].pipe`);if(o!==void 0)return{ok:!1,error:o}}return{ok:!0,def:e}}function $n(){if(os!==void 0)return os;let e=[];for(let t of Dp){let n=CT(t);if(!n.ok)throw new Error(`invalid built-in source definition '${t.id}': ${n.error}`);e.push(n.def)}return os=new Ba(e),os}var Mp,rs,vT,Fp,Ba,os,ss=y(()=>{"use strict";Nr();tp();Lp();Mp=64,rs=8,vT=new Set(["path","coalesce","regex","template","join","const","transform"]);Fp=/^[\w-]+$/;Ba=class{constructor(t){this.definitions=t}all(){return this.definitions}byId(t){return this.definitions.find(n=>n.id===t)}match(t,n,r,o){return t==="claude"?this.definitions.find(s=>{let i=s.match.claude;return!(i===void 0||!i.prefixes.some(a=>n.startsWith(a))||i.exact!==void 0&&!i.exact.includes(n)||i.acceptSuffix!==void 0&&!n.endsWith(i.acceptSuffix)||i.denySuffixes?.some(a=>n.endsWith(a)))}):r!==void 0?this.definitions.find(s=>{let i=s.match.codex;return i!==void 0&&i.namespaceSuffix===r&&i.functionCallNames.includes(n)}):this.definitions.find(s=>{let i=s.match.codex;return i===void 0||!i.invocationTools.includes(n)?!1:i.invocationServer===void 0||i.invocationServer===o})}}});function jp(e,t){let n=$n().byId(e);if(n===void 0||n.storage.nativeIdPathSafe===!1){let r=t.replace(/[^\w.-]/g,"-"),o=LT(t).slice(0,8);return`${r}-${o}`}if(t.includes("..")||/[/\\]/.test(t))throw new Error(`Refusing unsafe ${e} nativeId for path: ${JSON.stringify(t)}`);return t}function Wa(e){return NT(e)}function xT(e){return e.replace(/^\n+/,"").replace(/\n+$/,"")}function IT(e){let t=e.indexOf(PT);return t===-1?e:e.slice(0,t)}function NT(e){if(typeof e!="string")return null;let t=e.split(`
`);if(t[0]?.trim()!=="---")return null;let n=-1;for(let _=1;_<t.length;_++)if(t[_].trim()==="---"){n=_;break}if(n===-1)return null;let r=t.slice(1,n),o=xT(IT(t.slice(n+1).join(`
`))),s={},i=[],a=!1;for(let _ of r){if(a){let N=/^\s+- (.+)$/.exec(_);if(N){try{let I=JSON.parse(N[1]);OT(I)&&i.push(I)}catch{}continue}a=!1}if(_.trim()==="fields:"){a=!0;continue}let R=/^([a-zA-Z]+):\s*(.+)$/.exec(_);R&&(s[R[1]]=R[2])}let l=_=>{let R=s[_];if(R!==void 0)try{let N=JSON.parse(R);return typeof N=="string"?N:void 0}catch{return}},c=l("source"),d=l("nativeId");if(c===void 0||d===void 0||!DT(c))return null;let u=c,p=d,m=l("title"),g=l("url"),h=l("referencedAt"),T=l("sourceToolName");return!m||h===void 0||!T?null:{mapKey:`${u}:${p}`,source:u,nativeId:p,title:m,referencedAt:h,toolName:T,...g!==void 0?{url:g}:{},...i.length>0?{fields:i}:{},...o.length>0?{description:o}:{}}}function OT(e){if(typeof e!="object"||e===null)return!1;let t=e;return!(typeof t.key!="string"||typeof t.label!="string"||typeof t.value!="string"||!/^[\w-]+$/.test(t.key)||t.icon!==void 0&&typeof t.icon!="string")}function DT(e){return e.length>0&&/^[\w-]+$/.test(e)}function Up(e){return $n().byId(e)!==void 0}function LT(e){return(0,$p.createHash)("sha256").update(e,"utf-8").digest("hex")}var $p,dD,PT,Dr=y(()=>{"use strict";$p=require("node:crypto");w();ss();dD=f("ReferenceStore");PT="<!-- jolli:auto-note -->"});function MT(e){return`${e.source}:${e.skill}`}function FT(e,t){if(e===void 0)return t;let n=e.usage===void 0||t.usage===void 0?e.usage??t.usage:{input:e.usage.input+t.usage.input,output:e.usage.output+t.usage.output,cached:e.usage.cached+t.usage.cached,confidence:e.usage.confidence==="attributed"&&t.usage.confidence==="attributed"?"attributed":"estimated"},r=[e,t].filter(l=>l.usage!==void 0),o=jT(r),{usageBySession:s,supersededDocIds:i,...a}=e;return{...a,invocationCount:e.invocationCount+t.invocationCount,...n!==void 0?{usage:n}:{},...o!==void 0?{usageBySession:o}:{},...e.detection==="heuristic"||t.detection==="heuristic"?{detection:"heuristic"}:{},...e.jolliDocId===void 0&&t.jolliDocId!==void 0?{jolliDocId:t.jolliDocId,jolliDocUrl:t.jolliDocUrl}:{},...$T(e,t)}}function $T(e,t){let n=new Set([...e.supersededDocIds??[],...t.supersededDocIds??[]]);e.jolliDocId!==void 0&&t.jolliDocId!==void 0&&n.add(t.jolliDocId);let r=e.jolliDocId??t.jolliDocId;return r!==void 0&&n.delete(r),n.size>0?{supersededDocIds:[...n]}:{}}function is(e){if(e.supersededDocIds===void 0)return e;let{supersededDocIds:t,...n}=e;return n}function jT(e){if(e.length===0)return;let t=[];for(let r of e){if(r.usageBySession===void 0)return;t.push(r.usageBySession)}let n={};for(let r of t)for(let[o,s]of Object.entries(r)){let i=n[o];n[o]=i===void 0?s:{input:i.input+s.input,cached:i.cached+s.cached,output:i.output+s.output,confidence:i.confidence==="attributed"&&s.confidence==="attributed"?"attributed":"estimated"}}return n}function as(e){let t=new Map;for(let r of e)t.has(r.archivedKey)||t.set(r.archivedKey,r);let n=new Map;for(let r of t.values()){let o=MT(r);n.set(o,FT(n.get(o),r))}return[...n.values()]}var Ja=y(()=>{"use strict"});var fD,Hp=y(()=>{"use strict";w();fD=f("SkillStore")});async function ls(e){let t=j(e);return await(0,ue.mkdir)(t,{recursive:!0}),t}async function Kp(e,t){let n=await ls(t);await ju(t,async()=>{let o={...(await VT(n)).sessions,[e.sessionId]:e},{activeSessions:s,stalePaths:i}=XT(o),a={version:1,sessions:s};await P((0,mt.join)(n,Jp),JSON.stringify(a,null,"	")),i.length>0&&await zT(n,i)})}async function WT(e,t,n){await P((0,mt.join)(t,n),JSON.stringify(e,null,"	"))}function pe(){return(0,mt.join)((0,Wp.homedir)(),".jolli","jollimemory")}async function Xt(e){let t=(0,mt.join)(e,qp);try{let n=await(0,ue.readFile)(t,"utf-8"),r=JSON.parse(n);return JT(r)}catch{return Yt.debug("No config file found in %s, using defaults",e),{}}}function JT(e){if(e.syncEnabled===void 0)return e;let{syncEnabled:t,...n}=e;return n.autoSyncEnabled===void 0?{...n,autoSyncEnabled:t}:n}function GT(e,t){return!("localAgentTool"in t)||"localAgentPath"in t||(e.localAgentTool??"claude-code")===(t.localAgentTool??"claude-code")||e.localAgentPath===void 0?t:(Yt.info("Clearing localAgentPath (was set for %s, switching to %s)",e.localAgentTool??"claude-code",t.localAgentTool),{...t,localAgentPath:void 0})}async function Mr(e,t){await Ea(t,async()=>{await Vp(e,t)}),Yt.info("Config saved to %s",t)}async function cs(e){return qT(e,pe())}async function qT(e,t){return Ea(t,async()=>{let{update:n,result:r}=e(await Xt(t));return n!==null&&(await Vp(n,t),Yt.info("Config saved to %s",t)),r})}async function Vp(e,t){let n=await Xt(t),r={...n,...GT(n,e)};await P((0,mt.join)(t,qp),JSON.stringify(r,null,"	"))}async function re(){return Xt(pe())}async function ft(e){return Mr(e,pe())}async function Yp(){return KT(pe())}async function KT(e){let t=await Xt(e);if(t.installId)return{installId:t.installId,created:!1};let n=(0,mt.join)(e,HT),r=(0,Lr.randomUUID)();await(0,ue.mkdir)(e,{recursive:!0});let o,s,i=`${n}.${(0,Lr.randomUUID)()}.tmp`;try{await(0,ue.writeFile)(i,r,{flag:"wx"});try{await(0,ue.link)(i,n),o=r,s=!0}catch{o=await Bp(n,r),s=!1}}catch(a){Yt.warn("could not stage the install-id sentinel: %s",k(a)),o=await Bp(n,r),s=!1}finally{await(0,ue.rm)(i,{force:!0}).catch(()=>{})}return t.installId!==o&&await Mr({installId:o},e).catch(a=>{Yt.warn("could not persist the install id: %s",k(a))}),{installId:o,created:s}}async function Bp(e,t){try{let n=(await(0,ue.readFile)(e,"utf-8")).trim();return n.length>0?n:t}catch{return t}}async function VT(e){let t=(0,mt.join)(e,Jp);try{let n=await(0,ue.readFile)(t,"utf-8");return JSON.parse(n)}catch{return{version:1,sessions:{}}}}async function YT(e,t=Gp){let n=(0,mt.join)(e,t);try{let r=await(0,ue.readFile)(n,"utf-8");return JSON.parse(r)}catch{return{version:1,cursors:{}}}}function XT(e,t=BT){let n=Date.now(),r={},o=[];for(let[s,i]of Object.entries(e)){let a=n-new Date(i.updatedAt).getTime();a>t?(Yt.info("Pruning stale session %s (age: %dh)",s,Math.round(a/36e5)),o.push(i.transcriptPath)):r[s]=i}return{activeSessions:r,stalePaths:o}}async function zT(e,t){let n=new Set(t);for(let r of[Gp,UT]){let s={...(await YT(e,r)).cursors},i=0;for(let a of Object.keys(s))n.has(a)&&(delete s[a],i++);i>0&&await WT({version:1,cursors:s},e,r)}}function Ga(e,t){let n={...e},r=!1;for(let o of t)o in n&&(delete n[o],r=!0);return{value:n,changed:r}}function Xp(e){let t=!1,n={};for(let[i,a]of Object.entries(e.plans??{})){if(a.ignored===!0){t=!0;continue}let l=Ga(a,QT);l.changed&&(t=!0),n[i]=l.value}let r;if(e.notes!==void 0){r={};for(let[i,a]of Object.entries(e.notes)){if(a.ignored===!0){t=!0;continue}let l=Ga(a,ZT);l.changed&&(t=!0),r[i]=l.value}}let o;if(e.references!==void 0){o={};for(let[i,a]of Object.entries(e.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){t=!0;continue}let c=Ga(a,e_);c.changed&&(t=!0),o[i]=c.value}}return{registry:{version:1,plans:n,...r!==void 0?{notes:r}:{},...o!==void 0?{references:o}:{},...e.skills!==void 0?{skills:e.skills}:{}},changed:t}}var Lr,ue,Wp,mt,Yt,Jp,Gp,UT,qp,HT,BT,ID,PD,ND,QT,ZT,e_,me=y(()=>{"use strict";Lr=require("node:crypto"),ue=require("node:fs/promises"),Wp=require("node:os"),mt=require("node:path");w();ns();ce();Ye();Dr();Ja();Hp();Yt=f("SessionTracker"),Jp="sessions.json",Gp="cursors.json",UT="discovery-cursors.json",qp="config.json",HT="install-id",BT=2880*60*1e3;ID=2880*60*1e3,PD=10080*60*1e3,ND=(0,Lr.randomBytes)(4).toString("hex");QT=["ignored","branch","editCount"],ZT=["ignored","branch"],e_=["ignored","branch","commitHash","contentHashAtCommit"]});function $e(e,t=""){let n=t?` ${t}`:"";return`${t_} ${e}${n}`}function $r(e,t){let n=typeof t=="string"?[t]:t;return e.some(r=>{let o=r.hooks;return Array.isArray(o)?o.some(s=>typeof s.command=="string"&&n.some(i=>s.command.includes(i))):!1})}function zt(e,t){let n=typeof t=="string"?[t]:t,r=[];for(let o of e){let s=o.hooks;if(!Array.isArray(s)){r.push(o);continue}let i=s.filter(a=>!(typeof a.command=="string"&&n.some(l=>a.command.includes(l))));i.length>0&&r.push({...o,hooks:i})}return r}function qa(e){return $r(e,ds)}function ps(e){return zt(e,ds)}var t_,ds,Fr,us,ms=y(()=>{"use strict";t_='"$HOME/.jolli/jollimemory/run-hook"';ds=["run-hook","StopHook","jollimemory-hooks.jar"],Fr=["run-hook","SessionStartHook"],us=["run-hook","GeminiAfterAgentHook","jollimemory-hooks.jar"]});function yt(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>ht.major?!0:n<ht.major?!1:r>=ht.minor}function en(e){let t=e,n=t?.message??String(e),r=t?.code;return r==="ENOENT"?null:r==="EACCES"||r==="EPERM"?{kind:"permission",message:n}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(n)?{kind:"corrupt",message:n}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(n)?{kind:"locked",message:n}:/no such table|no such column/i.test(n)?{kind:"schema",message:n}:/SQLITE_CANTOPEN|unable to open/i.test(n)?{kind:"permission",message:n}:{kind:"unknown",message:n}}var ht,ze=y(()=>{"use strict";ht={major:22,minor:13}});function a_(){return i_.width}async function Hn(e,t,n=a_()){let r=new Array(e.length),o=0,s=Math.max(1,Math.min(n,e.length)),i=Array.from({length:s},async()=>{for(;;){let a=o++;if(a>=e.length)return;r[a]=await t(e[a],a)}});return await Promise.all(i),r}var Qa,i_,Bn=y(()=>{"use strict";Qa=class{constructor(){this.slots=8;this.bytesCap=67108864;this.slotsInUse=0;this.bytesInUse=0;this.waiting=[]}get width(){return this.slots}configure(t){t.slots!==void 0&&(this.slots=Math.max(1,Math.floor(t.slots))),t.bytesInFlight!==void 0&&(this.bytesCap=Math.max(0,Math.floor(t.bytesInFlight))),this.pump()}reset(){this.slots=8,this.bytesCap=67108864,this.pump()}async run(t,n){let r=await this.acquire(Math.max(0,t));try{return await n()}finally{this.slotsInUse--,this.bytesInUse-=r,this.pump()}}clamp(t){return Math.min(t,this.bytesCap)}fits(t){return this.slotsInUse<this.slots&&this.bytesInUse+this.clamp(t)<=this.bytesCap}acquire(t){return this.waiting.length===0&&this.fits(t)?Promise.resolve(this.take(t)):new Promise(n=>{this.waiting.push({want:t,wake:n})})}take(t){let n=this.clamp(t);return this.slotsInUse++,this.bytesInUse+=n,n}pump(){for(;this.waiting.length>0&&this.fits(this.waiting[0].want);){let t=this.waiting.shift();t.wake(this.take(t.want))}}},i_=new Qa});function Qm(e){if((0,zm.platform)()==="win32")try{yu("attrib",["+h",e],{timeout:2e3})}catch{}}var zm,Zm=y(()=>{"use strict";zm=require("node:os");Re()});var ef,Y,ve,Gn,he,Rs=y(()=>{"use strict";ef=require("node:crypto"),Y=require("node:fs"),ve=require("node:path");w();Zm();te();Gn=f("MetadataManager"),he=class e{constructor(t){this.jolliDir=t;this.manifestPath=(0,ve.join)(t,"manifest.json"),this.branchesPath=(0,ve.join)(t,"branches.json"),this.configPath=(0,ve.join)(t,"config.json"),this.migrationPath=(0,ve.join)(t,"migration.json"),this.indexPath=(0,ve.join)(t,"index.json")}ensure(){(0,Y.mkdirSync)(this.jolliDir,{recursive:!0})!==void 0&&Qm(this.jolliDir),(0,Y.existsSync)(this.manifestPath)||this.atomicWrite(this.manifestPath,JSON.stringify({version:1,files:[]},null,"	")),(0,Y.existsSync)(this.branchesPath)||this.atomicWrite(this.branchesPath,JSON.stringify({version:1,mappings:[]},null,"	")),(0,Y.existsSync)(this.configPath)||this.atomicWrite(this.configPath,JSON.stringify({version:1,sortOrder:"date"},null,"	"))}readManifest(){return this.readJson(this.manifestPath)??{version:1,files:[]}}updateManifest(t){let n=this.readManifest(),r=n.files.filter(o=>o.fileId!==t.fileId);r.push(t),this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),Gn.info("Manifest updated: %s (%s)",t.path,t.type)}removeFromManifest(t){let n=this.readManifest(),r=n.files.filter(o=>o.fileId!==t);return r.length===n.files.length?!1:(this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),!0)}unregisterFilesByType(t){let n=this.readManifest(),r=n.files.filter(s=>s.type!==t),o=n.files.length-r.length;return o===0?0:(this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),Gn.info("Manifest unregistered %d entries of type=%s",o,t),o)}replaceFiles(t){let n=this.readManifest();this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:[...t]},null,"	"))}findByPath(t){return this.readManifest().files.find(n=>n.path===t)}findById(t){return this.readManifest().files.find(n=>n.fileId===t)}updatePath(t,n){let r=this.readManifest();if(!r.files.find(i=>i.fileId===t))return!1;let s=r.files.map(i=>i.fileId===t?{...i,path:n}:i);return this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:s},null,"	")),!0}resolveFolderForBranch(t){let n=this.readBranches(),r=n.mappings.find(a=>a.branch===t);if(r)return r.folder;let o=e.transcodeBranchName(t),s={folder:o,branch:t,createdAt:new Date().toISOString()},i={...n,mappings:[...n.mappings,s]};return this.atomicWrite(this.branchesPath,JSON.stringify(i,null,"	")),Gn.info("Branch mapping created: %s \u2192 %s",t,o),o}removeBranchMapping(t){let n=this.readBranches(),r=n.mappings.filter(o=>o.branch!==t);return r.length===n.mappings.length?!1:(this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:r},null,"	")),Gn.info("Branch mapping removed: %s (no remaining head)",t),!0)}renameBranchFolder(t,n){let r=this.readBranches(),o=r.mappings.map(l=>l.folder===t?{...l,folder:n}:l);this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:o},null,"	"));let s=this.readManifest(),i=0,a=s.files.map(l=>l.path.startsWith(`${t}/`)?(i++,{...l,path:l.path.replace(`${t}/`,`${n}/`)}):l);return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...s,files:a},null,"	")),i}removeBranchFolder(t){let n=this.readBranches();this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:n.mappings.filter(i=>i.folder!==t)},null,"	"));let r=this.readManifest(),o=r.files.filter(i=>!i.path.startsWith(`${t}/`)),s=r.files.length-o.length;return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:o},null,"	")),s}unregisterBranches(t){let n=new Set(t);if(n.size===0)return 0;let r=this.readBranches(),o=r.mappings.filter(i=>!n.has(i.branch)),s=r.mappings.length-o.length;return s===0?0:(this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:o},null,"	")),Gn.info("Branch mappings unregistered: %d",s),s)}readBranches(){return this.readJson(this.branchesPath)??{version:1,mappings:[]}}listBranchMappings(){return this.readBranches().mappings}folderToBranch(t){try{return this.listBranchMappings().find(n=>n.folder===t)?.branch??t}catch{return t}}listIndexHeads(){let t=this.readJson(this.indexPath);return!t||!Array.isArray(t.entries)?[]:t.entries.filter(n=>typeof n?.commitHash=="string"&&typeof n.branch=="string"&&(n.parentCommitHash===null||typeof n.parentCommitHash=="string")&&n.parentCommitHash===null)}readIndex(){return this.readJson(this.indexPath)}readConfig(){return this.readJson(this.configPath)??{version:1,sortOrder:"date"}}saveConfig(t){this.atomicWrite(this.configPath,JSON.stringify(t,null,"	"))}readMigrationState(){return this.readJson(this.migrationPath)}saveMigrationState(t){this.atomicWrite(this.migrationPath,JSON.stringify(t,null,"	"))}reconcile(t){let n=this.readManifest();if(n.files.length===0||!n.files.some(a=>!(0,Y.existsSync)((0,ve.join)(t,a.path))))return 0;let o=new Map;try{this.walkDir(t,t,o)}catch{}let s=0,i=[];for(let a of n.files){let l=(0,ve.join)(t,a.path);if((0,Y.existsSync)(l))i.push(a);else{let c=o.get(a.fingerprint);c&&c!==a.path?(i.push({...a,path:c}),s++):(Gn.warn("Manifest entry '%s' (id=%s) not found on disk \u2014 keeping entry to avoid data loss",a.path,a.fileId),i.push(a))}}return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:i},null,"	")),s}walkDir(t,n,r){for(let o of(0,Y.readdirSync)(t,{withFileTypes:!0})){if(o.name.startsWith("."))continue;let s=(0,ve.join)(t,o.name);if(o.isDirectory())this.walkDir(s,n,r);else if(o.name.endsWith(".md"))try{let i=(0,Y.readFileSync)(s,"utf-8"),a=e.sha256(i);r.set(a,_e((0,ve.relative)(n,s)))}catch{}}}static transcodeBranchName(t){let n=t.replace(/[/\\:*?~^]/g,"-");return n=n.replace(/-{3,}/g,"-"),n=n.replace(/\.\./g,"--"),n=n.replace(/^[.-]+|[.-]+$/g,""),n||"default"}static sha256(t){return(0,ef.createHash)("sha256").update(t,"utf-8").digest("hex")}readJson(t){if(!(0,Y.existsSync)(t))return null;try{return JSON.parse((0,Y.readFileSync)(t,"utf-8"))}catch{return null}}atomicWrite(t,n){let r=(0,ve.dirname)(t);(0,Y.mkdirSync)(r,{recursive:!0});let o=`${t}.tmp`;(0,Y.writeFileSync)(o,n,"utf-8"),(0,Y.renameSync)(o,t)}}});function iR(e,t){if(process.env.VITEST)return null;let n=t?`${t}@${e}`:e;try{return Ee("ssh",["-G",n],{encoding:"utf-8",timeout:rR,stdio:["ignore","pipe","pipe"]})}catch(r){return nR.debug("ssh -G %s failed: %s",n,r instanceof Error?r.message:String(r)),null}}function nf(e,t){let n=new RegExp(`^${t}\\s+(\\S+)`,"i");for(let r of e.split(/\r?\n/)){let o=r.match(n);if(o?.[1])return o[1]}return null}function qn(e,t){if(!e)return{host:e,port:"",endpointRemapped:!1};let n=`${t??""}\0${e}`,r=tf.get(n);if(r!==void 0)return r;let o=e,s="",i=sR(e,t);if(i){let c=nf(i,"hostname");c&&(o=c);let d=nf(i,"port");d&&(s=d)}let a=oR.get(o.toLowerCase()),l=a?{host:a,port:"",endpointRemapped:!0}:{host:o,port:s,endpointRemapped:!1};return tf.set(n,l),l}function Kn(e){return e.includes(":")&&!e.startsWith("[")?`[${e}]`:e}var nR,rR,oR,tf,sR,yl=y(()=>{"use strict";w();Re();nR=f("SshAliasResolver"),rR=5e3,oR=new Map([["ssh.github.com","github.com"],["altssh.gitlab.com","gitlab.com"],["altssh.bitbucket.org","bitbucket.org"]]),tf=new Map,sR=iR});function rf(){return(0,oe.join)((0,af.homedir)(),"Documents","jolli")}function El(e){return e?lR(e)?e:(aR.warn("Invalid customPath '%s': must be absolute and not contain '..'. Falling back to default.",e),rf()):rf()}function lR(e){return e?(0,oe.isAbsolute)(e)&&!e.includes(".."):!0}function lf(e,t,n){let r=El(n),o=(0,oe.join)(r,e);if(!(0,Dt.existsSync)(o)){let i=hf(r,e,t).match;return i||(Sl(o,e,t),o)}let s=wf(o);return s&&mf(s,t,e)?o:s&&yf(o,s)?(Sl(o,e,t),o):mR(r,e,t)}function cf(e){let t=Tl(e,["config","--get","remote.origin.url"]);if(t){let r=t.match(/\/([^/]+?)(?:\.git)?$/);if(r?.[1])return r[1]}let n=df(e);return n?(0,oe.basename)(n):(0,oe.basename)(e)||"unknown"}function df(e){let t=Tl(e,["rev-parse","--git-common-dir"]);if(!t)return null;let n=(0,oe.isAbsolute)(t)?t:(0,oe.join)(e,t),r=(0,oe.dirname)(n);return r&&r!=="/"&&r!=="."?r:null}function cR(e,t){if(!(0,oe.basename)(e))return{claimable:!1,blocker:"not-a-project"};let n=df(e);if(!n)return{claimable:!1,blocker:"not-a-project"};let r;try{r=El(t)}catch{return{claimable:!1,blocker:"unresolvable-folder"}}return ia(r,n)?{claimable:!1,blocker:"folder-inside-repo"}:{claimable:!0}}function bl(e,t){return cR(e,t).claimable}function uf(){let e=Number(process.env.JOLLI_GIT_CMD_TIMEOUT_MS);return Number.isFinite(e)&&e>0?e:3e4}function dR(){return Math.min(uf(),5e3)}function uR(e){return typeof e=="object"&&e!==null&&e.code==="ETIMEDOUT"}function of(e,t,n=uf()){return Ee("git",t,{cwd:e,encoding:"utf-8",timeout:n,stdio:["ignore","pipe","pipe"]}).trim()||null}function Tl(e,t){try{return of(e,t)}catch(n){if(!uR(n))return null;try{return of(e,t,dR())}catch{return null}}}function pf(e){return Tl(e,["remote","get-url","origin"])}function mf(e,t,n){return e.remoteUrl&&t?sf(e.remoteUrl)===sf(t):!e.remoteUrl&&!t?e.repoName==null||e.repoName===n:!1}function sf(e){return gf(e).replace(/\/+$/,"").replace(/\.git$/,"").toLowerCase()}function Vr(e,t){return pR.has(e)?t:""}function gf(e){let t=e.match(/^(?:git\+)?ssh:\/\/(?:([^@/]+)@)?([^/:]+)(?::(\d+))?\/(.+)$/i);if(t){let o=qn(t[2],t[1]||void 0),s=o.endpointRemapped?"":t[3]??o.port,i=Vr(o.host.toLowerCase(),s);return`https://${Kn(o.host)}${wl(i,"22")}/${t[4]}`}let n=e.match(/^git:\/\/([^/:]+)(?::(\d+))?\/(.+)$/i);if(n)return`https://${n[1]}${wl(n[2],"9418")}/${n[3]}`;let r=e.match(/^([^@/:]+)@([^/:]+):(.+)$/);if(r){let o=qn(r[2],r[1]||void 0),s=Vr(o.host.toLowerCase(),o.port);return`https://${Kn(o.host)}${wl(s,"22")}/${r[3]}`}return e}function wl(e,t){return!e||e===t?"":`:${e}`}function hf(e,t,n){let r=null,o=null,s=null;for(let i=2;i<=99;i++){let a=(0,oe.join)(e,`${t}-${i}`);if(!(0,Dt.existsSync)(a)){s===null&&(s=a);continue}let l=wf(a);if(l&&mf(l,n,t)){r=a;break}l&&o===null&&yf(a,l)&&(o=a)}return{match:r,stub:o,firstUnused:s}}function mR(e,t,n){let r=hf(e,t,n);if(r.match)return r.match;let o=r.stub??r.firstUnused??(0,oe.join)(e,`${t}-${Date.now()}`);return Sl(o,t,n),o}function Sl(e,t,n){if(J())return;let r=new he((0,oe.join)(e,".jolli"));r.ensure();let o=r.readConfig();r.saveConfig({...o,remoteUrl:n??void 0,repoName:t})}function yf(e,t){return t.remoteUrl==null&&t.repoName==null}function wf(e){let t=(0,oe.join)(e,".jolli","config.json");if(!(0,Dt.existsSync)(t))return null;try{return JSON.parse((0,Dt.readFileSync)(t,"utf-8"))}catch{return null}}var Dt,af,oe,aR,ff,pR,Yr=y(()=>{"use strict";Dt=require("node:fs"),af=require("node:os"),oe=require("node:path");w();Re();Rs();te();yl();aR=f("KBPathResolver");ff=new Set(["github.com","gitlab.com","bitbucket.org"]),pR=new Set(["github.com","gitlab.com","bitbucket.org"])});async function Al(e){let t=await G(["config","--get","remote.origin.url"],e),n=t.exitCode===0?t.stdout.trim():"";return n.length===0?Xr(e):If(n,e)}function If(e,t){let n=e.trim();if(n.length===0)return Xr(t);let r=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(n);if(r&&!n.includes("://")){let i=qn(r[2],r[1].slice(0,-1)||void 0),a=i.host.toLowerCase(),l=Cf(a,Af(r[3])),c=xf("ssh",Vr(a,i.port));return`https://${Kn(a)}${c}/${l}`}let o;try{o=new URL(n)}catch{return Xr(t)}let s=o.protocol.replace(/:$/,"").toLowerCase();if(s==="ssh"||s==="git"||s==="http"||s==="https"){let a=s==="ssh"?qn(o.hostname,o.username||void 0):{host:o.hostname,port:"",endpointRemapped:!1},l=a.host.toLowerCase(),c=Cf(l,Af(o.pathname.replace(/^\/+/,""))),d=a.endpointRemapped?"":o.port!==""?o.port:a.port,u=s==="ssh"?Vr(l,d):d,p=xf(s,u);return`https://${Kn(l)}${p}/${c}`}return Xr(s==="file"?o.pathname:t)}function Xr(e){let t=vn(_e(e));return t.length===0?"file:///":t.startsWith("/")?`file://${t}`:`file:///${t}`}function Af(e){let t=vn(e);return t.toLowerCase().endsWith(".git")&&(t=t.slice(0,-4)),vn(t)}function Cf(e,t){return ff.has(e)?t.toLowerCase():t}function xf(e,t){return t.length===0?"":e==="ssh"||e==="git"?t===SR[e]?"":`:${t}`:`:${t}`}var SR,xs=y(()=>{"use strict";be();Yr();te();yl();SR={ssh:"22",git:"9418"}});function Cl(){return"claude-plugin"}var Lt,Vn=y(()=>{"use strict";Lt="claude-plugin/1.0.5"});function U(e,t,n,r){if(!Jf.test(t))throw new Error(`unsafe table name in migration: ${t}`);if(!Jf.test(n))throw new Error(`unsafe column name in migration: ${n}`);if(!jR.test(r))throw new Error(`unsafe column declaration in migration: ${r}`);e.prepare("SELECT name FROM pragma_table_info(?)").all(t).some(s=>s.name===n)||e.exec(`ALTER TABLE ${t} ADD COLUMN ${n} ${r};`)}var z,Jf,jR,X=y(()=>{"use strict";z=(e,t)=>({name:e,sql:t,run:n=>n.exec(t)}),Jf=/^[A-Za-z_][A-Za-z0-9_]*$/,jR=/^[A-Za-z0-9_ '.-]+$/});var UR,HR,Gf,qf=y(()=>{"use strict";X();UR=`
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
`,HR=`
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
`,Gf=z("BASELINE_DDL",UR+`
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
`+HR)});var Kf,Vf=y(()=>{"use strict";X();Kf=z("RECALL_RECEIPTS_DDL",`
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
`)});var Yf,Xf=y(()=>{"use strict";X();Yf=z("SKILL_CONTEXT_KIND_DDL",`
INSERT OR IGNORE INTO context_kinds (kind) VALUES ('skill');
`)});var zf,Qf=y(()=>{"use strict";X();zf={name:"EVENT_FAILED_KIND_DDL",run:e=>U(e,"events_raw","failed_kind","TEXT")}});var Zf,eg=y(()=>{"use strict";X();Zf={name:"TOOL_CALL_TIME_DDL",run:e=>U(e,"session_tool_use","last_call_at_ms","INTEGER")}});var tg,ng=y(()=>{"use strict";X();tg=z("SCHEMA_MIGRATIONS_DDL",`
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
`)});var rg,og=y(()=>{"use strict";X();rg=z("REPOS_DELETE_ALLOWED_DDL",`
DROP TRIGGER IF EXISTS repos_no_delete;
`)});function YR(e){U(e,"sessions","written_at_ms","INTEGER NOT NULL DEFAULT 0"),U(e,"session_model_usage","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),U(e,"session_tool_use","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),U(e,"recall_receipts","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),U(e,"commits","written_at_ms","INTEGER NOT NULL DEFAULT 0"),e.exec(BR),e.exec(JR),e.exec(GR),e.exec(qR),e.exec(VR),e.exec(KR)}var BR,WR,JR,GR,qR,KR,VR,sg,ig=y(()=>{"use strict";X();BR=`
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
`,WR=`
CREATE INDEX IF NOT EXISTS ix_stats_daily_day ON stats_daily(tz, day);
`,JR=`
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
${WR}
`,GR=`
CREATE INDEX IF NOT EXISTS ix_sessions_written ON sessions(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_smu_sync ON session_model_usage(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_stu_sync ON session_tool_use(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_sync ON recall_receipts(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_commits_written ON commits(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_mem_written ON memories(written_at_ms);
`,qR=`
CREATE INDEX IF NOT EXISTS ix_sessions_keyset ON sessions(written_at_ms, event_id);
CREATE INDEX IF NOT EXISTS ix_smu_keyset ON session_model_usage(updated_at_ms, session_event_id, model);
CREATE INDEX IF NOT EXISTS ix_stu_keyset ON session_tool_use(updated_at_ms, session_event_id, tool_name, kind);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_keyset ON recall_receipts(updated_at_ms, receipt_id);
`,KR=`
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
`,VR=`
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
`;sg={name:"SESSION_STATS_SYNC_DDL",run:YR}});var ag,lg=y(()=>{"use strict";X();ag=z("SESSION_ACTIVITY_DDL",`
CREATE TABLE IF NOT EXISTS session_activity (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  bucket_ms        INTEGER NOT NULL,
  recorded_at_ms   INTEGER NOT NULL,
  PRIMARY KEY (session_event_id, bucket_ms)
) STRICT;
CREATE INDEX IF NOT EXISTS ix_activity_bucket ON session_activity(bucket_ms);
CREATE INDEX IF NOT EXISTS ix_activity_recorded ON session_activity(recorded_at_ms);
`)});var cg,dg=y(()=>{"use strict";X();cg={name:"SKILL_TOKEN_USAGE_DDL",run:e=>{U(e,"session_tool_use","input_tokens","INTEGER"),U(e,"session_tool_use","output_tokens","INTEGER"),U(e,"session_tool_use","cached_tokens","INTEGER"),U(e,"session_tool_use","usage_confidence","TEXT")}}});var ug,pg=y(()=>{"use strict";X();ug=z("SKILL_INVOCATIONS_DDL",`
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
`)});var mg,fg=y(()=>{"use strict";X();mg={name:"SKILL_PLUGIN_DDL",run:e=>U(e,"session_tool_use","plugin","TEXT")}});var gg,hg=y(()=>{"use strict";X();gg={name:"SKILL_ORIGIN_ROOT_DDL",run:e=>U(e,"session_tool_use","origin_root","TEXT")}});var yg,wg=y(()=>{"use strict";X();yg=z("2026-08-25-0000-memory-transcripts-covering-index",`
CREATE INDEX IF NOT EXISTS ix_mt_transcript_covering
  ON memory_transcripts(repo_id, transcript_id, commit_hash);
`)});var Sg,Eg=y(()=>{"use strict";X();Sg={name:"2026-08-25-0001-memory-reachable",run:e=>U(e,"memories","reachable","INTEGER NOT NULL DEFAULT 1")}});var bg,Tg=y(()=>{"use strict";X();bg={name:"2026-08-25-0002-commit-reachable",run:e=>U(e,"commits","reachable","INTEGER NOT NULL DEFAULT 1")}});var Ps,$l=y(()=>{"use strict";qf();Vf();Xf();Qf();eg();ng();og();ig();lg();dg();pg();fg();hg();wg();Eg();Tg();X();Ps=[Gf,Kf,Yf,zf,Zf,tg,rg,sg,ag,cg,ug,mg,gg,yg,Sg,bg]});function Zr(){return(0,Ds.join)(pe(),"jollimemory.db")}function on(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>Qr.major?!0:n<Qr.major?!1:r>=Qr.minor}function ZR(e){try{return(e.prepare("SELECT COUNT(*) AS n FROM sqlite_master WHERE type = 'table' AND name = 'schema_migrations'").get()?.n??0)>0?"present":"absent"}catch{return"unknown"}}function Hl(e){try{return{kind:"rows",rows:e.prepare("SELECT seq, slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl FROM schema_migrations ORDER BY seq").all()}}catch(t){let n=ZR(e);return n==="absent"?{kind:"none"}:{kind:"unreadable",reason:k(t),tableConfirmed:n==="present"}}}function _g(e){let t=Hl(e);return t.kind==="rows"?t.rows:void 0}function Ns(e,t){e.prepare(`INSERT INTO schema_migrations (slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t.slot,t.name,t.outcome,t.appliedBy,t.atMs,t.durationMs,t.ddl)}function ek(e){let t=new Map;for(let n of e){let r=t.get(n.name);(!r||n.seq>r.seq)&&t.set(n.name,n)}return t}function jl(e){return e.sql??""}function tk(e){let t=Hl(e);if(t.kind==="none")return;if(t.kind==="unreadable"){Os.has(Rg)||(Os.add(Rg),Mt.warn(t.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`":"the database could not be queried for its migration log (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`",t.reason));return}let n=t.rows,r=new Set(Ps.map(o=>o.name));for(let[o,s]of ek(n))r.has(o)||Os.has(o)||(Os.add(o),Mt.warn("migration %s was touched by %s but is unknown to this build (%s) \u2014 the database has been opened by another build",o,s.applied_by,Lt))}function nk(e,t={}){let n=t.now??Date.now,r=t.appliedBy??Lt,o=Hl(e),s=new Set;if(o.kind==="rows")for(let c of o.rows)(c.outcome==="applied"||c.outcome==="baseline")&&s.add(c.name);else o.kind==="none"?Mt.info("no migration log in this database \u2014 replaying every entry (all are re-runnable)"):Mt.warn(o.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 replaying every entry and recording nothing":"the database could not be queried for its migration log (%s) \u2014 replaying every entry and recording nothing",o.reason);let i=Ps.map((c,d)=>({m:c,slot:d})).filter(({m:c})=>!s.has(c.name));if(i.length===0)return;let a=[],l=()=>{for(let c of a)Ns(e,c);a.length=0};e.exec("PRAGMA foreign_keys = OFF");try{for(let{m:c,slot:d}of i){let u=n();e.exec("BEGIN IMMEDIATE");try{if(_g(e)?.some(g=>g.name===c.name&&(g.outcome==="applied"||g.outcome==="baseline"))){l(),Ns(e,{slot:d,name:c.name,outcome:"skipped",appliedBy:r,atMs:n(),durationMs:0,ddl:jl(c)}),e.exec("COMMIT");continue}c.run(e);let m={slot:d,name:c.name,outcome:"applied",appliedBy:r,atMs:n(),durationMs:n()-u,ddl:jl(c)};_g(e)?(l(),Ns(e,m)):a.push(m),e.exec("COMMIT")}catch(p){try{e.exec("ROLLBACK")}catch{}try{e.prepare("DELETE FROM schema_migrations WHERE name = ? AND outcome = 'failed'").run(c.name),Ns(e,{slot:d,name:c.name,outcome:"failed",appliedBy:r,atMs:n(),durationMs:n()-u,ddl:jl(c)})}catch(m){Mt.debug("could not record the failed migration %s: %s",c.name,k(m))}throw p}}}finally{e.exec("PRAGMA foreign_keys = ON")}Mt.info("dashboard schema migrated: %s",i.map(({m:c})=>c.name).join(", "))}function rk(e){let t=(0,Ds.dirname)(e);try{(0,St.mkdirSync)(t,{recursive:!0,mode:448}),((0,St.statSync)(t).mode&511)!==448&&(0,St.chmodSync)(t,448)}catch(n){Mt.warn("could not restrict %s to owner-only: %s",t,k(n))}}function ok(e){for(let t of[e,`${e}-wal`,`${e}-shm`])try{((0,St.statSync)(t).mode&511)!==384&&(0,St.chmodSync)(t,384)}catch(n){Kt(n)||Mt.warn("could not restrict %s to 0600: %s",t,k(n))}}async function kg(e,t){if(!on())throw new Ul(process.versions.node);let n=t.dbPath??Zr(),r=t.maxAttempts??4,o=t.baseDelayMs??50;e||rk(n);let{DatabaseSync:s}=await import("node:sqlite");for(let i=1;;i++){let a;try{a=new s(n,{readOnly:e});for(let l of e?zR:XR)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${t.busyTimeoutMs??QR}`),e||ok(n),a}catch(l){try{a?.close()}catch{}if(en(l)?.kind!=="locked"||i>=r)throw l;await new Promise(c=>setTimeout(c,o*2**(i-1)))}}}async function vg(e,t={}){let n=await kg(!1,t);try{return tk(n),nk(n),await e(n)}finally{n.close()}}async function Bl(e,t={}){let n=await kg(!0,t);try{return await e(n)}finally{n.close()}}function Ls(e,t){e.exec("BEGIN IMMEDIATE");try{let n=t();return e.exec("COMMIT"),n}catch(n){try{e.exec("ROLLBACK")}catch{}throw n}}var St,Ds,Mt,Qr,Ul,XR,zR,QR,Os,Rg,Ft=y(()=>{"use strict";St=require("node:fs"),Ds=require("node:path");Vn();me();ze();w();$l();$l();X();Mt=f("DashboardDb"),Qr={major:22,minor:13};Ul=class extends Error{constructor(t){super(`The Jolli dashboard needs Node >= ${Qr.major}.${Qr.minor} for built-in SQLite (running ${t}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},XR=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],zR=["PRAGMA foreign_keys = ON"],QR=2e3;Os=new Set,Rg="\0unreadable-log"});function Wl(e){let t=s=>{try{return(0,eo.statSync)(`${e}${s}`),!0}catch{return!1}},n=t(""),r=t("-wal"),o=t("-shm");return n?r&&o?"healthy-active":r?"healthy-recoverable":"healthy-clean":r||o?"alarm-sidecars-only":"absent"}var eo,Z$,Jl=y(()=>{"use strict";eo=require("node:fs");w();Z$=f("DbDetection")});async function ak(e){try{let n=await Al(e);if(n&&!n.startsWith("file:"))return{identity:n,remoteUrl:n}}catch(n){sk.debug("no canonical remote for %s (%s) \u2014 using path identity",e,k(n))}let t=(0,Ag.createHash)("sha256").update(_e(e)).digest("hex").slice(0,32);return{identity:`${ik}${t}`}}async function sn(e){return ak(await ga(e))}var Ag,sk,ik,Yn=y(()=>{"use strict";Ag=require("node:crypto");ka();be();xs();Ye();te();Xe();me();w();sk=f("RepoRegistry"),ik="local:"});var xg={};Sr(xg,{hasCutoverRow:()=>pk,resetCutoverRouterCaches:()=>ck,resolveCutoverRoute:()=>to,routeMovesOffOrphanBranch:()=>uk});function ck(){Gl.clear()}async function dk(e){let t=Gl.get(e);if(t!==void 0)return t;let{identity:n}=await sn(e);return Gl.set(e,n),n}function uk(e){return e?.state==="cutover"||e?.state==="legacy-fenced"}async function Cg(e,t){if(!on())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let n=Wl(t);if(n==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(n==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:r}=await import("node:sqlite"),o=new r(t,{readOnly:!0});try{let s=await dk(e),i=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(s);if(!i)return{kind:"no-row"};let a=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(i.id);return a?{kind:"row",record:JSON.parse(a.value)}:{kind:"no-row"}}finally{o.close()}}catch(r){return{kind:"unavailable",reason:k(r)}}}async function pk(e,t={}){return(await Cg(e,t.dbPath??Zr())).kind==="row"}async function to(e,t={}){let n=await Pr(e).catch(()=>null),r=await Cg(e,t.dbPath??Zr());return r.kind==="row"?{state:"cutover",record:r.record}:n!==null?r.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:r.reason}:r.kind==="unavailable"?(lk.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",r.reason),{state:"uncutover",warning:r.reason}):{state:"uncutover"}}var lk,Gl,Ms=y(()=>{"use strict";Xe();w();Ft();Jl();Yn();lk=f("CutoverRouter"),Gl=new Map});var Fs,Et,$s=y(()=>{"use strict";w();be();Xe();Fs=class extends Error{constructor(t){super(t),this.name="OrphanBranchFrozenError"}},Et=class{constructor(t){this.cwd=t;this.kind="orphan-branch"}async readFile(t){return pa(Fe,t,this.cwd)}async batchReadFiles(t){return ma(Fe,t,this.cwd)}async writeFiles(t,n){if(J())return;if(await Pr(this.cwd??process.cwd()).catch(()=>null)!==null)throw new Fs("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(Ms(),xg));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new Fs("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await Tu(Fe,t,n,this.cwd)}async listFiles(t){return[...await fa(Fe,t,this.cwd)]}async exists(){return da(Fe,this.cwd)}async ensure(){await ua(Fe,this.cwd)}}});function no(e){return e.version>=4}function mk(e){return[...e??[]].reverse()}function Xn(e){let t=mk(e.children).flatMap(Xn),n=(e.topics??[]).map(r=>({...r,commitDate:e.commitDate,generatedAt:e.generatedAt}));return[...t,...n]}function Ig(e){let t=e.stats,n=t?.filesChanged??0,r=t?.insertions??0,o=t?.deletions??0;for(let s of e.children??[]){let i=Ig(s);n+=i.filesChanged,r+=i.insertions,o+=i.deletions}return{filesChanged:n,insertions:r,deletions:o}}function ro(e){return e.diffStats?e.diffStats:(e.children?.length??0)>0?Ig(e):e.stats??{filesChanged:0,insertions:0,deletions:0}}function ql(e){let t=e.conversationTurns??0,n=(e.children??[]).reduce((r,o)=>r+ql(o),0);return t+n}function Kl(e){let t=e.conversationTokens??0,n=(e.children??[]).reduce((r,o)=>r+Kl(o),0);return t+n}function Vl(e){let t=e.conversationTokenBreakdown,n={input:t?.input??0,output:t?.output??0,cached:t?.cached??0};return(e.children??[]).reduce((r,o)=>{let s=Vl(o);return{input:r.input+s.input,output:r.output+s.output,cached:r.cached+s.cached}},{input:n.input,output:n.output,cached:n.cached})}function Yl(e){let t=e.topics?.length??0,n=(e.children??[]).reduce((r,o)=>r+Yl(o),0);return t+n}function js(e){let t=[],n=r=>{if(!r.children?.length)t.push(r);else for(let o of r.children)n(o)};for(let r of e.children??[])n(r);return t}function Us(e){return no(e)?(e.topics??[]).map(t=>({...t,commitDate:e.commitDate,generatedAt:e.generatedAt})):Xn(e)}function oo(e){let t=[e.commitHash];for(let n of e.children??[])t.push(...oo(n));return t}function $t(e,t){return e.transcripts!==void 0?e.transcripts:oo(e).filter(n=>t.has(n))}function fk(e){let t=js(e);return t.length<=1?1:new Set(t.map(r=>new Date(r.generatedAt||r.commitDate).toISOString().substring(0,10))).size}function Pg(e){let t=fk(e),n=t===1?"1 day":`${t} days`,r=js(e);if(r.length<=1)return n;let o=r.map(l=>new Date(l.generatedAt||l.commitDate).getTime()),s=new Date(Math.min(...o)),i=new Date(Math.max(...o)),a=l=>l.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return`${n} (${a(s)} \u2014 ${a(i)})`}var jt=y(()=>{"use strict"});var Ng=y(()=>{"use strict";be()});async function Og(e,t,n,r){return Hn(e,async(o,s)=>{if(!r)return n(o,s);try{return await n(o,s)}catch(i){return r(o,i,s)}},t)}var Dg=y(()=>{"use strict";Bn()});function an(e,t,n){let r=new Map;for(let o of e??[])r.set(n(o),o);for(let o of t??[])r.set(n(o),o);return[...r.values()]}var Lg,ln,Xl=y(()=>{"use strict";Lg=/-[0-9a-f]{8}$/;ln={plan:e=>e.slug,note:e=>e.id,reference:e=>e.archivedKey}});function Fg(e){return e.summaryError===gk}function $g(e){return e.summaryError!==void 0||e.llm?.stopReason==="error"}var Mg,gk,zl=y(()=>{"use strict";Mg="llm-failed",gk="local-agent-auth"});function so(e){return Hs[e]?.label??"Local agent"}function Hg(e){return Hs[e]?.loginHint??"Sign in to your local agent CLI."}function Bg(e){let t=Hs[e]?.separateDesktopApp;return t===void 0?null:`(This login is SEPARATE from ${t} \u2014 ${t} stays signed in on its own.)`}var jg,Ug,Hs,Aj,Bs=y(()=>{"use strict";jg="sonnet",Ug="inherit",Hs={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop",defaultModel:jg,models:[{id:"haiku",label:"Haiku \u2014 fastest"},{id:jg,label:"Sonnet \u2014 balanced (default)"},{id:"opus",label:"Opus \u2014 most capable"},{id:Ug,label:"Use Claude Code's own setting"}]},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app",defaultModel:"gpt-5.6-terra",models:[{id:"gpt-5.6-luna",label:"GPT-5.6-Luna \u2014 fastest"},{id:"gpt-5.6-terra",label:"GPT-5.6-Terra \u2014 balanced (default)"},{id:"gpt-5.6-sol",label:"GPT-5.6-Sol \u2014 most capable"},{id:"gpt-5.5",label:"GPT-5.5 \u2014 previous generation"},{id:Ug,label:"Use Codex's own setting"}]},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."}};Aj=[...new Set(Object.values(Hs).flatMap(e=>(e.models??[]).map(t=>t.id)))]});function yk(e){return hk.has(e)}function Ql(e){return yk(e.source)?`${e.nativeId} \u2014 ${e.title}`:e.title}var hk,Zl=y(()=>{"use strict";ss();hk=new Set(["linear","jira","github"])});var ec=y(()=>{"use strict"});function B(e){return e.generatedAt||e.commitDate}function Jg(e){try{return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return e}}function tc(e){try{return new Date(e).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return e}}function Wg(e){return e.substring(0,10)}function Sk(e){return[...e].sort((t,n)=>{let r=Wg(t.generatedAt||t.commitDate||""),o=Wg(n.generatedAt||n.commitDate||"");if(r!==o)return r>o?-1:1;let s=t.importance==="minor"?1:0,i=n.importance==="minor"?1:0;return s-i})}function Gg(e){return String(e+1).padStart(2,"0")}function bk(e,t){return t==="local-agent"?e.localAgentTool?`Local agent - ${so(e.localAgentTool)}`:"Local agent":Ek[t]}function qg(e){let t=new Set,n=o=>{let s=o.llm;s?.source&&t.add(bk(s,s.source));for(let i of o.children??[])n(i)};n(e);let r=[...t];if(r.length!==0)return r.length===1?r[0]:`mixed: ${r.join(", ")}`}function nc(e){let t=Tk[e];return t!==void 0?t:e&&e.charAt(0).toUpperCase()+e.slice(1)}function Kg(e){let t=js(e),n=Us(e);return{topics:Sk(n.map((o,s)=>({...o,treeIndex:s}))),sourceNodes:t}}var Ek,Tk,io=y(()=>{"use strict";Bs();Zl();jt();ec();Ek={"anthropic-config":"Anthropic","anthropic-env":"Anthropic (env)","jolli-proxy":"Jolli proxy","local-agent":"Local agent"};Tk={claude:"Claude Code",opencode:"OpenCode",codex:"Codex",cursor:"Cursor",kimi:"Kimi"}});function Ws(e){return _k.exec(e)?.[1]??null}var _k,rc=y(()=>{"use strict";_k=/^transcripts\/(.+)\.json$/});var ph={};Sr(ph,{AmbiguousHashError:()=>co,ORPHAN_WRITE_REQUIRED_TIMEOUT_MS:()=>oc,collectChildE2eScenarios:()=>qs,collectChildJolliMeta:()=>zs,collectChildNotes:()=>Vs,collectChildPlans:()=>Ks,collectChildReferences:()=>Ys,collectChildSkills:()=>Xs,collectChildSkillsDocMeta:()=>ic,copyHoistFields:()=>sc,deleteNoteVisibleArtifact:()=>ov,deletePlanVisibleArtifact:()=>tv,deleteTranscript:()=>Hk,expandSourcesForConsolidation:()=>Ok,getActiveStorage:()=>kk,getCatalog:()=>Xk,getCatalogWithLazyBuild:()=>zk,getIndex:()=>fo,getIndexEntryMap:()=>Gk,getSummary:()=>lh,getSummaryCount:()=>ch,getTranscriptHashes:()=>dc,indexNeedsMigration:()=>Kk,listSummaries:()=>Wk,listSummaryHashes:()=>Jk,loadCatalog:()=>bt,mergeManyToOne:()=>Dk,migrateIndexToV3:()=>Vk,migrateOneToOne:()=>Ik,normalizeToV4:()=>lc,readNoteFromBranch:()=>sv,readPlanFromBranch:()=>ev,readPlanProgress:()=>nv,readReferenceFromBranch:()=>cv,readSkillFromBranch:()=>lv,readTranscript:()=>ih,readTranscriptsBatch:()=>$k,readTranscriptsForCommits:()=>Fk,remountStrandedTree:()=>xk,removeFromIndex:()=>Mk,resolveEffectiveRecap:()=>cc,resolveEffectiveTopics:()=>Zs,resolveReadStorage:()=>uo,resolveStorage:()=>$,saveTranscriptsBatch:()=>ah,scanTreeHashAliases:()=>qk,setActiveStorage:()=>Rk,storeNotes:()=>rv,storePlans:()=>Zk,storeReferences:()=>iv,storeSkills:()=>av,storeSummary:()=>Ck,stripFunctionalMetadata:()=>ei,toCatalogEntry:()=>cn,withDeferrableOrphanWriteLock:()=>Gs,withRequiredOrphanWriteLock:()=>Te});function Rk(e){ao=e}function kk(){return ao}async function Vg(e){let t=await ni(e);return t.ok?t.storage:(D.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",t.reason,e),new Et(e))}async function $(e,t){return e||ao||(process.env.VITEST||D.warn("resolveStorage fell back to the system of record \u2014 caller did not thread storage or call setActiveStorage. The Memory Bank side will miss this write. cwd=%s",t??"(undef)"),Vg(t))}async function uo(e,t){return e??ao??await Vg(t)}async function Te(e,t,n){if(Ln(e))return await n();if(!await Ar(e,{timeoutMs:oc}))throw new zo(t,oc);try{return await Mn(e,n)}finally{await Cr(e)}}async function Gs(e,t,n){if(Ln(e))return await n();if(!await Ar(e,{timeoutMs:Yg}))return await t();try{return await Mn(e,n)}finally{await Cr(e)}}function lo(e){return e.parentCommitHash==null}function vk(e,t){if(!e&&!t)return null;if(!t)return e;if(!e)return t;let n=new Map;for(let o of t.entries)n.set(o.commitHash,o);for(let o of e.entries)n.set(o.commitHash,o);let r={...t.commitAliases??{},...e.commitAliases??{}};return{version:e.version,entries:[...n.values()],...Object.keys(r).length>0&&{commitAliases:r}}}function Ak(e,t){if(!e&&!t)return null;if(!t)return e;if(!e)return t;let n=new Map;for(let r of t.entries)n.set(r.commitHash,r);for(let r of e.entries)n.set(r.commitHash,r);return{version:e.version,entries:[...n.values()]}}async function Ck(e,t,n=!1,r,o,s){J()||await Te(t,"storeSummary",()=>Xg(e,t,n,r,o,s))}async function Xg(e,t,n=!1,r,o,s){let i=await Q(t,o),a=await bt(t,o),l=s!==void 0&&s!==o,c=l?await Q(t,s):null,d=l?await bt(t,s):null,u=l?vk(i,c):i,p=l?Ak(a,d):a,m=u?.entries?[...u.entries]:[],g=new Map(m.map(I=>[I.commitHash,I])),h=new Set;if(l&&c){let I=new Set(i?.entries.map(F=>F.commitHash)??[]);for(let F of c.entries)I.has(F.commitHash)||h.add(F.commitHash)}if(!n&&g.has(e.commitHash)){D.info("Summary for commit %s already exists \u2014 skipping (use force to overwrite)",e.commitHash.substring(0,8));return}let T=await mo(e,null,t,g);for(let I of T)g.set(I.commitHash,I);let S={version:3,entries:[...g.values()],commitAliases:u?.commitAliases},_=n?"Overwrite":"Add",R=[{path:`summaries/${e.commitHash}.json`,content:JSON.stringify(e,null,"	")},{path:dn,content:JSON.stringify(S,null,"	")},uc(p,g,e)];if(r?.transcript&&r.transcript.data.sessions.length>0&&R.push({path:`transcripts/${r.transcript.id}.json`,content:JSON.stringify(r.transcript.data,null,"	")}),r?.planProgress)for(let I of r.planProgress)R.push({path:`plan-progress/${I.planSlug}.json`,content:JSON.stringify(I,null,"	")});if(h.size>0&&s)for(let I of h){if(I===e.commitHash)continue;let F=`summaries/${I}.json`,Se=`transcripts/${I}.json`,De=await s.readFile(F);De!==null&&R.push({path:F,content:De});let Le=await s.readFile(Se);Le!==null&&R.push({path:Se,content:Le})}await(await $(o,t)).writeFiles(R,`${_} summary for ${e.commitHash.substring(0,8)}: ${e.commitMessage.substring(0,50)}`),D.info("Summary stored successfully for commit %s",e.commitHash.substring(0,8))}function sc(e){return{...e.skills&&{skills:e.skills},...e.jolliSkillsDocId&&{jolliSkillsDocId:e.jolliSkillsDocId},...e.jolliSkillsDocUrl&&{jolliSkillsDocUrl:e.jolliSkillsDocUrl},...e.transcripts&&{transcripts:e.transcripts},...e.plans&&{plans:e.plans},...e.notes&&{notes:e.notes},...e.references&&{references:e.references}}}async function xk(e,t,n,r){if((e.children??[]).length>0)throw new Error(`target ${e.commitHash.substring(0,8)} already has children \u2014 refusing to clobber`);if(J())return;let o=an(t.plans,e.plans,ln.plan),s=an(t.notes,e.notes,ln.note),i=an(t.references,e.references,ln.reference),a=[...new Set([...e.transcripts??[],...t.transcripts??[]])],l=as([...t.skills??[],...e.skills??[]]),c=l.flatMap(g=>g.supersededDocIds??[]),d=ic([e,t]),u=[...new Set([...e.orphanedDocIds??[],...d.orphanedDocIds,...c,...ac([t])])],p=[...new Set([...e.unresolvedOrphanHashes??[],...Qs([t])])],m={...e,...sc(t),...a.length>0&&{transcripts:a},...o.length>0&&{plans:o},...s.length>0&&{notes:s},...i.length>0&&{references:i},...l.length>0&&{skills:l.map(is)},...d.winner&&{jolliSkillsDocId:d.winner.jolliSkillsDocId,jolliSkillsDocUrl:d.winner.jolliSkillsDocUrl},...u.length>0&&{orphanedDocIds:u},...p.length>0&&{unresolvedOrphanHashes:p},children:[t]};await Te(n,"remountStrandedTree",()=>Xg(m,n,!0,void 0,r))}async function Ik(e,t,n,r,o){await Te(n,"migrateOneToOne",()=>Pk(e,t,n,r,o))}async function Pk(e,t,n,r,o){D.info("Migrating summary 1:1: %s \u2192 %s",e.commitHash.substring(0,8),t.hash.substring(0,8));let s=ei(e),i=e.jolliDocUrl,a=await Yo(`${t.hash}^`,t.hash,n).catch(()=>({filesChanged:0,insertions:0,deletions:0})),l=Zs(e),c=cc(e),d=await dc(n,o),u=$t(e,d),p={version:Na,commitHash:t.hash,commitMessage:t.message,commitAuthor:t.author,commitDate:t.date,branch:e.branch,generatedAt:new Date().toISOString(),commitType:r?.commitType??"rebase",...r?.commitSource&&{commitSource:r.commitSource},...e.ticketId&&{ticketId:e.ticketId},...e.jolliDocId&&{jolliDocId:e.jolliDocId},...i&&{jolliDocUrl:i},...e.orphanedDocIds&&{orphanedDocIds:e.orphanedDocIds},...e.unresolvedOrphanHashes&&{unresolvedOrphanHashes:e.unresolvedOrphanHashes},...sc(e),...e.e2eTestGuide&&{e2eTestGuide:e.e2eTestGuide},...$g(e)&&{summaryError:Mg},topics:l,...c!==void 0?{recap:c}:{},transcripts:u,diffStats:a,children:[s]},m=await Q(n,o),g=await bt(n,o),h=m?.entries?[...m.entries]:[],T=new Map(h.map(I=>[I.commitHash,I]));if(T.has(t.hash)){D.info("New hash %s already in index, skipping migration",t.hash.substring(0,8));return}let S=await mo(p,null,n,T);for(let I of S)T.set(I.commitHash,I);let _={version:3,entries:[...T.values()],commitAliases:m?.commitAliases},R=[{path:`summaries/${p.commitHash}.json`,content:JSON.stringify(p,null,"	")},{path:dn,content:JSON.stringify(_,null,"	")},uc(g,T,p)];await(await $(o,n)).writeFiles(R,`Migrate summary ${e.commitHash.substring(0,8)} \u2192 ${t.hash.substring(0,8)}`),D.info("Summary migrated: %s \u2192 %s",e.commitHash.substring(0,8),t.hash.substring(0,8))}function qs(e){let t=[];for(let n of e)n.e2eTestGuide&&t.push(...n.e2eTestGuide),n.children&&t.push(...qs(n.children));return t}function zg(e){let{e2eTestGuide:t,...n}=e;return n.children?{...n,children:n.children.map(zg)}:n}function Ks(e){let t=new Map;for(let n of e){if(n.plans)for(let r of n.plans){let o=r.slug,s=t.get(o);(!s||r.updatedAt>s.updatedAt)&&t.set(o,r)}if(n.children)for(let r of Ks(n.children)){let o=t.get(r.slug);(!o||r.updatedAt>o.updatedAt)&&t.set(r.slug,r)}}return[...t.values()]}function Qg(e){let{plans:t,...n}=e;return n.children?{...n,children:n.children.map(Qg)}:n}function Vs(e){let t=new Map;for(let n of e){if(n.notes)for(let r of n.notes){let o=t.get(r.id);(!o||r.updatedAt>o.updatedAt)&&t.set(r.id,r)}if(n.children)for(let r of Vs(n.children)){let o=t.get(r.id);(!o||r.updatedAt>o.updatedAt)&&t.set(r.id,r)}}return[...t.values()]}function Zg(e){let{notes:t,...n}=e;return n.children?{...n,children:n.children.map(Zg)}:n}function eh(e){let{references:t,...n}=e;return n.children?{...n,children:n.children.map(eh)}:n}function Ys(e){let t=new Map;for(let n of e){let r=n.references??[];for(let o of r){let s=t.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&t.set(o.archivedKey,o)}if(n.children)for(let o of Ys(n.children)){let s=t.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&t.set(o.archivedKey,o)}}return[...t.values()]}function Xs(e){let t=[];for(let n of e)t.push(...n.skills??[]),n.children&&t.push(...Xs(n.children));return as(t)}function th(e){let{jolliDocId:t,jolliDocUrl:n,jolliSkillsDocId:r,jolliSkillsDocUrl:o,orphanedDocIds:s,unresolvedOrphanHashes:i,...a}=e;return a.children?{...a,children:a.children.map(th)}:a}function zs(e){let t=[];for(let o of e){let s=o.jolliDocUrl;if(o.jolliDocId&&s&&t.push({jolliDocId:o.jolliDocId,jolliDocUrl:s,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let i=zs(o.children);i.winner&&t.push({...i.winner})}}if(t.length===0)return{winner:null,orphanedDocIds:[]};t.sort((o,s)=>new Date(B(s)).getTime()-new Date(B(o)).getTime());let n=t[0],r=t.slice(1).map(o=>o.jolliDocId);return{winner:n,orphanedDocIds:r}}function ic(e){let{winner:t,orphanedDocIds:n}=nh(e);return{winner:t&&{jolliSkillsDocId:t.jolliSkillsDocId,jolliSkillsDocUrl:t.jolliSkillsDocUrl},orphanedDocIds:n}}function nh(e){let t=[];for(let o of e){let s=o.jolliSkillsDocUrl;if(o.jolliSkillsDocId&&s&&t.push({jolliSkillsDocId:o.jolliSkillsDocId,jolliSkillsDocUrl:s,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let i=nh(o.children);i.winner&&t.push(i.winner)}}if(t.length===0)return{winner:null,orphanedDocIds:[]};t.sort((o,s)=>new Date(B(s)).getTime()-new Date(B(o)).getTime());let[n,...r]=t;return{winner:n,orphanedDocIds:r.map(o=>o.jolliSkillsDocId)}}function ac(e){let t=[];for(let n of e??[])n.orphanedDocIds&&t.push(...n.orphanedDocIds),t.push(...ac(n.children));return t}function Qs(e){let t=[];for(let n of e??[])n.unresolvedOrphanHashes&&t.push(...n.unresolvedOrphanHashes),t.push(...Qs(n.children));return t}function lc(e){if(e.version>=4)return e;let t=qs([e]),n=Ks([e]),r=Vs([e]),o=Ys([e]),s=Xs([e]),i=s.map(is),a=zs([e]),l=Array.from(new Set([...a.orphanedDocIds,...e.orphanedDocIds??[],...ac(e.children),...s.flatMap(h=>h.supersededDocIds??[])])),c=Array.from(new Set([...e.unresolvedOrphanHashes??[],...Qs(e.children)])),d=Zs(e),u=cc(e),p=e.diffStats===void 0&&e.stats!==void 0?ro(e):void 0,{stats:m,...g}=e;return{...g,version:4,topics:d,...u!==void 0?{recap:u}:{},...p!==void 0?{diffStats:p}:{},...t.length>0?{e2eTestGuide:t}:{},...n.length>0?{plans:n}:{},...r.length>0?{notes:r}:{},...o.length>0?{references:o}:{},...i.length>0?{skills:i}:{},...a.winner?{jolliDocId:a.winner.jolliDocId,jolliDocUrl:a.winner.jolliDocUrl}:{},...l.length>0?{orphanedDocIds:l}:{},...c.length>0?{unresolvedOrphanHashes:c}:{},...e.children!==void 0?{children:e.children.map(ei)}:{}}}function rh(e){let{topics:t,...n}=e;return n.children?{...n,children:n.children.map(rh)}:n}function oh(e){let{recap:t,...n}=e;return n.children?{...n,children:n.children.map(oh)}:n}function Zs(e){return no(e)?e.topics??[]:Xn(e).map(({commitDate:t,generatedAt:n,treeIndex:r,...o})=>o)}function cc(e){return no(e)||e.recap?e.recap:Nk(e.children)}function Nk(e){if(!e||e.length===0)return;let t=[];if(sh(e,t),t.length!==0)return t.sort((n,r)=>new Date(r.date).getTime()-new Date(n.date).getTime()),t[0]?.recap}function sh(e,t){for(let n of e)n.recap&&t.push({recap:n.recap,date:B(n)}),n.children&&sh(n.children,t)}function Ok(e){if(no(e))return[{commitHash:e.commitHash,commitMessage:e.commitMessage,commitDate:e.commitDate,...e.ticketId&&{ticketId:e.ticketId},topics:e.topics??[],...e.recap&&{recap:e.recap}}];let t=(e.children??[]).map(r=>({commitHash:r.commitHash,commitMessage:r.commitMessage,commitDate:r.commitDate,...r.ticketId&&{ticketId:r.ticketId},topics:Zs(r),...r.recap&&{recap:r.recap}}));return((e.topics?.length??0)>0||e.recap)&&t.push({commitHash:e.commitHash,commitMessage:e.commitMessage,commitDate:e.commitDate,...e.ticketId&&{ticketId:e.ticketId},topics:e.topics??[],...e.recap&&{recap:e.recap}}),t}function ei(e){return th(eh(Zg(Qg(zg(rh(oh(e)))))))}async function Dk(e,t,n,r){return Te(n,"mergeManyToOne",()=>Lk(e,t,n,r))}async function Lk(e,t,n,r){let{metadata:o,consolidated:s,storage:i,extraRefs:a,extraSkills:l}=r??{};D.info("Merging %d summaries into %s",e.length,t.hash.substring(0,8));let c=[...e].sort((W,A)=>new Date(B(A)).getTime()-new Date(B(W)).getTime()),d=qs(c),u=an(Ks(c),a?.plans,ln.plan),p=an(Vs(c),a?.notes,ln.note),m=an(Ys(c),a?.references,ln.reference),g=as([...Xs(c),...l??[]]),h=g.map(is),T=zs(c),S=ic(c),_=c.flatMap(W=>W.orphanedDocIds??[]),R=g.flatMap(W=>W.supersededDocIds??[]),N=[...T.orphanedDocIds,...S.orphanedDocIds,..._,...R],I=Array.from(new Set([...c.filter(W=>!W.jolliDocId).map(W=>W.commitHash),...Qs(c)])),F=c.map(ei),Se=await Yo(`${t.hash}^`,t.hash,n).catch(()=>({filesChanged:0,insertions:0,deletions:0})),De=s?.topics??[],Le=s?.recap,vt=s?.ticketId,Gt=s?.llm,At=s?.summaryError,eu=await dc(n,i),bn=Array.from(new Set(c.flatMap(W=>$t(W,eu)))),lt={version:Na,commitHash:t.hash,commitMessage:t.message,commitAuthor:t.author,commitDate:t.date,branch:e[0].branch,generatedAt:new Date().toISOString(),...o?.commitType&&{commitType:o.commitType},...o?.commitSource&&{commitSource:o.commitSource},...vt&&{ticketId:vt},...Gt&&{llm:Gt},...At&&{summaryError:At},...d.length>0&&{e2eTestGuide:d},...u.length>0&&{plans:u},...p.length>0&&{notes:p},...m.length>0&&{references:m},...h.length>0&&{skills:h},...T.winner&&{jolliDocId:T.winner.jolliDocId,jolliDocUrl:T.winner.jolliDocUrl},...S.winner&&S.winner,...N.length>0&&{orphanedDocIds:N},...I.length>0&&{unresolvedOrphanHashes:I},topics:De,...Le&&{recap:Le},transcripts:bn,diffStats:Se,children:F},Ct=await Q(n,i),Tn=await bt(n,i),_n=Ct?.entries?[...Ct.entries]:[],ct=new Map(_n.map(W=>[W.commitHash,W]));if(ct.has(t.hash))return D.info("New hash %s already in index, skipping merge",t.hash.substring(0,8)),{orphanedDocIds:[]};let tu=await mo(lt,null,n,ct);for(let W of tu)ct.set(W.commitHash,W);let ra={version:3,entries:[...ct.values()],commitAliases:Ct?.commitAliases},wr=e.map(W=>W.commitHash.substring(0,8)).join(", "),Ho=[{path:`summaries/${lt.commitHash}.json`,content:JSON.stringify(lt,null,"	")},{path:dn,content:JSON.stringify(ra,null,"	")},uc(Tn,ct,lt)];return await(await $(i,n)).writeFiles(Ho,`Merge summaries [${wr}] \u2192 ${t.hash.substring(0,8)}`),D.info("Summaries merged: [%s] \u2192 %s (%d children, %d orphaned docs, %d unresolved orphan hashes)",wr,t.hash.substring(0,8),c.length,N.length,I.length),{orphanedDocIds:N}}async function Mk(e,t,n){await Gs(t,()=>{D.warn("removeFromIndex: could not acquire orphan-write lock within %dms \u2014 skipping removal of %s",Yg,e.substring(0,8))},async()=>{let r=await Q(t,n);if(!r)return;let o=r.entries.filter(d=>d.commitHash!==e);if(o.length===r.entries.length)return;let s={version:r.version,entries:o,commitAliases:r.commitAliases},i=[{path:dn,content:JSON.stringify(s,null,"	")}],a=await bt(t,n),l=Qk(a,e);l&&i.push(l),await(await $(n,t)).writeFiles(i,`Remove index entry for ${e.substring(0,8)}`),D.info("Removed %s from index",e.substring(0,8))})}async function ih(e,t,n){let o=await(await $(n,t)).readFile(`transcripts/${e}.json`);if(!o)return null;try{return JSON.parse(o)}catch{return D.warn("Failed to parse transcript for %s",e.substring(0,8)),null}}async function Fk(e,t,n){let r=new Map;for(let o of e){let s=await ih(o,t,n);s&&r.set(o,s)}return r}async function $k(e,t,n){let r=new Map;if(e.length===0)return r;let o=await uo(n,t),s=l=>`transcripts/${l}.json`,i=e.map(s),a=o.batchReadFiles?await o.batchReadFiles(i):await Uk(o,i);for(let l of e){let c=a.get(s(l));if(!c){r.set(l,null);continue}try{r.set(l,JSON.parse(c))}catch{D.warn("Failed to parse transcript for %s",l.substring(0,8)),r.set(l,null)}}return r}async function Uk(e,t){let n=await Og(t,jk,o=>e.readFile(o),(o,s)=>(D.warn("readFile failed for %s: %s",o,k(s)),null)),r=new Map;for(let o=0;o<t.length;o++)r.set(t[o],n[o]??null);return r}async function ah(e,t,n,r){let o=[];for(let{hash:i,data:a}of e)o.push({path:`transcripts/${i}.json`,content:JSON.stringify(a,null,"	")});for(let i of t)o.push({path:`transcripts/${i}.json`,content:"",delete:!0});if(o.length===0||J())return;let s=[e.length>0?`${e.length} written`:"",t.length>0?`${t.length} deleted`:""].filter(Boolean).join(", ");await Te(n,"saveTranscriptsBatch",async()=>{await(await $(r,n)).writeFiles(o,`Update transcripts: ${s}`),D.info("Transcript batch: %s",s)})}async function Hk(e,t,n){await ah([],[e],t,n)}async function dc(e,t){let r=await(await $(t,e)).listFiles("transcripts/"),o=new Set;for(let s of r){let i=Ws(s);i&&o.add(i)}return o}function Bk(e,t){return t.filter(n=>n.commitHash.startsWith(e))}async function lh(e,t,n){if(e.length===0)return null;let r=e.toLowerCase(),o=await Ze(r,t,n);if(o)return o;let s=mh(await uo(n,t));if(s){if(r.length===Js){let c=await s.lookupAlias(r);if(c)return Ze(c,t,n)}else{let c=await s.findHashesByPrefix(r);if(c.length===1)return Ze(c[0],t,n);if(c.length>=2)throw new co(r,c)}let l=await Rr(r,t);if(l){let c=await s.findShallowestByTreeHash(l);if(c)return Ze(c,t,n)}return null}let i=await Q(t,n);if(!i)return null;if(r.length===Js){let l=i.commitAliases?.[r];if(l)return Ze(l,t,n)}else{let l=Bk(r,i.entries);if(l.length===1)return Ze(l[0].commitHash,t,n);if(l.length>=2)throw new co(r,l.map(c=>c.commitHash))}if(i.version===3){let l=await Rr(r,t);if(l){let c=new Map(i.entries.map(u=>[u.commitHash,u])),d=dh(l,i.entries,c);if(d)return Ze(d.commitHash,t,n)}}return null}async function Wk(e=10,t,n){let r=await Q(t,n);if(!r||r.entries.length===0)return[];let i=[...r.entries.filter(lo)].sort((l,c)=>new Date(B(c)).getTime()-new Date(B(l)).getTime()).slice(0,e),a=[];for(let l of i){let c=await lh(l.commitHash,t,n);c&&a.push(c)}return a}async function Jk(e){let t=await Q(e);if(!t||t.entries.length===0)return new Set;let n=new Set(t.entries.map(r=>r.commitHash));if(t.commitAliases)for(let r of Object.keys(t.commitAliases))n.add(r);return n}async function Gk(e,t){let n=await Q(e,t);if(!n)return new Map;let r=new Map(n.entries.map(o=>[o.commitHash,o]));if(n.commitAliases)for(let[o,s]of Object.entries(n.commitAliases)){let i=r.get(s);i&&!r.has(o)&&r.set(o,i)}return r}async function qk(e,t,n,r){if(J())return!1;let o=r??n,s=await Q(t,o);if(!s||s.version!==3)return!1;let i=s.commitAliases??{},a=new Set(s.entries.map(d=>d.commitHash)),l=new Map(s.entries.map(d=>[d.commitHash,d])),c={};for(let d of e){if(a.has(d)||i[d])continue;let u=await Rr(d,t);if(!u)continue;let p=dh(u,s.entries,l);p&&(c[d]=p.commitHash,D.info("Tree hash match: %s \u2192 %s (treeHash: %s)",d.substring(0,8),p.commitHash.substring(0,8),u.substring(0,8)))}return Object.keys(c).length===0?!1:await Gs(t,()=>(D.debug("scanTreeHashAliases: orphan-write lock contention \u2014 alias write deferred"),!1),async()=>{let d=await Q(t,n);if(!d||d.version!==3)return!1;if(o!==n){let _=await Q(t,o);if(_&&_.version===3){let R=new Set(d.entries.map(I=>I.commitHash)),N=_.entries.reduce((I,F)=>R.has(F.commitHash)?I:I+1,0);if(N>0)return D.warn("scanTreeHashAliases: read side has %d row(s) write side lacks \u2014 deferring alias write to avoid shadow clobber",N),!1}}let u=d.commitAliases??{},p=new Set(d.entries.map(_=>_.commitHash)),m={...u},g=0;for(let[_,R]of Object.entries(c))p.has(_)||m[_]||(m[_]=R,g++);if(g===0)return!1;let h={...d,commitAliases:m},T=[{path:dn,content:JSON.stringify(h,null,"	")}];return await(await $(n,t)).writeFiles(T,`Add ${g} tree hash alias(es)`),!0})}async function ch(e,t){let n=await Q(e,t);return n?n.entries.filter(lo).length:0}async function Kk(e,t){let n=await Q(e,t);return!n||n.entries.length===0?!1:n.version!==3}async function Vk(e,t){return Te(e,"migrateIndexToV3",()=>Yk(e,t))}async function Yk(e,t){let n=await Q(e,t);if(!n)return D.info("No index found \u2014 nothing to migrate"),{migrated:0,skipped:0};if(n.version===3)return D.info("Index already at v3 \u2014 skipping migration"),{migrated:0,skipped:0};let r=0,o=0,s=new Map,i=[];for(let u of n.entries){let p=await Ze(u.commitHash,e,t);if(!p){D.warn("Could not load summary for %s \u2014 skipping",u.commitHash.substring(0,8)),o++;continue}try{let m=await mo(p,null,e);for(let g of m)s.set(g.commitHash,g);i.push(cn(p)),r++}catch(m){D.warn("Failed to flatten summary for %s: %s",u.commitHash.substring(0,8),m.message),o++}}let a={version:3,entries:[...s.values()]},l={version:1,entries:i},c=[{path:dn,content:JSON.stringify(a,null,"	")},{path:po,content:JSON.stringify(l,null,"	")}];return await(await $(t,e)).writeFiles(c,`Migrate index v1 \u2192 v3 (${r} entries)`),D.info("Index migrated to v3: %d migrated, %d skipped",r,o),{migrated:r,skipped:o}}async function mo(e,t,n,r){let o=await Rr(e.commitHash,n)??void 0,s=t===null,i;if(s){let c=e.diffStats,d=r?.get(e.commitHash)?.diffStats,u;c?u=c:d?u=d:u=await Yo(`${e.commitHash}^`,e.commitHash,n),i={topicCount:Yl(e),diffStats:u}}let l=[{commitHash:e.commitHash,parentCommitHash:t,treeHash:o,commitType:e.commitType,commitMessage:e.commitMessage,commitDate:e.commitDate,branch:e.branch,generatedAt:e.generatedAt,...i&&{topicCount:i.topicCount,diffStats:i.diffStats}}];for(let c of e.children??[]){let d=await mo(c,e.commitHash,n,r);l.push(...d)}return l}async function Ze(e,t,n){let o=await(await uo(n,t)).readFile(`summaries/${e}.json`);if(!o)return null;try{return JSON.parse(o)}catch(s){return D.error("Failed to parse summary for %s: %s",e.substring(0,8),s.message),null}}function dh(e,t,n){let r=t.filter(s=>s.treeHash===e);if(r.length===0)return null;if(r.length===1)return r[0];let o=r.map(s=>{let i=0,a=new Set,l=s;for(;l?.parentCommitHash!=null&&!a.has(l.commitHash);)a.add(l.commitHash),i++,l=n.get(l.parentCommitHash);return{entry:s,depth:i}});return o.sort((s,i)=>s.depth!==i.depth?s.depth-i.depth:new Date(B(i.entry)).getTime()-new Date(B(s.entry)).getTime()),o[0].entry}async function fo(e,t){return Q(e,t)}async function Q(e,t){let n=await uo(t,e),r=await n.readFile(dn);if(!r)return D.debug("loadIndex: no index.json in %s storage",n.kind??"unknown"),null;try{return JSON.parse(r)}catch(o){return D.error("Failed to parse index.json: %s",o.message),null}}function cn(e){let t=Us(e).map(n=>({title:n.title,...n.decisions!==void 0&&{decisions:n.decisions},...n.category!==void 0&&{category:n.category},...n.importance!==void 0&&{importance:n.importance},...n.filesAffected&&n.filesAffected.length>0&&{filesAffected:n.filesAffected}}));return{commitHash:e.commitHash,...e.recap!==void 0&&{recap:e.recap},...e.ticketId!==void 0&&{ticketId:e.ticketId},...t.length>0&&{topics:t}}}async function bt(e,t){let r=await(await $(t,e)).readFile(po);if(!r)return null;try{return JSON.parse(r)}catch(o){return D.error("Failed to parse catalog.json: %s",o.message),null}}async function Xk(e,t){return bt(e,t)}async function zk(e,t){let n=await $(t,e),r=await bt(e,n)??{version:1,entries:[]},o=await Q(e,n);if(!o||o.entries.length===0)return r;let s=new Set(o.entries.filter(lo).map(c=>c.commitHash)),i=new Set(r.entries.map(c=>c.commitHash)),a=r.entries.filter(c=>s.has(c.commitHash)).length,l=[];for(let c of s)i.has(c)||l.push(c);return a===r.entries.length&&l.length===0?r:await Gs(e,async()=>{D.debug("getCatalogWithLazyBuild: orphan-write lock contention \u2014 returning in-memory catalog without writeback");let c=r.entries.filter(u=>s.has(u.commitHash)),d=[];for(let u of l){let p=await Ze(u,e,n);p&&d.push(cn(p))}return{version:1,entries:[...c,...d]}},async()=>{let c=await bt(e,n)??{version:1,entries:[]},d=await Q(e,n);if(!d||d.entries.length===0)return c;let u=new Set(d.entries.filter(lo).map(R=>R.commitHash)),p=c.entries.filter(R=>u.has(R.commitHash)),m=new Set(p.map(R=>R.commitHash)),g=[];for(let R of u)m.has(R)||g.push(R);if(p.length===c.entries.length&&g.length===0)return c;let h=[];for(let R of g){let N=await Ze(R,e,n);N?h.push(cn(N)):D.warn("Catalog lazy build: summary file missing for root %s",R.substring(0,8))}let T={version:1,entries:[...p,...h]},S=c.entries.length-p.length,_=`catalog: reconcile (+${h.length}, -${S})`;return await n.writeFiles([{path:po,content:JSON.stringify(T,null,"	")}],_),T})}function uc(e,t,n){let r=new Set([...t.values()].filter(lo).map(a=>a.commitHash)),i={version:1,entries:[...(e?.entries??[]).filter(a=>r.has(a.commitHash)&&a.commitHash!==n.commitHash),cn(n)]};return{path:po,content:JSON.stringify(i,null,"	")}}function Qk(e,t){if(!e)return null;let n=e.entries.filter(o=>o.commitHash!==t);return n.length===e.entries.length?null:{path:po,content:JSON.stringify({version:1,entries:n},null,"	")}}async function Zk(e,t,n,r,o){if(e.length===0||J())return;let s=e.map(i=>({path:`plans/${i.slug}.md`,content:i.content,branch:r}));await Te(n,"storePlans",async()=>{await(await $(o,n)).writeFiles(s,t),D.info("Stored %d plan file(s)",e.length)})}async function ev(e,t,n){try{return await(await $(n,t)).readFile(`plans/${e}.md`)}catch{return null}}async function tv(e,t,n,r){let o=await $(r,n);o.deletePlanVisible&&await o.deletePlanVisible(e,t)}async function nv(e,t,n){try{let o=await(await $(n,t)).readFile(`plan-progress/${e}.json`);return o?JSON.parse(o):null}catch{return null}}async function rv(e,t,n,r,o){if(e.length===0||J())return;let s=e.map(i=>({path:`notes/${i.id}.md`,content:i.content,branch:r}));await Te(n,"storeNotes",async()=>{await(await $(o,n)).writeFiles(s,t),D.info("Stored %d note file(s)",e.length)})}async function ov(e,t,n,r){let o=await $(r,n);o.deleteNoteVisible&&await o.deleteNoteVisible(e,t)}async function sv(e,t,n){try{return await(await $(n,t)).readFile(`notes/${e}.md`)}catch{return null}}function uh(e,t){if(!Up(e))throw new Error(`orphanPathFor: refusing unknown reference source ${JSON.stringify(e)}`);let n=`${e}:`,r=t.startsWith(n)?t.slice(n.length):t,o=jp(e,r);return`references/${e}/${o}.md`}async function iv(e,t,n,r,o){if(e.length===0||J())return;let s=e.map(i=>({path:uh(i.source,i.archivedKey),content:i.content,branch:r}));await Te(n,"storeReferences",async()=>{await(await $(o,n)).writeFiles(s,t),D.info("Stored %d reference file(s) across sources",e.length)})}async function av(e,t,n,r,o){if(e.length===0||J())return;let s=e.map(i=>({path:i.path,content:i.content,branch:r}));await Te(n,"storeSkills",async()=>{await(await $(o,n)).writeFiles(s,t),D.info("Stored %d skill file(s)",e.length)})}async function lv(e,t,n){try{return await(await $(n,t)).readFile(e)}catch{return null}}async function cv(e,t,n,r){let o=await $(r,n);try{return await o.readFile(uh(e,t))}catch{return null}}var ao,D,dn,po,oc,Yg,jk,Js,co,et=y(()=>{"use strict";w();ns();Dg();be();Ye();$s();Xo();Xl();Dr();ri();ti();zl();io();jt();Ja();rc();D=f("SummaryStore"),dn="index.json",po="catalog.json",oc=3e4,Yg=1e3;jk=8;Js=40,co=class extends Error{constructor(t,n){if(n.length<2)throw new Error(`AmbiguousHashError requires \u22652 matches (got ${n.length}); use null/undefined for "not found"`);if(t.length===0||t.length>=Js)throw new Error(`AmbiguousHashError prefix must be 1..${Js-1} chars (got length ${t.length})`);super(`abbreviation \`${t}\` is ambiguous; please use a longer prefix (matched ${n.length} commits)`),this.name="AmbiguousHashError",this.prefix=t,this.matches=n}static is(t){return t instanceof Error&&t.name==="AmbiguousHashError"&&typeof t.prefix=="string"&&Array.isArray(t.matches)}}});var rU,fh=y(()=>{"use strict";w();et();rU=f("ProcessedSourceStore")});var aU,gh=y(()=>{"use strict";w();et();aU=f("TopicIndexStore")});function hh(e){if(!e.startsWith("topics/")||!e.endsWith(".json"))return!1;let t=e.slice(7,-5);return t.length>0&&!t.includes("/")&&!dv.has(t)}var dv,yh,cU,dU,pc=y(()=>{"use strict";dv=new Set(["index","processed"]);yh=[["summaries/",e=>e.endsWith(".json")],["transcripts/",e=>e.endsWith(".json")],["plans/",e=>e.endsWith(".md")],["notes/",e=>e.endsWith(".md")],["references/",e=>e.endsWith(".md")],["skills/",e=>e.endsWith(".md")],["plan-progress/",e=>e.endsWith(".json")],["topics/",hh]],cU=yh.map(([e])=>e),dU=Object.fromEntries(yh)});var gU,wh=y(()=>{"use strict";pc();w();et();gU=f("TopicPageStore")});var TU,_U,Sh=y(()=>{"use strict";ya();w();Ft();Jl();Yn();TU=f("ImportState"),_U=10*6e4});var mc=y(()=>{"use strict"});var AU,fc=y(()=>{"use strict";w();AU=f("DashboardScope")});function uv(e){let t=Eh.get(e);return t||(t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}),Eh.set(e,t)),t}function pv(e,t){let n=uv(t).formatToParts(e),r=o=>Number.parseInt(n.find(s=>s.type===o)?.value??"0",10);return{year:r("year"),month:r("month"),day:r("day"),hour:r("hour"),minute:r("minute")}}function bh(e,t){let n=pv(e,t);return`${n.year}-${String(n.month).padStart(2,"0")}-${String(n.day).padStart(2,"0")}`}var Eh,Th=y(()=>{"use strict";Eh=new Map});var _h,PU,NU,gc,hc,OU,go,oi=y(()=>{"use strict";fc();_h=`EXISTS (SELECT 1 FROM session_usage_events e0
	                                   WHERE e0.session_event_id = s.event_id)
	                         AND (SELECT COALESCE(SUM(e2.input_tokens + e2.output_tokens + e2.cached_tokens), 0)
	                                FROM session_usage_events e2
	                               WHERE e2.session_event_id = s.event_id)
	                             >= s.input_tokens + s.output_tokens + s.cached_tokens`,PU=`(${_h})`,NU=`NOT (${_h})`,gc=`LEFT JOIN commits cm ON cm.repo_id = m.repo_id AND cm.hash = m.commit_hash
	  LEFT JOIN (
	      SELECT a.repo_id, a.target_hash, c.hash AS live_hash, MAX(c.committed_at_ms) AS at_ms
	        FROM commit_aliases a
	        JOIN commits c ON c.repo_id = a.repo_id AND c.hash = a.old_hash
	       GROUP BY a.repo_id, a.target_hash
	  ) al ON al.repo_id = m.repo_id AND al.target_hash = m.commit_hash`,hc="COALESCE(cm.committed_at_ms, al.at_ms, m.commit_date_ms)",OU=`WITH memory_landing AS (
	SELECT m.repo_id, m.commit_hash,
	       COALESCE(cm.hash, al.live_hash, m.commit_hash) AS live_hash,
	       ${hc} AS at_ms
	  FROM memories m
	  ${gc}
	 WHERE m.parent_hash IS NULL
)`,go=`SELECT ${hc} AS at_ms
	  FROM memories m
	  ${gc}
	 WHERE m.repo_id = ? AND m.commit_hash = ?`});function ho(e,t){if(t.length===0)return;let n=e.prepare("SELECT DISTINCT tz FROM stats_daily").all();if(n.length!==0)for(let{tz:r}of n){let o=[...new Set(t.map(s=>bh(s,r)))];e.prepare(`DELETE FROM stats_daily WHERE tz = ? AND day IN (${o.map(()=>"?").join(", ")})`).run(r,...o)}}var KU,gv,hv,yv,wv,VU,yc=y(()=>{"use strict";w();Ft();fc();Th();oi();KU=f("StatsRollup"),gv={model:!0,agent:!0,project:!0,branch:!0,ticket:!0,category:!0},hv=Object.keys(gv),yv="built",wv="tokens",VU=[...hv,wv,yv]});function Tt(e){if(e==null)return null;try{return JSON.parse(e)}catch{return null}}function Rh(e){let t=/^#\s+(.+)$/m.exec(e);return t?t[1].trim():null}function kh(e,t,n){for(let{path:r,accepts:o}of Ev){let s=e;for(let a of r){if(s==null||typeof s!="object"){s=void 0;break}s=s[a]}s==null||(o==="integer"?Number.isInteger(s):typeof s=="number")||n("off-type numeric",`${t}.${r.join(".")} is ${typeof s} (${JSON.stringify(s)}) \u2014 column reads NULL`)}}function vh(e,t,n,r){let o=Date.parse(e.commitDate??"");return Number.isFinite(o)?o:(r("commit date",`${t} has no parsable commitDate \u2014 falling back to first-seen time`),n)}function Ah(e,t,n,r,o){let s=e.prepare(go),i=e.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(t,n)?.target_hash,a=i!==void 0&&i!==r?[r,i]:[r],l=u=>s.get(t,u)?.at_ms??void 0,c=[],d=!1;for(let u of a){let p=s.get(t,u);u===r&&(d=p!==void 0),p?.at_ms!=null&&c.push(p.at_ms)}if(!d)return{stored:!1,days:[]};e.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
		 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(t,n,r,o);for(let u of a){let p=l(u);p!==void 0&&c.push(p)}return i!==void 0&&i!==r&&Sv.info("alias %s retargeted %s -> %s",n,i,r),{stored:!0,days:c}}function Ch(e,t){let n=e.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(t),r=new Map,o=[];for(let l of n)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=r.get(l.parent_hash)??[];c.push(l.commit_hash),r.set(l.parent_hash,c)}let s=e.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),i=new Map(n.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:d}=o.shift();a++;let u=i.get(l);(u.root_hash!==c||u.depth!==d)&&s.run(c,d,t,l);for(let p of r.get(l)??[])o.push({hash:p,root:c,depth:d+1})}if(a!==n.length)throw new Error(`remountRepo: ${n.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}var Sv,Ev,xh=y(()=>{"use strict";Ng();fh();Xe();Dr();et();jt();gh();wh();w();Ft();pc();Sh();Yn();mc();yc();oi();Sv=f("SotImport");Ev=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}]});function Tv(e){let t=[],n=(r,o,s)=>{t.push({hash:r.commitHash,parentInFile:o,pos:s,summary:r}),(r.children??[]).forEach((i,a)=>{n(i,r.commitHash,a)})};return n(e,null,null),t}function _v(e){let t={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let n of e){let r=n.delete===!0,o=n.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(r){t.summaryDeletes.push(o[1]);continue}let c=Tt(n.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${n.path}`);t.summaryTrees.push(Tv(c));continue}if(n.path==="index.json"){if(r)continue;let c=Tt(n.content);for(let d of c?.entries??[])d.treeHash&&t.treeHashes.set(d.commitHash,d.treeHash);for(let[d,u]of Object.entries(c?.commitAliases??{}))t.aliases.set(d,u);continue}if(n.path==="catalog.json")continue;if(n.path==="topics/index.json"){if(r)continue;let c=Tt(n.content);for(let d of c?.topics??[])d.stableSlug&&d.summary!==void 0&&t.topicSummaries.set(d.stableSlug,d.summary);continue}if(n.path==="topics/processed.json"){t.processedSet=r?null:n.content;continue}if(n.path==="schema-v5-migration.json"){r||(t.v5State=n.content);continue}let s=n.path.match(/^transcripts\/(.+)\.json$/);if(s){r?t.transcriptDeletes.push(s[1]):t.transcriptWrites.push({id:s[1],content:n.content});continue}let i=n.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(i){let c=bv[i[1]];r?t.contextDeletes.push({kind:c,key:i[2]}):t.contextWrites.push({kind:c,key:i[2],body:n.content});continue}let a=n.path.match(/^plan-progress\/(.+)\.json$/);if(a){r?t.progressDeletes.push(a[1]):t.progressWrites.push({pathSlug:a[1],content:n.content});continue}let l=n.path.match(/^topics\/([^/]+)\.json$/);if(l){r?t.topicPageDeletes.push(l[1]):t.topicPageWrites.push({slug:l[1],content:n.content});continue}throw new Error(`SotWrite: no table backs path ${n.path}`)}return t}function yo(e,t){un.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",e,t)}function Rv(e,t,n){let r=/-([0-9a-f]{8})$/.exec(n);return r?e.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(t,r[1])?.branch??null:null}function kv(e,t,n,r){let o=[];for(let g of n.summaryDeletes){let h=e.prepare(go).get(t,g);h?.at_ms!=null&&o.push(h.at_ms),e.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(t,g)}if(ho(e,o),n.summaryTrees.length===0)return;let s=new Set;for(let g of n.summaryTrees)for(let h of g)"children"in h.summary&&s.add(h.hash);let i=e.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let g of s)i.run(t,g);let a=new Map;for(let g of n.summaryTrees)for(let h of g){if(h.parentInFile===null||h.pos===null)continue;let T=a.get(h.parentInFile)??new Map;T.set(h.hash,h.pos),a.set(h.parentInFile,T)}let l=e.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),c=(g,h)=>un.info("write degraded a value: %s %s",g,h);for(let g of n.summaryTrees)for(let h of g){let T=h.parentInFile,S=h.pos;if(h.parentInFile===null){let N=e.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,h.hash);N&&(T=N.parent_hash,S=N.child_pos,S!==null&&S>=1e6&&((T===null?void 0:a.get(T))?.has(h.hash)||(T=null,S=null)))}let _=JSON.stringify("children"in h.summary?{...h.summary,children:[]}:h.summary);l.run(t,h.hash,T,S,h.hash,0,_,n.treeHashes.get(h.hash)??null,r,r,vh(h.summary,h.hash,r,c)),kh(h.summary,h.hash,c),e.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(t,h.hash);let R=e.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(h.summary.topics??[]).forEach((N,I)=>{if(!N.title){c("topic",`${h.hash}[${I}] has no title`);return}R.run(t,h.hash,I,N.category??null,N.importance??null,N.title)})}let d=e.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`),u=[],p=e.prepare(`SELECT m.commit_hash FROM memories m
		  WHERE m.repo_id = ? AND m.parent_hash = ? AND m.child_pos >= ${1e6}`),m=e.prepare(go);for(let g of s){for(let{commit_hash:h}of p.all(t,g)){let T=m.get(t,h);T?.at_ms!=null&&u.push(T.at_ms)}d.run(t,g)}ho(e,u),Ch(e,t)}function vv(e,t,n,r){let o=[];for(let[s,i]of n.aliases){let a=Ah(e,t,s,i,r);if(!a.stored){un.info("dropping alias %s -> %s (no such memory row)",s,i);continue}o.push(...a.days)}ho(e,o)}function Av(e,t,n,r){let o=new Set;for(let s of n.transcriptDeletes)e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,s),e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,s),e.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,s);for(let{id:s,content:i}of n.transcriptWrites){let a=Tt(i);if(!a||!Array.isArray(a.sessions)){yo("transcript",s);continue}e.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(t,s,(0,Ih.deflateSync)(Buffer.from(i,"utf8")),r),e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,s);for(let l of a.sessions)l.sessionId&&e.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(t,s,l.sessionId,l.source??null);o.add(s)}return o}function Cv(e,t,n,r){if(r.size===0)return;let o=new Set(n.summaryTrees.flat().map(c=>c.hash)),s=new Set(n.summaryTrees.flat().flatMap(c=>[...$t(c.summary,r)])),i=[...r].filter(c=>!s.has(c));if(i.length===0)return;let a=e.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=e.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of i){let d=a.all(t,`%${c}%`);for(let u of d){if(o.has(u.commit_hash))continue;let p=Tt(u.summary_json);p&&$t(p,r).includes(c)&&(l.run(t,u.commit_hash,c),un.info("linked stored transcript %s to memory %s written earlier",c,u.commit_hash))}}}function xv(e,t,n){if(n.summaryTrees.length===0)return;let r=new Set(e.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(t).map(o=>o.transcript_id));for(let o of n.summaryTrees)for(let s of o){let i=[...new Set($t(s.summary,r).filter(a=>r.has(a)))];for(let a of s.summary.transcripts??[])r.has(a)||un.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",s.hash,a);e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(t,s.hash);for(let a of i)e.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(t,s.hash,a)}}function Iv(e,t,n,r){for(let{kind:s,key:i}of n.contextDeletes)e.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(t,s,i);let o=e.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:s,key:i,body:a}of n.contextWrites){if(s==="reference"){let d=Wa(a);if(!d){yo("reference frontmatter",`references/${i}.md`);continue}o.run(t,s,i,d.source,d.nativeId,d.toolName,d.referencedAt,null,null,d.title,d.url??null,a,r,r);continue}let l=s==="plan"||s==="note"?Rv(e,t,i):null,c=s==="plan"&&l!==null?i.replace(/-[0-9a-f]{8}$/,""):null;o.run(t,s,i,null,null,null,null,c,l,Rh(a),null,a,r,r)}}function Pv(e,t,n,r){for(let o of n.progressDeletes)e.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(t,o);for(let{pathSlug:o,content:s}of n.progressWrites){let i=Tt(s);if(!i){yo("plan-progress",`plan-progress/${o}.json`);continue}let a=i.planSlug??o;if(!e.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(t,a)){un.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}e.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(t,a,s,r)}}function Nv(e,t,n,r){for(let o of n.topicPageDeletes)e.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(t,o);for(let{slug:o,content:s}of n.topicPageWrites){let i=Tt(s);if(!i?.stableSlug||i.title===void 0||i.content===void 0||!i.lastUpdatedAt){yo("topic page",`topics/${o}.json`);continue}e.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(t,i.stableSlug,i.title,n.topicSummaries.get(i.stableSlug)??null,i.content,JSON.stringify(i.relatedBranches??[]),i.lastUpdatedAt,i.schemaVersion??1),e.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(t,i.stableSlug),(i.sourceRefs??[]).forEach((a,l)=>{e.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t,i.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,s]of n.topicSummaries){let i=e.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(s,t,o);Number(i.changes)===0&&un.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(n.processedSet!==null){let o=Tt(n.processedSet);if(!o?.processed)yo("processed set","topics/processed.json");else{e.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(t);let s=e.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[i,a]of Object.entries(o.processed))for(let l of a)s.run(t,i,l)}}n.v5State!==null&&e.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(t,n.v5State)}function Ph(e,t,n,r){let o=_v(n);Ls(e,()=>{e.exec("PRAGMA defer_foreign_keys = ON"),kv(e,t,o,r),vv(e,t,o,r);let s=Av(e,t,o,r);xv(e,t,o),Cv(e,t,o,s),Iv(e,t,o,r),Pv(e,t,o,r),Nv(e,t,o,r)})}var Ih,un,bv,Nh=y(()=>{"use strict";Ih=require("node:zlib");Dr();jt();w();Ft();xh();mc();yc();oi();un=f("SotWrite"),bv={plans:"plan",notes:"note",references:"reference",skills:"skill"}});function Dh(e){let t=new Map;for(let n of e){if(n.parent_hash==null)continue;let r=t.get(n.parent_hash)??[];r.push(n),t.set(n.parent_hash,r)}for(let n of t.values())n.sort((r,o)=>Number(r.child_pos)-Number(o.child_pos));return t}function wc(e,t){let n=JSON.parse(t.summary_json);return"children"in n&&(n.children=(e.get(t.commit_hash)??[]).map(r=>wc(e,r))),n}function Ov(e,t,n){let r=e.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,n);if(!r)return;let o=(r.parent_hash===null?e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):e.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(t,r.parent_hash===null?r.root_hash:n),s=o.find(i=>i.commit_hash===n);return s?wc(Dh(o),s):void 0}function mh(e){if(e instanceof Ut)return e;let t=e?.primary;return t instanceof Ut?t:null}function Dv(e){if(e===null)return{};try{return{diffStats:JSON.parse(e)}}catch{return{}}}var Oh,Ut,ti=y(()=>{"use strict";Oh=require("node:zlib");Ft();Nh();w();et();Ut=class{constructor(t,n){this.repoIdentity=t;this.dbPath=n;this.kind="sqlite"}async withDb(t){return Bl(n=>{let r=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!r)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return t(n,r.id)},{dbPath:this.dbPath})}async withDbOrAbsent(t,n){return Bl(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?t(r,o.id):n},{dbPath:this.dbPath})}async readFile(t){return this.withDbOrAbsent((n,r)=>this.readOne(n,r,t),null)}async batchReadFiles(t){return this.withDbOrAbsent((n,r)=>{let o=new Map;for(let s of t)o.set(s,this.readOne(n,r,s));return o},new Map(t.map(n=>[n,null])))}readOne(t,n,r){let o=r.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=Ov(t,n,o[1]);return c?JSON.stringify(c,null,"	"):null}if(r==="index.json")return this.synthIndex(t,n);if(r==="catalog.json")return this.synthCatalog(t,n);if(r==="topics/index.json")return this.synthTopicIndex(t,n);if(r==="topics/processed.json")return this.synthProcessed(t,n);if(r==="schema-v5-migration.json")return t.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(n)?.value??null;let s=r.match(/^topics\/([^/]+)\.json$/);if(s)return this.synthTopicPage(t,n,s[1]);let i=r.match(/^transcripts\/(.+)\.json$/);if(i){let c=t.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(n,i[1]);return c?(0,Oh.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=r.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return t.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(n,c,a[2])?.body_md??null}let l=r.match(/^plan-progress\/(.+)\.json$/);return l?t.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(n,l[1])?.artifact_json??null:null}allMemories(t,n){return t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n)}synthIndex(t,n){let r=t.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=new Map(t.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(n).map(a=>[a.root,a.n])),s=r.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...Dv(a.diff_stats_json)}})),i=t.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(n);return JSON.stringify({version:3,entries:s,...i.length>0&&{commitAliases:Object.fromEntries(i.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(t,n){let r=this.allMemories(t,n);if(r.length===0)return null;let o=Dh(r),s=r.filter(i=>i.parent_hash===null).map(i=>cn(wc(o,i)));return JSON.stringify({version:1,entries:s},null,"	")}topicRefs(t,n,r){return t.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(n,r).map(s=>({type:s.ref_type,id:s.ref_id,timestamp:s.ts,...s.branch!==null&&{branch:s.branch}}))}synthTopicPage(t,n,r){let o=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(n,r);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(t,n,r),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(t,n){let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=r.map(s=>({stableSlug:s.stable_slug,title:s.title,...s.summary!==null&&{summary:s.summary},relatedBranches:JSON.parse(s.related_branches_json),sourceRefs:this.topicRefs(t,n,s.stable_slug),lastUpdatedAt:s.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(t,n){let r=t.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(n);if(r.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let s of r)o[s.source_type].push(s.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(t){return this.withDbOrAbsent((n,r)=>{let o=(i,a)=>n.prepare(i).all(r).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",i=>`summaries/${i}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",i=>`transcripts/${i}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",i=>`plans/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",i=>`notes/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",i=>`references/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",i=>`skills/${i}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",i=>`plan-progress/${i}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",i=>`topics/${i}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",i=>i)].filter(i=>i.startsWith(t)).sort()},[])}async writeFiles(t,n){J()||await vg(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);Ph(r,o.id,t,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(n),o=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(n);return{memoriesCount:r.n,memoriesNewestMs:r.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(t){return this.withDbOrAbsent((n,r)=>n.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(r,t)?.target_hash??null,null)}async findShallowestByTreeHash(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(r,t)?.commit_hash??null,null)}async findHashesByPrefix(t){return/^[0-9a-f]+$/.test(t)?this.withDbOrAbsent((n,r)=>n.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(r,t).map(s=>s.commit_hash),[]):[]}async listHeadEntries(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${t!==void 0?" AND branch = ?":""}`).all(...t!==void 0?[r,t]:[r]).map(s=>({commitHash:s.commit_hash,parentCommitHash:null,...s.tree_hash!==null?{treeHash:s.tree_hash}:{},...s.commit_type!==null?{commitType:s.commit_type}:{},commitMessage:s.commit_message??"",commitDate:s.commit_date??"",branch:s.branch??"",generatedAt:s.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(n),o=new Map;for(let s of r){let i=o.get(s.commit_hash)??[];i.push(s.title),o.set(s.commit_hash,i)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(n),o=t.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(n),s=new Map;for(let i of o){let a=s.get(i.stable_slug)??[];a.push(i.ref_type),s.set(i.stable_slug,a)}return r.map(i=>({stableSlug:i.stable_slug,title:i.title,summary:i.summary,content:i.content_md,relatedBranches:JSON.parse(i.related_branches_json),lastUpdatedAt:i.last_updated_at,refTypes:s.get(i.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((t,n)=>t.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(n).map(o=>this.readOne(t,n,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}}});async function Mh(e){let t=Date.now(),n=Lh.get(e);if(n&&t-n.at<Lv)return n.route;let r=await to(e);return Lh.set(e,{route:r,at:t}),r}async function Fh(e,t,n){if(n.state==="legacy-fenced"||n.state==="cutover"){let{identity:r}=await sn(t);return new Ut(r)}return new Et(e)}async function $h(e){let t=e??process.cwd(),n=await Mh(t);if(n.state==="blocked")throw new Error(`storage unavailable: ${n.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return Fh(e,t,n)}async function ni(e){let t=e??process.cwd(),n;try{n=await Mh(t)}catch(r){return{ok:!1,reason:r.message}}if(n.state==="blocked")return{ok:!1,reason:n.reason};try{return{ok:!0,state:n.state,storage:await Fh(e,t,n)}}catch(r){return{ok:!1,reason:r.message}}}var Lv,Lh,ri=y(()=>{"use strict";Ms();Yn();$s();ti();Lv=3e3,Lh=new Map});var Qn=v((J1,ly)=>{"use strict";var iA="2.0.0",aA=Number.MAX_SAFE_INTEGER||9007199254740991,lA=16,cA=250,dA=["major","premajor","minor","preminor","patch","prepatch","prerelease"];ly.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:lA,MAX_SAFE_BUILD_LENGTH:cA,MAX_SAFE_INTEGER:aA,RELEASE_TYPES:dA,SEMVER_SPEC_VERSION:iA,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var To=v((G1,cy)=>{"use strict";var uA=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};cy.exports=uA});var Zn=v((tt,dy)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:Ac,MAX_SAFE_BUILD_LENGTH:pA,MAX_LENGTH:mA}=Qn(),fA=To();tt=dy.exports={};var gA=tt.re=[],hA=tt.safeRe=[],E=tt.src=[],yA=tt.safeSrc=[],b=tt.t={},wA=0,Cc="[a-zA-Z0-9-]",SA=[["\\s",1],["\\d",mA],[Cc,pA]],EA=e=>{for(let[t,n]of SA)e=e.split(`${t}*`).join(`${t}{0,${n}}`).split(`${t}+`).join(`${t}{1,${n}}`);return e},x=(e,t,n)=>{let r=EA(t),o=wA++;fA(e,o,t),b[e]=o,E[o]=t,yA[o]=r,gA[o]=new RegExp(t,n?"g":void 0),hA[o]=new RegExp(r,n?"g":void 0)};x("NUMERICIDENTIFIER","0|[1-9]\\d*");x("NUMERICIDENTIFIERLOOSE","\\d+");x("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${Cc}*`);x("MAINVERSION",`(${E[b.NUMERICIDENTIFIER]})\\.(${E[b.NUMERICIDENTIFIER]})\\.(${E[b.NUMERICIDENTIFIER]})`);x("MAINVERSIONLOOSE",`(${E[b.NUMERICIDENTIFIERLOOSE]})\\.(${E[b.NUMERICIDENTIFIERLOOSE]})\\.(${E[b.NUMERICIDENTIFIERLOOSE]})`);x("PRERELEASEIDENTIFIER",`(?:${E[b.NONNUMERICIDENTIFIER]}|${E[b.NUMERICIDENTIFIER]})`);x("PRERELEASEIDENTIFIERLOOSE",`(?:${E[b.NONNUMERICIDENTIFIER]}|${E[b.NUMERICIDENTIFIERLOOSE]})`);x("PRERELEASE",`(?:-(${E[b.PRERELEASEIDENTIFIER]}(?:\\.${E[b.PRERELEASEIDENTIFIER]})*))`);x("PRERELEASELOOSE",`(?:-?(${E[b.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${E[b.PRERELEASEIDENTIFIERLOOSE]})*))`);x("BUILDIDENTIFIER",`${Cc}+`);x("BUILD",`(?:\\+(${E[b.BUILDIDENTIFIER]}(?:\\.${E[b.BUILDIDENTIFIER]})*))`);x("FULLPLAIN",`v?${E[b.MAINVERSION]}${E[b.PRERELEASE]}?${E[b.BUILD]}?`);x("FULL",`^${E[b.FULLPLAIN]}$`);x("LOOSEPLAIN",`[v=\\s]*${E[b.MAINVERSIONLOOSE]}${E[b.PRERELEASELOOSE]}?${E[b.BUILD]}?`);x("LOOSE",`^${E[b.LOOSEPLAIN]}$`);x("GTLT","((?:<|>)?=?)");x("XRANGEIDENTIFIERLOOSE",`${E[b.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);x("XRANGEIDENTIFIER",`${E[b.NUMERICIDENTIFIER]}|x|X|\\*`);x("XRANGEPLAIN",`[v=\\s]*(${E[b.XRANGEIDENTIFIER]})(?:\\.(${E[b.XRANGEIDENTIFIER]})(?:\\.(${E[b.XRANGEIDENTIFIER]})(?:${E[b.PRERELEASE]})?${E[b.BUILD]}?)?)?`);x("XRANGEPLAINLOOSE",`[v=\\s]*(${E[b.XRANGEIDENTIFIERLOOSE]})(?:\\.(${E[b.XRANGEIDENTIFIERLOOSE]})(?:\\.(${E[b.XRANGEIDENTIFIERLOOSE]})(?:${E[b.PRERELEASELOOSE]})?${E[b.BUILD]}?)?)?`);x("XRANGE",`^${E[b.GTLT]}\\s*${E[b.XRANGEPLAIN]}$`);x("XRANGELOOSE",`^${E[b.GTLT]}\\s*${E[b.XRANGEPLAINLOOSE]}$`);x("COERCEPLAIN",`(^|[^\\d])(\\d{1,${Ac}})(?:\\.(\\d{1,${Ac}}))?(?:\\.(\\d{1,${Ac}}))?`);x("COERCE",`${E[b.COERCEPLAIN]}(?:$|[^\\d])`);x("COERCEFULL",E[b.COERCEPLAIN]+`(?:${E[b.PRERELEASE]})?(?:${E[b.BUILD]})?(?:$|[^\\d])`);x("COERCERTL",E[b.COERCE],!0);x("COERCERTLFULL",E[b.COERCEFULL],!0);x("LONETILDE","(?:~>?)");x("TILDETRIM",`(\\s*)${E[b.LONETILDE]}\\s+`,!0);tt.tildeTrimReplace="$1~";x("TILDE",`^${E[b.LONETILDE]}${E[b.XRANGEPLAIN]}$`);x("TILDELOOSE",`^${E[b.LONETILDE]}${E[b.XRANGEPLAINLOOSE]}$`);x("LONECARET","(?:\\^)");x("CARETTRIM",`(\\s*)${E[b.LONECARET]}\\s+`,!0);tt.caretTrimReplace="$1^";x("CARET",`^${E[b.LONECARET]}${E[b.XRANGEPLAIN]}$`);x("CARETLOOSE",`^${E[b.LONECARET]}${E[b.XRANGEPLAINLOOSE]}$`);x("COMPARATORLOOSE",`^${E[b.GTLT]}\\s*(${E[b.LOOSEPLAIN]})$|^$`);x("COMPARATOR",`^${E[b.GTLT]}\\s*(${E[b.FULLPLAIN]})$|^$`);x("COMPARATORTRIM",`(\\s*)${E[b.GTLT]}\\s*(${E[b.LOOSEPLAIN]}|${E[b.XRANGEPLAIN]})`,!0);tt.comparatorTrimReplace="$1$2$3";x("HYPHENRANGE",`^\\s*(${E[b.XRANGEPLAIN]})\\s+-\\s+(${E[b.XRANGEPLAIN]})\\s*$`);x("HYPHENRANGELOOSE",`^\\s*(${E[b.XRANGEPLAINLOOSE]})\\s+-\\s+(${E[b.XRANGEPLAINLOOSE]})\\s*$`);x("STAR","(<|>)?=?\\s*\\*");x("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");x("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var ui=v((q1,uy)=>{"use strict";var bA=Object.freeze({loose:!0}),TA=Object.freeze({}),_A=e=>e?typeof e!="object"?bA:e:TA;uy.exports=_A});var xc=v((K1,fy)=>{"use strict";var py=/^[0-9]+$/,my=(e,t)=>{if(typeof e=="number"&&typeof t=="number")return e===t?0:e<t?-1:1;let n=py.test(e),r=py.test(t);return n&&r&&(e=+e,t=+t),e===t?0:n&&!r?-1:r&&!n?1:e<t?-1:1},RA=(e,t)=>my(t,e);fy.exports={compareIdentifiers:my,rcompareIdentifiers:RA}});var se=v((V1,hy)=>{"use strict";var pi=To(),{MAX_LENGTH:gy,MAX_SAFE_INTEGER:mi}=Qn(),{safeRe:fi,t:gi}=Zn(),kA=ui(),{compareIdentifiers:Ic}=xc(),Pc=class e{constructor(t,n){if(n=kA(n),t instanceof e){if(t.loose===!!n.loose&&t.includePrerelease===!!n.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>gy)throw new TypeError(`version is longer than ${gy} characters`);pi("SemVer",t,n),this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease;let r=t.trim().match(n.loose?fi[gi.LOOSE]:fi[gi.FULL]);if(!r)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>mi||this.major<0)throw new TypeError("Invalid major version");if(this.minor>mi||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>mi||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let s=+o;if(s>=0&&s<mi)return s}return o}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(pi("SemVer.compare",this.version,this.options,t),!(t instanceof e)){if(typeof t=="string"&&t===this.version)return 0;t=new e(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof e||(t=new e(t,this.options)),this.major<t.major?-1:this.major>t.major?1:this.minor<t.minor?-1:this.minor>t.minor?1:this.patch<t.patch?-1:this.patch>t.patch?1:0}comparePre(t){if(t instanceof e||(t=new e(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let n=0;do{let r=this.prerelease[n],o=t.prerelease[n];if(pi("prerelease compare",n,r,o),r===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(r===void 0)return-1;if(r===o)continue;return Ic(r,o)}while(++n)}compareBuild(t){t instanceof e||(t=new e(t,this.options));let n=0;do{let r=this.build[n],o=t.build[n];if(pi("build compare",n,r,o),r===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(r===void 0)return-1;if(r===o)continue;return Ic(r,o)}while(++n)}inc(t,n,r){if(t.startsWith("pre")){if(!n&&r===!1)throw new Error("invalid increment argument: identifier is empty");if(n){let o=`-${n}`.match(this.options.loose?fi[gi.PRERELEASELOOSE]:fi[gi.PRERELEASE]);if(!o||o[1]!==n)throw new Error(`invalid identifier: ${n}`)}}switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",n,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",n,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",n,r),this.inc("pre",n,r);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",n,r),this.inc("pre",n,r);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(r)?1:0;if(this.prerelease.length===0)this.prerelease=[o];else{let s=this.prerelease.length;for(;--s>=0;)typeof this.prerelease[s]=="number"&&(this.prerelease[s]++,s=-2);if(s===-1){if(n===this.prerelease.join(".")&&r===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(n){let s=[n,o];r===!1&&(s=[n]),Ic(this.prerelease[0],n)===0?isNaN(this.prerelease[1])&&(this.prerelease=s):this.prerelease=s}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};hy.exports=Pc});var Bt=v((Y1,wy)=>{"use strict";var yy=se(),vA=(e,t,n=!1)=>{if(e instanceof yy)return e;try{return new yy(e,t)}catch(r){if(!n)return null;throw r}};wy.exports=vA});var Ey=v((X1,Sy)=>{"use strict";var AA=Bt(),CA=(e,t)=>{let n=AA(e,t);return n?n.version:null};Sy.exports=CA});var Ty=v((z1,by)=>{"use strict";var xA=Bt(),IA=(e,t)=>{let n=xA(e.trim().replace(/^[=v]+/,""),t);return n?n.version:null};by.exports=IA});var ky=v((Q1,Ry)=>{"use strict";var _y=se(),PA=(e,t,n,r,o)=>{typeof n=="string"&&(o=r,r=n,n=void 0);try{return new _y(e instanceof _y?e.version:e,n).inc(t,r,o).version}catch{return null}};Ry.exports=PA});var Cy=v((Z1,Ay)=>{"use strict";var vy=Bt(),NA=(e,t)=>{let n=vy(e,null,!0),r=vy(t,null,!0),o=n.compare(r);if(o===0)return null;let s=o>0,i=s?n:r,a=s?r:n,l=!!i.prerelease.length;if(!!a.prerelease.length&&!l){if(!a.patch&&!a.minor)return"major";if(a.compareMain(i)===0)return a.minor&&!a.patch?"minor":"patch"}let d=l?"pre":"";return n.major!==r.major?d+"major":n.minor!==r.minor?d+"minor":n.patch!==r.patch?d+"patch":"prerelease"};Ay.exports=NA});var Iy=v((eB,xy)=>{"use strict";var OA=se(),DA=(e,t)=>new OA(e,t).major;xy.exports=DA});var Ny=v((tB,Py)=>{"use strict";var LA=se(),MA=(e,t)=>new LA(e,t).minor;Py.exports=MA});var Dy=v((nB,Oy)=>{"use strict";var FA=se(),$A=(e,t)=>new FA(e,t).patch;Oy.exports=$A});var My=v((rB,Ly)=>{"use strict";var jA=Bt(),UA=(e,t)=>{let n=jA(e,t);return n&&n.prerelease.length?n.prerelease:null};Ly.exports=UA});var Ne=v((oB,$y)=>{"use strict";var Fy=se(),HA=(e,t,n)=>new Fy(e,n).compare(new Fy(t,n));$y.exports=HA});var Uy=v((sB,jy)=>{"use strict";var BA=Ne(),WA=(e,t,n)=>BA(t,e,n);jy.exports=WA});var By=v((iB,Hy)=>{"use strict";var JA=Ne(),GA=(e,t)=>JA(e,t,!0);Hy.exports=GA});var hi=v((aB,Jy)=>{"use strict";var Wy=se(),qA=(e,t,n)=>{let r=new Wy(e,n),o=new Wy(t,n);return r.compare(o)||r.compareBuild(o)};Jy.exports=qA});var qy=v((lB,Gy)=>{"use strict";var KA=hi(),VA=(e,t)=>e.sort((n,r)=>KA(n,r,t));Gy.exports=VA});var Vy=v((cB,Ky)=>{"use strict";var YA=hi(),XA=(e,t)=>e.sort((n,r)=>YA(r,n,t));Ky.exports=XA});var _o=v((dB,Yy)=>{"use strict";var zA=Ne(),QA=(e,t,n)=>zA(e,t,n)>0;Yy.exports=QA});var yi=v((uB,Xy)=>{"use strict";var ZA=Ne(),eC=(e,t,n)=>ZA(e,t,n)<0;Xy.exports=eC});var Nc=v((pB,zy)=>{"use strict";var tC=Ne(),nC=(e,t,n)=>tC(e,t,n)===0;zy.exports=nC});var Oc=v((mB,Qy)=>{"use strict";var rC=Ne(),oC=(e,t,n)=>rC(e,t,n)!==0;Qy.exports=oC});var wi=v((fB,Zy)=>{"use strict";var sC=Ne(),iC=(e,t,n)=>sC(e,t,n)>=0;Zy.exports=iC});var Si=v((gB,ew)=>{"use strict";var aC=Ne(),lC=(e,t,n)=>aC(e,t,n)<=0;ew.exports=lC});var Dc=v((hB,tw)=>{"use strict";var cC=Nc(),dC=Oc(),uC=_o(),pC=wi(),mC=yi(),fC=Si(),gC=(e,t,n,r)=>{switch(t){case"===":return typeof e=="object"&&(e=e.version),typeof n=="object"&&(n=n.version),e===n;case"!==":return typeof e=="object"&&(e=e.version),typeof n=="object"&&(n=n.version),e!==n;case"":case"=":case"==":return cC(e,n,r);case"!=":return dC(e,n,r);case">":return uC(e,n,r);case">=":return pC(e,n,r);case"<":return mC(e,n,r);case"<=":return fC(e,n,r);default:throw new TypeError(`Invalid operator: ${t}`)}};tw.exports=gC});var rw=v((yB,nw)=>{"use strict";var hC=se(),yC=Bt(),{safeRe:Ei,t:bi}=Zn(),wC=(e,t)=>{if(e instanceof hC)return e;if(typeof e=="number"&&(e=String(e)),typeof e!="string")return null;t=t||{};let n=null;if(!t.rtl)n=e.match(t.includePrerelease?Ei[bi.COERCEFULL]:Ei[bi.COERCE]);else{let l=t.includePrerelease?Ei[bi.COERCERTLFULL]:Ei[bi.COERCERTL],c;for(;(c=l.exec(e))&&(!n||n.index+n[0].length!==e.length);)(!n||c.index+c[0].length!==n.index+n[0].length)&&(n=c),l.lastIndex=c.index+c[1].length+c[2].length;l.lastIndex=-1}if(n===null)return null;let r=n[2],o=n[3]||"0",s=n[4]||"0",i=t.includePrerelease&&n[5]?`-${n[5]}`:"",a=t.includePrerelease&&n[6]?`+${n[6]}`:"";return yC(`${r}.${o}.${s}${i}${a}`,t)};nw.exports=wC});var sw=v((wB,ow)=>{"use strict";var SC=Bt(),EC=Qn(),bC=se(),TC=(e,t,n)=>{if(!EC.RELEASE_TYPES.includes(t))return null;let r=_C(e,n);return r&&RC(r,t)},_C=(e,t)=>{let n=e instanceof bC?e.version:e;return SC(n,t)},RC=(e,t)=>{if(kC(t))return e.version;switch(e.prerelease=[],t){case"major":e.minor=0,e.patch=0;break;case"minor":e.patch=0;break}return e.format()},kC=e=>e.startsWith("pre");ow.exports=TC});var aw=v((SB,iw)=>{"use strict";var Lc=class{constructor(){this.max=1e3,this.map=new Map}get(t){let n=this.map.get(t);if(n!==void 0)return this.map.delete(t),this.map.set(t,n),n}delete(t){return this.map.delete(t)}set(t,n){if(!this.delete(t)&&n!==void 0){if(this.map.size>=this.max){let o=this.map.keys().next().value;this.delete(o)}this.map.set(t,n)}return this}};iw.exports=Lc});var Oe=v((EB,uw)=>{"use strict";var vC=/\s+/g,Mc=class e{constructor(t,n){if(n=CC(n),t instanceof e)return t.loose===!!n.loose&&t.includePrerelease===!!n.includePrerelease?t:new e(t.raw,n);if(t instanceof Fc)return this.raw=t.value,this.set=[[t]],this.formatted=void 0,this;if(this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease,this.raw=t.trim().replace(vC," "),this.set=this.raw.split("||").map(r=>this.parseRange(r.trim())).filter(r=>r.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let r=this.set[0];if(this.set=this.set.filter(o=>!cw(o[0])),this.set.length===0)this.set=[r];else if(this.set.length>1){for(let o of this.set)if(o.length===1&&FC(o[0])){this.set=[o];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let t=0;t<this.set.length;t++){t>0&&(this.formatted+="||");let n=this.set[t];for(let r=0;r<n.length;r++)r>0&&(this.formatted+=" "),this.formatted+=n[r].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(t){t=t.replace(MC,"");let r=((this.options.includePrerelease&&DC)|(this.options.loose&&LC))+":"+t,o=lw.get(r);if(o)return o;let s=this.options.loose,i=s?ye[ie.HYPHENRANGELOOSE]:ye[ie.HYPHENRANGE];t=t.replace(i,KC(this.options.includePrerelease)),H("hyphen replace",t),t=t.replace(ye[ie.COMPARATORTRIM],PC),H("comparator trim",t),t=t.replace(ye[ie.TILDETRIM],NC),H("tilde trim",t),t=t.replace(ye[ie.CARETTRIM],OC),H("caret trim",t);let a=t.split(" ").map(u=>$C(u,this.options)).join(" ").split(/\s+/).map(u=>qC(u,this.options));s&&(a=a.filter(u=>(H("loose invalid filter",u,this.options),!!u.match(ye[ie.COMPARATORLOOSE])))),H("range list",a);let l=new Map,c=a.map(u=>new Fc(u,this.options));for(let u of c){if(cw(u))return[u];l.set(u.value,u)}l.size>1&&l.has("")&&l.delete("");let d=[...l.values()];return lw.set(r,d),d}intersects(t,n){if(!(t instanceof e))throw new TypeError("a Range is required");return this.set.some(r=>dw(r,n)&&t.set.some(o=>dw(o,n)&&r.every(s=>o.every(i=>s.intersects(i,n)))))}test(t){if(!t)return!1;if(typeof t=="string")try{t=new xC(t,this.options)}catch{return!1}for(let n=0;n<this.set.length;n++)if(VC(this.set[n],t,this.options))return!0;return!1}};uw.exports=Mc;var AC=aw(),lw=new AC,CC=ui(),Fc=Ro(),H=To(),xC=se(),{safeRe:ye,src:IC,t:ie,comparatorTrimReplace:PC,tildeTrimReplace:NC,caretTrimReplace:OC}=Zn(),{FLAG_INCLUDE_PRERELEASE:DC,FLAG_LOOSE:LC}=Qn(),MC=new RegExp(IC[ie.BUILD],"g"),cw=e=>e.value==="<0.0.0-0",FC=e=>e.value==="",dw=(e,t)=>{let n=!0,r=e.slice(),o=r.pop();for(;n&&r.length;)n=r.every(s=>o.intersects(s,t)),o=r.pop();return n},$C=(e,t)=>(e=e.replace(ye[ie.BUILD],""),H("comp",e,t),e=HC(e,t),H("caret",e),e=jC(e,t),H("tildes",e),e=WC(e,t),H("xrange",e),e=GC(e,t),H("stars",e),e),we=e=>!e||e.toLowerCase()==="x"||e==="*",jC=(e,t)=>e.trim().split(/\s+/).map(n=>UC(n,t)).join(" "),UC=(e,t)=>{let n=t.loose?ye[ie.TILDELOOSE]:ye[ie.TILDE];return e.replace(n,(r,o,s,i,a)=>{H("tilde",e,r,o,s,i,a);let l;return we(o)?l="":we(s)?l=`>=${o}.0.0 <${+o+1}.0.0-0`:we(i)?l=`>=${o}.${s}.0 <${o}.${+s+1}.0-0`:a?(H("replaceTilde pr",a),l=`>=${o}.${s}.${i}-${a} <${o}.${+s+1}.0-0`):l=`>=${o}.${s}.${i} <${o}.${+s+1}.0-0`,H("tilde return",l),l})},HC=(e,t)=>e.trim().split(/\s+/).map(n=>BC(n,t)).join(" "),BC=(e,t)=>{H("caret",e,t);let n=t.loose?ye[ie.CARETLOOSE]:ye[ie.CARET],r=t.includePrerelease?"-0":"";return e.replace(n,(o,s,i,a,l)=>{H("caret",e,o,s,i,a,l);let c;return we(s)?c="":we(i)?c=`>=${s}.0.0${r} <${+s+1}.0.0-0`:we(a)?s==="0"?c=`>=${s}.${i}.0${r} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.0${r} <${+s+1}.0.0-0`:l?(H("replaceCaret pr",l),s==="0"?i==="0"?c=`>=${s}.${i}.${a}-${l} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}-${l} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a}-${l} <${+s+1}.0.0-0`):(H("no pr"),s==="0"?i==="0"?c=`>=${s}.${i}.${a}${r} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}${r} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a} <${+s+1}.0.0-0`),H("caret return",c),c})},WC=(e,t)=>(H("replaceXRanges",e,t),e.split(/\s+/).map(n=>JC(n,t)).join(" ")),JC=(e,t)=>{e=e.trim();let n=t.loose?ye[ie.XRANGELOOSE]:ye[ie.XRANGE];return e.replace(n,(r,o,s,i,a,l)=>{H("xRange",e,r,o,s,i,a,l);let c=we(s),d=c||we(i),u=d||we(a),p=u;return o==="="&&p&&(o=""),l=t.includePrerelease?"-0":"",c?o===">"||o==="<"?r="<0.0.0-0":r="*":o&&p?(d&&(i=0),a=0,o===">"?(o=">=",d?(s=+s+1,i=0,a=0):(i=+i+1,a=0)):o==="<="&&(o="<",d?s=+s+1:i=+i+1),o==="<"&&(l="-0"),r=`${o+s}.${i}.${a}${l}`):d?r=`>=${s}.0.0${l} <${+s+1}.0.0-0`:u&&(r=`>=${s}.${i}.0${l} <${s}.${+i+1}.0-0`),H("xRange return",r),r})},GC=(e,t)=>(H("replaceStars",e,t),e.trim().replace(ye[ie.STAR],"")),qC=(e,t)=>(H("replaceGTE0",e,t),e.trim().replace(ye[t.includePrerelease?ie.GTE0PRE:ie.GTE0],"")),KC=e=>(t,n,r,o,s,i,a,l,c,d,u,p)=>(we(r)?n="":we(o)?n=`>=${r}.0.0${e?"-0":""}`:we(s)?n=`>=${r}.${o}.0${e?"-0":""}`:i?n=`>=${n}`:n=`>=${n}${e?"-0":""}`,we(c)?l="":we(d)?l=`<${+c+1}.0.0-0`:we(u)?l=`<${c}.${+d+1}.0-0`:p?l=`<=${c}.${d}.${u}-${p}`:e?l=`<${c}.${d}.${+u+1}-0`:l=`<=${l}`,`${n} ${l}`.trim()),VC=(e,t,n)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!n.includePrerelease){for(let r=0;r<e.length;r++)if(H(e[r].semver),e[r].semver!==Fc.ANY&&e[r].semver.prerelease.length>0){let o=e[r].semver;if(o.major===t.major&&o.minor===t.minor&&o.patch===t.patch)return!0}return!1}return!0}});var Ro=v((bB,yw)=>{"use strict";var ko=Symbol("SemVer ANY"),Uc=class e{static get ANY(){return ko}constructor(t,n){if(n=pw(n),t instanceof e){if(t.loose===!!n.loose)return t;t=t.value}t=t.trim().split(/\s+/).join(" "),jc("comparator",t,n),this.options=n,this.loose=!!n.loose,this.parse(t),this.semver===ko?this.value="":this.value=this.operator+this.semver.version,jc("comp",this)}parse(t){let n=this.options.loose?mw[fw.COMPARATORLOOSE]:mw[fw.COMPARATOR],r=t.match(n);if(!r)throw new TypeError(`Invalid comparator: ${t}`);this.operator=r[1]!==void 0?r[1]:"",this.operator==="="&&(this.operator=""),r[2]?this.semver=new gw(r[2],this.options.loose):this.semver=ko}toString(){return this.value}test(t){if(jc("Comparator.test",t,this.options.loose),this.semver===ko||t===ko)return!0;if(typeof t=="string")try{t=new gw(t,this.options)}catch{return!1}return $c(t,this.operator,this.semver,this.options)}intersects(t,n){if(!(t instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new hw(t.value,n).test(this.value):t.operator===""?t.value===""?!0:new hw(this.value,n).test(t.semver):(n=pw(n),n.includePrerelease&&(this.value==="<0.0.0-0"||t.value==="<0.0.0-0")||!n.includePrerelease&&(this.value.startsWith("<0.0.0")||t.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&t.operator.startsWith(">")||this.operator.startsWith("<")&&t.operator.startsWith("<")||this.semver.version===t.semver.version&&this.operator.includes("=")&&t.operator.includes("=")||$c(this.semver,"<",t.semver,n)&&this.operator.startsWith(">")&&t.operator.startsWith("<")||$c(this.semver,">",t.semver,n)&&this.operator.startsWith("<")&&t.operator.startsWith(">")))}};yw.exports=Uc;var pw=ui(),{safeRe:mw,t:fw}=Zn(),$c=Dc(),jc=To(),gw=se(),hw=Oe()});var vo=v((TB,ww)=>{"use strict";var YC=Oe(),XC=(e,t,n)=>{try{t=new YC(t,n)}catch{return!1}return t.test(e)};ww.exports=XC});var Ew=v((_B,Sw)=>{"use strict";var zC=Oe(),QC=(e,t)=>new zC(e,t).set.map(n=>n.map(r=>r.value).join(" ").trim().split(" "));Sw.exports=QC});var Tw=v((RB,bw)=>{"use strict";var ZC=se(),ex=Oe(),tx=(e,t,n)=>{let r=null,o=null,s=null;try{s=new ex(t,n)}catch{return null}return e.forEach(i=>{s.test(i)&&(!r||o.compare(i)===-1)&&(r=i,o=new ZC(r,n))}),r};bw.exports=tx});var Rw=v((kB,_w)=>{"use strict";var nx=se(),rx=Oe(),ox=(e,t,n)=>{let r=null,o=null,s=null;try{s=new rx(t,n)}catch{return null}return e.forEach(i=>{s.test(i)&&(!r||o.compare(i)===1)&&(r=i,o=new nx(r,n))}),r};_w.exports=ox});var Aw=v((vB,vw)=>{"use strict";var Hc=se(),sx=Oe(),kw=_o(),ix=(e,t)=>{e=new sx(e,t);let n=new Hc("0.0.0");if(e.test(n)||(n=new Hc("0.0.0-0"),e.test(n)))return n;n=null;for(let r=0;r<e.set.length;++r){let o=e.set[r],s=null;o.forEach(i=>{let a=new Hc(i.semver.version);switch(i.operator){case">":a.prerelease.length===0?a.patch++:a.prerelease.push(0),a.raw=a.format();case"":case">=":(!s||kw(a,s))&&(s=a);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${i.operator}`)}}),s&&(!n||kw(n,s))&&(n=s)}return n&&e.test(n)?n:null};vw.exports=ix});var xw=v((AB,Cw)=>{"use strict";var ax=Oe(),lx=(e,t)=>{try{return new ax(e,t).range||"*"}catch{return null}};Cw.exports=lx});var Ti=v((CB,Ow)=>{"use strict";var cx=se(),Nw=Ro(),{ANY:dx}=Nw,ux=Oe(),px=vo(),Iw=_o(),Pw=yi(),mx=Si(),fx=wi(),gx=(e,t,n,r)=>{e=new cx(e,r),t=new ux(t,r);let o,s,i,a,l;switch(n){case">":o=Iw,s=mx,i=Pw,a=">",l=">=";break;case"<":o=Pw,s=fx,i=Iw,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(px(e,t,r))return!1;for(let c=0;c<t.set.length;++c){let d=t.set[c],u=null,p=null;if(d.forEach(m=>{m.semver===dx&&(m=new Nw(">=0.0.0")),u=u||m,p=p||m,o(m.semver,u.semver,r)?u=m:i(m.semver,p.semver,r)&&(p=m)}),u.operator===a||u.operator===l||(!p.operator||p.operator===a)&&s(e,p.semver))return!1;if(p.operator===l&&i(e,p.semver))return!1}return!0};Ow.exports=gx});var Lw=v((xB,Dw)=>{"use strict";var hx=Ti(),yx=(e,t,n)=>hx(e,t,">",n);Dw.exports=yx});var Fw=v((IB,Mw)=>{"use strict";var wx=Ti(),Sx=(e,t,n)=>wx(e,t,"<",n);Mw.exports=Sx});var Uw=v((PB,jw)=>{"use strict";var $w=Oe(),Ex=(e,t,n)=>(e=new $w(e,n),t=new $w(t,n),e.intersects(t,n));jw.exports=Ex});var Bw=v((NB,Hw)=>{"use strict";var bx=vo(),Tx=Ne();Hw.exports=(e,t,n)=>{let r=[],o=null,s=null,i=e.sort((d,u)=>Tx(d,u,n));for(let d of i)bx(d,t,n)?(s=d,o||(o=d)):(s&&r.push([o,s]),s=null,o=null);o&&r.push([o,null]);let a=[];for(let[d,u]of r)d===u?a.push(d):!u&&d===i[0]?a.push("*"):u?d===i[0]?a.push(`<=${u}`):a.push(`${d} - ${u}`):a.push(`>=${d}`);let l=a.join(" || "),c=typeof t.raw=="string"?t.raw:String(t);return l.length<c.length?l:t}});var Vw=v((OB,Kw)=>{"use strict";var Ww=Oe(),Jc=Ro(),{ANY:Bc}=Jc,Wc=vo(),Gc=Ne(),_x=(e,t,n={})=>{if(e===t)return!0;e=new Ww(e,n),t=new Ww(t,n);let r=!1;e:for(let o of e.set){for(let s of t.set){let i=kx(o,s,n);if(r=r||i!==null,i)continue e}if(r)return!1}return!0},Rx=[new Jc(">=0.0.0-0")],Jw=[new Jc(">=0.0.0")],kx=(e,t,n)=>{if(e===t)return!0;if(e.length===1&&e[0].semver===Bc){if(t.length===1&&t[0].semver===Bc)return!0;n.includePrerelease?e=Rx:e=Jw}if(t.length===1&&t[0].semver===Bc){if(n.includePrerelease)return!0;t=Jw}let r=new Set,o,s;for(let m of e)m.operator===">"||m.operator===">="?o=Gw(o,m,n):m.operator==="<"||m.operator==="<="?s=qw(s,m,n):r.add(m.semver);if(r.size>1)return null;let i;if(o&&s){if(i=Gc(o.semver,s.semver,n),i>0)return null;if(i===0&&(o.operator!==">="||s.operator!=="<="))return null}for(let m of r){if(o&&!Wc(m,String(o),n)||s&&!Wc(m,String(s),n))return null;for(let g of t)if(!Wc(m,String(g),n))return!1;return!0}let a,l,c,d,u=s&&!n.includePrerelease&&s.semver.prerelease.length?s.semver:!1,p=o&&!n.includePrerelease&&o.semver.prerelease.length?o.semver:!1;u&&u.prerelease.length===1&&s.operator==="<"&&u.prerelease[0]===0&&(u=!1);for(let m of t){if(d=d||m.operator===">"||m.operator===">=",c=c||m.operator==="<"||m.operator==="<=",o){if(p&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===p.major&&m.semver.minor===p.minor&&m.semver.patch===p.patch&&(p=!1),m.operator===">"||m.operator===">="){if(a=Gw(o,m,n),a===m&&a!==o)return!1}else if(o.operator===">="&&!m.test(o.semver))return!1}if(s){if(u&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===u.major&&m.semver.minor===u.minor&&m.semver.patch===u.patch&&(u=!1),m.operator==="<"||m.operator==="<="){if(l=qw(s,m,n),l===m&&l!==s)return!1}else if(s.operator==="<="&&!m.test(s.semver))return!1}if(!m.operator&&(s||o)&&i!==0)return!1}return!(o&&c&&!s&&i!==0||s&&d&&!o&&i!==0||p||u)},Gw=(e,t,n)=>{if(!e)return t;let r=Gc(e.semver,t.semver,n);return r>0?e:r<0||t.operator===">"&&e.operator===">="?t:e},qw=(e,t,n)=>{if(!e)return t;let r=Gc(e.semver,t.semver,n);return r<0?e:r>0||t.operator==="<"&&e.operator==="<="?t:e};Kw.exports=_x});var Qw=v((DB,zw)=>{"use strict";var qc=Zn(),Yw=Qn(),vx=se(),Xw=xc(),Ax=Bt(),Cx=Ey(),xx=Ty(),Ix=ky(),Px=Cy(),Nx=Iy(),Ox=Ny(),Dx=Dy(),Lx=My(),Mx=Ne(),Fx=Uy(),$x=By(),jx=hi(),Ux=qy(),Hx=Vy(),Bx=_o(),Wx=yi(),Jx=Nc(),Gx=Oc(),qx=wi(),Kx=Si(),Vx=Dc(),Yx=rw(),Xx=sw(),zx=Ro(),Qx=Oe(),Zx=vo(),eI=Ew(),tI=Tw(),nI=Rw(),rI=Aw(),oI=xw(),sI=Ti(),iI=Lw(),aI=Fw(),lI=Uw(),cI=Bw(),dI=Vw();zw.exports={parse:Ax,valid:Cx,clean:xx,inc:Ix,diff:Px,major:Nx,minor:Ox,patch:Dx,prerelease:Lx,compare:Mx,rcompare:Fx,compareLoose:$x,compareBuild:jx,sort:Ux,rsort:Hx,gt:Bx,lt:Wx,eq:Jx,neq:Gx,gte:qx,lte:Kx,cmp:Vx,coerce:Yx,truncate:Xx,Comparator:zx,Range:Qx,satisfies:Zx,toComparators:eI,maxSatisfying:tI,minSatisfying:nI,minVersion:rI,validRange:oI,outside:sI,gtr:iI,ltr:aI,intersects:lI,simplifyRange:cI,subset:dI,SemVer:vx,re:qc.re,src:qc.src,tokens:qc.t,SEMVER_SPEC_VERSION:Yw.SEMVER_SPEC_VERSION,RELEASE_TYPES:Yw.RELEASE_TYPES,compareIdentifiers:Xw.compareIdentifiers,rcompareIdentifiers:Xw.rcompareIdentifiers}});var pS={};Sr(pS,{POST_MERGE_MARKER_START:()=>No,POST_REWRITE_MARKER_START:()=>Io,PREPARE_MSG_MARKER_START:()=>Po,PRE_PUSH_MARKER_START:()=>Oo,installGitHook:()=>nd,installPostMergeHook:()=>sd,installPostRewriteHook:()=>rd,installPrePushHook:()=>id,installPrepareMsgHook:()=>od,isGitHookInstalled:()=>dS,isGitPipelineFullyInstalled:()=>uS,isHookSectionInstalled:()=>rr,removeGitHook:()=>ad,removePostMergeHook:()=>dd,removePostRewriteHook:()=>ld,removePrePushHook:()=>ud,removePrepareMsgHook:()=>cd});async function nd(e){let t=await Nn(e),n=(0,or.join)(t,"post-commit"),r=$e("post-commit"),o=[nr,r,td].join(`
`),s,i="";try{if(i=await(0,ee.readFile)(n,"utf-8"),i.includes(nr)){let l=new RegExp(`\\n*${Wt(nr)}[\\s\\S]*?${Wt(td)}\\n*`,"g"),d=`${i.replace(l,`
`).trimEnd()}

${o}
`;return i===d?(await Ii(n),{path:n}):(await P(n,d),await(0,ee.chmod)(n,493),{path:n})}s="Existing post-commit hook found \u2014 Jolli Memory section appended",Ai.warn(s)}catch{}let a;i?a=`${i}

${o}
`:a=`#!/bin/sh

${o}
`,await(0,ee.mkdir)(t,{recursive:!0}),await P(n,a);try{await(0,ee.chmod)(n,493)}catch{}return Ai.info("Git post-commit hook installed"),{warning:s,path:n}}async function rd(e){let t=$e("post-rewrite",'"$1"'),n=[Io,t,iS].join(`
`);return Ci(e,"post-rewrite",n,Io)}async function od(e){let t='"$HOME/.jolli/jollimemory/run-hook"',n=["__jolli_prepare_msg_previous_status=$?",`if [ -x ${t} ]; then ${t} prepare-commit-msg "$1" "$2" || true; fi`,'(exit "$__jolli_prepare_msg_previous_status")'].join(`
`),r=[Po,n,aS].join(`
`);return Ci(e,"prepare-commit-msg",r,Po)}async function sd(e){let t=$e("post-merge"),n=[No,t,lS].join(`
`);return Ci(e,"post-merge",n,No)}async function id(e){let t='"$HOME/.jolli/jollimemory/run-hook"',n=["__jolli_pre_push_previous_status=$?",`if [ -x ${t} ]; then ${t} pre-push "$@" || true; fi`,'(exit "$__jolli_pre_push_previous_status")'].join(`
`),r=[Oo,n,cS].join(`
`);return Ci(e,"pre-push",r,Oo)}async function Ci(e,t,n,r){let o=n.slice(n.lastIndexOf(`
`)+1),s=await Nn(e),i=(0,or.join)(s,t),a,l="";try{if(l=await(0,ee.readFile)(i,"utf-8"),l.includes(r)){let d=new RegExp(`\\n*${Wt(r)}[\\s\\S]*?${Wt(o)}\\n*`,"g"),p=`${l.replace(d,`
`).trimEnd()}

${n}
`;return l===p?(await Ii(i),{path:i}):(await P(i,p),await(0,ee.chmod)(i,493),{path:i})}a=`Existing ${t} hook found \u2014 Jolli Memory section appended`,Ai.warn(a)}catch{}let c;l?c=`${l}

${n}
`:c=`#!/bin/sh

${n}
`,await(0,ee.mkdir)(s,{recursive:!0}),await P(i,c);try{await(0,ee.chmod)(i,493)}catch{}return Ai.info("Git %s hook installed",t),{warning:a,path:i}}async function ad(e){let t;try{let s=await Nn(e);t=(0,or.join)(s,"post-commit")}catch{return{}}let n;try{n=await(0,ee.readFile)(t,"utf-8")}catch{return{}}if(!n.includes(nr))return{};let r=new RegExp(`\\n*${Wt(nr)}[\\s\\S]*?${Wt(td)}\\n*`,"g"),o=n.replace(r,`
`);if(o.trim()==="#!/bin/sh"||o.trim()===""){let{rm:s}=await import("node:fs/promises");await s(t,{force:!0})}else await P(t,o),await Ii(t);return{}}async function ld(e){await xi(e,"post-rewrite",Io,iS)}async function cd(e){await xi(e,"prepare-commit-msg",Po,aS)}async function dd(e){await xi(e,"post-merge",No,lS)}async function ud(e){await xi(e,"pre-push",Oo,cS)}async function xi(e,t,n,r){let o;try{o=await Nn(e)}catch{return}let s=(0,or.join)(o,t),i;try{i=await(0,ee.readFile)(s,"utf-8")}catch{return}if(!i.includes(n))return;let a=new RegExp(`\\n*${Wt(n)}[\\s\\S]*?${Wt(r)}\\n*`,"g"),l=i.replace(a,`
`);if(l.trim()==="#!/bin/sh"||l.trim()===""){let{rm:c}=await import("node:fs/promises");await c(s,{force:!0})}else await P(s,l),await Ii(s)}async function dS(e){return rr(e,"post-commit",nr)}async function uS(e){return await dS(e)&&await rr(e,"post-rewrite",Io)&&await rr(e,"prepare-commit-msg",Po)&&await rr(e,"post-merge",No)}async function rr(e,t,n){try{let r=await Nn(e),o=(0,or.join)(r,t);return(await(0,ee.readFile)(o,"utf-8")).includes(n)?process.platform==="win32"?!0:((await(0,ee.stat)(o)).mode&73)!==0:!1}catch{return!1}}function Wt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function Ii(e){try{((await(0,ee.stat)(e)).mode&73)===0&&await(0,ee.chmod)(e,493)}catch{}}var ee,or,Ai,nr,td,Io,iS,Po,aS,No,lS,Oo,cS,pd=y(()=>{"use strict";ee=require("node:fs/promises"),or=require("node:path");ce();be();w();ms();Ai=f("GitHookInstaller"),nr="# >>> JolliMemory post-commit hook >>>",td="# <<< JolliMemory post-commit hook <<<",Io="# >>> JolliMemory post-rewrite hook >>>",iS="# <<< JolliMemory post-rewrite hook <<<",Po="# >>> JolliMemory prepare-commit-msg hook >>>",aS="# <<< JolliMemory prepare-commit-msg hook <<<",No="# >>> JolliMemory post-merge hook >>>",lS="# <<< JolliMemory post-merge hook <<<",Oo="# >>> JolliMemory pre-push hook >>>",cS="# <<< JolliMemory pre-push hook <<<"});function CE(){return"0.99.15"}function kE(e){return/^\d/.test(e)}function xE(e,t){if(!kE(e)||!kE(t))return!1;let n=s=>s.split(".").map(i=>Number.parseInt(i,10)||0),r=n(e),o=n(t);for(let s=0;s<Math.max(r.length,o.length);s++){let i=r[s]??0,a=o[s]??0;if(i!==a)return i>a}return!1}function Zi(e,t=BP){return new Promise(n=>{let r=Buffer.alloc(0),o=!1,s=c=>{o||(o=!0,clearTimeout(l),e.removeListener("data",i),e.removeListener("close",a),e.removeListener("error",a),n(c))},i=c=>{r=Buffer.concat([r,c]);let d=r.indexOf(10);if(d===-1){r.length>WP&&s(void 0);return}s({line:r.subarray(0,d).toString("utf8"),rest:r.subarray(d+1)})},a=()=>s(void 0),l=setTimeout(()=>s(void 0),t);l.unref?.(),e.on("data",i),e.once("close",a),e.once("error",a)})}function IE(e,t){return(0,hr.join)((0,vE.tmpdir)(),`.jolli-${e}-${t}`)}function Md(e){return`${JSON.stringify(e)}
`}var Ld,vE,hr,AE,Dd,BP,WP,Fd=y(()=>{"use strict";Ld=require("node:fs"),vE=require("node:os"),hr=require("node:path"),AE=require("node:url");te();BP=1e4,WP=4096});function qP(e){let t=(0,En.join)((0,En.dirname)((0,jd.fileURLToPath)(e)),JP);return(0,$d.existsSync)(t)?t:void 0}function Ud(e,t=process.argv[1],n=process.execArgv){let r=qP(e);if(r)return{entry:r,nodeArgs:[]};let o=(0,En.dirname)((0,jd.fileURLToPath)(e)),s=(0,En.join)((0,En.dirname)(o),GP);if(t?.endsWith(".ts")&&(0,$d.existsSync)(s))return{entry:s,nodeArgs:n}}var $d,En,jd,JP,GP,PE=y(()=>{"use strict";$d=require("node:fs"),En=require("node:path"),jd=require("node:url"),JP="Cli.js",GP="Cli.ts"});function VP(e){return IE("global",e)}function YP(e=(0,OE.homedir)()){return(0,NE.createHash)("sha256").update(br(e,"win32")).digest("hex").slice(0,16)}function ea(e={}){if((e.platform??process.platform)==="win32")return`\\\\.\\pipe\\jolli-global-${YP(e.home)}`;let n=e.uid??process.getuid?.()??0;return(0,DE.join)(VP(n),"daemon.sock")}function Wd(e){let t;try{t=JSON.parse(e)}catch{return}if(typeof t!="object"||t===null)return;let{t:n,protocol:r,version:o,pid:s,startedAt:i}=t;if(!(n!=="hello"||r!==KP)&&!(typeof o!="string"||typeof s!="number"||typeof i!="number"))return{t:"hello",protocol:r,version:o,pid:s,startedAt:i}}var NE,OE,DE,KP,Hd,Bd,LE=y(()=>{"use strict";NE=require("node:crypto"),OE=require("node:os"),DE=require("node:path");Fd();te();KP=1,Hd="global-daemon",Bd=300});var Vd={};Sr(Vd,{GLOBAL_DAEMON_ENSURE_COMMAND:()=>Gd,ensureGlobalDaemon:()=>ZP,probeGlobalDaemon:()=>nN,retireGlobalDaemon:()=>tN,shouldSkipGlobalDaemon:()=>qd,triggerEnsureGlobalDaemon:()=>eN});function qd(e){return e!==null&&zP.has(e)}function Kd(e){return new Promise(t=>{let n=!1,r=(0,FE.connect)(e),o=i=>{n||(n=!0,clearTimeout(s),r.removeAllListeners("connect"),i.socket===void 0&&r.destroy(),t(i))},s=setTimeout(()=>o({socket:void 0}),XP);s.unref?.(),r.once("connect",()=>o({socket:r})),r.on("error",i=>{if(n){Be.warn("global daemon socket error after connect: %s",k(i));return}o({socket:void 0,code:i.code})})})}async function QP(e){if(!e.startsWith("\\\\.\\pipe\\"))try{await(0,ME.unlink)(e)}catch{}}async function ZP(e={}){try{if(qd(e.command??null))return"skipped-excluded-command";if(!on(e.nodeVersion??process.versions.node))return"skipped-unsupported-node";let t=e.socketPath??ea(),{socket:n,code:r}=await Kd(t);if(!n)return r==="ECONNREFUSED"&&await QP(t),(e.spawnDaemon??rN)(t),"spawned";try{let o=await Zi(n,e.helloTimeoutMs??Bd),s=o?Wd(o.line):void 0;if(!s)return"already-running";let i=e.ownVersion??CE();return xE(i,s.version)?(n.write(Md({t:"retire"})),Be.info("retiring global daemon pid %d (v%s < v%s)",s.pid,s.version,i),"retired-incumbent"):"already-running"}finally{n.end()}}catch(t){return Be.warn("could not ensure the global daemon: %s",k(t)),"failed"}}function eN(e={}){try{return qd(e.command??null)||!on(e.nodeVersion??process.versions.node)?!1:(oN(e.socketPath),!0)}catch(t){return Be.warn("could not trigger the global daemon ensure helper: %s",k(t)),!1}}async function tN(e={}){try{let{socket:t}=await Kd(e.socketPath??ea());return t?(await Zi(t,Bd),t.write(Md({t:"retire"})),t.end(),!0):!1}catch(t){return Be.warn("could not retire the global daemon: %s",k(t)),!1}}async function nN(e){try{let{socket:t}=await Kd(e??ea());if(!t)return;try{let n=await Zi(t,5e3);return n?Wd(n.line):void 0}finally{t.end()}}catch{return}}function rN(e){let t=Ud(__jmImportMetaUrl);if(!t){Be.warn("Cannot locate the CLI entry to spawn the global daemon");return}let n=pt(process.execPath,[...t.nodeArgs,t.entry,Hd,"--socket",e],{detached:!0,stdio:"ignore",cwd:(0,Jd.homedir)()});n.on("error",r=>Be.warn("global daemon failed to spawn: %s",k(r))),n.unref(),Be.info("spawned global daemon (pid %d)",n.pid??-1)}function oN(e){let t=Ud(__jmImportMetaUrl);if(!t){Be.warn("Cannot locate the CLI entry to spawn the global daemon ensure helper");return}let n=[...t.nodeArgs,t.entry,Gd];e&&n.push("--socket",e);let r=pt(process.execPath,n,{detached:!0,stdio:"ignore",cwd:(0,Jd.homedir)()});r.on("error",o=>Be.warn("global daemon ensure helper failed to start: %s",k(o))),r.unref(),Be.info("spawned global daemon ensure helper (pid %d)",r.pid??-1)}var ME,FE,Jd,Be,Gd,XP,zP,Yd=y(()=>{"use strict";ME=require("node:fs/promises"),FE=require("node:net"),Jd=require("node:os");Fd();Ft();w();PE();Re();LE();Be=f("EnsureGlobalDaemon"),Gd="global-daemon-ensure",XP=200,zP=new Set([Hd,Gd,"mcp","mcp-serve","daemon","uninstall","disable"])});var CN={};Sr(CN,{buildPluginBootstrapOutput:()=>Uo,main:()=>YE,runPluginBootstrap:()=>VE});module.exports=rb(CN);var Zd=require("node:path"),KE=require("node:url");var xt=require("node:fs"),ou=require("node:os"),Wo=require("node:path"),Me="JOLLI_LOCAL_AGENT_CHILD",su=".jolli-local-agent-child",iu="jolli-localagent-";function Ge(){let e=(0,xt.mkdtempSync)((0,Wo.join)((0,ou.tmpdir)(),iu));try{(0,xt.writeFileSync)((0,Wo.join)(e,su),"","utf-8")}catch(t){throw(0,xt.rmSync)(e,{recursive:!0,force:!0}),t}return e}function kn(e=process.env,t){return e[Me]==="1"?!0:t!==void 0&&(0,xt.existsSync)((0,Wo.join)(t,su))}Cn();be();Ye();te();Xe();me();var Qt=require("node:fs/promises"),jn=require("node:path");ce();ms();async function Ka(e){let t=(0,jn.join)(e,".claude"),n=(0,jn.join)(t,"settings.local.json"),r=$e("stop"),o=$e("session-start");await Qp(e);let s={},i;try{i=await(0,Qt.readFile)(n,"utf-8"),s=JSON.parse(i)}catch(m){if(m.code!=="ENOENT")throw m}let a=s.hooks??{},l=a.Stop??[],c=a.SessionStart??[],d=ps(l);d.push({hooks:[{type:"command",command:r,async:!0}]});let u=zt(c,Fr);u.push({hooks:[{type:"command",command:o}]}),a.Stop=d,a.SessionStart=u,s.hooks=a;let p=JSON.stringify(s,null,"	");return i===p?{path:n}:(await(0,Qt.mkdir)(t,{recursive:!0}),await P(n,p),{path:n})}async function Qp(e){let t=(0,jn.join)(e,".claude","settings.json"),n;try{let i=await(0,Qt.readFile)(t,"utf-8");n=JSON.parse(i)}catch{return}let r=n.hooks;if(!r)return;let o=r.Stop??[];if(!qa(o))return;let s=ps(o);s.length===0?delete r.Stop:r.Stop=s,Object.keys(r).length===0?delete n.hooks:n.hooks=r,await P(t,JSON.stringify(n,null,"	"))}async function Va(e){await Qp(e);let t=(0,jn.join)(e,".claude","settings.local.json"),n;try{let l=await(0,Qt.readFile)(t,"utf-8");n=JSON.parse(l)}catch{return{}}let r=n.hooks;if(!r)return{};let o=r.Stop??[],s=qa(o);if(s){let l=ps(o);l.length===0?delete r.Stop:r.Stop=l}let i=r.SessionStart??[],a=$r(i,Fr);if(a){let l=zt(i,Fr);l.length===0?delete r.SessionStart:r.SessionStart=l}return!s&&!a?{}:(Object.keys(r).length===0?delete n.hooks:n.hooks=r,await P(t,JSON.stringify(n,null,"	")),{})}async function Zp(e){try{let t=await(0,Qt.readFile)((0,jn.join)(e,".claude","settings.local.json"),"utf-8"),r=JSON.parse(t).hooks;if(!r)return{stop:!1,sessionStart:!1};let o=r.Stop??[],s=r.SessionStart??[];return{stop:zp(o,ds,$e("stop"),!0),sessionStart:zp(s,Fr,$e("session-start"),!1)}}catch{return{stop:!1,sessionStart:!1}}}function zp(e,t,n,r){let o=e.filter(a=>a.hooks?.some(c=>{let d=c.command;return typeof d=="string"&&t.some(u=>d.includes(u))}));if(o.length!==1)return!1;let s=o[0].hooks;if(!s||s.length!==1)return!1;let i=s[0];return i.type==="command"&&i.command===n&&(r?i.async===!0:i.async===void 0)}var Zt=require("node:fs/promises"),gt=require("node:path");ce();w();Re();var Ie=f("GitExclude"),jr="# >>> jolli skill exclude >>>",Ur="# <<< jolli skill exclude <<<";function n_(e,t){return gt.win32.isAbsolute(e)||gt.posix.isAbsolute(e)?e:(0,gt.join)(t,e)}var em=new Map;async function Ya(e){let t=em.get(e);if(t!==void 0)return t;try{let{stdout:n}=await In("git",["rev-parse","--git-path","info/exclude"],{cwd:e}),r=n.trim();if(r.length===0)return null;let o=n_(r,e);return em.set(e,o),o}catch{return null}}async function tm(e,t){let n=await Ya(e);if(!n)return Ie.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",e),!1;let r="";try{r=await(0,Zt.readFile)(n,"utf-8")}catch(i){if(i.code!=="ENOENT")return Ie.warn("Failed to read %s: %s \u2014 skipping update",n,i.message),!1}let o=nm(t),s=rm(r,o);if(s===r)return!0;try{return await(0,Zt.mkdir)((0,gt.dirname)(n),{recursive:!0}),await P(n,s),Ie.info("Updated %s with %d Jolli skill exclude paths",n,t.length),!0}catch(i){return Ie.warn("Failed to write %s: %s",n,i.message),!1}}async function Hr(e,t){let n=await Ya(e);if(!n)return Ie.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",e),!1;let r="";try{r=await(0,Zt.readFile)(n,"utf-8")}catch(s){if(s.code!=="ENOENT")return Ie.warn("Failed to read %s: %s \u2014 skipping update",n,s.message),!1}let o=r_(r,t);if(o===r)return!0;try{return await(0,Zt.mkdir)((0,gt.dirname)(n),{recursive:!0}),await P(n,o),Ie.info("Merged %d Jolli skill exclude path(s) into %s",t.length,n),!0}catch(s){return Ie.warn("Failed to write %s: %s",n,s.message),!1}}async function Un(e,t){let n=await Ya(e);if(!n)return Ie.warn("Skipping .git/info/exclude cleanup for %s: not a git repo or git unavailable",e),!1;let r;try{r=await(0,Zt.readFile)(n,"utf-8")}catch(s){return s.code==="ENOENT"?!0:(Ie.warn("Failed to read %s: %s \u2014 skipping cleanup",n,s.message),!1)}let o=o_(r,t);if(o===r)return!0;try{return await P(n,o),Ie.info("Removed %d Jolli exclude path(s) from %s",t.length,n),!0}catch(s){return Ie.warn("Failed to write %s: %s",n,s.message),!1}}function nm(e){return`${[jr,...e,Ur].join(`
`)}
`}function rm(e,t){let n=e.split(`
`),r=n.indexOf(jr),o=n.indexOf(Ur),s=t.slice(0,-1).split(`
`);if(r!==-1&&o!==-1&&o>r)return[...n.slice(0,r),...s,...n.slice(o+1)].join(`
`);if(e.length===0)return t;let i=e.endsWith(`
`)?"":`
`;return`${e}${i}${t}`}function r_(e,t){let n=e.split(`
`),r=n.indexOf(jr),o=n.indexOf(Ur),s=r!==-1&&o!==-1&&o>r?n.slice(r+1,o):[],i=new Set(s),a=[...s];for(let l of t)i.has(l)||(i.add(l),a.push(l));return rm(e,nm(a))}function o_(e,t){let n=e.split(`
`),r=n.indexOf(jr),o=n.indexOf(Ur);if(r===-1||o===-1||o<=r)return e;let s=new Set(t),i=n.slice(r+1,o).filter(c=>!s.has(c)),a=n.slice(0,r),l=n.slice(o+1);return i.length===0?[...a.length>0&&a[a.length-1]===""?a.slice(0,-1):a,...l].join(`
`):[...a,jr,...i,Ur,...l].join(`
`)}var Ui=require("node:fs/promises"),hn=require("node:path"),GS=require("node:url");var Xa=require("node:fs"),om=require("node:fs/promises"),za=require("node:os"),Br=require("node:path");w();ze();var GD=f("AntigravityDetector"),sm=["antigravity","antigravity-ide","antigravity-cli"];function im(e=(0,za.homedir)()){let t=[];for(let n of sm){let r=(0,Br.join)(e,".gemini",n),o=(0,Br.join)(r,"conversations");(0,Xa.existsSync)(o)&&t.push({variant:n,root:r,conversationsDir:o,brainDir:(0,Br.join)(r,"brain")})}return t}async function s_(e){for(let t of im(e))try{if((await(0,om.readdir)(t.conversationsDir)).some(n=>n.endsWith(".db")))return!0}catch{}return!1}async function am(e=(0,za.homedir)()){return await s_(e)?!0:sm.some(t=>(0,Xa.existsSync)((0,Br.join)(e,".gemini",t)))}w();Bn();var fs="mcp__";function Wr(e){return{name:e,kind:"builtin",calls:0}}function Za(e){return{name:e,kind:"skill",calls:0}}function Wn(e,t){return{name:t?`${e}.${t}`:e,kind:"mcp",server:e,calls:0}}function gs(e){if(!e.startsWith(fs))return Wr(e);let t=e.slice(fs.length),n=t.indexOf("__");return n===-1?Wn(t,""):Wn(t.slice(0,n),t.slice(n+2))}function lm(e,t){if(t===void 0||t.length===0)return Wr(e);if(!t.startsWith(fs))return Wn(t,e);let n=t.slice(fs.length).split("__"),r=n[n.length-1]||n[0]||t;return Wn(r,e)}function l_(e,t){let n=Math.max(e.lastCallAtMs??Number.NEGATIVE_INFINITY,t.lastCallAtMs??Number.NEGATIVE_INFINITY);return Number.isFinite(n)?{lastCallAtMs:n}:{}}var tn=class{constructor(){this.byKey=new Map;this.seen=new Set}add(t,n=1){let r=`${t.kind}:${t.name}`,o=this.byKey.get(r);if(!o){this.byKey.set(r,{...t,calls:n});return}this.byKey.set(r,{...o,calls:o.calls+n,...l_(o,t)})}addOnce(t,n){if(t!==void 0){if(this.seen.has(t))return;this.seen.add(t)}this.add(n)}hasSeen(t){return this.seen.has(t)}values(){return[...this.byKey.values()]}};w();w();var c_=new Set(["vitest","jest","mocha","pytest","rspec","phpunit","pest","tox","nose2","unittest","ava","tape","karma","jasmine","cypress"]),d_=new Set(["go test","cargo test","cargo nextest","mix test","dart test","flutter test","dotnet test","bazel test","playwright test"]),u_=new Set(["npm","pnpm","yarn","bun","deno","make"]),p_=/&&|\|\||[;&|]|\n/,m_=/^[A-Za-z_][A-Za-z0-9_]*=/;function el(e,t){return e===void 0?!1:c_.has(e)?!0:t!==void 0&&d_.has(`${e} ${t}`)}function f_(e){let t=e.split(/\s+/).filter(i=>i.length>0),n=0;for(;n<t.length&&m_.test(t[n]);)n+=1;if(n>=t.length)return!1;let r=t[n],o=t[n+1],s=t[n+2];return!!(r==="npx"&&el(o,s)||(r==="python"||r==="python3")&&o==="-m"&&el(s,t[n+3])||el(r,o)||u_.has(r)&&(o==="test"||o==="t"||o==="run"&&(s==="test"||s==="t")))}function tl(e){for(let t of e.split(p_))if(f_(t))return!0;return!1}function nn(e){if(e===void 0)return;let t=Date.parse(e);return Number.isFinite(t)?t:void 0}function cm(...e){let t=e.filter(n=>n!==void 0);return t.length>0?{lastCallAtMs:Math.max(...t)}:{}}function g_(e){let t=0;for(let n of e)n.type==="tool_result"&&t++;return t}var fm=f("TranscriptParser"),hs=class{parseLine(t,n){return hm(t,n)}parseUsageTokens(t,n){let r=mm(t);return r?{input:r.input,output:r.output,cached:r.cached,...r.id&&{dedupKey:r.id},...r.model&&{model:r.model}}:{input:0,output:0,cached:0}}parseUsageByModel(t){let n=new Map,r=new Set;for(let o of t){let s=mm(o);if(!s)continue;if(s.id){if(r.has(s.id))continue;r.add(s.id)}let i=n.get(s.model);i?n.set(s.model,{...i,input:i.input+s.input,output:i.output+s.output,cached:i.cached+s.cached}):n.set(s.model,{model:s.model,provider:"anthropic",input:s.input,output:s.output,cached:s.cached})}return[...n.values()].filter(o=>o.input+o.output+o.cached>0)}parseToolUse(t){let n=new tn,r=[],o=new Map;for(let s of t){let i;try{i=JSON.parse(s)}catch{continue}let a=i,l=a?.message?.content;if(!Array.isArray(l))continue;let c=a.toolUseResult?.commandName,d=typeof c=="string"&&c.length>0?c:void 0,u=g_(l)===1,p=nn(this.parseTimestamp(s));for(let m of l){let g=m;if(g.type==="tool_result"){d!==void 0&&u&&typeof g.tool_use_id=="string"&&o.set(g.tool_use_id,d);continue}if(g.type!=="tool_use"||typeof g.name!="string")continue;let h=typeof g.id=="string"?g.id:void 0;if(g.name==="Skill"&&typeof g.input?.skill=="string"){r.push({...h!==void 0?{id:h}:{},requested:g.input.skill,...p!==void 0?{atMs:p}:{}});continue}n.addOnce(h,{...gs(g.name),...p!==void 0&&{lastCallAtMs:p}})}}for(let s of r)n.addOnce(s.id,{...Za((s.id!==void 0?o.get(s.id):void 0)??s.requested),...s.atMs!==void 0&&{lastCallAtMs:s.atMs}});return n.values()}parseTimestamp(t,n){try{let r=JSON.parse(t);return typeof r.timestamp=="string"?r.timestamp:void 0}catch{return}}parseCompactions(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}if(o.isCompactSummary!==!0)continue;let s=nn(this.parseTimestamp(r));s!==void 0&&n.add(s)}return[...n].sort((r,o)=>r-o)}parseTestRuns(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}let s=o.message?.content;if(Array.isArray(s))for(let i of s){let a=i;if(a.type!=="tool_use"||a.name!=="Bash"||typeof a.input?.command!="string"||!tl(a.input.command))continue;let l=nn(this.parseTimestamp(r));l!==void 0&&n.add(l)}}return[...n].sort((r,o)=>r-o)}},h_=new Set(["compacted","context_compacted"]);function dm(e,t){let n=new Set;for(let r of e){let o;try{o=JSON.parse(r)}catch{continue}let s=o?.payload;if(s===null||typeof s!="object")continue;let i=s.type;if(typeof i!="string"||!t.has(i))continue;let a=o.timestamp,l=nn(typeof a=="string"?a:void 0);l!==void 0&&n.add(l)}return[...n].sort((r,o)=>r-o)}var nl=class{parseLine(t,n){try{let r=JSON.parse(t),o=typeof r.timestamp=="string"?r.timestamp:void 0;if(r.type!=="response_item")return null;let s=r.payload;if(!s||typeof s!="object"||s.type!=="message")return null;let i=s.role;if(i!=="user"&&i!=="assistant")return null;let a=T_(s.content);if(a===null)return null;let l=v_(a);return l.length===0?null:i==="user"?R_(l)?null:{role:"human",content:l,timestamp:o}:{role:"assistant",content:l,timestamp:o}}catch(r){return fm.debug("Failed to parse Codex transcript line %d: %s",n,r.message),null}}parseToolUse(t){let n=new Map,r=[];for(let s of t){let i;try{i=JSON.parse(s)}catch{continue}let a=i?.payload;if(a===null||typeof a!="object")continue;let l=a;if(typeof l.type!="string"||!y_.has(l.type))continue;let c=typeof l.invocation?.tool=="string"?l.invocation.tool:void 0,d=typeof l.invocation?.server=="string"?l.invocation.server:"",u;if(c!==void 0)u=d?Wn(d,c):Wr(c);else if(typeof l.name=="string"&&l.name.length>0)u=lm(l.name,typeof l.namespace=="string"?l.namespace:void 0);else continue;let p=i.timestamp,m=nn(typeof p=="string"?p:void 0),g={...u,...m!==void 0&&{lastCallAtMs:m}},h=typeof l.call_id=="string"?l.call_id:void 0;if(h===void 0){r.push(g);continue}let T=n.get(h),S=T===void 0||T.kind!=="mcp"&&g.kind==="mcp"?g:T;n.set(h,{...S,...T?cm(T.lastCallAtMs,g.lastCallAtMs):cm(g.lastCallAtMs)})}let o=new tn;for(let s of[...n.values(),...r])o.add(s);return o.values()}parseUnrecognizedRows(t){let n=0;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}if(o?.type!=="response_item")continue;let s=o.payload;if(s===null||typeof s!="object")continue;let i=s.type;if(typeof i=="string"){if(!w_.has(i)){n++;continue}i==="message"&&b_(s)&&n++}}return n}parseCompactions(t){return dm(t,h_)}parseTurnAborts(t){return dm(t,new Set(["turn_aborted"]))}parseTestRuns(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}let s=o?.payload;if(s===null||typeof s!="object")continue;let i=s;if(i.type!=="function_call"||i.name!=="exec_command")continue;let a;try{a=(typeof i.arguments=="string"?JSON.parse(i.arguments):{}).cmd}catch{continue}if(typeof a!="string"||!tl(a))continue;let l=o.timestamp,c=nn(typeof l=="string"?l:void 0);c!==void 0&&n.add(c)}return[...n].sort((r,o)=>r-o)}},y_=new Set(["function_call","custom_tool_call","local_shell_call","web_search_call","mcp_tool_call_end"]),w_=new Set(["message","reasoning","function_call","function_call_output","custom_tool_call","custom_tool_call_output","local_shell_call","local_shell_call_output","tool_search_call","tool_search_output","web_search_call","mcp_tool_call_begin","mcp_tool_call_end"]),rl=class{parseLine(t,n){try{let r=JSON.parse(t),o=r.type,s=pm(r);if(o==="turn.prompt"){let a=gm(r.input)?.trim();return a?{role:"human",content:a,timestamp:s}:null}let i=E_(r);if(i&&i.type==="text"){let a=typeof i.text=="string"?i.text.trim():"";return a?{role:"assistant",content:a,timestamp:s}:null}return null}catch(r){return fm.debug("Failed to parse Kimi transcript line %d: %s",n,r.message),null}}parseToolUse(t){let n=new tn;for(let r of t){if(!r.includes(um))continue;let o;try{o=JSON.parse(r)}catch{continue}if(o.type!==um)continue;let s=o.event;if(s===null||typeof s!="object"||s.type!=="tool.call"||typeof s.name!="string")continue;let i=nn(this.parseTimestamp(r));n.addOnce(typeof s.toolCallId=="string"?s.toolCallId:void 0,{...s.name===S_&&typeof s.args?.skill=="string"?Za(s.args.skill):gs(s.name),...i!==void 0&&{lastCallAtMs:i}})}return n.values()}parseTimestamp(t,n){try{return pm(JSON.parse(t))}catch{return}}},um="context.append_loop_event",S_="Skill";function E_(e){if(e.type==="context.append_loop_event"){let t=e.event;return t?.type==="content.part"&&t.part&&typeof t.part=="object"?t.part:null}return e.type==="content.part"&&e.part&&typeof e.part=="object"?e.part:null}function pm(e){let t=e.time??e.timestamp;return typeof t=="number"&&Number.isFinite(t)?new Date(t).toISOString():typeof t=="string"&&t.length>0?t:void 0}function gm(e){if(typeof e=="string")return e.length>0?e:null;if(Array.isArray(e)){let t=[];for(let n of e){let r=gm(n);r&&t.push(r)}return t.length>0?t.join(`
`):null}if(e!==null&&typeof e=="object"){let t=e;if((t.type==="text"||t.type===void 0)&&typeof t.text=="string"&&t.text.length>0)return t.text}return null}function b_(e){let t=e.role;if(typeof t=="string"&&t!=="user"&&t!=="assistant")return!0;let n=e.content;if(Array.isArray(n))for(let r of n){if(!r||typeof r!="object")continue;let o=r.type;if(typeof r.text=="string"&&o!=="input_text"&&o!=="output_text")return!0}return!1}function T_(e){if(!Array.isArray(e))return null;let t=[];for(let r of e){if(!r||typeof r!="object")continue;let o=r.type,s=r.text;(o==="input_text"||o==="output_text")&&typeof s=="string"&&t.push(s)}let n=t.join(`
`).trim();return n.length>0?n:null}var __=["recommended_plugins","environment_context","skill","turn_aborted"];function R_(e){let t=e.trimStart();for(let r of __)if(t.startsWith(`<${r}>`)&&e.includes(`</${r}>`))return!0;return t.startsWith("# AGENTS.md instructions")&&(/<INSTRUCTIONS>[\s\S]*<\/INSTRUCTIONS>/.test(e)||/<environment_context>[\s\S]*<\/environment_context>/.test(e))||t.startsWith("The following is the Codex agent history")&&e.includes("untrusted evidence")?!0:e.replace(/<image\b[^>]*\/?>|<\/image>/g,"").trim().length===0}var k_=/(?:\s*<oai-mem-citation>(?:(?!<\/oai-mem-citation>)[\s\S])*<\/oai-mem-citation>)+\s*$/;function v_(e){return e.replace(k_,"").trimEnd()}function mm(e){try{return C_(JSON.parse(e))}catch{return null}}function A_(e){return e.startsWith("<")&&e.endsWith(">")}function C_(e){let t=e,n=t?.message?.usage??t?.usage;if(!n||typeof n!="object")return null;let r=i=>typeof n[i]=="number"?n[i]:0,o=t?.message?.model??t?.model,s=t?.message?.id;return{id:typeof s=="string"?s:"",model:typeof o=="string"&&!A_(o)?o:"",input:r("input_tokens"),output:r("output_tokens"),cached:r("cache_creation_input_tokens")}}var x_=new hs,I_=new nl,P_=new rl;function N_(e){switch(e){case"codex":return I_;case"kimi":return P_;case"claude":return x_}}var O_=["claude","codex","kimi"],D_=["gemini","opencode","antigravity","cursor","cursor-cli","cline-cli","devin"],eL=new Set([...O_.filter(e=>N_(e).parseToolUse!==void 0),...D_]);var ol=f("TranscriptReader");var L_=["Base directory for this skill:","[Request interrupted by user"],M_=/<(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>[\s\S]*?<\/(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>/g;function hm(e,t){try{let n=JSON.parse(e);if(n.isCompactSummary===!0)return ol.debug("Skipping compaction summary at line %d",t),null;if(!n.message||typeof n.message!="object")return null;let r=n.message,o=r.role,s=typeof n.timestamp=="string"?n.timestamp:void 0;if(o==="user")return F_(r,s,t);if(o==="assistant"){let i=ym(r.content)?.trim();return i?{role:"assistant",content:i,timestamp:s}:null}return null}catch(n){return ol.debug("Failed to parse transcript line %d: %s",t,n.message),null}}function F_(e,t,n){let r=ym(e.content);if(!r)return null;let o=$_(r);return o.length===0?null:L_.some(s=>o.startsWith(s))?(ol.debug("Skipping filtered user message at line %d",n),null):{role:"human",content:o,timestamp:t}}function $_(e){return e.replace(M_,"").trim()}function ym(e){if(typeof e=="string")return e.length>0?e:null;if(Array.isArray(e)){let t=[];for(let n of e)if(n!==null&&typeof n=="object"){let r=n;r.type==="text"&&typeof r.text=="string"&&t.push(r.text)}return t.length>0?t.join(`
`):null}return null}be();Cn();te();ze();var kL=f("AntigravityDiscoverer"),vL=2880*60*1e3;var wm=require("node:fs/promises"),ws=require("node:os"),il=require("node:path");function j_(e=(0,ws.homedir)()){return(0,il.join)(e,".cline","data")}function Sm(e=(0,ws.homedir)()){return(0,il.join)(j_(e),"sessions")}async function Em(e=(0,ws.homedir)()){try{return await(0,wm.access)(Sm(e)),!0}catch{return!1}}w();te();var DL=f("ClineCliDiscoverer"),LL=2880*60*1e3;var al=require("node:fs/promises"),qr=require("node:os"),Es=require("node:path");var Ss=require("node:os"),Gr=require("node:path");w();var $L=f("VscodeWorkspaceLocator"),bm=["Code","Code - Insiders","Cursor","VSCodium","Windsurf"];function wt(e,t=(0,Ss.homedir)()){switch((0,Ss.platform)()){case"darwin":return(0,Gr.join)(t,"Library","Application Support",e);case"win32":return(0,Gr.join)(process.env.APPDATA??(0,Gr.join)(t,"AppData","Roaming"),e);default:return(0,Gr.join)(t,".config",e)}}var U_="saoudrizwan.claude-dev";function H_(e,t){return(0,Es.join)(wt(e,t),"User","globalStorage",U_)}function Kr(e=(0,qr.homedir)()){return bm.map(t=>H_(t,e))}function bs(e){return(0,Es.join)(e,"settings","cline_mcp_settings.json")}async function Tm(e=(0,qr.homedir)()){for(let t of Kr(e))try{return await(0,al.access)((0,Es.join)(t,"state","taskHistory.json")),!0}catch{}return!1}async function ll(e=(0,qr.homedir)()){let t=[];for(let n of Kr(e))try{await(0,al.access)(bs(n)),t.push(n)}catch{}return t}async function _m(e=(0,qr.homedir)()){return(await ll(e)).length>0}w();te();var qL=f("ClineDiscoverer"),KL=2880*60*1e3;var cl=require("node:fs/promises"),Rm=require("node:os"),dl=require("node:path");w();Bn();te();var nM=f("CodexDiscoverer"),rM=2880*60*1e3,B_=".codex";async function ul(){let e=(0,dl.join)((0,Rm.homedir)(),B_);try{return(await(0,cl.stat)(e)).isDirectory()}catch{return!1}}var oM=1440*60*1e3;var vm=require("node:fs/promises"),Am=require("node:os"),pl=require("node:path");w();var W_=f("CopilotChatDetector");function J_(e){return(0,pl.join)(wt("Code",e),"User","globalStorage","github.copilot-chat")}function G_(e=(0,Am.homedir)()){return(0,pl.join)(e,".copilot","session-state")}async function km(e){try{return(await(0,vm.stat)(e)).isDirectory()}catch(t){let n=t.code;return n!=="ENOENT"&&W_.warn("Copilot Chat probe stat failed for %s (%s): %s",e,n??"unknown",t.message),!1}}async function Cm(){let[e,t]=await Promise.all([km(J_()),km(G_())]);return e||t}w();Bn();var gM=f("CopilotChatDiscoverer"),hM=2880*60*1e3;var Im=require("node:fs/promises"),Pm=require("node:os"),Nm=require("node:path");w();ze();var Om=f("CopilotDetector");function Dm(){return(0,Nm.join)((0,Pm.homedir)(),".copilot","session-store.db")}async function Lm(){return yt()?ml():(Om.info("Copilot CLI support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,ht.major,ht.minor),!1)}async function ml(){let e=Dm();try{return(await(0,Im.stat)(e)).isFile()}catch(t){let n=t.code;return n!=="ENOENT"&&Om.warn("Copilot DB stat failed (%s): %s",n??"unknown",t.message),!1}}w();ze();var vM=f("CopilotDiscoverer"),AM=2880*60*1e3;var Ts=require("node:fs/promises"),_s=require("node:os"),jm=require("node:path");w();var Mm=require("node:os"),Fm=require("node:path");function $m(e=(0,Mm.homedir)()){return(0,Fm.join)(e,".cursor")}te();var DM=f("CursorCliDiscoverer"),LM=2880*60*1e3;function Y_(e=(0,_s.homedir)()){return $m(e)}function X_(e=(0,_s.homedir)()){return(0,jm.join)(Y_(e),"chats")}async function Um(e=(0,_s.homedir)()){try{return(await(0,Ts.stat)(X_(e))).isDirectory()}catch{return!1}}var Hm=require("node:fs/promises"),Bm=require("node:path");w();ze();var z_=f("CursorDetector");function Wm(e){return(0,Bm.join)(wt("Cursor",e),"User","globalStorage","state.vscdb")}async function Jm(){return yt()?fl():(z_.info("Cursor support disabled: this runtime is Node %s, requires 22.13+ for built-in SQLite",process.versions.node),!1)}async function fl(){let e=Wm();try{return(await(0,Hm.stat)(e)).isFile()}catch{return!1}}w();ze();var KM=f("CursorDiscoverer"),VM=2880*60*1e3;var gl=require("node:fs/promises"),Gm=require("node:os"),Jn=require("node:path");w();ze();var e0=f("DevinDiscoverer"),t0=2880*60*1e3;function qm(e){let t=e??(0,Gm.homedir)();if(process.platform==="win32")return(0,Jn.join)(process.env.APPDATA??(0,Jn.join)(t,"AppData","Roaming"),"devin","cli");let n=process.env.XDG_DATA_HOME,r=n&&n.length>0?n:(0,Jn.join)(t,".local","share");return(0,Jn.join)(r,"devin","cli")}function Q_(e){return(0,Jn.join)(qm(e),"sessions.db")}async function Z_(){try{return(await(0,gl.stat)(Q_())).isFile()}catch{return!1}}async function Km(){if(await Z_())return!0;try{return(await(0,gl.stat)(qm())).isDirectory()}catch{return!1}}var Vm=require("node:fs/promises"),Ym=require("node:os"),Xm=require("node:path");w();var eR=f("GeminiDetector"),tR=".gemini";async function hl(){let e=(0,Xm.join)((0,Ym.homedir)(),tR);try{return(await(0,Vm.stat)(e)).isDirectory()}catch{return eR.debug("Gemini directory not found: %s",e),!1}}be();Yr();var ks=require("node:fs/promises"),Sf=require("node:os"),_l=require("node:path");w();Bn();var R0=f("KimiDiscoverer"),k0=2880*60*1e3,fR=".kimi-code";function vs(){return process.env.KIMI_CODE_HOME||(0,_l.join)((0,Sf.homedir)(),fR)}async function Ef(){let e=vs();try{return(await(0,ks.stat)(e)).isDirectory()}catch{return!1}}Ye();me();var As={"claude-plugin":{host:"claude",localAgentTool:"claude-code",skillInvocation:"/jolli:<name>"},"codex-plugin":{host:"codex",localAgentTool:"codex",skillInvocation:"$jolli:<name>"},"cursor-plugin":{host:"cursor",localAgentTool:"cursor-agent",skillInvocation:"/jolli-<name>"}},C0=Object.keys(As);function Cs(e){return e===void 0?void 0:As[e]?.localAgentTool}function Rl(e,t){return(e===void 0?void 0:As[e]?.skillInvocation)?.replace("<name>",t)}function Tf(e){return(e===void 0?void 0:As[e]?.host)??"claude"}function bf(e,t){return e===void 0||e===t?void 0:e}async function _f(e,t){let n=Cs(e);return n===void 0?null:t.localAgentTool!==void 0&&t.aiProvider!==void 0?{tool:n,seededTool:!1,keptTool:bf(t.localAgentTool,n),seededProvider:!1}:cs(r=>{let o=r.localAgentTool===void 0,s=r.aiProvider===void 0,i={tool:n,seededTool:o,keptTool:bf(r.localAgentTool,n),seededProvider:s};return!o&&!s?{update:null,result:i}:{update:{...s?{aiProvider:"local-agent"}:{},...o?{localAgentTool:n}:{}},result:i}})}var Rf=require("node:fs/promises"),kf=require("node:os"),kl=require("node:path");w();ze();var gR=f("OpenCodeDiscoverer"),D0=2880*60*1e3;function hR(){return process.env.XDG_DATA_HOME||(0,kl.join)((0,kf.homedir)(),".local","share")}function yR(){return(0,kl.join)(hR(),"opencode","opencode.db")}async function vf(){return yt()?vl():(gR.info("OpenCode support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,ht.major,ht.minor),!1)}async function vl(){let e=yR();try{return(await(0,Rf.stat)(e)).isFile()}catch{return!1}}w();ce();Ye();me();var H0=f("PushPendingStore");var B0=10080*60*1e3;var wR=300*1e3,W0=Math.floor(wR/3);qo();w();Re();var z0=f("PushCompensation");w();xs();w();Yr();var iF=f("KBRepoDiscoverer");w();ce();xs();Ye();me();var fF=f("PushControlStore");Xe();var Ml=require("node:crypto");Vn();ns();var ER=[["CLAUDECODE","claude"],["CODEX_THREAD_ID","codex"],["GEMINI_CLI","gemini"],["OPENCODE","opencode"],["ANTIGRAVITY_AGENT","antigravity"],["COPILOT_CLI","copilot"],["CLINE_WRAPPER_PATH","cline-cli"],["CLINE_CONNECTOR_CLI_LAUNCH","cline-cli"]],bR=[{familyKey:"CURSOR_AGENT",variants:[["CURSOR_WORKSPACE_LABEL","cursor"],["CURSOR_INVOKED_AS","cursor-cli"]]}];var TR=["recall","search","local-run","remote-run","jolli","init","login","logout","status","timeline","push","dashboard"],SF=new Set(TR);function xl(e){return e!==void 0&&e!==""&&e!=="0"&&e.toLowerCase()!=="false"}function Il(e){return Vu(e)?e:void 0}function Nf(e=process.env){if(kn(e))return;let t,n=r=>t!==void 0&&t!==r?!1:(t=r,!0);for(let[r,o]of ER)if(xl(e[r])&&!n(o))return;for(let r of bR){if(!xl(e[r.familyKey]))continue;let o=new Set(r.variants.filter(([i])=>xl(e[i])).map(([,i])=>i)),[s]=o;if(o.size!==1||s===void 0||!n(s))return}return t}var Of=require("node:crypto"),Qe=require("node:fs"),rn=require("node:fs/promises"),Pl=require("node:path");w();ce();var Df="telemetry-queue.ndjson",_R=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,Nl=500,RR=1e6;function Is(e){return(0,Pl.join)(j(e),Df)}function kR(e){return typeof e=="string"&&_R.test(e)}function vR(e){let t=(0,Of.createHash)("sha256").update(e).digest("hex"),n=(Number.parseInt(t.slice(16,18),16)&63|128).toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-5${t.slice(13,16)}-${n}${t.slice(18,20)}-${t.slice(20,32)}`}function AR(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;let n=e;return kR(n.eventId)?n:{...n,eventId:vR(t)}}function Lf(e,t){let n=j(e);(0,Qe.mkdirSync)(n,{recursive:!0});let r=(0,Pl.join)(n,Df);(0,Qe.appendFileSync)(r,`${JSON.stringify(t)}
`,"utf-8");try{if((0,Qe.statSync)(r).size>RR){let o=(0,Qe.readFileSync)(r,"utf-8").split(`
`).filter(s=>s.trim().length>0).slice(-Nl);(0,Qe.writeFileSync)(r,o.length>0?`${o.join(`
`)}
`:"","utf-8")}}catch{}}async function Ol(e){let t;try{t=await(0,rn.readFile)(Is(e),"utf-8")}catch{return[]}let n=[];for(let r of t.split(`
`)){let o=r.trim();if(o.length!==0)try{let s=AR(JSON.parse(o),o);s&&n.push(s)}catch{}}return n.slice(-Nl)}async function Mf(e,t){let n=t.slice(-Nl);if(n.length===0){await(0,rn.rm)(Is(e),{force:!0});return}await(0,rn.mkdir)(j(e),{recursive:!0});let r=`${n.map(o=>JSON.stringify(o)).join(`
`)}
`;await P(Is(e),r)}async function Ff(e){await(0,rn.rm)(Is(e),{force:!0})}function CR(e){let t=e.DO_NOT_TRACK;if(t===void 0)return!1;let n=t.trim();return n!==""&&n!=="0"}function Dl(e){let t=e.env??process.env;return CR(t)?{enabled:!1,reason:"do-not-track"}:e.platformDisabled===!0?{enabled:!1,reason:"platform-off"}:e.config.telemetry==="off"?{enabled:!1,reason:"config-off"}:{enabled:!0,reason:"on"}}function $f(e){return Dl(e).enabled}var xR={app_installed:"First run after install; installId minted (once per machine). Props: none \u2014 count distinct install_id.",client_activated:"A GUI surface activated (VS Code activate / IntelliJ project open), carrying `surface_version`. First-seen (install_id, surface_version) \u2248 new + upgrade installs that launched. GUI-only \u2014 CLI new/upgrade is read from any event's surface_version.",surface_enabled:"A surface was enabled in a repo. Props: trigger.",surface_disabled:"A surface was disabled / opted out. Props: trigger, reason.",push_enabled:"Outbound push re-enabled for a repo (spec 306, per-repo push control). Props: trigger.",push_disabled:"Outbound push disabled for a repo (spec 306, per-repo push control). Props: trigger.",signin_started:"User initiated OAuth sign-in. Props: trigger.",signin_completed:"jolliApiKey minted \u2014 the conversion event. Props: api_key_minted.",signed_out:"User logged out. Props: none.",ai_provider_selected:"User chose jolli vs anthropic for LLM. Props: provider (discriminator).",memory_bank_migrated:"Migrate-to-Memory-Bank run. Props: outcome, repos, entries_bucket.",onboarding_progressed:"Per-install onboarding-funnel snapshot, emitted from a repo context and deduped by state tuple (+ daily heartbeat). Content-free \u2014 answers 'after install, where do people stall'. Props: in_git_repo, repo_enabled, capture_configured, capture_method (discriminator: local-agent/anthropic/jolli/none), memories_generated, memories_bucket.",command_invoked:'Any CLI command ran (auto-emitted). Props: command (discriminator), ok, duration_ms; via (discriminator: skill:<name> from a closed skill-name set \u2014 present when a Jolli skill\'s recipe invoked the command; absent means directly typed OR a pre-upgrade skill copy that predates the stamp, so absence is not proof of direct use). MCP tool calls carry a `tool` property and are emitted per call (not per session); the session-level `command:"mcp"` event is suppressed.',recall_performed:"A recall was run. Props: hit, result_count_bucket.",search_performed:"A search was run. Props: query_len_bucket, result_count_bucket.",memory_pushed:"Memories pushed to a Space. Props: kind, created, plans_bucket.",export_performed:"Export run. Props: format (discriminator).",ai_source_detected:"A new AI source transcript was detected. Props: source (discriminator: claude/codex/cursor/\u2026).",settings_opened:"Settings UI opened (vscode/intellij). Props: tab (discriminator).",ingest_completed:"A drainIngest run finished. Props: outcome, ingested, idle (no-op when ingested=0), batches, route_calls, reconcile_calls, touched_slugs, topic_failures, duration_ms. Filter idle=true out for real-ingest latency/health metrics.",error_occurred:"A structured error was raised. Content-free schema: { where (stage/subsystem), code (enumerated), source? , retryable? }. Emitted via trackError(); never carries a message/stack/path.",queue_drained:"QueueWorker finished a drain. Props: ops, duration_ms; trigger (discriminator: agent/ui/terminal/unknown \u2014 who set the drained commits in motion) and agent (which AI host, when trigger=agent) are present only when every drained entry agrees, and omitted for mixed or unstamped drains.",sync_completed:"A memory-bank sync round finished. Props: outcome (discriminator), duration_ms.",toolwindow_opened:"The memory tool window was opened. Props: view.",view_switched:"Tool window view switched (current/bank/knowledge). Props: view (discriminator).",memory_committed:"User committed a memory via the Commit button. Props: files_bucket (bucketed changed-file count), has_conversations (bool), context_bucket (bucketed plans/context count).",memory_expanded:"A committed memory's details were expanded. Props: expanded.",memory_item_opened:"An item inside a memory was opened. Props: item_type (discriminator: conversation/file/plan/note/reference/shipped); render (conversation only: live/stored \u2014 whether the source transcript was reopened or the stored copy was shown); source (conversation only: the transcript source, e.g. claude/codex); status (file only: the git status code, e.g. A/M/D).",session_resumed:"A conversation session was resumed in a terminal. Props: source (discriminator).",recall_prompt_copied:"A recall prompt was copied to the clipboard. Props: none.",memory_ref_id_copied:"A memory reference id (JM-<docId>) was copied to the clipboard. Props: surface_area (discriminator: list/detail \u2014 which UI the chip was clicked in).",memory_pinned:"An item was pinned. Props: kind (discriminator).",memory_unpinned:"An item was unpinned. Props: kind (discriminator).",repo_switched:"User switched the active repo in the tool window's breadcrumb. Props: is_foreign (bool).",branch_switched:"User switched the active branch in the tool window's breadcrumb. Props: is_foreign (bool).",squash_performed:"User squashed commits. Props: count_bucket (bucketed number of commits squashed).",pr_created:"User created or updated a PR from the tool window. Props: action (discriminator: created/updated).",memory_shared:"User invoked Share for a branch's memories (read-only share link). Props: none.",key_rejected:"The server rejected the API key (401/403). Props: retried, where.",reauth_completed:"Re-authentication after a rejected key finished. Props: outcome.",dashboard_opened:"The local web dashboard was opened in a browser (surface web-local). Props: first_run (bool \u2014 first open in this browser profile; per-origin localStorage, so it re-reports across ports, browsers, or a storage clear).",dashboard_view_switched:"The local web dashboard's left-nav view was switched. Props: view (discriminator: stats/standup/repositories/memories). Distinct from view_switched, which is the IDE tool-window event with its own view vocabulary.",range_changed:"The dashboard time-range control was changed. Props: range (discriminator: 7d/30d/90d/custom).",chart_split_changed:"A dashboard card's split-by control was changed. Props: card (discriminator: tokens/mcp), split (discriminator)."};var IR=new Set(Object.keys(xR));function jf(e){return IR.has(e)}var PR=1,Fl=null;function Hf(e){let t=Dl({config:e.config,env:e.env,platformDisabled:e.platformDisabled}),{surface:n,surfaceVersion:r}=DR(),o=Il(e.agent);Fl={enabled:t.enabled,cwd:e.cwd,installId:e.installId,sessionId:e.sessionId,surface:n,surfaceVersion:r,env:OR(e.origin,e.env),...o?{agent:o}:{}}}function Bf(){return Fl}function zr(e,t={}){NR(e,t,void 0)}function NR(e,t,n){let r=Fl;if(!(!r||!r.enabled)&&jf(e))try{let o=$R(t);delete o.agent;let s=t.agent!==void 0,i=n===void 0?r.agent:void 0,a=s?Il(t.agent):i;a&&(o.agent=a);let l={schemaVersion:PR,eventId:(0,Ml.randomUUID)(),eventName:e,surface:n??r.surface,surfaceVersion:r.surfaceVersion,installId:r.installId,...r.sessionId?{sessionId:r.sessionId}:{},os:process.platform,arch:process.arch,runtimeVersion:`node-${process.versions.node}`,env:r.env,tsIso:new Date().toISOString(),accountId:null,properties:o};Lf(r.cwd,l)}catch{}}function Wf(e){return!Number.isFinite(e)||e<=0?"0":e<=5?"1-5":e<=20?"6-20":e<=100?"21-100":"100+"}function OR(e,t=process.env){if(t.JOLLI_TELEMETRY_ENV==="sandbox")return"sandbox";if(!e)return"unknown";let n;try{n=new URL(e).hostname.toLowerCase()}catch{return"unknown"}let r=o=>n===o||n.endsWith(`.${o}`);return r("jolli-local.me")?"local":r("jolli.dev")?"dev":r("jolli.cloud")?"preview":r("jolli.ai")?"prod":"unknown"}function DR(e=Lt){let t=e.indexOf("/"),n=t===-1?e:e.slice(0,t),r=t===-1?"unknown":e.slice(t+1);return{surface:n==="vscode-plugin"?"vscode":n,surfaceVersion:r||"unknown"}}var LR=new Set(["token","secret","password","passwd","apikey","api_key","jolliapikey","authtoken","auth_token","accesstoken","access_token","refreshtoken","refresh_token","cookie","credential","credentials"]),MR=4,FR=120;function Uf(e){return e.length>FR?"[redacted:long]":/\b(?:sk-|ghp_|gho_|ghs_|github_pat_|xox[baprs]-)/.test(e)||e.includes("-----BEGIN")?"[redacted:secret]":/[^\s@]+@[^\s@]+\.[^\s@]+/.test(e)?"[redacted:email]":e.includes("://")?"[redacted:url]":/^~[/\\]/.test(e)||/[A-Za-z0-9._-][/\\][A-Za-z0-9._-]/.test(e)?"[redacted:path]":e}function Ll(e,t){if(t>MR)return"[redacted:deep]";if(e===null)return null;if(typeof e=="number")return Number.isFinite(e)?e:null;if(typeof e=="boolean")return e;if(typeof e=="string")return Uf(e);if(Array.isArray(e))return e.map(n=>Ll(n,t+1)).filter(n=>n!==void 0);if(typeof e=="object"){let n={};for(let[r,o]of Object.entries(e)){if(LR.has(r.toLowerCase()))continue;let s=Ll(o,t+1);s!==void 0&&(n[Uf(r)]=s)}return n}}function $R(e){return Ll(e,0)}var JF=f("PushControl");Xe();w();be();Ye();Xo();ri();var ey=require("node:path");Ms();Yn();w();w();var Ht=f("DualWriteStorage"),wo=class{constructor(t,n){this.primary=t;this.shadow=n;this.kind="dual-write"}get kbRoot(){return this.shadow.kbRoot}async readFile(t){return this.primary.readFile(t)}async batchReadFiles(t){if(this.primary.batchReadFiles)return this.primary.batchReadFiles(t);let n=new Map;for(let r of t)n.set(r,await this.primary.readFile(r));return n}async writeFiles(t,n){if(!J()){await this.primary.writeFiles(t,n);try{await this.shadow.writeFiles(t,n),this.shadow.clearDirty?.()}catch(r){Ht.warn("Shadow write failed (folder storage): %s",r instanceof Error?r.message:String(r)),this.shadow.markDirty?.(n)}}}async deleteVisibleMarkdown(t){if(!this.shadow.deleteVisibleMarkdown)return!1;try{return await this.shadow.deleteVisibleMarkdown(t)}catch(n){let r=t.commitHash.substring(0,8);return Ht.warn("Shadow deleteVisibleMarkdown failed (folder storage) for %s/%s: %s",t.branch,r,k(n)),this.shadow.markDirty?.(`deleteVisibleMarkdown ${t.branch}/${r}`),!1}}async regenerateVisibleMarkdown(t){if(!this.shadow.regenerateVisibleMarkdown)return!1;try{return await this.shadow.regenerateVisibleMarkdown(t)}catch(n){let r=t.commitHash.substring(0,8);return Ht.warn("Shadow regenerateVisibleMarkdown failed (folder storage) for %s/%s: %s",t.branch,r,k(n)),this.shadow.markDirty?.(`regenerateVisibleMarkdown ${t.branch}/${r}`),!1}}async deletePlanVisible(t,n){if(this.shadow.deletePlanVisible)try{await this.shadow.deletePlanVisible(t,n)}catch(r){Ht.warn("Shadow deletePlanVisible failed (folder storage) for %s on %s: %s",t,n,k(r)),this.shadow.markDirty?.(`deletePlanVisible ${n}/${t}`)}}async deleteNoteVisible(t,n){if(this.shadow.deleteNoteVisible)try{await this.shadow.deleteNoteVisible(t,n)}catch(r){Ht.warn("Shadow deleteNoteVisible failed (folder storage) for %s on %s: %s",t,n,k(r)),this.shadow.markDirty?.(`deleteNoteVisible ${n}/${t}`)}}async pruneBranchMappings(t){if(!this.shadow.pruneBranchMappings)return 0;try{return await this.shadow.pruneBranchMappings(t)}catch(n){return Ht.warn("Shadow pruneBranchMappings failed (folder storage): %s",k(n)),this.shadow.markDirty?.(`pruneBranchMappings ${t.length}`),0}}async healMissingVisibleMarkdown(t){let n=this.shadow.healMissingVisibleMarkdown?this.shadow:this.primary.healMissingVisibleMarkdown?this.primary:null;if(!n)return{healed:0,skipped:0,failed:0};let r=t?.dropOrphanedManifestEntries??!0,o=n===this.shadow?"shadow":"primary";try{return await n.healMissingVisibleMarkdown?.({dropOrphanedManifestEntries:r})??{healed:0,skipped:0,failed:0}}catch(s){let i=s?.code,a=i?`[${i}] ${k(s)}`:k(s);return Ht.warn("%s healMissingVisibleMarkdown failed: %s",o,a),n.markDirty?.("healMissingVisibleMarkdown"),{healed:0,skipped:0,failed:0,error:a}}}async listFiles(t){return this.primary.listFiles(t)}async exists(){return this.primary.exists()}isDirty(){return this.shadow.isDirty?.()??!1}async ensure(){await this.primary.ensure();try{await this.shadow.ensure()}catch(t){Ht.warn("Shadow ensure failed: %s",t instanceof Error?t.message:String(t))}}async renderTopicWiki(t){await this.shadow.renderTopicWiki?.(t)}isTopicWikiPresent(){return this.shadow.isTopicWikiPresent?.()??!1}};var O=require("node:fs"),Qh=require("node:fs/promises"),L=require("node:path");w();var Z=require("node:fs");var je=require("node:path");w();var Mv=f("Sync:VaultSymlinkGuard");function Fv(e,t){if(!(0,je.isAbsolute)(t))throw new Error(`assertNoSymlinksInPathSync: absTargetPath must be absolute, got ${t}`);if(!(0,je.isAbsolute)(e))throw new Error(`assertNoSymlinksInPathSync: vaultRoot must be absolute, got ${e}`);let n=(0,je.relative)(e,t);if(n===""||n.startsWith("..")||(0,je.isAbsolute)(n))throw new Error(`assertNoSymlinksInPathSync: target ${t} is not inside vault ${e}`);let r=n.split(je.sep),o=e;for(let s=0;s<r.length-1;s++){let i=r[s];if(i===void 0||i.length===0)continue;o=`${o}${je.sep}${i}`;let a;try{a=(0,Z.lstatSync)(o)}catch(l){if(l.code==="ENOENT")return;throw l}if(a.isSymbolicLink())throw Mv.warn("Refusing vault write \u2014 symlink in path chain: %s",o),new Error(`Refused vault write: path segment is a symlink at ${o} (target ${t}). Inspect and unlink before retrying.`);if(!a.isDirectory())throw new Error(`Refused vault write: path segment is not a directory at ${o} (target ${t}).`)}}function Sc(e,t,n){Fv(e,t),(0,Z.mkdirSync)((0,je.dirname)(t),{recursive:!0});let r=`${t}.tmp`,o=Z.constants.O_WRONLY|Z.constants.O_CREAT|Z.constants.O_TRUNC|Z.constants.O_NOFOLLOW,s=(0,Z.openSync)(r,o,420);try{typeof n=="string"?(0,Z.writeSync)(s,n,void 0,"utf-8"):(0,Z.writeSync)(s,n)}finally{(0,Z.closeSync)(s)}(0,Z.renameSync)(r,t)}Rs();te();io();function $v(e){return`skills--${e}`}function si(e){return`${$v(e)}.md`}function jh(e){let t=["| Skill | Agent | \xD7 | Tokens | Input | Output | Cached |","|---|---|---|---|---|---|---|"],n=[...e].sort((o,s)=>{let i=Ec(s)-Ec(o);if(i!==0)return i;let a=o.skill<s.skill?-1:o.skill>s.skill?1:0;if(a!==0)return a;let l=o.source??"",c=s.source??"";return l<c?-1:l>c?1:0}),r=!1;for(let o of n){let s=o.detection==="heuristic"?" \u2020":"";s!==""&&(r=!0),t.push(`| ${Bh(o.skill)}${s} | ${jv(o)} | ${o.invocationCount} | ${Uv(o).join(" | ")} |`)}return r&&t.push("","\u2020 Inferred from a file read rather than an observed invocation: the count is per session, and a human reading the skill file looks the same."),t}function Uh(e){let t=`${e.length} skill${e.length===1?"":"s"}`,n=0,r=!1,o=!1;for(let s of e)s.usage!==void 0&&(r=!0,n+=s.usage.input+s.usage.cached+s.usage.output,s.usage.confidence!=="attributed"&&(o=!0));return r?`${t} \xB7 ${Wh(n,o?"~":"")} tokens`:t}function Hh(e,t){let n=e.commitHash.substring(0,8);return`${["---","type: skill-usage",`commitHash: ${e.commitHash}`,`branch: ${e.branch}`,`generatedAt: ${e.generatedAt}`,"---","",`# Skills used \u2014 ${n}`,"",`_${e.commitMessage}_`,"",...jh(t),""].join(`
`)}
`}function Bh(e){return e.replace(/\\/g,"\\\\").replace(/\|/g,"\\|").replace(/[\r\n]+/g," ")}function Ec(e){let t=e.usage;return t===void 0?0:t.input+t.cached+t.output}function jv(e){let t=e.source;return t===void 0||t===""?"\u2014":Bh(nc(t))}function Uv(e){let t=e.usage;if(t===void 0)return["\u2014","\u2014","\u2014","\u2014"];let n=t.confidence==="attributed"?"":"~";return[Ec(e),t.input,t.output,t.cached].map(r=>Wh(r,n))}function Wh(e,t){return e<1e3?`${t}${e}`:`${t}${(e/1e3).toFixed(1)}k`}function _t(e){return e.replace(/[\\[\]]/g,"\\$&").replace(/[\r\n]+/g," ")}function Jh(e){return e.replace(/[\\[\]~]/g,"\\$&").replace(/[\r\n]+/g," ")}function ii(e){return e.replace(/[()\s<>"]/g,t=>t==="("?"%28":t===")"?"%29":encodeURIComponent(t))}Xl();Zl();ss();io();jt();var Gh=3/1e6,Hv=15/1e6,Bv=3.75/1e6;function So(e){return Math.round(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function qh(e){return e>=.01?`$${e.toFixed(2)}`:e>=5e-5?`$${e.toFixed(4)}`:e>0?"<$0.0001":"$0.00"}function Kh(e,t){return e?e.input*Gh+e.output*Hv+e.cached*Bv:t*Gh}function _c(e){let{topics:t,sourceNodes:n}=Kg(e),r=[];return Wv(r,e),Kv(r,e,{withRelevance:!0}),Jv(r,e),Vv(r,e.e2eTestGuide),Yv(r,n),zv(r,t,Xv),Qv(r),r.join(`
`)}function Wv(e,t){let n=ro(t),r=n.filesChanged,o=ql(t),s=`${r} file${r!==1?"s":""} changed, +${n.insertions} insertions, \u2212${n.deletions} deletions`,i=tc(B(t));e.push(`# ${t.commitMessage}`,"",`- **Commit:** \`${t.commitHash}\``,`- **Branch:** \`${t.branch}\``,`- **Author:** ${t.commitAuthor}`,`- **Date:** ${i}`,`- **Duration:** ${Pg(t)}`,`- **Changes:** ${s}`),o>0&&e.push(`- **Conversations:** ${o} turn${o!==1?"s":""}`);let a=Kl(t);if(a>0){let c=Vl(t),d=c.input>0||c.output>0||c.cached>0?c:void 0,u=qh(Kh(d,a)),p=d?` (${So(d.input)} input, ${So(d.output)} output, ${So(d.cached)} cached)`:"";e.push(`- **Task usage:** ${So(a)} tokens \xB7 ${u}${p}`)}let l=t.jolliDocUrl;l&&e.push(`- **Jolli Memory:** [${l}](${l})`),e.push("","---")}function Jv(e,t){let n=t.recap?.trim();n&&e.push("","## Quick recap","",n,"","---")}function Gv(e){let t=new Map;for(let o of e){let s=t.get(o.source)??[];s.push(o),t.set(o.source,s)}let n=$n().all().map(o=>o.id),r=[];for(let o of n){let s=t.get(o);s&&(r.push(...s),t.delete(o))}for(let o of t.values())r.push(...o);return r}function bc(e,t,n){return e.get(`${t}:${n}`)??e.get(`${t}:${n.replace(Lg,"")}`)}var qv={high:"High",mid:"Med",low:"Low"};function Tc(e){return!e||e.reason===""?"":` \u2014 ${qv[e.tier]} \xB7 ${_t(e.reason)}`}function Kv(e,t,n){let r=t.plans??[],o=t.notes??[],s=n?.includeReferences?t.references??[]:[],i=n?.withRelevance?t.excludedContext??[]:[],a=new Map;if(n?.withRelevance)for(let u of t.contextRelevance??[])a.set(`${u.kind}:${u.key}`,{tier:u.tier,reason:u.reason});let l=t.skills??[],c=r.length+o.length+s.length+(l.length>0?1:0);if(c===0&&i.length===0)return;let d=c>1?` (${c})`:"";e.push("",`## Context${d}`,"");for(let u of r){let p=u.jolliPlanDocUrl,m=Tc(bc(a,"plan",u.slug));e.push((p?`- [${_t(u.title)}](${ii(p)})`:`- ${_t(u.title)}`)+m)}for(let u of o){let p=u.jolliNoteDocUrl,m=Tc(bc(a,"note",u.id));e.push((p?`- [${_t(u.title)}](${ii(p)})`:`- ${_t(u.title)}`)+m)}for(let u of Gv(s)){let p=_t(Ql(u)),m=u.jolliReferenceDocUrl??u.url,g=Tc(bc(a,"reference",`${u.source}:${u.nativeId}`));e.push((m?`- [${p}](${ii(m)})`:`- ${p}`)+g)}if(l.length>0){let u=l.some(p=>p.detection==="heuristic")?" \xB7 some inferred":"";e.push(`- Skills used \u2014 ${_t(Uh(l))}${u}`)}for(let u of i)e.push(`- ~~${Jh(u.title)}~~ \u2014 Excluded${u.reason?` \xB7 ${_t(u.reason)}`:""}`)}function Vv(e,t){if(!(!t||t.length===0)){e.push("",`## E2E Test (${t.length})`);for(let n=0;n<t.length;n++){let r=t[n];e.push("",`### ${n+1}. ${r.title}`),r.preconditions&&e.push("",`**Preconditions:** ${r.preconditions}`),e.push("","**Steps:**");for(let o=0;o<r.steps.length;o++)e.push(`${o+1}. ${r.steps[o]}`);e.push("","**Expected Results:**");for(let o of r.expectedResults)e.push(`- ${o}`)}e.push("","---")}}function Yv(e,t){if(!(t.length<=1)){e.push("",`## Source Commits (${t.length})`);for(let n of t){let r=ro(n),o=n.conversationTurns?` \xB7 ${n.conversationTurns} turns`:"";e.push(`- \`${n.commitHash.substring(0,8)}\` ${n.commitMessage}  _(+${r.insertions} \u2212${r.deletions}${o} \xB7 ${Jg(B(n))})_`)}e.push("","---")}}function Xv(e,t){if(e.push("","**\u26A1 Why This Change**","",t.trigger),e.push("","**\u{1F4A1} Decisions Behind the Code**","",t.decisions),e.push("","**\u2705 What Was Implemented**","",t.response),t.todo&&e.push("","**\u{1F4CB} Future Enhancements**","",t.todo),t.filesAffected&&t.filesAffected.length>0){e.push("","**\u{1F4C1} FILES**");for(let n of t.filesAffected)e.push(`- \`${n}\``)}}function zv(e,t,n,r={singular:"Summary",plural:"Summaries"}){if(t.length!==0){e.push("",`## ${t.length===1?r.singular:r.plural} (${t.length})`);for(let o=0;o<t.length;o++){let s=t[o],i=s.category?` \`${s.category}\``:"";e.push("",`### ${Gg(o)} \xB7 ${s.title}${i}`),n(e,s)}}}function Qv(e,t){let n=tc(new Date().toISOString()),r=t?qg(t):void 0,o=r?` \xB7 via ${r}`:"";e.push("","---","",`*Generated by Jolli Memory \xB7 ${n}${o}*`)}var Vh="<!-- Generated by Jolli Memory \xB7 do not edit \u2014 regenerated on every merge -->";function Yh(e,t,n,r){let o=[];if(o.push(`# ${e.title}`),o.push(""),o.push(Vh),o.push(""),o.push(`> **Source branches:** ${t.join(", ")}`),o.push(`> **Merged:** ${n}`),o.push(`> **Topic slug:** \`${e.stableSlug}\` (stable across re-merges)`),o.push(""),o.push(e.content.trim()),o.push(""),e.keyDecisions&&e.keyDecisions.length>0){o.push("## Key Decisions"),o.push("");for(let s of e.keyDecisions)o.push(`- ${s}`);o.push("")}if(e.sourceCommits.length>0){o.push("## Source Commits"),o.push("");for(let s of e.sourceCommits){let i=s.substring(0,8),a=r.resolveCommitVisiblePath(i),l=r.resolveCommitMessage(i);a&&l?o.push(`- ${Rc(i,Zv(a))} \u2014 ${l}`):l?o.push(`- \`${i}\` \u2014 ${l}`):o.push(`- \`${i}\``)}o.push("")}if(e.relatedBranches&&e.relatedBranches.length>0){o.push("## Related Branches"),o.push("");for(let s of e.relatedBranches){let i=r.resolveBranchFolder(s);i?o.push(`- ${Rc(s,`../${i}/`)}`):o.push(`- \`${s}\``)}o.push("")}return o.join(`
`)}function Xh(e){return{title:e.title,stableSlug:e.stableSlug,content:e.content,...e.relatedBranches.length>0&&{relatedBranches:[...e.relatedBranches]},sourceCommits:e.sourceRefs.filter(t=>t.type==="summary").map(t=>t.id)}}function zh(e,t){let n=[];if(n.push(`# ${t.repoName} \xB7 Knowledge Wiki`),n.push(""),n.push(Vh),n.push(""),n.push(`> **${e.length} topics** in the knowledge base`),n.push(""),e.length>0){n.push("## Topics"),n.push("");for(let r of e)n.push(`- ${Rc(r.title,`topic--${r.stableSlug}.md`)}`);n.push("")}return n.join(`
`)}function Zv(e){return e.startsWith("./")?e.substring(2):e}function Rc(e,t){let n=e.replace(/[\\[\]]/g,"\\$&"),r=t.replace(/ /g,"%20").replace(/\(/g,"%28").replace(/\)/g,"%29");return`[${n}](${r})`}var C=f("FolderStorage"),ai=class e{constructor(t,n){this.rootPath=t;this.metadataManager=n;this.kind="folder"}get vaultRoot(){return(0,L.dirname)(this.rootPath)}get kbRoot(){return this.rootPath}async readFile(t){let n=(0,L.join)(this.rootPath,".jolli",t);try{return(0,O.readFileSync)(n,"utf-8")}catch(r){let o=r.code;return o==="ENOENT"||o==="ENOTDIR"||C.warn("readFile failed for %s: %s",n,k(r)),null}}async writeFiles(t,n){if(J())return;await this.ensure();let r=0,o=0;for(let s of t)s.delete?this.deleteHiddenFile(s.path)&&o++:(this.writeHiddenFile(s.path,s.content),r++,s.path.startsWith("summaries/")&&s.path.endsWith(".json")&&this.generateSummaryMarkdown(s.content),s.path.startsWith("plans/")&&s.path.endsWith(".md")&&this.generatePlanMarkdown(s.path,s.content,s.branch),s.path.startsWith("notes/")&&s.path.endsWith(".md")&&this.generateNoteMarkdown(s.path,s.content,s.branch));C.info("Wrote %d files, deleted %d (%s)",r,o,n)}async listFiles(t){let n=(0,L.join)(this.rootPath,".jolli",t);if(!(0,O.existsSync)(n))return[];let r=(0,L.join)(this.rootPath,".jolli"),o=[];return this.walkDir(n,r,o),o.sort()}async exists(){return(0,O.existsSync)(this.rootPath)}async ensure(){(0,O.mkdirSync)(this.rootPath,{recursive:!0}),this.metadataManager.ensure()}markDirty(t){let n=(0,L.join)(this.rootPath,".jolli","shadow-status.json"),r={dirty:!0,lastFailedAt:new Date().toISOString(),message:t};try{Sc(this.vaultRoot,n,JSON.stringify(r,null,"	"))}catch(o){C.warn("markDirty suppressed: %s",k(o))}}clearDirty(){let t=(0,L.join)(this.rootPath,".jolli","shadow-status.json");try{(0,O.existsSync)(t)&&(0,O.unlinkSync)(t)}catch{}}isDirty(){let t=(0,L.join)(this.rootPath,".jolli","shadow-status.json");return(0,O.existsSync)(t)}async deleteVisibleMarkdown(t){let n=e.slugify(t.commitMessage),r=t.commitHash.substring(0,8);try{await this.deleteVisibleArtifact(`skill:${t.commitHash}`,t.branch,si(r))}catch(o){C.warn("Failed to delete skills aggregate for %s: %s",r,String(o))}return this.deleteVisibleArtifact(t.commitHash,t.branch,`${n}-${r}.md`)}async deletePlanVisible(t,n){await this.deleteVisibleArtifact(`plan:${t}`,n,`plan--${t}.md`)}async deleteNoteVisible(t,n){await this.deleteVisibleArtifact(`note:${t}`,n,`note--${t}.md`)}async pruneBranchMappings(t){let n=new Map,r=new Set(t);for(let s of this.metadataManager.listBranchMappings())r.has(s.branch)&&n.set(s.branch,s.folder);let o=this.metadataManager.unregisterBranches(t);return o===0?0:(await Promise.all([...n.values()].map(s=>this.rmdirIfEmpty((0,L.join)(this.rootPath,s)))),o)}async rmdirIfEmpty(t){try{await(0,Qh.rmdir)(t)}catch(n){let r=n.code;if(r==="ENOENT"||r==="ENOTEMPTY"||r==="EEXIST")return;C.warn("rmdir(%s) failed (non-fatal): %s",t,k(n))}}resolveBranchForFolder(t){return this.metadataManager.listBranchMappings().find(r=>r.folder===t)?.branch??null}async deleteVisibleArtifact(t,n,r){let o=this.metadataManager.findById(t),s=this.metadataManager.resolveFolderForBranch(n),i=o?.path??`${s}/${r}`,a=(0,L.join)(this.rootPath,i);if(!(0,O.existsSync)(a))return o&&this.metadataManager.removeFromManifest(t),!1;if(o?.fingerprint&&this.isUserEditedOnDisk(a,o.fingerprint))return C.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",i),!1;try{return(0,O.unlinkSync)(a),o&&this.metadataManager.removeFromManifest(t),C.info("Deleted visible MD: %s",i),!0}catch(l){if(l.code==="ENOENT")return o&&this.metadataManager.removeFromManifest(t),!1;throw l}}async forceRegenerateVisibleMarkdown(t){let n=await this.readFile(`summaries/${t.commitHash}.json`);if(!n)return C.warn("forceRegenerateVisibleMarkdown: hidden summaries/%s.json missing \u2014 leaving visible file intact",t.commitHash.substring(0,8)),{ok:!1,reason:"missing"};try{JSON.parse(n)}catch(c){return C.warn("forceRegenerateVisibleMarkdown: malformed summaries/%s.json (%s) \u2014 leaving visible file intact",t.commitHash.substring(0,8),k(c)),{ok:!1,reason:"malformed"}}let r=this.metadataManager.resolveFolderForBranch(t.branch),o=e.slugify(t.commitMessage),s=t.commitHash.substring(0,8),i=`${r}/${o}-${s}.md`,a=(0,L.join)(this.rootPath,i);if((0,O.existsSync)(a))try{(0,O.unlinkSync)(a)}catch(c){return C.warn("forceRegenerateVisibleMarkdown: cannot unlink %s [%s]",i,String(c)),{ok:!1,reason:"unlinkFailed"}}return await this.regenerateVisibleMarkdown(t)?{ok:!0}:{ok:!1,reason:"missing"}}async regenerateVisibleMarkdown(t){let n=this.metadataManager.resolveFolderForBranch(t.branch),r=e.slugify(t.commitMessage),o=t.commitHash.substring(0,8),s=`${n}/${r}-${o}.md`,i=(0,L.join)(this.rootPath,s);if((0,O.existsSync)(i))return await this.healSkillsAggregate(t,n,o),!0;let a=await this.readFile(`summaries/${t.commitHash}.json`);if(!a)return C.warn("regenerateVisibleMarkdown: hidden summaries/%s.json missing",t.commitHash.substring(0,8)),!1;let l;try{l=JSON.parse(a)}catch(g){return C.warn("regenerateVisibleMarkdown: malformed summaries/%s.json \u2014 %s",t.commitHash.substring(0,8),k(g)),!1}let c=this.buildYamlFrontmatter(l),d=_c(l),u=`${c}
${d}`;this.atomicWrite(i,u);let p=this.metadataManager.findById(t.commitHash),m=he.sha256(u);return this.metadataManager.updateManifest({path:s,fileId:l.commitHash,type:"commit",fingerprint:m,source:{commitHash:l.commitHash,branch:l.branch,generatedAt:l.generatedAt},title:p?.title??l.commitMessage}),this.generateSkillsAggregate(l,n,o),C.info("Regenerated visible MD: %s",s),!0}async healMissingVisibleMarkdown(t){let r=this.metadataManager.readManifest().files.filter(c=>c.type==="commit"),o=0,s=0,i=0,a=[];for(let c of r){let d=(0,L.join)(this.rootPath,c.path);if((0,O.existsSync)(d)){s++;continue}let u=(0,L.join)(this.rootPath,".jolli","summaries",`${c.fileId}.json`),p;try{p=(0,O.readFileSync)(u,"utf-8")}catch(R){let N=R.code;if(N==="ENOENT"){i++,t?.dropOrphanedManifestEntries?(a.push(c.fileId),C.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 will drop manifest entry",c.fileId.substring(0,8))):C.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 keeping manifest entry (no truth source to repopulate)",c.fileId.substring(0,8));continue}i++,C.warn("healMissingVisibleMarkdown: hidden JSON read failed for %s [%s]: %s \u2014 keeping manifest entry",c.fileId.substring(0,8),N??"?",k(R));continue}let m;try{m=JSON.parse(p)}catch(R){i++,C.warn("healMissingVisibleMarkdown: malformed hidden JSON for %s: %s",c.fileId.substring(0,8),k(R));continue}let g=this.metadataManager.resolveFolderForBranch(m.branch),h=e.slugify(m.commitMessage),T=m.commitHash.substring(0,8),S=`${g}/${h}-${T}.md`;if(S!==c.path){s++,C.warn("healMissingVisibleMarkdown: manifest path drift for %s \u2014 manifest=%s computed=%s \u2014 keeping manifest entry, run reconcile",c.fileId.substring(0,8),c.path,S);continue}let _={commitHash:m.commitHash,parentCommitHash:null,commitMessage:m.commitMessage,commitDate:m.commitDate,branch:m.branch,generatedAt:m.generatedAt};try{await this.regenerateVisibleMarkdown(_)?o++:(i++,C.warn("healMissingVisibleMarkdown: regenerate returned false for %s \u2014 retry on next pass",c.fileId.substring(0,8)))}catch(R){i++,C.warn("healMissingVisibleMarkdown: regenerate failed for %s: %s",c.fileId.substring(0,8),k(R))}}let l=a.length>0?this.dropManifestEntries(a):[];return(o>0||i>0)&&C.info("healMissingVisibleMarkdown: healed=%d skipped=%d failed=%d dropped=%d",o,s,i,l.length),l.length>0?{healed:o,skipped:s,failed:i,droppedIds:l}:{healed:o,skipped:s,failed:i}}dropManifestEntries(t){if(t.length===0)return[];let n=new Set(t),r=this.metadataManager.readManifest(),o=r.files.filter(i=>n.has(i.fileId)).map(i=>i.fileId);if(o.length===0)return[];let s=r.files.filter(i=>!n.has(i.fileId));return this.metadataManager.replaceFiles(s),o}isUserEditedOnDisk(t,n){if(!(0,O.existsSync)(t)||!n)return!1;let r;try{r=he.sha256((0,O.readFileSync)(t,"utf-8"))}catch(o){return C.warn("isUserEditedOnDisk: cannot read %s [%s] \u2014 treating as edited",t,String(o)),!0}return r!==n}generateSummaryMarkdown(t){let n;try{n=JSON.parse(t)}catch{return}let r=this.metadataManager.resolveFolderForBranch(n.branch),o=e.slugify(n.commitMessage),s=n.commitHash.substring(0,8),i=`${o}-${s}.md`,a=`${r}/${i}`,l=this.buildYamlFrontmatter(n),c=_c(n),d=`${l}
${c}`,u=(0,L.join)(this.rootPath,a),p=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,p?.fingerprint)){C.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,d);let m=he.sha256(d);this.metadataManager.updateManifest({path:a,fileId:n.commitHash,type:"commit",fingerprint:m,source:{commitHash:n.commitHash,branch:n.branch,generatedAt:n.generatedAt},title:n.commitMessage}),C.info("Markdown generated: %s",a),this.generateSkillsAggregate(n,r,s),n.children&&n.children.length>0&&this.cleanupSupersededDescendants(n.children,a)}async healSkillsAggregate(t,n,r){if((0,O.existsSync)((0,L.join)(this.rootPath,n,si(r))))return;let o=await this.readFile(`summaries/${t.commitHash}.json`);if(o)try{this.generateSkillsAggregate(JSON.parse(o),n,r)}catch{}}generateSkillsAggregate(t,n,r){let o=t.skills;if(o===void 0||o.length===0)return;let s=`${n}/${si(r)}`,i=(0,L.join)(this.rootPath,s),a=this.metadataManager.findByPath(s);if(this.isUserEditedOnDisk(i,a?.fingerprint)){C.info("FolderStorage: skip overwrite of user-edited %s",s);return}let l=Hh(t,o);this.atomicWrite(i,l),this.metadataManager.updateManifest({path:s,fileId:`skill:${t.commitHash}`,type:"skill",fingerprint:he.sha256(l),source:{commitHash:t.commitHash,branch:t.branch,generatedAt:t.generatedAt},title:`Skills used \u2014 ${r}`}),C.info("Skills aggregate generated: %s",s)}cleanupSupersededDescendants(t,n){let r=[];e.collectDescendantHashes(t,r);for(let o of r){let s=this.metadataManager.findById(o);if(!s||s.type!=="commit"||s.path===n)continue;let i=(0,L.join)(this.rootPath,s.path);if(!(0,O.existsSync)(i)){this.metadataManager.removeFromManifest(o);continue}if(!s.fingerprint){C.warn("Skipping cleanup of %s \u2014 legacy entry has no fingerprint baseline",s.path);continue}if(this.isUserEditedOnDisk(i,s.fingerprint)){C.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",s.path);continue}try{(0,O.unlinkSync)(i),this.metadataManager.removeFromManifest(o),C.info("Cleaned up superseded MD: %s",s.path)}catch(a){C.warn("Failed to delete superseded MD %s: %s",s.path,String(a))}}}static collectDescendantHashes(t,n){for(let r of t)n.push(r.commitHash),r.children&&r.children.length>0&&e.collectDescendantHashes(r.children,n)}buildYamlFrontmatter(t){let n=["---"];return n.push(`commitHash: ${t.commitHash}`),n.push(`branch: ${t.branch}`),n.push(`author: ${t.commitAuthor}`),n.push(`date: ${t.commitDate}`),n.push("type: commit"),t.commitType&&n.push(`commitType: ${t.commitType}`),t.stats&&(n.push(`filesChanged: ${t.stats.filesChanged}`),n.push(`insertions: ${t.stats.insertions}`),n.push(`deletions: ${t.stats.deletions}`)),n.push("---"),n.join(`
`)}async regenerateVisiblePlan(t,n){let r=await this.readFile(`plans/${t}.md`);if(!r)return C.warn("regenerateVisiblePlan: hidden plans/%s.md missing",t),!1;let o=this.metadataManager.resolveFolderForBranch(n),s=(0,L.join)(this.rootPath,o,`plan--${t}.md`);if((0,O.existsSync)(s))try{(0,O.unlinkSync)(s)}catch(i){return C.warn("regenerateVisiblePlan: cannot unlink %s [%s]",s,String(i)),!1}return this.generatePlanMarkdown(`plans/${t}.md`,r,n),!0}generatePlanMarkdown(t,n,r){let o=t.replace(/^plans\//,"").replace(/\.md$/,""),s=r?this.metadataManager.resolveFolderForBranch(r):this.resolveBranchFromSlug(o),i=`plan--${o}.md`,a=`${s}/${i}`,c=`${["---","type: plan",`slug: ${o}`,"---"].join(`
`)}

${n}`,d=(0,L.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){C.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let p=he.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`plan:${o}`,type:"plan",fingerprint:p,updatedAt:new Date().toISOString(),source:r?{branch:r}:{},title:this.extractTitle(n)??o}),C.info("Plan markdown generated: %s",a)}async regenerateVisibleNote(t,n){let r=await this.readFile(`notes/${t}.md`);if(!r)return C.warn("regenerateVisibleNote: hidden notes/%s.md missing",t),!1;let o=this.metadataManager.resolveFolderForBranch(n),s=(0,L.join)(this.rootPath,o,`note--${t}.md`);if((0,O.existsSync)(s))try{(0,O.unlinkSync)(s)}catch(i){return C.warn("regenerateVisibleNote: cannot unlink %s [%s]",s,String(i)),!1}return this.generateNoteMarkdown(`notes/${t}.md`,r,n),!0}generateNoteMarkdown(t,n,r){let o=t.replace(/^notes\//,"").replace(/\.md$/,""),s=r?this.metadataManager.resolveFolderForBranch(r):this.resolveBranchFromSlug(o),i=`note--${o}.md`,a=`${s}/${i}`,c=`${["---","type: note",`id: ${o}`,"---"].join(`
`)}

${n}`,d=(0,L.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){C.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let p=he.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`note:${o}`,type:"note",fingerprint:p,source:r?{branch:r}:{},title:this.extractTitle(n)??o,updatedAt:new Date().toISOString()}),C.info("Note markdown generated: %s",a)}resolveBranchFromSlug(t){let n=t.split("-").at(-1);if(n.length>=7){let o=this.metadataManager.readManifest().files.find(i=>i.type==="commit"&&i.source?.commitHash?.startsWith(n));if(o?.source?.branch)return this.metadataManager.resolveFolderForBranch(o.source.branch);let s=(0,L.join)(this.rootPath,".jolli","index.json");if((0,O.existsSync)(s))try{let a=JSON.parse((0,O.readFileSync)(s,"utf-8")).entries.find(l=>l.commitHash.startsWith(n));if(a?.branch)return this.metadataManager.resolveFolderForBranch(a.branch)}catch{}}return"_shared"}extractTitle(t){let n=t.match(/^#\s+(.+)/m);return n?n[1].trim():null}writeHiddenFile(t,n){let r=(0,L.join)(this.rootPath,".jolli",t);this.atomicWrite(r,n)}deleteHiddenFile(t){let n=(0,L.join)(this.rootPath,".jolli",t);if(!(0,O.existsSync)(n))return!1;try{return(0,O.unlinkSync)(n),!0}catch{return!1}}walkDir(t,n,r){for(let o of(0,O.readdirSync)(t,{withFileTypes:!0})){let s=(0,L.join)(t,o.name);o.isDirectory()?this.walkDir(s,n,r):r.push(_e((0,L.relative)(n,s)))}}async renderTopicWiki(t){let n=(0,L.join)(this.rootPath,"_wiki");this.wipeWikiArtifacts(n);let r=this.buildWikiRenderContext();(0,O.mkdirSync)(n,{recursive:!0});let o=[];for(let s of t)try{let i=Xh(s);o.push(i);let a=`_wiki/topic--${i.stableSlug}.md`,l=Yh(i,s.relatedBranches,s.lastUpdatedAt,r);this.atomicWrite((0,L.join)(this.rootPath,a),l),this.metadataManager.updateManifest({path:a,fileId:`wiki-topic-${i.stableSlug}`,type:"wiki",fingerprint:he.sha256(l),source:{generatedAt:s.lastUpdatedAt},title:i.title})}catch(i){C.warn("renderTopicWiki: failed to render topic %s: %s",s.stableSlug,k(i))}try{let s=zh(o,r),i="_wiki/_index.md";this.atomicWrite((0,L.join)(this.rootPath,i),s),this.metadataManager.updateManifest({path:i,fileId:"wiki-index",type:"wiki",fingerprint:he.sha256(s),source:{generatedAt:new Date().toISOString()},title:`${r.repoName} Knowledge Wiki`})}catch(s){C.warn("renderTopicWiki: failed to render index: %s",k(s))}C.info("Topic-KB wiki regenerated: %d topics under %s",t.length,n)}isTopicWikiPresent(){return(0,O.existsSync)((0,L.join)(this.rootPath,"_wiki","_index.md"))}wipeWikiArtifacts(t){if(this.metadataManager.unregisterFilesByType("wiki"),!!(0,O.existsSync)(t))try{for(let n of(0,O.readdirSync)(t))if(n.endsWith(".md"))try{(0,O.unlinkSync)((0,L.join)(t,n))}catch(r){C.warn("FolderStorage.wipeWikiArtifacts: failed to unlink %s: %s",n,k(r))}}catch(n){C.warn("FolderStorage.wipeWikiArtifacts: failed to list %s: %s",t,k(n))}}buildWikiRenderContext(){let t=this.metadataManager.readConfig(),n=this.metadataManager.listBranchMappings(),r=new Map(n.map(i=>[i.branch,i.folder])),o=this.metadataManager.readManifest(),s=new Map;for(let i of o.files)i.type==="commit"&&i.source.commitHash&&s.set(i.source.commitHash.substring(0,8),i);return{repoName:t.repoName??"Memory Bank",resolveCommitVisiblePath:i=>{let a=s.get(i);return a?`../${a.path}`:null},resolveBranchFolder:i=>r.get(i)??null,resolveCommitMessage:i=>s.get(i)?.title??null}}atomicWrite(t,n){Sc(this.vaultRoot,t,n)}static slugify(t){let n=t.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"");return n.length>50&&(n=n.substring(0,50).replace(/-+$/,"")),n||"untitled"}};Yr();Rs();$s();me();ti();var li=f("StorageFactory");async function kc(e,t){let n;try{n=await re()}catch(a){li.warn("Failed to load config, falling back to defaults: %s",a.message),n={}}n.storageMode!==void 0&&li.info("ignoring retired storageMode=%s \u2014 routing is decided by the cutover state",n.storageMode);let r=n.localFolder,o=await to(e);if(li.info("StorageFactory.create: route=%s, projectPath=%s",o.state,e),o.state==="blocked")throw new Error(`storage unavailable: ${o.reason} \u2014 this repo's orphan branch is frozen (cutover), so writes cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);if(o.state==="legacy-fenced"||o.state==="cutover"){let{identity:a}=await sn(e),l=new Ut(a);return bl(e,r)?new wo(l,Zh(e,r)):l}if(!bl(e,r))return li.warn("Not a claimable project (no git worktree, or inside the Memory Bank folder): %s \u2014 using orphan-only storage",e),new Et(t);let s=new Et(t),i=Zh(e,r);return new wo(s,i)}function Zh(e,t){let n=cf(e),r=pf(e),o=lf(n,r,t),s=new he((0,ey.join)(o,".jolli"));return new ai(o,s)}et();jt();rc();var Pe=f("SchemaV5Migration"),ny="schema-v5-migration.json",ty=3e4;async function vc(e,t){let r=await(t??await kc(e??process.cwd(),e)).readFile(ny);if(!r)return null;try{return JSON.parse(r)}catch(o){return Pe.warn("Failed to parse v5 migration state \u2014 treating as absent: %s",o.message),null}}async function eA(e,t,n){if(Ln(e))return await n();if(!await Ar(e,{timeoutMs:ty}))throw new Error(`${t}: could not acquire orphan-write lock within ${ty}ms`);try{return await Mn(e,n)}finally{await Cr(e)}}async function ry(e){let t=await kc(e??process.cwd(),e),n=await vc(e,t);return n?.status==="completed"?(Pe.info("Schema v5 migration already completed at %s \u2014 skipping",n.completedAt),{migrated:n.migratedCount,skipped:n.skippedCount,fresh:n.fresh,alreadyDone:!0}):await t.exists()?eA(e,"migrateSchemaToV5",()=>nA(e,t)):(Pe.info("Storage backend not initialized yet \u2014 skipping schema v5 migration (no data to migrate)"),{migrated:0,skipped:0,fresh:!0,alreadyDone:!1})}async function tA(e,t){if(t.length===0)return new Map;if(e.batchReadFiles)return e.batchReadFiles(t);let n=new Map;for(let r of t)n.set(r,await e.readFile(r));return n}async function nA(e,t){let n=await vc(e,t);if(n?.status==="completed")return Pe.info("Schema v5 migration completed by a concurrent run at %s \u2014 skipping",n.completedAt),{migrated:n.migratedCount,skipped:n.skippedCount,fresh:n.fresh,alreadyDone:!0};let r=new Date().toISOString(),o=await ni(e),s=o.ok&&o.state==="uncutover"?await G(["rev-parse",`refs/heads/${Fe}`],e).then(F=>F.stdout.trim()).catch(()=>null):null,i=await t.listFiles("summaries/");Pe.info("Found %d summary files to inspect",i.length);let a=await t.listFiles("transcripts/"),l=new Set;for(let F of a){let Se=Ws(F);Se&&l.add(Se)}Pe.info("Reading %d summaries...",i.length);let c=Date.now(),d=await tA(t,i);Pe.info("Read %d summaries in %d ms",d.size,Date.now()-c);let u=[],p=[],m=0,g=0;for(let F of i){let Se=d.get(F);if(Se===void 0)throw new Error(`readSummaries omitted ${F} \u2014 protocol contract violation (expected one entry per request)`);if(Se===null){g++;continue}let De;try{De=JSON.parse(Se)}catch(Gt){Pe.warn("Skipping unparseable summary %s: %s",F,Gt.message),g++;continue}let Le=rA(De,l),vt=JSON.stringify(Le,null,"	");if(p.push({path:F,content:vt}),Le===De){g++;continue}u.push({path:F,content:vt}),m++}let h=i.length===0,T=m===0&&g>0,S=T?p:u,_=h?"Schema v5 migration: no pre-v5 data found":T?`Schema v5 migration: re-pushing ${g} v5 summaries to heal storage shadow`:`Schema v5 migration: ${m} upgraded, ${g} skipped`,R=Date.now();if(S.length>0&&(Pe.info("Writing %d summary file(s) via active storage...",S.length),await t.writeFiles(S,_)),t.isDirty?.()??!1)return Pe.warn("Schema v5 migration: storage shadow write failed (folder marked dirty) \u2014 leaving state PENDING; next startup will retry and re-push (migrated=%d, skipped=%d, took %d ms)",m,g,Date.now()-R),{migrated:m,skipped:g,fresh:h,alreadyDone:!1};let I={version:1,status:"completed",startedAt:r,completedAt:new Date().toISOString(),migratedCount:m,skippedCount:g,fresh:h};return await t.writeFiles([{path:ny,content:JSON.stringify(I,null,"	")}],_),Pe.info("Schema v5 migration complete: %d migrated, %d skipped, fresh=%s, recovery=%s (took %d ms)",m,g,h,T,Date.now()-R),s&&Pe.info("Pre-migration orphan-branch SHA was %s (debug-only recovery anchor)",s),{migrated:m,skipped:g,fresh:h,alreadyDone:!1}}function rA(e,t){if(e.version>=5&&e.transcripts!==void 0)return e;let n=lc(e);if(n.transcripts!==void 0)return{...n,version:5};let o=oo(n).filter(i=>t.has(i));return{...n,version:5,transcripts:o}}me();et();w();var mn=require("node:fs/promises"),oS=require("node:os"),Co=require("node:path");ce();w();var Zw=require("node:crypto"),tr=require("node:fs"),Vc=require("node:fs/promises"),Ri=require("node:os"),Rt=require("node:path");w();var sy=require("node:fs"),di=require("node:fs/promises"),iy=require("node:os"),pn=require("node:path"),ay=require("node:url");ce();w();var oA=/^[a-z0-9][a-z0-9-]*$/;function Eo(e){return oA.test(e)}var ci=f("DistPathWriter");async function bo(e,t,n,r){if(!Eo(e))return ci.warn("Refusing to write dist-paths entry for unsafe source tag: %s",JSON.stringify(e)),!1;let o=t??(0,pn.dirname)((0,ay.fileURLToPath)(__jmImportMetaUrl)),s=n??"0.99.15",i=(0,pn.join)(r??(0,pn.join)((0,iy.homedir)(),".jolli","jollimemory"),"dist-paths"),a=(0,pn.join)(i,e);try{await(0,di.mkdir)(i,{recursive:!0});let l=`${s}
${o}`,c;try{c=await(0,di.readFile)(a,"utf-8")}catch{}if(c){let[d,u]=c.split(`
`);if(!!(d&&u&&oy(u))&&!oy(o))return ci.info("Kept complete dist-paths/%s (version=%s) \u2014 candidate dist is incomplete: %s",e,d,o),!0}return c!==l&&await P(a,l),ci.info("Wrote dist-paths/%s (version=%s, distDir=%s)",e,s,o),!0}catch(l){return ci.warn("Failed to write dist-paths/%s: %s",e,l.message),!1}}var sA=["Cli.js","StopHook.js","SessionStartHook.js","PostCommitHook.js","PostRewriteHook.js","PrepareMsgHook.js","PostMergeHook.js","PrePushHook.js","QueueWorker.js","PrePushWorker.js"];function oy(e){return sA.every(t=>(0,sy.existsSync)((0,pn.join)(e,t)))}var er=Er(Qw(),1);function _i(e,t){if(e.includes("-")||e.includes("+")||t.includes("-")||t.includes("+")){let i=c=>{let d=(0,er.valid)(c);return d||(/^\d+(\.\d+)*$/.test(c)?(0,er.coerce)(c)?.version??null:null)},a=i(e),l=i(t);if(a&&l)return(0,er.compare)(a,l);if(a)return 1;if(l)return-1}let n=/^\d+(\.\d+)*$/.test(e),r=/^\d+(\.\d+)*$/.test(t);if(!n&&!r)return 0;if(!n)return-1;if(!r)return 1;let o=e.split(".").map(Number),s=t.split(".").map(Number);for(let i=0;i<Math.max(o.length,s.length);i++){let a=(o[i]??0)-(s[i]??0);if(a!==0)return a}return 0}var Kc=f("DistPathResolver"),uI=[[".cursor/","cursor"],[".windsurf/","windsurf"],[".antigravity/","antigravity"],[".vscode-oss/","vscodium"],[".positron/","positron"],[".trae/","trae"],[".vscode/","vscode"]];function Yc(e){let t=e.replace(/\\/g,"/");for(let[r,o]of uI)if(t.includes(r))return o;let n=t.match(/\/\.([a-z][a-z0-9-]*)\/extensions\//i);return n?.[1]?n[1].toLowerCase():(0,Zw.createHash)("sha256").update(e).digest("hex").slice(0,8)}function eS(e){try{let n=(0,tr.readFileSync)(e,"utf-8").trim().split(`
`).map(s=>s.trim());if(n.length<2)return null;let r=n[0],o=n[n.length-1];if(!o)return null;if(r.startsWith("source=")){let s=r.slice(7),i=s.indexOf("@");return i===-1?{source:s,version:"unknown",distDir:o}:{source:s.slice(0,i),version:s.slice(i+1),distDir:o}}return{source:"",version:r,distDir:o}}catch{return null}}function Ao(e){let t=(0,Rt.join)(e??(0,Rt.join)((0,Ri.homedir)(),".jolli","jollimemory"),"dist-paths"),n;try{n=(0,tr.readdirSync)(t).sort()}catch{return[]}let r=[];for(let o of n){let s=(0,Rt.join)(t,o),i=eS(s);i&&r.push({source:o,version:i.version,distDir:i.distDir,available:(0,tr.existsSync)(i.distDir)})}return r}async function tS(e){let t=(0,Rt.join)(e??(0,Rt.join)((0,Ri.homedir)(),".jolli","jollimemory"),"dist-paths"),n=[];for(let r of Ao(e))if(!r.available)try{await(0,Vc.unlink)((0,Rt.join)(t,r.source)),n.push(r.source),Kc.info("Pruned stale dist-paths/%s (dir gone: %s)",r.source,r.distDir)}catch(o){Kc.warn("Failed to prune stale dist-paths/%s: %s",r.source,o.message)}return n}var Xc=["cli","vscode","cursor"];function ki(e){let t=e.filter(o=>o.available);if(t.length===0)return;let n=t[0];for(let o=1;o<t.length;o++)_i(t[o].version,n.version)>0&&(n=t[o]);let r=t.filter(o=>_i(o.version,n.version)===0);for(let o of Xc){let s=r.find(i=>i.source===o);if(s)return s}return n}async function nS(){let e=(0,Rt.join)((0,Ri.homedir)(),".jolli","jollimemory"),t=(0,Rt.join)(e,"dist-path"),n=eS(t);if(!n)return!1;let r;if(n.source==="cli")r="cli";else{let o=Yc(n.distDir);r=/^[a-f0-9]{8}$/.test(o)?"vscode":o}return r==="vscode-extension"&&(r="vscode"),await bo(r,n.distDir,n.version),await(0,Vc.unlink)(t).catch(()=>{}),Kc.info("Migrated legacy dist-path -> dist-paths/%s (version=%s, distDir=%s)",r,n.version,n.distDir),!0}var rS=f("DispatchScripts"),pI=`#!/bin/bash
# JolliMemory dist-path resolver.
# Outputs the absolute path to the current winning dist directory: the highest
# core version across all registered sources whose path exists. Ties (same core
# version) are broken by a preference list (cli > vscode > cursor > \u2026) because
# the bundled @jolli.ai/cli core is identical at equal versions \u2014 the tie-break
# only makes the winner deterministic and favours the canonical CLI build.
#
# When JOLLI_DIST_PREFER_SOURCE is set (for example by Claude Plugin CLI
# commands), that source is SOFT-preferred: it wins a
# version TIE \u2014 selected only if present, complete, and already at the top version
# BEST_VER \u2014 but never beats a strictly-higher version from another source, and a
# missing / incomplete / older prefer silently falls through to normal cross-source
# selection below. This replaces the former hard pin (resolve-only-that-source-or-
# fail) so every install source competes on version.
#
# Optional arg $1 = a required script filename (e.g. "PrepareMsgHook.js"). When
# given, a candidate dist is eligible ONLY if it actually contains that file, so
# an INCOMPLETE source that wins on version is skipped and resolution falls
# through to the next-best complete source. Without this, a source registered
# with a partial dist (e.g. the Claude Code plugin before it bundled the git-hook
# scripts) would win, and run-hook would 'node <dist>/PrepareMsgHook.js' a
# missing file \u2014 non-zero exit that BLOCKS the commit. Callers that don't care
# (run-cli baking, external tools) omit the arg and get the legacy dir-only check.
#
# Stable public API: run-hook, run-cli, legacy hooks still on disk, and
# third-party tools all rely on this script's "output a path, exit 0/1"
# contract.
#
# EVERY command below is a bash builtin \u2014 no sed, no sort, no grep. This script
# runs on the front of every hook dispatch, including the SessionStart hook a user
# waits on before Claude Code gives them a prompt. The previous form spent two
# 'sed' processes per registered source plus a four-process 'printf | sort -V |
# tail | grep' pipeline per version comparison: ~40 processes and ~60 ms of pure
# fork/exec to read a dozen two-line files. It is now ~5 ms. Keep it fork-free \u2014
# a single innocuous-looking pipeline here is paid by every git hook and every
# session start.

DIR="$HOME/.jolli/jollimemory"
REQUIRED="$1"
PREFER="$JOLLI_DIST_PREFER_SOURCE"
BEST_PATH=""
BEST_VER="0.0.0"

# has_required <distDir> \u2014 true when no file is required, or the required file
# exists inside the candidate dist. Keeps the eligibility test in one place so
# both passes stay in lockstep.
has_required() {
  [ -z "$REQUIRED" ] && return 0
  [ -f "$1/$REQUIRED" ]
}

# read_entry <file> \u2014 sets ENTRY_VER / ENTRY_PATH from a two-line registration.
# 'read' is a builtin, so this replaces two 'sed' processes per source. A final
# line with no trailing newline (which is how these files are actually written)
# still populates the variable even though 'read' reports failure, hence the
# unconditional 'return 0'. The CR strip mirrors run-hook's node-path reader: a
# file round-tripped through a Windows-side sync would otherwise fail the -d test
# with no diagnostic anywhere.
read_entry() {
  ENTRY_VER=""
  ENTRY_PATH=""
  [ -f "$1" ] || return 1
  { IFS= read -r ENTRY_VER; IFS= read -r ENTRY_PATH; } < "$1"
  ENTRY_VER="\${ENTRY_VER%$'\\r'}"
  ENTRY_PATH="\${ENTRY_PATH%$'\\r'}"
  return 0
}

# ver_gt <a> <b> \u2014 true when version <a> sorts strictly ABOVE <b>.
#
# Replaces 'sort -V' with dotted-numeric comparison over the first three fields,
# which is the shape every version here has (dev/unknown are normalised to 0.0.0
# by the caller). It also CLOSES a documented divergence rather than adding one:
# 'sort -V' ranks 1.0.0-rc.1 above 1.0.0, while semver \u2014 and the in-process
# compareSemver in cli/src/install/DistPathResolver.ts this script must agree
# with \u2014 rank a prerelease below its own release.
#
# The prerelease tail is compared too, not stripped. Dropping it would make
# 1.0.0-rc.1 and 1.0.0-rc.2 compare EQUAL in both directions, and since an equal
# version never displaces the incumbent, the winner would fall out of readdir
# order \u2014 hooks silently routed to the older of two prereleases. Rules are
# semver's: identifier by identifier, numerically when both are numeric, and a
# longer identifier list wins when every shared one is equal.
#
# Build metadata is stripped FIRST, which is both what semver requires (it takes
# no part in precedence) and the only way the numeric scrub below stays honest:
# the third field of 1.0.0+b1 is '0+b1', and scrubbing non-digits out of that
# yields '01' \u2014 so without this the version compared EQUAL to 1.0.1 and ABOVE a
# plain 1.0.0, where compareSemver says below and equal. That is exactly the
# equal-compare shape described above, with readdir order deciding the winner.
ver_gt() {
  # LC_ALL is local so the string comparison below is byte order everywhere. It is
  # an assignment, not a subprocess: bash re-inits its collation on it and restores
  # the caller's on return.
  local av="\${1%%+*}" bv="\${2%%+*}" a b apre="" bpre="" i x y ap bp ai bi LC_ALL=C
  a="\${av%%-*}"
  b="\${bv%%-*}"
  [ "$a" != "$av" ] && apre=1
  [ "$b" != "$bv" ] && bpre=1
  for i in 1 2 3; do
    x="\${a%%.*}"
    y="\${b%%.*}"
    # Backstop for anything else non-numeric that reaches a field (a hand-edited
    # registration, a tag we do not know); build metadata is already gone by here.
    x="\${x//[!0-9]/}"
    y="\${y//[!0-9]/}"
    [ -z "$x" ] && x=0
    [ -z "$y" ] && y=0
    [ "$x" -gt "$y" ] && return 0
    [ "$x" -lt "$y" ] && return 1
    case "$a" in *.*) a="\${a#*.}" ;; *) a=0 ;; esac
    case "$b" in *.*) b="\${b#*.}" ;; *) b=0 ;; esac
  done
  # Numerically equal. A release outranks its own prerelease; two releases are
  # equal; two prereleases fall through to their identifiers.
  [ -z "$apre" ] && [ -n "$bpre" ] && return 0
  [ -n "$apre" ] && [ -z "$bpre" ] && return 1
  [ -z "$apre" ] && return 1
  ap="\${av#*-}"
  bp="\${bv#*-}"
  while [ -n "$ap" ] || [ -n "$bp" ]; do
    ai="\${ap%%.*}"
    bi="\${bp%%.*}"
    # Ran out of identifiers: the shorter list is the lower version (rc < rc.1).
    [ -z "$ai" ] && return 1
    [ -z "$bi" ] && return 0
    case "$ai$bi" in
      # Either side non-numeric: byte order, which puts digits below letters and
      # so agrees with semver's "numeric identifiers rank below alphanumeric".
      *[!0-9]*)
        [[ "$ai" > "$bi" ]] && return 0
        [[ "$ai" < "$bi" ]] && return 1
        ;;
      *)
        [ "$ai" -gt "$bi" ] && return 0
        [ "$ai" -lt "$bi" ] && return 1
        ;;
    esac
    case "$ap" in *.*) ap="\${ap#*.}" ;; *) ap="" ;; esac
    case "$bp" in *.*) bp="\${bp#*.}" ;; *) bp="" ;; esac
  done
  return 1
}

# Pass 1 \u2014 highest core version wins. The comparison is STRICT greater-than: an
# equal version does NOT overwrite, so enumeration (alphabetical) order never
# decides a tie.
if [ -d "$DIR/dist-paths" ]; then
  for f in "$DIR/dist-paths"/*; do
    read_entry "$f" || continue
    VER="$ENTRY_VER"
    CANDIDATE="$ENTRY_PATH"
    [ -z "$VER" ] && continue
    [ -d "$CANDIDATE" ] || continue
    has_required "$CANDIDATE" || continue
    case "$VER" in
      dev|unknown) VER_CMP="0.0.0" ;;
      *)           VER_CMP="$VER" ;;
    esac
    if [ -z "$BEST_PATH" ]; then
      BEST_PATH="$CANDIDATE"
      BEST_VER="$VER_CMP"
    elif ver_gt "$VER_CMP" "$BEST_VER"; then
      BEST_PATH="$CANDIDATE"
      BEST_VER="$VER_CMP"
    fi
  done
fi

# Soft prefer \u2014 when JOLLI_DIST_PREFER_SOURCE names a source (the Claude Code
# plugin sets it to "claude-plugin" for its CLI recipes), that source WINS a
# version tie ahead of the global preference order below: it is chosen only if it is
# present, complete, AND already at the top version BEST_VER. A strictly-higher
# version elsewhere has already won BEST_VER in Pass 1, so prefer never overrides it;
# a missing / incomplete / older prefer falls through to Pass 2. This is the soft
# replacement for the former hard pin \u2014 every source still competes on version.
if [ -n "$BEST_PATH" ] && [ -n "$PREFER" ]; then
  if read_entry "$DIR/dist-paths/$PREFER"; then
    PVER="$ENTRY_VER"
    PPATH="$ENTRY_PATH"
    case "$PVER" in dev|unknown) PVER="0.0.0" ;; esac
    if [ -d "$PPATH" ] && has_required "$PPATH" && [ "$PVER" = "$BEST_VER" ]; then
      echo "$PPATH"
      exit 0
    fi
  fi
fi

# Pass 2 \u2014 among sources tied at BEST_VER, prefer the order below (kept in lockstep
# with SOURCE_PREFERENCE_ORDER in DistPathResolver.ts). Only overrides when the
# preferred source carries the same top version AND is itself complete (has the
# required file, if any) \u2014 a preferred-but-incomplete source must not displace the
# complete pass-1 winner.
if [ -n "$BEST_PATH" ]; then
  for pref in ${Xc.join(" ")}; do
    read_entry "$DIR/dist-paths/$pref" || continue
    PVER="$ENTRY_VER"
    PPATH="$ENTRY_PATH"
    [ -d "$PPATH" ] || continue
    has_required "$PPATH" || continue
    case "$PVER" in dev|unknown) PVER="0.0.0" ;; esac
    if [ "$PVER" = "$BEST_VER" ]; then
      BEST_PATH="$PPATH"
      break
    fi
  done
fi

if [ -n "$BEST_PATH" ]; then
  echo "$BEST_PATH"
else
  echo "ERROR: No valid Jolli Memory dist-path found. Run 'jolli enable' to fix." >&2
  exit 1
fi
`,mI=`#!/bin/bash
# JolliMemory hook runner.
# Takes a hook-type argument; execs the corresponding node hook entry in the
# winning dist (selected by resolve-dist-path).
#
# The hook-type \u2192 script name is resolved FIRST, then passed to resolve-dist-path
# so it can skip any winning-but-incomplete dist that lacks this specific script
# and fall through to a complete source. This is what stops a partial source
# (e.g. a plugin bundle missing PrepareMsgHook.js) from turning a commit hook into
# 'node <missing file>' \u2014 a non-zero exit that would BLOCK the git operation.

HOOK_TYPE="$1"
shift

# Both failure exits below are otherwise completely silent by design (hooks must
# never block git), which means a dispatch failure \u2014 e.g. a dist mid-reinstall
# and briefly missing a required script \u2014 leaves no trace anywhere: no debug.log
# entry (Node never starts), no queue file, nothing. This breadcrumb is the one
# place such a failure becomes visible after the fact. It's overwritten on every
# invocation (last-failure only, not an append log) and cleared on the next
# successful dispatch, so its mere existence means "the most recent hook run
# failed," not "a hook failed at some point in history."
BREADCRUMB="$HOME/.jolli/jollimemory/last-hook-dispatch-failure"
write_dispatch_failure() {
  printf '%s %s %s cwd=%s\\n' "$(date -u +%Y-%m-%dT%H:%M:%SZ)" "$1" "$2" "$PWD" > "$BREADCRUMB"
}

case "$HOOK_TYPE" in
  post-commit)        SCRIPT="PostCommitHook.js" ;;
  post-merge)         SCRIPT="PostMergeHook.js" ;;
  post-rewrite)       SCRIPT="PostRewriteHook.js" ;;
  prepare-commit-msg) SCRIPT="PrepareMsgHook.js" ;;
  pre-push)           SCRIPT="PrePushHook.js" ;;
  stop)               SCRIPT="StopHook.js" ;;
  session-start)      SCRIPT="SessionStartHook.js" ;;
  gemini-after-agent) SCRIPT="GeminiAfterAgentHook.js" ;;
  *)                  echo "ERROR: unknown hook type '$HOOK_TYPE'" >&2; exit 0 ;;
esac

DIST=$("$HOME/.jolli/jollimemory/resolve-dist-path" "$SCRIPT") || {
  write_dispatch_failure "$HOOK_TYPE" "no-valid-dist"
  exit 0
}

# Resolve a usable node binary. The caller's PATH comes first so interactive
# shells keep their own version-manager choice (nvm/volta/fnm/\u2026). GUI git
# clients launch git with a minimal PATH that lacks those locations, so when
# PATH has no node, fall back to the runtime the IDE detected and recorded in
# node-path (one absolute path per line; its writer already proved the binary
# runs and meets the minimum version, so an -x check is enough here \u2014 never
# spawn 'node --version' on this path: prepare-commit-msg is blocking).
NODE_BIN=""
if command -v node >/dev/null 2>&1; then
  NODE_BIN="node"
else
  # tr -d '\r' strips a CR the file might have picked up from a Windows-side
  # sync (iCloud/Dropbox/OneDrive) or Notepad round-trip: without it, [ -x
  # "/abs/path\r" ] would fail and the dispatcher would silently no-op on a
  # machine that clearly has Node \u2014 a debug hazard with no user-visible error.
  RECORDED=$(sed -n '1p' "$HOME/.jolli/jollimemory/node-path" 2>/dev/null | tr -d '\r')
  if [ -n "$RECORDED" ] && [ -x "$RECORDED" ]; then
    NODE_BIN="$RECORDED"
  fi
fi

if [ -z "$NODE_BIN" ]; then
  echo "ERROR: node runtime not found. Jolli Memory hooks require Node.js." >&2
  write_dispatch_failure "$HOOK_TYPE" "no-node-runtime"
  exit 0
fi

# Guarded on existence because rm is NOT a shell builtin: unconditional, this
# costs a fork+exec on EVERY dispatch, including prepare-commit-msg, which runs
# on the blocking commit path this file is otherwise careful to keep spawn-free.
# The test operator IS a builtin, so the common case (no prior failure) now
# costs nothing, and the || : keeps a failed removal from ending the script
# non-zero. exec follows immediately, so the guard's own false exit status
# (1, when no breadcrumb exists) is never observable.
[ -e "$BREADCRUMB" ] && { rm -f "$BREADCRUMB" || :; }
exec "$NODE_BIN" "$DIST/$SCRIPT" "$@"
`,fI=`#!/bin/bash
# JolliMemory CLI runner.
# Execs node on the winning dist's Cli.js with all args passed through.
# Requires the winning dist to actually contain Cli.js (every real dist does),
# so a partial source can't win run-cli either.

DIST=$("$HOME/.jolli/jollimemory/resolve-dist-path" Cli.js) || exit 1

# Node resolution mirrors run-hook: PATH first (respects the user's own
# version-manager choice), then the IDE-recorded runtime for GUI clients
# whose minimal PATH lacks node. See run-hook for the full rationale.
NODE_BIN=""
if command -v node >/dev/null 2>&1; then
  NODE_BIN="node"
else
  # tr -d '\r' strips a CR the file might have picked up from a Windows-side
  # sync (iCloud/Dropbox/OneDrive) or Notepad round-trip: without it, [ -x
  # "/abs/path\r" ] would fail and the dispatcher would silently no-op on a
  # machine that clearly has Node \u2014 a debug hazard with no user-visible error.
  RECORDED=$(sed -n '1p' "$HOME/.jolli/jollimemory/node-path" 2>/dev/null | tr -d '\r')
  if [ -n "$RECORDED" ] && [ -x "$RECORDED" ]; then
    NODE_BIN="$RECORDED"
  fi
fi

if [ -z "$NODE_BIN" ]; then
  echo "ERROR: node runtime not found. Jolli Memory CLI requires Node.js." >&2
  exit 1
fi

exec "$NODE_BIN" "$DIST/Cli.js" "$@"
`;async function zc(e,t){let n=!1;try{n=await(0,mn.readFile)(e,"utf-8")===t}catch{}if(n){await(0,mn.chmod)(e,493);return}await P(e,t),await(0,mn.chmod)(e,493)}async function Qc(){let e=(0,Co.join)((0,oS.homedir)(),".jolli","jollimemory");try{return await(0,mn.mkdir)(e,{recursive:!0}),await zc((0,Co.join)(e,"resolve-dist-path"),pI),await zc((0,Co.join)(e,"run-hook"),mI),await zc((0,Co.join)(e,"run-cli"),fI),rS.info("Wrote resolve-dist-path, run-hook, and run-cli scripts to %s",e),!0}catch(t){return rS.warn("Failed to write resolve scripts: %s",t.message),!1}}var xo=require("node:fs/promises"),vi=require("node:path");ce();w();ms();var sS=f("GeminiHookInstaller");async function Zc(e){let t=(0,vi.join)(e,".gemini"),n=(0,vi.join)(t,"settings.json"),r=$e("gemini-after-agent"),o={},s;try{s=await(0,xo.readFile)(n,"utf-8"),o=JSON.parse(s)}catch(d){if(d.code!=="ENOENT")throw d}let i=o.hooks??{},a=i.AfterAgent??[],l=zt(a,us);l.push({hooks:[{type:"command",command:r,name:"jolli-session-tracker"}]}),i.AfterAgent=l,o.hooks=i;let c=JSON.stringify(o,null,"	");return s===c?{path:n}:(await(0,xo.mkdir)(t,{recursive:!0}),await P(n,c),sS.info("Gemini AfterAgent hook installed"),{path:n})}async function ed(e){let t=(0,vi.join)(e,".gemini","settings.json"),n;try{let i=await(0,xo.readFile)(t,"utf-8");n=JSON.parse(i)}catch{return}let r=n.hooks;if(!r)return;let o=r.AfterAgent??[];if(!$r(o,us))return;let s=zt(o,us);s.length===0?delete r.AfterAgent:r.AfterAgent=s,Object.keys(r).length===0?delete n.hooks:n.hooks=r,await P(t,JSON.stringify(n,null,"	")),sS.info("Gemini AfterAgent hook removed")}pd();var Jt=require("node:fs/promises"),md=require("node:os"),Do=require("node:path");w();var sr=f("GlobalInstructionsInstaller"),fd="<!-- >>> jolli memory instructions >>> -->",gd="<!-- <<< jolli memory instructions <<< -->",mS="## Jolli Memory",fS=[{host:"claude",relPath:[".claude","CLAUDE.md"]},{host:"gemini",relPath:[".gemini","GEMINI.md"]},{host:"codex",relPath:[".codex","AGENTS.md"]}];function gI(){return`${[fd,mS,"","This repository may have **Jolli Memory** enabled \u2014 a durable record of past","development the current code cannot show: why choices were made, how a topic was","handled before, what was already tried, and where work stopped. Treat it as a","first-class source and reach for it **proactively \u2014 before answering or guessing,","and even when the user never names Jolli** \u2014 whenever a request is memory-shaped","(about intent, history, or prior work). Its reads are read-only and cheap, so","lean toward consulting memory rather than guessing: a hit often changes the","answer, and a miss costs little.","","Two capabilities are available; invoke whichever recall / search skill or tool is","registered in this session \u2014 the exact name varies by host (a plugin skill, a","project skill, or e.g. an `mcp__jollimemory__*` MCP tool), so route by intent, not","by a fixed name:","","- **Recall** \u2014 deep context for one branch (the current branch by default): its","  decisions, a recap, and where work left off.","- **Search** \u2014 full-text lookup across *all* branches: decisions, topics, files.","","Consult memory FIRST, before answering from your own assumptions, when the request","is memory-shaped:","",'- **Why / intent** \u2014 "why is this like this", "why X and not Y", "what was the','  reasoning", or anything where the code shows *what* but not *why*. \u2192 Search (or',"  Recall when it's about the current branch).",'- **How it works / design** \u2014 "how does X work", "how is X built/designed", "how','  would I implement X", or walking through / extending an existing feature or',"  subsystem in this repo. The code shows the mechanism; memory holds why it is","  shaped that way and what was already tried. \u2192 Search (or Recall for the current","  branch). A quick lookup here is cheap and often surfaces rationale and pitfalls",`  the code comments don't \u2014 so search even though the ask starts with "how".`,'- **Prior art** \u2014 "have we done/hit this before", "how was <topic> handled", "is','  there a pattern for this", "where else do we do X", or a bug that may have been',"  seen before. \u2192 Search (decisions / topics / files across ALL branches).",`- **Resume** \u2014 "where were we", "pick up where I left off", "what's left on this`,'  branch", or returning to work after a break. \u2192 Recall (current-branch decisions',"  + recap + where work stopped).","- **Before non-trivial edits** \u2014 before refactoring, changing, or deleting code","  whose intent isn't obvious from the code itself, search memory first; a past","  decision may constrain the change, and skipping this risks re-breaking what a","  prior fix already addressed.","",'Routing: current-branch history or resume \u2192 Recall; cross-branch or "has this','come up before" \u2192 Search. When unsure whether memory helps, run a quick search',"first before answering from your own assumptions.","","Do NOT reach for memory on narrow, current-state facts you can read straight from","the code \u2014 one function's behavior, a type or signature, running a command, a","rename, formatting, or a literal text lookup \u2014 answer those from the code directly.","That exclusion is for single-symbol lookups only; do not let it swallow a",'whole-feature "how does it work / how is it designed" question \u2014 that is',"design-shaped, so search memory first (per the How it works / design rule above).","","Treat any concrete fact memory states as of-its-time: use it for why / intent /","prior context, but verify names, paths, and code shape against the current code","before relying on them. If no Jolli memory capability is registered here (Jolli","Memory not enabled in this repo), fall back to normal behavior.",gd].join(`
`)}
`}function gS(e){return e==="enabled"?{write:!0}:e==="disabled"?{write:!1,remove:!0}:{write:!1}}function hI(e,t){let n=e.split(`
`),r=n.indexOf(fd),o=n.indexOf(gd),s=t.slice(0,-1).split(`
`);if(r!==-1&&o!==-1&&o>r)return[...n.slice(0,r),...s,...n.slice(o+1)].join(`
`);let i=n.indexOf(mS);if(i!==-1){let l=n.length;for(let u=i+1;u<n.length;u++)if(/^#{1,2} /.test(n[u])){l=u;break}let c=n.slice(0,i).join(`
`),d=n.slice(l).join(`
`);return`${c.length>0?`${c}
`:""}${t}${d}`}if(e.length===0)return t;let a=e.endsWith(`
`)?"":`
`;return`${e}${a}${t}`}async function yI(e,t){let n="";try{n=await(0,Jt.readFile)(e,"utf-8")}catch(o){if(o.code!=="ENOENT"){sr.warn("Failed to read %s: %s \u2014 skipping",e,o.message);return}}let r=hI(n,t);if(r!==n)try{await(0,Jt.mkdir)((0,Do.dirname)(e),{recursive:!0}),await(0,Jt.writeFile)(e,r,"utf-8"),sr.info("Updated %s with Jolli Memory instructions",e)}catch(o){sr.warn("Failed to write %s: %s",e,o.message)}}async function hS(e){let t=gI(),n=(0,md.homedir)();for(let r of fS)e[r.host]&&await yI((0,Do.join)(n,...r.relPath),t)}function wI(e){let t=e.split(`
`),n=t.indexOf(fd),r=t.indexOf(gd);if(n===-1||r===-1||r<n)return e;let o=n>0&&t[n-1]===""?n-1:n;return[...t.slice(0,o),...t.slice(r+1)].join(`
`)}async function SI(e){let t;try{t=await(0,Jt.readFile)(e,"utf-8")}catch(r){r.code!=="ENOENT"&&sr.warn("Failed to read %s: %s \u2014 skipping",e,r.message);return}let n=wI(t);if(n!==t)try{await(0,Jt.writeFile)(e,n,"utf-8"),sr.info("Removed Jolli Memory instructions from %s",e)}catch(r){sr.warn("Failed to write %s: %s",e,r.message)}}async function yS(){let e=(0,md.homedir)();for(let t of fS)await SI((0,Do.join)(e,...t.relPath))}var Ae=require("node:os"),K=require("node:path");me();w();var wS=require("node:fs"),ar=require("node:fs/promises"),ir=require("node:path");me();w();var hd=f("McpRegistration"),yd="jollimemory";function EI(e,t,n,r){return e==="win32"&&n?{command:"node",args:[n,...r]}:{command:t,args:[...r]}}function wd(e,t,n){return EI(e,t,n,["mcp"])}function Sd(e){let t=ki(Ao(e));return t?(0,ir.join)(t.distDir,"Cli.js"):void 0}function SS(e){let t=ki(Ao(e));if(!t)return;let n=(0,ir.join)(t.distDir,"McpLauncher.js");return(0,wS.existsSync)(n)?n:void 0}var ES="/.mcp.json";async function bS(e){let t=(0,ir.join)(e,".mcp.json"),n;try{n=JSON.parse(await(0,ar.readFile)(t,"utf-8"))}catch(l){if(l.code!=="ENOENT"){hd.warn("Skipping MCP registration: %s exists but is unreadable/invalid (%s)",t,String(l));return}n={}}let r=n.mcpServers??{},o=pe(),s=(0,ir.join)(o,"run-cli"),i=process.platform==="win32"?Sd(o):void 0;r[yd]=wd(process.platform,s,i);let a={...n,mcpServers:r};await(0,ar.writeFile)(t,`${JSON.stringify(a,null,2)}
`,"utf-8"),hd.info("Registered MCP server in %s",t)}async function TS(e){let t=(0,ir.join)(e,".mcp.json"),n;try{n=JSON.parse(await(0,ar.readFile)(t,"utf-8"))}catch{return}n.mcpServers?.[yd]&&(delete n.mcpServers[yd],await(0,ar.writeFile)(t,`${JSON.stringify(n,null,2)}
`,"utf-8"),hd.info("Removed MCP server from %s",t))}var fn=require("node:fs/promises"),RS=require("node:path");ce();w();var Pi=f("CodexTomlWriter"),Ni="[mcp_servers.jollimemory]";async function kS(e){try{return(await(0,fn.stat)(e)).mode&511}catch{return 384}}function _S(e){return`${Ni}
command = ${JSON.stringify(e.command)}
args = ${JSON.stringify(e.args??[])}
`}function vS(e){if(e.startsWith(Ni))return 0;let t=e.indexOf(`
${Ni}`);return t===-1?-1:t+1}function AS(e){let t=vS(e);if(t===-1)return e;let n=e.indexOf(`
[`,t+Ni.length),r=n===-1?e.length:n+1,o=e.slice(0,t),s=e.slice(r);return o===""||s===""?o+s:`${o.replace(/\n+$/,"")}

${s}`}async function CS(e,t){let n="";try{n=await(0,fn.readFile)(e,"utf-8")}catch(i){if(i.code!=="ENOENT"){Pi.warn("Skipping Codex MCP: %s unreadable (%s)",e,String(i));return}}let r=AS(n).replace(/\s*$/,""),o=r.length===0?_S(t):`${r}

${_S(t)}`;if(o===n){Pi.info("Codex MCP server already registered in %s \u2014 no write needed",e);return}await(0,fn.mkdir)((0,RS.dirname)(e),{recursive:!0});let s=await kS(e);await P(e,o,s),Pi.info("Registered Codex MCP server in %s",e)}async function xS(e){let t;try{t=await(0,fn.readFile)(e,"utf-8")}catch{return}vS(t)!==-1&&(await P(e,`${AS(t).replace(/\s*$/,"")}
`,await kS(e)),Pi.info("Removed Codex MCP server from %s",e))}var gn=require("node:fs/promises"),IS=require("node:path");ce();w();var Oi=f("JsonMcpWriter"),Ed="jollimemory",PS="mcpServers";async function NS(e){try{return(await(0,gn.stat)(e)).mode&511}catch{return}}async function nt(e,t,n=PS){let r,o="";try{let c=await(0,gn.readFile)(e,"utf-8");o=c,r=c.trim()===""?{}:JSON.parse(c)}catch(c){if(c.code!=="ENOENT"){Oi.warn("Skipping MCP registration: %s unreadable/invalid (%s)",e,String(c));return}r={}}let s=r[n]??{},i=()=>`${JSON.stringify({...r,[n]:s},null,2)}
`,a=i();s[Ed]=t;let l=i();if(l===o||l===a){Oi.info("MCP server already registered in %s \u2014 no write needed",e);return}await(0,gn.mkdir)((0,IS.dirname)(e),{recursive:!0}),await P(e,l,await NS(e)),Oi.info("Registered MCP server in %s",e)}async function rt(e,t=PS){let n;try{n=JSON.parse(await(0,gn.readFile)(e,"utf-8"))}catch{return}let r=n[t];r?.[Ed]&&(delete r[Ed],await P(e,`${JSON.stringify(n,null,2)}
`,await NS(e)),Oi.info("Removed MCP server from %s",e))}var bI=f("HostRegistrars"),TI={host:"claude",scope:"repo",register:bS,remove:TS,gitExcludePaths:()=>[ES]};function ot(){let e=pe(),t=process.platform==="win32"?Sd(e):void 0;return wd(process.platform,(0,K.join)(e,"run-cli"),t)}function _I(){let e=ot();if(process.platform!=="win32")return e;let t=SS(pe());return t?{command:"node",args:[t]}:e}var RI={host:"cursor",scope:"repo",register:e=>nt((0,K.join)(e,".cursor","mcp.json"),{...ot()}),remove:e=>rt((0,K.join)(e,".cursor","mcp.json")),gitExcludePaths:()=>["/.cursor/mcp.json"]},kI={host:"gemini",scope:"global",register:()=>nt((0,K.join)((0,Ae.homedir)(),".gemini","settings.json"),{...ot()}),remove:()=>rt((0,K.join)((0,Ae.homedir)(),".gemini","settings.json")),gitExcludePaths:()=>[]},vI={host:"codex",scope:"global",register:()=>CS((0,K.join)((0,Ae.homedir)(),".codex","config.toml"),_I()),remove:()=>xS((0,K.join)((0,Ae.homedir)(),".codex","config.toml")),gitExcludePaths:()=>[]},AI={host:"opencode",scope:"global",register:()=>{let e=ot(),t={type:"local",command:[e.command,...e.args],enabled:!0};return nt((0,K.join)((0,Ae.homedir)(),".config","opencode","opencode.json"),t,"mcp")},remove:()=>rt((0,K.join)((0,Ae.homedir)(),".config","opencode","opencode.json"),"mcp"),gitExcludePaths:()=>[]},CI={host:"copilot",scope:"global",register:()=>nt((0,K.join)((0,Ae.homedir)(),".copilot","mcp-config.json"),{...ot()}),remove:()=>rt((0,K.join)((0,Ae.homedir)(),".copilot","mcp-config.json")),gitExcludePaths:()=>[]},xI={host:"copilotChat",scope:"global",register:()=>{let e=ot(),t={type:"stdio",command:e.command,args:e.args};return nt((0,K.join)(wt("Code"),"User","mcp.json"),t,"servers")},remove:()=>rt((0,K.join)(wt("Code"),"User","mcp.json"),"servers"),gitExcludePaths:()=>[]},II={host:"cline",scope:"global",register:async()=>{for(let e of await ll())await nt(bs(e),{...ot()})},remove:async()=>{for(let e of Kr())await rt(bs(e))},gitExcludePaths:()=>[]},PI={host:"devin",scope:"global",register:()=>nt((0,K.join)((0,Ae.homedir)(),".config","devin","config.json"),{...ot(),transport:"stdio"}),remove:()=>rt((0,K.join)((0,Ae.homedir)(),".config","devin","config.json")),gitExcludePaths:()=>[]},NI={host:"antigravity",scope:"global",register:()=>nt((0,K.join)((0,Ae.homedir)(),".gemini","config","mcp_config.json"),{...ot()}),remove:()=>rt((0,K.join)((0,Ae.homedir)(),".gemini","config","mcp_config.json")),gitExcludePaths:()=>[]},OI={host:"kimi",scope:"global",register:()=>nt((0,K.join)(vs(),"mcp.json"),{...ot()}),remove:()=>rt((0,K.join)(vs(),"mcp.json")),gitExcludePaths:()=>[]};function lr(e){let t=[];return e.claude&&t.push(TI),e.cursor&&t.push(RI),e.gemini&&t.push(kI),e.codex&&t.push(vI),e.opencode&&t.push(AI),e.copilot&&t.push(CI),e.copilotChat&&t.push(xI),e.cline&&t.push(II),e.devin&&t.push(PI),e.antigravity&&t.push(NI),e.kimi&&t.push(OI),t}var DI={claude:!0,codex:!0,cursor:!0,gemini:!0,opencode:!0,copilot:!0,copilotChat:!0,cline:!0,devin:!0,antigravity:!0,kimi:!0};async function bd(e,t,n,r){for(let o of e)try{await r(o)}catch(s){bI.warn("MCP %s failed for %s in %s (non-fatal): %s",n,o.host,t,String(s))}}async function Td(e,t){let n=lr(t).filter(r=>r.scope==="repo");await bd(n,e,"registration",r=>r.register(e))}async function OS(e){let t=lr(e).filter(n=>n.scope==="global");await bd(t,"(global)","registration",n=>n.register(""))}async function _d(e){let t=lr(DI).filter(n=>n.scope==="repo");await bd(t,e,"removal",n=>n.remove(e))}var fe=require("node:fs/promises"),ae=require("node:path");ce();w();var Lo=`### Shell prerequisite

This block requires a POSIX bash shell. On Linux/macOS the system bash works.
**On Windows, use Git Bash** (the bash bundled with Git for Windows). Other
Windows "bash" options \u2014 \`C:\\Windows\\System32\\bash.exe\`, the WindowsApps
alias, or any WSL bash \u2014 see a separate Linux home directory and will not
find the Jolli entry script that lives under \`%USERPROFILE%\`.

If Git Bash is not available on Windows, STOP and tell the user:
"Jolli skill needs Git Bash on Windows. Install Git for Windows from
https://git-scm.com/download/win and retry."

Do NOT fall back to \`npm run\`, \`npx\`, \`node\` directly, PowerShell-native
commands, WSL bash, or any workspace-local script \u2014 those bypass the
security recipe and the dist resolver and will not produce valid output.`;var Ce=f("SkillInstaller"),cr="1.0.5",LS=["jollimemory-recall","jolli-memory-recall"],Mo=[{host:"agents-std",relativeDir:[".agents","skills"],enabled:()=>!0}],Di=[".claude","skills"],Fo=[{name:"jolli-recall",build:jI},{name:"jolli-search",build:UI},{name:"jolli-local-run",build:HI},{name:"jolli-remote-run",build:BI},{name:"jolli",build:WI}],vW=Fo.map(e=>e.name),MS=["jolli-pr"],FS=Mo.flatMap(e=>Fo.map(t=>`/${e.relativeDir.join("/")}/${t.name}/`)),dr=["/.claude/skills/jolli/"],$S=[...Mo.map(e=>`/${e.relativeDir.join("/")}/jolli/`),...dr];async function LI(e,t={}){for(let n of LS)await vd((0,ae.join)(e,".claude","skills",n),"legacy");await kd(e);for(let n of Mo){if(!n.enabled(t))continue;let r=(0,ae.join)(e,...n.relativeDir);for(let o of Fo)await BS(r,o.name,o.build())}await Fi(e),await Un(e,Mi)}async function kd(e){for(let t of Mo){let n=(0,ae.join)(e,...t.relativeDir);for(let r of MS)await vd((0,ae.join)(n,r),"retired")}}async function vd(e,t){let n=(0,ae.join)(e,"SKILL.md"),r;try{r=await(0,fe.readFile)(n,"utf-8")}catch{return}if(!Ad(r)){Ce.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",e);return}try{await(0,fe.rm)(e,{recursive:!0,force:!0}),Ce.info("Removed %s Jolli skill at %s",t,e)}catch(o){Ce.warn("Failed to remove %s skill at %s: %s",t,e,o.message)}}async function jS(e,t={}){return LI(e,t)}async function Li(e){let t=(0,ae.join)(e,...Di),n=(0,ae.join)(t,"jolli","SKILL.md");try{if(!(await(0,fe.readFile)(n,"utf-8")).includes('vendor: "jolli.ai"')){Ce.info("Skipping umbrella write \u2014 existing %s lacks vendor marker (user-owned)",n);return}}catch{}await BS(t,"jolli",JS())}var Rd=[".cursor","skills"],US=Fo.filter(e=>e.name!=="jolli"),Mi=[`/${Rd.join("/")}/`,...US.map(e=>`/${Rd.join("/")}/${e.name}/`)];async function Fi(e){let t=(0,ae.join)(e,...Rd);for(let n of US){let r=(0,ae.join)(t,n.name),o=!1;try{o=(await(0,fe.lstat)(r)).isSymbolicLink()}catch{continue}if(o){await(0,fe.rm)(r,{recursive:!0,force:!0}),Ce.info("Removed cursor mirror symlink at %s",r);continue}await vd(r,"cursor mirror")}}async function $i(e){try{let t=(0,ae.join)(e,...Di,"jolli","SKILL.md");return await(0,fe.readFile)(t,"utf-8")===JS()}catch{return!1}}async function HS(e){let t=[...Mo.map(n=>n.relativeDir),Di];for(let n of t){let r=(0,ae.join)(e,...n,"jolli"),o=(0,ae.join)(r,"SKILL.md"),s;try{s=await(0,fe.readFile)(o,"utf-8")}catch{continue}if(s.includes('vendor: "jolli.ai"'))try{await(0,fe.rm)(r,{recursive:!0,force:!0}),Ce.info("Removed Jolli umbrella menu at %s",r)}catch(i){Ce.warn("Failed to remove umbrella at %s: %s",r,i.message)}}}var MI=[...Fo.filter(e=>e.name!=="jolli").map(e=>e.name),...MS,...LS];async function ji(e){for(let t of MI){let n=(0,ae.join)(e,...Di,t),r=(0,ae.join)(n,"SKILL.md"),o;try{o=await(0,fe.readFile)(r,"utf-8")}catch{continue}if(!Ad(o)){Ce.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",n);continue}try{await(0,fe.rm)(n,{recursive:!0,force:!0}),Ce.info("Removed legacy Jolli skill at %s",n)}catch(s){Ce.warn("Failed to remove legacy skill at %s: %s",n,s.message)}}}var FI=/(?:^|\n)[ \t]*revision:\s*(\d+)/,$I=-1;function DS(e){let t=e.match(FI),n=t?Number.parseInt(t[1],10):Number.NaN;return Number.isFinite(n)?n:$I}function Ad(e){return e.includes('vendor: "jolli.ai"')||e.includes("jolli-skill-version:")}async function BS(e,t,n){let r=(0,ae.join)(e,t),o=(0,ae.join)(r,"SKILL.md"),s=DS(n);try{let i=await(0,fe.readFile)(o,"utf-8");if(!Ad(i)){Ce.info("Skipping %s SKILL.md \u2014 no Jolli ownership marker (user-owned)",t);return}if(DS(i)>=s)return}catch{}try{await(0,fe.mkdir)(r,{recursive:!0}),await P(o,n),Ce.info("Wrote SKILL.md (revision %d) to %s",s,o)}catch(i){Ce.warn("Failed to write %s SKILL.md: %s",t,i.message)}}function WS(e,t){return`${Lo}

### Invocation

Generate a fresh random 16-character hex string (the "delimiter token") for
this invocation \u2014 e.g. \`3f8a9b2c5d7e1f4a\`. Quickly scan the user's argument:
if the argument text contains a line that is exactly \`JOLLI_ARG_<delimiter
token>_END\`, regenerate the delimiter token and re-check.

Then run this Bash, replacing the two \`<DELIM>\` occurrences with your
delimiter token and replacing \`<user-arg>\` with the user's input verbatim:

\`\`\`bash
JOLLI_INVOKED_VIA=skill:${e} "$HOME/.jolli/jollimemory/run-cli" ${e} --arg-stdin${t} <<'JOLLI_ARG_<DELIM>_END'
<user-arg>
JOLLI_ARG_<DELIM>_END
\`\`\`

If you cannot follow the above structure (e.g., your environment doesn't
support here-docs), STOP and tell the user "Jolli skill cannot run safely
in this environment." DO NOT attempt to interpolate the argument into argv
or any double-quoted shell string \u2014 that path has a known shell injection
vector.`}function jI(){return`---
name: jolli-recall
description: Recall prior development context from Jolli for the current branch. Use when the user wants to recall, remember, or resume prior work on a branch.
metadata:
  version: "${cr}"
  revision: 3
  vendor: "jolli.ai"
---

# Jolli Recall

> Every commit deserves a Memory. Every memory deserves a Recall.

Load the structured development context for a branch \u2014 commits with their
distilled topics (trigger / response / decisions / files), plus any plans
and notes that the work referenced. Synthesize a grounded answer to the
user's prompt about that branch.

## Step 1: Load the recall result

\`<user-arg>\` is a branch name (exact or fragment) or empty (current branch).

### Preferred: MCP tool

If the \`recall\` tool from the \`jollimemory\` MCP server is available, call it with
\`{ "branch": "<user-arg>" }\` (omit \`branch\` when \`<user-arg>\` is empty). It
returns a \`type\`-tagged object \u2014 \`recall\` / \`catalog\` / \`error\` \u2014 identical to
the CLI fallback below.

Match that tool by what it DOES, not by one host's spelling of it: Claude Code
prefixes it as \`mcp__jollimemory__recall\`, while Codex exposes a bare \`recall\`
inside the \`mcp__jollimemory\` namespace and loads MCP tools lazily \u2014 so an empty
first look is not proof it is absent.

### Fallback: CLI here-doc

Only if the jollimemory MCP server is not registered at all \u2014 NOT merely because
one spelling of the tool name is absent from your tool list. Then use:

${WS("recall"," --format json")}

If \`~/.jolli/jollimemory/run-cli\` does not exist, tell the user:
"Jolli not installed. Please install via \`npm install -g @jolli.ai/cli && jolli enable\` or install the Jolli VS Code extension."
Do not attempt further processing.

Both the MCP tool and the CLI fallback return the same \`type\`-tagged union.
Handle the result using Step 2 regardless of which path was used.

## Step 2: Handle the result by \`type\`

The result (from either the MCP tool or the CLI) is a \`type\`-tagged object:

- \`type:"recall"\` \u2192 render Part A + Part B below.
- \`type:"catalog"\` \u2192 semantic-match \`<user-arg>\` against \`branches[].branch\` /
  \`commitMessages\` / \`topicTitles\`. One match \u2192 repeat Step 1 with that branch.
  Many \u2192 list and ask. None \u2192 show catalog, ask to clarify.
- \`type:"error"\` \u2192 surface \`message\` verbatim (translated); for "no records",
  suggest \`jolli enable\`. Never fabricate.

### type: "recall" \u2014 full payload returned

You have a \`RecallPayload\` with these fields:

- \`branch\`, \`period: { start, end }\`, \`commitCount\`, \`totalFilesChanged\`,
  \`totalInsertions\`, \`totalDeletions\` \u2014 branch-level facts.
- \`commits[]\` \u2014 per-commit projection. Each carries:
  - identity (always present): \`hash\` (8-char display), \`fullHash\`, \`branch\`,
    \`commitDate\`, \`commitAuthor\`, \`commitMessage\`; optional \`commitType?\`,
    \`ticketId?\`.
  - \`diffStats?\` \u2014 \`{ filesChanged, insertions, deletions }\`.
  - \`recap?\` \u2014 1-3 paragraphs of plain-English narrative.
  - \`topics[]\` \u2014 each with **always present**: \`title\`, **\`decisions\` (\u2605)**;
    **may be absent**: \`trigger?\`, \`response?\`, \`todo?\`, \`filesAffected?\`,
    \`category?\`, \`importance?\`. Trimming rules differ by field:
    - \`response\` is **policy-trimmed unconditionally** when the branch
      ships more than 8 kept commits \u2014 raising \`--budget\` will not bring
      it back. Additionally, on tight budgets it may be dropped
      oldest-first on shorter branches.
    - \`trigger\` is only dropped by \`--budget\` (oldest-first); raising
      \`--budget\` can restore it.
    - \`decisions\` is never dropped from a kept commit (if the budget
      can't fit it, the whole commit is omitted from \`commits[]\`).
  - \`plans?\` \u2014 \`{ slug, title }[]\` refs only; \`slug\` is the **normalized
    base slug** that always resolves to an entry in payload-level \`plans\`.
  - \`notes?\` \u2014 \`{ id, title }[]\` refs only; \`id\` always resolves to an
    entry in payload-level \`notes\`. (Notes use \`id\`, not \`slug\` \u2014 they
    have no archive-suffix mechanism.)
- \`plans[]\` \u2014 branch-deduplicated plan bodies: \`{ slug, title, content? }\`.
  \`content\` may be absent under tight budget \u2014 when absent, the entry is
  still a valid grounding anchor but you can't quote from it.
- \`notes[]\` \u2014 same shape and trimming rule as plans.
- \`stats\`, \`estimatedTokens\`, \`truncated?\`.

Render in two parts (in order):

#### Part A \u2014 Forced fact opener (no paraphrase, no interpretation)

Render the loaded confirmation as a heading + bullet block (not a prose
line). **Facts only \u2014 do not interpret what the branch is "about" here.**
The mandated shape:

\`\`\`markdown
### Loaded \`feature/auth\`

- **Period:** 2026-04-10 \u2192 2026-04-15 (5 days)
- **Commits:** 8 (+312 \u221289, 24 files)
- **Captured:** 12 topics, 5 key decisions, 2 plans, 3 notes
\`\`\`

The heading + bullet shape is required \u2014 a single prose line blends into
the synthesis below and the user loses the visual anchor for verification.
Save interpretation for Part B.

#### Part B \u2014 Free-form synthesis

Pick whatever shape best serves the user's prompt: prose narrative,
chronological timeline, decision-focused bullet list, per-theme
\`###\` sections, side-by-side comparison, mixed. When multiple
distinct themes emerge across the commits, prefer \`###\` per theme \u2014
inline-bold paragraph prefixes blend into a wall under markdown
rendering. The principles below are the only constraints.

#### Universal principles (apply regardless of shape)

1. **Lead with the answer.** No "Let me analyze..." or "Found N commits..."
   preamble.

2. **Ground every concrete claim** to a hash and/or file. Use \`(abc12345)\`
   for hashes and \`[middleware/auth.ts](middleware/auth.ts)\` for files.

3. **Synthesize, don't dump \u2014 but DO use verbatim quotes from stored
   data.** Read everything; fold into coherent prose or bullets.
   Whenever a phrase from \`decisions\` / \`recap\` / \`plans[].content\` /
   \`notes[].content\` captures the answer more compactly than your
   paraphrase, quote it verbatim in **bold** with attribution.

   Quote **complete clauses (typically 10-30 words)** \u2014 not 2-3 word
   fragments that depend on your surrounding paraphrase to mean
   anything. The reader should be able to skim the bold quote alone
   and understand its claim. Format, embedded in narrative:

   *The design chose JWT because* **"the stateless model lets us scale
   horizontally without a shared session store across regions"**
   *(decisions, abc12345)*; *per the auth-redesign plan,* **"all session
   tokens must be opaque, with no client-readable claims, so rotation
   never breaks the API"** *(plan: auth-redesign)*.

   **Bold = verbatim from stored data.** Never use bold for general
   emphasis. Quotes belong inside running prose or bullets that carry
   their own narrative \u2014 never as bare bullets stripped of context.
   Stringing bare quotes is the wall-of-fragments failure mode.

4. **Reply in the user's language.** Template is English; user-visible
   output matches the user.

5. **Don't expose machinery.** No "RecallPayload" / "commits array" /
   "JSON field" / "SearchHit" mentions.

6. **Brief by default \u2014 synthesize, don't dump every commit.** Skip
   routine commits and merge overlapping themes; aim for ~500 words
   on a typical branch, but favor section structure over compression.
   Never collapse \`###\` themes into inline-bold paragraph prefixes
   just to hit a word count \u2014 that produces a wall and defeats the
   structure's purpose. Branches with many distinct themes may
   legitimately run longer; a "deep dive" on a specific theme is
   opt-in.

#### Plan / note stubs on commits

When a commit carries \`plans?\` / \`notes?\` stubs, use the stub title as a
grounding anchor for narrative ("the auth-redesign plan guides this work").

**To quote from a plan or note body**, look up the matching entry in the
top-level \`plans\` / \`notes\` array by its \`slug\` (plans) or \`id\` (notes):

- If the entry has \`content\`: quote verbatim with \`(plan: <slug>)\` /
  \`(note: <id>)\` attribution if relevant to the user's prompt.
- If \`content\` is absent (budget trimming dropped the body): use **only**
  the title as a citation anchor \u2014 never fabricate a quote from a body
  you cannot see.

#### Empty / partial handling

- Empty \`commits\`: tell the user no records were found; suggest running
  \`jolli enable\` if they expected records.
- \`truncated: true\`: policy trims or budget enforcement dropped fields
  or commits. Policy trims drop \`importance: "minor"\` topics (and any
  commit whose every topic is minor) and drop \`topic.response\` when the
  branch ships more than 8 commits; budget trims drop oldest-first
  \`response\` / \`trigger\` / plan / note content. Mention it with a
  one-liner if the user asks for deeper detail; otherwise stay silent.

### type: "catalog" \u2014 branch lookup needed

Returned when no exact branch match was found. Has a \`branches[]\` array
with \`branch\`, \`commitCount\`, \`period\`, \`commitMessages\`, \`topicTitles?\`.
If a \`query\` field is present, semantic-match the user's input against
\`branch\`, \`commitMessages\`, and \`topicTitles\` (the highest-signal source);
support cross-language matching and time-relative queries.

- One match: re-run Step 1 with the chosen branch as the user-arg and
  continue from Step 2.
- Multiple matches: list candidates, ask user to choose.
- No matches: show the catalog, ask user to clarify.

### type: "error" \u2014 CLI returned a hard error

Has a \`message\` string. Common cases:

- Branch matched but its summaries failed to load.
- No records in the repo at all.
- Invalid argument or internal failure.

Surface the message verbatim to the user (translated into their language if
non-English). For "no records in this repo" specifically, suggest running
\`jolli enable\` if they expected records. Do NOT retry or fabricate a recall
payload from nothing.
`}function UI(){return`---
name: jolli-search
description: Search structured commit memories across all branches \u2014 decisions, topics, files. Use when the user wants to find prior decisions, related commits, or how a topic was handled before.
metadata:
  version: "${cr}"
  revision: 3
  vendor: "jolli.ai"
---

# Jolli Search

Search structured commit memories across every branch in this repo.
Lightweight BM25 index returns relevance-ranked hits \u2014 no two-phase catalog
scan required. For full context of a known branch, use jolli-recall instead.

## When to use

- "Has anyone dealt with X before?" / "How have we handled Y previously?"
- Looking for a past decision: "why did we choose X over Y?"
- Finding the commit related to a half-remembered ticket / file / topic.

## When NOT to use

- Need full context of a known branch \u2192 run jolli-recall.
- Looking at the current code \u2192 grep / read files directly.
- Need deep rationale/decisions for a specific branch \u2192 run jolli-recall on
  that branch (search hits are lightweight; full decisions live in recall).

## Step 1: Parse the query

Extract the natural-language query (any language). Optional: \`limit\` (integer,
default 20). Note: time/budget filters (\`--since\`, \`--budget\`) are not supported
on the search path \u2014 point users at jolli-recall for a full branch when they
need depth.

## Step 2: Get hits

### Preferred: MCP tool

If the \`search\` tool from the \`jollimemory\` MCP server is available, call it with:

\`\`\`json
{ "query": "<query>", "limit": 20 }
\`\`\`

Returns \`{ "hits": [ { type, title, snippet, branch, commitDate, slug, hash, score } ] }\`,
relevance-ranked (BM25). Proceed to Step 3 with these hits.

Match that tool by what it DOES, not by one host's spelling of it: Claude Code
prefixes it as \`mcp__jollimemory__search\`, while Codex exposes a bare \`search\`
inside the \`mcp__jollimemory\` namespace and loads MCP tools lazily \u2014 so an empty
first look is not proof it is absent.

### Fallback: CLI here-doc

Only if the jollimemory MCP server is not registered at all \u2014 NOT merely because
one spelling of the tool name is absent from your tool list. Prefer the MCP tool:
in a sandboxed agent this CLI path cannot write its search index cache, so it
rebuilds the whole index on every call. Then use:

${WS("search"," --format json")}

The CLI returns the same \`{ hits }\` envelope as the MCP tool.

**Failure handling**:
- If \`~/.jolli/jollimemory/run-cli\` does not exist: tell the user
  "Jolli not installed. Please install via \`npm install -g @jolli.ai/cli && jolli enable\`
  or install the Jolli VS Code extension." Do not attempt further processing.
- If the command output starts with \`error:\` or contains \`unknown command 'search'\`:
  the installed CLI is older than this skill. Tell the user
  "Your installed Jolli CLI is older than this skill \u2014 please run
  \`npm update -g @jolli.ai/cli\` (or update your VS Code extension), then retry."
  Do not attempt further processing.

Both paths produce the same \`{ hits }\` shape. Proceed to Step 3 regardless of
which path was used.

## Step 3: Render

\`hits\` are lightweight \u2014 no full decisions/recap per hit. For each relevant
hit you have:

- \`type\` \u2014 \`"commit"\` or \`"topic"\`
- \`title\` \u2014 one-sentence label
- \`snippet\` \u2014 short excerpt from the matching content
- \`branch\` \u2014 branch the hit belongs to
- \`commitDate\` \u2014 ISO 8601 date
- \`slug\` \u2014 human-readable identifier (for topics)
- \`hash\` \u2014 8-char short SHA (for commits)
- \`score\` \u2014 BM25 relevance score (internal; do not expose to the user)

**Universal principles** (apply regardless of shape):

1. **Lead with the answer.** No "Let me analyze..." or "Found N commits..." preamble.

2. **Ground every concrete claim** to its \`hash\` (commit hits) or \`slug\` +
   \`branch\` (topic hits). Use \`(abc12345)\` for hashes.

3. **Synthesize, don't dump \u2014 but DO use verbatim quotes from stored data.**
   Read everything; fold into coherent prose or bullets. Whenever a phrase from
   \`snippet\` captures the answer more compactly than your paraphrase, quote it
   verbatim in **bold** with attribution.

   Quote **complete clauses (typically 10-30 words)** \u2014 not 2-3 word fragments
   that depend on your surrounding paraphrase to mean anything. The reader
   should be able to skim the bold quote alone and understand its claim.
   Format, embedded in narrative: *the design chose JWT because*
   **"the stateless model lets us scale horizontally without a shared session store across regions"**
   *(snippet, abc12345)*.

   **Bold = verbatim from stored data.** Never use bold for general emphasis.
   Quotes belong inside running prose or bullets that carry their own narrative
   \u2014 never as bare bullets stripped of context. Stringing bare quotes is the
   wall-of-fragments failure mode.

4. **Reply in the user's language.** Template is English; user-visible output
   matches the user.

5. **Don't expose machinery.** No "BM25" / "SearchHit" / "hits array" / "score"
   mentions. Don't expose \`slug\` or internal field names either.

6. **Output shape is entirely your call.** Prose, compact list, timeline,
   per-theme sections \u2014 pick whatever serves the query. Every concrete claim
   must be groundable to a hash or branch.

7. **If the user needs the full decisions/rationale behind a hit**, tell them
   to run jolli-recall on that hit's \`branch\`.

**Empty hits** \u2192 tell the user nothing matched; suggest broader keywords or a
different phrasing. Do NOT mention BM25 or index internals.
`}function HI(){return`---
name: jolli-local-run
description: Run a Jolli workflow locally \u2014 your own agent executes the workflow's recipe (no Jolli LLM budget) and its file writes land in a git-backed Jolli Space via a branch and pull request that space-cli opens on this machine. Use when the user wants to run a Jolli workflow locally.
metadata:
  version: "${cr}"
  revision: 6
  vendor: "jolli.ai"
---

# Jolli Local Run

Run a Jolli **workflow** locally: *your* agent executes the workflow's recipe on
this machine (so it spends no Jolli LLM budget), Jolli supplies the recipe and
tracks the run, and the workflow's file writes are published to a git-backed
Jolli Space through an agent branch + pull request that space-cli commits and
pushes locally.

A workflow can be run locally only when its destination Space is **git-backed**
AND already **cloned** on this machine. Before starting, the user is told whether
the resulting PR will **auto-merge** or **open for team review**.

Drive the steps below in order. Prefer the Jolli MCP tools for the run lifecycle;
the eligibility check and the git operations go through the \`jolli\` CLI (via the
run-cli entry script the sibling skills also use).

${Lo}

## Step 1 \u2014 discover the runnable workflows

Run the eligibility helper and read its JSON:

\`\`\`bash
JOLLI_INVOKED_VIA=skill:local-run "$HOME/.jolli/jollimemory/run-cli" workflow local-run
\`\`\`

- \`{ "type": "workflows", "workflows": [ { "id": 7, "name": "Impact Analysis", "autoMerges": true|false }, ... ] }\`
  \u2014 the workflows runnable right now. **Offer only these.** Present each one to
  the user by its \`name\` (fall back to the \`id\` when \`name\` is absent), and tell
  them up front whether it will **auto-merge** the PR (\`autoMerges: true\`) or
  **open the PR for team review** (\`autoMerges: false\`). If the array is empty,
  tell the user there are no locally-runnable workflows (a workflow's destination
  must be a git-backed, already-cloned Space) and stop.
- \`{ "type": "workflow_cli_required", "installHint": "..." }\` \u2014 the workflow-cli
  plugin is missing. Tell the user to install it (run the \`installHint\`) and stop:

  \`\`\`bash
  npm i -g @jolli.ai/cli @jolli.ai/workflow-cli
  \`\`\`

- \`{ "type": "space_cli_required", ... }\` \u2014 the space-cli plugin is missing. Tell
  the user to install it and stop:

  \`\`\`bash
  npm i -g @jolli.ai/cli @jolli.ai/space-cli
  \`\`\`

- \`{ "type": "error", "message": "..." }\` \u2014 report the message and stop.

Have the user pick one workflow \u2014 list them by \`name\` (use your host's
interactive single-select tool if it has one \u2014 e.g. AskUserQuestion on Claude
Code \u2014 otherwise list them as text). Keep the chosen workflow's \`id\` for Step 2.

## Step 2 \u2014 start the run

Call the \`start_local_run\` tool (on Claude Code
\`mcp__jollimemory__start_local_run\`) with the chosen workflow's id, passed
**exactly as the helper returned it** \u2014 the backend's id is a number, so it stays
an unquoted number: \`{ "id": <workflow id> }\` (a string id/slug stays quoted).
Capture from its result:

- \`runId\` \u2014 the run handle for every later call.
- \`plan\` \u2014 the recipe steps your agent will execute.
- \`writeTarget\` \u2014 carries the server-derived \`workBranch\`, the destination Space,
  and the destination folder. Refer to the destination in user-facing prose by its
  **Space name / folder** only. Do **not** announce a backing repo \`owner/name\`, and
  do **not** present the \`workBranch\` as "the write target" \u2014 those are internal
  plumbing, not the destination's identity. The \`workBranch\` is passed verbatim to
  \`docs pull --branch\` in Step 3, but keep it framed as an internal detail. Do not
  inspect the clone's git remotes to name the destination. \`writeTarget.repo\` may be
  **empty** for a private Jolli-managed destination \u2014 that is normal, never an error,
  and never something to look up or narrate.

## Step 3 \u2014 check out the agent branch

Pull the destination clone onto the server-derived work branch:

\`\`\`bash
JOLLI_INVOKED_VIA=skill:local-run "$HOME/.jolli/jollimemory/run-cli" docs pull --branch <writeTarget.workBranch>
\`\`\`

**Always \`--branch\`. NEVER \`--agent\`.** The \`--agent\` mode runs a destructive
\`git clean -fdx\` that wipes untracked files; \`--branch\` checks out the
server-derived branch without cleaning. Do not substitute \`--agent\` under any
circumstances. \`docs pull\` fetches the destination write token internally \u2014 you
do **not** fetch or handle any token yourself.

## Step 4 \u2014 write the workflow's output

Execute the workflow's \`plan\` from Step 2, writing the output files under the
destination folder from \`writeTarget\`, inside the checked-out clone.

## Step 5 \u2014 local review gate (with heartbeats)

Nothing is committed or pushed until the human explicitly approves.

1. Send a heartbeat so the run's lease stays alive while the human reviews: call
   \`report_local_run_progress\` (on Claude Code
   \`mcp__jollimemory__report_local_run_progress\`) with \`{ "runId": "<runId>" }\`.
2. Show the working-tree diff of what the workflow wrote, and ask the user to
   review, edit if needed, and **explicitly approve** (or cancel).
3. When the user answers, send \`report_local_run_progress\` again.

Send the heartbeat **immediately before** asking and **immediately after** the
answer. Your turn is blocked while you wait for the human, so you cannot
heartbeat *during* the review \u2014 bracketing the approval prompt keeps the lease
fresh across the wait.

## Step 6 \u2014 on approval: publish and complete

1. Publish the branch as a pull request and capture the machine-readable result:

   \`\`\`bash
   JOLLI_INVOKED_VIA=skill:local-run "$HOME/.jolli/jollimemory/run-cli" docs publish --json
   \`\`\`

   \`--json\` prints exactly one JSON object on stdout (all human-readable progress
   goes to stderr) \u2014 parse that object; never scrape the human log for a PR number.
2. Verify the pull request landed on the server-derived work branch. \`docs publish\`
   reports the branch the PR was actually opened on as \`headBranch\` (present on both
   the public and the private/withheld paths); the run's server work branch is
   \`writeTarget.workBranch\` from Step 2. **When \`pushed\` is true, cross-check them
   deterministically** \u2014 do not eyeball it yourself:

   \`\`\`bash
   JOLLI_INVOKED_VIA=skill:local-run "$HOME/.jolli/jollimemory/run-cli" space verify-publish-branch <writeTarget.workBranch> <headBranch>
   \`\`\`

   It prints \`{ "match": true|false, "expected": "...", "actual": "..." }\` and exits
   non-zero when the branches differ or \`headBranch\` is missing. **If \`match\` is
   false, STOP** \u2014 the PR was opened on the wrong branch (usually because \`docs pull
   --branch <workBranch>\` in Step 3 was skipped, so space-cli generated its own
   \`jolli-<hex>\` branch). The backend cannot link the run to that PR, so it will
   **not** auto-merge and the articles will **never** publish. Tell the user the
   run-to-PR link is broken (published on \`<actual>\` instead of the expected
   \`<expected>\`) and **do NOT call \`complete_local_run\` as if the run succeeded** \u2014
   release the run with \`abandon_local_run\` (Step 7) or ask the user how to proceed.
   Skip this check only when \`pushed\` is false (nothing was published).
3. Call \`complete_local_run\` (on Claude Code
   \`mcp__jollimemory__complete_local_run\`), branching on what the publish JSON
   contained:
   - **PR refs present** (the JSON has a \`prNumber\` \u2014 a user-accessible
     destination): pass them through \u2014
     \`{ "runId": "<runId>", "prNumber": <prNumber>, "prUrl": "<prUrl>" }\`.
   - **PR refs withheld** (the JSON is \`"private": true\` with no \`prNumber\` \u2014 a
     private Jolli-managed destination whose backing repo the user cannot access):
     complete WITHOUT a PR reference \u2014 \`{ "runId": "<runId>" }\`. Do not invent,
     guess, or look up a \`prNumber\`; the run already knows its destination is private.
   - **Nothing published** (\`"pushed": false\`, e.g. \`"reason": "no-changes"\`): no PR
     was opened, so there is nothing to complete \u2014 tell the user the workflow produced
     no changes and release the run with \`abandon_local_run\` (Step 7).
4. Read the outcome and its links off \`complete_local_run\`'s result and report them.
   Every URL is read **verbatim** off the result \u2014 never construct, guess, or look up
   one. The result carries \`willAutoMerge\`, \`workflowUrl\`, \`runUrl\`, and (auto-apply
   ON only) a \`writtenArticles\` list of \`{ operation, path, url, active, ... }\`.
   - **Auto-apply on** (\`willAutoMerge: true\`): the destination auto-applies, so the PR
     is **set to auto-merge** and \u2014 once it does \u2014 the created/edited **articles are the
     artifact**. Treat \`willAutoMerge: true\` as the destination's *intent*, NOT a
     confirmation that the merge already completed \u2014 so do **not** flatly tell the user
     "PR auto-merged". Report what actually published, judged by each article's own state:
     for every \`writtenArticles\` entry that is still openable (\`active: true\` **and** a
     non-null \`url\`), present its URL as a published article. If an article is
     \`active: false\` or has \`url: null\`, publishing has **not** completed yet (the
     auto-merge and reindex may still be in progress) \u2014 tell the user that article is
     **not yet available**, never invent a URL, and note they can re-check shortly via the
     run URL or by re-running \`workflow run-status <runId>\`. Then present the workflow URL
     (\`workflowUrl\`) and the run URL (\`runUrl\`).
   - **PR left open for team review** (\`willAutoMerge: false\` \u2014 auto-apply off): the
     open **PR is the artifact**. Tell the user "PR left open for team review" and
     present the PR URL (\`prUrl\`), the workflow URL (\`workflowUrl\`), and the run URL
     (\`runUrl\`).
   - **Private Jolli-managed destination** (the result carries no \`prUrl\`): present the
     **article URLs only** (same \`active: true\` + non-null \`url\` rule) plus the workflow
     URL and run URL \u2014 never surface a repo or PR link the result did not carry. As with
     any auto-apply run, an article that is not yet \`active\` / lacks a \`url\` is **not yet
     available** (publishing still completing), not an error \u2014 say it will appear once
     published and offer the run URL to re-check.
5. Offer to open any reported URL in the user's default browser. For each URL the user
   chooses, shell:

   \`\`\`bash
   JOLLI_INVOKED_VIA=skill:local-run "$HOME/.jolli/jollimemory/run-cli" open-url <url>
   \`\`\`

   It prints one JSON line \`{ "opened": true|false, "url": "..." }\`. When \`opened\` is
   \`false\` (headless / no browser available) the URL is printed for the user to copy
   instead \u2014 that is normal, not a failure. Only \`https\` URLs are accepted. A URL
   whose origin is off Jolli's allowlist is refused (never launched) and printed
   instead \u2014 the result carries \`"refused": true\`; surface that URL for the user to
   open manually, not as an error.

## Step 7 \u2014 on cancel: abandon

If the user cancels at the review gate (or you must abort), release the run: call
\`abandon_local_run\` (on Claude Code \`mcp__jollimemory__abandon_local_run\`) with
\`{ "runId": "<runId>" }\`.

## If space-cli is missing at any point

Any \`docs\` command that prints an install hint (or the eligibility helper's
\`space_cli_required\` result) means the space-cli plugin is not installed. Tell the
user to install it and stop:

\`\`\`bash
npm i -g @jolli.ai/cli @jolli.ai/space-cli
\`\`\`
`}function BI(){return`---
name: jolli-remote-run
description: Run a Jolli workflow remotely \u2014 the Jolli backend executes the workflow server-side; this recipe triggers the run, monitors it to completion, reports the outcome (failed / cancelled / succeeded) with its article, PR, and workflow links, and offers to open any in your browser. Use when the user wants to run a Jolli workflow remotely (on the Jolli backend).
metadata:
  version: "${cr}"
  revision: 5
  vendor: "jolli.ai"
---

# Jolli Remote Run

Run a Jolli **workflow** remotely: the Jolli backend executes the workflow
server-side (it spends Jolli LLM budget, unlike a local run), and this recipe
triggers the run, monitors it to a terminal state, and reports what it produced \u2014
the still-active article URLs, the pull-request URL when the destination is
git-backed, and the workflow/run deep-links \u2014 then offers to open any of them.

Drive the steps below in order. Prefer the Jolli MCP tools for the run lifecycle \u2014
the run tools (\`run_remote_workflow\`, \`cancel_remote_workflow\`) have **no CLI
mirror** \u2014 and shell the \`jolli\` CLI (via the run-cli entry script the sibling
skills also use) only for the deterministic monitor and the browser-open helper.

Every URL is read **verbatim** off the run report \u2014 never construct, guess, or
look one up. A link that is not in the report was withheld on purpose (for
example, a private Jolli-managed destination omits the PR link but keeps the
article URLs); treat its absence as normal, never an error.

${Lo}

## Step 1 \u2014 identify the workflow to run

Determine which workflow the user wants to run and keep its numeric \`id\`.

- If the \`list_workflows\` tool is registered this session (on Claude Code
  \`mcp__jollimemory__list_workflows\`), call it to list the available workflows and
  present them to the user by \`name\` (use your host's interactive single-select
  tool if it has one \u2014 e.g. AskUserQuestion on Claude Code \u2014 otherwise list them as
  text). Keep the chosen workflow's \`id\`.
- Otherwise, ask the user which workflow to run and get its numeric \`id\`.

## Step 2 \u2014 confirm the run monitor is installed (before triggering)

The run trigger (\`run_remote_workflow\`) is a Jolli **backend** tool: it creates a
real, budget-spending run **even when the deterministic monitor is not installed**.
The monitor (\`workflow run-status\`, Step 4) is provided by the
\`@jolli.ai/workflow-cli\` plugin. So confirm that plugin is present **before**
triggering \u2014 otherwise a missing monitor would leave the run you are about to
create orphaned (still running server-side, with no way for this recipe to report
its outcome).

Run the plugin's eligibility helper purely as a presence probe and read its JSON:

\`\`\`bash
JOLLI_INVOKED_VIA=skill:remote-run "$HOME/.jolli/jollimemory/run-cli" workflow local-run
\`\`\`

- \`{ "type": "workflow_cli_required", "installHint": "..." }\` \u2014 the workflow-cli
  plugin is **not installed**. Do **not** trigger the run. Tell the user to install
  it (run the \`installHint\`) and stop:

  \`\`\`bash
  npm i -g @jolli.ai/cli @jolli.ai/workflow-cli
  \`\`\`

- **any other result** (\`workflows\`, \`space_cli_required\`, or \`error\`) \u2014 the plugin
  **is** installed (only its stub ever emits \`workflow_cli_required\`), so the monitor
  is available. Ignore the rest of this probe's output \u2014 it reports *local*-run
  eligibility, which does not gate a remote run \u2014 and proceed to Step 3.

## Step 3 \u2014 trigger the remote run

Call the \`run_remote_workflow\` tool (on Claude Code
\`mcp__jollimemory__run_remote_workflow\`) with the chosen workflow's id, passed as
an **unquoted number**: \`{ "id": <workflow id> }\` (add \`templateVariables\` only if
the workflow needs them). Capture \`runId\` from its result (\`{ "runId": "..." }\`) \u2014
that handle drives the monitor in Step 4.

## Step 4 \u2014 monitor the run to completion

Shell the deterministic monitor with the captured \`runId\`:

\`\`\`bash
JOLLI_INVOKED_VIA=skill:remote-run "$HOME/.jolli/jollimemory/run-cli" workflow run-status <runId>
\`\`\`

It polls the run to a terminal state (with backoff, so you do not drive the poll
loop yourself) and prints exactly one JSON line \u2014 the run report. Parse it:

- \`status\` \u2014 one of \`"succeeded"\`, \`"failed"\`, \`"cancelled"\`, \`"running"\`.
- \`openableUrls\` \u2014 an array of \`{ "kind": "workflow" | "run" | "article" | "pr", "url": "...", "label": "..." }\`.
  Only openable URLs appear here (active articles with a non-null url, a PR only
  when the payload carried one) \u2014 present exactly these, nothing more.
- \`cancel\` (cancelled runs) \u2014 \`{ "by": "...", "at": "..." }\` when known.
- \`troubleshooting\` (failed runs) \u2014 the actionable error detail.
- \`timedOut\` \u2014 \`true\` when the monitor stopped polling before the run reached a
  terminal state (see the "still running" case below).

If the command instead prints \`{ "type": "error", "message": "..." }\` (the run
could not be reached \u2014 platform tools off, or a transport failure), tell the user
the run status could not be retrieved and stop. That is a degraded outcome, not a
crash \u2014 the run may still be progressing server-side.

If instead the command exits non-zero and prints a prose install hint naming
\`@jolli.ai/workflow-cli\` (rather than a JSON report line), the workflow-cli plugin
is not installed. Tell the user to install it and stop:

\`\`\`bash
npm i -g @jolli.ai/cli @jolli.ai/workflow-cli
\`\`\`

## Step 5 \u2014 report the outcome

Report based on \`status\`:

- **succeeded** (\`status: "succeeded"\`): the run finished. Present the \`article\`
  URLs from \`openableUrls\` (each by its \`label\`), the \`pr\` URL if one is present,
  and the \`workflow\` and \`run\` deep-links. Never surface a link that is not in
  \`openableUrls\` \u2014 a missing PR link means the destination withheld it (a private
  Jolli-managed destination), which is normal.
- **failed** (\`status: "failed"\`): the run failed. Present the \`troubleshooting\`
  detail (the actionable error) and the \`workflow\` URL.
- **cancelled** (\`status: "cancelled"\`): the run was cancelled. Report who
  (\`cancel.by\`) and when (\`cancel.at\`) when present, plus the \`workflow\` URL.
- **still running** (\`status: "running"\` with \`timedOut: true\`): the monitor
  stopped polling before the run reached a terminal state \u2014 the run is **still
  running server-side**, not failed. Tell the user it is still in progress, present
  the \`workflow\` URL so they can watch it, and note they can re-check later by
  re-running \`workflow run-status <runId>\`.

## Step 6 \u2014 offer to open any reported URL

Offer to open any URL from the report in the user's default browser. For each URL
the user chooses, shell:

\`\`\`bash
JOLLI_INVOKED_VIA=skill:remote-run "$HOME/.jolli/jollimemory/run-cli" open-url <url>
\`\`\`

It prints one JSON line \`{ "opened": true|false, "url": "..." }\`. When \`opened\` is
\`false\` (headless / no browser available) the URL is printed for the user to copy
instead \u2014 that is normal, not a failure. Only \`https\` URLs are accepted. A URL whose
origin is off Jolli's allowlist is refused (never launched) and printed instead \u2014 the
result carries \`"refused": true\`; surface that URL for the user to open manually, not
as an error.

## Cancelling an in-flight run

While a remote run is still in progress, the user can stop it: call
\`cancel_remote_workflow\` (on Claude Code
\`mcp__jollimemory__cancel_remote_workflow\`) with the workflow's numeric id \u2014
\`{ "id": <workflow id> }\`. After cancelling, re-run \`workflow run-status <runId>\`
to report the cancelled outcome (who/when + workflow URL).
`}function WI(){return`---
name: jolli
description: The Jolli action menu \u2014 a single front door that lists the Jolli skills available in this session (recall, search, run a workflow local or remote, workflow history, plus any setup and account skills a Jolli plugin adds) and the Jolli MCP tools, then routes your choice to the right one. Use when the user types /jolli or asks for the Jolli menu.
metadata:
  version: "${cr}"
  revision: 9
  vendor: "jolli.ai"
---

# Jolli

The single umbrella action menu for Jolli. It ties together the standalone Jolli
skills and whatever Jolli MCP tools are registered in this session, and routes the
user's choice to the right one. It is a friendly front door \u2014 it **never**
re-implements any action, it only invokes an existing skill or an existing MCP
tool. The standalone \`/jolli-recall\`, \`/jolli-search\` commands and
the \`/mcp__jollimemory__jolli\` prompt all keep working unchanged; this is layered
on top of them, not a replacement.

The **Workflow history** action below shells the \`jolli\` CLI (via the run-cli
entry script), so the shell prerequisite applies when that action is used.

${Lo}

## Step 1 \u2014 build the unified menu

Assemble ONE combined list of actions from two sources.

### Local Jolli skills

Offer the \`jolli-*\` skills that are ACTUALLY AVAILABLE in this session, not a
fixed list \u2014 exactly as with the MCP tools below. The four described here ship
everywhere, so they are documented in full; a host that also has a Jolli plugin
installed (Cursor, Codex, Claude Code) additionally exposes setup, account and
dashboard skills such as \`jolli-init\`, \`jolli-login\`, \`jolli-logout\`,
\`jolli-status\`, \`jolli-dashboard\`, \`jolli-timeline\` and \`jolli-push\`.
Include whichever of those exist, named as this host invokes them, and route by
invoking the skill rather than restating its steps. If the user asks for something
one of them owns \u2014 setting Jolli up, signing in, checking installation health,
publishing this branch's memories \u2014 route there instead of answering that the menu
has no such action.

- **jolli-recall** \u2014 Recall prior development context for the current branch.
  Route by invoking the \`jolli-recall\` skill.
- **jolli-search** \u2014 Search structured commit memories across branches
  (decisions, topics, files). Route by invoking the \`jolli-search\` skill.
- **Run a workflow** \u2014 Run a Jolli workflow. When the user picks this, ask them
  **local vs remote**, defaulting to **local**:
  - **local (default)** \u2014 your agent executes the workflow's recipe on this
    machine (no Jolli LLM budget); the writes land in a git-backed Space via a
    branch + PR. Route by invoking the \`jolli-local-run\` skill.
  - **remote** \u2014 the Jolli backend executes the workflow server-side, and the run
    is monitored to completion and its result reported. Route by invoking the
    \`jolli-remote-run\` skill (which drives the \`run_remote_workflow\` tool for
    you) \u2014 not by calling the raw tool.

  A running **remote** run can be canceled with the \`cancel_remote_workflow\` MCP
  tool (\`mcp__jollimemory__cancel_remote_workflow\`) \u2014 offer this if the user
  wants to stop an in-flight remote run.
- **Workflow history** \u2014 Show a workflow's past runs. When the user picks this,
  identify the workflow's numeric id (if the \`list_workflows\` tool is registered
  this session, use it to let the user pick one by name; otherwise ask for the
  id), then shell:

  \`\`\`bash
  JOLLI_INVOKED_VIA=skill:jolli "$HOME/.jolli/jollimemory/run-cli" workflow runs <workflowId>
  \`\`\`

  It prints \`{ "type": "runs", "runs": [ ... ] }\` \u2014 one entry per run with its
  \`status\`, \`timestamp\`, and any \`workflowUrl\` / \`runUrl\` / \`prUrl\` /
  \`articleUrls\`. An empty \`runs\` list is the normal "no history yet" outcome, not
  an error. If instead the command exits non-zero and prints an install hint naming
  \`@jolli.ai/workflow-cli\` (rather than the JSON above), the workflow-cli plugin is
  not installed \u2014 tell the user to install it (\`npm i -g @jolli.ai/cli @jolli.ai/workflow-cli\`)
  and stop. Offer to open any listed URL via the \`open-url\` helper:

  \`\`\`bash
  JOLLI_INVOKED_VIA=skill:jolli "$HOME/.jolli/jollimemory/run-cli" open-url <url>
  \`\`\`

  (\`{ "opened": true|false, "url": "..." }\`; \`opened: false\` on a headless host
  just prints the URL \u2014 normal, not a failure. Only \`https\` URLs are accepted. A URL
  whose origin is off Jolli's allowlist is refused (never launched) and printed \u2014 the
  result carries \`"refused": true\`; surface it for the user to open manually.)

Route a local, remote, or history choice by invoking that skill through your
host's skill-invocation mechanism (for example, the Skill tool in Claude Code);
the Workflow history action runs its \`run-cli\` commands directly as shown above.

### Jolli MCP tools (whatever is registered this session)

Surface every jollimemory MCP tool registered in the current session \u2014 for example
\`recall\`, \`search\`, \`get_pr_description\`, \`queue_status\`, and any
manifest-driven platform tools (space, article, and the like). Route a choice by
calling the matching tool.

**How to find them depends on the host.** On Claude Code they are prefixed, so
match names starting with \`mcp__jollimemory__\`. On Codex the same tools are BARE
names inside the \`mcp__jollimemory\` namespace, so a prefix match finds nothing \u2014
look for the namespace instead, and note that Codex loads MCP tools lazily, so
search your available tools before concluding none are registered.

**Exclusions \u2014 do NOT surface these as standalone menu items:**

- \`list_workflow_definitions\` \u2014 discovery/plumbing, not a human quick-action.
- \`run_remote_workflow\` and \`cancel_remote_workflow\` \u2014 these are already covered
  by the **Run a workflow** action above (its *remote* path and its cancellation
  option); don't list them again as raw tools.

Do NOT assume a fixed list \u2014 enumerate the Jolli MCP tools that are actually
registered right now, minus the exclusions above. Do NOT try to fetch or
re-derive any backend "menu" curation; a skill cannot read the manifest, so
simply surface the Jolli MCP tools present in the session. If no Jolli MCP tools
are registered, present just the local skills above.

## Step 2 \u2014 route the request

This skill takes one optional free-text argument.

- **Argument provided** \u2192 match it to exactly one menu action and invoke that
  action directly (invoke the skill, or call the MCP tool). Only ask the user to
  choose if the request is ambiguous or matches no menu action.
- **Argument absent** \u2192 present the unified menu and let the user pick one, using
  an interactive single-select tool if your host provides one (for example
  AskUserQuestion in Claude Code); otherwise list the options as plain text and
  ask the user to choose. After the user selects, invoke the corresponding skill
  or MCP tool.

Host-agnostic by design: the AskUserQuestion mention is only an example; the
text-list fallback keeps \`/jolli\` usable on every host that loads skills.
`}function JS(){return`---
name: jolli
description: The Jolli front door \u2014 checks how Jolli is set up in this repo, guides first-time setup through /jolli:init when something's missing, reminds you to sign in when memories can't sync yet, and otherwise shows a status snapshot and routes you to the right Jolli skill or MCP tool. Use when the user types /jolli or asks for Jolli / the Jolli menu.
metadata:
  version: "${cr}"
  revision: 10
  vendor: "jolli.ai"
---

# Jolli

The single front door for Jolli. Rather than dumping a static list, it reads how
Jolli is set up in THIS repo and guides the next step: if setup is incomplete it
walks the user into \`/jolli:init\`; if memories are being captured but cannot be
shared yet it reminds the user to sign in; once everything is wired it shows a
short status snapshot and routes the user's choice to the right skill or Jolli
MCP tool. It is a friendly front door \u2014 it **never** re-implements any action, it
only reads status and invokes an existing skill or an existing MCP tool. The
standalone \`/jolli:init\`, \`/jolli:recall\`, \`/jolli:search\`, \`/jolli:push\`,
\`/jolli:dashboard\`, \`/jolli:login\`, \`/jolli:logout\`, \`/jolli:status\` and
\`/jolli:timeline\` entry points all keep working unchanged; this is layered on
top of them, not a replacement.

## Step 0 \u2014 confirm this menu can route

This menu is a project skill written OUTSIDE the Jolli plugin (a plugin skill
could only ever be \`/jolli:<name>\`, never a bare \`/jolli\`), so it can linger
in \`.claude/skills/jolli/\` after the plugin has been uninstalled. It can only
route to targets that exist in THIS session, so before doing anything else
confirm at least one routing target is available. The menu can route if
**either** of these holds:

- one or more MCP tools whose name contains \`jollimemory\` are registered, **or**
- the plugin's own namespaced skills (\`jolli:init\` / \`jolli:recall\` /
  \`jolli:search\` / \`jolli:push\` / \`jolli:dashboard\`) are invocable this
  session.

If **either** holds, proceed to Step 1.

If **neither** holds, do **not** build the menu and do **not** invoke any
\`/jolli:*\` skill \u2014 it is not registered and the call will fail. But this alone
does NOT mean Jolli is gone: the Jolli CLI installs a memory pipeline that runs
independently of this plugin (git hooks that generate memories on every commit).
So distinguish the two cases \u2014 check whether the bundled CLI dispatch exists by
running \`test -f "$HOME/.jolli/jollimemory/run-cli" && echo present\`:

- **CLI present** \u2192 Jolli still works; only the plugin's interactive menu is not
  loaded in this session. Tell the user plainly: the Jolli plugin menu isn't
  loaded here, but the Jolli CLI is still installed \u2014 commits still generate
  memories, and they can run \`jolli recall\` / \`jolli search\` directly. This
  \`/jolli\` file is a leftover from a previous plugin install; they can remove
  it with \`rm -rf .claude/skills/jolli\`, and reinstall the Jolli plugin to
  bring the menu back.
- **CLI absent** \u2192 Jolli is no longer installed at all. Tell the user this
  \`/jolli\` menu is a stale leftover; they can remove it with
  \`rm -rf .claude/skills/jolli\`, and (re)install Jolli to bring it back.

Either way, then stop \u2014 do not continue to Step 1.

## Step 1 \u2014 read how Jolli is set up

Before deciding what to show, read the current state so you can guide instead of
guessing. This is the state-aware front door \u2014 not a static list.

**Preferred (MCP):** call the \`status\` tool (on Claude Code
\`mcp__jollimemory__status\`) with no arguments. From its result read:

- \`enabled\` \u2014 are Jolli's git hooks installed in this repo (is memory
  generation on)?
- \`account.signedIn\` \u2014 is the user signed in to Jolli?
- \`account.jolliApiKeyConfigured\` \u2014 is a stored Jolli API key present? Surfaced
  ONLY when signed OUT (a sign-in already implies a Jolli credential, so the field
  is omitted once \`account.signedIn\` is true).
- \`account.anthropicKeyConfigured\` \u2014 is an Anthropic key present? Surfaced ONLY
  when \`account.aiProvider === "anthropic"\`; omitted for every other provider.
- \`account.aiProvider\` \u2014 \`"local-agent"\` | \`"jolli"\` | \`"anthropic"\` | \`null\`.
  Drives the provider-aware generation check in Step 2.
- \`account.localAgentTool\` \u2014 label of the local agent CLI that generates
  summaries (e.g. "Claude Code"). Surfaced ONLY when
  \`account.aiProvider === "local-agent"\`; feeds the snapshot's engine suffix.
- \`account.site\` \u2014 the Jolli site host, for the snapshot line.
- \`storedMemories\` \u2014 how many memories this repo already has.
- \`space\` \u2014 the bound Jolli Space (\`{ name }\`) this repo's memories sync to, or
  \`null\` when the repo isn't bound yet. Drives the \`syncing \xB7 Space\` snapshot line.

**Fallback (CLI):** if the \`status\` MCP tool is unavailable (an older Jolli),
run the bundled CLI through its stable dispatch script and read the same facts
from its printed output:

\`\`\`bash
JOLLI_INVOKED_VIA=skill:jolli "$HOME/.jolli/jollimemory/run-cli" status
\`\`\`

If neither the tool nor the CLI can be reached at all, skip the state-based
guidance and go straight to Step 3's menu (present it without a snapshot).

Note: \`status.space\` is display-only \u2014 it names the bound Space for the snapshot
but does NOT confirm push health. Full binding management (picking / re-binding a
Space) stays \`/jolli:init\`'s and \`/jolli:push\`'s job; do not try to (re)bind here.

## Step 2 \u2014 guide by state (the front door)

Derive two capabilities from Step 1, mirroring the CLI's guided front door:

- **can generate memories** \u2014 provider-AWARE, NOT a blind OR of every field.
  Read \`account.aiProvider\` and decide:
  - \`local-agent\` \u2192 **yes** (memories generate through the user's local agent CLI
    named by \`account.localAgentTool\` \u2014 no API key and no Jolli sign-in required).
    This is the plugin's default, so a freshly-installed plugin repo can already
    generate.
  - \`jolli\` \u2192 yes if \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.
  - \`anthropic\` \u2192 yes only if \`account.anthropicKeyConfigured\`.
  - \`null\` / unset \u2192 yes if \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.

  (For the Jolli proxy a sign-in DOES carry a generation credential \u2014 signing in
  mints a Jolli API key \u2014 which is why \`jolliApiKeyConfigured\` is omitted once
  signed in. For the \`anthropic\` provider, sign-in alone does NOT count.)
- **can sync memories** = \`account.signedIn\` OR \`account.jolliApiKeyConfigured\`.
  Provider-independent: syncing to a Jolli Space always needs a **Jolli**
  credential, so an Anthropic key never satisfies it. This axis is orthogonal to
  generation \u2014 the default \`local-agent\` repo generates fine while unable to
  sync, which is exactly the state the Step 2 sign-in nudge below exists for.
- **enabled** = the \`enabled\` flag.

Then take exactly one branch:

- **Not fully set up** \u2014 \`enabled\` is false, OR memories can't be generated:
  memory generation isn't wired yet, so lead with SETUP, not the action menu.
  State in one line what's missing (for example "not signed in, and memory
  generation is off for this repo"), then invoke the \`jolli:init\` skill through
  the Skill tool \u2014 it walks sign-in \u2192 enable \u2192 bind a Space in one guided pass.
  Do NOT hand-roll those steps here; \`/jolli:init\` owns them. (Exception: if the
  user gave an argument in Step 3 that clearly names a different action, honor
  that instead \u2014 see Step 3.)

- **Fully set up** \u2014 enabled AND a credential present: print a short snapshot,
  then continue to Step 3 to present the action menu.

  \`\`\`
  \u2713 signed in \xB7 <account.site> \xB7 summaries via <account.localAgentTool>
  \u2713 enabled \xB7 <storedMemories> memories
  \u2713 syncing \xB7 Space "<space.name>"    (ONLY when \`space\` is non-null; omit the whole line otherwise)

  Jolli is listening \u2014 last memory saved.
  \`\`\`

  Pick the FIRST line by state, mirroring the CLI front door's wording exactly:

  - signed in \u2192 \`\u2713 signed in \xB7 <account.site>\`, plus \` \xB7 summaries via
    <account.localAgentTool>\` when \`account.aiProvider\` is \`local-agent\`. Drop
    the \`\xB7 <site>\` segment when \`account.site\` is null.
  - not signed in, \`local-agent\` \u2192 \`\u2713 local agent set (not signed in to Jolli)\`.
  - not signed in, \`jolli\` \u2192 \`\u2713 Jolli API key set (not signed in to Jolli)\`.
  - not signed in, \`anthropic\` \u2192 \`\u2713 Anthropic API key set (not signed in to Jolli)\`.

  Render the \`\u2713 syncing \xB7 Space "<space.name>"\` line **only when \`space\` is
  non-null** \u2014 it means a \`git push\` auto-publishes this branch's memories to that
  Space (the pre-push hook does it). When \`space\` is null, drop that line entirely;
  do not print a "not bound" line here (binding is \`/jolli:init\`'s job).

  The closing \`Jolli is listening \u2014 \u2026\` line mirrors the CLI front door: use
  **"last memory saved."** when \`storedMemories\` > 0, or **"your next commit is your
  first memory"** when \`storedMemories\` is 0.

  If \`storedMemories\` is 0, still show the menu, but Step 3 leads it with
  \`/jolli:init\` (on a fresh repo recall / search would only return empty, so
  they must not be the default action).

### Sign-in nudge \u2014 only when **can sync** is false

Generation working does not mean memories are shared. When the user can generate
but **can sync** is false (the normal state of a fresh \`local-agent\` install),
add ONE line under the snapshot, mirroring the CLI front door's optional
sign-in step:

\`\`\`
Sign in to Jolli to sync memories to a Space? (/jolli:login \u2014 memory generation keeps running locally either way)
\`\`\`

Rules for the nudge:

- It is **non-blocking**. Never withhold the Step 3 menu waiting for an answer,
  and never treat "not signed in" as broken \u2014 the repo is capturing memories.
- Offer it **once** per invocation. If the user declines, drop it for the rest of
  the session and do not repeat it after later actions.
- If the user accepts, hand off to the existing login flow: tell them to run
  \`/jolli:login\` (a skill cannot invoke a slash command for them), or invoke
  \`jolli:init\` when they also want to bind a Space in the same pass. Do NOT run
  \`auth login\` yourself here \u2014 \`/jolli:login\` owns that flow.
- Skip the nudge entirely when **can sync** is true, and inside the "Not fully
  set up" branch (there \`/jolli:init\` already walks sign-in).

## Step 3 \u2014 route the request / present the menu

This skill takes one optional free-text argument.

- **Argument provided** \u2192 match it to exactly one action below and invoke that
  action directly (invoke the skill, or call the Jolli MCP tool), regardless of
  the Step 2 state \u2014 a specific request wins over the setup nudge. The invoked
  skill handles its own preconditions (for example \`/jolli:push\` will offer to
  bind a Space if the repo isn't bound). Only ask the user to choose if the
  request is ambiguous or matches no action.
- **Argument absent** \u2192 after the Step 2 guidance, present the action menu and
  let the user pick, using an interactive single-select tool if your host
  provides one (for example AskUserQuestion in Claude Code); otherwise list the
  options as plain text and ask. Bias the ordering to the state: when
  \`storedMemories\` is 0, lead with \`/jolli:init\` as the FIRST (default)
  option \u2014 finish setup / bind a Space, or just make the first commit \u2014 and
  demote recall / search below it, since on a fresh repo both would only
  return empty. When memories exist, lead instead with recall / search. Either
  way keep \`/jolli:init\` available for re-running setup or re-binding a Space.
  After the user selects, invoke the corresponding skill or MCP tool.

### Jolli plugin skills

List a plugin skill only if it was confirmed available in Step 0.

- **/jolli:init** \u2014 Set up Jolli for this repo: sign in if needed, enable memory
  generation, and bind the repo to a Jolli Space. Route by invoking the
  \`jolli:init\` skill.
- **/jolli:recall** \u2014 Recall prior development context for the current branch.
  Route by invoking the \`jolli:recall\` skill.
- **/jolli:search** \u2014 Search structured commit memories across branches
  (decisions, topics, files). Route by invoking the \`jolli:search\` skill.
- **/jolli:push** \u2014 Publish this branch's memories to a Jolli Space. Route by
  invoking the \`jolli:push\` skill.
- **/jolli:dashboard** \u2014 Open the local Jolli dashboard in a browser: the
  machine-wide view of memories, agent sessions, token spend and knowledge across
  every repository on this machine, plus the standup page. Route by invoking the
  \`jolli:dashboard\` skill. Machine-level, so it is worth offering even when THIS
  repo has no memories yet.

Route a local choice by invoking that skill through the Skill tool.

### Jolli plugin commands

The plugin also ships these as slash **commands**, so they belong in the menu \u2014
but a skill cannot invoke a command. Route a choice by telling the user to run
it (one line, with the command spelled out), or by calling the equivalent Jolli
MCP tool when one exists.

- **/jolli:login** \u2014 Sign in to Jolli so this repo can bind a Space and share
  memories. Surface this whenever **can sync** is false, even if the user did not
  pick it. Generation is unaffected by signing in.
- **/jolli:logout** \u2014 Clear the stored Jolli credentials.
- **/jolli:status** \u2014 Full installation / queue health. Prefer the \`status\` MCP
  tool when it is registered.
- **/jolli:timeline** \u2014 How one decision topic evolved. Prefer the
  \`get_decision_timeline\` MCP tool when it is registered.

### Jolli MCP tools (whatever is registered this session)

Surface every tool whose name contains \`jollimemory\` that is available in the
current session \u2014 for example \`recall\`, \`search\`, \`get_pr_description\`,
\`queue_status\`, \`status\`, and the Jolli Space tools (\`list_spaces\`,
\`bind_space\`, \`push_memory\`). Route a choice by calling the matching Jolli
MCP tool.

Do NOT assume a fixed list \u2014 enumerate the Jolli MCP tools that are actually
registered right now. If no Jolli MCP tools are registered, present just the
plugin skills above.
`}var M=f("Installer");function GI(e,t){return process.platform==="linux"?e===t:e.toLowerCase()===t.toLowerCase()}async function qI(e){let t=await re(),n=gS(t.globalInstructions);if(n.write){let r=e?.codexDetected??await ul(),o=e?.geminiDetected??await hl();await hS({claude:t.claudeEnabled!==!1,gemini:o&&t.geminiEnabled!==!1,codex:r&&t.codexEnabled!==!1})}else n.remove&&await yS()}async function KI(e,t,n){let r=async()=>{if(!await Qc())return!1;try{await nS()}catch(s){M.warn("Legacy dist-path migration failed (non-fatal): %s",s.message)}if(!await bo(e,t))return!1;try{let s=await tS();s.length>0&&M.info("Pruned stale dist-paths entries: %s",s.join(", "))}catch(s){M.warn("Pruning stale dist-paths failed (non-fatal): %s",s.message)}return!0},o=n?await _a(r,n):await _a(r);return o.acquired&&o.value===!0}async function qS(e,t){let n=e??process.cwd(),r=[],o=t?.integrationsOnly===!0,s=t?.repoHooksOnly===!0;if(o&&s)return{success:!1,message:"install: integrationsOnly and repoHooksOnly are mutually exclusive",warnings:r};if(!await Pn(n))return M.info("Skipping Jolli Memory install \u2014 %s is not inside a git work tree",n),{success:!1,message:`Not a git repository \u2014 skipping Jolli Memory install (${n})`,warnings:r};M.info(s?"Installing Jolli Memory repo hooks only (no integrations)":o?"Installing Jolli Memory integrations (no hooks)":"Installing Jolli Memory hooks");let i=null;try{let a=await re(),l=t?.automatic?[n]:await kr(n),c=t?.automatic?{timeoutMs:200,pollMs:25}:void 0,d=(0,hn.dirname)((0,GS.fileURLToPath)(__jmImportMetaUrl)),u=t?.source??"cli",p=t?.sourceTag??(u==="vscode-extension"?Yc(d):"cli");if(!Eo(p))return{success:!1,message:`Refusing to install with an unsafe source tag: ${JSON.stringify(p)}`,warnings:r};let m=Tf(p);if(!await KI(p,t?.distDir,c))return{success:!1,message:"Failed to reconcile the shared runtime registry \u2014 cannot install hooks that depend on it",warnings:r};if(!o){if(i=c?await xr(n,c):await xr(n),!i)return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:r};if(t?.respectManualDisable&&await Nt(n))return{success:!0,message:"Repository remains manually disabled",warnings:r,manuallyDisabled:!0};if(!t?.automatic)try{let A=await _f(p,a);A!==null&&(A.seededTool||A.seededProvider)&&M.info("Plugin init seeded localAgentTool=%s (source %s, seededTool=%s, seededProvider=%s)",A.tool,p,A.seededTool,A.seededProvider),A?.keptTool!==void 0&&M.info("Plugin init kept localAgentTool=%s (source %s drives %s; left alone)",A.keptTool,p,A.tool)}catch(A){r.push(`Could not record the local agent tool for this host: ${A.message}`)}}let g=s?!1:await ul(),h=s?!1:await hl(),T=s?!1:await Jm(),S=s?!1:await vf(),_=s?!1:await Lm(),R=s?!1:await Cm(),N=s?!1:await Tm()||await Em(),I=s?!1:await fl(),F=s?!1:await vl(),Se=s?!1:await ml(),De=s?!1:await _m(),Le=s?!1:await Km(),vt=s?!1:await am(),Gt=s?!1:await Ef(),At={};for(let A of l){let Rn=await ls(A),XE=(0,hn.join)(Rn,"sessions.json");try{await(0,Ui.writeFile)(XE,JSON.stringify({version:1,sessions:{}},null,"	"),{encoding:"utf-8",flag:"wx"})}catch(dt){dt.code!=="EEXIST"&&M.warn("Failed to bootstrap sessions.json in %s: %s",A,dt.message)}if(s){if(await kd(A),m==="claude"){if(await Li(A),await ji(A),await Hr(A,[...dr]),a.claudeEnabled!==!1){let dt=await Ka(A);(A===n||At.path===void 0)&&(At=dt)}}else if(m==="cursor"){let dt={claude:!1,codex:!1,cursor:!0,gemini:!1,opencode:!1,copilot:!1,copilotChat:!1,cline:!1,devin:!1,antigravity:!1,kimi:!1};await Td(A,dt),await Hr(A,lr(dt).flatMap(zE=>zE.gitExcludePaths()))}await Fi(A),await Un(A,[...Mi]);continue}await jS(A,{claudeEnabled:a.claudeEnabled});let nu={claude:a.claudeEnabled!==!1,codex:g,cursor:I,gemini:h,opencode:F,copilot:Se,copilotChat:R,cline:De,devin:Le,antigravity:vt,kimi:Gt};if(await tm(A,[...FS,...dr,...lr(nu).flatMap(dt=>dt.gitExcludePaths())]),await Td(A,nu),o||a.claudeEnabled===!1)continue;let sa=await Ka(A);sa.warning&&r.push(sa.warning),(A===n||At.path===void 0)&&(At=sa)}await OS({claude:!1,cursor:!1,codex:g||s&&m==="codex",gemini:h,opencode:F,copilot:Se,copilotChat:R,cline:De,devin:Le,antigravity:vt,kimi:Gt}),s||await qI({codexDetected:g,geminiDetected:h});let bn={},lt={},Ct={},Tn={},_n={};o||(bn=await nd(n),bn.warning&&r.push(bn.warning),lt=await rd(n),lt.warning&&r.push(lt.warning),Ct=await od(n),Ct.warning&&r.push(Ct.warning),Tn=await sd(n),Tn.warning&&r.push(Tn.warning),_n=await id(n),_n.warning&&r.push(_n.warning)),g&&a.codexEnabled===void 0&&(await ft({codexEnabled:!0}),M.info("Codex detected \u2014 enabled Codex session discovery"));let ct;if(h&&a.geminiEnabled!==!1){if(!o)for(let A of l){let Rn=await Zc(A);(A===n||ct===void 0)&&(ct=Rn.path)}a.geminiEnabled===void 0&&(await ft({geminiEnabled:!0}),M.info("Gemini detected \u2014 enabled Gemini session tracking"))}a.openCodeEnabled!==!1&&S&&a.openCodeEnabled===void 0&&(await ft({openCodeEnabled:!0}),M.info("OpenCode detected \u2014 enabled OpenCode session discovery"));let ra=s?!1:await Um(),wr=a.cursorEnabled!==!1&&T,Ho=a.cursorEnabled!==!1&&ra;(wr||Ho)&&a.cursorEnabled===void 0&&(await ft({cursorEnabled:!0}),M.info("Cursor detected (IDE=%s, CLI=%s) \u2014 enabled session discovery",wr,Ho));let oa=a.copilotEnabled!==!1&&_,W=a.copilotEnabled!==!1&&R;if((oa||W)&&a.copilotEnabled===void 0&&(await ft({copilotEnabled:!0}),M.info("GitHub Copilot detected (CLI=%s, Chat=%s) \u2014 enabled session discovery",oa,W)),N&&a.clineEnabled===void 0&&(await ft({clineEnabled:!0}),M.info("Cline detected \u2014 enabled Cline session discovery")),!s)for(let A of l)await VI(A);if(t?.source==="vscode-extension")M.info("Skipping v5 migration on vscode-extension source \u2014 Extension.ts owns it with UI");else if(s)M.info("Skipping v5 migration in repo-hooks-only mode \u2014 runs on every session start");else try{let A=await ry(n);M.info("Schema v5 migration: alreadyDone=%s fresh=%s migrated=%d skipped=%d",A.alreadyDone,A.fresh,A.migrated,A.skipped)}catch(A){M.warn("Schema v5 migration failed (non-fatal): %s",A.message)}if(t?.clearManualDisableOnSuccess&&!o)try{await Ia(n,!1)}catch(A){let Rn=A.message;r.push(`Enabled, but could not clear the manual-disable opt-out (${Rn}). Run enable again to clear it.`),M.warn("Could not clear manual-disable opt-out after enable (non-fatal): %s",Rn)}return M.info("Installation complete"),{success:!0,message:"Jolli Memory hooks installed successfully",warnings:r,claudeSettingsPath:At.path,gitHookPath:bn.path,postRewriteHookPath:lt.path,prepareMsgHookPath:Ct.path,postMergeHookPath:Tn.path,prePushHookPath:_n.path,geminiSettingsPath:ct}}catch(a){let l=`Installation failed: ${a.message}`;return M.error(l),{success:!1,message:l,warnings:r}}finally{i&&await i.release()}}async function VI(e){let t=j(e);try{await(0,Ui.stat)(t)}catch{return}let n=pe();if(GI((0,hn.resolve)(t),(0,hn.resolve)(n)))return;let r=await Xt(t),o={};for(let[c,d]of Object.entries(r))d!==void 0&&(o[c]=d);if(Object.keys(o).length===0)return;let s=await Xt(n),i={};for(let[c,d]of Object.entries(o))s[c]===void 0&&(i[c]=d);Object.keys(i).length>0&&await Mr(i,n);let a={};for(let c of Object.keys(i))a[c]=void 0;Object.keys(a).length>0&&await Mr(a,t);let l=Object.keys(o).filter(c=>!(c in i));for(let c of l)M.warn("Worktree %s field %s not migrated: worktree=%s, global=%s (global value takes effect)",e,c,String(o[c]),String(s[c]));M.info("Migrated %d config fields from worktree %s to global",Object.keys(i).length,e)}async function KS(e,t){let n=e??process.cwd(),r=[],o=t?.integrationsOnly===!0;M.info(o?"Removing Jolli Memory integrations (MCP)":"Removing Jolli Memory hooks");let s=null;try{if(!o&&!t?.repoLockHeld&&(s=await xr(n),!s))return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:r};!o&&t?.persistManualDisable&&await Ia(n,!0);let i;try{i=await kr(n)}catch{i=[n]}if(o){for(let l of i)try{await _d(l)}catch(c){M.warn("MCP removal failed in %s (non-fatal): %s",l,c.message)}return M.info("Integrations removal complete"),{success:!0,message:"Jolli Memory integrations removed (MCP)",warnings:r}}for(let l of i){let c=await Va(l);c.warning&&r.push(c.warning),await ed(l);try{await _d(l)}catch(d){M.warn("MCP removal failed in %s (non-fatal): %s",l,d.message)}t?.preserveMenu||await HS(l),await Fi(l),await Un(l,[...Mi])}let a=await ad(n);return a.warning&&r.push(a.warning),await ld(n),await cd(n),await dd(n),await ud(n),t?.preserveMenu||await Un(n,$S),r.push("The `jolli-*` skill files were left in place. To remove them manually: `rm -rf .agents/skills/jolli-* .claude/skills/jolli-*` and delete the `# >>> jolli skill exclude >>>` block from `.git/info/exclude` if you no longer want it."),M.info("Uninstallation complete"),{success:!0,message:"Jolli Memory hooks removed successfully",warnings:r}}catch(i){let a=`Uninstallation failed: ${i.message}`;return M.error(a),{success:!1,message:a,warnings:r}}finally{s&&await s.release()}}w();function Hi(){return new Promise((e,t)=>{let n=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",r=>n.push(r)),process.stdin.on("end",()=>{process.stdin.destroy(),e(n.join(""))}),process.stdin.on("error",t)})}var zi=require("node:fs/promises"),yE=require("node:path");w();ce();be();w();Vn();te();function ur(e){if(!e.startsWith("sk-jol-"))return null;let t=e.slice(7);if(!t.includes("."))return null;for(let n of t.split("."))try{let r=Buffer.from(n,"base64url").toString("utf-8"),o=JSON.parse(r);if(typeof o.t=="string"&&typeof o.u=="string")return{t:o.t,u:o.u,...typeof o.o=="string"?{o:o.o}:{}}}catch{}return null}var YI=["jolli.ai","jolli.dev","jolli.cloud","jolli-local.me"];function Bi(e){let t;try{t=new URL(e)}catch{throw new Error(`Rejected Jolli origin (unparseable): ${e}`)}if(!XI(t))throw new Error(`Rejected Jolli origin "${t.origin}". Only https://*.jolli.ai, https://*.jolli.dev, https://*.jolli.cloud, and https://*.jolli-local.me are permitted.`)}function XI(e){let t=e.hostname.toLowerCase();return e.protocol==="https:"&&t!==""&&YI.some(n=>t===n||t.endsWith(`.${n}`))}var V=class extends Error{constructor(t){super(t),this.name="LocalAgentSetupError"}},yn=class extends V{constructor(t){super(t),this.name="LocalAgentModelRefusedError"}},Ue=class extends Error{constructor(t){super(t),this.name="LocalAgentAuthError"}},kt=class extends Error{constructor(t){super(t),this.name="LocalAgentTransientError"}};var zI=new Map;function pr(e){zI.set(e.id,e)}var fr=require("node:path");var He=require("node:fs"),Cd=require("node:os"),mr=require("node:path");w();Re();var Wi=f("ExecutableResolver"),QI=15*6e4,$o=null;function ZI(e){return e.split(`
`).map(t=>t.trim()).filter(Boolean)}function VS(e){return(e??"0").split(".").map(t=>Number.parseInt(t,10)||0)}function eP(e,t){let n=VS(e),r=VS(t);for(let o=0;o<Math.max(n.length,r.length);o++){let s=n[o]??0,i=r[o]??0;if(s!==i)return s>i}return!1}function tP(e){return[mr.posix.join(e,".local/bin"),"/usr/local/bin","/opt/homebrew/bin","/opt/homebrew/sbin",mr.posix.join(e,".npm-global/bin"),"/Applications/ChatGPT.app/Contents/Resources"]}function XS(e,t,n){if(n==="win32")return e;let r=e.split(":").filter(Boolean);return[...new Set([...r,...tP(t)])].join(":")}function nP(e,t,n){let r={...process.env};for(let o of Object.keys(r))o.toLowerCase()==="path"&&delete r[o];return r.PATH=n,Ee(e,[...t],{encoding:"utf8",env:r})}function rP(e,t,n={}){let r=n.home??(0,Cd.homedir)(),o=n.basePath??process.env.PATH??"",s=n.exists??He.existsSync,i=n.runFinder??nP,a=n.listDir??eE,l=[],c=t==="win32"?"where":"which",d=t==="win32"?[e.binName]:["-a",e.binName],u=XS(o,r,t);try{l.push(...ZI(i(c,d,u)))}catch(_){Wi.info("%s: `%s %s` found nothing (%s)",e.binName,c,d.join(" "),_.message)}let p=e.knownPaths(r,t).filter(s);l.push(...p);let m=[...new Set(l)];if(t!=="win32")return YS(e,m.length,m,[],p,u,":"),m.map(_=>({file:_}));let g=_=>_.toLowerCase().endsWith(".exe"),h=m.filter(_=>!g(_)),T=h.flatMap(_=>e.expandShim?.(_,{exists:s,listDir:a})??[]),S=QS([...m.filter(g).map(_=>({file:_})),...T]);return YS(e,S.length,S.map(jo),h,p,u,";"),S}var oP=[".exe",".cmd",".bat",".ps1",""];function zS(e,t){try{return(0,He.statSync)(e).isFile()?(t==="win32"||(0,He.accessSync)(e,He.constants.X_OK),!0):!1}catch{return!1}}function sP(e,t,n={}){let r=n.home??(0,Cd.homedir)(),o=n.basePath??process.env.PATH??"",s=n.exists??(d=>zS(d,t)),i=t==="win32"?mr.win32.join:mr.posix.join,a=XS(o,r,t).split(t==="win32"?";":":"),l=t==="win32"?oP:[""],c=[];for(let d of a)if(d)for(let u of l){let p=i(d,e.binName+u);s(p)&&c.push(p)}return c.push(...e.knownPaths(r,t).filter(s)),[...new Set(c)]}function st(e,t={}){let n=t.platform??process.platform,r=t.exists??(o=>zS(o,n));return t.overridePath?ZS(e,t.overridePath,n).list.some(o=>r(o.file)):t.candidates?t.candidates().length>0:sP(e,n,t).length>0}function QS(e){let t=new Set;return e.filter(n=>{let r=[n.file,...n.launchArgs??[]].join("\0");return t.has(r)?!1:(t.add(r),!0)})}function ZS(e,t,n){let r={list:[{file:t}],expanded:!1};if(n!=="win32"||t.toLowerCase().endsWith(".exe"))return r;let o=QS(e.expandShim?.(t,{exists:He.existsSync,listDir:eE})??[]);return o.length?{list:o,expanded:!0}:r}function iP(e,t){return t!=="win32"||e.toLowerCase().endsWith(".exe")?"":" On Windows this must be a real .exe \u2014 a .cmd/.ps1 launcher cannot be run directly."}function jo(e){return e.launchArgs?.length?`${e.file} ${e.launchArgs.join(" ")}`:e.file}function eE(e){try{return(0,He.readdirSync)(e)}catch{return[]}}function YS(e,t,n,r,o,s,i){Wi.info("%s discovery: %d candidate(s)=[%s]; shims=[%s]; knownPaths present=[%s] (searched %d PATH entries)",e.binName,t,n.join(", ")||"(none)",r.join(", ")||"(none)",o.join(", ")||"(none)",s.split(i).filter(Boolean).length)}function aP(e){let t=e.trim().split(/\s+/).filter(Boolean);return t.find(n=>/^v?\d+\./.test(n))??t[0]}function lP(e,t){try{let n=[...e.launchArgs??[],...t],r=Ee(e.file,n,{encoding:"utf8",timeout:1e4}),o=aP(r);return{ok:!!o,version:o}}catch{return{ok:!1}}}function it(e,t={}){let n=t.now??Date.now,r=`${e.binName} ${t.overridePath??""}`;if($o&&$o.key===r&&n()-$o.at<QI)return $o.result;let o=t.probe??(d=>lP(d,e.probeArgs)),s=t.platform??process.platform,i=t.overridePath?ZS(e,t.overridePath,s):null,a=i?.list??(t.candidates??(()=>rP(e,s)))(),l=null,c=[];for(let d of a){let u=o(d);if(!u.ok){c.push(jo(d));continue}(!l||eP(u.version,l.version))&&(l={file:d.file,version:u.version??"0",launchArgs:d.launchArgs})}if(!l){Wi.warn("No compatible %s: overridePath=%s; candidates=[%s]; failed probe `%s %s`=[%s]",e.binName,t.overridePath??"(none)",a.map(jo).join(", ")||"(none)",e.binName,e.probeArgs.join(" "),c.join(", ")||"(none)");let d=t.overridePath&&!i?.expanded?iP(t.overridePath,s):"";throw new V(t.overridePath?`Configured local agent path "${t.overridePath}" is not a working ${e.binName} CLI.${d}`:`No compatible ${e.binName} CLI found. Install/upgrade it, or switch the AI provider.`)}return Wi.info("Resolved %s executable: %s (v%s)",e.binName,jo(l),l.version),$o={at:n(),key:r,result:l},l}var tE={binName:"claude",knownPaths:(e,t)=>t==="win32"?[fr.win32.join(e,".local","bin","claude.exe"),fr.win32.join(e,".claude","local","claude.exe")]:[fr.posix.join(e,".local/bin/claude"),fr.posix.join(e,".claude/local/claude")],probeArgs:["--permission-mode","dontAsk","--version"]};function nE(e={}){return it(tE,e)}function rE(e={}){return st(tE,e)}w();ce();me();var ZJ=f("OptionalFlags");function gr(e,t){let n=[];for(let r of e)t?.has(r.id)||n.push(...r.args);return n}function cP(e,t){let n=t?.trim().toLowerCase()??"",r,o=-1,s=!1;for(let[i,a]of Object.entries(e??{})){let l=(a?.inputTokens??0)+(a?.cacheReadInputTokens??0),c=n!==""&&i.toLowerCase().includes(n);(l>o||l===o&&c&&!s)&&(r=i,o=l,s=c)}return r}var dP=["ANTHROPIC_API_KEY","ANTHROPIC_AUTH_TOKEN","ANTHROPIC_BASE_URL","CLAUDE_CODE_OAUTH_TOKEN","CLAUDECODE"],oE=[{id:"--strict-mcp-config",args:["--strict-mcp-config"]},{id:"--disable-slash-commands",args:["--disable-slash-commands"]},{id:"--setting-sources",args:["--setting-sources",""]}],Ji=class{constructor(){this.id="claude-code";this.optionalFlags=oE}discoverExecutable(t){return Promise.resolve(nE({overridePath:t}))}isPresent(t){return rE({overridePath:t})}buildInvocation(t,n){let r={...process.env};for(let s of dP)delete r[s];r[Me]="1";let o=Ge();return{file:t.file,args:[...t.launchArgs??[],"-p","--output-format","json",...n.model?["--model",n.model]:[],"--system-prompt",n.systemPrompt,"--tools","","--permission-mode","dontAsk","--no-session-persistence",...gr(oE,n.disabledFlagIds)],stdin:n.prompt,env:r,cwd:o}}parseResult(t,n){let r;try{r=JSON.parse(t)}catch{throw new V(`Could not parse Claude Code output as JSON (first 200 chars): ${t.slice(0,200)}`)}if(r.is_error){let i=r.api_error_status??0,a=r.result??r.subtype??"unknown",l=`Claude Code returned an error (status ${i}): ${a}`;throw i===401||i===403?new Ue(l):i===429||i>=500&&i<600?new kt(l):i===404?new yn(l):/log ?in|logged in|unauthori|authenticat|invalid api key/i.test(a)?new Ue(l):new V(l)}let o=r.usage??{},s=cP(r.modelUsage,n);return{text:r.result??"",inputTokens:o.input_tokens??0,outputTokens:o.output_tokens??0,cachedTokens:(o.cache_read_input_tokens??0)+(o.cache_creation_input_tokens??0),costUsd:r.total_cost_usd??0,stopReason:r.stop_reason??null,...s!==void 0&&{model:s}}}};var qi=require("node:path");var uP=300;function pP(e){let t=e.trim();if(!t.startsWith("{"))return null;try{let n=JSON.parse(t);return typeof n?.status=="number"?n:null}catch{return null}}function sE(e,t){let n=e.slice(0,uP),r=pP(e);if(r){let o=r.status,s=r.error?.message??"",i=!!t&&s.includes(`'${t}'`);if(o===401)return new Ue(`Codex auth error: ${n}`);if(o===429||o>=500&&o<600)return new kt(`Codex run failed: ${n}`);if(o>=400&&o<500&&i)return new yn(`Codex refused the model '${t}': ${n}`);if(o===403)return new Ue(`Codex auth error: ${n}`)}return/log ?in|logged in|unauthori|authenticat/i.test(n)?new Ue(`Codex auth error: ${n}`):new kt(`Codex run failed: ${n}`)}var iE={binName:"codex",knownPaths:(e,t)=>t==="win32"?[qi.win32.join(e,".local","bin","codex.exe")]:[qi.posix.join(e,".local/bin/codex")],probeArgs:["--version"]},aE=[{id:"--disable",args:["--disable","plugins"],matches:["--disable","Unknown feature flag: plugins"]}],Gi=class{constructor(){this.id="codex";this.optionalFlags=aE}discoverExecutable(t){return Promise.resolve(it(iE,{overridePath:t}))}isPresent(t){return st(iE,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.OPENAI_API_KEY,delete r.OPENAI_BASE_URL,r[Me]="1";let o=Ge(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"exec","--json","--skip-git-repo-check","-s","read-only","-C",o,...gr(aE,n.disabledFlagIds),...n.model?["-m",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t,n){let r="",o=0,s=0,i=0,a=!1,l;for(let c of t.split(`
`)){let d=c.trim();if(!d)continue;let u;try{u=JSON.parse(d)}catch{continue}a=!0;let p=u.type??"";if(p==="turn.failed")throw sE(u.message??u.error?.message??d,n);if(/error/i.test(p)){l??=u.message??u.error?.message??d;continue}if(p==="item.completed"&&u.item?.type==="agent_message"){let m=u.item.text;m&&(r=m)}p==="turn.completed"&&u.usage&&(o=u.usage.input_tokens??o,s=u.usage.output_tokens??s,i=u.usage.cached_input_tokens??i)}if(!a)throw new V(`Codex produced no JSONL events (first 200 chars): ${t.slice(0,200)}`);if(l!==void 0&&r.trim()==="")throw sE(l,n);return{text:r,inputTokens:o,outputTokens:s,cachedTokens:i,costUsd:0,stopReason:null}}};var at=require("node:path");function mP(e,t){let n=at.win32.join(at.win32.dirname(e),"versions");return[...t.listDir(n)].sort().reverse().flatMap(o=>{let s=at.win32.join(n,o,"node.exe"),i=at.win32.join(n,o,"index.js");return!t.exists(s)||!t.exists(i)?[]:[{file:s,launchArgs:["--use-system-ca",i]},{file:s,launchArgs:[i]}]})}function fP(e,t=process.env){return t.LOCALAPPDATA||at.win32.join(e,"AppData","Local")}function gP(e,t,n){return t!=="win32"?[at.posix.join(e,".local/bin/cursor-agent")]:[at.win32.join(fP(e,n),"cursor-agent","cursor-agent.cmd"),at.win32.join(e,".local","bin","cursor-agent.exe")]}var lE={binName:"cursor-agent",knownPaths:gP,probeArgs:["--version"],expandShim:mP},Ki=class{constructor(){this.id="cursor-agent"}discoverExecutable(t){return Promise.resolve(it(lE,{overridePath:t}))}isPresent(t){return st(lE,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.CURSOR_API_KEY,r[Me]="1";let o=Ge(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"-p","--output-format","json","--trust",...n.model?["--model",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t){let n;try{n=JSON.parse(t)}catch{throw new V(`Could not parse Cursor output as JSON (first 200 chars): ${t.slice(0,200)}`)}if(n.is_error){let o=n.result??n.subtype??"unknown",s=`Cursor returned an error: ${o}`;throw/log ?in|logged in|unauthori|authenticat|not_logged_in/i.test(o)||/auth/i.test(n.subtype??"")?new Ue(s):new V(s)}let r=n.usage??{};return{text:n.result??"",inputTokens:r.inputTokens??0,outputTokens:r.outputTokens??0,cachedTokens:(r.cacheReadTokens??0)+(r.cacheWriteTokens??0),costUsd:0,stopReason:n.subtype??null}}};var dE=require("node:fs"),wn=require("node:path");Da();var hP=24e3,yP=1e6,wP="jolli-context.md",SP=["---","name: jolli-task","description: Full task context for this run; follow the instructions it contains.","---"].join(`
`),EP="Follow the instructions in your agent definition and output only what they ask for \u2014 no preamble, no commentary.";function bP(e,t){return t!=="win32"?[wn.posix.join(e,".local/bin/kimi")]:[wn.win32.join(e,".kimi-code","bin","kimi.exe"),wn.win32.join(e,".local","bin","kimi.exe")]}var cE={binName:"kimi",knownPaths:bP,probeArgs:["--version"]},Vi=class{constructor(){this.id="kimi"}discoverExecutable(t){return Promise.resolve(it(cE,{overridePath:t}))}isPresent(t){return st(cE,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.MOONSHOT_API_KEY,delete r.MOONSHOT_BASE_URL,r[Me]="1";let o=Ge(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],...n.model?["--model",n.model]:[],"--output-format","stream-json"];if(s.length<=hP)return{file:t.file,args:[...i,"--prompt",s],stdin:"",env:r,cwd:o};let a=(0,wn.join)(o,wP);(0,dE.writeFileSync)(a,`${SP}
${Oa(s,yP)}`,"utf-8");let l=[...i,"--agent-file",a,"--prompt",EP];return{file:t.file,args:l,stdin:"",env:r,cwd:o}}parseResult(t){let n="";for(let r of t.split(`
`)){let o=r.trim();if(!o)continue;let s;try{s=JSON.parse(o)}catch{continue}s.role==="assistant"&&typeof s.content=="string"&&s.content&&(n=s.content)}if(!n)throw new V(`Kimi produced no assistant output (first 200 chars): ${t.slice(0,200)}`);return{text:n,inputTokens:0,outputTokens:0,cachedTokens:0,costUsd:0,stopReason:null}}};var Sn=require("node:path");function TP(e,t){let n=Sn.win32.dirname(e),r=Sn.win32.join(n,"node_modules","opencode-ai","bin","opencode.exe");return t.exists(r)?[{file:r}]:[]}var uE={binName:"opencode",knownPaths:(e,t)=>t==="win32"?[Sn.win32.join(e,".opencode","bin","opencode.exe"),Sn.win32.join(e,".local","bin","opencode.exe")]:[Sn.posix.join(e,".local/bin/opencode")],probeArgs:["--version"],expandShim:TP},pE=[{id:"--pure",args:["--pure"]}],Yi=class{constructor(){this.id="opencode";this.optionalFlags=pE;this.unnamedFlagFailures=!0}discoverExecutable(t){return Promise.resolve(it(uE,{overridePath:t}))}isPresent(t){return st(uE,{overridePath:t})}buildInvocation(t,n){let r={...process.env};r[Me]="1",r.OPENCODE_DISABLE_CLAUDE_CODE="1";let o=Ge(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"run",...gr(pE,n.disabledFlagIds),...n.model?["--model",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t){let n=t.trim();if(!n)throw new V("OpenCode produced no output.");return{text:n,inputTokens:0,outputTokens:0,cachedTokens:0,costUsd:0,stopReason:null}}};pr(new Ji);pr(new Ki);pr(new Gi);pr(new Yi);pr(new Vi);w();Re();var DG=f("LocalAgentRunner"),LG=15*6e4;Bs();var xd=`  - Subject and tense: third person, past tense, with a concrete subject. Use "The developer added...", "This commit (or batch of commits) introduced...", "The login page now ...", or "Users can now ...". FORBIDDEN subjects: "the tool", "the LLM", "the system", "the model", "the AI" -- never anthropomorphize the generator. Never "I" or "we".
  - Describe WHAT changed and what users can now do differently. Do NOT explain WHY technical choices were made -- that belongs in the decisions field. If a sentence connects clauses with any of the words below, it is almost certainly explaining WHY/HOW or contrasting an alternative -- rewrite to state only the outcome, even if the sentence becomes shorter:
      * Causal: "so", "because", "since" (when meaning "because"), "which means", "which forced", "in order to"
      * Contrastive: "rather than", "instead of", "as opposed to", "unlike before", "unlike previously"
    Note: words like "without" and "until" are NOT forbidden. They are fine when they describe a neutral spatial / contextual fact ("without leaving the page", "until the result satisfies the user"). They become a problem only when they implicitly criticise an old path ("...there was no way to fix it without re-running the entire flow from scratch") -- which is already covered by the broader rule "do not describe before-vs-after in the recap".
  - No code identifiers: no file paths, no function/class/variable names, no CLI flags, no inline code. Also forbidden: any internal field name or section label from this prompt or the data model (e.g. "decisions field", "topic count", "importance label", "recap block", "word ceiling", "trailing mention"). Also forbidden: references to how the generator works internally ("before labeling", "after parsing", "the tool decides", "marked as major"). The test: a colleague who uses the product but has never seen this codebase or this prompt should understand every sentence.
  - User-facing names ARE allowed and encouraged: product names, page names ("the login page"), feature names ("article reordering"), and widely-recognized UI element names ("the sidebar", "the Settings panel").
  - Meta-commits (changes to internal rules, prompts, configuration, or generation behavior the user does not directly interact with): describe the user-VISIBLE consequence -- what the user will see in future output or product behavior -- NOT the internal rule that changed. Translate mechanism statements like "the recap is now generated after the topic list" into user-facing outcomes like "future commit summaries will read more clearly: each recap covers fewer topics in greater depth". If you cannot identify a visible consequence for the user, this change may not warrant a recap at all.
  - Paragraph balance: when the recap has multiple paragraphs, each paragraph MUST contain at least 2 sentences. Single-sentence paragraphs alongside longer ones produce a fragmented finish -- expand the short one with concrete detail, or merge it into an adjacent paragraph. (A whole-recap-of-one-sentence is still fine for trivial single-change commits.)
  - Self-check (mandatory): before finalizing your output, mentally scan each sentence of your draft recap for the forbidden connectives listed above. For every match, rewrite that sentence to state only the visible outcome and drop the comparison/causation clause entirely. The lost information either belongs in the decisions field or should not be in the recap at all. If you have not done this scan, your output is not ready.`,Id=`  Recap anti-patterns (do NOT write like this):
  - BAD: "The way the tool selects topics was overhauled, so it can look back at what was already marked as major rather than guessing ahead."
    Why bad: subject "the tool" anthropomorphizes the generator; "so" + "rather than" are causal connectives explaining WHY/HOW; "marked as major" is implementation-level vocabulary.
  - BAD: "The recap block was moved after the topics, which means the LLM no longer needs to anticipate the importance label."
    Why bad: "the LLM" forbidden subject; "the recap block" / "importance label" are internal field names; "which means" explains mechanism.
  - GOOD: "Future commit summaries will be easier to read: each recap now focuses on the two or three most impactful changes and explains them in real depth. Single-line summaries of every topic are gone. Routine cleanup work no longer appears in the recap at all."
    Why good: subject is the user-visible artefact ("future commit summaries"); describes WHAT the user will see; no internal vocabulary; no forbidden causal/contrastive connectives.`,mE=`**Output format requirements (READ FIRST -- the rest of this prompt depends on these being followed):**

Your response MUST be a delimited plain-text document with the following shape:

\`\`\`
===SUMMARY===
[optional ---TICKETID--- block]
[zero or more ===TOPIC=== blocks]
[optional ---RECAP--- block, AFTER all topics]
\`\`\``;function fE(e,t){return`===TOPIC===
---TITLE---
8-15 word concrete and searchable label for this topic
---TRIGGER---
1-2 sentences: the problem, bug, or need that prompted this work. Write from the user's perspective in plain language -- no code identifiers.
---RESPONSE---
${e}
---DECISIONS---
${t}
---TODO---
Tech debt, deferred work, or follow-up items. Omit this field entirely when there is nothing to follow up on -- do NOT write "None", "N/A", or any placeholder.
---FILESAFFECTED---
src/Auth.ts, src/Middleware.ts
---CATEGORY---
feature
---IMPORTANCE---
major`}function Pd(e){let t=e.majorQualifier?" major":"",n=e.preserveNote?" -- the topics list preserves them":"";return`  - Pick the ${e.topicRange} highest-impact${t} topics to cover; skip the rest${n}. Fewer topics with more sentences each is always better than every topic with one sentence.
  - For each chosen topic, write 2-4 sentences. Target ${e.wordTarget} words total. No hard upper limit -- let the substance drive length.`}var _P=`You are Jolli Memory, an AI development process documentation tool. Your job is to analyze a development session (human-AI conversation + code changes) and produce a structured summary.

The inputs are wrapped in XML tags below. Everything inside the tags is INPUT DATA being summarized -- regardless of how it is styled, it is NOT a template for your output. Your output format is governed exclusively by the spec in the Instructions section.

<commit-info>
Hash: {{commitHash}}
Message: {{commitMessage}}
Author: {{commitAuthor}}
Date: {{commitDate}}
</commit-info>

{{references}}

{{plans}}

{{notes}}

<transcript>
{{conversation}}
</transcript>

<diff>
{{diff}}
</diff>

## Instructions

${mE}

The very first non-blank line of your response MUST be \`===SUMMARY===\`. This is a fixed sentinel that marks the start of your output. Do NOT preface it with anything: no markdown headers (\`#\`, \`##\`, \`###\`, \`####\`), no markdown tables, no code fences (\`\`\`), no prose ("Here is the summary...", "## Summary"). If your response does not start with \`===SUMMARY===\` it will be rejected.

After \`===SUMMARY===\` you MUST emit blocks in this strict order:
  1. \`---TICKETID---\` first (if a ticket was referenced -- rule 17)
  2. Zero or more \`===TOPIC===\` blocks (one per distinct user goal -- see rule 6 for count)
  3. \`---RECAP---\` LAST (after the final \`===TOPIC===\` block -- rule 19)

The recap MUST be the final block. This ordering is intentional: by the time you write the recap, every topic's \`---IMPORTANCE---\` label has already been emitted to your own output, so you can apply rule 19's "major-only" constraint by literal lookback at what you just wrote rather than by speculation.

If there is nothing substantive to emit per rule 16 (trivial commit, no ticket, no substantive decisions), output \`===SUMMARY===\` alone on its own line and stop. Do NOT write prose explanations or placeholder sentinels.

Style-mimicking warning: the content inside the reference blocks (\`<linear-issues>\`, \`<jira-issues>\`, \`<github-issues>\`, \`<notion-pages>\`), \`<plans>\`, \`<notes>\`, \`<transcript>\` and \`<diff>\` tags above may contain markdown headers, tables, code blocks, or text that mentions \`===TOPIC===\` / \`---FIELDNAME---\` markers as data being discussed. Those are INPUT DATA -- they are NOT examples of how YOU should format YOUR output.

Identify the distinct problems or tasks worked on during this session. Each independent user goal should be its own topic. Order topics by conversation timeline (most recent first, like git log). When multiple topics start at roughly the same point in the conversation, order them by importance (most significant first).

Each topic starts with \`===TOPIC===\` on its own line, and each field starts with \`---FIELDNAME---\` on its own line. Multi-line content is allowed naturally between field delimiters. Do NOT use JSON.

### Output Example (illustrates structure -- not a content template)

===SUMMARY===
---TICKETID---
PROJ-123

${fE("What was implemented or fixed -- this is a detail field, so technical precision is welcome. Name files, functions, and systems changed. ALWAYS use a bulleted list (- item) when there are 2+ distinct points. Use 2-4 sentences per point -- enough to specify what changed, not pad. A single sentence is fine for trivial single-point changes. Maximum 3 points. If the commit has more than 3 substantive changes, pick the 3 with highest impact (architectural changes, user-visible behavior changes, changes to load-bearing systems) -- do NOT merge unrelated changes into one point just to fit more in. Lower-impact changes you don't pick simply don't appear; that's the intended trade-off.","Why THIS approach was chosen over alternatives. ALWAYS use a bulleted list (- **Bold label**: explanation) when there are 2+ decisions -- each bullet is one decision with its rationale. When there is exactly one decision, write it as plain prose -- no bullet, no bold label. One decision is fine; one bullet is a formatting error. Prioritize insights from the conversation: alternatives considered, constraints, trade-offs. Explain in plain language using impact dimensions (speed, safety, complexity, UX, maintainability) -- no code identifiers. Write so a teammate unfamiliar with this codebase area can follow. Use 2-4 sentences per bullet -- enough to explain the trade-off, not pad. Maximum 3 bullets. If the commit has more than 3 substantive decisions, pick the 3 with highest impact (architectural choices, user-visible behavior changes, decisions that constrain future work) -- do NOT merge unrelated decisions into one bullet just to fit more in. Lower-impact decisions you don't pick simply don't appear; that's the intended trade-off.")}

===TOPIC===
[Repeat the ===TOPIC=== block above for each additional topic the commit warrants per rule 6's count guidance. The example shows ONE block for brevity -- do not let that anchor your output to a single topic when the diff covers multiple goals.]

---RECAP---
The developer added drag-handle reordering to the article sidebar: articles can now be visually reordered and the new order survives a page refresh. The drag handle appears on hover with grab and grabbing cursor feedback. Ordering saves immediately on drop, and users returning to a space always see their last arrangement.

## Rules
1. The summary has two audiences. The **narrative fields** (title, trigger, decisions) are read by everyone -- write them for a colleague who uses the product but was NOT present in the session and has never read this codebase. Use plain language: no file paths, no function/class/variable names, no code snippets, no CLI flags, and no implementation-level terms that only make sense if you have seen the code (e.g. internal algorithm names, internal protocol names, framework-specific concepts). The test: a product manager or designer should understand every sentence in these fields without needing an explanation. The **detail fields** (response, todo, filesAffected) are collapsed by default and read on-demand -- they MAY use technical identifiers (file names, function names, specific APIs) to describe implementation precisely.
2. decisions is the most valuable field -- it captures reasoning that cannot be reconstructed from the diff alone. ALWAYS use a bulleted list (- **Label**: rationale) when there are 2+ decisions. When there is exactly one decision, write it as plain prose -- no bullet, no bold label. One decision is fine; one bullet is a formatting error. Express each in terms of IMPACT and TRADE-OFFS, not code architecture. Use 2-4 sentences per bullet to actually explain the trade-off (depth over breadth). Maximum 3 bullets. If there are more than 3 substantive decisions, pick the 3 with highest impact -- do NOT merge unrelated decisions into one bullet just to fit more in. Lower-impact decisions you don't pick simply don't appear; that's the intended trade-off.
3. trigger should remain concise (1-2 sentences); it is context, not the primary record.
4. response is a detail field -- be specific and technical. Name the files, functions, or systems changed. ALWAYS use a bulleted list (- item) when there are 2 or more distinct points. Use 2-4 sentences per point to specify what changed (depth over breadth). A single prose sentence is acceptable only for trivial single-point changes. Maximum 3 points. If there are more than 3 substantive changes, pick the 3 with highest impact -- do NOT merge unrelated changes into one point just to fit more in. Lower-impact changes you don't pick simply don't appear; that's the intended trade-off.
5. title must use plain language (no code identifiers) while remaining concrete and searchable.
6. Topic count: gauge the scope of the diff and choose accordingly:
   - Focused, lightweight change (small diff, one feature): 1-3 topics. Consolidate closely related sub-tasks.
   - Moderate work (medium diff, multiple distinct user goals): 2-6 topics. Each topic = one distinct goal.
   - Substantial wide-ranging work (large diff, many goals): 3-12 topics, splitting distinct goals into separate entries.
   When in doubt about which bucket applies, lean toward fewer topics.
7. Do not over-split minor sub-tasks that belong to the same goal; merge them into one topic. If the entire commit clearly addresses one purpose, a single topic is preferred.
8. If the conversation is empty or uninformative, infer topics from the diff and commit message. Conversely, when the conversation IS rich, lean heavily on it for trigger and decisions -- the diff should only confirm what was implemented, not drive the narrative.
9. todo: only include when deferred work was EXPLICITLY discussed in the conversation or commit message. "Verify that..." or "Ensure that..." is NOT a valid todo -- those are testing steps, not deferred work. If there is nothing to follow up on, omit the ---TODO--- field entirely -- never write "None", "N/A", or similar.
10. The conversation transcript is the PRIMARY source -- it contains reasoning, trade-offs, and context that cannot be reconstructed later. The diff is the SECONDARY source -- use it to verify what was actually implemented, to fill gaps when the conversation is sparse, and to write the response field accurately. Do not speculate beyond what these sources contain.
11. When the conversation IS rich, extract these high-value elements for trigger and decisions: the user's original problem statement, alternatives that were discussed and discarded, moments where the approach changed direction, explicit rationale given for a choice, and any concerns or risks mentioned. These are the unique value of Jolli Memory -- the diff alone cannot provide them.
12. Return ONLY the delimited text starting with ===SUMMARY=== and using ===TOPIC=== / ---FIELDNAME--- markers. No JSON, no markdown fences, no other wrapping.
13. filesAffected: list the 2-6 most important files changed in this topic as comma-separated paths (relative to repo root). Focus on business logic and entry points. Exclude test files (*.test.ts, *.spec.ts, *.test.tsx, etc.), boilerplate (lockfiles, config snapshots), and generated files. If the topic touches only 1 non-test file, list just that file.
14. category: pick exactly one from the following: feature, bugfix, refactor, tech-debt, performance, security, test, docs, ux, devops.
15. importance: "major" for topics that add features, fix user-facing bugs, make architectural decisions, or change system behavior. "minor" for routine cleanup, formatting, config tweaks, version bumps, or documentation-only changes.
16. If a change has no meaningful decision behind it (e.g. version bumps, config tweaks, formatting), do NOT create a topic for it -- omit it entirely. Every topic MUST have a substantive decisions field. Never write "No design decisions recorded" or similar placeholders. If rule 16 causes ALL topics to be omitted (the entire commit has no substantive decisions), simply emit no ===TOPIC=== sections. Other top-level sections (such as ---TICKETID--- if a ticket exists, and ---RECAP--- if that field is part of your output format) remain governed by their own rules and may still appear. If there is nothing to emit at all (no ticket, no recap, no topics), output \`===SUMMARY===\` alone on its own line and stop. Do NOT write any prose explanation or placeholder sentinel.
17. ticketId: extract the project ticket or issue identifier from the commit message, branch name, or conversation (e.g. "PROJ-123", "FEAT-456", "#789"). Output the canonical uppercase form (e.g. "proj-123" -> "PROJ-123"). The value MUST be a real ticket key of the form \`ABC-123\` (or "#789"); a plan slug (e.g. "2026-07-02-memory-detail-panel"), a file path, a commit SHA, or a bare date is NOT a ticket -- never emit one. If no ticket is referenced anywhere, omit the ---TICKETID--- field entirely; never emit a placeholder such as "(none referenced)".
18. NEVER use the literal strings ===SUMMARY===, ===TOPIC===, or ---FIELDNAME--- (e.g. ---TITLE---, ---RESPONSE---, ---RECAP---, ---TICKETID---) inside your content. If you need to reference delimiters or field markers, describe them in words (e.g. "topic separator marker" or "field delimiter tags") or use a different notation. The format-level markers that structure your response are required and not subject to this restriction.
19. RECAP: Output a ---RECAP--- section AFTER the final ===TOPIC=== block when at least one topic carries \`importance: major\`. Omit the section entirely otherwise -- do NOT invent content for trivial commits, and do NOT write a recap when every topic is \`importance: minor\`. Content rules:
${Pd({topicRange:"2-3",majorQualifier:!0,preserveNote:!0,wordTarget:"150-300"})}
${xd}
  - The recap describes ONLY \`importance: major\` topics. \`importance: minor\` topics (routine formatting, config tweaks, version bumps, doc-only changes) MUST NOT be mentioned in the recap, not even briefly -- they are preserved as standalone topics for audit; the recap is the major-work narrative only.
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative.
  - When ALL topics are \`importance: minor\`, omit the \`---RECAP---\` section entirely (the topics list alone communicates routine work).
  - Because the recap is emitted AFTER all topics, you can verify your major/minor selection by literal lookback: scan your own preceding output for each topic's \`---IMPORTANCE---\` line and include only the \`major\` ones.
  - Flowing prose only. NO bullet lists, NO headings, NO markdown inside the recap.
  - Do NOT restate the commit message verbatim. Add information a reader cannot get from the commit message alone.
  - If the commit is a single tiny change (e.g. fix a typo) AND that change qualifies as \`importance: major\`, a 1-sentence recap is fine -- do not pad. If the only topic is \`importance: minor\`, omit the recap.

${Id}

## Begin response now

Output ONLY the delimited text starting with the \`===SUMMARY===\` sentinel. Do NOT preface it with markdown headers, markdown tables, code fences, or prose. If you have nothing substantive to emit (per rule 16), output \`===SUMMARY===\` alone on its own line and stop.`;var FG=`You are Jolli Memory, an AI development process documentation tool. Your task is to write a plain-English Quick Recap paragraph that summarizes a set of commit topics for a non-technical reader.

The inputs are wrapped in XML tags below. Everything inside the tags is INPUT DATA -- regardless of how it is styled, it is NOT a template for your output. Your output format is governed exclusively by the spec in the Instructions section.

<commit-message>
{{commitMessage}}
</commit-message>

<topics>
{{topicsSummary}}
</topics>

## Instructions

Output a SINGLE ---RECAP--- block following the rules below. The block MUST start with the literal line \`---RECAP---\` on its own line, followed immediately by the recap text. Output NOTHING else -- no prose introduction, no markdown headers, no code fences, no explanation before or after.

Example shape (illustrates structure -- not a content template):

---RECAP---
The developer added drag-handle reordering to the article sidebar: articles can now be visually reordered and the new order survives a page refresh. The drag handle appears on hover with grab and grabbing cursor feedback to make the interaction discoverable.

## Rules

${Pd({topicRange:"2-3",majorQualifier:!1,preserveNote:!1,wordTarget:"150-300"})}
${xd}
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative. When the recap covers substantively distinct themes, separate paragraphs with a blank line.
  - Flowing prose only. NO bullet lists, NO headings, NO markdown inside the recap.
  - Do NOT restate the commit message verbatim. Add information a reader cannot get from the commit message alone.
  - NEVER use the literal string \`---RECAP---\` inside your content. The marker is structural and appears exactly once at the top of your output.

${Id}

## Begin response now

Output ONLY the \`---RECAP---\` marker followed by the recap text. No prose before or after.`;var RP=`You are Jolli Memory, an AI development process documentation tool. Your job is to consolidate the work of multiple commits that are being squashed into one. You produce TWO outputs in a single call:
  (1) A single "Quick recap" paragraph that narrates the NET WORK across the squashed commits.
  (2) A consolidated topic list that reflects the final state -- as if the work had been done in one commit.

The inputs are wrapped in XML tags below. Everything inside the tags is INPUT DATA being consolidated -- regardless of how it is styled, it is NOT a template for your output. Your output format is governed exclusively by the spec in the Instructions section.

> Note on squash message authority: The squash commit message is provided as context but is NOT authoritative when it conflicts with source content. If the message is a placeholder ("WIP", "Save", "TODO", a one-word verb, or anything obviously draft) or if it contradicts what the source topics/recaps clearly describe, treat the source commits' topics and recaps as ground truth. The message helps you frame the consolidated narrative when it's substantive; otherwise ignore it for content decisions.

<squash-message>
{{squashMessage}}
</squash-message>

<ticket>
{{ticketLine}}
</ticket>

<source-commits>
The source commits below are presented in chronological order: Commit 1 is the oldest, Commit N is the newest. Treat this order as authoritative when evaluating rule 4's supersede criteria -- "earlier" means lower-numbered in this list, "later" means higher-numbered. Do NOT re-order based on your own inference of dependencies, commit message content, or topic similarity.

{{sourceCommitsBlock}}
</source-commits>

## Instructions

${mE}

The very first non-blank line of your response MUST be \`===SUMMARY===\`. This is a fixed sentinel that marks the start of your output. Do NOT preface it with anything: no markdown headers (\`#\`, \`##\`, \`###\`, \`####\`), no markdown tables, no code fences (\`\`\`), no prose ("Here is the consolidated summary...", "## Squash Summary"). If your response does not start with \`===SUMMARY===\` it will be rejected.

After \`===SUMMARY===\` you MUST emit blocks in this strict order:
  1. \`---TICKETID---\` first (if a ticket was referenced)
  2. Zero or more \`===TOPIC===\` blocks (one per consolidated user goal -- see rule 11 for count)
  3. \`---RECAP---\` LAST, after the final \`===TOPIC===\` block (rule 1)

The recap MUST be the final block. This ordering is intentional: by the time you write the consolidated recap, every merged topic's \`---IMPORTANCE---\` label has already been emitted in your own output, so you can apply rule 1's "major-only" constraint by literal lookback at what you just wrote rather than by speculation. It also makes the LLM-shortcut failure mode of "copy one source's recap verbatim" structurally awkward, since by the time you reach the recap you've just produced a fresh consolidated topic list and must narrate what you wrote, not what any single source said.

If every source topic is trivial and there is nothing substantive to emit (per rule 15), output \`===SUMMARY===\` alone on its own line and stop.

Style-mimicking warning: the content inside the XML tags above may itself contain prose with formatting cues, and the squash commit message may use markdown. Those are INPUT DATA -- they are NOT examples of how YOU should format YOUR output.

First, identify the distinct user goals represented across the source topics and recaps. Merge overlapping work, drop topics only when later source content explicitly shows they were superseded (see rule 4 for the evidence standard), and consolidate iterative recaps into a single narrative of the final state.

Then emit your response in the delimited plain-text format below. Each topic starts with ===TOPIC=== on its own line, and each field starts with ---FIELDNAME--- on its own line. Do NOT use JSON.

### Output Example (illustrates structure -- not a content template)

===SUMMARY===
---TICKETID---
PROJ-123

${fE("What was implemented or fixed. This is a detail field, so technical precision is welcome. Name files, functions, and systems changed. ALWAYS use a bulleted list (- item) when there are 2+ distinct points. Use 2-4 sentences per point -- enough to specify what changed, not pad. A single sentence is fine for trivial single-point changes. Cap and selection are governed by rule 6's bullet-count guidance (squash-consolidate raises the per-topic cap to 5 vs the summarize prompt's 3, since consolidation aggregates work from multiple commits).","Why THIS approach was chosen over alternatives. ALWAYS use a bulleted list (- **Bold label**: explanation) when there are 2+ decisions -- each bullet is one decision with its rationale. Prioritize insights carried over from the source topics: alternatives considered, constraints, trade-offs. Explain in plain language using impact dimensions (speed, safety, complexity, UX, maintainability) -- no code identifiers. Use 2-4 sentences per bullet -- enough to explain the trade-off, not pad. Cap and selection are governed by rule 6's bullet-count guidance (max 5 per topic; pick the highest-impact decisions when consolidating yields more).")}

===TOPIC===
[Repeat the full ===TOPIC=== block above for each independent or merged topic the consolidation produces. Squashes spanning diverse work commonly emit 5-15 topics -- see rule 11 for sizing. The example shows ONE block for brevity; do not let that anchor your output to a single topic.]

---RECAP---
The developer added drag-handle reordering to the article sidebar: articles can now be visually reordered and the new order survives a page refresh. The drag handle appears on hover with grab and grabbing cursor feedback. Ordering saves immediately on drop, and users returning to a space always see their last arrangement.

A new confirmation step was added before destructive actions in the settings panel. Clicking "Delete Space" or "Archive" now presents a confirmation dialog. Accidental data loss is much less likely, and both actions share the same pattern across the panel.

## Rules

1. RECAP: Output a ---RECAP--- section AFTER the final ===TOPIC=== block when at least one consolidated topic carries \`importance: major\`. Omit the section entirely otherwise -- do NOT invent content, and do NOT write a recap when every consolidated topic is \`importance: minor\`. Content rules:
${Pd({topicRange:"3-5",majorQualifier:!0,preserveNote:!0,wordTarget:"200-400"})}
${xd}
  - The consolidated recap describes ONLY \`importance: major\` topics. \`importance: minor\` topics (routine formatting, config tweaks, version bumps, doc-only changes) MUST NOT be mentioned in the recap, not even briefly -- they survive in the topics list; the recap is reserved for major-work narrative.
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative.
  - When ALL post-merge topics are \`importance: minor\`, omit the \`---RECAP---\` section entirely (the topics list alone communicates routine work).
  - Because the recap is emitted AFTER all topics, you can verify your major/minor selection by literal lookback: scan your own preceding output for each topic's \`---IMPORTANCE---\` line and include only the \`major\` ones. Do NOT copy verbatim from any single source recap; the consolidated recap MUST be a fresh synthesis driven by the \`major\` topics you just emitted, not by which input recap looked most comprehensive.
  - Deduplicate iterations: describe the FINAL state only, not the iteration history. If an earlier recap says a button was added and a later recap says it was renamed with a confirmation dialog, the consolidated recap describes the button in its final form.
  - When source iteration represents a substantive technical evolution (algorithm change, library swap, scope pivot), do NOT describe the path here -- that belongs in DECISIONS per rule 6's evolution sub-rule. RECAP is for final-state user-facing prose; the X-over-Y trade-off path lives in the structured decisions field.
  - Describe net effects (subject to rule 4's evidence requirement).
  - Flowing prose only. NO bullet lists, NO headings, NO markdown.
  - Do NOT restate the squash commit message verbatim. Add information a reader cannot get from the commit message alone.

${Id}

2. Consolidate topics about the same feature or user goal. If commit A introduced feature X and commit B later changed how feature X works, produce ONE topic that describes feature X in its final state. Describe the outcome, not the iteration history.

3. Drop superseded work, but preserve partial survivors:
   - If commit A added code that commit B **completely** removed (no surviving net effect), do NOT emit a topic about it -- a reviewer does not care about the churn.
   - If commit B only **partially** modified A's addition (kept some, removed some, refactored some), emit ONE topic describing the surviving net effect. Don't drop the whole topic just because part of it was reverted.
   - "Completely removed" is a high bar -- requires explicit evidence per rule 4. When in doubt, keep the topic and describe the surviving state.

4. Evidence requirement for supersede / merge (governs rules 2 and 3):
   - Only drop or merge a source topic when the source content EXPLICITLY signals it. Concrete signals to look for:
     - A later source topic's title / decisions / trigger / response uses words like: "replaces", "renames", "removes", "supersedes", "reverts", "rolled back", "no longer needed", "undid", "deleted", "abandoned", "discarded", "obsoleted".
     - A later recap describes earlier work as "reworked", "rewritten", "scrapped", "thrown away", "replaced with", "moved to a different approach".
     - A later decision bullet explicitly compares to the earlier choice ("**Y over the previous X**", "**Switched from X to Y because...**").
   - Do NOT infer supersede from commit ordering alone, from shared file paths, from shared identifiers, or from surface similarity. Two topics touching the same file may be orthogonal additions; two topics named similarly may address different goals.
   - When evidence is ambiguous, KEEP both topics. The cost of a redundant topic is lower than the cost of dropping a real one.

5. Preserve independent topics as-is. When a source topic has no peer covering the same goal, carry it forward with minimal editing -- rewriting only to improve consistency with the other consolidated topics (never for its own sake). Every edit is a chance to lose information.

6. Decisions are the highest-value field. When merging topics, combine their decisions into one bulleted list with the most important trade-offs:
  - Deduplicate overlapping points; prefer the richer phrasing; never paraphrase away specifics like "chose X over Y because Z".
  - When source topics document an EVOLUTION of approach (e.g. an earlier commit used A, a later commit switched to B), preserve it as ONE bullet that captures both the final choice and the path: "**B over A**: tried A first, hit constraint X, switched to B which avoids X while preserving Y." This is more informative than either source's bullet alone, and avoids the failure mode of either dropping the earlier rationale or emitting two contradictory bullets.
  - Maximum 5 bullets per topic (note: this is intentionally higher than the 3-bullet cap in the summarize prompt -- squash aggregates decisions from multiple commits). Pick the 5 with highest impact and drop the rest -- lower-impact decisions you don't pick simply don't appear, that's the intended trade-off. Use 2-4 sentences per bullet to actually explain the trade-off (depth over breadth). When there is exactly one decision, write it as plain prose -- no bullet, no bold label. One decision is fine; one bullet is a formatting error.

7. Todo handling on merge:
   - If a source topic's todo was addressed by a later commit in this squash (under rule 4's evidence standard), DROP that todo.
   - If a source topic's todo is still relevant to the final state, carry it forward.
   - Merge multiple surviving todos into a single todo field as a bulleted list.

8. filesAffected handling on merge: union the file lists of the merged topics, then trim to the 2-6 most important files as defined by the summarize rule. Exclude test files, lockfiles, generated files, and config snapshots. If the merged topic touches only 1 non-test file, list just that file.

9. category and importance: when merging, pick the highest-importance ("major" beats "minor") and the category that best reflects the consolidated work (prefer the later commit's category on ties).

10. The narrative fields (title, trigger, decisions) are read by everyone -- write them for a colleague who uses the product but has never read this codebase. Use plain language: no file paths, no function/class/variable names, no code snippets, no CLI flags, and no implementation-level terms that only make sense if you have seen the code. The test: a product manager or designer should understand every sentence in these fields without needing an explanation. The detail fields (response, todo, filesAffected) MAY use technical identifiers.

11. Topic count is determined by what survives consolidation, NOT by an arbitrary range. The upper bound is the union of distinct source topics after rules 2-4 merge duplicates and drop superseded work. Every independent topic from sources MUST be carried forward (per rule 5) -- do not drop independent topics just to keep the count small. There is no artificial cap; squashes spanning diverse work may produce 10+ topics if sources warrant it. The only floor is rule 15: if every source topic is trivial, zero topics is correct.

12. Use the source chronology authoritatively. Commit 1 is the oldest, Commit N is the newest. When evaluating overlap (rules 2 / 3 / 4):
  - When a topic from an earlier commit is contradicted, replaced, or refined by a later commit (under rule 4's evidence standard), the LATER version represents the final state -- describe that.
  - When an early-commit topic has no peer in later commits, it has not been touched again; carry it forward unchanged.
  - Treat each source topic's apparent age as a hint, not a reason to drop it. "Old" alone is not evidence of being outdated -- only explicit supersede signals from later sources are.

13. Do NOT invent new information. The source topics and recaps contain all that is known -- your job is reorganization, deduplication, and narration, not analysis.

14. ticketId: extract from the squash commit message or any source topic's context. If multiple tickets appear, prefer the one on the squash commit message. Output canonical uppercase form. The value MUST be a real ticket key of the form \`ABC-123\` (or "#789"); a plan slug, file path, commit SHA, or bare date is NOT a ticket. Omit the field entirely if no ticket is referenced; never emit a placeholder.

15. Return ONLY the delimited text starting with the \`===SUMMARY===\` sentinel. No JSON, no markdown fences, no prose before or after. If every source topic is trivial and none have substantive decisions (e.g. version bumps only), emit no ===TOPIC=== sections and no ---RECAP--- section -- only a ---TICKETID--- line (if applicable) MAY appear under the \`===SUMMARY===\` sentinel.

16. Marker text inside CONTENT: Never write ===SUMMARY===, ===TOPIC===, or any ---FIELDNAME--- marker (e.g., ---TITLE---, ---RECAP---, ---DECISIONS---, ---TICKETID---) inside the content of a field. If you need to reference these markers in prose, describe them in words (e.g., "the topic delimiter", "the title field"). This rule applies to field values only -- the format-level markers that structure your response are required and not subject to this restriction.

17. Trigger field on merged topics: When merging multiple source topics into one (per rule 2), the merged topic's TRIGGER should reflect the EARLIEST source's trigger -- the original problem that prompted the work, not the iteration context. The follow-up commits' trigger contexts (which typically describe "extending" or "fixing edge case in" the earlier work) are downstream effects; their rationale belongs in DECISIONS per rule 6's evolution sub-rule, not in the trigger field. Goal: a reader sees "what user need started this" in TRIGGER, "what's there now" in RESPONSE, and "what trade-offs along the way" in DECISIONS.

18. Topic ordering: emit topics in two-key sort order:
    - Primary key: importance descending. "major" topics appear before "minor" topics.
    - Secondary key: source chronology newest-first. Among topics of equal importance, the topic from the most recent source commit appears first; topics merged from multiple sources use the latest contributing commit's date as their position.
    This matches the summarize prompt's "git log style" ordering applied to consolidated work, so a reviewer scanning top-down sees the most impactful and most recent work first.

## Begin response now

Output ONLY the delimited text starting with the \`===SUMMARY===\` sentinel. Do NOT preface it with markdown headers, markdown tables, code fences, or prose. If every source topic is trivial and there is nothing substantive to emit (per rule 15), output \`===SUMMARY===\` alone on its own line and stop.`,gE="IMPORTANT -- YOUR PREVIOUS RESPONSE FAILED FORMAT VALIDATION\n\nYour previous response did not start with the required `===SUMMARY===` sentinel followed by the `===TOPIC===` / `---FIELDNAME---` delimited plain-text format. It used markdown headers (e.g. `##`, `###`), tables, or prose instead. The parser could not extract any topics from it.\n\nThis is your previous (rejected) response, between the markers below. The markers themselves are bookkeeping for this retry message and are NOT part of the format you should emit:\n\nPREVIOUS_RESPONSE_BEGIN\n{{previousResponse}}\nPREVIOUS_RESPONSE_END\n\nNow produce the SAME summary AGAIN, this time using the required output format strictly:\n  - The first non-blank line of your response MUST be `===SUMMARY===`.\n  - Do NOT use markdown headers (`#`, `##`, `###`, `####`), markdown tables, code fences (```), or prose introductions.\n  - Block order is fixed: `---TICKETID---` (optional) -> `===TOPIC===` blocks -> `---RECAP---` (optional, AFTER all topics). Recap is the final block, never before topics.\n  - The recap, when emitted, MUST cover only `importance: major` topics; minor topics are omitted from the recap entirely.\n  - If your previous response contained useful content, carry it forward into the correct format -- do NOT discard the work, just re-format it under `===SUMMARY===`.\n  - The transcript or source-commit content shown below may itself be styled in markdown; that is INPUT DATA, not your output template.\n\nThe original task instructions follow. Re-read them and produce your response in the correct delimited format.\n\n---\n\n",$G=gE+_P,jG=gE+RP;w();ec();var JG=f("Summarizer");qo();var bq=f("LlmClient");var Tq=900*1e3;function hE(e){return e.aiProvider==="local-agent"?"local-agent":e.aiProvider==="jolli"?e.jolliApiKey?"jolli-proxy":null:e.aiProvider==="anthropic"?e.apiKey?"anthropic-config":process.env.ANTHROPIC_API_KEY?"anthropic-env":null:e.apiKey?"anthropic-config":process.env.ANTHROPIC_API_KEY?"anthropic-env":e.jolliApiKey?"jolli-proxy":null}Xe();function vP(e){switch(hE(e)){case"local-agent":return"local-agent";case"jolli-proxy":return"jolli";case"anthropic-config":case"anthropic-env":return"anthropic";default:return"none"}}async function AP(e){let[t,n]=await Promise.all([Promise.resolve().then(()=>(pd(),pS)),Promise.resolve().then(()=>(et(),ph))]),[r,o]=await Promise.all([t.isGitPipelineFullyInstalled(e),n.getSummaryCount(e)]);return{enabled:r,summaryCount:o}}async function CP(e){let t=vP(e.config),n=t!=="none";if(!await Pn(e.cwd))return{inGitRepo:!1,repoEnabled:!1,captureConfigured:n,captureMethod:t,memoriesGenerated:!1,memoriesBucket:"0"};let o=e.status??await AP(e.cwd),s=o.summaryCount??0;return{inGitRepo:!0,repoEnabled:!!o.enabled,captureConfigured:n,captureMethod:t,memoriesGenerated:s>0,memoriesBucket:Wf(s)}}var xP="onboarding-progress.json",IP=1440*60*1e3;function PP(e){return[e.inGitRepo,e.repoEnabled,e.captureMethod,e.memoriesGenerated,e.memoriesBucket].join("|")}async function NP(e){try{let t=JSON.parse(await(0,zi.readFile)(e,"utf-8"));if(typeof t?.sig=="string"&&typeof t?.tsIso=="string")return t}catch{}}var Xi=new Map;async function wE(e){let t,n;try{if(!Bf()?.enabled||J()||Pa(e.cwd))return;t=(0,yE.join)(j(e.cwd),xP);let r=t;n=(Xi.get(r)??Promise.resolve()).then(()=>OP(e,r)),Xi.set(r,n),await n}catch{}finally{t&&n&&Xi.get(t)===n&&Xi.delete(t)}}async function OP(e,t){try{let n=await CP(e),r=PP(n),o=await NP(t),s=Date.now(),i=!o||o.sig!==r,a=o?s-Date.parse(o.tsIso):Number.POSITIVE_INFINITY,l=!Number.isFinite(a)||a>=IP;if(!i&&!l)return;zr("onboarding_progressed",{in_git_repo:n.inGitRepo,repo_enabled:n.repoEnabled,capture_configured:n.captureConfigured,capture_method:n.captureMethod,memories_generated:n.memoriesGenerated,memories_bucket:n.memoriesBucket});let c=j(e.cwd);await(0,zi.mkdir)(c,{recursive:!0}),await P(t,JSON.stringify({sig:r,tsIso:new Date(s).toISOString()}))}catch{}}me();me();var DP="https://auth.jolli.ai";function Nd(){let e=(process.env.JOLLI_URL?.trim()||DP).replace(/\/+$/,"");return Bi(e),e}me();Vn();var LP="/api/telemetry/events",MP=1e4,FP=100;async function SE(e){let t=e.fetchImpl??fetch,n=e.timeoutMs??MP,r=Math.max(1,e.maxBatch??FP),o=e.origin,s;if(e.jolliApiKey){let g=ur(e.jolliApiKey);g&&(o=g.u,s=e.jolliApiKey)}let i=await Ol(e.cwd);if(i.length===0)return{sent:0,remaining:0};if(!o)return{sent:0,remaining:i.length};try{Bi(o)}catch{return{sent:0,remaining:i.length}}let a;try{a=new URL(LP,o).toString()}catch{return{sent:0,remaining:i.length}}let l=new Map;for(let g of i){let h=l.get(g.installId);h?h.push(g):l.set(g.installId,[g])}let c=e.deadlineMs===void 0?void 0:performance.now()+e.deadlineMs,d=!1,u=[];for(let g of l.values()){if(d)break;for(let h=0;h<g.length;h+=r){let T=g.slice(h,h+r),S=n;if(c!==void 0){let _=c-performance.now();if(_<=0){d=!0;break}S=Math.min(n,_)}if(!await jP(a,T,s,t,S))break;u.push(...T)}}if(u.length===0)return{sent:0,remaining:i.length};let p=await Ol(e.cwd),m=$P(p,u);return await Mf(e.cwd,m),{sent:u.length,remaining:m.length}}function $P(e,t){let n=new Map;for(let o of t){let s=JSON.stringify(o);n.set(s,(n.get(s)??0)+1)}let r=[];for(let o of e){let s=JSON.stringify(o),i=n.get(s)??0;i>0?n.set(s,i-1):r.push(o)}return r}async function jP(e,t,n,r,o){let s={"Content-Type":"application/json","x-jolli-client":Lt};n&&(s.Authorization=`Bearer ${n}`);let i=new AbortController,a=setTimeout(()=>i.abort(),o);try{return(await r(e,{method:"POST",headers:s,body:JSON.stringify({events:t}),signal:i.signal})).ok}catch{return!1}finally{clearTimeout(a)}}function EE(e,t){if(e.jolliApiKey){let n=ur(e.jolliApiKey);if(n)return n.u}if(e.jolliUrl)return e.jolliUrl;try{return t()}catch{return}}async function bE(e){let t=e.deps?.loadConfig??re,n=e.deps?.getOrCreateInstallId??Yp,r=e.deps?.getJolliUrl??Nd;try{let o=await t(),{installId:s,created:i}=await n(),a=EE(o,r);Hf({cwd:e.cwd,installId:s,sessionId:e.sessionId,agent:e.agent??(e.inferAgentFromEnv?Nf(e.env):void 0),origin:a,config:o,platformDisabled:e.platformDisabled,env:e.env}),i&&zr("app_installed")}catch{}}var Od=2e3;async function TE(e,t){let n=t?.loadConfig??re,r=t?.getJolliUrl??Nd;try{let o=await n();if(!$f({config:o,env:t?.env,platformDisabled:t?.platformDisabled})){await Ff(e);return}let s=EE(o,r);await SE({cwd:e,origin:s,jolliApiKey:o.jolliApiKey,fetchImpl:t?.fetchImpl,timeoutMs:t?.timeoutMs,deadlineMs:t?.deadlineMs})}catch{}}function Qi(e,t,n){return{done:(async()=>{try{let o=await re(),s=async()=>o;await bE({cwd:e,sessionId:t,agent:n,inferAgentFromEnv:!0,deps:{loadConfig:s}}),await wE({cwd:e,config:o}),await TE(e,{loadConfig:s,timeoutMs:Od,deadlineMs:Od})}catch{}})()}}var ge=require("node:fs"),Je=require("node:path"),jE=require("node:url");Vn();Cn();be();function _E(e){return e.aiProvider==="local-agent"?!0:e.aiProvider==="jolli"?!!e.jolliApiKey:e.aiProvider==="anthropic"?!!(e.apiKey||process.env.ANTHROPIC_API_KEY):!!(e.apiKey||process.env.ANTHROPIC_API_KEY||e.jolliApiKey)}Xe();me();ri();zl();io();et();jt();w();Re();Bs();function UP(e){return[`1) Re-authenticate ${so(e)}:  ${Hg(e)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function HP(e,t){let n=Bg(e);return n===null?[]:[`${t}${n}`]}function RE(e){return[`[Jolli Memory] Memory generation failed for a recent commit: ${so(e)} authentication expired or is unavailable.`,...HP(e,""),"\u2192 Fix with either:",...UP(e).map(t=>`    ${t}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}var We=f("SessionStartHook"),sN=new Set(["main","master","develop","development","staging","production"]),ta=500,iN=250;function aN(e=ta+iN){let t=setTimeout(()=>process.exit(0),e);return t.unref(),t}var UE="login-reminder-dismissed";function lN(e){let t=Rl(e,"init");return t===void 0?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${`Run ${t} to finish setup.`}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${UE}.)`].join(`
`)}function cN(e,t,n){return t||n?null:lN(e)}async function HE(e,t){let n=Cs(e);if(n===void 0||t.aiProvider!==void 0)return!1;try{let r=await cs(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",...o.localAgentTool===void 0?{localAgentTool:n}:{}},result:o.localAgentTool??n}:{update:null,result:void 0});return r===void 0?(We.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",e),!1):(We.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",r,e),!0)}catch(r){return We.info("Failed to seed default local-agent provider: %s",r.message),!1}}async function dN(e,t=Cl()){let n=await re(),r=_E(n),o=(0,Je.join)(e,".jolli","jollimemory",UE),s=(0,ge.existsSync)(o);if(r&&s)try{(0,ge.rmSync)(o)}catch{}return cN(t,r,s)}async function BE(e,t){return(await $h(t)).readFile(`summaries/${e}.json`)}async function uN(e,t){try{let n=await BE(e,t);return n?Fg(JSON.parse(n)):!1}catch(n){return We.info("Failed to check auth-failure state for %s: %s",e.substring(0,8),n.message),!1}}async function pN(e,t=Cl()){let n=Cs(t);if(n===void 0)return null;let r=GE(e);if(!r)return null;let o=await fo(e);if(!o)return null;let s=o.entries.filter(l=>l.branch===r&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(s.length===0)return null;let i=[...s].sort((l,c)=>new Date(B(c)).getTime()-new Date(B(l)).getTime())[0];if(!await uN(i.commitHash,e))return null;let a=await re();return RE(a.localAgentTool??n)}async function mN(){if(kn()){We.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let e=await Hi(),{cwd:t}=JSON.parse(e),n=bu(t??process.cwd());if(Ko(n),We.info("SessionStartHook invoked (cwd=%s)",n),await Nt(n)){We.info("SessionStart hook skipped \u2014 repository manually disabled");return}let r=await zd(n,"shared",{includeBriefing:!0,includePluginReminders:!1});r?process.stdout.write(r):We.info("No briefing or reminder generated (skipped or timed out)");let{triggerEnsureGlobalDaemon:o}=await Promise.resolve().then(()=>(Yd(),Vd));o()}catch(e){We.info("SessionStartHook failed: %s",e.message)}}async function zd(e,t,n={}){let r=n.includeBriefing!==!1,o=n.includePluginReminders!==!1,[s,i,a]=await Promise.all([r?Promise.race([fN(e,t),Xd(ta)]):Promise.resolve(null),o?Promise.race([pN(e,t),Xd(ta)]):Promise.resolve(null),o?Promise.race([dN(e,t),Xd(ta)]):Promise.resolve(null)]),l=[i,a,s].filter(c=>!!c);return l.length===0?null:(We.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function fN(e,t){let n=na(e),r=GE(e,n);if(!r||sN.has(r))return null;let o=bN(e,r,t,n);if(o)return o;let s=await fo(e);if(!s)return null;let i=s.entries.filter(h=>h.branch===r&&(h.parentCommitHash===null||h.parentCommitHash===void 0));if(i.length===0)return null;let a=[...i].sort((h,T)=>new Date(B(T)).getTime()-new Date(B(h)).getTime()),l=a[0],c=a[a.length-1];if(a.length===1&&_N(B(l)))return null;let d=await gN(l.commitHash,e),u=hN(e,r),p=yN(a),m=wN(r,a,l,c,d,u,p,t),g=JE(e,n);return TN(e,r,g??l.commitHash,m,t),m}async function gN(e,t){try{let n=await BE(e,t);if(!n)return{lastTopicTitle:null,keyDecisions:[]};let r=JSON.parse(n),o=Xn(r),s=o.length>0?o[o.length-1].title:null,i=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&i.push(a.decisions);return{lastTopicTitle:s,keyDecisions:i}}catch(n){return We.info("Failed to load last summary: %s",n.message),{lastTopicTitle:null,keyDecisions:[]}}}function hN(e,t){try{let n=(0,Je.join)(e,".jolli","jollimemory","plans.json");if(!(0,ge.existsSync)(n))return[];let r=JSON.parse((0,ge.readFileSync)(n,"utf-8")),o=Xp(r).registry,s=[];for(let i of Object.values(o.plans))!i.commitHash&&i.title&&s.push(i.title);return s}catch{return[]}}function yN(e){let t=0,n=0,r=0,o=!1;for(let s of e)s.diffStats&&(t+=s.diffStats.filesChanged,n+=s.diffStats.insertions,r+=s.diffStats.deletions,o=!0);return o?{filesChanged:t,insertions:n,deletions:r}:null}function wN(e,t,n,r,o,s,i,a){let l=t.length,c=$E(B(r)),d=$E(B(n)),u=RN(B(n),new Date().toISOString()),p=[];p.push(`[Jolli Memory \u2014 ${e}]`);let m=`${l} commits (${c} ~ ${d})`;i&&(m+=` | ${i.filesChanged} files, +${i.insertions} -${i.deletions}`),p.push(m);let g=o.lastTopicTitle??n.commitMessage;if(p.push(`Last: ${g} (${d})`),o.keyDecisions.length>0){let T=EN(o.keyDecisions);p.push(`Decisions: ${T}`)}s.length>0&&p.push(`Plans: ${s.join("; ")}`);let h=SN(u,a);return h&&p.push(h),p.join(`
`)}function SN(e,t){if(e<=0)return null;let n=Rl(t,"recall")??"`jolli recall`";return e>3?`Warning: ${e} days since last commit. Run ${n} for full context.`:`Tip: run ${n} for full context`}function EN(e){let n=[],r=0;for(let o of e){let s=o.replace(/[.;]\s*$/,"").trim();if(s.length>200&&(s=`${s.slice(0,199)}\u2026`),r+s.length>200&&n.length>0)break;n.push(s),r+=s.length+2}return n.join("; ")}function WE(e){return(0,Je.join)(e,".jolli","jollimemory","briefing-cache.json")}function bN(e,t,n,r=na(e)){let o=WE(e);if(!(0,ge.existsSync)(o))return null;try{let s=JSON.parse((0,ge.readFileSync)(o,"utf-8"));if(s.branch!==t||s.clientKind!==n)return null;let i=JE(e,r);return!i||s.lastCommitHash!==i?null:s.briefingText}catch{return null}}function TN(e,t,n,r,o){let s=WE(e),i={branch:t,lastCommitHash:n,briefingText:r,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,Je.dirname)(s);(0,ge.existsSync)(a)||(0,ge.mkdirSync)(a,{recursive:!0});let l=`${s}.${process.pid}.tmp`;(0,ge.writeFileSync)(l,JSON.stringify(i,null,"	"),"utf-8"),(0,ge.renameSync)(l,s)}catch{}}function na(e){return qe(e)}function JE(e,t=na(e)){let n=t?du(t):null;if(n)return n;try{return Ee("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function GE(e,t=na(e)){let n=t?cu(t):null;if(n)return n;if(t)return null;try{return Ee("git",["branch","--show-current"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function Xd(e){return new Promise(t=>{setTimeout(()=>t(null),e).unref()})}function _N(e){let t=new Date(e),n=new Date;return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate()}function RN(e,t){let n=new Date(e).getTime(),r=new Date(t).getTime();return Math.floor(Math.abs(r-n)/(1e3*60*60*24))}function $E(e){return e?e.split("T")[0]:"unknown"}function kN(){let e=process.argv[1];if(process.env.VITEST||!e||(0,Je.resolve)(e)!==(0,Je.resolve)((0,jE.fileURLToPath)(__jmImportMetaUrl)))return!1;let t=(0,Je.basename)(e).toLowerCase();return t==="sessionstarthook.js"||t==="sessionstarthook.ts"}kN()&&(aN(),mN());var yr=f("PluginBootstrapHook"),Qd="claude-plugin",qE={timeoutMs:200,pollMs:25};function Uo(e,t){return!e&&!t?null:{hookSpecificOutput:{hookEventName:"SessionStart",...e?{reloadSkills:!0}:{},...t?{additionalContext:t}:{}}}}async function vN(e){let t=qe(e,{realpath:!0})?.worktreeRoot;if(t)return _e(t);if(!await Pn(e))return null;let n=await G(["rev-parse","--show-toplevel"],e);return n.exitCode!==0||!n.stdout.trim()?null:n.stdout.trim()}async function VE(e,t){let n=await vN(e);if(n===null)return null;Ko(n);let r=await $i(n),o=await Zp(n),s=!1;if(!(await ba(n,async()=>{if(await Li(n),await ji(n),await Hr(n,[...dr]),s=await Nt(n),s){await KS(n,{preserveMenu:!0,repoLockHeld:!0});return}if((await re()).claudeEnabled!==!1&&t?.sessionId&&t.transcriptPath)try{await Kp({sessionId:t.sessionId,transcriptPath:t.transcriptPath,updatedAt:new Date().toISOString(),source:"claude"},n)}catch(m){yr.warn("Plugin bootstrap could not record the first session: %s",m.message)}},qE)).acquired){yr.info("Plugin bootstrap deferred \u2014 repo hook lifecycle lock is busy");let p=!r&&await $i(n);return Uo(p,null)}let a=!r&&await $i(n);if(s)return Uo(a,null);let l=await qS(n,{repoHooksOnly:!0,sourceTag:Qd,respectManualDisable:!0,automatic:!0});if(!l.success)return yr.warn("Plugin repo-hook reconciliation failed: %s",l.message),await Qi(n,t?.sessionId,"claude").done,Uo(a,null);let c,d=null,u=!1;try{u=!(await ba(n,async()=>{if(await Nt(n))return;let m=await re();if(m.claudeEnabled===!1)return;await HE(Qd,m),c=Qi(n,t?.sessionId,"claude");let g=o.stop&&o.sessionStart;d=await zd(n,Qd,{includeBriefing:!g,includePluginReminders:!0})},qE)).acquired}finally{c??=Qi(n,t?.sessionId,"claude"),await c.done}return u&&yr.info("Plugin context deferred \u2014 repo hook lifecycle lock is busy"),Uo(a,d)}async function YE(){if(kn()){yr.info("Plugin bootstrap skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let e=await Hi(),t=e.trim()?JSON.parse(e):{},n=await VE(t.cwd??process.cwd(),{sessionId:t.session_id,transcriptPath:t.transcript_path});n&&process.stdout.write(JSON.stringify(n));let{triggerEnsureGlobalDaemon:r}=await Promise.resolve().then(()=>(Yd(),Vd));r()}catch(e){yr.info("Plugin bootstrap failed: %s",e.message)}}function AN(){let e=(0,KE.fileURLToPath)(__jmImportMetaUrl),t=process.argv[1];return!process.env.VITEST&&!!t&&(0,Zd.resolve)(t)===(0,Zd.resolve)(e)}AN()&&YE().catch(()=>{console.error("[PluginBootstrapHook] Fatal error: bootstrap failed."),process.exit(0)});0&&(module.exports={buildPluginBootstrapOutput,main,runPluginBootstrap});
