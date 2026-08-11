#!/usr/bin/env node
const __jmImportMetaUrl = require("node:url").pathToFileURL(__filename).href;
"use strict";var Wn=Object.create;var be=Object.defineProperty;var Bn=Object.getOwnPropertyDescriptor;var Gn=Object.getOwnPropertyNames;var Kn=Object.getPrototypeOf,qn=Object.prototype.hasOwnProperty;var m=(t,e,r)=>()=>{if(r)throw r[0];try{return t&&(e=t(t=0)),e}catch(n){throw r=[n],n}};var Ct=(t,e)=>{for(var r in e)be(t,r,{get:e[r],enumerable:!0})},vt=(t,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of Gn(e))!qn.call(t,o)&&o!==r&&be(t,o,{get:()=>e[o],enumerable:!(n=Bn(e,o))||n.enumerable});return t};var kt=(t,e,r)=>(r=t!=null?Wn(Kn(t)):{},vt(e||!t||!t.__esModule?be(r,"default",{value:t,enumerable:!0}):r,t)),Jn=t=>vt(be({},"__esModule",{value:!0}),t);function Lt(){return Vn.getStore()?.traceId}var It,ds,Vn,Pt=m(()=>{"use strict";It=require("node:async_hooks"),ds="0".repeat(32),Vn=new It.AsyncLocalStorage});function N(t){return t instanceof Error?t.message:String(t)}function Fe(t){return t instanceof Error&&t.code==="ENOENT"}function Ht(t){Ft=t}function Y(){return jt}function no(t,e){let r=to[e]??eo;return Ot[t]>=Ot[r]}function oo(t,e,r,n,o){let i=new Date().toISOString(),s=t.toUpperCase().padEnd(5),a=r,l=0;a=a.replace(/%[sdj]/g,u=>{if(l>=n.length)return u;let d=n[l++];return u==="%d"?String(Number(d)):u==="%j"?JSON.stringify(d):String(d)});let c=o?` [trace=${o}]`:"";return`[${i}] ${s} [${e}]${c} ${a}`}function D(t){let e=t??Ft??process.cwd();return(0,X.join)(e,zn,Qn)}function te(t){return String(t).padStart(2,"0")}async function lo(t,e){let r=new Date,n=`${r.getUTCFullYear()}-${te(r.getUTCMonth()+1)}-${te(r.getUTCDate())}_${te(r.getUTCHours())}-${te(r.getUTCMinutes())}-${te(r.getUTCSeconds())}`;try{let o=(0,X.join)(t,`debug_${n}.log`);for(let i=1;await co(o);i++)o=(0,X.join)(t,`debug_${n}_${i}.log`);await(0,A.rename)(e,o)}catch{return}try{let o=(await(0,A.readdir)(t)).filter(i=>ao.test(i)).sort();for(let i=0;i<o.length-so;i++)await(0,A.unlink)((0,X.join)(t,o[i])).catch(()=>{})}catch{}}async function co(t){try{return await(0,A.stat)(t),!0}catch{return!1}}function uo(t){process.env.VITEST||process.env.JOLLI_DISABLE_LOG_FILE||jt||(Mt=Mt.then(async()=>{try{let e=D(),r=(0,X.join)(e,Zn);await(0,A.stat)(e);try{(await(0,A.stat)(r)).size>io&&await lo(e,r)}catch{}await(0,A.appendFile)(r,`${t}
`,"utf-8")}catch{}}))}function p(t){function e(r,n,o){let i=oo(r,t,n,o,Lt());ro&&(r==="info"||r==="debug")||(r==="warn"?console.warn(i):console.error(i)),no(r,t)&&uo(i)}return{debug(r,...n){e("debug",r,n)},info(r,...n){e("info",r,n)},warn(r,...n){e("warn",r,n)},error(r,...n){e("error",r,n)}}}var A,X,zn,Qn,Zn,H,Ft,jt,Ot,eo,to,ro,Mt,io,so,ao,h=m(()=>{"use strict";A=require("node:fs/promises"),X=require("node:path");Pt();zn=".jolli",Qn="jollimemory",Zn="debug.log";H="jollimemory/summaries/v3";jt=!1;Ot={debug:0,info:1,warn:2,error:3},eo="info",to={},ro=!0;Mt=Promise.resolve(),io=2*1024*1024,so=10,ao=/^debug_.*\.log$/});function Re(t,e,r){return(0,Ut.promisify)(j.execFile)(t,e,{...we,...r??{}})}function U(t,e,r){return(0,j.execFileSync)(t,e,{...we,...r??{}})}var j,Ut,we,xe,$=m(()=>{"use strict";j=require("node:child_process"),Ut=require("node:util"),we={windowsHide:!0};xe=((t,e,r)=>Array.isArray(e)?(0,j.spawn)(t,e,{...we,...r??{}}):(0,j.spawn)(t,{...we,...e??{}}))});function Kt(t){let e=$t.get(t);if(e!==void 0)return e;let r=t;try{let n=U("git",["rev-parse","--show-toplevel"],{cwd:t,encoding:"utf-8",stdio:["ignore","pipe","pipe"]}).trim();n&&(r=n)}catch{}return $t.set(t,r),r}async function R(t,e){b.debug("git %s%s",e?`[cwd=${e}] `:"",t.join(" "));try{let{stdout:r,stderr:n}=await Re("git",t,{maxBuffer:po,env:{...process.env,LC_ALL:"C"},...e!==void 0&&{cwd:e}});return{stdout:r.trimEnd(),stderr:n.trim(),exitCode:0}}catch(r){let n=r,o=typeof n.code=="number"?n.code:n.code==="ENOENT"?127:1,i={stdout:(n.stdout??"").trimEnd(),stderr:(n.stderr??n.message??"").trim(),exitCode:o};return b.debug("git command failed (exit: %d, stderr: %s)",o,i.stderr.substring(0,200)),i}}async function He(t,e){return(await R(["rev-parse","--verify",`refs/heads/${t}`],e)).exitCode===0}async function je(t,e){if(await He(t,e))return;b.info("Creating orphan branch '%s' using plumbing commands",t);let r=JSON.stringify({version:1,entries:[]},null,"	"),n=await Eo(r,e);b.debug("Created blob: %s",n);let o=`100644 blob ${n}	index.json
`,i=await To(o,e);b.debug("Created tree: %s",i);let s=await R(["commit-tree",i,"-m","Initialize Jolli Memory summaries"],e);if(s.exitCode!==0)throw new Error(`Failed to create commit: ${s.stderr}`);let a=s.stdout.trim();b.debug("Created commit: %s",a);let l=await R(["update-ref",`refs/heads/${t}`,a],e);if(l.exitCode!==0)throw new Error(`Failed to update ref: ${l.stderr}`);b.info("Orphan branch '%s' created successfully",t)}function ho(t){let e=t.toLowerCase();return go.some(r=>e.includes(r))}async function Ue(t,e,r){b.debug("Reading file from branch: %s:%s",t,e);let n=await R(["show",`${t}:${e}`],r);return n.exitCode!==0?(ho(n.stderr)?b.debug("File not found: %s:%s",t,e):b.warn("Read failed for %s:%s (git exit %d): %s",t,e,n.exitCode,n.stderr||"(no stderr)"),null):n.stdout}async function $e(t,e,r){let n=new Map;if(e.length===0)return n;let o=["cat-file","--batch"];return b.debug("git (cat-file --batch stream) %s%s for %d paths",r?`[cwd=${r}] `:"",o.join(" "),e.length),new Promise((i,s)=>{let a=xe("git",o,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),l="",c=Buffer.alloc(0),u=!0,d=0,f=[],_=!1,S=0,T=!1,y=g=>{T||(T=!0,g?s(g):i(n))};a.stderr.on("data",g=>{l+=g.toString()}),a.stdout.on("data",g=>{for(c=Buffer.concat([c,g]);!T;){if(u){let E=c.indexOf(10);if(E<0)return;let w=c.subarray(0,E).toString("utf8");if(c=c.subarray(E+1),S>=e.length){y(new Error(`git cat-file --batch returned extra response: ${w}`));return}let C=e[S];if(S++,w.endsWith(" missing")){n.set(C,null);continue}let Te=w.substring(w.lastIndexOf(" ")+1),Oe=Number.parseInt(Te,10);if(!Number.isFinite(Oe)||Oe<0){y(new Error(`Unexpected cat-file --batch header for ${C}: ${w}`));return}d=Oe,f=[],u=!1,_=!0}if(d>0){if(c.length===0)return;let E=Math.min(d,c.length);if(f.push(c.subarray(0,E)),c=c.subarray(E),d-=E,d>0)return}if(_){if(c.length<1)return;c=c.subarray(1),_=!1;let E=e[S-1];n.set(E,Buffer.concat(f).toString("utf8")),f=[],u=!0}}}),a.on("close",g=>{if(g!==0){y(new Error(`git cat-file --batch failed (exit ${g}): ${l.trim()}`));return}if(S<e.length){y(new Error(`git cat-file --batch returned ${S} of ${e.length} expected responses; stderr=${l.trim()}`));return}y(null)}),a.on("error",g=>{y(g)}),a.stdin.on("error",g=>{y(g)});for(let g of e)a.stdin.write(`${t}:${g}
`);a.stdin.end()})}async function qt(t,e,r,n){await je(t,n);let o=await R(["rev-parse",`refs/heads/${t}`],n);if(o.exitCode!==0)throw new Error(`Failed to get branch tip: ${o.stderr}`);let i=o.stdout.trim();await So(t,i,r,e,n);let s=e.filter(l=>!l.delete).length,a=e.filter(l=>l.delete).length;b.info("Updated branch '%s': %d written, %d deleted (via fast-import)",t,s,a)}async function We(t,e,r){b.debug("Listing files in branch %s under prefix '%s'",t,e);let n=await R(["ls-tree","-z","-r","--name-only",t,e],r);if(n.exitCode!==0)return b.debug("Failed to list files (branch may not exist): %s",n.stderr),[];let o=n.stdout.split(fo).filter(i=>i.length>0);return b.debug("Found %d files",o.length),o}async function yo(t){let e=await R(["rev-parse","--git-common-dir"],t);if(e.exitCode!==0)throw new Error(`Failed to get git common dir: ${e.stderr}`);let r=e.stdout.trim();return(0,re.resolve)(t,r)}async function Jt(t){let e=await yo(t);return(0,re.dirname)(e)}async function Xt(t){let e=await R(["worktree","list","--porcelain"],t);if(e.exitCode!==0)throw new Error(`Failed to list worktrees: ${e.stderr}`);return e.stdout.split(`
`).filter(n=>n.startsWith("worktree ")).map(n=>n.slice(9).trim())}function Yt(t,e,r){return b.debug("git (stdin) %s%s",r?`[cwd=${r}] `:"",t.join(" ")),new Promise((n,o)=>{let i=xe("git",t,{stdio:["pipe","pipe","pipe"],...r!==void 0&&{cwd:r}}),s="",a="";i.stdout.on("data",l=>{s+=l.toString()}),i.stderr.on("data",l=>{a+=l.toString()}),i.on("close",l=>{l!==0?o(new Error(`git ${t[0]} failed (exit ${l}): ${a.trim()}`)):n(s.trim())}),i.on("error",l=>{o(l)}),i.stdin.write(e),i.stdin.end()})}async function Eo(t,e){return Yt(["hash-object","-w","--stdin"],t,e)}async function Wt(t,e){let r=await R(["var",t],e);if(r.exitCode!==0)throw new Error(`Failed to read ${t}: ${r.stderr}`);return r.stdout.trim()}async function So(t,e,r,n,o){let i=await Wt("GIT_AUTHOR_IDENT",o),s=await Wt("GIT_COMMITTER_IDENT",o),a=["fast-import","--quiet","--done"];b.debug("git (fast-import stream) %s%s",o?`[cwd=${o}] `:"",a.join(" "));let l=n.filter(u=>!u.delete),c=n.filter(u=>u.delete);return new Promise((u,d)=>{let f=xe("git",a,{stdio:["pipe","pipe","pipe"],...o!==void 0&&{cwd:o}}),_="";f.stderr.on("data",g=>{_+=g.toString()}),f.on("close",g=>{g!==0?d(new Error(`git fast-import failed (exit ${g}): ${_.trim()}`)):u()}),f.on("error",g=>{d(g)});let S=f.stdin;S.on("error",g=>{d(g)});let T=[];l.forEach((g,E)=>{let w=E+1,C=Buffer.from(g.content,"utf8");T.push(`blob
mark :${w}
data ${C.length}
`,C,`
`)});let y=Buffer.from(r,"utf8");T.push(`commit refs/heads/${t}
`,`author ${i}
`,`committer ${s}
`,`data ${y.length}
`,y,`
`,`from ${e}
`),l.forEach((g,E)=>{T.push(`M 100644 :${E+1} ${Bt(g.path)}
`)});for(let g of c)T.push(`D ${Bt(g.path)}
`);T.push(`done
`),_o(S,T).then(()=>{S.end()},g=>{d(g)})})}async function _o(t,e){for(let r of e)t.write(r)||await(0,Gt.once)(t,"drain")}function Bt(t){return/["\\\n\r]/.test(t)?`"${t.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")}"`:t}async function To(t,e){return Yt(["mktree"],t,e)}var Gt,re,po,fo,b,$t,go,W=m(()=>{"use strict";Gt=require("node:events"),re=require("node:path");h();$();po=10*1024*1024,fo="\0",b=p("GitOps"),$t=new Map;go=["does not exist in","does not exist (neither on disk nor in the index)","invalid object name","exists on disk, but not in","unknown revision or path not in the working tree"]});var Be=m(()=>{"use strict"});async function Qt(t,e,r){let n=`${t}.${process.pid}.${(0,zt.randomUUID)()}.tmp`;await(0,q.writeFile)(n,e,r===void 0?"utf-8":{encoding:"utf-8",mode:r});try{await(0,q.rename)(n,t)}catch(o){let i=o.code;if(i==="EPERM"||i==="EACCES")await(0,q.writeFile)(t,e,r===void 0?"utf-8":{encoding:"utf-8",mode:r}),await(0,q.rm)(n,{force:!0});else throw o}}var zt,q,Zt=m(()=>{"use strict";zt=require("node:crypto"),q=require("node:fs/promises")});function bo(t){return new Promise(e=>setTimeout(e,t))}function tr(t){let e=Number(t);if(!Number.isInteger(e)||e<=0)return!1;if(e===process.pid)return!0;try{return process.kill(e,0),!0}catch(r){return r.code!=="ESRCH"}}async function Ge(t){try{let e=await(0,I.stat)(t),r=Date.now()-e.mtimeMs,n=await rr(t),o=n!==null&&!tr(n);if(!o&&r<er)return!1;o?ne.warn("Removing orphaned lock %s (PID %s no longer running)",t,n):ne.warn("Removing stale lock file %s (age: %dms)",t,r),await(0,I.rm)(t,{force:!0})}catch(e){if(e.code!=="ENOENT")return ne.error("Failed to check lock file %s: %s",t,e.message),!1}try{return await(0,I.writeFile)(t,String(process.pid),{flag:"wx"}),!0}catch{return!1}}async function rr(t){try{let r=(await(0,I.readFile)(t,"utf-8")).trim();return r.length>0?r:null}catch{return null}}async function Ke(t,e){let r=await rr(t);if(r!==null&&r!==String(process.pid)){ne.warn("Skipping release of %s: held by pid %s, not us (pid %s) \u2014 stale-reclaim race",e,r,process.pid);return}try{await(0,I.rm)(t,{force:!0})}catch(n){ne.error("Failed to release %s: %s",e,n.message)}}async function qe(t,e){if(e.timeoutMs<=0)return Ge(t);let r=Date.now()+e.timeoutMs;for(;;){if(await Ge(t))return!0;if(Date.now()>=r)return!1;await bo(e.pollMs)}}var I,ne,er,Je=m(()=>{"use strict";I=require("node:fs/promises");h();ne=p("LockPrimitives"),er=300*1e3});var nr,bs,Xe=m(()=>{"use strict";nr=require("node:async_hooks"),bs=new nr.AsyncLocalStorage});function xo(t){return Re("git",["rev-parse","--git-common-dir"],{cwd:t})}async function ko(t){let e=t??process.cwd(),r=ir.get(e);if(r!==void 0)return r;let n;try{let{stdout:o}=await xo(e),i=o.trim(),s=(0,B.isAbsolute)(i)?i:(0,B.resolve)(e,i);n=(0,B.join)(s,"jollimemory")}catch{sr.debug("resolveSharedLockDir: git rev-parse failed for cwd=%s \u2014 falling back to per-worktree dir",e),n=D(e)}return ir.set(e,n),n}async function No(t){let e=await ko(t);return await(0,Ae.mkdir)(e,{recursive:!0}),e}async function Do(t,e,r,n){let o=n.timeoutMs??vo,i=n.pollMs??ar;await(0,Ae.mkdir)(t,{recursive:!0});let s=(0,B.join)(t,e),a=await qe(s,{timeoutMs:o,pollMs:i});a||sr.warn("Could not acquire %s within %d ms \u2014 proceeding best-effort",e,o);try{return await r()}finally{a&&await Ke(s,e)}}async function lr(t,e,r={}){return Do(t,Ao,e,r)}async function cr(t,e,r={}){let n=r.timeoutMs??Co,o=r.pollMs??ar,i=await No(t),s=(0,B.join)(i,or);if(!await qe(s,{timeoutMs:n,pollMs:o}))return{acquired:!1};try{return{acquired:!0,value:await e()}}finally{await Ke(s,or)}}var Ae,B,sr,or,Ao,Co,ar,vo,ir,oe=m(()=>{"use strict";Ae=require("node:fs/promises"),B=require("node:path");h();$();Je();Xe();sr=p("Locks");or="profile.lock",Ao="config.lock",Co=5e3,ar=25,vo=5e3,ir=new Map});var Ye=m(()=>{"use strict"});var dr=m(()=>{"use strict"});var ur=m(()=>{"use strict"});function mr(t){return Number.isFinite(t)&&t>=0&&t<=1114111&&!(t>=55296&&t<=57343)}function pr(t){return t.replace(/&(#x[0-9a-fA-F]+|#\d+|[a-zA-Z]+);/g,(e,r)=>{if(r.startsWith("#x")){let o=Number.parseInt(r.slice(2),16);return mr(o)?String.fromCodePoint(o):e}if(r.startsWith("#")){let o=Number.parseInt(r.slice(1),10);return mr(o)?String.fromCodePoint(o):e}let n=Io[r];return typeof n=="string"?n:e})}var Io,fr=m(()=>{"use strict";Io={amp:"&",lt:"<",gt:">",quot:'"',apos:"'"}});var Po,Oo,gr=m(()=>{"use strict";dr();Ye();ur();fr();Po={decodeHtmlEntities:pr,lowercase:t=>t.toLowerCase()},Oo=new Set(Object.keys(Po))});var hr=m(()=>{"use strict"});var yr=m(()=>{"use strict"});var Er=m(()=>{"use strict"});var Sr=m(()=>{"use strict"});var _r=m(()=>{"use strict"});var Tr=m(()=>{"use strict"});var br=m(()=>{"use strict"});var wr=m(()=>{"use strict"});var Rr=m(()=>{"use strict"});var xr=m(()=>{"use strict"});var Ar=m(()=>{"use strict"});var Cr=m(()=>{"use strict"});var vr=m(()=>{"use strict";hr();yr();Er();Sr();_r();Tr();br();wr();Rr();xr();Ar();Cr()});var Ve=m(()=>{"use strict";Ye();gr();vr()});function ze(t){return Uo(t)}function Fo(t){return t.replace(/^\n+/,"").replace(/\n+$/,"")}function Ho(t){let e=t.indexOf(jo);return e===-1?t:t.slice(0,e)}function Uo(t){if(typeof t!="string")return null;let e=t.split(`
`);if(e[0]?.trim()!=="---")return null;let r=-1;for(let E=1;E<e.length;E++)if(e[E].trim()==="---"){r=E;break}if(r===-1)return null;let n=e.slice(1,r),o=Fo(Ho(e.slice(r+1).join(`
`))),i={},s=[],a=!1;for(let E of n){if(a){let C=/^\s+- (.+)$/.exec(E);if(C){try{let Te=JSON.parse(C[1]);$o(Te)&&s.push(Te)}catch{}continue}a=!1}if(E.trim()==="fields:"){a=!0;continue}let w=/^([a-zA-Z]+):\s*(.+)$/.exec(E);w&&(i[w[1]]=w[2])}let l=E=>{let w=i[E];if(w!==void 0)try{let C=JSON.parse(w);return typeof C=="string"?C:void 0}catch{return}},c=l("source"),u=l("nativeId");if(c===void 0||u===void 0||!Wo(c))return null;let d=c,f=u,_=l("title"),S=l("url"),T=l("referencedAt"),y=l("sourceToolName");return!_||T===void 0||!y?null:{mapKey:`${d}:${f}`,source:d,nativeId:f,title:_,referencedAt:T,toolName:y,...S!==void 0?{url:S}:{},...s.length>0?{fields:s}:{},...o.length>0?{description:o}:{}}}function $o(t){if(typeof t!="object"||t===null)return!1;let e=t;return!(typeof e.key!="string"||typeof e.label!="string"||typeof e.value!="string"||!/^[\w-]+$/.test(e.key)||e.icon!==void 0&&typeof e.icon!="string")}function Wo(t){return t.length>0&&/^[\w-]+$/.test(t)}var Ia,jo,ie=m(()=>{"use strict";h();Ve();Ia=p("ReferenceStore");jo="<!-- jolli:auto-note -->"});var Qe=m(()=>{"use strict"});var Ma,kr=m(()=>{"use strict";h();Ma=p("SkillStore")});function se(){return(0,Ce.join)((0,Nr.homedir)(),".jolli","jollimemory")}async function rt(t){let e=(0,Ce.join)(t,Dr);try{let r=await(0,G.readFile)(e,"utf-8"),n=JSON.parse(r);return Bo(n)}catch{return tt.debug("No config file found in %s, using defaults",t),{}}}function Bo(t){if(t.syncEnabled===void 0)return t;let{syncEnabled:e,...r}=t;return r.autoSyncEnabled===void 0?{...r,autoSyncEnabled:e}:r}function Go(t,e){return!("localAgentTool"in e)||"localAgentPath"in e||(t.localAgentTool??"claude-code")===(e.localAgentTool??"claude-code")||t.localAgentPath===void 0?e:(tt.info("Clearing localAgentPath (was set for %s, switching to %s)",t.localAgentTool??"claude-code",e.localAgentTool),{...e,localAgentPath:void 0})}async function nt(t){return Ko(t,se())}async function Ko(t,e){return lr(e,async()=>{let{update:r,result:n}=t(await rt(e));return r!==null&&(await qo(r,e),tt.info("Config saved to %s",e)),n})}async function qo(t,e){let r=await rt(e),n={...r,...Go(r,t)};await Qt((0,Ce.join)(e,Dr),JSON.stringify(n,null,"	"))}async function ot(){return rt(se())}function Ze(t,e){let r={...t},n=!1;for(let o of e)o in r&&(delete r[o],n=!0);return{value:r,changed:n}}function Ir(t){let e=!1,r={};for(let[s,a]of Object.entries(t.plans??{})){if(a.ignored===!0){e=!0;continue}let l=Ze(a,Jo);l.changed&&(e=!0),r[s]=l.value}let n;if(t.notes!==void 0){n={};for(let[s,a]of Object.entries(t.notes)){if(a.ignored===!0){e=!0;continue}let l=Ze(a,Xo);l.changed&&(e=!0),n[s]=l.value}}let o;if(t.references!==void 0){o={};for(let[s,a]of Object.entries(t.references)){let l=a;if(l.ignored===!0||l.commitHash!=null||l.contentHashAtCommit!==void 0){e=!0;continue}let c=Ze(a,Yo);c.changed&&(e=!0),o[s]=c.value}}return{registry:{version:1,plans:r,...n!==void 0?{notes:n}:{},...o!==void 0?{references:o}:{},...t.skills!==void 0?{skills:t.skills}:{}},changed:e}}var et,G,Nr,Ce,tt,Dr,Za,el,tl,rl,Jo,Xo,Yo,ae=m(()=>{"use strict";et=require("node:crypto"),G=require("node:fs/promises"),Nr=require("node:os"),Ce=require("node:path");h();Be();Zt();oe();ie();Qe();kr();tt=p("SessionTracker"),Dr="config.json",Za=2880*60*1e3;el=2880*60*1e3,tl=10080*60*1e3,rl=(0,et.randomBytes)(4).toString("hex"),Jo=["ignored","branch","editCount"],Xo=["ignored","branch"],Yo=["ignored","branch","commitHash","contentHashAtCommit"]});async function st(t,e,r={}){await(0,K.mkdir)((0,Lr.dirname)(t),{recursive:!0});let n=`${t}.${process.pid}.tmp`;await(0,K.writeFile)(n,e,r.mode!==void 0?{encoding:"utf-8",mode:r.mode}:"utf-8");try{await(0,K.rename)(n,t)}catch(o){throw await(0,K.unlink)(n).catch(()=>{}),o}}var K,Lr,at=m(()=>{"use strict";K=require("node:fs/promises"),Lr=require("node:path")});function ei(t){return{...t,manuallyDisabled:t.userDisabled===!0||t.cutoverFence!==void 0}}async function Mr(t){let e=await R(["rev-parse","--git-common-dir"],t),r=e.exitCode===0?e.stdout.trim():"";if(!r)return{profilePath:(0,L.join)(D(t),Pr),legacyMarkerPath:null};let n=(0,L.isAbsolute)(r)?r:(0,L.join)(t,r),o=(0,L.dirname)(n);return{profilePath:(0,L.join)(D(o),Pr),legacyMarkerPath:(0,L.join)(n,zo,Qo)}}async function lt(t){try{let e=await(0,le.readFile)(t,"utf-8"),r=JSON.parse(e);return r&&typeof r=="object"&&!Array.isArray(r)?r:{}}catch{return{}}}async function ti(t){try{return await(0,le.stat)(t),!0}catch{return!1}}async function ri(t,e){await st(t,`${JSON.stringify(e,null,"	")}
`)}async function ni(t){let e;try{e=await Xt(t)}catch{e=[t]}for(let r of e)if(await ti((0,L.join)(D(r),Zo)))return!0;return!1}async function Fr(t){let{profilePath:e}=await Mr(t),r=await lt(e);if(r.userDisabled!==void 0)return r.userDisabled===!0;if(r.manuallyDisabled!==void 0)return Or(t,e,r.manuallyDisabled===!0);let n=await ni(t);return Or(t,e,n)}async function Or(t,e,r){let n=await cr(t,async()=>{let o=await lt(e);return o.userDisabled!==void 0?o.userDisabled===!0:(await ri(e,ei({...o,userDisabled:r})),r)}).catch(()=>{});return n?.acquired&&n.value!==void 0?n.value:r}async function ce(t){let{profilePath:e}=await Mr(t);return(await lt(e)).cutoverFence??null}var le,L,Pr,zo,Qo,Zo,de=m(()=>{"use strict";le=require("node:fs/promises"),L=require("node:path");h();$();at();W();oe();Pr="profile.json",zo="jollimemory",Qo="backfill-card-dismissed",Zo="disabled-by-user"});function Hr(t){let e=t,r=e?.message??String(t),n=e?.code;return n==="ENOENT"?null:n==="EACCES"||n==="EPERM"?{kind:"permission",message:r}:/SQLITE_CORRUPT|SQLITE_NOTADB|file is not a database/i.test(r)?{kind:"corrupt",message:r}:/SQLITE_BUSY|SQLITE_LOCKED|database is locked/i.test(r)?{kind:"locked",message:r}:/no such table|no such column/i.test(r)?{kind:"schema",message:r}:/SQLITE_CANTOPEN|unable to open/i.test(r)?{kind:"permission",message:r}:{kind:"unknown",message:r}}var jr=m(()=>{"use strict"});var Ur,$r,Wr,Br,Gr,Kr,ve=m(()=>{"use strict";Ur=`
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
`,$r=`
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
`,Wr=`
INSERT INTO context_kinds (kind) VALUES ('skill');
`,Br=`
ALTER TABLE events_raw ADD COLUMN failed_kind TEXT;
`,Gr=`
ALTER TABLE session_tool_use ADD COLUMN last_call_at_ms INTEGER;
`,Kr=`
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
`});function V(){return(0,ke.join)(se(),"jollimemory.db")}function Ne(t=process.versions.node){let e=/^(\d+)\.(\d+)/.exec(t);if(!e)return!1;let r=Number.parseInt(e[1],10),n=Number.parseInt(e[2],10);return r>ue.major?!0:r<ue.major?!1:n>=ue.minor}function dt(t){try{let e=t.prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'").get(),r=Number.parseInt(e?.value??"",10);return Number.isFinite(r)?r:0}catch{return 0}}function li(t){let e=dt(t);if(!(e>=O)){t.exec("PRAGMA foreign_keys = OFF");try{for(let r=e;r<O;r++){t.exec("BEGIN IMMEDIATE");try{if(dt(t)>r){t.exec("COMMIT");continue}t.exec(ai[r]),t.exec(`INSERT INTO schema_meta (key, value) VALUES ('schema_version', '${r+1}')
					 ON CONFLICT(key) DO UPDATE SET value = excluded.value`),t.exec("COMMIT")}catch(n){try{t.exec("ROLLBACK")}catch{}throw n}}}finally{t.exec("PRAGMA foreign_keys = ON")}mt.info("dashboard schema migrated %d \u2192 %d",e,O)}}function ci(t){let e=(0,ke.dirname)(t);try{(0,M.mkdirSync)(e,{recursive:!0,mode:448}),((0,M.statSync)(e).mode&511)!==448&&(0,M.chmodSync)(e,448)}catch(r){mt.warn("could not restrict %s to owner-only: %s",e,N(r))}}function di(t){for(let e of[t,`${t}-wal`,`${t}-shm`])try{((0,M.statSync)(e).mode&511)!==384&&(0,M.chmodSync)(e,384)}catch(r){Fe(r)||mt.warn("could not restrict %s to 0600: %s",e,N(r))}}async function qr(t,e){if(!Ne())throw new ct(process.versions.node);let r=e.dbPath??V(),n=e.maxAttempts??4,o=e.baseDelayMs??50;t||ci(r);let{DatabaseSync:i}=await import("node:sqlite");for(let s=1;;s++){let a;try{a=new i(r,{readOnly:t});for(let l of t?ii:oi)a.exec(l);return a.exec(`PRAGMA busy_timeout = ${e.busyTimeoutMs??si}`),t||di(r),a}catch(l){try{a?.close()}catch{}if(Hr(l)?.kind!=="locked"||s>=n)throw l;await new Promise(c=>setTimeout(c,o*2**(s-1)))}}}async function Jr(t,e={}){let r=await qr(!1,e);try{let n=dt(r);if(n>O)throw new ut(n,e.dbPath??V());return li(r),await t(r)}finally{r.close()}}async function pt(t,e={}){let r=await qr(!0,e);try{return await t(r)}finally{r.close()}}function ft(t,e){t.exec("BEGIN IMMEDIATE");try{let r=e();return t.exec("COMMIT"),r}catch(r){try{t.exec("ROLLBACK")}catch{}throw r}}var M,ke,mt,O,ue,ct,oi,ii,si,ai,ut,z=m(()=>{"use strict";M=require("node:fs"),ke=require("node:path");ae();jr();h();ve();mt=p("DashboardDb"),O=5,ue={major:22,minor:13};ct=class extends Error{constructor(e){super(`The Jolli dashboard needs Node >= ${ue.major}.${ue.minor} for built-in SQLite (running ${e}). Upgrade Node, or run the CLI with --experimental-sqlite.`),this.name="DashboardRuntimeError"}},oi=["PRAGMA journal_mode = WAL","PRAGMA foreign_keys = ON"],ii=["PRAGMA foreign_keys = ON"],si=2e3,ai=[Ur+`
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
`+Kr,$r,Wr,Br,Gr];ut=class extends Error{constructor(e,r){super(`${r} uses dashboard schema v${e}, newer than this build's v${O}. Upgrade Jolli, or delete that file to rebuild the dashboard from scratch.`),this.name="DashboardSchemaAheadError"}}});function gt(t){let e=i=>{try{return(0,me.statSync)(`${t}${i}`),!0}catch{return!1}},r=e(""),n=e("-wal"),o=e("-shm");return r?n&&o?"healthy-active":n?"healthy-recoverable":"healthy-clean":n||o?"alarm-sidecars-only":"absent"}var me,Tl,ht=m(()=>{"use strict";me=require("node:fs");h();Tl=p("DbDetection")});var Xr=m(()=>{"use strict";$()});function De(t){let e=t.length;for(;e>0&&t[e-1]==="/";)e--;return e===t.length?t:t.slice(0,e)}function pe(t){return t.replace(/\\/g,"/")}var fe=m(()=>{"use strict"});var Dl,Yr=m(()=>{"use strict";h();Xr();fe();Dl=p("MetadataManager")});var Ol,Vr=m(()=>{"use strict";h();$();Ol=p("SshAliasResolver")});var Kl,zr,Qr=m(()=>{"use strict";h();$();Yr();fe();Vr();Kl=p("KBPathResolver"),zr=new Set(["github.com","gitlab.com","bitbucket.org"])});async function tn(t){let e=await R(["config","--get","remote.origin.url"],t),r=e.exitCode===0?e.stdout.trim():"";return r.length===0?ge(t):ui(r,t)}function ui(t,e){let r=t.trim();if(r.length===0)return ge(e);let n=/^([A-Za-z0-9_.+-]+@)([^:/\s]+):(.+)$/.exec(r);if(n&&!r.includes("://")){let s=n[2].toLowerCase(),a=en(s,Zr(n[3]));return`https://${s}/${a}`}let o;try{o=new URL(r)}catch{return ge(e)}let i=o.protocol.replace(/:$/,"").toLowerCase();if(i==="ssh"||i==="git"||i==="http"||i==="https"){let s=o.hostname.toLowerCase(),a=en(s,Zr(o.pathname.replace(/^\/+/,""))),l=pi(i,o.port);return`https://${s}${l}/${a}`}return ge(i==="file"?o.pathname:e)}function ge(t){let e=De(pe(t));return e.length===0?"file:///":e.startsWith("/")?`file://${e}`:`file:///${e}`}function Zr(t){let e=De(t);return e.toLowerCase().endsWith(".git")&&(e=e.slice(0,-4)),De(e)}function en(t,e){return zr.has(t)?e.toLowerCase():e}function pi(t,e){return e.length===0?"":t==="ssh"||t==="git"?e===mi[t]?"":`:${e}`:`:${e}`}var mi,rn=m(()=>{"use strict";W();Qr();fe();mi={ssh:"22",git:"9418"}});async function gi(t){try{let r=await tn(t);if(r&&!r.startsWith("file:"))return{identity:r,remoteUrl:r}}catch(r){fi.debug("no canonical remote for %s (%s) \u2014 using path identity",t,N(r))}return{identity:`local:${(0,nn.createHash)("sha256").update(pe(t)).digest("hex").slice(0,32)}`}}async function he(t){return gi(await Jt(t))}var nn,fi,ye=m(()=>{"use strict";nn=require("node:crypto");at();W();rn();oe();fe();ae();h();fi=p("RepoRegistry")});var sn={};Ct(sn,{hasCutoverRow:()=>Si,resetCutoverRouterCaches:()=>yi,resolveCutoverRoute:()=>Et});function yi(){yt.clear()}async function Ei(t){let e=yt.get(t);if(e!==void 0)return e;let{identity:r}=await he(t);return yt.set(t,r),r}async function on(t,e){if(!Ne())return{kind:"unavailable",reason:`Node ${process.versions.node} lacks flag-free node:sqlite`};let r=gt(e);if(r==="alarm-sidecars-only")return{kind:"unavailable",reason:"database file missing but WAL/SHM remain \u2014 run jolli doctor --recover"};if(r==="absent")return{kind:"unavailable",reason:"database file does not exist"};try{let{DatabaseSync:n}=await import("node:sqlite"),o=new n(e,{readOnly:!0});try{let i=o.prepare("SELECT value FROM schema_meta WHERE key = 'schema_version'").get();if(i&&Number(i.value)>O)return{kind:"unavailable",reason:`database schema v${i.value} is newer than this build's v${O} \u2014 upgrade this surface`};let s=await Ei(t),a=o.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(s);if(!a)return{kind:"no-row"};let l=o.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'cutover'").get(a.id);return l?{kind:"row",record:JSON.parse(l.value)}:{kind:"no-row"}}finally{o.close()}}catch(n){return{kind:"unavailable",reason:N(n)}}}async function Si(t,e={}){return(await on(t,e.dbPath??V())).kind==="row"}async function Et(t,e={}){let r=await ce(t).catch(()=>null),n=await on(t,e.dbPath??V());return n.kind==="row"?{state:"cutover",record:n.record}:r!==null?n.kind==="no-row"?{state:"legacy-fenced"}:{state:"blocked",reason:n.reason}:n.kind==="unavailable"?(hi.warn("database unavailable for un-cutover repo (%s) \u2014 orphan remains authoritative",n.reason),{state:"uncutover",warning:n.reason}):{state:"uncutover"}}var hi,yt,St=m(()=>{"use strict";de();h();z();ht();ye();hi=p("CutoverRouter"),yt=new Map});var ss={};Ct(ss,{buildSessionStartContext:()=>Fn,computeLoginReminder:()=>In,ensurePluginDefaultProvider:()=>Ji,formatRecallSuggestion:()=>Hn,getAuthFailureReminder:()=>On,getLoginReminder:()=>Ln,main:()=>Mn});module.exports=Jn(ss);var x=require("node:fs"),k=require("node:path"),Nn=require("node:url");var ee=require("node:fs");var Nt=require("node:path"),Xn="JOLLI_LOCAL_AGENT_CHILD",Yn=".jolli-local-agent-child";function Dt(t=process.env,e){return t[Xn]==="1"?!0:e!==void 0&&(0,ee.existsSync)((0,Nt.join)(e,Yn))}function Me(){return"claude-plugin"}W();function Vt(t){return t.aiProvider==="local-agent"?!0:t.aiProvider==="jolli"?!!t.jolliApiKey:t.aiProvider==="anthropic"?!!(t.apiKey||process.env.ANTHROPIC_API_KEY):!!(t.apiKey||process.env.ANTHROPIC_API_KEY||t.jolliApiKey)}ae();var Vo={"claude-plugin":{host:"claude",localAgentTool:"claude-code"},"codex-plugin":{host:"codex",localAgentTool:"codex"}};function it(t){return t===void 0?void 0:Vo[t]?.localAgentTool}de();ae();St();ye();h();W();de();var Q=class{constructor(e){this.cwd=e;this.kind="orphan-branch"}async readFile(e){return Ue(H,e,this.cwd)}async batchReadFiles(e){return $e(H,e,this.cwd)}async writeFiles(e,r){if(Y())return;if(await ce(this.cwd??process.cwd()).catch(()=>null)!==null)throw new Error("orphan branch is frozen (cutover fence in place) \u2014 this process holds a pre-cutover storage object; restart it so writes route to the database");let{hasCutoverRow:o}=await Promise.resolve().then(()=>(St(),sn));if(await o(this.cwd??process.cwd()).catch(()=>!1))throw new Error("orphan branch is retired for this repository (cutover committed) \u2014 writes route to the database; re-run the operation from an up-to-date surface");await this.ensure(),await qt(H,e,r,this.cwd)}async listFiles(e){return[...await We(H,e,this.cwd)]}async exists(){return He(H,this.cwd)}async ensure(){await je(H,this.cwd)}};var Tn=require("node:zlib");z();var Sn=require("node:zlib");ie();function an(t){return t.version>=4}function _i(t){return[...t??[]].reverse()}function Ee(t){let e=_i(t.children).flatMap(Ee),r=(t.topics??[]).map(n=>({...n,commitDate:t.commitDate,generatedAt:t.generatedAt}));return[...e,...r]}function _t(t){return an(t)?(t.topics??[]).map(e=>({...e,commitDate:t.commitDate,generatedAt:t.generatedAt})):Ee(t)}function Tt(t){let e=[t.commitHash];for(let r of t.children??[])e.push(...Tt(r));return e}function Z(t,e){return t.transcripts!==void 0?t.transcripts:Tt(t).filter(r=>e.has(r))}h();z();W();h();h();Be();W();oe();Xe();ie();var Ti="local-agent-auth";function ln(t){return t.summaryError===Ti}var bt={"claude-code":{label:"Claude Code",loginHint:"Run `claude` once and sign in to your subscription.",separateDesktopApp:"Claude Desktop"},codex:{label:"Codex",loginHint:"Run `codex login` to sign in with your ChatGPT plan.",separateDesktopApp:"the ChatGPT app"},"cursor-agent":{label:"Cursor",loginHint:"Run `cursor-agent login` to sign in to Cursor."},opencode:{label:"OpenCode",loginHint:"Run `opencode auth login` to connect a provider."},kimi:{label:"Kimi Code",loginHint:"Run `kimi login` to sign in to your Moonshot account."}};function Ie(t){return bt[t]?.label??"Local agent"}function cn(t){return bt[t]?.loginHint??"Sign in to your local agent CLI."}function dn(t){let e=bt[t]?.separateDesktopApp;return e===void 0?null:`(This login is SEPARATE from ${e} \u2014 ${e} stays signed in on its own.)`}Ve();function P(t){return t.generatedAt||t.commitDate}Qe();var bi;async function wi(t){let e=await mn(t);return e.ok?e.storage:(wt.warn("system-of-record unavailable (%s) \u2014 falling back to the orphan branch. cwd=%s",e.reason,t),new Q(t))}async function Ri(t,e){return t??bi??await wi(e)}var wt=p("SummaryStore"),xi="index.json";async function Le(t,e){return Ai(t,e)}async function Ai(t,e){let r=await Ri(e,t),n=await r.readFile(xi);if(!n)return wt.debug("loadIndex: no index.json in %s storage",r.kind??"unknown"),null;try{return JSON.parse(n)}catch(o){return wt.error("Failed to parse index.json: %s",o.message),null}}function un(t){let e=_t(t).map(r=>({title:r.title,...r.decisions!==void 0&&{decisions:r.decisions},...r.category!==void 0&&{category:r.category},...r.importance!==void 0&&{importance:r.importance},...r.filesAffected&&r.filesAffected.length>0&&{filesAffected:r.filesAffected}}));return{commitHash:t.commitHash,...t.recap!==void 0&&{recap:t.recap},...t.ticketId!==void 0&&{ticketId:t.ticketId},...e.length>0&&{topics:e}}}var yd=p("ProcessedSourceStore");de();ie();h();var Td=p("TopicIndexStore");h();var xd=p("TopicPageStore");h();z();Je();h();z();ht();ye();var Id=p("ImportState");var Ld=10*6e4;ye();ve();var ou=p("SotImport");function F(t){if(t==null)return null;try{return JSON.parse(t)}catch{return null}}function gn(t){let e=/^#\s+(.+)$/m.exec(t);return e?e[1].trim():null}var Ci=[{path:["conversationTurns"],accepts:"integer"},{path:["conversationTokens"],accepts:"integer"},{path:["estimatedCostUsd"],accepts:"number"},{path:["diffStats","filesChanged"],accepts:"integer"},{path:["diffStats","insertions"],accepts:"integer"},{path:["diffStats","deletions"],accepts:"integer"}];function hn(t,e,r){for(let{path:n,accepts:o}of Ci){let i=t;for(let a of n){if(i==null||typeof i!="object"){i=void 0;break}i=i[a]}i==null||(o==="integer"?Number.isInteger(i):typeof i=="number")||r("off-type numeric",`${e}.${n.join(".")} is ${typeof i} (${JSON.stringify(i)}) \u2014 column reads NULL`)}}function yn(t,e,r,n){let o=Date.parse(t.commitDate??"");return Number.isFinite(o)?o:(n("commit date",`${e} has no parsable commitDate \u2014 falling back to first-seen time`),r)}function En(t,e){let r=t.prepare("SELECT commit_hash, parent_hash, root_hash, depth FROM memories WHERE repo_id = ?").all(e),n=new Map,o=[];for(let l of r)if(l.parent_hash===null)o.push({hash:l.commit_hash,root:l.commit_hash,depth:0});else{let c=n.get(l.parent_hash)??[];c.push(l.commit_hash),n.set(l.parent_hash,c)}let i=t.prepare("UPDATE memories SET root_hash = ?, depth = ? WHERE repo_id = ? AND commit_hash = ?"),s=new Map(r.map(l=>[l.commit_hash,l])),a=0;for(;o.length>0;){let{hash:l,root:c,depth:u}=o.shift();a++;let d=s.get(l);(d.root_hash!==c||d.depth!==u)&&i.run(c,u,e,l);for(let f of n.get(l)??[])o.push({hash:f,root:c,depth:u+1})}if(a!==r.length)throw new Error(`remountRepo: ${r.length-a} node(s) unreachable from any root \u2014 cycle in batch`)}ve();var J=p("SotWrite"),vi={plans:"plan",notes:"note",references:"reference",skills:"skill"};function ki(t){let e=[],r=(n,o,i)=>{e.push({hash:n.commitHash,parentInFile:o,pos:i,summary:n}),(n.children??[]).forEach((s,a)=>{r(s,n.commitHash,a)})};return r(t,null,null),e}function Ni(t){let e={summaryDeletes:[],summaryTrees:[],transcriptWrites:[],transcriptDeletes:[],contextWrites:[],contextDeletes:[],progressWrites:[],progressDeletes:[],topicPageWrites:[],topicPageDeletes:[],treeHashes:new Map,aliases:new Map,topicSummaries:new Map,processedSet:null,v5State:null};for(let r of t){let n=r.delete===!0,o=r.path.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){if(n){e.summaryDeletes.push(o[1]);continue}let c=F(r.content);if(!c?.commitHash)throw new Error(`SotWrite: unparsable summary at ${r.path}`);e.summaryTrees.push(ki(c));continue}if(r.path==="index.json"){if(n)continue;let c=F(r.content);for(let u of c?.entries??[])u.treeHash&&e.treeHashes.set(u.commitHash,u.treeHash);for(let[u,d]of Object.entries(c?.commitAliases??{}))e.aliases.set(u,d);continue}if(r.path==="catalog.json")continue;if(r.path==="topics/index.json"){if(n)continue;let c=F(r.content);for(let u of c?.topics??[])u.stableSlug&&u.summary!==void 0&&e.topicSummaries.set(u.stableSlug,u.summary);continue}if(r.path==="topics/processed.json"){e.processedSet=n?null:r.content;continue}if(r.path==="schema-v5-migration.json"){n||(e.v5State=r.content);continue}let i=r.path.match(/^transcripts\/(.+)\.json$/);if(i){n?e.transcriptDeletes.push(i[1]):e.transcriptWrites.push({id:i[1],content:r.content});continue}let s=r.path.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(s){let c=vi[s[1]];n?e.contextDeletes.push({kind:c,key:s[2]}):e.contextWrites.push({kind:c,key:s[2],body:r.content});continue}let a=r.path.match(/^plan-progress\/(.+)\.json$/);if(a){n?e.progressDeletes.push(a[1]):e.progressWrites.push({pathSlug:a[1],content:r.content});continue}let l=r.path.match(/^topics\/([^/]+)\.json$/);if(l){n?e.topicPageDeletes.push(l[1]):e.topicPageWrites.push({slug:l[1],content:r.content});continue}throw new Error(`SotWrite: no table backs path ${r.path}`)}return e}function _e(t,e){J.warn("SotWrite: dropping unparsable %s (%s) -- keeping the rest of the batch",t,e)}function Di(t,e,r){let n=/-([0-9a-f]{8})$/.exec(r);return n?t.prepare("SELECT branch FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%' LIMIT 1").get(e,n[1])?.branch??null:null}function Ii(t,e,r,n){for(let u of r.summaryDeletes)t.prepare("DELETE FROM memories WHERE repo_id = ? AND commit_hash = ?").run(e,u);if(r.summaryTrees.length===0)return;let o=new Set;for(let u of r.summaryTrees)for(let d of u)"children"in d.summary&&o.add(d.hash);let i=t.prepare(`UPDATE memories SET child_pos = child_pos + ${1e6}
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos < ${1e6}`);for(let u of o)i.run(e,u);let s=new Map;for(let u of r.summaryTrees)for(let d of u){if(d.parentInFile===null||d.pos===null)continue;let f=s.get(d.parentInFile)??new Map;f.set(d.hash,d.pos),s.set(d.parentInFile,f)}let a=t.prepare(`INSERT INTO memories (repo_id, commit_hash, parent_hash, child_pos, root_hash, depth,
		                       summary_json, tree_hash, first_seen_ms, written_at_ms, commit_date_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash) DO UPDATE SET
		   parent_hash = excluded.parent_hash, child_pos = excluded.child_pos,
		   summary_json = excluded.summary_json,
		   tree_hash = COALESCE(excluded.tree_hash, memories.tree_hash),
		   written_at_ms = excluded.written_at_ms, commit_date_ms = excluded.commit_date_ms`),l=(u,d)=>J.info("write degraded a value: %s %s",u,d);for(let u of r.summaryTrees)for(let d of u){let f=d.parentInFile,_=d.pos;if(d.parentInFile===null){let y=t.prepare("SELECT parent_hash, child_pos FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,d.hash);y&&(f=y.parent_hash,_=y.child_pos,_!==null&&_>=1e6&&((f===null?void 0:s.get(f))?.has(d.hash)||(f=null,_=null)))}let S=JSON.stringify("children"in d.summary?{...d.summary,children:[]}:d.summary);a.run(e,d.hash,f,_,d.hash,0,S,r.treeHashes.get(d.hash)??null,n,n,yn(d.summary,d.hash,n,l)),hn(d.summary,d.hash,l),t.prepare("DELETE FROM memory_topics WHERE repo_id = ? AND commit_hash = ?").run(e,d.hash);let T=t.prepare("INSERT INTO memory_topics (repo_id, commit_hash, pos, category, importance, title) VALUES (?, ?, ?, ?, ?, ?)");(d.summary.topics??[]).forEach((y,g)=>{if(!y.title){l("topic",`${d.hash}[${g}] has no title`);return}T.run(e,d.hash,g,y.category??null,y.importance??null,y.title)})}let c=t.prepare(`UPDATE memories SET parent_hash = NULL, child_pos = NULL
		  WHERE repo_id = ? AND parent_hash = ? AND child_pos >= ${1e6}`);for(let u of o)c.run(e,u);En(t,e)}function Li(t,e,r,n){for(let[o,i]of r.aliases){if(!t.prepare("SELECT 1 AS ok FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,i)){J.info("dropping alias %s -> %s (no such memory row)",o,i);continue}t.prepare(`INSERT INTO commit_aliases (repo_id, old_hash, target_hash, created_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, old_hash) DO UPDATE SET target_hash = excluded.target_hash`).run(e,o,i,n)}}function Pi(t,e,r,n){let o=new Set;for(let i of r.transcriptDeletes)t.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(e,i),t.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND transcript_id = ?").run(e,i),t.prepare("DELETE FROM transcripts WHERE repo_id = ? AND transcript_id = ?").run(e,i);for(let{id:i,content:s}of r.transcriptWrites){let a=F(s);if(!a||!Array.isArray(a.sessions)){_e("transcript",i);continue}t.prepare(`INSERT INTO transcripts (repo_id, transcript_id, sessions_blob, written_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, transcript_id) DO UPDATE SET sessions_blob = excluded.sessions_blob,
			   written_at_ms = excluded.written_at_ms`).run(e,i,(0,Sn.deflateSync)(Buffer.from(s,"utf8")),n),t.prepare("DELETE FROM transcript_sessions WHERE repo_id = ? AND transcript_id = ?").run(e,i);for(let l of a.sessions)l.sessionId&&t.prepare(`INSERT INTO transcript_sessions (repo_id, transcript_id, session_id, source) VALUES (?, ?, ?, ?)
				 ON CONFLICT(repo_id, transcript_id, session_id) DO UPDATE SET source = excluded.source`).run(e,i,l.sessionId,l.source??null);o.add(i)}return o}function Oi(t,e,r,n){if(n.size===0)return;let o=new Set(r.summaryTrees.flat().map(c=>c.hash)),i=new Set(r.summaryTrees.flat().flatMap(c=>[...Z(c.summary,n)])),s=[...n].filter(c=>!i.has(c));if(s.length===0)return;let a=t.prepare("SELECT commit_hash, summary_json FROM memories WHERE repo_id = ? AND summary_json LIKE ?"),l=t.prepare(`INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)
		 ON CONFLICT(repo_id, commit_hash, transcript_id) DO NOTHING`);for(let c of s){let u=a.all(e,`%${c}%`);for(let d of u){if(o.has(d.commit_hash))continue;let f=F(d.summary_json);f&&Z(f,n).includes(c)&&(l.run(e,d.commit_hash,c),J.info("linked stored transcript %s to memory %s written earlier",c,d.commit_hash))}}}function Mi(t,e,r){if(r.summaryTrees.length===0)return;let n=new Set(t.prepare("SELECT transcript_id FROM transcripts WHERE repo_id = ?").all(e).map(o=>o.transcript_id));for(let o of r.summaryTrees)for(let i of o){let s=[...new Set(Z(i.summary,n).filter(a=>n.has(a)))];for(let a of i.summary.transcripts??[])n.has(a)||J.info("dropping dangling transcript link %s \u2192 %s (no transcript row)",i.hash,a);t.prepare("DELETE FROM memory_transcripts WHERE repo_id = ? AND commit_hash = ?").run(e,i.hash);for(let a of s)t.prepare("INSERT INTO memory_transcripts (repo_id, commit_hash, transcript_id) VALUES (?, ?, ?)").run(e,i.hash,a)}}function Fi(t,e,r,n){for(let{kind:i,key:s}of r.contextDeletes)t.prepare("DELETE FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").run(e,i,s);let o=t.prepare(`INSERT INTO context (repo_id, kind, context_key, source, native_id, tool_name, referenced_at,
		                      original_slug, branch, title, url, body_md, created_at_ms)
		 VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
		 ON CONFLICT(repo_id, kind, context_key) DO UPDATE SET
		   source = excluded.source, native_id = excluded.native_id, tool_name = excluded.tool_name,
		   referenced_at = excluded.referenced_at, original_slug = excluded.original_slug,
		   branch = excluded.branch, title = excluded.title, url = excluded.url,
		   body_md = excluded.body_md, updated_at_ms = ?`);for(let{kind:i,key:s,body:a}of r.contextWrites){if(i==="reference"){let u=ze(a);if(!u){_e("reference frontmatter",`references/${s}.md`);continue}o.run(e,i,s,u.source,u.nativeId,u.toolName,u.referencedAt,null,null,u.title,u.url??null,a,n,n);continue}let l=i==="plan"||i==="note"?Di(t,e,s):null,c=i==="plan"&&l!==null?s.replace(/-[0-9a-f]{8}$/,""):null;o.run(e,i,s,null,null,null,null,c,l,gn(a),null,a,n,n)}}function Hi(t,e,r,n){for(let o of r.progressDeletes)t.prepare("DELETE FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").run(e,o);for(let{pathSlug:o,content:i}of r.progressWrites){let s=F(i);if(!s){_e("plan-progress",`plan-progress/${o}.json`);continue}let a=s.planSlug??o;if(!t.prepare("SELECT 1 AS ok FROM context WHERE repo_id = ? AND kind = 'plan' AND context_key = ?").get(e,a)){J.warn("plan-progress for %s has no plan row -- skipping the artifact, keeping the rest of the batch",a);continue}t.prepare(`INSERT INTO plan_progress (repo_id, plan_slug, artifact_json, updated_at_ms) VALUES (?, ?, ?, ?)
			 ON CONFLICT(repo_id, plan_slug) DO UPDATE SET
			   artifact_json = excluded.artifact_json, updated_at_ms = excluded.updated_at_ms`).run(e,a,i,n)}}function ji(t,e,r,n){for(let o of r.topicPageDeletes)t.prepare("DELETE FROM topic_pages WHERE repo_id = ? AND stable_slug = ?").run(e,o);for(let{slug:o,content:i}of r.topicPageWrites){let s=F(i);if(!s?.stableSlug||s.title===void 0||s.content===void 0||!s.lastUpdatedAt){_e("topic page",`topics/${o}.json`);continue}t.prepare(`INSERT INTO topic_pages (repo_id, stable_slug, title, summary, content_md,
			                          related_branches_json, last_updated_at, payload_version)
			 VALUES (?, ?, ?, ?, ?, ?, ?, ?)
			 ON CONFLICT(repo_id, stable_slug) DO UPDATE SET
			   title = excluded.title, content_md = excluded.content_md,
			   related_branches_json = excluded.related_branches_json,
			   last_updated_at = excluded.last_updated_at, payload_version = excluded.payload_version`).run(e,s.stableSlug,s.title,r.topicSummaries.get(s.stableSlug)??null,s.content,JSON.stringify(s.relatedBranches??[]),s.lastUpdatedAt,s.schemaVersion??1),t.prepare("DELETE FROM topic_source_refs WHERE repo_id = ? AND stable_slug = ?").run(e,s.stableSlug),(s.sourceRefs??[]).forEach((a,l)=>{t.prepare(`INSERT INTO topic_source_refs (repo_id, stable_slug, pos, ref_type, ref_id, ts, branch)
				 VALUES (?, ?, ?, ?, ?, ?, ?)`).run(e,s.stableSlug,l,a.type,a.id,a.timestamp,a.branch??null)})}for(let[o,i]of r.topicSummaries){let s=t.prepare("UPDATE topic_pages SET summary = ? WHERE repo_id = ? AND stable_slug = ?").run(i,e,o);Number(s.changes)===0&&J.info("topics/index.json names %s but no page row exists \u2014 summary dropped",o)}if(r.processedSet!==null){let o=F(r.processedSet);if(!o?.processed)_e("processed set","topics/processed.json");else{t.prepare("DELETE FROM topic_processed_sources WHERE repo_id = ?").run(e);let i=t.prepare(`INSERT INTO topic_processed_sources (repo_id, source_type, source_id) VALUES (?, ?, ?)
				 ON CONFLICT(repo_id, source_type, source_id) DO NOTHING`);for(let[s,a]of Object.entries(o.processed))for(let l of a)i.run(e,s,l)}}r.v5State!==null&&t.prepare(`INSERT INTO repo_state (repo_id, key, value) VALUES (?, 'v5-migration', ?)
			 ON CONFLICT(repo_id, key) DO UPDATE SET value = excluded.value`).run(e,r.v5State)}function _n(t,e,r,n){let o=Ni(r);ft(t,()=>{t.exec("PRAGMA defer_foreign_keys = ON"),Ii(t,e,o,n),Li(t,e,o,n);let i=Pi(t,e,o,n);Mi(t,e,o),Oi(t,e,o,i),Fi(t,e,o,n),Hi(t,e,o,n),ji(t,e,o,n)})}h();function bn(t){let e=new Map;for(let r of t){if(r.parent_hash==null)continue;let n=e.get(r.parent_hash)??[];n.push(r),e.set(r.parent_hash,n)}for(let r of e.values())r.sort((n,o)=>Number(n.child_pos)-Number(o.child_pos));return e}function Rt(t,e){let r=JSON.parse(e.summary_json);return"children"in r&&(r.children=(t.get(e.commit_hash)??[]).map(n=>Rt(t,n))),r}function Ui(t,e,r){let n=t.prepare("SELECT root_hash, parent_hash FROM memories WHERE repo_id = ? AND commit_hash = ?").get(e,r);if(!n)return;let o=(n.parent_hash===null?t.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json
					   FROM memories WHERE repo_id = ? AND root_hash = ?`):t.prepare(`WITH RECURSIVE subtree(commit_hash) AS (
					     SELECT commit_hash FROM memories WHERE repo_id = ?1 AND commit_hash = ?2
					     UNION ALL
					     SELECT m.commit_hash FROM memories m
					       JOIN subtree s ON m.parent_hash = s.commit_hash
					      WHERE m.repo_id = ?1
					   )
					   SELECT m.commit_hash, m.parent_hash, m.child_pos, m.tree_hash, m.summary_json
					     FROM memories m JOIN subtree ON subtree.commit_hash = m.commit_hash
					    WHERE m.repo_id = ?1`)).all(e,n.parent_hash===null?n.root_hash:r),i=o.find(s=>s.commit_hash===r);return i?Rt(bn(o),i):void 0}function $i(t){if(t===null)return{};try{return{diffStats:JSON.parse(t)}}catch{return{}}}var Pe=class{constructor(e,r){this.repoIdentity=e;this.dbPath=r;this.kind="sqlite"}async withDb(e){return pt(r=>{let n=r.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!n)throw new Error(`SqliteStorage: no repos row for ${this.repoIdentity}`);return e(r,n.id)},{dbPath:this.dbPath})}async withDbOrAbsent(e,r){return pt(n=>{let o=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);return o?e(n,o.id):r},{dbPath:this.dbPath})}async readFile(e){return this.withDbOrAbsent((r,n)=>this.readOne(r,n,e),null)}async batchReadFiles(e){return this.withDbOrAbsent((r,n)=>{let o=new Map;for(let i of e)o.set(i,this.readOne(r,n,i));return o},new Map(e.map(r=>[r,null])))}readOne(e,r,n){let o=n.match(/^summaries\/([0-9a-f]+)\.json$/);if(o){let c=Ui(e,r,o[1]);return c?JSON.stringify(c,null,"	"):null}if(n==="index.json")return this.synthIndex(e,r);if(n==="catalog.json")return this.synthCatalog(e,r);if(n==="topics/index.json")return this.synthTopicIndex(e,r);if(n==="topics/processed.json")return this.synthProcessed(e,r);if(n==="schema-v5-migration.json")return e.prepare("SELECT value FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'").get(r)?.value??null;let i=n.match(/^topics\/([^/]+)\.json$/);if(i)return this.synthTopicPage(e,r,i[1]);let s=n.match(/^transcripts\/(.+)\.json$/);if(s){let c=e.prepare("SELECT sessions_blob FROM transcripts WHERE repo_id = ? AND transcript_id = ?").get(r,s[1]);return c?(0,Tn.inflateSync)(Buffer.from(c.sessions_blob)).toString("utf8"):null}let a=n.match(/^(plans|notes|references|skills)\/(.+)\.md$/);if(a){let c={plans:"plan",notes:"note",references:"reference",skills:"skill"}[a[1]];return e.prepare("SELECT body_md FROM context WHERE repo_id = ? AND kind = ? AND context_key = ?").get(r,c,a[2])?.body_md??null}let l=n.match(/^plan-progress\/(.+)\.json$/);return l?e.prepare("SELECT artifact_json FROM plan_progress WHERE repo_id = ? AND plan_slug = ?").get(r,l[1])?.artifact_json??null:null}allMemories(e,r){return e.prepare(`SELECT commit_hash, parent_hash, child_pos, tree_hash, summary_json, index_diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(r)}synthIndex(e,r){let n=e.prepare(`SELECT commit_hash, parent_hash, root_hash, tree_hash, commit_type, commit_message,
				        commit_date, branch, generated_at,
				        CASE WHEN parent_hash IS NULL
				             THEN COALESCE(json_extract(summary_json, '$.diffStats'), index_diff_stats_json)
				        END AS diff_stats_json
				   FROM memories WHERE repo_id = ? ORDER BY rowid`).all(r);if(n.length===0)return null;let o=new Map(e.prepare(`SELECT m.root_hash AS root, COUNT(t.rowid) AS n
						   FROM memories m
						   LEFT JOIN memory_topics t ON t.repo_id = m.repo_id AND t.commit_hash = m.commit_hash
						  WHERE m.repo_id = ? GROUP BY m.root_hash`).all(r).map(a=>[a.root,a.n])),i=n.map(a=>({commitHash:a.commit_hash,parentCommitHash:a.parent_hash,...a.tree_hash!==null&&{treeHash:a.tree_hash},...a.commit_type!==null&&{commitType:a.commit_type},commitMessage:a.commit_message??void 0,commitDate:a.commit_date??void 0,branch:a.branch??void 0,...a.generated_at!==null&&{generatedAt:a.generated_at},...a.parent_hash===null&&{topicCount:o.get(a.root_hash)??0,...$i(a.diff_stats_json)}})),s=e.prepare("SELECT old_hash, target_hash FROM commit_aliases WHERE repo_id = ? ORDER BY rowid").all(r);return JSON.stringify({version:3,entries:i,...s.length>0&&{commitAliases:Object.fromEntries(s.map(a=>[a.old_hash,a.target_hash]))}},null,"	")}synthCatalog(e,r){let n=this.allMemories(e,r);if(n.length===0)return null;let o=bn(n),i=n.filter(s=>s.parent_hash===null).map(s=>un(Rt(o,s)));return JSON.stringify({version:1,entries:i},null,"	")}topicRefs(e,r,n){return e.prepare(`SELECT ref_type, ref_id, ts, branch FROM topic_source_refs
				  WHERE repo_id = ? AND stable_slug = ? ORDER BY pos`).all(r,n).map(i=>({type:i.ref_type,id:i.ref_id,timestamp:i.ts,...i.branch!==null&&{branch:i.branch}}))}synthTopicPage(e,r,n){let o=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? AND stable_slug = ?`).get(r,n);return o?JSON.stringify({schemaVersion:o.payload_version,stableSlug:o.stable_slug,title:o.title,content:o.content_md,relatedBranches:JSON.parse(o.related_branches_json),sourceRefs:this.topicRefs(e,r,n),lastUpdatedAt:o.last_updated_at},null,"	"):null}synthTopicIndex(e,r){let n=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json,
				        last_updated_at, payload_version
				   FROM topic_pages WHERE repo_id = ? ORDER BY rowid`).all(r);if(n.length===0)return null;let o=n.map(i=>({stableSlug:i.stable_slug,title:i.title,...i.summary!==null&&{summary:i.summary},relatedBranches:JSON.parse(i.related_branches_json),sourceRefs:this.topicRefs(e,r,i.stable_slug),lastUpdatedAt:i.last_updated_at}));return JSON.stringify({schemaVersion:1,topics:o},null,"	")}synthProcessed(e,r){let n=e.prepare("SELECT source_type, source_id FROM topic_processed_sources WHERE repo_id = ? ORDER BY rowid").all(r);if(n.length===0)return null;let o={summary:[],plan:[],note:[],userfile:[]};for(let i of n)o[i.source_type].push(i.source_id);return JSON.stringify({schemaVersion:1,processed:o},null,"	")}async listFiles(e){return this.withDbOrAbsent((r,n)=>{let o=(s,a)=>r.prepare(s).all(n).map(l=>a(l.v));return[...o("SELECT commit_hash AS v FROM memories WHERE repo_id = ?",s=>`summaries/${s}.json`),...o("SELECT transcript_id AS v FROM transcripts WHERE repo_id = ?",s=>`transcripts/${s}.json`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'plan'",s=>`plans/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'note'",s=>`notes/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'reference'",s=>`references/${s}.md`),...o("SELECT context_key AS v FROM context WHERE repo_id = ? AND kind = 'skill'",s=>`skills/${s}.md`),...o("SELECT plan_slug AS v FROM plan_progress WHERE repo_id = ?",s=>`plan-progress/${s}.json`),...o("SELECT stable_slug AS v FROM topic_pages WHERE repo_id = ?",s=>`topics/${s}.json`),...o("SELECT 'index.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'catalog.json' AS v FROM memories WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'topics/index.json' AS v FROM topic_pages WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'topics/processed.json' AS v FROM topic_processed_sources WHERE repo_id = ? LIMIT 1",s=>s),...o("SELECT 'schema-v5-migration.json' AS v FROM repo_state WHERE repo_id = ? AND key = 'v5-migration'",s=>s)].filter(s=>s.startsWith(e)).sort()},[])}async writeFiles(e,r){Y()||await Jr(n=>{let o=n.prepare("SELECT id FROM repos WHERE repo_identity = ?").get(this.repoIdentity);if(!o)throw new Error(`SqliteStorage: cannot write memories for unregistered ${this.repoIdentity}`);_n(n,o.id,e,Date.now())},{dbPath:this.dbPath})}async searchSignatureParts(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(written_at_ms), 0) AS newest FROM memories WHERE repo_id = ?").get(r),o=e.prepare("SELECT COUNT(*) AS n, COALESCE(MAX(last_updated_at), '') AS newest FROM topic_pages WHERE repo_id = ?").get(r);return{memoriesCount:n.n,memoriesNewestMs:n.newest,topicCount:o.n,topicNewest:o.newest}},{memoriesCount:0,memoriesNewestMs:0,topicCount:0,topicNewest:""})}async lookupAlias(e){return this.withDbOrAbsent((r,n)=>r.prepare("SELECT target_hash FROM commit_aliases WHERE repo_id = ? AND old_hash = ?").get(n,e)?.target_hash??null,null)}async findShallowestByTreeHash(e){return this.withDbOrAbsent((r,n)=>r.prepare(`SELECT commit_hash FROM memories WHERE repo_id = ? AND tree_hash = ?
					  ORDER BY depth ASC, commit_date_ms DESC LIMIT 1`).get(n,e)?.commit_hash??null,null)}async findHashesByPrefix(e){return/^[0-9a-f]+$/.test(e)?this.withDbOrAbsent((r,n)=>r.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND commit_hash LIKE ? || '%'").all(n,e).map(i=>i.commit_hash),[]):[]}async listHeadEntries(e){return this.withDbOrAbsent((r,n)=>r.prepare(`SELECT commit_hash, tree_hash, commit_type, commit_message, commit_date, branch, generated_at
					   FROM memories WHERE repo_id = ? AND parent_hash IS NULL${e!==void 0?" AND branch = ?":""}`).all(...e!==void 0?[n,e]:[n]).map(i=>({commitHash:i.commit_hash,parentCommitHash:null,...i.tree_hash!==null?{treeHash:i.tree_hash}:{},...i.commit_type!==null?{commitType:i.commit_type}:{},commitMessage:i.commit_message??"",commitDate:i.commit_date??"",branch:i.branch??"",generatedAt:i.generated_at??""})),[])}async topicTitlesByHash(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare("SELECT commit_hash, title FROM memory_topics WHERE repo_id = ? ORDER BY commit_hash, pos").all(r),o=new Map;for(let i of n){let s=o.get(i.commit_hash)??[];s.push(i.title),o.set(i.commit_hash,s)}return o},new Map)}async listTopicSearchRows(){return this.withDbOrAbsent((e,r)=>{let n=e.prepare(`SELECT stable_slug, title, summary, content_md, related_branches_json, last_updated_at
					   FROM topic_pages WHERE repo_id = ?`).all(r),o=e.prepare("SELECT stable_slug, ref_type FROM topic_source_refs WHERE repo_id = ? ORDER BY pos").all(r),i=new Map;for(let s of o){let a=i.get(s.stable_slug)??[];a.push(s.ref_type),i.set(s.stable_slug,a)}return n.map(s=>({stableSlug:s.stable_slug,title:s.title,summary:s.summary,content:s.content_md,relatedBranches:JSON.parse(s.related_branches_json),lastUpdatedAt:s.last_updated_at,refTypes:i.get(s.stable_slug)??[]}))},[])}async listRootSummaries(){return this.withDbOrAbsent((e,r)=>e.prepare("SELECT commit_hash FROM memories WHERE repo_id = ? AND parent_hash IS NULL").all(r).map(o=>this.readOne(e,r,`summaries/${o.commit_hash}.json`)).filter(o=>o!==null).map(o=>JSON.parse(o)),[])}async exists(){try{return await this.withDb(()=>!0)}catch{return!1}}async ensure(){throw new Error("SqliteStorage cannot create its database: opening it runs the migrations already")}};var Wi=3e3,wn=new Map;async function Rn(t){let e=Date.now(),r=wn.get(t);if(r&&e-r.at<Wi)return r.route;let n=await Et(t);return wn.set(t,{route:n,at:e}),n}async function xn(t,e,r){if(r.state==="legacy-fenced"||r.state==="cutover"){let{identity:n}=await he(e);return new Pe(n)}return new Q(t)}async function An(t){let e=t??process.cwd(),r=await Rn(e);if(r.state==="blocked")throw new Error(`storage unavailable: ${r.reason} \u2014 this repo's orphan branch is frozen (cutover), so the system of record cannot fall back to it; run 'jolli doctor --recover' or upgrade this surface`);return xn(t,e,r)}async function mn(t){let e=t??process.cwd(),r;try{r=await Rn(e)}catch(n){return{ok:!1,reason:n.message}}if(r.state==="blocked")return{ok:!1,reason:r.reason};try{return{ok:!0,state:r.state,storage:await xn(t,e,r)}}catch(n){return{ok:!1,reason:n.message}}}h();$();function Bi(t){return[`1) Re-authenticate ${Ie(t)}:  ${cn(t)}`,"2) Or switch the provider:   jolli configure --set aiProvider=anthropic --set apiKey=sk-ant-\u2026","                             (or --set aiProvider=jolli to use Jolli)"]}function Gi(t,e){let r=dn(t);return r===null?[]:[`${e}${r}`]}function Cn(t){return[`[Jolli Memory] Memory generation failed for a recent commit: ${Ie(t)} authentication expired or is unavailable.`,...Gi(t,""),"\u2192 Fix with either:",...Bi(t).map(e=>`    ${e}`),"This message clears automatically once memory generation succeeds again."].join(`
