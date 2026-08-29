#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var mT=Object.create;var ts=Object.defineProperty;var fT=Object.getOwnPropertyDescriptor;var gT=Object.getOwnPropertyNames;var hT=Object.getPrototypeOf,yT=Object.prototype.hasOwnProperty;var y=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var A=(e,t)=>()=>{try{return t||e((t={exports:{}}).exports,t),t.exports}catch(n){throw t=0,n}},Ir=(e,t)=>{for(var n in t)ts(e,n,{get:t[n],enumerable:!0})},Du=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of gT(t))!yT.call(e,o)&&o!==n&&ts(e,o,{get:()=>t[o],enumerable:!(r=fT(t,o))||r.enumerable});return e};var xr=(e,t,n)=>(n=e!=null?mT(hT(e)):{},Du(t||!e||!e.__esModule?ts(n,"default",{value:e,enumerable:!0}):n,e)),wT=e=>Du(ts({},"__esModule",{value:!0}),e);function Lt(e){return Cr(e,process.platform)}function Cr(e,t){let n=Dn(e.replace(/\\/g,"/"));return t==="win32"||t==="darwin"?n.toLowerCase():n}function Dn(e){let t=e.length;for(;t>0&&e[t-1]==="/";)t--;return t===e.length?e:e.slice(0,t)}function Ia(e,t){let n=Lt(e),r=Lt(t);return n===r||n.startsWith(`${r}/`)}function ke(e){return e.replace(/\\/g,"/")}var re=y(()=>{"use strict"});function ST(e){return ET.some(t=>(e[t]??"")!=="")}function Zt(e){try{return(0,Ln.readFileSync)(e,"utf-8")}catch{return null}}function xa(e){try{return(0,Ln.realpathSync)(e)}catch{return(0,X.resolve)(e)}}function rs(e){try{return(0,Ln.statSync)(e).isDirectory()}catch{return!1}}function Fu(e,t){let n=Zt((0,X.join)(e,"HEAD"))?.trim();return!n||!(os.test(n)||bT.test(n))?!1:rs((0,X.join)(t,"objects"))&&rs((0,X.join)(t,"refs"))}function TT(e,t,n){let r=/^gitdir:\s*(.+)$/m.exec(t);if(!r)return null;let o=r[1].trim();if(!o)return null;let s=(0,X.isAbsolute)(o)?o:(0,X.resolve)(e,o);return rs(s)?n?xa(s):s:null}function ju(e,t){let n=Zt((0,X.join)(e,"commondir"))?.trim();if(!n)return e;let r=(0,X.isAbsolute)(n)?n:(0,X.resolve)(e,n);return t?xa(r):r}function ze(e,t={}){let{env:n=process.env,realpath:r=!1}=t;if(ST(n))return null;let o=r?xa(e):(0,X.resolve)(e);for(;;){let s=(0,X.join)(o,".git");if(rs(s)){let l=ju(s,r);return Fu(s,l)?{worktreeRoot:o,gitDir:s,commonDir:l}:null}let i=Zt(s);if(i!==null){let l=TT(o,i,r);if(l===null)return null;let c=ju(l,r);return Fu(l,c)?{worktreeRoot:o,gitDir:l,commonDir:c}:null}let a=(0,X.dirname)(o);if(a===o)return null;o=a}}function Hu(e){let t=Zt((0,X.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;let n=/^ref:\s*refs\/heads\/(.+)$/.exec(t);return n&&n[1].trim()||null}function kT(e){return _T.test(e)&&!e.split("/").includes("..")}function RT(e,t){let n=Zt((0,X.join)(e,"packed-refs"));if(n===null)return null;for(let r of n.split(`
`)){if(!r||r.startsWith("#")||r.startsWith("^"))continue;let o=r.indexOf(" ");if(!(o<=0)&&r.slice(o+1).trim()===t){let s=r.slice(0,o).trim();return os.test(s)?s:null}}return null}function Uu(e){let t=Zt((0,X.join)(e.gitDir,"HEAD"))?.trim();if(!t)return null;if(os.test(t))return t;let n=/^ref:\s*(.+)$/.exec(t);if(!n)return null;let r=n[1].trim();if(!kT(r))return null;for(let o of e.gitDir===e.commonDir?[e.gitDir]:[e.gitDir,e.commonDir]){let s=Zt((0,X.join)(o,r))?.trim();if(s&&os.test(s))return s;let i=RT(o,r);if(i)return i}return null}var Ln,X,ET,os,bT,_T,Mn=y(()=>{"use strict";Ln=require("node:fs"),X=require("node:path");re();ET=["GIT_DIR","GIT_WORK_TREE","GIT_COMMON_DIR"];os=/^[0-9a-f]{40}$|^[0-9a-f]{64}$/,bT=/^ref:\s*refs\//;_T=/^refs\/[A-Za-z0-9._\-/]+$/});function Ca(){return vT.getStore()?.traceId}var Bu,TD,vT,ss=y(()=>{"use strict";Bu=require("node:async_hooks"),TD="0".repeat(32),vT=new Bu.AsyncLocalStorage});function R(e){return e instanceof Error?e.message:String(e)}function en(e){return e instanceof Error&&e.code==="ENOENT"}function is(e){Gu=e}function V(){return qu}function OT(e,t){let n=NT[t]??CT;return Wu[e]>=Wu[n]}function DT(e,t,n,r,o){let s=new Date().toISOString(),i=e.toUpperCase().padEnd(5),a=n,l=0;a=a.replace(/%[sdj]/g,d=>{if(l>=r.length)return d;let u=r[l++];return d==="%d"?String(Number(u)):d==="%j"?JSON.stringify(u):String(u)});let c=o?` [trace=${o}]`:"";return`[${s}] ${i} [${t}]${c} ${a}`}function B(e){let t=e??Gu??process.cwd();return(0,$n.join)(t,AT,IT)}function Nr(e){return String(e).padStart(2,"0")}async function FT(e,t){let n=new Date,r=`${n.getUTCFullYear()}-${Nr(n.getUTCMonth()+1)}-${Nr(n.getUTCDate())}_${Nr(n.getUTCHours())}-${Nr(n.getUTCMinutes())}-${Nr(n.getUTCSeconds())}`;try{let o=(0,$n.join)(e,`debug_${r}.log`);for(let s=1;await jT(o);s++)o=(0,$n.join)(e,`debug_${r}_${s}.log`);await(0,Ne.rename)(t,o)}catch{return}try{let o=(await(0,Ne.readdir)(e)).filter(s=>$T.test(s)).sort();for(let s=0;s<o.length-MT;s++)await(0,Ne.unlink)((0,$n.join)(e,o[s])).catch(()=>{})}catch{}}async function jT(e){try{return await(0,Ne.stat)(e),!0}catch{return!1}}function HT(e){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||qu||(Ju=Ju.then(async()=>{try{let t=B(),n=(0,$n.join)(t,xT);await(0,Ne.stat)(t);try{(await(0,Ne.stat)(n)).size>LT&&await FT(t,n)}catch{}await(0,Ne.appendFile)(n,`${e}
`,"utf-8")}catch{}}))}function f(e){function t(n,r,o){let s=DT(n,e,r,o,Ca());PT&&(n==="info"||n==="debug")||(n==="warn"?console.warn(s):console.error(s)),OT(n,e)&&HT(s)}return{debug(n,...r){t("debug",n,r)},info(n,...r){t("info",n,r)},warn(n,...r){t("warn",n,r)},error(n,...r){t("error",n,r)}}}var Ne,$n,AT,IT,xT,He,Gu,qu,Wu,CT,NT,PT,Ju,LT,MT,$T,w=y(()=>{"use strict";Ne=require("node:fs/promises"),$n=require("node:path");ss();AT=".jolli",IT="jollimemory",xT="debug.log";He="jollimemory/summaries/v3";qu=!1;Wu={debug:0,info:1,warn:2,error:3},CT="info",NT={},PT=!0;Ju=Promise.resolve(),LT=2*1024*1024,MT=10,$T=/^debug_.*\.log$/});function Fn(e,t,n){return(0,Ku.promisify)(ft.execFile)(e,t,{...Pr,...n??{}})}function Se(e,t,n){return(0,ft.execFileSync)(e,t,{...Pr,...n??{}})}function Vu(e,t,n){return(0,ft.spawnSync)(e,t,{...Pr,...n??{}})}var ft,Ku,Pr,gt,Re=y(()=>{"use strict";ft=require("node:child_process"),Ku=require("node:util"),Pr={windowsHide:!0};gt=((e,t,n)=>Array.isArray(t)?(0,ft.spawn)(e,t,{...Pr,...n??{}}):(0,ft.spawn)(e,{...Pr,...t??{}}))});function GT(){let e={...process.env,LC_ALL:"C"};for(let t of JT)delete e[t];return e}function Qu(e){return qT(e)??e}function qT(e){let t=Na.get(e);if(t!==void 0)return t;let n=ze(e,{realpath:!0})?.worktreeRoot;if(n){let o=ke(n);return Na.set(e,o),o}let r=null;try{let o=Se("git",["rev-parse","--show-toplevel"],{cwd:e,encoding:"utf-8",env:GT(),stdio:["ignore","pipe","pipe"]}).trim();o&&(r=o)}catch{}return Na.set(e,r),r}async function Y(e,t){oe.debug("git %s%s",t?`[cwd=${t}] `:"",e.join(" "));try{let{stdout:n,stderr:r}=await Fn("git",e,{maxBuffer:BT,env:{...process.env,LC_ALL:"C"},...t!==void 0&&{cwd:t}});return{stdout:n.trimEnd(),stderr:r.trim(),exitCode:0}}catch(n){let r=n,o=typeof r.code=="number"?r.code:r.code==="ENOENT"?127:1,s={stdout:(r.stdout??"").trimEnd(),stderr:(r.stderr??r.message??"").trim(),exitCode:o};return oe.debug("git command failed (exit: %d, stderr: %s)",o,s.stderr.substring(0,200)),s}}function KT(e){let t=e.split(`
`).filter(s=>s.trim().length>0).pop()??"",n=t.match(/(\d+)\s+files?\s+changed/),r=t.match(/(\d+)\s+insertions?/),o=t.match(/(\d+)\s+deletions?/);return{filesChanged:n?Number.parseInt(n[1],10):0,insertions:r?Number.parseInt(r[1],10):0,deletions:o?Number.parseInt(o[1],10):0}}async function ls(e,t,n){let r=await Y(["diff","--stat",`${e}..${t}`],n);return KT(r.stdout)}async function Pa(e,t){return(await Y(["rev-parse","--verify",`refs/heads/${e}`],t)).exitCode===0}async function Oa(e,t){if(await Pa(e,t))return;oe.info("Creating orphan branch '%s' using plumbing commands",e);let n=JSON.stringify({version:1,entries:[]},null,"	"),r=await zT(n,t);oe.debug("Created blob: %s",r);let o=`100644 blob ${r}	index.json
`,s=await e_(o,t);oe.debug("Created tree: %s",s);let i=await Y(["commit-tree",s,"-m","Initialize Jolli Memory summaries"],t);if(i.exitCode!==0)throw new Error(`Failed to create commit: ${i.stderr}`);let a=i.stdout.trim();oe.debug("Created commit: %s",a);let l=await Y(["update-ref",`refs/heads/${e}`,a],t);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);oe.info("Orphan branch '%s' created successfully",e)}function YT(e){let t=e.toLowerCase();return VT.some(n=>t.includes(n))}async function Da(e,t,n){oe.debug("Reading file from branch: %s:%s",e,t);let r=await Y(["show",`${e}:${t}`],n);return r.exitCode!==0?(YT(r.stderr)?oe.debug("File not found: %s:%s",e,t):oe.warn("Read failed for %s:%s (git exit %d): %s",e,t,r.exitCode,r.stderr||"(no stderr)"),null):r.stdout}async function La(e,t,n){let r=new Map;if(t.length===0)return r;let o=["cat-file","--batch"];return oe.debug("git (cat-file --batch stream) %s%s for %d paths",n?`[cwd=${n}] `:"",o.join(" "),t.length),new Promise((s,i)=>{let a=gt("git",o,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),l="",c=Buffer.alloc(0),d=!0,u=0,p=[],m=!1,g=0,h=!1,E=S=>{h||(h=!0,S?i(S):s(r))};a.stderr.on("data",S=>{l+=S.toString()}),a.stdout.on("data",S=>{for(c=Buffer.concat([c,S]);!h;){if(d){let k=c.indexOf(10);if(k<0)return;let b=c.subarray(0,k).toString("utf8");if(c=c.subarray(k+1),g>=t.length){E(new Error(`git cat-file --batch returned extra response: ${b}`));return}let I=t[g];if(g++,b.endsWith(" missing")){r.set(I,null);continue}let P=b.substring(b.lastIndexOf(" ")+1),$=Number.parseInt(P,10);if(!Number.isFinite($)||$<0){E(new Error(`Unexpected cat-file --batch header for ${I}: ${b}`));return}u=$,p=[],d=!1,m=!0}if(u>0){if(c.length===0)return;let k=Math.min(u,c.length);if(p.push(c.subarray(0,k)),c=c.subarray(k),u-=k,u>0)return}if(m){if(c.length<1)return;c=c.subarray(1),m=!1;let k=t[g-1];r.set(k,Buffer.concat(p).toString("utf8")),p=[],d=!0}}}),a.on("close",S=>{if(S!==0){E(new Error(`git cat-file --batch failed (exit ${S}): ${l.trim()}`));return}if(g<t.length){E(new Error(`git cat-file --batch returned ${g} of ${t.length} expected responses; stderr=${l.trim()}`));return}E(null)}),a.on("error",S=>{E(S)}),a.stdin.on("error",S=>{E(S)});for(let S of t)a.stdin.write(`${e}:${S}
`);a.stdin.end()})}async function Zu(e,t,n,r){await Oa(e,r);let o=await Y(["rev-parse",`refs/heads/${e}`],r);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let s=o.stdout.trim();await QT(e,s,n,t,r);let i=t.filter(l=>!l.delete).length,a=t.filter(l=>l.delete).length;oe.info("Updated branch '%s': %d written, %d deleted (via fast-import)",e,i,a)}async function Or(e,t){let n=await Y(["cat-file","-p",e],t);if(n.exitCode!==0)return null;let r=n.stdout.match(/^tree ([a-f0-9]+)/m);return r?r[1]:null}async function Ma(e,t,n){oe.debug("Listing files in branch %s under prefix '%s'",e,t);let r=await Y(["ls-tree","-z","-r","--name-only",e,t],n);if(r.exitCode!==0)return oe.debug("Failed to list files (branch may not exist): %s",r.stderr),[];let o=r.stdout.split(WT).filter(s=>s.length>0);return oe.debug("Found %d files",o.length),o}async function XT(e){let t=await Y(["rev-parse","--git-common-dir"],e);if(t.exitCode!==0)throw new Error(`Failed to get git common dir: ${t.stderr}`);let n=t.stdout.trim();return(0,Qe.resolve)(e,n)}async function $a(e){let t=await XT(e);return(0,Qe.dirname)(t)}async function jn(e){return ze(e)!==null?!0:(await Y(["rev-parse","--git-dir"],e)).exitCode===0}async function Dr(e){let t=await Y(["worktree","list","--porcelain"],e);if(t.exitCode!==0)throw new Error(`Failed to list worktrees: ${t.stderr}`);return t.stdout.split(`
`).filter(r=>r.startsWith("worktree ")).map(r=>r.slice(9).trim())}async function Hn(e){let t=(0,Qe.join)(e,".git");if((await(0,as.stat)(t)).isDirectory())return(0,Qe.join)(t,"hooks");let r=await(0,as.readFile)(t,"utf-8"),o=r.trim().match(/^gitdir:\s*(.+)$/);if(!o)throw new Error(`Unexpected .git file content: ${r.trim()}`);let s=o[1].trim(),i=(0,Qe.resolve)(e,s),a=i.replace(/\\/g,"/").lastIndexOf("/worktrees/");if(a>=0){let l=i.substring(0,a);return(0,Qe.join)(l,"hooks")}return(0,Qe.join)(i,"hooks")}function ep(e,t,n){return oe.debug("git (stdin) %s%s",n?`[cwd=${n}] `:"",e.join(" ")),new Promise((r,o)=>{let s=gt("git",e,{stdio:["pipe","pipe","pipe"],...n!==void 0&&{cwd:n}}),i="",a="";s.stdout.on("data",l=>{i+=l.toString()}),s.stderr.on("data",l=>{a+=l.toString()}),s.on("close",l=>{l!==0?o(new Error(`git ${e[0]} failed (exit ${l}): ${a.trim()}`)):r(i.trim())}),s.on("error",l=>{o(l)}),s.stdin.write(t),s.stdin.end()})}async function zT(e,t){return ep(["hash-object","-w","--stdin"],e,t)}async function Yu(e,t){let n=await Y(["var",e],t);if(n.exitCode!==0)throw new Error(`Failed to read ${e}: ${n.stderr}`);return n.stdout.trim()}async function QT(e,t,n,r,o){let s=await Yu("GIT_AUTHOR_IDENT",o),i=await Yu("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];oe.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=r.filter(d=>!d.delete),c=r.filter(d=>d.delete);return new Promise((d,u)=>{let p=gt("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),m="";p.stderr.on("data",S=>{m+=S.toString()}),p.on("close",S=>{S!==0?u(new Error(`git fast-import failed (exit ${S}): ${m.trim()}`)):d()}),p.on("error",S=>{u(S)});let g=p.stdin;g.on("error",S=>{u(S)});let h=[];l.forEach((S,k)=>{let b=k+1,I=Buffer.from(S.content,"utf8");h.push(`blob
mark :${b}
data ${I.length}
`,I,`
`)});let E=Buffer.from(n,"utf8");h.push(`commit refs/heads/${e}
`,`author ${s}
`,`committer ${i}
`,`data ${E.length}
`,E,`
`,`from ${t}
`),l.forEach((S,k)=>{h.push(`M 100644 :${k+1} ${Xu(S.path)}
`)});for(let S of c)h.push(`D ${Xu(S.path)}
`);h.push(`done
`),ZT(g,h).then(()=>{g.end()},S=>{u(S)})})}async function ZT(e,t){for(let n of t)e.write(n)||await(0,zu.once)(e,"drain")}function Xu(e){return/["\\\n\r]/.test(e)?`"${e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:e}async function e_(e,t){return ep(["mktree"],e,t)}var zu,as,Qe,BT,WT,oe,Na,JT,VT,be=y(()=>{"use strict";zu=require("node:events"),as=require("node:fs/promises"),Qe=require("node:path");w();Re();Mn();re();BT=10*1024*1024,WT="\0",oe=f("GitOps"),Na=new Map,JT=["GIT_DIR","GIT_WORK_TREE","GIT_INDEX_FILE","GIT_COMMON_DIR","GIT_PREFIX","GIT_OBJECT_DIRECTORY","GIT_NAMESPACE"];VT=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});function t_(e){return new Promise(t=>setTimeout(t,e))}function np(e){let t=Number(e);if(!Number.isInteger(t)||t<=0)return!1;if(t===process.pid)return!0;try{return process.kill(t,0),!0}catch(n){return n.code!=="ESRCH"}}async function Fa(e){try{let t=await(0,Ze.stat)(e),n=Date.now()-t.mtimeMs,r=await rp(e),o=r!==null&&!np(r);if(!o&&n<tp)return!1;o?Lr.warn("Removing orphaned lock %s (PID %s no longer running)",e,r):Lr.warn("Removing stale lock file %s (age: %dms)",e,n),await(0,Ze.rm)(e,{force:!0})}catch(t){if(t.code!=="ENOENT")return Lr.error("Failed to check lock file %s: %s",e,t.message),!1}try{return await(0,Ze.writeFile)(e,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function rp(e){try{let n=(await(0,Ze.readFile)(e,"utf-8")).trim();return n.length>0?n:null}catch{return null}}async function Un(e,t){let n=await rp(e);if(n!==null&&n!==String(process.pid)){Lr.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",t,n,process.pid);return}try{await(0,Ze.rm)(e,{force:!0})}catch(r){Lr.error("Failed to release %s: %s",t,r.message)}}async function Bn(e,t){if(t.timeoutMs<=0)return Fa(e);let n=Date.now()+t.timeoutMs;for(;;){if(await Fa(e))return!0;if(Date.now()>=n)return!1;await t_(t.pollMs)}}var Ze,Lr,tp,ja=y(()=>{"use strict";Ze=require("node:fs/promises");w();Lr=f("LockPrimitives"),tp=300*1e3});function ip(e){return(0,sp.resolve)(e??process.cwd())}function Wn(e){return Ha.getStore()?.has(ip(e))===!0}function Jn(e,t){let n=new Set(Ha.getStore()??[]);return n.add(ip(e)),Ha.run(n,t)}var op,sp,Ha,cs=y(()=>{"use strict";op=require("node:async_hooks"),sp=require("node:path"),Ha=new op.AsyncLocalStorage});function n_(e){return Fn("git",["rev-parse","--git-common-dir"],{cwd:e})}async function fp(e){let t=e??process.cwd(),n=dp.get(t);if(n!==void 0)return n;let r;try{let{stdout:o}=await n_(t),s=o.trim(),i=(0,ve.isAbsolute)(s)?s:(0,ve.resolve)(t,s);r=(0,ve.join)(i,"jollimemory")}catch{pp.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",t),r=B(t)}return dp.set(t,r),r}async function u_(e){let t=B(e);return await(0,Gn.mkdir)(t,{recursive:!0}),t}async function Ua(e){let t=await fp(e);return await(0,Gn.mkdir)(t,{recursive:!0}),t}async function Mr(e,t={}){let n=t.timeoutMs??s_,r=t.pollMs??i_,o=await Ua(e);return Bn((0,ve.join)(o,mp),{timeoutMs:n,pollMs:r})}async function $r(e){let t=await fp(e);await Un((0,ve.join)(t,mp),"orphan-write.lock")}async function gp(e,t,n,r){let o=r.timeoutMs??l_,s=r.pollMs??us;await(0,Gn.mkdir)(e,{recursive:!0});let i=(0,ve.join)(e,t),a=await Bn(i,{timeoutMs:o,pollMs:s});a||pp.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",t,o);try{return await n()}finally{a&&await Un(i,t)}}async function hp(e,t,n={}){return gp(await u_(e),r_,t,n)}async function Ba(e,t,n={}){return gp(e,o_,t,n)}async function Fr(e,t={}){let n=t.timeoutMs??c_,r=t.pollMs??us,o=await Ua(e),s=(0,ve.join)(o,lp);return await Bn(s,{timeoutMs:n,pollMs:r})?{release:()=>Un(s,lp)}:null}async function Wa(e,t,n={}){let r=await Fr(e,n);if(!r)return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await r.release()}}async function Ja(e,t,n={}){let r=n.timeoutMs??a_,o=n.pollMs??us,s=await Ua(e),i=(0,ve.join)(s,ap);if(!await Bn(i,{timeoutMs:r,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await Un(i,ap)}}async function Ga(e,t={}){let n=t.timeoutMs??d_,r=t.pollMs??us,o=t.globalDir??(0,ve.join)((0,up.homedir)(),".jolli","jollimemory");await(0,Gn.mkdir)(o,{recursive:!0});let s=(0,ve.join)(o,cp);if(!await Bn(s,{timeoutMs:n,pollMs:r}))return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await Un(s,cp)}}var Gn,up,ve,pp,mp,ap,r_,o_,lp,cp,s_,ds,i_,a_,us,l_,c_,d_,dp,et=y(()=>{"use strict";Gn=require("node:fs/promises"),up=require("node:os"),ve=require("node:path");w();Re();ja();cs();pp=f("Locks");mp="orphan-write.lock",ap="profile.lock",r_="sessions.lock",o_="config.lock",lp="repo-hooks.lock",cp="runtime-registry.lock",s_=1e3,ds=class extends Error{constructor(t,n){super(`${t}: could not acquire orphan-write.lock within ${n}ms`),this.name="OrphanWriteBusyError"}},i_=50,a_=5e3,us=25,l_=5e3,c_=5e3,d_=5e3,dp=new Map});async function qa(e,t,n={}){await(0,Mt.mkdir)((0,yp.dirname)(e),{recursive:!0});let r=`${e}.${process.pid}.tmp`;await(0,Mt.writeFile)(r,t,n.mode!==void 0?{encoding:"utf-8",mode:n.mode}:"utf-8");try{await(0,Mt.rename)(r,e)}catch(o){throw await(0,Mt.unlink)(r).catch(()=>{}),o}}var Mt,yp,Ka=y(()=>{"use strict";Mt=require("node:fs/promises"),yp=require("node:path")});function bp(e,t){let n={...e,manuallyDisabled:t};return delete n.userDisabled,n}async function f_(e){let t=ze(e)?.commonDir;if(t)return t;let n=await Y(["rev-parse","--git-common-dir"],e),r=n.exitCode===0?n.stdout.trim():"";return r?(0,de.isAbsolute)(r)?r:(0,de.join)(e,r):null}async function za(e){let t=await f_(e);if(t===null)return{profilePath:(0,de.join)(B(e),Ya),legacyMarkerPath:null};let n=(0,de.dirname)(t);return{profilePath:(0,de.join)(B(n),Ya),legacyMarkerPath:(0,de.join)(t,p_,m_)}}async function fs(e){try{let t=await(0,jr.readFile)(e,"utf-8"),n=JSON.parse(t);return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}catch{return{}}}async function g_(e){try{return await(0,jr.stat)(e),!0}catch{return!1}}async function Tp(e,t){await qa(e,`${JSON.stringify(t,null,"	")}
`)}function ps(e,t,n,r,o,s){if(e==="read"){let i=`${o}|${t}|${n}`;if(wp.has(i))return n;wp.add(i)}return Xa.info("manual-disable %s \u2192 %s (by=%s, pid=%d, cwd=%s, profile=%s, raw: userDisabled=%s manuallyDisabled=%s fence=%s)",e,n,t,process.pid,r,o,String(s.userDisabled),String(s.manuallyDisabled),s.cutoverFence?s.cutoverFence.at:"none"),n}function _p(){return(new Error("manual-disable write").stack??"(no stack)").split(`
`).slice(1,8).join(" | ").replace(/\s+/g," ")}async function h_(e){let t;try{t=await Dr(e)}catch{t=[e]}for(let n of t)if(await g_((0,de.join)(B(n),Sp)))return!0;return!1}async function $t(e){let{profilePath:t}=await za(e),n=await fs(t);if(n.userDisabled!==void 0){let s=await Ep(e,t,n.userDisabled===!0);return ps("read","migrate:userDisabled",s,e,t,n)}if(n.manuallyDisabled!==void 0)return ps("read","manuallyDisabled",n.manuallyDisabled===!0,e,t,n);let r=await h_(e),o=await Ep(e,t,r);return ps("read","migrate:legacy-marker",o,e,t,n)}async function Ep(e,t,n){let r=await Ja(e,async()=>{let o=await fs(t),s=o.userDisabled??o.manuallyDisabled,i=s===void 0?n:s===!0;return o.userDisabled===void 0&&o.manuallyDisabled!==void 0||(Xa.info("manual-disable MIGRATE \u2192 manuallyDisabled=%s (pid=%d, profile=%s, fence=%s, from=%s) \u2190 %s",i,process.pid,t,o.cutoverFence?o.cutoverFence.at:"none",o.userDisabled!==void 0?"userDisabled":"legacy-marker",_p()),await Tp(t,bp(o,i))),i}).catch(()=>{});return r?.acquired&&r.value!==void 0?r.value:n}async function Qa(e,t){let{profilePath:n}=await za(e);if(Xa.info("manual-disable WRITE %s (pid=%d, cwd=%s, profile=%s) \u2190 %s",t,process.pid,e,n,_p()),!(await Ja(e,async()=>{let o=await fs(n);ps("write",`explicit:${t}`,t,e,n,o),await Tp(n,bp(o,t))})).acquired)throw new Error("Timed out acquiring the repo profile lock")}async function Hr(e){let{profilePath:t}=await za(e);return(await fs(t)).cutoverFence??null}function y_(e){let t=Va.get(e);if(t!==void 0)return t;let n=ze(e)?.commonDir;if(n){let s=(0,de.dirname)(n);return Va.set(e,s),s}let r="";try{let s=Se("git",["rev-parse","--git-common-dir"],{cwd:e,encoding:"utf-8",stdio:["ignore","pipe","pipe"]}).trim();s&&(r=(0,de.isAbsolute)(s)?s:(0,de.join)(e,s))}catch{r=""}let o=r?(0,de.dirname)(r):e;return Va.set(e,o),o}function Za(e){let t=y_(e),n;try{n=(0,ms.readFileSync)((0,de.join)(B(t),Ya),"utf-8")}catch{}let r=w_(n);if(r!==void 0)return r;try{return(0,ms.statSync)((0,de.join)(B(e),Sp)),!0}catch{return!1}}function w_(e){if(e===void 0)return;let t;try{t=JSON.parse(e)}catch{return}if(!t||typeof t!="object"||Array.isArray(t))return;let n=t;if(n.userDisabled!==void 0)return n.userDisabled===!0;if(n.manuallyDisabled!==void 0)return n.manuallyDisabled===!0}var ms,jr,de,Xa,Ya,p_,m_,Sp,wp,Va,tt=y(()=>{"use strict";ms=require("node:fs"),jr=require("node:fs/promises"),de=require("node:path");w();Re();Ka();Mn();be();et();Xa=f("RepoProfile"),Ya="profile.json",p_="jollimemory",m_="backfill-card-dismissed",Sp="disabled-by-user";wp=new Set;Va=new Map});function Rp(e){return typeof e=="string"&&kp.includes(e)}var kp,el,gs=y(()=>{"use strict";kp=["claude","codex","gemini","opencode","cursor","cursor-cli","copilot","copilot-chat","cline","cline-cli","devin","antigravity","kimi","hermes"];el=5});async function v(e,t,n){let r=`${e}.${process.pid}.${(0,vp.randomUUID)()}.tmp`;await(0,tn.writeFile)(r,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n});try{await(0,tn.rename)(r,e)}catch(o){let s=o.code;if(s==="EPERM"||s==="EACCES")await(0,tn.writeFile)(e,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n}),await(0,tn.rm)(r,{force:!0});else throw o}}var vp,tn,Q=y(()=>{"use strict";vp=require("node:crypto"),tn=require("node:fs/promises")});function ue(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}var Ur=y(()=>{"use strict"});var Ap=y(()=>{"use strict"});function tl(e,t){if(e.length<=t)return e;let n=e.length-t;return`${e.slice(0,t)}
\u2026[truncated, ${n} more chars]`}var nl=y(()=>{"use strict"});function Ip(e){return Number.isFinite(e)&&e>=0&&e<=1114111&&!(e>=55296&&e<=57343)}function xp(e){return e.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(t,n)=>{if(n.startsWith("#x")){let o=Number.parseInt(n.slice(2),16);return Ip(o)?String.fromCodePoint(o):t}if(n.startsWith("#")){let o=Number.parseInt(n.slice(1),10);return Ip(o)?String.fromCodePoint(o):t}let r=E_[n];return typeof r=="string"?r:t})}var E_,Cp=y(()=>{"use strict";E_={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var S_,Np,Pp=y(()=>{"use strict";Ap();Ur();nl();Cp();S_={decodeHtmlEntities:xp,lowercase:e=>e.toLowerCase()},Np=new Set(Object.keys(S_))});var b_,Op,Dp=y(()=>{"use strict";b_="^https://app\\.asana\\.com/",Op={id:"asana",label:"Asana",icon:"checklist",match:{claude:{prefixes:["mcp__claude_ai_Asana__"],acceptSuffix:"get_task"},codex:{namespaceSuffix:"asana",functionCallNames:["_get_task"],invocationTools:["asana.get_task"]}},wrapperKeys:["data"],reference:{nativeId:{pipe:[{op:"path",path:"gid"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"permalink_url"}],require:b_,requireFlags:"i"},description:{pipe:[{op:"path",path:"notes"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"task"}]},{key:"assignee",label:"Assignee",icon:"person",pipe:[{op:"path",path:"assignee.name"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"asana-tasks",itemTag:"task",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var T_,Lp,Mp=y(()=>{"use strict";T_="^https://[^/]+/wiki/",Lp={id:"confluence",label:"Confluence",icon:"book",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"],acceptSuffix:"getConfluencePage"},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_getconfluencepage"],invocationTools:["atlassian_rovo.getConfluencePage"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"pageId"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:T_},description:{pipe:[{op:"path",path:"body"}],optional:!0}},fields:[{key:"space",label:"Space",icon:"symbol-namespace",pipe:[{op:"path",path:"space"}]},{key:"author",label:"Author",icon:"account",pipe:[{op:"path",path:"author"}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"entityType"}],[{op:"const",value:"page"}]]}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"confluence-pages",itemTag:"page",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var __,$p,Fp=y(()=>{"use strict";__="^/[^/\\s]+/[^/\\s]+",$p={id:"context7",label:"Context7",icon:"book",trackOnly:!0,argumentsDerived:!0,match:{claude:{prefixes:["mcp__context7__"],acceptSuffix:"query-docs"},codex:{namespaceSuffix:"context7",functionCallNames:["_query_docs"],invocationTools:["query-docs","context7.query-docs"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"libraryId"}],require:__},title:{pipe:[{op:"path",path:"libraryId"},{op:"regex",pattern:"^/(.+)$",extract:"$1"}],require:".+"},url:{pipe:[{op:"template",template:"https://context7.com{id}",from:{id:[{op:"path",path:"libraryId"}]}}],require:"^https://context7\\.com/"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"context7-libraries",itemTag:"library",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var rl,k_,ol,uL,jp=y(()=>{"use strict";Ur();rl=["mcp__Figma__","mcp__figma__"],k_={get_metadata:"Read structure",get_screenshot:"Viewed screenshot",get_variable_defs:"Read variables",get_figjam:"Read FigJam board",get_design_context:"Read design context"},ol=Object.keys(k_),uL=new Set(ol)});var R_,v_,Hp,Up=y(()=>{"use strict";jp();R_="^[0-9a-zA-Z]{22,128}$",v_=rl.flatMap(e=>ol.map(t=>`${e}${t}`)),Hp={id:"figma",label:"Figma",icon:"symbol-color",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,titleFallbackPattern:"^Figma file [0-9a-zA-Z]{1,8}$",match:{claude:{prefixes:[...rl],exact:v_}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileKey"}],require:R_},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://www\\.figma\\.com/"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"figma-files",itemTag:"file",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var A_,I_,Bp,Wp=y(()=>{"use strict";A_="^https?://github\\.com/([^/]+)/[^/]+/(?:issues|pull)/\\d+",I_="^https?://github\\.com/[^/]+/([^/]+)/(?:issues|pull)/\\d+",Bp={id:"github",label:"GitHub",icon:"issues",match:{claude:{prefixes:["mcp__github__"]},codex:{namespaceSuffix:"github",functionCallNames:["_fetch_issue","_search_issues"],invocationTools:["github_fetch_issue","github_search_issues"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"template",template:"{owner}/{repo}#{number}",from:{owner:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^([^/]+)/[^/]+$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:A_,extract:"$1"}]]}],repo:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^[^/]+/([^/]+)$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:I_,extract:"$1"}]]}],number:[{op:"path",path:"number"}]}}],require:"^[^/]+/[^/]+#\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"html_url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"body"},{op:"transform",fn:"decodeHtmlEntities"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"state"}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]},{key:"assignees",label:"Assignees",icon:"account",pipe:[{op:"path",path:"assignees"},{op:"join",sep:", "}]},{key:"milestone",label:"Milestone",icon:"milestone",pipe:[{op:"coalesce",of:[[{op:"path",path:"milestone"}],[{op:"path",path:"milestone.title"}]]}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"issue_type"}],[{op:"path",path:"issue_type.name"}]]}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"github-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var x_,Jp,Gp=y(()=>{"use strict";x_="^[A-Z][A-Z0-9_]*-\\d+$",Jp={id:"jira",label:"Jira",icon:"issues",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"]},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_fetch","_getjiraissue"],invocationTools:["atlassian_rovo.fetch","atlassian_rovo.getJiraIssue"]}},wrapperKeys:["nodes","issues","items","results"],reference:{nativeId:{pipe:[{op:"path",path:"key"}],require:x_},title:{pipe:[{op:"path",path:"fields.summary"}],require:".+"},url:{pipe:[{op:"path",path:"webUrl"}],require:"^https?://"},description:{pipe:[{op:"path",path:"fields.description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.status.name"}],[{op:"path",path:"fields.status"}]]}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.priority.name"}],[{op:"path",path:"fields.priority"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"fields.labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jira-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var qp,Kp=y(()=>{"use strict";qp={id:"jollimemory",label:"Jolli Memory",icon:"history",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,match:{claude:{prefixes:["mcp__jollimemory__"],exact:["mcp__jollimemory__recall","mcp__jollimemory__search","mcp__jollimemory__get_decision_timeline"]},codex:{namespaceSuffix:"jollimemory",functionCallNames:["recall","search","get_decision_timeline"],invocationTools:["recall","search","get_decision_timeline"],invocationServer:"jollimemory"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"tool"}],require:"^(recall|search|get_decision_timeline)$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jolli-memory-lookups",itemTag:"lookup",bodyTag:"queries",maxCharsPerReference:2e3,maxTotalChars:6e3}}});var C_,Vp,Yp=y(()=>{"use strict";C_="^[A-Z][A-Z0-9_]*-\\d+$",Vp={id:"linear",label:"Linear",icon:"issues",match:{claude:{prefixes:["mcp__linear__","mcp__claude_ai_Linear__"],denySuffixes:["list_issues","search_issues"]},codex:{namespaceSuffix:"linear",functionCallNames:["_fetch","_get_issue"],invocationTools:["linear_fetch","linear.get_issue"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:C_},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"status"}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"priority"}],[{op:"path",path:"priority.name"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"linear-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var Xp,zp=y(()=>{"use strict";Xp={id:"monday",label:"monday.com",icon:"table",match:{claude:{prefixes:["mcp__claude_ai_monday_com__"],acceptSuffix:"get_board_items_page"},codex:{namespaceSuffix:"monday_com",functionCallNames:["_get_board_items_page"],invocationTools:["monday_com.get_board_items_page"]}},wrapperKeys:["items"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://([\\w-]+\\.)*monday\\.com/",requireFlags:"i"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"item"}]},{key:"board",label:"Board",icon:"project",pipe:[{op:"path",path:"board"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"monday-items",itemTag:"item",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var N_,P_,O_,Qp,Zp=y(()=>{"use strict";N_="[-/]([0-9a-fA-F]{32})(?=[/?#]|$)",P_="^https://(www\\.notion\\.so|notion\\.so|app\\.notion\\.com|[A-Za-z0-9.-]+\\.notion\\.site)/",O_="<content\\b[^>]*>([\\s\\S]*?)</content>",Qp={id:"notion",label:"Notion",icon:"file-text",match:{claude:{prefixes:["mcp__claude_ai_Notion__"],acceptSuffix:"notion-fetch"},codex:{namespaceSuffix:"notion",functionCallNames:["_fetch"],invocationTools:["notion_fetch"]}},wrapperKeys:["results","items","pages"],reference:{guard:{pipe:[{op:"path",path:"metadata.type"}],require:"^page$"},nativeId:{pipe:[{op:"path",path:"url"},{op:"regex",pattern:N_,extract:"$1",lastMatch:!0},{op:"transform",fn:"lowercase"}],require:"^[0-9a-fA-F]{32}$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:P_,requireFlags:"i"},description:{pipe:[{op:"path",path:"text"},{op:"regex",pattern:O_,extract:"$1"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"page"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"notion-pages",itemTag:"page",bodyTag:"content",fieldAttrs:!1,maxCharsPerReference:3e4,maxTotalChars:6e4}}});var sl,D_,L_,il,TL,em=y(()=>{"use strict";Ur();sl=["mcp__Sentry__","mcp__sentry__"],D_="get_sentry_resource",L_="analyze_issue_with_seer",il=[D_,L_],TL=new Set(il)});var M_,$_,F_,j_,tm,nm=y(()=>{"use strict";em();M_=sl.flatMap(e=>il.map(t=>`${e}${t}`)),$_="^[A-Za-z0-9.-]{1,253}/[A-Za-z0-9_-]{1,128}$",F_="^Issue [A-Za-z0-9_-]{1,128}$",j_="^Issue [0-9]{1,128}$",tm={id:"sentry",label:"Sentry",icon:"bug",trackOnly:!0,argumentsDerived:!0,titleFallbackPattern:F_,titleFallbackPoorestPattern:j_,match:{claude:{prefixes:[...sl],exact:M_}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"nativeId"}],require:$_},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://(?:[A-Za-z0-9-]{1,63}\\.)*sentry\\.io/issues/[A-Za-z0-9_-]{1,128}$",requireFlags:"i"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[{key:"issue-id",label:"Issue",icon:"bug",pipe:[{op:"path",path:"shortId"}]},{key:"project",label:"Project",icon:"symbol-property",pipe:[{op:"path",path:"project"}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"sentry-issues",itemTag:"issue",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var rm,om=y(()=>{"use strict";rm={id:"slack",label:"Slack",icon:"comment-discussion",match:{claude:{prefixes:["mcp__claude_ai_Slack__"],acceptSuffix:"slack_read_thread"},codex:{namespaceSuffix:"slack",functionCallNames:["_slack_read_thread"],invocationTools:["slack.slack_read_thread"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"template",template:"{c}-{t}",from:{c:[{op:"path",path:"channelId"}],t:[{op:"path",path:"parentTs"}]}}],require:"^[A-Z0-9]+-\\d{7,}\\.\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://"},description:{pipe:[{op:"path",path:"text"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"comment-discussion",pipe:[{op:"const",value:"thread"}]},{key:"replies",label:"Replies",icon:"reply",pipe:[{op:"path",path:"replyCount"}]},{key:"channel",label:"Channel",icon:"symbol-namespace",pipe:[{op:"path",path:"channelId"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"slack-threads",itemTag:"thread",bodyTag:"messages",fieldAttrs:!0,maxCharsPerReference:8e3,maxTotalChars:4e4}}});var H_,al,ll,sm,im=y(()=>{"use strict";H_="^dpl_[A-Za-z0-9]+$",al=[{op:"coalesce",of:[[{op:"path",path:"readyState"}],[{op:"path",path:"state"}]]}],ll=[{op:"template",template:"https://{host}",from:{host:[{op:"path",path:"url"}]}}],sm={id:"vercel",label:"Vercel",icon:"rocket",trackOnly:!0,match:{claude:{prefixes:["mcp__claude_ai_Vercel__","mcp__vercel__"],acceptSuffix:"get_deployment"}},wrapperKeys:["deployment"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:H_},title:{pipe:[{op:"coalesce",of:[[{op:"template",template:"{name} ({state})",from:{name:[{op:"path",path:"name"}],state:al}}],[{op:"path",path:"name"}]]}],require:".+"},url:{pipe:ll,require:"^https://[A-Za-z0-9.-]+\\.vercel\\.app$",requireFlags:"i"},description:{pipe:[{op:"coalesce",of:[[{op:"path",path:"errorMessage"}],[{op:"template",template:"Deployment {state} \xB7 {target} \xB7 {url}",from:{state:al,target:[{op:"path",path:"target"}],url:ll}}],[{op:"template",template:"Deployment {state} \xB7 {url}",from:{state:al,url:ll}}]]}],optional:!0}},fields:[{key:"target",label:"Target",icon:"rocket",pipe:[{op:"path",path:"target"}]},{key:"framework",label:"Framework",icon:"symbol-property",pipe:[{op:"path",path:"project.framework"}]},{key:"error-code",label:"Error",icon:"error",pipe:[{op:"path",path:"errorCode"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"vercel-deployments",itemTag:"deployment",bodyTag:"content",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var am,lm=y(()=>{"use strict";am={id:"zoom-doc",label:"Zoom Doc",icon:"file",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"hub_get_file_content"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileId"}],require:"^[\\w.-]+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://docs\\.zoom\\.us/doc/"},description:{pipe:[{op:"path",path:"content"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"doc"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-docs",itemTag:"doc",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var cm,dm=y(()=>{"use strict";cm={id:"zoom-meeting",label:"Zoom Meeting",icon:"device-camera-video",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"get_meeting_assets"},codex:{namespaceSuffix:"zoom",functionCallNames:["_get_meeting_assets"],invocationTools:["zoom.get_meeting_assets"]}},wrapperKeys:[],reference:{guard:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],require:".+"},nativeId:{pipe:[{op:"path",path:"meeting_uuid"}],require:"^[\\w-]+$"},title:{pipe:[{op:"path",path:"topic"}],require:".+"},url:{pipe:[{op:"coalesce",of:[[{op:"path",path:"meeting_summary.summary_doc_url"}],[{op:"path",path:"deep_url"}]]}],require:"^https://"},description:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"meeting"}]},{key:"started",label:"Started",icon:"calendar",pipe:[{op:"path",path:"start_time"}]},{key:"meeting-number",label:"Meeting #",icon:"symbol-number",pipe:[{op:"path",path:"meeting_number"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-meetings",itemTag:"meeting",bodyTag:"summary",maxCharsPerReference:2e4,maxTotalChars:4e4}}});var um,pm=y(()=>{"use strict";Dp();Mp();Fp();Up();Wp();Gp();Kp();Yp();zp();Zp();nm();om();im();lm();dm();um=[Vp,Lp,Jp,Bp,Qp,rm,cm,am,Op,Xp,$p,qp,sm,Hp,tm]});function B_(e,t,n){if(!ue(e))return"op must be an object";if(n.opCount++,n.opCount>mm)return`pipe exceeds ${mm} ops`;let r=e.op;if(typeof r!="string"||!U_.has(r))return`unknown op: ${String(r)}`;switch(r){case"path":return typeof e.path=="string"?void 0:"path op requires a string 'path'";case"const":return typeof e.value=="string"?void 0:"const op requires a string 'value'";case"join":return typeof e.sep=="string"?void 0:"join op requires a string 'sep'";case"regex":return typeof e.pattern!="string"?"regex op requires a string 'pattern'":e.extract!==void 0&&typeof e.extract!="string"?"regex.extract must be a string":e.lastMatch!==void 0&&typeof e.lastMatch!="boolean"?"regex.lastMatch must be a boolean":void 0;case"transform":return typeof e.fn!="string"?"transform op requires a string 'fn'":Np.has(e.fn)?void 0:`unknown transform: ${e.fn}`;case"coalesce":{if(t+1>hs)return`nesting depth exceeds ${hs}`;if(!Array.isArray(e.of))return"coalesce op requires an array 'of'";for(let o of e.of){let s=cl(o,t+1,n);if(s!==void 0)return s}return}case"template":{if(t+1>hs)return`nesting depth exceeds ${hs}`;if(typeof e.template!="string")return"template op requires a string 'template'";if(!ue(e.from))return"template op requires an object 'from'";for(let o of Object.values(e.from)){let s=cl(o,t+1,n);if(s!==void 0)return s}return}}}function cl(e,t,n){if(!Array.isArray(e))return"pipe must be an array";for(let r of e){let o=B_(r,t,n);if(o!==void 0)return o}}function Br(e,t){let n=cl(e,0,{opCount:0});return n===void 0?void 0:`${t}: ${n}`}function W_(e){if(!ue(e))return{ok:!1,error:"definition must be an object"};if(typeof e.id!="string"||e.id.length===0)return{ok:!1,error:"id must be a non-empty string"};if(typeof e.label!="string"||e.label.length===0)return{ok:!1,error:"label must be a non-empty string"};if(typeof e.icon!="string"||e.icon.length===0)return{ok:!1,error:"icon must be a non-empty string"};if(e.titleFallbackPattern!==void 0){if(typeof e.titleFallbackPattern!="string"||e.titleFallbackPattern.length===0)return{ok:!1,error:"titleFallbackPattern must be a non-empty string"};try{new RegExp(e.titleFallbackPattern)}catch(n){return{ok:!1,error:`titleFallbackPattern is not a valid regex: ${n.message}`}}}if(e.titleFallbackPoorestPattern!==void 0){if(typeof e.titleFallbackPoorestPattern!="string"||e.titleFallbackPoorestPattern.length===0)return{ok:!1,error:"titleFallbackPoorestPattern must be a non-empty string"};try{new RegExp(e.titleFallbackPoorestPattern)}catch(n){return{ok:!1,error:`titleFallbackPoorestPattern is not a valid regex: ${n.message}`}}if(e.titleFallbackPattern===void 0)return{ok:!1,error:"titleFallbackPoorestPattern requires titleFallbackPattern"}}if(!ue(e.match))return{ok:!1,error:"match must be an object"};if(!Array.isArray(e.wrapperKeys))return{ok:!1,error:"wrapperKeys must be an array"};if(!ue(e.reference))return{ok:!1,error:"reference must be an object"};if(!Array.isArray(e.fields))return{ok:!1,error:"fields must be an array"};if(!ue(e.storage))return{ok:!1,error:"storage must be an object"};if(!ue(e.render))return{ok:!1,error:"render must be an object"};let t=e.reference;for(let n of["nativeId","title"]){let r=t[n];if(!ue(r))return{ok:!1,error:`reference.${n} is required`};let o=Br(r.pipe,`reference.${n}.pipe`);if(o!==void 0)return{ok:!1,error:o}}if(t.url!==void 0){if(!ue(t.url))return{ok:!1,error:"reference.url must be an object"};let n=Br(t.url.pipe,"reference.url.pipe");if(n!==void 0)return{ok:!1,error:n}}if(t.description!==void 0){if(!ue(t.description))return{ok:!1,error:"reference.description must be an object"};let n=Br(t.description.pipe,"reference.description.pipe");if(n!==void 0)return{ok:!1,error:n}}if(t.guard!==void 0){if(!ue(t.guard))return{ok:!1,error:"reference.guard must be an object"};let n=Br(t.guard.pipe,"reference.guard.pipe");if(n!==void 0)return{ok:!1,error:n}}for(let[n,r]of e.fields.entries()){if(!ue(r))return{ok:!1,error:`fields[${n}] must be an object`};if(typeof r.key!="string"||!fm.test(r.key))return{ok:!1,error:`fields[${n}].key must match ${fm}`};if(typeof r.label!="string"||r.label.length===0)return{ok:!1,error:`fields[${n}].label must be a non-empty string`};let o=Br(r.pipe,`fields[${n}].pipe`);if(o!==void 0)return{ok:!1,error:o}}return{ok:!0,def:e}}function qn(){if(ys!==void 0)return ys;let e=[];for(let t of um){let n=W_(t);if(!n.ok)throw new Error(`invalid built-in source definition '${t.id}': ${n.error}`);e.push(n.def)}return ys=new dl(e),ys}var mm,hs,U_,fm,dl,ys,ws=y(()=>{"use strict";Ur();Pp();pm();mm=64,hs=8,U_=new Set(["path","coalesce","regex","template","join","const","transform"]);fm=/^[\w-]+$/;dl=class{constructor(t){this.definitions=t}all(){return this.definitions}byId(t){return this.definitions.find(n=>n.id===t)}match(t,n,r,o){return t==="claude"?this.definitions.find(s=>{let i=s.match.claude;return!(i===void 0||!i.prefixes.some(a=>n.startsWith(a))||i.exact!==void 0&&!i.exact.includes(n)||i.acceptSuffix!==void 0&&!n.endsWith(i.acceptSuffix)||i.denySuffixes?.some(a=>n.endsWith(a)))}):r!==void 0?this.definitions.find(s=>{let i=s.match.codex;return i!==void 0&&i.namespaceSuffix===r&&i.functionCallNames.includes(n)}):this.definitions.find(s=>{let i=s.match.codex;return i===void 0||!i.invocationTools.includes(n)?!1:i.invocationServer===void 0||i.invocationServer===o})}}});function hm(e,t){let n=qn().byId(e);if(n===void 0||n.storage.nativeIdPathSafe===!1){let r=t.replace(/[^\w.-]/g,"-"),o=X_(t).slice(0,8);return`${r}-${o}`}if(t.includes("..")||/[/\\]/.test(t))throw new Error(`Refusing unsafe ${e} nativeId for path: ${JSON.stringify(t)}`);return t}function ul(e){return K_(e)}function J_(e){return e.replace(/^\n+/,"").replace(/\n+$/,"")}function G_(e){let t=e.indexOf(q_);return t===-1?e:e.slice(0,t)}function K_(e){if(typeof e!="string")return null;let t=e.split(`
`);if(t[0]?.trim()!=="---")return null;let n=-1;for(let k=1;k<t.length;k++)if(t[k].trim()==="---"){n=k;break}if(n===-1)return null;let r=t.slice(1,n),o=J_(G_(t.slice(n+1).join(`
`))),s={},i=[],a=!1;for(let k of r){if(a){let I=/^\s+- (.+)$/.exec(k);if(I){try{let P=JSON.parse(I[1]);V_(P)&&i.push(P)}catch{}continue}a=!1}if(k.trim()==="fields:"){a=!0;continue}let b=/^([a-zA-Z]+):\s*(.+)$/.exec(k);b&&(s[b[1]]=b[2])}let l=k=>{let b=s[k];if(b!==void 0)try{let I=JSON.parse(b);return typeof I=="string"?I:void 0}catch{return}},c=l("source"),d=l("nativeId");if(c===void 0||d===void 0||!Y_(c))return null;let u=c,p=d,m=l("title"),g=l("url"),h=l("referencedAt"),E=l("sourceToolName");return!m||h===void 0||!E?null:{mapKey:`${u}:${p}`,source:u,nativeId:p,title:m,referencedAt:h,toolName:E,...g!==void 0?{url:g}:{},...i.length>0?{fields:i}:{},...o.length>0?{description:o}:{}}}function V_(e){if(typeof e!="object"||e===null)return!1;let t=e;return!(typeof t.key!="string"||typeof t.label!="string"||typeof t.value!="string"||!/^[\w-]+$/.test(t.key)||t.icon!==void 0&&typeof t.icon!="string")}function Y_(e){return e.length>0&&/^[\w-]+$/.test(e)}function ym(e){return qn().byId(e)!==void 0}function X_(e){return(0,gm.createHash)("sha256").update(e,"utf-8").digest("hex")}var gm,QL,q_,Wr=y(()=>{"use strict";gm=require("node:crypto");w();ws();QL=f("ReferenceStore");q_="<!-- jolli:auto-note -->"});function z_(e){return`${e.source}:${e.skill}`}function Q_(e,t){if(e===void 0)return t;let n=e.usage===void 0||t.usage===void 0?e.usage??t.usage:{input:e.usage.input+t.usage.input,output:e.usage.output+t.usage.output,cached:e.usage.cached+t.usage.cached,confidence:e.usage.confidence==="attributed"&&t.usage.confidence==="attributed"?"attributed":"estimated"},r=[e,t].filter(l=>l.usage!==void 0),o=ek(r),{usageBySession:s,supersededDocIds:i,...a}=e;return{...a,invocationCount:e.invocationCount+t.invocationCount,...n!==void 0?{usage:n}:{},...o!==void 0?{usageBySession:o}:{},...e.detection==="heuristic"||t.detection==="heuristic"?{detection:"heuristic"}:{},...e.jolliDocId===void 0&&t.jolliDocId!==void 0?{jolliDocId:t.jolliDocId,jolliDocUrl:t.jolliDocUrl}:{},...Z_(e,t)}}function Z_(e,t){let n=new Set([...e.supersededDocIds??[],...t.supersededDocIds??[]]);e.jolliDocId!==void 0&&t.jolliDocId!==void 0&&n.add(t.jolliDocId);let r=e.jolliDocId??t.jolliDocId;return r!==void 0&&n.delete(r),n.size>0?{supersededDocIds:[...n]}:{}}function Es(e){if(e.supersededDocIds===void 0)return e;let{supersededDocIds:t,...n}=e;return n}function ek(e){if(e.length===0)return;let t=[];for(let r of e){if(r.usageBySession===void 0)return;t.push(r.usageBySession)}let n={};for(let r of t)for(let[o,s]of Object.entries(r)){let i=n[o];n[o]=i===void 0?s:{input:i.input+s.input,cached:i.cached+s.cached,output:i.output+s.output,confidence:i.confidence==="attributed"&&s.confidence==="attributed"?"attributed":"estimated"}}return n}function Ss(e){let t=new Map;for(let r of e)t.has(r.archivedKey)||t.set(r.archivedKey,r);let n=new Map;for(let r of t.values()){let o=z_(r);n.set(o,Q_(n.get(o),r))}return[...n.values()]}var pl=y(()=>{"use strict"});var n0,wm=y(()=>{"use strict";w();n0=f("SkillStore")});async function bs(e){let t=B(e);return await(0,pe.mkdir)(t,{recursive:!0}),t}async function km(e,t){let n=await bs(t);await hp(t,async()=>{let o={...(await ck(n)).sessions,[e.sessionId]:e},{activeSessions:s,stalePaths:i}=uk(o),a={version:1,sessions:s};await v((0,ht.join)(n,bm),JSON.stringify(a,null,"	")),i.length>0&&await pk(n,i)})}async function ok(e,t,n){await v((0,ht.join)(t,n),JSON.stringify(e,null,"	"))}function Z(){return(0,ht.join)((0,Sm.homedir)(),".jolli","jollimemory")}async function rn(e){let t=(0,ht.join)(e,_m);try{let n=await(0,pe.readFile)(t,"utf-8"),r=JSON.parse(n);return sk(r)}catch{return nn.debug("No config file found in %s, using defaults",e),{}}}function sk(e){if(e.syncEnabled===void 0)return e;let{syncEnabled:t,...n}=e;return n.autoSyncEnabled===void 0?{...n,autoSyncEnabled:t}:n}function ik(e,t){return!("localAgentTool"in t)||"localAgentPath"in t||(e.localAgentTool??"claude-code")===(t.localAgentTool??"claude-code")||e.localAgentPath===void 0?t:(nn.info("Clearing localAgentPath (was set for %s, switching to %s)",e.localAgentTool??"claude-code",t.localAgentTool),{...t,localAgentPath:void 0})}async function Gr(e,t){await Ba(t,async()=>{await Rm(e,t)}),nn.info("Config saved to %s",t)}async function Ts(e){return ak(e,Z())}async function ak(e,t){return Ba(t,async()=>{let{update:n,result:r}=e(await rn(t));return n!==null&&(await Rm(n,t),nn.info("Config saved to %s",t)),r})}async function Rm(e,t){let n=await rn(t),r={...n,...ik(n,e)};await v((0,ht.join)(t,_m),JSON.stringify(r,null,"	"))}async function se(){return rn(Z())}async function yt(e){return Gr(e,Z())}async function vm(){return lk(Z())}async function lk(e){let t=await rn(e);if(t.installId)return{installId:t.installId,created:!1};let n=(0,ht.join)(e,nk),r=(0,Jr.randomUUID)();await(0,pe.mkdir)(e,{recursive:!0});let o,s,i=`${n}.${(0,Jr.randomUUID)()}.tmp`;try{await(0,pe.writeFile)(i,r,{flag:"wx"});try{await(0,pe.link)(i,n),o=r,s=!0}catch{o=await Em(n,r),s=!1}}catch(a){nn.warn("could not stage the install-id sentinel: %s",R(a)),o=await Em(n,r),s=!1}finally{await(0,pe.rm)(i,{force:!0}).catch(()=>{})}return t.installId!==o&&await Gr({installId:o},e).catch(a=>{nn.warn("could not persist the install id: %s",R(a))}),{installId:o,created:s}}async function Em(e,t){try{let n=(await(0,pe.readFile)(e,"utf-8")).trim();return n.length>0?n:t}catch{return t}}async function ck(e){let t=(0,ht.join)(e,bm);try{let n=await(0,pe.readFile)(t,"utf-8");return JSON.parse(n)}catch{return{version:1,sessions:{}}}}async function dk(e,t=Tm){let n=(0,ht.join)(e,t);try{let r=await(0,pe.readFile)(n,"utf-8");return JSON.parse(r)}catch{return{version:1,cursors:{}}}}function uk(e,t=rk){let n=Date.now(),r={},o=[];for(let[s,i]of Object.entries(e)){let a=n-new Date(i.updatedAt).getTime();a>t?(nn.info("Pruning stale session %s (age: %dh)",s,Math.round(a/36e5)),o.push(i.transcriptPath)):r[s]=i}return{activeSessions:r,stalePaths:o}}async function pk(e,t){let n=new Set(t);for(let r of[Tm,tk]){let s={...(await dk(e,r)).cursors},i=0;for(let a of Object.keys(s))n.has(a)&&(delete s[a],i++);i>0&&await ok({version:1,cursors:s},e,r)}}function ml(e,t){let n={...e},r=!1;for(let o of t)o in n&&(delete n[o],r=!0);return{value:n,changed:r}}function Am(e){let t=!1,n={};for(let[i,a]of Object.entries(e.plans??{})){if(a.ignored===!0){t=!0;continue}let l=ml(a,mk);l.changed&&(t=!0),n[i]=l.value}let r;if(e.notes!==void 0){r={};for(let[i,a]of Object.entries(e.notes)){if(a.ignored===!0){t=!0;continue}let l=ml(a,fk);l.changed&&(t=!0),r[i]=l.value}}let o;if(e.references!==void 0){o={};for(let[i,a]of Object.entries(e.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){t=!0;continue}let c=ml(a,gk);c.changed&&(t=!0),o[i]=c.value}}return{registry:{version:1,plans:n,...r!==void 0?{notes:r}:{},...o!==void 0?{references:o}:{},...e.skills!==void 0?{skills:e.skills}:{}},changed:t}}var Jr,pe,Sm,ht,nn,bm,Tm,tk,_m,nk,rk,w0,E0,S0,mk,fk,gk,me=y(()=>{"use strict";Jr=require("node:crypto"),pe=require("node:fs/promises"),Sm=require("node:os"),ht=require("node:path");w();gs();Q();et();Wr();pl();wm();nn=f("SessionTracker"),bm="sessions.json",Tm="cursors.json",tk="discovery-cursors.json",_m="config.json",nk="install-id",rk=2880*60*1e3;w0=2880*60*1e3,E0=10080*60*1e3,S0=(0,Jr.randomBytes)(4).toString("hex");mk=["ignored","branch","editCount"],fk=["ignored","branch"],gk=["ignored","branch","commitHash","contentHashAtCommit"]});function Ue(e,t=""){let n=t?` ${t}`:"";return`${hk} ${e}${n}`}function Kr(e,t){let n=typeof t=="string"?[t]:t;return e.some(r=>{let o=r.hooks;return Array.isArray(o)?o.some(s=>typeof s.command=="string"&&n.some(i=>s.command.includes(i))):!1})}function on(e,t){let n=typeof t=="string"?[t]:t,r=[];for(let o of e){let s=o.hooks;if(!Array.isArray(s)){r.push(o);continue}let i=s.filter(a=>!(typeof a.command=="string"&&n.some(l=>a.command.includes(l))));i.length>0&&r.push({...o,hooks:i})}return r}function fl(e){return Kr(e,_s)}function Rs(e){return on(e,_s)}var hk,_s,qr,ks,vs=y(()=>{"use strict";hk='"$HOME/.jolli/jollimemory/run-hook"';_s=["run-hook","StopHook","jollimemory-hooks.jar"],qr=["run-hook","SessionStartHook"],ks=["run-hook","GeminiAfterAgentHook","jollimemory-hooks.jar"]});function nt(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>Et.major?!0:n<Et.major?!1:r>=Et.minor}function Ft(e){let t=e,n=t?.message??String(e),r=t?.code;return r==="ENOENT"?null:r==="EACCES"||r==="EPERM"?{kind:"permission",message:n}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(n)?{kind:"corrupt",message:n}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(n)?{kind:"locked",message:n}:/no such table|no such column/i.test(n)?{kind:"schema",message:n}:/SQLITE_CANTOPEN|unable to open/i.test(n)?{kind:"permission",message:n}:{kind:"unknown",message:n}}var Et,Be=y(()=>{"use strict";Et={major:22,minor:13}});function Tk(){return bk.width}async function Yn(e,t,n=Tk()){let r=new Array(e.length),o=0,s=Math.max(1,Math.min(n,e.length)),i=Array.from({length:s},async()=>{for(;;){let a=o++;if(a>=e.length)return;r[a]=await t(e[a],a)}});return await Promise.all(i),r}var Sl,bk,Xn=y(()=>{"use strict";Sl=class{constructor(){this.slots=8;this.bytesCap=67108864;this.slotsInUse=0;this.bytesInUse=0;this.waiting=[]}get width(){return this.slots}configure(t){t.slots!==void 0&&(this.slots=Math.max(1,Math.floor(t.slots))),t.bytesInFlight!==void 0&&(this.bytesCap=Math.max(0,Math.floor(t.bytesInFlight))),this.pump()}reset(){this.slots=8,this.bytesCap=67108864,this.pump()}async run(t,n){let r=await this.acquire(Math.max(0,t));try{return await n()}finally{this.slotsInUse--,this.bytesInUse-=r,this.pump()}}clamp(t){return Math.min(t,this.bytesCap)}fits(t){return this.slotsInUse<this.slots&&this.bytesInUse+this.clamp(t)<=this.bytesCap}acquire(t){return this.waiting.length===0&&this.fits(t)?Promise.resolve(this.take(t)):new Promise(n=>{this.waiting.push({want:t,wake:n})})}take(t){let n=this.clamp(t);return this.slotsInUse++,this.bytesInUse+=n,n}pump(){for(;this.waiting.length>0&&this.fits(this.waiting[0].want);){let t=this.waiting.shift();t.wake(this.take(t.want))}}},bk=new Sl});function jf(e){if((0,Ff.platform)()==="win32")try{Vu("attrib",["+h",e],{timeout:2e3})}catch{}}var Ff,Hf=y(()=>{"use strict";Ff=require("node:os");Re()});var Uf,z,Ae,tr,he,Fs=y(()=>{"use strict";Uf=require("node:crypto"),z=require("node:fs"),Ae=require("node:path");w();Hf();re();tr=f("MetadataManager"),he=class e{constructor(t){this.jolliDir=t;this.manifestPath=(0,Ae.join)(t,"manifest.json"),this.branchesPath=(0,Ae.join)(t,"branches.json"),this.configPath=(0,Ae.join)(t,"config.json"),this.migrationPath=(0,Ae.join)(t,"migration.json"),this.indexPath=(0,Ae.join)(t,"index.json")}ensure(){(0,z.mkdirSync)(this.jolliDir,{recursive:!0})!==void 0&&jf(this.jolliDir),(0,z.existsSync)(this.manifestPath)||this.atomicWrite(this.manifestPath,JSON.stringify({version:1,files:[]},null,"	")),(0,z.existsSync)(this.branchesPath)||this.atomicWrite(this.branchesPath,JSON.stringify({version:1,mappings:[]},null,"	")),(0,z.existsSync)(this.configPath)||this.atomicWrite(this.configPath,JSON.stringify({version:1,sortOrder:"date"},null,"	"))}readManifest(){return this.readJson(this.manifestPath)??{version:1,files:[]}}updateManifest(t){let n=this.readManifest(),r=n.files.filter(o=>o.fileId!==t.fileId);r.push(t),this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),tr.info("Manifest updated: %s (%s)",t.path,t.type)}removeFromManifest(t){let n=this.readManifest(),r=n.files.filter(o=>o.fileId!==t);return r.length===n.files.length?!1:(this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),!0)}unregisterFilesByType(t){let n=this.readManifest(),r=n.files.filter(s=>s.type!==t),o=n.files.length-r.length;return o===0?0:(this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:r},null,"	")),tr.info("Manifest unregistered %d entries of type=%s",o,t),o)}replaceFiles(t){let n=this.readManifest();this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:[...t]},null,"	"))}findByPath(t){return this.readManifest().files.find(n=>n.path===t)}findById(t){return this.readManifest().files.find(n=>n.fileId===t)}updatePath(t,n){let r=this.readManifest();if(!r.files.find(i=>i.fileId===t))return!1;let s=r.files.map(i=>i.fileId===t?{...i,path:n}:i);return this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:s},null,"	")),!0}resolveFolderForBranch(t){let n=this.readBranches(),r=n.mappings.find(a=>a.branch===t);if(r)return r.folder;let o=e.transcodeBranchName(t),s={folder:o,branch:t,createdAt:new Date().toISOString()},i={...n,mappings:[...n.mappings,s]};return this.atomicWrite(this.branchesPath,JSON.stringify(i,null,"	")),tr.info("Branch mapping created: %s \u2192 %s",t,o),o}removeBranchMapping(t){let n=this.readBranches(),r=n.mappings.filter(o=>o.branch!==t);return r.length===n.mappings.length?!1:(this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:r},null,"	")),tr.info("Branch mapping removed: %s (no remaining head)",t),!0)}renameBranchFolder(t,n){let r=this.readBranches(),o=r.mappings.map(l=>l.folder===t?{...l,folder:n}:l);this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:o},null,"	"));let s=this.readManifest(),i=0,a=s.files.map(l=>l.path.startsWith(`${t}/`)?(i++,{...l,path:l.path.replace(`${t}/`,`${n}/`)}):l);return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...s,files:a},null,"	")),i}removeBranchFolder(t){let n=this.readBranches();this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:n.mappings.filter(i=>i.folder!==t)},null,"	"));let r=this.readManifest(),o=r.files.filter(i=>!i.path.startsWith(`${t}/`)),s=r.files.length-o.length;return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:o},null,"	")),s}unregisterBranches(t){let n=new Set(t);if(n.size===0)return 0;let r=this.readBranches(),o=r.mappings.filter(i=>!n.has(i.branch)),s=r.mappings.length-o.length;return s===0?0:(this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:o},null,"	")),tr.info("Branch mappings unregistered: %d",s),s)}readBranches(){return this.readJson(this.branchesPath)??{version:1,mappings:[]}}listBranchMappings(){return this.readBranches().mappings}folderToBranch(t){try{return this.listBranchMappings().find(n=>n.folder===t)?.branch??t}catch{return t}}listIndexHeads(){let t=this.readJson(this.indexPath);return!t||!Array.isArray(t.entries)?[]:t.entries.filter(n=>typeof n?.commitHash=="string"&&typeof n.branch=="string"&&(n.parentCommitHash===null||typeof n.parentCommitHash=="string")&&n.parentCommitHash===null)}readIndex(){return this.readJson(this.indexPath)}readConfig(){return this.readJson(this.configPath)??{version:1,sortOrder:"date"}}saveConfig(t){this.atomicWrite(this.configPath,JSON.stringify(t,null,"	"))}readMigrationState(){return this.readJson(this.migrationPath)}saveMigrationState(t){this.atomicWrite(this.migrationPath,JSON.stringify(t,null,"	"))}reconcile(t){let n=this.readManifest();if(n.files.length===0||!n.files.some(a=>!(0,z.existsSync)((0,Ae.join)(t,a.path))))return 0;let o=new Map;try{this.walkDir(t,t,o)}catch{}let s=0,i=[];for(let a of n.files){let l=(0,Ae.join)(t,a.path);if((0,z.existsSync)(l))i.push(a);else{let c=o.get(a.fingerprint);c&&c!==a.path?(i.push({...a,path:c}),s++):(tr.warn("Manifest entry '%s' (id=%s) not found on disk \u2014 keeping entry to avoid data loss",a.path,a.fileId),i.push(a))}}return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:i},null,"	")),s}walkDir(t,n,r){for(let o of(0,z.readdirSync)(t,{withFileTypes:!0})){if(o.name.startsWith("."))continue;let s=(0,Ae.join)(t,o.name);if(o.isDirectory())this.walkDir(s,n,r);else if(o.name.endsWith(".md"))try{let i=(0,z.readFileSync)(s,"utf-8"),a=e.sha256(i);r.set(a,ke((0,Ae.relative)(n,s)))}catch{}}}static transcodeBranchName(t){let n=t.replace(/[/\\:*?~^]/g,"-");return n=n.replace(/-{3,}/g,"-"),n=n.replace(/\.\./g,"--"),n=n.replace(/^[.-]+|[.-]+$/g,""),n||"default"}static sha256(t){return(0,Uf.createHash)("sha256").update(t,"utf-8").digest("hex")}readJson(t){if(!(0,z.existsSync)(t))return null;try{return JSON.parse((0,z.readFileSync)(t,"utf-8"))}catch{return null}}atomicWrite(t,n){let r=(0,Ae.dirname)(t);(0,z.mkdirSync)(r,{recursive:!0});let o=`${t}.tmp`;(0,z.writeFileSync)(o,n,"utf-8"),(0,z.renameSync)(o,t)}}});function AR(e,t){if(process.env.VITEST)return null;let n=t?`${t}@${e}`:e;try{return Se("ssh",["-G",n],{encoding:"utf-8",timeout:kR,stdio:["ignore","pipe","pipe"]})}catch(r){return _R.debug("ssh -G %s failed: %s",n,r instanceof Error?r.message:String(r)),null}}function Wf(e,t){let n=new RegExp(`^${t}\\s+(\\S+)`,"i");for(let r of e.split(/\r?\n/)){let o=r.match(n);if(o?.[1])return o[1]}return null}function nr(e,t){if(!e)return{host:e,port:"",endpointRemapped:!1};let n=`${t??""}\0${e}`,r=Bf.get(n);if(r!==void 0)return r;let o=e,s="",i=vR(e,t);if(i){let c=Wf(i,"hostname");c&&(o=c);let d=Wf(i,"port");d&&(s=d)}let a=RR.get(o.toLowerCase()),l=a?{host:a,port:"",endpointRemapped:!0}:{host:o,port:s,endpointRemapped:!1};return Bf.set(n,l),l}function rr(e){return e.includes(":")&&!e.startsWith("[")?`[${e}]`:e}var _R,kR,RR,Bf,vR,Bl=y(()=>{"use strict";w();Re();_R=f("SshAliasResolver"),kR=5e3,RR=new Map([["ssh.github.com","github.com"],["altssh.gitlab.com","gitlab.com"],["altssh.bitbucket.org","bitbucket.org"]]),Bf=new Map,vR=AR});function Jf(){return(0,ie.join)((0,Kf.homedir)(),"Documents","jolli")}function Gl(e){return e?xR(e)?e:(IR.warn("Invalid customPath '%s': must be absolute and not contain '..'. Falling back to default.",e),Jf()):Jf()}function xR(e){return e?(0,ie.isAbsolute)(e)&&!e.includes(".."):!0}function Vf(e,t,n){let r=Gl(n),o=(0,ie.join)(r,e);if(!(0,jt.existsSync)(o)){let i=ng(r,e,t).match;return i||(Jl(o,e,t),o)}let s=og(o);return s&&Zf(s,t,e)?o:s&&rg(o,s)?(Jl(o,e,t),o):DR(r,e,t)}function Yf(e){let t=Kl(e,["config","--get","remote.origin.url"]);if(t){let r=t.match(/\/([^/]+?)(?:\.git)?$/);if(r?.[1])return r[1]}let n=Xf(e);return n?(0,ie.basename)(n):(0,ie.basename)(e)||"unknown"}function Xf(e){let t=Kl(e,["rev-parse","--git-common-dir"]);if(!t)return null;let n=(0,ie.isAbsolute)(t)?t:(0,ie.join)(e,t),r=(0,ie.dirname)(n);return r&&r!=="/"&&r!=="."?r:null}function CR(e,t){if(!(0,ie.basename)(e))return{claimable:!1,blocker:"not-a-project"};let n=Xf(e);if(!n)return{claimable:!1,blocker:"not-a-project"};let r;try{r=Gl(t)}catch{return{claimable:!1,blocker:"unresolvable-folder"}}return Ia(r,n)?{claimable:!1,blocker:"folder-inside-repo"}:{claimable:!0}}function ql(e,t){return CR(e,t).claimable}function zf(){let e=Number(process.env.JOLLI_GIT_CMD_TIMEOUT_MS);return Number.isFinite(e)&&e>0?e:3e4}function NR(){return Math.min(zf(),5e3)}function PR(e){return typeof e=="object"&&e!==null&&e.code==="ETIMEDOUT"}function Gf(e,t,n=zf()){return Se("git",t,{cwd:e,encoding:"utf-8",timeout:n,stdio:["ignore","pipe","pipe"]}).trim()||null}function Kl(e,t){try{return Gf(e,t)}catch(n){if(!PR(n))return null;try{return Gf(e,t,NR())}catch{return null}}}function Qf(e){return Kl(e,["remote","get-url","origin"])}function Zf(e,t,n){return e.remoteUrl&&t?qf(e.remoteUrl)===qf(t):!e.remoteUrl&&!t?e.repoName==null||e.repoName===n:!1}function qf(e){return tg(e).replace(/\/+$/,"").replace(/\.git$/,"").toLowerCase()}function ro(e,t){return OR.has(e)?t:""}function tg(e){let t=e.match(/^(?:git\+)?ssh:\/\/(?:([^@/]+)@)?([^/:]+)(?::(\d+))?\/(.+)$/i);if(t){let o=nr(t[2],t[1]||void 0),s=o.endpointRemapped?"":t[3]??o.port,i=ro(o.host.toLowerCase(),s);return`https://${rr(o.host)}${Wl(i,"22")}/${t[4]}`}let n=e.match(/^git:\/\/([^/:]+)(?::(\d+))?\/(.+)$/i);if(n)return`https://${n[1]}${Wl(n[2],"9418")}/${n[3]}`;let r=e.match(/^([^@/:]+)@([^/:]+):(.+)$/);if(r){let o=nr(r[2],r[1]||void 0),s=ro(o.host.toLowerCase(),o.port);return`https://${rr(o.host)}${Wl(s,"22")}/${r[3]}`}return e}function Wl(e,t){return!e||e===t?"":`:${e}`}function ng(e,t,n){let r=null,o=null,s=null;for(let i=2;i<=99;i++){let a=(0,ie.join)(e,`${t}-${i}`);if(!(0,jt.existsSync)(a)){s===null&&(s=a);continue}let l=og(a);if(l&&Zf(l,n,t)){r=a;break}l&&o===null&&rg(a,l)&&(o=a)}return{match:r,stub:o,firstUnused:s}}function DR(e,t,n){let r=ng(e,t,n);if(r.match)return r.match;let o=r.stub??r.firstUnused??(0,ie.join)(e,`${t}-${Date.now()}`);return Jl(o,t,n),o}function Jl(e,t,n){if(V())return;let r=new he((0,ie.join)(e,".jolli"));r.ensure();let o=r.readConfig();r.saveConfig({...o,remoteUrl:n??void 0,repoName:t})}function rg(e,t){return t.remoteUrl==null&&t.repoName==null}function og(e){let t=(0,ie.join)(e,".jolli","config.json");if(!(0,jt.existsSync)(t))return null;try{return JSON.parse((0,jt.readFileSync)(t,"utf-8"))}catch{return null}}var jt,Kf,ie,IR,eg,OR,oo=y(()=>{"use strict";jt=require("node:fs"),Kf=require("node:os"),ie=require("node:path");w();Re();Fs();re();Bl();IR=f("KBPathResolver");eg=new Set(["github.com","gitlab.com","bitbucket.org"]),OR=new Set(["github.com","gitlab.com","bitbucket.org"])});async function Ql(e){let t=await Y(["config","--get","remote.origin.url"],e),n=t.exitCode===0?t.stdout.trim():"";return n.length===0?so(e):hg(n,e)}function hg(e,t){let n=e.trim();if(n.length===0)return so(t);let r=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(n);if(r&&!n.includes("://")){let i=nr(r[2],r[1].slice(0,-1)||void 0),a=i.host.toLowerCase(),l=fg(a,mg(r[3])),c=gg("ssh",ro(a,i.port));return`https://${rr(a)}${c}/${l}`}let o;try{o=new URL(n)}catch{return so(t)}let s=o.protocol.replace(/:$/,"").toLowerCase();if(s==="ssh"||s==="git"||s==="http"||s==="https"){let a=s==="ssh"?nr(o.hostname,o.username||void 0):{host:o.hostname,port:"",endpointRemapped:!1},l=a.host.toLowerCase(),c=fg(l,mg(o.pathname.replace(/^\/+/,""))),d=a.endpointRemapped?"":o.port!==""?o.port:a.port,u=s==="ssh"?ro(l,d):d,p=gg(s,u);return`https://${rr(l)}${p}/${c}`}return so(s==="file"?o.pathname:t)}function so(e){let t=Dn(ke(e));return t.length===0?"file:///":t.startsWith("/")?`file://${t}`:`file:///${t}`}function mg(e){let t=Dn(e);return t.toLowerCase().endsWith(".git")&&(t=t.slice(0,-4)),Dn(t)}function fg(e,t){return eg.has(e)?t.toLowerCase():t}function gg(e,t){return t.length===0?"":e==="ssh"||e==="git"?t===HR[e]?"":`:${t}`:`:${t}`}var HR,Ws=y(()=>{"use strict";be();oo();re();Bl();HR={ssh:"22",git:"9418"}});function Zl(){return"claude-plugin"}var Ht,or=y(()=>{"use strict";Ht="claude-plugin/1.0.6"});function j(e,t,n,r){if(!Cg.test(t))throw new Error(`unsafe table name in migration: ${t}`);if(!Cg.test(n))throw new Error(`unsafe column name in migration: ${n}`);if(!iv.test(r))throw new Error(`unsafe column declaration in migration: ${r}`);e.prepare("SELECT name FROM pragma_table_info(?)").all(t).some(s=>s.name===n)||e.exec(`ALTER TABLE ${t} ADD COLUMN ${n} ${r};`)}var F,Cg,iv,W=y(()=>{"use strict";F=(e,t)=>({name:e,sql:t,run:n=>n.exec(t)}),Cg=/^[A-Za-z_][A-Za-z0-9_]*$/,iv=/^[A-Za-z0-9_ '.-]+$/});var av,lv,Ng,Pg=y(()=>{"use strict";W();av=`
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
`,lv=`
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
`,Ng=F("BASELINE_DDL",av+`
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
`+lv)});var Og,Dg=y(()=>{"use strict";W();Og=F("RECALL_RECEIPTS_DDL",`
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
`)});var Lg,Mg=y(()=>{"use strict";W();Lg=F("SKILL_CONTEXT_KIND_DDL",`
INSERT OR IGNORE INTO context_kinds (kind) VALUES ('skill');
`)});var $g,Fg=y(()=>{"use strict";W();$g={name:"EVENT_FAILED_KIND_DDL",run:e=>j(e,"events_raw","failed_kind","TEXT")}});var jg,Hg=y(()=>{"use strict";W();jg={name:"TOOL_CALL_TIME_DDL",run:e=>j(e,"session_tool_use","last_call_at_ms","INTEGER")}});var Ug,Bg=y(()=>{"use strict";W();Ug=F("SCHEMA_MIGRATIONS_DDL",`
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
`)});var Wg,Jg=y(()=>{"use strict";W();Wg=F("REPOS_DELETE_ALLOWED_DDL",`
DROP TRIGGER IF EXISTS repos_no_delete;
`)});function hv(e){j(e,"sessions","written_at_ms","INTEGER NOT NULL DEFAULT 0"),j(e,"session_model_usage","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),j(e,"session_tool_use","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),j(e,"recall_receipts","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),j(e,"commits","written_at_ms","INTEGER NOT NULL DEFAULT 0"),e.exec(cv),e.exec(uv),e.exec(pv),e.exec(mv),e.exec(gv),e.exec(fv)}var cv,dv,uv,pv,mv,fv,gv,Gg,qg=y(()=>{"use strict";W();cv=`
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
`,dv=`
CREATE INDEX IF NOT EXISTS ix_stats_daily_day ON stats_daily(tz, day);
`,uv=`
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
${dv}
`,pv=`
CREATE INDEX IF NOT EXISTS ix_sessions_written ON sessions(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_smu_sync ON session_model_usage(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_stu_sync ON session_tool_use(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_sync ON recall_receipts(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_commits_written ON commits(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_mem_written ON memories(written_at_ms);
`,mv=`
CREATE INDEX IF NOT EXISTS ix_sessions_keyset ON sessions(written_at_ms, event_id);
CREATE INDEX IF NOT EXISTS ix_smu_keyset ON session_model_usage(updated_at_ms, session_event_id, model);
CREATE INDEX IF NOT EXISTS ix_stu_keyset ON session_tool_use(updated_at_ms, session_event_id, tool_name, kind);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_keyset ON recall_receipts(updated_at_ms, receipt_id);
`,fv=`
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
`,gv=`
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
`;Gg={name:"SESSION_STATS_SYNC_DDL",run:hv}});var Kg,Vg=y(()=>{"use strict";W();Kg=F("SESSION_ACTIVITY_DDL",`
CREATE TABLE IF NOT EXISTS session_activity (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  bucket_ms        INTEGER NOT NULL,
  recorded_at_ms   INTEGER NOT NULL,
  PRIMARY KEY (session_event_id, bucket_ms)
) STRICT;
CREATE INDEX IF NOT EXISTS ix_activity_bucket ON session_activity(bucket_ms);
CREATE INDEX IF NOT EXISTS ix_activity_recorded ON session_activity(recorded_at_ms);
`)});var Yg,Xg=y(()=>{"use strict";W();Yg={name:"SKILL_TOKEN_USAGE_DDL",run:e=>{j(e,"session_tool_use","input_tokens","INTEGER"),j(e,"session_tool_use","output_tokens","INTEGER"),j(e,"session_tool_use","cached_tokens","INTEGER"),j(e,"session_tool_use","usage_confidence","TEXT")}}});var zg,Qg=y(()=>{"use strict";W();zg=F("SKILL_INVOCATIONS_DDL",`
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
`)});var Zg,eh=y(()=>{"use strict";W();Zg={name:"SKILL_PLUGIN_DDL",run:e=>j(e,"session_tool_use","plugin","TEXT")}});var th,nh=y(()=>{"use strict";W();th={name:"SKILL_ORIGIN_ROOT_DDL",run:e=>j(e,"session_tool_use","origin_root","TEXT")}});var rh,oh=y(()=>{"use strict";W();rh=F("2026-08-25-0000-memory-transcripts-covering-index",`
CREATE INDEX IF NOT EXISTS ix_mt_transcript_covering
  ON memory_transcripts(repo_id, transcript_id, commit_hash);
`)});var sh,ih=y(()=>{"use strict";W();sh={name:"2026-08-25-0001-memory-reachable",run:e=>j(e,"memories","reachable","INTEGER NOT NULL DEFAULT 1")}});var ah,lh=y(()=>{"use strict";W();ah={name:"2026-08-25-0002-commit-reachable",run:e=>j(e,"commits","reachable","INTEGER NOT NULL DEFAULT 1")}});var ch,dh=y(()=>{"use strict";W();ch=F("2026-08-26-0000-memory-lookups",`
CREATE TABLE IF NOT EXISTS memory_lookups (
  -- The producer's own idempotency key (statsEventId), so a re-drained event
  -- converges on one row instead of appending a duplicate lookup.
  receipt_id    TEXT PRIMARY KEY,
  repo_id       INTEGER NOT NULL REFERENCES repos(id),
  -- 'search' | 'recall'. Not a CHECK \u2014 see the docblock.
  kind          TEXT NOT NULL,
  -- 'mcp' | 'cli'. Kept because the two answer different questions about adoption,
  -- and because a surface that stops reporting is only visible here.
  surface       TEXT NOT NULL,
  session_id    TEXT,
  -- Business clock: the first sync's "only go back N days" window filters on this,
  -- never on updated_at_ms (a backfill rewrites every stamp to "just now").
  at_ms         INTEGER NOT NULL,
  -- Verbatim query text for 'search'; NULL for 'recall'.
  query         TEXT,
  -- Normalised bucket key for 'search' (lower + trim + collapsed whitespace);
  -- NULL for 'recall'. Written by the producer, never derived in SQL.
  query_key     TEXT,
  -- The branch a 'recall' asked for; NULL for 'search'.
  target        TEXT,
  result_count  INTEGER NOT NULL DEFAULT 0,
  -- Not derivable from result_count on a 'recall' \u2014 see the docblock.
  hit           INTEGER NOT NULL DEFAULT 0,
  -- Sync stamp. NOT NULL DEFAULT 0 is a hard requirement: NULL >= anything is NULL
  -- rather than false, so one nullable stamp is a row no cursor can ever select.
  updated_at_ms INTEGER NOT NULL DEFAULT 0
) STRICT;
CREATE INDEX IF NOT EXISTS ix_memory_lookups_kind_at ON memory_lookups(kind, at_ms);
CREATE INDEX IF NOT EXISTS ix_memory_lookups_repo_at ON memory_lookups(repo_id, kind, at_ms);
CREATE INDEX IF NOT EXISTS ix_memory_lookups_keyset  ON memory_lookups(updated_at_ms, receipt_id);
`)});var uh,ph=y(()=>{"use strict";W();uh=F("2026-08-27-0804-session-activity-keyset-index",`
CREATE INDEX IF NOT EXISTS ix_activity_keyset
  ON session_activity(recorded_at_ms, session_event_id, bucket_ms);
`)});var mh,fh=y(()=>{"use strict";W();mh=F("2026-08-27-0824-session-turns",`
CREATE TABLE IF NOT EXISTS session_turns (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  slice_id         TEXT NOT NULL,
  seq              INTEGER NOT NULL,
  role             TEXT,
  ts_ms            INTEGER,
  kind             TEXT NOT NULL,
  recorded_at_ms   INTEGER NOT NULL,
  PRIMARY KEY (session_event_id, slice_id, seq)
) STRICT;
`)});var gh,hh=y(()=>{"use strict";W();gh={name:"2026-08-27-0922-skill-invocation-sync-stamp",run:e=>j(e,"skill_invocations","updated_at_ms","INTEGER NOT NULL DEFAULT 0")}});var yh,wh=y(()=>{"use strict";W();yh=F("2026-08-28-0516-session-turns-keyset-index",`
CREATE INDEX IF NOT EXISTS ix_turns_keyset
  ON session_turns(recorded_at_ms, session_event_id, slice_id, seq);
`)});var Eh,Sh=y(()=>{"use strict";W();Eh=F("2026-08-28-0910-skill-invocation-keyset-index",`
CREATE INDEX IF NOT EXISTS ix_si_keyset
  ON skill_invocations(updated_at_ms, session_event_id, skill_name, at_ms);
`)});var Gs,cc=y(()=>{"use strict";Pg();Dg();Mg();Fg();Hg();Bg();Jg();qg();Vg();Xg();Qg();eh();nh();oh();ih();lh();dh();ph();fh();hh();wh();Sh();W();Gs=[Ng,Og,Lg,$g,jg,Ug,Wg,Gg,Kg,Yg,zg,Zg,th,rh,sh,ah,ch,uh,mh,gh,yh,Eh]});function wv(e=process.env){let t=e.JOLLI_SLOW_SQL_MS?.trim();if(t===void 0||t==="")return bh;if(t.toLowerCase()==="off")return null;let n=Number(t);return Number.isFinite(n)&&n>=0?n:bh}function Ev(e){let t=e.replace(/\s+/g," ").trim();return t.length>Th?`${t.slice(0,Th)}\u2026`:t}function Sv(e){let t=e.rows===void 0?"":` rows=${e.rows}`;yv.info("%dms %s [%s] params=%d%s :: %s",Math.round(e.ms),e.method,e.role,e.params,t,e.sql)}function _h(e,t={}){let n="thresholdMs"in t?t.thresholdMs:wv();if(n==null)return e;let r=t.now??(()=>performance.now()),o=t.onSlow??Sv,s=t.role??"rw",i=(l,c,d,u)=>{let p=r(),m;try{let g=u();return l==="all"&&Array.isArray(g)&&(m=g.length),g}finally{let g=r()-p;g>=n&&o({ms:g,method:l,sql:Ev(c),params:d,role:s,...m===void 0?{}:{rows:m}})}};return{exec:l=>i("exec",l,0,()=>e.exec(l)),close:()=>e.close(),prepare:l=>{let c=e.prepare(l);return{all:(...d)=>i("all",l,d.length,()=>c.all(...d)),get:(...d)=>i("get",l,d.length,()=>c.get(...d)),run:(...d)=>i("run",l,d.length,()=>c.run(...d))}}}}var yv,bh,Th,kh=y(()=>{"use strict";w();yv=f("SlowQuery"),bh=200,Th=240});function lo(){return(0,Vs.join)(Z(),"jollimemory.db")}function pn(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>ao.major?!0:n<ao.major?!1:r>=ao.minor}function kv(e){try{return(e.prepare("SELECT COUNT(*) AS n FROM sqlite_master WHERE type = 'table' AND name = 'schema_migrations'").get()?.n??0)>0?"present":"absent"}catch{return"unknown"}}function pc(e){try{return{kind:"rows",rows:e.prepare("SELECT seq, slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl FROM schema_migrations ORDER BY seq").all()}}catch(t){let n=kv(e);return n==="absent"?{kind:"none"}:{kind:"unreadable",reason:R(t),tableConfirmed:n==="present"}}}function Rh(e){let t=pc(e);return t.kind==="rows"?t.rows:void 0}function qs(e,t){e.prepare(`INSERT INTO schema_migrations (slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t.slot,t.name,t.outcome,t.appliedBy,t.atMs,t.durationMs,t.ddl)}function Rv(e){let t=new Map;for(let n of e){let r=t.get(n.name);(!r||n.seq>r.seq)&&t.set(n.name,n)}return t}function dc(e){return e.sql??""}function vv(e){let t=pc(e);if(t.kind==="none")return;if(t.kind==="unreadable"){Ks.has(vh)||(Ks.add(vh),Ut.warn(t.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`":"the database could not be queried for its migration log (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`",t.reason));return}let n=t.rows,r=new Set(Gs.map(o=>o.name));for(let[o,s]of Rv(n))r.has(o)||Ks.has(o)||(Ks.add(o),Ut.warn("migration %s was touched by %s but is unknown to this build (%s) \u2014 the database has been opened by another build",o,s.applied_by,Ht))}function Av(e,t={}){let n=t.now??Date.now,r=t.appliedBy??Ht,o=pc(e),s=new Set;if(o.kind==="rows")for(let c of o.rows)(c.outcome==="applied"||c.outcome==="baseline")&&s.add(c.name);else o.kind==="none"?Ut.info("no migration log in this database \u2014 replaying every entry (all are re-runnable)"):Ut.warn(o.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 replaying every entry and recording nothing":"the database could not be queried for its migration log (%s) \u2014 replaying every entry and recording nothing",o.reason);let i=Gs.map((c,d)=>({m:c,slot:d})).filter(({m:c})=>!s.has(c.name));if(i.length===0)return;let a=[],l=()=>{for(let c of a)qs(e,c);a.length=0};e.exec("PRAGMA foreign_keys = OFF");try{for(let{m:c,slot:d}of i){let u=n();e.exec("BEGIN IMMEDIATE");try{if(Rh(e)?.some(g=>g.name===c.name&&(g.outcome==="applied"||g.outcome==="baseline"))){l(),qs(e,{slot:d,name:c.name,outcome:"skipped",appliedBy:r,atMs:n(),durationMs:0,ddl:dc(c)}),e.exec("COMMIT");continue}c.run(e);let m={slot:d,name:c.name,outcome:"applied",appliedBy:r,atMs:n(),durationMs:n()-u,ddl:dc(c)};Rh(e)?(l(),qs(e,m)):a.push(m),e.exec("COMMIT")}catch(p){try{e.exec("ROLLBACK")}catch{}try{e.prepare("DELETE FROM schema_migrations WHERE name = ? AND outcome = 'failed'").run(c.name),qs(e,{slot:d,name:c.name,outcome:"failed",appliedBy:r,atMs:n(),durationMs:n()-u,ddl:dc(c)})}catch(m){Ut.debug("could not record the failed migration %s: %s",c.name,R(m))}throw p}}}finally{e.exec("PRAGMA foreign_keys = ON")}Ut.info("dashboard schema migrated: %s",i.map(({m:c})=>c.name).join(", "))}function Iv(e){let t=(0,Vs.dirname)(e);try{(0,_t.mkdirSync)(t,{recursive:!0,mode:448}),((0,_t.statSync)(t).mode&511)!==448&&(0,_t.chmodSync)(t,448)}catch(n){Ut.warn("could not restrict %s to owner-only: %s",t,R(n))}}function xv(e){for(let t of[e,`${e}-wal`,`${e}-shm`])try{((0,_t.statSync)(t).mode&511)!==384&&(0,_t.chmodSync)(t,384)}catch(n){en(n)||Ut.warn("could not restrict %s to 0600: %s",t,R(n))}}async function Ah(e,t){if(!pn())throw new uc(process.versions.node);let n=t.dbPath??lo(),r=t.maxAttempts??4,o=t.baseDelayMs??50;e||Iv(n);let{DatabaseSync:s}=await import("node:sqlite");for(let i=1;;i++){let a;try{a=new s(n,{readOnly:e});for(let l of e?Tv:bv)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${t.busyTimeoutMs??_v}`),e||xv(n),_h(a,{role:e?"ro":"rw"})}catch(l){try{a?.close()}catch{}if(Ft(l)?.kind!=="locked"||i>=r)throw l;await new Promise(c=>setTimeout(c,o*2**(i-1)))}}}async function Ih(e,t={}){let n=await Ah(!1,t);try{return vv(n),Av(n),await e(n)}finally{n.close()}}async function mc(e,t={}){let n=await Ah(!0,t);try{return await e(n)}finally{n.close()}}function Ys(e,t){e.exec("BEGIN IMMEDIATE");try{let n=t();return e.exec("COMMIT"),n}catch(n){try{e.exec("ROLLBACK")}catch{}throw n}}var _t,Vs,Ut,ao,uc,bv,Tv,_v,Ks,vh,Bt=y(()=>{"use strict";_t=require("node:fs"),Vs=require("node:path");or();me();Be();w();cc();kh();cc();W();Ut=f("DashboardDb"),ao={major:22,minor:13};uc=class extends Error{constructor(t){super(`The Jolli dashboard needs Node >= ${ao.major}.${ao.minor} for built-in SQLite (running ${t}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},bv=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],Tv=["PRAGMA foreign_keys = ON"],_v=2e3;Ks=new Set,vh="\0unreadable-log"});function fc(e){let t=s=>{try{return(0,co.statSync)(`${e}${s}`),!0}catch{return!1}},n=t(""),r=t("-wal"),o=t("-shm");return n?r&&o?"healthy-active":r?"healthy-recoverable":"healthy-clean":r||o?"alarm-sidecars-only":"absent"}var co,EU,gc=y(()=>{"use strict";co=require("node:fs");w();EU=f("DbDetection")});async function Pv(e){try{let n=await Ql(e);if(n&&!n.startsWith("file:"))return{identity:n,remoteUrl:n}}catch(n){Cv.debug("no canonical remote for %s (%s) \u2014 using path identity",e,R(n))}let t=(0,xh.createHash)("sha256").update(ke(e)).digest("hex").slice(0,32);return{identity:`${Nv}${t}`}}async function mn(e){return Pv(await $a(e))}var xh,Cv,Nv,sr=y(()=>{"use strict";xh=require("node:crypto");Ka();be();Ws();et();re();tt();me();w();Cv=f("RepoRegistry"),Nv="local:"});var Nh={};Ir(Nh,{hasCutoverRow:()=>$v,resetCutoverRouterCaches:()=>Dv,resolveCutoverRoute:()=>uo,routeMovesOffOrphanBranch:()=>Mv});function Dv(){hc.clear()}async function Lv(e){let t=hc.get(e);if(t!==void 0)return t;let{identity:n}=await mn(e);return hc.set(e,n),n}function Mv(e){return e?.state==="cutover"||e?.state==="legacy-fenced"}async function Ch(e,t){if(!pn())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let n=fc(t);if(n==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(n==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:r}=await import("node:sqlite"),o=new r(t,{readOnly:!0});try{let s=await Lv(e),i=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(s);if(!i)return{kind:"no-row"};let a=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(i.id);return a?{kind:"row",record:JSON.parse(a.value)}:{kind:"no-row"}}finally{o.close()}}catch(r){return{kind:"unavailable",reason:R(r)}}}async function $v(e,t={}){return(await Ch(e,t.dbPath??lo())).kind==="row"}async function uo(e,t={}){let n=await Hr(e).catch(()=>null),r=await Ch(e,t.dbPath??lo());return r.kind==="row"?{state:"cutover",record:r.record}:n!==null?r.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:r.reason}:r.kind==="unavailable"?(Ov.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",r.reason),{state:"uncutover",warning:r.reason}):{state:"uncutover"}}var Ov,hc,Xs=y(()=>{"use strict";tt();w();Bt();gc();sr();Ov=f("CutoverRouter"),hc=new Map});var zs,kt,Qs=y(()=>{"use strict";w();be();tt();zs=class extends Error{constructor(t){super(t),this.name="OrphanBranchFrozenError"}},kt=class{constructor(t){this.cwd=t;this.kind="orphan-branch"}async readFile(t){return Da(He,t,this.cwd)}async batchReadFiles(t){return La(He,t,this.cwd)}async writeFiles(t,n){if(V())return;if(await Hr(this.cwd??process.cwd()).catch(()=>null)!==null)throw new zs("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(Xs(),Nh));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new zs("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await Zu(He,t,n,this.cwd)}async listFiles(t){return[...await Ma(He,t,this.cwd)]}async exists(){return Pa(He,this.cwd)}async ensure(){await Oa(He,this.cwd)}}});function po(e){return e.version>=4}function Fv(e){return[...e??[]].reverse()}function ir(e){let t=Fv(e.children).flatMap(ir),n=(e.topics??[]).map(r=>({...r,commitDate:e.commitDate,generatedAt:e.generatedAt}));return[...t,...n]}function Ph(e){let t=e.stats,n=t?.filesChanged??0,r=t?.insertions??0,o=t?.deletions??0;for(let s of e.children??[]){let i=Ph(s);n+=i.filesChanged,r+=i.insertions,o+=i.deletions}return{filesChanged:n,insertions:r,deletions:o}}function mo(e){return e.diffStats?e.diffStats:(e.children?.length??0)>0?Ph(e):e.stats??{filesChanged:0,insertions:0,deletions:0}}function yc(e){let t=e.conversationTurns??0,n=(e.children??[]).reduce((r,o)=>r+yc(o),0);return t+n}function wc(e){let t=e.conversationTokens??0,n=(e.children??[]).reduce((r,o)=>r+wc(o),0);return t+n}function Ec(e){let t=e.conversationTokenBreakdown,n={input:t?.input??0,output:t?.output??0,cached:t?.cached??0};return(e.children??[]).reduce((r,o)=>{let s=Ec(o);return{input:r.input+s.input,output:r.output+s.output,cached:r.cached+s.cached}},{input:n.input,output:n.output,cached:n.cached})}function Sc(e){let t=e.topics?.length??0,n=(e.children??[]).reduce((r,o)=>r+Sc(o),0);return t+n}function Zs(e){let t=[],n=r=>{if(!r.children?.length)t.push(r);else for(let o of r.children)n(o)};for(let r of e.children??[])n(r);return t}function ei(e){return po(e)?(e.topics??[]).map(t=>({...t,commitDate:e.commitDate,generatedAt:e.generatedAt})):ir(e)}function fo(e){let t=[e.commitHash];for(let n of e.children??[])t.push(...fo(n));return t}function Wt(e,t){return e.transcripts!==void 0?e.transcripts:fo(e).filter(n=>t.has(n))}function jv(e){let t=Zs(e);return t.length<=1?1:new Set(t.map(r=>new Date(r.generatedAt||r.commitDate).toISOString().substring(0,10))).size}function Oh(e){let t=jv(e),n=t===1?"1 day":`${t} days`,r=Zs(e);if(r.length<=1)return n;let o=r.map(l=>new Date(l.generatedAt||l.commitDate).getTime()),s=new Date(Math.min(...o)),i=new Date(Math.max(...o)),a=l=>l.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return`${n} (${a(s)} \u2014 ${a(i)})`}var Jt=y(()=>{"use strict"});function Hv(e,t,n){return n.sessionId?e.get(t,n.source??"claude",n.sessionId)?.event_id:void 0}function Uv(e){return e.prepare("SELECT event_id FROM sessions WHERE repo_id = ? AND source = ? AND session_id = ?")}function ti(e,t,n){e.prepare(`DELETE FROM session_turns
		  WHERE slice_id = ?
		    AND session_event_id IN (SELECT event_id FROM sessions WHERE repo_id = ?)`).run(n,t)}function bc(e,t,n,r,o){let s=e.prepare(`INSERT OR REPLACE INTO session_turns
		 (session_event_id, slice_id, seq, role, ts_ms, kind, recorded_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`),i=Uv(e),a=e.prepare("DELETE FROM session_turns WHERE session_event_id = ? AND slice_id = ?");for(let l of r){let c=Hv(i,t,l);if(c===void 0)continue;a.run(c,n);let d=0;for(let u of l.entries??[]){let p=u.timestamp===void 0?void 0:Date.parse(u.timestamp),m=p===void 0||Number.isNaN(p)?null:p;s.run(c,n,d++,u.role,m,"turn",o)}for(let[u,p]of[["compaction",l.compactions],["test-run",l.testRuns],["turn-abort",l.turnAborts]])for(let m of p??[])s.run(c,n,d++,null,m,u,o)}}var Tc=y(()=>{"use strict"});var Dh=y(()=>{"use strict";be()});async function Lh(e,t,n,r){return Yn(e,async(o,s)=>{if(!r)return n(o,s);try{return await n(o,s)}catch(i){return r(o,i,s)}},t)}var Mh=y(()=>{"use strict";Xn()});function fn(e,t,n){let r=new Map;for(let o of e??[])r.set(n(o),o);for(let o of t??[])r.set(n(o),o);return[...r.values()]}var $h,gn,_c=y(()=>{"use strict";$h=/-[0-9a-f]{8}$/;gn={plan:e=>e.slug,note:e=>e.id,reference:e=>e.archivedKey}});function jh(e){return e.summaryError===Bv}function Hh(e){return e.summaryError!==void 0||e.llm?.stopReason==="error"}var Fh,Bv,kc=y(()=>{"use strict";Fh="llm-failed",Bv="local-agent-auth"});function go(e){return ni[e]?.label??"Local agent"}function Wh(e){return ni[e]?.loginHint??"Sign in to your local agent CLI."}function Jh(e){let t=ni[e]?.separateDesktopApp;return t===void 0?null:`(This login is SEPARATE from ${t} \u2014 ${t} stays signed in on its own.)`}var Uh,Bh,ni,VU,ri=y(()=>{"use strict";Uh="sonnet",Bh="inherit",ni={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop",defaultModel:Uh,models:[{id:"haiku",label:"Haiku \u2014 fastest"},{id:Uh,label:"Sonnet \u2014 balanced (default)"},{id:"opus",label:"Opus \u2014 most capable"},{id:Bh,label:"Use Claude Code's own setting"}]},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app",defaultModel:"gpt-5.6-terra",models:[{id:"gpt-5.6-luna",label:"GPT-5.6-Luna \u2014 fastest"},{id:"gpt-5.6-terra",label:"GPT-5.6-Terra \u2014 balanced (default)"},{id:"gpt-5.6-sol",label:"GPT-5.6-Sol \u2014 most capable"},{id:"gpt-5.5",label:"GPT-5.5 \u2014 previous generation"},{id:Bh,label:"Use Codex's own setting"}]},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."},hermes:{label:"Hermes",loginHint:"Run `hermes setup` (or `hermes model`) to configure a provider."}};VU=[...new Set(Object.values(ni).flatMap(e=>(e.models??[]).map(t=>t.id)))]});function Jv(e){return Wv.has(e)}function Rc(e){return Jv(e.source)?`${e.nativeId} \u2014 ${e.title}`:e.title}var Wv,vc=y(()=>{"use strict";ws();Wv=new Set(["linear","jira","github"])});var Ac=y(()=>{"use strict"});function q(e){return e.generatedAt||e.commitDate}function qh(e){try{return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return e}}function Ic(e){try{return new Date(e).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return e}}function Gh(e){return e.substring(0,10)}function qv(e){return[...e].sort((t,n)=>{let r=Gh(t.generatedAt||t.commitDate||""),o=Gh(n.generatedAt||n.commitDate||"");if(r!==o)return r>o?-1:1;let s=t.importance==="minor"?1:0,i=n.importance==="minor"?1:0;return s-i})}function Kh(e){return String(e+1).padStart(2,"0")}function Vv(e,t){return t==="local-agent"?e.localAgentTool?`Local agent - ${go(e.localAgentTool)}`:"Local agent":Kv[t]}function Vh(e){let t=new Set,n=o=>{let s=o.llm;s?.source&&t.add(Vv(s,s.source));for(let i of o.children??[])n(i)};n(e);let r=[...t];if(r.length!==0)return r.length===1?r[0]:`mixed: ${r.join(", ")}`}function xc(e){let t=Yv[e];return t!==void 0?t:e&&e.charAt(0).toUpperCase()+e.slice(1)}function Yh(e){let t=Zs(e),n=ei(e);return{topics:qv(n.map((o,s)=>({...o,treeIndex:s}))),sourceNodes:t}}var Kv,Yv,ho=y(()=>{"use strict";ri();vc();Jt();Ac();Kv={"anthropic-config":"Anthropic","anthropic-env":"Anthropic (env)","jolli-proxy":"Jolli proxy","local-agent":"Local agent"};Yv={claude:"Claude Code",opencode:"OpenCode",codex:"Codex",cursor:"Cursor",kimi:"Kimi",hermes:"Hermes"}});function oi(e){return Xv.exec(e)?.[1]??null}var Xv,Cc=y(()=>{"use strict";Xv=/^transcripts\/(.+)\.json$/});var fy={};Ir(fy,{AmbiguousHashError:()=>Eo,ORPHAN_WRITE_REQUIRED_TIMEOUT_MS:()=>Nc,collectChildE2eScenarios:()=>ai,collectChildJolliMeta:()=>pi,collectChildNotes:()=>ci,collectChildPlans:()=>li,collectChildReferences:()=>di,collectChildSkills:()=>ui,collectChildSkillsDocMeta:()=>Oc,copyHoistFields:()=>Pc,deleteNoteVisibleArtifact:()=>NA,deletePlanVisibleArtifact:()=>IA,deleteTranscript:()=>fA,expandSourcesForConsolidation:()=>iA,getActiveStorage:()=>Qv,getCatalog:()=>_A,getCatalogWithLazyBuild:()=>kA,getIndex:()=>_o,getIndexEntryMap:()=>wA,getSummary:()=>dy,getSummaryCount:()=>uy,getTranscriptHashes:()=>$c,indexNeedsMigration:()=>SA,listSummaries:()=>hA,listSummaryHashes:()=>yA,loadCatalog:()=>Rt,mergeManyToOne:()=>aA,migrateIndexToV3:()=>bA,migrateOneToOne:()=>rA,normalizeToV4:()=>Lc,readNoteFromBranch:()=>PA,readPlanFromBranch:()=>AA,readPlanProgress:()=>xA,readReferenceFromBranch:()=>MA,readSkillFromBranch:()=>LA,readTranscript:()=>ly,readTranscriptsBatch:()=>uA,readTranscriptsForCommits:()=>dA,remountStrandedTree:()=>nA,removeFromIndex:()=>cA,resolveEffectiveRecap:()=>Mc,resolveEffectiveTopics:()=>fi,resolveReadStorage:()=>So,resolveStorage:()=>H,saveTranscriptsBatch:()=>cy,scanTreeHashAliases:()=>EA,setActiveStorage:()=>zv,storeNotes:()=>CA,storePlans:()=>vA,storeReferences:()=>OA,storeSkills:()=>DA,storeSummary:()=>tA,stripFunctionalMetadata:()=>gi,toCatalogEntry:()=>hn,withDeferrableOrphanWriteLock:()=>ii,withRequiredOrphanWriteLock:()=>Te});function zv(e){yo=e}function Qv(){return yo}async function Xh(e){let t=await yi(e);return t.ok?t.storage:(D.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",t.reason,e),new kt(e))}async function H(e,t){return e||yo||(process.env.VITEST||D.warn("resolveStorage fell back to the system of record \u2014 caller did not thread storage or call setActiveStorage. The Memory Bank side will miss this write. cwd=%s",t??"(undef)"),Xh(t))}async function So(e,t){return e??yo??await Xh(t)}async function Te(e,t,n){if(Wn(e))return await n();if(!await Mr(e,{timeoutMs:Nc}))throw new ds(t,Nc);try{return await Jn(e,n)}finally{await $r(e)}}async function ii(e,t,n){if(Wn(e))return await n();if(!await Mr(e,{timeoutMs:zh}))return await t();try{return await Jn(e,n)}finally{await $r(e)}}function wo(e){return e.parentCommitHash==null}function Zv(e,t){if(!e&&!t)return null;if(!t)return e;if(!e)return t;let n=new Map;for(let o of t.entries)n.set(o.commitHash,o);for(let o of e.entries)n.set(o.commitHash,o);let r={...t.commitAliases??{},...e.commitAliases??{}};return{version:e.version,entries:[...n.values()],...Object.keys(r).length>0&&{commitAliases:r}}}function eA(e,t){if(!e&&!t)return null;if(!t)return e;if(!e)return t;let n=new Map;for(let r of t.entries)n.set(r.commitHash,r);for(let r of e.entries)n.set(r.commitHash,r);return{version:e.version,entries:[...n.values()]}}async function tA(e,t,n=!1,r,o,s){V()||await Te(t,"storeSummary",()=>Qh(e,t,n,r,o,s))}async function Qh(e,t,n=!1,r,o,s){let i=await ee(t,o),a=await Rt(t,o),l=s!==void 0&&s!==o,c=l?await ee(t,s):null,d=l?await Rt(t,s):null,u=l?Zv(i,c):i,p=l?eA(a,d):a,m=u?.entries?[...u.entries]:[],g=new Map(m.map(P=>[P.commitHash,P])),h=new Set;if(l&&c){let P=new Set(i?.entries.map($=>$.commitHash)??[]);for(let $ of c.entries)P.has($.commitHash)||h.add($.commitHash)}if(!n&&g.has(e.commitHash)){D.info("Summary for commit %s already exists \u2014 skipping (use force to overwrite)",e.commitHash.substring(0,8));return}let E=await To(e,null,t,g);for(let P of E)g.set(P.commitHash,P);let S={version:3,entries:[...g.values()],commitAliases:u?.commitAliases},k=n?"Overwrite":"Add",b=[{path:`summaries/${e.commitHash}.json`,content:JSON.stringify(e,null,"	")},{path:yn,content:JSON.stringify(S,null,"	")},Fc(p,g,e)];if(r?.transcript&&r.transcript.data.sessions.length>0&&b.push({path:`transcripts/${r.transcript.id}.json`,content:JSON.stringify(r.transcript.data,null,"	")}),r?.planProgress)for(let P of r.planProgress)b.push({path:`plan-progress/${P.planSlug}.json`,content:JSON.stringify(P,null,"	")});if(h.size>0&&s)for(let P of h){if(P===e.commitHash)continue;let $=`summaries/${P}.json`,Ee=`transcripts/${P}.json`,Fe=await s.readFile($);Fe!==null&&b.push({path:$,content:Fe});let je=await s.readFile(Ee);je!==null&&b.push({path:Ee,content:je})}await(await H(o,t)).writeFiles(b,`${k} summary for ${e.commitHash.substring(0,8)}: ${e.commitMessage.substring(0,50)}`),D.info("Summary stored successfully for commit %s",e.commitHash.substring(0,8))}function Pc(e){return{...e.skills&&{skills:e.skills},...e.jolliSkillsDocId&&{jolliSkillsDocId:e.jolliSkillsDocId},...e.jolliSkillsDocUrl&&{jolliSkillsDocUrl:e.jolliSkillsDocUrl},...e.transcripts&&{transcripts:e.transcripts},...e.plans&&{plans:e.plans},...e.notes&&{notes:e.notes},...e.references&&{references:e.references}}}async function nA(e,t,n,r){if((e.children??[]).length>0)throw new Error(`target ${e.commitHash.substring(0,8)} already has children \u2014 refusing to clobber`);if(V())return;let o=fn(t.plans,e.plans,gn.plan),s=fn(t.notes,e.notes,gn.note),i=fn(t.references,e.references,gn.reference),a=[...new Set([...e.transcripts??[],...t.transcripts??[]])],l=Ss([...t.skills??[],...e.skills??[]]),c=l.flatMap(g=>g.supersededDocIds??[]),d=Oc([e,t]),u=[...new Set([...e.orphanedDocIds??[],...d.orphanedDocIds,...c,...Dc([t])])],p=[...new Set([...e.unresolvedOrphanHashes??[],...mi([t])])],m={...e,...Pc(t),...a.length>0&&{transcripts:a},...o.length>0&&{plans:o},...s.length>0&&{notes:s},...i.length>0&&{references:i},...l.length>0&&{skills:l.map(Es)},...d.winner&&{jolliSkillsDocId:d.winner.jolliSkillsDocId,jolliSkillsDocUrl:d.winner.jolliSkillsDocUrl},...u.length>0&&{orphanedDocIds:u},...p.length>0&&{unresolvedOrphanHashes:p},children:[t]};await Te(n,"remountStrandedTree",()=>Qh(m,n,!0,void 0,r))}async function rA(e,t,n,r,o){await Te(n,"migrateOneToOne",()=>oA(e,t,n,r,o))}async function oA(e,t,n,r,o){D.info("Migrating summary 1:1: %s \u2192 %s",e.commitHash.substring(0,8),t.hash.substring(0,8));let s=gi(e),i=e.jolliDocUrl,a=await ls(`${t.hash}^`,t.hash,n).catch(()=>({filesChanged:0,insertions:0,deletions:0})),l=fi(e),c=Mc(e),d=await $c(n,o),u=Wt(e,d),p={version:el,commitHash:t.hash,commitMessage:t.message,commitAuthor:t.author,commitDate:t.date,branch:e.branch,generatedAt:new Date().toISOString(),commitType:r?.commitType??"rebase",...r?.commitSource&&{commitSource:r.commitSource},...e.ticketId&&{ticketId:e.ticketId},...e.jolliDocId&&{jolliDocId:e.jolliDocId},...i&&{jolliDocUrl:i},...e.orphanedDocIds&&{orphanedDocIds:e.orphanedDocIds},...e.unresolvedOrphanHashes&&{unresolvedOrphanHashes:e.unresolvedOrphanHashes},...Pc(e),...e.e2eTestGuide&&{e2eTestGuide:e.e2eTestGuide},...Hh(e)&&{summaryError:Fh},topics:l,...c!==void 0?{recap:c}:{},transcripts:u,diffStats:a,children:[s]},m=await ee(n,o),g=await Rt(n,o),h=m?.entries?[...m.entries]:[],E=new Map(h.map(P=>[P.commitHash,P]));if(E.has(t.hash)){D.info("New hash %s already in index, skipping migration",t.hash.substring(0,8));return}let S=await To(p,null,n,E);for(let P of S)E.set(P.commitHash,P);let k={version:3,entries:[...E.values()],commitAliases:m?.commitAliases},b=[{path:`summaries/${p.commitHash}.json`,content:JSON.stringify(p,null,"	")},{path:yn,content:JSON.stringify(k,null,"	")},Fc(g,E,p)];await(await H(o,n)).writeFiles(b,`Migrate summary ${e.commitHash.substring(0,8)} \u2192 ${t.hash.substring(0,8)}`),D.info("Summary migrated: %s \u2192 %s",e.commitHash.substring(0,8),t.hash.substring(0,8))}function ai(e){let t=[];for(let n of e)n.e2eTestGuide&&t.push(...n.e2eTestGuide),n.children&&t.push(...ai(n.children));return t}function Zh(e){let{e2eTestGuide:t,...n}=e;return n.children?{...n,children:n.children.map(Zh)}:n}function li(e){let t=new Map;for(let n of e){if(n.plans)for(let r of n.plans){let o=r.slug,s=t.get(o);(!s||r.updatedAt>s.updatedAt)&&t.set(o,r)}if(n.children)for(let r of li(n.children)){let o=t.get(r.slug);(!o||r.updatedAt>o.updatedAt)&&t.set(r.slug,r)}}return[...t.values()]}function ey(e){let{plans:t,...n}=e;return n.children?{...n,children:n.children.map(ey)}:n}function ci(e){let t=new Map;for(let n of e){if(n.notes)for(let r of n.notes){let o=t.get(r.id);(!o||r.updatedAt>o.updatedAt)&&t.set(r.id,r)}if(n.children)for(let r of ci(n.children)){let o=t.get(r.id);(!o||r.updatedAt>o.updatedAt)&&t.set(r.id,r)}}return[...t.values()]}function ty(e){let{notes:t,...n}=e;return n.children?{...n,children:n.children.map(ty)}:n}function ny(e){let{references:t,...n}=e;return n.children?{...n,children:n.children.map(ny)}:n}function di(e){let t=new Map;for(let n of e){let r=n.references??[];for(let o of r){let s=t.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&t.set(o.archivedKey,o)}if(n.children)for(let o of di(n.children)){let s=t.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&t.set(o.archivedKey,o)}}return[...t.values()]}function ui(e){let t=[];for(let n of e)t.push(...n.skills??[]),n.children&&t.push(...ui(n.children));return Ss(t)}function ry(e){let{jolliDocId:t,jolliDocUrl:n,jolliSkillsDocId:r,jolliSkillsDocUrl:o,orphanedDocIds:s,unresolvedOrphanHashes:i,...a}=e;return a.children?{...a,children:a.children.map(ry)}:a}function pi(e){let t=[];for(let o of e){let s=o.jolliDocUrl;if(o.jolliDocId&&s&&t.push({jolliDocId:o.jolliDocId,jolliDocUrl:s,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let i=pi(o.children);i.winner&&t.push({...i.winner})}}if(t.length===0)return{winner:null,orphanedDocIds:[]};t.sort((o,s)=>new Date(q(s)).getTime()-new Date(q(o)).getTime());let n=t[0],r=t.slice(1).map(o=>o.jolliDocId);return{winner:n,orphanedDocIds:r}}function Oc(e){let{winner:t,orphanedDocIds:n}=oy(e);return{winner:t&&{jolliSkillsDocId:t.jolliSkillsDocId,jolliSkillsDocUrl:t.jolliSkillsDocUrl},orphanedDocIds:n}}function oy(e){let t=[];for(let o of e){let s=o.jolliSkillsDocUrl;if(o.jolliSkillsDocId&&s&&t.push({jolliSkillsDocId:o.jolliSkillsDocId,jolliSkillsDocUrl:s,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let i=oy(o.children);i.winner&&t.push(i.winner)}}if(t.length===0)return{winner:null,orphanedDocIds:[]};t.sort((o,s)=>new Date(q(s)).getTime()-new Date(q(o)).getTime());let[n,...r]=t;return{winner:n,orphanedDocIds:r.map(o=>o.jolliSkillsDocId)}}function Dc(e){let t=[];for(let n of e??[])n.orphanedDocIds&&t.push(...n.orphanedDocIds),t.push(...Dc(n.children));return t}function mi(e){let t=[];for(let n of e??[])n.unresolvedOrphanHashes&&t.push(...n.unresolvedOrphanHashes),t.push(...mi(n.children));return t}function Lc(e){if(e.version>=4)return e;let t=ai([e]),n=li([e]),r=ci([e]),o=di([e]),s=ui([e]),i=s.map(Es),a=pi([e]),l=Array.from(new Set([...a.orphanedDocIds,...e.orphanedDocIds??[],...Dc(e.children),...s.flatMap(h=>h.supersededDocIds??[])])),c=Array.from(new Set([...e.unresolvedOrphanHashes??[],...mi(e.children)])),d=fi(e),u=Mc(e),p=e.diffStats===void 0&&e.stats!==void 0?mo(e):void 0,{stats:m,...g}=e;return{...g,version:4,topics:d,...u!==void 0?{recap:u}:{},...p!==void 0?{diffStats:p}:{},...t.length>0?{e2eTestGuide:t}:{},...n.length>0?{plans:n}:{},...r.length>0?{notes:r}:{},...o.length>0?{references:o}:{},...i.length>0?{skills:i}:{},...a.winner?{jolliDocId:a.winner.jolliDocId,jolliDocUrl:a.winner.jolliDocUrl}:{},...l.length>0?{orphanedDocIds:l}:{},...c.length>0?{unresolvedOrphanHashes:c}:{},...e.children!==void 0?{children:e.children.map(gi)}:{}}}function sy(e){let{topics:t,...n}=e;return n.children?{...n,children:n.children.map(sy)}:n}function iy(e){let{recap:t,...n}=e;return n.children?{...n,children:n.children.map(iy)}:n}function fi(e){return po(e)?e.topics??[]:ir(e).map(({commitDate:t,generatedAt:n,treeIndex:r,...o})=>o)}function Mc(e){return po(e)||e.recap?e.recap:sA(e.children)}function sA(e){if(!e||e.length===0)return;let t=[];if(ay(e,t),t.length!==0)return t.sort((n,r)=>new Date(r.date).getTime()-new Date(n.date).getTime()),t[0]?.recap}function ay(e,t){for(let n of e)n.recap&&t.push({recap:n.recap,date:q(n)}),n.children&&ay(n.children,t)}function iA(e){if(po(e))return[{commitHash:e.commitHash,commitMessage:e.commitMessage,commitDate:e.commitDate,...e.ticketId&&{ticketId:e.ticketId},topics:e.topics??[],...e.recap&&{recap:e.recap}}];let t=(e.children??[]).map(r=>({commitHash:r.commitHash,commitMessage:r.commitMessage,commitDate:r.commitDate,...r.ticketId&&{ticketId:r.ticketId},topics:fi(r),...r.recap&&{recap:r.recap}}));return((e.topics?.length??0)>0||e.recap)&&t.push({commitHash:e.commitHash,commitMessage:e.commitMessage,commitDate:e.commitDate,...e.ticketId&&{ticketId:e.ticketId},topics:e.topics??[],...e.recap&&{recap:e.recap}}),t}function gi(e){return ry(ny(ty(ey(Zh(sy(iy(e)))))))}async function aA(e,t,n,r){return Te(n,"mergeManyToOne",()=>lA(e,t,n,r))}async function lA(e,t,n,r){let{metadata:o,consolidated:s,storage:i,extraRefs:a,extraSkills:l}=r??{};D.info("Merging %d summaries into %s",e.length,t.hash.substring(0,8));let c=[...e].sort((K,es)=>new Date(q(es)).getTime()-new Date(q(K)).getTime()),d=ai(c),u=fn(li(c),a?.plans,gn.plan),p=fn(ci(c),a?.notes,gn.note),m=fn(di(c),a?.references,gn.reference),g=Ss([...ui(c),...l??[]]),h=g.map(Es),E=pi(c),S=Oc(c),k=c.flatMap(K=>K.orphanedDocIds??[]),b=g.flatMap(K=>K.supersededDocIds??[]),I=[...E.orphanedDocIds,...S.orphanedDocIds,...k,...b],P=Array.from(new Set([...c.filter(K=>!K.jolliDocId).map(K=>K.commitHash),...mi(c)])),$=c.map(gi),Ee=await ls(`${t.hash}^`,t.hash,n).catch(()=>({filesChanged:0,insertions:0,deletions:0})),Fe=s?.topics??[],je=s?.recap,Pt=s?.ticketId,zt=s?.llm,xn=s?.summaryError,Qt=await $c(n,i),Nu=Array.from(new Set(c.flatMap(K=>Wt(K,Qt)))),pt={version:el,commitHash:t.hash,commitMessage:t.message,commitAuthor:t.author,commitDate:t.date,branch:e[0].branch,generatedAt:new Date().toISOString(),...o?.commitType&&{commitType:o.commitType},...o?.commitSource&&{commitSource:o.commitSource},...Pt&&{ticketId:Pt},...zt&&{llm:zt},...xn&&{summaryError:xn},...d.length>0&&{e2eTestGuide:d},...u.length>0&&{plans:u},...p.length>0&&{notes:p},...m.length>0&&{references:m},...h.length>0&&{skills:h},...E.winner&&{jolliDocId:E.winner.jolliDocId,jolliDocUrl:E.winner.jolliDocUrl},...S.winner&&S.winner,...I.length>0&&{orphanedDocIds:I},...P.length>0&&{unresolvedOrphanHashes:P},topics:Fe,...je&&{recap:je},transcripts:Nu,diffStats:Ee,children:$},Ot=await ee(n,i),Cn=await Rt(n,i),Nn=Ot?.entries?[...Ot.entries]:[],Xe=new Map(Nn.map(K=>[K.commitHash,K]));if(Xe.has(t.hash))return D.info("New hash %s already in index, skipping merge",t.hash.substring(0,8)),{orphanedDocIds:[]};let Ar=await To(pt,null,n,Xe);for(let K of Ar)Xe.set(K.commitHash,K);let Pu={version:3,entries:[...Xe.values()],commitAliases:Ot?.commitAliases},Qo=e.map(K=>K.commitHash.substring(0,8)).join(", "),Zo=[{path:`summaries/${pt.commitHash}.json`,content:JSON.stringify(pt,null,"	")},{path:yn,content:JSON.stringify(Pu,null,"	")},Fc(Cn,Xe,pt)];return await(await H(i,n)).writeFiles(Zo,`Merge summaries [${Qo}] \u2192 ${t.hash.substring(0,8)}`),D.info("Summaries merged: [%s] \u2192 %s (%d children, %d orphaned docs, %d unresolved orphan hashes)",Qo,t.hash.substring(0,8),c.length,I.length,P.length),{orphanedDocIds:I}}async function cA(e,t,n){await ii(t,()=>{D.warn("removeFromIndex: could not acquire orphan-write lock within %dms \u2014 skipping removal of %s",zh,e.substring(0,8))},async()=>{let r=await ee(t,n);if(!r)return;let o=r.entries.filter(d=>d.commitHash!==e);if(o.length===r.entries.length)return;let s={version:r.version,entries:o,commitAliases:r.commitAliases},i=[{path:yn,content:JSON.stringify(s,null,"	")}],a=await Rt(t,n),l=RA(a,e);l&&i.push(l),await(await H(n,t)).writeFiles(i,`Remove index entry for ${e.substring(0,8)}`),D.info("Removed %s from index",e.substring(0,8))})}async function ly(e,t,n){let o=await(await H(n,t)).readFile(`transcripts/${e}.json`);if(!o)return null;try{return JSON.parse(o)}catch{return D.warn("Failed to parse transcript for %s",e.substring(0,8)),null}}async function dA(e,t,n){let r=new Map;for(let o of e){let s=await ly(o,t,n);s&&r.set(o,s)}return r}async function uA(e,t,n){let r=new Map;if(e.length===0)return r;let o=await So(n,t),s=l=>`transcripts/${l}.json`,i=e.map(s),a=o.batchReadFiles?await o.batchReadFiles(i):await mA(o,i);for(let l of e){let c=a.get(s(l));if(!c){r.set(l,null);continue}try{r.set(l,JSON.parse(c))}catch{D.warn("Failed to parse transcript for %s",l.substring(0,8)),r.set(l,null)}}return r}async function mA(e,t){let n=await Lh(t,pA,o=>e.readFile(o),(o,s)=>(D.warn("readFile failed for %s: %s",o,R(s)),null)),r=new Map;for(let o=0;o<t.length;o++)r.set(t[o],n[o]??null);return r}async function cy(e,t,n,r){let o=[];for(let{hash:i,data:a}of e)o.push({path:`transcripts/${i}.json`,content:JSON.stringify(a,null,"	")});for(let i of t)o.push({path:`transcripts/${i}.json`,content:"",delete:!0});if(o.length===0||V())return;let s=[e.length>0?`${e.length} written`:"",t.length>0?`${t.length} deleted`:""].filter(Boolean).join(", ");await Te(n,"saveTranscriptsBatch",async()=>{await(await H(r,n)).writeFiles(o,`Update transcripts: ${s}`),D.info("Transcript batch: %s",s)})}async function fA(e,t,n){await cy([],[e],t,n)}async function $c(e,t){let r=await(await H(t,e)).listFiles("transcripts/"),o=new Set;for(let s of r){let i=oi(s);i&&o.add(i)}return o}function gA(e,t){return t.filter(n=>n.commitHash.startsWith(e))}async function dy(e,t,n){if(e.length===0)return null;let r=e.toLowerCase(),o=await ot(r,t,n);if(o)return o;let s=gy(await So(n,t));if(s){if(r.length===si){let c=await s.lookupAlias(r);if(c)return ot(c,t,n)}else{let c=await s.findHashesByPrefix(r);if(c.length===1)return ot(c[0],t,n);if(c.length>=2)throw new Eo(r,c)}let l=await Or(r,t);if(l){let c=await s.findShallowestByTreeHash(l);if(c)return ot(c,t,n)}return null}let i=await ee(t,n);if(!i)return null;if(r.length===si){let l=i.commitAliases?.[r];if(l)return ot(l,t,n)}else{let l=gA(r,i.entries);if(l.length===1)return ot(l[0].commitHash,t,n);if(l.length>=2)throw new Eo(r,l.map(c=>c.commitHash))}if(i.version===3){let l=await Or(r,t);if(l){let c=new Map(i.entries.map(u=>[u.commitHash,u])),d=py(l,i.entries,c);if(d)return ot(d.commitHash,t,n)}}return null}async function hA(e=10,t,n){let r=await ee(t,n);if(!r||r.entries.length===0)return[];let i=[...r.entries.filter(wo)].sort((l,c)=>new Date(q(c)).getTime()-new Date(q(l)).getTime()).slice(0,e),a=[];for(let l of i){let c=await dy(l.commitHash,t,n);c&&a.push(c)}return a}async function yA(e){let t=await ee(e);if(!t||t.entries.length===0)return new Set;let n=new Set(t.entries.map(r=>r.commitHash));if(t.commitAliases)for(let r of Object.keys(t.commitAliases))n.add(r);return n}async function wA(e,t){let n=await ee(e,t);if(!n)return new Map;let r=new Map(n.entries.map(o=>[o.commitHash,o]));if(n.commitAliases)for(let[o,s]of Object.entries(n.commitAliases)){let i=r.get(s);i&&!r.has(o)&&r.set(o,i)}return r}async function EA(e,t,n,r){if(V())return!1;let o=r??n,s=await ee(t,o);if(!s||s.version!==3)return!1;let i=s.commitAliases??{},a=new Set(s.entries.map(d=>d.commitHash)),l=new Map(s.entries.map(d=>[d.commitHash,d])),c={};for(let d of e){if(a.has(d)||i[d])continue;let u=await Or(d,t);if(!u)continue;let p=py(u,s.entries,l);p&&(c[d]=p.commitHash,D.info("Tree hash match: %s \u2192 %s (treeHash: %s)",d.substring(0,8),p.commitHash.substring(0,8),u.substring(0,8)))}return Object.keys(c).length===0?!1:await ii(t,()=>(D.debug("scanTreeHashAliases: orphan-write lock contention \u2014 alias write deferred"),!1),async()=>{let d=await ee(t,n);if(!d||d.version!==3)return!1;if(o!==n){let k=await ee(t,o);if(k&&k.version===3){let b=new Set(d.entries.map(P=>P.commitHash)),I=k.entries.reduce((P,$)=>b.has($.commitHash)?P:P+1,0);if(I>0)return D.warn("scanTreeHashAliases: read side has %d row(s) write side lacks \u2014 deferring alias write to avoid shadow clobber",I),!1}}let u=d.commitAliases??{},p=new Set(d.entries.map(k=>k.commitHash)),m={...u},g=0;for(let[k,b]of Object.entries(c))p.has(k)||m[k]||(m[k]=b,g++);if(g===0)return!1;let h={...d,commitAliases:m},E=[{path:yn,content:JSON.stringify(h,null,"	")}];return await(await H(n,t)).writeFiles(E,`Add ${g} tree hash alias(es)`),!0})}async function uy(e,t){let n=await ee(e,t);return n?n.entries.filter(wo).length:0}async function SA(e,t){let n=await ee(e,t);return!n||n.entries.length===0?!1:n.version!==3}async function bA(e,t){return Te(e,"migrateIndexToV3",()=>TA(e,t))}async function TA(e,t){let n=await ee(e,t);if(!n)return D.info("No index found \u2014 nothing to migrate"),{migrated:0,skipped:0};if(n.version===3)return D.info("Index already at v3 \u2014 skipping migration"),{migrated:0,skipped:0};let r=0,o=0,s=new Map,i=[];for(let u of n.entries){let p=await ot(u.commitHash,e,t);if(!p){D.warn("Could not load summary for %s \u2014 skipping",u.commitHash.substring(0,8)),o++;continue}try{let m=await To(p,null,e);for(let g of m)s.set(g.commitHash,g);i.push(hn(p)),r++}catch(m){D.warn("Failed to flatten summary for %s: %s",u.commitHash.substring(0,8),m.message),o++}}let a={version:3,entries:[...s.values()]},l={version:1,entries:i},c=[{path:yn,content:JSON.stringify(a,null,"	")},{path:bo,content:JSON.stringify(l,null,"	")}];return await(await H(t,e)).writeFiles(c,`Migrate index v1 \u2192 v3 (${r} entries)`),D.info("Index migrated to v3: %d migrated, %d skipped",r,o),{migrated:r,skipped:o}}async function To(e,t,n,r){let o=await Or(e.commitHash,n)??void 0,s=t===null,i;if(s){let c=e.diffStats,d=r?.get(e.commitHash)?.diffStats,u;c?u=c:d?u=d:u=await ls(`${e.commitHash}^`,e.commitHash,n),i={topicCount:Sc(e),diffStats:u}}let l=[{commitHash:e.commitHash,parentCommitHash:t,treeHash:o,commitType:e.commitType,commitMessage:e.commitMessage,commitDate:e.commitDate,branch:e.branch,generatedAt:e.generatedAt,...i&&{topicCount:i.topicCount,diffStats:i.diffStats}}];for(let c of e.children??[]){let d=await To(c,e.commitHash,n,r);l.push(...d)}return l}async function ot(e,t,n){let o=await(await So(n,t)).readFile(`summaries/${e}.json`);if(!o)return null;try{return JSON.parse(o)}catch(s){return D.error("Failed to parse summary for %s: %s",e.substring(0,8),s.message),null}}function py(e,t,n){let r=t.filter(s=>s.treeHash===e);if(r.length===0)return null;if(r.length===1)return r[0];let o=r.map(s=>{let i=0,a=new Set,l=s;for(;l?.parentCommitHash!=null&&!a.has(l.commitHash);)a.add(l.commitHash),i++,l=n.get(l.parentCommitHash);return{entry:s,depth:i}});return o.sort((s,i)=>s.depth!==i.depth?s.depth-i.depth:new Date(q(i.entry)).getTime()-new Date(q(s.entry)).getTime()),o[0].entry}async function _o(e,t){return ee(e,t)}async function ee(e,t){let n=await So(t,e),r=await n.readFile(yn);if(!r)return D.debug("loadIndex: no index.json in %s storage",n.kind??"unknown"),null;try{return JSON.parse(r)}catch(o){return D.error("Failed to parse index.json: %s",o.message),null}}function hn(e){let t=ei(e).map(n=>({title:n.title,...n.decisions!==void 0&&{decisions:n.decisions},...n.category!==void 0&&{category:n.category},...n.importance!==void 0&&{importance:n.importance},...n.filesAffected&&n.filesAffected.length>0&&{filesAffected:n.filesAffected}}));return{commitHash:e.commitHash,...e.recap!==void 0&&{recap:e.recap},...e.ticketId!==void 0&&{ticketId:e.ticketId},...t.length>0&&{topics:t}}}async function Rt(e,t){let r=await(await H(t,e)).readFile(bo);if(!r)return null;try{return JSON.parse(r)}catch(o){return D.error("Failed to parse catalog.json: %s",o.message),null}}async function _A(e,t){return Rt(e,t)}async function kA(e,t){let n=await H(t,e),r=await Rt(e,n)??{version:1,entries:[]},o=await ee(e,n);if(!o||o.entries.length===0)return r;let s=new Set(o.entries.filter(wo).map(c=>c.commitHash)),i=new Set(r.entries.map(c=>c.commitHash)),a=r.entries.filter(c=>s.has(c.commitHash)).length,l=[];for(let c of s)i.has(c)||l.push(c);return a===r.entries.length&&l.length===0?r:await ii(e,async()=>{D.debug("getCatalogWithLazyBuild: orphan-write lock contention \u2014 returning in-memory catalog without writeback");let c=r.entries.filter(u=>s.has(u.commitHash)),d=[];for(let u of l){let p=await ot(u,e,n);p&&d.push(hn(p))}return{version:1,entries:[...c,...d]}},async()=>{let c=await Rt(e,n)??{version:1,entries:[]},d=await ee(e,n);if(!d||d.entries.length===0)return c;let u=new Set(d.entries.filter(wo).map(b=>b.commitHash)),p=c.entries.filter(b=>u.has(b.commitHash)),m=new Set(p.map(b=>b.commitHash)),g=[];for(let b of u)m.has(b)||g.push(b);if(p.length===c.entries.length&&g.length===0)return c;let h=[];for(let b of g){let I=await ot(b,e,n);I?h.push(hn(I)):D.warn("Catalog lazy build: summary file missing for root %s",b.substring(0,8))}let E={version:1,entries:[...p,...h]},S=c.entries.length-p.length,k=`catalog: reconcile (+${h.length}, -${S})`;return await n.writeFiles([{path:bo,content:JSON.stringify(E,null,"	")}],k),E})}function Fc(e,t,n){let r=new Set([...t.values()].filter(wo).map(a=>a.commitHash)),i={version:1,entries:[...(e?.entries??[]).filter(a=>r.has(a.commitHash)&&a.commitHash!==n.commitHash),hn(n)]};return{path:bo,content:JSON.stringify(i,null,"	")}}function RA(e,t){if(!e)return null;let n=e.entries.filter(o=>o.commitHash!==t);return n.length===e.entries.length?null:{path:bo,content:JSON.stringify({version:1,entries:n},null,"	")}}async function vA(e,t,n,r,o){if(e.length===0||V())return;let s=e.map(i=>({path:`plans/${i.slug}.md`,content:i.content,branch:r}));await Te(n,"storePlans",async()=>{await(await H(o,n)).writeFiles(s,t),D.info("Stored %d plan file(s)",e.length)})}async function AA(e,t,n){try{return await(await H(n,t)).readFile(`plans/${e}.md`)}catch{return null}}async function IA(e,t,n,r){let o=await H(r,n);o.deletePlanVisible&&await o.deletePlanVisible(e,t)}async function xA(e,t,n){try{let o=await(await H(n,t)).readFile(`plan-progress/${e}.json`);return o?JSON.parse(o):null}catch{return null}}async function CA(e,t,n,r,o){if(e.length===0||V())return;let s=e.map(i=>({path:`notes/${i.id}.md`,content:i.content,branch:r}));await Te(n,"storeNotes",async()=>{await(await H(o,n)).writeFiles(s,t),D.info("Stored %d note file(s)",e.length)})}async function NA(e,t,n,r){let o=await H(r,n);o.deleteNoteVisible&&await o.deleteNoteVisible(e,t)}async function PA(e,t,n){try{return await(await H(n,t)).readFile(`notes/${e}.md`)}catch{return null}}function my(e,t){if(!ym(e))throw new Error(`orphanPathFor: refusing unknown reference source ${JSON.stringify(e)}`);let n=`${e}:`,r=t.startsWith(n)?t.slice(n.length):t,o=hm(e,r);return`references/${e}/${o}.md`}async function OA(e,t,n,r,o){if(e.length===0||V())return;let s=e.map(i=>({path:my(i.source,i.archivedKey),content:i.content,branch:r}));await Te(n,"storeReferences",async()=>{await(await H(o,n)).writeFiles(s,t),D.info("Stored %d reference file(s) across sources",e.length)})}async function DA(e,t,n,r,o){if(e.length===0||V())return;let s=e.map(i=>({path:i.path,content:i.content,branch:r}));await Te(n,"storeSkills",async()=>{await(await H(o,n)).writeFiles(s,t),D.info("Stored %d skill file(s)",e.length)})}async function LA(e,t,n){try{return await(await H(n,t)).readFile(e)}catch{return null}}async function MA(e,t,n,r){let o=await H(r,n);try{return await o.readFile(my(e,t))}catch{return null}}var yo,D,yn,bo,Nc,zh,pA,si,Eo,st=y(()=>{"use strict";w();gs();Mh();be();et();Qs();cs();_c();Wr();wi();hi();kc();ho();Jt();pl();Cc();D=f("SummaryStore"),yn="index.json",bo="catalog.json",Nc=3e4,zh=1e3;pA=8;si=40,Eo=class extends Error{constructor(t,n){if(n.length<2)throw new Error(`AmbiguousHashError requires \u22652 matches (got ${n.length}); use null/undefined for "not found"`);if(t.length===0||t.length>=si)throw new Error(`AmbiguousHashError prefix must be 1..${si-1} chars (got length ${t.length})`);super(`abbreviation \`${t}\` is ambiguous; please use a longer prefix (matched ${n.length} commits)`),this.name="AmbiguousHashError",this.prefix=t,this.matches=n}static is(t){return t instanceof Error&&t.name==="AmbiguousHashError"&&typeof t.prefix=="string"&&Array.isArray(t.matches)}}});var k1,hy=y(()=>{"use strict";w();st();k1=f("ProcessedSourceStore")});var I1,yy=y(()=>{"use strict";w();st();I1=f("TopicIndexStore")});function wy(e){if(!e.startsWith("topics/")||!e.endsWith(".json"))return!1;let t=e.slice(7,-5);return t.length>0&&!t.includes("/")&&!$A.has(t)}var $A,Ey,C1,N1,jc=y(()=>{"use strict";$A=new Set(["index","processed"]);Ey=[["summaries/",e=>e.endsWith(".json")],["transcripts/",e=>e.endsWith(".json")],["plans/",e=>e.endsWith(".md")],["notes/",e=>e.endsWith(".md")],["references/",e=>e.endsWith(".md")],["skills/",e=>e.endsWith(".md")],["plan-progress/",e=>e.endsWith(".json")],["topics/",wy]],C1=Ey.map(([e])=>e),N1=Object.fromEntries(Ey)});var M1,Sy=y(()=>{"use strict";jc();w();st();M1=f("TopicPageStore")});var W1,J1,by=y(()=>{"use strict";ja();w();Bt();gc();sr();W1=f("ImportState"),J1=10*6e4});var Hc=y(()=>{"use strict"});var V1,Uc=y(()=>{"use strict";w();V1=f("DashboardScope")});function FA(e){let t=Ty.get(e);return t||(t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}),Ty.set(e,t)),t}function Ei(e,t){let n=FA(t).formatToParts(e),r=o=>Number.parseInt(n.find(s=>s.type===o)?.value??"0",10);return{year:r("year"),month:r("month"),day:r("day"),hour:r("hour"),minute:r("minute")}}function jA(e,t){let n=Ei(e,t);return`${n.year}-${String(n.month).padStart(2,"0")}-${String(n.day).padStart(2,"0")}`}function ky(e,t){let n=_y.get(t);if(n&&e>=n.fromMs&&e<n.toMs)return n.key;let r=Ei(e,t),o=`${r.year}-${String(r.month).padStart(2,"0")}-${String(r.day).padStart(2,"0")}`,s=Ry(r.year,r.month,r.day,t);return _y.set(t,{fromMs:s,toMs:vy(s,1,t),key:o}),o}function Ry(e,t,n,r){let o=Date.UTC(e,t-1,n),s=o;for(let i=0;i<3;i++){let a=Ei(s,r),l=Date.UTC(a.year,a.month-1,a.day,a.hour,a.minute)-o;if(l===0)return s;s-=l}return HA(e,t,n,r)}function HA(e,t,n,r){let o=`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`,s=Date.UTC(e,t-1,n),i=Math.floor((s-15*36e5)/6e4),a=Math.ceil((s+14*36e5)/6e4);for(;a-i>1;){let l=Math.floor((i+a)/2);jA(l*6e4,r)<o?i=l:a=l}return a*6e4}function Bc(e,t){let n=Ei(e,t);return Ry(n.year,n.month,n.day,t)}function vy(e,t,n){if(!Number.isInteger(t))throw new Error(`addLocalDays: days must be a finite integer, got ${t}`);let r=Bc(e,n),o=t>=0?1:-1;for(let s=0;s!==t;s+=o)r=Bc(r+o*864e5+432e5,n);return r}var Ty,_y,Ay=y(()=>{"use strict";Ty=new Map;_y=new Map});var Wc,Jc,Q1,ko,Si=y(()=>{"use strict";Uc();Wc=`LEFT JOIN commits cm ON cm.repo_id = m.repo_id AND cm.hash = m.commit_hash
	  LEFT JOIN (
	      SELECT a.repo_id, a.target_hash, c.hash AS live_hash, MAX(c.committed_at_ms) AS at_ms
	        FROM commit_aliases a
	        JOIN commits c ON c.repo_id = a.repo_id AND c.hash = a.old_hash
	       GROUP BY a.repo_id, a.target_hash
	  ) al ON al.repo_id = m.repo_id AND al.target_hash = m.commit_hash`,Jc="COALESCE(cm.committed_at_ms, al.at_ms, m.commit_date_ms)",Q1=`WITH memory_landing AS (
	SELECT m.repo_id, m.commit_hash,
	       COALESCE(cm.hash, al.live_hash, m.commit_hash) AS live_hash,
	       ${Jc} AS at_ms
	  FROM memories m
	  ${Wc}
	 WHERE m.parent_hash IS NULL
)`,ko=`SELECT ${Jc} AS at_ms
	  FROM memories m
	  ${Wc}
	 WHERE m.repo_id = ? AND m.commit_hash = ?`});function Ro(e,t){if(t.length===0)return;let n=e.prepare("SELECT DISTINCT tz FROM stats_daily").all();if(n.length!==0)for(let{tz:r}of n){let o=[...new Set(t.map(s=>ky(s,r)))];e.prepare(`DELETE FROM stats_daily WHERE tz = ? AND day IN (${o.map(()=>"?").join(", ")})`).run(r,...o)}}var dB,WA,JA,GA,qA,uB,Gc=y(()=>{"use strict";w();Bt();Uc();Ay();Si();dB=f("StatsRollup"),WA={model:!0,agent:!0,project:!0,branch:!0,ticket:!0,category:!0},JA=Object.keys(WA),GA="built",qA="tokens",uB=[...JA,qA,GA]});function vt(e){if(e==null)return null;try{return JSON.parse(e)}catch{return null}}function Iy(e){let t=/^#\s+(.+)$/m.exec(e);return t?t[1].trim():null}function xy(e,t,n){for(let{path:r,accepts:o}of VA){let s=e;for(let a of r){if(s==null||typeof s!="object"){s=void 0;break}s=s[a]}s==null||(o==="integer"?Number.isInteger(s):typeof s=="number")||n("off-type numeric",`${t}.${r.join(".")} is ${typeof s} (${JSON.stringify(s)}) \u2014 column reads NULL`)}}function Cy(e,t,n,r){let o=Date.parse(e.commitDate??"");return Number.isFinite(o)?o:(r("commit date",`${t} has no parsable commitDate \u2014 falling back to first-seen time`),n)}function Ny(e,t,n,r,o){let s=e.prepare(ko),i=e.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(t,n)?.target_hash,a=i!==void 0&&i!==r?[r,i]:[r],l=u=>s.get(t,u)?.at_ms??void 0,c=[],d=!1;for(let u of a){let p=s.get(t,u);u===r&&(d=p!==void 0),p?.at_ms!=null&&c.push(p.at_ms)}if(!d)return{stored:!1,days:[]};e.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
		 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(t,n,r,o);for(let u of a){let p=l(u);p!==void 0&&c.push(p)}return i!==void 0&&i!==r&&KA.info("alias %s retargeted %s -> %s",n,i,r),{stored:!0,days:c}}function Py(e,t){let n=e.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(t),r=new Map,o=[];for(let l of n)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=r.get(l.parent_hash)??[];c.push(l.commit_hash),r.set(l.parent_hash,c)}let s=e.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),i=new Map(n.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:d}=o.shift();a++;let u=i.get(l);(u.root_hash!==c||u.depth!==d)&&s.run(c,d,t,l);for(let p of r.get(l)??[])o.push({hash:p,root:c,depth:d+1})}if(a!==n.length)throw new Error(`remountRepo: ${n.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}var KA,VA,Oy=y(()=>{"use strict";Dh();hy();tt();Wr();st();Jt();yy();Sy();w();Bt();jc();by();sr();Tc();Hc();Gc();Si();KA=f("SotImport");VA=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}]});function XA(e){let t=[],n=(r,o,s)=>{t.push({hash:r.commitHash,parentInFile:o,pos:s,summary:r}),(r.children??[]).forEach((i,a)=>{n(i,r.commitHash,a)})};return n(e,null,null),t}function zA(e){let t={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let n of e){let r=n.delete===!0,o=n.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(r){t.summaryDeletes.push(o[1]);continue}let c=vt(n.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${n.path}`);t.summaryTrees.push(XA(c));continue}if(n.path==="index.json"){if(r)continue;let c=vt(n.content);for(let d of c?.entries??[])d.treeHash&&t.treeHashes.set(d.commitHash,d.treeHash);for(let[d,u]of Object.entries(c?.commitAliases??{}))t.aliases.set(d,u);continue}if(n.path==="catalog.json")continue;if(n.path==="topics/index.json"){if(r)continue;let c=vt(n.content);for(let d of c?.topics??[])d.stableSlug&&d.summary!==void 0&&t.topicSummaries.set(d.stableSlug,d.summary);continue}if(n.path==="topics/processed.json"){t.processedSet=r?null:n.content;continue}if(n.path==="schema-v5-migration.json"){r||(t.v5State=n.content);continue}let s=n.path.match(/^transcripts\/(.+)\.json$/);if(s){r?t.transcriptDeletes.push(s[1]):t.transcriptWrites.push({id:s[1],content:n.content});continue}let i=n.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(i){let c=YA[i[1]];r?t.contextDeletes.push({kind:c,key:i[2]}):t.contextWrites.push({kind:c,key:i[2],body:n.content});continue}let a=n.path.match(/^plan-progress\/(.+)\.json$/);if(a){r?t.progressDeletes.push(a[1]):t.progressWrites.push({pathSlug:a[1],content:n.content});continue}let l=n.path.match(/^topics\/([^/]+)\.json$/);if(l){r?t.topicPageDeletes.push(l[1]):t.topicPageWrites.push({slug:l[1],content:n.content});continue}throw new Error(`SotWrite: no table backs path ${n.path}`)}return t}function vo(e,t){wn.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",e,t)}function QA(e,t,n){let r=/-([0-9a-f]{8})$/.exec(n);return r?e.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(t,r[1])?.branch??null:null}function ZA(e,t,n,r){let o=[];for(let g of n.summaryDeletes){let h=e.prepare(ko).get(t,g);h?.at_ms!=null&&o.push(h.at_ms),e.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(t,g)}if(Ro(e,o),n.summaryTrees.length===0)return;let s=new Set;for(let g of n.summaryTrees)for(let h of g)"children"in h.summary&&s.add(h.hash);let i=e.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let g of s)i.run(t,g);let a=new Map;for(let g of n.summaryTrees)for(let h of g){if(h.parentInFile===null||h.pos===null)continue;let E=a.get(h.parentInFile)??new Map;E.set(h.hash,h.pos),a.set(h.parentInFile,E)}let l=e.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),c=(g,h)=>wn.info("write degraded a value: %s %s",g,h);for(let g of n.summaryTrees)for(let h of g){let E=h.parentInFile,S=h.pos;if(h.parentInFile===null){let I=e.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,h.hash);I&&(E=I.parent_hash,S=I.child_pos,S!==null&&S>=1e6&&((E===null?void 0:a.get(E))?.has(h.hash)||(E=null,S=null)))}let k=JSON.stringify("children"in h.summary?{...h.summary,children:[]}:h.summary);l.run(t,h.hash,E,S,h.hash,0,k,n.treeHashes.get(h.hash)??null,r,r,Cy(h.summary,h.hash,r,c)),xy(h.summary,h.hash,c),e.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(t,h.hash);let b=e.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(h.summary.topics??[]).forEach((I,P)=>{if(!I.title){c("topic",`${h.hash}[${P}] has no title`);return}b.run(t,h.hash,P,I.category??null,I.importance??null,I.title)})}let d=e.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`),u=[],p=e.prepare(`SELECT m.commit_hash FROM memories m
		  WHERE m.repo_id = ? AND m.parent_hash = ? AND m.child_pos >= ${1e6}`),m=e.prepare(ko);for(let g of s){for(let{commit_hash:h}of p.all(t,g)){let E=m.get(t,h);E?.at_ms!=null&&u.push(E.at_ms)}d.run(t,g)}Ro(e,u),Py(e,t)}function eI(e,t,n,r){let o=[];for(let[s,i]of n.aliases){let a=Ny(e,t,s,i,r);if(!a.stored){wn.info("dropping alias %s -> %s (no such memory row)",s,i);continue}o.push(...a.days)}Ro(e,o)}function tI(e,t,n,r){let o=new Set;for(let s of n.transcriptDeletes)e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,s),e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,s),e.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(t,s),ti(e,t,s);for(let{id:s,content:i}of n.transcriptWrites){let a=vt(i);if(!a||!Array.isArray(a.sessions)){vo("transcript",s);continue}e.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(t,s,(0,Dy.deflateSync)(Buffer.from(i,"utf8")),r),e.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(t,s);for(let l of a.sessions)l.sessionId&&e.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(t,s,l.sessionId,l.source??null);ti(e,t,s),bc(e,t,s,a.sessions,r),o.add(s)}return o}function nI(e,t,n,r){if(r.size===0)return;let o=new Set(n.summaryTrees.flat().map(c=>c.hash)),s=new Set(n.summaryTrees.flat().flatMap(c=>[...Wt(c.summary,r)])),i=[...r].filter(c=>!s.has(c));if(i.length===0)return;let a=e.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=e.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of i){let d=a.all(t,`%${c}%`);for(let u of d){if(o.has(u.commit_hash))continue;let p=vt(u.summary_json);p&&Wt(p,r).includes(c)&&(l.run(t,u.commit_hash,c),wn.info("linked stored transcript %s to memory %s written earlier",c,u.commit_hash))}}}function rI(e,t,n){if(n.summaryTrees.length===0)return;let r=new Set(e.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(t).map(o=>o.transcript_id));for(let o of n.summaryTrees)for(let s of o){let i=[...new Set(Wt(s.summary,r).filter(a=>r.has(a)))];for(let a of s.summary.transcripts??[])r.has(a)||wn.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",s.hash,a);e.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(t,s.hash);for(let a of i)e.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(t,s.hash,a)}}function oI(e,t,n,r){for(let{kind:s,key:i}of n.contextDeletes)e.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(t,s,i);let o=e.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:s,key:i,body:a}of n.contextWrites){if(s==="reference"){let d=ul(a);if(!d){vo("reference frontmatter",`references/${i}.md`);continue}o.run(t,s,i,d.source,d.nativeId,d.toolName,d.referencedAt,null,null,d.title,d.url??null,a,r,r);continue}let l=s==="plan"||s==="note"?QA(e,t,i):null,c=s==="plan"&&l!==null?i.replace(/-[0-9a-f]{8}$/,""):null;o.run(t,s,i,null,null,null,null,c,l,Iy(a),null,a,r,r)}}function sI(e,t,n,r){for(let o of n.progressDeletes)e.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(t,o);for(let{pathSlug:o,content:s}of n.progressWrites){let i=vt(s);if(!i){vo("plan-progress",`plan-progress/${o}.json`);continue}let a=i.planSlug??o;if(!e.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(t,a)){wn.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}e.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(t,a,s,r)}}function iI(e,t,n,r){for(let o of n.topicPageDeletes)e.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(t,o);for(let{slug:o,content:s}of n.topicPageWrites){let i=vt(s);if(!i?.stableSlug||i.title===void 0||i.content===void 0||!i.lastUpdatedAt){vo("topic page",`topics/${o}.json`);continue}e.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(t,i.stableSlug,i.title,n.topicSummaries.get(i.stableSlug)??null,i.content,JSON.stringify(i.relatedBranches??[]),i.lastUpdatedAt,i.schemaVersion??1),e.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(t,i.stableSlug),(i.sourceRefs??[]).forEach((a,l)=>{e.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t,i.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,s]of n.topicSummaries){let i=e.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(s,t,o);Number(i.changes)===0&&wn.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(n.processedSet!==null){let o=vt(n.processedSet);if(!o?.processed)vo("processed set","topics/processed.json");else{e.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(t);let s=e.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[i,a]of Object.entries(o.processed))for(let l of a)s.run(t,i,l)}}n.v5State!==null&&e.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(t,n.v5State)}function Ly(e,t,n,r){let o=zA(n);Ys(e,()=>{e.exec("PRAGMA defer_foreign_keys = ON"),ZA(e,t,o,r),eI(e,t,o,r);let s=tI(e,t,o,r);rI(e,t,o),nI(e,t,o,s),oI(e,t,o,r),sI(e,t,o,r),iI(e,t,o,r)})}var Dy,wn,YA,My=y(()=>{"use strict";Dy=require("node:zlib");Wr();Jt();w();Bt();Tc();Oy();Hc();Gc();Si();wn=f("SotWrite"),YA={plans:"plan",notes:"note",references:"reference",skills:"skill"}});function Fy(e){let t=new Map;for(let n of e){if(n.parent_hash==null)continue;let r=t.get(n.parent_hash)??[];r.push(n),t.set(n.parent_hash,r)}for(let n of t.values())n.sort((r,o)=>Number(r.child_pos)-Number(o.child_pos));return t}function qc(e,t){let n=JSON.parse(t.summary_json);return"children"in n&&(n.children=(e.get(t.commit_hash)??[]).map(r=>qc(e,r))),n}function aI(e,t,n){let r=e.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(t,n);if(!r)return;let o=(r.parent_hash===null?e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):e.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(t,r.parent_hash===null?r.root_hash:n),s=o.find(i=>i.commit_hash===n);return s?qc(Fy(o),s):void 0}function gy(e){if(e instanceof Gt)return e;let t=e?.primary;return t instanceof Gt?t:null}function lI(e){if(e===null)return{};try{return{diffStats:JSON.parse(e)}}catch{return{}}}var $y,Gt,hi=y(()=>{"use strict";$y=require("node:zlib");Bt();My();w();st();Gt=class{constructor(t,n){this.repoIdentity=t;this.dbPath=n;this.kind="sqlite"}async withDb(t){return mc(n=>{let r=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!r)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return t(n,r.id)},{dbPath:this.dbPath})}async withDbOrAbsent(t,n){return mc(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?t(r,o.id):n},{dbPath:this.dbPath})}async readFile(t){return this.withDbOrAbsent((n,r)=>this.readOne(n,r,t),null)}async batchReadFiles(t){return this.withDbOrAbsent((n,r)=>{let o=new Map;for(let s of t)o.set(s,this.readOne(n,r,s));return o},new Map(t.map(n=>[n,null])))}readOne(t,n,r){let o=r.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=aI(t,n,o[1]);return c?JSON.stringify(c,null,"	"):null}if(r==="index.json")return this.synthIndex(t,n);if(r==="catalog.json")return this.synthCatalog(t,n);if(r==="topics/index.json")return this.synthTopicIndex(t,n);if(r==="topics/processed.json")return this.synthProcessed(t,n);if(r==="schema-v5-migration.json")return t.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(n)?.value??null;let s=r.match(/^topics\/([^/]+)\.json$/);if(s)return this.synthTopicPage(t,n,s[1]);let i=r.match(/^transcripts\/(.+)\.json$/);if(i){let c=t.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(n,i[1]);return c?(0,$y.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=r.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return t.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(n,c,a[2])?.body_md??null}let l=r.match(/^plan-progress\/(.+)\.json$/);return l?t.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(n,l[1])?.artifact_json??null:null}allMemories(t,n){return t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n)}synthIndex(t,n){let r=t.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=new Map(t.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(n).map(a=>[a.root,a.n])),s=r.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...lI(a.diff_stats_json)}})),i=t.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(n);return JSON.stringify({version:3,entries:s,...i.length>0&&{commitAliases:Object.fromEntries(i.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(t,n){let r=this.allMemories(t,n);if(r.length===0)return null;let o=Fy(r),s=r.filter(i=>i.parent_hash===null).map(i=>hn(qc(o,i)));return JSON.stringify({version:1,entries:s},null,"	")}topicRefs(t,n,r){return t.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(n,r).map(s=>({type:s.ref_type,id:s.ref_id,timestamp:s.ts,...s.branch!==null&&{branch:s.branch}}))}synthTopicPage(t,n,r){let o=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(n,r);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(t,n,r),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(t,n){let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(n);if(r.length===0)return null;let o=r.map(s=>({stableSlug:s.stable_slug,title:s.title,...s.summary!==null&&{summary:s.summary},relatedBranches:JSON.parse(s.related_branches_json),sourceRefs:this.topicRefs(t,n,s.stable_slug),lastUpdatedAt:s.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(t,n){let r=t.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(n);if(r.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let s of r)o[s.source_type].push(s.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(t){return this.withDbOrAbsent((n,r)=>{let o=(i,a)=>n.prepare(i).all(r).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",i=>`summaries/${i}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",i=>`transcripts/${i}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",i=>`plans/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",i=>`notes/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",i=>`references/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",i=>`skills/${i}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",i=>`plan-progress/${i}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",i=>`topics/${i}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",i=>i)].filter(i=>i.startsWith(t)).sort()},[])}async writeFiles(t,n){V()||await Ih(r=>{let o=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);Ly(r,o.id,t,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(n),o=t.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(n);return{memoriesCount:r.n,memoriesNewestMs:r.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(t){return this.withDbOrAbsent((n,r)=>n.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(r,t)?.target_hash??null,null)}async findShallowestByTreeHash(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(r,t)?.commit_hash??null,null)}async findHashesByPrefix(t){return/^[0-9a-f]+$/.test(t)?this.withDbOrAbsent((n,r)=>n.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(r,t).map(s=>s.commit_hash),[]):[]}async listHeadEntries(t){return this.withDbOrAbsent((n,r)=>n.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${t!==void 0?" AND branch = ?":""}`).all(...t!==void 0?[r,t]:[r]).map(s=>({commitHash:s.commit_hash,parentCommitHash:null,...s.tree_hash!==null?{treeHash:s.tree_hash}:{},...s.commit_type!==null?{commitType:s.commit_type}:{},commitMessage:s.commit_message??"",commitDate:s.commit_date??"",branch:s.branch??"",generatedAt:s.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(n),o=new Map;for(let s of r){let i=o.get(s.commit_hash)??[];i.push(s.title),o.set(s.commit_hash,i)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((t,n)=>{let r=t.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(n),o=t.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(n),s=new Map;for(let i of o){let a=s.get(i.stable_slug)??[];a.push(i.ref_type),s.set(i.stable_slug,a)}return r.map(i=>({stableSlug:i.stable_slug,title:i.title,summary:i.summary,content:i.content_md,relatedBranches:JSON.parse(i.related_branches_json),lastUpdatedAt:i.last_updated_at,refTypes:s.get(i.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((t,n)=>t.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(n).map(o=>this.readOne(t,n,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}}});async function Hy(e){let t=Date.now(),n=jy.get(e);if(n&&t-n.at<cI)return n.route;let r=await uo(e);return jy.set(e,{route:r,at:t}),r}async function Uy(e,t,n){if(n.state==="legacy-fenced"||n.state==="cutover"){let{identity:r}=await mn(t);return new Gt(r)}return new kt(e)}async function By(e){let t=e??process.cwd(),n=await Hy(t);if(n.state==="blocked")throw new Error(`storage unavailable: ${n.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return Uy(e,t,n)}async function yi(e){let t=e??process.cwd(),n;try{n=await Hy(t)}catch(r){return{ok:!1,reason:r.message}}if(n.state==="blocked")return{ok:!1,reason:n.reason};try{return{ok:!0,state:n.state,storage:await Uy(e,t,n)}}catch(r){return{ok:!1,reason:r.message}}}var cI,jy,wi=y(()=>{"use strict";Xs();sr();Qs();hi();cI=3e3,jy=new Map});var lr=A((cJ,pw)=>{"use strict";var DI="2.0.0",LI=Number.MAX_SAFE_INTEGER||9007199254740991,MI=16,$I=250,FI=["major","premajor","minor","preminor","patch","prepatch","prerelease"];pw.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:MI,MAX_SAFE_BUILD_LENGTH:$I,MAX_SAFE_INTEGER:LI,RELEASE_TYPES:FI,SEMVER_SPEC_VERSION:DI,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var No=A((dJ,mw)=>{"use strict";var jI=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};mw.exports=jI});var cr=A((it,fw)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:td,MAX_SAFE_BUILD_LENGTH:HI,MAX_LENGTH:UI}=lr(),BI=No();it=fw.exports={};var WI=it.re=[],JI=it.safeRe=[],T=it.src=[],GI=it.safeSrc=[],_=it.t={},qI=0,nd="[a-zA-Z0-9-]",KI=[["\\s",1],["\\d",UI],[nd,HI]],VI=e=>{for(let[t,n]of KI)e=e.split(`${t}*`).join(`${t}{0,${n}}`).split(`${t}+`).join(`${t}{1,${n}}`);return e},N=(e,t,n)=>{let r=VI(t),o=qI++;BI(e,o,t),_[e]=o,T[o]=t,GI[o]=r,WI[o]=new RegExp(t,n?"g":void 0),JI[o]=new RegExp(r,n?"g":void 0)};N("NUMERICIDENTIFIER","0|[1-9]\\d*");N("NUMERICIDENTIFIERLOOSE","\\d+");N("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${nd}*`);N("MAINVERSION",`(${T[_.NUMERICIDENTIFIER]})\\.(${T[_.NUMERICIDENTIFIER]})\\.(${T[_.NUMERICIDENTIFIER]})`);N("MAINVERSIONLOOSE",`(${T[_.NUMERICIDENTIFIERLOOSE]})\\.(${T[_.NUMERICIDENTIFIERLOOSE]})\\.(${T[_.NUMERICIDENTIFIERLOOSE]})`);N("PRERELEASEIDENTIFIER",`(?:${T[_.NONNUMERICIDENTIFIER]}|${T[_.NUMERICIDENTIFIER]})`);N("PRERELEASEIDENTIFIERLOOSE",`(?:${T[_.NONNUMERICIDENTIFIER]}|${T[_.NUMERICIDENTIFIERLOOSE]})`);N("PRERELEASE",`(?:-(${T[_.PRERELEASEIDENTIFIER]}(?:\\.${T[_.PRERELEASEIDENTIFIER]})*))`);N("PRERELEASELOOSE",`(?:-?(${T[_.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${T[_.PRERELEASEIDENTIFIERLOOSE]})*))`);N("BUILDIDENTIFIER",`${nd}+`);N("BUILD",`(?:\\+(${T[_.BUILDIDENTIFIER]}(?:\\.${T[_.BUILDIDENTIFIER]})*))`);N("FULLPLAIN",`v?${T[_.MAINVERSION]}${T[_.PRERELEASE]}?${T[_.BUILD]}?`);N("FULL",`^${T[_.FULLPLAIN]}$`);N("LOOSEPLAIN",`[v=\\s]*${T[_.MAINVERSIONLOOSE]}${T[_.PRERELEASELOOSE]}?${T[_.BUILD]}?`);N("LOOSE",`^${T[_.LOOSEPLAIN]}$`);N("GTLT","((?:<|>)?=?)");N("XRANGEIDENTIFIERLOOSE",`${T[_.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);N("XRANGEIDENTIFIER",`${T[_.NUMERICIDENTIFIER]}|x|X|\\*`);N("XRANGEPLAIN",`[v=\\s]*(${T[_.XRANGEIDENTIFIER]})(?:\\.(${T[_.XRANGEIDENTIFIER]})(?:\\.(${T[_.XRANGEIDENTIFIER]})(?:${T[_.PRERELEASE]})?${T[_.BUILD]}?)?)?`);N("XRANGEPLAINLOOSE",`[v=\\s]*(${T[_.XRANGEIDENTIFIERLOOSE]})(?:\\.(${T[_.XRANGEIDENTIFIERLOOSE]})(?:\\.(${T[_.XRANGEIDENTIFIERLOOSE]})(?:${T[_.PRERELEASELOOSE]})?${T[_.BUILD]}?)?)?`);N("XRANGE",`^${T[_.GTLT]}\\s*${T[_.XRANGEPLAIN]}$`);N("XRANGELOOSE",`^${T[_.GTLT]}\\s*${T[_.XRANGEPLAINLOOSE]}$`);N("COERCEPLAIN",`(^|[^\\d])(\\d{1,${td}})(?:\\.(\\d{1,${td}}))?(?:\\.(\\d{1,${td}}))?`);N("COERCE",`${T[_.COERCEPLAIN]}(?:$|[^\\d])`);N("COERCEFULL",T[_.COERCEPLAIN]+`(?:${T[_.PRERELEASE]})?(?:${T[_.BUILD]})?(?:$|[^\\d])`);N("COERCERTL",T[_.COERCE],!0);N("COERCERTLFULL",T[_.COERCEFULL],!0);N("LONETILDE","(?:~>?)");N("TILDETRIM",`(\\s*)${T[_.LONETILDE]}\\s+`,!0);it.tildeTrimReplace="$1~";N("TILDE",`^${T[_.LONETILDE]}${T[_.XRANGEPLAIN]}$`);N("TILDELOOSE",`^${T[_.LONETILDE]}${T[_.XRANGEPLAINLOOSE]}$`);N("LONECARET","(?:\\^)");N("CARETTRIM",`(\\s*)${T[_.LONECARET]}\\s+`,!0);it.caretTrimReplace="$1^";N("CARET",`^${T[_.LONECARET]}${T[_.XRANGEPLAIN]}$`);N("CARETLOOSE",`^${T[_.LONECARET]}${T[_.XRANGEPLAINLOOSE]}$`);N("COMPARATORLOOSE",`^${T[_.GTLT]}\\s*(${T[_.LOOSEPLAIN]})$|^$`);N("COMPARATOR",`^${T[_.GTLT]}\\s*(${T[_.FULLPLAIN]})$|^$`);N("COMPARATORTRIM",`(\\s*)${T[_.GTLT]}\\s*(${T[_.LOOSEPLAIN]}|${T[_.XRANGEPLAIN]})`,!0);it.comparatorTrimReplace="$1$2$3";N("HYPHENRANGE",`^\\s*(${T[_.XRANGEPLAIN]})\\s+-\\s+(${T[_.XRANGEPLAIN]})\\s*$`);N("HYPHENRANGELOOSE",`^\\s*(${T[_.XRANGEPLAINLOOSE]})\\s+-\\s+(${T[_.XRANGEPLAINLOOSE]})\\s*$`);N("STAR","(<|>)?=?\\s*\\*");N("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");N("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var Ai=A((uJ,gw)=>{"use strict";var YI=Object.freeze({loose:!0}),XI=Object.freeze({}),zI=e=>e?typeof e!="object"?YI:e:XI;gw.exports=zI});var rd=A((pJ,ww)=>{"use strict";var hw=/^[0-9]+$/,yw=(e,t)=>{if(typeof e=="number"&&typeof t=="number")return e===t?0:e<t?-1:1;let n=hw.test(e),r=hw.test(t);return n&&r&&(e=+e,t=+t),e===t?0:n&&!r?-1:r&&!n?1:e<t?-1:1},QI=(e,t)=>yw(t,e);ww.exports={compareIdentifiers:yw,rcompareIdentifiers:QI}});var ae=A((mJ,Sw)=>{"use strict";var Ii=No(),{MAX_LENGTH:Ew,MAX_SAFE_INTEGER:xi}=lr(),{safeRe:Ci,t:Ni}=cr(),ZI=Ai(),{compareIdentifiers:od}=rd(),sd=class e{constructor(t,n){if(n=ZI(n),t instanceof e){if(t.loose===!!n.loose&&t.includePrerelease===!!n.includePrerelease)return t;t=t.version}else if(typeof t!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof t}".`);if(t.length>Ew)throw new TypeError(`version is longer than ${Ew} characters`);Ii("SemVer",t,n),this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease;let r=t.trim().match(n.loose?Ci[Ni.LOOSE]:Ci[Ni.FULL]);if(!r)throw new TypeError(`Invalid Version: ${t}`);if(this.raw=t,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>xi||this.major<0)throw new TypeError("Invalid major version");if(this.minor>xi||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>xi||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let s=+o;if(s>=0&&s<xi)return s}return o}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(t){if(Ii("SemVer.compare",this.version,this.options,t),!(t instanceof e)){if(typeof t=="string"&&t===this.version)return 0;t=new e(t,this.options)}return t.version===this.version?0:this.compareMain(t)||this.comparePre(t)}compareMain(t){return t instanceof e||(t=new e(t,this.options)),this.major<t.major?-1:this.major>t.major?1:this.minor<t.minor?-1:this.minor>t.minor?1:this.patch<t.patch?-1:this.patch>t.patch?1:0}comparePre(t){if(t instanceof e||(t=new e(t,this.options)),this.prerelease.length&&!t.prerelease.length)return-1;if(!this.prerelease.length&&t.prerelease.length)return 1;if(!this.prerelease.length&&!t.prerelease.length)return 0;let n=0;do{let r=this.prerelease[n],o=t.prerelease[n];if(Ii("prerelease compare",n,r,o),r===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(r===void 0)return-1;if(r===o)continue;return od(r,o)}while(++n)}compareBuild(t){t instanceof e||(t=new e(t,this.options));let n=0;do{let r=this.build[n],o=t.build[n];if(Ii("build compare",n,r,o),r===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(r===void 0)return-1;if(r===o)continue;return od(r,o)}while(++n)}inc(t,n,r){if(t.startsWith("pre")){if(!n&&r===!1)throw new Error("invalid increment argument: identifier is empty");if(n){let o=`-${n}`.match(this.options.loose?Ci[Ni.PRERELEASELOOSE]:Ci[Ni.PRERELEASE]);if(!o||o[1]!==n)throw new Error(`invalid identifier: ${n}`)}}switch(t){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",n,r);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",n,r);break;case"prepatch":this.prerelease.length=0,this.inc("patch",n,r),this.inc("pre",n,r);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",n,r),this.inc("pre",n,r);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(r)?1:0;if(this.prerelease.length===0)this.prerelease=[o];else{let s=this.prerelease.length;for(;--s>=0;)typeof this.prerelease[s]=="number"&&(this.prerelease[s]++,s=-2);if(s===-1){if(n===this.prerelease.join(".")&&r===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(n){let s=[n,o];r===!1&&(s=[n]),od(this.prerelease[0],n)===0?isNaN(this.prerelease[1])&&(this.prerelease=s):this.prerelease=s}break}default:throw new Error(`invalid increment argument: ${t}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};Sw.exports=sd});var Kt=A((fJ,Tw)=>{"use strict";var bw=ae(),ex=(e,t,n=!1)=>{if(e instanceof bw)return e;try{return new bw(e,t)}catch(r){if(!n)return null;throw r}};Tw.exports=ex});var kw=A((gJ,_w)=>{"use strict";var tx=Kt(),nx=(e,t)=>{let n=tx(e,t);return n?n.version:null};_w.exports=nx});var vw=A((hJ,Rw)=>{"use strict";var rx=Kt(),ox=(e,t)=>{let n=rx(e.trim().replace(/^[=v]+/,""),t);return n?n.version:null};Rw.exports=ox});var xw=A((yJ,Iw)=>{"use strict";var Aw=ae(),sx=(e,t,n,r,o)=>{typeof n=="string"&&(o=r,r=n,n=void 0);try{return new Aw(e instanceof Aw?e.version:e,n).inc(t,r,o).version}catch{return null}};Iw.exports=sx});var Pw=A((wJ,Nw)=>{"use strict";var Cw=Kt(),ix=(e,t)=>{let n=Cw(e,null,!0),r=Cw(t,null,!0),o=n.compare(r);if(o===0)return null;let s=o>0,i=s?n:r,a=s?r:n,l=!!i.prerelease.length;if(!!a.prerelease.length&&!l){if(!a.patch&&!a.minor)return"major";if(a.compareMain(i)===0)return a.minor&&!a.patch?"minor":"patch"}let d=l?"pre":"";return n.major!==r.major?d+"major":n.minor!==r.minor?d+"minor":n.patch!==r.patch?d+"patch":"prerelease"};Nw.exports=ix});var Dw=A((EJ,Ow)=>{"use strict";var ax=ae(),lx=(e,t)=>new ax(e,t).major;Ow.exports=lx});var Mw=A((SJ,Lw)=>{"use strict";var cx=ae(),dx=(e,t)=>new cx(e,t).minor;Lw.exports=dx});var Fw=A((bJ,$w)=>{"use strict";var ux=ae(),px=(e,t)=>new ux(e,t).patch;$w.exports=px});var Hw=A((TJ,jw)=>{"use strict";var mx=Kt(),fx=(e,t)=>{let n=mx(e,t);return n&&n.prerelease.length?n.prerelease:null};jw.exports=fx});var De=A((_J,Bw)=>{"use strict";var Uw=ae(),gx=(e,t,n)=>new Uw(e,n).compare(new Uw(t,n));Bw.exports=gx});var Jw=A((kJ,Ww)=>{"use strict";var hx=De(),yx=(e,t,n)=>hx(t,e,n);Ww.exports=yx});var qw=A((RJ,Gw)=>{"use strict";var wx=De(),Ex=(e,t)=>wx(e,t,!0);Gw.exports=Ex});var Pi=A((vJ,Vw)=>{"use strict";var Kw=ae(),Sx=(e,t,n)=>{let r=new Kw(e,n),o=new Kw(t,n);return r.compare(o)||r.compareBuild(o)};Vw.exports=Sx});var Xw=A((AJ,Yw)=>{"use strict";var bx=Pi(),Tx=(e,t)=>e.sort((n,r)=>bx(n,r,t));Yw.exports=Tx});var Qw=A((IJ,zw)=>{"use strict";var _x=Pi(),kx=(e,t)=>e.sort((n,r)=>_x(r,n,t));zw.exports=kx});var Po=A((xJ,Zw)=>{"use strict";var Rx=De(),vx=(e,t,n)=>Rx(e,t,n)>0;Zw.exports=vx});var Oi=A((CJ,eE)=>{"use strict";var Ax=De(),Ix=(e,t,n)=>Ax(e,t,n)<0;eE.exports=Ix});var id=A((NJ,tE)=>{"use strict";var xx=De(),Cx=(e,t,n)=>xx(e,t,n)===0;tE.exports=Cx});var ad=A((PJ,nE)=>{"use strict";var Nx=De(),Px=(e,t,n)=>Nx(e,t,n)!==0;nE.exports=Px});var Di=A((OJ,rE)=>{"use strict";var Ox=De(),Dx=(e,t,n)=>Ox(e,t,n)>=0;rE.exports=Dx});var Li=A((DJ,oE)=>{"use strict";var Lx=De(),Mx=(e,t,n)=>Lx(e,t,n)<=0;oE.exports=Mx});var ld=A((LJ,sE)=>{"use strict";var $x=id(),Fx=ad(),jx=Po(),Hx=Di(),Ux=Oi(),Bx=Li(),Wx=(e,t,n,r)=>{switch(t){case"===":return typeof e=="object"&&(e=e.version),typeof n=="object"&&(n=n.version),e===n;case"!==":return typeof e=="object"&&(e=e.version),typeof n=="object"&&(n=n.version),e!==n;case"":case"=":case"==":return $x(e,n,r);case"!=":return Fx(e,n,r);case">":return jx(e,n,r);case">=":return Hx(e,n,r);case"<":return Ux(e,n,r);case"<=":return Bx(e,n,r);default:throw new TypeError(`Invalid operator: ${t}`)}};sE.exports=Wx});var aE=A((MJ,iE)=>{"use strict";var Jx=ae(),Gx=Kt(),{safeRe:Mi,t:$i}=cr(),qx=(e,t)=>{if(e instanceof Jx)return e;if(typeof e=="number"&&(e=String(e)),typeof e!="string")return null;t=t||{};let n=null;if(!t.rtl)n=e.match(t.includePrerelease?Mi[$i.COERCEFULL]:Mi[$i.COERCE]);else{let l=t.includePrerelease?Mi[$i.COERCERTLFULL]:Mi[$i.COERCERTL],c;for(;(c=l.exec(e))&&(!n||n.index+n[0].length!==e.length);)(!n||c.index+c[0].length!==n.index+n[0].length)&&(n=c),l.lastIndex=c.index+c[1].length+c[2].length;l.lastIndex=-1}if(n===null)return null;let r=n[2],o=n[3]||"0",s=n[4]||"0",i=t.includePrerelease&&n[5]?`-${n[5]}`:"",a=t.includePrerelease&&n[6]?`+${n[6]}`:"";return Gx(`${r}.${o}.${s}${i}${a}`,t)};iE.exports=qx});var cE=A(($J,lE)=>{"use strict";var Kx=Kt(),Vx=lr(),Yx=ae(),Xx=(e,t,n)=>{if(!Vx.RELEASE_TYPES.includes(t))return null;let r=zx(e,n);return r&&Qx(r,t)},zx=(e,t)=>{let n=e instanceof Yx?e.version:e;return Kx(n,t)},Qx=(e,t)=>{if(Zx(t))return e.version;switch(e.prerelease=[],t){case"major":e.minor=0,e.patch=0;break;case"minor":e.patch=0;break}return e.format()},Zx=e=>e.startsWith("pre");lE.exports=Xx});var uE=A((FJ,dE)=>{"use strict";var cd=class{constructor(){this.max=1e3,this.map=new Map}get(t){let n=this.map.get(t);if(n!==void 0)return this.map.delete(t),this.map.set(t,n),n}delete(t){return this.map.delete(t)}set(t,n){if(!this.delete(t)&&n!==void 0){if(this.map.size>=this.max){let o=this.map.keys().next().value;this.delete(o)}this.map.set(t,n)}return this}};dE.exports=cd});var Le=A((jJ,gE)=>{"use strict";var eC=/\s+/g,dd=class e{constructor(t,n){if(n=nC(n),t instanceof e)return t.loose===!!n.loose&&t.includePrerelease===!!n.includePrerelease?t:new e(t.raw,n);if(t instanceof ud)return this.raw=t.value,this.set=[[t]],this.formatted=void 0,this;if(this.options=n,this.loose=!!n.loose,this.includePrerelease=!!n.includePrerelease,this.raw=t.trim().replace(eC," "),this.set=this.raw.split("||").map(r=>this.parseRange(r.trim())).filter(r=>r.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let r=this.set[0];if(this.set=this.set.filter(o=>!mE(o[0])),this.set.length===0)this.set=[r];else if(this.set.length>1){for(let o of this.set)if(o.length===1&&uC(o[0])){this.set=[o];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let t=0;t<this.set.length;t++){t>0&&(this.formatted+="||");let n=this.set[t];for(let r=0;r<n.length;r++)r>0&&(this.formatted+=" "),this.formatted+=n[r].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(t){t=t.replace(dC,"");let r=((this.options.includePrerelease&&lC)|(this.options.loose&&cC))+":"+t,o=pE.get(r);if(o)return o;let s=this.options.loose,i=s?ye[le.HYPHENRANGELOOSE]:ye[le.HYPHENRANGE];t=t.replace(i,bC(this.options.includePrerelease)),J("hyphen replace",t),t=t.replace(ye[le.COMPARATORTRIM],sC),J("comparator trim",t),t=t.replace(ye[le.TILDETRIM],iC),J("tilde trim",t),t=t.replace(ye[le.CARETTRIM],aC),J("caret trim",t);let a=t.split(" ").map(u=>pC(u,this.options)).join(" ").split(/\s+/).map(u=>SC(u,this.options));s&&(a=a.filter(u=>(J("loose invalid filter",u,this.options),!!u.match(ye[le.COMPARATORLOOSE])))),J("range list",a);let l=new Map,c=a.map(u=>new ud(u,this.options));for(let u of c){if(mE(u))return[u];l.set(u.value,u)}l.size>1&&l.has("")&&l.delete("");let d=[...l.values()];return pE.set(r,d),d}intersects(t,n){if(!(t instanceof e))throw new TypeError("a Range is required");return this.set.some(r=>fE(r,n)&&t.set.some(o=>fE(o,n)&&r.every(s=>o.every(i=>s.intersects(i,n)))))}test(t){if(!t)return!1;if(typeof t=="string")try{t=new rC(t,this.options)}catch{return!1}for(let n=0;n<this.set.length;n++)if(TC(this.set[n],t,this.options))return!0;return!1}};gE.exports=dd;var tC=uE(),pE=new tC,nC=Ai(),ud=Oo(),J=No(),rC=ae(),{safeRe:ye,src:oC,t:le,comparatorTrimReplace:sC,tildeTrimReplace:iC,caretTrimReplace:aC}=cr(),{FLAG_INCLUDE_PRERELEASE:lC,FLAG_LOOSE:cC}=lr(),dC=new RegExp(oC[le.BUILD],"g"),mE=e=>e.value==="<0.0.0-0",uC=e=>e.value==="",fE=(e,t)=>{let n=!0,r=e.slice(),o=r.pop();for(;n&&r.length;)n=r.every(s=>o.intersects(s,t)),o=r.pop();return n},pC=(e,t)=>(e=e.replace(ye[le.BUILD],""),J("comp",e,t),e=gC(e,t),J("caret",e),e=mC(e,t),J("tildes",e),e=yC(e,t),J("xrange",e),e=EC(e,t),J("stars",e),e),we=e=>!e||e.toLowerCase()==="x"||e==="*",mC=(e,t)=>e.trim().split(/\s+/).map(n=>fC(n,t)).join(" "),fC=(e,t)=>{let n=t.loose?ye[le.TILDELOOSE]:ye[le.TILDE];return e.replace(n,(r,o,s,i,a)=>{J("tilde",e,r,o,s,i,a);let l;return we(o)?l="":we(s)?l=`>=${o}.0.0 <${+o+1}.0.0-0`:we(i)?l=`>=${o}.${s}.0 <${o}.${+s+1}.0-0`:a?(J("replaceTilde pr",a),l=`>=${o}.${s}.${i}-${a} <${o}.${+s+1}.0-0`):l=`>=${o}.${s}.${i} <${o}.${+s+1}.0-0`,J("tilde return",l),l})},gC=(e,t)=>e.trim().split(/\s+/).map(n=>hC(n,t)).join(" "),hC=(e,t)=>{J("caret",e,t);let n=t.loose?ye[le.CARETLOOSE]:ye[le.CARET],r=t.includePrerelease?"-0":"";return e.replace(n,(o,s,i,a,l)=>{J("caret",e,o,s,i,a,l);let c;return we(s)?c="":we(i)?c=`>=${s}.0.0${r} <${+s+1}.0.0-0`:we(a)?s==="0"?c=`>=${s}.${i}.0${r} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.0${r} <${+s+1}.0.0-0`:l?(J("replaceCaret pr",l),s==="0"?i==="0"?c=`>=${s}.${i}.${a}-${l} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}-${l} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a}-${l} <${+s+1}.0.0-0`):(J("no pr"),s==="0"?i==="0"?c=`>=${s}.${i}.${a}${r} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}${r} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a} <${+s+1}.0.0-0`),J("caret return",c),c})},yC=(e,t)=>(J("replaceXRanges",e,t),e.split(/\s+/).map(n=>wC(n,t)).join(" ")),wC=(e,t)=>{e=e.trim();let n=t.loose?ye[le.XRANGELOOSE]:ye[le.XRANGE];return e.replace(n,(r,o,s,i,a,l)=>{J("xRange",e,r,o,s,i,a,l);let c=we(s),d=c||we(i),u=d||we(a),p=u;return o==="="&&p&&(o=""),l=t.includePrerelease?"-0":"",c?o===">"||o==="<"?r="<0.0.0-0":r="*":o&&p?(d&&(i=0),a=0,o===">"?(o=">=",d?(s=+s+1,i=0,a=0):(i=+i+1,a=0)):o==="<="&&(o="<",d?s=+s+1:i=+i+1),o==="<"&&(l="-0"),r=`${o+s}.${i}.${a}${l}`):d?r=`>=${s}.0.0${l} <${+s+1}.0.0-0`:u&&(r=`>=${s}.${i}.0${l} <${s}.${+i+1}.0-0`),J("xRange return",r),r})},EC=(e,t)=>(J("replaceStars",e,t),e.trim().replace(ye[le.STAR],"")),SC=(e,t)=>(J("replaceGTE0",e,t),e.trim().replace(ye[t.includePrerelease?le.GTE0PRE:le.GTE0],"")),bC=e=>(t,n,r,o,s,i,a,l,c,d,u,p)=>(we(r)?n="":we(o)?n=`>=${r}.0.0${e?"-0":""}`:we(s)?n=`>=${r}.${o}.0${e?"-0":""}`:i?n=`>=${n}`:n=`>=${n}${e?"-0":""}`,we(c)?l="":we(d)?l=`<${+c+1}.0.0-0`:we(u)?l=`<${c}.${+d+1}.0-0`:p?l=`<=${c}.${d}.${u}-${p}`:e?l=`<${c}.${d}.${+u+1}-0`:l=`<=${l}`,`${n} ${l}`.trim()),TC=(e,t,n)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!n.includePrerelease){for(let r=0;r<e.length;r++)if(J(e[r].semver),e[r].semver!==ud.ANY&&e[r].semver.prerelease.length>0){let o=e[r].semver;if(o.major===t.major&&o.minor===t.minor&&o.patch===t.patch)return!0}return!1}return!0}});var Oo=A((HJ,bE)=>{"use strict";var Do=Symbol("SemVer ANY"),fd=class e{static get ANY(){return Do}constructor(t,n){if(n=hE(n),t instanceof e){if(t.loose===!!n.loose)return t;t=t.value}t=t.trim().split(/\s+/).join(" "),md("comparator",t,n),this.options=n,this.loose=!!n.loose,this.parse(t),this.semver===Do?this.value="":this.value=this.operator+this.semver.version,md("comp",this)}parse(t){let n=this.options.loose?yE[wE.COMPARATORLOOSE]:yE[wE.COMPARATOR],r=t.match(n);if(!r)throw new TypeError(`Invalid comparator: ${t}`);this.operator=r[1]!==void 0?r[1]:"",this.operator==="="&&(this.operator=""),r[2]?this.semver=new EE(r[2],this.options.loose):this.semver=Do}toString(){return this.value}test(t){if(md("Comparator.test",t,this.options.loose),this.semver===Do||t===Do)return!0;if(typeof t=="string")try{t=new EE(t,this.options)}catch{return!1}return pd(t,this.operator,this.semver,this.options)}intersects(t,n){if(!(t instanceof e))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new SE(t.value,n).test(this.value):t.operator===""?t.value===""?!0:new SE(this.value,n).test(t.semver):(n=hE(n),n.includePrerelease&&(this.value==="<0.0.0-0"||t.value==="<0.0.0-0")||!n.includePrerelease&&(this.value.startsWith("<0.0.0")||t.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&t.operator.startsWith(">")||this.operator.startsWith("<")&&t.operator.startsWith("<")||this.semver.version===t.semver.version&&this.operator.includes("=")&&t.operator.includes("=")||pd(this.semver,"<",t.semver,n)&&this.operator.startsWith(">")&&t.operator.startsWith("<")||pd(this.semver,">",t.semver,n)&&this.operator.startsWith("<")&&t.operator.startsWith(">")))}};bE.exports=fd;var hE=Ai(),{safeRe:yE,t:wE}=cr(),pd=ld(),md=No(),EE=ae(),SE=Le()});var Lo=A((UJ,TE)=>{"use strict";var _C=Le(),kC=(e,t,n)=>{try{t=new _C(t,n)}catch{return!1}return t.test(e)};TE.exports=kC});var kE=A((BJ,_E)=>{"use strict";var RC=Le(),vC=(e,t)=>new RC(e,t).set.map(n=>n.map(r=>r.value).join(" ").trim().split(" "));_E.exports=vC});var vE=A((WJ,RE)=>{"use strict";var AC=ae(),IC=Le(),xC=(e,t,n)=>{let r=null,o=null,s=null;try{s=new IC(t,n)}catch{return null}return e.forEach(i=>{s.test(i)&&(!r||o.compare(i)===-1)&&(r=i,o=new AC(r,n))}),r};RE.exports=xC});var IE=A((JJ,AE)=>{"use strict";var CC=ae(),NC=Le(),PC=(e,t,n)=>{let r=null,o=null,s=null;try{s=new NC(t,n)}catch{return null}return e.forEach(i=>{s.test(i)&&(!r||o.compare(i)===1)&&(r=i,o=new CC(r,n))}),r};AE.exports=PC});var NE=A((GJ,CE)=>{"use strict";var gd=ae(),OC=Le(),xE=Po(),DC=(e,t)=>{e=new OC(e,t);let n=new gd("0.0.0");if(e.test(n)||(n=new gd("0.0.0-0"),e.test(n)))return n;n=null;for(let r=0;r<e.set.length;++r){let o=e.set[r],s=null;o.forEach(i=>{let a=new gd(i.semver.version);switch(i.operator){case">":a.prerelease.length===0?a.patch++:a.prerelease.push(0),a.raw=a.format();case"":case">=":(!s||xE(a,s))&&(s=a);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${i.operator}`)}}),s&&(!n||xE(n,s))&&(n=s)}return n&&e.test(n)?n:null};CE.exports=DC});var OE=A((qJ,PE)=>{"use strict";var LC=Le(),MC=(e,t)=>{try{return new LC(e,t).range||"*"}catch{return null}};PE.exports=MC});var Fi=A((KJ,$E)=>{"use strict";var $C=ae(),ME=Oo(),{ANY:FC}=ME,jC=Le(),HC=Lo(),DE=Po(),LE=Oi(),UC=Li(),BC=Di(),WC=(e,t,n,r)=>{e=new $C(e,r),t=new jC(t,r);let o,s,i,a,l;switch(n){case">":o=DE,s=UC,i=LE,a=">",l=">=";break;case"<":o=LE,s=BC,i=DE,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(HC(e,t,r))return!1;for(let c=0;c<t.set.length;++c){let d=t.set[c],u=null,p=null;if(d.forEach(m=>{m.semver===FC&&(m=new ME(">=0.0.0")),u=u||m,p=p||m,o(m.semver,u.semver,r)?u=m:i(m.semver,p.semver,r)&&(p=m)}),u.operator===a||u.operator===l||(!p.operator||p.operator===a)&&s(e,p.semver))return!1;if(p.operator===l&&i(e,p.semver))return!1}return!0};$E.exports=WC});var jE=A((VJ,FE)=>{"use strict";var JC=Fi(),GC=(e,t,n)=>JC(e,t,">",n);FE.exports=GC});var UE=A((YJ,HE)=>{"use strict";var qC=Fi(),KC=(e,t,n)=>qC(e,t,"<",n);HE.exports=KC});var JE=A((XJ,WE)=>{"use strict";var BE=Le(),VC=(e,t,n)=>(e=new BE(e,n),t=new BE(t,n),e.intersects(t,n));WE.exports=VC});var qE=A((zJ,GE)=>{"use strict";var YC=Lo(),XC=De();GE.exports=(e,t,n)=>{let r=[],o=null,s=null,i=e.sort((d,u)=>XC(d,u,n));for(let d of i)YC(d,t,n)?(s=d,o||(o=d)):(s&&r.push([o,s]),s=null,o=null);o&&r.push([o,null]);let a=[];for(let[d,u]of r)d===u?a.push(d):!u&&d===i[0]?a.push("*"):u?d===i[0]?a.push(`<=${u}`):a.push(`${d} - ${u}`):a.push(`>=${d}`);let l=a.join(" || "),c=typeof t.raw=="string"?t.raw:String(t);return l.length<c.length?l:t}});var QE=A((QJ,zE)=>{"use strict";var KE=Le(),wd=Oo(),{ANY:hd}=wd,yd=Lo(),Ed=De(),zC=(e,t,n={})=>{if(e===t)return!0;e=new KE(e,n),t=new KE(t,n);let r=!1;e:for(let o of e.set){for(let s of t.set){let i=ZC(o,s,n);if(r=r||i!==null,i)continue e}if(r)return!1}return!0},QC=[new wd(">=0.0.0-0")],VE=[new wd(">=0.0.0")],ZC=(e,t,n)=>{if(e===t)return!0;if(e.length===1&&e[0].semver===hd){if(t.length===1&&t[0].semver===hd)return!0;n.includePrerelease?e=QC:e=VE}if(t.length===1&&t[0].semver===hd){if(n.includePrerelease)return!0;t=VE}let r=new Set,o,s;for(let m of e)m.operator===">"||m.operator===">="?o=YE(o,m,n):m.operator==="<"||m.operator==="<="?s=XE(s,m,n):r.add(m.semver);if(r.size>1)return null;let i;if(o&&s){if(i=Ed(o.semver,s.semver,n),i>0)return null;if(i===0&&(o.operator!==">="||s.operator!=="<="))return null}for(let m of r){if(o&&!yd(m,String(o),n)||s&&!yd(m,String(s),n))return null;for(let g of t)if(!yd(m,String(g),n))return!1;return!0}let a,l,c,d,u=s&&!n.includePrerelease&&s.semver.prerelease.length?s.semver:!1,p=o&&!n.includePrerelease&&o.semver.prerelease.length?o.semver:!1;u&&u.prerelease.length===1&&s.operator==="<"&&u.prerelease[0]===0&&(u=!1);for(let m of t){if(d=d||m.operator===">"||m.operator===">=",c=c||m.operator==="<"||m.operator==="<=",o){if(p&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===p.major&&m.semver.minor===p.minor&&m.semver.patch===p.patch&&(p=!1),m.operator===">"||m.operator===">="){if(a=YE(o,m,n),a===m&&a!==o)return!1}else if(o.operator===">="&&!m.test(o.semver))return!1}if(s){if(u&&m.semver.prerelease&&m.semver.prerelease.length&&m.semver.major===u.major&&m.semver.minor===u.minor&&m.semver.patch===u.patch&&(u=!1),m.operator==="<"||m.operator==="<="){if(l=XE(s,m,n),l===m&&l!==s)return!1}else if(s.operator==="<="&&!m.test(s.semver))return!1}if(!m.operator&&(s||o)&&i!==0)return!1}return!(o&&c&&!s&&i!==0||s&&d&&!o&&i!==0||p||u)},YE=(e,t,n)=>{if(!e)return t;let r=Ed(e.semver,t.semver,n);return r>0?e:r<0||t.operator===">"&&e.operator===">="?t:e},XE=(e,t,n)=>{if(!e)return t;let r=Ed(e.semver,t.semver,n);return r<0?e:r>0||t.operator==="<"&&e.operator==="<="?t:e};zE.exports=zC});var nS=A((ZJ,tS)=>{"use strict";var Sd=cr(),ZE=lr(),eN=ae(),eS=rd(),tN=Kt(),nN=kw(),rN=vw(),oN=xw(),sN=Pw(),iN=Dw(),aN=Mw(),lN=Fw(),cN=Hw(),dN=De(),uN=Jw(),pN=qw(),mN=Pi(),fN=Xw(),gN=Qw(),hN=Po(),yN=Oi(),wN=id(),EN=ad(),SN=Di(),bN=Li(),TN=ld(),_N=aE(),kN=cE(),RN=Oo(),vN=Le(),AN=Lo(),IN=kE(),xN=vE(),CN=IE(),NN=NE(),PN=OE(),ON=Fi(),DN=jE(),LN=UE(),MN=JE(),$N=qE(),FN=QE();tS.exports={parse:tN,valid:nN,clean:rN,inc:oN,diff:sN,major:iN,minor:aN,patch:lN,prerelease:cN,compare:dN,rcompare:uN,compareLoose:pN,compareBuild:mN,sort:fN,rsort:gN,gt:hN,lt:yN,eq:wN,neq:EN,gte:SN,lte:bN,cmp:TN,coerce:_N,truncate:kN,Comparator:RN,Range:vN,satisfies:AN,toComparators:IN,maxSatisfying:xN,minSatisfying:CN,minVersion:NN,validRange:PN,outside:ON,gtr:DN,ltr:LN,intersects:MN,simplifyRange:$N,subset:FN,SemVer:eN,re:Sd.re,src:Sd.src,tokens:Sd.t,SEMVER_SPEC_VERSION:ZE.SEMVER_SPEC_VERSION,RELEASE_TYPES:ZE.RELEASE_TYPES,compareIdentifiers:eS.compareIdentifiers,rcompareIdentifiers:eS.rcompareIdentifiers}});var hS={};Ir(hS,{POST_MERGE_MARKER_START:()=>Uo,POST_REWRITE_MARKER_START:()=>jo,PREPARE_MSG_MARKER_START:()=>Ho,PRE_PUSH_MARKER_START:()=>Bo,installGitHook:()=>Cd,installPostMergeHook:()=>Od,installPostRewriteHook:()=>Nd,installPrePushHook:()=>Dd,installPrepareMsgHook:()=>Pd,isGitHookInstalled:()=>fS,isGitPipelineFullyInstalled:()=>gS,isHookSectionInstalled:()=>mr,removeGitHook:()=>Ld,removePostMergeHook:()=>Fd,removePostRewriteHook:()=>Md,removePrePushHook:()=>jd,removePrepareMsgHook:()=>$d});async function Cd(e){let t=await Hn(e),n=(0,fr.join)(t,"post-commit"),r=Ue("post-commit"),o=[pr,r,xd].join(`
`),s,i="";try{if(i=await(0,ne.readFile)(n,"utf-8"),i.includes(pr)){let l=new RegExp(`\\n*${Vt(pr)}[\\s\\S]*?${Vt(xd)}\\n*`,"g"),d=`${i.replace(l,`
`).trimEnd()}

${o}
`;return i===d?(await qi(n),{path:n}):(await v(n,d),await(0,ne.chmod)(n,493),{path:n})}s="Existing post-commit hook found \u2014 Jolli Memory section appended",Wi.warn(s)}catch{}let a;i?a=`${i}

${o}
`:a=`#!/bin/sh

${o}
`,await(0,ne.mkdir)(t,{recursive:!0}),await v(n,a);try{await(0,ne.chmod)(n,493)}catch{}return Wi.info("Git post-commit hook installed"),{warning:s,path:n}}async function Nd(e){let t=Ue("post-rewrite",'"$1"'),n=[jo,t,dS].join(`
`);return Ji(e,"post-rewrite",n,jo)}async function Pd(e){let t='"$HOME/.jolli/jollimemory/run-hook"',n=["__jolli_prepare_msg_previous_status=$?",`if [ -x ${t} ]; then ${t} prepare-commit-msg "$1" "$2" || true; fi`,'(exit "$__jolli_prepare_msg_previous_status")'].join(`
`),r=[Ho,n,uS].join(`
`);return Ji(e,"prepare-commit-msg",r,Ho)}async function Od(e){let t=Ue("post-merge"),n=[Uo,t,pS].join(`
`);return Ji(e,"post-merge",n,Uo)}async function Dd(e){let t='"$HOME/.jolli/jollimemory/run-hook"',n=["__jolli_pre_push_previous_status=$?",`if [ -x ${t} ]; then ${t} pre-push "$@" || true; fi`,'(exit "$__jolli_pre_push_previous_status")'].join(`
`),r=[Bo,n,mS].join(`
`);return Ji(e,"pre-push",r,Bo)}async function Ji(e,t,n,r){let o=n.slice(n.lastIndexOf(`
`)+1),s=await Hn(e),i=(0,fr.join)(s,t),a,l="";try{if(l=await(0,ne.readFile)(i,"utf-8"),l.includes(r)){let d=new RegExp(`\\n*${Vt(r)}[\\s\\S]*?${Vt(o)}\\n*`,"g"),p=`${l.replace(d,`
`).trimEnd()}

${n}
`;return l===p?(await qi(i),{path:i}):(await v(i,p),await(0,ne.chmod)(i,493),{path:i})}a=`Existing ${t} hook found \u2014 Jolli Memory section appended`,Wi.warn(a)}catch{}let c;l?c=`${l}

${n}
`:c=`#!/bin/sh

${n}
`,await(0,ne.mkdir)(s,{recursive:!0}),await v(i,c);try{await(0,ne.chmod)(i,493)}catch{}return Wi.info("Git %s hook installed",t),{warning:a,path:i}}async function Ld(e){let t;try{let s=await Hn(e);t=(0,fr.join)(s,"post-commit")}catch{return{}}let n;try{n=await(0,ne.readFile)(t,"utf-8")}catch{return{}}if(!n.includes(pr))return{};let r=new RegExp(`\\n*${Vt(pr)}[\\s\\S]*?${Vt(xd)}\\n*`,"g"),o=n.replace(r,`
`);if(o.trim()==="#!/bin/sh"||o.trim()===""){let{rm:s}=await import("node:fs/promises");await s(t,{force:!0})}else await v(t,o),await qi(t);return{}}async function Md(e){await Gi(e,"post-rewrite",jo,dS)}async function $d(e){await Gi(e,"prepare-commit-msg",Ho,uS)}async function Fd(e){await Gi(e,"post-merge",Uo,pS)}async function jd(e){await Gi(e,"pre-push",Bo,mS)}async function Gi(e,t,n,r){let o;try{o=await Hn(e)}catch{return}let s=(0,fr.join)(o,t),i;try{i=await(0,ne.readFile)(s,"utf-8")}catch{return}if(!i.includes(n))return;let a=new RegExp(`\\n*${Vt(n)}[\\s\\S]*?${Vt(r)}\\n*`,"g"),l=i.replace(a,`
`);if(l.trim()==="#!/bin/sh"||l.trim()===""){let{rm:c}=await import("node:fs/promises");await c(s,{force:!0})}else await v(s,l),await qi(s)}async function fS(e){return mr(e,"post-commit",pr)}async function gS(e){return await fS(e)&&await mr(e,"post-rewrite",jo)&&await mr(e,"prepare-commit-msg",Ho)&&await mr(e,"post-merge",Uo)}async function mr(e,t,n){try{let r=await Hn(e),o=(0,fr.join)(r,t);return(await(0,ne.readFile)(o,"utf-8")).includes(n)?process.platform==="win32"?!0:((await(0,ne.stat)(o)).mode&73)!==0:!1}catch{return!1}}function Vt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function qi(e){try{((await(0,ne.stat)(e)).mode&73)===0&&await(0,ne.chmod)(e,493)}catch{}}var ne,fr,Wi,pr,xd,jo,dS,Ho,uS,Uo,pS,Bo,mS,Hd=y(()=>{"use strict";ne=require("node:fs/promises"),fr=require("node:path");Q();be();w();vs();Wi=f("GitHookInstaller"),pr="# >>> JolliMemory post-commit hook >>>",xd="# <<< JolliMemory post-commit hook <<<",jo="# >>> JolliMemory post-rewrite hook >>>",dS="# <<< JolliMemory post-rewrite hook <<<",Ho="# >>> JolliMemory prepare-commit-msg hook >>>",uS="# <<< JolliMemory prepare-commit-msg hook <<<",Uo="# >>> JolliMemory post-merge hook >>>",pS="# <<< JolliMemory post-merge hook <<<",Bo="# >>> JolliMemory pre-push hook >>>",mS="# <<< JolliMemory pre-push hook <<<"});function Wb(){return"0.99.16"}function Hb(e){return/^\d/.test(e)}function Jb(e,t){if(!Hb(e)||!Hb(t))return!1;let n=s=>s.split(".").map(i=>Number.parseInt(i,10)||0),r=n(e),o=n(t);for(let s=0;s<Math.max(r.length,o.length);s++){let i=r[s]??0,a=o[s]??0;if(i!==a)return i>a}return!1}function Ta(e,t=CO){return new Promise(n=>{let r=Buffer.alloc(0),o=!1,s=c=>{o||(o=!0,clearTimeout(l),e.removeListener("data",i),e.removeListener("close",a),e.removeListener("error",a),n(c))},i=c=>{r=Buffer.concat([r,c]);let d=r.indexOf(10);if(d===-1){r.length>NO&&s(void 0);return}s({line:r.subarray(0,d).toString("utf8"),rest:r.subarray(d+1)})},a=()=>s(void 0),l=setTimeout(()=>s(void 0),t);l.unref?.(),e.on("data",i),e.once("close",a),e.once("error",a)})}function Gb(e,t){return(0,Rr.join)((0,Ub.tmpdir)(),`.jolli-${e}-${t}`)}function mu(e){return`${JSON.stringify(e)}
`}var pu,Ub,Rr,Bb,uu,CO,NO,fu=y(()=>{"use strict";pu=require("node:fs"),Ub=require("node:os"),Rr=require("node:path"),Bb=require("node:url");re();CO=1e4,NO=4096});function DO(e){let t=(0,In.join)((0,In.dirname)((0,hu.fileURLToPath)(e)),PO);return(0,gu.existsSync)(t)?t:void 0}function yu(e,t=process.argv[1],n=process.execArgv){let r=DO(e);if(r)return{entry:r,nodeArgs:[]};let o=(0,In.dirname)((0,hu.fileURLToPath)(e)),s=(0,In.join)((0,In.dirname)(o),OO);if(t?.endsWith(".ts")&&(0,gu.existsSync)(s))return{entry:s,nodeArgs:n}}var gu,In,hu,PO,OO,qb=y(()=>{"use strict";gu=require("node:fs"),In=require("node:path"),hu=require("node:url"),PO="Cli.js",OO="Cli.ts"});function MO(e){return Gb("global",e)}function $O(e=(0,Vb.homedir)()){return(0,Kb.createHash)("sha256").update(Cr(e,"win32")).digest("hex").slice(0,16)}function _a(e={}){if((e.platform??process.platform)==="win32")return`\\\\.\\pipe\\jolli-global-${$O(e.home)}`;let n=e.uid??process.getuid?.()??0;return(0,Yb.join)(MO(n),"daemon.sock")}function Su(e){let t;try{t=JSON.parse(e)}catch{return}if(typeof t!="object"||t===null)return;let{t:n,protocol:r,version:o,pid:s,startedAt:i}=t;if(!(n!=="hello"||r!==LO)&&!(typeof o!="string"||typeof s!="number"||typeof i!="number"))return{t:"hello",protocol:r,version:o,pid:s,startedAt:i}}var Kb,Vb,Yb,LO,wu,Eu,Xb=y(()=>{"use strict";Kb=require("node:crypto"),Vb=require("node:os"),Yb=require("node:path");fu();re();LO=1,wu="global-daemon",Eu=300});var Ru={};Ir(Ru,{GLOBAL_DAEMON_ENSURE_COMMAND:()=>Tu,ensureGlobalDaemon:()=>UO,probeGlobalDaemon:()=>JO,retireGlobalDaemon:()=>WO,shouldSkipGlobalDaemon:()=>_u,triggerEnsureGlobalDaemon:()=>BO});function _u(e){return e!==null&&jO.has(e)}function ku(e){return new Promise(t=>{let n=!1,r=(0,Qb.connect)(e),o=i=>{n||(n=!0,clearTimeout(s),r.removeAllListeners("connect"),i.socket===void 0&&r.destroy(),t(i))},s=setTimeout(()=>o({socket:void 0}),FO);s.unref?.(),r.once("connect",()=>o({socket:r})),r.on("error",i=>{if(n){Ke.warn("global daemon socket error after connect: %s",R(i));return}o({socket:void 0,code:i.code})})})}async function HO(e){if(!e.startsWith("\\\\.\\pipe\\"))try{await(0,zb.unlink)(e)}catch{}}async function UO(e={}){try{if(_u(e.command??null))return"skipped-excluded-command";if(!pn(e.nodeVersion??process.versions.node))return"skipped-unsupported-node";let t=e.socketPath??_a(),{socket:n,code:r}=await ku(t);if(!n)return r==="ECONNREFUSED"&&await HO(t),(e.spawnDaemon??GO)(t),"spawned";try{let o=await Ta(n,e.helloTimeoutMs??Eu),s=o?Su(o.line):void 0;if(!s)return"already-running";let i=e.ownVersion??Wb();return Jb(i,s.version)?(n.write(mu({t:"retire"})),Ke.info("retiring global daemon pid %d (v%s < v%s)",s.pid,s.version,i),"retired-incumbent"):"already-running"}finally{n.end()}}catch(t){return Ke.warn("could not ensure the global daemon: %s",R(t)),"failed"}}function BO(e={}){try{return _u(e.command??null)||!pn(e.nodeVersion??process.versions.node)?!1:(qO(e.socketPath),!0)}catch(t){return Ke.warn("could not trigger the global daemon ensure helper: %s",R(t)),!1}}async function WO(e={}){try{let{socket:t}=await ku(e.socketPath??_a());return t?(await Ta(t,Eu),t.write(mu({t:"retire"})),t.end(),!0):!1}catch(t){return Ke.warn("could not retire the global daemon: %s",R(t)),!1}}async function JO(e){try{let{socket:t}=await ku(e??_a());if(!t)return;try{let n=await Ta(t,5e3);return n?Su(n.line):void 0}finally{t.end()}}catch{return}}function GO(e){let t=yu(__jmImportMetaUrl);if(!t){Ke.warn("Cannot locate the CLI entry to spawn the global daemon");return}let n=gt(process.execPath,[...t.nodeArgs,t.entry,wu,"--socket",e],{detached:!0,stdio:"ignore",cwd:(0,bu.homedir)()});n.on("error",r=>Ke.warn("global daemon failed to spawn: %s",R(r))),n.unref(),Ke.info("spawned global daemon (pid %d)",n.pid??-1)}function qO(e){let t=yu(__jmImportMetaUrl);if(!t){Ke.warn("Cannot locate the CLI entry to spawn the global daemon ensure helper");return}let n=[...t.nodeArgs,t.entry,Tu];e&&n.push("--socket",e);let r=gt(process.execPath,n,{detached:!0,stdio:"ignore",cwd:(0,bu.homedir)()});r.on("error",o=>Ke.warn("global daemon ensure helper failed to start: %s",R(o))),r.unref(),Ke.info("spawned global daemon ensure helper (pid %d)",r.pid??-1)}var zb,Qb,bu,Ke,Tu,FO,jO,vu=y(()=>{"use strict";zb=require("node:fs/promises"),Qb=require("node:net"),bu=require("node:os");fu();Bt();w();qb();Re();Xb();Ke=f("EnsureGlobalDaemon"),Tu="global-daemon-ensure",FO=200,jO=new Set([wu,Tu,"mcp","mcp-serve","daemon","uninstall","disable"])});var hD={};Ir(hD,{buildPluginBootstrapOutput:()=>zo,main:()=>dT,runPluginBootstrap:()=>cT});module.exports=wT(hD);var Cu=require("node:path"),lT=require("node:url");var Dt=require("node:fs"),Lu=require("node:os"),ns=require("node:path"),_e="JOLLI_LOCAL_AGENT_CHILD",Mu=".jolli-local-agent-child",$u="jolli-localagent-";function Ce(){let e=(0,Dt.mkdtempSync)((0,ns.join)((0,Lu.tmpdir)(),$u));try{(0,Dt.writeFileSync)((0,ns.join)(e,Mu),"","utf-8")}catch(t){throw(0,Dt.rmSync)(e,{recursive:!0,force:!0}),t}return e}function On(e=process.env,t){return e[_e]==="1"?!0:t!==void 0&&(0,Dt.existsSync)((0,ns.join)(t,Mu))}Mn();be();et();re();tt();me();var sn=require("node:fs/promises"),Kn=require("node:path");Q();vs();async function gl(e){let t=(0,Kn.join)(e,".claude"),n=(0,Kn.join)(t,"settings.local.json"),r=Ue("stop"),o=Ue("session-start");await xm(e);let s={},i;try{i=await(0,sn.readFile)(n,"utf-8"),s=JSON.parse(i)}catch(m){if(m.code!=="ENOENT")throw m}let a=s.hooks??{},l=a.Stop??[],c=a.SessionStart??[],d=Rs(l);d.push({hooks:[{type:"command",command:r,async:!0}]});let u=on(c,qr);u.push({hooks:[{type:"command",command:o}]}),a.Stop=d,a.SessionStart=u,s.hooks=a;let p=JSON.stringify(s,null,"	");return i===p?{path:n}:(await(0,sn.mkdir)(t,{recursive:!0}),await v(n,p),{path:n})}async function xm(e){let t=(0,Kn.join)(e,".claude","settings.json"),n;try{let i=await(0,sn.readFile)(t,"utf-8");n=JSON.parse(i)}catch{return}let r=n.hooks;if(!r)return;let o=r.Stop??[];if(!fl(o))return;let s=Rs(o);s.length===0?delete r.Stop:r.Stop=s,Object.keys(r).length===0?delete n.hooks:n.hooks=r,await v(t,JSON.stringify(n,null,"	"))}async function hl(e){await xm(e);let t=(0,Kn.join)(e,".claude","settings.local.json"),n;try{let l=await(0,sn.readFile)(t,"utf-8");n=JSON.parse(l)}catch{return{}}let r=n.hooks;if(!r)return{};let o=r.Stop??[],s=fl(o);if(s){let l=Rs(o);l.length===0?delete r.Stop:r.Stop=l}let i=r.SessionStart??[],a=Kr(i,qr);if(a){let l=on(i,qr);l.length===0?delete r.SessionStart:r.SessionStart=l}return!s&&!a?{}:(Object.keys(r).length===0?delete n.hooks:n.hooks=r,await v(t,JSON.stringify(n,null,"	")),{})}async function Cm(e){try{let t=await(0,sn.readFile)((0,Kn.join)(e,".claude","settings.local.json"),"utf-8"),r=JSON.parse(t).hooks;if(!r)return{stop:!1,sessionStart:!1};let o=r.Stop??[],s=r.SessionStart??[];return{stop:Im(o,_s,Ue("stop"),!0),sessionStart:Im(s,qr,Ue("session-start"),!1)}}catch{return{stop:!1,sessionStart:!1}}}function Im(e,t,n,r){let o=e.filter(a=>a.hooks?.some(c=>{let d=c.command;return typeof d=="string"&&t.some(u=>d.includes(u))}));if(o.length!==1)return!1;let s=o[0].hooks;if(!s||s.length!==1)return!1;let i=s[0];return i.type==="command"&&i.command===n&&(r?i.async===!0:i.async===void 0)}var an=require("node:fs/promises"),wt=require("node:path");Q();w();Re();var Pe=f("GitExclude"),Vr="# >>> jolli skill exclude >>>",Yr="# <<< jolli skill exclude <<<";function yk(e,t){return wt.win32.isAbsolute(e)||wt.posix.isAbsolute(e)?e:(0,wt.join)(t,e)}var Nm=new Map;async function yl(e){let t=Nm.get(e);if(t!==void 0)return t;try{let{stdout:n}=await Fn("git",["rev-parse","--git-path","info/exclude"],{cwd:e}),r=n.trim();if(r.length===0)return null;let o=yk(r,e);return Nm.set(e,o),o}catch{return null}}async function Pm(e,t){let n=await yl(e);if(!n)return Pe.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",e),!1;let r="";try{r=await(0,an.readFile)(n,"utf-8")}catch(i){if(i.code!=="ENOENT")return Pe.warn("Failed to read %s: %s \u2014 skipping update",n,i.message),!1}let o=Om(t),s=Dm(r,o);if(s===r)return!0;try{return await(0,an.mkdir)((0,wt.dirname)(n),{recursive:!0}),await v(n,s),Pe.info("Updated %s with %d Jolli skill exclude paths",n,t.length),!0}catch(i){return Pe.warn("Failed to write %s: %s",n,i.message),!1}}async function Xr(e,t){let n=await yl(e);if(!n)return Pe.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",e),!1;let r="";try{r=await(0,an.readFile)(n,"utf-8")}catch(s){if(s.code!=="ENOENT")return Pe.warn("Failed to read %s: %s \u2014 skipping update",n,s.message),!1}let o=wk(r,t);if(o===r)return!0;try{return await(0,an.mkdir)((0,wt.dirname)(n),{recursive:!0}),await v(n,o),Pe.info("Merged %d Jolli skill exclude path(s) into %s",t.length,n),!0}catch(s){return Pe.warn("Failed to write %s: %s",n,s.message),!1}}async function Vn(e,t){let n=await yl(e);if(!n)return Pe.warn("Skipping .git/info/exclude cleanup for %s: not a git repo or git unavailable",e),!1;let r;try{r=await(0,an.readFile)(n,"utf-8")}catch(s){return s.code==="ENOENT"?!0:(Pe.warn("Failed to read %s: %s \u2014 skipping cleanup",n,s.message),!1)}let o=Ek(r,t);if(o===r)return!0;try{return await v(n,o),Pe.info("Removed %d Jolli exclude path(s) from %s",t.length,n),!0}catch(s){return Pe.warn("Failed to write %s: %s",n,s.message),!1}}function Om(e){return`${[Vr,...e,Yr].join(`
`)}
`}function Dm(e,t){let n=e.split(`
`),r=n.indexOf(Vr),o=n.indexOf(Yr),s=t.slice(0,-1).split(`
`);if(r!==-1&&o!==-1&&o>r)return[...n.slice(0,r),...s,...n.slice(o+1)].join(`
`);if(e.length===0)return t;let i=e.endsWith(`
`)?"":`
`;return`${e}${i}${t}`}function wk(e,t){let n=e.split(`
`),r=n.indexOf(Vr),o=n.indexOf(Yr),s=r!==-1&&o!==-1&&o>r?n.slice(r+1,o):[],i=new Set(s),a=[...s];for(let l of t)i.has(l)||(i.add(l),a.push(l));return Dm(e,Om(a))}function Ek(e,t){let n=e.split(`
`),r=n.indexOf(Vr),o=n.indexOf(Yr);if(r===-1||o===-1||o<=r)return e;let s=new Set(t),i=n.slice(r+1,o).filter(c=>!s.has(c)),a=n.slice(0,r),l=n.slice(o+1);return i.length===0?[...a.length>0&&a[a.length-1]===""?a.slice(0,-1):a,...l].join(`
`):[...a,Vr,...i,Yr,...l].join(`
`)}var la=require("node:fs/promises"),_n=require("node:path"),rb=require("node:url");var wl=require("node:fs"),Lm=require("node:fs/promises"),El=require("node:os"),zr=require("node:path");w();Be();var O0=f("AntigravityDetector"),Mm=["antigravity","antigravity-ide","antigravity-cli"];function $m(e=(0,El.homedir)()){let t=[];for(let n of Mm){let r=(0,zr.join)(e,".gemini",n),o=(0,zr.join)(r,"conversations");(0,wl.existsSync)(o)&&t.push({variant:n,root:r,conversationsDir:o,brainDir:(0,zr.join)(r,"brain")})}return t}async function Sk(e){for(let t of $m(e))try{if((await(0,Lm.readdir)(t.conversationsDir)).some(n=>n.endsWith(".db")))return!0}catch{}return!1}async function Fm(e=(0,El.homedir)()){return await Sk(e)?!0:Mm.some(t=>(0,wl.existsSync)((0,zr.join)(e,".gemini",t)))}w();Xn();var As="mcp__";function Qr(e){return{name:e,kind:"builtin",calls:0}}function bl(e){return{name:e,kind:"skill",calls:0}}function zn(e,t){return{name:t?`${e}.${t}`:e,kind:"mcp",server:e,calls:0}}function Is(e){if(!e.startsWith(As))return Qr(e);let t=e.slice(As.length),n=t.indexOf("__");return n===-1?zn(t,""):zn(t.slice(0,n),t.slice(n+2))}function jm(e,t){if(t===void 0||t.length===0)return Qr(e);if(!t.startsWith(As))return zn(t,e);let n=t.slice(As.length).split("__"),r=n[n.length-1]||n[0]||t;return zn(r,e)}function _k(e,t){let n=Math.max(e.lastCallAtMs??Number.NEGATIVE_INFINITY,t.lastCallAtMs??Number.NEGATIVE_INFINITY);return Number.isFinite(n)?{lastCallAtMs:n}:{}}var ln=class{constructor(){this.byKey=new Map;this.seen=new Set}add(t,n=1){let r=`${t.kind}:${t.name}`,o=this.byKey.get(r);if(!o){this.byKey.set(r,{...t,calls:n});return}this.byKey.set(r,{...o,calls:o.calls+n,..._k(o,t)})}addOnce(t,n){if(t!==void 0){if(this.seen.has(t))return;this.seen.add(t)}this.add(n)}hasSeen(t){return this.seen.has(t)}values(){return[...this.byKey.values()]}};w();w();var kk=new Set(["vitest","jest","mocha","pytest","rspec","phpunit","pest","tox","nose2","unittest","ava","tape","karma","jasmine","cypress"]),Rk=new Set(["go test","cargo test","cargo nextest","mix test","dart test","flutter test","dotnet test","bazel test","playwright test"]),vk=new Set(["npm","pnpm","yarn","bun","deno","make"]),Ak=/&&|\|\||[;&|]|\n/,Ik=/^[A-Za-z_][A-Za-z0-9_]*=/;function Tl(e,t){return e===void 0?!1:kk.has(e)?!0:t!==void 0&&Rk.has(`${e} ${t}`)}function xk(e){let t=e.split(/\s+/).filter(i=>i.length>0),n=0;for(;n<t.length&&Ik.test(t[n]);)n+=1;if(n>=t.length)return!1;let r=t[n],o=t[n+1],s=t[n+2];return!!(r==="npx"&&Tl(o,s)||(r==="python"||r==="python3")&&o==="-m"&&Tl(s,t[n+3])||Tl(r,o)||vk.has(r)&&(o==="test"||o==="t"||o==="run"&&(s==="test"||s==="t")))}function _l(e){for(let t of e.split(Ak))if(xk(t))return!0;return!1}function cn(e){if(e===void 0)return;let t=Date.parse(e);return Number.isFinite(t)?t:void 0}function Hm(...e){let t=e.filter(n=>n!==void 0);return t.length>0?{lastCallAtMs:Math.max(...t)}:{}}function Ck(e){let t=0;for(let n of e)n.type==="tool_result"&&t++;return t}var Gm=f("TranscriptParser"),xs=class{parseLine(t,n){return Km(t,n)}parseUsageTokens(t,n){let r=Jm(t);return r?{input:r.input,output:r.output,cached:r.cached,...r.id&&{dedupKey:r.id},...r.model&&{model:r.model}}:{input:0,output:0,cached:0}}parseUsageByModel(t){let n=new Map,r=new Set;for(let o of t){let s=Jm(o);if(!s)continue;if(s.id){if(r.has(s.id))continue;r.add(s.id)}let i=n.get(s.model);i?n.set(s.model,{...i,input:i.input+s.input,output:i.output+s.output,cached:i.cached+s.cached}):n.set(s.model,{model:s.model,provider:"anthropic",input:s.input,output:s.output,cached:s.cached})}return[...n.values()].filter(o=>o.input+o.output+o.cached>0)}parseToolUse(t){let n=new ln,r=[],o=new Map;for(let s of t){let i;try{i=JSON.parse(s)}catch{continue}let a=i,l=a?.message?.content;if(!Array.isArray(l))continue;let c=a.toolUseResult?.commandName,d=typeof c=="string"&&c.length>0?c:void 0,u=Ck(l)===1,p=cn(this.parseTimestamp(s));for(let m of l){let g=m;if(g.type==="tool_result"){d!==void 0&&u&&typeof g.tool_use_id=="string"&&o.set(g.tool_use_id,d);continue}if(g.type!=="tool_use"||typeof g.name!="string")continue;let h=typeof g.id=="string"?g.id:void 0;if(g.name==="Skill"&&typeof g.input?.skill=="string"){r.push({...h!==void 0?{id:h}:{},requested:g.input.skill,...p!==void 0?{atMs:p}:{}});continue}n.addOnce(h,{...Is(g.name),...p!==void 0&&{lastCallAtMs:p}})}}for(let s of r)n.addOnce(s.id,{...bl((s.id!==void 0?o.get(s.id):void 0)??s.requested),...s.atMs!==void 0&&{lastCallAtMs:s.atMs}});return n.values()}parseTimestamp(t,n){try{let r=JSON.parse(t);return typeof r.timestamp=="string"?r.timestamp:void 0}catch{return}}parseCompactions(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}if(o.isCompactSummary!==!0)continue;let s=cn(this.parseTimestamp(r));s!==void 0&&n.add(s)}return[...n].sort((r,o)=>r-o)}parseTestRuns(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}let s=o.message?.content;if(Array.isArray(s))for(let i of s){let a=i;if(a.type!=="tool_use"||a.name!=="Bash"||typeof a.input?.command!="string"||!_l(a.input.command))continue;let l=cn(this.parseTimestamp(r));l!==void 0&&n.add(l)}}return[...n].sort((r,o)=>r-o)}},Nk=new Set(["compacted","context_compacted"]);function Um(e,t){let n=new Set;for(let r of e){let o;try{o=JSON.parse(r)}catch{continue}let s=o?.payload;if(s===null||typeof s!="object")continue;let i=s.type;if(typeof i!="string"||!t.has(i))continue;let a=o.timestamp,l=cn(typeof a=="string"?a:void 0);l!==void 0&&n.add(l)}return[...n].sort((r,o)=>r-o)}var kl=class{parseLine(t,n){try{let r=JSON.parse(t),o=typeof r.timestamp=="string"?r.timestamp:void 0;if(r.type!=="response_item")return null;let s=r.payload;if(!s||typeof s!="object"||s.type!=="message")return null;let i=s.role;if(i!=="user"&&i!=="assistant")return null;let a=$k(s.content);if(a===null)return null;let l=Uk(a);return l.length===0?null:i==="user"?jk(l)?null:{role:"human",content:l,timestamp:o}:{role:"assistant",content:l,timestamp:o}}catch(r){return Gm.debug("Failed to parse Codex transcript line %d: %s",n,r.message),null}}parseToolUse(t){let n=new Map,r=[];for(let s of t){let i;try{i=JSON.parse(s)}catch{continue}let a=i?.payload;if(a===null||typeof a!="object")continue;let l=a;if(typeof l.type!="string"||!Pk.has(l.type))continue;let c=typeof l.invocation?.tool=="string"?l.invocation.tool:void 0,d=typeof l.invocation?.server=="string"?l.invocation.server:"",u;if(c!==void 0)u=d?zn(d,c):Qr(c);else if(typeof l.name=="string"&&l.name.length>0)u=jm(l.name,typeof l.namespace=="string"?l.namespace:void 0);else continue;let p=i.timestamp,m=cn(typeof p=="string"?p:void 0),g={...u,...m!==void 0&&{lastCallAtMs:m}},h=typeof l.call_id=="string"?l.call_id:void 0;if(h===void 0){r.push(g);continue}let E=n.get(h),S=E===void 0||E.kind!=="mcp"&&g.kind==="mcp"?g:E;n.set(h,{...S,...E?Hm(E.lastCallAtMs,g.lastCallAtMs):Hm(g.lastCallAtMs)})}let o=new ln;for(let s of[...n.values(),...r])o.add(s);return o.values()}parseUnrecognizedRows(t){let n=0;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}if(o?.type!=="response_item")continue;let s=o.payload;if(s===null||typeof s!="object")continue;let i=s.type;if(typeof i=="string"){if(!Ok.has(i)){n++;continue}i==="message"&&Mk(s)&&n++}}return n}parseCompactions(t){return Um(t,Nk)}parseTurnAborts(t){return Um(t,new Set(["turn_aborted"]))}parseTestRuns(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}let s=o?.payload;if(s===null||typeof s!="object")continue;let i=s;if(i.type!=="function_call"||i.name!=="exec_command")continue;let a;try{a=(typeof i.arguments=="string"?JSON.parse(i.arguments):{}).cmd}catch{continue}if(typeof a!="string"||!_l(a))continue;let l=o.timestamp,c=cn(typeof l=="string"?l:void 0);c!==void 0&&n.add(c)}return[...n].sort((r,o)=>r-o)}},Pk=new Set(["function_call","custom_tool_call","local_shell_call","web_search_call","mcp_tool_call_end"]),Ok=new Set(["message","reasoning","function_call","function_call_output","custom_tool_call","custom_tool_call_output","local_shell_call","local_shell_call_output","tool_search_call","tool_search_output","web_search_call","mcp_tool_call_begin","mcp_tool_call_end"]),Rl=class{parseLine(t,n){try{let r=JSON.parse(t),o=r.type,s=Wm(r);if(o==="turn.prompt"){let a=qm(r.input)?.trim();return a?{role:"human",content:a,timestamp:s}:null}let i=Lk(r);if(i&&i.type==="text"){let a=typeof i.text=="string"?i.text.trim():"";return a?{role:"assistant",content:a,timestamp:s}:null}return null}catch(r){return Gm.debug("Failed to parse Kimi transcript line %d: %s",n,r.message),null}}parseToolUse(t){let n=new ln;for(let r of t){if(!r.includes(Bm))continue;let o;try{o=JSON.parse(r)}catch{continue}if(o.type!==Bm)continue;let s=o.event;if(s===null||typeof s!="object"||s.type!=="tool.call"||typeof s.name!="string")continue;let i=cn(this.parseTimestamp(r));n.addOnce(typeof s.toolCallId=="string"?s.toolCallId:void 0,{...s.name===Dk&&typeof s.args?.skill=="string"?bl(s.args.skill):Is(s.name),...i!==void 0&&{lastCallAtMs:i}})}return n.values()}parseTimestamp(t,n){try{return Wm(JSON.parse(t))}catch{return}}},Bm="context.append_loop_event",Dk="Skill";function Lk(e){if(e.type==="context.append_loop_event"){let t=e.event;return t?.type==="content.part"&&t.part&&typeof t.part=="object"?t.part:null}return e.type==="content.part"&&e.part&&typeof e.part=="object"?e.part:null}function Wm(e){let t=e.time??e.timestamp;return typeof t=="number"&&Number.isFinite(t)?new Date(t).toISOString():typeof t=="string"&&t.length>0?t:void 0}function qm(e){if(typeof e=="string")return e.length>0?e:null;if(Array.isArray(e)){let t=[];for(let n of e){let r=qm(n);r&&t.push(r)}return t.length>0?t.join(`
`):null}if(e!==null&&typeof e=="object"){let t=e;if((t.type==="text"||t.type===void 0)&&typeof t.text=="string"&&t.text.length>0)return t.text}return null}function Mk(e){let t=e.role;if(typeof t=="string"&&t!=="user"&&t!=="assistant")return!0;let n=e.content;if(Array.isArray(n))for(let r of n){if(!r||typeof r!="object")continue;let o=r.type;if(typeof r.text=="string"&&o!=="input_text"&&o!=="output_text")return!0}return!1}function $k(e){if(!Array.isArray(e))return null;let t=[];for(let r of e){if(!r||typeof r!="object")continue;let o=r.type,s=r.text;(o==="input_text"||o==="output_text")&&typeof s=="string"&&t.push(s)}let n=t.join(`
`).trim();return n.length>0?n:null}var Fk=["recommended_plugins","environment_context","skill","turn_aborted"];function jk(e){let t=e.trimStart();for(let r of Fk)if(t.startsWith(`<${r}>`)&&e.includes(`</${r}>`))return!0;return t.startsWith("# AGENTS.md instructions")&&(/<INSTRUCTIONS>[\s\S]*<\/INSTRUCTIONS>/.test(e)||/<environment_context>[\s\S]*<\/environment_context>/.test(e))||t.startsWith("The following is the Codex agent history")&&e.includes("untrusted evidence")?!0:e.replace(/<image\b[^>]*\/?>|<\/image>/g,"").trim().length===0}var Hk=/(?:\s*<oai-mem-citation>(?:(?!<\/oai-mem-citation>)[\s\S])*<\/oai-mem-citation>)+\s*$/;function Uk(e){return e.replace(Hk,"").trimEnd()}function Jm(e){try{return Wk(JSON.parse(e))}catch{return null}}function Bk(e){return e.startsWith("<")&&e.endsWith(">")}function Wk(e){let t=e,n=t?.message?.usage??t?.usage;if(!n||typeof n!="object")return null;let r=i=>typeof n[i]=="number"?n[i]:0,o=t?.message?.model??t?.model,s=t?.message?.id;return{id:typeof s=="string"?s:"",model:typeof o=="string"&&!Bk(o)?o:"",input:r("input_tokens"),output:r("output_tokens"),cached:r("cache_creation_input_tokens")}}var Jk=new xs,Gk=new kl,qk=new Rl;function Kk(e){switch(e){case"codex":return Gk;case"kimi":return qk;case"claude":return Jk}}var Vk=["claude","codex","kimi"],Yk=["gemini","opencode","antigravity","cursor","cursor-cli","cline-cli","devin","hermes"],B0=new Set([...Vk.filter(e=>Kk(e).parseToolUse!==void 0),...Yk]);var vl=f("TranscriptReader");var Xk=["Base directory for this skill:","[Request interrupted by user"],zk=/<(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>[\s\S]*?<\/(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>/g;function Km(e,t){try{let n=JSON.parse(e);if(n.isCompactSummary===!0)return vl.debug("Skipping compaction summary at line %d",t),null;if(!n.message||typeof n.message!="object")return null;let r=n.message,o=r.role,s=typeof n.timestamp=="string"?n.timestamp:void 0;if(o==="user")return Qk(r,s,t);if(o==="assistant"){let i=Vm(r.content)?.trim();return i?{role:"assistant",content:i,timestamp:s}:null}return null}catch(n){return vl.debug("Failed to parse transcript line %d: %s",t,n.message),null}}function Qk(e,t,n){let r=Vm(e.content);if(!r)return null;let o=Zk(r);return o.length===0?null:Xk.some(s=>o.startsWith(s))?(vl.debug("Skipping filtered user message at line %d",n),null):{role:"human",content:o,timestamp:t}}function Zk(e){return e.replace(zk,"").trim()}function Vm(e){if(typeof e=="string")return e.length>0?e:null;if(Array.isArray(e)){let t=[];for(let n of e)if(n!==null&&typeof n=="object"){let r=n;r.type==="text"&&typeof r.text=="string"&&t.push(r.text)}return t.length>0?t.join(`
`):null}return null}be();Mn();re();Be();var mM=f("AntigravityDiscoverer"),fM=2880*60*1e3;var Ym=require("node:fs/promises"),Cs=require("node:os"),Il=require("node:path");function eR(e=(0,Cs.homedir)()){return(0,Il.join)(e,".cline","data")}function Xm(e=(0,Cs.homedir)()){return(0,Il.join)(eR(e),"sessions")}async function zm(e=(0,Cs.homedir)()){try{return await(0,Ym.access)(Xm(e)),!0}catch{return!1}}w();re();var TM=f("ClineCliDiscoverer"),_M=2880*60*1e3;var xl=require("node:fs/promises"),to=require("node:os"),Ps=require("node:path");var Ns=require("node:os"),eo=require("node:path");w();var vM=f("VscodeWorkspaceLocator"),Qm=["Code","Code - Insiders","Cursor","VSCodium","Windsurf"];function bt(e,t=(0,Ns.homedir)()){switch((0,Ns.platform)()){case"darwin":return(0,eo.join)(t,"Library","Application Support",e);case"win32":return(0,eo.join)(process.env.APPDATA??(0,eo.join)(t,"AppData","Roaming"),e);default:return(0,eo.join)(t,".config",e)}}var tR="saoudrizwan.claude-dev";function nR(e,t){return(0,Ps.join)(bt(e,t),"User","globalStorage",tR)}function no(e=(0,to.homedir)()){return Qm.map(t=>nR(t,e))}function Os(e){return(0,Ps.join)(e,"settings","cline_mcp_settings.json")}async function Zm(e=(0,to.homedir)()){for(let t of no(e))try{return await(0,xl.access)((0,Ps.join)(t,"state","taskHistory.json")),!0}catch{}return!1}async function Cl(e=(0,to.homedir)()){let t=[];for(let n of no(e))try{await(0,xl.access)(Os(n)),t.push(n)}catch{}return t}async function ef(e=(0,to.homedir)()){return(await Cl(e)).length>0}w();re();var DM=f("ClineDiscoverer"),LM=2880*60*1e3;var Nl=require("node:fs/promises"),tf=require("node:os"),Pl=require("node:path");w();Xn();re();var JM=f("CodexDiscoverer"),GM=2880*60*1e3,rR=".codex";async function Ol(){let e=(0,Pl.join)((0,tf.homedir)(),rR);try{return(await(0,Nl.stat)(e)).isDirectory()}catch{return!1}}var qM=1440*60*1e3;var rf=require("node:fs/promises"),of=require("node:os"),Dl=require("node:path");w();var oR=f("CopilotChatDetector");function sR(e){return(0,Dl.join)(bt("Code",e),"User","globalStorage","github.copilot-chat")}function iR(e=(0,of.homedir)()){return(0,Dl.join)(e,".copilot","session-state")}async function nf(e){try{return(await(0,rf.stat)(e)).isDirectory()}catch(t){let n=t.code;return n!=="ENOENT"&&oR.warn("Copilot Chat probe stat failed for %s (%s): %s",e,n??"unknown",t.message),!1}}async function sf(){let[e,t]=await Promise.all([nf(sR()),nf(iR())]);return e||t}w();Xn();var r$=f("CopilotChatDiscoverer"),o$=2880*60*1e3;var lf=require("node:fs/promises"),cf=require("node:os"),df=require("node:path");w();Be();var uf=f("CopilotDetector");function pf(){return(0,df.join)((0,cf.homedir)(),".copilot","session-store.db")}async function mf(){return nt()?Ll():(uf.info("Copilot CLI support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,Et.major,Et.minor),!1)}async function Ll(){let e=pf();try{return(await(0,lf.stat)(e)).isFile()}catch(t){let n=t.code;return n!=="ENOENT"&&uf.warn("Copilot DB stat failed (%s): %s",n??"unknown",t.message),!1}}w();Be();var f$=f("CopilotDiscoverer"),g$=2880*60*1e3;var Ds=require("node:fs/promises"),Ls=require("node:os"),yf=require("node:path");w();var ff=require("node:os"),gf=require("node:path");function hf(e=(0,ff.homedir)()){return(0,gf.join)(e,".cursor")}re();var T$=f("CursorCliDiscoverer"),_$=2880*60*1e3;function dR(e=(0,Ls.homedir)()){return hf(e)}function uR(e=(0,Ls.homedir)()){return(0,yf.join)(dR(e),"chats")}async function wf(e=(0,Ls.homedir)()){try{return(await(0,Ds.stat)(uR(e))).isDirectory()}catch{return!1}}var Ef=require("node:fs/promises"),Sf=require("node:path");w();Be();var pR=f("CursorDetector");function bf(e){return(0,Sf.join)(bt("Cursor",e),"User","globalStorage","state.vscdb")}async function Tf(){return nt()?Ml():(pR.info("Cursor support disabled: this runtime is Node %s, requires 22.13+ for built-in SQLite",process.versions.node),!1)}async function Ml(){let e=bf();try{return(await(0,Ef.stat)(e)).isFile()}catch{return!1}}w();Be();var L$=f("CursorDiscoverer"),M$=2880*60*1e3;var $l=require("node:fs/promises"),_f=require("node:os"),Zn=require("node:path");w();Be();var B$=f("DevinDiscoverer"),W$=2880*60*1e3;function kf(e){let t=e??(0,_f.homedir)();if(process.platform==="win32")return(0,Zn.join)(process.env.APPDATA??(0,Zn.join)(t,"AppData","Roaming"),"devin","cli");let n=process.env.XDG_DATA_HOME,r=n&&n.length>0?n:(0,Zn.join)(t,".local","share");return(0,Zn.join)(r,"devin","cli")}function mR(e){return(0,Zn.join)(kf(e),"sessions.db")}async function fR(){try{return(await(0,$l.stat)(mR())).isFile()}catch{return!1}}async function Rf(){if(await fR())return!0;try{return(await(0,$l.stat)(kf())).isDirectory()}catch{return!1}}var vf=require("node:fs/promises"),Af=require("node:os"),If=require("node:path");w();var gR=f("GeminiDetector"),hR=".gemini";async function Fl(){let e=(0,If.join)((0,Af.homedir)(),hR);try{return(await(0,vf.stat)(e)).isDirectory()}catch{return gR.debug("Gemini directory not found: %s",e),!1}}be();var Tt=require("node:fs/promises"),Hl=require("node:os"),dn=require("node:path");w();Q();var jl=f("HermesConfigPaths");function Ms(e=process.env,t=(0,Hl.homedir)(),n=process.platform){let r=e.HERMES_HOME?.trim();if(r&&r.length>0)return r;if(n==="win32"){let o=e.LOCALAPPDATA?.trim();return(0,dn.join)(o&&o.length>0?o:(0,dn.join)(t,"AppData","Local"),"hermes")}return(0,dn.join)(t,".hermes")}async function Ul(e=process.env,t=(0,Hl.homedir)(),n=process.platform){let r=Ms(e,t,n),o;try{o=await(0,Tt.readdir)((0,dn.join)(r,"profiles"),{withFileTypes:!0})}catch{return[r]}let s=[];for(let i of o){if(!i.isDirectory())continue;let a=(0,dn.join)(r,"profiles",i.name);await yR(a)&&s.push(a)}return[r,...s.sort()]}async function yR(e){try{return(await(0,Tt.readdir)(e)).length>0}catch(t){return jl.warn("Skipping unreadable Hermes profile directory %s: %s",e,String(t)),!1}}function xf(e=process.env){return(0,dn.join)(Ms(e),"config.yaml")}async function Cf(e,t){let n="";try{n=await(0,Tt.readFile)(e,"utf-8")}catch(a){if(a.code!=="ENOENT"){jl.warn("Skipping Hermes allowlist upsert: %s unreadable (%s)",e,String(a));return}}let r;try{r=n.trim().length===0?{approvals:[]}:JSON.parse(n)}catch(a){jl.warn("Skipping Hermes allowlist upsert: %s not valid JSON (%s)",e,String(a));return}Array.isArray(r.approvals)||(r.approvals=[]);let o=await wR(t.scriptPath),s=r.approvals.find(a=>a.event===t.event&&a.command===t.command);if(s!==void 0){if(s.script_mtime_at_approval===o)return;s.approved_at=t.nowIso,s.script_mtime_at_approval=o}else r.approvals.push({event:t.event,command:t.command,approved_at:t.nowIso,script_mtime_at_approval:o});let i={approvals:Pf(r.approvals)};await v(e,`${JSON.stringify(i,Df,2)}`,await Of(e))}async function Nf(e,t){let n;try{n=await(0,Tt.readFile)(e,"utf-8")}catch{return}let r;try{r=JSON.parse(n)}catch{return}if(!Array.isArray(r.approvals))return;let o=r.approvals.length;r.approvals=r.approvals.filter(s=>!(s.event===t.event&&s.command===t.command)),r.approvals.length!==o&&await v(e,`${JSON.stringify({approvals:Pf(r.approvals)},Df,2)}`,await Of(e))}function Pf(e){return e.sort((t,n)=>t.event===n.event?t.command<n.command?-1:t.command>n.command?1:0:t.event<n.event?-1:1)}async function Of(e){try{return(await(0,Tt.stat)(e)).mode&511}catch{return}}function Df(e,t){return t!==null&&typeof t=="object"&&!Array.isArray(t)?Object.fromEntries(Object.entries(t).sort(([n],[r])=>n<r?-1:1)):t}async function wR(e){try{let t=await(0,Tt.stat)(e,{bigint:!0});return ER(t.mtimeNs)}catch{return null}}function ER(e){let t=1000000000n,n=e/t,r=e%t,o=Number(n)+Number(r)/1e9,s=Math.floor(o),i=SR((o-s)*1e6);i===1e6&&(s+=1,i=0);let a=new Date(s*1e3).toISOString().replace(".000Z","");return i===0?`${a}Z`:`${a}.${i.toString().padStart(6,"0")}Z`}function SR(e){let t=Math.floor(e),n=e-t;return n<.5?t:n>.5?t+1:t%2===0?t:t+1}var er=require("node:fs/promises"),Lf=require("node:os"),$s=require("node:path");w();Be();var tF=f("HermesDiscoverer"),nF=2880*60*1e3;function Mf(e){return Ms(process.env,e??(0,Lf.homedir)(),process.platform)}async function bR(e){let t=Mf(e),n=[(0,$s.join)(t,"state.db")],r;try{r=(await(0,er.readdir)((0,$s.join)(t,"profiles"),{withFileTypes:!0})).filter(s=>s.isDirectory()).map(s=>s.name)}catch{return n}for(let o of r){let s=(0,$s.join)(t,"profiles",o,"state.db");try{(await(0,er.stat)(s)).isFile()&&n.push(s)}catch{}}return n}async function TR(){for(let e of await bR())try{if((await(0,er.stat)(e)).isFile())return!0}catch{}return!1}async function $f(){if(await TR())return!0;try{return(await(0,er.stat)(Mf())).isDirectory()}catch{return!1}}oo();var js=require("node:fs/promises"),sg=require("node:os"),Vl=require("node:path");w();Xn();var _F=f("KimiDiscoverer"),kF=2880*60*1e3,LR=".kimi-code";function Hs(){return process.env.KIMI_CODE_HOME||(0,Vl.join)((0,sg.homedir)(),LR)}async function ig(){let e=Hs();try{return(await(0,js.stat)(e)).isDirectory()}catch{return!1}}et();me();var Us={"claude-plugin":{host:"claude",localAgentTool:"claude-code",skillInvocation:"/jolli:<name>"},"codex-plugin":{host:"codex",localAgentTool:"codex",skillInvocation:"$jolli:<name>"},"cursor-plugin":{host:"cursor",localAgentTool:"cursor-agent",skillInvocation:"/jolli-<name>"}},AF=Object.keys(Us);function Bs(e){return e===void 0?void 0:Us[e]?.localAgentTool}function Yl(e,t){return(e===void 0?void 0:Us[e]?.skillInvocation)?.replace("<name>",t)}function lg(e){return(e===void 0?void 0:Us[e]?.host)??"claude"}function ag(e,t){return e===void 0||e===t?void 0:e}async function cg(e,t){let n=Bs(e);return n===void 0?null:t.localAgentTool!==void 0&&t.aiProvider!==void 0?{tool:n,seededTool:!1,keptTool:ag(t.localAgentTool,n),seededProvider:!1}:Ts(r=>{let o=r.localAgentTool===void 0,s=r.aiProvider===void 0,i={tool:n,seededTool:o,keptTool:ag(r.localAgentTool,n),seededProvider:s};return!o&&!s?{update:null,result:i}:{update:{...s?{aiProvider:"local-agent"}:{},...o?{localAgentTool:n}:{}},result:i}})}var dg=require("node:fs/promises"),ug=require("node:os"),Xl=require("node:path");w();Be();var MR=f("OpenCodeDiscoverer"),OF=2880*60*1e3;function $R(){return process.env.XDG_DATA_HOME||(0,Xl.join)((0,ug.homedir)(),".local","share")}function FR(){return(0,Xl.join)($R(),"opencode","opencode.db")}async function pg(){return nt()?zl():(MR.info("OpenCode support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,Et.major,Et.minor),!1)}async function zl(){let e=FR();try{return(await(0,dg.stat)(e)).isFile()}catch{return!1}}w();Q();et();me();var HF=f("PushPendingStore");var UF=10080*60*1e3;var jR=300*1e3,BF=Math.floor(jR/3);ss();w();Re();var XF=f("PushCompensation");w();Ws();w();oo();var sj=f("KBRepoDiscoverer");w();Q();Ws();et();me();var mj=f("PushControlStore");tt();var ac=require("node:crypto");or();gs();var UR=[["CLAUDECODE","claude"],["CODEX_THREAD_ID","codex"],["GEMINI_CLI","gemini"],["OPENCODE","opencode"],["ANTIGRAVITY_AGENT","antigravity"],["COPILOT_CLI","copilot"],["CLINE_WRAPPER_PATH","cline-cli"],["CLINE_CONNECTOR_CLI_LAUNCH","cline-cli"]],BR=[{familyKey:"CURSOR_AGENT",variants:[["CURSOR_WORKSPACE_LABEL","cursor"],["CURSOR_INVOKED_AS","cursor-cli"]]}];var WR=["recall","search","local-run","remote-run","jolli","init","login","logout","status","timeline","push","dashboard"],wj=new Set(WR);function ec(e){return e!==void 0&&e!==""&&e!=="0"&&e.toLowerCase()!=="false"}function tc(e){return Rp(e)?e:void 0}function wg(e=process.env){if(On(e))return;let t,n=r=>t!==void 0&&t!==r?!1:(t=r,!0);for(let[r,o]of UR)if(ec(e[r])&&!n(o))return;for(let r of BR){if(!ec(e[r.familyKey]))continue;let o=new Set(r.variants.filter(([i])=>ec(e[i])).map(([,i])=>i)),[s]=o;if(o.size!==1||s===void 0||!n(s))return}return t}var Eg=require("node:crypto"),rt=require("node:fs"),un=require("node:fs/promises"),nc=require("node:path");w();Q();var Sg="telemetry-queue.ndjson",JR=/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,rc=500,GR=1e6;function Js(e){return(0,nc.join)(B(e),Sg)}function qR(e){return typeof e=="string"&&JR.test(e)}function KR(e){let t=(0,Eg.createHash)("sha256").update(e).digest("hex"),n=(Number.parseInt(t.slice(16,18),16)&63|128).toString(16).padStart(2,"0");return`${t.slice(0,8)}-${t.slice(8,12)}-5${t.slice(13,16)}-${n}${t.slice(18,20)}-${t.slice(20,32)}`}function VR(e,t){if(typeof e!="object"||e===null||Array.isArray(e))return null;let n=e;return qR(n.eventId)?n:{...n,eventId:KR(t)}}function bg(e,t){let n=B(e);(0,rt.mkdirSync)(n,{recursive:!0});let r=(0,nc.join)(n,Sg);(0,rt.appendFileSync)(r,`${JSON.stringify(t)}
`,"utf-8");try{if((0,rt.statSync)(r).size>GR){let o=(0,rt.readFileSync)(r,"utf-8").split(`
`).filter(s=>s.trim().length>0).slice(-rc);(0,rt.writeFileSync)(r,o.length>0?`${o.join(`
`)}
`:"","utf-8")}}catch{}}async function oc(e){let t;try{t=await(0,un.readFile)(Js(e),"utf-8")}catch{return[]}let n=[];for(let r of t.split(`
`)){let o=r.trim();if(o.length!==0)try{let s=VR(JSON.parse(o),o);s&&n.push(s)}catch{}}return n.slice(-rc)}async function Tg(e,t){let n=t.slice(-rc);if(n.length===0){await(0,un.rm)(Js(e),{force:!0});return}await(0,un.mkdir)(B(e),{recursive:!0});let r=`${n.map(o=>JSON.stringify(o)).join(`
`)}
`;await v(Js(e),r)}async function _g(e){await(0,un.rm)(Js(e),{force:!0})}function YR(e){let t=e.DO_NOT_TRACK;if(t===void 0)return!1;let n=t.trim();return n!==""&&n!=="0"}function sc(e){let t=e.env??process.env;return YR(t)?{enabled:!1,reason:"do-not-track"}:e.platformDisabled===!0?{enabled:!1,reason:"platform-off"}:e.config.telemetry==="off"?{enabled:!1,reason:"config-off"}:{enabled:!0,reason:"on"}}function kg(e){return sc(e).enabled}var XR={app_installed:"First run after install; installId minted (once per machine). Props: none \u2014 count distinct install_id.",client_activated:"A GUI surface activated (VS Code activate / IntelliJ project open), carrying `surface_version`. First-seen (install_id, surface_version) \u2248 new + upgrade installs that launched. GUI-only \u2014 CLI new/upgrade is read from any event's surface_version.",surface_enabled:"A surface was enabled in a repo. Props: trigger.",surface_disabled:"A surface was disabled / opted out. Props: trigger, reason.",push_enabled:"Outbound push re-enabled for a repo (spec 306, per-repo push control). Props: trigger.",push_disabled:"Outbound push disabled for a repo (spec 306, per-repo push control). Props: trigger.",signin_started:"User initiated OAuth sign-in. Props: trigger.",signin_completed:"jolliApiKey minted \u2014 the conversion event. Props: api_key_minted.",signed_out:"User logged out. Props: none.",ai_provider_selected:"User chose jolli vs anthropic for LLM. Props: provider (discriminator).",memory_bank_migrated:"Migrate-to-Memory-Bank run. Props: outcome, repos, entries_bucket.",onboarding_progressed:"Per-install onboarding-funnel snapshot, emitted from a repo context and deduped by state tuple (+ daily heartbeat). Content-free \u2014 answers 'after install, where do people stall'. Props: in_git_repo, repo_enabled, capture_configured, capture_method (discriminator: local-agent/anthropic/jolli/none), memories_generated, memories_bucket.",command_invoked:'Any CLI command ran (auto-emitted). Props: command (discriminator), ok, duration_ms; via (discriminator: skill:<name> from a closed skill-name set \u2014 present when a Jolli skill\'s recipe invoked the command; absent means directly typed OR a pre-upgrade skill copy that predates the stamp, so absence is not proof of direct use). MCP tool calls carry a `tool` property and are emitted per call (not per session); the session-level `command:"mcp"` event is suppressed.',recall_performed:"A recall was run. Props: hit, result_count_bucket.",search_performed:"A search was run. Props: query_len_bucket, result_count_bucket.",memory_pushed:"Memories pushed to a Space. Props: kind, created, plans_bucket.",export_performed:"Export run. Props: format (discriminator).",ai_source_detected:"A new AI source transcript was detected. Props: source (discriminator: claude/codex/cursor/\u2026).",settings_opened:"Settings UI opened (vscode/intellij). Props: tab (discriminator).",ingest_completed:"A drainIngest run finished. Props: outcome, ingested, idle (no-op when ingested=0), batches, route_calls, reconcile_calls, touched_slugs, topic_failures, duration_ms. Filter idle=true out for real-ingest latency/health metrics.",error_occurred:"A structured error was raised. Content-free schema: { where (stage/subsystem), code (enumerated), source? , retryable? }. Emitted via trackError(); never carries a message/stack/path.",queue_drained:"QueueWorker finished a drain. Props: ops, duration_ms; trigger (discriminator: agent/ui/terminal/unknown \u2014 who set the drained commits in motion) and agent (which AI host, when trigger=agent) are present only when every drained entry agrees, and omitted for mixed or unstamped drains.",sync_completed:"A memory-bank sync round finished. Props: outcome (discriminator), duration_ms.",toolwindow_opened:"The memory tool window was opened. Props: view.",view_switched:"Tool window view switched (current/bank/knowledge). Props: view (discriminator).",memory_committed:"User committed a memory via the Commit button. Props: files_bucket (bucketed changed-file count), has_conversations (bool), context_bucket (bucketed plans/context count).",memory_expanded:"A committed memory's details were expanded. Props: expanded.",memory_item_opened:"An item inside a memory was opened. Props: item_type (discriminator: conversation/file/plan/note/reference/shipped); render (conversation only: live/stored \u2014 whether the source transcript was reopened or the stored copy was shown); source (conversation only: the transcript source, e.g. claude/codex); status (file only: the git status code, e.g. A/M/D).",session_resumed:"A conversation session was resumed in a terminal. Props: source (discriminator).",recall_prompt_copied:"A recall prompt was copied to the clipboard. Props: none.",memory_ref_id_copied:"A memory reference id (JM-<docId>) was copied to the clipboard. Props: surface_area (discriminator: list/detail \u2014 which UI the chip was clicked in).",memory_pinned:"An item was pinned. Props: kind (discriminator).",memory_unpinned:"An item was unpinned. Props: kind (discriminator).",repo_switched:"User switched the active repo in the tool window's breadcrumb. Props: is_foreign (bool).",branch_switched:"User switched the active branch in the tool window's breadcrumb. Props: is_foreign (bool).",squash_performed:"User squashed commits. Props: count_bucket (bucketed number of commits squashed).",pr_created:"User created or updated a PR from the tool window. Props: action (discriminator: created/updated).",memory_shared:"User invoked Share for a branch's memories (read-only share link). Props: none.",key_rejected:"The server rejected the API key (401/403). Props: retried, where.",reauth_completed:"Re-authentication after a rejected key finished. Props: outcome.",dashboard_opened:"The local web dashboard was opened in a browser (surface web-local). Props: first_run (bool \u2014 first open in this browser profile; per-origin localStorage, so it re-reports across ports, browsers, or a storage clear).",dashboard_view_switched:"The local web dashboard's left-nav view was switched. Props: view (discriminator: stats/standup/repositories/memories). Distinct from view_switched, which is the IDE tool-window event with its own view vocabulary.",range_changed:"The dashboard time-range control was changed. Props: range (discriminator: 7d/30d/90d/custom).",chart_split_changed:"A dashboard card's split-by control was changed. Props: card (discriminator: tokens/mcp), split (discriminator)."};var zR=new Set(Object.keys(XR));function Rg(e){return zR.has(e)}var QR=1,lc=null;function Ag(e){let t=sc({config:e.config,env:e.env,platformDisabled:e.platformDisabled}),{surface:n,surfaceVersion:r}=tv(),o=tc(e.agent);lc={enabled:t.enabled,cwd:e.cwd,installId:e.installId,sessionId:e.sessionId,surface:n,surfaceVersion:r,env:ev(e.origin,e.env),...o?{agent:o}:{}}}function Ig(){return lc}function io(e,t={}){ZR(e,t,void 0)}function ZR(e,t,n){let r=lc;if(!(!r||!r.enabled)&&Rg(e))try{let o=sv(t);delete o.agent;let s=t.agent!==void 0,i=n===void 0?r.agent:void 0,a=s?tc(t.agent):i;a&&(o.agent=a);let l={schemaVersion:QR,eventId:(0,ac.randomUUID)(),eventName:e,surface:n??r.surface,surfaceVersion:r.surfaceVersion,installId:r.installId,...r.sessionId?{sessionId:r.sessionId}:{},os:process.platform,arch:process.arch,runtimeVersion:`node-${process.versions.node}`,env:r.env,tsIso:new Date().toISOString(),accountId:null,properties:o};bg(r.cwd,l)}catch{}}function xg(e){return!Number.isFinite(e)||e<=0?"0":e<=5?"1-5":e<=20?"6-20":e<=100?"21-100":"100+"}function ev(e,t=process.env){if(t.JOLLI_TELEMETRY_ENV==="sandbox")return"sandbox";if(!e)return"unknown";let n;try{n=new URL(e).hostname.toLowerCase()}catch{return"unknown"}let r=o=>n===o||n.endsWith(`.${o}`);return r("jolli-local.me")?"local":r("jolli.dev")?"dev":r("jolli.cloud")?"preview":r("jolli.ai")?"prod":"unknown"}function tv(e=Ht){let t=e.indexOf("/"),n=t===-1?e:e.slice(0,t),r=t===-1?"unknown":e.slice(t+1);return{surface:n==="vscode-plugin"?"vscode":n,surfaceVersion:r||"unknown"}}var nv=new Set(["token","secret","password","passwd","apikey","api_key","jolliapikey","authtoken","auth_token","accesstoken","access_token","refreshtoken","refresh_token","cookie","credential","credentials"]),rv=4,ov=120;function vg(e){return e.length>ov?"[redacted:long]":/\b(?:sk-|ghp_|gho_|ghs_|github_pat_|xox[baprs]-)/.test(e)||e.includes("-----BEGIN")?"[redacted:secret]":/[^\s@]+@[^\s@]+\.[^\s@]+/.test(e)?"[redacted:email]":e.includes("://")?"[redacted:url]":/^~[/\\]/.test(e)||/[A-Za-z0-9._-][/\\][A-Za-z0-9._-]/.test(e)?"[redacted:path]":e}function ic(e,t){if(t>rv)return"[redacted:deep]";if(e===null)return null;if(typeof e=="number")return Number.isFinite(e)?e:null;if(typeof e=="boolean")return e;if(typeof e=="string")return vg(e);if(Array.isArray(e))return e.map(n=>ic(n,t+1)).filter(n=>n!==void 0);if(typeof e=="object"){let n={};for(let[r,o]of Object.entries(e)){if(nv.has(r.toLowerCase()))continue;let s=ic(o,t+1);s!==void 0&&(n[vg(r)]=s)}return n}}function sv(e){return ic(e,0)}var Wj=f("PushControl");tt();w();be();et();cs();wi();var ow=require("node:path");Xs();sr();w();w();var qt=f("DualWriteStorage"),Ao=class{constructor(t,n){this.primary=t;this.shadow=n;this.kind="dual-write"}get kbRoot(){return this.shadow.kbRoot}async readFile(t){return this.primary.readFile(t)}async batchReadFiles(t){if(this.primary.batchReadFiles)return this.primary.batchReadFiles(t);let n=new Map;for(let r of t)n.set(r,await this.primary.readFile(r));return n}async writeFiles(t,n){if(!V()){await this.primary.writeFiles(t,n);try{await this.shadow.writeFiles(t,n),this.shadow.clearDirty?.()}catch(r){qt.warn("Shadow write failed (folder storage): %s",r instanceof Error?r.message:String(r)),this.shadow.markDirty?.(n)}}}async deleteVisibleMarkdown(t){if(!this.shadow.deleteVisibleMarkdown)return!1;try{return await this.shadow.deleteVisibleMarkdown(t)}catch(n){let r=t.commitHash.substring(0,8);return qt.warn("Shadow deleteVisibleMarkdown failed (folder storage) for %s/%s: %s",t.branch,r,R(n)),this.shadow.markDirty?.(`deleteVisibleMarkdown ${t.branch}/${r}`),!1}}async regenerateVisibleMarkdown(t){if(!this.shadow.regenerateVisibleMarkdown)return!1;try{return await this.shadow.regenerateVisibleMarkdown(t)}catch(n){let r=t.commitHash.substring(0,8);return qt.warn("Shadow regenerateVisibleMarkdown failed (folder storage) for %s/%s: %s",t.branch,r,R(n)),this.shadow.markDirty?.(`regenerateVisibleMarkdown ${t.branch}/${r}`),!1}}async deletePlanVisible(t,n){if(this.shadow.deletePlanVisible)try{await this.shadow.deletePlanVisible(t,n)}catch(r){qt.warn("Shadow deletePlanVisible failed (folder storage) for %s on %s: %s",t,n,R(r)),this.shadow.markDirty?.(`deletePlanVisible ${n}/${t}`)}}async deleteNoteVisible(t,n){if(this.shadow.deleteNoteVisible)try{await this.shadow.deleteNoteVisible(t,n)}catch(r){qt.warn("Shadow deleteNoteVisible failed (folder storage) for %s on %s: %s",t,n,R(r)),this.shadow.markDirty?.(`deleteNoteVisible ${n}/${t}`)}}async pruneBranchMappings(t){if(!this.shadow.pruneBranchMappings)return 0;try{return await this.shadow.pruneBranchMappings(t)}catch(n){return qt.warn("Shadow pruneBranchMappings failed (folder storage): %s",R(n)),this.shadow.markDirty?.(`pruneBranchMappings ${t.length}`),0}}async healMissingVisibleMarkdown(t){let n=this.shadow.healMissingVisibleMarkdown?this.shadow:this.primary.healMissingVisibleMarkdown?this.primary:null;if(!n)return{healed:0,skipped:0,failed:0};let r=t?.dropOrphanedManifestEntries??!0,o=n===this.shadow?"shadow":"primary";try{return await n.healMissingVisibleMarkdown?.({dropOrphanedManifestEntries:r})??{healed:0,skipped:0,failed:0}}catch(s){let i=s?.code,a=i?`[${i}] ${R(s)}`:R(s);return qt.warn("%s healMissingVisibleMarkdown failed: %s",o,a),n.markDirty?.("healMissingVisibleMarkdown"),{healed:0,skipped:0,failed:0,error:a}}}async listFiles(t){return this.primary.listFiles(t)}async exists(){return this.primary.exists()}isDirty(){return this.shadow.isDirty?.()??!1}async ensure(){await this.primary.ensure();try{await this.shadow.ensure()}catch(t){qt.warn("Shadow ensure failed: %s",t instanceof Error?t.message:String(t))}}async renderTopicWiki(t){await this.shadow.renderTopicWiki?.(t)}isTopicWikiPresent(){return this.shadow.isTopicWikiPresent?.()??!1}};var O=require("node:fs"),nw=require("node:fs/promises"),L=require("node:path");w();var te=require("node:fs");var We=require("node:path");w();var dI=f("Sync:VaultSymlinkGuard");function uI(e,t){if(!(0,We.isAbsolute)(t))throw new Error(`assertNoSymlinksInPathSync: absTargetPath must be absolute, got ${t}`);if(!(0,We.isAbsolute)(e))throw new Error(`assertNoSymlinksInPathSync: vaultRoot must be absolute, got ${e}`);let n=(0,We.relative)(e,t);if(n===""||n.startsWith("..")||(0,We.isAbsolute)(n))throw new Error(`assertNoSymlinksInPathSync: target ${t} is not inside vault ${e}`);let r=n.split(We.sep),o=e;for(let s=0;s<r.length-1;s++){let i=r[s];if(i===void 0||i.length===0)continue;o=`${o}${We.sep}${i}`;let a;try{a=(0,te.lstatSync)(o)}catch(l){if(l.code==="ENOENT")return;throw l}if(a.isSymbolicLink())throw dI.warn("Refusing vault write \u2014 symlink in path chain: %s",o),new Error(`Refused vault write: path segment is a symlink at ${o} (target ${t}). Inspect and unlink before retrying.`);if(!a.isDirectory())throw new Error(`Refused vault write: path segment is not a directory at ${o} (target ${t}).`)}}function Kc(e,t,n){uI(e,t),(0,te.mkdirSync)((0,We.dirname)(t),{recursive:!0});let r=`${t}.tmp`,o=te.constants.O_WRONLY|te.constants.O_CREAT|te.constants.O_TRUNC|te.constants.O_NOFOLLOW,s=(0,te.openSync)(r,o,420);try{typeof n=="string"?(0,te.writeSync)(s,n,void 0,"utf-8"):(0,te.writeSync)(s,n)}finally{(0,te.closeSync)(s)}(0,te.renameSync)(r,t)}Fs();re();ho();function pI(e){return`skills--${e}`}function bi(e){return`${pI(e)}.md`}function Wy(e){let t=["| Skill | Agent | \xD7 | Tokens | Input | Output | Cached |","|---|---|---|---|---|---|---|"],n=[...e].sort((o,s)=>{let i=Vc(s)-Vc(o);if(i!==0)return i;let a=o.skill<s.skill?-1:o.skill>s.skill?1:0;if(a!==0)return a;let l=o.source??"",c=s.source??"";return l<c?-1:l>c?1:0}),r=!1;for(let o of n){let s=o.detection==="heuristic"?" \u2020":"";s!==""&&(r=!0),t.push(`| ${qy(o.skill)}${s} | ${mI(o)} | ${o.invocationCount} | ${fI(o).join(" | ")} |`)}return r&&t.push("","\u2020 Inferred from a file read rather than an observed invocation: the count is per session, and a human reading the skill file looks the same."),t}function Jy(e){let t=`${e.length} skill${e.length===1?"":"s"}`,n=0,r=!1,o=!1;for(let s of e)s.usage!==void 0&&(r=!0,n+=s.usage.input+s.usage.cached+s.usage.output,s.usage.confidence!=="attributed"&&(o=!0));return r?`${t} \xB7 ${Ky(n,o?"~":"")} tokens`:t}function Gy(e,t){let n=e.commitHash.substring(0,8);return`${["---","type: skill-usage",`commitHash: ${e.commitHash}`,`branch: ${e.branch}`,`generatedAt: ${e.generatedAt}`,"---","",`# Skills used \u2014 ${n}`,"",`_${e.commitMessage}_`,"",...Wy(t),""].join(`
`)}
`}function qy(e){return e.replace(/\\/g,"\\\\").replace(/\|/g,"\\|").replace(/[\r\n]+/g," ")}function Vc(e){let t=e.usage;return t===void 0?0:t.input+t.cached+t.output}function mI(e){let t=e.source;return t===void 0||t===""?"\u2014":qy(xc(t))}function fI(e){let t=e.usage;if(t===void 0)return["\u2014","\u2014","\u2014","\u2014"];let n=t.confidence==="attributed"?"":"~";return[Vc(e),t.input,t.output,t.cached].map(r=>Ky(r,n))}function Ky(e,t){return e<1e3?`${t}${e}`:`${t}${(e/1e3).toFixed(1)}k`}function At(e){return e.replace(/[\\[\]]/g,"\\$&").replace(/[\r\n]+/g," ")}function Vy(e){return e.replace(/[\\[\]~]/g,"\\$&").replace(/[\r\n]+/g," ")}function Ti(e){return e.replace(/[()\s<>"]/g,t=>t==="("?"%28":t===")"?"%29":encodeURIComponent(t))}_c();vc();ws();ho();Jt();var Yy=3/1e6,gI=15/1e6,hI=3.75/1e6;function Io(e){return Math.round(e).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function Xy(e){return e>=.01?`$${e.toFixed(2)}`:e>=5e-5?`$${e.toFixed(4)}`:e>0?"<$0.0001":"$0.00"}function zy(e,t){return e?e.input*Yy+e.output*gI+e.cached*hI:t*Yy}function zc(e){let{topics:t,sourceNodes:n}=Yh(e),r=[];return yI(r,e),bI(r,e,{withRelevance:!0}),wI(r,e),TI(r,e.e2eTestGuide),_I(r,n),RI(r,t,kI),vI(r),r.join(`
`)}function yI(e,t){let n=mo(t),r=n.filesChanged,o=yc(t),s=`${r} file${r!==1?"s":""} changed, +${n.insertions} insertions, \u2212${n.deletions} deletions`,i=Ic(q(t));e.push(`# ${t.commitMessage}`,"",`- **Commit:** \`${t.commitHash}\``,`- **Branch:** \`${t.branch}\``,`- **Author:** ${t.commitAuthor}`,`- **Date:** ${i}`,`- **Duration:** ${Oh(t)}`,`- **Changes:** ${s}`),o>0&&e.push(`- **Conversations:** ${o} turn${o!==1?"s":""}`);let a=wc(t);if(a>0){let c=Ec(t),d=c.input>0||c.output>0||c.cached>0?c:void 0,u=Xy(zy(d,a)),p=d?` (${Io(d.input)} input, ${Io(d.output)} output, ${Io(d.cached)} cached)`:"";e.push(`- **Task usage:** ${Io(a)} tokens \xB7 ${u}${p}`)}let l=t.jolliDocUrl;l&&e.push(`- **Jolli Memory:** [${l}](${l})`),e.push("","---")}function wI(e,t){let n=t.recap?.trim();n&&e.push("","## Quick recap","",n,"","---")}function EI(e){let t=new Map;for(let o of e){let s=t.get(o.source)??[];s.push(o),t.set(o.source,s)}let n=qn().all().map(o=>o.id),r=[];for(let o of n){let s=t.get(o);s&&(r.push(...s),t.delete(o))}for(let o of t.values())r.push(...o);return r}function Yc(e,t,n){return e.get(`${t}:${n}`)??e.get(`${t}:${n.replace($h,"")}`)}var SI={high:"High",mid:"Med",low:"Low"};function Xc(e){return!e||e.reason===""?"":` \u2014 ${SI[e.tier]} \xB7 ${At(e.reason)}`}function bI(e,t,n){let r=t.plans??[],o=t.notes??[],s=n?.includeReferences?t.references??[]:[],i=n?.withRelevance?t.excludedContext??[]:[],a=new Map;if(n?.withRelevance)for(let u of t.contextRelevance??[])a.set(`${u.kind}:${u.key}`,{tier:u.tier,reason:u.reason});let l=t.skills??[],c=r.length+o.length+s.length+(l.length>0?1:0);if(c===0&&i.length===0)return;let d=c>1?` (${c})`:"";e.push("",`## Context${d}`,"");for(let u of r){let p=u.jolliPlanDocUrl,m=Xc(Yc(a,"plan",u.slug));e.push((p?`- [${At(u.title)}](${Ti(p)})`:`- ${At(u.title)}`)+m)}for(let u of o){let p=u.jolliNoteDocUrl,m=Xc(Yc(a,"note",u.id));e.push((p?`- [${At(u.title)}](${Ti(p)})`:`- ${At(u.title)}`)+m)}for(let u of EI(s)){let p=At(Rc(u)),m=u.jolliReferenceDocUrl??u.url,g=Xc(Yc(a,"reference",`${u.source}:${u.nativeId}`));e.push((m?`- [${p}](${Ti(m)})`:`- ${p}`)+g)}if(l.length>0){let u=l.some(p=>p.detection==="heuristic")?" \xB7 some inferred":"";e.push(`- Skills used \u2014 ${At(Jy(l))}${u}`)}for(let u of i)e.push(`- ~~${Vy(u.title)}~~ \u2014 Excluded${u.reason?` \xB7 ${At(u.reason)}`:""}`)}function TI(e,t){if(!(!t||t.length===0)){e.push("",`## E2E Test (${t.length})`);for(let n=0;n<t.length;n++){let r=t[n];e.push("",`### ${n+1}. ${r.title}`),r.preconditions&&e.push("",`**Preconditions:** ${r.preconditions}`),e.push("","**Steps:**");for(let o=0;o<r.steps.length;o++)e.push(`${o+1}. ${r.steps[o]}`);e.push("","**Expected Results:**");for(let o of r.expectedResults)e.push(`- ${o}`)}e.push("","---")}}function _I(e,t){if(!(t.length<=1)){e.push("",`## Source Commits (${t.length})`);for(let n of t){let r=mo(n),o=n.conversationTurns?` \xB7 ${n.conversationTurns} turns`:"";e.push(`- \`${n.commitHash.substring(0,8)}\` ${n.commitMessage}  _(+${r.insertions} \u2212${r.deletions}${o} \xB7 ${qh(q(n))})_`)}e.push("","---")}}function kI(e,t){if(e.push("","**\u26A1 Why This Change**","",t.trigger),e.push("","**\u{1F4A1} Decisions Behind the Code**","",t.decisions),e.push("","**\u2705 What Was Implemented**","",t.response),t.todo&&e.push("","**\u{1F4CB} Future Enhancements**","",t.todo),t.filesAffected&&t.filesAffected.length>0){e.push("","**\u{1F4C1} FILES**");for(let n of t.filesAffected)e.push(`- \`${n}\``)}}function RI(e,t,n,r={singular:"Summary",plural:"Summaries"}){if(t.length!==0){e.push("",`## ${t.length===1?r.singular:r.plural} (${t.length})`);for(let o=0;o<t.length;o++){let s=t[o],i=s.category?` \`${s.category}\``:"";e.push("",`### ${Kh(o)} \xB7 ${s.title}${i}`),n(e,s)}}}function vI(e,t){let n=Ic(new Date().toISOString()),r=t?Vh(t):void 0,o=r?` \xB7 via ${r}`:"";e.push("","---","",`*Generated by Jolli Memory \xB7 ${n}${o}*`)}var Qy="<!-- Generated by Jolli Memory \xB7 do not edit \u2014 regenerated on every merge -->";function Zy(e,t,n,r){let o=[];if(o.push(`# ${e.title}`),o.push(""),o.push(Qy),o.push(""),o.push(`> **Source branches:** ${t.join(", ")}`),o.push(`> **Merged:** ${n}`),o.push(`> **Topic slug:** \`${e.stableSlug}\` (stable across re-merges)`),o.push(""),o.push(e.content.trim()),o.push(""),e.keyDecisions&&e.keyDecisions.length>0){o.push("## Key Decisions"),o.push("");for(let s of e.keyDecisions)o.push(`- ${s}`);o.push("")}if(e.sourceCommits.length>0){o.push("## Source Commits"),o.push("");for(let s of e.sourceCommits){let i=s.substring(0,8),a=r.resolveCommitVisiblePath(i),l=r.resolveCommitMessage(i);a&&l?o.push(`- ${Qc(i,AI(a))} \u2014 ${l}`):l?o.push(`- \`${i}\` \u2014 ${l}`):o.push(`- \`${i}\``)}o.push("")}if(e.relatedBranches&&e.relatedBranches.length>0){o.push("## Related Branches"),o.push("");for(let s of e.relatedBranches){let i=r.resolveBranchFolder(s);i?o.push(`- ${Qc(s,`../${i}/`)}`):o.push(`- \`${s}\``)}o.push("")}return o.join(`
`)}function ew(e){return{title:e.title,stableSlug:e.stableSlug,content:e.content,...e.relatedBranches.length>0&&{relatedBranches:[...e.relatedBranches]},sourceCommits:e.sourceRefs.filter(t=>t.type==="summary").map(t=>t.id)}}function tw(e,t){let n=[];if(n.push(`# ${t.repoName} \xB7 Knowledge Wiki`),n.push(""),n.push(Qy),n.push(""),n.push(`> **${e.length} topics** in the knowledge base`),n.push(""),e.length>0){n.push("## Topics"),n.push("");for(let r of e)n.push(`- ${Qc(r.title,`topic--${r.stableSlug}.md`)}`);n.push("")}return n.join(`
`)}function AI(e){return e.startsWith("./")?e.substring(2):e}function Qc(e,t){let n=e.replace(/[\\[\]]/g,"\\$&"),r=t.replace(/ /g,"%20").replace(/\(/g,"%28").replace(/\)/g,"%29");return`[${n}](${r})`}var C=f("FolderStorage"),_i=class e{constructor(t,n){this.rootPath=t;this.metadataManager=n;this.kind="folder"}get vaultRoot(){return(0,L.dirname)(this.rootPath)}get kbRoot(){return this.rootPath}async readFile(t){let n=(0,L.join)(this.rootPath,".jolli",t);try{return(0,O.readFileSync)(n,"utf-8")}catch(r){let o=r.code;return o==="ENOENT"||o==="ENOTDIR"||C.warn("readFile failed for %s: %s",n,R(r)),null}}async writeFiles(t,n){if(V())return;await this.ensure();let r=0,o=0;for(let s of t)s.delete?this.deleteHiddenFile(s.path)&&o++:(this.writeHiddenFile(s.path,s.content),r++,s.path.startsWith("summaries/")&&s.path.endsWith(".json")&&this.generateSummaryMarkdown(s.content),s.path.startsWith("plans/")&&s.path.endsWith(".md")&&this.generatePlanMarkdown(s.path,s.content,s.branch),s.path.startsWith("notes/")&&s.path.endsWith(".md")&&this.generateNoteMarkdown(s.path,s.content,s.branch));C.info("Wrote %d files, deleted %d (%s)",r,o,n)}async listFiles(t){let n=(0,L.join)(this.rootPath,".jolli",t);if(!(0,O.existsSync)(n))return[];let r=(0,L.join)(this.rootPath,".jolli"),o=[];return this.walkDir(n,r,o),o.sort()}async exists(){return(0,O.existsSync)(this.rootPath)}async ensure(){(0,O.mkdirSync)(this.rootPath,{recursive:!0}),this.metadataManager.ensure()}markDirty(t){let n=(0,L.join)(this.rootPath,".jolli","shadow-status.json"),r={dirty:!0,lastFailedAt:new Date().toISOString(),message:t};try{Kc(this.vaultRoot,n,JSON.stringify(r,null,"	"))}catch(o){C.warn("markDirty suppressed: %s",R(o))}}clearDirty(){let t=(0,L.join)(this.rootPath,".jolli","shadow-status.json");try{(0,O.existsSync)(t)&&(0,O.unlinkSync)(t)}catch{}}isDirty(){let t=(0,L.join)(this.rootPath,".jolli","shadow-status.json");return(0,O.existsSync)(t)}async deleteVisibleMarkdown(t){let n=e.slugify(t.commitMessage),r=t.commitHash.substring(0,8);try{await this.deleteVisibleArtifact(`skill:${t.commitHash}`,t.branch,bi(r))}catch(o){C.warn("Failed to delete skills aggregate for %s: %s",r,String(o))}return this.deleteVisibleArtifact(t.commitHash,t.branch,`${n}-${r}.md`)}async deletePlanVisible(t,n){await this.deleteVisibleArtifact(`plan:${t}`,n,`plan--${t}.md`)}async deleteNoteVisible(t,n){await this.deleteVisibleArtifact(`note:${t}`,n,`note--${t}.md`)}async pruneBranchMappings(t){let n=new Map,r=new Set(t);for(let s of this.metadataManager.listBranchMappings())r.has(s.branch)&&n.set(s.branch,s.folder);let o=this.metadataManager.unregisterBranches(t);return o===0?0:(await Promise.all([...n.values()].map(s=>this.rmdirIfEmpty((0,L.join)(this.rootPath,s)))),o)}async rmdirIfEmpty(t){try{await(0,nw.rmdir)(t)}catch(n){let r=n.code;if(r==="ENOENT"||r==="ENOTEMPTY"||r==="EEXIST")return;C.warn("rmdir(%s) failed (non-fatal): %s",t,R(n))}}resolveBranchForFolder(t){return this.metadataManager.listBranchMappings().find(r=>r.folder===t)?.branch??null}async deleteVisibleArtifact(t,n,r){let o=this.metadataManager.findById(t),s=this.metadataManager.resolveFolderForBranch(n),i=o?.path??`${s}/${r}`,a=(0,L.join)(this.rootPath,i);if(!(0,O.existsSync)(a))return o&&this.metadataManager.removeFromManifest(t),!1;if(o?.fingerprint&&this.isUserEditedOnDisk(a,o.fingerprint))return C.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",i),!1;try{return(0,O.unlinkSync)(a),o&&this.metadataManager.removeFromManifest(t),C.info("Deleted visible MD: %s",i),!0}catch(l){if(l.code==="ENOENT")return o&&this.metadataManager.removeFromManifest(t),!1;throw l}}async forceRegenerateVisibleMarkdown(t){let n=await this.readFile(`summaries/${t.commitHash}.json`);if(!n)return C.warn("forceRegenerateVisibleMarkdown: hidden summaries/%s.json missing \u2014 leaving visible file intact",t.commitHash.substring(0,8)),{ok:!1,reason:"missing"};try{JSON.parse(n)}catch(c){return C.warn("forceRegenerateVisibleMarkdown: malformed summaries/%s.json (%s) \u2014 leaving visible file intact",t.commitHash.substring(0,8),R(c)),{ok:!1,reason:"malformed"}}let r=this.metadataManager.resolveFolderForBranch(t.branch),o=e.slugify(t.commitMessage),s=t.commitHash.substring(0,8),i=`${r}/${o}-${s}.md`,a=(0,L.join)(this.rootPath,i);if((0,O.existsSync)(a))try{(0,O.unlinkSync)(a)}catch(c){return C.warn("forceRegenerateVisibleMarkdown: cannot unlink %s [%s]",i,String(c)),{ok:!1,reason:"unlinkFailed"}}return await this.regenerateVisibleMarkdown(t)?{ok:!0}:{ok:!1,reason:"missing"}}async regenerateVisibleMarkdown(t){let n=this.metadataManager.resolveFolderForBranch(t.branch),r=e.slugify(t.commitMessage),o=t.commitHash.substring(0,8),s=`${n}/${r}-${o}.md`,i=(0,L.join)(this.rootPath,s);if((0,O.existsSync)(i))return await this.healSkillsAggregate(t,n,o),!0;let a=await this.readFile(`summaries/${t.commitHash}.json`);if(!a)return C.warn("regenerateVisibleMarkdown: hidden summaries/%s.json missing",t.commitHash.substring(0,8)),!1;let l;try{l=JSON.parse(a)}catch(g){return C.warn("regenerateVisibleMarkdown: malformed summaries/%s.json \u2014 %s",t.commitHash.substring(0,8),R(g)),!1}let c=this.buildYamlFrontmatter(l),d=zc(l),u=`${c}
${d}`;this.atomicWrite(i,u);let p=this.metadataManager.findById(t.commitHash),m=he.sha256(u);return this.metadataManager.updateManifest({path:s,fileId:l.commitHash,type:"commit",fingerprint:m,source:{commitHash:l.commitHash,branch:l.branch,generatedAt:l.generatedAt},title:p?.title??l.commitMessage}),this.generateSkillsAggregate(l,n,o),C.info("Regenerated visible MD: %s",s),!0}async healMissingVisibleMarkdown(t){let r=this.metadataManager.readManifest().files.filter(c=>c.type==="commit"),o=0,s=0,i=0,a=[];for(let c of r){let d=(0,L.join)(this.rootPath,c.path);if((0,O.existsSync)(d)){s++;continue}let u=(0,L.join)(this.rootPath,".jolli","summaries",`${c.fileId}.json`),p;try{p=(0,O.readFileSync)(u,"utf-8")}catch(b){let I=b.code;if(I==="ENOENT"){i++,t?.dropOrphanedManifestEntries?(a.push(c.fileId),C.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 will drop manifest entry",c.fileId.substring(0,8))):C.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 keeping manifest entry (no truth source to repopulate)",c.fileId.substring(0,8));continue}i++,C.warn("healMissingVisibleMarkdown: hidden JSON read failed for %s [%s]: %s \u2014 keeping manifest entry",c.fileId.substring(0,8),I??"?",R(b));continue}let m;try{m=JSON.parse(p)}catch(b){i++,C.warn("healMissingVisibleMarkdown: malformed hidden JSON for %s: %s",c.fileId.substring(0,8),R(b));continue}let g=this.metadataManager.resolveFolderForBranch(m.branch),h=e.slugify(m.commitMessage),E=m.commitHash.substring(0,8),S=`${g}/${h}-${E}.md`;if(S!==c.path){s++,C.warn("healMissingVisibleMarkdown: manifest path drift for %s \u2014 manifest=%s computed=%s \u2014 keeping manifest entry, run reconcile",c.fileId.substring(0,8),c.path,S);continue}let k={commitHash:m.commitHash,parentCommitHash:null,commitMessage:m.commitMessage,commitDate:m.commitDate,branch:m.branch,generatedAt:m.generatedAt};try{await this.regenerateVisibleMarkdown(k)?o++:(i++,C.warn("healMissingVisibleMarkdown: regenerate returned false for %s \u2014 retry on next pass",c.fileId.substring(0,8)))}catch(b){i++,C.warn("healMissingVisibleMarkdown: regenerate failed for %s: %s",c.fileId.substring(0,8),R(b))}}let l=a.length>0?this.dropManifestEntries(a):[];return(o>0||i>0)&&C.info("healMissingVisibleMarkdown: healed=%d skipped=%d failed=%d dropped=%d",o,s,i,l.length),l.length>0?{healed:o,skipped:s,failed:i,droppedIds:l}:{healed:o,skipped:s,failed:i}}dropManifestEntries(t){if(t.length===0)return[];let n=new Set(t),r=this.metadataManager.readManifest(),o=r.files.filter(i=>n.has(i.fileId)).map(i=>i.fileId);if(o.length===0)return[];let s=r.files.filter(i=>!n.has(i.fileId));return this.metadataManager.replaceFiles(s),o}isUserEditedOnDisk(t,n){if(!(0,O.existsSync)(t)||!n)return!1;let r;try{r=he.sha256((0,O.readFileSync)(t,"utf-8"))}catch(o){return C.warn("isUserEditedOnDisk: cannot read %s [%s] \u2014 treating as edited",t,String(o)),!0}return r!==n}generateSummaryMarkdown(t){let n;try{n=JSON.parse(t)}catch{return}let r=this.metadataManager.resolveFolderForBranch(n.branch),o=e.slugify(n.commitMessage),s=n.commitHash.substring(0,8),i=`${o}-${s}.md`,a=`${r}/${i}`,l=this.buildYamlFrontmatter(n),c=zc(n),d=`${l}
${c}`,u=(0,L.join)(this.rootPath,a),p=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,p?.fingerprint)){C.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,d);let m=he.sha256(d);this.metadataManager.updateManifest({path:a,fileId:n.commitHash,type:"commit",fingerprint:m,source:{commitHash:n.commitHash,branch:n.branch,generatedAt:n.generatedAt},title:n.commitMessage}),C.info("Markdown generated: %s",a),this.generateSkillsAggregate(n,r,s),n.children&&n.children.length>0&&this.cleanupSupersededDescendants(n.children,a)}async healSkillsAggregate(t,n,r){if((0,O.existsSync)((0,L.join)(this.rootPath,n,bi(r))))return;let o=await this.readFile(`summaries/${t.commitHash}.json`);if(o)try{this.generateSkillsAggregate(JSON.parse(o),n,r)}catch{}}generateSkillsAggregate(t,n,r){let o=t.skills;if(o===void 0||o.length===0)return;let s=`${n}/${bi(r)}`,i=(0,L.join)(this.rootPath,s),a=this.metadataManager.findByPath(s);if(this.isUserEditedOnDisk(i,a?.fingerprint)){C.info("FolderStorage: skip overwrite of user-edited %s",s);return}let l=Gy(t,o);this.atomicWrite(i,l),this.metadataManager.updateManifest({path:s,fileId:`skill:${t.commitHash}`,type:"skill",fingerprint:he.sha256(l),source:{commitHash:t.commitHash,branch:t.branch,generatedAt:t.generatedAt},title:`Skills used \u2014 ${r}`}),C.info("Skills aggregate generated: %s",s)}cleanupSupersededDescendants(t,n){let r=[];e.collectDescendantHashes(t,r);for(let o of r){let s=this.metadataManager.findById(o);if(!s||s.type!=="commit"||s.path===n)continue;let i=(0,L.join)(this.rootPath,s.path);if(!(0,O.existsSync)(i)){this.metadataManager.removeFromManifest(o);continue}if(!s.fingerprint){C.warn("Skipping cleanup of %s \u2014 legacy entry has no fingerprint baseline",s.path);continue}if(this.isUserEditedOnDisk(i,s.fingerprint)){C.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",s.path);continue}try{(0,O.unlinkSync)(i),this.metadataManager.removeFromManifest(o),C.info("Cleaned up superseded MD: %s",s.path)}catch(a){C.warn("Failed to delete superseded MD %s: %s",s.path,String(a))}}}static collectDescendantHashes(t,n){for(let r of t)n.push(r.commitHash),r.children&&r.children.length>0&&e.collectDescendantHashes(r.children,n)}buildYamlFrontmatter(t){let n=["---"];return n.push(`commitHash: ${t.commitHash}`),n.push(`branch: ${t.branch}`),n.push(`author: ${t.commitAuthor}`),n.push(`date: ${t.commitDate}`),n.push("type: commit"),t.commitType&&n.push(`commitType: ${t.commitType}`),t.stats&&(n.push(`filesChanged: ${t.stats.filesChanged}`),n.push(`insertions: ${t.stats.insertions}`),n.push(`deletions: ${t.stats.deletions}`)),n.push("---"),n.join(`
`)}async regenerateVisiblePlan(t,n){let r=await this.readFile(`plans/${t}.md`);if(!r)return C.warn("regenerateVisiblePlan: hidden plans/%s.md missing",t),!1;let o=this.metadataManager.resolveFolderForBranch(n),s=(0,L.join)(this.rootPath,o,`plan--${t}.md`);if((0,O.existsSync)(s))try{(0,O.unlinkSync)(s)}catch(i){return C.warn("regenerateVisiblePlan: cannot unlink %s [%s]",s,String(i)),!1}return this.generatePlanMarkdown(`plans/${t}.md`,r,n),!0}generatePlanMarkdown(t,n,r){let o=t.replace(/^plans\//,"").replace(/\.md$/,""),s=r?this.metadataManager.resolveFolderForBranch(r):this.resolveBranchFromSlug(o),i=`plan--${o}.md`,a=`${s}/${i}`,c=`${["---","type: plan",`slug: ${o}`,"---"].join(`
`)}

${n}`,d=(0,L.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){C.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let p=he.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`plan:${o}`,type:"plan",fingerprint:p,updatedAt:new Date().toISOString(),source:r?{branch:r}:{},title:this.extractTitle(n)??o}),C.info("Plan markdown generated: %s",a)}async regenerateVisibleNote(t,n){let r=await this.readFile(`notes/${t}.md`);if(!r)return C.warn("regenerateVisibleNote: hidden notes/%s.md missing",t),!1;let o=this.metadataManager.resolveFolderForBranch(n),s=(0,L.join)(this.rootPath,o,`note--${t}.md`);if((0,O.existsSync)(s))try{(0,O.unlinkSync)(s)}catch(i){return C.warn("regenerateVisibleNote: cannot unlink %s [%s]",s,String(i)),!1}return this.generateNoteMarkdown(`notes/${t}.md`,r,n),!0}generateNoteMarkdown(t,n,r){let o=t.replace(/^notes\//,"").replace(/\.md$/,""),s=r?this.metadataManager.resolveFolderForBranch(r):this.resolveBranchFromSlug(o),i=`note--${o}.md`,a=`${s}/${i}`,c=`${["---","type: note",`id: ${o}`,"---"].join(`
`)}

${n}`,d=(0,L.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){C.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let p=he.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`note:${o}`,type:"note",fingerprint:p,source:r?{branch:r}:{},title:this.extractTitle(n)??o,updatedAt:new Date().toISOString()}),C.info("Note markdown generated: %s",a)}resolveBranchFromSlug(t){let n=t.split("-").at(-1);if(n.length>=7){let o=this.metadataManager.readManifest().files.find(i=>i.type==="commit"&&i.source?.commitHash?.startsWith(n));if(o?.source?.branch)return this.metadataManager.resolveFolderForBranch(o.source.branch);let s=(0,L.join)(this.rootPath,".jolli","index.json");if((0,O.existsSync)(s))try{let a=JSON.parse((0,O.readFileSync)(s,"utf-8")).entries.find(l=>l.commitHash.startsWith(n));if(a?.branch)return this.metadataManager.resolveFolderForBranch(a.branch)}catch{}}return"_shared"}extractTitle(t){let n=t.match(/^#\s+(.+)/m);return n?n[1].trim():null}writeHiddenFile(t,n){let r=(0,L.join)(this.rootPath,".jolli",t);this.atomicWrite(r,n)}deleteHiddenFile(t){let n=(0,L.join)(this.rootPath,".jolli",t);if(!(0,O.existsSync)(n))return!1;try{return(0,O.unlinkSync)(n),!0}catch{return!1}}walkDir(t,n,r){for(let o of(0,O.readdirSync)(t,{withFileTypes:!0})){let s=(0,L.join)(t,o.name);o.isDirectory()?this.walkDir(s,n,r):r.push(ke((0,L.relative)(n,s)))}}async renderTopicWiki(t){let n=(0,L.join)(this.rootPath,"_wiki");this.wipeWikiArtifacts(n);let r=this.buildWikiRenderContext();(0,O.mkdirSync)(n,{recursive:!0});let o=[];for(let s of t)try{let i=ew(s);o.push(i);let a=`_wiki/topic--${i.stableSlug}.md`,l=Zy(i,s.relatedBranches,s.lastUpdatedAt,r);this.atomicWrite((0,L.join)(this.rootPath,a),l),this.metadataManager.updateManifest({path:a,fileId:`wiki-topic-${i.stableSlug}`,type:"wiki",fingerprint:he.sha256(l),source:{generatedAt:s.lastUpdatedAt},title:i.title})}catch(i){C.warn("renderTopicWiki: failed to render topic %s: %s",s.stableSlug,R(i))}try{let s=tw(o,r),i="_wiki/_index.md";this.atomicWrite((0,L.join)(this.rootPath,i),s),this.metadataManager.updateManifest({path:i,fileId:"wiki-index",type:"wiki",fingerprint:he.sha256(s),source:{generatedAt:new Date().toISOString()},title:`${r.repoName} Knowledge Wiki`})}catch(s){C.warn("renderTopicWiki: failed to render index: %s",R(s))}C.info("Topic-KB wiki regenerated: %d topics under %s",t.length,n)}isTopicWikiPresent(){return(0,O.existsSync)((0,L.join)(this.rootPath,"_wiki","_index.md"))}wipeWikiArtifacts(t){if(this.metadataManager.unregisterFilesByType("wiki"),!!(0,O.existsSync)(t))try{for(let n of(0,O.readdirSync)(t))if(n.endsWith(".md"))try{(0,O.unlinkSync)((0,L.join)(t,n))}catch(r){C.warn("FolderStorage.wipeWikiArtifacts: failed to unlink %s: %s",n,R(r))}}catch(n){C.warn("FolderStorage.wipeWikiArtifacts: failed to list %s: %s",t,R(n))}}buildWikiRenderContext(){let t=this.metadataManager.readConfig(),n=this.metadataManager.listBranchMappings(),r=new Map(n.map(i=>[i.branch,i.folder])),o=this.metadataManager.readManifest(),s=new Map;for(let i of o.files)i.type==="commit"&&i.source.commitHash&&s.set(i.source.commitHash.substring(0,8),i);return{repoName:t.repoName??"Memory Bank",resolveCommitVisiblePath:i=>{let a=s.get(i);return a?`../${a.path}`:null},resolveBranchFolder:i=>r.get(i)??null,resolveCommitMessage:i=>s.get(i)?.title??null}}atomicWrite(t,n){Kc(this.vaultRoot,t,n)}static slugify(t){let n=t.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"");return n.length>50&&(n=n.substring(0,50).replace(/-+$/,"")),n||"untitled"}};oo();Fs();Qs();me();hi();var ki=f("StorageFactory");async function Zc(e,t){let n;try{n=await se()}catch(a){ki.warn("Failed to load config, falling back to defaults: %s",a.message),n={}}n.storageMode!==void 0&&ki.info("ignoring retired storageMode=%s \u2014 routing is decided by the cutover state",n.storageMode);let r=n.localFolder,o=await uo(e);if(ki.info("StorageFactory.create: route=%s, projectPath=%s",o.state,e),o.state==="blocked")throw new Error(`storage unavailable: ${o.reason} \u2014 this repo's orphan branch is frozen (cutover), so writes cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);if(o.state==="legacy-fenced"||o.state==="cutover"){let{identity:a}=await mn(e),l=new Gt(a);return ql(e,r)?new Ao(l,rw(e,r)):l}if(!ql(e,r))return ki.warn("Not a claimable project (no git worktree, or inside the Memory Bank folder): %s \u2014 using orphan-only storage",e),new kt(t);let s=new kt(t),i=rw(e,r);return new Ao(s,i)}function rw(e,t){let n=Yf(e),r=Qf(e),o=Vf(n,r,t),s=new he((0,ow.join)(o,".jolli"));return new _i(o,s)}st();Jt();Cc();var Oe=f("SchemaV5Migration"),iw="schema-v5-migration.json",sw=3e4;async function ed(e,t){let r=await(t??await Zc(e??process.cwd(),e)).readFile(iw);if(!r)return null;try{return JSON.parse(r)}catch(o){return Oe.warn("Failed to parse v5 migration state \u2014 treating as absent: %s",o.message),null}}async function II(e,t,n){if(Wn(e))return await n();if(!await Mr(e,{timeoutMs:sw}))throw new Error(`${t}: could not acquire orphan-write lock within ${sw}ms`);try{return await Jn(e,n)}finally{await $r(e)}}async function aw(e){let t=await Zc(e??process.cwd(),e),n=await ed(e,t);return n?.status==="completed"?(Oe.info("Schema v5 migration already completed at %s \u2014 skipping",n.completedAt),{migrated:n.migratedCount,skipped:n.skippedCount,fresh:n.fresh,alreadyDone:!0}):await t.exists()?II(e,"migrateSchemaToV5",()=>CI(e,t)):(Oe.info("Storage backend not initialized yet \u2014 skipping schema v5 migration (no data to migrate)"),{migrated:0,skipped:0,fresh:!0,alreadyDone:!1})}async function xI(e,t){if(t.length===0)return new Map;if(e.batchReadFiles)return e.batchReadFiles(t);let n=new Map;for(let r of t)n.set(r,await e.readFile(r));return n}async function CI(e,t){let n=await ed(e,t);if(n?.status==="completed")return Oe.info("Schema v5 migration completed by a concurrent run at %s \u2014 skipping",n.completedAt),{migrated:n.migratedCount,skipped:n.skippedCount,fresh:n.fresh,alreadyDone:!0};let r=new Date().toISOString(),o=await yi(e),s=o.ok&&o.state==="uncutover"?await Y(["rev-parse",`refs/heads/${He}`],e).then($=>$.stdout.trim()).catch(()=>null):null,i=await t.listFiles("summaries/");Oe.info("Found %d summary files to inspect",i.length);let a=await t.listFiles("transcripts/"),l=new Set;for(let $ of a){let Ee=oi($);Ee&&l.add(Ee)}Oe.info("Reading %d summaries...",i.length);let c=Date.now(),d=await xI(t,i);Oe.info("Read %d summaries in %d ms",d.size,Date.now()-c);let u=[],p=[],m=0,g=0;for(let $ of i){let Ee=d.get($);if(Ee===void 0)throw new Error(`readSummaries omitted ${$} \u2014 protocol contract violation (expected one entry per request)`);if(Ee===null){g++;continue}let Fe;try{Fe=JSON.parse(Ee)}catch(zt){Oe.warn("Skipping unparseable summary %s: %s",$,zt.message),g++;continue}let je=NI(Fe,l),Pt=JSON.stringify(je,null,"	");if(p.push({path:$,content:Pt}),je===Fe){g++;continue}u.push({path:$,content:Pt}),m++}let h=i.length===0,E=m===0&&g>0,S=E?p:u,k=h?"Schema v5 migration: no pre-v5 data found":E?`Schema v5 migration: re-pushing ${g} v5 summaries to heal storage shadow`:`Schema v5 migration: ${m} upgraded, ${g} skipped`,b=Date.now();if(S.length>0&&(Oe.info("Writing %d summary file(s) via active storage...",S.length),await t.writeFiles(S,k)),t.isDirty?.()??!1)return Oe.warn("Schema v5 migration: storage shadow write failed (folder marked dirty) \u2014 leaving state PENDING; next startup will retry and re-push (migrated=%d, skipped=%d, took %d ms)",m,g,Date.now()-b),{migrated:m,skipped:g,fresh:h,alreadyDone:!1};let P={version:1,status:"completed",startedAt:r,completedAt:new Date().toISOString(),migratedCount:m,skippedCount:g,fresh:h};return await t.writeFiles([{path:iw,content:JSON.stringify(P,null,"	")}],k),Oe.info("Schema v5 migration complete: %d migrated, %d skipped, fresh=%s, recovery=%s (took %d ms)",m,g,h,E,Date.now()-b),s&&Oe.info("Pre-migration orphan-branch SHA was %s (debug-only recovery anchor)",s),{migrated:m,skipped:g,fresh:h,alreadyDone:!1}}function NI(e,t){if(e.version>=5&&e.transcripts!==void 0)return e;let n=Lc(e);if(n.transcripts!==void 0)return{...n,version:5};let o=fo(n).filter(i=>t.has(i));return{...n,version:5,transcripts:o}}me();st();w();var Sn=require("node:fs/promises"),lS=require("node:os"),$o=require("node:path");Q();w();var rS=require("node:crypto"),ur=require("node:fs"),Td=require("node:fs/promises"),Hi=require("node:os"),It=require("node:path");w();var cw=require("node:fs"),vi=require("node:fs/promises"),dw=require("node:os"),En=require("node:path"),uw=require("node:url");Q();w();var PI=/^[a-z0-9][a-z0-9-]*$/;function xo(e){return PI.test(e)}var Ri=f("DistPathWriter");async function Co(e,t,n,r){if(!xo(e))return Ri.warn("Refusing to write dist-paths entry for unsafe source tag: %s",JSON.stringify(e)),!1;let o=t??(0,En.dirname)((0,uw.fileURLToPath)(__jmImportMetaUrl)),s=n??"0.99.16",i=(0,En.join)(r??(0,En.join)((0,dw.homedir)(),".jolli","jollimemory"),"dist-paths"),a=(0,En.join)(i,e);try{await(0,vi.mkdir)(i,{recursive:!0});let l=`${s}
${o}`,c;try{c=await(0,vi.readFile)(a,"utf-8")}catch{}if(c){let[d,u]=c.split(`
`);if(!!(d&&u&&lw(u))&&!lw(o))return Ri.info("Kept complete dist-paths/%s (version=%s) \u2014 candidate dist is incomplete: %s",e,d,o),!0}return c!==l&&await v(a,l),Ri.info("Wrote dist-paths/%s (version=%s, distDir=%s)",e,s,o),!0}catch(l){return Ri.warn("Failed to write dist-paths/%s: %s",e,l.message),!1}}var OI=["Cli.js","StopHook.js","SessionStartHook.js","PostCommitHook.js","PostRewriteHook.js","PrepareMsgHook.js","PostMergeHook.js","PrePushHook.js","QueueWorker.js","PrePushWorker.js","HermesStopHook.js","HermesDiscoveryWorker.js"];function lw(e){return OI.every(t=>(0,cw.existsSync)((0,En.join)(e,t)))}var dr=xr(nS(),1);function ji(e,t){if(e.includes("-")||e.includes("+")||t.includes("-")||t.includes("+")){let i=c=>{let d=(0,dr.valid)(c);return d||(/^\d+(\.\d+)*$/.test(c)?(0,dr.coerce)(c)?.version??null:null)},a=i(e),l=i(t);if(a&&l)return(0,dr.compare)(a,l);if(a)return 1;if(l)return-1}let n=/^\d+(\.\d+)*$/.test(e),r=/^\d+(\.\d+)*$/.test(t);if(!n&&!r)return 0;if(!n)return-1;if(!r)return 1;let o=e.split(".").map(Number),s=t.split(".").map(Number);for(let i=0;i<Math.max(o.length,s.length);i++){let a=(o[i]??0)-(s[i]??0);if(a!==0)return a}return 0}var bd=f("DistPathResolver"),jN=[[".cursor/","cursor"],[".windsurf/","windsurf"],[".antigravity/","antigravity"],[".vscode-oss/","vscodium"],[".positron/","positron"],[".trae/","trae"],[".vscode/","vscode"]];function _d(e){let t=e.replace(/\\/g,"/");for(let[r,o]of jN)if(t.includes(r))return o;let n=t.match(/\/\.([a-z][a-z0-9-]*)\/extensions\//i);return n?.[1]?n[1].toLowerCase():(0,rS.createHash)("sha256").update(e).digest("hex").slice(0,8)}function oS(e){try{let n=(0,ur.readFileSync)(e,"utf-8").trim().split(`
`).map(s=>s.trim());if(n.length<2)return null;let r=n[0],o=n[n.length-1];if(!o)return null;if(r.startsWith("source=")){let s=r.slice(7),i=s.indexOf("@");return i===-1?{source:s,version:"unknown",distDir:o}:{source:s.slice(0,i),version:s.slice(i+1),distDir:o}}return{source:"",version:r,distDir:o}}catch{return null}}function Mo(e){let t=(0,It.join)(e??(0,It.join)((0,Hi.homedir)(),".jolli","jollimemory"),"dist-paths"),n;try{n=(0,ur.readdirSync)(t).sort()}catch{return[]}let r=[];for(let o of n){let s=(0,It.join)(t,o),i=oS(s);i&&r.push({source:o,version:i.version,distDir:i.distDir,available:(0,ur.existsSync)(i.distDir)})}return r}async function sS(e){let t=(0,It.join)(e??(0,It.join)((0,Hi.homedir)(),".jolli","jollimemory"),"dist-paths"),n=[];for(let r of Mo(e))if(!r.available)try{await(0,Td.unlink)((0,It.join)(t,r.source)),n.push(r.source),bd.info("Pruned stale dist-paths/%s (dir gone: %s)",r.source,r.distDir)}catch(o){bd.warn("Failed to prune stale dist-paths/%s: %s",r.source,o.message)}return n}var kd=["cli","vscode","cursor"];function Ui(e){let t=e.filter(o=>o.available);if(t.length===0)return;let n=t[0];for(let o=1;o<t.length;o++)ji(t[o].version,n.version)>0&&(n=t[o]);let r=t.filter(o=>ji(o.version,n.version)===0);for(let o of kd){let s=r.find(i=>i.source===o);if(s)return s}return n}async function iS(){let e=(0,It.join)((0,Hi.homedir)(),".jolli","jollimemory"),t=(0,It.join)(e,"dist-path"),n=oS(t);if(!n)return!1;let r;if(n.source==="cli")r="cli";else{let o=_d(n.distDir);r=/^[a-f0-9]{8}$/.test(o)?"vscode":o}return r==="vscode-extension"&&(r="vscode"),await Co(r,n.distDir,n.version),await(0,Td.unlink)(t).catch(()=>{}),bd.info("Migrated legacy dist-path -> dist-paths/%s (version=%s, distDir=%s)",r,n.version,n.distDir),!0}var aS=f("DispatchScripts"),HN=`#!/bin/bash
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
  for pref in ${kd.join(" ")}; do
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
`,UN=`#!/bin/bash
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
  hermes-stop)        SCRIPT="HermesStopHook.js" ;;
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
`,BN=`#!/bin/bash
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
`;async function Rd(e,t){let n=!1;try{n=await(0,Sn.readFile)(e,"utf-8")===t}catch{}if(n){await(0,Sn.chmod)(e,493);return}await v(e,t),await(0,Sn.chmod)(e,493)}async function vd(){let e=(0,$o.join)((0,lS.homedir)(),".jolli","jollimemory");try{return await(0,Sn.mkdir)(e,{recursive:!0}),await Rd((0,$o.join)(e,"resolve-dist-path"),HN),await Rd((0,$o.join)(e,"run-hook"),UN),await Rd((0,$o.join)(e,"run-cli"),BN),aS.info("Wrote resolve-dist-path, run-hook, and run-cli scripts to %s",e),!0}catch(t){return aS.warn("Failed to write resolve scripts: %s",t.message),!1}}var Fo=require("node:fs/promises"),Bi=require("node:path");Q();w();vs();var cS=f("GeminiHookInstaller");async function Ad(e){let t=(0,Bi.join)(e,".gemini"),n=(0,Bi.join)(t,"settings.json"),r=Ue("gemini-after-agent"),o={},s;try{s=await(0,Fo.readFile)(n,"utf-8"),o=JSON.parse(s)}catch(d){if(d.code!=="ENOENT")throw d}let i=o.hooks??{},a=i.AfterAgent??[],l=on(a,ks);l.push({hooks:[{type:"command",command:r,name:"jolli-session-tracker"}]}),i.AfterAgent=l,o.hooks=i;let c=JSON.stringify(o,null,"	");return s===c?{path:n}:(await(0,Fo.mkdir)(t,{recursive:!0}),await v(n,c),cS.info("Gemini AfterAgent hook installed"),{path:n})}async function Id(e){let t=(0,Bi.join)(e,".gemini","settings.json"),n;try{let i=await(0,Fo.readFile)(t,"utf-8");n=JSON.parse(i)}catch{return}let r=n.hooks;if(!r)return;let o=r.AfterAgent??[];if(!Kr(o,ks))return;let s=on(o,ks);s.length===0?delete r.AfterAgent:r.AfterAgent=s,Object.keys(r).length===0?delete n.hooks:n.hooks=r,await v(t,JSON.stringify(n,null,"	")),cS.info("Gemini AfterAgent hook removed")}Hd();var Yt=require("node:fs/promises"),Ud=require("node:os"),Wo=require("node:path");w();var gr=f("GlobalInstructionsInstaller"),Bd="<!-- >>> jolli memory instructions >>> -->",Wd="<!-- <<< jolli memory instructions <<< -->",yS="## Jolli Memory",wS=[{host:"claude",relPath:[".claude","CLAUDE.md"]},{host:"gemini",relPath:[".gemini","GEMINI.md"]},{host:"codex",relPath:[".codex","AGENTS.md"]}];function WN(){return`${[Bd,yS,"","This repository may have **Jolli Memory** enabled \u2014 a durable record of past","development the current code cannot show: why choices were made, how a topic was","handled before, what was already tried, and where work stopped. Treat it as a","first-class source and reach for it **proactively \u2014 before answering or guessing,","and even when the user never names Jolli** \u2014 whenever a request is memory-shaped","(about intent, history, or prior work). Its reads are read-only and cheap, so","lean toward consulting memory rather than guessing: a hit often changes the","answer, and a miss costs little.","","Two capabilities are available; invoke whichever recall / search skill or tool is","registered in this session \u2014 the exact name varies by host (a plugin skill, a","project skill, or e.g. an `mcp__jollimemory__*` MCP tool), so route by intent, not","by a fixed name:","","- **Recall** \u2014 deep context for one branch (the current branch by default): its","  decisions, a recap, and where work left off.","- **Search** \u2014 full-text lookup across *all* branches: decisions, topics, files.","","Consult memory FIRST, before answering from your own assumptions, when the request","is memory-shaped:","",'- **Why / intent** \u2014 "why is this like this", "why X and not Y", "what was the','  reasoning", or anything where the code shows *what* but not *why*. \u2192 Search (or',"  Recall when it's about the current branch).",'- **How it works / design** \u2014 "how does X work", "how is X built/designed", "how','  would I implement X", or walking through / extending an existing feature or',"  subsystem in this repo. The code shows the mechanism; memory holds why it is","  shaped that way and what was already tried. \u2192 Search (or Recall for the current","  branch). A quick lookup here is cheap and often surfaces rationale and pitfalls",`  the code comments don't \u2014 so search even though the ask starts with "how".`,'- **Prior art** \u2014 "have we done/hit this before", "how was <topic> handled", "is','  there a pattern for this", "where else do we do X", or a bug that may have been',"  seen before. \u2192 Search (decisions / topics / files across ALL branches).",`- **Resume** \u2014 "where were we", "pick up where I left off", "what's left on this`,'  branch", or returning to work after a break. \u2192 Recall (current-branch decisions',"  + recap + where work stopped).","- **Before non-trivial edits** \u2014 before refactoring, changing, or deleting code","  whose intent isn't obvious from the code itself, search memory first; a past","  decision may constrain the change, and skipping this risks re-breaking what a","  prior fix already addressed.","",'Routing: current-branch history or resume \u2192 Recall; cross-branch or "has this','come up before" \u2192 Search. When unsure whether memory helps, run a quick search',"first before answering from your own assumptions.","","Do NOT reach for memory on narrow, current-state facts you can read straight from","the code \u2014 one function's behavior, a type or signature, running a command, a","rename, formatting, or a literal text lookup \u2014 answer those from the code directly.","That exclusion is for single-symbol lookups only; do not let it swallow a",'whole-feature "how does it work / how is it designed" question \u2014 that is',"design-shaped, so search memory first (per the How it works / design rule above).","","Treat any concrete fact memory states as of-its-time: use it for why / intent /","prior context, but verify names, paths, and code shape against the current code","before relying on them. If no Jolli memory capability is registered here (Jolli","Memory not enabled in this repo), fall back to normal behavior.",Wd].join(`
`)}
`}function ES(e){return e==="enabled"?{write:!0}:e==="disabled"?{write:!1,remove:!0}:{write:!1}}function JN(e,t){let n=e.split(`
`),r=n.indexOf(Bd),o=n.indexOf(Wd),s=t.slice(0,-1).split(`
`);if(r!==-1&&o!==-1&&o>r)return[...n.slice(0,r),...s,...n.slice(o+1)].join(`
`);let i=n.indexOf(yS);if(i!==-1){let l=n.length;for(let u=i+1;u<n.length;u++)if(/^#{1,2} /.test(n[u])){l=u;break}let c=n.slice(0,i).join(`
`),d=n.slice(l).join(`
`);return`${c.length>0?`${c}
`:""}${t}${d}`}if(e.length===0)return t;let a=e.endsWith(`
`)?"":`
`;return`${e}${a}${t}`}async function GN(e,t){let n="";try{n=await(0,Yt.readFile)(e,"utf-8")}catch(o){if(o.code!=="ENOENT"){gr.warn("Failed to read %s: %s \u2014 skipping",e,o.message);return}}let r=JN(n,t);if(r!==n)try{await(0,Yt.mkdir)((0,Wo.dirname)(e),{recursive:!0}),await(0,Yt.writeFile)(e,r,"utf-8"),gr.info("Updated %s with Jolli Memory instructions",e)}catch(o){gr.warn("Failed to write %s: %s",e,o.message)}}async function SS(e){let t=WN(),n=(0,Ud.homedir)();for(let r of wS)e[r.host]&&await GN((0,Wo.join)(n,...r.relPath),t)}function qN(e){let t=e.split(`
`),n=t.indexOf(Bd),r=t.indexOf(Wd);if(n===-1||r===-1||r<n)return e;let o=n>0&&t[n-1]===""?n-1:n;return[...t.slice(0,o),...t.slice(r+1)].join(`
`)}async function KN(e){let t;try{t=await(0,Yt.readFile)(e,"utf-8")}catch(r){r.code!=="ENOENT"&&gr.warn("Failed to read %s: %s \u2014 skipping",e,r.message);return}let n=qN(t);if(n!==t)try{await(0,Yt.writeFile)(e,n,"utf-8"),gr.info("Removed Jolli Memory instructions from %s",e)}catch(r){gr.warn("Failed to write %s: %s",e,r.message)}}async function bS(){let e=(0,Ud.homedir)();for(let t of wS)await KN((0,Wo.join)(e,...t.relPath))}var Ie=require("node:os"),U=require("node:path");me();w();var TS=require("node:fs"),yr=require("node:fs/promises"),hr=require("node:path");me();w();var Jd=f("McpRegistration"),Gd="jollimemory";function VN(e,t,n,r){return e==="win32"&&n?{command:"node",args:[n,...r]}:{command:t,args:[...r]}}function qd(e,t,n){return VN(e,t,n,["mcp"])}function Kd(e){let t=Ui(Mo(e));return t?(0,hr.join)(t.distDir,"Cli.js"):void 0}function _S(e){let t=Ui(Mo(e));if(!t)return;let n=(0,hr.join)(t.distDir,"McpLauncher.js");return(0,TS.existsSync)(n)?n:void 0}var kS="/.mcp.json";async function RS(e){let t=(0,hr.join)(e,".mcp.json"),n;try{n=JSON.parse(await(0,yr.readFile)(t,"utf-8"))}catch(l){if(l.code!=="ENOENT"){Jd.warn("Skipping MCP registration: %s exists but is unreadable/invalid (%s)",t,String(l));return}n={}}let r=n.mcpServers??{},o=Z(),s=(0,hr.join)(o,"run-cli"),i=process.platform==="win32"?Kd(o):void 0;r[Gd]=qd(process.platform,s,i);let a={...n,mcpServers:r};await(0,yr.writeFile)(t,`${JSON.stringify(a,null,2)}
`,"utf-8"),Jd.info("Registered MCP server in %s",t)}async function vS(e){let t=(0,hr.join)(e,".mcp.json"),n;try{n=JSON.parse(await(0,yr.readFile)(t,"utf-8"))}catch{return}n.mcpServers?.[Gd]&&(delete n.mcpServers[Gd],await(0,yr.writeFile)(t,`${JSON.stringify(n,null,2)}
`,"utf-8"),Jd.info("Removed MCP server from %s",t))}var bn=require("node:fs/promises"),IS=require("node:path");Q();w();var Ki=f("CodexTomlWriter"),Vi="[mcp_servers.jollimemory]";async function xS(e){try{return(await(0,bn.stat)(e)).mode&511}catch{return 384}}function AS(e){return`${Vi}
command = ${JSON.stringify(e.command)}
args = ${JSON.stringify(e.args??[])}
`}function CS(e){if(e.startsWith(Vi))return 0;let t=e.indexOf(`
${Vi}`);return t===-1?-1:t+1}function NS(e){let t=CS(e);if(t===-1)return e;let n=e.indexOf(`
[`,t+Vi.length),r=n===-1?e.length:n+1,o=e.slice(0,t),s=e.slice(r);return o===""||s===""?o+s:`${o.replace(/\n+$/,"")}

${s}`}async function PS(e,t){let n="";try{n=await(0,bn.readFile)(e,"utf-8")}catch(i){if(i.code!=="ENOENT"){Ki.warn("Skipping Codex MCP: %s unreadable (%s)",e,String(i));return}}let r=NS(n).replace(/\s*$/,""),o=r.length===0?AS(t):`${r}

${AS(t)}`;if(o===n){Ki.info("Codex MCP server already registered in %s \u2014 no write needed",e);return}await(0,bn.mkdir)((0,IS.dirname)(e),{recursive:!0});let s=await xS(e);await v(e,o,s),Ki.info("Registered Codex MCP server in %s",e)}async function OS(e){let t;try{t=await(0,bn.readFile)(e,"utf-8")}catch{return}CS(t)!==-1&&(await v(e,`${NS(t).replace(/\s*$/,"")}
`,await xS(e)),Ki.info("Removed Codex MCP server from %s",e))}var lt=require("node:fs/promises"),Yd=require("node:path");Q();w();var at=f("HermesConfigWriter");async function Xi(e){try{return(await(0,lt.stat)(e)).mode&511}catch{return 384}}function Ct(e){return e.replace(/\r\n/g,`
`).replace(/\r/g,`
`)}var xt=e=>/^\s*$/.test(e),Vd=e=>/^#/.test(e),DS=e=>e.length===0||/^[ \t]/.test(e),LS=new Set(["{}","[]","null","~"]);function Jo(e,t){let n=new RegExp(`^${t}:(\\s*(.*))?$`),r=-1,o;for(let i=0;i<e.length;i++){let a=n.exec(e[i]);if(a!==null){r=i,o=(a[2]??"").trim();break}}if(r===-1)return null;if(o?.startsWith("#")&&(o=""),o!==void 0&&o.length>0)return LS.has(o)?{headerIndex:r,endIndex:r+1,trivialInline:!0,nonTrivialInline:!1}:{headerIndex:r,endIndex:r+1,trivialInline:!1,nonTrivialInline:!0};let s=r+1;for(;s<e.length;){let i=e[s];if(xt(i)){s++;continue}if(!DS(i)&&!Vd(i))break;if(Vd(i)){let a=s+1;for(;a<e.length&&(xt(e[a])||Vd(e[a]));)a++;if(a<e.length&&DS(e[a])&&!xt(e[a])){s++;continue}break}s++}for(;s>r+1&&xt(e[s-1]);)s--;return{headerIndex:r,endIndex:s,trivialInline:!1,nonTrivialInline:!1}}function MS(e,t){let n=Ct(e),r=n.split(`
`);return n.endsWith(`
`)&&r.pop(),Jo(r,t)?.nonTrivialInline??!1}function zi(e,t){if(t.trivialInline)return null;let n=e.slice(t.headerIndex+1,t.endIndex);if(n.length===0)return[];let r=n.find(c=>!xt(c));if(r===void 0)return[];let o=/^([ \t]+)/.exec(r)?.[1]??"",s=new RegExp(`^${o}(?!-\\s)([^\\s:#][^:]*):(.*)$`),i=c=>c.length>o.length&&c.startsWith(o)&&c[o.length]==="#",a=[],l=0;for(;l<n.length;){if(xt(n[l])){l++;continue}let c=s.exec(n[l]);if(c===null){a.push({subKey:"",body:`${n[l]}
`}),l++;continue}let d=c[1].trim(),u=l;for(l++;l<n.length;){let m=n[l];if(xt(m)){l++;continue}if(s.exec(m)!==null||i(m))break;l++}let p=l;for(;p>u+1&&xt(n[p-1]);)p--;a.push({subKey:d,body:`${n.slice(u,p).join(`
`)}
`})}return a}function Qi(e,t){if(t.length===0)return`${e}: {}`;let n=t.map(r=>r.body.replace(/\n+$/,""));return`${e}:
${n.join(`
`)}`}async function $S(e,t,n){let r="";try{r=await(0,lt.readFile)(e,"utf-8")}catch(i){if(i.code!=="ENOENT"){at.warn("Skipping %s: %s unreadable (%s)",e,t,String(i));return}}if(MS(r,t)){at.warn("Skipping Hermes %s upsert in %s: the %s block is a non-trivial inline block and was left untouched",t,e,t);return}let o=Ct(r),s=YN(o,t,n);if(s===o){at.info("Hermes %s already up to date in %s \u2014 no write needed",t,e);return}await(0,lt.mkdir)((0,Yd.dirname)(e),{recursive:!0}),await v(e,s,await Xi(e)),at.info("Wrote Hermes %s.%s to %s",t,n.subKey,e)}async function FS(e,t,n){let r;try{r=await(0,lt.readFile)(e,"utf-8")}catch{return}let o=Ct(r),s=XN(o,t,n);s!==o&&(await v(e,s,await Xi(e)),at.info("Removed Hermes %s.%s from %s",t,n,e))}async function jS(e,t,n,r){let o="";try{o=await(0,lt.readFile)(e,"utf-8")}catch(a){if(a.code!=="ENOENT"){at.warn("Skipping %s: hooks unreadable (%s)",e,String(a));return}}if(MS(o,"hooks")){at.warn("Skipping Hermes hooks upsert in %s: the hooks block is a non-trivial inline block and was left untouched",e);return}let s=Ct(o),i=eP(s,t,n,r);if(i===s){at.info("Hermes hook already up to date in %s \u2014 no write needed",e);return}await(0,lt.mkdir)((0,Yd.dirname)(e),{recursive:!0}),await v(e,i,await Xi(e)),at.info("Wrote Hermes hook %s command to %s",t,e)}async function HS(e,t,n){let r;try{r=await(0,lt.readFile)(e,"utf-8")}catch{return}let o=Ct(r),s=tP(o,t,n);s!==o&&(await v(e,s,await Xi(e)),at.info("Removed Hermes hook %s command from %s",t,e))}function YN(e,t,n){let r=Ct(e),o=r.split(`
`);r.endsWith(`
`)&&o.pop();let s=Jo(o,t),i=Qi(t,nP(s!==null?zi(o,s)??[]:[],n)),a;if(s===null){let l=o.join(`
`).replace(/\s*$/,"");a=l.length===0?i:`${l}

${i}`}else{if(s.nonTrivialInline)return e;let l=o.slice(0,s.headerIndex).join(`
`),c=o.slice(s.endIndex).join(`
`);a=[l,i,c].filter(d=>d.length>0).join(`
`)}return`${a.replace(/\n+$/,"")}
`}function XN(e,t,n){let r=Ct(e),o=r.split(`
`);r.endsWith(`
`)&&o.pop();let s=Jo(o,t);if(s===null||s.trivialInline)return e;let i=zi(o,s)??[],a=i.filter(p=>p.subKey!==n);if(a.length===i.length)return e;let l=Qi(t,a),c=o.slice(0,s.headerIndex).join(`
`),d=o.slice(s.endIndex).join(`
`);return`${[c,l,d].filter(p=>p.length>0).join(`
`).replace(/\n+$/,"")}
`}function zN(e){let t=e.trim();if(t.length===0||/^[|>][+-]?\d*$/.test(t))return null;if(t.startsWith('"'))try{let n=JSON.parse(t);return typeof n=="string"?n:null}catch{return null}return t.startsWith("'")&&t.endsWith("'")?t.slice(1,-1).replace(/''/g,"'"):t}function Xd(e){let t=[];for(let n=1;n<e.length;n++){let r=/^([ \t]*)-\s+command:\s*(.*?)\s*$/.exec(e[n]);r!==null&&t.push({index:n,indent:r[1],command:zN(r[2])})}return t.map((n,r)=>{let o=e.length;for(let i=n.index+1;i<e.length;i++)if(e[i].startsWith(`${n.indent}- `)){o=i;break}let s=t[r+1]?.index;return s!==void 0&&(o=Math.min(o,s)),{start:n.index,end:o,indent:n.indent,command:n.command}})}function Yi(e,t,n){return[`${e}- command: ${JSON.stringify(t)}`,`${e}  timeout: ${n}`]}function QN(e,t,n,r){let o=e.body.replace(/\n+$/,"").split(`
`),s=/^([ \t]*)[^:]+:\s*(.*?)\s*$/.exec(o[0]),i=s?.[1]??"  ",a=s?.[2]??"";if(LS.has(a))return{subKey:t,body:`${i}${t}:
${Yi(`${i}  `,n,r).join(`
`)}
`};if(a.length>0)return e;let l=Xd(o),c=l.filter(h=>h.command===n),d=l[0]?.indent??`${i}  `;if(c.length===0)return{subKey:t,body:`${[...o,...Yi(d,n,r)].join(`
`)}
`};let u=c[0],p=new Set;for(let h of c)for(let E=h.start;E<h.end;E++)p.add(E);let m=o.filter((h,E)=>!p.has(E)),g=[...p].filter(h=>h<u.start).length;return m.splice(u.start-g,0,...Yi(u.indent,n,r)),{subKey:t,body:`${m.join(`
`)}
`}}function ZN(e){for(let t of e){if(t.subKey.length===0)continue;let n=t.body.replace(/\n+$/,"").split(`
`),r=/^([ \t]*)/.exec(n[0])?.[1];if(!r)continue;let o=Xd(n)[0]?.indent;return{event:r,list:o??`${r}${r}`}}return{event:"  ",list:"    "}}function eP(e,t,n,r){let o=Ct(e),s=o.split(`
`);o.endsWith(`
`)&&s.pop();let i=Jo(s,"hooks"),a=i!==null?zi(s,i)??[]:[],l=a.findIndex(g=>g.subKey===t),c=ZN(a),d={subKey:t,body:`${c.event}${t}:
${Yi(c.list,n,r).join(`
`)}
`},u=[...a];l===-1?u.push(d):u[l]=QN(a[l],t,n,r);let p=Qi("hooks",u),m;if(i===null){let g=s.join(`
`).replace(/\s*$/,"");m=g.length===0?p:`${g}

${p}`}else{if(i.nonTrivialInline)return e;let g=s.slice(0,i.headerIndex).join(`
`),h=s.slice(i.endIndex).join(`
`);m=[g,p,h].filter(E=>E.length>0).join(`
`)}return`${m.replace(/\n+$/,"")}
`}function tP(e,t,n){let r=Ct(e),o=r.split(`
`);r.endsWith(`
`)&&o.pop();let s=Jo(o,"hooks");if(s===null||s.trivialInline)return e;let i=zi(o,s)??[],a=i.findIndex(b=>b.subKey===t);if(a===-1)return e;let l=i[a].body.replace(/\n+$/,"").split(`
`),d=Xd(l).filter(b=>b.command===n);if(d.length===0)return e;let u=new Set;for(let b of d)for(let I=b.start;I<b.end;I++)u.add(I);let p=l.filter((b,I)=>!u.has(I)),m=p.slice(1).some(b=>!xt(b)),g=[...i];m?g[a]={subKey:t,body:`${p.join(`
`)}
`}:g.splice(a,1);let h=Qi("hooks",g),E=o.slice(0,s.headerIndex).join(`
`),S=o.slice(s.endIndex).join(`
`);return`${[E,h,S].filter(b=>b.length>0).join(`
`).replace(/\n+$/,"")}
`}function nP(e,t){let n=e.findIndex(o=>o.subKey===t.subKey);if(n===-1)return[...e,t];let r=[...e];return r[n]=t,r}var Tn=require("node:fs/promises"),US=require("node:path");Q();w();var Zi=f("JsonMcpWriter"),zd="jollimemory",BS="mcpServers";async function WS(e){try{return(await(0,Tn.stat)(e)).mode&511}catch{return}}async function ct(e,t,n=BS){let r,o="";try{let c=await(0,Tn.readFile)(e,"utf-8");o=c,r=c.trim()===""?{}:JSON.parse(c)}catch(c){if(c.code!=="ENOENT"){Zi.warn("Skipping MCP registration: %s unreadable/invalid (%s)",e,String(c));return}r={}}let s=r[n]??{},i=()=>`${JSON.stringify({...r,[n]:s},null,2)}
`,a=i();s[zd]=t;let l=i();if(l===o||l===a){Zi.info("MCP server already registered in %s \u2014 no write needed",e);return}await(0,Tn.mkdir)((0,US.dirname)(e),{recursive:!0}),await v(e,l,await WS(e)),Zi.info("Registered MCP server in %s",e)}async function dt(e,t=BS){let n;try{n=JSON.parse(await(0,Tn.readFile)(e,"utf-8"))}catch{return}let r=n[t];r?.[zd]&&(delete r[zd],await v(e,`${JSON.stringify(n,null,2)}
`,await WS(e)),Zi.info("Removed MCP server from %s",e))}var ta=f("HostRegistrars"),rP={host:"claude",scope:"repo",register:RS,remove:vS,gitExcludePaths:()=>[kS]};function Je(){let e=Z(),t=process.platform==="win32"?Kd(e):void 0;return qd(process.platform,(0,U.join)(e,"run-cli"),t)}function oP(){let e=Je();if(process.platform!=="win32")return e;let t=_S(Z());return t?{command:"node",args:[t]}:e}var sP={host:"cursor",scope:"repo",register:e=>ct((0,U.join)(e,".cursor","mcp.json"),{...Je()}),remove:e=>dt((0,U.join)(e,".cursor","mcp.json")),gitExcludePaths:()=>["/.cursor/mcp.json"]},iP={host:"gemini",scope:"global",register:()=>ct((0,U.join)((0,Ie.homedir)(),".gemini","settings.json"),{...Je()}),remove:()=>dt((0,U.join)((0,Ie.homedir)(),".gemini","settings.json")),gitExcludePaths:()=>[]},aP={host:"codex",scope:"global",register:()=>PS((0,U.join)((0,Ie.homedir)(),".codex","config.toml"),oP()),remove:()=>OS((0,U.join)((0,Ie.homedir)(),".codex","config.toml")),gitExcludePaths:()=>[]},lP={host:"opencode",scope:"global",register:()=>{let e=Je(),t={type:"local",command:[e.command,...e.args],enabled:!0};return ct((0,U.join)((0,Ie.homedir)(),".config","opencode","opencode.json"),t,"mcp")},remove:()=>dt((0,U.join)((0,Ie.homedir)(),".config","opencode","opencode.json"),"mcp"),gitExcludePaths:()=>[]},cP={host:"copilot",scope:"global",register:()=>ct((0,U.join)((0,Ie.homedir)(),".copilot","mcp-config.json"),{...Je()}),remove:()=>dt((0,U.join)((0,Ie.homedir)(),".copilot","mcp-config.json")),gitExcludePaths:()=>[]},dP={host:"copilotChat",scope:"global",register:()=>{let e=Je(),t={type:"stdio",command:e.command,args:e.args};return ct((0,U.join)(bt("Code"),"User","mcp.json"),t,"servers")},remove:()=>dt((0,U.join)(bt("Code"),"User","mcp.json"),"servers"),gitExcludePaths:()=>[]},uP={host:"cline",scope:"global",register:async()=>{for(let e of await Cl())await ct(Os(e),{...Je()})},remove:async()=>{for(let e of no())await dt(Os(e))},gitExcludePaths:()=>[]},pP={host:"devin",scope:"global",register:()=>ct((0,U.join)((0,Ie.homedir)(),".config","devin","config.json"),{...Je(),transport:"stdio"}),remove:()=>dt((0,U.join)((0,Ie.homedir)(),".config","devin","config.json")),gitExcludePaths:()=>[]},mP={host:"antigravity",scope:"global",register:()=>ct((0,U.join)((0,Ie.homedir)(),".gemini","config","mcp_config.json"),{...Je()}),remove:()=>dt((0,U.join)((0,Ie.homedir)(),".gemini","config","mcp_config.json")),gitExcludePaths:()=>[]},fP={host:"kimi",scope:"global",register:()=>ct((0,U.join)(Hs(),"mcp.json"),{...Je()}),remove:()=>dt((0,U.join)(Hs(),"mcp.json")),gitExcludePaths:()=>[]},ea="on_session_end";function gP(e){return/[\s"\\]/.test(e)?`"${e.replace(/([\\"])/g,"\\$1")}"`:e}function JS(){return`${gP((0,U.join)(Z(),"run-hook"))} hermes-stop`}var hP={host:"hermes",scope:"global",register:async()=>{let e=Je(),t=["  jollimemory:",`    command: ${JSON.stringify(e.command)}`,`    args: ${JSON.stringify(e.args)}`].join(`
`),n=JS();for(let r of await Ul())try{let o=(0,U.join)(r,"config.yaml");if(await $S(o,"mcp_servers",{subKey:"jollimemory",body:`${t}
`}),process.platform==="win32")continue;await Cf((0,U.join)(r,"shell-hooks-allowlist.json"),{event:ea,command:n,scriptPath:(0,U.join)(Z(),"run-hook"),nowIso:new Date().toISOString().replace(/\.\d{3}Z$/,"Z")}),await jS(o,ea,n,30)}catch(o){ta.warn("Hermes registration failed for profile home %s: %s",r,String(o))}process.platform==="win32"&&ta.info("Hermes hook registration skipped on win32 \u2014 run-hook is POSIX-only")},remove:async()=>{let e=JS();for(let t of await Ul())try{let n=(0,U.join)(t,"config.yaml");await FS(n,"mcp_servers","jollimemory"),process.platform!=="win32"&&(await HS(n,ea,e),await Nf((0,U.join)(t,"shell-hooks-allowlist.json"),{event:ea,command:e}))}catch(n){ta.warn("Hermes removal failed for profile home %s: %s",t,String(n))}},gitExcludePaths:()=>[]};function wr(e){let t=[];return e.claude&&t.push(rP),e.cursor&&t.push(sP),e.gemini&&t.push(iP),e.codex&&t.push(aP),e.opencode&&t.push(lP),e.copilot&&t.push(cP),e.copilotChat&&t.push(dP),e.cline&&t.push(uP),e.devin&&t.push(pP),e.antigravity&&t.push(mP),e.kimi&&t.push(fP),e.hermes&&t.push(hP),t}var yP={claude:!0,codex:!0,cursor:!0,gemini:!0,opencode:!0,copilot:!0,copilotChat:!0,cline:!0,devin:!0,antigravity:!0,kimi:!0,hermes:!0};async function Qd(e,t,n,r){for(let o of e)try{await r(o)}catch(s){ta.warn("MCP %s failed for %s in %s (non-fatal): %s",n,o.host,t,String(s))}}async function Zd(e,t){let n=wr(t).filter(r=>r.scope==="repo");await Qd(n,e,"registration",r=>r.register(e))}async function GS(e){let t=wr(e).filter(n=>n.scope==="global");await Qd(t,"(global)","registration",n=>n.register(""))}async function eu(e){let t=wr(yP).filter(n=>n.scope==="repo");await Qd(t,e,"removal",n=>n.remove(e))}var fe=require("node:fs/promises"),ce=require("node:path");Q();w();var Go=`### Shell prerequisite

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
security recipe and the dist resolver and will not produce valid output.`;var xe=f("SkillInstaller"),Er="1.0.6",KS=["jollimemory-recall","jolli-memory-recall"],qo=[{host:"agents-std",relativeDir:[".agents","skills"],enabled:()=>!0}],na=[".claude","skills"],Ko=[{name:"jolli-recall",build:TP},{name:"jolli-search",build:_P},{name:"jolli-local-run",build:kP},{name:"jolli-remote-run",build:RP},{name:"jolli",build:vP}],XG=Ko.map(e=>e.name),VS=["jolli-pr"],YS=qo.flatMap(e=>Ko.map(t=>`/${e.relativeDir.join("/")}/${t.name}/`)),Sr=["/.claude/skills/jolli/"],XS=[...qo.map(e=>`/${e.relativeDir.join("/")}/jolli/`),...Sr];async function wP(e,t={}){for(let n of KS)await ru((0,ce.join)(e,".claude","skills",n),"legacy");await nu(e);for(let n of qo){if(!n.enabled(t))continue;let r=(0,ce.join)(e,...n.relativeDir);for(let o of Ko)await eb(r,o.name,o.build())}await sa(e),await Vn(e,oa)}async function nu(e){for(let t of qo){let n=(0,ce.join)(e,...t.relativeDir);for(let r of VS)await ru((0,ce.join)(n,r),"retired")}}async function ru(e,t){let n=(0,ce.join)(e,"SKILL.md"),r;try{r=await(0,fe.readFile)(n,"utf-8")}catch{return}if(!ou(r)){xe.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",e);return}try{await(0,fe.rm)(e,{recursive:!0,force:!0}),xe.info("Removed %s Jolli skill at %s",t,e)}catch(o){xe.warn("Failed to remove %s skill at %s: %s",t,e,o.message)}}async function zS(e,t={}){return wP(e,t)}async function ra(e){let t=(0,ce.join)(e,...na),n=(0,ce.join)(t,"jolli","SKILL.md");try{if(!(await(0,fe.readFile)(n,"utf-8")).includes('vendor: "jolli.ai"')){xe.info("Skipping umbrella write \u2014 existing %s lacks vendor marker (user-owned)",n);return}}catch{}await eb(t,"jolli",nb())}var tu=[".cursor","skills"],QS=Ko.filter(e=>e.name!=="jolli"),oa=[`/${tu.join("/")}/`,...QS.map(e=>`/${tu.join("/")}/${e.name}/`)];async function sa(e){let t=(0,ce.join)(e,...tu);for(let n of QS){let r=(0,ce.join)(t,n.name),o=!1;try{o=(await(0,fe.lstat)(r)).isSymbolicLink()}catch{continue}if(o){await(0,fe.rm)(r,{recursive:!0,force:!0}),xe.info("Removed cursor mirror symlink at %s",r);continue}await ru(r,"cursor mirror")}}async function ia(e){try{let t=(0,ce.join)(e,...na,"jolli","SKILL.md");return await(0,fe.readFile)(t,"utf-8")===nb()}catch{return!1}}async function ZS(e){let t=[...qo.map(n=>n.relativeDir),na];for(let n of t){let r=(0,ce.join)(e,...n,"jolli"),o=(0,ce.join)(r,"SKILL.md"),s;try{s=await(0,fe.readFile)(o,"utf-8")}catch{continue}if(s.includes('vendor: "jolli.ai"'))try{await(0,fe.rm)(r,{recursive:!0,force:!0}),xe.info("Removed Jolli umbrella menu at %s",r)}catch(i){xe.warn("Failed to remove umbrella at %s: %s",r,i.message)}}}var EP=[...Ko.filter(e=>e.name!=="jolli").map(e=>e.name),...VS,...KS];async function aa(e){for(let t of EP){let n=(0,ce.join)(e,...na,t),r=(0,ce.join)(n,"SKILL.md"),o;try{o=await(0,fe.readFile)(r,"utf-8")}catch{continue}if(!ou(o)){xe.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",n);continue}try{await(0,fe.rm)(n,{recursive:!0,force:!0}),xe.info("Removed legacy Jolli skill at %s",n)}catch(s){xe.warn("Failed to remove legacy skill at %s: %s",n,s.message)}}}var SP=/(?:^|\n)[ \t]*revision:\s*(\d+)/,bP=-1;function qS(e){let t=e.match(SP),n=t?Number.parseInt(t[1],10):Number.NaN;return Number.isFinite(n)?n:bP}function ou(e){return e.includes('vendor: "jolli.ai"')||e.includes("jolli-skill-version:")}async function eb(e,t,n){let r=(0,ce.join)(e,t),o=(0,ce.join)(r,"SKILL.md"),s=qS(n);try{let i=await(0,fe.readFile)(o,"utf-8");if(!ou(i)){xe.info("Skipping %s SKILL.md \u2014 no Jolli ownership marker (user-owned)",t);return}if(qS(i)>=s)return}catch{}try{await(0,fe.mkdir)(r,{recursive:!0}),await v(o,n),xe.info("Wrote SKILL.md (revision %d) to %s",s,o)}catch(i){xe.warn("Failed to write %s SKILL.md: %s",t,i.message)}}function tb(e,t){return`${Go}

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
vector.`}function TP(){return`---
name: jolli-recall
description: Recall prior development context from Jolli for the current branch. Use when the user wants to recall, remember, or resume prior work on a branch.
metadata:
  version: "${Er}"
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

${tb("recall"," --format json")}

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
`}function _P(){return`---
name: jolli-search
description: Search structured commit memories across all branches \u2014 decisions, topics, files. Use when the user wants to find prior decisions, related commits, or how a topic was handled before.
metadata:
  version: "${Er}"
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

${tb("search"," --format json")}

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
`}function kP(){return`---
name: jolli-local-run
description: Run a Jolli workflow locally \u2014 your own agent executes the workflow's recipe (no Jolli LLM budget) and its file writes land in a git-backed Jolli Space via a branch and pull request that space-cli opens on this machine. Use when the user wants to run a Jolli workflow locally.
metadata:
  version: "${Er}"
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

${Go}

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
`}function RP(){return`---
name: jolli-remote-run
description: Run a Jolli workflow remotely \u2014 the Jolli backend executes the workflow server-side; this recipe triggers the run, monitors it to completion, reports the outcome (failed / cancelled / succeeded) with its article, PR, and workflow links, and offers to open any in your browser. Use when the user wants to run a Jolli workflow remotely (on the Jolli backend).
metadata:
  version: "${Er}"
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

${Go}

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
`}function vP(){return`---
name: jolli
description: The Jolli action menu \u2014 a single front door that lists the Jolli skills available in this session (recall, search, run a workflow local or remote, workflow history, plus any setup and account skills a Jolli plugin adds) and the Jolli MCP tools, then routes your choice to the right one. Use when the user types /jolli or asks for the Jolli menu.
metadata:
  version: "${Er}"
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

${Go}

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
`}function nb(){return`---
name: jolli
description: The Jolli front door \u2014 checks how Jolli is set up in this repo, guides first-time setup through /jolli:init when something's missing, reminds you to sign in when memories can't sync yet, and otherwise shows a status snapshot and routes you to the right Jolli skill or MCP tool. Use when the user types /jolli or asks for Jolli / the Jolli menu.
metadata:
  version: "${Er}"
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
`}var M=f("Installer");function IP(e,t){return process.platform==="linux"?e===t:e.toLowerCase()===t.toLowerCase()}async function xP(e){let t=await se(),n=ES(t.globalInstructions);if(n.write){let r=e?.codexDetected??await Ol(),o=e?.geminiDetected??await Fl();await SS({claude:t.claudeEnabled!==!1,gemini:o&&t.geminiEnabled!==!1,codex:r&&t.codexEnabled!==!1})}else n.remove&&await bS()}async function CP(e,t,n){let r=async()=>{if(!await vd())return!1;try{await iS()}catch(s){M.warn("Legacy dist-path migration failed (non-fatal): %s",s.message)}if(!await Co(e,t))return!1;try{let s=await sS();s.length>0&&M.info("Pruned stale dist-paths entries: %s",s.join(", "))}catch(s){M.warn("Pruning stale dist-paths failed (non-fatal): %s",s.message)}return!0},o=n?await Ga(r,n):await Ga(r);return o.acquired&&o.value===!0}async function ob(e,t){let n=e??process.cwd(),r=[],o=t?.integrationsOnly===!0,s=t?.repoHooksOnly===!0;if(o&&s)return{success:!1,message:"install: integrationsOnly and repoHooksOnly are mutually exclusive",warnings:r};if(!await jn(n))return M.info("Skipping Jolli Memory install \u2014 %s is not inside a git work tree",n),{success:!1,message:`Not a git repository \u2014 skipping Jolli Memory install (${n})`,warnings:r};M.info(s?"Installing Jolli Memory repo hooks only (no integrations)":o?"Installing Jolli Memory integrations (no hooks)":"Installing Jolli Memory hooks");let i=null;try{let a=await se(),l=t?.automatic?[n]:await Dr(n),c=t?.automatic?{timeoutMs:200,pollMs:25}:void 0,d=(0,_n.dirname)((0,rb.fileURLToPath)(__jmImportMetaUrl)),u=t?.source??"cli",p=t?.sourceTag??(u==="vscode-extension"?_d(d):"cli");if(!xo(p))return{success:!1,message:`Refusing to install with an unsafe source tag: ${JSON.stringify(p)}`,warnings:r};let m=lg(p);if(!await CP(p,t?.distDir,c))return{success:!1,message:"Failed to reconcile the shared runtime registry \u2014 cannot install hooks that depend on it",warnings:r};if(!o){if(i=c?await Fr(n,c):await Fr(n),!i)return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:r};if(t?.respectManualDisable&&await $t(n))return{success:!0,message:"Repository remains manually disabled",warnings:r,manuallyDisabled:!0};if(!t?.automatic)try{let x=await cg(p,a);x!==null&&(x.seededTool||x.seededProvider)&&M.info("Plugin init seeded localAgentTool=%s (source %s, seededTool=%s, seededProvider=%s)",x.tool,p,x.seededTool,x.seededProvider),x?.keptTool!==void 0&&M.info("Plugin init kept localAgentTool=%s (source %s drives %s; left alone)",x.keptTool,p,x.tool)}catch(x){r.push(`Could not record the local agent tool for this host: ${x.message}`)}}let g=s?!1:await Ol(),h=s?!1:await Fl(),E=s?!1:await Tf(),S=s?!1:await pg(),k=s?!1:await mf(),b=s?!1:await sf(),I=s?!1:await Zm()||await zm(),P=s?!1:await Ml(),$=s?!1:await zl(),Ee=s?!1:await Ll(),Fe=s?!1:await ef(),je=s?!1:await Rf(),Pt=s?!1:await Fm(),zt=s?!1:await ig(),xn=s?!1:await $f(),Qt={};for(let x of l){let Pn=await bs(x),uT=(0,_n.join)(Pn,"sessions.json");try{await(0,la.writeFile)(uT,JSON.stringify({version:1,sessions:{}},null,"	"),{encoding:"utf-8",flag:"wx"})}catch(mt){mt.code!=="EEXIST"&&M.warn("Failed to bootstrap sessions.json in %s: %s",x,mt.message)}if(s){if(await nu(x),m==="claude"){if(await ra(x),await aa(x),await Xr(x,[...Sr]),a.claudeEnabled!==!1){let mt=await gl(x);(x===n||Qt.path===void 0)&&(Qt=mt)}}else if(m==="cursor"){let mt={claude:!1,codex:!1,cursor:!0,gemini:!1,opencode:!1,copilot:!1,copilotChat:!1,cline:!1,devin:!1,antigravity:!1,kimi:!1,hermes:!1};await Zd(x,mt),await Xr(x,wr(mt).flatMap(pT=>pT.gitExcludePaths()))}await sa(x),await Vn(x,[...oa]);continue}await zS(x,{claudeEnabled:a.claudeEnabled});let Ou={claude:a.claudeEnabled!==!1,codex:g,cursor:P,gemini:h,opencode:$,copilot:Ee,copilotChat:b,cline:Fe,devin:je,antigravity:Pt,kimi:zt,hermes:xn};if(await Pm(x,[...YS,...Sr,...wr(Ou).flatMap(mt=>mt.gitExcludePaths())]),await Zd(x,Ou),o||a.claudeEnabled===!1)continue;let Aa=await gl(x);Aa.warning&&r.push(Aa.warning),(x===n||Qt.path===void 0)&&(Qt=Aa)}await GS({claude:!1,cursor:!1,codex:g||s&&m==="codex",gemini:h,opencode:$,copilot:Ee,copilotChat:b,cline:Fe,devin:je,antigravity:Pt,kimi:zt,hermes:xn}),s||await xP({codexDetected:g,geminiDetected:h});let pt={},Ot={},Cn={},Nn={},Xe={};o||(pt=await Cd(n),pt.warning&&r.push(pt.warning),Ot=await Nd(n),Ot.warning&&r.push(Ot.warning),Cn=await Pd(n),Cn.warning&&r.push(Cn.warning),Nn=await Od(n),Nn.warning&&r.push(Nn.warning),Xe=await Dd(n),Xe.warning&&r.push(Xe.warning)),g&&a.codexEnabled===void 0&&(await yt({codexEnabled:!0}),M.info("Codex detected \u2014 enabled Codex session discovery"));let Ar;if(h&&a.geminiEnabled!==!1){if(!o)for(let x of l){let Pn=await Ad(x);(x===n||Ar===void 0)&&(Ar=Pn.path)}a.geminiEnabled===void 0&&(await yt({geminiEnabled:!0}),M.info("Gemini detected \u2014 enabled Gemini session tracking"))}a.openCodeEnabled!==!1&&S&&a.openCodeEnabled===void 0&&(await yt({openCodeEnabled:!0}),M.info("OpenCode detected \u2014 enabled OpenCode session discovery"));let Qo=s?!1:await wf(),Zo=a.cursorEnabled!==!1&&E,va=a.cursorEnabled!==!1&&Qo;(Zo||va)&&a.cursorEnabled===void 0&&(await yt({cursorEnabled:!0}),M.info("Cursor detected (IDE=%s, CLI=%s) \u2014 enabled session discovery",Zo,va));let K=a.copilotEnabled!==!1&&k,es=a.copilotEnabled!==!1&&b;if((K||es)&&a.copilotEnabled===void 0&&(await yt({copilotEnabled:!0}),M.info("GitHub Copilot detected (CLI=%s, Chat=%s) \u2014 enabled session discovery",K,es)),I&&a.clineEnabled===void 0&&(await yt({clineEnabled:!0}),M.info("Cline detected \u2014 enabled Cline session discovery")),!s)for(let x of l)await NP(x);if(t?.source==="vscode-extension")M.info("Skipping v5 migration on vscode-extension source \u2014 Extension.ts owns it with UI");else if(s)M.info("Skipping v5 migration in repo-hooks-only mode \u2014 runs on every session start");else try{let x=await aw(n);M.info("Schema v5 migration: alreadyDone=%s fresh=%s migrated=%d skipped=%d",x.alreadyDone,x.fresh,x.migrated,x.skipped)}catch(x){M.warn("Schema v5 migration failed (non-fatal): %s",x.message)}if(t?.clearManualDisableOnSuccess&&!o)try{await Qa(n,!1)}catch(x){let Pn=x.message;r.push(`Enabled, but could not clear the manual-disable opt-out (${Pn}). Run enable again to clear it.`),M.warn("Could not clear manual-disable opt-out after enable (non-fatal): %s",Pn)}return M.info("Installation complete"),{success:!0,message:"Jolli Memory hooks installed successfully",warnings:r,claudeSettingsPath:Qt.path,gitHookPath:pt.path,postRewriteHookPath:Ot.path,prepareMsgHookPath:Cn.path,postMergeHookPath:Nn.path,prePushHookPath:Xe.path,geminiSettingsPath:Ar,hermesConfigPath:xn?xf():void 0}}catch(a){let l=`Installation failed: ${a.message}`;return M.error(l),{success:!1,message:l,warnings:r}}finally{i&&await i.release()}}async function NP(e){let t=B(e);try{await(0,la.stat)(t)}catch{return}let n=Z();if(IP((0,_n.resolve)(t),(0,_n.resolve)(n)))return;let r=await rn(t),o={};for(let[c,d]of Object.entries(r))d!==void 0&&(o[c]=d);if(Object.keys(o).length===0)return;let s=await rn(n),i={};for(let[c,d]of Object.entries(o))s[c]===void 0&&(i[c]=d);Object.keys(i).length>0&&await Gr(i,n);let a={};for(let c of Object.keys(i))a[c]=void 0;Object.keys(a).length>0&&await Gr(a,t);let l=Object.keys(o).filter(c=>!(c in i));for(let c of l)M.warn("Worktree %s field %s not migrated: worktree=%s, global=%s (global value takes effect)",e,c,String(o[c]),String(s[c]));M.info("Migrated %d config fields from worktree %s to global",Object.keys(i).length,e)}async function sb(e,t){let n=e??process.cwd(),r=[],o=t?.integrationsOnly===!0;M.info(o?"Removing Jolli Memory integrations (MCP)":"Removing Jolli Memory hooks");let s=null;try{if(!o&&!t?.repoLockHeld&&(s=await Fr(n),!s))return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:r};!o&&t?.persistManualDisable&&await Qa(n,!0);let i;try{i=await Dr(n)}catch{i=[n]}if(o){for(let l of i)try{await eu(l)}catch(c){M.warn("MCP removal failed in %s (non-fatal): %s",l,c.message)}return M.info("Integrations removal complete"),{success:!0,message:"Jolli Memory integrations removed (MCP)",warnings:r}}for(let l of i){let c=await hl(l);c.warning&&r.push(c.warning),await Id(l);try{await eu(l)}catch(d){M.warn("MCP removal failed in %s (non-fatal): %s",l,d.message)}t?.preserveMenu||await ZS(l),await sa(l),await Vn(l,[...oa])}let a=await Ld(n);return a.warning&&r.push(a.warning),await Md(n),await $d(n),await Fd(n),await jd(n),t?.preserveMenu||await Vn(n,XS),r.push("The `jolli-*` skill files were left in place. To remove them manually: `rm -rf .agents/skills/jolli-* .claude/skills/jolli-*` and delete the `# >>> jolli skill exclude >>>` block from `.git/info/exclude` if you no longer want it."),M.info("Uninstallation complete"),{success:!0,message:"Jolli Memory hooks removed successfully",warnings:r}}catch(i){let a=`Uninstallation failed: ${i.message}`;return M.error(a),{success:!1,message:a,warnings:r}}finally{s&&await s.release()}}w();function ca(){return new Promise((e,t)=>{let n=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",r=>n.push(r)),process.stdin.on("end",()=>{process.stdin.destroy(),e(n.join(""))}),process.stdin.on("error",t)})}var Sa=require("node:fs/promises"),Pb=require("node:path");w();Q();be();w();or();re();function br(e){if(!e.startsWith("sk-jol-"))return null;let t=e.slice(7);if(!t.includes("."))return null;for(let n of t.split("."))try{let r=Buffer.from(n,"base64url").toString("utf-8"),o=JSON.parse(r);if(typeof o.t=="string"&&typeof o.u=="string")return{t:o.t,u:o.u,...typeof o.o=="string"?{o:o.o}:{}}}catch{}return null}var PP=["jolli.ai","jolli.dev","jolli.cloud","jolli-local.me"];function da(e){let t;try{t=new URL(e)}catch{throw new Error(`Rejected Jolli origin (unparseable): ${e}`)}if(!OP(t))throw new Error(`Rejected Jolli origin "${t.origin}". Only https://*.jolli.ai, https://*.jolli.dev, https://*.jolli.cloud, and https://*.jolli-local.me are permitted.`)}function OP(e){let t=e.hostname.toLowerCase();return e.protocol==="https:"&&t!==""&&PP.some(n=>t===n||t.endsWith(`.${n}`))}var G=class extends Error{constructor(t){super(t),this.name="LocalAgentSetupError"}},kn=class extends G{constructor(t){super(t),this.name="LocalAgentModelRefusedError"}},Ge=class extends Error{constructor(t){super(t),this.name="LocalAgentAuthError"}},Nt=class extends Error{constructor(t){super(t),this.name="LocalAgentTransientError"}};var DP=new Map;function Rn(e){DP.set(e.id,e)}var _r=require("node:path");var qe=require("node:fs"),su=require("node:os"),Tr=require("node:path");w();Re();var ua=f("ExecutableResolver"),LP=15*6e4,Vo=null;function MP(e){return e.split(`
`).map(t=>t.trim()).filter(Boolean)}function ib(e){return(e??"0").replace(/^v/i,"").split(".").map(t=>Number.parseInt(t,10)||0)}function $P(e,t){let n=ib(e),r=ib(t);for(let o=0;o<Math.max(n.length,r.length);o++){let s=n[o]??0,i=r[o]??0;if(s!==i)return s>i}return!1}function FP(e){return[Tr.posix.join(e,".local/bin"),"/usr/local/bin","/opt/homebrew/bin","/opt/homebrew/sbin",Tr.posix.join(e,".npm-global/bin"),"/Applications/ChatGPT.app/Contents/Resources"]}function lb(e,t,n){if(n==="win32")return e;let r=e.split(":").filter(Boolean);return[...new Set([...r,...FP(t)])].join(":")}function jP(e,t,n){let r={...process.env};for(let o of Object.keys(r))o.toLowerCase()==="path"&&delete r[o];return r.PATH=n,Se(e,[...t],{encoding:"utf8",env:r})}function HP(e,t,n={}){let r=n.home??(0,su.homedir)(),o=n.basePath??process.env.PATH??"",s=n.exists??qe.existsSync,i=n.runFinder??jP,a=n.listDir??pb,l=[],c=t==="win32"?"where":"which",d=t==="win32"?[e.binName]:["-a",e.binName],u=lb(o,r,t);try{l.push(...MP(i(c,d,u)))}catch(k){ua.info("%s: `%s %s` found nothing (%s)",e.binName,c,d.join(" "),k.message)}let p=e.knownPaths(r,t).filter(s);l.push(...p);let m=[...new Set(l)];if(t!=="win32")return ab(e,m.length,m,[],p,u,":"),m.map(k=>({file:k}));let g=k=>k.toLowerCase().endsWith(".exe"),h=m.filter(k=>!g(k)),E=h.flatMap(k=>e.expandShim?.(k,{exists:s,listDir:a})??[]),S=db([...m.filter(g).map(k=>({file:k})),...E]);return ab(e,S.length,S.map(Yo),h,p,u,";"),S}var UP=[".exe",".cmd",".bat",".ps1",""];function cb(e,t){try{return(0,qe.statSync)(e).isFile()?(t==="win32"||(0,qe.accessSync)(e,qe.constants.X_OK),!0):!1}catch{return!1}}function BP(e,t,n={}){let r=n.home??(0,su.homedir)(),o=n.basePath??process.env.PATH??"",s=n.exists??(d=>cb(d,t)),i=t==="win32"?Tr.win32.join:Tr.posix.join,a=lb(o,r,t).split(t==="win32"?";":":"),l=t==="win32"?UP:[""],c=[];for(let d of a)if(d)for(let u of l){let p=i(d,e.binName+u);s(p)&&c.push(p)}return c.push(...e.knownPaths(r,t).filter(s)),[...new Set(c)]}function Me(e,t={}){let n=t.platform??process.platform,r=t.exists??(o=>cb(o,n));return t.overridePath?ub(e,t.overridePath,n).list.some(o=>r(o.file)):t.candidates?t.candidates().length>0:BP(e,n,t).length>0}function db(e){let t=new Set;return e.filter(n=>{let r=[n.file,...n.launchArgs??[]].join("\0");return t.has(r)?!1:(t.add(r),!0)})}function ub(e,t,n){let r={list:[{file:t}],expanded:!1};if(n!=="win32"||t.toLowerCase().endsWith(".exe"))return r;let o=db(e.expandShim?.(t,{exists:qe.existsSync,listDir:pb})??[]);return o.length?{list:o,expanded:!0}:r}function WP(e,t){return t!=="win32"||e.toLowerCase().endsWith(".exe")?"":" On Windows this must be a real .exe \u2014 a .cmd/.ps1 launcher cannot be run directly."}function Yo(e){return e.launchArgs?.length?`${e.file} ${e.launchArgs.join(" ")}`:e.file}function pb(e){try{return(0,qe.readdirSync)(e)}catch{return[]}}function ab(e,t,n,r,o,s,i){ua.info("%s discovery: %d candidate(s)=[%s]; shims=[%s]; knownPaths present=[%s] (searched %d PATH entries)",e.binName,t,n.join(", ")||"(none)",r.join(", ")||"(none)",o.join(", ")||"(none)",s.split(i).filter(Boolean).length)}function JP(e){let t=e.trim().split(/\s+/).filter(Boolean);return t.find(n=>/^v?\d+\./.test(n))??t[0]}function GP(e,t){try{let n=[...e.launchArgs??[],...t],r=Se(e.file,n,{encoding:"utf8",timeout:1e4}),o=JP(r);return{ok:!!o,version:o}}catch{return{ok:!1}}}function $e(e,t={}){let n=t.now??Date.now,r=`${e.binName} ${t.overridePath??""}`;if(Vo&&Vo.key===r&&n()-Vo.at<LP)return Vo.result;let o=t.probe??(d=>GP(d,e.probeArgs)),s=t.platform??process.platform,i=t.overridePath?ub(e,t.overridePath,s):null,a=i?.list??(t.candidates??(()=>HP(e,s)))(),l=null,c=[];for(let d of a){let u=o(d);if(!u.ok){c.push(Yo(d));continue}(!l||$P(u.version,l.version))&&(l={file:d.file,version:u.version??"0",launchArgs:d.launchArgs})}if(!l){ua.warn("No compatible %s: overridePath=%s; candidates=[%s]; failed probe `%s %s`=[%s]",e.binName,t.overridePath??"(none)",a.map(Yo).join(", ")||"(none)",e.binName,e.probeArgs.join(" "),c.join(", ")||"(none)");let d=t.overridePath&&!i?.expanded?WP(t.overridePath,s):"";throw new G(t.overridePath?`Configured local agent path "${t.overridePath}" is not a working ${e.binName} CLI.${d}`:`No compatible ${e.binName} CLI found. Install/upgrade it, or switch the AI provider.`)}return ua.info("Resolved %s executable: %s (v%s)",e.binName,Yo(l),l.version),Vo={at:n(),key:r,result:l},l}var mb={binName:"claude",knownPaths:(e,t)=>t==="win32"?[_r.win32.join(e,".local","bin","claude.exe"),_r.win32.join(e,".claude","local","claude.exe")]:[_r.posix.join(e,".local/bin/claude"),_r.posix.join(e,".claude/local/claude")],probeArgs:["--permission-mode","dontAsk","--version"]};function fb(e={}){return $e(mb,e)}function gb(e={}){return Me(mb,e)}w();Q();me();var IK=f("OptionalFlags");function kr(e,t){let n=[];for(let r of e)t?.has(r.id)||n.push(...r.args);return n}function qP(e,t){let n=t?.trim().toLowerCase()??"",r,o=-1,s=!1;for(let[i,a]of Object.entries(e??{})){let l=(a?.inputTokens??0)+(a?.cacheReadInputTokens??0),c=n!==""&&i.toLowerCase().includes(n);(l>o||l===o&&c&&!s)&&(r=i,o=l,s=c)}return r}var KP=["ANTHROPIC_API_KEY","ANTHROPIC_AUTH_TOKEN","ANTHROPIC_BASE_URL","CLAUDE_CODE_OAUTH_TOKEN","CLAUDECODE"],hb=[{id:"--strict-mcp-config",args:["--strict-mcp-config"]},{id:"--disable-slash-commands",args:["--disable-slash-commands"]},{id:"--setting-sources",args:["--setting-sources",""]}],pa=class{constructor(){this.id="claude-code";this.optionalFlags=hb}discoverExecutable(t){return Promise.resolve(fb({overridePath:t}))}isPresent(t){return gb({overridePath:t})}buildInvocation(t,n){let r={...process.env};for(let s of KP)delete r[s];r[_e]="1";let o=Ce();return{file:t.file,args:[...t.launchArgs??[],"-p","--output-format","json",...n.model?["--model",n.model]:[],"--system-prompt",n.systemPrompt,"--tools","","--permission-mode","dontAsk","--no-session-persistence",...kr(hb,n.disabledFlagIds)],stdin:n.prompt,env:r,cwd:o}}parseResult(t,n){let r;try{r=JSON.parse(t)}catch{throw new G(`Could not parse Claude Code output as JSON (first 200 chars): ${t.slice(0,200)}`)}if(r.is_error){let i=r.api_error_status??0,a=r.result??r.subtype??"unknown",l=`Claude Code returned an error (status ${i}): ${a}`;throw i===401||i===403?new Ge(l):i===429||i>=500&&i<600?new Nt(l):i===404?new kn(l):/log ?in|logged in|unauthori|authenticat|invalid api key/i.test(a)?new Ge(l):new G(l)}let o=r.usage??{},s=qP(r.modelUsage,n);return{text:r.result??"",inputTokens:o.input_tokens??0,outputTokens:o.output_tokens??0,cachedTokens:(o.cache_read_input_tokens??0)+(o.cache_creation_input_tokens??0),costUsd:r.total_cost_usd??0,stopReason:r.stop_reason??null,...s!==void 0&&{model:s}}}};var fa=require("node:path");var VP=300;function YP(e){let t=e.trim();if(!t.startsWith("{"))return null;try{let n=JSON.parse(t);return typeof n?.status=="number"?n:null}catch{return null}}function yb(e,t){let n=e.slice(0,VP),r=YP(e);if(r){let o=r.status,s=r.error?.message??"",i=!!t&&s.includes(`'${t}'`);if(o===401)return new Ge(`Codex auth error: ${n}`);if(o===429||o>=500&&o<600)return new Nt(`Codex run failed: ${n}`);if(o>=400&&o<500&&i)return new kn(`Codex refused the model '${t}': ${n}`);if(o===403)return new Ge(`Codex auth error: ${n}`)}return/log ?in|logged in|unauthori|authenticat/i.test(n)?new Ge(`Codex auth error: ${n}`):new Nt(`Codex run failed: ${n}`)}var wb={binName:"codex",knownPaths:(e,t)=>t==="win32"?[fa.win32.join(e,".local","bin","codex.exe")]:[fa.posix.join(e,".local/bin/codex")],probeArgs:["--version"]},Eb=[{id:"--disable",args:["--disable","plugins"],matches:["--disable","Unknown feature flag: plugins"]}],ma=class{constructor(){this.id="codex";this.optionalFlags=Eb}discoverExecutable(t){return Promise.resolve($e(wb,{overridePath:t}))}isPresent(t){return Me(wb,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.OPENAI_API_KEY,delete r.OPENAI_BASE_URL,r[_e]="1";let o=Ce(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"exec","--json","--skip-git-repo-check","-s","read-only","-C",o,...kr(Eb,n.disabledFlagIds),...n.model?["-m",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t,n){let r="",o=0,s=0,i=0,a=!1,l;for(let c of t.split(`
`)){let d=c.trim();if(!d)continue;let u;try{u=JSON.parse(d)}catch{continue}a=!0;let p=u.type??"";if(p==="turn.failed")throw yb(u.message??u.error?.message??d,n);if(/error/i.test(p)){l??=u.message??u.error?.message??d;continue}if(p==="item.completed"&&u.item?.type==="agent_message"){let m=u.item.text;m&&(r=m)}p==="turn.completed"&&u.usage&&(o=u.usage.input_tokens??o,s=u.usage.output_tokens??s,i=u.usage.cached_input_tokens??i)}if(!a)throw new G(`Codex produced no JSONL events (first 200 chars): ${t.slice(0,200)}`);if(l!==void 0&&r.trim()==="")throw yb(l,n);return{text:r,inputTokens:o,outputTokens:s,cachedTokens:i,costUsd:0,stopReason:null}}};var ut=require("node:path");function XP(e,t){let n=ut.win32.join(ut.win32.dirname(e),"versions");return[...t.listDir(n)].sort().reverse().flatMap(o=>{let s=ut.win32.join(n,o,"node.exe"),i=ut.win32.join(n,o,"index.js");return!t.exists(s)||!t.exists(i)?[]:[{file:s,launchArgs:["--use-system-ca",i]},{file:s,launchArgs:[i]}]})}function zP(e,t=process.env){return t.LOCALAPPDATA||ut.win32.join(e,"AppData","Local")}function QP(e,t,n){return t!=="win32"?[ut.posix.join(e,".local/bin/cursor-agent")]:[ut.win32.join(zP(e,n),"cursor-agent","cursor-agent.cmd"),ut.win32.join(e,".local","bin","cursor-agent.exe")]}var Sb={binName:"cursor-agent",knownPaths:QP,probeArgs:["--version"],expandShim:XP},ga=class{constructor(){this.id="cursor-agent"}discoverExecutable(t){return Promise.resolve($e(Sb,{overridePath:t}))}isPresent(t){return Me(Sb,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.CURSOR_API_KEY,r[_e]="1";let o=Ce(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"-p","--output-format","json","--trust",...n.model?["--model",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t){let n;try{n=JSON.parse(t)}catch{throw new G(`Could not parse Cursor output as JSON (first 200 chars): ${t.slice(0,200)}`)}if(n.is_error){let o=n.result??n.subtype??"unknown",s=`Cursor returned an error: ${o}`;throw/log ?in|logged in|unauthori|authenticat|not_logged_in/i.test(o)||/auth/i.test(n.subtype??"")?new Ge(s):new G(s)}let r=n.usage??{};return{text:n.result??"",inputTokens:r.inputTokens??0,outputTokens:r.outputTokens??0,cachedTokens:(r.cacheReadTokens??0)+(r.cacheWriteTokens??0),costUsd:0,stopReason:n.subtype??null}}};var _b=require("node:fs"),Xt=require("node:path");w();var ZP=f("HermesBackend"),bb="usage.json";function eO(e){return e==="win32"?24e3:e==="darwin"?512*1024:12e4}function tO(e,t){return t!=="win32"?[Xt.posix.join(e,".local/bin/hermes")]:[Xt.win32.join(e,".hermes","bin","hermes.exe"),Xt.win32.join(e,".local","bin","hermes.exe")]}var Tb={binName:"hermes",knownPaths:tO,probeArgs:["--version"]},nO=[{id:"--ignore-rules",args:["--ignore-rules"]}];function Xo(e){let t=typeof e=="number"?e:typeof e=="string"&&e.trim().length>0?Number(e):Number.NaN;return Number.isFinite(t)&&t>=0?t:0}var ha=class{constructor(){this.id="hermes";this.optionalFlags=nO}discoverExecutable(t){return Promise.resolve($e(Tb,{overridePath:t}))}isPresent(t){return Me(Tb,{overridePath:t})}buildInvocation(t,n){let r={...process.env};r[_e]="1";let o=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,s=eO(process.platform),i=Buffer.byteLength(o,"utf8");if(i>s)throw new G(`Hermes prompt is ${i} UTF-8 bytes, above this platform's ${s}-byte argv budget. Hermes exposes no lossless prompt-file channel, so refusing to generate a partial summary.`);let a=Ce(),l=[...t.launchArgs??[],...n.model?["--model",n.model]:[],...n.disabledFlagIds?.has("--ignore-rules")?[]:["--ignore-rules"],"--usage-file",(0,Xt.join)(a,bb),"-z",o];return{file:t.file,args:l,stdin:"",env:r,cwd:a}}parseResult(t,n,r){let o=r===void 0?void 0:rO((0,Xt.join)(r,bb));if(o===void 0)throw new G("Hermes did not produce a valid usage report; refusing unverified stdout that may describe a failed run.");let s=t.trim(),i=typeof o.failure=="string"&&o.failure.trim().length>0?o.failure:void 0;if(o.failed===!0||i!==void 0){let a=i??"no reason reported";throw new Error(`Hermes reported a failed run: ${a}`)}if(o.failed!==void 0&&o.failed!==!1)throw new G("Hermes usage report contained a non-boolean failure status; refusing unverified stdout.");if(!s)throw new G(`Hermes produced no output (first 200 chars of stdout): ${t.slice(0,200)}`);return{text:s,inputTokens:Xo(o.input_tokens),outputTokens:Xo(o.output_tokens),cachedTokens:Xo(o.cache_read_tokens)+Xo(o.cache_write_tokens),costUsd:Xo(o.estimated_cost_usd),stopReason:null,...typeof o.model=="string"&&o.model?{model:o.model}:{}}}};function rO(e){let t;try{t=(0,_b.readFileSync)(e,"utf-8")}catch{return}try{let n=JSON.parse(t);return typeof n=="object"&&n!==null&&!Array.isArray(n)?n:void 0}catch{ZP.debug("Hermes usage report at %s is not valid JSON \u2014 treating the run as unverifiable",e);return}}var Rb=require("node:fs"),vn=require("node:path");nl();var oO=24e3,sO=1e6,iO="jolli-context.md",aO=["---","name: jolli-task","description: Full task context for this run; follow the instructions it contains.","---"].join(`
`),lO="Follow the instructions in your agent definition and output only what they ask for \u2014 no preamble, no commentary.";function cO(e,t){return t!=="win32"?[vn.posix.join(e,".local/bin/kimi")]:[vn.win32.join(e,".kimi-code","bin","kimi.exe"),vn.win32.join(e,".local","bin","kimi.exe")]}var kb={binName:"kimi",knownPaths:cO,probeArgs:["--version"]},ya=class{constructor(){this.id="kimi"}discoverExecutable(t){return Promise.resolve($e(kb,{overridePath:t}))}isPresent(t){return Me(kb,{overridePath:t})}buildInvocation(t,n){let r={...process.env};delete r.MOONSHOT_API_KEY,delete r.MOONSHOT_BASE_URL,r[_e]="1";let o=Ce(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],...n.model?["--model",n.model]:[],"--output-format","stream-json"];if(s.length<=oO)return{file:t.file,args:[...i,"--prompt",s],stdin:"",env:r,cwd:o};let a=(0,vn.join)(o,iO);(0,Rb.writeFileSync)(a,`${aO}
${tl(s,sO)}`,"utf-8");let l=[...i,"--agent-file",a,"--prompt",lO];return{file:t.file,args:l,stdin:"",env:r,cwd:o}}parseResult(t){let n="";for(let r of t.split(`
`)){let o=r.trim();if(!o)continue;let s;try{s=JSON.parse(o)}catch{continue}s.role==="assistant"&&typeof s.content=="string"&&s.content&&(n=s.content)}if(!n)throw new G(`Kimi produced no assistant output (first 200 chars): ${t.slice(0,200)}`);return{text:n,inputTokens:0,outputTokens:0,cachedTokens:0,costUsd:0,stopReason:null}}};var An=require("node:path");function dO(e,t){let n=An.win32.dirname(e),r=An.win32.join(n,"node_modules","opencode-ai","bin","opencode.exe");return t.exists(r)?[{file:r}]:[]}var vb={binName:"opencode",knownPaths:(e,t)=>t==="win32"?[An.win32.join(e,".opencode","bin","opencode.exe"),An.win32.join(e,".local","bin","opencode.exe")]:[An.posix.join(e,".local/bin/opencode")],probeArgs:["--version"],expandShim:dO},Ab=[{id:"--pure",args:["--pure"]}],wa=class{constructor(){this.id="opencode";this.optionalFlags=Ab;this.unnamedFlagFailures=!0}discoverExecutable(t){return Promise.resolve($e(vb,{overridePath:t}))}isPresent(t){return Me(vb,{overridePath:t})}buildInvocation(t,n){let r={...process.env};r[_e]="1",r.OPENCODE_DISABLE_CLAUDE_CODE="1";let o=Ce(),s=n.systemPrompt?`${n.systemPrompt}

${n.prompt}`:n.prompt,i=[...t.launchArgs??[],"run",...kr(Ab,n.disabledFlagIds),...n.model?["--model",n.model]:[],s];return{file:t.file,args:i,stdin:"",env:r,cwd:o}}parseResult(t){let n=t.trim();if(!n)throw new G("OpenCode produced no output.");return{text:n,inputTokens:0,outputTokens:0,cachedTokens:0,costUsd:0,stopReason:null}}};Rn(new pa);Rn(new ga);Rn(new ma);Rn(new wa);Rn(new ya);Rn(new ha);w();Re();var g2=f("LocalAgentRunner"),h2=15*6e4;ri();var iu=`  - Subject and tense: third person, past tense, with a concrete subject. Use "The developer added...", "This commit (or batch of commits) introduced...", "The login page now ...", or "Users can now ...". FORBIDDEN subjects: "the tool", "the LLM", "the system", "the model", "the AI" -- never anthropomorphize the generator. Never "I" or "we".
  - Describe WHAT changed and what users can now do differently. Do NOT explain WHY technical choices were made -- that belongs in the decisions field. If a sentence connects clauses with any of the words below, it is almost certainly explaining WHY/HOW or contrasting an alternative -- rewrite to state only the outcome, even if the sentence becomes shorter:
      * Causal: "so", "because", "since" (when meaning "because"), "which means", "which forced", "in order to"
      * Contrastive: "rather than", "instead of", "as opposed to", "unlike before", "unlike previously"
    Note: words like "without" and "until" are NOT forbidden. They are fine when they describe a neutral spatial / contextual fact ("without leaving the page", "until the result satisfies the user"). They become a problem only when they implicitly criticise an old path ("...there was no way to fix it without re-running the entire flow from scratch") -- which is already covered by the broader rule "do not describe before-vs-after in the recap".
  - No code identifiers: no file paths, no function/class/variable names, no CLI flags, no inline code. Also forbidden: any internal field name or section label from this prompt or the data model (e.g. "decisions field", "topic count", "importance label", "recap block", "word ceiling", "trailing mention"). Also forbidden: references to how the generator works internally ("before labeling", "after parsing", "the tool decides", "marked as major"). The test: a colleague who uses the product but has never seen this codebase or this prompt should understand every sentence.
  - User-facing names ARE allowed and encouraged: product names, page names ("the login page"), feature names ("article reordering"), and widely-recognized UI element names ("the sidebar", "the Settings panel").
  - Meta-commits (changes to internal rules, prompts, configuration, or generation behavior the user does not directly interact with): describe the user-VISIBLE consequence -- what the user will see in future output or product behavior -- NOT the internal rule that changed. Translate mechanism statements like "the recap is now generated after the topic list" into user-facing outcomes like "future commit summaries will read more clearly: each recap covers fewer topics in greater depth". If you cannot identify a visible consequence for the user, this change may not warrant a recap at all.
  - Paragraph balance: when the recap has multiple paragraphs, each paragraph MUST contain at least 2 sentences. Single-sentence paragraphs alongside longer ones produce a fragmented finish -- expand the short one with concrete detail, or merge it into an adjacent paragraph. (A whole-recap-of-one-sentence is still fine for trivial single-change commits.)
  - Self-check (mandatory): before finalizing your output, mentally scan each sentence of your draft recap for the forbidden connectives listed above. For every match, rewrite that sentence to state only the visible outcome and drop the comparison/causation clause entirely. The lost information either belongs in the decisions field or should not be in the recap at all. If you have not done this scan, your output is not ready.`,au=`  Recap anti-patterns (do NOT write like this):
  - BAD: "The way the tool selects topics was overhauled, so it can look back at what was already marked as major rather than guessing ahead."
    Why bad: subject "the tool" anthropomorphizes the generator; "so" + "rather than" are causal connectives explaining WHY/HOW; "marked as major" is implementation-level vocabulary.
  - BAD: "The recap block was moved after the topics, which means the LLM no longer needs to anticipate the importance label."
    Why bad: "the LLM" forbidden subject; "the recap block" / "importance label" are internal field names; "which means" explains mechanism.
  - GOOD: "Future commit summaries will be easier to read: each recap now focuses on the two or three most impactful changes and explains them in real depth. Single-line summaries of every topic are gone. Routine cleanup work no longer appears in the recap at all."
    Why good: subject is the user-visible artefact ("future commit summaries"); describes WHAT the user will see; no internal vocabulary; no forbidden causal/contrastive connectives.`,Ib=`**Output format requirements (READ FIRST -- the rest of this prompt depends on these being followed):**

Your response MUST be a delimited plain-text document with the following shape:

\`\`\`
===SUMMARY===
[optional ---TICKETID--- block]
[zero or more ===TOPIC=== blocks]
[optional ---RECAP--- block, AFTER all topics]
\`\`\``;function xb(e,t){return`===TOPIC===
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
major`}function lu(e){let t=e.majorQualifier?" major":"",n=e.preserveNote?" -- the topics list preserves them":"";return`  - Pick the ${e.topicRange} highest-impact${t} topics to cover; skip the rest${n}. Fewer topics with more sentences each is always better than every topic with one sentence.
  - For each chosen topic, write 2-4 sentences. Target ${e.wordTarget} words total. No hard upper limit -- let the substance drive length.`}var uO=`You are Jolli Memory, an AI development process documentation tool. Your job is to analyze a development session (human-AI conversation + code changes) and produce a structured summary.

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

${Ib}

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

${xb("What was implemented or fixed -- this is a detail field, so technical precision is welcome. Name files, functions, and systems changed. ALWAYS use a bulleted list (- item) when there are 2+ distinct points. Use 2-4 sentences per point -- enough to specify what changed, not pad. A single sentence is fine for trivial single-point changes. Maximum 3 points. If the commit has more than 3 substantive changes, pick the 3 with highest impact (architectural changes, user-visible behavior changes, changes to load-bearing systems) -- do NOT merge unrelated changes into one point just to fit more in. Lower-impact changes you don't pick simply don't appear; that's the intended trade-off.","Why THIS approach was chosen over alternatives. ALWAYS use a bulleted list (- **Bold label**: explanation) when there are 2+ decisions -- each bullet is one decision with its rationale. When there is exactly one decision, write it as plain prose -- no bullet, no bold label. One decision is fine; one bullet is a formatting error. Prioritize insights from the conversation: alternatives considered, constraints, trade-offs. Explain in plain language using impact dimensions (speed, safety, complexity, UX, maintainability) -- no code identifiers. Write so a teammate unfamiliar with this codebase area can follow. Use 2-4 sentences per bullet -- enough to explain the trade-off, not pad. Maximum 3 bullets. If the commit has more than 3 substantive decisions, pick the 3 with highest impact (architectural choices, user-visible behavior changes, decisions that constrain future work) -- do NOT merge unrelated decisions into one bullet just to fit more in. Lower-impact decisions you don't pick simply don't appear; that's the intended trade-off.")}

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
${lu({topicRange:"2-3",majorQualifier:!0,preserveNote:!0,wordTarget:"150-300"})}
${iu}
  - The recap describes ONLY \`importance: major\` topics. \`importance: minor\` topics (routine formatting, config tweaks, version bumps, doc-only changes) MUST NOT be mentioned in the recap, not even briefly -- they are preserved as standalone topics for audit; the recap is the major-work narrative only.
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative.
  - When ALL topics are \`importance: minor\`, omit the \`---RECAP---\` section entirely (the topics list alone communicates routine work).
  - Because the recap is emitted AFTER all topics, you can verify your major/minor selection by literal lookback: scan your own preceding output for each topic's \`---IMPORTANCE---\` line and include only the \`major\` ones.
  - Flowing prose only. NO bullet lists, NO headings, NO markdown inside the recap.
  - Do NOT restate the commit message verbatim. Add information a reader cannot get from the commit message alone.
  - If the commit is a single tiny change (e.g. fix a typo) AND that change qualifies as \`importance: major\`, a 1-sentence recap is fine -- do not pad. If the only topic is \`importance: minor\`, omit the recap.

${au}

## Begin response now

Output ONLY the delimited text starting with the \`===SUMMARY===\` sentinel. Do NOT preface it with markdown headers, markdown tables, code fences, or prose. If you have nothing substantive to emit (per rule 16), output \`===SUMMARY===\` alone on its own line and stop.`;var w2=`You are Jolli Memory, an AI development process documentation tool. Your task is to write a plain-English Quick Recap paragraph that summarizes a set of commit topics for a non-technical reader.

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

${lu({topicRange:"2-3",majorQualifier:!1,preserveNote:!1,wordTarget:"150-300"})}
${iu}
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative. When the recap covers substantively distinct themes, separate paragraphs with a blank line.
  - Flowing prose only. NO bullet lists, NO headings, NO markdown inside the recap.
  - Do NOT restate the commit message verbatim. Add information a reader cannot get from the commit message alone.
  - NEVER use the literal string \`---RECAP---\` inside your content. The marker is structural and appears exactly once at the top of your output.

${au}

## Begin response now

Output ONLY the \`---RECAP---\` marker followed by the recap text. No prose before or after.`;var pO=`You are Jolli Memory, an AI development process documentation tool. Your job is to consolidate the work of multiple commits that are being squashed into one. You produce TWO outputs in a single call:
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

${Ib}

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

${xb("What was implemented or fixed. This is a detail field, so technical precision is welcome. Name files, functions, and systems changed. ALWAYS use a bulleted list (- item) when there are 2+ distinct points. Use 2-4 sentences per point -- enough to specify what changed, not pad. A single sentence is fine for trivial single-point changes. Cap and selection are governed by rule 6's bullet-count guidance (squash-consolidate raises the per-topic cap to 5 vs the summarize prompt's 3, since consolidation aggregates work from multiple commits).","Why THIS approach was chosen over alternatives. ALWAYS use a bulleted list (- **Bold label**: explanation) when there are 2+ decisions -- each bullet is one decision with its rationale. Prioritize insights carried over from the source topics: alternatives considered, constraints, trade-offs. Explain in plain language using impact dimensions (speed, safety, complexity, UX, maintainability) -- no code identifiers. Use 2-4 sentences per bullet -- enough to explain the trade-off, not pad. Cap and selection are governed by rule 6's bullet-count guidance (max 5 per topic; pick the highest-impact decisions when consolidating yields more).")}

===TOPIC===
[Repeat the full ===TOPIC=== block above for each independent or merged topic the consolidation produces. Squashes spanning diverse work commonly emit 5-15 topics -- see rule 11 for sizing. The example shows ONE block for brevity; do not let that anchor your output to a single topic.]

---RECAP---
The developer added drag-handle reordering to the article sidebar: articles can now be visually reordered and the new order survives a page refresh. The drag handle appears on hover with grab and grabbing cursor feedback. Ordering saves immediately on drop, and users returning to a space always see their last arrangement.

A new confirmation step was added before destructive actions in the settings panel. Clicking "Delete Space" or "Archive" now presents a confirmation dialog. Accidental data loss is much less likely, and both actions share the same pattern across the panel.

## Rules

1. RECAP: Output a ---RECAP--- section AFTER the final ===TOPIC=== block when at least one consolidated topic carries \`importance: major\`. Omit the section entirely otherwise -- do NOT invent content, and do NOT write a recap when every consolidated topic is \`importance: minor\`. Content rules:
${lu({topicRange:"3-5",majorQualifier:!0,preserveNote:!0,wordTarget:"200-400"})}
${iu}
  - The consolidated recap describes ONLY \`importance: major\` topics. \`importance: minor\` topics (routine formatting, config tweaks, version bumps, doc-only changes) MUST NOT be mentioned in the recap, not even briefly -- they survive in the topics list; the recap is reserved for major-work narrative.
  - Lead with what changed most visibly or impactfully; weave related points into flowing paragraphs. Do NOT write one sentence per topic -- that produces a fragmented list, not a narrative.
  - When ALL post-merge topics are \`importance: minor\`, omit the \`---RECAP---\` section entirely (the topics list alone communicates routine work).
  - Because the recap is emitted AFTER all topics, you can verify your major/minor selection by literal lookback: scan your own preceding output for each topic's \`---IMPORTANCE---\` line and include only the \`major\` ones. Do NOT copy verbatim from any single source recap; the consolidated recap MUST be a fresh synthesis driven by the \`major\` topics you just emitted, not by which input recap looked most comprehensive.
  - Deduplicate iterations: describe the FINAL state only, not the iteration history. If an earlier recap says a button was added and a later recap says it was renamed with a confirmation dialog, the consolidated recap describes the button in its final form.
  - When source iteration represents a substantive technical evolution (algorithm change, library swap, scope pivot), do NOT describe the path here -- that belongs in DECISIONS per rule 6's evolution sub-rule. RECAP is for final-state user-facing prose; the X-over-Y trade-off path lives in the structured decisions field.
  - Describe net effects (subject to rule 4's evidence requirement).
  - Flowing prose only. NO bullet lists, NO headings, NO markdown.
  - Do NOT restate the squash commit message verbatim. Add information a reader cannot get from the commit message alone.

${au}

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

Output ONLY the delimited text starting with the \`===SUMMARY===\` sentinel. Do NOT preface it with markdown headers, markdown tables, code fences, or prose. If every source topic is trivial and there is nothing substantive to emit (per rule 15), output \`===SUMMARY===\` alone on its own line and stop.`,Cb="IMPORTANT -- YOUR PREVIOUS RESPONSE FAILED FORMAT VALIDATION\n\nYour previous response did not start with the required `===SUMMARY===` sentinel followed by the `===TOPIC===` / `---FIELDNAME---` delimited plain-text format. It used markdown headers (e.g. `##`, `###`), tables, or prose instead. The parser could not extract any topics from it.\n\nThis is your previous (rejected) response, between the markers below. The markers themselves are bookkeeping for this retry message and are NOT part of the format you should emit:\n\nPREVIOUS_RESPONSE_BEGIN\n{{previousResponse}}\nPREVIOUS_RESPONSE_END\n\nNow produce the SAME summary AGAIN, this time using the required output format strictly:\n  - The first non-blank line of your response MUST be `===SUMMARY===`.\n  - Do NOT use markdown headers (`#`, `##`, `###`, `####`), markdown tables, code fences (```), or prose introductions.\n  - Block order is fixed: `---TICKETID---` (optional) -> `===TOPIC===` blocks -> `---RECAP---` (optional, AFTER all topics). Recap is the final block, never before topics.\n  - The recap, when emitted, MUST cover only `importance: major` topics; minor topics are omitted from the recap entirely.\n  - If your previous response contained useful content, carry it forward into the correct format -- do NOT discard the work, just re-format it under `===SUMMARY===`.\n  - The transcript or source-commit content shown below may itself be styled in markdown; that is INPUT DATA, not your output template.\n\nThe original task instructions follow. Re-read them and produce your response in the correct delimited format.\n\n---\n\n",E2=Cb+uO,S2=Cb+pO;w();Ac();var R2=f("Summarizer");ss();var nV=f("LlmClient");var rV=900*1e3;function Nb(e){return e.aiProvider==="local-agent"?"local-agent":e.aiProvider==="jolli"?e.jolliApiKey?"jolli-proxy":null:e.aiProvider==="anthropic"?e.apiKey?"anthropic-config":process.env.ANTHROPIC_API_KEY?"anthropic-env":null:e.apiKey?"anthropic-config":process.env.ANTHROPIC_API_KEY?"anthropic-env":e.jolliApiKey?"jolli-proxy":null}tt();function fO(e){switch(Nb(e)){case"local-agent":return"local-agent";case"jolli-proxy":return"jolli";case"anthropic-config":case"anthropic-env":return"anthropic";default:return"none"}}async function gO(e){let[t,n]=await Promise.all([Promise.resolve().then(()=>(Hd(),hS)),Promise.resolve().then(()=>(st(),fy))]),[r,o]=await Promise.all([t.isGitPipelineFullyInstalled(e),n.getSummaryCount(e)]);return{enabled:r,summaryCount:o}}async function hO(e){let t=fO(e.config),n=t!=="none";if(!await jn(e.cwd))return{inGitRepo:!1,repoEnabled:!1,captureConfigured:n,captureMethod:t,memoriesGenerated:!1,memoriesBucket:"0"};let o=e.status??await gO(e.cwd),s=o.summaryCount??0;return{inGitRepo:!0,repoEnabled:!!o.enabled,captureConfigured:n,captureMethod:t,memoriesGenerated:s>0,memoriesBucket:xg(s)}}var yO="onboarding-progress.json",wO=1440*60*1e3;function EO(e){return[e.inGitRepo,e.repoEnabled,e.captureMethod,e.memoriesGenerated,e.memoriesBucket].join("|")}async function SO(e){try{let t=JSON.parse(await(0,Sa.readFile)(e,"utf-8"));if(typeof t?.sig=="string"&&typeof t?.tsIso=="string")return t}catch{}}var Ea=new Map;async function Ob(e){let t,n;try{if(!Ig()?.enabled||V()||Za(e.cwd))return;t=(0,Pb.join)(B(e.cwd),yO);let r=t;n=(Ea.get(r)??Promise.resolve()).then(()=>bO(e,r)),Ea.set(r,n),await n}catch{}finally{t&&n&&Ea.get(t)===n&&Ea.delete(t)}}async function bO(e,t){try{let n=await hO(e),r=EO(n),o=await SO(t),s=Date.now(),i=!o||o.sig!==r,a=o?s-Date.parse(o.tsIso):Number.POSITIVE_INFINITY,l=!Number.isFinite(a)||a>=wO;if(!i&&!l)return;io("onboarding_progressed",{in_git_repo:n.inGitRepo,repo_enabled:n.repoEnabled,capture_configured:n.captureConfigured,capture_method:n.captureMethod,memories_generated:n.memoriesGenerated,memories_bucket:n.memoriesBucket});let c=B(e.cwd);await(0,Sa.mkdir)(c,{recursive:!0}),await v(t,JSON.stringify({sig:r,tsIso:new Date(s).toISOString()}))}catch{}}me();me();var TO="https://auth.jolli.ai";function cu(){let e=(process.env.JOLLI_URL?.trim()||TO).replace(/\/+$/,"");return da(e),e}me();or();var _O="/api/telemetry/events",kO=1e4,RO=100;async function Db(e){let t=e.fetchImpl??fetch,n=e.timeoutMs??kO,r=Math.max(1,e.maxBatch??RO),o=e.origin,s;if(e.jolliApiKey){let g=br(e.jolliApiKey);g&&(o=g.u,s=e.jolliApiKey)}let i=await oc(e.cwd);if(i.length===0)return{sent:0,remaining:0};if(!o)return{sent:0,remaining:i.length};try{da(o)}catch{return{sent:0,remaining:i.length}}let a;try{a=new URL(_O,o).toString()}catch{return{sent:0,remaining:i.length}}let l=new Map;for(let g of i){let h=l.get(g.installId);h?h.push(g):l.set(g.installId,[g])}let c=e.deadlineMs===void 0?void 0:performance.now()+e.deadlineMs,d=!1,u=[];for(let g of l.values()){if(d)break;for(let h=0;h<g.length;h+=r){let E=g.slice(h,h+r),S=n;if(c!==void 0){let k=c-performance.now();if(k<=0){d=!0;break}S=Math.min(n,k)}if(!await AO(a,E,s,t,S))break;u.push(...E)}}if(u.length===0)return{sent:0,remaining:i.length};let p=await oc(e.cwd),m=vO(p,u);return await Tg(e.cwd,m),{sent:u.length,remaining:m.length}}function vO(e,t){let n=new Map;for(let o of t){let s=JSON.stringify(o);n.set(s,(n.get(s)??0)+1)}let r=[];for(let o of e){let s=JSON.stringify(o),i=n.get(s)??0;i>0?n.set(s,i-1):r.push(o)}return r}async function AO(e,t,n,r,o){let s={"Content-Type":"application/json","x-jolli-client":Ht};n&&(s.Authorization=`Bearer ${n}`);let i=new AbortController,a=setTimeout(()=>i.abort(),o);try{return(await r(e,{method:"POST",headers:s,body:JSON.stringify({events:t}),signal:i.signal})).ok}catch{return!1}finally{clearTimeout(a)}}function Lb(e,t){if(e.jolliApiKey){let n=br(e.jolliApiKey);if(n)return n.u}if(e.jolliUrl)return e.jolliUrl;try{return t()}catch{return}}async function Mb(e){let t=e.deps?.loadConfig??se,n=e.deps?.getOrCreateInstallId??vm,r=e.deps?.getJolliUrl??cu;try{let o=await t(),{installId:s,created:i}=await n(),a=Lb(o,r);Ag({cwd:e.cwd,installId:s,sessionId:e.sessionId,agent:e.agent??(e.inferAgentFromEnv?wg(e.env):void 0),origin:a,config:o,platformDisabled:e.platformDisabled,env:e.env}),i&&io("app_installed")}catch{}}var du=2e3;async function $b(e,t){let n=t?.loadConfig??se,r=t?.getJolliUrl??cu;try{let o=await n();if(!kg({config:o,env:t?.env,platformDisabled:t?.platformDisabled})){await _g(e);return}let s=Lb(o,r);await Db({cwd:e,origin:s,jolliApiKey:o.jolliApiKey,fetchImpl:t?.fetchImpl,timeoutMs:t?.timeoutMs,deadlineMs:t?.deadlineMs})}catch{}}function ba(e,t,n){return{done:(async()=>{try{let o=await se(),s=async()=>o;await Mb({cwd:e,sessionId:t,agent:n,inferAgentFromEnv:!0,deps:{loadConfig:s}}),await Ob({cwd:e,config:o}),await $b(e,{loadConfig:s,timeoutMs:du,deadlineMs:du})}catch{}})()}}var ge=require("node:fs"),Ye=require("node:path"),eT=require("node:url");or();Mn();be();function Fb(e){return e.aiProvider==="local-agent"?!0:e.aiProvider==="jolli"?!!e.jolliApiKey:e.aiProvider==="anthropic"?!!(e.apiKey||process.env.ANTHROPIC_API_KEY):!!(e.apiKey||process.env.ANTHROPIC_API_KEY||e.jolliApiKey)}tt();me();wi();kc();ho();st();Jt();w();Re();ri();function IO(e){return[`1) Re-authenticate ${go(e)}:  ${Wh(e)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function xO(e,t){let n=Jh(e);return n===null?[]:[`${t}${n}`]}function jb(e){return[`[Jolli Memory] Memory generation failed for a recent commit: ${go(e)} authentication expired or is unavailable.`,...xO(e,""),"\u2192 Fix with either:",...IO(e).map(t=>`    ${t}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}var Ve=f("SessionStartHook"),KO=new Set(["main","master","develop","development","staging","production"]),ka=500,VO=250;function YO(e=ka+VO){let t=setTimeout(()=>process.exit(0),e);return t.unref(),t}var tT="login-reminder-dismissed";function XO(e){let t=Yl(e,"init");return t===void 0?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${`Run ${t} to finish setup.`}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${tT}.)`].join(`
`)}function zO(e,t,n){return t||n?null:XO(e)}async function nT(e,t){let n=Bs(e);if(n===void 0||t.aiProvider!==void 0)return!1;try{let r=await Ts(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",...o.localAgentTool===void 0?{localAgentTool:n}:{}},result:o.localAgentTool??n}:{update:null,result:void 0});return r===void 0?(Ve.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",e),!1):(Ve.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",r,e),!0)}catch(r){return Ve.info("Failed to seed default local-agent provider: %s",r.message),!1}}async function QO(e,t=Zl()){let n=await se(),r=Fb(n),o=(0,Ye.join)(e,".jolli","jollimemory",tT),s=(0,ge.existsSync)(o);if(r&&s)try{(0,ge.rmSync)(o)}catch{}return zO(t,r,s)}async function rT(e,t){return(await By(t)).readFile(`summaries/${e}.json`)}async function ZO(e,t){try{let n=await rT(e,t);return n?jh(JSON.parse(n)):!1}catch(n){return Ve.info("Failed to check auth-failure state for %s: %s",e.substring(0,8),n.message),!1}}async function eD(e,t=Zl()){let n=Bs(t);if(n===void 0)return null;let r=iT(e);if(!r)return null;let o=await _o(e);if(!o)return null;let s=o.entries.filter(l=>l.branch===r&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(s.length===0)return null;let i=[...s].sort((l,c)=>new Date(q(c)).getTime()-new Date(q(l)).getTime())[0];if(!await ZO(i.commitHash,e))return null;let a=await se();return jb(a.localAgentTool??n)}async function tD(){if(On()){Ve.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let e=await ca(),{cwd:t}=JSON.parse(e),n=Qu(t??process.cwd());if(is(n),Ve.info("SessionStartHook invoked (cwd=%s)",n),await $t(n)){Ve.info("SessionStart hook skipped \u2014 repository manually disabled");return}let r=await Iu(n,"shared",{includeBriefing:!0,includePluginReminders:!1});r?process.stdout.write(r):Ve.info("No briefing or reminder generated (skipped or timed out)");let{triggerEnsureGlobalDaemon:o}=await Promise.resolve().then(()=>(vu(),Ru));o()}catch(e){Ve.info("SessionStartHook failed: %s",e.message)}}async function Iu(e,t,n={}){let r=n.includeBriefing!==!1,o=n.includePluginReminders!==!1,[s,i,a]=await Promise.all([r?Promise.race([nD(e,t),Au(ka)]):Promise.resolve(null),o?Promise.race([eD(e,t),Au(ka)]):Promise.resolve(null),o?Promise.race([QO(e,t),Au(ka)]):Promise.resolve(null)]),l=[i,a,s].filter(c=>!!c);return l.length===0?null:(Ve.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function nD(e,t){let n=Ra(e),r=iT(e,n);if(!r||KO.has(r))return null;let o=cD(e,r,t,n);if(o)return o;let s=await _o(e);if(!s)return null;let i=s.entries.filter(h=>h.branch===r&&(h.parentCommitHash===null||h.parentCommitHash===void 0));if(i.length===0)return null;let a=[...i].sort((h,E)=>new Date(q(E)).getTime()-new Date(q(h)).getTime()),l=a[0],c=a[a.length-1];if(a.length===1&&uD(q(l)))return null;let d=await rD(l.commitHash,e),u=oD(e,r),p=sD(a),m=iD(r,a,l,c,d,u,p,t),g=sT(e,n);return dD(e,r,g??l.commitHash,m,t),m}async function rD(e,t){try{let n=await rT(e,t);if(!n)return{lastTopicTitle:null,keyDecisions:[]};let r=JSON.parse(n),o=ir(r),s=o.length>0?o[o.length-1].title:null,i=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&i.push(a.decisions);return{lastTopicTitle:s,keyDecisions:i}}catch(n){return Ve.info("Failed to load last summary: %s",n.message),{lastTopicTitle:null,keyDecisions:[]}}}function oD(e,t){try{let n=(0,Ye.join)(e,".jolli","jollimemory","plans.json");if(!(0,ge.existsSync)(n))return[];let r=JSON.parse((0,ge.readFileSync)(n,"utf-8")),o=Am(r).registry,s=[];for(let i of Object.values(o.plans))!i.commitHash&&i.title&&s.push(i.title);return s}catch{return[]}}function sD(e){let t=0,n=0,r=0,o=!1;for(let s of e)s.diffStats&&(t+=s.diffStats.filesChanged,n+=s.diffStats.insertions,r+=s.diffStats.deletions,o=!0);return o?{filesChanged:t,insertions:n,deletions:r}:null}function iD(e,t,n,r,o,s,i,a){let l=t.length,c=Zb(q(r)),d=Zb(q(n)),u=pD(q(n),new Date().toISOString()),p=[];p.push(`[Jolli Memory \u2014 ${e}]`);let m=`${l} commits (${c} ~ ${d})`;i&&(m+=` | ${i.filesChanged} files, +${i.insertions} -${i.deletions}`),p.push(m);let g=o.lastTopicTitle??n.commitMessage;if(p.push(`Last: ${g} (${d})`),o.keyDecisions.length>0){let E=lD(o.keyDecisions);p.push(`Decisions: ${E}`)}s.length>0&&p.push(`Plans: ${s.join("; ")}`);let h=aD(u,a);return h&&p.push(h),p.join(`
`)}function aD(e,t){if(e<=0)return null;let n=Yl(t,"recall")??"`jolli recall`";return e>3?`Warning: ${e} days since last commit. Run ${n} for full context.`:`Tip: run ${n} for full context`}function lD(e){let n=[],r=0;for(let o of e){let s=o.replace(/[.;]\s*$/,"").trim();if(s.length>200&&(s=`${s.slice(0,199)}\u2026`),r+s.length>200&&n.length>0)break;n.push(s),r+=s.length+2}return n.join("; ")}function oT(e){return(0,Ye.join)(e,".jolli","jollimemory","briefing-cache.json")}function cD(e,t,n,r=Ra(e)){let o=oT(e);if(!(0,ge.existsSync)(o))return null;try{let s=JSON.parse((0,ge.readFileSync)(o,"utf-8"));if(s.branch!==t||s.clientKind!==n)return null;let i=sT(e,r);return!i||s.lastCommitHash!==i?null:s.briefingText}catch{return null}}function dD(e,t,n,r,o){let s=oT(e),i={branch:t,lastCommitHash:n,briefingText:r,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,Ye.dirname)(s);(0,ge.existsSync)(a)||(0,ge.mkdirSync)(a,{recursive:!0});let l=`${s}.${process.pid}.tmp`;(0,ge.writeFileSync)(l,JSON.stringify(i,null,"	"),"utf-8"),(0,ge.renameSync)(l,s)}catch{}}function Ra(e){return ze(e)}function sT(e,t=Ra(e)){let n=t?Uu(t):null;if(n)return n;try{return Se("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function iT(e,t=Ra(e)){let n=t?Hu(t):null;if(n)return n;if(t)return null;try{return Se("git",["branch","--show-current"],{encoding:"utf-8",cwd:e}).trim()||null}catch{return null}}function Au(e){return new Promise(t=>{setTimeout(()=>t(null),e).unref()})}function uD(e){let t=new Date(e),n=new Date;return t.getFullYear()===n.getFullYear()&&t.getMonth()===n.getMonth()&&t.getDate()===n.getDate()}function pD(e,t){let n=new Date(e).getTime(),r=new Date(t).getTime();return Math.floor(Math.abs(r-n)/(1e3*60*60*24))}function Zb(e){return e?e.split("T")[0]:"unknown"}function mD(){let e=process.argv[1];if(process.env.VITEST||!e||(0,Ye.resolve)(e)!==(0,Ye.resolve)((0,eT.fileURLToPath)(__jmImportMetaUrl)))return!1;let t=(0,Ye.basename)(e).toLowerCase();return t==="sessionstarthook.js"||t==="sessionstarthook.ts"}mD()&&(YO(),tD());var vr=f("PluginBootstrapHook"),xu="claude-plugin",aT={timeoutMs:200,pollMs:25};function zo(e,t){return!e&&!t?null:{hookSpecificOutput:{hookEventName:"SessionStart",...e?{reloadSkills:!0}:{},...t?{additionalContext:t}:{}}}}async function fD(e){let t=ze(e,{realpath:!0})?.worktreeRoot;if(t)return ke(t);if(!await jn(e))return null;let n=await Y(["rev-parse","--show-toplevel"],e);return n.exitCode!==0||!n.stdout.trim()?null:n.stdout.trim()}async function cT(e,t){let n=await fD(e);if(n===null)return null;is(n);let r=await ia(n),o=await Cm(n),s=!1;if(!(await Wa(n,async()=>{if(await ra(n),await aa(n),await Xr(n,[...Sr]),s=await $t(n),s){await sb(n,{preserveMenu:!0,repoLockHeld:!0});return}if((await se()).claudeEnabled!==!1&&t?.sessionId&&t.transcriptPath)try{await km({sessionId:t.sessionId,transcriptPath:t.transcriptPath,updatedAt:new Date().toISOString(),source:"claude"},n)}catch(m){vr.warn("Plugin bootstrap could not record the first session: %s",m.message)}},aT)).acquired){vr.info("Plugin bootstrap deferred \u2014 repo hook lifecycle lock is busy");let p=!r&&await ia(n);return zo(p,null)}let a=!r&&await ia(n);if(s)return zo(a,null);let l=await ob(n,{repoHooksOnly:!0,sourceTag:xu,respectManualDisable:!0,automatic:!0});if(!l.success)return vr.warn("Plugin repo-hook reconciliation failed: %s",l.message),await ba(n,t?.sessionId,"claude").done,zo(a,null);let c,d=null,u=!1;try{u=!(await Wa(n,async()=>{if(await $t(n))return;let m=await se();if(m.claudeEnabled===!1)return;await nT(xu,m),c=ba(n,t?.sessionId,"claude");let g=o.stop&&o.sessionStart;d=await Iu(n,xu,{includeBriefing:!g,includePluginReminders:!0})},aT)).acquired}finally{c??=ba(n,t?.sessionId,"claude"),await c.done}return u&&vr.info("Plugin context deferred \u2014 repo hook lifecycle lock is busy"),zo(a,d)}async function dT(){if(On()){vr.info("Plugin bootstrap skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let e=await ca(),t=e.trim()?JSON.parse(e):{},n=await cT(t.cwd??process.cwd(),{sessionId:t.session_id,transcriptPath:t.transcript_path});n&&process.stdout.write(JSON.stringify(n));let{triggerEnsureGlobalDaemon:r}=await Promise.resolve().then(()=>(vu(),Ru));r()}catch(e){vr.info("Plugin bootstrap failed: %s",e.message)}}function gD(){let e=(0,lT.fileURLToPath)(__jmImportMetaUrl),t=process.argv[1];return!process.env.VITEST&&!!t&&(0,Cu.resolve)(t)===(0,Cu.resolve)(e)}gD()&&dT().catch(()=>{console.error("[PluginBootstrapHook] Fatal error: bootstrap failed."),process.exit(0)});0&&(module.exports={buildPluginBootstrapOutput,main,runPluginBootstrap});
