#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var um=Object.create;var hn=Object.defineProperty;var pm=Object.getOwnPropertyDescriptor;var mm=Object.getOwnPropertyNames;var fm=Object.getPrototypeOf,gm=Object.prototype.hasOwnProperty;var f=(e,t,n)=>()=>{if(n)throw n[0];try{return e&&(t=e(e=0)),t}catch(r){throw n=[r],r}};var D=(e,t)=>{for(var n in t)hn(e,n,{get:t[n],enumerable:!0})},si=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of mm(t))!gm.call(e,o)&&o!==n&&hn(e,o,{get:()=>t[o],enumerable:!(r=pm(t,o))||r.enumerable});return e};var ii=(e,t,n)=>(n=e!=null?um(fm(e)):{},si(t||!e||!e.__esModule?hn(n,"default",{value:e,enumerable:!0}):n,e)),ym=e=>si(hn({},"__esModule",{value:!0}),e);function di(){return _m.getStore()?.traceId}var ci,HT,_m,ui=f(()=>{"use strict";ci=require("node:async_hooks"),HT="0".repeat(32),_m=new ci.AsyncLocalStorage});function R(e){return e instanceof Error?e.message:String(e)}function $(e){return e instanceof Error&&e.code==="ENOENT"}function Qr(e){fi=e}function Am(e,t){let n=km[t]??wm;return pi[e]>=pi[n]}function Im(e,t,n,r,o){let s=new Date().toISOString(),i=e.toUpperCase().padEnd(5),a=n,l=0;a=a.replace(/%[sdj]/g,d=>{if(l>=r.length)return d;let p=r[l++];return d==="%d"?String(Number(p)):d==="%j"?JSON.stringify(p):String(p)});let c=o?` [trace=${o}]`:"";return`[${s}] ${i} [${t}]${c} ${a}`}function le(e){let t=e??fi??process.cwd();return(0,dt.join)(t,Em,Tm)}function Ot(e){return String(e).padStart(2,"0")}async function vm(e,t){let n=new Date,r=`${n.getUTCFullYear()}-${Ot(n.getUTCMonth()+1)}-${Ot(n.getUTCDate())}_${Ot(n.getUTCHours())}-${Ot(n.getUTCMinutes())}-${Ot(n.getUTCSeconds())}`;try{let o=(0,dt.join)(e,`debug_${r}.log`);for(let s=1;await Om(o);s++)o=(0,dt.join)(e,`debug_${r}_${s}.log`);await(0,ae.rename)(t,o)}catch{return}try{let o=(await(0,ae.readdir)(e)).filter(s=>Nm.test(s)).sort();for(let s=0;s<o.length-Dm;s++)await(0,ae.unlink)((0,dt.join)(e,o[s])).catch(()=>{})}catch{}}async function Om(e){try{return await(0,ae.stat)(e),!0}catch{return!1}}function Lm(e){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||Rm||(mi=mi.then(async()=>{try{let t=le(),n=(0,dt.join)(t,bm);await(0,ae.stat)(t);try{(await(0,ae.stat)(n)).size>xm&&await vm(t,n)}catch{}await(0,ae.appendFile)(n,`${e}
`,"utf-8")}catch{}}))}function y(e){function t(n,r,o){let s=Im(n,e,r,o,di());Cm&&(n==="info"||n==="debug")||(n==="warn"?console.warn(s):console.error(s)),Am(n,e)&&Lm(s)}return{debug(n,...r){t("debug",n,r)},info(n,...r){t("info",n,r)},warn(n,...r){t("warn",n,r)},error(n,...r){t("error",n,r)}}}var ae,dt,Em,Tm,bm,fi,Rm,pi,wm,km,Cm,mi,xm,Dm,Nm,b=f(()=>{"use strict";ae=require("node:fs/promises"),dt=require("node:path");ui();Em=".jolli",Tm="jollimemory",bm="debug.log";Rm=!1,pi={debug:0,info:1,warn:2,error:3},wm="info",km={},Cm=!0;mi=Promise.resolve(),xm=2*1024*1024,Dm=10,Nm=/^debug_.*\.log$/});function _n(e,t,n){return(0,gi.promisify)(ve.execFile)(e,t,{...Sn,...n??{}})}function ut(e,t,n){return(0,ve.execFileSync)(e,t,{...Sn,...n??{}})}var ve,gi,Sn,Zr,Oe=f(()=>{"use strict";ve=require("node:child_process"),gi=require("node:util"),Sn={windowsHide:!0};Zr=((e,t,n)=>Array.isArray(t)?(0,ve.spawn)(e,t,{...Sn,...n??{}}):(0,ve.spawn)(e,{...Sn,...t??{}}))});function W(e){return En(e,process.platform)}function En(e,t){let n=pt(e.replace(/\\/g,"/"));return t==="win32"||t==="darwin"?n.toLowerCase():n}function pt(e){let t=e.length;for(;t>0&&e[t-1]==="/";)t--;return t===e.length?e:e.slice(0,t)}function eo(e,t){let n=W(e),r=W(t);return n===r||n.startsWith(`${r}/`)}function J(e){return e.replace(/\\/g,"/")}var V=f(()=>{"use strict"});function Fm(e){return Mm.some(t=>(e[t]??"")!=="")}function to(e){try{return(0,mt.readFileSync)(e,"utf-8")}catch{return null}}function no(e){try{return(0,mt.realpathSync)(e)}catch{return(0,X.resolve)(e)}}function Tn(e){try{return(0,mt.statSync)(e).isDirectory()}catch{return!1}}function yi(e,t){let n=to((0,X.join)(e,"HEAD"))?.trim();return!n||!(Hm.test(n)||jm.test(n))?!1:Tn((0,X.join)(t,"objects"))&&Tn((0,X.join)(t,"refs"))}function $m(e,t,n){let r=/^gitdir:\s*(.+)$/m.exec(t);if(!r)return null;let o=r[1].trim();if(!o)return null;let s=(0,X.isAbsolute)(o)?o:(0,X.resolve)(e,o);return Tn(s)?n?no(s):s:null}function hi(e,t){let n=to((0,X.join)(e,"commondir"))?.trim();if(!n)return e;let r=(0,X.isAbsolute)(n)?n:(0,X.resolve)(e,n);return t?no(r):r}function Lt(e,t={}){let{env:n=process.env,realpath:r=!1}=t;if(Fm(n))return null;let o=r?no(e):(0,X.resolve)(e);for(;;){let s=(0,X.join)(o,".git");if(Tn(s)){let l=hi(s,r);return yi(s,l)?{worktreeRoot:o,gitDir:s,commonDir:l}:null}let i=to(s);if(i!==null){let l=$m(o,i,r);if(l===null)return null;let c=hi(l,r);return yi(l,c)?{worktreeRoot:o,gitDir:l,commonDir:c}:null}let a=(0,X.dirname)(o);if(a===o)return null;o=a}}function ro(e){if(!e||!(0,X.isAbsolute)(e))return null;let t=Lt(e,{realpath:!0,env:Um})?.commonDir;return t?W(t):null}var mt,X,Mm,Um,Hm,jm,bn=f(()=>{"use strict";mt=require("node:fs"),X=require("node:path");V();Mm=["GIT_DIR","GIT_WORK_TREE","GIT_COMMON_DIR"];Um={};Hm=/^[0-9a-f]{40}$|^[0-9a-f]{64}$/,jm=/^ref:\s*refs\//});function Km(){let e={...process.env,LC_ALL:"C"};for(let t of Bm)delete e[t];return e}function Si(e){return Gm(e)??e}function Gm(e){let t=oo.get(e);if(t!==void 0)return t;let n=Lt(e,{realpath:!0})?.worktreeRoot;if(n){let o=J(n);return oo.set(e,o),o}let r=null;try{let o=ut("git",["rev-parse","--show-toplevel"],{cwd:e,encoding:"utf-8",env:Km(),stdio:["ignore","pipe","pipe"]}).trim();o&&(r=o)}catch{}return oo.set(e,r),r}async function be(e,t){so.debug("git %s%s",t?`[cwd=${t}] `:"",e.join(" "));try{let{stdout:n,stderr:r}=await _n("git",e,{maxBuffer:Wm,env:{...process.env,LC_ALL:"C"},...t!==void 0&&{cwd:t}});return{stdout:n.trimEnd(),stderr:r.trim(),exitCode:0}}catch(n){let r=n,o=typeof r.code=="number"?r.code:r.code==="ENOENT"?127:1,s={stdout:(r.stdout??"").trimEnd(),stderr:(r.stderr??r.message??"").trim(),exitCode:o};return so.debug("git command failed (exit: %d, stderr: %s)",o,s.stderr.substring(0,200)),s}}async function qm(e){let t=await be(["rev-parse","--git-common-dir"],e);if(t.exitCode!==0)throw new Error(`Failed to get git common dir: ${t.stderr}`);let n=t.stdout.trim();return(0,ge.resolve)(e,n)}async function Pt(e){let t=await qm(e);return(0,ge.dirname)(t)}async function io(e){let t=await be(["worktree","list","--porcelain"],e);if(t.exitCode!==0)throw new Error(`Failed to list worktrees: ${t.stderr}`);return t.stdout.split(`
`).filter(r=>r.startsWith("worktree ")).map(r=>r.slice(9).trim())}async function _i(e){let t=new Set,n=[],r=o=>{let s=W(o);t.has(s)||(t.add(s),n.push(o))};r(e);try{for(let o of await io(e))r(o)}catch(o){so.debug("listWorktrees failed for %s -- using it as the only root: %s",e,R(o))}return n}async function Ei(e){let t=(0,ge.join)(e,".git");if((await(0,Rn.stat)(t)).isDirectory())return(0,ge.join)(t,"hooks");let r=await(0,Rn.readFile)(t,"utf-8"),o=r.trim().match(/^gitdir:\s*(.+)$/);if(!o)throw new Error(`Unexpected .git file content: ${r.trim()}`);let s=o[1].trim(),i=(0,ge.resolve)(e,s),a=i.replace(/\\/g,"/").lastIndexOf("/worktrees/");if(a>=0){let l=i.substring(0,a);return(0,ge.join)(l,"hooks")}return(0,ge.join)(i,"hooks")}var Rn,ge,Wm,so,oo,Bm,ie=f(()=>{"use strict";Rn=require("node:fs/promises"),ge=require("node:path");b();Oe();bn();V();Wm=10*1024*1024,so=y("GitOps"),oo=new Map,Bm=["GIT_DIR","GIT_WORK_TREE","GIT_INDEX_FILE","GIT_COMMON_DIR","GIT_PREFIX","GIT_OBJECT_DIRECTORY","GIT_NAMESPACE"]});function B(e,t){return e.filter(n=>n.dirs.some(t)).map(n=>n.session)}var ce=f(()=>{"use strict"});async function ft(e,t,n){let r=`${e}.${process.pid}.${(0,Ti.randomUUID)()}.tmp`;await(0,Je.writeFile)(r,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n});try{await(0,Je.rename)(r,e)}catch(o){let s=o.code;if(s==="EPERM"||s==="EACCES")await(0,Je.writeFile)(e,t,n===void 0?"utf-8":{encoding:"utf-8",mode:n}),await(0,Je.rm)(r,{force:!0});else throw o}}var Ti,Je,Mt=f(()=>{"use strict";Ti=require("node:crypto"),Je=require("node:fs/promises")});function Ri(e=process.env,t=(0,bi.homedir)(),n=process.platform){let r=e.HERMES_HOME?.trim();if(r&&r.length>0)return r;if(n==="win32"){let o=e.LOCALAPPDATA?.trim();return(0,wn.join)(o&&o.length>0?o:(0,wn.join)(t,"AppData","Local"),"hermes")}return(0,wn.join)(t,".hermes")}var bi,wn,tb,wi=f(()=>{"use strict";bi=require("node:os"),wn=require("node:path");b();Mt();tb=y("HermesConfigPaths")});function z(e,t){if(!e)return!1;let n=ro(e);if(n!==null){let s=ro(t);if(s!==null)return n===s}if(!eo(e,t))return!1;let r=W(t);if(W(e)===r)return!0;let o=e;for(;W(o)!==r;){if((0,ki.existsSync)((0,kn.join)(o,".git")))return!1;let s=(0,kn.dirname)(o);if(s===o)break;o=s}return!0}var ki,kn,Re=f(()=>{"use strict";ki=require("node:fs"),kn=require("node:path");bn();V()});async function v(e,t,n={}){let r=n.maxAttempts??3,o=n.baseDelayMs??150,{DatabaseSync:s}=await import("node:sqlite");for(let i=1;;i++){let a;try{return a=new s(e,{readOnly:!0}),t(a)}catch(l){if(O(l)?.kind!=="locked"||i>=r)throw l;await new Promise(d=>setTimeout(d,o*2**(i-1)))}finally{a?.close()}}}function Ci(e,t){let n=e.prepare(`PRAGMA table_info("${t.replace(/"/g,'""')}")`).all(),r=new Set;for(let o of n)typeof o.name=="string"&&r.add(o.name);return r}function oe(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>Le.major?!0:n<Le.major?!1:r>=Le.minor}function O(e){let t=e,n=t?.message??String(e),r=t?.code;return r==="ENOENT"?null:r==="EACCES"||r==="EPERM"?{kind:"permission",message:n}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(n)?{kind:"corrupt",message:n}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(n)?{kind:"locked",message:n}:/no such table|no such column/i.test(n)?{kind:"schema",message:n}:/SQLITE_CANTOPEN|unable to open/i.test(n)?{kind:"permission",message:n}:{kind:"unknown",message:n}}var Le,Y=f(()=>{"use strict";Le={major:22,minor:13}});var In={};D(In,{discoverHermesSessions:()=>co,getHermesHomeDir:()=>Cn,getHermesStateDbPath:()=>Ym,hermesSessionsForRepo:()=>xi,isHermesInstalled:()=>ao,isHermesPresent:()=>Vm,listHermesStateDbPaths:()=>An,scanHermesSessions:()=>Di,scanHermesSessionsAt:()=>Ni,scanHermesSessionsOnDisk:()=>Qm,scanHermesSessionsOnDiskAt:()=>lo});function Cn(e){return Ri(process.env,e??(0,Ai.homedir)(),process.platform)}function Ym(e){return(0,Ft.join)(Cn(e),"state.db")}async function An(e){let t=Cn(e),n=[(0,Ft.join)(t,"state.db")],r;try{r=(await(0,Xe.readdir)((0,Ft.join)(t,"profiles"),{withFileTypes:!0})).filter(s=>s.isDirectory()).map(s=>s.name)}catch{return n}for(let o of r){let s=(0,Ft.join)(t,"profiles",o,"state.db");try{(await(0,Xe.stat)(s)).isFile()&&n.push(s)}catch{}}return n}async function ao(){return oe()?Ii():(ye.info("Hermes support disabled: this runtime is Node %s, requires 22.13+ for built-in SQLite",process.versions.node),!1)}async function Ii(){for(let e of await An())try{if((await(0,Xe.stat)(e)).isFile())return!0}catch{}return!1}async function Vm(){if(await Ii())return!0;try{return(await(0,Xe.stat)(Cn())).isDirectory()}catch{return!1}}function zm(e,t){let n=[];for(let r of[e,t]){if(typeof r!="string")continue;let o=r.trim();o.length===0||n.includes(o)||n.push(o)}return n}async function Qm(e){return lo(await An(),e)}async function lo(e,t){if(!oe())return ye.debug("Hermes scan skipped: runtime Node %s lacks node:sqlite (requires 22.13+)",process.versions.node),{sessions:[]};let n=Date.now()-(t??Jm),r=[],o;for(let s of e){let i=await Zm(s,n);r.push(...i.sessions),i.error&&o===void 0&&(o=i.error)}return ye.debug("Hermes disk scan: %d session(s) inside the window across %d db(s)",r.length,e.length),o?{sessions:r,error:o}:{sessions:r}}async function Zm(e,t){try{await(0,Xe.stat)(e)}catch(n){if(n.code!=="ENOENT"){let o=O(n);return o?(ye.error("Hermes DB stat failed (%s): %s",o.kind,o.message),{sessions:[],error:o}):{sessions:[]}}return ye.debug("Hermes DB not present at %s \u2014 treating as not installed",e),{sessions:[]}}try{return{sessions:await v(e,r=>{let o=Ci(r,"sessions"),s=Xm.filter(d=>!o.has(d));s.length>0&&ye.info("Hermes DB %s predates column(s) %s \u2014 reading it without them",e,s.join(", "));let i=d=>o.has(d)?`"${d}"`:"NULL",a=`COALESCE(${i("last_activity_at")}, started_at)`,l=o.has("hidden")?"hidden = 0 AND ":"";return r.prepare(`SELECT id,
					        ${i("title")} AS title,
					        ${i("cwd")} AS cwd,
					        ${i("git_repo_root")} AS git_repo_root,
					        ${a} AS activity_at
					 FROM sessions
					 WHERE ${l}${a} > :cutoff`).all({cutoff:t/1e3}).flatMap(d=>{if(!Number.isFinite(d.activity_at))return ye.warn("Skipping Hermes session %s: non-finite activity timestamp",d.id),[];let p=typeof d.title=="string"&&d.title.trim().length>0?d.title:void 0;return[{session:{sessionId:String(d.id),transcriptPath:`${e}#${d.id}`,updatedAt:new Date(d.activity_at*1e3).toISOString(),source:"hermes",...p!==void 0?{title:p}:{}},dirs:zm(d.git_repo_root,d.cwd)}]})})}}catch(n){let r=O(n);return r===null?(ye.debug("Hermes DB disappeared between detection and scan: %s",n.message),{sessions:[]}):(ye.error("Hermes scan failed (%s): %s",r.kind,r.message),{sessions:[],error:r})}}function xi(e,t){let n=B(e,r=>z(r,t));return ye.debug("Discovered %d Hermes session(s) for %s",n.length,t),n}async function Di(e,t){return Ni(await An(),e,t)}async function Ni(e,t,n){let{sessions:r,error:o}=await lo(e,n),s=xi(r,t);return o?{sessions:s,error:o}:{sessions:s}}async function co(e,t){let{sessions:n}=await Di(e,t);return n}var Xe,Ai,Ft,ye,Jm,Xm,Ut=f(()=>{"use strict";Xe=require("node:fs/promises"),Ai=require("node:os"),Ft=require("node:path");b();ce();wi();Re();Y();ye=y("HermesDiscoverer"),Jm=2880*60*1e3,Xm=["title","cwd","git_repo_root","last_activity_at"]});async function xn(e,t,n={}){await(0,Pe.mkdir)((0,vi.dirname)(e),{recursive:!0});let r=`${e}.${process.pid}.tmp`;await(0,Pe.writeFile)(r,t,n.mode!==void 0?{encoding:"utf-8",mode:n.mode}:"utf-8");try{await(0,Pe.rename)(r,e)}catch(o){throw await(0,Pe.unlink)(r).catch(()=>{}),o}}var Pe,vi,uo=f(()=>{"use strict";Pe=require("node:fs/promises"),vi=require("node:path")});function ef(e){return new Promise(t=>setTimeout(t,e))}function Li(e){let t=Number(e);if(!Number.isInteger(t)||t<=0)return!1;if(t===process.pid)return!0;try{return process.kill(t,0),!0}catch(n){return n.code!=="ESRCH"}}async function po(e){try{let t=await(0,he.stat)(e),n=Date.now()-t.mtimeMs,r=await Pi(e),o=r!==null&&!Li(r);if(!o&&n<Oi)return!1;o?Ht.warn("Removing orphaned lock %s (PID %s no longer running)",e,r):Ht.warn("Removing stale lock file %s (age: %dms)",e,n),await(0,he.rm)(e,{force:!0})}catch(t){if(t.code!=="ENOENT")return Ht.error("Failed to check lock file %s: %s",e,t.message),!1}try{return await(0,he.writeFile)(e,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function Pi(e){try{let n=(await(0,he.readFile)(e,"utf-8")).trim();return n.length>0?n:null}catch{return null}}async function Dn(e,t){let n=await Pi(e);if(n!==null&&n!==String(process.pid)){Ht.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",t,n,process.pid);return}try{await(0,he.rm)(e,{force:!0})}catch(r){Ht.error("Failed to release %s: %s",t,r.message)}}async function Nn(e,t){if(t.timeoutMs<=0)return po(e);let n=Date.now()+t.timeoutMs;for(;;){if(await po(e))return!0;if(Date.now()>=n)return!1;await ef(t.pollMs)}}var he,Ht,Oi,mo=f(()=>{"use strict";he=require("node:fs/promises");b();Ht=y("LockPrimitives"),Oi=300*1e3});var Mi,gb,fo=f(()=>{"use strict";Mi=require("node:async_hooks"),gb=new Mi.AsyncLocalStorage});function rf(e){return _n("git",["rev-parse","--git-common-dir"],{cwd:e})}async function cf(e){let t=e??process.cwd(),n=Ui.get(t);if(n!==void 0)return n;let r;try{let{stdout:o}=await rf(t),s=o.trim(),i=(0,Se.isAbsolute)(s)?s:(0,Se.resolve)(t,s);r=(0,Se.join)(i,"jollimemory")}catch{yo.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",t),r=le(t)}return Ui.set(t,r),r}async function df(e){let t=le(e);return await(0,gt.mkdir)(t,{recursive:!0}),t}async function uf(e){let t=await cf(e);return await(0,gt.mkdir)(t,{recursive:!0}),t}async function pf(e,t,n,r){let o=r.timeoutMs??af,s=r.pollMs??ho;await(0,gt.mkdir)(e,{recursive:!0});let i=(0,Se.join)(e,t),a=await Nn(i,{timeoutMs:o,pollMs:s});a||yo.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",t,o);try{return await n()}finally{a&&await Dn(i,t)}}async function ji(e,t,n={}){return pf(await df(e),of,t,n)}async function $i(e,t,n={}){let r=n.timeoutMs??sf,o=n.pollMs??ho,s=await uf(e),i=(0,Se.join)(s,Fi);if(!await Nn(i,{timeoutMs:r,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await Dn(i,Fi)}}async function So(e,t={}){let n=t.timeoutMs??lf,r=t.pollMs??ho,o=t.globalDir??(0,Se.join)((0,Hi.homedir)(),".jolli","jollimemory");await(0,gt.mkdir)(o,{recursive:!0});let s=(0,Se.join)(o,go),i=await Nn(s,{timeoutMs:n,pollMs:r});i||yo.warn("withRepoRegistryLock: could not acquire %s within %d ms \u2014 proceeding best-effort",go,n);try{return await e()}finally{i&&await Dn(s,go)}}var gt,Hi,Se,yo,Fi,of,go,sf,ho,af,lf,Ui,jt=f(()=>{"use strict";gt=require("node:fs/promises"),Hi=require("node:os"),Se=require("node:path");b();Oe();mo();fo();yo=y("Locks");Fi="profile.lock",of="sessions.lock",go="repo-registry.lock",sf=5e3,ho=25,af=5e3,lf=5e3,Ui=new Map});function yf(e,t){let n={...e,manuallyDisabled:t};return delete n.userDisabled,n}async function hf(e){let t=Lt(e)?.commonDir;if(t)return t;let n=await be(["rev-parse","--git-common-dir"],e),r=n.exitCode===0?n.stdout.trim():"";return r?(0,_e.isAbsolute)(r)?r:(0,_e.join)(e,r):null}async function Sf(e){let t=await hf(e);if(t===null)return{profilePath:(0,_e.join)(le(e),Wi),legacyMarkerPath:null};let n=(0,_e.dirname)(t);return{profilePath:(0,_e.join)(le(n),Wi),legacyMarkerPath:(0,_e.join)(t,mf,ff)}}async function qi(e){try{let t=await(0,$t.readFile)(e,"utf-8"),n=JSON.parse(t);return n&&typeof n=="object"&&!Array.isArray(n)?n:{}}catch{return{}}}async function _f(e){try{return await(0,$t.stat)(e),!0}catch{return!1}}async function Ef(e,t){await xn(e,`${JSON.stringify(t,null,"	")}