`)}function vn(){return new Promise((t,e)=>{let r=[];process.stdin.setEncoding("utf-8"),process.stdin.on("data",n=>r.push(n)),process.stdin.on("end",()=>{process.stdin.destroy(),t(r.join(""))}),process.stdin.on("error",e)})}var v=p("SessionStartHook"),Ki=new Set(["main","master","develop","development","staging","production"]),xt=500,Dn="login-reminder-dismissed";function qi(t){let e=t==="claude-plugin"?"Run /jolli:init to finish setup.":t==="codex-plugin"?"Run $jolli:init to finish setup.":null;return e===null?null:["[Jolli Memory] Memory generation is not configured for this repository.",`\u2192 ${e}`,`(To stop this reminder, create an empty file at .jolli/jollimemory/${Dn}.)`].join(`
`)}function In(t,e,r){return e||r?null:qi(t)}async function Ji(t,e){let r=it(t);if(r===void 0||e.aiProvider!==void 0)return!1;try{return await nt(o=>o.aiProvider===void 0?{update:{aiProvider:"local-agent",localAgentTool:r},result:!0}:{update:null,result:!1})?(v.info("Seeded default aiProvider=local-agent tool=%s for the %s surface",r,t),!0):(v.info("Skipped seeding the %s default \u2014 another writer set aiProvider first",t),!1)}catch(n){return v.info("Failed to seed default local-agent provider: %s",n.message),!1}}async function Ln(t,e=Me()){let r=await ot(),n=Vt(r),o=(0,k.join)(t,".jolli","jollimemory",Dn),i=(0,x.existsSync)(o);if(n&&i)try{(0,x.rmSync)(o)}catch{}return In(e,n,i)}async function Pn(t,e){return(await An(e)).readFile(`summaries/${t}.json`)}async function Xi(t,e){try{let r=await Pn(t,e);return r?ln(JSON.parse(r)):!1}catch(r){return v.info("Failed to check auth-failure state for %s: %s",t.substring(0,8),r.message),!1}}async function On(t,e=Me()){let r=it(e);if(r===void 0)return null;let n=$n(t);if(!n)return null;let o=await Le(t);if(!o)return null;let i=o.entries.filter(l=>l.branch===n&&(l.parentCommitHash===null||l.parentCommitHash===void 0));if(i.length===0)return null;let s=[...i].sort((l,c)=>new Date(P(c)).getTime()-new Date(P(l)).getTime())[0];if(!await Xi(s.commitHash,t))return null;let a=await ot();return Cn(a.localAgentTool??r)}async function Mn(){if(Dt()){v.info("SessionStart hook skipped \u2014 running inside a jollimemory-spawned local agent");return}try{let t=await vn(),{cwd:e}=JSON.parse(t),r=Kt(e??process.cwd());if(Ht(r),v.info("SessionStartHook invoked (cwd=%s)",r),await Fr(r)){v.info("SessionStart hook skipped \u2014 repository manually disabled");return}let n=await Fn(r,"shared",{includeBriefing:!0,includePluginReminders:!1});n?process.stdout.write(n):v.info("No briefing or reminder generated (skipped or timed out)")}catch(t){v.info("SessionStartHook failed: %s",t.message)}}async function Fn(t,e,r={}){let n=r.includeBriefing!==!1,o=r.includePluginReminders!==!1,[i,s,a]=await Promise.all([n?Promise.race([Yi(t,e),At(xt)]):Promise.resolve(null),o?Promise.race([On(t,e),At(xt)]):Promise.resolve(null),o?Promise.race([Ln(t,e),At(xt)]):Promise.resolve(null)]),l=[s,a,i].filter(c=>!!c);return l.length===0?null:(v.info("SessionStart output (%d sections)",l.length),l.join(`

