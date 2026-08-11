#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var rh=Object.create;var rn=Object.defineProperty;var nh=Object.getOwnPropertyDescriptor;var oh=Object.getOwnPropertyNames;var sh=Object.getPrototypeOf,ih=Object.prototype.hasOwnProperty;var b=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var k=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(r){throw e=0,r}},Sa=(t,e)=>{for(var r in e)rn(t,r,{get:e[r],enumerable:!0})},Ea=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of oh(e))!ih.call(t,o)&&o!==r&&rn(t,o,{get:()=>e[o],enumerable:!(n=nh(e,o))||n.enumerable});return t};var Zt=(t,e,r)=>(r=t!=null?rh(sh(t)):{},Ea(e||!t||!t.__esModule?rn(r,"default",{value:t,enumerable:!0}):r,t)),ah=t=>Ea(rn({},"__esModule",{value:!0}),t);function $o(){return uh.getStore()?.traceId}var ka,gT,uh,jo=b(()=>{"use strict";ka=require("node:async_hooks"),gT="0".repeat(32),uh=new ka.AsyncLocalStorage});function x(t){return t instanceof Error?t.message:String(t)}function kt(t){return t instanceof Error&&t.code==="ENOENT"}function on(t){_a=t}function he(){return va}function yh(t,e){let r=hh[e]??fh;return Ta[t]>=Ta[r]}function wh(t,e,r,n,o){let s=new Date().toISOString(),i=t.toUpperCase().padEnd(5),a=r,l=0;a=a.replace(/%[sdj]/g,d=>{if(l>=n.length)return d;let u=n[l++];return d==="%d"?String(Number(u)):d==="%j"?JSON.stringify(u):String(u)});let c=o?` [trace=${o}]`:"";return`[${s}] ${i} [${e}]${c} ${a}`}function F(t){let e=t??_a??process.cwd();return(0,bt.join)(e,dh,ph)}function tr(t){return String(t).padStart(2,"0")}async function kh(t,e){let r=new Date,n=`${r.getUTCFullYear()}-${tr(r.getUTCMonth()+1)}-${tr(r.getUTCDate())}_${tr(r.getUTCHours())}-${tr(r.getUTCMinutes())}-${tr(r.getUTCSeconds())}`;try{let o=(0,bt.join)(t,`debug_${n}.log`);for(let s=1;await Th(o);s++)o=(0,bt.join)(t,`debug_${n}_${s}.log`);await(0,ae.rename)(e,o)}catch{return}try{let o=(await(0,ae.readdir)(t)).filter(s=>bh.test(s)).sort();for(let s=0;s<o.length-Eh;s++)await(0,ae.unlink)((0,bt.join)(t,o[s])).catch(()=>{})}catch{}}async function Th(t){try{return await(0,ae.stat)(t),!0}catch{return!1}}function Rh(t){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||va||(Ra=Ra.then(async()=>{try{let e=F(),r=(0,bt.join)(e,mh);await(0,ae.stat)(e);try{(await(0,ae.stat)(r)).size>Sh&&await kh(e,r)}catch{}await(0,ae.appendFile)(r,`${t}
`,"utf-8")}catch{}}))}function p(t){function e(r,n,o){let s=wh(r,t,n,o,$o());gh&&(r==="info"||r==="debug")||(r==="warn"?console.warn(s):console.error(s)),yh(r,t)&&Rh(s)}return{debug(r,...n){e("debug",r,n)},info(r,...n){e("info",r,n)},warn(r,...n){e("warn",r,n)},error(r,...n){e("error",r,n)}}}var ae,bt,dh,ph,mh,fe,_a,va,Ta,fh,hh,gh,Ra,Sh,Eh,bh,h=b(()=>{"use strict";ae=require("node:fs/promises"),bt=require("node:path");jo();dh=".jolli",ph="jollimemory",mh="debug.log";fe="jollimemory/summaries/v3";va=!1;Ta={debug:0,info:1,warn:2,error:3},fh="info",hh={},gh=!0;Ra=Promise.resolve(),Sh=2*1024*1024,Eh=10,bh=/^debug_.*\.log$/});function Tt(t,e,r){return(0,Ca.promisify)(Le.execFile)(t,e,{...rr,...r??{}})}function Te(t,e,r){return(0,Le.execFileSync)(t,e,{...rr,...r??{}})}function xa(t,e,r){return(0,Le.spawnSync)(t,e,{...rr,...r??{}})}var Le,Ca,rr,nr,Re=b(()=>{"use strict";Le=require("node:child_process"),Ca=require("node:util"),rr={windowsHide:!0};nr=((t,e,r)=>Array.isArray(e)?(0,Le.spawn)(t,e,{...rr,...r??{}}):(0,Le.spawn)(t,{...rr,...e??{}}))});function Na(t){let e=Pa.get(t);if(e!==void 0)return e;let r=t;try{let n=Te("git",["rev-parse","--show-toplevel"],{cwd:t,encoding:"utf-8",stdio:["ignore","pipe","pipe"]}).trim();n&&(r=n)}catch{}return Pa.set(t,r),r}async function M(t,e){U.debug("git %s%s",e?`[cwd=${e}] `:"",t.join(" "));try{let{stdout:r,stderr:n}=await Tt("git",t,{maxBuffer:vh,env:{...process.env,LC_ALL:"C"},...e!==void 0&&{cwd:e}});return{stdout:r.trimEnd(),stderr:n.trim(),exitCode:0}}catch(r){let n=r,o=typeof n.code=="number"?n.code:n.code==="ENOENT"?127:1,s={stdout:(n.stdout??"").trimEnd(),stderr:(n.stderr??n.message??"").trim(),exitCode:o};return U.debug("git command failed (exit: %d, stderr: %s)",o,s.stderr.substring(0,200)),s}}async function Ho(t,e){return(await M(["rev-parse","--verify",`refs/heads/${t}`],e)).exitCode===0}async function Fo(t,e){if(await Ho(t,e))return;U.info("Creating orphan branch '%s' using plumbing commands",t);let r=JSON.stringify({version:1,entries:[]},null,"	"),n=await Ih(r,e);U.debug("Created blob: %s",n);let o=`100644 blob ${n}	index.json
`,s=await Oh(o,e);U.debug("Created tree: %s",s);let i=await M(["commit-tree",s,"-m","Initialize Jolli Memory summaries"],e);if(i.exitCode!==0)throw new Error(`Failed to create commit: ${i.stderr}`);let a=i.stdout.trim();U.debug("Created commit: %s",a);let l=await M(["update-ref",`refs/heads/${t}`,a],e);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);U.info("Orphan branch '%s' created successfully",t)}function Ph(t){let e=t.toLowerCase();return xh.some(r=>e.includes(r))}async function Uo(t,e,r){U.debug("Reading file from branch: %s:%s",t,e);let n=await M(["show",`${t}:${e}`],r);return n.exitCode!==0?(Ph(n.stderr)?U.debug("File not found: %s:%s",t,e):U.warn("Read failed for %s:%s (git exit %d): %s",t,e,n.exitCode,n.stderr||"(no stderr)"),null):n.stdout}async function Bo(t,e,r){let n=new Map;if(e.length===0)return n;let o=["cat-file","--batch"];return U.debug("git (cat-file --batch stream) %s%s for %d paths",r?`[cwd=${r}] `:"",o.join(" "),e.length),new Promise((s,i)=>{let a=nr("git",o,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),l="",c=Buffer.alloc(0),d=!0,u=0,m=[],f=!1,w=0,C=!1,_=S=>{C||(C=!0,S?i(S):s(n))};a.stderr.on("data",S=>{l+=S.toString()}),a.stdout.on("data",S=>{for(c=Buffer.concat([c,S]);!C;){if(d){let I=c.indexOf(10);if(I<0)return;let N=c.subarray(0,I).toString("utf8");if(c=c.subarray(I+1),w>=e.length){_(new Error(`git cat-file --batch returned extra response: ${N}`));return}let H=e[w];if(w++,N.endsWith(" missing")){n.set(H,null);continue}let ke=N.substring(N.lastIndexOf(" ")+1),K=Number.parseInt(ke,10);if(!Number.isFinite(K)||K<0){_(new Error(`Unexpected cat-file --batch header for ${H}: ${N}`));return}u=K,m=[],d=!1,f=!0}if(u>0){if(c.length===0)return;let I=Math.min(u,c.length);if(m.push(c.subarray(0,I)),c=c.subarray(I),u-=I,u>0)return}if(f){if(c.length<1)return;c=c.subarray(1),f=!1;let I=e[w-1];n.set(I,Buffer.concat(m).toString("utf8")),m=[],d=!0}}}),a.on("close",S=>{if(S!==0){_(new Error(`git cat-file --batch failed (exit ${S}): ${l.trim()}`));return}if(w<e.length){_(new Error(`git cat-file --batch returned ${w} of ${e.length} expected responses; stderr=${l.trim()}`));return}_(null)}),a.on("error",S=>{_(S)}),a.stdin.on("error",S=>{_(S)});for(let S of e)a.stdin.write(`${t}:${S}
`);a.stdin.end()})}async function Oa(t,e,r,n){await Fo(t,n);let o=await M(["rev-parse",`refs/heads/${t}`],n);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let s=o.stdout.trim();await Dh(t,s,r,e,n);let i=e.filter(l=>!l.delete).length,a=e.filter(l=>l.delete).length;U.info("Updated branch '%s': %d written, %d deleted (via fast-import)",t,i,a)}async function Wo(t,e,r){U.debug("Listing files in branch %s under prefix '%s'",t,e);let n=await M(["ls-tree","-z","-r","--name-only",t,e],r);if(n.exitCode!==0)return U.debug("Failed to list files (branch may not exist): %s",n.stderr),[];let o=n.stdout.split(Ch).filter(s=>s.length>0);return U.debug("Found %d files",o.length),o}async function Ah(t){let e=await M(["rev-parse","--git-common-dir"],t);if(e.exitCode!==0)throw new Error(`Failed to get git common dir: ${e.stderr}`);let r=e.stdout.trim();return(0,_e.resolve)(t,r)}async function Jo(t){let e=await Ah(t);return(0,_e.dirname)(e)}async function an(t){return(await M(["rev-parse","--git-dir"],t)).exitCode===0}async function Rt(t){let e=await M(["worktree","list","--porcelain"],t);if(e.exitCode!==0)throw new Error(`Failed to list worktrees: ${e.stderr}`);return e.stdout.split(`
`).filter(n=>n.startsWith("worktree ")).map(n=>n.slice(9).trim())}async function or(t){let e=(0,_e.join)(t,".git");if((await(0,sn.stat)(e)).isDirectory())return(0,_e.join)(e,"hooks");let n=await(0,sn.readFile)(e,"utf-8"),o=n.trim().match(/^gitdir:\s*(.+)$/);if(!o)throw new Error(`Unexpected .git file content: ${n.trim()}`);let s=o[1].trim(),i=(0,_e.resolve)(t,s),a=i.replace(/\\/g,"/").lastIndexOf("/worktrees/");if(a>=0){let l=i.substring(0,a);return(0,_e.join)(l,"hooks")}return(0,_e.join)(i,"hooks")}function La(t,e,r){return U.debug("git (stdin) %s%s",r?`[cwd=${r}] `:"",t.join(" ")),new Promise((n,o)=>{let s=nr("git",t,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),i="",a="";s.stdout.on("data",l=>{i+=l.toString()}),s.stderr.on("data",l=>{a+=l.toString()}),s.on("close",l=>{l!==0?o(new Error(`git ${t[0]} failed (exit ${l}): ${a.trim()}`)):n(i.trim())}),s.on("error",l=>{o(l)}),s.stdin.write(e),s.stdin.end()})}async function Ih(t,e){return La(["hash-object","-w","--stdin"],t,e)}async function Aa(t,e){let r=await M(["var",t],e);if(r.exitCode!==0)throw new Error(`Failed to read ${t}: ${r.stderr}`);return r.stdout.trim()}async function Dh(t,e,r,n,o){let s=await Aa("GIT_AUTHOR_IDENT",o),i=await Aa("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];U.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=n.filter(d=>!d.delete),c=n.filter(d=>d.delete);return new Promise((d,u)=>{let m=nr("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),f="";m.stderr.on("data",S=>{f+=S.toString()}),m.on("close",S=>{S!==0?u(new Error(`git fast-import failed (exit ${S}): ${f.trim()}`)):d()}),m.on("error",S=>{u(S)});let w=m.stdin;w.on("error",S=>{u(S)});let C=[];l.forEach((S,I)=>{let N=I+1,H=Buffer.from(S.content,"utf8");C.push(`blob
mark :${N}
data ${H.length}
`,H,`
`)});let _=Buffer.from(r,"utf8");C.push(`commit refs/heads/${t}
`,`author ${s}
`,`committer ${i}
`,`data ${_.length}
`,_,`
`,`from ${e}
`),l.forEach((S,I)=>{C.push(`M 100644 :${I+1} ${Ia(S.path)}
`)});for(let S of c)C.push(`D ${Ia(S.path)}
`);C.push(`done
`),Nh(w,C).then(()=>{w.end()},S=>{u(S)})})}async function Nh(t,e){for(let r of e)t.write(r)||await(0,Da.once)(t,"drain")}function Ia(t){return/["\\\n\r]/.test(t)?`"${t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:t}async function Oh(t,e){return La(["mktree"],t,e)}var Da,sn,_e,vh,Ch,U,Pa,xh,te=b(()=>{"use strict";Da=require("node:events"),sn=require("node:fs/promises"),_e=require("node:path");h();Re();vh=10*1024*1024,Ch="\0",U=p("GitOps"),Pa=new Map;xh=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});function Lh(t){return new Promise(e=>setTimeout(e,t))}function $a(t){let e=Number(t);if(!Number.isInteger(e)||e<=0)return!1;if(e===process.pid)return!0;try{return process.kill(e,0),!0}catch(r){return r.code!=="ESRCH"}}async function qo(t){try{let e=await(0,ve.stat)(t),r=Date.now()-e.mtimeMs,n=await ja(t),o=n!==null&&!$a(n);if(!o&&r<Ma)return!1;o?sr.warn("Removing orphaned lock %s (PID %s no longer running)",t,n):sr.warn("Removing stale lock file %s (age: %dms)",t,r),await(0,ve.rm)(t,{force:!0})}catch(e){if(e.code!=="ENOENT")return sr.error("Failed to check lock file %s: %s",t,e.message),!1}try{return await(0,ve.writeFile)(t,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function ja(t){try{let r=(await(0,ve.readFile)(t,"utf-8")).trim();return r.length>0?r:null}catch{return null}}async function _t(t,e){let r=await ja(t);if(r!==null&&r!==String(process.pid)){sr.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",e,r,process.pid);return}try{await(0,ve.rm)(t,{force:!0})}catch(n){sr.error("Failed to release %s: %s",e,n.message)}}async function vt(t,e){if(e.timeoutMs<=0)return qo(t);let r=Date.now()+e.timeoutMs;for(;;){if(await qo(t))return!0;if(Date.now()>=r)return!1;await Lh(e.pollMs)}}var ve,sr,Ma,Go=b(()=>{"use strict";ve=require("node:fs/promises");h();sr=p("LockPrimitives"),Ma=300*1e3});function Ua(t){return(0,Fa.resolve)(t??process.cwd())}function ln(t){return Ko.getStore()?.has(Ua(t))===!0}function cn(t,e){let r=new Set(Ko.getStore()??[]);return r.add(Ua(t)),Ko.run(r,e)}var Ha,Fa,Ko,un=b(()=>{"use strict";Ha=require("node:async_hooks"),Fa=require("node:path"),Ko=new Ha.AsyncLocalStorage});function Mh(t){return Tt("git",["rev-parse","--git-common-dir"],{cwd:t})}async function Xa(t){let e=t??process.cwd(),r=qa.get(e);if(r!==void 0)return r;let n;try{let{stdout:o}=await Mh(e),s=o.trim(),i=(0,re.isAbsolute)(s)?s:(0,re.resolve)(e,s);n=(0,re.join)(i,"jollimemory")}catch{Ka.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",e),n=F(e)}return qa.set(e,n),n}async function qh(t){let e=F(t);return await(0,Ct.mkdir)(e,{recursive:!0}),e}async function Vo(t){let e=await Xa(t);return await(0,Ct.mkdir)(e,{recursive:!0}),e}async function Xo(t,e={}){let r=e.timeoutMs??Hh,n=e.pollMs??Fh,o=await Vo(t);return vt((0,re.join)(o,Va),{timeoutMs:r,pollMs:n})}async function Yo(t){let e=await Xa(t);await _t((0,re.join)(e,Va),"orphan-write.lock")}async function Ya(t,e,r,n){let o=n.timeoutMs??Bh,s=n.pollMs??dn;await(0,Ct.mkdir)(t,{recursive:!0});let i=(0,re.join)(t,e),a=await vt(i,{timeoutMs:o,pollMs:s});a||Ka.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",e,o);try{return await r()}finally{a&&await _t(i,e)}}async function za(t,e,r={}){return Ya(await qh(t),$h,e,r)}async function zo(t,e,r={}){return Ya(t,jh,e,r)}async function ir(t,e={}){let r=e.timeoutMs??Wh,n=e.pollMs??dn,o=await Vo(t),s=(0,re.join)(o,Wa);return await vt(s,{timeoutMs:r,pollMs:n})?{release:()=>_t(s,Wa)}:null}async function Qo(t,e,r={}){let n=await ir(t,r);if(!n)return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await n.release()}}async function Zo(t,e,r={}){let n=r.timeoutMs??Uh,o=r.pollMs??dn,s=await Vo(t),i=(0,re.join)(s,Ba);if(!await vt(i,{timeoutMs:n,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await _t(i,Ba)}}async function es(t,e={}){let r=e.timeoutMs??Jh,n=e.pollMs??dn,o=e.globalDir??(0,re.join)((0,Ga.homedir)(),".jolli","jollimemory");await(0,Ct.mkdir)(o,{recursive:!0});let s=(0,re.join)(o,Ja);if(!await vt(s,{timeoutMs:r,pollMs:n}))return{acquired:!1};try{return{acquired:!0,value:await t()}}finally{await _t(s,Ja)}}var Ct,Ga,re,Ka,Va,Ba,$h,jh,Wa,Ja,Hh,Fh,Uh,dn,Bh,Wh,Jh,qa,Ce=b(()=>{"use strict";Ct=require("node:fs/promises"),Ga=require("node:os"),re=require("node:path");h();Re();Go();un();Ka=p("Locks");Va="orphan-write.lock",Ba="profile.lock",$h="sessions.lock",jh="config.lock",Wa="repo-hooks.lock",Ja="runtime-registry.lock",Hh=1e3,Fh=50,Uh=5e3,dn=25,Bh=5e3,Wh=5e3,Jh=5e3,qa=new Map});async function ts(t,e,r={}){await(0,Ke.mkdir)((0,Qa.dirname)(t),{recursive:!0});let n=`${t}.${process.pid}.tmp`;await(0,Ke.writeFile)(n,e,r.mode!==void 0?{encoding:"utf-8",mode:r.mode}:"utf-8");try{await(0,Ke.rename)(n,t)}catch(o){throw await(0,Ke.unlink)(n).catch(()=>{}),o}}var Ke,Qa,rs=b(()=>{"use strict";Ke=require("node:fs/promises"),Qa=require("node:path")});function tl(t){return{...t,manuallyDisabled:t.userDisabled===!0||t.cutoverFence!==void 0}}async function ns(t){let e=await M(["rev-parse","--git-common-dir"],t),r=e.exitCode===0?e.stdout.trim():"";if(!r)return{profilePath:(0,xe.join)(F(t),Za),legacyMarkerPath:null};let n=(0,xe.isAbsolute)(r)?r:(0,xe.join)(t,r),o=(0,xe.dirname)(n);return{profilePath:(0,xe.join)(F(o),Za),legacyMarkerPath:(0,xe.join)(n,Gh,Kh)}}async function pn(t){try{let e=await(0,ar.readFile)(t,"utf-8"),r=JSON.parse(e);return r&&typeof r=="object"&&!Array.isArray(r)?r:{}}catch{return{}}}async function Xh(t){try{return await(0,ar.stat)(t),!0}catch{return!1}}async function rl(t,e){await ts(t,`${JSON.stringify(e,null,"	")}
`)}async function Yh(t){let e;try{e=await Rt(t)}catch{e=[t]}for(let r of e)if(await Xh((0,xe.join)(F(r),Vh)))return!0;return!1}async function Ve(t){let{profilePath:e}=await ns(t),r=await pn(e);if(r.userDisabled!==void 0)return r.userDisabled===!0;if(r.manuallyDisabled!==void 0)return el(t,e,r.manuallyDisabled===!0);let n=await Yh(t);return el(t,e,n)}async function el(t,e,r){let n=await Zo(t,async()=>{let o=await pn(e);return o.userDisabled!==void 0?o.userDisabled===!0:(await rl(e,tl({...o,userDisabled:r})),r)}).catch(()=>{});return n?.acquired&&n.value!==void 0?n.value:r}async function os(t,e){let{profilePath:r}=await ns(t);if(!(await Zo(t,async()=>{let o=await pn(r);await rl(r,tl({...o,userDisabled:e}))})).acquired)throw new Error("Timed out acquiring the repo profile lock")}async function lr(t){let{profilePath:e}=await ns(t);return(await pn(e)).cutoverFence??null}var ar,xe,Za,Gh,Kh,Vh,Xe=b(()=>{"use strict";ar=require("node:fs/promises"),xe=require("node:path");h();Re();rs();te();Ce();Za="profile.json",Gh="jollimemory",Kh="backfill-card-dismissed",Vh="disabled-by-user"});var ss=b(()=>{"use strict"});async function P(t,e,r){let n=`${t}.${process.pid}.${(0,nl.randomUUID)()}.tmp`;await(0,st.writeFile)(n,e,r===void 0?"utf-8":{encoding:"utf-8",mode:r});try{await(0,st.rename)(n,t)}catch(o){let s=o.code;if(s==="EPERM"||s==="EACCES")await(0,st.writeFile)(t,e,r===void 0?"utf-8":{encoding:"utf-8",mode:r}),await(0,st.rm)(n,{force:!0});else throw o}}var nl,st,ne=b(()=>{"use strict";nl=require("node:crypto"),st=require("node:fs/promises")});function Q(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}var is=b(()=>{"use strict"});var ol=b(()=>{"use strict"});var sl=b(()=>{"use strict"});function il(t){return Number.isFinite(t)&&t>=0&&t<=1114111&&!(t>=55296&&t<=57343)}function al(t){return t.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(e,r)=>{if(r.startsWith("#x")){let o=Number.parseInt(r.slice(2),16);return il(o)?String.fromCodePoint(o):e}if(r.startsWith("#")){let o=Number.parseInt(r.slice(1),10);return il(o)?String.fromCodePoint(o):e}let n=zh[r];return typeof n=="string"?n:e})}var zh,ll=b(()=>{"use strict";zh={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var Qh,cl,ul=b(()=>{"use strict";ol();is();sl();ll();Qh={decodeHtmlEntities:al,lowercase:t=>t.toLowerCase()},cl=new Set(Object.keys(Qh))});var Zh,dl,pl=b(()=>{"use strict";Zh="^https://app\\.asana\\.com/",dl={id:"asana",label:"Asana",icon:"checklist",match:{claude:{prefixes:["mcp__claude_ai_Asana__"],acceptSuffix:"get_task"},codex:{namespaceSuffix:"asana",functionCallNames:["_get_task"],invocationTools:["asana.get_task"]}},wrapperKeys:["data"],reference:{nativeId:{pipe:[{op:"path",path:"gid"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"permalink_url"}],require:Zh,requireFlags:"i"},description:{pipe:[{op:"path",path:"notes"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"task"}]},{key:"assignee",label:"Assignee",icon:"person",pipe:[{op:"path",path:"assignee.name"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"asana-tasks",itemTag:"task",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var eg,ml,fl=b(()=>{"use strict";eg="^https://[^/]+/wiki/",ml={id:"confluence",label:"Confluence",icon:"book",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"],acceptSuffix:"getConfluencePage"},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_getconfluencepage"],invocationTools:["atlassian_rovo.getConfluencePage"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"pageId"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:eg},description:{pipe:[{op:"path",path:"body"}],optional:!0}},fields:[{key:"space",label:"Space",icon:"symbol-namespace",pipe:[{op:"path",path:"space"}]},{key:"author",label:"Author",icon:"account",pipe:[{op:"path",path:"author"}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"entityType"}],[{op:"const",value:"page"}]]}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"confluence-pages",itemTag:"page",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var tg,hl,gl=b(()=>{"use strict";tg="^/[^/\\s]+/[^/\\s]+",hl={id:"context7",label:"Context7",icon:"book",trackOnly:!0,argumentsDerived:!0,match:{claude:{prefixes:["mcp__context7__"],acceptSuffix:"query-docs"},codex:{namespaceSuffix:"context7",functionCallNames:["_query_docs"],invocationTools:["query-docs","context7.query-docs"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"libraryId"}],require:tg},title:{pipe:[{op:"path",path:"libraryId"},{op:"regex",pattern:"^/(.+)$",extract:"$1"}],require:".+"},url:{pipe:[{op:"template",template:"https://context7.com{id}",from:{id:[{op:"path",path:"libraryId"}]}}],require:"^https://context7\\.com/"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"context7-libraries",itemTag:"library",bodyTag:"content",maxCharsPerReference:2e3,maxTotalChars:8e3}}});var rg,ng,yl,wl=b(()=>{"use strict";rg="^https?://github\\.com/([^/]+)/[^/]+/(?:issues|pull)/\\d+",ng="^https?://github\\.com/[^/]+/([^/]+)/(?:issues|pull)/\\d+",yl={id:"github",label:"GitHub",icon:"issues",match:{claude:{prefixes:["mcp__github__"]},codex:{namespaceSuffix:"github",functionCallNames:["_fetch_issue","_search_issues"],invocationTools:["github_fetch_issue","github_search_issues"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"template",template:"{owner}/{repo}#{number}",from:{owner:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^([^/]+)/[^/]+$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:rg,extract:"$1"}]]}],repo:[{op:"coalesce",of:[[{op:"path",path:"repository.full_name"},{op:"regex",pattern:"^[^/]+/([^/]+)$",extract:"$1"}],[{op:"path",path:"html_url"},{op:"regex",pattern:ng,extract:"$1"}]]}],number:[{op:"path",path:"number"}]}}],require:"^[^/]+/[^/]+#\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"html_url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"body"},{op:"transform",fn:"decodeHtmlEntities"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"state"}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]},{key:"assignees",label:"Assignees",icon:"account",pipe:[{op:"path",path:"assignees"},{op:"join",sep:", "}]},{key:"milestone",label:"Milestone",icon:"milestone",pipe:[{op:"coalesce",of:[[{op:"path",path:"milestone"}],[{op:"path",path:"milestone.title"}]]}]},{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"coalesce",of:[[{op:"path",path:"issue_type"}],[{op:"path",path:"issue_type.name"}]]}]}],storage:{nativeIdPathSafe:!1},render:{wrapperTag:"github-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var og,Sl,El=b(()=>{"use strict";og="^[A-Z][A-Z0-9_]*-\\d+$",Sl={id:"jira",label:"Jira",icon:"issues",match:{claude:{prefixes:["mcp__claude_ai_Atlassian__"]},codex:{namespaceSuffix:"atlassian_rovo",functionCallNames:["_fetch","_getjiraissue"],invocationTools:["atlassian_rovo.fetch","atlassian_rovo.getJiraIssue"]}},wrapperKeys:["nodes","issues","items","results"],reference:{nativeId:{pipe:[{op:"path",path:"key"}],require:og},title:{pipe:[{op:"path",path:"fields.summary"}],require:".+"},url:{pipe:[{op:"path",path:"webUrl"}],require:"^https?://"},description:{pipe:[{op:"path",path:"fields.description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.status.name"}],[{op:"path",path:"fields.status"}]]}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"fields.priority.name"}],[{op:"path",path:"fields.priority"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"fields.labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jira-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var bl,kl=b(()=>{"use strict";bl={id:"jollimemory",label:"Jolli Memory",icon:"history",trackOnly:!0,argumentsDerived:!0,accumulateBody:!0,match:{claude:{prefixes:["mcp__jollimemory__"],exact:["mcp__jollimemory__recall","mcp__jollimemory__search","mcp__jollimemory__get_decision_timeline"]},codex:{namespaceSuffix:"jollimemory",functionCallNames:["recall","search","get_decision_timeline"],invocationTools:["recall","search","get_decision_timeline"],invocationServer:"jollimemory"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"tool"}],require:"^(recall|search|get_decision_timeline)$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},description:{pipe:[{op:"path",path:"query"}],optional:!0}},fields:[],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"jolli-memory-lookups",itemTag:"lookup",bodyTag:"queries",maxCharsPerReference:2e3,maxTotalChars:6e3}}});var sg,Tl,Rl=b(()=>{"use strict";sg="^[A-Z][A-Z0-9_]*-\\d+$",Tl={id:"linear",label:"Linear",icon:"issues",match:{claude:{prefixes:["mcp__linear__","mcp__claude_ai_Linear__"],denySuffixes:["list_issues","search_issues"]},codex:{namespaceSuffix:"linear",functionCallNames:["_fetch","_get_issue"],invocationTools:["linear_fetch","linear.get_issue"]}},wrapperKeys:["items","issues","nodes","results"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:sg},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https?://"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"status",label:"Status",icon:"circle-large-filled",pipe:[{op:"path",path:"status"}]},{key:"priority",label:"Priority",icon:"flame",pipe:[{op:"coalesce",of:[[{op:"path",path:"priority"}],[{op:"path",path:"priority.name"}]]}]},{key:"labels",label:"Labels",icon:"tag",pipe:[{op:"path",path:"labels"},{op:"join",sep:", "}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"linear-issues",itemTag:"issue",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var _l,vl=b(()=>{"use strict";_l={id:"monday",label:"monday.com",icon:"table",match:{claude:{prefixes:["mcp__claude_ai_monday_com__"],acceptSuffix:"get_board_items_page"},codex:{namespaceSuffix:"monday_com",functionCallNames:["_get_board_items_page"],invocationTools:["monday_com.get_board_items_page"]}},wrapperKeys:["items"],reference:{nativeId:{pipe:[{op:"path",path:"id"}],require:"^\\d+$"},title:{pipe:[{op:"path",path:"name"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://([\\w-]+\\.)*monday\\.com/",requireFlags:"i"},description:{pipe:[{op:"path",path:"description"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"item"}]},{key:"board",label:"Board",icon:"project",pipe:[{op:"path",path:"board"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"monday-items",itemTag:"item",bodyTag:"description",maxCharsPerReference:4e3,maxTotalChars:3e4}}});var ig,ag,lg,Cl,xl=b(()=>{"use strict";ig="[-/]([0-9a-fA-F]{32})(?=[/?#]|$)",ag="^https://(www\\.notion\\.so|notion\\.so|app\\.notion\\.com|[^/]+\\.notion\\.site)/",lg="<content\\b[^>]*>([\\s\\S]*?)</content>",Cl={id:"notion",label:"Notion",icon:"file-text",match:{claude:{prefixes:["mcp__claude_ai_Notion__"],acceptSuffix:"notion-fetch"},codex:{namespaceSuffix:"notion",functionCallNames:["_fetch"],invocationTools:["notion_fetch"]}},wrapperKeys:["results","items","pages"],reference:{guard:{pipe:[{op:"path",path:"metadata.type"}],require:"^page$"},nativeId:{pipe:[{op:"path",path:"url"},{op:"regex",pattern:ig,extract:"$1",lastMatch:!0},{op:"transform",fn:"lowercase"}],require:"^[0-9a-fA-F]{32}$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:ag,requireFlags:"i"},description:{pipe:[{op:"path",path:"text"},{op:"regex",pattern:lg,extract:"$1"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"page"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"notion-pages",itemTag:"page",bodyTag:"content",fieldAttrs:!1,maxCharsPerReference:3e4,maxTotalChars:6e4}}});var Pl,Al=b(()=>{"use strict";Pl={id:"slack",label:"Slack",icon:"comment-discussion",match:{claude:{prefixes:["mcp__claude_ai_Slack__"],acceptSuffix:"slack_read_thread"},codex:{namespaceSuffix:"slack",functionCallNames:["_slack_read_thread"],invocationTools:["slack.slack_read_thread"]}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"template",template:"{c}-{t}",from:{c:[{op:"path",path:"channelId"}],t:[{op:"path",path:"parentTs"}]}}],require:"^[A-Z0-9]+-\\d{7,}\\.\\d+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://"},description:{pipe:[{op:"path",path:"text"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"comment-discussion",pipe:[{op:"const",value:"thread"}]},{key:"replies",label:"Replies",icon:"reply",pipe:[{op:"path",path:"replyCount"}]},{key:"channel",label:"Channel",icon:"symbol-namespace",pipe:[{op:"path",path:"channelId"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"slack-threads",itemTag:"thread",bodyTag:"messages",fieldAttrs:!0,maxCharsPerReference:8e3,maxTotalChars:4e4}}});var Il,Dl=b(()=>{"use strict";Il={id:"zoom-doc",label:"Zoom Doc",icon:"file",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"hub_get_file_content"}},wrapperKeys:[],reference:{nativeId:{pipe:[{op:"path",path:"fileId"}],require:"^[\\w.-]+$"},title:{pipe:[{op:"path",path:"title"}],require:".+"},url:{pipe:[{op:"path",path:"url"}],require:"^https://docs\\.zoom\\.us/doc/"},description:{pipe:[{op:"path",path:"content"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"doc"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-docs",itemTag:"doc",bodyTag:"content",maxCharsPerReference:3e4,maxTotalChars:6e4}}});var Nl,Ol=b(()=>{"use strict";Nl={id:"zoom-meeting",label:"Zoom Meeting",icon:"device-camera-video",match:{claude:{prefixes:["mcp__claude_ai_Zoom_for_Claude__"],acceptSuffix:"get_meeting_assets"},codex:{namespaceSuffix:"zoom",functionCallNames:["_get_meeting_assets"],invocationTools:["zoom.get_meeting_assets"]}},wrapperKeys:[],reference:{guard:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],require:".+"},nativeId:{pipe:[{op:"path",path:"meeting_uuid"}],require:"^[\\w-]+$"},title:{pipe:[{op:"path",path:"topic"}],require:".+"},url:{pipe:[{op:"coalesce",of:[[{op:"path",path:"meeting_summary.summary_doc_url"}],[{op:"path",path:"deep_url"}]]}],require:"^https://"},description:{pipe:[{op:"path",path:"meeting_summary.summary_markdown"}],optional:!0}},fields:[{key:"entity-type",label:"Type",icon:"symbol-class",pipe:[{op:"const",value:"meeting"}]},{key:"started",label:"Started",icon:"calendar",pipe:[{op:"path",path:"start_time"}]},{key:"meeting-number",label:"Meeting #",icon:"symbol-number",pipe:[{op:"path",path:"meeting_number"}]}],storage:{nativeIdPathSafe:!0},render:{wrapperTag:"zoom-meetings",itemTag:"meeting",bodyTag:"summary",maxCharsPerReference:2e4,maxTotalChars:4e4}}});var Ll,Ml=b(()=>{"use strict";pl();fl();gl();wl();El();kl();Rl();vl();xl();Al();Dl();Ol();Ll=[Tl,ml,Sl,yl,Cl,Pl,Nl,Il,dl,_l,hl,bl]});function ug(t,e,r){if(!Q(t))return"op must be an object";if(r.opCount++,r.opCount>$l)return`pipe exceeds ${$l} ops`;let n=t.op;if(typeof n!="string"||!cg.has(n))return`unknown op: ${String(n)}`;switch(n){case"path":return typeof t.path=="string"?void 0:"path op requires a string 'path'";case"const":return typeof t.value=="string"?void 0:"const op requires a string 'value'";case"join":return typeof t.sep=="string"?void 0:"join op requires a string 'sep'";case"regex":return typeof t.pattern!="string"?"regex op requires a string 'pattern'":t.extract!==void 0&&typeof t.extract!="string"?"regex.extract must be a string":t.lastMatch!==void 0&&typeof t.lastMatch!="boolean"?"regex.lastMatch must be a boolean":void 0;case"transform":return typeof t.fn!="string"?"transform op requires a string 'fn'":cl.has(t.fn)?void 0:`unknown transform: ${t.fn}`;case"coalesce":{if(e+1>mn)return`nesting depth exceeds ${mn}`;if(!Array.isArray(t.of))return"coalesce op requires an array 'of'";for(let o of t.of){let s=as(o,e+1,r);if(s!==void 0)return s}return}case"template":{if(e+1>mn)return`nesting depth exceeds ${mn}`;if(typeof t.template!="string")return"template op requires a string 'template'";if(!Q(t.from))return"template op requires an object 'from'";for(let o of Object.values(t.from)){let s=as(o,e+1,r);if(s!==void 0)return s}return}}}function as(t,e,r){if(!Array.isArray(t))return"pipe must be an array";for(let n of t){let o=ug(n,e,r);if(o!==void 0)return o}}function cr(t,e){let r=as(t,0,{opCount:0});return r===void 0?void 0:`${e}: ${r}`}function dg(t){if(!Q(t))return{ok:!1,error:"definition must be an object"};if(typeof t.id!="string"||t.id.length===0)return{ok:!1,error:"id must be a non-empty string"};if(typeof t.label!="string"||t.label.length===0)return{ok:!1,error:"label must be a non-empty string"};if(typeof t.icon!="string"||t.icon.length===0)return{ok:!1,error:"icon must be a non-empty string"};if(!Q(t.match))return{ok:!1,error:"match must be an object"};if(!Array.isArray(t.wrapperKeys))return{ok:!1,error:"wrapperKeys must be an array"};if(!Q(t.reference))return{ok:!1,error:"reference must be an object"};if(!Array.isArray(t.fields))return{ok:!1,error:"fields must be an array"};if(!Q(t.storage))return{ok:!1,error:"storage must be an object"};if(!Q(t.render))return{ok:!1,error:"render must be an object"};let e=t.reference;for(let r of["nativeId","title"]){let n=e[r];if(!Q(n))return{ok:!1,error:`reference.${r} is required`};let o=cr(n.pipe,`reference.${r}.pipe`);if(o!==void 0)return{ok:!1,error:o}}if(e.url!==void 0){if(!Q(e.url))return{ok:!1,error:"reference.url must be an object"};let r=cr(e.url.pipe,"reference.url.pipe");if(r!==void 0)return{ok:!1,error:r}}if(e.description!==void 0){if(!Q(e.description))return{ok:!1,error:"reference.description must be an object"};let r=cr(e.description.pipe,"reference.description.pipe");if(r!==void 0)return{ok:!1,error:r}}if(e.guard!==void 0){if(!Q(e.guard))return{ok:!1,error:"reference.guard must be an object"};let r=cr(e.guard.pipe,"reference.guard.pipe");if(r!==void 0)return{ok:!1,error:r}}for(let[r,n]of t.fields.entries()){if(!Q(n))return{ok:!1,error:`fields[${r}] must be an object`};if(typeof n.key!="string"||!jl.test(n.key))return{ok:!1,error:`fields[${r}].key must match ${jl}`};if(typeof n.label!="string"||n.label.length===0)return{ok:!1,error:`fields[${r}].label must be a non-empty string`};let o=cr(n.pipe,`fields[${r}].pipe`);if(o!==void 0)return{ok:!1,error:o}}return{ok:!0,def:t}}function hn(){if(fn!==void 0)return fn;let t=[];for(let e of Ll){let r=dg(e);if(!r.ok)throw new Error(`invalid built-in source definition '${e.id}': ${r.error}`);t.push(r.def)}return fn=new ls(t),fn}var $l,mn,cg,jl,ls,fn,gn=b(()=>{"use strict";is();ul();Ml();$l=64,mn=8,cg=new Set(["path","coalesce","regex","template","join","const","transform"]);jl=/^[\w-]+$/;ls=class{constructor(e){this.definitions=e}all(){return this.definitions}byId(e){return this.definitions.find(r=>r.id===e)}match(e,r,n,o){return e==="claude"?this.definitions.find(s=>{let i=s.match.claude;return!(i===void 0||!i.prefixes.some(a=>r.startsWith(a))||i.exact!==void 0&&!i.exact.includes(r)||i.acceptSuffix!==void 0&&!r.endsWith(i.acceptSuffix)||i.denySuffixes?.some(a=>r.endsWith(a)))}):n!==void 0?this.definitions.find(s=>{let i=s.match.codex;return i!==void 0&&i.namespaceSuffix===n&&i.functionCallNames.includes(r)}):this.definitions.find(s=>{let i=s.match.codex;return i===void 0||!i.invocationTools.includes(r)?!1:i.invocationServer===void 0||i.invocationServer===o})}}});function cs(t){return hg(t)}function pg(t){return t.replace(/^\n+/,"").replace(/\n+$/,"")}function mg(t){let e=t.indexOf(fg);return e===-1?t:t.slice(0,e)}function hg(t){if(typeof t!="string")return null;let e=t.split(`
`);if(e[0]?.trim()!=="---")return null;let r=-1;for(let I=1;I<e.length;I++)if(e[I].trim()==="---"){r=I;break}if(r===-1)return null;let n=e.slice(1,r),o=pg(mg(e.slice(r+1).join(`
`))),s={},i=[],a=!1;for(let I of n){if(a){let H=/^\s+- (.+)$/.exec(I);if(H){try{let ke=JSON.parse(H[1]);gg(ke)&&i.push(ke)}catch{}continue}a=!1}if(I.trim()==="fields:"){a=!0;continue}let N=/^([a-zA-Z]+):\s*(.+)$/.exec(I);N&&(s[N[1]]=N[2])}let l=I=>{let N=s[I];if(N!==void 0)try{let H=JSON.parse(N);return typeof H=="string"?H:void 0}catch{return}},c=l("source"),d=l("nativeId");if(c===void 0||d===void 0||!yg(c))return null;let u=c,m=d,f=l("title"),w=l("url"),C=l("referencedAt"),_=l("sourceToolName");return!f||C===void 0||!_?null:{mapKey:`${u}:${m}`,source:u,nativeId:m,title:f,referencedAt:C,toolName:_,...w!==void 0?{url:w}:{},...i.length>0?{fields:i}:{},...o.length>0?{description:o}:{}}}function gg(t){if(typeof t!="object"||t===null)return!1;let e=t;return!(typeof e.key!="string"||typeof e.label!="string"||typeof e.value!="string"||!/^[\w-]+$/.test(e.key)||e.icon!==void 0&&typeof e.icon!="string")}function yg(t){return t.length>0&&/^[\w-]+$/.test(t)}var AR,fg,ur=b(()=>{"use strict";h();gn();AR=p("ReferenceStore");fg="<!-- jolli:auto-note -->"});function wg(t){return`${t.source}:${t.skill}`}function Sg(t,e){if(t===void 0)return e;let r=t.usage===void 0||e.usage===void 0?t.usage??e.usage:{input:t.usage.input+e.usage.input,output:t.usage.output+e.usage.output,cached:t.usage.cached+e.usage.cached,confidence:t.usage.confidence==="attributed"&&e.usage.confidence==="attributed"?"attributed":"estimated"},n=[t,e].filter(l=>l.usage!==void 0),o=bg(n),{usageBySession:s,supersededDocIds:i,...a}=t;return{...a,invocationCount:t.invocationCount+e.invocationCount,...r!==void 0?{usage:r}:{},...o!==void 0?{usageBySession:o}:{},...t.detection==="heuristic"||e.detection==="heuristic"?{detection:"heuristic"}:{},...t.jolliDocId===void 0&&e.jolliDocId!==void 0?{jolliDocId:e.jolliDocId,jolliDocUrl:e.jolliDocUrl}:{},...Eg(t,e)}}function Eg(t,e){let r=new Set([...t.supersededDocIds??[],...e.supersededDocIds??[]]);t.jolliDocId!==void 0&&e.jolliDocId!==void 0&&r.add(e.jolliDocId);let n=t.jolliDocId??e.jolliDocId;return n!==void 0&&r.delete(n),r.size>0?{supersededDocIds:[...r]}:{}}function Hl(t){if(t.supersededDocIds===void 0)return t;let{supersededDocIds:e,...r}=t;return r}function bg(t){if(t.length===0)return;let e=[];for(let n of t){if(n.usageBySession===void 0)return;e.push(n.usageBySession)}let r={};for(let n of e)for(let[o,s]of Object.entries(n)){let i=r[o];r[o]=i===void 0?s:{input:i.input+s.input,cached:i.cached+s.cached,output:i.output+s.output,confidence:i.confidence==="attributed"&&s.confidence==="attributed"?"attributed":"estimated"}}return r}function Fl(t){let e=new Map;for(let n of t)e.has(n.archivedKey)||e.set(n.archivedKey,n);let r=new Map;for(let n of e.values()){let o=wg(n);r.set(o,Sg(r.get(o),n))}return[...r.values()]}var us=b(()=>{"use strict"});var OR,Ul=b(()=>{"use strict";h();OR=p("SkillStore")});async function yn(t){let e=F(t);return await(0,ge.mkdir)(e,{recursive:!0}),e}async function Gl(t,e){let r=await yn(e);await za(e,async()=>{let o={...(await xg(r)).sessions,[t.sessionId]:t},{activeSessions:s,stalePaths:i}=Ag(o),a={version:1,sessions:s};await P((0,Ye.join)(r,Wl),JSON.stringify(a,null,"	")),i.length>0&&await Ig(r,i)})}async function Rg(t,e,r){await P((0,Ye.join)(e,r),JSON.stringify(t,null,"	"))}function Z(){return(0,Ye.join)((0,Bl.homedir)(),".jolli","jollimemory")}async function xt(t){let e=(0,Ye.join)(t,ql);try{let r=await(0,ge.readFile)(e,"utf-8"),n=JSON.parse(r);return _g(n)}catch{return dr.debug("No config file found in %s, using defaults",t),{}}}function _g(t){if(t.syncEnabled===void 0)return t;let{syncEnabled:e,...r}=t;return r.autoSyncEnabled===void 0?{...r,autoSyncEnabled:e}:r}function vg(t,e){return!("localAgentTool"in e)||"localAgentPath"in e||(t.localAgentTool??"claude-code")===(e.localAgentTool??"claude-code")||t.localAgentPath===void 0?e:(dr.info("Clearing localAgentPath (was set for %s, switching to %s)",t.localAgentTool??"claude-code",e.localAgentTool),{...e,localAgentPath:void 0})}async function wn(t,e){await zo(e,async()=>{await Kl(t,e)}),dr.info("Config saved to %s",e)}async function Sn(t){return Cg(t,Z())}async function Cg(t,e){return zo(e,async()=>{let{update:r,result:n}=t(await xt(e));return r!==null&&(await Kl(r,e),dr.info("Config saved to %s",e)),n})}async function Kl(t,e){let r=await xt(e),n={...r,...vg(r,t)};await P((0,Ye.join)(e,ql),JSON.stringify(n,null,"	"))}async function ye(){return xt(Z())}async function it(t){return wn(t,Z())}async function xg(t){let e=(0,Ye.join)(t,Wl);try{let r=await(0,ge.readFile)(e,"utf-8");return JSON.parse(r)}catch{return{version:1,sessions:{}}}}async function Pg(t,e=Jl){let r=(0,Ye.join)(t,e);try{let n=await(0,ge.readFile)(r,"utf-8");return JSON.parse(n)}catch{return{version:1,cursors:{}}}}function Ag(t){let e=Date.now(),r={},n=[];for(let[o,s]of Object.entries(t)){let i=e-new Date(s.updatedAt).getTime();i>Tg?(dr.info("Pruning stale session %s (age: %dh)",o,Math.round(i/36e5)),n.push(s.transcriptPath)):r[o]=s}return{activeSessions:r,stalePaths:n}}async function Ig(t,e){let r=new Set(e);for(let n of[Jl,kg]){let s={...(await Pg(t,n)).cursors},i=0;for(let a of Object.keys(s))r.has(a)&&(delete s[a],i++);i>0&&await Rg({version:1,cursors:s},t,n)}}function ds(t,e){let r={...t},n=!1;for(let o of e)o in r&&(delete r[o],n=!0);return{value:r,changed:n}}function Vl(t){let e=!1,r={};for(let[i,a]of Object.entries(t.plans??{})){if(a.ignored===!0){e=!0;continue}let l=ds(a,Dg);l.changed&&(e=!0),r[i]=l.value}let n;if(t.notes!==void 0){n={};for(let[i,a]of Object.entries(t.notes)){if(a.ignored===!0){e=!0;continue}let l=ds(a,Ng);l.changed&&(e=!0),n[i]=l.value}}let o;if(t.references!==void 0){o={};for(let[i,a]of Object.entries(t.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){e=!0;continue}let c=ds(a,Og);c.changed&&(e=!0),o[i]=c.value}}return{registry:{version:1,plans:r,...n!==void 0?{notes:n}:{},...o!==void 0?{references:o}:{},...t.skills!==void 0?{skills:t.skills}:{}},changed:e}}var ps,ge,Bl,Ye,dr,Wl,Jl,kg,ql,Tg,YR,zR,QR,Dg,Ng,Og,le=b(()=>{"use strict";ps=require("node:crypto"),ge=require("node:fs/promises"),Bl=require("node:os"),Ye=require("node:path");h();ss();ne();Ce();ur();us();Ul();dr=p("SessionTracker"),Wl="sessions.json",Jl="cursors.json",kg="discovery-cursors.json",ql="config.json",Tg=2880*60*1e3;YR=2880*60*1e3,zR=10080*60*1e3,QR=(0,ps.randomBytes)(4).toString("hex");Dg=["ignored","branch","editCount"],Ng=["ignored","branch"],Og=["ignored","branch","commitHash","contentHashAtCommit"]});function je(t=process.versions.node){let e=/^(\d+)\.(\d+)/.exec(t);if(!e)return!1;let r=Number.parseInt(e[1],10),n=Number.parseInt(e[2],10);return r>$e.major?!0:r<$e.major?!1:n>=$e.minor}function ut(t){let e=t,r=e?.message??String(t),n=e?.code;return n==="ENOENT"?null:n==="EACCES"||n==="EPERM"?{kind:"permission",message:r}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(r)?{kind:"corrupt",message:r}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(r)?{kind:"locked",message:r}:/no such table|no such column/i.test(r)?{kind:"schema",message:r}:/SQLITE_CANTOPEN|unable to open/i.test(r)?{kind:"permission",message:r}:{kind:"unknown",message:r}}var $e,Pe=b(()=>{"use strict";$e={major:22,minor:13}});function It(t){let e=wr(t.replace(/\\/g,"/"));return process.platform==="win32"||process.platform==="darwin"?e.toLowerCase():e}function wr(t){let e=t.length;for(;e>0&&t[e-1]==="/";)e--;return e===t.length?t:t.slice(0,e)}function Rs(t,e){let r=It(t),n=It(e);return r===n||r.startsWith(`${n}/`)}function ze(t){return t.replace(/\\/g,"/")}var Ae=b(()=>{"use strict"});function qc(t){if((0,Jc.platform)()==="win32")try{xa("attrib",["+h",t],{timeout:2e3})}catch{}}var Jc,Gc=b(()=>{"use strict";Jc=require("node:os");Re()});var Kc,$,oe,Nt,V,On=b(()=>{"use strict";Kc=require("node:crypto"),$=require("node:fs"),oe=require("node:path");h();Gc();Ae();Nt=p("MetadataManager"),V=class t{constructor(e){this.jolliDir=e;this.manifestPath=(0,oe.join)(e,"manifest.json"),this.branchesPath=(0,oe.join)(e,"branches.json"),this.configPath=(0,oe.join)(e,"config.json"),this.migrationPath=(0,oe.join)(e,"migration.json"),this.indexPath=(0,oe.join)(e,"index.json")}ensure(){(0,$.mkdirSync)(this.jolliDir,{recursive:!0})!==void 0&&qc(this.jolliDir),(0,$.existsSync)(this.manifestPath)||this.atomicWrite(this.manifestPath,JSON.stringify({version:1,files:[]},null,"	")),(0,$.existsSync)(this.branchesPath)||this.atomicWrite(this.branchesPath,JSON.stringify({version:1,mappings:[]},null,"	")),(0,$.existsSync)(this.configPath)||this.atomicWrite(this.configPath,JSON.stringify({version:1,sortOrder:"date"},null,"	"))}readManifest(){return this.readJson(this.manifestPath)??{version:1,files:[]}}updateManifest(e){let r=this.readManifest(),n=r.files.filter(o=>o.fileId!==e.fileId);n.push(e),this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),Nt.info("Manifest updated: %s (%s)",e.path,e.type)}removeFromManifest(e){let r=this.readManifest(),n=r.files.filter(o=>o.fileId!==e);return n.length===r.files.length?!1:(this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),!0)}unregisterFilesByType(e){let r=this.readManifest(),n=r.files.filter(s=>s.type!==e),o=r.files.length-n.length;return o===0?0:(this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:n},null,"	")),Nt.info("Manifest unregistered %d entries of type=%s",o,e),o)}replaceFiles(e){let r=this.readManifest();this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:[...e]},null,"	"))}findByPath(e){return this.readManifest().files.find(r=>r.path===e)}findById(e){return this.readManifest().files.find(r=>r.fileId===e)}updatePath(e,r){let n=this.readManifest();if(!n.files.find(i=>i.fileId===e))return!1;let s=n.files.map(i=>i.fileId===e?{...i,path:r}:i);return this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:s},null,"	")),!0}resolveFolderForBranch(e){let r=this.readBranches(),n=r.mappings.find(a=>a.branch===e);if(n)return n.folder;let o=t.transcodeBranchName(e),s={folder:o,branch:e,createdAt:new Date().toISOString()},i={...r,mappings:[...r.mappings,s]};return this.atomicWrite(this.branchesPath,JSON.stringify(i,null,"	")),Nt.info("Branch mapping created: %s \u2192 %s",e,o),o}removeBranchMapping(e){let r=this.readBranches(),n=r.mappings.filter(o=>o.branch!==e);return n.length===r.mappings.length?!1:(this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:n},null,"	")),Nt.info("Branch mapping removed: %s (no remaining head)",e),!0)}renameBranchFolder(e,r){let n=this.readBranches(),o=n.mappings.map(l=>l.folder===e?{...l,folder:r}:l);this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:o},null,"	"));let s=this.readManifest(),i=0,a=s.files.map(l=>l.path.startsWith(`${e}/`)?(i++,{...l,path:l.path.replace(`${e}/`,`${r}/`)}):l);return i>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...s,files:a},null,"	")),i}removeBranchFolder(e){let r=this.readBranches();this.atomicWrite(this.branchesPath,JSON.stringify({...r,mappings:r.mappings.filter(i=>i.folder!==e)},null,"	"));let n=this.readManifest(),o=n.files.filter(i=>!i.path.startsWith(`${e}/`)),s=n.files.length-o.length;return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...n,files:o},null,"	")),s}unregisterBranches(e){let r=new Set(e);if(r.size===0)return 0;let n=this.readBranches(),o=n.mappings.filter(i=>!r.has(i.branch)),s=n.mappings.length-o.length;return s===0?0:(this.atomicWrite(this.branchesPath,JSON.stringify({...n,mappings:o},null,"	")),Nt.info("Branch mappings unregistered: %d",s),s)}readBranches(){return this.readJson(this.branchesPath)??{version:1,mappings:[]}}listBranchMappings(){return this.readBranches().mappings}folderToBranch(e){try{return this.listBranchMappings().find(r=>r.folder===e)?.branch??e}catch{return e}}listIndexHeads(){let e=this.readJson(this.indexPath);return!e||!Array.isArray(e.entries)?[]:e.entries.filter(r=>typeof r?.commitHash=="string"&&typeof r.branch=="string"&&(r.parentCommitHash===null||typeof r.parentCommitHash=="string")&&r.parentCommitHash===null)}readIndex(){return this.readJson(this.indexPath)}readConfig(){return this.readJson(this.configPath)??{version:1,sortOrder:"date"}}saveConfig(e){this.atomicWrite(this.configPath,JSON.stringify(e,null,"	"))}readMigrationState(){return this.readJson(this.migrationPath)}saveMigrationState(e){this.atomicWrite(this.migrationPath,JSON.stringify(e,null,"	"))}reconcile(e){let r=this.readManifest();if(r.files.length===0||!r.files.some(a=>!(0,$.existsSync)((0,oe.join)(e,a.path))))return 0;let o=new Map;try{this.walkDir(e,e,o)}catch{}let s=0,i=[];for(let a of r.files){let l=(0,oe.join)(e,a.path);if((0,$.existsSync)(l))i.push(a);else{let c=o.get(a.fingerprint);c&&c!==a.path?(i.push({...a,path:c}),s++):(Nt.warn("Manifest entry '%s' (id=%s) not found on disk \u2014 keeping entry to avoid data loss",a.path,a.fileId),i.push(a))}}return s>0&&this.atomicWrite(this.manifestPath,JSON.stringify({...r,files:i},null,"	")),s}walkDir(e,r,n){for(let o of(0,$.readdirSync)(e,{withFileTypes:!0})){if(o.name.startsWith("."))continue;let s=(0,oe.join)(e,o.name);if(o.isDirectory())this.walkDir(s,r,n);else if(o.name.endsWith(".md"))try{let i=(0,$.readFileSync)(s,"utf-8"),a=t.sha256(i);n.set(a,ze((0,oe.relative)(r,s)))}catch{}}}static transcodeBranchName(e){let r=e.replace(/[/\\:*?~^]/g,"-");return r=r.replace(/-{3,}/g,"-"),r=r.replace(/\.\./g,"--"),r=r.replace(/^[.-]+|[.-]+$/g,""),r||"default"}static sha256(e){return(0,Kc.createHash)("sha256").update(e,"utf-8").digest("hex")}readJson(e){if(!(0,$.existsSync)(e))return null;try{return JSON.parse((0,$.readFileSync)(e,"utf-8"))}catch{return null}}atomicWrite(e,r){let n=(0,oe.dirname)(e);(0,$.mkdirSync)(n,{recursive:!0});let o=`${e}.tmp`;(0,$.writeFileSync)(o,r,"utf-8"),(0,$.renameSync)(o,e)}}});function ky(t){if(process.env.VITEST)return null;try{return Te("ssh",["-G",t],{encoding:"utf-8",timeout:Ey,stdio:["ignore","pipe","pipe"]})}catch(e){return Sy.debug("ssh -G %s failed: %s",t,e instanceof Error?e.message:String(e)),null}}function Ty(t){for(let e of t.split(/\r?\n/)){let r=e.match(/^hostname\s+(\S+)/i);if(r?.[1])return r[1]}return null}function Ln(t){if(!t)return t;let e=Vc.get(t);if(e!==void 0)return e;let r=t,n=by(t);if(n){let o=Ty(n);o&&(r=o)}return Vc.set(t,r),r}var Sy,Ey,Vc,by,Xc=b(()=>{"use strict";h();Re();Sy=p("SshAliasResolver"),Ey=5e3,Vc=new Map,by=ky});function Yc(){return(0,B.join)((0,eu.homedir)(),"Documents","jolli")}function js(t){return t?_y(t)?t:(Ry.warn("Invalid customPath '%s': must be absolute and not contain '..'. Falling back to default.",t),Yc()):Yc()}function _y(t){return t?(0,B.isAbsolute)(t)&&!t.includes(".."):!0}function tu(t,e,r){let n=js(r),o=(0,B.join)(n,t);if(!(0,Qe.existsSync)(o)){let i=cu(n,t,e).match;return i||($s(o,t,e),o)}let s=du(o);return s&&iu(s,e,t)?o:s&&uu(o,s)?($s(o,t,e),o):Py(n,t,e)}function ru(t){let e=Fs(t,["config","--get","remote.origin.url"]);if(e){let n=e.match(/\/([^/]+?)(?:\.git)?$/);if(n?.[1])return n[1]}let r=nu(t);return r?(0,B.basename)(r):(0,B.basename)(t)||"unknown"}function nu(t){let e=Fs(t,["rev-parse","--git-common-dir"]);if(!e)return null;let r=(0,B.isAbsolute)(e)?e:(0,B.join)(t,e),n=(0,B.dirname)(r);return n&&n!=="/"&&n!=="."?n:null}function vy(t,e){if(!(0,B.basename)(t))return{claimable:!1,blocker:"not-a-project"};let r=nu(t);if(!r)return{claimable:!1,blocker:"not-a-project"};let n;try{n=js(e)}catch{return{claimable:!1,blocker:"unresolvable-folder"}}return Rs(n,r)?{claimable:!1,blocker:"folder-inside-repo"}:{claimable:!0}}function Hs(t,e){return vy(t,e).claimable}function ou(){let t=Number(process.env.JOLLI_GIT_CMD_TIMEOUT_MS);return Number.isFinite(t)&&t>0?t:3e4}function Cy(){return Math.min(ou(),5e3)}function xy(t){return typeof t=="object"&&t!==null&&t.code==="ETIMEDOUT"}function zc(t,e,r=ou()){return Te("git",e,{cwd:t,encoding:"utf-8",timeout:r,stdio:["ignore","pipe","pipe"]}).trim()||null}function Fs(t,e){try{return zc(t,e)}catch(r){if(!xy(r))return null;try{return zc(t,e,Cy())}catch{return null}}}function su(t){return Fs(t,["remote","get-url","origin"])}function iu(t,e,r){return t.remoteUrl&&e?Qc(t.remoteUrl)===Qc(e):!t.remoteUrl&&!e?t.repoName==null||t.repoName===r:!1}function Qc(t){return lu(t).replace(/\/+$/,"").replace(/\.git$/,"").toLowerCase()}function lu(t){let e=t.match(/^(?:git\+)?ssh:\/\/(?:[^@/]+@)?([^/:]+)(?::(\d+))?\/(.+)$/i);if(e)return`https://${Ln(e[1])}${Zc(e[2],"22")}/${e[3]}`;let r=t.match(/^git:\/\/([^/:]+)(?::(\d+))?\/(.+)$/i);if(r)return`https://${Ln(r[1])}${Zc(r[2],"9418")}/${r[3]}`;let n=t.match(/^[^@/:]+@([^/:]+):(.+)$/);return n?`https://${Ln(n[1])}/${n[2]}`:t}function Zc(t,e){return t===void 0||t===e?"":`:${t}`}function cu(t,e,r){let n=null,o=null,s=null;for(let i=2;i<=99;i++){let a=(0,B.join)(t,`${e}-${i}`);if(!(0,Qe.existsSync)(a)){s===null&&(s=a);continue}let l=du(a);if(l&&iu(l,r,e)){n=a;break}l&&o===null&&uu(a,l)&&(o=a)}return{match:n,stub:o,firstUnused:s}}function Py(t,e,r){let n=cu(t,e,r);if(n.match)return n.match;let o=n.stub??n.firstUnused??(0,B.join)(t,`${e}-${Date.now()}`);return $s(o,e,r),o}function $s(t,e,r){if(he())return;let n=new V((0,B.join)(t,".jolli"));n.ensure();let o=n.readConfig();n.saveConfig({...o,remoteUrl:r??void 0,repoName:e})}function uu(t,e){return e.remoteUrl==null&&e.repoName==null}function du(t){let e=(0,B.join)(t,".jolli","config.json");if(!(0,Qe.existsSync)(e))return null;try{return JSON.parse((0,Qe.readFileSync)(e,"utf-8"))}catch{return null}}var Qe,eu,B,Ry,au,Tr=b(()=>{"use strict";Qe=require("node:fs"),eu=require("node:os"),B=require("node:path");h();Re();On();Ae();Xc();Ry=p("KBPathResolver");au=new Set(["github.com","gitlab.com","bitbucket.org"])});async function qs(t){let e=await M(["config","--get","remote.origin.url"],t),r=e.exitCode===0?e.stdout.trim():"";return r.length===0?Rr(t):Ru(r,t)}function Ru(t,e){let r=t.trim();if(r.length===0)return Rr(e);let n=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(r);if(n&&!r.includes("://")){let i=n[2].toLowerCase(),a=Tu(i,ku(n[3]));return`https://${i}/${a}`}let o;try{o=new URL(r)}catch{return Rr(e)}let s=o.protocol.replace(/:$/,"").toLowerCase();if(s==="ssh"||s==="git"||s==="http"||s==="https"){let i=o.hostname.toLowerCase(),a=Tu(i,ku(o.pathname.replace(/^\/+/,""))),l=My(s,o.port);return`https://${i}${l}/${a}`}return Rr(s==="file"?o.pathname:e)}function Rr(t){let e=wr(ze(t));return e.length===0?"file:///":e.startsWith("/")?`file://${e}`:`file:///${e}`}function ku(t){let e=wr(t);return e.toLowerCase().endsWith(".git")&&(e=e.slice(0,-4)),wr(e)}function Tu(t,e){return au.has(t)?e.toLowerCase():e}function My(t,e){return e.length===0?"":t==="ssh"||t==="git"?e===Ly[t]?"":`:${e}`:`:${e}`}var Ly,Hn=b(()=>{"use strict";te();Tr();Ae();Ly={ssh:"22",git:"9418"}});var vu,Cu,xu,Pu,Au,Iu,Fn=b(()=>{"use strict";vu=`
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
-- reader), which left this table written by Backfill and read by nothing \u2014 a few
-- hundred KB of JSON per repo per import, for no query. The writer is commented
-- out in lockstep (StatsWriter.recordRepoGraph, Backfill's call site); uncomment
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
`,Cu=`
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
`,xu=`
INSERT INTO context_kinds (kind) VALUES ('skill');
`,Pu=`
ALTER TABLE events_raw ADD COLUMN failed_kind TEXT;
`,Au=`
ALTER TABLE session_tool_use ADD COLUMN last_call_at_ms INTEGER;
`,Iu=`
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
`});function Ot(){return(0,Un.join)(Z(),"jollimemory.db")}function Bn(t=process.versions.node){let e=/^(\d+)\.(\d+)/.exec(t);if(!e)return!1;let r=Number.parseInt(e[1],10),n=Number.parseInt(e[2],10);return r>_r.major?!0:r<_r.major?!1:n>=_r.minor}function Vs(t){try{let e=t.prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'").get(),r=Number.parseInt(e?.value??"",10);return Number.isFinite(r)?r:0}catch{return 0}}function By(t){let e=Vs(t);if(!(e>=Fe)){t.exec("PRAGMA foreign_keys = OFF");try{for(let r=e;r<Fe;r++){t.exec("BEGIN IMMEDIATE");try{if(Vs(t)>r){t.exec("COMMIT");continue}t.exec(Uy[r]),t.exec(`INSERT INTO schema_meta (key, value) VALUES ('schema_version', '${r+1}')
					 ON CONFLICT(key) DO UPDATE SET value = excluded.value`),t.exec("COMMIT")}catch(n){try{t.exec("ROLLBACK")}catch{}throw n}}}finally{t.exec("PRAGMA foreign_keys = ON")}Ys.info("dashboard schema migrated %d \u2192 %d",e,Fe)}}function Wy(t){let e=(0,Un.dirname)(t);try{(0,Ue.mkdirSync)(e,{recursive:!0,mode:448}),((0,Ue.statSync)(e).mode&511)!==448&&(0,Ue.chmodSync)(e,448)}catch(r){Ys.warn("could not restrict %s to owner-only: %s",e,x(r))}}function Jy(t){for(let e of[t,`${t}-wal`,`${t}-shm`])try{((0,Ue.statSync)(e).mode&511)!==384&&(0,Ue.chmodSync)(e,384)}catch(r){kt(r)||Ys.warn("could not restrict %s to 0600: %s",e,x(r))}}async function Du(t,e){if(!Bn())throw new Ks(process.versions.node);let r=e.dbPath??Ot(),n=e.maxAttempts??4,o=e.baseDelayMs??50;t||Wy(r);let{DatabaseSync:s}=await import("node:sqlite");for(let i=1;;i++){let a;try{a=new s(r,{readOnly:t});for(let l of t?Hy:jy)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${e.busyTimeoutMs??Fy}`),t||Jy(r),a}catch(l){try{a?.close()}catch{}if(ut(l)?.kind!=="locked"||i>=n)throw l;await new Promise(c=>setTimeout(c,o*2**(i-1)))}}}async function Nu(t,e={}){let r=await Du(!1,e);try{let n=Vs(r);if(n>Fe)throw new Xs(n,e.dbPath??Ot());return By(r),await t(r)}finally{r.close()}}async function zs(t,e={}){let r=await Du(!0,e);try{return await t(r)}finally{r.close()}}function Qs(t,e){t.exec("BEGIN IMMEDIATE");try{let r=e();return t.exec("COMMIT"),r}catch(r){try{t.exec("ROLLBACK")}catch{}throw r}}var Ue,Un,Ys,Fe,_r,Ks,jy,Hy,Fy,Uy,Xs,Lt=b(()=>{"use strict";Ue=require("node:fs"),Un=require("node:path");le();Pe();h();Fn();Ys=p("DashboardDb"),Fe=5,_r={major:22,minor:13};Ks=class extends Error{constructor(e){super(`The Jolli dashboard needs Node >= ${_r.major}.${_r.minor} for built-in SQLite (running ${e}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},jy=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],Hy=["PRAGMA foreign_keys = ON"],Fy=2e3,Uy=[vu+`
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
`+Iu,Cu,xu,Pu,Au];Xs=class extends Error{constructor(e,r){super(`${r} uses dashboard schema v${e}, newer than this build's v${Fe}. Upgrade Jolli, or delete that file to rebuild the dashboard from scratch.`),this.name="DashboardSchemaAheadError"}}});function Zs(t){let e=s=>{try{return(0,vr.statSync)(`${t}${s}`),!0}catch{return!1}},r=e(""),n=e("-wal"),o=e("-shm");return r?n&&o?"healthy-active":n?"healthy-recoverable":"healthy-clean":n||o?"alarm-sidecars-only":"absent"}var vr,Jx,ei=b(()=>{"use strict";vr=require("node:fs");h();Jx=p("DbDetection")});async function Gy(t){try{let r=await qs(t);if(r&&!r.startsWith("file:"))return{identity:r,remoteUrl:r}}catch(r){qy.debug("no canonical remote for %s (%s) \u2014 using path identity",t,x(r))}return{identity:`local:${(0,Ou.createHash)("sha256").update(ze(t)).digest("hex").slice(0,32)}`}}async function pt(t){return Gy(await Jo(t))}var Ou,qy,Mt=b(()=>{"use strict";Ou=require("node:crypto");rs();te();Hn();Ce();Ae();le();h();qy=p("RepoRegistry")});var Mu={};Sa(Mu,{hasCutoverRow:()=>Yy,resetCutoverRouterCaches:()=>Vy,resolveCutoverRoute:()=>Cr});function Vy(){ti.clear()}async function Xy(t){let e=ti.get(t);if(e!==void 0)return e;let{identity:r}=await pt(t);return ti.set(t,r),r}async function Lu(t,e){if(!Bn())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let r=Zs(e);if(r==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(r==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:n}=await import("node:sqlite"),o=new n(e,{readOnly:!0});try{let s=o.prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'").get();if(s&&Number(s.value)>Fe)return{kind:"unavailable",reason:`database schema v${s.value} is newer than this build's v${Fe} \u2014 upgrade this surface`};let i=await Xy(t),a=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(i);if(!a)return{kind:"no-row"};let l=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(a.id);return l?{kind:"row",record:JSON.parse(l.value)}:{kind:"no-row"}}finally{o.close()}}catch(n){return{kind:"unavailable",reason:x(n)}}}async function Yy(t,e={}){return(await Lu(t,e.dbPath??Ot())).kind==="row"}async function Cr(t,e={}){let r=await lr(t).catch(()=>null),n=await Lu(t,e.dbPath??Ot());return n.kind==="row"?{state:"cutover",record:n.record}:r!==null?n.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:n.reason}:n.kind==="unavailable"?(Ky.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",n.reason),{state:"uncutover",warning:n.reason}):{state:"uncutover"}}var Ky,ti,Wn=b(()=>{"use strict";Xe();h();Lt();ei();Mt();Ky=p("CutoverRouter"),ti=new Map});var Ft=k((cD,Gd)=>{"use strict";var tS="2.0.0",rS=Number.MAX_SAFE_INTEGER||9007199254740991,nS=16,oS=250,sS=["major","premajor","minor","preminor","patch","prepatch","prerelease"];Gd.exports={MAX_LENGTH:256,MAX_SAFE_COMPONENT_LENGTH:nS,MAX_SAFE_BUILD_LENGTH:oS,MAX_SAFE_INTEGER:rS,RELEASE_TYPES:sS,SEMVER_SPEC_VERSION:tS,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2}});var Mr=k((uD,Kd)=>{"use strict";var iS=typeof process=="object"&&process.env&&process.env.NODE_DEBUG&&/\bsemver\b/i.test(process.env.NODE_DEBUG)?(...t)=>console.error("SEMVER",...t):()=>{};Kd.exports=iS});var Ut=k((Ie,Vd)=>{"use strict";var{MAX_SAFE_COMPONENT_LENGTH:wi,MAX_SAFE_BUILD_LENGTH:aS,MAX_LENGTH:lS}=Ft(),cS=Mr();Ie=Vd.exports={};var uS=Ie.re=[],dS=Ie.safeRe=[],g=Ie.src=[],pS=Ie.safeSrc=[],y=Ie.t={},mS=0,Si="[a-zA-Z0-9-]",fS=[["\\s",1],["\\d",lS],[Si,aS]],hS=t=>{for(let[e,r]of fS)t=t.split(`${e}*`).join(`${e}{0,${r}}`).split(`${e}+`).join(`${e}{1,${r}}`);return t},R=(t,e,r)=>{let n=hS(e),o=mS++;cS(t,o,e),y[t]=o,g[o]=e,pS[o]=n,uS[o]=new RegExp(e,r?"g":void 0),dS[o]=new RegExp(n,r?"g":void 0)};R("NUMERICIDENTIFIER","0|[1-9]\\d*");R("NUMERICIDENTIFIERLOOSE","\\d+");R("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${Si}*`);R("MAINVERSION",`(${g[y.NUMERICIDENTIFIER]})\\.(${g[y.NUMERICIDENTIFIER]})\\.(${g[y.NUMERICIDENTIFIER]})`);R("MAINVERSIONLOOSE",`(${g[y.NUMERICIDENTIFIERLOOSE]})\\.(${g[y.NUMERICIDENTIFIERLOOSE]})\\.(${g[y.NUMERICIDENTIFIERLOOSE]})`);R("PRERELEASEIDENTIFIER",`(?:${g[y.NONNUMERICIDENTIFIER]}|${g[y.NUMERICIDENTIFIER]})`);R("PRERELEASEIDENTIFIERLOOSE",`(?:${g[y.NONNUMERICIDENTIFIER]}|${g[y.NUMERICIDENTIFIERLOOSE]})`);R("PRERELEASE",`(?:-(${g[y.PRERELEASEIDENTIFIER]}(?:\\.${g[y.PRERELEASEIDENTIFIER]})*))`);R("PRERELEASELOOSE",`(?:-?(${g[y.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${g[y.PRERELEASEIDENTIFIERLOOSE]})*))`);R("BUILDIDENTIFIER",`${Si}+`);R("BUILD",`(?:\\+(${g[y.BUILDIDENTIFIER]}(?:\\.${g[y.BUILDIDENTIFIER]})*))`);R("FULLPLAIN",`v?${g[y.MAINVERSION]}${g[y.PRERELEASE]}?${g[y.BUILD]}?`);R("FULL",`^${g[y.FULLPLAIN]}$`);R("LOOSEPLAIN",`[v=\\s]*${g[y.MAINVERSIONLOOSE]}${g[y.PRERELEASELOOSE]}?${g[y.BUILD]}?`);R("LOOSE",`^${g[y.LOOSEPLAIN]}$`);R("GTLT","((?:<|>)?=?)");R("XRANGEIDENTIFIERLOOSE",`${g[y.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);R("XRANGEIDENTIFIER",`${g[y.NUMERICIDENTIFIER]}|x|X|\\*`);R("XRANGEPLAIN",`[v=\\s]*(${g[y.XRANGEIDENTIFIER]})(?:\\.(${g[y.XRANGEIDENTIFIER]})(?:\\.(${g[y.XRANGEIDENTIFIER]})(?:${g[y.PRERELEASE]})?${g[y.BUILD]}?)?)?`);R("XRANGEPLAINLOOSE",`[v=\\s]*(${g[y.XRANGEIDENTIFIERLOOSE]})(?:\\.(${g[y.XRANGEIDENTIFIERLOOSE]})(?:\\.(${g[y.XRANGEIDENTIFIERLOOSE]})(?:${g[y.PRERELEASELOOSE]})?${g[y.BUILD]}?)?)?`);R("XRANGE",`^${g[y.GTLT]}\\s*${g[y.XRANGEPLAIN]}$`);R("XRANGELOOSE",`^${g[y.GTLT]}\\s*${g[y.XRANGEPLAINLOOSE]}$`);R("COERCEPLAIN",`(^|[^\\d])(\\d{1,${wi}})(?:\\.(\\d{1,${wi}}))?(?:\\.(\\d{1,${wi}}))?`);R("COERCE",`${g[y.COERCEPLAIN]}(?:$|[^\\d])`);R("COERCEFULL",g[y.COERCEPLAIN]+`(?:${g[y.PRERELEASE]})?(?:${g[y.BUILD]})?(?:$|[^\\d])`);R("COERCERTL",g[y.COERCE],!0);R("COERCERTLFULL",g[y.COERCEFULL],!0);R("LONETILDE","(?:~>?)");R("TILDETRIM",`(\\s*)${g[y.LONETILDE]}\\s+`,!0);Ie.tildeTrimReplace="$1~";R("TILDE",`^${g[y.LONETILDE]}${g[y.XRANGEPLAIN]}$`);R("TILDELOOSE",`^${g[y.LONETILDE]}${g[y.XRANGEPLAINLOOSE]}$`);R("LONECARET","(?:\\^)");R("CARETTRIM",`(\\s*)${g[y.LONECARET]}\\s+`,!0);Ie.caretTrimReplace="$1^";R("CARET",`^${g[y.LONECARET]}${g[y.XRANGEPLAIN]}$`);R("CARETLOOSE",`^${g[y.LONECARET]}${g[y.XRANGEPLAINLOOSE]}$`);R("COMPARATORLOOSE",`^${g[y.GTLT]}\\s*(${g[y.LOOSEPLAIN]})$|^$`);R("COMPARATOR",`^${g[y.GTLT]}\\s*(${g[y.FULLPLAIN]})$|^$`);R("COMPARATORTRIM",`(\\s*)${g[y.GTLT]}\\s*(${g[y.LOOSEPLAIN]}|${g[y.XRANGEPLAIN]})`,!0);Ie.comparatorTrimReplace="$1$2$3";R("HYPHENRANGE",`^\\s*(${g[y.XRANGEPLAIN]})\\s+-\\s+(${g[y.XRANGEPLAIN]})\\s*$`);R("HYPHENRANGELOOSE",`^\\s*(${g[y.XRANGEPLAINLOOSE]})\\s+-\\s+(${g[y.XRANGEPLAINLOOSE]})\\s*$`);R("STAR","(<|>)?=?\\s*\\*");R("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$");R("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")});var to=k((dD,Xd)=>{"use strict";var gS=Object.freeze({loose:!0}),yS=Object.freeze({}),wS=t=>t?typeof t!="object"?gS:t:yS;Xd.exports=wS});var Ei=k((pD,Qd)=>{"use strict";var Yd=/^[0-9]+$/,zd=(t,e)=>{if(typeof t=="number"&&typeof e=="number")return t===e?0:t<e?-1:1;let r=Yd.test(t),n=Yd.test(e);return r&&n&&(t=+t,e=+e),t===e?0:r&&!n?-1:n&&!r?1:t<e?-1:1},SS=(t,e)=>zd(e,t);Qd.exports={compareIdentifiers:zd,rcompareIdentifiers:SS}});var W=k((mD,ep)=>{"use strict";var ro=Mr(),{MAX_LENGTH:Zd,MAX_SAFE_INTEGER:no}=Ft(),{safeRe:oo,t:so}=Ut(),ES=to(),{compareIdentifiers:bi}=Ei(),ki=class t{constructor(e,r){if(r=ES(r),e instanceof t){if(e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease)return e;e=e.version}else if(typeof e!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);if(e.length>Zd)throw new TypeError(`version is longer than ${Zd} characters`);ro("SemVer",e,r),this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease;let n=e.trim().match(r.loose?oo[so.LOOSE]:oo[so.FULL]);if(!n)throw new TypeError(`Invalid Version: ${e}`);if(this.raw=e,this.major=+n[1],this.minor=+n[2],this.patch=+n[3],this.major>no||this.major<0)throw new TypeError("Invalid major version");if(this.minor>no||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>no||this.patch<0)throw new TypeError("Invalid patch version");n[4]?this.prerelease=n[4].split(".").map(o=>{if(/^[0-9]+$/.test(o)){let s=+o;if(s>=0&&s<no)return s}return o}):this.prerelease=[],this.build=n[5]?n[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(e){if(ro("SemVer.compare",this.version,this.options,e),!(e instanceof t)){if(typeof e=="string"&&e===this.version)return 0;e=new t(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof t||(e=new t(e,this.options)),this.major<e.major?-1:this.major>e.major?1:this.minor<e.minor?-1:this.minor>e.minor?1:this.patch<e.patch?-1:this.patch>e.patch?1:0}comparePre(e){if(e instanceof t||(e=new t(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let r=0;do{let n=this.prerelease[r],o=e.prerelease[r];if(ro("prerelease compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return bi(n,o)}while(++r)}compareBuild(e){e instanceof t||(e=new t(e,this.options));let r=0;do{let n=this.build[r],o=e.build[r];if(ro("build compare",r,n,o),n===void 0&&o===void 0)return 0;if(o===void 0)return 1;if(n===void 0)return-1;if(n===o)continue;return bi(n,o)}while(++r)}inc(e,r,n){if(e.startsWith("pre")){if(!r&&n===!1)throw new Error("invalid increment argument: identifier is empty");if(r){let o=`-${r}`.match(this.options.loose?oo[so.PRERELEASELOOSE]:oo[so.PRERELEASE]);if(!o||o[1]!==r)throw new Error(`invalid identifier: ${r}`)}}switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",r,n);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",r,n);break;case"prepatch":this.prerelease.length=0,this.inc("patch",r,n),this.inc("pre",r,n);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",r,n),this.inc("pre",r,n);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{let o=Number(n)?1:0;if(this.prerelease.length===0)this.prerelease=[o];else{let s=this.prerelease.length;for(;--s>=0;)typeof this.prerelease[s]=="number"&&(this.prerelease[s]++,s=-2);if(s===-1){if(r===this.prerelease.join(".")&&n===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(o)}}if(r){let s=[r,o];n===!1&&(s=[r]),bi(this.prerelease[0],r)===0?isNaN(this.prerelease[1])&&(this.prerelease=s):this.prerelease=s}break}default:throw new Error(`invalid increment argument: ${e}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}};ep.exports=ki});var tt=k((fD,rp)=>{"use strict";var tp=W(),bS=(t,e,r=!1)=>{if(t instanceof tp)return t;try{return new tp(t,e)}catch(n){if(!r)return null;throw n}};rp.exports=bS});var op=k((hD,np)=>{"use strict";var kS=tt(),TS=(t,e)=>{let r=kS(t,e);return r?r.version:null};np.exports=TS});var ip=k((gD,sp)=>{"use strict";var RS=tt(),_S=(t,e)=>{let r=RS(t.trim().replace(/^[=v]+/,""),e);return r?r.version:null};sp.exports=_S});var cp=k((yD,lp)=>{"use strict";var ap=W(),vS=(t,e,r,n,o)=>{typeof r=="string"&&(o=n,n=r,r=void 0);try{return new ap(t instanceof ap?t.version:t,r).inc(e,n,o).version}catch{return null}};lp.exports=vS});var pp=k((wD,dp)=>{"use strict";var up=tt(),CS=(t,e)=>{let r=up(t,null,!0),n=up(e,null,!0),o=r.compare(n);if(o===0)return null;let s=o>0,i=s?r:n,a=s?n:r,l=!!i.prerelease.length;if(!!a.prerelease.length&&!l){if(!a.patch&&!a.minor)return"major";if(a.compareMain(i)===0)return a.minor&&!a.patch?"minor":"patch"}let d=l?"pre":"";return r.major!==n.major?d+"major":r.minor!==n.minor?d+"minor":r.patch!==n.patch?d+"patch":"prerelease"};dp.exports=CS});var fp=k((SD,mp)=>{"use strict";var xS=W(),PS=(t,e)=>new xS(t,e).major;mp.exports=PS});var gp=k((ED,hp)=>{"use strict";var AS=W(),IS=(t,e)=>new AS(t,e).minor;hp.exports=IS});var wp=k((bD,yp)=>{"use strict";var DS=W(),NS=(t,e)=>new DS(t,e).patch;yp.exports=NS});var Ep=k((kD,Sp)=>{"use strict";var OS=tt(),LS=(t,e)=>{let r=OS(t,e);return r&&r.prerelease.length?r.prerelease:null};Sp.exports=LS});var de=k((TD,kp)=>{"use strict";var bp=W(),MS=(t,e,r)=>new bp(t,r).compare(new bp(e,r));kp.exports=MS});var Rp=k((RD,Tp)=>{"use strict";var $S=de(),jS=(t,e,r)=>$S(e,t,r);Tp.exports=jS});var vp=k((_D,_p)=>{"use strict";var HS=de(),FS=(t,e)=>HS(t,e,!0);_p.exports=FS});var io=k((vD,xp)=>{"use strict";var Cp=W(),US=(t,e,r)=>{let n=new Cp(t,r),o=new Cp(e,r);return n.compare(o)||n.compareBuild(o)};xp.exports=US});var Ap=k((CD,Pp)=>{"use strict";var BS=io(),WS=(t,e)=>t.sort((r,n)=>BS(r,n,e));Pp.exports=WS});var Dp=k((xD,Ip)=>{"use strict";var JS=io(),qS=(t,e)=>t.sort((r,n)=>JS(n,r,e));Ip.exports=qS});var $r=k((PD,Np)=>{"use strict";var GS=de(),KS=(t,e,r)=>GS(t,e,r)>0;Np.exports=KS});var ao=k((AD,Op)=>{"use strict";var VS=de(),XS=(t,e,r)=>VS(t,e,r)<0;Op.exports=XS});var Ti=k((ID,Lp)=>{"use strict";var YS=de(),zS=(t,e,r)=>YS(t,e,r)===0;Lp.exports=zS});var Ri=k((DD,Mp)=>{"use strict";var QS=de(),ZS=(t,e,r)=>QS(t,e,r)!==0;Mp.exports=ZS});var lo=k((ND,$p)=>{"use strict";var eE=de(),tE=(t,e,r)=>eE(t,e,r)>=0;$p.exports=tE});var co=k((OD,jp)=>{"use strict";var rE=de(),nE=(t,e,r)=>rE(t,e,r)<=0;jp.exports=nE});var _i=k((LD,Hp)=>{"use strict";var oE=Ti(),sE=Ri(),iE=$r(),aE=lo(),lE=ao(),cE=co(),uE=(t,e,r,n)=>{switch(e){case"===":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t===r;case"!==":return typeof t=="object"&&(t=t.version),typeof r=="object"&&(r=r.version),t!==r;case"":case"=":case"==":return oE(t,r,n);case"!=":return sE(t,r,n);case">":return iE(t,r,n);case">=":return aE(t,r,n);case"<":return lE(t,r,n);case"<=":return cE(t,r,n);default:throw new TypeError(`Invalid operator: ${e}`)}};Hp.exports=uE});var Up=k((MD,Fp)=>{"use strict";var dE=W(),pE=tt(),{safeRe:uo,t:po}=Ut(),mE=(t,e)=>{if(t instanceof dE)return t;if(typeof t=="number"&&(t=String(t)),typeof t!="string")return null;e=e||{};let r=null;if(!e.rtl)r=t.match(e.includePrerelease?uo[po.COERCEFULL]:uo[po.COERCE]);else{let l=e.includePrerelease?uo[po.COERCERTLFULL]:uo[po.COERCERTL],c;for(;(c=l.exec(t))&&(!r||r.index+r[0].length!==t.length);)(!r||c.index+c[0].length!==r.index+r[0].length)&&(r=c),l.lastIndex=c.index+c[1].length+c[2].length;l.lastIndex=-1}if(r===null)return null;let n=r[2],o=r[3]||"0",s=r[4]||"0",i=e.includePrerelease&&r[5]?`-${r[5]}`:"",a=e.includePrerelease&&r[6]?`+${r[6]}`:"";return pE(`${n}.${o}.${s}${i}${a}`,e)};Fp.exports=mE});var Wp=k(($D,Bp)=>{"use strict";var fE=tt(),hE=Ft(),gE=W(),yE=(t,e,r)=>{if(!hE.RELEASE_TYPES.includes(e))return null;let n=wE(t,r);return n&&SE(n,e)},wE=(t,e)=>{let r=t instanceof gE?t.version:t;return fE(r,e)},SE=(t,e)=>{if(EE(e))return t.version;switch(t.prerelease=[],e){case"major":t.minor=0,t.patch=0;break;case"minor":t.patch=0;break}return t.format()},EE=t=>t.startsWith("pre");Bp.exports=yE});var qp=k((jD,Jp)=>{"use strict";var vi=class{constructor(){this.max=1e3,this.map=new Map}get(e){let r=this.map.get(e);if(r!==void 0)return this.map.delete(e),this.map.set(e,r),r}delete(e){return this.map.delete(e)}set(e,r){if(!this.delete(e)&&r!==void 0){if(this.map.size>=this.max){let o=this.map.keys().next().value;this.delete(o)}this.map.set(e,r)}return this}};Jp.exports=vi});var pe=k((HD,Xp)=>{"use strict";var bE=/\s+/g,Ci=class t{constructor(e,r){if(r=TE(r),e instanceof t)return e.loose===!!r.loose&&e.includePrerelease===!!r.includePrerelease?e:new t(e.raw,r);if(e instanceof xi)return this.raw=e.value,this.set=[[e]],this.formatted=void 0,this;if(this.options=r,this.loose=!!r.loose,this.includePrerelease=!!r.includePrerelease,this.raw=e.trim().replace(bE," "),this.set=this.raw.split("||").map(n=>this.parseRange(n.trim())).filter(n=>n.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){let n=this.set[0];if(this.set=this.set.filter(o=>!Kp(o[0])),this.set.length===0)this.set=[n];else if(this.set.length>1){for(let o of this.set)if(o.length===1&&DE(o[0])){this.set=[o];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let e=0;e<this.set.length;e++){e>0&&(this.formatted+="||");let r=this.set[e];for(let n=0;n<r.length;n++)n>0&&(this.formatted+=" "),this.formatted+=r[n].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(e){e=e.replace(IE,"");let n=((this.options.includePrerelease&&PE)|(this.options.loose&&AE))+":"+e,o=Gp.get(n);if(o)return o;let s=this.options.loose,i=s?X[J.HYPHENRANGELOOSE]:X[J.HYPHENRANGE];e=e.replace(i,BE(this.options.includePrerelease)),O("hyphen replace",e),e=e.replace(X[J.COMPARATORTRIM],vE),O("comparator trim",e),e=e.replace(X[J.TILDETRIM],CE),O("tilde trim",e),e=e.replace(X[J.CARETTRIM],xE),O("caret trim",e);let a=e.split(" ").map(u=>NE(u,this.options)).join(" ").split(/\s+/).map(u=>UE(u,this.options));s&&(a=a.filter(u=>(O("loose invalid filter",u,this.options),!!u.match(X[J.COMPARATORLOOSE])))),O("range list",a);let l=new Map,c=a.map(u=>new xi(u,this.options));for(let u of c){if(Kp(u))return[u];l.set(u.value,u)}l.size>1&&l.has("")&&l.delete("");let d=[...l.values()];return Gp.set(n,d),d}intersects(e,r){if(!(e instanceof t))throw new TypeError("a Range is required");return this.set.some(n=>Vp(n,r)&&e.set.some(o=>Vp(o,r)&&n.every(s=>o.every(i=>s.intersects(i,r)))))}test(e){if(!e)return!1;if(typeof e=="string")try{e=new RE(e,this.options)}catch{return!1}for(let r=0;r<this.set.length;r++)if(WE(this.set[r],e,this.options))return!0;return!1}};Xp.exports=Ci;var kE=qp(),Gp=new kE,TE=to(),xi=jr(),O=Mr(),RE=W(),{safeRe:X,src:_E,t:J,comparatorTrimReplace:vE,tildeTrimReplace:CE,caretTrimReplace:xE}=Ut(),{FLAG_INCLUDE_PRERELEASE:PE,FLAG_LOOSE:AE}=Ft(),IE=new RegExp(_E[J.BUILD],"g"),Kp=t=>t.value==="<0.0.0-0",DE=t=>t.value==="",Vp=(t,e)=>{let r=!0,n=t.slice(),o=n.pop();for(;r&&n.length;)r=n.every(s=>o.intersects(s,e)),o=n.pop();return r},NE=(t,e)=>(t=t.replace(X[J.BUILD],""),O("comp",t,e),t=ME(t,e),O("caret",t),t=OE(t,e),O("tildes",t),t=jE(t,e),O("xrange",t),t=FE(t,e),O("stars",t),t),Y=t=>!t||t.toLowerCase()==="x"||t==="*",OE=(t,e)=>t.trim().split(/\s+/).map(r=>LE(r,e)).join(" "),LE=(t,e)=>{let r=e.loose?X[J.TILDELOOSE]:X[J.TILDE];return t.replace(r,(n,o,s,i,a)=>{O("tilde",t,n,o,s,i,a);let l;return Y(o)?l="":Y(s)?l=`>=${o}.0.0 <${+o+1}.0.0-0`:Y(i)?l=`>=${o}.${s}.0 <${o}.${+s+1}.0-0`:a?(O("replaceTilde pr",a),l=`>=${o}.${s}.${i}-${a} <${o}.${+s+1}.0-0`):l=`>=${o}.${s}.${i} <${o}.${+s+1}.0-0`,O("tilde return",l),l})},ME=(t,e)=>t.trim().split(/\s+/).map(r=>$E(r,e)).join(" "),$E=(t,e)=>{O("caret",t,e);let r=e.loose?X[J.CARETLOOSE]:X[J.CARET],n=e.includePrerelease?"-0":"";return t.replace(r,(o,s,i,a,l)=>{O("caret",t,o,s,i,a,l);let c;return Y(s)?c="":Y(i)?c=`>=${s}.0.0${n} <${+s+1}.0.0-0`:Y(a)?s==="0"?c=`>=${s}.${i}.0${n} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.0${n} <${+s+1}.0.0-0`:l?(O("replaceCaret pr",l),s==="0"?i==="0"?c=`>=${s}.${i}.${a}-${l} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}-${l} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a}-${l} <${+s+1}.0.0-0`):(O("no pr"),s==="0"?i==="0"?c=`>=${s}.${i}.${a}${n} <${s}.${i}.${+a+1}-0`:c=`>=${s}.${i}.${a}${n} <${s}.${+i+1}.0-0`:c=`>=${s}.${i}.${a} <${+s+1}.0.0-0`),O("caret return",c),c})},jE=(t,e)=>(O("replaceXRanges",t,e),t.split(/\s+/).map(r=>HE(r,e)).join(" ")),HE=(t,e)=>{t=t.trim();let r=e.loose?X[J.XRANGELOOSE]:X[J.XRANGE];return t.replace(r,(n,o,s,i,a,l)=>{O("xRange",t,n,o,s,i,a,l);let c=Y(s),d=c||Y(i),u=d||Y(a),m=u;return o==="="&&m&&(o=""),l=e.includePrerelease?"-0":"",c?o===">"||o==="<"?n="<0.0.0-0":n="*":o&&m?(d&&(i=0),a=0,o===">"?(o=">=",d?(s=+s+1,i=0,a=0):(i=+i+1,a=0)):o==="<="&&(o="<",d?s=+s+1:i=+i+1),o==="<"&&(l="-0"),n=`${o+s}.${i}.${a}${l}`):d?n=`>=${s}.0.0${l} <${+s+1}.0.0-0`:u&&(n=`>=${s}.${i}.0${l} <${s}.${+i+1}.0-0`),O("xRange return",n),n})},FE=(t,e)=>(O("replaceStars",t,e),t.trim().replace(X[J.STAR],"")),UE=(t,e)=>(O("replaceGTE0",t,e),t.trim().replace(X[e.includePrerelease?J.GTE0PRE:J.GTE0],"")),BE=t=>(e,r,n,o,s,i,a,l,c,d,u,m)=>(Y(n)?r="":Y(o)?r=`>=${n}.0.0${t?"-0":""}`:Y(s)?r=`>=${n}.${o}.0${t?"-0":""}`:i?r=`>=${r}`:r=`>=${r}${t?"-0":""}`,Y(c)?l="":Y(d)?l=`<${+c+1}.0.0-0`:Y(u)?l=`<${c}.${+d+1}.0-0`:m?l=`<=${c}.${d}.${u}-${m}`:t?l=`<${c}.${d}.${+u+1}-0`:l=`<=${l}`,`${r} ${l}`.trim()),WE=(t,e,r)=>{for(let n=0;n<t.length;n++)if(!t[n].test(e))return!1;if(e.prerelease.length&&!r.includePrerelease){for(let n=0;n<t.length;n++)if(O(t[n].semver),t[n].semver!==xi.ANY&&t[n].semver.prerelease.length>0){let o=t[n].semver;if(o.major===e.major&&o.minor===e.minor&&o.patch===e.patch)return!0}return!1}return!0}});var jr=k((FD,tm)=>{"use strict";var Hr=Symbol("SemVer ANY"),Ii=class t{static get ANY(){return Hr}constructor(e,r){if(r=Yp(r),e instanceof t){if(e.loose===!!r.loose)return e;e=e.value}e=e.trim().split(/\s+/).join(" "),Ai("comparator",e,r),this.options=r,this.loose=!!r.loose,this.parse(e),this.semver===Hr?this.value="":this.value=this.operator+this.semver.version,Ai("comp",this)}parse(e){let r=this.options.loose?zp[Qp.COMPARATORLOOSE]:zp[Qp.COMPARATOR],n=e.match(r);if(!n)throw new TypeError(`Invalid comparator: ${e}`);this.operator=n[1]!==void 0?n[1]:"",this.operator==="="&&(this.operator=""),n[2]?this.semver=new Zp(n[2],this.options.loose):this.semver=Hr}toString(){return this.value}test(e){if(Ai("Comparator.test",e,this.options.loose),this.semver===Hr||e===Hr)return!0;if(typeof e=="string")try{e=new Zp(e,this.options)}catch{return!1}return Pi(e,this.operator,this.semver,this.options)}intersects(e,r){if(!(e instanceof t))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new em(e.value,r).test(this.value):e.operator===""?e.value===""?!0:new em(this.value,r).test(e.semver):(r=Yp(r),r.includePrerelease&&(this.value==="<0.0.0-0"||e.value==="<0.0.0-0")||!r.includePrerelease&&(this.value.startsWith("<0.0.0")||e.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&e.operator.startsWith(">")||this.operator.startsWith("<")&&e.operator.startsWith("<")||this.semver.version===e.semver.version&&this.operator.includes("=")&&e.operator.includes("=")||Pi(this.semver,"<",e.semver,r)&&this.operator.startsWith(">")&&e.operator.startsWith("<")||Pi(this.semver,">",e.semver,r)&&this.operator.startsWith("<")&&e.operator.startsWith(">")))}};tm.exports=Ii;var Yp=to(),{safeRe:zp,t:Qp}=Ut(),Pi=_i(),Ai=Mr(),Zp=W(),em=pe()});var Fr=k((UD,rm)=>{"use strict";var JE=pe(),qE=(t,e,r)=>{try{e=new JE(e,r)}catch{return!1}return e.test(t)};rm.exports=qE});var om=k((BD,nm)=>{"use strict";var GE=pe(),KE=(t,e)=>new GE(t,e).set.map(r=>r.map(n=>n.value).join(" ").trim().split(" "));nm.exports=KE});var im=k((WD,sm)=>{"use strict";var VE=W(),XE=pe(),YE=(t,e,r)=>{let n=null,o=null,s=null;try{s=new XE(e,r)}catch{return null}return t.forEach(i=>{s.test(i)&&(!n||o.compare(i)===-1)&&(n=i,o=new VE(n,r))}),n};sm.exports=YE});var lm=k((JD,am)=>{"use strict";var zE=W(),QE=pe(),ZE=(t,e,r)=>{let n=null,o=null,s=null;try{s=new QE(e,r)}catch{return null}return t.forEach(i=>{s.test(i)&&(!n||o.compare(i)===1)&&(n=i,o=new zE(n,r))}),n};am.exports=ZE});var dm=k((qD,um)=>{"use strict";var Di=W(),eb=pe(),cm=$r(),tb=(t,e)=>{t=new eb(t,e);let r=new Di("0.0.0");if(t.test(r)||(r=new Di("0.0.0-0"),t.test(r)))return r;r=null;for(let n=0;n<t.set.length;++n){let o=t.set[n],s=null;o.forEach(i=>{let a=new Di(i.semver.version);switch(i.operator){case">":a.prerelease.length===0?a.patch++:a.prerelease.push(0),a.raw=a.format();case"":case">=":(!s||cm(a,s))&&(s=a);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${i.operator}`)}}),s&&(!r||cm(r,s))&&(r=s)}return r&&t.test(r)?r:null};um.exports=tb});var mm=k((GD,pm)=>{"use strict";var rb=pe(),nb=(t,e)=>{try{return new rb(t,e).range||"*"}catch{return null}};pm.exports=nb});var mo=k((KD,ym)=>{"use strict";var ob=W(),gm=jr(),{ANY:sb}=gm,ib=pe(),ab=Fr(),fm=$r(),hm=ao(),lb=co(),cb=lo(),ub=(t,e,r,n)=>{t=new ob(t,n),e=new ib(e,n);let o,s,i,a,l;switch(r){case">":o=fm,s=lb,i=hm,a=">",l=">=";break;case"<":o=hm,s=cb,i=fm,a="<",l="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(ab(t,e,n))return!1;for(let c=0;c<e.set.length;++c){let d=e.set[c],u=null,m=null;if(d.forEach(f=>{f.semver===sb&&(f=new gm(">=0.0.0")),u=u||f,m=m||f,o(f.semver,u.semver,n)?u=f:i(f.semver,m.semver,n)&&(m=f)}),u.operator===a||u.operator===l||(!m.operator||m.operator===a)&&s(t,m.semver))return!1;if(m.operator===l&&i(t,m.semver))return!1}return!0};ym.exports=ub});var Sm=k((VD,wm)=>{"use strict";var db=mo(),pb=(t,e,r)=>db(t,e,">",r);wm.exports=pb});var bm=k((XD,Em)=>{"use strict";var mb=mo(),fb=(t,e,r)=>mb(t,e,"<",r);Em.exports=fb});var Rm=k((YD,Tm)=>{"use strict";var km=pe(),hb=(t,e,r)=>(t=new km(t,r),e=new km(e,r),t.intersects(e,r));Tm.exports=hb});var vm=k((zD,_m)=>{"use strict";var gb=Fr(),yb=de();_m.exports=(t,e,r)=>{let n=[],o=null,s=null,i=t.sort((d,u)=>yb(d,u,r));for(let d of i)gb(d,e,r)?(s=d,o||(o=d)):(s&&n.push([o,s]),s=null,o=null);o&&n.push([o,null]);let a=[];for(let[d,u]of n)d===u?a.push(d):!u&&d===i[0]?a.push("*"):u?d===i[0]?a.push(`<=${u}`):a.push(`${d} - ${u}`):a.push(`>=${d}`);let l=a.join(" || "),c=typeof e.raw=="string"?e.raw:String(e);return l.length<c.length?l:e}});var Dm=k((QD,Im)=>{"use strict";var Cm=pe(),Li=jr(),{ANY:Ni}=Li,Oi=Fr(),Mi=de(),wb=(t,e,r={})=>{if(t===e)return!0;t=new Cm(t,r),e=new Cm(e,r);let n=!1;e:for(let o of t.set){for(let s of e.set){let i=Eb(o,s,r);if(n=n||i!==null,i)continue e}if(n)return!1}return!0},Sb=[new Li(">=0.0.0-0")],xm=[new Li(">=0.0.0")],Eb=(t,e,r)=>{if(t===e)return!0;if(t.length===1&&t[0].semver===Ni){if(e.length===1&&e[0].semver===Ni)return!0;r.includePrerelease?t=Sb:t=xm}if(e.length===1&&e[0].semver===Ni){if(r.includePrerelease)return!0;e=xm}let n=new Set,o,s;for(let f of t)f.operator===">"||f.operator===">="?o=Pm(o,f,r):f.operator==="<"||f.operator==="<="?s=Am(s,f,r):n.add(f.semver);if(n.size>1)return null;let i;if(o&&s){if(i=Mi(o.semver,s.semver,r),i>0)return null;if(i===0&&(o.operator!==">="||s.operator!=="<="))return null}for(let f of n){if(o&&!Oi(f,String(o),r)||s&&!Oi(f,String(s),r))return null;for(let w of e)if(!Oi(f,String(w),r))return!1;return!0}let a,l,c,d,u=s&&!r.includePrerelease&&s.semver.prerelease.length?s.semver:!1,m=o&&!r.includePrerelease&&o.semver.prerelease.length?o.semver:!1;u&&u.prerelease.length===1&&s.operator==="<"&&u.prerelease[0]===0&&(u=!1);for(let f of e){if(d=d||f.operator===">"||f.operator===">=",c=c||f.operator==="<"||f.operator==="<=",o){if(m&&f.semver.prerelease&&f.semver.prerelease.length&&f.semver.major===m.major&&f.semver.minor===m.minor&&f.semver.patch===m.patch&&(m=!1),f.operator===">"||f.operator===">="){if(a=Pm(o,f,r),a===f&&a!==o)return!1}else if(o.operator===">="&&!f.test(o.semver))return!1}if(s){if(u&&f.semver.prerelease&&f.semver.prerelease.length&&f.semver.major===u.major&&f.semver.minor===u.minor&&f.semver.patch===u.patch&&(u=!1),f.operator==="<"||f.operator==="<="){if(l=Am(s,f,r),l===f&&l!==s)return!1}else if(s.operator==="<="&&!f.test(s.semver))return!1}if(!f.operator&&(s||o)&&i!==0)return!1}return!(o&&c&&!s&&i!==0||s&&d&&!o&&i!==0||m||u)},Pm=(t,e,r)=>{if(!t)return e;let n=Mi(t.semver,e.semver,r);return n>0?t:n<0||e.operator===">"&&t.operator===">="?e:t},Am=(t,e,r)=>{if(!t)return e;let n=Mi(t.semver,e.semver,r);return n<0?t:n>0||e.operator==="<"&&t.operator==="<="?e:t};Im.exports=wb});var Mm=k((ZD,Lm)=>{"use strict";var $i=Ut(),Nm=Ft(),bb=W(),Om=Ei(),kb=tt(),Tb=op(),Rb=ip(),_b=cp(),vb=pp(),Cb=fp(),xb=gp(),Pb=wp(),Ab=Ep(),Ib=de(),Db=Rp(),Nb=vp(),Ob=io(),Lb=Ap(),Mb=Dp(),$b=$r(),jb=ao(),Hb=Ti(),Fb=Ri(),Ub=lo(),Bb=co(),Wb=_i(),Jb=Up(),qb=Wp(),Gb=jr(),Kb=pe(),Vb=Fr(),Xb=om(),Yb=im(),zb=lm(),Qb=dm(),Zb=mm(),ek=mo(),tk=Sm(),rk=bm(),nk=Rm(),ok=vm(),sk=Dm();Lm.exports={parse:kb,valid:Tb,clean:Rb,inc:_b,diff:vb,major:Cb,minor:xb,patch:Pb,prerelease:Ab,compare:Ib,rcompare:Db,compareLoose:Nb,compareBuild:Ob,sort:Lb,rsort:Mb,gt:$b,lt:jb,eq:Hb,neq:Fb,gte:Ub,lte:Bb,cmp:Wb,coerce:Jb,truncate:qb,Comparator:Gb,Range:Kb,satisfies:Vb,toComparators:Xb,maxSatisfying:Yb,minSatisfying:zb,minVersion:Qb,validRange:Zb,outside:ek,gtr:tk,ltr:rk,intersects:nk,simplifyRange:ok,subset:sk,SemVer:bb,re:$i.re,src:$i.src,tokens:$i.t,SEMVER_SPEC_VERSION:Nm.SEMVER_SPEC_VERSION,RELEASE_TYPES:Nm.RELEASE_TYPES,compareIdentifiers:Om.compareIdentifiers,rcompareIdentifiers:Om.rcompareIdentifiers}});var dT={};Sa(dT,{buildPluginBootstrapOutput:()=>Xr,main:()=>Zf,runPluginBootstrap:()=>Qf});module.exports=ah(dT);var da=require("node:path"),zf=require("node:url");var er=require("node:fs");var ba=require("node:path"),lh="JOLLI_LOCAL_AGENT_CHILD",ch=".jolli-local-agent-child";function nn(t=process.env,e){return t[lh]==="1"?!0:e!==void 0&&(0,er.existsSync)((0,ba.join)(e,ch))}te();Ce();Xe();le();var lt=require("node:fs/promises"),Pt=require("node:path");ne();var Lg='"$HOME/.jolli/jollimemory/run-hook"';function we(t,e=""){let r=e?` ${e}`:"";return`${Lg} ${t}${r}`}var En=["run-hook","StopHook","jollimemory-hooks.jar"],pr=["run-hook","SessionStartHook"],bn=["run-hook","GeminiAfterAgentHook","jollimemory-hooks.jar"];function mr(t,e){let r=typeof e=="string"?[e]:e;return t.some(n=>{let o=n.hooks;return Array.isArray(o)?o.some(s=>typeof s.command=="string"&&r.some(i=>s.command.includes(i))):!1})}function at(t,e){let r=typeof e=="string"?[e]:e,n=[];for(let o of t){let s=o.hooks;if(!Array.isArray(s)){n.push(o);continue}let i=s.filter(a=>!(typeof a.command=="string"&&r.some(l=>a.command.includes(l))));i.length>0&&n.push({...o,hooks:i})}return n}function ms(t){return mr(t,En)}function kn(t){return at(t,En)}async function fs(t){let e=(0,Pt.join)(t,".claude"),r=(0,Pt.join)(e,"settings.local.json"),n=we("stop"),o=we("session-start");await Yl(t);let s={},i;try{i=await(0,lt.readFile)(r,"utf-8"),s=JSON.parse(i)}catch(f){if(f.code!=="ENOENT")throw f}let a=s.hooks??{},l=a.Stop??[],c=a.SessionStart??[],d=kn(l);d.push({hooks:[{type:"command",command:n,async:!0}]});let u=at(c,pr);u.push({hooks:[{type:"command",command:o}]}),a.Stop=d,a.SessionStart=u,s.hooks=a;let m=JSON.stringify(s,null,"	");return i===m?{path:r}:(await(0,lt.mkdir)(e,{recursive:!0}),await P(r,m),{path:r})}async function Yl(t){let e=(0,Pt.join)(t,".claude","settings.json"),r;try{let i=await(0,lt.readFile)(e,"utf-8");r=JSON.parse(i)}catch{return}let n=r.hooks;if(!n)return;let o=n.Stop??[];if(!ms(o))return;let s=kn(o);s.length===0?delete n.Stop:n.Stop=s,Object.keys(n).length===0?delete r.hooks:r.hooks=n,await P(e,JSON.stringify(r,null,"	"))}async function hs(t){await Yl(t);let e=(0,Pt.join)(t,".claude","settings.local.json"),r;try{let l=await(0,lt.readFile)(e,"utf-8");r=JSON.parse(l)}catch{return{}}let n=r.hooks;if(!n)return{};let o=n.Stop??[],s=ms(o);if(s){let l=kn(o);l.length===0?delete n.Stop:n.Stop=l}let i=n.SessionStart??[],a=mr(i,pr);if(a){let l=at(i,pr);l.length===0?delete n.SessionStart:n.SessionStart=l}return!s&&!a?{}:(Object.keys(n).length===0?delete r.hooks:r.hooks=n,await P(e,JSON.stringify(r,null,"	")),{})}async function zl(t){try{let e=await(0,lt.readFile)((0,Pt.join)(t,".claude","settings.local.json"),"utf-8"),n=JSON.parse(e).hooks;if(!n)return{stop:!1,sessionStart:!1};let o=n.Stop??[],s=n.SessionStart??[];return{stop:Xl(o,En,we("stop"),!0),sessionStart:Xl(s,pr,we("session-start"),!1)}}catch{return{stop:!1,sessionStart:!1}}}function Xl(t,e,r,n){let o=t.filter(a=>a.hooks?.some(c=>{let d=c.command;return typeof d=="string"&&e.some(u=>d.includes(u))}));if(o.length!==1)return!1;let s=o[0].hooks;if(!s||s.length!==1)return!1;let i=s[0];return i.type==="command"&&i.command===r&&(n?i.async===!0:i.async===void 0)}var ct=require("node:fs/promises"),Me=require("node:path");ne();h();Re();var ce=p("GitExclude"),fr="# >>> jolli skill exclude >>>",hr="# <<< jolli skill exclude <<<";function Mg(t,e){return Me.win32.isAbsolute(t)||Me.posix.isAbsolute(t)?t:(0,Me.join)(e,t)}async function gs(t){try{let{stdout:e}=await Tt("git",["rev-parse","--git-path","info/exclude"],{cwd:t}),r=e.trim();return r.length===0?null:Mg(r,t)}catch{return null}}async function Ql(t,e){let r=await gs(t);if(!r)return ce.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",t),!1;let n="";try{n=await(0,ct.readFile)(r,"utf-8")}catch(i){if(i.code!=="ENOENT")return ce.warn("Failed to read %s: %s \u2014 skipping update",r,i.message),!1}let o=ec(e),s=tc(n,o);if(s===n)return!0;try{return await(0,ct.mkdir)((0,Me.dirname)(r),{recursive:!0}),await P(r,s),ce.info("Updated %s with %d Jolli skill exclude paths",r,e.length),!0}catch(i){return ce.warn("Failed to write %s: %s",r,i.message),!1}}async function Tn(t,e){let r=await gs(t);if(!r)return ce.warn("Skipping .git/info/exclude update for %s: not a git repo or git unavailable",t),!1;let n="";try{n=await(0,ct.readFile)(r,"utf-8")}catch(s){if(s.code!=="ENOENT")return ce.warn("Failed to read %s: %s \u2014 skipping update",r,s.message),!1}let o=$g(n,e);if(o===n)return!0;try{return await(0,ct.mkdir)((0,Me.dirname)(r),{recursive:!0}),await P(r,o),ce.info("Merged %d Jolli skill exclude path(s) into %s",e.length,r),!0}catch(s){return ce.warn("Failed to write %s: %s",r,s.message),!1}}async function Zl(t,e){let r=await gs(t);if(!r)return ce.warn("Skipping .git/info/exclude cleanup for %s: not a git repo or git unavailable",t),!1;let n;try{n=await(0,ct.readFile)(r,"utf-8")}catch(s){return s.code==="ENOENT"?!0:(ce.warn("Failed to read %s: %s \u2014 skipping cleanup",r,s.message),!1)}let o=jg(n,e);if(o===n)return!0;try{return await P(r,o),ce.info("Removed %d Jolli exclude path(s) from %s",e.length,r),!0}catch(s){return ce.warn("Failed to write %s: %s",r,s.message),!1}}function ec(t){return`${[fr,...t,hr].join(`
`)}
`}function tc(t,e){let r=t.split(`
`),n=r.indexOf(fr),o=r.indexOf(hr),s=e.slice(0,-1).split(`
`);if(n!==-1&&o!==-1&&o>n)return[...r.slice(0,n),...s,...r.slice(o+1)].join(`
`);if(t.length===0)return e;let i=t.endsWith(`
`)?"":`
`;return`${t}${i}${e}`}function $g(t,e){let r=t.split(`
`),n=r.indexOf(fr),o=r.indexOf(hr),s=n!==-1&&o!==-1&&o>n?r.slice(n+1,o):[],i=new Set(s),a=[...s];for(let l of e)i.has(l)||(i.add(l),a.push(l));return tc(t,ec(a))}function jg(t,e){let r=t.split(`
`),n=r.indexOf(fr),o=r.indexOf(hr);if(n===-1||o===-1||o<=n)return t;let s=new Set(e),i=r.slice(n+1,o).filter(c=>!s.has(c)),a=r.slice(0,n),l=r.slice(o+1);return i.length===0?[...a.length>0&&a[a.length-1]===""?a.slice(0,-1):a,...l].join(`
`):[...a,fr,...i,hr,...l].join(`
`)}var No=require("node:fs/promises"),yt=require("node:path"),$f=require("node:url");var ys=require("node:fs"),rc=require("node:fs/promises"),ws=require("node:os"),gr=require("node:path");h();Pe();var d_=p("AntigravityDetector"),nc=["antigravity","antigravity-ide","antigravity-cli"];function oc(t=(0,ws.homedir)()){let e=[];for(let r of nc){let n=(0,gr.join)(t,".gemini",r),o=(0,gr.join)(n,"conversations");(0,ys.existsSync)(o)&&e.push({variant:r,root:n,conversationsDir:o,brainDir:(0,gr.join)(n,"brain")})}return e}async function Hg(t){for(let e of oc(t))try{if((await(0,rc.readdir)(e.conversationsDir)).some(r=>r.endsWith(".db")))return!0}catch{}return!1}async function sc(t=(0,ws.homedir)()){return await Hg(t)?!0:nc.some(e=>(0,ys.existsSync)((0,gr.join)(t,".gemini",e)))}h();var Rn="mcp__";function yr(t){return{name:t,kind:"builtin",calls:0}}function Ss(t){return{name:t,kind:"skill",calls:0}}function At(t,e){return{name:e?`${t}.${e}`:t,kind:"mcp",server:t,calls:0}}function _n(t){if(!t.startsWith(Rn))return yr(t);let e=t.slice(Rn.length),r=e.indexOf("__");return r===-1?At(e,""):At(e.slice(0,r),e.slice(r+2))}function ic(t,e){if(e===void 0||e.length===0)return yr(t);if(!e.startsWith(Rn))return At(e,t);let r=e.slice(Rn.length).split("__"),n=r[r.length-1]||r[0]||e;return At(n,t)}function Fg(t,e){let r=Math.max(t.lastCallAtMs??Number.NEGATIVE_INFINITY,e.lastCallAtMs??Number.NEGATIVE_INFINITY);return Number.isFinite(r)?{lastCallAtMs:r}:{}}var dt=class{constructor(){this.byKey=new Map;this.seen=new Set}add(e,r=1){let n=`${e.kind}:${e.name}`,o=this.byKey.get(n);if(!o){this.byKey.set(n,{...e,calls:r});return}this.byKey.set(n,{...o,calls:o.calls+r,...Fg(o,e)})}addOnce(e,r){if(e!==void 0){if(this.seen.has(e))return;this.seen.add(e)}this.add(r)}hasSeen(e){return this.seen.has(e)}values(){return[...this.byKey.values()]}};h();h();function ks(t){if(t===void 0)return;let e=Date.parse(t);return Number.isFinite(e)?e:void 0}function ac(...t){let e=t.filter(r=>r!==void 0);return e.length>0?{lastCallAtMs:Math.max(...e)}:{}}var dc=p("TranscriptParser"),vn=class{parseLine(e,r){return mc(e,r)}parseUsageTokens(e,r){let n=uc(e);return n?{input:n.input,output:n.output,cached:n.cached,...n.id&&{dedupKey:n.id}}:{input:0,output:0,cached:0}}parseUsageByModel(e){let r=new Map,n=new Set;for(let o of e){let s=uc(o);if(!s)continue;if(s.id){if(n.has(s.id))continue;n.add(s.id)}let i=r.get(s.model);i?r.set(s.model,{...i,input:i.input+s.input,output:i.output+s.output,cached:i.cached+s.cached}):r.set(s.model,{model:s.model,provider:"anthropic",input:s.input,output:s.output,cached:s.cached})}return[...r.values()].filter(o=>o.input+o.output+o.cached>0)}parseToolUse(e){let r=new dt;for(let n of e){let o;try{o=JSON.parse(n)}catch{continue}let s=o?.message?.content;if(!Array.isArray(s))continue;let i=ks(this.parseTimestamp(n));for(let a of s){let l=a;l.type!=="tool_use"||typeof l.name!="string"||r.addOnce(typeof l.id=="string"?l.id:void 0,{...l.name==="Skill"&&typeof l.input?.skill=="string"?Ss(l.input.skill):_n(l.name),...i!==void 0&&{lastCallAtMs:i}})}}return r.values()}parseTimestamp(e,r){try{let n=JSON.parse(e);return typeof n.timestamp=="string"?n.timestamp:void 0}catch{return}}},Es=class{parseLine(e,r){try{let n=JSON.parse(e),o=typeof n.timestamp=="string"?n.timestamp:void 0;if(n.type!=="event_msg")return null;let i=n.payload;if(!i||typeof i!="object")return null;let a=i.type;return a==="user_message"?Jg(i,o):a==="agent_message"?qg(i,o):null}catch(n){return dc.debug("Failed to parse Codex transcript line %d: %s",r,n.message),null}}parseToolUse(e){let r=new Map,n=[];for(let s of e){let i;try{i=JSON.parse(s)}catch{continue}let a=i?.payload;if(a===null||typeof a!="object")continue;let l=a;if(typeof l.type!="string"||!Ug.has(l.type))continue;let c=typeof l.invocation?.tool=="string"?l.invocation.tool:void 0,d=typeof l.invocation?.server=="string"?l.invocation.server:"",u;if(c!==void 0)u=d?At(d,c):yr(c);else if(typeof l.name=="string"&&l.name.length>0)u=ic(l.name,typeof l.namespace=="string"?l.namespace:void 0);else continue;let m=i.timestamp,f=ks(typeof m=="string"?m:void 0),w={...u,...f!==void 0&&{lastCallAtMs:f}},C=typeof l.call_id=="string"?l.call_id:void 0;if(C===void 0){n.push(w);continue}let _=r.get(C),S=_===void 0||_.kind!=="mcp"&&w.kind==="mcp"?w:_;r.set(C,{...S,..._?ac(_.lastCallAtMs,w.lastCallAtMs):ac(w.lastCallAtMs)})}let o=new dt;for(let s of[...r.values(),...n])o.add(s);return o.values()}},Ug=new Set(["function_call","custom_tool_call","local_shell_call","web_search_call","mcp_tool_call_end"]),bs=class{parseLine(e,r){try{let n=JSON.parse(e),o=n.type,s=cc(n);if(o==="turn.prompt"){let a=pc(n.input)?.trim();return a?{role:"human",content:a,timestamp:s}:null}let i=Wg(n);if(i&&i.type==="text"){let a=typeof i.text=="string"?i.text.trim():"";return a?{role:"assistant",content:a,timestamp:s}:null}return null}catch(n){return dc.debug("Failed to parse Kimi transcript line %d: %s",r,n.message),null}}parseToolUse(e){let r=new dt;for(let n of e){if(!n.includes(lc))continue;let o;try{o=JSON.parse(n)}catch{continue}if(o.type!==lc)continue;let s=o.event;if(s===null||typeof s!="object"||s.type!=="tool.call"||typeof s.name!="string")continue;let i=ks(this.parseTimestamp(n));r.addOnce(typeof s.toolCallId=="string"?s.toolCallId:void 0,{...s.name===Bg&&typeof s.args?.skill=="string"?Ss(s.args.skill):_n(s.name),...i!==void 0&&{lastCallAtMs:i}})}return r.values()}parseTimestamp(e,r){try{return cc(JSON.parse(e))}catch{return}}},lc="context.append_loop_event",Bg="Skill";function Wg(t){if(t.type==="context.append_loop_event"){let e=t.event;return e?.type==="content.part"&&e.part&&typeof e.part=="object"?e.part:null}return t.type==="content.part"&&t.part&&typeof t.part=="object"?t.part:null}function cc(t){let e=t.time??t.timestamp;return typeof e=="number"&&Number.isFinite(e)?new Date(e).toISOString():typeof e=="string"&&e.length>0?e:void 0}function pc(t){if(typeof t=="string")return t.length>0?t:null;if(Array.isArray(t)){let e=[];for(let r of t){let n=pc(r);n&&e.push(n)}return e.length>0?e.join(`
`):null}if(t!==null&&typeof t=="object"){let e=t;if((e.type==="text"||e.type===void 0)&&typeof e.text=="string"&&e.text.length>0)return e.text}return null}function Jg(t,e){let r=t.message;return typeof r!="string"||r.trim().length===0?null:{role:"human",content:r.trim(),timestamp:e}}function qg(t,e){let r=t.message;return typeof r!="string"||r.trim().length===0?null:{role:"assistant",content:r.trim(),timestamp:e}}function uc(t){try{return Kg(JSON.parse(t))}catch{return null}}function Gg(t){return t.startsWith("<")&&t.endsWith(">")}function Kg(t){let e=t,r=e?.message?.usage??e?.usage;if(!r||typeof r!="object")return null;let n=i=>typeof r[i]=="number"?r[i]:0,o=e?.message?.model??e?.model,s=e?.message?.id;return{id:typeof s=="string"?s:"",model:typeof o=="string"&&!Gg(o)?o:"",input:n("input_tokens"),output:n("output_tokens"),cached:n("cache_creation_input_tokens")}}var Vg=new vn,Xg=new Es,Yg=new bs;function zg(t){switch(t){case"codex":return Xg;case"kimi":return Yg;case"claude":return Vg}}var Qg=["claude","codex","kimi"],Zg=["gemini","opencode","antigravity","cursor-cli","cline-cli","devin"],y_=new Set([...Qg.filter(t=>zg(t).parseToolUse!==void 0),...Zg]);var Ts=p("TranscriptReader");var ey=["Base directory for this skill:","[Request interrupted by user"],ty=/<(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>[\s\S]*?<\/(?:system-reminder|ide_opened_file|ide_selection|local-command-caveat|command-name|command-message|command-args|local-command-stdout)>/g;function mc(t,e){try{let r=JSON.parse(t);if(r.isCompactSummary===!0)return Ts.debug("Skipping compaction summary at line %d",e),null;if(!r.message||typeof r.message!="object")return null;let n=r.message,o=n.role,s=typeof r.timestamp=="string"?r.timestamp:void 0;if(o==="user")return ry(n,s,e);if(o==="assistant"){let i=fc(n.content)?.trim();return i?{role:"assistant",content:i,timestamp:s}:null}return null}catch(r){return Ts.debug("Failed to parse transcript line %d: %s",e,r.message),null}}function ry(t,e,r){let n=fc(t.content);if(!n)return null;let o=ny(n);return o.length===0?null:ey.some(s=>o.startsWith(s))?(Ts.debug("Skipping filtered user message at line %d",r),null):{role:"human",content:o,timestamp:e}}function ny(t){return t.replace(ty,"").trim()}function fc(t){if(typeof t=="string")return t.length>0?t:null;if(Array.isArray(t)){let e=[];for(let r of t)if(r!==null&&typeof r=="object"){let n=r;n.type==="text"&&typeof n.text=="string"&&e.push(n.text)}return e.length>0?e.join(`
`):null}return null}te();Ae();Pe();var $_=p("AntigravityDiscoverer"),j_=2880*60*1e3;var hc=require("node:fs/promises"),xn=require("node:os"),_s=require("node:path");function oy(t=(0,xn.homedir)()){return(0,_s.join)(t,".cline","data")}function gc(t=(0,xn.homedir)()){return(0,_s.join)(oy(t),"sessions")}async function yc(t=(0,xn.homedir)()){try{return await(0,hc.access)(gc(t)),!0}catch{return!1}}h();Ae();var q_=p("ClineCliDiscoverer"),G_=2880*60*1e3;var vs=require("node:fs/promises"),br=require("node:os"),An=require("node:path");var Pn=require("node:os"),Er=require("node:path");h();var X_=p("VscodeWorkspaceLocator"),wc=["Code","Code - Insiders","Cursor","VSCodium","Windsurf"];function He(t,e=(0,Pn.homedir)()){switch((0,Pn.platform)()){case"darwin":return(0,Er.join)(e,"Library","Application Support",t);case"win32":return(0,Er.join)(process.env.APPDATA??(0,Er.join)(e,"AppData","Roaming"),t);default:return(0,Er.join)(e,".config",t)}}var sy="saoudrizwan.claude-dev";function iy(t,e){return(0,An.join)(He(t,e),"User","globalStorage",sy)}function kr(t=(0,br.homedir)()){return wc.map(e=>iy(e,t))}function In(t){return(0,An.join)(t,"settings","cline_mcp_settings.json")}async function Sc(t=(0,br.homedir)()){for(let e of kr(t))try{return await(0,vs.access)((0,An.join)(e,"state","taskHistory.json")),!0}catch{}return!1}async function Cs(t=(0,br.homedir)()){let e=[];for(let r of kr(t))try{await(0,vs.access)(In(r)),e.push(r)}catch{}return e}async function Ec(t=(0,br.homedir)()){return(await Cs(t)).length>0}h();Ae();var rv=p("ClineDiscoverer"),nv=2880*60*1e3;var xs=require("node:fs/promises"),bc=require("node:os"),Ps=require("node:path");h();var av=p("CodexDiscoverer"),lv=2880*60*1e3,ay=".codex";async function As(){let t=(0,Ps.join)((0,bc.homedir)(),ay);try{return(await(0,xs.stat)(t)).isDirectory()}catch{return!1}}var Tc=require("node:fs/promises"),Rc=require("node:os"),Is=require("node:path");h();var ly=p("CopilotChatDetector");function cy(t){return(0,Is.join)(He("Code",t),"User","globalStorage","github.copilot-chat")}function uy(t=(0,Rc.homedir)()){return(0,Is.join)(t,".copilot","session-state")}async function kc(t){try{return(await(0,Tc.stat)(t)).isDirectory()}catch(e){let r=e.code;return r!=="ENOENT"&&ly.warn("Copilot Chat probe stat failed for %s (%s): %s",t,r??"unknown",e.message),!1}}async function _c(){let[t,e]=await Promise.all([kc(cy()),kc(uy())]);return t||e}h();var gv=p("CopilotChatDiscoverer"),yv=2880*60*1e3;var Cc=require("node:fs/promises"),xc=require("node:os"),Pc=require("node:path");h();Pe();var Ac=p("CopilotDetector");function Ic(){return(0,Pc.join)((0,xc.homedir)(),".copilot","session-store.db")}async function Dc(){return je()?Ds():(Ac.info("Copilot CLI support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,$e.major,$e.minor),!1)}async function Ds(){let t=Ic();try{return(await(0,Cc.stat)(t)).isFile()}catch(e){let r=e.code;return r!=="ENOENT"&&Ac.warn("Copilot DB stat failed (%s): %s",r??"unknown",e.message),!1}}h();Pe();var vv=p("CopilotDiscoverer"),Cv=2880*60*1e3;var Dn=require("node:fs/promises"),Nn=require("node:os"),Ns=require("node:path");h();Ae();var Iv=p("CursorCliDiscoverer"),Dv=2880*60*1e3;function py(t=(0,Nn.homedir)()){return(0,Ns.join)(t,".cursor")}function my(t=(0,Nn.homedir)()){return(0,Ns.join)(py(t),"chats")}async function Nc(t=(0,Nn.homedir)()){try{return(await(0,Dn.stat)(my(t))).isDirectory()}catch{return!1}}var Oc=require("node:fs/promises"),Lc=require("node:path");h();Pe();var fy=p("CursorDetector");function Mc(t){return(0,Lc.join)(He("Cursor",t),"User","globalStorage","state.vscdb")}async function $c(){return je()?Os():(fy.info("Cursor support disabled: this runtime is Node %s, requires 22.13+ for built-in SQLite",process.versions.node),!1)}async function Os(){let t=Mc();try{return(await(0,Oc.stat)(t)).isFile()}catch{return!1}}h();Pe();var Bv=p("CursorDiscoverer"),Wv=2880*60*1e3;var Ls=require("node:fs/promises"),jc=require("node:os"),Dt=require("node:path");h();Pe();var Vv=p("DevinDiscoverer"),Xv=2880*60*1e3;function Hc(t){let e=t??(0,jc.homedir)();if(process.platform==="win32")return(0,Dt.join)(process.env.APPDATA??(0,Dt.join)(e,"AppData","Roaming"),"devin","cli");let r=process.env.XDG_DATA_HOME,n=r&&r.length>0?r:(0,Dt.join)(e,".local","share");return(0,Dt.join)(n,"devin","cli")}function hy(t){return(0,Dt.join)(Hc(t),"sessions.db")}async function gy(){try{return(await(0,Ls.stat)(hy())).isFile()}catch{return!1}}async function Fc(){if(await gy())return!0;try{return(await(0,Ls.stat)(Hc())).isDirectory()}catch{return!1}}var Uc=require("node:fs/promises"),Bc=require("node:os"),Wc=require("node:path");h();var yy=p("GeminiDetector"),wy=".gemini";async function Ms(){let t=(0,Wc.join)((0,Bc.homedir)(),wy);try{return(await(0,Uc.stat)(t)).isDirectory()}catch{return yy.debug("Gemini directory not found: %s",t),!1}}te();Tr();var Mn=require("node:fs/promises"),pu=require("node:os"),Us=require("node:path");h();var gC=p("KimiDiscoverer"),yC=2880*60*1e3,Ay=".kimi-code";function $n(){return process.env.KIMI_CODE_HOME||(0,Us.join)((0,pu.homedir)(),Ay)}async function mu(){let t=$n();try{return(await(0,Mn.stat)(t)).isDirectory()}catch{return!1}}Ce();le();var fu={"claude-plugin":{host:"claude",localAgentTool:"claude-code"},"codex-plugin":{host:"codex",localAgentTool:"codex"}};function jn(t){return t===void 0?void 0:fu[t]?.localAgentTool}function hu(t){return(t===void 0?void 0:fu[t]?.host)??"claude"}async function gu(t,e){let r=jn(t);return r===void 0?null:e.localAgentTool===r&&e.aiProvider!==void 0?{tool:r,changedTool:!1,seededProvider:!1}:Sn(n=>{let o=n.localAgentTool,s=o!==r,i=n.aiProvider===void 0;return!s&&!i?{update:null,result:{tool:r,changedTool:!1,seededProvider:!1}}:{update:i?{aiProvider:"local-agent",localAgentTool:r}:{localAgentTool:r},result:{tool:r,changedTool:s,previousTool:o,seededProvider:i}}})}var Bs={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop"},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app"},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."}};function Ze(t){return Bs[t]?.label??"Local agent"}function yu(t){return Bs[t]?.loginHint??"Sign in to your local agent CLI."}function wu(t){let e=Bs[t]?.separateDesktopApp;return e===void 0?null:`(This login is SEPARATE from ${e} \u2014 ${e} stays signed in on its own.)`}var Su=require("node:fs/promises"),Eu=require("node:os"),Ws=require("node:path");h();Pe();var Iy=p("OpenCodeDiscoverer"),_C=2880*60*1e3;function Dy(){return process.env.XDG_DATA_HOME||(0,Ws.join)((0,Eu.homedir)(),".local","share")}function Ny(){return(0,Ws.join)(Dy(),"opencode","opencode.db")}async function bu(){return je()?Js():(Iy.info("OpenCode support disabled: this runtime is Node %s, requires %d.%d+ for built-in SQLite",process.versions.node,$e.major,$e.minor),!1)}async function Js(){let t=Ny();try{return(await(0,Su.stat)(t)).isFile()}catch{return!1}}h();ne();Ce();le();var DC=p("PushPendingStore");var NC=10080*60*1e3;var Oy=300*1e3,OC=Math.floor(Oy/3);jo();h();Re();var BC=p("PushCompensation");h();Hn();h();Tr();var YC=p("KBRepoDiscoverer");h();ne();Hn();Ce();le();var ox=p("PushControlStore");Xe();function Gs(){return"claude-plugin"}h();ne();var $y={app_installed:"First run after install; installId minted (once per machine). Props: none \u2014 count distinct install_id.",client_activated:"A GUI surface activated (VS Code activate / IntelliJ project open), carrying `surface_version`. First-seen (install_id, surface_version) \u2248 new + upgrade installs that launched. GUI-only \u2014 CLI new/upgrade is read from any event's surface_version.",surface_enabled:"A surface was enabled in a repo. Props: trigger.",surface_disabled:"A surface was disabled / opted out. Props: trigger, reason.",push_enabled:"Outbound push re-enabled for a repo (spec 306, per-repo push control). Props: trigger.",push_disabled:"Outbound push disabled for a repo (spec 306, per-repo push control). Props: trigger.",signin_started:"User initiated OAuth sign-in. Props: trigger.",signin_completed:"jolliApiKey minted \u2014 the conversion event. Props: api_key_minted.",signed_out:"User logged out. Props: none.",ai_provider_selected:"User chose jolli vs anthropic for LLM. Props: provider (discriminator).",memory_bank_migrated:"Migrate-to-Memory-Bank run. Props: outcome, repos, entries_bucket.",onboarding_progressed:"Per-install onboarding-funnel snapshot, emitted from a repo context and deduped by state tuple (+ daily heartbeat). Content-free \u2014 answers 'after install, where do people stall'. Props: in_git_repo, repo_enabled, capture_configured, capture_method (discriminator: local-agent/anthropic/jolli/none), memories_generated, memories_bucket.",command_invoked:'Any CLI command ran (auto-emitted). Props: command (discriminator), ok, duration_ms. MCP tool calls carry a `tool` property and are emitted per call (not per session); the session-level `command:"mcp"` event is suppressed.',recall_performed:"A recall was run. Props: hit, result_count_bucket.",search_performed:"A search was run. Props: query_len_bucket, result_count_bucket.",memory_pushed:"Memories pushed to a Space. Props: kind, created, plans_bucket.",export_performed:"Export run. Props: format (discriminator).",ai_source_detected:"A new AI source transcript was detected. Props: source (discriminator: claude/codex/cursor/\u2026).",settings_opened:"Settings UI opened (vscode/intellij). Props: tab (discriminator).",ingest_completed:"A drainIngest run finished. Props: outcome, ingested, idle (no-op when ingested=0), batches, route_calls, reconcile_calls, touched_slugs, topic_failures, duration_ms. Filter idle=true out for real-ingest latency/health metrics.",error_occurred:"A structured error was raised. Content-free schema: { where (stage/subsystem), code (enumerated), source? , retryable? }. Emitted via trackError(); never carries a message/stack/path.",queue_drained:"QueueWorker finished a drain. Props: ops, duration_ms.",sync_completed:"A memory-bank sync round finished. Props: outcome (discriminator), duration_ms.",toolwindow_opened:"The memory tool window was opened. Props: view.",view_switched:"Tool window view switched (current/bank/knowledge). Props: view (discriminator).",memory_committed:"User committed a memory via the Commit button. Props: files_bucket (bucketed changed-file count), has_conversations (bool), context_bucket (bucketed plans/context count).",memory_expanded:"A committed memory's details were expanded. Props: expanded.",memory_item_opened:"An item inside a memory was opened. Props: item_type (discriminator: conversation/file/plan/note/reference/shipped); render (conversation only: live/stored \u2014 whether the source transcript was reopened or the stored copy was shown); source (conversation only: the transcript source, e.g. claude/codex); status (file only: the git status code, e.g. A/M/D).",session_resumed:"A conversation session was resumed in a terminal. Props: source (discriminator).",recall_prompt_copied:"A recall prompt was copied to the clipboard. Props: none.",memory_ref_id_copied:"A memory reference id (JM-<docId>) was copied to the clipboard. Props: surface_area (discriminator: list/detail \u2014 which UI the chip was clicked in).",memory_pinned:"An item was pinned. Props: kind (discriminator).",memory_unpinned:"An item was unpinned. Props: kind (discriminator).",repo_switched:"User switched the active repo in the tool window's breadcrumb. Props: is_foreign (bool).",branch_switched:"User switched the active branch in the tool window's breadcrumb. Props: is_foreign (bool).",squash_performed:"User squashed commits. Props: count_bucket (bucketed number of commits squashed).",pr_created:"User created or updated a PR from the tool window. Props: action (discriminator: created/updated).",memory_shared:"User invoked Share for a branch's memories (read-only share link). Props: none.",key_rejected:"The server rejected the API key (401/403). Props: retried, where.",reauth_completed:"Re-authentication after a rejected key finished. Props: outcome.",dashboard_opened:"The local web dashboard was opened in a browser (surface web-local). Props: first_run (bool \u2014 first open in this browser profile; per-origin localStorage, so it re-reports across ports, browsers, or a storage clear).",dashboard_view_switched:"The local web dashboard's left-nav view was switched. Props: view (discriminator: stats/standup/repositories/memories). Distinct from view_switched, which is the IDE tool-window event with its own view vocabulary.",range_changed:"The dashboard time-range control was changed. Props: range (discriminator: 7d/30d/90d/custom).",chart_split_changed:"A dashboard card's split-by control was changed. Props: card (discriminator: tokens/mcp), split (discriminator)."};var dx=new Set(Object.keys($y));var Lx=p("PushControl");Xe();h();te();Ce();un();Wn();Mt();h();te();Xe();var Be=class{constructor(e){this.cwd=e;this.kind="orphan-branch"}async readFile(e){return Uo(fe,e,this.cwd)}async batchReadFiles(e){return Bo(fe,e,this.cwd)}async writeFiles(e,r){if(he())return;if(await lr(this.cwd??process.cwd()).catch(()=>null)!==null)throw new Error("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(Wn(),Mu));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new Error("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await Oa(fe,e,r,this.cwd)}async listFiles(e){return[...await Wo(fe,e,this.cwd)]}async exists(){return Ho(fe,this.cwd)}async ensure(){await Fo(fe,this.cwd)}};var wd=require("node:zlib");Lt();var gd=require("node:zlib");ur();function Jn(t){return t.version>=4}function zy(t){return[...t??[]].reverse()}function $t(t){let e=zy(t.children).flatMap($t),r=(t.topics??[]).map(n=>({...n,commitDate:t.commitDate,generatedAt:t.generatedAt}));return[...e,...r]}function $u(t){let e=t.stats,r=e?.filesChanged??0,n=e?.insertions??0,o=e?.deletions??0;for(let s of t.children??[]){let i=$u(s);r+=i.filesChanged,n+=i.insertions,o+=i.deletions}return{filesChanged:r,insertions:n,deletions:o}}function xr(t){return t.diffStats?t.diffStats:(t.children?.length??0)>0?$u(t):t.stats??{filesChanged:0,insertions:0,deletions:0}}function ri(t){let e=t.conversationTurns??0,r=(t.children??[]).reduce((n,o)=>n+ri(o),0);return e+r}function ni(t){let e=t.conversationTokens??0,r=(t.children??[]).reduce((n,o)=>n+ni(o),0);return e+r}function oi(t){let e=t.conversationTokenBreakdown,r={input:e?.input??0,output:e?.output??0,cached:e?.cached??0};return(t.children??[]).reduce((n,o)=>{let s=oi(o);return{input:n.input+s.input,output:n.output+s.output,cached:n.cached+s.cached}},{input:r.input,output:r.output,cached:r.cached})}function qn(t){let e=[],r=n=>{if(!n.children?.length)e.push(n);else for(let o of n.children)r(o)};for(let n of t.children??[])r(n);return e}function Gn(t){return Jn(t)?(t.topics??[]).map(e=>({...e,commitDate:t.commitDate,generatedAt:t.generatedAt})):$t(t)}function Pr(t){let e=[t.commitHash];for(let r of t.children??[])e.push(...Pr(r));return e}function jt(t,e){return t.transcripts!==void 0?t.transcripts:Pr(t).filter(r=>e.has(r))}function Qy(t){let e=qn(t);return e.length<=1?1:new Set(e.map(n=>new Date(n.generatedAt||n.commitDate).toISOString().substring(0,10))).size}function ju(t){let e=Qy(t),r=e===1?"1 day":`${e} days`,n=qn(t);if(n.length<=1)return r;let o=n.map(l=>new Date(l.generatedAt||l.commitDate).getTime()),s=new Date(Math.min(...o)),i=new Date(Math.max(...o)),a=l=>l.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});return`${r} (${a(s)} \u2014 ${a(i)})`}h();Lt();te();h();h();ss();te();Ce();un();var Hu=/-[0-9a-f]{8}$/;ur();var Zy="local-agent-auth";function Fu(t){return t.summaryError===Zy}gn();var ew=new Set(["linear","jira","github"]);function tw(t){return ew.has(t)}function si(t){return tw(t.source)?`${t.nativeId} \u2014 ${t.title}`:t.title}function q(t){return t.generatedAt||t.commitDate}function Bu(t){try{return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})}catch{return t}}function ii(t){try{return new Date(t).toLocaleString("en-US",{year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"2-digit"})}catch{return t}}function Uu(t){return t.substring(0,10)}function rw(t){return[...t].sort((e,r)=>{let n=Uu(e.generatedAt||e.commitDate||""),o=Uu(r.generatedAt||r.commitDate||"");if(n!==o)return n>o?-1:1;let s=e.importance==="minor"?1:0,i=r.importance==="minor"?1:0;return s-i})}function Wu(t){return String(t+1).padStart(2,"0")}var nw={"anthropic-config":"Anthropic","anthropic-env":"Anthropic (env)","jolli-proxy":"Jolli proxy","local-agent":"Local agent"};function ow(t,e){return e==="local-agent"?t.localAgentTool?`Local agent - ${Ze(t.localAgentTool)}`:"Local agent":nw[e]}function Ju(t){let e=new Set,r=o=>{let s=o.llm;s?.source&&e.add(ow(s,s.source));for(let i of o.children??[])r(i)};r(t);let n=[...e];if(n.length!==0)return n.length===1?n[0]:`mixed: ${n.join(", ")}`}function qu(t){let e=qn(t),r=Gn(t);return{topics:rw(r.map((o,s)=>({...o,treeIndex:s}))),sourceNodes:e}}us();var sw=/^transcripts\/(.+)\.json$/;function ai(t){return sw.exec(t)?.[1]??null}var iw;async function aw(t){let e=await Vn(t);return e.ok?e.storage:(li.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",e.reason,t),new Be(t))}async function lw(t,e){return t??iw??await aw(e)}var li=p("SummaryStore"),cw="index.json";function Gu(t){let e=[];for(let r of t)r.e2eTestGuide&&e.push(...r.e2eTestGuide),r.children&&e.push(...Gu(r.children));return e}function Ku(t){let{e2eTestGuide:e,...r}=t;return r.children?{...r,children:r.children.map(Ku)}:r}function Vu(t){let e=new Map;for(let r of t){if(r.plans)for(let n of r.plans){let o=n.slug,s=e.get(o);(!s||n.updatedAt>s.updatedAt)&&e.set(o,n)}if(r.children)for(let n of Vu(r.children)){let o=e.get(n.slug);(!o||n.updatedAt>o.updatedAt)&&e.set(n.slug,n)}}return[...e.values()]}function Xu(t){let{plans:e,...r}=t;return r.children?{...r,children:r.children.map(Xu)}:r}function Yu(t){let e=new Map;for(let r of t){if(r.notes)for(let n of r.notes){let o=e.get(n.id);(!o||n.updatedAt>o.updatedAt)&&e.set(n.id,n)}if(r.children)for(let n of Yu(r.children)){let o=e.get(n.id);(!o||n.updatedAt>o.updatedAt)&&e.set(n.id,n)}}return[...e.values()]}function zu(t){let{notes:e,...r}=t;return r.children?{...r,children:r.children.map(zu)}:r}function Qu(t){let{references:e,...r}=t;return r.children?{...r,children:r.children.map(Qu)}:r}function Zu(t){let e=new Map;for(let r of t){let n=r.references??[];for(let o of n){let s=e.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&e.set(o.archivedKey,o)}if(r.children)for(let o of Zu(r.children)){let s=e.get(o.archivedKey);(!s||o.referencedAt>s.referencedAt)&&e.set(o.archivedKey,o)}}return[...e.values()]}function ed(t){let e=[];for(let r of t)e.push(...r.skills??[]),r.children&&e.push(...ed(r.children));return Fl(e)}function td(t){let{jolliDocId:e,jolliDocUrl:r,jolliSkillsDocId:n,jolliSkillsDocUrl:o,orphanedDocIds:s,unresolvedOrphanHashes:i,...a}=t;return a.children?{...a,children:a.children.map(td)}:a}function rd(t){let e=[];for(let o of t){let s=o.jolliDocUrl;if(o.jolliDocId&&s&&e.push({jolliDocId:o.jolliDocId,jolliDocUrl:s,commitDate:o.commitDate,generatedAt:o.generatedAt}),o.children){let i=rd(o.children);i.winner&&e.push({...i.winner})}}if(e.length===0)return{winner:null,orphanedDocIds:[]};e.sort((o,s)=>new Date(q(s)).getTime()-new Date(q(o)).getTime());let r=e[0],n=e.slice(1).map(o=>o.jolliDocId);return{winner:r,orphanedDocIds:n}}function nd(t){let e=[];for(let r of t??[])r.orphanedDocIds&&e.push(...r.orphanedDocIds),e.push(...nd(r.children));return e}function od(t){let e=[];for(let r of t??[])r.unresolvedOrphanHashes&&e.push(...r.unresolvedOrphanHashes),e.push(...od(r.children));return e}function sd(t){if(t.version>=4)return t;let e=Gu([t]),r=Vu([t]),n=Yu([t]),o=Zu([t]),s=ed([t]),i=s.map(Hl),a=rd([t]),l=Array.from(new Set([...a.orphanedDocIds,...t.orphanedDocIds??[],...nd(t.children),...s.flatMap(C=>C.supersededDocIds??[])])),c=Array.from(new Set([...t.unresolvedOrphanHashes??[],...od(t.children)])),d=uw(t),u=dw(t),m=t.diffStats===void 0&&t.stats!==void 0?xr(t):void 0,{stats:f,...w}=t;return{...w,version:4,topics:d,...u!==void 0?{recap:u}:{},...m!==void 0?{diffStats:m}:{},...e.length>0?{e2eTestGuide:e}:{},...r.length>0?{plans:r}:{},...n.length>0?{notes:n}:{},...o.length>0?{references:o}:{},...i.length>0?{skills:i}:{},...a.winner?{jolliDocId:a.winner.jolliDocId,jolliDocUrl:a.winner.jolliDocUrl}:{},...l.length>0?{orphanedDocIds:l}:{},...c.length>0?{unresolvedOrphanHashes:c}:{},...t.children!==void 0?{children:t.children.map(mw)}:{}}}function id(t){let{topics:e,...r}=t;return r.children?{...r,children:r.children.map(id)}:r}function ad(t){let{recap:e,...r}=t;return r.children?{...r,children:r.children.map(ad)}:r}function uw(t){return Jn(t)?t.topics??[]:$t(t).map(({commitDate:e,generatedAt:r,treeIndex:n,...o})=>o)}function dw(t){return Jn(t)||t.recap?t.recap:pw(t.children)}function pw(t){if(!t||t.length===0)return;let e=[];if(ld(t,e),e.length!==0)return e.sort((r,n)=>new Date(n.date).getTime()-new Date(r.date).getTime()),e[0]?.recap}function ld(t,e){for(let r of t)r.recap&&e.push({recap:r.recap,date:q(r)}),r.children&&ld(r.children,e)}function mw(t){return td(Qu(zu(Xu(Ku(id(ad(t)))))))}async function Kn(t,e){return fw(t,e)}async function fw(t,e){let r=await lw(e,t),n=await r.readFile(cw);if(!n)return li.debug("loadIndex: no index.json in %s storage",r.kind??"unknown"),null;try{return JSON.parse(n)}catch(o){return li.error("Failed to parse index.json: %s",o.message),null}}function cd(t){let e=Gn(t).map(r=>({title:r.title,...r.decisions!==void 0&&{decisions:r.decisions},...r.category!==void 0&&{category:r.category},...r.importance!==void 0&&{importance:r.importance},...r.filesAffected&&r.filesAffected.length>0&&{filesAffected:r.filesAffected}}));return{commitHash:t.commitHash,...t.recap!==void 0&&{recap:t.recap},...t.ticketId!==void 0&&{ticketId:t.ticketId},...e.length>0&&{topics:e}}}var rA=p("ProcessedSourceStore");Xe();ur();h();var iA=p("TopicIndexStore");h();var uA=p("TopicPageStore");h();Lt();Go();h();Lt();ei();Mt();var yA=p("ImportState");var wA=10*6e4;Mt();Fn();var WA=p("SotImport");function We(t){if(t==null)return null;try{return JSON.parse(t)}catch{return null}}function pd(t){let e=/^#\s+(.+)$/m.exec(t);return e?e[1].trim():null}var hw=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}];function md(t,e,r){for(let{path:n,accepts:o}of hw){let s=t;for(let a of n){if(s==null||typeof s!="object"){s=void 0;break}s=s[a]}s==null||(o==="integer"?Number.isInteger(s):typeof s=="number")||r("off-type numeric",`${e}.${n.join(".")} is ${typeof s} (${JSON.stringify(s)}) \u2014 column reads NULL`)}}function fd(t,e,r,n){let o=Date.parse(t.commitDate??"");return Number.isFinite(o)?o:(n("commit date",`${e} has no parsable commitDate \u2014 falling back to first-seen time`),r)}function hd(t,e){let r=t.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(e),n=new Map,o=[];for(let l of r)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=n.get(l.parent_hash)??[];c.push(l.commit_hash),n.set(l.parent_hash,c)}let s=t.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),i=new Map(r.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:d}=o.shift();a++;let u=i.get(l);(u.root_hash!==c||u.depth!==d)&&s.run(c,d,e,l);for(let m of n.get(l)??[])o.push({hash:m,root:c,depth:d+1})}if(a!==r.length)throw new Error(`remountRepo: ${r.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}Fn();var mt=p("SotWrite"),gw={plans:"plan",notes:"note",references:"reference",skills:"skill"};function yw(t){let e=[],r=(n,o,s)=>{e.push({hash:n.commitHash,parentInFile:o,pos:s,summary:n}),(n.children??[]).forEach((i,a)=>{r(i,n.commitHash,a)})};return r(t,null,null),e}function ww(t){let e={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let r of t){let n=r.delete===!0,o=r.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(n){e.summaryDeletes.push(o[1]);continue}let c=We(r.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${r.path}`);e.summaryTrees.push(yw(c));continue}if(r.path==="index.json"){if(n)continue;let c=We(r.content);for(let d of c?.entries??[])d.treeHash&&e.treeHashes.set(d.commitHash,d.treeHash);for(let[d,u]of Object.entries(c?.commitAliases??{}))e.aliases.set(d,u);continue}if(r.path==="catalog.json")continue;if(r.path==="topics/index.json"){if(n)continue;let c=We(r.content);for(let d of c?.topics??[])d.stableSlug&&d.summary!==void 0&&e.topicSummaries.set(d.stableSlug,d.summary);continue}if(r.path==="topics/processed.json"){e.processedSet=n?null:r.content;continue}if(r.path==="schema-v5-migration.json"){n||(e.v5State=r.content);continue}let s=r.path.match(/^transcripts\/(.+)\.json$/);if(s){n?e.transcriptDeletes.push(s[1]):e.transcriptWrites.push({id:s[1],content:r.content});continue}let i=r.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(i){let c=gw[i[1]];n?e.contextDeletes.push({kind:c,key:i[2]}):e.contextWrites.push({kind:c,key:i[2],body:r.content});continue}let a=r.path.match(/^plan-progress\/(.+)\.json$/);if(a){n?e.progressDeletes.push(a[1]):e.progressWrites.push({pathSlug:a[1],content:r.content});continue}let l=r.path.match(/^topics\/([^/]+)\.json$/);if(l){n?e.topicPageDeletes.push(l[1]):e.topicPageWrites.push({slug:l[1],content:r.content});continue}throw new Error(`SotWrite: no table backs path ${r.path}`)}return e}function Ir(t,e){mt.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",t,e)}function Sw(t,e,r){let n=/-([0-9a-f]{8})$/.exec(r);return n?t.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(e,n[1])?.branch??null:null}function Ew(t,e,r,n){for(let d of r.summaryDeletes)t.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(e,d);if(r.summaryTrees.length===0)return;let o=new Set;for(let d of r.summaryTrees)for(let u of d)"children"in u.summary&&o.add(u.hash);let s=t.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let d of o)s.run(e,d);let i=new Map;for(let d of r.summaryTrees)for(let u of d){if(u.parentInFile===null||u.pos===null)continue;let m=i.get(u.parentInFile)??new Map;m.set(u.hash,u.pos),i.set(u.parentInFile,m)}let a=t.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),l=(d,u)=>mt.info("write degraded a value: %s %s",d,u);for(let d of r.summaryTrees)for(let u of d){let m=u.parentInFile,f=u.pos;if(u.parentInFile===null){let _=t.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,u.hash);_&&(m=_.parent_hash,f=_.child_pos,f!==null&&f>=1e6&&((m===null?void 0:i.get(m))?.has(u.hash)||(m=null,f=null)))}let w=JSON.stringify("children"in u.summary?{...u.summary,children:[]}:u.summary);a.run(e,u.hash,m,f,u.hash,0,w,r.treeHashes.get(u.hash)??null,n,n,fd(u.summary,u.hash,n,l)),md(u.summary,u.hash,l),t.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(e,u.hash);let C=t.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(u.summary.topics??[]).forEach((_,S)=>{if(!_.title){l("topic",`${u.hash}[${S}] has no title`);return}C.run(e,u.hash,S,_.category??null,_.importance??null,_.title)})}let c=t.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`);for(let d of o)c.run(e,d);hd(t,e)}function bw(t,e,r,n){for(let[o,s]of r.aliases){if(!t.prepare("SELECT 1 AS ok FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,s)){mt.info("dropping alias %s -> %s (no such memory row)",o,s);continue}t.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(e,o,s,n)}}function kw(t,e,r,n){let o=new Set;for(let s of r.transcriptDeletes)t.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(e,s),t.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(e,s),t.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(e,s);for(let{id:s,content:i}of r.transcriptWrites){let a=We(i);if(!a||!Array.isArray(a.sessions)){Ir("transcript",s);continue}t.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(e,s,(0,gd.deflateSync)(Buffer.from(i,"utf8")),n),t.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(e,s);for(let l of a.sessions)l.sessionId&&t.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(e,s,l.sessionId,l.source??null);o.add(s)}return o}function Tw(t,e,r,n){if(n.size===0)return;let o=new Set(r.summaryTrees.flat().map(c=>c.hash)),s=new Set(r.summaryTrees.flat().flatMap(c=>[...jt(c.summary,n)])),i=[...n].filter(c=>!s.has(c));if(i.length===0)return;let a=t.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=t.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of i){let d=a.all(e,`%${c}%`);for(let u of d){if(o.has(u.commit_hash))continue;let m=We(u.summary_json);m&&jt(m,n).includes(c)&&(l.run(e,u.commit_hash,c),mt.info("linked stored transcript %s to memory %s written earlier",c,u.commit_hash))}}}function Rw(t,e,r){if(r.summaryTrees.length===0)return;let n=new Set(t.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(e).map(o=>o.transcript_id));for(let o of r.summaryTrees)for(let s of o){let i=[...new Set(jt(s.summary,n).filter(a=>n.has(a)))];for(let a of s.summary.transcripts??[])n.has(a)||mt.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",s.hash,a);t.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(e,s.hash);for(let a of i)t.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(e,s.hash,a)}}function _w(t,e,r,n){for(let{kind:s,key:i}of r.contextDeletes)t.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(e,s,i);let o=t.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:s,key:i,body:a}of r.contextWrites){if(s==="reference"){let d=cs(a);if(!d){Ir("reference frontmatter",`references/${i}.md`);continue}o.run(e,s,i,d.source,d.nativeId,d.toolName,d.referencedAt,null,null,d.title,d.url??null,a,n,n);continue}let l=s==="plan"||s==="note"?Sw(t,e,i):null,c=s==="plan"&&l!==null?i.replace(/-[0-9a-f]{8}$/,""):null;o.run(e,s,i,null,null,null,null,c,l,pd(a),null,a,n,n)}}function vw(t,e,r,n){for(let o of r.progressDeletes)t.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(e,o);for(let{pathSlug:o,content:s}of r.progressWrites){let i=We(s);if(!i){Ir("plan-progress",`plan-progress/${o}.json`);continue}let a=i.planSlug??o;if(!t.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(e,a)){mt.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}t.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(e,a,s,n)}}function Cw(t,e,r,n){for(let o of r.topicPageDeletes)t.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(e,o);for(let{slug:o,content:s}of r.topicPageWrites){let i=We(s);if(!i?.stableSlug||i.title===void 0||i.content===void 0||!i.lastUpdatedAt){Ir("topic page",`topics/${o}.json`);continue}t.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(e,i.stableSlug,i.title,r.topicSummaries.get(i.stableSlug)??null,i.content,JSON.stringify(i.relatedBranches??[]),i.lastUpdatedAt,i.schemaVersion??1),t.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(e,i.stableSlug),(i.sourceRefs??[]).forEach((a,l)=>{t.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(e,i.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,s]of r.topicSummaries){let i=t.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(s,e,o);Number(i.changes)===0&&mt.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(r.processedSet!==null){let o=We(r.processedSet);if(!o?.processed)Ir("processed set","topics/processed.json");else{t.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(e);let s=t.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[i,a]of Object.entries(o.processed))for(let l of a)s.run(e,i,l)}}r.v5State!==null&&t.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(e,r.v5State)}function yd(t,e,r,n){let o=ww(r);Qs(t,()=>{t.exec("PRAGMA defer_foreign_keys = ON"),Ew(t,e,o,n),bw(t,e,o,n);let s=kw(t,e,o,n);Rw(t,e,o),Tw(t,e,o,s),_w(t,e,o,n),vw(t,e,o,n),Cw(t,e,o,n)})}h();function Sd(t){let e=new Map;for(let r of t){if(r.parent_hash==null)continue;let n=e.get(r.parent_hash)??[];n.push(r),e.set(r.parent_hash,n)}for(let r of e.values())r.sort((n,o)=>Number(n.child_pos)-Number(o.child_pos));return e}function ci(t,e){let r=JSON.parse(e.summary_json);return"children"in r&&(r.children=(t.get(e.commit_hash)??[]).map(n=>ci(t,n))),r}function xw(t,e,r){let n=t.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,r);if(!n)return;let o=(n.parent_hash===null?t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):t.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(e,n.parent_hash===null?n.root_hash:r),s=o.find(i=>i.commit_hash===r);return s?ci(Sd(o),s):void 0}function Pw(t){if(t===null)return{};try{return{diffStats:JSON.parse(t)}}catch{return{}}}var Ht=class{constructor(e,r){this.repoIdentity=e;this.dbPath=r;this.kind="sqlite"}async withDb(e){return zs(r=>{let n=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!n)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return e(r,n.id)},{dbPath:this.dbPath})}async withDbOrAbsent(e,r){return zs(n=>{let o=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?e(n,o.id):r},{dbPath:this.dbPath})}async readFile(e){return this.withDbOrAbsent((r,n)=>this.readOne(r,n,e),null)}async batchReadFiles(e){return this.withDbOrAbsent((r,n)=>{let o=new Map;for(let s of e)o.set(s,this.readOne(r,n,s));return o},new Map(e.map(r=>[r,null])))}readOne(e,r,n){let o=n.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=xw(e,r,o[1]);return c?JSON.stringify(c,null,"	"):null}if(n==="index.json")return this.synthIndex(e,r);if(n==="catalog.json")return this.synthCatalog(e,r);if(n==="topics/index.json")return this.synthTopicIndex(e,r);if(n==="topics/processed.json")return this.synthProcessed(e,r);if(n==="schema-v5-migration.json")return e.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(r)?.value??null;let s=n.match(/^topics\/([^/]+)\.json$/);if(s)return this.synthTopicPage(e,r,s[1]);let i=n.match(/^transcripts\/(.+)\.json$/);if(i){let c=e.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(r,i[1]);return c?(0,wd.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=n.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return e.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(r,c,a[2])?.body_md??null}let l=n.match(/^plan-progress\/(.+)\.json$/);return l?e.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(r,l[1])?.artifact_json??null:null}allMemories(e,r){return e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(r)}synthIndex(e,r){let n=e.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(r);if(n.length===0)return null;let o=new Map(e.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(r).map(a=>[a.root,a.n])),s=n.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...Pw(a.diff_stats_json)}})),i=e.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(r);return JSON.stringify({version:3,entries:s,...i.length>0&&{commitAliases:Object.fromEntries(i.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(e,r){let n=this.allMemories(e,r);if(n.length===0)return null;let o=Sd(n),s=n.filter(i=>i.parent_hash===null).map(i=>cd(ci(o,i)));return JSON.stringify({version:1,entries:s},null,"	")}topicRefs(e,r,n){return e.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(r,n).map(s=>({type:s.ref_type,id:s.ref_id,timestamp:s.ts,...s.branch!==null&&{branch:s.branch}}))}synthTopicPage(e,r,n){let o=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(r,n);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(e,r,n),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(e,r){let n=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(r);if(n.length===0)return null;let o=n.map(s=>({stableSlug:s.stable_slug,title:s.title,...s.summary!==null&&{summary:s.summary},relatedBranches:JSON.parse(s.related_branches_json),sourceRefs:this.topicRefs(e,r,s.stable_slug),lastUpdatedAt:s.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(e,r){let n=e.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(r);if(n.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let s of n)o[s.source_type].push(s.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(e){return this.withDbOrAbsent((r,n)=>{let o=(i,a)=>r.prepare(i).all(n).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",i=>`summaries/${i}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",i=>`transcripts/${i}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",i=>`plans/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",i=>`notes/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",i=>`references/${i}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",i=>`skills/${i}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",i=>`plan-progress/${i}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",i=>`topics/${i}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",i=>i),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",i=>i)].filter(i=>i.startsWith(e)).sort()},[])}async writeFiles(e,r){he()||await Nu(n=>{let o=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);yd(n,o.id,e,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(r),o=e.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(r);return{memoriesCount:n.n,memoriesNewestMs:n.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(e){return this.withDbOrAbsent((r,n)=>r.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(n,e)?.target_hash??null,null)}async findShallowestByTreeHash(e){return this.withDbOrAbsent((r,n)=>r.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(n,e)?.commit_hash??null,null)}async findHashesByPrefix(e){return/^[0-9a-f]+$/.test(e)?this.withDbOrAbsent((r,n)=>r.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(n,e).map(s=>s.commit_hash),[]):[]}async listHeadEntries(e){return this.withDbOrAbsent((r,n)=>r.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${e!==void 0?" AND branch = ?":""}`).all(...e!==void 0?[n,e]:[n]).map(s=>({commitHash:s.commit_hash,parentCommitHash:null,...s.tree_hash!==null?{treeHash:s.tree_hash}:{},...s.commit_type!==null?{commitType:s.commit_type}:{},commitMessage:s.commit_message??"",commitDate:s.commit_date??"",branch:s.branch??"",generatedAt:s.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(r),o=new Map;for(let s of n){let i=o.get(s.commit_hash)??[];i.push(s.title),o.set(s.commit_hash,i)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(r),o=e.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(r),s=new Map;for(let i of o){let a=s.get(i.stable_slug)??[];a.push(i.ref_type),s.set(i.stable_slug,a)}return n.map(i=>({stableSlug:i.stable_slug,title:i.title,summary:i.summary,content:i.content_md,relatedBranches:JSON.parse(i.related_branches_json),lastUpdatedAt:i.last_updated_at,refTypes:s.get(i.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((e,r)=>e.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(r).map(o=>this.readOne(e,r,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}};var Aw=3e3,Ed=new Map;async function bd(t){let e=Date.now(),r=Ed.get(t);if(r&&e-r.at<Aw)return r.route;let n=await Cr(t);return Ed.set(t,{route:n,at:e}),n}async function kd(t,e,r){if(r.state==="legacy-fenced"||r.state==="cutover"){let{identity:n}=await pt(e);return new Ht(n)}return new Be(t)}async function Td(t){let e=t??process.cwd(),r=await bd(e);if(r.state==="blocked")throw new Error(`storage unavailable: ${r.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return kd(t,e,r)}async function Vn(t){let e=t??process.cwd(),r;try{r=await bd(e)}catch(n){return{ok:!1,reason:n.message}}if(r.state==="blocked")return{ok:!1,reason:r.reason};try{return{ok:!0,state:r.state,storage:await kd(t,e,r)}}catch(n){return{ok:!1,reason:n.message}}}var jd=require("node:path");Wn();Mt();h();h();var et=p("DualWriteStorage"),Dr=class{constructor(e,r){this.primary=e;this.shadow=r;this.kind="dual-write"}get kbRoot(){return this.shadow.kbRoot}async readFile(e){return this.primary.readFile(e)}async batchReadFiles(e){if(this.primary.batchReadFiles)return this.primary.batchReadFiles(e);let r=new Map;for(let n of e)r.set(n,await this.primary.readFile(n));return r}async writeFiles(e,r){if(!he()){await this.primary.writeFiles(e,r);try{await this.shadow.writeFiles(e,r),this.shadow.clearDirty?.()}catch(n){et.warn("Shadow write failed (folder storage): %s",n instanceof Error?n.message:String(n)),this.shadow.markDirty?.(r)}}}async deleteVisibleMarkdown(e){if(!this.shadow.deleteVisibleMarkdown)return!1;try{return await this.shadow.deleteVisibleMarkdown(e)}catch(r){let n=e.commitHash.substring(0,8);return et.warn("Shadow deleteVisibleMarkdown failed (folder storage) for %s/%s: %s",e.branch,n,x(r)),this.shadow.markDirty?.(`deleteVisibleMarkdown ${e.branch}/${n}`),!1}}async regenerateVisibleMarkdown(e){if(!this.shadow.regenerateVisibleMarkdown)return!1;try{return await this.shadow.regenerateVisibleMarkdown(e)}catch(r){let n=e.commitHash.substring(0,8);return et.warn("Shadow regenerateVisibleMarkdown failed (folder storage) for %s/%s: %s",e.branch,n,x(r)),this.shadow.markDirty?.(`regenerateVisibleMarkdown ${e.branch}/${n}`),!1}}async deletePlanVisible(e,r){if(this.shadow.deletePlanVisible)try{await this.shadow.deletePlanVisible(e,r)}catch(n){et.warn("Shadow deletePlanVisible failed (folder storage) for %s on %s: %s",e,r,x(n)),this.shadow.markDirty?.(`deletePlanVisible ${r}/${e}`)}}async deleteNoteVisible(e,r){if(this.shadow.deleteNoteVisible)try{await this.shadow.deleteNoteVisible(e,r)}catch(n){et.warn("Shadow deleteNoteVisible failed (folder storage) for %s on %s: %s",e,r,x(n)),this.shadow.markDirty?.(`deleteNoteVisible ${r}/${e}`)}}async pruneBranchMappings(e){if(!this.shadow.pruneBranchMappings)return 0;try{return await this.shadow.pruneBranchMappings(e)}catch(r){return et.warn("Shadow pruneBranchMappings failed (folder storage): %s",x(r)),this.shadow.markDirty?.(`pruneBranchMappings ${e.length}`),0}}async healMissingVisibleMarkdown(e){let r=this.shadow.healMissingVisibleMarkdown?this.shadow:this.primary.healMissingVisibleMarkdown?this.primary:null;if(!r)return{healed:0,skipped:0,failed:0};let n=e?.dropOrphanedManifestEntries??!0,o=r===this.shadow?"shadow":"primary";try{return await r.healMissingVisibleMarkdown?.({dropOrphanedManifestEntries:n})??{healed:0,skipped:0,failed:0}}catch(s){let i=s?.code,a=i?`[${i}] ${x(s)}`:x(s);return et.warn("%s healMissingVisibleMarkdown failed: %s",o,a),r.markDirty?.("healMissingVisibleMarkdown"),{healed:0,skipped:0,failed:0,error:a}}}async listFiles(e){return this.primary.listFiles(e)}async exists(){return this.primary.exists()}isDirty(){return this.shadow.isDirty?.()??!1}async ensure(){await this.primary.ensure();try{await this.shadow.ensure()}catch(e){et.warn("Shadow ensure failed: %s",e instanceof Error?e.message:String(e))}}async renderTopicWiki(e){await this.shadow.renderTopicWiki?.(e)}isTopicWikiPresent(){return this.shadow.isTopicWikiPresent?.()??!1}};var v=require("node:fs"),Md=require("node:fs/promises"),A=require("node:path");h();var j=require("node:fs");var Se=require("node:path");h();var Iw=p("Sync:VaultSymlinkGuard");function Dw(t,e){if(!(0,Se.isAbsolute)(e))throw new Error(`assertNoSymlinksInPathSync: absTargetPath must be absolute, got ${e}`);if(!(0,Se.isAbsolute)(t))throw new Error(`assertNoSymlinksInPathSync: vaultRoot must be absolute, got ${t}`);let r=(0,Se.relative)(t,e);if(r===""||r.startsWith("..")||(0,Se.isAbsolute)(r))throw new Error(`assertNoSymlinksInPathSync: target ${e} is not inside vault ${t}`);let n=r.split(Se.sep),o=t;for(let s=0;s<n.length-1;s++){let i=n[s];if(i===void 0||i.length===0)continue;o=`${o}${Se.sep}${i}`;let a;try{a=(0,j.lstatSync)(o)}catch(l){if(l.code==="ENOENT")return;throw l}if(a.isSymbolicLink())throw Iw.warn("Refusing vault write \u2014 symlink in path chain: %s",o),new Error(`Refused vault write: path segment is a symlink at ${o} (target ${e}). Inspect and unlink before retrying.`);if(!a.isDirectory())throw new Error(`Refused vault write: path segment is not a directory at ${o} (target ${e}).`)}}function ui(t,e,r){Dw(t,e),(0,j.mkdirSync)((0,Se.dirname)(e),{recursive:!0});let n=`${e}.tmp`,o=j.constants.O_WRONLY|j.constants.O_CREAT|j.constants.O_TRUNC|j.constants.O_NOFOLLOW,s=(0,j.openSync)(n,o,420);try{typeof r=="string"?(0,j.writeSync)(s,r,void 0,"utf-8"):(0,j.writeSync)(s,r)}finally{(0,j.closeSync)(s)}(0,j.renameSync)(n,e)}On();Ae();function Nw(t){return`skills--${t}`}function Xn(t){return`${Nw(t)}.md`}function Rd(t){let e=["| Skill | \xD7 | Tokens | Input | Output | Cached |","|---|---|---|---|---|---|"],r=[...t].sort((o,s)=>{let i=di(s)-di(o);return i!==0?i:o.skill<s.skill?-1:o.skill>s.skill?1:0}),n=!1;for(let o of r){let s=o.detection==="heuristic"?" \u2020":"";s!==""&&(n=!0),e.push(`| ${Ow(o.skill)}${s} | ${o.invocationCount} | ${Lw(o).join(" | ")} |`)}return n&&e.push("","\u2020 Inferred from a file read rather than an observed invocation: the count is per session, and a human reading the skill file looks the same."),e}function _d(t){let e=`${t.length} skill${t.length===1?"":"s"}`,r=0,n=!1,o=!1;for(let s of t)s.usage!==void 0&&(n=!0,r+=s.usage.input+s.usage.cached+s.usage.output,s.usage.confidence!=="attributed"&&(o=!0));return n?`${e} \xB7 ${Cd(r,o?"~":"")} tokens`:e}function vd(t,e){let r=t.commitHash.substring(0,8);return`${["---","type: skill-usage",`commitHash: ${t.commitHash}`,`branch: ${t.branch}`,`generatedAt: ${t.generatedAt}`,"---","",`# Skills used \u2014 ${r}`,"",`_${t.commitMessage}_`,"",...Rd(e),""].join(`
`)}
`}function Ow(t){return t.replace(/\\/g,"\\\\").replace(/\|/g,"\\|").replace(/[\r\n]+/g," ")}function di(t){let e=t.usage;return e===void 0?0:e.input+e.cached+e.output}function Lw(t){let e=t.usage;if(e===void 0)return["\u2014","\u2014","\u2014","\u2014"];let r=e.confidence==="attributed"?"":"~";return[di(t),e.input,e.output,e.cached].map(n=>Cd(n,r))}function Cd(t,e){return t<1e3?`${e}${t}`:`${e}${(t/1e3).toFixed(1)}k`}function Je(t){return t.replace(/[\\[\]]/g,"\\$&").replace(/[\r\n]+/g," ")}function xd(t){return t.replace(/[\\[\]~]/g,"\\$&").replace(/[\r\n]+/g," ")}function Yn(t){return t.replace(/[()\s<>"]/g,e=>e==="("?"%28":e===")"?"%29":encodeURIComponent(e))}gn();var Pd=3/1e6,Mw=15/1e6,$w=3.75/1e6;function Nr(t){return Math.round(t).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}function Ad(t){return t>=.01?`$${t.toFixed(2)}`:t>=5e-5?`$${t.toFixed(4)}`:t>0?"<$0.0001":"$0.00"}function Id(t,e){return t?t.input*Pd+t.output*Mw+t.cached*$w:e*Pd}function fi(t){let{topics:e,sourceNodes:r}=qu(t),n=[];return jw(n,t),Bw(n,t,{withRelevance:!0}),Hw(n,t),Ww(n,t.e2eTestGuide),Jw(n,r),Gw(n,e,qw),Kw(n),n.join(`
`)}function jw(t,e){let r=xr(e),n=r.filesChanged,o=ri(e),s=`${n} file${n!==1?"s":""} changed, +${r.insertions} insertions, \u2212${r.deletions} deletions`,i=ii(q(e));t.push(`# ${e.commitMessage}`,"",`- **Commit:** \`${e.commitHash}\``,`- **Branch:** \`${e.branch}\``,`- **Author:** ${e.commitAuthor}`,`- **Date:** ${i}`,`- **Duration:** ${ju(e)}`,`- **Changes:** ${s}`),o>0&&t.push(`- **Conversations:** ${o} turn${o!==1?"s":""}`);let a=ni(e);if(a>0){let c=oi(e),d=c.input>0||c.output>0||c.cached>0?c:void 0,u=Ad(Id(d,a)),m=d?` (${Nr(d.input)} input, ${Nr(d.output)} output, ${Nr(d.cached)} cached)`:"";t.push(`- **Task usage:** ${Nr(a)} tokens \xB7 ${u}${m}`)}let l=e.jolliDocUrl;l&&t.push(`- **Jolli Memory:** [${l}](${l})`),t.push("","---")}function Hw(t,e){let r=e.recap?.trim();r&&t.push("","## Quick recap","",r,"","---")}function Fw(t){let e=new Map;for(let o of t){let s=e.get(o.source)??[];s.push(o),e.set(o.source,s)}let r=hn().all().map(o=>o.id),n=[];for(let o of r){let s=e.get(o);s&&(n.push(...s),e.delete(o))}for(let o of e.values())n.push(...o);return n}function pi(t,e,r){return t.get(`${e}:${r}`)??t.get(`${e}:${r.replace(Hu,"")}`)}var Uw={high:"High",mid:"Med",low:"Low"};function mi(t){return!t||t.reason===""?"":` \u2014 ${Uw[t.tier]} \xB7 ${Je(t.reason)}`}function Bw(t,e,r){let n=e.plans??[],o=e.notes??[],s=r?.includeReferences?e.references??[]:[],i=r?.withRelevance?e.excludedContext??[]:[],a=new Map;if(r?.withRelevance)for(let u of e.contextRelevance??[])a.set(`${u.kind}:${u.key}`,{tier:u.tier,reason:u.reason});let l=e.skills??[],c=n.length+o.length+s.length+(l.length>0?1:0);if(c===0&&i.length===0)return;let d=c>1?` (${c})`:"";t.push("",`## Context${d}`,"");for(let u of n){let m=u.jolliPlanDocUrl,f=mi(pi(a,"plan",u.slug));t.push((m?`- [${Je(u.title)}](${Yn(m)})`:`- ${Je(u.title)}`)+f)}for(let u of o){let m=u.jolliNoteDocUrl,f=mi(pi(a,"note",u.id));t.push((m?`- [${Je(u.title)}](${Yn(m)})`:`- ${Je(u.title)}`)+f)}for(let u of Fw(s)){let m=Je(si(u)),f=u.jolliReferenceDocUrl??u.url,w=mi(pi(a,"reference",`${u.source}:${u.nativeId}`));t.push((f?`- [${m}](${Yn(f)})`:`- ${m}`)+w)}if(l.length>0){let u=l.some(m=>m.detection==="heuristic")?" \xB7 some inferred":"";t.push(`- Skills used \u2014 ${Je(_d(l))}${u}`)}for(let u of i)t.push(`- ~~${xd(u.title)}~~ \u2014 Excluded${u.reason?` \xB7 ${Je(u.reason)}`:""}`)}function Ww(t,e){if(!(!e||e.length===0)){t.push("",`## E2E Test (${e.length})`);for(let r=0;r<e.length;r++){let n=e[r];t.push("",`### ${r+1}. ${n.title}`),n.preconditions&&t.push("",`**Preconditions:** ${n.preconditions}`),t.push("","**Steps:**");for(let o=0;o<n.steps.length;o++)t.push(`${o+1}. ${n.steps[o]}`);t.push("","**Expected Results:**");for(let o of n.expectedResults)t.push(`- ${o}`)}t.push("","---")}}function Jw(t,e){if(!(e.length<=1)){t.push("",`## Source Commits (${e.length})`);for(let r of e){let n=xr(r),o=r.conversationTurns?` \xB7 ${r.conversationTurns} turns`:"";t.push(`- \`${r.commitHash.substring(0,8)}\` ${r.commitMessage}  _(+${n.insertions} \u2212${n.deletions}${o} \xB7 ${Bu(q(r))})_`)}t.push("","---")}}function qw(t,e){if(t.push("","**\u26A1 Why This Change**","",e.trigger),t.push("","**\u{1F4A1} Decisions Behind the Code**","",e.decisions),t.push("","**\u2705 What Was Implemented**","",e.response),e.todo&&t.push("","**\u{1F4CB} Future Enhancements**","",e.todo),e.filesAffected&&e.filesAffected.length>0){t.push("","**\u{1F4C1} FILES**");for(let r of e.filesAffected)t.push(`- \`${r}\``)}}function Gw(t,e,r,n={singular:"Summary",plural:"Summaries"}){if(e.length!==0){t.push("",`## ${e.length===1?n.singular:n.plural} (${e.length})`);for(let o=0;o<e.length;o++){let s=e[o],i=s.category?` \`${s.category}\``:"";t.push("",`### ${Wu(o)} \xB7 ${s.title}${i}`),r(t,s)}}}function Kw(t,e){let r=ii(new Date().toISOString()),n=e?Ju(e):void 0,o=n?` \xB7 via ${n}`:"";t.push("","---","",`*Generated by Jolli Memory \xB7 ${r}${o}*`)}var Dd="<!-- Generated by Jolli Memory \xB7 do not edit \u2014 regenerated on every merge -->";function Nd(t,e,r,n){let o=[];if(o.push(`# ${t.title}`),o.push(""),o.push(Dd),o.push(""),o.push(`> **Source branches:** ${e.join(", ")}`),o.push(`> **Merged:** ${r}`),o.push(`> **Topic slug:** \`${t.stableSlug}\` (stable across re-merges)`),o.push(""),o.push(t.content.trim()),o.push(""),t.keyDecisions&&t.keyDecisions.length>0){o.push("## Key Decisions"),o.push("");for(let s of t.keyDecisions)o.push(`- ${s}`);o.push("")}if(t.sourceCommits.length>0){o.push("## Source Commits"),o.push("");for(let s of t.sourceCommits){let i=s.substring(0,8),a=n.resolveCommitVisiblePath(i),l=n.resolveCommitMessage(i);a&&l?o.push(`- ${hi(i,Vw(a))} \u2014 ${l}`):l?o.push(`- \`${i}\` \u2014 ${l}`):o.push(`- \`${i}\``)}o.push("")}if(t.relatedBranches&&t.relatedBranches.length>0){o.push("## Related Branches"),o.push("");for(let s of t.relatedBranches){let i=n.resolveBranchFolder(s);i?o.push(`- ${hi(s,`../${i}/`)}`):o.push(`- \`${s}\``)}o.push("")}return o.join(`
`)}function Od(t){return{title:t.title,stableSlug:t.stableSlug,content:t.content,...t.relatedBranches.length>0&&{relatedBranches:[...t.relatedBranches]},sourceCommits:t.sourceRefs.filter(e=>e.type==="summary").map(e=>e.id)}}function Ld(t,e){let r=[];if(r.push(`# ${e.repoName} \xB7 Knowledge Wiki`),r.push(""),r.push(Dd),r.push(""),r.push(`> **${t.length} topics** in the knowledge base`),r.push(""),t.length>0){r.push("## Topics"),r.push("");for(let n of t)r.push(`- ${hi(n.title,`topic--${n.stableSlug}.md`)}`);r.push("")}return r.join(`
`)}function Vw(t){return t.startsWith("./")?t.substring(2):t}function hi(t,e){let r=t.replace(/[\\[\]]/g,"\\$&"),n=e.replace(/ /g,"%20").replace(/\(/g,"%28").replace(/\)/g,"%29");return`[${r}](${n})`}var T=p("FolderStorage"),zn=class t{constructor(e,r){this.rootPath=e;this.metadataManager=r;this.kind="folder"}get vaultRoot(){return(0,A.dirname)(this.rootPath)}get kbRoot(){return this.rootPath}async readFile(e){let r=(0,A.join)(this.rootPath,".jolli",e);try{return(0,v.readFileSync)(r,"utf-8")}catch(n){let o=n.code;return o==="ENOENT"||o==="ENOTDIR"||T.warn("readFile failed for %s: %s",r,x(n)),null}}async writeFiles(e,r){if(he())return;await this.ensure();let n=0,o=0;for(let s of e)s.delete?this.deleteHiddenFile(s.path)&&o++:(this.writeHiddenFile(s.path,s.content),n++,s.path.startsWith("summaries/")&&s.path.endsWith(".json")&&this.generateSummaryMarkdown(s.content),s.path.startsWith("plans/")&&s.path.endsWith(".md")&&this.generatePlanMarkdown(s.path,s.content,s.branch),s.path.startsWith("notes/")&&s.path.endsWith(".md")&&this.generateNoteMarkdown(s.path,s.content,s.branch));T.info("Wrote %d files, deleted %d (%s)",n,o,r)}async listFiles(e){let r=(0,A.join)(this.rootPath,".jolli",e);if(!(0,v.existsSync)(r))return[];let n=(0,A.join)(this.rootPath,".jolli"),o=[];return this.walkDir(r,n,o),o.sort()}async exists(){return(0,v.existsSync)(this.rootPath)}async ensure(){(0,v.mkdirSync)(this.rootPath,{recursive:!0}),this.metadataManager.ensure()}markDirty(e){let r=(0,A.join)(this.rootPath,".jolli","shadow-status.json"),n={dirty:!0,lastFailedAt:new Date().toISOString(),message:e};try{ui(this.vaultRoot,r,JSON.stringify(n,null,"	"))}catch(o){T.warn("markDirty suppressed: %s",x(o))}}clearDirty(){let e=(0,A.join)(this.rootPath,".jolli","shadow-status.json");try{(0,v.existsSync)(e)&&(0,v.unlinkSync)(e)}catch{}}isDirty(){let e=(0,A.join)(this.rootPath,".jolli","shadow-status.json");return(0,v.existsSync)(e)}async deleteVisibleMarkdown(e){let r=t.slugify(e.commitMessage),n=e.commitHash.substring(0,8);try{await this.deleteVisibleArtifact(`skill:${e.commitHash}`,e.branch,Xn(n))}catch(o){T.warn("Failed to delete skills aggregate for %s: %s",n,String(o))}return this.deleteVisibleArtifact(e.commitHash,e.branch,`${r}-${n}.md`)}async deletePlanVisible(e,r){await this.deleteVisibleArtifact(`plan:${e}`,r,`plan--${e}.md`)}async deleteNoteVisible(e,r){await this.deleteVisibleArtifact(`note:${e}`,r,`note--${e}.md`)}async pruneBranchMappings(e){let r=new Map,n=new Set(e);for(let s of this.metadataManager.listBranchMappings())n.has(s.branch)&&r.set(s.branch,s.folder);let o=this.metadataManager.unregisterBranches(e);return o===0?0:(await Promise.all([...r.values()].map(s=>this.rmdirIfEmpty((0,A.join)(this.rootPath,s)))),o)}async rmdirIfEmpty(e){try{await(0,Md.rmdir)(e)}catch(r){let n=r.code;if(n==="ENOENT"||n==="ENOTEMPTY"||n==="EEXIST")return;T.warn("rmdir(%s) failed (non-fatal): %s",e,x(r))}}resolveBranchForFolder(e){return this.metadataManager.listBranchMappings().find(n=>n.folder===e)?.branch??null}async deleteVisibleArtifact(e,r,n){let o=this.metadataManager.findById(e),s=this.metadataManager.resolveFolderForBranch(r),i=o?.path??`${s}/${n}`,a=(0,A.join)(this.rootPath,i);if(!(0,v.existsSync)(a))return o&&this.metadataManager.removeFromManifest(e),!1;if(o?.fingerprint&&this.isUserEditedOnDisk(a,o.fingerprint))return T.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",i),!1;try{return(0,v.unlinkSync)(a),o&&this.metadataManager.removeFromManifest(e),T.info("Deleted visible MD: %s",i),!0}catch(l){if(l.code==="ENOENT")return o&&this.metadataManager.removeFromManifest(e),!1;throw l}}async forceRegenerateVisibleMarkdown(e){let r=await this.readFile(`summaries/${e.commitHash}.json`);if(!r)return T.warn("forceRegenerateVisibleMarkdown: hidden summaries/%s.json missing \u2014 leaving visible file intact",e.commitHash.substring(0,8)),{ok:!1,reason:"missing"};try{JSON.parse(r)}catch(c){return T.warn("forceRegenerateVisibleMarkdown: malformed summaries/%s.json (%s) \u2014 leaving visible file intact",e.commitHash.substring(0,8),x(c)),{ok:!1,reason:"malformed"}}let n=this.metadataManager.resolveFolderForBranch(e.branch),o=t.slugify(e.commitMessage),s=e.commitHash.substring(0,8),i=`${n}/${o}-${s}.md`,a=(0,A.join)(this.rootPath,i);if((0,v.existsSync)(a))try{(0,v.unlinkSync)(a)}catch(c){return T.warn("forceRegenerateVisibleMarkdown: cannot unlink %s [%s]",i,String(c)),{ok:!1,reason:"unlinkFailed"}}return await this.regenerateVisibleMarkdown(e)?{ok:!0}:{ok:!1,reason:"missing"}}async regenerateVisibleMarkdown(e){let r=this.metadataManager.resolveFolderForBranch(e.branch),n=t.slugify(e.commitMessage),o=e.commitHash.substring(0,8),s=`${r}/${n}-${o}.md`,i=(0,A.join)(this.rootPath,s);if((0,v.existsSync)(i))return await this.healSkillsAggregate(e,r,o),!0;let a=await this.readFile(`summaries/${e.commitHash}.json`);if(!a)return T.warn("regenerateVisibleMarkdown: hidden summaries/%s.json missing",e.commitHash.substring(0,8)),!1;let l;try{l=JSON.parse(a)}catch(w){return T.warn("regenerateVisibleMarkdown: malformed summaries/%s.json \u2014 %s",e.commitHash.substring(0,8),x(w)),!1}let c=this.buildYamlFrontmatter(l),d=fi(l),u=`${c}
${d}`;this.atomicWrite(i,u);let m=this.metadataManager.findById(e.commitHash),f=V.sha256(u);return this.metadataManager.updateManifest({path:s,fileId:l.commitHash,type:"commit",fingerprint:f,source:{commitHash:l.commitHash,branch:l.branch,generatedAt:l.generatedAt},title:m?.title??l.commitMessage}),this.generateSkillsAggregate(l,r,o),T.info("Regenerated visible MD: %s",s),!0}async healMissingVisibleMarkdown(e){let n=this.metadataManager.readManifest().files.filter(c=>c.type==="commit"),o=0,s=0,i=0,a=[];for(let c of n){let d=(0,A.join)(this.rootPath,c.path);if((0,v.existsSync)(d)){s++;continue}let u=(0,A.join)(this.rootPath,".jolli","summaries",`${c.fileId}.json`),m;try{m=(0,v.readFileSync)(u,"utf-8")}catch(N){let H=N.code;if(H==="ENOENT"){i++,e?.dropOrphanedManifestEntries?(a.push(c.fileId),T.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 will drop manifest entry",c.fileId.substring(0,8))):T.warn("healMissingVisibleMarkdown: hidden JSON missing for %s \u2014 keeping manifest entry (no truth source to repopulate)",c.fileId.substring(0,8));continue}i++,T.warn("healMissingVisibleMarkdown: hidden JSON read failed for %s [%s]: %s \u2014 keeping manifest entry",c.fileId.substring(0,8),H??"?",x(N));continue}let f;try{f=JSON.parse(m)}catch(N){i++,T.warn("healMissingVisibleMarkdown: malformed hidden JSON for %s: %s",c.fileId.substring(0,8),x(N));continue}let w=this.metadataManager.resolveFolderForBranch(f.branch),C=t.slugify(f.commitMessage),_=f.commitHash.substring(0,8),S=`${w}/${C}-${_}.md`;if(S!==c.path){s++,T.warn("healMissingVisibleMarkdown: manifest path drift for %s \u2014 manifest=%s computed=%s \u2014 keeping manifest entry, run reconcile",c.fileId.substring(0,8),c.path,S);continue}let I={commitHash:f.commitHash,parentCommitHash:null,commitMessage:f.commitMessage,commitDate:f.commitDate,branch:f.branch,generatedAt:f.generatedAt};try{await this.regenerateVisibleMarkdown(I)?o++:(i++,T.warn("healMissingVisibleMarkdown: regenerate returned false for %s \u2014 retry on next pass",c.fileId.substring(0,8)))}catch(N){i++,T.warn("healMissingVisibleMarkdown: regenerate failed for %s: %s",c.fileId.substring(0,8),x(N))}}let l=a.length>0?this.dropManifestEntries(a):[];return(o>0||i>0)&&T.info("healMissingVisibleMarkdown: healed=%d skipped=%d failed=%d dropped=%d",o,s,i,l.length),l.length>0?{healed:o,skipped:s,failed:i,droppedIds:l}:{healed:o,skipped:s,failed:i}}dropManifestEntries(e){if(e.length===0)return[];let r=new Set(e),n=this.metadataManager.readManifest(),o=n.files.filter(i=>r.has(i.fileId)).map(i=>i.fileId);if(o.length===0)return[];let s=n.files.filter(i=>!r.has(i.fileId));return this.metadataManager.replaceFiles(s),o}isUserEditedOnDisk(e,r){if(!(0,v.existsSync)(e)||!r)return!1;let n;try{n=V.sha256((0,v.readFileSync)(e,"utf-8"))}catch(o){return T.warn("isUserEditedOnDisk: cannot read %s [%s] \u2014 treating as edited",e,String(o)),!0}return n!==r}generateSummaryMarkdown(e){let r;try{r=JSON.parse(e)}catch{return}let n=this.metadataManager.resolveFolderForBranch(r.branch),o=t.slugify(r.commitMessage),s=r.commitHash.substring(0,8),i=`${o}-${s}.md`,a=`${n}/${i}`,l=this.buildYamlFrontmatter(r),c=fi(r),d=`${l}
${c}`,u=(0,A.join)(this.rootPath,a),m=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(u,m?.fingerprint)){T.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(u,d);let f=V.sha256(d);this.metadataManager.updateManifest({path:a,fileId:r.commitHash,type:"commit",fingerprint:f,source:{commitHash:r.commitHash,branch:r.branch,generatedAt:r.generatedAt},title:r.commitMessage}),T.info("Markdown generated: %s",a),this.generateSkillsAggregate(r,n,s),r.children&&r.children.length>0&&this.cleanupSupersededDescendants(r.children,a)}async healSkillsAggregate(e,r,n){if((0,v.existsSync)((0,A.join)(this.rootPath,r,Xn(n))))return;let o=await this.readFile(`summaries/${e.commitHash}.json`);if(o)try{this.generateSkillsAggregate(JSON.parse(o),r,n)}catch{}}generateSkillsAggregate(e,r,n){let o=e.skills;if(o===void 0||o.length===0)return;let s=`${r}/${Xn(n)}`,i=(0,A.join)(this.rootPath,s),a=this.metadataManager.findByPath(s);if(this.isUserEditedOnDisk(i,a?.fingerprint)){T.info("FolderStorage: skip overwrite of user-edited %s",s);return}let l=vd(e,o);this.atomicWrite(i,l),this.metadataManager.updateManifest({path:s,fileId:`skill:${e.commitHash}`,type:"skill",fingerprint:V.sha256(l),source:{commitHash:e.commitHash,branch:e.branch,generatedAt:e.generatedAt},title:`Skills used \u2014 ${n}`}),T.info("Skills aggregate generated: %s",s)}cleanupSupersededDescendants(e,r){let n=[];t.collectDescendantHashes(e,n);for(let o of n){let s=this.metadataManager.findById(o);if(!s||s.type!=="commit"||s.path===r)continue;let i=(0,A.join)(this.rootPath,s.path);if(!(0,v.existsSync)(i)){this.metadataManager.removeFromManifest(o);continue}if(!s.fingerprint){T.warn("Skipping cleanup of %s \u2014 legacy entry has no fingerprint baseline",s.path);continue}if(this.isUserEditedOnDisk(i,s.fingerprint)){T.warn("Skipping cleanup of %s \u2014 file modified since manifest record (likely hand-edited)",s.path);continue}try{(0,v.unlinkSync)(i),this.metadataManager.removeFromManifest(o),T.info("Cleaned up superseded MD: %s",s.path)}catch(a){T.warn("Failed to delete superseded MD %s: %s",s.path,String(a))}}}static collectDescendantHashes(e,r){for(let n of e)r.push(n.commitHash),n.children&&n.children.length>0&&t.collectDescendantHashes(n.children,r)}buildYamlFrontmatter(e){let r=["---"];return r.push(`commitHash: ${e.commitHash}`),r.push(`branch: ${e.branch}`),r.push(`author: ${e.commitAuthor}`),r.push(`date: ${e.commitDate}`),r.push("type: commit"),e.commitType&&r.push(`commitType: ${e.commitType}`),e.stats&&(r.push(`filesChanged: ${e.stats.filesChanged}`),r.push(`insertions: ${e.stats.insertions}`),r.push(`deletions: ${e.stats.deletions}`)),r.push("---"),r.join(`
`)}async regenerateVisiblePlan(e,r){let n=await this.readFile(`plans/${e}.md`);if(!n)return T.warn("regenerateVisiblePlan: hidden plans/%s.md missing",e),!1;let o=this.metadataManager.resolveFolderForBranch(r),s=(0,A.join)(this.rootPath,o,`plan--${e}.md`);if((0,v.existsSync)(s))try{(0,v.unlinkSync)(s)}catch(i){return T.warn("regenerateVisiblePlan: cannot unlink %s [%s]",s,String(i)),!1}return this.generatePlanMarkdown(`plans/${e}.md`,n,r),!0}generatePlanMarkdown(e,r,n){let o=e.replace(/^plans\//,"").replace(/\.md$/,""),s=n?this.metadataManager.resolveFolderForBranch(n):this.resolveBranchFromSlug(o),i=`plan--${o}.md`,a=`${s}/${i}`,c=`${["---","type: plan",`slug: ${o}`,"---"].join(`
`)}

${r}`,d=(0,A.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){T.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let m=V.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`plan:${o}`,type:"plan",fingerprint:m,updatedAt:new Date().toISOString(),source:n?{branch:n}:{},title:this.extractTitle(r)??o}),T.info("Plan markdown generated: %s",a)}async regenerateVisibleNote(e,r){let n=await this.readFile(`notes/${e}.md`);if(!n)return T.warn("regenerateVisibleNote: hidden notes/%s.md missing",e),!1;let o=this.metadataManager.resolveFolderForBranch(r),s=(0,A.join)(this.rootPath,o,`note--${e}.md`);if((0,v.existsSync)(s))try{(0,v.unlinkSync)(s)}catch(i){return T.warn("regenerateVisibleNote: cannot unlink %s [%s]",s,String(i)),!1}return this.generateNoteMarkdown(`notes/${e}.md`,n,r),!0}generateNoteMarkdown(e,r,n){let o=e.replace(/^notes\//,"").replace(/\.md$/,""),s=n?this.metadataManager.resolveFolderForBranch(n):this.resolveBranchFromSlug(o),i=`note--${o}.md`,a=`${s}/${i}`,c=`${["---","type: note",`id: ${o}`,"---"].join(`
`)}

${r}`,d=(0,A.join)(this.rootPath,a),u=this.metadataManager.findByPath(a);if(this.isUserEditedOnDisk(d,u?.fingerprint)){T.info("FolderStorage: skip overwrite of user-edited %s",a);return}this.atomicWrite(d,c);let m=V.sha256(c);this.metadataManager.updateManifest({path:a,fileId:`note:${o}`,type:"note",fingerprint:m,source:n?{branch:n}:{},title:this.extractTitle(r)??o,updatedAt:new Date().toISOString()}),T.info("Note markdown generated: %s",a)}resolveBranchFromSlug(e){let r=e.split("-").at(-1);if(r.length>=7){let o=this.metadataManager.readManifest().files.find(i=>i.type==="commit"&&i.source?.commitHash?.startsWith(r));if(o?.source?.branch)return this.metadataManager.resolveFolderForBranch(o.source.branch);let s=(0,A.join)(this.rootPath,".jolli","index.json");if((0,v.existsSync)(s))try{let a=JSON.parse((0,v.readFileSync)(s,"utf-8")).entries.find(l=>l.commitHash.startsWith(r));if(a?.branch)return this.metadataManager.resolveFolderForBranch(a.branch)}catch{}}return"_shared"}extractTitle(e){let r=e.match(/^#\s+(.+)/m);return r?r[1].trim():null}writeHiddenFile(e,r){let n=(0,A.join)(this.rootPath,".jolli",e);this.atomicWrite(n,r)}deleteHiddenFile(e){let r=(0,A.join)(this.rootPath,".jolli",e);if(!(0,v.existsSync)(r))return!1;try{return(0,v.unlinkSync)(r),!0}catch{return!1}}walkDir(e,r,n){for(let o of(0,v.readdirSync)(e,{withFileTypes:!0})){let s=(0,A.join)(e,o.name);o.isDirectory()?this.walkDir(s,r,n):n.push(ze((0,A.relative)(r,s)))}}async renderTopicWiki(e){let r=(0,A.join)(this.rootPath,"_wiki");this.wipeWikiArtifacts(r);let n=this.buildWikiRenderContext();(0,v.mkdirSync)(r,{recursive:!0});let o=[];for(let s of e)try{let i=Od(s);o.push(i);let a=`_wiki/topic--${i.stableSlug}.md`,l=Nd(i,s.relatedBranches,s.lastUpdatedAt,n);this.atomicWrite((0,A.join)(this.rootPath,a),l),this.metadataManager.updateManifest({path:a,fileId:`wiki-topic-${i.stableSlug}`,type:"wiki",fingerprint:V.sha256(l),source:{generatedAt:s.lastUpdatedAt},title:i.title})}catch(i){T.warn("renderTopicWiki: failed to render topic %s: %s",s.stableSlug,x(i))}try{let s=Ld(o,n),i="_wiki/_index.md";this.atomicWrite((0,A.join)(this.rootPath,i),s),this.metadataManager.updateManifest({path:i,fileId:"wiki-index",type:"wiki",fingerprint:V.sha256(s),source:{generatedAt:new Date().toISOString()},title:`${n.repoName} Knowledge Wiki`})}catch(s){T.warn("renderTopicWiki: failed to render index: %s",x(s))}T.info("Topic-KB wiki regenerated: %d topics under %s",e.length,r)}isTopicWikiPresent(){return(0,v.existsSync)((0,A.join)(this.rootPath,"_wiki","_index.md"))}wipeWikiArtifacts(e){if(this.metadataManager.unregisterFilesByType("wiki"),!!(0,v.existsSync)(e))try{for(let r of(0,v.readdirSync)(e))if(r.endsWith(".md"))try{(0,v.unlinkSync)((0,A.join)(e,r))}catch(n){T.warn("FolderStorage.wipeWikiArtifacts: failed to unlink %s: %s",r,x(n))}}catch(r){T.warn("FolderStorage.wipeWikiArtifacts: failed to list %s: %s",e,x(r))}}buildWikiRenderContext(){let e=this.metadataManager.readConfig(),r=this.metadataManager.listBranchMappings(),n=new Map(r.map(i=>[i.branch,i.folder])),o=this.metadataManager.readManifest(),s=new Map;for(let i of o.files)i.type==="commit"&&i.source.commitHash&&s.set(i.source.commitHash.substring(0,8),i);return{repoName:e.repoName??"Memory Bank",resolveCommitVisiblePath:i=>{let a=s.get(i);return a?`../${a.path}`:null},resolveBranchFolder:i=>n.get(i)??null,resolveCommitMessage:i=>s.get(i)?.title??null}}atomicWrite(e,r){ui(this.vaultRoot,e,r)}static slugify(e){let r=e.toLowerCase().replace(/[^a-z0-9\s-]/g,"").replace(/\s+/g,"-").replace(/-{2,}/g,"-").replace(/^-+|-+$/g,"");return r.length>50&&(r=r.substring(0,50).replace(/-+$/,"")),r||"untitled"}};Tr();On();le();var Qn=p("StorageFactory");async function gi(t,e){let r;try{r=await ye()}catch(a){Qn.warn("Failed to load config, falling back to defaults: %s",a.message),r={}}r.storageMode!==void 0&&Qn.info("ignoring retired storageMode=%s \u2014 routing is decided by the cutover state",r.storageMode);let n=r.localFolder,o=await Cr(t);if(Qn.info("StorageFactory.create: route=%s, projectPath=%s",o.state,t),o.state==="blocked")throw new Error(`storage unavailable: ${o.reason} \u2014 this repo's orphan branch is frozen (cutover), so writes cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);if(o.state==="legacy-fenced"||o.state==="cutover"){let{identity:a}=await pt(t),l=new Ht(a);return Hs(t,n)?new Dr(l,$d(t,n)):l}if(!Hs(t,n))return Qn.warn("Not a claimable project (no git worktree, or inside the Memory Bank folder): %s \u2014 using orphan-only storage",t),new Be(e);let s=new Be(e),i=$d(t,n);return new Dr(s,i)}function $d(t,e){let r=ru(t),n=su(t),o=tu(r,n,e),s=new V((0,jd.join)(o,".jolli"));return new zn(o,s)}var ue=p("SchemaV5Migration"),Fd="schema-v5-migration.json",Hd=3e4;async function yi(t,e){let n=await(e??await gi(t??process.cwd(),t)).readFile(Fd);if(!n)return null;try{return JSON.parse(n)}catch(o){return ue.warn("Failed to parse v5 migration state \u2014 treating as absent: %s",o.message),null}}async function Xw(t,e,r){if(ln(t))return await r();if(!await Xo(t,{timeoutMs:Hd}))throw new Error(`${e}: could not acquire orphan-write lock within ${Hd}ms`);try{return await cn(t,r)}finally{await Yo(t)}}async function Ud(t){let e=await gi(t??process.cwd(),t),r=await yi(t,e);return r?.status==="completed"?(ue.info("Schema v5 migration already completed at %s \u2014 skipping",r.completedAt),{migrated:r.migratedCount,skipped:r.skippedCount,fresh:r.fresh,alreadyDone:!0}):await e.exists()?Xw(t,"migrateSchemaToV5",()=>zw(t,e)):(ue.info("Storage backend not initialized yet \u2014 skipping schema v5 migration (no data to migrate)"),{migrated:0,skipped:0,fresh:!0,alreadyDone:!1})}async function Yw(t,e){if(e.length===0)return new Map;if(t.batchReadFiles)return t.batchReadFiles(e);let r=new Map;for(let n of e)r.set(n,await t.readFile(n));return r}async function zw(t,e){let r=await yi(t,e);if(r?.status==="completed")return ue.info("Schema v5 migration completed by a concurrent run at %s \u2014 skipping",r.completedAt),{migrated:r.migratedCount,skipped:r.skippedCount,fresh:r.fresh,alreadyDone:!0};let n=new Date().toISOString(),o=await Vn(t),s=o.ok&&o.state==="uncutover"?await M(["rev-parse",`refs/heads/${fe}`],t).then(K=>K.stdout.trim()).catch(()=>null):null,i=await e.listFiles("summaries/");ue.info("Found %d summary files to inspect",i.length);let a=await e.listFiles("transcripts/"),l=new Set;for(let K of a){let Ge=ai(K);Ge&&l.add(Ge)}ue.info("Reading %d summaries...",i.length);let c=Date.now(),d=await Yw(e,i);ue.info("Read %d summaries in %d ms",d.size,Date.now()-c);let u=[],m=[],f=0,w=0;for(let K of i){let Ge=d.get(K);if(Ge===void 0)throw new Error(`readSummaries omitted ${K} \u2014 protocol contract violation (expected one entry per request)`);if(Ge===null){w++;continue}let wt;try{wt=JSON.parse(Ge)}catch(Yr){ue.warn("Skipping unparseable summary %s: %s",K,Yr.message),w++;continue}let Yt=Qw(wt,l),zt=JSON.stringify(Yt,null,"	");if(m.push({path:K,content:zt}),Yt===wt){w++;continue}u.push({path:K,content:zt}),f++}let C=i.length===0,_=f===0&&w>0,S=_?m:u,I=C?"Schema v5 migration: no pre-v5 data found":_?`Schema v5 migration: re-pushing ${w} v5 summaries to heal storage shadow`:`Schema v5 migration: ${f} upgraded, ${w} skipped`,N=Date.now();if(S.length>0&&(ue.info("Writing %d summary file(s) via active storage...",S.length),await e.writeFiles(S,I)),e.isDirty?.()??!1)return ue.warn("Schema v5 migration: storage shadow write failed (folder marked dirty) \u2014 leaving state PENDING; next startup will retry and re-push (migrated=%d, skipped=%d, took %d ms)",f,w,Date.now()-N),{migrated:f,skipped:w,fresh:C,alreadyDone:!1};let ke={version:1,status:"completed",startedAt:n,completedAt:new Date().toISOString(),migratedCount:f,skippedCount:w,fresh:C};return await e.writeFiles([{path:Fd,content:JSON.stringify(ke,null,"	")}],I),ue.info("Schema v5 migration complete: %d migrated, %d skipped, fresh=%s, recovery=%s (took %d ms)",f,w,C,_,Date.now()-N),s&&ue.info("Pre-migration orphan-branch SHA was %s (debug-only recovery anchor)",s),{migrated:f,skipped:w,fresh:C,alreadyDone:!1}}function Qw(t,e){if(t.version>=5&&t.transcripts!==void 0)return t;let r=sd(t);if(r.transcripts!==void 0)return{...r,version:5};let o=Pr(r).filter(i=>e.has(i));return{...r,version:5,transcripts:o}}le();h();var ht=require("node:fs/promises"),Bm=require("node:os"),Br=require("node:path");ne();h();var $m=require("node:crypto"),Wt=require("node:fs"),Hi=require("node:fs/promises"),ho=require("node:os"),qe=require("node:path");h();var Wd=require("node:fs"),eo=require("node:fs/promises"),Jd=require("node:os"),ft=require("node:path"),qd=require("node:url");ne();h();var Zw=/^[a-z0-9][a-z0-9-]*$/;function Or(t){return Zw.test(t)}var Zn=p("DistPathWriter");async function Lr(t,e,r,n){if(!Or(t))return Zn.warn("Refusing to write dist-paths entry for unsafe source tag: %s",JSON.stringify(t)),!1;let o=e??(0,ft.dirname)((0,qd.fileURLToPath)(__jmImportMetaUrl)),s=r??"0.99.11",i=(0,ft.join)(n??(0,ft.join)((0,Jd.homedir)(),".jolli","jollimemory"),"dist-paths"),a=(0,ft.join)(i,t);try{await(0,eo.mkdir)(i,{recursive:!0});let l=`${s}
${o}`,c;try{c=await(0,eo.readFile)(a,"utf-8")}catch{}if(c){let[d,u]=c.split(`
`);if(!!(d&&u&&Bd(u))&&!Bd(o))return Zn.info("Kept complete dist-paths/%s (version=%s) \u2014 candidate dist is incomplete: %s",t,d,o),!0}return c!==l&&await P(a,l),Zn.info("Wrote dist-paths/%s (version=%s, distDir=%s)",t,s,o),!0}catch(l){return Zn.warn("Failed to write dist-paths/%s: %s",t,l.message),!1}}var eS=["Cli.js","StopHook.js","SessionStartHook.js","PostCommitHook.js","PostRewriteHook.js","PrepareMsgHook.js","PostMergeHook.js","PrePushHook.js","QueueWorker.js","PrePushWorker.js"];function Bd(t){return eS.every(e=>(0,Wd.existsSync)((0,ft.join)(t,e)))}var Bt=Zt(Mm(),1);function fo(t,e){if(t.includes("-")||t.includes("+")||e.includes("-")||e.includes("+")){let i=c=>{let d=(0,Bt.valid)(c);return d||(/^\d+(\.\d+)*$/.test(c)?(0,Bt.coerce)(c)?.version??null:null)},a=i(t),l=i(e);if(a&&l)return(0,Bt.compare)(a,l);if(a)return 1;if(l)return-1}let r=/^\d+(\.\d+)*$/.test(t),n=/^\d+(\.\d+)*$/.test(e);if(!r&&!n)return 0;if(!r)return-1;if(!n)return 1;let o=t.split(".").map(Number),s=e.split(".").map(Number);for(let i=0;i<Math.max(o.length,s.length);i++){let a=(o[i]??0)-(s[i]??0);if(a!==0)return a}return 0}var ji=p("DistPathResolver"),ik=[[".cursor/","cursor"],[".windsurf/","windsurf"],[".antigravity/","antigravity"],[".vscode-oss/","vscodium"],[".positron/","positron"],[".trae/","trae"],[".vscode/","vscode"]];function Fi(t){let e=t.replace(/\\/g,"/");for(let[n,o]of ik)if(e.includes(n))return o;let r=e.match(/\/\.([a-z][a-z0-9-]*)\/extensions\//i);return r?.[1]?r[1].toLowerCase():(0,$m.createHash)("sha256").update(t).digest("hex").slice(0,8)}function jm(t){try{let r=(0,Wt.readFileSync)(t,"utf-8").trim().split(`
`).map(s=>s.trim());if(r.length<2)return null;let n=r[0],o=r[r.length-1];if(!o)return null;if(n.startsWith("source=")){let s=n.slice(7),i=s.indexOf("@");return i===-1?{source:s,version:"unknown",distDir:o}:{source:s.slice(0,i),version:s.slice(i+1),distDir:o}}return{source:"",version:n,distDir:o}}catch{return null}}function Ur(t){let e=(0,qe.join)(t??(0,qe.join)((0,ho.homedir)(),".jolli","jollimemory"),"dist-paths"),r;try{r=(0,Wt.readdirSync)(e).sort()}catch{return[]}let n=[];for(let o of r){let s=(0,qe.join)(e,o),i=jm(s);i&&n.push({source:o,version:i.version,distDir:i.distDir,available:(0,Wt.existsSync)(i.distDir)})}return n}async function Hm(t){let e=(0,qe.join)(t??(0,qe.join)((0,ho.homedir)(),".jolli","jollimemory"),"dist-paths"),r=[];for(let n of Ur(t))if(!n.available)try{await(0,Hi.unlink)((0,qe.join)(e,n.source)),r.push(n.source),ji.info("Pruned stale dist-paths/%s (dir gone: %s)",n.source,n.distDir)}catch(o){ji.warn("Failed to prune stale dist-paths/%s: %s",n.source,o.message)}return r}var Ui=["cli","vscode","cursor"];function go(t){let e=t.filter(o=>o.available);if(e.length===0)return;let r=e[0];for(let o=1;o<e.length;o++)fo(e[o].version,r.version)>0&&(r=e[o]);let n=e.filter(o=>fo(o.version,r.version)===0);for(let o of Ui){let s=n.find(i=>i.source===o);if(s)return s}return r}async function Fm(){let t=(0,qe.join)((0,ho.homedir)(),".jolli","jollimemory"),e=(0,qe.join)(t,"dist-path"),r=jm(e);if(!r)return!1;let n;if(r.source==="cli")n="cli";else{let o=Fi(r.distDir);n=/^[a-f0-9]{8}$/.test(o)?"vscode":o}return n==="vscode-extension"&&(n="vscode"),await Lr(n,r.distDir,r.version),await(0,Hi.unlink)(e).catch(()=>{}),ji.info("Migrated legacy dist-path -> dist-paths/%s (version=%s, distDir=%s)",n,r.version,r.distDir),!0}var Um=p("DispatchScripts"),ak=`#!/bin/bash
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

# Pass 1 \u2014 highest core version wins. Selection uses 'sort -V', which agrees with
# the in-process compareSemver (cli/src/install/DistPathResolver.ts) on every
# non-prerelease comparison. The comparison is STRICT greater-than: an equal
# version does NOT overwrite, so enumeration (alphabetical) order never decides a
# tie. (Known sort -V divergence: it ranks 1.0.0-rc.1 ABOVE 1.0.0; compareSemver
# follows semver and ranks it below. Too rare to hand-roll in POSIX sh.)
if [ -d "$DIR/dist-paths" ]; then
  for f in "$DIR/dist-paths"/*; do
    [ -f "$f" ] || continue
    VER=$(sed -n '1p' "$f")
    CANDIDATE=$(sed -n '2p' "$f")
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
    elif [ "$VER_CMP" != "$BEST_VER" ] && \\
         printf '%s\\n%s' "$BEST_VER" "$VER_CMP" | sort -V | tail -1 | grep -qxF "$VER_CMP"; then
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
  pf="$DIR/dist-paths/$PREFER"
  if [ -f "$pf" ]; then
    PVER=$(sed -n '1p' "$pf")
    PPATH=$(sed -n '2p' "$pf")
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
  for pref in ${Ui.join(" ")}; do
    pf="$DIR/dist-paths/$pref"
    [ -f "$pf" ] || continue
    PVER=$(sed -n '1p' "$pf")
    PPATH=$(sed -n '2p' "$pf")
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
`,lk=`#!/bin/bash
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
`,ck=`#!/bin/bash
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
`;async function Bi(t,e){let r=!1;try{r=await(0,ht.readFile)(t,"utf-8")===e}catch{}if(r){await(0,ht.chmod)(t,493);return}await P(t,e),await(0,ht.chmod)(t,493)}async function Wi(){let t=(0,Br.join)((0,Bm.homedir)(),".jolli","jollimemory");try{return await(0,ht.mkdir)(t,{recursive:!0}),await Bi((0,Br.join)(t,"resolve-dist-path"),ak),await Bi((0,Br.join)(t,"run-hook"),lk),await Bi((0,Br.join)(t,"run-cli"),ck),Um.info("Wrote resolve-dist-path, run-hook, and run-cli scripts to %s",t),!0}catch(e){return Um.warn("Failed to write resolve scripts: %s",e.message),!1}}var Wr=require("node:fs/promises"),yo=require("node:path");ne();h();var Wm=p("GeminiHookInstaller");async function Ji(t){let e=(0,yo.join)(t,".gemini"),r=(0,yo.join)(e,"settings.json"),n=we("gemini-after-agent"),o={},s;try{s=await(0,Wr.readFile)(r,"utf-8"),o=JSON.parse(s)}catch(d){if(d.code!=="ENOENT")throw d}let i=o.hooks??{},a=i.AfterAgent??[],l=at(a,bn);l.push({hooks:[{type:"command",command:n,name:"jolli-session-tracker"}]}),i.AfterAgent=l,o.hooks=i;let c=JSON.stringify(o,null,"	");return s===c?{path:r}:(await(0,Wr.mkdir)(e,{recursive:!0}),await P(r,c),Wm.info("Gemini AfterAgent hook installed"),{path:r})}async function qi(t){let e=(0,yo.join)(t,".gemini","settings.json"),r;try{let i=await(0,Wr.readFile)(e,"utf-8");r=JSON.parse(i)}catch{return}let n=r.hooks;if(!n)return;let o=n.AfterAgent??[];if(!mr(o,bn))return;let s=at(o,bn);s.length===0?delete n.AfterAgent:n.AfterAgent=s,Object.keys(n).length===0?delete r.hooks:r.hooks=n,await P(e,JSON.stringify(r,null,"	")),Wm.info("Gemini AfterAgent hook removed")}var G=require("node:fs/promises"),qr=require("node:path");ne();te();h();var wo=p("GitHookInstaller"),Jr="# >>> JolliMemory post-commit hook >>>",Gi="# <<< JolliMemory post-commit hook <<<",So="# >>> JolliMemory post-rewrite hook >>>",Jm="# <<< JolliMemory post-rewrite hook <<<",Eo="# >>> JolliMemory prepare-commit-msg hook >>>",qm="# <<< JolliMemory prepare-commit-msg hook <<<",bo="# >>> JolliMemory post-merge hook >>>",Gm="# <<< JolliMemory post-merge hook <<<",ko="# >>> JolliMemory pre-push hook >>>",Km="# <<< JolliMemory pre-push hook <<<";async function Vm(t){let e=await or(t),r=(0,qr.join)(e,"post-commit"),n=we("post-commit"),o=[Jr,n,Gi].join(`
`),s,i="";try{if(i=await(0,G.readFile)(r,"utf-8"),i.includes(Jr)){let l=new RegExp(`\\n*${rt(Jr)}[\\s\\S]*?${rt(Gi)}\\n*`,"g"),d=`${i.replace(l,`
`).trimEnd()}

${o}
`;return i===d?(await _o(r),{path:r}):(await P(r,d),await(0,G.chmod)(r,493),{path:r})}s="Existing post-commit hook found \u2014 Jolli Memory section appended",wo.warn(s)}catch{}let a;i?a=`${i}

${o}
`:a=`#!/bin/sh

${o}
`,await(0,G.mkdir)(e,{recursive:!0}),await P(r,a);try{await(0,G.chmod)(r,493)}catch{}return wo.info("Git post-commit hook installed"),{warning:s,path:r}}async function Xm(t){let e=we("post-rewrite",'"$1"'),r=[So,e,Jm].join(`
`);return To(t,"post-rewrite",r,So)}async function Ym(t){let e='"$HOME/.jolli/jollimemory/run-hook"',r=["__jolli_prepare_msg_previous_status=$?",`if [ -x ${e} ]; then ${e} prepare-commit-msg "$1" "$2" || true; fi`,'(exit "$__jolli_prepare_msg_previous_status")'].join(`
`),n=[Eo,r,qm].join(`
`);return To(t,"prepare-commit-msg",n,Eo)}async function zm(t){let e=we("post-merge"),r=[bo,e,Gm].join(`
`);return To(t,"post-merge",r,bo)}async function Qm(t){let e='"$HOME/.jolli/jollimemory/run-hook"',r=["__jolli_pre_push_previous_status=$?",`if [ -x ${e} ]; then ${e} pre-push "$@" || true; fi`,'(exit "$__jolli_pre_push_previous_status")'].join(`
`),n=[ko,r,Km].join(`
`);return To(t,"pre-push",n,ko)}async function To(t,e,r,n){let o=r.slice(r.lastIndexOf(`
`)+1),s=await or(t),i=(0,qr.join)(s,e),a,l="";try{if(l=await(0,G.readFile)(i,"utf-8"),l.includes(n)){let d=new RegExp(`\\n*${rt(n)}[\\s\\S]*?${rt(o)}\\n*`,"g"),m=`${l.replace(d,`
`).trimEnd()}

${r}
`;return l===m?(await _o(i),{path:i}):(await P(i,m),await(0,G.chmod)(i,493),{path:i})}a=`Existing ${e} hook found \u2014 Jolli Memory section appended`,wo.warn(a)}catch{}let c;l?c=`${l}

${r}
`:c=`#!/bin/sh

${r}
`,await(0,G.mkdir)(s,{recursive:!0}),await P(i,c);try{await(0,G.chmod)(i,493)}catch{}return wo.info("Git %s hook installed",e),{warning:a,path:i}}async function Zm(t){let e;try{let s=await or(t);e=(0,qr.join)(s,"post-commit")}catch{return{}}let r;try{r=await(0,G.readFile)(e,"utf-8")}catch{return{}}if(!r.includes(Jr))return{};let n=new RegExp(`\\n*${rt(Jr)}[\\s\\S]*?${rt(Gi)}\\n*`,"g"),o=r.replace(n,`
`);if(o.trim()==="#!/bin/sh"||o.trim()===""){let{rm:s}=await import("node:fs/promises");await s(e,{force:!0})}else await P(e,o),await _o(e);return{}}async function ef(t){await Ro(t,"post-rewrite",So,Jm)}async function tf(t){await Ro(t,"prepare-commit-msg",Eo,qm)}async function rf(t){await Ro(t,"post-merge",bo,Gm)}async function nf(t){await Ro(t,"pre-push",ko,Km)}async function Ro(t,e,r,n){let o;try{o=await or(t)}catch{return}let s=(0,qr.join)(o,e),i;try{i=await(0,G.readFile)(s,"utf-8")}catch{return}if(!i.includes(r))return;let a=new RegExp(`\\n*${rt(r)}[\\s\\S]*?${rt(n)}\\n*`,"g"),l=i.replace(a,`
`);if(l.trim()==="#!/bin/sh"||l.trim()===""){let{rm:c}=await import("node:fs/promises");await c(s,{force:!0})}else await P(s,l),await _o(s)}function rt(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}async function _o(t){try{((await(0,G.stat)(t)).mode&73)===0&&await(0,G.chmod)(t,493)}catch{}}var nt=require("node:fs/promises"),Ki=require("node:os"),Gr=require("node:path");h();var Jt=p("GlobalInstructionsInstaller"),Vi="<!-- >>> jolli memory instructions >>> -->",Xi="<!-- <<< jolli memory instructions <<< -->",of="## Jolli Memory",sf=[{host:"claude",relPath:[".claude","CLAUDE.md"]},{host:"gemini",relPath:[".gemini","GEMINI.md"]},{host:"codex",relPath:[".codex","AGENTS.md"]}];function uk(){return`${[Vi,of,"","This repository may have **Jolli Memory** enabled \u2014 a durable record of past","development the current code cannot show: why choices were made, how a topic was","handled before, what was already tried, and where work stopped. Treat it as a","first-class source and reach for it **proactively \u2014 before answering or guessing,","and even when the user never names Jolli** \u2014 whenever a request is memory-shaped","(about intent, history, or prior work). Its reads are read-only and cheap, so","lean toward consulting memory rather than guessing: a hit often changes the","answer, and a miss costs little.","","Two capabilities are available; invoke whichever recall / search skill or tool is","registered in this session \u2014 the exact name varies by host (a plugin skill, a","project skill, or e.g. an `mcp__jollimemory__*` MCP tool), so route by intent, not","by a fixed name:","","- **Recall** \u2014 deep context for one branch (the current branch by default): its","  decisions, a recap, and where work left off.","- **Search** \u2014 full-text lookup across *all* branches: decisions, topics, files.","","Consult memory FIRST, before answering from your own assumptions, when the request","is memory-shaped:","",'- **Why / intent** \u2014 "why is this like this", "why X and not Y", "what was the','  reasoning", or anything where the code shows *what* but not *why*. \u2192 Search (or',"  Recall when it's about the current branch).",'- **How it works / design** \u2014 "how does X work", "how is X built/designed", "how','  would I implement X", or walking through / extending an existing feature or',"  subsystem in this repo. The code shows the mechanism; memory holds why it is","  shaped that way and what was already tried. \u2192 Search (or Recall for the current","  branch). A quick lookup here is cheap and often surfaces rationale and pitfalls",`  the code comments don't \u2014 so search even though the ask starts with "how".`,'- **Prior art** \u2014 "have we done/hit this before", "how was <topic> handled", "is','  there a pattern for this", "where else do we do X", or a bug that may have been',"  seen before. \u2192 Search (decisions / topics / files across ALL branches).",`- **Resume** \u2014 "where were we", "pick up where I left off", "what's left on this`,'  branch", or returning to work after a break. \u2192 Recall (current-branch decisions',"  + recap + where work stopped).","- **Before non-trivial edits** \u2014 before refactoring, changing, or deleting code","  whose intent isn't obvious from the code itself, search memory first; a past","  decision may constrain the change, and skipping this risks re-breaking what a","  prior fix already addressed.","",'Routing: current-branch history or resume \u2192 Recall; cross-branch or "has this','come up before" \u2192 Search. When unsure whether memory helps, run a quick search',"first before answering from your own assumptions.","","Do NOT reach for memory on narrow, current-state facts you can read straight from","the code \u2014 one function's behavior, a type or signature, running a command, a","rename, formatting, or a literal text lookup \u2014 answer those from the code directly.","That exclusion is for single-symbol lookups only; do not let it swallow a",'whole-feature "how does it work / how is it designed" question \u2014 that is',"design-shaped, so search memory first (per the How it works / design rule above).","","Treat any concrete fact memory states as of-its-time: use it for why / intent /","prior context, but verify names, paths, and code shape against the current code","before relying on them. If no Jolli memory capability is registered here (Jolli","Memory not enabled in this repo), fall back to normal behavior.",Xi].join(`
`)}
`}function af(t){return t==="enabled"?{write:!0}:t==="disabled"?{write:!1,remove:!0}:{write:!1}}function dk(t,e){let r=t.split(`
`),n=r.indexOf(Vi),o=r.indexOf(Xi),s=e.slice(0,-1).split(`
`);if(n!==-1&&o!==-1&&o>n)return[...r.slice(0,n),...s,...r.slice(o+1)].join(`
`);let i=r.indexOf(of);if(i!==-1){let l=r.length;for(let u=i+1;u<r.length;u++)if(/^#{1,2} /.test(r[u])){l=u;break}let c=r.slice(0,i).join(`
`),d=r.slice(l).join(`
`);return`${c.length>0?`${c}
`:""}${e}${d}`}if(t.length===0)return e;let a=t.endsWith(`
`)?"":`
`;return`${t}${a}${e}`}async function pk(t,e){let r="";try{r=await(0,nt.readFile)(t,"utf-8")}catch(o){if(o.code!=="ENOENT"){Jt.warn("Failed to read %s: %s \u2014 skipping",t,o.message);return}}let n=dk(r,e);if(n!==r)try{await(0,nt.mkdir)((0,Gr.dirname)(t),{recursive:!0}),await(0,nt.writeFile)(t,n,"utf-8"),Jt.info("Updated %s with Jolli Memory instructions",t)}catch(o){Jt.warn("Failed to write %s: %s",t,o.message)}}async function lf(t){let e=uk(),r=(0,Ki.homedir)();for(let n of sf)t[n.host]&&await pk((0,Gr.join)(r,...n.relPath),e)}function mk(t){let e=t.split(`
`),r=e.indexOf(Vi),n=e.indexOf(Xi);if(r===-1||n===-1||n<r)return t;let o=r>0&&e[r-1]===""?r-1:r;return[...e.slice(0,o),...e.slice(n+1)].join(`
`)}async function fk(t){let e;try{e=await(0,nt.readFile)(t,"utf-8")}catch(n){n.code!=="ENOENT"&&Jt.warn("Failed to read %s: %s \u2014 skipping",t,n.message);return}let r=mk(e);if(r!==e)try{await(0,nt.writeFile)(t,r,"utf-8"),Jt.info("Removed Jolli Memory instructions from %s",t)}catch(n){Jt.warn("Failed to write %s: %s",t,n.message)}}async function cf(){let t=(0,Ki.homedir)();for(let e of sf)await fk((0,Gr.join)(t,...e.relPath))}var se=require("node:os"),L=require("node:path");le();h();var uf=require("node:fs"),Gt=require("node:fs/promises"),qt=require("node:path");le();h();var Yi=p("McpRegistration"),zi="jollimemory";function hk(t,e,r,n){return t==="win32"&&r?{command:"node",args:[r,...n]}:{command:e,args:[...n]}}function Qi(t,e,r){return hk(t,e,r,["mcp"])}function Zi(t){let e=go(Ur(t));return e?(0,qt.join)(e.distDir,"Cli.js"):void 0}function df(t){let e=go(Ur(t));if(!e)return;let r=(0,qt.join)(e.distDir,"McpLauncher.js");return(0,uf.existsSync)(r)?r:void 0}var pf="/.mcp.json";async function mf(t){let e=(0,qt.join)(t,".mcp.json"),r;try{r=JSON.parse(await(0,Gt.readFile)(e,"utf-8"))}catch(l){if(l.code!=="ENOENT"){Yi.warn("Skipping MCP registration: %s exists but is unreadable/invalid (%s)",e,String(l));return}r={}}let n=r.mcpServers??{},o=Z(),s=(0,qt.join)(o,"run-cli"),i=process.platform==="win32"?Zi(o):void 0;n[zi]=Qi(process.platform,s,i);let a={...r,mcpServers:n};await(0,Gt.writeFile)(e,`${JSON.stringify(a,null,2)}
`,"utf-8"),Yi.info("Registered MCP server in %s",e)}async function ff(t){let e=(0,qt.join)(t,".mcp.json"),r;try{r=JSON.parse(await(0,Gt.readFile)(e,"utf-8"))}catch{return}r.mcpServers?.[zi]&&(delete r.mcpServers[zi],await(0,Gt.writeFile)(e,`${JSON.stringify(r,null,2)}
`,"utf-8"),Yi.info("Removed MCP server from %s",e))}var gt=require("node:fs/promises"),gf=require("node:path");ne();h();var vo=p("CodexTomlWriter"),Co="[mcp_servers.jollimemory]";async function yf(t){try{return(await(0,gt.stat)(t)).mode&511}catch{return 384}}function hf(t){return`${Co}
command = ${JSON.stringify(t.command)}
args = ${JSON.stringify(t.args??[])}
`}function wf(t){if(t.startsWith(Co))return 0;let e=t.indexOf(`
${Co}`);return e===-1?-1:e+1}function Sf(t){let e=wf(t);if(e===-1)return t;let r=t.indexOf(`
[`,e+Co.length),n=r===-1?t.length:r+1,o=t.slice(0,e),s=t.slice(n);return o===""||s===""?o+s:`${o.replace(/\n+$/,"")}

${s}`}async function Ef(t,e){let r="";try{r=await(0,gt.readFile)(t,"utf-8")}catch(i){if(i.code!=="ENOENT"){vo.warn("Skipping Codex MCP: %s unreadable (%s)",t,String(i));return}}let n=Sf(r).replace(/\s*$/,""),o=n.length===0?hf(e):`${n}

${hf(e)}`;if(o===r){vo.info("Codex MCP server already registered in %s \u2014 no write needed",t);return}await(0,gt.mkdir)((0,gf.dirname)(t),{recursive:!0});let s=await yf(t);await P(t,o,s),vo.info("Registered Codex MCP server in %s",t)}async function bf(t){let e;try{e=await(0,gt.readFile)(t,"utf-8")}catch{return}wf(e)!==-1&&(await P(t,`${Sf(e).replace(/\s*$/,"")}
`,await yf(t)),vo.info("Removed Codex MCP server from %s",t))}var ot=require("node:fs/promises"),kf=require("node:path");h();var ea=p("JsonMcpWriter"),ta="jollimemory",Tf="mcpServers";async function De(t,e,r=Tf){let n;try{let s=await(0,ot.readFile)(t,"utf-8");n=s.trim()===""?{}:JSON.parse(s)}catch(s){if(s.code!=="ENOENT"){ea.warn("Skipping MCP registration: %s unreadable/invalid (%s)",t,String(s));return}n={}}let o=n[r]??{};o[ta]=e,await(0,ot.mkdir)((0,kf.dirname)(t),{recursive:!0}),await(0,ot.writeFile)(t,`${JSON.stringify({...n,[r]:o},null,2)}
`,"utf-8"),ea.info("Registered MCP server in %s",t)}async function Ne(t,e=Tf){let r;try{r=JSON.parse(await(0,ot.readFile)(t,"utf-8"))}catch{return}let n=r[e];n?.[ta]&&(delete n[ta],await(0,ot.writeFile)(t,`${JSON.stringify(r,null,2)}
`,"utf-8"),ea.info("Removed MCP server from %s",t))}var gk=p("HostRegistrars"),yk={host:"claude",scope:"repo",register:mf,remove:ff,gitExcludePaths:()=>[pf]};function Oe(){let t=Z(),e=process.platform==="win32"?Zi(t):void 0;return Qi(process.platform,(0,L.join)(t,"run-cli"),e)}function wk(){let t=Oe();if(process.platform!=="win32")return t;let e=df(Z());return e?{command:"node",args:[e]}:t}var Sk={host:"cursor",scope:"repo",register:t=>De((0,L.join)(t,".cursor","mcp.json"),{...Oe()}),remove:t=>Ne((0,L.join)(t,".cursor","mcp.json")),gitExcludePaths:()=>["/.cursor/mcp.json"]},Ek={host:"gemini",scope:"global",register:()=>De((0,L.join)((0,se.homedir)(),".gemini","settings.json"),{...Oe()}),remove:()=>Ne((0,L.join)((0,se.homedir)(),".gemini","settings.json")),gitExcludePaths:()=>[]},bk={host:"codex",scope:"global",register:()=>Ef((0,L.join)((0,se.homedir)(),".codex","config.toml"),wk()),remove:()=>bf((0,L.join)((0,se.homedir)(),".codex","config.toml")),gitExcludePaths:()=>[]},kk={host:"opencode",scope:"global",register:()=>{let t=Oe(),e={type:"local",command:[t.command,...t.args],enabled:!0};return De((0,L.join)((0,se.homedir)(),".config","opencode","opencode.json"),e,"mcp")},remove:()=>Ne((0,L.join)((0,se.homedir)(),".config","opencode","opencode.json"),"mcp"),gitExcludePaths:()=>[]},Tk={host:"copilot",scope:"global",register:()=>De((0,L.join)((0,se.homedir)(),".copilot","mcp-config.json"),{...Oe()}),remove:()=>Ne((0,L.join)((0,se.homedir)(),".copilot","mcp-config.json")),gitExcludePaths:()=>[]},Rk={host:"copilotChat",scope:"global",register:()=>{let t=Oe(),e={type:"stdio",command:t.command,args:t.args};return De((0,L.join)(He("Code"),"User","mcp.json"),e,"servers")},remove:()=>Ne((0,L.join)(He("Code"),"User","mcp.json"),"servers"),gitExcludePaths:()=>[]},_k={host:"cline",scope:"global",register:async()=>{for(let t of await Cs())await De(In(t),{...Oe()})},remove:async()=>{for(let t of kr())await Ne(In(t))},gitExcludePaths:()=>[]},vk={host:"devin",scope:"global",register:()=>De((0,L.join)((0,se.homedir)(),".config","devin","config.json"),{...Oe(),transport:"stdio"}),remove:()=>Ne((0,L.join)((0,se.homedir)(),".config","devin","config.json")),gitExcludePaths:()=>[]},Ck={host:"antigravity",scope:"global",register:()=>De((0,L.join)((0,se.homedir)(),".gemini","config","mcp_config.json"),{...Oe()}),remove:()=>Ne((0,L.join)((0,se.homedir)(),".gemini","config","mcp_config.json")),gitExcludePaths:()=>[]},xk={host:"kimi",scope:"global",register:()=>De((0,L.join)($n(),"mcp.json"),{...Oe()}),remove:()=>Ne((0,L.join)($n(),"mcp.json")),gitExcludePaths:()=>[]};function Kr(t){let e=[];return t.claude&&e.push(yk),t.cursor&&e.push(Sk),t.gemini&&e.push(Ek),t.codex&&e.push(bk),t.opencode&&e.push(kk),t.copilot&&e.push(Tk),t.copilotChat&&e.push(Rk),t.cline&&e.push(_k),t.devin&&e.push(vk),t.antigravity&&e.push(Ck),t.kimi&&e.push(xk),e}var Pk={claude:!0,codex:!0,cursor:!0,gemini:!0,opencode:!0,copilot:!0,copilotChat:!0,cline:!0,devin:!0,antigravity:!0,kimi:!0};async function ra(t,e,r,n){for(let o of t)try{await n(o)}catch(s){gk.warn("MCP %s failed for %s in %s (non-fatal): %s",r,o.host,e,String(s))}}async function Rf(t,e){let r=Kr(e).filter(n=>n.scope==="repo");await ra(r,t,"registration",n=>n.register(t))}async function _f(t){let e=Kr(t).filter(r=>r.scope==="global");await ra(e,"(global)","registration",r=>r.register(""))}async function na(t){let e=Kr(Pk).filter(r=>r.scope==="repo");await ra(e,t,"removal",r=>r.remove(t))}var ie=require("node:fs/promises"),z=require("node:path");ne();h();var me=p("SkillInstaller"),Kt="1.0.2",Cf=["jollimemory-recall","jolli-memory-recall"],Vr=[{host:"agents-std",relativeDir:[".agents","skills"],enabled:()=>!0}],xo=[".claude","skills"],oa=[{name:"jolli-recall",build:Ok},{name:"jolli-search",build:Lk},{name:"jolli-local-run",build:Mk},{name:"jolli-remote-run",build:$k},{name:"jolli",build:jk}],xf=["jolli-pr"],Pf=Vr.flatMap(t=>oa.map(e=>`/${t.relativeDir.join("/")}/${e.name}/`)),Vt=["/.claude/skills/jolli/"],Af=[...Vr.map(t=>`/${t.relativeDir.join("/")}/jolli/`),...Vt];async function Ak(t,e={}){for(let r of Cf)await If((0,z.join)(t,".claude","skills",r),"legacy");await sa(t);for(let r of Vr){if(!r.enabled(e))continue;let n=(0,z.join)(t,...r.relativeDir);for(let o of oa)await Of(n,o.name,o.build())}}async function sa(t){for(let e of Vr){let r=(0,z.join)(t,...e.relativeDir);for(let n of xf)await If((0,z.join)(r,n),"retired")}}async function If(t,e){let r=(0,z.join)(t,"SKILL.md"),n;try{n=await(0,ie.readFile)(r,"utf-8")}catch{return}if(!ia(n)){me.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",t);return}try{await(0,ie.rm)(t,{recursive:!0,force:!0}),me.info("Removed %s Jolli skill at %s",e,t)}catch(o){me.warn("Failed to remove %s skill at %s: %s",e,t,o.message)}}async function Df(t,e={}){return Ak(t,e)}async function Po(t){let e=(0,z.join)(t,...xo),r=(0,z.join)(e,"jolli","SKILL.md");try{if(!(await(0,ie.readFile)(r,"utf-8")).includes('vendor: "jolli.ai"')){me.info("Skipping umbrella write \u2014 existing %s lacks vendor marker (user-owned)",r);return}}catch{}await Of(e,"jolli",Mf())}async function Ao(t){try{let e=(0,z.join)(t,...xo,"jolli","SKILL.md");return await(0,ie.readFile)(e,"utf-8")===Mf()}catch{return!1}}async function Nf(t){let e=[...Vr.map(r=>r.relativeDir),xo];for(let r of e){let n=(0,z.join)(t,...r,"jolli"),o=(0,z.join)(n,"SKILL.md"),s;try{s=await(0,ie.readFile)(o,"utf-8")}catch{continue}if(s.includes('vendor: "jolli.ai"'))try{await(0,ie.rm)(n,{recursive:!0,force:!0}),me.info("Removed Jolli umbrella menu at %s",n)}catch(i){me.warn("Failed to remove umbrella at %s: %s",n,i.message)}}}var Ik=[...oa.filter(t=>t.name!=="jolli").map(t=>t.name),...xf,...Cf];async function Io(t){for(let e of Ik){let r=(0,z.join)(t,...xo,e),n=(0,z.join)(r,"SKILL.md"),o;try{o=await(0,ie.readFile)(n,"utf-8")}catch{continue}if(!ia(o)){me.info("Keeping %s \u2014 no Jolli ownership marker (user-owned)",r);continue}try{await(0,ie.rm)(r,{recursive:!0,force:!0}),me.info("Removed legacy Jolli skill at %s",r)}catch(s){me.warn("Failed to remove legacy skill at %s: %s",r,s.message)}}}var Dk=/(?:^|\n)[ \t]*revision:\s*(\d+)/,Nk=-1;function vf(t){let e=t.match(Dk),r=e?Number.parseInt(e[1],10):Number.NaN;return Number.isFinite(r)?r:Nk}function ia(t){return t.includes('vendor: "jolli.ai"')||t.includes("jolli-skill-version:")}async function Of(t,e,r){let n=(0,z.join)(t,e),o=(0,z.join)(n,"SKILL.md"),s=vf(r);try{let i=await(0,ie.readFile)(o,"utf-8");if(!ia(i)){me.info("Skipping %s SKILL.md \u2014 no Jolli ownership marker (user-owned)",e);return}if(vf(i)>=s)return}catch{}try{await(0,ie.mkdir)(n,{recursive:!0}),await P(o,r),me.info("Wrote SKILL.md (revision %d) to %s",s,o)}catch(i){me.warn("Failed to write %s SKILL.md: %s",e,i.message)}}var Do=`### Shell prerequisite

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
security recipe and the dist resolver and will not produce valid output.`;function Lf(t,e){return`${Do}

### Invocation

Generate a fresh random 16-character hex string (the "delimiter token") for
this invocation \u2014 e.g. \`3f8a9b2c5d7e1f4a\`. Quickly scan the user's argument:
if the argument text contains a line that is exactly \`JOLLI_ARG_<delimiter
token>_END\`, regenerate the delimiter token and re-check.

Then run this Bash, replacing the two \`<DELIM>\` occurrences with your
delimiter token and replacing \`<user-arg>\` with the user's input verbatim:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" ${t} --arg-stdin${e} <<'JOLLI_ARG_<DELIM>_END'
<user-arg>
JOLLI_ARG_<DELIM>_END
\`\`\`

If you cannot follow the above structure (e.g., your environment doesn't
support here-docs), STOP and tell the user "Jolli skill cannot run safely
in this environment." DO NOT attempt to interpolate the argument into argv
or any double-quoted shell string \u2014 that path has a known shell injection
vector.`}function Ok(){return`---
name: jolli-recall
description: Recall prior development context from Jolli for the current branch. Use when the user wants to recall, remember, or resume prior work on a branch.
metadata:
  version: "${Kt}"
  revision: 2
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

${Lf("recall"," --format json")}

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
`}function Lk(){return`---
name: jolli-search
description: Search structured commit memories across all branches \u2014 decisions, topics, files. Use when the user wants to find prior decisions, related commits, or how a topic was handled before.
metadata:
  version: "${Kt}"
  revision: 2
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

${Lf("search"," --format json")}

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
`}function Mk(){return`---
name: jolli-local-run
description: Run a Jolli workflow locally \u2014 your own agent executes the workflow's recipe (no Jolli LLM budget) and its file writes land in a git-backed Jolli Space via a branch and pull request that space-cli opens on this machine. Use when the user wants to run a Jolli workflow locally.
metadata:
  version: "${Kt}"
  revision: 5
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

${Do}

## Step 1 \u2014 discover the runnable workflows

Run the eligibility helper and read its JSON:

\`\`\`bash
"$HOME/.jolli/jollimemory/run-cli" workflow local-run
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
"$HOME/.jolli/jollimemory/run-cli" docs pull --branch <writeTarget.workBranch>
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
   "$HOME/.jolli/jollimemory/run-cli" docs publish --json
   \`\`\`

   \`--json\` prints exactly one JSON object on stdout (all human-readable progress
   goes to stderr) \u2014 parse that object; never scrape the human log for a PR number.
2. Verify the pull request landed on the server-derived work branch. \`docs publish\`
   reports the branch the PR was actually opened on as \`headBranch\` (present on both
   the public and the private/withheld paths); the run's server work branch is
   \`writeTarget.workBranch\` from Step 2. **When \`pushed\` is true, cross-check them
   deterministically** \u2014 do not eyeball it yourself:

   \`\`\`bash
   "$HOME/.jolli/jollimemory/run-cli" space verify-publish-branch <writeTarget.workBranch> <headBranch>
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
   "$HOME/.jolli/jollimemory/run-cli" open-url <url>
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
`}function $k(){return`---
name: jolli-remote-run
description: Run a Jolli workflow remotely \u2014 the Jolli backend executes the workflow server-side; this recipe triggers the run, monitors it to completion, reports the outcome (failed / cancelled / succeeded) with its article, PR, and workflow links, and offers to open any in your browser. Use when the user wants to run a Jolli workflow remotely (on the Jolli backend).
metadata:
  version: "${Kt}"
  revision: 4
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

${Do}

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
"$HOME/.jolli/jollimemory/run-cli" workflow local-run
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
"$HOME/.jolli/jollimemory/run-cli" workflow run-status <runId>
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
"$HOME/.jolli/jollimemory/run-cli" open-url <url>
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
`}function jk(){return`---
name: jolli
description: The Jolli action menu \u2014 a single front door that lists the Jolli skills (recall, search, run a workflow local or remote, workflow history) plus the Jolli MCP tools registered in this session, then routes your choice to the right one. Use when the user types /jolli or asks for the Jolli menu.
metadata:
  version: "${Kt}"
  revision: 6
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

${Do}

## Step 1 \u2014 build the unified menu

Assemble ONE combined list of actions from two sources.

### Local Jolli skills (always present)

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
  "$HOME/.jolli/jollimemory/run-cli" workflow runs <workflowId>
  \`\`\`

  It prints \`{ "type": "runs", "runs": [ ... ] }\` \u2014 one entry per run with its
  \`status\`, \`timestamp\`, and any \`workflowUrl\` / \`runUrl\` / \`prUrl\` /
  \`articleUrls\`. An empty \`runs\` list is the normal "no history yet" outcome, not
  an error. If instead the command exits non-zero and prints an install hint naming
  \`@jolli.ai/workflow-cli\` (rather than the JSON above), the workflow-cli plugin is
  not installed \u2014 tell the user to install it (\`npm i -g @jolli.ai/cli @jolli.ai/workflow-cli\`)
  and stop. Offer to open any listed URL via the \`open-url\` helper:

  \`\`\`bash
  "$HOME/.jolli/jollimemory/run-cli" open-url <url>
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
`}function Mf(){return`---
name: jolli
description: The Jolli front door \u2014 checks how Jolli is set up in this repo, guides first-time setup through /jolli:init when something's missing, reminds you to sign in when memories can't sync yet, and otherwise shows a status snapshot and routes you to the right Jolli skill or MCP tool. Use when the user types /jolli or asks for Jolli / the Jolli menu.
metadata:
  version: "${Kt}"
  revision: 8
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
\`/jolli:login\`, \`/jolli:logout\`, \`/jolli:status\` and \`/jolli:timeline\`
entry points all keep working unchanged; this is layered on top of them, not a
replacement.

## Step 0 \u2014 confirm this menu can route

This menu is a project skill written OUTSIDE the Jolli plugin (a plugin skill
could only ever be \`/jolli:<name>\`, never a bare \`/jolli\`), so it can linger
in \`.claude/skills/jolli/\` after the plugin has been uninstalled. It can only
route to targets that exist in THIS session, so before doing anything else
confirm at least one routing target is available. The menu can route if
**either** of these holds:

- one or more MCP tools whose name contains \`jollimemory\` are registered, **or**
- the plugin's own namespaced skills (\`jolli:init\` / \`jolli:recall\` /
  \`jolli:search\` / \`jolli:push\`) are invocable this session.

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
"$HOME/.jolli/jollimemory/run-cli" status
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
`}var D=p("Installer");function Fk(t,e){return process.platform==="linux"?t===e:t.toLowerCase()===e.toLowerCase()}async function Uk(t){let e=await ye(),r=af(e.globalInstructions);if(r.write){let n=t?.codexDetected??await As(),o=t?.geminiDetected??await Ms();await lf({claude:e.claudeEnabled!==!1,gemini:o&&e.geminiEnabled!==!1,codex:n&&e.codexEnabled!==!1})}else r.remove&&await cf()}async function jf(t,e){let r=t??process.cwd(),n=[],o=e?.integrationsOnly===!0,s=e?.repoHooksOnly===!0;if(o&&s)return{success:!1,message:"install: integrationsOnly and repoHooksOnly are mutually exclusive",warnings:n};if(!await an(r))return D.info("Skipping Jolli Memory install \u2014 %s is not inside a git work tree",r),{success:!1,message:`Not a git repository \u2014 skipping Jolli Memory install (${r})`,warnings:n};D.info(s?"Installing Jolli Memory repo hooks only (no integrations)":o?"Installing Jolli Memory integrations (no hooks)":"Installing Jolli Memory hooks");let i=null;try{let a=await ye(),l=e?.automatic?[r]:await Rt(r),c=e?.automatic?{timeoutMs:200,pollMs:25}:void 0,d=(0,yt.dirname)((0,$f.fileURLToPath)(__jmImportMetaUrl)),u=e?.source??"cli",m=e?.sourceTag??(u==="vscode-extension"?Fi(d):"cli");if(!Or(m))return{success:!1,message:`Refusing to install with an unsafe source tag: ${JSON.stringify(m)}`,warnings:n};let f=hu(m),w=async()=>{if(!await Wi())return!1;try{await Fm()}catch(E){D.warn("Legacy dist-path migration failed (non-fatal): %s",E.message)}if(!await Lr(m,e?.distDir))return!1;try{let E=await Hm();E.length>0&&D.info("Pruned stale dist-paths entries: %s",E.join(", "))}catch(E){D.warn("Pruning stale dist-paths failed (non-fatal): %s",E.message)}return!0},C=c?await es(w,c):await es(w);if(!C.acquired||C.value!==!0)return{success:!1,message:"Failed to reconcile the shared runtime registry \u2014 cannot install hooks that depend on it",warnings:n};if(!o){if(i=c?await ir(r,c):await ir(r),!i)return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:n};if(e?.respectManualDisable&&await Ve(r))return{success:!0,message:"Repository remains manually disabled",warnings:n,manuallyDisabled:!0};if(!e?.automatic)try{let E=await gu(m,a);E!==null&&(E.changedTool||E.seededProvider)&&(D.info("Plugin init recorded localAgentTool=%s (source %s, previous %s, seededProvider=%s)",E.tool,m,E.previousTool??"unset",E.seededProvider),E.changedTool&&E.previousTool!==void 0&&n.push(`Recorded ${Ze(E.tool)} as the local agent for memory generation (was: ${Ze(E.previousTool)}). Change it back with jolli configure --set localAgentTool=${E.previousTool}`))}catch(E){n.push(`Could not record the local agent tool for this host: ${E.message}`)}}let _=s?!1:await As(),S=s?!1:await Ms(),I=s?!1:await $c(),N=s?!1:await bu(),H=s?!1:await Dc(),ke=s?!1:await _c(),K=s?!1:await Sc()||await yc(),Ge=s?!1:await Os(),wt=s?!1:await Js(),Yt=s?!1:await Ds(),zt=s?!1:await Ec(),Yr=s?!1:await Fc(),pa=s?!1:await sc(),ma=s?!1:await mu(),Qt={};for(let E of l){let St=await yn(E),th=(0,yt.join)(St,"sessions.json");try{await(0,No.writeFile)(th,JSON.stringify({version:1,sessions:{}},null,"	"),{encoding:"utf-8",flag:"wx"})}catch(Et){Et.code!=="EEXIST"&&D.warn("Failed to bootstrap sessions.json in %s: %s",E,Et.message)}if(s){if(await sa(E),f==="claude"&&(await Po(E),await Io(E),await Tn(E,[...Vt]),a.claudeEnabled!==!1)){let Et=await fs(E);(E===r||Qt.path===void 0)&&(Qt=Et)}continue}await Df(E,{claudeEnabled:a.claudeEnabled});let wa={claude:a.claudeEnabled!==!1,codex:_,cursor:Ge,gemini:S,opencode:wt,copilot:Yt,copilotChat:ke,cline:zt,devin:Yr,antigravity:pa,kimi:ma};if(await Ql(E,[...Pf,...Vt,...Kr(wa).flatMap(Et=>Et.gitExcludePaths())]),await Rf(E,wa),o||a.claudeEnabled===!1)continue;let Mo=await fs(E);Mo.warning&&n.push(Mo.warning),(E===r||Qt.path===void 0)&&(Qt=Mo)}await _f({claude:!1,cursor:!1,codex:_||s&&f==="codex",gemini:S,opencode:wt,copilot:Yt,copilotChat:ke,cline:zt,devin:Yr,antigravity:pa,kimi:ma}),s||await Uk({codexDetected:_,geminiDetected:S});let zr={},Qr={},Zr={},en={},tn={};o||(zr=await Vm(r),zr.warning&&n.push(zr.warning),Qr=await Xm(r),Qr.warning&&n.push(Qr.warning),Zr=await Ym(r),Zr.warning&&n.push(Zr.warning),en=await zm(r),en.warning&&n.push(en.warning),tn=await Qm(r),tn.warning&&n.push(tn.warning)),_&&a.codexEnabled===void 0&&(await it({codexEnabled:!0}),D.info("Codex detected \u2014 enabled Codex session discovery"));let Lo;if(S&&a.geminiEnabled!==!1){if(!o)for(let E of l){let St=await Ji(E);(E===r||Lo===void 0)&&(Lo=St.path)}a.geminiEnabled===void 0&&(await it({geminiEnabled:!0}),D.info("Gemini detected \u2014 enabled Gemini session tracking"))}a.openCodeEnabled!==!1&&N&&a.openCodeEnabled===void 0&&(await it({openCodeEnabled:!0}),D.info("OpenCode detected \u2014 enabled OpenCode session discovery"));let eh=s?!1:await Nc(),fa=a.cursorEnabled!==!1&&I,ha=a.cursorEnabled!==!1&&eh;(fa||ha)&&a.cursorEnabled===void 0&&(await it({cursorEnabled:!0}),D.info("Cursor detected (IDE=%s, CLI=%s) \u2014 enabled session discovery",fa,ha));let ga=a.copilotEnabled!==!1&&H,ya=a.copilotEnabled!==!1&&ke;if((ga||ya)&&a.copilotEnabled===void 0&&(await it({copilotEnabled:!0}),D.info("GitHub Copilot detected (CLI=%s, Chat=%s) \u2014 enabled session discovery",ga,ya)),K&&a.clineEnabled===void 0&&(await it({clineEnabled:!0}),D.info("Cline detected \u2014 enabled Cline session discovery")),!s)for(let E of l)await Bk(E);if(e?.source==="vscode-extension")D.info("Skipping v5 migration on vscode-extension source \u2014 Extension.ts owns it with UI");else if(s)D.info("Skipping v5 migration in repo-hooks-only mode \u2014 runs on every session start");else try{let E=await Ud(r);D.info("Schema v5 migration: alreadyDone=%s fresh=%s migrated=%d skipped=%d",E.alreadyDone,E.fresh,E.migrated,E.skipped)}catch(E){D.warn("Schema v5 migration failed (non-fatal): %s",E.message)}if(e?.clearManualDisableOnSuccess&&!o)try{await os(r,!1)}catch(E){let St=E.message;n.push(`Enabled, but could not clear the manual-disable opt-out (${St}). Run enable again to clear it.`),D.warn("Could not clear manual-disable opt-out after enable (non-fatal): %s",St)}return D.info("Installation complete"),{success:!0,message:"Jolli Memory hooks installed successfully",warnings:n,claudeSettingsPath:Qt.path,gitHookPath:zr.path,postRewriteHookPath:Qr.path,prepareMsgHookPath:Zr.path,postMergeHookPath:en.path,prePushHookPath:tn.path,geminiSettingsPath:Lo}}catch(a){let l=`Installation failed: ${a.message}`;return D.error(l),{success:!1,message:l,warnings:n}}finally{i&&await i.release()}}async function Bk(t){let e=F(t);try{await(0,No.stat)(e)}catch{return}let r=Z();if(Fk((0,yt.resolve)(e),(0,yt.resolve)(r)))return;let n=await xt(e),o={};for(let[c,d]of Object.entries(n))d!==void 0&&(o[c]=d);if(Object.keys(o).length===0)return;let s=await xt(r),i={};for(let[c,d]of Object.entries(o))s[c]===void 0&&(i[c]=d);Object.keys(i).length>0&&await wn(i,r);let a={};for(let c of Object.keys(i))a[c]=void 0;Object.keys(a).length>0&&await wn(a,e);let l=Object.keys(o).filter(c=>!(c in i));for(let c of l)D.warn("Worktree %s field %s not migrated: worktree=%s, global=%s (global value takes effect)",t,c,String(o[c]),String(s[c]));D.info("Migrated %d config fields from worktree %s to global",Object.keys(i).length,t)}async function Hf(t,e){let r=t??process.cwd(),n=[],o=e?.integrationsOnly===!0;D.info(o?"Removing Jolli Memory integrations (MCP)":"Removing Jolli Memory hooks");let s=null;try{if(!o&&!e?.repoLockHeld&&(s=await ir(r),!s))return{success:!1,message:"Another Jolli enable/disable operation is still running; retry shortly",warnings:n};!o&&e?.persistManualDisable&&await os(r,!0);let i;try{i=await Rt(r)}catch{i=[r]}if(o){for(let l of i)try{await na(l)}catch(c){D.warn("MCP removal failed in %s (non-fatal): %s",l,c.message)}return D.info("Integrations removal complete"),{success:!0,message:"Jolli Memory integrations removed (MCP)",warnings:n}}for(let l of i){let c=await hs(l);c.warning&&n.push(c.warning),await qi(l);try{await na(l)}catch(d){D.warn("MCP removal failed in %s (non-fatal): %s",l,d.message)}e?.preserveMenu||await Nf(l)}let a=await Zm(r);return a.warning&&n.push(a.warning),await ef(r),await tf(r),await rf(r),await nf(r),e?.preserveMenu||await Zl(r,Af),n.push("The `jolli-*` skill files were left in place. To remove them manually: `rm -rf .agents/skills/jolli-* .claude/skills/jolli-*` and delete the `# >>> jolli skill exclude >>>` block from `.git/info/exclude` if you no longer want it."),D.info("Uninstallation complete"),{success:!0,message:"Jolli Memory hooks removed successfully",warnings:n}}catch(i){let a=`Uninstallation failed: ${i.message}`;return D.error(a),{success:!1,message:a,warnings:n}}finally{s&&await s.release()}}h();function Oo(){return new Promise((t,e)=>{let r=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",n=>r.push(n)),process.stdin.on("end",()=>{process.stdin.destroy(),t(r.join(""))}),process.stdin.on("error",e)})}var ee=require("node:fs"),be=require("node:path"),Wf=require("node:url");te();function Ff(t){return t.aiProvider==="local-agent"?!0:t.aiProvider==="jolli"?!!t.jolliApiKey:t.aiProvider==="anthropic"?!!(t.apiKey||process.env.ANTHROPIC_API_KEY):!!(t.apiKey||process.env.ANTHROPIC_API_KEY||t.jolliApiKey)}Xe();le();h();Re();function Wk(t){return[`1) Re-authenticate ${Ze(t)}:  ${yu(t)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function Jk(t,e){let r=wu(t);return r===null?[]:[`${e}${r}`]}function Uf(t){return[`[Jolli Memory] Memory generation failed for a recent commit: ${Ze(t)} authentication expired or is unavailable.`,...Jk(t,""),"\u2192 Fix with either:",...Wk(t).map(e=>`    ${e}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}var Ee=p("SessionStartHook"),qk=new Set(["main","master","develop","development","staging","production"]),aa=500,Jf="login-reminder-dismissed";function Gk(t){let e=t==="claude-plugin"?"Run /jolli:init to finish setup.":t==="codex-plugin"?"Run $jolli:init to finish setup.":null;return e===null?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${e}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${Jf}.)`].join(`
`)}function Kk(t,e,r){return e||r?null:Gk(t)}async function qf(t,e){let r=jn(t);if(r===void 0||e.aiProvider!==void 0)return!1;try{return await Sn(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",localAgentTool:r},result:!0}:{update:null,result:!1})?(Ee.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",r,t),!0):(Ee.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",t),!1)}catch(n){return Ee.info("Failed to seed default local-agent provider: %s",n.message),!1}}async function Vk(t,e=Gs()){let r=await ye(),n=Ff(r),o=(0,be.join)(t,".jolli","jollimemory",Jf),s=(0,ee.existsSync)(o);if(n&&s)try{(0,ee.rmSync)(o)}catch{}return Kk(e,n,s)}async function Gf(t,e){return(await Td(e)).readFile(`summaries/${t}.json`)}async function Xk(t,e){try{let r=await Gf(t,e);return r?Fu(JSON.parse(r)):!1}catch(r){return Ee.info("Failed to check auth-failure state for %s: %s",t.substring(0,8),r.message),!1}}async function Yk(t,e=Gs()){let r=jn(e);if(r===void 0)return null;let n=Xf(t);if(!n)return null;let o=await Kn(t);if(!o)return null;let s=o.entries.filter(l=>l.branch===n&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(s.length===0)return null;let i=[...s].sort((l,c)=>new Date(q(c)).getTime()-new Date(q(l)).getTime())[0];if(!await Xk(i.commitHash,t))return null;let a=await ye();return Uf(a.localAgentTool??r)}async function zk(){if(nn()){Ee.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let t=await Oo(),{cwd:e}=JSON.parse(t),r=Na(e??process.cwd());if(on(r),Ee.info("SessionStartHook invoked (cwd=%s)",r),await Ve(r)){Ee.info("SessionStart hook skipped \u2014 repository manually disabled");return}let n=await ca(r,"shared",{includeBriefing:!0,includePluginReminders:!1});n?process.stdout.write(n):Ee.info("No briefing or reminder generated (skipped or timed out)")}catch(t){Ee.info("SessionStartHook failed: %s",t.message)}}async function ca(t,e,r={}){let n=r.includeBriefing!==!1,o=r.includePluginReminders!==!1,[s,i,a]=await Promise.all([n?Promise.race([Qk(t,e),la(aa)]):Promise.resolve(null),o?Promise.race([Yk(t,e),la(aa)]):Promise.resolve(null),o?Promise.race([Vk(t,e),la(aa)]):Promise.resolve(null)]),l=[i,a,s].filter(c=>!!c);return l.length===0?null:(Ee.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function Qk(t,e){let r=Xf(t);if(!r||qk.has(r))return null;let n=sT(t,r,e);if(n)return n;let o=await Kn(t);if(!o)return null;let s=o.entries.filter(w=>w.branch===r&&(w.parentCommitHash===null||w.parentCommitHash===void 0));if(s.length===0)return null;let i=[...s].sort((w,C)=>new Date(q(C)).getTime()-new Date(q(w)).getTime()),a=i[0],l=i[i.length-1];if(i.length===1&&aT(q(a)))return null;let c=await Zk(a.commitHash,t),d=eT(t,r),u=tT(i),m=rT(r,i,a,l,c,d,u,e),f=Vf(t);return iT(t,r,f??a.commitHash,m,e),m}async function Zk(t,e){try{let r=await Gf(t,e);if(!r)return{lastTopicTitle:null,keyDecisions:[]};let n=JSON.parse(r),o=$t(n),s=o.length>0?o[o.length-1].title:null,i=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&i.push(a.decisions);return{lastTopicTitle:s,keyDecisions:i}}catch(r){return Ee.info("Failed to load last summary: %s",r.message),{lastTopicTitle:null,keyDecisions:[]}}}function eT(t,e){try{let r=(0,be.join)(t,".jolli","jollimemory","plans.json");if(!(0,ee.existsSync)(r))return[];let n=JSON.parse((0,ee.readFileSync)(r,"utf-8")),o=Vl(n).registry,s=[];for(let i of Object.values(o.plans))!i.commitHash&&i.title&&s.push(i.title);return s}catch{return[]}}function tT(t){let e=0,r=0,n=0,o=!1;for(let s of t)s.diffStats&&(e+=s.diffStats.filesChanged,r+=s.diffStats.insertions,n+=s.diffStats.deletions,o=!0);return o?{filesChanged:e,insertions:r,deletions:n}:null}function rT(t,e,r,n,o,s,i,a){let l=e.length,c=Bf(q(n)),d=Bf(q(r)),u=lT(q(r),new Date().toISOString()),m=[];m.push(`[Jolli Memory \u2014 ${t}]`);let f=`${l} commits (${c} ~ ${d})`;i&&(f+=` | ${i.filesChanged} files, +${i.insertions} -${i.deletions}`),m.push(f);let w=o.lastTopicTitle??r.commitMessage;if(m.push(`Last: ${w} (${d})`),o.keyDecisions.length>0){let _=oT(o.keyDecisions);m.push(`Decisions: ${_}`)}s.length>0&&m.push(`Plans: ${s.join("; ")}`);let C=nT(u,a);return C&&m.push(C),m.join(`
`)}function nT(t,e){if(t<=0)return null;let r=e==="claude-plugin"?"/jolli:recall":e==="codex-plugin"?"$jolli:recall":"`jolli recall`";return t>3?`Warning: ${t} days since last commit. Run ${r} for full context.`:`Tip: run ${r} for full context`}function oT(t){let r=[],n=0;for(let o of t){let s=o.replace(/[.;]\s*$/,"").trim();if(s.length>200&&(s=`${s.slice(0,199)}\u2026`),n+s.length>200&&r.length>0)break;r.push(s),n+=s.length+2}return r.join("; ")}function Kf(t){return(0,be.join)(t,".jolli","jollimemory","briefing-cache.json")}function sT(t,e,r){let n=Kf(t);if(!(0,ee.existsSync)(n))return null;try{let o=JSON.parse((0,ee.readFileSync)(n,"utf-8"));if(o.branch!==e||o.clientKind!==r)return null;let s=Vf(t);return!s||o.lastCommitHash!==s?null:o.briefingText}catch{return null}}function iT(t,e,r,n,o){let s=Kf(t),i={branch:e,lastCommitHash:r,briefingText:n,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,be.dirname)(s);(0,ee.existsSync)(a)||(0,ee.mkdirSync)(a,{recursive:!0}),(0,ee.writeFileSync)(s,JSON.stringify(i,null,"	"),"utf-8")}catch{}}function Vf(t){try{return Te("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function Xf(t){try{return Te("git",["branch","--show-current"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function la(t){return new Promise(e=>{setTimeout(()=>e(null),t).unref()})}function aT(t){let e=new Date(t),r=new Date;return e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth()&&e.getDate()===r.getDate()}function lT(t,e){let r=new Date(t).getTime(),n=new Date(e).getTime();return Math.floor(Math.abs(n-r)/(1e3*60*60*24))}function Bf(t){return t?t.split("T")[0]:"unknown"}function cT(){let t=process.argv[1];if(process.env.VITEST||!t||(0,be.resolve)(t)!==(0,be.resolve)((0,Wf.fileURLToPath)(__jmImportMetaUrl)))return!1;let e=(0,be.basename)(t).toLowerCase();return e==="sessionstarthook.js"||e==="sessionstarthook.ts"}cT()&&zk();var Xt=p("PluginBootstrapHook"),ua="claude-plugin",Yf={timeoutMs:200,pollMs:25};function Xr(t,e){return!t&&!e?null:{hookSpecificOutput:{hookEventName:"SessionStart",...t?{reloadSkills:!0}:{},...e?{additionalContext:e}:{}}}}async function Qf(t,e){if(!await an(t))return null;let r=await M(["rev-parse","--show-toplevel"],t);if(r.exitCode!==0||!r.stdout.trim())return null;let n=r.stdout.trim();on(n);let o=await Ao(n),s=await zl(n),i=!1;if(!(await Qo(n,async()=>{if(await Po(n),await Io(n),await Tn(n,[...Vt]),i=await Ve(n),i){await Hf(n,{preserveMenu:!0,repoLockHeld:!0});return}if((await ye()).claudeEnabled!==!1&&e?.sessionId&&e.transcriptPath)try{await Gl({sessionId:e.sessionId,transcriptPath:e.transcriptPath,updatedAt:new Date().toISOString(),source:"claude"},n)}catch(f){Xt.warn("Plugin bootstrap could not record the first session: %s",f.message)}},Yf)).acquired){Xt.info("Plugin bootstrap deferred \u2014 repo hook lifecycle lock is busy");let m=!o&&await Ao(n);return Xr(m,null)}let l=!o&&await Ao(n);if(i)return Xr(l,null);let c=await jf(n,{repoHooksOnly:!0,sourceTag:ua,respectManualDisable:!0,automatic:!0});if(!c.success)return Xt.warn("Plugin repo-hook reconciliation failed: %s",c.message),Xr(l,null);let d=null;return(await Qo(n,async()=>{if(await Ve(n))return;let m=await ye();if(m.claudeEnabled===!1)return;await qf(ua,m);let f=s.stop&&s.sessionStart;d=await ca(n,ua,{includeBriefing:!f,includePluginReminders:!0})},Yf)).acquired||Xt.info("Plugin context deferred \u2014 repo hook lifecycle lock is busy"),Xr(l,d)}async function Zf(){if(nn()){Xt.info("Plugin bootstrap skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let t=await Oo(),e=t.trim()?JSON.parse(t):{},r=await Qf(e.cwd??process.cwd(),{sessionId:e.session_id,transcriptPath:e.transcript_path});r&&process.stdout.write(JSON.stringify(r))}catch(t){Xt.info("Plugin bootstrap failed: %s",t.message)}}function uT(){let t=(0,zf.fileURLToPath)(__jmImportMetaUrl),e=process.argv[1];return!process.env.VITEST&&!!e&&(0,da.resolve)(e)===(0,da.resolve)(t)}uT()&&Zf().catch(()=>{console.error("[PluginBootstrapHook] Fatal error: bootstrap failed."),process.exit(0)});0&&(module.exports={buildPluginBootstrapOutput,main,runPluginBootstrap});