`)}function _o(e,t,n,r,o,s){if(e==="read"){let i=`${o}|${t}|${n}`;if(Bi.has(i))return n;Bi.add(i)}return Gi.info("manual-disable %s \u2192 %s (by=%s, pid=%d, cwd=%s, profile=%s, raw: userDisabled=%s manuallyDisabled=%s fence=%s)",e,n,t,process.pid,r,o,String(s.userDisabled),String(s.manuallyDisabled),s.cutoverFence?s.cutoverFence.at:"none"),n}function Tf(){return(new Error("manual-disable write").stack??"(no stack)").split(`
`).slice(1,8).join(" | ").replace(/\s+/g," ")}async function bf(e){let t;try{t=await io(e)}catch{t=[e]}for(let n of t)if(await _f((0,_e.join)(le(n),gf)))return!0;return!1}async function Ji(e){let{profilePath:t}=await Sf(e),n=await qi(t);if(n.userDisabled!==void 0){let s=await Ki(e,t,n.userDisabled===!0);return _o("read","migrate:userDisabled",s,e,t,n)}if(n.manuallyDisabled!==void 0)return _o("read","manuallyDisabled",n.manuallyDisabled===!0,e,t,n);let r=await bf(e),o=await Ki(e,t,r);return _o("read","migrate:legacy-marker",o,e,t,n)}async function Ki(e,t,n){let r=await $i(e,async()=>{let o=await qi(t),s=o.userDisabled??o.manuallyDisabled,i=s===void 0?n:s===!0;return o.userDisabled===void 0&&o.manuallyDisabled!==void 0||(Gi.info("manual-disable MIGRATE \u2192 manuallyDisabled=%s (pid=%d, profile=%s, fence=%s, from=%s) \u2190 %s",i,process.pid,t,o.cutoverFence?o.cutoverFence.at:"none",o.userDisabled!==void 0?"userDisabled":"legacy-marker",Tf()),await Ef(t,yf(o,i))),i}).catch(()=>{});return r?.acquired&&r.value!==void 0?r.value:n}var $t,_e,Gi,Wi,mf,ff,gf,Bi,yt=f(()=>{"use strict";$t=require("node:fs/promises"),_e=require("node:path");b();Oe();uo();bn();ie();jt();Gi=y("RepoProfile"),Wi="profile.json",mf="jollimemory",ff="backfill-card-dismissed",gf="disabled-by-user";Bi=new Set});var Eo=f(()=>{"use strict"});function Xi(e){if(!e.startsWith("sk-jol-"))return null;let t=e.slice(7);if(!t.includes("."))return null;for(let n of t.split("."))try{let r=Buffer.from(n,"base64url").toString("utf-8"),o=JSON.parse(r);if(typeof o.t=="string"&&typeof o.u=="string")return{t:o.t,u:o.u,...typeof o.o=="string"?{o:o.o}:{}}}catch{}return null}function Yi(e){let t;try{t=new URL(e).hostname.toLowerCase()}catch{return!1}return Rf.some(n=>t===n||t.endsWith(`.${n}`))}var Rf,Vi=f(()=>{"use strict";V();Rf=["jolli.ai"]});var Wt=f(()=>{"use strict"});var zi=f(()=>{"use strict"});var Qi=f(()=>{"use strict"});function Zi(e){return Number.isFinite(e)&&e>=0&&e<=1114111&&!(e>=55296&&e<=57343)}function ea(e){return e.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(t,n)=>{if(n.startsWith("#x")){let o=Number.parseInt(n.slice(2),16);return Zi(o)?String.fromCodePoint(o):t}if(n.startsWith("#")){let o=Number.parseInt(n.slice(1),10);return Zi(o)?String.fromCodePoint(o):t}let r=wf[n];return typeof r=="string"?r:t})}var wf,ta=f(()=>{"use strict";wf={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var kf,Cf,na=f(()=>{"use strict";zi();Wt();Qi();ta();kf={decodeHtmlEntities:ea,lowercase:e=>e.toLowerCase()},Cf=new Set(Object.keys(kf))});var ra=f(()=>{"use strict"});var oa=f(()=>{"use strict"});var sa=f(()=>{"use strict"});var bo,Af,Ro,Yb,ia=f(()=>{"use strict";Wt();bo=["mcp__Figma__","mcp__figma__"],Af={get_metadata:"Read structure",get_screenshot:"Viewed screenshot",get_variable_defs:"Read variables",get_figjam:"Read FigJam board",get_design_context:"Read design context"},Ro=Object.keys(Af),Yb=new Set(Ro)});var If,xf,Df,aa=f(()=>{"use strict";ia();If="^[0-9a-zA-Z]{22,128}$",xf=bo.flatMap(e=>Ro.map(t=>`${e}${t}`)),Df={id:"figma",label:"Figma",icon:"symbol-color",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,titleFallbackPattern:"^Figma file [0-9a-zA-Z]{1,8}$",match:{claude:{prefixes:[...bo],exact:xf}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileKey"}],require:If},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://www\\.figma\\.com/"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"figma-files",itemTag:"file",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var la=f(()=>{"use strict"});var ca=f(()=>{"use strict"});var da=f(()=>{"use strict"});var ua=f(()=>{"use strict"});var pa=f(()=>{"use strict"});var ma=f(()=>{"use strict"});var wo,Nf,vf,ko,iR,fa=f(()=>{"use strict";Wt();wo=["mcp__Sentry__","mcp__sentry__"],Nf="get_sentry_resource",vf="analyze_issue_with_seer",ko=[Nf,vf],iR=new Set(ko)});var Of,Lf,Pf,Mf,Ff,ga=f(()=>{"use strict";fa();Of=wo.flatMap(e=>ko.map(t=>`${e}${t}`)),Lf="^[A-Za-z0-9.-]{1,253}/[A-Za-z0-9_-]{1,128}$",Pf="^Issue [A-Za-z0-9_-]{1,128}$",Mf="^Issue [0-9]{1,128}$",Ff={id:"sentry",label:"Sentry",icon:"bug",trackOnly:!0,argumentsDerived:!0,titleFallbackPattern:Pf,titleFallbackPoorestPattern:Mf,match:{claude:{prefixes:[...wo],exact:Of}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"nativeId"}],require:Lf},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://(?:[A-Za-z0-9-]{1,63}\\.)*sentry\\.io/issues/[A-Za-z0-9_-]{1,128}$",requireFlags:"i"},description:{pipe:[{op:"path",path:"detail"}],optional:!0}},fields:[{key:"issue-id",label:"Issue",icon:"bug",pipe:[{op:"path",path:"shortId"}]},{key:"project",label:"Project",icon:"symbol-property",pipe:[{op:"path",path:"project"}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"sentry-issues",itemTag:"issue",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var ya=f(()=>{"use strict"});var ha=f(()=>{"use strict"});var Sa=f(()=>{"use strict"});var _a=f(()=>{"use strict"});var Ea=f(()=>{"use strict";ra();oa();sa();aa();la();ca();da();ua();pa();ma();ga();ya();ha();Sa();_a()});var Co=f(()=>{"use strict";Wt();na();Ea()});var VR,Bt=f(()=>{"use strict";b();Co();VR=y("ReferenceStore")});var Ao=f(()=>{"use strict"});var ew,Ta=f(()=>{"use strict";b();ew=y("SkillStore")});async function Wf(e){let t=le(e);return await(0,de.mkdir)(t,{recursive:!0}),t}async function ka(e,t){let n=await Wf(t);await ji(t,async()=>{let o={...(await Jf(n)).sessions,[e.sessionId]:e},{activeSessions:s,stalePaths:i}=Yf(o),a={version:1,sessions:s};await ft((0,Ye.join)(n,Ra),JSON.stringify(a,null,"	")),i.length>0&&await Vf(n,i)})}async function Bf(e,t,n){await ft((0,Ye.join)(t,n),JSON.stringify(e,null,"	"))}function Kt(){return(0,Ye.join)((0,ba.homedir)(),".jolli","jollimemory")}async function Kf(e){let t=(0,Ye.join)(e,jf);try{let n=await(0,de.readFile)(t,"utf-8"),r=JSON.parse(n);return qf(Gf(r))}catch{return xo.debug("No config file found in %s, using defaults",e),{}}}function Gf(e){if(e.syncEnabled===void 0)return e;let{syncEnabled:t,...n}=e;return n.autoSyncEnabled===void 0?{...n,autoSyncEnabled:t}:n}function qf(e){let t=e.jolliApiKey?Xi(e.jolliApiKey)?.u:void 0;if(!t||!Yi(t))return e;xo.info("Ignoring stored credential for a retired Jolli host \u2014 sign in again");let{authToken:n,jolliApiKey:r,...o}=e;if(o.aiProvider!=="jolli")return o;let{aiProvider:s,...i}=o;return i}async function Do(){return Kf(Kt())}async function Jf(e){let t=(0,Ye.join)(e,Ra);try{let n=await(0,de.readFile)(t,"utf-8");return JSON.parse(n)}catch{return{version:1,sessions:{}}}}async function Xf(e,t=wa){let n=(0,Ye.join)(e,t);try{let r=await(0,de.readFile)(n,"utf-8");return JSON.parse(r)}catch{return{version:1,cursors:{}}}}function Yf(e,t=$f){let n=Date.now(),r={},o=[];for(let[s,i]of Object.entries(e)){let a=n-new Date(i.updatedAt).getTime();a>t?(xo.info("Pruning stale session %s (age: %dh)",s,Math.round(a/36e5)),o.push(i.transcriptPath)):r[s]=i}return{activeSessions:r,stalePaths:o}}async function Vf(e,t){let n=new Set(t);for(let r of[wa,Hf]){let s={...(await Xf(e,r)).cursors},i=0;for(let a of Object.keys(s))n.has(a)&&(delete s[a],i++);i>0&&await Bf({version:1,cursors:s},e,r)}}var Io,de,ba,Ye,xo,Ra,wa,Hf,jf,$f,Sw,_w,Ew,ht=f(()=>{"use strict";Io=require("node:crypto"),de=require("node:fs/promises"),ba=require("node:os"),Ye=require("node:path");b();Eo();Mt();Vi();jt();Bt();Ao();Ta();xo=y("SessionTracker"),Ra="sessions.json",wa="cursors.json",Hf="discovery-cursors.json",jf="config.json",$f=2880*60*1e3;Sw=2880*60*1e3,_w=10080*60*1e3,Ew=(0,Io.randomBytes)(4).toString("hex")});function P(e,t){return Ca.run(e,t)}function zf(){return Ca.width}async function q(e,t,n=zf()){let r=new Array(e.length),o=0,s=Math.max(1,Math.min(n,e.length)),i=Array.from({length:s},async()=>{for(;;){let a=o++;if(a>=e.length)return;r[a]=await t(e[a],a)}});return await Promise.all(i),r}var No,Ca,Me=f(()=>{"use strict";No=class{constructor(){this.slots=8;this.bytesCap=67108864;this.slotsInUse=0;this.bytesInUse=0;this.waiting=[]}get width(){return this.slots}configure(t){t.slots!==void 0&&(this.slots=Math.max(1,Math.floor(t.slots))),t.bytesInFlight!==void 0&&(this.bytesCap=Math.max(0,Math.floor(t.bytesInFlight))),this.pump()}reset(){this.slots=8,this.bytesCap=67108864,this.pump()}async run(t,n){let r=await this.acquire(Math.max(0,t));try{return await n()}finally{this.slotsInUse--,this.bytesInUse-=r,this.pump()}}clamp(t){return Math.min(t,this.bytesCap)}fits(t){return this.slotsInUse<this.slots&&this.bytesInUse+this.clamp(t)<=this.bytesCap}acquire(t){return this.waiting.length===0&&this.fits(t)?Promise.resolve(this.take(t)):new Promise(n=>{this.waiting.push({want:t,wake:n})})}take(t){let n=this.clamp(t);return this.slotsInUse++,this.bytesInUse+=n,n}pump(){for(;this.waiting.length>0&&this.fits(this.waiting[0].want);){let t=this.waiting.shift();t.wake(this.take(t.want))}}},Ca=new No});var Aa=f(()=>{"use strict";Me()});var vo=f(()=>{"use strict";b();ie();yt()});var xa=f(()=>{"use strict"});var Oo,Da=f(()=>{"use strict";Oo="claude-plugin/1.0.7"});function x(e,t,n,r){if(!Na.test(t))throw new Error(`unsafe table name in migration: ${t}`);if(!Na.test(n))throw new Error(`unsafe column name in migration: ${n}`);if(!ng.test(r))throw new Error(`unsafe column declaration in migration: ${r}`);e.prepare("SELECT name FROM pragma_table_info(?)").all(t).some(s=>s.name===n)||e.exec(`ALTER TABLE ${t} ADD COLUMN ${n} ${r};`)}var I,Na,ng,N=f(()=>{"use strict";I=(e,t)=>({name:e,sql:t,run:n=>n.exec(t)}),Na=/^[A-Za-z_][A-Za-z0-9_]*$/,ng=/^[A-Za-z0-9_ '.-]+$/});var rg,og,va,Oa=f(()=>{"use strict";N();rg=`
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
`,og=`
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
`,va=I("BASELINE_DDL",rg+`
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
`+og)});var La,Pa=f(()=>{"use strict";N();La=I("RECALL_RECEIPTS_DDL",`
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
`)});var Ma,Fa=f(()=>{"use strict";N();Ma=I("SKILL_CONTEXT_KIND_DDL",`
INSERT OR IGNORE INTO context_kinds (kind) VALUES ('skill');
`)});var Ua,Ha=f(()=>{"use strict";N();Ua={name:"EVENT_FAILED_KIND_DDL",run:e=>x(e,"events_raw","failed_kind","TEXT")}});var ja,$a=f(()=>{"use strict";N();ja={name:"TOOL_CALL_TIME_DDL",run:e=>x(e,"session_tool_use","last_call_at_ms","INTEGER")}});var Wa,Ba=f(()=>{"use strict";N();Wa=I("SCHEMA_MIGRATIONS_DDL",`
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
`)});var Ka,Ga=f(()=>{"use strict";N();Ka=I("REPOS_DELETE_ALLOWED_DDL",`
DROP TRIGGER IF EXISTS repos_no_delete;
`)});function pg(e){x(e,"sessions","written_at_ms","INTEGER NOT NULL DEFAULT 0"),x(e,"session_model_usage","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),x(e,"session_tool_use","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),x(e,"recall_receipts","updated_at_ms","INTEGER NOT NULL DEFAULT 0"),x(e,"commits","written_at_ms","INTEGER NOT NULL DEFAULT 0"),e.exec(sg),e.exec(ag),e.exec(lg),e.exec(cg),e.exec(ug),e.exec(dg)}var sg,ig,ag,lg,cg,dg,ug,qa,Ja=f(()=>{"use strict";N();sg=`
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
`,ig=`
CREATE INDEX IF NOT EXISTS ix_stats_daily_day ON stats_daily(tz, day);
`,ag=`
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
${ig}
`,lg=`
CREATE INDEX IF NOT EXISTS ix_sessions_written ON sessions(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_smu_sync ON session_model_usage(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_stu_sync ON session_tool_use(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_sync ON recall_receipts(updated_at_ms);
CREATE INDEX IF NOT EXISTS ix_commits_written ON commits(written_at_ms);
CREATE INDEX IF NOT EXISTS ix_mem_written ON memories(written_at_ms);
`,cg=`
CREATE INDEX IF NOT EXISTS ix_sessions_keyset ON sessions(written_at_ms, event_id);
CREATE INDEX IF NOT EXISTS ix_smu_keyset ON session_model_usage(updated_at_ms, session_event_id, model);
CREATE INDEX IF NOT EXISTS ix_stu_keyset ON session_tool_use(updated_at_ms, session_event_id, tool_name, kind);
CREATE INDEX IF NOT EXISTS ix_recall_receipts_keyset ON recall_receipts(updated_at_ms, receipt_id);
`,dg=`
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
`,ug=`
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
`;qa={name:"SESSION_STATS_SYNC_DDL",run:pg}});var Xa,Ya=f(()=>{"use strict";N();Xa=I("SESSION_ACTIVITY_DDL",`
CREATE TABLE IF NOT EXISTS session_activity (
  session_event_id TEXT NOT NULL REFERENCES sessions(event_id) ON DELETE CASCADE,
  bucket_ms        INTEGER NOT NULL,
  recorded_at_ms   INTEGER NOT NULL,
  PRIMARY KEY (session_event_id, bucket_ms)
) STRICT;
CREATE INDEX IF NOT EXISTS ix_activity_bucket ON session_activity(bucket_ms);
CREATE INDEX IF NOT EXISTS ix_activity_recorded ON session_activity(recorded_at_ms);
`)});var Va,za=f(()=>{"use strict";N();Va={name:"SKILL_TOKEN_USAGE_DDL",run:e=>{x(e,"session_tool_use","input_tokens","INTEGER"),x(e,"session_tool_use","output_tokens","INTEGER"),x(e,"session_tool_use","cached_tokens","INTEGER"),x(e,"session_tool_use","usage_confidence","TEXT")}}});var Qa,Za=f(()=>{"use strict";N();Qa=I("SKILL_INVOCATIONS_DDL",`
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
`)});var el,tl=f(()=>{"use strict";N();el={name:"SKILL_PLUGIN_DDL",run:e=>x(e,"session_tool_use","plugin","TEXT")}});var nl,rl=f(()=>{"use strict";N();nl={name:"SKILL_ORIGIN_ROOT_DDL",run:e=>x(e,"session_tool_use","origin_root","TEXT")}});var ol,sl=f(()=>{"use strict";N();ol=I("2026-08-25-0000-memory-transcripts-covering-index",`
CREATE INDEX IF NOT EXISTS ix_mt_transcript_covering
  ON memory_transcripts(repo_id, transcript_id, commit_hash);
`)});var il,al=f(()=>{"use strict";N();il={name:"2026-08-25-0001-memory-reachable",run:e=>x(e,"memories","reachable","INTEGER NOT NULL DEFAULT 1")}});var ll,cl=f(()=>{"use strict";N();ll={name:"2026-08-25-0002-commit-reachable",run:e=>x(e,"commits","reachable","INTEGER NOT NULL DEFAULT 1")}});var dl,ul=f(()=>{"use strict";N();dl=I("2026-08-26-0000-memory-lookups",`
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
`)});var pl,ml=f(()=>{"use strict";N();pl=I("2026-08-27-0804-session-activity-keyset-index",`
CREATE INDEX IF NOT EXISTS ix_activity_keyset
  ON session_activity(recorded_at_ms, session_event_id, bucket_ms);
`)});var fl,gl=f(()=>{"use strict";N();fl=I("2026-08-27-0824-session-turns",`
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
`)});var yl,hl=f(()=>{"use strict";N();yl={name:"2026-08-27-0922-skill-invocation-sync-stamp",run:e=>x(e,"skill_invocations","updated_at_ms","INTEGER NOT NULL DEFAULT 0")}});var Sl,_l=f(()=>{"use strict";N();Sl=I("2026-08-28-0516-session-turns-keyset-index",`
CREATE INDEX IF NOT EXISTS ix_turns_keyset
  ON session_turns(recorded_at_ms, session_event_id, slice_id, seq);
`)});var El,Tl=f(()=>{"use strict";N();El=I("2026-08-28-0910-skill-invocation-keyset-index",`
CREATE INDEX IF NOT EXISTS ix_si_keyset
  ON skill_invocations(updated_at_ms, session_event_id, skill_name, at_ms);
`)});var Gt,Lo=f(()=>{"use strict";Oa();Pa();Fa();Ha();$a();Ba();Ga();Ja();Ya();za();Za();tl();rl();sl();al();cl();ul();ml();gl();hl();_l();Tl();N();Gt=[va,La,Ma,Ua,ja,Wa,Ka,qa,Xa,Va,Qa,el,nl,ol,il,ll,dl,pl,fl,yl,Sl,El]});function fg(e=process.env){let t=e.JOLLI_SLOW_SQL_MS?.trim();if(t===void 0||t==="")return bl;if(t.toLowerCase()==="off")return null;let n=Number(t);return Number.isFinite(n)&&n>=0?n:bl}function gg(e){let t=e.replace(/\s+/g," ").trim();return t.length>Rl?`${t.slice(0,Rl)}\u2026`:t}function yg(e){let t=e.rows===void 0?"":` rows=${e.rows}`;mg.info("%dms %s [%s] params=%d%s :: %s",Math.round(e.ms),e.method,e.role,e.params,t,e.sql)}function wl(e,t={}){let n="thresholdMs"in t?t.thresholdMs:fg();if(n==null)return e;let r=t.now??(()=>performance.now()),o=t.onSlow??yg,s=t.role??"rw",i=(l,c,d,p)=>{let m=r(),g;try{let u=p();return l==="all"&&Array.isArray(u)&&(g=u.length),u}finally{let u=r()-m;u>=n&&o({ms:u,method:l,sql:gg(c),params:d,role:s,...g===void 0?{}:{rows:g}})}};return{exec:l=>i("exec",l,0,()=>e.exec(l)),close:()=>e.close(),prepare:l=>{let c=e.prepare(l);return{all:(...d)=>i("all",l,d.length,()=>c.all(...d)),get:(...d)=>i("get",l,d.length,()=>c.get(...d)),run:(...d)=>i("run",l,d.length,()=>c.run(...d))}}}}var mg,bl,Rl,kl=f(()=>{"use strict";b();mg=y("SlowQuery"),bl=200,Rl=240});function Fo(){return(0,Pn.join)(Kt(),"jollimemory.db")}function Jt(e=process.versions.node){let t=/^(\d+)\.(\d+)/.exec(e);if(!t)return!1;let n=Number.parseInt(t[1],10),r=Number.parseInt(t[2],10);return n>qt.major?!0:n<qt.major?!1:r>=qt.minor}function _g(e){try{return(e.prepare("SELECT COUNT(*) AS n FROM sqlite_master WHERE type = 'table' AND name = 'schema_migrations'").get()?.n??0)>0?"present":"absent"}catch{return"unknown"}}function Ho(e){try{return{kind:"rows",rows:e.prepare("SELECT seq, slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl FROM schema_migrations ORDER BY seq").all()}}catch(t){let n=_g(e);return n==="absent"?{kind:"none"}:{kind:"unreadable",reason:R(t),tableConfirmed:n==="present"}}}function Cl(e){let t=Ho(e);return t.kind==="rows"?t.rows:void 0}function On(e,t){e.prepare(`INSERT INTO schema_migrations (slot, name, outcome, applied_by, applied_at_ms, duration_ms, ddl)
		 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(t.slot,t.name,t.outcome,t.appliedBy,t.atMs,t.durationMs,t.ddl)}function Eg(e){let t=new Map;for(let n of e){let r=t.get(n.name);(!r||n.seq>r.seq)&&t.set(n.name,n)}return t}function Po(e){return e.sql??""}function Tg(e){let t=Ho(e);if(t.kind==="none")return;if(t.kind==="unreadable"){Ln.has(Al)||(Ln.add(Al),Fe.warn(t.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`":"the database could not be queried for its migration log (%s) \u2014 drift verification is skipped; run `jolli doctor --schema-log`",t.reason));return}let n=t.rows,r=new Set(Gt.map(o=>o.name));for(let[o,s]of Eg(n))r.has(o)||Ln.has(o)||(Ln.add(o),Fe.warn("migration %s was touched by %s but is unknown to this build (%s) \u2014 the database has been opened by another build",o,s.applied_by,Oo))}function bg(e,t={}){let n=t.now??Date.now,r=t.appliedBy??Oo,o=Ho(e),s=new Set;if(o.kind==="rows")for(let c of o.rows)(c.outcome==="applied"||c.outcome==="baseline")&&s.add(c.name);else o.kind==="none"?Fe.info("no migration log in this database \u2014 replaying every entry (all are re-runnable)"):Fe.warn(o.tableConfirmed?"the schema_migrations table exists but could not be read (%s) \u2014 replaying every entry and recording nothing":"the database could not be queried for its migration log (%s) \u2014 replaying every entry and recording nothing",o.reason);let i=Gt.map((c,d)=>({m:c,slot:d})).filter(({m:c})=>!s.has(c.name));if(i.length===0)return;let a=[],l=()=>{for(let c of a)On(e,c);a.length=0};e.exec("PRAGMA foreign_keys = OFF");try{for(let{m:c,slot:d}of i){let p=n();e.exec("BEGIN IMMEDIATE");try{if(Cl(e)?.some(u=>u.name===c.name&&(u.outcome==="applied"||u.outcome==="baseline"))){l(),On(e,{slot:d,name:c.name,outcome:"skipped",appliedBy:r,atMs:n(),durationMs:0,ddl:Po(c)}),e.exec("COMMIT");continue}c.run(e);let g={slot:d,name:c.name,outcome:"applied",appliedBy:r,atMs:n(),durationMs:n()-p,ddl:Po(c)};Cl(e)?(l(),On(e,g)):a.push(g),e.exec("COMMIT")}catch(m){try{e.exec("ROLLBACK")}catch{}try{e.prepare("DELETE FROM schema_migrations WHERE name = ? AND outcome = 'failed'").run(c.name),On(e,{slot:d,name:c.name,outcome:"failed",appliedBy:r,atMs:n(),durationMs:n()-p,ddl:Po(c)})}catch(g){Fe.debug("could not record the failed migration %s: %s",c.name,R(g))}throw m}}}finally{e.exec("PRAGMA foreign_keys = ON")}Fe.info("dashboard schema migrated: %s",i.map(({m:c})=>c.name).join(", "))}function xl(e){let t=Cg(e);if(!t)return!1;let n=new Set(Gt.map(r=>r.name));for(let r of t)if(!n.has(r))return!0;return!1}function Rg(e){let t=(0,Pn.dirname)(e);try{(0,we.mkdirSync)(t,{recursive:!0,mode:448}),((0,we.statSync)(t).mode&511)!==448&&(0,we.chmodSync)(t,448)}catch(n){Fe.warn("could not restrict %s to owner-only: %s",t,R(n))}}function wg(e){for(let t of[e,`${e}-wal`,`${e}-shm`])try{((0,we.statSync)(t).mode&511)!==384&&(0,we.chmodSync)(t,384)}catch(n){$(n)||Fe.warn("could not restrict %s to 0600: %s",t,R(n))}}async function kg(e,t){if(!Jt())throw new Mo(process.versions.node);let n=t.dbPath??Fo(),r=t.maxAttempts??4,o=t.baseDelayMs??50;e||Rg(n);let{DatabaseSync:s}=await import("node:sqlite");for(let i=1;;i++){let a;try{a=new s(n,{readOnly:e});for(let l of e?Sg:hg)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${t.busyTimeoutMs??Uo}`),e||wg(n),wl(a,{role:e?"ro":"rw"})}catch(l){try{a?.close()}catch{}if(O(l)?.kind!=="locked"||i>=r)throw l;await new Promise(c=>setTimeout(c,o*2**(i-1)))}}}async function jo(e,t={}){let n=await kg(!1,t);try{return Tg(n),bg(n),await e(n)}finally{n.close()}}function Cg(e){try{let t=e.prepare("SELECT name, outcome FROM schema_migrations").all(),n=new Set;for(let r of t)(r.outcome==="applied"||r.outcome==="baseline")&&n.add(r.name);return n}catch{return}}function Ve(e,t){e.exec("BEGIN IMMEDIATE");try{let n=t();return e.exec("COMMIT"),n}catch(n){try{e.exec("ROLLBACK")}catch{}throw n}}var we,Pn,Fe,qt,Mo,hg,Sg,Uo,Il,Ln,Al,ke=f(()=>{"use strict";we=require("node:fs"),Pn=require("node:path");Da();ht();Y();b();Lo();kl();Lo();N();Fe=y("DashboardDb"),qt={major:22,minor:13};Mo=class extends Error{constructor(t){super(`The Jolli dashboard needs Node >= ${qt.major}.${qt.minor} for built-in SQLite (running ${t}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},hg=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],Sg=["PRAGMA foreign_keys = ON"],Uo=2e3,Il={"queue-worker":15e3,bootstrap:15e3,recovery:15e3,"stop-hook":5e3,cli:5e3,vscode:400};Ln=new Set,Al="\0unreadable-log"});var cC,$o=f(()=>{"use strict";b();cC=y("DbDetection")});var Dl=f(()=>{"use strict";Oe()});var SC,Nl=f(()=>{"use strict";b();Dl();V();SC=y("MetadataManager")});function Ng(e,t){if(process.env.VITEST)return null;let n=t?`${t}@${e}`:e;try{return ut("ssh",["-G",n],{encoding:"utf-8",timeout:Ig,stdio:["ignore","pipe","pipe"]})}catch(r){return Ag.debug("ssh -G %s failed: %s",n,r instanceof Error?r.message:String(r)),null}}function Ol(e,t){let n=new RegExp(`^${t}\\s+(\\S+)`,"i");for(let r of e.split(/\r?\n/)){let o=r.match(n);if(o?.[1])return o[1]}return null}function Mn(e,t){if(!e)return{host:e,port:"",endpointRemapped:!1};let n=`${t??""}\0${e}`,r=vl.get(n);if(r!==void 0)return r;let o=e,s="",i=Dg(e,t);if(i){let c=Ol(i,"hostname");c&&(o=c);let d=Ol(i,"port");d&&(s=d)}let a=xg.get(o.toLowerCase()),l=a?{host:a,port:"",endpointRemapped:!0}:{host:o,port:s,endpointRemapped:!1};return vl.set(n,l),l}function Fn(e){return e.includes(":")&&!e.startsWith("[")?`[${e}]`:e}var Ag,Ig,xg,vl,Dg,Wo=f(()=>{"use strict";b();Oe();Ag=y("SshAliasResolver"),Ig=5e3,xg=new Map([["ssh.github.com","github.com"],["altssh.gitlab.com","gitlab.com"],["altssh.bitbucket.org","bitbucket.org"]]),vl=new Map,Dg=Ng});function Bo(e,t){return vg.has(e)?t:""}var xC,Ll,vg,Ko=f(()=>{"use strict";b();Oe();Nl();V();Wo();xC=y("KBPathResolver"),Ll=new Set(["github.com","gitlab.com","bitbucket.org"]),vg=new Set(["github.com","gitlab.com","bitbucket.org"])});async function Ul(e){let t=await be(["config","--get","remote.origin.url"],e),n=t.exitCode===0?t.stdout.trim():"";return n.length===0?Xt(e):Og(n,e)}function Og(e,t){let n=e.trim();if(n.length===0)return Xt(t);let r=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(n);if(r&&!n.includes("://")){let i=Mn(r[2],r[1].slice(0,-1)||void 0),a=i.host.toLowerCase(),l=Ml(a,Pl(r[3])),c=Fl("ssh",Bo(a,i.port));return`https://${Fn(a)}${c}/${l}`}let o;try{o=new URL(n)}catch{return Xt(t)}let s=o.protocol.replace(/:$/,"").toLowerCase();if(s==="ssh"||s==="git"||s==="http"||s==="https"){let a=s==="ssh"?Mn(o.hostname,o.username||void 0):{host:o.hostname,port:"",endpointRemapped:!1},l=a.host.toLowerCase(),c=Ml(l,Pl(o.pathname.replace(/^\/+/,""))),d=a.endpointRemapped?"":o.port!==""?o.port:a.port,p=s==="ssh"?Bo(l,d):d,m=Fl(s,p);return`https://${Fn(l)}${m}/${c}`}return Xt(s==="file"?o.pathname:t)}function Hl(e){let t=e.trim();if(t.length===0)return"";let n;try{n=new URL(t)}catch{return t.slice(0,120)}let r=n.protocol.replace(/:$/,"").toLowerCase(),o=Mg(n.pathname);return r==="http"||r==="https"||r==="ssh"||r==="git"?o.length>0?Pg(o):n.hostname.toLowerCase():r==="file"&&o.length>0?o:t.slice(0,120)}function Xt(e){let t=pt(J(e));return t.length===0?"file:///":t.startsWith("/")?`file://${t}`:`file:///${t}`}function Pl(e){let t=pt(e);return t.toLowerCase().endsWith(".git")&&(t=t.slice(0,-4)),pt(t)}function Ml(e,t){return Ll.has(e)?t.toLowerCase():t}function Fl(e,t){return t.length===0?"":e==="ssh"||e==="git"?t===Lg[e]?"":`:${t}`:`:${t}`}function Pg(e){return e.toLowerCase().endsWith(".git")?e.slice(0,-4):e}function Mg(e){let t=e.split("/").filter(n=>n.length>0);return t.length>0?t[t.length-1]:""}var Lg,jl=f(()=>{"use strict";ie();Ko();V();Wo();Lg={ssh:"22",git:"9418"}});function Gl(e,t,n=process.platform){return En(e,n)===En(t,n)}function Jl(e=Kt()){return(0,Bl.join)(e,Fg)}async function Xl(e){try{return await Go(e)}catch(t){return Kl.warn("repo registry unreadable (%s) \u2014 treating as empty",R(t)),ql}}async function Go(e){let t=Jl(e),n;try{n=await(0,Wl.readFile)(t,"utf-8")}catch(o){if($(o))return ql;throw o}let r=JSON.parse(n);if(!Array.isArray(r?.repos))throw new Error(`repo registry at ${t} has no repos array`);return{version:1,repos:r.repos,...typeof r.instanceId=="string"&&{instanceId:r.instanceId}}}async function Yl(e,t){await xn(Jl(t),`${JSON.stringify(e,null,2)}
`,{mode:384})}async function Un(e){try{let n=await Ul(e);if(n&&!n.startsWith("file:"))return{identity:n,remoteUrl:n}}catch(n){Kl.debug("no canonical remote for %s (%s) \u2014 using path identity",e,R(n))}let t=(0,$l.createHash)("sha256").update(J(e)).digest("hex").slice(0,32);return{identity:`${Ug}${t}`}}function Hg(e,t){if(t){let r=Hl(t);if(r)return r}let n=J(e).replace(/\/+$/,"").split("/");return n[n.length-1]||e}async function Vl(e){let t=await Pt(e.cwd),{identity:n,remoteUrl:r}=await Un(t),o=(e.now??(()=>new Date))().toISOString();return So(async()=>{let s=await Go(e.configDir),i=s.repos.find(p=>p.repoIdentity===n),l=[...(i?.worktrees??(i?[i.worktreeRoot]:[])).filter(p=>!Gl(p,t)),t],c={repoIdentity:n,repoName:Hg(t,r),worktreeRoot:t,worktrees:l,...r?{remoteUrl:r}:{},enabledAt:i?.enabledAt??o},d=[...s.repos.filter(p=>p.repoIdentity!==n),c];return await Yl({...s,version:1,repos:d},e.configDir),c},{globalDir:e.configDir})}async function zl(e){let t=await Pt(e.cwd),{identity:n}=await Un(t);return So(async()=>{let r=await Go(e.configDir),o=r.repos.find(l=>l.repoIdentity===n);if(!o)return null;let s=o.worktrees&&o.worktrees.length>0?o.worktrees:[o.worktreeRoot];if(s.some(l=>Gl(l,t)))return o;let i={...o,worktrees:[...s,t]},a=[...r.repos.filter(l=>l.repoIdentity!==n),i];return await Yl({...r,version:1,repos:a},e.configDir),i},{globalDir:e.configDir})}var $l,Wl,Bl,Kl,Fg,Ug,ql,St=f(()=>{"use strict";$l=require("node:crypto"),Wl=require("node:fs/promises"),Bl=require("node:path");uo();ie();jl();jt();V();yt();ht();b();Kl=y("RepoRegistry"),Fg="dashboard-repos.json";Ug="local:",ql={version:1,repos:[]}});var zC,Zl=f(()=>{"use strict";yt();b();ke();$o();St();zC=y("CutoverRouter")});var ze=f(()=>{"use strict"});var qo=f(()=>{"use strict"});var ec=f(()=>{"use strict";ie()});var sA,tc=f(()=>{"use strict";b();Ue();sA=y("ProcessedSourceStore")});var cA,oc=f(()=>{"use strict";b();Ue();cA=y("TopicIndexStore")});function sc(e){if(!e.startsWith("topics/")||!e.endsWith(".json"))return!1;let t=e.slice(7,-5);return t.length>0&&!t.includes("/")&&!$g.has(t)}var $g,ic,uA,pA,Jo=f(()=>{"use strict";$g=new Set(["index","processed"]);ic=[["summaries/",e=>e.endsWith(".json")],["transcripts/",e=>e.endsWith(".json")],["plans/",e=>e.endsWith(".md")],["notes/",e=>e.endsWith(".md")],["references/",e=>e.endsWith(".md")],["skills/",e=>e.endsWith(".md")],["plan-progress/",e=>e.endsWith(".json")],["topics/",sc]],uA=ic.map(([e])=>e),pA=Object.fromEntries(ic)});var hA,ac=f(()=>{"use strict";Jo();b();Ue();hA=y("TopicPageStore")});var wA,kA,lc=f(()=>{"use strict";mo();b();ke();$o();St();wA=y("ImportState"),kA=10*6e4});var Xo=f(()=>{"use strict"});function Ce(e,t="repo_id"){let n=e.repoIds;return n==null?{sql:"",params:[]}:n.length===1?{sql:` AND ${t} = ?`,params:[n[0]]}:{sql:` AND ${t} IN (${cc(n.length)})`,params:[...n]}}function cc(e){return new Array(e).fill("?").join(", ")}function Ae(e,t){let n=t.kind==="repo"?t.repoIdentities:void 0;if(!n||n.length===0)return{repoIds:null};let r=[...new Set(n)],o=e.prepare(`SELECT id, repo_identity FROM repos WHERE repo_identity IN (${cc(r.length)})`).all(...r),s=new Map(o.map(a=>[a.repo_identity,a.id])),i=[];for(let a of n){let l=s.get(a);l!=null&&!i.includes(l)&&i.push(l)}return{repoIds:i.length>0?i:[-1]}}var xA,Yo=f(()=>{"use strict";b();xA=y("DashboardScope")});function pc(){return Intl.DateTimeFormat().resolvedOptions().timeZone}function Bg(e){let t=dc.get(e);return t||(t=new Intl.DateTimeFormat("en-CA",{timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}),dc.set(e,t)),t}function jn(e,t){let n=Bg(t).formatToParts(e),r=o=>Number.parseInt(n.find(s=>s.type===o)?.value??"0",10);return{year:r("year"),month:r("month"),day:r("day"),hour:r("hour"),minute:r("minute")}}function Kg(e,t){let n=jn(e,t);return`${n.year}-${String(n.month).padStart(2,"0")}-${String(n.day).padStart(2,"0")}`}function _t(e,t){let n=uc.get(t);if(n&&e>=n.fromMs&&e<n.toMs)return n.key;let r=jn(e,t),o=`${r.year}-${String(r.month).padStart(2,"0")}-${String(r.day).padStart(2,"0")}`,s=Vo(r.year,r.month,r.day,t);return uc.set(t,{fromMs:s,toMs:Et(s,1,t),key:o}),o}function Vo(e,t,n,r){let o=Date.UTC(e,t-1,n),s=o;for(let i=0;i<3;i++){let a=jn(s,r),l=Date.UTC(a.year,a.month-1,a.day,a.hour,a.minute)-o;if(l===0)return s;s-=l}return Gg(e,t,n,r)}function Gg(e,t,n,r){let o=`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}`,s=Date.UTC(e,t-1,n),i=Math.floor((s-15*36e5)/6e4),a=Math.ceil((s+14*36e5)/6e4);for(;a-i>1;){let l=Math.floor((i+a)/2);Kg(l*6e4,r)<o?i=l:a=l}return a*6e4}function Hn(e,t){let n=jn(e,t);return Vo(n.year,n.month,n.day,t)}function $n(e,t){if(!Wg.test(e))return;let n=Vo(Number.parseInt(e.slice(0,4),10),Number.parseInt(e.slice(5,7),10),Number.parseInt(e.slice(8,10),10),t);return _t(n,t)===e?n:void 0}function Et(e,t,n){if(!Number.isInteger(t))throw new Error(`addLocalDays: days must be a finite integer, got ${t}`);let r=Hn(e,n),o=t>=0?1:-1;for(let s=0;s!==t;s+=o)r=Hn(r+o*864e5+432e5,n);return r}var Wg,dc,uc,mc=f(()=>{"use strict";Wg=/^\d{4}-\d{2}-\d{2}$/;dc=new Map;uc=new Map});function yc(e,t,n,r){let o=Ce(Ae(e,t),"s.repo_id");return e.prepare(`${Wn}
			SELECT s.repo_id, e.responded_at_ms AS bucket_at_ms, e.input_tokens AS input,
			        e.output_tokens AS output, e.cached_tokens AS cached
			   FROM session_usage_events e JOIN sessions s ON s.event_id = e.session_event_id
			   ${Bn}
			  WHERE e.responded_at_ms >= ? AND e.responded_at_ms < ?${o.sql}
			 UNION ALL
			SELECT s.repo_id, s.updated_at_ms AS bucket_at_ms, s.input_tokens AS input,
			        s.output_tokens AS output, s.cached_tokens AS cached
			   FROM sessions s
			   ${Kn}
			  WHERE s.updated_at_ms >= ? AND s.updated_at_ms < ?${o.sql} AND ${Gn}`).all(n,r,...o.params,n,r,...o.params)}function hc(e,t,n,r,o){if(n==="model"){let i=Ce(Ae(e,t),"s.repo_id");return e.prepare(`${Wn}
				SELECT s.repo_id, e.responded_at_ms AS bucket_at_ms, e.model AS key,
				        e.input_tokens + e.output_tokens + e.cached_tokens AS tokens,
				        COALESCE(e.est_cost_usd, 0) AS cost
				   FROM session_usage_events e JOIN sessions s ON s.event_id = e.session_event_id
				   ${Bn}
				  WHERE e.responded_at_ms >= ? AND e.responded_at_ms < ?${i.sql}
				 UNION ALL
				SELECT s.repo_id, s.updated_at_ms AS bucket_at_ms, u.model AS key,
				        u.input_tokens + u.output_tokens + u.cached_tokens AS tokens,
				        COALESCE(u.est_cost_usd, 0) AS cost
				   FROM session_model_usage u JOIN sessions s ON s.event_id = u.session_event_id
				   ${Kn}
				  WHERE s.updated_at_ms >= ? AND s.updated_at_ms < ?${i.sql} AND ${Gn}`).all(r,o,...i.params,r,o,...i.params)}if(n==="agent"){let i=Ce(Ae(e,t),"s.repo_id");return e.prepare(`${Wn}
				SELECT s.repo_id, e.responded_at_ms AS bucket_at_ms, s.source AS key,
				        e.input_tokens + e.output_tokens + e.cached_tokens AS tokens,
				        COALESCE(e.est_cost_usd, 0) AS cost
				   FROM session_usage_events e JOIN sessions s ON s.event_id = e.session_event_id
				   ${Bn}
				  WHERE e.responded_at_ms >= ? AND e.responded_at_ms < ?${i.sql}
				 UNION ALL
				SELECT s.repo_id, s.updated_at_ms AS bucket_at_ms, s.source AS key,
				        s.input_tokens + s.output_tokens + s.cached_tokens AS tokens,
				        COALESCE(s.est_cost_usd, 0) AS cost
				   FROM sessions s
				   ${Kn}
				  WHERE s.updated_at_ms >= ? AND s.updated_at_ms < ?${i.sql} AND ${Gn}`).all(r,o,...i.params,r,o,...i.params)}if(n==="project"){let i=Ce(Ae(e,t),"s.repo_id");return e.prepare(`${Wn}
				SELECT s.repo_id, e.responded_at_ms AS bucket_at_ms, r.repo_name AS key,
				        e.input_tokens + e.output_tokens + e.cached_tokens AS tokens,
				        COALESCE(e.est_cost_usd, 0) AS cost
				   FROM session_usage_events e
				   JOIN sessions s ON s.event_id = e.session_event_id
				   JOIN repos r ON r.id = s.repo_id
				   ${Bn}
				  WHERE e.responded_at_ms >= ? AND e.responded_at_ms < ?${i.sql}
				 UNION ALL
				SELECT s.repo_id, s.updated_at_ms AS bucket_at_ms, r.repo_name AS key,
				        s.input_tokens + s.output_tokens + s.cached_tokens AS tokens,
				        COALESCE(s.est_cost_usd, 0) AS cost
				   FROM sessions s JOIN repos r ON r.id = s.repo_id
				   ${Kn}
				  WHERE s.updated_at_ms >= ? AND s.updated_at_ms < ?${i.sql} AND ${Gn}`).all(r,o,...i.params,r,o,...i.params)}if(n==="category"){let i=Ce(Ae(e,t),"m.repo_id");return e.prepare(`${qg}
				 SELECT m.repo_id, ml.at_ms AS bucket_at_ms,
				        COALESCE(t.category, '(uncategorised)') AS key,
				        COALESCE(m.tokens, 0) * 1.0
				          / COUNT(*) OVER (PARTITION BY m.repo_id, m.commit_hash) AS tokens,
				        COALESCE(m.est_cost_usd, 0) * 1.0
				          / COUNT(*) OVER (PARTITION BY m.repo_id, m.commit_hash) AS cost
				   FROM memories m
				   JOIN memory_landing ml ON ml.repo_id = m.repo_id AND ml.commit_hash = m.commit_hash
				   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
				  WHERE m.tokens IS NOT NULL
				    AND m.parent_hash IS NULL
				    AND ml.at_ms >= ? AND ml.at_ms < ?${i.sql}`).all(r,o,...i.params)}if(n==="branch"){let i=Ce(Ae(e,t),"c.repo_id");return e.prepare(`SELECT c.repo_id, c.committed_at_ms AS bucket_at_ms, br.name AS key,
				        COALESCE(m.tokens, 0) * 1.0
				          / COUNT(*) OVER (PARTITION BY c.repo_id, c.hash) AS tokens,
				        COALESCE(m.est_cost_usd, 0) * 1.0
				          / COUNT(*) OVER (PARTITION BY c.repo_id, c.hash) AS cost
				   FROM commits c
				   JOIN commit_branches b ON b.commit_id = c.id
				   JOIN branches br ON br.id = b.branch_id
				   JOIN memories m ON m.repo_id = c.repo_id AND (${fc})
				  WHERE m.tokens IS NOT NULL AND m.parent_hash IS NULL
				    AND c.committed_at_ms >= ? AND c.committed_at_ms < ?${i.sql}`).all(r,o,...i.params)}let s=Ce(Ae(e,t),"c.repo_id");return e.prepare(`SELECT c.repo_id, c.committed_at_ms AS bucket_at_ms,
			        COALESCE(m.ticket_id, '(no ticket)') AS key,
			        COALESCE(m.tokens, 0) AS tokens, COALESCE(m.est_cost_usd, 0) AS cost
			   FROM commits c
			   JOIN memories m ON m.repo_id = c.repo_id AND (${fc})
			  WHERE m.tokens IS NOT NULL AND m.parent_hash IS NULL
			    AND c.committed_at_ms >= ? AND c.committed_at_ms < ?${s.sql}`).all(r,o,...s.params)}var Wn,Bn,Kn,Gn,qn,Tt,qg,gc,fc,Jn=f(()=>{"use strict";Yo();Wn=`WITH session_usage_cover AS MATERIALIZED (
	         SELECT session_event_id AS id,
	                SUM(input_tokens + output_tokens + cached_tokens) AS tot
	           FROM session_usage_events
	          GROUP BY session_event_id
	     )`,Bn=`JOIN session_usage_cover cov
	                          ON cov.id = s.event_id
	                         AND cov.tot >= s.input_tokens + s.output_tokens + s.cached_tokens`,Kn="LEFT JOIN session_usage_cover cov ON cov.id = s.event_id",Gn=`(cov.id IS NULL
	                            OR cov.tot < s.input_tokens + s.output_tokens + s.cached_tokens)`,qn=`LEFT JOIN commits cm ON cm.repo_id = m.repo_id AND cm.hash = m.commit_hash
	  LEFT JOIN (
	      SELECT a.repo_id, a.target_hash, c.hash AS live_hash, MAX(c.committed_at_ms) AS at_ms
	        FROM commit_aliases a
	        JOIN commits c ON c.repo_id = a.repo_id AND c.hash = a.old_hash
	       GROUP BY a.repo_id, a.target_hash
	  ) al ON al.repo_id = m.repo_id AND al.target_hash = m.commit_hash`,Tt="COALESCE(cm.committed_at_ms, al.at_ms, m.commit_date_ms)",qg=`WITH memory_landing AS (
	SELECT m.repo_id, m.commit_hash,
	       COALESCE(cm.hash, al.live_hash, m.commit_hash) AS live_hash,
	       ${Tt} AS at_ms
	  FROM memories m
	  ${qn}
	 WHERE m.parent_hash IS NULL
)`,gc=`SELECT ${Tt} AS at_ms
	  FROM memories m
	  ${qn}
	 WHERE m.repo_id = ? AND m.commit_hash = ?`,fc=`m.commit_hash = c.hash
	     OR (m.commit_hash = (SELECT a.target_hash FROM commit_aliases a
	                           WHERE a.repo_id = c.repo_id AND a.old_hash = c.hash)
	         AND NOT EXISTS (SELECT 1 FROM commits c2
	                          WHERE c2.repo_id = c.repo_id AND c2.hash = m.commit_hash))`});function Vg(e,t,n,r){let o=e.prepare(`SELECT s.repo_id, e.responded_at_ms AS at_ms, e.updated_at_ms AS w
			   FROM session_usage_events e JOIN sessions s ON s.event_id = e.session_event_id
			  WHERE e.updated_at_ms > ? AND e.responded_at_ms >= ? AND e.responded_at_ms < ?
			 UNION ALL
			SELECT s.repo_id, s.updated_at_ms AS at_ms, s.written_at_ms AS w
			   FROM sessions s
			  WHERE s.written_at_ms > ? AND s.updated_at_ms >= ? AND s.updated_at_ms < ?`).all(t,n,r,t,n,r),s=e.prepare(`SELECT m.repo_id, ${Tt} AS at_ms, m.written_at_ms AS w
			   FROM memories m
			   ${qn}
			  WHERE m.written_at_ms > ?
			    AND ${Tt} >= ? AND ${Tt} < ?
			 UNION ALL
			SELECT c.repo_id, c.committed_at_ms AS at_ms, c.written_at_ms AS w
			   FROM commits c
			  WHERE c.written_at_ms > ? AND c.committed_at_ms >= ? AND c.committed_at_ms < ?`).all(t,n,r,t,n,r);return[...o,...s]}function zg(e,t,n,r){let o=e.prepare(`SELECT day, built_at_ms FROM stats_daily
			  WHERE tz = ? AND kind = ? AND repo_id = ? AND day >= ? AND day <= ?`).all(t,Qo,Ec,n,r);return new Map(o.map(s=>[s.day,s.built_at_ms]))}function Qg(e,t,n,r){if(n.length===0)return new Set;let o=_t(r,t),s=n.filter(h=>h<o).sort(),i=s[0],a=s[s.length-1];if(i===void 0||a===void 0)return new Set;let l=zg(e,t,i,a);if(l.size===0)return new Set;let c=Math.min(...l.values()),d=$n(i,t)??0,p=$n(a,t),m=p===void 0?Number.MAX_SAFE_INTEGER:Et(p,1,t),g=new Set(s),u=new Set([...l.keys()].filter(h=>g.has(h)));for(let h of Vg(e,c,d,m)){let T=_t(h.at_ms,t),E=l.get(T);E!==void 0&&h.w>E&&u.delete(T)}return u}function Tc(e,t){return`${e}\0${t}`}function Zg(e){let t=new Map;for(let n of e){let r=Tc(n.repo_id,n.key),o=t.get(r);o?(o.value+=n.tokens,o.cost+=n.cost):t.set(r,{repoId:n.repo_id,seriesKey:n.key,value:n.tokens,cost:n.cost})}return t}function ey(e,t,n,r){let o=$n(n,t);if(o===void 0)return;let s=Et(o,1,t),i={kind:"all"},a=new Map;for(let c of Sc)a.set(c,Zg(hc(e,i,c,o,s)));let l=new Map;for(let c of yc(e,i,o,s)){let d=[["input",c.input],["output",c.output],["cached",c.cached]];for(let[p,m]of d){let g=Tc(c.repo_id,p),u=l.get(g);u?u.value+=m:l.set(g,{repoId:c.repo_id,seriesKey:p,value:m,cost:0})}}a.set(_c,l),Ve(e,()=>{e.prepare("DELETE FROM stats_daily WHERE tz = ? AND day = ?").run(t,n);let c=e.prepare(`INSERT INTO stats_daily (repo_id, tz, day, kind, series_key, value, cost_usd, built_at_ms, updated_at_ms)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);for(let[d,p]of a)for(let m of p.values())c.run(m.repoId,t,n,d,m.seriesKey,m.value,m.cost,r,r);c.run(Ec,t,n,Qo,"",0,0,r,r)})}function ty(e,t={}){let n=(t.now??Date.now)(),r=t.timeZone??pc(),o=t.maxDays??Yg;if(o<=0)return 0;let s=[],i=Et(Hn(n,r),-1,r);for(let d=0;d<Xg;d++)s.push(_t(i,r)),i=Et(i,-1,r);let a=Qg(e,r,s,n),l=s.filter(d=>!a.has(d)).slice(0,o),c=0;for(let d of l)ey(e,r,d,n),c++;return c>0&&zo.debug("settled %d day(s) of stats, %s..%s",c,l[c-1],l[0]),c}function Yt(e,t){if(t.length===0)return;let n=e.prepare("SELECT DISTINCT tz FROM stats_daily").all();if(n.length!==0)for(let{tz:r}of n){let o=[...new Set(t.map(s=>_t(s,r)))];e.prepare(`DELETE FROM stats_daily WHERE tz = ? AND day IN (${o.map(()=>"?").join(", ")})`).run(r,...o)}}function bc(e,t={}){try{if(xl(e)){zo.info("stats rollup is OFF: the database carries migrations this build does not know, so cached daily stats are never written and every dashboard render recomputes its full window. `jolli doctor --schema-log` lists the unknown names.");return}ty(e,t)}catch(n){zo.info("stats rollup skipped: %s",R(n))}}var zo,Jg,Sc,Qo,_c,HA,Xg,Yg,Ec,Xn=f(()=>{"use strict";b();ke();Yo();mc();Jn();zo=y("StatsRollup"),Jg={model:!0,agent:!0,project:!0,branch:!0,ticket:!0,category:!0},Sc=Object.keys(Jg),Qo="built",_c="tokens",HA=[...Sc,_c,Qo],Xg=90,Yg=14,Ec=0});var yI,wc=f(()=>{"use strict";ec();tc();yt();Bt();Ue();ze();oc();ac();b();ke();Jo();lc();St();qo();Xo();Xn();Jn();yI=y("SotImport")});var OI,kc=f(()=>{"use strict";Bt();ze();b();ke();qo();wc();Xo();Xn();Jn();OI=y("SotWrite")});var Zo=f(()=>{"use strict";ke();kc();b();Ue()});var Cc=f(()=>{"use strict";Zl();St();vo();Zo()});var Ac=f(()=>{"use strict"});var Ic,xc,ly,zI,Dc=f(()=>{"use strict";Ic="sonnet",xc="inherit",ly={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop",defaultModel:Ic,models:[{id:"haiku",label:"Haiku \u2014 fastest"},{id:Ic,label:"Sonnet \u2014 balanced (default)"},{id:"opus",label:"Opus \u2014 most capable"},{id:xc,label:"Use Claude Code's own setting"}]},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app",defaultModel:"gpt-5.6-terra",models:[{id:"gpt-5.6-luna",label:"GPT-5.6-Luna \u2014 fastest"},{id:"gpt-5.6-terra",label:"GPT-5.6-Terra \u2014 balanced (default)"},{id:"gpt-5.6-sol",label:"GPT-5.6-Sol \u2014 most capable"},{id:"gpt-5.5",label:"GPT-5.5 \u2014 previous generation"},{id:xc,label:"Use Codex's own setting"}]},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."},hermes:{label:"Hermes",loginHint:"Run `hermes setup` (or `hermes model`) to configure a provider."}},zI=[...new Set(Object.values(ly).flatMap(e=>(e.models??[]).map(t=>t.id)))]});var Nc=f(()=>{"use strict";Co()});var vc=f(()=>{"use strict"});var Lc=f(()=>{"use strict";Dc();Nc();ze();vc()});var Pc=f(()=>{"use strict"});var Qx,Ue=f(()=>{"use strict";b();Eo();Aa();ie();jt();vo();fo();xa();Bt();Cc();Zo();Ac();Lc();ze();Ao();Pc();Qx=y("SummaryStore")});function es(e){let t=py[e.model];return t?(e.input*t.inputPerMTok+e.cached*t.cachedPerMTok+e.output*t.outputPerMTok)/1e6:null}var Yn,py,ts=f(()=>{"use strict";Yn="2026-07-30",py={"claude-fable-5":{provider:"anthropic",inputPerMTok:10,outputPerMTok:50,cachedPerMTok:12.5},"claude-mythos-5":{provider:"anthropic",inputPerMTok:10,outputPerMTok:50,cachedPerMTok:12.5},"claude-opus-5":{provider:"anthropic",inputPerMTok:5,outputPerMTok:25,cachedPerMTok:6.25},"claude-opus-4-8":{provider:"anthropic",inputPerMTok:5,outputPerMTok:25,cachedPerMTok:6.25},"claude-opus-4-7":{provider:"anthropic",inputPerMTok:5,outputPerMTok:25,cachedPerMTok:6.25},"claude-opus-4-6":{provider:"anthropic",inputPerMTok:5,outputPerMTok:25,cachedPerMTok:6.25},"claude-opus-4-5":{provider:"anthropic",inputPerMTok:5,outputPerMTok:25,cachedPerMTok:6.25},"claude-sonnet-5":{provider:"anthropic",inputPerMTok:3,outputPerMTok:15,cachedPerMTok:3.75},"claude-sonnet-4-6":{provider:"anthropic",inputPerMTok:3,outputPerMTok:15,cachedPerMTok:3.75},"claude-sonnet-4-5":{provider:"anthropic",inputPerMTok:3,outputPerMTok:15,cachedPerMTok:3.75},"claude-haiku-4-5":{provider:"anthropic",inputPerMTok:1,outputPerMTok:5,cachedPerMTok:1.25},"gpt-5.6-sol":{provider:"openai",inputPerMTok:5,outputPerMTok:30,cachedPerMTok:.5},"gpt-5.6-terra":{provider:"openai",inputPerMTok:2.5,outputPerMTok:15,cachedPerMTok:.25},"gpt-5.6-luna":{provider:"openai",inputPerMTok:1,outputPerMTok:6,cachedPerMTok:.1},"gpt-5.5":{provider:"openai",inputPerMTok:5,outputPerMTok:30,cachedPerMTok:.5},"gpt-5.4":{provider:"openai",inputPerMTok:2.5,outputPerMTok:15,cachedPerMTok:.25},"gpt-5.4-mini":{provider:"openai",inputPerMTok:.75,outputPerMTok:4.5,cachedPerMTok:.075},"gpt-5.4-nano":{provider:"openai",inputPerMTok:.2,outputPerMTok:1.25,cachedPerMTok:.02},"gpt-5.3-codex":{provider:"openai",inputPerMTok:1.75,outputPerMTok:14,cachedPerMTok:.175},"gpt-5.2":{provider:"openai",inputPerMTok:1.75,outputPerMTok:14,cachedPerMTok:.175},"gpt-5.2-codex":{provider:"openai",inputPerMTok:1.75,outputPerMTok:14,cachedPerMTok:.175},"gpt-5.1":{provider:"openai",inputPerMTok:1.25,outputPerMTok:10,cachedPerMTok:.125},"gpt-5.1-codex-max":{provider:"openai",inputPerMTok:1.25,outputPerMTok:10,cachedPerMTok:.125},"gpt-5.1-codex":{provider:"openai",inputPerMTok:1.25,outputPerMTok:10,cachedPerMTok:.125},"gpt-5":{provider:"openai",inputPerMTok:1.25,outputPerMTok:10,cachedPerMTok:.125},"gpt-5-codex":{provider:"openai",inputPerMTok:1.25,outputPerMTok:10,cachedPerMTok:.125},"gpt-5-mini":{provider:"openai",inputPerMTok:.25,outputPerMTok:2,cachedPerMTok:.025},"gpt-5-nano":{provider:"openai",inputPerMTok:.05,outputPerMTok:.4,cachedPerMTok:.005},"gpt-5.5-pro":{provider:"openai",inputPerMTok:30,outputPerMTok:180,cachedPerMTok:30},"gpt-5.4-pro":{provider:"openai",inputPerMTok:30,outputPerMTok:180,cachedPerMTok:30},"gpt-5.2-pro":{provider:"openai",inputPerMTok:21,outputPerMTok:168,cachedPerMTok:21},"gpt-5-pro":{provider:"openai",inputPerMTok:15,outputPerMTok:120,cachedPerMTok:15}}});function Vn(e){let t=new Map;for(let n of e)for(let r of n){let o=`${r.kind}\0${r.name}`,s=t.get(o);if(!s){t.set(o,r);continue}let i=Math.max(s.lastCallAtMs??0,r.lastCallAtMs??0),a=s.usage??r.usage,l=(r.invocations?.length??0)>(s.invocations?.length??0)?r.invocations:s.invocations,c=s.detection??r.detection,d=s.plugin??r.plugin,p=s.originRoot??r.originRoot;t.set(o,{...s,...s.server??r.server?{server:s.server??r.server}:{},calls:Math.max(s.calls,r.calls),...i>0?{lastCallAtMs:i}:{},...a!==void 0?{usage:a}:{},...l!==void 0?{invocations:l}:{},...c!==void 0?{detection:c}:{},...d!==void 0?{plugin:d}:{},...p!==void 0?{originRoot:p}:{}})}return[...t.values()]}var ns=f(()=>{"use strict"});function rs(e,t){return e===void 0?!1:Ny.has(e)?!0:t!==void 0&&vy.has(`${e} ${t}`)}function My(e){let t=e.split(/\s+/).filter(i=>i.length>0),n=0;for(;n<t.length&&Py.test(t[n]);)n+=1;if(n>=t.length)return!1;let r=t[n],o=t[n+1],s=t[n+2];return!!(r==="npx"&&rs(o,s)||(r==="python"||r==="python3")&&o==="-m"&&rs(s,t[n+3])||rs(r,o)||Oy.has(r)&&(o==="test"||o==="t"||o==="run"&&(s==="test"||s==="t")))}function os(e){for(let t of e.split(Ly))if(My(t))return!0;return!1}var Ny,vy,Oy,Ly,Py,Jc=f(()=>{"use strict";Ny=new Set(["vitest","jest","mocha","pytest","rspec","phpunit","pest","tox","nose2","unittest","ava","tape","karma","jasmine","cypress"]),vy=new Set(["go test","cargo test","cargo nextest","mix test","dart test","flutter test","dotnet test","bazel test","playwright test"]),Oy=new Set(["npm","pnpm","yarn","bun","deno","make"]),Ly=/&&|\|\||[;&|]|\n/,Py=/^[A-Za-z_][A-Za-z0-9_]*=/});function M(e){return{name:e,kind:"builtin",calls:0}}function et(e){return{name:e,kind:"skill",calls:0}}function Ze(e,t){return{name:t?`${e}.${t}`:e,kind:"mcp",server:e,calls:0}}function He(e){if(!e.startsWith(zn))return M(e);let t=e.slice(zn.length),n=t.indexOf("__");return n===-1?Ze(t,""):Ze(t.slice(0,n),t.slice(n+2))}function Xc(e,t){if(t===void 0||t.length===0)return M(e);if(!t.startsWith(zn))return Ze(t,e);let n=t.slice(zn.length).split("__"),r=n[n.length-1]||n[0]||t;return Ze(r,e)}function Yc(e,t){if(e!==Uy)return He(e);if(typeof t!="string"||t.length===0)return M(e);let n;try{n=JSON.parse(t)}catch{return M(e)}if(n===null||typeof n!="object")return M(e);let r=n.name;return typeof r!="string"||r.length===0?M(e):He(r)}function Vc(e,t){if(e!==Fy||t===null||typeof t!="object")return M(e);let{server:n,toolName:r}=t;return typeof n!="string"||n.length===0?M(e):Ze(n,typeof r=="string"?r:"")}function Hy(e,t){let n=Math.max(e.lastCallAtMs??Number.NEGATIVE_INFINITY,t.lastCallAtMs??Number.NEGATIVE_INFINITY);return Number.isFinite(n)?{lastCallAtMs:n}:{}}var zn,Fy,Uy,L,ue=f(()=>{"use strict";zn="mcp__";Fy="CallMcpTool",Uy="tool_call";L=class{constructor(){this.byKey=new Map;this.seen=new Set}add(t,n=1){let r=`${t.kind}:${t.name}`,o=this.byKey.get(r);if(!o){this.byKey.set(r,{...t,calls:n});return}this.byKey.set(r,{...o,calls:o.calls+n,...Hy(o,t)})}addOnce(t,n){if(t!==void 0){if(this.seen.has(t))return;this.seen.add(t)}this.add(n)}hasSeen(t){return this.seen.has(t)}values(){return[...this.byKey.values()]}}});function Qc(e){return $(e)||$(e?.cause)}function zt(e,t,n){let r=n instanceof Error?n.message:String(n);($(n)?e.debug:e.error)("%s (%s)",t,r)}function te(e,t,n){zt(e,t,n);let r=new Error(t),o=n?.code;throw o!==void 0&&(r.code=o),Object.assign(r,{cause:n})}async function kt(e,t,n,r){let o;try{o=await(0,zc.readFile)(e,"utf-8")}catch(s){te(Qn,`Cannot read transcript: ${e}`,s)}return Wy(e,o,t,n,r)}function ss(e){return e.split(`
`).filter(t=>t.trim().length>0)}function Wy(e,t,n,r,o){let s=n?.lineNumber??0,i=r??new Qt,a=(k,re)=>i.parseLine(k,re),l=ss(t),c=l.slice(s),d=[],p=o?new Date(o).getTime():void 0,m=s,g=0,u=0,h=0,T=new Set,E=[],S=(k,re)=>k?.timestamp??i.parseTimestamp?.(c[re],s+re);for(let k=0;k<c.length;k++){let re=s+k,fe=a(c[k],re),Ne=p?S(fe,k):void 0;if(p&&Ne&&new Date(Ne).getTime()>p)break;fe&&d.push(fe);let j=i.parseUsageTokens?.(c[k],re);if(j&&!(j.dedupKey&&T.has(j.dedupKey))){j.dedupKey&&T.add(j.dedupKey),g+=j.input,u+=j.output,h+=j.cached;let ri=p?Ne:S(fe,k),oi=ri?new Date(ri).getTime():Number.NaN;Number.isFinite(oi)&&j.input+j.output+j.cached>0&&E.push({respondedAtMs:oi,model:j.model??"",input:j.input,output:j.output,cached:j.cached,...j.dedupKey&&{dedupKey:j.dedupKey}})}m=s+k+1}let _=G(d),w=c.slice(0,m-s),A=i.parseUsageByModel?.(w),F=i.parseToolUse?.(w),U=i.parseUnrecognizedRows?.(w)??0,H=i.parseCompactions?.(w),ee=i.parseTurnAborts?.(w),K=i.parseTestRuns?.(w),C={transcriptPath:e,lineNumber:o?m:l.length,updatedAt:new Date().toISOString()};return{entries:_,newCursor:C,totalLinesRead:m-s,usageTokens:g+u+h,usageBreakdown:{input:g,output:u,cached:h},...A&&A.length>0&&{usageByModel:A},...i.parseUsageTokens?{usageEvents:E}:{},...F&&{toolUse:F},...U>0&&{unrecognizedRows:U},...H&&{compactions:H},...ee&&{turnAborts:ee},...K&&{testRuns:K}}}function Zn(e,t){try{let n=JSON.parse(e);if(n.isCompactSummary===!0)return Qn.debug("Skipping compaction summary at line %d",t),null;if(!n.message||typeof n.message!="object")return null;let r=n.message,o=r.role,s=typeof n.timestamp=="string"?n.timestamp:void 0;if(o==="user")return By(r,s,t);if(o==="assistant"){let i=Zc(r.content)?.trim();return i?{role:"assistant",content:i,timestamp:s}:null}return null}catch(n){return Qn.debug("Failed to parse transcript line %d: %s",t,n.message),null}}function By(e,t,n){let r=Zc(e.content);if(!r)return null;let o=Ky(r);return o.length===0?null:jy.some(s=>o.startsWith(s))?(Qn.debug("Skipping filtered user message at line %d",n),null):{role:"human",content:o,timestamp:t}}function Ky(e){return e.replace($y,"").trim()}function Zc(e){if(typeof e=="string")return e.length>0?e:null;if(Array.isArray(e)){let t=[];for(let n of e)if(n!==null&&typeof n=="object"){let r=n;r.type==="text"&&typeof r.text=="string"&&t.push(r.text)}return t.length>0?t.join(`
`):null}return null}function G(e){if(e.length<=1)return[...e];let t=[],n=e[0];for(let r=1;r<e.length;r++)e[r].role===n.role?n={role:n.role,content:`${n.content}

${e[r].content}`,timestamp:n.timestamp??e[r].timestamp}:(t.push(n),n=e[r]);return t.push(n),t}var zc,Qn,jy,$y,Q=f(()=>{"use strict";zc=require("node:fs/promises");b();Zt();Qn=y("TranscriptReader"),jy=["Base directory for this skill:","[Request interrupted by user"],$y=/<(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>[\s\S]*?<\/(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>/g});function tt(e){if(e===void 0)return;let t=Date.parse(e);return Number.isFinite(t)?t:void 0}function ed(...e){let t=e.filter(n=>n!==void 0);return t.length>0?{lastCallAtMs:Math.max(...t)}:{}}function Gy(e){let t=0;for(let n of e)n.type==="tool_result"&&t++;return t}function td(e,t){let n=new Set;for(let r of e){let o;try{o=JSON.parse(r)}catch{continue}let s=o?.payload;if(s===null||typeof s!="object")continue;let i=s.type;if(typeof i!="string"||!t.has(i))continue;let a=o.timestamp,l=tt(typeof a=="string"?a:void 0);l!==void 0&&n.add(l)}return[...n].sort((r,o)=>r-o)}function Vy(e){if(e.type==="context.append_loop_event"){let t=e.event;return t?.type==="content.part"&&t.part&&typeof t.part=="object"?t.part:null}return e.type==="content.part"&&e.part&&typeof e.part=="object"?e.part:null}function rd(e){let t=e.time??e.timestamp;return typeof t=="number"&&Number.isFinite(t)?new Date(t).toISOString():typeof t=="string"&&t.length>0?t:void 0}function id(e){if(typeof e=="string")return e.length>0?e:null;if(Array.isArray(e)){let t=[];for(let n of e){let r=id(n);r&&t.push(r)}return t.length>0?t.join(`
`):null}if(e!==null&&typeof e=="object"){let t=e;if((t.type==="text"||t.type===void 0)&&typeof t.text=="string"&&t.text.length>0)return t.text}return null}function zy(e){let t=e.role;if(typeof t=="string"&&t!=="user"&&t!=="assistant")return!0;let n=e.content;if(Array.isArray(n))for(let r of n){if(!r||typeof r!="object")continue;let o=r.type;if(typeof r.text=="string"&&o!=="input_text"&&o!=="output_text")return!0}return!1}function Qy(e){if(!Array.isArray(e))return null;let t=[];for(let r of e){if(!r||typeof r!="object")continue;let o=r.type,s=r.text;(o==="input_text"||o==="output_text")&&typeof s=="string"&&t.push(s)}let n=t.join(`
`).trim();return n.length>0?n:null}function eh(e){let t=e.trimStart();for(let r of Zy)if(t.startsWith(`<${r}>`)&&e.includes(`</${r}>`))return!0;return t.startsWith("# AGENTS.md instructions")&&(/<INSTRUCTIONS>[\s\S]*<\/INSTRUCTIONS>/.test(e)||/<environment_context>[\s\S]*<\/environment_context>/.test(e))||t.startsWith("The following is the Codex agent history")&&e.includes("untrusted evidence")?!0:e.replace(/<image\b[^>]*\/?>|<\/image>/g,"").trim().length===0}function nh(e){return e.replace(th,"").trimEnd()}function od(e){try{return ls(JSON.parse(e))}catch{return null}}function rh(e){return e.startsWith("<")&&e.endsWith(">")}function ls(e){let t=e,n=t?.message?.usage??t?.usage;if(!n||typeof n!="object")return null;let r=i=>typeof n[i]=="number"?n[i]:0,o=t?.message?.model??t?.model,s=t?.message?.id;return{id:typeof s=="string"?s:"",model:typeof o=="string"&&!rh(o)?o:"",input:r("input_tokens"),output:r("output_tokens"),cached:r("cache_creation_input_tokens")}}function en(e){switch(e){case"codex":return sh;case"kimi":return ih;case"claude":return oh}}var sd,Qt,qy,is,Jy,Xy,as,nd,Yy,Zy,th,oh,sh,ih,ah,lh,ad,Zt=f(()=>{"use strict";b();Jc();ue();Q();ue();sd=y("TranscriptParser"),Qt=class{parseLine(t,n){return Zn(t,n)}parseUsageTokens(t,n){let r=od(t);return r?{input:r.input,output:r.output,cached:r.cached,...r.id&&{dedupKey:r.id},...r.model&&{model:r.model}}:{input:0,output:0,cached:0}}parseUsageByModel(t){let n=new Map,r=new Set;for(let o of t){let s=od(o);if(!s)continue;if(s.id){if(r.has(s.id))continue;r.add(s.id)}let i=n.get(s.model);i?n.set(s.model,{...i,input:i.input+s.input,output:i.output+s.output,cached:i.cached+s.cached}):n.set(s.model,{model:s.model,provider:"anthropic",input:s.input,output:s.output,cached:s.cached})}return[...n.values()].filter(o=>o.input+o.output+o.cached>0)}parseToolUse(t){let n=new L,r=[],o=new Map;for(let s of t){let i;try{i=JSON.parse(s)}catch{continue}let a=i,l=a?.message?.content;if(!Array.isArray(l))continue;let c=a.toolUseResult?.commandName,d=typeof c=="string"&&c.length>0?c:void 0,p=Gy(l)===1,m=tt(this.parseTimestamp(s));for(let g of l){let u=g;if(u.type==="tool_result"){d!==void 0&&p&&typeof u.tool_use_id=="string"&&o.set(u.tool_use_id,d);continue}if(u.type!=="tool_use"||typeof u.name!="string")continue;let h=typeof u.id=="string"?u.id:void 0;if(u.name==="Skill"&&typeof u.input?.skill=="string"){r.push({...h!==void 0?{id:h}:{},requested:u.input.skill,...m!==void 0?{atMs:m}:{}});continue}n.addOnce(h,{...He(u.name),...m!==void 0&&{lastCallAtMs:m}})}}for(let s of r)n.addOnce(s.id,{...et((s.id!==void 0?o.get(s.id):void 0)??s.requested),...s.atMs!==void 0&&{lastCallAtMs:s.atMs}});return n.values()}parseTimestamp(t,n){try{let r=JSON.parse(t);return typeof r.timestamp=="string"?r.timestamp:void 0}catch{return}}parseCompactions(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}if(o.isCompactSummary!==!0)continue;let s=tt(this.parseTimestamp(r));s!==void 0&&n.add(s)}return[...n].sort((r,o)=>r-o)}parseTestRuns(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}let s=o.message?.content;if(Array.isArray(s))for(let i of s){let a=i;if(a.type!=="tool_use"||a.name!=="Bash"||typeof a.input?.command!="string"||!os(a.input.command))continue;let l=tt(this.parseTimestamp(r));l!==void 0&&n.add(l)}}return[...n].sort((r,o)=>r-o)}},qy=new Set(["compacted","context_compacted"]);is=class{parseLine(t,n){try{let r=JSON.parse(t),o=typeof r.timestamp=="string"?r.timestamp:void 0;if(r.type!=="response_item")return null;let s=r.payload;if(!s||typeof s!="object"||s.type!=="message")return null;let i=s.role;if(i!=="user"&&i!=="assistant")return null;let a=Qy(s.content);if(a===null)return null;let l=nh(a);return l.length===0?null:i==="user"?eh(l)?null:{role:"human",content:l,timestamp:o}:{role:"assistant",content:l,timestamp:o}}catch(r){return sd.debug("Failed to parse Codex transcript line %d: %s",n,r.message),null}}parseToolUse(t){let n=new Map,r=[];for(let s of t){let i;try{i=JSON.parse(s)}catch{continue}let a=i?.payload;if(a===null||typeof a!="object")continue;let l=a;if(typeof l.type!="string"||!Jy.has(l.type))continue;let c=typeof l.invocation?.tool=="string"?l.invocation.tool:void 0,d=typeof l.invocation?.server=="string"?l.invocation.server:"",p;if(c!==void 0)p=d?Ze(d,c):M(c);else if(typeof l.name=="string"&&l.name.length>0)p=Xc(l.name,typeof l.namespace=="string"?l.namespace:void 0);else continue;let m=i.timestamp,g=tt(typeof m=="string"?m:void 0),u={...p,...g!==void 0&&{lastCallAtMs:g}},h=typeof l.call_id=="string"?l.call_id:void 0;if(h===void 0){r.push(u);continue}let T=n.get(h),E=T===void 0||T.kind!=="mcp"&&u.kind==="mcp"?u:T;n.set(h,{...E,...T?ed(T.lastCallAtMs,u.lastCallAtMs):ed(u.lastCallAtMs)})}let o=new L;for(let s of[...n.values(),...r])o.add(s);return o.values()}parseUnrecognizedRows(t){let n=0;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}if(o?.type!=="response_item")continue;let s=o.payload;if(s===null||typeof s!="object")continue;let i=s.type;if(typeof i=="string"){if(!Xy.has(i)){n++;continue}i==="message"&&zy(s)&&n++}}return n}parseCompactions(t){return td(t,qy)}parseTurnAborts(t){return td(t,new Set(["turn_aborted"]))}parseTestRuns(t){let n=new Set;for(let r of t){let o;try{o=JSON.parse(r)}catch{continue}let s=o?.payload;if(s===null||typeof s!="object")continue;let i=s;if(i.type!=="function_call"||i.name!=="exec_command")continue;let a;try{a=(typeof i.arguments=="string"?JSON.parse(i.arguments):{}).cmd}catch{continue}if(typeof a!="string"||!os(a))continue;let l=o.timestamp,c=tt(typeof l=="string"?l:void 0);c!==void 0&&n.add(c)}return[...n].sort((r,o)=>r-o)}},Jy=new Set(["function_call","custom_tool_call","local_shell_call","web_search_call","mcp_tool_call_end"]),Xy=new Set(["message","reasoning","function_call","function_call_output","custom_tool_call","custom_tool_call_output","local_shell_call","local_shell_call_output","tool_search_call","tool_search_output","web_search_call","mcp_tool_call_begin","mcp_tool_call_end"]),as=class{parseLine(t,n){try{let r=JSON.parse(t),o=r.type,s=rd(r);if(o==="turn.prompt"){let a=id(r.input)?.trim();return a?{role:"human",content:a,timestamp:s}:null}let i=Vy(r);if(i&&i.type==="text"){let a=typeof i.text=="string"?i.text.trim():"";return a?{role:"assistant",content:a,timestamp:s}:null}return null}catch(r){return sd.debug("Failed to parse Kimi transcript line %d: %s",n,r.message),null}}parseToolUse(t){let n=new L;for(let r of t){if(!r.includes(nd))continue;let o;try{o=JSON.parse(r)}catch{continue}if(o.type!==nd)continue;let s=o.event;if(s===null||typeof s!="object"||s.type!=="tool.call"||typeof s.name!="string")continue;let i=tt(this.parseTimestamp(r));n.addOnce(typeof s.toolCallId=="string"?s.toolCallId:void 0,{...s.name===Yy&&typeof s.args?.skill=="string"?et(s.args.skill):He(s.name),...i!==void 0&&{lastCallAtMs:i}})}return n.values()}parseTimestamp(t,n){try{return rd(JSON.parse(t))}catch{return}}},nd="context.append_loop_event",Yy="Skill";Zy=["recommended_plugins","environment_context","skill","turn_aborted"];th=/(?:\s*<oai-mem-citation>(?:(?!<\/oai-mem-citation>)[\s\S])*<\/oai-mem-citation>)+\s*$/;oh=new Qt,sh=new is,ih=new as;ah=["claude","codex","kimi"],lh=["gemini","opencode","antigravity","cursor","cursor-cli","cline-cli","devin","hermes"],ad=new Set([...ah.filter(e=>en(e).parseToolUse!==void 0),...lh])});function er(e,t){let n=Number.NaN;for(let r of e.invocations){let o=Date.parse(r.at);Number.isFinite(o)&&(!Number.isFinite(n)||o>n)&&(n=o)}return{name:e.skill,kind:"skill",calls:e.invocations.length,...e.plugin!==void 0?{plugin:e.plugin}:{},...e.originRoot!==void 0?{originRoot:e.originRoot}:{},...Number.isFinite(n)?{lastCallAtMs:n}:{},...t!==void 0?{usage:t}:{},...e.invocations.length>0?{invocations:e.invocations}:{},...e.detection!==void 0?{detection:e.detection}:{}}}var ds=f(()=>{"use strict"});function Mh(e){let t=Ph.exec(e);if(!t)return;let n=Oh[t[1][0].toUpperCase()+t[1].slice(1).toLowerCase()];if(n===void 0)return;let r=Number(t[4])%12;/pm/i.test(t[6])&&(r+=12);let o=Number(t[7]),s=t[8]?Number(t[8]):0,i=o>=0?o*60+s:o*60-s;return Date.UTC(Number(t[3]),n,Number(t[2]),r,Number(t[5]))-i*6e4}function yd(e){let t=Lh.exec(e);return t?Mh(t[1]):void 0}function rr(e){if(typeof e!="object"||e===null||Array.isArray(e))return;let t=e;if(t.role!=="user")return;let r=(typeof t.message=="object"&&t.message!==null?t.message:void 0)?.content;if(typeof r=="string")return yd(r);if(Array.isArray(r))for(let o of r){if(typeof o!="object"||o===null)continue;let s=o;if(s.type==="text"&&typeof s.text=="string"){let i=yd(s.text);if(i!==void 0)return i}}}var Oh,Lh,Ph,hd,ms=f(()=>{"use strict";Oh={Jan:0,Feb:1,Mar:2,Apr:3,May:4,Jun:5,Jul:6,Aug:7,Sep:8,Oct:9,Nov:10,Dec:11},Lh=/<timestamp>([\s\S]*?)<\/timestamp>/i,Ph=/([A-Za-z]{3}) (\d{1,2}), (\d{4}), (\d{1,2}):(\d{2})\s*(AM|PM) \(UTC([+-]\d{1,2})(?::?(\d{2}))?\)/i,hd=/<timestamp>[\s\S]*?<\/timestamp>\s*/gi});var Cd=f(()=>{"use strict"});var _s={};D(_s,{CLAUDE_DISK_SCAN_WINDOW_MS:()=>xd,claudeProjectsRoot:()=>Dd,claudeSessionsForRepo:()=>dS,scanClaudeSessionsOnDisk:()=>cS});function Dd(){return(0,Ct.join)((0,Id.homedir)(),".claude","projects")}async function iS(e,t,n){let r=Buffer.allocUnsafe(n),{bytesRead:o}=await e.read(r,0,n,t);return r.subarray(0,o).toString("utf-8")}function hs(e,t,n){return P(n,()=>iS(e,t,n))}function Ss(e,t=0){let n,r=[],o=e.split(`
`);for(let s=0;s<o.length;s++){let i=o[s].trim();if(!i.startsWith("{"))continue;let a;try{a=JSON.parse(i)}catch{continue}if(typeof a.cwd=="string"&&a.cwd.length>0&&!r.includes(a.cwd)&&r.push(a.cwd),!a.message||typeof a.message!="object")continue;let l=Zn(i,t+s);l?.timestamp&&(n=l.timestamp)}return{...n!==void 0?{lastTurnAt:n}:{},dirs:r}}function Nd(e,t,n){let r=Date.parse(e);return Number.isFinite(r)&&n-r<=t}function Ad(e,t,n){return!e.lastTurnAt||!Nd(e.lastTurnAt,t,n)?null:{lastTurnAt:e.lastTurnAt,dirs:e.dirs,complete:!0}}async function aS(e,t,n,r,o){let s=await(0,nn.open)(e,"r");try{let{size:i}=await s.stat();if(i===0)return null;if(i<=sS){let m=await hs(s,0,i);return Ad(Ss(m),t,n)}let a,l=rS;for(;;){let m=Math.max(0,i-l),g=Ss(await hs(s,m,i-m));if(g.lastTurnAt){a=g;break}if(m===0)return null;l*=oS}let c=a.lastTurnAt;if(!Nd(c,t,n))return null;let d=Date.parse(c);if(o?.("claude",r,d))return ar.debug("claude %s already recorded at its last turn -- skipping the full read",r),{lastTurnAt:c,dirs:a.dirs,complete:!1};let p=await hs(s,0,i);return Ad(Ss(p),t,n)}finally{await s.close()}}async function lS(e){let t;try{t=await(0,nn.readdir)(e)}catch(r){return $(r)||ar.info("cannot list %s: %s",e,R(r)),[]}let n=[];for(let r of t)try{for(let o of await(0,nn.readdir)((0,Ct.join)(e,r)))o.endsWith(".jsonl")&&n.push((0,Ct.join)(e,r,o))}catch{}return n}async function cS(e={}){let t=e.projectsRoot??Dd(),n=e.windowMs??xd,r=e.now?.()??Date.now(),o=await lS(t);if(o.length===0)return[];let i=(await q(o,async a=>{let l=(0,Ct.basename)(a).replace(/\.jsonl$/,"");try{let c=await aS(a,n,r,l,e.alreadyRecorded);return c?{sessionId:l,transcriptPath:a,updatedAt:c.lastTurnAt,dirs:c.dirs,complete:c.complete}:null}catch(c){return ar.debug("skipping unreadable transcript %s: %s",a,R(c)),null}},e.concurrency)).filter(a=>a!==null);return ar.info("claude disk scan: %d of %d transcript(s) inside the window",i.length,o.length),i}function dS(e,t){let n=[];for(let r of e)r.dirs.some(o=>z(o,t))&&n.push({sessionId:r.sessionId,transcriptPath:r.transcriptPath,updatedAt:r.updatedAt,source:"claude"});return n}var nn,Id,Ct,ar,xd,rS,oS,sS,Es=f(()=>{"use strict";nn=require("node:fs/promises"),Id=require("node:os"),Ct=require("node:path");b();Me();Re();Cd();Q();ar=y("ClaudeSessionDiscoverer"),xd=6048e5,rS=64*1024,oS=8,sS=96*1024});function Ts(e,t,n,r,o){e.size>=t&&!e.has(n)&&(o?.(e.size),e.clear()),e.set(n,r)}var vd=f(()=>{"use strict"});var dr={};D(dr,{codexSessionsForRepo:()=>Hd,discoverCodexSessions:()=>pS,isCodexInstalled:()=>mS,resetCodexSessionMetaMemo:()=>wS,scanCodexSessionsOnDisk:()=>Ud});async function pS(e,t){return Hd(await Ud(t),e)}async function Ud(e){let t=(0,me.join)((0,ws.homedir)(),Fd),n=e??uS,r=[],o=(0,me.join)(t,"sessions");r.push(...await fS(o,n));let s=(0,me.join)(t,"archived_sessions");return r.push(...await TS(s,n)),pe.debug("Codex disk scan: %d rollout(s) inside the window",r.length),r}function Hd(e,t){let n=(0,me.resolve)(t),r=[];for(let o of e)o.dirs.some(s=>z((0,me.resolve)(s),n))&&r.push({sessionId:o.sessionId,transcriptPath:o.transcriptPath,updatedAt:o.updatedAt,source:"codex"});return pe.debug("Discovered %d Codex session(s) for %s",r.length,t),r}async function mS(){let e=(0,me.join)((0,ws.homedir)(),Fd);try{return(await(0,rn.stat)(e)).isDirectory()}catch{return!1}}async function fS(e,t){let n=await ks(e);if(!("entries"in n))return jd("Codex sessions directory",e,n.errno),[];let r=await Ld(n.entries.map(i=>(0,me.join)(e,i))),o=await Ld(r),s=await q(o,_S);return $d(s.flat(),t)}function hS(e){let t=J(e).split("/"),[n,r,o]=t.slice(-3);return n===void 0||r===void 0||o===void 0||!/^\d{4}$/.test(n)||!/^\d{2}$/.test(r)||!/^\d{2}$/.test(o)?null:`${n}${r}${o}`}function Od(e,t){let n=t==="local"?e.getFullYear():e.getUTCFullYear(),r=(t==="local"?e.getMonth():e.getUTCMonth())+1,o=t==="local"?e.getDate():e.getUTCDate();return`${n}${String(r).padStart(2,"0")}${String(o).padStart(2,"0")}`}function SS(e=new Date){let t=new Date(e.getTime()-yS),n=Od(t,"local"),r=Od(t,"utc");return n<r?n:r}async function _S(e){let t=hS(e);if(t===null||t>=SS())return bs(await Rs(e))??[];let n=lr.get(e);if(n!==void 0)return n;let r=bs(await Rs(e));return r===null?[]:(Ts(lr,gS,e,r,o=>pe.debug("Codex day-listing memo hit %d entries \u2014 clearing",o)),r)}function ES(e){let t=J(e).lastIndexOf("/");t<=0||lr.delete(e.slice(0,t))}async function Ld(e){let t=await q(e,async n=>bs(await ks(n)));return e.flatMap((n,r)=>(t[r]??[]).map(o=>(0,me.join)(n,o)))}async function ks(e){try{return{entries:(await(0,rn.readdir)(e)).sort()}}catch(t){return{errno:t.code??"unknown"}}}function bs(e){return"entries"in e?e.entries:null}function jd(e,t,n){n==="ENOENT"?pe.debug("%s not found: %s",e,t):pe.debug("%s not readable (%s): %s",e,n,t)}async function Rs(e){let t=await ks(e);return"entries"in t?{entries:t.entries.filter(n=>n.endsWith(".jsonl")).map(n=>(0,me.join)(e,n))}:t}async function $d(e,t){return(await q(e,r=>kS(r,t))).filter(r=>r!==null)}async function TS(e,t){let n=await Rs(e);return"entries"in n?$d(n.entries,t):(jd("Codex archived sessions directory",e,n.errno),[])}function RS(e,t){Ts(cr,bS,e,t,n=>pe.debug("Codex session_meta memo hit %d entries \u2014 clearing",n))}function wS(){cr.clear(),lr.clear()}async function kS(e,t){let n=await IS(e);if(n.kind!=="ok")return n.kind==="missing"&&(ES(e),cr.delete(e)),pe.debug("Cannot stat Codex session file: %s",e),null;let r=n.mtimeMs,o=Date.now()-r;if(o>t)return pe.debug("Stale Codex rollout %s (age: %dh)",e,Math.round(o/36e5)),null;let s=cr.get(e);if(s!==void 0&&r>=s.mtimeMsAtRead)return{sessionId:s.sessionId,transcriptPath:e,updatedAt:new Date(r).toISOString(),dirs:[s.cwd]};let i;try{i=await CS(e)}catch{return pe.debug("Cannot read Codex session file: %s",e),null}if(!i)return null;try{let a=JSON.parse(i);if(a.type!=="session_meta")return pe.debug("First line is not session_meta in %s",e),null;let l=a.payload;if(!l||typeof l!="object")return null;let c=l.cwd,d=l.id;return typeof c!="string"||typeof d!="string"?null:(RS(e,{sessionId:d,cwd:c,mtimeMsAtRead:r}),{sessionId:d,transcriptPath:e,updatedAt:new Date(r).toISOString(),dirs:[c]})}catch(a){return pe.debug("Failed to parse session_meta from %s: %s",e,a.message),null}}function CS(e){return P(0,()=>AS(e))}function AS(e){return new Promise((t,n)=>{let r=(0,Pd.createReadStream)(e,{encoding:"utf-8"}),o=(0,Md.createInterface)({input:r,crlfDelay:Number.POSITIVE_INFINITY}),s=!1;o.on("line",i=>{s=!0,o.close(),r.destroy(),t(i)}),o.on("close",()=>{s||t("")}),r.on("error",i=>{s||n(i)})})}async function IS(e){let t;try{t=(await P(0,()=>(0,rn.stat)(e))).mtime.getTime()}catch(n){let r=n?.code;return{kind:r==="ENOENT"||r==="ENOTDIR"?"missing":"unreadable"}}return Number.isFinite(t)?{kind:"ok",mtimeMs:t}:{kind:"unreadable"}}var Pd,rn,ws,me,Md,pe,uS,Fd,lr,gS,yS,cr,bS,ur=f(()=>{"use strict";Pd=require("node:fs"),rn=require("node:fs/promises"),ws=require("node:os"),me=require("node:path"),Md=require("node:readline");b();vd();Me();V();Re();pe=y("CodexDiscoverer"),uS=2880*60*1e3,Fd=".codex";lr=new Map,gS=5e3,yS=1440*60*1e3;cr=new Map,bS=2e4});function an(e,t=(0,sn.homedir)()){switch((0,sn.platform)()){case"darwin":return(0,ot.join)(t,"Library","Application Support",e);case"win32":return(0,ot.join)(process.env.APPDATA??(0,ot.join)(t,"AppData","Roaming"),e);default:return(0,ot.join)(t,".config",e)}}function it(e,t){return(0,ot.join)(an(e,t),"User","workspaceStorage")}function st(e){let t=e.replace(/\\/g,"/"),n=t.length;for(;n>0&&t[n-1]==="/";)n--;let r=t.slice(0,n),o=(0,sn.platform)();return o==="darwin"||o==="win32"?r.toLowerCase():r}async function Kd(e,t,n){let r=(0,ot.join)(t,n,"workspace.json"),o;try{let s=await(0,on.readFile)(r,"utf8"),i=JSON.parse(s);o=typeof i.folder=="string"?i.folder:void 0}catch{return}if(!(!o||!o.startsWith("file://")))try{return(0,Wd.fileURLToPath)(o)}catch{Cs.warn("%s workspace %s has unparseable folder URI: %s",e,n,o);return}}async function Gd(e){let t=it(e),n;try{n=await(0,on.readdir)(t)}catch{return Cs.debug("%s workspaceStorage not readable at %s",e,t),[]}let r=[];for(let o of n){let s=await Kd(e,t,o);s!==void 0&&r.push({hash:o,folderPath:s})}return r}async function qd(e,t){let n=it(e),r;try{r=await(0,on.readdir)(n)}catch{return Cs.debug("%s workspaceStorage not readable at %s",e,n),null}let o=st(t);for(let s of r){let i=await Kd(e,n,s);if(i!==void 0&&st(i)===o)return s}return null}var on,sn,ot,Wd,Cs,Bd,ln=f(()=>{"use strict";on=require("node:fs/promises"),sn=require("node:os"),ot=require("node:path"),Wd=require("node:url");b();Cs=y("VscodeWorkspaceLocator"),Bd=["Code","Code - Insiders","Cursor","VSCodium","Windsurf"]});function Xd(e){return(0,Jd.join)(an("Cursor",e),"User","globalStorage","state.vscdb")}var Jd,vN,Yd=f(()=>{"use strict";Jd=require("node:path");b();Y();ln();vN=y("CursorDetector")});function Is(e=(0,As.homedir)()){return(0,mr.join)(e,".cursor")}function fr(e=(0,As.homedir)()){return(0,mr.join)(Is(e),"projects")}async function gr(e){try{return await(0,pr.readdir)(e)}catch(t){return t.code==="ENOENT"?[]:void 0}}async function Vd(e,t,n){let r=(0,mr.join)(e,t,"agent-transcripts",n,`${n}.jsonl`);try{return(await(0,pr.stat)(r)).isFile()?r:void 0}catch{return}}async function yr(e,t,n,r){if(r!==void 0){let o=await Vd(e,r,n);if(o!==void 0)return{path:o,bucket:r}}for(let o of t){let s=await Vd(e,o,n);if(s!==void 0)return{path:s,bucket:o}}}function xs(e){return e.endsWith(".jsonl")}var pr,As,mr,hr=f(()=>{"use strict";pr=require("node:fs/promises"),As=require("node:os"),mr=require("node:path")});var Sr={};D(Sr,{cursorSessionsForRepo:()=>NS,discoverCursorSessions:()=>vS,scanCursorComposersOnDisk:()=>Zd,scanCursorSessions:()=>Qd});async function Qd(e,t){let n=await tu(e);if(n===null)return Z.debug("No Cursor workspace found matching %s",e),{sessions:[]};let{composers:r,error:o}=await Zd(),s=await eu(r,e,n,t);return o?{sessions:s,error:o}:{sessions:s}}async function Zd(){let e=Xd();try{await(0,Ds.stat)(e)}catch(t){if(t.code!=="ENOENT"){let r=O(t);return r?(Z.error("Cursor global DB stat failed (%s): %s",r.kind,r.message),{composers:[],error:r}):{composers:[]}}return Z.debug("Cursor global DB not present at %s \u2014 treating as not installed",e),{composers:[]}}try{let t=[],n=new Set;return await v(e,r=>{let o=r.prepare("SELECT key, value FROM cursorDiskKV WHERE key LIKE 'composerData:%'").all();for(let s of o){let i;try{i=JSON.parse(s.value)}catch{Z.warn("Skipping Cursor composer row %s: invalid JSON",s.key);continue}if(i===null||typeof i!="object"){Z.debug("Skipping Cursor composer row %s: value is not a JSON object",s.key);continue}let a=i,l=typeof a.composerId=="string"?a.composerId:null;if(l===null){Z.warn("Skipping Cursor composer row %s: missing composerId",s.key);continue}let c=a.lastUpdatedAt;if(typeof c!="number"||!Number.isFinite(c)){Z.debug("Skipping Cursor composer %s: non-finite lastUpdatedAt",l);continue}if(n.has(l))continue;n.add(l);let d=typeof a.name=="string"?a.name.trim():"",p=d.length>0?d:void 0;t.push({session:{sessionId:l,transcriptPath:`${e}#${l}`,updatedAt:new Date(c).toISOString(),source:"cursor",title:p},lastUpdatedAt:c})}}),Z.debug("Cursor disk scan: %d composer(s) in the global store",t.length),{composers:await DS(t)}}catch(t){let n=O(t);return n===null?(Z.debug("Cursor global DB disappeared between detection and scan: %s",t.message),{composers:[]}):(Z.error("Cursor scan failed (%s): %s",n.kind,n.message),{composers:[],error:n})}}async function DS(e,t=fr()){let n=await gr(t);if(n===void 0||n.length===0)return[...e];let r=[],o;for(let s of e){let i=await yr(t,n,s.session.sessionId,o);if(i===void 0){r.push(s);continue}o=i.bucket,r.push({...s,session:{...s.session,transcriptPath:i.path}})}return r}async function NS(e,t,n){let r=await tu(t);return r===null?(Z.debug("No Cursor workspace found matching %s",t),[]):eu(e,t,r,n)}async function eu(e,t,n,r){let o=new Set(await OS(n)),s=Date.now()-(r??xS),i=e.filter(({session:a,lastUpdatedAt:l})=>o.has(a.sessionId)||l>=s).map(({session:a})=>a);return Z.debug("Discovered %d Cursor session(s) for %s",i.length,t),i}async function vS(e,t){let{sessions:n}=await Qd(e,t);return n}async function tu(e){return qd("Cursor",e)}async function OS(e){let t=it("Cursor"),n=(0,zd.join)(t,e,"state.vscdb");try{await(0,Ds.stat)(n)}catch(r){return $(r)?(Z.debug("Cursor workspace DB not found at %s \u2014 skipping anchor extraction",n),[]):(Z.warn("Cursor workspace DB stat failed at %s: %s",n,R(r)),[])}try{return await v(n,r=>{let o=r.prepare("SELECT value FROM ItemTable WHERE key = 'composer.composerData' LIMIT 1").get();if(!o)return[];let s;try{s=JSON.parse(o.value)}catch{return Z.warn("Cursor workspace %s composer.composerData is not valid JSON",e),[]}let i=Array.isArray(s.lastFocusedComposerIds)?s.lastFocusedComposerIds.filter(c=>typeof c=="string"):[],a=Array.isArray(s.selectedComposerIds)?s.selectedComposerIds.filter(c=>typeof c=="string"):[],l=new Set([...i,...a]);return Array.from(l)})}catch(r){return Z.warn("Failed to read Cursor workspace anchor IDs from %s: %s",n,R(r)),[]}}var Ds,zd,Z,xS,_r=f(()=>{"use strict";Ds=require("node:fs/promises"),zd=require("node:path");b();Yd();hr();Y();ln();Z=y("CursorDiscoverer"),xS=2880*60*1e3});var Tr={};D(Tr,{cwdFromState:()=>su,discoverKimiSessions:()=>FS,isKimiInstalled:()=>US,kimiCodeHome:()=>Ns,kimiSessionsForRepo:()=>ou,scanKimiSessionsOnDisk:()=>ru});function Ns(){return process.env.KIMI_CODE_HOME||(0,Ee.join)((0,nu.homedir)(),PS)}async function FS(e,t){return ou(await ru(t),e)}async function ru(e){let t=(0,Ee.join)(Ns(),"sessions"),n=e??LS,r=[],o;try{o=await(0,$e.readdir)(t)}catch{return Er.debug("Kimi sessions directory not found: %s",t),r}let s=[];for(let a of o){let l=(0,Ee.join)(t,a),c;try{c=await(0,$e.readdir)(l)}catch{continue}for(let d of c)s.push({sessionId:d,sessionDir:(0,Ee.join)(l,d)})}let i=await q(s,({sessionId:a,sessionDir:l})=>HS(l,a,n));return r.push(...i.filter(a=>a!==null)),Er.debug("Kimi disk scan: %d session(s) inside the window",r.length),r}function ou(e,t){let n=(0,Ee.resolve)(t),r=B(e,o=>z((0,Ee.resolve)(o),n));return Er.debug("Discovered %d Kimi session(s) for %s",r.length,t),r}async function US(){let e=Ns();try{return(await(0,$e.stat)(e)).isDirectory()}catch{return!1}}async function HS(e,t,n){let r=(0,Ee.join)(e,"agents","main","wire.jsonl"),o;try{o=(await P(0,()=>(0,$e.stat)(r))).mtime.toISOString()}catch{return null}if(Date.now()-new Date(o).getTime()>n)return null;let s=await P(0,()=>jS(e)),i=su(s);if(!i)return Er.debug("No working directory in state.json for Kimi session %s",t),null;let a=$S(s);return{session:{sessionId:t,transcriptPath:r,updatedAt:o,source:"kimi",...a?{title:a}:{}},dirs:[i]}}async function jS(e){try{let t=await(0,$e.readFile)((0,Ee.join)(e,"state.json"),"utf-8"),n=JSON.parse(t);return n&&typeof n=="object"?n:null}catch{return null}}function su(e){if(!e)return null;for(let t of MS){let n=e[t];if(typeof n=="string"&&n.length>0)return n}return null}function $S(e){let t=e?.title;return typeof t=="string"&&t.length>0?t:void 0}var $e,nu,Ee,Er,LS,PS,MS,br=f(()=>{"use strict";$e=require("node:fs/promises"),nu=require("node:os"),Ee=require("node:path");b();Me();ce();Re();Er=y("KimiDiscoverer"),LS=2880*60*1e3,PS=".kimi-code";MS=["workDir","cwd","workingDirectory","workspaceRoot","projectRoot","root"]});var Rr={};D(Rr,{NODE_SQLITE_MIN_VERSION:()=>KS,classifyScanError:()=>vs,discoverOpenCodeSessions:()=>XS,getOpenCodeDbPath:()=>Ps,hasNodeSqliteSupport:()=>BS,isOpenCodeInstalled:()=>JS,isOpenCodePresent:()=>au,openCodeSessionsForRepo:()=>du,scanOpenCodeSessions:()=>lu,scanOpenCodeSessionsOnDisk:()=>cu,withOpenCodeDb:()=>WS});function qS(){return process.env.XDG_DATA_HOME||(0,Ls.join)((0,iu.homedir)(),".local","share")}function Ps(){return(0,Ls.join)(qS(),"opencode","opencode.db")}async function JS(){return oe()?au():(We.info("OpenCode support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,Le.major,Le.minor),!1)}async function au(){let e=Ps();try{return(await(0,Os.stat)(e)).isFile()}catch{return!1}}async function lu(e,t){let{sessions:n,error:r}=await cu(t),o=du(n,e);return r?{sessions:o,error:r}:{sessions:o}}async function cu(e){let t=Ps(),n=e??GS,r=Date.now()-n;try{await(0,Os.stat)(t)}catch(o){if(o.code!=="ENOENT"){let i=vs(o);return i?(We.error("OpenCode DB stat failed (%s): %s",i.kind,i.message),{sessions:[],error:i}):{sessions:[]}}return We.debug("OpenCode DB not present at %s \u2014 treating as not installed",t),{sessions:[]}}try{let o=await v(t,s=>s.prepare(`SELECT id, title, time_created, time_updated, directory
					 FROM session
					 WHERE time_updated > :cutoff`).all({cutoff:r}).flatMap(a=>Number.isFinite(a.time_updated)?[{session:{sessionId:String(a.id),transcriptPath:`${t}#${a.id}`,updatedAt:new Date(a.time_updated).toISOString(),source:"opencode",title:typeof a.title=="string"&&a.title.trim().length>0?a.title:void 0},dirs:[a.directory]}]:(We.warn("Skipping OpenCode session %s: non-finite time_updated",a.id),[])));return We.debug("OpenCode disk scan: %d session(s) inside the window",o.length),{sessions:o}}catch(o){let s=vs(o);return s===null?(We.debug("OpenCode DB disappeared between detection and scan: %s",o.message),{sessions:[]}):(We.error("OpenCode scan failed (%s): %s",s.kind,s.message),{sessions:[],error:s})}}function du(e,t){let n=B(e,r=>z(r,t));return We.debug("Discovered %d OpenCode session(s) for %s",n.length,t),n}async function XS(e,t){let{sessions:n}=await lu(e,t);return n}var Os,iu,Ls,WS,vs,BS,KS,We,GS,wr=f(()=>{"use strict";Os=require("node:fs/promises"),iu=require("node:os"),Ls=require("node:path");b();ce();Re();Y();WS=v,vs=O,BS=oe,KS=Le,We=y("OpenCodeDiscoverer"),GS=2880*60*1e3});function mu(){return(0,pu.join)((0,uu.homedir)(),".copilot","session-store.db")}var uu,pu,VN,fu=f(()=>{"use strict";uu=require("node:os"),pu=require("node:path");b();Y();VN=y("CopilotDetector")});var kr={};D(kr,{copilotSessionsForRepo:()=>_u,discoverCopilotSessions:()=>zS,scanCopilotSessions:()=>hu,scanCopilotSessionsOnDisk:()=>Su});function VS(e){return(0,yu.resolve)(e)}async function hu(e,t){let{sessions:n,error:r}=await Su(t),o=_u(n,e);return r?{sessions:o,error:r}:{sessions:o}}async function Su(e){let t=mu(),n=e??YS,r=Date.now()-n;try{await(0,gu.stat)(t)}catch(o){if(o.code!=="ENOENT"){let i=O(o);return i?(Be.error("Copilot DB stat failed (%s): %s",i.kind,i.message),{sessions:[],error:i}):{sessions:[]}}return Be.debug("Copilot DB not present at %s \u2014 treating as not installed",t),{sessions:[]}}try{let o=await v(t,s=>s.prepare(`SELECT id, cwd, repository, branch, host_type, summary, created_at, updated_at
					 FROM sessions`).all().flatMap(a=>{let l=Date.parse(a.updated_at);return Number.isFinite(l)?l<r?[]:[{session:{sessionId:String(a.id),transcriptPath:`${t}#${a.id}`,updatedAt:new Date(l).toISOString(),source:"copilot",title:typeof a.summary=="string"&&a.summary.trim().length>0?a.summary:void 0},dirs:[a.cwd]}]:(Be.warn("Skipping Copilot session %s: non-finite updated_at",a.id),[])}));return Be.debug("Copilot disk scan: %d session(s) inside the window",o.length),{sessions:o}}catch(o){let s=O(o);return s===null?(Be.debug("Copilot DB disappeared between detection and scan: %s",o.message),{sessions:[]}):(Be.error("Copilot scan failed (%s): %s",s.kind,s.message),{sessions:[],error:s})}}function _u(e,t){let n=VS(t),r=B(e,o=>z(o,n));return Be.debug("Discovered %d Copilot session(s) for %s",r.length,n),r}async function zS(e,t){let{sessions:n,error:r}=await hu(e,t);return r&&Be.warn("Copilot scan error (%s) \u2014 sessions excluded from this run: %s",r.kind,r.message),n}var gu,yu,Be,YS,Cr=f(()=>{"use strict";gu=require("node:fs/promises"),yu=require("node:path");b();fu();ce();Re();Y();Be=y("CopilotDiscoverer"),YS=2880*60*1e3});var Ar={};D(Ar,{copilotChatSessionsForRepo:()=>wu,discoverCopilotChatSessions:()=>t_,scanCopilotChatSessions:()=>bu,scanCopilotChatSessionsOnDisk:()=>e_});async function QS(e){let t=(0,at.join)((0,Eu.homedir)(),".copilot","session-state"),n;try{n=await(0,Ge.readdir)(t)}catch(i){let a=i.code;return a==="ENOENT"?{sessions:[]}:(Ke.error("readdir %s failed (%s): %s",t,a??"unknown",i.message),{sessions:[],error:{kind:"fs",message:i.message}})}let r=e??Tu,o=Date.now()-r;return{sessions:(await q(n,async i=>{let a=(0,at.join)(t,i),l=(0,at.join)(a,"vscode.metadata.json"),c=(0,at.join)(a,"events.jsonl"),d;try{d=JSON.parse(await P(0,()=>(0,Ge.readFile)(l,"utf8")))}catch(g){return Ke.debug("Skipping %s: vscode.metadata.json read/parse failed (%s)",i,g.message),null}let p=d.workspaceFolder?.folderPath;if(typeof p!="string"||p.length===0)return null;let m;try{m=(await P(0,()=>(0,Ge.stat)(c))).mtimeMs}catch(g){return Ke.debug("Skipping %s: events.jsonl stat failed (%s)",i,g.message),null}return m<o?null:{session:{sessionId:i,transcriptPath:c,updatedAt:new Date(m).toISOString(),source:"copilot-chat"},dirs:[p]}})).filter(i=>i!==null)}}async function ZS(e,t){let n=await Gd("Code"),r=it("Code"),o=e??Tu,s=Date.now()-o,i=t===void 0?void 0:st(t),a,l=[];for(let p of n){if(i!==void 0&&st(p.folderPath)!==i)continue;let m=(0,at.join)(r,p.hash,"chatSessions"),g;try{g=await(0,Ge.readdir)(m)}catch(u){let h=u.code;if(h==="ENOENT")continue;Ke.error("readdir %s failed (%s): %s",m,h??"unknown",u.message),a=a??{kind:"fs",message:u.message};continue}for(let u of g)u.endsWith(".jsonl")&&l.push({path:(0,at.join)(m,u),sessionId:u.slice(0,-6),folderPath:p.folderPath})}let d=(await q(l,async({path:p,sessionId:m,folderPath:g})=>{let u;try{u=(await P(0,()=>(0,Ge.stat)(p))).mtimeMs}catch(h){return Ke.debug("Skipping %s: stat failed (%s)",m,h.message),null}return u<s?null:{session:{sessionId:m,transcriptPath:p,updatedAt:new Date(u).toISOString(),source:"copilot-chat"},dirs:[g]}})).filter(p=>p!==null);return a?{sessions:d,error:a}:{sessions:d}}async function bu(e,t){let{sessions:n,error:r}=await Ru(t,e),o=wu(n,e);return o.length>0&&Ke.debug("Discovered %d Copilot Chat session(s) for %s",o.length,e),{sessions:o,error:r}}async function Ru(e,t){let n=await QS(e),r=await ZS(e,t),o=[...n.sessions,...r.sessions],s=n.error??r.error;return n.error&&r.error&&Ke.debug("Both scans errored; reporting Scan A's, dropped Scan B's: %s",r.error.message),s?{sessions:o,error:s}:{sessions:o}}async function e_(e){return Ru(e)}function wu(e,t){let n=st(t);return B(e,r=>st(r)===n)}async function t_(e,t){let{sessions:n,error:r}=await bu(e,t);return r&&Ke.warn("Copilot Chat scan error (%s) \u2014 sessions excluded from this run: %s",r.kind,r.message),n}var Ge,Eu,at,Ke,Tu,Ir=f(()=>{"use strict";Ge=require("node:fs/promises"),Eu=require("node:os"),at=require("node:path");b();Me();ce();ln();Ke=y("CopilotChatDiscoverer"),Tu=2880*60*1e3});function r_(e,t){return(0,Cu.join)(an(e,t),"User","globalStorage",n_)}function Ms(e=(0,ku.homedir)()){return Bd.map(t=>r_(t,e))}var ku,Cu,n_,Au=f(()=>{"use strict";ku=require("node:os"),Cu=require("node:path");ln();n_="saoudrizwan.claude-dev"});var xr={};D(xr,{clineSessionsForRepo:()=>vu,discoverClineSessions:()=>i_,scanClineSessions:()=>Du,scanClineSessionsOnDisk:()=>Nu});async function s_(e,t){let n=(0,Fs.join)(e,"state","taskHistory.json"),r;try{let s=JSON.parse(await(0,Iu.readFile)(n,"utf8"));r=Array.isArray(s)?s:[]}catch(s){if(s.code==="ENOENT")return[];throw s}let o=[];for(let s of r){if(typeof s.id!="string"||typeof s.cwdOnTaskInitialization!="string"||typeof s.ts!="number"||!Number.isFinite(s.ts)||s.ts<t)continue;let i=new Date(s.ts);if(!Number.isFinite(i.getTime()))continue;let a=s.task?.trim();o.push({session:{sessionId:s.id,transcriptPath:(0,Fs.join)(e,"tasks",s.id,"api_conversation_history.json"),updatedAt:i.toISOString(),source:"cline",...a?{title:a}:{}},dirs:[s.cwdOnTaskInitialization]})}return o}async function Du(e,t=Ms(),n){let{sessions:r,error:o}=await Nu(t,n),s=vu(r,e);return o?{sessions:s,error:o}:{sessions:s}}async function Nu(e=Ms(),t){let n=t??o_,r=Date.now()-n,o=[],s;for(let i of e)try{o.push(...await s_(i,r))}catch(a){xu.warn("Cline flavor scan failed at %s: %s",i,a.message);let l=a instanceof SyntaxError?"parse":"fs";s=s??{kind:l,message:a.message}}return s?{sessions:o,error:s}:{sessions:o}}function vu(e,t){let n=W(t);return B(e,r=>W(r)===n)}async function i_(e,t){let{sessions:n,error:r}=await Du(e,void 0,t);return r&&xu.warn("Cline scan error (%s): %s",r.kind,r.message),n}var Iu,Fs,xu,o_,Dr=f(()=>{"use strict";Iu=require("node:fs/promises"),Fs=require("node:path");b();Au();ce();V();xu=y("ClineDiscoverer"),o_=2880*60*1e3});function a_(e=(0,Us.homedir)()){return(0,Hs.join)(e,".cline","data")}function js(e=(0,Us.homedir)()){return(0,Hs.join)(a_(e),"sessions")}var Us,Hs,Ou=f(()=>{"use strict";Us=require("node:os"),Hs=require("node:path")});var Nr={};D(Nr,{clineCliSessionsForRepo:()=>Fu,discoverClineCliSessions:()=>c_,scanClineCliSessions:()=>Pu,scanClineCliSessionsOnDisk:()=>Mu});async function Pu(e,t=js(),n){let{sessions:r,error:o}=await Mu(t,n),s=Fu(r,e);return o?{sessions:s,error:o}:{sessions:s}}async function Mu(e=js(),t){let n;try{n=await(0,At.readdir)(e)}catch(i){return i.code==="ENOENT"?{sessions:[]}:{sessions:[],error:{kind:"fs",message:i.message}}}let r=t??l_,o=Date.now()-r,s=[];for(let i of n){let a=(0,cn.join)(e,i,`${i}.json`),l;try{l=JSON.parse(await(0,At.readFile)(a,"utf8"))}catch(g){Lu.debug("Skipping %s: sidecar read/parse failed (%s)",i,g.message);continue}let c=l.workspace_root??l.cwd;if(typeof c!="string")continue;let d=typeof l.messages_path=="string"&&(0,cn.isAbsolute)(l.messages_path)?l.messages_path:(0,cn.join)(e,i,`${i}.messages.json`),p;try{p=(await(0,At.stat)(d)).mtimeMs}catch{continue}if(p<o)continue;let m=l.metadata?.title?.trim();s.push({session:{sessionId:l.session_id??i,transcriptPath:d,updatedAt:new Date(p).toISOString(),source:"cline-cli",...m?{title:m}:{}},dirs:[c]})}return{sessions:s}}function Fu(e,t){let n=W(t);return B(e,r=>W(r)===n)}async function c_(e,t){let{sessions:n,error:r}=await Pu(e,void 0,t);return r&&Lu.warn("Cline CLI scan error (%s): %s",r.kind,r.message),n}var At,cn,Lu,l_,vr=f(()=>{"use strict";At=require("node:fs/promises"),cn=require("node:path");b();Ou();ce();V();Lu=y("ClineCliDiscoverer"),l_=2880*60*1e3});var Pr={};D(Pr,{devinSessionsForRepo:()=>Bu,discoverDevinSessions:()=>y_,getDevinSessionsDbPath:()=>Lr,isDevinInstalled:()=>m_,isDevinPresent:()=>f_,scanDevinSessions:()=>$u,scanDevinSessionsAt:()=>Wu,scanDevinSessionsOnDisk:()=>g_,scanDevinSessionsOnDiskAt:()=>$s});function u_(e){if(typeof e!="string"||e.length===0)return[];let t;try{t=JSON.parse(e)}catch{return[]}return Array.isArray(t)?t.filter(n=>typeof n=="string"):[]}function p_(e,t){let n=typeof e=="string"?[e]:[];return n.push(...u_(t)),n}function Hu(e){let t=e??(0,Uu.homedir)();if(process.platform==="win32")return(0,It.join)(process.env.APPDATA??(0,It.join)(t,"AppData","Roaming"),"devin","cli");let n=process.env.XDG_DATA_HOME,r=n&&n.length>0?n:(0,It.join)(t,".local","share");return(0,It.join)(r,"devin","cli")}function Lr(e){return(0,It.join)(Hu(e),"sessions.db")}async function m_(){return oe()?ju():(Ie.info("Devin support disabled: this runtime is Node %s, requires 22.13+ for built-in SQLite",process.versions.node),!1)}async function ju(){try{return(await(0,Or.stat)(Lr())).isFile()}catch{return!1}}async function f_(){if(await ju())return!0;try{return(await(0,Or.stat)(Hu())).isDirectory()}catch{return!1}}async function $u(e,t){return Wu(Lr(),e,t)}async function Wu(e,t,n){let{sessions:r,error:o}=await $s(e,n),s=Bu(r,t);return o?{sessions:s,error:o}:{sessions:s}}async function g_(e){return $s(Lr(),e)}async function $s(e,t){if(!oe())return Ie.debug("Devin scan skipped: runtime Node %s lacks node:sqlite (requires 22.13+)",process.versions.node),{sessions:[]};let n=t??d_,r=Date.now()-n;try{await(0,Or.stat)(e)}catch(o){if(o.code!=="ENOENT"){let i=O(o);return i?(Ie.error("Devin DB stat failed (%s): %s",i.kind,i.message),{sessions:[],error:i}):{sessions:[]}}return Ie.debug("Devin DB not present at %s \u2014 treating as not installed",e),{sessions:[]}}try{let o=await v(e,s=>{let i=Math.floor(r/1e3);return s.prepare(`SELECT id, title, last_activity_at, working_directory, workspace_dirs
					 FROM sessions
					 WHERE hidden = 0
					   AND last_activity_at > :cutoff`).all({cutoff:i}).flatMap(l=>Number.isFinite(l.last_activity_at)?[{session:{sessionId:String(l.id),transcriptPath:`${e}#${l.id}`,updatedAt:new Date(l.last_activity_at*1e3).toISOString(),source:"devin",title:typeof l.title=="string"&&l.title.trim().length>0?l.title:void 0},dirs:p_(l.working_directory,l.workspace_dirs)}]:(Ie.warn("Skipping Devin session %s: non-finite last_activity_at",l.id),[]))});return Ie.debug("Devin disk scan: %d session(s) inside the window",o.length),{sessions:o}}catch(o){let s=O(o);return s===null?(Ie.debug("Devin DB disappeared between detection and scan: %s",o.message),{sessions:[]}):(Ie.error("Devin scan failed (%s): %s",s.kind,s.message),{sessions:[],error:s})}}function Bu(e,t){let n=B(e,r=>z(r,t));return Ie.debug("Discovered %d Devin session(s) for %s",n.length,t),n}async function y_(e,t){let{sessions:n}=await $u(e,t);return n}var Or,Uu,It,Ie,d_,Mr=f(()=>{"use strict";Or=require("node:fs/promises"),Uu=require("node:os"),It=require("node:path");b();ce();Re();Y();Ie=y("DevinDiscoverer"),d_=2880*60*1e3});var jr={};D(jr,{cursorCliSessionsForRepo:()=>Ju,discoverCursorCliSessions:()=>__,getCursorCliChatsDir:()=>Hr,getCursorCliDir:()=>Ku,getCursorCliProjectsDir:()=>Ws,isCursorCliInstalled:()=>S_,scanCursorCliSessions:()=>Gu,scanCursorCliSessionsOnDisk:()=>qu});function Ku(e=(0,dn.homedir)()){return Is(e)}function Hr(e=(0,dn.homedir)()){return(0,Ur.join)(Ku(e),"chats")}function Ws(e=(0,dn.homedir)()){return fr(e)}async function S_(e=(0,dn.homedir)()){try{return(await(0,lt.stat)(Hr(e))).isDirectory()}catch{return!1}}async function Gu(e,t=Hr(),n=Ws(),r){let{sessions:o,error:s}=await qu(t,n,r),i=Ju(o,e);return s?{sessions:i,error:s}:{sessions:i}}async function qu(e=Hr(),t=Ws(),n){let r;try{r=await(0,lt.readdir)(e)}catch(c){return c.code==="ENOENT"?{sessions:[]}:{sessions:[],error:{kind:"fs",message:c.message}}}let o=n??h_,s=Date.now()-o,i=[],a=await gr(t);if(a===void 0)return{sessions:[],error:{kind:"fs",message:`cannot read ${t}`}};let l;for(let c of r){let d;try{d=await(0,lt.readdir)((0,Ur.join)(e,c))}catch{continue}for(let p of d){let m;try{m=JSON.parse(await(0,lt.readFile)((0,Ur.join)(e,c,p,"meta.json"),"utf8"))}catch(T){Fr.debug("Skipping %s: meta.json read/parse failed (%s)",p,T.message);continue}if(typeof m.cwd!="string")continue;let g=m.updatedAtMs??m.createdAtMs;if(typeof g!="number"||!Number.isFinite(g)){Fr.warn("Skipping Cursor CLI session %s: non-finite updatedAtMs",p);continue}if(g<s)continue;let u=await yr(t,a,p,l);if(!u){Fr.debug("Skipping Cursor CLI session %s: no transcript JSONL found",p);continue}l=u.bucket;let h=m.title?.trim();i.push({session:{sessionId:p,transcriptPath:u.path,updatedAt:new Date(g).toISOString(),source:"cursor-cli",...h?{title:h}:{}},dirs:[m.cwd]})}}return{sessions:i}}function Ju(e,t){let n=W(t);return B(e,r=>W(r)===n)}async function __(e,t){let{sessions:n,error:r}=await Gu(e,void 0,void 0,t);return r&&Fr.warn("Cursor CLI scan error (%s): %s",r.kind,r.message),n}var lt,dn,Ur,Fr,h_,$r=f(()=>{"use strict";lt=require("node:fs/promises"),dn=require("node:os"),Ur=require("node:path");b();hr();ce();V();Fr=y("CursorCliDiscoverer"),h_=2880*60*1e3});function Vu(e=(0,Yu.homedir)()){let t=[];for(let n of E_){let r=(0,Wr.join)(e,".gemini",n),o=(0,Wr.join)(r,"conversations");(0,Xu.existsSync)(o)&&t.push({variant:n,root:r,conversationsDir:o,brainDir:(0,Wr.join)(r,"brain")})}return t}var Xu,Yu,Wr,Iv,E_,zu=f(()=>{"use strict";Xu=require("node:fs"),Yu=require("node:os"),Wr=require("node:path");b();Y();Iv=y("AntigravityDetector"),E_=["antigravity","antigravity-ide","antigravity-cli"]});var Zu={};D(Zu,{readAntigravityTranscript:()=>R_,unwrapUserRequest:()=>Br});function Br(e){let t=T_.exec(e);return(t?t[1]:e).trim()}function b_(e){let t=e.args??{},n=typeof t.CommandLine=="string"?t.CommandLine:typeof t.toolSummary=="string"?t.toolSummary:"";return`\u21AA ${e.name??"tool"}${n?`: ${n}`:""}`}async function R_(e,t,n){let r;try{r=await(0,Qu.readFile)(e,"utf8")}catch{return{entries:[],newCursor:{transcriptPath:e,lineNumber:t?.lineNumber??0,updatedAt:t?.updatedAt??new Date().toISOString()},totalLinesRead:0}}let o=r.split(`
`).filter(p=>p.trim().length>0),s=t?.lineNumber??0,i=n?Date.parse(n):Number.POSITIVE_INFINITY,a=[],l=t?.updatedAt??new Date().toISOString(),c=s,d=new L;for(let p=s;p<o.length;p++){c=p+1;let m;try{m=JSON.parse(o[p])}catch{continue}let g=typeof m.created_at=="string"?m.created_at:void 0;if(g&&Date.parse(g)>=i){c=p;break}g&&(l=g);let u=m.type,h=typeof m.content=="string"?m.content:"";if(u==="USER_INPUT"){let T=Br(h);T&&a.push({role:"human",content:T,timestamp:g})}else if(u==="PLANNER_RESPONSE"){let T=Array.isArray(m.tool_calls)?m.tool_calls:[],E=g?Date.parse(g):Number.NaN;for(let _ of T)typeof _?.name=="string"&&_.name.length>0&&d.add({...M(_.name),...Number.isFinite(E)&&{lastCallAtMs:E}});let S=[h,...T.map(b_)].filter(_=>_.length>0);S.length&&a.push({role:"assistant",content:S.join(`
`),timestamp:g})}else u==="RUN_COMMAND"&&h&&a.push({role:"assistant",content:h,timestamp:g})}return{entries:G(a),newCursor:{transcriptPath:e,lineNumber:c,updatedAt:l},totalLinesRead:c-s,toolUse:d.values()}}var Qu,T_,Bs=f(()=>{"use strict";Qu=require("node:fs/promises");ue();Q();T_=/<USER_REQUEST>\s*([\s\S]*?)\s*<\/USER_REQUEST>/});var Gr={};D(Gr,{antigravitySessionsForRepo:()=>sp,discoverAntigravitySessions:()=>A_,extractWorkspacePath:()=>np,scanAntigravitySessions:()=>rp,scanAntigravitySessionsOnDisk:()=>op});function np(e){let t=Buffer.from(e),n=t.toString("latin1").indexOf(Kr);if(n<=0)return;let r=n-1;for(;r>0&&(t[r-1]&128)!==0;)r--;let o=0,s=0;for(let l=r;l<=n-1;l++)o|=(t[l]&127)<<s,s+=7;if(o<Kr.length||n+o>t.length)return;let i=t.toString("utf8",n,n+o);if(!i.startsWith(Kr))return;let a=i.slice(Kr.length);try{a=decodeURIComponent(a)}catch{}return/^\/[A-Za-z]:/.test(a)&&(a=a.slice(1)),a}async function C_(e){try{let t=(0,ep.createReadStream)(e,{encoding:"utf8"}),n=(0,tp.createInterface)({input:t,crlfDelay:Number.POSITIVE_INFINITY});try{for await(let r of n){if(!r.trim())continue;let o;try{o=JSON.parse(r)}catch{continue}if(o.type!=="USER_INPUT"||typeof o.content!="string")continue;let s=Br(o.content);if(s)return s.length>120?`${s.slice(0,120)}\u2026`:s}}finally{n.close(),t.destroy()}}catch(t){if($(t))return;ct.debug("readTitle stream failed for %s: %s",e,R(t))}}async function rp(e,t,n){let{sessions:r,error:o}=await op(t,n),s=await sp(r,e);return ct.debug("Discovered %d Antigravity session(s) for %s",s.length,e),o?{sessions:s,error:o}:{sessions:s}}async function op(e,t,n={}){if(!oe())return{sessions:[]};let r=t??w_,o=Date.now()-r,s=await q(Vu(e),async g=>{try{return(await P(0,()=>(0,un.readdir)(g.conversationsDir))).filter(u=>u.endsWith(".db")).map(u=>({variant:g,dbFile:u}))}catch(u){return ct.debug("Cannot list %s: %s",g.conversationsDir,R(u)),[]}}),a=(await q(s.flat(),async({variant:g,dbFile:u})=>{let h=(0,Ks.join)(g.conversationsDir,u);try{let T=(await P(0,()=>(0,un.stat)(h))).mtimeMs;return T<o?null:{convId:u.slice(0,-3),variant:g,dbPath:h,mtimeMs:T}}catch{return null}})).filter(g=>g!==null),l=new Map;for(let g of a){let u=l.get(g.convId);u?u.push(g):l.set(g.convId,[g])}for(let g of l.values())g.sort((u,h)=>h.mtimeMs-u.mtimeMs);let c=async({convId:g,variant:u,dbPath:h,mtimeMs:T})=>{let E;try{E=await P(0,()=>v(h,_=>{let w=_.prepare("SELECT data FROM trajectory_metadata_blob WHERE id = 'main' LIMIT 1").get();return w?.data?np(w.data):void 0}))}catch(_){let w=O(_);return w?(ct.warn("Antigravity db scan failed (%s) at %s: %s",w.kind,h,w.message),{session:null,error:w}):{session:null}}if(!E)return{session:null};let S=(0,Ks.join)(u.brainDir,g,...k_);try{await P(0,()=>(0,un.stat)(S))}catch{return ct.debug("Antigravity convo %s has no transcript_full.jsonl yet",g),{session:null}}return{session:{session:{sessionId:g,transcriptPath:S,updatedAt:new Date(T).toISOString(),source:"antigravity"},dirs:[E]}}},d=await q([...l.values()],async g=>{let u=g[0];if(n.alreadyRecorded?.("antigravity",u.convId,u.mtimeMs))return ct.debug("Antigravity convo %s already recorded -- skipping the db open",u.convId),{session:null};let h;for(let T of g){let E=await c(T);if(h??=E.error,E.session)return h?{session:E.session,error:h}:{session:E.session}}return h?{session:null,error:h}:{session:null}}),p=d.map(g=>g.session).filter(g=>g!==null),m=d.find(g=>g.error!==void 0)?.error;return ct.debug("Antigravity disk scan: %d conversation(s) inside the window",p.length),m?{sessions:p,error:m}:{sessions:p}}async function sp(e,t){let n=await _i(t),r=B(e,o=>n.some(s=>z(o,s)));return q(r,async o=>{let s=await P(0,()=>C_(o.transcriptPath));return s===void 0?o:{...o,title:s}})}async function A_(e,t,n){let{sessions:r}=await rp(e,t,n);return r}var ep,un,Ks,tp,ct,w_,k_,Kr,qr=f(()=>{"use strict";ep=require("node:fs"),un=require("node:fs/promises"),Ks=require("node:path"),tp=require("node:readline");b();Me();zu();Bs();ce();ie();Re();Y();ct=y("AntigravityDiscoverer"),w_=2880*60*1e3,k_=[".system_generated","logs","transcript_full.jsonl"],Kr="file://"});var cp={};D(cp,{readGeminiTranscript:()=>$_});async function $_(e,t,n){let r=t?.lineNumber??0,o;try{o=await(0,lp.readFile)(e,"utf-8")}catch(h){te(Gs,`Cannot read Gemini session: ${e}`,h)}let s;try{s=JSON.parse(o)}catch(h){throw Gs.error("Failed to parse Gemini session JSON: %s",h.message),new Error(`Invalid Gemini session JSON: ${e}`)}let i=s.messages??[],a=i.slice(r),l=[],c=n?new Date(n).getTime():void 0,d=r,p=new L;for(let h=0;h<a.length;h++){let T=a[h];if(c&&T.timestamp&&new Date(T.timestamp).getTime()>c)break;let E=W_(T);E&&l.push(E);for(let S of T.toolCalls??[])typeof S?.name!="string"||S.name.length===0||p.addOnce(typeof S.id=="string"?S.id:void 0,M(S.name));d=r+h+1}let m=G(l),g={transcriptPath:e,lineNumber:n?d:i.length,updatedAt:new Date().toISOString()},u=d-r;return Gs.info("Read Gemini session: %d new messages, %d entries extracted (index %d\u2192%d)",u,m.length,r,g.lineNumber),{entries:m,newCursor:g,totalLinesRead:u,toolUse:p.values()}}function W_(e){let t=e.timestamp;if(e.type==="user"){let n=ap(e.content);return n?{role:"human",content:n,timestamp:t}:null}if(e.type==="gemini"){let n=ap(e.content);return n?{role:"assistant",content:n,timestamp:t}:null}return null}function ap(e){if(typeof e=="string"){let t=e.trim();return t.length>0?t:null}if(Array.isArray(e)){let t=[];for(let n of e)if(n!==null&&typeof n=="object"&&typeof n.text=="string"){let r=n.text.trim();r.length>0&&t.push(r)}return t.length>0?t.join(`
`):null}return null}var lp,Gs,dp=f(()=>{"use strict";lp=require("node:fs/promises");b();ue();Q();Gs=y("GeminiTranscriptReader")});function G_(e){if(!De(e))return;let t=e.tokens;if(!De(t))return;let n=De(t.cache)?t.cache:void 0;return{input:Jr(t.input),output:Jr(t.output)+Jr(t.reasoning),cached:Jr(n?.write)}}function up(e,t){let n=[],r;for(let l of e){r=l.id;let c;try{c=JSON.parse(l.data)}catch{continue}if(!De(c)||c.type!=="tool"||c.tool!==K_)continue;let d=De(c.state)?c.state:void 0,p=typeof d?.status=="string"?d.status:"";if(p!=="completed"&&p!=="error")continue;let m=J_(d);if(m===void 0)continue;let g=typeof d?.output=="string"?d.output:void 0,u=De(d?.time)?d.time:void 0,h=typeof u?.start=="number"?u.start:l.timeCreated;n.push({skill:m,orderAt:l.timeCreated,invocation:{at:new Date(h).toISOString(),...g!==void 0?{bodyChars:g.length}:{},ok:p==="completed",entryPath:"tool"}})}let o=r!==void 0?{lastRowId:r}:{};if(n.length===0)return{uses:[],...o};let s=q_(n,t),i=new Map;for(let l of n){let c=i.get(l.skill);c===void 0?i.set(l.skill,[l.invocation]):c.push(l.invocation)}let a=[];for(let[l,c]of i){c.sort((p,m)=>p.at===m.at?0:p.at<m.at?1:-1);let d=s.get(l);a.push({source:"opencode",skill:l,entryPaths:["tool"],invocations:c,...d!==void 0?{usage:d}:{}})}return B_.debug("Scanned %d OpenCode skill(s) from %d part row(s)",a.length,e.length),{uses:a,...o}}function q_(e,t){let n=new Map;for(let[o,s]of e.entries()){let a=e[o+1]?.orderAt??Number.POSITIVE_INFINITY;for(let l of t){if(l.timeCreated<=s.orderAt||l.timeCreated>=a)continue;let c;try{c=JSON.parse(l.data)}catch{continue}De(c)&&c.role==="user"&&(a=l.timeCreated)}for(let l of t){if(l.timeCreated<=s.orderAt||l.timeCreated>=a)continue;let c;try{c=JSON.parse(l.data)}catch{continue}let d=G_(c);if(d===void 0)continue;let p=n.get(s.skill)??{input:0,output:0,cached:0};p.input+=d.input,p.output+=d.output,p.cached+=d.cached,n.set(s.skill,p)}}let r=new Map;for(let[o,s]of n)r.set(o,{...s,confidence:"estimated"});return r}function J_(e){let t=De(e?.metadata)?e.metadata:void 0;if(typeof t?.name=="string"&&t.name!=="")return t.name;let n=De(e?.input)?e.input:void 0;return typeof n?.name=="string"&&n.name!==""?n.name:void 0}function Jr(e){return typeof e=="number"?e:0}function De(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}var B_,K_,pp=f(()=>{"use strict";b();B_=y("OpenCodeSkillScanner"),K_="skill"});var mp={};D(mp,{readOpenCodeTranscript:()=>Y_});async function Y_(e,t,n){let{dbPath:r,sessionId:o}=Q_(e),s=t?.lineNumber??0,i=n?new Date(n).getTime():void 0,a=new L;try{let{rawEntries:l,totalMessages:c,lastConsumedIndex:d,partRows:p,messageRows:m}=await v(r,S=>{let _=S.prepare(`SELECT m.id as msg_id, m.data as msg_data, m.time_created,
					        p.id as part_id, p.time_created as part_time_created, p.data as part_data
					 FROM message m
					 LEFT JOIN part p ON p.message_id = m.id
					 WHERE m.session_id = :sessionId
					 ORDER BY m.time_created ASC, p.time_created ASC`).all({sessionId:o}),w=new Map,A=[];for(let C of _)w.has(C.msg_id)||(w.set(C.msg_id,{id:C.msg_id,msgData:C.msg_data,timeCreated:C.time_created,parts:[]}),A.push(C.msg_id)),C.part_id!==null&&C.part_time_created!==null&&C.part_data!==null&&w.get(C.msg_id)?.parts.push({id:C.part_id,timeCreated:C.part_time_created,data:C.part_data});let F=A.slice(s),U=[],H=[],ee=[],K=s;for(let C=0;C<F.length;C++){let k=w.get(F[C]);if(i&&k.timeCreated>i)break;let re=k.parts.map(Ne=>Ne.data),fe=Z_(k.msgData,re,k.timeCreated);fe&&U.push(fe),V_(a,re),H.push(...k.parts),ee.push({id:k.id,timeCreated:k.timeCreated,data:k.msgData}),K=s+C+1}return{rawEntries:U,totalMessages:A.length,lastConsumedIndex:K,partRows:H,messageRows:ee}}),g=G(l),u={transcriptPath:e,lineNumber:n?d:c,updatedAt:new Date().toISOString()},h=d-s;pn.info("Read OpenCode session %s: %d new messages, %d entries extracted (index %d\u2192%d)",o.substring(0,8),h,g.length,s,u.lineNumber);let T=up(p,m).uses.map(S=>er(S,S.usage)),E=Vn([a.values(),T]);return{entries:g,newCursor:u,totalLinesRead:h,toolUse:E}}catch(l){te(pn,`Cannot read OpenCode session: ${o}`,l)}}function V_(e,t){for(let n of t){let r;try{r=JSON.parse(n)}catch{continue}if(r.type!=="tool"||typeof r.tool!="string"||r.tool.length===0)continue;let o=typeof r.callID=="string"?r.callID:void 0;e.addOnce(o,z_(r))}}function z_(e){let t=e.tool;if(t!==X_)return M(t);let n=qs(e.state)?e.state:void 0,r=qs(n?.metadata)?n.metadata:void 0,o=qs(n?.input)?n.input:void 0,s=typeof r?.name=="string"?r.name:o?.name;return typeof s=="string"&&s.length>0?et(s):M(t)}function qs(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}function Q_(e){let t=e.lastIndexOf("#");if(t===-1)throw new Error(`Invalid OpenCode transcript path (missing #sessionId): ${e}`);let n=e.substring(0,t),r=e.substring(t+1);if(n.length===0||r.length===0)throw new Error(`Invalid OpenCode transcript path (empty dbPath or sessionId): ${e}`);return{dbPath:n,sessionId:r}}function Z_(e,t,n){if(!Number.isFinite(n))return pn.debug("Skipping OpenCode message with non-finite time_created"),null;let r;try{r=JSON.parse(e)}catch{return pn.debug("Failed to parse message data JSON"),null}let o=r.role,s;if(o==="user")s="human";else if(o==="assistant")s="assistant";else return null;let i=eE(t);if(!i)return null;let a=new Date(n).toISOString();return{role:s,content:i,timestamp:a}}function eE(e){let t=[];for(let n of e){let r;try{r=JSON.parse(n)}catch{pn.debug("Failed to parse part data JSON");continue}if(r.type==="text"&&typeof r.text=="string"){let o=r.text.trim();o.length>0&&t.push(o)}}return t.length>0?t.join(`
`):null}var pn,X_,fp=f(()=>{"use strict";b();Y();ns();pp();ds();ue();Q();pn=y("OpenCodeTranscriptReader"),X_="skill"});var Js={};D(Js,{readCursorCliTranscript:()=>aE});function rE(e){let t=e.replace(hd,""),n=nE.exec(t);return(n?n[1]:t).trim()}function oE(e){let t=[];for(let n of e.message?.content??[])n.type==="text"&&typeof n.text=="string"&&t.push(n.text);return t.join(`
`).trim()}function sE(e){if(e==="user")return"human";if(e==="assistant")return"assistant"}async function aE(e,t,n){let r;try{r=await(0,gp.readFile)(e,"utf8")}catch(u){te(tE,`Cannot read Cursor CLI transcript: ${e}`,u)}let o=r.split(`
`).filter(u=>u.trim().length>0),s=t?.lineNumber??0,i=n?Date.parse(n):Number.NaN,a=!Number.isNaN(i),l=[],c=new L,d=Math.min(s,o.length),p;for(let u=s;u<o.length;u++){let h=o[u],T;try{T=JSON.parse(h)}catch{continue}let E=iE(T);if(a&&E!==void 0&&E>i)break;E!==void 0&&(p=E);let S=sE(T.role);if(S!==void 0){let _=oE(T),w=S==="human"?rE(_):_;w.length>0&&l.push({role:S,content:w})}for(let _ of T.message?.content??[])_.type!=="tool_use"||typeof _.name!="string"||_.name.length===0||c.addOnce(typeof _.id=="string"?_.id:void 0,{...Vc(_.name,_.input),...p!==void 0&&{lastCallAtMs:p}});d=u+1}let m=G(l),g={transcriptPath:e,lineNumber:d,updatedAt:new Date().toISOString()};return{entries:m,newCursor:g,totalLinesRead:d-s,toolUse:c.values()}}var gp,tE,nE,iE,Xs=f(()=>{"use strict";gp=require("node:fs/promises");b();ms();ue();Q();tE=y("CursorCliReader"),nE=/<user_query>\s*([\s\S]*?)\s*<\/user_query>/i;iE=rr});var yp={};D(yp,{readCursorTranscript:()=>cE});async function cE(e,t,n){let{dbPath:r,composerId:o}=dE(e),s=t?.lineNumber??0,i=n?Date.parse(n):void 0;try{let{rawEntries:a,totalBubbles:l,lastConsumedIndex:c}=await v(r,g=>{let u=g.prepare("SELECT value FROM cursorDiskKV WHERE key = ? LIMIT 1").get(`composerData:${o}`);if(!u)throw new Error(`Composer ${o} not found in database`);let h;try{h=JSON.parse(u.value)}catch{throw new Error(`Failed to parse composerData JSON for ${o}`)}let T=h.fullConversationHeadersOnly??[],E=T.slice(s),S=[],_=s;for(let w=0;w<E.length;w++){let A=E[w],F=g.prepare("SELECT value FROM cursorDiskKV WHERE key = ? LIMIT 1").get(`bubbleId:${o}:${A.bubbleId}`);if(!F){_=s+w+1;continue}let U;try{U=JSON.parse(F.value)}catch{Ys.debug("Failed to parse bubble JSON for %s:%s",o,A.bubbleId),_=s+w+1;continue}let H=U.createdAt;if(i!==void 0&&H!==void 0){let k=Date.parse(H);if(Number.isFinite(k)&&k>i)break}let ee=U.type??A.type,K=ee!==void 0?lE[ee]:void 0,C=(U.text??"").trim();K!==void 0&&C.length>0&&S.push({role:K,content:C,timestamp:H}),_=s+w+1}return{rawEntries:S,totalBubbles:T.length,lastConsumedIndex:_}}),d=G(a),p={transcriptPath:e,lineNumber:n?c:l,updatedAt:new Date().toISOString()},m=c-s;return Ys.info("Read Cursor session %s: %d new bubbles, %d entries extracted (index %d\u2192%d)",o.substring(0,8),m,d.length,s,p.lineNumber),{entries:d,newCursor:p,totalLinesRead:m}}catch(a){te(Ys,`Cannot read Cursor session: ${o}`,a)}}function dE(e){let t=e.lastIndexOf("#");if(t===-1)throw new Error(`Invalid Cursor transcript path (missing #composerId): ${e}`);let n=e.substring(0,t),r=e.substring(t+1);if(n.length===0||r.length===0)throw new Error(`Invalid Cursor transcript path (empty dbPath or composerId): ${e}`);return{dbPath:n,composerId:r}}var Ys,lE,hp=f(()=>{"use strict";b();Y();Q();Ys=y("CursorTranscriptReader"),lE={1:"human",2:"assistant"}});var _p={};D(_p,{readCopilotTranscript:()=>uE});async function uE(e,t,n){let{dbPath:r,sessionId:o}=pE(e),s=t?.lineNumber??0,i=n?Date.parse(n):void 0;try{let{rawEntries:a,totalTurns:l,lastConsumedIndex:c}=await v(r,g=>{let u=g.prepare(`SELECT turn_index, user_message, assistant_response, timestamp
					 FROM turns
					 WHERE session_id = :sessionId
					 ORDER BY turn_index ASC`).all({sessionId:o}),h=u.slice(s),T=[],E=s;for(let S=0;S<h.length;S++){let _=h[S];if(i!==void 0&&_.timestamp){let A=Date.parse(_.timestamp);if(Number.isFinite(A)&&A>i)break}let w=_.timestamp&&Number.isFinite(Date.parse(_.timestamp))?_.timestamp:void 0;typeof _.user_message=="string"&&_.user_message.trim().length>0&&T.push({role:"human",content:_.user_message,timestamp:w}),typeof _.assistant_response=="string"&&_.assistant_response.trim().length>0&&T.push({role:"assistant",content:_.assistant_response,timestamp:w}),E=s+S+1}return{rawEntries:T,totalTurns:u.length,lastConsumedIndex:E}}),d=G(a),p={transcriptPath:e,lineNumber:n?c:l,updatedAt:new Date().toISOString()},m=c-s;return Sp.info("Read Copilot session %s: %d new turns, %d entries (index %d\u2192%d)",o.substring(0,8),m,d.length,s,p.lineNumber),{entries:d,newCursor:p,totalLinesRead:m}}catch(a){te(Sp,`Cannot read Copilot session: ${o}`,a)}}function pE(e){let t=e.lastIndexOf("#");if(t===-1)throw new Error(`Invalid Copilot transcript path (missing #sessionId): ${e}`);let n=e.substring(0,t),r=e.substring(t+1);if(n.length===0||r.length===0)throw new Error(`Invalid Copilot transcript path (empty dbPath or sessionId): ${e}`);return{dbPath:n,sessionId:r}}var Sp,Ep=f(()=>{"use strict";b();Y();Q();Sp=y("CopilotTranscriptReader")});var bp={};D(bp,{readDevinTranscript:()=>_E});function mE(e,t){if(Array.isArray(t.tool_calls))for(let n of t.tool_calls){if(n===null||typeof n!="object")continue;let r=n,o=typeof r.function?.name=="string"?r.function.name:r.name;typeof o!="string"||o.length===0||e.addOnce(typeof r.id=="string"?r.id:void 0,M(o))}}function gE(e){let t=e.lastIndexOf("#");if(t<0)throw new Error(`Malformed Devin transcript path (no '#'): ${e}`);return{dbPath:e.slice(0,t),sessionId:e.slice(t+1)}}function yE(e,t){let n=[],r=new Set,o=t;for(;o!==null&&e.has(o)&&!r.has(o);){r.add(o);let s=e.get(o);n.push(s),o=s.parent_node_id}return n.reverse(),n}function Tp(e){try{let n=JSON.parse(e.chat_message).metadata?.created_at;return typeof n=="string"?Date.parse(n):Number.NaN}catch{return Number.NaN}}function hE(e){if(e.length===0)return null;let t=new Set;for(let i of e)i.parent_node_id!==null&&t.add(i.parent_node_id);let n=e.filter(i=>!t.has(i.node_id)),r=n.length>0?n:e,o=r[0],s=Tp(o);for(let i of r){let a=Tp(i),l=Number.isFinite(a)?a:Number.NEGATIVE_INFINITY,c=Number.isFinite(s)?s:Number.NEGATIVE_INFINITY;(l>c||l===c&&i.node_id>o.node_id)&&(o=i,s=a)}return o.node_id}function SE(e,t){if(!t)return 0;if(t.anchorId!==void 0){let n=Number(t.anchorId),r=e.findIndex(o=>o.node_id===n);return r>=0?r+1:(mn.debug("Devin cursor anchor %s no longer on the main chain \u2014 re-reading from start",t.anchorId),0)}return Math.min(t.lineNumber??0,e.length)}async function _E(e,t,n){let{dbPath:r,sessionId:o}=gE(e),s=n?Date.parse(n):void 0,i=new L;try{let{rawEntries:a,totalNodes:l,startIndex:c,lastConsumedIndex:d,anchorId:p}=await v(r,h=>{let T=h.prepare("SELECT main_chain_id FROM sessions WHERE id = ? LIMIT 1").get(o);if(!T)throw new Error(`Devin session ${o} not found`);let E=h.prepare("SELECT node_id, parent_node_id, chat_message FROM message_nodes WHERE session_id = ?").all(o),S=new Map(E.map(K=>[K.node_id,K])),_=T.main_chain_id;(_===null||!S.has(_))&&(mn.debug("Devin session %s has no usable main_chain_id \u2014 inferring tip from leaves",o),_=hE(E));let w=yE(S,_),A=SE(w,t),F=w.slice(A),U=[],H=A;for(let K=0;K<F.length;K++){let C=F[K],k;try{k=JSON.parse(C.chat_message)}catch{mn.debug("Skipping Devin node %d: invalid chat_message JSON",C.node_id),H=A+K+1;continue}let re=typeof k.metadata?.created_at=="string"?k.metadata.created_at:void 0;if(s!==void 0&&re!==void 0){let j=Date.parse(re);if(Number.isFinite(j)&&j>s)break}let fe=typeof k.role=="string"?fE[k.role]:void 0,Ne=typeof k.content=="string"?k.content.trim():"";fe!==void 0&&Ne.length>0&&U.push({role:fe,content:Ne,timestamp:re}),mE(i,k),H=A+K+1}let ee=H>0?String(w[H-1].node_id):t?.anchorId??void 0;return{rawEntries:U,totalNodes:w.length,startIndex:A,lastConsumedIndex:H,anchorId:ee}}),m=G(a),g={transcriptPath:e,lineNumber:n?d:l,updatedAt:new Date().toISOString(),...p!==void 0?{anchorId:p}:{}},u=d-c;return mn.info("Read Devin session %s: %d new nodes, %d entries (index %d\u2192%d)",o,u,m.length,c,g.lineNumber),{entries:m,newCursor:g,totalLinesRead:u,toolUse:i.values()}}catch(a){te(mn,`Cannot read Devin session: ${o}`,a)}}var mn,fE,Rp=f(()=>{"use strict";b();Y();ue();Q();mn=y("DevinReader");fE={user:"human",assistant:"assistant"}});var wp={};D(wp,{readHermesTranscript:()=>AE});function bE(e){let t=e.lastIndexOf("#");if(t===-1)throw new Error(`Invalid Hermes transcript path (expected "<dbPath>#<sessionId>"): ${e}`);return{dbPath:e.slice(0,t),sessionId:e.slice(t+1)}}function RE(e){if(e===null||typeof e!="object")return;let t=e,n=typeof t.function?.name=="string"?t.function.name:t.name;if(typeof n!="string"||n.length===0)return;let r=typeof t.id=="string"?t.id:typeof t.call_id=="string"?t.call_id:void 0;if(n!==EE)return{call:Yc(n,t.function?.arguments),id:r};let o=wE(t.function?.arguments);return{call:o!==void 0?et(o):M(n),id:r}}function wE(e){if(typeof e!="string"||e.length===0)return;let t;try{t=JSON.parse(e)}catch{return}if(t===null||typeof t!="object")return;let n=t.name;return typeof n=="string"&&n.length>0?n:void 0}function kE(e,t){if(typeof t.tool_calls!="string"||t.tool_calls.length===0)return;let n;try{n=JSON.parse(t.tool_calls)}catch{Vs.debug("Skipping Hermes message %d: invalid tool_calls JSON",t.id);return}if(!Array.isArray(n))return;let r=Number.isFinite(t.timestamp)?Math.round(t.timestamp*1e3):void 0;for(let o of n){let s=RE(o);s!==void 0&&e.addOnce(s.id,{...s.call,...r!==void 0&&{lastCallAtMs:r}})}}function CE(e,t){if(!t)return 0;if(t.anchorId!==void 0){let n=Number.parseInt(t.anchorId,10);if(Number.isFinite(n)){let r=e.findIndex(o=>o.id===n);if(r!==-1)return r+1}}return Math.min(t.lineNumber??0,e.length)}async function AE(e,t,n){let{dbPath:r,sessionId:o}=bE(e),s=n?Date.parse(n):void 0,i=new L;try{let{rawEntries:a,totalRows:l,startIndex:c,lastConsumedIndex:d,anchorId:p}=await v(r,h=>{let T=h.prepare(`SELECT id, role, content, tool_calls, timestamp
					 FROM messages
					 WHERE session_id = :sessionId
					   AND (active = 1 OR compacted = 1)
					 ORDER BY id`).all({sessionId:o}),E=CE(T,t),S=[],_=E;for(let A=E;A<T.length;A++){let F=T[A],U=Number.isFinite(F.timestamp)?new Date(F.timestamp*1e3).toISOString():void 0;if(s!==void 0&&U!==void 0&&Date.parse(U)>s)break;let H=TE[F.role],ee=typeof F.content=="string"?F.content.trim():"";H!==void 0&&ee.length>0&&S.push({role:H,content:ee,...U!==void 0&&{timestamp:U}}),kE(i,F),_=A+1}let w=_>0?String(T[_-1].id):t?.anchorId??void 0;return{rawEntries:S,totalRows:T.length,startIndex:E,lastConsumedIndex:_,anchorId:w}}),m=G(a),g={transcriptPath:e,lineNumber:n?d:l,updatedAt:new Date().toISOString(),...p!==void 0?{anchorId:p}:{}},u=d-c;return Vs.info("Read Hermes session %s: %d new row(s), %d entries (index %d\u2192%d)",o,u,m.length,c,g.lineNumber),{entries:m,newCursor:g,totalLinesRead:u,toolUse:i.values()}}catch(a){te(Vs,`Cannot read Hermes session: ${o}`,a)}}var Vs,EE,TE,kp=f(()=>{"use strict";b();Y();ue();Q();Vs=y("HermesReader"),EE="skill_view",TE={user:"human",assistant:"assistant"}});var Np={};D(Np,{_deleteAtPath:()=>xp,_replayPatches:()=>Dp,_setAtPath:()=>Ip,readCopilotChatTranscript:()=>NE});function Ip(e,t,n){if(t.length===0)return;let r=e;for(let o=0;o<t.length-1;o++){let s=t[o],i=t[o+1];(r[s]===void 0||r[s]===null)&&(r[s]=typeof i=="number"?[]:{}),r=r[s]}r[t[t.length-1]]=n}function xp(e,t){if(t.length===0)return;let n=e;for(let o=0;o<t.length-1;o++){if(n==null)return;n=n[t[o]]}if(n==null)return;let r=t[t.length-1];if(Array.isArray(n)&&typeof r=="number"){r>=0&&r<n.length&&n.splice(r,1);return}delete n[r]}function Dp(e){let t={};for(let n of e){let r=JSON.parse(n);switch(r.kind){case 0:t=r.v;break;case 1:{let o=r;Ip(t,o.k,o.v);break}case 2:{xp(t,r.k);break}default:IE.warn("Unknown patch kind %s \u2014 skipping",r.kind);break}}return t}function zs(e,t,n){let r=new Error(`Copilot Chat scan failed (${e}): ${t}`);r.cause={kind:e,message:t};let o=n?.code;throw o!==void 0&&(r.code=o),r}async function xE(e,t,n){let r=t?.lineNumber??0,o=(0,Cp.createReadStream)(e,{encoding:"utf8"}),s=(0,Ap.createInterface)({input:o,crlfDelay:Number.POSITIVE_INFINITY}),i=[],a=0;for await(let c of s){if(a++,a<=r)continue;let d;try{d=JSON.parse(c)}catch{continue}if(n&&typeof d.timestamp=="string"&&d.timestamp>n){a--;break}let p=d.data?.content;typeof p!="string"||p.length===0||(d.type==="user.message"?i.push(d.timestamp?{role:"human",content:p,timestamp:d.timestamp}:{role:"human",content:p}):d.type==="assistant.message"&&i.push(d.timestamp?{role:"assistant",content:p,timestamp:d.timestamp}:{role:"assistant",content:p}))}o.close();let l=await(0,xt.stat)(e).then(c=>new Date(c.mtimeMs).toISOString());return{entries:i,newCursor:{transcriptPath:e,lineNumber:a,updatedAt:l},totalLinesRead:Math.max(0,a-r)}}async function DE(e,t,n){let r=t?.lineNumber??0,o;try{o=await(0,xt.readFile)(e,"utf8")}catch(m){zs("fs",m.message,m)}let s=o.split(`
`).filter(m=>m.length>0);if(s.length===0){let m=await(0,xt.stat)(e).then(g=>new Date(g.mtimeMs).toISOString());return{entries:[],newCursor:{transcriptPath:e,lineNumber:0,updatedAt:m},totalLinesRead:0}}let i;try{i=Dp(s)}catch(m){zs("parse",m.message)}let a=i.requests;Array.isArray(a)||zs("schema","requests is not an array");let l=n?Date.parse(n):Number.POSITIVE_INFINITY,c=[],d=r;for(let m=r;m<a.length;m++){let g=a[m];if(typeof g?.timestamp=="number"&&g.timestamp>l)break;let u=typeof g?.timestamp=="number"?new Date(g.timestamp).toISOString():void 0,h=g?.message?.text;typeof h=="string"&&h.length>0&&c.push(u?{role:"human",content:h,timestamp:u}:{role:"human",content:h});let E=(Array.isArray(g?.response)?g.response:[]).map(S=>typeof S?.value=="string"?S.value:"").join("");E.length>0&&c.push(u?{role:"assistant",content:E,timestamp:u}:{role:"assistant",content:E}),d=m+1}let p=await(0,xt.stat)(e).then(m=>new Date(m.mtimeMs).toISOString());return{entries:c,newCursor:{transcriptPath:e,lineNumber:d,updatedAt:p},totalLinesRead:s.length}}async function NE(e,t,n){let r=J(e);if(/\/\.copilot\/session-state\/[^/]+\/events\.jsonl$/.test(r))return xE(e,t,n);if(/\/chatSessions\/[^/]+\.jsonl$/.test(r))return DE(e,t,n);throw new Error(`Copilot Chat reader: unrecognized transcriptPath pattern: ${e}`)}var Cp,xt,Ap,IE,vp=f(()=>{"use strict";Cp=require("node:fs"),xt=require("node:fs/promises"),Ap=require("node:readline");b();V();IE=y("CopilotChatReader")});function Xr(e){if(e==="assistant")return"assistant";if(e==="user")return"human"}function Yr(e,t,n,r,o){let s=n?.lineNumber??0,i=r?Date.parse(r):void 0,a=[],l=new L,c=s;for(let m=s;m<t.length;m++){let g=t[m];if(i!==void 0&&typeof g.ts=="number"&&g.ts>i)break;c=m+1;for(let h of g.tools??[])l.add(h,h.calls);if(g.role===void 0||g.content.length===0)continue;let u=typeof g.ts=="number"?new Date(g.ts).toISOString():void 0;a.push(u?{role:g.role,content:g.content,timestamp:u}:{role:g.role,content:g.content})}let d=G(a),p={transcriptPath:e,lineNumber:r?c:t.length,updatedAt:new Date().toISOString()};return{entries:d,newCursor:p,totalLinesRead:c-s,...o?.recordsTools?{toolUse:l.values()}:{}}}function Vr(e,t){return{entries:[],newCursor:{transcriptPath:e,lineNumber:t?.lineNumber??0,updatedAt:new Date().toISOString()},totalLinesRead:0}}var Qs=f(()=>{"use strict";ue();Q()});var Lp={};D(Lp,{readClineTranscript:()=>$E});function UE(e){let t=e.replace(OE,"").trim();if(t.length===0||ME.test(t)||FE.test(t))return"";let n=LE.exec(t);if(n)return n[1].trim();let r=PE.exec(t);return r?r[1].trim():t}function HE(e){if(typeof e=="string")return[e];let t=[];for(let n of e??[])n.type==="text"&&typeof n.text=="string"&&t.push(n.text);return t}function jE(e,t){let n=HE(e.content);return(t==="human"?n.map(UE).filter(o=>o.length>0):n).join(`
`).trim()}async function $E(e,t,n){let r;try{let s=JSON.parse(await(0,Op.readFile)(e,"utf8"));r=Array.isArray(s)?s:[]}catch(s){return zt(vE,`Cannot read Cline transcript: ${e}`,s),Vr(e,t)}let o=r.map(s=>{let i=Xr(s.role);return{role:i,content:jE(s,i),ts:s.ts}});return Yr(e,o,t,n)}var Op,vE,OE,LE,PE,ME,FE,Pp=f(()=>{"use strict";Op=require("node:fs/promises");b();Qs();Q();vE=y("ClineReader"),OE=/<environment_details>[\s\S]*?<\/environment_details>/gi,LE=/<task>([\s\S]*?)<\/task>/i,PE=/<feedback>([\s\S]*?)<\/feedback>/i,ME=/^#\s*task_progress\b/i,FE=/^\[[^\]\n]+\]\s+Result:/});var Fp={};D(Fp,{readClineCliTranscript:()=>JE});function KE(e){let t=BE.exec(e);return(t?t[1]:e).trim()}function GE(e){let t=[];for(let n of e.content??[])n.type==="text"&&typeof n.text=="string"&&t.push(n.text);return t.join(`
`).trim()}function qE(e){let t=new L;for(let n of e.content??[])n.type!=="tool_use"||typeof n.name!="string"||n.name.length===0||t.addOnce(typeof n.id=="string"?n.id:void 0,He(n.name));return t.values()}async function JE(e,t,n){let r;try{r=JSON.parse(await(0,Mp.readFile)(e,"utf8"))}catch(s){return zt(WE,`Cannot read Cline CLI transcript: ${e}`,s),Vr(e,t)}let o=(Array.isArray(r.messages)?r.messages:[]).map(s=>{let i=Xr(s.role),a=GE(s);return{role:i,content:i==="human"?KE(a):a,ts:s.ts,tools:qE(s)}});return Yr(e,o,t,n,{recordsTools:!0})}var Mp,WE,BE,Up=f(()=>{"use strict";Mp=require("node:fs/promises");b();Qs();ue();Q();WE=y("ClineCliReader"),BE=/<user_input\b[^>]*>([\s\S]*?)<\/user_input>/i});var MT={};D(MT,{extractStopIdentity:()=>lm,launchHermesDiscovery:()=>cm,main:()=>dm});module.exports=ym(MT);var im=require("node:fs"),am=require("node:os"),Te=require("node:path"),ni=require("node:url");var vt=require("node:fs");var ai=require("node:path"),hm="JOLLI_LOCAL_AGENT_CHILD",Sm=".jolli-local-agent-child";function li(e=process.env,t){return e[hm]==="1"?!0:t!==void 0&&(0,vt.existsSync)((0,ai.join)(t,Sm))}ie();Ut();yt();ht();var tm=require("node:path");ie();Ue();ze();b();var Mc=require("node:fs"),Fc=require("node:readline");b();var cy=y("FallbackTitle"),Qe="(untitled session)",bt=60;function Rt(e,t){let n=e.replace(/\s+/g," ").trim(),r=Array.from(n);return r.length<=t?n:r.slice(0,t).join("")}async function Uc(e){try{let t=(0,Mc.createReadStream)(e.transcriptPath,{encoding:"utf8"}),n=(0,Fc.createInterface)({input:t,crlfDelay:1/0});try{for await(let r of n){if(!r)continue;let o;try{o=e.parseLine(r)}catch{continue}if(o!==void 0&&o.trim().length>0)return Rt(o,bt)}}finally{n.close(),t.destroy()}return Qe}catch(t){return $(t)||cy.debug("readFirstUserMessageTitle stream failed for %s: %s",e.transcriptPath,R(t)),Qe}}ie();var dy="jollimemory";var uy=`--exclude=${dy}/*`;Ko();V();ts();b();var $c=require("node:fs"),Wc=require("node:fs/promises"),Bc=require("node:readline");b();var Hc=y("ClaudeAiTitleReader"),my='"type":"ai-title"',jc=4*1024*1024;function fy(e){if(e.type==="ai-title")return typeof e.aiTitle=="string"&&e.aiTitle.length>0?e.aiTitle:void 0}async function Kc(e){let t,n=0,r=await(0,Wc.stat)(e).then(s=>s.size,()=>0),o=r>jc?r-jc:0;try{let s=(0,$c.createReadStream)(e,{encoding:"utf8",start:o}),i=(0,Bc.createInterface)({input:s,crlfDelay:1/0});try{let a=o>0;for await(let l of i){if(a){a=!1;continue}if(l.includes(my))try{t=fy(JSON.parse(l))??t}catch{n++}}}finally{i.close(),s.destroy()}}catch(s){$(s)||Hc.debug("readClaudeAiTitle stream failed for %s: %s",e,R(s));return}return n>0&&Hc.debug("readClaudeAiTitle skipped %d malformed ai-title line(s) for %s",n,e),t}var Gc=y("SessionTitleResolver"),gy={claude:hy,codex:Sy,gemini:_y,opencode:Ey,cursor:Ty,copilot:by,"copilot-chat":Ay,cline:Iy,"cline-cli":Dy,devin:wy,"cursor-cli":Cy,antigravity:Ry,kimi:xy,hermes:ky};async function qc(e,t,n){if(typeof e.title=="string"&&e.title.trim().length>0)return Rt(e.title,bt);let r=e.source??"claude";if(n!==void 0){if(n)return Rt(n,bt)}else if(r==="claude"&&e.transcriptPath)try{let o=await Kc(e.transcriptPath);if(o&&o.length>0)return Rt(o,bt)}catch(o){Gc.debug("readClaudeAiTitle threw for %s: %s",e.transcriptPath,R(o))}if(t!==void 0)return yy(t);try{return await Uc({transcriptPath:e.transcriptPath,parseLine:gy[r]})}catch(o){return Gc.debug("readFirstUserMessageTitle threw for %s/%s: %s",r,e.transcriptPath,R(o)),Qe}}function yy(e){for(let t of e)if(t.role==="human"&&t.content.trim().length!==0)return Rt(t.content,bt);return Qe}function hy(e){let t=Vt(e);if(!t||t.type!=="user")return;let r=t.message?.content??t.content;return wt(r)}function Sy(e){let t=Vt(e);if(t&&t.role==="user")return wt(t.content)}function _y(e){let t=Vt(e);if(!t||t.type!=="user")return;let n=wt(t.content);if(n!==void 0)return n;let r=t.text;if(typeof r=="string")return r}function Ey(e){}function Ty(e){}function by(e){}function Ry(e){}function wy(e){}function ky(e){}function Cy(e){}function Ay(e){let t=Vt(e);if(!t)return;let n=t.value;if(n&&typeof n=="object"){let r=n.message;if(r&&typeof r.text=="string")return r.text;let o=n.content,s=wt(o);if(s)return s}if(t.type==="user.message"){let r=t.data;if(r&&typeof r=="object"){let o=wt(r.content);if(o)return o}}}function Iy(e){}function xy(e){let t=Vt(e);if(t&&t.type==="turn.prompt")return wt(t.input)}function Dy(e){}function Vt(e){try{let t=JSON.parse(e);return typeof t=="object"&&t!==null?t:void 0}catch{return}}function wt(e){if(typeof e=="string")return e;if(Array.isArray(e)){let t=[];for(let n of e)if(typeof n=="string")t.push(n);else if(n&&typeof n=="object"){let r=n.text;typeof r=="string"&&t.push(r)}return t.length>0?t.join(" "):void 0}}ht();Ue();ze();b();ns();b();b();Zt();var ch=y("SkillAttribution"),dh="Skill",uh=['"usage"','"name":"Skill"','"role":"user"','"type":"user"'];function cs(e,t=[]){let n=ld(e),r=t.flatMap(a=>ld(a)),o=[...n,...r];if(o.some(a=>a.skill!==void 0))return ph(o);let i=mh(e);return i.size>0&&ch.debug("Attribution absent; estimated usage for %d skill(s)",i.size),i}function ld(e){let t=[];for(let n of e){if(n.length===0||!n.includes('"usage"'))continue;let r=cd(n);r!==void 0&&t.push(r)}return t}function cd(e){let t;try{t=JSON.parse(e)}catch{return}if(!nt(t))return;let n=ls(t);if(n===null)return;let r=typeof t.attributionSkill=="string"?t.attributionSkill:void 0;return{...n.id!==""?{dedupKey:n.id}:{},...r!==void 0?{skill:r}:{},input:n.input,cached:n.cached,output:n.output}}function ph(e){let t=new Map;for(let n of yh(e)){if(n.skill===void 0)continue;let r=t.get(n.skill)??{input:0,cached:0,output:0};r.input+=n.input,r.cached+=n.cached,r.output+=n.output,t.set(n.skill,r)}return dd(t,"attributed")}function mh(e){let t=new Map,n=new Set,r;for(let o of e){if(o.length===0||!uh.some(l=>o.includes(l)))continue;let s;try{s=JSON.parse(o)}catch{continue}if(!nt(s))continue;let i=fh(s);if(i!==void 0){r=i;continue}let a=cd(o);if(a!==void 0){if(r!==void 0&&!(a.dedupKey!==void 0&&n.has(a.dedupKey))){a.dedupKey!==void 0&&n.add(a.dedupKey);let l=t.get(r)??{input:0,cached:0,output:0};l.input+=a.input,l.cached+=a.cached,l.output+=a.output,t.set(r,l)}continue}gh(s)&&(r=void 0)}return dd(t,"estimated")}function fh(e){let n=(nt(e.message)?e.message:void 0)?.content;if(Array.isArray(n))for(let r of n){if(!nt(r)||r.type!=="tool_use"||r.name!==dh)continue;let o=nt(r.input)?r.input:void 0;if(typeof o?.skill=="string")return o.skill}}function gh(e){if(e.type!=="user"||e.isMeta===!0)return!1;let t=nt(e.message)?e.message.content:void 0;return Array.isArray(t)?!t.some(n=>nt(n)&&n.type==="tool_result"):!0}function yh(e){let t=new Set,n=[];for(let r of e){if(r.dedupKey!==void 0){if(t.has(r.dedupKey))continue;t.add(r.dedupKey)}n.push(r)}return n}function dd(e,t){let n=new Map;for(let[r,o]of e)n.set(r,{...o,confidence:t});return n}function nt(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}ds();b();function tr(e){let t=e.indexOf(":");if(t<=0)return{skill:e};let n=e.slice(t+1);return n===""?{skill:e}:{skill:n,plugin:e.slice(0,t)}}var hh=y("ClaudeSkillScanner"),Sh="Skill",_h=['"name":"Skill"','"sourceToolUseID"',"<command-name>",'"toolUseResult"','"isMeta":true'];function pd(e,t){let n=new Map,r=[],o,s=[],i=new Map,a=t;for(let p=t;p<e.length;p++){let m=p+1;a=m;let g=e[p];if(g===void 0||g.length===0)continue;if(!_h.some(_=>g.includes(_))){o!==void 0&&!g.includes("<local-command-caveat>")&&(o=void 0);continue}let u;try{u=JSON.parse(g)}catch{continue}if(!je(u))continue;Eh(u,i);let h=Th(u);if(h!==void 0){let _=tn(u,"sourceToolUseID");if(_!==void 0){let w=n.get(_);w!==void 0&&(w.bodyChars=h)}else o!==void 0&&(r.push({...o,bodyChars:h}),o=void 0);continue}let T=bh(u,m);if(T.length>0){o=void 0;for(let _ of T)n.set(_.toolUseId,_),s.push(_);continue}let E=Rh(u);if(E!==void 0){let _=n.get(E.toolUseId);_!==void 0&&(_.resolvedSkill=E.commandName,_.ok=E.ok,_.sawResult=!0);continue}let S=wh(u);S!==void 0&&(o=S)}let l=s.reduce((p,m)=>m.sawResult||m.line>=p?p:m.line,Number.POSITIVE_INFINITY),c=l===Number.POSITIVE_INFINITY?a:l-1,d=kh(s,r,i);return d.length>0&&hh.debug("Scanned %d skill(s) from lines %d..%d",d.length,t+1,c),{uses:d,lastLine:Math.max(t,c)}}function Eh(e,t){let n=tn(e,"attributionSkill"),r=tn(e,"attributionPlugin");n!==void 0&&r!==void 0&&t.set(n,r)}function Th(e){if(e.isMeta!==!0)return;let t=nr(e);if(typeof t=="string")return t.includes("<local-command-caveat>")||t.includes("<local-command-stdout>")?void 0:t.length;if(!Array.isArray(t))return;let n=t[0];if(!(!je(n)||n.type!=="text"||typeof n.text!="string")&&!n.text.includes("<local-command-caveat>"))return n.text.length}function bh(e,t){let n=nr(e);if(!Array.isArray(n))return[];let r=tn(e,"timestamp")??"",o=[];for(let s of n){if(!je(s)||s.type!=="tool_use"||s.name!==Sh)continue;let i=typeof s.id=="string"?s.id:void 0,a=je(s.input)?s.input:void 0,l=typeof a?.skill=="string"?a.skill:void 0;if(i===void 0||l===void 0)continue;let c=typeof a?.args=="string"&&a.args!==""?a.args:void 0;o.push({toolUseId:i,requestedSkill:l,at:r,line:t,...c!==void 0?{args:c}:{},sawResult:!1,ok:!0})}return o}function Rh(e){let t=nr(e);if(!Array.isArray(t))return;let n=t.find(i=>je(i)&&i.type==="tool_result");if(!je(n)||typeof n.tool_use_id!="string")return;let r=je(e.toolUseResult)?e.toolUseResult:void 0,o=typeof r?.commandName=="string"?r.commandName:void 0,s=r?.success!==!1&&n.is_error!==!0;return{toolUseId:n.tool_use_id,...o!==void 0?{commandName:o}:{},ok:s}}function wh(e){let t=nr(e);if(typeof t!="string"||!t.includes("<command-name>"))return;let n=ud(t,"command-name");if(n===void 0||n==="")return;let r=ud(t,"command-args");return{skill:n.replace(/^\//,""),at:tn(e,"timestamp")??"",...r!==void 0&&r!==""?{args:r}:{}}}function ud(e,t){let n=new RegExp(`<${t}>([\\s\\S]*?)</${t}>`).exec(e);return n===null?void 0:n[1].trim()}function kh(e,t,n){let r=new Map,o=(i,a)=>{let l=r.get(i);return l===void 0&&(l={paths:new Set,invocations:[]},r.set(i,l)),l.paths.add(a),l};for(let i of e){let a=i.resolvedSkill??i.requestedSkill;o(a,"tool").invocations.push({at:i.at,...i.args!==void 0?{args:i.args}:{},...i.bodyChars!==void 0?{bodyChars:i.bodyChars}:{},ok:i.ok,outcomeObserved:i.sawResult,entryPath:"tool"})}for(let i of t)o(i.skill,"command").invocations.push({at:i.at,...i.args!==void 0?{args:i.args}:{},bodyChars:i.bodyChars,ok:!0,entryPath:"command"});let s=[];for(let[i,{paths:a,invocations:l}]of r){l.sort((d,p)=>d.at===p.at?0:d.at<p.at?1:-1);let c=n.get(i)??tr(i).plugin;s.push({source:"claude",skill:i,...c!==void 0?{plugin:c}:{},entryPaths:[...a].sort(),invocations:l})}return s}function nr(e){let t=e.message;return je(t)?t.content:void 0}function tn(e,t){let n=e[t];return typeof n=="string"?n:void 0}function je(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}b();var Ch=y("CodexSkillScanner"),md="SKILL.md",Ah="<skill>",Ih=/<skill>\s*<name>([^<\s]+)<\/name>/g,us=/[^\s"']*\/skills(?:-[a-z]+)?\/([^/\s"']+)\/SKILL\.md/g,xh=/[*?[\]{}]/;function Dh(e,t,n,r){let o=e.get(t);if(o===void 0){e.set(t,{ats:new Set([n]),pluginConflict:!1,...r!==void 0?{plugin:r}:{}});return}if(o.ats.add(n),r!==void 0){if(o.plugin===void 0&&!o.pluginConflict){o.plugin=r;return}o.plugin!==r&&(o.pluginConflict=!0,o.plugin=void 0)}}function gd(e,t){let n=new Map,r=new Map,o=t;for(let a=t;a<e.length;a++){o=a+1;let l=e[a];if(l===void 0||!l.includes(md)&&!l.includes(Ah))continue;let c;try{c=JSON.parse(l)}catch{continue}if(!ps(c))continue;let d=ps(c.payload)?c.payload:c;if(d.type==="message"){if(d.role!=="user")continue;let g=fd(c,d);if(g!==void 0)for(let u of Nh(d)){let{skill:h,plugin:T}=tr(u);Dh(n,h,g,T)}continue}if(d.type!=="function_call"&&d.type!=="custom_tool_call")continue;let p=vh(d);if(!p.includes(md))continue;let m=fd(c,d);if(m!==void 0){us.lastIndex=0;for(let g=us.exec(p);g!==null;g=us.exec(p)){let u=g[1];if(u===""||u==="."||u===".."||xh.test(u))continue;let h=r.get(u);(h===void 0||m<h)&&r.set(u,m)}}}let s=[];for(let[a,l]of n)s.push({source:"codex",skill:a,...l.plugin!==void 0?{plugin:l.plugin}:{},entryPaths:["command"],invocations:[...l.ats].sort((c,d)=>c<d?1:c>d?-1:0).map(c=>({at:c,ok:!0,entryPath:"command"}))});let i=0;for(let[a,l]of r)n.has(a)||(i++,s.push({source:"codex",skill:a,entryPaths:["tool"],invocations:[{at:l,ok:!0,entryPath:"tool"}],detection:"heuristic"}));return s.length>0&&Ch.debug("Recorded %d Codex skill(s): %d observed, %d inferred",s.length,n.size,i),{uses:s,lastLine:o}}function Nh(e){let t=e.content;if(!Array.isArray(t))return[];let n=[];for(let r of t)if(!(!ps(r)||typeof r.text!="string"))for(let o of r.text.matchAll(Ih)){let s=o[1];s!==void 0&&s!==""&&n.push(s)}return n}function vh(e){return typeof e.arguments=="string"?e.arguments:typeof e.input=="string"?e.input:""}function fd(e,t){return typeof e.timestamp=="string"?e.timestamp:typeof t.timestamp=="string"?t.timestamp:void 0}function ps(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}var _d=require("node:os");b();ms();V();var Fh=y("CursorSkillScanner"),gs="<manually_attached_skills>",Sd="</manually_attached_skills>",Uh=/^[ \t]*Skill Name:[ \t]*(\S+)[ \t]*$/,Hh=/^[ \t]*Path:[ \t]*(.*\S)[ \t]*$/,jh=/^[ \t]*SKILL\.md content:[ \t]*$/;function $h(e,t){let n=J(e),r=J(t).replace(/\/+$/,"");return n.includes("/.cursor/plugins/")?"plugin-bundle":r.length>0&&n.startsWith(`${r}/.cursor/skills/`)?"cursor-global":n.includes("/.agents/skills/")?"repo-agents":n.includes("/.cursor/skills/")?"repo-cursor":/\/\.(claude|codex|gemini|opencode|windsurf|github)\/skills\//.test(n)?"other-host":"unknown"}function Wh(e){let t=[],n=0;for(;n<e.length;){let r=e.indexOf(gs,n);if(r<0)break;let o=r+gs.length,s=e.indexOf(Sd,o),a=e.slice(o,s<0?e.length:s).split(/\r?\n/);for(let l=0;l+2<a.length;l++){let c=Uh.exec(a[l]),d=Hh.exec(a[l+1]);if(!c||!d||!jh.test(a[l+2]))continue;let p=d[1].trim(),m=J(p).replace(/\/+$/,"").split("/");m.at(-1)!=="SKILL.md"||m.at(-2)!==c[1]||(t.push({skill:c[1],path:p}),l+=2)}if(s<0)break;n=s+Sd.length}return t}function ys(e,t){let n=[],r=t,o=qh();for(let i=t;i<e.length;i++){r=i+1;let a=e[i];if(a.length===0||!a.includes(gs))continue;let l;try{l=JSON.parse(a)}catch{continue}let c=Kh(l);if(c===void 0)continue;let d=Gh(l);for(let p of Wh(c))n.push({skill:p.skill,at:d,originRoot:$h(p.path,o)})}let s=Bh(n);return s.length>0&&Fh.debug("Scanned %d Cursor skill(s) from lines %d..%d",s.length,t+1,r),{uses:s,lastLine:Math.max(t,r)}}function Bh(e){let t=new Map;for(let r of e){let o=t.get(r.skill);o===void 0?t.set(r.skill,[r]):o.push(r)}let n=[];for(let[r,o]of t){let s=[...o].sort((a,l)=>a.at===l.at?0:a.at<l.at?1:-1),i=s.map(a=>({at:a.at,ok:!0,entryPath:"command"}));n.push({source:"cursor",skill:r,entryPaths:["command"],invocations:i,originRoot:s[0].originRoot})}return n}function Kh(e){if(!fs(e)||e.role!=="user")return;let n=(fs(e.message)?e.message:void 0)?.content;if(typeof n=="string")return n;if(!Array.isArray(n))return;let r=[];for(let o of n)fs(o)&&o.type==="text"&&typeof o.text=="string"&&r.push(o.text);return r.length>0?r.join(`
`):void 0}function Gh(e){let t=rr(e);if(t===void 0)return"";let n=new Date(t);return Number.isNaN(n.getTime())?"":n.toISOString()}function qh(){return process.env.HOME?.trim()||process.env.USERPROFILE?.trim()||(0,_d.userInfo)().homedir}function fs(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}b();var Jh=y("KimiSkillScanner"),Ed="context.append_loop_event",Xh="Skill";function Td(e,t){let n=new Map,r=[],o=t,s=t;for(let c=t;c<e.length;c++){o=c+1;let d=e[c];if(d.length===0||!d.includes(Ed))continue;let p;try{p=JSON.parse(d)}catch{continue}if(!or(p)||p.type!==Ed)continue;let m=p.event;if(or(m)){if(m.type==="tool.call"){if(m.name!==Xh)continue;let g=or(m.args)?m.args:void 0,u=typeof g?.skill=="string"&&g.skill.length>0?g.skill:void 0,h=typeof m.toolCallId=="string"?m.toolCallId:void 0;if(u===void 0)continue;let T={skill:u,at:Vh(p.time),line:c+1,sawResult:!1,ok:!0};r.push(T),h!==void 0&&n.set(h,T);continue}if(m.type==="tool.result"){let g=typeof m.toolCallId=="string"?m.toolCallId:void 0;if(g===void 0)continue;let u=n.get(g);if(u===void 0)continue;let h=or(m.result)?m.result:void 0;u.ok=h?.isError!==!0,u.sawResult=!0,s=c+1}}}let i=Number.POSITIVE_INFINITY;for(let c of n.values())!c.sawResult&&c.line>s&&c.line<i&&(i=c.line);let a=i===Number.POSITIVE_INFINITY?o:i-1,l=Yh(r);return l.length>0&&Jh.debug("Scanned %d Kimi skill(s) from lines %d..%d",l.length,t+1,a),{uses:l,lastLine:Math.max(t,a)}}function Yh(e){let t=new Map;for(let r of e){let o=t.get(r.skill);o===void 0&&(o=[],t.set(r.skill,o)),o.push({at:r.at,ok:r.ok,entryPath:"tool",outcomeObserved:r.sawResult})}let n=[];for(let[r,o]of t)o.sort((s,i)=>s.at===i.at?0:s.at<i.at?1:-1),n.push({source:"kimi",skill:r,entryPaths:["tool"],invocations:o});return n}function Vh(e){if(typeof e!="number")return"";let t=new Date(e);return Number.isNaN(t.getTime())?"":t.toISOString()}function or(e){return typeof e=="object"&&e!==null&&!Array.isArray(e)}var zh={claude:{source:"claude",scan:pd},codex:{source:"codex",scan:gd},kimi:{source:"kimi",scan:Td},cursor:{source:"cursor",scan:ys},"cursor-cli":{source:"cursor",scan:ys}};function sr(e){return zh[e]}var ir=require("node:fs/promises"),rt=require("node:path");b();ht();var QD=y("SkillDiscovery");async function bd(e){let t=[];for(let n of await Zh(e)){let r=await Qh(n);r!==void 0&&t.push(r)}return t}async function Qh(e){try{let n=(await(0,ir.readFile)(e,"utf-8")).replace(/\n$/,"");return n.length===0?[]:n.split(`
`)}catch{return}}async function Zh(e){let t=(0,rt.basename)(e).replace(/\.jsonl$/,""),n=(0,rt.join)((0,rt.dirname)(e),t,"subagents");try{return(await(0,ir.readdir)(n)).filter(o=>o.startsWith("agent-")&&o.endsWith(".jsonl")).sort().map(o=>(0,rt.join)(n,o))}catch{return[]}}var Rd={id:"skills",supports:e=>sr(e)!==void 0,extract:async e=>{let t=sr(e.source);if(!t)return{};let n=await e.content.lines();if(!n)return{};try{let r=t.scan(n,0);if(r.uses.length===0)return{};let o=cs(n,await bd(e.transcriptPath));return{tools:r.uses.map(s=>er(s,o.get(s.skill)))}}catch(r){throw new Error(`skill extraction failed for ${e.source}/${e.sessionId}: ${R(r)}`)}}};b();Zt();var wd={id:"tool-calls",supports:e=>ad.has(e),extract:async e=>{try{let t=await e.content.read();return t.toolUse?{tools:t.toolUse}:{}}catch(t){throw new Error(`tool-call extraction failed for ${e.source}/${e.sessionId}: ${R(t)}`)}}};var eS=y("SessionSignals"),tS=[wd,Rd];async function kd(e){let t=[],n=!1;for(let r of tS)if(r.supports(e.source))try{let o=await r.extract(e);o.tools&&(n=!0,t.push([...o.tools]))}catch(o){eS.warn("%s extractor failed: %s",r.id,R(o))}return n?{tools:Vn(t)}:{}}function se(e){return{source:e.source,usesAlreadyRecorded:e.usesAlreadyRecorded??!1,daemonRescan:e.daemonRescan??!1,scan:e.scan,forRepo:(t,n,r)=>e.forRepo(t,n,r),forRepoSpansWorktrees:e.forRepoSpansWorktrees??!1,...e.scanForRepo?{scanForRepo:e.scanForRepo}:{}}}function xe(e,t,n){if(n===void 0||t.length>0)return t;throw new Error(`${e} scan failed (${n.kind}): ${n.message}`)}var I_=se({source:"claude",usesAlreadyRecorded:!0,scan:async({windowMs:e,alreadyRecorded:t})=>(await Promise.resolve().then(()=>(Es(),_s))).scanClaudeSessionsOnDisk({windowMs:e,...t?{alreadyRecorded:t}:{}}),forRepo:async(e,t)=>(await Promise.resolve().then(()=>(Es(),_s))).claudeSessionsForRepo(e,t)}),x_=se({source:"codex",daemonRescan:!0,scan:async({windowMs:e})=>(await Promise.resolve().then(()=>(ur(),dr))).scanCodexSessionsOnDisk(e),forRepo:async(e,t)=>(await Promise.resolve().then(()=>(ur(),dr))).codexSessionsForRepo(e,t),scanForRepo:async(e,t)=>(await Promise.resolve().then(()=>(ur(),dr))).discoverCodexSessions(e,t)}),D_=se({source:"cursor",scan:async()=>(await Promise.resolve().then(()=>(_r(),Sr))).scanCursorComposersOnDisk().then(e=>xe("cursor",e.composers,e.error)),forRepo:async(e,t,n)=>(await Promise.resolve().then(()=>(_r(),Sr))).cursorSessionsForRepo(e,t,n),scanForRepo:async(e,t)=>(await Promise.resolve().then(()=>(_r(),Sr))).scanCursorSessions(e,t).then(n=>n.sessions)}),N_=se({source:"kimi",scan:async({windowMs:e})=>(await Promise.resolve().then(()=>(br(),Tr))).scanKimiSessionsOnDisk(e),forRepo:async(e,t)=>(await Promise.resolve().then(()=>(br(),Tr))).kimiSessionsForRepo(e,t),scanForRepo:async(e,t)=>(await Promise.resolve().then(()=>(br(),Tr))).discoverKimiSessions(e,t)}),v_=se({source:"hermes",daemonRescan:!0,scan:async({windowMs:e})=>(await Promise.resolve().then(()=>(Ut(),In))).scanHermesSessionsOnDisk(e).then(t=>xe("hermes",t.sessions,t.error)),forRepo:async(e,t)=>(await Promise.resolve().then(()=>(Ut(),In))).hermesSessionsForRepo(e,t),scanForRepo:async(e,t)=>(await Promise.resolve().then(()=>(Ut(),In))).discoverHermesSessions(e,t)}),O_=se({source:"opencode",scan:async({windowMs:e})=>(await Promise.resolve().then(()=>(wr(),Rr))).scanOpenCodeSessionsOnDisk(e).then(t=>xe("opencode",t.sessions,t.error)),forRepo:async(e,t)=>(await Promise.resolve().then(()=>(wr(),Rr))).openCodeSessionsForRepo(e,t),scanForRepo:async(e,t)=>(await Promise.resolve().then(()=>(wr(),Rr))).scanOpenCodeSessions(e,t).then(n=>n.sessions)}),L_=se({source:"copilot",scan:async({windowMs:e})=>(await Promise.resolve().then(()=>(Cr(),kr))).scanCopilotSessionsOnDisk(e).then(t=>xe("copilot",t.sessions,t.error)),forRepo:async(e,t)=>(await Promise.resolve().then(()=>(Cr(),kr))).copilotSessionsForRepo(e,t),scanForRepo:async(e,t)=>(await Promise.resolve().then(()=>(Cr(),kr))).scanCopilotSessions(e,t).then(n=>n.sessions)}),P_=se({source:"copilot-chat",scan:async({windowMs:e})=>(await Promise.resolve().then(()=>(Ir(),Ar))).scanCopilotChatSessionsOnDisk(e).then(t=>xe("copilot-chat",t.sessions,t.error)),forRepo:async(e,t)=>(await Promise.resolve().then(()=>(Ir(),Ar))).copilotChatSessionsForRepo(e,t),scanForRepo:async(e,t)=>(await Promise.resolve().then(()=>(Ir(),Ar))).scanCopilotChatSessions(e,t).then(n=>n.sessions)}),M_=se({source:"cline",scan:async({windowMs:e})=>(await Promise.resolve().then(()=>(Dr(),xr))).scanClineSessionsOnDisk(void 0,e).then(t=>t.sessions),forRepo:async(e,t)=>(await Promise.resolve().then(()=>(Dr(),xr))).clineSessionsForRepo(e,t),scanForRepo:async(e,t)=>(await Promise.resolve().then(()=>(Dr(),xr))).scanClineSessions(e,void 0,t).then(n=>n.sessions)}),F_=se({source:"cline-cli",scan:async({windowMs:e})=>(await Promise.resolve().then(()=>(vr(),Nr))).scanClineCliSessionsOnDisk(void 0,e).then(t=>xe("cline-cli",t.sessions,t.error)),forRepo:async(e,t)=>(await Promise.resolve().then(()=>(vr(),Nr))).clineCliSessionsForRepo(e,t),scanForRepo:async(e,t)=>(await Promise.resolve().then(()=>(vr(),Nr))).scanClineCliSessions(e,void 0,t).then(n=>n.sessions)}),U_=se({source:"devin",scan:async({windowMs:e})=>(await Promise.resolve().then(()=>(Mr(),Pr))).scanDevinSessionsOnDisk(e).then(t=>xe("devin",t.sessions,t.error)),forRepo:async(e,t)=>(await Promise.resolve().then(()=>(Mr(),Pr))).devinSessionsForRepo(e,t),scanForRepo:async(e,t)=>(await Promise.resolve().then(()=>(Mr(),Pr))).scanDevinSessions(e,t).then(n=>n.sessions)}),H_=se({source:"cursor-cli",scan:async({windowMs:e})=>(await Promise.resolve().then(()=>($r(),jr))).scanCursorCliSessionsOnDisk(void 0,void 0,e).then(t=>xe("cursor-cli",t.sessions,t.error)),forRepo:async(e,t)=>(await Promise.resolve().then(()=>($r(),jr))).cursorCliSessionsForRepo(e,t),scanForRepo:async(e,t)=>(await Promise.resolve().then(()=>($r(),jr))).scanCursorCliSessions(e,void 0,void 0,t).then(n=>n.sessions)}),j_=se({source:"antigravity",usesAlreadyRecorded:!0,forRepoSpansWorktrees:!0,scan:async({windowMs:e,alreadyRecorded:t})=>{let n=await Promise.resolve().then(()=>(qr(),Gr)),r=t?await n.scanAntigravitySessionsOnDisk(void 0,e,{alreadyRecorded:t}):await n.scanAntigravitySessionsOnDisk(void 0,e);return xe("antigravity",r.sessions,r.error)},forRepo:async(e,t)=>(await Promise.resolve().then(()=>(qr(),Gr))).antigravitySessionsForRepo(e,t),scanForRepo:async(e,t)=>(await Promise.resolve().then(()=>(qr(),Gr))).scanAntigravitySessions(e,void 0,t).then(n=>n.sessions)}),ip=[I_,x_,D_,N_,v_,O_,L_,P_,M_,F_,U_,H_,j_],$v=ip.filter(e=>e.daemonRescan);Q();var Hp=require("node:fs/promises");b();hr();Zt();Q();var XE=new Set(["claude","codex","kimi"]);function YE(e,t){return XE.has(e)||e==="cursor-cli"?!0:e==="cursor"&&xs(t)}var VE=y("TranscriptSourceReader");async function jp(e,t){if(YE(e,t))try{return ss(await(0,Hp.readFile)(t,"utf-8"))}catch(n){$(n)||VE.warn("cannot read %s transcript lines from %s: %s",e,t,R(n));return}}async function $p(e,t,n){switch(e){case"gemini":return(await Promise.resolve().then(()=>(dp(),cp))).readGeminiTranscript(t,n);case"opencode":return(await Promise.resolve().then(()=>(fp(),mp))).readOpenCodeTranscript(t,n);case"cursor":return xs(t)?(await Promise.resolve().then(()=>(Xs(),Js))).readCursorCliTranscript(t,n):(await Promise.resolve().then(()=>(hp(),yp))).readCursorTranscript(t,n);case"copilot":return(await Promise.resolve().then(()=>(Ep(),_p))).readCopilotTranscript(t,n);case"devin":return(await Promise.resolve().then(()=>(Rp(),bp))).readDevinTranscript(t,n);case"hermes":return(await Promise.resolve().then(()=>(kp(),wp))).readHermesTranscript(t,n);case"cursor-cli":return(await Promise.resolve().then(()=>(Xs(),Js))).readCursorCliTranscript(t,n);case"copilot-chat":return(await Promise.resolve().then(()=>(vp(),Np))).readCopilotChatTranscript(t,n??void 0);case"cline":return(await Promise.resolve().then(()=>(Pp(),Lp))).readClineTranscript(t,n);case"cline-cli":return(await Promise.resolve().then(()=>(Up(),Fp))).readClineCliTranscript(t,n);case"antigravity":return(await Promise.resolve().then(()=>(Bs(),Zu))).readAntigravityTranscript(t,n??void 0);case"codex":return kt(t,n,en("codex"));case"kimi":return kt(t,n,en("kimi"));default:return kt(t,n,en("claude"))}}Mt();b();var UO=y("GraphArtifactStore");b();Me();function Wp(e){let t=new Set;for(let n of e){if(!n.timestamp)continue;let r=Date.parse(n.timestamp);Number.isFinite(r)&&t.add(Math.floor(r/9e5)*9e5)}return[...t].sort((n,r)=>n-r)}ie();ts();Y();var zE=new Set(["claude:tool","kimi:tool","opencode:tool","hermes:tool"]);function Bp(e,t,n){return n===!1||t===void 0?"assumed":zE.has(`${e}:${t}`)?"observed":"assumed"}b();ke();var Kp=require("node:crypto"),fn=1;function Zs(e,t,n){return`session:${e}:${t}:${n}`}function QE(e){return(0,Kp.createHash)("sha256").update(e,"utf-8").digest("hex").slice(0,16)}function gn(e){switch(e.type){case"session.upserted":return Zs(e.repoIdentity,e.source,e.sessionId);case"commit.created":return`commit:${e.repoIdentity}:${e.hash}`;case"commit.summary":return`commit-summary:${e.repoIdentity}:${e.hash}`;case"worktree.status":return`worktree:${e.repoIdentity}:${e.branch??""}`;case"lookup.observed":return e.kind==="search"?`lookup:${e.repoIdentity}:search:${e.surface}:${e.atMs}:${QE(e.queryKey)}`:`lookup:${e.repoIdentity}:recall:${e.surface}:${e.atMs}`;case"repo.enabled":case"repo.disabled":return`repo:${e.repoIdentity}`}}Xn();var Dt=y("StatsWriter"),zr=5,ZE=3,eT=120,tT=500;function qp(e){return e==null||!Number.isFinite(e)?null:Math.round(e)}function nT(e,t,n){let r=n.now??Date.now;t.length>0&&Ve(e,()=>{let i=e.prepare(`INSERT INTO events_raw
				   (event_id, repo_identity, type, schema_version, producer_kind, producer_version,
				    occurred_at, received_at, data_json, projection_status)
				 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, 'pending')`),a=new Date(r()).toISOString();for(let l of t){let c=l.event;i.run(gn(c),c.repoIdentity,c.type,fn,l.producerKind??n.producerKind,l.producerVersion??n.producerVersion??null,l.occurredAtMs?new Date(l.occurredAtMs).toISOString():null,a,JSON.stringify(c))}});let o=[...new Set(t.map(i=>i.event.repoIdentity))].filter(i=>typeof i=="string"&&i.length>0),s=oT(e,{now:r,pendingScope:o});return n.skipRollup!==!0&&bc(e,{now:r}),{accepted:t.length,projected:s.projected,pending:s.pending}}async function Jp(e,t){let n=Il[t.producerKind]??Uo;for(let r=1;;r++)try{return await jo(o=>{let s=nT(o,e,t);return ST(o,t.now??Date.now),s},{...t.dbPath?{dbPath:t.dbPath}:{},busyTimeoutMs:n})}catch(o){if(O(o)?.kind!=="locked"||r>=ZE)throw o;let s=eT*2**(r-1);await new Promise(i=>setTimeout(i,s+Math.random()*s)),Dt.debug("write lock busy, retrying apply (attempt %d)",r+1)}}var rT="projection_status = 'failed' AND COALESCE(failed_kind, '') = 'unknown-type'";function oT(e,t={}){let n=t.now??Date.now,r=Gp.map(()=>"?").join(", ");e.prepare(`UPDATE events_raw SET projection_status = 'pending', attempts = 0, failed_kind = NULL
		  WHERE ${rT} AND type IN (${r})`).run(...Gp);let o=e.prepare(`SELECT seq, type, schema_version, data_json, attempts
			   FROM events_raw
			  WHERE projection_status = 'pending' AND attempts < ? AND schema_version <= ?
			  ORDER BY seq
			  LIMIT ?`).all(zr,fn,tT),s=0;for(let l of o)try{Ve(e,()=>{let c=JSON.parse(l.data_json);e.prepare("UPDATE events_raw SET claimed_at_ms = ?, attempts = attempts + 1 WHERE seq = ?").run(n(),l.seq),iT(e,c,n()),e.prepare("UPDATE events_raw SET projection_status = 'projected' WHERE seq = ?").run(l.seq)}),s++}catch(c){if(O(c)?.kind==="locked"){Dt.warn("event seq=%d (%s) deferred \u2014 database busy: %s",l.seq,l.type,R(c));continue}let d=l.attempts+1,p=d>=zr?"failed":"pending",m=sT(c)?"unknown-type":"error";e.prepare("UPDATE events_raw SET attempts = ?, projection_status = ?, failed_kind = ? WHERE seq = ?").run(d,p,p==="failed"?m:null,l.seq),p==="failed"?Dt.error("event seq=%d (%s) failed %d times \u2014 parked: %s",l.seq,l.type,d,R(c)):Dt.warn("event seq=%d (%s) projection failed, will retry: %s",l.seq,l.type,R(c))}let i=(t.pendingScope??[]).filter(l=>l.length>0),a=i.length>0?e.prepare(`SELECT COUNT(*) AS n FROM events_raw
						  WHERE projection_status = 'pending' AND attempts < ? AND schema_version <= ?
						    AND repo_identity IN (${i.map(()=>"?").join(",")})`).get(zr,fn,...i):e.prepare(`SELECT COUNT(*) AS n FROM events_raw
						  WHERE projection_status = 'pending' AND attempts < ? AND schema_version <= ?`).get(zr,fn);return{projected:s,pending:a.n}}var Gp=["repo.enabled","repo.disabled","session.upserted","commit.created","commit.summary","worktree.status","lookup.observed"];var Xp="StatsWriter: no projection for event type";function sT(e){return e instanceof Error&&e.message.startsWith(Xp)}function iT(e,t,n){switch(t.type){case"repo.enabled":aT(e,t,n);return;case"repo.disabled":lT(e,t);return;case"session.upserted":dT(e,t,n);return;case"commit.created":pT(e,t,n);return;case"commit.summary":mT(e,t,n);return;case"worktree.status":gT(e,t);return;case"lookup.observed":uT(e,t,n);return;default:{let r=t;throw new Error(`${Xp} ${r.type}`)}}}function aT(e,t,n){let r=e.prepare("SELECT id, repo_name FROM repos WHERE repo_identity = ?").get(t.repoIdentity);if(e.prepare(`INSERT INTO repos (repo_identity, repo_name, worktree_root, remote_url, enabled_at, disabled_at)
		 VALUES (?, ?, ?, ?, ?, NULL)
		 ON CONFLICT(repo_identity) DO UPDATE SET
		   repo_name     = excluded.repo_name,
		   worktree_root = excluded.worktree_root,
		   remote_url    = excluded.remote_url,
		   disabled_at   = NULL`).run(t.repoIdentity,t.repoName,t.worktreeRoot,t.remoteUrl??null,t.enabledAt),r!==void 0&&r.repo_name!==t.repoName){let o=e.prepare("SELECT COALESCE(MAX(written_at_ms), 0) AS value FROM sessions").get(),s=Math.max(n,o.value)+1;e.prepare("UPDATE sessions SET written_at_ms = ? WHERE repo_id = ?").run(s,r.id)}}function lT(e,t){e.prepare("UPDATE repos SET disabled_at = ? WHERE repo_identity = ?").run(t.disabledAt,t.repoIdentity)}function yn(e,t){return e.prepare(`INSERT INTO repos (repo_identity, repo_name, worktree_root, enabled_at)
		 VALUES (?, ?, '', ?)
		 ON CONFLICT(repo_identity) DO NOTHING`).run(t,t,new Date(0).toISOString()),cT(e,t)}function Yp(e,t){let n=e.prepare("SELECT id FROM commits WHERE event_id = ?").get(t);if(!n)throw new Error(`no commits row for ${t}`);return n.id}function Vp(e,t,n){return e.prepare("INSERT INTO branches (repo_id, name) VALUES (?, ?) ON CONFLICT(repo_id, name) DO NOTHING").run(t,n),e.prepare("SELECT id FROM branches WHERE repo_id = ? AND name = ?").get(t,n).id}function cT(e,t){return e.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(t)?.id??null}var zp=`INSERT INTO session_model_usage
   (session_event_id, model, input_tokens, output_tokens, cached_tokens, est_cost_usd,
    updated_at_ms)
 VALUES (?, ?, ?, ?, ?, ?, ?)
 ON CONFLICT(session_event_id, model) DO UPDATE SET
   -- The stamp must be in THIS branch too: a conflict is still a write, and a sync
   -- keyed on it would otherwise never see the summed segment.
   updated_at_ms = excluded.updated_at_ms,
   input_tokens  = session_model_usage.input_tokens  + excluded.input_tokens,
   output_tokens = session_model_usage.output_tokens + excluded.output_tokens,
   cached_tokens = session_model_usage.cached_tokens + excluded.cached_tokens,
   est_cost_usd  = CASE
     WHEN session_model_usage.est_cost_usd IS NULL OR excluded.est_cost_usd IS NULL THEN NULL
     ELSE session_model_usage.est_cost_usd + excluded.est_cost_usd
   END`;function dT(e,t,n){let r=gn(t),o=e.prepare(`SELECT updated_at_ms, started_at_ms, duration_ms,
			        input_tokens, output_tokens, cached_tokens, est_cost_usd, token_coverage
			   FROM sessions WHERE event_id = ?`).get(r);if(t.metadataOnly&&o!==void 0&&(o.started_at_ms!==null||o.duration_ms!==null)||o!==void 0&&(o.started_at_ms!==null||o.duration_ms!==null)&&o.updated_at_ms>t.updatedAtMs)return;o!==void 0&&o.updated_at_ms!==t.updatedAtMs&&Yt(e,[o.updated_at_ms]);let s=yn(e,t.repoIdentity),i=t.models??[],a=i.length>0||t.inputTokens!=null||t.outputTokens!=null||t.cachedTokens!=null,l=a?void 0:o,c=i.length>0?qe(i,u=>u.inputTokens):t.inputTokens??l?.input_tokens??0,d=i.length>0?qe(i,u=>u.outputTokens):t.outputTokens??l?.output_tokens??0,p=i.length>0?qe(i,u=>u.cachedTokens):t.cachedTokens??l?.cached_tokens??0,m=i.some(u=>u.estCostUsd!=null)?qe(i,u=>u.estCostUsd??0):t.estCostUsd??l?.est_cost_usd??null,g=[...i].sort((u,h)=>h.inputTokens+h.outputTokens-(u.inputTokens+u.outputTokens))[0]?.model;if(e.prepare(`INSERT INTO sessions
		   (event_id, repo_id, source, session_id, title, started_at_ms,
		    updated_at_ms, message_count, duration_ms, model,
		    input_tokens, output_tokens, cached_tokens, est_cost_usd, token_coverage, prices_as_of,
		    written_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(event_id) DO UPDATE SET
		   -- Unconditional, and NOT a COALESCE: the stamp means "we wrote this row",
		   -- so anything that preserves an older value defeats it.
		   written_at_ms  = excluded.written_at_ms,
		   title          = COALESCE(excluded.title, sessions.title),
		   started_at_ms  = COALESCE(excluded.started_at_ms, sessions.started_at_ms),
		   updated_at_ms  = excluded.updated_at_ms,
		   message_count  = COALESCE(excluded.message_count, sessions.message_count),
		   duration_ms    = COALESCE(excluded.duration_ms, sessions.duration_ms),
		   model          = COALESCE(excluded.model, sessions.model),
		   input_tokens   = excluded.input_tokens,
		   output_tokens  = excluded.output_tokens,
		   cached_tokens  = excluded.cached_tokens,
		   est_cost_usd   = COALESCE(excluded.est_cost_usd, sessions.est_cost_usd),
		   token_coverage = excluded.token_coverage,
		   prices_as_of   = COALESCE(excluded.prices_as_of, sessions.prices_as_of)`).run(r,s,t.source,t.sessionId,t.title??null,t.startedAtMs??null,t.updatedAtMs,t.messageCount??null,t.durationMs??null,g??null,c,d,p,m,t.tokenCoverage??l?.token_coverage??"sessions-only",t.pricesAsOf??null,n),t.usageEvents!==void 0){let u=new Map;for(let E of e.prepare(`SELECT dedup_key, responded_at_ms, model, input_tokens, output_tokens,
				        cached_tokens, est_cost_usd, updated_at_ms
				   FROM session_usage_events WHERE session_event_id = ?`).all(r))u.set(E.dedup_key,E);Yt(e,[...u.values()].map(E=>E.responded_at_ms)),e.prepare("DELETE FROM session_usage_events WHERE session_event_id = ?").run(r);let h=e.prepare(`INSERT INTO session_usage_events
			   (session_event_id, dedup_key, responded_at_ms, model, input_tokens, output_tokens, cached_tokens,
			    est_cost_usd, updated_at_ms)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`);for(let[E,S]of t.usageEvents.entries())h.run(r,S.dedupKey??`line:${E}`,S.respondedAtMs,S.model,S.input,S.output,S.cached,S.estCostUsd??null,n);let T=e.prepare("UPDATE session_usage_events SET updated_at_ms = ? WHERE session_event_id = ? AND dedup_key = ?");for(let E of e.prepare(`SELECT dedup_key, responded_at_ms, model, input_tokens, output_tokens,
				        cached_tokens, est_cost_usd, updated_at_ms
				   FROM session_usage_events WHERE session_event_id = ?`).all(r)){let S=u.get(E.dedup_key);typeof S?.updated_at_ms=="number"&&S.responded_at_ms===E.responded_at_ms&&S.model===E.model&&S.input_tokens===E.input_tokens&&S.output_tokens===E.output_tokens&&S.cached_tokens===E.cached_tokens&&S.est_cost_usd===E.est_cost_usd&&T.run(S.updated_at_ms,r,E.dedup_key)}}if(a&&t.models!==void 0){let u=new Map;for(let E of e.prepare(`SELECT model, input_tokens, output_tokens, cached_tokens, est_cost_usd, updated_at_ms
				   FROM session_model_usage WHERE session_event_id = ?`).all(r))u.set(E.model,E);e.prepare("DELETE FROM session_model_usage WHERE session_event_id = ?").run(r);let h=e.prepare(zp);for(let E of i)h.run(r,E.model,E.inputTokens,E.outputTokens,E.cachedTokens,E.estCostUsd??null,n);let T=e.prepare("UPDATE session_model_usage SET updated_at_ms = ? WHERE session_event_id = ? AND model = ?");for(let E of e.prepare(`SELECT model, input_tokens, output_tokens, cached_tokens, est_cost_usd, updated_at_ms
				   FROM session_model_usage WHERE session_event_id = ?`).all(r)){let S=u.get(E.model);typeof S?.updated_at_ms=="number"&&S.input_tokens===E.input_tokens&&S.output_tokens===E.output_tokens&&S.cached_tokens===E.cached_tokens&&S.est_cost_usd===E.est_cost_usd&&T.run(S.updated_at_ms,r,E.model)}}if(t.tools!==void 0){let u=new Map;for(let S of e.prepare(`SELECT tool_name, kind, server, calls, last_call_at_ms, input_tokens, output_tokens,
				        cached_tokens, usage_confidence, plugin, origin_root, updated_at_ms
				   FROM session_tool_use WHERE session_event_id = ?`).all(r))u.set(`${S.kind}\0${S.tool_name}`,S);e.prepare("DELETE FROM session_tool_use WHERE session_event_id = ?").run(r);let h=e.prepare(`INSERT INTO session_tool_use
			   (session_event_id, tool_name, kind, server, calls, last_call_at_ms,
			    input_tokens, output_tokens, cached_tokens, usage_confidence, plugin, origin_root,
			    updated_at_ms)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(session_event_id, tool_name, kind) DO UPDATE SET
			     calls = excluded.calls,
			     -- The stamp must be in THIS branch too: a conflict is still a write,
			     -- and a sync keyed on it would otherwise never see a recount.
			     updated_at_ms = excluded.updated_at_ms,
			     -- MAX, not the excluded value: a re-read of the same session by a parser
			     -- that cannot stamp a time (or an older build) would otherwise erase an
			     -- instant a better read already recorded, and NULL is the one value this
			     -- column cannot recover from: the transcript slice it came from is
			     -- behind a cursor by then.
			     --
			     -- NULLIF around the MAX keeps "neither side has a time" as NULL: the
			     -- COALESCEs turn both-NULL into 0, and a stored 0 reads back as a real
			     -- epoch-0 instant, so the display's fallback to the session's own
			     -- timestamp would never fire.
			     last_call_at_ms = NULLIF(MAX(COALESCE(excluded.last_call_at_ms, 0),
			                                  COALESCE(session_tool_use.last_call_at_ms, 0)), 0),
			     -- COALESCE keeps the stored figure when the incoming read has none, for
			     -- the same reason the MAX above does: attribution needs the whole session
			     -- from line 0, so a pass that read a later slice \u2014 or any build whose
			     -- scanner cannot attribute \u2014 must not blank a number an earlier read
			     -- established. The four move together (see SKILL_TOKEN_USAGE_DDL), so
			     -- \`usage_confidence\` is keyed off the same side its tokens came from
			     -- rather than coalesced independently, which could otherwise label one
			     -- read's tokens with another read's confidence.
			     input_tokens     = COALESCE(excluded.input_tokens,  session_tool_use.input_tokens),
			     output_tokens    = COALESCE(excluded.output_tokens, session_tool_use.output_tokens),
			     cached_tokens    = COALESCE(excluded.cached_tokens, session_tool_use.cached_tokens),
			     usage_confidence = CASE WHEN excluded.input_tokens IS NOT NULL THEN excluded.usage_confidence
			                             ELSE session_tool_use.usage_confidence END,
			     -- COALESCE for the same reason as the token columns: a namespace is only
			     -- recoverable while the transcript that named it is readable, and a pass that
			     -- could not resolve one (a contested name, or a scanner that reports none)
			     -- must not blank a label an earlier read established.
			     plugin           = COALESCE(excluded.plugin, session_tool_use.plugin),
			     -- Same rule, one difference worth knowing: unlike a namespace, a root can
			     -- legitimately CHANGE (a repo gains \`.cursor/skills/\` when \`.agents/skills/\`
			     -- stops supplying a skill), and the scanner already resolves that by taking
			     -- its newest observation. So the incoming value wins whenever there IS one,
			     -- and the COALESCE only protects against a pass that could not read a path
			     -- at all.
			     origin_root      = COALESCE(excluded.origin_root, session_tool_use.origin_root)`),T=e.prepare(`INSERT INTO skill_invocations (session_event_id, skill_name, at_ms, ok, ok_confidence,
			                               detection, entry_path, args, body_chars, updated_at_ms)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(session_event_id, skill_name, at_ms) DO UPDATE SET
			     -- A conflict is still a write. The outbound cursor walks this stamp,
			     -- so every correction must move it even though the invocation's own
			     -- at_ms identity remains fixed.
			     updated_at_ms = excluded.updated_at_ms,
			     -- Outcome evidence upgrades in one direction. A completed re-read must
			     -- replace an optimistic fragment, while a later partial read must not erase
			     -- an outcome already observed for this same invocation.
			     ok = CASE WHEN skill_invocations.ok_confidence = 'observed'
			                         AND excluded.ok_confidence <> 'observed'
			                    THEN skill_invocations.ok ELSE excluded.ok END,
			     ok_confidence = CASE WHEN skill_invocations.ok_confidence = 'observed'
			                                   OR excluded.ok_confidence = 'observed'
			                          THEN 'observed' ELSE excluded.ok_confidence END,
			     -- Also the latest reading: an observed entry supersedes an inferred one for
			     -- the same name (see \`scanCodexSkillLines\`), so a later pass that found the
			     -- injected block must be able to clear the heuristic mark.
			     detection     = excluded.detection,
			     entry_path    = excluded.entry_path,
			     -- These two ARE coalesced: they describe one fixed past event, so a pass that
			     -- read no argument string or no body length has nothing better to offer than
			     -- what is already stored.
			     args          = COALESCE(excluded.args, skill_invocations.args),
			     body_chars    = COALESCE(excluded.body_chars, skill_invocations.body_chars)
			 WHERE skill_invocations.ok IS NOT
			           CASE WHEN skill_invocations.ok_confidence = 'observed'
			                       AND excluded.ok_confidence <> 'observed'
			                  THEN skill_invocations.ok ELSE excluded.ok END
			    OR skill_invocations.ok_confidence IS NOT
			           CASE WHEN skill_invocations.ok_confidence = 'observed'
			                      OR excluded.ok_confidence = 'observed'
			                THEN 'observed' ELSE excluded.ok_confidence END
			    OR skill_invocations.detection IS NOT excluded.detection
			    OR skill_invocations.entry_path IS NOT excluded.entry_path
			    OR skill_invocations.args IS NOT COALESCE(excluded.args, skill_invocations.args)
			    OR skill_invocations.body_chars IS NOT COALESCE(excluded.body_chars, skill_invocations.body_chars)`);for(let S of t.tools){let _=u.get(`${S.kind}\0${S.name}`),w=qp(S.lastCallAtMs),A=_?.last_call_at_ms??null,F=w===null?A:A===null?w:Math.max(w,A),U=S.usage?.input??_?.input_tokens??null,H=S.usage?.output??_?.output_tokens??null,ee=S.usage?.cached??_?.cached_tokens??null,K=S.usage?S.usage.confidence:_?.usage_confidence??null;if(h.run(r,S.name,S.kind,S.server??null,S.calls,F,U,H,ee,K,S.plugin??_?.plugin??null,S.originRoot??_?.origin_root??null,n),S.kind==="skill")for(let C of S.invocations??[]){let k=Date.parse(C.at);Number.isFinite(k)&&T.run(r,S.name,k,C.ok?1:0,Bp(t.source,C.entryPath,C.outcomeObserved),S.detection??null,C.entryPath??null,C.args??null,C.bodyChars??null,n)}}let E=e.prepare(`UPDATE session_tool_use SET updated_at_ms = ?
			  WHERE session_event_id = ? AND tool_name = ? AND kind = ?`);for(let S of e.prepare(`SELECT tool_name, kind, server, calls, last_call_at_ms, input_tokens, output_tokens,
				        cached_tokens, usage_confidence, plugin, origin_root, updated_at_ms
				   FROM session_tool_use WHERE session_event_id = ?`).all(r)){let _=u.get(`${S.kind}\0${S.tool_name}`);typeof _?.updated_at_ms=="number"&&_.server===S.server&&_.calls===S.calls&&_.last_call_at_ms===S.last_call_at_ms&&_.input_tokens===S.input_tokens&&_.output_tokens===S.output_tokens&&_.cached_tokens===S.cached_tokens&&_.usage_confidence===S.usage_confidence&&_.plugin===S.plugin&&_.origin_root===S.origin_root&&E.run(_.updated_at_ms,r,S.tool_name,S.kind)}}if(t.activityBuckets!==void 0){let u=n,h=e.prepare("INSERT OR IGNORE INTO session_activity (session_event_id, bucket_ms, recorded_at_ms) VALUES (?, ?, ?)");for(let T of t.activityBuckets)h.run(r,T,u)}}function uT(e,t,n){let r=yn(e,t.repoIdentity),o=t.kind==="search";e.prepare(`INSERT INTO memory_lookups
		   (receipt_id, repo_id, kind, surface, session_id, at_ms, query, query_key, target,
		    result_count, hit, updated_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(receipt_id) DO UPDATE SET
		   kind          = excluded.kind,
		   surface       = excluded.surface,
		   session_id    = excluded.session_id,
		   at_ms         = excluded.at_ms,
		   query         = excluded.query,
		   query_key     = excluded.query_key,
		   target        = excluded.target,
		   result_count  = excluded.result_count,
		   hit           = excluded.hit,
		   updated_at_ms = excluded.updated_at_ms`).run(gn(t),r,t.kind,t.surface,t.sessionId??null,t.atMs,o?t.query:null,o?t.queryKey:null,o?null:t.target??null,t.resultCount,(o?t.resultCount>0:t.hit)?1:0,n)}function pT(e,t,n){let r=yn(e,t.repoIdentity),o=gn(t);e.prepare(`INSERT INTO commits
		   (event_id, repo_id, hash, branch, message, author_name, author_email,
		    committed_at_ms, files_changed, insertions, deletions, written_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(event_id) DO UPDATE SET
		   branch        = COALESCE(excluded.branch, commits.branch),
		   message       = COALESCE(excluded.message, commits.message),
		   author_name   = COALESCE(excluded.author_name, commits.author_name),
		   author_email  = COALESCE(excluded.author_email, commits.author_email),
		   committed_at_ms = excluded.committed_at_ms,
		   files_changed = COALESCE(excluded.files_changed, commits.files_changed),
		   insertions    = COALESCE(excluded.insertions, commits.insertions),
		   deletions     = COALESCE(excluded.deletions, commits.deletions),
		   -- Unconditional, like every other sync/build stamp: this row just
		   -- changed, and the rollup decides a cached day is stale by comparing
		   -- against this. A COALESCE here would hide the change from it.
		   written_at_ms = excluded.written_at_ms`).run(o,r,t.hash,t.branch??null,t.message??null,t.authorName??null,t.authorEmail??null,t.committedAtMs,t.filesChanged??null,t.insertions??null,t.deletions??null,n);let s=Yp(e,o);if(t.branches){e.prepare("DELETE FROM commit_branches WHERE commit_id = ?").run(s);let i=e.prepare(`INSERT INTO commit_branches (commit_id, branch_id) VALUES (?, ?)
			 ON CONFLICT(commit_id, branch_id) DO NOTHING`);for(let a of t.branches)i.run(s,Vp(e,r,a))}if(t.files){e.prepare("DELETE FROM commit_files WHERE commit_id = ?").run(s);let i=e.prepare(`INSERT INTO commit_files (commit_id, path, insertions, deletions) VALUES (?, ?, ?, ?)
			 ON CONFLICT(commit_id, path) DO NOTHING`);for(let a of t.files)i.run(s,a.path,a.insertions??null,a.deletions??null)}}function mT(e,t,n){let r=yn(e,t.repoIdentity),o=`commit:${t.repoIdentity}:${t.hash}`;if(e.prepare(`INSERT INTO commits
		   (event_id, repo_id, hash, branch, message, committed_at_ms, written_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(event_id) DO UPDATE SET
		   branch        = COALESCE(excluded.branch, commits.branch),
		   message       = COALESCE(excluded.message, commits.message),
		   written_at_ms = excluded.written_at_ms`).run(o,r,t.hash,t.branch??null,t.message??null,t.committedAtMs,n),t.branch){let s=Yp(e,o);e.prepare("DELETE FROM commit_branches WHERE commit_id = ?").run(s),e.prepare(`INSERT INTO commit_branches (commit_id, branch_id) VALUES (?, ?)
			 ON CONFLICT(commit_id, branch_id) DO NOTHING`).run(s,Vp(e,r,t.branch))}if(t.sessionLinks){let s=e.prepare(`INSERT INTO sessions
			   (event_id, repo_id, source, session_id, updated_at_ms, message_count,
			    input_tokens, output_tokens, cached_tokens, est_cost_usd, token_coverage, prices_as_of,
			    written_at_ms)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(event_id) DO UPDATE SET
			   input_tokens   = excluded.input_tokens,
			   output_tokens  = excluded.output_tokens,
			   cached_tokens  = excluded.cached_tokens,
			   est_cost_usd   = excluded.est_cost_usd,
			   token_coverage = excluded.token_coverage,
			   prices_as_of   = excluded.prices_as_of,
			   -- The whole reason this column exists. This UPDATE deliberately leaves
			   -- updated_at_ms alone (the commit's clock is not the session's), so a
			   -- sync keyed on that column would never learn the token split just
			   -- improved here. The stamp is what makes the enrichment visible.
			   written_at_ms  = excluded.written_at_ms
			 WHERE sessions.token_coverage = 'sessions-only' AND excluded.token_coverage = 'full'`),i=e.prepare("DELETE FROM session_model_usage WHERE session_event_id = ?"),a=e.prepare(zp),l=e.prepare("DELETE FROM session_tool_use WHERE session_event_id = ?"),c=e.prepare(`INSERT INTO session_tool_use
			   (session_event_id, tool_name, kind, server, calls, last_call_at_ms, updated_at_ms)
			 VALUES (?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(session_event_id, tool_name, kind) DO UPDATE SET
			     calls = excluded.calls,
			     -- The stamp must be in THIS branch too: a conflict is still a write,
			     -- and a sync keyed on it would otherwise never see a recount.
			     updated_at_ms = excluded.updated_at_ms,
			     -- NULLIF for the same reason as the live path above: both-NULL must stay
			     -- NULL, or the row claims epoch 0 as a real last-call instant.
			     last_call_at_ms = NULLIF(MAX(COALESCE(excluded.last_call_at_ms, 0),
			                                  COALESCE(session_tool_use.last_call_at_ms, 0)), 0)`);for(let d of t.sessionLinks){let p=Zs(t.repoIdentity,d.source,d.sessionId),m=d.models??[],g=m.some(h=>h.estCostUsd!=null)?qe(m,h=>h.estCostUsd??0):null,u=s.run(p,r,d.source,d.sessionId,t.committedAtMs,d.messageCount??null,qe(m,h=>h.inputTokens),qe(m,h=>h.outputTokens),qe(m,h=>h.cachedTokens),g,m.length>0?"full":"sessions-only",m.length>0?Yn:null,n);if(Number(u?.changes??0)>0){i.run(p);for(let h of m)a.run(p,h.model,h.inputTokens,h.outputTokens,h.cachedTokens,h.estCostUsd??null,n);if(d.tools!==void 0){l.run(p);for(let h of d.tools)c.run(p,h.name,h.kind,h.server??null,h.calls,qp(h.lastCallAtMs),n)}}}}}var fT=1440*60*1e3;function gT(e,t){let n=yn(e,t.repoIdentity);e.prepare("DELETE FROM worktree_status WHERE repo_id = ? AND observed_at_ms < ?").run(n,t.observedAtMs-fT),e.prepare(`INSERT INTO worktree_status
		   (repo_id, branch_key, branch, files_changed, insertions, deletions, observed_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, branch_key) DO UPDATE SET
		   branch         = excluded.branch,
		   files_changed  = excluded.files_changed,
		   insertions     = excluded.insertions,
		   deletions      = excluded.deletions,
		   observed_at_ms = excluded.observed_at_ms`).run(n,t.branch??"",t.branch??null,t.filesChanged,t.insertions,t.deletions,t.observedAtMs)}function qe(e,t){return e.reduce((n,r)=>n+t(r),0)}var yT=14,hT=2e3;function ST(e,t=Date.now,n=""){try{let r=new Date(t()-yT*864e5).toISOString(),o=e.prepare(`DELETE FROM events_raw
				  WHERE seq IN (
				    SELECT seq FROM events_raw
				     WHERE projection_status = 'projected' AND received_at < ?
				     ORDER BY seq LIMIT ?)`).run(r,hT),s=Number(o?.changes??0);return s>0&&Dt.info("%spruned %d projected events older than %s",n,s,r.slice(0,10)),s}catch(r){return Dt.debug("%sevent pruning skipped: %s",n,R(r)),0}}var Qp=y("DashboardCollector");function wT(e){return e.filter(t=>t.input+t.output+t.cached>0).map(t=>{let n=es(t);return{model:t.model,provider:t.provider,inputTokens:t.input,outputTokens:t.output,cachedTokens:t.cached,...n!==null?{estCostUsd:n}:{}}})}async function kT(e){try{let t=await qc(e);return t&&t!==Qe?t:void 0}catch{return e.title||void 0}}async function Zp(e,t,n=kt){let r=t.source??"claude",o=Date.parse(t.updatedAt);if(!Number.isFinite(o))return null;let s=t.transcriptPath,i=s?await kT({...t,transcriptPath:s}):t.title||void 0,a={type:"session.upserted",repoIdentity:e,source:r,sessionId:t.sessionId,...s?{}:{metadataOnly:!0},...i?{title:i}:{},updatedAtMs:o};if(!s)return a;let l=CT(r,s,n);try{let c=await l.read(),d=Wp(c.entries),p=wT(c.usageByModel??[]),m=new Map((c.usageByModel??[]).map(_=>[_.model,_.provider])),g=(c.usageEvents??[]).map(_=>{let w=es({..._,provider:m.get(_.model)??"unknown"});return{..._,...w!==null?{estCostUsd:w}:{}}}),u=c.entries[0]?.timestamp,h=c.entries[c.entries.length-1]?.timestamp,T=u?Date.parse(u):Number.NaN,E=h?Date.parse(h):Number.NaN,S=await kd({source:r,sessionId:t.sessionId,transcriptPath:s,content:l});return{...a,messageCount:c.entries.length,...Number.isFinite(T)?{startedAtMs:T}:{},...Number.isFinite(T)&&Number.isFinite(E)&&E>T?{durationMs:E-T}:{},...p.length>0?{models:p,tokenCoverage:"full",pricesAsOf:Yn}:{},...c.usageEvents!==void 0&&{usageEvents:g},...S.tools?{tools:S.tools}:{},...d.length>0?{activityBuckets:d}:{}}}catch(c){return(Qc(c)?Qp.debug:Qp.warn)("transcript unreadable for %s/%s: %s",r,t.sessionId,R(c)),a}}function CT(e,t,n){let r,o;return{read:()=>(r??=P(0,()=>e==="claude"?n(t):$p(e,t)),r),lines:()=>(o??=P(0,()=>jp(e,t)),o)}}var AT="";var TL=["-c","core.quotePath=false","log","--numstat","--no-renames",`--format=${AT}%H`];ke();St();var ei=y("DashboardProducer"),em=new Map;async function IT(e,t){let n=em.get(e);if(n)return n;let r=await Pt(e),{identity:o}=await Un(r),s=!1;try{let i=(await Xl(t)).repos.find(a=>a.repoIdentity===o);i?(i.worktrees&&i.worktrees.length>0?i.worktrees:[i.worktreeRoot]).includes(r)||await zl({cwd:e,...t?{configDir:t}:{}}):await Vl({cwd:e,...t?{configDir:t}:{}}),s=!0}catch(i){ei.debug("dashboard repo self-registration skipped for %s: %s",e,R(i))}return s&&em.set(e,o),o}function xT(e){return e?(0,tm.dirname)(e):void 0}async function DT(e,t,n,r){if(!Jt())return ei.debug("dashboard write skipped \u2014 Node %s lacks flag-free node:sqlite",process.versions.node),!1;try{let o=await IT(e,xT(r)),s=await n(o);return s.length===0?!1:(await Jp(s.map(i=>({event:i,producerKind:t})),{producerKind:t,...r?{dbPath:r}:{}}),!0)}catch(o){return ei.warn("dashboard write failed (non-fatal): %s",R(o)),!1}}async function ti(e,t,n){return DT(e,"stop-hook",async r=>{let o=await Zp(r,t);return o?[o]:[]},n)}var Nt=require("node:fs/promises"),nm=require("node:path");Mt();ie();b();var JL=y("GitHookInstaller"),NT="# >>> JolliMemory post-commit hook >>>";async function rm(e){return vT(e,"post-commit",NT)}async function vT(e,t,n){try{let r=await Ei(e),o=(0,nm.join)(r,t);return(await(0,Nt.readFile)(o,"utf-8")).includes(n)?process.platform==="win32"?!0:((await(0,Nt.stat)(o)).mode&73)!==0:!1}catch{return!1}}b();Oe();function om(){return new Promise((e,t)=>{let n=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",r=>n.push(r)),process.stdin.on("end",()=>{process.stdin.destroy(),e(n.join(""))}),process.stdin.on("error",t)})}var ne=y("HermesStopHook");function OT(e){return e!==null&&typeof e=="object"&&!Array.isArray(e)?e:{}}function sm(e,t){let n=e[t];return typeof n=="string"&&n.trim().length>0?n.trim():void 0}function lm(e){let t=OT(e),n=sm(t,"session_id"),r=sm(t,"cwd");return n===void 0||r===void 0?null:{sessionId:n,cwd:r}}async function LT(e,t){try{return(await co(e)).find(r=>r.sessionId===t)?.transcriptPath}catch(n){ne.info("Hermes stop hook: transcript resolution failed: %s",n.message);return}}function cm(e){let t=(0,Te.join)((0,Te.dirname)((0,ni.fileURLToPath)(__jmImportMetaUrl)),"HermesDiscoveryWorker.js");if(!(0,im.existsSync)(t)){ne.error("Hermes discovery worker not found: %s \u2014 reference discovery is left to the scan paths",t);return}try{let n=Zr(process.execPath,[t,"--cwd",e],{detached:!0,stdio:"ignore",cwd:e});n.once("error",r=>{ne.error("Failed to start Hermes discovery worker: %s",r.message)}),n.unref(),ne.debug("Hermes discovery worker spawned (PID: %d)",n.pid??-1)}catch(n){ne.error("Failed to start Hermes discovery worker: %s",n.message)}}async function dm(){if(!li()){Qr((0,am.homedir)());try{let e=await om(),t={};if(e.trim())try{t=JSON.parse(e)}catch(a){ne.info("Hermes stop hook: unparseable payload: %s",a.message);return}let n=lm(t);if(n===null){ne.info("Hermes stop hook: payload named no session_id or cwd \u2014 nothing to record");return}let r=Si(n.cwd);if(Qr(r),!await rm(r)){ne.debug("Hermes stop hook skipped \u2014 %s has not been set up (run `jolli enable`)",r);return}if(await Ji(r)){ne.info("Hermes stop hook skipped \u2014 repository manually disabled");return}if((await Do()).hermesEnabled===!1){ne.info("Hermes integration disabled \u2014 skipping session tracking");return}if(!await ao()){ne.info("Hermes stop hook: Hermes state.db not found \u2014 skipping");return}let s=await LT(r,n.sessionId),i={sessionId:n.sessionId,updatedAt:new Date().toISOString(),source:"hermes"};if(ne.info("Hermes stop hook: session %s in %s",n.sessionId,(0,Te.basename)(r)||r),s!==void 0){let a={sessionId:i.sessionId,transcriptPath:s,updatedAt:i.updatedAt,source:i.source};try{await ka(a,r)}catch(l){ne.error("Failed to save Hermes session: %s",l.message)}await ti(r,a)}else ne.warn("Hermes stop hook: transcript unresolved \u2014 recording metadata-only row"),await ti(r,i);cm(r)}catch(e){ne.info("Hermes stop hook failed: %s",e.message)}}}function PT(){let e=process.argv[1];if(process.env.VITEST||!e||(0,Te.resolve)(e)!==(0,Te.resolve)((0,ni.fileURLToPath)(__jmImportMetaUrl)))return!1;let t=(0,Te.basename)(e).toLowerCase();return t==="hermesstophook.js"||t==="hermesstophook.ts"}PT()&&dm();0&&(module.exports={extractStopIdentity,launchHermesDiscovery,main});