`))}async function Yi(t,e){let r=$n(t);if(!r||Ki.has(r))return null;let n=ts(t,r,e);if(n)return n;let o=await Le(t);if(!o)return null;let i=o.entries.filter(S=>S.branch===r&&(S.parentCommitHash===null||S.parentCommitHash===void 0));if(i.length===0)return null;let s=[...i].sort((S,T)=>new Date(P(T)).getTime()-new Date(P(S)).getTime()),a=s[0],l=s[s.length-1];if(s.length===1&&ns(P(a)))return null;let c=await Vi(a.commitHash,t),u=zi(t,r),d=Qi(s),f=Zi(r,s,a,l,c,u,d,e),_=Un(t);return rs(t,r,_??a.commitHash,f,e),f}async function Vi(t,e){try{let r=await Pn(t,e);if(!r)return{lastTopicTitle:null,keyDecisions:[]};let n=JSON.parse(r),o=Ee(n),i=o.length>0?o[o.length-1].title:null,s=[];for(let a of o)a.decisions&&a.decisions.trim().length>0&&s.push(a.decisions);return{lastTopicTitle:i,keyDecisions:s}}catch(r){return v.info("Failed to load last summary: %s",r.message),{lastTopicTitle:null,keyDecisions:[]}}}function zi(t,e){try{let r=(0,k.join)(t,".jolli","jollimemory","plans.json");if(!(0,x.existsSync)(r))return[];let n=JSON.parse((0,x.readFileSync)(r,"utf-8")),o=Ir(n).registry,i=[];for(let s of Object.values(o.plans))!s.commitHash&&s.title&&i.push(s.title);return i}catch{return[]}}function Qi(t){let e=0,r=0,n=0,o=!1;for(let i of t)i.diffStats&&(e+=i.diffStats.filesChanged,r+=i.diffStats.insertions,n+=i.diffStats.deletions,o=!0);return o?{filesChanged:e,insertions:r,deletions:n}:null}function Zi(t,e,r,n,o,i,s,a){let l=e.length,c=kn(P(n)),u=kn(P(r)),d=os(P(r),new Date().toISOString()),f=[];f.push(`[Jolli Memory \u2014 ${t}]`);let _=`${l} commits (${c} ~ ${u})`;s&&(_+=` | ${s.filesChanged} files, +${s.insertions} -${s.deletions}`),f.push(_);let S=o.lastTopicTitle??r.commitMessage;if(f.push(`Last: ${S} (${u})`),o.keyDecisions.length>0){let y=es(o.keyDecisions);f.push(`Decisions: ${y}`)}i.length>0&&f.push(`Plans: ${i.join("; ")}`);let T=Hn(d,a);return T&&f.push(T),f.join(`
`)}function Hn(t,e){if(t<=0)return null;let r=e==="claude-plugin"?"/jolli:recall":e==="codex-plugin"?"$jolli:recall":"`jolli recall`";return t>3?`Warning: ${t} days since last commit. Run ${r} for full context.`:`Tip: run ${r} for full context`}function es(t){let r=[],n=0;for(let o of t){let i=o.replace(/[.;]\s*$/,"").trim();if(i.length>200&&(i=`${i.slice(0,199)}\u2026`),n+i.length>200&&r.length>0)break;r.push(i),n+=i.length+2}return r.join("; ")}function jn(t){return(0,k.join)(t,".jolli","jollimemory","briefing-cache.json")}function ts(t,e,r){let n=jn(t);if(!(0,x.existsSync)(n))return null;try{let o=JSON.parse((0,x.readFileSync)(n,"utf-8"));if(o.branch!==e||o.clientKind!==r)return null;let i=Un(t);return!i||o.lastCommitHash!==i?null:o.briefingText}catch{return null}}function rs(t,e,r,n,o){let i=jn(t),s={branch:e,lastCommitHash:r,briefingText:n,clientKind:o,generatedAt:new Date().toISOString()};try{let a=(0,k.dirname)(i);(0,x.existsSync)(a)||(0,x.mkdirSync)(a,{recursive:!0}),(0,x.writeFileSync)(i,JSON.stringify(s,null,"	"),"utf-8")}catch{}}function Un(t){try{return U("git",["rev-parse","HEAD"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function $n(t){try{return U("git",["branch","--show-current"],{encoding:"utf-8",cwd:t}).trim()||null}catch{return null}}function At(t){return new Promise(e=>{setTimeout(()=>e(null),t).unref()})}function ns(t){let e=new Date(t),r=new Date;return e.getFullYear()===r.getFullYear()&&e.getMonth()===r.getMonth()&&e.getDate()===r.getDate()}function os(t,e){let r=new Date(t).getTime(),n=new Date(e).getTime();return Math.floor(Math.abs(n-r)/(1e3*60*60*24))}function kn(t){return t?t.split("T")[0]:"unknown"}function is(){let t=process.argv[1];if(process.env.VITEST||!t||(0,k.resolve)(t)!==(0,k.resolve)((0,Nn.fileURLToPath)(__jmImportMetaUrl)))return!1;let e=(0,k.basename)(t).toLowerCase();return e==="sessionstarthook.js"||e==="sessionstarthook.ts"}is()&&Mn();0&&(module.exports={buildSessionStartContext,computeLoginReminder,ensurePluginDefaultProvider,formatRecallSuggestion,getAuthFailureReminder,getLoginReminder,main});
